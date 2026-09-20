import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Sparkles } from 'lucide-react';

export default function ThreeBridgeCanvas({ className = "w-full h-full" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 4.5, 22);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Bridge Geometry (2800 particles)
    const particleCount = 2800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorLeft = new THREE.Color('#68705A');    // Moss
    const colorCenter = new THREE.Color('#A8B09A');  // Sage
    const colorRight = new THREE.Color('#D96C4A');   // Terracotta

    let idx = 0;
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const x = (u - 0.5) * 32;

      // Parabolic arch for Y
      const arch = (1 - (x / 16) * (x / 16)) * 4.8;
      const y = arch + (Math.random() - 0.5) * 2.4;
      const z = (Math.random() - 0.5) * 6 + Math.sin(x * 0.25) * 1.8;

      positions[idx] = x;
      positions[idx + 1] = y;
      positions[idx + 2] = z;

      // Color gradation
      const t = (x + 16) / 32;
      const mixedColor = new THREE.Color();
      if (t < 0.5) {
        mixedColor.lerpColors(colorLeft, colorCenter, t * 2);
      } else {
        mixedColor.lerpColors(colorCenter, colorRight, (t - 0.5) * 2);
      }

      colors[idx] = mixedColor.r;
      colors[idx + 1] = mixedColor.g;
      colors[idx + 2] = mixedColor.b;

      idx += 3;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const material = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Glowing Arch Curves
    const curvePoints = [];
    for (let x = -16; x <= 16; x += 0.8) {
      const arch = (1 - (x / 16) * (x / 16)) * 4.8;
      curvePoints.push(new THREE.Vector3(x, arch, 0));
    }
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(120));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xD96C4A,
      transparent: true,
      opacity: 0.5,
    });
    const bridgeLine = new THREE.Line(lineGeo, lineMat);
    scene.add(bridgeLine);

    // Mouse & Touch Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left - rect.width / 2;
      const y = clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 2;
      targetY = -(y / rect.height) * 2;
    };

    const onMouseMove = (e) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('touchmove', onTouchMove, { passive: true });

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      camera.position.x = mouseX * 4.5;
      camera.position.y = 4.5 + mouseY * 2.2;
      camera.lookAt(0, 2.6, 0);

      // Undulating wave flow through particles
      const posArray = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = posArray[i3];
        posArray[i3 + 1] += Math.sin(elapsedTime * 2.2 + x * 0.4) * 0.007;
      }
      geometry.attributes.position.needsUpdate = true;

      // Gentle continuous rotation
      particleSystem.rotation.y = Math.sin(elapsedTime * 0.2) * 0.09;

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('touchmove', onTouchMove);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative ${className} overflow-hidden pointer-events-auto select-none touch-pan-y`}>
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {/* Clean, Premium Interactive Badge */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none bg-[#25283D]/90 px-4 py-1.5 rounded-full border border-[#68705A] shadow-lg backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-[#D96C4A] animate-pulse" />
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#F3EFE6]">
          Interactive 3D Bridge • Move or swipe to explore
        </span>
      </div>
    </div>
  );
}
