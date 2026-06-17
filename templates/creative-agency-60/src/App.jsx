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
      

<nav className="fixed top-0 right-0 p-6 md:p-10 flex items-center gap-3 z-50 mix-blend-difference text-white md:mix-blend-normal md:text-neutral-900">
<a className="group flex items-center gap-1 border border-current md:border-neutral-300 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 bg-transparent md:bg-white/50 backdrop-blur-md" href="#">
            CONTACT <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="w-10 h-10 rounded-full border border-current md:border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 bg-transparent md:bg-white/50 backdrop-blur-md">
<iconify-icon icon="solar:hamburger-menu-linear" width="18"></iconify-icon>
</button>
</nav>

<header className="flex flex-col items-center justify-center relative w-full h-screen overflow-hidden px-4">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
<div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-blue-200 via-indigo-100 to-purple-200 rounded-full blur-[80px] opacity-70 animate-float mix-blend-multiply"></div>
<div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-bl from-white via-cyan-50 to-blue-200 rounded-full blur-[60px] opacity-60 translate-x-12 translate-y-12 animate-float" style={{animationDelay: '-5s'}}></div>
</div>
<div className="relative z-10 w-full max-w-[1600px] mx-auto text-center flex flex-col items-center">
<h1 className="font-display italic font-black text-[15vw] leading-[0.8] tracking-tight text-neutral-900 select-none flex items-start justify-center">
                YourCreative
                <span className="font-sans not-italic text-lg md:text-3xl lg:text-4xl font-medium tracking-normal mt-4 md:mt-8 lg:mt-12 text-neutral-400">®</span>
</h1>
<div className="mt-12 md:mt-16 max-w-2xl px-6">
<p className="text-lg md:text-2xl text-neutral-800 font-normal leading-normal text-center">
                    An independent creative agency based in Melbourne &amp; Sydney. We solve the complicated.
                </p>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
<span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
<iconify-icon icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</header>

<section className="w-full border-y border-neutral-200 bg-white py-6 overflow-hidden">
<div className="whitespace-nowrap flex animate-marquee">
<span className="text-4xl md:text-6xl font-display italic font-semibold text-neutral-300 px-8">Strategy &amp; Branding</span>
<span className="text-4xl md:text-6xl font-display italic font-semibold text-neutral-900 px-8">Digital Design</span>
<span className="text-4xl md:text-6xl font-display italic font-semibold text-neutral-300 px-8">Development</span>
<span className="text-4xl md:text-6xl font-display italic font-semibold text-neutral-300 px-8">Motion Direction</span>
<span className="text-4xl md:text-6xl font-display italic font-semibold text-neutral-900 px-8">Strategy &amp; Branding</span>
<span className="text-4xl md:text-6xl font-display italic font-semibold text-neutral-300 px-8">Digital Design</span>
<span className="text-4xl md:text-6xl font-display italic font-semibold text-neutral-300 px-8">Development</span>
<span className="text-4xl md:text-6xl font-display italic font-semibold text-neutral-300 px-8">Motion Direction</span>
</div>
</section>

<section className="w-full py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<span className="inline-block w-3 h-3 bg-neutral-900 rounded-full mb-4"></span>
<h3 className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">Our Philosophy</h3>
</div>
<div className="lg:col-span-8">
<p className="text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-neutral-900">
                    We create distinct brands and digital experiences that connect with culture. We believe in the power of <span className="font-display italic text-neutral-500">storytelling</span> combined with precise engineering.
                </p>
<div className="mt-12 flex items-center gap-4">
<a className="inline-flex items-center gap-2 text-sm font-semibold border-b border-neutral-300 pb-1 hover:border-neutral-900 transition-colors" href="#">
                        READ MORE ABOUT US <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="w-full px-4 md:px-10 pb-32">
<div className="flex justify-between items-end mb-12 px-2">
<h2 className="text-4xl md:text-7xl font-display italic font-bold text-neutral-900">Selected Works</h2>
<span className="hidden md:block text-xs font-bold tracking-widest text-neutral-500 uppercase">(2023 — 2024)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

<a className="group relative block w-full aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl" href="#">
<img alt="Project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 hover-reveal-img" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 mix-blend-difference text-white opacity-100 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<h3 className="text-3xl md:text-4xl font-display italic font-semibold">Aesop Skin</h3>
<p className="text-sm font-sans tracking-wide mt-1">E-COMMERCE / ART DIRECTION</p>
</div>
<div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</a>

<a className="group relative block w-full aspect-[4/3] md:mt-24 overflow-hidden rounded-2xl md:rounded-3xl" href="#">
<img alt="Project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 hover-reveal-img" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 mix-blend-difference text-white opacity-100 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<h3 className="text-3xl md:text-4xl font-display italic font-semibold">Lumina</h3>
<p className="text-sm font-sans tracking-wide mt-1">BRAND IDENTITY / STRATEGY</p>
</div>
<div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</a>

