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
      
<div className="bg-noise"></div>
<main className="w-[1440px] min-w-[1440px] mx-auto overflow-hidden relative border-x border-white/5 bg-[#050505]">

<section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 md:px-12 text-center overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-8 tracking-wide uppercase">
<iconify-icon icon="solar:wallet-linear" width="16"></iconify-icon>
            Stop overpaying online
          </div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1.05] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
            Stop scrolling.<br/>Start saving.
          </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed mb-10 tracking-tight">
            You waste hours comparing prices and still wonder if you got the best deal. SmartCart instantly scans the web to find the absolute lowest price on exactly what you want.
          </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2">
              Add to Browser — It's Free
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
              See how it works
            </button>
</div>
<p className="mt-4 text-xs text-neutral-500 font-light flex items-center gap-1.5">
<iconify-icon className="text-green-400" icon="solar:shield-check-linear"></iconify-icon>
            No credit card required. Installs in 3 seconds.
          </p>
</div>

<div className="relative mt-24 w-full max-w-5xl mx-auto h-[400px] rounded-t-3xl border-t border-l border-r border-white/10 bg-gradient-to-b from-white/5 to-transparent flex justify-center items-end overflow-hidden mask-image: linear-gradient(to bottom, black 50%, transparent 100%);">
<div className="flex gap-8 translate-y-16">
<div className="w-[280px] h-[300px] rounded-t-[2.5rem] border border-white/10 bg-[#0A0A0A] relative shadow-[0_-20px_50px_rgba(0,0,0,0.5)] opacity-50">
<div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full"></div>
<div className="mt-16 mx-4 h-32 rounded-2xl bg-white/5 border border-white/5"></div>
<div className="mt-4 mx-4 h-12 rounded-xl bg-white/5 border border-white/5"></div>
</div>
<div className="w-[320px] h-[350px] rounded-t-[3rem] border border-blue-500/30 bg-[#0A0A0A] relative shadow-[0_-20px_60px_rgba(59,130,246,0.15)] z-10 -translate-y-8">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

<div className="mt-20 mx-5 p-4 rounded-2xl bg-gradient-to-b from-blue-500/20 to-blue-500/5 border border-blue-500/20 relative overflow-hidden backdrop-blur-md">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
<iconify-icon className="text-blue-400" icon="solar:tag-price-bold" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-blue-400 uppercase">Lower Price Found</p>
<p className="text-sm font-medium text-white">Save $49.00 right now</p>
</div>
</div>
<div className="w-full h-10 bg-white text-black rounded-xl flex items-center justify-center font-medium text-xs">
                  Apply Discount
                </div>
</div>
</div>
<div className="w-[280px] h-[300px] rounded-t-[2.5rem] border border-white/10 bg-[#0A0A0A] relative shadow-[0_-20px_50px_rgba(0,0,0,0.5)] opacity-50">
<div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full"></div>
<div className="mt-16 mx-4 h-16 rounded-2xl bg-white/5 border border-white/5"></div>
<div className="mt-4 mx-4 h-16 rounded-2xl bg-white/5 border border-white/5"></div>
</div>
</div>
</div>
</section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<section className="py-24 px-6 md:px-12 relative">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col items-center justify-center mb-24 text-center">
<div className="flex items-center gap-1 mb-3">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg font-medium tracking-tight text-white mb-1">Trusted by 100,000+ smart shoppers</p>
<p className="text-sm text-neutral-500">Average member saves $420 every year.</p>
</div>
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/3">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                Shopping shouldn't feel like research.
              </h3>
</div>
<div className="md:w-2/3 space-y-8">
<p className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed tracking-tight">
                Opening 10 tabs, hunting for expired promo codes, and reading fake reviews is exhausting. We built SmartCart so you can buy with absolute confidence.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<iconify-icon className="text-neutral-500 mb-4" icon="solar:sad-circle-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">The old way</h4>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                    Endless scrolling, manual price checking, and that sinking feeling that you just overpaid.
                  </p>
</div>
<div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
<iconify-icon className="text-blue-400 mb-4" icon="solar:smile-circle-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-white mb-2 tracking-tight">The SmartCart way</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                    We do the math instantly in the background. You just click "checkout" and save.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-neutral-950/50 border-y border-white/5 relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Your unfair shopping advantage.
            </h3>
