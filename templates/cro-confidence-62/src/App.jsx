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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
surface: '#0A0A0A',
card: '#121212',
border: '#222222',
accent: '#EAEAEA',
subtle: '#888888'
}
}
}
}



        // DOM Elements
        const inputs = ['visitors_a', 'conversions_a', 'visitors_b', 'conversions_b', 'duration'];
        const elements = {};
        inputs.forEach(id => elements[id] = document.getElementById(id));
        
        const displays = {
            cr_a: document.getElementById('cr_a_display'),
            cr_b: document.getElementById('cr_b_display'),
            uplift_mini: document.getElementById('uplift_mini'),
            confidence: document.getElementById('confidence_display'),
            improvement: document.getElementById('improvement_display'),
            sig_text: document.getElementById('significance_text'),
            verdict: document.getElementById('verdict_badge'),
            card: document.getElementById('result_card'),
            glow: document.getElementById('result_glow'),
            icon: document.getElementById('status_icon')
        };

        // Normal Distribution CDF
        function getCDF(z) {
            if (z < -6.5) return 0.0;
            if (z > 6.5) return 1.0;
            let factK = 1;
            let sum = 0;
            let term = 1;
            let k = 0;
            let loopStop = Math.exp(-23);
            while(Math.abs(term) > loopStop) {
                term = .3989422804 * Math.pow(-1,k) * Math.pow(z, 2*k+1) / (2*k+1) / Math.pow(2,k) / factK;
                sum += term;
                k++;
                factK *= k;
            }
            sum += 0.5;
            return sum;
        }

        function calculate() {
            const vA = parseFloat(elements.visitors_a.value) || 0;
            const cA = parseFloat(elements.conversions_a.value) || 0;
            const vB = parseFloat(elements.visitors_b.value) || 0;
            const cB = parseFloat(elements.conversions_b.value) || 0;

            if (vA === 0 || vB === 0) return;

            // Conversion Rates
            const crA = cA / vA;
            const crB = cB / vB;

            // Update CR Displays
            displays.cr_a.innerText = (crA * 100).toFixed(2) + '%';
            displays.cr_b.innerText = (crB * 100).toFixed(2) + '%';

            // Uplift
            const uplift = crA === 0 ? 0 : ((crB - crA) / crA);
            const upliftPct = (uplift * 100).toFixed(2);
            
            // Uplift Styling
            displays.improvement.innerText = (uplift > 0 ? '+' : '') + upliftPct + '%';
            displays.uplift_mini.innerText = (uplift > 0 ? '+' : '') + upliftPct + '%';
            
            if (uplift > 0) {
                displays.improvement.className = "text-2xl font-light tracking-tight text-emerald-400 tabular-nums";
                displays.uplift_mini.className = "text-xs font-medium text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded tabular-nums";
            } else if (uplift < 0) {
                displays.improvement.className = "text-2xl font-light tracking-tight text-rose-400 tabular-nums";
                displays.uplift_mini.className = "text-xs font-medium text-rose-400 bg-rose-400/10 px-1.5 py-0.5 rounded tabular-nums";
            } else {
                displays.improvement.className = "text-2xl font-light tracking-tight text-subtle tabular-nums";
                displays.uplift_mini.className = "text-xs font-medium text-subtle bg-white/5 px-1.5 py-0.5 rounded tabular-nums";
            }

            // Statistical Significance (Z-Score)
            // SE = sqrt( pA(1-pA)/nA + pB(1-pB)/nB )
            const se = Math.sqrt( (crA * (1 - crA) / vA) + (crB * (1 - crB) / vB) );
            
            let confidence = 0;
            if (se > 0) {
                const zScore = (crB - crA) / se;
                const pValue = getCDF(zScore); // One-tailed for direction, mapped to confidence
                
                // For a two-tailed confidence visualization simply map CDF to standard percentage
                // Standard confidence often represented as: if Z > 0, CDF(z). If Z < 0, 1 - CDF(z) is the 'chance B is lower'
                // Usually for tools: Chance B > A.
                confidence = getCDF(zScore) * 100;
            }

            const confidenceValue = confidence.toFixed(2);
            displays.confidence.innerText = confidenceValue + '%';

            // Visual States based on Confidence
            // Thresholds: >95% Significant Winner, <5% Significant Loser, else Inconclusive
            
            displays.card.className = "relative overflow-hidden rounded-xl border p-6 transition-all duration-500 group border-border bg-card";
            displays.glow.className = "absolute inset-0 opacity-0 transition-opacity duration-700";

            if (confidence >= 95) {
                // Winner
                displays.verdict.innerText = "Significant Winner";
                displays.verdict.className = "px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-medium text-emerald-400";
                displays.confidence.className = "text-4xl font-light tracking-tight text-emerald-400 tabular-nums";
                displays.sig_text.innerText = "High certainty";
                displays.sig_text.className = "text-sm text-emerald-400/60 font-light";
                displays.card.classList.add("border-emerald-500/20");
                displays.glow.classList.remove("opacity-0");
                displays.glow.classList.add("opacity-100");
                displays.glow.className = "absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-100 transition-opacity duration-700";
                displays.icon.icon = "solar:cup-star-linear";
                displays.icon.className = "text-emerald-400";
            } else if (confidence <= 5) {
                // Loser (Significant negative)
                displays.verdict.innerText = "Significant Drop";
                displays.verdict.className = "px-3 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 text-xs font-medium text-rose-400";
                displays.confidence.className = "text-4xl font-light tracking-tight text-rose-400 tabular-nums";
                displays.sig_text.innerText = "Negative impact";
                displays.sig_text.className = "text-sm text-rose-400/60 font-light";
                displays.card.classList.add("border-rose-500/20");
                displays.glow.classList.remove("opacity-0");
                displays.glow.classList.add("opacity-100");
                displays.glow.className = "absolute inset-0 bg-gradient-to-r from-rose-500/10 to-transparent opacity-100 transition-opacity duration-700";
                displays.icon.icon = "solar:danger-triangle-linear";
                displays.icon.className = "text-rose-400";
            } else {
                // Inconclusive
                displays.verdict.innerText = "More Data Needed";
                displays.verdict.className = "px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-subtle";
                displays.confidence.className = "text-4xl font-light tracking-tight text-white tabular-nums";
                displays.sig_text.innerText = "Not significant yet";
                displays.sig_text.className = "text-sm text-subtle font-light";
                displays.glow.classList.add("opacity-0");
                displays.icon.icon = "solar:shield-check-linear";
                displays.icon.className = "text-subtle";
            }
        }

        function resetData() {
            elements.visitors_a.value = 5000;
            elements.conversions_a.value = 150;
            elements.visitors_b.value = 5000;
            elements.conversions_b.value = 160;
            calculate();
        }

        // Event Listeners
        inputs.forEach(id => {
            elements[id].addEventListener('input', calculate);
        });

        // Initial Calculation
        calculate();

    
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
      

