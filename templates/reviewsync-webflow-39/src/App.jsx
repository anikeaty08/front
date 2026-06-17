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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-white/80 border-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md flex items-center justify-center text-white bg-teal-500" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="" icon="lucide:refresh-cw" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>ReviewSync</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>
<a className="transition-colors hover:text-slate-900" href="#how-it-works" style={{transition: 'outline 0.1s ease-in-out'}}>How it Works</a>
<a className="transition-colors hover:text-slate-900" href="#templates" style={{transition: 'outline 0.1s ease-in-out'}}>Templates</a>
<a className="transition-colors hover:text-slate-900" href="#pricing" style={{transition: 'outline 0.1s ease-in-out'}}>Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Log in</a>
<a className="text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm ring-1 bg-slate-900 hover:bg-slate-800 text-white ring-slate-900/5" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 text-teal-700 border-teal-100 bg-teal-50" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-teal-400" style={{transition: 'outline 0.1s ease-in-out'}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" style={{transition: 'outline 0.1s ease-in-out'}}></span>
</span>
                New: Trustpilot V2 Integration
            </div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>
                All Your Reviews. <br/> <span className="text-teal-500" style={{transition: 'outline 0.1s ease-in-out'}}>One CMS.</span>
</h1>
<p className="leading-relaxed text-xl font-normal text-slate-500 max-w-2xl mr-auto mb-10 ml-auto" style={{transition: 'outline 0.1s ease-in-out'}}>
                Sync Google, Trustpilot &amp; Yelp reviews into Webflow automatically. Display social proof without manual copy-pasting.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full font-medium text-sm transition-all shadow-lg flex items-center gap-2 text-white bg-teal-500 hover:bg-teal-500 shadow-teal-600/20" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Start for Free
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border font-medium text-sm transition-all flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon icon="lucide:play-circle" strokeWidth="2" width="16"></iconify-icon>
                    View Demo
                </button>
</div>

<div className="relative max-w-3xl mx-auto h-64 select-none pointer-events-none">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t via-transparent to-transparent z-20 from-white"></div>

<div className="absolute top-8 left-0 md:left-12 w-64 rounded-xl shadow-xl border p-4 transform -rotate-3 z-10 bg-white border-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-100 text-orange-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<div>
<div className="h-2 w-20 rounded mb-1 bg-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="h-2 w-12 rounded bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full rounded bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="h-2 w-5/6 rounded bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="h-2 w-4/6 rounded bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex items-center justify-center">
<div className="w-32 md:w-48 h-[1px] relative overflow-hidden bg-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="absolute inset-0 w-1/2 animate-[shimmer_1.5s_infinite] translate-x-[-100%] bg-teal-500" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
<div className="absolute border p-2 rounded-full shadow-sm bg-white border-slate-200 text-teal-500" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="absolute top-8 right-0 md:right-12 w-64 rounded-xl shadow-2xl border p-4 transform rotate-3 z-10 bg-slate-900 border-slate-800 shadow-teal-900/10" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center justify-between mb-4 border-b pb-2 border-slate-700/50" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="text-xs font-medium text-slate-400" style={{transition: 'outline 0.1s ease-in-out'}}>CMS Item</span>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="w-2 h-2 rounded-full bg-yellow-500" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="w-2 h-2 rounded-full bg-green-500" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<div className="h-2 w-16 rounded bg-slate-700" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="h-2 w-24 rounded bg-teal-500/20" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
<div className="flex justify-between items-center">
<div className="h-2 w-12 rounded bg-slate-700" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="h-2 w-32 rounded bg-slate-700" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
<div className="flex justify-between items-center">
<div className="h-2 w-14 rounded bg-slate-700" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="h-2 w-20 rounded bg-slate-700" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-slate-50/50" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-semibold uppercase tracking-wider mb-8 text-slate-400" style={{transition: 'outline 0.1s ease-in-out'}}>Trusted integrations</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale transition-all hover:grayscale-0 duration-500">

<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-slate-700" style={{transition: 'outline 0.1s ease-in-out'}}>Google</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium border bg-green-100 text-green-700 border-green-200" style={{transition: 'outline 0.1s ease-in-out'}}>Live</span>
</div>

<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-slate-700" style={{transition: 'outline 0.1s ease-in-out'}}>Trustpilot</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<span className="text-xl font-semibold tracking-tight text-slate-700" style={{transition: 'outline 0.1s ease-in-out'}}>Reviews</span>
</div>

<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight italic text-slate-700" style={{transition: 'outline 0.1s ease-in-out'}}>yelp</span>
<iconify-icon className="text-red-500" fill="currentColor" icon="lucide:star" style={{transition: 'outline 0.1s ease-in-out'}} width="12"></iconify-icon>
</div>

<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-slate-700" style={{transition: 'outline 0.1s ease-in-out'}}>webflow</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium border bg-teal-100 text-teal-700 border-teal-200" style={{transition: 'outline 0.1s ease-in-out'}}>Partner</span>
</div>
</div>
</div>
</section>

<section className="py-24" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Sync in seconds</h2>
<p className="text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>Simple setup. Set it once and let it run on autopilot.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative group">
<div className="w-12 h-12 border rounded-xl flex items-center justify-center mb-6 shadow-sm transition-colors bg-white border-slate-200 text-slate-700 group-hover:border-teal-200 group-hover:text-teal-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon icon="lucide:link" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>1. Connect</h3>
<p className="text-sm text-slate-500 leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>Link your Google, Yelp, or Trustpilot accounts securely.</p>

<div className="hidden md:block absolute top-6 left-16 right-0 h-[1px] bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>

<div className="relative group">
<div className="w-12 h-12 border rounded-xl flex items-center justify-center mb-6 shadow-sm transition-colors bg-white border-slate-200 text-slate-700 group-hover:border-teal-200 group-hover:text-teal-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon icon="lucide:refresh-cw" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>2. Sync</h3>
<p className="text-sm text-slate-500 leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>Map fields to your Webflow CMS Collection once.</p>
<div className="hidden md:block absolute top-6 left-16 right-0 h-[1px] bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>

<div className="relative group">
<div className="w-12 h-12 border rounded-xl flex items-center justify-center mb-6 shadow-sm transition-colors bg-white border-slate-200 text-slate-700 group-hover:border-teal-200 group-hover:text-teal-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon icon="lucide:layout-template" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>3. Customize</h3>
<p className="text-sm text-slate-500 leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>Choose a pre-built template or design your own in Webflow.</p>
<div className="hidden md:block absolute top-6 left-16 right-0 h-[1px] bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>

<div className="relative group">
<div className="w-12 h-12 border rounded-xl flex items-center justify-center mb-6 shadow-sm transition-colors bg-white border-slate-200 text-slate-700 group-hover:border-teal-200 group-hover:text-teal-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>4. Publish</h3>
<p className="text-sm text-slate-500 leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>Push changes to your live site instantly.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-100 border-t pt-24 pb-24" id="templates" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Display it your way</h2>
<p className="text-slate-500 max-w-md" style={{transition: 'outline 0.1s ease-in-out'}}>Start with our optimized layouts or use the raw data to build completely custom designs.</p>
</div>
<button className="px-5 py-2.5 border rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2 bg-white border-slate-200 text-slate-700 hover:border-slate-300" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Explore Templates
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

<div className="rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow bg-white border-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="rounded-xl h-40 mb-6 border p-4 flex flex-wrap content-start gap-2 overflow-hidden bg-slate-50 border-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}>

