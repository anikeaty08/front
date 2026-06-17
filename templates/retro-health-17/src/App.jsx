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



        function updateVal(id, val) {
            const el = document.getElementById(id);
            if(el) el.innerText = val;
        }

        function calculateFate() {
            // Button feedback
            const btn = document.getElementById('analyze-btn');
            const btnText = document.getElementById('btn-text');
            const btnIcon = document.getElementById('btn-icon');
            
            // Loading state
            btnText.innerText = "PROCESSING...";
            btn.classList.add('opacity-80', 'cursor-wait');
            
            // Force a small delay to allow UI to update before calculation (simulates work)
            setTimeout(() => {
                try {
                    // Reset button
                    btnText.innerText = "RE-ANALYZE";
                    btn.classList.remove('opacity-80', 'cursor-wait');

                    // Get values
                    const cigs = parseInt(document.getElementById('cigs').value) || 0;
                    const drinks = parseInt(document.getElementById('drinks').value) || 0;
                    const sitting = parseInt(document.getElementById('sitting').value) || 0;
                    
                    // Radio buttons
                    const junkRadios = document.getElementsByName('junk');
                    let junk = 0;
                    for(let i = 0; i < junkRadios.length; i++) {
                        if(junkRadios[i].checked) junk = parseInt(junkRadios[i].value);
                    }

                    const sleepRadios = document.getElementsByName('sleep');
                    let sleep = 8;
                    for(let i = 0; i < sleepRadios.length; i++) {
                        if(sleepRadios[i].checked) sleep = parseInt(sleepRadios[i].value);
                    }

                    // Calculation Logic (Minutes Lost per day simulation)
                    let minsLost = 0;
                    minsLost += cigs * 11;
                    minsLost += drinks * 30;
                    if (sitting > 8) minsLost += (sitting - 8) * 22;
                    minsLost += junk * 35;
                    if (sleep < 6) minsLost += (6 - sleep) * 60;

                    const hoursLost = (minsLost / 60).toFixed(1);

                    // Death Year Calc
                    const currentYear = new Date().getFullYear();
                    let baseDeathYear = currentYear + 55; // Optimistic baseline
                    
                    // Simple scalar for dramatic effect
                    const totalYearsLost = (minsLost * 365 * 50) / (60 * 24 * 365);
                    const predictedDeath = Math.floor(baseDeathYear - totalYearsLost);

                    // Update UI
                    document.getElementById('time-lost-display').innerText = `-${hoursLost} HRS`;
                    document.getElementById('death-year-display').innerText = predictedDeath;

                    // Show result panel
                    const panel = document.getElementById('result-panel');
                    panel.classList.remove('hidden');
                    panel.classList.add('animate-result');
                    
                    // Scroll to result
                    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                } catch (e) {
                    console.error("Calculation error:", e);
                    alert("SYSTEM ERROR. CHECK CONSOLE.");
                }
            }, 500); // 500ms delay for effect
        }
    
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
      

<div className="scan-overlay"></div>

<main className="flex-grow flex flex-col max-w-2xl mx-auto w-full p-4 md:p-8 relative z-10">

<header className="mb-8 border-b-2 border-black pb-4 flex flex-col gap-2">
<div className="flex justify-between items-end">
<h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                    Am I Gonna<br/>Die?
                </h1>
<div className="text-right">
<div className="text-xs uppercase tracking-widest mb-1 flex items-center justify-end gap-1">
<span className="w-2 h-2 bg-black inline-block animate-pulse"></span> System Online
                    </div>
<div className="text-sm font-bold">VOL. 199X</div>
</div>
</div>
<div className="text-xs md:text-sm uppercase flex justify-between w-full mt-2">
<span>[ DAILY HABIT TRACKER ]</span>
<span>ID: #USER-001</span>
</div>
</header>

<div className="mb-6 text-sm md:text-base leading-relaxed uppercase border-l-2 border-black pl-4">
            Input daily consumption parameters. System will calculate life expectancy reduction based on actuarial data. Be honest.
        </div>

<form className="space-y-6" id="tracker-form" onsubmit="return false;">

