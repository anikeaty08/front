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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="fixed top-0 left-0 -z-10 w-full h-full" data-us-project="XKOypOfa1PB1AP8SFWUj"></div>


<header className="sm:px-6 sticky max-w-7xl z-50 mr-auto ml-auto pt-6 pr-4 pl-4 top-4">
<div className="flex shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
          DPL Real Estate
        </div>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-neutral-900 tracking-tight bg-white hover:bg-neutral-200 border border-white/10 rounded-full px-5 py-2 transition-colors" href="#calendly">
<span className="font-geist">Consultation</span>
</a>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-8 pr-6 pb-8 pl-6 text-center max-w-5xl mx-auto">

<h1 className="leading-[1.05] sm:text-6xl md:text-8xl text-4xl font-medium text-white tracking-tighter font-geist mt-4">Sell Your Silicon Valley Home for 
1%.<br/> <span className="text-neutral-400">Full Service. No Shortcuts.</span></h1>
<p className="sm:mt-8 sm:text-xl leading-relaxed text-lg text-neutral-300 font-geist max-w-3xl mt-6 mr-auto ml-auto">Most sellers pay $75,000 or more in listing commission.<br/> David Lillo charges 1% and has done it for over a decade.</p>

<div className="mt-10 max-w-md mx-auto">
<a className="inline-flex sm:w-auto transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 text-base font-semibold text-white font-geist bg-blue-950 w-full border-blue-600 border rounded-full px-10 py-4 shadow-lg items-center justify-center text-center" href="#calendly">
            Book Your Free Consultation
          </a>
</div>

<div className="mt-16 w-full relative pt-[56.25%] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

</div>

<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mt-16 pt-10 border-t border-white/10 opacity-80">
<span className="text-sm font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:cup-star-linear"></iconify-icon>
            #57 U.S. Agent · Real Trends 2025
          </span>
<span className="hidden md:inline text-neutral-700">|</span>
<span className="text-sm font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:wallet-money-linear"></iconify-icon>
            $1.9B+ Sold
          </span>
<span className="hidden md:inline text-neutral-700">|</span>
<span className="text-sm font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:tag-price-linear"></iconify-icon>
            1% Listing Fee
          </span>
<span className="hidden md:inline text-neutral-700">|</span>
<span className="text-sm font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:diploma-linear"></iconify-icon>
            Columbia University MS
          </span>
<span className="hidden md:inline text-neutral-700">|</span>
<span className="text-sm font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:shield-check-linear"></iconify-icon>
            CA DRE 01803836
          </span>
</div>
</div>
</div>
</section>

<section className="sm:px-6 max-w-7xl mt-10 mr-auto mb-8 ml-auto pr-4 pl-4">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="sm:p-12 pt-8 pr-6 pb-8 pl-6 relative">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 bg-neutral-900/60 border border-white/10 rounded-3xl">
<h3 className="text-xl font-medium tracking-tight text-white mb-3">The commission math doesn't add up.</h3>
<p className="text-base text-neutral-400 leading-relaxed font-geist">A 2.5% listing fee made sense before Silicon Valley homes hit $3M. It doesn't anymore.</p>
</div>
<div className="p-8 bg-neutral-900/60 border border-white/10 rounded-3xl">
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Most discount brokers leave you on your own.</h3>
<p className="leading-relaxed text-base text-neutral-400 font-geist">MLS-only services hand you the listing then walk away. DPL Real Estate doesn't.</p>
</div>
<div className="bg-neutral-900/60 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-xl font-medium tracking-tight text-white mb-3">You shouldn't have to choose between service and savings.</h3>
<p className="leading-relaxed text-base text-neutral-400 font-geist">Pricing strategy, negotiation, transaction management, all included at 1%.</p>
</div>
</div>

<div className="text-center max-w-3xl border-white/10 border-t mt-20 mr-auto ml-auto pt-16">
<p className="sm:text-3xl leading-[1.4] text-2xl font-medium text-white tracking-tight font-geist">"DPL Real Estate is a fully independent brokerage no franchise fees, no agent splits, no corporate overhead passed to you. That's the only reason the 1% model is possible without cutting service."</p>
<p className="sm:text-xl text-lg text-neutral-400 font-geist mt-8">
            I handle every transaction personally. You work with David, not a coordinator.
          </p>
