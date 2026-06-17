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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600 text-white shadow-lg shadow-teal-600/20">
<i className="h-6 w-6" data-lucide="shield-check"></i>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-slate-900 leading-none">e-service@KU</span>
<span className="text-xs font-medium text-slate-400">DBKU Online Services</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#">FAQ</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#">User Guide</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors" href="#">Contact</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-all">
<div className="h-2 w-2 rounded-full bg-red-500"></div>
                    SarawakPass
                </button>
<div className="flex overflow-hidden rounded-lg border border-slate-200 bg-white p-1">
<button className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">Login</button>
<button className="rounded-md px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900">Register</button>
</div>
<span className="ml-2 text-xs font-medium text-slate-400">EN</span>
</div>
</div>
</nav>

<header className="relative overflow-hidden bg-white pb-24 pt-16 lg:pb-32 lg:pt-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 mb-6">
<span className="flex h-2 w-2 rounded-full bg-teal-600 mr-2"></span>
                        Official Government Portal
                    </div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl mb-6">
                        Digital services for the <span className="text-teal-600">people.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Manage your bill payments, parking compounds, and facility bookings efficiently through the DBKU integrated digital platform.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:-translate-y-0.5 transition-all">
                            View All Services
                            <i className="ml-2 h-4 w-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all">
<i className="mr-2 h-4 w-4 text-slate-400" data-lucide="file-text"></i>
                            Check Status
                        </button>
</div>
</div>

<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">

<div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
<i className="h-6 w-6" data-lucide="receipt"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-2">Bill Payment</h3>
<p className="text-sm text-slate-500 mb-4">Securely view and pay your municipal bills online instantly.</p>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center" href="#">
                            Pay Now <i className="ml-1 h-3 w-3" data-lucide="chevron-right"></i>
</a>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 sm:translate-y-8">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 group-hover:scale-110 transition-transform">
<i className="h-6 w-6" data-lucide="car"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-2">Parking Compound</h3>
<p className="text-sm text-slate-500 mb-4">Check and settle outstanding parking compounds with ease.</p>
<a className="text-sm font-medium text-teal-600 hover:text-teal-700 inline-flex items-center" href="#">
                            Check Compound <i className="ml-1 h-3 w-3" data-lucide="chevron-right"></i>
</a>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 group-hover:scale-110 transition-transform">
<i className="h-6 w-6" data-lucide="layout-grid"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-2">Public Services</h3>
<p className="text-sm text-slate-500 mb-4">Booking of DBKU's public facilities and general services.</p>
<a className="text-sm font-medium text-violet-600 hover:text-violet-700 inline-flex items-center" href="#">
                            Book Facility <i className="ml-1 h-3 w-3" data-lucide="chevron-right"></i>
</a>
</div>

<div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 shadow-lg sm:translate-y-8 text-white flex flex-col justify-center items-center text-center">
<i className="h-10 w-10 text-slate-400 mb-3" data-lucide="smartphone"></i>
<h3 className="text-lg font-medium tracking-tight mb-1">Go Mobile</h3>
<p className="text-xs text-slate-400">Download the app for iOS and Android.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-gradient-to-l from-slate-50 to-transparent"></div>
</header>

<section className="py-20 border-y border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">How it works</h2>
<p className="mt-2 text-base text-slate-500">Get started in four simple steps</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm mb-6 group-hover:border-teal-500 group-hover:shadow-teal-100 transition-all duration-300">
<span className="text-3xl font-semibold text-teal-600">1</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Sign Up</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Create your free account to access all services.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm mb-6 group-hover:border-teal-500 group-hover:shadow-teal-100 transition-all duration-300">
<span className="text-3xl font-semibold text-teal-600">2</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Choose Option</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Select the service or payment type you need.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm mb-6 group-hover:border-teal-500 group-hover:shadow-teal-100 transition-all duration-300">
<span className="text-3xl font-semibold text-teal-600">3</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Confirm</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Review your details and confirm the transaction.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm mb-6 group-hover:border-teal-500 group-hover:shadow-teal-100 transition-all duration-300">
<span className="text-3xl font-semibold text-teal-600">4</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Done</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Transaction complete. Receive your receipt instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12">

<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-teal-50 rounded-lg text-teal-600">
<i className="h-5 w-5" data-lucide="car"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Find Your Parking Compound</h3>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">New IC Number</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:ring-teal-500 transition-colors shadow-sm outline-none" placeholder="e.g. 900101-13-1234" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Car Plate Number</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:ring-teal-500 transition-colors shadow-sm outline-none" placeholder="e.g. QAA1234A" type="text"/>
</div>
<div className="pt-2">
<button className="inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-teal-700 transition-all" type="button">
                                Search Compound
                            </button>
</div>
</form>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<i className="h-5 w-5" data-lucide="file-text"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Find Your Misc. Bill</h3>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Miscellaneous Bill No.</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-blue-500 transition-colors shadow-sm outline-none" placeholder="Enter bill number" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Registered Name</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-blue-500 transition-colors shadow-sm outline-none" placeholder="Full name as per bill" type="text"/>
</div>
<div className="pt-2">
<button className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all" type="button">
                                Search Bill
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Platform Statistics</h2>
<div className="flex items-start gap-5">
<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
<i className="h-6 w-6" data-lucide="layers"></i>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">&gt;4</p>
<p className="text-sm font-medium text-teal-600">Core Services</p>
<p className="text-sm text-slate-500">Integrated DBKU services available online.</p>
</div>
</div>
<div className="h-px w-full bg-slate-100"></div>
<div className="flex items-start gap-5">
<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600">
<i className="h-6 w-6" data-lucide="credit-card"></i>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">12+</p>
<p className="text-sm font-medium text-violet-600">Payment Channels</p>
<p className="text-sm text-slate-500">Secure banking and e-wallet options.</p>
</div>
</div>
<div className="h-px w-full bg-slate-100"></div>
<div className="flex items-start gap-5">
<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
<i className="h-6 w-6" data-lucide="users"></i>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">10k+</p>
<p className="text-sm font-medium text-blue-600">Registered Users</p>
<p className="text-sm text-slate-500">Citizens using our digital services.</p>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="rounded-3xl bg-slate-50 p-8 h-full border border-slate-200">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Announcements</h2>
<span className="inline-flex items-center rounded-full bg-white border border-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                                Latest Updates
                            </span>
</div>

<div className="flex flex-col items-center justify-center h-64 text-center rounded-2xl border-2 border-dashed border-slate-200 bg-white/50">
<div className="rounded-full bg-slate-100 p-3 mb-3">
<i className="h-6 w-6 text-slate-400" data-lucide="bell-off"></i>
</div>
<h3 className="text-sm font-medium text-slate-900">No new announcements</h3>
<p className="text-xs text-slate-500 mt-1">Check back later for important updates.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 py-12 border-t border-slate-800">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-8 items-start">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="flex h-8 w-8 items-center justify-center rounded bg-teal-600 text-white">
<i className="h-4 w-4" data-lucide="shield-check"></i>
</div>
<span className="text-lg font-semibold text-white tracking-tight">e-service@KU</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed max-w-md">
                        The Commission of The City of Kuching North shall not be liable for any loss or damage caused by the usage of any information obtained from this portal. Services provided through this portal are subject to terms and conditions.
                    </p>
</div>
<div className="flex flex-col md:items-end justify-between h-full gap-4">
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-slate-400 hover:text-white transition-colors" href="#">Contact Support</a>
</div>
<p className="text-xs text-slate-500">© 2026 DBKU. All rights reserved.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
