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



        // Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Unobserve if you only want it to animate once
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-text, .fade-in-up');
            revealElements.forEach(el => observer.observe(el));
            
            // Mouse follower effect for the ambient light
            const light = document.querySelector('.ambient-light');
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX;
                const y = e.clientY;
                
                // Add a slight delay/smoothness to the movement
                requestAnimationFrame(() => {
                    light.style.left = `${x}px`;
                    light.style.top = `${y}px`;
                });
            });
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
      

<div className="ambient-light"></div>

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-neutral-950/70">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white z-50 relative group" href="#">
                VENTUS<span className="text-neutral-500">.CAPITAL</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors duration-300" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors duration-300" href="#perspectives">Perspectives</a>
</div>
<button className="text-sm font-medium border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
<span>Partner Login</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/10 via-neutral-950 to-neutral-950 z-0"></div>
<div className="z-10 text-center max-w-4xl mx-auto space-y-8">
<div className="overflow-hidden">
<p className="reveal-text text-sm text-neutral-400 uppercase tracking-widest mb-4">Established 2024</p>
</div>
<div className="overflow-hidden">
<h1 className="reveal-text active text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 leading-[1.1]">
                    Investing in the <br/>
<span className="italic font-normal font-serif text-white/80">architecture</span> of tomorrow.
                </h1>
</div>
<div className="overflow-hidden">
<p className="reveal-text text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed stagger-1">
                    We provide high-conviction capital to founders building the infrastructure for the next generation of the internet and energy.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 fade-in-up stagger-2">
<a className="group relative px-8 py-3 rounded-full bg-white text-neutral-950 font-medium overflow-hidden transition-all hover:pr-10" href="#portfolio">
<span className="relative z-10">View Portfolio</span>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a className="group px-8 py-3 rounded-full text-white font-medium border border-white/10 hover:bg-white/5 transition-all" href="#philosophy">
                    Our Philosophy
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon height="24" icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</header>

<div className="py-8 border-y border-white/5 bg-neutral-950/50 backdrop-blur-sm z-20 relative">
<div className="marquee-container">
<div className="marquee-content text-neutral-600 text-lg font-medium tracking-tight space-x-16">
<span>ATLAS</span>
<span>MERIDIAN</span>
<span>NOVA LABS</span>
<span>STRATA</span>
<span>KINETIC</span>
<span>HORIZON AI</span>
<span>ECHO SYSTEMS</span>
<span>PRISM</span>
<span>ATLAS</span>
<span>MERIDIAN</span>
<span>NOVA LABS</span>
<span>STRATA</span>
<span>KINETIC</span>
<span>HORIZON AI</span>
<span>ECHO SYSTEMS</span>
<span>PRISM</span>
</div>
</div>
</div>

<section className="py-24 md:py-32 px-6 border-b border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div className="fade-in-up stagger-1 space-y-2 group cursor-default">
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white group-hover:text-blue-200 transition-colors">$2.4B</h3>
<p className="text-sm text-neutral-500 uppercase tracking-wider">Assets Under Management</p>
</div>
<div className="fade-in-up stagger-2 space-y-2 group cursor-default">
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white group-hover:text-blue-200 transition-colors">40+</h3>
<p className="text-sm text-neutral-500 uppercase tracking-wider">Strategic IPOs</p>
</div>
<div className="fade-in-up stagger-3 space-y-2 group cursor-default">
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white group-hover:text-blue-200 transition-colors">12Y</h3>
<p className="text-sm text-neutral-500 uppercase tracking-wider">Average Partnership</p>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="philosophy">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="fade-in-up sticky top-32">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Patient capital for<br/>impatient builders.</h2>
<p className="text-neutral-400 leading-relaxed text-lg font-light mb-8">
                    We don't just follow trends; we identify the underlying shifts in technology and society. Our approach is rooted in deep research, technical understanding, and a commitment to the long game.
                </p>
<ul className="space-y-4 text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Deep Technical Due Diligence</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Global Network Access</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Operational Strategy Support</span>
</li>
</ul>
</div>
<div className="grid gap-6">

<div className="fade-in-up p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:border-white/10 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:atom-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Deep Tech</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Backing scientific breakthroughs that have the potential to redefine industries, from quantum computing to synthetic biology.
                    </p>
</div>

