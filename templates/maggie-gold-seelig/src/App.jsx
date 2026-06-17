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
<div className="flex items-center gap-2 text-xl font-medium tracking-tight font-geist text-white">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
          MGS Group
        </div>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#">Process</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#">Testimonials</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#">About</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist" href="#">FAQ</a>
</nav>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 tracking-tight bg-white hover:bg-neutral-200 border border-white/10 rounded-full px-4 py-2 transition-colors" href="#calendly">
<span className="font-geist">Schedule a Call</span>
<iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col lg:flex-row gap-8 items-start">

<div className="flex-1 lg:max-w-xl">
<div className="inline-flex items-center gap-2 text-xs font-medium text-blue-300 bg-blue-500/10 border border-white/10 rounded-full px-3 py-1.5">
<iconify-icon className="text-sm" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-geist">Boston • New York City • Miami</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-[1.05] font-medium text-neutral-100 tracking-tighter font-geist mt-6">
              The Right Price. The Right Buyer. Before It Ever Hits the Market.
            </h1>
<p className="sm:mt-6 sm:text-lg leading-relaxed text-base text-neutral-400 font-geist mt-4">Maggie Gold Seelig Founder, MGS Group Real Estate (Boston) &amp; The Maggie Gold Seelig Team at Corcoran (New York City). #24 Agent in the U.S. by Sales Volume. $2B+ in Career Transactions.</p>
<a className="mt-8 inline-flex items-center gap-2 text-sm sm:text-base font-medium text-neutral-900 tracking-tight bg-white hover:bg-neutral-200 border border-white/10 rounded-full px-6 py-3 transition-colors" href="#calendly">
<span className="font-geist">Schedule a Strategy Conversation</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="w-full lg:flex-1 pt-2 lg:pt-0">
<div className="relative w-full pt-[56.25%] bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">

</div>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/10">
<p className="text-xs text-neutral-500 tracking-wider uppercase font-geist mb-4">Industry Recognition &amp; Affiliations</p>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 font-geist transition-colors"><iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>#24 Agent in the U.S. — RealTrends 2024</span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 font-geist transition-colors"><iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>$2B+ Career Sales Volume</span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 font-geist transition-colors"><iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>Wall Street Journal Top Real Estate Broker</span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 font-geist transition-colors"><iconify-icon icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>The Hollywood Reporter Stratospheric Sale Award (2023)</span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 font-geist transition-colors"><iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>Top Agent Network — Verified Top 10%</span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 font-geist transition-colors"><iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>YPO Member — New York Metro Chapter</span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 font-geist transition-colors"><iconify-icon icon="solar:bank-linear" strokeWidth="1.5"></iconify-icon>Board of Advisors, Harvard's American Repertory Theatre</span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 font-geist transition-colors"><iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>Board of Overseers, Boston Children's Hospital</span>
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
<h2 className="text-xl sm:text-2xl text-neutral-100 font-geist tracking-tighter font-medium mb-8">What Most Buyers &amp; Sellers Miss</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="p-6 bg-neutral-900/90 border border-white/10 rounded-xl flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-neutral-300 font-geist leading-relaxed">
              Your property sat too long and the price dropped — and you're not sure why.
            </p>
</div>

<div className="p-6 bg-neutral-900/90 border border-white/10 rounded-xl flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300">
<iconify-icon className="text-xl" icon="solar:document-medicine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-neutral-300 font-geist leading-relaxed">
              You made a full-price offer and still lost the property to someone else.
            </p>
</div>

