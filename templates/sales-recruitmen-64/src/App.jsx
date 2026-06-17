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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      let currentStep = 0;
      const totalSteps = 8;

      function updateUI() {
          document.querySelectorAll('.step-content').forEach((el, idx) => {
              if(idx === currentStep) {
                  el.classList.remove('hidden');
                  el.classList.add('fade-in');
                  // Focus first input of the step for UX
                  const input = el.querySelector('input, select, textarea');
                  if(input) input.focus();
              } else {
                  el.classList.add('hidden');
                  el.classList.remove('fade-in');
              }
          });
          const progress = ((currentStep + 1) / totalSteps) * 100;
          document.getElementById('progressBar').style.width = `${progress}%`;
          document.getElementById('stepCount').innerText = currentStep + 1;
      }

      function nextStep() {
          const currentStepEl = document.querySelector(`.step-content[data-step="${currentStep}"]`);
          const inputs = currentStepEl.querySelectorAll('input, select, textarea');
          let valid = true;
          inputs.forEach(input => {
              if (!input.checkValidity()) {
                  input.reportValidity();
                  valid = false;
              }
          });
          // Custom check for radio groups
          if (currentStep === 5 || currentStep === 6) {
             const name = currentStep === 5 ? 'cinisello' : 'normandia';
             const checked = document.querySelector(`input[name="${name}"]:checked`);
             if(!checked) {
                 alert("Seleziona un'opzione per continuare.");
                 valid = false;
             }
          }

          if(valid && currentStep < totalSteps - 1) {
              currentStep++;
              updateUI();
          }
      }

      function prevStep() {
          if(currentStep > 0) {
              currentStep--;
              updateUI();
          }
      }

      function goToForm() {
          document.getElementById('step-landing').classList.add('hidden');
          document.getElementById('step-form').classList.remove('hidden');
          document.getElementById('step-form').classList.add('fade-in');
          window.scrollTo(0, 0);
          updateUI();
      }

      function submitApplication(event) {
          event.preventDefault();
          const nameInput = document.getElementById('name').value;
          const firstName = nameInput.split(' ')[0] || "Candidato";
          document.getElementById('userNameDisplay').textContent = firstName;

          document.getElementById('step-form').classList.add('hidden');
          const thankyou = document.getElementById('step-thankyou');
          thankyou.classList.remove('hidden');
          thankyou.classList.add('fade-in');
          window.scrollTo(0, 0);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen blur-sm -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="1bY8o6HVTI1oxJxuCJEG"></div>
</div>

<header className="w-full border-b border-zinc-900/50 backdrop-blur-md fixed top-0 z-50">
</header>
<main className="flex-grow flex flex-col sm:px-6 overflow-hidden pt-24 pr-4 pb-12 pl-4 relative items-center justify-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<section className="w-full max-w-2xl mx-auto fade-in" id="step-landing">
<div className="text-center mb-10 space-y-4">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-xs text-zinc-300 mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
            Nuove posizioni aperte
          </div>
<h1 className="text-4xl sm:text-5xl font-medium text-white tracking-tight leading-[1.1]">
            Diventa un Top Performer
            <br/>
            nel nostro team vendite.
          </h1>
<p className="text-lg text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Stiamo cercando talenti che vogliano dominare il mercato. Guarda il
            video qui sotto per capire se hai la stoffa giusta.
          </p>
</div>

<div className="relative w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-black/50 group cursor-pointer mb-10 transition-all duration-500 hover:border-zinc-700">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="h-16 w-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" data-icon="lucide:play" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
<div className="">
<p className="text-white text-sm font-medium">Visione Aziendale</p>
<p className="text-xs text-zinc-400">
                04:20 • Solo per candidati seri
              </p>
</div>
</div>
</div>
<div className="text-center">
<button className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-black bg-white rounded-lg overflow-hidden transition-all hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-black" onclick="goToForm()">
            Invia la tua candidatura
            <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<p className="mt-4 text-xs text-zinc-500">
            Posti limitati per questo trimestre.
          </p>
</div>
</section>

<section className="w-full max-w-xl mx-auto hidden" id="step-form">
<div className="mb-8">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">
            Questionario di selezione
          </h2>
<p className="text-sm text-zinc-400">
            Compila tutti i campi con sincerità. La creatività è apprezzata.
          </p>
</div>
<form className="space-y-6" id="applicationForm" onsubmit="submitApplication(event)">
<div className="mb-8">
<div className="flex justify-between items-end mb-2">
<span className="text-xs text-zinc-500 font-medium">
                Step
                <span id="stepCount">1</span>
                di 8
              </span>
<span className="text-xs text-zinc-600" id="progressText"></span>
</div>
<div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full bg-white w-[12.5%] transition-all duration-500 ease-out" id="progressBar"></div>
</div>
</div>
<div className="step-content fade-in" data-step="0">
<label className="block text-xl font-medium text-white tracking-tight mb-4" htmlFor="name">
              Come ti chiami?
            </label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="name" placeholder="Nome e Cognome" required="" type="text"/>
<div className="mt-6">
<button className="group inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-zinc-200 transition-all" onclick="nextStep()" type="button">
                Avanti
                <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="step-content hidden" data-step="1">
<label className="block text-xl font-medium text-white tracking-tight mb-4" htmlFor="phone">
              Qual è il tuo numero?
            </label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="phone" placeholder="+39 333 ..." required="" type="tel"/>
<div className="mt-6 flex gap-3">
<button className="px-5 py-2.5 text-sm font-medium text-zinc-400 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-600 transition-all" onclick="prevStep()" type="button">
                Indietro
              </button>
<button className="group inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-zinc-200 transition-all" onclick="nextStep()" type="button">
                Avanti
                <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="step-content hidden" data-step="2">
<label className="block text-xl font-medium text-white tracking-tight mb-4" htmlFor="email">
              La tua email?
            </label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="email" placeholder="nome@esempio.com" required="" type="email"/>
<div className="mt-6 flex gap-3">
<button className="px-5 py-2.5 text-sm font-medium text-zinc-400 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-600 transition-all" onclick="prevStep()" type="button">
                Indietro
              </button>
<button className="group inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-zinc-200 transition-all" onclick="nextStep()" type="button">
                Avanti
                <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="step-content hidden" data-step="3">
<label className="block text-xl font-medium text-white tracking-tight mb-4" htmlFor="experience">
              Esperienza nella vendita?
            </label>
<div className="relative">
<select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all cursor-pointer" id="experience" required="">
<option disabled="" selected="" value="">
                  Seleziona un'opzione
                </option>
<option value="0-1">0 - 1 Anno (Junior)</option>
<option value="1-3">1 - 3 Anni (Mid)</option>
<option value="3-5">3 - 5 Anni (Senior)</option>
<option value="5+">5+ Anni (Expert)</option>
</select>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="mt-6 flex gap-3">
<button className="px-5 py-2.5 text-sm font-medium text-zinc-400 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-600 transition-all" onclick="prevStep()" type="button">
                Indietro
              </button>
<button className="group inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-zinc-200 transition-all" onclick="nextStep()" type="button">
                Avanti
                <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="step-content hidden" data-step="4">
<label className="block text-xl font-medium text-white tracking-tight mb-4" htmlFor="proudest_result">
              Il tuo risultato migliore?
            </label>
<textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none" id="proudest_result" placeholder="Raccontaci una tua vittoria..." required="" rows="4"></textarea>
<div className="mt-6 flex gap-3">
<button className="px-5 py-2.5 text-sm font-medium text-zinc-400 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-600 transition-all" onclick="prevStep()" type="button">
                Indietro
              </button>
<button className="group inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-zinc-200 transition-all" onclick="nextStep()" type="button">
                Avanti
                <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="step-content hidden" data-step="5">
<label className="block text-xl font-medium text-white tracking-tight mb-4">
              Hai lavorato da Cinisello?
            </label>
<div className="space-y-3">
<label className="flex items-center gap-3 p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 cursor-pointer hover:border-zinc-600 transition-colors">
<input className="accent-white w-4 h-4" name="cinisello" required="" type="radio" value="si"/>
<span className="text-zinc-300">Sì, conosco la zona</span>
</label>
<label className="flex items-center gap-3 p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 cursor-pointer hover:border-zinc-600 transition-colors">
<input className="accent-white w-4 h-4" name="cinisello" required="" type="radio" value="no"/>
<span className="text-zinc-300">No</span>
</label>
</div>
<div className="mt-6 flex gap-3">
<button className="px-5 py-2.5 text-sm font-medium text-zinc-400 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-600 transition-all" onclick="prevStep()" type="button">
                Indietro
              </button>
<button className="group inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-zinc-200 transition-all" onclick="nextStep()" type="button">
                Avanti
                <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="step-content hidden" data-step="6">
<label className="block text-xl font-medium text-white tracking-tight mb-4">
              Sei pro allo sbarco in Normandia?
            </label>
<div className="space-y-3">
<label className="flex items-center gap-3 p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 cursor-pointer hover:border-zinc-600 transition-colors">
<input className="accent-white w-4 h-4" name="normandia" required="" type="radio" value="si"/>
<span className="text-zinc-300">Assolutamente sì</span>
</label>
<label className="flex items-center gap-3 p-4 border border-zinc-800 rounded-lg bg-zinc-900/50 cursor-pointer hover:border-zinc-600 transition-colors">
<input className="accent-white w-4 h-4" name="normandia" required="" type="radio" value="no"/>
<span className="text-zinc-300">Preferisco la diplomazia</span>
</label>
</div>
<div className="mt-6 flex gap-3">
<button className="px-5 py-2.5 text-sm font-medium text-zinc-400 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-600 transition-all" onclick="prevStep()" type="button">
                Indietro
              </button>
<button className="group inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-zinc-200 transition-all" onclick="nextStep()" type="button">
                Avanti
                <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="step-content hidden" data-step="7">
<label className="block text-xl font-medium text-white tracking-tight mb-4" htmlFor="elia">
              Opinione su Elia?
            </label>
<textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none" id="elia" placeholder="Sii onesto..." required="" rows="4"></textarea>
<div className="mt-6 flex gap-3">
<button className="px-5 py-2.5 text-sm font-medium text-zinc-400 border border-zinc-800 rounded-lg hover:text-white hover:border-zinc-600 transition-all" onclick="prevStep()" type="button">
                Indietro
              </button>
<button className="group inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-zinc-200 transition-all" type="submit">
                Invia Candidatura
                <svg aria-hidden="true" data-icon="lucide:send" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</form>
</section>

<section className="w-full max-w-lg mx-auto text-center hidden fade-in py-10" id="step-thankyou">
<div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">
          Grazie,
          <span className="capitalize" id="userNameDisplay">Candidato</span>
          .
        </h2>
<p className="text-zinc-400 leading-relaxed mb-8">
          Abbiamo ricevuto la tua candidatura correttamente.
          <br/>
          Il nostro team sta analizzando le tue risposte (soprattutto quella su
          Elia).
          <br/>
          Se il tuo profilo è in linea, ti contatteremo entro 48 ore.
        </p>
<div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-xs text-zinc-500 max-w-xs mx-auto">
          ID Candidatura:
          <span className="font-mono text-zinc-300">#REF-8829-CN</span>
</div>
</section>
</main>
<footer className="w-full border-t border-zinc-900 py-6 mt-auto">
<div className="max-w-2xl mx-auto px-6 flex justify-between items-center text-xs text-zinc-600">
<p>© 2024 Acquisition Flow. Tutti i diritti riservati.</p>
<div className="flex gap-4">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Termini</a>
</div>
</div>
</footer>


    </>
  );
}
