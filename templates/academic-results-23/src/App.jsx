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



        function calculate() {
            const errorMsg = document.getElementById('error-msg');
            const errorText = document.getElementById('error-text');
            const resultArea = document.getElementById('result-area');
            
            // Hide previous errors/results
            errorMsg.classList.add('hidden');
            
            let totalMarks = 0;
            let allPassed = true;
            let validationFailed = false;

            for (let i = 1; i <= 6; i++) {
                const inputVal = document.getElementById(`sub${i}`).value;
                
                // Check if empty
                if (inputVal === '') {
                    showError("All 6 subject marks are required.");
                    validationFailed = true;
                    break;
                }
                
                const marks = parseFloat(inputVal);
                
                // Check bounds
                if (isNaN(marks) || marks < 0 || marks > 100) {
                    showError(`Subject ${i} marks must be between 0 and 100.`);
                    validationFailed = true;
                    break;
                }

                totalMarks += marks;
                
                // Check pass condition (<33 is fail)
                if (marks < 33) {
                    allPassed = false;
                }
            }

            if (validationFailed) return;

            // Zero division check based on custom formula logic
            if (totalMarks === 0) {
                showError("Obtained marks cannot be zero (Division by zero error).");
                return;
            }

            // Calculations
            // Applied exact formula requested: Percentage = (600 / Obtained Marks) * 100
            const percentage = (totalMarks/600) * 100;
            
            // Update UI Elements
            document.getElementById('obtained-marks').innerText = totalMarks;
            document.getElementById('percentage-text').innerText = percentage.toFixed(2) + '%';
            
            const statusBadge = document.getElementById('status-badge');
            const progressBar = document.getElementById('progress-bar');
            
            if (allPassed) {
                statusBadge.innerHTML = '<iconify-icon icon="solar:check-circle-linear" class="text-base"></iconify-icon> Pass';
                statusBadge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
                progressBar.className = 'h-full rounded-full transition-all duration-1000 ease-out bg-emerald-500 relative';
            } else {
                statusBadge.innerHTML = '<iconify-icon icon="solar:close-circle-linear" class="text-base"></iconify-icon> Fail';
                statusBadge.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border bg-red-500/10 text-red-400 border-red-500/20';
                progressBar.className = 'h-full rounded-full transition-all duration-1000 ease-out bg-red-500 relative';
            }

            // Visual Progress bar width setup. 
            // Capping at 100% visually so the layout doesn't break if formula yields > 100%
            const visualWidth = Math.min(percentage, 100);
            
            // Reveal animation
            resultArea.classList.remove('hidden');
            
            // Reset width before animation frame to trigger transition
            progressBar.style.width = '0%';
            
            setTimeout(() => {
                resultArea.classList.remove('opacity-0');
                progressBar.style.width = visualWidth + '%';
            }, 50);
        }

        function showError(message) {
            const errorMsg = document.getElementById('error-msg');
            const errorText = document.getElementById('error-text');
            const resultArea = document.getElementById('result-area');
            
            errorText.innerText = message;
            errorMsg.classList.remove('hidden');
            resultArea.classList.add('hidden');
            resultArea.classList.add('opacity-0');
        }

        function resetForm() {
            for (let i = 1; i <= 6; i++) {
                document.getElementById(`sub${i}`).value = '';
            }
            document.getElementById('error-msg').classList.add('hidden');
            const resultArea = document.getElementById('result-area');
            resultArea.classList.add('opacity-0');
            setTimeout(() => {
                resultArea.classList.add('hidden');
                document.getElementById('progress-bar').style.width = '0%';
            }, 300); // Wait for fade out
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
      
<div className="w-full max-w-lg bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

<div className="px-6 py-5 border-b border-zinc-800/80 flex items-center justify-between">
<div className="flex items-center gap-3.5">
<div className="w-9 h-9 rounded-lg bg-zinc-100 text-zinc-950 flex items-center justify-center text-sm font-semibold tracking-tighter shadow-sm">
                    RG
                </div>
<div>
<h1 className="text-xl font-semibold tracking-tight">Result Generator</h1>
<p className="text-xs text-zinc-500 mt-0.5">Calculate academic performance</p>
</div>
</div>
</div>

<div className="p-6 space-y-6">
<div className="hidden text-sm text-red-400 bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/20 flex items-center gap-2" id="error-msg">
<iconify-icon className="text-lg flex-shrink-0" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<span id="error-text"></span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1" htmlFor="sub1">English</label>
<div className="relative">
<span className="absolute inset-y-0 left-3 flex items-center text-zinc-500 pointer-events-none">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</span>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all shadow-sm" id="sub1" max="100" min="0" placeholder="0 - 100" type="number"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1" htmlFor="sub2">Maths</label>
<div className="relative">
<span className="absolute inset-y-0 left-3 flex items-center text-zinc-500 pointer-events-none">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</span>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all shadow-sm" id="sub2" max="100" min="0" placeholder="0 - 100" type="number"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1" htmlFor="sub3">Science</label>
<div className="relative">
<span className="absolute inset-y-0 left-3 flex items-center text-zinc-500 pointer-events-none">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</span>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all shadow-sm" id="sub3" max="100" min="0" placeholder="0 - 100" type="number"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1" htmlFor="sub4">SST</label>
<div className="relative">
<span className="absolute inset-y-0 left-3 flex items-center text-zinc-500 pointer-events-none">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</span>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all shadow-sm" id="sub4" max="100" min="0" placeholder="0 - 100" type="number"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1" htmlFor="sub5">Gujarati</label>
<div className="relative">
<span className="absolute inset-y-0 left-3 flex items-center text-zinc-500 pointer-events-none">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</span>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all shadow-sm" id="sub5" max="100" min="0" placeholder="0 - 100" type="number"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1" htmlFor="sub6">Hindi / Sanskrit / IT</label>
<div className="relative">
<span className="absolute inset-y-0 left-3 flex items-center text-zinc-500 pointer-events-none">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</span>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all shadow-sm" id="sub6" max="100" min="0" placeholder="0 - 100" type="number"/>
</div>
</div>
</div>
<div className="flex gap-3 pt-2">
<button className="flex-1 bg-zinc-100 text-zinc-950 hover:bg-white text-sm font-semibold py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] flex justify-center items-center gap-2 active:scale-[0.98]" onclick="calculate()">
<iconify-icon className="text-lg" icon="solar:calculator-linear" strokeWidth="1.5"></iconify-icon> Calculate Result
                </button>
<button className="px-5 bg-zinc-800/50 text-zinc-300 hover:text-white hover:bg-zinc-700/50 text-sm font-medium py-2.5 rounded-xl transition-all border border-zinc-700/50 flex items-center justify-center active:scale-[0.98]" onclick="resetForm()">
                    Reset
                </button>
</div>

<div className="hidden opacity-0 transition-opacity duration-700 ease-out space-y-6 pt-6 border-t border-zinc-800/80" id="result-area">
<div className="flex justify-between items-end">
<div className="space-y-1.5">
<h3 className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Final Status</h3>
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border" id="status-badge">

</div>
</div>
<div className="text-right space-y-1">
<h3 className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Obtained Marks</h3>
<p className="text-2xl font-semibold tracking-tight text-zinc-100 flex items-baseline justify-end gap-1">
<span id="obtained-marks">0</span>
<span className="text-sm text-zinc-500 font-normal">/ 600</span>
</p>
</div>
</div>
<div className="space-y-2.5 bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
<div className="flex justify-between items-baseline">
<span className="text-sm text-zinc-400 font-medium">Calculated Percentage</span>
<span className="text-lg font-semibold tracking-tight text-zinc-100" id="percentage-text">0.00%</span>
</div>
<div className="h-1.5 w-full bg-zinc-800/80 rounded-full overflow-hidden">
<div className="h-full rounded-full transition-all duration-1000 ease-out w-0 relative" id="progress-bar">
<div className="absolute inset-0 bg-white/20"></div>
</div>
</div>
<div className="flex justify-between items-center text-xs text-zinc-500 pt-1">
<span>Formula applied:</span>
<code className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">(Marks / 600) × 100</code>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
