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
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-blue-50 to-slate-50"></div>
<div className="absolute -top-24 -left-32 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl"></div>
<div className="absolute top-52 -right-16 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl"></div>
</div>

<header className="max-w-6xl mx-auto px-6 pt-6">
<nav className="flex items-center justify-between bg-white/90 backdrop-blur rounded-full shadow-lg ring-1 ring-slate-200/70 px-4 sm:px-6 py-3">
<a className="flex items-center gap-3" href="/">
<div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white font-semibold grid place-items-center text-[14px] tracking-tight">
          im
        </div>
<div className="text-slate-900 text-lg sm:text-xl font-semibold tracking-tight">Influencer Marketplace</div>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900" href="/">Featured</a>
<a className="hover:text-slate-900" href="/">Active Campaigns</a>
<a className="hover:text-slate-900" href="/">How It Works</a>
<a className="hover:text-slate-900" href="/">About Us</a>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<a className="hover:bg-slate-50 text-sm font-medium text-slate-700 border-slate-200 border rounded-full pt-2 pr-4 pb-2 pl-4" href="/login">Login</a>
<a className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-tr from-orange-400 to-amber-500 shadow-[0_10px_20px_-10px_rgba(245,158,11,0.85)] hover:brightness-110" href="/signup">
          Sign Up
        </a>
</div>
</nav>
</header>

<main className="max-w-6xl mx-auto px-6 py-10 pb-28">

<section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Admin Panel</h1>
<p className="text-slate-600 text-sm sm:text-base mt-1">Monitor campaigns, creators, and platform health.</p>
</div>
<div className="flex items-center gap-2">
<a className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 border border-slate-200 hover:bg-slate-50" href="/admin/invite">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="user-plus"></i>
            Invite User
          </span>
</a>
<a className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-tr from-sky-500 to-blue-600 shadow-[0_10px_20px_-10px_rgba(59,130,246,0.85)] hover:brightness-110" href="/campaigns/new">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i>
            New Campaign
          </span>
</a>
</div>
</section>

<section className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 p-5">
<div className="flex items-center justify-between">
<p className="text-slate-600 text-sm">Total Campaigns</p>
<span className="h-9 w-9 rounded-xl bg-sky-100 text-sky-600 grid place-items-center ring-8 ring-sky-50">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">1,248</span>
<span className="text-xs text-emerald-600 inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="trending-up"></i> +4.1%
          </span>
</div>
</div>
<div className="rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 p-5">
<div className="flex items-center justify-between">
<p className="text-slate-600 text-sm">Active</p>
<span className="h-9 w-9 rounded-xl bg-emerald-100 text-emerald-600 grid place-items-center ring-8 ring-emerald-50">
<i className="w-5 h-5" data-lucide="play-circle"></i>
</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">312</span>
<span className="text-xs text-emerald-600 inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i> +2.3%
          </span>
</div>
</div>
<div className="rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 p-5">
<div className="flex items-center justify-between">
<p className="text-slate-600 text-sm">Pending Payouts</p>
<span className="h-9 w-9 rounded-xl bg-amber-100 text-amber-600 grid place-items-center ring-8 ring-amber-50">
<i className="w-5 h-5" data-lucide="wallet"></i>
</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">$42.7k</span>
<span className="text-xs text-amber-600 inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> 58 awaiting
          </span>
</div>
</div>
<div className="rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 p-5">
<div className="flex items-center justify-between">
<p className="text-slate-600 text-sm">Creators</p>
<span className="h-9 w-9 rounded-xl bg-fuchsia-100 text-fuchsia-600 grid place-items-center ring-8 ring-fuchsia-50">
<i className="w-5 h-5" data-lucide="users"></i>
</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">18,204</span>
<span className="text-xs text-emerald-600 inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i> +6.8%
          </span>
</div>
</div>
</section>

<section className="mt-6 grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200 p-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Performance</h2>
<p className="text-sm text-slate-600">Applications, approvals and spend (last 8 weeks)</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 border border-slate-200 hover:bg-slate-50">Weekly</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 border border-slate-200 hover:bg-slate-50">Monthly</button>
</div>
</div>
<div className="mt-4">
<canvas height="120" id="perfChart"></canvas>
</div>
</div>

<div className="rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200 p-6">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Pending Approvals</h2>
<a className="text-sm text-slate-500 hover:text-slate-700" href="/admin/approvals">View all</a>
</div>
<div className="mt-4 divide-y divide-slate-200">
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-xl bg-slate-100 grid place-items-center ring-8 ring-slate-50 text-slate-500">
<i className="w-5 h-5" data-lucide="user"></i>
</span>
<div>
<p className="text-sm font-medium text-slate-900">Alex Kim</p>
<p className="text-xs text-slate-500">@alexk • TikTok • 210k</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200">
<span className="inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="check"></i> Approve
                </span>
</button>
<button className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 border border-slate-200">
<span className="inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="x"></i> Decline
                </span>
</button>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-xl bg-slate-100 grid place-items-center ring-8 ring-slate-50 text-slate-500">
<i className="w-5 h-5" data-lucide="user"></i>
</span>
<div>
<p className="text-sm font-medium text-slate-900">Maya Patel</p>
<p className="text-xs text-slate-500">@mayap • Instagram • 480k</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200">
<span className="inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="check"></i> Approve
                </span>
</button>
<button className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 border border-slate-200">
<span className="inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="x"></i> Decline
                </span>
</button>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-xl bg-slate-100 grid place-items-center ring-8 ring-slate-50 text-slate-500">
<i className="w-5 h-5" data-lucide="user"></i>
</span>
<div>
<p className="text-sm font-medium text-slate-900">Leo Martin</p>
<p className="text-xs text-slate-500">@leom • YouTube • 92k</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200">
<span className="inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="check"></i> Approve
                </span>
</button>
<button className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 border border-slate-200">
<span className="inline-flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="x"></i> Decline
                </span>
</button>
</div>
</div>
</div>
</div></section></main>
    </>
  );
}
