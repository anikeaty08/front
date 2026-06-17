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
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
</div>

<header className="sm:px-6 sticky max-w-7xl z-50 mr-auto ml-auto pt-6 pr-4 pl-4 top-4">
<div className="flex shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-white w-8 h-8 text-2xl" icon="solar:home-smile-linear"></iconify-icon>
<span className="font-geist font-medium text-lg tracking-tight ml-1">
              Homecoin
            </span>
</div>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist transition-colors" href="#how-it-works">
              How it Works
            </a>
<a className="text-sm font-medium text-neutral-300 hover:text-white tracking-tight font-geist transition-colors" href="#faq">
              FAQ
            </a>
</nav>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-900 tracking-tight bg-white hover:bg-neutral-200 border border-white/10 rounded-full px-4 py-2 transition-all" href="#cta-embed">
<span className="font-geist">Get Started</span>
<iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="max-w-7xl sm:px-6 mt-8 mx-auto mb-8 px-4">
<div className="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black/80 border-white/10 border rounded-[40px] backdrop-blur">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-10 pt-8 pr-6 pb-10 pl-6 flex flex-col items-center text-center">

<div className="max-w-4xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 text-xs font-medium text-blue-300 bg-blue-500/10 border border-white/10 rounded-full px-3 py-1.5 mb-6">
<iconify-icon className="w-3.5 h-3.5" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-geist">US Department of Justice Endorsed</span>
</div>
<h1 className="text-[8.5vw] sm:text-[6.5vw] md:text-[5vw] lg:text-[4.5vw] leading-[1.05] font-medium text-neutral-100 tracking-tighter font-geist max-w-4xl">
              List on the MLS for $95.
              <br/>
              Keep the 3% Commission.
            </h1>
<p className="mt-6 text-base sm:text-lg leading-relaxed text-neutral-400 font-geist max-w-2xl">
              Stop paying $15,000 for a 20-minute job. We are the broker. You
              pay a flat fee. Identical syndication to Zillow, Realtor.com, and
              Redfin.
            </p>
</div>

<div className="mt-12 relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-[0_0_40px_rgba(0,0,0,0.8)] group cursor-pointer flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/50 via-neutral-900 to-black pointer-events-none"></div>

<div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-105">
<div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">
<iconify-icon className="text-white text-3xl sm:text-4xl ml-2" icon="solar:play-bold"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2 z-20">

<div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden relative cursor-pointer">
<div className="absolute top-0 left-0 bottom-0 w-1/3 bg-blue-500 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
</div>
</div>

<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-4">
<iconify-icon className="text-white text-xl hover:text-blue-400 transition-colors" icon="solar:play-bold"></iconify-icon>
<iconify-icon className="text-white text-xl hover:text-blue-400 transition-colors" icon="solar:volume-loud-bold"></iconify-icon>
<div className="text-xs font-medium text-white/80 font-geist tracking-wide">
                    03:42 / 08:15
                  </div>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-white text-xl hover:text-blue-400 transition-colors" icon="solar:settings-linear"></iconify-icon>
<iconify-icon className="text-white text-xl hover:text-blue-400 transition-colors" icon="solar:full-screen-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-12 text-center opacity-80 border-t border-white/10 pt-8 w-full max-w-4xl">
<div>
<div className="text-xl font-medium tracking-tight text-neutral-100 font-geist">
                17,000+
              </div>
<p className="text-xs text-neutral-500 mt-1 font-geist uppercase tracking-widest">
                Listings Sold
              </p>
</div>
<div>
<div className="text-xl font-medium tracking-tight text-neutral-100 font-geist flex items-center justify-center gap-1">
                4.7
                <iconify-icon className="text-yellow-500 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-neutral-500 mt-1 font-geist uppercase tracking-widest">
                Yelp Rating
              </p>
</div>
<div>
<div className="text-xl font-medium tracking-tight text-neutral-100 font-geist flex items-center justify-center gap-1">
                4.4
                <iconify-icon className="text-yellow-500 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-neutral-500 mt-1 font-geist uppercase tracking-widest">
                Google Rating
              </p>
</div>
<div>
<div className="text-xl font-medium tracking-tight text-neutral-100 font-geist">
                $6.4M
              </div>
