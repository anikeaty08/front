import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Elements
        const form = document.getElementById('calcForm');
        const ageInput = document.getElementById('age');
        const ageDisplay = document.getElementById('ageVal');
        const weightInput = document.getElementById('weight');
        const heightInput = document.getElementById('height');
        const activityInput = document.getElementById('activity');
        
        // Output Elements
        const resultEl = document.getElementById('resultCalories');
        const cutEl = document.getElementById('cutCalories');
        const maintainEl = document.getElementById('maintainCalories');
        const bulkEl = document.getElementById('bulkCalories');

        // Helper to format numbers with commas
        const formatNumber = (num) => {
            return Math.round(num).toLocaleString();
        };

        // Calculation Function
        const calculate = () => {
            const age = parseInt(ageInput.value);
            const weight = parseFloat(weightInput.value); // kg
            const height = parseFloat(heightInput.value); // cm
            const activity = parseFloat(activityInput.value);
            
            // Get Gender
            const gender = document.querySelector('input[name="gender"]:checked').value;

            if (!weight || !height || !age) return;

            // Harris-Benedict Formula (Revised)
            let bmr = 0;
            if (gender === 'male') {
                bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            } else {
                bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            }

            const tdee = bmr * activity;

            // Animate Numbers
            resultEl.textContent = formatNumber(tdee);
            maintainEl.textContent = formatNumber(tdee);
            cutEl.textContent = formatNumber(tdee - 500);
            bulkEl.textContent = formatNumber(tdee + 500);
        };

        // Event Listeners
        ageInput.addEventListener('input', (e) => {
            ageDisplay.textContent = e.target.value;
            calculate();
        });

        // Add listeners to all inputs for real-time calculation
        const inputs = [weightInput, heightInput, activityInput];
        inputs.forEach(input => input.addEventListener('input', calculate));
        
        // Radio buttons
        document.querySelectorAll('input[name="gender"]').forEach(radio => {
            radio.addEventListener('change', calculate);
        });

        // Initial Calculation
        calculate();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="flex w-full max-w-5xl mr-auto mb-12 ml-auto justify-center">
<a className="inline-flex items-center justify-center bg-center w-[350px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df11e947-baf0-4439-a4a6-ae54ff25d854_320w.png)] bg-cover rounded-none relative" href="#"></a>
</header>

<main className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<div className="lg:col-span-7 space-y-10">
<div className="space-y-2">
<h1 className="text-3xl lg:text-4xl tracking-tight text-white font-geist font-semibold">Calorie Calculator</h1>
<p className="text-lg text-neutral-500 font-light font-geist">Calculate your optimal daily intake using the Harris-Benedict formula.</p>
</div>
<form className="space-y-8" id="calcForm" onsubmit="return false;">

<div className="space-y-4">
<label className="text-base font-medium text-neutral-400 font-geist">Gender</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="gender" type="radio" value="male"/>
<div className="flex items-center justify-center gap-3 p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-[#EFEB00] peer-checked:border-[#EFEB00]/50 transition-all duration-300 group-hover:border-neutral-700">
<svg className="lucide lucide-move-right w-5 h-5 -rotate-45" data-lucide="move-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg>
<span className="text-lg font-medium font-geist">Male</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="gender" type="radio" value="female"/>
<div className="flex items-center justify-center gap-3 p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-[#EFEB00] peer-checked:border-[#EFEB00]/50 transition-all duration-300 group-hover:border-neutral-700">
<svg className="lucide lucide-move-down-left w-5 h-5" data-lucide="move-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 19H5V13"></path><path d="M19 5L5 19"></path></svg>
<span className="text-lg font-medium font-geist">Female</span>
</div>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-3">
<label className="text-base font-medium text-neutral-400 flex justify-between">
<span className="font-geist">Age</span>
<span className="text-white font-geist"><span className="font-geist" id="ageVal">40</span> years</span>
</label>
<input className="w-full bg-transparent appearance-none focus:outline-none" id="age" max="80" min="15" type="range" value="25"/>
</div>

<div className="space-y-3 flex flex-col justify-end">

</div>

<div className="space-y-2 group">
<label className="text-base font-medium text-neutral-400 group-focus-within:text-[#EFEB00] transition-colors font-geist">Weight (kg)</label>
<div className="relative">
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:border-[#EFEB00] focus:ring-1 focus:ring-[#EFEB00] transition-all placeholder-neutral-600" id="weight" type="number" value="75"/>
<svg className="lucide lucide-weight absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600 w-5 h-5" data-lucide="weight" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="3"></circle><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"></path></svg>
</div>
</div>

<div className="space-y-2 group">
<label className="text-base font-medium text-neutral-400 group-focus-within:text-[#EFEB00] transition-colors font-geist">Height (cm)</label>
<div className="relative">
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:border-[#EFEB00] focus:ring-1 focus:ring-[#EFEB00] transition-all placeholder-neutral-600" id="height" type="number" value="180"/>
<svg className="lucide lucide-ruler absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600 w-5 h-5" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
</div>
</div>
</div>

<div className="space-y-4">
<label className="text-base font-medium text-neutral-400 font-geist">Activity Level</label>
<div className="relative">
<select className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-4 text-lg text-white appearance-none focus:outline-none focus:border-[#EFEB00] transition-all cursor-pointer" id="activity">
<option className="font-geist" value="1.2">Sedentary (Little to no exercise)</option>
<option className="font-geist" value="1.375">Lightly Active (1-3 days/week)</option>
<option className="font-geist" selected="" value="1.55">Moderately Active (3-5 days/week)</option>
<option className="font-geist" value="1.725">Very Active (6-7 days/week)</option>
<option className="font-geist" value="1.9">Extra Active (Physical job or training)</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</form>
</div>

<div className="lg:col-span-5">
<div className="sticky top-12 space-y-6">

<div className="w-full bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl p-8 relative overflow-hidden group">

<div className="absolute -top-24 -right-24 w-48 h-48 bg-[#EFEB00] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
<div className="relative z-10">
<h2 className="text-lg font-medium text-neutral-400 mb-2 font-geist">Daily Maintenance</h2>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-6xl text-white tracking-tighter font-geist font-semibold" id="resultCalories">2,813</span>
<span className="text-xl text-[#EFEB00] font-geist">kcal</span>
</div>
<div className="w-full h-px bg-neutral-800 mb-6"></div>
<div className="space-y-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-red-500/10 text-red-400">
<svg className="lucide lucide-trending-down w-5 h-5" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
</div>
<span className="text-lg text-neutral-300 font-geist">Cut</span>
</div>
<span className="text-xl font-medium text-white font-geist" id="cutCalories">2,313</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
<svg className="lucide lucide-minus w-5 h-5" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
<span className="text-lg text-neutral-300 font-geist">Maintain</span>
</div>
<span className="text-xl font-medium text-white font-geist" id="maintainCalories">2,813</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-[#EFEB00]/10 text-[#EFEB00]">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-lg text-neutral-300 font-geist">Bulk</span>
</div>
<span className="text-xl font-medium text-white font-geist" id="bulkCalories">3,313</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 flex gap-4 items-start">
<svg className="lucide lucide-info w-6 h-6 text-neutral-500 mt-1 shrink-0" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<p className="text-base text-neutral-400 leading-relaxed font-geist">
                        These values are estimates based on the Harris-Benedict formula. Adjust your intake based on your progress over 2-3 weeks.
                    </p>
</div>
</div>
</div>
</main>


    </>
  );
}
