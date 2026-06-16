import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: "class",
theme: {
extend: {
fontFamily: { sans: ["Inter", "sans-serif"] },
colors: {
base: "#030305",
surface: "#0a0a0f",
brand: "#8B5CF6", // Violet
brandGlow: "#A78BFA",
accent: "#06B6D4", // Cyan
},
animation: {
"pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
"scan-vertical": "scanVertical 3s ease-in-out infinite",
},
keyframes: {
scanVertical: {
"0%, 100%": { transform: "translateY(-10%)", opacity: 0 },
"10%, 90%": { opacity: 1 },
"50%": { transform: "translateY(110%)" }
}
}
}
}
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Simple reveal animation for sections
        const revealElements = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, { threshold: 0.1 });
        revealElements.forEach(el => observer.observe(el));

        // Bento Card hover effects
        document.querySelectorAll(".bento-card").forEach((card) => {
            card.addEventListener("pointermove", (e) => {
                const r = card.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                card.style.setProperty("--sx", x + "%");
                card.style.setProperty("--sy", y + "%");
            });
        });

        // Timeline fill animation
        const track = document.getElementById('timeline-track');
        const fill = document.getElementById('timeline-fill');
        const steps = document.querySelectorAll('.timeline-step');

        if(track && fill) {
            gsap.to(fill, {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: track,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    scrub: 0.5
                }
            });

            steps.forEach(step => {
                gsap.to(step, {
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 60%',
                        toggleClass: { targets: step, className: 'timeline-step-active' }
                    }
                });
            });
        }

        // CTA Door Animation
        const ctaTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#cta',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1
            }
        });

        ctaTl.to('#cta-door-left', { x: '-100%', ease: 'power2.inOut' }, 0);
        ctaTl.to('#cta-door-right', { x: '100%', ease: 'power2.inOut' }, 0);
        ctaTl.to('#cta-content', { opacity: 1, scale: 1, ease: 'power2.out' }, 0.2);

        // Three.js Hero Setup
        let scene, camera, renderer, phoneGroup;

        function init3D() {
            const container = document.getElementById('canvas-container');
            container.style.opacity = '1';

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.set(0, 0, 16);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            container.appendChild(renderer.domElement);

            phoneGroup = new THREE.Group();
            scene.add(phoneGroup);

            // Phone Body
            const w = 3.2, h = 6.8, d = 0.35, r = 0.6;
            const shape = new THREE.Shape();
            shape.moveTo(-w/2+r, -h/2);
            shape.lineTo(w/2-r, -h/2);
            shape.quadraticCurveTo(w/2, -h/2, w/2, -h/2+r);
            shape.lineTo(w/2, h/2-r);
            shape.quadraticCurveTo(w/2, h/2, w/2-r, h/2);
            shape.lineTo(-w/2+r, h/2);
            shape.quadraticCurveTo(-w/2, h/2, -w/2, h/2-r);
            shape.lineTo(-w/2, -h/2+r);
            shape.quadraticCurveTo(-w/2, -h/2, -w/2+r, -h/2);

            const bodyGeo = new THREE.ExtrudeGeometry(shape, {depth: d, bevelEnabled: true, bevelSegments: 4, bevelSize: 0.05, bevelThickness: 0.05});
            bodyGeo.center();
            const bodyMat = new THREE.MeshStandardMaterial({color: 0x050505, metalness: 0.9, roughness: 0.2});
            const phoneBody = new THREE.Mesh(bodyGeo, bodyMat);
            phoneGroup.add(phoneBody);

            // Phone Screen Texture (Mockup App Interface)
            const canvas = document.createElement('canvas');
            canvas.width = 512; canvas.height = 1024;
            const ctx = canvas.getContext('2d');
            
            // BG
            ctx.fillStyle = '#030305';
            ctx.fillRect(0,0,512,1024);
            
            // Lock Circle
            ctx.beginPath();
            ctx.arc(256, 400, 80, 0, Math.PI*2);
            ctx.strokeStyle = '#222';
            ctx.lineWidth = 4;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.arc(256, 400, 80, -Math.PI/2, Math.PI, false);
            ctx.strokeStyle = '#8B5CF6';
            ctx.lineWidth = 4;
            ctx.stroke();

            // Lock Icon (abstracted)
            ctx.fillStyle = '#8B5CF6';
            ctx.fillRect(236, 380, 40, 30);
            ctx.beginPath();
            ctx.arc(256, 380, 14, 0, Math.PI*2);
            ctx.strokeStyle = '#8B5CF6';
            ctx.lineWidth = 6;
            ctx.stroke();

            // Text
            ctx.font = '600 32px Inter';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.fillText('LOCKED', 256, 540);
            
            ctx.font = '400 18px Inter';
            ctx.fillStyle = '#666';
            ctx.fillText('Ritual Required to Unlock', 256, 580);

            // Button
            ctx.fillStyle = '#111';
            ctx.roundRect = function (x, y, w, h, r) {
              if (w < 2 * r) r = w / 2;
              if (h < 2 * r) r = h / 2;
              this.beginPath();
              this.moveTo(x+r, y);
              this.arcTo(x+w, y,   x+w, y+h, r);
              this.arcTo(x+w, y+h, x,   y+h, r);
              this.arcTo(x,   y+h, x,   y,   r);
              this.arcTo(x,   y,   x+w, y,   r);
              this.closePath();
              return this;
            }
            ctx.roundRect(106, 800, 300, 60, 30).fill();
            ctx.fillStyle = '#fff';
            ctx.font = '500 18px Inter';
            ctx.fillText('Earn Access', 256, 836);

            const tex = new THREE.CanvasTexture(canvas);
            const screenGeo = new THREE.PlaneGeometry(w-0.2, h-0.2);
            const screenMat = new THREE.MeshStandardMaterial({
                map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.8
            });
            const screenMesh = new THREE.Mesh(screenGeo, screenMat);
            screenMesh.position.z = d/2 + 0.06;
            phoneGroup.add(screenMesh);

            // Lighting
            scene.add(new THREE.AmbientLight(0x222222));
            const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
            dirLight.position.set(5, 5, 8);
            scene.add(dirLight);

            const rimLightViolet = new THREE.SpotLight(0x8B5CF6, 4);
            rimLightViolet.position.set(-4, 0, -5);
            rimLightViolet.lookAt(0,0,0);
            scene.add(rimLightViolet);

            const rimLightCyan = new THREE.SpotLight(0x06B6D4, 2);
            rimLightCyan.position.set(4, 2, -3);
            rimLightCyan.lookAt(0,0,0);
            scene.add(rimLightCyan);

            // Particles
            const pGeo = new THREE.BufferGeometry();
            const pPos = new Float32Array(150 * 3);
            for(let i=0; i<450; i++) pPos[i] = (Math.random()-0.5)*25;
            pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
            const pMat = new THREE.PointsMaterial({color: 0x8B5CF6, size: 0.03, transparent: true, opacity: 0.3});
            const particles = new THREE.Points(pGeo, pMat);
            scene.add(particles);

            const clock = new THREE.Clock();
            function animate() {
                requestAnimationFrame(animate);
                const t = clock.getElapsedTime();
                phoneGroup.position.y += Math.sin(t) * 0.001;
                particles.rotation.y = t * 0.02;
                renderer.render(scene, camera);
            }
            animate();

            // Master Timeline for Scroll
            const masterTl = gsap.timeline({
                scrollTrigger: { trigger: "body", start: "top top", end: "+=400%", scrub: 1 }
            });

            masterTl.to("#hero-content", { opacity: 0, y: -50, pointerEvents: "none" }, 0);
            
            // Pose 1
            masterTl.to(phoneGroup.rotation, { x: 0.2, y: 0.8, z: 0.1 }, 0);
            masterTl.to(phoneGroup.position, { x: 1.5, y: 0, z: 2 }, 0);
            masterTl.to("#popover-1", { opacity: 1, y: 0, scale: 1 }, 0.5);
            masterTl.to("#popover-1", { opacity: 0, y: -20 }, 1.5);

            // Pose 2
            masterTl.to(phoneGroup.rotation, { x: -0.1, y: -0.6, z: -0.05 }, 1.5);
            masterTl.to(phoneGroup.position, { x: -1.5, y: 0.5, z: 1 }, 1.5);
            masterTl.to("#popover-2", { opacity: 1, y: 0, scale: 1 }, 2.0);
            masterTl.to("#popover-2", { opacity: 0, y: -20 }, 3.0);

            // Pose 3 (Exit)
            masterTl.to(phoneGroup.rotation, { x: 0, y: Math.PI*2, z: 0 }, 3.0);
            masterTl.to(phoneGroup.position, { x: 0, y: 1.5, z: -2 }, 3.0);
            masterTl.to("#popover-3", { opacity: 1, y: 0, scale: 1 }, 3.5);
            masterTl.to("#popover-3", { opacity: 0, y: -20 }, 4.5);
            
            masterTl.to(phoneGroup.position, { y: 10 }, 4.5);
            masterTl.to("#canvas-container", { opacity: 0 }, 4.5);

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        }

        // Initialize 3D immediately
        window.onload = init3D;

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-base/70 backdrop-blur-2xl border-b border-white/[0.04]">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-medium tracking-tight text-white text-sm">Earn Your Scroll</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#problem">The Loop</a>
<a className="hover:text-white transition-colors" href="#rituals">Rituals</a>
<a className="hover:text-white transition-colors" href="#science">Science</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log In</a>
<button className="px-5 py-2 text-xs font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    Get Early Access
                </button>
