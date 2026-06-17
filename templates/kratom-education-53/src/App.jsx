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



      lucide.createIcons();

      let currentStep = 0;
      let allSteps = document.querySelectorAll('.step-block');
      const progressBar = document.getElementById('progress-bar');
      const btnNext = document.getElementById('btn-next');
      const btnText = btnNext.querySelector('span');

      function initProgress() {
          progressBar.innerHTML = '';
          allSteps = document.querySelectorAll('.step-block');
          allSteps.forEach((_, index) => {
              const dot = document.createElement('div');
              dot.className = `h-1 rounded-full transition-all duration-300 ${index === 0 ? 'w-4 bg-[#D9F99D]' : 'w-1 bg-[#1C3A14]/20'}`;
              dot.id = `dot-${index}`;
              progressBar.appendChild(dot);
          });
      }

      function updateUI() {
          allSteps = document.querySelectorAll('.step-block');
          allSteps.forEach((step, index) => {
              if (index === currentStep) {
                  step.classList.remove('hidden');
                  step.style.animation = 'none';
                  step.offsetHeight;
                  step.style.animation = 'fadeIn 0.5s ease-out forwards';
              } else {
                  step.classList.add('hidden');
              }
          });

          const dots = progressBar.children;
          if (dots.length !== allSteps.length) initProgress();

          for (let i = 0; i < dots.length; i++) {
              const dot = dots[i];
              if (i === currentStep) {
                  dot.className = 'h-1 rounded-full transition-all duration-300 w-4 bg-[#D9F99D]';
              } else {
                  dot.className = 'h-1 rounded-full transition-all duration-300 w-1 bg-[#1C3A14]/20';
              }
          }

          if (currentStep === 0) {
              btnText.innerText = 'Start';
          } else {
              btnText.innerText = 'Continue';
          }

          if (currentStep === allSteps.length - 1) {
              document.querySelector('footer').style.display = 'none';
          } else {
              document.querySelector('footer').style.display = 'block';
          }

          const currentStepEl = allSteps[currentStep];
          if (currentStepEl && currentStepEl.dataset.type === 'quiz') {
              const selected = currentStepEl.querySelector('.selected');
              if (!selected) {
                  btnNext.disabled = true;
                  btnNext.classList.add('opacity-50', 'cursor-not-allowed');
              } else {
                  btnNext.disabled = false;
                  btnNext.classList.remove('opacity-50', 'cursor-not-allowed');
              }
          } else {
              btnNext.disabled = false;
              btnNext.classList.remove('opacity-50', 'cursor-not-allowed');
          }

          document.querySelector('main').scrollTo(0,0);
          lucide.createIcons();
      }

      function changeStep(direction) {
          const nextIndex = currentStep + direction;
          if (nextIndex >= 0 && nextIndex < allSteps.length) {
              currentStep = nextIndex;
              updateUI();
          }
      }

      function selectOption(btn) {
          const parent = btn.closest('.step-block');
          const siblings = parent.querySelectorAll('.option-btn');
          siblings.forEach(sib => {
              sib.classList.remove('selected');
              const icon = sib.querySelector('.check-icon');
              if(icon) icon.classList.add('opacity-0');
          });

          btn.classList.add('selected');
          const icon = btn.querySelector('.check-icon');
          if(icon) icon.classList.remove('opacity-0');

          btnNext.disabled = false;
          btnNext.classList.remove('opacity-50', 'cursor-not-allowed');

          setTimeout(() => {
              changeStep(1);
          }, 350);
      }

      initProgress();
      updateUI();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#1C3A14] rounded-full blur-[200px] opacity-[0.03]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#D9F99D] rounded-full blur-[150px] opacity-30"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>
</div>

<header className="z-50 flex flex-col gap-6 w-full max-w-xl pt-8 pr-6 pb-4 pl-6 gap-x-6 gap-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-[#1C3A14] hover:opacity-80 transition-opacity cursor-pointer" onclick="location.reload()">

