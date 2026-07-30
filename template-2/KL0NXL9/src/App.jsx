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
    document.getElementById('billingToggle').addEventListener('change', function() {
      const starter = document.getElementById('starterPrice');
      const pro = document.getElementById('proPrice');
      if(this.checked) {
        starter.textContent = '$0';
        pro.textContent = '$290';
      } else {
        starter.textContent = '$0';
        pro.textContent = '$29';
      }
    });
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        document.querySelectorAll('.animate-fade-in').forEach(el => el.style.opacity = '1');
      }, 250);
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
      
<section className="max-w-7xl mx-auto pt-16 pb-12" id="pricing">
<div className="text-center mb-12">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight font-satoshi mb-4">Simple, transparent pricing</h2>
<p className="text-base text-gray-400 max-w-xl mx-auto">Start free, scale as you grow. No contracts, no surprises. <span className="text-indigo-400 font-medium">Cancel anytime.</span></p>
</div>

<div className="flex justify-center items-center gap-4 mb-10">
<span className="text-gray-400 text-sm">Monthly</span>
<label className="plan-toggle relative inline-flex items-center cursor-pointer">
<input aria-label="Toggle billing period" className="sr-only peer" id="billingToggle" type="checkbox" />
<div className="slider w-12 h-6 bg-gray-800 rounded-full flex items-center px-1">
<div className="dot w-5 h-5 bg-indigo-400 rounded-full transition-transform"></div>
</div>
</label>
<span className="text-gray-400 text-sm flex items-center">
        Yearly
        <span className="ml-2 px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 text-xs font-medium">2 months free</span>
</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

<div aria-label="Starter plan" className="group hover-lift hover-glow card-focus animate-fade-in border border-gray-700/60 rounded-2xl bg-gradient-to-br from-gray-900/60 via-gray-900/80 to-gray-950/90 backdrop-blur-md px-7 py-8 flex flex-col transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-600 outline-none relative" tabindex="0">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-white" data-lucide="feather"></i>
</div>
<div>
<h3 className="font-semibold text-white tracking-tight font-satoshi group-hover:text-indigo-400 transition-colors duration-300">Starter</h3>
<p className="text-xs text-gray-400 font-medium">For individuals & small projects</p>
</div>
</div>
<div className="flex items-end mb-6">
<span className="text-3xl font-semibold font-satoshi" id="starterPrice">$0</span>
<span className="text-gray-500 text-base mb-1 ml-1">/mo</span>
</div>
<ul className="mb-8 space-y-3 text-sm">
<li className="flex items-center gap-2">
<span className="feature-check w-4 h-4 rounded-full flex items-center justify-center"><svg className="text-white" data-lucide="check" height="14" width="14"></svg></span>
            3 integrations
          </li>
<li className="flex items-center gap-2">
<span className="feature-check w-4 h-4 rounded-full flex items-center justify-center"><svg className="text-white" data-lucide="check" height="14" width="14"></svg></span>
            500 runs/mo
          </li>
<li className="flex items-center gap-2">
<span className="feature-check w-4 h-4 rounded-full flex items-center justify-center"><svg className="text-white" data-lucide="users" height="14" width="14"></svg></span>
            Community support
          </li>
</ul>
<button className="plan-btn mt-auto bg-indigo-700/20 hover:bg-indigo-600/40 border border-indigo-500/40 hover:border-indigo-400/80 text-indigo-300 text-sm font-semibold rounded-lg transition-all duration-300 px-4 py-2.5 flex items-center justify-center gap-2 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500">
<i className="w-4 h-4" data-lucide="play-circle"></i> Get Started
        </button>
</div>

