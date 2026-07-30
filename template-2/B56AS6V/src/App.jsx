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
      {

    // Data from JSON for demo
    const freqOptions = ["0","1–2","3–4","5–7"];
    const prefOptions = ["Walking/hiking","Strength training","Yoga/stretching","Group classes","Sports","Cycling","Swimming","Home workouts"];
    // Populate radio group
    const freqParent = document.querySelector('[data-step="3"] .space-y-3');
    freqOptions.forEach(txt=>{
      const clone = document.getElementById('freqTemplate').content.cloneNode(true);
      clone.querySelector('input').value = txt;
      clone.querySelector('span.text-sm').textContent = txt + " days";
      freqParent.appendChild(clone);
    });
    // Populate multi-select
    const prefParent = document.querySelector('[data-step="5"] .space-y-3');
    prefOptions.forEach(txt=>{
      const clone = document.getElementById('prefTemplate').content.cloneNode);
      clone.querySelector('input').name = "activityPreferences";
      clone.querySelector('input').value = txt;
      clone.querySelector('span.text-sm').textContent = txt;
      prefParent.insertBefore(clone, prefParent.lastElementChild);
    });
    lucide.createIcons({strokeWidth:1.5});

    /* Stepper */
    const steps = [...document.querySelectorAll('.step')];
    let current = 0;
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const progressBar = document.getElementById('progressBar');
    const importanceRange = document.getElementById('importanceSlider');
    const importanceValue = document.getElementById('importanceValue');
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

    // Live output for range, position label under thumb
    function updateImportancePosition() {
      const slider = importanceRange;
      const value = +slider.value;
      importanceValue.textContent = value;
      // Position value label under the slider thumb
      const percent = (value - rangeMin) / (rangeMax - rangeMin);
      const sliderRect = slider.getBoundingClientRect();
      // Slider padding/width fudge factor
      const thumbWidth = 24;
      const left = percent * (slider.offsetWidth - thumbWidth) + thumbWidth/2;
      importanceValue.style.left = `calc(${percent*100}% - ${thumbWidth/2}px)`;
    }
    importanceRange.addEventListener('input',updateImportancePosition);
    window.addEventListener('resize',updateImportancePosition);
  
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
      
<main className="w-full max-w-md px-4 py-8 space-y-8" id="app">

<div className="w-full bg-neutral-200 rounded-full overflow-hidden h-2">
<div className="h-full bg-indigo-500 transition-all duration-300" id="progressBar" style={{width: `0%`}}></div>
</div>

<form className="space-y-12" id="surveyForm">

