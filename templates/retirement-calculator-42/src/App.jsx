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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



    lucide.createIcons();

    // Spotlight Effect for Cards
    document.addEventListener("mousemove", (e) => {
        document.querySelectorAll(".spotlight-card").forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });

    // Scroll Animation
    document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scroll-enter-active");
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".scroll-enter").forEach(el => observer.observe(el));
        
        // Initial calc & Sync
        document.querySelectorAll('.range-input').forEach(range => {
            syncInput(range, range.nextElementSibling ? range.nextElementSibling.id : range.previousElementSibling?.id || 'currentAge', range.previousElementSibling.id);
        });
        calculate();
    });

    // State
    let state = {
        dependents: [],
        retirementType: 'complete'
    };

    // Range Slider Sync
    window.syncInput = function(source, targetId, progressId) {
        const target = document.getElementById(targetId);
        const progress = document.getElementById(progressId);
        
        // Update number input if source is range, or range if source is number
        if(source.type === 'range') {
            target.value = source.value;
        } else {
            // Find the range input sibling/parent
            const range = source.parentElement.parentElement.querySelector('input[type="range"]');
            if(range) range.value = source.value;
        }

        // Update Progress Bar
        const rangeInput = source.type === 'range' ? source : source.parentElement.parentElement.querySelector('input[type="range"]');
        if (rangeInput && progress) {
            const min = rangeInput.min;
            const max = rangeInput.max;
            const val = rangeInput.value;
            const percent = ((val - min) / (max - min)) * 100;
            progress.style.width = percent + "%";
        }
        
        calculate();
    }

    // Input Listeners for Number inputs directly
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', function() {
            // Find associated range if exists
            const wrapper = this.closest('.spotlight-card');
            if(wrapper) {
                const range = wrapper.querySelector('input[type="range"]');
                const progress = wrapper.querySelector('.range-progress');
                if(range && progress) {
                    range.value = this.value;
                    const percent = ((this.value - range.min) / (range.max - range.min)) * 100;
                    progress.style.width = percent + "%";
                }
            }
            calculate();
        });
    });

    // UI Helpers
    function setRetirementType(type) {
        state.retirementType = type;
        const btnComplete = document.getElementById('btnComplete');
        const btnPhased = document.getElementById('btnPhased');
        const phasedOptions = document.getElementById('phasedOptions');
        const toggleBg = document.getElementById('toggleBg');

        if (type === 'complete') {
            btnComplete.classList.replace('text-slate-500', 'text-slate-900');
            btnPhased.classList.replace('text-slate-900', 'text-slate-500');
            toggleBg.style.transform = 'translateX(0%)';
            phasedOptions.style.maxHeight = '0px';
            phasedOptions.classList.add('hidden');
        } else {
            btnPhased.classList.replace('text-slate-500', 'text-slate-900');
            btnComplete.classList.replace('text-slate-900', 'text-slate-500');
            toggleBg.style.transform = 'translateX(100%)';
            phasedOptions.classList.remove('hidden');
            setTimeout(() => { phasedOptions.style.maxHeight = '500px'; }, 10);
        }
        calculate();
    }

    function addDependent() {
        if (state.dependents.length >= 5) return;
        state.dependents.push({ type: 'Child', age: 5 });
        renderDependents();
        calculate();
    }

    function removeDependent(index) {
        state.dependents.splice(index, 1);
        renderDependents();
        calculate();
    }

    function updateDependent(index, field, value) {
        state.dependents[index][field] = value;
        calculate();
    }

    function renderDependents() {
        const container = document.getElementById('dependentsList');
        const msg = document.getElementById('noDependentsMsg');
        
        if (state.dependents.length === 0) {
            msg.style.display = 'block';
            container.innerHTML = '';
            container.appendChild(msg);
            return;
        }
        
        msg.style.display = 'none';
        container.innerHTML = '';

        state.dependents.forEach((dep, idx) => {
            const div = document.createElement('div');
            div.className = 'flex gap-3 items-center bg-white p-3 rounded-lg border border-slate-200 shadow-sm animate-fade-in-down transition-all group';
            div.innerHTML = `
                <div class="p-2 bg-slate-100 rounded-md text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div class="flex-1 grid grid-cols-2 gap-3">
                    <select onchange="updateDependent(${idx}, 'type', this.value)" class="bg-transparent text-sm border-b border-slate-200 py-1 outline-none text-slate-900 font-medium cursor-pointer focus:border-slate-900 transition-colors">
                        <option value="Spouse" ${dep.type === 'Spouse' ? 'selected' : ''}>Spouse</option>
                        <option value="Child" ${dep.type === 'Child' ? 'selected' : ''}>Child</option>
                        <option value="Parent" ${dep.type === 'Parent' ? 'selected' : ''}>Parent</option>
                    </select>
                    <div class="relative">
                        <input type="number" inputmode="numeric" value="${dep.age}" onchange="updateDependent(${idx}, 'age', parseInt(this.value))" class="w-full bg-transparent text-sm border-b border-slate-200 py-1 outline-none text-slate-900 font-medium focus:border-slate-900 transition-colors" placeholder="Age">
                        <span class="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none">Yrs</span>
                    </div>
                </div>
                <button onclick="removeDependent(${idx})" class="text-slate-300 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            `;
            container.appendChild(div);
        });
    }

    // Calculation Logic
    function calculate() {
        const currentAge = parseInt(document.getElementById('currentAge').value) || 30;
        const retireAge = parseInt(document.getElementById('retireAge').value) || 60;
        const currentIncome = parseFloat(document.getElementById('currentIncome').value) || 0;
        const locationFactor = parseFloat(document.querySelector('input[name="location"]:checked').value);
        
        const userMortality = 85; 
        const inflationAvg = 0.05; 
        const portfolioReturn = 0.09; 
        
        const monthlyExpenseCurrent = currentIncome * 0.6; 
        
        const yearsToRetire = Math.max(0, retireAge - currentAge);
        const yearsInRetirement = Math.max(0, userMortality - retireAge);
        
        // Update Target Year Text
        const today = new Date();
        document.getElementById('targetYearDisplay').innerText = today.getFullYear() + yearsToRetire;

        const futureMonthlyExpense = monthlyExpenseCurrent * Math.pow(1 + inflationAvg, yearsToRetire) * locationFactor;
        const futureAnnualExpense = futureMonthlyExpense * 12;

        const realRate = (1 + portfolioReturn) / (1 + inflationAvg) - 1;
        
        let corpusNeeded = 0;
        if (realRate !== 0) {
            corpusNeeded = futureAnnualExpense * ((1 - Math.pow(1 + realRate, -yearsInRetirement)) / realRate) * (1 + realRate);
        } else {
            corpusNeeded = futureAnnualExpense * yearsInRetirement;
        }

        // Phased Retirement Adjustment
        if (state.retirementType === 'phased') {
            const phasedYears = parseInt(document.getElementById('phasedYears').value) || 0;
            const phasedPercent = (parseFloat(document.getElementById('phasedSalaryPercent').value) || 0) / 100;
            
            const salaryAtRetirement = currentIncome * 12 * Math.pow(1.08, yearsToRetire); 
            const initialPhasedAnnualIncome = salaryAtRetirement * phasedPercent;
            
            let totalPhasedPV = 0;
            for(let i = 0; i < phasedYears; i++) {
                const incomeYearI = initialPhasedAnnualIncome * Math.pow(1.05, i); 
                const pvFactor = Math.pow(1 + portfolioReturn, i); 
                totalPhasedPV += incomeYearI / pvFactor;
            }
            corpusNeeded -= totalPhasedPV;
        }

        // Dependents Logic
        state.dependents.forEach(dep => {
            const depAgeAtRetirement = dep.age + yearsToRetire;
            if (dep.type === 'Child' && depAgeAtRetirement < 22) {
                const remainingYears = 22 - depAgeAtRetirement;
                const currentEduCost = 500000; 
                const futureEduCost = currentEduCost * Math.pow(1 + 0.08, yearsToRetire); 
                corpusNeeded += (futureEduCost * remainingYears); 
            }
        });

        const inCrores = Math.max(0, corpusNeeded / 10000000).toFixed(2);
        const fmtExpense = Math.round(futureMonthlyExpense).toLocaleString('en-IN');
        
        // Animation & Updates
        const corpusEl = document.getElementById('resultCorpus');
        corpusEl.classList.remove('value-pulse');
        void corpusEl.offsetWidth; 
        corpusEl.classList.add('value-pulse');

        animateValue(corpusEl, parseFloat(corpusEl.innerText.replace(/[^\d.]/g, '')) || 0, inCrores, 600);
        document.getElementById('futureExpense').innerText = `₹${fmtExpense}`;
        document.getElementById('yearsInRetirement').innerText = `${yearsInRetirement} Yrs`;
        
        // Visual Progress Bar update (mock)
        document.getElementById('progressBar').style.width = '100%';
        setTimeout(() => { document.getElementById('progressBar').style.width = '100%'; }, 100);

        // Listeners for Radio updates
        document.querySelectorAll('input[name="location"]').forEach(input => {
             input.removeEventListener('change', calculate);
             input.addEventListener('change', calculate);
        });
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);
            const val = (ease * (end - start) + start).toFixed(2);
            obj.innerHTML = `₹${val}`;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob"></div>
