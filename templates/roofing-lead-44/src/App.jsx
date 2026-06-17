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
colors: {
brand: {
DEFAULT: '#0119AD',
50: '#E6E8F7',
100: '#C2C8EB',
900: '#000F6B',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Sora', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
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
      

<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
<div className="absolute top-[-100px] right-0 w-[800px] h-[600px] bg-slate-200/40 rounded-full blur-[120px] opacity-50"></div>
</div>

<nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-slate-200/50">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 select-none">

<div className="flex shadow-brand/20 w-10 h-10 rounded-xl shadow-lg items-center justify-center">
<svg className="" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H19" stroke="white" strokeLinecap="round" strokeWidth="3"></path>
<path d="M5 12H15" stroke="white" strokeLinecap="round" strokeWidth="3"></path>
<path d="M5 19V5" stroke="white" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<span className="font-display font-semibold text-2xl tracking-tight text-slate-900">Fixor</span>
</div>
<div className="hidden md:flex items-center gap-8 font-medium text-lg text-slate-600">
<a className="hover:text-brand transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-brand transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-brand transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-slate-900 text-white font-medium text-lg hover:bg-brand transition-all duration-300 shadow-lg shadow-brand/10 hover:shadow-brand/25" href="#get-list">
                Get Started
            </a>
</div>
</nav>

<header className="md:pt-52 md:pb-32 pt-40 pr-6 pb-20 pl-6 relative">
<div className="animate-enter text-center max-w-5xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand font-mono text-sm mb-8">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="">DATA DRIVEN CANVASSING</span>
</div>
<h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.1] tracking-tight text-slate-900 mb-8">
                Get a Free List of Doors <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-500">Worth Knocking</span> in Your Market
            </h1>
<p className="md:text-2xl leading-relaxed delay-100 animate-enter text-xl text-slate-500 max-w-3xl mx-auto mb-10">
                We use roof-age data to spot homes that are likely due for replacement—so your reps spend less time wandering random streets and more time knocking on doors that actually have roofing potential.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 delay-200 animate-enter">
<a className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-xl font-semibold text-xl shadow-xl shadow-brand/20 hover:scale-105 hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group" href="#get-list">
                    Get my free list
                    <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-20 relative mx-auto max-w-4xl delay-300 animate-enter">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-slate-50 rounded-xl p-4 h-64 relative border border-slate-100 overflow-hidden">
<div className="bg-center opacity-25 mix-blend-multiply bg-cover absolute top-0 right-0 bottom-0 left-0 grayscale"></div>
<div className="absolute top-4 left-4 right-4 flex gap-2">
<div className="h-2 w-20 bg-slate-200 rounded-full"></div>
<div className="h-2 w-10 bg-slate-200 rounded-full"></div>
</div>

<div className="absolute top-1/3 left-1/4 animate-pulse">
<div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20">
<div className="w-2 h-2 rounded-full bg-brand"></div>
</div>
</div>
<div className="absolute top-1/2 right-1/3 delay-300 animate-pulse">
<div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20">
<div className="w-2 h-2 rounded-full bg-brand"></div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 delay-500 animate-pulse">
<div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
<div className="flex items-center gap-2 mb-2 text-brand">
<svg className="lucide lucide-target w-5 h-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="font-mono text-sm font-semibold">TARGETS</span>
</div>
<div className="text-3xl font-display font-semibold text-slate-900">142</div>
<div className="text-sm text-slate-500">Aging roofs found</div>
</div>
<div className="bg-slate-50 rounded-xl p-4 flex-1 border border-slate-100">
<div className="h-2 w-1/2 bg-slate-200 rounded-full mb-3"></div>
<div className="h-2 w-3/4 bg-slate-200 rounded-full mb-3"></div>
<div className="h-2 w-2/3 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="pt-24 pb-24 px-6 relative" id="how-it-works">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-display font-semibold text-4xl text-slate-900 mb-4 tracking-tight">What We Do (In Plain English)</h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    We analyze properties in your territory and estimate which roofs are getting old. Our goal is simple: Help roofing companies with door-to-door teams.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-8 right-8 p-3 rounded-xl bg-red-50 text-red-500 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-dices w-8 h-8" data-lucide="dices" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" ry="2" width="12" x="2" y="10"></rect><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"></path><path d="M6 18h.01"></path><path d="M10 14h.01"></path><path d="M15 6h.01"></path><path d="M18 9h.01"></path></svg>
</div>
<h3 className="font-display font-semibold text-2xl text-slate-900 mb-4 pr-12">Stop rolling the dice</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Stop wasting valuable resources wandering random streets hoping to find a damaged roof.
                    </p>
<div className="mt-8 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-red-400 w-1/3 opacity-30"></div>
</div>
</div>

<div className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 relative shadow-lg">
<div className="absolute top-8 right-8 p-3 rounded-xl bg-white/10 text-brand-100 backdrop-blur-sm group-hover:scale-110 transition-transform">
<svg className="lucide lucide-map-pin w-8 h-8 text-blue-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="font-display font-semibold text-2xl text-white mb-4 pr-12">Start targeting neighborhoods</h3>
<p className="text-lg text-slate-300 leading-relaxed">
                        Send reps specifically into neighborhoods where roofs are statistically likely ready to talk.
                    </p>
<div className="mt-8 flex gap-2">
<div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
<div className="h-2 w-2 rounded-full bg-green-400/50"></div>
<div className="h-2 w-2 rounded-full bg-green-400/20"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-slate-200 py-24 px-6" id="benefits">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-block px-3 py-1 mb-4 text-sm font-mono text-brand bg-blue-50 rounded-lg">WHAT YOU'LL GET</div>
<h2 className="font-display font-semibold text-4xl text-slate-900 mb-6 tracking-tight">The "Door-Knock Opportunity List"</h2>
<p className="text-xl text-slate-500 mb-8">
                        When you sign up, we’ll email you a sample list for your market. You can literally hand this to your canvassing manager and say: <span className="text-slate-900 font-semibold">"Start here."</span>
</p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand mt-1">
<svg className="lucide lucide-check w-6 h-6" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="font-semibold text-xl text-slate-900">Targeted Addresses</h4>
<p className="text-lg text-slate-500 mt-1">A list of street addresses in your target area with roofs likely near replacement age.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand mt-1">
<svg className="lucide lucide-map w-6 h-6" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<div>
<h4 className="font-semibold text-xl text-slate-900">Route Planning Info</h4>
<p className="text-lg text-slate-500 mt-1">Basic neighborhood / ZIP info to plan tight walking or driving routes.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand mt-1">
<svg className="lucide lucide-file-text w-6 h-6" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-xl text-slate-900">Transparent Methodology</h4>
<p className="text-lg text-slate-500 mt-1">A quick note on how the list was built (high-level, no tech jargon).</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 font-semibold text-brand hover:text-blue-700 text-lg group" href="#get-list">
                            Sign me up for the sample list
                            <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-50 rounded-3xl transform rotate-3"></div>
<div className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl p-8 transform hover:scale-[1.02] transition-transform duration-500">
<div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center text-white">
<svg className="lucide lucide-table-2 w-6 h-6" data-lucide="table-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>
</div>
<div>
<div className="font-semibold text-slate-900">Opportunity_List_TX.csv</div>
<div className="text-sm text-slate-400">Generated just now</div>
</div>
</div>
<div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">Ready</div>
</div>

<div className="space-y-4 font-mono text-sm">
<div className="grid grid-cols-12 gap-4 text-slate-400 text-xs uppercase tracking-wider mb-2">
<div className="col-span-6">Address</div>
<div className="col-span-3">Zip</div>
<div className="col-span-3">Est. Age</div>
</div>
<div className="grid grid-cols-12 gap-4 items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="col-span-6 text-slate-700 font-medium truncate">142 Oakwood Drive</div>
<div className="col-span-3 text-slate-500">75001</div>
<div className="col-span-3 text-red-500 font-bold">18 yrs</div>
</div>
<div className="grid grid-cols-12 gap-4 items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="col-span-6 text-slate-700 font-medium truncate">148 Oakwood Drive</div>
<div className="col-span-3 text-slate-500">75001</div>
<div className="col-span-3 text-red-500 font-bold">19 yrs</div>
</div>
<div className="grid grid-cols-12 gap-4 items-center p-3 bg-slate-50 rounded-lg border border-slate-100 opacity-60">
<div className="col-span-6 text-slate-700 font-medium truncate">156 Oakwood Drive</div>
<div className="col-span-3 text-slate-500">75001</div>
<div className="col-span-3 text-orange-500 font-bold">15 yrs</div>
</div>
<div className="grid grid-cols-12 gap-4 items-center p-3 bg-slate-50 rounded-lg border border-slate-100 opacity-40">
<div className="col-span-6 text-slate-700 font-medium truncate">162 Oakwood Drive</div>
<div className="col-span-3 text-slate-500">75001</div>
<div className="col-span-3 text-orange-500 font-bold">14 yrs</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 text-center">
<p className="text-slate-400 italic">450+ more rows available...</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="font-display font-semibold text-4xl text-slate-900 mb-6 tracking-tight">Why offer this for free?</h2>
<p className="text-xl text-slate-500">
                We’re building a roof analytics platform designed for door-to-door roofing companies. Instead of pitching you a long demo, we’d rather let your reps try the data on the street.
            </p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="overflow-hidden group bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="text-6xl font-display font-bold text-slate-100 absolute -right-4 -top-4 group-hover:text-blue-50 transition-colors">1</div>
<div className="z-10 relative">
<svg className="lucide lucide-message-square w-8 h-8 text-brand mb-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<h3 className="font-semibold text-xl text-slate-900 mb-2">Tell us your market</h3>
<p className="text-lg text-slate-500">Simple city, state, or zip code input.</p>
</div>
</div>

<div className="overflow-hidden group bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="text-6xl font-display font-bold text-slate-100 absolute -right-4 -top-4 group-hover:text-blue-50 transition-colors">2</div>
<div className="relative z-10">
<svg className="lucide lucide-send w-8 h-8 text-brand mb-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<h3 className="font-semibold text-xl text-slate-900 mb-2">We send the list</h3>
<p className="text-lg text-slate-500">Free address list with likely aging roofs.</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group">
<div className="text-6xl font-display font-bold text-slate-100 absolute -right-4 -top-4 group-hover:text-blue-50 transition-colors">3</div>
<div className="relative z-10">
<svg className="lucide lucide-users w-8 h-8 text-brand mb-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="font-semibold text-xl text-slate-900 mb-2">Run a canvas day</h3>
<p className="text-lg text-slate-500">Your team hits the street using our data.</p>
</div>
</div>

<div className="bg-brand p-8 rounded-2xl shadow-lg border border-brand relative overflow-hidden group">
<div className="text-6xl font-display font-bold text-white/10 absolute -right-4 -top-4">4</div>
<div className="relative z-10">
<svg className="lucide lucide-bar-chart-2 w-8 h-8 text-white mb-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<h3 className="font-semibold text-xl text-white mb-2">See results</h3>
<p className="text-lg text-blue-100">See if "random streets" is still a good idea.</p>
</div>
</div>
</div>
<div className="text-center mt-12">
<p className="text-xl font-medium text-slate-800">
                If your reps come back saying, <span className="text-brand">“Those were good doors”</span>… 
                you’ll understand exactly why this kind of data is worth scaling.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-slate-100/50" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<div className="inline-block px-3 py-1 mb-4 text-sm font-mono text-slate-500 bg-white border border-slate-200 rounded-lg">D2D FLAVORED</div>
<h2 className="font-display font-semibold text-3xl md:text-4xl text-slate-900 tracking-tight">Quick Questions from Door-Knockers</h2>
</div>
<div className="space-y-4">
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold text-xl text-slate-900">What do you need from me to send the list?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-slate-600">
                        Just your name, email, and main market (state + city/area). We’ll build a sample list of doors in that area with likely aging roofs.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold text-xl text-slate-900">Is this just buying leads again?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-slate-600">
                        No. We’re not selling shared “leads.” You’re getting a target list of doors your reps can knock—based on where roofs are likely getting old. Your team still generates the lead at the door.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold text-xl text-slate-900">Do I have to change my sales process?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-slate-600">
                        No. Keep your same pitch, same close, same app. You just start with a better list of which doors to hit first.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold text-xl text-slate-900">Do I have to buy the full software after?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-slate-600">
                        Nope. The sample list is free. If it helps your team have better days in the field, we can talk about giving you ongoing access to live roof-age data for your whole territory.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="get-list">
<div className="absolute inset-0 bg-slate-900 -z-10"></div>
<div className="absolute inset-0 bg-gradient-to-br from-brand/50 to-slate-900/90 -z-10"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>
<div className="max-w-4xl mx-auto text-center text-white">
<h2 className="font-display font-semibold text-4xl md:text-5xl mb-6 tracking-tight">Give Your Door-Knockers Better Streets Tomorrow</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 my-10 text-lg text-blue-200">
<div className="flex items-center gap-2">
<svg className="lucide lucide-x-circle w-5 h-5 text-slate-400" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="line-through decoration-slate-400">Cold streets</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-x-circle w-5 h-5 text-slate-400" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="line-through decoration-slate-400">Random neighborhoods</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-x-circle w-5 h-5 text-slate-400" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="line-through decoration-slate-400">"See what happens" routes</span>
</div>
</div>
<p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
                Give them one small edge: <br/>
                A list of doors where the roofs are more likely at or near replacement age.
            </p>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl max-w-md mx-auto">
<form className="space-y-4">
<div className="">
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white/20 transition-all text-lg" id="email" placeholder="Your work email" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="market">Main Market</label>
<input className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white/20 transition-all text-lg" id="market" placeholder="City &amp; State (e.g. Dallas, TX)" type="text"/>
</div>
<button className="w-full py-4 bg-brand hover:bg-blue-600 text-white font-bold rounded-xl text-xl shadow-lg shadow-brand/40 transition-all duration-200 transform hover:scale-[1.02]" type="button">
                        Send Me the Free Door-Knock List
                    </button>
<p className="text-sm text-blue-200/80 mt-4">
                        We’ll send you a sample list your reps can hit this week.
                    </p>
</form>
</div>
<p className="mt-8 text-blue-200">
                Test it on your next canvas day. If they book better appointments, you’ll know this is worth scaling.
            </p>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200 text-center">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center">

<div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center shadow-md mb-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H19" stroke="white" strokeLinecap="round" strokeWidth="3"></path>
<path d="M5 12H15" stroke="white" strokeLinecap="round" strokeWidth="3"></path>
<path d="M5 19V5" stroke="white" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<p className="text-slate-400 mb-8">© 2025 Fixor Corp. Smarter Data for Roofing Teams.</p>
</div>
</footer>



    </>
  );
}