</div>
</div>
</nav>

<div id="canvas-container"></div>

<div id="story-popovers">
<div className="popover-card" id="popover-1">
<div className="popover-metric">Friction Added</div>
<div className="popover-title">Dopamine Delayed</div>
<div className="popover-text">Interrupting the automatic reflex to open.</div>
</div>
<div className="popover-card" id="popover-2">
<div className="popover-metric">Behavior Shift</div>
<div className="popover-title">State Reset</div>
<div className="popover-text">Bringing intention back before consumption.</div>
</div>
<div className="popover-card" id="popover-3">
<div className="popover-metric">Outcome</div>
<div className="popover-title">Control Regained</div>
<div className="popover-text">Scrolling becomes a choice, not a compulsion.</div>
</div>
</div>

<div id="hero-content">
<div className="hero-glow"></div>
<div className="max-w-4xl mx-auto text-center px-6 relative" style={{marginTop: '-5vh'}}>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/10 backdrop-blur-md mb-8 interactive-element cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow"></span>
<span className="text-xs font-medium text-brand uppercase tracking-widest">Featuring Tongue Scan Beta</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight text-white">
                Earn your <br/>
<span className="text-gradient">scroll.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-lg mx-auto mb-10 leading-relaxed font-light">
                Block TikTok, Instagram, X, and Shorts. Regain your mornings. Unlock your apps only after you complete one short reset ritual.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 interactive-element">
