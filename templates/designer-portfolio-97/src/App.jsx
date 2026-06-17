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
      

<nav className="fixed dark:border-orange-800/50 dark:bg-orange-950/80 z-50 bg-orange-50/80 w-full border-orange-200/50 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 animate-reveal" style={{animationDelay: '50ms'}}>
<span className="uppercase text-base tracking-tighter font-sans">Gaintt</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-orange-500 dark:text-orange-400 animate-reveal" style={{animationDelay: '100ms'}}>
<a className="hover:text-orange-900 dark:hover:text-orange-50 transition-colors font-sans" href="#work">Work</a>
<a className="hover:text-orange-900 dark:hover:text-orange-50 transition-colors font-sans" href="#process">Process</a>
<a className="hover:text-orange-900 dark:hover:text-orange-50 transition-colors font-sans" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4 animate-reveal" style={{animationDelay: '150ms'}}>
<a className="px-4 py-2 bg-orange-900 dark:bg-orange-50 text-orange-50 dark:text-orange-900 rounded-full text-xs hover:bg-orange-800 dark:hover:bg-orange-200 transition-colors font-sans" href="#contact">Hire Me</a>
</div>
</div>
</nav>
<main className="pt-32 pb-12">

<section className="flex flex-col bg-center text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/4d5ff6ae-a88d-4c96-9f75-2848f5c780dc/1600w.png)] bg-cover mr-auto ml-auto pt-20 pr-6 pb-24 pl-6 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800 bg-white/50 dark:bg-orange-900/50 text-xs text-orange-500 dark:text-orange-400 mb-8 animate-reveal" style={{animationDelay: '200ms'}}>
<span className="w-2 h-2 rounded-full bg-amber-500 relative flex items-center justify-center">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
</span>
<span className="font-sans">Available for freelance opportunities</span>
</div>
<h1 className="md:text-7xl leading-[1.1] animate-reveal text-5xl font-normal text-slate-50 tracking-tighter font-google-sans-flex mb-6" style={{animationDelay: '300ms'}}>
                Crafting digital <br className="hidden md:block"/>
<span className="dark:text-orange-500 font-normal text-orange-800 font-google-sans-flex">experiences.</span>
</h1>
<p className="dark:text-orange-400 leading-relaxed animate-reveal md:text-xl text-lg font-normal text-stone-50 font-google-sans-flex max-w-2xl mb-10" style={{animationDelay: '400ms'}}>
                I design and build intuitive, engaging, and scalable interfaces for forward-thinking companies. Bridging the gap between aesthetics and engineering.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-reveal" style={{animationDelay: '500ms'}}>
<a className="w-full sm:w-auto px-6 py-3 bg-orange-900 dark:bg-orange-50 text-orange-50 dark:text-orange-900 rounded-full text-sm hover:bg-orange-800 dark:hover:bg-orange-200 transition-all active:scale-95 shadow-sm font-sans" href="#work">
                    View My Work
                </a>
<a className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-orange-950 border border-orange-200 dark:border-orange-800 text-orange-900 dark:text-orange-50 rounded-full text-sm hover:bg-orange-50 dark:hover:bg-orange-900 transition-all active:scale-95 font-sans" href="#pricing">
                    View Pricing
                </a>
</div>
</section>

