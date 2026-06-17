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


<div className="fixed inset-0 -z-20">
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
</div>

<header className="sm:px-6 sticky max-w-7xl z-50 mr-auto ml-auto pt-6 pr-4 pl-4 top-4">
<div className="flex shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 font-medium tracking-tight text-lg">
<svg fill="none" height="24" viewbox="0 0 92 36" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8834 4.66666C17.4168 4.66666 16.2168 5.86666 16.2168 7.33332V11.56L18.8834 14.2267L21.5501 11.56V7.33332C21.5501 6.59999 21.2568 5.93332 20.7634 5.43999C20.2834 4.95999 19.6168 4.66666 18.8834 4.66666Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M16.2168 24.44V28.6666C16.2168 30.1333 17.4168 31.3333 18.8834 31.3333C20.3501 31.3333 21.5501 30.1333 21.5501 28.6666V24.44L18.8834 21.7733L16.2168 24.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M12.4434 15.3333H8.21675C6.75008 15.3333 5.55008 16.5333 5.55008 18C5.55008 19.4667 6.75008 20.6667 8.21675 20.6667H12.4434L15.1101 18L12.4434 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M29.5502 15.3333H25.3235L22.6569 18L25.3235 20.6667H29.5502C30.2835 20.6667 30.9502 20.3733 31.4302 19.88C31.9235 19.4 32.2169 18.7333 32.2169 18C32.2169 16.5333 31.0169 15.3333 29.5502 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M28.3101 23.6533L22.6568 18L18.8834 21.7733L24.5368 27.4267C25.5768 28.4667 27.2701 28.4667 28.3101 27.4267C29.3501 26.3867 29.3501 24.6933 28.3101 23.6533Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M13.2301 8.57329C12.7101 8.05329 12.0301 7.78662 11.3367 7.78662C10.6567 7.78662 9.97673 8.05329 9.45673 8.57329C8.41673 9.61329 8.41673 11.3066 9.45673 12.3466L15.1101 18L18.8834 14.2266L13.2301 8.57329Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M9.45673 27.4266C8.41673 26.3866 8.41673 24.6933 9.45673 23.6533L24.5367 8.5733C25.5767 7.5333 27.2701 7.5333 28.3101 8.5733C29.3501 9.6133 29.3501 11.3066 28.3101 12.3466L13.2301 27.4266C12.1901 28.4666 10.4967 28.4666 9.45673 27.4266Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
</svg>
          Liz Hogan Group
        </div>
</div>
<div className="flex items-center gap-6">
<a className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 tracking-tight bg-white hover:bg-indigo-100 border border-white/10 rounded-full px-4 py-2" href="#calendly">
<span>Book Strategy Call</span>
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6 text-center max-w-4xl mx-auto">

<h1 className="text-[12vw] leading-[0.95] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] text-4xl font-medium text-neutral-100 tracking-tight mt-4">
          Sell to Buyers Nobody Else Can Reach
        </h1>
<p className="sm:mt-6 sm:text-lg leading-relaxed text-base text-neutral-400 max-w-2xl mt-4 mr-auto ml-auto">
          Most South Florida luxury listings never meet the buyers who would pay the most for them. That gap is what 20 years of relationship-building was built to close.
        </p>

<div className="mt-8 flex justify-center">
<a className="inline-flex sm:w-auto transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 text-sm font-medium text-white bg-blue-950 w-full md:w-auto border-blue-600 border rounded-full px-8 py-3.5 shadow-lg items-center justify-center" href="#calendly">
            Book Your Free Strategy Call
          </a>
</div>

<div className="mt-12 flex flex-wrap gap-x-4 gap-y-2 text-[11px] sm:text-xs text-neutral-400 border-t border-b border-white/10 py-5 justify-center items-center">
<span className="">#1 Individual Agent · Compass Florida · 2017–2024</span>
<span className="hidden md:inline text-neutral-600">•</span>
<span>Top 10 Agent · Florida · WSJ / Real Trends 2025</span>
<span className="hidden md:inline text-neutral-600">•</span>
<span className="">#59 Agent · United States · WSJ / Real Trends 2025</span>
<span className="hidden lg:inline text-neutral-600">•</span>
<span className="">$3B+ Total Closed Sales</span>
<span className="hidden md:inline text-neutral-600">•</span>
<span>Compass · South Florida</span>
</div>

