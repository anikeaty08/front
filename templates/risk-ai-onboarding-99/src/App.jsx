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



        let currentStep = 1;
        const totalSteps = 4;

        function updateUI() {
            // Update visuals and text
            for (let i = 1; i <= totalSteps; i++) {
                const visual = document.getElementById(`visual-${i}`);
                const text = document.getElementById(`text-${i}`);
                const bar = document.getElementById(`bar-${i}`);
                
                if (i === currentStep) {
                    visual.classList.add('active');
                    text.classList.add('active');
                    bar.classList.remove('bg-zinc-800');
                    bar.classList.add('bg-rose-500');
                } else {
                    visual.classList.remove('active');
                    text.classList.remove('active');
                    if (i > currentStep) {
                        bar.classList.remove('bg-rose-500');
                        bar.classList.add('bg-zinc-800');
                    } else {
                        // Keep previous bars filled
                        bar.classList.remove('bg-zinc-800');
                        bar.classList.add('bg-rose-500');
                    }
                }
            }

            // Update Button Text
            const btnText = document.getElementById('btnText');
            if (currentStep === totalSteps) {
                btnText.innerText = "Start Risk Analysis";
            } else {
                btnText.innerText = "Continue";
            }
        }

        function nextStep() {
            if (currentStep < totalSteps) {
                currentStep++;
                updateUI();
            } else {
                // Final Action - Simulate entering app
                document.querySelector('main').style.opacity = '0';
                document.querySelector('header').style.opacity = '0';
                setTimeout(() => {
                    alert("Welcome to Risk AI Command Center.");
                    location.reload(); 
                }, 500);
            }
        }

        function skipOnboarding() {
             // Skip logic
             currentStep = totalSteps;
             updateUI();
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
      

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-900/20 rounded-full blur-3xl mix-blend-screen animate-pulse-slow"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl mix-blend-screen animate-float"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
</div>

<header className="relative z-50 w-full px-8 py-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-rose-500 to-violet-600 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<span className="font-medium tracking-tight text-sm text-zinc-200">RISK AI</span>
</div>
<button className="text-xs font-medium text-zinc-500 hover:text-white transition-colors duration-200" onclick="skipOnboarding()">
            Skip Intro
        </button>
</header>

<main className="flex-grow flex items-center justify-center relative z-40 px-4 sm:px-6">
<div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="relative h-80 lg:h-96 w-full flex items-center justify-center lg:justify-start order-1 lg:order-1">

<div className="step-content active w-full h-full flex items-center justify-center" id="visual-1">
<div className="relative w-64 h-64">

<div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-gradient-to-r from-rose-500 to-rose-700 blur-lg opacity-40 animate-pulse"></div>
<div className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-zinc-900 border border-rose-500/30 flex items-center justify-center z-10 glass-card">
<span className="iconify text-rose-400" data-icon="lucide:shield-alert" data-width="32"></span>
</div>

<div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-700 rounded-full border border-zinc-500"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-700 rounded-full border border-zinc-500"></div>
</div>
<div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse] scale-75">
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 rounded-lg glass-card flex items-center justify-center">
<span className="iconify text-zinc-400" data-icon="lucide:activity" data-width="14"></span>
</div>
<div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 rounded-lg glass-card flex items-center justify-center">
<span className="iconify text-zinc-400" data-icon="lucide:file-bar-chart-2" data-width="14"></span>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="30" stroke="white" stroke-dasharray="2 2" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" fill="none" r="45" stroke="white" strokeWidth="0.2"></circle>
</svg>
</div>
</div>

<div className="step-content w-full h-full flex items-center justify-center" id="visual-2">
<div className="relative w-64 h-auto flex flex-col gap-3">

<div className="glass-card p-3 rounded-2xl rounded-tl-sm self-start max-w-[80%] animate-float transform translate-x-[-10px]">
<div className="flex gap-2 items-center">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
<div className="h-1.5 w-12 bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-8 bg-zinc-700 rounded-full"></div>
</div>
</div>
<div className="glass-card p-3 rounded-2xl rounded-tr-sm self-end max-w-[85%] bg-rose-900/10 border-rose-500/20 animate-float-delayed">
<div className="flex gap-2 items-center mb-1">
<span className="iconify text-rose-400" data-icon="lucide:bot" data-width="12"></span>
<span className="text-[10px] text-rose-300 font-medium tracking-wide">ANALYSIS COMPLETE</span>
</div>
<div className="space-y-1.5">
<div className="h-1.5 w-full bg-zinc-600 rounded-full opacity-50"></div>
<div className="h-1.5 w-2/3 bg-zinc-600 rounded-full opacity-50"></div>
</div>
</div>
<div className="glass-card p-3 rounded-2xl rounded-tl-sm self-start max-w-[70%] animate-float" style={{animationDelay: '1s'}}>
<div className="flex gap-2 items-center">
<span className="iconify text-zinc-400" data-icon="lucide:arrow-right-circle" data-width="12"></span>
<div className="h-1.5 w-16 bg-zinc-700 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="step-content w-full h-full flex items-center justify-center" id="visual-3">
<div className="relative w-full h-full flex items-center justify-center">

<div className="absolute glass-card w-40 h-52 rounded-lg transform -rotate-6 translate-x-4 opacity-40 border-zinc-600"></div>

