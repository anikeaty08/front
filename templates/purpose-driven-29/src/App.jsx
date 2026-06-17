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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase text-zinc-900" href="#">Appbai</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors duration-200" href="#about">About</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors duration-200" href="#philosophy">Philosophy</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors duration-200" href="#work">What we build</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors duration-200" href="#contact">Contact</a>
</nav>
<button className="md:hidden text-zinc-900">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>
<main>

<section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-16">
<div className="max-w-5xl mx-auto w-full">
<div className="reveal">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] text-zinc-900 mb-8">
                        Purpose-driven technology for real-world impact.
                    </h1>
</div>
<div className="reveal reveal-delay-1">
<p className="text-lg md:text-xl font-light text-zinc-500 max-w-2xl leading-relaxed">
                        We build intelligent applications that bridge the gap between human innovation and societal necessity. Inspired by Ikigai.
                    </p>
</div>
<div className="reveal reveal-delay-2 mt-12 flex items-center gap-2 group cursor-pointer w-fit">
<span className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 group-hover:opacity-70 transition-opacity">Explore our philosophy</span>
<iconify-icon className="text-zinc-900 group-hover:translate-y-1 transition-transform" height="16" icon="lucide:arrow-down" width="16"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-zinc-100 px-6 md:px-12" id="philosophy">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-4 block">Our Essence</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900">Balanced by design.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

<div className="flex flex-col gap-4 group">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50 text-zinc-900 mb-2">
<iconify-icon height="20" icon="lucide:heart" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">What we love</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            A passion for code, design, and the architecture of systems that improve lives.
                        </p>
</div>

<div className="flex flex-col gap-4 group">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50 text-zinc-900 mb-2">
<iconify-icon height="20" icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">What we are good at</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Crafting scalable, efficient, and secure digital infrastructure with precision.
                        </p>
</div>

<div className="flex flex-col gap-4 group">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50 text-zinc-900 mb-2">
<iconify-icon height="20" icon="lucide:globe" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">What the world needs</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Solutions that address real challenges, reducing friction and enhancing connection.
                        </p>
</div>

<div className="flex flex-col gap-4 group">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50 text-zinc-900 mb-2">
<iconify-icon height="20" icon="lucide:infinity" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">What sustains us</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Creating enduring value that ensures longevity for our team and our partners.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-50 px-6 md:px-12" id="about">
<div className="max-w-4xl mx-auto">
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-6 block">About Appbai</span>
<h3 className="text-2xl md:text-4xl font-normal leading-snug tracking-tight text-zinc-900 mb-12">
                    We believe that technology should be calm, not chaotic. In a world of noise, we build signals. APPBAI was founded on the principle that the most advanced code is the one that best serves the human experience.
                </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-500 text-sm md:text-base leading-relaxed font-light">
<p>
                        Our name reflects our commitment to the intersection of application and balance. We don't just ship features; we cultivate ecosystems. Every line of code is written with intention, questioning not just if it can be done, but if it should be done.
                    </p>
<p>
                        We strip away the non-essential to reveal the functional core. By focusing on essentialism, we create software that is robust, maintainable, and deeply respectful of the user's time and attention.
                    </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div>
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-4 block">Our Work</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900">Intentional solutions.</h2>
</div>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
                        Solving structural problems through abstract thinking and concrete engineering.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">

<div className="bg-white p-10 md:p-12 hover:bg-zinc-50 transition-colors duration-500 group">
<div className="mb-12 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon height="24" icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">Data Synthesis</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Platforms that convert disparate data streams into coherent, actionable intelligence for ethical decision making.
                        </p>
</div>

<div className="bg-white p-10 md:p-12 hover:bg-zinc-50 transition-colors duration-500 group">
<div className="mb-12 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon height="24" icon="lucide:share-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">Resilient Networks</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Decentralized communication protocols designed for stability and privacy in community infrastructures.
                        </p>
</div>

<div className="bg-white p-10 md:p-12 hover:bg-zinc-50 transition-colors duration-500 group">
<div className="mb-12 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon height="24" icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">Human Capital</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Tools that redefine productivity, moving away from monitoring towards empowering autonomous workflow.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 text-white px-6 md:px-12 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="flex flex-col gap-12">
<iconify-icon className="text-zinc-500" height="48" icon="lucide:orbit" strokeWidth="1" width="48"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                        We build for the long term.<br/>
<span className="text-zinc-500">Sustainability is not a feature, it is the foundation.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-zinc-800">
<div>
<h4 className="text-sm font-medium text-white mb-2">Technical Ecology</h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Our codebases are designed to age gracefully. We prioritize modularity and standards over fleeting trends.
                            </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-2">Societal Integration</h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Technology does not exist in a vacuum. We rigorously test for impact, ensuring our output serves the collective good.
                            </p>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-6 md:px-12 border-t border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div className="flex flex-col gap-6 max-w-sm">
<a className="text-lg font-semibold tracking-tighter uppercase text-zinc-900" href="#">Appbai</a>
<p className="text-2xl font-medium tracking-tight text-zinc-900 leading-snug">
                        Technology is not only about code — it is about purpose.
                    </p>
</div>
<div className="flex flex-col md:items-end gap-8 w-full md:w-auto">
<div className="flex gap-8">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Twitter</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">LinkedIn</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">GitHub</a>
</div>
<div className="flex flex-col md:items-end gap-1">
<span className="text-xs text-zinc-400">© 2024 APPBAI Inc. All rights reserved.</span>
<span className="text-xs text-zinc-400">Designed with intent.</span>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
