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



        // --- 1. SETUP & UTILS ---
        lucide.createIcons();
        
        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const interactables = document.querySelectorAll('.interactable');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // Intersection Observer for Text Reveal
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

        // Loader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loader').style.display = 'none';
                    // Trigger initial text reveal
                    document.querySelectorAll('.reveal-text').forEach(el => {
                        if(el.getBoundingClientRect().top < window.innerHeight) {
                            el.classList.add('visible');
                        }
                    });
                }, 1500);
            }, 1000);
        });

        // --- 2. THREE.JS SCENE (The Divine Object) ---
        
        const canvasContainer = document.getElementById('canvas-container');
        
        // Scene Setup
        const scene = new THREE.Scene();
        // Fog for depth and softness
        scene.fog = new THREE.FogExp2(0xF8F7F4, 0.02);

        const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 8;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        canvasContainer.appendChild(renderer.domElement);

        // Materials - The "Divine" Look
        // Create a custom shader-like material using standard PhysicalMaterial for glass/ceramic mix
        const mainMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 0.15,
            metalness: 0.1,
            transmission: 0.6, // Glass-like transparency
            thickness: 1.5,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            sheen: 1.0,
            sheenColor: 0xe4e4e7, // Lavender hint
            ior: 1.5,
            side: THREE.DoubleSide
        });

        // Geometry - Procedural Distorted Sphere (The Diffuser Blob)
        const geometry = new THREE.IcosahedronGeometry(1.8, 20); // High detail for smooth curves
        
        // Modify vertices for organic shape
        const positionAttribute = geometry.attributes.position;
        const vertex = new THREE.Vector3();
        // Simple noise simulation for shape distortion
        for ( let i = 0; i < positionAttribute.count; i ++ ) {
            vertex.fromBufferAttribute( positionAttribute, i );
            // Slight squash
            vertex.y *= 1.2; 
            positionAttribute.setXYZ( i, vertex.x, vertex.y, vertex.z );
        }
        
        const mesh = new THREE.Mesh(geometry, mainMaterial);
        scene.add(mesh);

        // Inner Light (The Core)
        const innerGeo = new THREE.SphereGeometry(0.8, 32, 32);
        const innerMat = new THREE.MeshBasicMaterial({ 
            color: 0xffe4b5, // Pale gold
            transparent: true,
            opacity: 0.3
        });
        const innerMesh = new THREE.Mesh(innerGeo, innerMat);
        mesh.add(innerMesh);

        // Particles (Mist/Sacred Dust)
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 300;
        const posArray = new Float32Array(particlesCount * 3);
        const sizesArray = new Float32Array(particlesCount);

        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 12; // Spread wide
        }
        for(let i = 0; i < particlesCount; i++) {
            sizesArray[i] = Math.random();
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0x9ca3af, // Stone gray
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);


        // Lighting (Volumetric feel)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        // Key light (Warm)
        const light1 = new THREE.PointLight(0xffe4e1, 1.5, 20); // Misty Rose
        light1.position.set(5, 5, 5);
        scene.add(light1);

        // Fill light (Cool)
        const light2 = new THREE.PointLight(0xe6e6fa, 1.2, 20); // Lavender
        light2.position.set(-5, -2, 5);
        scene.add(light2);

        // Animation Variables
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX) * 0.0005;
            mouseY = (event.clientY - windowHalfY) * 0.0005;
        });

        // Scroll Integration
        let scrollY = 0;
        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
        });

        const clock = new THREE.Clock();

        // Animation Loop
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();

            targetX = mouseX * 2;
            targetY = mouseY * 2;

            // Smooth Mesh Rotation
            mesh.rotation.y += 0.003;
            mesh.rotation.x = Math.sin(elapsedTime * 0.5) * 0.1 + (mouseY * 0.5);
            mesh.rotation.z = Math.cos(elapsedTime * 0.3) * 0.1;

            // Breathing effect on mesh
            const scale = 1 + Math.sin(elapsedTime * 0.8) * 0.02;
            mesh.scale.set(scale, scale, scale);

            // Parallax Group Movement
            // Ease camera or group based on mouse
            mesh.position.x += (targetX - mesh.position.x) * 0.05;
            mesh.position.y += (-targetY - mesh.position.y) * 0.05;

            // Particle Float
            particlesMesh.rotation.y = -elapsedTime * 0.05;
            particlesMesh.position.y = Math.sin(elapsedTime * 0.2) * 0.5;

            // Scroll Interactions - Move object based on scroll section
            // Hero: Center (0)
            // Section 2: Move Left (-2)
            // Section 3: Center Back (0)
            
            // Normalize scroll to viewport height
            const scrollProgress = scrollY / window.innerHeight;
            
            // Logic to move mesh based on scroll
            let targetMeshX = 0;
            if (scrollProgress > 0.5 && scrollProgress < 1.8) {
                targetMeshX = -1.8; // Move left for text on right
            } else if (scrollProgress >= 1.8) {
                targetMeshX = 0;
            }

            // Smooth transition for scroll position
            mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, targetMeshX + (mouseX * 2), 0.05);

            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        };

        tick();

        // Resize Handler
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
      

