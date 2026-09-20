Add-Type -AssemblyName System.Drawing

$baseDir = "g:\skilluencesolutions\public\images"
$srcFavicon = Join-Path $baseDir "favicon.png"
$srcLogo = Join-Path $baseDir "logo.png"

# Helper to resize image
function Resize-Image($srcPath, $destPath, $newWidth, $newHeight) {
    $srcImg = [System.Drawing.Image]::FromFile($srcPath)
    $destImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($destImg)
    
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    $graphics.Clear([System.Drawing.Color]::Transparent)
    $graphics.DrawImage($srcImg, 0, 0, $newWidth, $newHeight)
    
    $destImg.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $graphics.Dispose()
    $destImg.Dispose()
    $srcImg.Dispose()
    Write-Output "Created: $destPath ($newWidth x $newHeight)"
}

# 1. Create resized favicons
Resize-Image $srcFavicon (Join-Path $baseDir "favicon-16.png") 16 16
Resize-Image $srcFavicon (Join-Path $baseDir "favicon-32.png") 32 32
Resize-Image $srcFavicon (Join-Path $baseDir "favicon-48.png") 48 48
Resize-Image $srcFavicon (Join-Path $baseDir "apple-touch-icon.png") 180 180

# Also create a small favicon-64.png and replace the huge 1.37MB favicon.png with an optimized 48x48 version
$tempOptimized = Join-Path $baseDir "favicon-optimized.png"
Resize-Image $srcFavicon $tempOptimized 64 64
Copy-Item -Path $tempOptimized -Destination $srcFavicon -Force
Remove-Item -Path $tempOptimized

# Also copy 32x32 to public/favicon.ico
$publicDir = "g:\skilluencesolutions\public"
Copy-Item -Path (Join-Path $baseDir "favicon-32.png") -Destination (Join-Path $publicDir "favicon.ico") -Force

# 2. Create high-resolution OG image (1200 x 630) with Salt & Pepper editorial branding
$ogWidth = 1200
$ogHeight = 630
$ogBitmap = New-Object System.Drawing.Bitmap($ogWidth, $ogHeight)
$ogG = [System.Drawing.Graphics]::FromImage($ogBitmap)

$ogG.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$ogG.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$ogG.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Background: Salt & Pepper #FFFFFF with subtle #F7F7F5 border and #D4D4D4 grid
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
$ogG.FillRectangle($bgBrush, 0, 0, $ogWidth, $ogHeight)

# Outer border
$borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 212, 212, 212), 2)
$ogG.DrawRectangle($borderPen, 24, 24, $ogWidth - 48, $ogHeight - 48)

# Subtle inner card container (#F7F7F5)
$innerBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 247, 247, 245))
$ogG.FillRectangle($innerBrush, 48, 48, $ogWidth - 96, $ogHeight - 96)
$innerPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 212, 212, 212), 1)
$ogG.DrawRectangle($innerPen, 48, 48, $ogWidth - 96, $ogHeight - 96)

# Draw Logo
if (Test-Path $srcLogo) {
    $logoImg = [System.Drawing.Image]::FromFile($srcLogo)
    # Calculate logo aspect ratio
    $logoH = 72
    $logoW = [int]($logoImg.Width * ($logoH / $logoImg.Height))
    $ogG.DrawImage($logoImg, 96, 96, $logoW, $logoH)
    $logoImg.Dispose()
}

# Fonts
$fontFamily = "Arial"
$titleFont = New-Object System.Drawing.Font($fontFamily, 44, [System.Drawing.FontStyle]::Bold)
$taglineFont = New-Object System.Drawing.Font($fontFamily, 22, [System.Drawing.FontStyle]::Regular)
$badgeFont = New-Object System.Drawing.Font($fontFamily, 12, [System.Drawing.FontStyle]::Bold)
$domainFont = New-Object System.Drawing.Font($fontFamily, 14, [System.Drawing.FontStyle]::Bold)

# Brushes
$inkBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 43, 43, 43))
$midGrayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 107, 107, 107))
$badgeBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
$badgePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 212, 212, 212), 1)

# Badge: CAREER ADVISORY • OPT/CPT • INTERVIEW PREPARATION
$ogG.FillRectangle($badgeBgBrush, 96, 204, 520, 32)
$ogG.DrawRectangle($badgePen, 96, 204, 520, 32)
$ogG.DrawString("CAREER ADVISORY  •  OPT/CPT PLACEMENT  •  INTERVIEW PREPARATION", $badgeFont, $inkBrush, 108, 212)

# Main Title
$ogG.DrawString("SKILLUENCE SOLUTIONS", $titleFont, $inkBrush, 92, 260)

# Tagline
$ogG.DrawString("Build Your Profile. Find Your Direction. Get Job-Ready.", $taglineFont, $inkBrush, 96, 335)

# Description text
$descFont = New-Object System.Drawing.Font($fontFamily, 16, [System.Drawing.FontStyle]::Regular)
$descText = "Independent, practical and structured career support for international students,`nfresh graduates, and professionals seeking verified placements nationwide."
$ogG.DrawString($descText, $descFont, $midGrayBrush, 96, 385)

# Bottom bar inside card
$botPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 212, 212, 212), 1)
$ogG.DrawLine($botPen, 96, 510, $ogWidth - 96, 510)
$ogG.DrawString("skilluencesolutions.com", $domainFont, $inkBrush, 96, 525)
$ogG.DrawString("CONNECTED WITH 1,000+ RECRUITERS & HIRING MANAGERS", $badgeFont, $midGrayBrush, 680, 528)

$ogDest = Join-Path $baseDir "og-image.png"
$ogBitmap.Save($ogDest, [System.Drawing.Imaging.ImageFormat]::Png)

$ogG.Dispose()
$ogBitmap.Dispose()
Write-Output "Created OG Image: $ogDest (1200 x 630)"
