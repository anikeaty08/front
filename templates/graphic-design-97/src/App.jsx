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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-xl border-b border-zinc-200/50">
<div className="max-w-[88rem] mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter uppercase text-zinc-900" href="#">
                DSGN.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-900 hover:text-zinc-500 transition-colors duration-200" href="#work">Selected Work</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors duration-200" href="#studio">Studio</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors duration-200" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center text-xs font-medium tracking-wide uppercase bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#">
                    Available for Work
                </a>
<button className="md:hidden text-zinc-900 p-1">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-40 pb-20 md:pt-56 md:pb-32 px-6 max-w-[88rem] mx-auto">
<div className="max-w-4xl">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-zinc-900">
                Visual systems &amp; <br className="hidden md:block"/>
<span className="text-zinc-400">brand identities.</span>
</h1>
<p className="mt-8 text-lg md:text-xl text-zinc-500 font-light max-w-2xl leading-relaxed">
                An independent graphic design practice focused on creating enduring, systematic, and typography-driven solutions for modern brands.
            </p>
<div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="inline-flex items-center gap-2 border border-zinc-200 bg-white px-6 py-3 rounded-full text-sm font-medium hover:border-zinc-300 hover:bg-zinc-50 transition-all group" href="#work">
                    Explore Archive
                    <iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" height="18" icon="solar:arrow-right-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<div className="flex items-center gap-3 text-sm text-zinc-400 font-light">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Accepting new projects
                </div>
</div>
</div>
</header>

<section className="px-6 max-w-[88rem] mx-auto pb-32" id="work">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Selected Works</h2>
<span className="text-sm font-light text-zinc-400">2021 — 2024</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">

<article className="md:col-span-2 group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[16/9] md:aspect-[21/9]">
<img alt="Aura Skincare Packaging" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 group-hover:text-zinc-500 transition-colors">Aura Skincare</h3>
<p className="text-sm text-zinc-500 font-light mt-1">Brand Identity, Packaging Design</p>
</div>
<div className="flex items-center gap-2 border border-zinc-200 rounded-full px-3 py-1">
<span className="text-xs font-medium text-zinc-600">Case Study</span>
<iconify-icon className="text-zinc-400" height="14" icon="solar:arrow-up-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[4/5]">
<img alt="Kinetic Typography Poster" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="mt-6">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 group-hover:text-zinc-500 transition-colors">Kinetic Type Exhibition</h3>
<p className="text-sm text-zinc-500 font-light mt-1">Print, Poster Series</p>
</div>
</article>

<article className="group cursor-pointer md:mt-24">
<div className="relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[4/5]">
<img alt="Editorial Design Layout" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="mt-6">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 group-hover:text-zinc-500 transition-colors">Ode to Grid</h3>
<p className="text-sm text-zinc-500 font-light mt-1">Editorial, Book Design</p>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[4/5]">
<img alt="Digital Product Interface" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" src="https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="mt-6">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 group-hover:text-zinc-500 transition-colors">Nexus Financial</h3>
<p className="text-sm text-zinc-500 font-light mt-1">UI/UX, Design System</p>
</div>
</article>

<article className="group cursor-pointer md:mt-24">
<div className="relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[4/5]">
<img alt="Abstract 3D Render" className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-700 ease-out will-change-transform" src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="mt-6">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 group-hover:text-zinc-500 transition-colors">Spatial Explorations</h3>
<p className="text-sm text-zinc-500 font-light mt-1">3D, Motion Graphics</p>
</div>
</article>
</div>
<div className="mt-24 flex justify-center">
<button className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
                View Full Archive
            </button>
</div>
</section>

<section className="border-t border-zinc-200/60 bg-white" id="studio">
<div className="max-w-[88rem] mx-auto px-6 py-32">
<div className="flex flex-col md:flex-row gap-16 md:gap-32">
<div className="md:w-1/3">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Expertise</h2>
<p className="mt-6 text-zinc-500 font-light text-base leading-relaxed max-w-sm">
                        Bridging the gap between aesthetic form and strategic function. Delivering cohesive visual languages across all mediums.
                    </p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">

<div className="group">
<div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-900" height="20" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Brand Identity</h3>
<p className="mt-3 text-sm text-zinc-500 font-light leading-relaxed">Crafting distinct logos, robust typography systems, and comprehensive brand guidelines that define your narrative.</p>
</div>

<div className="group">
<div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-900" height="20" icon="solar:monitor-smartphone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Digital Platforms</h3>
<p className="mt-3 text-sm text-zinc-500 font-light leading-relaxed">Designing intuitive websites, applications, and digital touchpoints focused on clean UI and seamless user experience.</p>
</div>

<div className="group">
<div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-900" height="20" icon="solar:book-bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Print &amp; Editorial</h3>
<p className="mt-3 text-sm text-zinc-500 font-light leading-relaxed">Meticulous layouts for books, magazines, packaging, and posters designed for tactile engagement and readability.</p>
</div>

<div className="group">
<div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-900" height="20" icon="solar:play-stream-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Art Direction</h3>
<p className="mt-3 text-sm text-zinc-500 font-light leading-relaxed">Guiding visual output across photography, illustration, and motion to ensure alignment with the core brand strategy.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900" id="contact">
<div className="max-w-[88rem] mx-auto px-6 pt-24 pb-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-start mb-24">
<div>
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">Let's build <br/> something distinct.</h2>
<a className="inline-flex items-center gap-2 text-white text-lg font-medium hover:text-zinc-300 transition-colors group" href="mailto:hello@studio.com">
                        hello@dsgn-studio.com
                        <iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" height="20" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="md:justify-self-end flex flex-col gap-4 text-sm font-light">
<p className="text-zinc-300 font-medium mb-2">Social</p>
<a className="hover:text-white transition-colors flex items-center gap-2" href="#">
<iconify-icon height="18" icon="solar:camera-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Instagram
                    </a>
<a className="hover:text-white transition-colors flex items-center gap-2" href="#">
<iconify-icon height="18" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Behance
                    </a>
<a className="hover:text-white transition-colors flex items-center gap-2" href="#">
<iconify-icon height="18" icon="solar:link-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        LinkedIn
                    </a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-800/50 text-xs font-light">
<div className="flex items-center gap-2">
<span className="text-base font-medium tracking-tighter uppercase text-white">DSGN.</span>
<span>© 2024 Independent Studio</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
