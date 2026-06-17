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



    document.getElementById('year-span').textContent = new Date().getFullYear();
  
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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-emerald-900/50 bg-[#1b2320]/90 backdrop-blur-sm sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-800 flex items-center justify-center text-emerald-50 font-playfair font-semibold text-sm">
                JW
            </div>
<span className="font-playfair font-medium text-lg tracking-tight text-emerald-50">Julian West</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-emerald-200/80 font-medium">
<a className="hover:text-emerald-50 transition-colors" href="#">Methodology</a>
<a className="hover:text-emerald-50 transition-colors" href="#">Schedule</a>
<a className="hover:text-emerald-50 transition-colors" href="#">Results</a>
<a className="hover:text-emerald-50 transition-colors" href="#">Resources</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-800/80 px-3.5 py-1.5 text-xs font-medium text-emerald-100 hover:border-emerald-500 hover:bg-emerald-900/30 transition-colors">
<span>Student Portal</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-emerald-300 hover:shadow-sm transition-colors">
<span>Book Consultation</span>
<iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-1 w-full">
<div className="sm:px-6 lg:px-8 lg:py-16 flex flex-col w-full max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 justify-center">

<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 lg:mb-12">
<div className="">
<h1 className="leading-tight sm:text-5xl lg:text-7xl text-4xl text-emerald-50 tracking-tight font-playfair">
              Unlock Your Full
            </h1>
<h2 className="leading-tight sm:text-4xl lg:text-7xl text-3xl font-medium italic text-emerald-300 tracking-tight font-playfair mt-2">
              academic potential
            </h2>
<p className="mt-5 max-w-xl text-sm sm:text-base text-emerald-100/80 leading-relaxed">
              Private coaching specializing in Mathematics and Physics for high school students. 
              A structured approach to mastering complex concepts, building confidence, and achieving top-tier university placements.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-6 py-3 text-sm font-semibold hover:bg-emerald-300 hover:shadow-sm transition-colors">
<span>View Class Schedule</span>
<iconify-icon height="16" icon="lucide:calendar" width="16"></iconify-icon>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-emerald-800/80 bg-[#212b26] px-5 py-2.5 text-sm font-medium text-emerald-50 hover:border-emerald-500 hover:bg-emerald-950/50 transition-colors">
<iconify-icon className="text-emerald-300" height="18" icon="lucide:play-circle" width="18"></iconify-icon>
<span>Teaching philosophy</span>
</button>
</div>
</div>

<div className="flex items-center gap-4 self-start md:self-end mt-4 md:mt-0">
<div className="flex items-center gap-1 text-amber-400 text-sm">
<iconify-icon className="fill-current" height="14" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" height="14" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" height="14" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" height="14" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" height="14" icon="lucide:star" width="14"></iconify-icon>
</div>
<div className="flex flex-col items-start">
<p className="text-sm font-medium text-emerald-50">
                100%<span className="text-xs text-emerald-300/80 ml-1">University Acceptance</span>
</p>
<div className="flex items-center mt-1 gap-2">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border border-[#1b2320] bg-emerald-800 flex items-center justify-center text-[8px]">S</div>
<div className="w-6 h-6 rounded-full border border-[#1b2320] bg-emerald-700 flex items-center justify-center text-[8px]">M</div>
<div className="w-6 h-6 rounded-full border border-[#1b2320] bg-emerald-600 flex items-center justify-center text-[8px]">L</div>
</div>
<span className="text-xs text-emerald-200/60">Class of '24</span>
</div>
</div>
</div>
</div>

<section className="grid gap-6 lg:gap-7 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] items-stretch">

<article className="overflow-hidden bg-[#111715] rounded-3xl relative shadow-sm border border-emerald-900/60 min-h-[400px] lg:min-h-[600px] group">
<img alt="Teacher writing equations on a blackboard" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111715] via-transparent to-transparent"></div>

<div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 right-5 sm:right-auto">
<div className="bg-[#1f2924]/95 backdrop-blur-sm rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-md border border-emerald-900/70">
<div className="flex items-start gap-3">
<div className="flex flex-none text-emerald-200 bg-emerald-900/50 w-9 h-9 rounded-full items-center justify-center">
<iconify-icon height="18" icon="lucide:graduation-cap" width="18"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-emerald-50">Proven Methodology</p>
<p className="text-sm font-normal italic text-emerald-100/80">Average grade increase of 15%.</p>
<p className="mt-1 text-xs text-emerald-200/70">
                      Based on 2023-2024 student cohort data across Physics and Calculus.
                    </p>
</div>
</div>
</div>
</div>
</article>

<div className="flex flex-col gap-6 lg:gap-7 h-full">

<article className="sm:p-6 lg:p-7 flex flex-col sm:flex-row gap-6 bg-[#232e29] border-emerald-900/70 border rounded-3xl p-5 items-stretch justify-between flex-1">
<div className="flex-1 flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<div className="flex text-emerald-200 bg-emerald-900/60 w-9 h-9 rounded-full items-center justify-center">
<iconify-icon height="18" icon="lucide:file-text" width="18"></iconify-icon>
</div>
<p className="text-xs font-medium text-emerald-100 bg-emerald-900/60 px-2.5 py-1 rounded-full">
                    Custom Curriculum
                  </p>
</div>
<div className="">
<h3 className="font-playfair font-semibold tracking-tight text-xl text-emerald-50">
                    Tailored Learning
                  </h3>
<p className="mt-1 font-playfair font-medium tracking-tight text-lg text-emerald-100 italic">
                    Beyond standard textbooks
                  </p>
<p className="mt-3 text-sm text-emerald-100/80 max-w-sm">
                    Every student receives a personalized roadmap addressing their specific weaknesses and amplifying their strengths.
                  </p>
</div>
<div className="mt-4 flex items-center gap-3 text-xs text-emerald-200/80">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="lucide:check-circle"></iconify-icon>
                        Weekly Progress Reports
                    </span>
</div>
</div>
<div className="flex-none flex items-center justify-center sm:w-32">
<div className="relative w-full aspect-square bg-emerald-900/20 rounded-2xl border border-emerald-800/50 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-emerald-500/40 w-16 h-16 absolute -bottom-2 -right-2 rotate-12" icon="lucide:bar-chart-2"></iconify-icon>
<div className="text-center relative z-10">
<div className="text-3xl font-playfair font-semibold text-emerald-100">A+</div>
<div className="text-[10px] uppercase tracking-wider text-emerald-400">Target</div>
</div>
</div>
</div>
</article>

<article className="bg-[#2f3b30] rounded-3xl px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8 text-emerald-50 flex flex-col sm:flex-row gap-6 items-stretch overflow-hidden border border-emerald-900/70 flex-1">
<div className="flex-1">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-200 mb-2">
                  THE ENVIRONMENT
                </p>
<h3 className="font-playfair text-2xl sm:text-[1.6rem] font-semibold tracking-tight text-emerald-50">
                  Focus &amp; Clarity
                </h3>
<p className="mt-1 font-playfair text-lg font-medium tracking-tight text-emerald-100/90 italic">
                  Small groups, big results
                </p>
<ul className="mt-4 space-y-2.5 text-sm">
<li className="flex items-center gap-2.5">
<iconify-icon className="w-4 h-4 text-emerald-300" icon="lucide:users"></iconify-icon>
<span>Max 4 students per cohort</span>
</li>
<li className="flex items-center gap-2.5">
<iconify-icon className="w-4 h-4 text-emerald-300" icon="lucide:message-circle"></iconify-icon>
<span>24/7 Question Support via Chat</span>
</li>
<li className="flex items-center gap-2.5">
<iconify-icon className="w-4 h-4 text-emerald-300" icon="lucide:video"></iconify-icon>
<span>Recorded sessions for review</span>
</li>
</ul>
</div>
</article>
</div>
</section>
</div>

<section className="text-stone-900 bg-[#f4eadf] w-full border-stone-200/80 border-t">
<div className="sm:px-6 lg:px-8 lg:py-20 max-w-6xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
<div className="max-w-xl">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-stone-500 mb-3">
                THE LEARNING ARC
              </p>
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight text-stone-900">
                A structured path to
                <span className="italic text-stone-700">exam mastery</span>
</h2>
<p className="mt-4 text-sm sm:text-base text-stone-700">
                Success isn't accidental. My three-stage framework ensures foundational understanding before moving to complex application and exam technique.
              </p>
</div>
<div className="flex flex-wrap gap-4 text-xs sm:text-sm text-stone-700">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.7rem] font-semibold text-[#f4eadf]">1</span>
<span>Foundation</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.7rem] font-semibold text-[#f4eadf]">2</span>
<span>Application</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.7rem] font-semibold text-[#f4eadf]">3</span>
<span>Optimization</span>
</div>
</div>
</div>

<div className="grid gap-6 lg:grid-cols-3">

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] px-5 py-6 sm:px-6 sm:py-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="">
<div className="flex items-center justify-between mb-4">
<div className="inline-flex items-center gap-2 text-xs font-medium text-stone-600">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.75rem] font-semibold text-[#f4eadf]">
                      01
                    </span>
<span className="tracking-[0.18em] uppercase">Assess</span>
</div>
</div>
<h3 className="font-playfair text-xl font-semibold tracking-tight text-stone-900">
                  Concept Mapping
                </h3>
<p className="mt-3 text-sm text-stone-700">
                  We identify gaps in previous years' knowledge. Before building up, we ensure the mathematical foundation is solid as rock.
                </p>
<ul className="mt-4 space-y-2 text-xs sm:text-sm text-stone-700">
<li className="flex items-center gap-2">
<iconify-icon className="text-stone-800 w-3 h-3" icon="lucide:check"></iconify-icon>
                    Diagnostic Testing
                  </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-stone-800 w-3 h-3" icon="lucide:check"></iconify-icon>
                    Personalized Topic Plan
                  </li>
</ul>
</div>
</article>

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] px-5 py-6 sm:px-6 sm:py-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="">
<div className="flex items-center justify-between mb-4">
<div className="inline-flex items-center gap-2 text-xs font-medium text-stone-600">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.75rem] font-semibold text-[#f4eadf]">
                      02
                    </span>
<span className="tracking-[0.18em] uppercase">Deepen</span>
</div>
<span className="text-[0.7rem] font-medium px-2 py-1 rounded-full border border-amber-300 text-amber-800 bg-amber-100/70">
                    Core Work
                  </span>
</div>
<h3 className="font-playfair text-xl font-semibold tracking-tight text-stone-900">
                  Rigorous Application
                </h3>
<p className="mt-3 text-sm text-stone-700">
                  Moving beyond rote memorization. Students learn to derive formulas and apply principles to novel, unseen problems.
                </p>
<ul className="mt-4 space-y-2 text-xs sm:text-sm text-stone-700">
<li className="flex items-center gap-2">
<iconify-icon className="text-stone-800 w-3 h-3" icon="lucide:check"></iconify-icon>
                    First Principles Thinking
                  </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-stone-800 w-3 h-3" icon="lucide:check"></iconify-icon>
                    Advanced Problem Sets
                  </li>
</ul>
</div>
</article>

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] px-5 py-6 sm:px-6 sm:py-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="">
<div className="flex items-center justify-between mb-4">
<div className="inline-flex items-center gap-2 text-xs font-medium text-stone-600">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.75rem] font-semibold text-[#f4eadf]">
                      03
                    </span>
<span className="tracking-[0.18em] uppercase">Excel</span>
</div>
</div>
<h3 className="font-playfair text-xl font-semibold tracking-tight text-stone-900">
                  Exam Simulation
                </h3>
<p className="mt-3 text-sm text-stone-700">
                  The final mile. We focus on time management, marking schemes, and psychological preparation for the exam hall.
                </p>
<ul className="sm:text-sm text-xs text-stone-700 mt-4 space-y-2">
<li className="flex items-center gap-2">
<iconify-icon className="text-stone-800 w-3 h-3" icon="lucide:check"></iconify-icon>
                    Timed Past Papers
                  </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-stone-800 w-3 h-3" icon="lucide:check"></iconify-icon>
                    Examiner Report Analysis
                  </li>
</ul>
</div>
</article>
</div>
</div>
</section>

<section className="text-emerald-50 bg-[#0b0f0e] w-full border-emerald-900/60 border-t">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-10">
<div className="max-w-xl">
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.7rem] leading-tight tracking-tight">
                Results that
                <span className="italic text-emerald-300">speak volumes</span>
