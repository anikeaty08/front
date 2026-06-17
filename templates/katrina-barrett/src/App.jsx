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


<header className="sm:px-6 sticky max-w-7xl z-50 mr-auto ml-auto pt-6 pr-4 pl-4 top-4">
<div className="flex shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md items-center justify-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">

<svg className="" fill="none" height="36" viewbox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8834 4.66666C17.4168 4.66666 16.2168 5.86666 16.2168 7.33332V11.56L18.8834 14.2267L21.5501 11.56V7.33332C21.5501 6.59999 21.2568 5.93332 20.7634 5.43999C20.2834 4.95999 19.6168 4.66666 18.8834 4.66666Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M16.2168 24.44V28.6666C16.2168 30.1333 17.4168 31.3333 18.8834 31.3333C20.3501 31.3333 21.5501 30.1333 21.5501 28.6666V24.44L18.8834 21.7733L16.2168 24.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M12.4434 15.3333H8.21675C6.75008 15.3333 5.55008 16.5333 5.55008 18C5.55008 19.4667 6.75008 20.6667 8.21675 20.6667H12.4434L15.1101 18L12.4434 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" d="M29.5502 15.3333H25.3235L22.6569 18L25.3235 20.6667H29.5502C30.2835 20.6667 30.9502 20.3733 31.4302 19.88C31.9235 19.4 32.2169 18.7333 32.2169 18C32.2169 16.5333 31.0169 15.3333 29.5502 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M28.3101 23.6533L22.6568 18L18.8834 21.7733L24.5368 27.4267C25.5768 28.4667 27.2701 28.4667 28.3101 27.4267C29.3501 26.3867 29.3501 24.6933 28.3101 23.6533Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M13.2301 8.57329C12.7101 8.05329 12.0301 7.78662 11.3367 7.78662C10.6567 7.78662 9.97673 8.05329 9.45673 8.57329C8.41673 9.61329 8.41673 11.3066 9.45673 12.3466L15.1101 18L18.8834 14.2266L13.2301 8.57329Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M9.45673 27.4266C8.41673 26.3866 8.41673 24.6933 9.45673 23.6533L24.5367 8.5733C25.5767 7.5333 27.2701 7.5333 28.3101 8.5733C29.3501 9.6133 29.3501 11.3066 28.3101 12.3466L13.2301 27.4266C12.1901 28.4666 10.4967 28.4666 9.45673 27.4266Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</header>

<section className="max-w-5xl sm:px-6 mt-20 mx-auto px-4 text-center">
<h1 className="text-[8.5vw] leading-[1.05] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] text-5xl font-semibold text-neutral-100 tracking-tight font-geist mt-4">
      Sell for More. Close Faster. With Buyers No One Else Can Reach.
    </h1>
<p className="mt-6 text-lg sm:text-xl leading-relaxed text-neutral-400 font-geist max-w-3xl mx-auto">
      Most luxury sellers in Arizona find out they chose the wrong agent after they've already signed. Here's what working at the right level actually looks like.
    </p>
</section>

<section className="max-w-5xl sm:px-6 mt-12 mx-auto px-4 w-full">
<div className="relative w-full pt-[56.25%] bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-[0_12px_24px_-12px_rgba(0,0,0,0.5)] border border-white/5">

</div>
</section>

<section className="mt-12 mx-auto flex justify-center px-4 w-full max-w-sm">
<a className="inline-flex sm:w-auto transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 text-sm font-semibold text-white font-geist bg-blue-950 w-full border-blue-600 border rounded-full px-8 py-3.5 shadow-lg items-center justify-center tracking-tight" href="#calendly">
      Book Your Private Conversation
    </a>
</section>

