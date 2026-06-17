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
      
<div className="grain"></div>

<nav className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4">
<div className="neu-flat-sm rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-12 backdrop-blur-sm border bg-white/90 border-slate-200">
<a className="text-sm font-semibold tracking-tighter text-slate-800 uppercase flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-slate-900"></span>
          Alex Ethan
        </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#work">
            Work
          </a>
<a className="hover:text-slate-900 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-slate-900 transition-colors" href="#about">
            About
          </a>
</div>
<a className="neu-btn px-4 py-2 rounded-full text-xs font-semibold tracking-wide border text-white" href="#contact">
          Get in Touch
        </a>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-pressed mb-4">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
            Available for March
          </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] text-slate-900">
          Designing intuitive
          <br/>
<span className="text-slate-400">digital experiences.</span>
</h1>
<p className="text-base md:text-lg text-slate-500 font-light max-w-lg mx-auto leading-relaxed">
          I am a UI/UX Designer passionate about building clean, accessible, and
          user-friendly interfaces for startups and tech companies.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
<a className="neu-btn px-8 py-4 rounded-2xl text-sm font-semibold flex items-center gap-2 text-white" href="#work">
            View Selected Work
            <span className="iconify" data-icon="lucide:arrow-down-right" data-width="16"></span>
</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-2" href="#about">
            About Me
            <span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</a>
</div>
</div>

<div className="mt-20 flex flex-wrap justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="neu-flat-sm w-12 h-12 rounded-xl flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:framer" data-width="20"></span>
</div>
<div className="neu-flat-sm w-12 h-12 rounded-xl flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:figma" data-width="20"></span>
</div>
<div className="neu-flat-sm w-12 h-12 rounded-xl flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:layout-template" data-width="20"></span>
</div>
<div className="neu-flat-sm w-12 h-12 rounded-xl flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
</div>
</header>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-800 mb-2">
              My Expertise
            </h2>
<p className="text-sm text-slate-500 max-w-xs">
              Focused on user-centric design principles and pixel-perfect
              execution.
            </p>
</div>
<button className="neu-icon-btn p-3 rounded-full text-slate-400">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="neu-flat p-8 group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-indigo-500 mb-6 group-hover:text-indigo-600 transition-colors">
<span className="iconify" data-icon="lucide:layout" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">
              Product Design
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              End-to-end product design, from user research and wireframing to
              final high-fidelity prototypes.
            </p>
</div>

<div className="neu-flat p-8 group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-indigo-500 mb-6 group-hover:text-indigo-600 transition-colors">
<span className="iconify" data-icon="lucide:palette" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">
              Visual Systems
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Creating scalable design systems and style guides to ensure
              consistency and brand integrity.
            </p>
</div>

<div className="neu-flat p-8 group hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-indigo-500 mb-6 group-hover:text-indigo-600 transition-colors">
<span className="iconify" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">
              Prototyping
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              High-fidelity interactive prototypes to validate ideas and user
              flows before development.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="work">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-800">
            Selected Work
          </h2>
</div>
<div className="space-y-24">

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="neu-flat p-4">
<div className="neu-pressed overflow-hidden rounded-xl aspect-[4/3] relative group">

<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<span className="iconify text-slate-300" data-icon="lucide:image" data-width="48"></span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
</div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-3">
<span className="px-3 py-1 rounded-lg neu-pressed text-[10px] uppercase font-semibold tracking-wider text-slate-500">
                  Fintech
                </span>
<span className="px-3 py-1 rounded-lg neu-pressed text-[10px] uppercase font-semibold tracking-wider text-slate-500">
                  2023
                </span>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-slate-800">
                Novabank Dashboard
              </h3>
<p className="text-slate-500 leading-relaxed text-sm">
                A comprehensive marketing site for a new fintech SaaS. Focused
                on trust, security, and ease of integration. Built entirely in
                Framer with custom React components for the interactive pricing
                calculators.
              </p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="16"></span>
                  30% increase in sign-ups
                </li>
<li className="flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="16"></span>
                  Custom CMS Integration
                </li>
</ul>
<button className="neu-btn px-6 py-3 rounded-xl text-xs font-semibold text-slate-800 inline-flex items-center gap-2 mt-4">
                View Case Study
              </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
<div className="order-1 md:order-2 neu-flat p-4">
<div className="neu-pressed overflow-hidden rounded-xl aspect-[4/3] relative">

<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<span className="iconify text-slate-300" data-icon="lucide:monitor" data-width="48"></span>
</div>
</div>
</div>
<div className="order-2 md:order-1 space-y-6">
<div className="flex items-center gap-3">
<span className="px-3 py-1 rounded-lg neu-pressed text-[10px] uppercase font-semibold tracking-wider text-slate-500">
                  AI Tool
                </span>
<span className="px-3 py-1 rounded-lg neu-pressed text-[10px] uppercase font-semibold tracking-wider text-slate-500">
                  2024
                </span>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-slate-800">
                Cognition AI
              </h3>
<p className="text-slate-500 leading-relaxed text-sm">
                One-page landing site for an AI writing assistant. The design
                utilizes dark mode neomorphism to stand out from competitors.
                Features smooth scroll animations and sticky navigation.
              </p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="16"></span>
                  Dark Mode Toggle
                </li>
<li className="flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="16"></span>
                  98/100 Lighthouse Score
                </li>
</ul>
<button className="neu-btn px-6 py-3 rounded-xl text-xs font-semibold text-slate-800 inline-flex items-center gap-2 mt-4">
                View Live Site
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="about">
<div className="max-w-4xl mx-auto">
<div className="neu-flat p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-800">
              About Me
            </h2>
<p className="text-slate-500 leading-relaxed text-sm">
              Hi, I'm Alex. I have 5 years of experience crafting digital
              products. I believe that good design is not just about how things
              look, but how they work. I bridge the gap between aesthetics and
              functionality.
            </p>
<p className="text-slate-500 leading-relaxed text-sm">
              When I'm not designing, I'm exploring new frontend technologies or
              contributing to open-source design systems.
            </p>
</div>
<div className="w-full md:w-1/3 aspect-square neu-pressed rounded-2xl flex items-center justify-center text-slate-300">
<span className="iconify" data-icon="lucide:user" data-width="64"></span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 pb-32" id="contact">
<div className="max-w-2xl mx-auto neu-flat p-8 md:p-12">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-slate-800 mb-2">
            Let's work together
          </h2>
<p className="text-sm text-slate-500">
            Tell me about your project and I'll get back to you soon.
          </p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-2">
                Name
              </label>
<input className="w-full neu-pressed px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200/50 transition-all placeholder:text-slate-400" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-2">
                Email
              </label>
<input className="w-full neu-pressed px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200/50 transition-all placeholder:text-slate-400" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-2">
              Details
            </label>
<textarea className="w-full neu-pressed px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-200/50 transition-all placeholder:text-slate-400 resize-none" placeholder="Brief description of your product and goals..." rows="4"></textarea>
</div>
<button className="neu-btn w-full py-4 rounded-xl text-sm font-semibold tracking-wide mt-4 text-white" type="button">
            Send Message
          </button>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-slate-200/50">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-slate-400"></span>
<span className="text-xs font-semibold tracking-tight text-slate-500 uppercase">
            Alex Ethan © 2024
          </span>
</div>
<div className="flex gap-6">
<a className="neu-icon-btn p-2 rounded-lg text-slate-500" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="neu-icon-btn p-2 rounded-lg text-slate-500" href="#">
<span className="iconify" data-icon="lucide:dribbble" data-width="18"></span>
</a>
<a className="neu-icon-btn p-2 rounded-lg text-slate-500" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