<p className="text-lg text-neutral-400 font-light mb-8">
              Everything you need to make the perfect purchase, built right into a single, lightning-fast interface.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-white" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white mb-3 tracking-tight">Auto-Apply Coupons</h4>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                We silently test thousands of promo codes at checkout and apply the one that saves you the most money. Automatically.
              </p>
</div>
<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-white" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white mb-3 tracking-tight">Instant Price History</h4>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                Is that "sale" actually a deal? We show you the product's price history over the last 6 months so you never get tricked.
              </p>
</div>
<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6">
<iconify-icon className="text-white" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-white mb-3 tracking-tight">True Comparison</h4>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                Stack up to 4 products side-by-side. We highlight the core differences in specs and price, making the choice obvious.
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 relative">
<div className="max-w-4xl mx-auto text-center">
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-16">
            Works silently. Saves loudly.
          </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left relative">

<div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-blue-500/10 via-blue-500/50 to-blue-500/10 z-0"></div>

<div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-blue-500/30 flex items-center justify-center text-blue-400 font-medium mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                1
              </div>
<h4 className="text-xl font-medium text-white mb-3 tracking-tight">Get the app</h4>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                Install SmartCart on your browser or phone in one click. No account required to start.
              </p>
</div>

<div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-blue-500/30 flex items-center justify-center text-blue-400 font-medium mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                2
              </div>
<h4 className="text-xl font-medium text-white mb-3 tracking-tight">Shop normally</h4>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                Browse Amazon, BestBuy, or your favorite stores. We sit quietly in the background.
              </p>
</div>

<div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
<div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium mb-6 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                3
              </div>
<h4 className="text-xl font-medium text-white mb-3 tracking-tight">Save instantly</h4>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                If there's a better price, a coupon, or a smarter alternative, we pop up and do the work.
              </p>
</div>
</div>
<div className="mt-16">
<button className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] inline-block">
              Start your free setup
            </button>
</div>
</div>
</section>

<section className="py-24 relative bg-[#030303] border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 md:px-12 mb-20 text-center">
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            See exactly what you're buying.
          </h3>
<p className="mt-4 text-lg text-neutral-400 font-light max-w-2xl mx-auto">
            A radically clear interface designed to eliminate buyer's remorse.
          </p>
</div>

<div className="max-w-6xl mx-auto px-6 mb-32">
<div className="flex flex-col md:flex-row-reverse items-center gap-16">
<div className="md:w-1/2">
<h4 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
                Smarter product feeds.
              </h4>
<p className="text-neutral-400 text-base font-light leading-relaxed mb-6">
                Say goodbye to endless grids of identical items. Our AI tags products with honest labels like "Best Value" and warns you about missing features before you click.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5 shrink-0">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 font-light">See true ratings stripped of fake bot reviews.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5 shrink-0">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 font-light">Know instantly if a newer model is launching soon.</span>
</li>
</ul>
</div>
<div className="md:w-1/2 flex justify-center">
<div className="phone-frame ring-1 ring-white/10 shadow-[0_0_100px_rgba(59,130,246,0.05)]">
<div className="dynamic-island"></div>
<div className="absolute inset-0 bg-[#050505] overflow-y-auto hide-scroll pb-20">
<div className="px-6 pt-16 pb-4 flex justify-between items-center sticky top-0 bg-[#050505]/80 backdrop-blur-md z-40">
<div className="text-lg font-medium tracking-tight text-white uppercase tracking-widest">SC</div>
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 overflow-hidden">
<img alt="user" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
<div className="px-6 mb-6">
<div className="w-full h-12 rounded-full bg-white/5 border border-white/10 flex items-center px-4 gap-3 text-neutral-500">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
<span className="text-sm font-light">Search anything...</span>
</div>
</div>
<div className="flex gap-2 px-6 mb-8 overflow-x-auto hide-scroll">
<div className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium shrink-0">For You</div>
<div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium shrink-0">Electronics</div>
<div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium shrink-0">Audio</div>
</div>
<div className="px-6 flex flex-col gap-4">
<div className="w-full rounded-3xl bg-[#111] border border-white/10 p-4 flex flex-col gap-3 group">
<div className="w-full h-36 rounded-2xl bg-white/5 relative overflow-hidden flex items-center justify-center p-4">
<div className="absolute top-2 left-2 px-2 py-1 bg-blue-500/20 backdrop-blur-md rounded border border-blue-500/30 text-[10px] font-medium text-blue-400 uppercase tracking-wider flex items-center gap-1 z-10">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
                          Best Value
                        </div>
