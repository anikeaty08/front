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



        let currentStep = 1;
        const totalNavSteps = 4; // Steps 2,3,4,5 are the main form
        
        function updateUI() {
            // Hide all steps
            for(let i=1; i<=7; i++) {
                document.getElementById(`step${i}`).classList.add('hidden');
                document.getElementById(`step${i}`).classList.remove('flex');
            }
            
            // Show current step
            document.getElementById(`step${currentStep}`).classList.remove('hidden');
            document.getElementById(`step${currentStep}`).classList.add('flex');

            const topNav = document.getElementById('topNav');
            const bottomAction = document.getElementById('bottomAction');
            const progressBar = document.getElementById('progressBar');
            const stepCounter = document.getElementById('stepCounter');

            // Manage Header/Footer visibility
            if (currentStep === 1 || currentStep === 6 || currentStep === 7) {
                topNav.classList.add('hidden');
                bottomAction.classList.add('hidden');
            } else {
                topNav.classList.remove('hidden');
                bottomAction.classList.remove('hidden');
                
                // Calculate progress (Step 2 is 1, Step 5 is 4)
                let navProgress = currentStep - 1;
                progressBar.style.width = `${(navProgress / totalNavSteps) * 100}%`;
                stepCounter.innerText = `${navProgress}/${totalNavSteps}`;
            }
        }

        function nextStep() {
            if (currentStep < 7) {
                currentStep++;
                updateUI();
            }
        }

        function prevStep() {
            if (currentStep > 1) {
                currentStep--;
                updateUI();
            }
        }

        // Selection Logic for Cards (Trade)
        function selectCard(element, groupClass) {
            let siblings = document.querySelectorAll(`.${groupClass}-card`);
            siblings.forEach(el => {
                el.classList.remove('border-[#F8E965]', 'bg-[#FEFCE8]');
                el.classList.add('border-zinc-200', 'bg-white');
            });
            element.classList.remove('border-zinc-200', 'bg-white');
            element.classList.add('border-[#F8E965]', 'bg-[#FEFCE8]');
        }

        // Selection Logic for Rows (Experience, Availability)
        function selectRow(element, groupClass) {
            let siblings = document.querySelectorAll(`.${groupClass}-row`);
            siblings.forEach(el => {
                el.classList.remove('border-[#F8E965]', 'bg-[#FEFCE8]', 'text-zinc-900');
                el.classList.add('border-zinc-200', 'bg-white', 'text-zinc-700');
                let indicator = el.querySelector('.indicator');
                if(indicator) {
                    indicator.classList.remove('border-[#F8E965]', 'bg-[#F8E965]');
                    indicator.classList.add('border-zinc-300');
                    indicator.innerHTML = '';
                }
            });
            element.classList.remove('border-zinc-200', 'bg-white', 'text-zinc-700');
            element.classList.add('border-[#F8E965]', 'bg-[#FEFCE8]', 'text-zinc-900');
            
            let indicator = element.querySelector('.indicator');
            if(indicator) {
                indicator.classList.remove('border-zinc-300');
                indicator.classList.add('border-[#F8E965]', 'bg-[#F8E965]');
                indicator.innerHTML = `<iconify-icon icon="solar:check-read-linear" class="text-zinc-900" width="12"></iconify-icon>`;
            }
        }

        // Multiple Selection Logic for Chips (Skills)
        function toggleChip(element) {
            if (element.classList.contains('bg-[#F8E965]')) {
                element.classList.remove('bg-[#F8E965]', 'border-[#F8E965]', 'text-zinc-900');
                element.classList.add('bg-white', 'border-zinc-200', 'text-zinc-700');
            } else {
                element.classList.remove('bg-white', 'border-zinc-200', 'text-zinc-700');
                element.classList.add('bg-[#F8E965]', 'border-[#F8E965]', 'text-zinc-900');
            }
        }

        // Initialize
        updateUI();
    
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
      

<div className="relative w-full max-w-[390px] h-[844px] bg-zinc-50 rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-zinc-900 flex flex-col">

