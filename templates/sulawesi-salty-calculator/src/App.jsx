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



    const volumeInput = document.getElementById('tank-volume');
    const doseInput = document.getElementById('dose');
    const gramsTotal = document.getElementById('grams-total');
    const recalcBtn = document.getElementById('recalc');
    const shell = document.getElementById('app-shell');

    function recalc(animate = true) {
      const vol = parseFloat(volumeInput.value) || 0;
      const dose = parseFloat(doseInput.value) || 0;
      const grams = vol * dose;
      const previous = parseFloat(gramsTotal.textContent) || 0;
      gramsTotal.textContent = grams.toFixed(1);

      if (animate && previous !== grams) {
        gramsTotal.classList.remove('scale-110');
        gramsTotal.classList.add('transition-transform', 'duration-200', 'scale-110');
        setTimeout(() => {
          gramsTotal.classList.remove('scale-110');
        }, 180);
      }
    }

    recalc(false);

    recalcBtn.addEventListener('click', (e) => {
      e.preventDefault();
      recalc(true);
    });
    volumeInput.addEventListener('input', () => recalc(false));
    doseInput.addEventListener('input', () => recalc(false));

    window.addEventListener('load', () => {
      requestAnimationFrame(() => {
        shell.classList.remove('translate-y-4', 'opacity-0');
        shell.classList.add('translate-y-0', 'opacity-100');
      });
    });
  
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
      
<div className="w-full max-w-4xl mx-auto">

<div className="relative bg-slate-950/80 border border-slate-800/80 rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden transform transition-all duration-700 ease-out translate-y-4 opacity-0 will-change-transform will-change-opacity" id="app-shell">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-32 -right-16 h-64 w-64 bg-sky-500/30 blur-3xl opacity-60"></div>
<div className="absolute -bottom-40 -left-24 h-72 w-72 bg-emerald-500/25 blur-3xl opacity-60"></div>
</div>

<div className="relative flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-800/70">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 shadow-[0_0_0_4px_rgba(248,113,113,0.15)]"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 shadow-[0_0_0_4px_rgba(251,191,36,0.15)]"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_0_4px_rgba(52,211,153,0.18)]"></span>
</div>
<div className="ml-3">
<span className="text-[11px] font-medium tracking-[0.18em] text-slate-300 uppercase block">SLS</span>
<span className="text-[11px] text-slate-500">Sulawesi Tank Assistant</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="hidden sm:inline">RO/DI • Remineralize • Measure</span>
<span className="i-lucide-droplets h-4 w-4 text-sky-400 animate-[pulse_2.2s_ease-in-out_infinite]"></span>
</div>
</div>

<div className="relative grid md:grid-cols-5 gap-0">

<div className="md:col-span-3 px-5 sm:px-7 py-6 space-y-6">
<div className="space-y-1.5">
<h1 className="text-2xl sm:text-[26px] tracking-tight font-semibold text-slate-50 flex items-center gap-2">
<span className="i-lucide-flask-conical h-6 w-6 text-sky-400/90 drop-shadow-[0_0_10px_rgba(56,189,248,0.65)]"></span>
<span className="bg-gradient-to-r from-slate-50 via-sky-100 to-emerald-100 bg-clip-text text-transparent">Sulawesi Shrimp Mineral Salt Calculator</span>
</h1>
<p className="text-sm text-slate-400 max-w-xl">
              Use RO/DI water and a dedicated shrimp mineral salt. Adjust dose based on your product and target TDS/GH, then confirm with a TDS meter and liquid test kit.
            </p>
</div>

<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="px-2.5 py-1 rounded-full border border-slate-700/80 text-slate-300 bg-slate-900/60 shadow-sm shadow-slate-900/80">
              Target TDS: 160–190
            </span>
<span className="px-2.5 py-1 rounded-full border border-slate-700/80 text-slate-300 bg-slate-900/60 shadow-sm shadow-slate-900/80">
              GH: 4–6
            </span>
<span className="px-2.5 py-1 rounded-full border border-slate-600/80 text-sky-200/90 bg-gradient-to-r from-sky-950/70 via-slate-950 to-emerald-950/60 shadow-[0_0_18px_rgba(56,189,248,0.35)]">
              No marine/“aquarium” salt
            </span>
</div>

<form className="space-y-4">