<section className="max-w-7xl sm:px-6 mt-20 mx-auto px-4">
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 border-y border-white/10 py-8 text-neutral-300 font-geist">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/40 w-5 h-5" icon="solar:medal-star-linear" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">#1 Real Estate Agent - Arizona 2024</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/40 w-5 h-5" icon="solar:global-linear" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">#17 United States by Volume</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/40 w-5 h-5" icon="solar:wad-of-money-linear" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">$2.5B+ Career Luxury Sales</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/40 w-5 h-5" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Christie's Masters Circle</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/40 w-5 h-5" icon="solar:cup-star-linear" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Top 100 US Agents - 3 Consecutive Years</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-white/40 w-5 h-5" icon="solar:home-smile-linear" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Walt Danley Local Luxury Christie's International Real Estate</span>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-20 mx-auto px-4">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative font-geist" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-center p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3 relative z-10">Your listing is priced from last year's comps</h3>
<p className="z-10 leading-relaxed text-sm text-neutral-300 relative">The buyers entering Arizona from Washington and California right now are paying prices your current agent hasn't caught up to yet.</p>
<div className="line topl absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative font-geist" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-2s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-center p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3 relative z-10">The cash buyers don't use the MLS</h3>
<p className="leading-relaxed text-sm text-neutral-300 z-10 relative">Out-of-state buyers who pay full price with no contingencies are not searching Zillow they're moving through private networks you don't currently have access to.</p>
<div className="line topl absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="outer w-full h-full min-h-[250px] rounded-[10px] p-[1px] relative font-geist" style={{background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)'}}>
<div className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]" style={{boxShadow: '0 0 10px #ffffff', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite', animationDelay: '-4s'}}></div>
<div className="card z-[1] flex relative flex-col text-white w-full h-full border-[#202222] border rounded-[9px] items-start justify-center p-8 overflow-hidden" style={{background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)'}}>
<div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#c7c7c7', boxShadow: '0 0 50px #fff', transformOrigin: '10%'}}></div>
<h3 className="z-10 text-xl font-semibold text-white tracking-tight mb-3 relative">Your property has one shot at the right first impression</h3>
<p className="text-sm text-neutral-300 relative z-10 leading-relaxed">Weak presentation signals negotiating room to serious buyers before a single conversation happens.</p>
<div className="line topl absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)'}}></div>
<div className="line leftl absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)'}}></div>
<div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl sm:px-6 mt-28 mx-auto px-4 text-center">
<p className="sm:text-lg leading-relaxed text-base text-neutral-300 font-geist">When I acquired Walt Danley Christie's International, I didn't buy a brand. I bought a global referral network active in every major luxury city on earth, which means your property reaches buyers in London, Dubai, and Singapore who are specifically looking for what you have. I came from finance, so I price analytically, not from instinct or outdated comps, and every transaction is handled by me personally, from valuation through close, with no handoffs to assistants at any stage.</p>
</section>

<section className="max-w-7xl sm:px-6 mt-28 mx-auto px-4">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-center min-h-[200px]">
<p className="leading-relaxed text-sm text-neutral-400 font-geist">"Katrina’s data-driven approach changed everything. She priced our home 15% higher than three other agents suggested, and we closed in two weeks with a cash buyer from her private network. Phenomenal execution." <br/><br/>— Seller, Paradise Valley</p>
</div>

<div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-center min-h-[200px]">
<p className="text-neutral-400 font-geist text-sm leading-relaxed">"We were looking for an off-market estate in Silverleaf. Katrina not only found exactly what we wanted before it went public, but she handled the negotiations flawlessly. She is a true professional." <br/><br/>— Buyer, North Scottsdale</p>
</div>

<div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-center min-h-[200px]">
<p className="text-neutral-400 font-geist text-sm leading-relaxed">"I've worked with many top agents across the country, and Katrina is on another level. Her market knowledge, presentation strategy, and Christie’s network access secured a record-breaking price for our property." <br/><br/>— Seller, Arcadia</p>
</div>
</div>
</section>

<section className="max-w-4xl sm:px-6 mt-28 mx-auto px-4">
<div className="bg-neutral-900/60 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-xl">
<ol className="space-y-6 text-neutral-300 font-geist text-base sm:text-lg">
<li className="flex gap-4 sm:gap-6 border-b border-white/5 pb-6">
<span className="text-neutral-500 font-semibold mt-0.5">1.</span>
<div className="leading-relaxed"><span className="font-semibold text-neutral-100">Private valuation</span> — property analyzed against what buyers are paying right now</div>
</li>
<li className="flex gap-4 sm:gap-6 border-b border-white/5 pb-6">
<span className="text-neutral-500 font-semibold mt-0.5">2.</span>
<div className="leading-relaxed"><span className="font-semibold text-neutral-100">Presentation build</span> — photography, drone video, and listing materials produced</div>
</li>
<li className="flex gap-4 sm:gap-6 border-b border-white/5 pb-6">
<span className="text-neutral-500 font-semibold mt-0.5">3.</span>
<div className="leading-relaxed"><span className="font-semibold text-neutral-100">Network activation</span> — Christie's global distribution and private buyer database engaged</div>
</li>
<li className="flex gap-4 sm:gap-6 border-b border-white/5 pb-6">
<span className="text-neutral-500 font-semibold mt-0.5">4.</span>
<div className="leading-relaxed"><span className="font-semibold text-neutral-100">Off-market outreach</span> — qualified buyers contacted before the property goes public</div>
</li>
<li className="flex gap-4 sm:gap-6 border-b border-white/5 pb-6">
<span className="text-neutral-500 font-semibold mt-0.5">5.</span>
<div className="leading-relaxed"><span className="font-semibold text-neutral-100">Direct negotiation</span> — Katrina handles every conversation personally through close</div>
</li>
<li className="flex gap-4 sm:gap-6">
<span className="text-neutral-500 font-semibold mt-0.5">6.</span>
<div className="leading-relaxed"><span className="font-semibold text-neutral-100">Transaction management</span> — no handoffs from first showing to final signature</div>
</li>
</ol>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-28 mx-auto px-4">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 font-geist">

<div className="">
<h3 className="text-xl font-semibold text-neutral-100 mb-6 tracking-tight">Sellers</h3>
<ul className="space-y-4 text-sm sm:text-base text-neutral-400">
<li>Private valuation</li>
<li className="">Full presentation production</li>
<li>Christie's global listing distribution</li>
<li className="">Off-market buyer outreach</li>
<li>Direct negotiation</li>
<li className="">Transaction management through close</li>
<li className="pt-4 mt-2 border-t border-white/10 text-neutral-200">Fee structure: Custom structure based on property valuation and scope.</li>
</ul>
</div>

<div className="">
<h3 className="text-xl font-semibold text-neutral-100 mb-6 tracking-tight">Buyers</h3>
<ul className="space-y-4 text-sm sm:text-base text-neutral-400">
<li>Off-market listing access via private app</li>
<li className="">Properties never published on MLS or Zillow</li>
<li className="">Christie's global referral introductions</li>
<li>Direct access to off-market deal flow</li>
<li className="pt-4 mt-2 border-t border-white/10 text-neutral-200">Fee structure: Standard representation, no direct cost to buyer.</li>
</ul>
</div>

<div>
<h3 className="text-xl font-semibold text-neutral-100 mb-6 tracking-tight">Investors and Developers</h3>
<ul className="space-y-4 text-sm sm:text-base text-neutral-400">
<li>Market intelligence and price trend analysis</li>
<li>Land and development site access</li>
<li>Builder and trade introductions</li>
<li>Hold/sell strategy based on current data</li>
<li className="pt-4 mt-2 border-t border-white/10 text-neutral-200">Fee structure: Retained advisory or per-transaction structure.</li>
</ul>
</div>
</div>
</section>

<section className="mt-20 mx-auto flex justify-center px-4 w-full max-w-sm">
<a className="inline-flex sm:w-auto transition-all duration-300 shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 text-sm font-semibold text-white font-geist bg-blue-950 w-full border-blue-600 border rounded-full px-8 py-3.5 shadow-lg items-center justify-center tracking-tight text-center" href="#calendly">
      Find Out What Your Property Is Worth Right Now
    </a>
</section>

<section className="max-w-7xl sm:px-6 mt-32 mx-auto px-4">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center font-geist">
<div className="">
<div className="text-6xl sm:text-7xl font-semibold text-neutral-100 tracking-tighter mb-4">$354M</div>
<div className="text-sm text-neutral-400 mx-auto max-w-[200px]">Personal sales volume — 2024 alone</div>
</div>
<div>
<div className="text-6xl sm:text-7xl font-semibold text-neutral-100 tracking-tighter mb-4">200</div>
<div className="text-sm text-neutral-400 mx-auto max-w-[200px]">Active listings in Paradise Valley right now</div>
</div>
<div>
<div className="text-6xl sm:text-7xl font-semibold text-neutral-100 tracking-tighter mb-4">105</div>
<div className="text-sm text-neutral-400 mx-auto max-w-[200px]">Agents across the combined brokerage</div>
</div>
<div>
<div className="text-6xl sm:text-7xl font-semibold text-neutral-100 tracking-tighter mb-4">40</div>
<div className="text-sm text-neutral-400 mx-auto max-w-[200px]">Years of Walt Danley legacy in the platform</div>
</div>
</div>
</section>

<section className="max-w-5xl sm:px-6 mt-32 mx-auto px-4">
<div className="grid md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-5 w-full aspect-[4/5] bg-neutral-900/50 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-md">
<img alt="Katrina Barrett" className="bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33ccbfd7-0d4c-4d95-a9a9-689cb570df1b_800w.jpg"/>
</div>

<div className="md:col-span-7">
<p className="leading-relaxed text-base text-neutral-300 font-geist mb-8">I started in finance - not real estate. That background is why I analyze this market differently than most agents: data first, instinct second. In 2018 I founded Local Luxury because every brokerage I encountered was running a sales operation, not a consultancy. I built it without investors, without desk fees, and without compromising on who gets in. In 2023 I acquired Walt Danley Christie's International - adding 40 years of Paradise Valley legacy and a global buyer network to the platform. I'm a mother of three and I answer my own phone.</p>
<div className="space-y-3 text-sm font-geist text-neutral-400">
<div className=""><a className="hover:text-white transition-colors" href="tel:5204035270">Phone: 520-403-5270</a></div>
<div className=""><a className="hover:text-white transition-colors" href="mailto:katrina@katrinabarrett.com">Email: katrina@katrinabarrett.com</a></div>
<div className="">License number: AZ DRE #BR682352000</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl sm:px-6 mt-32 mx-auto px-4">
<div className="space-y-4">
<details className="group bg-neutral-900/40 border border-white/10 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden backdrop-blur-md">
<summary className="flex cursor-pointer sm:text-base select-none text-sm font-semibold text-neutral-200 font-geist pt-6 pr-6 pb-6 pl-6 items-center justify-between">I haven't heard of you: how do I know you're the right agent?</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-geist leading-relaxed">
          Pull up RealTrends Verified — I'm ranked #1 in Arizona and #17 in the United States by sales volume. The work is documented. I'd rather show you the numbers than ask you to take my word for it.
        </div>
</details>
<details className="group bg-neutral-900/40 border border-white/10 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden backdrop-blur-md">
<summary className="flex items-center justify-between p-6 cursor-pointer text-neutral-200 font-semibold font-geist text-sm sm:text-base select-none">
          Do you take every listing that comes to you?
          <iconify-icon className="transition-transform group-open:rotate-180 w-5 h-5 text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-geist leading-relaxed">
          No. I work with properties and clients where I can genuinely produce a better outcome than anyone else in the market. If that's not the case, I'll tell you directly in the first conversation.
        </div>
</details>
<details className="group bg-neutral-900/40 border border-white/10 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden backdrop-blur-md">
<summary className="flex items-center justify-between p-6 cursor-pointer text-neutral-200 font-semibold font-geist text-sm sm:text-base select-none">
          What areas do you cover?
          <iconify-icon className="transition-transform group-open:rotate-180 w-5 h-5 text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-geist leading-relaxed">
          Paradise Valley, Arcadia, Scottsdale, North Scottsdale, DC Ranch and Silverleaf, Biltmore, Gainey Ranch, Flagstaff, and the Camelback Corridor. My primary focus is $5 million and above.
        </div>
</details>
<details className="group bg-neutral-900/40 border border-white/10 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden backdrop-blur-md">
<summary className="flex items-center justify-between p-6 cursor-pointer text-neutral-200 font-semibold font-geist text-sm sm:text-base select-none">
          What actually happens on the call?
          <iconify-icon className="transition-transform group-open:rotate-180 w-5 h-5 text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-geist leading-relaxed">
          We talk about your property, your timeline, and what the market is doing right now for exactly what you have. No pitch. No obligation. You leave with information you didn't have before.
        </div>
</details>
<details className="group bg-neutral-900/40 border border-white/10 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden backdrop-blur-md">
<summary className="flex items-center justify-between p-6 cursor-pointer text-neutral-200 font-semibold font-geist text-sm sm:text-base select-none">
          What if I'm a buyer, not a seller?
          <iconify-icon className="transition-transform group-open:rotate-180 w-5 h-5 text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-geist leading-relaxed">
          Download my app. I carry off-market listings that never touch the MLS or Zillow — properties only accessible through my private network. Book the call the same way and we'll talk through what you're looking for.
        </div>
</details>
</div>
</section>

<section className="max-w-4xl sm:px-6 mt-32 mb-24 mx-auto px-4 text-center" id="calendly">
<div className="md:text-2xl text-xl font-semibold text-neutral-100 tracking-tight font-geist mb-8">30 minutes. Free. Book directly with Katrina (not an assistant)</div>
<div className="bg-[#1a1a1a]/50 border border-white/10 rounded-3xl min-h-[650px] w-full flex items-center justify-center p-6 backdrop-blur-xl">
<div className="w-full h-full min-h-[500px] flex items-center justify-center rounded-xl overflow-hidden bg-white/5">
<iframe className="min-h-[500px]" frameborder="0" height="100%" src="https://calendly.com/katrinabarrett/30min" width="100%"></iframe>
</div>
</div>
</section>

<footer className="max-w-7xl sm:px-6 mb-12 mx-auto px-4">
<div className="border-t border-white/10 pt-8 text-center">
<div className="text-xs text-neutral-500 font-geist">© 2025 Katrina Barrett. All rights reserved.</div>
</div>
</footer>

    </>
  );
}
