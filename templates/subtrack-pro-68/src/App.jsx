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
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/40">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-semibold shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]">
<iconify-icon icon="solar:chat-round-money-linear" width="18"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">SubTrack</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-300" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-300" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
</div>
<div className="flex gap-4 items-center">
<button className="hidden md:block text-xs font-medium text-zinc-400 hover:text-white transition-colors">Log in</button>
<button className="text-xs font-semibold bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">Get Started</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 rounded-[100%] blur-[120px] -z-10 pointer-events-none opacity-60 mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none opacity-40"></div>
<div className="max-w-7xl mx-auto px-6 text-center perspective-2000">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8 animate-[fade-in-up_1s_ease-out] shadow-[0_0_20px_-8px_rgba(16,185,129,0.5)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span>AI-Powered Expense Tracking</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight mb-8 leading-[0.95] drop-shadow-2xl">
                Track subs in <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400">WhatsApp</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                Stop overpaying for forgotten subscriptions. Get instant alerts, payment summaries, and unsubscribe with one tap—all within your chats.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
<button className="group w-full sm:w-auto h-12 px-8 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]">
                    Start Free Trial
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-zinc-300 font-medium hover:bg-zinc-800 transition-colors hover:border-zinc-700 flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] group">
<div className="relative w-full h-full transform-style-3d transition-transform duration-700 ease-out rotate-x-[15deg] rotate-y-0 rotate-z-0 group-hover:rotate-x-[5deg] scale-[0.85] md:scale-100">

<div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col transform transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.15)]">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
</div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<div className="text-xs text-zinc-500 font-mono flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
                                    secure.subtrack.pro
                                </div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:bell-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-white/10"></div>
</div>
</div>

<div className="p-8 grid grid-cols-12 gap-6 h-full">

<div className="col-span-3 border-r border-white/5 hidden md:block pr-6 space-y-6">
<div className="space-y-1">
<div className="h-8 w-full bg-white/5 rounded-md flex items-center px-3 gap-2 text-white text-xs font-medium border border-white/5">
<iconify-icon icon="solar:home-smile-linear"></iconify-icon> Overview
                                    </div>
<div className="h-8 w-full hover:bg-white/5 rounded-md flex items-center px-3 gap-2 text-zinc-500 text-xs font-medium transition-colors cursor-pointer">
<iconify-icon icon="solar:card-linear"></iconify-icon> Subscriptions
                                    </div>
<div className="h-8 w-full hover:bg-white/5 rounded-md flex items-center px-3 gap-2 text-zinc-500 text-xs font-medium transition-colors cursor-pointer">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon> Analytics
                                    </div>
</div>
<div className="pt-6 border-t border-white/5">
<div className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold mb-3">Linked Apps</div>
<div className="flex items-center gap-2 text-emerald-400 text-xs bg-emerald-500/5 p-2 rounded border border-emerald-500/10">
<iconify-icon icon="solar:chat-round-check-linear"></iconify-icon>
                                        WhatsApp Active
                                    </div>
</div>
</div>

