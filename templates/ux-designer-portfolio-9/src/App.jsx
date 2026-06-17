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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6">
<div className="max-w-7xl mx-auto flex justify-between items-center bg-white/40 backdrop-blur-xl border border-white/50 rounded-full px-6 py-3 shadow-sm animate-enter">
<a className="font-display font-medium text-lg tracking-tighter text-stone-900 hover:text-orange-500 transition-colors" href="#">
                ALEX.
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#projects">Work</a>
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 text-stone-100 hover:bg-orange-500 transition-colors duration-300" href="#contact">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</nav>

<main className="px-6 md:px-12 max-w-7xl mx-auto pt-32 pb-20">

<section className="min-h-[85vh] flex flex-col justify-center items-start relative mb-24">

<div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-20 -left-20 w-72 h-72 bg-stone-300/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-4xl z-10">
<div className="flex items-center gap-2 mb-6 animate-enter delay-100">
<span className="inline-block w-2 h-2 rounded-full bg-orange-500"></span>
<span className="text-stone-500 text-sm font-medium tracking-wide uppercase">Available for hire</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-stone-900 mb-8 animate-enter delay-200">
                    Crafting digital <br/>
<span className="text-stone-400">experiences that</span> <br/>
                    feel human.
                </h1>
<p className="text-xl md:text-2xl text-stone-600 font-light max-w-2xl leading-relaxed mb-12 animate-enter delay-300">
                    I’m a Product Designer focused on simplifying complex systems into intuitive, clean, and accessible interfaces.
                </p>
<div className="flex flex-wrap gap-4 animate-enter delay-500">
<a className="group flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-500 transition-all duration-300 shadow-sm" href="#projects">
                        See Projects
                        <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</a>
<a className="group flex items-center gap-2 bg-white/50 border border-stone-200 text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm" href="#about">
                        Read About Me
                    </a>
</div>
</div>
</section>

<section className="py-24" id="projects">
<div className="flex justify-between items-end mb-16">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-stone-900">Selected Work</h2>
<span className="hidden md:block text-stone-400 text-sm font-medium">(2023 — Present)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm relative mb-6 transition-all duration-500 group-hover:shadow-md group-hover:border-orange-500/20">
<div className="absolute inset-0 bg-stone-50 group-hover:bg-stone-100 transition-colors duration-500 flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-stone-300 group-hover:text-orange-500 transition-colors" icon="solar:chart-square-linear" width="64"></iconify-icon>
</div>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-stone-100">
<span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Fintech</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-normal text-stone-900 mb-2 group-hover:text-orange-500 transition-colors">Nova Finance Dashboard</h3>
<p className="text-stone-500 text-base font-light">Redesigning the investment flow for clarity.</p>
</div>
<div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="aspect-[4/3] bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm relative mb-6 transition-all duration-500 group-hover:shadow-md group-hover:border-orange-500/20">
<div className="absolute inset-0 bg-stone-50 group-hover:bg-stone-100 transition-colors duration-500 flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-stone-300 group-hover:text-orange-500 transition-colors" icon="solar:shop-2-linear" width="64"></iconify-icon>
</div>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-stone-100">
<span className="text-xs font-semibold uppercase tracking-wider text-stone-500">E-Commerce</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-normal text-stone-900 mb-2 group-hover:text-orange-500 transition-colors">Lumina Market</h3>
<p className="text-stone-500 text-base font-light">Streamlining checkout conversion rates.</p>
</div>
<div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm relative mb-6 transition-all duration-500 group-hover:shadow-md group-hover:border-orange-500/20">
<div className="absolute inset-0 bg-stone-50 group-hover:bg-stone-100 transition-colors duration-500 flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-stone-300 group-hover:text-orange-500 transition-colors" icon="solar:music-library-2-linear" width="64"></iconify-icon>
</div>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-stone-100">
<span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Mobile App</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-normal text-stone-900 mb-2 group-hover:text-orange-500 transition-colors">Echo Player</h3>
<p className="text-stone-500 text-base font-light">A gesture-based music discovery app.</p>
</div>
<div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="aspect-[4/3] bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm relative mb-6 transition-all duration-500 group-hover:shadow-md group-hover:border-orange-500/20">
<div className="absolute inset-0 bg-stone-50 group-hover:bg-stone-100 transition-colors duration-500 flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-white rounded-xl shadow-sm border border-stone-100 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-stone-300 group-hover:text-orange-500 transition-colors" icon="solar:shield-check-linear" width="64"></iconify-icon>
</div>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-stone-100">
<span className="text-xs font-semibold uppercase tracking-wider text-stone-500">SaaS</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-normal text-stone-900 mb-2 group-hover:text-orange-500 transition-colors">Fortify ID</h3>
<p className="text-stone-500 text-base font-light">Identity management for enterprise.</p>
</div>
<div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-stone-900 mb-16">Kind Words</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/60 backdrop-blur-md border border-stone-200 p-8 rounded-3xl hover:border-orange-500/30 transition-colors duration-300">
<div className="text-orange-500 mb-6">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-lg text-stone-700 font-light leading-relaxed mb-8">
                        "Alex has a unique ability to translate abstract requirements into clean, functional designs that developers love to build."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200"></div>
