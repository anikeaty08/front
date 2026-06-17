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



    document.addEventListener("DOMContentLoaded", () => {
      let currentStep = 1;
      const totalSteps = 5;
      const steps = document.querySelectorAll('.step');
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      const submitBtn = document.getElementById('submit-btn');
      const progressBar = document.getElementById('progress-bar');
      const stepIndicator = document.getElementById('step-indicator');
      const progressPercentage = document.getElementById('progress-percentage');
      const form = document.getElementById('assessment-form');

      function updateUI() {
        steps.forEach((step, index) => {
          if (index + 1 === currentStep) {
            step.classList.remove('hidden');
            requestAnimationFrame(() => {
              step.classList.remove('opacity-0', 'translate-y-4');
              step.classList.add('opacity-100', 'translate-y-0');
            });
          } else {
            step.classList.add('opacity-0', 'translate-y-4');
            step.classList.remove('opacity-100', 'translate-y-0');
            setTimeout(() => {
              if (index + 1 !== currentStep) step.classList.add('hidden');
            }, 300);
          }
        });

        if (currentStep === 1) {
          prevBtn.classList.add('hidden');
          prevBtn.classList.remove('flex');
        } else {
          prevBtn.classList.remove('hidden');
          prevBtn.classList.add('flex');
        }

        if (currentStep === totalSteps) {
          nextBtn.classList.add('hidden');
          nextBtn.classList.remove('flex');
          submitBtn.classList.remove('hidden');
          submitBtn.classList.add('flex');
        } else {
          nextBtn.classList.remove('hidden');
          nextBtn.classList.add('flex');
          submitBtn.classList.add('hidden');
          submitBtn.classList.remove('flex');
        }

        const percentage = Math.round((currentStep / totalSteps) * 100);
        progressBar.style.width = `${percentage}%`;
        stepIndicator.textContent = `Step ${currentStep} of ${totalSteps}`;
        progressPercentage.textContent = `${percentage}%`;
      }

      const inputs = document.querySelectorAll('input[type="radio"]');
      inputs.forEach(input => {
        input.addEventListener('change', () => {
          if (currentStep < totalSteps) {
            setTimeout(() => {
              currentStep++;
              updateUI();
            }, 350); 
          }
        });
      });

      nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
          currentStep++;
          updateUI();
        }
      });

      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          updateUI();
        }
      });

      document.getElementById('reset-btn').addEventListener('click', () => {
        form.reset();
        currentStep = 1;
        updateUI();
      });

      updateUI();
    });
  
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
      
<main className="w-full max-w-3xl bg-[#FFCA16] rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(255,202,22,0.4)] p-5 sm:p-12 relative flex flex-col min-h-[85vh] sm:min-h-[650px] max-h-[95vh] sm:max-h-none">

<button aria-label="Reset Assessment" className="absolute top-5 right-5 sm:top-12 sm:right-12 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E5B514] border border-[#FFD647] flex items-center justify-center hover:bg-[#D9AC13] transition-colors focus:outline-none focus:ring-4 focus:ring-white/30 z-10" id="reset-btn" type="button">
<iconify-icon className="text-[#66510A] sm:w-[20px] sm:h-[20px]" height="18" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>

<header className="mb-6 sm:mb-8 flex-shrink-0">
<div className="flex justify-between items-end mb-4 pr-12 sm:pr-16">
<div>
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#332907] mb-1.5 sm:mb-2">Personalised Health Assessment</h1>
<h2 className="text-sm sm:text-base font-medium text-[#66510A]">Let's get to know you in just a few seconds...</h2>
</div>
</div>

<div className="space-y-2 mt-4 sm:mt-6">
<div className="flex justify-between items-center">
<span className="text-xs font-medium text-[#66510A]" id="step-indicator">Step 1 of 5</span>
<span className="text-xs font-medium text-[#66510A]" id="progress-percentage">20%</span>
</div>
<div className="w-full bg-[#E5B514] rounded-full h-1.5 overflow-hidden">
<div className="bg-[#261E05] h-full rounded-full transition-all duration-500 ease-out" id="progress-bar" style={{width: '20%'}}></div>
</div>
</div>
</header>

<form className="flex flex-col flex-grow relative" id="assessment-form">
<div className="relative flex-grow">

