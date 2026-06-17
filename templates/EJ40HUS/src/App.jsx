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
      
  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    // Icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    });

    // State
    const state = {
      name: "",
      age: null,
      goal: null,
      topics: [],
      sessionLength: 15,
      daysPerWeek: null,
      days: [],
      level: null,
      accent: null,
      micGranted: null,
      reminderTime: "",
      consent: false
    };

    // Elements
    const stepSections = Array.from(document.querySelectorAll('[data-step]'));
    const progressEls = Array.from(document.querySelectorAll('[data-progress]'));
    const stepLabel = document.getElementById('stepLabel');
    const savedHint = document.getElementById('savedHint');
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const skipBtn = document.getElementById('skipBtn');
    const doneToast = document.getElementById('doneToast');

    let current = 0; // 0..11

    function showSavedHint() {
      savedHint.style.opacity = '1';
      setTimeout(() => savedHint.style.opacity = '0', 900);
    }

    function updateProgress() {
      stepLabel.textContent = `Step ${current + 1} of 12`;
      progressEls.forEach((el, idx) => {
        el.className = 'h-1.5 rounded-full ' + (idx <= current ? 'bg-gradient-to-r from-indigo-400 to-sky-400' : 'bg-white/10');
      });
      backBtn.disabled = current === 0;
      skipBtn.classList.toggle('hidden', !isSkippable(current));
      nextBtn.innerHTML = current === stepSections.length - 1
        ? 'Finish <i data-lucide="check" class="size-4"></i>'
        : 'Continue <i data-lucide="arrow-right" class="size-4"></i>';
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    }

    function isSkippable(idx) {
      // Allow skip on topics, days, reminder time
      return [3, 6, 10].includes(idx);
    }

    function showStep(idx) {
      stepSections.forEach((s, i) => s.classList.toggle('hidden', i !== idx));
      current = idx;
      updateProgress();
    }

    // Single-select handlers
    function handleSingleClick(group, value, btn) {
      document.querySelectorAll(`[data-single="${group}"]`).forEach(b => {
        b.setAttribute('aria-pressed', 'false');
        b.classList.remove('ring-2','ring-indigo-400/70','bg-indigo-500/10','border-indigo-400/40');
        b.classList.add('border-white/10','bg-white/[0.04]');
      });
      btn.setAttribute('aria-pressed', 'true');
      btn.classList.add('ring-2','ring-indigo-400/70','bg-indigo-500/10','border-indigo-400/40');
      btn.classList.remove('border-white/10','bg-white/[0.04]');

      // Save state
      if (group === 'age') state.age = value;
      if (group === 'goal') state.goal = value;
      if (group === 'daysPerWeek') state.daysPerWeek = value;
      if (group === 'level') state.level = value;
      if (group === 'accent') state.accent = value;
      if (group === 'reminderQuick') {
        state.reminderTime = value;
        const timeInput = document.getElementById('timeInput');
        if (timeInput) timeInput.value = value;
      }
      showSavedHint();
    }

    // Multi-select handlers
    function toggleMulti(group, value, btn) {
      let list = state[group];
      if (!Array.isArray(list)) list = [];
      const exists = list.includes(value);
      if (exists) {
        list = list.filter(v => v !== value);
        btn.classList.remove('ring-2','ring-indigo-400/70','bg-indigo-500/10','border-indigo-400/40','text-zinc-100');
        btn.classList.add('border-white/10','bg-white/[0.04]');
      } else {
        list.push(value);
        btn.classList.add('ring-2','ring-indigo-400/70','bg-indigo-500/10','border-indigo-400/40','text-zinc-100');
        btn.classList.remove('border-white/10','bg-white/[0.04]');
      }
      state[group] = list;
      showSavedHint();
    }

    // Attach listeners for dynamic elements
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-single]');
      if (btn) {
        e.preventDefault();
        const group = btn.getAttribute('data-single');
        const value = btn.getAttribute('data-value');
        handleSingleClick(group, value, btn);
      }
      const chip = e.target.closest('[data-multi]');
      if (chip) {
        e.preventDefault();
        const group = chip.getAttribute('data-multi');
        const value = chip.getAttribute('data-value');
        toggleMulti(group, value, chip);
      }
    });

    // Name input
    const nameInput = document.getElementById('nameInput');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        state.name = e.target.value.trim();
      });
      nameInput.addEventListener('blur', showSavedHint);
    }

    // Slider
    const slider = document.getElementById('sessionSlider');
    const sessionValue = document.getElementById('sessionValue');
    function updateSliderBackground() {
      const min = parseInt(slider.min, 10);
      const max = parseInt(slider.max, 10);
      const val = parseInt(slider.value, 10);
      const pct = ((val - min) / (max - min)) * 100;
      slider.style.background = `linear-gradient(90deg, rgba(99,102,241,0.9) ${pct}%, rgba(255,255,255,0.08) ${pct}%)`;
    }
    if (slider) {
      slider.value = state.sessionLength;
      sessionValue.textContent = `${slider.value} min`;
      updateSliderBackground();
      slider.addEventListener('input', () => {
        state.sessionLength = parseInt(slider.value, 10);
        sessionValue.textContent = `${slider.value} min`;
        updateSliderBackground();
      });
      slider.addEventListener('change', showSavedHint);
    }

    // Reminder time
    const timeInput = document.getElementById('timeInput');
    if (timeInput) {
      timeInput.addEventListener('change', (e) => {
        state.reminderTime = e.target.value;
        showSavedHint();
      });
    }

    // Consent
    const consentToggle = document.getElementById('consentToggle');
    const consentBox = document.getElementById('consentBox');
    if (consentToggle) {
      consentToggle.addEventListener('click', () => {
        state.consent = !state.consent;
        const icon = consentBox.querySelector('svg');
        if (state.consent) {
          consentBox.classList.add('border-emerald-400/50','bg-emerald-500/15');
          if (icon) icon.classList.remove('hidden');
        } else {
          consentBox.classList.remove('border-emerald-400/50','bg-emerald-500/15');
          if (icon) icon.classList.add('hidden');
        }
        showSavedHint();
      });
    }

    // Mic permission
    const micButton = document.getElementById('micButton');
    const micStatus = document.getElementById('micStatus');
    if (micButton) {
      micButton.addEventListener('click', async () => {
        try {
          micStatus.innerHTML = `<i data-lucide="loader-circle" class="size-3.5 animate-spin"></i><span>Requesting...</span>`;
          lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          state.micGranted = true;
          // Immediately stop tracks
          stream.getTracks().forEach(t => t.stop());
          micStatus.innerHTML = `<i data-lucide="check-circle-2" class="size-3.5 text-emerald-300"></i><span>Permission: Granted</span>`;
          micButton.classList.add('bg-emerald-500/15','border-emerald-400/40');
          micButton.classList.remove('bg-indigo-500/15','border-indigo-500/40');
          showSavedHint();
          lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        } catch (err) {
          state.micGranted = false;
          micStatus.innerHTML = `<i data-lucide="alert-triangle" class="size-3.5 text-amber-300"></i><span>Permission: Denied</span>`;
          lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }
      });
    }

    // Navigation
    function validateStep(idx) {
      // Light validation for demo purposes
      switch (idx) {
        case 0: return (state.name && state.name.length >= 1);
        case 1: return !!state.age;
        case 2: return !!state.goal;
        case 3: return true; // optional multi
        case 4: return !!state.sessionLength;
        case 5: return !!state.daysPerWeek;
        case 6: return true; // optional multi
        case 7: return !!state.level;
        case 8: return !!state.accent;
        case 9: return state.micGranted === true; // require permission
        case 10: return !!state.reminderTime; // encourage choosing time
        case 11: return state.consent === true;
        default: return true;
      }
    }

    nextBtn.addEventListener('click', () => {
      if (!validateStep(current)) {
        // Tiny nudge
        savedHint.textContent = "Please make a selection";
        savedHint.style.opacity = '1';
        setTimeout(() => {
          savedHint.style.opacity = '0';
          savedHint.textContent = "Saved";
        }, 900);
        return;
      }
      if (current < stepSections.length - 1) {
        showStep(current + 1);
      } else {
        // Finish
        doneToast.style.opacity = '1';
        setTimeout(() => doneToast.style.opacity = '0', 2000);
        console.log("Onboarding complete:", state);
      }
    });

    backBtn.addEventListener('click', () => {
      if (current > 0) showStep(current - 1);
    });

    skipBtn.addEventListener('click', () => {
      if (current < stepSections.length - 1) showStep(current + 1);
    });

    // Initialize first step
    showStep(0);

    // Three.js mini globe
    (() => {
      const canvas = document.getElementById('globeCanvas');
      if (!canvas) return;
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
      camera.position.z = 4.4;

      const ambient = new THREE.AmbientLight(0x7090ff, 0.6);
      scene.add(ambient);
      const point = new THREE.PointLight(0x88ccff, 1.0);
      point.position.set(3, 2, 4);
      scene.add(point);

      const sphereGeo = new THREE.SphereGeometry(1.2, 32, 32);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: 0x1d4ed8,
        roughness: 0.45,
        metalness: 0.2,
        transparent: true,
        opacity: 0.85
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      scene.add(sphere);

      // Wireframe edges for grid-like look
      const edges = new THREE.EdgesGeometry(new THREE.SphereGeometry(1.205, 16, 12));
      const lineMat = new THREE.LineBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.6 });
      const wire = new THREE.LineSegments(edges, lineMat);
      scene.add(wire);

      function resize() {
        const { clientWidth: w, clientHeight: h } = canvas;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(w, h, false);
        camera.aspect = (w / h) || 1;
        camera.updateProjectionMatrix();
      }

      function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.003;
        wire.rotation.y += 0.0035;
        renderer.render(scene, camera);
      }

      window.addEventListener('resize', resize);
      // Ensure correct size after layout
      setTimeout(resize, 50);
      animate();
    })();
  
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-15 blur-3xl"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>
<div className="relative w-full max-w-[760px]">