</h2>
<p className="mt-4 text-sm sm:text-base text-emerald-100/80">
                Coaching is an investment in your future. Here is the impact we've made on student outcomes over the last 5 years.
              </p>
</div>
<div className="flex flex-col items-start gap-4 max-w-sm">
<button className="inline-flex items-center gap-2 rounded-full border border-emerald-700/80 bg-[#111715] px-4 py-2 text-xs sm:text-sm font-medium text-emerald-100 hover:border-emerald-400 hover:bg-[#151d19] transition-colors">
                    Read Success Stories
                    <iconify-icon className="text-emerald-300" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
<div className="grid gap-5 lg:gap-6 lg:grid-cols-3">

<article className="rounded-3xl bg-emerald-300 text-emerald-950 px-6 py-7 sm:px-8 sm:py-9 shadow-sm border border-emerald-500/60 flex flex-col justify-between">
<div className="">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-900/70 mb-3">
                  IMPACT
                </p>
<p className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                  300+
                </p>
<p className="mt-1 text-sm sm:text-base text-emerald-950/80">
                  Students Mentored
                </p>
</div>
<p className="mt-5 text-xs sm:text-sm text-emerald-950/80 max-w-md">
                From struggling with basics to acing finals. Over three hundred individual journeys to academic confidence.
              </p>
