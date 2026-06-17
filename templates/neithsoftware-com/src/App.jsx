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
animation: {
'blob': 'blob 10s infinite',
'scroll': 'scroll 40s linear infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'spin-slow': 'spin 15s linear infinite',
'reverse-spin': 'reverse-spin 15s linear infinite',
'orbit': 'orbit 20s linear infinite',
'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
'reverse-spin': {
from: { transform: 'rotate(360deg)' },
to: { transform: 'rotate(0deg)' },
},
orbit: {
'0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
'100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
},
'pulse-glow': {
'0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(45, 212, 191, 0.2)' },
'50%': { opacity: '.7', boxShadow: '0 0 10px rgba(45, 212, 191, 0.1)' },
}
},
colors: {
brand: {
black: '#020617',
blue: '#2563EB',
teal: '#2DD4BF',
accent: '#06b6d4'
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
<div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-teal-900/10 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
</div>

<div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
<nav className="glass-nav rounded-full px-5 py-3 w-full max-w-5xl flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/5 border border-white/10 group-hover:border-teal-500/50 transition-colors">
<img alt="Neith Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26bac2e4-44c7-46e7-a498-b3d3fa52785f_320w.png"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-white tracking-wide group-hover:text-teal-400 transition-colors">NEITH</span>
<span className="text-[9px] font-medium text-slate-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors">Software Solutions</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#technology">Tech Stack</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#support">Support</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Login</a>
<a className="text-xs font-semibold bg-white text-black hover:bg-teal-400 px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]" href="#">
                    Client Area
                </a>
</div>
</nav>
</div>

<section className="min-h-screen flex flex-col pt-32 pb-20 relative items-center justify-center overflow-hidden">

<div className="globe-container">
<div className="globe-sphere">
<div className="globe-grid"></div>
<div className="globe-dots animate-spin-slow"></div>
</div>

<div className="absolute w-[600px] h-[600px] rounded-full border border-blue-500/10 animate-[spin_20s_linear_infinite]">
<div className="absolute top-1/2 -right-1 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
</div>
<div className="absolute w-[700px] h-[700px] rounded-full border border-teal-500/10 animate-[spin_25s_linear_infinite_reverse]">
<div className="absolute bottom-1/2 -left-1 w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_#2dd4bf]"></div>
</div>
<div className="absolute w-[900px] h-[400px] rounded-[100%] border border-white/5 rotate-45 animate-pulse"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-10">
<div className="animate-fade-in-up inline-flex gap-2 text-[10px] uppercase font-semibold text-teal-300 tracking-widest bg-teal-950/30 border border-teal-500/20 rounded-full mb-8 py-1.5 px-4 backdrop-blur-md items-center shadow-[0_0_15px_rgba(45,212,191,0.1)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                Global Network Active
            </div>
<h1 className="animate-fade-in-up animate-delay-100 md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-8 drop-shadow-2xl">
                Hosting the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400">Future of Web.</span>
</h1>
<p className="animate-fade-in-up animate-delay-200 text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Experience the next evolution of web hosting. <span className="text-white font-normal">Neith</span> combines futuristic infrastructure with unparalleled speed, security, and scalability for your digital presence.
            </p>
<div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-semibold hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                    Start Hosting
                    <svg className="lucide lucide-rocket group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1"></path><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 1-4 1-4"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/50 border border-slate-800 hover:border-teal-500/30 text-slate-300 hover:text-white text-sm font-semibold transition-all backdrop-blur-sm flex items-center justify-center gap-2 group">
<svg className="lucide lucide-server group-hover:text-teal-400 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                    View Pricing
                </button>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden py-8 relative">
<div className="max-w-7xl mx-auto px-6 mb-6 flex justify-between items-center">
<h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Accepted Payment Methods</h3>
<div className="h-px bg-white/10 flex-1 ml-6"></div>
</div>
<div className="marquee-mask w-full overflow-hidden">
<div className="flex w-full whitespace-nowrap">
<div className="animate-scroll flex items-center gap-16 min-w-full px-8">

<span className="iconify text-4xl text-slate-600 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-icon="simple-icons:visa"></span>
<span className="iconify text-4xl text-slate-600 hover:text-[#EB001B] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(235,0,27,0.5)]" data-icon="simple-icons:mastercard"></span>
<span className="iconify text-3xl text-slate-600 hover:text-[#00457C] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,69,124,0.5)]" data-icon="simple-icons:paypal"></span>
<span className="iconify text-4xl text-slate-600 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-icon="simple-icons:applepay"></span>
<span className="iconify text-4xl text-slate-600 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-icon="simple-icons:googlepay"></span>
<span className="iconify text-3xl text-slate-600 hover:text-[#F7931A] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(247,147,26,0.5)]" data-icon="simple-icons:bitcoin"></span>
<span className="iconify text-3xl text-slate-600 hover:text-[#627EEA] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(98,126,234,0.5)]" data-icon="simple-icons:ethereum"></span>
<span className="iconify text-4xl text-slate-600 hover:text-[#008CDD] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,140,221,0.5)]" data-icon="simple-icons:americanexpress"></span>
<span className="iconify text-4xl text-slate-600 hover:text-[#FF6000] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,96,0,0.5)]" data-icon="simple-icons:discover"></span>
<span className="iconify text-4xl text-slate-600 hover:text-[#635BFF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(99,91,255,0.5)]" data-icon="simple-icons:stripe"></span>

<span className="iconify text-4xl text-slate-600 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-icon="simple-icons:visa"></span>
<span className="iconify text-4xl text-slate-600 hover:text-[#EB001B] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(235,0,27,0.5)]" data-icon="simple-icons:mastercard"></span>
<span className="iconify text-3xl text-slate-600 hover:text-[#00457C] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,69,124,0.5)]" data-icon="simple-icons:paypal"></span>
<span className="iconify text-4xl text-slate-600 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-icon="simple-icons:applepay"></span>
<span className="iconify text-4xl text-slate-600 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-icon="simple-icons:googlepay"></span>
<span className="iconify text-3xl text-slate-600 hover:text-[#F7931A] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(247,147,26,0.5)]" data-icon="simple-icons:bitcoin"></span>
</div>
</div>
</div>
</div>

<section className="py-32 px-6 relative bg-[#020617]" id="technology">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-teal-400 font-mono text-xs mb-3 block">SYSTEM_ARCHITECTURE</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Powered by <span className="text-blue-500">Industry Leaders</span></h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                    Neith integrates the most powerful technologies labeled as essential for modern web hosting performance and security.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center group">
<div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FF6C2C]/10 transition-colors">
<span className="iconify text-3xl text-slate-400 group-hover:text-[#FF6C2C] transition-colors" data-icon="simple-icons:cpanel"></span>
</div>
<h4 className="text-white font-semibold mb-1">cPanel</h4>
<p className="text-xs text-slate-500">Industry Standard Control</p>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center group">
<div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/10 transition-colors">
<span className="iconify text-3xl text-slate-400 group-hover:text-blue-400 transition-colors" data-icon="simple-icons:litespeed"></span>
</div>
<h4 className="text-white font-semibold mb-1">LiteSpeed</h4>
<p className="text-xs text-slate-500">Ultra-Fast Web Server</p>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center group">
<div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-400/10 transition-colors">
<span className="iconify text-3xl text-slate-400 group-hover:text-blue-300 transition-colors" data-icon="fontisto:cloudlinux"></span>
</div>
<h4 className="text-white font-semibold mb-1">CloudLinux OS</h4>
<p className="text-xs text-slate-500">Isolated Environment</p>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center group">
<div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/10 transition-colors">
<svg className="lucide lucide-shield-alert text-slate-400 group-hover:text-green-400 transition-colors" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h4 className="text-white font-semibold mb-1">Imunify360</h4>
<p className="text-xs text-slate-500">AI-Driven Security</p>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center group">
<div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500/10 transition-colors">
<svg className="lucide lucide-database-backup text-slate-400 group-hover:text-orange-400 transition-colors" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 7v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7"></path><path d="M3 7l9-4 9 4"></path><path d="M3 7l9 4 9-4"></path><path d="M12 16V3"></path><path d="m8 7 4-4 4 4"></path></svg>
</div>
<h4 className="text-white font-semibold mb-1">JetBackup</h4>
<p className="text-xs text-slate-500">Daily Automated Backups</p>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center group">
<div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/10 transition-colors">
<svg className="lucide lucide-app-window text-slate-400 group-hover:text-purple-400 transition-colors" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
</div>
<h4 className="text-white font-semibold mb-1">Softaculous</h4>
<p className="text-xs text-slate-500">1-Click App Installs</p>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center group">
<div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-500/10 transition-colors">
<svg className="lucide lucide-hard-drive text-slate-400 group-hover:text-teal-400 transition-colors" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
</div>
<h4 className="text-white font-semibold mb-1">NVMe SSD</h4>
<p className="text-xs text-slate-500">10x Faster Storage</p>
</div>

<div className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center group">
<div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600/10 transition-colors">
<span className="iconify text-3xl text-slate-400 group-hover:text-blue-500 transition-colors" data-icon="simple-icons:wordpress"></span>
</div>
<h4 className="text-white font-semibold mb-1">WordPress</h4>
<p className="text-xs text-slate-500">Optimized Environment</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative bg-black overflow-hidden" id="pricing">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Futuristic Pricing Models</h2>
<p className="text-slate-400 mb-8 max-w-xl mx-auto">Scalable solutions tailored for your growth. No hidden fees, just pure performance.</p>

<div className="flex items-center justify-center gap-4 bg-white/5 w-fit mx-auto p-1.5 rounded-full border border-white/10">
<button className="px-6 py-2 rounded-full bg-teal-500 text-black text-xs font-bold shadow-lg shadow-teal-500/20">Monthly</button>
<button className="px-6 py-2 rounded-full text-slate-400 hover:text-white text-xs font-medium transition-colors">Yearly</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

<div className="glass-card p-10 rounded-[2rem] border-white/5 relative group hover:border-teal-500/30">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-[100%] rounded-tr-[2rem] transition-opacity opacity-50 group-hover:opacity-100"></div>
<h3 className="text-xl font-medium text-white mb-2">Stellar Starter</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-semibold tracking-tighter text-white">$3.99</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<a className="block w-full py-4 rounded-xl border border-white/10 hover:bg-white/10 text-center text-sm font-semibold text-white transition-all mb-10 hover:border-teal-400/50" href="#">Deploy Sector</a>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-[10px] font-bold">✓</span>
                            1 Website
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-[10px] font-bold">✓</span>
                            10 GB NVMe Storage
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-[10px] font-bold">✓</span>
                            Free SSL Certificate
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-[10px] font-bold">✓</span>
                            cPanel Control Panel
                        </li>
</ul>
</div>

<div className="glass-card p-10 rounded-[2rem] border-teal-500/50 relative transform md:-translate-y-4 shadow-[0_0_40px_-10px_rgba(45,212,191,0.15)] bg-gradient-to-b from-teal-900/10 to-transparent">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-teal-500/40">
                        Most Popular
                    </div>
<h3 className="text-xl font-medium text-white mb-2">Galactic Pro</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">$9.99</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<a className="block w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 hover:brightness-110 text-center text-sm font-bold text-white transition-all mb-10 shadow-lg shadow-blue-500/25" href="#">Deploy Galaxy</a>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-white font-medium">
<span className="w-5 h-5 rounded-full bg-teal-400 flex items-center justify-center text-black text-[10px] font-bold">✓</span>
                            Unlimited Websites
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-medium">
<span className="w-5 h-5 rounded-full bg-teal-400 flex items-center justify-center text-black text-[10px] font-bold">✓</span>
                            50 GB NVMe Storage
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-medium">
<span className="w-5 h-5 rounded-full bg-teal-400 flex items-center justify-center text-black text-[10px] font-bold">✓</span>
                            Unmetered Bandwidth
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-medium">
<span className="w-5 h-5 rounded-full bg-teal-400 flex items-center justify-center text-black text-[10px] font-bold">✓</span>
                            Free Domain Name
                        </li>
<li className="flex items-center gap-3 text-sm text-white font-medium">
<span className="w-5 h-5 rounded-full bg-teal-400 flex items-center justify-center text-black text-[10px] font-bold">✓</span>
                            Daily JetBackups
                        </li>
</ul>
</div>

<div className="glass-card p-10 rounded-[2rem] border-white/5 relative group hover:border-blue-500/30">
<h3 className="text-xl font-medium text-white mb-2">Cosmic Enterprise</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-semibold tracking-tighter text-white">$24.99</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<a className="block w-full py-4 rounded-xl border border-white/10 hover:bg-white/10 text-center text-sm font-semibold text-white transition-all mb-10 hover:border-blue-400/50" href="#">Deploy Universe</a>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-[10px] font-bold">✓</span>
                            Unlimited NVMe Storage
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-[10px] font-bold">✓</span>
                            Dedicated IP Address
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-[10px] font-bold">✓</span>
                            Priority 24/7 Support
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-[10px] font-bold">✓</span>
                            Imunify360 Pro
                        </li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-[#010309] border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-3 mb-6" href="#">
<img alt="Neith Logo" className="w-8 h-8 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26bac2e4-44c7-46e7-a498-b3d3fa52785f_320w.png"/>
<span className="text-xl font-bold tracking-tight text-white">NEITH</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
                        Neith Software Solutions provides military-grade web hosting infrastructure designed for the decentralized web era. Secure, swift, and scalable.
                    </p>
<div className="flex gap-4">

<a className="text-slate-400 hover:text-teal-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="text-slate-400 hover:text-teal-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:github"></span></a>
<a className="text-slate-400 hover:text-teal-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
<a className="text-slate-400 hover:text-teal-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:discord"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-5 text-sm uppercase tracking-wider text-teal-500/80">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Shared Hosting</a></li>
<li><a className="hover:text-white transition-colors" href="#">VPS Servers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dedicated Nodes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Domain Names</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-5 text-sm uppercase tracking-wider text-teal-500/80">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About Neith</a></li>
<li><a className="hover:text-white transition-colors" href="#">Data Centers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Support</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal &amp; Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">© 2024 Neith Software Solutions. All rights reserved.</p>
<div className="flex gap-2 text-xs">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-slate-500">All Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
