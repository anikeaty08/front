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
<div className="flex shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 border-white/10 border rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-lg font-semibold tracking-tight text-white font-geist">Carrie McCormick</div>
</div>
<div className="flex items-center gap-6">
<a className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 tracking-tight bg-white hover:bg-neutral-200 transition-colors border border-white/10 rounded-full px-4 py-2" href="#calendly">
<span className="font-geist">Book Strategy Call</span>
<iconify-icon className="" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-12 pt-8 pr-6 pb-8 pl-6 text-center max-w-5xl mx-auto flex flex-col items-center">

<h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl font-semibold text-neutral-100 tracking-tighter font-geist mt-4">Sell Your Chicago Home Once At the Right Price, to the Right Buyer.</h1>
<p className="sm:mt-8 sm:text-lg leading-relaxed text-base text-neutral-400 font-geist max-w-3xl mt-6 mr-auto ml-auto">Most luxury sellers accept a number that was never built for the full market. There's a better way and it starts before the listing goes live.</p>

<div className="mt-10 w-full max-w-md mx-auto flex justify-center">
<a className="inline-flex sm:w-auto transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 text-sm font-semibold text-white font-geist bg-blue-950 w-full border-blue-600 border rounded-full px-8 py-3.5 shadow-lg items-center justify-center" href="#calendly">
            Book Your Free Strategy Call
          </a>
</div>

<div className="mt-12 w-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{paddingTop: '56.25%', backgroundColor: '#1a1a1a'}}>

</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mx-auto mb-12 px-4">
<div className="border-t border-b border-white/10 py-8 px-4">
<div className="flex flex-wrap sm:text-sm text-xs font-medium text-neutral-400 font-geist text-center gap-x-8 gap-y-4 items-center justify-center">
<span className="">#1 Individual Broker - Chicago</span>
<span className="w-1 h-1 rounded-full bg-neutral-600 hidden md:block"></span>
<span>$3.1B+ Career Sales Volume</span>
<span className="w-1 h-1 rounded-full bg-neutral-600 hidden lg:block"></span>
<span className="">Christie's International Real Estate - 45+ Countries</span>
<span className="w-1 h-1 rounded-full bg-neutral-600 hidden md:block"></span>
<span className="">Certified Luxury Home Marketing Specialist (CLHMS)</span>
<span className="w-1 h-1 rounded-full bg-neutral-600 hidden xl:block"></span>
<span className="">Top 1% Chicago Association of Realtors - Consecutive Years</span>
<span className="w-1 h-1 rounded-full bg-neutral-600 hidden lg:block"></span>
<span className="">Featured Broker - NBC 5 Chicago <em className="not-italic opacity-80">Open House Chicago</em></span>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mx-auto mb-16 px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="outer w-full h-full min-h-[18.75rem] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="card z-[1] p-8 flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-center text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[13.75rem] h-[2.8125rem] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<iconify-icon className="text-neutral-400 mb-4" height="28" icon="solar:chart-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3 leading-snug">Your valuation didn't account for who's actually buying.</h3>
<p className="leading-relaxed text-sm text-neutral-400">Local comparables don't reflect international buyer demand and for Chicago luxury properties, the highest offer often comes from outside the city entirely.</p>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[18.75rem] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-2s'}}></div>
<div className="card z-[1] p-8 flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-center text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[13.75rem] h-[2.8125rem] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<iconify-icon className="text-neutral-400 mb-4" height="28" icon="solar:eye-closed-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3 leading-snug">A public listing may cost you more than it earns.</h3>
<p className="text-sm text-neutral-400 leading-relaxed">For high-net-worth sellers, the disruption, privacy exposure, and stigma of days-on-market can reduce both the final price and the quality of the outcome.</p>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[18.75rem] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-4s'}}></div>
<div className="card z-[1] p-8 flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-center text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[13.75rem] h-[2.8125rem] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<iconify-icon className="text-neutral-400 mb-4" height="28" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3 leading-snug">You hired an agent. You got their team.</h3>
<p className="leading-relaxed text-sm text-neutral-400">In most luxury transactions, the broker you signed with hands your file to someone junior within the first week. You don't find out until it matters.</p>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mx-auto mb-16 px-4">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-16 pt-10 pr-6 pb-12 pl-6">
<div className="max-w-4xl mx-auto text-center space-y-6">
<iconify-icon className="text-white/60 mx-auto" height="40" icon="solar:medal-star-linear" strokeWidth="1.5" width="40"></iconify-icon>
<h2 className="text-3xl sm:text-4xl text-neutral-100 font-geist tracking-tight font-semibold">Direct Representation. Curated Strategy.</h2>
<p className="sm:text-lg leading-relaxed sm:text-center text-base text-neutral-300 font-geist text-left mt-4">Carrie's model is intentionally personal when you hire her, you work directly with her, from the first conversation through the closing table, with no handoffs and no junior agents. Her background at the School of the Art Institute of Chicago shapes every marketing decision she makes, not as a credential, but as the reason each listing is built with a distinct creative strategy rather than a template.</p>
<p className="sm:text-lg leading-relaxed sm:text-center text-base text-neutral-300 font-geist text-left">Because she operates as a solo broker rather than a volume team, every client receives her full attention and her full network, activated specifically for their property. That network spans Chicago's private buyer market, corporate relocation pipelines, and Christie's global offices channels that operate in parallel, not in sequence.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mx-auto mb-16 px-4">
<div className="flex items-center gap-3 mb-8 ml-2">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm tracking-widest uppercase text-neutral-300 font-geist">Client Outcomes</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="outer w-full h-full min-h-[25rem] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-1s'}}></div>
<div className="card z-[1] p-8 flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-between text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[13.75rem] h-[2.8125rem] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<iconify-icon className="text-neutral-500 mb-4" height="32" icon="solar:quote-left-bold-duotone" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-sm text-neutral-300 leading-relaxed font-geist italic mb-6 flex-grow">
            "Carrie was instrumental in the sale of our Lincoln Park home. She was able to achieve the sale on the private market thanks to her solid marketing plan, her network, and her overall knowledge of the market, even in these challenging macroeconomic times. Carrie was by our side every step of the way, which resulted in a seamless transaction."
          </p>
