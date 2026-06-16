import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // GSAP Registration
        gsap.registerPlugin(ScrollTrigger);

        // Custom Cursor Logic
        const cursor = document.querySelector('#cursor');
        const triggers = document.querySelectorAll('.hover-trigger');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        triggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            trigger.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // Hero Reveal Animation
        const tl = gsap.timeline();
        tl.from("h1 span", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        })
        .from(".reveal-sub", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.5");

        // Scroll Animations for Sections
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section.querySelectorAll('h2, h3, p'), {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        });

        // 3D Tilt Effect for Cards
        const cards = document.querySelectorAll('[data-tilt]');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });

        // Number Counter Animation
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            gsap.to(counter, {
                innerHTML: target,
                duration: 2,
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%"
                },
                snap: { innerHTML: 1 }
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-bg"></div>

<div id="cursor" style={{left: '718px', top: '279px'}}></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="text-2xl font-semibold tracking-tighter hover-trigger" data-cursor="link" href="#">OG.</a>
<div className="hidden md:flex space-x-8 text-sm font-medium text-white/70">
<a className="hover:text-white transition-colors hover-trigger" href="#services">Services</a>
<a className="hover:text-white transition-colors hover-trigger" href="#tool">AI Tool</a>
<a className="hover:text-white transition-colors hover-trigger" href="#portfolio">Work</a>
<a className="hover:text-white transition-colors hover-trigger" href="#about">Agency</a>
</div>
<button className="group relative px-6 py-2 overflow-hidden rounded-full bg-white/5 border border-white/10 hover-trigger" data-cursor="hover">
<span className="relative z-10 text-xs font-medium tracking-wide group-hover:text-white transition-colors">START PROJECT</span>
<div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 text-center max-w-5xl">
<div className="mb-6 inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
<span className="text-xs text-white/60 uppercase tracking-widest">Digital Future</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter leading-tight mb-8">
<span className="block text-gradient">WE TURN BRANDS</span>
<span className="block text-white/40">INTO MACHINES.</span>
</h1>
<p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-10 reveal-sub">
                Data-driven creativity. Brutalist performance. We build digital ecosystems that dominate markets and scale revenue.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center reveal-sub">
<button className="hover-trigger px-8 py-4 bg-red-600 text-white rounded-lg text-sm font-medium tracking-wide red-glow hover:bg-red-700 transition-all transform hover:-translate-y-1">
                    EXPLORE SERVICES
                </button>
<button className="hover-trigger px-8 py-4 border border-white/20 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-all">
                    TRY AI SIMULATOR
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-white/30" icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden">
<div className="flex w-max marquee-content space-x-24 items-center">

<div className="text-2xl font-semibold text-white/30 tracking-tighter">NIKE</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">SPOTIFY</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">STRIPE</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">LINEAR</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">VERCEL</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">RAYCAST</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">FIGMA</div>

<div className="text-2xl font-semibold text-white/30 tracking-tighter">NIKE</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">SPOTIFY</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">STRIPE</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">LINEAR</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">VERCEL</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">RAYCAST</div>
<div className="text-2xl font-semibold text-white/30 tracking-tighter">FIGMA</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4 text-gradient">EXPERTISE</h2>
<p className="text-white/50 max-w-md">Precision engineered marketing solutions for the modern web.</p>
</div>
<button className="hidden md:block text-sm border-b border-red-600 pb-1 text-red-500 hover:text-white transition-colors hover-trigger">VIEW ALL SERVICES</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl group hover:border-red-600/50 transition-colors duration-500 hover-trigger" data-tilt="">
<div className="mb-8 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
<iconify-icon className="text-white group-hover:text-red-500" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Growth Strategy</h3>
<p className="text-sm text-white/50 leading-relaxed">Data-backed roadmaps to scale your user acquisition and retention metrics efficiently.</p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-red-600/50 transition-colors duration-500 hover-trigger" data-tilt="">
<div className="mb-8 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
<iconify-icon className="text-white group-hover:text-red-500" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Brand Identity</h3>
<p className="text-sm text-white/50 leading-relaxed">Visual languages that cut through the noise. Logos, typography, and design systems.</p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-red-600/50 transition-colors duration-500 hover-trigger" data-tilt="">
<div className="mb-8 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
<iconify-icon className="text-white group-hover:text-red-500" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Web Development</h3>
<p className="text-sm text-white/50 leading-relaxed">High-performance React/Next.js applications with headless CMS integration.</p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-red-600/50 transition-colors duration-500 hover-trigger" data-tilt="">
<div className="mb-8 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
<iconify-icon className="text-white group-hover:text-red-500" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">AI Automation</h3>
<p className="text-sm text-white/50 leading-relaxed">Custom LLM integration and workflow automation to reduce operational drag.</p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-red-600/50 transition-colors duration-500 hover-trigger" data-tilt="">
<div className="mb-8 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
<iconify-icon className="text-white group-hover:text-red-500" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Social Media</h3>
<p className="text-sm text-white/50 leading-relaxed">Content that resonates. Community management that builds loyalty.</p>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-red-600/50 transition-colors duration-500 hover-trigger" data-tilt="">
<div className="mb-8 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
<iconify-icon className="text-white group-hover:text-red-500" icon="solar:megaphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Paid Acquisition</h3>
<p className="text-sm text-white/50 leading-relaxed">ROI-focused campaigns across Meta, Google, and LinkedIn ad networks.</p>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative" id="tool">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-2xl border border-white/10 bg-[#050505] overflow-hidden shadow-2xl shadow-red-900/10 p-1">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent"></div>

<div className="bg-[#0A0A0A] rounded-xl p-6 h-[400px] flex flex-col relative">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<span className="text-[10px] uppercase tracking-widest text-white/30">OG Simulator v1.0</span>
</div>
<div className="space-y-6">
<div className="">
<div className="flex justify-between text-xs text-white/50 mb-2">
<span>Target Reach</span>
<span className="text-red-500">1.2M</span>
</div>
<div className="h-1.5 overflow-hidden bg-white/5 w-full rounded-full">
<div className="bg-red-600 h-full w-[70%] animate-[pulse_3s_infinite]"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-xs text-white/50 mb-2">
<span>Est. Conversion</span>
<span className="text-white">4.8%</span>
</div>
<div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
<div className="bg-white h-full w-[45%]"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="bg-white/5 p-4 rounded-lg border border-white/5">
<div className="text-xs text-white/40 mb-1">CPA</div>
<div className="text-2xl font-mono text-white">$12.40</div>
</div>
<div className="bg-white/5 p-4 rounded-lg border border-white/5">
<div className="text-xs text-white/40 mb-1">ROAS</div>
<div className="text-2xl font-mono text-red-500">3.2x</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent h-[20%] w-full animate-[scan_4s_linear_infinite] pointer-events-none"></div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-red-600 font-mono text-xs tracking-widest mb-4 block uppercase">Proprietary Tech</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">PREDICT YOUR <br/> GROWTH.</h2>
<p className="text-white/60 mb-8 leading-relaxed">
                    Stop guessing. Our AI-driven simulator analyzes your market data to project lead generation, budget allocation, and ROI before we write a single line of copy.
                </p>
<button className="flex items-center gap-3 text-sm font-medium hover:gap-5 transition-all duration-300 hover-trigger">
<span className="">LAUNCH SIMULATOR</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-32 px-6" id="portfolio">
<div className="max-w-7xl mx-auto mb-16">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-gradient">SELECTED WORKS</h2>
</div>
<div className="max-w-7xl mx-auto space-y-32">

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-pointer hover-trigger">
<div className="md:col-span-8 relative overflow-hidden rounded-lg">
<div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors z-10"></div>

<div className="w-full aspect-video bg-[#111] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<span className="text-white/20 text-4xl font-semibold tracking-tighter">FINTECH APP</span>
</div>
</div>
<div className="md:col-span-4 z-20 md:-ml-12 p-6 glass-panel rounded-xl border-l-4 border-l-red-600 transform group-hover:-translate-x-2 transition-transform duration-500">
<span className="text-xs text-white/40 uppercase tracking-widest mb-2 block">Fintech</span>
<h3 className="text-2xl font-medium mb-4">NeoBank Interface</h3>
<p className="text-sm text-white/60 mb-6">Complete UI/UX overhaul increasing user retention by 45%.</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white/5 rounded-full text-[10px] border border-white/10">Strategy</span>
<span className="px-3 py-1 bg-white/5 rounded-full text-[10px] border border-white/10">Design</span>
</div>
</div>
</div>

<div className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-pointer hover-trigger">
<div className="md:col-span-4 order-2 md:order-1 z-20 md:-mr-12 p-6 glass-panel rounded-xl border-l-4 border-white/20 group-hover:border-red-600 transition-colors transform group-hover:translate-x-2 duration-500">
<span className="text-xs text-white/40 uppercase tracking-widest mb-2 block">E-Commerce</span>
<h3 className="text-2xl font-medium mb-4">Luxury Fashion</h3>
<p className="text-sm text-white/60 mb-6">Headless Shopify storefront with 3D product visualization.</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white/5 rounded-full text-[10px] border border-white/10">Dev</span>
<span className="px-3 py-1 bg-white/5 rounded-full text-[10px] border border-white/10">SEO</span>
</div>
</div>
<div className="md:col-span-8 order-1 md:order-2 relative overflow-hidden rounded-lg">
<div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors z-10"></div>
<div className="w-full aspect-video bg-[#111] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<span className="text-white/20 text-4xl font-semibold tracking-tighter">FASHION BRAND</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#050505]" id="about">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-8">NOT JUST AN AGENCY. <br/><span className="text-white/40">YOUR GROWTH PARTNER.</span></h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
<div className="p-4 border border-white/5 rounded-lg">
<div className="text-3xl md:text-4xl font-semibold text-red-600 mb-2 counter" data-target="50">50</div>
<div className="text-xs text-white/50 uppercase tracking-widest">Active Clients</div>
</div>
<div className="p-4 border border-white/5 rounded-lg">
<div className="text-3xl md:text-4xl font-semibold text-white mb-2 counter" data-target="12">12</div>
<div className="text-xs text-white/50 uppercase tracking-widest">Awards Won</div>
</div>
<div className="p-4 border border-white/5 rounded-lg">
<div className="text-3xl md:text-4xl font-semibold text-white mb-2 counter" data-target="300">300</div>
<div className="text-xs text-white/50 uppercase tracking-widest">% Avg ROI</div>
</div>
<div className="p-4 border border-white/5 rounded-lg">
<div className="text-3xl md:text-4xl font-semibold text-white mb-2 counter" data-target="24">24</div>
<div className="text-xs text-white/50 uppercase tracking-widest">Support</div>
</div>
</div>
</div>
</section>

<footer className="relative pt-32 pb-10 px-6 bg-black overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-8">READY TO <span className="text-red-600">DOMINATE?</span></h2>
<p className="text-white/50 mb-12 text-lg">Let's build something impossible together.</p>
<a className="inline-block group relative px-10 py-5 overflow-hidden rounded-full bg-white text-black hover-trigger" data-cursor="hover" href="#">
<span className="relative z-10 text-sm font-bold tracking-wide group-hover:text-white transition-colors">START YOUR PROJECT</span>
<div className="absolute inset-0 bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300 ease-in-out"></div>
</a>
</div>
<div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span className="font-semibold text-white">OG COMMUNICATION</span>
<span>© 2024</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>



    </>
  );
}
