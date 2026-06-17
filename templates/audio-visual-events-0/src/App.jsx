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



tailwind.config = {
theme: {
extend: {
colors: {
void: '#050505',
neon: '#FF0000',
glass: 'rgba(255, 255, 255, 0.05)',
glassHover: 'rgba(255, 255, 255, 0.1)',
},
fontFamily: {
sans: ['Syne', 'sans-serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        {
            "imports": {
                "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
                "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
            }
        }
    


        import * as THREE from 'three';
        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

        // --- Init Lucide Icons ---
        lucide.createIcons();

        // --- Three.js Setup ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.02); // Distance fog for depth

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ReinhardToneMapping;
        container.appendChild(renderer.domElement);

        // --- Post Processing (Bloom) ---
        const renderScene = new RenderPass(scene, camera);
        
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = 0;
        bloomPass.strength = 2.0; // High bloom for neon effect
        bloomPass.radius = 0.5;

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // --- Scene Objects ---

        // 1. Procedural AV Logo
        // Building shapes for 'A' and 'V'
        const logoGroup = new THREE.Group();
        
        const material = new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 1.0,
            roughness: 0.1,
            emissive: 0x550000,
            emissiveIntensity: 0.2
        });
        
        const edgeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

        // Simple Geometric A
        const geomA = new THREE.ConeGeometry(1, 2, 3); 
        const meshA = new THREE.Mesh(geomA, material);
        meshA.position.x = -0.8;
        meshA.rotation.y = Math.PI / 6; // Rotate to look flatter
        
        // Wireframe glow for A
        const wireA = new THREE.LineSegments(new THREE.EdgesGeometry(geomA), edgeMaterial);
        meshA.add(wireA);
        
        // Simple Geometric V (Inverted Cone)
        const geomV = new THREE.ConeGeometry(1, 2, 3);
        const meshV = new THREE.Mesh(geomV, material);
        meshV.rotation.z = Math.PI;
        meshV.rotation.y = -Math.PI / 6;
        meshV.position.x = 0.8;

        // Wireframe glow for V
        const wireV = new THREE.LineSegments(new THREE.EdgesGeometry(geomV), edgeMaterial);
        meshV.add(wireV);

        logoGroup.add(meshA);
        logoGroup.add(meshV);
        scene.add(logoGroup);


        // 2. Lights
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        scene.add(ambientLight);

        const spotlight1 = new THREE.SpotLight(0xff0000, 50);
        spotlight1.position.set(5, 5, 5);
        spotlight1.angle = 0.3;
        spotlight1.penumbra = 0.5;
        scene.add(spotlight1);

        const spotlight2 = new THREE.SpotLight(0xffffff, 10);
        spotlight2.position.set(-5, 5, 5);
        spotlight2.angle = 0.5;
        scene.add(spotlight2);

        // 3. Audio Waves / Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;
        const posArray = new Float32Array(particlesCount * 3);
        
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 20; // Spread wide
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0xffffff,
            transparent: true,
            opacity: 0.8,
        });
        
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        particlesMesh.position.y = -5; // Start hidden below
        scene.add(particlesMesh);

        // --- Animation Loop ---
        function animate() {
            requestAnimationFrame(animate);

            // Heartbeat Pulse for Logo
            const time = Date.now() * 0.002;
            const scale = 1 + Math.sin(time * 2) * 0.02;
            logoGroup.scale.set(scale, scale, scale);
            
            // Subtle rotation
            logoGroup.rotation.y += 0.002;

            // Wave movement for particles
            const positions = particlesGeometry.attributes.position.array;
            for(let i = 0; i < particlesCount; i++) {
                const x = positions[i * 3];
                // Sine wave ripple effect
                positions[i * 3 + 1] = Math.sin(Date.now() * 0.001 + x) * 0.5 - 2; 
            }
            particlesGeometry.attributes.position.needsUpdate = true;

            composer.render();
        }
        animate();

        // --- GSAP Scroll Interactions ---
        gsap.registerPlugin(ScrollTrigger);

        // Timeline for the scroll journey
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        });

        // 1. Hero -> Services: Logo moves away, Particles rise
        tl.to(logoGroup.position, { z: -10, y: 5, duration: 2 }, 0)
          .to(logoGroup.rotation, { x: 1, duration: 2 }, 0)
          .to(camera.position, { z: 8, duration: 2 }, 0)
          .to(particlesMesh.position, { y: 0, duration: 2 }, 0.5); // Particles come up

        // 2. Services -> Portfolio: Particles change color
        tl.to(particlesMaterial.color, { r: 1, g: 0, b: 0, duration: 1 }, 2) // Turn Red
          .to(camera.rotation, { z: 0.2, duration: 2 }, 2);

        // 3. Portfolio -> Testimonials: Crowd effect (Particles scatter)
        tl.to(particlesMesh.scale, { x: 2, y: 2, z: 2, duration: 2 }, 4)
          .to(scene.fog, { density: 0.05, duration: 2 }, 4); // Denser fog

        // 4. Contact: Spotlight focus
        tl.to(spotlight1, { intensity: 100, angle: 0.1, duration: 2 }, 6)
          .to(bloomPass, { strength: 3, radius: 1, duration: 2 }, 6);


        // --- UI Interactions ---
        // Change particle color on service hover
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const colorHex = card.getAttribute('data-color');
                const color = new THREE.Color(colorHex);
                gsap.to(particlesMaterial.color, { r: color.r, g: color.g, b: color.b, duration: 0.5 });
                
                // Increase bloom temporarily
                gsap.to(bloomPass, { strength: 3, duration: 0.2 });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(particlesMaterial.color, { r: 1, g: 1, b: 1, duration: 0.5 });
                gsap.to(bloomPass, { strength: 2, duration: 0.5 });
            });
        });

        // Resize handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        });

        // Simple fade-in animation for HTML elements
        gsap.utils.toArray('.animate-fade-in-up').forEach(element => {
            gsap.fromTo(element, 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );
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
      

<div id="canvas-container"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2 group cursor-pointer">

<svg className="text-white group-hover:text-neon transition-colors duration-300" fill="none" height="24" viewbox="0 0 40 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24L10 0H16L26 24H20L13 6L6 24H0Z" fill="currentColor"></path> 
<path d="M20 0L30 24H36L46 0H40L33 18L26 0H20Z" fill="currentColor" transform="translate(10, 0)"></path> 
</svg>
<span className="font-bold text-lg tracking-tighter uppercase hidden sm:block">AV Events</span>
</div>
<div className="flex items-center gap-8">
<a className="text-sm font-medium hover:text-neon transition-colors tracking-wide hidden md:block" href="#services">Services</a>
<a className="text-sm font-medium hover:text-neon transition-colors tracking-wide hidden md:block" href="#portfolio">Work</a>
<button className="border border-white/20 bg-white/5 hover:bg-neon hover:border-neon text-white px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 backdrop-blur-md">
                    Get Quote
                </button>
</div>
</div>
</nav>

<main className="relative z-10 w-full">

<section className="h-screen w-full flex flex-col justify-center items-center text-center px-4 relative">
<div className="max-w-4xl mx-auto space-y-6 pt-20">
<h2 className="text-neon text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-0 animate-fade-in-up" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
                    Audio Video Events
                </h2>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mix-blend-overlay opacity-0 animate-fade-in-up" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
                    WE MAKE<br/>MEMORIES
                </h1>
<div className="pt-8 opacity-0 animate-fade-in-up" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
<button className="group relative px-8 py-4 bg-transparent overflow-hidden border border-white/30 text-white transition-all hover:border-neon">
<div className="absolute inset-0 w-0 bg-neon transition-all duration-[250ms] ease-out group-hover:w-full opacity-80"></div>
<span className="relative flex items-center gap-3 text-sm font-semibold uppercase tracking-widest group-hover:text-white">
                            Book Your Event <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] uppercase tracking-widest">Scroll to Enter</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center py-24 px-6 relative" id="services">
<div className="max-w-7xl w-full mx-auto">
<div className="mb-16 border-l-2 border-neon pl-6">
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight">Our Expertise</h3>
<p className="text-white/60 mt-2 max-w-lg text-lg">Immersive audio-visual experiences tailored for every occasion.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[400px] bg-glass border border-white/10 hover:border-neon/50 p-8 flex flex-col justify-end transition-all duration-500 hover:bg-glassHover backdrop-blur-sm overflow-hidden service-card" data-color="#FF0000">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
<i className="text-white/50 w-8 h-8 mb-auto group-hover:text-neon transition-colors" data-lucide="mic-2"></i>
<h4 className="relative z-10 text-2xl font-bold mb-2">Concerts</h4>
<p className="relative z-10 text-sm text-white/60 group-hover:text-white transition-colors">Stadium-filling sound and laser synchronization.</p>
</div>

<div className="group relative h-[400px] bg-glass border border-white/10 hover:border-neon/50 p-8 flex flex-col justify-end transition-all duration-500 hover:bg-glassHover backdrop-blur-sm overflow-hidden service-card" data-color="#FFFFFF">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
<i className="text-white/50 w-8 h-8 mb-auto group-hover:text-white transition-colors" data-lucide="aperture"></i>
<h4 className="relative z-10 text-2xl font-bold mb-2">Corporate</h4>
<p className="relative z-10 text-sm text-white/60 group-hover:text-white transition-colors">High-end presentations and seamless production.</p>
</div>

<div className="group relative h-[400px] bg-glass border border-white/10 hover:border-neon/50 p-8 flex flex-col justify-end transition-all duration-500 hover:bg-glassHover backdrop-blur-sm overflow-hidden service-card" data-color="#FF4444">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
<i className="text-white/50 w-8 h-8 mb-auto group-hover:text-neon transition-colors" data-lucide="music-2"></i>
<h4 className="relative z-10 text-2xl font-bold mb-2">Weddings</h4>
<p className="relative z-10 text-sm text-white/60 group-hover:text-white transition-colors">Elegant lighting and crystal clear acoustics.</p>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full py-24 px-6 overflow-hidden flex flex-col justify-center" id="portfolio">
<div className="max-w-7xl mx-auto w-full mb-12 flex items-end justify-between">
<div>
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white"><span className="text-neon">Live</span> Gallery</h3>
</div>
<div className="hidden md:flex gap-4">
<button className="p-3 border border-white/20 hover:border-neon text-white/50 hover:text-white transition-all"><i data-lucide="arrow-left"></i></button>
<button className="p-3 border border-white/20 hover:border-neon text-white/50 hover:text-white transition-all"><i data-lucide="arrow-right"></i></button>
</div>
</div>

<div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar px-6 md:px-0">

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] relative group overflow-hidden border border-white/10 bg-void">
<img alt="Concert Stage" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-neon text-xs font-bold uppercase tracking-widest mb-1 block">Production</span>
<h4 className="text-3xl font-bold">Neon Nights Festival</h4>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] relative group overflow-hidden border border-white/10 bg-void">
<img alt="Corporate Event" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-neon text-xs font-bold uppercase tracking-widest mb-1 block">Corporate</span>
<h4 className="text-3xl font-bold">Tech Summit 2024</h4>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] relative group overflow-hidden border border-white/10 bg-void">
<img alt="Wedding" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-neon text-xs font-bold uppercase tracking-widest mb-1 block">Private</span>
<h4 className="text-3xl font-bold">The Royal Gala</h4>
</div>
</div>
</div>
</section>

