import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    // Set size to match container
    const container = document.getElementById('galaxy-canvas');
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Camera position
    camera.position.z = 100;
    
    // Add controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    
    // Galaxy parameters
    const params = {
      count: 25000,
      size: 0.05,
      radius: 40,
      branches: 5,
      spin: 1,
      randomness: 0.2,
      randomnessPower: 3,
      insideColor: '#ff6030',
      outsideColor: '#1b3984',
      centralBulgeSize: 5,
      centralBulgeCount: 5000
    };
    
    // Variables
    let galaxy = null;
    let centralBulge = null;
    
    // Generate the galaxy
    const generateGalaxy = () => {
      // Dispose old galaxy
      if (galaxy !== null) {
        galaxy.geometry.dispose();
        galaxy.material.dispose();
        scene.remove(galaxy);
      }
      
      if (centralBulge !== null) {
        centralBulge.geometry.dispose();
        centralBulge.material.dispose();
        scene.remove(centralBulge);
      }
      
      // Spiral arms geometry
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(params.count * 3);
      const colors = new Float32Array(params.count * 3);
      
      const insideColor = new THREE.Color(params.insideColor);
      const outsideColor = new THREE.Color(params.outsideColor);
      
      // Create spiral arms
      for (let i = 0; i < params.count; i++) {
        const i3 = i * 3;
        
        // Position
        const radius = Math.random() * params.radius;
        const spinAngle = radius * params.spin;
        const branchAngle = (i % params.branches) / params.branches * Math.PI * 2;
        
        const randomX = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * params.randomness * radius;
        const randomY = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * params.randomness * radius;
        const randomZ = Math.pow(Math.random(), params.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * params.randomness * radius;
        
        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
        
        // Color
        const mixedColor = insideColor.clone();
        mixedColor.lerp(outsideColor, radius / params.radius);
        
        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      // Material
      const material = new THREE.PointsMaterial({
        size: params.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      });
      
      // Points
      galaxy = new THREE.Points(geometry, material);
      scene.add(galaxy);
      
      // Create central bulge
      const bulgeGeometry = new THREE.BufferGeometry();
      const bulgePositions = new Float32Array(params.centralBulgeCount * 3);
      const bulgeColors = new Float32Array(params.centralBulgeCount * 3);
      
      for (let i = 0; i < params.centralBulgeCount; i++) {
        const i3 = i * 3;
        
        // Create a sphere of stars for the central bulge
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = Math.random() * params.centralBulgeSize;
        
        bulgePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
        bulgePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        bulgePositions[i3 + 2] = radius * Math.cos(phi);
        
        // Color (more yellowish for the bulge)
        bulgeColors[i3] = 1.0;     // R
        bulgeColors[i3 + 1] = 0.8; // G
        bulgeColors[i3 + 2] = 0.5; // B
      }
      
      bulgeGeometry.setAttribute('position', new THREE.BufferAttribute(bulgePositions, 3));
      bulgeGeometry.setAttribute('color', new THREE.BufferAttribute(bulgeColors, 3));
      
      const bulgeMaterial = new THREE.PointsMaterial({
        size: params.size * 1.5,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      });
      
      centralBulge = new THREE.Points(bulgeGeometry, bulgeMaterial);
      scene.add(centralBulge);
    };
    
    generateGalaxy();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.updateProjectionMatrix();
    });
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div id="galaxy-canvas"></div>
<div className="container">
<div className="hero">
<h1 className="heading fade-in">Explore the Cosmic Frontier</h1>
<p className="subheading fade-in delay-1">Journey through the spiral arms of our galaxy and discover the wonders that lie beyond the stars.</p>
<div className="cta-group fade-in delay-2">
<button className="btn btn-primary">Start Exploration</button>
<button className="btn btn-secondary">Learn More</button>
</div>
<div className="features fade-in delay-3">
<div className="feature-card">
<div className="feature-icon">✧</div>
<h3 className="feature-title">Interactive Simulation</h3>
<p className="feature-desc">Manipulate galaxy parameters in real-time and see how cosmic structures form and evolve.</p>
</div>
<div className="feature-card">
<div className="feature-icon">◎</div>
<h3 className="feature-title">Astronomical Data</h3>
<p className="feature-desc">Access detailed information about celestial objects based on the latest scientific research.</p>
</div>
<div className="feature-card">
<div className="feature-icon">⊹</div>
<h3 className="feature-title">Virtual Tours</h3>
<p className="feature-desc">Embark on guided journeys through star clusters, nebulae, and distant galaxies.</p>
</div>
</div>
</div>
</div>


    </>
  );
}
