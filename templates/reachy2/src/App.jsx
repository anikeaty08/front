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



      // Intentionally minimal.
    
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
      

<nav className="sticky top-0 z-50 w-full glass-card border-b border-neutral-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
<span className="font-semibold text-lg leading-none">R</span>
</div>
<span className="font-medium tracking-tight text-lg">Richie</span>
<span className="hidden sm:inline-block ml-2 text-xs font-medium uppercase tracking-wider text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full border border-neutral-200">By Aura.Build</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-black transition-colors" href="#how-it-works">Process</a>
<a className="hover:text-black transition-colors" href="#growth">Growth</a>
<a className="hover:text-black transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex bg-black text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-neutral-800 transition-all items-center gap-2 shadow-sm hover:shadow-md" href="#contact">
<span>Start Campaign</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="w-full overflow-hidden">

<section className="relative pt-20 pb-32 overflow-hidden">
<div className="absolute inset-0 z-0" style="background: radial-gradient(1200px 600px at 20% 10%, rgba(0,0,0,0.06), transparent 60%),
                       radial-gradient(900px 500px at 85% 30%, rgba(0,0,0,0.05), transparent 55%),
                       linear-gradient(120deg, rgba(255,255,255,0.9) 0%, rgba(245,245,245,0.9) 35%, rgba(255,255,255,0.9) 70%, rgba(240,240,240,0.9) 100%);
               background-size: 200% 200%;
               animation: heroGradientShift 14s ease-in-out infinite, heroHue 10s ease-in-out infinite;"></div>
<div className="absolute inset-0 bg-grid z-0 mask-image-gradient"></div>
<div className="absolute -top-24 -left-24 w-[32.5rem] h-[32.5rem] rounded-full blur-3xl z-0" style="background: radial-gradient(circle at 30% 30%, rgba(0,0,0,0.10), rgba(0,0,0,0) 60%);
                  animation: floatSlow 9s ease-in-out infinite;"></div>
<div className="absolute top-10 -right-32 w-[35rem] h-[35rem] rounded-full blur-3xl z-0" style="background: radial-gradient(circle at 40% 40%, rgba(0,0,0,0.08), rgba(0,0,0,0) 62%);
                  animation: floatSlow2 11s ease-in-out infinite;"></div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[45rem] h-[13.75rem] rounded-full blur-3xl z-0 opacity-70" style="background: radial-gradient(closest-side, rgba(0,0,0,0.06), rgba(0,0,0,0));
                  animation: heroGradientShift 18s ease-in-out infinite;"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-8 animate-[fadeIn_1s_ease-out]">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-600">Accepting new performance partners</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
            Scale reach, <br/>
<span className="text-neutral-400">not guess it.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Richie helps brands amplify short-form content through controlled distribution. Verified creators, real views, and organic algorithmic uplift.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="bg-black text-white text-base font-medium px-8 py-3.5 rounded-xl hover:bg-neutral-800 transition-transform hover:scale-105 flex items-center gap-2 shadow-xl shadow-black/5" href="#contact">
              Start Your Campaign
            </a>
<a className="bg-white text-black text-base font-medium px-8 py-3.5 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-colors flex items-center gap-2" href="#how-it-works">
<iconify-icon className="text-xl" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
              See How It Works
            </a>
</div>
<div className="relative max-w-5xl mx-auto">
<div className="absolute -inset-6 rounded-[2.5rem] z-0" style="background: linear-gradient(135deg, rgba(0,0,0,0.06), rgba(0,0,0,0) 45%, rgba(0,0,0,0.05));
                      filter: blur(18px);
                      opacity: 0.9;"></div>