<div className="">
<div className="text-sm font-semibold tracking-tight text-white">S&amp;C</div>
<div className="text-[0.6875rem] text-neutral-400 mt-1 uppercase tracking-wider">Verified Google Review | Private off-market sale, Lincoln Park</div>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[25rem] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-3s'}}></div>
<div className="card z-[1] p-8 flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-between text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[13.75rem] h-[2.8125rem] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<iconify-icon className="text-neutral-500 mb-4" height="32" icon="solar:quote-left-bold-duotone" strokeWidth="1.5" width="32"></iconify-icon>
<p className="leading-relaxed flex-grow text-sm italic text-neutral-300 font-geist mb-6">"5 stars is simply insufficient to express the level of value and service that Carrie provides. She provides a bespoke experience. She is truly committed to understanding your needs and tailors her approach in a way that feels far more valuable. From the very first meeting through every showing and all the way through closing. Carrie shows up on time, incredibly prepared, infinitely strategic, and impeccably dressed. When you hire Carrie, you get Carrie."</p>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Verified Client</div>
<div className="text-[0.6875rem] text-neutral-400 mt-1 uppercase tracking-wider">Zillow</div>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[25rem] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-5s'}}></div>
<div className="card z-[1] p-8 flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-between text-left" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[13.75rem] h-[2.8125rem] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<iconify-icon className="text-neutral-500 mb-4" height="32" icon="solar:quote-left-bold-duotone" strokeWidth="1.5" width="32"></iconify-icon>
<p className="leading-relaxed flex-grow text-sm italic text-neutral-300 font-geist mb-6">"We have used Carrie on multiple purchases and sales in the city and North Shore. She makes you feel as if you are her only client in the world. I have never seen anyone work harder. She is patient, not pushy, will be honest with clients, and will help with every step of the process. Her design background is a huge plus. The marketing pictures on our home were beautiful."</p>
<div className="">
<div className="text-sm font-semibold tracking-tight text-white">Verified Client</div>
<div className="text-[0.6875rem] text-neutral-400 mt-1 uppercase tracking-wider">LinkedIn recommendation | Multiple transactions</div>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mx-auto mb-16 px-4">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur p-8 sm:p-12">
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-semibold mb-10 text-center">The Framework</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">

<div className="relative flex flex-col items-start">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-neutral-300 font-geist text-sm mb-4">1</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 mb-2">Strategy call</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-geist">Direct conversation with Carrie about your property, timeline, and goals.</p>
</div>

<div className="relative flex flex-col items-start">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-neutral-300 font-geist text-sm mb-4">2</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 mb-2">Property intelligence</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-geist">Full valuation accounting for private market opportunity and global buyer demand.</p>
</div>

<div className="relative flex flex-col items-start">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-neutral-300 font-geist text-sm mb-4">3</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 mb-2">Marketing build</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-geist">Custom branding, cinematic film, architectural photography, bespoke property website.</p>
</div>

