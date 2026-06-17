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



        // Replace this with your actual WhatsApp number (International format without +)
        const SELLER_WHATSAPP_NUMBER = "1234567890"; 

        function selectPlan(plan, price) {
            const input = document.getElementById('selectedPlan');
            input.value = `${plan} - $${price}`;
            document.getElementById('get-access').scrollIntoView({ behavior: 'smooth' });
        }

        function submitForm(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const location = document.getElementById('location').value;
            const plan = document.getElementById('selectedPlan').value;
            
            // Construct the message
            const message = `*New Order Request - WhyMudassar.net*%0A%0A` +
                            `--------------------------------%0A` +
                            `*Plan:* ${plan}%0A` +
                            `--------------------------------%0A` +
                            `*Email:* ${email}%0A` +
                            `*WhatsApp:* ${whatsapp}%0A` +
                            `*Location:* ${location}%0A` +
                            `--------------------------------%0A` +
                            `Hello, I would like to purchase this plan. Please send payment details.`;

            // Redirect to WhatsApp
            const url = `https://wa.me/${SELLER_WHATSAPP_NUMBER}?text=${message}`;
            window.open(url, '_blank');
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[10%] w-[45rem] h-[45rem] bg-emerald-500/10 rounded-full blur-[100px]"></div>
<div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-violet-500/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-10%] left-[30%] w-[50rem] h-[50rem] bg-blue-500/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2.5">

<div className="w-7 h-7 bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 rounded flex items-center justify-center text-emerald-400 text-[10px] font-semibold tracking-tighter shadow-lg shadow-emerald-500/10">
                    WM
                </div>

<span className="text-xs font-medium tracking-tight text-zinc-100 hover:text-emerald-400 transition-colors">WHYMUDASSAR.NET</span>
</div>
<div className="hidden md:flex gap-8 text-[13px] font-medium text-zinc-500">
<a className="hover:text-emerald-400 transition-colors" href="#features">Features</a>
<a className="hover:text-emerald-400 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-emerald-400 transition-colors" href="#pricing">Pricing</a>
</div>
<a className="group relative overflow-hidden rounded-full bg-zinc-50 px-4 py-1.5 transition-all hover:bg-emerald-50 hover:text-emerald-950 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]" href="#get-access">
<span className="relative text-[11px] font-semibold text-zinc-900 uppercase tracking-wide group-hover:text-emerald-900">Get Access</span>
</a>
</div>
</nav>

<section className="relative pt-32 pb-24 px-6">
<div className="max-w-3xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-[11px] font-medium mb-8 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] backdrop-blur-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
</span>
                Algo v4.0 is Live
            </div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-white leading-[1.1]">
                Trade with <br className="hidden md:block"/>
<span className="gradient-text-hero">unfair advantage.</span>
</h1>

<p className="text-base md:text-lg text-zinc-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                Institutional-grade TradingView indicators designed for precision. Eliminate noise with <span className="text-emerald-400 font-normal">92% historical accuracy</span>.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-gradient-to-b from-white to-zinc-200 text-zinc-950 text-sm font-medium rounded-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_-5px_rgba(255,255,255,0.2)]" href="#pricing">
<iconify-icon className="text-emerald-700" icon="solar:graph-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    View Plans
                </a>
<a className="w-full sm:w-auto px-6 py-3 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-zinc-300 text-sm font-medium rounded-lg hover:bg-zinc-800/80 hover:border-emerald-500/30 hover:text-emerald-400 transition-all flex items-center justify-center gap-2" href="#features">
                    How it works
                </a>
</div>
</div>

<div className="mt-16 relative max-w-4xl mx-auto group">