<div className="group relative">
<label className="block text-sm font-bold uppercase mb-2 flex justify-between items-center">
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:cigarette" data-strokeWidth="1.5"></span>
                        Cigarettes
                    </span>
<span className="text-xs font-normal opacity-50">[ -11 MINS / UNIT ]</span>
</label>
<div className="flex items-center gap-4">
<input className="flex-grow" id="cigs" max="40" min="0" oninput="updateVal('cigs-val', this.value)" type="range" value="0"/>
<div className="w-16 h-10 psx-border flex items-center justify-center font-bold text-lg" id="cigs-val">0</div>
</div>
</div>

<div className="group relative">
<label className="block text-sm font-bold uppercase mb-2 flex justify-between items-center">
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:wine" data-strokeWidth="1.5"></span>
                        Alcohol Units
                    </span>
<span className="text-xs font-normal opacity-50">[ -30 MINS / UNIT ]</span>
</label>
<div className="flex items-center gap-4">
<input className="flex-grow" id="drinks" max="20" min="0" oninput="updateVal('drinks-val', this.value)" type="range" value="0"/>
<div className="w-16 h-10 psx-border flex items-center justify-center font-bold text-lg" id="drinks-val">0</div>
</div>
</div>

<div className="group relative">
<label className="block text-sm font-bold uppercase mb-2 flex justify-between items-center">
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:monitor" data-strokeWidth="1.5"></span>
                        Hours Sitting
                    </span>
<span className="text-xs font-normal opacity-50">[ -22 MINS / HOUR &gt; 8 ]</span>
</label>
<div className="flex items-center gap-4">
<input className="flex-grow" id="sitting" max="16" min="0" oninput="updateVal('sitting-val', this.value)" type="range" value="4"/>
<div className="w-16 h-10 psx-border flex items-center justify-center font-bold text-lg" id="sitting-val">4</div>
</div>
</div>

<div className="group relative">
<label className="block text-sm font-bold uppercase mb-2 flex justify-between items-center">
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:pizza" data-strokeWidth="1.5"></span>
                        Junk Meals
                    </span>
<span className="text-xs font-normal opacity-50">[ -35 MINS / MEAL ]</span>
</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="junk" onclick="document.getElementById('junk-display').innerText='NONE'" type="radio" value="0"/>
<div className="psx-border p-3 text-center uppercase text-sm hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white transition-colors">
                            None
                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="junk" onclick="document.getElementById('junk-display').innerText='1 MEAL'" type="radio" value="1"/>
<div className="psx-border p-3 text-center uppercase text-sm hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white transition-colors">
                            1 Meal
                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="junk" onclick="document.getElementById('junk-display').innerText='2 MEALS'" type="radio" value="2"/>
<div className="psx-border p-3 text-center uppercase text-sm hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white transition-colors">
                            2 Meals
                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="junk" onclick="document.getElementById('junk-display').innerText='BINGE'" type="radio" value="3"/>
<div className="psx-border p-3 text-center uppercase text-sm hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white transition-colors">
                            Binge
                        </div>
</label>
</div>
<div className="hidden" id="junk-display">NONE</div>
</div>

<div className="group relative border-t-2 border-black pt-6 border-dashed">
<label className="block text-sm font-bold uppercase mb-4 flex justify-between items-center">
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:moon" data-strokeWidth="1.5"></span>
                        Sleep (Hours)
                    </span>
</label>

