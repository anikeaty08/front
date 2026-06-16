import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Grab elements
    const ageInput = document.getElementById('age-input');
    const ageFeedback = document.getElementById('age-feedback');
    const ageDec = document.getElementById('age-dec');
    const ageInc = document.getElementById('age-inc');
    const heightInput = document.getElementById('height-input');
    const heightFeedback = document.getElementById('height-feedback');
    const heightDec = document.getElementById('height-dec');
    const heightInc = document.getElementById('height-inc');
    const bpmSlider = document.getElementById('bpm-slider');
    const bpmValue = document.getElementById('bpm-value');
    const bpmBar = document.getElementById('bpm-bar');
    const getStartedBtn = document.getElementById('get-started-btn');

    function clamp(val, min, max) {
      val = parseInt(val);
      if (isNaN(val)) return min;
      return Math.max(min, Math.min(max, val));
    }
    function validateInputs() {
      let valid = true;
      const age = parseInt(ageInput.value) || 0;
      if (age < 10 || age > 99) {
        ageFeedback.textContent = "Age 10–99";
        valid = false;
      } else {
        ageFeedback.textContent = "";
      }
      const height = parseInt(heightInput.value) || 0;
      if (height < 100 || height > 250) {
        heightFeedback.textContent = "100–250";
        valid = false;
      } else {
        heightFeedback.textContent = "";
      }
      getStartedBtn.disabled = !valid;
      return valid;
    }
    // Age controls
    ageInc.addEventListener('click', () => {
      let v = clamp(Number(ageInput.value) + 1, 10, 99);
      ageInput.value = v;
      validateInputs();
    });
    ageDec.addEventListener('click', () => {
      let v = clamp(Number(ageInput.value) - 1, 10, 99);
      ageInput.value = v;
      validateInputs();
    });
    // Height controls
    heightInc.addEventListener('click', () => {
      let v = clamp(Number(heightInput.value) + 1, 100, 250);
      heightInput.value = v;
      validateInputs();
    });
    heightDec.addEventListener('click', () => {
      let v = clamp(Number(heightInput.value) - 1, 100, 250);
      heightInput.value = v;
      validateInputs();
    });
    // BPM Slider
    function setBpmBar(val) {
      let percent = ((val - 60) / 100) * 100;
      percent = Math.max(0, Math.min(100, percent));
      bpmBar.style.width = percent + "%";
    }
    bpmSlider.addEventListener('input', () => {
      bpmValue.textContent = bpmSlider.value;
      setBpmBar(bpmSlider.value);
    });
    // Initial render
    setBpmBar(bpmSlider.value);
    validateInputs();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="bg-white max-w-md w-full rounded-3xl shadow-2xl px-8 py-10 flex flex-col gap-8 border border-gray-100">
<header>
<h1 className="text-[2rem] font-bold text-gray-900 tracking-tight mb-1">Push Yourself <span className="text-blue-500">Harder</span></h1>
<p className="text-gray-500 text-base leading-snug">Progress is the sum of small efforts, repeated every day.</p>
</header>
<section className="flex flex-col gap-6">
<h2 className="text-lg font-semibold text-gray-800">Plan Your Training</h2>
<p className="text-sm text-gray-500 mb-2 border-l-4 border-blue-100 pl-3 py-1">Stay consistent. Make excellence a habit.</p>
<div className="grid grid-cols-2 gap-5 mb-4">

<div>
<div className="text-xs text-gray-400 tracking-widest uppercase flex justify-center mb-1">Age</div>
<div className="flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100 py-3">
<button aria-label="Decrease age" className="text-xl font-light px-2 text-blue-400 focus:bg-blue-100 rounded-full transition" id="age-dec" type="button">−</button>
<input aria-label="Age" className="w-12 mx-1 text-center text-xl font-semibold text-gray-900 bg-transparent border-0" id="age-input" max="99" min="10" readonly="" type="number" value="21"/>
<button aria-label="Increase age" className="text-xl font-light px-2 text-blue-400 focus:bg-blue-100 rounded-full transition" id="age-inc" type="button">+</button>
</div>
<div className="text-xs text-red-400 text-center h-4" id="age-feedback"></div>
</div>

<div>
<div className="text-xs text-gray-400 tracking-widest uppercase flex justify-center mb-1">Height</div>
<div className="flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100 py-3">
<button aria-label="Decrease height" className="text-xl font-light px-2 text-blue-400 focus:bg-blue-100 rounded-full transition" id="height-dec" type="button">−</button>
<input aria-label="Height" className="w-14 mx-1 text-center text-xl font-semibold text-gray-900 bg-transparent border-0" id="height-input" max="250" min="100" readonly="" type="number" value="160"/>
<span className="ml-1 text-xs text-gray-400">cm</span>
<button aria-label="Increase height" className="text-xl font-light px-2 text-blue-400 focus:bg-blue-100 rounded-full transition" id="height-inc" type="button">+</button>
</div>
<div className="text-xs text-red-400 text-center h-4" id="height-feedback"></div>
</div>
</div>

<div>
<div className="flex items-center justify-between text-xs text-gray-400 mb-2">
<span>BPM</span>
<span className="text-gray-600 font-semibold" id="bpm-value">89</span>
</div>
<div className="slider-container mb-2">
<div className="slider-track-bg"></div>
<div className="slider-track-bar" id="bpm-bar" style={{width: '29%'}}></div>
<input aria-label="BPM" className="bpm-slider" id="bpm-slider" max="160" min="60" step="1" type="range" value="89"/>
</div>
</div>
</section>
<div className="flex flex-col gap-3 mt-4">
<button className="w-full py-3 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold shadow disabled:opacity-40 disabled:cursor-not-allowed focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition select-none" disabled="" id="get-started-btn">Get Started</button>
</div>
</main>


    </>
  );
}