<div>
<p className="text-sm font-semibold text-stone-900">Sarah Jenks</p>
<p className="text-xs text-stone-500">PM at TechFlow</p>
</div>
</div>
</div>

<div className="bg-white/60 backdrop-blur-md border border-stone-200 p-8 rounded-3xl hover:border-orange-500/30 transition-colors duration-300">
<div className="text-orange-500 mb-6">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-lg text-stone-700 font-light leading-relaxed mb-8">
                        "The attention to detail and interaction design significantly improved our user retention metrics."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200"></div>
<div>
<p className="text-sm font-semibold text-stone-900">David Chen</p>
<p className="text-xs text-stone-500">Founder, Evolve</p>
</div>
</div>
</div>

<div className="bg-white/60 backdrop-blur-md border border-stone-200 p-8 rounded-3xl hover:border-orange-500/30 transition-colors duration-300">
<div className="text-orange-500 mb-6">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-lg text-stone-700 font-light leading-relaxed mb-8">
                        "Professional, fast, and incredibly creative. The glassmorphic aesthetic was exactly what our brand needed."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200"></div>
<div>
<p className="text-sm font-semibold text-stone-900">Elena M.</p>
<p className="text-xs text-stone-500">Director of Product</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-stone-900 mb-8">About Me</h2>
<div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed">
<p>
                            I believe good design is invisible. It should facilitate the user's goals without drawing unnecessary attention to itself. With a background in psychology and 5 years in digital design, I build bridges between human needs and business goals.
                        </p>
<p>
                            When I'm not in Figma, you can find me exploring brutalist architecture, brewing specialty coffee, or tweaking my mechanical keyboard.
                        </p>
</div>
<div className="mt-12">
<h4 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-6">Tools &amp; Stack</h4>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full border border-stone-200 bg-white/50 text-stone-600 text-sm">Figma</span>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-white/50 text-stone-600 text-sm">Spline</span>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-white/50 text-stone-600 text-sm">HTML/Tailwind</span>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-white/50 text-stone-600 text-sm">React</span>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-white/50 text-stone-600 text-sm">Protopie</span>
</div>
</div>
</div>

<div className="flex flex-col justify-between" id="contact">
<div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-stone-900 mb-8">Let's Connect</h2>
<p className="text-lg text-stone-600 font-light mb-10">
                            Currently open to new opportunities and collaborations. Have a project in mind?
                        </p>
<a className="group inline-flex items-center gap-4 text-3xl md:text-5xl font-display font-medium text-stone-900 hover:text-orange-500 transition-all" href="mailto:hello@alexdesign.com">
                            hello@alex.design
                            <iconify-icon className="opacity-30 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" icon="solar:arrow-right-up-linear" width="32"></iconify-icon>
</a>
</div>
<div className="mt-16 flex gap-6">
<a className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:border-orange-500 hover:text-orange-500 hover:shadow-sm transition-all" href="#">
<iconify-icon icon="solar:plain-linear" width="24"></iconify-icon> 
</a>
<a className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:border-orange-500 hover:text-orange-500 hover:shadow-sm transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon> 
</a>
<a className="w-12 h-12 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:border-orange-500 hover:text-orange-500 hover:shadow-sm transition-all" href="#">
<iconify-icon icon="solar:gallery-linear" width="24"></iconify-icon> 
</a>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 flex flex-col md:flex-row justify-between items-end border-t border-stone-200 mt-12">
<div>
<p className="font-display text-xl font-bold tracking-tighter text-stone-900 mb-2">ALEX.</p>
<p className="text-stone-500 text-sm">© 2024 Alex Design. Crafted with Tailwind.</p>
</div>
<div className="flex gap-8 mt-8 md:mt-0">
<a className="text-sm font-medium text-stone-500 hover:text-orange-500 transition-colors" href="#">Styleguide</a>
<a className="text-sm font-medium text-stone-500 hover:text-orange-500 transition-colors" href="#">Licensing</a>
<a className="text-sm font-medium text-stone-500 hover:text-orange-500 transition-colors" href="#">Changelog</a>
</div>
</footer>
</main>

    </>
  );
}