<div className="relative flex flex-col items-start">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-neutral-300 font-geist text-sm mb-4">4</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 mb-2">Buyer activation</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-geist">Private network outreach, Christie's global distribution, relocation and corporate pipeline.</p>
</div>

<div className="relative flex flex-col items-start">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-neutral-300 font-geist text-sm mb-4">5</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 mb-2">Negotiation</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-geist">Carrie represents you personally at every stage to secure the highest quality terms.</p>
</div>

<div className="relative flex flex-col items-start">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-neutral-300 font-geist text-sm mb-4">6</div>
<h3 className="text-base font-semibold tracking-tight text-neutral-100 mb-2">Close</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-geist">Full transaction management through closing day and complete final transition.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mx-auto mb-16 px-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

<div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-white" height="24" icon="solar:home-smile-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white">For Sellers</h3>
</div>
<ul className="space-y-4 text-sm text-neutral-300 font-geist">
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Direct representation by Carrie McCormick — no handoffs</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Full valuation and strategic pricing analysis</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Custom property branding</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Cinematic film production and architectural photography</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Bespoke property website per listing</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Christie's International Real Estate global distribution (45+ countries)</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Strategic press and media placement</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Private market positioning where appropriate</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Curated buyer events where appropriate</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> 24/7 access to Carrie through closing</li>
</ul>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-white" height="24" icon="solar:key-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white">For Buyers</h3>
</div>
<ul className="space-y-4 text-sm text-neutral-300 font-geist">
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Direct access to Carrie's private and pre-market listing network</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Full neighborhood, building, and market analysis</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Relocation concierge coordination</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> School and community resources via Chicago School GPS</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Precision negotiation representation</li>
<li className="flex items-start gap-3"><iconify-icon className="mt-0.5 text-neutral-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> End-to-end transaction management</li>
</ul>
</div>
</div>

<div className="text-xs text-neutral-500 font-geist text-center mb-10">Commission / fee structure: [placeholder: confirm with Carrie before publishing]</div>

<div className="w-full max-w-md mx-auto flex justify-center">
<a className="inline-flex transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 items-center justify-center sm:w-auto text-lg font-semibold text-white font-geist text-center bg-blue-950 w-full border-blue-600 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg" href="#calendly">Get Your Private Home Valuation - 30 Minutes, No Obligation</a>
</div>
</section>

<section className="max-w-7xl sm:px-6 mx-auto mb-16 px-4">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="outer w-full h-[15rem] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-center justify-center" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[13.75rem] h-[2.8125rem] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="text-5xl sm:text-6xl font-semibold tracking-tight" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(45deg, rgb(150, 150, 150) 4%, rgb(255, 255, 255), rgb(150, 150, 150))'}}>24+</div>
<div className="text-neutral-300 text-xs tracking-wider uppercase mt-3 font-geist">Years in Chicago luxury</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-[15rem] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-1.5s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-center justify-center" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[13.75rem] h-[2.8125rem] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="text-5xl sm:text-6xl font-semibold tracking-tight" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(45deg, rgb(150, 150, 150) 4%, rgb(255, 255, 255), rgb(150, 150, 150))'}}>$161M</div>
<div className="text-neutral-300 text-xs tracking-wider uppercase mt-3 font-geist">Sold in a single year</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-[15rem] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-3s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-center justify-center" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[13.75rem] h-[2.8125rem] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="sm:text-6xl text-5xl font-semibold tracking-tight" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(45deg, rgb(150, 150, 150) 4%, rgb(255, 255, 255), rgb(150, 150, 150))'}}>46K</div>
<div className="uppercase text-xs text-neutral-300 tracking-wider font-geist text-center max-w-[80%] mt-3">Agents: ranked in top 15</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-[15rem] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-4.5s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-center justify-center" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[13.75rem] h-[2.8125rem] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="text-5xl sm:text-6xl font-semibold tracking-tight" style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(45deg, rgb(150, 150, 150) 4%, rgb(255, 255, 255), rgb(150, 150, 150))'}}>2</div>
<div className="text-neutral-300 text-xs tracking-wider uppercase mt-3 font-geist">NBC 5 resident broker</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mx-auto mb-16 px-4">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur p-8 sm:p-12">
<div className="grid lg:grid-cols-3 gap-10 items-center">

<div className="lg:col-span-1 aspect-[4/5] flex bg-center text-sm text-neutral-500 font-geist bg-neutral-900 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/862e727e-491e-41cf-beb5-eee02eadc363_800w.webp)] bg-cover border-white/10 border rounded-2xl items-center justify-center"></div>

