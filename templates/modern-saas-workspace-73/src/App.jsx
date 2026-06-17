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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#202022',
}
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
      
<div className="flex flex-col lg:flex-row h-full w-full">

<div className="w-full lg:w-1/2 h-full flex flex-col border-r border-zinc-200 bg-zinc-50/50 backdrop-blur-sm relative z-10">

<div className="h-16 border-b border-zinc-200 px-6 flex items-center justify-between bg-white/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-semibold tracking-tighter text-sm">
                        IO
                    </div>
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-900 transition-colors cursor-pointer">Workspace</span>
<span className="iconify text-zinc-300" data-icon="lucide:chevron-right" data-width="14"></span>
<span className="text-zinc-900 font-medium">Overview</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="iconify text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer" data-icon="lucide:bell" data-width="18"></span>
<div className="absolute top-0 right-0 w-1.5 h-1.5 bg-orange-500 rounded-full border border-white"></div>
</div>
<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-300 border border-white shadow-sm"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

<div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] hover:shadow-md transition-smooth group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100 group-hover:bg-zinc-100 transition-smooth">
<span className="iconify text-zinc-600" data-icon="lucide:wallet" data-width="16"></span>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12.5%</span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Total Revenue</p>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">$124,592</p>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] hover:shadow-md transition-smooth group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100 group-hover:bg-zinc-100 transition-smooth">
<span className="iconify text-zinc-600" data-icon="lucide:users" data-width="16"></span>
</div>
<span className="text-xs font-medium text-zinc-400 bg-zinc-50 px-2 py-0.5 rounded-full border border-zinc-100">0.0%</span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Active Users</p>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">8,942</p>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] hover:shadow-md transition-smooth group cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100 group-hover:bg-zinc-100 transition-smooth">
<span className="iconify text-zinc-600" data-icon="lucide:activity" data-width="16"></span>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+4.2%</span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Bounce Rate</p>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">42.3%</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-6 mb-8 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.03)]">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900">Growth Analytics</h3>
<p className="text-xs text-zinc-500 mt-1">Year-over-year performance metrics</p>
</div>
<div className="flex gap-2">
<button className="text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-900 text-white shadow-sm">12M</button>
<button className="text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-50 text-zinc-500 hover:bg-zinc-100 transition-colors border border-zinc-100">30D</button>
<button className="text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-50 text-zinc-500 hover:bg-zinc-100 transition-colors border border-zinc-100">7D</button>
</div>
</div>

<div className="relative h-48 w-full">

<div className="absolute inset-0 flex flex-col justify-between text-xs text-zinc-300 font-mono">
<div className="border-b border-zinc-100 w-full h-0"></div>
<div className="border-b border-zinc-100 w-full h-0"></div>
<div className="border-b border-zinc-100 w-full h-0"></div>
<div className="border-b border-zinc-100 w-full h-0"></div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#18181b" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#18181b" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 150 C 100 140, 150 160, 250 120 C 350 80, 400 100, 500 60 C 600 20, 700 40, 800 10 L 800 200 L 0 200 Z" fill="url(#gradient)"></path>
<path d="M0 150 C 100 140, 150 160, 250 120 C 350 80, 400 100, 500 60 C 600 20, 700 40, 800 10" fill="none" stroke="#18181b" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="absolute top-[28%] left-[60%] flex flex-col items-center">
<div className="w-3 h-3 bg-white border-2 border-zinc-900 rounded-full shadow-sm z-10"></div>
<div className="mt-2 px-3 py-1.5 bg-zinc-900 text-white text-xs rounded-lg shadow-lg">
                                $82,400
                            </div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-semibold text-zinc-900">Recent Transactions</h4>
<span className="iconify text-zinc-400 hover:text-zinc-700 cursor-pointer" data-icon="lucide:more-horizontal" data-width="16"></span>
</div>
<div className="space-y-2">

<div className="flex items-center justify-between p-3 hover:bg-white hover:shadow-sm rounded-xl border border-transparent hover:border-zinc-100 transition-all cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-semibold">AS</div>
<div>
<p className="text-sm font-medium text-zinc-900">Acme Solutions</p>
<p className="text-xs text-zinc-500">Subscription renewal</p>
</div>
</div>
<span className="text-sm font-medium text-zinc-900">+$450.00</span>
</div>

<div className="flex items-center justify-between p-3 hover:bg-white hover:shadow-sm rounded-xl border border-transparent hover:border-zinc-100 transition-all cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-semibold">ZL</div>
<div>
<p className="text-sm font-medium text-zinc-900">Zenith Labs</p>
<p className="text-xs text-zinc-500">Enterprise license</p>
</div>
</div>
<span className="text-sm font-medium text-zinc-900">+$2,400.00</span>
</div>

