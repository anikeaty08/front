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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter">
                STUDIO<span className="text-zinc-400">RC</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#work">Work</a>
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="bg-zinc-900 text-white px-5 py-2 rounded-full hover:bg-zinc-800 transition-all" href="#contact">Start a Project</a>
</div>
<button className="md:hidden text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="pt-40 pb-24 px-6 hero-gradient">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl">
<span className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-xs font-medium mb-6">Available for Q4 2024</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-8">
                    Crafting digital experiences with <span className="text-zinc-400">surgical precision.</span>
</h1>
<p className="text-lg text-zinc-500 mb-10 leading-relaxed">
                    I partner with ambitious founders and design-led companies to build products that feel effortless and look exceptional.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all group" href="#work">
                        View Portfolio
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 transition-all" href="#contact">
                        Get in touch
                    </a>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale">
<span className="text-xl font-semibold tracking-tighter">VERTEX</span>
<span className="text-xl font-semibold tracking-tighter">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter">ORBIT</span>
<span className="text-xl font-semibold tracking-tighter">FLUX</span>
<span className="text-xl font-semibold tracking-tighter">PRISM</span>
</div>
</div>
</section>

<section className="py-32 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-16">
<div>
<div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 border border-zinc-100">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Product Design</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        User-centric interfaces designed with attention to every pixel. Specialized in SaaS, FinTech, and Mobile applications.
                    </p>
</div>
<div>
<div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 border border-zinc-100">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:code-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Development</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        High-performance frontend implementation using modern stacks. Clean code, fluid animations, and SEO-focused architecture.
                    </p>
</div>
<div>
<div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 border border-zinc-100">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4">Creative Direction</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Strategic brand identity and visual storytelling that resonates with your target audience and builds lasting equity.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 px-6" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-4xl font-semibold tracking-tight mb-4">Selected Work</h2>
<p className="text-zinc-500">A collection of projects driven by utility and aesthetics.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video bg-zinc-200 rounded-3xl overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-all duration-500"></div>
<img alt="Work" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-lg font-semibold tracking-tight">Ethereal Bank</h4>
<p className="text-sm text-zinc-500">Fintech • Product Design</p>
</div>
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-zinc-200 rounded-3xl overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-all duration-500"></div>
<img alt="Work" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-lg font-semibold tracking-tight">Linear Workflow</h4>
<p className="text-sm text-zinc-500">SaaS • Full Stack</p>
</div>
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-1 mb-10">
<iconify-icon className="text-zinc-900 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-zinc-900 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-zinc-900 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-zinc-900 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-zinc-900 text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-snug max-w-4xl mx-auto italic mb-10">
                "Working with this studio was a game-changer for our brand. The attention to detail and the technical execution surpassed all our expectations."
            </h2>
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-zinc-200 rounded-full mb-4"></div>
<p className="font-semibold text-sm">Marcus Thorne</p>
<p className="text-xs text-zinc-400">CEO at Lumina Labs</p>
</div>
</div>
</section>

<section className="pb-32 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="bg-zinc-950 rounded-[2.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">Ready to start?</h2>
<p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto">
                        Currently accepting new projects for early 2025. Let’s talk about your vision.
                    </p>
<a className="inline-flex items-center gap-2 bg-white text-zinc-950 px-10 py-5 rounded-full font-medium hover:bg-zinc-100 transition-all" href="mailto:hello@studio.com">
                        hello@studio.com
                        <iconify-icon icon="solar:paper-plane-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"></div>
</div>
</div>
</section>

<footer className="py-12 border-t border-zinc-100 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-xl font-semibold tracking-tighter">
                STUDIO<span className="text-zinc-400">RC</span>
</div>
<div className="flex items-center gap-8 text-xs font-medium text-zinc-400 uppercase tracking-widest">
<a className="hover:text-zinc-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Dribbble</a>
<a className="hover:text-zinc-900 transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-sm text-zinc-400">
                © 2024 Studio RC. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
