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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      // Initialize Icons
      lucide.createIcons();

      // Scroll Reveal Observer
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
      });

      // Tabs Logic
      function switchTab(tabName) {
          const contents = document.querySelectorAll('.tab-content');
          contents.forEach(content => content.classList.remove('active'));
          document.getElementById(`tab-content-${tabName}`).classList.add('active');
          const buttons = ['website', 'funnel', 'auto'];
          buttons.forEach(btn => {
              const el = document.getElementById(`tab-btn-${btn}`);
              if (btn === tabName) {
                  el.className = "px-8 py-2.5 text-xs font-medium rounded-full transition-all duration-300 bg-white/10 text-white shadow-lg border border-white/10";
              } else {
                  el.className = "px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5";
              }
          });
      }

      // Accordion Logic
      function toggleAccordion(id) {
          const content = document.getElementById(id);
          const icon = document.getElementById(`icon-${id}`);
          if (content.style.gridTemplateRows === "1fr") {
              content.classList.remove('open');
              content.style.gridTemplateRows = "0fr";
              icon.style.transform = 'rotate(0deg)';
          } else {
              content.classList.add('open');
              content.style.gridTemplateRows = "1fr";
              icon.style.transform = 'rotate(180deg)';
          }
      }

      /* --- QUIZ LOGIC --- */
      let currentStep = 1;
      const totalSteps = 11;
      const formData = {};
      const selectedServices = new Set();

      function updateProgressBar() {
          const percentage = (currentStep / totalSteps) * 100;
          document.getElementById('progress-bar').style.width = percentage + '%';
      }

      function showStep(step) {
          document.querySelectorAll('.step-container').forEach(el => el.classList.remove('active'));
          const stepEl = document.querySelector(`.step-container[data-step="${step}"]`);
          if (stepEl) stepEl.classList.add('active');

          const prevBtn = document.getElementById('prev-btn');
          const nextBtn = document.getElementById('next-btn');
          const submitBtn = document.getElementById('submit-btn');

          if (step === 1) {
              prevBtn.classList.add('opacity-0', 'pointer-events-none');
          } else {
              prevBtn.classList.remove('opacity-0', 'pointer-events-none');
          }

          if (step === totalSteps) {
              nextBtn.classList.add('hidden');
              submitBtn.classList.remove('hidden');
          } else {
              nextBtn.classList.remove('hidden');
              submitBtn.classList.add('hidden');
          }
          updateProgressBar();
      }

      function validateStep(step) {
          if (step === 11) {
              const ids = ['company', 'name', 'email', 'phone'];
              let valid = true;
              ids.forEach(id => {
                 const el = document.getElementById(id);
                 if (!el.value.trim()) {
                     el.classList.add('border-red-500');
                     valid = false;
                 } else {
                     el.classList.remove('border-red-500');
                     formData[id] = el.value;
                 }
              });
              return valid;
          }
          if (step === 1) {
              const selectedScope = document.getElementById('selected-scope').value;
              const sliderValue = document.getElementById('page-slider').value;
              if (!selectedScope && sliderValue === "0") {
                  alert("Vänligen välj ett paket eller använd reglaget för antal undersidor.");
                  return false;
              }
              formData['scope'] = selectedScope || `${sliderValue} undersidor`;
              return true;
          }
          if (step === 10) {
              formData['services'] = Array.from(selectedServices);
              return true;
          }
          const stepContainer = document.querySelector(`.step-container[data-step="${step}"]`);
          const hasSelection = stepContainer.querySelector('.quiz-option.selected') || stepContainer.querySelector('select');
          if (step === 4) {
             const selected = stepContainer.querySelector('.quiz-option.selected');
             if (!selected) return false;
             if (selected.innerText.includes('Ja')) {
                 const domainExisting = document.getElementById('domain_existing').value;
                 if (!domainExisting.trim()) {
                      document.getElementById('domain_existing').classList.add('border-red-500');
                      return false;
                 }
                 document.getElementById('domain_existing').classList.remove('border-red-500');
                 formData['domain_type'] = "existing";
                 formData['domain_name'] = domainExisting;
                 return true;
             }
             if (selected.innerText.includes('Nej')) {
                 const domainWish = document.getElementById('domain_wish').value;
                 if (!domainWish.trim()) {
                     // simplified for demo
                 }
             }
             return true;
          }
          if (!hasSelection) return false;
          return true;
      }

      function nextStep() {
          if (validateStep(currentStep)) {
              if (currentStep < totalSteps) {
                  currentStep++;
                  showStep(currentStep);
              }
          }
      }

      function prevStep() {
          if (currentStep > 1) {
              currentStep--;
              showStep(currentStep);
          }
      }

      function selectCardOption(group, value, element) {
          if (group === 'scope') {
              const slider = document.getElementById('page-slider');
              slider.value = 0;
              document.getElementById('slider-value-display').innerText = "0 sidor";
              document.getElementById('selected-scope').value = value;
          }
          const container = element.closest('.step-container');
          container.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
          element.classList.add('selected');
      }

      function handleSliderInput(slider) {
          const val = slider.value;
          document.getElementById('slider-value-display').innerText = val + (val >= 25 ? "+" : "") + " sidor";
          const container = slider.closest('.step-container');
          container.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
          document.getElementById('selected-scope').value = "";
      }

      function selectSingleOption(group, value, element) {
          const container = element.closest('.step-container');
          container.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
          element.classList.add('selected');
      }

      function toggleMultiSelection(element, value) {
          if (selectedServices.has(value)) {
              selectedServices.delete(value);
              element.classList.remove('multi-selected');
          } else {
              selectedServices.add(value);
              element.classList.add('multi-selected');
          }
      }

      function selectDomainOption(value, element) {
          selectSingleOption('domain', value, element);
          const existingContainer = document.getElementById('domain-existing-container');
          const wishContainer = document.getElementById('domain-wish-container');
          if (value === 'yes') {
              existingContainer.classList.remove('hidden');
              wishContainer.classList.add('hidden');
          } else {
              existingContainer.classList.add('hidden');
              wishContainer.classList.remove('hidden');
          }
      }

      function selectMailOption(value, element) {
          selectSingleOption('mail', value, element);
          const container = document.getElementById('mail-count-container');
          if (value === 'yes') {
              container.classList.remove('hidden');
          } else {
              container.classList.add('hidden');
          }
      }

      async function handleSubmit() {
          if (!validateStep(11)) return;
          const submitBtn = document.getElementById('submit-btn');
          submitBtn.disabled = true;
          await new Promise(resolve => setTimeout(resolve, 2000));
          const form = document.getElementById('analysis-form');
          const nav = document.getElementById('quiz-nav');
          const success = document.getElementById('success-screen');
          const progressBar = document.getElementById('progress-bar');
          form.classList.add('hidden');
          nav.classList.add('hidden');
          success.classList.remove('hidden');
          success.classList.add('animate-in', 'fade-in', 'zoom-in-95', 'duration-500');
          progressBar.style.width = '100%';
          document.getElementById('quiz-container').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      document.addEventListener('DOMContentLoaded', () => {
          showStep(1);
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
      

<div className="aura-background-component fixed top-0 w-full h-[50vh] md:h-screen -z-10 opacity-100" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>

<div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#8C57EF] via-[#E65CB8] to-[#8C57EF] mix-blend-multiply z-0 pointer-events-none"></div>
</div>
</div>

<div className="ambient-light"></div>
<div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-6 h-6"></div>
<span className="uppercase text-xs font-semibold text-white tracking-tighter" style={{}}>Marksen media</span>
</div>
<nav className="hidden md:flex gap-8 text-[11px] font-medium tracking-wide uppercase text-neutral-500">
<a className="hover:text-white transition-colors duration-300" href="#about">OM OSS</a>
<a className="hover:text-white transition-colors duration-300" href="#services">TJÄNSTER</a>
<a className="hover:text-white transition-colors duration-300" href="#strategic-analysis">QUIZ</a>
</nav>
<a className="hidden md:flex items-center justify-center text-[11px] hover:bg-white/10 hover:border-white/20 transition-all font-medium text-white bg-white/5 border-white/10 border rounded pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-sm" href="#contact">KONTAKT</a>
</div>
</header>

<section className="md:pt-48 md:pb-36 flex flex-col overflow-hidden text-center pt-32 pr-6 pb-24 pl-6 relative items-center">
<div className="relative z-10 flex flex-col items-center">
<div className="mb-8 opacity-60">
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95] drop-shadow-2xl">
          Bygg ett varumärke
          <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-700">
            som dominerar din marknad
          </span>
</h1>
<p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
          Webbdesign, SEO &amp; digital annonsering, vi har allt du behöver för
          att växa
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(10,143,106,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(10,143,106,0.25)] w-full sm:w-auto justify-center" href="#strategic-analysis" style={{'--spread': '90deg', '--shimmer-color': 'rgba(255, 255, 255, 0.6)', '--radius': '9999px', '--speed': '4s', '--cut': '1px', '--bg': 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-2 sm:w-auto overflow-hidden text-xs uppercase font-semibold tracking-wider text-white w-full py-3.5 px-8 relative items-center justify-center" style={{borderRadius: '9999px'}}>
<div className="" style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10, 143, 106, 0.9)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap z-10 relative">ta quiz</span>
</div>
</a>
<a className="flex items-center justify-center gap-2 glass-panel hover:text-white uppercase transition-colors sm:w-auto group text-xs font-medium text-neutral-300 tracking-wider w-full rounded-lg pt-3.5 pr-8 pb-3.5 pl-8" href="#services">se tjänster</a>
</div>
</div>
<div className="mt-32 h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="py-32 px-6 border-b border-white/5 relative z-10">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
<div className="reveal space-y-8 top-32 lg:sticky">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter leading-[1.1]">
            Ditt varumärke jobbar inte lika hårt som du gör.
          </h2>
<div className="space-y-6">
<p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
              Du lägger tid, energi och ansvar på att bygga ditt företag. Men om
              ditt varumärke och din digitala profil inte når ut och speglar
              kvalitén på ditt arbete riskerar du att bli förbisedd,
              undervärderad eller bortvald.
            </p>
<p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
              Ens digitala profil och varumärke ska inte bara se bra ut. Det ska
              arbeta för dig – varje dag.
            </p>
</div>
</div>
<div className="reveal delay-100">
<h3 className="text-white font-medium mb-10 text-lg tracking-tight flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#0A8F6A] rounded-full shadow-[0_0_10px_#0A8F6A]"></span>
            Vi hjälper ditt varumärke att:
          </h3>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
<div className="flex flex-col gap-3 group">
<h4 className="text-white text-sm font-medium border-l-2 border-[#0A8F6A] pl-4 group-hover:text-[#0A8F6A] transition-colors">
                Bli bättre
              </h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed pl-4.5">
                Genom tydligare struktur, skarpare budskap och en genomtänkt
                helhet.
              </p>
</div>
<div className="flex flex-col gap-3 group">
<h4 className="text-white text-sm font-medium border-l-2 border-neutral-800 group-hover:border-[#0A8F6A] pl-4 transition-colors">
                Synas mer
              </h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed pl-4.5">
                Med rätt grund för SEO och annonsering som faktiskt leder till
                uppmärksamhet.
              </p>
</div>
<div className="flex flex-col gap-3 group">
<h4 className="text-white text-sm font-medium border-l-2 border-neutral-800 group-hover:border-[#0A8F6A] pl-4 transition-colors">
                Se mer professionellt ut
              </h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed pl-4.5">
                Så att kunder direkt känner förtroende och tar dig på allvar.
              </p>
</div>
<div className="flex flex-col gap-3 group">
<h4 className="text-white text-sm font-medium border-l-2 border-neutral-800 group-hover:border-[#0A8F6A] pl-4 transition-colors">
                Vara unikt
              </h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed pl-4.5">
                Inte som alla andra i branschen – utan tydligt ditt.
              </p>
</div>
<div className="flex flex-col gap-3 group">
<h4 className="text-white text-sm font-medium border-l-2 border-neutral-800 group-hover:border-[#0A8F6A] pl-4 transition-colors">
                Se ut som det bästa alternativet
              </h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed pl-4.5">
                Oavsett om kunden jämför tre eller tio aktörer.
              </p>
</div>
<div className="flex flex-col gap-3 group">
<h4 className="text-white text-sm font-medium border-l-2 border-neutral-800 group-hover:border-[#0A8F6A] pl-4 transition-colors">
                Få blickar att vändas mot just dig
              </h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed pl-4.5">
                När ditt varumärke sticker ut, minns man dig – och väljer dig.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative bg-black/20" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">
            Strategisk Infrastruktur
          </h2>
<p className="text-neutral-400 text-sm font-light max-w-xl mx-auto">
            En helhetslösning för företag som vill sluta konkurrera och börja
            dominera. Vi bygger systemen som driver din tillväxt.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal delay-100 items-start">


<div className="glass-panel p-10 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-[#0A8F6A]/30 transition-all duration-300 group flex flex-col justify-between h-full min-h-[420px]">
<div>
<div className="w-12 h-12 rounded-lg bg-[#0A8F6A]/5 border border-[#0A8F6A]/10 flex items-center justify-center text-[#0A8F6A] mb-8 group-hover:bg-[#0A8F6A]/10 transition-colors">
<svg className="lucide lucide-trending-up w-6 h-6 stroke-[1.5]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">
                SEO &amp; Organisk Tillväxt
              </h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed">
                Sluta jaga kunder – låt dem hitta dig. Vi bygger den digitala
                auktoritet som krävs för att du ska äga sökresultaten och bli
                det självklara valet i din bransch.
              </p>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-[#0A8F6A] transition-colors font-medium">
                Långsiktig Tillgång
              </span>
</div>
</div>

<div className="glass-panel p-10 rounded-2xl border border-[#0A8F6A]/30 bg-gradient-to-b from-white/[0.06] to-transparent hover:border-[#0A8F6A]/60 transition-all duration-300 group relative z-10 shadow-[0_0_50px_-10px_rgba(10,143,106,0.15)] flex flex-col justify-between h-full min-h-[420px]">
<div>
<div className="w-12 h-12 rounded-lg bg-[#0A8F6A] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#0A8F6A]/20">
<svg className="lucide lucide-layout-template w-6 h-6 stroke-[1.5]" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">
                Webbdesign &amp; Arkitektur
              </h3>
<p className="text-neutral-300 text-sm font-light leading-relaxed">
                Navet i din affär. Vi skapar en digital närvaro som omedelbart
                signalerar marknadsledarskap, bygger förtroende och konverterar
                besökare till lönsamma affärer.
              </p>
</div>
<div className="mt-8 pt-8 border-t border-white/10">
<span className="text-[10px] uppercase tracking-widest text-[#0A8F6A] font-semibold">
                Affärskritisk Plattform
              </span>
</div>
</div>

<div className="glass-panel p-10 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-[#0A8F6A]/30 transition-all duration-300 group flex flex-col justify-between h-full min-h-[420px]">
<div className="">
<div className="w-12 h-12 rounded-lg bg-[#0A8F6A]/5 border border-[#0A8F6A]/10 flex items-center justify-center text-[#0A8F6A] mb-8 group-hover:bg-[#0A8F6A]/10 transition-colors">
<svg className="lucide lucide-mouse-pointer-click w-6 h-6 stroke-[1.5]" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">
                Google Ads
              </h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed">
                Fånga köpintresse i realtid. Vi placerar ditt erbjudande framför
                rätt kund exakt när köpbeslutet fattas. Mätbar avkastning och
                omedelbart kassaflöde.
              </p>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-[#0A8F6A] transition-colors font-medium">
                Omedelbar Effekt
              </span>
</div>
</div>


<div className="glass-panel p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 group flex flex-col justify-between h-full">
<div>
<div className="w-10 h-10 rounded-lg bg-[#0A8F6A]/5 border border-[#0A8F6A]/10 flex items-center justify-center text-[#0A8F6A] mb-5 group-hover:bg-[#0A8F6A]/10 transition-colors">
<svg className="lucide lucide-facebook w-5 h-5 stroke-[1.5]" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                Meta Ads
              </h3>
<p className="text-neutral-500 text-xs font-light leading-relaxed">
                Driv omedelbar försäljning och mätbar återbäring (ROAS). Vi skapar träffsäkra kampanjer på Facebook och Instagram som konverterar kalla målgrupper till nya, betalande kunder omgående.
              </p>
</div>
<div className="mt-5 pt-5 border-t border-white/5 opacity-60">
<span className="text-[9px] uppercase tracking-widest text-neutral-600 group-hover:text-[#0A8F6A] transition-colors font-medium">
                Skalbar Marknadsföring
              </span>
</div>
</div>

<div className="glass-panel p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 group flex flex-col justify-between h-full">
<div>
<div className="w-10 h-10 rounded-lg bg-[#0A8F6A]/5 border border-[#0A8F6A]/10 flex items-center justify-center text-[#0A8F6A] mb-5 group-hover:bg-[#0A8F6A]/10 transition-colors">
<svg className="lucide lucide-film w-5 h-5 stroke-[1.5]" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                Videoproduktion
              </h3>
<p className="text-neutral-500 text-xs font-light leading-relaxed">
                Kraftfull varumärkesexponering genom storytelling. Högkvalitativt rörligt material som stärker din position, bygger emotionella band och ökar engagemanget i alla digitala kanaler.
              </p>
</div>
<div className="mt-5 pt-5 border-t border-white/5 opacity-60">
<span className="text-[9px] uppercase tracking-widest text-neutral-600 group-hover:text-[#0A8F6A] transition-colors font-medium">
                Varumärkesbyggande
              </span>
</div>
</div>

<div className="glass-panel p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 group flex flex-col justify-between h-full">
<div className="">
<div className="w-10 h-10 rounded-lg bg-[#0A8F6A]/5 border border-[#0A8F6A]/10 flex items-center justify-center text-[#0A8F6A] mb-5 group-hover:bg-[#0A8F6A]/10 transition-colors">
<svg className="lucide lucide-app-window w-5 h-5 stroke-[1.5]" data-lucide="app-window" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                Landningssidor
              </h3>
<p className="text-neutral-500 text-xs font-light leading-relaxed">
                Psykologiskt optimerade landningssidor (LPs) med ett enda mål: konvertering. Vi förvandlar trafik till försäljning genom skarp copy och distraktionsfri design som maximerar dina resultat.
              </p>
</div>
<div className="mt-5 pt-5 border-t border-white/5 opacity-60">
<span className="text-[9px] uppercase tracking-widest text-neutral-600 group-hover:text-[#0A8F6A] transition-colors font-medium">
                Maximal Konvertering
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-b border-white/5 relative z-10" id="strategic-analysis">
<div className="absolute inset-0 bg-[#0A8F6A]/5 blur-[120px] pointer-events-none rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4"></div>
<div className="max-w-4xl mx-auto relative">
<div className="reveal text-center mb-12">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium uppercase tracking-widest text-[#0A8F6A] mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#0A8F6A] animate-pulse"></span>
            Strategisk Analys
          </span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">
            Webbdesign frågeformulär
          </h2>
<p className="text-neutral-400 text-sm font-light max-w-lg mx-auto">
            Gör en kostnadsfri behovsanalys. 10 snabba steg som ger oss
            underlaget för att skapa en strategi som faktiskt fungerar.
          </p>
</div>

<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden min-h-[500px] flex flex-col justify-between reveal delay-100" id="quiz-container">

<div className="w-full h-1 bg-white/5 rounded-full mb-10 overflow-hidden relative">
<div className="h-full bg-[#0A8F6A] transition-all duration-500 ease-out shadow-[0_0_10px_#0A8F6A]" id="progress-bar" style={{width: '9.09091%'}}></div>
</div>

<form className="flex-grow flex flex-col relative" id="analysis-form" onsubmit="return false;">
<div className="step-container active" data-step="1">
<h3 className="text-xl font-medium text-white mb-2">Hur stor hemsida behöver du?</h3>
<h4 className="text-sm text-[#0A8F6A] font-medium mb-4 uppercase tracking-wider">Välj antalet undersidor</h4>
<p className="text-neutral-400 text-sm font-light mb-8 max-w-2xl">Oavsett paket får du alltid en startsida. Utöver startsidan kan du välja hur många undersidor du vill ha.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
<div className="quiz-option cursor-pointer p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center flex flex-col items-center justify-center gap-2 h-36" onclick="selectCardOption('scope', 'landing', this)">
<span className="text-2xl text-[#0A8F6A]">1</span>
<span className="text-xs font-bold text-white uppercase tracking-wide">Startsida</span>
<span className="text-[10px] text-neutral-500 leading-tight">Jag klarar mig på en startsida.</span>
</div>
<div className="quiz-option cursor-pointer p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center flex flex-col items-center justify-center gap-2 h-36" onclick="selectCardOption('scope', 'small', this)">
<span className="text-2xl text-[#0A8F6A]">4-6</span>
<span className="text-xs font-bold text-white uppercase tracking-wide">Liten</span>
<span className="text-[10px] text-neutral-500 leading-tight">4-6 undersidor</span>
</div>
<div className="quiz-option cursor-pointer p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center flex flex-col items-center justify-center gap-2 h-36" onclick="selectCardOption('scope', 'medium', this)">
<span className="text-2xl text-[#0A8F6A]">6-12</span>
<span className="text-xs font-bold text-white uppercase tracking-wide">Medelstor</span>
<span className="text-[10px] text-neutral-500 leading-tight">6-12 undersidor</span>
</div>
<div className="quiz-option cursor-pointer p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center flex flex-col items-center justify-center gap-2 h-36" onclick="selectCardOption('scope', 'large', this)">
<span className="text-2xl text-[#0A8F6A]">12+</span>
<span className="text-xs font-bold text-white uppercase tracking-wide">Stor</span>
<span className="text-[10px] text-neutral-500 leading-tight">12+ undersidor</span>
</div>
</div>
<div className="bg-neutral-900/30 border-white/10 border rounded-xl pt-6 pr-4 pb-6 pl-4 relative">
<div className="flex justify-between mb-4">
<label className="text-xs text-neutral-400 font-medium uppercase">Eller välj exakt antal undersidor:</label>
<span className="text-[#0A8F6A] font-bold text-sm" id="slider-value-display">0 sidor</span>
</div>
<input className="" id="page-slider" max="25" min="0" oninput="handleSliderInput(this)" type="range" value="0"/>
<input id="selected-scope" type="hidden"/>
</div>
</div>
<div className="step-container" data-step="2">
<h3 className="text-xl text-white font-medium mb-8">Är SEO en viktig del av din tillväxt?</h3>
<div className="space-y-4">
<div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" onclick="selectSingleOption('seo', 'primary', this)">
<div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center dot-indicator"></div><span className="text-sm text-white">Ja, SEO är min huvudsakliga strategi</span>
</div>
<div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" onclick="selectSingleOption('seo', 'complementary', this)">
<div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center dot-indicator"></div>
<span className="text-sm text-white">Ja, men som ett komplement</span>
</div>
<div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" onclick="selectSingleOption('seo', 'none', this)">
<div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center dot-indicator"></div>
<span className="text-sm text-white">Nej, jag behöver inte SEO</span>
</div>
<div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" data-consulting="true" onclick="selectSingleOption('seo', 'consulting', this)">
<div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center dot-indicator"></div>
<span className="text-sm text-white">Vet ej – öppen för förslag / rådgivning</span>
</div>
</div>
</div>
<div className="step-container" data-step="3"><h3 className="text-xl text-white font-medium mb-4">Google Business Profile</h3><div className="space-y-4"><div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" onclick="selectSingleOption('gmb', 'yes', this)"><div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center dot-indicator"></div><span className="text-sm text-white">Ja</span></div><div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" onclick="selectSingleOption('gmb', 'no', this)"><div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center dot-indicator"></div><span className="text-sm text-white">Nej</span></div></div></div>
<div className="step-container" data-step="4"><h3 className="text-xl text-white font-medium mb-8">Har du redan en domän?</h3><div className="grid grid-cols-2 gap-6 mb-8"><div className="quiz-option cursor-pointer p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center flex flex-col items-center justify-center gap-4 h-40" onclick="selectDomainOption('yes', this)"><span className="text-white font-medium">Ja</span></div><div className="quiz-option cursor-pointer p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center flex flex-col items-center justify-center gap-4 h-40" onclick="selectDomainOption('no', this)"><span className="text-white font-medium">Nej</span></div></div><div className="hidden" id="domain-existing-container"><input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white" id="domain_existing" type="text"/></div><div className="hidden" id="domain-wish-container"><input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white" id="domain_wish" type="text"/></div></div>
<div className="step-container" data-step="5"><h3 className="text-xl text-white font-medium mb-8">Var finns dina kunder?</h3><div className="space-y-4"><div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" onclick="selectSingleOption('reach', 'local', this)"><span className="text-sm text-white">Lokalt</span></div><div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" onclick="selectSingleOption('reach', 'national', this)"><span className="text-sm text-white">Nationellt</span></div></div></div>
<div className="step-container" data-step="6"><h3 className="text-xl text-white font-medium mb-8">Behöver du e-handel?</h3><div className="grid grid-cols-2 gap-6"><div className="quiz-option cursor-pointer p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center flex flex-col items-center justify-center gap-4 h-40" onclick="selectSingleOption('ecom', 'yes', this)"><span className="text-white font-medium">Ja</span></div><div className="quiz-option cursor-pointer p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center flex flex-col items-center justify-center gap-4 h-40" onclick="selectSingleOption('ecom', 'no', this)"><span className="text-white font-medium">Nej</span></div></div></div>
<div className="step-container" data-step="7"><h3 className="text-xl text-white font-medium mb-4">Behöver du en blogg?</h3><div className="space-y-4"><div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" onclick="selectSingleOption('blog', 'yes', this)"><span className="text-sm text-white">Ja</span></div><div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" onclick="selectSingleOption('blog', 'no', this)"><span className="text-sm text-white">Nej</span></div></div></div>
<div className="step-container" data-step="8"><h3 className="text-xl text-white font-medium mb-8">Uppdatering?</h3><div className="space-y-4"><div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" onclick="selectSingleOption('updates', 'static', this)"><span className="text-sm text-white">Nej, statisk</span></div><div className="quiz-option cursor-pointer p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-4" onclick="selectSingleOption('updates', 'active', this)"><span className="text-sm text-white">Ja, löpande</span></div></div></div>
<div className="step-container" data-step="9"><h3 className="text-xl text-white font-medium mb-8">Företagsmail?</h3><div className="grid grid-cols-2 gap-6"><div className="quiz-option cursor-pointer p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center flex flex-col items-center justify-center gap-4 h-40" onclick="selectMailOption('yes', this)"><span className="text-white font-medium">Ja</span></div><div className="quiz-option cursor-pointer p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-center flex flex-col items-center justify-center gap-4 h-40" onclick="selectMailOption('no', this)"><span className="text-white font-medium">Nej</span></div></div><div className="hidden" id="mail-count-container"><select className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white" id="mail_count"><option value="1">1</option></select></div></div>
<div className="step-container" data-step="10"><h3 className="text-xl text-white font-medium mb-2">Andra tjänster?</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div className="quiz-option cursor-pointer p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-start gap-4" onclick="toggleMultiSelection(this, 'google_ads')"><div><span className="block text-white font-medium mb-1">Google Ads</span></div></div><div className="quiz-option cursor-pointer p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-start gap-4" onclick="toggleMultiSelection(this, 'meta_ads')"><div><span className="block text-white font-medium mb-1">Meta Ads</span></div></div></div></div>

<div className="step-container" data-step="11">
<h3 className="text-xl text-white font-medium mb-2">Grundinformation</h3>
<p className="text-rose-400 text-xs font-semibold uppercase tracking-wide mb-8 animate-pulse">
                Observera: Om du inte slutför det här steget så skickas inte frågeformuläret in.
              </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium uppercase tracking-wide">Företag</label>
<input className="w-full bg-neutral-900/50 border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#0A8F6A] transition-colors placeholder:text-neutral-700 font-light" id="company" placeholder="Ditt företagsnamn" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium uppercase tracking-wide">Namn</label>
<input className="w-full bg-neutral-900/50 border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#0A8F6A] transition-colors placeholder:text-neutral-700 font-light" id="name" placeholder="För- och efternamn" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium uppercase tracking-wide">E-post</label>
<input className="w-full bg-neutral-900/50 border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#0A8F6A] transition-colors placeholder:text-neutral-700 font-light" id="email" placeholder="name@company.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-400 font-medium uppercase tracking-wide">Telefon</label>
<input className="w-full bg-neutral-900/50 border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#0A8F6A] transition-colors placeholder:text-neutral-700 font-light" id="phone" placeholder="070-123 45 67" required="" type="tel"/>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col items-center justify-center text-center py-10" id="success-screen">
<div className="w-16 h-16 rounded-full bg-[#0A8F6A]/10 border border-[#0A8F6A]/20 flex items-center justify-center mb-6 text-[#0A8F6A] shadow-[0_0_30px_-5px_rgba(10,143,106,0.3)]">
<svg className="lucide lucide-check w-8 h-8 stroke-[2]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h3 className="text-2xl text-white font-medium mb-6 tracking-tight">Tack</h3>
<p className="text-neutral-400 text-sm font-light max-w-md mx-auto leading-relaxed mb-8">
                Vi har nu en tydlig bild av ditt företag, dina behov och din tillväxtpotential.<br className="hidden md:block"/>
                Vi återkommer inom 24 timmar med ett konkret förslag – inga generiska paket.
              </p>
<div className="pt-8 border-t border-white/5 w-full max-w-xs mx-auto">
<p className="text-neutral-500 text-xs mb-3">Du kan också höra av dig på mail</p>
<a className="inline-flex items-center gap-2 text-white hover:text-[#0A8F6A] transition-colors text-sm font-medium" href="mailto:william@marksendigital.se">
                  william@marksendigital.se
                </a>
</div>
</div>
</form>

<div className="flex justify-between items-center mt-12 pt-6 border-t border-white/5" id="quiz-nav">
<button className="opacity-0 pointer-events-none px-6 py-2 text-neutral-500 hover:text-white text-xs uppercase font-medium tracking-wider transition-colors" id="prev-btn" onclick="prevStep()" type="button">Tillbaka</button>
<button className="flex items-center gap-2 px-8 py-3 bg-[#0A8F6A] hover:bg-[#097a5b] text-white text-xs uppercase font-semibold tracking-wider rounded transition-all shadow-[0_4px_20px_rgba(10,143,106,0.3)]" id="next-btn" onclick="nextStep()" type="button"><span>Fortsätt</span></button>
<button className="hidden flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-neutral-200 text-xs uppercase font-bold tracking-wider rounded transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)]" id="submit-btn" onclick="handleSubmit()" type="button"><span>Skicka in</span></button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-neutral-900/10 backdrop-blur-sm" id="process">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-16 text-center reveal">
          Process: Webbdesign
        </h2>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

<div className="flex flex-col md:items-center md:text-center reveal">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-black/50">
              01
            </div>
<h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
              Inledning
            </h3>
<p className="text-xs text-neutral-400 leading-relaxed max-w-[220px]">
              Vi går igenom ditt företag, dina mål och vad hemsidan ska uppnå, så att arbetet utgår från rätt helhet redan från start.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-75">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-black/50">
              02
            </div>
<h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
              Första utkast
            </h3>
<p className="text-xs text-neutral-400 leading-relaxed max-w-[220px]">
              Ett första designutkast tas fram med fokus på struktur, uttryck och helhetskänsla.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-150">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-black/50">
              03
            </div>
<h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
              Revisioner
            </h3>
<p className="text-xs text-neutral-400 leading-relaxed max-w-[220px]">
              Design och innehåll justeras utifrån din feedback tills helheten sitter.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-200">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-black/50">
              04
            </div>
<h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
              Ditt godkännande
            </h3>
<p className="text-xs text-neutral-400 leading-relaxed max-w-[220px]">
              Vi gör en sista genomgång och säkerställer att allt känns rätt innan publicering.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-300">
<div className="w-12 h-12 bg-[#0A8F6A] rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_25px_rgba(10,143,106,0.4)] ring-4 ring-black/50">
              05
            </div>
<h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
              Publicering
            </h3>
<p className="text-xs text-neutral-400 leading-relaxed max-w-[220px]">
              Hemsidan publiceras och är redo att användas och visas upp direkt.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative z-10 overflow-hidden" id="about">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#0A8F6A]/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-3xl mx-auto text-center reveal">

<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium uppercase tracking-widest text-[#0A8F6A] mb-8">
                Om oss
            </span>

<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-8 font-montserrat">
                Marksen Media
            </h2>

<p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
                Vi är ett litet men effektivt team som brinner för att leverera marknadsföring, webbdesign och videoproduktion. Vi jobbar med kunder över hela Sverige med bred variation i branch &amp; industri. Det är ingen hyperbol när vi säger att vi är passionerade över att producera resultat som ger wow känsla... och när vi inte uppnår det, ja då jobbar vi vidare tills det är uppnått.
            </p>
</div>
</section>

<footer className="z-20 bg-black border-white/10 border-t pt-24 pb-12 relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">

<div className="">
<h2 className="text-3xl font-medium text-white tracking-tight font-geist mb-8">Kontakt</h2>
<p className="text-neutral-400 text-sm mb-12 font-light max-w-sm leading-relaxed">
               Redo att ta nästa steg? Hör av dig till oss så bokar vi ett möte och ser hur vi kan hjälpa dig växa.
             </p>
<div className="space-y-6">
<a className="flex items-center gap-5 text-neutral-400 hover:text-white transition-colors group" href="mailto:william@marksendigital.se">
<div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[#0A8F6A] group-hover:border-[#0A8F6A] transition-all duration-300">
<svg className="lucide lucide-mail w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<span className="text-sm font-medium">william@marksendigital.se</span>
</a>
<a className="flex items-center gap-5 text-neutral-400 hover:text-white transition-colors group" href="tel:+46705374628">
<div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[#0A8F6A] group-hover:border-[#0A8F6A] transition-all duration-300">
<svg className="lucide lucide-phone w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<span className="text-sm font-medium">+46 70 537 46 28</span>
</a>
</div>
</div>

<form className="glass-panel border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 space-y-5">
<div className="">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mb-2 ml-1">Namn</label>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#0A8F6A] focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-neutral-700" placeholder="Ditt namn" type="text"/>
</div>
<div className="">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mb-2 ml-1">E-post</label>
<input className="focus:border-[#0A8F6A] focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-neutral-700 text-sm text-white w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="din@epost.se" type="email"/>
</div><div className="">
<label className="block text-[10px] uppercase font-semibold text-neutral-500 tracking-widest mb-2 ml-1">Telefon</label>
<input className="focus:border-[#0A8F6A] focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-neutral-700 text-sm text-white w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="din@epost.se" type="email"/>
</div>
<div className="">
<label className="block text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mb-2 ml-1">Meddelande</label>
<textarea className="focus:border-[#0A8F6A] focus:bg-white/[0.05] focus:outline-none transition-all resize-none placeholder:text-neutral-700 text-sm text-white w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Berätta om ditt projekt..." rows="4"></textarea>
</div>
<button className="w-full bg-[#0A8F6A] text-white py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#097a5b] transition-all shadow-lg shadow-[#0A8F6A]/20 hover:shadow-[#0A8F6A]/40 mt-2" type="button">
                Skicka meddelande
             </button>
</form>
</div>

<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-medium text-neutral-600 tracking-wide">© 2025 Marksen Media. Alla rättigheter förbehållna.</p>
<div className="flex gap-6 text-[10px] text-neutral-600 uppercase tracking-widest font-medium">
</div>
</div>
</div>
</footer>


    </>
  );
}