<div className="flex items-center justify-between p-3 hover:bg-white hover:shadow-sm rounded-xl border border-transparent hover:border-zinc-100 transition-all cursor-default">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center text-xs font-semibold">OV</div>
<div>
<p className="text-sm font-medium text-zinc-900">Orbit Ventures</p>
<p className="text-xs text-zinc-500">Consulting hours</p>
</div>
</div>
<span className="text-sm font-medium text-zinc-900">+$850.00</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 h-full bg-white relative flex flex-col items-center justify-center dot-pattern">

<div className="absolute top-6 left-0 right-0 px-8 flex justify-between items-center z-20 pointer-events-none">
<div className="pointer-events-auto bg-white/80 backdrop-blur-md border border-zinc-200/60 pl-3 pr-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-zinc-600">Saved</span>
</div>
<div className="pointer-events-auto flex gap-2">
<button className="w-9 h-9 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-all shadow-sm">
<span className="iconify" data-icon="lucide:share" data-width="16"></span>
</button>
<button className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-900 flex items-center justify-center text-white hover:bg-zinc-800 transition-all shadow-md">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</button>
</div>
</div>

<div className="relative w-full max-w-lg h-[80vh] flex flex-col">

<div className="flex-1 bg-white rounded-[2.5rem] border border-zinc-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col relative z-10 transition-all duration-500">

<div className="flex-1 overflow-y-auto no-scrollbar p-10 sm:p-12">

<div className="group mb-8">
<input className="w-full text-4xl font-semibold tracking-tight text-zinc-900 placeholder:text-zinc-300 focus:outline-none bg-transparent" placeholder="Untitled" type="text" value="The Future of Interface"/>
<div className="h-px w-full bg-zinc-100 mt-4 group-focus-within:bg-zinc-200 transition-colors"></div>
</div>

<div className="flex gap-6 mb-8 text-xs font-medium text-zinc-400 uppercase tracking-widest">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span>
<span>5 min read</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:calendar" data-width="12"></span>
<span>Oct 24, 2023</span>
</div>
</div>

<div className="prose prose-zinc prose-p:text-zinc-600 prose-headings:text-zinc-900">
<p className="text-sm leading-8 mb-6">
                                Minimalism isn't just about removing things; it's about adding focus. In a world saturated with noise, the ability to distill functionality into its purest form is the ultimate sophistication. We are moving towards interfaces that feel less like machines and more like extensions of thought.
                            </p>
<p className="text-sm leading-8 mb-6">
                                The boundary between the user and the tool is dissolving. Fluid shapes, subtle interactions, and typography that breathes are the new standards.
                            </p>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mt-8 mb-4">Principles of Reductive Design</h3>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-3 text-sm leading-7 text-zinc-600">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0"></div>
<span>Prioritize content over chrome. The container should recede.</span>
</li>
<li className="flex items-start gap-3 text-sm leading-7 text-zinc-600">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0"></div>
<span>Motion conveys meaning, not just decoration.</span>
</li>
<li className="flex items-start gap-3 text-sm leading-7 text-zinc-600">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0"></div>
<span>Use negative space as an active design element.</span>
</li>
</ul>
<p className="text-sm leading-8 text-zinc-600">
                                When we strip away the non-essential, we aren't left with nothing. We are left with everything that matters.
                            </p>
</div>
</div>

<div className="h-16 bg-gradient-to-t from-white to-transparent pointer-events-none absolute bottom-0 left-0 right-0"></div>
</div>

<div className="absolute -bottom-20 sm:-bottom-16 left-1/2 -translate-x-1/2 z-20">
<div className="bg-zinc-900/90 backdrop-blur-md text-zinc-400 p-1.5 rounded-full flex items-center gap-1 shadow-2xl border border-zinc-800 ring-1 ring-white/10">
<button className="p-2.5 rounded-full hover:bg-white/10 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bold" data-width="16"></span>
</button>
<button className="p-2.5 rounded-full hover:bg-white/10 hover:text-white transition-colors text-white bg-white/10">
<span className="iconify" data-icon="lucide:italic" data-width="16"></span>
</button>
<button className="p-2.5 rounded-full hover:bg-white/10 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:link" data-width="16"></span>
</button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="p-2.5 rounded-full hover:bg-white/10 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:heading-1" data-width="16"></span>
</button>
<button className="p-2.5 rounded-full hover:bg-white/10 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:list" data-width="16"></span>
</button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="p-2.5 rounded-full hover:bg-white/10 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:image" data-width="16"></span>
</button>
</div>
</div>

<div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-zinc-200 to-zinc-100 rounded-full blur-2xl opacity-60 -z-10"></div>
<div className="absolute top-1/2 -left-12 w-32 h-32 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-3xl opacity-50 -z-10"></div>
</div>
</div>
</div>

    </>
  );
}