<div className="flex justify-between gap-1 overflow-x-auto pb-2">
<label className="cursor-pointer flex-1 min-w-[30px]">
<input className="peer sr-only" name="sleep" type="radio" value="3"/>
<div className="w-full aspect-square psx-border flex items-center justify-center font-bold text-lg hover:bg-gray-200 peer-checked:bg-black peer-checked:text-white transition-colors">3</div>
</label>
<label className="cursor-pointer flex-1 min-w-[30px]">
<input className="peer sr-only" name="sleep" type="radio" value="4"/>
<div className="w-full aspect-square psx-border flex items-center justify-center font-bold text-lg hover:bg-gray-200 peer-checked:bg-black peer-checked:text-white transition-colors">4</div>
</label>
<label className="cursor-pointer flex-1 min-w-[30px]">
<input className="peer sr-only" name="sleep" type="radio" value="5"/>
<div className="w-full aspect-square psx-border flex items-center justify-center font-bold text-lg hover:bg-gray-200 peer-checked:bg-black peer-checked:text-white transition-colors">5</div>
</label>
<label className="cursor-pointer flex-1 min-w-[30px]">
<input className="peer sr-only" name="sleep" type="radio" value="6"/>
<div className="w-full aspect-square psx-border flex items-center justify-center font-bold text-lg hover:bg-gray-200 peer-checked:bg-black peer-checked:text-white transition-colors">6</div>
</label>
<label className="cursor-pointer flex-1 min-w-[30px]">
<input className="peer sr-only" name="sleep" type="radio" value="7"/>
<div className="w-full aspect-square psx-border flex items-center justify-center font-bold text-lg hover:bg-gray-200 peer-checked:bg-black peer-checked:text-white transition-colors">7</div>
</label>
<label className="cursor-pointer flex-1 min-w-[30px]">
<input checked="" className="peer sr-only" name="sleep" type="radio" value="8"/>
<div className="w-full aspect-square psx-border flex items-center justify-center font-bold text-lg hover:bg-gray-200 peer-checked:bg-black peer-checked:text-white transition-colors">8</div>
</label>
<label className="cursor-pointer flex-1 min-w-[30px]">
<input className="peer sr-only" name="sleep" type="radio" value="9"/>
<div className="w-full aspect-square psx-border flex items-center justify-center font-bold text-lg hover:bg-gray-200 peer-checked:bg-black peer-checked:text-white transition-colors">9</div>
</label>
<label className="cursor-pointer flex-1 min-w-[30px]">
<input className="peer sr-only" name="sleep" type="radio" value="10"/>
<div className="w-full aspect-square psx-border flex items-center justify-center font-bold text-lg hover:bg-gray-200 peer-checked:bg-black peer-checked:text-white transition-colors">10</div>
</label>
</div>
<p className="text-xs mt-2 opacity-60 uppercase text-right">Less than 6h = Danger</p>
</div>

<button className="w-full py-4 mt-8 psx-border bg-black text-white uppercase font-bold text-xl tracking-widest hover:bg-gray-900 transition-colors flex items-center justify-center gap-3" id="analyze-btn" onclick="calculateFate()" type="button">
<span className="iconify" data-icon="lucide:activity" data-strokeWidth="2" id="btn-icon"></span>
<span id="btn-text">Analyze Data</span>
</button>
</form>

<div className="mt-8 mb-4 p-6 psx-border bg-white hidden" id="result-panel">
<div className="flex items-center gap-2 mb-4 border-b-2 border-black pb-2">
<span className="iconify text-2xl" data-icon="lucide:skull" data-strokeWidth="1.5"></span>
<h2 className="text-lg font-bold uppercase tracking-tight">Fate Calculation</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<p className="text-xs uppercase text-gray-500 mb-1">Time Lost Today</p>
<div className="text-3xl font-bold tracking-tight" id="time-lost-display">0 HOURS</div>
</div>
<div>
<p className="text-xs uppercase text-gray-500 mb-1">Estimated Death</p>
<div className="text-3xl font-bold tracking-tight text-black flex items-center gap-2">
<span id="death-year-display">2077</span>
<span className="text-xs font-normal border border-black px-1">UPDATED</span>
</div>
</div>
</div>
<div className="mt-4 text-xs font-mono border-t border-dashed border-black pt-2 text-red-600">
                STATUS: VITAL SIGNS DEGRADING. IMMEDIATE ACTION REQUIRED.
            </div>
</div>

<footer className="mt-12 text-center text-xs font-mono uppercase opacity-50 flex flex-col items-center gap-2 pb-8">
<span className="iconify" data-icon="lucide:triangle-alert" data-strokeWidth="1.5"></span>
<p>Calculations are estimates based on averages.<br/>Actual mileage may vary.</p>
<p className="mt-4">© 1998-2024 LIFE_TRACKER.EXE</p>
</footer>
</main>


    </>
  );
}