<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-zinc-900 border border-white/5 rounded-xl aspect-[16/6] overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat animate-[shimmer_3s_infinite]"></div>
<div className="text-zinc-600 text-sm font-mono flex flex-col items-center gap-2">
<iconify-icon className="text-emerald-500/50" icon="solar:chart-square-linear" width="32"></iconify-icon>
<span className="group-hover:text-emerald-500/50 transition-colors">TradingView Chart Preview</span>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm">
<div className="max-w-5xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
<div className="px-4">
<div className="text-xl font-semibold text-white tracking-tight">5,000+</div>
<div className="text-[10px] text-blue-400 uppercase tracking-widest font-medium mt-1">Active Traders</div>
</div>
<div className="px-4">
<div className="text-xl font-semibold text-emerald-400 tracking-tight">92%</div>
<div className="text-[10px] text-emerald-500/70 uppercase tracking-widest font-medium mt-1">Win Rate</div>
</div>
<div className="px-4">
<div className="text-xl font-semibold text-white tracking-tight">24/7</div>
<div className="text-[10px] text-purple-400 uppercase tracking-widest font-medium mt-1">Live Support</div>
</div>
<div className="px-4">
<div className="text-xl font-semibold text-amber-400 tracking-tight">4.9/5</div>
<div className="text-[10px] text-amber-500/70 uppercase tracking-widest font-medium mt-1">TrustPilot</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:text-center">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Engineered for profit.</h2>
<p className="text-zinc-500 font-light text-sm max-w-xl md:mx-auto">Sophisticated algorithms simplified into clear, actionable signals.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-emerald-900/10 hover:border-emerald-500/30 transition-all duration-300 card-gradient">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-300 shadow-lg shadow-emerald-500/5">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 group-hover:text-emerald-200 transition-colors">Trend Detection</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400">Automatically identifies macro and micro trends, filtering out market noise so you only trade with momentum.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-blue-900/10 hover:border-blue-500/30 transition-all duration-300 card-gradient">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300 shadow-lg shadow-blue-500/5">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 group-hover:text-blue-200 transition-colors">Instant Alerts</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400">Get instant notifications on your phone or desktop the second a high-probability setup occurs.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-purple-900/10 hover:border-purple-500/30 transition-all duration-300 card-gradient">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-300 shadow-lg shadow-purple-500/5">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 group-hover:text-purple-200 transition-colors">Risk Management</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400">Built-in stop-loss and take-profit suggestions based on volatility to protect your capital.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-gradient-to-b from-zinc-950 to-zinc-900/30" id="reviews">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-16 text-center">Trusted by top traders</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 bg-zinc-950 border border-white/5 rounded-xl hover:border-orange-500/20 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-colors"></div>
<div className="flex gap-0.5 text-orange-400 mb-4 opacity-90">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed relative z-10">"I've tried dozens of indicators, but WhyMudassar's toolkit is the only one that actually filters out the chop. The ROI has been insane."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-orange-500/20 flex items-center justify-center text-[10px] font-semibold text-orange-400">JD</div>
<div className="text-xs">
<div className="text-zinc-200 font-medium">James D.</div>
<div className="text-zinc-600">Forex Trader</div>
</div>
</div>
</div>

<div className="p-6 bg-zinc-950 border border-white/5 rounded-xl hover:border-blue-500/20 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
<div className="flex gap-0.5 text-blue-400 mb-4 opacity-90">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed relative z-10">"The lifetime deal is a steal. Other sellers charge $10k for this level of accuracy. The support team is also very responsive."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-blue-500/20 flex items-center justify-center text-[10px] font-semibold text-blue-400">SK</div>
<div className="text-xs">
<div className="text-zinc-200 font-medium">Sarah K.</div>
<div className="text-zinc-600">Crypto Swing Trader</div>
</div>
</div>
</div>

<div className="p-6 bg-zinc-950 border border-white/5 rounded-xl hover:border-emerald-500/20 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="flex gap-0.5 text-emerald-400 mb-4 opacity-90">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed relative z-10">"Finally, a system that works. The setup was easy, and the signals are clear. Made back my monthly fee in the first trade."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-emerald-500/20 flex items-center justify-center text-[10px] font-semibold text-emerald-400">MR</div>
<div className="text-xs">
<div className="text-zinc-200 font-medium">Michael R.</div>
<div className="text-zinc-600">Day Trader</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="pricing">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Unbeatable Pricing</h2>
<p className="text-zinc-500 text-sm">Professional tools at a fraction of the market cost.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 items-start">

<div className="border border-white/5 bg-zinc-900/20 rounded-2xl p-8 relative group hover:border-blue-500/30 transition-all blue-glow">
<div className="absolute top-0 right-0 p-6">
<span className="bg-blue-500/10 text-blue-400 text-[10px] font-semibold px-2 py-1 rounded border border-blue-500/20">Starter</span>
</div>
<h3 className="text-base font-medium text-white mb-2 group-hover:text-blue-200 transition-colors">Monthly</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-3xl font-medium text-white tracking-tight">$10</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<div className="text-[11px] text-zinc-600 line-through mb-8">Usually $100/mo</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-400 group-hover:text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Full Access to Indicator
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-400 group-hover:text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Basic Support
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-400 group-hover:text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Mobile Alerts
                    </li>
</ul>
<button className="w-full py-3 bg-zinc-900 border border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-zinc-300 text-sm font-medium rounded-lg transition-all duration-300" onclick="selectPlan('Monthly', 10)">Get Monthly</button>
</div>