<div className="absolute inset-0 -z-10 blur-3xl opacity-30" style={{background: 'radial-gradient(600px 300px at 20% 0%, rgba(56,189,248,0.2), transparent 60%), radial-gradient(600px 300px at 80% 20%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(700px 400px at 50% 120%, rgba(34,197,94,0.12), transparent 60%)'}}></div>

<div className="w-full rounded-2xl border border-white/10 bg-[#121216]/90 shadow-2xl shadow-black/50 backdrop-blur-lg overflow-hidden">

<div className="relative flex items-center justify-between gap-4 px-5 sm:px-6 pt-5 pb-4 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="size-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center shadow-md">
<svg className="lucide lucide-mic size-6 text-zinc-300" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<div className="min-w-0">
<div className="text-[15px] sm:text-base leading-tight font-medium text-slate-100">Welcome! A quick setup to get you speaking!</div>
<div className="text-xs text-slate-400 mt-0.5" id="aura-emf6tbyum">12 short questions [&lt;2 minutes]</div>
</div>
</div>

<div className="relative">
</div>
</div>

<div className="px-5 sm:px-6 py-3 border-b border-white/10">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-400 font-sans" id="stepLabel">Step 1 of 12</div>
<div className="text-xs text-slate-400 font-sans" id="savedHint" style={{opacity: '0'}}>Saved</div>
</div>
<div className="mt-2 grid grid-cols-12 gap-1.5">

