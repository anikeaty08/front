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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
manrope: ['Manrope', 'sans-serif'],
}
}
}
}

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
      

<a className="fixed z-[100] left-4 top-4 bg-white text-black px-5 py-3 font-medium text-sm rounded-md border border-neutral-200 shadow-xl -translate-y-[200%] focus:translate-y-0 transition-transform duration-300 outline-none ring-2 ring-white ring-offset-2 ring-offset-black" href="#main-content">
        Skip to content
    </a>

<header className="bg-white text-black border-b border-neutral-200 sticky top-0 z-50">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<a className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded" href="#">

<div className="h-8 w-8 bg-black text-white flex items-center justify-center rounded font-bold text-xs tracking-tighter">UH</div>
<div className="flex flex-col leading-none">
<span className="font-bold text-sm tracking-tight">UsabilityHub</span>
<span className="text-[10px] text-neutral-500 font-medium">BY LBC</span>
</div>
</a>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">

<a className="transition-colors hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1" href="work.html">Work</a>
<a className="transition-colors hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1" href="#services">Consulting</a>
<a className="transition-colors hover:text-neutral-600 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1" href="#training">
            Training &amp; UX certification
            <iconify-icon className="text-neutral-400" height="12" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
<a className="transition-colors hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1" href="#lab">LabUX</a>
<a className="transition-colors hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1" href="#about">About</a>
<a className="transition-colors hover:text-neutral-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1" href="#contact">Contacts</a>
</nav>
</div>
</header>
<main className="outline-none" id="main-content" tabindex="-1">

<section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-900">

<div className="absolute inset-0 z-0">
<img alt="Abstract Background" className="w-full h-full object-cover opacity-50 saturate-0" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-10">
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-semibold text-white tracking-tight">Simplifying the language<br className=""/>through better design</h1>
</div>
</section>

<section className="bg-black pt-20 pb-32 px-6">
<div className="mx-auto max-w-7xl">

<div className="mb-32 max-w-4xl">
<p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-neutral-400 font-light">
                    We provide leading companies with <span className="text-white font-semibold">strategic insights</span>, <span className="text-white font-semibold">quality design</span>, <span className="text-white font-semibold">specialized training</span> and <span className="text-white font-semibold">talented people</span> to shape successful products and services.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

<div className="flex flex-col gap-16">
<div className="">
<div className="text-9xl font-semibold tracking-tighter leading-none text-white">20</div>
<div className="text-2xl text-white mt-2 ml-2">years</div>
</div>
<div className="">
<div className="text-8xl font-semibold tracking-tighter leading-none text-white">160</div>
<div className="text-2xl text-white mt-2 ml-2">specialists</div>
</div>
<div>
<div className="text-8xl font-semibold tracking-tighter leading-none text-white">380</div>
<div className="text-2xl text-white mt-2 ml-2">projects</div>
</div>
</div>

<div id="services">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">What we do</h2>
<div className="space-y-8">

<div className="group border-b border-neutral-800 pb-8 transition-all hover:border-white">
<div className="flex items-start gap-6">
<div className="mt-1 text-white">
<iconify-icon height="28" icon="solar:ruler-pen-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">UX &amp; UI Design</h3>
<p className="mt-2 text-neutral-400 max-w-md">High-fidelity prototyping and design systems to align teams and accelerate delivery.</p>
</div>
</div>
</div>

<div className="group border-b border-neutral-800 pb-8 transition-all hover:border-white">
<div className="flex items-start gap-6">
<div className="mt-1 text-white">
<iconify-icon height="28" icon="solar:user-check-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">User Testing</h3>
<p className="mt-2 text-neutral-400 max-w-md">Remote and lab-based tests to validate concepts, flows, and interfaces with real users.</p>
</div>
</div>
</div>

<div className="group border-b border-neutral-800 pb-8 transition-all hover:border-white">
<div className="flex items-start gap-6">
<div className="mt-1 text-white">
<iconify-icon height="28" icon="solar:chart-2-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">Strategy &amp; Efficiency</h3>
<p className="mt-2 text-neutral-400 max-w-md">Operational UX strategies to improve task success and time-to-value.</p>
</div>
</div>
</div>

<div className="group border-b border-neutral-800 pb-8 transition-all hover:border-white">
<div className="flex items-start gap-6">
<div className="mt-1 text-white">
<iconify-icon height="28" icon="solar:accessibility-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">Accessibility Audits</h3>
<p className="mt-2 text-neutral-400 max-w-md">Compliance audits and inclusive design to meet WCAG and regional standards.</p>
</div>
</div>
</div>

<div className="group border-b border-neutral-800 pb-8 transition-all hover:border-white">
<div className="flex items-start gap-6">
<div className="mt-1 text-white">
<iconify-icon height="28" icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300">Team Augmentation</h3>
<p className="mt-2 text-neutral-400 max-w-md">Flexible access to senior researchers, designers, and engineers embedded with your teams.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 py-24 border-t border-neutral-900" id="work">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between gap-4 mb-16">
<div>
<h2 className="text-4xl font-semibold text-white">Selected Work</h2>
</div>

