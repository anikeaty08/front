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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase text-white" href="#">Jery.</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Work</a>
<a className="text-sm font-medium text-white" href="#">About</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Services</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium border border-zinc-800 px-4 py-2 rounded-full hover:border-zinc-700 hover:bg-zinc-900 transition-all text-white" href="#">
<span>Get in touch</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="max-w-4xl">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] mb-8 text-white">
                    We explore <br/>
<span className="text-zinc-600">Beyond Design.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
                    JERY is a strategic design agency born from optimism. We build user-centric products that bridge the gap between aesthetics and function.
                </p>
</div>
</div>
</header>

<div className="w-full px-6 mb-24 md:mb-32">
<div className="max-w-7xl mx-auto h-64 md:h-96 w-full bg-zinc-900 rounded-lg overflow-hidden relative group border border-zinc-800/50">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-zinc-950 to-zinc-950 opacity-60"></div>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.3'}}></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
<div className="flex items-center gap-2 text-zinc-500 text-xs font-medium uppercase tracking-widest">
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Est. 2018 — Germany
                </div>
</div>
</div>
</div>

<section className="px-6 mb-24 md:mb-32">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
<div className="md:col-span-4">
<div className="sticky top-32">
<h2 className="text-2xl font-medium tracking-tight mb-2 text-white">Our Origins</h2>
<p className="text-zinc-500 text-sm">From university to agency.</p>
</div>
</div>
<div className="md:col-span-8 space-y-12">
<div>
<p className="text-xl md:text-2xl font-normal leading-relaxed text-zinc-200">
                        When JERY was founded in 2018, we were still in the middle of our studies. Encouraged by positive feedback on our first project and a strong dose of optimism, we set out on the path to becoming a strategic design agency.
                    </p>
</div>
<div>
<p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                        Regardless of the projects we have worked on since then, we are always fascinated by learning new things, continuously improving our skills, and developing truly user-centric products and solutions. We are JERY and we explore Beyond Design!
                    </p>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 mt-8">
<div className="flex items-start gap-4">
<div className="p-2 bg-zinc-800 rounded-lg border border-zinc-700 shadow-sm text-white shrink-0">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white mb-2">Curious about the name?</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                It is a small homage to our very first client project, where we developed a software concept for an existing application called <span className="text-white font-medium">Tom</span>. Naturally, we became the counterpart.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 bg-zinc-900 text-zinc-50 mb-24 rounded-[2rem] mx-2 md:mx-6 border border-zinc-800">
<div className="max-w-7xl mx-auto">
<div className="mb-16 border-b border-zinc-800 pb-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Our Philosophy</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-400 group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:diploma-verified-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">Continuous Learning</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        We don't just execute; we grow with every challenge. We remain students of our craft, always curious and ready to adapt to new technologies.
                    </p>
</div>

<div className="group">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-400 group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">Radically User-Centric</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Strategy means nothing without empathy. We design solutions that solve real problems for real people, putting the user at the heart of the equation.
                    </p>
</div>

<div className="group">
<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-400 group-hover:bg-white group-hover:text-zinc-900 transition-all duration-300">
<iconify-icon icon="solar:rocket-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">Driven by Optimism</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Founded on optimism, we believe better design creates a better future. We approach complex problems with a positive, solution-oriented mindset.
                    </p>
</div>
</div>
</div>
</section>

<section className="px-6 mb-32">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-md text-white">How the team works</h2>
<p className="text-zinc-400 max-w-sm text-sm">Our strategic process ensures that every pixel serves a purpose and every decision is backed by data.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-lg overflow-hidden">

<div className="bg-zinc-950 p-8 md:p-12 hover:bg-zinc-900 transition-colors group">
<div className="flex justify-between items-start mb-12">
<span className="text-xs font-mono text-zinc-600">01</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Discovery &amp; Strategy</h3>
<p className="text-sm text-zinc-400">We dive deep into the problem space, analyzing market needs and defining the strategic roadmap.</p>
</div>

<div className="bg-zinc-950 p-8 md:p-12 hover:bg-zinc-900 transition-colors group">
<div className="flex justify-between items-start mb-12">
<span className="text-xs font-mono text-zinc-600">02</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:palette-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Design &amp; Concept</h3>
<p className="text-sm text-zinc-400">Iterative prototyping and visual exploration to create intuitive, beautiful interfaces.</p>
</div>

<div className="bg-zinc-950 p-8 md:p-12 hover:bg-zinc-900 transition-colors group">
<div className="flex justify-between items-start mb-12">
<span className="text-xs font-mono text-zinc-600">03</span>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:code-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Development &amp; Launch</h3>
<p className="text-sm text-zinc-400">Translating designs into pixel-perfect code and ensuring a smooth deployment to the world.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-800 pt-24 pb-12 px-6 bg-zinc-950">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start mb-24">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">Have a project in mind?</h2>
<a className="inline-flex items-center gap-2 text-xl text-zinc-500 hover:text-white transition-colors group" href="mailto:hello@jery.team">
<span>hello@jery.team</span>
<iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="flex gap-8 mt-12 md:mt-0">
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Sitemap</span>
<a className="text-sm text-zinc-400 hover:text-white" href="#">Work</a>
<a className="text-sm text-zinc-400 hover:text-white" href="#">About</a>
<a className="text-sm text-zinc-400 hover:text-white" href="#">Services</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Socials</span>
<a className="text-sm text-zinc-400 hover:text-white" href="#">LinkedIn</a>
<a className="text-sm text-zinc-400 hover:text-white" href="#">Instagram</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800">
<p className="text-xs text-zinc-600">© 2024 JERY. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<a className="text-xs text-zinc-600 hover:text-white" href="#">Impressum</a>
<a className="text-xs text-zinc-600 hover:text-white" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
