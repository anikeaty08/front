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



        function copyNumber() {
            navigator.clipboard.writeText('03195069567');
            alert('Number copied to clipboard');
        }

        function handleForm(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const userPhone = document.getElementById('whatsapp').value;
            
            // Construct the message
            const text = `*New Order Verification*\n\nHello, I have made the payment for Why Bot.\n\n*My Details:*\nEmail: ${email}\nMy WhatsApp: ${userPhone}\n\nI am attaching the payment screenshot below 👇`;
            
            // Format for WhatsApp Link (923195069567)
            const adminPhone = "923195069567";
            const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(text)}`;
            
            // Open WhatsApp
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-new-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-lg group-hover:text-cyan-400 transition-colors">Why Bot</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#demo">Live Results</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-4 py-2 rounded-full text-xs font-semibold hover:bg-slate-200 transition-colors tracking-wide" href="#buy">
                Get Access
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon className="" height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                New Algorithm V2.0 Released
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-6">
                Trade smarter, not <br/>
<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">harder.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
                Unlock professional-grade market insights with the Why Bot indicator. High accuracy signals directly on your TradingView chart for a fraction of the cost.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 rounded text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#buy">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Buy Now - $5
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 text-white rounded text-sm font-medium hover:bg-white/5 transition-colors" href="#features">
                    View Features
                </a>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto border border-white/10 rounded-xl bg-slate-900/40 p-1 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="aspect-[16/9] flex overflow-hidden bg-slate-950 w-full border-white/5 border rounded-lg relative items-center justify-center">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<svg className="absolute bottom-0" data-icon-replaced="true" data-icon-set="lucide" data-lucide="align-horizontal-space-around" fill="none" height="12" preserveaspectratio="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="639" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="6" x="9" y="7"></rect><path d="M4 22V2"></path><path d="M20 22V2"></path></svg>
<div className="absolute top-[20%] right-[25%] bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-sm shadow-lg shadow-green-900/20 animate-pulse">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    STRONG BUY
                </div>
</div>
</div>
</main>

<section className="py-20 border-t border-white/5 bg-slate-950" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-xl border border-white/5 bg-slate-900/20 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Instant Delivery</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Automated system via Google Drive. Get access to the Pine Script code and setup instructions immediately.
                    </p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-slate-900/20 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">High Precision</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Optimized for Crypto and Forex markets. The algorithm filters noise to present clear entry and exit points.
                    </p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-slate-900/20 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Lifetime Access</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        One-time payment of $5. No monthly subscriptions. Includes all future updates to the Why Bot script V2.
                    </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pr-6 pb-24 pl-6 relative" id="buy">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-md mx-auto relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-white tracking-tight mb-3">Secure Checkout</h2>
<p className="text-sm text-slate-400">Complete details below to verify payment.</p>
</div>

<div className="glass border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50">
<div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:file-code-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-white text-sm font-medium">Why Bot Indicator</h4>
<p className="text-xs text-slate-500">Google Drive Access</p>
</div>
</div>
<div className="text-right">
<span className="block text-white font-medium">$5.00</span>
<span className="text-xs text-slate-500">USD</span>
</div>
</div>
<form className="space-y-6" id="checkoutForm" onsubmit="handleForm(event)">
<div className="space-y-4">
<label className="text-xs uppercase tracking-wider font-semibold text-slate-500 block">Customer Details</label>
<div className="grid gap-4">

<div className="relative group">
<input className="w-full bg-slate-950/50 border border-white/10 rounded-lg pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/30 focus:ring-1 focus:ring-cyan-500/30 transition-all placeholder:text-slate-600" id="email" placeholder="your@gmail.com" required="" type="email"/>
<iconify-icon className="absolute right-3.5 top-3.5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" icon="solar:letter-linear" width="18"></iconify-icon>
</div>

<div className="relative group">
<input className="w-full bg-slate-950/50 border border-white/10 rounded-lg pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/30 focus:ring-1 focus:ring-cyan-500/30 transition-all placeholder:text-slate-600" id="whatsapp" placeholder="Your WhatsApp Number" required="" type="tel"/>
<iconify-icon className="absolute right-3.5 top-3.5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" icon="solar:phone-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-3 pt-2">
<label className="text-xs uppercase tracking-wider font-semibold text-slate-500">Payment Method</label>
<div className="p-4 rounded-lg bg-slate-900/50 border border-cyan-500/20 relative overflow-hidden group">
<div className="absolute inset-y-0 left-0 w-1 bg-cyan-500"></div>
<div className="flex items-center justify-between mb-2">
<span className="text-white font-medium text-sm flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:wallet-money-linear"></iconify-icon>
                                    Easypaisa
                                </span>
<span className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20">Preferred</span>
</div>
<div className="flex items-center justify-between bg-slate-950/50 p-2 rounded border border-white/5">
<code className="text-slate-300 font-mono text-sm tracking-wide" id="adminNumber">03195069567</code>
<button className="text-slate-400 hover:text-white transition-colors" onclick="copyNumber()" title="Copy Number" type="button">
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
<p className="text-xs text-slate-500 mt-2">Send exactly <span className="text-slate-300 font-medium">$5</span> (approx. equivalent PKR) to this number.</p>
</div>
</div>
<div className="space-y-3">
</div>

<button className="hover:bg-slate-200 transition-all shine overflow-hidden flex gap-2 text-sm font-semibold text-slate-950 bg-white w-full rounded pt-3 pb-3 relative gap-x-2 gap-y-2 items-center justify-center" type="submit">
<span className="">Verify &amp; Get Script</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-xs text-center text-slate-600">
<iconify-icon className="inline-block align-text-bottom mr-1" icon="brandico:whatsapp"></iconify-icon>
                        Opens WhatsApp for instant manual verification.
                    </p>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-slate-950">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs">W</div>
<span className="text-slate-300 text-sm font-medium tracking-tight">Why Bot</span>
</div>
<p className="text-xs text-slate-600">
                © 2023 Why Bot Indicators. All rights reserved.
            </p>
</div>
</footer>


    </>
  );
}