<div className="grid sm:grid-cols-3 gap-3">
<div className="sm:col-span-2">
<label className="flex items-center justify-between mb-1.5 text-xs font-medium text-slate-300">
<span>Tank volume</span>
<span className="text-[11px] text-slate-500">Use actual water volume</span>
</label>
<div className="relative group">
<div className="absolute -inset-px rounded-xl bg-gradient-to-r from-sky-500/0 via-sky-500/0 to-emerald-500/0 group-focus-within:from-sky-500/40 group-focus-within:via-sky-500/20 group-focus-within:to-emerald-500/40 opacity-0 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none"></div>
<input className="relative w-full rounded-xl border border-slate-700/80 bg-slate-900/70 text-sm text-slate-50 px-3.5 py-2.5 focus:outline-none focus:ring-0 focus:border-sky-400/90 placeholder:text-slate-500 transition-all duration-200" id="tank-volume" inputmode="decimal" placeholder="e.g. 20" step="0.1" type="number" value="20"/>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-slate-400 gap-1">
<span className="hidden sm:inline">liters</span>
<span className="i-lucide-beaker h-4 w-4"></span>
</div>
</div>
</div>
<div>
<label className="block mb-1.5 text-xs font-medium text-slate-300">Unit</label>
<button className="relative overflow-hidden w-full inline-flex items-center justify-between gap-2 text-xs px-3 py-2.5 rounded-xl border border-slate-700/80 bg-slate-900/70 text-slate-100 hover:border-sky-500/80 hover:bg-slate-900/90 focus:outline-none focus:ring-0 transition-all duration-200 group" type="button">
<span className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
<span className="relative flex items-center gap-1.5">
<span className="i-lucide-ruler h-3.5 w-3.5 text-slate-400"></span>
<span>Liters (L)</span>
</span>
<span className="relative i-lucide-chevron-down h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-hover:translate-y-0.5"></span>
</button>
<p className="mt-1 text-[11px] text-slate-500">If you think in gallons, 20 L ≈ 5.3 gal.</p>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-3">
<div className="sm:col-span-2">
<label className="flex items-center justify-between mb-1.5 text-xs font-medium text-slate-300">
<span>Dose of mineral salt</span>
<button className="inline-flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 focus:outline-none transition-colors duration-150" type="button">
<span className="i-lucide-info h-3.5 w-3.5"></span>
<span>Based on your product</span>
</button>
</label>
<div className="relative group">
<div className="absolute -inset-px rounded-xl bg-gradient-to-r from-sky-500/0 via-sky-500/0 to-emerald-500/0 group-focus-within:from-sky-500/40 group-focus-within:via-sky-500/20 group-focus-within:to-emerald-500/40 opacity-0 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none"></div>
<input className="relative w-full rounded-xl border border-slate-700/80 bg-slate-900/70 text-sm text-slate-50 px-3.5 py-2.5 focus:outline-none focus:ring-0 focus:border-sky-400/90 placeholder:text-slate-500 transition-all duration-200" id="dose" inputmode="decimal" step="0.1" type="number" value="0.25"/>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-slate-400">
                    g per liter
                  </div>
</div>
<p className="mt-1 text-[11px] text-slate-500">
                  Example: If label says 5 g for 20 L, that’s 0.25 g/L. Start low, test, and adjust.
                </p>
</div>

<div>
<label className="block mb-1.5 text-xs font-medium text-slate-300">TDS target</label>
<div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2.5 text-xs text-slate-100 flex flex-col gap-1">
<div className="absolute inset-px rounded-[9px] bg-gradient-to-br from-sky-500/15 via-slate-900/40 to-emerald-500/10 opacity-80 pointer-events-none"></div>
<div className="relative flex items-center justify-between">
<span className="text-slate-300">Range</span>
<span className="font-medium text-sky-200">160–190 ppm</span>
</div>
<div className="relative flex items-center justify-between">
<span className="text-slate-300">GH</span>
<span className="font-medium text-emerald-200">4–6 dGH</span>
</div>
<div className="relative mt-1 flex items-center gap-1 text-[11px] text-slate-300/90">
<span className="i-lucide-waveform h-3.5 w-3.5 text-sky-300"></span>
<span>Always confirm with a TDS meter.</span>
</div>
</div>
</div>
</div>

<div className="mt-3 rounded-2xl border border-sky-500/40 bg-sky-950/40/80 px-4 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-sky-500/15 via-slate-900/40 to-emerald-500/15 opacity-80 pointer-events-none"></div>
<div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-400/30 blur-2xl opacity-60"></div>
<div className="relative flex items-start gap-3">
<div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-sky-300/70 bg-slate-950/80 shadow-[0_0_18px_rgba(56,189,248,0.6)] animate-[pulse_2.3s_ease-in-out_infinite]">
<span className="i-lucide-scale h-4 w-4 text-sky-100"></span>
</div>
<div>
<p className="text-[13px] text-sky-100/95">Estimated mineral salt for this mix</p>
<p className="text-lg font-semibold tracking-tight text-sky-50 mt-0.5 flex items-baseline gap-1">
<span className="tabular-nums" id="grams-total">5.0</span>
<span className="text-sm text-sky-100/80">g</span>
</p>
<p className="text-[11px] text-slate-100/80 mt-0.5">
                    Add in stages, stir until dissolved, then measure TDS and GH. Fine-tune for your exact water.
                  </p>