<header className="hidden px-6 pt-12 pb-2 flex flex-col gap-4 bg-zinc-50 z-20 shrink-0" id="topNav">
<div className="flex items-center justify-between">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-900 shadow-sm transition-transform active:scale-95" onclick="prevStep()">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="text-xs font-semibold tracking-tighter text-zinc-900 uppercase">POWERMATCH</div>
<div className="w-10 text-xs font-medium text-zinc-400 text-right" id="stepCounter">1/5</div>
</div>
<div className="w-full bg-zinc-200 h-1 rounded-full overflow-hidden">
<div className="bg-[#F8E965] h-full w-1/5 transition-all duration-500 ease-out" id="progressBar"></div>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar relative w-full h-full">

<div className="absolute inset-0 flex flex-col p-6 fade-in bg-zinc-50 z-10" id="step1">
<div className="pt-8 mb-auto">
<div className="text-sm font-semibold tracking-tighter text-zinc-900 uppercase mb-12">POWERMATCH</div>
</div>
<div className="flex flex-col items-center text-center mt-auto mb-auto">
<div className="w-20 h-20 rounded-3xl bg-[#F8E965] flex items-center justify-center mb-8 shadow-sm rotate-3">
<iconify-icon className="text-zinc-900" icon="solar:hard-hat-linear" width="40"></iconify-icon>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Find your next site.</h1>
<p className="text-base text-zinc-500 mb-10 leading-relaxed px-4">Create your profile to get matched with the best construction jobs across Denmark.</p>
<div className="flex items-center gap-3 text-sm font-medium text-zinc-600 bg-white px-5 py-2.5 rounded-full border border-zinc-200 shadow-sm">
<iconify-icon icon="solar:stopwatch-linear" width="20"></iconify-icon>
                        Takes ~2 minutes
                    </div>
</div>
<div className="mt-auto pb-6">
<button className="w-full py-4 rounded-2xl bg-[#F8E965] text-zinc-900 font-semibold text-base shadow-sm transition-transform active:scale-[0.98]" onclick="nextStep()">Get Started</button>
</div>
</div>

<div className="hidden absolute inset-0 flex-col p-6 fade-in pb-32" id="step2">
<h2 className="text-2xl font-semibold tracking-tight mb-2">What is your primary trade?</h2>
<p className="text-sm text-zinc-500 mb-6">Select the role you have the most experience in.</p>
<div className="grid grid-cols-2 gap-3">
<button className="trade-card flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98]" onclick="selectCard(this, 'trade')">
<iconify-icon className="text-zinc-700" icon="solar:bolt-linear" width="28"></iconify-icon>
<span className="text-sm font-medium">Electrician</span>
</button>
<button className="trade-card flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98]" onclick="selectCard(this, 'trade')">
<iconify-icon className="text-zinc-700" icon="solar:hammer-linear" width="28"></iconify-icon>
<span className="text-sm font-medium">Carpenter</span>
</button>
<button className="trade-card flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98]" onclick="selectCard(this, 'trade')">
<iconify-icon className="text-zinc-700" icon="solar:waterdrop-linear" width="28"></iconify-icon>
<span className="text-sm font-medium">Plumber</span>
</button>
<button className="trade-card flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98]" onclick="selectCard(this, 'trade')">
<iconify-icon className="text-zinc-700" icon="solar:layers-linear" width="28"></iconify-icon>
<span className="text-sm font-medium">Mason</span>
</button>
<button className="trade-card flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98]" onclick="selectCard(this, 'trade')">
<iconify-icon className="text-zinc-700" icon="solar:trowel-linear" width="28"></iconify-icon>
<span className="text-sm font-medium">Concrete</span>
</button>
<button className="trade-card flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98]" onclick="selectCard(this, 'trade')">
<iconify-icon className="text-zinc-700" icon="solar:menu-dots-square-linear" width="28"></iconify-icon>
<span className="text-sm font-medium">Other</span>
</button>
</div>
</div>

<div className="hidden absolute inset-0 flex-col p-6 fade-in pb-32" id="step3">
<h2 className="text-2xl font-semibold tracking-tight mb-6">Years of experience?</h2>
<div className="flex flex-col gap-3">
<button className="exp-row w-full flex items-center justify-between p-5 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98]" onclick="selectRow(this, 'exp')">
<span className="text-base font-medium">0 – 1 years</span>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 flex items-center justify-center indicator"></div>
</button>
<button className="exp-row w-full flex items-center justify-between p-5 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98]" onclick="selectRow(this, 'exp')">
<span className="text-base font-medium">2 – 5 years</span>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 flex items-center justify-center indicator"></div>
</button>
<button className="exp-row w-full flex items-center justify-between p-5 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98]" onclick="selectRow(this, 'exp')">
<span className="text-base font-medium">5 – 10 years</span>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 flex items-center justify-center indicator"></div>
</button>
<button className="exp-row w-full flex items-center justify-between p-5 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98]" onclick="selectRow(this, 'exp')">
<span className="text-base font-medium">10+ years</span>
<div className="w-5 h-5 rounded-full border-2 border-zinc-300 flex items-center justify-center indicator"></div>
</button>
</div>
</div>