<div className="w-[calc(50%-4px)] h-16 border rounded shadow-sm bg-white border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="w-[calc(50%-4px)] h-16 border rounded shadow-sm bg-white border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="w-[calc(50%-4px)] h-16 border rounded shadow-sm bg-white border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="w-[calc(50%-4px)] h-16 border rounded shadow-sm bg-white border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
<h3 className="text-base font-semibold mb-1 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Masonry Grid</h3>
<p className="text-xs text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>Best for "Wall of Love" pages.</p>
</div>

<div className="rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow bg-white border-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="rounded-xl h-40 mb-6 border p-4 flex items-center gap-3 overflow-hidden relative bg-slate-50 border-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}>

<div className="w-4 h-4 rounded-full flex-shrink-0 bg-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="flex-1 h-24 border rounded shadow-sm flex items-center justify-center bg-white border-slate-200 text-slate-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon icon="lucide:quote" width="20"></iconify-icon>
</div>
<div className="w-4 h-4 rounded-full flex-shrink-0 bg-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
<h3 className="text-base font-semibold mb-1 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Interactive Carousel</h3>
<p className="text-xs text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>Perfect for homepages and footers.</p>
</div>

<div className="rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow bg-white border-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="rounded-xl h-40 mb-6 border p-4 flex flex-col gap-2 overflow-hidden bg-slate-50 border-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}>

