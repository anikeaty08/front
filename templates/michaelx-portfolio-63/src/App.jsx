import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Staggered Character Animation logic
        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.animate-title');
            elements.forEach(el => {
                const text = el.innerText;
                el.innerHTML = '';
                [...text].forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char; // Handle spaces
                    span.className = 'char-animate';
                    span.style.animationDelay = `${index * 30}ms`; // Faster delay for smoother feel
                    el.appendChild(span);
                });
            });

            // 3D Tilt Logic
            const cards = document.querySelectorAll('.tilt-card');
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    // Subtle tilt
                    const rotateX = ((y - centerY) / centerY) * -3; 
                    const rotateY = ((x - centerX) / centerX) * 3;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 scanlines pointer-events-none h-screen w-screen z-50 opacity-40"></div>
<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-void opacity-60">
<div className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-brand text-lg text-white hover:text-cyan-400 transition-colors tracking-widest" href="#">
                MICHAEL<span className="text-cyan-500">X</span>
</a>
<div className="hidden md:flex gap-10 text-[0.65rem] font-medium tracking-[0.2em] uppercase">
<a className="hover:text-cyan-400 transition-colors" href="#about">Protocols</a>
<a className="hover:text-cyan-400 transition-colors" href="#work">Deployments</a>
<a className="hover:text-cyan-400 transition-colors" href="#testimonials">Validation</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 text-white px-6 py-3 rounded hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all" href="#contact">
                Init Sequence <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden text-white">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-3 px-3 py-1 rounded border border-cyan-900/30 bg-cyan-950/10 text-cyan-400 text-[0.65rem] tracking-[0.2em] font-medium uppercase mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    System Status: Accepting Uplinks
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9] mb-8 font-brand animate-title mix-blend-screen">
                    ARCHITECTING <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-400 to-white">MARKET AUTHORITY.</span>
</h1>
<div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl border-l-2 border-cyan-500/50 pl-6 animate-title">
                        We don't just build websites; we engineer high-performance digital infrastructure that quietly dominates search results and converts anonymous traffic into revenue.
                    </p>

<div className="hidden md:block">
<div className="flex gap-4">
<div className="p-3 border border-white/10 rounded bg-black/50 backdrop-blur hover:border-cyan-500/50 transition-colors group">
<i className="w-6 h-6 text-slate-500 group-hover:text-cyan-400 transition-colors" data-lucide="cpu"></i>
</div>
<div className="p-3 border border-white/10 rounded bg-black/50 backdrop-blur hover:border-cyan-500/50 transition-colors group">
<i className="w-6 h-6 text-slate-500 group-hover:text-cyan-400 transition-colors" data-lucide="network"></i>
</div>
<div className="p-3 border border-white/10 rounded bg-black/50 backdrop-blur hover:border-cyan-500/50 transition-colors group">
<i className="w-6 h-6 text-slate-500 group-hover:text-cyan-400 transition-colors" data-lucide="zap"></i>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 mt-12">
<button className="inline-flex items-center justify-center gap-2 bg-cyan-600 text-white px-8 py-4 rounded font-medium text-xs tracking-[0.2em] uppercase hover:bg-cyan-500 transition-all border border-transparent shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                        View Schematics
                    </button>
<button className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/10 text-white px-8 py-4 rounded font-medium text-xs tracking-[0.2em] uppercase hover:bg-white/5 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                        Establish Comms
                    </button>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/40 py-6 overflow-hidden">
<div className="flex gap-10 items-center whitespace-nowrap animate-[marquee_20s_linear_infinite] opacity-60 hover:opacity-100 transition-opacity">

<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-cyan-400/80"><i className="w-4 h-4" data-lucide="activity"></i> Semantic SEO</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">Next.js Architecture</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-cyan-400/80"><i className="w-4 h-4" data-lucide="zap"></i> Core Web Vitals</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">Tailwind Precision</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-cyan-400/80"><i className="w-4 h-4" data-lucide="database"></i> Structured Data</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">Typescript Logic</div>

<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-cyan-400/80"><i className="w-4 h-4" data-lucide="activity"></i> Semantic SEO</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">Next.js Architecture</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-cyan-400/80"><i className="w-4 h-4" data-lucide="zap"></i> Core Web Vitals</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">Tailwind Precision</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-cyan-400/80"><i className="w-4 h-4" data-lucide="database"></i> Structured Data</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">Typescript Logic</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="about">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-6">
<div>
<h2 className="text-3xl font-brand text-white tracking-tight mb-2">OPERATIONAL PROTOCOLS</h2>
<p className="text-slate-500 max-w-sm font-light text-sm">Our methodology fuses data-driven strategy with aesthetic precision.</p>
</div>
<span className="text-cyan-500 font-mono text-xs tracking-widest">01 // PROCESS</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="tilt-card group md:col-span-2 glass-panel p-10 rounded-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-[60px] -mr-16 -mt-16 transition group-hover:bg-cyan-800/20"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="layout-grid"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Technical Architecture</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed max-w-md">
                            We bypass standard templates to engineer custom, component-based environments. Utilizing modern frameworks, we prioritize Core Web Vitals and user retention to ensure your digital footprint is both stable and scalable.
                        </p>
