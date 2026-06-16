import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Data for dynamic fields
    const freqOptions = ["0","1–2","3–4","5–7"];
    const functionOptions = ["Excellent", "Good", "Fair", "Poor"];
    const intentOptions = ["Yes", "No", "Not sure"];
    const sleepOptions = ["Less than 5", "5–6", "7–8", "More than 8"];
    const tobaccoOptions = ["Yes", "No"];
    const goalOptions = ["Improve health", "Lose weight", "Gain strength", "Reduce pain", "Feel better/energized", "Other"];
    const activityPrefOptions = ["Walking/hiking","Strength training","Yoga/stretching","Group classes","Sports","Cycling","Swimming","Home workouts","Other"];
    const equipOptions = ["None / Bodyweight only", "Dumbbells or resistance bands", "Gym with machines/weights", "Cardio equipment", "Outdoor space", "Pool", "Other"];

    // Populate radio/multi fields
    function addOptions(templateId, parentSel, opts, name) {
      const parent = document.querySelector(parentSel);
      opts.forEach(txt=>{
        const clone = document.getElementById(templateId).content.cloneNode(true);
        const input = clone.querySelector('input');
        input.value = txt;
        input.name = name;
        clone.querySelector('span.text-sm').textContent = txt;
        parent.appendChild(clone);
      });
    }
    addOptions('freqTemplate', '[data-step="3"] .space-y-3', freqOptions, 'activityFrequency');
    addOptions('functionTemplate', '[data-step="4"] .space-y-3', functionOptions, 'physicalFunction');
    addOptions('intentTemplate', '[data-step="5"] .space-y-3', intentOptions, 'intentToChange');
    addOptions('sleepTemplate', '[data-step="8"] .space-y-3', sleepOptions, 'sleep');
    addOptions('tobaccoTemplate', '[data-step="9"] .space-y-3', tobaccoOptions, 'tobaccoUse');
    addOptions('goalTemplate', '[data-step="10"] .space-y-3', goalOptions, 'primaryGoal');
    // Hide/show Other field for goal
    document.querySelector('[data-step="10"]').addEventListener('change', e=>{
      const otherInput = document.querySelector('[name="otherPrimaryGoal"]');
      if(e.target.name==="primaryGoal" && e.target.value==="Other") {
        otherInput.classList.remove('hidden');
      } else if(e.target.name==="primaryGoal") {
        otherInput.classList.add('hidden');
      }
    });
    // Activity preferences
    const prefParent = document.querySelector('[data-step="11"] .space-y-3');
    activityPrefOptions.forEach(txt=>{
      const clone = document.getElementById('prefTemplate').content.cloneNode(true);
      const input = clone.querySelector('input');
      input.value = txt;
      input.name = "activityPreferences";
      clone.querySelector('span.text-sm').textContent = txt;
      prefParent.appendChild(clone);
    });
    // Hide/show Other field for activity preferences
    document.querySelector('[data-step="11"]').addEventListener('change', e=>{
      const otherInput = document.querySelector('[name="otherActivityPreferences"]');
      if(e.target.type==="checkbox" && e.target.value==="Other" && e.target.checked) {
        otherInput.classList.remove('hidden');
      } else if(e.target.type==="checkbox" && e.target.value==="Other" && !e.target.checked) {
        otherInput.classList.add('hidden');
      }
    });
    // Equipment access
    const equipParent = document.querySelector('[data-step="12"] .space-y-3');
    equipOptions.forEach(txt=>{
      const clone = document.getElementById('equipTemplate').content.cloneNode(true);
      const input = clone.querySelector('input');
      input.value = txt;
      input.name = "equipmentAccess";
      clone.querySelector('span.text-sm').textContent = txt;
      equipParent.appendChild(clone);
    });
    // Hide/show Other field for equipment
    document.querySelector('[data-step="12"]').addEventListener('change', e=>{
      const otherInput = document.querySelector('[name="otherEquipmentAccess"]');
      if(e.target.type==="checkbox" && e.target.value==="Other" && e.target.checked) {
        otherInput.classList.remove('hidden');
      } else if(e.target.type==="checkbox" && e.target.value==="Other" && !e.target.checked) {
        otherInput.classList.add('hidden');
      }
    });

    lucide.createIcons({strokeWidth:1.5});

    /* Stepper */
    const steps = [...document.querySelectorAll('.step')];
    let current = 0;
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const progressBar = document.getElementById('progressBar');
    // Sliders
    const importanceRange = document.getElementById('importanceSlider');
    const importanceValue = document.getElementById('importanceValue');
    const confidenceRange = document.getElementById('confidenceSlider');
    const confidenceValue = document.getElementById('confidenceValue');
    const rangeMin = parseInt(importanceRange.min, 10);
    const rangeMax = parseInt(importanceRange.max, 10);

    function showStep(idx) {
      steps.forEach((s,i)=>{
        if(i===idx){
          s.classList.remove('hidden','opacity-0','translate-y-4');
          s.classList.add('fade-in');
        }else{
          s.classList.add('hidden');
        }
      });
      backBtn.disabled = idx===0;
      nextBtn.textContent = idx === steps.length-1 ? 'Submit' : 'Next';
      progressBar.style.width = ((idx+1)/steps.length)*100 + "%";
    }

    document.querySelectorAll('.step').forEach(sec=>{
      sec.addEventListener('transitionend',()=>sec.classList.remove('fade-in'));
    });

    document.addEventListener('DOMContentLoaded', ()=>{
      showStep(current);
      updateImportancePosition();
      updateConfidencePosition();
    });

    nextBtn.addEventListener('click', ()=>{
      if(current === steps.length-1){
        document.getElementById('surveyForm').requestSubmit();
        return;
      }
      current++;
      showStep(current);
    });

    backBtn.addEventListener('click', ()=>{
      if(current>0){ current--; showStep(current);}
    });

    // Range slider value label positioning
    function updateImportancePosition() {
      const slider = importanceRange;
      const value = +slider.value;
      importanceValue.textContent = value;
      const percent = (value - rangeMin) / (rangeMax - rangeMin);
      const thumbWidth = 24;
      importanceValue.style.left = `calc(${percent*100}% - ${thumbWidth/2}px)`;
    }
    function updateConfidencePosition() {
      const slider = confidenceRange;
      const value = +slider.value;
      confidenceValue.textContent = value;
      const percent = (value - rangeMin) / (rangeMax - rangeMin);
      const thumbWidth = 24;
      confidenceValue.style.left = `calc(${percent*100}% - ${thumbWidth/2}px)`;
    }
    importanceRange.addEventListener('input',updateImportancePosition);
    window.addEventListener('resize',updateImportancePosition);
    confidenceRange.addEventListener('input',updateConfidencePosition);
    window.addEventListener('resize',updateConfidencePosition);

    // Fade-in animation
    document.querySelectorAll('.step').forEach((el,i) => {
      el.classList.add('transition-all', 'duration-500', 'ease-out');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full max-w-xl px-4 py-8 space-y-8" id="app">

<div className="w-full bg-neutral-200 rounded-full overflow-hidden h-2">
<div className="h-full transition-all duration-300" id="progressBar" style={{background: '#ae9ab0', width: '0%'}}></div>
</div>

<form className="space-y-12" id="surveyForm">

<section className="step space-y-6" data-step="1">
<h2 className="text-2xl tracking-tight font-semibold">Medical Clearance</h2>
<p className="text-sm text-neutral-500">Have you ever been told by a doctor that you should not exercise because of a medical condition?</p>
<div className="space-y-3">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="medicalClearance" required="" type="radio" value="Yes"/>
<span className="w-5 h-5 rounded-full border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]">
<span className="w-2.5 h-2.5 rounded-full bg-white peer-checked:bg-white"></span>
</span>
<span className="text-sm font-medium">Yes</span>
</label>
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="medicalClearance" type="radio" value="No"/>
<span className="w-5 h-5 rounded-full border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]">
<span className="w-2.5 h-2.5 rounded-full bg-white peer-checked:bg-white"></span>
</span>
<span className="text-sm font-medium">No</span>
</label>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="2">
<h2 className="text-2xl tracking-tight font-semibold">Pain or Injury</h2>
<p className="text-sm text-neutral-500">Do you currently experience pain or injury that limits your physical activity?</p>
<div className="space-y-3">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="hasPain" required="" type="radio" value="true"/>
<span className="w-5 h-5 rounded-full border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]"></span>
<span className="text-sm font-medium">Yes</span>
</label>
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="hasPain" type="radio" value="false"/>
<span className="w-5 h-5 rounded-full border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]"></span>
<span className="text-sm font-medium">No</span>
</label>
</div>
<textarea className="w-full bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#ae9ab0] focus:ring-0 px-4 py-3 text-sm resize-none mt-3" name="painDescription" placeholder="Describe pain or injury (optional)" rows="3"></textarea>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="3">
<h2 className="text-2xl tracking-tight font-semibold">Physical Activity Frequency</h2>
<p className="text-sm text-neutral-500">On average, how many days per week do you do 30+ minutes of moderate-to-vigorous physical activity?</p>
<div className="space-y-3">
<template id="freqTemplate">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="activityFrequency" required="" type="radio"/>
<span className="w-5 h-5 rounded-full border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]"></span>
<span className="text-sm font-medium"></span>
</label>
</template>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="4">
<h2 className="text-2xl tracking-tight font-semibold">Physical Function</h2>
<p className="text-sm text-neutral-500">How would you rate your overall physical function?</p>
<div className="space-y-3">
<template id="functionTemplate">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="physicalFunction" required="" type="radio"/>
<span className="w-5 h-5 rounded-full border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]"></span>
<span className="text-sm font-medium"></span>
</label>
</template>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="5">
<h2 className="text-2xl tracking-tight font-semibold">Intent to Change</h2>
<p className="text-sm text-neutral-500">Do you intend to increase your physical activity in the next 30 days?</p>
<div className="space-y-3">
<template id="intentTemplate">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="intentToChange" required="" type="radio"/>
<span className="w-5 h-5 rounded-full border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]"></span>
<span className="text-sm font-medium"></span>
</label>
</template>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="6">
<h2 className="text-2xl tracking-tight font-semibold">Importance</h2>
<p className="text-sm text-neutral-500 mb-6">On a scale of 0–10, how important is it for you to become more physically active?</p>
<div className="flex flex-col items-center space-y-8 relative w-full">
<div className="w-full relative">
<input className="w-full ae9ab0-thumb h-2 bg-[#ede9f3] rounded-lg appearance-none cursor-pointer" id="importanceSlider" max="10" min="0" name="importance" style={{zIndex: '2'}} type="range" value="5"/>
<span className="absolute left-1/2 -translate-x-1/2 mt-3 text-sm font-semibold text-[#ae9ab0] transition-all duration-200" id="importanceValue" style={{top: '32px'}}>5</span>
</div>
<div className="flex w-full justify-between px-1 text-xs text-neutral-400 -mt-4">
<span>0</span>
<span>10</span>
</div>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="7">
<h2 className="text-2xl tracking-tight font-semibold">Confidence</h2>
<p className="text-sm text-neutral-500 mb-6">On a scale of 0–10, how confident are you in your ability to follow an exercise plan?</p>
<div className="flex flex-col items-center space-y-8 relative w-full">
<div className="w-full relative">
<input className="w-full ae9ab0-thumb h-2 bg-[#ede9f3] rounded-lg appearance-none cursor-pointer" id="confidenceSlider" max="10" min="0" name="confidence" style={{zIndex: '2'}} type="range" value="5"/>
<span className="absolute left-1/2 -translate-x-1/2 mt-3 text-sm font-semibold text-[#ae9ab0] transition-all duration-200" id="confidenceValue" style={{top: '32px'}}>5</span>
</div>
<div className="flex w-full justify-between px-1 text-xs text-neutral-400 -mt-4">
<span>0</span>
<span>10</span>
</div>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="8">
<h2 className="text-2xl tracking-tight font-semibold">Sleep</h2>
<p className="text-sm text-neutral-500">How many hours of sleep do you usually get per night?</p>
<div className="space-y-3">
<template id="sleepTemplate">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="sleep" required="" type="radio"/>
<span className="w-5 h-5 rounded-full border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]"></span>
<span className="text-sm font-medium"></span>
</label>
</template>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="9">
<h2 className="text-2xl tracking-tight font-semibold">Tobacco Use</h2>
<p className="text-sm text-neutral-500">Do you currently smoke or use tobacco?</p>
<div className="space-y-3">
<template id="tobaccoTemplate">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="tobaccoUse" required="" type="radio"/>
<span className="w-5 h-5 rounded-full border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]"></span>
<span className="text-sm font-medium"></span>
</label>
</template>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="10">
<h2 className="text-2xl tracking-tight font-semibold">Primary Goal</h2>
<p className="text-sm text-neutral-500">What is your top goal for being physically active?</p>
<div className="space-y-3">
<template id="goalTemplate">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="primaryGoal" required="" type="radio"/>
<span className="w-5 h-5 rounded-full border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]"></span>
<span className="text-sm font-medium"></span>
</label>
</template>
<input className="w-full bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#ae9ab0] focus:ring-0 px-4 py-3 text-sm mt-3 hidden" name="otherPrimaryGoal" placeholder="Other goal..." type="text" />
</input></div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="11">
<h2 className="text-2xl tracking-tight font-semibold">Activity Preferences</h2>
<p className="text-sm text-neutral-500">What types of physical activity do you enjoy or want to include in your routine?</p>
<div className="space-y-3">
<template id="prefTemplate">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="activityPreferences" type="checkbox"/>
<span className="w-5 h-5 rounded-lg border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</span>
<span className="text-sm font-medium"></span>
</label>
</template>
<input className="w-full bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#ae9ab0] focus:ring-0 px-4 py-3 text-sm mt-3 hidden" name="otherActivityPreferences" placeholder="Other activity..." type="text" />
</input></div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="12">
<h2 className="text-2xl tracking-tight font-semibold">Equipment Access</h2>
<p className="text-sm text-neutral-500">What equipment or facilities do you have access to?</p>
<div className="space-y-3">
<template id="equipTemplate">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-[#ae9ab0] hover:bg-[#f5f3f7] cursor-pointer transition-colors group">
<input className="peer sr-only" name="equipmentAccess" type="checkbox"/>
<span className="w-5 h-5 rounded-lg border border-neutral-300 transition-all flex items-center justify-center peer-checked:border-[#ae9ab0] peer-checked:bg-[#ae9ab0] group-hover:border-[#ae9ab0]">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</span>
<span className="text-sm font-medium"></span>
</label>
</template>
<input className="w-full bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#ae9ab0] focus:ring-0 px-4 py-3 text-sm mt-3 hidden" name="otherEquipmentAccess" placeholder="Other equipment..." type="text" />
</input></div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="13">
<h2 className="text-2xl tracking-tight font-semibold">Time Commitment</h2>
<p className="text-sm text-neutral-500">How much time can you realistically commit to physical activity each week?</p>
<div className="flex flex-col gap-4">
<div className="flex gap-4">
<label className="flex-1 flex flex-col">
<span className="text-xs font-medium mb-1 text-neutral-600">Days per week</span>
<input className="w-full bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#ae9ab0] focus:ring-0 px-4 py-3 text-sm" max="7" min="0" name="daysPerWeek" required="" type="number" />
</input></label>
<label className="flex-1 flex flex-col">
<span className="text-xs font-medium mb-1 text-neutral-600">Minutes per session</span>
<input className="w-full bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#ae9ab0] focus:ring-0 px-4 py-3 text-sm" min="0" name="minutesPerSession" required="" type="number" />
</input></label>
</div>
<div>
<span className="text-xs font-medium mb-1 text-neutral-600">Preferred time of day</span>
<select className="w-full bg-neutral-50 rounded-xl border border-neutral-200 focus:border-[#ae9ab0] focus:ring-0 px-4 py-3 text-sm cursor-pointer" name="preferredTimeOfDay" required="">
<option disabled="" selected="" value="">Select one...</option>
<option>Morning</option>
<option>Afternoon</option>
<option>Evening</option>
<option>Flexible</option>
</select>
</div>
</div>
</section>

<div className="flex justify-between items-center gap-4 mt-8">
<button className="w-32 h-12 flex justify-center items-center px-4 rounded-lg border border-neutral-200 text-sm font-semibold transition-all bg-white hover:bg-neutral-50 active:bg-neutral-100 hover:border-[#ae9ab0] active:border-[#ae9ab0] text-neutral-700 disabled:opacity-30 focus:outline focus:outline-2 focus:outline-[#ede9f3]" id="backBtn" type="button">Back</button>
<button className="w-32 h-12 flex justify-center items-center px-4 rounded-lg border-0 text-white font-semibold shadow-sm transition-all focus:outline focus:outline-2 focus:outline-[#ede9f3] bg-[linear-gradient(45deg,#c1d3c8ff_0%,#fcc0a9ff_33%,#ae9ab0ff_66%,#e091a5ff_100%)] hover:brightness-110 hover:shadow-lg active:brightness-95 focus:ring-2 focus:ring-offset-2 focus:ring-[#ae9ab0]" id="nextBtn" type="button">Next</button>
</div>
</form>
</main>


    </>
  );
}
