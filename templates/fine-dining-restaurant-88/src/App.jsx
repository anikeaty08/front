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



{
"imports": {
"three": "https://unpkg.com/three@0.160.0/build/three.module.js",
"three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
}
}



        import * as THREE from 'three';

        // Setup
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.03); // Softer fog for the model

        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // --- Lights ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const spotLight = new THREE.SpotLight(0xffaa55, 100);
        spotLight.position.set(5, 10, 5);
        spotLight.angle = 0.5;
        spotLight.penumbra = 1;
        spotLight.castShadow = true;
        scene.add(spotLight);

        const blueBackLight = new THREE.PointLight(0x4455ff, 20);
        blueBackLight.position.set(-5, 0, -5);
        scene.add(blueBackLight);


        // --- Procedural Pizza Group ---
        const pizzaGroup = new THREE.Group();

        // 1. Crust (Bottom + Rim)
        const crustGeometry = new THREE.CylinderGeometry(2.1, 1.9, 0.15, 32);
        const crustMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xc28642, // golden brown
            roughness: 0.8,
            bumpScale: 0.1
        });
        const crust = new THREE.Mesh(crustGeometry, crustMaterial);
        pizzaGroup.add(crust);

        // 2. Cheese Layer
        const cheeseGeometry = new THREE.CylinderGeometry(1.95, 1.95, 0.05, 32);
        const cheeseMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xffeebb, 
            roughness: 0.4, 
            metalness: 0.1 
        });
        const cheese = new THREE.Mesh(cheeseGeometry, cheeseMaterial);
        cheese.position.y = 0.08;
        pizzaGroup.add(cheese);

        // 3. Toppings Generator
        // Pepperoni
        const pepGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.02, 16);
        const pepMat = new THREE.MeshStandardMaterial({ color: 0x992222, roughness: 0.6 });

        for(let i=0; i<12; i++) {
            const mesh = new THREE.Mesh(pepGeo, pepMat);
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 1.5;
            mesh.position.set(Math.cos(angle) * radius, 0.11, Math.sin(angle) * radius);
            mesh.rotation.y = Math.random();
            pizzaGroup.add(mesh);
        }

        // Basil / Greenery
        const basilGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.02, 3); // triangular
        const basilMat = new THREE.MeshStandardMaterial({ color: 0x44aa44, roughness: 0.8 });

        for(let i=0; i<8; i++) {
            const mesh = new THREE.Mesh(basilGeo, basilMat);
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 1.6;
            mesh.position.set(Math.cos(angle) * radius, 0.11, Math.sin(angle) * radius);
            mesh.rotation.y = Math.random() * Math.PI;
            mesh.rotation.x = (Math.random() - 0.5) * 0.5;
            pizzaGroup.add(mesh);
        }

        // Initial Rotation to show top
        pizzaGroup.rotation.x = 0.8; 
        pizzaGroup.rotation.z = 0.2;
        scene.add(pizzaGroup);


        // --- Aura Particles (Keep original effect) ---
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1500;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 15;
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xfb923c,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);


        camera.position.z = 6;

        // Interaction variables
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

            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;

            // Pizza Animation
            // Continuous rotation
            pizzaGroup.rotation.y += 0.005;
            
            // Floating sensation
            pizzaGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.1;

            // Mouse Interaction (Tilt)
            pizzaGroup.rotation.x += 0.05 * (targetY + 0.8 - pizzaGroup.rotation.x); // +0.8 to maintain base tilt
            pizzaGroup.rotation.z += 0.05 * (targetX - pizzaGroup.rotation.z);

            // Particle Animation
            particlesMesh.rotation.y = elapsedTime * 0.05;
            const positions = particlesGeometry.attributes.position.array;
            for(let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                particlesGeometry.attributes.position.array[i3 + 1] += Math.sin(elapsedTime + particlesGeometry.attributes.position.array[i3]) * 0.002; 
            }
            particlesGeometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        }

        animate();

        // Handle Resize
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-lg font-medium text-white tracking-tighter" href="#">DOWNTOWN PIZZA</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#private">Private Dining</a>
</div>
<button className="group relative px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-medium rounded-full transition-all border border-white/10 flex items-center gap-2">
<span>Reservations</span>
<iconify-icon className="text-sm group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div id="canvas-container"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 pointer-events-none">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-orange-300 mb-8 animate-fade-in-up pointer-events-auto">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span className="">Michelin Guide 2024 Selection</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-6 leading-[0.95] drop-shadow-2xl">
                Taste the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">Ethereal.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto font-light tracking-tight leading-relaxed mb-10 drop-shadow-md">
                A sensory journey where sustainable ingredients meet avant-garde technique. Experience dining reimagined in the heart of the city.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors tracking-tight flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                    Book a Table
                    <iconify-icon className="text-lg" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors tracking-tight backdrop-blur-sm">
                    View Full Menu
                </button>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02] relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-1">