<div id="loader">
<div className="breathing-circle"></div>
</div>

<div id="cursor"></div>

<div className="noise"></div>

<div id="canvas-container"></div>

<nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-multiply opacity-0 animate-fade-in-down" style={{animationDelay: '1.5s', animationFillMode: 'forwards'}}>
<div className="interactable cursor-pointer group">
<span className="tracking-[0.3em] font-semibold text-xs uppercase text-stone-600 group-hover:text-stone-900 transition-colors duration-500">Aura</span>
</div>
<div className="hidden md:flex gap-12">
<a className="interactable text-xs uppercase tracking-widest text-stone-500 hover:text-stone-800 transition-colors duration-500" href="#">Ritual</a>
<a className="interactable text-xs uppercase tracking-widest text-stone-500 hover:text-stone-800 transition-colors duration-500" href="#">Essence</a>
<a className="interactable text-xs uppercase tracking-widest text-stone-500 hover:text-stone-800 transition-colors duration-500" href="#">Shop</a>
</div>
<div className="interactable cursor-pointer">
<span className="sr-only">Cart</span>
<i className="w-4 h-4 text-stone-600 hover:text-stone-900 transition-colors" data-lucide="shopping-bag"></i>
</div>
</nav>

<main className="scroller">

<section className="h-screen w-full flex flex-col items-center justify-center relative">
<div className="text-center z-20 mix-blend-darken">
<span className="reveal-text block text-xs uppercase tracking-[0.4em] text-stone-500 mb-6">The Art of Stillness</span>
<h1 className="reveal-text serif text-6xl md:text-8xl lg:text-9xl text-stone-800 font-thin tracking-tight leading-none mb-8 italic opacity-90">
                    Sacred<br/><span className="not-italic font-light">Air</span>
</h1>
<div className="reveal-text mt-12">
<button className="interactable glass-panel px-8 py-3 rounded-full text-xs uppercase tracking-widest text-stone-600 hover:bg-white/40 transition-all duration-700 hover:scale-105 hover:shadow-lg hover:shadow-stone-200/50">
                        Begin the Ritual
                    </button>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-stone-400 animate-bounce duration-[3000ms]">
<i className="w-4 h-4 opacity-50" data-lucide="arrow-down"></i>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center relative py-24">
<div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
<div className="hidden md:block">

</div>
<div className="space-y-12">
<p className="reveal-text text-xs uppercase tracking-[0.2em] text-stone-400">01 — Presence</p>
<h2 className="reveal-text serif text-5xl md:text-6xl text-stone-800 font-light leading-[1.1]">
                        Designed to <br/> <span className="italic text-stone-500">disappear</span>.
                    </h2>
<p className="reveal-text text-sm md:text-base text-stone-600 font-light leading-loose max-w-md">
                        A sculpture of silence. Crafted from hand-poured ceramic and translucent resin, AURA mimics the organic imperfections of river stones. It doesn't just diffuse scent; it transforms the atmosphere into a sanctuary of calm light and shadow.
                    </p>
<div className="reveal-text w-full max-w-xs pt-8">
<div className="flex justify-between mb-2">
<span className="text-[10px] uppercase tracking-widest text-stone-500">Intensity</span>
<span className="text-[10px] uppercase tracking-widest text-stone-500">Soft</span>
</div>
<div className="interactable h-6 flex items-center">
<input className="w-full" max="100" min="1" type="range" value="30"/>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center relative py-24 bg-gradient-to-b from-transparent to-stone-100/50">
<div className="text-center max-w-2xl px-6 z-20">
<div className="mb-8 flex justify-center reveal-text">
<div className="w-px h-16 bg-stone-300"></div>
</div>
<h2 className="reveal-text serif text-4xl md:text-5xl text-stone-800 font-light mb-8">
                    "Breathing is the first act of living,<br/>scent is the first act of <span className="italic text-stone-500">feeling</span>."
                </h2>
