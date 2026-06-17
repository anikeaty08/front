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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed bg-black/50 w-full z-50 border-white/5 border-b top-0 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-x-2 gap-y-2 items-center">
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
<a className="hover:text-white transition-colors" href="#">Ride</a>
<a className="hover:text-white transition-colors" href="#">Delivery</a>
<a className="hover:text-white transition-colors" href="#">Payments</a>
<a className="hover:text-white transition-colors" href="#">Partners</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors text-xs font-medium" href="#">Log In</a>
<button className="bg-white text-black px-4 py-2 rounded-lg text-xs font-semibold hover:bg-neutral-200 transition-colors">
                    Get App
                </button>
</div>
</div><div className="border-t border-white/5 bg-black/40 backdrop-blur-xl">
<div className="flex max-w-7xl mr-auto ml-auto pt-2 pr-6 pb-2 pl-6 items-center justify-between">
<div className="flex items-center gap-4">

<div className="relative w-12 h-12 shrink-0 bg-white rounded-full border-2 border-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] overflow-hidden group select-none">

<svg className="animate-[spin_10s_linear_infinite] absolute top-0 right-0 bottom-0 left-0 w-[44px] h-[44px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(163, 163, 163)', width: '44px', height: '44px'}} viewbox="0 0 100 100">
<defs>
<path d="M 10,50 A 40,40 0 1,1 90,50 A 40,40 0 1,1 10,50" fill="none" id="txtPath"></path>
</defs>

<text className="" fill="#15803d" fontFamily="ui-serif, Georgia, serif" fontSize="8.5" font-weight="bold">
<textpath className="" href="#txtPath" letter-spacing="0.5px" startoffset="75%" text-anchor="middle">Safe &amp; Reliable</textpath>
</text>

<text className="" fill="#15803d" fontFamily="ui-serif, Georgia, serif" fontSize="9" font-weight="900">
<textpath className="" href="#txtPath" letter-spacing="1px" startoffset="25%" text-anchor="middle">LAND RIDERS</textpath>
</text>
</svg>

<div className="relative z-10 flex flex-col items-center justify-center pt-0.5">

<svg className="mb-[1px] drop-shadow-sm w-[10px] h-[10px]" data-icon-replaced="true" fill="currentColor" height="10" strokeWidth="2" style={{color: 'rgb(5, 150, 105)', width: '10px', height: '10px'}} viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>

<div className="relative w-5 h-4">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="bike" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle className="" cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>

<div className="absolute top-[1px] left-[3px] w-1.5 h-1.5 bg-yellow-400 rounded-full border border-black shadow-sm"></div>

<div className="absolute top-[1px] left-[9px] w-1.5 h-1.5 bg-yellow-400 rounded-full border border-black shadow-sm"></div>

