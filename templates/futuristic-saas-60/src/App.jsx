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



        const container = document.getElementById('canvas-container');

        // Scene Setup
        const scene = new THREE.Scene();
        // Matching the background color for seamless blending
        scene.fog = new THREE.FogExp2(0x050505, 0.035); 

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
        container.appendChild(renderer.domElement);

        // --- Core Sphere (Particles) ---
        const geometry = new THREE.SphereGeometry(14, 96, 96); 
        
        const material = new THREE.PointsMaterial({
            size: 0.06,
            color: 0x66ccff, // Cyan/Blue
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });

        const sphere = new THREE.Points(geometry, material);
        scene.add(sphere);

        // --- Outer Aura (Wireframe) ---
        const auraGeometry = new THREE.SphereGeometry(16, 48, 48);
        const auraMaterial = new THREE.MeshBasicMaterial({
            color: 0x3b82f6, // Slightly darker blue
            transparent: true,
            opacity: 0.03,
            wireframe: true,
            side: THREE.DoubleSide
        });
        const aura = new THREE.Mesh(auraGeometry, auraMaterial);
        scene.add(aura);

        // --- Floating Particles (Stars/Dust) ---
        const starGeo = new THREE.BufferGeometry();
        const starCount = 800;
        const posArray = new Float32Array(starCount * 3);
        
        for(let i = 0; i < starCount * 3; i++) {
            // Spread particles around the sphere
            posArray[i] = (Math.random() - 0.5) * 60; 
        }
        
        starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const starMat = new THREE.PointsMaterial({
            size: 0.04,
            color: 0xffffff,
            transparent: true,
            opacity: 0.2,
            blending: THREE.AdditiveBlending
        });
        const starMesh = new THREE.Points(starGeo, starMat);
        scene.add(starMesh);


        // Camera Positioning
        camera.position.z = 24;

        // Mouse Interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        });

        // Animation Loop
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            targetX = mouseX * 0.0008; // Dampened sensitivity
            targetY = mouseY * 0.0008;

            // Sphere Rotation
            sphere.rotation.y += 0.003;
            sphere.rotation.x += 0.001;
            
            // Aura Rotation (Opposite direction)
            aura.rotation.y -= 0.002;
            aura.rotation.z += 0.001;

            // Background Stars Rotation (Very Slow)
            starMesh.rotation.y += 0.0005;

            // Interactive rotation smoothing
            sphere.rotation.y += 0.03 * (targetX - sphere.rotation.y);
            sphere.rotation.x += 0.03 * (targetY - sphere.rotation.x);
            aura.rotation.x += 0.02 * (targetY - aura.rotation.x);

            // Pulse Effect
            const scale = 1 + Math.sin(elapsedTime * 0.8) * 0.03;
            sphere.scale.set(scale, scale, scale);
            
            // Subtle aura breathing
            const auraScale = 1 + Math.cos(elapsedTime * 0.5) * 0.01;
            aura.scale.set(auraScale, auraScale, auraScale);

            renderer.render(scene, camera);
        }

        animate();

        // Responsive Resizing
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
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
      

<div className="absolute inset-0 z-0 w-full h-full" id="canvas-container"></div>

<div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_120%)] opacity-80 mix-blend-multiply"></div>
<div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

<div className="absolute inset-0 z-20 flex flex-col pointer-events-none">

<header className="w-full px-6 py-5 flex items-center justify-between pointer-events-auto">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
<span className="iconify text-cyan-400" data-icon="lucide:aperture" data-width="18"></span>
</div>
<span className="font-medium tracking-tight text-white/90">Nexus</span>
</div>
<nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
<a className="px-4 py-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5" href="#">Product</a>
<a className="px-4 py-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5" href="#">Solutions</a>
<a className="px-4 py-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5" href="#">Developers</a>
<a className="px-4 py-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/5" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-white/60 hover:text-white transition-colors" href="#">Sign in</a>
<button className="px-3 py-1.5 rounded-md bg-white text-black text-xs font-medium hover:bg-gray-200 transition-colors">Get Started</button>
</div>
</header>

<main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 relative">

<div className="max-w-4xl w-full text-center space-y-8 pointer-events-auto">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 animate-fade-in opacity-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs font-medium tracking-wide uppercase">Core v2.4 Available</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/50 animate-fade-in opacity-0 delay-100 pb-2">
                    Intelligence <br/>
<span className="font-instrument-serif italic font-normal text-white/80">at scale.</span>
</h1>

<p className="text-lg md:text-xl text-white/50 font-light max-w-xl mx-auto leading-relaxed animate-fade-in opacity-0 delay-200">
                    Deploy global particle simulations with zero latency. The infrastructure for the next generation of spatial computing.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0 delay-300">
<button className="group relative px-6 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-all flex items-center gap-2">
                        Start Building
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="group px-6 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all backdrop-blur-sm flex items-center gap-2">
<span className="iconify text-white/60" data-icon="lucide:terminal" data-width="16"></span>
                        Documentation
                    </button>
</div>

<div className="mt-16 w-full max-w-md mx-auto animate-fade-in opacity-0 delay-300">
<div className="glass-panel rounded-xl overflow-hidden text-left">
<div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<span className="text-[10px] font-mono text-white/40">config.json</span>
</div>
<div className="p-4 font-mono text-xs text-white/70 overflow-x-auto">
<div className="flex"><span className="text-purple-400 mr-2">1</span><span className="text-cyan-400">"mode"</span>: <span className="text-emerald-400">"distributed"</span>,</div>
<div className="flex"><span className="text-purple-400 mr-2">2</span><span className="text-cyan-400">"particles"</span>: <span className="text-amber-400">1000000</span>,</div>
<div className="flex"><span className="text-purple-400 mr-2">3</span><span className="text-cyan-400">"latency"</span>: <span className="text-emerald-400">"&lt;1ms"</span>,</div>
<div className="flex"><span className="text-purple-400 mr-2">4</span><span className="text-cyan-400">"region"</span>: <span className="text-emerald-400">"global-edge"</span></div>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full px-6 py-6 flex items-center justify-between text-xs text-white/30 pointer-events-auto">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>Systems Operational</span>
</div>
<div className="hidden md:block font-mono">
                00:00:00:00
            </div>
</footer>
</div>



    </>
  );
}