<section className="scroll-mt-24 max-w-6xl mt-20 mr-auto ml-auto pr-6 pb-24 pl-6" id="work">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[minmax(220px,auto)]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl border border-orange-200 dark:border-orange-800 bg-white dark:bg-orange-950/50 p-2 flex flex-col group overflow-hidden animate-reveal" style={{animationDelay: '600ms'}}>
<div className="p-6 pb-4 flex justify-between items-start">
<div className="">
<h3 className="text-2xl tracking-tight mb-1 font-google-sans-flex font-normal">Fintech App Refactor</h3>
<p className="text-sm text-orange-500 dark:text-orange-400 font-sans">Complete mobile banking interface redesign.</p>
</div>
<div className="w-8 h-8 rounded-full border border-orange-200 dark:border-orange-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-orange-50 dark:bg-orange-900">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="flex-1 bg-orange-100 dark:bg-orange-900 rounded-2xl mx-2 mb-2 overflow-hidden relative border border-orange-200/50 dark:border-orange-800/50 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/80 transition-colors">
<div className="absolute inset-x-8 -bottom-16 top-8 bg-white dark:bg-orange-950 rounded-t-2xl border-t border-x border-orange-200/50 dark:border-orange-800/50 shadow-sm transition-transform duration-500 group-hover:-translate-y-2"></div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 rounded-3xl border border-orange-900 dark:border-orange-100 bg-orange-900 dark:bg-orange-50 text-white dark:text-orange-900 p-8 flex flex-col justify-between relative overflow-hidden animate-reveal" style={{animationDelay: '700ms'}}>
<div className="absolute top-0 right-0 bg-white/10 dark:bg-black/10 w-48 h-48 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<iconify-icon className="text-3xl text-orange-400 dark:text-orange-500 mb-6" icon="solar:code-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-xl tracking-tight leading-tight max-w-md relative z-10 font-google-sans-flex font-normal">
                        Over 5 years of experience developing systematic design principles that scale across robust digital platforms.
                    </p>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-3xl border border-orange-200 dark:border-orange-800 bg-white dark:bg-orange-950/50 p-8 flex flex-col justify-between animate-reveal" style={{animationDelay: '800ms'}}>
<p className="text-xs text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-4 font-sans">Toolkit</p>
<div className="grid grid-cols-2 gap-3 mt-auto">
<div className="h-12 rounded-2xl border border-orange-200 dark:border-orange-800 flex items-center justify-center bg-orange-50 dark:bg-orange-900 hover:bg-orange-100 dark:hover:bg-orange-800 transition-colors">
<iconify-icon className="text-xl" icon="solar:figma-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="h-12 rounded-2xl border border-orange-200 dark:border-orange-800 flex items-center justify-center bg-orange-50 dark:bg-orange-900 hover:bg-orange-100 dark:hover:bg-orange-800 transition-colors">
<iconify-icon className="text-xl" icon="solar:monitor-smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="h-12 rounded-2xl border border-orange-200 dark:border-orange-800 flex items-center justify-center bg-orange-50 dark:bg-orange-900 hover:bg-orange-100 dark:hover:bg-orange-800 transition-colors">
<iconify-icon className="text-xl" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="h-12 rounded-2xl border border-orange-200 dark:border-orange-800 flex items-center justify-center bg-orange-50 dark:bg-orange-900 hover:bg-orange-100 dark:hover:bg-orange-800 transition-colors">
<iconify-icon className="text-xl" icon="solar:pen-new-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 rounded-3xl border border-orange-200 dark:border-orange-800 bg-white dark:bg-orange-950/50 p-2 flex flex-col group overflow-hidden animate-reveal" style={{animationDelay: '900ms'}}>
<div className="p-6 pb-4">
<h3 className="text-xl tracking-tight mb-1 font-google-sans-flex font-normal">Lumina Identity</h3>
<p className="text-sm text-orange-500 dark:text-orange-400 font-sans">Minimalist studio rebrand.</p>
</div>
<div className="flex-1 bg-orange-100 dark:bg-orange-900 rounded-2xl mx-2 mb-2 overflow-hidden relative border border-orange-200/50 dark:border-orange-800/50 flex items-center justify-center">
<div className="w-24 h-24 bg-white dark:bg-orange-950 rounded-full border border-orange-200/50 dark:border-orange-800/50 shadow-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
<iconify-icon className="text-3xl text-orange-900 dark:text-orange-50" icon="solar:pallete-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 rounded-3xl border border-orange-200 dark:border-orange-800 bg-white dark:bg-orange-950/50 p-8 animate-reveal flex flex-col justify-center" style={{animationDelay: '1000ms'}}>
<p className="text-xs text-orange-500 dark:text-orange-400 mb-6 uppercase tracking-widest font-sans">Experience</p>
<div className="space-y-6">
<div className="flex justify-between items-center group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900 border border-orange-200 dark:border-orange-800 flex items-center justify-center group-hover:border-orange-300 dark:group-hover:border-orange-700 transition-colors">
<iconify-icon className="text-base" icon="solar:briefcase-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-sm text-orange-900 dark:text-orange-50 font-sans">Lead Product Designer</p>
<p className="text-xs text-orange-500 dark:text-orange-400 font-sans">Acme Corporation</p>
</div>
</div>
<span className="text-xs text-orange-500 font-sans">2021 - Present</span>
</div>
<div className="flex justify-between items-center group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900 border border-orange-200 dark:border-orange-800 flex items-center justify-center group-hover:border-orange-300 dark:group-hover:border-orange-700 transition-colors">
<iconify-icon className="text-base" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm text-orange-900 dark:text-orange-50 font-sans">UX Engineer</p>
<p className="text-xs text-orange-500 dark:text-orange-400 font-sans">Globex Startups</p>
</div>
</div>
<span className="text-xs text-orange-500 font-sans">2018 - 2021</span>
</div>
</div>
</div>

