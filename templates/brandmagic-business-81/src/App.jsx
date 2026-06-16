import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        // Initialize icons
        if (window.lucide) lucide.createIcons();

        // Mobile nav toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (menuBtn && mobileMenu) {
          menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isOpen = !mobileMenu.classList.contains('hidden');
            menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            menuBtn.innerHTML = isOpen ? '<i data-lucide="x" class="h-5 w-5"></i>' : '<i data-lucide="menu" class="h-5 w-5"></i>';
            if (window.lucide) lucide.createIcons();
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky z-50 bg-slate-950/70 border-slate-800/70 border-b top-0 backdrop-blur">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4" style={{}}>
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-3" href="#">
<span className="flex items-center justify-center font-semibold text-slate-50 tracking-tight w-9 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a843ea9b-35c2-41b9-a776-1ec5892a19d4_3840w.png?w=800&amp;q=80)] bg-cover rounded-md"></span>
<span className="text-lg sm:text-xl font-semibold tracking-tight">BrandMagics</span>
</a>

<nav className="hidden lg:flex items-center gap-7 text-sm text-slate-300">
<a className="hover:text-white transition" href="#bmex" style={{}}>Home</a>
<a className="hover:text-white transition" href="#boss" style={{}}>Products</a>
<a className="hover:text-white transition" href="#services">Services</a>
<a className="hover:text-white transition" href="#setworks" style={{}}>About</a>
<a className="hover:text-white transition" href="#about" style={{}}>Support</a>
</nav>

<div className="hidden lg:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-700/70 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800/60 transition" href="#login">
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
<span className="">Login</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white hover:from-blue-500 hover:to-indigo-500 transition" href="#register">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">Register Your Brand</span>
</a>
</div>

<button aria-label="Open menu" className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-700/70 p-2 text-slate-200 hover:bg-slate-800/60 transition" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden lg:hidden border-t border-slate-800/70 bg-slate-950" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
<nav className="grid gap-3 text-sm text-slate-300">
<a className="py-2 hover:text-white transition" href="#bmex">BMeX Exchange</a>
<a className="py-2 hover:text-white transition" href="#boss">BOSS Tools</a>
<a className="py-2 hover:text-white transition" href="#services">Services</a>
<a className="py-2 hover:text-white transition" href="#setworks">Setworks</a>
<a className="py-2 hover:text-white transition" href="#about">About Us</a>
<div className="mt-3 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-700/70 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800/60 transition" href="#login">
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
<span>Login</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white hover:from-blue-500 hover:to-indigo-500 transition" href="#register">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Register Your Brand</span>
</a>
</div>
</nav>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0">
<img alt="" className="opacity-100 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f3362bc2-19d3-40ac-a498-bab9c916ee12_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-950/70"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950"></div>
</div>
<div className="sm:px-6 lg:px-8 sm:pt-20 sm:pb-16 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-10 pl-4 relative">
<div className="max-w-3xl">
<h1 className="sm:text-5xl text-4xl font-semibold text-white tracking-tight" style={{}}>Enabling Access to Capital &amp; Functional OS for Growth</h1>
<p className="sm:text-lg text-base text-slate-300 mt-4" style={{}}>We provide full suite of business apps to transform your business into a brand and a platform to list your brand for raising capital. It all starts with your universal BMeX ID.</p>
</div>

<div className="mt-8 max-w-3xl">
<form className="rounded-xl border border-slate-700/60 bg-slate-900/70 backdrop-blur p-2 shadow-lg ring-1 ring-white/5">
<div className="flex items-stretch gap-2">
<div className="relative flex-1">
<svg className="lucide lucide-search pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input aria-label="Enter BMeX ID or Brand Name" className="placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/60 text-slate-100 bg-transparent w-full rounded-lg pt-3 pr-3 pb-3 pl-10" placeholder="Enter BMeX ID or Brand Name..." type="text"/>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-500 transition" type="submit">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="">Search</span>
</button>
</div>
<p className="px-2 pt-2 text-xs text-slate-400">
              BMeX ID is an 8-digit global identification number ending with ‘XX1’ that uniquely identifies a brand or linked entity.
            </p>