</div>
</div>

<div className="tilt-card group glass-panel p-10 rounded-xl relative overflow-hidden">
<div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center border border-white/10 mb-6 text-white group-hover:text-cyan-400 transition-colors">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Semantic SEO</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                        Data structuring that compels search engines to recognize your authority instantly. We code for machines so they rank you for humans.
                    </p>
</div>

<div className="tilt-card group glass-panel p-10 rounded-xl relative overflow-hidden">
<div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center border border-white/10 mb-6 text-white group-hover:text-cyan-400 transition-colors">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Velocity</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                        Optimization of critical rendering paths to ensure sub-100ms interactions. Speed isn't a feature; it's the foundation of conversion.
                    </p>
</div>

<div className="tilt-card group md:col-span-2 glass-panel p-10 rounded-xl relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-950/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h3 className="text-xl font-medium text-white mb-2">The Arsenal</h3>
<p className="text-slate-400 font-light text-sm">Tools chosen for speed, scalability, and stability.</p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 rounded border border-white/10 text-[0.6rem] uppercase tracking-wider text-slate-300 bg-black/50">Next.js</span>
<span className="px-3 py-1 rounded border border-white/10 text-[0.6rem] uppercase tracking-wider text-slate-300 bg-black/50">Tailwind</span>
<span className="px-3 py-1 rounded border border-white/10 text-[0.6rem] uppercase tracking-wider text-slate-300 bg-black/50">Figma</span>
<span className="px-3 py-1 rounded border border-white/10 text-[0.6rem] uppercase tracking-wider text-slate-300 bg-black/50">Ahrefs</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
<h2 className="text-3xl font-brand text-white tracking-tight">SELECTED DEPLOYMENTS</h2>
<span className="text-cyan-500 font-mono text-xs tracking-widest">02 // WORK</span>
</div>
<div className="space-y-32">

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 aspect-video group-hover:border-cyan-500/50 transition duration-500">

<div className="absolute inset-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-700">
<div className="absolute top-4 left-4 right-4 h-4 bg-neutral-800 rounded-full w-1/3"></div>
<div className="absolute top-12 left-4 right-4 bottom-4 bg-gradient-to-br from-neutral-800 to-black rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
<div className="w-32 h-32 rounded-full bg-cyan-500/20 blur-[40px]"></div>
<div className="text-slate-600 font-mono text-xs tracking-widest">FINTECH DASHBOARD UI</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<span className="text-cyan-500 font-mono text-xs tracking-widest uppercase">Finance</span>
<span className="h-px w-8 bg-white/10"></span>
<span className="text-slate-500 font-mono text-xs tracking-widest uppercase">Build 2023</span>
</div>
<h3 className="text-4xl font-medium text-white mb-4 group-hover:text-cyan-400 transition-colors">Novus Capital</h3>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                            A complete rebranding and architecture overhaul for a Series B fintech startup. We engineered a 240% increase in organic traffic within 6 months via programmatic SEO landing pages and a high-performance marketing site.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-cyan-500 pb-1 hover:text-cyan-400 transition-colors" href="#">
                            Access Case Study <i className="w-4 h-4 text-cyan-500" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
<div className="order-1 md:order-2 relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 aspect-video group-hover:border-cyan-500/50 transition duration-500">

<div className="absolute inset-0 bg-neutral-900 flex flex-col p-6 gap-4 group-hover:scale-105 transition-transform duration-700">
<div className="flex gap-4">
<div className="w-1/3 h-32 bg-neutral-800/50 rounded-lg border border-white/5"></div>
<div className="w-2/3 h-32 bg-neutral-800/30 rounded-lg border border-white/5 relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-cyan-600/10 rounded-full blur-xl"></div>
</div>
</div>
<div className="w-full h-full bg-neutral-800/20 rounded-lg border border-white/5 flex items-center justify-center">
<div className="text-slate-600 font-mono text-xs tracking-widest">E-COMMERCE HEADLESS</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="order-2 md:order-1">
<div className="flex items-center gap-3 mb-4">
<span className="text-cyan-500 font-mono text-xs tracking-widest uppercase">Retail</span>
<span className="h-px w-8 bg-white/10"></span>
<span className="text-slate-500 font-mono text-xs tracking-widest uppercase">Build 2024</span>
</div>
<h3 className="text-4xl font-medium text-white mb-4 group-hover:text-cyan-400 transition-colors">Lumina Apparel</h3>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                            Designed a minimalist headless Shopify storefront focused on speed and conversion. Implemented advanced schema markup for rich snippets, resulting in a 45% CTR improvement on SERPs.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-cyan-500 pb-1 hover:text-cyan-400 transition-colors" href="#">
                            Access Case Study <i className="w-4 h-4 text-cyan-500" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative bg-black/50" id="testimonials">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