<div className="mt-12 w-full rounded-2xl overflow-hidden border border-white/10" style={{paddingTop: '56.25%', position: 'relative', backgroundColor: '#1a1a1a'}}>

</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] p-6 sm:p-8 items-start justify-center text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #2a2a2a, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white mb-3 z-10 relative">The buyer who would pay the most isn't browsing listings.</h3>
<p className="sm:text-sm z-10 leading-relaxed text-xs text-neutral-400 relative">The highest offers in Miami's luxury market come from a private network and if your agent isn't in it, those buyers never see your home.</p>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-2s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] p-6 sm:p-8 items-start justify-center text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #2a2a2a, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white mb-3 z-10 relative">Pricing it wrong costs more than the commission.</h3>
<p className="text-xs sm:text-sm text-neutral-400 z-10 relative leading-relaxed">A mispriced property in Coral Gables or Coconut Grove sits, gets stigmatised, and sells below what it would have if it launched correctly the first time.</p>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-4s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] p-6 sm:p-8 items-start justify-center text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #2a2a2a, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white mb-3 z-10 relative">You can't afford to learn the market during your sale.</h3>
<p className="sm:text-sm z-10 leading-relaxed text-xs text-neutral-400 relative">South Florida's micro-markets move differently: what works in Brickell fails in Pinecrest and the difference between a good outcome and a great one is knowing which levers to pull before the offer lands.</p>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl sm:px-6 mt-16 mx-auto mb-16 px-4 text-center">
<p className="sm:text-base leading-relaxed text-sm text-neutral-300">The model is built around network access, not marketing spend. Before any property goes to market, the private buyer pool agents, family offices, relocating executives, and qualified HNW referrals is activated through relationships built over two decades in this city. Pricing is set at the micro-market level, not the zip code level, which means the strategy is calibrated to the specific pool of buyers who will actually compete for a property like yours. Every negotiation is handled personally not delegated, because the relationship between agents on both sides of a South Florida luxury transaction determines how an offer is received before it's even opened.</p>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] p-6 sm:p-8 items-start justify-center text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #2a2a2a, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<p className="text-sm italic text-neutral-300 z-10 relative leading-relaxed mb-4">"Her pricing strategy was spot on and attracted multiple offers within days. You can tell she truly cares about getting the best outcome for her clients. We were in excellent hands."</p>
<div className="text-[11px] text-neutral-500 z-10 relative uppercase tracking-wider">— Verified client · Coconut Grove seller · lizhogangroup.com</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-2s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] p-6 sm:p-8 items-start justify-center text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #2a2a2a, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<p className="text-sm italic text-neutral-300 z-10 relative leading-relaxed mb-4">"Liz came highly recommended, and she absolutely delivered. Her network and experience made all the difference when it came time to negotiate. We've already referred two friends to her."</p>
<div className="text-[11px] text-neutral-500 z-10 relative uppercase tracking-wider">— Verified client · South Florida buyer · lizhogangroup.com</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-4s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] p-6 sm:p-8 items-start justify-center text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #2a2a2a, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<p className="text-sm italic text-neutral-300 z-10 relative leading-relaxed mb-4">"Her professionalism is unmatched, and her extensive network in the real estate industry is a testament to her dedication and expertise. I highly recommend Liz to anyone looking to buy or sell property."</p>
<div className="text-[11px] text-neutral-500 z-10 relative uppercase tracking-wider">— Verified client · lizhogangroup.com</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-16 mx-auto mb-8 px-4">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur p-6 sm:p-10 lg:p-12">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative grid lg:grid-cols-2 gap-16">