<p className="text-xs text-neutral-500 mt-1 font-geist uppercase tracking-widest">
                Seed Backed
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-4 mx-auto mb-8 px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<article className="group bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors rounded-3xl p-8 flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 font-geist mb-3">
            Tired of 3% Fees
          </h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">
            The MLS monopoly has kept sellers paying massive commissions just
            for database entry. We open the door for $95.
          </p>
</article>
<article className="group bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors rounded-3xl p-8 flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:user-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 font-geist mb-3">
            You Know the Drill
          </h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">
            Investors and flippers: you don't need hand-holding. You just need
            MLS access without giving up your margin.
          </p>
</article>
<article className="group bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors rounded-3xl p-8 flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 font-geist mb-3">
            FSBO Complications
          </h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">
            Selling yourself is great until you hit weird contract language. We
            offer hourly, commission-free licensed support when needed.
          </p>
</article>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
<div className="mb-10 text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl text-neutral-100 font-geist tracking-tight font-medium">
          Everything You Get. Nothing Hidden.
        </h2>
<p className="mt-3 text-sm sm:text-base text-neutral-400 font-geist">
          The exact same exposure as a traditional agent, built into an
          automated platform.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-2 md:row-span-2 relative overflow-hidden bg-neutral-900/80 border border-white/10 rounded-3xl p-8 flex flex-col justify-between group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-9xl text-white" icon="solar:global-linear"></iconify-icon>
</div>
<div className="z-10 mt-auto">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md border border-white/5">
<iconify-icon className="text-xl text-white" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-100 font-geist mb-2">
              Massive Syndication
            </h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed max-w-sm">
              Your home appears on your local MLS, then automatically flows to
              Zillow, Redfin, Realtor.com, Trulia, and hundreds of other buyer
              sites. Zero difference in exposure.
            </p>
</div>
</div>

<div className="md:col-span-2 bg-neutral-900/80 border border-white/10 rounded-3xl p-8 flex items-center gap-6">
<div className="w-16 h-16 rounded-2xl bg-neutral-800 border border-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-white" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 font-geist mb-1">
              State &amp; Federal Disclosures
            </h3>
<p className="text-sm text-neutral-400 font-geist">
              All required legal paperwork generated for free.
            </p>
</div>
</div>

<div className="md:col-span-1 bg-neutral-900/80 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
<iconify-icon className="text-3xl text-neutral-400 mb-4" icon="solar:laptop-linear"></iconify-icon>
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 font-geist mb-1">
              100% Online
            </h3>
<p className="text-sm text-neutral-400 font-geist">
              No office visits. No faxing. Start in minutes.
            </p>
</div>
</div>

<div className="md:col-span-1 bg-neutral-900/80 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
<iconify-icon className="text-3xl text-neutral-400 mb-4" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-100 font-geist mb-1">
              A La Carte
            </h3>
<p className="text-sm text-neutral-400 font-geist">
              Add photos, signs, or agent help only if needed.
            </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-16 mx-auto mb-8 px-4" id="how-it-works">
<div className="mb-12 text-center">
<h2 className="text-3xl font-medium tracking-tight text-neutral-100 font-geist">
          How It Works
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-8 left-12 right-12 h-px bg-white/10 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center text-xl font-medium font-geist text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] mb-6">
            1
          </div>
<h3 className="text-base font-medium text-white font-geist mb-2">
            Check Your Zip Code
          </h3>
<p className="text-sm text-neutral-400 font-geist">
            See the exact flat fee for your local MLS market.
          </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center text-xl font-medium font-geist text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] mb-6">
            2
          </div>
<h3 className="text-base font-medium text-white font-geist mb-2">
            Build Your Listing
          </h3>
<p className="text-sm text-neutral-400 font-geist">
            Upload photos, set your price, and e-sign online.
          </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center text-xl font-medium font-geist text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] mb-6">
            3
          </div>
<h3 className="text-base font-medium text-white font-geist mb-2">
            Go Live Automatically
          </h3>
<p className="text-sm text-neutral-400 font-geist">
            We approve it. You hit Zillow and the MLS within 24h.
          </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center text-xl font-medium font-geist text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] mb-6">
            4
          </div>
<h3 className="text-base font-medium text-white font-geist mb-2">
            Keep Your Commission
          </h3>
