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



        // --- 1. THEME TOGGLE LOGIC ---
        const themeBtn = document.getElementById('theme-toggle');
        const body = document.body;
        
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const isLight = body.classList.contains('light-theme');
            themeBtn.innerText = isLight ? 'Dark Mode' : 'Light Mode';
            
            // Update 3D Lighting/Materials triggers if needed
            update3DTheme(isLight);
        });

        // --- 2. CUSTOM CURSOR & MAGNETIC EFFECT ---
        const ring = document.getElementById('cursor-ring');
        const dot = document.getElementById('cursor-dot');
        const label = document.querySelector('.cursor-label');
        
        // Mouse Move
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Immediate update for dot
            gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1 });
            
            // Damped update for ring
            gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.5, ease: "power2.out" });
        });

        // Click Pulse
        window.addEventListener('mousedown', () => {
            gsap.to([ring, dot], { scale: 0.8, duration: 0.2 });
        });
        window.addEventListener('mouseup', () => {
            gsap.to([ring, dot], { scale: 1, duration: 0.2 });
        });

        // Magnetic Elements
        const magnets = document.querySelectorAll('.cursor-magnet');
        magnets.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(ring, { scale: 1.5, opacity: 0.5, duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3 });
                gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            });
            
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Magnetic pull
                gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.5, ease: "power2.out" });
                // Move cursor to stick slightly
                gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.1 });
            });
        });

        // 3D Context Hover
        const webglContainer = document.getElementById('webgl-container');
        // Simple hit test logic: if hovering over center area where watch is
        webglContainer.addEventListener('mousemove', (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const dist = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
            
            if(dist < 200) { // Approximate watch radius
                gsap.to(ring, { width: 80, height: 80, borderColor: '#C8AA6E', duration: 0.4 });
                gsap.to(label, { opacity: 1, scale: 1, duration: 0.4 });
                document.body.style.cursor = 'none'; // Ensure default is gone
            } else {
                gsap.to(ring, { width: 32, height: 32, borderColor: body.classList.contains('light-theme') ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)', duration: 0.4 });
                gsap.to(label, { opacity: 0, scale: 0.8, duration: 0.4 });
            }
        });

        // --- 3. THREE.JS SCENE ---
        // Since we don't have the actual .glb, we will procedurally generate a high-end looking abstract watch
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;
        
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        // Tone mapping for realism
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        
        document.getElementById('webgl-container').appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        const pointLight1 = new THREE.PointLight(0xC8AA6E, 2, 20); // Gold accent light
        pointLight1.position.set(-5, 2, 5);
        scene.add(pointLight1);
        
        const pointLight2 = new THREE.PointLight(0x4444ff, 1, 20); // Cool rim light
        pointLight2.position.set(5, -2, -5);
        scene.add(pointLight2);

        // Materials
        const goldMaterial = new THREE.MeshStandardMaterial({
            color: 0xC8AA6E,
            metalness: 1,
            roughness: 0.2,
        });
        
        const darkMetalMaterial = new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.9,
            roughness: 0.4,
        });

        const glassMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0,
            roughness: 0,
            transmission: 0.9,
            transparent: true,
            opacity: 0.3
        });

        // Procedural Watch Group
        const watchGroup = new THREE.Group();
        
        // 1. Case (Cylinder)
        const caseGeo = new THREE.CylinderGeometry(2.2, 2.2, 0.5, 64);
        const caseMesh = new THREE.Mesh(caseGeo, darkMetalMaterial);
        caseMesh.rotation.x = Math.PI / 2;
        
        // 2. Bezel (Torus) - Gold
        const bezelGeo = new THREE.TorusGeometry(2.2, 0.15, 16, 100);
        const bezelMesh = new THREE.Mesh(bezelGeo, goldMaterial);
        
        // 3. Dial Details (Rings inside) - This will be the "exploded" part
        const innerRingGeo = new THREE.TorusGeometry(1.8, 0.05, 16, 100);
        const innerRing = new THREE.Mesh(innerRingGeo, goldMaterial);
        
        const faceGeo = new THREE.CylinderGeometry(2.1, 2.1, 0.05, 64);
        const faceMesh = new THREE.Mesh(faceGeo, darkMetalMaterial);
        faceMesh.rotation.x = Math.PI / 2;
        faceMesh.position.z = 0;

        // 4. Hands
        const handGeo = new THREE.BoxGeometry(0.1, 1.5, 0.05);
        const hourHand = new THREE.Mesh(handGeo, goldMaterial);
        hourHand.position.z = 0.3;
        
        const minHandGeo = new THREE.BoxGeometry(0.08, 2, 0.05);
        const minuteHand = new THREE.Mesh(minHandGeo, new THREE.MeshStandardMaterial({color: 0xffffff}));
        minuteHand.position.z = 0.35;
        
        // 5. Crystal
        const glassGeo = new THREE.CylinderGeometry(2.2, 2.2, 0.1, 64);
        const glassMesh = new THREE.Mesh(glassGeo, glassMaterial);
        glassMesh.rotation.x = Math.PI / 2;
        glassMesh.position.z = 0.4;

        // Assembly
        watchGroup.add(caseMesh); // Base
        watchGroup.add(faceMesh); // Inner
        watchGroup.add(bezelMesh); // Detail 1
        watchGroup.add(innerRing); // Detail 2
        watchGroup.add(hourHand); // Detail 3
        watchGroup.add(minuteHand); // Detail 4
        watchGroup.add(glassMesh); // Top

        scene.add(watchGroup);
        watchGroup.rotation.x = 0.5;
        watchGroup.rotation.y = -0.5;

        // Theme Update Function
        function update3DTheme(isLight) {
            if(isLight) {
                scene.background = new THREE.Color(0xFAFAFA);
                caseMesh.material.color.setHex(0xE0E0E0);
                faceMesh.material.color.setHex(0xFFFFFF);
                minuteHand.material.color.setHex(0x000000);
            } else {
                scene.background = null; // Transparent
                caseMesh.material.color.setHex(0x111111);
                faceMesh.material.color.setHex(0x111111);
                minuteHand.material.color.setHex(0xffffff);
            }
        }

        // --- 4. ANIMATION LOOPS ---

        // Mouse Follow Physics (Fluid)
        let targetRotationX = 0.5;
        let targetRotationY = -0.5;
        
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            
            targetRotationY = x * 0.5; // Limit rotation range
            targetRotationX = y * 0.5;
        });

        function animate() {
            requestAnimationFrame(animate);
            
            // Smooth Rotation (Damping)
            watchGroup.rotation.x += (targetRotationX - watchGroup.rotation.x) * 0.05;
            watchGroup.rotation.y += (targetRotationY - watchGroup.rotation.y) * 0.05;
            
            // Subtle Idle Animation
            const time = Date.now() * 0.001;
            watchGroup.position.y = Math.sin(time) * 0.1;
            
            // Hands moving
            hourHand.rotation.z = -time * 0.05;
            minuteHand.rotation.z = -time * 0.5;

            renderer.render(scene, camera);
        }
        animate();

        // --- 5. SCROLL ANIMATIONS (GSAP) ---
        gsap.registerPlugin(ScrollTrigger);

        // Intro Animation
        const tlIntro = gsap.timeline();
        tlIntro.to("#hero-sub", { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 })
               .to("#hero-title", { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }, "-=1.2")
               .to("#hero-cta", { opacity: 1, duration: 1.5 }, "-=1");

        // "The Movement" Explosion
        const tlScroll = gsap.timeline({
            scrollTrigger: {
                trigger: "#movement-section",
                start: "top top",
                end: "bottom bottom",
                scrub: 1, // Smooth scrub
            }
        });

        // 1. Move Watch to left side
        tlScroll.to(watchGroup.position, { x: 0, z: 2, duration: 2 }, 0);
        
        // 2. Explode Components (Deconstruction)
        // Move glass up (z)
        tlScroll.to(glassMesh.position, { z: 2.5, duration: 3 }, 0);
        // Move hands
        tlScroll.to(minuteHand.position, { z: 2.0, duration: 3 }, 0);
        tlScroll.to(hourHand.position, { z: 1.5, duration: 3 }, 0);
        // Move bezel
        tlScroll.to(bezelMesh.position, { z: 1.0, duration: 3 }, 0);
        
        // 3. Rotate for view
        tlScroll.to(watchGroup.rotation, { x: 1.5, y: 0.5, duration: 3 }, 0);

        // Text Reveals on Scroll
        const specs = document.querySelectorAll('.spec-item');
        specs.forEach((spec, i) => {
            gsap.to(spec, {
                scrollTrigger: {
                    trigger: "#movement-section",
                    start: `top+=${20 + (i*20)}% top`,
                    toggleActions: "play reverse play reverse"
                },
                opacity: 1,
                x: 0,
                duration: 1
            });
        });

        const techSpecs = document.querySelectorAll('.tech-spec');
        techSpecs.forEach((spec, i) => {
            ScrollTrigger.create({
                trigger: "#movement-section",
                start: `top+=${30 + (i*15)}% top`,
                onEnter: () => {
                    gsap.to(spec, { opacity: 1, x: 0, duration: 0.8 });
                    spec.querySelector('.draw-icon').classList.add('active');
                },
                onLeaveBack: () => {
                    gsap.to(spec, { opacity: 0, x: 8, duration: 0.5 });
                    spec.querySelector('.draw-icon').classList.remove('active');
                }
            });
        });

        // Handle Resize
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
      

