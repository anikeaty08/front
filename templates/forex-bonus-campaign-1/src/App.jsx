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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
orange: {
50: '#fff7ed',
100: '#ffedd5',
200: '#fed7aa',
300: '#fdba74',
400: '#fb923c',
500: '#f97316',
600: '#ea580c',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<header className="absolute top-0 left-0 right-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900">
<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="trending-up" strokeWidth="2"></i>
</div>
                Wisuno
            </div>
<a className="hidden md:inline-flex text-base font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">
                Campaign Rules
            </a>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(255,237,213,0.5),transparent_70%)] -z-10"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>
<div className="max-w-4xl mx-auto px-6 relative text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Super Boost Campaign
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 mb-6 leading-[1.1]">
                Boost Your Trades with 100% Bonus.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Trade More - Earn More. Double your trading power on MT5 Standard Accounts instantly. Campaign runs 1 March - 31 March 2025.
            </p>
<a className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-sm shadow-orange-500/20 text-lg" href="#">
                Claim Your Bonus <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>

<div className="mt-20 relative mx-auto w-full max-w-3xl aspect-[2/1] bg-gradient-to-br from-white to-neutral-50 rounded-[2rem] border border-neutral-200 shadow-xl shadow-neutral-200/50 flex items-center justify-center overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_60%)]"></div>
<div className="flex items-center gap-6 text-neutral-900 relative z-10 transition-transform duration-700 group-hover:scale-105">
<div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center text-neutral-400 rotate-[-10deg]">
<i className="w-12 h-12" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<span className="text-7xl md:text-8xl font-semibold tracking-tight text-orange-500">+100%</span>
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center text-neutral-400 rotate-[10deg]">
<i className="w-10 h-10" data-lucide="coins" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-6xl mx-auto px-6 py-12 border-y border-neutral-100">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-100">
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-1">100%</div>
<div className="text-base text-neutral-500 font-medium">Deposit Bonus</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-1">$200</div>
<div className="text-base text-neutral-500 font-medium">Max Bonus</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-1">$50</div>
<div className="text-base text-neutral-500 font-medium">Min. Deposit</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-1">30 Days</div>
<div className="text-base text-neutral-500 font-medium">Duration</div>
</div>
</div>
</div>

<section className="py-24 md:py-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">How to claim your boost</h2>
<p className="text-lg text-neutral-500 max-w-2xl mx-auto">Four easy steps stand between you and double trading power. No paperwork. No waiting. Just results.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 relative aspect-square bg-neutral-50 rounded-[2.5rem] border border-neutral-100 flex items-center justify-center p-12">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.05),transparent_50%)] rounded-[2.5rem]"></div>
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute w-48 h-96 bg-white rounded-3xl border border-neutral-200 shadow-xl shadow-neutral-200/50 rotate-[-12deg] -translate-x-12 flex flex-col overflow-hidden">
<div className="h-12 border-b border-neutral-100 flex items-center px-4 bg-orange-500 text-white"><i className="w-4 h-4" data-lucide="menu"></i></div>
<div className="flex-1 bg-neutral-50 p-4"><div className="w-full h-full rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-400"><i className="w-8 h-8" data-lucide="bar-chart"></i></div></div>
</div>
<div className="absolute w-48 h-96 bg-white rounded-3xl border border-neutral-200 shadow-2xl shadow-neutral-200/80 rotate-[8deg] translate-x-12 translate-y-8 flex flex-col overflow-hidden z-10">
<div className="h-12 border-b border-neutral-100 flex items-center px-4 bg-neutral-900 text-white"><i className="w-4 h-4" data-lucide="trending-up"></i></div>
<div className="flex-1 p-4 bg-white relative">
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-50 to-transparent"></div>
<i className="w-full h-32 text-green-500 absolute bottom-4 left-0" data-lucide="activity" strokeWidth="1"></i>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="absolute left-[15px] top-4 bottom-4 w-px bg-neutral-200"></div>
<div className="space-y-12 relative">

