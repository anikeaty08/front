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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-emerald-600 to-green-500 flex items-center justify-center text-white font-medium tracking-tighter">
                    AR
                </div>
<span className="text-white font-medium tracking-tight text-sm group-hover:text-emerald-400 transition-colors">AKUEB.RES</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white hover:text-emerald-400 transition-colors" href="#resources">Resources</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#roadmap">Roadmap</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#mcq-solver">Solver Preview</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-400 border border-white/10 rounded-full px-3 py-1.5 hover:border-emerald-500/50 hover:text-white transition-all bg-white/5">
<iconify-icon height="14" icon="solar:magnifer-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>Search resources...</span>
<span className="ml-2 text-[10px] bg-white/10 px-1 rounded text-neutral-500">⌘K</span>
</button>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] -z-10 opacity-40"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                2024 Examination Papers Added
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                Master your curriculum<br/> with precision.
            </h1>
<p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light">
                The comprehensive digital archive for AKUEB students. Access question papers, audio passages, and answer keys all in one place.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    Browse Resources
                    <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon height="16" icon="solar:calendar-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    View Roadmap
                </button>
</div>
</div>
</section>

<section className="py-20 border-y border-white/10 bg-neutral-900/10" id="resources">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Available Resources</h2>
<p className="text-neutral-400 text-sm">Everything you need to prepare right now.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group p-5 rounded-xl border border-white/10 bg-neutral-900/30 hover:border-emerald-500/30 hover:bg-neutral-900 transition-all">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:file-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Question Papers</h3>
</div>
<p className="text-neutral-500 text-xs leading-relaxed ml-14">Comprehensive archive of MCQs and Theory papers organized by year.</p>
</div>

<div className="group p-5 rounded-xl border border-white/10 bg-neutral-900/30 hover:border-emerald-500/30 hover:bg-neutral-900 transition-all">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:key-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Answer Keys</h3>
</div>
<p className="text-neutral-500 text-xs leading-relaxed ml-14">Official MCQ answers to verify your practice results instantly.</p>
</div>

<div className="group p-5 rounded-xl border border-white/10 bg-neutral-900/30 hover:border-emerald-500/30 hover:bg-neutral-900 transition-all">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:clipboard-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">E-marking Notes</h3>
</div>
<p className="text-neutral-500 text-xs leading-relaxed ml-14">Detailed Theory answers and examiner comments for deeper understanding.</p>
</div>

<div className="group p-5 rounded-xl border border-white/10 bg-neutral-900/30 hover:border-emerald-500/30 hover:bg-neutral-900 transition-all">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:headphones-round-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Listening Passages</h3>
</div>
<p className="text-neutral-500 text-xs leading-relaxed ml-14">High-quality audio files for language listening comprehension tests.</p>
</div>

<div className="group p-5 rounded-xl border border-white/10 bg-neutral-900/30 hover:border-emerald-500/30 hover:bg-neutral-900 transition-all">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:bookmark-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Syllabus</h3>
</div>
<p className="text-neutral-500 text-xs leading-relaxed ml-14">Complete breakdown of Student Learning Objectives (SLOs) per subject.</p>
</div>

<div className="group p-5 rounded-xl border border-white/10 bg-neutral-900/30 hover:border-emerald-500/30 hover:bg-neutral-900 transition-all">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon height="20" icon="solar:document-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm">Model Papers</h3>
</div>
<p className="text-neutral-500 text-xs leading-relaxed ml-14">Official example papers to understand paper patterns and structure.</p>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6" id="roadmap">
<div className="mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] uppercase font-bold tracking-wider mb-4">
                Coming Soon
            </div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Soon to come features</h2>
<p className="text-neutral-400 text-sm">Experimental tools for students to try out.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="relative p-6 rounded-xl border border-white/10 bg-neutral-900/20 overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-20 text-emerald-500">
<iconify-icon height="60" icon="solar:magic-stick-3-linear" width="60"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm mb-2">MCQ Solver</h3>
<p className="text-neutral-500 text-xs">Seamlessly solve MCQs using AI.</p>
</div>

<div className="relative p-6 rounded-xl border border-white/10 bg-neutral-900/20 overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-20 text-emerald-500">
<iconify-icon height="60" icon="solar:folder-with-files-linear" width="60"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm mb-2">Topical Papers</h3>
<p className="text-neutral-500 text-xs">Practice questions sorted by topic (MCQs only).</p>
</div>

<div className="relative p-6 rounded-xl border border-white/10 bg-neutral-900/20 overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-20 text-emerald-500">
<iconify-icon height="60" icon="solar:shuffle-linear" width="60"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm mb-2">Random Generator</h3>
<p className="text-neutral-500 text-xs">Generate unique practice tests (MCQs only).</p>
</div>

<div className="relative p-6 rounded-xl border border-white/10 bg-neutral-900/20 overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-20 text-emerald-500">
<iconify-icon height="60" icon="solar:notes-minimalistic-linear" width="60"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm mb-2">SLO-Wise Notes</h3>
<p className="text-neutral-500 text-xs">Targeted revision notes mapped to syllabus.</p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/10 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Browse Past Papers</h2>
<p className="text-neutral-400 text-sm">Organized by year and subject for seamless revision.</p>
</div>
<a className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors" href="#">
                    View all subjects <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group relative p-6 rounded-xl border border-white/10 bg-neutral-900/30 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-start justify-between mb-8 relative z-10">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
