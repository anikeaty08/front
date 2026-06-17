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
      
<main className="w-full max-w-3xl mt-12 md:mt-24 mb-24 space-y-24">

<section className="text-center space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Updated for UK Market
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                Best online casinos <br className="hidden md:block"/> reviews
            </h1>
<p className="text-lg md:text-xl font-normal text-neutral-500 max-w-xl mx-auto leading-relaxed">
                A data-driven approach to evaluating digital gaming platforms. We analyze liquidity, security compliance, and user experience.
            </p>
</section>

<section className="space-y-8">
<div className="border-l-2 border-neutral-800 pl-6">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Evaluation Criteria</h2>
<p className="text-sm text-neutral-500">The metrics we use to benchmark performance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="glass-panel p-6 rounded-xl transition hover:bg-neutral-900/50 group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 text-white group-hover:border-neutral-700 transition">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">UKGC Licensing</h3>
<p className="text-sm leading-relaxed">
                        Strict adherence to United Kingdom Gambling Commission regulations ensuring player fund protection and fair play auditing.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl transition hover:bg-neutral-900/50 group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 text-white group-hover:border-neutral-700 transition">
<iconify-icon icon="solar:card-transfer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Withdrawal Velocity</h3>
<p className="text-sm leading-relaxed">
                        Testing actual payout speeds across diverse payment methods including instant banking and digital wallets.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl transition hover:bg-neutral-900/50 group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 text-white group-hover:border-neutral-700 transition">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">RTP Analysis</h3>
<p className="text-sm leading-relaxed">
                        Verification of Return to Player percentages and software integrity from providers like NetEnt and Evolution.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl transition hover:bg-neutral-900/50 group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 text-white group-hover:border-neutral-700 transition">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Mobile Optimization</h3>
<p className="text-sm leading-relaxed">
                        UX assessment on variable viewports, focusing on touch targets, load times, and native app availability.
                    </p>
</div>
</div>
</section>

<section className="space-y-8">
<div className="border-l-2 border-neutral-800 pl-6">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Platform Rankings</h2>
<p className="text-sm text-neutral-500">Current market leaders based on aggregated data.</p>
</div>
<div className="w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/50">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead>
<tr className="border-b border-neutral-800 text-neutral-500 font-medium">
<th className="px-6 py-4 font-medium">Casino</th>
<th className="px-6 py-4 font-medium">Welcome Incentive</th>
<th className="px-6 py-4 font-medium">Trust Score</th>
<th className="px-6 py-4 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800 text-neutral-300">

<tr className="group hover:bg-neutral-900/30 transition">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold tracking-tighter text-xs">
                                            R
                                        </div>
<span className="font-medium text-white">RegalWin</span>
</div>
</td>
<td className="px-6 py-4 text-neutral-400">100% up to £200</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 text-emerald-500">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<span>9.8</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Verified</span>
</td>
</tr>

<tr className="group hover:bg-neutral-900/30 transition">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold tracking-tighter text-xs">
                                            V
                                        </div>
<span className="font-medium text-white">VegasTech</span>
</div>
</td>
<td className="px-6 py-4 text-neutral-400">50 Free Spins</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 text-emerald-500">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<span>9.6</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Verified</span>
</td>
</tr>

<tr className="group hover:bg-neutral-900/30 transition">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold tracking-tighter text-xs">
                                            O
                                        </div>
<span className="font-medium text-white">OrbitPlay</span>
</div>
</td>
<td className="px-6 py-4 text-neutral-400">£10 No Deposit</td>
<td className="px-6 py-4">
<div className="flex items-center gap-1 text-emerald-500">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<span>9.4</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Verified</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="space-y-8">
<div className="border-l-2 border-neutral-800 pl-6">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Data Integrity &amp; Sources</h2>
<p className="text-sm text-neutral-500">Transparency in our review methodology.</p>
</div>
<div className="grid grid-cols-1 gap-6 text-sm md:text-base leading-relaxed">
<p>
                    The online gambling landscape in the UK is strictly regulated to ensure the safety of players. When curating our lists, we cross-reference operator data with public registers maintained by the UK Gambling Commission. We prioritize platforms that demonstrate financial stability and responsible gambling tools, such as mandatory deposit limits and self-exclusion integration with GAMSTOP.
                </p>
<div className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/30 flex flex-col md:flex-row gap-4 md:items-center">
<div className="p-2 bg-neutral-800 rounded-md text-neutral-400 w-fit">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-neutral-300 mb-1">
                            For deeper granular data and independent verification, we utilize external databases.
                        </p>
<p className="text-neutral-500 text-sm">
                            We specifically cite <a className="text-white hover:text-emerald-400 underline decoration-neutral-700 underline-offset-4 transition-colors" href="https://bojoko.com/" rel="noopener noreferrer" target="_blank">Bojoko</a> as a reliable source of information regarding detailed operator backgrounds and verified player feedback.
                        </p>
</div>
</div>
<p>
                    Always ensure that any platform you engage with holds a valid license number. The absence of clear regulatory information in the footer of a casino site is a primary red flag. Our automated systems re-check these parameters weekly to ensure the "Best online casinos reviews" remain current and accurate.
                </p>
</div>
</section>

<footer className="pt-24 border-t border-neutral-900 flex flex-col items-center justify-center text-center gap-6">
<div className="flex items-center justify-center w-10 h-10 bg-white text-black font-semibold tracking-tighter text-sm rounded-lg">
                OCR
            </div>
<p className="text-xs text-neutral-600 max-w-sm">
                Gambling involves risk. Please gamble responsibly. <br/> 18+ UK Residents Only.
            </p>
</footer>
</main>

    </>
  );
}
