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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'Inter', 'sans-serif'],
mono: ['Geist Mono', 'monospace'],
},
colors: {
accent: '#c6f91f',
dark: '#05080A',
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'shimmer': 'shimmer 2s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            revealElements.forEach(el => observer.observe(el));
        });
    
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">

<div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-accent/[0.04] blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>

<div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-blue-500/[0.03] blur-[100px] rounded-full mix-blend-screen"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-dark/70 border-b border-white/[0.08] transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 bg-accent rounded-[4px] flex items-center justify-center text-black font-bold text-xs shadow-[0_0_10px_rgba(198,249,31,0.3)] group-hover:shadow-[0_0_20px_rgba(198,249,31,0.5)] transition-all duration-300">P</div>
<span className="font-semibold text-white tracking-tight group-hover:text-accent transition-colors">PulseIQ</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white/70 hover:text-white transition-colors relative group py-2" href="#features">
                    Features
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-white/70 hover:text-white transition-colors relative group py-2" href="#how-it-works">
                    How it Works
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-xs font-medium text-white/70 hover:text-white transition-colors relative group py-2" href="#pricing">
                    Pricing
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="group relative overflow-hidden rounded text-xs font-medium text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 pt-2 pr-4 pb-2 pl-4" href="#">
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative z-10">Start Free Trial</span>
</a>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative overflow-hidden border-b border-white/[0.08] min-h-[90vh] flex items-center pt-16 pb-16 lg:pt-0 lg:pb-0">
<div className="beam-border-h top"></div>

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 grid-bg opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12">

<div className="flex flex-col lg:mx-0 max-w-2xl mr-auto ml-auto justify-center">
<div className="flex items-center gap-2 mb-8 reveal-on-scroll">
<div className="pl-1 pr-3 py-1 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-2 hover:bg-white/[0.06] transition-colors cursor-default group">
<span className="flex items-center justify-center px-2 py-0.5 rounded-full bg-accent text-[9px] font-bold text-dark uppercase tracking-wide group-hover:shadow-[0_0_10px_rgba(198,249,31,0.4)] transition-all">New</span>
<span className="text-white/60 text-[11px] font-medium tracking-wide group-hover:text-white transition-colors">PulseIQ 2.0 is now live</span>
<svg className="text-white/40 group-hover:text-white transition-colors" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] reveal-on-scroll mb-6">
<span className="block text-white">Understand your</span>
<span className="text-gradient-mask block">users instantly.</span>
</h1>
<p className="leading-relaxed reveal-on-scroll delay-100 text-lg font-light text-white/60 max-w-lg mb-10">
                        Stop drowning in dashboards. PulseIQ connects GA, Stripe, and Mixpanel to give you plain-English answers about why users drop off.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 reveal-on-scroll delay-200">
<button className="px-8 py-4 bg-white text-dark font-semibold rounded hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group">
                            Start Free Trial
                            <svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="px-8 py-4 bg-transparent text-white font-medium rounded border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2">
<svg className="text-white/50" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            Watch Demo
                        </button>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-white/30 reveal-on-scroll delay-300">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border border-dark bg-gray-500"></div>
<div className="w-6 h-6 rounded-full border border-dark bg-gray-400"></div>
<div className="w-6 h-6 rounded-full border border-dark bg-gray-300"></div>
</div>
<p>Trusted by 2,000+ founders</p>
</div>
</div>

<div className="relative perspective-container h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end reveal-on-scroll delay-100">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.15] blur-[100px] rounded-full pointer-events-none"></div>

<div className="w-full max-w-[550px] bg-[#0E1216] border border-white/10 rounded-xl hero-card-3d relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