</form>
</div>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
<a className="group rounded-xl border border-slate-700/60 bg-slate-900/60 p-5 backdrop-blur hover:bg-slate-900 transition" href="#bmex">
<div className="flex items-start gap-3">
<div className="rounded-md bg-blue-600/20 p-2 text-blue-400">
<svg className="lucide lucide-globe h-5 w-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="">
<h3 className="text-base font-semibold text-white tracking-tight" style={{}}>BMeX: The BrandMagics Exchange</h3>
<p className="text-sm text-slate-300 mt-1">An online Brand Exchange where Equity Units of Brands can be listed, traded, or pledged globally.</p>
</div>
</div>
</a>
<a className="group rounded-xl border border-slate-700/60 bg-slate-900/60 p-5 backdrop-blur hover:bg-slate-900 transition" href="#boss">
<div className="flex items-start gap-3">
<div className="rounded-md bg-indigo-600/20 p-2 text-indigo-400">
<svg className="lucide lucide-cpu h-5 w-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="">
<h3 className="text-base font-semibold text-white tracking-tight" style={{}}>Brand Operating &amp; Strategizing System</h3>
<p className="mt-1 text-sm text-slate-300">Automate Due Diligence, Reporting, and Operations seamlessly across departments using the BOSS ecosystem.</p>
</div>
</div>
</a>
<a className="group rounded-xl border border-slate-700/60 bg-slate-900/60 p-5 backdrop-blur hover:bg-slate-900 transition" href="#advisory">
<div className="flex items-start gap-3">
<div className="rounded-md bg-emerald-600/20 p-2 text-emerald-400">
<svg className="lucide lucide-users h-5 w-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<h3 className="text-base font-semibold text-white tracking-tight">Expert Advisory &amp; Infrastructure</h3>
<p className="mt-1 text-sm text-slate-300">Consult our experts for M&amp;A, Sales, and Digital Infrastructure setup powered by our global network.</p>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="relative" id="toolkit" style={{}}>
<div className="absolute inset-x-0 -top-20 -z-10 h-40 bg-gradient-to-b from-transparent to-slate-950"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="lg:col-span-1">
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm">
<h2 className="sm:text-3xl text-2xl font-semibold text-white tracking-tight" style={{}}>Essential Toolkit</h2>
<p className="mt-2 text-sm text-slate-300">
                Start for free with Always-On Freemium modules. Add powerful Pay-As-You-Go modules as your business grows — with no subscriptions.
              </p>
<div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/40 p-5">
<div className="inline-flex items-center gap-2 rounded-md bg-blue-600/15 px-2.5 py-1 text-xs font-medium text-blue-300">
<svg className="lucide lucide-infinity h-4 w-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
                  Always On Freemium
                </div>
<ul className="mt-4 space-y-4">
<li className="flex items-start gap-3">
<span className="rounded-md bg-slate-800 p-2 text-slate-300"><svg className="lucide lucide-wallet h-4 w-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg></span>
<div className="">
<p className="text-sm font-medium text-white">PayMagics</p>
<p className="text-sm text-slate-300">Enables secure brand-linked transactions without exposing account numbers across banks or fintechs.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="rounded-md bg-slate-800 p-2 text-slate-300"><svg className="lucide lucide-leaf h-4 w-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg></span>
<div className="">
<p className="text-sm font-medium text-white">GrowMagics</p>
<p className="text-sm text-slate-300">Basic growth tools and analytics to help early-stage brands thrive.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="rounded-md bg-slate-800 p-2 text-slate-300"><svg className="lucide lucide-file-check-2 h-4 w-4" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m14 20 2 2 4-4"></path></svg></span>
<div className="">
<p className="text-sm font-medium text-white">SignMagics</p>
<p className="text-sm text-slate-300">Digital document signing and identity validation suite.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="rounded-md bg-slate-800 p-2 text-slate-300"><svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></span>
<div className="">
<p className="text-sm font-medium text-white" style={{}}>Essential CRM</p>
<p className="text-sm text-slate-300" style={{}}>Essential CRM to manage clients, leads, and communication.</p>
</div>
</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition" href="#freemium">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                  Get Started for Free
                </a>
