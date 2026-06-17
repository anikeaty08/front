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
      

<nav className="fixed z-50 bg-white/80 w-full border-gray-100 border-b top-0 backdrop-blur-md">
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-grid">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-gray-600 tracking-tight">Website Proposal</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold text-gray-900 tracking-tighter mb-6">
                Website Proposal for <br className="hidden md:block"/> MTO Markets
            </h1>
<p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto tracking-tight mb-10">
                Designing a trustworthy, scalable, and high-performing digital presence for a bespoke investment consultancy.
            </p>
<button className="group inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-0.5">
<span>View Packages</span>
<iconify-icon className="text-lg group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
</header>

<section className="border-gray-100 border-b pt-20 pr-6 pb-20 pl-6">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-5 space-y-6">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-900">
<iconify-icon icon="solar:target-linear" width="18"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-gray-900 tracking-tight">The Goal</h2>
</div>
<p className="md:text-base leading-relaxed text-sm text-gray-600" style={{}}>You need a professional, corporate website similar to Quaneqo Group, but with better structure and distinct landing pages for your asset classes (Whiskey, Art, Property).</p>
<p className="text-sm md:text-base leading-relaxed text-gray-600">
                        The site must communicate trust, authority, and clarity without being "over-designed."
                    </p>
</div>

<div className="lg:col-span-7 space-y-8">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 text-gray-900">
<iconify-icon className="" icon="solar:ruler-pen-linear" width="18"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-gray-900 tracking-tight">My Solution</h2>
</div>
<p className="text-sm md:text-base leading-relaxed text-gray-600 border-l-2 border-gray-200 pl-4">
                        I propose a modern, scalable digital platform built on Webflow designed to support your growth. This ensures:
                    </p>
<div className="grid sm:grid-cols-3 gap-6">

<div className="group">
<div className="mb-3 text-gray-400 group-hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-2">Speed &amp; Security</h3>
<p className="text-xs text-gray-500 leading-relaxed">No plugins to break, bank-grade hosting.</p>
</div>

<div className="group">
<div className="mb-3 text-gray-400 group-hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-2">Scalability</h3>
<p className="text-xs text-gray-500 leading-relaxed">A custom CMS structure allowing you to manage investment opportunities easily.</p>
</div>

<div className="group">
<div className="mb-3 text-gray-400 group-hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-2">Conversion Focus</h3>
<p className="text-xs text-gray-500 leading-relaxed">Clear user journeys for high-net-worth individuals.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50/50 pt-20 pr-6 pb-20 pl-6">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">The Process</h2>
<p className="text-gray-500 text-sm max-w-lg">A transparent, step-by-step workflow designed to ensure precision and remove ambiguity.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-gray-900 text-2xl" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-xs font-mono text-gray-400">WK 1</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-2">Step 1: Discovery &amp; UX</h3>
<p className="text-xs text-gray-500 leading-relaxed">
                        We define the site map and content structure. I will create wireframes to ensure the user flow makes sense before we touch any colors.
                    </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-gray-900 text-2xl" icon="solar:palette-linear"></iconify-icon>
<span className="text-xs font-mono text-gray-400">WK 2</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-2">Step 2: Visual Design</h3>
<p className="text-xs text-gray-500 leading-relaxed">
                        I will design high-fidelity mockups in Figma. We focus on typography, whitespace, and a premium "institutional" feel. Two rounds of revisions included.
                    </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-gray-900 text-2xl" icon="solar:code-square-linear"></iconify-icon>
<span className="text-xs font-mono text-gray-400">WK 3</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-2">Step 3: Webflow Dev</h3>
<p className="text-xs text-gray-500 leading-relaxed">
                        Pixel-perfect development. I will set up the CMS (Content Management System) for your portfolio and ensure the site is fully responsive.
                    </p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-gray-900 text-2xl" icon="solar:rocket-2-linear"></iconify-icon>
<span className="text-xs font-mono text-gray-400">WK 4</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-2">Step 4: Launch &amp; Handover</h3>
<p className="text-xs text-gray-500 leading-relaxed">
                        Final testing, SEO setup, domain connection, and a personalized training session on how to update your site.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mr-auto ml-auto">
<h2 className="text-2xl font-semibold text-center text-gray-900 tracking-tight mb-12">Investment Options</h2>
<div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">

<div className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors bg-white h-full flex flex-col justify-between">
<div className="">
<div className="mb-6">
<h3 className="text-lg font-semibold text-gray-900 mb-1">Option 1: Essential Launch</h3>
<p className="text-xs text-gray-500 mb-4 h-8">Best for getting online fast with a professional look.</p>
<div className="text-3xl font-semibold text-gray-900 tracking-tight">$1,500</div>
<div className="text-xs text-gray-400 mt-1">Timeline: 2 Weeks</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Customization of a premium Webflow framework</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">5 Core Pages (Home, About, Services, Contact, Legal)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Mobile Optimization</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Basic Contact Form</span>
</li>
</ul>
</div>
<div className="py-3 px-4 bg-gray-50 rounded-lg text-xs text-gray-500 border border-gray-100 flex gap-2">
<iconify-icon className="mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
                        Note: Static content only (No CMS).
                    </div>
</div>

<div className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors bg-white relative h-full flex flex-col justify-between">
<div className="absolute top-0 right-0 bg-gray-100 text-gray-600 text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg tracking-wide border-l border-b border-gray-100">Recommended</div>
<div className="">
<div className="mb-6">
<h3 className="text-lg font-semibold text-gray-900 mb-1">Option 2: Business &amp; CMS</h3>
<p className="text-xs text-gray-500 mb-4 h-8">Best for showcasing multiple asset classes.</p>
<div className="text-3xl font-semibold text-gray-900 tracking-tight">$2,500</div>
<div className="text-xs text-gray-400 mt-1">Timeline: 3–4 Weeks</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-900 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Fully Custom Design (built from scratch)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-900 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">CMS Integration: Easily add/edit investment opportunities</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Up to 10 Pages (Asset Landing Pages)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Advanced Lead Gen Forms</span>
</li>
</ul>
</div>
<button className="w-full bg-gray-900 text-white py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">Select Option 2</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-gray-100 bg-gray-50">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
<div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm text-gray-900">
<iconify-icon icon="solar:server-square-cloud-linear" width="32"></iconify-icon>
</div>
<div className="">
<h2 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">Why I build on Webflow</h2>
<p className="text-sm md:text-base leading-relaxed text-gray-600">
                    Unlike WordPress, Webflow gives us total design freedom without the bloat of unstable plugins. It allows for cleaner code, faster loading times (crucial for SEO), and an editor interface that is incredibly easy for your team to use.
                </p>
</div>
</div>
</section>


    </>
  );
}
