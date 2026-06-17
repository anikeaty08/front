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
      
<main className="mx-auto max-w-7xl px-6 py-12">
<header className="mb-12 text-center">
<h1 className="text-4xl tracking-tight font-semibold text-slate-900 mb-4">Button Components</h1>
<p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive button system showcasing both light and dark mode variants with consistent design patterns across all states and sizes.</p>
</header>
<div className="grid lg:grid-cols-2 gap-8">

<div className="space-y-8">
<div className="text-center mb-6">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/80">
<svg className="h-4 w-4 text-amber-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></svg>
<span className="text-sm font-medium text-slate-700">Light Mode</span>
</div>
</div>

<section className="rounded-xl border border-slate-200 p-6 bg-white/60 backdrop-blur-sm">
<h2 className="text-xl tracking-tight font-medium text-slate-900 mb-6">Primary Buttons</h2>
<div className="flex flex-wrap items-center gap-4 mb-6">

<button className="button-primary-light inline-flex h-7 items-center justify-center gap-[6px] px-2 text-[13px] leading-[20px] font-medium transition-all duration-200 hover:shadow-md hover:brightness-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500" type="button">
<svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
<span>Small</span>
</button>

<button className="button-primary-light inline-flex h-9 items-center justify-center gap-[6px] px-3.5 text-[14px] leading-[22px] font-medium transition-all duration-200 hover:shadow-md hover:brightness-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500" type="button">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-8H7v8"></path><path d="M7 3v5h8"></path><path d="M7 3h10l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></path></svg>
<span>Save</span>
</button>

<button className="button-primary-light inline-flex h-11 items-center justify-center gap-2 px-4 text-[15px] leading-[24px] font-medium transition-all duration-200 hover:shadow-md hover:brightness-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500" type="button">
<span>Continue</span>
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>

<button aria-label="Settings" className="button-primary-light inline-flex h-9 w-9 items-center justify-center transition-all duration-200 hover:shadow-md hover:brightness-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500" type="button">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>

<button aria-live="polite" className="button-primary-light inline-flex h-9 items-center justify-center gap-2 px-3.5 text-[14px] leading-[22px] font-medium text-white/90 cursor-wait focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500" type="button">
<svg className="h-[16px] w-[16px] animate-spin" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
<span>Loading…</span>
</button>
</div>

<div className="mb-4">
<p className="text-sm font-medium text-slate-600 mb-3">Pill variant</p>
<button className="button-primary-light inline-flex h-9 items-center justify-center gap-[6px] rounded-full px-4 text-[14px] leading-[22px] font-medium transition-all duration-200 hover:shadow-md hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500" type="button">
<span>Get started</span>
</button>
</div>
</section>

<section className="rounded-xl border border-slate-200 p-6 bg-white/60 backdrop-blur-sm">
<h2 className="text-xl tracking-tight font-medium text-slate-900 mb-6">Success &amp; Danger</h2>
<div className="space-y-4">
<div>
<p className="text-sm font-medium text-slate-600 mb-3">Success</p>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex h-9 items-center justify-center gap-[6px] rounded-md px-3.5 text-[14px] leading-[22px] font-medium text-white transition-all duration-200 hover:shadow-md hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500" style={{background: 'linear-gradient(to bottom, #16a34a, #15803d)', border: '1px solid #15803d', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}} type="button">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
<span>Confirm</span>
</button>
<button className="inline-flex h-7 items-center justify-center gap-[6px] rounded-md px-2 text-[13px] leading-[20px] font-medium text-white transition-all duration-200 hover:shadow-md hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500" style={{background: 'linear-gradient(to bottom, #16a34a, #15803d)', border: '1px solid #15803d', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}} type="button">
<span>Small</span>
</button>
</div>
</div>
<div>
<p className="text-sm font-medium text-slate-600 mb-3">Danger</p>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex h-9 items-center justify-center gap-[6px] rounded-md px-3.5 text-[14px] leading-[22px] font-medium text-white transition-all duration-200 hover:shadow-md hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500" style={{background: 'linear-gradient(to bottom, #dc2626, #b91c1c)', border: '1px solid #b91c1c', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}} type="button">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>
<span>Delete</span>
</button>
<button aria-label="Remove" className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white transition-all duration-200 hover:shadow-md hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500" style={{background: 'linear-gradient(to bottom, #dc2626, #b91c1c)', border: '1px solid #b91c1c', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}} type="button">
<svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="rounded-xl border border-slate-200 p-6 bg-white/60 backdrop-blur-sm">
<h2 className="text-xl tracking-tight font-medium text-slate-900 mb-6">Outline &amp; Ghost</h2>
<div className="space-y-4">
<div>
<p className="text-sm font-medium text-slate-600 mb-3">Outline</p>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex h-9 items-center justify-center gap-[6px] rounded-md px-3.5 text-[14px] leading-[22px] font-medium text-slate-700 bg-white/80 border border-slate-300 transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'}} type="button">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.07 0l1.83-1.83a5 5 0 0 0-7.07-7.07L10 5"></path><path d="M14 11a5 5 0 0 0-7.07 0L5.1 12.83a5 5 0 1 0 7.07 7.07L14 19"></path></svg>
<span>Copy link</span>
</button>
<button className="inline-flex h-7 items-center justify-center gap-[6px] rounded-md px-2 text-[13px] leading-[20px] font-medium text-slate-700 bg-white/80 border border-slate-300 transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'}} type="button">
<span>Small</span>
</button>
</div>
</div>
<div>
<p className="text-sm font-medium text-slate-600 mb-3">Ghost</p>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex h-9 items-center justify-center gap-[6px] rounded-md px-3.5 text-[14px] leading-[22px] font-medium text-slate-600 bg-transparent transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" type="button">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>Preview</span>
</button>
<button aria-label="More options" className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-700 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" type="button">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
</div>
</section>

