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
primary: '#839B83',
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-[#839B83] flex items-center justify-center text-white">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-stone-900 text-lg">CareMap</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#">How it Works</a>
<a className="hover:text-stone-900 transition-colors" href="#">For Families</a>
<a className="hover:text-stone-900 transition-colors" href="#">Resources</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Provider Login</a>
<button className="bg-stone-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-stone-800 transition-colors shadow-sm ring-1 ring-stone-900/5">
                    Get Started
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

<div className="flex flex-col gap-8 max-w-2xl lg:max-w-none relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#839B83] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#839B83]"></span>
</span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wide">Nationwide Network</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-stone-900 leading-[1.1]">
                    Find the Right <br/>
<span className="text-[#839B83]">Hospice</span>, Faster.
                </h1>
<p className="text-lg text-stone-500 leading-relaxed max-w-lg font-normal">
                    Navigate end-of-life care with clarity. Compare verified providers, view ratings, and find the most compassionate care near your loved ones.
                </p>

<div className="mt-4 bg-white p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200/60 ring-4 ring-stone-50/50">
<form className="flex flex-col md:flex-row gap-2" onsubmit="event.preventDefault();">

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400 group-focus-within:text-[#839B83] transition-colors">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full h-12 pl-10 pr-4 bg-stone-50/50 hover:bg-stone-50 focus:bg-white rounded-xl text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#839B83]/20 transition-all border border-transparent focus:border-[#839B83]/30" placeholder="Enter zip code or address..." type="text"/>
</div>

<div className="hidden md:block w-px h-8 self-center bg-stone-200"></div>

<div className="w-full md:w-48 relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400 group-focus-within:text-[#839B83] transition-colors">
<iconify-icon icon="lucide:navigation" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<select className="w-full h-12 pl-10 pr-8 bg-stone-50/50 hover:bg-stone-50 focus:bg-white rounded-xl text-stone-900 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#839B83]/20 transition-all border border-transparent focus:border-[#839B83]/30">
<option disabled="" selected="" value="">Select State</option>
<option value="AL">Alabama</option>
<option value="CA">California</option>
<option value="NY">New York</option>
<option value="TX">Texas</option>
<option value="FL">Florida</option>
</select>
</div>

<button className="h-12 px-8 bg-[#839B83] hover:bg-[#738a73] text-white font-medium rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 group whitespace-nowrap" type="submit">
<span>Search Map</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>
</div>

<div className="flex items-center gap-6 mt-2">
<div className="flex -space-x-3">
<img alt="" className="w-8 h-8 rounded-full border-2 border-stone-50 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-stone-50 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-stone-50 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-8 h-8 rounded-full border-2 border-stone-50 bg-stone-100 flex items-center justify-center text-[10px] font-semibold text-stone-600">+2k</div>
</div>
<div className="text-sm text-stone-500">
                        Trusted by over <span className="text-stone-900 font-semibold">2,000</span> families this month.
                    </div>
</div>
</div>

<div className="relative lg:h-[600px] w-full flex items-center justify-center">

<div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#839B83]/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full bg-stone-200/50 rounded-3xl overflow-hidden border border-stone-200 shadow-2xl shadow-stone-200/50 group">

<div className="absolute inset-0 bg-[#e5e3e1]">

<svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="60" id="grid" patternunits="userSpaceOnUse" width="60">
<path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="2"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>

<path d="M 0 200 Q 300 150 600 250 T 1200 200" fill="none" stroke="white" strokeWidth="8"></path>
<path d="M 400 0 Q 350 300 450 600" fill="none" stroke="white" strokeWidth="8"></path>
</svg>
</div>

<div className="absolute top-4 right-4 flex flex-col gap-2">
<button className="w-10 h-10 bg-white rounded-lg shadow-sm border border-stone-100 flex items-center justify-center text-stone-600 hover:text-[#839B83] transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 bg-white rounded-lg shadow-sm border border-stone-100 flex items-center justify-center text-stone-600 hover:text-[#839B83] transition-colors">
<iconify-icon icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>


<div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform">
<div className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center shadow-lg border-2 border-white">
<iconify-icon icon="lucide:home" width="14"></iconify-icon>
</div>
</div>

<div className="absolute bottom-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform">
<div className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center shadow-lg border-2 border-white">
<iconify-icon icon="lucide:home" width="14"></iconify-icon>
</div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

<span className="absolute inline-flex h-full w-full rounded-full bg-[#839B83] opacity-20 animate-ping scale-150"></span>
<div className="relative w-10 h-10 rounded-full bg-[#839B83] text-white flex items-center justify-center shadow-xl border-4 border-white z-20">
<iconify-icon icon="lucide:map-pin" strokeWidth="2" width="18"></iconify-icon>
</div>

<div className="absolute left-1/2 bottom-full mb-4 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border border-stone-100 p-4 z-30 animate-[fade-in-up_0.5s_ease-out]">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-semibold text-stone-900 leading-tight">Fairview Hospice</h3>
<p className="text-xs text-stone-500 mt-0.5">Compassionate Care Unit</p>
</div>
<div className="flex items-center gap-1 bg-stone-50 px-1.5 py-0.5 rounded border border-stone-100">
<iconify-icon className="text-[#839B83]" icon="lucide:star" strokeWidth="3" width="10"></iconify-icon>
<span className="text-xs font-medium text-stone-700">4.9</span>
</div>
</div>
<div className="flex items-center gap-3 mb-3">
<div className="flex items-center gap-1.5 text-xs text-stone-500">
<iconify-icon icon="lucide:navigation" strokeWidth="1.5" width="12"></iconify-icon>
<span>2.4 miles</span>
</div>
<div className="w-1 h-1 bg-stone-300 rounded-full"></div>
<div className="text-xs text-[#839B83] font-medium">Open 24/7</div>
</div>
<button className="w-full py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                                View Details
                                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="12"></iconify-icon>
</button>

<div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-b border-r border-stone-100"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-stone-200 bg-stone-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-stone-500">© 2024 CareMap Inc. All rights reserved.</p>
<div className="flex gap-6">
<iconify-icon className="text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" icon="lucide:twitter" width="20"></iconify-icon>
<iconify-icon className="text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" icon="lucide:instagram" width="20"></iconify-icon>
<iconify-icon className="text-stone-400 hover:text-stone-900 cursor-pointer transition-colors" icon="lucide:linkedin" width="20"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
