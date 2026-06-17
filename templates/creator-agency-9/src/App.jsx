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



        lucide.createIcons();

        function nextStep(stepNumber) {
            document.querySelectorAll('.step').forEach(step => {
                step.classList.remove('active');
            });
            
            const nextStepEl = document.getElementById('step-' + stepNumber);
            if (nextStepEl) {
                nextStepEl.classList.add('active');
            }

            const progress = document.getElementById('progress-bar');
            if (stepNumber === 1) progress.style.width = '33%';
            if (stepNumber === 2) progress.style.width = '66%';
            if (stepNumber === 3) progress.style.width = '100%';
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
      

<div className="mb-8 bg-black text-white px-6 py-2 rounded-full shadow-xl transform transition-transform hover:scale-105">
<span className="text-[10px] font-bold tracking-[0.2em] uppercase brand-font">The Girls Club</span>
</div>

<main className="w-full max-w-[440px] bg-[#FDFBF9] rounded-[32px] shadow-2xl relative overflow-hidden flex flex-col p-8 sm:p-10" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'}}>

<div className="w-full bg-gray-100 h-2 rounded-full mb-8 overflow-hidden">
<div className="bg-black h-full rounded-full transition-all duration-500 ease-out" id="progress-bar" style={{width: '33%'}}></div>
</div>

<form className="flex-grow" id="app-form" onsubmit="return false;">

<div className="step active" id="step-1">
<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-black mb-2">Who are you?</h1>
<p className="text-sm text-gray-500 font-medium">Let's start with the basics.</p>
</div>
<div className="space-y-6">

<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-2">Full Name</label>
<div className="relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors">
<i data-lucide="user" height="20" strokeWidth="1.5" width="20"></i>
</div>
<input className="w-full bg-white text-base text-gray-900 placeholder:text-gray-300 border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 focus:border-black focus:ring-0 outline-none transition-all duration-200 font-medium shadow-sm" placeholder="Jane Doe" type="text"/>
</div>
</div>

<div>
<label className="block text-[10px] font-bold uppercase tracking-widest text-gray-900 mb-2">Social Handle</label>
<div className="relative group">
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors">
<i data-lucide="instagram" height="20" strokeWidth="1.5" width="20"></i>
</div>
<input className="w-full bg-white text-base text-gray-900 placeholder:text-gray-300 border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 focus:border-black focus:ring-0 outline-none transition-all duration-200 font-medium shadow-sm" placeholder="@username" type="text"/>
</div>
</div>
</div>
<div className="mt-10">
<button className="w-full bg-[#E5E7EB] text-gray-500 border-2 border-transparent hover:border-black/5 rounded-xl py-4 font-bold text-sm tracking-widest uppercase transition-all shadow-[0_5px_0_0_#000000] active:shadow-none active:translate-y-[5px] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#000000] flex items-center justify-center" onclick="nextStep(2)">
                        Next Step
                    </button>
</div>
</div>

<div className="step" id="step-2">
<div className="mb-8">
<button className="text-gray-400 hover:text-black text-[10px] font-bold tracking-widest uppercase mb-4 flex items-center gap-1 transition-colors" onclick="nextStep(1)">
<i data-lucide="arrow-left" strokeWidth="2" width="14"></i> Back
                    </button>
<h2 className="text-3xl font-semibold tracking-tight text-black mb-2">Revenue</h2>
<p className="text-sm text-gray-500 font-medium">Monthly earnings across platforms.</p>
</div>
<div className="grid grid-cols-1 gap-3">
<label className="cursor-pointer group">
<input className="peer hidden" name="revenue" type="radio" value="0-1k"/>
<div className="border border-gray-200 bg-white rounded-xl p-4 flex items-center justify-between transition-all duration-200 peer-checked:border-black peer-checked:bg-gray-50 group-hover:border-gray-300">
<span className="font-medium text-gray-900 text-sm">$0 - $1,000</span>
<div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-black peer-checked:bg-black relative flex items-center justify-center"></div>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="revenue" type="radio" value="1k-5k"/>
<div className="border border-gray-200 bg-white rounded-xl p-4 flex items-center justify-between transition-all duration-200 peer-checked:border-black peer-checked:bg-gray-50 group-hover:border-gray-300">
<span className="font-medium text-gray-900 text-sm">$1,000 - $5,000</span>
<div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-black peer-checked:bg-black relative flex items-center justify-center"></div>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="revenue" type="radio" value="5k+"/>
<div className="border border-gray-200 bg-white rounded-xl p-4 flex items-center justify-between transition-all duration-200 peer-checked:border-black peer-checked:bg-gray-50 group-hover:border-gray-300">
<span className="font-medium text-gray-900 text-sm">$5,000+</span>
<div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-black peer-checked:bg-black relative flex items-center justify-center"></div>
</div>
</label>
</div>
<div className="mt-10">
<button className="w-full bg-[#E5E7EB] text-gray-500 border-2 border-transparent hover:border-black/5 rounded-xl py-4 font-bold text-sm tracking-widest uppercase transition-all shadow-[0_5px_0_0_#000000] active:shadow-none active:translate-y-[5px] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#000000] flex items-center justify-center" onclick="nextStep(3)">
                        Next Step
                    </button>
</div>
</div>

<div className="step" id="step-3">
<div className="mb-8">
<button className="text-gray-400 hover:text-black text-[10px] font-bold tracking-widest uppercase mb-4 flex items-center gap-1 transition-colors" onclick="nextStep(2)">
<i data-lucide="arrow-left" strokeWidth="2" width="14"></i> Back
                    </button>
<h2 className="text-3xl font-semibold tracking-tight text-black mb-2">Goals</h2>
<p className="text-sm text-gray-500 font-medium">What are you looking for?</p>
</div>
<div className="grid grid-cols-1 gap-3 mb-8">
<label className="cursor-pointer group">
<input className="peer hidden" name="goals" type="checkbox" value="management"/>
<div className="border border-gray-200 bg-white rounded-xl p-4 flex items-center gap-4 transition-all duration-200 peer-checked:border-black peer-checked:bg-gray-50 group-hover:border-gray-300">
<div className="w-5 h-5 rounded border border-gray-300 peer-checked:bg-black peer-checked:border-black flex items-center justify-center text-white transition-colors">
<i data-lucide="check" strokeWidth="3" width="12"></i>
</div>
<span className="font-medium text-gray-900 text-sm">Full Management</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="goals" type="checkbox" value="marketing"/>
<div className="border border-gray-200 bg-white rounded-xl p-4 flex items-center gap-4 transition-all duration-200 peer-checked:border-black peer-checked:bg-gray-50 group-hover:border-gray-300">
<div className="w-5 h-5 rounded border border-gray-300 peer-checked:bg-black peer-checked:border-black flex items-center justify-center text-white transition-colors">
<i data-lucide="check" strokeWidth="3" width="12"></i>
</div>
<span className="font-medium text-gray-900 text-sm">Marketing Only</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="goals" type="checkbox" value="audit"/>
<div className="border border-gray-200 bg-white rounded-xl p-4 flex items-center gap-4 transition-all duration-200 peer-checked:border-black peer-checked:bg-gray-50 group-hover:border-gray-300">
<div className="w-5 h-5 rounded border border-gray-300 peer-checked:bg-black peer-checked:border-black flex items-center justify-center text-white transition-colors">
<i data-lucide="check" strokeWidth="3" width="12"></i>
</div>
<span className="font-medium text-gray-900 text-sm">Account Audit</span>
</div>
</label>
</div>
<div className="mt-4">
<button className="w-full bg-black text-white rounded-xl py-4 font-bold text-sm tracking-widest uppercase transition-all shadow-lg hover:bg-gray-900 hover:scale-[1.02] active:scale-[0.98]" type="submit">
                        Join Now
                    </button>
</div>
</div>

<div className="mt-10 text-center">
<p className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase">• Exclusive Agency •</p>
</div>
</form>
</main>

<footer className="mt-12 text-center opacity-40 hover:opacity-100 transition-opacity">
<p className="text-xs text-white font-medium">© 2026 The Girls Club. All rights reserved.</p>
</footer>


    </>
  );
}