<div className="relative pl-12 group">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center group-hover:border-orange-500 transition-colors z-10">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="text-sm font-semibold tracking-wide text-orange-500 mb-2 uppercase">Step 01</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Create &amp; Verify Your Account</h3>
<p className="text-lg text-neutral-500 leading-relaxed mb-4">Register on the Wisuno platform and complete your KYC verification. Takes less than 10 minutes.</p>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-100 text-neutral-600 text-sm font-medium">
<i className="w-4 h-4" data-lucide="user-check" strokeWidth="1.5"></i> KYC Required
                            </span>
</div>

<div className="relative pl-12 group">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center group-hover:border-orange-500 transition-colors z-10">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="text-sm font-semibold tracking-wide text-orange-500 mb-2 uppercase">Step 02</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Make a Qualifying Deposit</h3>
<p className="text-lg text-neutral-500 leading-relaxed mb-4">Deposit a minimum of $50 via MTN, M-Pesa, Tigo Pesa, Airtel Money, Mix by Yas, Crypto, or Direct Bank Transfer.</p>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-100 text-neutral-600 text-sm font-medium">
<i className="w-4 h-4" data-lucide="arrow-down-circle" strokeWidth="1.5"></i> Min. $50 Deposit
                            </span>
</div>

<div className="relative pl-12 group">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center group-hover:border-orange-500 transition-colors z-10">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="text-sm font-semibold tracking-wide text-orange-500 mb-2 uppercase">Step 03</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Receive Your 100% Bonus</h3>
<p className="text-lg text-neutral-500 leading-relaxed mb-4">Your matching bonus up to $200 is credited automatically within 24 hours of deposit confirmation.</p>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-100 text-neutral-600 text-sm font-medium">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i> Auto-Credited in 24H
                            </span>
</div>

<div className="relative pl-12 group">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center group-hover:border-orange-500 transition-colors z-10">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="text-sm font-semibold tracking-wide text-orange-500 mb-2 uppercase">Step 04</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Trade &amp; Unlock Profits</h3>
<p className="text-lg text-neutral-500 leading-relaxed mb-4">Use your boosted balance on your MT5 Standard Account. Hit your volume targets to unlock full withdrawal.</p>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-100 text-neutral-600 text-sm font-medium">
<i className="w-4 h-4" data-lucide="monitor" strokeWidth="1.5"></i> MT5 Standard Only
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-neutral-50 border-neutral-100 pt-24 pb-24">
<div className="max-w-5xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Check your balance after the bonus</h2>
<p className="text-lg text-neutral-500">Deposit $50 or more and receive a 100% matching bonus up to $200 maximum.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">

<div className="lg:p-10 flex flex-col hover:shadow-md transition-shadow bg-white border-neutral-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-sm justify-between">
<div className="flex justify-between items-start mb-16">
<div className="">
<div className="text-base text-neutral-500 font-medium mb-1">Your Deposit</div>
<h3 className="text-3xl font-semibold text-neutral-900 tracking-tight">Deposit $50</h3>
</div>
<div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 font-semibold tracking-tight shrink-0">
                            +$100
                        </div>
</div>
<div className="">
<div className="text-base text-neutral-500 font-medium mb-2">Total Trading Balance</div>
<p className="text-5xl font-semibold text-neutral-900 tracking-tight mb-4">$100</p>
<p className="text-base text-neutral-500">You start trading with $200. The <span className="text-orange-500 font-medium">extra 100%</span> is added the moment your deposit clears.</p>
</div>
</div>

<div className="bg-white rounded-3xl p-8 lg:p-10 border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-16 relative z-10">
<div className="">
<div className="text-base text-neutral-500 font-medium mb-1">Your Deposit</div>
<h3 className="text-3xl font-semibold text-neutral-900 tracking-tight">Deposit $100</h3>
</div>
<div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 font-semibold tracking-tight shrink-0">
                            +$200
                        </div>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<div className="text-base text-neutral-500 font-medium">Total Trading Balance</div>
