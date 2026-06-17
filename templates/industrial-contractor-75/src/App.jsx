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
      

<header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="text-2xl font-semibold tracking-tighter text-white">
                SON<span className="text-amber-500">.</span>
</div>
<nav className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-400">
<a className="hover:text-amber-500 transition-colors duration-300" href="#">Selected Works</a>
<a className="hover:text-amber-500 transition-colors duration-300" href="#">Studio Expertise</a>
<a className="hover:text-amber-500 transition-colors duration-300" href="#">Journal</a>
</nav>
<a className="hidden md:inline-flex text-sm font-medium border border-neutral-800 bg-neutral-900/50 hover:bg-amber-500 hover:border-amber-500 hover:text-neutral-950 px-6 py-2.5 rounded-full transition-all duration-500 items-center gap-2 group" href="#">
                Inquire Now
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="pt-28 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto mt-4">
<div className="relative w-full h-[80vh] min-h-[600px] rounded-3xl overflow-hidden flex flex-col items-center justify-center border border-white/10 bg-neutral-900 shadow-2xl group">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[10s] ease-out group-hover:scale-105" loop="" muted="" playsinline="">
<source src="https://www.pexels.com/download/video/6008083/" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-neutral-950/20 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950/80"></div>

<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-xs font-medium text-amber-500 mb-8 tracking-wide uppercase shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    Redefining Spaces
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6 text-white drop-shadow-md">
                    Crafting Modern <br className="hidden md:block"/>
<span className="text-neutral-400">Industrial Excellence.</span>
</h1>
<p className="text-base text-neutral-200 max-w-lg leading-relaxed mb-10 drop-shadow">
                    We fuse raw architectural aesthetics with uncompromising engineering precision. Delivering premium construction tailored for visionary living.
                </p>
<div className="flex flex-wrap justify-center gap-4 items-center w-full">
<a className="inline-flex text-sm font-medium bg-white text-neutral-950 hover:bg-amber-500 hover:text-neutral-950 px-8 py-3.5 rounded-full transition-all duration-300 items-center gap-2 shadow-lg hover:shadow-amber-500/20 group/btn" href="#">
                        Inquire Now
                        <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex text-sm font-medium border border-white/20 bg-black/30 backdrop-blur-md text-white hover:bg-white/10 px-8 py-3.5 rounded-full transition-all duration-300 items-center gap-2 shadow-lg" href="#">
<iconify-icon icon="solar:play-linear" width="18"></iconify-icon>
                        View Showreel
                    </a>
</div>
</div>

<div className="absolute bottom-8 left-8 right-8 justify-between items-end z-10 hidden md:flex">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-amber-500 text-xs font-medium tracking-widest uppercase mb-0.5">Active Project</p>
<p className="text-white text-sm font-medium tracking-tight">Jakarta Selatan — 2024</p>
</div>
</div>
<button className="w-10 h-10 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-all duration-300 text-white group/audio">
<iconify-icon className="group-hover/audio:scale-110 transition-transform" icon="solar:volume-cross-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="lg:px-8 border-y bg-neutral-900/20 border-white/5 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-3">Curated Portfolio</h2>
<p className="text-sm text-neutral-400">A selection of our finest structural achievements.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-amber-500 transition-colors group" href="#">
                    Explore Directory 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px] gap-x-6 gap-y-6">

<div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group bg-neutral-900 border border-white/5">
<img alt="Project" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent p-8 flex flex-col justify-end">
<span className="text-xs font-medium text-neutral-400 mb-3 block uppercase tracking-wider">Commercial</span>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2 group-hover:text-amber-500 transition-colors duration-500">Nexus Corporate Hub</h3>
<p className="text-sm text-neutral-400 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0">Integrating raw concrete pillars with expansive glass facades to create a modern workspace.</p>
</div>
</div>

<div className="rounded-2xl overflow-hidden relative group bg-neutral-900/50 border border-white/5 hover:border-amber-500/30 transition-colors duration-500 flex flex-col justify-between p-8">
<div className="w-12 h-12 rounded-full bg-neutral-800/50 flex items-center justify-center text-amber-500 mb-6">
<iconify-icon icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Engineering Purity</h3>
<p className="text-sm text-neutral-400 leading-relaxed">We expose structural elements intentionally, turning functional necessities into architectural statements.</p>
</div>
</div>