<div className="p-6 bg-neutral-900/90 border border-white/10 rounded-xl flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300">
<iconify-icon className="text-xl" icon="solar:eye-closed-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-neutral-300 font-geist leading-relaxed">
              You chose a local agent and didn't know what you didn't know about the buyer market.
            </p>
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
<div className="grid lg:grid-cols-3 gap-12">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center gap-3">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300 font-geist">Why Choose Us</span>
</div>
<h2 className="mt-2 text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium">A Different Standard of Practice</h2>
<div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-400 font-geist">
<p className="">I became a real estate broker after I became a lawyer. That sequence wasn't an accident it was a decision about what kind of advisor I wanted to be.</p>
<p className="">Most agents learn negotiation on the job. I trained in it formally, then brought that discipline to one of the most competitive luxury markets in the country. I founded MGS Group Real Estate in 2008 in Cambridge, Massachusetts, and I've spent the last seventeen years building a practice that operates at the intersection of legal precision, deep market knowledge, and a buyer and seller network that now spans Boston, New York, Miami, and the Cape and Islands.</p>
<p className="">In 2024, I was ranked the #24 agent in the United States by sales volume by RealTrends. I've closed over $2 billion in career transactions. I've sold properties for Tom Brady and represented a buyer on one of the most significant residential transactions in Manhattan in 2023 an $80 million unit at 220 Central Park South, which won The Hollywood Reporter's Stratospheric Sale Award.</p>
<p className="">In 2025, I expanded to New York City as the founder of The Maggie Gold Seelig Team at The Corcoran Group while maintaining my Massachusetts practice at MGS Group.</p>
<p className="">What that means for you: You get a broker with cross-market buyer access, a legal negotiation framework, and a track record that you can verify transaction by transaction.</p>
<p className="">The strategy conversation is always free. The results speak for themselves.</p>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-200 bg-white/5 hover:bg-white/10 rounded-full px-5 py-2 border border-white/10 transition-colors" href="#calendly">
<span className="font-geist">Talk Strategy with Maggie</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="lg:col-span-1">
<ul className="space-y-8 sm:space-y-10">
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">$2B+</div>
<p className="text-xs tracking-wider uppercase text-neutral-400 mt-2 font-geist">Career Sales Volume</p>
</li>
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">#24</div>
<p className="text-xs tracking-wider uppercase text-neutral-400 mt-2 font-geist">U.S. Agent Ranking, RealTrends 2024</p>
</li>
<li className="">
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">$144.6M</div>
<p className="text-xs tracking-wider uppercase text-neutral-400 mt-2 font-geist">12-Month Closed Volume</p>
</li>
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">$80M</div>
<p className="text-xs tracking-wider uppercase text-neutral-400 mt-2 font-geist">Largest Single Transaction (220 CPS)</p>
</li>
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">17</div>
<p className="text-xs tracking-wider uppercase text-neutral-400 mt-2 font-geist">Years Founded (MGS Group, est. 2008)</p>
</li>
<li>
<div className="text-4xl sm:text-5xl text-neutral-100 font-geist tracking-tight font-medium">5</div>
<p className="text-xs tracking-wider uppercase text-neutral-400 mt-2 font-geist">Core Markets</p>
</li>
</ul>
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
<h2 className="text-xl sm:text-2xl text-neutral-100 font-geist tracking-tighter font-medium mb-8">Client Experiences</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="flex flex-col justify-between p-6 bg-neutral-900/90 border border-white/10 rounded-xl">
<div className="mb-6">
<iconify-icon className="text-3xl text-neutral-600 mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300 font-geist leading-relaxed">
                "[Verified testimonial on pricing outcome and strategy placeholder. Maggie's team handled every detail flawlessly.]"
              </p>
</div>
<div className="pt-4 border-t border-white/10">
<h3 className="text-sm font-medium tracking-tight text-neutral-100 font-geist">[Client name]</h3>
<p className="text-xs text-neutral-500 mt-1 font-geist">Boston/Cambridge seller</p>
</div>
</article>

<article className="flex flex-col justify-between p-6 bg-neutral-900/90 border border-white/10 rounded-xl">
<div className="mb-6">
<iconify-icon className="text-3xl text-neutral-600 mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300 font-geist leading-relaxed">
                "[Verified testimonial on competitive offer success and buyer network access placeholder. We wouldn't have gotten the property without her insight.]"
              </p>
</div>
<div className="pt-4 border-t border-white/10">
<h3 className="text-sm font-medium tracking-tight text-neutral-100 font-geist">[Client name]</h3>
<p className="text-xs text-neutral-500 mt-1 font-geist">Manhattan buyer</p>
</div>
</article>

<article className="flex flex-col justify-between p-6 bg-neutral-900/90 border border-white/10 rounded-xl">
<div className="mb-6">
<iconify-icon className="text-3xl text-neutral-600 mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300 font-geist leading-relaxed">
                "[Verified testimonial on discretion, speed, and final sale price placeholder. True professional from start to finish.]"
              </p>
