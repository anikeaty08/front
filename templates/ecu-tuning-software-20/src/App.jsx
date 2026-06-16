import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Particles Background Generation
        (function() {
            const container = document.getElementById('particles');
            if (!container) return;
            for (let i = 0; i < 40; i++) {
                const p = document.createElement('div');
                p.className = 'particle';
                p.style.left = Math.random() * 100 + '%';
                p.style.animationDuration = (8 + Math.random() * 15) + 's';
                p.style.animationDelay = (Math.random() * 10) + 's';
                const size = (1 + Math.random() * 2) + 'px';
                p.style.width = size;
                p.style.height = size;
                p.style.background = Math.random() > 0.5 ? 'rgba(59,130,246,0.4)' : 'rgba(139,92,246,0.3)';
                container.appendChild(p);
            }
        })();

        // Scroll Reveal Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

        // Smooth Counter Animation
        function animateCounter(id, target, prefix = '', suffix = '', decimals = 0, duration = 2000) {
            const el = document.getElementById(id);
            if (!el) return;
            const start = performance.now();
            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = eased * target;
                el.textContent = prefix + current.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
        }

        // Trigger counters on hero visibility
        const heroObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounter('counter-hp', 87, '+', ' HP', 0, 2000);
                animateCounter('counter-vehicles', 52400, '', '+', 0, 2500);
                animateCounter('counter-maps', 3200, '', '+', 0, 2200);
                heroObserver.disconnect();
            }
        }, { threshold: 0.3 });
        const heroSection = document.querySelector('section');
        if (heroSection) heroObserver.observe(heroSection);

        // Live Dashboard Telemetry Simulation
        function simulateDashboard() {
            const time = Date.now();
            // Simulate realistic revving engine
            const rpm = 2500 + Math.sin(time / 800) * 2000 + Math.random() * 200;
            const boost = Math.max(0, ((rpm - 3000) / 400) + (Math.random() * 1)).toFixed(1);
            const afr = (14.7 - (rpm > 4500 ? 2.0 : 0) + (Math.random() * 0.4 - 0.2)).toFixed(1);
            const temp = (85 + (rpm / 1500) + Math.random() * 1).toFixed(0);

            const rpmEl = document.getElementById('rpm-counter');
            const boostEl = document.getElementById('boost-counter');
            const afrEl = document.getElementById('afr-counter');
            const tempEl = document.getElementById('temp-counter');

            if (rpmEl) rpmEl.textContent = Math.round(rpm).toLocaleString();
            if (boostEl) boostEl.textContent = boost;
            if (afrEl) afrEl.textContent = afr;
            if (tempEl) tempEl.textContent = temp;

            const rpmBar = document.getElementById('rpm-bar');
            const boostBar = document.getElementById('boost-bar');
            const afrBar = document.getElementById('afr-bar');
            const tempBar = document.getElementById('temp-bar');

            if (rpmBar) rpmBar.style.width = Math.min(100, (rpm / 8000 * 100)) + '%';
            if (boostBar) boostBar.style.width = Math.min(100, (boost / 20 * 100)) + '%';
            if (afrBar) afrBar.style.width = Math.min(100, (afr / 20 * 100)) + '%';
            if (tempBar) tempBar.style.width = Math.min(100, (temp / 120 * 100)) + '%';

            requestAnimationFrame(simulateDashboard);
        }
        simulateDashboard();

        // 3D Car Model (Simplified & robust using Three.js)
        (function() {
            const container = document.getElementById('car-canvas');
            if (!container || typeof THREE === 'undefined') return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.2;
            container.appendChild(renderer.domElement);

            // Lighting Setup
            scene.add(new THREE.AmbientLight(0x202030, 1.5));
            const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
            dirLight.position.set(5, 10, 5);
            scene.add(dirLight);
            
            const blueLight = new THREE.DirectionalLight(0x3b82f6, 2);
            blueLight.position.set(-5, 5, -5);
            scene.add(blueLight);
            
            const purpleLight = new THREE.DirectionalLight(0x8b5cf6, 1.5);
            purpleLight.position.set(5, 2, -5);
            scene.add(purpleLight);

            // Car Construction
            const carGroup = new THREE.Group();

            // Materials
            const bodyMat = new THREE.MeshPhysicalMaterial({
                color: 0x1a1a1f, metalness: 0.9, roughness: 0.2, 
                clearcoat: 1.0, clearcoatRoughness: 0.1
            });
            const glassMat = new THREE.MeshPhysicalMaterial({
                color: 0x0a0a0f, metalness: 0.9, roughness: 0.1,
                transparent: true, opacity: 0.8
            });
            const tireMat = new THREE.MeshPhysicalMaterial({ color: 0x050505, roughness: 0.9 });
            const rimMat = new THREE.MeshPhysicalMaterial({ color: 0x333333, metalness: 0.8, roughness: 0.2 });
            const lightMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
            const tailMat = new THREE.MeshBasicMaterial({ color: 0xff1111 });

            // Base Body
            const bodyLower = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.7, 1.8), bodyMat);
            bodyLower.position.y = 0.45;
            carGroup.add(bodyLower);

            // Cabin
            const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.6, 1.5), glassMat);
            cabin.position.set(-0.2, 1.1, 0);
            carGroup.add(cabin);

            // Details (Headlights / Taillights)
            const hl1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.15, 0.3), lightMat);
            hl1.position.set(-2.1, 0.6, 0.6);
            carGroup.add(hl1);
            const hl2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.15, 0.3), lightMat);
            hl2.position.set(-2.1, 0.6, -0.6);
            carGroup.add(hl2);
            
            const tl1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.15, 0.4), tailMat);
            tl1.position.set(2.1, 0.6, 0.6);
            carGroup.add(tl1);
            const tl2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.15, 0.4), tailMat);
            tl2.position.set(2.1, 0.6, -0.6);
            carGroup.add(tl2);

            // Wheels
            function createWheel(x, z) {
                const wheelGrp = new THREE.Group();
                const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.25, 24), tireMat);
                tire.rotation.x = Math.PI / 2;
                wheelGrp.add(tire);
                const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.27, 16), rimMat);
                rim.rotation.x = Math.PI / 2;
                wheelGrp.add(rim);
                wheelGrp.position.set(x, 0.35, z);
                return wheelGrp;
            }
            carGroup.add(createWheel(-1.3, 0.9));
            carGroup.add(createWheel(-1.3, -0.9));
            carGroup.add(createWheel(1.3, 0.9));
            carGroup.add(createWheel(1.3, -0.9));

            // Shadow
            const shadow = new THREE.Mesh(
                new THREE.PlaneGeometry(5.0, 2.5),
                new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4 })
            );
            shadow.rotation.x = -Math.PI / 2;
            shadow.position.y = 0.01;
            carGroup.add(shadow);

            scene.add(carGroup);
            
            // Camera position
            camera.position.set(4.5, 3, 5);
            camera.lookAt(0, 0.5, 0);

            // Animation Loop
            let time = 0;
            let mouseX = 0;
            
            document.addEventListener('mousemove', (e) => {
                mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
            });

            function animate() {
                requestAnimationFrame(animate);
                time += 0.005;
                
                // Idle floating and slight rotation
                carGroup.position.y = Math.sin(time * 2) * 0.05;
                
                // Smoothly interpolate rotation towards mouse position
                const targetRot = -0.5 + mouseX;
                carGroup.rotation.y += (targetRot - carGroup.rotation.y) * 0.05;
                
                renderer.render(scene, camera);
            }
            animate();

            // Handle Resize
            window.addEventListener('resize', () => {
                if(!container) return;
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        })();

        // Smooth Scroll for Anchors
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="particles" style={{position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '0'}}></div>

<nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-[#08080d]/60 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div style={{width: '28px', height: '28px', background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<span className="text-white font-semibold text-xs tracking-tighter">V</span>
</div>
<span className="font-medium text-sm tracking-tight">VECTUNE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
<a className="hover:text-white transition-colors duration-300" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-300" href="#performance">Performance</a>
<a className="hover:text-white transition-colors duration-300" href="#compatibility">Vehicles</a>
<a className="hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300" href="#">Sign in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center hero-grid pt-16">

<div style={{position: 'absolute', inset: '0', background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.12), transparent)', pointerEvents: 'none'}}></div>
<div style={{position: 'absolute', inset: '0', background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139,92,246,0.06), transparent)', pointerEvents: 'none'}}></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="space-y-8 py-12">
<div className="animate-slide-up">
<div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-xs text-blue-400 font-medium mb-6" style={{animation: 'pulse-glow 3s infinite'}}>
<span className="relative w-1.5 h-1.5 bg-blue-400 rounded-full ping-dot"></span>
                        New: Stage 3+ Maps Available
                    </div>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] animate-slide-up-delay-1">
                    Unleash your engine's<br/>
<span className="gradient-text">true potential</span>
</h1>
<p className="text-base text-zinc-400 max-w-lg leading-relaxed animate-slide-up-delay-2 font-medium">
                    Professional ECU calibration software that delivers measurable gains with OEM-level reliability. Precision tuning for modern performance vehicles.
                </p>
