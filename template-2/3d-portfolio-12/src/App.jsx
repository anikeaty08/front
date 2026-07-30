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



        // Initialize Icons
        lucide.createIcons();

        // 3D Background Logic
        const initThreeJS = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            
            // Camera setup
            const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 30);

            // Renderer
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.2;
            container.appendChild(renderer.domElement);

            // --- LIGHTING ---
            const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Soft white light
            scene.add(ambientLight);

            // Main key light
            const spotLight = new THREE.SpotLight(0xffffff, 2);
            spotLight.position.set(10, 20, 20);
            spotLight.angle = 0.5;
            spotLight.penumbra = 0.5;
            spotLight.decay = 2;
            spotLight.distance = 100;
            scene.add(spotLight);

            // Rim light for the dark shape
            const rimLight = new THREE.PointLight(0x88ccff, 3, 50);
            rimLight.position.set(-20, 0, -10);
            scene.add(rimLight);

            // Bottom fill
            const fillLight = new THREE.DirectionalLight(0x333333, 1);
            fillLight.position.set(0, -10, 10);
            scene.add(fillLight);

            // --- SHAPE GENERATION (Solid Flowing Tube) ---
            
            // Base parameters for the curve
            const curvePoints = [];
            const numPoints = 8;
            const width = 60; // Spread across screen
            
            // Initialize points in a general line from left to right
            for(let i = 0; i < numPoints; i++) {
                const t = i / (numPoints - 1);
                const x = (t - 0.5) * width;
                curvePoints.push(new THREE.Vector3(x, 0, 0));
            }

            // Create initial path
            let curve = new THREE.CatmullRomCurve3(curvePoints);
            curve.tension = 0.5;

            // Material - Dark, sleek, somewhat metallic (resembling dark liquid or metal)
            const material = new THREE.MeshPhysicalMaterial({
                color: 0x111111,       // Very dark grey/black
                roughness: 0.35,       // Slightly glossy but not mirror
                metalness: 0.6,        // Metallic feel
                clearcoat: 0.8,        // Extra shiny layer
                clearcoatRoughness: 0.2,
                emissive: 0x000000
            });

            // Geometry setup
            let geometry = new THREE.TubeGeometry(curve, 100, 2.5, 32, false);
            const tubeMesh = new THREE.Mesh(geometry, material);
            scene.add(tubeMesh);

            // Mouse interaction variables
            let mouseX = 0;
            let mouseY = 0;
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;

            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX - windowHalfX) * 0.001;
                mouseY = (event.clientY - windowHalfY) * 0.001;
            });

            // --- ANIMATION LOOP ---
            const clock = new THREE.Clock();
            
            function animate() {
                requestAnimationFrame(animate);
                const time = clock.getElapsedTime();

                // 1. Animate Curve Points (The "Flow" effect)
                // We disturb the Y and Z coordinates of the points using sine waves
                for(let i = 0; i < numPoints; i++) {
                    const point = curvePoints[i];
                    // Calculate based on index to create a wave propagation effect
                    // "Comes from one side, goes to other" -> wave travels +x
                    
                    // Main large undulation
                    point.y = Math.sin(time * 0.8 + i * 0.8) * 6;
                    
                    // Secondary spiral twist
                    point.z = Math.cos(time * 0.6 + i * 0.5) * 6 + (Math.sin(time * 0.2) * 4);
                }

                // 2. Update Geometry
                // TubeGeometry path must be updated. We recreate geometry (optimized for low poly count like this)
                curve = new THREE.CatmullRomCurve3(curvePoints);
                curve.tension = 0.5;
                
                // Dispose old geometry to prevent memory leak
                tubeMesh.geometry.dispose();
                // Rebuild with new curve
                tubeMesh.geometry = new THREE.TubeGeometry(curve, 100, 2.5 + Math.sin(time)*0.2, 32, false);

                // 3. Subtle Rotation based on mouse
                tubeMesh.rotation.y += (mouseX - tubeMesh.rotation.y) * 0.05;
                tubeMesh.rotation.x += (mouseY - tubeMesh.rotation.x) * 0.05;

                // Continuous slow drift
                tubeMesh.rotation.z = Math.sin(time * 0.1) * 0.1;

                renderer.render(scene, camera);
            }

            animate();

            // Handle Resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            // Reveal canvas
            setTimeout(() => {
                container.classList.add('loaded');
            }, 100);
        };

        initThreeJS();
    
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
      


