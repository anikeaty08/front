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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="w-full max-w-7xl flex justify-between items-center mb-8 px-2 z-20 relative">
<div className="neo-flat px-6 py-3 rounded-full flex items-center gap-3 select-none cursor-default hover:scale-105 transition-transform">
<span className="text-lg font-semibold tracking-tighter text-slate-800">STUDIO.</span>
<span className="text-xs text-slate-400 font-medium border-l border-slate-300 pl-3 hidden sm:inline-block">DIGITAL &amp; PRINT</span>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-6 hidden md:flex">
<a className="text-sm font-semibold text-slate-800" href="#">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors" href="#works">Works</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors" href="#contact">Contact</a>
</div>
<button className="neo-icon-btn rounded-full w-12 h-12">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="w-full max-w-7xl flex flex-col gap-20">

<section className="neo-card p-8 md:p-20 relative overflow-hidden flex flex-col items-center text-center min-h-[60vh] justify-center mt-4">

<div className="absolute top-[-40px] right-[-20px] w-64 h-64 rounded-full neo-flat animate-float opacity-60"></div>
<div className="absolute bottom-[-60px] left-[-40px] w-80 h-80 rounded-full neo-flat animate-float-delayed opacity-40"></div>
<div className="absolute bottom-20 right-[15%] w-20 h-20 rounded-full neo-pressed animate-float-delayed flex items-center justify-center text-indigo-400 hidden md:flex">
<iconify-icon icon="solar:code-circle-linear" width="32"></iconify-icon>
</div>
<div className="absolute top-1/4 left-[15%] w-16 h-16 rounded-full neo-flat animate-float text-emerald-400 flex items-center justify-center hidden md:flex" style={{animationDelay: '0.5s'}}>
<iconify-icon icon="solar:pen-linear" width="24"></iconify-icon>
</div>
<div className="absolute top-20 right-[25%] w-10 h-10 rounded-full neo-pressed animate-float text-rose-400 flex items-center justify-center hidden lg:flex" style={{animationDelay: '1s'}}>
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</div>
<div className="z-10 relative max-w-4xl flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neo-pressed text-xs font-medium text-slate-500 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for new projects
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-slate-800 mb-6 leading-tight">
                    We craft <span className="text-indigo-500">Digital Experiences</span> <br className="hidden md:block"/> &amp; Iconic Identities.
                </h1>
<p className="text-slate-500 text-base md:text-lg max-w-2xl font-light leading-relaxed mb-10">
                    From custom web applications and bespoke CMS solutions to striking logos, brochures, and dynamic QR codes. Everything you need to stand out as a modern full-stack agency.
                </p>
<div className="flex flex-wrap gap-5 justify-center">
<a className="neo-flat px-8 py-4 rounded-xl text-slate-700 text-sm font-semibold tracking-tight hover:text-indigo-600 transition-colors neo-pulse flex items-center gap-2" href="#contact">
                        Start a Project <iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
</a>
<a className="neo-icon-btn px-8 py-4 rounded-xl text-slate-500 text-sm font-medium tracking-tight gap-2" href="#works">
                        View Work
                    </a>
</div>
</div>
</section>

<section className="w-full" id="services">
<div className="flex flex-col items-center text-center mb-12">
<iconify-icon className="text-slate-400 mb-4" icon="solar:layers-linear" width="32"></iconify-icon>
<h2 className="text-3xl font-semibold tracking-tighter text-slate-800 mb-2">Our Capabilities</h2>
<p className="text-sm text-slate-500 font-light">End-to-end solutions for digital and print.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="neo-card p-8 group hover:translate-y-[-4px] transition-transform duration-300 cursor-default flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl neo-pressed flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:monitor-smartphone-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-3">Web Apps</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Custom coded websites and scalable web applications designed for performance, accessibility, and flawless user experience.
                    </p>
</div>

<div className="neo-card p-8 group hover:translate-y-[-4px] transition-transform duration-300 cursor-default flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl neo-pressed flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:server-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-3">Custom CMS</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Tailor-made Content Management Systems that give you total, effortless control over your platform's data and publishing.
                    </p>
