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
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'scroll-x': 'scrollX 40s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
scrollX: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white opacity-80"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-[0.03] mask-image:linear-gradient(to_bottom,black,transparent)"></div>
</div>

<nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon className="text-base" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-slate-900">SubSync</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#">Analytics</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#">Changelog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">Log in</a>
<button className="bg-slate-900 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm">
                Get Started
            </button>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center pt-20 pb-24 px-4 sm:px-6 w-full max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                New: Automatic receipt scanning
            </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.05]">
                Stop paying for <br className="hidden sm:block"/> things you don't use.
            </h1>
<p className="text-lg sm:text-xl font-normal text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Connect your accounts and let SubSync automatically find, track, and manage your recurring subscriptions in one centralized dashboard.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<button className="w-full sm:w-auto bg-slate-900 text-white text-base font-medium px-8 py-3 rounded-full hover:bg-slate-800 transition-all shadow-sm flex items-center justify-center gap-2">
                    Start tracking for free
                </button>
<button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 text-base font-medium px-8 py-3 rounded-full hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
                    Watch demo
                </button>
</div>
</div>

<div className="w-full max-w-5xl bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200/60 overflow-hidden flex flex-col md:flex-row relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>

<aside className="hidden md:flex flex-col w-60 border-r border-slate-100 bg-slate-50/50 p-5">
<div className="mb-8 px-2">
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Menu</span>
</div>
<nav className="space-y-1 mb-8">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-900 text-white font-medium text-sm shadow-sm" href="#">
<iconify-icon className="text-lg" icon="solar:widget-2-linear" strokeWidth="1.5"></iconify-icon>
                        Overview
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors font-medium text-sm" href="#">
<iconify-icon className="text-lg" icon="solar:list-check-linear" strokeWidth="1.5"></iconify-icon>
                        Subscriptions
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors font-medium text-sm" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                        Analytics
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors font-medium text-sm flex-1 justify-between" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
                            Alerts
                        </div>
<span className="bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded text-[10px] font-medium">3</span>
</a>
</nav>
<div className="mt-auto">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors font-medium text-sm" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                        Settings
                    </a>
<div className="mt-4 pt-4 border-t border-slate-200/60 px-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=33"/>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-slate-900 truncate">Alex Rivera</p>
<p className="text-xs text-slate-500 truncate">Pro Plan</p>
</div>
</div>
</div>
</aside>

<div className="flex-1 bg-white p-6 md:p-8 overflow-y-auto">

<header className="flex items-center justify-between mb-8">
<div>
<h2 className="text-xl font-medium tracking-tight text-slate-900">Monthly Overview</h2>
<p className="text-sm text-slate-500 font-normal mt-1">October 2023</p>
</div>
<button className="bg-white border border-slate-200 text-slate-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
<iconify-icon className="text-lg" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Add Manual
                    </button>
</header>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
<div className="p-5 rounded-xl border border-slate-100 bg-slate-50/50">
<p className="text-sm font-medium text-slate-500 mb-2">Total Spend</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$184.97</span>
<span className="text-xs font-medium text-rose-500 mb-1 flex items-center"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +12%</span>
</div>
</div>
<div className="p-5 rounded-xl border border-slate-100 bg-slate-50/50">
<p className="text-sm font-medium text-slate-500 mb-2">Active Subs</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">14</span>
<span className="text-xs font-medium text-slate-400 mb-1">Services</span>
</div>
</div>
<div className="p-5 rounded-xl border border-slate-100 bg-slate-50/50">
<p className="text-sm font-medium text-slate-500 mb-2">Upcoming (7d)</p>
<div className="flex items-end gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$45.00</span>
<span className="text-xs font-medium text-amber-500 mb-1">3 billing soon</span>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-slate-900 mb-4 px-1">Recent &amp; Upcoming</h3>
<div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">

<div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-5 py-3 bg-slate-50 text-xs font-medium text-slate-500 uppercase tracking-wider border-b border-slate-100">
<div>Service</div>
<div className="hidden sm:block text-right w-24">Billing Date</div>
<div className="text-right w-20">Amount</div>
<div className="w-20 text-right">Status</div>
</div>