<div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-amber-50/60 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl md:text-2xl brand-font font-medium tracking-tight text-slate-900 flex items-center gap-2 group" href="#">
<span className="bg-slate-900 text-white w-6 h-6 flex items-center justify-center text-sm font-serif italic rounded-sm transition-transform group-hover:rotate-12">1</span> FINANCE
            </a>
<div className="hidden md:flex items-center gap-6 pl-8 border-l border-slate-200 h-6">
<a className="text-xs font-medium uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors" href="#">Advisory</a>
<a className="text-xs font-medium uppercase tracking-wider text-slate-900 transition-colors relative after:content-[''] after:absolute after:-bottom-7 after:left-0 after:w-full after:h-0.5 after:bg-slate-900" href="#">Calculators</a>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors">Log in</button>
<button className="bg-slate-900 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-95 hover:shadow-xl hover:shadow-slate-900/20">
                Get Your Plan
            </button>
</div>
</div>
</nav>
<main className="pt-28 md:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-4xl mx-auto mb-16 md:mb-20 scroll-enter text-center md:text-left">
<div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up">
<span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">Free Tool</span>
<div className="flex items-center gap-1 bg-white/50 px-2 py-1 rounded-full border border-slate-100">
<div className="flex text-amber-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-slate-500 text-[10px] font-semibold ml-1">Trusted by 2,400+</span>
</div>
</div>
<h1 className="text-5xl md:text-7xl brand-font font-light text-slate-900 mb-6 leading-[1.05] tracking-tight">
            Design your retirement, <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400 italic font-normal">on your own terms.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-2xl font-light mx-auto md:mx-0">
            Stop guessing. Our engine models inflation, longevity risk, and lifestyle costs to build a plan that actually works.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24 items-start">

