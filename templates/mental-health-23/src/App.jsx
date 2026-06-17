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
      

<div className="relative w-full max-w-7xl mx-auto border-x min-h-screen flex flex-col border-white/5">

<div aria-hidden="true" className="absolute inset-0 pointer-events-none flex justify-between px-0 z-0">
<div className="h-full w-px hidden md:block md:ml-[33.333%] bg-white/5"></div>
<div className="h-full w-px hidden md:block md:mr-[33.333%] bg-white/5"></div>
</div>

<nav className="relative z-20 flex items-center justify-between px-6 py-5 md:px-10 border-b bg-[#0B1E16]/80 backdrop-blur-md sticky top-0 border-white/5">

<div className="flex items-center gap-3">

<div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4FF45]/20 group cursor-pointer hover:border-[#D4FF45]/50 transition-colors duration-300 bg-white">
<img alt="Beautiful Life Logo" className="w-full h-full object-cover p-1 opacity-95 group-hover:scale-105 transition-transform duration-500" src="https://cdn-icons-png.flaticon.com/512/9472/9472146.png"/>
</div>

<div className="flex flex-col justify-center">
<span className="font-heading font-medium text-sm md:text-base tracking-tight leading-tight text-white">Beautiful Life Caregiving</span>
<span className="font-serif italic text-xs text-[#D4FF45]/90 tracking-wide mt-0.5 font-light">Live Beautifully</span>
</div>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-base font-light transition-colors text-white/60 hover:text-white" href="#">Home</a>
<a className="text-base font-light transition-colors text-white/60 hover:text-white" href="#">About</a>
<a className="text-base font-light transition-colors text-white hover:text-white" href="#">Services</a>
<a className="text-base font-light transition-colors text-white/60 hover:text-white" href="#">Blogs</a>
<div className="flex items-center gap-1 cursor-pointer group transition-colors text-white/60 hover:text-white">
<span className="text-base font-light">Pages</span>
<iconify-icon className="group-hover:translate-y-0.5 transition-transform" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="flex items-center gap-2 hover:text-[#D4FF45] transition-colors text-white/80" href="#">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span className="text-base font-normal">Call Us</span>
</a>
<button className="bg-[#D4FF45] text-[#0B1E16] px-6 py-3 rounded-full text-base font-normal hover:bg-[#cbf72d] hover:shadow-[0_0_20px_rgba(212,255,69,0.3)] transition-all duration-300">
                    Let's Talk
                </button>
</div>

<button className="md:hidden text-white/80">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<header className="relative z-10 flex flex-col items-center justify-center py-20 md:py-32 px-4 text-center border-b border-white/5">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white/[0.02] mb-8 animate-fade-in-up border-white/10">
<iconify-icon className="text-[#D4FF45] text-lg" icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-heading font-normal tracking-widest uppercase text-white/90">Our Services</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-normal tracking-tight max-w-5xl leading-[1.05] mb-8 text-white">
                Different Ways To<br className="hidden md:block"/> Heal The Mind
            </h1>

<p className="text-lg md:text-xl max-w-2xl font-light leading-relaxed text-white/60">
                Discover personalized pathways to mental clarity. We combine modern science with compassionate care to help you find your balance.
            </p>
</header>

<section className="relative z-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 bg-green-700">

<article className="group relative flex flex-col p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-500">
<div className="flex justify-between items-start mb-8 md:mb-12">
<span className="font-mono text-xs text-[#D4FF45] bg-[#D4FF45]/10 px-2 py-1 rounded border border-[#D4FF45]/20">01</span>
<iconify-icon className="text-2xl group-hover:text-[#D4FF45] group-hover:rotate-45 transition-all duration-300 text-white/30" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-heading font-normal mb-3 tracking-tight text-white">Psychotherapy</h3>
<p className="text-lg font-light leading-relaxed mb-8 group-hover:text-white/70 transition-colors text-white/50">
                    Cognitive behavioral sessions tailored to reshape negative thought patterns into positive action.
                </p>
<div className="mt-auto relative rounded-xl overflow-hidden aspect-[4/3] bg-white/5">
<img alt="Psychotherapy" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</article>

<article className="group relative flex flex-col p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-500 border-l-0 border-white/5">
<div className="flex justify-between items-start mb-8 md:mb-12">
<span className="font-mono text-xs text-[#D4FF45] bg-[#D4FF45]/10 px-2 py-1 rounded border border-[#D4FF45]/20">02</span>
<iconify-icon className="text-2xl group-hover:text-[#D4FF45] group-hover:rotate-45 transition-all duration-300 text-white/30" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-heading font-normal mb-3 tracking-tight text-white">Couples Therapy</h3>
<p className="text-lg font-light leading-relaxed mb-8 group-hover:text-white/70 transition-colors text-white/50">
                    Rebuild trust and improve communication dynamics with professional relationship guidance.
                </p>
<div className="mt-auto relative rounded-xl overflow-hidden aspect-[4/3] bg-white/5">
<img alt="Couples Therapy" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</article>

<article className="group relative flex flex-col p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-500 border-l-0 border-white/5">
<div className="flex justify-between items-start mb-8 md:mb-12">
<span className="font-mono text-xs text-[#D4FF45] bg-[#D4FF45]/10 px-2 py-1 rounded border border-[#D4FF45]/20">03</span>
<iconify-icon className="text-2xl group-hover:text-[#D4FF45] group-hover:rotate-45 transition-all duration-300 text-white/30" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-heading font-normal mb-3 tracking-tight text-white">Group Support</h3>
<p className="text-lg font-light leading-relaxed mb-8 group-hover:text-white/70 transition-colors text-white/50">
                    Shared experiences in a safe environment to foster community healing and resilience.
                </p>
<div className="mt-auto relative rounded-xl overflow-hidden aspect-[4/3] bg-white/5">
<img alt="Group Support" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
</div>
</article>
</section>

<footer className="relative z-10 border-t py-16 px-6 border-white/5 bg-green-700">
<p className="text-center text-xs mb-10 font-mono uppercase tracking-[0.2em] text-white/30">Trusted by Industry Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="hover:text-[#D4FF45] transition-colors text-white" height="36" icon="simple-icons:betterhelp" width="96"></iconify-icon>
<iconify-icon className="hover:text-[#D4FF45] transition-colors text-white" height="36" icon="simple-icons:headspace" width="96"></iconify-icon>
<iconify-icon className="hover:text-[#D4FF45] transition-colors text-white" height="36" icon="simple-icons:calm" width="96"></iconify-icon>
<iconify-icon className="hover:text-[#D4FF45] transition-colors text-white" height="36" icon="simple-icons:talkspace" width="96"></iconify-icon>
<iconify-icon className="hover:text-[#D4FF45] transition-colors text-white" height="36" icon="simple-icons:psychologytoday" width="96"></iconify-icon>
</div>
</footer>
</div>

    </>
  );
}
