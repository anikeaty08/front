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
      
<div className="fixed w-full h-full left-0 top-0 -z-10" data-us-project="XKOypOfa1PB1AP8SFWUj"></div>


<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 hidden opacity-[0.25] bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="absolute inset-0 hidden opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:120px_1px,1px_120px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
</div>

<header className="sm:px-6 sticky max-w-7xl z-50 mr-auto ml-auto pt-6 pr-4 pl-4 top-4">
<div className="flex shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex gap-2 text-xl font-bold tracking-tighter gap-x-2 gap-y-2 items-center">
          Robert Slack
        </div>
</div>
<div className="flex items-center gap-6">

<a className="group inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none sm:w-auto text-sm font-medium text-white h-[54px] rounded-full pt-4 pr-8 pb-4 pl-8 relative items-center justify-center font-geist" href="#calendly" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', '--border-radius-before': '9999px'}}>
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#050505]"></div>
</div>
<div className="overflow-hidden bg-[#0A0A0A] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px] z-[-10]">
<div className="bg-gradient-to-b from-blue-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="opacity-[0.07] mix-blend-plus-lighter absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 8px)', backgroundSize: '24px 100%', animation: 'lines-slide 1.5s linear infinite', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/20 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/40"></div>
</div>
<span className="transition-colors group-hover:text-white uppercase font-semibold text-white/90 tracking-tight z-10 relative">Book Call</span>
<iconify-icon className="relative z-10 ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-8 pr-6 pb-10 pl-6">
<div className="flex flex-col text-center max-w-4xl mr-auto ml-auto items-center">
<div className="inline-flex items-center gap-2 text-xs font-medium text-blue-300 bg-blue-500/10 border border-white/10 rounded-full px-4 py-2 mb-6 uppercase tracking-wider">
<span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
<span className="font-geist">Florida Home Buyers, Sellers &amp; Agents</span>
</div>
<h1 className="leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:text-5xl text-4xl font-medium text-neutral-100 tracking-tighter font-geist mt-2">The #1 Real Estate Team In Florida Will Get You To The Closing Table <br/> <span className="text-neutral-400">Or You Won't Pay Us A Cent</span></h1>
<p className="sm:text-lg lg:text-xl leading-relaxed text-base text-neutral-400 font-geist max-w-2xl mt-6">
            $1.57 billion closed in the last 12 months. Stop leaving money on the table with the wrong agent. See exactly how our system works below.
          </p>
<div className="mt-10 mb-12 w-full sm:w-auto">

<a className="group inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none sm:w-auto text-sm font-medium text-white w-full h-[54px] rounded-full pt-4 pr-8 pb-4 pl-8 relative items-center justify-center font-geist" href="#calendly" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', '--border-radius-before': '9999px'}}>
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#050505]"></div>
</div>
<div className="overflow-hidden bg-[#0A0A0A] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px] z-[-10]">
<div className="bg-gradient-to-b from-blue-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="opacity-[0.07] mix-blend-plus-lighter absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 8px)', backgroundSize: '24px 100%', animation: 'lines-slide 1.5s linear infinite', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/20 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/40"></div>
</div>
<span className="transition-colors group-hover:text-white uppercase font-semibold text-white/90 tracking-tight z-10 relative">Book Free Strategy Call</span>
<iconify-icon className="relative z-10 ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="mt-4 relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 max-w-5xl mx-auto">

