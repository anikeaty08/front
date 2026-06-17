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



        // State Management
        const state = {
            step: 0,
            answers: {
                gender: null,
                concerns: [],
                energy: null,
                hydration: null,
                goals: null
            }
        };

        const totalSteps = 5; // Quiz questions count

        // Data for dynamic question 2
        const concernsData = {
            'Female': [
                { id: 'skin', label: 'Skin, hair & nails', icon: 'solar:magic-stick-3-linear' },
                { id: 'hormones', label: 'Hormonal balance', icon: 'solar:moon-linear' },
                { id: 'energy_w', label: 'Energy levels', icon: 'solar:bolt-linear' },
                { id: 'sleep_w', label: 'Sleep & stress', icon: 'solar:sleeping-linear' },
                { id: 'immune_w', label: 'Immune support', icon: 'solar:shield-plus-linear' },
                { id: 'antiaging', label: 'Anti-aging', icon: 'solar:hourglass-linear' },
                { id: 'gut', label: 'Gut health', icon: 'solar:stomach-linear' },
                { id: 'detox_w', label: 'Detox & liver support', icon: 'solar:leaf-linear' }
            ],
            'Male': [
                { id: 'energy_m', label: 'Energy & performance', icon: 'solar:bolt-linear' },
                { id: 'muscle', label: 'Muscle recovery', icon: 'solar:dumbbell-linear' },
                { id: 'libido', label: 'Libido & testosterone', icon: 'solar:fire-linear' },
                { id: 'focus', label: 'Focus & mental clarity', icon: 'solar:brain-linear' },
                { id: 'heart', label: 'Heart health', icon: 'solar:heart-pulse-linear' },
                { id: 'sleep_m', label: 'Stress & sleep', icon: 'solar:sleeping-linear' },
                { id: 'immune_m', label: 'Immune support', icon: 'solar:shield-plus-linear' },
                { id: 'detox_m', label: 'Detox & liver function', icon: 'solar:leaf-linear' }
            ],
            'Other': [
                { id: 'energy_o', label: 'Energy levels', icon: 'solar:bolt-linear' },
                { id: 'sleep_o', label: 'Sleep & stress', icon: 'solar:sleeping-linear' },
                { id: 'immune_o', label: 'Immune support', icon: 'solar:shield-plus-linear' },
                { id: 'gut_o', label: 'Gut health', icon: 'solar:stomach-linear' },
                { id: 'skin_o', label: 'Skin health', icon: 'solar:magic-stick-3-linear' },
                { id: 'recovery_o', label: 'Physical recovery', icon: 'solar:heart-pulse-linear' }
            ]
        };

        function setAnswer(key, value) {
            state.answers[key] = value;
            if (key === 'gender') {
                renderConcerns();
            }
        }

        function toggleConcern(id) {
            const index = state.answers.concerns.indexOf(id);
            if (index > -1) {
                state.answers.concerns.splice(index, 1);
            } else {
                if (state.answers.concerns.length < 3) {
                    state.answers.concerns.push(id);
                }
            }
            
            // Update UI for checkboxes
            document.querySelectorAll('.concern-card').forEach(card => {
                const cardId = card.getAttribute('data-id');
                const checkbox = card.querySelector('.checkbox-inner');
                if (state.answers.concerns.includes(cardId)) {
                    card.classList.add('border-blue-500', 'bg-blue-50');
                    card.classList.remove('border-slate-200', 'bg-white');
                    checkbox.classList.add('bg-blue-500', 'border-blue-500');
                    checkbox.innerHTML = '<iconify-icon icon="solar:check-read-linear" class="text-white" width="12"></iconify-icon>';
                } else {
                    card.classList.remove('border-blue-500', 'bg-blue-50');
                    card.classList.add('border-slate-200', 'bg-white');
                    checkbox.classList.remove('bg-blue-500', 'border-blue-500');
                    checkbox.innerHTML = '';
                }
            });

            // Update Next button state
            const btn = document.getElementById('btn-next-2');
            if (state.answers.concerns.length > 0) {
                btn.removeAttribute('disabled');
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                btn.classList.add('hover:bg-slate-800');
            } else {
                btn.setAttribute('disabled', 'true');
                btn.classList.add('opacity-50', 'cursor-not-allowed');
                btn.classList.remove('hover:bg-slate-800');
            }
        }

        function renderConcerns() {
            const grid = document.getElementById('concerns-grid');
            const options = concernsData[state.answers.gender] || concernsData['Other'];
            state.answers.concerns = []; // Reset on gender change
            
            grid.innerHTML = options.map(opt => `
                <div onclick="toggleConcern('${opt.id}')" data-id="${opt.id}" class="concern-card cursor-pointer p-4 rounded-2xl border border-slate-200 bg-white flex items-center justify-between transition-all select-none">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                            <iconify-icon icon="${opt.icon}" width="18" stroke-width="1.5"></iconify-icon>
                        </div>
                        <span class="text-sm font-medium text-slate-700">${opt.label}</span>
                    </div>
                    <div class="w-5 h-5 rounded-md border border-slate-300 flex items-center justify-center transition-colors checkbox-inner"></div>
                </div>
            `).join('');
            
            // Reset button
            const btn = document.getElementById('btn-next-2');
            btn.setAttribute('disabled', 'true');
            btn.classList.add('opacity-50', 'cursor-not-allowed');
        }

        function validateAndNext(key) {
            if (key === 'concerns' && state.answers.concerns.length > 0) {
                nextStep();
            }
        }

        function updateView() {
            // Hide all steps
            for (let i = 0; i <= 7; i++) {
                const el = document.getElementById(`step-${i}`);
                if (el) {
                    el.classList.add('hide');
                    el.classList.remove('fade-enter-active');
                }
            }

            // Show current step
            const currentEl = document.getElementById(`step-${state.step}`);
            if (currentEl) {
                currentEl.classList.remove('hide');
                // Trigger reflow for animation
                void currentEl.offsetWidth;
                currentEl.classList.add('fade-enter-active');
            }

            // Update Progress Bar visibility and width
            const progressContainer = document.getElementById('progress-container');
            const progressBar = document.getElementById('progress-bar');
            const progressText = document.getElementById('progress-text');
            
            if (state.step > 0 && state.step <= totalSteps) {
                progressContainer.classList.remove('hide');
                const percentage = ((state.step - 1) / totalSteps) * 100;
                progressBar.style.width = `${percentage === 0 ? 5 : percentage}%`; // Give it a tiny start width
                progressText.innerText = `${state.step}/${totalSteps}`;
            } else {
                progressContainer.classList.add('hide');
            }
        }

        function nextStep() {
            if (state.step < 7) {
                state.step++;
                updateView();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function prevStep() {
            if (state.step > 0) {
                state.step--;
                updateView();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function processQuiz() {
            state.step = 6; // Processing view
            updateView();
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Animate internal processing bar
            setTimeout(() => {
                const bar = document.getElementById('processing-bar');
                if(bar) bar.style.width = '100%';
            }, 100);

            // Simulate processing time
            setTimeout(() => {
                state.step = 7; // Results view
                updateView();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 3000);
        }

        // Initialize
        updateView();

    
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
      

<header className="w-full fixed top-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-xl text-slate-900">HWT</div>

<div className="hide flex-1 max-w-xs mx-4 flex items-center gap-3" id="progress-container">
<button className="text-slate-400 hover:text-slate-600 transition-colors hidden sm:block" id="btn-back" onclick="prevStep()">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out" id="progress-bar" style={{width: '0%'}}></div>
</div>
<span className="text-xs font-medium text-slate-500 min-w-[3ch]" id="progress-text">1/5</span>
</div>
<div className="w-8"></div> 
</div>
</header>

<main className="flex-1 flex flex-col items-center justify-start pt-24 pb-12 px-4 w-full max-w-3xl mx-auto">

<section className="w-full max-w-xl flex flex-col items-center text-center fade-enter-active" id="step-0">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-6">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                Backed by Science
            </div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4 leading-tight">
                Find out how hydrogen water can improve your health in 30 seconds
            </h1>
<p className="text-base sm:text-lg text-slate-500 mb-8 max-w-md font-normal leading-relaxed">
                Take this quick quiz to get your personalized hydration and recovery recommendation.
            </p>
<button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-base font-medium transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2" onclick="nextStep()">
                Start Quiz
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-8 border-t border-slate-200/60">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">10,000+ Happy Customers</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:test-tube-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Backed by Science</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:health-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Doctor Recommended</span>
</div>
</div>
</section>

<section className="hide w-full max-w-md flex flex-col fade-enter" id="step-1">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 text-center">What best describes you?</h2>
<div className="grid gap-3">
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center justify-between group transition-all" onclick="setAnswer('gender', 'Male'); nextStep()">
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Male</span>
<iconify-icon className="text-slate-400 group-hover:text-blue-500" icon="solar:men-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center justify-between group transition-all" onclick="setAnswer('gender', 'Female'); nextStep()">
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Female</span>
<iconify-icon className="text-slate-400 group-hover:text-blue-500" icon="solar:women-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center justify-between group transition-all" onclick="setAnswer('gender', 'Other'); nextStep()">
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Prefer not to say</span>
</button>
</div>
</section>

<section className="hide w-full max-w-md flex flex-col fade-enter" id="step-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2 text-center">Primary health concerns</h2>
<p className="text-sm text-slate-500 text-center mb-6">Select up to 3 options</p>
<div className="grid gap-3 mb-8" id="concerns-grid">

</div>
<button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-base font-medium transition-all shadow-sm opacity-50 cursor-not-allowed" disabled="" id="btn-next-2" onclick="validateAndNext('concerns')">
                Continue
            </button>
</section>

<section className="hide w-full max-w-md flex flex-col fade-enter" id="step-3">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 text-center">How would you describe your daily energy levels?</h2>
<div className="grid gap-3">
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('energy', 'Constantly tired'); nextStep()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Constantly tired</span>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('energy', 'Low energy in afternoons'); nextStep()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Low energy in afternoons</span>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('energy', 'Mostly good but inconsistent'); nextStep()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Mostly good but inconsistent</span>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('energy', 'High energy most days'); nextStep()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">High energy most days</span>
</button>
</div>
</section>

<section className="hide w-full max-w-md flex flex-col fade-enter" id="step-4">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 text-center">How much water do you drink daily?</h2>
<div className="grid gap-3">
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('hydration', 'Less than 1 liter'); nextStep()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Less than 1 liter</span>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('hydration', '1–2 liters'); nextStep()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">1–2 liters</span>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('hydration', '2–3 liters'); nextStep()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">2–3 liters</span>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('hydration', 'More than 3 liters'); nextStep()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">More than 3 liters</span>
</button>
</div>
</section>

<section className="hide w-full max-w-md flex flex-col fade-enter" id="step-5">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 text-center">What are you hoping to improve most?</h2>
<div className="grid gap-3">
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('goals', 'More energy'); processQuiz()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">More energy</span>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('goals', 'Faster recovery'); processQuiz()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Faster recovery</span>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('goals', 'Better skin &amp; aging'); processQuiz()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Better skin &amp; aging</span>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('goals', 'Better focus'); processQuiz()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Better focus</span>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('goals', 'Stronger immunity'); processQuiz()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Stronger immunity</span>
</button>
<button className="w-full p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-left flex items-center gap-4 group transition-all" onclick="setAnswer('goals', 'Overall wellness'); processQuiz()">
<div className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-blue-500 group-hover:bg-blue-100 flex items-center justify-center"></div>
<span className="text-base font-medium text-slate-700 group-hover:text-blue-700">Overall wellness</span>
</button>
</div>
</section>

<section className="hide w-full flex flex-col items-center justify-center py-20 fade-enter" id="step-6">
<div className="loader mb-8"></div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Analyzing your answers...</h2>
<p className="text-sm text-slate-500">Creating your personalized hydrogen hydration plan</p>
<div className="w-64 h-1 bg-slate-200 rounded-full overflow-hidden mt-8">
<div className="h-full bg-blue-500 rounded-full" id="processing-bar" style={{width: '0%', transition: 'width 3s linear'}}></div>
</div>
</section>

<section className="hide w-full flex flex-col items-center fade-enter w-full max-w-4xl" id="step-7">

<div className="w-full text-center mb-12">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium mb-4">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Analysis Complete
                </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Your Personalized Hydrogen Water Recommendation</h2>
<p className="text-base text-slate-500 max-w-xl mx-auto">Based on your answers, here is how molecular hydrogen can directly target your primary concerns.</p>
</div>

<div className="w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm text-left">
<h3 className="text-lg font-medium text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
                    Your Key Benefits
                </h3>
<div className="grid sm:grid-cols-2 gap-4" id="dynamic-benefits">
<div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Improved Energy Production</p>
<p className="text-xs text-slate-500 mt-1">Combat daily fatigue at the cellular level.</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50">
<iconify-icon className="text-blue-500 mt-0.5" icon="solar:waterdrops-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Better Cellular Hydration</p>
<p className="text-xs text-slate-500 mt-1">Absorb water more efficiently than standard H2O.</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50">
<iconify-icon className="text-emerald-500 mt-0.5" icon="solar:shield-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Reduced Oxidative Stress</p>
<p className="text-xs text-slate-500 mt-1">Neutralize free radicals to protect your cells.</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50">
<iconify-icon className="text-rose-500 mt-0.5" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Faster Recovery</p>
<p className="text-xs text-slate-500 mt-1">Reduce inflammation and bounce back quicker.</p>
</div>
</div>
</div>
</div>

<div className="w-full flex flex-col md:flex-row gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 mb-16 shadow-sm relative overflow-hidden">

<div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
<div className="w-full md:w-1/2 flex justify-center z-10">

<div className="w-full aspect-square max-w-sm rounded-2xl bg-gradient-to-tr from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center relative shadow-sm">
<div className="absolute inset-0 bg-blue-500/5 rounded-2xl"></div>
<div className="flex flex-col items-center gap-4">
<div className="w-16 h-24 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-center relative overflow-hidden">
<div className="absolute top-0 w-full h-1/3 bg-blue-50"></div>
<span className="text-xs font-semibold tracking-tighter text-slate-400 z-10">HWT</span>
</div>
<span className="text-sm font-medium text-slate-500">Hydrogen Water Tablets</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col items-start z-10">
<div className="flex items-center gap-2 mb-3">
<div className="flex text-amber-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500">4.9/5 (2,400+ reviews)</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">The Daily Hydrogen Protocol</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        Hydrogen water delivers molecular hydrogen, a powerful antioxidant that helps reduce oxidative stress, improve cellular function, and boost your daily energy. Simply drop one tablet in your water bottle daily.
                    </p>
<ul className="grid gap-3 mb-8 w-full">
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Boost energy &amp; focus
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Improve workout recovery
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Support skin health &amp; anti-aging
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="18"></iconify-icon> Reduce cellular inflammation
                        </li>
</ul>
<button className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-base font-medium transition-all shadow-sm mb-3">
                        Get Your Hydrogen Tablets
                    </button>
<p className="text-xs text-slate-400 text-center w-full">30-day money-back guarantee. Free shipping.</p>
</div>
</div>

<div className="w-full text-center mb-16 px-4">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-10">How it works</h3>
<div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
<span className="font-medium text-lg">1</span>
</div>
<h4 className="text-base font-medium text-slate-900">Drop &amp; Dissolve</h4>
<p className="text-xs text-slate-500 leading-relaxed">Drop one tablet into 12-16 oz of water. It dissolves in 90 seconds, infusing your water with millions of nano-bubbles.</p>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
<span className="font-medium text-lg">2</span>
</div>
<h4 className="text-base font-medium text-slate-900">Drink &amp; Absorb</h4>
<p className="text-xs text-slate-500 leading-relaxed">Drink immediately. Molecular hydrogen is the smallest molecule in the universe, easily passing into your cells.</p>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
<span className="font-medium text-lg">3</span>
</div>
<h4 className="text-base font-medium text-slate-900">Cellular Restoration</h4>
<p className="text-xs text-slate-500 leading-relaxed">Hydrogen selectively targets and neutralizes toxic free radicals, optimizing your mitochondrial function.</p>
</div>
</div>
</div>

<div className="w-full max-w-2xl mx-auto mb-16">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6 text-center">Frequently Asked Questions</h3>
<div className="grid gap-3">
<div className="border border-slate-200 bg-white rounded-2xl p-5">
<h4 className="text-sm font-medium text-slate-900 mb-2">Does it change the taste of water?</h4>
<p className="text-xs text-slate-500">No, our tablets are unflavored. You might notice a very slight, clean mineral taste, but it largely tastes like normal water.</p>
</div>
<div className="border border-slate-200 bg-white rounded-2xl p-5">
<h4 className="text-sm font-medium text-slate-900 mb-2">When should I drink it?</h4>
<p className="text-xs text-slate-500">For best results, drink one glass first thing in the morning on an empty stomach, or right before/after a workout for recovery.</p>
</div>
<div className="border border-slate-200 bg-white rounded-2xl p-5">
<h4 className="text-sm font-medium text-slate-900 mb-2">Is it backed by research?</h4>
<p className="text-xs text-slate-500">Yes, there are over 1,000 peer-reviewed studies demonstrating the therapeutic potential of molecular hydrogen in over 170 different human and animal disease models.</p>
</div>
</div>
</div>

<div className="w-full max-w-md mx-auto pb-20">
<button className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-base font-medium transition-all shadow-sm">
                    Get Your Hydrogen Tablets Today
                </button>
</div>
</section>
</main>


    </>
  );
}
