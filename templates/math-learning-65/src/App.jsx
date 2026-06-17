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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-200 group-hover:scale-105 transition-transform">
<span className="font-math text-lg font-medium">S</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-sm">SolveIt SolveIt</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Methodology</a>
<a className="hover:text-slate-900 transition-colors" href="#demo">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 hidden sm:block" href="#">Log in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" href="#">
                    Start Learning
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-slate-50 to-slate-50 -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                New: Geometry Module Available
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Learn Math by Solving,<br/>
<span className="text-slate-400">Not Guessing.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                SolveIt SolveIt helps students understand math through guided problem-solving and similar examples instead of instant answers.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
                    Try SolveIt SolveIt
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="play-circle"></i>
                    See How It Works
                </button>
</div>
</div>

<div className="max-w-5xl mx-auto px-4 relative z-10">

<div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

<div className="relative mx-auto border-gray-800 bg-gray-900 border-[10px] rounded-[2.5rem] h-[600px] w-full max-w-[350px] md:max-w-[700px] shadow-2xl flex flex-col overflow-hidden">

<div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[10px] top-[72px] rounded-l-lg"></div>
<div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[124px] rounded-l-lg"></div>
<div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[178px] rounded-l-lg"></div>
<div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[10px] top-[142px] rounded-l-lg"></div>

<div className="w-full h-full bg-slate-50 rounded-[2rem] overflow-hidden flex flex-col relative">

<div className="h-14 bg-white/90 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-6 sticky top-0 z-20">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-left"></i>
<span className="text-sm font-semibold text-slate-800">Algebra I • Quadratics</span>
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-600">JD</div>
</div>

<div className="flex-1 overflow-y-auto p-6 md:flex md:gap-6 no-scrollbar">

<div className="flex-1 flex flex-col gap-4">

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-slate-100">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Problem 4</span>
<span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-medium">Hard</span>
</div>
<h3 className="text-lg font-medium text-slate-800 mb-2">Solve for <span className="font-math">x</span>:</h3>
<div className="text-3xl font-math text-slate-900 mb-6 text-center py-4 bg-slate-50 rounded-xl">
                                    x² - 5x + 6 = 0
                                </div>
<div className="relative">
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium" placeholder="Enter your answer" type="text"/>
<button className="absolute right-2 top-1.5 bg-slate-900 text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100">
<div className="flex gap-3">
<div className="mt-1 bg-white p-1.5 rounded-full shadow-sm h-fit">
<i className="w-4 h-4 text-blue-500" data-lucide="sparkles"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-700 mb-1">Need a nudge?</p>
<p className="text-xs text-slate-500 leading-relaxed">
                                            This is a quadratic equation. Try to factor it into the form <span className="font-math">(x - a)(x - b) = 0</span>.
                                        </p>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col gap-4 mt-4 md:mt-0">
<div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/80 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-24 h-24 text-blue-600 transform rotate-12" data-lucide="lightbulb"></i>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Similar Example</span>
<span className="text-xs text-slate-400">Learn the pattern</span>
</div>
<div className="space-y-4">
<div>
<p className="text-xs text-slate-500 mb-1">If we had:</p>
<p className="font-math text-lg text-slate-800">x² - 7x + 12 = 0</p>
</div>
<div className="relative pl-4 border-l-2 border-slate-200 space-y-4">
<div>
<p className="text-xs font-medium text-slate-800 mb-1">Step 1: Find factors</p>
<p className="text-xs text-slate-500">Find two numbers that multiply to 12 and add to -7.</p>
<div className="flex gap-2 mt-2">
<span className="bg-white border border-slate-200 px-2 py-1 rounded text-xs font-math text-slate-600">-3</span>
<span className="bg-white border border-slate-200 px-2 py-1 rounded text-xs font-math text-slate-600">-4</span>
</div>
</div>
<div>
<p className="text-xs font-medium text-slate-800 mb-1">Step 2: Rewrite</p>
<p className="font-math text-sm text-slate-700">(x - 3)(x - 4) = 0</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-16 bg-white border-t border-slate-100 flex justify-around items-center text-slate-400 z-20">
<div className="flex flex-col items-center gap-1 text-slate-900">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[10px] font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 hover:text-slate-600">
<i className="w-5 h-5" data-lucide="book-open"></i>
<span className="text-[10px] font-medium">Practice</span>
</div>
<div className="flex flex-col items-center gap-1 hover:text-slate-600">
<i className="w-5 h-5" data-lucide="pie-chart"></i>
<span className="text-[10px] font-medium">Progress</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Mastery, not memorization.</h2>
<p className="text-slate-500 text-lg max-w-2xl mx-auto">We've redesigned the math practice experience to focus on building confidence through understanding logic, not just getting a green checkmark.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-slate-200 transition-colors group">
<div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-blue-600" data-lucide="copy"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Interactive Problem-Solving</h3>
<p className="text-slate-500 leading-relaxed">
                        Instead of leaving students stuck, SolveIt provides a "mirror problem"—a structurally identical example with a full breakdown. Students map the logic from the example to their own problem.
                    </p>
