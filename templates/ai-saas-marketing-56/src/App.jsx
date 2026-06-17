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
},
colors: {
emerald: {
450: '#10b981', // Custom tweak for better visibility if needed
}
},
backgroundImage: {
'dot-pattern': 'radial-gradient(circle, #065f46 1px, transparent 1px)',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();
    
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
      

<header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight text-white hover:opacity-80 transition-opacity" href="#">
                vexel.saas
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block px-5 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-colors" href="#">
                    Sign Up
                </a>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen flex flex-col justify-end pt-32 pb-20 lg:pb-32 overflow-hidden" id="hero">

<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-[length:40px_40px] bg-dot-pattern opacity-20"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#050505]/80 to-[#050505]"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">

<div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
<div className="absolute inset-0 bg-emerald-500 blur-[120px] opacity-20 rounded-full animate-pulse"></div>
<img alt="Abstract 3D Sphere" className="w-full h-full object-cover rounded-full mix-blend-lighten opacity-90 shadow-2xl brightness-110 contrast-125" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop" style={{maskImage: 'radial-gradient(circle, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'}}/>
</div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">

<div className="max-w-2xl">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[1.05]">
                    Automate your 
                    marketing with 
                    AI Platform.
                </h1>
</div>

<div className="flex flex-col gap-8 lg:pl-10 pb-2">
<p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-md">
                    You can use this section to share the company's history or highlight a particular feature that sets it apart from competitors.
                </p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 text-base font-medium bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
                        Sign Up
                    </button>
<button className="px-8 py-4 text-base font-medium bg-white/5 text-white border border-white/10 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                        Learn More
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
<div className="max-w-xl">
<span className="text-sm font-medium tracking-widest text-zinc-400 uppercase mb-4 block">Product</span>
<h2 className="text-5xl md:text-6xl font-medium text-white tracking-tighter">Features</h2>
</div>
<p className="text-lg text-zinc-400 max-w-sm text-left md:text-right font-normal leading-relaxed">
                You can use this section to share the company's history or highlight a particular feature that sets it apart.
            </p>
</div>

<div className="space-y-8">

<div className="group relative bg-[#0A0A0A] rounded-3xl overflow-hidden border border-white/5 grid md:grid-cols-2 gap-0 items-stretch">
<div className="p-8 md:p-16 flex flex-col justify-between h-full border-r-0 md:border-r border-b md:border-b-0 border-white/5">
<div className="">
<span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-6 block">Feature 1</span>
<h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-[1.1]">Simplify complex  workflow.</h3>
</div>
<p className="text-lg text-zinc-500 max-w-md font-normal leading-relaxed">Automate repetitive tasks across departments, reducing manual effort and increasing overall productivity.</p>
</div>
<div className="relative min-h-[400px] md:min-h-full bg-gradient-to-br from-emerald-900/40 via-black to-black overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
<div className="absolute inset-0 bg-emerald-600/10 blur-[100px]"></div>

<div className="relative z-10 w-64 h-64 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-700">
<div className="absolute inset-0 rounded-2xl border border-emerald-500/20"></div>
<div className="w-20 h-20 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center relative">
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,1)] animate-pulse"></div>
<svg className="absolute -bottom-6 -right-6 w-8 h-8 text-zinc-200 fill-zinc-900 stroke-2 drop-shadow-lg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24">
<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
</svg>
</div>
</div>
<span className="absolute top-8 left-8 text-emerald-500/40 text-2xl font-mono font-medium">01</span>
</div>
</div>

<div className="group relative bg-[#0A0A0A] rounded-3xl overflow-hidden border border-white/5 grid md:grid-cols-2 gap-0 items-stretch">
<div className="relative order-2 md:order-1 min-h-[400px] md:min-h-full bg-gradient-to-bl from-emerald-900/40 via-black to-black overflow-hidden flex items-center justify-center border-l-0 md:border-r border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>