<div className="lg:col-span-2 space-y-6">
<h2 className="text-3xl text-neutral-100 font-geist tracking-tight font-semibold">About Carrie</h2>
<p className="sm:text-base leading-relaxed text-sm text-neutral-300 font-geist">Carrie McCormick has been selling Chicago's most significant properties for over two decades. Before founding her practice, she served as National Sales Manager at Centrum Properties one of Chicago's largest development firms where she led residential marketing and PR strategy from the inside. That developer-side foundation gave her a perspective on the Chicago market that most brokers never develop.</p>
<p className="sm:text-base leading-relaxed text-sm text-neutral-300 font-geist">
            She trained at the School of the Art Institute of Chicago, and that background is the reason her listing marketing looks and performs differently from anything else in this market. She is the resident luxury broker on NBC 5 Chicago's <em className="not-italic opacity-80">Open House Chicago</em> and has been featured on HGTV's <em className="not-italic opacity-80">House Hunters</em>, in <em className="not-italic opacity-80">Crain's Chicago Business</em>, and in <em className="not-italic opacity-80">Chicago Magazine</em>.
          </p>
<p className="text-sm sm:text-base leading-relaxed text-neutral-300 font-geist">
            Carrie is based in Lincoln Park and serves clients across Chicago and the North Shore.
          </p>
<div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-6 text-sm text-neutral-400 font-geist">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
              312.961.4612
            </div>
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
              carrie@atproperties.com
            </div>
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:diploma-linear" width="18"></iconify-icon>
              License: [placeholder — confirm IL license]
            </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto mb-16 px-4">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-semibold">Frequently Asked Questions</h2>
</div>
<div className="space-y-6">
<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 backdrop-blur">
<h4 className="text-base font-semibold text-white font-geist mb-2">How do I know you're the right agent for a property at this level?</h4>
<p className="leading-relaxed text-sm text-neutral-400 font-geist">Carrie does not advertise broadly her business is built on referrals, repeat clients, and results. The $3.1B career figure and the NBC 5 residency are public and verifiable. The strategy call exists so you can assess the fit directly.</p>
</div>
<div className="bg-neutral-900/40 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<h4 className="text-base font-semibold text-white mb-2 font-geist">Do you take every listing that comes your way?</h4>
<p className="leading-relaxed text-sm text-neutral-400 font-geist">No. Carrie is selective about the properties and clients she takes on because her model only works when she can give each transaction her full attention. If your property and timeline aren't the right fit, she'll tell you.</p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 backdrop-blur">
<h4 className="text-base font-semibold text-white mb-2 font-geist">What areas do you actually cover?</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-geist">Chicago city (Gold Coast, Lincoln Park, West Loop, Bucktown, Andersonville) and the North Shore (Winnetka, Glencoe, Lake Forest). She also works with international and out-of-state buyers relocating to the Chicago area.</p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 backdrop-blur">
<h4 className="text-base font-semibold text-white font-geist mb-2">What happens on the strategy call: is this a sales pitch?</h4>
<p className="leading-relaxed text-sm text-neutral-400 font-geist">It's a direct conversation about your property, your timeline, and what the right outcome looks like for your situation. Carrie will tell you honestly whether she's the right person for it and if she's not, she'll say so.</p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 backdrop-blur">
<h4 className="text-base font-semibold text-white mb-2 font-geist">Can you sell my home without it going on the public market?</h4>
<p className="leading-relaxed text-sm text-neutral-400 font-geist">Yes. Private and off-market sales are a documented part of Carrie's practice particularly for sellers who prioritise discretion over maximum public exposure. Whether that's the right approach for your property is part of the strategy conversation.</p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto mb-24 px-4 scroll-mt-24" id="calendly">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-neutral-100 tracking-tight font-geist">30 minutes. Free. Book directly with Carrie  (not an assistant)</h2>
</div>
<div className="w-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden min-h-[40rem] flex items-center justify-center p-8 text-neutral-500 font-geist text-sm">
      [Calendly embed — placeholder: insert Carrie's scheduling link directly. Full width. No external link.]
    </div>
</section>

<footer className="max-w-7xl sm:px-6 mx-auto mb-8 px-4">
<div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-3 md:justify-between text-center md:text-left">
<div className="text-xs text-neutral-500 font-geist">© 2025 Carrie McCormick, Inc. All rights reserved.</div>
<nav className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-xs text-neutral-400 font-geist">
<a className="hover:text-neutral-200 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-200 transition-colors" href="#">Terms of Use</a>
</nav>
</div>
</footer>

    </>
  );
}