<div className="mt-8 bg-white rounded-xl p-4 border border-slate-200/60 shadow-sm flex flex-col gap-2">
<div className="h-2 w-1/3 bg-slate-100 rounded-full"></div>
<div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-slate-200 transition-colors group">
<div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-emerald-600" data-lucide="target"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Guided Correction</h3>
<p className="text-slate-500 leading-relaxed">
                        Incorrect attempts trigger specific feedback loops. We analyze the mistake and offer a hint about the specific step (e.g., "Check your negative signs in step 2") rather than revealing the final answer.
                    </p>
<div className="mt-8 flex gap-3">
<div className="flex-1 bg-white rounded-xl p-4 border border-slate-200/60 shadow-sm flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
</div>
<div className="flex-1 bg-white rounded-xl p-4 border border-slate-200/60 shadow-sm flex items-center gap-3 opacity-50">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden" id="demo">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">The Confidence Loop</h2>
<p className="text-slate-500">How we turn "I don't know" into "I solved it".</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 transition-colors">
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 transition-colors">
<i className="w-5 h-5 text-slate-900" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 relative">

<div className="flex-1 min-w-[300px] group">
<div className="bg-white rounded-2xl p-1 shadow-sm border border-slate-200/80 transition-all hover:shadow-md h-full">
<div className="bg-slate-50/50 rounded-xl p-6 h-full flex flex-col">
<div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-sm font-semibold text-slate-400 mb-4 shadow-sm">1</div>
<h4 className="text-base font-semibold text-slate-900 mb-1">Problem Input</h4>
<p className="text-xs text-slate-500 mb-6">Clean, distraction-free environment.</p>
<div className="mt-auto bg-white rounded-lg p-4 border border-slate-200 shadow-[0_4px_12px_rgb(0,0,0,0.03)]">
<p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Equation</p>
<p className="text-xl font-math text-slate-800">3x + 9 = 24</p>
</div>
</div>
</div>
</div>

<div className="flex-1 min-w-[300px] group">
<div className="bg-white rounded-2xl p-1 shadow-sm border border-blue-200 ring-4 ring-blue-50 transition-all hover:shadow-md h-full">
<div className="bg-blue-50/30 rounded-xl p-6 h-full flex flex-col">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-sm font-semibold text-white mb-4 shadow-sm">2</div>
<h4 className="text-base font-semibold text-slate-900 mb-1">Similar Example</h4>
<p className="text-xs text-slate-500 mb-6">Learning the method, not copying the answer.</p>
<div className="mt-auto bg-white rounded-lg border border-slate-200 shadow-[0_4px_12px_rgb(0,0,0,0.03)] overflow-hidden">
<div className="bg-blue-50 p-2 border-b border-blue-100">
<p className="text-[10px] font-semibold text-blue-700 uppercase tracking-wider text-center">Example Logic</p>
</div>
<div className="p-4 space-y-2">
<div className="flex justify-between text-xs text-slate-400">
<span>2x + 4 = 12</span>
<span>Start</span>
</div>
<div className="flex justify-between text-xs font-medium text-slate-600">
<span>2x = 8</span>
<span className="text-blue-600">Subtract 4</span>
</div>
<div className="flex justify-between text-xs font-medium text-slate-800">
<span>x = 4</span>
<span className="text-blue-600">Divide by 2</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 min-w-[300px] group">
<div className="bg-white rounded-2xl p-1 shadow-sm border border-slate-200/80 transition-all hover:shadow-md h-full">
<div className="bg-slate-50/50 rounded-xl p-6 h-full flex flex-col">
<div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-sm font-semibold text-slate-400 mb-4 shadow-sm">3</div>
<h4 className="text-base font-semibold text-slate-900 mb-1">Student Attempt</h4>
<p className="text-xs text-slate-500 mb-6">Applying knowledge immediately.</p>
<div className="mt-auto bg-white rounded-lg p-4 border border-slate-200 shadow-[0_4px_12px_rgb(0,0,0,0.03)]">
<p className="text-xs text-slate-500 mb-2">Solve <span className="font-math">3x + 9 = 24</span></p>
<div className="flex gap-2">
<div className="flex-1 bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-sm font-math text-slate-800">5</div>
<button className="bg-emerald-500 text-white rounded px-3 py-1 text-xs font-medium shadow-sm">Check</button>
</div>
<div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 font-medium bg-emerald-50 p-1.5 rounded w-fit">
<i className="w-3 h-3" data-lucide="check-circle"></i>
                                    Correct! Well done.
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-16">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
<div className="flex flex-col items-center md:items-start">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="font-math text-sm font-medium">S</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight">SolveIt SolveIt</span>
</div>
<p className="text-sm text-slate-500 text-center md:text-left">Building mathematical confidence,<br/>one problem at a time.</p>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Contact</a>
<a className="hover:text-slate-900" href="#">Twitter</a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 text-center md:text-left text-xs text-slate-400">
            © 2023 SolveIt SolveIt Inc. All rights reserved.
        </div>
</footer>


    </>
  );
}