<div className="step transition-all duration-300 absolute inset-0 w-full" data-step="1">
<section className="space-y-3 sm:space-y-4">
<h3 className="text-base sm:text-lg font-medium text-[#4D3D0A]">1. What is your gender?</h3>
<div className="grid grid-cols-2 gap-3 sm:gap-4">
<label className="cursor-pointer">
<input className="peer sr-only" name="gender" type="radio" value="male"/>
<div className="flex flex-col items-center justify-center gap-2 py-4 sm:py-5 px-3 rounded-2xl bg-[#E5B514] text-[#66510A] peer-checked:bg-[#FFFDF5] peer-checked:text-[#1A1504] peer-checked:shadow-sm peer-checked:[&amp;&gt;iconify-icon]:text-[#D9AC13] hover:bg-[#D9AC13] transition-all">
<iconify-icon className="transition-colors" height="28" icon="solar:men-linear" width="28"></iconify-icon>
<span className="font-medium text-base sm:text-lg">Male</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="gender" type="radio" value="female"/>
<div className="flex flex-col items-center justify-center gap-2 py-4 sm:py-5 px-3 rounded-2xl bg-[#E5B514] text-[#66510A] peer-checked:bg-[#FFFDF5] peer-checked:text-[#1A1504] peer-checked:shadow-sm peer-checked:[&amp;&gt;iconify-icon]:text-[#D9AC13] hover:bg-[#D9AC13] transition-all">
<iconify-icon className="transition-colors" height="28" icon="solar:women-linear" width="28"></iconify-icon>
<span className="font-medium text-base sm:text-lg">Female</span>
</div>
</label>
</div>
</section>
</div>

<div className="step hidden opacity-0 translate-y-4 transition-all duration-300 absolute inset-0 w-full" data-step="2">
<section className="space-y-3 sm:space-y-4">
<h3 className="text-base sm:text-lg font-medium text-[#4D3D0A]">2. What is your age range?</h3>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
<label className="cursor-pointer">
<input className="peer sr-only" name="age" type="radio" value="under-25"/>
<div className="flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl bg-[#E5B514] text-[#66510A] peer-checked:bg-[#FFFDF5] peer-checked:text-[#1A1504] peer-checked:shadow-sm peer-checked:[&amp;&gt;iconify-icon]:text-[#D9AC13] hover:bg-[#D9AC13] transition-all h-full text-center">
<iconify-icon className="transition-colors" height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
<span className="font-medium text-sm sm:text-base">Under 25</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="age" type="radio" value="25-34"/>
<div className="flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl bg-[#E5B514] text-[#66510A] peer-checked:bg-[#FFFDF5] peer-checked:text-[#1A1504] peer-checked:shadow-sm peer-checked:[&amp;&gt;iconify-icon]:text-[#D9AC13] hover:bg-[#D9AC13] transition-all h-full text-center">
<iconify-icon className="transition-colors" height="24" icon="solar:calendar-linear" width="24"></iconify-icon>
<span className="font-medium text-sm sm:text-base">25 – 34</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="age" type="radio" value="35-44"/>
<div className="flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl bg-[#E5B514] text-[#66510A] peer-checked:bg-[#FFFDF5] peer-checked:text-[#1A1504] peer-checked:shadow-sm peer-checked:[&amp;&gt;iconify-icon]:text-[#D9AC13] hover:bg-[#D9AC13] transition-all h-full text-center">
<iconify-icon className="transition-colors" height="24" icon="solar:calendar-date-linear" width="24"></iconify-icon>
<span className="font-medium text-sm sm:text-base">35 – 44</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="age" type="radio" value="55-plus"/>
<div className="flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl bg-[#E5B514] text-[#66510A] peer-checked:bg-[#FFFDF5] peer-checked:text-[#1A1504] peer-checked:shadow-sm peer-checked:[&amp;&gt;iconify-icon]:text-[#D9AC13] hover:bg-[#D9AC13] transition-all h-full text-center">
<iconify-icon className="transition-colors" height="24" icon="solar:calendar-mark-linear" width="24"></iconify-icon>
<span className="font-medium text-sm sm:text-base">55+</span>
</div>
</label>
</div>
</section>
</div>

<div className="step hidden opacity-0 translate-y-4 transition-all duration-300 absolute inset-0 w-full flex flex-col" data-step="3">
<h3 className="text-base sm:text-lg font-medium text-[#4D3D0A] mb-3 flex-shrink-0">3. What is your biggest health goal right now?</h3>
<section className="space-y-2 sm:space-y-3 flex-grow overflow-y-auto pr-1 sm:pr-2 pb-4 -mr-1 sm:-mr-2 custom-scrollbar">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="energy"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:bolt-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">Boost energy &amp; reduce fatigue</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="fertility"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:heart-pulse-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">Improve fertility / pregnant</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="diabetes"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:waterdrop-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">Manage diabetes</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="libido"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:flame-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">Improve sexual performance</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="detox"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:leaf-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">Detox &amp; cleanse body</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="infection"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:shield-warning-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">Treat infection</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="prostate"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:shield-plus-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">Manage prostate issues</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="blood-pressure"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:heart-angle-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">Lower blood pressure</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="vision"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:eye-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">Improve vision</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="immune"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:shield-check-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">General immune support</span>
</div>
</label>
</div>
</section>
</div>