<div className="h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400" data-progress=""></div>
<div className="h-1.5 rounded-full bg-white/10" data-progress=""></div>
<div className="h-1.5 rounded-full bg-white/10" data-progress=""></div>
<div className="h-1.5 rounded-full bg-white/10" data-progress=""></div>
<div className="h-1.5 rounded-full bg-white/10" data-progress=""></div>
<div className="h-1.5 rounded-full bg-white/10" data-progress=""></div>
<div className="h-1.5 rounded-full bg-white/10" data-progress=""></div>
<div className="h-1.5 rounded-full bg-white/10" data-progress=""></div>
<div className="h-1.5 rounded-full bg-white/10" data-progress=""></div>
<div className="h-1.5 rounded-full bg-white/10" data-progress=""></div>
<div className="h-1.5 rounded-full bg-white/10" data-progress=""></div>
<div className="h-1.5 rounded-full bg-white/10" data-progress=""></div>
</div>
</div>

<div className="px-5 sm:px-6 py-5 sm:py-6">
<div className="space-y-1" id="steps">

<section className="" data-step="1">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">What should we call you?</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">First name or nickname is perfect.</p>
<div className="mt-4">
<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] focus-within:border-green-400/40">
<div className="pl-3 text-slate-300">
<svg className="lucide lucide-badge-check size-[18px]" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<input className="w-full bg-transparent outline-none text-[16px] placeholder:text-slate-500 py-3 pr-3" id="nameInput" inputmode="text" placeholder="e.g., Alex" type="text"/>
</div>
</div>
</section>