<span className="text-xs font-semibold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">MAX BONUS</span>
</div>
<p className="text-5xl font-semibold text-neutral-900 tracking-tight mb-4">$200</p>
<p className="text-base text-neutral-500">You start trading with $400. Your balance increases instantly with the <span className="text-orange-500 font-medium">100% boost</span>.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-neutral-900 mb-16">Who can claim this Bonus?</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-4">
<div className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-100 transition-colors">
<i className="w-5 h-5" data-lucide="user-plus" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-neutral-900">New Traders</h4>
<p className="text-base text-neutral-500">Supercharge your first deposit and start strong.</p>
</div>
</div>
<div className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-100 transition-colors">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-neutral-900">Existing Clients</h4>
<p className="text-base text-neutral-500">Make a new qualifying deposit during the campaign.</p>
</div>
</div>
<div className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-100 transition-colors">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-neutral-900">KYC Verified Accounts</h4>
<p className="text-base text-neutral-500">Account must be fully verified via app or website.</p>
</div>
</div>
<div className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-100 transition-colors">
<i className="w-5 h-5" data-lucide="monitor" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-neutral-900">MT5 Standard Only</h4>
<p className="text-base text-neutral-500">Exclusively for MetaTrader 5 Standard accounts.</p>
</div>
</div>
</div>

<div className="aspect-[4/3] lg:aspect-square bg-gradient-to-br from-orange-50 to-white rounded-[2.5rem] border border-orange-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c05_1px,transparent_1px),linear-gradient(to_bottom,#ea580c05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<i className="w-48 h-48 text-orange-200 relative z-10" data-lucide="badge-check" strokeWidth="1"></i>
</div>
</div>
</div>
</section>

<section className="py-16 bg-neutral-50 border-y border-neutral-100">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">Accepted Payment Methods</h3>
<p className="text-lg text-neutral-500 mb-8">Wisuno supports 7 convenient payment methods - use whichever works best in your country.</p>
<div className="flex flex-wrap gap-2.5">
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-base text-neutral-700 font-medium shadow-sm">MTN Mobile Money</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-base text-neutral-700 font-medium shadow-sm">M-Pesa</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-base text-neutral-700 font-medium shadow-sm">Tigo Pesa</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-base text-neutral-700 font-medium shadow-sm">Airtel Money</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-base text-neutral-700 font-medium shadow-sm">Mix by Yas</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-base text-neutral-700 font-medium shadow-sm">Cryptocurrency</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-base text-neutral-700 font-medium shadow-sm">Direct Bank Transfer</span>
</div>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">Available Across Africa</h3>
<p className="text-lg text-neutral-500 mb-6">Wisuno operates with physical offices and local payment support across the continent. We're not just online - we're on the ground.</p>
<p className="text-lg text-neutral-600 leading-relaxed font-medium">
                    Tanzania <span className="text-neutral-300 mx-1">•</span> Kenya <span className="text-neutral-300 mx-1">•</span> Uganda <span className="text-neutral-300 mx-1">•</span> Rwanda <span className="text-neutral-300 mx-1">•</span> Zambia <span className="text-neutral-300 mx-1">•</span> Malawi <span className="text-neutral-300 mx-1">•</span> Ghana <span className="text-neutral-300 mx-1">•</span> Nigeria <span className="text-neutral-300 mx-1">•</span> South Africa <span className="text-neutral-300 mx-1">•</span> Ivory Coast <span className="text-neutral-300 mx-1">•</span> Cameroon <span className="text-neutral-300 mx-1">•</span> Egypt <span className="text-neutral-300 mx-1">•</span> Senegal <span className="text-neutral-300 mx-1">•</span> Zimbabwe <span className="text-neutral-400 font-normal italic ml-1">and more...</span>
</p>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl font-semibold tracking-tight text-center text-neutral-900 mb-16">Frequently asked questions.</h2>
<div className="space-y-4">
<details className="group bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-neutral-900 hover:text-orange-500 transition-colors select-none">
                        How much bonus can I receive?
                        <i className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-500 pt-2">
                        You receive a 100% matching bonus on your deposit, up to a maximum of $200. Minimum qualifying deposit is $50. Example: deposit $100, get $100 bonus, trade with $200 total.
                    </div>
