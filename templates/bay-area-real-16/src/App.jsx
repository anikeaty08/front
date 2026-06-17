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
      

<div className="glow-effect"></div>

<nav className="w-full flex justify-center py-6 md:py-8">
<div className="text-lg tracking-tight font-medium text-white border border-white/10 bg-zinc-900/50 backdrop-blur-md px-6 py-2 rounded-full">
            JORDAN MOTT
        </div>
</nav>

<section className="max-w-4xl mx-auto px-4 pb-16 pt-4 text-center">

<div className="relative w-full aspect-video bg-zinc-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden mb-10 group">

<div className="absolute inset-0 flex items-center justify-center bg-zinc-950/40 group-hover:bg-zinc-950/30 transition-all cursor-pointer z-10">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-transform transform group-hover:scale-105">
<iconify-icon className="text-white text-3xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>

<img alt="Luxury Home Bay Area" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden z-20">
<div className="h-full w-1/3 bg-amber-200"></div>
</div>
</div>
<h1 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
            Don't Just Sell Your Bay Area Home. <br className="hidden md:block"/>
<span className="text-gradient-gold">Maximize Your Net Profit.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            With your biggest asset, "listing" isn't enough. We use data-driven pricing strategies and premium marketing campaigns to ensure your home sells for its true potential.
        </p>
<a className="inline-flex items-center gap-2 bg-amber-100 text-amber-950 hover:bg-white transition-colors duration-200 px-8 py-4 rounded-full font-medium text-sm md:text-base mb-6" href="#strategy-call">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
            Request my Strategy Call
        </a>
<p className="text-xs text-zinc-500 max-w-xl mx-auto">
            With $900 Million in sales and 500+ homes closed, your agent isn't just a Realtor, they are a market force. In the Bay Area, where the difference between a "good" sale and a "great" sale can be $200,000+, these stats are your strongest asset.
        </p>
</section>

<div className="w-full border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
<div className="flex flex-col items-center justify-center p-2">
<span className="text-2xl md:text-3xl font-medium text-white tracking-tight">$900M+</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Total Transaction Volume</span>
</div>
<div className="flex flex-col items-center justify-center p-2 pt-6 md:pt-2">
<span className="text-2xl md:text-3xl font-medium text-white tracking-tight">500+</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Bay Area Homes Sold</span>
</div>
<div className="flex flex-col items-center justify-center p-2 pt-6 md:pt-2">
<div className="flex items-center gap-1 mb-1">
<iconify-icon className="text-amber-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 uppercase tracking-widest">137 Five-Star Reviews</span>
</div>
</div>
</div>

<section className="max-w-3xl mx-auto px-4 py-20 md:py-32">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 text-amber-200/80 text-xs font-medium uppercase tracking-widest">
<iconify-icon className="text-lg" icon="solar:danger-circle-linear"></iconify-icon>
                The Market Has Shifted
            </div>
<h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight">
                The 2026 market is no longer a <br className="hidden md:block"/>"list it and they will come" environment.
            </h2>
<p className="text-zinc-400 leading-relaxed font-light">
                With shifting interest rates and rising inventory, a generic listing strategy can leave hundreds of thousands of dollars on the table. To maximize your net profit, you need a strategy that targets the region's specific wealth pockets, from Silicon Valley executives to the East Bay’s emerging tech hubs.
            </p>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 pb-24">
<div className="text-center mb-12">
<h2 className="text-sm text-amber-200/80 uppercase tracking-widest font-medium mb-2">Our Method</h2>
<h3 className="text-2xl md:text-3xl text-white font-medium tracking-tight">3-Pillar Profit Strategy</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:border-amber-200/20 transition-colors group">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-900/20 transition-colors">
<iconify-icon className="text-amber-200 text-2xl" icon="solar:graph-new-up-linear"></iconify-icon>
</div>
<h4 className="text-lg text-white font-medium mb-3">Data-Driven Pricing</h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                    We don't guess. We analyze hyper-local 2026 absorption rates and buyer search patterns to price your home at the "sweet spot" that triggers multiple-offer scenarios.
                </p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:border-amber-200/20 transition-colors group">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-900/20 transition-colors">
<iconify-icon className="text-amber-200 text-2xl" icon="solar:armchair-2-linear"></iconify-icon>
</div>
<h4 className="text-lg text-white font-medium mb-3">Premium Staging &amp; Marketing</h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                    First impressions are $100,000 decisions. We manage and front the cost for high-end staging and marketing campaigns that are proven to yield a return on investment.
                </p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:border-amber-200/20 transition-colors group">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-900/20 transition-colors">
<iconify-icon className="text-amber-200 text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h4 className="text-lg text-white font-medium mb-3">Extensive Private Network</h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Your home will be marketed directly to our private database of relocation specialists and high-net-worth buyers, reaching buyers before they even check Zillow.
                </p>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/20 py-24">
