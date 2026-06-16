import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Smooth Scrolling with Lenis ---
        const lenis = new Lenis({
            duration: 1.2,
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // --- Particle Canvas Logic (Adapted for Aura Theme) ---
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        const particleCount = 450; 
        const particles = [];
        let mouseX = 0;
        let mouseY = 0;
        let mode = 0;
        let lastTime = 0;
        let modeTimer = 0;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            calculateTargets();
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.targetX = this.x;
                this.targetY = this.y;
                this.size = Math.random() * 1.5;
                this.baseSize = this.size;
                this.speed = Math.random() * 0.02 + 0.03;
                this.alpha = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += (this.targetX - this.x) * this.speed;
                this.y += (this.targetY - this.y) * this.speed;
                
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    this.size = this.baseSize * 2 + (150 - dist) / 100;
                } else {
                    this.size += (this.baseSize - this.size) * 0.1;
                }
            }
            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                ctx.fillRect(this.x, this.y, this.size, this.size);
            }
        }

        function calculateTargets() {
            const width = canvas.width;
            const height = canvas.height;
            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];
                if (mode === 0) { // Grid (Signal)
                    const cols = Math.floor(Math.sqrt(particleCount * (width/height)));
                    const rows = Math.ceil(particleCount / cols);
                    const spacingX = width / cols;
                    const spacingY = height / rows;
                    const col = i % cols;
                    const row = Math.floor(i / cols);
                    p.targetX = col * spacingX + spacingX / 2;
                    p.targetY = row * spacingY + spacingY / 2;
                } else if (mode === 1) { // Random (Noise)
                    p.targetX = Math.random() * width;
                    p.targetY = Math.random() * height;
                } else if (mode === 2) { // Wave (Frequency)
                    const x = (i / particleCount) * width;
                    p.targetX = x;
                    p.targetY = height / 2 + Math.sin(x * 0.01 + Date.now() * 0.0005) * 200;
                } else if (mode === 3) { // Circle (Focus)
                    const angle = (i / particleCount) * Math.PI * 2 * 3;
                    const radius = (i / particleCount) * (Math.min(width, height) / 2.5);
                    p.targetX = width / 2 + Math.cos(angle) * radius;
                    p.targetY = height / 2 + Math.sin(angle) * radius;
                }
            }
        }

        function init() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            resize();
            animate();
        }

        function animate(timestamp) {
            const dt = timestamp - lastTime;
            lastTime = timestamp;
            modeTimer += dt;
            
            // Switch formation every 6 seconds
            if (modeTimer > 6000) {
                mode = (mode + 1) % 4;
                modeTimer = 0;
                calculateTargets();
            }
            
            if (mode === 2) calculateTargets(); // Update wave constantly
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<canvas className="fixed inset-0 w-full h-full z-0 opacity-40 pointer-events-none mix-blend-screen" height="818" id="particle-canvas" width="1072"></canvas>

<div className="noise-bg"></div>

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-[60vh] bg-gradient-to-b from-white/0 via-white/20 to-white/0 blur-[1px]"></div>
<div className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-[80vh] bg-gradient-to-b from-white/0 via-white/5 to-white/0 blur-3xl"></div>

<div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[150vw] h-[50vh] bg-neutral-900 rounded-[100%] blur-3xl border-t border-white/5"></div>
<div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[40vh] bg-gradient-to-t from-black via-neutral-900 to-transparent opacity-80"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 py-6 md:px-12 pointer-events-none reveal-up delay-100">

<div className="pointer-events-auto">
<a className="flex items-center gap-2 text-white group hover:opacity-80 transition-opacity" href="#">
<svg className="opacity-90" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M10 8a5 5 0 1 0-3 9c2.761 0 3.5-2 5-5s2.239-5 5-5a5 5 0 1 1-3 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</a>
</div>

<div className="hidden md:flex pointer-events-auto items-center gap-1 px-1.5 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
<a className="px-5 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors duration-300" href="#">Product</a>
<a className="px-5 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors duration-300" href="#">Manifesto</a>
<a className="px-5 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors duration-300" href="#">Privacy</a>
<a className="px-5 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors duration-300" href="#">Pricing</a>
</div>

<div className="flex items-center gap-6 pointer-events-auto">
<a className="hidden md:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sign In</a>
<a className="hover:bg-neutral-200 transition-colors text-xs font-medium text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#">
                Get Early Access
            </a>
</div>
</nav>

<div className="absolute top-32 left-[15%] hidden lg:flex flex-col items-center gap-2 animate-float reveal-up delay-500 z-10">
<div className="p-2 rounded-full bg-neutral-900/50 border border-white/10 backdrop-blur-md shadow-[0_0_15px_-5px_rgba(255,255,255,0.2)]">
<iconify-icon className="text-neutral-400" icon="lucide:bell-off" width="20"></iconify-icon>
</div>
<div className="text-center">
<p className="text-xs text-neutral-400 font-medium tracking-wide">Silence</p>
<p className="text-[10px] text-neutral-600">Zero Distractions</p>
</div>
</div>
<div className="absolute top-40 right-[15%] hidden lg:flex flex-col items-center gap-2 animate-float-delayed reveal-up delay-700 z-10">
<div className="p-2 rounded-full bg-neutral-900/50 border border-white/10 backdrop-blur-md shadow-[0_0_15px_-5px_rgba(255,255,255,0.2)]">
<iconify-icon className="text-neutral-400" icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<div className="text-center">
<p className="text-xs text-neutral-400 font-medium tracking-wide">Secure</p>
<p className="text-[10px] text-neutral-600">E2E Encrypted</p>
</div>
</div>

<main className="flex flex-col min-h-screen z-10 pt-32 pr-4 pb-12 pl-4 relative items-center justify-between">

<div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-10 md:mt-20">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm reveal-up delay-100">
<iconify-icon className="text-indigo-200/80" icon="lucide:sparkles" width="14"></iconify-icon>
<span className="text-[10px] font-medium text-neutral-300 tracking-widest uppercase">Introducing Aura 1.0</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1] reveal-up delay-200">
                Clear the noise.<br/>