<p className="text-sm text-neutral-400 font-geist">
            Review offers directly, close, and save thousands.
          </p>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 mt-16 mx-auto mb-8 px-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<article className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 flex flex-col">
<div className="flex items-center gap-1 mb-6 text-white">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-neutral-300 font-geist leading-relaxed mb-8 flex-1">
            "Homecoin saved us $22,750 in Realtor commissions on the sale of our
            $650,000 home. And it was simple and easy."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-500 font-geist text-sm">
              IS
            </div>
<div>
<h3 className="text-sm font-medium tracking-tight text-neutral-100 font-geist">
                Individual Seller
              </h3>
<p className="text-[11px] text-neutral-500 font-geist uppercase tracking-widest mt-0.5">
                Yelp Review
              </p>
</div>
</div>
</article>
<article className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 flex flex-col">
<div className="flex items-center gap-1 mb-6 text-white">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-neutral-300 font-geist leading-relaxed mb-8 flex-1">
            "We list about 7 properties per year on homecoin. The step-by-step
            process couldn't be simpler. The amount saved is in the hundreds of
            thousands."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-500 font-geist text-sm">
              IF
            </div>
<div>
<h3 className="text-sm font-medium tracking-tight text-neutral-100 font-geist">
                Investor / Flipper
              </h3>
<p className="text-[11px] text-neutral-500 font-geist uppercase tracking-widest mt-0.5">
                Google Review
              </p>
</div>
</div>
</article>
</div>
</section>

<section className="sm:px-6 max-w-7xl mt-16 mr-auto mb-8 ml-auto pr-4 pl-4">
<div className="bg-neutral-900/30 border border-white/10 rounded-[40px] overflow-hidden">
<div className="grid md:grid-cols-2">

<div className="relative bg-neutral-800 aspect-square md:aspect-auto flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black"></div>
<iconify-icon className="text-9xl text-white/10 z-0" icon="solar:user-circle-linear"></iconify-icon>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-xl font-medium tracking-tight text-white font-geist">
                Jon Minerick
              </h3>
<p className="text-sm text-neutral-400 font-geist">
                Founder &amp; CEO, CA DRE 01523040
              </p>
</div>
</div>

<div className="sm:p-12 flex flex-col pt-8 pr-8 pb-8 pl-8 justify-center">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-white" icon="solar:flag-linear"></iconify-icon>
</div>
<h2 className="sm:text-3xl text-2xl font-medium text-neutral-100 tracking-tight font-geist mb-6">
              Built to fix a broken industry.
            </h2>
<ul className="space-y-5 text-sm sm:text-base text-neutral-400 font-geist leading-relaxed">
<li className="flex gap-3">
<iconify-icon className="text-lg text-white shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
<strong className="">Former Marine Corps Captain.</strong>
                  Taught to strip out inefficiency and focus on the mission.
                </span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-lg text-white shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
<strong className="">Licensed Broker in 36 States.</strong>
                  I got licensed specifically so Homecoin could be the broker
                  and bypass agent fees.
                </span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-lg text-white shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
<strong className="">Self-Taught Developer.</strong>
                  Built the entire platform from scratch to ensure a seamless,
                  100% online experience.
                </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mt-16 mx-auto mb-8 px-4 sm:px-6" id="faq">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl text-neutral-100 font-geist tracking-tight font-medium">
          Questions We Get
        </h2>
</div>
<div className="space-y-3">
<details className="group bg-neutral-900/40 border border-white/10 rounded-2xl transition-all open:bg-neutral-900">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-200 font-geist">
<span>Is this actually legal and recognized?</span>
<span className="transition group-open:rotate-180 text-neutral-500">
<iconify-icon className="w-5 h-5" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-400 text-sm font-geist leading-relaxed p-5 pt-0">
            Yes. We are a fully licensed brokerage. The US Department of Justice
            explicitly supports flat fee MLS listings to save consumers money.
          </div>
</details>
<details className="group bg-neutral-900/40 border border-white/10 rounded-2xl transition-all open:bg-neutral-900">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-200 font-geist">
<span>Will my home get less exposure?</span>
<span className="transition group-open:rotate-180 text-neutral-500">
<iconify-icon className="w-5 h-5" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-400 text-sm font-geist leading-relaxed p-5 pt-0">
            No. You get identical exposure to a traditional listing. We put you
            on the local MLS, which automatically pushes your listing to Zillow,
            Realtor.com, Redfin, etc.
          </div>
