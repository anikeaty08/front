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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs font-bold">U</div>
                UBILIZ
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-slate-900 transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-slate-900 transition-colors" href="#social">Customers</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-900 hover:text-slate-700" href="#">Log in</a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all active:scale-95 shadow-sm shadow-slate-300" href="#">
                    Book Demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-20 pb-24 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                New: Integrated Payment Gateways
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Sell Gift Vouchers &amp; Offers Online — <span className="text-slate-400">Effortlessly</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Ubiliz helps hotels, restaurants, and wellness businesses increase revenue by selling digital gift vouchers and offers online.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    Book a Free Demo
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5"></iconify-icon>
                    See How It Works
                </button>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden p-2 md:p-4">

<div className="flex items-center gap-2 mb-4 px-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="mx-auto w-1/3 h-6 bg-slate-50 rounded text-[10px] flex items-center justify-center text-slate-400">
                            app.ubiliz.com/dashboard
                        </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50/50 rounded-xl p-6 border border-slate-100">

<div className="hidden md:block col-span-2 space-y-4">
<div className="h-8 w-8 bg-indigo-600 rounded-lg mb-6"></div>
<div className="h-2 w-16 bg-slate-200 rounded"></div>
<div className="h-2 w-12 bg-slate-200 rounded"></div>
<div className="h-2 w-20 bg-slate-200 rounded"></div>
</div>

<div className="col-span-12 md:col-span-10">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Dashboard Overview</h3>
<p className="text-sm text-slate-500 mt-1">Track your voucher sales in real-time</p>
</div>
<div className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600">This Month</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Total Revenue</p>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">$12,450</p>
<div className="flex items-center gap-1 text-emerald-600 text-xs mt-2">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5"></iconify-icon>
<span>+14.2%</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Vouchers Sold</p>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">342</p>
<div className="flex items-center gap-1 text-emerald-600 text-xs mt-2">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5"></iconify-icon>
<span>+8.1%</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-2">Redeemed</p>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">128</p>
<div className="flex items-center gap-1 text-slate-400 text-xs mt-2">
<iconify-icon icon="lucide:minus" strokeWidth="1.5"></iconify-icon>
<span>Steady</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<div className="flex items-end justify-between h-32 gap-2">
<div className="w-full bg-indigo-50 rounded-t-sm h-[40%] relative group">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-800 text-white text-[10px] py-1 px-2 rounded">$400</div>
</div>
<div className="w-full bg-indigo-50 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-indigo-50 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-indigo-100 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-indigo-200 rounded-t-sm h-[85%]"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[65%] shadow-lg shadow-indigo-200"></div>
<div className="w-full bg-indigo-200 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-indigo-100 rounded-t-sm h-[75%]"></div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-200 w-64 hidden lg:block rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-start mb-4">
<div className="h-8 w-8 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs font-bold">H</div>
<span className="text-[10px] font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">#GIFT-8821</span>
</div>
<p className="text-sm font-semibold text-slate-900">Weekend Getaway Package</p>
<p className="text-xs text-slate-500 mb-4">Includes breakfast &amp; spa access</p>
<div className="flex justify-between items-center border-t border-slate-100 pt-3">
<span className="text-xs font-medium text-slate-400">Value</span>
<span className="text-sm font-bold text-slate-900">$250.00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20">

<div className="flex flex-col justify-center">
<div className="flex items-center gap-2 mb-6 text-rose-500 font-medium">
<iconify-icon icon="lucide:alert-circle" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm uppercase tracking-wider">The Challenge</span>
</div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Dependent on direct bookings and slow off-seasons.</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[24px] h-6 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
<iconify-icon icon="lucide:trending-down" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Low off-season revenue</h4>
<p className="text-sm text-slate-500 mt-1">Empty rooms and tables during weekdays and non-peak months.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[24px] h-6 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">No digital voucher system</h4>
<p className="text-sm text-slate-500 mt-1">Relying on paper vouchers or manual email exchanges is inefficient.</p>
</div>
</li>
</ul>
</div>

<div className="relative bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 mb-6 text-indigo-600 font-medium">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm uppercase tracking-wider">The Ubiliz Solution</span>
</div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Generate cash flow instantly with digital sales.</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[24px] h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Automated Digital Vouchers</h4>
<p className="text-sm text-slate-500 mt-1">Instant delivery to customers via email/SMS, branded for your business.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[24px] h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="lucide:credit-card" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Secure Online Payments</h4>
<p className="text-sm text-slate-500 mt-1">Accept payments 24/7 directly to your bank account with zero hassle.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 min-w-[24px] h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Centralized Dashboard</h4>
<p className="text-sm text-slate-500 mt-1">Manage redemptions, track expiry dates, and analyze sales performance.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">How it works</h2>
<p className="text-slate-500 mt-2">Get up and running in minutes, not days.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-slate-200 border-t border-dashed border-slate-300 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-600" icon="lucide:plus-circle" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600 mb-3">Step 01</span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Create your offer</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Set up gift cards, packages, or special deals with custom images and descriptions.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-600" icon="lucide:shopping-bag" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600 mb-3">Step 02</span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Sell online</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Integrate a simple widget on your website or share the link on social media.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-600" icon="lucide:bar-chart-3" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600 mb-3">Step 03</span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Track &amp; Grow</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Monitor sales, redeem vouchers via QR code scan, and watch revenue grow.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                        Designed to maximize revenue<br className="hidden lg:block"/> without the operational headache.
                    </h2>
