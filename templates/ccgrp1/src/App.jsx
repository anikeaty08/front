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
brand: {
dark: '#011B39',    // Primary Blue
deep: '#0047AB',    // Deep Blue
accent: '#008DCD',  // Accent Teal (Blue-Cyan)
surface: '#F5F7FA', // Soft Gray
},
text: {
main: '#4A5568',    // Slate @ 85% roughly
dark: '#011B39',
}
},
boxShadow: {
'low': '0 4px 12px rgba(0,0,0,0.05)',
'mid': '0 12px 24px rgba(0,0,0,0.08)',
'glow': '0 0 20px rgba(0, 141, 205, 0.3)',
'card': '0 20px 40px -15px rgba(0, 71, 171, 0.15)',
},
backgroundImage: {
'hero-gradient': 'linear-gradient(180deg, #011B39 0%, #0047AB 100%)',
},
animation: {
'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'float': 'float 6s ease-in-out infinite',
'border-spin': 'border-spin 2.5s linear infinite',
'shimmer': 'shimmer 4s linear infinite',
'breathe': 'breathe 4.5s linear infinite',
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
'border-spin': {
'to': { '--gradient-angle': '360deg' }
},
shimmer: {
'to': { transform: 'translate(-50%, -50%) rotate(360deg)' }
},
breathe: {
'0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
'50%': { transform: 'translate(-50%, -50%) scale(1.20)' }
}
}
}
}
}



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
      