<div className="fade-in-up stagger-1 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:border-white/10 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-network-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Infrastructure</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Supporting the rails of the digital economy. Decentralized networks, security layers, and cloud architecture.
                    </p>
</div>

<div className="fade-in-up stagger-2 p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:border-white/10 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Sustainable Energy</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Investing in the transition to a zero-carbon future through grid intelligence, storage solutions, and new materials.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-neutral-900/30 border-y border-white/5" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 fade-in-up">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Selected Ventures</h2>
<p className="text-neutral-400 text-sm max-w-md">Companies that are changing the way the world moves, transacts, and lives.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:opacity-70 transition-opacity mt-4 md:mt-0" href="#">
                    View Full Track Record <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="fade-in-up group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end">
<div>
<h4 className="text-xl font-medium text-white mb-1">Apex Chain</h4>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Web3 Infrastructure</p>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-1 group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end">
<div>
<h4 className="text-xl font-medium text-white mb-1">Lumina</h4>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Enterprise AI</p>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-2 group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end">
<div>
<h4 className="text-xl font-medium text-white mb-1">Orbital</h4>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Aerospace</p>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="fade-in-up group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end">
<div>
<h4 className="text-xl font-medium text-white mb-1">Circuit One</h4>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Semiconductors</p>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-1 group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&amp;w=2006&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end">
<div>
<h4 className="text-xl font-medium text-white mb-1">Volt Storage</h4>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Renewables</p>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-2 group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1965&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end">
<div>
<h4 className="text-xl font-medium text-white mb-1">Synapse</h4>
<p className="text-xs text-neutral-400 uppercase tracking-widest">BioTech</p>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 md:hidden text-center fade-in-up">
<a className="inline-flex items-center gap-2 text-sm text-white hover:opacity-70 transition-opacity" href="#">
                    View Full Track Record <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 px-6" id="perspectives">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 fade-in-up">Latest Perspectives</h2>
<div className="grid gap-1">

<a className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-t border-white/10 hover:bg-white/[0.02] transition-colors fade-in-up" href="#">
<div className="space-y-2">
<span className="text-xs text-neutral-500 font-mono">OCT 14, 2023</span>
<h3 className="text-xl font-medium text-neutral-200 group-hover:text-white transition-colors">The State of Decentralized Finance</h3>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
<span className="text-sm text-neutral-400">Read Article</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-t border-white/10 hover:bg-white/[0.02] transition-colors fade-in-up stagger-1" href="#">
<div className="space-y-2">
<span className="text-xs text-neutral-500 font-mono">SEP 02, 2023</span>
<h3 className="text-xl font-medium text-neutral-200 group-hover:text-white transition-colors">Vertical Integration in AI Stacks</h3>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
<span className="text-sm text-neutral-400">Read Article</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-y border-white/10 hover:bg-white/[0.02] transition-colors fade-in-up stagger-2" href="#">
<div className="space-y-2">
<span className="text-xs text-neutral-500 font-mono">AUG 21, 2023</span>
<h3 className="text-xl font-medium text-neutral-200 group-hover:text-white transition-colors">Energy Storage at Scale</h3>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
<span className="text-sm text-neutral-400">Read Article</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<footer className="py-24 px-6 border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16">
<div className="max-w-md space-y-8 fade-in-up">
<a className="text-xl font-medium tracking-tighter text-white" href="#">
                    VENTUS<span className="text-neutral-500">.CAPITAL</span>
</a>
<p className="text-neutral-400 text-lg font-light leading-relaxed">
                    Building relationships with extraordinary founders who are redefining the future.
                </p>
<form className="relative group max-w-sm">
<input className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors pr-12" placeholder="Email address" type="email"/>
<button className="absolute right-0 top-3 text-neutral-500 hover:text-white transition-colors" type="submit">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</form>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm fade-in-up stagger-1">
<div className="space-y-4">
<h5 className="text-white font-medium">Firm</h5>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-white font-medium">Portfolio</h5>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Seed</a></li>
<li><a className="hover:text-white transition-colors" href="#">Series A</a></li>
<li><a className="hover:text-white transition-colors" href="#">Growth</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-white font-medium">Social</h5>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Substack</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-white font-medium">Legal</h5>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 fade-in-up stagger-2">
<p>© 2024 Ventus Capital. All rights reserved.</p>
<p>Designed for the future.</p>
</div>
</footer>


    </>
  );
}