<section className="hidden" data-step="2">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">How old are you?</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">We’ll personalize content for your age.</p>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
<button className="option-btn group rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-left" data-single="age" data-value="6-9">
<div className="flex items-center justify-between">
<span className="text-[15px] text-slate-100 font-sans">6–9</span>
<svg className="lucide lucide-sparkles size-4 text-zinc-400 group-aria-pressed:text-indigo-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="text-xs text-slate-500 mt-1 font-sans">Kids</div>
</button>
<button className="option-btn group rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-left" data-single="age" data-value="10-12">
<div className="flex items-center justify-between">
<span className="text-[15px] text-slate-100 font-sans">10–12</span>
<svg className="lucide lucide-gamepad-2 size-4 text-zinc-400" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</div>
<div className="text-xs text-slate-500 mt-1 font-sans">Pre-teen</div>
</button>
<button className="option-btn group rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-left" data-single="age" data-value="13-17">
<div className="flex items-center justify-between">
<span className="text-[15px] text-slate-100 font-sans">13–17</span>
<svg className="lucide lucide-school size-4 text-zinc-400" data-lucide="school" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M18 5v16"></path><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"></path><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"></path><path d="M6 5v16"></path><circle cx="12" cy="9" r="2"></circle></svg>
</div>
<div className="text-xs text-slate-500 mt-1 font-sans">Teen</div>
</button>
</div>
</section>

<section className="hidden" data-step="3">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">What’s your main goal?</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">Pick one for now.</p>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left" data-single="goal" data-value="Pronunciation">
<div className="flex items-center gap-2">
<i className="size-5 text-slate-300" data-lucide="waveform"></i>
<span className="text-[15px] text-slate-100 font-sans">Improve pronunciation</span>
</div>
</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left" data-single="goal" data-value="Confidence">
<div className="flex items-center gap-2">
<svg className="lucide lucide-smile size-5 text-zinc-300" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
<span className="text-[15px] text-slate-100 font-sans">Build confidence</span>
</div>
</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left" data-single="goal" data-value="Test Prep">
<div className="flex items-center gap-2">
<svg className="lucide lucide-notebook-pen size-5 text-zinc-300" data-lucide="notebook-pen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path></svg>
<span className="text-[15px] text-slate-100 font-sans">Prepare for a test</span>
</div>
</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left" data-single="goal" data-value="Friends">
<div className="flex items-center gap-2">
<svg className="lucide lucide-users size-5 text-zinc-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-[15px] text-slate-100 font-sans">Speak with friends</span>
</div>
</button>
</div>
</section>

<section className="hidden" data-step="4">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">Which topics are fun for you?</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">Choose as many as you like.</p>
<div className="mt-4 flex flex-wrap gap-2">
<button className="chip-btn px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/[0.04] font-sans" data-multi="topics" data-value="Games">Games</button>
<button className="chip-btn px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/[0.04] font-sans" data-multi="topics" data-value="Music">Music</button>
<button className="chip-btn px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/[0.04] font-sans" data-multi="topics" data-value="Movies">Movies</button>
<button className="chip-btn px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/[0.04] font-sans" data-multi="topics" data-value="Sports">Sports</button>
<button className="chip-btn px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/[0.04] font-sans" data-multi="topics" data-value="Science">Science</button>
<button className="chip-btn px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/[0.04] font-sans" data-multi="topics" data-value="Animals">Animals</button>
<button className="chip-btn px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/[0.04] font-sans" data-multi="topics" data-value="Art">Art</button>
<button className="chip-btn px-3 py-1.5 text-sm rounded-full border border-white/10 bg-white/[0.04] font-sans" data-multi="topics" data-value="Tech">Tech</button>
</div>
</section>