</div>

<div className="mt-20 border-t border-white/10 pt-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-between">
<div className="flex text-yellow-500 mb-6 text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed flex-grow text-base text-neutral-300 font-geist mb-8">"The advice on marketing and pricing brought 16 offers to us. We accepted a deal of all cash, over the listed price, and an eight-day escrow. It could not have been a more satisfying experience."</p>
<div className="text-xs font-medium tracking-wider uppercase text-neutral-500 pt-6 border-t border-white/10 flex items-center gap-2">
<iconify-icon className="text-blue-400 text-lg" icon="solar:check-read-linear"></iconify-icon>
                Verified Zillow review · West San Jose seller
              </div>
</div>

<div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-between">
<div className="flex text-yellow-500 mb-6 text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed flex-grow text-base text-neutral-300 font-geist mb-8">"David is unequivocally one of the most skilled realtors I've ever encountered. He assured me we would get the price I wanted, and we most certainly did, bringing substantially more than the listed price."</p>
<div className="text-xs font-medium tracking-wider uppercase text-neutral-500 pt-6 border-t border-white/10 flex items-center gap-2">
<iconify-icon className="text-blue-400 text-lg" icon="solar:check-read-linear"></iconify-icon>
                Verified Zillow review · Sunnyvale seller
              </div>
</div>

<div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-between">
<div className="flex text-yellow-500 mb-6 text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed flex-grow text-base text-neutral-300 font-geist mb-8">"David had helped us sell 2 houses in the last 7 years. David and his team were absolutely amazing."</p>
<div className="text-xs font-medium tracking-wider uppercase text-neutral-500 pt-6 border-t border-white/10 flex items-center gap-2">
<iconify-icon className="text-blue-400 text-lg" icon="solar:check-read-linear"></iconify-icon>
                Verified Zillow review · Repeat client
              </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-8 pr-6 pb-8 pl-6">

<div className="max-w-3xl mx-auto">
<div className="space-y-6">
<div className="flex items-start gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center font-semibold text-lg border border-white/10">1</div>
<p className="text-lg text-neutral-400 font-geist pt-1.5"><strong className="text-white font-medium">Consultation</strong> : Review your home, timeline, and goals.</p>
</div>
<div className="flex items-start gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center font-semibold text-lg border border-white/10">2</div>
<p className="text-lg text-neutral-400 font-geist pt-1.5"><strong className="text-white font-medium">Pricing</strong> : Development-level analysis tailored to your submarket.</p>
</div>
<div className="flex items-start gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center font-semibold text-lg border border-white/10">3</div>
<p className="text-lg text-neutral-400 font-geist pt-1.5"><strong className="text-white font-medium">Marketing</strong> : Professional photography, full MLS listing, buyer outreach.</p>
</div>
<div className="flex items-start gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center font-semibold text-lg border border-white/10">4</div>
<p className="text-lg text-neutral-400 font-geist pt-1.5"><strong className="text-white font-medium">Offers</strong> : David reviews and negotiates every offer directly with you.</p>
</div>
<div className="flex items-start gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center font-semibold text-lg border border-white/10">5</div>
<p className="text-lg text-neutral-400 font-geist pt-1.5"><strong className="text-white font-medium">Close</strong> : Full transaction management through to close.</p>
</div>
</div>
</div>

<div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="p-8 sm:p-10 border border-white/10 bg-neutral-900/40 rounded-3xl backdrop-blur-md">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Sellers</h3>
<div className="text-blue-400 font-medium text-xl mb-8 pb-8 border-b border-white/10">Fee: 1% listing commission</div>
<ul className="space-y-5 text-base text-neutral-300 font-geist">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Pricing strategy and market analysis
              </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Professional photography
              </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Full MLS listing
              </li>
<li className="flex gap-x-3 gap-y-3 items-start">Offer negotiation, handled by David</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Transaction management through close
              </li>
</ul>
</div>