</article>

<article className="rounded-3xl bg-[#0e1513] px-6 py-7 sm:px-7 sm:py-8 border border-emerald-900/70 flex flex-col justify-between">
<div>
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-400 mb-3">
                  EXCELLENCE
                </p>
<div className="flex items-baseline gap-1">
<p className="text-4xl sm:text-5xl font-semibold tracking-tight">
                    92
                  </p>
<span className="text-lg sm:text-xl font-medium tracking-tight">%</span>
</div>
<p className="mt-1 text-sm sm:text-base text-emerald-100/85">
                  Achieved Grade A/A*
                </p>
</div>
<p className="mt-5 text-xs sm:text-sm text-emerald-200/80 max-w-xs">
                In their final year examinations, the vast majority of our long-term students achieved the top two grade bands.
              </p>
</article>

<article className="rounded-3xl bg-[#111715] px-6 py-7 sm:px-7 sm:py-8 border border-emerald-900/70 flex flex-col justify-between">
<div className="">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-300 mb-3">
                  DEDICATION
                </p>
<div className="flex items-baseline gap-1">
<p className="text-4xl sm:text-5xl font-semibold tracking-tight">
                    2.5
                  </p>
<span className="text-lg sm:text-xl font-medium tracking-tight">years</span>
</div>
<p className="mt-1 text-sm sm:text-base text-emerald-100/85">
                  Avg. Coaching Duration
                </p>