<section className="hidden" data-step="5">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">How long should each session be?</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">Move the slider to choose.</p>
<div className="mt-5">
<div className="flex items-center justify-between text-xs text-slate-400 mb-2">
<span className="font-sans">5 min</span>
<span className="text-slate-200 font-medium font-sans" id="sessionValue">15 min</span>
<span className="font-sans">30 min</span>
</div>
<input className="w-full appearance-none h-2 rounded-full outline-none" id="sessionSlider" max="30" min="5" step="5" style={{background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.9) 40%, rgba(255, 255, 255, 0.08) 40%)'}} type="range"/>
<div className="flex justify-between text-[11px] text-slate-500 mt-2">
<span className="font-sans">5</span><span className="font-sans">10</span><span className="font-sans">15</span><span className="font-sans">20</span><span className="font-sans">25</span><span className="font-sans">30</span>
</div>
</div>
</section>

<section className="hidden" data-step="6">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">How many days per week?</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">Pick a plan you can follow.</p>
<div className="mt-4 grid grid-cols-5 gap-2">
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] py-2 text-sm font-sans" data-single="daysPerWeek" data-value="2">2</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] py-2 text-sm font-sans" data-single="daysPerWeek" data-value="3">3</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] py-2 text-sm font-sans" data-single="daysPerWeek" data-value="4">4</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] py-2 text-sm font-sans" data-single="daysPerWeek" data-value="5">5</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] py-2 text-sm font-sans" data-single="daysPerWeek" data-value="7">7</button>
</div>
</section>

<section className="hidden" data-step="7">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">Which days work best?</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">Choose your practice days.</p>
<div className="mt-4 grid grid-cols-7 gap-1.5">
<button className="chip-btn w-full py-2 text-xs rounded-md border border-white/10 bg-white/[0.04] font-sans" data-multi="days" data-value="Mon">Mon</button>
<button className="chip-btn w-full py-2 text-xs rounded-md border border-white/10 bg-white/[0.04] font-sans" data-multi="days" data-value="Tue">Tue</button>
<button className="chip-btn w-full py-2 text-xs rounded-md border border-white/10 bg-white/[0.04] font-sans" data-multi="days" data-value="Wed">Wed</button>
<button className="chip-btn w-full py-2 text-xs rounded-md border border-white/10 bg-white/[0.04] font-sans" data-multi="days" data-value="Thu">Thu</button>
<button className="chip-btn w-full py-2 text-xs rounded-md border border-white/10 bg-white/[0.04] font-sans" data-multi="days" data-value="Fri">Fri</button>
<button className="chip-btn w-full py-2 text-xs rounded-md border border-white/10 bg-white/[0.04] font-sans" data-multi="days" data-value="Sat">Sat</button>
<button className="chip-btn w-full py-2 text-xs rounded-md border border-white/10 bg-white/[0.04] font-sans" data-multi="days" data-value="Sun">Sun</button>
</div>
</section>

<section className="hidden" data-step="8">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">What’s your speaking level?</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">Choose the closest.</p>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-2">
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] py-2 text-sm font-sans" data-single="level" data-value="Beginner">Beginner</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] py-2 text-sm font-sans" data-single="level" data-value="Elementary">Elementary</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] py-2 text-sm font-sans" data-single="level" data-value="Intermediate">Intermediate</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] py-2 text-[13px] font-sans" data-single="level" data-value="Upper-Intermediate">Upper‑Int</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] py-2 text-sm font-sans" data-single="level" data-value="Advanced">Advanced</button>
</div>
</section>

<section className="hidden" data-step="9">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">Choose your accent focus</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">You can change later.</p>
<div className="mt-4 grid grid-cols-2 gap-2.5">
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left" data-single="accent" data-value="American">
<div className="flex items-center gap-2">
<svg className="lucide lucide-flag size-4 text-zinc-300" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
<span className="text-[15px] text-slate-100 font-sans">American</span>
</div>
</button>
<button className="option-btn rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left" data-single="accent" data-value="British">
<div className="flex items-center gap-2">
<svg className="lucide lucide-flag-triangle-left size-4 text-zinc-300" data-lucide="flag-triangle-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5"></path></svg>
<span className="text-[15px] text-slate-100 font-sans">British</span>
</div>
</button>
</div>
</section>