<section className="step space-y-6" data-step="1">
<h2 className="text-2xl tracking-tight font-semibold">Medical Clearance</h2>
<p className="text-sm text-neutral-500">Have you ever been told by a doctor that you should not exercise because of a medical condition?</p>
<div className="space-y-3">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer transition-colors">
<input className="peer sr-only" name="medicalClearance" required type="radio" value="Yes" />
<span className="w-5 h-5 rounded-full border border-neutral-300 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 transition-all"></span>
<span className="text-sm font-medium">Yes</span>
</label>
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer transition-colors">
<input className="peer sr-only" name="medicalClearance" type="radio" value="No" />
<span className="w-5 h-5 rounded-full border border-neutral-300 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 transition-all"></span>
<span className="text-sm font-medium">No</span>
</label>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="2">
<h2 className="text-2xl tracking-tight font-semibold">Pain or Injury</h2>
<p className="text-sm text-neutral-500 mb-2">Are you currently experiencing any pain or injury that limits your ability to be physically active?</p>
<div className="space-y-4">
<div className="space-y-3">
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer transition-colors">
<input className="peer sr-only" name="hasPain" required type="radio" value="true" />
<span className="w-5 h-5 rounded-full border border-neutral-300 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 transition-all"></span>
<span className="text-sm font-medium">Yes</span>
</label>
<label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer transition-colors">
<input className="peer sr-only" name="hasPain" type="radio" value="false" />
<span className="w-5 h-5 rounded-full border border-neutral-300 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 transition-all"></span>
<span className="text-sm font-medium">No</span>
</label>
</div>
<textarea className="w-full bg-neutral-50 rounded-xl border border-neutral-200 focus:border-indigo-400 focus:ring-0 px-4 py-3 text-sm resize-none" name="painDescription" placeholder="Describe pain or injury (optional)" rows="3"></textarea>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="3">
<h2 className="text-2xl tracking-tight font-semibold">Activity Frequency</h2>
<p className="text-sm text-neutral-500">On average, how many days per week do you do 30+ minutes of moderate-to-vigorous physical activity?</p>
<div className="space-y-3">
<template id="freqTemplate"><label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer transition-colors"><input className="peer sr-only" name="activityFrequency" required type="radio" /><span className="w-5 h-5 rounded-full border border-neutral-300 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 transition-all"></span><span className="text-sm font-medium"></span></label></template>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="4">
<h2 className="text-2xl tracking-tight font-semibold">Importance</h2>
<p className="text-sm text-neutral-500 mb-6">On a scale of 0–10, how important is it for you to become more physically active?</p>
<div className="flex flex-col items-center space-y-8 relative w-full">
<div className="w-full relative">
<input className="w-full accent-indigo-500 h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer" id="importanceSlider" max="10" min="0" name="importance" style={{zIndex: `2`}} type="range" value="5" />
<span className="absolute left-1/2 -translate-x-1/2 mt-3 text-sm font-semibold text-indigo-500 transition-all duration-200" id="importanceValue" style={{top: `32px`}}>5</span>
</div>
<div className="flex w-full justify-between px-1 text-xs text-neutral-400 -mt-4">
<span>0</span>
<span>10</span>
</div>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="5">
<h2 className="text-2xl tracking-tight font-semibold">Activity Preferences</h2>
<div className="space-y-3">
<template id="prefTemplate"><label className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer transition-colors"><input className="peer sr-only" type="checkbox" /><span className="w-5 h-5 rounded-lg border border-neutral-300 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 transition-all flex items-center justify-center"><i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i></span><span className="text-sm font-medium"></span></label></template>
<label className="block">
<input className="w-full bg-neutral-50 rounded-xl border border-neutral-200 focus:border-indigo-400 focus:ring-0 px-4 py-3 text-sm mt-3" name="otherActivity" placeholder="Other activity..." type="text" />
</label>
</div>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="6">
<h2 className="text-2xl tracking-tight font-semibold">Preferred Time of Day</h2>
<select className="w-full bg-neutral-50 rounded-xl border border-neutral-200 focus:border-indigo-400 focus:ring-0 px-4 py-3 text-sm cursor-pointer" name="preferredTime" required>
<option disabled selected value="">Select one...</option>
<option>Morning</option>
<option>Afternoon</option>
<option>Evening</option>
<option>Flexible</option>
</select>
</section>

<section className="step hidden opacity-0 translate-y-4" data-step="7">
<h2 className="text-2xl tracking-tight font-semibold">Anything Else?</h2>
<textarea className="w-full bg-neutral-50 rounded-xl border border-neutral-200 focus:border-indigo-400 focus:ring-0 px-4 py-3 text-sm resize-none" name="extraNotes" placeholder="Add any comments..." rows="4"></textarea>
</section>

<div className="flex justify-between items-center gap-4">
<button className="w-32 h-12 flex justify-center items-center px-4 rounded-lg border border-neutral-200 text-sm font-semibold transition-all bg-white hover:bg-neutral-50 active:bg-neutral-100 hover:border-indigo-300 active:border-indigo-400 text-neutral-700 disabled:opacity-30 focus:outline focus:outline-2 focus:outline-indigo-200" id="backBtn" type="button">Back</button>
<button className="w-32 h-12 flex justify-center items-center px-4 rounded-lg border-0 text-white font-semibold shadow-sm transition-all focus:outline focus:outline-2 focus:outline-indigo-200 bg-[linear-gradient(45deg,#c1d3c8ff_0%,#fcc0a9ff_33%,#ae9ab0ff_66%,#e091a5ff_100%)] hover:brightness-110 hover:shadow-lg active:brightness-95 focus:ring-2 focus:ring-offset-2 focus:ring-[#fcc0a9]" id="nextBtn" type="button">Next</button>
</div>
</form>
</main>


    </>
  );
}
