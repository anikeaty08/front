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



        function copyAndGo() {
            // Target URL
            const url = "https://wlmichiganlottery.adsrv.eacdn.com/C.ashx?btag=a_251b_291c_&affid=137&siteid=251&adid=291&c=";
            
            // Copy logic
            const copyText = document.getElementById("promoInput");
            copyText.select();
            copyText.setSelectionRange(0, 99999); 
            navigator.clipboard.writeText(copyText.value);
            
            // Open Link
            window.open(url, '_blank');

            // Visual Feedback
            const btn = document.getElementById("copyBtn");
            const btnText = document.getElementById("btnText");
            const btnIcon = document.getElementById("btnIcon");
            
            btnText.innerText = "Copied & Opening...";
            btnIcon.setAttribute("icon", "solar:check-circle-linear");
            btn.classList.remove("bg-emerald-600", "hover:bg-emerald-700");
            btn.classList.add("bg-slate-800", "hover:bg-slate-900");

            setTimeout(() => {
                btnText.innerText = "Copy & Claim";
                btnIcon.setAttribute("icon", "solar:copy-linear");
                btn.classList.add("bg-emerald-600", "hover:bg-emerald-700");
                btn.classList.remove("bg-slate-800", "hover:bg-slate-900");
            }, 3000);
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]"></div>
<div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-indigo-50/50 rounded-full blur-[80px]"></div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold text-sm tracking-tighter">MI</span>
</div>
<span className="font-semibold tracking-tight text-slate-800 group-hover:text-black transition-colors">LOTTERY<span className="text-slate-400 font-normal">PROMOS</span></span>
</a>
</div>
</nav>

<main className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600">New Offer Verified for 2026</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Michigan Lottery promo code 2026: <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Use PLAYMAX</span>
</h1>
<p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Use the official<a href="https://www.mundodeportivo.com/us/apuestas-latam/otros-paises/mejores-codigos-latam/michigan-lottery-promo-code/" rel="noopener" target="_blank">
        Michigan Lottery promo code</a> to claim free play credits and instant deposit matching. Start playing online today securely.
        </p>

<div className="max-w-md mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 flex items-center gap-2">
<div className="flex-1 relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon height="20" icon="solar:ticket-sale-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-100 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-mono tracking-wider text-base font-medium text-center" id="promoInput" readonly="" type="text" value="PLAYMAX"/>
</div>
<button className="flex-none px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium text-sm transition-all flex items-center gap-2 shadow-md shadow-emerald-200 active:scale-[0.98]" id="copyBtn" onclick="copyAndGo()">
<span id="btnText">Copy &amp; Claim</span>
<iconify-icon height="18" icon="solar:copy-linear" id="btnIcon" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<p className="mt-3 text-xs text-slate-400 flex items-center justify-center gap-1.5">
<iconify-icon className="text-emerald-500" height="14" icon="solar:verified-check-linear" width="14"></iconify-icon>
                Verified working as of today
            </p>
</div>

<div className="mt-8 flex justify-center">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center transition-all group-hover:border-emerald-400">
<svg className="w-3 h-3 text-white opacity-0 transform scale-50 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-xs text-slate-500 select-none group-hover:text-slate-700 transition-colors">I am 18+ and located in Michigan</span>
</label>
</div>
</main>

<section className="relative z-10 max-w-6xl mx-auto px-6 py-16 border-t border-slate-200/60">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:dollar-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">50% Match Bonus</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                    Get up to $100 in instant matching bonus credits when you make your first deposit securely online.
                </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:gamepad-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">20 Free Games</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                    Enjoy 20 free rounds of Queen of Diamonds instantly upon registration. No deposit required.
                </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Secure &amp; Official</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                    Play with confidence on the official state-regulated platform. Proceeds support Michigan schools.
                </p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">How to redeem</h2>
</div>
<div className="relative">

<div className="absolute left-4 top-4 bottom-4 w-px bg-slate-200 md:left-1/2 md:-ml-px"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-0">
<div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
<h4 className="text-base font-medium text-slate-900">Copy the Code</h4>
<p className="text-sm text-slate-500 mt-1">Click "Copy &amp; Claim" to grab the exclusive promo code.</p>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full border-4 border-slate-50 bg-emerald-500 flex items-center justify-center z-10 shadow-sm">
<iconify-icon className="text-white" height="14" icon="solar:copy-linear" width="14"></iconify-icon>
</div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-0 md:mt-12">
<div className="hidden md:block md:w-1/2"></div>
<div className="absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full border-4 border-slate-50 bg-white border-slate-300 flex items-center justify-center z-10">
<span className="text-xs font-semibold text-slate-500">2</span>
</div>
<div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
<h4 className="text-base font-medium text-slate-900">Create Account</h4>
<p className="text-sm text-slate-500 mt-1">The link will open the official registration page.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between md:mt-12">
<div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
<h4 className="text-base font-medium text-slate-900">Paste &amp; Play</h4>
<p className="text-sm text-slate-500 mt-1">Paste code in the "Promo Code" field during signup and enjoy.</p>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full border-4 border-slate-50 bg-white border-slate-300 flex items-center justify-center z-10">
<span className="text-xs font-semibold text-slate-500">3</span>
</div>
<div className="hidden md:block md:w-1/2"></div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-white text-xs">MI</div>
<span className="font-semibold text-slate-200 tracking-tight">LOTTERY</span>
</div>
<p className="text-xs max-w-sm leading-relaxed text-slate-500">
                        The Michigan Lottery provides fun and entertaining games while generating funds for public education. Since 1972, the Lottery has contributed more than $26 billion to the School Aid Fund.
                    </p>
</div>
<div className="flex gap-6 text-xs font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
<a className="hover:text-white transition-colors" href="#">Responsible Gaming</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2026 Michigan Lottery Promo. All rights reserved.</p>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:shield-warning-linear" width="16"></iconify-icon>
<span>If you or someone you know has a gambling problem, call 1-800-270-7117.</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
