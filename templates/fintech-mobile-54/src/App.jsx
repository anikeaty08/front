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
      
<div className="max-w-7xl mx-auto space-y-24">

<header className="space-y-4">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 text-white mb-2 shadow-sm shadow-zinc-900/10">
<span className="text-xl tracking-tight font-medium leading-none">P</span>
</div>
<h1 className="text-4xl tracking-tight font-medium text-zinc-900">Design System</h1>
<p className="text-base text-zinc-500 max-w-xl">A comprehensive component library and token system for high-velocity, low-friction mobile financial transactions.</p>
</header>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-8">
<h2 className="text-2xl tracking-tight font-medium border-b border-zinc-200 pb-4">Color Tokens</h2>
<div className="space-y-6">
<div>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-3 block">Primary &amp; Interactive</span>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="space-y-2"><div className="h-16 rounded-2xl bg-blue-600 shadow-sm shadow-blue-600/20 ring-1 ring-inset ring-black/5"></div><div className="text-xs text-zinc-600">Primary Blue</div></div>
<div className="space-y-2"><div className="h-16 rounded-2xl bg-zinc-900 shadow-sm shadow-zinc-900/20 ring-1 ring-inset ring-white/10"></div><div className="text-xs text-zinc-600">Deep Indigo</div></div>
<div className="space-y-2"><div className="h-16 rounded-2xl bg-blue-50 ring-1 ring-inset ring-black/5"></div><div className="text-xs text-zinc-600">Blue 50</div></div>
</div>
</div>
<div>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-3 block">Status</span>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="space-y-2"><div className="h-16 rounded-2xl bg-emerald-500 shadow-sm shadow-emerald-500/20 ring-1 ring-inset ring-black/5"></div><div className="text-xs text-zinc-600">Success</div></div>
<div className="space-y-2"><div className="h-16 rounded-2xl bg-rose-500 shadow-sm shadow-rose-500/20 ring-1 ring-inset ring-black/5"></div><div className="text-xs text-zinc-600">Error</div></div>
<div className="space-y-2"><div className="h-16 rounded-2xl bg-amber-500 shadow-sm shadow-amber-500/20 ring-1 ring-inset ring-black/5"></div><div className="text-xs text-zinc-600">Warning</div></div>
</div>
</div>
<div>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-3 block">Surfaces &amp; Borders</span>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="space-y-2"><div className="h-16 rounded-2xl bg-white shadow-sm ring-1 ring-inset ring-black/5"></div><div className="text-xs text-zinc-600">Surface 0</div></div>
<div className="space-y-2"><div className="h-16 rounded-2xl bg-zinc-50 ring-1 ring-inset ring-black/5"></div><div className="text-xs text-zinc-600">Surface 50</div></div>
<div className="space-y-2"><div className="h-16 rounded-2xl bg-zinc-100 ring-1 ring-inset ring-black/5"></div><div className="text-xs text-zinc-600">Surface 100</div></div>
<div className="space-y-2"><div className="h-16 rounded-2xl bg-zinc-200 ring-1 ring-inset ring-black/5"></div><div className="text-xs text-zinc-600">Border 200</div></div>
</div>
</div>
</div>
</div>

<div className="space-y-8">
<h2 className="text-2xl tracking-tight font-medium border-b border-zinc-200 pb-4">Typography Scale</h2>
<div className="space-y-6 bg-white p-8 rounded-[32px] shadow-sm border border-zinc-100">
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-4">
<div className="text-5xl tracking-tight font-medium text-zinc-900">$4,250.00</div>
<div className="text-xs text-zinc-400 font-medium">Display</div>
</div>
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-4">
<div className="text-3xl tracking-tight font-medium text-zinc-900">Heading 1</div>
<div className="text-xs text-zinc-400 font-medium">H1</div>
</div>
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-4">
<div className="text-xl tracking-tight font-medium text-zinc-900">Heading 2</div>
<div className="text-xs text-zinc-400 font-medium">H2</div>
</div>
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-4">
<div className="text-base font-medium text-zinc-900">Body Emphasis</div>
<div className="text-xs text-zinc-400 font-medium">Body L</div>
</div>
<div className="flex items-baseline justify-between border-b border-zinc-100 pb-4">
<div className="text-sm text-zinc-600">Regular body text for transaction descriptions.</div>
<div className="text-xs text-zinc-400 font-medium">Body M</div>
</div>
<div className="flex items-baseline justify-between">
<div className="text-xs text-zinc-500 font-medium">CAPTION &amp; LABELS</div>
<div className="text-xs text-zinc-400 font-medium">Caption</div>
</div>
</div>
</div>
</section>