<section className="rounded-xl border border-slate-200 p-6 bg-white/60 backdrop-blur-sm">
<h2 className="text-xl tracking-tight font-medium text-slate-900 mb-6">Full-width</h2>
<div className="space-y-3">
<button className="button-primary-light inline-flex w-full h-11 items-center justify-center gap-2 px-4 text-[15px] leading-[24px] font-medium transition-all duration-200 hover:shadow-md hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500" type="button">
<span>Continue with Email</span>
</button>
<button className="inline-flex w-full h-11 items-center justify-center gap-2 rounded-md px-4 text-[15px] leading-[24px] font-medium text-slate-700 bg-white/80 border border-slate-300 transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" style={{boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'}} type="button">
<span>Learn more</span>
</button>
</div>
</section>
</div>

<div className="space-y-8 bg-neutral-950 rounded-2xl p-8">
<div className="text-center mb-6">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/80 backdrop-blur-sm rounded-full border border-neutral-800">
<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
<span className="text-sm font-medium text-neutral-300">Dark Mode</span>
</div>
</div>

<section className="rounded-xl border border-white/10 p-6 bg-neutral-900/40 backdrop-blur-sm">
<h2 className="text-xl tracking-tight font-medium text-white mb-6">Primary Buttons</h2>
<div className="flex flex-wrap items-center gap-4 mb-6">

<button className="button-primary-dark inline-flex h-7 items-center justify-center gap-[6px] px-2 text-[13px] leading-[20px] font-medium transition-all duration-200 hover:brightness-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" type="button">
<svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
<span>Small</span>
</button>

<button className="button-primary-dark inline-flex h-9 items-center justify-center gap-[6px] px-3.5 text-[14px] leading-[22px] font-medium transition-all duration-200 hover:brightness-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" type="button">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-8H7v8"></path><path d="M7 3v5h8"></path><path d="M7 3h10l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></path></svg>
<span>Save</span>
</button>

<button className="button-primary-dark inline-flex h-11 items-center justify-center gap-2 px-4 text-[15px] leading-[24px] font-medium transition-all duration-200 hover:brightness-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" type="button">
<span>Continue</span>
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>

<button aria-label="Settings" className="button-primary-dark inline-flex h-9 w-9 items-center justify-center transition-all duration-200 hover:brightness-95 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" type="button">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>

<button aria-live="polite" className="button-primary-dark inline-flex h-9 items-center justify-center gap-2 px-3.5 text-[14px] leading-[22px] font-medium text-white/90 cursor-wait focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" type="button">
<svg className="h-[16px] w-[16px] animate-spin" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
<span>Loading…</span>
</button>
</div>

<div className="mb-4">
<p className="text-sm font-medium text-neutral-400 mb-3">Pill variant</p>
<button className="button-primary-dark inline-flex h-9 items-center justify-center gap-[6px] rounded-full px-4 text-[14px] leading-[22px] font-medium transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" type="button">
<span>Get started</span>
</button>
</div>
</section>

<section className="rounded-xl border border-white/10 p-6 bg-neutral-900/40 backdrop-blur-sm">
<h2 className="text-xl tracking-tight font-medium text-white mb-6">Success &amp; Danger</h2>
<div className="space-y-4">
<div>
<p className="text-sm font-medium text-neutral-400 mb-3">Success</p>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex h-9 items-center justify-center gap-[6px] rounded-md px-3.5 text-[14px] leading-[22px] font-medium text-white transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400" style={{backgroundColor: '#16a34a', border: '1px solid #15803d', boxShadow: 'rgba(14, 63, 126, .04) 0px 0px 0px 1px, rgba(42, 51, 69, .04) 0px 1px 1px -.5px, rgba(42, 51, 70, .04) 0px 3px 3px -1.5px, rgba(42, 51, 70, .04) 0px 6px 6px -3px, rgba(14, 63, 126, .04) 0px 12px 12px -6px, rgba(14, 63, 126, .04) 0px 24px 24px -12px, inset 0 1px 0 rgba(255,255,255,.2)'}} type="button">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
<span>Confirm</span>
</button>
<button className="inline-flex h-7 items-center justify-center gap-[6px] rounded-md px-2 text-[13px] leading-[20px] font-medium text-white transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400" style={{backgroundColor: '#16a34a', border: '1px solid #15803d', boxShadow: 'rgba(14, 63, 126, .04) 0px 0px 0px 1px, rgba(42, 51, 69, .04) 0px 1px 1px -.5px, rgba(42, 51, 70, .04) 0px 3px 3px -1.5px, rgba(42, 51, 70, .04) 0px 6px 6px -3px, rgba(14, 63, 126, .04) 0px 12px 12px -6px, rgba(14, 63, 126, .04) 0px 24px 24px -12px, inset 0 1px 0 rgba(255,255,255,.2)'}} type="button">
<span>Small</span>
</button>
</div>
</div>
<div>
<p className="text-sm font-medium text-neutral-400 mb-3">Danger</p>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex h-9 items-center justify-center gap-[6px] rounded-md px-3.5 text-[14px] leading-[22px] font-medium text-white transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400" style={{backgroundColor: '#dc2626', border: '1px solid #b91c1c', boxShadow: 'rgba(14, 63, 126, .04) 0px 0px 0px 1px, rgba(42, 51, 69, .04) 0px 1px 1px -.5px, rgba(42, 51, 70, .04) 0px 3px 3px -1.5px, rgba(42, 51, 70, .04) 0px 6px 6px -3px, rgba(14, 63, 126, .04) 0px 12px 12px -6px, rgba(14, 63, 126, .04) 0px 24px 24px -12px, inset 0 1px 0 rgba(255,255,255,.2)'}} type="button">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>
<span>Delete</span>
</button>
<button aria-label="Remove" className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400" style={{backgroundColor: '#dc2626', border: '1px solid #b91c1c', boxShadow: 'rgba(14, 63, 126, .04) 0px 0px 0px 1px, rgba(42, 51, 69, .04) 0px 1px 1px -.5px, rgba(42, 51, 70, .04) 0px 3px 3px -1.5px, rgba(42, 51, 70, .04) 0px 6px 6px -3px, rgba(14, 63, 126, .04) 0px 12px 12px -6px, rgba(14, 63, 126, .04) 0px 24px 24px -12px, inset 0 1px 0 rgba(255,255,255,.2)'}} type="button">
<svg className="h-[15px] w-[15px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="rounded-xl border border-white/10 p-6 bg-neutral-900/40 backdrop-blur-sm">
<h2 className="text-xl tracking-tight font-medium text-white mb-6">Outline &amp; Ghost</h2>
<div className="space-y-4">
<div>
<p className="text-sm font-medium text-neutral-400 mb-3">Outline</p>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex h-9 items-center justify-center gap-[6px] rounded-md px-3.5 text-[14px] leading-[22px] font-medium text-white/90 bg-transparent transition-all duration-200 hover:bg-white/[0.04] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30" style={{boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 0.75px 0 rgba(255,255,255,0.08)'}} type="button">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.07 0l1.83-1.83a5 5 0 0 0-7.07-7.07L10 5"></path><path d="M14 11a5 5 0 0 0-7.07 0L5.1 12.83a5 5 0 1 0 7.07 7.07L14 19"></path></svg>
<span>Copy link</span>
</button>
<button className="inline-flex h-7 items-center justify-center gap-[6px] rounded-md px-2 text-[13px] leading-[20px] font-medium text-white/90 bg-transparent transition-all duration-200 hover:bg-white/[0.04] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30" style={{boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 0.75px 0 rgba(255,255,255,0.08)'}} type="button">
<span>Small</span>
</button>
</div>
</div>
<div>
<p className="text-sm font-medium text-neutral-400 mb-3">Ghost</p>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex h-9 items-center justify-center gap-[6px] rounded-md px-3.5 text-[14px] leading-[22px] font-medium text-neutral-200 bg-transparent transition-all duration-200 hover:bg-white/[0.06] hover:text-white active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30" type="button">
<svg className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>Preview</span>
</button>
<button aria-label="More options" className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-300 transition-all duration-200 hover:bg-white/[0.06] hover:text-white active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30" type="button">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
</div>
</section>

<section className="rounded-xl border border-white/10 p-6 bg-neutral-900/40 backdrop-blur-sm">
<h2 className="text-xl tracking-tight font-medium text-white mb-6">Full-width</h2>
<div className="space-y-3">
<button className="button-primary-dark inline-flex w-full h-11 items-center justify-center gap-2 px-4 text-[15px] leading-[24px] font-medium transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" type="button">
<span>Continue with Email</span>
</button>
<button className="inline-flex w-full h-11 items-center justify-center gap-2 rounded-md px-4 text-[15px] leading-[24px] font-medium text-white/90 bg-transparent transition-all duration-200 hover:bg-white/[0.04] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30" style={{boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.14), inset 0 0.75px 0 rgba(255,255,255,0.08)'}} type="button">
<span>Learn more</span>
</button>
</div>
</section>
</div>
</div>
<footer className="mt-16 pt-8 border-t border-slate-200 text-center">
<p className="text-sm text-slate-500">
          Comprehensive button system showcasing consistent design patterns across light and dark modes with proper contrast ratios and accessibility features.
        </p>
</footer>
</main>

    </>
  );
}