<a className="md:col-span-1 md:row-span-1 rounded-3xl border border-orange-200 dark:border-orange-800 bg-white dark:bg-orange-950/50 p-8 flex flex-col justify-center items-center text-center group hover:bg-orange-50 dark:hover:bg-orange-900 transition-colors animate-reveal" href="#contact" style={{animationDelay: '1100ms'}}>
<div className="w-12 h-12 rounded-full border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base text-orange-900 dark:text-orange-50 tracking-tight mb-1 font-sans">Let's talk</p>
<p className="text-xs text-orange-500 dark:text-orange-400 font-sans">hello@gaintt.com</p>
</a>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 border-t border-orange-200/50 dark:border-orange-800/50 scroll-mt-16" id="process">
<div className="mb-16">
<h2 className="text-3xl tracking-tight mb-4 font-google-sans-flex font-normal">How I work</h2>
<p className="text-base text-orange-500 dark:text-orange-400 max-w-xl font-sans">A systematic and streamlined process to move seamlessly from raw concept to final deployment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">

<div className="relative pl-8 md:pl-0 md:pt-8 md:border-t border-l md:border-l-0 border-orange-200 dark:border-orange-800">
<div className="absolute w-3 h-3 bg-orange-50 dark:bg-orange-950 border-2 border-orange-300 dark:border-orange-600 rounded-full -left-[6.5px] top-0 md:left-0 md:-top-[6.5px]"></div>
<div className="mb-4">
<span className="text-xs text-orange-500 dark:text-orange-400 uppercase tracking-widest block mb-2 font-sans">Phase 01</span>
<h3 className="text-lg tracking-tight font-sans">Discovery &amp; Strategy</h3>
</div>
<p className="text-sm text-orange-500 dark:text-orange-400 leading-relaxed pr-6 font-sans">Understanding business objectives, conducting user research, and defining the core architecture before laying out a single pixel.</p>
</div>

<div className="relative pl-8 md:pl-0 md:pt-8 md:border-t border-l md:border-l-0 border-orange-200 dark:border-orange-800">
<div className="absolute w-3 h-3 bg-orange-50 dark:bg-orange-950 border-2 border-orange-300 dark:border-orange-600 rounded-full -left-[6.5px] top-0 md:left-0 md:-top-[6.5px]"></div>
<div className="mb-4">
<span className="text-xs text-orange-500 dark:text-orange-400 uppercase tracking-widest block mb-2 font-sans">Phase 02</span>
<h3 className="text-lg tracking-tight font-sans">Design &amp; Prototyping</h3>
</div>
<p className="text-sm text-orange-500 dark:text-orange-400 leading-relaxed pr-6 font-sans">Crafting high-fidelity wireframes, defining design systems, and building interactive prototypes for rapid validation.</p>
</div>