<div className="col-span-12 md:col-span-9">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-5 rounded-xl bg-zinc-800/30 border border-white/5">
<div className="text-zinc-500 text-xs font-medium mb-1">Monthly Spend</div>
<div className="text-2xl text-white font-semibold tracking-tight">$342.00</div>
</div>
<div className="p-5 rounded-xl bg-zinc-800/30 border border-white/5">
<div className="text-zinc-500 text-xs font-medium mb-1">Active Subs</div>
<div className="text-2xl text-white font-semibold tracking-tight">12 <span className="text-sm text-zinc-600 font-normal">Services</span></div>
</div>
</div>
<div className="w-full h-px bg-white/5 mb-6"></div>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">N</div>
<div>
<div className="text-white text-xs font-medium">Netflix Premium</div>
<div className="text-zinc-600 text-[10px]">Renews in 2 days</div>
</div>
</div>
<div className="text-white text-xs font-medium">$19.99</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">D</div>
<div>
<div className="text-white text-xs font-medium">Dropbox Pro</div>
<div className="text-zinc-600 text-[10px]">Renews in 14 days</div>
</div>
</div>
<div className="text-white text-xs font-medium">$11.99</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 opacity-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400">S</div>
<div>
<div className="text-white text-xs font-medium">Spotify Duo</div>
<div className="text-zinc-600 text-[10px]">Canceled</div>
</div>
</div>
<div className="text-zinc-500 text-xs font-medium decoration-line-through">$14.99</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 md:-right-12 top-20 w-64 bg-zinc-900 border border-white/10 rounded-xl p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transform-style-3d animate-float-slow backdrop-blur-md">
<div className="flex items-center gap-3 mb-3 border-b border-white/5 pb-3">
<div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:chat-round-linear"></iconify-icon>
</div>
<div>
<div className="text-white text-xs font-semibold">SubTrack AI</div>
<div className="text-emerald-500 text-[10px]">Typing...</div>
</div>
</div>
<div className="space-y-2">
<div className="bg-zinc-800/50 rounded-lg rounded-tl-none p-2.5 text-[11px] text-zinc-300 leading-relaxed border border-white/5">
                                Hey! Just a heads up, your Adobe renewal for <strong>$54.99</strong> is coming up tomorrow.
                            </div>
<div className="flex gap-2">
<button className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-medium py-1.5 rounded transition-colors">Okay</button>
<button className="flex-1 bg-white/5 hover:bg-white/10 text-zinc-400 text-[10px] font-medium py-1.5 rounded transition-colors">Cancel It</button>
</div>
</div>
</div>

<div className="absolute -left-4 md:-left-8 bottom-32 w-48 bg-zinc-900 border border-emerald-500/20 rounded-xl p-4 shadow-[0_20px_40px_-10px_rgba(16,185,129,0.1)] transform-style-3d animate-float-delayed backdrop-blur-md">
<div className="flex items-center justify-between mb-2">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">+12%</span>
</div>
<div className="text-zinc-400 text-[10px] font-medium uppercase tracking-wider mb-0.5">Total Saved</div>
<div className="text-2xl text-white font-semibold tracking-tight">$1,240</div>
</div>
</div>
</div>

<div className="absolute bottom-[0] left-1/2 -translate-x-1/2 w-[80%] h-20 bg-emerald-500/20 blur-[80px] -z-10 pointer-events-none"></div>
</div>
</header>

<section className="py-24 bg-zinc-950 border-t border-white/5 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Powerful Features</h2>
<p className="text-zinc-400 text-lg font-light">Everything you need to control your subscriptions without leaving your favorite chat app.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/40">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:chat-round-line-duotone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">WhatsApp Integration</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Manage subscriptions naturally through chat. No app downloads needed. Just message us like a friend.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/40">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Smart Reminders</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Get notified before payments happen. Never miss a renewal date or get surprised by a yearly bill again.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/40">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Analytics &amp; Insights</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Visualize spending patterns with AI-powered recommendations to understand where your money goes.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/40">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Cost Optimization</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Our AI finds duplicate services and discovers better plan alternatives to instantly lower your bills.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/40">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Family Sharing</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Share or manage billing securely with family members without sharing credit card details directly.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/40">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Multi-Currency</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Track expenses in 150+ currencies with real-time conversion rates. Perfect for digital nomads.</p>
</div>
</div>

<div className="mt-24 max-w-6xl mx-auto">
<div className="text-center mb-10">
<h3 className="text-2xl font-semibold text-white tracking-tight">Deep Dive into your Data</h3>
</div>

<div className="rounded-xl border border-white/10 bg-zinc-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row">

