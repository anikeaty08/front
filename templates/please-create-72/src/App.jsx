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
      

<nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter" href="#">CRTV.</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#work">Work</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#studio">Studio</a>
</div>
<button className="bg-black text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Let's talk
            </button>
</div>
</nav>
<main>

<section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
<span className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-6">Digital Creative Agency</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl">
                Crafting digital experiences that define tomorrow.
            </h1>
<p className="mt-6 text-lg text-gray-500 max-w-xl">
                We blend strategic thinking with minimalist design to create brand identities, digital products, and meaningful e-commerce experiences.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<button className="bg-black text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    View our work
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="bg-white text-black border border-gray-200 text-sm font-medium px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors">
                    Our Services
                </button>
</div>
</section>

<section className="border-y border-gray-100 py-10 mt-10">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24 text-gray-300">
<span className="text-xl font-semibold tracking-tighter hover:text-gray-900 transition-colors cursor-default">ACME</span>
<span className="text-xl font-semibold tracking-tighter hover:text-gray-900 transition-colors cursor-default">GLOBEX</span>
<span className="text-xl font-semibold tracking-tighter hover:text-gray-900 transition-colors cursor-default">SOYUZ</span>
<span className="text-xl font-semibold tracking-tighter hover:text-gray-900 transition-colors cursor-default">INNTECH</span>
<span className="text-xl font-semibold tracking-tighter hover:text-gray-900 transition-colors cursor-default">VANGUARD</span>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="services">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Capabilities</h2>
<p className="mt-4 text-base text-gray-500 max-w-md">Comprehensive solutions tailored to elevate your brand's digital presence and accelerate growth.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-100 mb-8 group-hover:scale-105 transition-transform">
<iconify-icon className="text-black" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Brand Identity</h3>
<p className="text-sm text-gray-500 leading-relaxed">We forge strong visual identities that communicate your core values and resonate deeply with your target audience.</p>
</div>

<div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-100 mb-8 group-hover:scale-105 transition-transform">
<iconify-icon className="text-black" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Digital Products</h3>
<p className="text-sm text-gray-500 leading-relaxed">Designing intuitive, user-centric interfaces for web and mobile applications that drive engagement and retention.</p>
</div>

<div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-100 mb-8 group-hover:scale-105 transition-transform">
<iconify-icon className="text-black" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Growth &amp; Strategy</h3>
<p className="text-sm text-gray-500 leading-relaxed">Data-driven marketing strategies and technical optimizations to scale your digital reach and convert visitors into loyal customers.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100" id="work">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">Selected Works</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-gray-100 rounded-3xl mb-6 overflow-hidden relative border border-gray-100">
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
<button className="bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all shadow-sm">View Case Study</button>
</div>
<img alt="Fintech App Interface" className="w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start px-2">
<div>
<h3 className="text-xl font-semibold tracking-tight">Fintech Platform</h3>
<p className="text-sm text-gray-500 mt-1">UX/UI Design &amp; Development</p>
</div>
<span className="text-xs font-medium border border-gray-200 text-gray-500 rounded-full px-3 py-1">2023</span>
</div>
</div>

<div className="group cursor-pointer md:mt-20">
<div className="w-full aspect-[4/3] bg-gray-100 rounded-3xl mb-6 overflow-hidden relative border border-gray-100">
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
<button className="bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all shadow-sm">View Case Study</button>
</div>
<img alt="E-Commerce Interface" className="w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start px-2">
<div>
<h3 className="text-xl font-semibold tracking-tight">Eco Commerce</h3>
<p className="text-sm text-gray-500 mt-1">Rebranding &amp; Shopify</p>
</div>
<span className="text-xs font-medium border border-gray-200 text-gray-500 rounded-full px-3 py-1">2023</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black text-white text-center rounded-[2.5rem] mx-4 md:mx-10 my-10 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-gradient-to-b from-white/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Have a project in mind?</h2>
<p className="text-lg text-gray-400 mb-10">Let's collaborate to build something extraordinary together. Our team is ready to listen.</p>
<button className="bg-white text-black text-sm font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
                    Start a conversation
                    <iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
</div>
</section>
</main>

<footer className="py-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter">CRTV.</span>
</div>
<div className="flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#">Twitter</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#">Instagram</a>
<a className="text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#">LinkedIn</a>
</div>
<p className="text-xs font-medium text-gray-400">© 2024 Creative Agency. All rights reserved.</p>
</footer>

    </>
  );
}
