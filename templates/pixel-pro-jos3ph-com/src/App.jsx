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
      

<div className="fixed inset-0 z-[-1] pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

<nav className="fixed top-0 z-50 w-full border-b backdrop-blur-xl border-white/5 bg-neutral-950/60">
<div className="flex h-14 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-base font-medium tracking-tighter font-sans text-white" href="#">Pixel Pros</a>
<div className="hidden gap-8 md:flex items-center">
<a className="transition-colors text-sm font-medium font-sans hover:text-white text-neutral-400" href="#services">Services</a>
</div>
</div>
</nav>

<main className="">
<section className="md:pt-48 md:pb-32 pt-32 pb-20 relative">
<div className="mx-auto max-w-6xl px-6 text-center">
<div className="inline-flex gap-2 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center font-sans bg-white/5 border-white/10">Digital Transformers</div>
<h1 className="md:text-7xl lg:text-8xl text-5xl tracking-tight max-w-4xl mr-auto ml-auto font-sans font-semibold text-white">Build Once. Scale Forever</h1>
<p className="md:text-lg text-base font-sans max-w-2xl mt-8 mr-auto ml-auto text-neutral-400">We help Businesses and Entrepreneurs transform ideas into beautifully engineered digital products. High-performance Websites and Freelance works designed for growth, speed, and real users.</p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 transition-colors sm:w-auto text-sm font-medium bg-transparent w-full h-11 border rounded-lg pr-6 pl-6 font-sans hover:bg-white/5 text-white border-white/10" href="#services">
                        Explore services
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="md:py-32 pt-20 pb-20" id="services">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl tracking-tight md:text-4xl font-sans font-semibold text-white">Everything you need to stand out.</h2>
<p className="mt-4 text-base font-sans text-neutral-400">Comprehensive design and development services tailored for the modern web.</p>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-2xl border bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04] border-white/5">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight font-sans text-white">Digital Design</h3>
<p className="text-sm leading-relaxed font-sans text-neutral-400">
                            Bespoke user interfaces and user experiences that capture your brand's essence and engage your audience. From wireframes to pixel-perfect prototypes.
                        </p>
</div>

<div className="group relative overflow-hidden rounded-2xl border bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04] border-white/5">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon className="text-xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<h3 className="mb-3 text-lg font-medium tracking-tight font-sans text-white">Web Development</h3>
<p className="text-sm leading-relaxed font-sans text-neutral-400">
                            Fast, accessible, and responsive websites built with modern frameworks. We ensure your site performs flawlessly across all devices.
                        </p>
</div>

<div className="group overflow-hidden transition-colors hover:bg-white/[0.04] border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative border-white/5">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
<iconify-icon className="text-xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight font-sans mb-3 text-white">Free lance designing</h3>
<p className="leading-relaxed text-sm font-sans text-neutral-400">Script Writing, Posters, Flyers, Presentation, Invitations of all sorts, Business Cards, and Photo Editing.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 border-white/5 border-t pt-20 pb-20">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-16">
<h2 className="text-3xl tracking-tight md:text-4xl font-sans font-semibold text-white">Built for scale and speed.</h2>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2">

<div className="md:col-span-2 md:row-span-2 flex flex-col overflow-hidden border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative justify-between border-white/5 bg-neutral-900/50">
<div className="relative z-10">
<div className="mb-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium font-sans border-white/10 bg-white/5 text-neutral-300">Frameworks</div>
<h3 className="text-2xl tracking-tight mb-4 font-sans font-semibold text-white">Modern Stack</h3>
<p className="text-sm max-w-md font-sans text-neutral-400">We utilize the latest technologies to build websites and designs that are secure, fast, and easy to maintain.</p>
</div>

<div className="mt-8 rounded-lg border p-4 font-mono text-xs opacity-80 border-white/10 text-neutral-400 bg-slate-500">
<div className="flex mb-3 gap-x-2 gap-y-2">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
</div>
<p className="font-sans"><span className="font-sans text-blue-400">export default</span> <span className="font-sans text-purple-400">function</span> <span className="font-sans text-blue-400">Studio</span>() {</p>
<p className="pl-4 font-sans">return (</p>
<p className="pl-8 font-sans text-neutral-300">&lt;<span className="font-sans text-blue-400">Website</span> speed="<span className="font-sans text-yellow-400">blazing</span>" /&gt;</p>
<p className="pl-4 font-sans">)</p>
<p className="font-sans">}</p>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border p-8 flex items-center gap-6 border-white/5 bg-neutral-900/50">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
<iconify-icon className="text-2xl" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium tracking-tight mb-1 font-sans text-white">Rapid Delivery</h3>
<p className="text-sm font-sans text-neutral-400">From concept to launch in days, not months or even weeks . Iterative processes keep you involved.</p>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border p-8 flex items-center gap-6 border-white/5 bg-neutral-900/50">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium tracking-tight mb-1 font-sans text-white">Reliable Support</h3>
<p className="text-sm font-sans text-neutral-400">Post-launch maintenance and updates to ensure your digital presence remains flawless.</p>
</div>
</div>
</div>
</div>
</section>


<section className="md:py-40 pt-24 pb-24" id="contact">
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-4xl tracking-tight md:text-6xl font-sans font-semibold text-white">Ready to elevate your digital presence?</h2>
<p className="text-base text-stone-50 font-sans max-w-2xl mt-6 mr-auto ml-auto">Let's discuss your project requirements on WhatsApp or Gmail and see how we can help you achieve your goals (Recommended to use WhatsApp)        
. +91 8945993305, veipuloupou@gmail.com </p>
<div className="mt-10">
</div>
</div>
</section>
</main>

<footer className="border-t py-12 border-white/5">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
<div className="flex items-center gap-2 text-white">
<span className="text-lg font-medium tracking-tighter font-sans">Pixel Pros</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
</div>
<p className="text-xs font-sans text-neutral-600">© 2026 Framework Studio. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