<div className="divide-y divide-slate-100">
<div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-5 py-4 items-center hover:bg-slate-50/80 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100">
<iconify-icon className="text-xl" icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Netflix</p>
<p className="text-xs text-slate-500">Premium Plan</p>
</div>
</div>
<div className="hidden sm:block text-sm text-slate-500 text-right w-24">Oct 12</div>
<div className="text-sm font-medium text-slate-900 text-right w-20">$22.99</div>
<div className="w-20 flex justify-end">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium border border-green-100">Active</span>
</div>
</div>
<div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-5 py-4 items-center hover:bg-slate-50/80 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
<iconify-icon className="text-xl" icon="solar:music-note-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Spotify</p>
<p className="text-xs text-slate-500">Family Plan</p>
</div>
</div>
<div className="hidden sm:block text-sm text-amber-600 font-medium text-right w-24">Tomorrow</div>
<div className="text-sm font-medium text-slate-900 text-right w-20">$16.99</div>
<div className="w-20 flex justify-end">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium border border-green-100">Active</span>
</div>
</div>
<div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-5 py-4 items-center hover:bg-slate-50/80 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
<iconify-icon className="text-xl" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Figma</p>
<p className="text-xs text-slate-500">Professional</p>
</div>
</div>
<div className="hidden sm:block text-sm text-slate-500 text-right w-24">Oct 15</div>
<div className="text-sm font-medium text-slate-900 text-right w-20">$15.00</div>
<div className="w-20 flex justify-end">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium border border-green-100">Active</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Everything you need to regain control</h2>
<p className="text-base text-slate-500 font-normal">Stop managing spreadsheets. SubSync provides the tools to automatically organize your digital spending.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
<div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-6">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Auto-Discovery</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">Connect your bank or email securely, and we'll automatically detect past and active subscriptions you might have forgotten about.</p>
</div>
<div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-6">
<iconify-icon className="text-2xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Smart Alerts</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">Get notified before a free trial ends or an annual subscription renews. Never get caught by a surprise charge again.</p>
</div>
<div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-900 mb-6">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">1-Click Cancel</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">We provide direct links and automated emails to cancel services instantly. Stop navigating confusing cancellation mazes.</p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-slate-100">

<div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
<div className="w-full lg:w-1/2">
<div className="w-full aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center p-8 relative overflow-hidden">

<div className="w-full h-full bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col">
<div className="flex justify-between items-center mb-8">
<span className="text-sm font-medium text-slate-900">Spending Trends</span>
<div className="flex gap-2">
<span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">6 Months</span>
</div>
</div>
<div className="flex-1 flex items-end gap-3 px-2">
<div className="w-full bg-slate-100 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-slate-100 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-slate-200 h-[70%] rounded-t-sm relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-sm">Spike</div>
</div>
<div className="w-full bg-slate-100 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-slate-900 h-[48%] rounded-t-sm shadow-sm"></div>
</div>
<div className="flex justify-between mt-4 text-[10px] font-medium text-slate-400 px-2">
<span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span className="text-slate-900">Oct</span>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<span className="text-xs font-medium tracking-widest text-slate-400 uppercase mb-4 block">Analytics</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Understand where your money goes</h2>
<p className="text-base text-slate-500 font-normal leading-relaxed mb-8">
                    Visualize your spending over time. SubSync categorizes your subscriptions (entertainment, software, utilities) so you can identify areas to cut back and optimize your monthly budget.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-slate-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Category breakdown
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-slate-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Monthly vs Annual cost projection
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-slate-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Export to CSV or accounting software
                    </li>
</ul>
</div>
</div>

<div className="flex flex-col-reverse lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<span className="text-xs font-medium tracking-widest text-slate-400 uppercase mb-4 block">Custom Notifications</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Never miss a cancellation window</h2>
<p className="text-base text-slate-500 font-normal leading-relaxed mb-8">
                    Set up custom alerts for free trials and annual renewals. We'll send you a push notification or email exactly when you need to decide whether to keep or cancel a service.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400 text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Email Alerts</span>
</div>
<div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer shadow-inner">
<div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-[2px] shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400 text-xl" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Push Notifications</span>
</div>
<div className="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer shadow-inner">
<div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-[2px] shadow-sm"></div>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<div className="w-full aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center p-8 relative overflow-hidden">

