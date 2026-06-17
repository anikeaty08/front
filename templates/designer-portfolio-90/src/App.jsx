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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter hover:opacity-70 transition-opacity" href="#">
                JD.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#work">Work</a>
<a className="hover:text-neutral-900 transition-colors" href="#about">About</a>
<a className="hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors" href="#contact">
                Let's Talk
            </a>
<button className="md:hidden text-neutral-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>
<main className="pt-32 md:pt-48">

<section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 md:mb-48">
<div className="max-w-4xl">
<p className="text-base md:text-lg text-neutral-500 font-medium mb-6 flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Available for new opportunities
                </p>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 text-neutral-950">
                    Multidisciplinary designer building digital experiences that matter.
                </h1>
<p className="text-lg md:text-xl text-neutral-500 font-normal max-w-2xl leading-relaxed mb-12">
                    I specialize in user interface design, design systems, and creative direction, helping brands bridge the gap between aesthetics and functionality.
                </p>
<div className="flex items-center gap-6">
<a className="inline-flex items-center gap-2 group text-base font-medium" href="#work">
                        View Projects
                        <iconify-icon className="text-xl text-neutral-400 group-hover:text-neutral-900 group-hover:translate-y-1 transition-all" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 md:mb-48" id="work">
<div className="flex items-end justify-between mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Selected Work</h2>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">
                    View Archive
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">

<a className="group block" href="#">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-6">
<img alt="Abstract digital art" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 text-neutral-900 group-hover:text-neutral-600 transition-colors">Aura Design System</h3>
<p className="text-sm text-neutral-500">Product Design · 2023</p>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</a>

<a className="group block md:mt-16" href="#">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-6">
<img alt="Minimal architecture" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 text-neutral-900 group-hover:text-neutral-600 transition-colors">Lumina Architecture</h3>
<p className="text-sm text-neutral-500">Web Direction · 2023</p>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-6">
<img alt="Clean UI mockups" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 text-neutral-900 group-hover:text-neutral-600 transition-colors">Fintech Dashboard</h3>
<p className="text-sm text-neutral-500">UI/UX · 2022</p>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</a>

<a className="group block md:mt-16" href="#">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-6">
<img alt="Typography poster" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 text-neutral-900 group-hover:text-neutral-600 transition-colors">Chronicle Typeface</h3>
<p className="text-sm text-neutral-500">Branding · 2022</p>
</div>
<div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</a>
</div>
</section>

<section className="bg-white border-y border-neutral-200/50 py-24 md:py-32" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

<div className="md:col-span-7 lg:col-span-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">A little about me</h2>
<div className="space-y-6 text-base md:text-lg text-neutral-600 leading-relaxed">
<p>
                                I'm a product designer with over 5 years of experience creating user-centric digital products. My approach combines strategic thinking with meticulous attention to visual details.
                            </p>
<p>
                                Previously, I worked at several high-growth startups where I led design initiatives from conceptualization to launch. I believe that good design is invisible—it solves problems seamlessly while delighting users along the way.
                            </p>
<p>
                                When I'm not pushing pixels, you can find me exploring typography, taking photos, or trying to perfect my pour-over coffee recipe.
                            </p>
</div>
</div>

<div className="md:col-span-5 md:col-start-8 lg:col-start-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Core Skills</h2>
<ul className="space-y-6">
<li className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center border border-neutral-100 group-hover:border-neutral-300 transition-colors">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900">UI/UX Design</h4>
<p className="text-sm text-neutral-500 mt-1">Wireframing, prototyping, user testing</p>
</div>
</li>
<li className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center border border-neutral-100 group-hover:border-neutral-300 transition-colors">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900">Design Systems</h4>
<p className="text-sm text-neutral-500 mt-1">Component libraries, tokens, documentation</p>
</div>
</li>
<li className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center border border-neutral-100 group-hover:border-neutral-300 transition-colors">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:monitor-smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900">Interaction Design</h4>
<p className="text-sm text-neutral-500 mt-1">Micro-interactions, motion, transitions</p>
</div>
</li>
<li className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center border border-neutral-100 group-hover:border-neutral-300 transition-colors">
<iconify-icon className="text-2xl text-neutral-700" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900">Frontend Dev</h4>
<p className="text-sm text-neutral-500 mt-1">HTML, CSS, basic React</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48 text-center" id="contact">
<h2 className="text-5xl md:text-8xl font-semibold tracking-tight text-neutral-950 mb-8">
                Let's create<br/>something together.
            </h2>
<p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl mx-auto">
                Feel free to reach out if you're looking for a designer, have a question, or just want to connect.
            </p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-medium hover:bg-neutral-800 hover:scale-105 transition-all duration-300" href="mailto:hello@example.com">
<iconify-icon className="text-xl" icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                hello@example.com
            </a>
</section>
</main>

<footer className="border-t border-neutral-200/50 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-500">
                © 2024 JD Portfolio. All rights reserved.
            </p>
<div className="flex items-center gap-6 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-neutral-900 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Dribbble</a>
</div>
</div>
</footer>

    </>
  );
}
