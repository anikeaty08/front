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

<div className="fixed inset-0 bg-gradient-to-b from-black/50 via-transparent to-black -z-10"></div>

<header className="sm:px-6 sticky max-w-7xl z-50 mr-auto ml-auto pt-6 pr-4 pl-4 top-4">
<div className="flex shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 border-white/10 border rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 font-semibold tracking-tight text-lg text-white">
          Buffini &amp; Company
        </div>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight transition-colors" href="#programs">Programs</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight transition-colors" href="#about">About</a>
</nav>
<a className="group hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-900 tracking-tight bg-white hover:bg-neutral-200 border border-white/10 rounded-full px-4 py-2 transition-all" href="#calendly">
<span>Book Consultation</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 pt-8 pr-6 pb-10 pl-6 text-center">

<div className="max-w-4xl mx-auto pt-6 pb-4">
<h1 className="text-[8vw] sm:text-[6vw] md:text-5xl lg:text-6xl leading-[1.05] font-semibold text-neutral-100 tracking-tight">
            Build a Real Estate Business That Grows Whether the Market Does or Not
          </h1>
<p className="sm:text-lg lg:text-xl leading-relaxed text-base text-neutral-400 max-w-3xl mt-6 mr-auto ml-auto">Most agents are one market shift away from starting over. There is a proven system that changes that and it has been working for thirty years.</p>
</div>

<div className="mt-8 flex justify-center">
<a className="inline-flex sm:w-auto transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 text-sm font-semibold text-white font-geist bg-blue-950 w-full border-blue-600 border rounded-full px-8 py-3.5 shadow-lg items-center justify-center gap-2" href="#calendly">
            Book Your Free Business Consultation
            <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="mt-12 w-full max-w-5xl mx-auto relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 shadow-2xl" style={{paddingTop: '56.25%'}}>
<div className="absolute inset-0 flex items-center justify-center text-neutral-700 text-sm tracking-tight border border-dashed border-neutral-800 rounded-2xl m-4">
            [ VSL Placeholder ]
          </div>
</div>

<div className="mt-14 max-w-5xl mx-auto border-t border-white/10 pt-8">
<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-neutral-400 text-center px-4">
<span>Largest coaching &amp; training company in North America</span>
<span className="hidden md:inline text-neutral-700">•</span>
<span>4 million+ professionals trained</span>
<span className="hidden md:inline text-neutral-700">•</span>
<span className="">47 countries reached</span>
<span className="hidden lg:inline text-neutral-700">•</span>
<span>Founded 1996 — 30 years in business</span>
<span className="hidden lg:inline text-neutral-700">•</span>
<span>NYT, Amazon &amp; WSJ bestselling author</span>
<span className="hidden xl:inline text-neutral-700">•</span>
<span>Swanepoel Power 200</span>
<span className="hidden xl:inline text-neutral-700">•</span>
<span className="">RISMedia Hall of Fame inductee</span>
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
<div className="relative sm:p-10 pt-8 pr-6 pb-10 pl-6">
<h2 className="text-3xl sm:text-4xl text-neutral-100 tracking-tight font-semibold mb-8 text-center">The Problem</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative flex flex-col justify-center h-full">
<iconify-icon className="text-3xl text-neutral-400 mb-4" icon="solar:chart-square-down-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Your income moves with the market not with your effort</h3>
<p className="text-sm text-neutral-400 leading-relaxed">When rates rise or inventory drops, your pipeline shrinks because it was never really yours to begin with.</p>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-2s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative flex flex-col justify-center h-full">
<iconify-icon className="text-3xl text-neutral-400 mb-4" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">You're renting your business from lead platforms</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Purchased leads don't compound. Every month you stop paying, the pipeline stops. There is no residual, no loyalty, no referral chain.</p>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-4s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative flex flex-col justify-center h-full">
<iconify-icon className="text-3xl text-neutral-400 mb-4" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Nobody trained you to build something that lasts</h3>
<p className="leading-relaxed text-sm text-neutral-400">You were trained to close deals. You were never shown how to build a business that generates its own opportunities month after month, regardless of market conditions.</p>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="process">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 pt-8 pr-6 pb-10 pl-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

<div className="space-y-6">
<div className="flex items-center gap-3">
<span className="h-px w-8 bg-blue-500/50"></span>
<span className="text-sm font-semibold tracking-wider uppercase text-blue-400">The Solution</span>
</div>
<h2 className="text-3xl sm:text-4xl text-neutral-100 tracking-tight font-semibold">Why the Referral System Works</h2>
<p className="text-base leading-relaxed text-neutral-300">
              The Working by Referral system is built on a specific contact frequency, a service standard that turns clients into a marketing engine, and a referral request model that feels natural rather than transactional. 
            </p>
