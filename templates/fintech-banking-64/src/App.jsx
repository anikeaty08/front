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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-zinc-200 to-zinc-500 flex items-center justify-center">
<div className="w-2 h-2 bg-zinc-950 rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight">SpendLow</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-400">
<a className="hover:text-white transition-colors" href="#solution">Solution</a>
<a className="hover:text-white transition-colors" href="#benefits">For Banks</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
<a className="hover:text-white transition-colors" href="#partners">Partners</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm text-zinc-400 hover:text-white transition-colors font-light" href="#">Login</a>
<a className="text-xs font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#demo">
                    Request Demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-zinc-800/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-widest text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Now Available for Enterprise Integration
                </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-white leading-[1.05]">
                    Turning everyday <br/>
                    spending into <br/>
<span className="text-zinc-500">saving habits.</span>
</h1>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-lg">
                    SpendLow helps banks transform transaction data into personalized, AI-driven financial guidance that users trust and love.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="px-6 py-3.5 bg-white text-zinc-950 text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors text-center" href="#demo">
                        Request a demo
                    </a>
<a className="px-6 py-3.5 border border-zinc-800 text-white text-sm font-medium rounded-lg hover:bg-zinc-900 transition-colors text-center flex items-center justify-center gap-2 group" href="#how-it-works">
                        See how it works
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="relative w-[300px] h-[580px] bg-zinc-950 border-[6px] border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden z-10">

<div className="h-full w-full bg-zinc-950 p-6 flex flex-col relative">

<div className="flex justify-between items-center mb-8 opacity-50">
<span className="text-[10px] font-medium text-white">9:41</span>
<div className="flex gap-1">
<iconify-icon icon="solar:signal-linear" width="12"></iconify-icon>
<iconify-icon icon="solar:battery-full-linear" width="12"></iconify-icon>
</div>
</div>

<div className="mb-8">
<p className="text-xs text-zinc-500 mb-1">Total Savings</p>
<h3 className="text-3xl font-medium text-white tracking-tight">$2,840.50</h3>
<div className="flex items-center gap-1 mt-2 text-emerald-500 text-xs">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span>+12% this month</span>
</div>
</div>

<div className="absolute top-1/3 left-4 right-4 glass p-4 rounded-xl border-l-2 border-l-indigo-500 transform transition-all duration-700 hover:scale-105 cursor-default shadow-lg shadow-indigo-900/10">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:cup-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm text-white font-medium">Coffee Habit Detected</p>
<p className="text-xs text-zinc-400 mt-1 leading-relaxed">You spent $40 at cafes this week. Move $5 to your rainy day fund?</p>
<div className="flex gap-2 mt-3">
<button className="bg-indigo-600/20 text-indigo-400 text-[10px] px-3 py-1.5 rounded-md hover:bg-indigo-600/30 transition">Save $5</button>
<button className="text-zinc-500 text-[10px] px-3 py-1.5 hover:text-white transition">Dismiss</button>
</div>
</div>
</div>
</div>