<header className="absolute top-8 left-0 w-full flex justify-center pointer-events-none">
<div className="flex items-center gap-2 pointer-events-auto cursor-default">
<div className="h-6 w-6 rounded bg-white/10 flex items-center justify-center border border-white/5 shadow-inner">
<span className="font-medium text-xs tracking-tighter text-white">S</span>
</div>
<span className="text-sm font-medium tracking-tight text-white/80">STATSIG</span>
</div>
</header>

<main className="w-full max-w-3xl animate-in fade-in zoom-in duration-700">
<div className="relative bg-card border border-border rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="p-8 md:p-10 space-y-8">

<div className="flex items-start justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-white mb-1">Confidence Calculator</h1>
<p className="text-sm text-subtle font-light">Evaluate the statistical significance of your A/B test results.</p>
</div>
<div className="p-2 rounded-lg bg-white/5 border border-white/5 text-subtle">
<iconify-icon icon="solar:calculator-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 gap-6 pb-6 border-b border-white/5">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-subtle uppercase tracking-wider ml-1">Test Duration (Days)</label>
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-subtle transition-colors group-focus-within:text-white" icon="solar:calendar-linear" width="18"></iconify-icon>
<input className="w-full bg-surface border border-border rounded-lg py-2.5 pl-10 pr-4 text-sm font-light text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all" id="duration" placeholder="e.g. 14" type="number" value="14"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-5">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-subtle/50"></div>
<h2 className="text-sm font-medium text-white/90">Control (A)</h2>
</div>
<div className="space-y-4">

