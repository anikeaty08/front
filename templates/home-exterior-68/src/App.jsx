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
      

<header className="border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-zinc-900 uppercase" href="/">
                EXTERIOR
            </a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="/doors">Doors</a>
<a className="hover:text-zinc-900 transition-colors" href="/windows">Windows</a>
<a className="hover:text-zinc-900 transition-colors" href="/siding">Siding</a>
<a className="hover:text-zinc-900 transition-colors" href="/roofing">Roofing</a>
</nav>
</div>
</header>
<main>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
<nav aria-label="Breadcrumb" className="flex text-sm text-zinc-500">
<ol className="flex items-center space-x-2">
<li><a className="hover:text-zinc-900 transition-colors" href="/">Home</a></li>
<li><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon></li>
<li><a className="hover:text-zinc-900 transition-colors" href="/nj/mercer-county">Mercer County</a></li>
<li><iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon></li>
<li aria-current="page" className="text-zinc-900 font-medium">Princeton</li>
</ol>
</nav>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-sm font-medium text-zinc-600 mb-6">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    Local Service Area
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 leading-tight">
                    Doors &amp; Home Exterior Services in Princeton, NJ
                </h1>
<p className="text-lg text-zinc-600 leading-relaxed">
                    Upgrade your Princeton home's curb appeal, security, and energy efficiency with our premium exterior remodeling services. From historically accurate custom entry doors to high-performance siding and roofing, we bring top-tier craftsmanship to every neighborhood in Princeton, NJ.
                </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/50">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-10">
                Our Services in Princeton
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group block p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-200 flex flex-col h-full relative overflow-hidden" href="/doors">
<div className="w-12 h-12 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:door-open-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-2">Entry &amp; Patio Doors</h3>
<p className="text-sm text-zinc-600 mb-8 flex-grow">Enhance your entryway with energy-efficient, secure, and beautiful doors tailored to your home's architecture.</p>
<div className="flex items-center text-sm font-medium text-zinc-900 mt-auto">
                        Explore doors <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group block p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-200 flex flex-col h-full relative overflow-hidden" href="/windows">
<div className="w-12 h-12 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:window-frame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-2">Replacement Windows</h3>
<p className="text-sm text-zinc-600 mb-8 flex-grow">Lower your energy bills and draft-proof your home with modern, high-clarity window installations.</p>
<div className="flex items-center text-sm font-medium text-zinc-900 mt-auto">
                        Explore windows <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group block p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-200 flex flex-col h-full relative overflow-hidden" href="/siding">
<div className="w-12 h-12 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-2">Siding Installation</h3>
<p className="text-sm text-zinc-600 mb-8 flex-grow">Protect your exterior from the New Jersey weather with durable vinyl, fiber cement, or wood siding.</p>
<div className="flex items-center text-sm font-medium text-zinc-900 mt-auto">
                        Explore siding <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group block p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-200 flex flex-col h-full relative overflow-hidden" href="/roofing">
<div className="w-12 h-12 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:roof-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-2">Roofing Systems</h3>
<p className="text-sm text-zinc-600 mb-8 flex-grow">Complete roof replacements and repairs ensuring your home stays dry and insulated year-round.</p>
<div className="flex items-center text-sm font-medium text-zinc-900 mt-auto">
                        Explore roofing <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/50">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-2">
                        Recent Projects in Princeton
                    </h2>
<p className="text-zinc-600">See our craftsmanship in local neighborhoods.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="/portfolio">
                    View full portfolio <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-[4/3]">
<img alt="Modern entry door installed in Princeton" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium tracking-tight">Custom Entry Door installation</span>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-[4/3]">
<img alt="Window replacement in Princeton, NJ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium tracking-tight">Full Home Window Replacement</span>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-[4/3] sm:col-span-2 lg:col-span-1">
<img alt="New siding and roofing in Princeton" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium tracking-tight">Fiber Cement Siding Upgrade</span>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-zinc-200/50">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-8 text-center">
                Princeton Exterior Remodeling FAQs
            </h2>
<div className="divide-y divide-zinc-200 border-y border-zinc-200">

<details className="group py-6" style={{cursor: 'pointer'}}>
<summary className="flex items-center justify-between text-lg font-medium text-zinc-900 tracking-tight list-none focus:outline-none" style={{listStyle: 'none', userSelect: 'none'}}>
<span>Do I need a permit for a new entry door in Princeton?</span>
<span className="ml-6 flex items-center justify-center w-6 h-6 rounded-full border border-zinc-200 text-zinc-500 group-open:rotate-180 transition-transform duration-200">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pt-4 pr-12 text-zinc-600 leading-relaxed">
                        In most cases, replacing a door within the existing frame does not require a permit in Princeton. However, if we are altering the structure, widening the opening, or working within a historic district, specific permits from the Princeton building department will be necessary. We handle all permit applications for our projects.
                    </div>
</details>