<div className="hidden absolute inset-0 flex-col p-6 fade-in pb-32" id="step4">
<h2 className="text-2xl font-semibold tracking-tight mb-2">Select your skills</h2>
<p className="text-sm text-zinc-500 mb-6">Tap all that apply based on your experience.</p>
<div className="flex flex-wrap gap-2.5">
<button className="px-4 py-2.5 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-700 transition-colors" onclick="toggleChip(this)">Residential Wiring</button>
<button className="px-4 py-2.5 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-700 transition-colors" onclick="toggleChip(this)">Commercial</button>
<button className="px-4 py-2.5 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-700 transition-colors" onclick="toggleChip(this)">Low Voltage</button>
<button className="px-4 py-2.5 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-700 transition-colors" onclick="toggleChip(this)">Panel Upgrades</button>
<button className="px-4 py-2.5 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-700 transition-colors" onclick="toggleChip(this)">Blueprint Reading</button>
<button className="px-4 py-2.5 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-700 transition-colors" onclick="toggleChip(this)">Troubleshooting</button>
<button className="px-4 py-2.5 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-700 transition-colors" onclick="toggleChip(this)">Industrial</button>
<button className="px-4 py-2.5 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-700 transition-colors" onclick="toggleChip(this)">Fire Alarms</button>
</div>
</div>

