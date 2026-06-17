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
500: '#FF5A1F', // Original Orange preserved
600: '#E0480F',
900: '#331206',
},
neutral: {
850: '#171717',
900: '#0A0A0A', // Darker base
925: '#080808',
950: '#030303',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'glass': 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
'glass-dark': 'linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.95) 100%)',
'shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-gradient-to-tr from-brand-600 to-brand-500 rounded flex items-center justify-center shadow-[0_0_15px_rgba(255,90,31,0.3)]">
<span className="font-semibold text-white text-xs leading-none">f</span>
</div>
<span className="text-sm font-semibold tracking-tight text-white">finguard</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-neutral-950 text-sm font-semibold px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Sign up
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in">
<span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide">v2.0 is now live</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] mb-8 max-w-5xl mx-auto">
<span className="text-gradient">Excellence through</span><br/>
<span className="text-white/40">AI-Driven Infrastructure</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
                Signal AI delivers trailblazing technology solutions designed to redefine operational efficiency. From e-governance to custom enterprise software, we empower the public and private sectors to exponentially reduce costs and maximize revenue through measurable, high-impact innovation
            </p>
<div className="flex items-center gap-4">
<button className="group bg-white text-neutral-950 px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all hover:bg-neutral-200 flex items-center gap-2">
                    Start Integration
                    <i className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</button>
<button className="px-8 py-3 rounded-full font-medium text-sm text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all">
                    View Documentation
                </button>
</div>
</div>

<div className="relative h-[500px] w-full max-w-5xl mx-auto perspective-1000 mt-12">

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'}}></div>

<div className="absolute top-1/2 left-1/2 w-[340px] h-[220px] bg-neutral-900 rounded-2xl border border-white/10 shadow-2xl transform -translate-x-24 -translate-y-24 rotate-[-12deg] z-10 flex flex-col p-6 justify-between transition-transform duration-700 hover:-translate-y-28 opacity-60">
<div className="flex justify-between items-center">
<div className="w-8 h-5 bg-neutral-800 rounded"></div>
<i className="w-5 h-5 text-neutral-700" data-lucide="wifi"></i>
</div>
<div className="space-y-2">
<div className="h-2 w-24 bg-neutral-800 rounded"></div>
<div className="h-2 w-16 bg-neutral-800 rounded"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[340px] h-[220px] bg-neutral-800/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl transform translate-x-8 -translate-y-12 rotate-[6deg] z-20 flex flex-col p-6 justify-between transition-transform duration-700 hover:-translate-y-16">
<div className="flex justify-between">
<div className="flex flex-col">
<span className="text-xs text-neutral-400 font-mono">Current Balance</span>
<span className="text-2xl font-semibold text-white tracking-tight">$124,592.00</span>
</div>
<div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
</div>
<div className="w-full h-1 bg-neutral-700 rounded-full overflow-hidden mt-4">
<div className="w-[70%] h-full bg-brand-500 rounded-full"></div>
</div>
<div className="flex justify-between text-xs font-mono text-neutral-500 mt-2">
<span>Active</span>
<span>+12.5%</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[340px] h-[220px] bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col p-6 justify-between group overflow-hidden">

<div className="absolute inset-0 bg-shine opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex justify-between items-start z-10">
<span className="font-semibold text-lg tracking-tight text-white">finguard</span>
<i className="w-6 h-6 text-white/50" data-lucide="contactless"></i>
</div>
<div className="flex items-center gap-3 z-10">
<div className="w-10 h-7 rounded bg-gradient-to-tr from-yellow-200 to-yellow-400 opacity-90"></div>
</div>
<div className="z-10">
<div className="text-lg font-mono tracking-widest text-neutral-300 mb-1">•••• 4092</div>
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-neutral-500">Card Holder</span>
<span className="text-sm font-medium text-white">Jaylen Brown</span>
</div>
<span className="font-bold italic text-white/80">VISA</span>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                Getting to know <span className="text-neutral-500">finguard</span>
</h2>
<p className="text-neutral-400 max-w-xl text-lg font-normal">
                Beyond traditional banking. We provide the infrastructure for the next generation of financial companies.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-1 rounded-3xl p-8 bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/5 relative group overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<i className="w-24 h-24 text-white" data-lucide="users"></i>
</div>
<div className="h-full flex flex-col justify-end relative z-10">
<div className="mb-4 w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center text-brand-500">
<i className="w-5 h-5" data-lucide="user-plus"></i>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl font-semibold text-white tracking-tight">500k</span>
<span className="text-xl text-neutral-500 font-medium">users</span>
</div>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Rapidly attracting a substantial user base within the first year of operation.
                    </p>
</div>
</div>

<div className="md:col-span-1 rounded-3xl p-8 bg-neutral-900 border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
<div className="h-full flex flex-col justify-between relative z-10">
<div className="w-full bg-neutral-800/50 rounded-lg h-32 flex items-center justify-center mb-6 border border-white/5">
<div className="relative w-24 h-24 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-neutral-800" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-brand-500" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="5" strokeWidth="4"></circle>
</svg>
<span className="absolute text-2xl font-semibold text-white">98%</span>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Processing Speed</h3>
<p className="text-sm text-neutral-400">Transactions processed in under 200ms.</p>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-3xl p-8 bg-gradient-to-br from-brand-600 to-brand-500 text-white relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
<div className="h-full flex flex-col justify-between relative z-10">
<div className="flex justify-between items-start">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="globe"></i>
</div>
</div>
<div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl font-semibold tracking-tight">200+</span>
<span className="text-xl opacity-80 font-medium">countries</span>
</div>
<p className="text-sm opacity-90 leading-relaxed font-medium">
                            A unified global network connecting partner ATMs and local payment methods worldwide.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div>
<span className="text-brand-500 font-mono text-xs uppercase tracking-wider mb-2 block">Platform</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
                    All-in-one platform <br/><span className="text-neutral-500">for modern savings.</span>
</h2>
</div>
<div className="flex items-end">
<p className="text-lg text-neutral-400 max-w-md">
                    Simplify your financial life by securely connecting your accounts and automatically categorizing transactions with AI.
                </p>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

<div className="lg:col-span-5 flex flex-col justify-center space-y-2">

<div className="group p-4 rounded-xl cursor-pointer transition-colors hover:bg-white/5 border border-transparent hover:border-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="font-mono text-neutral-600 text-sm">01</span>
<h3 className="text-lg font-medium text-neutral-300 group-hover:text-white transition-colors">Secure Transactions</h3>
</div>
<i className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group p-4 rounded-xl cursor-pointer transition-colors hover:bg-white/5 border border-transparent hover:border-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="font-mono text-neutral-600 text-sm">02</span>
<h3 className="text-lg font-medium text-neutral-300 group-hover:text-white transition-colors">Real-Time Monitoring</h3>
</div>
<i className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-right"></i>
</div>
</div>

<div className="p-6 rounded-xl bg-neutral-900 border border-brand-500/30 shadow-[0_0_30px_-10px_rgba(255,90,31,0.1)] relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-brand-500"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="font-mono text-brand-500 text-sm">03</span>
<h3 className="text-xl font-semibold text-white">AI Analysis &amp; Planning</h3>
</div>
<div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
</div>
</div>
<p className="mt-4 text-sm text-neutral-400 pl-8 leading-relaxed">
                        Our models predict spending habits and suggest optimization strategies automatically.
                    </p>
</div>

<div className="group p-4 rounded-xl cursor-pointer transition-colors hover:bg-white/5 border border-transparent hover:border-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="font-mono text-neutral-600 text-sm">04</span>
<h3 className="text-lg font-medium text-neutral-300 group-hover:text-white transition-colors">Automated Reporting</h3>
</div>
<i className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-neutral-900 rounded-3xl border border-white/5 p-8 lg:p-12 relative flex items-center justify-center overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-[80px]"></div>

<div className="w-full max-w-md bg-neutral-950 rounded-xl border border-white/10 shadow-2xl overflow-hidden relative z-10">

<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-neutral-900/50 backdrop-blur">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-xs font-mono text-neutral-500">invoice_preview.pdf</span>
</div>

<div className="p-6 space-y-6">
<div className="flex justify-between items-start">
<div>
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Total Amount</p>
<p className="text-2xl font-semibold text-white">$2,459.50</p>
</div>
<span className="bg-brand-900/30 text-brand-500 text-[10px] font-bold px-2 py-1 rounded border border-brand-500/20 uppercase tracking-wide">Pending</span>
</div>

<div className="space-y-3">
<div className="flex justify-between text-xs text-neutral-400">
<span>Spending Limit</span>
<span>67% Used</span>
</div>
<div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden border border-white/5">
<div className="h-full w-[67%] bg-gradient-to-r from-neutral-600 to-white rounded-full"></div>
</div>
</div>

<div className="space-y-1">
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Recent Activity</p>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-white border border-white/10">KW</div>
<div>
<p className="text-sm font-medium text-neutral-300 group-hover:text-white">Kelly Williams</p>
<p className="text-[10px] text-neutral-500">API Integration</p>
</div>
</div>
<span className="text-xs font-mono text-neutral-400">-$450.00</span>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium text-white border border-white/10">JT</div>
<div>
<p className="text-sm font-medium text-neutral-300 group-hover:text-white">John Terry</p>
<p className="text-[10px] text-neutral-500">Server Costs</p>
</div>
</div>
<span className="text-xs font-mono text-neutral-400">-$129.00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5 bg-neutral-950 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-900/10 via-neutral-950 to-neutral-950 pointer-events-none"></div>
<div className="flex flex-col lg:flex-row items-center gap-20 relative z-10">

<div className="lg:w-1/2 relative h-[500px] w-full flex items-center justify-center">

<div className="absolute w-[280px] h-[400px] bg-brand-500/20 rounded-[32px] transform rotate-[-12deg] blur-2xl"></div>

<div className="absolute w-[300px] h-[460px] glass-card rounded-[32px] flex flex-col justify-between p-8 text-white transform rotate-[-6deg] z-10 transition-transform duration-500 hover:rotate-0 hover:scale-105 border-t border-white/20">
<div className="flex justify-between items-start">
<span className="font-semibold text-2xl tracking-tight origin-top-left rotate-90 translate-x-8 translate-y-0 text-white/50">finguard</span>
<div className="flex flex-col items-end">
<i className="w-8 h-8 text-white/80 mb-4" data-lucide="nfc"></i>
</div>
</div>
<div className="space-y-6">
<div className="text-2xl font-mono tracking-widest text-neutral-300">
                            **** 9270
                        </div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">Cardholder</p>
<p className="text-lg font-medium">Ralph Edwards</p>
</div>
<div className="w-10 h-6 bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2">
<span className="text-brand-500 font-mono text-xs uppercase tracking-wider mb-2 block">Benefits</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">
                    Borderless <br/>
<span className="text-neutral-500">Commerce.</span>
</h2>
<div className="space-y-8 mb-10">
<div className="flex gap-5 items-start">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 text-white flex items-center justify-center shrink-0 shadow-lg">
<i className="w-4 h-4" data-lucide="percent"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Dynamic Cashback</h4>
<p className="text-neutral-400 text-sm leading-relaxed">Earn up to 2% back on operational expenses, automatically categorized and credited.</p>
</div>
</div>
<div className="flex gap-5 items-start">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 text-white flex items-center justify-center shrink-0 shadow-lg">
<i className="w-4 h-4" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Fraud Protection</h4>
<p className="text-neutral-400 text-sm leading-relaxed">AI-driven anomaly detection stops unauthorized transactions before they happen.</p>
</div>
</div>
<div className="flex gap-5 items-start">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 text-white flex items-center justify-center shrink-0 shadow-lg">
<i className="w-4 h-4" data-lucide="globe-2"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Global Access</h4>
<p className="text-neutral-400 text-sm leading-relaxed">Issue virtual cards instantly for your team, usable in over 140 currencies.</p>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-white text-neutral-950 hover:bg-neutral-200 px-6 py-3 rounded-full font-medium text-sm transition-colors">
                        Learn more
                    </button>
<a className="group flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">
                        Compare plans <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
<div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white max-w-lg mb-4">
                    Trusted by industry leaders
                </h2>
<p className="text-neutral-400 text-sm max-w-md leading-relaxed">
                    Our infrastructure powers the most demanding financial applications in the world.
                </p>
</div>
<button className="text-sm font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-colors">
                View all partners
            </button>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="flex flex-col justify-between space-y-6">
<div className="bg-neutral-900 p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-between">
<div>
<i className="w-6 h-6 text-brand-500 mb-6" data-lucide="activity"></i>
<div className="text-6xl font-medium tracking-tighter text-white mb-2">99.99<span className="text-2xl text-neutral-500">%</span></div>
<p className="text-neutral-500 text-sm font-medium uppercase tracking-wider">Uptime SLA</p>
</div>
<p className="text-neutral-400 text-sm mt-8">
                        Reliability is our core product feature.
                    </p>
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-2 gap-4">

<div className="bg-neutral-900 h-40 rounded-2xl flex items-center justify-center border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
<i className="w-8 h-8 fill-current" data-lucide="apple"></i>
<span className="text-2xl font-semibold tracking-tight">Pay</span>
</div>
</div>

<div className="bg-neutral-900 h-40 rounded-2xl flex items-center justify-center border border-white/5 hover:border-white/10 transition-colors group">
<span className="text-2xl font-bold italic text-neutral-400 group-hover:text-white transition-colors">PayPal</span>
</div>

<div className="bg-neutral-900 h-40 rounded-2xl flex items-center justify-center border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
<span className="text-2xl font-bold tracking-tight">G Pay</span>
</div>
</div>

<div className="bg-brand-600 h-40 rounded-2xl flex flex-col items-center justify-center text-center p-6 relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-700 to-brand-500 opacity-100 group-hover:scale-105 transition-transform duration-500"></div>
<div className="relative z-10">
<h3 className="text-lg font-bold text-white mb-2">Start Building</h3>
<div className="w-8 h-8 rounded-full bg-white text-brand-600 flex items-center justify-center mx-auto">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 max-w-4xl mx-auto text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 border border-white/10 text-brand-500 mb-8">
<i className="w-5 h-5 fill-current" data-lucide="quote"></i>
</div>
<h3 className="text-2xl md:text-4xl font-medium leading-tight tracking-tight text-white mb-10">
            “finguard has completely transformed how we manage infrastructure. The real-time insights and AI-driven advice have been invaluable for our scaling strategy.”
        </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="Author" className="w-full h-full object-cover grayscale opacity-80" src="https://i.pravatar.cc/100?img=5"/>
</div>
<div className="text-left">
<p className="font-medium text-white text-sm">Kelly Williams</p>
<p className="text-xs text-neutral-500">Head of Engineering, Layers</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-20 pb-12 relative overflow-hidden">

<div className="absolute bottom-0 left-0 right-0 select-none pointer-events-none flex justify-center overflow-hidden">
<h1 className="text-[18vw] font-bold text-neutral-900/50 tracking-tighter leading-none translate-y-[30%]">finguard</h1>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
<div className="max-w-md">
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">
                        Ready to secure your future?
                    </h2>
<p className="text-neutral-400 mb-8">
                        Join thousands of companies building the next generation of fintech on our platform.
                    </p>
<button className="bg-white text-neutral-950 px-6 py-3 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors">
                        Get Started Now
                    </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 text-sm">
<div>
<h4 className="font-semibold text-white mb-4">Product</h4>
<ul className="space-y-3 text-neutral-500">
<li><a className="hover:text-brand-500 transition-colors" href="#">Payments</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Capital</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Issuing</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Treasury</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-neutral-500">
<li><a className="hover:text-brand-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Newsroom</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-3 text-neutral-500">
<li><a className="hover:text-brand-500 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Guides</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3 text-neutral-500">
<li><a className="hover:text-brand-500 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600">
<div className="flex gap-6 mb-4 md:mb-0">
<span>© 2024 finguard Inc.</span>
<span>System Status: <span className="text-green-500">● Normal</span></span>
</div>
<div className="flex gap-4">
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
