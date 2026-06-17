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
      
<div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 sm:py-32">

<div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
<div className="max-w-2xl">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                    Choose the right website to start getting clients
                </h2>
<p className="mt-4 text-lg sm:text-xl text-gray-600">
                    Simple, fast, and built for real results — not just design.
                </p>
</div>

<div className="flex items-center gap-x-4 pb-2">
<div className="flex -space-x-2">
<div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-xs font-medium text-blue-700 tracking-tight">MR</div>
<div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-green-100 text-xs font-medium text-green-700 tracking-tight">SA</div>
<div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-xs font-medium text-amber-700 tracking-tight">YF</div>
<div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-purple-100 text-xs font-medium text-purple-700 tracking-tight">OK</div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-x-1">
<iconify-icon className="h-4 w-4 text-gray-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="h-4 w-4 text-gray-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="h-4 w-4 text-gray-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="h-4 w-4 text-gray-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="h-4 w-4 text-gray-900" icon="solar:star-bold"></iconify-icon>
<span className="ml-1 text-base font-semibold text-gray-900">5.0</span>
</div>
<span className="text-sm font-medium text-gray-600">from 150+ clients</span>
</div>
</div>
</div>

<div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">

<div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10 transition-shadow hover:shadow-md">
<h3 className="text-2xl font-medium tracking-tight text-gray-900">Landing Page</h3>
<div className="mt-4 flex items-baseline gap-x-2">
<span className="text-5xl font-semibold tracking-tight text-gray-900">600</span>
<span className="text-lg font-medium text-gray-500">dh</span>
</div>
<p className="mt-4 text-base text-gray-600">
                    Perfect for businesses that want a fast, high-converting page to get leads.
                </p>
<a className="mt-8 block rounded-xl bg-gray-900 px-4 py-3.5 text-center text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800" href="#">
                    Get started
                </a>
<hr className="my-8 border-gray-100"/>
<div className="flex-1">
<h4 className="text-sm font-medium uppercase tracking-wider text-gray-900">Features</h4>
<ul className="mt-6 space-y-4 text-base text-gray-600">
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Conversion-focused design</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>WhatsApp integration</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Mobile optimized</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Built for ads traffic</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Delivered in 3–5 days</span>
</li>
</ul>
</div>
</div>

<div className="relative flex flex-col rounded-3xl ring-2 ring-gray-900 bg-white p-8 shadow-xl sm:p-10 lg:z-10">
<div className="absolute right-8 top-8 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                    Recommended
                </div>
<h3 className="text-2xl font-medium tracking-tight text-gray-900">Business Website</h3>
<div className="mt-4 flex items-baseline gap-x-2">
<span className="text-5xl font-semibold tracking-tight text-gray-900">2500</span>
<span className="text-lg font-medium text-gray-500">dh</span>
</div>
<p className="mt-4 text-base text-gray-600">
                    A complete website designed to generate clients and build trust.
                </p>
<a className="mt-8 block rounded-xl bg-gray-900 px-4 py-3.5 text-center text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800" href="#">
                    Start getting clients
                </a>
<hr className="my-8 border-gray-100"/>
<div className="flex-1">
<h4 className="text-sm font-medium uppercase tracking-wider text-gray-900">Features</h4>
<ul className="mt-6 space-y-4 text-base text-gray-600">
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Up to 5 pages</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Conversion-focused layout</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>WhatsApp lead system</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>SEO-ready structure</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Mobile optimized</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Delivered in 5–7 days</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10 transition-shadow hover:shadow-md">
<h3 className="text-2xl font-medium tracking-tight text-gray-900">Advanced Website</h3>
<div className="mt-4 flex items-baseline gap-x-2">
<span className="text-lg font-medium text-gray-500">from</span>
<span className="text-5xl font-semibold tracking-tight text-gray-900">6000</span>
<span className="text-lg font-medium text-gray-500">dh</span>
</div>
<p className="mt-4 text-base text-gray-600">
                    For businesses that need a powerful, scalable website with custom features.
                </p>
<a className="mt-8 block rounded-xl bg-gray-900 px-4 py-3.5 text-center text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800" href="#">
                    Discuss your project
                </a>