<div className="canvas-container fixed inset-0 z-0 pointer-events-none" id="canvas-container"><canvas height="1464" style={{display: `block`, width: `1030px`, height: `732px`}} width="2060"></canvas></div>

<div className="noise-overlay"></div>

<div className="z-10 flex flex-col md:p-12 w-full h-screen pt-6 pr-6 pb-6 pl-6 relative">

<header className="flex w-full mb-12 items-start justify-between">
<div className="flex items-center gap-3 group cursor-pointer">

<div className="relative w-8 h-8 md:w-10 md:h-10">
<div className="absolute inset-0 bg-neutral-800 transform rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-in-out border border-neutral-700"></div>
<div className="absolute inset-0 bg-lime-400/20 transform scale-50 group-hover:scale-100 transition-transform duration-500"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white tracking-wide">MANTIS</span>
<span className="uppercase text-xs text-neutral-500 tracking-widest">Studios</span>
</div>
</div>
<nav className="hidden md:flex gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#">Work</a>
<a className="hover:text-white transition-colors duration-300" href="#">Studio</a>
<a className="hover:text-white transition-colors duration-300" href="#">Contact</a>
</nav>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</header>

<main className="flex-grow grid grid-cols-1 md:grid-cols-12 gap-4 relative">

<div className="hidden md:flex col-span-1 flex-col justify-between items-center py-12 border-r border-neutral-900/50">
<div className="text-xs text-neutral-600 tracking-widest writing-vertical h-full flex justify-between">
<span>EXPERIENTIAL</span>
<span className="my-8 w-px h-12 bg-neutral-800"></span>
<span>BRANDING</span>
<span className="my-8 w-px h-12 bg-neutral-800"></span>
<span>DIGITAL</span>
</div>
</div>

<div className="col-span-1 md:col-span-8 flex flex-col relative justify-center">

<div className="relative">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] text-white mix-blend-overlay opacity-90">
                        Infinite 
                        <span className="text-neutral-400">Mindset.</span>
</h1>

<div className="absolute -top-12 right-0 md:right-1/4 md:top-0 animate-pulse">
<div className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-md">
<div className="w-1.5 h-1.5 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)]"></div>
<span className="text-xs font-medium text-neutral-300">Live Render</span>
</div>
</div>
</div>
<p className="mt-8 text-lg md:text-xl text-neutral-300/80 font-normal max-w-lg leading-relaxed mix-blend-plus-lighter">
                    Product designer crafting digital feelings through code and motion. Based in New York, thinking globally.
                </p>

<div className="mt-12 flex items-center gap-4">
<button className="group relative px-6 py-3 overflow-hidden rounded-full bg-white text-neutral-950 font-medium text-sm md:text-base hover:bg-lime-400 transition-colors duration-500">
<span className="relative z-10 flex items-center gap-2">
                            View Showreel 
                            <svg className="lucide lucide-play w-4 h-4 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</button>
<span className="h-px w-12 bg-neutral-800 hidden md:block"></span>
<span className="text-xs text-neutral-600 uppercase tracking-widest hidden md:block">Est. 2024</span>
</div>
</div>

<div className="col-span-1 md:col-span-3 flex flex-col md:justify-between md:items-end md:py-0 pt-4 pb-4 items-start justify-end">

<div className="flex flex-col items-end text-right space-y-1 mb-8 md:mb-0">
<div className="flex items-center gap-2 text-neutral-500">
<svg className="lucide lucide-sun w-4 h-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-xs font-mono">NYC, 11:42 AM</span>
</div>
<div className="text-xs font-mono text-neutral-600">40.7128° N, 74.0060° W</div>
</div>

<div className="flex flex-col items-center gap-4">
<span className="writing-vertical text-xs text-neutral-500 tracking-widest">SCROLL TO EXPLORE</span>
<div className="w-px h-16 bg-gradient-to-b from-neutral-800 to-transparent"></div>
</div>
</div>
</main>

<footer className="absolute bottom-6 left-6 md:left-12 flex gap-4 text-xs text-neutral-600 font-mono">
<span>// SYSTEM READY</span>
<span>// V.2.0.4</span>
</footer>
</div>


    </>
  );
}