<div className="flex flex-wrap items-center gap-4 animate-slide-up-delay-3">
<a className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] text-sm" href="#">
<iconify-icon icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Start Tuning
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-[1.02] text-sm" href="#">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        Documentation
                    </a>
</div>

<div className="flex flex-wrap gap-10 pt-6 animate-slide-up-delay-3 border-t border-white/5 mt-8">
<div>
<div className="text-2xl font-semibold tracking-tight counter text-white" id="counter-hp">0</div>
<div className="text-xs font-medium text-zinc-500 mt-1">Avg. HP Gain</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight counter text-white" id="counter-vehicles">0</div>
<div className="text-xs font-medium text-zinc-500 mt-1">Vehicles Tuned</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight counter text-white" id="counter-maps">0</div>
<div className="text-xs font-medium text-zinc-500 mt-1">Custom Maps</div>
</div>
</div>
</div>

<div className="relative flex items-center justify-center w-full" style={{height: '500px'}}>
<div className="w-full h-full absolute inset-0 z-0" id="car-canvas"></div>

<div className="absolute top-8 right-0 lg:right-4 bg-[#0a0a0f]/80 border border-white/10 rounded-xl p-3 backdrop-blur-md z-10" style={{animation: 'float 5s ease-in-out infinite'}}>
<div className="flex items-center gap-2 text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
<span className="text-zinc-400">ECU Connected</span>
</div>
<div className="text-base font-semibold tracking-tight mt-1">Stage 2+ Active</div>
</div>
<div className="absolute bottom-16 left-0 lg:left-4 bg-[#0a0a0f]/80 border border-white/10 rounded-xl p-3 backdrop-blur-md z-10" style={{animation: 'float 6s ease-in-out 1s infinite'}}>
<div className="text-xs font-medium text-zinc-400">Power Output</div>
<div className="text-base font-semibold tracking-tight text-blue-400 mt-0.5">+87 HP</div>
<div className="flex gap-1 mt-2 items-end h-[16px]">
<div className="wave-bar bg-blue-500 rounded-full w-[3px]" style={{height: '8px', animationDelay: '0s'}}></div>
<div className="wave-bar bg-blue-500 rounded-full w-[3px]" style={{height: '12px', animationDelay: '0.1s'}}></div>
<div className="wave-bar bg-blue-500 rounded-full w-[3px]" style={{height: '16px', animationDelay: '0.2s'}}></div>
<div className="wave-bar bg-blue-500 rounded-full w-[3px]" style={{height: '10px', animationDelay: '0.3s'}}></div>
<div className="wave-bar bg-blue-500 rounded-full w-[3px]" style={{height: '14px', animationDelay: '0.4s'}}></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{animationDelay: '1.5s', animationFillMode: 'both'}}>
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Scroll</span>
<div className="w-4 h-7 border border-zinc-700 rounded-full flex justify-center pt-1">
<div className="w-1 h-1.5 bg-zinc-500 rounded-full" style={{animation: 'slide-up 1.5s ease-in-out infinite'}}></div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#0a0a0f]/50 py-10 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-[10px] font-medium text-zinc-500 mb-6 uppercase tracking-widest">Trusted by performance shops globally</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40">
<span className="text-lg font-semibold tracking-tighter">APR</span>
<span className="text-lg font-semibold tracking-tighter">COBB</span>
<span className="text-lg font-semibold tracking-tighter">DINAN</span>
<span className="text-lg font-semibold tracking-tighter">MHD</span>
<span className="text-lg font-semibold tracking-tighter">BOOTMOD3</span>
<span className="text-lg font-semibold tracking-tighter">ECUTEK</span>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
<div className="inline-flex items-center justify-center bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1 text-xs font-medium text-purple-400 mb-4">
                    Features
                </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                    Everything you need for<br/>