<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white border-b border-white pb-1 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white rounded px-1" href="work.html">
                View all projects
                <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group block focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1 -m-1" href="#">
<div className="aspect-[4/3] overflow-hidden bg-neutral-900 mb-6 rounded-sm">
<img alt="Analytics dashboard interface" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Enterprise SaaS</div>
<h3 className="text-xl font-medium text-white group-hover:underline decoration-1 underline-offset-4">Reduced task time by 37% through workflow simplification</h3>
</div>
</a>

<a className="group block focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1 -m-1" href="#">
<div className="aspect-[4/3] overflow-hidden bg-neutral-900 mb-6 rounded-sm">
<img alt="Mobile banking application on phone" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Financial Services</div>
<h3 className="text-xl font-medium text-white group-hover:underline decoration-1 underline-offset-4">Increased self-service adoption by 2.4× with clearer IA</h3>
</div>
</a>

<a className="group block focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1 -m-1" href="#">
<div className="aspect-[4/3] overflow-hidden bg-neutral-900 mb-6 rounded-sm">
<img alt="Healthcare patient portal" className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Healthcare</div>
<h3 className="text-xl font-medium text-white group-hover:underline decoration-1 underline-offset-4">WCAG 2.2 AA compliance and +18 NPS for patient portal</h3>
</div>
</a>
</div>
</div>
</section>

<section className="bg-black py-20 border-t border-neutral-900" id="clients">
<div className="mx-auto max-w-7xl px-6">
<p className="text-sm font-medium text-neutral-500 mb-10 text-center uppercase tracking-widest">Trusted by leading brands</p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">

<div className="h-12 flex items-center justify-center border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition-colors">
<span className="text-sm font-bold tracking-widest text-white">ALPHA</span>
</div>
<div className="h-12 flex items-center justify-center border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition-colors">
<span className="text-sm font-bold tracking-widest text-white">NOVA</span>
</div>
<div className="h-12 flex items-center justify-center border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition-colors">
<span className="text-sm font-bold tracking-widest text-white">CORTEX</span>
</div>
<div className="h-12 flex items-center justify-center border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition-colors">
<span className="text-sm font-bold tracking-widest text-white">PIXEL</span>
</div>
<div className="h-12 flex items-center justify-center border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition-colors">
<span className="text-sm font-bold tracking-widest text-white">LUMEN</span>
</div>
<div className="h-12 flex items-center justify-center border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition-colors">
<span className="text-sm font-bold tracking-widest text-white">SEQUOIA</span>
</div>
</div>
</div>
</section>

<section className="bg-white text-black py-24" id="contact">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-black mb-6">Let's talk about<br/>your project.</h2>
<p className="text-lg text-neutral-600 mb-8">Tell us about your goals. We’ll respond within two business days with initial thoughts and next steps.</p>
<div className="space-y-4 text-sm font-medium">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="hover:underline focus:outline-none focus:ring-2 focus:ring-black rounded px-1" href="mailto:contact@usabilityhub.lbc">contact@usabilityhub.lbc</a>
</div>
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Av. do Conhecimento 120, Lisbon</span>
</div>
</div>
</div>
<form action="#" className="bg-neutral-50 p-8 rounded-lg border border-neutral-200" method="post">
<div className="grid grid-cols-1 gap-6">
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2" htmlFor="name">Name</label>
<input className="w-full bg-white border-b-2 border-neutral-200 px-0 py-3 text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none" id="name" name="name" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2" htmlFor="email">Email</label>
<input className="w-full bg-white border-b-2 border-neutral-200 px-0 py-3 text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none" id="email" name="email" placeholder="you@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2" htmlFor="message">Message</label>
<textarea className="w-full bg-white border-b-2 border-neutral-200 px-0 py-3 text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors rounded-none resize-none" id="message" name="message" placeholder="How can we help?" rows="4"></textarea>
</div>
<div className="pt-4">
<button className="bg-black text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors w-full md:w-auto" type="submit">
                      Send Message
                    </button>
</div>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-neutral-900 text-neutral-400 text-sm">
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-white text-black flex items-center justify-center rounded-sm font-bold text-[10px] tracking-tighter">UH</div>
<span className="text-white font-medium">UsabilityHub</span>
</div>
<div className="flex flex-wrap gap-8 text-neutral-500">
<a className="hover:text-white transition-colors focus:outline-none focus:text-white" href="#">Terms</a>
<a className="hover:text-white transition-colors focus:outline-none focus:text-white" href="#">Privacy</a>
<a className="hover:text-white transition-colors focus:outline-none focus:text-white" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors focus:outline-none focus:text-white" href="#">Twitter</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between gap-4 text-xs text-neutral-600">
<div>© 2025 LBC. All rights reserved.</div>
<div>Designed with precision in Lisbon.</div>
</div>
</div>
</footer>

    </>
  );
}
