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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let currentStep = 1;
        const totalSteps = 7;

        function startQuiz() {
            document.getElementById('hero-section').style.display = 'none';
            document.getElementById('quiz-container').classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function nextStep(step) {
            document.querySelectorAll('.quiz-step').forEach(el => {
                el.classList.add('hidden-step');
                el.classList.remove('visible-step');
            });

            const target = document.getElementById(`step-${step}`);
            target.classList.remove('hidden-step');
            target.classList.add('visible-step');

            currentStep = step;
            const progress = (currentStep / totalSteps) * 100;
            document.getElementById('progress-bar').style.width = `${progress}%`;
            document.getElementById('progress-text').innerText = `Step ${currentStep} of ${totalSteps}`;
            
            window.scrollTo(0, 0);
        }

        function showResults() {
            document.getElementById('quiz-container').classList.add('hidden');
            document.getElementById('results-page').classList.remove('hidden');
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 py-4">
<div className="max-w-5xl mx-auto flex justify-between items-center">
<div className="flex items-center">
<img alt="RCMC Logo" className="h-8 md:h-9 w-auto object-contain" src="https://rootcausemedicalclinics.com/wp-content/uploads/LOGO-RCMC-274x86.png"/>
</div>
<div className="hidden md:flex items-center gap-6">
<span className="text-xs font-medium text-blue-600/70 uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Clearwater, FL
                </span>
</div>
</div>
</nav>

<section className="pt-16 pb-20 px-6" id="hero-section">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium mb-6 border border-emerald-100">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="1.2rem"></iconify-icon>
                Fatigue Recovery Specialists
            </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.15]">
                Waking up tired every single day, no matter how much you sleep?
            </h1>
<p className="text-lg md:text-xl text-zinc-500 mb-10 font-normal leading-relaxed max-w-2xl mx-auto">
                Take this free 2-minute quiz to find out if your chronic fatigue is actually a symptom of a <span className="text-blue-600 font-medium">hidden metabolic</span> or <span className="text-orange-500 font-medium">hormonal imbalance</span>.
            </p>

<div className="flex flex-col items-center gap-8">
<div className="flex flex-col items-center gap-4 w-full">
<button className="group relative px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl text-lg font-medium shadow-xl shadow-orange-200 transition-all hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto" onclick="startQuiz()">
                        Take the quiz now
                        <iconify-icon className="ml-2 align-middle group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-xs text-zinc-400 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
                        Confidential &amp; Takes 2 minutes.
                    </p>
</div>

<div className="w-full max-w-2xl mt-4">
<div className="relative pt-[56.25%] rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 border-4 border-white ring-1 ring-zinc-100">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/RRQsXleB-lc" title="RCMC Patient Testimonial">
</iframe>
</div>
<p className="mt-4 text-xs font-medium text-zinc-400 uppercase tracking-widest">See how we've helped others reclaim their energy</p>
</div>
</div>
</div>
</section>

<section className="hidden py-12 px-4 min-h-[600px] bg-zinc-50/50" id="quiz-container">
<div className="max-w-2xl mx-auto">

<div className="mb-12">
<div className="flex justify-between items-end mb-3">
<span className="text-xs font-medium text-blue-600 uppercase tracking-wider">Assessment Status</span>
<span className="text-xs font-semibold text-zinc-400" id="progress-text">Step 1 of 7</span>
</div>
<div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
<div className="progress-bar h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-orange-500 w-[14%]" id="progress-bar"></div>
</div>
</div>

<div className="relative">

<div className="quiz-step visible-step" id="step-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-8">How would you describe your daily energy?</h2>
<div className="grid gap-3">
<button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white hover:border-blue-500 hover:bg-blue-50/50 transition-all group" onclick="nextStep(2)">
<span className="text-base font-medium text-zinc-700 group-hover:text-blue-900 transition-colors">I wake up exhausted even after 8+ hours of sleep</span>
</button>
<button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white hover:border-blue-500 hover:bg-blue-50/50 transition-all group" onclick="nextStep(2)">
<span className="text-base font-medium text-zinc-700 group-hover:text-blue-900 transition-colors">I have a massive crash every afternoon at 2-3 PM</span>
</button>
<button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white hover:border-blue-500 hover:bg-blue-50/50 transition-all group" onclick="nextStep(2)">
<span className="text-base font-medium text-zinc-700 group-hover:text-blue-900 transition-colors">I'm "tired but wired"—exhausted but can't fall asleep</span>
</button>
</div>
</div>

<div className="quiz-step hidden-step" id="step-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-8">How long have you felt this way?</h2>
<div className="grid gap-3">
<button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white hover:border-blue-500 transition-all" onclick="nextStep(3)">
<span className="text-base font-medium text-zinc-700">A few months</span>
</button>
<button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white hover:border-blue-500 transition-all" onclick="nextStep(3)">
<span className="text-base font-medium text-zinc-700">1 to 3 years</span>
</button>
<button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white hover:border-blue-500 transition-all" onclick="nextStep(3)">
<span className="text-base font-medium text-zinc-700">More than 3 years</span>
</button>
</div>
</div>


<div className="quiz-step hidden-step" id="step-3"><h2 className="text-2xl font-semibold mb-8">What have doctors told you?</h2><button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white mb-3 font-medium" onclick="nextStep(4)">"Your blood work looks normal"</button><button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white font-medium" onclick="nextStep(4)">"It's just stress or aging"</button></div>
<div className="quiz-step hidden-step" id="step-4"><h2 className="text-2xl font-semibold mb-8">How is your focus?</h2><button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white mb-3 font-medium" onclick="nextStep(5)">Constant brain fog</button><button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white font-medium" onclick="nextStep(5)">I have good hours and bad hours</button></div>
<div className="quiz-step hidden-step" id="step-5"><h2 className="text-2xl font-semibold mb-8">Post-exercise feeling?</h2><button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white mb-3 font-medium" onclick="nextStep(6)">Wiped out for 24-48 hours</button><button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white font-medium" onclick="nextStep(6)">Normal soreness</button></div>
<div className="quiz-step hidden-step" id="step-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-8">What are you currently using to cope?</h2>
<div className="grid gap-3 mb-8">
<div className="relative"><input className="hidden" id="m1" type="checkbox"/><label className="block w-full p-5 rounded-2xl border border-zinc-200 bg-white cursor-pointer font-medium" htmlFor="m1">Heavy caffeine (3+ cups/day)</label></div>
<div className="relative"><input className="hidden" id="m2" type="checkbox"/><label className="block w-full p-5 rounded-2xl border border-zinc-200 bg-white cursor-pointer font-medium" htmlFor="m2">Energy drinks or supplements</label></div>
</div>
<button className="w-full py-4 bg-orange-500 text-white rounded-2xl text-lg font-medium shadow-lg shadow-orange-100" onclick="nextStep(7)">Continue</button>
</div>
<div className="quiz-step hidden-step" id="step-7">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-8">If there was a path to your old energy levels, would you take it?</h2>
<div className="grid gap-3">
<button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white transition-all group hover:bg-emerald-50 hover:border-emerald-500" onclick="showResults()"><span className="text-base font-medium">Yes, I'm ready to find the root cause</span></button>
<button className="w-full text-left p-5 rounded-2xl border border-zinc-200 bg-white transition-all group hover:bg-blue-50 hover:border-blue-500" onclick="showResults()"><span className="text-base font-medium">I'm curious to learn more</span></button>
</div>
</div>
</div>
</div>
</section>

<div className="hidden" id="results-page">
<section className="py-16 px-6 bg-gradient-to-b from-blue-50/50 to-white">
<div className="max-w-3xl mx-auto text-center">
<div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="2rem"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Assessment Complete</h2>
<div className="text-lg text-zinc-600 space-y-6 leading-relaxed max-w-2xl mx-auto">
<p>Your results suggest you may be experiencing <span className="text-orange-500 font-semibold">Adrenal Fatigue Grade 2</span>. This is often linked to chronic stress patterns affecting your body's energy production cycle.</p>
</div>
<div className="mt-12 flex flex-col items-center gap-4">
<button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-medium shadow-xl shadow-blue-200 transition-all">
                        Schedule a Free Energy Recovery Call
                    </button>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed italic">"RCMC found my thyroid issue that every other doctor missed. I have my life back."</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-blue-400 mb-4">
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed italic">"Within 3 weeks of starting their protocol, my afternoon brain fog was completely gone."</p>
</div>
<div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-emerald-400 mb-4">
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="1rem"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed italic">"I can finally play with my grandkids again without needing a 2-hour nap."</p>
</div>
</div>
</section>
</div>

<footer className="py-12 border-t border-zinc-100 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center">
<img alt="RCMC Logo" className="h-7 w-auto object-contain opacity-50 grayscale hover:grayscale-0 transition-all" src="https://rootcausemedicalclinics.com/wp-content/uploads/LOGO-RCMC-274x86.png"/>
</div>
<div className="text-xs text-zinc-400 flex items-center gap-4">
<span>Privacy Policy</span>
<span className="w-1 h-1 bg-zinc-200 rounded-full"></span>
<span>© 2024 Root Cause Medical Clinic</span>
</div>
</div>
</footer>


    </>
  );
}
