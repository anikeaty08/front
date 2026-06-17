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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none -z-10"></div>

<header className="fixed top-0 w-full border-b border-white/5 bg-neutral-950/70 backdrop-blur-lg z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-medium tracking-tighter text-white flex items-center gap-1">
<span className="text-orange-500">M</span>aklClient
            </div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-[#5865F2] transition-colors flex items-center gap-1.5" href="https://discord.gg/zaT3hkrEuE" target="_blank">
<iconify-icon className="text-base" icon="simple-icons:discord"></iconify-icon>
                    Discord
                </a>
</nav>
<a className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full transition-all hover:border-orange-500/50" href="#pricing">
                Get Access
            </a>
</div>
</header>

<main className="pt-32 md:pt-48 pb-24 px-6 max-w-6xl mx-auto flex flex-col items-center text-center flex-grow">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Undetected &amp; Updated
        </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-tight">
            Dominate with <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-600">Absolute</span> Precision.
        </h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mb-16 leading-relaxed">
            Experience unparalleled performance. Over 20+ fine-tuned modules paired with industry-leading bypass technology, designed to keep you ahead of the game.
        </p>

<div className="w-full max-w-3xl bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-orange-900/20 ring-1 ring-white/5 transition-transform hover:-translate-y-1 duration-500 text-left">

<div className="bg-neutral-950/50 px-4 py-3 flex items-center border-b border-white/5 gap-2 relative">
<div className="flex gap-2 z-10">
<div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)] cursor-default"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)] cursor-default"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)] cursor-default"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-xs font-mono text-neutral-600 tracking-tight">root@makl-sys:~</span>
</div>
</div>

<div className="p-6 md:p-8 font-mono text-xs md:text-sm text-neutral-300 bg-neutral-900/80">
<div className="flex items-center gap-2 mb-2">
<span className="text-green-500">root@makl</span><span className="text-neutral-500">:</span><span className="text-blue-400">~</span><span className="text-neutral-500">$</span>
<span className="text-neutral-300">./init_client.sh --legit-mode</span>
</div>
<div className="text-neutral-500 mb-2">[i] Initializing Very Legit Human Inputs (24/24)... Done.</div>
<div className="text-neutral-500 mb-4">[i] Securing connection... Established.</div>
<div className="flex items-center">
<span className="text-orange-400 font-medium">&gt; Your Lookin At One Of The Best Clients Right Now</span>
<span className="inline-block w-2 h-4 bg-orange-500 animate-[pulse_1s_step-end_infinite] ml-1 align-middle"></span>
</div>
</div>
</div>
</main>

<section className="py-24 bg-neutral-900/30 border-y border-white/5 relative" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8 md:gap-16">
<div className="group flex gap-5 items-start">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 text-neutral-400 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all duration-300 shadow-lg shadow-black/50">
<iconify-icon className="text-2xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Flawless Anti-Cheat Bypass</h3>
<p className="text-sm text-neutral-400 leading-relaxed">We don't use injection methods, we just use Very Legit Human Inputs to ensure you stay completely undetected against modern server-side and client-side anti-cheats.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 text-neutral-400 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all duration-300 shadow-lg shadow-black/50">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">20+ Premium Modules</h3>
<p className="text-sm text-neutral-400 leading-relaxed">From combat assistance to advanced movement exploits and render utilities, access a comprehensive suite of finely tuned features.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 text-neutral-400 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all duration-300 shadow-lg shadow-black/50">
<iconify-icon className="text-2xl" icon="solar:tuning-square-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Highly Customizable UI</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Tailor every aspect of the client to your liking. Bind keys, adjust module settings, and customize the visual theme on the fly.</p>
</div>
</div>
<div className="group flex gap-5 items-start">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 text-neutral-400 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all duration-300 shadow-lg shadow-black/50">
<iconify-icon className="text-2xl" icon="solar:cloud-download-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Cloud Configurations</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Save your perfect setups to the cloud and load them instantly. Share configs with the community or keep them private.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto text-center w-full" id="pricing">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Simple, Unbeatable Pricing.</h2>
<p className="text-sm text-neutral-400 mb-16 max-w-xl mx-auto">Get instant access to all features immediately after purchase. No hidden fees, just raw performance.</p>
<div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">

<div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/20 transition-all duration-300 relative group">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
<h3 className="text-base font-medium text-neutral-400 mb-4">1 Month Access</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-semibold tracking-tight text-white">€6</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<ul className="text-sm text-neutral-300 space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Access to all 20+ modules</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Undetected bypass technology</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Standard community support</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10 backdrop-blur-sm">
                    Purchase 1 Month
                </button>
</div>

<div className="bg-neutral-900 border border-orange-500/40 rounded-2xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(249,115,22,0.05)] transform md:-translate-y-2">
<div className="absolute top-0 right-8 transform -translate-y-1/2">
<span className="bg-orange-500 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg shadow-orange-500/20 tracking-tight">BEST VALUE</span>
</div>
<h3 className="text-base font-medium text-orange-400 mb-4">Lifetime Access</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-5xl font-semibold tracking-tight text-white">€10</span>
<span className="text-sm text-neutral-500">one-time</span>
</div>
<ul className="text-sm text-neutral-300 space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Access to all 20+ modules</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Undetected bypass technology</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Priority 24/7 support</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-white font-medium">Free updates forever</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-black text-sm font-medium transition-colors shadow-lg shadow-orange-500/20">
                    Purchase Lifetime
                </button>
</div>
</div>
</section>

<footer className="mt-auto border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
<p className="text-xs text-neutral-600 mb-6 font-medium tracking-tight uppercase">Flexible Payment Options</p>
<div className="flex flex-wrap justify-center gap-10 items-center mb-16">
<div className="flex flex-col items-center gap-2 group cursor-default">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-500 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors">Crypto</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-default">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-500 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:gift-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors">Giftcards</span>
</div>
</div>
<div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-neutral-600">
<div className="text-sm font-medium tracking-tighter text-neutral-500 mb-4 md:mb-0 flex items-center gap-1">
<span className="text-orange-500">M</span>aklClient
                </div>
<div className="flex gap-6">
<a className="hover:text-neutral-300 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-300 transition-colors flex items-center gap-1.5" href="https://discord.gg/zaT3hkrEuE" target="_blank">
<iconify-icon className="text-xs" icon="simple-icons:discord"></iconify-icon> Discord
                    </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