</div>
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-1 gap-6">

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
<h3 className="sm:text-2xl text-xl font-semibold text-white tracking-tight" style={{}}>BOSS Magics Power Modules (Pay-As-You-Go)</h3>
<div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4 hover:border-slate-700 transition">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-target h-4 w-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg><span className="text-sm font-medium text-white">LeadMagics</span>
</div>
<p className="mt-1 text-xs text-slate-400">Marketing automation and lead generation tools.</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4 hover:border-slate-700 transition">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-shopping-cart h-4 w-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg><span className="text-sm font-medium text-white">SalesMagics</span>
</div>
<p className="mt-1 text-xs text-slate-400">Sales performance and conversion optimization platform.</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4 hover:border-slate-700 transition">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-check-circle h-4 w-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span className="text-sm font-medium text-white">TaskMagics</span>
</div>
<p className="mt-1 text-xs text-slate-400">Operations management and task automation system.</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4 hover:border-slate-700 transition">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-briefcase h-4 w-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg><span className="text-sm font-medium text-white">HireMagics</span>
</div>
<p className="mt-1 text-xs text-slate-400">HR and recruitment automation tools.</p>
</div>
<div className="hover:border-slate-700 transition bg-slate-950/40 border-slate-800 border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-dollar-sign h-4 w-4" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg><span className="text-sm font-medium text-white">MoneyMagics</span>
</div>
<p className="mt-1 text-xs text-slate-400">Finance and transaction analytics tools.</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4 hover:border-slate-700 transition">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-scale h-4 w-4" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg><span className="text-sm font-medium text-white">LexMagics</span>
</div>
<p className="mt-1 text-xs text-slate-400">Legal documentation and compliance suite.</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4 hover:border-slate-700 transition">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg><span className="text-sm font-medium text-white">ScaleMagics</span>
</div>
<p className="mt-1 text-xs text-slate-400">Research, development, and innovation scaling module.</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4 hover:border-slate-700 transition">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-flag h-4 w-4" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg><span className="text-sm font-medium text-white">GoalMagics</span>
</div>
<p className="mt-1 text-xs text-slate-400">Management and performance goal alignment tools.</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6" id="services">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Human Expertise to Guide Your Digital Growth</h3>
<p className="mt-2 text-sm text-slate-300">Our expert advisors provide industry-aligned consulting to accelerate your business transformation.</p>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
<div className="flex items-start gap-3">
<span className="rounded-md bg-slate-800 p-2 text-amber-300"><svg className="lucide lucide-lightbulb h-4 w-4" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg></span>
<div className="">
<p className="text-sm font-medium text-white">Functional Consulting</p>
<p className="text-xs text-slate-400">Expert-led consulting tailored to your operational and digital needs.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
<div className="flex items-start gap-3">
<span className="rounded-md bg-slate-800 p-2 text-sky-300"><svg className="lucide lucide-line-chart h-4 w-4" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg></span>
<div className="">
<p className="text-sm font-medium text-white">Sales Acceleration</p>
<p className="text-xs text-slate-400">Boost your brand’s performance through sales process optimization.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
<div className="flex items-start gap-3">
<span className="rounded-md bg-slate-800 p-2 text-emerald-300"><svg className="lucide lucide-compass h-4 w-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg></span>
<div className="">
<p className="text-sm font-medium text-white">Goal Orientation</p>
<p className="text-xs text-slate-400">Strategic planning to align business objectives with execution.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
<div className="flex items-start gap-3">
<span className="rounded-md bg-slate-800 p-2 text-indigo-300"><svg className="lucide lucide-handshake h-4 w-4" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg></span>
<div className="">
<p className="text-sm font-medium text-white">M&amp;A Advisory</p>
<p className="text-xs text-slate-400">Mergers, Acquisitions, and Capital Advisory with due diligence.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-slate-800 border-t relative" id="support">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>
<img alt="" className="hidden lg:block opacity-25 w-1/2 h-full object-cover absolute top-0 right-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/565ccdbe-ced9-4422-afe5-89a36ff83b7c_1600w.jpg?w=800&amp;q=80" style={{display: 'none'}}/>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_45%)]"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
<h2 className="text-3xl font-semibold tracking-tight text-white">Speaking Your Language. Understanding Your Market.</h2>
<p className="mt-3 text-sm text-slate-300">
              Build for a borderless digital economy. Operate globally with interoperable identity, compliance, and data models—ready for teams and partners across 195+ countries.
            </p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<div className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-200">