<div className="absolute glass-card w-40 h-52 rounded-lg transform rotate-3 translate-x-2 opacity-70 border-zinc-500"></div>

<div className="absolute glass-card w-40 h-52 rounded-lg bg-zinc-900 transform -translate-y-2 flex flex-col p-4 shadow-2xl border-t border-rose-500/20">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-rose-500/20 flex items-center justify-center">
<span className="iconify text-rose-400" data-icon="lucide:file-check" data-width="12"></span>
</div>
<div className="h-2 w-16 bg-zinc-700 rounded"></div>
</div>
<div className="space-y-2 flex-grow">
<div className="h-1 w-full bg-zinc-800 rounded"></div>
<div className="h-1 w-full bg-zinc-800 rounded"></div>
<div className="h-1 w-3/4 bg-zinc-800 rounded"></div>
<div className="mt-4 p-2 rounded bg-green-900/10 border border-green-500/20 flex items-center gap-2">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="10"></span>
<span className="text-[8px] text-green-400 font-medium">VERIFIED SOURCE</span>
</div>
</div>
</div>

<div className="absolute top-10 right-10 w-8 h-8 rounded-full glass-panel flex items-center justify-center animate-bounce duration-[3000ms]">
<span className="text-[10px] font-serif text-zinc-400">"</span>
</div>
</div>
</div>

<div className="step-content w-full h-full flex items-center justify-center" id="visual-4">
<div className="relative w-64 h-48">

<div className="absolute inset-0 border-l border-b border-zinc-700/50"></div>

<svg className="absolute inset-0 w-full h-full overflow-visible">
<defs>
<lineargradient id="gradientLine" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#be123c" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#fb7185" stop-opacity="1"></stop>
</lineargradient>
</defs>
<path className="drop-shadow-[0_0_10px_rgba(251,113,133,0.5)]" d="M0,150 C40,140 60,160 100,100 S150,80 256,20" fill="none" stroke="url(#gradientLine)" strokeLinecap="round" strokeWidth="3"></path>

<path d="M0,150 C40,140 60,160 100,100 S150,80 256,20 V190 H0 Z" fill="url(#gradientLine)" fillOpacity="0.1"></path>
</svg>

<div className="absolute -top-4 -right-4 w-12 h-12 glass-panel rounded-xl flex items-center justify-center border border-rose-400/30 shadow-[0_0_20px_rgba(225,29,72,0.2)] animate-pulse-slow">
<span className="iconify text-rose-400" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">

<div className="h-40 w-full relative">

<div className="step-content active" id="text-1">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 mb-6">
<span className="iconify text-rose-400" data-icon="lucide:scan-eye" data-width="12"></span>
<span className="text-[10px] font-medium tracking-wide text-rose-200 uppercase">Detection</span>
</div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                            Understand Risk
                        </h1>
<p className="text-base text-zinc-400 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                            Our AI automatically identifies, segments, and explains potential vulnerabilities in real-time.
                        </p>
</div>

<div className="step-content" id="text-2">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-6">
<span className="iconify text-indigo-400" data-icon="lucide:cpu" data-width="12"></span>
<span className="text-[10px] font-medium tracking-wide text-indigo-200 uppercase">Intelligence</span>
</div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                            AI-Powered Insights
                        </h1>
<p className="text-base text-zinc-400 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                            Evaluate complex scenarios through a conversational interface backed by live data streams.
                        </p>
</div>

<div className="step-content" id="text-3">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/10 mb-6">
<span className="iconify text-teal-400" data-icon="lucide:file-search" data-width="12"></span>
<span className="text-[10px] font-medium tracking-wide text-teal-200 uppercase">Verification</span>
</div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                            Evidence-Based Reports
                        </h1>
<p className="text-base text-zinc-400 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                            Generate audit-ready risk assessments complete with citations from verified global sources.
                        </p>
</div>

<div className="step-content" id="text-4">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 mb-6">
<span className="iconify text-rose-400" data-icon="lucide:zap" data-width="12"></span>
<span className="text-[10px] font-medium tracking-wide text-rose-200 uppercase">Action</span>
</div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                            Make Confident Decisions
                        </h1>
<p className="text-base text-zinc-400 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                            Turn uncertainty into clarity with actionable insights that drive smarter, faster outcomes.
                        </p>
</div>
</div>

<div className="mt-12 w-full max-w-md mx-auto lg:mx-0 flex flex-col gap-8">

<div className="flex gap-2 w-full">
<div className="h-1 flex-1 rounded-full bg-rose-500 transition-all duration-500" id="bar-1"></div>
<div className="h-1 flex-1 rounded-full bg-zinc-800 transition-all duration-500" id="bar-2"></div>
<div className="h-1 flex-1 rounded-full bg-zinc-800 transition-all duration-500" id="bar-3"></div>
<div className="h-1 flex-1 rounded-full bg-zinc-800 transition-all duration-500" id="bar-4"></div>
</div>

<button className="group w-full py-3.5 px-6 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]" id="nextBtn" onclick="nextStep()">
<span id="btnText">Continue</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</main>

<footer className="relative z-50 w-full py-6 text-center lg:text-left px-8">
<p className="text-[10px] text-zinc-600 font-medium tracking-wider uppercase">
            © Risk AI System v2.0
        </p>
</footer>


    </>
  );
}
