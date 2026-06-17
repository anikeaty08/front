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
      

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-10 h-10">
<div className="absolute inset-0 bg-slate-900 rotate-45 rounded-lg shadow-sm"></div>
<i className="relative z-10 text-orange-500 -mt-1 ml-0.5" data-lucide="flame" height="22" strokeWidth="1.5" width="22"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Bitasha</span>
</div>
<div>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pre-order">Pre-order</a>
</div>
</nav>
<main className="flex-grow">

<section className="max-w-4xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40 text-center relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/20 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-8 leading-tight">
                Bitcoin hardware.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Built in India.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
                No imports. No customs. No waiting.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full text-lg font-medium hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all gap-2" href="#pre-order">
                    Pre-order BitAxe
                    <i data-lucide="arrow-right" height="20" strokeWidth="1.5" width="20"></i>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100">
<div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="order-2 md:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
<i data-lucide="cpu" height="16" strokeWidth="1.5" width="16"></i>
                        BitAxe
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Mine from your desk
                    </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        BitAxe is the most accessible open-source Bitcoin ASIC miner. Simply plug it into the wall, connect to your local WiFi, and start participating in the global mining network directly from your desk.
                    </p>
<div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8">
<div className="text-sm font-medium text-slate-500 mb-1">Pre-order Price</div>
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">₹18,000</div>
<p className="text-base text-slate-500">
<strong>Note on Solo Mining:</strong> Solo mining is a lottery. While the odds of finding a block are statistically low, you are actively securing the Bitcoin network and earning a chance at a full block reward.
                        </p>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-slate-900 rounded-full text-lg font-medium hover:bg-slate-50 transition-colors gap-2" href="#pre-order">
                        Reserve yours
                    </a>
</div>
<div className="order-1 md:order-2 relative aspect-square md:aspect-auto md:h-[600px] bg-slate-50 rounded-3xl border border-slate-200/60 overflow-hidden flex items-center justify-center group shadow-sm">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
<div className="relative w-48 h-48 bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500">
<div className="absolute inset-2 border border-slate-100 rounded-xl flex items-center justify-center bg-slate-50/50">
<i className="text-slate-400" data-lucide="microchip" height="64" strokeWidth="1.5" width="64"></i>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 lg:p-24 text-white overflow-hidden relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
<div className="relative aspect-video md:aspect-square bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl">
<div className="w-2/3 h-1/2 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg shadow-inner flex flex-col items-center justify-center p-6 border-t border-slate-500">
<div className="flex gap-4 mb-4 opacity-50">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
</div>
<span className="text-2xl font-semibold tracking-widest text-slate-300">KOSH</span>
</div>
</div>
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium mb-6">
<i data-lucide="shield-check" height="16" strokeWidth="1.5" width="16"></i>
                            Kosh
                        </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                            Protect your seed in steel
                        </h2>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Paper backups burn, fade, and tear. Your seed phrase is the master key to your wealth and deserves true permanence. Store your Bitcoin securely with medical-grade stainless steel.
                        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-lg text-slate-300">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<i className="text-orange-400" data-lucide="flame" height="16" strokeWidth="1.5" width="16"></i>
</div>
                                Fireproof up to 1400°C
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-300">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<i className="text-slate-400" data-lucide="hammer" height="16" strokeWidth="1.5" width="16"></i>
</div>
                                Crushproof construction
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-300">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<i className="text-blue-400" data-lucide="droplets" height="16" strokeWidth="1.5" width="16"></i>
</div>
                                100% Waterproof
                            </li>
</ul>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 rounded-full text-lg font-medium hover:bg-slate-100 transition-colors" href="#waitlist">
                            Join waitlist
                        </a>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-32 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 mb-8">
<i className="text-orange-500" data-lucide="compass" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-10">
                Why Bitasha exists
            </h2>
<div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left md:text-center">
<p>
                    It started with a simple realization: Indian Bitcoiners shouldn't have to jump through hoops to self-custody or mine. Endless customs delays, exorbitant import duties, and missing packages made acquiring basic hardware a frustrating nightmare.
                </p>
<p>
                    We decided to fix this. Our first milestone was crafting a pristine seed plate locally—proving that high-quality Bitcoin tools could be manufactured without relying on imports.
                </p>
<p>
                    Now, we are building a full suite of Bitcoin hardware right here in India. Built to global standards, assembled at home.
                </p>
</div>
<div className="mt-12 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-center gap-6">
<div className="flex items-center gap-2 text-base font-medium text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
<i className="text-green-500" data-lucide="check-circle-2" height="18" strokeWidth="1.5" width="18"></i>
                    No more customs
                </div>
<div className="flex items-center gap-2 text-base font-medium text-slate-900 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
<i className="text-orange-500" data-lucide="key" height="18" strokeWidth="1.5" width="18"></i>
                    True sovereignty
                </div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="flex items-center gap-2 mb-2">
<div className="relative flex items-center justify-center w-6 h-6">
<div className="absolute inset-0 bg-slate-900 rotate-45 rounded-md shadow-sm"></div>
<i className="relative z-10 text-orange-500" data-lucide="flame" height="14" strokeWidth="1.5" width="14"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Bitasha</span>
</div>
<p className="text-base text-slate-500 flex items-center gap-1">
                    Made with <i className="text-slate-400 mx-0.5" data-lucide="heart" height="14" strokeWidth="1.5" width="14"></i> in India.
                </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
<div className="flex items-center gap-2 text-base text-slate-600">
<div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
<i className="text-yellow-600" data-lucide="zap" height="16" strokeWidth="1.5" width="16"></i>
</div>
                    Lightning payments accepted
                </div>
<a className="flex items-center gap-2 text-base text-slate-600 hover:text-slate-900 transition-colors" href="#">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
<i className="text-green-600" data-lucide="message-circle" height="16" strokeWidth="1.5" width="16"></i>
</div>
                    WhatsApp community
                </a>
</div>
</div>
</footer>


    </>
  );
}