<img alt="headphones" className="w-full h-full object-contain mix-blend-luminosity opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-white tracking-tight">Sony WH-1000XM5</h3>
<span className="text-sm font-medium text-white">$348</span>
</div>
<p className="text-[11px] text-neutral-400 flex items-center gap-1 mb-2 font-light">
<iconify-icon className="text-red-400" icon="solar:graph-up-linear"></iconify-icon>
                          Usually $398 (12% off)
                        </p>
<div className="flex gap-2 mt-3">
<button className="flex-1 bg-white text-black text-xs font-medium py-2 rounded-xl">Buy Now</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mb-32">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2 order-2 md:order-1 flex justify-center">
<div className="phone-frame shadow-[0_0_100px_rgba(59,130,246,0.05)]">
<div className="dynamic-island"></div>
<div className="absolute inset-0 bg-[#050505] p-6 pt-20">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-medium tracking-tight text-white">Compare</h3>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-neutral-400" icon="solar:close-circle-linear" width="18"></iconify-icon>
</div>
</div>
<div className="w-full bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 mb-6 flex gap-3 items-start">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-blue-400" icon="solar:cup-star-bold" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-1">Smart Recommendation</p>
<p className="text-sm font-normal text-white">
                        WH-1000XM5 offers better battery life for only $19 more than QC45 today.
                      </p>
</div>
</div>
<div className="flex gap-4 mb-6">
<div className="w-1/2 flex flex-col items-center">
<div className="w-20 h-20 rounded-2xl bg-white/5 mb-3 p-2 border border-blue-500/30 relative">
<div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full border-2 border-[#050505] flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
<img alt="item1" className="w-full h-full object-contain mix-blend-luminosity opacity-80" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<span className="text-xs font-medium text-white text-center">WH-1000XM5</span>
</div>
<div className="w-1/2 flex flex-col items-center">
<div className="w-20 h-20 rounded-2xl bg-white/5 mb-3 p-2 border border-white/10 opacity-50">
<img alt="item2" className="w-full h-full object-contain mix-blend-luminosity" src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<span className="text-xs font-normal text-neutral-400 text-center">QC 45</span>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center bg-white/5 rounded-xl p-3 border border-white/5">
<span className="text-xs font-medium text-white w-1/2 text-center border-r border-white/10">$348</span>
<span className="text-xs font-normal text-neutral-400 w-1/2 text-center">$329</span>
</div>
<div className="flex justify-between items-center bg-white/5 rounded-xl p-3 border border-white/5">
<span className="text-xs font-medium text-green-400 w-1/2 text-center border-r border-white/10">30 Hours</span>
<span className="text-xs font-normal text-neutral-400 w-1/2 text-center">24 Hours</span>
</div>
</div>
<button className="w-full mt-6 bg-white text-black rounded-xl py-3 text-sm font-medium">Add Winner to Cart</button>
</div>
</div>
</div>
<div className="md:w-1/2 order-1 md:order-2 pl-0 md:pl-10">
<h4 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
                Compare without the confusion.
              </h4>
<p className="text-neutral-400 text-base font-light leading-relaxed mb-6">
                Stop juggling tabs. We automatically pull specs, calculate true prices with shipping, and tell you exactly which product gives you more for your money.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mt-0.5 shrink-0">
<iconify-icon className="text-blue-400" icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 font-light">AI recommendations based on pure value.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mt-0.5 shrink-0">
<iconify-icon className="text-blue-400" icon="solar:scale-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 font-light">Clear, side-by-side spec sheets generated instantly.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-white/5"></div>

<section className="py-32 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-white" icon="solar:cart-large-minimalistic-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Stop leaving money<br/>on the table.
          </h2>
<p className="text-lg md:text-xl text-neutral-400 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Join hundreds of thousands of shoppers who upgraded their cart. It takes 30 seconds to install and it's completely free forever.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-medium text-base hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Get SmartCart Free
            </button>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-sm text-neutral-500 font-light">
<span className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> No hidden fees
            </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Safe &amp; Secure
            </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon> Cancel anytime
            </span>
</div>
</div>
</section>

<footer className="py-10 text-center border-t border-white/5 bg-[#050505] relative z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-neutral-600">
<p>© 2024 SmartCart Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
