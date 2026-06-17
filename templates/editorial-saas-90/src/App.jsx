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
colors: {
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
},
indigo: {
50: '#eef2ff',
100: '#e0e7ff',
500: '#6366f1',
600: '#4f46e5',
700: '#4338ca',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['PT Serif', 'serif'],
},
boxShadow: {
'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
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
      

<nav className="fixed top-0 w-full z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<span className="text-xl font-medium tracking-tighter text-neutral-900">NOVEL</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Platform</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Resources</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Log in</a>
<a className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-md shadow-sm hover:bg-neutral-800 transition-all" href="#">Start trial</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-wide">v2.0 Now Available</span>
</div>
</div>
<h1 className="font-serif text-5xl md:text-6xl text-neutral-900 leading-[1.1] mb-6 animate-slide-up delay-100 tracking-normal font-normal">
                    Orchestrate your entire editorial workflow.
                </h1>
<p className="text-lg text-neutral-500 leading-relaxed mb-10 max-w-lg animate-slide-up delay-200 font-normal">
                    Experience the synergy of classical design and modern functionality. Built for publishers who demand precision and beauty in every detail.
                </p>
<div className="flex flex-wrap gap-4 animate-slide-up delay-300">
<button className="group inline-flex items-center justify-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-600 transition-all shadow-sm shadow-indigo-500/20">
<span>Get Started</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="inline-flex items-center justify-center gap-2 bg-white text-neutral-700 border border-neutral-200 px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-sm">
<span className="iconify text-neutral-500" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="16"></span>
<span>Watch Demo</span>
</button>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-neutral-400 animate-slide-up delay-300">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white grayscale opacity-80" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span>Trusted by 2,000+ teams</span>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center animate-slide-up delay-200">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-100/50 via-neutral-100/20 to-transparent rounded-full blur-3xl -z-10"></div>

<div className="relative w-full max-w-md bg-white rounded-xl shadow-soft border border-neutral-200 overflow-hidden">

<div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-white">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:pen-tool" data-width="16"></span>
</div>
<div>
<h3 className="text-sm font-medium text-neutral-900">Editor</h3>
<p className="text-xs text-neutral-400">Drafting: "The Future of Type"</p>
</div>
</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
<span className="w-2 h-2 rounded-full bg-green-400"></span>
</div>
</div>

<div className="p-8 space-y-6">

<div className="space-y-4">
<div className="h-2 w-16 bg-neutral-100 rounded"></div>
<h2 className="font-serif text-2xl text-neutral-800">The resurgence of serif.</h2>
<div className="space-y-2">
<div className="h-1.5 w-full bg-neutral-100 rounded"></div>
<div className="h-1.5 w-5/6 bg-neutral-100 rounded"></div>
<div className="h-1.5 w-4/6 bg-neutral-100 rounded"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-50">

<div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100 flex items-center justify-between">
<span className="text-xs font-medium text-neutral-500">Auto-save</span>
<div className="relative inline-flex h-5 w-9 items-center rounded-full bg-indigo-500">
<span className="inline-block h-3.5 w-3.5 transform rounded-full bg-white transition translate-x-4.5 ml-0.5"></span>
</div>
</div>

<div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100 flex flex-col justify-center gap-2">
<div className="flex justify-between text-xs text-neutral-500">
<span>Scale</span>
<span>100%</span>
</div>
<div className="relative w-full h-1 bg-neutral-200 rounded-full">
<div className="absolute h-full w-2/3 bg-indigo-500 rounded-full"></div>
<div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-neutral-200 shadow-sm rounded-full"></div>
</div>
</div>
</div>

<div className="relative">
<div className="w-full flex items-center justify-between p-2.5 text-xs text-neutral-600 bg-white border border-neutral-200 rounded-md shadow-sm">
<div className="flex items-center gap-2">
<span className="iconify text-neutral-400" data-icon="lucide:type" data-width="14"></span>
<span>PT Serif</span>
</div>
<span className="iconify text-neutral-400" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
</div>

<div className="absolute top-12 -right-4 lg:right-0 bg-white p-4 rounded-lg shadow-sm border border-neutral-200 w-40 animate-slide-up delay-300">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-neutral-400 font-medium">Readability</span>
<span className="iconify text-green-500" data-icon="lucide:trending-up" data-width="14"></span>
</div>
<div className="text-xl font-medium text-neutral-900">98.5%</div>
</div>

<div className="absolute bottom-12 -left-4 lg:left-0 bg-white p-4 rounded-lg shadow-sm border border-neutral-200 w-48 animate-slide-up delay-300">
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-4 h-4 rounded border border-indigo-500 bg-indigo-500 text-white">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="3" data-width="10"></span>
</div>
<span className="text-xs text-neutral-600 line-through decoration-neutral-300">Typography check</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-4 h-4 rounded border border-neutral-300 bg-white"></div>
<span className="text-xs text-neutral-600">Color calibration</span>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