<div id="cursor-ring" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-50%, -50%) translate3d(674.76px, 1.1086px, 0px)', opacity: '1'}}><span className="cursor-label font-body uppercase">360° View</span></div>
<div id="cursor-dot" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-50%, -50%) translate(675px, 1px)'}}></div>

<div id="webgl-container"><canvas height="816" style={{display: 'block', width: '1056px', height: '653px'}} width="1320"></canvas></div>

<nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-start mix-blend-difference text-white">
<a className="group cursor-magnet" href="#">
<h1 className="font-headline text-2xl tracking-tighter leading-none">CHRONOS<span className="text-[#C8AA6E]">.</span></h1>
</a>
<div className="flex flex-col items-end gap-2">
<button className="cursor-magnet text-xs font-body tracking-widest uppercase hover:text-[#C8AA6E] transition-colors duration-300" id="theme-toggle">
                Light Mode
            </button>
<div className="flex gap-6 mt-4">
<a className="cursor-magnet text-xs font-body tracking-widest opacity-70 hover:opacity-100 transition-opacity" href="#">COLLECTION</a>
<a className="cursor-magnet text-xs font-body tracking-widest opacity-70 hover:opacity-100 transition-opacity" href="#">MAISON</a>
</div>
</div>
</nav>

<header className="relative w-full h-screen flex flex-col justify-center items-center pointer-events-none">
<div className="z-10 text-center space-y-6">
<h2 className="font-subhead text-sm tracking-[0.2em] uppercase text-[#C8AA6E] opacity-0 transform translate-y-4" id="hero-sub" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>
                Beyond Precision
            </h2>