<div className="hidden absolute inset-0 flex-col p-6 fade-in pb-32" id="step5">
<h2 className="text-2xl font-semibold tracking-tight mb-6">Where &amp; When?</h2>
<div className="mb-8">
<label className="block text-sm font-medium text-zinc-900 mb-3">Work location</label>
<button className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-[#FEFCE8] border border-[#F8E965] text-zinc-900 font-medium text-sm transition-transform active:scale-[0.98] mb-3">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
                        Use my current location
                    </button>
<div className="flex items-center gap-3 mb-3">
<div className="flex-1 h-px bg-zinc-200"></div>
<span className="text-xs text-zinc-400 font-medium">OR</span>
<div className="flex-1 h-px bg-zinc-200"></div>
</div>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" icon="solar:buildings-linear" width="20"></iconify-icon>
<input className="w-full pl-11 pr-4 py-4 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 focus:outline-none focus:border-[#F8E965] focus:ring-1 focus:ring-[#F8E965] transition-all" placeholder="Enter city or zip code" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-900 mb-3">When can you start?</label>
<div className="grid grid-cols-3 gap-2">
<button className="avail-row py-3 rounded-xl border border-zinc-200 bg-white text-xs font-medium text-zinc-700 transition-all text-center" onclick="selectRow(this, 'avail')">ASAP</button>
<button className="avail-row py-3 rounded-xl border border-zinc-200 bg-white text-xs font-medium text-zinc-700 transition-all text-center" onclick="selectRow(this, 'avail')">1 Week</button>
<button className="avail-row py-3 rounded-xl border border-zinc-200 bg-white text-xs font-medium text-zinc-700 transition-all text-center" onclick="selectRow(this, 'avail')">1 Month</button>
</div>
</div>
</div>

<div className="hidden absolute inset-0 flex-col p-6 fade-in bg-white z-30" id="step6">
<div className="flex-1 flex flex-col items-center justify-center text-center">
<div className="w-24 h-24 rounded-full bg-[#FEFCE8] flex items-center justify-center mb-6 border-8 border-white shadow-[0_0_0_1px_rgba(248,233,101,0.2)]">
<iconify-icon className="text-[#D4B500]" icon="solar:check-circle-linear" width="48"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-3">You're on the map!</h2>
<p className="text-base text-zinc-500 px-4 mb-8">Recruiters can now find your basic profile and invite you to jobs.</p>
<div className="w-full p-5 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-semibold text-sm">
                                JD
                            </div>
<div className="text-left">
<div className="text-sm font-semibold text-zinc-900">Basic Profile Active</div>
<div className="text-xs text-zinc-500">Visible to employers</div>
</div>
</div>
<div className="px-3 py-1 bg-[#FEFCE8] text-[#D4B500] text-xs font-semibold rounded-full border border-[#F8E965]/50">
                            Ready
                        </div>
</div>
</div>
<div className="pb-6 pt-4 flex flex-col gap-3">
<button className="w-full py-4 rounded-xl bg-zinc-900 text-white font-semibold text-base shadow-sm transition-transform active:scale-[0.98]" onclick="nextStep()">Improve my profile</button>
<button className="w-full py-4 rounded-xl bg-white border border-zinc-200 text-zinc-900 font-semibold text-base shadow-sm transition-transform active:scale-[0.98]">View jobs now</button>
</div>
</div>

<div className="hidden absolute inset-0 flex-col bg-zinc-50 fade-in z-30" id="step7">
<div className="p-6 pb-0 pt-12 flex justify-between items-center mb-6">
<h2 className="text-2xl font-semibold tracking-tight">Stand out</h2>
<button className="text-sm font-medium text-zinc-500">Done</button>
</div>
<div className="px-6 mb-8">
<div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
<div className="flex justify-between items-end mb-3">
<span className="text-sm font-semibold text-zinc-900">Profile Strength</span>
<span className="text-xs font-semibold text-[#D4B500]">40% Complete</span>
</div>
<div className="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden">
<div className="bg-[#F8E965] w-[40%] h-full rounded-full"></div>
</div>
<p className="text-xs text-zinc-500 mt-4 leading-relaxed">Complete profiles get <span className="font-semibold text-zinc-900">3x more</span> job invites. Add details below to boost your rank.</p>
</div>
</div>
<div className="flex-1 px-6 flex flex-col gap-3 overflow-y-auto pb-12 no-scrollbar">
<button className="w-full flex items-center p-4 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98] group">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center mr-4 group-hover:bg-[#FEFCE8] transition-colors">
<iconify-icon className="text-zinc-600 group-hover:text-[#D4B500]" icon="solar:case-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 text-left">
<div className="text-sm font-semibold text-zinc-900">Add work history</div>
<div className="text-xs text-zinc-500">Show where you've worked</div>
</div>
<div className="text-xs font-semibold text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full">+20%</div>
</button>
<button className="w-full flex items-center p-4 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98] group">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center mr-4 group-hover:bg-[#FEFCE8] transition-colors">
<iconify-icon className="text-zinc-600 group-hover:text-[#D4B500]" icon="solar:diploma-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 text-left">
<div className="text-sm font-semibold text-zinc-900">Upload certificates</div>
<div className="text-xs text-zinc-500">Safety, specific machinery</div>
</div>
<div className="text-xs font-semibold text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full">+15%</div>
</button>
<button className="w-full flex items-center p-4 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98] group">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center mr-4 group-hover:bg-[#FEFCE8] transition-colors">
<iconify-icon className="text-zinc-600 group-hover:text-[#D4B500]" icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 text-left">
<div className="text-sm font-semibold text-zinc-900">Profile photo</div>
<div className="text-xs text-zinc-500">Help employers recognize you</div>
</div>
<div className="text-xs font-semibold text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full">+10%</div>
</button>
<button className="w-full flex items-center p-4 rounded-2xl border border-zinc-200 bg-white transition-all active:scale-[0.98] group">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center mr-4 group-hover:bg-[#FEFCE8] transition-colors">
<iconify-icon className="text-zinc-600 group-hover:text-[#D4B500]" icon="solar:global-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 text-left">
<div className="text-sm font-semibold text-zinc-900">Languages</div>
<div className="text-xs text-zinc-500">Important for site safety</div>
</div>
<div className="text-xs font-semibold text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full">+15%</div>
</button>
</div>
</div>
</main>

<div className="hidden absolute bottom-0 left-0 right-0 p-6 pt-12 bg-gradient-to-t from-zinc-50 via-zinc-50/90 to-transparent z-20" id="bottomAction">
<button className="w-full py-4 rounded-2xl bg-zinc-900 text-white font-semibold text-base shadow-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-2" onclick="nextStep()">
                Continue
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>


    </>
  );
}
