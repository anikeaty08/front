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
      
    /* -------------------------  Data & helpers ------------------------- */
    const steps = [
      {
        label: 'Basique',
        privacy: '🔐 100 % Local',
        ideal:   'Réunions possibles ≤ 30 min. 45 min ok mais traitement long.',
        speaker: '🗣️ Diarisation basique (séparation des voix).',
        battery: 'Impact batterie : Faible',
        cost:    'Coût : Inclus',
        pro:     false
      },
      {
        label: 'Précis',
        privacy: '🔐 100 % Local',
        ideal:   'Réunions ≤ 45 min conseillées ; > 1 h très long selon la machine.',
        speaker: '🗣️ Diarisation améliorée (voix plus nettes).',
        battery: 'Impact batterie : Moyen',
        cost:    'Coût : Inclus',
        pro:     false
      },
      {
        label: 'Temps Réel',
        privacy: '🔐 100 % Local',
        ideal:   'Idéal pour dictée continue & back-to-back meetings (latence < 1 s).',
        speaker: '🗣️ Diarisation avancée et identification en direct.',
        battery: 'Impact batterie : Faible (optimisé)',
        cost:    'Coût : Abonnement Pro requis',
        pro:     true
      },
      {
        label: 'Cloud',
        privacy: '☁️ Chiffrement TLS',
        ideal:   'Excellente précision pour longues sessions multi-langues.',
        speaker: '🗣️ Diarisation + attribution des noms des participants.',
        battery: 'Impact batterie : N/A',
        cost:    'Coût : Abonnement Pro requis',
        pro:     true
      }
    ];

    const positions = ['0%', '33.3%', '66.6%', '100%'];

    /* -------------------------  DOM elements -------------------------- */
    const sliderThumb = document.getElementById('sliderThumb');
    const stepButtons = document.querySelectorAll('.step');
    const feedbackBox = {
      title:   document.getElementById('feedbackTitle'),
      privacy: document.getElementById('privacy'),
      ideal:   document.getElementById('ideal'),
      speaker: document.getElementById('speaker'),
      battery: document.getElementById('battery'),
      cost:    document.getElementById('cost')
    };
    const upgradeBtn = document.getElementById('upgradeBtn');

    /* -----------------------  Interaction logic ----------------------- */
    function setActive(step) {
      sliderThumb.style.left = positions[step];

      // dots
      document.querySelectorAll('.dot').forEach((dot, idx) => {
        dot.classList.toggle('bg-indigo-500', idx === step && step < 2);
        dot.classList.toggle('bg-amber-500', idx === step && step >= 2);
        dot.classList.toggle('border-indigo-500', idx === step && step < 2);
        dot.classList.toggle('border-amber-500', idx === step && step >= 2);
      });

      // aria-selected
      stepButtons.forEach((btn, idx) => btn.setAttribute('aria-selected', idx === step));

      const d = steps[step];
      feedbackBox.title.innerHTML = `<i data-lucide="sliders" class="w-5 h-5 text-indigo-400"></i>${d.label}`;
      feedbackBox.privacy.textContent = d.privacy;
      feedbackBox.ideal.textContent   = d.ideal;
      feedbackBox.speaker.textContent = d.speaker;
      feedbackBox.battery.textContent = d.battery;
      feedbackBox.cost.textContent    = d.cost;

      upgradeBtn.classList.toggle('hidden', !d.pro);
      upgradeBtn.setAttribute('aria-hidden', d.pro ? 'false' : 'true');

      lucide.createIcons();
    }

    /* ----------------------------  Init ------------------------------- */
    window.addEventListener('DOMContentLoaded', () => {
      // fade-in sequence
      document.querySelectorAll('h1, #sliderContainer, #feedback')
              .forEach((el, i) => {
                el.classList.remove('opacity-0', 'translate-y-4');
                el.style.transitionDelay = `${i * 150}ms`;
              });

      // default step
      setActive(1);
    });

    /* ------------------------  Event binding -------------------------- */
    stepButtons.forEach(btn =>
      btn.addEventListener('click', () => setActive(+btn.dataset.step))
    );

    // keyboard navigation
    document.addEventListener('keydown', e => {
      const keys = ['ArrowLeft', 'ArrowRight'];
      if (!keys.includes(e.key)) return;
      const current = +[...stepButtons].find(b => b.getAttribute('aria-selected') === 'true').dataset.step;
      const next = e.key === 'ArrowRight' ? (current + 1) % steps.length
                                          : (current - 1 + steps.length) % steps.length;
      setActive(next);
    });

    // icons first render
    lucide.createIcons();
  
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
      
<main aria-labelledby="title" className="w-full max-w-xl">

<h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 opacity-0 translate-y-4 transition duration-700 delay-100" id="title">
      Moteur de Transcription
    </h1>

<div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-lg backdrop-blur-md opacity-0 translate-y-4 transition duration-700 delay-200" id="sliderContainer">
<div className="relative mb-12">
<div className="h-1 bg-gray-700 rounded-full"></div>
<div className="absolute -top-2.5 w-6 h-6 bg-indigo-500 rounded-full shadow-lg transform -translate-x-1/2 transition-all duration-300" id="sliderThumb" style={{left: `33.3%`}}></div>

<div className="flex justify-between mt-4 select-none" role="tablist">

<button aria-selected="false" className="step relative group text-xs md:text-sm font-medium focus:outline-none pt-6" data-step="0" role="tab">
<span className="dot absolute left-1/2 -translate-x-1/2 -top-6 w-3 h-3 rounded-full border-2 border-gray-400 bg-gray-800 group-hover:bg-indigo-400 transition"></span>
            Basique
            
