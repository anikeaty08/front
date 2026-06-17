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
      
<main className="w-full max-w-7xl mx-auto px-6 lg:px-8">

<div className="text-center mb-16 lg:mb-24">
<h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                Everything You Need to <span className="text-teal-400">Get Started</span>
</h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

<div className="flex flex-col gap-5">
<div className="mb-4">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Package Inclusions</h2>
<p className="text-lg text-slate-400">Everything included in your plan.</p>
</div>

<div className="group flex items-start gap-5 p-5 bg-[#131B2E] border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex-shrink-0 w-12 h-12 bg-[#0F2229] rounded-lg flex items-center justify-center text-teal-400 border border-teal-900/30">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<span className="text-teal-500"><i className="w-4 h-4 stroke-[3]" data-lucide="check"></i></span>
                            Scalable Licensing
                        </h3>
<p className="text-base text-slate-500">20, 50, or 200 User Seats</p>
</div>
</div>

<div className="group flex items-start gap-5 p-5 bg-[#131B2E] border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex-shrink-0 w-12 h-12 bg-[#0F2229] rounded-lg flex items-center justify-center text-teal-400 border border-teal-900/30">
<i className="w-6 h-6" data-lucide="server"></i>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<span className="text-teal-500"><i className="w-4 h-4 stroke-[3]" data-lucide="check"></i></span>
                            Hosting
                        </h3>
<p className="text-base text-slate-500">Private Dedicated or Shared Private Server</p>
</div>
</div>

<div className="group flex items-start gap-5 p-5 bg-[#131B2E] border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex-shrink-0 w-12 h-12 bg-[#0F2229] rounded-lg flex items-center justify-center text-teal-400 border border-teal-900/30">
<i className="w-6 h-6" data-lucide="palette"></i>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<span className="text-teal-500"><i className="w-4 h-4 stroke-[3]" data-lucide="check"></i></span>
                            Adtini Branding
                        </h3>
<p className="text-base text-slate-500">Custom white-labeling to match your Adtini interface</p>
</div>
</div>

<div className="group flex items-start gap-5 p-5 bg-[#131B2E] border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex-shrink-0 w-12 h-12 bg-[#0F2229] rounded-lg flex items-center justify-center text-teal-400 border border-teal-900/30">
<i className="w-6 h-6" data-lucide="headset"></i>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<span className="text-teal-500"><i className="w-4 h-4 stroke-[3]" data-lucide="check"></i></span>
                            Support
                        </h3>
<p className="text-base text-slate-500">24/7 Dedicated Team (Enterprise) or Priority Email</p>
</div>
</div>

<div className="group flex items-start gap-5 p-5 bg-[#131B2E] border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex-shrink-0 w-12 h-12 bg-[#0F2229] rounded-lg flex items-center justify-center text-teal-400 border border-teal-900/30">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<span className="text-teal-500"><i className="w-4 h-4 stroke-[3]" data-lucide="check"></i></span>
                            Security
                        </h3>
<p className="text-base text-slate-500">Zero-Leak Architecture</p>
</div>
</div>

<div className="group flex items-start gap-5 p-5 bg-[#131B2E] border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex-shrink-0 w-12 h-12 bg-[#0F2229] rounded-lg flex items-center justify-center text-teal-400 border border-teal-900/30">
<i className="w-6 h-6" data-lucide="rocket"></i>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<span className="text-teal-500"><i className="w-4 h-4 stroke-[3]" data-lucide="check"></i></span>
                            One-Time Setup
                        </h3>
<p className="text-base text-slate-500">$1,000 — Includes full onboarding &amp; demo walkthrough</p>
</div>
</div>
</div>

<div className="flex flex-col relative">

<div className="flex justify-center mb-2">
<span className="bg-teal-400 text-[#0B1121] px-5 py-1.5 rounded-full text-base font-semibold">Pricing</span>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight text-center mb-8">Choose Your Plan</h2>
<div className="flex flex-col gap-6">

<div className="bg-[#131B2E] border border-white/5 rounded-xl p-6 lg:p-7 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-white/10 transition-all">
<div>
<h3 className="text-xl font-semibold text-white">Standard Plan</h3>
<p className="text-base text-slate-500 mt-1">Up to 50 users</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold text-teal-400 tracking-tight">$1,000</span>
<span className="text-base text-slate-500">/month</span>
</div>
</div>

<div className="relative bg-[#131B2E] border border-teal-500/50 rounded-xl p-6 lg:p-7 flex flex-col sm:flex-row justify-between sm:items-center gap-4 shadow-[0_0_40px_-15px_rgba(45,212,191,0.15)]">

<div className="absolute -top-3.5 left-6">
<span className="bg-fuchsia-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Popular</span>
</div>
<div>
<h3 className="text-xl font-semibold text-white">Professional Plan</h3>
<p className="text-base text-slate-500 mt-1">51 to 200 users</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold text-teal-400 tracking-tight">$2,250</span>
<span className="text-base text-slate-500">/month</span>
</div>
</div>

<div className="bg-[#131B2E] border border-white/5 rounded-xl p-6 lg:p-7 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-white/10 transition-all">
<div>
<h3 className="text-xl font-semibold text-white">Enterprise Plan</h3>
<p className="text-base text-slate-500 mt-1">201 to 500+ users</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold text-teal-400 tracking-tight">$8,000</span>
<span className="text-base text-slate-500">/month</span>
</div>
</div>
</div>

<div className="mt-8 text-center flex items-center justify-center gap-2.5">
<span className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
<p className="text-base font-medium text-teal-500/90 tracking-tight">Final Pricing: Coming Monday!</p>
</div>
</div>
</div>
</main>


    </>
  );
}