</div>
<div className="pt-4 border-t border-white/10">
<h3 className="text-sm font-medium tracking-tight text-neutral-100 font-geist">[Client name]</h3>
<p className="text-xs text-neutral-500 mt-1 font-geist">Brookline/Cape seller</p>
</div>
</article>
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
<div className="flex items-center gap-3 mb-8">
<span className="h-px w-8 bg-white/20"></span>
<span className="text-sm text-neutral-300 font-geist tracking-wide">The Blueprint</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
<div className="text-5xl text-neutral-800 font-geist font-medium absolute -top-2 -right-2 opacity-50">01</div>
<h3 className="text-base text-neutral-100 font-geist font-medium tracking-tight mb-3 relative z-10">Strategy session</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed relative z-10">We review your property, your goals, and what the market is actually doing. Confidential, no obligation.</p>
</div>
<div className="p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
<div className="text-5xl text-neutral-800 font-geist font-medium absolute -top-2 -right-2 opacity-50">02</div>
<h3 className="text-base text-neutral-100 font-geist font-medium tracking-tight mb-3 relative z-10">Positioning</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed relative z-10">We build the pricing narrative, the staging plan, and the outreach sequence before the property is ever public.</p>
</div>
<div className="p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
<div className="text-5xl text-neutral-800 font-geist font-medium absolute -top-2 -right-2 opacity-50">03</div>
<h3 className="text-base text-neutral-100 font-geist font-medium tracking-tight mb-3 relative z-10">Buyer outreach</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed relative z-10">Private presentation to qualified buyers across my Boston and New York networks before public listing.</p>
</div>
<div className="p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
<div className="text-5xl text-neutral-800 font-geist font-medium absolute -top-2 -right-2 opacity-50">04</div>
<h3 className="text-base text-neutral-100 font-geist font-medium tracking-tight mb-3 relative z-10">Public launch (if needed)</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed relative z-10">Precision-timed, fully staged, coordinated market entry with full marketing support.</p>
</div>
<div className="p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
<div className="text-5xl text-neutral-800 font-geist font-medium absolute -top-2 -right-2 opacity-50">05</div>
<h3 className="text-base text-neutral-100 font-geist font-medium tracking-tight mb-3 relative z-10">Offer negotiation</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed relative z-10">Legal-precision review of all offers, terms, and contingencies. I negotiate every detail.</p>
</div>
<div className="p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
<div className="text-5xl text-neutral-800 font-geist font-medium absolute -top-2 -right-2 opacity-50">06</div>
<h3 className="text-base text-neutral-100 font-geist font-medium tracking-tight mb-3 relative z-10">Close</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed relative z-10">MGS team handles full transaction management through to closing and beyond.</p>
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
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium mb-10 text-center">What's Included</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">

<div className="p-6 bg-neutral-900/50 border border-white/10 rounded-2xl">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg text-neutral-100 font-geist font-medium tracking-tight">Sellers</h3>
</div>
<ul className="space-y-4 text-sm text-neutral-300 font-geist">
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Pre-market strategy session</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Pricing analysis and narrative</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Staging consultation (MGS Client Exp Group)</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Professional photography and marketing</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Off-market buyer outreach</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Offer review and negotiation</li>
</ul>
</div>

<div className="p-6 bg-neutral-900/50 border border-white/10 rounded-2xl">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:key-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg text-neutral-100 font-geist font-medium tracking-tight">Buyers</h3>
</div>
<ul className="space-y-4 text-sm text-neutral-300 font-geist">
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Off-market and pre-market property access</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Competitive offer construction and positioning</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Cross-market network access (BOS, NYC, MIA)</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Co-op and condo board guidance</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Legal-precision contract review</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Negotiation through close</li>
</ul>
</div>

<div className="p-6 bg-neutral-900/50 border border-white/10 rounded-2xl">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:map-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg text-neutral-100 font-geist font-medium tracking-tight">Relocating</h3>
</div>
<ul className="space-y-4 text-sm text-neutral-300 font-geist">
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>BOS-to-NYC &amp; NYC-to-BOS transition support</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Simultaneous sell and buy strategy</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Introduction to vetted local service providers</li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>Lifestyle concierge approach</li>
</ul>
</div>
</div>

<div className="mt-12 flex justify-center border-t border-white/10 pt-10">
<a className="inline-flex items-center justify-center gap-2 text-base font-medium tracking-tight text-neutral-900 bg-white hover:bg-neutral-200 border border-white/10 rounded-full px-8 py-4 transition-all" href="#calendly">
<span className="font-geist">Book Your Confidential Strategy Session</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
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
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center text-neutral-500">

<div className="text-center p-6">
<iconify-icon className="text-4xl mb-3" icon="solar:gallery-wide-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xs font-geist">Photo placeholder — Maggie Gold Seelig headshot</p>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
</div>
<div className="space-y-5 text-sm sm:text-base leading-relaxed text-neutral-300 font-geist">
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium mb-2">About Maggie Gold Seelig</h2>
<p>Maggie Gold Seelig is the Founder and Principal of MGS Group Real Estate in Boston, Massachusetts, and the Founder of The Maggie Gold Seelig Team at The Corcoran Group in New York City.</p>
<p>A New York City native, Maggie holds a BA in Political Science from Swarthmore College and a Juris Doctor from the University of Connecticut School of Law. She began her real estate career at Coldwell Banker before founding MGS Group in Cambridge in 2008.</p>
<p className="">Over a seventeen-year career, Maggie has built one of the most recognized luxury residential practices on the East Coast defined by legal precision, cross-market buyer access, and a standard of discretion that has earned the trust of clients including Tom Brady, institutional buyers at 220 Central Park South, and high-net-worth families navigating complex multi-market transactions.</p>
<p className="">She is the #24 agent in the United States by sales volume (RealTrends 2024), a recognized Top Real Estate Broker by the Wall Street Journal, a member of the Top Agent Network, and a YPO member (New York Metro Chapter).</p>
<p className="">Maggie serves on the Board of Advisors of Harvard's American Repertory Theatre and the Board of Philanthropic Overseers of Boston Children's Hospital. She divides her time between Cambridge, Massachusetts and the Upper East Side of Manhattan.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<h2 className="text-2xl text-neutral-100 font-geist tracking-tight font-medium mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-2">
<details className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-neutral-100 font-geist focus:outline-none">
<span className="text-sm sm:text-base">Do you work with both buyers and sellers?</span>
<iconify-icon className="text-lg text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="text-neutral-400 mt-4 text-sm leading-relaxed font-geist">
              Yes. I represent buyers and sellers at the same level of engagement. My buyer network is one of the most valuable assets I bring to a listing — and my transaction experience as a seller's broker makes me a stronger advocate for buyers in competitive situations.
            </p>