</details>
<details className="group bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-neutral-900 hover:text-orange-500 transition-colors select-none">
                        Which account type does this bonus apply to?
                        <i className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-500 pt-2">
                        The Super Boost Campaign is exclusively for MT5 Standard accounts. MT4, ECN, Pro, and all other account types are not eligible.
                    </div>
</details>
<details className="group bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-neutral-900 hover:text-orange-500 transition-colors select-none">
                        Which payment methods qualify?
                        <i className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-500 pt-2">
                        All 7 methods qualify: MTN Mobile Money, M-Pesa, Tigo Pesa, Airtel Money, Mix by Yas, Cryptocurrency (BTC, ETH, USDT), and Direct Bank Transfer. Internal transfers or re-deposits do not qualify.
                    </div>
</details>
<details className="group bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-neutral-900 hover:text-orange-500 transition-colors select-none">
                        When does the campaign start and end?
                        <i className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-500 pt-2">
                        The campaign runs for exactly 30 days - 1 March 2025 to 31 March 2025. Only qualifying deposits made within this window are eligible. Closes at 23:59 EAT on 31 March 2025.
                    </div>
</details>
<details className="group bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-neutral-900 hover:text-orange-500 transition-colors select-none">
                        Can I withdraw the bonus immediately?
                        <i className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-500 pt-2">
                        The bonus cannot be withdrawn directly. To unlock it, achieve a trading volume of 20 standard lots per $10 of bonus received. Once met, the bonus and associated profits become fully withdrawable.
                    </div>
</details>
<details className="group bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-neutral-900 hover:text-orange-500 transition-colors select-none">
                        What if I withdraw before meeting the volume requirement?
                        <i className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-500 pt-2">
                        The bonus and any profits attributed to it will be forfeited. Your original deposit can always be withdrawn at any time. You have 90 days from the date the bonus is credited to meet the volume requirement.
                    </div>
</details>
<details className="group bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-neutral-900 hover:text-orange-500 transition-colors select-none">
                        Can I visit a Wisuno office for help?
                        <i className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="px-6 pb-6 text-lg text-neutral-500 pt-2">
                        Yes! Wisuno has physical offices in Dar es Salaam, Tanzania, and across multiple African markets. You can walk in and speak to a real team member about your account or bonus.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-12 px-6 pb-24">
<div className="max-w-5xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_50%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 relative z-10">Start Trading with Extra Power</h2>
<p className="text-lg text-neutral-300 mb-10 max-w-xl mx-auto relative z-10">Make your deposit and claim your 100% bonus up to $200. Instantly available for trading.</p>
<a className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-full font-medium transition-colors relative z-10 text-lg shadow-lg shadow-orange-500/20" href="#">
                Claim My 100% Bonus <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<footer className="border-t border-neutral-200 bg-neutral-50 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="trending-up" strokeWidth="2"></i>
</div>
                    Wisuno
                </div>
<div className="text-base text-neutral-500 font-medium">www.wisuno.com</div>
</div>
<div className="space-y-4 text-xs text-neutral-400 leading-relaxed max-w-5xl">
<p><strong>Risk Warning:</strong> Trading involves significant risk. Please ensure you understand the risks before trading. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>
<p><strong>Campaign Terms:</strong> The Super Boost Campaign is valid from 1 March 2025 to 31 March 2025 (23:59 EAT). Applicable to MT5 Standard accounts only. Minimum qualifying deposit is $50. Maximum bonus amount is $200 per client. The bonus is for trading margin purposes and cannot be withdrawn until volume requirements (20 standard lots per $10 bonus) are met within 90 days. Full T&amp;Cs apply.</p>
</div>
<div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
<div>© 2025 Wisuno. All rights reserved.</div>
<div className="flex gap-4">
<a className="hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
