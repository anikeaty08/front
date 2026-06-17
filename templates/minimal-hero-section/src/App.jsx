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
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
base: '#030303',
elevated: '#0F1110',
surface: '#141917',
neon: '#2EEA9D',
cyan: '#22D3EE',
border: 'rgba(255,255,255,0.08)',
},
animation: {
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



              !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-base/70 backdrop-blur-xl supports-[backdrop-filter]:bg-base/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.05] flex items-center justify-center group-hover:bg-neon/10 group-hover:border-neon/20 transition-all duration-300 shadow-[0_0_15px_-5px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-gray-300 group-hover:text-neon transition-colors" icon="solar:code-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold text-[15px] tracking-tight text-gray-200 group-hover:text-white transition-colors">MONETIZE</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors tracking-wide" href="#">Platform</a>
<a className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors tracking-wide" href="#">Features</a>
<a className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors tracking-wide" href="#">Resources</a>
<a className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors tracking-wide" href="#">Pricing</a>
</div>
<div className="flex items-center gap-5">
<button className="hidden sm:block text-[13px] font-medium text-gray-400 hover:text-white transition-colors">Sign In</button>
<button className="group relative text-[13px] font-semibold bg-[#EDEDED] text-black px-4 py-2 rounded-full hover:bg-white transition-all active:scale-95 duration-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
<span className="relative z-10 flex items-center gap-1">
                        Get Started
                    </span>
</button>
</div>
</div>
</nav>

<main className="lg:pt-48 lg:pb-32 overflow-hidden min-h-screen pt-32 pb-24 relative flex items-center">

<div className="absolute top-[-10%] left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-neon/[0.08] blur-[100px] rounded-full pointer-events-none mix-blend-screen animate-pulse-slow"></div>
<div className="absolute top-[-5%] right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-purple-500/[0.1] blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

<div className="aura-background-component -top-[15%] w-full -z-10 absolute h-[110%] pointer-events-none saturate-200 brightness-125 mix-blend-screen">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-base via-base/80 to-transparent z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

<div className="flex flex-col items-start max-w-2xl animate-fade-up">
<div className="group inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-md hover:bg-white/[0.06] hover:border-white/[0.12] transition-all cursor-default shadow-[0_0_15px_-5px_rgba(0,0,0,0.5)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
</span>
<span className="text-[13px] font-medium text-gray-300 group-hover:text-white transition-colors">New: Global tax compliance</span>
<iconify-icon className="text-gray-500 group-hover:text-gray-300 transition-colors" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.05] mb-6 text-glow">
                        Monetize code,
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">maximize value.</span>
</h1>
<p className="text-lg text-[#999] leading-relaxed mb-10 max-w-lg tracking-wide font-light">
                        The complete infrastructure for developer-first payments. Handle subscriptions, usage-based billing, and global tax compliance with a single, type-safe API.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-neon bg-[#0A0A0A] border border-neon/20 rounded-full overflow-hidden transition-all duration-300 hover:border-neon/60 hover:shadow-[0_0_40px_-10px_rgba(46,234,157,0.4)] hover:-translate-y-0.5 active:scale-95">
<span className="z-10 relative text-white group-hover:text-neon transition-colors">Start Building</span>
<iconify-icon className="relative z-10 transition-transform group-hover:translate-x-1 text-white group-hover:text-neon" icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon>

<div className="absolute inset-0 bg-gradient-to-t from-neon/20 via-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
</button>
<button className="group inline-flex gap-2 text-[15px] font-medium text-gray-300 bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all duration-200 rounded-full py-3.5 px-8 items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Documentation
                        </button>
</div>
<div className="mt-12 flex items-center gap-8 text-[13px] text-gray-500 font-medium">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 rounded-full bg-neon/10 border border-neon/10 flex items-center justify-center text-neon shadow-[0_0_10px_-4px_rgba(46,234,157,0.4)]">
<iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon>
</div>
<span className="text-gray-400">99.99% Uptime</span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 rounded-full bg-neon/10 border border-neon/10 flex items-center justify-center text-neon shadow-[0_0_10px_-4px_rgba(46,234,157,0.4)]">
<iconify-icon icon="solar:shield-check-linear" width="12"></iconify-icon>
</div>
<span className="text-gray-400">SOC2 Certified</span>
</div>
</div>
</div>

<div className="relative w-full lg:h-[600px] flex items-center justify-center lg:justify-end animate-fade-up perspective-1000" style={{animationDelay: '0.2s'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-neon/10 via-transparent to-cyan/5 blur-[90px] rounded-full pointer-events-none opacity-50"></div>

<div className="relative w-full max-w-[420px] rounded-[32px] bg-[#080909]/80 backdrop-blur-2xl border border-white/[0.1] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden glass-shine z-10 transition-transform hover:scale-[1.01] duration-700 group">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>

<div className="flex items-start justify-between mb-10 relative">
<div className="">
<h3 className="text-xs font-semibold text-gray-400 flex items-center gap-2 mb-2 uppercase tracking-wider">
<iconify-icon className="text-gray-500" icon="solar:wallet-money-linear" width="14"></iconify-icon>
                                    Total Revenue
                                </h3>
<div className="text-[36px] font-semibold text-white tracking-tight flex items-baseline gap-1 text-glow">
                                    $2,845,000<span className="text-xl text-gray-600 font-normal">.00</span>
</div>
</div>
<div className="px-3 py-1.5 bg-neon/[0.08] border border-neon/20 rounded-full text-neon text-[11px] font-semibold flex items-center gap-1 shadow-[0_0_15px_-5px_rgba(46,234,157,0.3)]">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="2" width="10"></iconify-icon>
                                +12.5%
                            </div>
</div>

<div className="h-44 w-full flex items-end justify-between gap-3 mb-8 relative z-10 px-1">

<div className="absolute inset-0 w-full h-full flex flex-col justify-between pointer-events-none opacity-20">
<div className="w-full h-[1px] bg-white/20 border-t border-dashed border-white/20"></div>
<div className="w-full h-[1px] bg-white/20 border-t border-dashed border-white/20"></div>
<div className="w-full h-[1px] bg-white/20 border-t border-dashed border-white/20"></div>
</div>

<div className="w-full bg-white/[0.04] hover:bg-gradient-to-t hover:from-neon/[0.02] hover:to-neon/[0.15] rounded-t-[2px] relative group/bar cursor-pointer transition-all duration-500 h-[40%] animate-bar hover:shadow-[0_0_25px_-5px_rgba(46,234,157,0.3)]" style={{animationDelay: '0.1s'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/bar:translate-y-0 z-20 pointer-events-none">
<div className="bg-[#1A1D1C] border border-white/10 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-white shadow-2xl whitespace-nowrap backdrop-blur-md">
<span className="text-neon">$22,680</span>
</div>
<div className="w-1.5 h-1.5 bg-[#1A1D1C] border-r border-b border-white/10 rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2"></div>
</div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-neon/60 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(46,234,157,0.8)]"></div>
</div>
<div className="w-full bg-white/[0.04] hover:bg-white/[0.1] rounded-t-[2px] relative group/bar cursor-pointer transition-all duration-300 h-[55%] animate-bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-full bg-white/[0.04] hover:bg-white/[0.1] rounded-t-[2px] relative group/bar cursor-pointer transition-all duration-300 h-[35%] animate-bar" style={{animationDelay: '0.3s'}}></div>

<div className="w-full bg-gradient-to-t from-neon/10 to-neon rounded-t-[2px] relative shadow-[0_0_30px_-5px_rgba(46,234,157,0.5)] h-[85%] animate-bar group/bar cursor-pointer" style={{animationDelay: '0.4s'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/bar:translate-y-0 z-20">
<div className="bg-[#1A1D1C] border border-white/10 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-white shadow-2xl whitespace-nowrap">
                                        $48,200
                                    </div>
<div className="w-1.5 h-1.5 bg-[#1A1D1C] border-r border-b border-white/10 rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2"></div>
</div>
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-full h-[2px] bg-white/80 blur-[2px]"></div>
</div>
<div className="w-full bg-white/[0.04] hover:bg-white/[0.1] rounded-t-[2px] relative group/bar cursor-pointer transition-all duration-300 h-[60%] animate-bar" style={{animationDelay: '0.5s'}}></div>
<div className="w-full bg-white/[0.04] hover:bg-white/[0.1] rounded-t-[2px] relative group/bar cursor-pointer transition-all duration-300 h-[75%] animate-bar" style={{animationDelay: '0.6s'}}></div>
<div className="w-full bg-white/[0.04] hover:bg-white/[0.1] rounded-t-[2px] relative group/bar cursor-pointer transition-all duration-300 h-[50%] animate-bar" style={{animationDelay: '0.7s'}}></div>
</div>

<div className="flex justify-between text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-8 px-1">
<span className="hover:text-gray-300 transition-colors cursor-default">Mon</span>
<span className="hover:text-gray-300 transition-colors cursor-default">Tue</span>
<span className="hover:text-gray-300 transition-colors cursor-default">Wed</span>
<span className="text-neon drop-shadow-[0_0_8px_rgba(46,234,157,0.5)] cursor-default font-semibold">Thu</span>
<span className="hover:text-gray-300 transition-colors cursor-default">Fri</span>
<span className="hover:text-gray-300 transition-colors cursor-default">Sat</span>
<span className="hover:text-gray-300 transition-colors cursor-default">Sun</span>
</div>

<div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
<div className="flex flex-col gap-1.5 group/stat cursor-default">
<span className="text-[11px] text-gray-500 font-medium tracking-wide">Active Currencies</span>
<div className="flex items-center gap-2">
<span className="text-[15px] font-semibold text-white group-hover/stat:text-neon transition-colors">142</span>
<div className="flex -space-x-1.5 opacity-60 group-hover/stat:opacity-100 transition-opacity">
<div className="w-4 h-4 rounded-full bg-[#3B82F6] border border-[#080909] flex items-center justify-center text-[6px] text-white font-bold">U</div>
<div className="w-4 h-4 rounded-full bg-[#8B5CF6] border border-[#080909] flex items-center justify-center text-[6px] text-white font-bold">E</div>
<div className="w-4 h-4 rounded-full bg-gray-700 border border-[#080909] flex items-center justify-center text-[6px] text-white font-bold">+</div>
</div>
</div>
</div>
<div className="flex flex-col gap-1.5 group/stat cursor-default">
<span className="text-[11px] text-gray-500 font-medium tracking-wide">Tax Automated</span>
<div className="flex items-center gap-2">
<span className="text-[15px] font-semibold text-white group-hover/stat:text-neon transition-colors">100%</span>
<iconify-icon className="text-neon opacity-80 group-hover/stat:opacity-100 transition-opacity" icon="solar:verified-check-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute top-8 -right-4 lg:-right-8 w-64 bg-[#0F1110] border border-white/[0.08] p-4 rounded-2xl shadow-2xl -z-10 opacity-70 scale-90 blur-[0.5px] rotate-3 animate-float">
<div className="flex gap-2 mb-3">
<div className="h-2 w-8 bg-white/10 rounded-full"></div>
<div className="h-2 w-2 bg-red-500/20 rounded-full"></div>
</div>
<div className="h-1.5 w-full bg-white/[0.05] rounded-full mb-2"></div>
<div className="h-1.5 w-2/3 bg-white/[0.05] rounded-full"></div>
</div>
</div>
</div>
</div>
</main>

<section className="border-t border-white/[0.06] bg-base py-12 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-[11px] font-semibold text-gray-600 mb-10 tracking-[0.2em] uppercase">Trusted by developers at</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
<div className="flex items-center gap-2 text-white font-bold tracking-tighter text-lg">
<iconify-icon icon="solar:asteroid-linear" width="22"></iconify-icon> ORBITAL
                </div>
<div className="flex items-center gap-2 text-white font-bold tracking-tighter text-lg">
<iconify-icon icon="solar:atom-linear" width="22"></iconify-icon> NUCLEUS
                </div>
<div className="flex items-center gap-2 text-white font-bold tracking-tighter text-lg">
<iconify-icon icon="solar:infinite-linear" width="22"></iconify-icon> LOOP
                </div>
<div className="flex items-center gap-2 text-white font-bold tracking-tighter text-lg">
<iconify-icon icon="solar:layers-linear" width="22"></iconify-icon> STACK
                </div>
<div className="flex items-center gap-2 text-white font-bold tracking-tighter text-lg">
<iconify-icon icon="solar:bolt-linear" width="22"></iconify-icon> VOLT
                </div>
</div>
</div>
</section>

    </>
  );
}