<div className="reveal-text flex justify-center gap-8 mt-12">
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center bg-white/50 backdrop-blur-sm">
<i className="w-4 h-4 text-stone-400" data-lucide="wind"></i>
</div>
<span className="text-[10px] uppercase tracking-widest text-stone-500">Cold Diffusion</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center bg-white/50 backdrop-blur-sm">
<i className="w-4 h-4 text-stone-400" data-lucide="moon"></i>
</div>
<span className="text-[10px] uppercase tracking-widest text-stone-500">Silent Mode</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center bg-white/50 backdrop-blur-sm">
<i className="w-4 h-4 text-stone-400" data-lucide="sparkles"></i>
</div>
<span className="text-[10px] uppercase tracking-widest text-stone-500">Ambient Glow</span>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full relative py-24">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-200 pb-6 reveal-text">
<h3 className="serif text-4xl text-stone-800 italic">The Collection</h3>
<a className="interactable text-xs uppercase tracking-widest text-stone-500 hover:text-stone-800 mt-4 md:mt-0" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group reveal-text cursor-pointer interactable">
<div className="aspect-[3/4] bg-stone-100 rounded-sm relative overflow-hidden mb-6">
<div className="absolute inset-0 bg-stone-200/50 group-hover:bg-stone-200/30 transition-colors duration-700"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
<span className="glass-panel px-6 py-2 rounded-full text-xs uppercase tracking-widest text-stone-600">Quick View</span>
</div>
</div>
<div className="flex justify-between items-baseline">
<h4 className="font-serif text-xl text-stone-800">Celestial White</h4>
<span className="text-xs text-stone-500 font-light">$240</span>
</div>
<p className="text-xs text-stone-400 mt-1">Ceramic / Bergamot Mist</p>
</div>

<div className="group reveal-text cursor-pointer interactable" style={{transitionDelay: '100ms'}}>
<div className="aspect-[3/4] bg-stone-100 rounded-sm relative overflow-hidden mb-6">
<div className="absolute inset-0 bg-[#E8E8E6] group-hover:bg-[#E0E0DE] transition-colors duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
<span className="glass-panel px-6 py-2 rounded-full text-xs uppercase tracking-widest text-stone-600">Quick View</span>
</div>
</div>
<div className="flex justify-between items-baseline">
<h4 className="font-serif text-xl text-stone-800">Sage Stone</h4>
<span className="text-xs text-stone-500 font-light">$240</span>
</div>
<p className="text-xs text-stone-400 mt-1">Resin / Eucalyptus Rain</p>
</div>

<div className="group reveal-text cursor-pointer interactable" style={{transitionDelay: '200ms'}}>
<div className="aspect-[3/4] bg-stone-100 rounded-sm relative overflow-hidden mb-6">
<div className="absolute inset-0 bg-[#D4D4D8] group-hover:bg-[#CECED1] transition-colors duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
<span className="glass-panel px-6 py-2 rounded-full text-xs uppercase tracking-widest text-stone-600">Quick View</span>
</div>
</div>
<div className="flex justify-between items-baseline">
<h4 className="font-serif text-xl text-stone-800">Obsidian Mist</h4>
<span className="text-xs text-stone-500 font-light">$260</span>
</div>
<p className="text-xs text-stone-400 mt-1">Glass / Amber Smoke</p>
</div>
</div>
</div>
</section>

<footer className="py-24 border-t border-stone-200 bg-[#F8F7F4] relative z-20">
<div className="container mx-auto px-6 flex flex-col items-center text-center">
<span className="font-serif italic text-2xl text-stone-800 mb-8">Aura</span>
<div className="flex gap-8 mb-12">
<a className="interactable text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-800" href="#">Instagram</a>
<a className="interactable text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-800" href="#">Twitter</a>
<a className="interactable text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-800" href="#">Journal</a>
</div>
<p className="text-[10px] text-stone-300 uppercase tracking-widest">© 2024 Aura Scent Inc. All Rights Reserved.</p>
</div>
</footer>
</main>


    </>
  );
}