<div aria-label="Pro plan" className="group hover-lift hover-glow card-focus animate-fade-in border-2 border-indigo-500 shadow-xl rounded-2xl bg-gradient-to-br from-indigo-700/30 via-indigo-900/60 to-gray-950/90 px-7 py-8 flex flex-col scale-105 z-10 focus-within:ring-2 focus-within:ring-indigo-600 outline-none relative" tabindex="0">
<span className="absolute top-7 right-7 px-2 py-0.5 bg-indigo-800/60 text-indigo-200 text-xs rounded font-medium">Most Popular</span>
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-white" data-lucide="zap"></i>
</div>
<div>
<h3 className="font-semibold text-white tracking-tight font-satoshi group-hover:text-brand-400 transition-colors duration-300">Pro</h3>
<p className="text-xs text-gray-300 font-medium">Advanced automations for teams</p>
</div>
</div>
<div className="flex items-end mb-6">
<span className="text-3xl font-semibold font-satoshi" id="proPrice">$29</span>
<span className="text-gray-400 text-base mb-1 ml-1">/mo</span>
</div>
<ul className="mb-8 space-y-3 text-sm">
<li className="flex items-center gap-2">
<span className="feature-check w-4 h-4 rounded-full flex items-center justify-center"><svg className="text-white" data-lucide="check" height="14" width="14"></svg></span>
            15 integrations
          </li>
<li className="flex items-center gap-2">
<span className="feature-check w-4 h-4 rounded-full flex items-center justify-center"><svg className="text-white" data-lucide="check" height="14" width="14"></svg></span>
            30,000 runs/mo
          </li>
<li className="flex items-center gap-2">
<span className="feature-check w-4 h-4 rounded-full flex items-center justify-center"><svg className="text-white" data-lucide="brain-cog" height="14" width="14"></svg></span>
            AI workflow builder
          </li>
<li className="flex items-center gap-2">
<span className="feature-check w-4 h-4 rounded-full flex items-center justify-center"><svg className="text-white" data-lucide="headphones" height="14" width="14"></svg></span>
            Priority support
          </li>
</ul>
<button className="plan-btn mt-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 border-none text-white text-sm font-semibold rounded-lg shadow-lg transition-all duration-300 px-4 py-2.5 flex items-center justify-center gap-2 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500">
<i className="w-4 h-4" data-lucide="rocket"></i> Start Free Trial
        </button>
</div>

<div aria-label="Enterprise plan" className="group hover-lift hover-glow card-focus animate-fade-in border border-gray-700/60 rounded-2xl bg-gradient-to-br from-gray-900/60 via-gray-900/80 to-gray-950/90 px-7 py-8 flex flex-col transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-600 outline-none relative" tabindex="0">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-white" data-lucide="shield"></i>
</div>
<div>
<h3 className="font-semibold text-white tracking-tight font-satoshi group-hover:text-green-400 transition-colors duration-300">Enterprise</h3>
<p className="text-xs text-gray-400 font-medium">Full control & premium support</p>
</div>
</div>
<div className="flex items-end mb-6">
<span className="text-3xl font-semibold font-satoshi" id="enterprisePrice">Contact</span>
</div>
<ul className="mb-8 space-y-3 text-sm">
<li className="flex items-center gap-2">
<span className="feature-check w-4 h-4 rounded-full flex items-center justify-center"><svg className="text-white" data-lucide="check" height="14" width="14"></svg></span>
            Unlimited integrations
          </li>
<li className="flex items-center gap-2">
<span className="feature-check w-4 h-4 rounded-full flex items-center justify-center"><svg className="text-white" data-lucide="lock" height="14" width="14"></svg></span>
            SSO & advanced security
          </li>
<li className="flex items-center gap-2">
<span className="feature-check w-4 h-4 rounded-full flex items-center justify-center"><svg className="text-white" data-lucide="clock" height="14" width="14"></svg></span>
            99.99% uptime SLA
          </li>
<li className="flex items-center gap-2">
<span className="feature-check w-4 h-4 rounded-full flex items-center justify-center"><svg className="text-white" data-lucide="user-check" height="14" width="14"></svg></span>
            Dedicated CSM
          </li>