<button className="h-12 px-8 bg-brand hover:bg-brandGlow text-white text-sm font-medium rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                    Join the Beta
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full text-sm font-medium flex items-center justify-center transition-all bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-xl">
                    See How It Works
                </button>
</div>
</div>
</div>

<div style={{height: '250vh', position: 'relative', zIndex: '1'}}></div>

<div className="relative z-20 bg-base">

<section className="py-32 px-6 border-t border-white/[0.04]" id="problem">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">The reflex is broken.</h2>
<p className="text-neutral-400 font-light max-w-xl mx-auto">Your brain is wired to seek stimulation with zero friction. We introduce the necessary barrier between impulse and consumption.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
<div className="glass-panel p-10 rounded-3xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-50"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-red-500/20 bg-red-500/10 flex items-center justify-center mb-6 text-red-400 text-xl">
<iconify-icon icon="solar:history-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">The Old Loop</h3>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Wake up, immediately open apps</li>
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Mindless scrolling for 45 minutes</li>
<li className="flex items-start gap-3"><iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Start the day already fatigued</li>
</ul>
</div>
</div>
<div className="glass-panel p-10 rounded-3xl relative overflow-hidden group border-brand/30">
<div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-50"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full border border-brand/30 bg-brand/10 flex items-center justify-center mb-6 text-brand text-xl">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">The Earned Loop</h3>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li className="flex items-start gap-3"><iconify-icon className="text-brand mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Try to open app, blocked by intercept</li>
<li className="flex items-start gap-3"><iconify-icon className="text-brand mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Complete 1-minute breathing ritual</li>
<li className="flex items-start gap-3"><iconify-icon className="text-brand mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Enter the app calm and intentional</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="process">
<div className="max-w-5xl mx-auto relative z-10">
<div className="mb-24 reveal text-center md:text-left">
<p className="text-xs font-medium uppercase tracking-widest text-brand mb-3">The Protocol</p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Friction before<br/><span className="text-neutral-500">stimulation.</span></h2>
</div>
<div className="relative pl-6 md:pl-0" id="timeline-track">
<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px"></div>
<div className="absolute left-6 md:left-1/2 top-0 w-px bg-brand shadow-[0_0_15px_rgba(139,92,246,0.5)] md:-translate-x-px h-0 origin-top z-10" id="timeline-fill">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#8B5CF6] z-20"></div>
</div>
<div className="space-y-24 py-12">