</div>

<div className="neo-card p-8 group hover:translate-y-[-4px] transition-transform duration-300 cursor-default flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl neo-pressed flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pallete-2-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-3">Logo &amp; Branding</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Memorable logo design and comprehensive brand identity guidelines that make your business instantly recognizable.
                    </p>
</div>

<div className="neo-card p-8 group hover:translate-y-[-4px] transition-transform duration-300 cursor-default flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl neo-pressed flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:scanner-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-3">Print &amp; QR</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Physical touchpoints including visit cards, brochures, and dynamic QR codes that bridge the gap to your digital presence.
                    </p>
</div>
</div>
</section>

<section className="w-full" id="works">
<div className="flex flex-col items-center mb-10">
<h2 className="text-3xl font-semibold tracking-tighter text-slate-800 mb-4">Featured Projects</h2>

<div className="flex flex-wrap gap-3 justify-center max-w-3xl">
<button className="neo-pressed py-2.5 px-6 rounded-full flex items-center gap-2 text-slate-800 transition-all">
<span className="text-sm font-semibold">All</span>
</button>
<button className="neo-flat py-2.5 px-6 rounded-full flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-all active:scale-95">
<iconify-icon icon="solar:code-square-linear" width="16"></iconify-icon>
<span className="text-sm font-medium">Web &amp; CMS</span>
</button>
<button className="neo-flat py-2.5 px-6 rounded-full flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-all active:scale-95">
<iconify-icon icon="solar:pen-new-square-linear" width="16"></iconify-icon>
<span className="text-sm font-medium">Branding</span>
</button>
<button className="neo-flat py-2.5 px-6 rounded-full flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-all active:scale-95">
<iconify-icon icon="solar:printer-minimalistic-linear" width="16"></iconify-icon>
<span className="text-sm font-medium">Print &amp; QR</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<article className="neo-card p-6 group project-card cursor-pointer">
<div className="h-[300px] w-full rounded-2xl overflow-hidden mb-6 neo-pressed relative project-img-container">
<div className="absolute top-5 right-5 z-10">
<span className="neo-flat bg-[#eef0f4]/90 backdrop-blur-sm px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-600">Web App</span>
</div>
<img alt="Finance App" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/10 backdrop-blur-[2px]">
<button className="neo-flat w-16 h-16 rounded-full flex items-center justify-center text-slate-800 hover:scale-110 transition-transform">
<iconify-icon icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</button>
</div>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-3">
<h3 className="text-2xl font-semibold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">Fintech Dashboard</h3>
<iconify-icon className="text-emerald-500 mt-1" icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-500 font-light mb-5 line-clamp-2">
                            A fully custom coded web application for financial analytics with real-time data sync, built to handle massive data throughput with zero lag.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">React</span>
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">Node.js</span>
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">Tailwind</span>
</div>
</div>
</article>

<article className="neo-card p-6 group project-card cursor-pointer">
<div className="h-[300px] w-full rounded-2xl overflow-hidden mb-6 neo-pressed relative project-img-container flex items-center justify-center p-8">
<div className="absolute top-5 right-5 z-10">
<span className="neo-flat bg-[#eef0f4]/90 backdrop-blur-sm px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-600">Branding</span>
</div>
<img alt="Brand Guidelines" className="w-full h-full object-cover opacity-90 rounded-xl" src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/10 backdrop-blur-[2px]">
<button className="neo-flat w-16 h-16 rounded-full flex items-center justify-center text-slate-800 hover:scale-110 transition-transform">
<iconify-icon icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</button>
</div>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-3">
<h3 className="text-2xl font-semibold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">Aura Identity</h3>
</div>
<p className="text-sm text-slate-500 font-light mb-5 line-clamp-2">
                            Complete brand identity design including logo conception, typography pairing, and color systems for a modern lifestyle brand.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">Illustrator</span>
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">Logo Design</span>
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">Typography</span>
</div>
</div>
</article>