<section className="min-h-[80vh] w-full py-24 px-6 flex items-center justify-center relative">
<div className="max-w-5xl w-full mx-auto relative z-10">
<div className="text-center mb-20">
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">The Crowd Goes Wild</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-glass border border-white/5 p-8 backdrop-blur-md rounded-sm relative">
<div className="text-neon mb-4"><i className="w-8 h-8 rotate-180 fill-neon/20" data-lucide="quote"></i></div>
<p className="text-lg md:text-xl font-medium leading-relaxed">"The visual effects completely transformed our venue. It felt like we were inside a movie. Simply unreal."</p>
<div className="mt-6 flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-neon">JD</div>
<div>
<p className="text-sm font-bold">John Doe</p>
<p className="text-xs text-white/50 uppercase tracking-wider">Event Director</p>
</div>
</div>
</div>

<div className="bg-glass border border-white/5 p-8 backdrop-blur-md rounded-sm relative mt-8 md:mt-0">
<div className="text-neon mb-4"><i className="w-8 h-8 rotate-180 fill-neon/20" data-lucide="quote"></i></div>
<p className="text-lg md:text-xl font-medium leading-relaxed">"AV Events delivered a production quality that I've only seen at major festivals. Professional from start to finish."</p>
<div className="mt-6 flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-neon">AS</div>
<div>
<p className="text-sm font-bold">Sarah Jenkins</p>
<p className="text-xs text-white/50 uppercase tracking-wider">CMO, TechGlobal</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center px-6 py-24 relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
<h1 className="text-[30vw] font-black leading-none text-white">AV</h1>
</div>
<div className="max-w-xl w-full bg-void/80 border border-white/10 p-10 md:p-16 backdrop-blur-xl relative z-10 shadow-2xl shadow-neon/10">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent"></div>
<h3 className="text-3xl font-semibold mb-2">Let's Create Magic</h3>
<p className="text-white/50 mb-8 text-sm">Tell us about your vision. We'll handle the rest.</p>
<form className="space-y-6">
<div className="space-y-1">
<label className="text-xs uppercase font-bold tracking-widest text-white/70">Name</label>
<input className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-neon transition-colors placeholder:text-white/20" placeholder="ENTER YOUR NAME" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase font-bold tracking-widest text-white/70">Email</label>
<input className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-neon transition-colors placeholder:text-white/20" placeholder="ENTER YOUR EMAIL" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase font-bold tracking-widest text-white/70">Project Type</label>
<select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-neon transition-colors">
<option className="bg-void">Corporate Event</option>
<option className="bg-void">Concert / Festival</option>
<option className="bg-void">Private Celebration</option>
</select>
</div>
<button className="w-full mt-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neon hover:text-white transition-all duration-300" type="button">
                        Send Inquiry
                    </button>
</form>
</div>
</section>

<footer className="border-t border-white/10 py-12 px-6 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-bold text-lg tracking-tighter uppercase text-white">AV Events</span>
</div>
<div className="text-xs text-white/40 uppercase tracking-widest">
                    © 2024 Audio Video Events. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-white/40 hover:text-neon transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-white/40 hover:text-neon transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-white/40 hover:text-neon transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>
</main>






    </>
  );
}
