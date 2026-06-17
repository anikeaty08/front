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



        lucide.createIcons();
    
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
      

<div className="bg-[#04974D] text-white w-full py-2.5 px-4 sticky top-0 z-50">
<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between text-sm">
<div className="flex items-center gap-2 font-medium">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span className="">Spring Special — Save up to 30% with Subscription</span>
</div>
<div className="flex items-center gap-2 mt-1 sm:mt-0 font-medium bg-white/20 px-3 py-0.5 rounded-full text-xs">
<span className="">Ends in:</span>
<span className="font-semibold tracking-wider">04:15:32</span>
</div>
</div>
</div>

<header className="text-center max-w-3xl mr-auto ml-auto pt-16 pr-6 pb-8 pl-6">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight mb-8">
            11 Reasons Why Protein Espresso Is the Smartest Way to Upgrade Your Coffee Routine
        </h1>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-base text-gray-600 border-y border-gray-100 py-4">
<div className="flex items-center gap-3">
<img alt="Author" className="w-10 h-10 rounded-full object-cover" src="https://placehold.co/100x100/e2e8f0/64748b?text=JM"/>
<div className="text-left">
<p className="font-medium text-gray-900 leading-none mb-1">By Jessica Miller</p>
<p className="text-sm">Updated May 24, 2024</p>
</div>
</div>
<div className="hidden sm:block w-px h-8 bg-gray-200"></div>
<div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
<i className="w-5 h-5 text-[#04974D]" data-lucide="shield-check"></i>
<span className="text-sm font-medium text-gray-800">Reviewed by nutrition specialists</span>
</div>
</div>
<div className="text-base italic text-gray-700 text-left bg-yellow-50/50 border-yellow-100 border rounded-xl mt-8 pt-4 pr-4 pb-4 pl-4">
<span className="not-italic font-medium text-gray-900">Quick Summary:</span> If you're tired of mid-day crashes, expensive coffee shop habits, or chalky protein shakes, this new blend of real espresso and premium protein is changing morning routines nationwide.
        </div>
</header>

<section className="max-w-5xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="text-center mb-10">
<h2 className="md:text-3xl text-2xl font-semibold text-gray-900 tracking-tight mb-4">How it stacks up</h2>
</div>
<div className="overflow-x-auto no-scrollbar pt-4 pb-4">
<div className="min-w-[700px] w-full border border-gray-200 rounded-2xl bg-white shadow-sm">

<div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200 rounded-t-2xl">
<div className="flex font-medium text-gray-500 py-3 px-4 items-center">Feature</div>
<div className="py-3 px-4 font-semibold text-[#04974D] bg-[#04974D]/5 border-x-2 border-t-2 border-[#04974D] rounded-t-xl text-center relative flex flex-col items-center justify-center">
<span className="absolute -top-3 bg-[#04974D] text-white text-xs px-3 py-1 rounded-full font-medium tracking-wide leading-none z-10">TOP PICK</span>
                    Protein Espresso
                </div>
<div className="py-3 px-4 font-medium text-gray-900 text-center flex items-center justify-center">Regular Coffee</div>
<div className="py-3 px-4 font-medium text-gray-900 text-center flex items-center justify-center">Protein Shake</div>
</div>