<div className="border border-emerald-500/30 bg-zinc-900/60 rounded-2xl p-8 relative emerald-glow transform md:-translate-y-4 backdrop-blur-xl">
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
</div>
<div className="absolute top-0 right-0 p-6">
<span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold px-2 py-1 rounded border border-emerald-500/20">SAVE 85%</span>
</div>
<h3 className="text-base font-medium text-white mb-2">Yearly</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-3xl font-medium text-white tracking-tight">$150</span>
<span className="text-sm text-zinc-500">/yr</span>
</div>
<div className="text-[11px] text-zinc-600 line-through mb-8">Usually $1,000/yr</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> All Indicators
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> VIP Signals Group
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Priority Support
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Setup Guidance
                    </li>
</ul>
<button className="w-full py-3 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:to-emerald-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-emerald-500/20" onclick="selectPlan('Yearly', 150)">Get Yearly</button>
</div>

<div className="border border-white/5 bg-zinc-900/20 rounded-2xl p-8 relative group hover:border-purple-500/30 transition-all purple-glow">
<div className="absolute top-0 right-0 p-6">
<span className="bg-purple-500/10 text-purple-400 text-[10px] font-semibold px-2 py-1 rounded border border-purple-500/20">PRO</span>
</div>
<h3 className="text-base font-medium text-white mb-2 group-hover:text-purple-200 transition-colors">Lifetime</h3>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-3xl font-medium text-white tracking-tight">$1,500</span>
<span className="text-sm text-zinc-500">/once</span>
</div>
<div className="text-[11px] text-zinc-600 line-through mb-8">Value $10,000+</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-400 group-hover:text-zinc-300">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Lifetime Updates
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-400 group-hover:text-zinc-300">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> 1-on-1 Mentorship
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-400 group-hover:text-zinc-300">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Private Strategy
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-400 group-hover:text-zinc-300">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Source Code Access
                    </li>
</ul>
<button className="w-full py-3 bg-zinc-900 border border-white/10 hover:bg-purple-600 hover:border-purple-500 hover:text-white text-zinc-300 text-sm font-medium rounded-lg transition-all duration-300" onclick="selectPlan('Lifetime', 1500)">Get Lifetime</button>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden" id="get-access">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 mb-6 text-emerald-500 shadow-lg shadow-emerald-500/10">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-medium text-white mb-2">Complete your order</h2>
<p className="text-zinc-500 text-sm">Secure your access via WhatsApp agent.</p>
</div>
<form className="space-y-5 bg-zinc-900/40 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-[0_0_50px_-20px_rgba(16,185,129,0.1)]" id="orderForm" onsubmit="submitForm(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[11px] text-zinc-400 font-medium ml-1 uppercase tracking-wider">Email Address</label>
<div className="relative group">
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50 transition-all pl-10" id="email" placeholder="trader@gmail.com" required="" type="email"/>
<iconify-icon className="absolute left-3.5 top-3.5 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] text-zinc-400 font-medium ml-1 uppercase tracking-wider">WhatsApp</label>
<div className="relative group">
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50 transition-all pl-10" id="whatsapp" placeholder="+1 234..." required="" type="tel"/>
<iconify-icon className="absolute left-3.5 top-3.5 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" icon="solar:phone-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] text-zinc-400 font-medium ml-1 uppercase tracking-wider">Location</label>
<div className="relative group">
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 focus:bg-zinc-900/80 focus:ring-1 focus:ring-emerald-500/50 transition-all pl-10" id="location" placeholder="New York, USA" required="" type="text"/>
<iconify-icon className="absolute left-3.5 top-3.5 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] text-zinc-400 font-medium ml-1 uppercase tracking-wider">Selected Plan</label>
<div className="relative group">
<input className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-300 focus:outline-none pl-10 cursor-not-allowed" id="selectedPlan" readonly="" type="text" value="Monthly - $10"/>
<iconify-icon className="absolute left-3.5 top-3.5 text-zinc-500" icon="solar:tag-linear" width="18"></iconify-icon>
</div>
</div>
<button className="w-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-white font-medium text-sm py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-2 group" type="submit">
                    Proceed on WhatsApp
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2" width="18"></iconify-icon>
</button>
<p className="text-[10px] text-zinc-600 text-center mt-4">Automated delivery after confirmation.</p>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 text-center bg-zinc-950">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
<div className="w-8 h-8 bg-zinc-900 border border-white/10 rounded flex items-center justify-center text-white text-xs font-semibold tracking-tighter">
                WM
            </div>
<div className="space-y-1">
<p className="text-zinc-600 text-xs">© 2024 WhyMudassar.net. All rights reserved.</p>
<p className="text-zinc-700 text-[10px] max-w-sm mx-auto">Trading involves risk. Past performance is not indicative of future results. Information provided is for educational purposes.</p>
</div>
</div>
</footer>


    </>
  );
}
