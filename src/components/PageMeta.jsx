
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMetadata = {
  '/': {
    title: 'Skilluence Solutions | Build Your Profile. Find Your Direction. Get Job-Ready.',
    description: 'Affordable, practical and personalized career support, OPT/CPT job placement, resume development, and interview coaching for students, graduates, and job seekers.'
  },
  '/services': {
    title: 'Career Services & ATS Resume Optimization | Skilluence Solutions',
    description: 'Explore our modular career suite: ATS resume reconstruction, 1-on-1 STAR interview simulation drills, targeted recruiter outreach, and compensation negotiation.'
  },
  '/process': {
    title: 'Career Roadmap & Placement Methodology | Skilluence Solutions',
    description: 'Discover our systematic 6-stage operational career roadmap. A structured path taking international graduates from degree completion to verified US job offers.'
  },
  '/roadmap': {
    title: 'Career Roadmap & Placement Methodology | Skilluence Solutions',
    description: 'Discover our systematic 6-stage operational career roadmap. A structured path taking international graduates from degree completion to verified US job offers.'
  },
  '/pricing': {
    title: 'Transparent Pricing & Fee Schedule | Skilluence Solutions',
    description: 'Review our structured 3-stage enrollment model, 8% placement success fee, and candidate SLA refund protection. Transparent pricing aligned with candidate outcomes.'
  },
  '/testimonials': {
    title: 'Verified Candidate Testimonials & USA Placements | Skilluence Solutions',
    description: 'Read verified experiences from Indian graduates and career starters based across the United States who cleared interviews and transitioned with confidence.'
  },
  '/employers': {
    title: 'Enterprise Staffing & Pre-Vetted Talent Solutions | Skilluence Solutions',
    description: 'Partner with Skilluence Solutions to access pre-vetted international graduates and STEM OPT professionals across software, data science, and cloud architecture.'
  },
  '/about': {
    title: 'About Us & Career Advisory Ethos | Skilluence Solutions',
    description: 'Learn about Skilluence Solutions: our independent advisory philosophy, 4 foundational commitments, and dedicated career support for graduates and career starters.'
  },
  '/contact': {
    title: 'Contact Advisory Desk & Management | Skilluence Solutions',
    description: 'Get in touch with Skilluence Solutions. Contact our management team at manager@skilluencesolutions.com or submit a confidential career intake form.'
  }
};

const SITE_URL = 'https://skilluencesolutions.com';

function setMetaTag(selector, attribute, value) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    if (selector.startsWith('meta[name=')) {
      const name = selector.match(/meta\[name="([^"]+)"\]/)?.[1];
      if (name) el.setAttribute('name', name);
    } else if (selector.startsWith('meta[property=')) {
      const prop = selector.match(/meta\[property="([^"]+)"\]/)?.[1];
      if (prop) el.setAttribute('property', prop);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attribute, value);
}

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMetadata[pathname] || {
      title: 'Page Not Found | Skilluence Solutions',
      description: 'The requested page could not be found. Return to Skilluence Solutions home.'
    };

    // Update document title
    document.title = meta.title;

    // Update meta description
    setMetaTag('meta[name="description"]', 'content', meta.description);

    // Update canonical link
    const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    setMetaTag('meta[property="og:title"]', 'content', meta.title);
    setMetaTag('meta[property="og:description"]', 'content', meta.description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);

    // Update Twitter card tags
    setMetaTag('meta[name="twitter:title"]', 'content', meta.title);
    setMetaTag('meta[name="twitter:description"]', 'content', meta.description);
    setMetaTag('meta[name="twitter:url"]', 'content', canonicalUrl);
  }, [pathname]);

  return null;
}