<div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-[#11151A]">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#2A2E33]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#2A2E33]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#2A2E33]"></div>
</div>
<div className="h-1.5 w-24 bg-white/5 rounded-full"></div>
</div>

<div className="p-6 relative">

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white/[0.02] border border-white/[0.05] p-4 rounded-lg">
<div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Total Revenue</div>
<div className="text-2xl font-medium text-white">$124,500</div>
<div className="text-[10px] text-accent mt-1 flex items-center gap-1">
<svg fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="8"><path d="m18 15-6-6-6 6"></path></svg>
                                        +12.5%
                                    </div>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-4 rounded-lg">
<div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">Active Users</div>
<div className="text-2xl font-medium text-white">4,291</div>
<div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
<svg fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="8"><path d="m18 15-6-6-6 6"></path></svg>
                                        +8.2%
                                    </div>
</div>
</div>

<div className="relative h-40 w-full mb-6 border-b border-white/[0.05]">

<div className="absolute inset-0 flex flex-col justify-between">
<div className="w-full h-px bg-white/[0.02]"></div>
<div className="w-full h-px bg-white/[0.02]"></div>
<div className="w-full h-px bg-white/[0.02]"></div>
<div className="w-full h-px bg-white/[0.02]"></div>
</div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#c6f91f" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#c6f91f" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="" d="M0 100 Q 40 90 80 85 T 160 70 T 240 90 T 320 50 T 400 60 T 480 30 T 560 40 L 560 160 L 0 160 Z" fill="url(#chartGradient)" stroke="none"></path>
<path className="" d="M0 100 Q 40 90 80 85 T 160 70 T 240 90 T 320 50 T 400 60 T 480 30 T 560 40" fill="none" stroke="#c6f91f" strokeLinecap="round" strokeWidth="2"></path>

<circle className="animate-pulse" cx="480" cy="30" fill="#05080A" r="4" stroke="#c6f91f" strokeWidth="2"></circle>
</svg>

<div className="absolute top-[5px] left-[450px] bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg transform -translate-x-1/2">
                                    $4,250
                                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45"></div>
</div>
</div>

<div className="absolute -right-8 top-1/3 bg-[#161b22] border border-white/10 p-3 rounded-lg shadow-2xl backdrop-blur-md animate-float-delayed w-48 z-20">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-purple-500/10 flex items-center justify-center text-purple-400">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<span className="text-[10px] text-white font-medium">New Insight</span>
</div>
<p className="text-[10px] text-white/60 leading-relaxed">Retention rate increased by <span className="text-white font-medium">12%</span> after checkout optimization.</p>
</div>

<div className="absolute -left-6 bottom-8 bg-[#161b22] border border-white/10 p-3 rounded-lg shadow-2xl backdrop-blur-md animate-float w-40 z-20">
<div className="flex items-center justify-between mb-1">
<span className="text-[9px] text-white/40 uppercase">Conversion</span>
<span className="text-[10px] text-accent font-bold">4.8%</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1">
<div className="bg-accent h-1 rounded-full w-[70%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-dark py-10 overflow-hidden relative border-b border-white/[0.08]">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>
<p className="text-center text-[10px] font-mono uppercase tracking-widest text-white/30 mb-8">Trusted by 2,000+ data-driven teams</p>
<div className="animate-marquee flex items-center gap-20 text-white/30">

<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">ACME CORP</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">VISSION</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">LAYER.IO</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">ORBIT</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">NOVASPHERE</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">STACKER</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">ACME CORP</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">VISSION</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">LAYER.IO</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">ORBIT</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">NOVASPHERE</span>
<span className="text-lg font-semibold tracking-tight hover:text-white transition-colors cursor-default">STACKER</span>
</div>
</section>

<section className="py-24 relative border-b border-white/[0.08]" id="features">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6 reveal-on-scroll">
                        Founders are drowning <br/> in <span className="text-white/40">useless charts.</span>
</h2>
<p className="text-lg text-white/60 font-light reveal-on-scroll delay-100">
                        You have data in Stripe, Google Analytics, and Mixpanel. But you still don't know why users aren't converting. PulseIQ fixes that.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] shadow-sm relative overflow-hidden rounded-lg">

<div className="bg-dark p-8 glass-card group reveal-on-scroll">
<div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:border-accent/30 group-hover:scale-110 transition-all duration-300 shadow-inner">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-white transition-colors">Unified Dashboard</h3>
<p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                            Stop switching tabs. See your MRR, traffic, and user behavior all in one synchronized view.
                        </p>
</div>

<div className="bg-dark p-8 glass-card group reveal-on-scroll delay-100">
<div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:border-accent/30 group-hover:scale-110 transition-all duration-300 shadow-inner">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-white transition-colors">Plain-English AI</h3>
<p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                            No complex queries. Ask "Why did signup drop yesterday?" and get a direct answer.
                        </p>
</div>

<div className="bg-dark p-8 glass-card group reveal-on-scroll delay-200">
<div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:border-accent/30 group-hover:scale-110 transition-all duration-300 shadow-inner">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-white transition-colors">Action Suggestions</h3>
<p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                            Don't just see the problem. PulseIQ suggests fixes like "Shorten signup form" to improve conversion.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-b from-dark to-[#080c10] overflow-hidden relative border-b border-white/[0.08]" id="how-it-works">
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-1 text-[10px] text-accent ring-1 ring-accent/20 uppercase tracking-tight mb-4 font-semibold">
<svg className="mr-1" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
                        Integrations
                    </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