</details>
<details className="group bg-neutral-900/40 border border-white/10 rounded-2xl transition-all open:bg-neutral-900">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-neutral-200 font-geist">
<span>What if I need help negotiating?</span>
<span className="transition group-open:rotate-180 text-neutral-500">
<iconify-icon className="w-5 h-5" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-400 text-sm font-geist leading-relaxed p-5 pt-0">
            You can hire one of our licensed agents by the hour ($149/hr) at any
            point for contracts, negotiations, or general advice. Pay only for
            what you use.
          </div>
</details>
</div>
</section>

<section className="max-w-4xl sm:px-6 mt-16 mx-auto mb-8 px-4 text-center" id="cta-embed">
<h2 className="text-3xl text-neutral-100 font-geist tracking-tight font-medium mb-3">
        See Your Local Flat Fee
      </h2>
<p className="text-sm text-neutral-400 font-geist mb-8">
        Enter your zip code. Free to look. Takes 30 seconds.
      </p>

<div className="bg-neutral-900 border border-white/10 rounded-full p-2 max-w-md mx-auto flex items-center shadow-[0_0_30px_rgba(255,255,255,0.03)] focus-within:border-white/30 focus-within:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
<iconify-icon className="text-neutral-400 text-xl ml-4" icon="solar:map-point-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-white px-4 w-full font-geist text-base" placeholder="Enter Zip Code..." readonly="" type="text" value="90210"/>
<button className="bg-white hover:bg-neutral-200 text-black px-6 py-3 rounded-full font-medium font-geist text-sm whitespace-nowrap transition-colors flex items-center gap-2">
          Search
          <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<p className="mt-8 text-xs text-neutral-500 font-geist">
        Questions? Email
        <a className="text-white hover:underline" href="mailto:info@homecoin.com">
          info@homecoin.com
        </a>
        or call
        <a className="text-white hover:underline" href="tel:1-760-440-8880">
          1-760-440-8880
        </a>
        .
      </p>
</section>

<section className="max-w-5xl sm:px-6 mt-20 mx-auto mb-20 px-4" id="book-meeting">
<div className="text-center mb-10">
<h2 className="text-3xl sm:text-4xl text-neutral-100 font-geist tracking-tight font-medium mb-4">
          Discuss your listing
        </h2>
<p className="text-base text-neutral-400 font-geist max-w-xl mx-auto">
          Pick a time that works for you. We'll walk you through the process and
          answer any questions.
        </p>
</div>
<div className="bg-white rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10 flex flex-col md:flex-row relative">

<div className="md:w-[40%] bg-white p-8 md:p-10 border-b md:border-b-0 md:border-r border-neutral-200 flex flex-col relative z-10">
<div className="flex-1">
<div className="w-16 h-16 bg-neutral-100 rounded-full border border-neutral-200 flex items-center justify-center mb-6 overflow-hidden">
<iconify-icon className="text-3xl text-neutral-400" icon="solar:buildings-bold"></iconify-icon>
</div>
<h4 className="text-neutral-500 font-medium text-sm mb-2 font-geist">
              Homecoin Team
            </h4>
<h2 className="text-2xl font-bold text-neutral-900 mb-6 font-geist tracking-tight">
              Listing Consultation
            </h2>
<div className="flex items-center gap-3 text-neutral-600 mb-4 font-geist text-sm">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-medium">15 min</span>
</div>
<div className="flex items-start gap-3 text-neutral-600 mb-4 font-geist text-sm">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:videocamera-record-linear"></iconify-icon>
<span className="font-medium leading-relaxed">
                Web conferencing details provided upon confirmation.
              </span>
</div>
<p className="text-neutral-600 font-geist text-sm leading-relaxed mt-6">
              Book a quick call with our licensed experts. We'll walk you
              through the process, answer any questions, and ensure you're ready
              to list on the MLS.
            </p>
</div>
</div>

<div className="md:w-[60%] bg-white p-8 md:p-10 flex flex-col items-center justify-center relative z-10">
<div className="w-full max-w-[340px]">
<h3 className="text-lg font-bold text-neutral-900 mb-6 font-geist tracking-tight">
              Select a Date &amp; Time
            </h3>