<span className="gradient-text">precision tuning</span>
</h2>
<p className="text-sm text-zinc-400 font-medium">Advanced tools built for professionals and enthusiasts who demand the absolute best from their vehicles.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="scroll-reveal card-hover glow-border bg-[#0a0a0f] rounded-2xl p-6 border border-white/5">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
<iconify-icon icon="solar:cpu-bolt-linear" style={{color: '#3b82f6', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-medium text-sm mb-2 text-white">Real-Time Flash</h3>
<p className="text-xs text-zinc-400 leading-relaxed font-medium">Flash ECU maps in real-time via OBD-II with millisecond precision. No bench required for most supported vehicles.</p>
</div>

<div className="scroll-reveal card-hover glow-border bg-[#0a0a0f] rounded-2xl p-6 border border-white/5" style={{transitionDelay: '0.1s'}}>
<div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
<iconify-icon icon="solar:graph-up-linear" style={{color: '#8b5cf6', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-medium text-sm mb-2 text-white">Dyno Simulation</h3>
<p className="text-xs text-zinc-400 leading-relaxed font-medium">Built-in virtual dyno with predictive power curves. Visualize expected gains before flashing any parameter changes.</p>
</div>

<div className="scroll-reveal card-hover glow-border bg-[#0a0a0f] rounded-2xl p-6 border border-white/5" style={{transitionDelay: '0.2s'}}>
<div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
<iconify-icon icon="solar:shield-check-linear" style={{color: '#06b6d4', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-medium text-sm mb-2 text-white">Safety Limits</h3>
<p className="text-xs text-zinc-400 leading-relaxed font-medium">Intelligent safety protocols automatically monitor AFR, knock, and boost to protect your engine at all times.</p>
</div>

<div className="scroll-reveal card-hover glow-border bg-[#0a0a0f] rounded-2xl p-6 border border-white/5">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
<iconify-icon icon="solar:database-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-medium text-sm mb-2 text-white">Map Library</h3>
<p className="text-xs text-zinc-400 leading-relaxed font-medium">Access 50,000+ verified calibration maps from our vetted community of professional tuners worldwide.</p>
</div>

<div className="scroll-reveal card-hover glow-border bg-[#0a0a0f] rounded-2xl p-6 border border-white/5" style={{transitionDelay: '0.1s'}}>
<div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5">
<iconify-icon icon="solar:tuning-2-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-medium text-sm mb-2 text-white">Map Editor Pro</h3>
<p className="text-xs text-zinc-400 leading-relaxed font-medium">Advanced 3D table editor with interpolation tools, axis scaling, and direct map comparison views.</p>
</div>

<div className="scroll-reveal card-hover glow-border bg-[#0a0a0f] rounded-2xl p-6 border border-white/5" style={{transitionDelay: '0.2s'}}>
<div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-5">
<iconify-icon icon="solar:smartphone-update-linear" style={{color: '#f43f5e', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="font-medium text-sm mb-2 text-white">Mobile Logging</h3>
<p className="text-xs text-zinc-400 leading-relaxed font-medium">Log engine data straight from your phone via Bluetooth. Review pulls, analyze logs, and share instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#0a0a0f]/30 border-y border-white/5" id="performance">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="scroll-reveal w-full">
<div className="bg-[#08080d] rounded-2xl border border-white/5 p-6 overflow-hidden relative shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<div>
<h3 className="font-medium text-sm text-white">Dyno Results</h3>
<p className="text-[10px] font-medium text-zinc-500 mt-1 uppercase tracking-wide">BMW E92 M3 — S65 4.0L V8</p>
</div>
<div className="flex gap-4 text-xs font-medium">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<span className="text-zinc-400">Stock</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
<span className="text-white">Tuned</span>
</div>
</div>
</div>

<div className="relative w-full aspect-[2/1] z-10">
<svg className="w-full h-full overflow-visible" viewbox="0 0 500 250">

<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="40" x2="40" y1="20" y2="220"></line>
<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="40" x2="480" y1="220" y2="220"></line>
<line stroke="rgba(255,255,255,0.03)" stroke-dasharray="4" strokeWidth="1" x1="40" x2="480" y1="170" y2="170"></line>
<line stroke="rgba(255,255,255,0.03)" stroke-dasharray="4" strokeWidth="1" x1="40" x2="480" y1="120" y2="120"></line>
<line stroke="rgba(255,255,255,0.03)" stroke-dasharray="4" strokeWidth="1" x1="40" x2="480" y1="70" y2="70"></line>

<text fill="#52525b" fontFamily="Inter" fontSize="9" text-anchor="end" x="30" y="224">0</text>
<text fill="#52525b" fontFamily="Inter" fontSize="9" text-anchor="end" x="30" y="174">125</text>
<text fill="#52525b" fontFamily="Inter" fontSize="9" text-anchor="end" x="30" y="124">250</text>
<text fill="#52525b" fontFamily="Inter" fontSize="9" text-anchor="end" x="30" y="74">375</text>
<text fill="#52525b" fontFamily="Inter" fontSize="9" text-anchor="end" x="30" y="24">500</text>

<text fill="#52525b" fontFamily="Inter" fontSize="9" text-anchor="middle" x="40" y="238">2k</text>
<text fill="#52525b" fontFamily="Inter" fontSize="9" text-anchor="middle" x="150" y="238">4k</text>
<text fill="#52525b" fontFamily="Inter" fontSize="9" text-anchor="middle" x="260" y="238">6k</text>
<text fill="#52525b" fontFamily="Inter" fontSize="9" text-anchor="middle" x="370" y="238">8k</text>
<text fill="#52525b" fontFamily="Inter" fontSize="9" text-anchor="middle" x="460" y="238">RPM</text>

<path d="M40,200 C100,195 150,150 200,140 S300,100 350,85 S400,60 420,65 L460,75" fill="none" stroke="#52525b" stroke-dasharray="600" stroke-dashoffset="600" strokeLinecap="round" strokeWidth="2" style={{animation: 'dash 2s ease-out 0.5s forwards'}}></path>

<defs>
<lineargradient id="tuneGrad" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#3b82f6"></stop>
<stop offset="100%" stop-color="#8b5cf6"></stop>
</lineargradient>
<lineargradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(59,130,246,0.2)"></stop>
<stop offset="100%" stop-color="rgba(59,130,246,0)"></stop>
</lineargradient>
</defs>

<path d="M40,190 C100,180 150,120 200,110 S300,70 350,50 S400,25 420,30 L460,45 L460,220 L40,220 Z" fill="url(#areaGrad)" opacity="0" style={{animation: 'fade-in 1s ease-out 1.5s forwards'}}></path>

<path d="M40,190 C100,180 150,120 200,110 S300,70 350,50 S400,25 420,30 L460,45" fill="none" stroke="url(#tuneGrad)" stroke-dasharray="600" stroke-dashoffset="600" strokeLinecap="round" strokeWidth="2.5" style={{animation: 'dash 2s ease-out 1s forwards', filter: 'drop-shadow(0 4px 6px rgba(59,130,246,0.3))'}}></path>

<circle cx="420" cy="30" fill="#ffffff" opacity="0" r="4" style={{animation: 'fade-in 0.5s ease-out 2.5s forwards'}}>
<animate attributename="r" begin="2.5s" dur="2s" repeatcount="indefinite" values="3;5;3"></animate>
</circle>
<text fill="#ffffff" fontFamily="Inter" fontSize="10" font-weight="600" opacity="0" style={{animation: 'fade-in 0.5s ease-out 2.5s forwards'}} text-anchor="middle" x="420" y="16">
                                    462 HP
                                </text>
</svg>
</div>

<div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5 relative z-10">
<div>
<div className="text-[10px] uppercase tracking-wide font-medium text-zinc-500 mb-1">Peak HP</div>
<div className="text-base font-semibold text-white">462 <span className="text-xs text-blue-400 font-medium ml-1">+48</span></div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wide font-medium text-zinc-500 mb-1">Peak TQ</div>
<div className="text-base font-semibold text-white">317 <span className="text-xs text-purple-400 font-medium ml-1">+22</span></div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wide font-medium text-zinc-500 mb-1">Redline</div>
<div className="text-base font-semibold text-white">8,400 RPM</div>
</div>
</div>
</div>
</div>

<div className="scroll-reveal">
<div className="inline-flex items-center justify-center bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-xs font-medium text-blue-400 mb-5">
                        Performance Validation
                    </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5">
                        Measurable gains,<br/><span className="gradient-text">proven on the dyno</span>
</h2>
<p className="text-sm text-zinc-400 font-medium mb-8 leading-relaxed">Every map is developed and validated on our in-house Dynapack dynamometer with data-driven calibration. No guesswork — just consistent results.</p>
<div className="space-y-6">

<div>
<div className="flex justify-between text-xs font-medium mb-2">
<span className="text-zinc-300">Horsepower Gain</span>
<span className="text-blue-400">+87 HP</span>
</div>
<div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 bar-animate" style={{-TargetWidth: '78%', width: '0'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-2">
<span className="text-zinc-300">Torque Gain</span>
<span className="text-purple-400">+112 NM</span>
</div>
<div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400 bar-animate" style={{-TargetWidth: '85%', width: '0', animationDelay: '0.2s'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-2">
<span className="text-zinc-300">Throttle Response</span>
<span className="text-cyan-400">+45%</span>
</div>
<div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400 bar-animate" style={{-TargetWidth: '65%', width: '0', animationDelay: '0.4s'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="scroll-reveal">
<div className="bg-[#0a0a0f] rounded-3xl border border-white/5 p-6 lg:p-10 overflow-hidden relative">

<div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 relative z-10">
<div>
<h3 className="text-xl font-semibold tracking-tight text-white">Live Telemetry Dashboard</h3>
<p className="text-xs font-medium text-zinc-500 mt-1">Real-time engine data streaming via OBD-II</p>
</div>
<div className="inline-flex items-center self-start sm:self-auto gap-2 text-xs font-medium bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{animation: 'pulse-glow 2s infinite'}}></div>
                            Connection Live
                        </div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">

<div className="bg-[#08080d] rounded-2xl p-5 border border-white/5 shadow-inner">
<div className="flex items-center gap-2 mb-4">
<iconify-icon icon="solar:speedometer-linear" style={{color: '#3b82f6', strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Engine Speed</span>
</div>
<div className="flex items-end gap-2">
<div className="text-3xl font-semibold tracking-tight counter text-white" id="rpm-counter">0</div>
<div className="text-xs text-zinc-500 mb-1 font-medium">RPM</div>
</div>
<div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-100 ease-linear" id="rpm-bar" style={{width: '20%'}}></div>
</div>
</div>

<div className="bg-[#08080d] rounded-2xl p-5 border border-white/5 shadow-inner">
<div className="flex items-center gap-2 mb-4">
<iconify-icon icon="solar:wind-linear" style={{color: '#8b5cf6', strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Manifold Pressure</span>
</div>
<div className="flex items-end gap-2">
<div className="text-3xl font-semibold tracking-tight counter text-white" id="boost-counter">0.0</div>
<div className="text-xs text-zinc-500 mb-1 font-medium">PSI</div>
</div>
<div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-100 ease-linear" id="boost-bar" style={{width: '10%'}}></div>
</div>
</div>

<div className="bg-[#08080d] rounded-2xl p-5 border border-white/5 shadow-inner">
<div className="flex items-center gap-2 mb-4">
<iconify-icon icon="solar:fire-linear" style={{color: '#06b6d4', strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Air/Fuel Ratio</span>
</div>
<div className="flex items-end gap-2">
<div className="text-3xl font-semibold tracking-tight counter text-white" id="afr-counter">14.7</div>
<div className="text-xs text-zinc-500 mb-1 font-medium">AFR</div>
</div>
<div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full transition-all duration-100 ease-linear" id="afr-bar" style={{width: '50%'}}></div>
</div>
</div>

<div className="bg-[#08080d] rounded-2xl p-5 border border-white/5 shadow-inner">
<div className="flex items-center gap-2 mb-4">
<iconify-icon icon="solar:temperature-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Coolant Temp</span>
</div>
<div className="flex items-end gap-2">
<div className="text-3xl font-semibold tracking-tight counter text-white" id="temp-counter">85</div>
<div className="text-xs text-zinc-500 mb-1 font-medium">°C</div>
</div>
<div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-100 ease-linear" id="temp-bar" style={{width: '60%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
<div className="inline-flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 text-xs font-medium text-emerald-400 mb-4">
                    Pricing Plans
                </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                    Simple, transparent <span className="gradient-text">pricing</span>
</h2>
<p className="text-sm text-zinc-400 font-medium">Find the plan that fits your tuning needs. All plans include OTA updates and dedicated email support.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="scroll-reveal card-hover bg-[#0a0a0f] rounded-3xl border border-white/5 p-8 flex flex-col">
<div className="mb-6">
<h3 className="font-medium text-base mb-1 text-white">Starter License</h3>
<p className="text-xs font-medium text-zinc-500">For enthusiasts getting started</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$299</span>
<span className="text-xs font-medium text-zinc-500">/vehicle</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Stage 1 preset maps
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Mobile OBD-II flash
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Stock map restore
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-zinc-600">
<iconify-icon icon="solar:close-circle-linear" style={{color: '#3f3f46', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Custom map requests
                        </li>
</ul>
<a className="block text-center text-sm font-medium bg-[#111118] hover:bg-[#1a1a24] border border-white/5 text-white px-6 py-3 rounded-xl transition-all duration-300" href="#">
                        Get Started
                    </a>
</div>

<div className="scroll-reveal card-hover bg-[#0a0a0f] rounded-3xl border border-blue-500/30 p-8 flex flex-col relative shadow-[0_0_40px_rgba(59,130,246,0.1)]" style={{transitionDelay: '0.1s'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full text-white">
                        Most Popular
                    </div>
<div className="mb-6">
<h3 className="font-medium text-base mb-1 text-white">Professional</h3>
<p className="text-xs font-medium text-zinc-500">For serious performance builds</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$599</span>
<span className="text-xs font-medium text-zinc-500">/vehicle</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#3b82f6', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Stage 1–3 custom maps
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#3b82f6', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Direct map editor access
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#3b82f6', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Full data logging suite
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#3b82f6', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Priority engineer support
                        </li>
</ul>
<a className="block text-center text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" href="#">
                        Get Professional
                    </a>
</div>

<div className="scroll-reveal card-hover bg-[#0a0a0f] rounded-3xl border border-white/5 p-8 flex flex-col" style={{transitionDelay: '0.2s'}}>
<div className="mb-6">
<h3 className="font-medium text-base mb-1 text-white">Shop License</h3>
<p className="text-xs font-medium text-zinc-500">For tuning shops &amp; fleets</p>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$2,499</span>
<span className="text-xs font-medium text-zinc-500">/year</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Unlimited vehicle flashes
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Whitelabel map options
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Shop management portal
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Dedicated account manager
                        </li>
</ul>
<a className="block text-center text-sm font-medium bg-[#111118] hover:bg-[#1a1a24] border border-white/5 text-white px-6 py-3 rounded-xl transition-all duration-300" href="#">
                        Contact Sales
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="scroll-reveal text-center bg-[#0a0a0f] rounded-3xl border border-white/5 p-12 lg:p-16 relative overflow-hidden shadow-2xl">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 relative z-10 text-white">
                    Ready to unlock your<br/><span className="gradient-text">vehicle's potential?</span>
</h2>
<p className="text-sm text-zinc-400 font-medium mb-8 max-w-lg mx-auto relative z-10">Join 50,000+ tuners worldwide. Professional-grade ECU software with results you can instantly feel on the drive.</p>
<div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
<a className="group inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] text-sm" href="#">
                        Start Free Trial
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 text-sm" href="#">
                        Talk to Sales
                    </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0a0a0f] pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-4">
<div style={{width: '24px', height: '24px', background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<span className="text-white font-semibold text-[10px] tracking-tighter">V</span>
</div>
<span className="font-medium text-sm tracking-tight text-white">VECTUNE</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed font-medium max-w-xs">Professional ECU calibration software platform for modern high-performance vehicles.</p>
</div>
<div>
<h4 className="font-medium text-sm text-white mb-4">Product</h4>
<ul className="space-y-3 text-xs font-medium text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-white mb-4">Company</h4>
<ul className="space-y-3 text-xs font-medium text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-white mb-4">Legal</h4>
<ul className="space-y-3 text-xs font-medium text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Disclaimer</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[11px] font-medium text-zinc-600">© 2024 Vectune Technologies. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