<span className="text-gradient-mask pb-2">Connect your entire tech stack</span>
</h2>
<p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
                        One platform, infinite possibilities. Sync with all your favorite tools in seconds.
                    </p>
</div>
<div className="relative mx-auto max-w-4xl reveal-on-scroll">

<div className="flex items-center justify-center gap-6 sm:gap-10 relative z-10">
<div className="group relative">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(198,249,31,0.1)] transition-all duration-300">
<svg className="text-white group-hover:text-accent transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</span>
</div>
<div className="group relative">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(198,249,31,0.1)] transition-all duration-300">
<svg className="text-white group-hover:text-accent transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
</span>
</div>
<div className="group relative">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(198,249,31,0.1)] transition-all duration-300">
<svg className="text-white group-hover:text-accent transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><rect height="9" width="3" x="7" y="7"></rect><rect height="5" width="3" x="14" y="7"></rect></svg>
</span>
</div>
<div className="group relative">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(198,249,31,0.1)] transition-all duration-300">
<svg className="text-white group-hover:text-accent transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</span>
</div>
<div className="group relative">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1216] border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(198,249,31,0.1)] transition-all duration-300">
<svg className="text-white group-hover:text-accent transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</span>
</div>
</div>

<div className="relative mt-8 h-64 pointer-events-none">
<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 900 360">
<defs>
<lineargradient id="line-gradient" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#c6f91f" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#c6f91f" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#c6f91f" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M450 300 C 450 200, 300 120, 150 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="0s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<path d="M450 300 C 450 210, 360 130, 270 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.2s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 150, 420 80, 390 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.4s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 150, 480 80, 510 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.6s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 210, 540 130, 630 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.8s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 200, 600 120, 750 30" fill="none" stroke="url(#line-gradient)" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="1s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
</svg>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
<span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-dark/80 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(198,249,31,0.15)] relative z-20">
<span className="font-bold text-accent text-2xl">P</span>

<span className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl animate-pulse"></span>
</span>
</div>
</div>
</div>
<div className="mx-auto mt-12 max-w-4xl reveal-on-scroll">
<div className="flex items-center justify-center gap-3 flex-wrap text-sm text-white/70">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5">
<svg className="text-accent" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="font-medium text-xs">Instant sync</span>
</div>
<div className="hidden sm:block w-16 h-px border-t border-dashed border-white/20"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5">
<svg className="text-accent" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium text-xs">Secure data</span>
</div>
<div className="hidden sm:block w-16 h-px border-t border-dashed border-white/20"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5">
<svg className="text-accent" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span className="font-medium text-xs">Real-time</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-b border-white/[0.08]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 border border-white/10 border-dashed bg-white/[0.01]">

<div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-white/10 border-dashed relative h-[400px] overflow-hidden group reveal-on-scroll">
<div className="absolute inset-0 flex items-center justify-center -translate-y-12 opacity-60 group-hover:opacity-100 transition-opacity duration-500">

<div className="absolute w-[280px] h-[280px] rounded-full border border-white/5"></div>
<div className="absolute w-[200px] h-[200px] rounded-full border border-white/5"></div>
<div className="absolute w-[120px] h-[120px] rounded-full border border-white/5"></div>

<div className="absolute w-[280px] h-[280px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg_240deg,rgba(198,249,31,0.1)_360deg)] animate-spin-slow"></div>

<div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_#c6f91f] animate-pulse"></div>
<div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-dark via-dark/90 to-transparent">
<h3 className="text-white font-medium text-lg mb-2">User Journey Maps</h3>
<p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                Visualize the exact path users take before they churn or convert.
                            </p>
</div>
</div>

<div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-white/10 border-dashed p-8 flex flex-col h-[400px] reveal-on-scroll delay-100 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<h3 className="text-white font-medium text-lg mb-2">Smart Alerts</h3>
<p className="text-sm text-white/50 mb-8 group-hover:text-white/70 transition-colors">
                            Get notified immediately on Slack or Email when key metrics spike or crash.
                        </p>
<div className="space-y-4">

<div className="flex items-center gap-3 p-3 rounded border border-white/5 bg-[#0F1216] hover:border-red-500/20 hover:bg-red-500/5 transition-all cursor-default">
<div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center text-red-400">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-white">Churn Spike Detected</div>
<div className="text-[10px] text-white/40">Checkout flow dropoff +12%</div>
</div>
<span className="text-[10px] text-white/30">Now</span>
</div>