<div className="rounded-2xl overflow-hidden relative group bg-neutral-900 border border-white/5">
<img alt="Detail" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent p-8 flex flex-col justify-end">
<h3 className="text-xl font-semibold tracking-tight text-white">Raw Materials</h3>
<p className="text-sm text-neutral-400 mt-2">Steel, Concrete, Timber.</p>
</div>
</div>

<div className="rounded-2xl overflow-hidden relative group bg-neutral-900 border border-white/5">
<img alt="Project" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-90 transition-all duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 to-transparent p-8 flex flex-col justify-end">
<span className="text-xs font-medium text-amber-500 mb-2 block uppercase tracking-wider">Residential</span>
<h3 className="text-xl font-semibold tracking-tight text-white">Concrete Villa</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-16">
<div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 mb-6">
<iconify-icon className="" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Studio Journal</h2>
<p className="text-sm text-neutral-400 max-w-md">Glimpses from our active sites, architectural details, and daily inspirations curating the industrial aesthetic.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="aspect-square relative group overflow-hidden rounded-xl bg-neutral-900 block border border-white/5" href="#">
<img alt="Insta Post" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<iconify-icon className="text-white" icon="solar:maximize-square-linear" width="28"></iconify-icon>
</div>
</a>
<a className="aspect-square relative group overflow-hidden rounded-xl bg-neutral-900 block border border-white/5" href="#">
<img alt="Insta Post" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<iconify-icon className="text-white" icon="solar:maximize-square-linear" width="28"></iconify-icon>
</div>
</a>
<a className="aspect-square relative group overflow-hidden rounded-xl bg-neutral-900 block border border-white/5" href="#">
<img alt="Insta Post" className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:scale-110 group-hover:grayscale-0 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<iconify-icon className="text-white" icon="solar:maximize-square-linear" width="28"></iconify-icon>
</div>
</a>
<a className="aspect-square relative group overflow-hidden rounded-xl bg-neutral-900 block border border-white/5" href="#">
<img alt="Insta Post" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
<iconify-icon className="text-white" icon="solar:maximize-square-linear" width="28"></iconify-icon>
</div>
</a>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-800 text-sm font-medium text-white hover:border-amber-500 hover:text-amber-500 transition-all duration-300 group" href="#">
                Follow @soncontractor 
                <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
</section>

<footer className="border-t border-white/10 bg-neutral-950 pt-24 pb-10 px-6 lg:px-8 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 relative z-10">
<div className="md:col-span-5">
<div className="text-4xl font-semibold tracking-tighter text-white mb-6">
                    SON<span className="text-amber-500">.</span>
</div>
<p className="text-sm text-neutral-400 max-w-sm leading-relaxed mb-8">
                    Elevating environments through bold modern-industrial design and uncompromising construction standards. Building the foundations of tomorrow.
                </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-colors" href="#">
<iconify-icon icon="solar:link-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-2 md:col-start-8">
<h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-100 mb-6">Inquiries</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-medium">
<li><a className="hover:text-amber-500 transition-colors" href="#">hello@soncontractor.com</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">+62 812 3456 7890</a></li>
</ul>
</div>
<div className="md:col-span-3">
<h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-100 mb-6">Headquarters</h4>
<p className="text-sm text-neutral-400 font-medium leading-relaxed">
                    District 8, SCBD Lot 28<br/>
                    Senayan, Kebayoran Baru<br/>
                    Jakarta Selatan, 12190
                 </p>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-medium border-t border-white/5 pt-8 relative z-10">
<p>© 2024 SON Contractor. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

<a className="fixed bottom-8 right-8 w-14 h-14 bg-neutral-900/80 backdrop-blur-md border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 hover:text-neutral-950 transition-all duration-300 shadow-2xl shadow-black z-50 group hover:scale-110" href="https://wa.me/1234567890" rel="noopener noreferrer" target="_blank">
<iconify-icon className="group-hover:animate-pulse" icon="solar:phone-calling-linear" width="26"></iconify-icon>
</a>

    </>
  );
}