<p className="leading-relaxed text-base text-neutral-300">It does not depend on platforms, algorithms, or market conditions it depends on relationships, which means it compounds over time instead of resetting every month. This is not a leads program or a technology tool it is a business-building methodology refined over thirty years of real-world application across every type of market.</p>
</div>

<div className="">
<h3 className="text-2xl text-neutral-100 tracking-tight font-semibold mb-6">How it unfolds</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-sm font-semibold text-white">1</div>
<div className="">
<h4 className="text-base font-semibold text-white tracking-tight">Book your free consultation</h4>
<p className="text-sm text-neutral-400 mt-1">30 minutes to map your current business and identify the gaps.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-sm font-semibold text-white">2</div>
<div>
<h4 className="text-base font-semibold text-white tracking-tight">Build your database</h4>
<p className="text-sm text-neutral-400 mt-1">Organize every relationship you have into a working system.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-sm font-semibold text-white">3</div>
<div className="">
<h4 className="text-base font-semibold text-white tracking-tight">Start your contact plan</h4>
<p className="text-sm text-neutral-400 mt-1">Specific outreach at specific frequencies that keeps you top of mind.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-sm font-semibold text-white">4</div>
<div className="">
<h4 className="text-base font-semibold text-white tracking-tight">Raise your service standard</h4>
<p className="text-sm text-neutral-400 mt-1">The exact behaviors that turn clients into referral sources.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-sm font-semibold text-white">5</div>
<div className="">
<h4 className="text-base font-semibold text-white tracking-tight">Make referral requests natural</h4>
<p className="text-sm text-neutral-400 mt-1">A part of every conversation: scripted, comfortable, consistent.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-blue-500/50 bg-blue-500/10 flex items-center justify-center text-sm font-semibold text-blue-400">6</div>
<div>
<h4 className="text-base font-semibold text-blue-300 tracking-tight">Compound</h4>
<p className="text-sm text-neutral-400 mt-1">Pipeline shifts within 90 days; business transforms within 12 months.</p>
</div>
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
<div className="relative sm:p-10 pt-8 pr-6 pb-10 pl-6">
<h2 className="text-3xl sm:text-4xl text-neutral-100 tracking-tight font-semibold mb-8 text-center">Client Success</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="outer w-full h-full min-h-[200px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-1s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative flex flex-col justify-between h-full">
<iconify-icon className="text-2xl text-white/20 mb-3" icon="solar:quote-left-bold" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300 italic mb-4 leading-relaxed">
                  [placeholder — client to supply exact testimonial, source platform, and seller/buyer context]
                </p>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[200px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-3s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative flex flex-col justify-between h-full">
<iconify-icon className="text-2xl text-white/20 mb-3" icon="solar:quote-left-bold" strokeWidth="1.5"></iconify-icon>
<p className="leading-relaxed text-sm italic text-neutral-300 mb-4">
                  [placeholder — client to supply exact testimonial, source platform, and seller/buyer context]
                </p>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[200px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-5s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative flex flex-col justify-between h-full">
<iconify-icon className="text-2xl text-white/20 mb-3" icon="solar:quote-left-bold" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300 italic mb-4 leading-relaxed">
                  [placeholder — client to supply exact testimonial, source platform, and seller/buyer context]
                </p>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 max-w-7xl mt-10 mr-auto mb-8 ml-auto pr-4 pl-4" id="programs">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="sm:p-10 pt-8 pr-6 pb-10 pl-6 relative">
<h2 className="text-3xl sm:text-4xl text-neutral-100 tracking-tight font-semibold mb-8 text-center">Programs &amp; Inclusion</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="outer w-full h-full min-h-[400px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative flex flex-col h-full w-full">
<h3 className="text-xl font-semibold tracking-tight text-white pb-4 mb-4 border-b border-white/10">New Agents</h3>
<ul className="text-sm text-neutral-400 space-y-4 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">One2One Coaching tailored to your market and database size</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>100-Day Launch training program</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Working by Referral foundational course</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Weekly accountability with a dedicated Buffini coach</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Full script and tool library access</span>
</li>
</ul>
<div className="pt-5 border-t border-white/10 mt-6">
<p className="text-sm font-semibold text-white">Fee: [placeholder — confirm with client]</p>
</div>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[400px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-2s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative flex flex-col h-full w-full">
<h3 className="text-xl font-semibold tracking-tight text-white pb-4 mb-4 border-b border-white/10">Experienced Agents</h3>
<ul className="text-sm text-neutral-400 space-y-4 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>One2One Coaching with advanced pipeline strategy</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Peak Producers training objection handling, pricing, buyer/seller systems</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">The Blitz 2026: 85% of leads generated in 180 days</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Buffini Coaching Live events access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Bold Predictions market research and forecasting</span>
</li>
</ul>
<div className="pt-5 border-t border-white/10 mt-6">
<p className="text-sm font-semibold text-white">Fee: [placeholder — confirm with client]</p>
</div>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[400px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-4s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative flex flex-col h-full w-full">
<h3 className="text-xl font-semibold tracking-tight text-white pb-4 mb-4 border-b border-white/10">Team Leaders &amp; Brokers</h3>
<ul className="text-sm text-neutral-400 space-y-4 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Group coaching strategy and leadership development</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Buffini Certified Trainer program deliver methodology to your agents</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Recruiter training certification series</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5 text-base flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">National conference and live event access</span>
</li>
</ul>
<div className="pt-5 border-t border-white/10 mt-6">
<p className="text-sm font-semibold text-white">Fee: [placeholder — confirm with client]</p>
</div>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-10 px-4 text-center">
<div className="flex justify-center">
<a className="inline-flex sm:w-auto transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 items-center justify-center gap-2 text-sm font-semibold text-white font-geist bg-blue-950 w-full border-blue-600 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg" href="#calendly">See If the Referral System Is Right for Your Business : Free 30-Minute Call</a>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-4 mx-auto mb-8 px-4">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="outer w-full h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-center justify-center text-center p-6 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative">
<div className="text text-4xl sm:text-5xl font-bold tracking-tight pb-2" style={{background: 'linear-gradient(45deg, rgb(0, 0, 0) 4%, rgb(255, 255, 255), rgb(0, 0, 0)) text', color: 'transparent'}}>
              $369,400
            </div>
<div className="text-sm text-neutral-300 max-w-[200px] mx-auto leading-relaxed">Average One2One Member annual earnings</div>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-1.5s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-center justify-center text-center p-6 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative">
<div className="text text-4xl sm:text-5xl font-bold tracking-tight pb-2" style={{background: 'linear-gradient(45deg, rgb(0, 0, 0) 4%, rgb(255, 255, 255), rgb(0, 0, 0)) text', color: 'transparent'}}>
              10x
            </div>
<div className="text-sm text-neutral-300 max-w-[200px] mx-auto leading-relaxed">vs. national industry average</div>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-3s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-center justify-center text-center p-6 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative">
<div className="text text-4xl sm:text-5xl font-bold tracking-tight pb-2" style={{background: 'linear-gradient(45deg, rgb(0, 0, 0) 4%, rgb(255, 255, 255), rgb(0, 0, 0)) text', color: 'transparent'}}>
              10,000+
            </div>
<div className="text-sm text-neutral-300 max-w-[200px] mx-auto leading-relaxed">Active coaching clients, North America</div>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-[250px] rounded-[10px] p-[1px] relative" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-4.5s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-center justify-center text-center p-6 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #202020, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-20 w-[220px] h-[45px] rounded-full rotate-[40deg] pointer-events-none" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<div className="z-10 relative">
<div className="text text-4xl sm:text-5xl font-bold tracking-tight pb-2" style={{background: 'linear-gradient(45deg, rgb(0, 0, 0) 4%, rgb(255, 255, 255), rgb(0, 0, 0)) text', color: 'transparent'}}>
              178
            </div>
<div className="leading-relaxed text-sm text-neutral-300 max-w-[200px] mr-auto ml-auto">Countries: The Brian Buffini Show listeners</div>
</div>
<div className="line topl absolute w-full h-[1px] pointer-events-none" style={{top: '10%', background: 'linear-gradient(90deg, #555 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full pointer-events-none" style={{left: '10%', background: 'linear-gradient(180deg, #555 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c] pointer-events-none" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c] pointer-events-none" style={{right: '10%'}}></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="about">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="sm:p-10 pt-8 pr-6 pb-10 pl-6 relative">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-4">
<div className="aspect-[3/4] flex flex-col overflow-hidden text-neutral-600 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75070ad1-86a7-4f15-9612-dbf7692af8f6_800w.png)] bg-cover border rounded-2xl relative shadow-xl items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none"></div>
</div>
</div>
<div className="lg:col-span-8">
<h2 className="text-3xl sm:text-4xl text-neutral-100 tracking-tight font-semibold mb-6">About Brian Buffini</h2>
<div className="space-y-4 text-neutral-300 leading-relaxed">
<p className="">Brian Buffini arrived in San Diego from Dublin, Ireland in 1986 with two hundred dollars and no industry contacts. He became one of the nation's top-producing real estate agents by building a business entirely on relationships then spent the next thirty years teaching that model to others.</p>
<p className="">In January 1996 he founded Buffini and Company alongside his wife Beverly. He returned as Chairman and CEO in January 2026 on the company's 30th anniversary. His book <em className="">The Emigrant Edge</em> is a New York Times, Amazon, and Wall Street Journal bestseller. His podcast The Brian Buffini Show, reaches listeners in 178 countries.</p>
</div>
<div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-neutral-500 uppercase tracking-wider">Phone</div>
<div className="text-sm font-medium text-white">[placeholder — confirm with client]</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Email</div>
<div className="text-sm font-medium text-white">[placeholder — confirm with client]</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4" id="faq">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 pt-8 pr-6 pb-10 pl-6">
<h2 className="text-3xl sm:text-4xl text-neutral-100 tracking-tight font-semibold mb-10 text-center">Frequently Asked Questions</h2>
<div className="max-w-3xl mx-auto space-y-6">
<div className="pb-6 border-b border-white/10">
<h4 className="text-lg font-semibold text-white tracking-tight mb-2">I've never heard of Buffini and Company how established is this program?</h4>
<p className="leading-relaxed text-sm text-neutral-400">We have been operating continuously since January 1996: thirty years. We are the largest coaching and training company in North America and have worked with professionals in forty-seven countries. The track record is public and verifiable.</p>
</div>
<div className="pb-6 border-b border-white/10">
<h4 className="text-lg font-semibold text-white tracking-tight mb-2">Do you work with agents at any experience level?</h4>
<p className="leading-relaxed text-sm text-neutral-400">Yes. We have programs designed specifically for new agents starting from scratch and for experienced agents, team leaders, and brokers looking to systematise and scale. The consultation determines which program fits your situation.</p>
</div>
<div className="pb-6 border-b border-white/10">
<h4 className="text-lg font-semibold text-white tracking-tight mb-2">What makes this different from the coaching program I already tried?</h4>
<p className="leading-relaxed text-sm text-neutral-400">Most programs teach tactics: scripts, funnels, platform strategies. Those become obsolete when platforms change. This system is built on human behavior, which does not change. That is why the same methodology has produced consistent results across every market condition for thirty years.</p>
</div>
<div className="pb-6 border-b border-white/10">
<h4 className="text-lg font-semibold text-white tracking-tight mb-2">What areas or markets does this work in?</h4>
<p className="leading-relaxed text-sm text-neutral-400">The Working by Referral system has been applied successfully in forty-seven countries across every market type: high volume, low inventory, shifting rates, rural and metropolitan. It is not market-dependent, which is the point.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white tracking-tight mb-2">What actually happens on the consultation call?</h4>
<p className="leading-relaxed text-sm text-neutral-400">We look at where your business is now, where the gaps are, and whether one of our programs is the right fit for your goals. There is no pitch and no pressure. If it is not a fit, we will tell you.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-16 px-4" id="calendly">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 pt-8 pr-6 pb-10 pl-6 text-center">
<h2 className="text-2xl sm:text-3xl text-neutral-100 tracking-tight font-semibold mb-2">Book Your Consultation</h2>
<p className="text-sm text-neutral-400 mb-8">30 minutes. Free. Book directly with Brian's team, not a contact form.</p>
<div className="w-full max-w-4xl mx-auto h-[600px] bg-[#1a1a1a] border border-white/10 rounded-2xl flex flex-col items-center justify-center text-neutral-600 shadow-inner relative">
<iconify-icon className="text-4xl mb-3" icon="solar:calendar-date-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl sm:px-6 mt-10 mx-auto mb-12 px-4">
<div className="relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="text-lg font-semibold tracking-tight text-white">
          Buffini &amp; Company
        </div>
<div className="text-[11px] text-neutral-500">
          © 2026 Buffini &amp; Company. All rights reserved.
        </div>
</div>
</div>
</footer>

    </>
  );
}