<nav className="fixed transition-all duration-300 z-50 bg-white/90 w-full border-gray-100 border-b top-0 shadow-sm backdrop-blur-md">
<div className="flex h-20 max-w-[1280px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<style>
    @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
    @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
    @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
    @property --gradient-shine { syntax: "<color>"; initial-value: #008DCD; inherits: false; }
    
    .shiny-cta {
      --gradient-angle: 0deg;
      --gradient-angle-offset: 0deg;
      --gradient-percent: 20%;
      --gradient-shine: #008DCD;
      position: relative;
      overflow: hidden;
      border-radius: 9999px;
      padding: 0.875rem 2rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: #ffffff;
      background: linear-gradient(#0047AB, #011B39) padding-box, 
                  conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)), 
                  transparent 0%, #0047AB 5%, var(--gradient-shine) 15%, #0047AB 30%, transparent 40%, transparent 100%) border-box;
      border: 1px solid transparent;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
      transition: box-shadow 0.3s, transform 0.2s;
      cursor: pointer;
      isolation: isolate;
      animation: border-spin 2.5s linear infinite;
    }
    .shiny-cta:hover { transform: translateY(-1px); box-shadow: 0 10px 20px -5px rgba(0, 141, 205, 0.4); }
    .shiny-cta:active { transform: translateY(1px); }
    @keyframes border-spin { to { --gradient-angle: 360deg; } }
    .shiny-cta::before {
      content: ''; pointer-events: none; position: absolute; inset: 0; z-index: 0;
      background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 0) padding-box;
      background-size: 4px 4px; mask-image: conic-gradient(from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black);
      opacity: 0.4;
    }
    .shiny-cta::after {
      content: ''; pointer-events: none; position: absolute; inset: 0; z-index: 1;
      background: linear-gradient(-50deg, transparent, #008DCD, transparent);
      mask-image: radial-gradient(circle at bottom, transparent 40%, black);
      opacity: 0.6; animation: shimmer 4s linear infinite;
    }
    @keyframes shimmer { to { transform: rotate(360deg); } }
    .shiny-cta span { position: relative; z-index: 2; }
  </style>

<a className="flex items-center gap-2 group" href="#">
<div className="flex shadow-brand-deep/30 group-hover:scale-105 transition-transform text-lg font-semibold text-white w-9 h-9 rounded-xl shadow-lg items-center justify-center cursor-pointer" onclick="window.location.href='/native-home-page'" role="button">C</div>
<span className="text-brand-dark text-xl font-semibold tracking-tight">CAPITAL C GROUP</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-text-main">
<a className="hover:text-brand-accent transition-colors" href="/#">About</a>
<a className="hover:text-brand-accent transition-colors" href="#">Industries</a>
<a className="hover:text-brand-accent transition-colors" href="#">Products</a>
<a className="hover:text-brand-accent transition-colors" href="#">How It Works</a>
<a className="hover:text-brand-accent transition-colors" href="#">Resources</a>
</div>

<div className="flex items-center gap-4">
<button className="shiny-cta hidden md:inline-flex">
<span className="">Start Application</span>
</button>

<button className="lg:hidden text-brand-dark hover:text-brand-accent transition-colors">
<svg className="lucide lucide-menu w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-hero-gradient overflow-hidden">

<div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-accent/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4"></div>
<div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">

<div className="lg:col-span-6 text-white space-y-8 animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs font-semibold tracking-wide uppercase text-brand-accent">
<span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                    Now accepting applications
                </div>
<h1 className="md:text-6xl lg:text-[72px] leading-[1.05] text-4xl font-bold tracking-tight">
                    Funding built for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">the real world.</span>
</h1>
<p className="text-lg text-white/80 leading-relaxed max-w-lg font-normal">
                    Capital for industries banks don't understand. From bustling restaurants to construction sites, we speak your language.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="shiny-cta">
<span className="flex items-center gap-2">Start Application <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</button>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-7 py-3.5 rounded-full font-medium text-base transition-all backdrop-blur-sm flex items-center justify-center gap-2">
<svg className="lucide lucide-play-circle w-4 h-4 text-brand-accent" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg> How it works
                    </button>
</div>
<div className="pt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-surface flex items-center justify-center text-xs font-bold text-brand-dark">+2k</div>
</div>
<div className="">
<div className="text-sm font-bold text-white">Trusted by 2,000+</div>
<div className="text-xs text-white/60">Small Business Owners</div>
</div>
</div>
</div>

<div className="lg:col-span-6 relative perspective-1000 animate-fade-up" style={{animationDelay: '0.2s'}}>

<div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent rounded-[2rem] transform rotate-3 blur-md scale-95 -z-10"></div>

<div className="relative overflow-hidden bg-white/95 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl animate-float">

<div className="h-32 w-full relative overflow-hidden">
<img alt="Restaurant Kitchen" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
<div className="absolute bottom-4 left-6">
<span className="bg-brand-dark/90 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10 backdrop-blur-md flex items-center gap-1">
<svg className="lucide lucide-chef-hat w-3 h-3 text-brand-accent" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg> Hospitality Fund
                            </span>
</div>
</div>
<div className="p-6 md:p-8 pt-2">

<div className="flex justify-between items-center mb-6">
<div className="">
<h3 className="text-xl font-bold text-brand-dark">Main Street Bistro</h3>
<p className="text-sm text-gray-500">ID: #882194 • Verified Business</p>
</div>
<div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-green-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                                Active
                            </div>
</div>

<div className="bg-brand-surface rounded-xl p-4 mb-6 border border-gray-100">
<div className="flex justify-between items-end mb-2">
<div>
<div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Approved Amount</div>
<div className="text-2xl font-bold text-brand-dark">$150,000.00</div>
</div>
<div className="text-right">
<div className="text-xs text-brand-accent font-medium">Interest Rate</div>
<div className="text-sm font-semibold text-brand-dark">Competitive</div>
</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
<div className="bg-brand-accent h-full rounded-full w-3/4 shadow-[0_0_10px_rgba(0,141,205,0.5)]"></div>
</div>
<div className="mt-2 text-xs text-gray-400 flex justify-between">
<span className="">Verification Complete</span>
<span className="">Funds Ready</span>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-brand-accent/30 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-brand-surface rounded-lg flex items-center justify-center text-brand-deep group-hover:scale-110 transition-transform">
<svg className="lucide lucide-file-check w-5 h-5" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold text-brand-dark">Bank_Statements.pdf</div>
<div className="text-xs text-green-600 font-medium flex items-center gap-1">
<svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Verified via Ocrolus
                                        </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-3 animate-float" style={{animationDelay: '1s'}}>
<div className="bg-brand-accent/10 p-2.5 rounded-full text-brand-accent">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<div className="text-xs text-gray-500 font-medium">Time to Fund</div>
<div className="text-sm font-bold text-brand-dark">Less than 24h</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-brand-surface border-b border-gray-200 overflow-hidden">
<div className="max-w-[1280px] mx-auto px-6 py-8">
<div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-6 md:gap-12 text-sm font-semibold text-text-main">
<div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-shield-check w-5 h-5 text-brand-accent" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Secure Encryption</span>
</div>
<div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-zap w-5 h-5 text-brand-accent" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="">Same-Day Decisions</span>
</div>
<div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-layout-grid w-5 h-5 text-brand-accent" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span>Tailored for 12+ Industries</span>
</div>
<div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
<svg className="lucide lucide-users w-5 h-5 text-brand-accent" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Dedicated Advisors</span>
</div>
</div>
</div>
</div>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-[1280px] mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-accent font-semibold tracking-wider uppercase text-sm">Why Capital C GRP?</span>
<h2 className="text-3xl lg:text-5xl font-bold text-brand-dark mt-3 mb-6 tracking-tight">Funding Infrastructure <br/>for the Modern Economy</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-brand-surface rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-card hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-[4rem] group-hover:bg-brand-accent/10 transition-colors"></div>
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-target w-7 h-7" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="font-bold text-2xl text-brand-dark mb-4 tracking-tight">Industry-Aligned</h3>
<p className="text-text-main leading-relaxed">We don't just look at credit scores. We look at daily receipts, seasonal trends, and real growth potential specific to your sector.</p>
</div>

<div className="bg-brand-dark rounded-[2rem] p-10 border border-brand-dark shadow-xl hover:-translate-y-2 transition-all duration-300 text-white relative overflow-hidden group">
<div className="absolute -right-10 -top-10 bg-brand-deep w-40 h-40 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
<div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-gauge w-7 h-7 text-white" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<h3 className="font-bold text-2xl text-white mb-4 tracking-tight">Lightning Fast</h3>
<p className="text-white/70 leading-relaxed">Automation handles the busy work. Get pre-approval insights in minutes and funding in as little as 24 hours.</p>
</div>

<div className="bg-brand-surface rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-card hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-[4rem] group-hover:bg-brand-accent/10 transition-colors"></div>
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="lock-shield"></i>
</div>
<h3 className="font-bold text-2xl text-brand-dark mb-4 tracking-tight">Bank-Grade Security</h3>
<p className="text-text-main leading-relaxed">Your data is encrypted and protected. We use the same verification tools as major financial institutions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-surface border-t border-gray-200">
<div className="max-w-[1280px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6 tracking-tight">Industries We Support</h2>
<p className="text-lg text-text-main leading-relaxed">
                        A restaurant's cash flow looks different from a construction company's. We tailor our funding to match your business rhythm.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-dark transition-colors group" href="#">
                    View All Industries <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md">
<img alt="Restaurant" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-3">
<svg className="lucide lucide-utensils w-5 h-5" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<h3 className="text-white font-bold text-xl mb-1">Restaurants</h3>
<p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Seasonal cash flow solutions.</p>
</div>
</div>

<div className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md">
<img alt="Construction" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5f2766e-81d8-4036-baed-e613aa1fcca4_800w.webp"/>
<div className="bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-3">
<svg className="lucide lucide-hard-hat w-5 h-5" data-lucide="hard-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M14 6a6 6 0 0 1 6 6v3"></path><path d="M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></svg>
</div>
<h3 className="text-white font-bold text-xl mb-1">Construction</h3>
<p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Project-based financing.</p>
</div>
</div>

<div className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md">
<img alt="Gym" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-3">
<svg className="lucide lucide-dumbbell w-5 h-5" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<h3 className="text-white font-bold text-xl mb-1">Fitness &amp; Wellness</h3>
<p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Equipment expansion funds.</p>
</div>
</div>

<div className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md">
<img alt="Cannabis Greenhouse" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1599564576463-d038c6945bb5?w=800&amp;q=80"/>
<div className="bg-center bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent bg-[url(https://images.unsplash.com/photo-1599564576463-d038c6945bb5?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0">
<div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-3">
<svg className="lucide lucide-leaf w-5 h-5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-1">Cannabis (Licensed)</h3>
<p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Compliance-ready capital.</p>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 overflow-hidden bg-white pt-24 pb-24 relative">
<div className="max-w-[1280px] mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-tight">Streamlined Funding Process</h2>
<p className="text-lg text-text-main max-w-2xl mx-auto">From application to capital in four simple steps.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10 border-t-2 border-dashed border-gray-300"></div>
<div className="bg-brand-surface p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center relative hover:-translate-y-2 transition-transform duration-300 group">
<div className="w-12 h-12 bg-brand-deep text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 ring-4 ring-blue-100 group-hover:scale-110 transition-transform">1</div>
<h3 className="text-xl font-bold text-brand-dark mb-3">Apply Online</h3>
<p className="text-text-main text-sm leading-relaxed">Submit basic details about your business in minutes via our secure portal.</p>
</div>
<div className="bg-brand-surface p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center relative hover:-translate-y-2 transition-transform duration-300 group">
<div className="w-12 h-12 bg-brand-deep text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 ring-4 ring-blue-100 group-hover:scale-110 transition-transform">2</div>
<h3 className="text-xl font-bold text-brand-dark mb-3">Get Insights</h3>
<p className="text-text-main text-sm leading-relaxed">Securely connect accounts to get fast pre-approval feedback based on real data.</p>
</div>
<div className="bg-brand-surface p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center relative hover:-translate-y-2 transition-transform duration-300 group">
<div className="w-12 h-12 bg-brand-deep text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 ring-4 ring-blue-100 group-hover:scale-110 transition-transform">3</div>
<h3 className="text-xl font-bold text-brand-dark mb-3">Receive Funds</h3>
<p className="text-text-main text-sm leading-relaxed">Select the offer that fits and get funds wired to your account in 24 hours.</p>
</div>
</div>
<div className="mt-16 text-center">
<button className="shiny-cta">
<span>Start Your Application</span>
</button>
</div>
</div>
</section>

<section className="py-24 bg-brand-surface border-t border-gray-200">
<div className="max-w-[1280px] mx-auto px-6">
<div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-32 h-32 bg-brand-accent/10 rounded-br-full"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="text-brand-accent text-6xl font-serif leading-none mb-6 opacity-40">“</div>
<h3 className="text-2xl md:text-4xl font-semibold leading-tight text-brand-dark mb-8 tracking-tight">
                            Capital C GRP delivered funding options faster than any lender we’ve worked with. The process was straightforward, secure, and transparent.
                        </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-brand-deep text-white flex items-center justify-center font-bold text-lg">SJ</div>
<div>
<div className="font-bold text-brand-dark text-lg">Sarah Jenkins</div>
<div className="text-sm text-gray-500">CFO, Retail Solutions Inc.</div>
</div>
</div>
</div>
<div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
<img alt="Meeting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-accent blur-[100px] opacity-20 rounded-full"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
<h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">
                Ready to Move Forward?
            </h2>
<p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-normal">
                Join thousands of businesses using Capital C GRP to fuel their next growth chapter.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<button className="shiny-cta">
<span>Start Your Application</span>
</button>
<button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                    Speak to an Advisor <svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</button>
</div>
</div>
</section>

<footer className="bg-brand-dark text-white/60 py-16 text-sm border-t border-white/10">
<div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="font-bold text-white tracking-tight flex items-center gap-2 text-xl mb-6">
<div className="w-8 h-8 bg-brand-deep rounded-lg flex items-center justify-center text-sm shadow-glow">C</div>
                    CAPITAL C GRP
                </div>
<p className="max-w-xs mb-6">Empowering businesses with the capital they need to grow, innovate, and thrive in the modern economy.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="hover:text-brand-accent transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Partners</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="hover:text-brand-accent transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Success Stories</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-accent transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-[1280px] mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center md:text-left">
            © 2024 Capital C GRP. All rights reserved.
        </div>
</footer>



    </>
  );
}