<h2 className="text-3xl font-brand text-white tracking-tight">CLIENT TRANSMISSIONS</h2>
<span className="text-cyan-500 font-mono text-xs tracking-widest">03 // PROOF</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl hover:border-cyan-500/30 transition duration-300">
<div className="mb-6 text-cyan-500">
<i className="w-6 h-6 rotate-180 fill-current opacity-20" data-lucide="quote"></i>
</div>
<p className="text-slate-300 font-light mb-8 leading-relaxed text-sm">
                        "Michael doesn't just design websites; he designs growth engines. The attention to detail on the technical SEO side was something we hadn't seen from other designers. <span className="text-white font-medium">ROI was evident in weeks.</span>"
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-cyan-900/20 border border-cyan-500/30 flex items-center justify-center text-xs text-cyan-400 font-mono">JS</div>
<div>
<div className="text-xs font-bold text-white uppercase tracking-wider">James Smith</div>
<div className="text-[0.6rem] text-slate-500 uppercase tracking-widest">CTO, Vertex Logic</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-cyan-500/30 transition duration-300">
<div className="mb-6 text-cyan-500">
<i className="w-6 h-6 rotate-180 fill-current opacity-20" data-lucide="quote"></i>
</div>
<p className="text-slate-300 font-light mb-8 leading-relaxed text-sm">
                        "The redesign completely transformed our brand perception. We look like a billion-dollar company now, and the organic traffic uptick followed shortly after launch. <span className="text-white font-medium">A masterclass in execution.</span>"
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-cyan-900/20 border border-cyan-500/30 flex items-center justify-center text-xs text-cyan-400 font-mono">AL</div>
<div>
<div className="text-xs font-bold text-white uppercase tracking-wider">Anna Lee</div>
<div className="text-[0.6rem] text-slate-500 uppercase tracking-widest">Founder, Mode</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-cyan-500/30 transition duration-300">
<div className="mb-6 text-cyan-500">
<i className="w-6 h-6 rotate-180 fill-current opacity-20" data-lucide="quote"></i>
</div>
<p className="text-slate-300 font-light mb-8 leading-relaxed text-sm">
                        "Incredible workflow. Fast, communicative, and extremely knowledgeable about modern web standards. This was the best investment we made this year for our digital presence."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-cyan-900/20 border border-cyan-500/30 flex items-center justify-center text-xs text-cyan-400 font-mono">DR</div>
<div>
<div className="text-xs font-bold text-white uppercase tracking-wider">David Ross</div>
<div className="text-[0.6rem] text-slate-500 uppercase tracking-widest">VP Marketing, Scalar</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-24 px-6 relative overflow-hidden z-20" id="contact">

<div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-6">
<div className="flex text-yellow-400 gap-0.5">
<i className="w-3 h-3 fill-yellow-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-yellow-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-yellow-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-yellow-400" data-lucide="star"></i>
<i className="w-3 h-3 fill-yellow-400" data-lucide="star"></i>
</div>
<span className="text-[0.6rem] uppercase tracking-[0.25em] text-slate-500">Top Rated Partner</span>
</div>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-8 font-brand leading-none">
                        READY TO <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-600 animate-pulse">UPGRADE?</span>
</h2>
<p className="text-slate-400 font-light mb-10 max-w-md">Currently accepting new projects for Q4 2024. Secure your slot in the production queue.</p>
<a className="group flex items-center gap-4 text-xl text-white hover:text-cyan-400 transition-colors" href="mailto:hello@michaelx.com">
<div className="p-3 border border-white/10 rounded-full group-hover:border-cyan-400 transition-colors bg-black/50">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<span className="font-light tracking-wide">hello@michaelx.com</span>
</a>
</div>
<div className="w-full md:w-auto glass-panel p-8 rounded-xl border-cyan-500/20 max-w-md">
<h4 className="text-xl font-light text-white mb-6 tracking-tight">Initialize Uplink</h4>
<form className="space-y-4">
<div className="space-y-1">
<label className="text-[0.6rem] uppercase tracking-widest text-slate-500">Identity</label>
<input className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700 text-sm" placeholder="Name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[0.6rem] uppercase tracking-widest text-slate-500">Coordinates</label>
<input className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700 text-sm" placeholder="Email Address" type="email"/>
</div>
<button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded font-medium tracking-widest uppercase text-xs mt-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all" type="button">
                            Transmit Inquiry
                        </button>
</form>
</div>
</div>
<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] text-slate-600 uppercase tracking-widest">
<p>© 2024 MICHAEL X. SYSTEM ACTIVE.</p>
<div className="flex gap-6">
<a className="hover:text-cyan-400 transition-colors" href="#">Twitter / X</a>
<a className="hover:text-cyan-400 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-cyan-400 transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