<span className="text-2xl font-medium text-white tracking-tight">Zero</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Waste Kitchen</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-medium text-white tracking-tight">12</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Course Omakase</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-medium text-white tracking-tight">Regional</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Sourced Ingredients</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-medium text-white tracking-tight">Private</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Dining Suites</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-20 bg-black" id="menu">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-16">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Seasonal Curation</h2>
<p className="text-zinc-500 text-sm">Spring 2024 Collection</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors" href="#">
                    View Wine List <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-96 rounded-2xl overflow-hidden glass-border bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
<img alt="Dish" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
<h3 className="text-xl text-white font-medium tracking-tight">Hokkaido Scallop</h3>
<span className="text-zinc-400 font-mono text-sm">$32</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                            Yuzu gel, fermented chili oil, shaved truffle, and coriander microgreens.
                        </p>
</div>
</div>

<div className="group relative h-96 rounded-2xl overflow-hidden glass-border bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
<img alt="Dish" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
<h3 className="text-xl text-white font-medium tracking-tight">Wagyu A5</h3>
<span className="text-zinc-400 font-mono text-sm">$85</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                            Charcoal grilled, smoked potato purée, bone marrow reduction, crispy garlic.
                        </p>
</div>
</div>

<div className="group relative h-96 rounded-2xl overflow-hidden glass-border bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
<img alt="Dish" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
<h3 className="text-xl text-white font-medium tracking-tight">Forest Floor</h3>
<span className="text-zinc-400 font-mono text-sm">$28</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                            Dark chocolate texture, matcha moss, wild berries, edible flowers.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/20 border-y border-white/5 relative z-20" id="experience">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">The Experience</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">

<div className="lg:col-span-2 row-span-2 rounded-2xl glass-border bg-black/40 p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-4xl text-white/80" icon="solar:wine-trash-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Curated Sommelier Selection</h3>
<p className="text-zinc-400 text-sm max-w-sm">A cellar featuring 400+ labels focusing on organic and biodynamic producers from small estates worldwide.</p>
</div>
</div>
</div>

<div className="rounded-2xl glass-border bg-black/40 p-8 flex flex-col justify-between hover:bg-white/5 transition-colors">
<iconify-icon className="text-3xl text-orange-400" icon="solar:chef-hat-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">Master Craft</h3>
<p className="text-xs text-zinc-500">Led by Chef Julian Vance</p>
</div>
</div>

<div className="rounded-2xl glass-border bg-black/40 p-8 flex flex-col justify-between hover:bg-white/5 transition-colors">
<iconify-icon className="text-3xl text-indigo-400" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">Sustainable</h3>
<p className="text-xs text-zinc-500">100% locally sourced</p>
</div>
</div>

<div className="lg:col-span-1 rounded-2xl glass-border bg-black/40 p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
<iconify-icon className="text-3xl text-zinc-300" icon="solar:armchair-2-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">Interior Design</h3>
<p className="text-xs text-zinc-500">Award-winning minimalist space</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-20 bg-black">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Secure Your Table</h2>
<p className="text-zinc-500 text-sm">Reservations open 30 days in advance. A credit card is required to hold the booking.</p>
</div>
<div className="glass-border bg-zinc-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/50">

