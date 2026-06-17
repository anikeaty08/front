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



        // Form Handling
        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get values
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const location = document.getElementById('location').value;
            const plan = document.getElementById('plan').value;
            
            // Format WhatsApp Message
            const targetNumber = "923195069567";
            
            const message = `*CYBERPUNK ORDER REQUEST*%0A%0A` +
                            `------------------------------%0A` +
                            `👤 *USER_DATA:*%0A` +
                            `📧 Email: ${email}%0A` +
                            `📱 Link: ${phone}%0A` +
                            `📍 Sector: ${location}%0A` +
                            `------------------------------%0A` +
                            `📦 *MODULE_SELECTED:*%0A` +
                            `🔥 ${plan}%0A` +
                            `------------------------------%0A` +
                            `Awaiting confirmation...`;
            
            const whatsappUrl = `https://wa.me/${targetNumber}?text=${message}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
        });

        // Plan Selection Helper
        function selectPlan(planName) {
            const select = document.getElementById('plan');
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].text.includes(planName)) {
                    select.selectedIndex = i;
                    break;
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
      

<div className="fixed inset-0 z-[-2] flex items-center justify-center overflow-hidden pointer-events-none">
<div className="relative w-full h-full">
<h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black leading-none tracking-tighter graffiti-gradient opacity-[0.07] rotate-[-15deg] whitespace-nowrap blur-sm select-none mix-blend-screen">
                WHY<br/>MUD
            </h1>
</div>
</div>

<div className="fixed inset-0 z-[-1] h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="fixed top-0 left-0 w-full h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full z-[-1]"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[100px] rounded-full z-[-1]"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-fuchsia-600 to-purple-800 flex items-center justify-center text-white font-medium text-lg border border-white/10 shadow-[0_0_15px_-3px_rgba(217,70,239,0.5)]">
                    w
                </div>
<span className="text-lg font-medium tracking-tight text-white">whymudassar</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-cyan-400 transition-colors" href="#features">Features</a>
<a className="hover:text-fuchsia-400 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>
<a className="text-sm font-medium px-4 py-2 rounded-none skew-x-[-10deg] bg-white/5 hover:bg-fuchsia-500/20 text-white transition-all border border-fuchsia-500/30 flex items-center gap-2 group" href="#contact">
<span className="skew-x-[10deg]">Contact</span>
<iconify-icon className="skew-x-[10deg] group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<header className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
<div className="animate-enter max-w-4xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-medium mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                SYSTEM V3.0 ONLINE
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Execute trades with <br/>
<span className="text-gradient font-semibold">cyber precision.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Next-gen TradingView algorithms. Zero latency, neural-network accuracy. Designed for the trader of the future.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 rounded-sm skew-x-[-10deg] bg-white text-black font-semibold hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 group shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#contact">
<span className="skew-x-[10deg] flex items-center gap-2">
                        Get Access
                        <iconify-icon className="group-hover:text-black transition-colors" icon="solar:bolt-linear"></iconify-icon>
</span>
</a>
<a className="w-full sm:w-auto px-8 py-3 rounded-sm skew-x-[-10deg] border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-fuchsia-500/50 transition-colors" href="#comparison">
<span className="skew-x-[10deg]">Compare Us</span>
</a>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative animate-enter delay-200">
<div className="rounded-xl border border-white/10 bg-black/60 backdrop-blur-md p-2 shadow-[0_0_50px_-10px_rgba(217,70,239,0.15)] relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/50 z-20 animate-float shadow-[0_0_10px_#06b6d4]"></div>
<div className="rounded-lg bg-zinc-950 border border-white/5 overflow-hidden h-64 md:h-96 relative flex items-center justify-center">

<div className="absolute inset-0 flex items-end justify-between px-10 pb-10 opacity-70">
<div className="w-2 md:w-4 bg-cyan-500/20 h-[40%] shadow-[0_0_10px_rgba(6,182,212,0.2)]"></div>
<div className="w-2 md:w-4 bg-cyan-500/40 h-[60%] shadow-[0_0_10px_rgba(6,182,212,0.3)]"></div>
<div className="w-2 md:w-4 bg-fuchsia-600/30 h-[30%] shadow-[0_0_10px_rgba(217,70,239,0.2)]"></div>
<div className="w-2 md:w-4 bg-cyan-500/60 h-[80%] shadow-[0_0_10px_rgba(6,182,212,0.4)]"></div>
<div className="w-2 md:w-4 bg-cyan-400 h-[95%] shadow-[0_0_20px_rgba(6,182,212,0.6)] animate-pulse-neon"></div>
<div className="w-2 md:w-4 bg-fuchsia-600/50 h-[50%] shadow-[0_0_10px_rgba(217,70,239,0.3)]"></div>
<div className="w-2 md:w-4 bg-cyan-500/50 h-[70%] shadow-[0_0_10px_rgba(6,182,212,0.3)]"></div>
<div className="w-2 md:w-4 bg-cyan-500/30 h-[45%] shadow-[0_0_10px_rgba(6,182,212,0.2)]"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-6xl text-fuchsia-500 mb-4 animate-float drop-shadow-[0_0_15px_rgba(217,70,239,0.8)]" icon="solar:graph-up-linear"></iconify-icon>
<p className="text-sm font-medium text-cyan-300 font-mono tracking-widest uppercase">Signal Lock: 92% Acc.</p>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 relative" id="comparison">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Don't burn money.</h2>
<p className="text-zinc-400">The market is rigged. Your tools shouldn't be.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 items-center">

<div className="p-8 rounded-none border-l-2 border-red-900 bg-zinc-950/80 opacity-60 scale-95 hover:opacity-100 transition-all">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-red-500">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-500">The "Gurus"</h3>
</div>
<ul className="space-y-4 mb-8 font-mono text-sm">
<li className="flex justify-between items-center text-zinc-600 border-b border-white/5 pb-2">
<span>Monthly</span>
<span className="line-through decoration-red-500/50">$150</span>
</li>
<li className="flex justify-between items-center text-zinc-600 border-b border-white/5 pb-2">
<span>Yearly</span>
<span className="line-through decoration-red-500/50">$1,000</span>
</li>
</ul>
<div className="text-xs text-center text-red-900/50 uppercase tracking-widest">Obsolete</div>
</div>

<div className="relative p-8 rounded-xl border border-cyan-500/30 bg-zinc-900/90 shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] md:-ml-4 z-10 backdrop-blur-xl">
<div className="absolute -top-3 right-8 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-lg shadow-purple-500/30">Superior Tech</div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
<iconify-icon icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">whymudassar</h3>
</div>
<ul className="space-y-4 mb-8 font-mono text-sm">
<li className="flex justify-between items-center text-zinc-300 border-b border-white/5 pb-2">
<span>Monthly</span>
<span className="font-bold text-fuchsia-400 text-lg">$35</span>
</li>
<li className="flex justify-between items-center text-zinc-300 border-b border-white/5 pb-2">
<span>Yearly</span>
<span className="font-bold text-cyan-400 text-lg">$350</span>
</li>
</ul>
<div className="flex items-center gap-2 justify-center text-xs text-cyan-300/80 bg-cyan-500/10 py-2 border border-cyan-500/20">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                        Encrypted &amp; Verified
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Select your loadout.</h2>
<p className="text-zinc-400">Transparent pricing. No hidden protocols.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-none border-l-2 border-l-fuchsia-600/50 flex flex-col hover:bg-white/5 transition-all group">
<div className="mb-4">
<h3 className="text-fuchsia-400 font-medium text-sm tracking-widest uppercase">Monthly</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-medium text-white">$35</span>
<span className="text-zinc-500 text-sm">/mo</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-zinc-400 group-hover:text-zinc-300"><iconify-icon className="text-fuchsia-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Full Algorithm Access</li>
<li className="flex items-start gap-2 text-sm text-zinc-400 group-hover:text-zinc-300"><iconify-icon className="text-fuchsia-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Standard Support</li>
</ul>
<a className="w-full py-2.5 bg-zinc-900 border border-zinc-800 hover:border-fuchsia-500 hover:text-fuchsia-400 text-center text-sm font-medium text-white transition-all" href="#contact" onclick="selectPlan('Monthly')">Initialize</a>
</div>

<div className="glass-panel p-6 rounded-none border-x-2 border-cyan-500 flex flex-col bg-cyan-950/10 relative transform md:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[10px] font-bold px-4 py-1 skew-x-[-10deg] tracking-wide">RECOMMENDED</div>
<div className="mb-4 pt-2">
<h3 className="text-cyan-400 font-medium text-sm tracking-widest uppercase">Yearly</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-medium text-white">$350</span>
<span className="text-zinc-500 text-sm">/yr</span>
</div>
<p className="text-xs text-cyan-400/60 mt-1 font-mono">OPTIMIZED SAVINGS</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-zinc-300"><iconify-icon className="text-cyan-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Priority Latency</li>
<li className="flex items-start gap-2 text-sm text-zinc-300"><iconify-icon className="text-cyan-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> 24/7 Dev Support</li>
<li className="flex items-start gap-2 text-sm text-zinc-300"><iconify-icon className="text-cyan-400 mt-0.5" icon="solar:check-read-linear"></iconify-icon> 1-on-1 Calibration</li>
</ul>
<a className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-center text-sm font-bold text-black transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]" href="#contact" onclick="selectPlan('Yearly')">Initialize</a>
</div>

<div className="glass-panel p-6 rounded-none border-l-2 border-l-purple-600/50 flex flex-col hover:bg-white/5 transition-all group">
<div className="mb-4">
<h3 className="text-purple-400 font-medium text-sm tracking-widest uppercase">Lifetime</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-3xl font-medium text-white">$5,000</span>
<span className="text-zinc-500 text-sm">/once</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-zinc-400 group-hover:text-zinc-300"><iconify-icon className="text-purple-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Source Code Access</li>
<li className="flex items-start gap-2 text-sm text-zinc-400 group-hover:text-zinc-300"><iconify-icon className="text-purple-500 mt-0.5" icon="solar:check-read-linear"></iconify-icon> Private Node Access</li>
</ul>
<a className="w-full py-2.5 bg-zinc-900 border border-zinc-800 hover:border-purple-500 hover:text-purple-400 text-center text-sm font-medium text-white transition-all" href="#contact" onclick="selectPlan('Lifetime')">Initialize</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black/40" id="reviews">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-12 text-center">Verified User Logs</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-sm bg-zinc-900/40 border-l border-fuchsia-500/20 hover:border-fuchsia-500/50 transition-colors">
<div className="flex gap-1 text-fuchsia-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-4 font-mono text-xs">"System precision is unmatched. The $15k packages are obsolete compared to this code."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-800 flex items-center justify-center text-xs font-bold text-fuchsia-400">JS</div>
<div>
<div className="text-sm font-medium text-white">Jason S.</div>
<div className="text-xs text-zinc-500">Forex</div>
</div>
</div>
</div>

<div className="p-6 rounded-sm bg-zinc-900/40 border-l border-cyan-500/20 hover:border-cyan-500/50 transition-colors">
<div className="flex gap-1 text-cyan-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-4 font-mono text-xs">"ROI achieved in 48 hours. Crypto markets are finally readable with these indicators."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-800 flex items-center justify-center text-xs font-bold text-cyan-400">AL</div>
<div>
<div className="text-sm font-medium text-white">Ahmed L.</div>
<div className="text-xs text-zinc-500">Crypto</div>
</div>
</div>
</div>

<div className="p-6 rounded-sm bg-zinc-900/40 border-l border-purple-500/20 hover:border-purple-500/50 transition-colors">
<div className="flex gap-1 text-purple-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-4 font-mono text-xs">"Support is instant. Setup was done remotely. High efficiency workflow."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-800 flex items-center justify-center text-xs font-bold text-purple-400">MK</div>
<div>
<div className="text-sm font-medium text-white">Maria K.</div>
<div className="text-xs text-zinc-500">Intraday</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="glass-panel p-8 md:p-10 rounded-sm shadow-2xl relative border-t border-fuchsia-500/30 shadow-[0_0_40px_-10px_rgba(217,70,239,0.1)]">
<div className="text-center mb-8">
<h2 className="text-2xl font-medium text-white mb-2">Secure Link</h2>
<p className="text-zinc-400 text-sm">Enter credentials to establish WhatsApp connection.</p>
</div>
<form className="space-y-5" id="orderForm">

<div className="group">
<label className="block text-xs font-mono text-fuchsia-400 mb-1.5 ml-1">&gt;&gt; EMAIL_ADDRESS</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-500 transition-colors group-focus-within:text-fuchsia-400" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-black/60 border border-white/10 rounded-sm py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all placeholder:text-zinc-700 font-mono" id="email" placeholder="trader@gmail.com" required="" type="email"/>
</div>
</div>

<div className="group">
<label className="block text-xs font-mono text-cyan-400 mb-1.5 ml-1">&gt;&gt; COMM_LINK (WHATSAPP)</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-500 transition-colors group-focus-within:text-cyan-400" icon="solar:phone-linear"></iconify-icon>
<input className="w-full bg-black/60 border border-white/10 rounded-sm py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-zinc-700 font-mono" id="phone" placeholder="+92 300 1234567" required="" type="tel"/>
</div>
</div>

<div className="group">
<label className="block text-xs font-mono text-zinc-400 mb-1.5 ml-1">&gt;&gt; SECTOR / LOCATION</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-500 transition-colors group-focus-within:text-fuchsia-400" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full bg-black/60 border border-white/10 rounded-sm py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all placeholder:text-zinc-700 font-mono" id="location" placeholder="City, Country" required="" type="text"/>
</div>
</div>

<div className="group">
<label className="block text-xs font-mono text-zinc-400 mb-1.5 ml-1">&gt;&gt; SELECTED_MODULE</label>
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-zinc-500 z-10" icon="solar:cart-large-linear"></iconify-icon>
<select className="w-full bg-black/60 border border-white/10 rounded-sm py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all appearance-none cursor-pointer font-mono" id="plan">
<option value="Monthly Plan ($35)">Monthly Plan - $35</option>
<option value="Yearly Plan ($350)">Yearly Plan - $350 (Best Value)</option>
<option value="Lifetime Plan ($5000)">Lifetime Plan - $5000</option>
</select>
</div>
</div>
<button className="w-full mt-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold tracking-wider py-3 rounded-sm hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 group shadow-[0_0_20px_-5px_rgba(217,70,239,0.5)]" type="submit">
                        EXECUTE ORDER
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-center text-zinc-600 mt-4 font-mono">
                        [!] Encrypted redirect to agent 03195069567
                    </p>
</form>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 text-center bg-black relative z-10">
<div className="flex items-center justify-center gap-2 mb-4">
<div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black text-xs font-bold">w</div>
<span className="text-white font-medium tracking-tight">whymudassar</span>
</div>
<p className="text-sm text-zinc-600">© 2077 whymudassar Indicators. System Active.</p>
<div className="flex justify-center gap-4 mt-4">
<a className="text-zinc-600 hover:text-cyan-400 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-600 hover:text-fuchsia-400 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-whatsapp-linear" width="20"></iconify-icon></a>
</div>
</footer>


    </>
  );
}