<h1 className="font-headline text-6xl md:text-8xl lg:text-9xl tracking-tight font-medium opacity-0 transform translate-y-8" id="hero-title" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>
                The Celestial <br/> <span className="italic font-normal">Tourbillon</span>
</h1>
<div className="pt-8 opacity-0" id="hero-cta" style={{opacity: '1'}}>
<button className="pointer-events-auto cursor-magnet btn-shimmer border border-current px-8 py-4 text-xs font-body tracking-widest uppercase hover:bg-[#C8AA6E] hover:border-[#C8AA6E] hover:text-white transition-all duration-500" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
                    Discover Time
                </button>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
<span className="text-[10px] tracking-widest uppercase font-body">Scroll</span>
<div className="scrolldown-line"></div>
</div>
</header>


<section className="relative w-full h-[200vh]" id="movement-section">
<div className="sticky top-0 h-screen w-full flex items-center justify-between px-8 md:px-24 pointer-events-none">

<div className="w-1/3 flex flex-col gap-32">
<div className="spec-item opacity-0 transform -translate-x-8 transition-all duration-1000" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-32px, 0px)', opacity: '1'}}>
<h3 className="font-subhead text-2xl text-[#C8AA6E] mb-2">Caliber 9001</h3>
<p className="font-body font-light text-sm leading-relaxed opacity-80">
                        A skeletonized architectural movement featuring a floating balance wheel and manual winding mechanism.
                    </p>
</div>
<div className="spec-item opacity-0 transform -translate-x-8 transition-all duration-1000 delay-100" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-32px, 0px)', opacity: '1'}}>
<h3 className="font-subhead text-2xl text-[#C8AA6E] mb-2">Sapphire Case</h3>
<p className="font-body font-light text-sm leading-relaxed opacity-80">
                        Machined from a single block of synthetic crystal, offering absolute transparency to the complex heart within.
                    </p>
</div>
</div>

<div className="w-1/3 flex flex-col items-end gap-12 text-right">
<div className="tech-spec flex items-center gap-4 opacity-0 transform translate-x-8 transition-all duration-1000">
<div className="text-right">
<span className="block font-subhead text-lg">72 Hours</span>
<span className="text-[10px] uppercase tracking-widest opacity-60">Power Reserve</span>
</div>
<svg aria-hidden="true" data-height="24" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="tech-spec flex items-center gap-4 opacity-0 transform translate-x-8 transition-all duration-1000 delay-100">
<div className="text-right">
<span className="block font-subhead text-lg">10 ATM</span>
<span className="text-[10px] uppercase tracking-widest opacity-60">Water Resistance</span>
</div>
<svg aria-hidden="true" data-height="24" data-icon="lucide:droplets" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg>
</div>
<div className="tech-spec flex items-center gap-4 opacity-0 transform translate-x-8 transition-all duration-1000 delay-200">
<div className="text-right">
<span className="block font-subhead text-lg">Grade 5</span>
<span className="text-[10px] uppercase tracking-widest opacity-60">Titanium Alloy</span>
</div>
<svg aria-hidden="true" data-height="24" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</section>

<footer className="relative w-full py-32 px-8 border-t border-white/10 flex flex-col items-center justify-center gap-8 bg-current-theme transition-colors">
<svg aria-hidden="true" data-icon="lucide:award" data-strokeWidth="1" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
<h2 className="font-headline text-4xl md:text-6xl tracking-tight text-center">
            Own the <span className="italic text-[#C8AA6E]">Masterpiece</span>
</h2>
<div className="flex gap-6 mt-8">
<button className="cursor-magnet btn-shimmer bg-[#C8AA6E] text-[#0A0A0A] px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300">
                Pre-Order Now
            </button>
<button className="cursor-magnet btn-shimmer border border-current px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-colors duration-300">
                Book Appointment
            </button>
</div>
<div className="mt-24 w-full flex justify-between items-end opacity-40 text-[10px] uppercase tracking-widest font-body">
<div>© 2024 Chronos Geneve</div>
<div className="flex gap-4">
<a className="hover:text-[#C8AA6E]" href="#">Instagram</a>
<a className="hover:text-[#C8AA6E]" href="#">WeChat</a>
</div>
</div>
</footer>


    </>
  );
}