<div className="timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 opacity-30 transition-all duration-700 ease-out">
<div className="md:text-right relative order-2 md:order-1 md:pr-12">
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Lock the Voids</h3>
<p className="text-brand text-xs font-mono mb-4 uppercase tracking-widest">Step 01</p>
<p className="text-neutral-400 text-sm leading-relaxed font-light md:ml-auto max-w-sm">Select the apps that steal your time. We integrate deep into iOS Screen Time API to ensure the block is unbreakable until earned.</p>
</div>
<div className="absolute left-6 md:left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full border border-white/20 bg-base z-20 timeline-point md:top-2"></div>
<div className="order-3 md:order-2 md:pl-12">
<div className="glass-panel h-32 w-full md:w-72 rounded-2xl flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-white/40 text-2xl"><iconify-icon icon="solar:video-frame-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/40 flex items-center justify-center text-brand text-2xl shadow-[0_0_15px_rgba(139,92,246,0.2)]"><iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-white/40 text-2xl"><iconify-icon icon="solar:camera-linear"></iconify-icon></div>
</div>
</div>
</div>

<div className="timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 opacity-30 transition-all duration-700 ease-out">
<div className="relative order-3 md:order-1 md:pr-12 flex md:justify-end">
<div className="glass-panel h-32 w-full md:w-72 rounded-2xl flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]"></div>
<iconify-icon className="text-4xl text-accent relative z-10" icon="solar:lungs-linear"></iconify-icon>
</div>
</div>
<div className="absolute left-6 md:left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full border border-white/20 bg-base z-20 timeline-point md:top-2"></div>
<div className="order-2 md:order-2 md:pl-12">
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Choose Your Ritual</h3>
<p className="text-accent text-xs font-mono mb-4 uppercase tracking-widest">Step 02</p>
<p className="text-neutral-400 text-sm leading-relaxed font-light max-w-sm">Pick a state-changing action. From a 60-second breathwork session to verifying 10 pushups via camera, you set the price of entry.</p>
</div>
</div>

<div className="timeline-step relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 opacity-30 transition-all duration-700 ease-out">
<div className="md:text-right relative order-2 md:order-1 md:pr-12">
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Earn &amp; Access</h3>
<p className="text-brand text-xs font-mono mb-4 uppercase tracking-widest">Step 03</p>
<p className="text-neutral-400 text-sm leading-relaxed font-light md:ml-auto max-w-sm">Once verified, the app unlocks for a set duration. You consume content with intention, building a streak of discipline.</p>
</div>
<div className="absolute left-6 md:left-1/2 top-0 w-3 h-3 -ml-1.5 rounded-full border border-white/20 bg-base z-20 timeline-point md:top-2"></div>
<div className="order-3 md:order-2 md:pl-12">
<div className="glass-panel h-32 w-full md:w-72 rounded-2xl flex items-center justify-center gap-3">
<div className="flex flex-col items-center">
<div className="text-2xl font-medium text-white">15</div>
<div className="text-[10px] text-brand uppercase tracking-widest">Min Earned</div>
</div>
<div className="h-8 w-px bg-white/20 mx-2"></div>
<div className="flex flex-col items-center">
<div className="text-2xl font-medium text-white flex items-center gap-1"><iconify-icon className="text-orange-500" icon="solar:fire-linear"></iconify-icon> 12</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Day Streak</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white/[0.01] border-y border-white/[0.04]" id="rituals">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">The Rituals</h2>
<p className="text-neutral-400 font-light max-w-xl mx-auto">Short, verifiable actions that shift your physiology before you consume.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-5">

<div className="bento-card md:col-span-8 p-8 rounded-3xl glass-panel relative group">
<div className="bento-spot"></div>
<div className="flex justify-between items-start mb-12 relative z-10">
<div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-medium uppercase tracking-widest mb-3 border border-brand/20">
                                    Signature Feature
                                </div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Tongue Scan Mode</h3>