<span className="shimmer-text opacity-90">Find your signal.</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto font-light leading-relaxed mb-10 reveal-up delay-300">
                A minimalist communication tool designed to restore focus. 
                No clutter, no endless feeds. Just pure connection.
            </p>

<div className="reveal-up delay-300">
<button className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
<span className="relative z-10 flex items-center gap-2">
                        Discover Aura
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
</div>
</div>

<div className="w-full max-w-7xl mt-auto pt-20 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-neutral-900/30 backdrop-blur-2xl border border-white/5 hover:border-white/10 transition-colors overflow-hidden reveal-up delay-500">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between gap-12">
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="lucide:moon" width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Deep Focus</span>
</div>
<div className="w-10 h-6 bg-white/10 rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between opacity-50">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="lucide:bell" width="20"></iconify-icon>
<span className="text-sm text-neutral-300">Notifications</span>
</div>
<div className="w-10 h-6 bg-white/5 rounded-full relative cursor-pointer">
<div className="absolute left-1 top-1 w-4 h-4 bg-neutral-500 rounded-full"></div>
</div>
</div>
</div>
<div>
<div className="text-3xl text-white font-medium mb-1 tracking-tight">92.4%</div>
<div className="text-sm text-neutral-500">Reduction in daily interruptions.</div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-neutral-900/30 backdrop-blur-2xl border border-white/5 hover:border-white/10 transition-colors overflow-hidden reveal-up delay-500">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
<div className="w-full h-32 relative mb-6 opacity-60">
<div className="absolute inset-0 border border-white/10 rounded-full scale-y-[0.3] rotate-12"></div>
<div className="absolute inset-0 border border-white/10 rounded-full scale-y-[0.3] -rotate-12"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<div className="absolute top-1/2 left-1/2 w-24 h-[1px] bg-gradient-to-r from-white/50 to-transparent -translate-y-1/2 origin-left rotate-45"></div>
<div className="absolute top-1/2 left-1/2 w-16 h-[1px] bg-gradient-to-r from-white/30 to-transparent -translate-y-1/2 origin-left -rotate-[120deg]"></div>
<div className="absolute top-[20%] right-[20%] px-2 py-0.5 rounded-full bg-black/50 border border-white/10 text-[10px] text-neutral-400 backdrop-blur-sm">SF</div>
<div className="absolute bottom-[20%] left-[20%] px-2 py-0.5 rounded-full bg-black/50 border border-white/10 text-[10px] text-neutral-400 backdrop-blur-sm">TKY</div>
</div>
<h3 className="text-lg text-white font-medium">Global Mesh</h3>
<p className="text-sm text-neutral-500 mt-2">Decentralized nodes ensure your aura remains yours, everywhere.</p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-neutral-900/30 backdrop-blur-2xl border border-white/5 hover:border-white/10 transition-colors overflow-hidden reveal-up delay-700">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<h3 className="text-lg text-white font-medium mb-4">Seamless Sync</h3>
<p className="text-sm text-neutral-500 mb-6">Works with the tools you already love, invisibly.</p>
</div>
<div className="grid grid-cols-3 gap-4 opacity-70">
<div className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/icon">
<iconify-icon className="text-white group-hover/icon:scale-110 transition-transform" icon="simple-icons:slack" width="20"></iconify-icon>
</div>
<div className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/icon">
<iconify-icon className="text-white group-hover/icon:scale-110 transition-transform" icon="simple-icons:notion" width="20"></iconify-icon>
</div>
<div className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/icon">
<iconify-icon className="text-white group-hover/icon:scale-110 transition-transform" icon="simple-icons:linear" width="20"></iconify-icon>
</div>
<div className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/icon">
<iconify-icon className="text-white group-hover/icon:scale-110 transition-transform" icon="lucide:search" width="20"></iconify-icon>
</div>
<div className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/icon">
<iconify-icon className="text-white group-hover/icon:scale-110 transition-transform" icon="simple-icons:googlecalendar" width="20"></iconify-icon>
</div>
<div className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/icon">
<iconify-icon className="text-white group-hover/icon:scale-110 transition-transform" icon="simple-icons:spotify" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
