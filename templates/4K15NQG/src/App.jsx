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



    // Initialize Lucide icons
    lucide.createIcons();

    // Update range value display
    document.getElementById('intensity').addEventListener('input', function(e) {
      const value = e.target.value;
      const display = e.target.parentNode.querySelector('span');
      display.textContent = value + '%';
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
      


<main className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<article className="relative overflow-hidden lg:rounded-3xl md:col-span-2 lg:col-span-1 group bg-[url(https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=1080&amp;q=80)] bg-cover rounded-2xl shadow-xl backdrop-blur-lg">
<div className="relative z-10 flex flex-col h-full lg:p-8 min-h-[320px] lg:min-h-[400px] pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-white/90 ring-1 ring-white/30 bg-white/15 backdrop-blur-sm">Adobe After Effects</span>
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-white/90 ring-1 ring-white/30 bg-white/15 backdrop-blur-sm">Cinema 4D</span>
</div>
<button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
<svg className="lucide lucide-external-link w-4 h-4 text-white" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="mt-auto">
<h3 className="text-5xl font-normal text-white tracking-tighter font-bricolage mb-2">Nike Air Max Campaign</h3>
<blockquote className="mb-4">
<p className="text-sm leading-relaxed text-white/85">"Every pixel tells a story. We craft motion narratives that don't just catch eyes—they capture hearts and drive action."</p>
<footer className="mt-3 flex items-center gap-3">
<img alt="Maria Santos" className="w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1560918801-53fe5c710a80?w=1080&amp;q=80"/>
<div className="text-xs">
<div className="text-white/90 font-medium">Maria Santos</div>
<div className="text-white/60">Creative Director</div>
</div>
</footer>
</blockquote>
</div>
</div>
</article>

<article className="relative overflow-hidden lg:rounded-3xl flex flex-col min-h-[320px] lg:min-h-[400px] text-white bg-[url(https://images.unsplash.com/photo-1643780668909-580822430155?w=1080&amp;q=80)] bg-cover rounded-2xl shadow-xl">
<div className="relative z-10 flex flex-col grow lg:p-10 text-center pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
<svg className="lucide lucide-circle-dot lucide-palette w-[32px] h-[32px]" data-lucide="circle-dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
</div>
<h2 className="lg:text-3xl text-2xl font-normal text-white tracking-tight font-instrument-serif mb-2">Prism Studio</h2>
<p className="text-xs tracking-widest uppercase text-white/70 mb-1">Est. 2019 • Los Angeles</p>
<p className="text-sm text-white/80 mb-8 max-w-xs">Transforming brands through motion, color, and digital artistry</p>
<div className="flex gap-3">
<button className="ring-1 ring-white/40 hover:bg-white/10 transition-colors text-sm font-medium text-white/90 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 backdrop-blur-md">
<svg className="lucide lucide-play w-4 h-4 inline mr-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
            Watch Reel
          </button>
<button className="hover:bg-white/20 transition-colors text-sm font-medium text-white bg-white/15 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 backdrop-blur-md">
            Projects
          </button>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl bg-zinc-900 text-white flex flex-col min-h-[320px] lg:min-h-[400px]">
<div className="p-6 lg:p-8 grow">
<h3 className="flex items-center gap-2 uppercase text-xs font-normal text-zinc-400 tracking-widest mb-6">
<svg className="lucide lucide-lightbulb w-4 h-4" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg> Our Philosophy
        </h3>
<div className="space-y-4">
<p className="text-3xl font-normal text-white tracking-tighter">Motion isn't just movement.</p>
<p className="text-sm leading-relaxed text-zinc-300">It's the pulse between frames, the breath between cuts. We choreograph digital symphonies where every transition serves purpose, every effect tells truth.</p>
<div className="grid grid-cols-3 gap-4 pt-4">
<div className="text-center">
<div className="text-2xl font-bold text-emerald-400">127+</div>
<div className="text-xs text-zinc-400 uppercase tracking-wide">Projects</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-violet-400">24</div>
<div className="text-xs text-zinc-400 uppercase tracking-wide">Awards</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-pink-400">5yr</div>
<div className="text-xs text-zinc-400 uppercase tracking-wide">Legacy</div>
</div>
</div>
</div>
</div>
<div className="p-6 lg:p-8 border-t border-zinc-800 space-y-3">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-mail w-4 h-4 text-emerald-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="hover:text-emerald-400 transition-colors" href="mailto:hello@prismstudio.co">hello@prismstudio.co</a>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-phone w-4 h-4 text-violet-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+1 (555) 123-4567</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-globe w-4 h-4 text-pink-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<a className="hover:text-pink-400 transition-colors" href="#">www.prismstudio.co</a>
</div>
</div>
</article>
</main>

<section className="w-full max-w-3xl mt-16 lg:mt-24 px-4">
</section>


    </>
  );
}