<div className="absolute top-[5px] left-[7px] w-2 h-1 bg-yellow-400 rounded-[1px] border border-black transform rotate-12"></div>
</div>
<div className="w-8 h-[1px] bg-black/20 mt-0.5 rounded-full"></div>
</div>
</div>
<div className="hidden sm:block">
<div className="flex items-center gap-2">
<span className="text-[10px] uppercase font-bold text-emerald-500 tracking-widest">Verified Partner</span>
<span className="inline-flex items-center rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-400/20">Active Now</span>
</div>
<div className="text-sm text-white font-medium tracking-tight">Land Riders: Safe &amp; Reliable Transport</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex transition overflow-hidden group text-sm font-medium text-white rounded-full pt-3 pr-5 pb-3 pl-5 relative gap-x-2 gap-y-2 items-center" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.5)';" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.6), 0 0 0 2px rgba(244,63,94,0.3)';" style={{background: 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(10, 10, 10) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 8px 32px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset, rgba(0, 0, 0, 0.5) 0px -1px 0px inset', transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)', transform: 'translateY(0px)', height: '60px', scale: '1'}}>
<div className="loader" style={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', zIndex: '1', backgroundColor: 'transparent', mask: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)', WebkitMask: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)'}}>
<div className="" style={{content: '\'\'', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle at 50% 50%, #f43f5e 0%, transparent 50%), radial-gradient(circle at 45% 45%, #ef4444 0%, transparent 45%), radial-gradient(circle at 55% 55%, #fb7185 0%, transparent 45%), radial-gradient(circle at 45% 55%, #f87171 0%, transparent 45%), radial-gradient(circle at 55% 45%, #dc2626 0%, transparent 45%)', mask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)', WebkitMask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)', animation: 'transform-animation 2s infinite alternate, opacity-animation 4s infinite', animationTimingFunction: 'cubic-bezier(0.6, 0.8, 0.5, 1)', filter: 'drop-shadow(0 0 8px rgba(244, 63, 94, 0.6))'}}></div>
</div>
<span className="" style={{position: 'relative', zIndex: '2', fontFamily: '\'Inter\', sans-serif', fontSize: '1em', fontWeight: '600', userSelect: 'none', color: '#fff', display: 'flex', gap: '0.5rem'}}>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.1s'}}>S</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.205s'}}>t</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.31s'}}>a</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.415s'}}>r</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.521s'}}>t</span>
<span className="" style={{display: 'inline-block', width: '0.3rem'}}></span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.626s'}}>f</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.731s'}}>r</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.837s'}}>e</span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.942s'}}>e</span>
</span>
<style>
    @keyframes transform-animation {
      0% {
        transform: translate(-55%);
      }
      100% {
        transform: translate(55%);
      }
    }

    @keyframes opacity-animation {
      0%, 100% {
        opacity: 0;
      }
      15% {
        opacity: 1;
      }
      65% {
        opacity: 0;
      }
    }

    @keyframes loader-letter-anim {
      0% {
        opacity: 0;
      }
      5% {
        opacity: 1;
        text-shadow: 0 0 8px #f43f5e, 0 0 12px #f43f5e;
        transform: scale(1.1) translateY(-2px);
      }
      20% {
        opacity: 0.2;
      }
      100% {
        opacity: 0;
      }
    }
  </style>
</button>
</div>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-20 relative">

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<div className="inline-flex text-xs font-medium text-emerald-400 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        Instant City Logistics
                    </div>
<h1 className="md:text-7xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-6">
                        Move anything.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-700">Anywhere. Instantly.</span>
</h1>
<p className="text-lg text-neutral-400 font-light max-w-lg leading-relaxed mb-10">
                        The all-in-one app for transportation, delivery, and payments. Skip the traffic with motorbikes or send parcels across the city in minutes.
                    </p>
<div className="flex items-center gap-4">
<button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                            Download Now
                        </button>
<button className="px-6 py-3 rounded-lg text-sm font-medium text-neutral-300 border border-white/10 hover:bg-white/5 transition-colors">
                            Become a Partner
                        </button>
</div>
</div>

<div className="relative">

<div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full transform scale-75"></div>
<div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">

<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<h3 className="text-sm font-medium text-white">Book a Service</h3>
<div className="flex gap-2">
<span className="h-2 w-2 rounded-full bg-red-500/50"></span>
<span className="h-2 w-2 rounded-full bg-yellow-500/50"></span>
<span className="h-2 w-2 rounded-full bg-green-500/50"></span>
</div>
</div>

<div className="space-y-4 mb-6 relative">

<div className="absolute left-[19px] top-8 bottom-8 w-[1px] dashed-line z-0 opacity-30"></div>
<div className="relative z-10">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mb-1 block pl-1">Pickup</label>
<div className="flex items-center gap-3 bg-neutral-900/50 border border-white/10 p-3 rounded-lg focus-within:border-emerald-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:disc" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
<input className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-neutral-600" type="text" value="Current Location"/>
</div>
</div>
<div className="relative z-10">
<label className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mb-1 block pl-1">Dropoff</label>
<div className="flex items-center gap-3 bg-neutral-900/50 border border-white/10 p-3 rounded-lg focus-within:border-emerald-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-red-500 iconify--lucide" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<input className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-neutral-600" placeholder="Where to?" type="text"/>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-6">