<div className="flex justify-center gap-4 mt-2">

<div aria-label="Dictée : Moyen" className="flex flex-col items-center">
<i className="w-3 h-3 mb-0.5 text-indigo-400" data-lucide="mic"></i>
<div className="flex gap-0.5">
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-gray-600 rounded"></span>
<span className="w-1.5 h-1.5 bg-gray-600 rounded"></span>
</div>
</div>

<div aria-label="Meetings : Mauvais" className="flex flex-col items-center">
<i className="w-3 h-3 mb-0.5 text-emerald-400" data-lucide="users"></i>
<div className="flex gap-0.5">
<span className="w-1.5 h-1.5 bg-emerald-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-gray-600 rounded"></span>
<span className="w-1.5 h-1.5 bg-gray-600 rounded"></span>
<span className="w-1.5 h-1.5 bg-gray-600 rounded"></span>
</div>
</div>
</div>
</button>

<button aria-selected="true" className="step relative group text-xs md:text-sm font-medium focus:outline-none pt-6" data-step="1" role="tab">
<span className="dot absolute left-1/2 -translate-x-1/2 -top-6 w-3 h-3 rounded-full border-2 border-gray-400 bg-gray-800 group-hover:bg-indigo-400 transition"></span>
            Précis
            <div className="flex justify-center gap-4 mt-2">
<div aria-label="Dictée : Bon" className="flex flex-col items-center">
<i className="w-3 h-3 mb-0.5 text-indigo-400" data-lucide="mic"></i>
<div className="flex gap-0.5">
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-gray-600 rounded"></span>
</div>
</div>
<div aria-label="Meetings : Mauvais" className="flex flex-col items-center">
<i className="w-3 h-3 mb-0.5 text-emerald-400" data-lucide="users"></i>
<div className="flex gap-0.5">
<span className="w-1.5 h-1.5 bg-emerald-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-gray-600 rounded"></span>
<span className="w-1.5 h-1.5 bg-gray-600 rounded"></span>
<span className="w-1.5 h-1.5 bg-gray-600 rounded"></span>
</div>
</div>
</div>
</button>

<button aria-selected="false" className="step relative group text-xs md:text-sm font-medium focus:outline-none pt-6" data-step="2" role="tab">
<span className="dot absolute left-1/2 -translate-x-1/2 -top-6 w-3 h-3 rounded-full border-2 border-amber-500 bg-gray-800 group-hover:bg-amber-400 transition"></span>
<span className="flex items-center gap-1">
              Temps Réel
              <span className="text-[10px] border border-amber-400 px-1.5 py-0.5 rounded-full">PRO</span>
</span>
<div className="flex justify-center gap-4 mt-2">
<div aria-label="Dictée : Excellent" className="flex flex-col items-center">
<i className="w-3 h-3 mb-0.5 text-indigo-400" data-lucide="mic"></i>
<div className="flex gap-0.5">
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
</div>
</div>
<div aria-label="Meetings : Bon" className="flex flex-col items-center">
<i className="w-3 h-3 mb-0.5 text-emerald-400" data-lucide="users"></i>
<div className="flex gap-0.5">
<span className="w-1.5 h-1.5 bg-emerald-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-emerald-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-emerald-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-gray-600 rounded"></span>
</div>
</div>
</div>
</button>

<button aria-selected="false" className="step relative group text-xs md:text-sm font-medium focus:outline-none pt-6" data-step="3" role="tab">
<span className="dot absolute left-1/2 -translate-x-1/2 -top-6 w-3 h-3 rounded-full border-2 border-amber-500 bg-gray-800 group-hover:bg-amber-400 transition"></span>
<span className="flex items-center gap-1">
              Cloud
              <span className="text-[10px] border border-amber-400 px-1.5 py-0.5 rounded-full">PRO</span>
</span>
<div className="flex justify-center gap-4 mt-2">
<div aria-label="Dictée : Excellent" className="flex flex-col items-center">
<i className="w-3 h-3 mb-0.5 text-indigo-400" data-lucide="mic"></i>
<div className="flex gap-0.5">
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-indigo-400 rounded"></span>
</div>
</div>
<div aria-label="Meetings : Excellent" className="flex flex-col items-center">
<i className="w-3 h-3 mb-0.5 text-emerald-400" data-lucide="users"></i>
<div className="flex gap-0.5">
<span className="w-1.5 h-1.5 bg-emerald-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-emerald-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-emerald-400 rounded"></span>
<span className="w-1.5 h-1.5 bg-emerald-400 rounded"></span>
</div>
</div>
</div>
</button>
</div>
</div>
</div>

<section aria-live="polite" className="space-y-3 bg-gray-800/50 border border-gray-700 rounded-xl p-6 mt-6 opacity-0 translate-y-4 transition duration-700 delay-300" id="feedback">
<h2 className="text-xl font-semibold tracking-tight flex items-center gap-2" id="feedbackTitle"></h2>
<p className="flex items-center gap-2" id="privacy"></p>
<p className="flex items-center gap-2" id="ideal"></p>
<p className="flex items-center gap-2" id="speaker"></p>
<p className="flex items-center gap-2" id="battery"></p>
<p className="flex items-center gap-2" id="cost"></p>
<button className="hidden mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500 hover:bg-amber-500/20 transition" id="upgradeBtn">
<i className="w-4 h-4" data-lucide="rocket"></i> Mettre à niveau vers Pro
      </button>
</section>
</main>


    </>
  );
}
