import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    {
      "imports": {
        "three": "https://unpkg.com/three@0.152.2/build/three.module.js",
        "three/addons/": "https://unpkg.com/three@0.152.2/examples/jsm/"
      }
    }
  


    import * as THREE from 'three';
    
    // Initialize scene
    const scene = new THREE.Scene();
    const canvas = document.getElementById('globe');
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create globe
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Create point material for stars
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x3366ff,
      size: 0.02,
      transparent: true,
      opacity: 0.8,
    });
    
    // Create points for the sphere
    const points = new THREE.Points(sphereGeometry, pointsMaterial);
    scene.add(points);
    
    // Add markers for key locations
    const markerPositions = [
      { lat: 37.7749, lng: -122.4194, size: 0.08 }, // San Francisco
      { lat: 40.7128, lng: -74.0060, size: 0.08 },  // New York
      { lat: 51.5074, lng: -0.1278, size: 0.08 },   // London
      { lat: 35.6762, lng: 139.6503, size: 0.08 },  // Tokyo
      { lat: -33.8688, lng: 151.2093, size: 0.08 }, // Sydney
    ];
    
    // Convert lat/lng to 3D position
    function latLngToVector3(lat, lng, radius) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      
      const x = -radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      
      return new THREE.Vector3(x, y, z);
    }
    
    // Add markers
    markerPositions.forEach(marker => {
      const markerGeometry = new THREE.SphereGeometry(marker.size, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xff66cc,
        transparent: true,
        opacity: 0.8
      });
      const markerMesh = new THREE.Mesh(markerGeometry, markerMaterial);
      const position = latLngToVector3(marker.lat, marker.lng, 2);
      markerMesh.position.set(position.x, position.y, position.z);
      scene.add(markerMesh);
    });
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);
    
    // Make globe interactive
    let rotationSpeed = 0.001;
    let mouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    
    // Mouse events for interactivity
    canvas.addEventListener('mousedown', (e) => {
      mouseDown = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    canvas.addEventListener('mouseup', () => {
      mouseDown = false;
    });
    
    canvas.addEventListener('mousemove', (e) => {
      if (mouseDown) {
        const deltaX = e.clientX - mouseX;
        const deltaY = e.clientY - mouseY;
        
        points.rotation.y += deltaX * 0.005;
        points.rotation.x += deltaY * 0.005;
        
        // Update all markers to match globe rotation
        scene.children.forEach(child => {
          if (child instanceof THREE.Mesh) {
            child.rotation.y += deltaX * 0.005;
            child.rotation.x += deltaY * 0.005;
          }
        });
        
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
    });
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      
      if (!mouseDown) {
        points.rotation.y += rotationSpeed;
        
        // Rotate all markers
        scene.children.forEach(child => {
          if (child instanceof THREE.Mesh) {
            child.rotation.y += rotationSpeed;
          }
        });
      }
      
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight">Your Name</span>
</div>
<div className="hidden md:flex space-x-10 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#skills">Skills</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div>
<a className="text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all" href="#contact">
          Get in Touch
        </a>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
<div className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-black z-0"></div>
<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
<div className="flex flex-col md:flex-row items-center">
<div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6 leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Creating</span> digital experiences worldwide
          </h1>
<p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-lg font-extralight tracking-wide">
            Full-stack developer specializing in building immersive, responsive web applications that connect people across the globe.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-white text-black font-light rounded-md px-6 py-3 hover:bg-opacity-90 transition-all text-center" href="#projects">
              View my work
            </a>
<a className="bg-transparent border border-gray-700 rounded-md px-6 py-3 hover:bg-white/5 transition-all text-center" href="#contact">
              Contact me
            </a>
</div>
</div>
<div className="md:w-1/2 relative">
<div className="relative h-[400px] w-[400px] mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<canvas className="relative z-10" height="800" id="globe" style={{width: '400px', height: '400px'}} width="800"></canvas>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-16"></div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div>
<p className="text-4xl font-light mb-1 tracking-tight">Frontend</p>
<p className="text-gray-400 font-extralight">React, Vue, TailwindCSS</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">Backend</p>
<p className="text-gray-400 font-extralight">Node.js, Express, MongoDB</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">UX/UI</p>
<p className="text-gray-400 font-extralight">Figma, Responsive Design</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">DevOps</p>
<p className="text-gray-400 font-extralight">AWS, CI/CD, Docker</p>
</div>
</div>
</div>
</div>



    </>
  );
}
