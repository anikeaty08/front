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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.querySelectorAll('.animate-reveal').forEach((el) => {
el.style.animationPlayState = 'running';
});
}
});
}, { threshold: 0.1 });
document.querySelectorAll("section, footer").forEach((el) => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:buildings-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-tight text-zinc-900 font-display">STRUKTUR.</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Projects</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Studio</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">News</a>
</div>
<button className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-all flex items-center gap-2">
            Inquire
            <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</nav>

<section className="min-h-screen flex items-center pt-24 bg-zinc-50 border-b border-zinc-200">
<div className="container mx-auto px-8 relative">
<div className="grid lg:grid-cols-12 gap-12 items-end pb-12">
<div className="lg:col-span-8 animate-reveal">
<span className="inline-block py-1 px-3 border border-zinc-300 rounded-full text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-6 bg-white">
                        01 // EST. 2024
                    </span>
<h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-light tracking-tighter text-zinc-900 leading-[0.9] mb-8">
                        Form <span className="italic font-serif text-zinc-400">follows</span><br/>
                        Function.
                    </h1>
</div>
<div className="lg:col-span-4 lg:mb-4 animate-reveal delay-200">
<p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-sm ml-auto">
                        We design spaces that elevate the human experience through reduction, clarity, and material honesty.
                    </p>
<div className="mt-8 flex gap-4 justify-end">
<button className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all hover:border-zinc-900">
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="w-full aspect-[21/9] bg-zinc-200 overflow-hidden relative animate-reveal delay-300">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 flex items-center gap-3">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono uppercase">Zurich, CH — H4 Residence</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-emerald-950 text-emerald-50 border-b border-white/5">
<div className="container mx-auto px-8">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="sticky top-32 animate-reveal">
<span className="text-emerald-400 font-mono text-xs mb-4 block">02 // PHILOSOPHY</span>
<h2 className="text-5xl md:text-6xl font-display font-medium tracking-tight leading-none mb-8">
                        Biophilic<br/>Integration
                    </h2>
<div className="h-px w-24 bg-emerald-800 mb-8"></div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded border border-emerald-800 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div className="w-12 h-12 rounded border border-emerald-800 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:sun-2-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-12 animate-reveal delay-100">
<p className="text-xl text-emerald-200/80 font-light leading-relaxed">
                        Architecture should not simply sit upon the land, but emerge from it. Our approach merges the built environment with the natural world, using sustainable materials and passive design principles to create structures that breathe.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 bg-emerald-900/30 border border-emerald-800/50 hover:bg-emerald-900/50 transition-colors">
<span className="text-3xl font-display block mb-2">85%</span>
<span className="text-xs text-emerald-400 font-mono uppercase">Carbon Reduction</span>
</div>
<div className="p-6 bg-emerald-900/30 border border-emerald-800/50 hover:bg-emerald-900/50 transition-colors">
<span className="text-3xl font-display block mb-2">100+</span>
<span className="text-xs text-emerald-400 font-mono uppercase">Awards Won</span>
</div>
</div>
<img className="w-full aspect-video object-cover grayscale opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1518005052357-e98475018297?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-100">
<div className="container mx-auto px-8">
<div className="flex justify-between items-end mb-16 animate-reveal">
<div>
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">03 // Portfolio</span>
<h2 className="text-4xl font-display font-medium text-zinc-900">Selected Works</h2>
</div>
<a className="text-sm font-medium border-b border-zinc-900 pb-0.5" href="#">View Archive</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 animate-reveal delay-200 bg-zinc-100 border border-zinc-100">

<div className="group relative aspect-[4/5] bg-white overflow-hidden cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-md border-t border-zinc-100">
<h3 className="text-lg font-medium text-zinc-900">The Nordic Villa</h3>
<p className="text-xs text-zinc-500 font-mono mt-1">Oslo, Norway</p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-white overflow-hidden cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-md border-t border-zinc-100">
<h3 className="text-lg font-medium text-zinc-900">Concrete Canvas</h3>
<p className="text-xs text-zinc-500 font-mono mt-1">Berlin, Germany</p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-white overflow-hidden cursor-pointer">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-md border-t border-zinc-100">
<h3 className="text-lg font-medium text-zinc-900">Skyline Loft</h3>
<p className="text-xs text-zinc-500 font-mono mt-1">New York, USA</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-b border-zinc-200">
<div className="container mx-auto px-8">
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-12 animate-reveal">04 // Methodology</span>
<div className="grid md:grid-cols-3 gap-8">

<div className="border-l border-zinc-300 pl-6 py-2 animate-reveal delay-100">
<span className="text-4xl font-display text-zinc-200 font-bold mb-4 block">01</span>
<h3 className="text-xl font-medium text-zinc-900 mb-3">Conceptualization</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        We begin with deep contextual analysis, understanding the genius loci and client aspirations.
                    </p>
</div>

<div className="border-l border-zinc-300 pl-6 py-2 animate-reveal delay-200">
<span className="text-4xl font-display text-zinc-200 font-bold mb-4 block">02</span>
<h3 className="text-xl font-medium text-zinc-900 mb-3">Design Development</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Iterative modeling and material sampling. We refine the form until it balances aesthetic and utility.
                    </p>
</div>

<div className="border-l border-zinc-300 pl-6 py-2 animate-reveal delay-300">
<span className="text-4xl font-display text-zinc-200 font-bold mb-4 block">03</span>
<h3 className="text-xl font-medium text-zinc-900 mb-3">Realization</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Precise execution. We oversee construction to ensure the vision remains compromised.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E5E2DC] text-stone-900">
<div className="container mx-auto px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 relative animate-reveal">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-stone-400"></div>
<img className="w-full grayscale contrast-125" src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-stone-400"></div>
</div>
<div className="order-1 lg:order-2 animate-reveal delay-100">
<span className="text-xs font-mono text-stone-500 uppercase tracking-widest block mb-4">05 // Tactility</span>
<h2 className="text-4xl font-display font-medium mb-6">Material Honesty</h2>
<p className="text-stone-600 leading-relaxed mb-8">
                        We believe in the raw beauty of materials. Stone, wood, and concrete are left exposed, celebrating their structural integrity and natural imperfections.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 border-b border-stone-300 pb-2">
