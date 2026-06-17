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



        // DOM Elements
        const heightRange = document.getElementById('heightRange');
        const heightDisplay = document.getElementById('heightDisplay');
        const weightRange = document.getElementById('weightRange');
        const weightDisplay = document.getElementById('weightDisplay');
        const ageInput = document.getElementById('ageInput');
        const bmiValueEl = document.getElementById('bmiValue');
        const bmiCircle = document.getElementById('bmiCircle');
        const statusText = document.getElementById('statusText');
        const statusBadge = document.getElementById('statusBadge');
        const recommendationText = document.getElementById('recommendationText');

        // Initial Logic
        function updateTime() {
            const now = new Date();
            document.getElementById('date').textContent = now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
        }
        updateTime();

        function adjustAge(delta) {
            let val = parseInt(ageInput.value) || 25;
            val = Math.max(1, Math.min(120, val + delta));
            ageInput.value = val;
            calculateBMI();
        }

        function calculateBMI() {
            const heightCm = parseInt(heightRange.value);
            const weightKg = parseInt(weightRange.value);

            // Update displays
            heightDisplay.textContent = heightCm;
            weightDisplay.textContent = weightKg;

            // Calculation
            const heightM = heightCm / 100;
            const bmi = (weightKg / (heightM * heightM)).toFixed(1);

            // Update Result
            bmiValueEl.textContent = bmi;

            // Circle Progress (Circumference ~ 552)
            // Normal range center is roughly 22. Let's map 10 to 40.
            const minBMI = 10;
            const maxBMI = 40;
            const percentage = Math.min(1, Math.max(0, (bmi - minBMI) / (maxBMI - minBMI)));
            const dashOffset = 552 - (552 * percentage);
            bmiCircle.style.strokeDashoffset = dashOffset;

            // Status Logic
            let category = '';
            let colorClass = '';
            let dotClass = '';
            let textClass = '';
            let rec = '';

            if (bmi < 18.5) {
                category = 'Underweight';
                colorClass = 'bg-blue-50 border-blue-100';
                textClass = 'text-blue-700';
                dotClass = 'bg-blue-500';
                bmiCircle.style.stroke = '#3b82f6';
                rec = 'You are in the underweight range. Consider consulting a nutritionist to create a balanced diet plan for healthy weight gain.';
            } else if (bmi >= 18.5 && bmi < 25) {
                category = 'Normal Weight';
                colorClass = 'bg-green-50 border-green-100';
                textClass = 'text-green-700';
                dotClass = 'bg-green-500';
                bmiCircle.style.stroke = '#22c55e';
                rec = 'Great job! You are in the healthy weight range. Maintain your balanced diet and regular physical activity.';
            } else if (bmi >= 25 && bmi < 30) {
                category = 'Overweight';
                colorClass = 'bg-orange-50 border-orange-100';
                textClass = 'text-orange-700';
                dotClass = 'bg-orange-500';
                bmiCircle.style.stroke = '#f97316';
                rec = 'You are in the overweight range. Incorporating more cardio exercises and watching caloric intake could help.';
            } else {
                category = 'Obese';
                colorClass = 'bg-red-50 border-red-100';
                textClass = 'text-red-700';
                dotClass = 'bg-red-500';
                bmiCircle.style.stroke = '#ef4444';
                rec = 'You are in the obese range. It is advisable to consult a healthcare provider for a personalized health plan.';
            }

            statusText.textContent = category;
            statusBadge.className = `mb-8 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 border ${colorClass} ${textClass}`;
            statusBadge.querySelector('div').className = `w-2 h-2 rounded-full ${dotClass}`;
            recommendationText.textContent = rec;
        }

        function resetCalculator() {
            heightRange.value = 175;
            weightRange.value = 70;
            ageInput.value = 25;
            calculateBMI();
        }

        // Event Listeners
        heightRange.addEventListener('input', calculateBMI);
        weightRange.addEventListener('input', calculateBMI);
        ageInput.addEventListener('input', calculateBMI);

        // Init
        calculateBMI();

    
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
      

<aside className="w-16 lg:w-64 bg-white border-r border-gray-200 flex flex-col justify-between flex-shrink-0 transition-all duration-300 z-20">
<div>
<div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gray-900 text-white rounded flex items-center justify-center font-medium tracking-tighter">
                        H
                    </div>
<span className="hidden lg:block font-medium tracking-tight text-lg text-gray-900">HEALTHOS</span>
</div>
</div>
<nav className="p-2 lg:p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 bg-gray-100 text-gray-900 rounded-md group transition-colors" href="#">
<iconify-icon icon="solar:calculator-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">BMI Calculator</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Vitals</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Patients</span>
</a>
</nav>
</div>
<div className="p-2 lg:p-4 border-t border-gray-100">
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Settings</span>
</a>
<div className="mt-2 flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden ring-1 ring-gray-100">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
<div className="hidden lg:block">
<p className="text-xs font-medium text-gray-900">Dr. Morgan</p>
<p className="text-xs text-gray-500">General Practice</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">

<div className="flex-1 flex flex-col h-full bg-gray-50/50 overflow-y-auto">

<header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shrink-0 sticky top-0 z-10">
<div className="flex flex-col">
<h1 className="text-sm font-semibold text-gray-900 tracking-tight">Body Mass Index</h1>
<span className="text-xs text-gray-500">Calculate standard BMI metrics</span>
</div>
<div className="flex items-center gap-4 text-sm text-gray-500">
<div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
<span id="date">Oct 24, 2023</span>
</div>
</div>
</header>
<div className="p-6 md:p-10 max-w-3xl mx-auto w-full">
<div className="space-y-8">