<div className="flex items-center gap-2">
<div className="flex bg-center text-white bg-[#1C3A14]/0 w-24 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45569a0e-13bb-432b-9930-f4bbaea29b57_320w.png)] bg-cover rounded-none items-center justify-center"></div>
</div>
</div>
<div className="flex flex-col gap-1 gap-x-1 gap-y-1 items-end">
<span className="text-[10px] uppercase font-medium text-[#1C3A14]/95 tracking-widest">
            Progress
          </span>
<div className="flex gap-1.5 gap-x-1.5 gap-y-1.5" id="progress-bar">
<div className="h-1 rounded-full transition-all duration-300 w-4 bg-[#D9F99D]" id="dot-0"></div>
<div className="h-1 rounded-full transition-all duration-300 w-1 bg-[#1C3A14]/20" id="dot-1"></div>
<div className="h-1 rounded-full transition-all duration-300 w-1 bg-[#1C3A14]/20" id="dot-2"></div>
<div className="h-1 rounded-full transition-all duration-300 w-1 bg-[#1C3A14]/20" id="dot-3"></div>
<div className="h-1 rounded-full transition-all duration-300 w-1 bg-[#1C3A14]/20" id="dot-4"></div>
<div className="h-1 rounded-full transition-all duration-300 w-1 bg-[#1C3A14]/20" id="dot-5"></div>
</div>
</div>
</div>
</header>


<main className="flex-1 flex flex-col overflow-y-auto scroll-smooth no-scrollbar z-10 w-full max-w-xl pr-6 pb-24 pl-6 relative">

<div className="step-block h-full flex flex-col justify-center" id="step-0">
<div className="flex flex-col justify-center h-full max-w-lg mx-auto">
<div className="flex flex-col items-start text-left">
<span className="inline-flex items-center text-[10px] uppercase font-bold text-[#1C3A14] tracking-widest bg-[#D9F99D] rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
              learn
            </span>
<div className="relative mb-8">
<h1 className="md:text-5xl leading-[1.1] text-4xl font-bold text-[#1C3A14] tracking-tight">
                Kratom
                <br/>
                Foundations
              </h1>
<div className="-bottom-4 h-1.5 bg-[#D9F99D] w-52 rounded-full absolute left-0"></div>
</div>
<p className="leading-relaxed text-sm text-[#1C3A14] max-w-md mb-8">
              Master the basics. Understand origins, vein types, effects, and
              preparation methods with clarity and simplicity.
            </p>
</div>
</div>
</div>

<div className="step-block hidden h-full flex flex-col justify-center" id="step-1">
<div className="flex flex-col justify-center h-full max-w-lg mx-auto w-full px-1">
<div className="flex flex-col items-start text-left">
<span className="inline-flex items-center text-[10px] uppercase font-bold text-[#1C3A14] tracking-widest bg-[#D9F99D] rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
              DISCOVER
            </span>
<div className="relative mb-6 w-full">
<h2 className="text-3xl font-semibold text-[#1C3A14] tracking-tight relative z-10">
                What Is Kratom?
              </h2>
<div className="absolute -bottom-2 left-0 h-1.5 w-36 bg-[#D9F99D] rounded-full"></div>
</div>
<p className="leading-relaxed text-sm text-[#1C3A14]/80 mb-8">
              Mitragyna Speciosa is a tropical evergreen tree native to
              Southeast Asia's rainforests. For centuries, communities have used
              the leaves as part of daily life for natural support.
            </p>