<div className="grid grid-cols-4 border-b border-gray-100 items-center">
<div className="py-3 px-4 text-gray-600 font-medium flex items-center gap-2"><i className="w-4 h-4 text-gray-400" data-lucide="flame"></i> Calories</div>
<div className="py-3 px-4 text-center font-semibold bg-[#04974D]/5 border-x-2 border-[#04974D]">90 kcal</div>
<div className="py-3 px-4 text-center text-gray-500">5 - 400 kcal</div>
<div className="py-3 px-4 text-center text-gray-500">150 - 300 kcal</div>
</div>
<div className="grid grid-cols-4 border-b border-gray-100 items-center">
<div className="py-3 px-4 text-gray-600 font-medium flex items-center gap-2"><i className="w-4 h-4 text-gray-400" data-lucide="dumbbell"></i> Protein</div>
<div className="py-3 px-4 text-center font-semibold text-[#04974D] bg-[#04974D]/5 border-x-2 border-[#04974D]">20g</div>
<div className="py-3 px-4 text-center text-gray-500">0g</div>
<div className="py-3 px-4 text-center text-gray-500">20g</div>
</div>
<div className="grid grid-cols-4 border-b border-gray-100 items-center">
<div className="py-3 px-4 text-gray-600 font-medium flex items-center gap-2"><i className="w-4 h-4 text-gray-400" data-lucide="cuboid"></i> Sugar</div>
<div className="py-3 px-4 text-center font-semibold bg-[#04974D]/5 border-x-2 border-[#04974D]">0g</div>
<div className="py-3 px-4 text-center text-gray-500">Up to 50g</div>
<div className="py-3 px-4 text-center text-gray-500">5 - 15g</div>
</div>
<div className="grid grid-cols-4 border-b border-gray-100 items-center">
<div className="py-3 px-4 text-gray-600 font-medium flex items-center gap-2"><i className="w-4 h-4 text-gray-400" data-lucide="zap"></i> Energy Stability</div>
<div className="py-3 px-4 text-center font-medium bg-[#04974D]/5 border-x-2 border-[#04974D]">Sustained &amp; Smooth</div>
<div className="py-3 px-4 text-center text-gray-500">Spike &amp; Crash</div>
<div className="py-3 px-4 text-center text-gray-500">Sluggish</div>
</div>
<div className="grid grid-cols-4 border-b border-gray-100 items-center">
<div className="py-3 px-4 text-gray-600 font-medium flex items-center gap-2"><i className="w-4 h-4 text-gray-400" data-lucide="coffee"></i> Taste</div>
<div className="py-3 px-4 text-center font-medium bg-[#04974D]/5 border-x-2 border-[#04974D]">Real Iced Latte</div>
<div className="py-3 px-4 text-center text-gray-500">Varies widely</div>
<div className="py-3 px-4 text-center text-gray-500">Chalky / Artificial</div>
</div>
<div className="grid grid-cols-4 items-center">
<div className="py-3 px-4 text-gray-600 font-medium flex items-center gap-2"><i className="w-4 h-4 text-gray-400" data-lucide="coins"></i> Price per serving</div>
<div className="py-3 px-4 text-center font-semibold bg-[#04974D]/5 border-x-2 border-b-2 border-[#04974D] rounded-b-xl">$1.50</div>
<div className="py-3 px-4 text-center text-gray-500">$4.00 - $7.00</div>
<div className="py-3 px-4 text-center text-gray-500">$2.50 - $4.00</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-12 space-y-24">

<div className="flex flex-col md:flex-row gap-10 items-center">
<div className="w-full md:w-1/2">
<div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative shadow-md">
<img alt="Pouring espresso" className="w-full h-full object-cover" src="https://placehold.co/800x800/e2e8f0/94a3b8?text=Real+Espresso+Pour"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl flex items-center gap-3 shadow-sm border border-white/50">
<div className="bg-[#04974D] p-2 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="coffee"></i>
</div>
<span className="font-semibold tracking-tight text-gray-900">Real Arabica Coffee</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-5">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#04974D]/10 text-[#04974D] font-semibold text-lg mb-2">1</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Real espresso energy, zero jitters</h3>
<p className="text-lg text-gray-600 leading-relaxed">Unlike traditional energy drinks or pre-workouts filled with synthetic caffeine, we use actual freeze-dried espresso. You get the authentic coffee shop flavor and a smooth, sustained energy lift without the midday crash.</p>
<div className="inline-flex items-center gap-2 text-[#04974D] font-medium text-base mt-2">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
                    Smooth energy all day
                </div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-10 items-center">
<div className="w-full md:w-1/2">
<div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative shadow-md">
<img alt="Protein mixing" className="w-full h-full object-cover" src="https://placehold.co/800x800/e2e8f0/94a3b8?text=20g+Protein"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl flex items-center gap-3 shadow-sm border border-white/50">
<div className="bg-[#04974D] p-2 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="dumbbell"></i>
</div>
<span className="font-semibold tracking-tight text-gray-900">20g Premium Whey Isolate</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-5">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#04974D]/10 text-[#04974D] font-semibold text-lg mb-2">2</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Hit your protein goals before 9 AM</h3>
<p className="text-lg text-gray-600 leading-relaxed">Starting your day with a high-protein breakfast is scientifically proven to boost metabolism and reduce cravings. Every scoop delivers 20g of clean, fast-absorbing whey protein isolate to support muscle recovery and keep you full.</p>
<div className="inline-flex items-center gap-2 text-[#04974D] font-medium text-base mt-2">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
                    Keeps you full until lunch
                </div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-10 items-center">