<div className="lg:col-span-7 space-y-10 scroll-enter delay-100">

<div className="relative group">
<div className="absolute -left-4 top-0 bottom-0 w-1 bg-slate-100 rounded-full hidden md:block group-hover:bg-slate-200 transition-colors"></div>
<div className="flex items-center gap-3 mb-6">
<span className="flex items-center justify-center w-8 h-8 text-xs font-bold bg-white border border-slate-200 text-slate-900 rounded-full shadow-sm z-10">1</span>
<h3 className="text-xl brand-font text-slate-900">Timeline &amp; Cashflow</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-0 md:pl-8">

<div className="space-y-4">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex justify-between items-center">
                            Current Age
                        </label>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all focus-within:ring-2 focus-within:ring-slate-900/5 focus-within:border-slate-400 spotlight-card relative overflow-hidden">
<div className="flex items-baseline justify-between mb-4">
<input className="bg-transparent text-3xl brand-font font-medium text-slate-900 outline-none w-20 p-0 m-0 z-10 relative" id="currentAge" max="80" min="18" type="number" value="30"/>
<span className="text-sm font-medium text-slate-400">Years old</span>
</div>

<div className="range-wrapper">
<div className="range-progress" id="ageProgress" style={{width: '30%'}}></div>
<input className="range-input" max="80" min="18" oninput="syncInput(this, 'currentAge', 'ageProgress')" type="range" value="30"/>
</div>
</div>
</div>