<div className="step hidden opacity-0 translate-y-4 transition-all duration-300 absolute inset-0 w-full flex flex-col" data-step="4">
<h3 className="text-base sm:text-lg font-medium text-[#4D3D0A] mb-3 flex-shrink-0">4. How long have you been experiencing this?</h3>
<section className="space-y-2 sm:space-y-3 flex-grow overflow-y-auto pr-1 sm:pr-2 pb-4 -mr-1 sm:-mr-2 custom-scrollbar">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="duration" type="radio" value="0-3-months"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:clock-circle-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">0–3 months</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="duration" type="radio" value="3-6-months"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:history-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">3–6 months</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="duration" type="radio" value="6-12-months"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:calendar-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">6–12 months</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="duration" type="radio" value="1-3-years"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:calendar-add-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">1–3 years</span>
</div>
</label>
<label className="relative block cursor-pointer">
<input className="peer sr-only" name="duration" type="radio" value="over-3-years"/>
<div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-[#E5B514] hover:bg-[#D9AC13] peer-checked:bg-[#FFFDF5] peer-checked:shadow-sm peer-checked:[&amp;_.radio-outer]:border-[#D9AC13] peer-checked:[&amp;_.radio-inner]:scale-100 peer-checked:[&amp;_iconify-icon]:text-[#D9AC13] transition-all">
<div className="radio-outer flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-[#B38F10] flex items-center justify-center transition-colors">
<div className="radio-inner w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D9AC13] scale-0 transition-transform"></div>
</div>
<iconify-icon className="text-[#8C700D] flex-shrink-0 transition-colors" height="22" icon="solar:infinity-linear" width="22"></iconify-icon>
<span className="text-sm sm:text-base font-medium text-[#4D3D0A] peer-checked:text-[#1A1504]">Over 3 years</span>
</div>
</label>
</div>
</section>
</div>

<div className="step hidden opacity-0 translate-y-4 transition-all duration-300 absolute inset-0 w-full" data-step="5">
<section className="space-y-3 sm:space-y-4">
<h3 className="text-base sm:text-lg font-medium text-[#4D3D0A]">5. Are you currently on medication?</h3>
<div className="grid grid-cols-2 gap-3 sm:gap-4">
<label className="cursor-pointer">
<input className="peer sr-only" name="medication" type="radio" value="yes"/>
<div className="flex flex-col items-center justify-center gap-2 py-4 sm:py-5 px-3 rounded-2xl bg-[#E5B514] text-[#66510A] peer-checked:bg-[#FFFDF5] peer-checked:text-[#1A1504] peer-checked:shadow-sm peer-checked:[&amp;&gt;iconify-icon]:text-[#D9AC13] hover:bg-[#D9AC13] transition-all">
<iconify-icon className="transition-colors" height="28" icon="solar:pill-linear" width="28"></iconify-icon>
<span className="font-medium text-base sm:text-lg">Yes</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="medication" type="radio" value="no"/>
<div className="flex flex-col items-center justify-center gap-2 py-4 sm:py-5 px-3 rounded-2xl bg-[#E5B514] text-[#66510A] peer-checked:bg-[#FFFDF5] peer-checked:text-[#1A1504] peer-checked:shadow-sm peer-checked:[&amp;&gt;iconify-icon]:text-[#D9AC13] hover:bg-[#D9AC13] transition-all">
<iconify-icon className="transition-colors" height="28" icon="solar:close-circle-linear" width="28"></iconify-icon>
<span className="font-medium text-base sm:text-lg">No</span>
</div>
</label>
</div>
</section>
</div>
</div>

<div className="pt-6 sm:pt-8 mt-auto flex items-center gap-2 sm:gap-4 z-10 bg-[#FFCA16] flex-shrink-0">
<button className="hidden flex-1 bg-[#E5B514] text-[#66510A] py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg font-medium hover:bg-[#D9AC13] focus:ring-4 focus:ring-white/30 transition-all flex items-center justify-center gap-2" id="prev-btn" type="button">
<iconify-icon className="sm:w-[20px] sm:h-[20px]" height="18" icon="solar:arrow-left-linear" width="18"></iconify-icon>
          Back
        </button>
<button className="flex-1 bg-[#261E05] text-[#FFFDF5] py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg font-medium hover:bg-[#1A1403] focus:ring-4 focus:ring-[#261E05]/30 transition-all shadow-lg sm:shadow-xl shadow-[#261E05]/20 flex items-center justify-center gap-2" id="next-btn" type="button">
          Next
          <iconify-icon className="sm:w-[20px] sm:h-[20px]" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="hidden flex-1 bg-[#261E05] text-[#FFFDF5] py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg font-medium hover:bg-[#1A1403] focus:ring-4 focus:ring-[#261E05]/30 transition-all shadow-lg sm:shadow-xl shadow-[#261E05]/20 flex items-center justify-center gap-2" id="submit-btn" type="submit">
          Complete
          <iconify-icon className="sm:w-[20px] sm:h-[20px]" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
</div>
</form>
</main>
<style>
    /* Custom scrollbar for mobile-friendly inner scrolling lists */
    .custom-scrollbar::-webkit-scrollbar {
      width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #D9AC13;
      border-radius: 10px;
    }
  </style>


    </>
  );
}
