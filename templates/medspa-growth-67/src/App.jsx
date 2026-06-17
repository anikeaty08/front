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
brand: {
DEFAULT: '#FF644F',
50: '#FFF0EE',
100: '#FFE1DD',
200: '#FFC3BC',
300: '#FFA59B',
400: '#FF867A',
500: '#FF644F', // Brand Base
600: '#CC503F',
700: '#993C2F',
800: '#66281F',
900: '#331410',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'flow': 'flow 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
flow: {
'0%': { strokeDashoffset: '24' },
'100%': { strokeDashoffset: '0' }
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF644F]/5 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF644F]/5 blur-[120px] rounded-full"></div>
<div className="absolute inset-0 bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-40"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#">
<img alt="Elevaite Logo" className="h-8 w-auto" src="https://ysywtbtwtqaejftbjpet.supabase.co/storage/v1/object/public/opulent-public-storage/Elevaite%20Logo%20Light.png"/>
</a>
<div className="hidden md:flex items-center gap-8 pl-8 border-l border-white/5">
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#process">Our Process</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#results">Results</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#team">Team</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium bg-[#FF644F] hover:bg-[#E55A47] text-white rounded-full px-5 py-2.5 transition-all shadow-[0_0_20px_-5px_rgba(255,100,79,0.4)]" href="#contact">
                    Schedule a Call
                    <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 sm:pt-48 pb-20">
<div className="max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF644F]/30 bg-[#FF644F]/10 text-[#FF644F] text-xs font-medium mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF644F] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF644F]"></span>
</span>
<span>Now accepting new partners for Q4 Scale</span>
</div>

<h1 className="text-5xl sm:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-white max-w-5xl mx-auto">
                The All-Inclusive Growth Partner for <br/>
<span className="brand-gradient-text">High-Performing Medspas</span>
</h1>

<p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                We don't just generate leads. We qualify, book, and collect deposits using advanced AI and expert human SDRs. Scale your clinic with 95% retention-backed strategies.
            </p>

<div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-24">
<button className="group relative flex items-center justify-center px-8 h-12 rounded-full bg-[#FF644F] text-white text-base font-medium shadow-[0_0_35px_-10px_rgba(255,100,79,0.6)] hover:bg-[#E55A47] transition-all duration-300" onclick="document.getElementById('contact').scrollIntoView()">
                    Get Your Strategy Plan
                </button>
<a className="group relative h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium text-base flex items-center gap-2 transition-all duration-300 hover:bg-white/10" href="#process">
                    See How It Works
                </a>
</div>

<div className="relative max-w-5xl mx-auto mt-12 perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF644F]/20 blur-[100px] rounded-full -z-10"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden ring-1 ring-white/5 transform rotate-x-12 translate-y-6 hover:rotate-x-0 hover:translate-y-0 transition-all duration-700 ease-out group">