<p className="text-sm text-neutral-400 font-light max-w-sm">The first body-state unlock. Use your camera to perform a daily tongue check, reading hydration and fatigue signals before granting access.</p>
</div>
<iconify-icon className="text-3xl text-brand opacity-50" icon="solar:scanner-linear"></iconify-icon>
</div>

<div className="relative h-48 rounded-xl bg-black/40 border border-white/10 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDB2NDBtNDAgMHYtNDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
<div className="w-24 h-24 rounded-[40px] border border-white/20 relative z-10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-3xl text-white/50" icon="solar:health-linear"></iconify-icon>
</div>
<div className="scan-line animate-scan-vertical z-20"></div>
</div>
</div>

<div className="bento-card md:col-span-4 p-8 rounded-3xl glass-panel relative flex flex-col justify-between">
<div className="bento-spot"></div>
<div className="relative z-10">
<iconify-icon className="text-2xl text-accent mb-4" icon="solar:lungs-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Box Breathing</h3>
<p className="text-sm text-neutral-400 font-light">Follow the expanding visual for 60 seconds to lower heart rate.</p>
</div>
<div className="mt-8 h-20 flex items-center justify-center relative z-10">
<div className="w-12 h-12 border-2 border-accent/40 rounded-xl animate-pulse"></div>
</div>
</div>

<div className="bento-card md:col-span-4 p-8 rounded-3xl glass-panel relative">
<div className="bento-spot"></div>
<div className="relative z-10">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:dumbbell-large-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Motion Check</h3>
<p className="text-sm text-neutral-400 font-light">Use the accelerometer to verify 10 pushups or squats.</p>
</div>
</div>

<div className="bento-card md:col-span-4 p-8 rounded-3xl glass-panel relative">
<div className="bento-spot"></div>
<div className="relative z-10">
<iconify-icon className="text-2xl text-blue-400 mb-4" icon="solar:cup-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Hydration Log</h3>
<p className="text-sm text-neutral-400 font-light">Log a glass of water before hitting the feed.</p>
</div>
</div>

<div className="bento-card md:col-span-4 p-8 rounded-3xl glass-panel relative">
<div className="bento-spot"></div>
<div className="relative z-10">
<iconify-icon className="text-2xl text-amber-400 mb-4" icon="solar:pen-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">One-Line Journal</h3>
<p className="text-sm text-neutral-400 font-light">Type a single sentence of intention for the day.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-4xl mx-auto text-center reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">The Shift in Data</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-4xl font-medium text-white mb-1 tracking-tight">82%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Less Doomscrolling</div>
</div>
<div>
<div className="text-4xl font-medium text-white mb-1 tracking-tight">1.5h</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Time Reclaimed / Day</div>
</div>
<div>
<div className="text-4xl font-medium text-white mb-1 tracking-tight">14</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Avg Daily Rituals</div>
</div>
<div>
<div className="text-4xl font-medium text-white mb-1 tracking-tight">94%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Feel More Control</div>
</div>
</div>
</div>
</section>

<section className="py-0 px-0 relative h-[150vh]" id="cta">
<div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-base">

<div className="cta-door-panel absolute top-0 left-0 w-1/2 h-full z-20 origin-left border-r border-white/10 flex items-center justify-end pr-8" id="cta-door-left">
<div className="w-1 h-12 bg-white/20 rounded-full"></div>
</div>
<div className="cta-door-panel absolute top-0 right-0 w-1/2 h-full z-20 origin-right border-l border-white/10 flex items-center justify-start pl-8" id="cta-door-right">
<div className="w-1 h-12 bg-white/20 rounded-full"></div>
</div>

<div className="relative z-10 flex flex-col items-center text-center px-6 opacity-0 scale-95" id="cta-content">
<div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
<iconify-icon className="text-3xl text-brand" icon="solar:crown-star-linear"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
                        Your phone should not own you.
                    </h2>
<p className="text-neutral-400 text-lg mb-10 max-w-lg font-light">
                        Break the automatic loop. Take back your mornings. Download the beta today.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Join the Beta
                        </button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-transparent text-white font-medium text-sm hover:bg-white/5 transition-colors">
                            Challenge a Friend
                        </button>
</div>
</div>
</div>
</section>
<footer className="border-t border-white/[0.04] bg-base py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-center md:items-start">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand text-lg" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-medium text-sm text-white">Earn Your Scroll</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500 font-light">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