<a className="group relative block w-full aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl" href="#">
<img alt="Project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 hover-reveal-img" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 mix-blend-difference text-white opacity-100 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<h3 className="text-3xl md:text-4xl font-display italic font-semibold">Future Spaces</h3>
<p className="text-sm font-sans tracking-wide mt-1">WEB DESIGN / DEVELOPMENT</p>
</div>
<div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</a>

<a className="group relative block w-full aspect-[4/3] md:mt-24 overflow-hidden rounded-2xl md:rounded-3xl bg-neutral-100" href="#">
<div className="w-full h-full flex items-center justify-center bg-neutral-200 group-hover:bg-neutral-800 transition-colors duration-500">
<span className="text-neutral-400 group-hover:text-white font-display italic text-4xl transition-colors">View Archive (34)</span>
</div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 mix-blend-difference text-white opacity-0 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<p className="text-sm font-sans tracking-wide mt-1">EXPLORE ALL WORK</p>
</div>
<div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
</div>
</section>

<section className="w-full py-24 bg-white border-t border-neutral-200">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="mb-16">
<h2 className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-4">Capabilities</h2>
<p className="text-3xl md:text-4xl font-light tracking-tight text-neutral-900 max-w-xl">Comprehensive design solutions for ambitious brands.</p>
</div>
<div className="flex flex-col">

<div className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-t border-neutral-200 hover:border-neutral-900 transition-colors cursor-pointer">
<div className="flex items-baseline gap-6">
<span className="font-display italic text-neutral-400 text-xl group-hover:text-neutral-900 transition-colors">01</span>
<h3 className="text-3xl md:text-5xl font-display font-medium text-neutral-900">Brand Identity</h3>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-12 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="text-sm tracking-wide hidden md:block">Strategy, Naming, Visual Systems</span>
<iconify-icon className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-t border-neutral-200 hover:border-neutral-900 transition-colors cursor-pointer">
<div className="flex items-baseline gap-6">
<span className="font-display italic text-neutral-400 text-xl group-hover:text-neutral-900 transition-colors">02</span>
<h3 className="text-3xl md:text-5xl font-display font-medium text-neutral-900">Digital Design</h3>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-12 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="text-sm tracking-wide hidden md:block">UI/UX, Websites, Applications</span>
<iconify-icon className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-t border-b border-neutral-200 hover:border-neutral-900 transition-colors cursor-pointer">
<div className="flex items-baseline gap-6">
<span className="font-display italic text-neutral-400 text-xl group-hover:text-neutral-900 transition-colors">03</span>
<h3 className="text-3xl md:text-5xl font-display font-medium text-neutral-900">Development</h3>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-12 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="text-sm tracking-wide hidden md:block">Frontend, Creative Coding, CMS</span>
<iconify-icon className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full bg-[#111] text-[#FAFAFA] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden rounded-t-[40px] md:rounded-t-[60px] -mt-10 z-20">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[1600px] mx-auto relative z-10 flex flex-col min-h-[60vh] justify-between">

<div>
<p className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-8">Have an idea?</p>
<a className="group block max-w-4xl" href="#">
<h2 className="font-display italic font-medium text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight group-hover:text-blue-200 transition-colors duration-500">
                        Let's start a <br/>
<span className="pl-12 md:pl-24">project together</span>
</h2>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-24 border-t border-neutral-800 pt-12">
<div className="md:col-span-2">
<h4 className="font-display italic text-2xl mb-4">YourCreative</h4>
<p className="text-neutral-400 max-w-xs text-sm leading-relaxed">
                        An award-winning agency focused on branding, design, and technology for the modern world.
                    </p>
</div>
<div>
<h5 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-6">Sitemap</h5>
<ul className="space-y-3 text-sm font-medium text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#">Work</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Agency</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-6">Socials</h5>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300" href="#">
<iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon>
</a> 
<a className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end md:items-center mt-12 text-xs text-neutral-600 font-medium tracking-wide">
<span>© 2024 YourCreative. All rights reserved.</span>
<span className="mt-2 md:mt-0">Made with ❤️ in Melbourne.</span>
</div>
</div>
</footer>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[90%] md:w-auto">
<div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-neutral-900/50 rounded-full p-1.5 flex items-center justify-between md:justify-center md:gap-2">
<a className="px-3 md:px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 uppercase" href="#">Projects</a>
<a className="px-3 md:px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 uppercase" href="#">Services</a>
<a className="px-3 md:px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 uppercase" href="#">Studio</a>
<a className="px-3 md:px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 uppercase hidden md:block" href="#">Sectors</a>
<a className="px-3 md:px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 uppercase" href="#">Insights</a>
</div>
</div>

    </>
  );
}