<section className="space-y-8">
<h2 className="text-2xl tracking-tight font-medium border-b border-zinc-200 pb-4">Component Library</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-[32px] shadow-sm border border-zinc-100 space-y-6">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest block">Interactive Elements</span>
<button className="w-full h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center gap-2 font-medium transition-all hover:bg-blue-700 active:scale-[0.98] shadow-sm shadow-blue-600/20">
                        Primary Button
                    </button>
<button className="w-full h-14 bg-zinc-900 text-white rounded-2xl flex items-center justify-center gap-2 font-medium transition-all hover:bg-zinc-800 active:scale-[0.98] shadow-sm shadow-zinc-900/20">
                        Secondary Dark
                    </button>
<button className="w-full h-14 bg-white text-zinc-900 border border-zinc-200 rounded-2xl flex items-center justify-center gap-2 font-medium transition-all hover:bg-zinc-50 active:scale-[0.98] shadow-sm">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
                        Outline with Icon
                    </button>
<button className="w-full h-14 bg-zinc-50 text-zinc-500 rounded-2xl flex items-center justify-center gap-2 font-medium cursor-not-allowed">
                        Disabled State
                    </button>
<div className="flex items-center justify-between pt-4 border-t border-zinc-100">
<span className="text-sm text-zinc-600">Quick Toggle</span>
<div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer transition-colors duration-200">
<div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-6 shadow-sm transition-transform duration-200"></div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-sm border border-zinc-100 space-y-6">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest block">Input Fields</span>
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 font-medium px-1">Amount to send</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-xl font-medium">$</span>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl h-14 pl-8 pr-4 text-xl tracking-tight font-medium text-zinc-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all" placeholder="0.00" type="text" value="150.00"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 font-medium px-1">Recipient ID / Phone</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 flex items-center">
<iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon>
</span>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl h-14 pl-10 pr-4 text-sm font-medium text-zinc-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-zinc-400 placeholder:font-normal" placeholder="@username or number" type="text"/>
</div>
</div>
<div className="space-y-2 pt-2">
<label className="text-xs text-zinc-500 font-medium px-1 block text-center">Enter PIN</label>
<div className="flex gap-3 justify-center">
<div className="w-12 h-14 rounded-2xl border border-blue-500 ring-1 ring-blue-500 bg-white flex items-center justify-center text-xl font-medium shadow-sm">4</div>
<div className="w-12 h-14 rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-center text-xl font-medium"></div>
<div className="w-12 h-14 rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-center text-xl font-medium"></div>
<div className="w-12 h-14 rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-center text-xl font-medium"></div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[32px] shadow-sm border border-zinc-100 space-y-6">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest block">Data &amp; Feedback</span>

<div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-500">
<iconify-icon className="text-lg" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Transfer limit reached</h4>
<p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">Verify your identity to increase your daily limit up to $10,000.</p>
</div>
</div>

<div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-emerald-900">Payment successful</h4>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 transition-colors -mx-3 cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:shop-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Coffee Shop</h4>
<p className="text-xs text-zinc-500">Today, 09:41 AM</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-zinc-900 block">-$4.50</span>
<span className="text-xs text-zinc-400">Completed</span>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-8 pb-24">
<h2 className="text-2xl tracking-tight font-medium border-b border-zinc-200 pb-4">Screen Compositions</h2>
<p className="text-sm text-zinc-500 max-w-2xl">Production-ready mobile layouts utilizing the token system. Designed for typical device viewports with safe areas and ergonomic touch targets.</p>
<div className="flex flex-wrap items-start justify-center gap-12 pt-8">

<div className="w-full max-w-[375px] aspect-[9/19.5] bg-zinc-50 rounded-[40px] shadow-2xl shadow-zinc-900/10 border-8 border-white relative overflow-hidden flex flex-col shrink-0">

<div className="px-6 pt-12 pb-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden border border-zinc-300">
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=33"/>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Good morning,</span>
<span className="text-sm font-medium text-zinc-900">Alex M.</span>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm relative">
<div className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></div>
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar px-6 pb-32">