</div>
</div>
<div className="relative flex flex-col gap-2 min-w-[140px]">
<button className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-sky-400/80 bg-gradient-to-r from-sky-500/90 to-emerald-400/90 text-xs font-medium px-3 py-2 shadow-[0_20px_45px_rgba(56,189,248,0.55)] hover:shadow-[0_18px_40px_rgba(52,211,153,0.5)] hover:from-sky-400/90 hover:to-emerald-300/95 hover:-translate-y-[1px] active:translate-y-[0.5px] transition-all duration-200" id="recalc" type="button">
<span className="i-lucide-calculator h-3.5 w-3.5"></span>
<span>Recalculate</span>
</button>
<button className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-600/90 bg-slate-950/90 text-[11px] text-slate-100 px-3 py-2 hover:border-slate-300 hover:bg-slate-900/90 hover:-translate-y-[1px] active:translate-y-[0.5px] transition-all duration-200" type="button">
<span className="i-lucide-clipboard-copy h-3.5 w-3.5"></span>
<span>Save this mix</span>
</button>
</div>
</div>
</form>
</div>

<div className="md:col-span-2 border-t md:border-t-0 md:border-l border-slate-800/70 bg-slate-950/80 px-5 sm:px-6 md:px-6 py-6 space-y-5 relative">

<div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 group">
<img alt="Aquarium aquascape" className="w-full h-40 object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.05]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-3.5 flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-100 tracking-tight">Sulawesi setup notes</p>
<p className="text-[11px] text-slate-300/90">Stable, clean water beats chasing “perfect” numbers.</p>
</div>
<div className="flex flex-col items-end gap-1 text-[10px] text-slate-300">
<div className="flex items-center gap-1">
<span className="i-lucide-thermometer h-3.5 w-3.5 text-amber-300"></span>
<span>28–30°C</span>
</div>
<div className="flex items-center gap-1">
<span className="i-lucide-droplet h-3.5 w-3.5 text-sky-300"></span>
<span>pH 7.8–8.2</span>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<h2 className="text-sm font-semibold tracking-tight text-slate-100 flex items-center gap-2">
<span className="i-lucide-list-checks h-4 w-4 text-sky-300"></span>
<span>Safe mixing steps</span>
</h2>
<ol className="space-y-2 text-[13px] text-slate-300">
<li className="flex gap-2 group">
<span className="mt-0.5 h-4 w-4 rounded-full border border-slate-600 text-[10px] flex items-center justify-center text-slate-400 group-hover:border-sky-400 group-hover:text-sky-200 transition-colors duration-150">1</span>
<span>Use <span className="font-medium text-slate-100">RO/DI water</span> only. Do not mix directly in the display tank with animals inside.</span>
</li>
<li className="flex gap-2 group">
<span className="mt-0.5 h-4 w-4 rounded-full border border-slate-600 text-[10px] flex items-center justify-center text-slate-400 group-hover:border-sky-400 group-hover:text-sky-200 transition-colors duration-150">2</span>
<span>Dissolve <span className="font-medium text-slate-100">shrimp-specific mineral salt</span> (GH+ or Sulawesi formula). Avoid generic aquarium salt or marine salt.</span>
</li>
<li className="flex gap-2 group">
<span className="mt-0.5 h-4 w-4 rounded-full border border-slate-600 text-[10px] flex items-center justify-center text-slate-400 group-hover:border-sky-400 group-hover:text-sky-200 transition-colors duration-150">3</span>
<span>Measure <span className="font-medium text-sky-200">TDS and GH</span>. Adjust by adding tiny amounts (0.1–0.2 g at a time) until you reach your target.</span>
</li>
<li className="flex gap-2 group">
<span className="mt-0.5 h-4 w-4 rounded-full border border-slate-600 text-[10px] flex items-center justify-center text-slate-400 group-hover:border-sky-400 group-hover:text-sky-200 transition-colors duration-150">4</span>
<span>Match temperature and slowly drip the prepared water into the shrimp tank to avoid sudden parameter swings.</span>
</li>
</ol>
</div>

<div className="relative rounded-2xl border border-rose-500/60 bg-rose-950/40 px-3.5 py-3.5 overflow-hidden">
<div className="absolute -top-10 -right-6 h-20 w-20 rounded-full bg-rose-500/25 blur-2xl opacity-80"></div>
<div className="relative flex items-start gap-2.5">
<span className="i-lucide-triangle-alert h-4 w-4 text-rose-200 mt-0.5 animate-[pulse_3s_ease-in-out_infinite]"></span>
<div>
<p className="text-[13px] font-medium text-rose-100 tracking-tight mb-1">Common mistakes</p>
<ul className="text-[11px] text-rose-50/90 space-y-1.5">
<li>Using table salt, marine salt mix, or “aquarium salt” instead of a remineralizing shrimp salt.</li>
<li>Raising TDS or GH too quickly. Shrimp are very sensitive to sudden changes.</li>
<li>Topping off evaporation with salty water. Only add pure RO/DI for top offs; use mineral salt only for new water changes.</li>
</ul>
</div>
</div>
</div>

<div className="text-[12px] text-slate-400 border-t border-slate-800/80 pt-3">
            For a typical 20 L Sulawesi tank using a product that recommends 5 g / 20 L, you’d start with about
            <span className="font-medium text-sky-200">5 g of mineral salt</span>, test, then adjust future mixes based on your measured TDS and GH.
          </div>
</div>
</div>
</div>
</div>



    </>
  );
}
