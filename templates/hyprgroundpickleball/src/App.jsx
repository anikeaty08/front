import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        navy: '#0f1423',
                        navy_light: '#1a2238',
                        orange: '#ff7e2e',
                        cream: '#f4f1ed',
                        green: '#0b6e3e',
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                    },
                    backgroundImage: {
                        'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
                    }
                }
            }
        }
    


        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('canvas-container');
            if (!container) return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
            camera.position.z = 14;

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // optimize performance
            container.appendChild(renderer.domElement);

            const paddleGroup = new THREE.Group();
            scene.add(paddleGroup);

            // Paddle Face
            const shape = new THREE.Shape();
            const w = 5, h = 6, r = 1;
            const x = -w/2, y = -h/2 + 1;

            shape.moveTo(x, y + r);
            shape.lineTo(x, y + h - r);
            shape.quadraticCurveTo(x, y + h, x + r, y + h);
            shape.lineTo(x + w - r, y + h);
            shape.quadraticCurveTo(x + w, y + h, x + w, y + h - r);
            shape.lineTo(x + w, y + r);
            shape.quadraticCurveTo(x + w, y, x + w - r, y);
            shape.lineTo(x + r, y);
            shape.quadraticCurveTo(x, y, x, y + r);

            const paddleGeo = new THREE.ExtrudeGeometry(shape, { steps: 2, depth: 0.25, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.1, bevelSegments: 3 });
            paddleGeo.center();
            paddleGeo.translate(0, 1.5, 0);

            // Textures/Materials
            const faceMat = new THREE.MeshStandardMaterial({ color: 0xff7e2e, roughness: 0.4, metalness: 0.1 });
            const sideMat = new THREE.MeshStandardMaterial({ color: 0x1a2238, roughness: 0.5 });
            const paddleMesh = new THREE.Mesh(paddleGeo, [faceMat, sideMat]);
            paddleGroup.add(paddleMesh);

            // Handle
            const handleGeo = new THREE.CylinderGeometry(0.35, 0.45, 3.5, 16);
            const handleMat = new THREE.MeshStandardMaterial({ color: 0x111, roughness: 0.9 });
            const handle = new THREE.Mesh(handleGeo, handleMat);
            handle.position.y = -1.8;
            paddleGroup.add(handle);

            // Lights
            const ambLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambLight);
            const dirLight = new THREE.DirectionalLight(0xffffff, 1);
            dirLight.position.set(5, 5, 5);
            scene.add(dirLight);
            const orangeLight = new THREE.PointLight(0xff7e2e, 0.8, 10);
            orangeLight.position.set(-3, 0, 3);
            scene.add(orangeLight);

            // Animation vars
            let mouseX = 0, mouseY = 0;
            const clock = new THREE.Clock();

            // Interactions
            document.addEventListener('mousemove', (e) => {
                const windowHalfX = window.innerWidth / 2;
                const windowHalfY = window.innerHeight / 2;
                mouseX = (e.clientX - windowHalfX) / 300;
                mouseY = (e.clientY - windowHalfY) / 300;
            });

            function animate() {
                requestAnimationFrame(animate);
                const t = clock.getElapsedTime();

                // Gentle float
                paddleGroup.position.y = Math.sin(t * 1.2) * 0.15;
                
                // Rotation
                paddleGroup.rotation.y += (mouseX - paddleGroup.rotation.y + (t * 0.1)) * 0.05;
                paddleGroup.rotation.x += (mouseY - paddleGroup.rotation.x) * 0.05;
                paddleGroup.rotation.z = -0.1 + (mouseX * -0.3);

                renderer.render(scene, camera);
            }
            animate();

            window.addEventListener('resize', () => {
                const width = container.clientWidth;
                const height = container.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-navy/80 border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<img alt="HYPRGROUND" className="h-8 w-auto object-contain object-left brightness-0 invert" src="https://www.hyprground.com/_assets/media/e9b53474346b150db913af5f128b0713.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-white/70 hover:text-orange transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-white/70 hover:text-orange transition-colors" href="#services">Programs</a>
<a className="text-sm font-medium text-white/70 hover:text-orange transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-white/70 hover:text-orange transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-white/70 hover:text-orange transition-colors" href="#contact">Contact</a>
</div>
<div className="hidden lg:flex items-center gap-4">
<a className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-orange text-navy font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(255,126,46,0.4)]" href="https://link.courtsite.my/hypr" target="_blank">
<span className="relative z-10 flex items-center gap-2">
                        Book Court
                        <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
</div>

<label className="lg:hidden p-2 text-white cursor-pointer z-50" htmlFor="menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</label>
</div>
</nav>

<input className="hidden" id="menu-toggle" type="checkbox"/>
<div className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl pt-28 px-6 opacity-0 pointer-events-none transform -translate-y-4 transition-all duration-300 lg:hidden flex flex-col h-screen" id="mobile-menu">
<div className="flex flex-col gap-6 text-center">
<a className="text-3xl font-semibold tracking-tight hover:text-orange transition-colors" href="#about" onclick="document.getElementById('menu-toggle').checked = false">About</a>
<a className="text-3xl font-semibold tracking-tight hover:text-orange transition-colors" href="#services" onclick="document.getElementById('menu-toggle').checked = false">Programs</a>
<a className="text-3xl font-semibold tracking-tight hover:text-orange transition-colors" href="#locations" onclick="document.getElementById('menu-toggle').checked = false">Locations</a>
<a className="text-3xl font-semibold tracking-tight hover:text-orange transition-colors" href="#gallery" onclick="document.getElementById('menu-toggle').checked = false">Gallery</a>
<a className="text-3xl font-semibold tracking-tight hover:text-orange transition-colors" href="#contact" onclick="document.getElementById('menu-toggle').checked = false">Contact</a>
</div>
<div className="mt-auto mb-12 space-y-4">
<a className="flex items-center justify-center w-full py-4 bg-orange text-navy font-bold text-lg rounded-xl" href="https://link.courtsite.my/hypr">Book a Court</a>
</div>
</div>

<header className="relative min-h-screen pt-20 flex items-center bg-grid-pattern bg-[length:60px_60px] border-b border-white/5">

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange/20 rounded-full blur-[120px] opacity-40 animate-pulse pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="space-y-8 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/10 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-orange font-semibold">24/7 Air-Conditioned Facility</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter uppercase text-white">
                    Up Your<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Game with</span>
<span className="text-orange">Hypr.</span>
</h1>
<p className="text-lg text-white/60 max-w-lg leading-relaxed">
                    Hyprground is a premier pickleball facility offering state-of-the-art courts designed to cater to players of all skill levels.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 bg-white text-navy font-bold rounded-lg hover:bg-orange hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="https://link.courtsite.my/hypr" target="_blank">
                        Book Now
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="20"></iconify-icon>
</a>
<a className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2" href="#services">
                        Explore Programs
                    </a>
</div>
<div className="pt-8 flex items-center gap-8 border-t border-white/10">
<div>
<div className="text-2xl font-bold text-white">4+</div>
<div className="text-xs text-white/40 uppercase tracking-wider">Locations</div>
</div>
<div>
<div className="text-2xl font-bold text-white">24/7</div>
<div className="text-xs text-white/40 uppercase tracking-wider">Access (Cyberjaya)</div>
</div>
<div>
<div className="text-2xl font-bold text-white">RM40</div>
<div className="text-xs text-white/40 uppercase tracking-wider">From / Hour</div>
</div>
</div>
</div>

<div className="relative h-[400px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2">
<div className="relative z-10" id="canvas-container"></div>

<div className="absolute inset-0 border border-white/5 rounded-full scale-75 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-0 border border-white/5 rounded-full scale-50 animate-[spin_15s_linear_infinite_reverse]"></div>
</div>
</div>
</header>

<div className="w-full bg-orange py-3 overflow-hidden">
<div className="marquee-container w-full whitespace-nowrap">
<div className="marquee-content inline-block">
<span className="text-navy font-black text-xl uppercase tracking-widest px-8">Eat. Sleep. Pickleball.</span>
<span className="text-navy/60 font-light text-xl px-2">///</span>
<span className="text-navy font-black text-xl uppercase tracking-widest px-8">Community First</span>
<span className="text-navy/60 font-light text-xl px-2">///</span>
<span className="text-navy font-black text-xl uppercase tracking-widest px-8">Professional Courts</span>
<span className="text-navy/60 font-light text-xl px-2">///</span>
<span className="text-navy font-black text-xl uppercase tracking-widest px-8">Beginner Friendly</span>
<span className="text-navy/60 font-light text-xl px-2">///</span>
<span className="text-navy font-black text-xl uppercase tracking-widest px-8">Eat. Sleep. Pickleball.</span>
<span className="text-navy/60 font-light text-xl px-2">///</span>
<span className="text-navy font-black text-xl uppercase tracking-widest px-8">Community First</span>
<span className="text-navy/60 font-light text-xl px-2">///</span>
</div>
</div>
</div>

<section className="py-24 px-6 bg-navy relative" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-orange to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition duration-500"></div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="Pickleball Community" className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1626245358966-8848d7065363?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white font-bold text-xl">The Pioneer of Private Lounge</p>
<p className="text-orange text-sm uppercase tracking-widest">Relax &amp; Recharge</p>
</div>
</div>
</div>
<div className="space-y-6">
<h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
                    Hyprground is <span className="text-orange">My Ground</span>
</h2>
<div className="h-1 w-20 bg-orange"></div>
<p className="text-white/70 leading-relaxed text-lg">
                    Whether you're looking to refine your game, engage in friendly competition, or simply enjoy the sport in a top-tier environment, Hyprground provides the perfect setting for pickleball enthusiasts to thrive and have fun.
                </p>
<p className="text-white/70 leading-relaxed text-lg">
                    We are proud to offer the first pickleball court with an exclusive <span className="text-white font-semibold">private lounge</span>, giving players a unique space to relax and recharge in style.
                </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-orange text-2xl mt-1" icon="solar:sofa-2-linear"></iconify-icon>
<div>
<h4 className="text-white font-semibold">Private Lounge</h4>
<p className="text-sm text-white/50">From RM70 / hour</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-orange text-2xl mt-1" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<div>
<h4 className="text-white font-semibold">Community Court</h4>
<p className="text-sm text-white/50">From RM40 / hour</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-navy_light border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<span className="text-orange text-sm font-bold uppercase tracking-widest">What We Offer</span>
<h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mt-3 mb-6 text-white">Programs for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-yellow-500">Every Level</span></h2>
<p className="text-white/60">Expert coaching, equipment rentals, and full-service catering to enhance your pickleball experience.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-navy border border-white/5 hover:border-orange/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-orange group-hover:text-navy transition-colors">
<iconify-icon icon="solar:whistle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Expert Coaching</h3>
<p className="text-white/50 mb-6 text-sm leading-relaxed">Hyprground provides expert coaching services for players of all skill levels. Master your dink and drive.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-white/70"><iconify-icon className="text-orange" icon="solar:check-circle-linear"></iconify-icon> Private Lessons</li>
<li className="flex items-center gap-2 text-sm text-white/70"><iconify-icon className="text-orange" icon="solar:check-circle-linear"></iconify-icon> Group Clinics</li>
<li className="flex items-center gap-2 text-sm text-white/70"><iconify-icon className="text-orange" icon="solar:check-circle-linear"></iconify-icon> Skill Assessment</li>
</ul>
<a className="inline-flex items-center text-orange font-semibold hover:gap-2 transition-all" href="#contact">Start Learning <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group p-8 rounded-3xl bg-navy border border-white/5 hover:border-orange/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-orange group-hover:text-navy transition-colors">
<iconify-icon icon="solar:bag-heart-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Rental &amp; Sales</h3>
<p className="text-white/50 mb-6 text-sm leading-relaxed">We offer pickleball paddle rentals so you can enjoy the game even if you don’t have your own equipment. Pro shop available.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-white/70"><iconify-icon className="text-orange" icon="solar:check-circle-linear"></iconify-icon> Paddle Rental</li>
<li className="flex items-center gap-2 text-sm text-white/70"><iconify-icon className="text-orange" icon="solar:check-circle-linear"></iconify-icon> Equipment Sales</li>
<li className="flex items-center gap-2 text-sm text-white/70"><iconify-icon className="text-orange" icon="solar:check-circle-linear"></iconify-icon> Demos Available</li>
</ul>
<a className="inline-flex items-center text-orange font-semibold hover:gap-2 transition-all" href="#contact">Visit Pro Shop <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group p-8 rounded-3xl bg-navy border border-white/5 hover:border-orange/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-orange group-hover:text-navy transition-colors">
<iconify-icon icon="solar:chef-hat-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Catering Service</h3>
<p className="text-white/50 mb-6 text-sm leading-relaxed">Full-service catering for events, providing delicious &amp; healthy options. Perfect for corporate buyouts.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-white/70"><iconify-icon className="text-orange" icon="solar:check-circle-linear"></iconify-icon> Healthy Options</li>
<li className="flex items-center gap-2 text-sm text-white/70"><iconify-icon className="text-orange" icon="solar:check-circle-linear"></iconify-icon> Event Packages</li>
<li className="flex items-center gap-2 text-sm text-white/70"><iconify-icon className="text-orange" icon="solar:check-circle-linear"></iconify-icon> Custom Menus</li>
</ul>
<a className="inline-flex items-center text-orange font-semibold hover:gap-2 transition-all" href="#contact">Book Event <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="locations">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">Our <span className="text-orange">Locations</span></h2>
<p className="text-white/60">Conveniently located hubs across the Klang Valley.</p>
</div>
<a className="hidden md:inline-flex px-6 py-3 border border-white/20 rounded-full text-sm font-semibold hover:bg-white hover:text-navy transition-colors" href="https://link.courtsite.my/hypr">View All</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-navy_light border border-white/5">
<img alt="Cyberjaya" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1627993072049-74d6da21c43f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 right-4 flex justify-between">
<span className="px-2 py-1 bg-green/20 border border-green/40 text-green-400 text-[10px] font-bold uppercase rounded-full backdrop-blur-md">24-HOUR</span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-2xl font-bold text-white mb-1">Cyberjaya</h3>
<p className="text-white/50 text-xs mb-4">The flagship facility.</p>
<a className="flex items-center justify-between w-full py-3 px-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-orange hover:text-navy transition-all" href="https://link.courtsite.my/hyprcyber">
                            Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-navy_light border border-white/5">
<img alt="Kuchai Lama" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 right-4 flex justify-between">
<span className="px-2 py-1 bg-orange/20 border border-orange/40 text-orange text-[10px] font-bold uppercase rounded-full backdrop-blur-md">NEW</span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-2xl font-bold text-white mb-1">Kuchai Lama</h3>
<p className="text-white/50 text-xs mb-4">Central hub.</p>
<a className="flex items-center justify-between w-full py-3 px-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-orange hover:text-navy transition-all" href="https://www.courtsite.my/centre/Hyprground%20Pickleball%20-%20Kuchai/cmfqdvq2i05mk085wvjpdl1x8">
                            Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-navy_light border border-white/5">
<img alt="Balakong" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-2xl font-bold text-white mb-1">Balakong</h3>
<p className="text-white/50 text-xs mb-4">Section 19 area.</p>
<a className="flex items-center justify-between w-full py-3 px-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-orange hover:text-navy transition-all" href="https://link.courtsite.my/hyprblkg">
                            Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-navy_light border border-white/5">
<img alt="Sungai Buloh" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40 grayscale" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 right-4 flex justify-between">
<span className="px-2 py-1 bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase rounded-full backdrop-blur-md">NEW</span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-2xl font-bold text-white mb-1">Sungai Buloh</h3>
<p className="text-white/50 text-xs mb-4">Secret Venue.</p>
<a className="flex items-center justify-between w-full py-3 px-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-orange hover:text-navy transition-all" href="https://www.courtsite.my/centre/Hyprground%20Pickleball%20-%20Sg%20Buloh/cmj9fk9j6002808di20tepiif">
                            Book Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-navy_light border-t border-white/5" id="gallery">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12 text-center">Life on <span className="text-orange">Ground</span></h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
<img alt="Action Shot" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1591123120675-6f7f4a542b5c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden relative group">
<img alt="Equipment" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1616239167123-d34e2f3d9178?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden relative group">
<img alt="Gym" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 rounded-2xl overflow-hidden relative group">
<img alt="Community" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tight">Common <span className="text-orange">Questions</span></h2>
<div className="space-y-4">

<div className="faq-item rounded-2xl bg-white/5 border border-white/10 overflow-hidden cursor-pointer" onclick="this.classList.toggle('active')">
<div className="p-6 flex justify-between items-center">
<h3 className="font-semibold text-lg">Do I need to bring my own paddle?</h3>
<iconify-icon className="faq-icon text-orange text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content px-6 text-white/60">
<p className="pb-6">No! We offer high-quality paddle rentals at the front desk. If you fall in love with the game, we also sell top brands in our pro shop.</p>
</div>
</div>

<div className="faq-item rounded-2xl bg-white/5 border border-white/10 overflow-hidden cursor-pointer" onclick="this.classList.toggle('active')">
<div className="p-6 flex justify-between items-center">
<h3 className="font-semibold text-lg">What are the rates?</h3>
<iconify-icon className="faq-icon text-orange text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content px-6 text-white/60">
<p className="pb-6">Community courts start from RM40/hour. Our exclusive Private Lounge courts start from RM70/hour. Rates vary by location and time.</p>
</div>
</div>

<div className="faq-item rounded-2xl bg-white/5 border border-white/10 overflow-hidden cursor-pointer" onclick="this.classList.toggle('active')">
<div className="p-6 flex justify-between items-center">
<h3 className="font-semibold text-lg">Do I need to book in advance?</h3>
<iconify-icon className="faq-icon text-orange text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content px-6 text-white/60">
<p className="pb-6">We highly recommend booking in advance, especially during peak evening hours and weekends, as slots fill up quickly.</p>
</div>
</div>
</div>
</section>

<footer className="bg-navy_light pt-24 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-24">

<div className="space-y-8">
<div className="flex items-center gap-2">

<img alt="HYPRGROUND" className="h-12 w-auto object-contain object-left brightness-0 invert" src="https://www.hyprground.com/_assets/media/e9b53474346b150db913af5f128b0713.png"/>
</div>
<p className="text-white/60 max-w-md">
                        The ultimate destination for pickleball enthusiasts. Whether you are competing or just having fun, this is your ground.
                    </p>
<div className="space-y-4">
<a className="flex items-center gap-4 text-white/80 hover:text-orange transition-colors" href="mailto:hello@hyprground.com">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><iconify-icon icon="solar:letter-linear"></iconify-icon></div>
                            hello@hyprground.com
                        </a>
<a className="flex items-center gap-4 text-white/80 hover:text-orange transition-colors" href="https://wa.link/4y4q6u">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon></div>
                            +60 11-1248 3503
                        </a>
</div>
<div className="flex gap-4 pt-4">
<a className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-orange hover:text-navy transition-all duration-300" href="https://www.instagram.com/hyprground/" target="_blank">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300" href="https://www.facebook.com/profile.php?id=61564984310363" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon>
</a>
</div>
</div>

<div className="bg-navy p-8 rounded-3xl border border-white/5">
<h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thanks for contacting us! We will get back to you shortly.');">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-navy_light border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange/50 transition-colors" placeholder="Name" type="text"/>
<input className="w-full bg-navy_light border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange/50 transition-colors" placeholder="Email" type="email"/>
</div>
<select className="w-full bg-navy_light border border-white/10 rounded-xl px-4 py-3 text-white/70 focus:outline-none focus:border-orange/50 transition-colors">
<option>I'm interested in...</option>
<option>Court Booking</option>
<option>Coaching</option>
<option>Corporate Events</option>
<option>Other</option>
</select>
<textarea className="w-full bg-navy_light border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange/50 transition-colors" placeholder="Message" rows="4"></textarea>
<button className="w-full bg-orange text-navy font-bold py-4 rounded-xl hover:brightness-110 transition-all" type="submit">Send Message</button>
</form>
</div>
</div>
<div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
<p>© 2024 HYPRGROUND. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