<div className="w-80 bg-white rounded-2xl shadow-lg border border-slate-100 p-5 transform rotate-2 hover:rotate-0 transition-transform duration-300">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-slate-900">SubSync Alert</p>
<p className="text-[10px] text-slate-400">Just now</p>
</div>
</div>
<p className="text-sm font-medium text-slate-900 mb-1">Adobe Creative Cloud renewing soon</p>
<p className="text-xs text-slate-500 mb-4 leading-relaxed">Your annual subscription of $599.88 will renew in 3 days. Do you want to keep it?</p>
<div className="flex gap-2">
<button className="flex-1 py-2 bg-slate-100 text-slate-900 text-xs font-medium rounded-lg">Cancel Service</button>
<button className="flex-1 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg">Keep</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-t border-slate-100 py-20 bg-slate-50 overflow-hidden relative z-10">
<div className="text-center mb-10">
<p className="text-sm font-medium text-slate-500">Trusted by thousands of people to manage their spending</p>
</div>
<div className="relative w-full max-w-5xl mx-auto overflow-hidden">
<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
<div className="flex animate-scroll-x w-max gap-6 px-4">

<div className="flex gap-6">
<div className="w-80 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4 font-normal leading-relaxed">"Found 3 subscriptions I haven't used in months. Saved me over $400 a year instantly. Best app ever."</p>
<p className="text-xs font-medium text-slate-900">Sarah Jenkins</p>
</div>
<div className="w-80 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4 font-normal leading-relaxed">"The UI is so clean and it just works. I love getting pinged before an annual renewal hits my card."</p>
<p className="text-xs font-medium text-slate-900">Mark T.</p>
</div>
<div className="w-80 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4 font-normal leading-relaxed">"Finally, a single place to see what my family is paying for. Cancelled two duplicate streaming accounts."</p>
<p className="text-xs font-medium text-slate-900">Elena R.</p>
</div>
</div>

<div className="flex gap-6">
<div className="w-80 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4 font-normal leading-relaxed">"Found 3 subscriptions I haven't used in months. Saved me over $400 a year instantly. Best app ever."</p>
<p className="text-xs font-medium text-slate-900">Sarah Jenkins</p>
</div>
<div className="w-80 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4 font-normal leading-relaxed">"The UI is so clean and it just works. I love getting pinged before an annual renewal hits my card."</p>
<p className="text-xs font-medium text-slate-900">Mark T.</p>
</div>
<div className="w-80 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-4 font-normal leading-relaxed">"Finally, a single place to see what my family is paying for. Cancelled two duplicate streaming accounts."</p>
<p className="text-xs font-medium text-slate-900">Elena R.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Simple, transparent pricing</h2>
<p className="text-base text-slate-500 font-normal">Start organizing for free. Upgrade when you need advanced alerts and family sharing.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col">
<h3 className="text-lg font-medium text-slate-900 mb-2">Basic</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">Free</span>
</div>
<p className="text-sm text-slate-500 font-normal mb-8 leading-relaxed">Perfect for individuals wanting to get a grip on their basic subscriptions.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Track up to 10 subscriptions
                    </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Basic analytics dashboard
                    </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-slate-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Email notifications (3 days prior)
                    </li>
</ul>
<button className="w-full py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors">
                    Get Started
                </button>
</div>

<div className="p-8 rounded-3xl border-2 border-slate-900 bg-white shadow-md flex flex-col relative">
<div className="absolute top-0 right-8 -translate-y-1/2 bg-slate-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                </div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Pro</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$4</span>
<span className="text-sm text-slate-500 font-medium">/month</span>
</div>
<p className="text-sm text-slate-500 font-normal mb-8 leading-relaxed">For power users who want total control, automated tracking, and family sharing.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm font-medium text-slate-900">
<iconify-icon className="text-slate-900 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Unlimited subscriptions
                    </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-900">
<iconify-icon className="text-slate-900 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Bank &amp; Email auto-sync
                    </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-900">
<iconify-icon className="text-slate-900 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Custom push alerts &amp; timing
                    </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-900">
<iconify-icon className="text-slate-900 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Share with 1 family member
                    </li>
</ul>
<button className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
                    Upgrade to Pro
                </button>
</div>
</div>
</section>

<footer className="w-full border-t border-slate-100 bg-white mt-auto py-12 px-6 z-10 relative">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-5 h-5 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon className="text-xs" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight text-slate-900">SubSync</span>
</div>
<p className="text-sm text-slate-500 font-normal">Track less, live more.</p>
</div>
<div className="flex gap-8 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
