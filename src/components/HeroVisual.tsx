import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroVisualProps {
  mouseX?: number;
  mouseY?: number;
}

export const HeroVisual: React.FC<HeroVisualProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all rotating elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Geodesic Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x222222,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 2. Mid Octahedron with Accent Vertices
    const midGeo = new THREE.OctahedronGeometry(1.1, 1);
    const midMat = new THREE.MeshBasicMaterial({
      color: 0x444444,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const midMesh = new THREE.Mesh(midGeo, midMat);
    mainGroup.add(midMesh);

    // 3. Glowing Accent Points at Vertices (Lime #C8FF00)
    const pointsGeo = new THREE.IcosahedronGeometry(1.62, 1);
    const pointsMat = new THREE.PointsMaterial({
      color: 0xC8FF00,
      size: 0.04,
      transparent: true,
      opacity: 0.85
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    mainGroup.add(pointsMesh);

    // 4. Subtle Inner Core Ring / Orbital
    const ringGeo = new THREE.TorusGeometry(0.7, 0.006, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xC8FF00,
      transparent: true,
      opacity: 0.5
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 4;
    mainGroup.add(ring2);

    // 5. Subtle Technical Lat-Long Rings
    const orbitRingGeo = new THREE.RingGeometry(2.1, 2.11, 64);
    const orbitRingMat = new THREE.MeshBasicMaterial({
      color: 0x1F1F1F,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6
    });
    const orbitRing = new THREE.Mesh(orbitRingGeo, orbitRingMat);
    orbitRing.rotation.x = Math.PI / 2.2;
    mainGroup.add(orbitRing);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = -(e.clientY / innerHeight) * 2 + 1;
      mouseRef.current.targetX = x * 0.4;
      mouseRef.current.targetY = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize handler with ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Base slow rotations
      mainGroup.rotation.y += delta * 0.15;
      mainGroup.rotation.x = mouseRef.current.y * 0.6 + Math.sin(elapsedTime * 0.2) * 0.05;
      mainGroup.rotation.z = mouseRef.current.x * 0.6;

      // Secondary counter-rotations
      midMesh.rotation.y -= delta * 0.25;
      ring1.rotation.z += delta * 0.2;
      ring2.rotation.z -= delta * 0.18;

      // Subtle pulse of points opacity
      pointsMat.opacity = 0.65 + Math.sin(elapsedTime * 1.5) * 0.25;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      // Dispose geometries & materials
      outerGeo.dispose();
      outerMat.dispose();
      midGeo.dispose();
      midMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      orbitRingGeo.dispose();
      orbitRingMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-3d-visual"
      className="w-full h-full relative flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Subtle coordinate crosshair markers for engineering aesthetic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[#C8FF00] to-transparent" />
        <div className="h-[300px] w-[1px] bg-gradient-to-b from-transparent via-[#C8FF00] to-transparent absolute" />
      </div>
      <div className="absolute bottom-4 left-4 font-mono-code text-[9px] text-[#A0A0A0]/40 tracking-widest uppercase">
        SYS.GEOMETRY // 3D_WIREFRAME_NODE
      </div>
    </div>
  );
};