<div className="w-full md:w-1/2">
<div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative shadow-md">
<img alt="Zero sugar graphic" className="w-full h-full object-cover" src="https://placehold.co/800x800/e2e8f0/94a3b8?text=Zero+Sugar"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl flex items-center gap-3 shadow-sm border border-white/50">
<div className="bg-gray-900 p-2 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="ban"></i>
</div>
<span className="font-semibold tracking-tight text-gray-900">Zero Sugar, Zero Guilt</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-5">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#04974D]/10 text-[#04974D] font-semibold text-lg mb-2">3</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Break up with sugar-loaded lattes</h3>
<p className="text-lg text-gray-600 leading-relaxed">That popular iced vanilla latte from the drive-thru contains up to 45g of liquid sugar. Protein Espresso is naturally sweetened, delivering incredible flavor with zero grams of sugar. It's the ultimate hack for staying lean.</p>
<div className="inline-flex items-center gap-2 text-[#04974D] font-medium text-base mt-2">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
                    Won't spike blood sugar
                </div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-10 items-center">
<div className="w-full md:w-1/2">
<div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative shadow-md">
<img alt="Saving money" className="w-full h-full object-cover" src="https://placehold.co/800x800/e2e8f0/94a3b8?text=Saving+Money"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl flex items-center gap-3 shadow-sm border border-white/50">
<div className="bg-[#04974D] p-2 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="wallet"></i>
</div>
<span className="font-semibold tracking-tight text-gray-900">Save $1,200+ A Year</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-5">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#04974D]/10 text-[#04974D] font-semibold text-lg mb-2">4</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Replaces expensive coffee shop habits</h3>
<p className="text-lg text-gray-600 leading-relaxed">Stop paying $6+ for a watery iced coffee that does nothing for your body. At roughly $1.50 per serving, Protein Espresso upgrades your health while keeping serious cash in your wallet.</p>
<div className="inline-flex items-center gap-2 text-[#04974D] font-medium text-base mt-2">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
                    Premium quality, less cost
                </div>
</div>
</div>

<div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
<h3 className="text-2xl font-semibold tracking-tight text-center mb-10">And four more reasons people are making the switch...</h3>
<div className="grid sm:grid-cols-2 gap-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#04974D]">
<i className="w-6 h-6" data-lucide="zap-fast"></i>
</div>
<div>
<h4 className="text-xl font-medium mb-2">5. Quick and convenient</h4>
<p className="text-lg text-gray-600">Mixes instantly in cold water or milk. No blender needed, no clumping, ready in 15 seconds.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#04974D]">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<div>
<h4 className="text-xl font-medium mb-2">6. Smooth, rich taste</h4>
<p className="text-lg text-gray-600">Say goodbye to the typical chalky protein shake texture. This tastes exactly like a premium iced latte.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#04974D]">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<div>
<h4 className="text-xl font-medium mb-2">7. Supports fitness goals</h4>
<p className="text-lg text-gray-600">The perfect pre-workout boost or post-workout recovery drink, combining caffeine and amino acids.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#04974D]">
<i className="w-6 h-6" data-lucide="leaf"></i>
</div>
<div>
<h4 className="text-xl font-medium mb-2">8. Clean ingredients</h4>
<p className="text-lg text-gray-600">No artificial colors, nasty fillers, or cheap amino spiking. Just pure, science-backed nutrition.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-16 scroll-mt-20" id="purchase-section">
<div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