<div className="aspect-video w-full bg-neutral-950 flex flex-col items-center justify-center relative group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80"></div>
<div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md group-hover:bg-white/20 group-hover:scale-105 transition-all z-10">
<iconify-icon className="text-4xl text-white" icon="solar:play-circle-linear"></iconify-icon>
</div>
<span className="mt-4 text-white/50 text-sm font-geist z-10">[ 2-Minute System Overview ]</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-6 mx-auto mb-12 px-4 text-center">
<div className="flex flex-wrap justify-center gap-6 sm:gap-12 items-center text-neutral-300 font-geist opacity-80">
<div className="flex items-center gap-3">
<span className="font-bold text-xl text-white tracking-tight">RealTrends</span>
<span className="text-xs border border-white/20 px-3 py-1 rounded-full bg-white/5">#1 in Florida (2018–2024)</span>
</div>
<div className="hidden sm:block w-px h-6 bg-white/10"></div>
<div className="flex items-center gap-3">
<span className="font-bold text-xl text-white tracking-tight">RealTrends</span>
<span className="text-xs border border-white/20 px-3 py-1 rounded-full bg-white/5">#3 in United States (2024)</span>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-16 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 pt-8 pr-6 pb-10 pl-6">
<h2 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-100 font-geist tracking-tighter font-medium text-center mb-12 max-w-3xl mx-auto leading-tight">
          Is This Your Reality Right Now?
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="outer w-full h-full rounded-3xl p-[1px] relative" style={{background: 'radial-gradient(circle 400px at 0% 0%, rgba(255,255,255,0.4), #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', animation: 'moveDotResponsive 6s linear infinite', animationDelay: '0s'}}></div>
<article className="card z-[1] flex relative flex-col w-full h-full border-[#202222] border rounded-[23px] overflow-hidden" style={{background: 'radial-gradient(circle 400px at 0% 0%, #333333, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
<div className="relative z-10 flex flex-col h-full items-start p-8">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:home-angle-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-neutral-400 font-geist mb-2 uppercase tracking-widest">For Sellers</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-100 font-geist mb-3">Your Home Has Been Sitting</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">You listed it. You waited. The problem isn't your home. It's the outdated strategy being used to sell it.</p>
</div>
</article>
</div>

<div className="outer w-full h-full rounded-3xl p-[1px] relative" style={{background: 'radial-gradient(circle 400px at 0% 0%, rgba(255,255,255,0.4), #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', animation: 'moveDotResponsive 6s linear infinite', animationDelay: '-2s'}}></div>
<article className="card z-[1] flex relative flex-col w-full h-full border-[#202222] border rounded-[23px] overflow-hidden" style={{background: 'radial-gradient(circle 400px at 0% 0%, #333333, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
<div className="relative z-10 flex flex-col h-full items-start p-8">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:key-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-neutral-400 font-geist mb-2 uppercase tracking-widest">For Buyers</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-100 font-geist mb-3">Waiting For The 'Right Time'</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">Every month you wait, prices shift and leases renew. Waiting costs more than acting with the right guidance.</p>
</div>
</article>
</div>

<div className="outer w-full h-full rounded-3xl p-[1px] relative" style={{background: 'radial-gradient(circle 400px at 0% 0%, rgba(255,255,255,0.4), #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', animation: 'moveDotResponsive 6s linear infinite', animationDelay: '-4s'}}></div>
<article className="card z-[1] flex relative flex-col w-full h-full border-[#202222] border rounded-[23px] overflow-hidden" style={{background: 'radial-gradient(circle 400px at 0% 0%, #333333, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
<div className="relative z-10 flex flex-col h-full items-start p-8">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:user-id-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-neutral-400 font-geist mb-2 uppercase tracking-widest">For Agents</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-100 font-geist mb-3">License, But No Business</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">No leads. No real training. Just a split percentage on deals you had to scrape together yourself.</p>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="why-us">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-10 pr-6 pb-12 pl-6">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="sm:text-3xl lg:text-4xl leading-tight text-2xl font-medium text-neutral-100 tracking-tighter font-geist mb-4">Why Choose Us?</h2>
<p className="text-lg text-neutral-400 font-geist">Most agents work alone. When you work with us, you get an entire infrastructure.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<iconify-icon className="text-3xl text-white mb-4" icon="solar:stopwatch-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white font-geist tracking-tight mb-2">5-Second Response Time</h3>
<p className="text-neutral-400 font-geist text-sm">We call you back in five seconds. Not five minutes. We never miss an opportunity.</p>
</div>

<div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<iconify-icon className="text-3xl text-white mb-4" icon="solar:diploma-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white font-geist tracking-tight mb-2">Mandatory Agent Training</h3>
<p className="text-neutral-400 font-geist text-sm">Every agent completes a 4-week rigorous program before they ever speak to a client.</p>
</div>

<div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<iconify-icon className="text-3xl text-white mb-4" icon="solar:banknote-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white font-geist tracking-tight mb-2">In-House Lending &amp; Title</h3>
<p className="text-neutral-400 font-geist text-sm">No third-party delays. Florida Funding and Florida Title keep your closing on track.</p>
</div>

<div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-50"></div>
<iconify-icon className="text-3xl text-white mb-4 relative z-10" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white font-geist tracking-tight mb-2 relative z-10">Unmatched Marketing</h3>
<p className="text-neutral-400 font-geist text-sm relative z-10">We spend more on lead gen per agent than almost any team in the country.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="reviews">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 pt-8 pr-6 pb-10 pl-6">
<h2 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-100 font-geist tracking-tighter font-medium text-center mb-12 max-w-3xl mx-auto leading-tight">
          What Our Clients &amp; Agents Say
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="bg-neutral-900/40 border border-white/10 rounded-2xl p-8 flex flex-col h-full relative">
<div className="flex gap-1 text-white mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-neutral-200 font-geist leading-relaxed flex-grow italic mb-6">
              "Listed with another agent for 67 days and got nowhere. Robert Slack had an offer in 11 days at asking price."
            </p>
<div>
<div className="font-medium text-white font-geist text-sm">Verified Seller</div>
<div className="text-xs text-neutral-500 font-geist mt-0.5">Orlando, FL</div>
</div>
</article>

<article className="bg-neutral-900/40 border border-white/10 rounded-2xl p-8 flex flex-col h-full relative">
<div className="flex gap-1 text-white mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-neutral-200 font-geist leading-relaxed flex-grow italic mb-6">
              "My agent called me back in literally seconds every time I reached out. I closed my first home in 28 days."
            </p>
<div className="">
<div className="font-medium text-white font-geist text-sm">Verified Buyer</div>
<div className="text-xs text-neutral-500 font-geist mt-0.5">Tampa, FL</div>
</div>
</article>

<article className="bg-neutral-900/40 border border-white/10 rounded-2xl p-8 flex flex-col h-full relative">
<div className="flex gap-1 text-white mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-neutral-200 font-geist leading-relaxed flex-grow italic mb-6">
              "Got leads my first week, closed my first deal in 30 days. The system is real. The support is real."
            </p>
<div>
<div className="font-medium text-white font-geist text-sm">Team Agent</div>
<div className="text-xs text-neutral-500 font-geist mt-0.5">Miami, FL</div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="process">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-10 pr-6 pb-12 pl-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-100 font-geist tracking-tighter font-medium mb-4 leading-tight">
            The Exact Framework
          </h2>
<p className="text-lg text-neutral-400 font-geist">No surprises. No hand-offs. Just execution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative max-w-5xl mx-auto">

<div className="hidden md:block absolute top-6 left-12 right-12 h-[1px] bg-white/10 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-6">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white font-geist tracking-tight mb-2">1. The Call</h4>
<p className="text-neutral-400 font-geist text-sm">30 minutes. Honest diagnosis of your market and timeline.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 text-white flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white font-geist tracking-tight mb-2">2. Activation</h4>
<p className="text-neutral-400 font-geist text-sm">Agent assigned. Funding started. Marketing goes live.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 text-white flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white font-geist tracking-tight mb-2">3. Execution</h4>
<p className="text-neutral-400 font-geist text-sm">Showings booked, offers managed, fast communication.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 text-white flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:key-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white font-geist tracking-tight mb-2">4. Closing</h4>
<p className="text-neutral-400 font-geist text-sm">Keys in hand. Title handled fully in-house.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-10 pr-6 pb-12 pl-6">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-100 font-geist tracking-tighter font-medium mb-4 leading-tight">
            What's Included
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="outer w-full h-full rounded-3xl p-[1px] relative" style={{background: 'radial-gradient(circle 400px at 0% 0%, rgba(255,255,255,0.4), #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', animation: 'moveDotResponsive 6s linear infinite', animationDelay: '0s'}}></div>
<div className="card z-[1] flex relative flex-col w-full h-full border-[#202222] border rounded-[23px] overflow-hidden" style={{background: 'radial-gradient(circle 400px at 0% 0%, #333333, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
<div className="relative z-10 flex flex-col h-full items-start p-8">
<div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase font-geist mb-6">Buying</div>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> Dedicated local expert agent</li>
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> Fast in-house pre-approval</li>
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> 5-second listing alerts</li>
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> Full negotiation &amp; closing</li>
</ul>
</div>
</div>
</div>
<div className="outer w-full h-full rounded-3xl p-[1px] relative" style={{background: 'radial-gradient(circle 400px at 0% 0%, rgba(255,255,255,0.4), #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', animation: 'moveDotResponsive 6s linear infinite', animationDelay: '-2s'}}></div>
<div className="card z-[1] flex relative flex-col w-full h-full border-[#202222] border rounded-[23px] overflow-hidden" style={{background: 'radial-gradient(circle 400px at 0% 0%, #333333, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col h-full items-start p-8">
<div className="inline-flex px-3 py-1 rounded-full bg-white text-black text-xs font-semibold tracking-widest uppercase font-geist mb-6 relative z-10">Selling</div>
<ul className="space-y-4 relative z-10">
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> Live market pricing strategy</li>
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> High-spend targeted marketing</li>
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> Weekly performance reviews</li>
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> In-house title management</li>
</ul>
</div>
</div>
</div>
<div className="outer w-full h-full rounded-3xl p-[1px] relative" style={{background: 'radial-gradient(circle 400px at 0% 0%, rgba(255,255,255,0.4), #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', animation: 'moveDotResponsive 6s linear infinite', animationDelay: '-4s'}}></div>
<div className="card z-[1] flex relative flex-col w-full h-full border-[#202222] border rounded-[23px] overflow-hidden" style={{background: 'radial-gradient(circle 400px at 0% 0%, #333333, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
<div className="relative z-10 flex flex-col h-full items-start p-8">
<div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase font-geist mb-6">Joining</div>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> 30+ exclusive leads / month</li>
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> Zero desk or marketing fees</li>
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> Dedicated ISA and scheduling</li>
<li className="flex gap-3 text-sm text-neutral-300 font-geist"><iconify-icon className="text-white/60 text-lg" icon="solar:check-circle-linear"></iconify-icon> 4-week onboarding program</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-10 pr-6 pb-12 pl-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center max-w-5xl mx-auto">
<div>
<div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-white font-geist mb-2">$1.57B</div>
<div className="text-xs sm:text-sm text-neutral-400 font-geist">Closed in 2024</div>
</div>
<div className="">
<div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-white font-geist mb-2">3,933</div>
<div className="text-xs sm:text-sm text-neutral-400 font-geist">Homes Sold (2024)</div>
</div>
<div className="">
<div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-white font-geist mb-2">695</div>
<div className="text-xs sm:text-sm text-neutral-400 font-geist">Active Agents</div>
</div>
<div>
<div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-white font-geist mb-2">5s</div>
<div className="text-xs sm:text-sm text-neutral-400 font-geist">Response Time</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-10 pr-6 pb-12 pl-6">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

<div className="lg:col-span-4">
<div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] bg-neutral-900 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<iconify-icon className="text-9xl text-white/10" icon="solar:user-circle-linear"></iconify-icon>
<div className="absolute bottom-6 left-6 right-6 text-center">
<div className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-1">CEO &amp; Partner</div>
<div className="text-lg font-medium text-white tracking-tight">Dan Walters</div>
</div>
</div>
</div>

<div className="lg:col-span-8 space-y-6">
<h2 className="text-3xl sm:text-4xl text-neutral-100 font-geist tracking-tight font-medium">Built On Systems, Not Luck.</h2>
<div className="space-y-4 text-base sm:text-lg text-neutral-400 font-geist leading-relaxed max-w-2xl">
<p className="">"I spent 28 years running operations for multi-million dollar resorts. What I found in real estate was a broken model: solo agents with no backup, no systems, and clients paying the price."</p>
<p>"So we built something different. In-house lending. In-house title. A mandatory training program. And the infrastructure to respond to every inquiry in 5 seconds."</p>
<p className="text-white">"This isn't a hobby. It's a system designed to close."</p>
</div>

<div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/10 max-w-lg">
<div>
<div className="text-2xl text-white font-medium font-geist tracking-tight">28</div>
<div className="text-xs text-neutral-500 font-geist uppercase tracking-widest mt-1">Years Ops Exp</div>
</div>
<div>
<div className="text-2xl text-white font-medium font-geist tracking-tight">2018</div>
<div className="text-xs text-neutral-500 font-geist uppercase tracking-widest mt-1">#1 Since Then</div>
</div>
<div>
<div className="text-2xl text-white font-medium font-geist tracking-tight">6 States</div>
<div className="text-xs text-neutral-500 font-geist uppercase tracking-widest mt-1">Active footprint</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="faq">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-10 pr-6 pb-12 pl-6">
<div className="text-center max-w-3xl mx-auto mb-10">
<h2 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-100 font-geist tracking-tighter font-medium leading-tight">
            Common Questions
          </h2>
</div>
<div className="max-w-3xl mx-auto space-y-3">
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white font-geist hover:bg-white/[0.02] transition-colors text-lg">
<span className="pr-6">Is now a good time to buy or sell?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 text-neutral-500">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-geist text-base border-t border-white/5 pt-4">
              Depends entirely on your situation. Moving before the forecasted 14% sales rebound often means better terms. We'll look at the data for your specific zip code on our call.
            </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white font-geist hover:bg-white/[0.02] transition-colors text-lg">
<span className="pr-6">My home is sitting. Can you fix that?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 text-neutral-500">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-geist text-base border-t border-white/5 pt-4">
              Usually. We'll review your current pricing and marketing honestly. If we can fix it, we'll tell you how. If we can't, we'll tell you that too.
            </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white font-geist hover:bg-white/[0.02] transition-colors text-lg">
<span className="pr-6">How much does it cost?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 text-neutral-500">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-geist text-base border-t border-white/5 pt-4">
              Standard real estate commission. Nothing hidden, nothing upfront. Everything is laid out clearly before you commit to anything.
            </div>
</details>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-16 mx-auto mb-16 px-4 scroll-mt-24" id="calendly">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-100 font-geist tracking-tighter font-medium mb-4">Let's Get Started</h2>
<p className="text-lg text-neutral-400 font-geist mb-8 max-w-xl mx-auto">
        Speak directly with a team member. No bots. No pressure.
      </p>

<div className="w-full h-[700px] bg-white rounded-[32px] overflow-hidden border border-white/10 shadow-2xl relative">
<div className="absolute inset-0 flex items-center justify-center bg-neutral-100 z-0">
<p className="text-neutral-500 font-geist">Loading Calendar...</p>
</div>
<div className="relative z-10 w-full h-full">

<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/robertslack" style={{position: 'relative', minWidth: '320px', height: '100%'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/robertslack?embed_domain=&amp;embed_type=Inline" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</div>
</div>
</section>

<footer className="max-w-7xl sm:px-6 mt-10 mr-auto mb-12 ml-auto pr-4 pl-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid lg:grid-cols-4 gap-10">

<div className="space-y-4">
<div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
              Robert Slack
            </div>
<p className="text-sm leading-relaxed text-neutral-400 font-geist">
              The #1 Real Estate Team in Florida. Curated homes, verified sellers, and concierge support.
            </p>
<div className="text-xs text-neutral-500 font-geist pt-2">info@robertslack.com</div>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">Company</h4>
<ul className="mt-3 space-y-2">
<li className=""><a className="text-sm text-neutral-400 hover:text-white font-geist transition-colors" href="#why-us">Why Us</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white font-geist transition-colors" href="#process">Process</a></li>
<li className=""><a className="text-sm text-neutral-400 hover:text-white font-geist transition-colors" href="#reviews">Reviews</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white font-geist transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">Services</h4>
<ul className="mt-3 space-y-2">
<li className=""><a className="text-sm text-neutral-400 hover:text-white font-geist transition-colors" href="#calendly">Buy / Sell</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white font-geist transition-colors" href="#calendly">Join Our Team</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">Locations</h4>
<ul className="mt-3 space-y-2">
<li><span className="text-sm text-neutral-400 font-geist">Florida, Texas, Georgia</span></li>
<li><span className="text-sm text-neutral-400 font-geist">Colorado, Idaho, TN</span></li>
</ul>
</div>
</div>

<div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
<nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-neutral-400 font-geist">
<a className="hover:text-neutral-200 transition-colors" href="#">Privacy Policy</a>
<span className="text-neutral-700">|</span>
<a className="hover:text-neutral-200 transition-colors" href="#">Terms of Use</a>
</nav>
<div className="text-[11px] text-neutral-500 font-geist">© 2025 Robert Slack LLC. All rights reserved.</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