<div className="space-y-3">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Gender</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer group relative">
<input checked="" className="peer sr-only" name="gender" type="radio" value="male"/>
<div className="p-4 rounded-lg border border-gray-200 bg-white flex items-center gap-4 hover:border-gray-300 peer-checked:border-gray-900 peer-checked:bg-gray-50 transition-all">
<div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center peer-checked:bg-gray-900 peer-checked:text-white transition-colors">
<iconify-icon icon="solar:man-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Male</span>
</div>
<div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 transition-opacity text-gray-900">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="gender" type="radio" value="female"/>
<div className="p-4 rounded-lg border border-gray-200 bg-white flex items-center gap-4 hover:border-gray-300 peer-checked:border-gray-900 peer-checked:bg-gray-50 transition-all">
<div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center peer-checked:bg-gray-900 peer-checked:text-white transition-colors">
<iconify-icon icon="solar:woman-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Female</span>
</div>
<div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 transition-opacity text-gray-900">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
</div>
</label>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:ruler-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Height</span>
</div>
<div className="flex items-baseline gap-1 bg-gray-50 border border-gray-200 rounded px-3 py-1">
<span className="text-lg font-semibold text-gray-900" id="heightDisplay">175</span>
<span className="text-xs text-gray-500">cm</span>
</div>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="heightRange" max="250" min="100" type="range" value="175"/>
<div className="flex justify-between text-xs text-gray-400 mt-2">
<span>100cm</span>
<span>250cm</span>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:dumbbell-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Weight</span>
</div>
<div className="flex items-baseline gap-1 bg-gray-50 border border-gray-200 rounded px-3 py-1">
<span className="text-lg font-semibold text-gray-900" id="weightDisplay">70</span>
<span className="text-xs text-gray-500">kg</span>
</div>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="weightRange" max="200" min="30" type="range" value="70"/>
<div className="flex justify-between text-xs text-gray-400 mt-2">
<span>30kg</span>
<span>200kg</span>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:calendar-date-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Age</span>
</div>
<div className="flex items-center border border-gray-200 rounded-md overflow-hidden w-24">
<button className="px-3 py-2 hover:bg-gray-50 border-r border-gray-200 text-gray-500" onclick="adjustAge(-1)">
<iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
<input className="w-full text-center text-sm font-medium border-none focus:ring-0 p-0 text-gray-900 outline-none h-full" id="ageInput" type="number" value="25"/>
<button className="px-3 py-2 hover:bg-gray-50 border-l border-gray-200 text-gray-500" onclick="adjustAge(1)">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-96 bg-white border-l border-gray-200 flex flex-col z-10 shadow-xl md:shadow-none">
<div className="p-6 border-b border-gray-200">
<h2 className="text-base font-medium tracking-tight text-gray-900">Analysis Result</h2>
</div>
<div className="flex-1 overflow-y-auto p-6 flex flex-col items-center">

<div className="relative w-48 h-48 mb-8 flex items-center justify-center">

<svg className="w-full h-full transform -rotate-90">
<circle cx="96" cy="96" fill="none" r="88" stroke="#f3f4f6" strokeWidth="12"></circle>
<circle className="transition-all duration-700 ease-out" cx="96" cy="96" fill="none" id="bmiCircle" r="88" stroke="#111827" stroke-dasharray="552" stroke-dashoffset="400" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-4xl font-semibold tracking-tighter text-gray-900" id="bmiValue">22.9</span>
<span className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">BMI Score</span>
</div>
</div>

<div className="mb-8 px-4 py-1.5 bg-green-50 text-green-700 border border-green-100 rounded-full text-sm font-medium flex items-center gap-2" id="statusBadge">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span id="statusText">Normal Weight</span>
</div>

<div className="w-full space-y-4 mb-8">
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500">Underweight</span>
<span className="text-gray-900 font-medium">&lt; 18.5</span>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 w-1/4"></div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500">Normal</span>
<span className="text-gray-900 font-medium">18.5 - 24.9</span>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-full"></div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500">Overweight</span>
<span className="text-gray-900 font-medium">25 - 29.9</span>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-orange-400 w-3/4"></div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-gray-500">Obese</span>
<span className="text-gray-900 font-medium">&gt; 30</span>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-1/2"></div>
</div>
</div>

<div className="w-full bg-gray-50 rounded-lg p-4 border border-gray-100">
<div className="flex items-start gap-3">
<iconify-icon className="text-gray-400 mt-0.5" icon="solar:info-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-1">Recommendation</h4>
<p className="text-xs text-gray-500 leading-relaxed" id="recommendationText">
                                Maintain a balanced diet and regular exercise to keep your BMI in the healthy range.
                            </p>
</div>
</div>
</div>
</div>

<div className="p-5 border-t border-gray-200 bg-gray-50/50">
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center py-2.5 bg-white border border-gray-200 rounded text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all text-xs font-medium" onclick="resetCalculator()">
                        Reset
                    </button>
<button className="flex items-center justify-center py-2.5 bg-gray-900 text-white rounded hover:bg-gray-800 transition-all text-xs font-medium gap-2">
<iconify-icon icon="solar:printer-linear" width="16"></iconify-icon>
                        Save Report
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