<div className="w-full lg:w-1/2 bg-gray-50 p-8 lg:p-12 flex flex-col justify-center items-center relative">
<div className="absolute top-8 left-8 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100 flex items-center gap-1">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm font-medium ml-1 text-gray-700">4.9 (2,400+ Reviews)</span>
</div>
<img alt="Protein Espresso Product" className="w-full max-w-md drop-shadow-2xl mb-8 mix-blend-multiply" src="https://placehold.co/600x600/e2e8f0/94a3b8?text=Protein+Espresso+Bag"/>
<div className="grid grid-cols-4 gap-4 w-full max-w-sm">
<div className="aspect-square rounded-xl bg-white border-2 border-[#04974D] p-1 cursor-pointer">
<img className="w-full h-full object-cover rounded-lg" src="https://placehold.co/100x100/e2e8f0/94a3b8?text=1"/>
</div>
<div className="aspect-square rounded-xl bg-white border border-gray-200 p-1 cursor-pointer hover:border-gray-300">
<img className="w-full h-full object-cover rounded-lg" src="https://placehold.co/100x100/e2e8f0/94a3b8?text=2"/>
</div>
<div className="aspect-square rounded-xl bg-white border border-gray-200 p-1 cursor-pointer hover:border-gray-300">
<img className="w-full h-full object-cover rounded-lg" src="https://placehold.co/100x100/e2e8f0/94a3b8?text=3"/>
</div>
<div className="aspect-square rounded-xl bg-white border border-gray-200 p-1 cursor-pointer hover:border-gray-300">
<img className="w-full h-full object-cover rounded-lg" src="https://placehold.co/100x100/e2e8f0/94a3b8?text=4"/>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-2">Protein Espresso</h2>
<p className="text-lg text-gray-500 mb-6">30 Servings | Iced Vanilla Latte Flavor</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-lg text-gray-700 font-medium">
<div className="bg-[#04974D]/10 rounded-full p-1"><i className="w-4 h-4 text-[#04974D]" data-lucide="check"></i></div>
                        20g premium whey isolate
                    </li>
<li className="flex items-center gap-3 text-lg text-gray-700 font-medium">
<div className="bg-[#04974D]/10 rounded-full p-1"><i className="w-4 h-4 text-[#04974D]" data-lucide="check"></i></div>
                        2 shots of real espresso per scoop
                    </li>
<li className="flex items-center gap-3 text-lg text-gray-700 font-medium">
<div className="bg-[#04974D]/10 rounded-full p-1"><i className="w-4 h-4 text-[#04974D]" data-lucide="check"></i></div>
                        Zero sugar, naturally sweetened
                    </li>
<li className="flex items-center gap-3 text-lg text-gray-700 font-medium">
<div className="bg-[#04974D]/10 rounded-full p-1"><i className="w-4 h-4 text-[#04974D]" data-lucide="check"></i></div>
                        Mixes instantly, no chalky taste
                    </li>
</ul>

<div className="space-y-4 mb-8">