<div className="w-full md:w-64 bg-zinc-950 border-r border-white/5 flex flex-col justify-between shrink-0">
<div>
<div className="p-6">
<div className="flex items-center gap-2 mb-1">
<div className="w-6 h-6 rounded bg-emerald-600 flex items-center justify-center text-white">
<i className="w-3.5 h-3.5" data-lucide="layout-grid"></i>
</div>
<span className="font-semibold text-white tracking-tight">SubTrack Pro</span>
</div>
<div className="text-[10px] text-zinc-500 font-medium pl-8">Smart Subscription Manager</div>
</div>
<nav className="px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-lg hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" data-lucide="layout-grid"></i>
                                    Dashboard
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-lg hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" data-lucide="message-circle"></i>
                                    WhatsApp Chat
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-lg hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" data-lucide="credit-card"></i>
                                    Subscriptions
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-emerald-400 bg-emerald-500/10 border-l-2 border-emerald-500 rounded-r-lg transition-colors" href="#">
<i className="w-4 h-4 text-emerald-500" data-lucide="bar-chart-3"></i>
                                    Analytics
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-lg hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" data-lucide="users"></i>
                                    Family Sharing
                                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 rounded-lg hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" data-lucide="settings"></i>
                                    Settings
                                </a>
</nav>
</div>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 mb-4 px-2">
<div className="w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center font-semibold text-xs">HK</div>
<div className="overflow-hidden">
<div className="text-xs font-medium text-white truncate">Hashir Khan</div>
<div className="text-[10px] text-zinc-500 truncate">hashir@example.com</div>
</div>
</div>
<a className="flex items-center gap-3 px-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="log-out"></i>
                                Logout
                            </a>
</div>
</div>

<div className="flex-1 bg-zinc-900 p-8">

<div className="flex items-start justify-between mb-8">
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Analytics &amp; Insights</h3>
<p className="text-sm text-zinc-400">AI-powered spending analysis with real-time data</p>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 hover:bg-white/10 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="refresh-cw"></i>
                                Refresh
                            </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="p-5 rounded-xl border border-white/5 bg-zinc-950/50 hover:border-white/10 transition-colors group">
<div className="text-xs font-medium text-zinc-500 mb-2">Total Monthly</div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">$1,223.09</div>
<div className="flex items-center gap-1 text-[10px] text-orange-400">
<i className="w-3 h-3" data-lucide="trending-up"></i>
                                    Infinity% vs last month
                                </div>
</div>

<div className="p-5 rounded-xl border border-white/5 bg-zinc-950/50 hover:border-white/10 transition-colors group">
<div className="text-xs font-medium text-zinc-500 mb-2">Total Yearly</div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">$14,677.18</div>
<div className="flex items-center gap-1 text-[10px] text-zinc-500">
<i className="w-3 h-3" data-lucide="calendar"></i>
                                    Annual projection
                                </div>
</div>

<div className="p-5 rounded-xl border border-white/5 bg-zinc-950/50 hover:border-white/10 transition-colors group">
<div className="text-xs font-medium text-zinc-500 mb-2">Potential Savings</div>
<div className="text-2xl font-semibold text-emerald-400 tracking-tight mb-1">$183.33</div>
<div className="flex items-center gap-1 text-[10px] text-zinc-500">
<i className="w-3 h-3" data-lucide="trending-down"></i>
                                    Per month
                                </div>
</div>

<div className="p-5 rounded-xl border border-white/5 bg-zinc-950/50 hover:border-white/10 transition-colors group">
<div className="text-xs font-medium text-zinc-500 mb-2">Active Services</div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">3</div>
<div className="flex items-center gap-1 text-[10px] text-zinc-500">
<i className="w-3 h-3" data-lucide="layers"></i>
                                    Subscriptions
                                </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 p-6 rounded-xl border border-white/5 bg-zinc-950/50">
<div className="mb-6">
<h4 className="text-sm font-medium text-white">Monthly Spending Trend</h4>
<p className="text-xs text-zinc-500">Last 7 months based on your subscriptions</p>
</div>
<div className="relative h-48 w-full mt-4">

<div className="absolute left-0 top-0 bottom-6 w-12 flex flex-col justify-between text-[9px] text-zinc-600 text-right pr-2 font-mono">
<span>$140k</span>
<span>$105k</span>
<span>$70k</span>
<span>$35k</span>
<span>$0</span>
</div>