<iconify-icon height="24" icon="solar:atom-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-medium border border-white/10 px-2 py-1 rounded text-neutral-400">SSC I &amp; II</span>
</div>
<h3 className="text-lg font-medium text-white mb-1 relative z-10">Physics</h3>
<p className="text-sm text-neutral-500 mb-4 relative z-10">2008 - 2023 Comprehensive papers.</p>
<div className="flex gap-2 relative z-10">
<span className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">Theory</span>
<span className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">Practical</span>
</div>
</div>

<div className="group relative p-6 rounded-xl border border-white/10 bg-neutral-900/30 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-start justify-between mb-8 relative z-10">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
<iconify-icon height="24" icon="solar:bottle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-medium border border-white/10 px-2 py-1 rounded text-neutral-400">HSSC I &amp; II</span>
</div>
<h3 className="text-lg font-medium text-white mb-1 relative z-10">Chemistry</h3>
<p className="text-sm text-neutral-500 mb-4 relative z-10">Organic and inorganic modules.</p>
<div className="flex gap-2 relative z-10">
<span className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">PDF</span>
<span className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">Solved</span>
</div>
</div>

<div className="group relative p-6 rounded-xl border border-white/10 bg-neutral-900/30 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-start justify-between mb-8 relative z-10">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
<iconify-icon height="24" icon="solar:calculator-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-medium border border-white/10 px-2 py-1 rounded text-neutral-400">SSC / HSSC</span>
</div>
<h3 className="text-lg font-medium text-white mb-1 relative z-10">Mathematics</h3>
<p className="text-sm text-neutral-500 mb-4 relative z-10">Algebra, Calculus and Geometry.</p>
<div className="flex gap-2 relative z-10">
<span className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">Formula Sheets</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/10 relative overflow-hidden" id="mcq-solver">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-medium mb-4 border border-emerald-500/20 px-3 py-1 rounded-full bg-emerald-500/5">
<iconify-icon height="16" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Coming Soon Feature
                </div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Instant MCQ Solver</h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
                    An upcoming tool to help you solve difficult questions. Select the subject, enter the question code or paste the text to get instant answers.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        High Accuracy from official keys
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Instant grading for practice sets
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Detailed breakdown of solution
                    </li>
</ul>
<button className="h-10 px-6 rounded bg-neutral-800 text-neutral-400 text-sm font-medium cursor-not-allowed border border-white/5 flex items-center gap-2" disabled="">
                    Notify on Launch
                </button>
</div>
<div className="w-full md:w-1/2 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">

<div className="rounded-xl border border-white/10 bg-black p-6 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<span className="text-xs font-medium text-neutral-400">Scanner.exe (Preview)</span>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
</div>
<div className="space-y-4 pointer-events-none">
<div>
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-2">Select Subject</label>
<div className="relative">
<div className="w-full bg-neutral-900 border border-white/10 text-neutral-500 text-sm rounded px-3 py-2 flex justify-between items-center">
                                    Computer Science
                                    <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-2">Question Text / ID</label>
<div className="w-full bg-neutral-900 border border-white/10 text-neutral-500 text-sm rounded px-3 py-2 h-24">Paste question here...</div>
</div>
<button className="w-full h-9 rounded bg-emerald-600/50 text-white/70 text-xs font-medium flex items-center justify-center gap-2">
<iconify-icon height="16" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Analyze &amp; Solve
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="topical">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-[10px] uppercase font-bold tracking-wider mb-4">
                Coming Soon
            </div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Topical Papers</h2>
<p className="text-neutral-400 text-sm">Focus your efforts. Practice questions sorted by specific topics rather than full years.</p>
</div>
<div className="flex flex-col border border-white/10 rounded-xl bg-neutral-900/20 overflow-hidden opacity-80">

<div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
<div className="col-span-5 md:col-span-6">Topic Name</div>
<div className="col-span-3 md:col-span-2">Subject</div>
<div className="col-span-2 md:col-span-2 text-center">Questions</div>
<div className="col-span-2 md:col-span-2 text-right">Status</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 items-center">
<div className="col-span-5 md:col-span-6 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-emerald-400">
<iconify-icon height="16" icon="solar:document-text-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Kinematics &amp; Dynamics</div>
<div className="text-[10px] text-neutral-500">Physics</div>
</div>
</div>
<div className="col-span-3 md:col-span-2">
<span className="text-[10px] bg-neutral-800 text-neutral-400 border border-neutral-700 px-2 py-1 rounded">MCQs Only</span>
</div>
<div className="col-span-2 md:col-span-2 text-center text-xs text-neutral-400">145</div>
<div className="col-span-2 md:col-span-2 text-right">
<span className="text-[10px] text-emerald-500">In Progress</span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 items-center">
<div className="col-span-5 md:col-span-6 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-emerald-400">
<iconify-icon height="16" icon="solar:document-text-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Stoichiometry</div>
<div className="text-[10px] text-neutral-500">Chemistry</div>
</div>
</div>
<div className="col-span-3 md:col-span-2">
<span className="text-[10px] bg-neutral-800 text-neutral-400 border border-neutral-700 px-2 py-1 rounded">MCQs Only</span>
</div>
<div className="col-span-2 md:col-span-2 text-center text-xs text-neutral-400">89</div>
<div className="col-span-2 md:col-span-2 text-right">
<span className="text-[10px] text-emerald-500">In Progress</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-emerald-600 to-green-500 flex items-center justify-center text-white text-[10px] font-medium tracking-tighter">
                    AR
                </div>
<span className="text-neutral-400 text-xs font-medium">© 2024 AKUEB Resources</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Contribute</a>
</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="18"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