<label className="relative block border-2 border-[#04974D] bg-[#04974D]/5 rounded-2xl p-5 cursor-pointer transition-colors shadow-sm">
<div className="absolute -top-3 right-4 bg-[#04974D] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                            Best Value - Save 30%
                        </div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-4 border-[#04974D] bg-white flex-shrink-0"></div>
<span className="text-xl font-semibold text-gray-900">Subscribe &amp; Save</span>
</div>
<div className="text-right">
<span className="text-2xl font-semibold text-gray-900">$39.00</span>
</div>
</div>
<div className="pl-8 text-sm text-gray-600 space-y-1">
<p className="flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-[#04974D]" data-lucide="refresh-cw"></i> Delivered every 30 days</p>
<p className="flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-[#04974D]" data-lucide="x-circle"></i> Cancel anytime easily</p>
<p className="flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-[#04974D]" data-lucide="truck"></i> Free shipping included</p>
</div>
</label>

<label className="relative block border border-gray-200 rounded-2xl p-5 cursor-pointer hover:border-gray-300 transition-colors bg-white">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-gray-300 bg-white flex-shrink-0"></div>
<span className="text-lg font-medium text-gray-700">One-Time Purchase</span>
</div>
<div className="text-right">
<span className="text-xl font-medium text-gray-900">$55.00</span>
</div>
</div>
</label>
</div>
<button className="w-full bg-[#04974D] hover:bg-[#037a3e] text-white text-xl font-semibold py-5 rounded-xl shadow-lg shadow-[#04974D]/25 transition-all flex justify-center items-center gap-2 mb-4">
                    Add to Cart — $39.00
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<div className="flex items-center justify-center gap-4 text-sm text-gray-500 font-medium">
<span className="flex items-center gap-1"><i className="w-4 h-4 text-gray-400" data-lucide="shield-check"></i> 30-Day Guarantee</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="flex items-center gap-1"><i className="w-4 h-4 text-gray-400" data-lucide="lock"></i> Secure Checkout</span>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-20 mt-12 border-y border-gray-200">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Don't just take our word for it</h2>
<p className="text-lg text-gray-500">Join thousands who have upgraded their morning routine.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
<div className="flex text-yellow-400 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-700 italic mb-6 flex-grow">"I used to spend $7 every morning at Starbucks. Now I make this in 30 seconds, get 20g of protein, and it genuinely tastes better. The energy is so much smoother too."</p>
<div className="flex items-center gap-3">
<img alt="Sarah J." className="w-12 h-12 rounded-full object-cover" src="https://placehold.co/100x100/e2e8f0/94a3b8?text=SJ"/>
<div>
<p className="font-semibold text-gray-900">Sarah J.</p>
<p className="text-xs text-[#04974D] font-medium flex items-center gap-1"><i className="w-3 h-3" data-lucide="badge-check"></i> Verified Buyer</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
<div className="flex text-yellow-400 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-700 italic mb-6 flex-grow">"Finally a protein powder that isn't thick, chalky, or overly sweet. It actually feels like drinking a crisp iced coffee. I've completely replaced my pre-workout with this."</p>
<div className="flex items-center gap-3">
<img alt="Michael T." className="w-12 h-12 rounded-full object-cover" src="https://placehold.co/100x100/e2e8f0/94a3b8?text=MT"/>
<div>
<p className="font-semibold text-gray-900">Michael T.</p>
<p className="text-xs text-[#04974D] font-medium flex items-center gap-1"><i className="w-3 h-3" data-lucide="badge-check"></i> Verified Buyer</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
<div className="flex text-yellow-400 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-gray-700 italic mb-6 flex-grow">"The subscription is a no-brainer. I go through a bag exactly every month. My digestion is better since ditching the sugary cafe drinks, and I've lost 5 lbs just making this swap."</p>
<div className="flex items-center gap-3">
<img alt="Emily P." className="w-12 h-12 rounded-full object-cover" src="https://placehold.co/100x100/e2e8f0/94a3b8?text=EP"/>
<div>
<p className="font-semibold text-gray-900">Emily P.</p>
<p className="text-xs text-[#04974D] font-medium flex items-center gap-1"><i className="w-3 h-3" data-lucide="badge-check"></i> Verified Subscriber</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">Ready to upgrade your daily coffee?</h2>
<p className="text-xl text-gray-600 mb-10">Stop settling for mid-day crashes and overpriced lattes. Get the energy you need and the protein your body wants.</p>
<img alt="Protein Espresso" className="w-48 h-48 mx-auto object-cover rounded-2xl shadow-md mb-8" src="https://placehold.co/400x400/e2e8f0/94a3b8?text=Product+Shot"/>
<a className="inline-flex w-full sm:w-auto justify-center bg-[#04974D] hover:bg-[#037a3e] text-white text-xl font-semibold py-4 px-10 rounded-xl shadow-lg shadow-[#04974D]/25 transition-all items-center gap-2 mb-6" href="#purchase-section">
            Try Protein Espresso Today
        </a>
<p className="text-sm font-medium text-gray-500">Includes 30-Day Money Back Guarantee</p>
</section>

<footer className="border-t border-gray-100 py-8 text-center bg-gray-50 pb-28 md:pb-8">
<p className="text-sm text-gray-500 font-medium">© 2024 Protein Espresso. All rights reserved.</p>
</footer>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
<div className="flex items-center justify-between mb-3 px-1">
<span className="font-semibold text-gray-900">Protein Espresso</span>
<span className="text-[#04974D] font-semibold">Save 30%</span>
</div>
<a className="w-full bg-[#04974D] text-white text-lg font-semibold py-3.5 rounded-xl shadow-md flex justify-center items-center" href="#purchase-section">
            Add to Cart
        </a>
</div>


    </>
  );
}