</ul>
<button className="plan-btn mt-auto bg-gradient-to-r from-green-600/70 to-indigo-600/80 hover:from-green-700 hover:to-indigo-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 px-4 py-2.5 flex items-center justify-center gap-2 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600">
<i className="w-4 h-4" data-lucide="mail"></i> Contact Sales
        </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto pb-20">
<div className="flex items-center justify-center mb-8">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight font-satoshi">Compare plans</h3>
</div>
<div className="overflow-x-auto compare-scroll rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-950/90 via-gray-900/80 to-gray-950/90 shadow-sm">
<table className="min-w-[700px] w-full text-sm text-left">
<thead>
<tr>
<th className="bg-transparent border-b border-gray-800 py-3 px-4"></th>
<th className="bg-transparent border-b border-gray-800 py-3 px-4 font-semibold tracking-tight text-white">Starter</th>
<th className="bg-transparent border-b border-gray-800 py-3 px-4 font-semibold tracking-tight text-white">Pro</th>
<th className="bg-transparent border-b border-gray-800 py-3 px-4 font-semibold tracking-tight text-white">Enterprise</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-gray-800">
<td className="py-4 px-4 text-gray-200">Integrations</td>
<td className="py-4 px-4">3</td>
<td className="py-4 px-4">15</td>
<td className="py-4 px-4">Unlimited</td>
</tr>
<tr className="border-b border-gray-800">
<td className="py-4 px-4 text-gray-200">Runs per month</td>
<td className="py-4 px-4">500</td>
<td className="py-4 px-4">30,000</td>
<td className="py-4 px-4">Custom</td>
</tr>
<tr className="border-b border-gray-800">
<td className="py-4 px-4 text-gray-200">AI workflow builder</td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-gray-500"><svg className="w-4 h-4" data-lucide="x"></svg></span></td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-indigo-400"><svg className="w-4 h-4" data-lucide="check"></svg></span></td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-green-400"><svg className="w-4 h-4" data-lucide="check"></svg></span></td>
</tr>
<tr className="border-b border-gray-800">
<td className="py-4 px-4 text-gray-200">Custom roles & permissions</td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-gray-500"><svg className="w-4 h-4" data-lucide="x"></svg></span></td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-gray-500"><svg className="w-4 h-4" data-lucide="x"></svg></span></td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-green-400"><svg className="w-4 h-4" data-lucide="check"></svg></span></td>
</tr>
<tr className="border-b border-gray-800">
<td className="py-4 px-4 text-gray-200">SSO & advanced security</td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-gray-500"><svg className="w-4 h-4" data-lucide="x"></svg></span></td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-gray-500"><svg className="w-4 h-4" data-lucide="x"></svg></span></td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-green-400"><svg className="w-4 h-4" data-lucide="shield"></svg></span></td>
</tr>
<tr className="border-b border-gray-800">
<td className="py-4 px-4 text-gray-200">Support</td>
<td className="py-4 px-4">Community</td>
<td className="py-4 px-4">Priority</td>
<td className="py-4 px-4">Dedicated CSM</td>
</tr>
<tr className="border-b border-gray-800">
<td className="py-4 px-4 text-gray-200">Uptime SLA</td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-gray-500"><svg className="w-4 h-4" data-lucide="x"></svg></span></td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-gray-500"><svg className="w-4 h-4" data-lucide="x"></svg></span></td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-green-400"><svg className="w-4 h-4" data-lucide="check-circle"></svg><span>99.99%</span></span></td>
</tr>
<tr>
<td className="py-4 px-4 text-gray-200">API access</td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-gray-500"><svg className="w-4 h-4" data-lucide="x"></svg></span></td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-indigo-400"><svg className="w-4 h-4" data-lucide="check"></svg></span></td>
<td className="py-4 px-4"><span className="inline-flex items-center gap-1 text-green-400"><svg className="w-4 h-4" data-lucide="check"></svg></span></td>
</tr>
</tbody>
</table>
</div>
<div className="text-right mt-2 text-xs text-gray-500">
<span>* Contact sales for volume and enterprise pricing details.</span>
</div>
</section>


    </>
  );
}