<div className="relative pl-8 md:pl-0 md:pt-8 md:border-t border-l md:border-l-0 border-orange-200 dark:border-orange-800">
<div className="absolute w-3 h-3 bg-orange-900 dark:bg-orange-50 border-2 border-orange-900 dark:border-orange-50 rounded-full -left-[6.5px] top-0 md:left-0 md:-top-[6.5px] shadow-[0_0_12px_rgba(0,0,0,0.2)] dark:shadow-[0_0_12px_rgba(255,255,255,0.3)]"></div>
<div className="mb-4">
<span className="text-xs text-orange-900 dark:text-orange-50 uppercase tracking-widest block mb-2 font-sans">Phase 03</span>
<h3 className="text-lg tracking-tight font-sans">Development &amp; Handoff</h3>
</div>
<p className="text-sm text-orange-500 dark:text-orange-400 leading-relaxed pr-6 font-sans">Translating precise designs into scalable, semantic code and ensuring flawless integration with engineering teams.</p>
</div>
</div>
</section>

<section className="dark:border-orange-800/50 dark:bg-orange-950/30 bg-white/30 max-w-6xl border-orange-200/50 border-t mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="max-w-3xl mx-auto text-center flex flex-col items-center">
<iconify-icon className="text-4xl text-orange-300 dark:text-orange-700 mb-8" icon="solar:quote-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-2xl md:text-4xl tracking-tight leading-tight mb-10 text-orange-900 dark:text-orange-50 font-google-sans-flex font-normal">
                    "Gaintt is exceptional. Their ability to translate complex logic into elegant, intuitive interfaces completely transformed our core product."
                </h2>
<div className="flex items-center justify-center gap-4 text-left">
<div className="w-12 h-12 rounded-full border border-orange-200 dark:border-orange-800 bg-orange-100 dark:bg-orange-900 flex items-center justify-center overflow-hidden">
<span className="text-sm tracking-tight font-sans">SJ</span>
</div>
<div>
<p className="text-sm text-orange-900 dark:text-orange-50 font-sans">Sarah Jenkins</p>
<p className="text-xs text-orange-500 dark:text-orange-400 font-sans">VP of Product at Horizon</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 border-t border-orange-200/50 dark:border-orange-800/50 scroll-mt-16" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight mb-4 font-google-sans-flex font-normal">Simple, transparent pricing</h2>
<p className="text-base text-orange-500 dark:text-orange-400 font-sans">Choose the engagement model that best fits your product phase.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="rounded-3xl border border-orange-200 dark:border-orange-800 bg-white dark:bg-orange-950/50 p-8 flex flex-col">
<h3 className="text-xl tracking-tight mb-2 font-google-sans-flex font-normal">Project Based</h3>
<p className="text-sm text-orange-500 dark:text-orange-400 mb-8 font-sans">Perfect for well-defined scopes and MVP builds.</p>
<div className="mb-8 pb-8 border-b border-orange-200/50 dark:border-orange-800/50">
<span className="text-4xl tracking-tight font-google-sans-flex font-normal">Custom</span>
<span className="text-sm text-orange-500 dark:text-orange-400 ml-1 font-sans">/project</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-orange-600 dark:text-orange-300 font-sans">
<iconify-icon className="text-orange-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Defined scope and timeline
                        </li>
<li className="flex items-start gap-3 text-sm text-orange-600 dark:text-orange-300 font-sans">
<iconify-icon className="text-orange-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Complete UX/UI overhaul
                        </li>
<li className="flex items-start gap-3 text-sm text-orange-600 dark:text-orange-300 font-sans">
<iconify-icon className="text-orange-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Developer handoff specs
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-orange-50 dark:bg-orange-900 border border-orange-200 dark:border-orange-800 text-center rounded-xl text-sm hover:bg-orange-100 dark:hover:bg-orange-800 transition-colors font-sans" href="#contact">Get an estimate</a>
</div>