<div className="absolute left-12 right-0 bottom-0 h-6 flex justify-between text-[9px] text-zinc-600 pl-2 font-mono pt-2 border-t border-white/5">
<span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span>
</div>

<div className="absolute left-12 right-0 top-0 bottom-6 border-l border-white/5">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">

<line className="text-white/5" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="0" y2="0"></line>
<line className="text-white/5" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="25" y2="25"></line>
<line className="text-white/5" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50"></line>
<line className="text-white/5" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="75" y2="75"></line>

<path className="text-emerald-500" d="M0,100 L16,100 L32,100 L48,100 L64,100 L80,95 L100,20" fill="none" stroke="currentColor" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle className="fill-zinc-900 stroke-emerald-500" cx="0" cy="100" r="1.5" strokeWidth="1"></circle>
<circle className="fill-zinc-900 stroke-emerald-500" cx="16" cy="100" r="1.5" strokeWidth="1"></circle>
<circle className="fill-zinc-900 stroke-emerald-500" cx="32" cy="100" r="1.5" strokeWidth="1"></circle>
<circle className="fill-zinc-900 stroke-emerald-500" cx="48" cy="100" r="1.5" strokeWidth="1"></circle>
<circle className="fill-zinc-900 stroke-emerald-500" cx="64" cy="100" r="1.5" strokeWidth="1"></circle>
<circle className="fill-zinc-900 stroke-emerald-500" cx="80" cy="95" r="1.5" strokeWidth="1"></circle>
<circle className="fill-zinc-900 stroke-emerald-500" cx="100" cy="20" r="1.5" strokeWidth="1"></circle>
</svg>
<div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] text-emerald-500">
<i className="w-3 h-3" data-lucide="link"></i> Spending ($)
                                        </div>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-zinc-950/50 flex flex-col items-center justify-center">
<div className="w-full mb-6 text-left">
<h4 className="text-sm font-medium text-white">Spending by Category</h4>
<p className="text-xs text-zinc-500">Distribution of your 3 active subscriptions</p>
</div>
<div className="flex items-center justify-center h-48 w-full relative">

<div className="w-32 h-32 rounded-full shadow-2xl shadow-emerald-900/20" style={{background: 'conic-gradient(#10b981 0% 100%, #3b82f6 100% 100%)', position: 'relative'}}></div>

<div className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] text-emerald-400 font-medium whitespace-nowrap -ml-4">Storage 100%</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-blue-400 font-medium whitespace-nowrap -mr-4">Software 0%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Get Started in Minutes</h2>
<p className="text-zinc-400">Three simple steps to financial clarity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 z-0"></div>

<div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center group">
<div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 shadow-lg group-hover:border-emerald-500/30 transition-colors">
<iconify-icon className="text-zinc-300 text-3xl group-hover:text-emerald-400 transition-colors" icon="solar:qr-code-linear"></iconify-icon>
</div>
<div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400 font-medium mb-4">Step 01</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Connect WhatsApp</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-xs">Securely link your WhatsApp number using our verified business API. No passwords required.</p>
</div>

<div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center group">
<div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 shadow-lg group-hover:border-emerald-500/30 transition-colors">
<iconify-icon className="text-zinc-300 text-3xl group-hover:text-emerald-400 transition-colors" icon="solar:chat-square-plus-linear"></iconify-icon>
</div>
<div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400 font-medium mb-4">Step 02</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Add Subscriptions</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-xs">Chat with AI to add subscriptions manually or let us auto-detect them from your linked email receipts.</p>
</div>

<div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center group">
<div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 shadow-lg group-hover:border-emerald-500/30 transition-colors">
<iconify-icon className="text-zinc-300 text-3xl group-hover:text-emerald-400 transition-colors" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400 font-medium mb-4">Step 03</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Get Insights</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-xs">Receive timely reminders, spending analytics, and personalized savings tips directly in chat.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Simple Pricing</h2>
<p className="text-zinc-400 text-lg font-light">Choose the plan that fits your subscription lifestyle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-zinc-900/20 border border-zinc-800 rounded-2xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Free Plan</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">$0</span>
<span className="text-zinc-500">forever</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Up to 5 subscriptions
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            WhatsApp reminders
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Basic analytics
                        </li>