<div className="space-y-4">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex justify-between items-center">
                            Retirement Age
                        </label>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all focus-within:ring-2 focus-within:ring-slate-900/5 focus-within:border-slate-400 spotlight-card relative overflow-hidden">
<div className="flex items-baseline justify-between mb-4">
<input className="bg-transparent text-3xl brand-font font-medium text-slate-900 outline-none w-20 p-0 m-0 z-10 relative" id="retireAge" max="90" min="40" type="number" value="60"/>
<span className="text-sm font-medium text-slate-400">Target Age</span>
</div>

<div className="range-wrapper">
<div className="range-progress" id="retireProgress" style={{width: '50%'}}></div>
<input className="range-input" max="90" min="30" oninput="syncInput(this, 'retireAge', 'retireProgress')" type="range" value="60"/>
</div>
</div>
</div>

<div className="space-y-4 md:col-span-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex justify-between">
                            Monthly Income (Pre-Tax)
                            <span className="flex items-center gap-1 text-[10px] text-emerald-700 font-medium bg-emerald-50 border border-emerald-100 px-2 rounded-full">
<i className="w-2.5 h-2.5" data-lucide="lock"></i> Private
                            </span>
</label>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm transition-all focus-within:ring-2 focus-within:ring-slate-900/5 focus-within:border-slate-400 spotlight-card relative overflow-hidden">
<div className="flex items-center gap-2">
<span className="text-slate-400 brand-font text-2xl font-light">₹</span>
<input className="w-full bg-transparent text-2xl brand-font font-medium text-slate-900 outline-none placeholder:text-slate-300 z-10 relative" id="currentIncome" step="5000" type="number" value="150000"/>
</div>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-4 top-0 bottom-0 w-1 bg-slate-100 rounded-full hidden md:block group-hover:bg-slate-200 transition-colors"></div>
<div className="flex items-center gap-3 mb-6">
<span className="flex items-center justify-center w-8 h-8 text-xs font-bold bg-white border border-slate-200 text-slate-900 rounded-full shadow-sm z-10">2</span>
<h3 className="text-xl brand-font text-slate-900">Future Lifestyle</h3>
</div>
<div className="pl-0 md:pl-8 space-y-8">
<div className="space-y-4">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Desired Location</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<label className="cursor-pointer group select-none">
<input checked="" className="custom-radio peer sr-only" name="location" type="radio" value="1"/>
<div className="h-full p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all text-center relative overflow-hidden bg-white group-hover:shadow-md">
<div className="w-4 h-4 border border-slate-300 rounded-full mx-auto mb-3 radio-indicator transition-all"></div>
<i className="w-6 h-6 mx-auto mb-2 text-slate-400 peer-checked:text-slate-900 transition-colors" data-lucide="building-2"></i>
<span className="block text-sm font-semibold text-slate-900">Tier 1 City</span>
<span className="text-xs text-slate-400 mt-1 block font-medium">Metro Life</span>
</div>
</label>
<label className="cursor-pointer group select-none">
<input className="custom-radio peer sr-only" name="location" type="radio" value="0.85"/>
<div className="h-full p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all text-center relative overflow-hidden bg-white group-hover:shadow-md">
<div className="w-4 h-4 border border-slate-300 rounded-full mx-auto mb-3 radio-indicator transition-all"></div>
<i className="w-6 h-6 mx-auto mb-2 text-slate-400 peer-checked:text-slate-900 transition-colors" data-lucide="home"></i>
<span className="block text-sm font-semibold text-slate-900">Tier 2 City</span>
<span className="text-xs text-slate-400 mt-1 block font-medium">Balanced</span>
</div>
</label>
<label className="cursor-pointer group select-none">
<input className="custom-radio peer sr-only" name="location" type="radio" value="0.9"/>
<div className="h-full p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all text-center relative overflow-hidden bg-white group-hover:shadow-md">
<div className="w-4 h-4 border border-slate-300 rounded-full mx-auto mb-3 radio-indicator transition-all"></div>
<i className="w-6 h-6 mx-auto mb-2 text-slate-400 peer-checked:text-slate-900 transition-colors" data-lucide="sun"></i>
<span className="block text-sm font-semibold text-slate-900">Scenic Town</span>
<span className="text-xs text-slate-400 mt-1 block font-medium">Relaxed</span>
</div>
</label>
</div>
</div>
<div className="bg-slate-50 p-1 rounded-lg inline-flex relative border border-slate-200/60">
<div className="absolute inset-0.5 w-1/2 bg-white rounded shadow-sm transition-transform duration-300 ease-spring" id="toggleBg"></div>
<button className="relative z-10 w-32 py-2 text-xs font-semibold rounded-md text-slate-900 transition-colors" id="btnComplete" onclick="setRetirementType('complete')">Complete</button>
<button className="relative z-10 w-32 py-2 text-xs font-semibold rounded-md text-slate-500 transition-colors" id="btnPhased" onclick="setRetirementType('phased')">Phased</button>
</div>
<div className="hidden overflow-hidden transition-all duration-500 ease-in-out" id="phasedOptions">
<div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-5 animate-fade-in-down">
<div className="flex gap-4">
<div className="mt-1 bg-blue-50 text-blue-600 p-1.5 rounded-lg shrink-0 h-fit">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900">Semi-Retirement Bonus</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                        Working part-time reduces the immediate pressure on your corpus. We assume a 5% growth on this income.
                                    </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500">Years of Part-time Work</label>