<div className="mb-10">
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-medium text-white">Guests</label>
<span className="text-2xl font-medium text-orange-400 tabular-nums">2</span>
</div>
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" max="10" min="1" type="range" value="2"/>
<div className="flex justify-between mt-2 text-xs text-zinc-600 font-mono">
<span>1</span>
<span>10</span>
</div>
</div>

<div className="mb-10">
<label className="text-sm font-medium text-white block mb-4">Select Date</label>
<div className="grid grid-cols-7 gap-2 text-center">

<span className="text-xs text-zinc-600 font-medium py-2">M</span>
<span className="text-xs text-zinc-600 font-medium py-2">T</span>
<span className="text-xs text-zinc-600 font-medium py-2">W</span>
<span className="text-xs text-zinc-600 font-medium py-2">T</span>
<span className="text-xs text-zinc-600 font-medium py-2">F</span>
<span className="text-xs text-zinc-600 font-medium py-2">S</span>
<span className="text-xs text-zinc-600 font-medium py-2">S</span>

<button className="text-sm text-zinc-700 py-3 rounded-lg pointer-events-none">28</button>
<button className="text-sm text-zinc-700 py-3 rounded-lg pointer-events-none">29</button>
<button className="text-sm text-zinc-400 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors">30</button>
<button className="text-sm text-zinc-400 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors">31</button>
<button className="text-sm text-white bg-zinc-800 border border-white/10 py-3 rounded-lg shadow-sm">1</button>
<button className="text-sm text-zinc-400 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors">2</button>
<button className="text-sm text-zinc-400 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors">3</button>
</div>
</div>

<div className="mb-10">
<label className="text-sm font-medium text-white block mb-4">Available Times</label>
<div className="flex flex-wrap gap-3">
<button className="px-4 py-2 rounded-md border border-zinc-800 text-zinc-500 text-sm line-through cursor-not-allowed">18:00</button>
<button className="px-4 py-2 rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm hover:bg-orange-500/20 transition-colors">18:30</button>
<button className="px-4 py-2 rounded-md border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-colors">19:00</button>
<button className="px-4 py-2 rounded-md border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-colors">19:30</button>
<button className="px-4 py-2 rounded-md border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-colors">20:00</button>
</div>
</div>

<div className="mb-8 flex items-start gap-3">
<div className="relative flex items-center">
<input className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-zinc-700 bg-zinc-900 checked:border-orange-500 checked:bg-orange-500 transition-all" id="dietary" type="checkbox"/>
<iconify-icon className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<label className="text-sm text-zinc-400 cursor-pointer select-none" htmlFor="dietary">
                        I have dietary restrictions or allergies that the kitchen should be aware of.
                    </label>
</div>
<button className="w-full py-4 bg-white text-black font-medium text-sm rounded-xl hover:bg-zinc-200 transition-colors tracking-tight shadow-lg shadow-white/5">
                    Confirm Reservation
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-16 px-6 relative z-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="flex flex-col gap-6 max-w-xs">
<a className="text-white text-xl font-medium tracking-tighter" href="#">AURA</a>
<p className="text-sm text-zinc-500">
                    401 N Wabash Ave<br/>
                    Chicago, IL 60611<br/>
<span className="text-zinc-600 mt-2 block">+1 (312) 555-0199</span>
</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Sitemap</h4>
<a className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Home</a>
<a className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Menu</a>
<a className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Reservations</a>
<a className="text-zinc-500 hover:text-orange-400 transition-colors" href="#">Gift Cards</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Hours</h4>
<div className="flex flex-col text-zinc-500 gap-1">
<span>Tue - Thu</span>
<span className="text-zinc-400">17:00 - 22:00</span>
</div>
<div className="flex flex-col text-zinc-500 gap-1">
<span>Fri - Sat</span>
<span className="text-zinc-400">17:00 - 23:00</span>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Legal</h4>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Accessibility</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex items-center justify-between text-xs text-zinc-600">
<span>© 2024 Aura Restaurant Group.</span>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span>System Operational</span>
</div>
</div>
</footer>



    </>
  );
}
