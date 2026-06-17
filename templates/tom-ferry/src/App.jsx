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
      

<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="XKOypOfa1PB1AP8SFWUj"></div>


<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
</div>

<header className="sm:px-6 sticky max-w-7xl z-50 mr-auto ml-auto pt-6 pr-4 pl-4 top-4">
<div className="flex bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 pl-2">
<span className="text-neutral-100 font-semibold text-lg tracking-tight font-geist">Tom Ferry</span>
</div>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:inline-flex sm:w-auto transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 text-xs font-semibold text-white font-geist bg-blue-950 border-blue-600 border rounded-full px-5 py-2 shadow-lg items-center justify-center" href="#calendly">
          Book a Call
        </a>
</div>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6 flex flex-col items-center text-center">

<h1 className="text-[9.5vw] leading-[0.95] sm:text-[8vw] md:text-[6.5vw] lg:text-[6vw] font-medium text-neutral-100 tracking-tight font-geist mt-4">Every Month Without the Right Structure Is a Month You're Leaving Money on the Table.</h1>
<p className="sm:text-lg leading-relaxed text-base text-neutral-400 font-geist max-w-3xl mt-4 mr-auto ml-auto">Most agents grind harder every year and still hit the same ceiling. This is the coaching program that fixes the structure underneath the effort not the effort itself.</p>

<div className="mt-8 flex justify-center w-full">
<a className="inline-flex sm:w-auto transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 text-sm font-semibold text-white font-geist bg-blue-950 w-full sm:max-w-xs border-blue-600 border rounded-full px-8 py-3.5 shadow-lg items-center justify-center" href="#calendly">
            Book Your Free Strategy Session
          </a>
</div>

<div className="flex flex-wrap items-center justify-center gap-3 mt-8 pt-6 border-t border-white/10 w-full">
<div className="inline-flex gap-1.5 text-[11px] whitespace-nowrap font-medium text-neutral-300 font-geist bg-white/5 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center">#1 Real Estate Coach - Swanepoel Power 200</div>
<div className="inline-flex gap-1.5 text-[11px] whitespace-nowrap font-medium text-neutral-300 font-geist bg-white/5 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<iconify-icon className="text-sm" icon="solar:cup-star-linear"></iconify-icon> 12 Consecutive Years Ranked #1
          </div>
<div className="inline-flex text-[11px] whitespace-nowrap font-medium text-neutral-300 font-geist bg-white/5 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center">200+ Certified Coaches - 4 Countries</div>
<div className="inline-flex gap-1.5 text-[11px] whitespace-nowrap font-medium text-neutral-300 font-geist bg-white/5 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center">4.9★ Google Rating - 1,000+ Reviews</div>
<div className="inline-flex gap-1.5 text-[11px] whitespace-nowrap font-medium text-neutral-300 font-geist bg-white/5 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<iconify-icon className="text-sm" icon="solar:graph-up-linear"></iconify-icon> Coaching Members Earn 8X Industry Average GCI
          </div>
</div>

<div className="mt-8 w-full bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden relative" style={{paddingTop: '56.25%'}}>

</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="outer w-full h-full min-h-[260px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-start p-6 sm:p-8" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="relative z-10 w-full">
<h3 className="leading-snug text-lg font-medium text-white tracking-tight font-geist mb-3">You're producing and it still feels fragile.</h3>
<p className="leading-relaxed text-sm text-neutral-300 font-geist">Thirty, fifty, eighty deals a year and one slow month still makes you question everything, because the whole machine runs through you personally.</p>
</div>
<div className="line topl absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[260px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '1s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-start p-6 sm:p-8" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="relative z-10 w-full">
<h3 className="text-lg font-medium tracking-tight text-white font-geist mb-3 leading-snug">You know what to do. You're not doing it consistently.</h3>
<p className="leading-relaxed text-sm text-neutral-300 font-geist">You've read the books, watched the videos, attended the events - the problem has never been information. It's the accountability to implement when things get hard.</p>
</div>
<div className="line topl absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[260px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '2s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-start p-6 sm:p-8" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="relative z-10 w-full">
<h3 className="text-lg font-medium tracking-tight text-white font-geist mb-3 leading-snug">You're building a job, not a business.</h3>
<p className="leading-relaxed text-sm text-neutral-300 font-geist">Every lead, follow-up, and closing conversation depends on you showing up and the version of your business that can't run without you has a very hard ceiling.</p>
</div>
<div className="line topl absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>
</div>