<p className="text-lg text-slate-500 mb-8">
                        Stop treating vouchers as a manual side-task. Transform them into a scalable revenue channel that works while you sleep.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-slate-700 font-medium">No technical skills required</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-slate-700 font-medium">Instant setup &amp; deployment</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
<span className="text-slate-700 font-medium">Optimized for mobile conversions</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="p-6 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Sell 24/7</h4>
<p className="text-sm text-slate-500">Your reception might be closed, but your shop never is. Capture midnight impulse buys.</p>
</div>

<div className="p-6 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
<iconify-icon icon="lucide:coins" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Cash Flow Boost</h4>
<p className="text-sm text-slate-500">Receive payment upfront. Perfect for improving liquidity during low seasons.</p>
</div>

<div className="p-6 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<iconify-icon icon="lucide:gift" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Reduce Admin</h4>
<p className="text-sm text-slate-500">Automated generation, sending, and tracking. No more spreadsheets.</p>
</div>

<div className="p-6 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
<div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
<iconify-icon icon="lucide:store" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Industry Ready</h4>
<p className="text-sm text-slate-500">Tailored specifically for Hotels, Restaurants, and Spa/Wellness centers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Powerful insights at your fingertips</h2>
<p className="text-slate-400">Track performance, manage validity, and export reports.</p>
</div>
<div className="relative rounded-xl border border-slate-700 bg-slate-800/50 shadow-2xl p-1 md:p-2 backdrop-blur-sm">

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-lg bg-slate-900">

<div className="col-span-1 space-y-6">
<div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
<p className="text-xs text-slate-400 uppercase font-medium mb-1">Active Offers</p>
<div className="text-2xl font-semibold">12</div>
</div>
<div className="p-4 rounded-lg bg-slate-800 border border-slate-700">
<p className="text-xs text-slate-400 uppercase font-medium mb-1">Unclaimed Value</p>
<div className="text-2xl font-semibold">$3,450</div>
</div>
<div className="p-4 rounded-lg bg-indigo-600 border border-indigo-500">
<p className="text-xs text-indigo-100 uppercase font-medium mb-1">Conversion Rate</p>
<div className="text-2xl font-semibold text-white">4.8%</div>
</div>
</div>

<div className="col-span-1 md:col-span-3 bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
<div className="px-6 py-4 border-b border-slate-700 flex justify-between items-center">
<h4 className="font-medium text-sm">Recent Transactions</h4>
<iconify-icon className="text-slate-400" icon="lucide:more-horizontal"></iconify-icon>
</div>
<div className="divide-y divide-slate-700">

<div className="px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">JM</div>
<div>
<p className="text-sm font-medium text-white">John Miller</p>
<p className="text-xs text-slate-400">Purchased "Luxury Dinner for Two"</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">$150.00</p>
<p className="text-xs text-emerald-400">Paid</p>
</div>
</div>

<div className="px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">AS</div>
<div>
<p className="text-sm font-medium text-white">Alice Smith</p>
<p className="text-xs text-slate-400">Purchased "Spa Day Pass"</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">$85.00</p>
<p className="text-xs text-emerald-400">Paid</p>
</div>
</div>

<div className="px-6 py-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">DR</div>
<div>
<p className="text-sm font-medium text-white">David Ross</p>
<p className="text-xs text-slate-400">Purchased "Hotel Gift Card"</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">$500.00</p>
<p className="text-xs text-emerald-400">Paid</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="social">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-10">Trusted by businesses across hospitality &amp; wellness</p>

<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-20">
<span className="text-xl font-bold font-serif tracking-widest text-slate-800">LUXHOTEL</span>
<span className="text-xl font-semibold italic text-slate-800">TheBistro.</span>
<span className="text-xl font-bold tracking-tighter text-slate-800 uppercase border-2 border-slate-800 px-2">ZENSPA</span>
<span className="text-xl font-medium tracking-wide text-slate-800">MountainView</span>
<span className="text-xl font-extrabold text-slate-800 tracking-tight">EAT &amp; DRINK</span>
</div>

<div className="grid md:grid-cols-3 gap-6 text-left">
<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Ubiliz transformed our slow season. We sold over $15k in vouchers in just two months without lifting a finger."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-500">GM, Grand Hotel</p>
</div>
</div>
</div>
<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"The dashboard is incredibly easy to use. Our reception staff loves how simple it is to redeem codes."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Mark Davies</p>
<p className="text-xs text-slate-500">Owner, Urban Spa</p>
</div>
</div>
</div>
<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Setting up our Christmas offers took 10 minutes. The automated emails saved us hours of manual work."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold text-slate-900">Elena Rodri</p>
<p className="text-xs text-slate-500">Manager, La Piazza</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                Ready to grow your revenue?
            </h2>
<p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                Join hundreds of businesses selling digital vouchers today. No credit card required for the demo.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    Book a Free Demo
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-8">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-4 md:mb-0" href="#">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs font-bold">U</div>
                    UBILIZ
                </a>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Twitter</a>
</div>
</div>
<div className="text-center md:text-left text-xs text-slate-400">
                © 2023 Ubiliz Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
