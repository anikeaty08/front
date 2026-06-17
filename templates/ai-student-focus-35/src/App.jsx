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



        function getSuggestion() {
            const inputVal = document.getElementById('distraction-input').value.trim().toLowerCase();
            const container = document.getElementById('suggestion-container');
            const textEl = document.getElementById('suggestion-text');

            if (!inputVal) return;

            container.style.display = 'block';

            if (inputVal.includes('phone') || inputVal.includes('social media') || inputVal.includes('instagram') || inputVal.includes('tiktok')) {
                textEl.innerText = "If you are distracted by your phone, try setting app limits and using focus mode.";
            } else {
                textEl.innerText = `To manage your distraction with "${inputVal}", try breaking your work into 25-minute focused sessions followed by a 5-minute break.`;
            }
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400/10 blur-[100px]"></div>
<div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-purple-400/10 blur-[100px]"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-pink-400/10 blur-[100px]"></div>
</div>

<header className="w-full max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
<div className="text-xl font-medium tracking-tighter text-gray-900 flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></span>
            FCS.
        </div>
<nav className="hidden md:flex gap-6">
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#intro">Intro</a>
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#problem">Problem</a>
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#solution">Solution</a>
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#how-it-works">How It Works</a>
</nav>
</header>
<main className="flex-grow w-full max-w-5xl mx-auto px-6">

<section className="py-20 md:py-32 flex flex-col items-center text-center" id="intro">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-sm mb-8">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">AI-Powered Assistant</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-gray-900 mb-6 max-w-3xl leading-tight">
                Stay Focused in a World <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Full of Distractions</span>
</h1>
<p className="text-base md:text-lg font-light text-gray-500 max-w-2xl leading-relaxed mb-10">
                Helping students improve focus and manage time using AI.
            </p>
<button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium px-8 py-4 rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.4)] hover:-translate-y-0.5">
                Get Started
            </button>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">

<section className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-rose-100 shadow-[0_2px_12px_rgba(225,29,72,0.03)] flex flex-col h-full hover:shadow-[0_8px_30px_rgba(225,29,72,0.06)] hover:-translate-y-1 transition-all duration-300" id="problem">
<div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-8">
<iconify-icon className="text-rose-500 text-2xl" icon="solar:smartphone-rotate-2-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
                    The Problem
                </h2>
<ul className="text-sm md:text-base font-light text-gray-500 leading-relaxed flex-grow space-y-3">
<li className="flex items-start gap-2">
<iconify-icon className="text-rose-400 mt-1 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                        Students get distracted by phones, social media, and other activities.
                    </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-rose-400 mt-1 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                        Hard to stay focused for long periods.
                    </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-rose-400 mt-1 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                        Poor time management leads to stress and unfinished tasks.
                    </li>
</ul>
</section>

<section className="bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-800 shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex flex-col h-full relative overflow-hidden group hover:-translate-y-1 transition-all duration-300" id="solution">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity duration-500 group-hover:bg-emerald-500/30"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
<div className="w-12 h-12 rounded-2xl bg-gray-800/50 border border-emerald-500/30 flex items-center justify-center mb-8 relative z-10 backdrop-blur-md">
<iconify-icon className="text-emerald-400 text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-4 relative z-10">
                    The Solution
                </h2>
<ul className="text-sm md:text-base font-light text-gray-400 leading-relaxed flex-grow space-y-3 relative z-10">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-1 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        AI tool that automatically tracks your focus patterns.
                    </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-1 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Identifies exactly when and why distractions happen.
                    </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-1 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Gives personalized suggestions to improve focus.
                    </li>
</ul>
</section>
</div>

<section className="pb-20" id="how-it-works">
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-8 text-center">
                How It Works
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-blue-100 shadow-sm flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-500 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-blue-600 mb-2 tracking-tight">Step 1</span>
<p className="text-sm font-light text-gray-600">Track focus time and distractions</p>
</div>

<div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-purple-100 shadow-sm flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(168,85,247,0.08)] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-500 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-purple-600 mb-2 tracking-tight">Step 2</span>
<p className="text-sm font-light text-gray-600">Analyze patterns</p>
</div>

<div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-orange-100 shadow-sm flex flex-col items-center text-center hover:shadow-[0_8px_30px_rgba(249,115,22,0.08)] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-500 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-orange-600 mb-2 tracking-tight">Step 3</span>
<p className="text-sm font-light text-gray-600">Give personalized suggestions</p>
</div>
</div>
</section>

<section className="pb-24" id="interactive">
<div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-indigo-100 shadow-[0_4px_32px_rgba(79,70,229,0.05)] text-center relative overflow-hidden max-w-3xl mx-auto">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"></div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">Identify Your Distraction</h2>
<p className="text-sm font-light text-gray-500 mb-8">What stops you from staying focused? Tell us, and our AI will give you a tip.</p>
<div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-grow bg-white border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 transition-all font-light placeholder:text-gray-400 shadow-sm" id="distraction-input" placeholder="e.g. My phone, social media" type="text"/>
<button className="bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap shadow-sm" onclick="getSuggestion()">
                        Get Suggestion
                    </button>
</div>
<div className="mt-6 max-w-md mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100/50 rounded-xl p-4 text-left transition-all" id="suggestion-container" style={{display: 'none'}}>
<div className="flex gap-3 items-start">
<iconify-icon className="text-indigo-500 text-xl flex-shrink-0 mt-0.5" icon="solar:stars-linear"></iconify-icon>
<p className="text-sm font-light text-indigo-900 leading-relaxed" id="suggestion-text"></p>
</div>
</div>
</div>
</section>

<section className="pb-32 text-center flex flex-col items-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-8">
                Start Improving Your Focus Today
            </h2>
<button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium px-8 py-4 rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all shadow-[0_8px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.4)] hover:-translate-y-0.5">
                Get Started
            </button>
</section>
</main>

<footer className="w-full border-t border-gray-200 mt-auto bg-white/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs font-medium tracking-tighter text-gray-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                FCS.
            </div>
<p className="text-xs font-light text-gray-400">
                Helping students thrive through better focus.
            </p>
</div>
</footer>



    </>
  );
}
