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
serif: ['Newsreader', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
lane: {
dark: '#0f172a',
blue: '#2563eb',
light: '#f1f5f9',
active: '#3b82f6',
bg: '#f8fafc'
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'card': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
'glow': '0 0 20px rgba(59, 130, 246, 0.15)'
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
      

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="flex items-center gap-2 group" href="#">
<span className="iconify text-neutral-900" data-icon="lucide:zap" data-width="20"></span>
<span className="text-lg font-bold tracking-tight">Lanesurf</span>
</a>
</div>
<div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 uppercase tracking-wide transition-colors" href="#">Features</a>
<a className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 uppercase tracking-wide transition-colors" href="#">How it works</a>
<a className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 uppercase tracking-wide transition-colors" href="#">Blog</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:flex items-center justify-center px-5 py-2 bg-[#0f172a] text-white text-xs font-medium rounded-sm hover:bg-neutral-800 transition-colors skew-button" href="#">
<span className="skew-x-[12deg]">Book a Demo</span>
</a>
<a className="hidden md:flex items-center justify-center px-5 py-2 bg-blue-100 text-blue-700 text-xs font-medium rounded-sm hover:bg-blue-200 transition-colors skew-button" href="#">
<span className="skew-x-[12deg]">Sign in</span>
</a>
</div>
</div>
</nav>

<main className="pt-16">

<div className="bg-blue-50/50 border-b border-blue-100 py-3 relative overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 text-center">
<a className="inline-flex items-center gap-2 text-xs text-blue-800 hover:text-blue-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:file-text" data-width="14"></span>
<span className="font-semibold">Case Study:</span>
<span className="font-normal text-blue-700/80">How a produce brokerage cut booking time by 80% and increased margins by 8%</span>
<span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-200"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-200"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-200"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-200"></div>
</div>

<section className="relative pt-16 pb-32 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="max-w-xl">
<h1 className="text-5xl md:text-[3.5rem] leading-[1.1] font-serif font-medium text-neutral-900 mb-6 tracking-tight">
                        Win every load with an infinite workforce of <span className="italic text-neutral-600">intelligent agents.</span>
</h1>
<div className="flex flex-col gap-8">
<p className="text-sm text-neutral-500 leading-relaxed max-w-md">
                            Lanesurf deploys a team of unlimited AI agents that answer every call, negotiate relentlessly, and book loads within minutes.
                        </p>
<div className="flex items-center gap-0 w-full max-w-md shadow-lg shadow-neutral-200/50 rounded-sm overflow-hidden">
<input className="h-12 px-4 flex-1 bg-white border-none outline-none text-sm placeholder:text-neutral-400" placeholder="Enter Your Email ID" type="email"/>
<button className="h-12 px-6 bg-[#0f172a] text-white text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2 skew-button -ml-2 z-10">
<span>Try it on a real load</span>
</button>
</div>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-full z-0 opacity-90 pointer-events-none">
<img alt="Logistics Truck" className="w-full h-full object-cover object-left mask-image-gradient" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'}}/>
</div>

<div className="relative z-10 bg-white/90 backdrop-blur-md border border-white/50 shadow-2xl rounded-sm p-0 w-80 overflow-hidden transform lg:-translate-x-20">
<div className="bg-[#0f172a] p-3 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:zap" data-width="14"></span>
<span className="text-white font-mono text-[10px] tracking-wider">LANESURF_AI</span>
</div>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-2 px-4 py-2 bg-neutral-50 border-b border-neutral-100 text-[9px] font-semibold text-neutral-400 uppercase tracking-wider">
<div>Load ID</div>
<div>Channel</div>
<div className="text-right">Status</div>
</div>

<div className="divide-y divide-neutral-100">

<div className="px-4 py-3 grid grid-cols-3 gap-2 items-center bg-white hover:bg-neutral-50 transition-colors cursor-default">
<div className="text-[10px] font-mono text-neutral-900">CH221015</div>
<div className="flex items-center gap-1.5">
<span className="iconify text-green-600" data-icon="lucide:phone-incoming" data-width="10"></span>
<span className="text-[9px] text-neutral-500 font-medium">INBOUND</span>
</div>
<div className="flex justify-end">
<span className="px-1.5 py-0.5 bg-red-50 text-red-600 text-[8px] font-bold border border-red-100 rounded-sm flex items-center gap-1">
<span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span> LIVE
                                    </span>
</div>
</div>

<div className="px-4 py-3 grid grid-cols-3 gap-2 items-center bg-blue-50/30">
<div className="text-[10px] font-mono text-neutral-900">CH221016</div>
<div className="flex items-center gap-1.5">
<span className="iconify text-blue-600" data-icon="lucide:mail" data-width="10"></span>
<span className="text-[9px] text-neutral-500 font-medium">INBOUND</span>
</div>
<div className="flex justify-end">
<span className="px-1.5 py-0.5 bg-green-50 text-green-600 text-[8px] font-bold border border-green-100 rounded-sm">
                                        RECEIVED
                                    </span>
</div>
</div>

<div className="px-4 py-3 grid grid-cols-3 gap-2 items-center bg-white">
<div className="text-[10px] font-mono text-neutral-900">CH221019</div>
<div className="flex items-center gap-1.5">
<span className="iconify text-neutral-400" data-icon="lucide:phone-incoming" data-width="10"></span>
<span className="text-[9px] text-neutral-500 font-medium">INBOUND</span>
</div>
<div className="flex justify-end">
<span className="px-1.5 py-0.5 bg-red-50 text-red-600 text-[8px] font-bold border border-red-100 rounded-sm flex items-center gap-1">
<span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span> LIVE
                                    </span>
</div>
</div>

<div className="px-4 py-3 grid grid-cols-3 gap-2 items-center bg-white opacity-50">
<div className="text-[10px] font-mono text-neutral-900">CH221021</div>
<div className="flex items-center gap-1.5">
<span className="iconify text-blue-400" data-icon="lucide:mail" data-width="10"></span>
<span className="text-[9px] text-neutral-500 font-medium">OUTBOUND</span>
</div>
<div className="flex justify-end">
<span className="px-1.5 py-0.5 bg-neutral-100 text-neutral-500 text-[8px] font-bold border border-neutral-200 rounded-sm">
                                        PENDING
                                    </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-0 bg-grid-slate opacity-60 pointer-events-none"></div>
</section>

<section className="border-y border-neutral-100 bg-white py-12">
<div className="max-w-[1400px] mx-auto px-6">
<p className="text-center text-xs text-neutral-400 mb-8 font-medium">Our AI books loads daily for providers serving</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-neutral-100">
<div className="flex justify-center py-4">

<span className="text-2xl font-bold text-neutral-500 tracking-tight flex items-center gap-1">
                            Walmart <span className="text-yellow-400 text-3xl leading-none block -mt-1">✻</span>
</span>
</div>
<div className="flex justify-center py-4">

<span className="text-2xl font-serif italic font-bold text-neutral-500 tracking-tight">Sysco</span>
</div>
<div className="flex justify-center py-4">

<div className="flex items-center gap-2 grayscale opacity-60">
<div className="w-6 h-6 rounded-full bg-red-700"></div>
<div className="flex flex-col leading-none">
<span className="text-sm font-bold text-neutral-800">LIPMAN</span>
<span className="text-[10px] font-serif italic text-neutral-600">family farms</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none -skew-x-12 origin-top-right"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
<div>
<h2 className="text-4xl font-serif font-medium text-neutral-900 mb-6">
                            See an AI Team <br/>
                            Book a Live Load
                        </h2>
<p className="text-sm text-neutral-500 leading-relaxed mb-8 max-w-sm">
                            We let Lanesurf take real inbound calls, negotiate with carriers, and secure a vetted load — exactly how it would work for your lanes.
                        </p>
<div className="flex gap-4">
<button className="px-5 py-2.5 bg-[#0f172a] text-white text-xs font-medium rounded-sm hover:bg-neutral-800 transition-colors skew-button">
<span className="skew-x-[12deg]">Book a Demo</span>
</button>
<button className="px-5 py-2.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-sm hover:bg-blue-200 transition-colors underline decoration-blue-300 underline-offset-4 decoration-1">
<span>Learn more</span>
</button>
</div>
</div>

<div className="relative hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white opacity-50"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 border-[30px] border-blue-50 rounded-full blur-3xl opacity-60"></div>
<svg className="absolute right-0 top-0 w-full h-full text-blue-100" viewbox="0 0 400 400">
<path d="M 300 0 L 400 0 L 300 400 L 200 400 Z" fill="currentColor" opacity="0.3"></path>
<path d="M 350 0 L 400 0 L 400 100 L 350 100 Z" fill="currentColor" opacity="0.5"></path>
</svg>
</div>
</div>

<div className="relative w-full">

<button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-8 h-8 flex items-center justify-center text-blue-500 hover:text-blue-700 transition-colors">
<span className="iconify" data-icon="lucide:chevron-left" data-width="24"></span>
</button>
<button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-8 h-8 flex items-center justify-center text-blue-500 hover:text-blue-700 transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="24"></span>
</button>

<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-neutral-200 bg-white shadow-soft">

<div className="relative p-8 bg-gradient-to-b from-blue-500 to-blue-600 text-white overflow-hidden group border-r border-blue-400">

<div className="flex justify-between items-start mb-6">
<div className="font-mono text-[10px] text-blue-200 tracking-wider">///</div>
<div className="font-mono text-[10px] text-blue-100 tracking-widest uppercase">Real Call Snippet</div>
</div>

<h3 className="text-xl font-semibold mb-6">Compliance Check</h3>
<ul className="space-y-4 mb-12">
<li className="flex items-center gap-3 text-xs text-blue-50">
<div className="w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
                                    Carrier Validation
                                </li>
<li className="flex items-center gap-3 text-xs text-blue-50">
<div className="w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
                                    Load Initialization
                                </li>
<li className="flex items-center gap-3 text-xs text-blue-50">
<div className="w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
                                    Controlled Negotiation
                                </li>
<li className="flex items-center gap-3 text-xs text-blue-300/60">
<div className="w-1.5 h-1.5 bg-blue-300/40 rounded-full"></div>
                                    Adaptive Handling
                                </li>
<li className="flex items-center gap-3 text-xs text-blue-300/60">
<div className="w-1.5 h-1.5 bg-blue-300/40 rounded-full"></div>
                                    Commitment &amp; Lock-In
                                </li>
</ul>

<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-1 h-6">
<div className="bar"></div>
<div className="bar h-4"></div>
<div className="bar h-6"></div>
<div className="bar h-3"></div>
<div className="bar h-5"></div>
<div className="bar h-2"></div>
<div className="bar h-4"></div>
</div>
<div className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center cursor-pointer clip-slant">
<span className="iconify text-white ml-1" data-height="20" data-icon="lucide:play" data-width="20" style={{fill: 'white'}}></span>
</div>
</div>

<div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none"></div>
</div>

<div className="relative p-8 bg-white text-neutral-900 border-r border-neutral-100 group hover:bg-neutral-50 transition-colors">
<div className="flex justify-end items-start mb-8">
<div className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">Real Call Snippet</div>
</div>
<h3 className="text-lg font-semibold mb-3">Load Booking Negotiation</h3>
<ul className="space-y-3 mb-12">
<li className="flex items-center gap-3 text-xs text-neutral-500">
<div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div>
                                    Got Driver's Details in the CRM
                                </li>
</ul>

<div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
<div className="flex items-center gap-1 h-6 opacity-30">
<div className="bar bar-dark h-2"></div>
<div className="bar bar-dark h-3"></div>
<div className="bar bar-dark h-2"></div>
<div className="bar bar-dark h-4"></div>
<div className="bar bar-dark h-2"></div>
</div>
<div className="w-12 h-12 bg-neutral-200 flex items-center justify-center cursor-pointer clip-slant group-hover:bg-neutral-300 transition-colors">
<span className="iconify text-neutral-600 ml-1" data-icon="lucide:play" data-width="20" style={{fill: 'currentColor'}}></span>
</div>
</div>
</div>

<div className="relative p-8 bg-white text-neutral-900 group hover:bg-neutral-50 transition-colors">
<div className="flex justify-end items-start mb-8">
<div className="font-mono text-[10px] text-neutral-400 tracking-widest uppercase">Real Call Snippet</div>
</div>
<h3 className="text-lg font-semibold mb-3">Handling Exceptions</h3>
<ul className="space-y-3 mb-12">
<li className="flex items-center gap-3 text-xs text-neutral-500">
<div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div>
                                    Got Driver's Details in the CRM
                                </li>
</ul>

<div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
<div className="flex items-center gap-1 h-6 opacity-30">
<div className="bar bar-dark h-2"></div>
<div className="bar bar-dark h-3"></div>
<div className="bar bar-dark h-2"></div>
<div className="bar bar-dark h-4"></div>
<div className="bar bar-dark h-2"></div>
</div>
<div className="w-12 h-12 bg-neutral-200 flex items-center justify-center cursor-pointer clip-slant group-hover:bg-neutral-300 transition-colors">
<span className="iconify text-neutral-600 ml-1" data-icon="lucide:play" data-width="20" style={{fill: 'currentColor'}}></span>
</div>
</div>
</div>
</div>

<div className="flex mt-4">
<div className="px-4 py-1 bg-blue-200 text-blue-800 text-[10px] font-mono rounded-l-sm flex items-center gap-2">
                            (01/03) <span>-</span> REACH
                        </div>
<div className="flex-1 bg-neutral-100 border-b border-neutral-200"></div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-100 py-12">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-sm font-bold text-neutral-900">Lanesurf</span>
<span className="text-xs text-neutral-400">© 2024</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-black" href="#">Privacy</a>
<a className="text-xs text-neutral-500 hover:text-black" href="#">Terms</a>
<a className="text-xs text-neutral-500 hover:text-black" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