<div className="space-y-1.5">
<label className="text-xs text-subtle ml-1">Total Visitors</label>
<div className="relative group">
<input className="w-full bg-surface border border-border rounded-lg py-2.5 px-3 text-sm font-light text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all text-right tabular-nums" id="visitors_a" type="number" value="5000"/>
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-subtle pointer-events-none group-focus-within:text-white/50 transition-colors">Users</span>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs text-subtle ml-1">Conversions</label>
<div className="relative group">
<input className="w-full bg-surface border border-border rounded-lg py-2.5 px-3 text-sm font-light text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all text-right tabular-nums" id="conversions_a" type="number" value="150"/>
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-subtle pointer-events-none group-focus-within:text-white/50 transition-colors">Actions</span>
</div>
</div>
</div>

<div className="flex justify-between items-center py-2 px-3 bg-white/5 rounded-md border border-white/5">
<span className="text-xs text-subtle">Conversion Rate</span>
<span className="text-sm font-medium text-white tabular-nums" id="cr_a_display">3.00%</span>
</div>
</div>

<div className="space-y-5">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
<h2 className="text-sm font-medium text-white/90">Variation (B)</h2>
</div>
<div className="space-y-4">

<div className="space-y-1.5">
<label className="text-xs text-subtle ml-1">Total Visitors</label>
<div className="relative group">
<input className="w-full bg-surface border border-border rounded-lg py-2.5 px-3 text-sm font-light text-white focus:outline-none focus:border-blue-500/30 focus:ring-1 focus:ring-blue-500/20 transition-all text-right tabular-nums" id="visitors_b" type="number" value="5000"/>
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-subtle pointer-events-none group-focus-within:text-white/50 transition-colors">Users</span>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs text-subtle ml-1">Conversions</label>
<div className="relative group">
<input className="w-full bg-surface border border-border rounded-lg py-2.5 px-3 text-sm font-light text-white focus:outline-none focus:border-blue-500/30 focus:ring-1 focus:ring-blue-500/20 transition-all text-right tabular-nums" id="conversions_b" type="number" value="185"/>
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-subtle pointer-events-none group-focus-within:text-white/50 transition-colors">Actions</span>
</div>
</div>
</div>

<div className="flex justify-between items-center py-2 px-3 bg-blue-500/5 rounded-md border border-blue-500/10">
<span className="text-xs text-blue-200/60">Conversion Rate</span>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded tabular-nums" id="uplift_mini">+0.0%</span>
<span className="text-sm font-medium text-white tabular-nums" id="cr_b_display">3.70%</span>
</div>
</div>
</div>
</div>

<div className="mt-8 pt-8 border-t border-dashed border-white/10">
<div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-surface to-surface border border-border p-6 transition-all duration-500 group" id="result_card">

<div className="absolute inset-0 opacity-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 transition-opacity duration-700" id="result_glow"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">

<div className="flex flex-col items-center md:items-start text-center md:text-left">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-subtle" icon="solar:shield-check-linear" id="status_icon" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest text-subtle">Confidence Level</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-4xl font-light tracking-tight text-white tabular-nums" id="confidence_display">--%</span>
<span className="text-sm text-subtle font-light" id="significance_text">Calculated</span>
</div>
</div>

<div className="hidden md:block w-px h-12 bg-white/5"></div>

<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="text-xs font-medium uppercase tracking-widest text-subtle mb-1">Relative Improvement</span>
<span className="text-2xl font-light tracking-tight text-white tabular-nums" id="improvement_display">--%</span>
</div>

<div className="flex flex-col items-end gap-2 w-full md:w-auto mt-2 md:mt-0">
<div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-subtle transition-colors duration-300" id="verdict_badge">
                                    Gathering Data
                                </div>
</div>
</div>
</div>
<div className="mt-4 flex justify-between items-center px-2">
<p className="text-xs text-subtle font-light">Based on two-tailed Z-test (95% significance threshold)</p>
<button className="text-xs text-subtle hover:text-white transition-colors flex items-center gap-1 group" onclick="resetData()">
<iconify-icon className="group-hover:-rotate-180 transition-transform duration-500" icon="solar:restart-linear"></iconify-icon>
                            Reset
                        </button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