<div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/50 cursor-pointer flex flex-col items-center gap-2 group transition-all">
<div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bike" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3l4-3l2 3h2"></path></g></svg>
</div>
<span className="text-xs font-medium text-white">Ride</span>
<span className="text-[10px] text-emerald-400">Fastest</span>
</div>
<div className="p-3 rounded-xl bg-neutral-900 border border-white/5 cursor-pointer flex flex-col items-center gap-2 hover:bg-neutral-800 transition-colors group">
<div className="w-10 h-10 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:car" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
</div>
<span className="text-xs font-medium text-neutral-400 group-hover:text-white">Car</span>
<span className="text-[10px] text-neutral-600">AC Ride</span>
</div>
<div className="p-3 rounded-xl bg-neutral-900 border border-white/5 cursor-pointer flex flex-col items-center gap-2 hover:bg-neutral-800 transition-colors group">
<div className="w-10 h-10 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path><path className="" d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path></g></svg>
</div>
<span className="text-xs font-medium text-neutral-400 group-hover:text-white">Delivery</span>
<span className="text-[10px] text-neutral-600">Instant</span>
</div>
<div className="p-3 rounded-xl bg-neutral-900 border border-white/5 cursor-pointer flex flex-col items-center gap-2 hover:bg-neutral-800 transition-colors group">
<div className="w-10 h-10 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:banknote" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect className="" height="12" rx="2" width="20" x="2" y="6"></rect><circle className="" cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></g></svg>
</div>
<span className="text-xs font-medium text-neutral-400 group-hover:text-white">Cash</span>
<span className="text-[10px] text-neutral-600">Payments</span>
</div>
</div>

<div className="bg-neutral-900 rounded-lg p-4 flex items-center justify-between border border-white/5">
<div className="">
<p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Estimated Fare</p>
<p className="text-lg font-medium text-white">PKR 240</p>
</div>
<button className="bg-white text-black px-6 py-2 rounded-md text-xs font-bold hover:bg-neutral-200 transition-colors">
                                Book Ride
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">One App. Multiple Solutions.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-1 md:row-span-2 relative group rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
<div className="p-8 h-full flex flex-col relative z-10">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 16l2 2l4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"></path><path d="M3.29 7L12 12l8.71-5M12 22V12"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Instant Delivery</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-8">
                            Send parcels, documents, or gifts anywhere in the city. Real-time tracking and insured handling for peace of mind.
                        </p>

<div className="mt-auto bg-neutral-900/80 rounded-xl p-4 border border-white/5 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:user" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<div className="">
<div className="text-xs text-white font-medium">Driver Nearby</div>
<div className="text-[10px] text-neutral-500">Arriving in 2 mins</div>
</div>
</div>
<div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-emerald-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 relative group rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden hover:border-white/20 transition-colors">
<div className="absolute inset-0 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex flex-col justify-center h-full max-w-sm z-10">
<h3 className="text-xl font-medium text-white mb-2">Beat the Traffic</h3>
<p className="text-sm text-neutral-400 mb-6">
                                The fastest way to navigate the city. Our fleet of motorbikes cuts through congestion to get you there on time, every time.
                            </p>
<div className="flex gap-4 text-xs font-medium">
<span className="flex items-center gap-1 text-emerald-400"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Low Cost</span>
<span className="flex items-center gap-1 text-emerald-400"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Safe Helmet</span>
</div>
</div>