<div className="w-full h-10 border rounded shadow-sm flex items-center px-2 gap-2 bg-white border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-6 h-6 rounded-full bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="w-1/2 h-2 rounded bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
<div className="w-full h-10 border rounded shadow-sm flex items-center px-2 gap-2 bg-white border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-6 h-6 rounded-full bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="w-1/3 h-2 rounded bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
<div className="w-full h-10 border rounded shadow-sm flex items-center px-2 gap-2 bg-white border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-6 h-6 rounded-full bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="w-2/3 h-2 rounded bg-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
</div>
<h3 className="text-base font-semibold mb-1 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Detailed List</h3>
<p className="text-xs text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>Great for case study sidebars.</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Built for Webflow Developers</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl border hover:shadow-lg transition-all group bg-white border-slate-100 hover:border-teal-100 hover:shadow-teal-900/5" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-teal-500 bg-teal-50" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon icon="lucide:clipboard-x" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="font-medium mb-2 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>No Copy-Paste</h4>
<p className="text-sm text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>Forget manual data entry. Reviews land in your CMS automatically.</p>
</div>
<div className="p-6 rounded-2xl border hover:shadow-lg transition-all group bg-white border-slate-100 hover:border-teal-100 hover:shadow-teal-900/5" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-teal-500 bg-teal-50" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="font-medium mb-2 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>SEO-Friendly</h4>
<p className="text-sm text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>Reviews are stored as real text in your CMS, not iframes.</p>
</div>
<div className="p-6 rounded-2xl border hover:shadow-lg transition-all group bg-white border-slate-100 hover:border-teal-100 hover:shadow-teal-900/5" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-teal-500 bg-teal-50" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="font-medium mb-2 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>No-Code Setup</h4>
<p className="text-sm text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>Connect accounts and map fields visually. No API keys needed.</p>
</div>
<div className="p-6 rounded-2xl border hover:shadow-lg transition-all group bg-white border-slate-100 hover:border-teal-100 hover:shadow-teal-900/5" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex group-hover:scale-110 transition-transform text-teal-500 w-10 h-10 rounded-lg mb-4 items-center justify-center bg-teal-50" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="" icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="font-medium mb-2 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Webflow Native</h4>
<p className="text-sm text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>Works perfectly with Webflow Collections, References, and Components.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="pricing" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Simple Pricing</h2>
<p className="text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>Start for free, upgrade as you grow.</p>
</div>
<div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">

<div className="flex-1 rounded-2xl p-8 border bg-white border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<h3 className="text-lg font-medium mb-2 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Starter</h3>
<div className="text-4xl font-semibold mb-6 tracking-tight text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>$0<span className="text-base font-normal text-slate-400" style={{transition: 'outline 0.1s ease-in-out'}}>/mo</span></div>
<p className="text-sm text-slate-500 mb-8" style={{transition: 'outline 0.1s ease-in-out'}}>Perfect for personal sites and testing.</p>
<a className="block w-full py-2.5 rounded-lg border text-center text-sm font-medium transition-colors mb-8 border-slate-200 text-slate-700 hover:bg-slate-50" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Get Started</a>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="mt-0.5 text-teal-500" icon="lucide:check" style={{transition: 'outline 0.1s ease-in-out'}} width="16"></iconify-icon>
                            1 Source (Google only)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="mt-0.5 text-teal-500" icon="lucide:check" style={{transition: 'outline 0.1s ease-in-out'}} width="16"></iconify-icon>
                            10 Reviews / month
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="mt-0.5 text-teal-500" icon="lucide:check" style={{transition: 'outline 0.1s ease-in-out'}} width="16"></iconify-icon>
                            Manual Sync
                        </li>
</ul>
</div>