<div className="mt-12 pt-10 border-t border-white/10 max-w-4xl mx-auto">
<p className="sm:text-lg leading-relaxed block text-base text-neutral-300 font-geist">Tom Ferry coaching is not a call where someone tells you what to do and wishes you luck. Every session is built around what you committed to last week, what your numbers show in the tracking platform, and the exact point where you drifted so the conversation is always about your specific business, not a generic playbook. The 8 Levels of Performance framework means your coach meets you at your current production level and builds forward from there, not from a template designed for someone else. And because the program is an ecosystem private masterminds, a cross-market referral network, and direct access to the industry's most current strategies the value compounds every month you stay in it.</p>
</div>
</div>
</div>
</section>

<section className="sm:px-6 max-w-7xl mt-10 mr-auto mb-8 ml-auto pr-4 pl-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="outer w-full h-full min-h-[260px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '0.5s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-start p-6 sm:p-8" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 flex flex-col w-full h-full relative justify-between">
<p className="leading-relaxed text-sm italic text-neutral-200 font-geist">"Coaching hasn't just transformed my business my team will sell over 200 homes this year it's completely changed my life."</p>
<div className="mt-6 text-[11px] uppercase tracking-wider text-neutral-400 font-geist">— Tom Ferry Coaching Member</div>
</div>
<div className="line topl absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[260px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '1.5s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-start p-6 sm:p-8" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="relative z-10 w-full h-full flex flex-col justify-between">
<p className="text-sm text-neutral-200 font-geist leading-relaxed italic">"As of August, I'm already 60% higher in GCI than all of last year. I can't imagine a world without coaching."</p>
<div className="mt-6 text-[11px] uppercase tracking-wider text-neutral-400 font-geist">— Elite Coaching Member</div>
</div>
<div className="line topl absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[260px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '2.5s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-start p-6 sm:p-8" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="relative z-10 w-full h-full flex flex-col justify-between">
<p className="leading-relaxed text-sm italic text-neutral-200 font-geist">"The Tom Ferry coaching program has helped us dominate our geographic farm, generate millions in GCI, and enjoy our family of five. We are happier and get great referrals."</p>
<div className="mt-6 text-[11px] uppercase tracking-wider text-neutral-400 font-geist">— Tom Ferry Coaching Member</div>
</div>
<div className="line topl absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>
</div>

<div className="mt-12 pt-10 border-t border-white/10">
<div className="max-w-4xl mr-auto ml-auto space-y-5">
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-geist text-sm text-white border border-white/10 mt-1">1</div>
<p className="sm:text-base leading-relaxed text-sm text-neutral-300 font-geist pt-1.5"><strong>Assessment</strong> - your coach identifies your position in the 8 Levels of Performance and maps your specific gaps</p>
</div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-geist text-sm text-white border border-white/10 mt-1">2</div>
<p className="sm:text-base leading-relaxed text-sm text-neutral-300 font-geist pt-1.5"><strong>Plan</strong> - a custom 12-month roadmap built around your production, your market, and your ceiling</p>
</div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-geist text-sm text-white border border-white/10 mt-1">3</div>
<p className="sm:text-base leading-relaxed text-sm text-neutral-300 font-geist pt-1.5"><strong>Weekly coaching</strong> - one-on-one sessions focused entirely on money-making activities with a specific action list every call</p>
</div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-geist text-sm text-white border border-white/10 mt-1">4</div>
<p className="sm:text-base leading-relaxed text-sm text-neutral-300 font-geist pt-1.5"><strong>Tracking</strong> - your activity logged weekly in the illūm platform so drift is caught before it becomes a month</p>
</div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-geist text-sm text-white border border-white/10 mt-1">5</div>
<p className="sm:text-base leading-relaxed text-sm text-neutral-300 font-geist pt-1.5"><strong>Community</strong> - access to private masterminds, a cross-market referral network, and free admission to Tom Ferry events</p>
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
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">

<div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
<div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
<h3 className="sm:text-xl text-lg font-medium text-white tracking-tight font-geist mb-6">Core+ and Elite+ Solo Agents and Team Members</h3>
<ul className="space-y-4 text-sm text-neutral-300 font-geist relative z-10">
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">2 coaching sessions per month (Core+) or 4 per month (Elite+)</span></li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">illūm coaching platform activity tracking, referral network, role-play scripts</span></li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">Revii AI - exclusive premium member version</span></li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">Core or Elite mastermind group access</span></li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">Free admission to the Tom Ferry Success Summit and public events</span></li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">Unlimited resource library scripts, marketing playbooks, business planning templates</span></li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>Cross-market referral network</span></li>
</ul>
<div className="mt-8 pt-6 border-t border-white/10 text-white font-medium text-sm font-geist">
              Starting from $749/month (Core+) or $1,299/month (Elite+)
            </div>
</div>
<div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
<h3 className="sm:text-xl text-lg font-medium text-white tracking-tight font-geist mb-6">Team and Legacy - Team Leaders and Brokers</h3>
<ul className="space-y-4 text-sm text-neutral-300 font-geist relative z-10">
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">Up to 72 coaching sessions per year -allocated to leader and/or team</span></li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">Two annual retreats (Mastery tier and above)</span></li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">Quarterly masterminds with fellow team leaders</span></li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">Team-exclusive events and webinars with Tom and specialist guests</span></li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">Recruiting, onboarding, and retention systems - plug and play</span></li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="">Legacy tier available by invitation only</span></li>
</ul>
<div className="text-sm font-medium text-white font-geist border-white/10 border-t mt-8 pt-6">Pricing by consultation [client to confirm public pricing or remove]</div>
</div>
</div>

<div className="mt-12 flex justify-center w-full">
<a className="inline-flex sm:w-auto transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 sm:max-w-md items-center justify-center text-xl font-semibold text-white font-geist text-center bg-blue-950 w-full border-blue-600 border rounded-full px-8 py-3.5 shadow-lg" href="#calendly">Show Me What's Holding My Production Back - Book a Free Call</a>
</div>

<div className="mt-14 pt-12 border-t border-white/10">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div className="">
<div className="text-4xl sm:text-5xl lg:text-6xl text-neutral-100 font-geist tracking-tighter font-medium">70,000+</div>
<p className="text-[11px] sm:text-xs tracking-wider uppercase text-neutral-400 mt-3 font-geist">Hours coached by Tom personally</p>
</div>
<div>
<div className="text-4xl sm:text-5xl lg:text-6xl text-neutral-100 font-geist tracking-tighter font-medium">2002</div>
<p className="text-[11px] sm:text-xs tracking-wider uppercase text-neutral-400 mt-3 font-geist">Year Ferry International was founded</p>
</div>
<div className="">
<div className="text-4xl sm:text-5xl lg:text-6xl text-neutral-100 font-geist tracking-tighter font-medium">$60M</div>
<p className="text-[11px] sm:text-xs tracking-wider uppercase text-neutral-400 mt-3 font-geist">Estimated personal net worth</p>
</div>
<div className="">
<div className="text-4xl sm:text-5xl lg:text-6xl text-neutral-100 font-geist tracking-tighter font-medium">30+</div>
<p className="text-[11px] sm:text-xs tracking-wider uppercase text-neutral-400 mt-3 font-geist">Companies in the Ferry Ventures portfolio</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-12 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">

<div className="grid lg:grid-cols-3 gap-8 items-start">
<div className="lg:col-span-1">
<div className="overflow-hidden aspect-square flex bg-center text-center bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0bcbcc7-950c-4ec6-90a7-6aebb59e8786_800w.jpg)] bg-cover border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
</div>
</div>
<div className="lg:col-span-2 space-y-4 pt-2">
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium">About Tom Ferry</h2>
<p className="sm:text-base leading-relaxed text-sm text-neutral-400 font-geist">Tom Ferry grew up inside the real estate industry his father built and walked away from it at 25 to build something larger. After becoming president of the Mike Ferry Organization and scaling it past a ceiling no coaching company had broken before, he founded Ferry International in 2002 with one belief: that agents do not fail because they lack talent, they fail because they lack structure. He has spent every year since proving it: one coaching relationship at a time, in every market condition the industry has thrown at him.</p>
<p className="text-sm sm:text-base leading-relaxed text-neutral-400 font-geist">
              He lives between Orange County and Dallas with his wife Kathy. Their two sons, Michael and Steven, have both entered real estate.
            </p>
<div className="mt-6 pt-4 border-t border-white/10 space-y-1 text-sm text-neutral-300 font-geist">
<div><strong className="text-white font-medium">Phone:</strong> [client to confirm direct line]</div>
<div className=""><strong className="text-white font-medium">Email:</strong> [client to confirm direct email]</div>
</div>
</div>
</div>

<div className="mt-16 pt-12 border-t border-white/10 max-w-3xl mx-auto">
<h2 className="text-2xl font-medium text-neutral-100 tracking-tight font-geist text-center mb-8">Frequently Asked Questions</h2>
<div className="space-y-3">
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-colors hover:bg-white/10">
<summary className="flex items-center justify-between p-5 font-medium text-white font-geist select-none list-none [&amp;::-webkit-details-marker]:hidden text-sm sm:text-base">
                Why haven't I heard of Tom Ferry coaching until now?
                <span className="transition group-open:rotate-180 text-white/50"><iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 font-geist leading-relaxed">
                Most agents find this program through a referral from another coached agent — not advertising. The community grows through results, not through a marketing budget, which is why the Google rating sits where it does after over a thousand reviews.
              </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-colors hover:bg-white/10">
<summary className="flex select-none list-none [&amp;::-webkit-details-marker]:hidden sm:text-base text-sm font-medium text-white font-geist pt-5 pr-5 pb-5 pl-5 items-center justify-between">
                Do you take every agent who applies?
                <span className="transition group-open:rotate-180 text-white/50"><iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 font-geist leading-relaxed">
                No. The strategy session is a genuine two-way conversation — your coach is assessing whether the program is the right fit for your goals and your current position, not selling you a subscription. Agents who are not ready or not a fit are told directly.
              </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-colors hover:bg-white/10">
<summary className="flex items-center justify-between p-5 font-medium text-white font-geist select-none list-none [&amp;::-webkit-details-marker]:hidden text-sm sm:text-base">
                I've been in real estate for years. Is this still relevant at my level?
                <span className="transition group-open:rotate-180 text-white/50"><iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 font-geist leading-relaxed">
                The 8 Levels of Performance framework is built specifically for experienced producers — agents who are already generating volume but have hit a structural ceiling that effort alone will not break. The higher your current production, the more specifically the program can target the gap.
              </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-colors hover:bg-white/10">
<summary className="flex items-center justify-between p-5 font-medium text-white font-geist select-none list-none [&amp;::-webkit-details-marker]:hidden text-sm sm:text-base">
                Which markets and countries do you operate in?
                <span className="transition group-open:rotate-180 text-white/50"><iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 font-geist leading-relaxed">
                Ferry International operates across the United States, Canada, Australia, and the United Kingdom. Your coach will be matched to your market and your specific production context — not assigned generically.
              </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-colors hover:bg-white/10">
<summary className="flex items-center justify-between p-5 font-medium text-white font-geist select-none list-none [&amp;::-webkit-details-marker]:hidden text-sm sm:text-base">
                What actually happens on the free strategy call?
                <span className="transition group-open:rotate-180 text-white/50"><iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 font-geist leading-relaxed">
                A senior Tom Ferry business consultant maps your current production, identifies the specific ceiling you are hitting, and shows you what the next level of your business looks like structurally. There is no pitch until you ask. If the program is not right for you, you will be told that too.
              </div>
</details>
</div>
</div>

<div className="mt-16 pt-12 border-t border-white/10" id="calendly">
<div className="text-center mb-8 flex flex-col items-center">
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium mb-4">Book Your Strategy Session</h2>
<div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-xs sm:text-sm text-neutral-300 font-geist">
<iconify-icon className="text-white" icon="solar:clock-circle-linear"></iconify-icon>
              30 minutes. Free. Book directly with a Tom Ferry business consultant.
            </div>
</div>

<div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

<div className="relative z-10 flex flex-col items-center text-center space-y-4">
<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/10 mb-2">
<iconify-icon className="text-3xl text-neutral-300" icon="solar:calendar-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white font-geist">Calendly Embed Placeholder</h3>
<p className="text-sm text-neutral-400 font-geist max-w-md mx-auto leading-relaxed">
                When you implement Calendly, the embed script will replace this container. It typically takes up about 600px to 700px of height.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