<div className="relative bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
<input className="w-full bg-transparent px-4 py-3 text-sm focus:outline-none rounded-lg font-medium text-slate-900" id="phasedYears" type="number" value="5"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold">YRS</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500">% of Last Salary</label>
<div className="relative bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
<input className="w-full bg-transparent px-4 py-3 text-sm focus:outline-none rounded-lg font-medium text-slate-900" id="phasedSalaryPercent" type="number" value="40"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold">%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-4 top-0 bottom-0 w-1 bg-slate-100 rounded-full hidden md:block group-hover:bg-slate-200 transition-colors"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 text-xs font-bold bg-white border border-slate-200 text-slate-900 rounded-full shadow-sm z-10">3</span>
<h3 className="text-xl brand-font text-slate-900">Dependents</h3>
</div>
<button className="group text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 px-4 py-2 rounded-lg transition-all active:scale-95 flex items-center gap-2" onclick="addDependent()">
                        Add Dependent <span className="bg-emerald-200 text-emerald-800 rounded px-1 py-0.5">+</span>
</button>
</div>
<div className="pl-0 md:pl-8">
<div className="space-y-3" id="dependentsList">

<div className="text-center py-10 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors" id="noDependentsMsg">
<i className="w-8 h-8 mx-auto text-slate-300 mb-2" data-lucide="users"></i>
<p className="text-sm text-slate-500 font-medium">Single? Or planning for two?</p>
<p className="text-xs text-slate-400 mt-1">Spouse expenses are included by default.</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative scroll-enter delay-200 mt-8 lg:mt-0">
<div className="lg:sticky lg:top-28 space-y-6">