<div className="flex-1 rounded-2xl p-8 border shadow-xl relative overflow-hidden bg-white border-teal-200 shadow-teal-900/5" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="absolute top-0 right-0 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider text-white bg-teal-500" style={{transition: 'outline 0.1s ease-in-out'}}>Most Popular</div>
<h3 className="text-lg font-medium mb-2 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Pro</h3>
<div className="flex items-end gap-2 mb-6">
<div className="text-4xl font-semibold tracking-tight text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>$4<span className="text-base font-normal text-slate-400" style={{transition: 'outline 0.1s ease-in-out'}}>/mo</span></div>
<span className="text-xs text-red-500 line-through mb-1.5" style={{transition: 'outline 0.1s ease-in-out'}}>$12/mo</span>
</div>
<p className="text-sm inline-block px-2 py-1 rounded mb-8 font-medium text-teal-500 bg-teal-50" style={{transition: 'outline 0.1s ease-in-out'}}>Early Bird: First 500 users only</p>
<a className="block w-full py-2.5 rounded-lg text-center text-sm font-medium transition-shadow shadow-lg mb-8 text-white bg-teal-500 hover:bg-teal-500 shadow-teal-600/20" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Start Free Trial</a>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="mt-0.5 text-teal-500" icon="lucide:check" style={{transition: 'outline 0.1s ease-in-out'}} width="16"></iconify-icon>
                            All Sources (Google, Trustpilot, Yelp)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="mt-0.5 text-teal-500" icon="lucide:check" style={{transition: 'outline 0.1s ease-in-out'}} width="16"></iconify-icon>
                            Unlimited Reviews
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="mt-0.5 text-teal-500" icon="lucide:check" style={{transition: 'outline 0.1s ease-in-out'}} width="16"></iconify-icon>
                            Automatic Daily Sync
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">
<div className="md:p-20 overflow-hidden text-center bg-teal-950 rounded-2xl pt-12 pr-12 pb-12 pl-12 relative" style={{transition: 'outline 0.1s ease-in-out'}}>

<div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 bg-teal-600/20" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 bg-teal-600/20" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">Start syncing reviews today</h2>
<p className="mb-10 text-lg text-slate-400" style={{transition: 'outline 0.1s ease-in-out'}}>Build trust with your visitors and improve conversion rates.</p>
<div className="flex flex-col gap-4 gap-x-4 gap-y-4 items-center">
<button className="px-8 py-3.5 rounded-full font-medium text-sm transition-all shadow-lg text-white bg-teal-500 hover:bg-teal-500 shadow-teal-900/50" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Get Started Free
                        </button>
<span className="text-xs text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>No credit card required</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 border-slate-100 bg-white" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded-md flex items-center justify-center bg-slate-900 text-white" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon icon="lucide:refresh-cw" width="12"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>ReviewSync</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>
                        The easiest way to display social proof on your Webflow sites.
                    </p>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Product</h4>
<ul className="space-y-2 text-sm text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>
<li><a className="transition-colors hover:text-teal-500" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Features</a></li>
<li className=""><a className="transition-colors hover:text-teal-500" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Integrations</a></li>
<li className=""><a className="transition-colors hover:text-teal-500" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Pricing</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Resources</h4>
<ul className="space-y-2 text-sm text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>
<li><a className="transition-colors hover:text-teal-500" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Documentation</a></li>
<li><a className="transition-colors hover:text-teal-500" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>API</a></li>
<li><a className="transition-colors hover:text-teal-500" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Community</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4 text-slate-900" style={{transition: 'outline 0.1s ease-in-out'}}>Legal</h4>
<ul className="space-y-2 text-sm text-slate-500" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className=""><a className="transition-colors hover:text-teal-500" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Privacy</a></li>
<li className=""><a className="transition-colors hover:text-teal-500" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Terms</a></li>
<li className=""><a className="transition-colors hover:text-teal-500" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Security</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-100" style={{transition: 'outline 0.1s ease-in-out'}}>
<p className="text-xs text-slate-400" style={{transition: 'outline 0.1s ease-in-out'}}>© 2023 ReviewSync Inc. All rights reserved.</p>
<div className="flex gap-4 text-slate-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<a className="hover:text-slate-600" href="#" style={{transition: 'outline 0.1s ease-in-out'}}><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="hover:text-slate-600" href="#" style={{transition: 'outline 0.1s ease-in-out'}}><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>
<style>
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
        }
    </style>

    </>
  );
}