<div className="relative bg-white rounded-t-3xl border border-neutral-200 shadow-2xl overflow-hidden p-8 md:p-12 min-h-[25rem] flex flex-col items-center z-10">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-20"></div>
<div className="relative z-20 flex flex-col items-center">
<div className="w-48 h-80 bg-black rounded-2xl border-4 border-neutral-800 shadow-2xl flex flex-col overflow-hidden relative group">
<div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
<iconify-icon className="text-white/20 text-5xl" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-auto p-3 bg-neutral-900/90 backdrop-blur border-t border-white/10">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/20"></div>
<div className="h-2 w-16 bg-white/20 rounded-full"></div>
</div>
</div>
<div className="absolute -inset-4 border border-blue-500/30 rounded-3xl animate-[ping_3s_infinite] opacity-50 z-[-1]"></div>
</div>
<div className="mt-4 text-sm font-semibold text-neutral-900">Your Original Reel</div>
</div>
<svg className="absolute top-1/2 left-0 w-full h-full -translate-y-12 z-10 pointer-events-none" style={{overflow: 'visible'}}>
<path d="M512 150 C 400 150, 300 250, 200 300" fill="none" stroke="#e5e5e5" stroke-dasharray="8 4" strokeWidth="2"></path>
<path d="M512 150 C 624 150, 724 250, 824 300" fill="none" stroke="#e5e5e5" stroke-dasharray="8 4" strokeWidth="2"></path>
<path d="M512 320 L 512 400" fill="none" stroke="#e5e5e5" strokeWidth="2"></path>
</svg>
<div className="absolute bottom-12 w-full flex justify-between px-12 md:px-32 items-end z-20">
<div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-lg flex items-center gap-3 animate-[bounce_4s_infinite]">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold">Creator A</div>
<div className="text-xs text-green-600 flex items-center gap-1">
<iconify-icon className="text-base" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
                      +45k Views
                    </div>
</div>
</div>
<div className="hidden md:flex bg-white p-3 rounded-xl border border-neutral-200 shadow-lg items-center gap-3 mb-12 animate-[bounce_5s_infinite]">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold">Creator B</div>
<div className="text-xs text-green-600 flex items-center gap-1">
<iconify-icon className="text-base" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
                      +120k Views
                    </div>
</div>
</div>
<div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-lg flex items-center gap-3 animate-[bounce_3.5s_infinite]">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold">Creator C</div>
<div className="text-xs text-green-600 flex items-center gap-1">
<iconify-icon className="text-base" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
                      +80k Views
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-200 bg-white py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-neutral-500 mb-8">TRUSTED BY TEAMS ACROSS FINTECH, IGAMING, AND WEB3</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-60">
<div className="flex items-center gap-2 font-semibold text-lg">
<iconify-icon className="text-xl" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon> FinStack
            </div>
<div className="flex items-center gap-2 font-semibold text-lg">
<iconify-icon className="text-xl" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon> BetFlow
            </div>
<div className="flex items-center gap-2 font-semibold text-lg">
<iconify-icon className="text-xl" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon> AuraApps
            </div>
<div className="flex items-center gap-2 font-semibold text-lg">
<iconify-icon className="text-xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon> ChainScale
            </div>
<div className="flex items-center gap-2 font-semibold text-lg">
<iconify-icon className="text-xl" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon> MarketDrop
            </div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="how-it-works">
<div className="mb-16">
<span className="text-sm font-semibold tracking-wider text-neutral-500 uppercase">Process</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mt-2 mb-6">How Richie Works</h2>
<p className="text-lg text-neutral-500 max-w-2xl">
            We purchase placements from vetted creators. Instead of producing new ads, creators repost your original Reel directly from your official account.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group p-8 rounded-[2rem] bg-white border border-neutral-200 hover:shadow-xl hover:border-neutral-300 transition-all">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">1. Vetted Placements</h3>
<p className="text-neutral-500 leading-relaxed">
              We select verified creators in your specific vertical and geography. No random selection, just targeted fit.
            </p>
</div>
<div className="group p-8 rounded-[2rem] bg-white border border-neutral-200 hover:shadow-xl hover:border-neutral-300 transition-all">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:reorder-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">2. Direct Reposts</h3>
<p className="text-neutral-500 leading-relaxed">
              Creators repost your Reel to their Stories and feed. Your content remains the source of truth and ownership.
            </p>