<div className="flex items-center justify-between mb-6">
<span className="font-geist text-neutral-900 font-medium text-sm">
                October 2024
              </span>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors bg-blue-50/50">
<iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center mb-2">
<div className="text-[11px] font-medium text-neutral-500 font-geist uppercase">
                Sun
              </div>
<div className="text-[11px] font-medium text-neutral-500 font-geist uppercase">
                Mon
              </div>
<div className="text-[11px] font-medium text-neutral-500 font-geist uppercase">
                Tue
              </div>
<div className="text-[11px] font-medium text-neutral-500 font-geist uppercase">
                Wed
              </div>
<div className="text-[11px] font-medium text-neutral-500 font-geist uppercase">
                Thu
              </div>
<div className="text-[11px] font-medium text-neutral-500 font-geist uppercase">
                Fri
              </div>
<div className="text-[11px] font-medium text-neutral-500 font-geist uppercase">
                Sat
              </div>

<div className="text-sm text-neutral-300 font-geist py-2">1</div>
<div className="text-sm text-neutral-300 font-geist py-2">2</div>
<div className="text-sm text-neutral-300 font-geist py-2">3</div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                4
              </div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                5
              </div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                6
              </div>
<div className="text-sm text-neutral-300 font-geist py-2">7</div>
<div className="text-sm text-neutral-300 font-geist py-2">8</div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                9
              </div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                10
              </div>
<div className="text-sm text-white bg-blue-600 font-geist py-2 rounded-full cursor-pointer font-medium shadow-md shadow-blue-500/30">
                11
              </div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                12
              </div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                13
              </div>
<div className="text-sm text-neutral-300 font-geist py-2">14</div>

<div className="text-sm text-neutral-300 font-geist py-2">15</div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                16
              </div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                17
              </div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                18
              </div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                19
              </div>
<div className="text-sm text-neutral-900 font-geist py-2 hover:bg-blue-50 rounded-full cursor-pointer font-medium transition-colors">
                20
              </div>
<div className="text-sm text-neutral-300 font-geist py-2">21</div>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
<div className="text-[13px] font-geist text-neutral-600 flex items-center gap-2">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:global-linear"></iconify-icon>
                Pacific Time - US &amp; Canada
              </div>
<div className="flex items-center gap-1 text-[13px] font-geist text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="max-w-7xl sm:px-6 mt-10 mr-auto mb-12 ml-auto pr-4 pl-4">
<div className="relative overflow-hidden bg-black/80 border border-white/10 rounded-[40px] p-8 sm:p-12">
<div className="grid lg:grid-cols-4 gap-10">

<div className="space-y-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-white w-8 h-8 text-2xl" icon="solar:home-smile-linear"></iconify-icon>
<span className="font-geist font-medium text-lg tracking-tight ml-1">
                Homecoin
              </span>
</div>
<p className="text-xs leading-relaxed text-neutral-400 font-geist">
              Real estate services are overpriced. Technology should fix that.
            </p>
</div>

<div>
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">
              Company
            </h4>
<ul className="mt-3 space-y-2">
<li>
<a className="text-sm text-neutral-400 hover:text-white font-geist transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white font-geist transition-colors" href="#">
                  Reviews
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">
              Services
            </h4>
<ul className="mt-3 space-y-2">
<li>
<a className="text-sm text-neutral-400 hover:text-white font-geist transition-colors" href="#">
                  Flat Fee MLS
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white font-geist transition-colors" href="#">
                  Agent Support
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs tracking-wider text-neutral-300 uppercase font-geist">
              Contact
            </h4>
<ul className="mt-3 space-y-2">
<li className="text-sm text-neutral-400 font-geist">
                info@homecoin.com
              </li>
<li className="text-sm text-neutral-400 font-geist">
                1-760-440-8880
              </li>
</ul>
</div>
</div>

<div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
<nav className="flex flex-wrap gap-4 text-[11px] text-neutral-500 font-geist">
<a className="hover:text-neutral-300" href="#">Privacy Policy</a>
<a className="hover:text-neutral-300" href="#">Terms of Use</a>
<a className="hover:text-neutral-300" href="#">Accessibility</a>
</nav>
<div className="text-[11px] text-neutral-600 font-geist">
            © 2025 Homecoin, Inc. CA DRE 01523040.
          </div>
</div>
</div>
</footer>

    </>
  );
}