</div>
<p className="mt-5 text-xs sm:text-sm text-emerald-200/80 max-w-xs">
                Students rarely leave. We typically support students from Grade 10 through to University applications.
              </p>
</article>
</div>
</div>
</section>

<section className="text-stone-900 bg-[#f4eadf] w-full border-stone-200/80 border-t" id="schedule">
<div className="sm:px-6 lg:px-8 lg:py-20 max-w-6xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div className="">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-stone-500 mb-3">
                CLASS SCHEDULE
              </p>
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight text-stone-900">
                Reserve your
                <span className="italic text-stone-700">learning slot</span>
</h2>
<p className="mt-4 text-sm sm:text-base text-stone-700 max-w-xl">
                Current availability for the Fall 2025 Semester. All classes are conducted live via Zoom with interactive whiteboard access.
              </p>
</div>
<div className="flex flex-wrap gap-3 text-xs sm:text-sm">
<button className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-[#f4eadf] px-4 py-2 font-medium hover:bg-stone-800 transition-colors">
                All Subjects
              </button>
<button className="inline-flex gap-2 hover:border-stone-500 hover:bg-stone-900/5 transition-colors font-medium text-stone-900 bg-[#f7efe4] border-stone-200 border rounded-full pt-2 pr-4 pb-2 pl-4 items-center">
                Waitlist Info
              </button>
</div>
</div>
<div className="space-y-10 lg:space-y-14">

<section className="space-y-5">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center text-[0.7rem] font-medium text-stone-700 bg-white/70 w-6 h-6 border-stone-300 border rounded-full">
<iconify-icon height="12" icon="lucide:users" width="12"></iconify-icon>
</span>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-stone-900">
                    Small Group Cohorts
                  </h3>
</div>
</div>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="relative h-40 bg-stone-200 overflow-hidden">
<img alt="Calculus" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.68rem] font-medium bg-stone-900 text-[#f4eadf] shadow-sm">
                        2 Spots Left
                      </span>
</div>
</div>
<div className="flex-1 flex flex-col px-5 py-5 sm:px-6 sm:py-6">
<div className="flex items-start justify-between gap-3">
<div>
<h4 className="font-playfair text-lg font-semibold tracking-tight text-stone-900">
                          Advanced Calculus (AP)
                        </h4>
<p className="mt-1 text-xs sm:text-sm text-stone-700">
                          Mon &amp; Wed • 4:30 PM - 6:00 PM
                        </p>
</div>
<div className="flex flex-col items-end text-xs text-stone-700">
<span className="font-semibold">$250</span>
<span className="text-stone-500 mt-0.5">/month</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3 text-[0.72rem] sm:text-xs">
<div className="flex items-center gap-1.5 text-stone-700">
<span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
<span>Grades 11-12</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 text-[#f4eadf] px-3 py-1.5 font-medium hover:bg-stone-800 transition-colors">
                        Book
                        <iconify-icon height="14" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="relative h-40 bg-stone-200 overflow-hidden">
<img alt="Physics" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col px-5 py-5 sm:px-6 sm:py-6">
<div className="flex items-start justify-between gap-3">
<div>
<h4 className="font-playfair text-lg font-semibold tracking-tight text-stone-900">
                          Physics: Mechanics
                        </h4>
<p className="mt-1 text-xs sm:text-sm text-stone-700">
                          Tue &amp; Thu • 5:00 PM - 6:30 PM
                        </p>
</div>
<div className="flex flex-col items-end text-xs text-stone-700">
<span className="font-semibold">$250</span>
<span className="text-stone-500 mt-0.5">/month</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3 text-[0.72rem] sm:text-xs">
<div className="flex items-center gap-1.5 text-stone-700">
<span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
<span>Grades 10-12</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 text-[#f4eadf] px-3 py-1.5 font-medium hover:bg-stone-800 transition-colors">
                        Book
                        <iconify-icon height="14" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="relative h-40 bg-stone-200 overflow-hidden">
<img alt="Exam Prep" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.68rem] font-medium bg-amber-100 text-amber-800 border border-amber-200">
                        Intensive
                      </span>
</div>
</div>
<div className="flex-1 flex flex-col px-5 py-5 sm:px-6 sm:py-6">
<div className="flex items-start justify-between gap-3">
<div>
<h4 className="font-playfair text-lg font-semibold tracking-tight text-stone-900">
                          SAT Math Prep
                        </h4>
<p className="mt-1 text-xs sm:text-sm text-stone-700">
                          Saturdays • 10:00 AM - 1:00 PM
                        </p>
</div>
<div className="flex flex-col items-end text-xs text-stone-700">
<span className="font-semibold">$400</span>
<span className="text-stone-500 mt-0.5">/course</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3 text-[0.72rem] sm:text-xs">
<div className="flex items-center gap-1.5 text-stone-700">
<span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
<span>8-week program</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 text-[#f4eadf] px-3 py-1.5 font-medium hover:bg-stone-800 transition-colors">
                        Book
                        <iconify-icon height="14" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</button>
</div>
</div>
</article>
</div>
</section>

<section className="space-y-5">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/70 border border-stone-300 text-[0.7rem] font-medium text-stone-800">
<iconify-icon height="12" icon="lucide:crown" width="12"></iconify-icon>
</span>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-stone-900">
                    Private Coaching
                  </h3>
</div>
</div>
<div className="grid gap-5 lg:grid-cols-[2fr_1fr] gap-x-5 gap-y-5">

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] px-6 py-6 sm:px-8 sm:py-8 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-all duration-200">
<div className="flex-1">
<p className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-stone-600 mb-1.5">
                      PREMIUM
                    </p>
<h4 className="font-playfair text-2xl font-semibold tracking-tight text-stone-900">
                      1:1 Dedicated Mentorship
                    </h4>
<p className="mt-2 text-sm text-stone-700 leading-relaxed">
                      Complete personalized attention. We design the entire semester around your goals, school syllabus, and university entrance requirements. Includes 24/7 WhatsApp support for homework questions.
                    </p>
<div className="mt-6 flex flex-wrap gap-4 text-xs text-stone-600">
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:clock"></iconify-icon> Flexible Timing</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:monitor"></iconify-icon> Recorded Sessions</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:book-open"></iconify-icon> Custom Materials</span>
</div>
</div>
<div className="flex-none flex flex-col items-center gap-3 w-full md:w-auto border-t md:border-t-0 md:border-l border-stone-200 pt-4 md:pt-0 md:pl-6">
<div className="text-center">
<span className="block text-2xl font-playfair font-semibold text-stone-900">$80</span>
<span className="text-xs text-stone-500">per hour</span>
</div>
<button className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-stone-900 text-[#f4eadf] px-5 py-2.5 font-medium hover:bg-stone-800 transition-colors whitespace-nowrap">
                        Inquire Availability
                    </button>
</div>
</article>

<article className="rounded-3xl border border-stone-200 bg-white/50 px-5 py-5 flex flex-col justify-center text-center">
<iconify-icon className="text-stone-300 w-8 h-8 mx-auto mb-2" icon="lucide:quote"></iconify-icon>
<p className="text-sm font-playfair italic text-stone-800 leading-relaxed">
                        "Julian didn't just teach me physics; he taught me how to think like a physicist. I'm now entering my first choice engineering program."
                    </p>
<div className="mt-4 text-xs font-semibold text-stone-600 uppercase tracking-widest">
                        — Sarah J., MIT '28
                    </div>
</article>
</div>
</section>
</div>
</div>
</section>

<section className="text-emerald-50 bg-[#0b0f0e] w-full border-t border-emerald-900/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
<div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10">

<div className="w-full lg:w-1/2 flex flex-col justify-center">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-300 mb-3">
                START TODAY
              </p>
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
                Ready to transform your
                <span className="italic text-emerald-300">academic trajectory?</span>
</h2>
<p className="mt-4 text-sm sm:text-base text-emerald-100/85 max-w-lg">
                Spots are limited for the upcoming term. Book a free 15-minute discovery call to discuss your goals and see if we are a good fit.
              </p>

<div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-5 py-2.5 text-xs sm:text-sm font-semibold hover:bg-emerald-300 hover:shadow-sm transition-colors">
                  Schedule Discovery Call
                  <iconify-icon height="16" icon="lucide:phone" width="16"></iconify-icon>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-emerald-700/80 bg-[#111715] px-4 py-2 text-xs sm:text-sm font-medium text-emerald-100 hover:border-emerald-400 hover:bg-[#151d19] transition-colors">
                  Download Brochure
                  <iconify-icon className="text-emerald-300" height="16" icon="lucide:download" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="w-full lg:w-1/2">
<div className="relative rounded-3xl border border-emerald-900/70 bg-gradient-to-br from-[#111715] via-[#0c1411] to-[#102019] overflow-hidden shadow-sm">
<div className="absolute -top-20 right-[-40px] w-56 h-56 bg-emerald-500/20 blur-3xl"></div>
<div className="relative px-6 py-7 sm:px-8 sm:py-9 flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-200">
<iconify-icon height="20" icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-emerald-50 font-playfair text-lg font-medium">Get in touch</h3>
<p className="text-sm text-emerald-200/70 mt-1">Direct email support for parents and students.</p>
<a className="block mt-2 text-emerald-300 hover:text-emerald-100 transition-colors text-sm font-medium" href="mailto:hello@julianwest.edu">hello@julianwest.edu</a>
</div>
</div>
<hr className="border-emerald-900/50"/>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-emerald-100/80">
<iconify-icon className="text-emerald-400" icon="lucide:map-pin"></iconify-icon>
<span>Based in London (Available Worldwide via Zoom)</span>
</div>
<div className="flex items-center gap-3 text-sm text-emerald-100/80">
<iconify-icon className="text-emerald-400" icon="lucide:calendar-check"></iconify-icon>
<span>Next available slot: Monday, 4th Oct</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-emerald-900/60 bg-[#141a17]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8 md:gap-6 items-start md:items-center justify-between">
<div className="">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-900 flex items-center justify-center text-emerald-50 font-playfair font-bold text-[10px]">
                    JW
                </div>
<span className="font-playfair font-medium text-sm text-emerald-50">Julian West Coaching</span>
</div>
<p className="text-xs sm:text-sm text-emerald-200/70 max-w-sm">
            Empowering the next generation of scientists and mathematicians.
          </p>
</div>
<div className="flex flex-wrap gap-6 text-xs sm:text-sm text-emerald-200/80">
<a className="hover:text-emerald-50 transition-colors" href="#">Resources</a>
<a className="hover:text-emerald-50 transition-colors" href="#">Student Login</a>
<a className="hover:text-emerald-50 transition-colors" href="#">Terms</a>
</div>
<p className="text-[0.7rem] text-emerald-500/70">
          © <span id="year-span">2025</span> Julian West. All rights reserved.
        </p>
</div>
</footer>
</div>


    </>
  );
}