</div>
<div className="group p-8 rounded-[2rem] bg-white border border-neutral-200 hover:shadow-xl hover:border-neutral-300 transition-all">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">3. Organic Uplift</h3>
<p className="text-neutral-500 leading-relaxed">
              Views and engagement trigger the algorithm. Your content receives secondary organic traffic beyond the paid placement.
            </p>
</div>
</div>
</section>

<section className="bg-black text-white py-24 rounded-[2.5rem] mx-4 md:mx-6 overflow-hidden relative" id="growth">
<div className="absolute top-0 right-0 w-[31.25rem] h-[31.25rem] bg-neutral-800/20 rounded-full blur-[6.25rem] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 text-sm font-medium mb-6">Organic Growth Engine</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
              One Reel. <br/>
              Multiple entry points. <br/>
<span className="text-neutral-500">Compounding reach.</span>
</h2>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Each repost delivers more than just impressions. We drive saves, shares, profile visits, and accumulated social proof that lasts long after the campaign ends.
            </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-white text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Full content ownership
              </li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-white text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Sustained visibility
              </li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-white text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Algorithmic triggering
              </li>
</ul>
</div>
<div className="w-full md:w-1/2">
<div className="bg-neutral-900 rounded-[2rem] border border-neutral-800 p-8 shadow-2xl">
<div className="flex justify-between items-center mb-8">
<div>
<p className="text-xs text-neutral-400 uppercase tracking-widest">Total Reach</p>
<p className="text-3xl font-medium mt-1">1.2M <span className="text-sm text-green-500 font-normal">+24% Organic</span></p>
</div>
<div className="h-10 w-10 bg-neutral-800 rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:graph-new-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-end gap-2 h-32 mb-8">
<div className="w-full bg-neutral-800 rounded-t-lg h-[40%]"></div>
<div className="w-full bg-neutral-800 rounded-t-lg h-[60%]"></div>
<div className="w-full bg-neutral-800 rounded-t-lg h-[45%]"></div>
<div className="w-full bg-neutral-800 rounded-t-lg h-[70%]"></div>
<div className="w-full bg-white rounded-t-lg h-[90%] shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="w-full bg-neutral-800 rounded-t-lg h-[75%]"></div>
<div className="w-full bg-neutral-800 rounded-t-lg h-[80%]"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-neutral-800/50 p-4 rounded-xl">
<div className="flex items-center gap-2 mb-2 text-neutral-400 text-xs uppercase">
<iconify-icon className="text-lg" icon="solar:share-linear" strokeWidth="1.5"></iconify-icon> Shares
                  </div>
<div className="text-xl font-medium">12.5k</div>
</div>
<div className="bg-neutral-800/50 p-4 rounded-xl">
<div className="flex items-center gap-2 mb-2 text-neutral-400 text-xs uppercase">
<iconify-icon className="text-lg" icon="solar:bookmark-linear" strokeWidth="1.5"></iconify-icon> Saves
                  </div>
<div className="text-xl font-medium">8.2k</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Why Growth Teams Choose Richie</h2>
<p className="text-neutral-500">Built for founders, growth marketers, and performance teams who demand transparency.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
<div className="flex flex-col gap-3">
<iconify-icon className="text-black text-3xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-semibold text-lg">Verified Creators</h4>
<p className="text-sm text-neutral-500">Every publisher is manually vetted for audience quality.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-black text-3xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-semibold text-lg">Geo Targeting</h4>
<p className="text-sm text-neutral-500">Pinpoint specific regions and languages.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-black text-3xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-semibold text-lg">No Fake Traffic</h4>
<p className="text-sm text-neutral-500">Zero tolerance for bot farms. Real human eyes only.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-black text-3xl" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-semibold text-lg">Clean Mechanics</h4>
<p className="text-sm text-neutral-500">Native reposts that respect platform guidelines.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-black text-3xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-semibold text-lg">Scalable Budgets</h4>
<p className="text-sm text-neutral-500">Start small and scale up as you see results.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-black text-3xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-semibold text-lg">Clear Reporting</h4>
<p className="text-sm text-neutral-500">Transparent metrics delivered after every campaign.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 text-center">Flexible Pricing Models</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="bg-white p-10 rounded-[2rem] border border-neutral-200 shadow-sm flex flex-col">
<div className="mb-6">
<span className="text-xs font-semibold tracking-wider uppercase text-neutral-400">Option 1</span>
<h3 className="text-2xl font-semibold mt-2">Pay per Integration</h3>
</div>
<p className="text-neutral-500 mb-8 leading-relaxed">
                You choose the creators. We execute placements exactly where you decide. Best for brand awareness and strategic positioning.
              </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex gap-3 text-sm text-neutral-600">
