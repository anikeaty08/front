import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeSphere() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const segments = 48;
    const geometry = new THREE.SphereGeometry(1.5, segments, segments);

    const wireframeGeo = new THREE.WireframeGeometry(geometry);
    const lineMat = new THREE.LineBasicMaterial({ 
        color: 0xFF4500, 
        transparent: true, 
        opacity: 0.15,
        linewidth: 1 
    });
    const lines = new THREE.LineSegments(wireframeGeo, lineMat);
    scene.add(lines);

    const pointsMat = new THREE.PointsMaterial({ 
        color: 0xffffff, 
        size: 0.015, 
        transparent: true, 
        opacity: 0.5 
    });
    const points = new THREE.Points(geometry, pointsMat);
    scene.add(points);

    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / container.clientWidth - 0.5) * 2;
        mouseY = ((e.clientY - rect.top) / container.clientHeight - 0.5) * 2;
    };
    container.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
        lines.rotation.y += 0.0015 + (mouseX * 0.002);
        lines.rotation.x += 0.0005 + (mouseY * 0.002);
        points.rotation.y += 0.0015 + (mouseX * 0.002);
        points.rotation.x += 0.0005 + (mouseY * 0.002);
        
        renderer.render(scene, camera);
    };
    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
        container.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
        renderer.dispose();
        geometry.dispose();
        wireframeGeo.dispose();
        lineMat.dispose();
        pointsMat.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 opacity-90 mix-blend-screen pointer-events-none flex items-center justify-center scale-125">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}