<section className="hidden" data-step="10">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">Allow microphone access?</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">We only listen when you’re practicing.</p>
<div className="mt-4">
<button className="w-full rounded-lg border border-green-500/40 bg-green-500/15 hover:bg-green-500/20 transition-colors px-4 py-3.5 flex items-center justify-center gap-2" id="micButton">
<svg className="lucide lucide-mic size-5 text-indigo-300" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
<span className="text-[15px] text-slate-100 font-sans">Enable microphone</span>
</button>
<div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2" id="micStatus">
<svg className="lucide lucide-shield size-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="font-sans">Permission: Not requested</span>
</div>
</div>
</section>

<section className="hidden" data-step="11">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">Pick a daily reminder time</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">We’ll nudge you to practice.</p>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
<button className="quick-time rounded-lg border border-white/10 bg-white/[0.04] py-3 text-sm font-sans" data-single="reminderQuick" data-value="16:00">4:00 PM</button>
<button className="quick-time rounded-lg border border-white/10 bg-white/[0.04] py-3 text-sm font-sans" data-single="reminderQuick" data-value="18:00">6:00 PM</button>
<button className="quick-time rounded-lg border border-white/10 bg-white/[0.04] py-3 text-sm font-sans" data-single="reminderQuick" data-value="20:00">8:00 PM</button>
</div>
<div className="mt-3">
<div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5">
<svg className="lucide lucide-clock size-4 text-zinc-300" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<input className="bg-transparent outline-none text-[16px] w-full" id="timeInput" type="time"/>
</div>
</div>
</section>

<section className="hidden" data-step="12">
<h2 className="text-xl sm:text-2xl tracking-tight text-slate-100 font-sans font-semibold">Do you have parent/guardian permission?</h2>
<p className="text-sm text-slate-400 mt-1.5 font-sans">Required for kids and teens.</p>
<div className="mt-4">
<button className="w-full flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-left" id="consentToggle">
<span className="inline-flex items-center justify-center size-5 rounded-md border border-white/15 bg-white/[0.02]" id="consentBox">
<svg className="lucide lucide-check size-4 text-emerald-300 hidden" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-[15px] text-slate-100 font-sans">I have permission to use this app</span>
</button>
<div className="text-xs text-slate-500 mt-2 font-sans">
                By continuing, you confirm your parent/guardian agrees. <a className="text-green-300 hover:text-green-200 underline underline-offset-2 font-sans" href="#">Learn more</a>
</div>
</div>
</section>
</div>
</div>

<div className="px-5 sm:px-6">
<div className="border-t border-white/10"></div>
</div>

<div className="px-5 sm:px-6 py-4 flex items-center justify-between gap-2">
<button className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-3 py-2 text-sm text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed font-sans" disabled="" id="backBtn">
<svg className="lucide lucide-arrow-left size-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
          Back
        </button>
<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-3 py-2 text-sm text-slate-200 font-sans" id="skipBtn">
            Skip
          </button>
<button className="flex gap-2 hover:bg-green-500/20 text-sm text-slate-100 bg-green-500/15 border-green-500/40 border rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 items-center" id="nextBtn">Continue <svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
</div>
</div>

<div className="pointer-events-none fixed left-1/2 -translate-x-1/2 bottom-6 opacity-0 transition-opacity duration-300 rounded-xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5 shadow-lg flex items-center gap-2" id="doneToast" style={{bottom: 'calc(1.5rem + env(safe-area-inset-bottom))'}}>
<svg className="lucide lucide-party-popper size-4 text-emerald-300" data-lucide="party-popper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.8 11.3 2 22l10.7-3.79"></path><path d="M4 3h.01"></path><path d="M22 8h.01"></path><path d="M15 2h.01"></path><path d="M22 20h.01"></path><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path></svg>
<span className="text-sm text-slate-100 font-sans">All set! Preferences saved.</span>
</div>
</div>


    </>
  );
}