<article className="neo-card p-6 group project-card cursor-pointer">
<div className="h-[300px] w-full rounded-2xl overflow-hidden mb-6 neo-pressed relative project-img-container">
<div className="absolute top-5 right-5 z-10">
<span className="neo-flat bg-[#eef0f4]/90 backdrop-blur-sm px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-600">Print &amp; QR</span>
</div>
<img alt="Visit Cards" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/10 backdrop-blur-[2px]">
<button className="neo-flat w-16 h-16 rounded-full flex items-center justify-center text-slate-800 hover:scale-110 transition-transform">
<iconify-icon icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</button>
</div>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-3">
<h3 className="text-2xl font-semibold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">Lumina Stationeries</h3>
</div>
<p className="text-sm text-slate-500 font-light mb-5 line-clamp-2">
                            Premium visit cards and brochures integrated with custom dynamic QR codes for digital bridging and effortless contact sharing.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">InDesign</span>
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">Print Layout</span>
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">QR Tech</span>
</div>
</div>
</article>

<article className="neo-card p-6 group project-card cursor-pointer">
<div className="h-[300px] w-full rounded-2xl overflow-hidden mb-6 neo-pressed relative project-img-container">
<div className="absolute top-5 right-5 z-10">
<span className="neo-flat bg-[#eef0f4]/90 backdrop-blur-sm px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-600">Custom CMS</span>
</div>
<img alt="CMS Dashboard" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/10 backdrop-blur-[2px]">
<button className="neo-flat w-16 h-16 rounded-full flex items-center justify-center text-slate-800 hover:scale-110 transition-transform">
<iconify-icon icon="solar:arrow-right-up-linear" width="28"></iconify-icon>
</button>
</div>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-3">
<h3 className="text-2xl font-semibold text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">Nexus Portal</h3>
<iconify-icon className="text-emerald-500 mt-1" icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-slate-500 font-light mb-5 line-clamp-2">
                            A bespoke content management system built specifically for an online publisher to manage thousands of articles with ease.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">Vue.js</span>
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">Express</span>
<span className="text-xs text-slate-500 border border-slate-300 rounded-md px-3 py-1.5">PostgreSQL</span>
</div>
</div>
</article>
</div>
<div className="flex justify-center mt-12">
<button className="neo-icon-btn px-10 py-4 rounded-2xl text-slate-600 font-semibold text-sm tracking-tight gap-3 hover:text-indigo-600 group">
                    Explore All Work
                    <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:round-alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</section>

<section className="w-full mb-8" id="contact">
<div className="neo-pressed p-12 md:p-20 rounded-[2.5rem] flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute -left-10 top-10 w-48 h-48 rounded-full neo-flat opacity-50"></div>
<div className="absolute -right-16 bottom-10 w-40 h-40 rounded-full neo-flat opacity-50"></div>
<div className="w-20 h-20 rounded-full neo-flat flex items-center justify-center text-indigo-500 mb-8 z-10 hover:scale-110 transition-transform">
<iconify-icon icon="solar:wad-of-money-linear" width="40"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-800 mb-4 z-10">Ready to build something amazing?</h2>
<p className="text-base text-slate-500 font-light mb-10 max-w-lg z-10">Whether it's a full-stack web app, custom CMS, or a complete brand overhaul including print assets, we're here to help.</p>
<div className="flex flex-col sm:flex-row gap-4 z-10">
<a className="neo-flat px-10 py-5 rounded-xl text-slate-700 font-semibold tracking-tight hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 text-indigo-600 text-sm" href="mailto:hello@studio.design">
                        Get a Free Quote
                        <iconify-icon icon="solar:paperclip-linear" width="20"></iconify-icon>
</a>
<button className="neo-icon-btn px-10 py-5 rounded-xl text-slate-600 font-semibold tracking-tight flex items-center justify-center gap-3 text-sm">
                        Book Consultation
                        <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="w-full text-center text-slate-400 text-xs font-medium pb-10 pt-6 border-t border-slate-300/30">
            © 2023 Digital &amp; Print Studio. All rights reserved.
        </footer>
</main>

    </>
  );
}