</ul>
<button className="w-full h-10 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-white font-medium text-sm transition-colors">Start Free Trial</button>
</div>

<div className="bg-zinc-900/40 border border-emerald-500/30 rounded-2xl p-8 flex flex-col relative shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.2)] transition-shadow">
<div className="absolute top-0 right-0 p-4">
<span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-medium">Popular</span>
</div>
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Pro Plan</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">$4.99</span>
<span className="text-zinc-500">/month</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Unlimited subscriptions
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            AI-powered insights
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Family sharing
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Priority support
                        </li>
</ul>
<button className="w-full h-10 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-colors shadow-lg shadow-emerald-900/20">Start Free Trial</button>
</div>

<div className="bg-zinc-900/20 border border-zinc-800 rounded-2xl p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Enterprise Plan</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">Custom</span>
<span className="text-zinc-500">plan</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Everything in Pro
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Dedicated account manager
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            API Access
                        </li>
</ul>
<button className="w-full h-10 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-white font-medium text-sm transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative overflow-hidden" id="reviews">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Loved by Thousands</h2>
<p className="text-zinc-400">Join the community of smart savers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 relative hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-zinc-700 text-4xl absolute top-8 right-8" icon="solar:quote-up-linear"></iconify-icon>
<div className="flex gap-1 text-emerald-500 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-lg leading-relaxed mb-6">"SubTrack Pro saved me over $500 last year by finding duplicate subscriptions. The WhatsApp integration is genius! I don't have to log into yet another app."</p>
<div>
<div className="text-white font-medium">Sarah Johnson</div>
<div className="text-zinc-500 text-sm">Product Manager</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 relative hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-zinc-700 text-4xl absolute top-8 right-8" icon="solar:quote-up-linear"></iconify-icon>
<div className="flex gap-1 text-emerald-500 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-lg leading-relaxed mb-6">"Finally, a subscription manager that actually works! No app downloads, just simple WhatsApp messages. Perfect for my family to keep track of our streaming services."</p>
<div>
<div className="text-white font-medium">Michael Chen</div>
<div className="text-zinc-500 text-sm">Software Engineer</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-zinc-900/20 border border-zinc-800 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-zinc-900/50 transition-colors">
                        How does WhatsApp integration work?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                        We use the official WhatsApp Business API to communicate securely. Once you link your number, our AI bot acts as a contact in your phone. You can text it to add bills, and it will text you reminders.
                    </div>
</details>
<details className="group bg-zinc-900/20 border border-zinc-800 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-zinc-900/50 transition-colors">
                        Is my data secure?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                        Absolutely. We use bank-level AES-256 encryption for all data storage. We do not store your credit card information directly and are fully GDPR compliant.
                    </div>
</details>
<details className="group bg-zinc-900/20 border border-zinc-800 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-zinc-900/50 transition-colors">
                        Can I share with family members?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                        Yes! With our Pro Plan, you can invite family members to view shared subscriptions or manage a household budget together.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Start Saving Today</h2>
<p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto">Join 15,000+ users taking control of their subscriptions and finances.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors">Start Free Trial</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium hover:bg-zinc-800 transition-colors">View Pricing</button>
</div>
<div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:card-linear"></iconify-icon> No credit card required</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> 14-day free trial</span>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-white/5 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">How it Works</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-emerald-600 rounded-md flex items-center justify-center text-white text-xs font-bold">S</div>
<span className="text-white font-medium tracking-tight">SubTrack Pro</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Effortless subscription management for the modern era. Track, save, and optimize via WhatsApp.
                    </p>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2023 SubTrack Pro. All rights reserved.</p>
<div className="flex gap-4 text-zinc-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