<div className="bg-zinc-900 rounded-[28px] p-6 text-white relative overflow-hidden shadow-lg shadow-zinc-900/20 mb-6 mt-2">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Total Balance</span>
<iconify-icon className="text-zinc-500 text-sm cursor-pointer" icon="solar:eye-linear"></iconify-icon>
</div>
<div className="text-[40px] tracking-tight font-medium mb-6">$4,250<span className="text-zinc-500">.00</span></div>
<div className="flex items-center gap-3">
<button className="flex-1 h-12 bg-white text-zinc-900 rounded-xl flex items-center justify-center gap-2 font-medium text-sm transition-transform active:scale-95">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
                                        Send
                                    </button>
<button className="flex-1 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center gap-2 font-medium text-sm border border-white/10 backdrop-blur-md transition-transform active:scale-95 hover:bg-white/20">
<iconify-icon className="text-lg" icon="solar:arrow-left-down-linear"></iconify-icon>
                                        Receive
                                    </button>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-4 mb-8">
<div className="flex flex-col items-center gap-2">
<button className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm active:scale-95 transition-transform">
<iconify-icon className="text-2xl" icon="solar:wallet-add-linear"></iconify-icon>
</button>
<span className="text-xs font-medium text-zinc-600">Top Up</span>
</div>
<div className="flex flex-col items-center gap-2">
<button className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm active:scale-95 transition-transform">
<iconify-icon className="text-2xl" icon="solar:link-linear"></iconify-icon>
</button>
<span className="text-xs font-medium text-zinc-600">Pay Link</span>
</div>
<div className="flex flex-col items-center gap-2">
<button className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm active:scale-95 transition-transform">
<iconify-icon className="text-2xl" icon="solar:bill-linear"></iconify-icon>
</button>
<span className="text-xs font-medium text-zinc-600">Bills</span>
</div>
<div className="flex flex-col items-center gap-2">
<button className="w-14 h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-700 shadow-sm active:scale-95 transition-transform">
<iconify-icon className="text-2xl" icon="solar:widget-linear"></iconify-icon>
</button>
<span className="text-xs font-medium text-zinc-600">More</span>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg tracking-tight font-medium text-zinc-900">Recent</h3>
<button className="text-sm font-medium text-blue-600">See all</button>
</div>
<div className="space-y-4 bg-white p-2 rounded-[24px] border border-zinc-100 shadow-sm">
<div className="flex items-center justify-between p-2 rounded-2xl active:bg-zinc-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:shop-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Whole Foods</h4>
<p className="text-xs text-zinc-500">Today, 10:24 AM</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-zinc-900 block">-$42.50</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-2xl active:bg-zinc-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<img alt="Avatar" className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/100?img=12"/>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Sarah Jenkins</h4>
<p className="text-xs text-zinc-500">Yesterday, 06:12 PM</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-emerald-600 block">+$150.00</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-2xl active:bg-zinc-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:map-arrow-up-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Uber Ride</h4>
<p className="text-xs text-zinc-500">Oct 24, 08:30 AM</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-medium text-zinc-900 block">-$14.20</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full bg-white border-t border-zinc-100 px-6 pt-3 pb-8 flex justify-between items-center z-20">
<div className="flex flex-col items-center gap-1 text-zinc-900 w-12 cursor-pointer">
<iconify-icon className="text-2xl" icon="solar:home-smile-bold"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 w-12 cursor-pointer transition-colors">
<iconify-icon className="text-2xl" icon="solar:history-linear"></iconify-icon>
</div>

<div className="w-16 relative flex justify-center">
<div className="absolute bottom-0 w-16 h-16 bg-blue-600 rounded-[20px] flex items-center justify-center text-white shadow-lg shadow-blue-600/30 cursor-pointer hover:bg-blue-700 active:scale-95 transition-all -translate-y-6 rotate-45">
<div className="-rotate-45 flex items-center justify-center">
<iconify-icon className="text-[28px]" icon="solar:scanner-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 w-12 cursor-pointer transition-colors">
<iconify-icon className="text-2xl" icon="solar:chart-linear"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 w-12 cursor-pointer transition-colors">
<iconify-icon className="text-2xl" icon="solar:user-linear"></iconify-icon>
</div>
</div>
</div>

<div className="w-full max-w-[375px] aspect-[9/19.5] bg-zinc-900 rounded-[40px] shadow-2xl shadow-zinc-900/10 border-8 border-white relative overflow-hidden flex flex-col shrink-0">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 opacity-80"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
<div className="relative z-10 flex flex-col h-full">