<div className="mt-auto space-y-4 opacity-40 blur-[1px]">
<div className="flex justify-between items-center">
<div className="w-24 h-3 bg-zinc-800 rounded"></div>
<div className="w-12 h-3 bg-zinc-800 rounded"></div>
</div>
<div className="flex justify-between items-center">
<div className="w-20 h-3 bg-zinc-800 rounded"></div>
<div className="w-16 h-3 bg-zinc-800 rounded"></div>
</div>
<div className="flex justify-between items-center">
<div className="w-28 h-3 bg-zinc-800 rounded"></div>
<div className="w-10 h-3 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-white/5 rounded-full"></div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">The Data Dilemma</h2>
<p className="text-zinc-400 font-light">Banks sit on goldmines of transaction data, yet most banking experiences remain impersonal and purely transactional.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl bg-zinc-950 border border-white/5">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 mb-4">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">Dormant Data</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Massive volumes of transaction history are underutilized, failing to generate actionable insights for customers.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-950 border border-white/5">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 mb-4">
<iconify-icon icon="solar:muted-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">Generic Marketing</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">One-size-fits-all offers result in low conversion rates and user fatigue, rather than meaningful engagement.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-950 border border-white/5">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 mb-4">
<iconify-icon icon="solar:user-cross-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">Engagement Churn</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Without personalized value, customers disengage, opening the door for agile fintech competitors.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="solution">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">How SpendLow Works</h2>
<p className="text-zinc-400 font-light max-w-md">Seamless integration into your existing infrastructure to deliver real-time value.</p>
</div>
</div>
<div className="relative grid md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent z-0"></div>

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all duration-300 mb-6 mx-auto md:mx-0">
<iconify-icon icon="solar:card-transfer-linear" width="32"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">1. Data Ingestion</h4>
<p className="text-sm text-zinc-500 font-light">User opens the app. Transaction data is securely read in real-time via API.</p>
</div>

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all duration-300 mb-6 mx-auto md:mx-0">
<iconify-icon icon="solar:brain-linear" width="32"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">2. AI Analysis</h4>
<p className="text-sm text-zinc-500 font-light">Our behavioral AI detects patterns, recurring costs, and spending anomalies instantly.</p>
</div>

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all duration-300 mb-6 mx-auto md:mx-0">
<iconify-icon icon="solar:bell-bing-linear" width="32"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">3. Smart Nudge</h4>
<p className="text-sm text-zinc-500 font-light">Users receive personalized, positive nudges to save small amounts or optimize spend.</p>
</div>

<div className="relative z-10 group">
<div className="w-24 h-24 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all duration-300 mb-6 mx-auto md:mx-0">
<iconify-icon icon="solar:chart-square-linear" width="32"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">4. Habit Formation</h4>
<p className="text-sm text-zinc-500 font-light">Over time, micro-actions build trust, financial health, and increased deposits.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/10" id="benefits">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-24">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-6">For Partners</span>
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-12">Enterprise Value at Scale</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass-card p-6 rounded-xl hover:bg-zinc-900 transition-colors">
<iconify-icon className="text-indigo-400 text-2xl mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Retention</h3>
<p className="text-sm text-zinc-500 font-light">Increase daily active users by turning banking into a lifestyle companion.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:bg-zinc-900 transition-colors">
<iconify-icon className="text-emerald-400 text-2xl mb-4" icon="solar:wallet-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Deposit Growth</h3>
<p className="text-sm text-zinc-500 font-light">Automated micro-savings drive consistent growth in retail deposits.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:bg-zinc-900 transition-colors">
<iconify-icon className="text-white text-2xl mb-4" icon="solar:rocket-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Fast Integration</h3>
<p className="text-sm text-zinc-500 font-light">Plug-and-play API designed for minimal friction with core banking systems.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:bg-zinc-900 transition-colors">
<iconify-icon className="text-zinc-400 text-2xl mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Low Risk</h3>
<p className="text-sm text-zinc-500 font-light">Compliance-first architecture with read-only data access protocols.</p>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none"></div>

<div className="space-y-4">
<div className="flex gap-3 items-end">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-emerald-400" icon="solar:banknote-linear"></iconify-icon>
</div>
<div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-none max-w-[80%]">
<p className="text-sm text-zinc-200">You've spent $15 less on transport this month compared to average. Great job! 👏</p>
</div>
</div>
<div className="flex gap-3 items-end">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-emerald-400" icon="solar:banknote-linear"></iconify-icon>
</div>
<div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-none max-w-[80%]">
<p className="text-sm text-zinc-200">Want to move that $15 to your 'Holiday' Goal?</p>
</div>
</div>
<div className="flex justify-end">
<div className="bg-emerald-600 text-white p-3 rounded-2xl rounded-br-none">
<p className="text-sm">Yes, do it.</p>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-6">For End Users</span>
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-6">Financial wellness on autopilot</h2>
<p className="text-lg text-zinc-400 font-light mb-8">
                        Users don't need another budgeting tool that judges them. They need a silent partner that makes saving effortless and rewarding.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-400 font-light">