<div className="relative z-10 w-3/4 max-w-sm aspect-[4/3] rounded-xl border border-white/10 bg-[#050505] p-5 shadow-2xl group-hover:scale-105 transition-transform duration-700">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
</div>
<div className="space-y-3">
<div className="w-1/3 h-2 bg-emerald-500/20 rounded-full"></div>
<div className="w-full h-10 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg border border-emerald-500/20 flex items-center px-3 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-2/3 bg-emerald-500/10 border-r border-emerald-500/30"></div>
</div>
<div className="space-y-2 pt-2">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
<div className="w-full h-px bg-white/5"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500/30"></div>
<div className="w-2/3 h-px bg-white/5"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500/20"></div>
<div className="w-1/2 h-px bg-white/5"></div>
</div>
</div>
</div>
</div>
<span className="absolute top-8 left-8 text-emerald-500/40 text-2xl font-mono font-medium">02</span>
</div>
<div className="p-8 md:p-16 flex flex-col justify-between h-full order-1 md:order-2">
<div className="">
<span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-6 block">Feature 2</span>
<h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-[1.1]">Unlock actionable  business intelligence.</h3>
</div>
<p className="text-lg text-zinc-500 max-w-md font-normal leading-relaxed">Automate repetitive tasks across departments, reducing manual effort and increasing overall productivity.</p>
</div>
</div>

<div className="group relative bg-[#0A0A0A] rounded-3xl overflow-hidden border border-white/5 grid md:grid-cols-2 gap-0 items-stretch">
<div className="p-8 md:p-16 flex flex-col justify-between h-full border-r-0 md:border-r border-b md:border-b-0 border-white/5">
<div className="">
<span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-6 block">Feature 3</span>
<h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-[1.1]">Connect your  favourite tools.</h3>
</div>
<p className="text-lg text-zinc-500 max-w-md font-normal leading-relaxed">Easily integrate with your existing software ecosystem to create a unified, efficient workflow.</p>
</div>
<div className="relative min-h-[400px] md:min-h-full bg-gradient-to-br from-emerald-900/40 via-black to-black overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]"></div>

<div className="relative z-10 opacity-80 group-hover:scale-105 transition-transform duration-700">
<svg className="stroke-emerald-500/30" fill="none" height="200" viewbox="0 0 300 200" width="300">

<rect className="fill-emerald-900/20 stroke-emerald-500/50" height="40" rx="12" strokeWidth="1.5" width="40" x="130" y="80"></rect>
<path className="stroke-emerald-400" d="M150 95v10" strokeLinecap="round" strokeWidth="2"></path>
<path className="stroke-emerald-400" d="M145 100h10" strokeLinecap="round" strokeWidth="2"></path>

<path d="M130 100 H 90 C 70 100 70 60 50 60" strokeWidth="1"></path>
<path d="M130 100 H 90 C 70 100 70 140 50 140" strokeWidth="1"></path>
<path d="M170 100 H 210 C 230 100 230 60 250 60" strokeWidth="1"></path>
<path d="M170 100 H 210 C 230 100 230 140 250 140" strokeWidth="1"></path>

<circle className="fill-black stroke-emerald-500/30" cx="50" cy="60" r="4"></circle>
<circle className="fill-black stroke-emerald-500/30" cx="50" cy="140" r="4"></circle>
<circle className="fill-black stroke-emerald-500/30" cx="250" cy="60" r="4"></circle>
<circle className="fill-black stroke-emerald-500/30" cx="250" cy="140" r="4"></circle>
</svg>
</div>
<span className="absolute top-8 left-8 text-emerald-500/40 text-2xl font-mono font-medium">03</span>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] border-white/5 border-t pt-24 pb-24 relative" id="benefits">

<div className="absolute inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[100px]"></div>
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">

<div className="max-w-4xl mb-16">
<h2 className="text-5xl md:text-6xl font-medium text-white tracking-tighter leading-[1.1]">
                Fast. Scalable. Affordable.
                Welcome to Vexel.
            </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative h-80 bg-white rounded-2xl p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
<div className="text-6xl md:text-7xl font-medium text-black tracking-tighter">
                    21+
                </div>
<div className="text-lg font-medium text-zinc-900 tracking-tight">
                    Years of Experience
                </div>
</div>

<div className="group relative h-80 rounded-2xl overflow-hidden">
<style>
        @keyframes beam-spin { to { transform: rotate(360deg); } }
    </style>

<div className="absolute inset-0 -z-20">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#10b981_360deg)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" style={{animation: 'beam-spin 4s linear infinite'}}></div>
</div>