<div className="">
<div className="flex gap-3 mb-6 gap-x-3 gap-y-3 items-center">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300">How We Work</span>
</div>
<h2 className="text-2xl sm:text-3xl text-neutral-100 tracking-tight font-medium mb-8">The Process</h2>
<ol className="space-y-4">
<li className="flex items-start gap-4 text-sm sm:text-base text-neutral-300 border border-white/10 p-4 rounded-xl bg-white/5">
<span className="font-medium text-neutral-500 w-5">1.</span>
<span className="">Private strategy call: review property, goals, and timeline.</span>
</li>
<li className="flex items-start gap-4 text-sm sm:text-base text-neutral-300 border border-white/10 p-4 rounded-xl bg-white/5">
<span className="font-medium text-neutral-500 w-5">2.</span>
<span className="">Micro-market pricing analysis: set price based on your specific buyer pool.</span>
</li>
<li className="flex items-start gap-4 text-sm sm:text-base text-neutral-300 border border-white/10 p-4 rounded-xl bg-white/5">
<span className="font-medium text-neutral-500 w-5">3.</span>
<span className="">Pre-market network activation: qualified buyers identified before public launch.</span>
</li>
<li className="flex items-start gap-4 text-sm sm:text-base text-neutral-300 border border-white/10 p-4 rounded-xl bg-white/5">
<span className="font-medium text-neutral-500 w-5">4.</span>
<span className="">Full market launch" professional photography, press placement, and MLS exposure.</span>
</li>
<li className="flex items-start gap-4 text-sm sm:text-base text-neutral-300 border border-white/10 p-4 rounded-xl bg-white/5">
<span className="font-medium text-neutral-500 w-5">5.</span>
<span>Negotiation managed personally by Liz Hogan.</span>
</li>
<li className="flex items-start gap-4 text-sm sm:text-base text-neutral-300 border border-white/10 p-4 rounded-xl bg-white/5">
<span className="font-medium text-neutral-500 w-5">6.</span>
<span>Close and post-sale follow-up.</span>
</li>
</ol>
</div>

<div className="">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300">Deliverables</span>
</div>
<h2 className="text-2xl sm:text-3xl text-neutral-100 tracking-tight font-medium mb-8">What's Included</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">

<div className="">
<h3 className="text-sm font-medium tracking-wider uppercase text-neutral-100 mb-4 pb-2 border-b border-white/10">For Sellers</h3>
<ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Micro-market pricing strategy</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Pre-market private network activation</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Professional photography and marketing materials</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Press and media placement (WSJ, Robb Report, Mansion Global connections)</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Compass global platform distribution</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Personal negotiation by Liz Hogan</li>
<li className="flex gap-2 border-white/5 border-t mt-4 pt-4 gap-x-2 gap-y-2 items-start"><span className="text-neutral-300">Commission: [placeholder confirm with client]</span></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-medium tracking-wider uppercase text-neutral-100 mb-4 pb-2 border-b border-white/10">For Buyers &amp; Relocation</h3>
<ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Off-market and pre-market inventory access</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Neighbourhood and micro-market analysis</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Corporate relocation and executive housing concierge</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Agent-to-agent pre-qualification advocacy</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Personal negotiation by Liz Hogan</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-neutral-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Multi-transaction and portfolio management available</li>
<li className="flex gap-2 items-start mt-4 pt-4 border-t border-white/5"><span className="text-neutral-300">Fee: [placeholder: confirm with client]</span></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl sm:px-6 mt-16 mx-auto mb-16 px-4 text-center">
<a className="inline-flex transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 items-center justify-center sm:w-auto text-xl font-medium text-white bg-blue-950 w-full border-blue-600 border rounded-full px-8 py-3.5 shadow-lg" href="#calendly">Get Your Private Home Valuation - 30 Minutes, No Obligation</a>
</section>

