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
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
bronze: {
500: '#a88b63',
600: '#8c7250',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-900 bg-[#080808]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-serif text-lg tracking-widest text-neutral-100 uppercase hover:text-bronze-500 transition-colors duration-300" href="#">
                M. Schneidermann
            </a>
<div className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wide uppercase">
<a className="hover:text-white transition-colors" href="#philosophy">The Trap</a>
<a className="hover:text-white transition-colors" href="#method">The Pivot</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="group flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-white border border-neutral-800 px-4 py-2 hover:bg-neutral-100 hover:text-black transition-all duration-300" href="#apply">
<span>Inquire</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-grain border-b border-neutral-900">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/20 via-[#080808] to-[#080808]"></div>
<div className="content-z max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 bg-neutral-900/50 backdrop-blur text-[10px] uppercase tracking-[0.2em] text-bronze-500 mb-8">
<span className="w-1 h-1 bg-bronze-500 rounded-full"></span>
                For 7-Figure Agency Owners
            </div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-neutral-100 leading-[0.95] tracking-tight mb-8">
                Escape the <br/>
<span className="text-neutral-500 italic font-light">Golden Hamsterwheel.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto mb-12 font-light leading-relaxed">
                You’ve built a cash-cow agency, but you are the bottleneck. I help elite entrepreneurs transmute service revenue into scalable SaaS equity.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-4 bg-neutral-100 text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-300 transition-colors duration-300 min-w-[200px]" href="#apply">
                    Initialize Protocol
                </a>
<a className="w-full md:w-auto px-8 py-4 border border-neutral-800 text-neutral-300 text-xs uppercase tracking-widest font-semibold hover:border-neutral-600 hover:text-white transition-colors duration-300 min-w-[200px]" href="#philosophy">
                    Read the Manifesto
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 content-z">
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent"></div>
</div>
</header>

<section className="py-24 md:py-32 border-b border-neutral-900 bg-[#080808]" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="font-serif text-4xl md:text-5xl text-white mb-6 tracking-tight leading-none">
                        High Revenue.<br/>
<span className="text-neutral-600">Zero Freedom.</span>
</h2>
<div className="h-[1px] w-24 bg-bronze-500 mb-8"></div>
<p className="text-neutral-400 leading-relaxed mb-6 font-light">
                        The agency model is a trap disguised as success. You trade hours for dollars at a high rate, but the moment you stop spinning the wheel, the revenue halts. It is not an asset; it is a high-paying job with overhead.
                    </p>
<p className="text-neutral-400 leading-relaxed font-light">
                        True wealth is not income. True wealth is equity in a machine that runs without you.
                    </p>
</div>
<div className="grid grid-cols-1 gap-0 border border-neutral-900">

<div className="p-8 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors duration-500 group">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="lucide:hourglass" width="24"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-neutral-600">The Problem</span>
</div>
<h3 className="text-xl text-neutral-200 font-serif mb-2">Linear Growth</h3>
<p className="text-sm text-neutral-500">More revenue requires more headcount. Margins compress as you scale.</p>
</div>

<div className="p-8 border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors duration-500 group">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="lucide:anchor" width="24"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-neutral-600">The Burden</span>
</div>
<h3 className="text-xl text-neutral-200 font-serif mb-2">Key Person Risk</h3>
<p className="text-sm text-neutral-500">Clients buy you, not the system. You cannot exit because you are the product.</p>
</div>

<div className="p-8 hover:bg-neutral-900/30 transition-colors duration-500 group">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="lucide:trending-up" width="24"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-bronze-500">The Solution</span>
</div>
<h3 className="text-xl text-white font-serif mb-2">Productization</h3>
<p className="text-sm text-neutral-500">Codify your expertise into software. Sell the license, not the hour.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-neutral-900 bg-grain" id="method">
<div className="content-z max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-bronze-500 text-[10px] uppercase tracking-[0.25em] block mb-4">The Methodology</span>
<h2 className="font-serif text-3xl md:text-5xl text-neutral-100 tracking-tight">From Service to SaaS</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">

<div className="bg-[#0a0a0a] p-10 hover:bg-[#0f0f0f] transition-colors duration-300 relative group">
<span className="absolute top-6 right-6 text-neutral-800 text-4xl font-serif opacity-50 group-hover:text-bronze-500/20 transition-colors">I</span>
<div className="w-10 h-10 border border-neutral-800 flex items-center justify-center mb-8 group-hover:border-neutral-600 transition-colors">
<iconify-icon className="text-neutral-400" icon="lucide:microscope" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-neutral-200 font-medium mb-3 tracking-tight">Audit &amp; Extraction</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        We dissect your agency operations to find the repeatable process that holds 80% of the value. This becomes the algorithm.
                    </p>
</div>

<div className="bg-[#0a0a0a] p-10 hover:bg-[#0f0f0f] transition-colors duration-300 relative group">
<span className="absolute top-6 right-6 text-neutral-800 text-4xl font-serif opacity-50 group-hover:text-bronze-500/20 transition-colors">II</span>
<div className="w-10 h-10 border border-neutral-800 flex items-center justify-center mb-8 group-hover:border-neutral-600 transition-colors">
<iconify-icon className="text-neutral-400" icon="lucide:code-2" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-neutral-200 font-medium mb-3 tracking-tight">MVP Architecture</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Rapid deployment of a "Service-with-Software" hybrid. We validate with your existing cash flow, eliminating burn-rate anxiety.
                    </p>
</div>

<div className="bg-[#0a0a0a] p-10 hover:bg-[#0f0f0f] transition-colors duration-300 relative group">
<span className="absolute top-6 right-6 text-neutral-800 text-4xl font-serif opacity-50 group-hover:text-bronze-500/20 transition-colors">III</span>
<div className="w-10 h-10 border border-neutral-800 flex items-center justify-center mb-8 group-hover:border-neutral-600 transition-colors">
<iconify-icon className="text-neutral-400" icon="lucide:gem" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-neutral-200 font-medium mb-3 tracking-tight">Asset Detachment</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Full migration of clients to the platform. The agency dissolves or is sold; you retain the high-multiple SaaS entity.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-5/12">

<div className="relative aspect-[3/4] border border-neutral-900 bg-neutral-900 overflow-hidden group">

<img alt="Mark Schneidermann" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80 z-10"></div>
<div className="absolute bottom-6 left-6 border-l border-bronze-500 pl-4 z-20">
<p className="text-xs uppercase tracking-widest text-neutral-200 font-medium drop-shadow-md">Mark Schneidermann</p>
<p className="text-[10px] uppercase tracking-wider text-neutral-400 mt-1 drop-shadow-sm">SaaS Architect</p>
</div>
</div>
</div>
<div className="w-full lg:w-7/12">
<h2 className="font-serif text-3xl md:text-5xl text-neutral-100 tracking-tight mb-8">
                        "I do not build websites.<br/> I build exit strategies."
                    </h2>
<div className="space-y-6 text-neutral-400 font-light text-lg leading-relaxed">
<p>
                            The "hustle" is a lie sold to keep you working in your business rather than on it. I spent a decade in the agency trenches, scaling to 7-figures only to realize I had built a golden prison.
                        </p>
<p>
                            I engineered my own escape by converting internal tools into public-facing SaaS products. Now, I exclusively advise agency founders on navigating this precise chasm.
                        </p>
<p>
                            My approach is not for the faint of heart. It requires destroying the identity of "service provider" to be reborn as "technologist."
                        </p>
</div>
<div className="mt-12 flex gap-8 border-t border-neutral-900 pt-8">
<div>
<span className="block text-2xl md:text-3xl font-serif text-white mb-1">$50M+</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-600">Client Exit Value</span>
</div>
<div>
<span className="block text-2xl md:text-3xl font-serif text-white mb-1">14</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-600">SaaS Pivots Executed</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-900 bg-neutral-900/10">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="font-serif text-2xl md:text-3xl text-white mb-12 tracking-tight">Prerequisites for Engagement</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
<div className="flex items-center gap-4 p-4 border border-neutral-800 bg-[#080808]">
<iconify-icon className="text-bronze-500" icon="lucide:check" width="18"></iconify-icon>
<span className="text-sm text-neutral-300">Doing $1M+ ARR in services</span>
</div>
<div className="flex items-center gap-4 p-4 border border-neutral-800 bg-[#080808]">
<iconify-icon className="text-bronze-500" icon="lucide:check" width="18"></iconify-icon>
<span className="text-sm text-neutral-300">Proven niche authority</span>
</div>
<div className="flex items-center gap-4 p-4 border border-neutral-800 bg-[#080808]">
<iconify-icon className="text-bronze-500" icon="lucide:check" width="18"></iconify-icon>
<span className="text-sm text-neutral-300">Willing to cannibalize service rev</span>
</div>
<div className="flex items-center gap-4 p-4 border border-neutral-800 bg-[#080808]">
<iconify-icon className="text-bronze-500" icon="lucide:check" width="18"></iconify-icon>
<span className="text-sm text-neutral-300">Technical or have a CTO</span>
</div>
</div>
</div>
</section>

<footer className="relative py-32 bg-[#050505] overflow-hidden" id="apply">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="relative z-10 max-w-xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-4">The Next Step</h2>
<p className="text-neutral-500 text-sm">Consultation is by application only. I take 3 clients per quarter.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-[#0a0a0a] border border-neutral-800 text-neutral-200 text-sm px-4 py-3 focus:outline-none focus:border-bronze-500 transition-colors placeholder:text-neutral-700" placeholder="First Name" type="text"/>
<input className="w-full bg-[#0a0a0a] border border-neutral-800 text-neutral-200 text-sm px-4 py-3 focus:outline-none focus:border-bronze-500 transition-colors placeholder:text-neutral-700" placeholder="Last Name" type="text"/>
</div>
<input className="w-full bg-[#0a0a0a] border border-neutral-800 text-neutral-200 text-sm px-4 py-3 focus:outline-none focus:border-bronze-500 transition-colors placeholder:text-neutral-700" placeholder="Work Email" type="email"/>
<div className="relative">
<select className="w-full bg-[#0a0a0a] border border-neutral-800 text-neutral-200 text-sm px-4 py-3 focus:outline-none focus:border-bronze-500 transition-colors appearance-none text-neutral-400">
<option>Current Revenue</option>
<option>$500k - $1M</option>
<option>$1M - $3M</option>
<option>$3M+</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
<button className="w-full bg-neutral-100 text-black font-semibold text-xs uppercase tracking-widest py-4 hover:bg-bronze-500 hover:text-white transition-all duration-300 mt-4" type="button">
                    Submit Application
                </button>
</form>
<div className="mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-600">
<span>© 2024 Mark Schneidermann</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter / X</a>
<a className="hover:text-white transition-colors" href="#">Legal</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