<div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/2">
<h3 className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-4">
                    137 Families Gave Us 5 Stars. Here’s Why.
                </h3>
<p className="text-zinc-400 font-light leading-relaxed">
                    Experience matters when the stakes are this high. Having navigated over 500 unique Bay Area transactions, we’ve seen every hurdle and know exactly how to clear it.
                </p>
<div className="mt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-xs text-zinc-500">U1</div>
<div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-xs text-zinc-500">U2</div>
<div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-xs text-zinc-500">U3</div>
</div>
<span className="text-xs text-zinc-500">Join 500+ satisfied clients</span>
</div>
</div>
<div className="md:w-1/2 relative">
<div className="absolute -top-6 -left-6 text-6xl text-amber-200/10 font-serif">"</div>
<div className="bg-zinc-950 border border-white/5 p-8 rounded-2xl relative z-10">
<div className="flex text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 italic mb-6 leading-relaxed">
                        Jordan was great. Calm, smart, experienced, and responsive. We were anxious about selling our home but he put us at ease and took care of all the details. We are planning to buy a new home next year and we will absolutely turn to Jordan again.
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-1 bg-amber-900/50 rounded-full"></div>
<span className="text-sm font-medium text-white">C. Harris, San Jose</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-24">
<div className="flex flex-col-reverse md:flex-row items-center gap-12 bg-zinc-900/30 rounded-3xl border border-white/5 overflow-hidden">
<div className="md:w-1/2 p-8 md:p-12">
<h3 className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-4">
                    Put $900 Million of Experience in Your Corner.
                </h3>
<p className="text-zinc-400 leading-relaxed mb-6 font-light">
                    Selling a home in the Bay Area is one of the most significant financial events of your life. You shouldn't trust it to a part-timer or a "discount" brokerage.
                </p>
<p className="text-zinc-400 leading-relaxed font-light">
                    Jordan has spent years perfecting a system that protects your equity and simplifies the complex.
                </p>
</div>
<div className="md:w-1/2 h-full min-h-[300px] md:min-h-[400px] relative">
<img alt="Jordan Mott Real Estate Agent" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-transparent md:bg-gradient-to-t md:from-zinc-900/50"></div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-4 pb-24" id="strategy-call">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-3">
                Get Your 2026 Maximum Profit Analysis
            </h2>
<p className="text-sm text-zinc-400 font-light">
                This is not an automated estimate. We provide a custom-tailored strategy showing exactly how we would prepare, price, and position your home to outperform the market.
            </p>
</div>
<form className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
<div className="space-y-5">

<div>
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wide mb-2">Property Address</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-zinc-500" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 rounded-lg text-sm text-white custom-input placeholder-zinc-600" placeholder="123 Bay Area Blvd, San Jose, CA" required="" type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wide mb-2">When do you need to move?</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-zinc-500" icon="solar:calendar-linear"></iconify-icon>
<select className="w-full pl-10 pr-4 py-3 rounded-lg text-sm text-white custom-input cursor-pointer">
<option className="text-zinc-900">ASAP</option>
<option className="text-zinc-900">3-6 Months</option>
<option className="text-zinc-900">Just Planning</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wide mb-2">What is your #1 priority?</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-zinc-500" icon="solar:target-linear"></iconify-icon>
<select className="w-full pl-10 pr-4 py-3 rounded-lg text-sm text-white custom-input cursor-pointer">
<option className="text-zinc-900">Highest Price</option>
<option className="text-zinc-900">Speed of Sale</option>
<option className="text-zinc-900">Privacy</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div>
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wide mb-2">Email Address</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-zinc-500" icon="solar:letter-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 rounded-lg text-sm text-white custom-input placeholder-zinc-600" placeholder="you@example.com" required="" type="email"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wide mb-2">Phone Number</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-zinc-500" icon="solar:phone-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 rounded-lg text-sm text-white custom-input placeholder-zinc-600" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
</div>
</div>
<button className="w-full bg-gradient-to-r from-amber-100 to-amber-200 hover:from-white hover:to-white text-zinc-900 font-semibold py-4 rounded-lg mt-4 transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20" type="submit">
                    Request My Strategy Call
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-center text-[10px] text-zinc-600 mt-2">
                    Your information is secure. We hate spam as much as you do.
                </p>
</div>
</form>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">

<div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500 font-serif">JL</div>
<div className="text-xs text-zinc-400">
<span className="text-white font-medium block">Jordan Mott</span>
<span>Intero Real Estate Services</span>
</div>
</div>
<div className="text-[10px] text-zinc-600 text-center md:text-right">
<p>DRE License #01234567</p>
<p className="mt-1">© 2024 Jordan Mott Real Estate. All rights reserved.</p>
<div className="flex gap-4 justify-center md:justify-end mt-2">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