<details className="group py-6" style={{cursor: 'pointer'}}>
<summary className="flex items-center justify-between text-lg font-medium text-zinc-900 tracking-tight list-none focus:outline-none" style={{listStyle: 'none', userSelect: 'none'}}>
<span>What is the best siding material for Princeton's climate?</span>
<span className="ml-6 flex items-center justify-center w-6 h-6 rounded-full border border-zinc-200 text-zinc-500 group-open:rotate-180 transition-transform duration-200">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pt-4 pr-12 text-zinc-600 leading-relaxed">
                        Given the distinct seasons in Princeton, fiber cement siding is highly recommended. It withstands the freeze-thaw cycles of New Jersey winters and resists moisture and humidity in the summer. It also offers a classic wood-grain look that complements many historic and traditional Princeton homes.
                    </div>
</details>

<details className="group py-6" style={{cursor: 'pointer'}}>
<summary className="flex items-center justify-between text-lg font-medium text-zinc-900 tracking-tight list-none focus:outline-none" style={{listStyle: 'none', userSelect: 'none'}}>
<span>How long does window replacement typically take in Princeton, NJ?</span>
<span className="ml-6 flex items-center justify-center w-6 h-6 rounded-full border border-zinc-200 text-zinc-500 group-open:rotate-180 transition-transform duration-200">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pt-4 pr-12 text-zinc-600 leading-relaxed">
                        For a standard-sized home in Princeton, window replacement usually takes 1 to 3 days once the custom windows arrive. We work efficiently, replacing one window at a time to minimize exposure to the elements and ensure your home remains secure overnight.
                    </div>
</details>

<details className="group py-6" style={{cursor: 'pointer'}}>
<summary className="flex items-center justify-between text-lg font-medium text-zinc-900 tracking-tight list-none focus:outline-none" style={{listStyle: 'none', userSelect: 'none'}}>
<span>Do you offer doors compliant with Princeton historic district guidelines?</span>
<span className="ml-6 flex items-center justify-center w-6 h-6 rounded-full border border-zinc-200 text-zinc-500 group-open:rotate-180 transition-transform duration-200">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pt-4 pr-12 text-zinc-600 leading-relaxed">
                        Yes, we have extensive experience working with the Princeton Historic Preservation Commission. We offer custom wood and high-end fiberglass doors that meet strict historical guidelines while providing modern energy efficiency and security.
                    </div>
</details>

<details className="group py-6" style={{cursor: 'pointer'}}>
<summary className="flex items-center justify-between text-lg font-medium text-zinc-900 tracking-tight list-none focus:outline-none" style={{listStyle: 'none', userSelect: 'none'}}>
<span>Who handles the old material disposal during a project in Princeton?</span>
<span className="ml-6 flex items-center justify-center w-6 h-6 rounded-full border border-zinc-200 text-zinc-500 group-open:rotate-180 transition-transform duration-200">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pt-4 pr-12 text-zinc-600 leading-relaxed">
                        We manage the complete cleanup and disposal process. Whether we are tearing off an old roof or removing dozens of windows from your Princeton home, our team provides dumpsters, daily debris sweeps, and responsible disposal of all materials.
                    </div>
</details>
</div>
</section>
<style>
            /* Hide the default marker for details/summary in webkit browsers */
            details > summary::-webkit-details-marker {
                display: none;
            }
        </style>
</main>

<footer className="bg-white border-t border-zinc-200 py-12 mt-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-4 uppercase">Main Services</h3>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors inline-flex items-center" href="/doors"><iconify-icon className="mr-2 text-zinc-400" icon="solar:minimalistic-magnifer-linear"></iconify-icon> Entry &amp; Patio Doors</a></li>
<li><a className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors inline-flex items-center" href="/windows"><iconify-icon className="mr-2 text-zinc-400" icon="solar:minimalistic-magnifer-linear"></iconify-icon> Replacement Windows</a></li>
<li><a className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors inline-flex items-center" href="/siding"><iconify-icon className="mr-2 text-zinc-400" icon="solar:minimalistic-magnifer-linear"></iconify-icon> Siding Installation</a></li>
<li><a className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors inline-flex items-center" href="/roofing"><iconify-icon className="mr-2 text-zinc-400" icon="solar:minimalistic-magnifer-linear"></iconify-icon> Roofing Systems</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-4 uppercase">Locations</h3>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors inline-flex items-center" href="/nj/mercer-county"><iconify-icon className="mr-2 text-zinc-400" icon="solar:map-arrow-left-linear"></iconify-icon> Back to Mercer County</a></li>
<li><a className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors inline-flex items-center" href="/nj"><iconify-icon className="mr-2 text-zinc-400" icon="solar:map-linear"></iconify-icon> View all New Jersey areas</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xl font-semibold tracking-tight text-zinc-900 uppercase">
                    EXTERIOR
                </div>
<p className="text-sm text-zinc-500">
                    © 2024 Exterior Services. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