<div className="flex flex-col gap-3 w-full">
<div className="p-5 rounded-2xl bg-[#1C3A14]/5 border border-[#1C3A14]/10 transition-colors hover:bg-[#1C3A14]/10">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-[#1C3A14]" data-lucide="map-pin"></i>
<h4 className="font-semibold text-[#1C3A14] text-sm">
                    Southeast Asian Roots
                  </h4>
</div>
<p className="text-xs text-[#1C3A14]/70 leading-relaxed pl-8">
                  Native to Indonesia, Thailand, Malaysia, and Vietnam.
                  Indonesia remains the primary source.
                </p>
</div>
<div className="p-5 rounded-2xl bg-[#1C3A14]/5 border border-[#1C3A14]/10 transition-colors hover:bg-[#1C3A14]/10">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-[#1C3A14]" data-lucide="flask-conical"></i>
<h4 className="font-semibold text-[#1C3A14] text-sm">
                    Active Compounds
                  </h4>
</div>
<p className="text-xs text-[#1C3A14]/70 leading-relaxed pl-8">
                  Contains 40+ alkaloids. Mitragynine (primary) and
                  7-Hydroxymitragynine (secondary) drive effects.
                </p>
</div>
<div className="p-5 rounded-2xl bg-[#1C3A14]/5 border border-[#1C3A14]/10 transition-colors hover:bg-[#1C3A14]/10">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-[#1C3A14]" data-lucide="history"></i>
<h4 className="font-semibold text-[#1C3A14] text-sm">
                    Centuries of Use
                  </h4>
</div>
<p className="text-xs text-[#1C3A14]/70 leading-relaxed pl-8">
                  Traditional communities have used kratom for generations.
                  Modern science is now studying its properties.
                </p>
</div>
</div>
</div>
</div>
</div>
<div className="step-block hidden h-full flex flex-col justify-center" id="step-effects">
<div className="flex flex-col justify-center h-full max-w-lg mx-auto w-full px-1 items-center text-center">
<div className="relative mb-12 w-full">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D9F99D]/30 rounded-full blur-[80px] pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl font-semibold text-[#1C3A14] tracking-tight mb-3 relative z-10">
              You're learning the right things.
            </h2>
<p className="text-xl md:text-2xl text-[#1C3A14]/60 font-medium relative z-10 tracking-tight">
              Let's find what works for you.
            </p>
</div>
<div className="flex flex-col items-center gap-8 mb-12 w-full max-w-md relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C3A14]/5 border border-[#1C3A14]/10 backdrop-blur-sm">
<i className="w-3.5 h-3.5 text-[#1C3A14]/60" data-lucide="users"></i>
<span className="text-xs font-semibold text-[#1C3A14]/70">
                50,000+ users have completed this guide
              </span>
</div>
<div className="space-y-3">
<p className="text-lg text-[#1C3A14] font-medium italic leading-relaxed">
                "I finally found something that actually works for me."
              </p>
<p className="text-[10px] font-bold text-[#1C3A14]/40 uppercase tracking-widest">
                — James, Austin, TX
              </p>
</div>
</div>
<div className="flex items-center justify-center gap-2 opacity-40 hover:opacity-60 transition-opacity">
<i className="w-3 h-3 text-[#1C3A14]" data-lucide="lock"></i>
<span className="text-[10px] font-medium text-[#1C3A14]">
              Your answers are completely private. We only use them to match you
              to strains.
            </span>
</div>
</div>
</div>

<div className="step-block hidden h-full flex flex-col justify-center" data-type="quiz" id="step-2">
<div className="flex flex-col justify-center h-full max-w-lg mx-auto w-full px-1">
<div className="flex flex-col items-start text-left">
<span className="inline-flex items-center text-[10px] uppercase font-bold text-[#1C3A14] tracking-widest bg-[#D9F99D] rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
              Question 1
            </span>
<h2 className="text-3xl font-bold text-[#1C3A14] tracking-tight mb-8">
              What is your primary goal?
            </h2>
<div className="flex flex-col gap-3 w-full">
<button className="option-btn w-full text-left p-5 rounded-2xl border border-[#1C3A14]/10 bg-[#1C3A14]/5 text-[#1C3A14] hover:bg-[#1C3A14]/10 transition-all flex items-center justify-between group" onclick="selectOption(this)">
<div>
<span className="text-sm font-semibold block text-[#1C3A14]">
                    Energy &amp; Focus
                  </span>
<span className="text-xs text-[#1C3A14]/60 block mt-0.5">
                    Productivity boost
                  </span>
</div>
<i className="w-5 h-5 opacity-0 check-icon transition-opacity text-[#1C3A14]" data-lucide="check-circle-2"></i>
</button>
<button className="option-btn w-full text-left p-5 rounded-2xl border border-[#1C3A14]/10 bg-[#1C3A14]/5 text-[#1C3A14] hover:bg-[#1C3A14]/10 transition-all flex items-center justify-between group" onclick="selectOption(this)">
<div>
<span className="text-sm font-semibold block text-[#1C3A14]">
                    Mood Enhancement
                  </span>
<span className="text-xs text-[#1C3A14]/60 block mt-0.5">
                    Social &amp; optimistic
                  </span>
</div>
<i className="w-5 h-5 opacity-0 check-icon transition-opacity text-[#1C3A14]" data-lucide="check-circle-2"></i>
</button>
<button className="option-btn w-full text-left p-5 rounded-2xl border border-[#1C3A14]/10 bg-[#1C3A14]/5 text-[#1C3A14] hover:bg-[#1C3A14]/10 transition-all flex items-center justify-between group" onclick="selectOption(this)">
<div>
<span className="text-sm font-semibold block text-[#1C3A14]">
                    Relief &amp; Relaxation
                  </span>
<span className="text-xs text-[#1C3A14]/60 block mt-0.5">
                    Physical comfort
                  </span>
</div>
<i className="w-5 h-5 opacity-0 check-icon transition-opacity text-[#1C3A14]" data-lucide="check-circle-2"></i>
</button>
</div>
</div>
</div>
</div>

<div className="step-block hidden h-full flex flex-col justify-center" id="step-3">
<div className="flex flex-col justify-center h-full max-w-lg mx-auto w-full px-1">
<div className="flex flex-col items-start text-left">
<span className="inline-flex items-center text-[10px] uppercase font-bold text-[#1C3A14] tracking-widest bg-[#D9F99D] rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
              Education
            </span>
<h2 className="text-3xl font-bold text-[#1C3A14] tracking-tight mb-4">
              Kratom Vein Types
            </h2>
<p className="leading-relaxed text-sm text-[#1C3A14]/80 mb-8">
              Strains are categorized by vein color, which indicates the effect
              profile.
            </p>
<div className="space-y-3 w-full">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1C3A14]/5 border border-[#1C3A14]/5">
<div className="w-3 h-3 rounded-full bg-white border-2 border-[#1C3A14]/20"></div>
<div>
<h4 className="text-sm font-semibold text-[#1C3A14]">
                    White Vein
                  </h4>
<p className="text-xs text-[#1C3A14]/70">
                    Energy &amp; Morning Use
                  </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1C3A14]/5 border border-[#1C3A14]/5">
<div className="w-3 h-3 rounded-full bg-[#1C3A14]"></div>
<div>
<h4 className="text-sm font-semibold text-[#1C3A14]">
                    Green Vein
                  </h4>
<p className="text-xs text-[#1C3A14]/70">
                    Balanced Focus &amp; Mood
                  </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1C3A14]/5 border border-[#1C3A14]/5">
<div className="w-3 h-3 rounded-full bg-[#991b1b]"></div>
<div>
<h4 className="text-sm font-semibold text-[#1C3A14]">Red Vein</h4>
<p className="text-xs text-[#1C3A14]/70">
                    Relaxation &amp; Relief
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="step-block hidden h-full flex flex-col justify-center" data-type="quiz" id="step-usage">
<div className="flex flex-col justify-center h-full max-w-lg mx-auto w-full px-1">
<div className="flex flex-col items-start text-left">
<span className="inline-flex items-center text-[10px] uppercase font-bold text-[#1C3A14] tracking-widest bg-[#D9F99D] rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
              Question 2
            </span>
<h2 className="text-3xl font-bold text-[#1C3A14] tracking-tight mb-8">
              How often do you plan to use?
            </h2>
<div className="flex flex-col gap-3 w-full">
<button className="option-btn w-full text-left p-5 rounded-2xl border border-[#1C3A14]/10 bg-[#1C3A14]/5 text-[#1C3A14] hover:bg-[#1C3A14]/10 transition-all flex items-center justify-between group" onclick="selectOption(this)">
<span className="text-sm font-semibold text-[#1C3A14]">Daily</span>
<i className="w-5 h-5 opacity-0 check-icon transition-opacity text-[#1C3A14]" data-lucide="check-circle-2"></i>
</button>
<button className="option-btn w-full text-left p-5 rounded-2xl border border-[#1C3A14]/10 bg-[#1C3A14]/5 text-[#1C3A14] hover:bg-[#1C3A14]/10 transition-all flex items-center justify-between group" onclick="selectOption(this)">
<span className="text-sm font-semibold text-[#1C3A14]">
                  A few times a week
                </span>
<i className="w-5 h-5 opacity-0 check-icon transition-opacity text-[#1C3A14]" data-lucide="check-circle-2"></i>
</button>
<button className="option-btn w-full text-left p-5 rounded-2xl border border-[#1C3A14]/10 bg-[#1C3A14]/5 text-[#1C3A14] hover:bg-[#1C3A14]/10 transition-all flex items-center justify-between group" onclick="selectOption(this)">
<span className="text-sm font-semibold text-[#1C3A14]">
                  Occasionally
                </span>
<i className="w-5 h-5 opacity-0 check-icon transition-opacity text-[#1C3A14]" data-lucide="check-circle-2"></i>
</button>
</div>
</div>
</div>
</div>
<div className="step-block hidden h-full flex flex-col justify-center" id="step-intake">
<div className="flex flex-col justify-center h-full max-w-lg mx-auto w-full px-1">
<div className="flex flex-col items-start text-left">
<span className="inline-flex items-center text-[10px] uppercase font-bold text-[#1C3A14] tracking-widest bg-[#D9F99D] rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
              Education
            </span>
<h2 className="text-3xl font-bold text-[#1C3A14] tracking-tight mb-4">
              Intake Options
            </h2>
<p className="leading-relaxed text-sm text-[#1C3A14]/80 mb-8">
              Choose the format that fits your lifestyle.
            </p>
<div className="grid grid-cols-1 gap-3 w-full">
<div className="p-4 rounded-2xl bg-[#1C3A14]/5 border border-[#1C3A14]/10 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#1C3A14]/10 flex items-center justify-center text-[#1C3A14]">
<i className="w-5 h-5" data-lucide="glass-water"></i>
</div>
<div>
<h4 className="font-semibold text-[#1C3A14] text-sm">Powder</h4>
<p className="text-xs text-[#1C3A14]/70">
                    Versatile &amp; fast-acting.
                  </p>
</div>
</div>
<div className="p-4 rounded-2xl bg-[#1C3A14]/5 border border-[#1C3A14]/10 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#1C3A14]/10 flex items-center justify-center text-[#1C3A14]">
<i className="w-5 h-5" data-lucide="pill"></i>
</div>
<div>
<h4 className="font-semibold text-[#1C3A14] text-sm">Capsules</h4>
<p className="text-xs text-[#1C3A14]/70">
                    Convenient &amp; tasteless.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="step-block hidden h-full flex flex-col justify-center" data-type="quiz" id="step-4">
<div className="flex flex-col justify-center h-full max-w-lg mx-auto w-full px-1">
<div className="flex flex-col items-start text-left">
<span className="inline-flex items-center text-[10px] uppercase font-bold text-[#1C3A14] tracking-widest bg-[#D9F99D] rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
              Question 3
            </span>
<h2 className="text-3xl font-bold text-[#1C3A14] tracking-tight mb-8">
              Which format do you prefer?
            </h2>
<div className="flex flex-col gap-3 w-full">
<button className="option-btn w-full text-left p-5 rounded-2xl border border-[#1C3A14]/10 bg-[#1C3A14]/5 text-[#1C3A14] hover:bg-[#1C3A14]/10 transition-all flex items-center justify-between group" onclick="selectOption(this)">
<div>
<span className="text-sm font-semibold block text-[#1C3A14]">
                    Powder
                  </span>
<span className="text-xs text-[#1C3A14]/60 block mt-0.5">
                    Mix with water/juice
                  </span>
</div>
<i className="w-5 h-5 opacity-0 check-icon transition-opacity text-[#1C3A14]" data-lucide="check-circle-2"></i>
</button>
<button className="option-btn w-full text-left p-5 rounded-2xl border border-[#1C3A14]/10 bg-[#1C3A14]/5 text-[#1C3A14] hover:bg-[#1C3A14]/10 transition-all flex items-center justify-between group" onclick="selectOption(this)">
<div>
<span className="text-sm font-semibold block text-[#1C3A14]">
                    Capsules
                  </span>
<span className="text-xs text-[#1C3A14]/60 block mt-0.5">
                    Easy to swallow
                  </span>
</div>
<i className="w-5 h-5 opacity-0 check-icon transition-opacity text-[#1C3A14]" data-lucide="check-circle-2"></i>
</button>
<button className="option-btn w-full text-left p-5 rounded-2xl border border-[#1C3A14]/10 bg-[#1C3A14]/5 text-[#1C3A14] hover:bg-[#1C3A14]/10 transition-all flex items-center justify-between group" onclick="selectOption(this)">
<div>
<span className="text-sm font-semibold block text-[#1C3A14]">
                    Edibles/Gummies
                  </span>
<span className="text-xs text-[#1C3A14]/60 block mt-0.5">
                    Tasty &amp; discrete
                  </span>
</div>
<i className="w-5 h-5 opacity-0 check-icon transition-opacity text-[#1C3A14]" data-lucide="check-circle-2"></i>
</button>
</div>
</div>
</div>
</div>

<div className="step-block hidden h-full flex flex-col justify-center" id="step-5">
<div className="flex flex-col justify-center h-full max-w-lg mx-auto w-full px-1">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#1C3A14] text-[#FCFCF8] flex items-center justify-center shadow-xl shadow-[#1C3A14]/20 mb-6">
<i className="w-8 h-8" data-lucide="check"></i>
</div>
<h2 className="text-3xl font-bold tracking-tight text-[#1C3A14] mb-2">
              Recommended Catalog
            </h2>
<p className="text-[#1C3A14]/60 max-w-xs mx-auto mb-8 text-sm">
              Based on your responses, we've curated the perfect starting point.
            </p>
<div className="w-full bg-white border border-[#1C3A14]/10 p-6 rounded-3xl shadow-sm text-left relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#D9F99D] px-3 py-1 rounded-bl-xl">
<span className="text-[#1C3A14] text-[10px] font-bold uppercase tracking-wider">
                  Best Match
                </span>
</div>
<h3 className="text-xl font-bold text-[#1C3A14] mb-1">
                Daily Balance Kit
              </h3>
<div className="flex gap-1 mb-4">
<i className="w-3 h-3 text-[#1C3A14] fill-[#1C3A14]" data-lucide="star"></i>
<i className="w-3 h-3 text-[#1C3A14] fill-[#1C3A14]" data-lucide="star"></i>
<i className="w-3 h-3 text-[#1C3A14] fill-[#1C3A14]" data-lucide="star"></i>
<i className="w-3 h-3 text-[#1C3A14] fill-[#1C3A14]" data-lucide="star"></i>
<i className="w-3 h-3 text-[#1C3A14] fill-[#1C3A14]" data-lucide="star"></i>
</div>
<p className="text-sm text-[#1C3A14]/70 mb-6 leading-relaxed">
                A curated mix of Green Maeng Da for focus and Red Bali for
                relaxation. Perfect for beginners starting their journey.
              </p>
<button className="w-full py-4 bg-[#1C3A14] text-[#FCFCF8] font-semibold rounded-2xl hover:bg-[#1C3A14]/90 transition-all shadow-lg shadow-[#1C3A14]/10 flex items-center justify-center gap-2">
<span>Get Starter Kit</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</main>


<footer className="fixed bottom-0 w-full z-40 bg-gradient-to-t from-[#FCFCF8] via-[#FCFCF8] to-transparent pt-12 pb-8 px-6" style={{display: 'block'}}>
<div className="flex max-w-xl mr-auto ml-auto items-center justify-end" id="nav-container">
<button className="group flex hover:bg-[#D9F99D]/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none text-sm font-semibold text-[#1C3A14] bg-[#D9F99D] rounded-full pt-3 pr-5 pb-3 pl-6 shadow-[0_4px_20px_-4px_rgba(217,249,157,0.5)] gap-x-2 gap-y-2 items-center" id="btn-next" onclick="changeStep(1)">
<span className="">Start</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="text-center mt-6"></div>
</footer>


    </>
  );
}
