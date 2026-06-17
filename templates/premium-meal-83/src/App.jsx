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



      // Ensure Iconify loads consistently and set a subtle linear icon weight via attribute where supported
      document.querySelectorAll("iconify-icon").forEach((el) => {
        el.setAttribute("stroke-width", "1.5");
      });
    
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
      

<aside className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 w-64">
<div className="rounded-2xl border border-zinc-200/70 bg-white">
<div className="p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl border border-zinc-200/70 bg-white grid place-items-center">
<iconify-icon className="text-zinc-700 text-base" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-zinc-950">Navigation</p>
<p className="text-sm text-zinc-500">Desktop menu</p>
</div>
</div>
</div>
<div className="px-3 pb-3">
<nav className="space-y-1">
<a className="flex items-center gap-3 rounded-xl bg-zinc-950 px-3 py-2.5" href="#">
<span className="h-9 w-9 rounded-lg border border-white/10 bg-white/5 grid place-items-center">
<iconify-icon className="text-white text-base" icon="solar:widget-2-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="text-sm font-medium text-white">Dashboard</span>
</a>
<a className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-zinc-50 transition-colors" href="#">
<span className="h-9 w-9 rounded-lg border border-zinc-200/70 bg-white grid place-items-center">
<iconify-icon className="text-zinc-700 text-base" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="text-sm font-medium text-zinc-900">Settings</span>
</a>
<a className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-zinc-50 transition-colors" href="#">
<span className="h-9 w-9 rounded-lg border border-zinc-200/70 bg-white grid place-items-center">
<iconify-icon className="text-zinc-700 text-base" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="text-sm font-medium text-zinc-900">Meal planner</span>
</a>
<div className="pt-2">
<div className="h-px w-full bg-zinc-200/70"></div>
</div>
<a className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-zinc-50 transition-colors" href="#">
<span className="h-9 w-9 rounded-lg border border-zinc-200/70 bg-white grid place-items-center">
<iconify-icon className="text-zinc-700 text-base" icon="solar:logout-2-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="text-sm font-medium text-zinc-900">Log Out</span>
</a>
</nav>
</div>
</div>
</aside>
<main className="relative">

<header className="mx-auto max-w-6xl px-6 pt-10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-zinc-950 grid place-items-center">
<span className="text-sm font-semibold text-white tracking-tight">U</span>
</div>
<div className="leading-tight">
<p className="text-sm font-semibold text-zinc-950">Untitled</p>
<p className="text-sm text-zinc-500">Premium nutrition</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-zinc-500">
<span className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/70 bg-white px-3 py-2">
<iconify-icon className="text-zinc-600 text-base" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium text-zinc-700">Secure checkout</span>
</span>
</div>
</div>
</header>

<section className="mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
<div className="grid items-center gap-12 lg:grid-cols-12">

<div className="lg:col-span-5">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-zinc-950">
                Precision-made meals.
              </h1>
<p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-md">
                Clean ingredients. Clear macros. Designed to be the simplest part of your day.
              </p>
<div className="flex flex-col sm:flex-row sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-900 transition-colors" href="#">
<span>Start your plan</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200/70 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon className="text-base text-zinc-700" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
<span>View menu</span>
</a>
</div>
<div className="flex flex-wrap gap-6 pt-4 text-sm text-zinc-500">
<div className="inline-flex items-center gap-2">
<span className="h-8 w-8 rounded-xl border border-zinc-200/70 bg-white grid place-items-center">
<iconify-icon className="text-zinc-700 text-base" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span>Protected ordering</span>
</div>
<div className="inline-flex items-center gap-2">
<span className="h-8 w-8 rounded-xl border border-zinc-200/70 bg-white grid place-items-center">
<iconify-icon className="text-zinc-700 text-base" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span>Ready in minutes</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="rounded-2xl border border-zinc-200/70 bg-white overflow-hidden">
<div className="p-5 sm:p-7">
<div className="flex items-start justify-between gap-6">
<div className="min-w-0">
<p className="text-sm font-semibold text-zinc-950">Seared Salmon + Citrus Greens</p>
<p className="text-sm text-zinc-500 mt-1">42g protein · 510 kcal · gluten-free</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-zinc-500">
<span className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/70 bg-white px-3 py-2">
<iconify-icon className="text-zinc-700 text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium text-zinc-700">5.0</span>
<span>(1k+)</span>
</span>
</div>
</div>
<div className="mt-7 rounded-2xl border border-zinc-200/70 bg-white overflow-hidden">
<div className="aspect-[16/10] w-full">
<img alt="Featured meal placeholder" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
<div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="text-sm text-zinc-500">
                    Subscribe for weekly delivery or order once.
                  </div>
<a className="inline-flex items-center justify-center rounded-xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-900 transition-colors" href="#">
                    Add to cart
                  </a>
</div>
</div>
</div>
<div className="mt-10 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-zinc-200/70 bg-white px-4 py-4">
<p className="text-sm font-semibold text-zinc-950">Simple</p>
<p className="text-sm text-zinc-500 mt-1">No guesswork.</p>
</div>
<div className="rounded-2xl border border-zinc-200/70 bg-white px-4 py-4">
<p className="text-sm font-semibold text-zinc-950">Consistent</p>
<p className="text-sm text-zinc-500 mt-1">Every week.</p>
</div>
<div className="rounded-2xl border border-zinc-200/70 bg-white px-4 py-4">
<p className="text-sm font-semibold text-zinc-950">Clean</p>
<p className="text-sm text-zinc-500 mt-1">Real ingredients.</p>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