<div className="absolute inset-[1px] bg-[#0A0A0A] rounded-[15px] -z-10 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-emerald-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>

<div className="relative z-10 h-full p-8 flex flex-col justify-between">
<div className="text-6xl md:text-7xl font-medium text-white tracking-tighter">
            21+
        </div>
<div className="text-lg font-medium text-zinc-300 tracking-tight">
            Years of Experience
        </div>
</div>
</div>

<div className="group relative h-80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-white/10">
<div className="text-6xl md:text-7xl font-medium text-white tracking-tighter">
                    81K
                </div>
<div className="text-lg font-medium text-zinc-300 tracking-tight">
                    Happy Users
                </div>
</div>

<div className="group relative h-80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-white/10">
<div className="text-6xl md:text-7xl font-medium text-white tracking-tighter">
                    +48%
                </div>
<div className="text-lg font-medium text-zinc-300 tracking-tight">
                    Better Conversion
                </div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-t pt-24 pb-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Simple, transparent pricing</h2>
<p className="text-xl text-zinc-400 font-normal">Start for free, scale as you grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="p-8 rounded-2xl bg-zinc-900/20 border border-white/5 flex flex-col">
<h3 className="text-xl font-medium text-zinc-200 mb-2">Starter</h3>
<div className="mb-6"><span className="text-4xl font-medium text-white tracking-tight">$0</span><span className="text-zinc-500 text-lg">/mo</span></div>
<p className="text-lg text-zinc-500 mb-8 font-normal">Perfect for side projects.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-lg text-zinc-400 font-normal">
<svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            2 AI Campaigns
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-400 font-normal">
<svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Basic Analytics
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-400 font-normal">
<svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Community Support
                        </li>
</ul>
<button className="w-full py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors font-medium">Get Started</button>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-emerald-500/50 flex flex-col relative shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]">
<div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-emerald-500 text-black text-xs font-semibold rounded-full uppercase tracking-wide">Popular</div>
<h3 className="text-xl font-medium text-white mb-2">Pro</h3>
<div className="mb-6"><span className="text-4xl font-medium text-white tracking-tight">$29</span><span className="text-zinc-500 text-lg">/mo</span></div>
<p className="text-lg text-zinc-500 mb-8 font-normal">For growing businesses.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-lg text-zinc-300 font-normal">
<svg className="lucide lucide-check w-5 h-5 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Unlimited Campaigns
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-300 font-normal">
<svg className="lucide lucide-check w-5 h-5 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Advanced Analytics
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-300 font-normal">
<svg className="lucide lucide-check w-5 h-5 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Priority Support
                        </li>
</ul>
<button className="w-full py-3 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 transition-colors font-medium">Start Free Trial</button>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/20 border border-white/5 flex flex-col">
<h3 className="text-xl font-medium text-zinc-200 mb-2">Enterprise</h3>
<div className="mb-6"><span className="text-4xl font-medium text-white tracking-tight">Custom</span></div>
<p className="text-lg text-zinc-500 mb-8 font-normal">For large organizations.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-lg text-zinc-400 font-normal">
<svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Dedicated Account Manager
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-400 font-normal">
<svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            SSO &amp; SLA
                        </li>
<li className="flex items-center gap-3 text-lg text-zinc-400 font-normal">
<svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Custom Integrations
                        </li>
</ul>
<button className="w-full py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors font-medium">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="py-20 bg-black border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-medium tracking-tight text-white mb-6 block" href="#">vexel.saas</a>
<p className="text-lg text-zinc-500 font-normal mb-8 max-w-xs">Making marketing automated, intelligent, and effortless for everyone.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div>
<h4 className="text-base font-medium text-white mb-6">Product</h4>
<ul className="space-y-4 text-base text-zinc-500 font-normal">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium text-white mb-6">Company</h4>
<ul className="space-y-4 text-base text-zinc-500 font-normal">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium text-white mb-6">Legal</h4>
<ul className="space-y-4 text-base text-zinc-500 font-normal">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-zinc-600">© 2024 Vexel Inc. All rights reserved.</p>
<div className="flex gap-8 text-sm text-zinc-600">
<span>Designed with Tailwind</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