<div className="relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-[#0B1121] text-white p-6 md:p-8 rounded-2xl shadow-2xl overflow-hidden border border-slate-800/50">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<div>
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<h2 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Freedom Number</h2>
</div>
<p className="text-[10px] text-slate-500 font-mono opacity-80">INFLATION ADJUSTED (6%)</p>
</div>
<i className="text-slate-600 w-6 h-6" data-lucide="infinity"></i>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-5xl md:text-6xl brand-font text-white tracking-tight font-light" id="resultCorpus">₹0</span>
<span className="text-slate-400 text-2xl md:text-3xl font-light italic">Cr</span>
</div>
<div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-white w-[0%] transition-all duration-1000 ease-out" id="progressBar"></div>
</div>
<p className="text-[10px] text-emerald-400 mt-2 text-right font-mono">TARGET YEAR: <span id="targetYearDisplay">2055</span></p>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6 mb-8">
<div className="group/item">
<span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Monthly Expense</span>
<span className="font-mono text-emerald-200 text-lg group-hover/item:text-white transition-colors" id="futureExpense">₹0</span>
<span className="text-[10px] text-slate-600 block">(Future Value)</span>
</div>
<div className="group/item text-right">
<span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Duration</span>
<span className="font-mono text-white text-lg" id="yearsInRetirement">20 Yrs</span>
<span className="text-[10px] text-slate-600 block">Until Age 85</span>
</div>
</div>
<button className="w-full bg-white hover:bg-emerald-50 text-slate-900 font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98] group/btn relative overflow-hidden">
<span className="relative z-10">Generate Detailed Report</span>
<i className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-amber-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>
<div className="relative z-10 flex gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center shrink-0 text-amber-700 shadow-sm">
<i className="w-5 h-5" data-lucide="shield-alert"></i>
</div>
<div>
<h3 className="brand-font text-lg text-slate-900 mb-1">Inflation is silent.</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-3">
                                90% of generic plans fail to account for medical inflation which grows at 14% annually in India.
                            </p>
<a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-amber-600 transition-colors border-b border-slate-200 pb-0.5 hover:border-amber-600" href="#">
                                Talk to an Expert <i className="w-3 h-3 ml-1" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-200 pt-16 mb-16 scroll-enter delay-300">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="col-span-1">
<h3 className="text-2xl brand-font text-slate-900 mb-4">The Math Behind The Magic</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                    We don't use simple linear projections. Our model uses a declining inflation curve and weighted asset allocation based on historical NIFTY 50 &amp; Gold data.
                </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-50 inline-block px-3 py-1.5 rounded-full border border-slate-100">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Updated for FY 2024-25
                </div>
</div>
<div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<i className="w-6 h-6 text-slate-900 mb-3 group-hover:scale-110 transition-transform origin-left" data-lucide="trending-up"></i>
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Inflation</span>
<p className="text-sm font-medium text-slate-900">Dynamic Tapering</p>
<p className="text-[10px] text-slate-400 mt-1">Starts at 6%, settles at 4%</p>
</div>
<div className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<i className="w-6 h-6 text-slate-900 mb-3 group-hover:scale-110 transition-transform origin-left" data-lucide="pie-chart"></i>
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Allocation</span>
<p className="text-sm font-medium text-slate-900">Balanced Portfolio</p>
<p className="text-[10px] text-slate-400 mt-1">50% Equity, 30% Debt, 20% Gold</p>
</div>
<div className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<i className="w-6 h-6 text-slate-900 mb-3 group-hover:scale-110 transition-transform origin-left" data-lucide="heart-pulse"></i>
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Longevity</span>
<p className="text-sm font-medium text-slate-900">Conservative Cap</p>
<p className="text-[10px] text-slate-400 mt-1">Modeled until age 85</p>
</div>
</div>
</div>
</div>
</main>
<footer className="bg-white border-t border-slate-200 py-16 relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-slate-100 mb-8">
<a className="text-xl brand-font font-medium tracking-tight text-slate-900 flex items-center gap-2" href="#">
<span className="bg-slate-900 text-white w-6 h-6 flex items-center justify-center text-sm font-serif italic rounded-sm">1</span> FINANCE
            </a>
<div className="flex gap-4 items-center bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
<i className="w-3 h-3 text-emerald-600" data-lucide="lock"></i>
<span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">256-bit Encryption</span>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-400 text-center md:text-left">© 2025 1 Finance Private Limited. SEBI RIA No: INA000017523. <br/> Investments are subject to market risks. Past performance is not indicative of future returns.</p>
</div>
</div>
</footer>


    </>
  );
}