<iconify-icon className="text-emerald-500 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span>Build saving habits without effort or friction</span>
</li>
<li className="flex items-start gap-3 text-zinc-400 font-light">
<iconify-icon className="text-emerald-500 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span>Simple, motivating guidance based on real behavior</span>
</li>
<li className="flex items-start gap-3 text-zinc-400 font-light">
<iconify-icon className="text-emerald-500 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span>Positive reinforcement, never judgment</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Why SpendLow?</h2>
<p className="text-zinc-400 font-light mb-8 max-w-md">
                        Legacy PFM (Personal Finance Management) tools rely on static rules. SpendLow uses dynamic Behavioral AI.
                    </p>
<a className="text-white border-b border-white pb-0.5 hover:text-zinc-300 hover:border-zinc-300 transition-colors inline-flex items-center gap-1 text-sm" href="#security">
                        View Security Specs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid gap-4">
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-zinc-900/50 transition-colors">
<div className="mt-1 text-white">
<iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">True Behavioral AI</h4>
<p className="text-sm text-zinc-500 font-light mt-1">Not just categorizing transactions, but understanding the intent and context behind them.</p>
</div>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-zinc-900/50 transition-colors">
<div className="mt-1 text-white">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Infrastructure Agnostic</h4>
<p className="text-sm text-zinc-500 font-light mt-1">Works seamlessly inside existing banking apps via lightweight SDKs or API integration.</p>
</div>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-zinc-900/50 transition-colors">
<div className="mt-1 text-white">
<iconify-icon icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Read-Only Architecture</h4>
<p className="text-sm text-zinc-500 font-light mt-1">We analyze data patterns without holding custody of funds, minimizing risk exposure.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5 relative" id="security">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-[10px] uppercase tracking-widest text-zinc-400 mb-8">
<iconify-icon className="text-zinc-300" icon="solar:shield-check-bold"></iconify-icon>
                Bank-Grade Security
            </div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">Built for Compliance &amp; Trust</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-zinc-500 text-3xl" icon="solar:file-check-linear"></iconify-icon>
<span className="text-sm text-white font-medium">GDPR Compliant</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-zinc-500 text-3xl" icon="solar:globe-linear"></iconify-icon>
<span className="text-sm text-white font-medium">PSD2 Ready</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-zinc-500 text-3xl" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-sm text-white font-medium">SOC2 Certified</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-zinc-500 text-3xl" icon="solar:server-path-linear"></iconify-icon>
<span className="text-sm text-white font-medium">AES-256 Encryption</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-900">
<div className="space-y-1">
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">12</h3>
<p className="text-xs uppercase tracking-widest text-zinc-500">Partner Banks</p>
</div>
<div className="space-y-1">
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">2.5M+</h3>
<p className="text-xs uppercase tracking-widest text-zinc-500">Active Users</p>
</div>
<div className="space-y-1">
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">38%</h3>
<p className="text-xs uppercase tracking-widest text-zinc-500">Engagement Uplift</p>
</div>
<div className="space-y-1">
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">15%</h3>
<p className="text-xs uppercase tracking-widest text-zinc-500">Deposit Growth</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="demo">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-zinc-800 to-transparent blur-[120px] opacity-30 rounded-full -z-10"></div>
<div className="max-w-3xl mx-auto text-center space-y-8">
<h2 className="text-4xl sm:text-5xl font-medium text-white tracking-tight">
                Build the future of banking engagement with SpendLow.
            </h2>
<p className="text-lg text-zinc-400 font-light">
                Join the leading banks transforming raw data into lasting customer relationships.
            </p>
<div className="pt-4">
<button className="bg-white text-zinc-950 hover:bg-zinc-200 transition-colors px-8 py-4 rounded-full font-medium text-sm inline-flex items-center gap-2 group">
                    Request a demo
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
</div>
<span className="text-zinc-500 font-medium tracking-tight text-sm">SpendLow Inc.</span>
</div>
<div className="flex gap-8 text-xs text-zinc-600 font-light">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Security</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-zinc-700 font-light">
                © 2024 SpendLow. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
