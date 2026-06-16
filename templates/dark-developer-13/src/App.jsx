import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 1. Router Logic ---
        function router(pageId) {
            // Remove active class from all pages
            document.querySelectorAll('.page-content').forEach(el => {
                el.classList.remove('active');
                el.style.display = 'none'; // Ensure display none is applied for layout calc
            });
            
            // Add active class to target page
            const target = document.getElementById(pageId);
            if(target) {
                target.style.display = 'block';
                // Small timeout to allow display:block to render before opacity transition
                setTimeout(() => {
                    target.classList.add('active');
                }, 10);
            }

            // Update Nav State
            document.querySelectorAll('.nav-link').forEach(btn => {
                if(btn.getAttribute('data-page') === pageId) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Reset Scroll
            lenis.scrollTo(0, { immediate: true });
            
            // Recalculate Lenis layout (important when content height changes)
            setTimeout(() => lenis.resize(), 100);
        }

        // Initialize Router
        document.addEventListener('DOMContentLoaded', () => {
            router('home');
        });

        // --- 2. Lenis Smooth Scroll ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- 3. Background Canvas ---
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: -100, y: -100 };

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
                this.alpha = Math.random() * 0.5 + 0.1;
            }
            update() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx*dx + dy*dy);
                let maxDistance = 200;
                let force = (maxDistance - distance) / maxDistance;

                if (distance < maxDistance) {
                    this.x -= (dx / distance) * force * this.density;
                    this.y -= (dy / distance) * force * this.density;
                } else {
                    if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 20;
                    if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 20;
                }
            }
            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            let numberOfParticles = (width * height) / 15000;
            for (let i = 0; i < numberOfParticles; i++) particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animateParticles);
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });
        resize();
        animateParticles();

        // --- 4. Magnetic Buttons ---
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
            });
            btn.addEventListener('mouseleave', () => btn.style.transform = 'translate(0, 0)');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<canvas className="fixed inset-0 z-0 w-full h-full pointer-events-none" id="bg-canvas"></canvas>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 glass rounded-full p-1.5 flex items-center gap-1 transition-all duration-300">
<button className="nav-link px-5 py-2 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all" data-page="home" onclick="router('home')">Home</button>
<button className="nav-link px-5 py-2 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all" data-page="work" onclick="router('work')">Work</button>
<button className="nav-link px-5 py-2 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all" data-page="about" onclick="router('about')">About</button>
<button className="nav-link px-5 py-2 rounded-full text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all" data-page="contact" onclick="router('contact')">Contact</button>
</nav>

<div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
<a className="magnetic-btn w-10 h-10 glass rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group relative" href="#">
<iconify-icon icon="solar:brand-github-linear" width="18"></iconify-icon>
</a>
<a className="magnetic-btn w-10 h-10 glass rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group relative" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon>
</a>
<a className="magnetic-btn w-10 h-10 glass rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group relative" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="18"></iconify-icon>
</a>
<div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent mx-auto mt-2"></div>
</div>

<main className="relative z-10 w-full flex-grow pt-24 pb-20 px-6" id="app">

<section className="page-content active max-w-7xl mx-auto" id="home">
<div className="min-h-[80vh] flex flex-col justify-center items-center text-center relative mb-24">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest font-medium text-neutral-300">Available for hire</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8 text-gradient z-10">
                    Digital<br/>Architect.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto mb-12 tracking-wide font-light leading-relaxed">
                    Designing interfaces that feel indistinguishable from magic. Focusing on motion, interaction, and clean code.
                </p>
<div className="flex gap-4 z-10">
<button className="group px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-tight transition-all hover:bg-neutral-200 flex items-center gap-2" onclick="router('work')">
                        View Work <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-3.5 rounded-full glass text-white font-medium text-sm tracking-tight hover:bg-white/10 transition-colors" onclick="router('contact')">Contact</button>
</div>
</div>

<div className="w-full">
<div className="flex justify-between items-end mb-8">
<h3 className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Recent</h3>
<button className="text-xs text-white hover:text-neutral-300 transition-colors flex items-center gap-1" onclick="router('work')">All Projects <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer" onclick="router('work')">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="text-lg font-medium text-white mb-1">Finance Flow</h4>
<p className="text-xs text-neutral-400">Fintech Dashboard</p>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer" onclick="router('work')">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="text-lg font-medium text-white mb-1">Eco Market</h4>
<p className="text-xs text-neutral-400">E-Commerce</p>
</div>
</div>
<div className="hidden lg:block group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer" onclick="router('work')">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="text-lg font-medium text-white mb-1">Nebula</h4>
<p className="text-xs text-neutral-400">WebGL Experience</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-content max-w-6xl mx-auto pt-10" id="work">
<div className="mb-16">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 text-white">Selected Work</h1>
<p className="text-neutral-400 font-light max-w-lg">A collection of projects exploring the boundaries of web technology, interaction design, and utility.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-blue-500/5 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/20 group-hover:text-white/40 transition-colors" icon="solar:graph-up-linear" width="64"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1">Finance Flow</h3>
<p className="text-sm text-neutral-500">Next.js, Tailwind, Supabase</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 group-hover:text-white group-hover:bg-white/10 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/20 group-hover:text-white/40 transition-colors" icon="solar:cart-large-linear" width="64"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1">E-Commerce Core</h3>
<p className="text-sm text-neutral-500">Shopify Headless, React</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 group-hover:text-white group-hover:bg-white/10 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-red-500/5 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/20 group-hover:text-white/40 transition-colors" icon="solar:gamepad-linear" width="64"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1">WebGL Portal</h3>
<p className="text-sm text-neutral-500">Three.js, GLSL, GSAP</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 group-hover:text-white group-hover:bg-white/10 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-rose-500/5 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white/20 group-hover:text-white/40 transition-colors" icon="solar:music-note-linear" width="64"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white mb-1">Sonic Labs</h3>
<p className="text-sm text-neutral-500">Web Audio API, Vue.js</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 group-hover:text-white group-hover:bg-white/10 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="page-content max-w-5xl mx-auto pt-10" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-5 space-y-8">
<div className="aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
<img alt="Portrait" className="w-full h-full object-cover opacity-80 grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h2 className="text-2xl font-semibold text-white">James P.</h2>
<p className="text-sm text-neutral-400">San Francisco, CA</p>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Current Focus</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Exploring generative art and performance optimization in large-scale React applications.</p>
</div>
</div>