<div className="relative w-full md:w-1/2 h-full opacity-40 group-hover:opacity-60 transition-opacity">
<svg className="w-full h-full" fill="none" viewbox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
<path d="M20 130 C 50 100, 80 140, 100 80 S 150 20, 180 30" stroke="#10b981" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="180" cy="30" fill="#10b981" r="4"></circle>
<circle cx="180" cy="30" r="12" stroke="#10b981" stroke-opacity="0.3"></circle>
<path className="" d="M40 140 C 60 110, 90 90, 120 100" stroke="#333" strokeWidth="2"></path>
<path d="M10 50 C 60 60, 100 20, 150 50" stroke="#333" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 relative group rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden hover:border-white/20 transition-colors p-8">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wallet" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-1">Bill Payments</h3>
<p className="text-xs text-neutral-400 mb-4">Pay utility bills, mobile top-ups, and more directly from your wallet.</p>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-black bg-neutral-800 flex items-center justify-center text-[10px] text-white">KE</div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-800 flex items-center justify-center text-[10px] text-white">SSGC</div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-800 flex items-center justify-center text-[10px] text-white">+3</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 relative group rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden hover:border-white/20 transition-colors p-8">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 border border-orange-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-1">Buy Anything</h3>
<p className="text-xs text-neutral-400 mb-4">Need groceries or pharmacy items? We buy and bring it to you.</p>
<span className="text-xs font-semibold text-white border-b border-white/20 pb-0.5">Order Now →</span>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="flex flex-wrap justify-between items-center gap-8 md:gap-12">
<div className="flex items-center gap-4">
<h4 className="text-4xl font-semibold text-white tracking-tighter">10M+</h4>
<div className="h-10 w-[1px] bg-white/10"></div>
<p className="text-xs text-neutral-500 uppercase tracking-wide font-medium w-20">App Downloads</p>
</div>
<div className="flex items-center gap-4">
<h4 className="text-4xl font-semibold text-white tracking-tighter">50k+</h4>
<div className="h-10 w-[1px] bg-white/10"></div>
<p className="text-xs text-neutral-500 uppercase tracking-wide font-medium w-20">Active Partners</p>
</div>
<div className="flex items-center gap-4">
<h4 className="text-4xl font-semibold text-white tracking-tighter">3</h4>
<div className="h-10 w-[1px] bg-white/10"></div>
<p className="text-xs text-neutral-500 uppercase tracking-wide font-medium w-20">Major Cities</p>
</div>
<div className="flex items-center gap-4">
<h4 className="text-4xl font-semibold text-white tracking-tighter">24/7</h4>
<div className="h-10 w-[1px] bg-white/10"></div>
<p className="text-xs text-neutral-500 uppercase tracking-wide font-medium w-20">Customer Support</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="relative rounded-3xl overflow-hidden bg-emerald-900/20 border border-emerald-500/20 px-8 py-16 md:p-20 text-center">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-emerald-500/10 blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Earn money on your own schedule.</h2>
<p className="text-neutral-400 text-lg">Join the largest network of driver partners. Guaranteed income, flexible hours, and instant payouts.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="+92 300 1234567" type="text"/>
<button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-neutral-200 transition-colors whitespace-nowrap">
                            Sign Up to Drive
                        </button>
</form>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white text-[10px]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-white font-semibold tracking-tight">BYKIA</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs mb-6">
                        Simplifying everyday life. Bykia offers a suite of services from transportation to logistics and payments.
                    </p>
</div>
<div className="">
<h5 className="text-white font-medium text-sm mb-4">Services</h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Bike Ride</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Car Ride</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Delivery</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Shops</a></li>
</ul>
</div>
<div className="">
<h5 className="text-white font-medium text-sm mb-4">Company</h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Blog</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div className="">
<h5 className="text-white font-medium text-sm mb-4">Partner</h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Drive with Us</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Fleet Management</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Franchise</a></li>
</ul>
</div>
<div className="">
<h5 className="text-white font-medium text-sm mb-4">Social</h5>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row text-xs text-neutral-600 border-white/10 border-t pt-8 items-center justify-between">
<p className="">© 2026 Bykia Technologies. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