<div className="p-8 sm:p-10 border border-white/10 bg-neutral-900/40 rounded-3xl backdrop-blur-md">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Buyers</h3>
<div className="text-blue-400 font-medium text-xl mb-8 pb-8 border-b border-white/10">Fee: 1.5% buyer's agent</div>
<ul className="space-y-5 text-base text-neutral-300 font-geist">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Property search and identification
              </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Offer strategy and negotiation
              </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Due diligence guidance
              </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1 text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Transaction management through close
              </li>
</ul>
</div>
</div>

<div className="mt-16 text-center max-w-xl mx-auto border-b border-white/10 pb-20">
<a className="inline-flex sm:w-auto transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 items-center justify-center text-base font-semibold text-white font-geist text-center bg-blue-950 w-full border-blue-600 border rounded-full pt-4 pr-10 pb-4 pl-10 shadow-lg" href="#calendly">Get Your Free Home Valuation (30 Minutes With David)</a>
</div>

<div className="mt-20 max-w-6xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flex flex-col items-center justify-center p-8 text-center border border-white/10 rounded-2xl bg-white/5 aspect-[4/3] sm:aspect-auto lg:aspect-[4/5] h-full">
<div className="text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">$1.9B+</div>
<div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 px-4 leading-relaxed">Total Silicon Valley sales volume</div>
</div>

<div className="outer w-full aspect-[4/3] sm:aspect-auto lg:aspect-[4/5] h-full rounded-[16px] p-[1px] relative overflow-hidden group" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[15px] items-center justify-center p-6" style={{background: 'radial-gradient(circle 280px at 0% 0%, #2a2a2a, #0c0d0d)'}}>
<div className="ray absolute blur-[15px] transform top-0 left-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700 w-[80%] h-[60px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="text text-6xl lg:text-7xl font-bold tracking-tight mb-4" style={{background: 'linear-gradient(45deg, rgb(100, 100, 100) 0%, rgb(255, 255, 255) 50%, rgb(100, 100, 100) 100%) text', color: 'transparent'}}>#43</div>
<div className="text-neutral-300 text-xs font-semibold uppercase tracking-wider text-center z-10 leading-relaxed px-4">National ranking — 2022 peak year</div>
<div className="line topl absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="flex flex-col items-center justify-center p-8 text-center border border-white/10 rounded-2xl bg-white/5 aspect-[4/3] sm:aspect-auto lg:aspect-[4/5] h-full">
<div className="text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">10+</div>
<div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 px-4 leading-relaxed">Years operating the 1% model</div>
</div>

<div className="outer w-full aspect-[4/3] sm:aspect-auto lg:aspect-[4/5] h-full rounded-[16px] p-[1px] relative overflow-hidden group" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[15px] items-center justify-center p-6" style={{background: 'radial-gradient(circle 280px at 0% 0%, #2a2a2a, #0c0d0d)'}}>
<div className="ray absolute blur-[15px] transform top-0 left-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700 w-[80%] h-[60px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="text text-6xl lg:text-7xl font-bold tracking-tight mb-4 flex items-center" style={{background: 'linear-gradient(45deg, rgb(100, 100, 100) 0%, rgb(255, 255, 255) 50%, rgb(100, 100, 100) 100%) text', color: 'transparent'}}>
                  5<iconify-icon className="text-white text-5xl lg:text-6xl ml-1" icon="solar:star-bold"></iconify-icon>
</div>
<div className="text-neutral-300 text-xs font-semibold uppercase tracking-wider text-center z-10 leading-relaxed px-4">Zillow rating across all verified reviews</div>
<div className="line topl absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-16 px-4">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-8 pr-6 pb-8 pl-6">

