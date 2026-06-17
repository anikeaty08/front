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



        lucide.createIcons({
            attrs: {
                class: "lucide",
                "stroke-width": 1.5
            }
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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
<div className="flex items-center gap-8">

<a className="text-2xl font-semibold tracking-tight text-red-500" href="#">
                    TADAAA!
                </a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Delivery</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">About us</a>
</div>
</div>
<div className="flex items-center gap-3">

<div className="hidden md:flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-100 transition-all">
<i className="mr-2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="bg-transparent text-sm font-medium outline-none placeholder:text-slate-400 w-48" placeholder="Search products..." type="text"/>
</div>

<button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium hover:bg-slate-50 transition-colors">
<i className="h-4 w-4 text-slate-500" data-lucide="layout-grid"></i>
<span className="hidden sm:inline">Catalogue</span>
</button>
<button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors">
<i className="h-4 w-4" data-lucide="shopping-cart"></i>
</button>
<button className="flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-100 transition-colors">
<i className="h-4 w-4" data-lucide="user"></i>
<span>Evgenii</span>
</button>
</div>
</div>
</nav>
<main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">

<header className="mb-10">
<h1 className="text-3xl font-medium tracking-tight text-slate-900">My Profile</h1>
<p className="mt-2 text-lg text-slate-500">Manage your account settings and referral rewards.</p>
</header>

<section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm mb-10">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<div className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-y-2 gap-x-4">
<span className="text-base text-slate-500">Name</span>
<span className="text-base font-medium text-slate-900">Evgenii Integrator</span>
<span className="text-base text-slate-500">Email</span>
<span className="text-base font-medium text-slate-900">test@test.com</span>
<span className="text-base text-slate-500">Phone</span>
<span className="text-base font-medium text-slate-900">1231231232</span>
<span className="text-base text-slate-500">Date of Birth</span>
<span className="text-base font-medium text-slate-900">February 05</span>
</div>
<a className="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700 underline underline-offset-4 decoration-indigo-300" href="#">Change Password</a>
</div>
<div className="flex gap-3">
<button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all">
                        Edit Profile
                    </button>
<button className="rounded-lg border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition-all">
                        Log out
                    </button>
</div>
</div>
</section>

<section className="mb-12 rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50/30 to-white relative overflow-hidden shadow-sm">
<div className="relative z-10 p-6 sm:p-8">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

<div className="flex-1 space-y-5">
<div className="space-y-3">
<div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800 ring-1 ring-inset ring-amber-600/20">
<i className="h-3.5 w-3.5 fill-amber-500/20" data-lucide="sparkles"></i>
<span>Referral Program</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Get £20 Back</h2>
<p className="text-lg text-slate-600 max-w-md leading-relaxed">
                                Good food is better shared. Invite your friends and earn credit for your next feast.
                            </p>
</div>

<button className="group inline-flex items-center gap-2 text-sm font-medium text-amber-800 hover:text-amber-950 transition-colors">
<span>How it works</span>
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>

<div className="w-full lg:w-[420px] rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-4 ring-slate-50/50">
<div className="space-y-5">

<div className="space-y-1.5">
<label className="text-xs font-medium uppercase tracking-wider text-slate-500">Your unique link</label>
<div className="flex rounded-lg shadow-sm">
<div className="relative flex flex-grow items-stretch focus-within:z-10">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<i className="h-4 w-4 text-slate-400" data-lucide="link"></i>
</div>
<input className="block w-full rounded-l-lg border-0 py-2.5 pl-10 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 bg-slate-50 font-medium transition-shadow" readonly="" type="text" value="tadaaa.uk/r/evgenii"/>
</div>
<button className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-lg px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-colors bg-slate-50" type="button">
                                        Copy
                                    </button>
</div>
</div>
<div className="h-px w-full bg-slate-100"></div>

<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-lg bg-white p-0.5 border border-slate-200 shadow-sm">
<img alt="QR Code" className="h-full w-full object-contain opacity-90" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=tadaaa.uk/r/evgenii&amp;color=0f172a"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Your QR</span>
<span className="text-xs text-slate-500">Scan to join</span>
</div>
</div>
<div className="flex gap-2">
<button aria-label="WhatsApp" className="group flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-sm border border-transparent hover:border-[#25D366]/20">
<i className="h-4.5 w-4.5 fill-current" data-lucide="message-circle"></i>
</button>
<button aria-label="Messenger" className="group flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm border border-transparent hover:border-blue-600/20">
<i className="h-4.5 w-4.5 fill-current" data-lucide="message-square"></i>
</button>
<button aria-label="Share" className="group flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-800 hover:text-white transition-all shadow-sm">
<i className="h-4.5 w-4.5" data-lucide="share-2"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl"></div>
<div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl"></div>
</section>

<section className="space-y-6 mb-12">
<div className="flex items-end justify-between border-b border-slate-200 pb-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Referrals &amp; Rewards</h2>
<p className="mt-1 text-base text-slate-500">Track your invites and unlock coupons.</p>
</div>
<div className="text-right hidden sm:block">
<div className="text-sm font-medium text-slate-500">Total Earned</div>
<div className="text-xl font-semibold text-indigo-600">£40.00</div>
</div>
</div>
<div className="flex flex-col gap-4">

<div className="group relative rounded-xl border border-slate-200 bg-white p-5 transition-all hover:shadow-md hover:border-slate-300">
<div className="flex flex-col sm:flex-row gap-6">

<div className="flex items-start gap-4 sm:w-1/3 sm:border-r sm:border-slate-100 sm:pr-6">
<div className="relative">
<img alt="Felix" className="h-12 w-12 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-2 ring-white">
<i className="h-3 w-3 text-amber-500" data-lucide="clock"></i>
</span>
</div>
<div>
<h3 className="font-medium text-slate-900">Felix Vance</h3>
<p className="text-sm text-slate-500">Invited 2 days ago</p>
<span className="mt-1 inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">Pending Order</span>
</div>
</div>

<div className="flex-1">
<h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Reward Status</h4>
<div className="flex items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-3 opacity-75">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-200">
<i className="h-5 w-5 text-slate-400" data-lucide="lock"></i>
</div>
<div className="flex-1">
<div className="font-medium text-slate-600">Referral Coupon £20</div>
<div className="text-sm text-slate-400">Unlocks when Felix places first order</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-5 transition-all hover:shadow-md hover:border-slate-300">
<div className="flex flex-col sm:flex-row gap-6">

<div className="flex items-start gap-4 sm:w-1/3 sm:border-r sm:border-slate-100 sm:pr-6">
<div className="relative">
<img alt="Sarah" className="h-12 w-12 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-2 ring-white">
<i className="h-3 w-3 text-emerald-500" data-lucide="check-circle-2"></i>
</span>
</div>
<div>
<h3 className="font-medium text-slate-900">Sarah Jenkins</h3>
<p className="text-sm text-slate-500">Active Shopper</p>
<span className="mt-1 inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">Qualified</span>
</div>
</div>

<div className="flex-1 space-y-3">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Rewards</h4>

<div className="flex items-center justify-between gap-3 rounded-lg border border-indigo-100 bg-indigo-50/50 p-3 shadow-sm ring-1 ring-indigo-500/10">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-100 text-indigo-600">
<span className="text-sm font-bold">£20</span>
</div>
<div>
<div className="font-semibold text-indigo-950">Referral Reward</div>
<div className="text-sm text-indigo-600/80">Valid until Dec 2026</div>
</div>
</div>
<button className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-indigo-600 shadow-sm border border-indigo-100 hover:bg-indigo-50 transition-colors">
                                    Apply
                                </button>
</div>

<div className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
<div className="flex items-center gap-3 opacity-60">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-200 text-slate-500">
<i className="h-5 w-5" data-lucide="tag"></i>
</div>
<div>
<div className="font-medium text-slate-900 line-through decoration-slate-400">Bonus Coupon £10</div>
<div className="text-sm text-slate-500">Used on Oct 12, 2024</div>
</div>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Redeemed</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-slate-200 bg-white p-5 transition-all hover:shadow-md hover:border-slate-300">
<div className="flex flex-col sm:flex-row gap-6">

<div className="flex items-start gap-4 sm:w-1/3 sm:border-r sm:border-slate-100 sm:pr-6">
<div className="relative">
<img alt="Marcus" className="h-12 w-12 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"/>
<span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-2 ring-white">
<i className="h-3 w-3 text-slate-400" data-lucide="mail"></i>
</span>
</div>
<div>
<h3 className="font-medium text-slate-900">Marcus Lee</h3>
<p className="text-sm text-slate-500">Invite sent</p>
<span className="mt-1 inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">No Account Yet</span>
</div>
</div>

<div className="flex-1">
<h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Reward Status</h4>
<div className="flex items-center gap-3 rounded-lg border border-dashed border-slate-200 p-3">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100">
<i className="h-5 w-5 text-slate-300" data-lucide="lock"></i>
</div>
<div className="flex-1">
<div className="font-medium text-slate-400">Locked Reward</div>
<div className="text-sm text-slate-400">Waiting for sign up &amp; order</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">My Points</h2>
<div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div>
<span className="block text-4xl font-semibold tracking-tight text-indigo-600">0</span>
<span className="text-base text-slate-500">Available Points</span>
</div>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 underline decoration-slate-300 underline-offset-4" href="#">Terms &amp; Conditions</a>
</div>
</section>

<section className="text-center py-10 border-t border-slate-200">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Support Team</h2>
<p className="mt-2 text-base text-slate-500 mb-8">We are available every day from 10 AM to 10 PM</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
<button className="group flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-white shadow-sm hover:brightness-105 transition-all">
<i className="h-5 w-5 fill-current" data-lucide="message-circle"></i>
<span className="font-medium">WhatsApp</span>
</button>
<button className="group flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-3 text-white shadow-sm hover:brightness-105 transition-all">
<i className="h-5 w-5 fill-current" data-lucide="message-square"></i>
<span className="font-medium">Messenger</span>
</button>
<button className="group flex items-center justify-center gap-2 rounded-lg bg-[#0088cc] px-4 py-3 text-white shadow-sm hover:brightness-105 transition-all">
<i className="h-5 w-5 fill-current" data-lucide="send"></i>
<span className="font-medium">Telegram</span>
</button>
<button className="group flex items-center justify-center gap-2 rounded-lg bg-orange-300 px-4 py-3 text-orange-950 shadow-sm hover:bg-orange-400 transition-all">
<i className="h-5 w-5" data-lucide="mail"></i>
<span className="font-medium">hello@tadaaa.uk.com</span>
</button>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
<a className="text-base text-slate-500 hover:text-indigo-600 transition-colors" href="#">Reviews</a>
<a className="text-base text-slate-500 hover:text-indigo-600 transition-colors" href="#">Terms and Conditions</a>
<a className="text-base text-slate-500 hover:text-indigo-600 transition-colors" href="#">Privacy Notice</a>
<a className="text-base text-slate-500 hover:text-indigo-600 transition-colors" href="#">Partner Requests</a>
<a className="text-base text-slate-500 hover:text-indigo-600 transition-colors" href="#">Delivery</a>
<a className="text-base text-slate-500 hover:text-indigo-600 transition-colors" href="#">About us</a>
</div>
<div className="mb-8 flex justify-center">
<div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-600 transition-all cursor-pointer">
<i className="h-5 w-5" data-lucide="instagram"></i>
</div>
</div>
<div className="space-y-2 text-sm text-slate-400">
<p className="font-medium text-slate-900">hello@tadaaa.uk.com</p>
<p>415 Wick Lane, Hackney Wick, E3 2JG, London, United Kingdom</p>
<p>License Number: L1U: 174713, TADAAA! LTD, © 2024–2025</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 flex flex-col gap-3">
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 text-slate-600 hover:scale-105 transition-transform">
<i className="h-6 w-6" data-lucide="message-square-more"></i>
</button>
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 text-slate-600 hover:scale-105 transition-transform">
<i className="h-6 w-6" data-lucide="settings-2"></i>
</button>
</div>


    </>
  );
}