</details>
<details className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-neutral-100 font-geist focus:outline-none">
<span className="text-sm sm:text-base">Do you work in both Boston and New York?</span>
<iconify-icon className="text-lg text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="text-neutral-400 mt-4 text-sm leading-relaxed font-geist">
              Yes. I am licensed and active in Massachusetts through MGS Group Real Estate, and in New York through The Maggie Gold Seelig Team at The Corcoran Group. I work across both markets, and for clients relocating or transacting in both, I provide end-to-end coordination.
            </p>
</details>
<details className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-neutral-100 font-geist focus:outline-none">
<span className="text-sm sm:text-base">What price range do you typically work in?</span>
<iconify-icon className="text-lg text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="text-neutral-400 mt-4 text-sm leading-relaxed font-geist">
              My transactions range from $1M to $80M+. The strategy, the standard of service, and my personal involvement do not change based on the price point.
            </p>
</details>
<details className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-neutral-100 font-geist focus:outline-none">
<span className="text-sm sm:text-base">Why does your legal background matter in a real estate transaction?</span>
<iconify-icon className="text-lg text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="text-neutral-400 mt-4 text-sm leading-relaxed font-geist">
              A real estate transaction is fundamentally a legal negotiation. Most brokers can negotiate price. I negotiate price, terms, contingencies, timeline, and contract language — with the training to understand what each of those terms actually costs a client if they go wrong.
            </p>
</details>
<details className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-neutral-100 font-geist focus:outline-none">
<span className="text-sm sm:text-base">How do I start?</span>
<iconify-icon className="text-lg text-neutral-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="text-neutral-400 mt-4 text-sm leading-relaxed font-geist">
              Book a call using the calendar below. The strategy conversation is always confidential and always free. We'll talk about your goals, your property or your search, and what the market is actually doing. No pressure, no obligation.
            </p>
</details>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-16 px-4" id="calendly">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<h2 className="text-2xl text-neutral-100 font-geist tracking-tight font-medium mb-2 text-center">Schedule a Conversation</h2>
<p className="text-sm text-neutral-400 font-geist text-center mb-8">Select a time that works best for you. All conversations are strictly confidential.</p>

<div className="calendly-inline-widget bg-transparent rounded-2xl overflow-hidden" data-processed="true" data-url="https://calendly.com/placeholder-link?hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;background_color=1a1a1a&amp;text_color=ffffff&amp;primary_color=ffffff" style={{position: 'relative', minWidth: '320px', height: '700px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/placeholder-link?embed_domain=&amp;embed_type=Inline&amp;hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;background_color=1a1a1a&amp;text_color=ffffff&amp;primary_color=ffffff" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</div>
</section>
<footer className="max-w-7xl sm:px-6 mt-10 mr-auto mb-12 ml-auto pr-4 pl-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col md:flex-row justify-between gap-10">

<div className="space-y-4 max-w-sm">
<div className="flex items-center gap-2 text-xl font-medium tracking-tight font-geist text-white">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
              MGS Group
            </div>
<p className="text-sm leading-relaxed text-neutral-400 font-geist">
              Legal precision, deep market knowledge, and an unparalleled network across Boston and New York City.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-neutral-200 rounded-full px-4 py-2 transition-colors" href="#calendly">
<span className="font-geist">Contact us</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="text-xs text-neutral-500 font-geist">maggie@mgsgrouprealestate.com</div>
</div>
</div>

<div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
<nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-400 font-geist">
<a className="hover:text-neutral-200 transition-colors" href="#">Fair Housing Statement</a>
<span className="text-neutral-700 hidden md:inline">|</span>
<a className="hover:text-neutral-200 transition-colors" href="#">Privacy Policy</a>
<span className="text-neutral-700 hidden md:inline">|</span>
<a className="hover:text-neutral-200 transition-colors" href="#">Terms of Use</a>
</nav>
<div className="text-xs text-neutral-500 font-geist">© 2025 MGS Group Real Estate. All rights reserved.</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
