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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        document.addEventListener('DOMContentLoaded', () => {
            const hero = document.getElementById('hero');
            
            hero.addEventListener('mousemove', (e) => {
                const rect = hero.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                hero.style.setProperty('--x', `${x}px`);
                hero.style.setProperty('--y', `${y}px`);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl transition-all duration-700 delay-500" style={{animation: 'immersiveEnter 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', opacity: '0', transform: 'translateY(-10px)'}}>
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter hover:opacity-80 transition-opacity" href="#">
                AETHER<span className="text-[#9AFF00]">.</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">Studio</a>
<a className="hover:text-white transition-colors" href="#services">Expertise</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex group items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wide border border-white/10 rounded-full hover:bg-white/5 transition-all hover:border-[#9AFF00]/30 text-white" href="#contact">
                Start Project
                <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden group pt-20 relative items-center justify-center" id="hero" style={{'--x': '399px', '--y': '126px'}}>

<div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-40"></div>

<div className="hero-spotlight absolute inset-0 pointer-events-none transition-opacity duration-300"></div>
<div className="hero-grid-highlight absolute inset-0 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#9AFF00] rounded-full opacity-[0.02] blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pointer-events-none">

<div className="flex stagger-in delay-0 pointer-events-auto justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#9AFF00] animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide">Accepting new ventures for 2024</span>
</div>
</div>
<h1 className="pointer-events-auto text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
<span className="block stagger-in delay-100 lg:bg-clip-text lg:text-transparent bg-gradient-to-br from-[#ffffff] to-white/50">We craft digital</span>
<span className="block stagger-in delay-200 lg:bg-clip-text lg:text-transparent bg-gradient-to-br from-[#ffffff] to-white/50">futures for <span className="text-white italic font-serif">visionaries.</span></span>
</h1>
<div className="stagger-in delay-300">
<p className="pointer-events-auto text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Aether is a design and development agency obsessed with quality. We build immersive websites that define brands and drive growth.
                </p>
</div>
<div className="pointer-events-auto flex flex-col md:flex-row items-center justify-center gap-4 stagger-in delay-400">
<a className="w-full md:w-auto px-8 py-4 bg-[#9AFF00] text-black text-sm font-semibold rounded-full hover:bg-[#88e000] transition-colors flex items-center justify-center gap-2" href="#contact">
                    Let's Build It
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full md:w-auto px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#work">
                    View Portfolio
                </a>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-black py-8 relative overflow-hidden stagger-in delay-400">
<div className="max-w-7xl mx-auto px-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex justify-between items-center gap-8 flex-wrap md:flex-nowrap">
<span className="text-xl font-bold tracking-tight">ACME CORP</span>
<span className="text-xl font-bold tracking-tight">VORTEX</span>
<span className="text-xl font-bold tracking-tight">PULSAR</span>
<span className="text-xl font-bold tracking-tight">HYPERION</span>
<span className="text-xl font-bold tracking-tight">NEBULA</span>
</div>
</div>
</div>

<section className="py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-8 text-white">
                        Beyond aesthetics. <br/>
<span className="text-neutral-500">Engineered for impact.</span>
</h2>
<div className="space-y-6 text-neutral-400 text-base leading-relaxed">
<p>
                            We don't just move pixels; we move businesses. In a world of noise, we create clarity through rigorous design systems and flawless code.
                        </p>
<p>
                            Our team blends creative intuition with technical precision. Every animation is intentional, every interaction is smooth, and every line of code is optimized for performance.
                        </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<span className="block text-4xl font-semibold text-[#9AFF00] tracking-tight mb-1">50+</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Projects Launched</span>
</div>
<div className="">
<span className="block text-4xl font-semibold text-[#9AFF00] tracking-tight mb-1">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Client Satisfaction</span>
</div>
</div>
</div>

<div className="relative h-[500px] w-full bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-3 mb-4">
<span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
<svg aria-hidden="true" className="iconify text-[#9AFF00] iconify--lucide" data-icon="lucide:code-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<div className="h-px flex-1 bg-white/20"></div>
</div>
<p className="text-sm text-neutral-300 font-mono">
<span className="text-[#9AFF00]">const</span> vision = <span className="text-white">"Reality"</span>;
                            await <span className="text-blue-400">launch</span>(vision);
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950/50 relative border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<span className="text-[#9AFF00] font-mono text-xs uppercase tracking-widest mb-4 block">Our Expertise</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white">Comprehensive <br/>Design Systems</h2>
</div>
<p className="text-neutral-400 text-sm max-w-sm mt-6 md:mt-0">
                    From initial concept to final deployment, we handle the entire digital lifecycle with obsessive attention to detail.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glow-card p-8 rounded-2xl bg-[#080808] border border-white/5 relative overflow-hidden h-80 flex flex-col justify-between">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#9AFF00] blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div className="">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#9AFF00]/50 transition-colors">
<svg aria-hidden="true" className="iconify w-6 h-6 text-white group-hover:text-[#9AFF00] iconify--lucide" data-icon="lucide:layout-template" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">UI/UX Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Interfaces that feel intuitive. We design user-centric experiences that look beautiful and function seamlessly across all devices.
                        </p>
</div>
</div>

<div className="group glow-card p-8 rounded-2xl bg-[#080808] border border-white/5 relative overflow-hidden h-80 flex flex-col justify-between">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#9AFF00] blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#9AFF00]/50 transition-colors">
<svg aria-hidden="true" className="iconify w-6 h-6 text-white group-hover:text-[#9AFF00] iconify--lucide" data-icon="lucide:cpu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Clean, semantic code using modern frameworks. Fast load times, SEO optimized, and built to scale with your business.
                        </p>
</div>
</div>

<div className="group glow-card p-8 rounded-2xl bg-[#080808] border border-white/5 relative overflow-hidden h-80 flex flex-col justify-between">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#9AFF00] blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#9AFF00]/50 transition-colors">
<svg aria-hidden="true" className="iconify w-6 h-6 text-white group-hover:text-[#9AFF00] iconify--lucide" data-icon="lucide:rocket" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">Launch &amp; Growth</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            We don't just hand over keys. We help with analytics integration, performance tuning, and launch strategies.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32" id="work">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Selected Work</h2>
<div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent"></div>
</div>
<div className="space-y-32">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 mb-8">
<div className="absolute inset-0 bg-[#111] group-hover:scale-105 transition-transform duration-700 ease-out">

<div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black flex items-center justify-center">
<span className="text-white/10 text-9xl font-bold tracking-tighter">FINTECH</span>
</div>
</div>
<div className="group-hover:bg-transparent transition-colors bg-black/20 absolute top-0 right-0 bottom-0 left-0"><div className="absolute inset-0" data-container-bg="true"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div></div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-6">
<div className="">
<h3 className="group-hover:text-[#9AFF00] transition-colors text-2xl font-medium text-white mb-2">Nova Finance</h3>
<p className="text-neutral-400 text-sm">Web Design • Frontend Development</p>
</div>
<span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#9AFF00] group-hover:border-[#9AFF00] group-hover:text-black transition-all">
<svg aria-hidden="true" className="iconify -rotate-45 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 mb-8">
<div className="absolute inset-0 bg-[#111] group-hover:scale-105 transition-transform duration-700 ease-out">
<div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
<span className="text-white/10 text-9xl font-bold tracking-tighter">ARCHITECT</span>
</div>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-6">
<div>
<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#9AFF00] transition-colors">Studio K</h3>
<p className="text-neutral-400 text-sm">Branding • Portfolio Site</p>
</div>
<span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#9AFF00] group-hover:border-[#9AFF00] group-hover:text-black transition-all">
<svg aria-hidden="true" className="iconify -rotate-45 iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-[#9AFF00] transition-colors pb-1 border-b border-transparent hover:border-[#9AFF00]" href="#">
                    View all projects <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-10">
<svg aria-hidden="true" className="iconify w-12 h-12 text-[#9AFF00] mx-auto opacity-80 iconify--lucide" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl md:text-4xl font-medium leading-snug tracking-tight text-white mb-8">
                "Aether didn't just build a website; they translated our abstract ideas into a high-performing digital product. The attention to detail is unmatched."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover grayscale" src="https://ui-avatars.com/api/?name=Alex+Rivera&amp;background=random&amp;color=fff"/>
</div>
<div className="text-left">
<div className="text-white font-medium text-sm">Alex Rivera</div>
<div className="text-neutral-500 text-xs">CEO, Apex Solutions</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#9AFF00]/5 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                Ready to stand out?
            </h2>
<p className="text-neutral-400 text-lg mb-12">
                Let's turn your vision into a digital reality.
            </p>
<a className="inline-flex items-center justify-center px-10 py-5 bg-[#9AFF00] text-black text-base font-semibold rounded-full hover:shadow-[0_0_40px_-10px_rgba(154,255,0,0.6)] hover:-translate-y-1 transition-all duration-300" href="#">
                Start Your Project
            </a>
<p className="mt-8 text-xs text-neutral-600">
                Response time: Within 24 hours
            </p>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div>
<a className="text-2xl font-semibold tracking-tighter text-white mb-6 block" href="#">
                        AETHER<span className="text-[#9AFF00]">.</span>
</a>
<p className="text-neutral-500 text-sm max-w-xs">
                        A creative web agency designing the future of digital interaction.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white font-medium text-sm mb-4">Sitemap</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#9AFF00] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#9AFF00] transition-colors" href="#about">About</a></li>
<li><a className="hover:text-[#9AFF00] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#9AFF00] transition-colors" href="#work">Work</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Socials</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#9AFF00] transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-[#9AFF00] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[#9AFF00] transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-[#9AFF00] transition-colors" href="#">Dribbble</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 Aether Agency. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
