import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const canvas = document.querySelector('#webgl-canvas');
        const scene = new THREE.Scene();
        // Add subtle fog to blend particles into the dark background
        scene.fog = new THREE.FogExp2(0x050505, 0.002);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 3000;
        const posArray = new Float32Array(particlesCount * 3);
        const sizesArray = new Float32Array(particlesCount);

        for (let i = 0; i < particlesCount * 3; i++) {
            // Spread particles in a wide volume
            posArray[i] = (Math.random() - 0.5) * 100;
        }
        
        for(let i=0; i < particlesCount; i++) {
            sizesArray[i] = Math.random();
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizesArray, 1));

        // Material with custom soft glow look
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.15,
            color: 0x6366f1, // Indigo 500
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Interaction
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

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;

            // Smooth rotation based on mouse
            particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
            particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

            // Constant gentle flow
            particlesMesh.rotation.z = elapsedTime * 0.05;
            
            // Subtle wave effect on particles
            const positions = particlesGeometry.attributes.position.array;
            for(let i=0; i<particlesCount; i++){
                const i3 = i*3;
                // Add a very subtle wave motion to y based on x position and time
                // This is expensive for many particles in JS, keeping it minimal or removing for perf if needed
                // positions[i3+1] += Math.sin(elapsedTime + positions[i3]) * 0.002;
            }
            particlesGeometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        // Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    


        gsap.registerPlugin(ScrollTrigger);

        // Hero Reveal
        const heroTimeline = gsap.timeline();

        // Reveal Text Spans
        heroTimeline.to(".hero-title span", {
            y: 0,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.1
        })
        // Fade in other hero elements
        .to(".gsap-hero-fade", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.1
        }, "-=1");

        // Stats Animation
        gsap.to(".stat-item", {
            scrollTrigger: {
                trigger: ".stats-container",
                start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        });

        // Features Stagger
        gsap.utils.toArray(".feature-card").forEach((card, i) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Class Cards Stagger
        gsap.to(".class-card", {
            scrollTrigger: {
                trigger: ".class-card",
                start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Text Section Reveals
        gsap.utils.toArray([".section-title", ".section-desc"]).forEach(el => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            });
        });

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if(window.scrollY > 50) {
                nav.classList.add('bg-black/50', 'backdrop-blur-xl', 'h-16');
                nav.classList.remove('h-20', 'bg-black/10');
            } else {
                nav.classList.remove('bg-black/50', 'backdrop-blur-xl', 'h-16');
                nav.classList.add('h-20', 'bg-black/10');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="webgl-canvas"></canvas>

<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/10 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white tracking-tighter font-medium text-lg cursor-pointer group">
<div className="relative">
<iconify-icon className="group-hover:opacity-0 transition-opacity duration-300" icon="solar:gamepad-linear" strokeWidth="1.5" width="20"></iconify-icon>
<iconify-icon className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 text-indigo-400 transition-opacity duration-300" icon="solar:gamepad-charge-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span>AETHERIA</span>
</div>
<div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-wide uppercase">
<a className="hover:text-white transition-colors duration-300 nav-link relative overflow-hidden group" href="#">
<span className="block group-hover:-translate-y-full transition-transform duration-300">Lore</span>
<span className="absolute top-full left-0 block text-indigo-400 group-hover:-translate-y-full transition-transform duration-300">Lore</span>
</a>
<a className="hover:text-white transition-colors duration-300 nav-link relative overflow-hidden group" href="#">
<span className="block group-hover:-translate-y-full transition-transform duration-300">Classes</span>
<span className="absolute top-full left-0 block text-indigo-400 group-hover:-translate-y-full transition-transform duration-300">Classes</span>
</a>
<a className="hover:text-white transition-colors duration-300 nav-link relative overflow-hidden group" href="#">
<span className="block group-hover:-translate-y-full transition-transform duration-300">Media</span>
<span className="absolute top-full left-0 block text-indigo-400 group-hover:-translate-y-full transition-transform duration-300">Media</span>
</a>
<a className="hover:text-white transition-colors duration-300 nav-link relative overflow-hidden group" href="#">
<span className="block group-hover:-translate-y-full transition-transform duration-300">Community</span>
<span className="absolute top-full left-0 block text-indigo-400 group-hover:-translate-y-full transition-transform duration-300">Community</span>
</a>
</div>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="group relative px-6 py-2.5 bg-white text-black text-xs font-semibold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
<span className="relative z-10 flex items-center gap-2">
                        Pre-order
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-screen flex flex-col justify-center">
<div className="max-w-7xl mx-auto w-full text-center">
<div className="gsap-hero-fade inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-indigo-300 mb-8 backdrop-blur-sm opacity-0 translate-y-4">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
                Closed Beta Access Open
            </div>
<h1 className="hero-title text-6xl md:text-9xl font-medium text-white tracking-tighter mb-8 leading-[0.9] reveal-text">
<div className="overflow-hidden"><span className="block translate-y-full">Reclaim</span></div>
<div className="overflow-hidden"><span className="block translate-y-full text-zinc-500">The Void.</span></div>
</h1>
<p className="gsap-hero-fade max-w-xl mx-auto text-lg text-zinc-400 mb-12 leading-relaxed font-light opacity-0 translate-y-4">
                A next-generation tactical shooter set in the Aetheria belt. Master zero-g combat, customize your exo-suit, and survive the vacuum.
            </p>
<div className="gsap-hero-fade flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 translate-y-4">
<button className="h-14 px-8 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all shadow-[0_0_30px_-10px_rgba(79,70,229,0.4)] hover:shadow-[0_0_50px_-10px_rgba(79,70,229,0.6)] flex items-center gap-2 hover:-translate-y-1">
<iconify-icon icon="solar:play-linear" width="18"></iconify-icon>
                    Watch Trailer
                </button>
<button className="h-14 px-8 rounded-full border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white text-sm font-medium transition-all bg-black/40 backdrop-blur-sm flex items-center gap-2 hover:-translate-y-1 hover:bg-zinc-900/60">
<iconify-icon icon="solar:user-plus-linear" width="18"></iconify-icon>
                    Join Vanguard
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</main>

<section className="border-y border-white/5 bg-black/20 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stats-container">
<div className="stat-item opacity-0">
<div className="text-3xl md:text-4xl font-medium text-white tracking-tight">2.5M+</div>
<div className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">Pre-registrations</div>
</div>
<div className="stat-item opacity-0">
<div className="text-3xl md:text-4xl font-medium text-white tracking-tight">120fps</div>
<div className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">Target</div>
</div>
<div className="stat-item opacity-0">
<div className="text-3xl md:text-4xl font-medium text-white tracking-tight">UE5</div>
<div className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">Unreal Engine</div>
</div>
<div className="stat-item opacity-0">
<div className="text-3xl md:text-4xl font-medium text-white tracking-tight">∞</div>
<div className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">Procedural Worlds</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-20">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="section-title text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 opacity-0 translate-y-10">Engineered for Immersion</h2>
<p className="section-desc text-zinc-400 max-w-lg text-lg opacity-0 translate-y-10">Experience high-fidelity physics, ray-traced lighting, and 3D spatial audio designed to heighten your senses.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">

<div className="feature-card md:col-span-2 rounded-3xl border border-white/10 bg-zinc-900/20 p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 opacity-0 translate-y-10 backdrop-blur-md">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-3">Ray-Traced Environments</h3>
<p className="text-base text-zinc-400 max-w-md font-light leading-relaxed">Real-time global illumination reflects every laser blast. See enemies around corners through reflective surfaces in stunning 4K.</p>
</div>
</div>

<div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-indigo-900/10 to-transparent mix-blend-screen"></div>
</div>

<div className="feature-card rounded-3xl border border-white/10 bg-zinc-900/20 p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 opacity-0 translate-y-10 backdrop-blur-md">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-3">Squad Tactics</h3>
<p className="text-base text-zinc-400 font-light leading-relaxed">Seamless drop-in matchmaking with role-based synergy bonuses.</p>
</div>
</div>
</div>

<div className="feature-card rounded-3xl border border-white/10 bg-zinc-900/20 p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 opacity-0 translate-y-10 backdrop-blur-md">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-3">Deep Customization</h3>
<p className="text-base text-zinc-400 font-light leading-relaxed">Mod your weapons down to the firing pin. Adjust exo-suit hydraulics.</p>
</div>
</div>
</div>

<div className="feature-card md:col-span-2 rounded-3xl border border-white/10 bg-zinc-900/20 p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 opacity-0 translate-y-10 backdrop-blur-md">
<div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-3">Anti-Cheat Architecture</h3>
<p className="text-base text-zinc-400 max-w-md font-light leading-relaxed">Kernel-level security ensures competitive integrity. Our AI-driven behavior analysis bans cheaters before the match ends.</p>
</div>
</div>

<div className="absolute -right-10 bottom-10 opacity-10 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
<iconify-icon className="text-white" icon="solar:shield-check-linear" width="240"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-20">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="section-title text-3xl font-medium text-white tracking-tight mb-2 opacity-0">Choose Your Operator</h2>
<p className="section-desc text-zinc-400 opacity-0">Three distinct classes. Infinite playstyles.</p>
</div>
<div className="flex gap-2 opacity-0 section-desc">
<button className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white text-white hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white text-white hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="class-card group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer opacity-0 translate-y-10">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-900/50 z-10"></div>
<img alt="Vanguard" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-[1.5s] grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase mb-2">Assault</div>
<h3 className="text-3xl font-medium text-white mb-2">The Spectre</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-sm text-zinc-300 pt-2 border-t border-white/20">
                                High mobility, cloaking tech, and silenced weaponry for surgical strikes.
                            </p>
</div>
</div>
</div>

<div className="class-card group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer opacity-0 translate-y-10" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-900/50 z-10"></div>
<img alt="Heavy" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-[1.5s] grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[10px] font-bold text-orange-400 tracking-widest uppercase mb-2">Heavy</div>
<h3 className="text-3xl font-medium text-white mb-2">The Titan</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-sm text-zinc-300 pt-2 border-t border-white/20">
                                Energy shielding, suppression fire, and area denial capabilities.
                            </p>
</div>
</div>
</div>

<div className="class-card group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer opacity-0 translate-y-10" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-900/50 z-10"></div>
<img alt="Support" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-[1.5s] grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-[10px] font-bold text-teal-400 tracking-widest uppercase mb-2">Tech</div>
<h3 className="text-3xl font-medium text-white mb-2">The Weaver</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-sm text-zinc-300 pt-2 border-t border-white/20">
                                Drone control, hacking enemy systems, and tactical healing.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden z-20">
<div className="max-w-4xl mx-auto relative z-10 text-center">
<h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-8">Secure Your Deployment</h2>
<p className="text-zinc-400 mb-12 text-lg">Pre-order now to receive the exclusive "Void Walker" skin pack and 3-day early access to the open beta.</p>
<div className="p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent inline-block w-full max-w-md backdrop-blur-xl">
<div className="bg-black/80 rounded-[22px] p-10 border border-white/5 shadow-2xl">
<div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
<span className="text-xl font-medium text-white">Standard Edition</span>
<div className="text-right">
<span className="text-3xl font-medium text-white">$69.99</span>
</div>
</div>
<ul className="space-y-5 text-left mb-10">
<li className="flex items-center gap-4 text-sm text-zinc-300">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Base Game (Digital)
                        </li>
<li className="flex items-center gap-4 text-sm text-zinc-300">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Pre-order Bonus Pack
                        </li>
<li className="flex items-center gap-4 text-sm text-zinc-300">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Beta Access Key
                        </li>
</ul>
<button className="w-full h-14 rounded-xl bg-white text-black font-semibold text-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 group">
                        Pre-order for PC
                        <iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:laptop-minimalistic-linear" width="18"></iconify-icon>
</button>
<div className="mt-6 flex items-center justify-center gap-4 text-zinc-500">
<iconify-icon icon="solar:gamepad-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider">Also on PS5 &amp; Xbox Series X</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-20 pb-10 px-6 relative z-20">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 text-white tracking-tighter font-medium text-xl mb-6">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span>AETHERIA</span>
</div>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed font-light">
                        Aetheria is a trademark of Void Interactive. Designed for the next generation of hardware to deliver unparalleled immersion.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-sm font-semibold">Game</h4>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">News</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Media</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Patch Notes</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-sm font-semibold">Support</h4>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Help Center</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Server Status</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-sm font-semibold">Legal</h4>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">EULA</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 gap-6">
<p className="text-[10px] text-zinc-600 uppercase tracking-widest">
                    © 2023 Void Interactive.
                </p>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors hover:scale-110 transform duration-200" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors hover:scale-110 transform duration-200" href="#">
<iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors hover:scale-110 transform duration-200" href="#">
<iconify-icon icon="solar:brand-youtube-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