<section className="max-w-7xl sm:px-6 mt-16 mx-auto mb-16 px-4">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center border-y border-white/10 py-12">
<div className="">
<div className="text-4xl sm:text-5xl text-neutral-100 tracking-tight font-medium">20+</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-2">Years in South Florida real estate</p>
</div>
<div className="">
<div className="text-4xl sm:text-5xl text-neutral-100 tracking-tight font-medium">85%+</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-2">Repeat and referral rate</p>
</div>
<div>
<div className="text-4xl sm:text-5xl text-neutral-100 tracking-tight font-medium">$300M+</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-2">Closed in a single year (2021)</p>
</div>
<div>
<div className="text-4xl sm:text-5xl text-neutral-100 tracking-tight font-medium">$54M</div>
<p className="text-[11px] tracking-wider uppercase text-neutral-400 mt-2">Highest single listing — Star Island</p>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-16 px-4">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square md:aspect-[4/3] lg:aspect-square">
<img alt="Liz Hogan" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da666542-bfa8-493a-af68-db5a713dc548_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t from-black/50 via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c27d578d-a136-4adf-9f6a-f67017b76a82_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="max-w-2xl">
<div className="flex items-center gap-3">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300">About Liz Hogan</span>
</div>
<h2 className="mt-2 text-2xl sm:text-3xl text-neutral-100 tracking-tight font-medium">Built on Relationships</h2>
<div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-neutral-400">
<p className="">I grew up in Coral Gables. I went to Ransom Everglades, studied at the University of San Diego, and came back to Miami to build my career in the market I know best. I started in residential real estate before luxury was the focus, working every segment, learning the city neighbourhood by neighbourhood, relationship by relationship.</p>
<p className="">Over time the business became what it is now: a boutique practice built around a network of clients, agents, and industry contacts that took two decades to develop. I work with individuals and families, with Fortune 500 companies and family offices, with executives relocating to South Florida and sellers who've spent years deciding when to move. What they have in common is that they value honest counsel over a sales pitch and that is the standard I hold myself to in every transaction.</p>
</div>
<div className="mt-8 pt-8 border-t border-white/10 space-y-2 text-sm text-neutral-300">
<div><span className="text-neutral-500">Phone:</span> 305-804-9700</div>
<div className=""><span className="text-neutral-500">Email:</span> liz@listingmiami.com</div>
<div className=""><span className="text-neutral-500">License number:</span> [placeholder — confirm with client]</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl sm:px-6 mt-16 mx-auto mb-16 px-4">
<div className="flex items-center justify-center gap-3 mb-6">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300">FAQ</span>
<span className="h-px w-8 bg-white/20"></span>
</div>
<h2 className="text-2xl sm:text-3xl text-neutral-100 tracking-tight font-medium mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
<summary className="flex cursor-pointer sm:text-base transition hover:bg-white/5 text-sm font-medium text-white pt-5 pr-5 pb-5 pl-5 items-center justify-between">How do I know you're the right agent?</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-white/5 mt-1">
          Most of my business comes through referrals from people who've worked with me directly — not from advertising. If you'd like third-party validation, my work has been covered in the Wall Street Journal, Robb Report, Mansion Global, and The Real Deal, and I've spoken at The Real Deal's South Florida Real Estate Forum. The call is the fastest way to see for yourself.
        </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm sm:text-base font-medium text-white transition hover:bg-white/5">
          Do you take every listing that comes to you?
          <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-white">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-white/5 mt-1">
          No. I work with a selective client base because personal attention requires it. When I take on a property, I'm managing it directly — not handing it to a team. That selectivity is what produces consistent outcomes.
        </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm sm:text-base font-medium text-white transition hover:bg-white/5">
          What areas do you cover?
          <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-white">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-white/5 mt-1">
          My primary markets are Coral Gables, Coconut Grove, Miami Beach, Brickell, Pinecrest, Palmetto Bay, Gables Estates, Star Island, and Palm Island. If your property is outside these areas, I'll tell you honestly whether I'm the right fit or can refer you to someone who is.
        </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm sm:text-base font-medium text-white transition hover:bg-white/5">
          What actually happens on the strategy call?
          <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-hover:text-white">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-white/5 mt-1">
          I come prepared with a real analysis of your property and the current micro-market conditions — not a generic presentation. You'll leave the call knowing exactly what your home is worth, who the likely buyers are, and what a launch strategy looks like. There's no pitch and no obligation.
        </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
<summary className="flex cursor-pointer sm:text-base transition hover:bg-white/5 text-sm font-medium text-white pt-5 pr-5 pb-5 pl-5 items-center justify-between">Can you handle corporate housing needs?</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-white/5 mt-1">
          Yes. I work with Fortune 500 companies, equity funds, and family corporate offices on executive housing and relocation. If your company is placing people in South Florida, reach out directly and we can discuss a structured approach.
        </div>
</details>
</div>
</section>

<section className="max-w-4xl sm:px-6 mt-20 mx-auto mb-24 px-4 scroll-mt-24" id="calendly">
<div className="text-center mb-6">
<h2 className="text-xl sm:text-2xl text-neutral-100 tracking-tight font-medium">30 minutes. Free</h2></div></section>
    </>
  );
}