<hr className="my-8 border-gray-100"/>
<div className="flex-1">
<h4 className="text-sm font-medium uppercase tracking-wider text-gray-900">Features</h4>
<ul className="mt-6 space-y-4 text-base text-gray-600">
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Custom design &amp; development</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Advanced pages &amp; sections</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>High performance optimization</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Flexible structure for growth</span>
</li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Tailored to your business needs</span>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-24 border-t border-gray-200 pt-16 sm:mt-32 sm:pt-24">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                    From a simple website… to a website that works for your business
                </h2>
<p className="mt-4 text-lg text-gray-600">
                    See the difference between a basic site and a professionally designed one.
                </p>
</div>
<div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12 relative">

<div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm z-20">
<span className="text-sm font-semibold text-gray-400">VS</span>
</div>

<div className="flex flex-col rounded-3xl bg-gray-50 border border-gray-200 p-6 sm:p-8 opacity-90 transition-opacity hover:opacity-100">
<div className="mb-6 flex items-center justify-between">
<span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Basic Website</span>
<span className="rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-600">Before</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-200 border border-gray-300 shadow-inner grayscale-[30%]">
<img alt="Basic, generic website example" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-x-3 text-base text-gray-500">
<iconify-icon className="h-6 w-6 shrink-0 text-gray-400" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>No clear structure</span>
</li>
<li className="flex items-center gap-x-3 text-base text-gray-500">
<iconify-icon className="h-6 w-6 shrink-0 text-gray-400" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Hard to navigate</span>
</li>
<li className="flex items-center gap-x-3 text-base text-gray-500">
<iconify-icon className="h-6 w-6 shrink-0 text-gray-400" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Doesn’t guide visitors</span>
</li>
</ul>
</div>

<div className="relative flex flex-col rounded-3xl bg-white p-6 sm:p-8 shadow-xl shadow-gray-900/10 ring-1 ring-gray-900/10 z-10 lg:scale-[1.03]">
<div className="mb-6 flex items-center justify-between">
<span className="text-sm font-semibold uppercase tracking-wider text-gray-900">Professional Website</span>
<span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">After</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/50 shadow-sm">
<img alt="Clean, modern professional website example" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-x-3 text-base font-medium text-gray-900">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Clear and structured layout</span>
</li>
<li className="flex items-center gap-x-3 text-base font-medium text-gray-900">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Easy to navigate</span>
</li>
<li className="flex items-center gap-x-3 text-base font-medium text-gray-900">
<iconify-icon className="h-6 w-6 shrink-0 text-green-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Designed to guide users</span>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-24 border-t border-gray-200 pt-16 sm:mt-32 sm:pt-24">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
                    A website designed and built for your business
                </h2>
<p className="mt-4 text-lg text-gray-600">
                    From Figma design to a fully functional website — built the right way for your needs.
                </p>
</div>
<div className="mt-12 grid grid-cols-1 items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">

<div className="relative w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-gray-900/10">
<div className="aspect-[4/3] w-full bg-gray-100">
<img alt="Professional workspace with UI design on screen" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>

<div className="flex flex-col">
<h3 className="mb-6 text-xl font-medium tracking-tight text-gray-900">Key Features</h3>
<div className="space-y-4">
<div className="flex items-center gap-x-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 transition-colors hover:bg-gray-50/50">
<iconify-icon className="h-6 w-6 shrink-0 text-gray-900" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base font-medium text-gray-800">Custom design created in Figma</span>
</div>
<div className="flex items-center gap-x-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 transition-colors hover:bg-gray-50/50">
<iconify-icon className="h-6 w-6 shrink-0 text-gray-900" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base font-medium text-gray-800">Built on WordPress or custom code</span>
</div>
<div className="flex items-center gap-x-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 transition-colors hover:bg-gray-50/50">
<iconify-icon className="h-6 w-6 shrink-0 text-gray-900" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base font-medium text-gray-800">Structured for clarity and performance</span>
</div>
<div className="flex items-center gap-x-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 transition-colors hover:bg-gray-50/50">
<iconify-icon className="h-6 w-6 shrink-0 text-gray-900" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base font-medium text-gray-800">Mobile responsive and easy to use</span>
</div>
<div className="flex items-center gap-x-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 transition-colors hover:bg-gray-50/50">
<iconify-icon className="h-6 w-6 shrink-0 text-gray-900" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base font-medium text-gray-800">Adapted to your business goals</span>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