<iconify-icon className="text-black text-xl flex-shrink-0" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
                  Curated creator selection
                </li>
<li className="flex gap-3 text-sm text-neutral-600">
<iconify-icon className="text-black text-xl flex-shrink-0" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
                  Fixed cost per post
                </li>
<li className="flex gap-3 text-sm text-neutral-600">
<iconify-icon className="text-black text-xl flex-shrink-0" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
                  Controlled brand association
                </li>
</ul>
<a className="w-full py-4 rounded-xl border border-black font-medium text-center hover:bg-neutral-50 transition-colors" href="#contact">Select Creators</a>
</div>
<div className="bg-black text-white p-10 rounded-[2rem] shadow-xl flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-white text-black text-xs font-semibold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Most Scalable</div>
<div className="mb-6">
<span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Option 2</span>
<h3 className="text-2xl font-semibold mt-2">Pay per View</h3>
</div>
<p className="text-neutral-400 mb-8 leading-relaxed">
                You pay for guaranteed views. We build a media plan with CPI-optimized distribution to maximize reach.
              </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white text-xl flex-shrink-0" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
                  Guaranteed impressions
                </li>
<li className="flex gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white text-xl flex-shrink-0" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
                  Detailed media planning
                </li>
<li className="flex gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white text-xl flex-shrink-0" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
                  Lowest cost per interaction
                </li>
</ul>
<a className="w-full py-4 rounded-xl bg-white text-black font-medium text-center hover:bg-neutral-200 transition-colors" href="#contact">Get Media Plan</a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="contact">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Start Your Campaign</h2>
<p className="text-lg text-neutral-500">Tell us about your product and goals. We'll build a custom distribution strategy.</p>
</div>
<form className="space-y-6 bg-white p-8 md:p-12 rounded-[2rem] border border-neutral-200 shadow-sm" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700">Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-400 transition-all text-sm" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700">Company</label>
<input className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-400 transition-all text-sm" placeholder="Acme Inc." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700">Email</label>
<input className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-400 transition-all text-sm" placeholder="jane@acme.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700">Budget Range</label>
<select className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-400 transition-all text-sm">
<option value="">Select range...</option>
<option value="1k-5k">$1k - $5k</option>
<option value="5k-20k">$5k - $20k</option>
<option value="20k+">$20k+</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700">Target Geography &amp; Message</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-400 transition-all min-h-[7.5rem] text-sm" placeholder="Tell us about your target audience..."></textarea>
</div>
<button className="w-full bg-black text-white font-medium text-lg py-4 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-black/10 flex justify-center items-center gap-2" type="submit">
            Request Media Plan
            <iconify-icon className="text-xl" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</section>
</main>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs font-semibold">R</div>
<span className="font-medium text-lg">Richie</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs">Clean, scalable, performance-driven distribution for modern growth teams.</p>
</div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-black" href="#">Privacy</a>
<a className="hover:text-black" href="#">Terms</a>
<a className="hover:text-black" href="#contact">Contact</a>
</div>
</div>
<div className="flex justify-between items-center pt-8 border-t border-neutral-100">
<p className="text-xs text-neutral-400">© 2024 Richie Distribution.</p>
<div className="text-xs text-neutral-400 flex items-center gap-2">
<span>Presented by</span>
<span className="font-semibold text-black">Aura.Build</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