<div className="rounded-3xl border border-orange-900 dark:border-orange-100 bg-orange-900 dark:bg-orange-50 text-white dark:text-orange-900 p-8 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-white/10 dark:bg-black/10 w-64 h-64 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none"></div>
<div className="flex justify-between items-center mb-2 relative z-10">
<h3 className="text-xl tracking-tight font-google-sans-flex font-normal">Retainer</h3>
<span className="px-2.5 py-1 text-[10px] uppercase tracking-widest bg-white/10 dark:bg-orange-900/10 rounded-full border border-white/20 dark:border-orange-900/20 font-sans">Popular</span>
</div>
<p className="text-sm text-orange-400 dark:text-orange-500 mb-8 relative z-10 font-sans">Ongoing design support integrated with your team.</p>
<div className="mb-8 pb-8 border-b border-orange-800 dark:border-orange-200 relative z-10">
<span className="text-4xl tracking-tight font-google-sans-flex font-normal">$3,500</span>
<span className="text-sm text-orange-400 dark:text-orange-500 ml-1 font-sans">/month</span>
</div>
<ul className="space-y-4 mb-10 flex-1 relative z-10">
<li className="flex items-start gap-3 text-sm font-sans">
<iconify-icon className="text-orange-400 dark:text-orange-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Pause or cancel anytime
                        </li>
<li className="flex items-start gap-3 text-sm font-sans">
<iconify-icon className="text-orange-400 dark:text-orange-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Async updates &amp; fast delivery
                        </li>
<li className="flex items-start gap-3 text-sm font-sans">
<iconify-icon className="text-orange-400 dark:text-orange-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Unlimited requests &amp; revisions
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-white dark:bg-orange-900 text-orange-900 dark:text-white text-center rounded-xl text-sm hover:bg-orange-100 dark:hover:bg-orange-800 transition-colors relative z-10 font-sans" href="#contact">Subscribe Now</a>
</div>
</div>
</section>
</main>

<footer className="border-t border-orange-200/50 dark:border-orange-800/50 bg-white dark:bg-orange-950 pt-16 pb-8" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-16">
<div className="mb-8 md:mb-0">
<span className="text-lg tracking-tighter uppercase block mb-4 font-sans">Gaintt</span>
<p className="text-xs text-orange-500 dark:text-orange-400 max-w-xs leading-relaxed font-sans">
                        Designing the next generation of intuitive interfaces. Functionality meets precision. Let's build something remarkable.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs mb-4 text-orange-900 dark:text-orange-50 font-sans">Sitemap</h4>
<ul className="space-y-3">
<li><a className="text-xs text-orange-500 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-50 transition-colors font-sans" href="#work">Work</a></li>
<li><a className="text-xs text-orange-500 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-50 transition-colors font-sans" href="#process">Process</a></li>
<li><a className="text-xs text-orange-500 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-50 transition-colors font-sans" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs mb-4 text-orange-900 dark:text-orange-50 font-sans">Social</h4>
<ul className="space-y-3">
<li><a className="text-xs text-orange-500 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-50 transition-colors font-sans" href="#">Twitter / X</a></li>
<li><a className="text-xs text-orange-500 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-50 transition-colors font-sans" href="#">LinkedIn</a></li>
<li><a className="text-xs text-orange-500 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-50 transition-colors font-sans" href="#">Dribbble</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-orange-200/50 dark:border-orange-800/50">
<p className="text-xs text-orange-500 dark:text-orange-500 mb-4 md:mb-0 font-sans">
                    © 2024 Gaintt. All rights reserved.
                </p>
<div className="flex gap-4">
<a className="text-orange-400 hover:text-orange-900 dark:hover:text-orange-50 transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:figma-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-orange-400 hover:text-orange-900 dark:hover:text-orange-50 transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:github-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