<div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
<div className="md:col-span-2 aspect-[4/5] rounded-3xl bg-[#111] border border-white/10 overflow-hidden relative shadow-xl">
<div className="absolute inset-0 flex items-center justify-center text-neutral-600 text-sm font-geist">[Photo placeholder — David Lillo]</div>
</div>
<div className="md:col-span-3 space-y-6">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white font-geist">David Lillo</h2>
<div className="space-y-4">
<p className="text-neutral-400 text-base leading-relaxed font-geist">David Lillo founded DPL Real Estate in 2011 after a career in commercial investment sales at Marcus &amp; Millichap and graduate study at Columbia University's School of Architecture, Planning and Preservation.</p>
<p className="text-neutral-400 text-base leading-relaxed font-geist">He built DPL as a fully independent brokerage specifically to offer Silicon Valley sellers a full-service alternative to the standard commission model.</p>
<p className="text-white font-medium text-base font-geist">Every transaction is handled personally by David.</p>
</div>
<div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:items-center text-sm font-medium text-neutral-300 font-geist">
<span className="flex items-center gap-2"><iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon> (408) 621-5649</span>
<span className="hidden sm:inline text-neutral-600">•</span>
<span className="flex items-center gap-2"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon> david@dplrealestate.com</span>
</div>
</div>
</div>

<div className="mt-24 max-w-3xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-white mb-8 text-center font-geist">Frequently Asked Questions</h2>
<div className="space-y-4 font-geist">
<details className="group border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium text-lg">
                Why haven't I heard of DPL Real Estate before?
                <span className="relative h-6 w-6 shrink-0">
<iconify-icon className="absolute inset-0 transition duration-300 group-open:-rotate-180 text-2xl text-neutral-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="p-6 pt-0 text-base leading-relaxed text-neutral-400">
                David runs a lean, independent brokerage — no franchise marketing budget, no billboard spend. His clients come from referrals and results, not advertising.
              </p>
</details>
<details className="group border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium text-lg">
                What makes your pricing strategy different?
                <span className="relative h-6 w-6 shrink-0">
<iconify-icon className="absolute inset-0 transition duration-300 group-open:-rotate-180 text-2xl text-neutral-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="p-6 pt-0 text-base leading-relaxed text-neutral-400">
                David holds a Master's in Real Estate Development from Columbia University. He prices homes using the same analytical methodology used in development — not just comparable sales.
              </p>
</details>
<details className="group border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium text-lg">
                Do you take every listing that comes your way?
                <span className="relative h-6 w-6 shrink-0">
<iconify-icon className="absolute inset-0 transition duration-300 group-open:-rotate-180 text-2xl text-neutral-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="p-6 pt-0 text-base leading-relaxed text-neutral-400">
                No. David works personally on every transaction, which means he's selective. If he doesn't think he can deliver a strong result for your home, he'll tell you on the first call.
              </p>
</details>
<details className="group border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium text-lg">
                What areas do you cover?
                <span className="relative h-6 w-6 shrink-0">
<iconify-icon className="absolute inset-0 transition duration-300 group-open:-rotate-180 text-2xl text-neutral-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="p-6 pt-0 text-base leading-relaxed text-neutral-400">
                Cupertino, Palo Alto, San Jose, Sunnyvale, Mountain View, Santa Clara, Los Altos, Saratoga, Los Gatos, Campbell, and Portola Valley.
              </p>
</details>
<details className="group border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white font-medium text-lg">
                What happens on the consultation call?
                <span className="relative h-6 w-6 shrink-0">
<iconify-icon className="absolute inset-0 transition duration-300 group-open:-rotate-180 text-2xl text-neutral-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="p-6 pt-0 text-base leading-relaxed text-neutral-400">
                David reviews your property, gives you his honest pricing view, walks you through what the sale would look like, and answers every question you have. No pitch. No pressure.
              </p>
</details>
</div>
</div>

<div className="mt-24 pt-16 border-t border-white/10 text-center max-w-4xl mx-auto" id="calendly">
<h2 className="sm:text-3xl text-2xl font-medium text-white tracking-tight font-geist mb-8">30 minutes. Free. Book directly with David (not an assistant)</h2>
<div className="w-full bg-[#111] border border-white/10 rounded-3xl h-[650px] flex items-center justify-center text-neutral-600 font-geist shadow-inner">
            [ Calendly Embed Placeholder ]
          </div>
</div>
</div>
</div>
</section>
<footer className="text-center pb-12 pt-4">
<div className="text-sm text-neutral-500 font-geist">
      © 2025 DPL Real Estate. CA DRE #01803836. All rights reserved.
    </div>
</footer>

    </>
  );
}
