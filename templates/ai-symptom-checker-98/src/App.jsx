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



      function analyzeSymptoms() {
          const textarea = document.getElementById('symptoms');
          const analyzeBtn = document.getElementById('analyze-btn');
          const loadingState = document.getElementById('loading-state');
          const resultsSection = document.getElementById('results-section');
          const inputContainer = document.getElementById('input-container');

          if (textarea.value.trim() === '') {
              // Simple shake animation for empty input
              inputContainer.classList.add('translate-x-1');
              setTimeout(() => inputContainer.classList.remove('translate-x-1'), 100);
              setTimeout(() => inputContainer.classList.add('-translate-x-1'), 200);
              setTimeout(() => inputContainer.classList.remove('-translate-x-1'), 300);
              textarea.focus();
              return;
          }

          // Disable input and button
          textarea.disabled = true;
          analyzeBtn.disabled = true;
          analyzeBtn.innerHTML = '<iconify-icon icon="solar:hourglass-linear" width="18" height="18" class="animate-spin"></iconify-icon> Processing';

          // Show loading
          loadingState.classList.remove('hidden');
          resultsSection.classList.add('hidden');
          resultsSection.classList.remove('opacity-100');

          // Simulate API call delay
          setTimeout(() => {
              loadingState.classList.add('hidden');
              resultsSection.classList.remove('hidden');

              // Small delay to allow display:block to apply before animating opacity
              setTimeout(() => {
                  resultsSection.classList.add('opacity-100');
                  // Scroll to results smoothly
                  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 50);

              analyzeBtn.innerHTML = '<iconify-icon icon="solar:check-read-linear" width="18" height="18"></iconify-icon> Analyzed';
          }, 1500);
      }

      function resetApp() {
          const textarea = document.getElementById('symptoms');
          const analyzeBtn = document.getElementById('analyze-btn');
          const resultsSection = document.getElementById('results-section');

          textarea.value = '';
          textarea.disabled = false;

          analyzeBtn.disabled = false;
          analyzeBtn.innerHTML = '<iconify-icon icon="solar:magic-stick-3-linear" width="18" height="18"></iconify-icon> Analyze';

          resultsSection.classList.remove('opacity-100');
          setTimeout(() => {
              resultsSection.classList.add('hidden');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              textarea.focus();
          }, 300);
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
      

<header className="w-full backdrop-blur-md border-b sticky top-0 z-50 bg-black/80 border-neutral-800">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-neutral-100">
<iconify-icon height="24" icon="solar:health-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-semibold tracking-tighter text-lg font-manrope">
            AIDIAGNOSTICS
          </span>
</div>
<nav className="hidden sm:flex gap-6 text-sm font-medium text-neutral-500">
<a className="transition-colors font-manrope hover:text-neutral-100" href="#">
            How it works
          </a>
<a className="transition-colors font-manrope hover:text-neutral-100" href="#">
            Privacy
          </a>
</nav>
</div>
</header>

<main className="flex-grow w-full max-w-3xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">

<div className="text-center mb-10 w-full">
<h1 className="md:text-4xl text-3xl tracking-tight mb-3 font-montserrat font-medium text-neutral-100">
          Understand your symptoms.
        </h1>
<p className="text-base text-neutral-500 max-w-lg mx-auto font-manrope">
          Describe how you are feeling in plain language. Our AI will analyze
          your symptoms, suggest possible conditions, and recommend general next
          steps.
        </p>
</div>

<div className="w-full rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 bg-black border-neutral-800" id="input-container">
<div className="p-6">
<label className="block text-sm font-medium mb-2 flex items-center gap-2 font-manrope text-neutral-300" htmlFor="symptoms">
<iconify-icon height="18" icon="solar:pen-new-square-linear" width="18"></iconify-icon>
            What are your symptoms?
          </label>
<textarea className="w-full border-0 text-base rounded-xl p-4 focus:ring-1 focus:ring-neutral-300 focus:bg-white transition-colors resize-none placeholder:text-neutral-400 bg-neutral-950 text-neutral-100" id="symptoms" placeholder="E.g., I have had a mild fever for two days, a dry cough, and I feel very tired..." rows="4"></textarea>
</div>
<div className="px-6 py-4 border-t flex items-center justify-between bg-neutral-950 border-neutral-900">
<span className="text-xs flex items-center gap-1.5 font-manrope text-neutral-600">
<iconify-icon height="14" icon="solar:shield-check-linear" width="14"></iconify-icon>
            Data is anonymized
          </span>
<button className="text-sm font-medium py-2.5 px-5 rounded-lg flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed font-manrope bg-neutral-100 hover:bg-neutral-200 text-black" id="analyze-btn" onclick="analyzeSymptoms()"><iconify-icon height="18" icon="solar:magic-stick-3-linear" width="18"></iconify-icon> Analyze</button>
</div>
</div>

<div className="w-full mt-12 flex flex-col items-center justify-center space-y-4 hidden" id="loading-state">
<iconify-icon className="animate-pulse text-neutral-600" height="32" icon="solar:cpu-bolt-linear" width="32"></iconify-icon>
<p className="text-sm font-medium text-neutral-500 animate-pulse font-manrope">
          Analyzing symptoms...
        </p>
</div>

<div className="w-full mt-8 space-y-6 opacity-0 transition-opacity duration-500 hidden" id="results-section">

<div className="border rounded-xl p-4 flex gap-3 items-start bg-amber-950 border-amber-800">
<iconify-icon className="shrink-0 mt-0.5 text-amber-400" height="20" icon="solar:danger-triangle-linear" width="20"></iconify-icon>
<div>
<h3 className="text-sm font-semibold tracking-tight font-manrope text-amber-200">
              Not Medical Advice
            </h3>
<p className="text-xs mt-1 leading-relaxed font-manrope text-amber-300">
              This AI assessment is for informational purposes only. It is not a
              qualified medical diagnosis. Always consult a healthcare
              professional for actual medical advice, diagnosis, or treatment.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-2xl border shadow-sm p-6 bg-black border-neutral-800">
<div className="flex items-center gap-2 mb-6 pb-4 border-b border-neutral-900">
<iconify-icon className="text-neutral-600" height="20" icon="lucide:stethoscope" width="20"></iconify-icon>
<h2 className="text-base font-semibold tracking-tight font-manrope text-neutral-100">
                Possible Conditions
              </h2>
</div>
<div className="space-y-5">
<div>
<div className="flex justify-between items-end mb-1.5">
<span className="text-sm font-medium font-manrope text-neutral-200">
                    Viral Upper Respiratory Infection
                  </span>
<span className="text-xs text-neutral-500 font-manrope">High Match</span>
</div>
<div className="w-full rounded-full h-1.5 bg-neutral-900">
<div className="h-1.5 rounded-full bg-neutral-200" style={{width: '85%'}}></div>
</div>
<p className="text-xs text-neutral-500 mt-2 font-manrope">
                  Commonly known as the common cold. Characterized by mild
                  fever, cough, and fatigue.
                </p>
</div>
<div>
<div className="flex justify-between items-end mb-1.5">
<span className="text-sm font-medium font-manrope text-neutral-200">
                    Seasonal Allergies
                  </span>
<span className="text-xs text-neutral-500 font-manrope">Low Match</span>
</div>
<div className="w-full rounded-full h-1.5 bg-neutral-900">
<div className="h-1.5 rounded-full bg-neutral-700" style={{width: '25%'}}></div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border shadow-sm p-6 bg-black border-neutral-800">
<div className="flex items-center gap-2 mb-6 pb-4 border-b border-neutral-900">
<iconify-icon className="text-neutral-600" height="20" icon="lucide:heart-pulse" width="20"></iconify-icon>
<h2 className="text-base font-semibold tracking-tight font-manrope text-neutral-100">
                General Care
              </h2>
</div>
<div className="space-y-4">
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm font-manrope text-neutral-300">
<iconify-icon className="mt-0.5 shrink-0 text-neutral-600" height="16" icon="lucide:check-circle-2" width="16"></iconify-icon>
                  Get plenty of rest to help your immune system.
                </li>
<li className="flex items-start gap-2 text-sm font-manrope text-neutral-300">
<iconify-icon className="mt-0.5 shrink-0 text-neutral-600" height="16" icon="lucide:check-circle-2" width="16"></iconify-icon>
                  Stay hydrated by drinking water or clear broths.
                </li>
<li className="flex items-start gap-2 text-sm font-manrope text-neutral-300">
<iconify-icon className="mt-0.5 shrink-0 text-neutral-600" height="16" icon="lucide:check-circle-2" width="16"></iconify-icon>
                  Use a humidifier to ease breathing.
                </li>
</ul>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border shadow-sm p-6 bg-black border-neutral-800">
<div className="flex items-center gap-2 mb-6 pb-4 border-b border-neutral-900">
<iconify-icon className="text-neutral-600" height="20" icon="lucide:pill" width="20"></iconify-icon>
<h2 className="text-base font-semibold tracking-tight font-manrope text-neutral-100">
                Suggested Medicines
              </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 rounded-xl border flex flex-col h-full bg-neutral-950 border-neutral-900">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-semibold font-manrope text-neutral-100">
                    Paracetamol
                  </span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded-full tracking-wide font-manrope bg-neutral-800 text-neutral-400">
                    OTC
                  </span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed flex-grow font-manrope">
                  For mild fever and body aches. Reduces pain and temperature.
                  Follow package instructions carefully.
                </p>
</div>
<div className="p-4 rounded-xl border flex flex-col h-full bg-neutral-950 border-neutral-900">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-semibold font-manrope text-neutral-100">
                    Cough Suppressant
                  </span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded-full tracking-wide font-manrope bg-neutral-800 text-neutral-400">
                    OTC
                  </span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed flex-grow font-manrope">
                  E.g., Dextromethorphan. To soothe a dry or sore throat. Look
                  for non-drowsy options during the day.
                </p>
</div>
<div className="p-4 rounded-xl border flex flex-col h-full bg-amber-950 border-amber-900">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-semibold font-manrope text-amber-100">
                    Antibiotics
                  </span>
<span className="text-[10px] font-medium px-2 py-0.5 rounded-full tracking-wide font-manrope bg-amber-800 text-amber-200">
                    Rx Only
                  </span>
</div>
<p className="text-xs leading-relaxed flex-grow font-manrope text-amber-300">
                  Only if a bacterial infection is diagnosed by a doctor. Not
                  effective for viral infections like the cold.
                </p>
</div>
</div>
</div>
</div>

<div className="flex justify-center pt-4">
<button className="text-sm font-medium text-neutral-500 transition-colors flex items-center gap-2 font-manrope hover:text-neutral-100" onclick="resetApp()">
<iconify-icon height="16" icon="solar:refresh-linear" width="16"></iconify-icon>
            Check new symptoms
          </button>
</div>
</div>
</main>

<footer className="w-full border-t mt-auto py-8 border-neutral-800">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p className="font-manrope">© 2023 AIDIAGNOSTICS. All rights reserved.</p>
<div className="flex gap-4">
<a className="transition-colors font-manrope hover:text-neutral-400" href="#">Terms</a>
<a className="transition-colors font-manrope hover:text-neutral-400" href="#">
            Privacy Policy
          </a>
</div>
</div>
</footer>


    </>
  );
}
