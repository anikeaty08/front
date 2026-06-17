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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative h-8 w-8 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="Logo" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-900 leading-none">Jaipur Jewelry</span>
</div>
</div>
<a className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-[#d4af37] transition-colors" href="https://wa.me/917378118254">
<iconify-icon className="text-lg" icon="solar:chat-round-linear" strokeWidth="1.5"></iconify-icon>
                Order on WhatsApp
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
</span>
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Make A Different Look</span>
</div>
<h1 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 mb-4 tracking-tight leading-tight">
                Specialist in Oxidised <br/> &amp; <span className="text-[#d4af37]">Anti-tarnish</span> Jewelry
            </h1>
<p className="text-lg text-slate-500 mb-8 font-light">
                शुद्धता और खूबसूरती का संगम
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#0d3b7a] px-8 font-medium text-white transition-all duration-300 hover:bg-[#092a58] hover:shadow-lg hover:shadow-[#0d3b7a]/20" href="https://wa.me/917378118254?text=Hi, I want to see your jewelry collection">
<span className="mr-2">WhatsApp Now</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<span className="text-xs text-slate-400 font-medium">No: 7378118254</span>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-20 right-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
</div>
</header>

<section className="px-6 py-12 border-t border-slate-100">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#d4af37]/30">
<div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0d3b7a] mb-6">
<iconify-icon className="text-xl" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Oxidised Jewelry</h3>
<p className="text-sm text-slate-500 leading-relaxed">एथनिक और ट्रेडिशनल लुक के लिए बेहतरीन डिजाइन्स। Perfect for weddings and cultural events.</p>
</div>

<div className="group relative p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#d4af37]/30">
<div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center text-[#d4af37] mb-6">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Anti-tarnish Jewelry</h3>
<p className="text-sm text-slate-500 leading-relaxed">लंबे समय तक चमकने वाली और वाटरप्रूफ ज्वेलरी। Durable elegance for daily wear.</p>
</div>
</div>
</section>

<section className="px-6 py-16 bg-white border-y border-slate-100">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#0d3b7a] text-xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900">Payment Details</h3>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">UPI ID / Number</span>
<div className="flex items-center justify-between">
<span className="text-lg font-mono text-slate-700">7378118254</span>
<button className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-500 hover:text-[#0d3b7a]">Copy</button>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#0d3b7a] text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900">Store Location</h3>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Visit Us</span>
<p className="text-sm text-slate-700">RCity Mall, Ghatkopar,<br/>Mumbai, Maharashtra</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-16">
<div className="max-w-3xl mx-auto">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-amber-500 text-xl" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-slate-900 tracking-tight">Return Policy</h3>
</div>
<div className="space-y-4">
<div className="flex gap-4 items-start p-4 rounded-lg bg-slate-50 border border-slate-100">
<div className="mt-1 min-w-[20px] text-slate-400">
<iconify-icon icon="solar:videocamera-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-600">यदि प्रोडक्ट डैमेज मिलता है, तो <span className="font-semibold text-slate-900">24 घंटे के भीतर</span> अनबॉक्सिंग वीडियो भेजें।</p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg bg-slate-50 border border-slate-100">
<div className="mt-1 min-w-[20px] text-slate-400">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-600">रिटर्न केवल मैन्युफैक्चरिंग डिफेक्ट होने पर ही स्वीकार किया जाएगा।</p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg bg-slate-50 border border-slate-100">
<div className="mt-1 min-w-[20px] text-slate-400">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-slate-600">रिफंड प्रोसेस होने में 5-7 कार्य दिवस लगेंगे।</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#0d3b7a] text-white py-12 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<img alt="Footer Logo" className="h-10 w-10 rounded-full border border-white/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex flex-col">
<span className="font-medium tracking-tight">Jaipur Jewelry</span>
<span className="text-xs text-blue-200 italic">Make A Different Look</span>
</div>
</div>
<div className="text-xs text-blue-200">
                © 2024 Jaipur Jewelry. All Rights Reserved.
            </div>
</div>
</footer>

    </>
  );
}