<div className="md:col-span-7 space-y-12">
<div>
<h1 className="text-4xl font-semibold tracking-tight mb-6">About Me</h1>
<p className="text-neutral-400 text-base leading-7 font-light">
                            I am a multidisciplinary developer with a background in traditional graphic design. I bridge the gap between design and engineering, ensuring that the final product not only functions perfectly but feels intuitive and organic. My toolkit is built for speed, scalability, and visual fidelity.
                        </p>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-6">Experience</h3>
<div className="space-y-6 border-l border-white/10 pl-6 ml-2">
<div className="relative">
<div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-black"></div>
<span className="text-xs text-neutral-500 mb-1 block">2022 - Present</span>
<h4 className="text-base font-medium text-white">Senior Frontend Engineer</h4>
<p className="text-sm text-neutral-400">Vercel</p>
</div>
<div className="relative">
<div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-neutral-800 border-2 border-black"></div>
<span className="text-xs text-neutral-500 mb-1 block">2020 - 2022</span>
<h4 className="text-base font-medium text-white">Creative Developer</h4>
<p className="text-sm text-neutral-400">Stripe</p>
</div>
<div className="relative">
<div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-neutral-800 border-2 border-black"></div>
<span className="text-xs text-neutral-500 mb-1 block">2018 - 2020</span>
<h4 className="text-base font-medium text-white">UI Designer</h4>
<p className="text-sm text-neutral-400">Freelance</p>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-6">Stack</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium bg-white/5 text-neutral-300 border border-white/5">JavaScript</span>
<span className="px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium bg-white/5 text-neutral-300 border border-white/5">TypeScript</span>
<span className="px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium bg-white/5 text-neutral-300 border border-white/5">React</span>
<span className="px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium bg-white/5 text-neutral-300 border border-white/5">Next.js</span>
<span className="px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium bg-white/5 text-neutral-300 border border-white/5">WebGL</span>
<span className="px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium bg-white/5 text-neutral-300 border border-white/5">Node.js</span>
</div>
</div>
</div>
</div>
</section>

<section className="page-content max-w-2xl mx-auto pt-20" id="contact">
<div className="text-center mb-12">
<h1 className="text-4xl font-semibold tracking-tight mb-4">Let's Talk</h1>
<p className="text-neutral-500 text-sm font-light">Got an idea? I'm currently available for freelance projects.</p>
</div>
<div className="glass-panel p-8 md:p-10 rounded-3xl">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group relative">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent peer text-sm" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 top-3 text-neutral-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-white peer-[&amp;:not(:placeholder-shown)]:-top-2 peer-[&amp;:not(:placeholder-shown)]:text-[10px] peer-[&amp;:not(:placeholder-shown)]:text-white" htmlFor="name">Name</label>
</div>
<div className="group relative">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent peer text-sm" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 top-3 text-neutral-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-white peer-[&amp;:not(:placeholder-shown)]:-top-2 peer-[&amp;:not(:placeholder-shown)]:text-[10px] peer-[&amp;:not(:placeholder-shown)]:text-white" htmlFor="email">Email</label>
</div>
</div>
<div className="group relative pt-2">
<textarea className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-transparent peer resize-none h-32 text-sm" id="message" placeholder="Message"></textarea>
<label className="absolute left-0 top-6 text-neutral-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-white peer-[&amp;:not(:placeholder-shown)]:top-0 peer-[&amp;:not(:placeholder-shown)]:text-[10px] peer-[&amp;:not(:placeholder-shown)]:text-white" htmlFor="message">Tell me about your project</label>
</div>
<div className="pt-6 flex justify-end">
<button className="px-8 py-3 rounded-full bg-white text-black font-medium text-xs tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-2" type="button">
                            Send Message <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</form>
<div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<div>hello@example.com</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</div>
</section>
</main>
<footer className="w-full py-8 text-center border-t border-white/5 mt-auto">
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2026 Portfolio. All Rights Reserved.</p>
</footer>


    </>
  );
}