<iconify-icon className="text-stone-800" icon="solar:ruler-pen-linear"></iconify-icon>
<span className="text-sm font-medium">Locally Sourced Timber</span>
</li>
<li className="flex items-center gap-3 border-b border-stone-300 pb-2">
<iconify-icon className="text-stone-800" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-sm font-medium">Fair-faced Concrete</span>
</li>
<li className="flex items-center gap-3 border-b border-stone-300 pb-2">
<iconify-icon className="text-stone-800" icon="solar:ticket-sale-linear"></iconify-icon>
<span className="text-sm font-medium">Recycled Steel</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white">
<div className="container mx-auto px-8">
<div className="flex justify-between items-center mb-16 animate-reveal">
<h2 className="text-3xl font-display">Recognition</h2>
<span className="text-xs font-mono text-zinc-500">06 // AWARDS</span>
</div>
<div className="border-t border-zinc-800 animate-reveal delay-100">

<div className="group py-6 flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="text-zinc-500 font-mono text-sm">2023</span>
<h3 className="text-xl font-light">Pritzker Consideration</h3>
</div>
<span className="text-sm text-zinc-400 mt-2 md:mt-0">Architecture Review</span>
</div>

<div className="group py-6 flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="text-zinc-500 font-mono text-sm">2022</span>
<h3 className="text-xl font-light">Best Residential Project</h3>
</div>
<span className="text-sm text-zinc-400 mt-2 md:mt-0">Deezen Awards</span>
</div>

<div className="group py-6 flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-4">
<span className="text-zinc-500 font-mono text-sm">2021</span>
<h3 className="text-xl font-light">Sustainability Gold Medal</h3>
</div>
<span className="text-sm text-zinc-400 mt-2 md:mt-0">World Arch Festival</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-orange-50/50 border-t border-b border-orange-100/50">
<div className="container mx-auto px-8">
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-12 animate-reveal">07 // Journal</span>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-reveal delay-100">

<article className="flex flex-col gap-4 group">
<div className="aspect-[16/9] bg-zinc-200 overflow-hidden w-full">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1505567745926-ba89000d255a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-[10px] font-mono text-zinc-500 uppercase">Oct 12, 2023</span>
<h3 className="text-lg font-medium text-zinc-900 mt-1 group-hover:underline decoration-1 underline-offset-4">The Future of Urban Living</h3>
</div>
</article>

<article className="flex flex-col gap-4 group">
<div className="aspect-[16/9] bg-zinc-200 overflow-hidden w-full">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1536412597336-d76b16c4f34d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-[10px] font-mono text-zinc-500 uppercase">Sep 08, 2023</span>
<h3 className="text-lg font-medium text-zinc-900 mt-1 group-hover:underline decoration-1 underline-offset-4">Minimalism in the Digital Age</h3>
</div>
</article>

<article className="flex flex-col gap-4 group">
<div className="aspect-[16/9] bg-zinc-200 overflow-hidden w-full">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1502005229766-939760a58531?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-[10px] font-mono text-zinc-500 uppercase">Aug 22, 2023</span>
<h3 className="text-lg font-medium text-zinc-900 mt-1 group-hover:underline decoration-1 underline-offset-4">Interview with Lead Architect</h3>
</div>
</article>
</div>
</div>
</section>

<footer className="bg-black text-white pt-24 pb-8">
<div className="container mx-auto px-8">
<div className="grid lg:grid-cols-4 gap-12 mb-24 animate-reveal">
<div className="lg:col-span-2">
<span className="text-2xl font-display font-bold mb-6 block">STRUKTUR.</span>
<h2 className="text-4xl md:text-5xl font-light leading-tight text-zinc-300 mb-8">
                        Let's build the<br/>impossible.
                    </h2>
<a className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-lg" href="mailto:hello@struktur.com">
                        Start a project
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-zinc-500">Office</h4>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Bahnhofstrasse 12<br/>
                        8001 Zurich<br/>
                        Switzerland
                    </p>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-zinc-500">Social</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Twitter</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-zinc-600">
<p>© 2024 Struktur Architects. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<span className="font-mono">08 // END</span>
<span>Design by @niick</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
