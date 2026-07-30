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



        // Initialize Three.js scene
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
        
        // Create geometry
        const geometry = new THREE.IcosahedronGeometry(1, 1);
        const wireframe = new THREE.WireframeGeometry(geometry);
        const material = new THREE.LineBasicMaterial({ 
            color: 0x00ffff,
            transparent: true,
            opacity: 0.8
        });
        
        const icosahedron = new THREE.LineSegments(wireframe, material);
        scene.add(icosahedron);
        
        // Add some particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particleCount = 100;
        const posArray = new Float32Array(particleCount * 3);
        
        for(let i = 0; i < particleCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 5;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            color: 0x00ffff
        });
        
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        
        camera.position.z = 3;
        
        // Make it interactive - rotate on mouse move
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            
            icosahedron.rotation.x += 0.003;
            icosahedron.rotation.y += 0.005;
            
            // Interactive rotation based on mouse position
            icosahedron.rotation.x += mouseY * 0.01;
            icosahedron.rotation.y += mouseX * 0.01;
            
            particlesMesh.rotation.x += 0.002;
            particlesMesh.rotation.y += 0.001;
            
            renderer.render(scene, camera);
        }
        
        animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });
    
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
      
<div className="container mx-auto px-4 py-8 max-w-6xl">

<header className="flex justify-between items-center mb-16">
<div className="flex items-center">
<h1 className="text-2xl font-bold">Nexus<span className="text-cyan-400">Tech</span></h1>
</div>
<nav className="hidden md:block">
<ul className="flex space-x-8">
<li><a className="hover:text-cyan-400 transition" href="#">Home</a></li>
<li><a className="hover:text-cyan-400 transition" href="#">Features</a></li>
<li><a className="hover:text-cyan-400 transition" href="#">Solutions</a></li>
<li><a className="hover:text-cyan-400 transition" href="#">Contact</a></li>
</ul>
</nav>
<button className="md:hidden">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</header>

<section className="flex flex-col md:flex-row items-center mb-20">
<div className="md:w-1/2 mb-10 md:mb-0">
<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Innovation at the Speed of Thought</h2>
<p className="text-gray-300 mb-8 text-lg">Transform your business with our cutting-edge solutions. Stay ahead of the competition with next-generation technology.</p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<a className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg text-center transition" href="#">Get Started</a>
<a className="border border-white hover:border-cyan-400 hover:text-cyan-400 font-medium py-3 px-6 rounded-lg text-center transition" href="#">Learn More</a>
</div>
</div>
<div className="md:w-1/2">
<div className="shadow-lg shadow-cyan-500/20" id="canvas-container"></div>
</div>
</section>

<section className="mb-20">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold mb-4">Powerful Solutions</h2>
<p className="text-gray-300 max-w-2xl mx-auto">Our comprehensive platform offers everything you need to accelerate your digital transformation.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl hover:shadow-lg transition">
<div className="w-12 h-12 bg-cyan-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
<p className="text-gray-300">Experience unparalleled speed with our optimized infrastructure.</p>
</div>

<div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl hover:shadow-lg transition">
<div className="w-12 h-12 bg-cyan-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Ultra Secure</h3>
<p className="text-gray-300">Enterprise-grade security built into every layer of our platform.</p>
</div>

<div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl hover:shadow-lg transition">
<div className="w-12 h-12 bg-cyan-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-2">Customizable</h3>
<p className="text-gray-300">Tailor our solutions to fit your specific business requirements.</p>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl p-8 text-center mb-10">
<h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
<p className="text-lg mb-6 max-w-2xl mx-auto">Join thousands of companies that trust NexusTech for their technological needs.</p>
<a className="bg-white text-blue-800 font-medium py-3 px-8 rounded-lg inline-block hover:bg-gray-100 transition" href="#">Start Free Trial</a>
</section>
</div>


    </>
  );
}