<div className="flex items-center gap-3 p-3 rounded border border-white/5 bg-[#0F1216] hover:border-accent/20 hover:bg-accent/5 transition-all cursor-default">
<div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-white">MRR Milestone</div>
<div className="text-[10px] text-white/40">Crossed $10k MRR</div>
</div>
<span className="text-[10px] text-white/30">2h ago</span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 h-[400px] bg-dark relative p-8 reveal-on-scroll delay-200 group overflow-hidden">

<div className="absolute inset-0 grid grid-cols-4 grid-rows-4 divide-x divide-y divide-white/5 opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity">
<div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6 shadow-[0_0_15px_rgba(198,249,31,0.1)] group-hover:shadow-[0_0_25px_rgba(198,249,31,0.2)] transition-shadow">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<h3 className="text-white font-medium text-lg mb-2">Automated Fixes</h3>
<p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                PulseIQ suggests page copy edits and triggers retention emails automatically based on user behavior.
                             </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-b border-white/[0.08]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-accent font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">Pricing</span>
<h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter">
                        Simple, predictable <span className="text-white/40">pricing.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-dark border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/20 transition-all duration-300 reveal-on-scroll">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-light text-white">$19</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-sm text-white/50 mb-8 h-10">Perfect for solo founders and indie hackers.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                3 Integrations
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Basic Analytics
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                1,000 tracked users
                            </li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 transition-colors">Start Free Trial</button>
</div>

<div className="bg-[#0B0F13] border border-accent/30 rounded-xl p-8 flex flex-col relative reveal-on-scroll delay-100 shadow-[0_0_30px_rgba(198,249,31,0.05)] transform hover:-translate-y-2 transition-all duration-300">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-[10px] font-bold text-black uppercase tracking-wider rounded-full shadow-[0_0_10px_rgba(198,249,31,0.4)]">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Growth</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-light text-white">$49</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-sm text-white/50 mb-8 h-10">For small teams building products fast.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center"><svg fill="none" height="10" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Unlimited Integrations
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center"><svg fill="none" height="10" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                AI Action Suggestions
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-accent text-black flex items-center justify-center"><svg fill="none" height="10" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Smart Alerts
                            </li>
</ul>
<button className="w-full py-3 bg-accent text-black rounded-lg text-sm font-semibold hover:bg-[#d4ff4d] hover:shadow-[0_0_15px_rgba(198,249,31,0.4)] transition-all">Get Started</button>
</div>

<div className="bg-dark border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/20 transition-all duration-300 reveal-on-scroll delay-200">
<h3 className="text-lg font-medium text-white mb-2">Scale</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-light text-white">$99</span>
<span className="text-sm text-white/50">/mo</span>
</div>
<p className="text-sm text-white/50 mb-8 h-10">Agencies and SaaS with heavy traffic.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Everything in Growth
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                User Journey Maps
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white"><svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10"><path d="M20 6 9 17l-5-5"></path></svg></div>
                                Priority Support
                            </li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-t from-accent/[0.03] to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-light text-white tracking-tighter mb-8 reveal-on-scroll">
                    Get insights in under <span className="text-accent relative inline-block">5 minutes.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg></span>
</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-on-scroll delay-100">
<button className="px-10 py-4 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-1">
                        Start Free Trial
                    </button>
<button className="px-10 py-4 bg-transparent border border-white/10 text-white font-medium rounded hover:bg-white/5 hover:border-white/20 transition-all w-full sm:w-auto">
                        View Documentation
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-dark pt-20 pb-10 relative border-t border-white/[0.08]">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-accent rounded-[4px] flex items-center justify-center text-black font-bold text-xs shadow-[0_0_10px_rgba(198,249,31,0.2)]">P</div>
<span className="font-semibold text-white tracking-tight">PulseIQ</span>
</div>
<p className="text-sm text-white/50 leading-relaxed">
                        AI-powered customer analytics for the next generation of startups.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-accent transition-colors" href="#">Features</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-xs text-white/50">
<li className=""><a className="hover:text-accent transition-colors" href="#">About</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="#">Blog</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-xs text-white/50">
<li><a className="hover:text-accent transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-accent transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Community</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 border-dashed pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-xs text-white/30">© 2024 PulseIQ Inc. All rights reserved.</span>
<div className="flex gap-6">
<a className="text-white/30 hover:text-white transition-colors hover:scale-110" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-white/30 hover:text-white transition-colors hover:scale-110" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-white/30 hover:text-white transition-colors hover:scale-110" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div className="mt-20 opacity-10 select-none pointer-events-none overflow-hidden">
<h1 className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-transparent mix-blend-overlay">PULSEIQ</h1>
</div>
</div>
</footer>



    </>
  );
}