<div className="h-10 border-b border-white/5 bg-[#0F0F0F] flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
</div>
<div className="text-[10px] text-neutral-500 font-mono">elevaite_growth_engine.exe</div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 rounded-lg bg-neutral-900/50 border border-white/5 p-4 flex flex-col gap-2 group-hover:border-[#FF644F]/30 transition-colors delay-100">
<span className="text-xs text-neutral-400">Total Revenue Generated</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white">$142,590</span>
<span className="text-xs text-emerald-500 flex items-center">+24% <svg className="lucide lucide-trending-up ml-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg></span>
</div>
</div>

<div className="col-span-1 rounded-lg bg-neutral-900/50 border border-white/5 p-4 flex flex-col gap-2 group-hover:border-[#FF644F]/30 transition-colors delay-200">
<span className="text-xs text-neutral-400">Appointments Booked</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white">348</span>
<span className="text-xs text-emerald-500 flex items-center">+18% <svg className="lucide lucide-calendar-check-2 ml-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg></span>
</div>
</div>

<div className="col-span-1 rounded-lg bg-neutral-900/50 border border-white/5 p-4 flex flex-col gap-2 group-hover:border-[#FF644F]/30 transition-colors delay-300">
<span className="text-xs text-neutral-400">Show-up Rate</span>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white">88%</span>
<span className="text-xs text-neutral-500">Industry Avg: 60%</span>
</div>
</div>

<div className="col-span-1 md:col-span-3 mt-2">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-white uppercase tracking-wider">Live Conversion Feed</span>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] text-emerald-500">Active SDRs &amp; AI Agents</span>
</div>
</div>
<div className="space-y-2">

<div className="flex items-center justify-between p-3 rounded bg-white/[0.03] border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<svg className="lucide lucide-message-circle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-white">New Inquiry (Botox)</span>
<span className="text-[10px] text-neutral-500">Qualified by AI Agent</span>
</div>
</div>
<span className="text-[10px] text-neutral-400">Just now</span>
</div>

<div className="flex items-center justify-between p-3 rounded bg-white/[0.03] border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#FF644F]/20 flex items-center justify-center text-[#FF644F]">
<svg className="lucide lucide-phone-call" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 9.95 9.95"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-white">Appointment Booked</span>
<span className="text-[10px] text-neutral-500">Human SDR - Sarah</span>
</div>
</div>
<span className="text-[10px] text-neutral-400">2 min ago</span>
</div>

<div className="flex items-center justify-between p-3 rounded bg-emerald-500/10 border border-emerald-500/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<svg className="lucide lucide-credit-card" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line><line x1="12" x2="16" y1="15" y2="15"></line><line x1="8" x2="8" y1="15" y2="15.01"></line></svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-white">Deposit Collected ($50)</span>
<span className="text-[10px] text-emerald-400/80">Stripe Payment Successful</span>
</div>
</div>
<span className="text-[10px] text-emerald-400">5 min ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
<div>
<div className="text-3xl font-semibold text-white mb-1">30+</div>
<div className="text-sm text-neutral-500">Clinics Scaled</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">95%</div>
<div className="text-sm text-neutral-500">Retention Rate</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">24/7</div>
<div className="text-sm text-neutral-500">AI &amp; Human Coverage</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1">USA/CA</div>
<div className="text-sm text-neutral-500">Service Coverage</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl font-medium text-white mb-4">From Click to Deposit</h2>
<p className="text-neutral-400 max-w-2xl mx-auto">We've engineered a seamless ecosystem that turns strangers into loyal patients. <br/> Visualized below is our proprietary funnel.</p>
</div>
<div className="space-y-24">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="services">
<div className="order-2 lg:order-1 relative h-[400px] w-full rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-full h-full p-10 flex flex-col items-center justify-between z-10">

<div className="flex gap-8">
<div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 animate-float" style={{animationDelay: '0s'}}>
<svg className="lucide lucide-facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
<div className="w-12 h-12 rounded-xl bg-pink-600/10 border border-pink-600/20 flex items-center justify-center text-pink-500 animate-float" style={{animationDelay: '1s'}}>
<svg className="lucide lucide-instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 animate-float" style={{animationDelay: '2s'}}>
<svg className="lucide lucide-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
</div>

<div className="flex-1 w-full flex justify-center items-center relative py-4">
<div className="w-[1px] h-full bg-gradient-to-b from-white/20 to-transparent absolute"></div>
<div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent via-[#FF644F]/10 to-transparent animate-pulse-slow"></div>
<div className="w-3 h-3 rounded-full bg-[#FF644F] z-20 shadow-[0_0_15px_#FF644F]"></div>
</div>

<div className="w-full bg-neutral-900 border border-white/10 rounded-xl p-4 flex items-center gap-3 relative z-10">
<div className="w-10 h-10 rounded bg-[#FF644F] flex items-center justify-center text-white shrink-0">
<svg className="lucide lucide-layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white">Unified Inbox</div>
<div className="text-xs text-neutral-500">All channels centralized</div>
</div>
<div className="ml-auto flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-white/10 border border-neutral-900"></div>
<div className="w-6 h-6 rounded-full bg-white/10 border border-neutral-900"></div>
<div className="w-6 h-6 rounded-full bg-[#FF644F]/50 border border-neutral-900 flex items-center justify-center text-[8px] text-white font-medium">+99</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]"></div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="w-12 h-12 rounded-lg bg-[#FF644F]/10 border border-[#FF644F]/20 flex items-center justify-center text-[#FF644F] mb-6">
<svg className="lucide lucide-funnel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 3H2l8 9.46V19l4 2v-8.54Z"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">High-Intent Lead Generation</h3>
<p className="text-neutral-400 leading-relaxed mb-6">
                            We identify and target your ideal patients on Facebook, Instagram, and Google. We don't just ask for a name and email; we craft compelling offers that get them to raise their hand.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-[#FF644F]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Multi-channel acquisition
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-[#FF644F]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Custom offer creation &amp; copywriting
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-[#FF644F]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Instant syncing to our CRM
                            </li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<div className="w-12 h-12 rounded-lg bg-[#FF644F]/10 border border-[#FF644F]/20 flex items-center justify-center text-[#FF644F] mb-6">
<svg className="lucide lucide-users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 19a6 6 0 0 0-12 0"></path><circle cx="8" cy="9" r="4"></circle><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Hybrid Appointment Engine</h3>
<p className="text-neutral-400 leading-relaxed mb-6">
                            Leads go cold in 5 minutes. Our system combines real human SDRs with 24/7 AI Voice &amp; Chat agents. We call, text, and nurture every lead until they book an appointment.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-[#FF644F]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<strong>Human SDRs</strong> for complex objection handling
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-[#FF644F]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<strong>AI Agents</strong> for nights &amp; weekends
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-[#FF644F]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Full CRM integration &amp; follow-up automation
                            </li>
</ul>
</div>
<div className="relative h-[400px] w-full rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center">

<div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 transition-all duration-500 opacity-100">
<div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
<svg className="lucide lucide-bot" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-xs font-mono text-purple-400">AI AGENT</span>
</div>

<div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 transition-all duration-500 opacity-100">
<div className="w-16 h-16 rounded-full bg-[#FF644F]/10 border border-[#FF644F]/20 flex items-center justify-center text-[#FF644F] shadow-[0_0_20px_rgba(255,100,79,0.2)]">
<svg className="lucide lucide-headset" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M3 11v3a4 4 0 0 0 4 4 11.6 11.6 0 0 0 4-2.8"></path><path d="M14 11a5 5 0 0 0-5-5"></path><path d="M15 15.2a11.6 11.6 0 0 0 4 2.8 4 4 0 0 0 4-4v-3"></path><path d="M3 11a5 5 0 0 1 5-5"></path><path d="M14 2.2a2 2 0 0 1 2 1.8 2 2 0 0 1-2 1.8"></path><path d="M15 11v4"></path></svg>
</div>
<span className="text-xs font-mono text-[#FF644F]">HUMAN SDR</span>
</div>

<div className="relative z-10 w-48 bg-neutral-900 border border-white/10 rounded-xl p-4 shadow-2xl">
<div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
<span className="text-xs text-white font-medium">October 2024</span>
<svg className="lucide lucide-chevron-right text-neutral-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="space-y-2">
<div className="h-8 bg-[#FF644F]/20 border border-[#FF644F]/30 rounded flex items-center px-2 gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#FF644F]"></div>
<span className="text-[10px] text-white">Sarah W. - CO2 Laser</span>
</div>
<div className="h-8 bg-purple-500/20 border border-purple-500/30 rounded flex items-center px-2 gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
<span className="text-[10px] text-white">Mike R. - Consultation</span>
</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: '1'}}>
<path className="opacity-50" d="M100 200 Q 150 200 200 200" fill="none" stroke="#A855F7" stroke-dasharray="4 4" strokeWidth="2"></path>
<path className="opacity-50" d="M400 200 Q 350 200 300 200" fill="none" stroke="#FF644F" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 relative h-[400px] w-full rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center">

<div className="w-64 h-full bg-[#0F0F0F] border-x border-white/5 relative flex flex-col pt-12 px-6">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF644F] to-transparent"></div>
<div className="w-full bg-neutral-900 rounded-xl p-4 border border-white/5 mb-4 shadow-lg transform translate-y-4 transition-transform duration-700 group-hover:translate-y-0">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-[#FF644F] flex items-center justify-center text-white font-bold text-xs">E</div>
<div>
<div className="text-xs font-medium text-white">Elevaite System</div>
<div className="text-[10px] text-neutral-500">Secure Payment Link</div>
</div>
</div>
<div className="bg-neutral-950 rounded p-3 text-center border border-white/5">
<div className="text-[10px] text-neutral-400 mb-1">Deposit Amount</div>
<div className="text-xl font-bold text-white">$50.00</div>
</div>
</div>
<div className="w-full bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20 shadow-lg transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
<svg className="lucide lucide-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="text-xs font-medium text-white">Payment Successful</div>
<div className="text-[10px] text-emerald-400">Appointment Confirmed</div>
</div>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)]"></div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="w-12 h-12 rounded-lg bg-[#FF644F]/10 border border-[#FF644F]/20 flex items-center justify-center text-[#FF644F] mb-6">
<svg className="lucide lucide-wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Deposits &amp; Revenue Realization</h3>
<p className="text-neutral-400 leading-relaxed mb-6">
                            Appointments mean nothing if they don't show up. We collect deposits upfront during the booking process, drastically reducing no-shows and ensuring you get paid.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-[#FF644F]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Automated Stripe/CRM deposit collection
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-[#FF644F]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Increased show-up rates (Avg 85%+)
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="w-5 h-5 text-[#FF644F]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                95% Client Retention Rate
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-medium text-white mb-10 text-center">Comprehensive Medspa Growth Stack</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A] hover:border-[#FF644F]/30 transition-colors">
<svg className="lucide lucide-search w-8 h-8 text-white mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<h4 className="text-lg font-medium text-white mb-2">SEO &amp; Google Ads</h4>
<p className="text-sm text-neutral-400 font-light">Dominate local search results. We ensure your clinic appears first when patients search for treatments in your area.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A] hover:border-[#FF644F]/30 transition-colors">
<svg className="lucide lucide-star w-8 h-8 text-white mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<h4 className="text-lg font-medium text-white mb-2">Reputation Management</h4>
<p className="text-sm text-neutral-400 font-light">Automated review generation to boost your GMB ranking and build trust with new patients instantly.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-[#0A0A0A] hover:border-[#FF644F]/30 transition-colors">
<svg className="lucide lucide-monitor w-8 h-8 text-white mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<h4 className="text-lg font-medium text-white mb-2">Website Optimization</h4>
<p className="text-sm text-neutral-400 font-light">High-converting landing pages and website overhauls designed specifically for aesthetic conversions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium text-white mb-4">Results Speak Louder</h2>
<p className="text-neutral-400">Trusted by 30+ Clinics across USA &amp; Canada</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-500">JL</div>
<div>
<div className="text-white font-medium">Jessica L.</div>
<div className="text-xs text-neutral-500">Owner, Radiance Medspa</div>
</div>
</div>
<p className="text-neutral-300 text-sm mb-6 flex-1">"Elevaite completely transformed our booking process. We went from chasing leads to just seeing full calendars. The AI agents handling after-hours calls was a game changer."</p>
<div className="bg-neutral-900 rounded-lg h-48 w-full flex items-center justify-center relative group cursor-pointer border border-white/5 hover:border-[#FF644F]/50 transition-colors overflow-hidden">

<div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#FF644F] transition-colors">
<svg className="lucide lucide-play fill-current" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
<span className="text-xs text-neutral-500">Watch Testimonial</span>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-500">DR</div>
<div>
<div className="text-white font-medium">Dr. Roberts</div>
<div className="text-xs text-neutral-500">Medical Director, Elite Aesthetics</div>
</div>
</div>
<p className="text-neutral-300 text-sm mb-6 flex-1">"We scaled from $30k/mo to $110k/mo in just 4 months. The deposit collection system eliminated our no-show problem entirely. Highly recommend Gino and his team."</p>
<div className="bg-neutral-900 rounded-lg h-48 w-full flex items-center justify-center relative group cursor-pointer border border-white/5 hover:border-[#FF644F]/50 transition-colors overflow-hidden">
<div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#FF644F] transition-colors">
<svg className="lucide lucide-play fill-current" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
<span className="text-xs text-neutral-500">Watch Testimonial</span>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 flex flex-col">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-500">SK</div>
<div>
<div className="text-white font-medium">Sarah K.</div>
<div className="text-xs text-neutral-500">Clinic Manager, Glow Lounge</div>
</div>
</div>
<p className="text-neutral-300 text-sm mb-6 flex-1">"Finally an agency that understands the Medspa industry. They didn't just run ads; they built our entire sales infrastructure. The 95% retention rate stat is real."</p>
<div className="bg-neutral-900 rounded-lg h-48 w-full flex items-center justify-center relative group cursor-pointer border border-white/5 hover:border-[#FF644F]/50 transition-colors overflow-hidden">
<div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#FF644F] transition-colors">
<svg className="lucide lucide-play fill-current" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
<span className="text-xs text-neutral-500">Watch Testimonial</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white mb-4">Meet Leadership</h2>
<p className="text-neutral-400">The minds behind the system.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="group relative rounded-2xl border border-white/5 bg-[#0A0A0A] overflow-hidden hover:border-[#FF644F]/20 transition-all">
<div className="h-64 bg-neutral-900 relative">

<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center text-neutral-700">
<svg className="lucide lucide-user" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="p-6 relative">
<h3 className="text-xl font-medium text-white">Gino McCullough</h3>
<p className="text-sm text-[#FF644F] mb-3">CEO &amp; Founder</p>
<p className="text-sm text-neutral-400 font-light">Visionary behind Elevaite's unique growth methodology.</p>
</div>
</div>

<div className="group relative rounded-2xl border border-white/5 bg-[#0A0A0A] overflow-hidden hover:border-[#FF644F]/20 transition-all">
<div className="h-64 bg-neutral-900 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center text-neutral-700">
<svg className="lucide lucide-user" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="p-6 relative">
<h3 className="text-xl font-medium text-white">Abdelrahman Salem</h3>
<p className="text-sm text-[#FF644F] mb-3">Operations &amp; Fulfillment</p>
<p className="text-sm text-neutral-400 font-light">Ensures every client campaign runs with military precision.</p>
</div>
</div>

<div className="group relative rounded-2xl border border-white/5 bg-[#0A0A0A] overflow-hidden hover:border-[#FF644F]/20 transition-all">
<div className="h-64 bg-neutral-900 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center text-neutral-700">
<svg className="lucide lucide-user" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="p-6 relative">
<h3 className="text-xl font-medium text-white">Omar Walid</h3>
<p className="text-sm text-[#FF644F] mb-3">Head of Marketing</p>
<p className="text-sm text-neutral-400 font-light">Mastermind behind the high-conversion ad creatives.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] border-t border-white/10 pt-20 pb-10 relative overflow-hidden font-sans" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF644F]/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">

<div className="mb-20 bg-neutral-900/40 border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Ready to Scale Your Clinic?</h2>
<p className="text-neutral-400 max-w-xl mx-auto mb-8">Schedule a strategy call to see if your practice qualifies for our growth partnership.</p>

<div className="w-full max-w-2xl mx-auto bg-neutral-900 border border-white/10 rounded-xl h-[500px] flex items-center justify-center text-neutral-500">

<div className="flex flex-col items-center gap-4">
<svg className="lucide lucide-calendar-clock" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path><circle cx="16.5" cy="17.5" r="3.5"></circle><path d="M16.5 15.5v2l1.5 1.5"></path></svg>
<p>GHL Calendar Embed Area</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6 group" href="#">
<img alt="Elevaite Logo" className="h-6 w-auto" src="https://ysywtbtwtqaejftbjpet.supabase.co/storage/v1/object/public/opulent-public-storage/Elevaite%20Logo%20Light.png"/>
</a>
<p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                    Elevaite is a premier growth partner for Medspas, specializing in automated lead conversion and revenue scaling.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#results">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2024 Elevaite. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-neutral-500">All Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