<svg className="lucide lucide-globe-2 h-4 w-4 text-blue-300" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Global Coverage
              </div>
<div className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-200">
<svg className="lucide lucide-shield-check h-4 w-4 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Secure &amp; Compliant
              </div>
<div className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-xs text-slate-200">
<svg className="lucide lucide-languages h-4 w-4 text-indigo-300" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
                Multi‑Language Ready
              </div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
<div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
<div className="pt-8 pr-8 pb-8 pl-8 relative">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Register Your Brand. Own Your Future.</h3>
<p className="mt-3 text-sm text-slate-300">Get your universal BMeX ID and unlock the exchange, tools, and global ecosystem.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition" href="#register">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                  Register Your Brand Now
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-slate-700/70 px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800/60 transition" href="#contact">
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                  Talk to an Expert
                </a>
</div>
<div className="mt-8">
<div className="bg-slate-950/40 border-slate-800 border rounded-xl pt-4 pr-4 pb-4 pl-4 relative">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                      Universal BMeX Identity
                    </div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-badge-check h-4 w-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      Verified &amp; Portable
                    </div>
</div>
<div className="mt-4 h-36 overflow-hidden rounded-lg bg-slate-900">
<img alt="Global network" className="bg-center opacity-60 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/51f7f663-e367-45cf-a7f9-99d823cd4228_3840w.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-800 bg-slate-950" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8">
<div className="flex items-center gap-3">
<span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold tracking-tight">BM</span>
<div className="">
<p className="text-base font-semibold tracking-tight text-white">BrandMagics</p>
<p className="text-xs text-slate-400">The Operating System for Your Business</p>
</div>
</div>
<div className="flex items-center gap-3 text-slate-400">
<a aria-label="Twitter" className="hover:text-white transition" href="#twitter"><svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a aria-label="LinkedIn" className="hover:text-white transition" href="#linkedin"><svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a aria-label="GitHub" className="hover:text-white transition" href="#github"><svg className="lucide lucide-github h-4 w-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
<div className="">
<h4 className="text-slate-200 font-medium">About Us</h4>
<ul className="mt-3 space-y-2 text-slate-400">
<li className=""><a className="hover:text-white transition" href="#vision">Our Vision</a></li>
<li><a className="hover:text-white transition" href="#team">Our Team</a></li>
<li className=""></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-slate-200" style={{}}>Products</h4>
<ul className="mt-3 space-y-2 text-slate-400">
<li className=""><a className="hover:text-white transition" href="#bmex">BMeX Exchange</a></li>
<li className=""><a className="hover:text-white transition" href="#boss">BossMagics</a></li>
<li className=""></li>
<li className=""></li>
</ul>
</div>
<div className="">
<h4 className="text-slate-200 font-medium">Services</h4>
<ul className="mt-3 space-y-2 text-slate-400">
<li className=""><a className="hover:text-white transition" href="#advisory">Strategic Advisory</a></li>
<li className=""><a className="hover:text-white transition" href="#infra">Digital Infrastructure</a></li>
<li className=""><a className="hover:text-white transition" href="#consulting">Consulting</a></li>
<li><a className="hover:text-white transition" href="#mna">M&amp;A Advisory</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-200 font-medium">Legal &amp; Resources</h4>
<ul className="mt-3 space-y-2 text-slate-400">
<li><a className="hover:text-white transition" href="#blog">Blog / News</a></li>
<li><a className="hover:text-white transition" href="#privacy">Privacy Policy</a></li>
<li><a className="hover:text-white transition" href="#terms">Terms of Use</a></li>
<li><a className="hover:text-white transition" href="#security">Security</a></li>
</ul>
</div>
</div>

<div className="mt-10 border-t border-slate-800/80 pt-6">
<div className="flex items-center justify-between gap-4">
<div className="w-full overflow-x-auto">
</div>
</div>
<div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
<span>© 2025 BrandMagics. All rights reserved.</span>
<span className="flex items-center gap-2">
<svg className="lucide lucide-shield h-3.5 w-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              Built for global scale and compliance
            </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