<div className="px-6 pt-12 pb-4 flex items-center justify-between text-white">
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<span className="text-sm font-medium tracking-wide">Scan to Pay</span>
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
<iconify-icon className="text-xl" icon="solar:flashlight-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 flex flex-col items-center justify-center px-8 relative">
<p className="text-white/70 text-sm font-medium mb-8 text-center px-4">Align QR code within the frame to scan automatically.</p>

<div className="w-64 h-64 relative">
<div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] rounded-2xl border border-white/10"></div>
<div className="qr-corner qr-tl"></div>
<div className="qr-corner qr-tr"></div>
<div className="qr-corner qr-bl"></div>
<div className="qr-corner qr-br"></div>

<div className="absolute left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] top-1/2 -translate-y-1/2 animate-pulse"></div>
</div>
<div className="mt-8 flex gap-4">
<button className="px-6 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-md border border-white/10 flex items-center gap-2 hover:bg-white/20 transition-colors">
<iconify-icon className="text-lg" icon="solar:gallery-linear"></iconify-icon>
                                    Upload
                                </button>
</div>
</div>

<div className="bg-white rounded-t-[32px] p-6 pb-10 transform translate-y-0 transition-transform mt-auto">
<div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto mb-6"></div>
<div className="flex items-center justify-center gap-3 text-zinc-900 mb-2 cursor-pointer">
<iconify-icon className="text-xl text-blue-600" icon="solar:qr-code-linear"></iconify-icon>
<span className="font-medium">Show my QR Code</span>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="w-full max-w-[375px] aspect-[9/19.5] bg-zinc-100 rounded-[40px] shadow-2xl shadow-zinc-900/10 border-8 border-white relative overflow-hidden flex flex-col shrink-0">

<div className="px-6 pt-12 pb-4 flex items-center justify-between">
<button className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm active:scale-95 transition-transform">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<span className="text-sm font-medium text-zinc-900 tracking-wide">Receipt</span>
<div className="w-10"></div> 
</div>

<div className="flex-1 px-6 pb-8 flex flex-col">
<div className="bg-white rounded-[32px] p-6 shadow-sm border border-zinc-200/60 flex-1 flex flex-col items-center text-center relative mt-8">

<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white border-[6px] border-zinc-100 shadow-sm">
<iconify-icon className="text-[40px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="mt-12 mb-6">
<p className="text-sm text-zinc-500 font-medium mb-1">Transfer Success</p>
<h2 className="text-[40px] tracking-tight font-medium text-zinc-900">$150<span className="text-zinc-400">.00</span></h2>
</div>
<div className="w-full border-t border-dashed border-zinc-200 my-4 relative">
<div className="absolute -left-8 -top-3 w-6 h-6 bg-zinc-100 rounded-full"></div>
<div className="absolute -right-8 -top-3 w-6 h-6 bg-zinc-100 rounded-full"></div>
</div>

<div className="w-full space-y-5 pt-2 text-left">
<div className="flex justify-between items-center">
<span className="text-sm text-zinc-500">Recipient</span>
<div className="flex items-center gap-2">
<img alt="User" className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/100?img=47"/>
<span className="text-sm font-medium text-zinc-900">David Miller</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-zinc-500">Date</span>
<span className="text-sm font-medium text-zinc-900">Oct 24, 2023 at 14:32</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-zinc-500">Ref Number</span>
<div className="flex items-center gap-1 cursor-pointer">
<span className="text-sm font-medium text-zinc-900">TRX-998273</span>
<iconify-icon className="text-zinc-400" icon="solar:copy-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-zinc-500">Fee</span>
<span className="text-sm font-medium text-zinc-900">No fee</span>
</div>
</div>
</div>

<div className="mt-6 space-y-3">
<button className="w-full h-14 bg-zinc-900 text-white rounded-2xl flex items-center justify-center gap-2 font-medium transition-all hover:bg-zinc-800 active:scale-[0.98] shadow-sm shadow-zinc-900/20">
<iconify-icon className="text-xl" icon="solar:share-linear"></iconify-icon>
                                Share Receipt
                            </button>
<button className="w-full h-14 bg-white text-zinc-900 border border-zinc-200 rounded-2xl flex items-center justify-center font-medium transition-all hover:bg-zinc-50 active:scale-[0.98]">
                                Back to Home
                            </button>
</div>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
