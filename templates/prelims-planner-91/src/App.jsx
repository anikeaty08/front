import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 flex flex-col" id="app-root">

<header className="w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sticky top-0 z-40">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center tracking-tight text-xs font-semibold">
<span>PP</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight">Prelims Planner</span>
<span className="text-xs text-slate-400">Class 10 Focus Mode</span>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">

<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/70 hover:bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors" id="reminderToggle">
<span className="iconify" data-height="16" data-icon="lucide:bell" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Reminders</span>
</button>

<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/70 hover:bg-slate-800/80 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors" id="modeToggle">
<span className="iconify" data-height="16" data-icon="lucide:moon" data-width="16" id="modeIcon" style={{strokeWidth: '1.5'}}></span>
<span className="hidden sm:inline" id="modeLabel">Dark</span>
</button>

<button className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 hover:bg-slate-800/80 px-2.5 sm:px-3 py-1.5 text-xs font-medium transition-colors">
<div className="h-6 w-6 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-400 flex items-center justify-center text-[0.65rem] tracking-tight font-semibold">
<span>ST</span>
</div>
<div className="hidden sm:flex flex-col text-left leading-tight">
<span className="text-xs font-medium">Student • X</span>
<span className="text-[0.65rem] text-slate-400">Prelims prep</span>
</div>
</button>
</div>
</header>

<main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-5 sm:py-7 lg:py-8">

<section className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">

<div className="space-y-4 sm:space-y-5">
<div className="flex items-center justify-between gap-3">
<div>
<h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
                Prelims Day Planner
              </h1>
<p className="mt-1 text-sm sm:text-base text-slate-300">
                Stay on track with your timetable, diet, and 6‑day study rotation in one focused dashboard.
              </p>
</div>
<div className="hidden md:flex flex-col items-end gap-1">
<span className="text-[0.75rem] text-slate-400">Today</span>
<span className="text-sm font-medium text-slate-100" id="todayLabel"></span>
<span className="text-xs text-slate-400" id="timeLabel"></span>
</div>
</div>

<div className="rounded-2xl border border-slate-800/80 bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-950 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between">
<div className="flex gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-900/90 flex items-center justify-center shrink-0">
<span className="iconify text-indigo-400" data-height="20" data-icon="lucide:target" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                  Today’s Goal
                </h2>
<p className="mt-0.5 text-sm sm:text-base text-slate-300">
                  Complete all study sessions and revision. Mark tasks done as you go.
                </p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="rounded-full bg-slate-900/80 border border-slate-700/60 px-2.5 py-1 text-[0.7rem] font-medium text-slate-200">
                    Maths focus
                  </span>
<span className="rounded-full bg-slate-900/80 border border-slate-700/60 px-2.5 py-1 text-[0.7rem] font-medium text-slate-200">
                    Science practice
                  </span>
<span className="rounded-full bg-slate-900/80 border border-slate-700/60 px-2.5 py-1 text-[0.7rem] font-medium text-slate-200">
                    Healthy routine
                  </span>
</div>
</div>
</div>
<div className="flex flex-col justify-between gap-3 sm:w-52">

<div className="flex items-center justify-between gap-4">
<div className="flex flex-col">
<span className="text-[0.75rem] text-slate-400">Study Progress</span>
<span className="text-xl font-semibold tracking-tight text-slate-50" id="progressPercent">
                    0%
                  </span>
<span className="text-[0.7rem] text-slate-400" id="progressDetail">0 / 6 tasks done</span>
</div>
<div className="relative h-14 w-14">
<svg className="transform -rotate-90" viewbox="0 0 36 36">
<path d="M18 2.5a15.5 15.5 0 1 1 0 31 15.5 15.5 0 0 1 0-31" fill="none" stroke="rgba(30,64,175,0.4)" strokeLinecap="round" strokeWidth="3"></path>
<path d="M18 2.5a15.5 15.5 0 1 1 0 31 15.5 15.5 0 0 1 0-31" fill="none" id="progressCircle" stroke="url(#grad)" stroke-dasharray="97.2" stroke-dashoffset="97.2" strokeLinecap="round" strokeWidth="3"></path>
<defs>
<lineargradient id="grad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#6366f1"></stop>
<stop offset="100%" stop-color="#22d3ee"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-[0.65rem] text-slate-300 text-center leading-tight">
                      Focus<br/>meter
                    </span>
</div>
</div>
</div>

<div className="flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-500/90 hover:bg-indigo-400 text-xs sm:text-sm font-medium text-slate-50 py-2.5 transition-colors" id="startFocus">
<span className="iconify" data-height="16" data-icon="lucide:play" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Start Focus</span>
</button>
<button className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 text-xs sm:text-sm font-medium text-slate-100 px-2.5 py-2.5 transition-colors" id="breakAlert">
<span className="iconify" data-height="16" data-icon="lucide:alarm-clock" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="hidden sm:inline">Next Break</span>
</button>
</div>
</div>
</div>
</div>

<aside className="space-y-4 sm:space-y-5">

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-3.5 sm:p-4">
<div className="flex items-center justify-between mb-2.5">
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Study Day Rotation
                </h3>
<p className="text-xs sm:text-sm text-slate-400">
                  Pick the day you’re following today.
                </p>
</div>
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:calendar-days" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="day-pill inline-flex flex-col items-center justify-center gap-0.5 rounded-xl border border-indigo-500/50 bg-indigo-500/10 text-indigo-200 text-xs font-medium py-1.5" data-day="1">
<span>Day 1</span>
<span className="text-[0.65rem] text-indigo-200/80">Maths</span>
</button>
<button className="day-pill inline-flex flex-col items-center justify-center gap-0.5 rounded-xl border border-slate-700/80 bg-slate-900/80 text-slate-200 text-xs font-medium py-1.5" data-day="2">
<span>Day 2</span>
<span className="text-[0.65rem] text-slate-400">SST</span>
</button>
<button className="day-pill inline-flex flex-col items-center justify-center gap-0.5 rounded-xl border border-slate-700/80 bg-slate-900/80 text-slate-200 text-xs font-medium py-1.5" data-day="3">
<span>Day 3</span>
<span className="text-[0.65rem] text-slate-400">Maths</span>
</button>
<button className="day-pill inline-flex flex-col items-center justify-center gap-0.5 rounded-xl border border-slate-700/80 bg-slate-900/80 text-slate-200 text-xs font-medium py-1.5" data-day="4">
<span>Day 4</span>
<span className="text-[0.65rem] text-slate-400">Science</span>
</button>
<button className="day-pill inline-flex flex-col items-center justify-center gap-0.5 rounded-xl border border-slate-700/80 bg-slate-900/80 text-slate-200 text-xs font-medium py-1.5" data-day="5">
<span>Day 5</span>
<span className="text-[0.65rem] text-slate-400">Maths Rev</span>
</button>
<button className="day-pill inline-flex flex-col items-center justify-center gap-0.5 rounded-xl border border-slate-700/80 bg-slate-900/80 text-slate-200 text-xs font-medium py-1.5" data-day="6">
<span>Day 6</span>
<span className="text-[0.65rem] text-slate-400">Science</span>
</button>
</div>
</div>

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-3.5 sm:p-4 space-y-3">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Daily Essentials
                </h3>
<p className="text-xs sm:text-sm text-slate-400">
                  Tap to mark finished.
                </p>
</div>
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:check-circle-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="space-y-1.5">
<button className="task-pill w-full flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800/80 px-3 py-1.5 text-xs sm:text-sm text-slate-200 transition-colors" data-task="water">
<span>Water: 6–8 glasses</span>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="task-pill w-full flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800/80 px-3 py-1.5 text-xs sm:text-sm text-slate-200 transition-colors" data-task="sleep">
<span>Sleep by 10:30 PM 😴</span>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="task-pill w-full flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800/80 px-3 py-1.5 text-xs sm:text-sm text-slate-200 transition-colors" data-task="rev">
<span>Light revision before bed</span>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</aside>
</section>

<section className="mb-5 sm:mb-7">
<div className="inline-flex rounded-full border border-slate-800/80 bg-slate-950/90 p-0.5 text-xs sm:text-sm">
<button className="tab-btn inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 text-slate-50 font-medium px-3 sm:px-4 py-1.5" data-tab="timetable">
<span className="iconify" data-height="16" data-icon="lucide:clock-8" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Daily Timetable</span>
</button>
<button className="tab-btn inline-flex items-center gap-1.5 rounded-full text-slate-300 font-medium px-3 sm:px-4 py-1.5" data-tab="diet">
<span className="iconify" data-height="16" data-icon="lucide:utensils" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Daily Diet Plan</span>
</button>
<button className="tab-btn inline-flex items-center gap-1.5 rounded-full text-slate-300 font-medium px-3 sm:px-4 py-1.5" data-tab="rotation">
<span className="iconify" data-height="16" data-icon="lucide:repeat" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>6‑Day Rotation</span>
</button>
</div>
</section>

<section className="space-y-4 sm:space-y-5" id="timetableSection">
<div className="flex items-center justify-between gap-3">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              Daily Timetable
            </h2>
<p className="text-sm sm:text-base text-slate-300">
              Tap a block to see details, set a quick reminder, or mark it as done.
            </p>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 text-xs font-medium text-slate-200 px-3 py-1.5 transition-colors" id="collapseAll">
<span className="iconify" data-height="16" data-icon="lucide:chevron-up" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Collapse all</span>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4">



<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/40 flex items-center justify-center text-[0.7rem] font-medium text-indigo-200">
                  5:45
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Wake up + Freshen up
                  </p>
<p className="text-xs text-slate-400">
                    Start the day calm and on time.
                  </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-full bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 text-[0.65rem] text-slate-200 px-2 py-1 reminder-btn" data-label="Wake up">
<span className="iconify mr-1" data-height="14" data-icon="lucide:bell-ring" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Remind
                </button>
<span className="iconify text-slate-400 group-[.done]:text-emerald-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Keep your phone away from bed, wash your face, drink warm water, and mentally plan the day.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-16 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-[0.7rem] font-medium text-emerald-200">
                  6:00–6:20
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Exercise 🏃
                  </p>
<p className="text-xs text-slate-400">
                    Light stretching + jogging for energy.
                  </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-full bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 text-[0.65rem] text-slate-200 px-2 py-1 reminder-btn" data-label="Exercise">
<span className="iconify mr-1" data-height="14" data-icon="lucide:bell-ring" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Remind
                </button>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Do 5–10 minutes of stretching, 5 minutes of brisk walk or spot jogging, and deep breathing.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-16 rounded-xl bg-sky-500/10 border border-sky-500/40 flex items-center justify-center text-[0.7rem] font-medium text-sky-200">
                  6:20–6:50
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Self-study (Revision)
                  </p>
<p className="text-xs text-slate-400">
                    Quick revision of previous day concepts.
                  </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-full bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 text-[0.65rem] text-slate-200 px-2 py-1 reminder-btn" data-label="Morning revision">
<span className="iconify mr-1" data-height="14" data-icon="lucide:bell-ring" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Remind
                </button>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Revise formulas, key dates, or definitions using flashcards or short notes.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-20 rounded-xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center text-[0.7rem] font-medium text-purple-200">
                  7:00–8:00
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Offline Tuition
                  </p>
<p className="text-xs text-slate-400">
                    Focus on doubts and concepts.
                  </p>
</div>
</div>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Keep a small notebook to list doubts immediately. Review them after class.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-24 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-[0.7rem] font-medium text-amber-200">
                  8:00–8:30
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Breakfast + Travel 🍽
                  </p>
<p className="text-xs text-slate-400">
                    Eat light, balanced breakfast.
                  </p>
</div>
</div>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Avoid heavy or oily food. Use travel time to mentally recall formulas or key points.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-32 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-[0.7rem] font-medium text-cyan-200">
                  8:30–14:00
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    School (Prelims)
                  </p>
<p className="text-xs text-slate-400">
                    Stay attentive, note doubts.
                  </p>
</div>
</div>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              During breaks, quickly note tricky questions or chapters you need to revisit later.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-24 rounded-xl bg-slate-500/10 border border-slate-500/40 flex items-center justify-center text-[0.7rem] font-medium text-slate-200">
                  14:00–14:30
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Travel Home
                  </p>
<p className="text-xs text-slate-400">
                    Relax and reset your mind.
                  </p>
</div>
</div>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Avoid phone scrolling. Just breathe, hydrate, and mentally detach for a bit.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-28 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-[0.7rem] font-medium text-emerald-200">
                  14:30–15:15
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Lunch + Rest 🍽
                  </p>
<p className="text-xs text-slate-400">
                    Light lunch, short power rest.
                  </p>
</div>
</div>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Avoid long naps; 15–20 minutes of lying down is enough to recharge.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden" data-progress-task="1">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-32 rounded-xl bg-indigo-500/10 border border-indigo-500/40 flex items-center justify-center text-[0.7rem] font-medium text-indigo-200">
                  15:15–16:45
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Study Session 1
                  </p>
<p className="text-xs text-slate-400">
                    Main subject focus from rotation.
                  </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-full border border-emerald-500/60 bg-emerald-500/10 hover:bg-emerald-500/20 text-[0.65rem] text-emerald-200 px-2 py-1 done-btn">
<span className="iconify mr-1" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Done
                </button>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Use Pomodoro (25 mins study + 5 mins micro-break). Focus on the main subject from your 6‑day rotation plan.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-24 rounded-xl bg-rose-500/10 border border-rose-500/40 flex items-center justify-center text-[0.7rem] font-medium text-rose-200">
                  16:45–17:00
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Break
                  </p>
<p className="text-xs text-slate-400">
                    Move, hydrate, no screens.
                  </p>
</div>
</div>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Walk around, stretch, drink water. Avoid opening social apps.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden" data-progress-task="2">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-32 rounded-xl bg-sky-500/10 border border-sky-500/40 flex items-center justify-center text-[0.7rem] font-medium text-sky-200">
                  17:00–18:30
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Online Class 1
                  </p>
<p className="text-xs text-slate-400">
                    Take short written notes.
                  </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-full border border-emerald-500/60 bg-emerald-500/10 hover:bg-emerald-500/20 text-[0.65rem] text-emerald-200 px-2 py-1 done-btn">
<span className="iconify mr-1" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Done
                </button>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Keep camera-ready posture, note doubts, and mark topics to re‑revise later in the day.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-28 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-[0.7rem] font-medium text-amber-200">
                  18:30–19:00
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Snack + Relax 🍽
                  </p>
<p className="text-xs text-slate-400">
                    Light snack, short relaxation.
                  </p>
</div>
</div>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Avoid heavy junk. Use this time to listen to soft music or just sit quietly.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden" data-progress-task="3">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-32 rounded-xl bg-indigo-500/10 border border-indigo-500/40 flex items-center justify-center text-[0.7rem] font-medium text-indigo-200">
                  19:00–20:15
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Study Session 2
                  </p>
<p className="text-xs text-slate-400">
                    Secondary subject from rotation.
                  </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-full border border-emerald-500/60 bg-emerald-500/10 hover:bg-emerald-500/20 text-[0.65rem] text-emerald-200 px-2 py-1 done-btn">
<span className="iconify mr-1" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Done
                </button>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Focus on writing practice, numericals, or diagrams depending on the day’s secondary subject.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-24 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-[0.7rem] font-medium text-amber-200">
                  20:15–20:30
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Dinner 🍽
                  </p>
<p className="text-xs text-slate-400">
                    Light, early dinner.
                  </p>
</div>
</div>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Avoid overeating; keep dinner simple and easy to digest.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden" data-progress-task="4">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-32 rounded-xl bg-sky-500/10 border border-sky-500/40 flex items-center justify-center text-[0.7rem] font-medium text-sky-200">
                  20:30–22:00
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Online Class 2
                  </p>
<p className="text-xs text-slate-400">
                    End-of-day concept building.
                  </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-full border border-emerald-500/60 bg-emerald-500/10 hover:bg-emerald-500/20 text-[0.65rem] text-emerald-200 px-2 py-1 done-btn">
<span className="iconify mr-1" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Done
                </button>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Revisit the most confusing topics of the day. Reduce blue light with screen settings.
            </div>
</div>

<div className="time-card group rounded-2xl border border-slate-800/80 bg-slate-950/90 hover:bg-slate-900/90 transition-colors overflow-hidden" data-progress-task="5">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-28 rounded-xl bg-violet-500/10 border border-violet-500/40 flex items-center justify-center text-[0.7rem] font-medium text-violet-200">
                  22:00–22:30
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-slate-50">
                    Light Revision
                  </p>
<p className="text-xs text-slate-400">
                    15–20 minute recap only.
                  </p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-full border border-emerald-500/60 bg-emerald-500/10 hover:bg-emerald-500/20 text-[0.65rem] text-emerald-200 px-2 py-1 done-btn">
<span className="iconify mr-1" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Done
                </button>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</button>
<div className="time-card-detail border-t border-slate-800/80 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-slate-300">
              Go through summary sheets or important formula lists. Avoid starting anything new.
            </div>
</div>

<div className="time-card group rounded-2xl border border-emerald-600/70 bg-emerald-950/90 hover:bg-emerald-900/80 transition-colors overflow-hidden" data-progress-task="6">
<button className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-20 rounded-xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-[0.7rem] font-medium text-emerald-100">
                  22:30
                </div>
<div className="text-left">
<p className="text-xs sm:text-sm font-medium text-emerald-50">
                    Sleep 😴
                  </p>
<p className="text-xs text-emerald-100/80">
                    7–8 hours of deep, calm sleep.
                  </p>
</div>
</div>
<button className="inline-flex items-center justify-center rounded-full border border-emerald-400 bg-emerald-500/20 hover:bg-emerald-400/30 text-[0.65rem] text-emerald-50 px-2 py-1 done-btn">
<span className="iconify mr-1" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                Done
              </button>
</button>
<div className="time-card-detail border-t border-emerald-700/60 px-3.5 sm:px-4 py-2.5 hidden text-xs sm:text-sm text-emerald-50/90">
              Keep devices away, dim the lights, and practice 2–3 minutes of slow deep breathing before sleep.
            </div>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="rounded-full border border-sky-500/60 bg-sky-900/90 text-xs sm:text-sm text-sky-50 px-4 py-2 shadow-lg flex items-center gap-2">
<span className="iconify" data-height="16" data-icon="lucide:info" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span id="toastMessage">Reminder set!</span>
</div>
</div>
</section>

<section className="hidden space-y-4 sm:space-y-5" id="dietSection">
<div className="flex items-center justify-between gap-3">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              Daily Diet Plan
            </h2>
<p className="text-sm sm:text-base text-slate-300">
              Simple, balanced meals to keep your energy stable during prelims.
            </p>
</div>
<span className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 text-xs font-medium text-slate-200 px-3 py-1.5">
<span className="iconify" data-height="16" data-icon="lucide:apple" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Brain Food</span>
</span>
</div>
<div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/90">
<div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2.2fr)] text-xs sm:text-sm border-b border-slate-800/80 bg-slate-900/90">
<div className="px-3.5 sm:px-4 py-2.5 font-semibold tracking-tight text-slate-200 border-r border-slate-800/80">
              Time
            </div>
<div className="px-3.5 sm:px-4 py-2.5 font-semibold tracking-tight text-slate-200">
              Diet 🍽
            </div>
</div>

<div className="divide-y divide-slate-800/80">
<div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2.2fr)] bg-slate-950/90">
<div className="px-3.5 sm:px-4 py-2.5 border-r border-slate-800/80 text-xs sm:text-sm text-slate-300">
                Early Morning
              </div>
<div className="px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-slate-100">
                Warm water + Banana or 4–5 almonds (soaked). Helps digestion and quick energy.
              </div>
</div>
<div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2.2fr)] bg-slate-950/80">
<div className="px-3.5 sm:px-4 py-2.5 border-r border-slate-800/80 text-xs sm:text-sm text-slate-300">
                After Exercise
              </div>
<div className="px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-slate-100">
                Milk / sprouts / chana for protein. Keeps muscles and brain active.
              </div>
</div>
<div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2.2fr)] bg-slate-950/90">
<div className="px-3.5 sm:px-4 py-2.5 border-r border-slate-800/80 text-xs sm:text-sm text-slate-300">
                Breakfast
              </div>
<div className="px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-slate-100">
                Poha / Upma / Roti‑sabzi / Dosa + one fruit. Balanced carbs + fibre for steady focus.
              </div>
</div>
<div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2.2fr)] bg-slate-950/80">
<div className="px-3.5 sm:px-4 py-2.5 border-r border-slate-800/80 text-xs sm:text-sm text-slate-300">
                School Snack
              </div>
<div className="px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-slate-100">
                Fruit / dry fruits / simple sandwich. Avoid chips and sugary drinks.
              </div>
</div>
<div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2.2fr)] bg-slate-950/90">
<div className="px-3.5 sm:px-4 py-2.5 border-r border-slate-800/80 text-xs sm:text-sm text-slate-300">
                Lunch
              </div>
<div className="px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-slate-100">
                Roti, sabzi, dal, rice, curd, salad. Classic balanced meal; eat slowly, avoid heavy oil.
              </div>
</div>
<div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2.2fr)] bg-slate-950/80">
<div className="px-3.5 sm:px-4 py-2.5 border-r border-slate-800/80 text-xs sm:text-sm text-slate-300">
                Evening Snack
              </div>
<div className="px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-slate-100">
                Sprouts / roasted chana / simple biscuits. Keep it light so you don’t feel sleepy.
              </div>
</div>
<div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2.2fr)] bg-slate-950/90">
<div className="px-3.5 sm:px-4 py-2.5 border-r border-slate-800/80 text-xs sm:text-sm text-slate-300">
                Dinner
              </div>
<div className="px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-slate-100">
                Roti‑sabzi / Khichdi / Daliya / Rice‑dal + curd. Light, easy to digest, not spicy.
              </div>
</div>
<div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2.2fr)] bg-slate-950/80">
<div className="px-3.5 sm:px-4 py-2.5 border-r border-slate-800/80 text-xs sm:text-sm text-slate-300">
                Night
              </div>
<div className="px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-slate-100">
                A glass of warm milk or one fruit. Helps calm the body for sleep.
              </div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-3.5 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-sky-500/15 border border-sky-500/50 flex items-center justify-center">
<span className="iconify text-sky-300" data-height="18" data-icon="lucide:cup-soda" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                Hydration Tracker
              </h3>
<p className="text-xs sm:text-sm text-slate-300">
                Tap cups as you drink water. Aim for 6–8 cups daily.
              </p>
</div>
</div>
<div className="flex items-center gap-1.5">
<button className="water-cup h-7 w-7 rounded-full border border-sky-500/50 bg-slate-950/90 flex items-center justify-center text-[0.65rem] text-sky-100">
              1
            </button>
<button className="water-cup h-7 w-7 rounded-full border border-sky-500/40 bg-slate-950/90 flex items-center justify-center text-[0.65rem] text-sky-100">
              2
            </button>
<button className="water-cup h-7 w-7 rounded-full border border-sky-500/40 bg-slate-950/90 flex items-center justify-center text-[0.65rem] text-sky-100">
              3
            </button>
<button className="water-cup h-7 w-7 rounded-full border border-sky-500/40 bg-slate-950/90 flex items-center justify-center text-[0.65rem] text-sky-100">
              4
            </button>
<button className="water-cup h-7 w-7 rounded-full border border-sky-500/40 bg-slate-950/90 flex items-center justify-center text-[0.65rem] text-sky-100">
              5
            </button>
<button className="water-cup h-7 w-7 rounded-full border border-sky-500/40 bg-slate-950/90 flex items-center justify-center text-[0.65rem] text-sky-100">
              6
            </button>
<button className="water-cup h-7 w-7 rounded-full border border-sky-500/40 bg-slate-950/90 flex items-center justify-center text-[0.65rem] text-sky-100">
              7
            </button>
<button className="water-cup h-7 w-7 rounded-full border border-sky-500/40 bg-slate-950/90 flex items-center justify-center text-[0.65rem] text-sky-100">
              8
            </button>
</div>
</div>
</section>

<section className="hidden space-y-4 sm:space-y-5" id="rotationSection">
<div className="flex items-center justify-between gap-3">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              6‑Day Study Rotation Plan
            </h2>
<p className="text-sm sm:text-base text-slate-300">
              Use this rotation with the 3:15–4:45 PM and 7:00–8:15 PM study sessions.
            </p>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 text-xs font-medium text-slate-200 px-3 py-1.5 transition-colors" id="showTodayRotation">
<span className="iconify" data-height="16" data-icon="lucide:sparkles" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Use selected day</span>
</button>
</div>

<div className="flex gap-3.5 sm:gap-4 overflow-x-auto pb-2 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10">

<article className="min-w-[16rem] sm:min-w-[17rem] md:min-w-[18rem] flex-1 max-w-xs rounded-2xl border border-indigo-500/60 bg-indigo-500/10 p-3.5 sm:p-4">
<div className="flex items-center justify-between mb-2.5">
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-indigo-50">
                  Day 1
                </h3>
<p className="text-xs sm:text-sm text-indigo-100/80">
                  Maths + Science (Physics)
                </p>
</div>
<span className="iconify text-indigo-200" data-height="18" data-icon="lucide:triangle" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="space-y-2.5 text-xs sm:text-sm">
<div className="rounded-xl bg-slate-950/70 border border-indigo-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">3:15–4:45 PM • Main</p>
<p className="font-medium text-slate-50">
                  Maths – Algebra + Geometry
                </p>
</div>
<div className="rounded-xl bg-slate-950/70 border border-indigo-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">7:00–8:15 PM • Secondary</p>
<p className="font-medium text-slate-50">
                  Science – Physics numericals
                </p>
</div>
</div>
</article>

<article className="min-w-[16rem] sm:min-w-[17rem] md:min-w-[18rem] flex-1 max-w-xs rounded-2xl border border-emerald-500/60 bg-emerald-500/10 p-3.5 sm:p-4">
<div className="flex items-center justify-between mb-2.5">
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-emerald-50">
                  Day 2
                </h3>
<p className="text-xs sm:text-sm text-emerald-100/80">
                  SST + English
                </p>
</div>
<span className="iconify text-emerald-200" data-height="18" data-icon="lucide:book-open" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="space-y-2.5 text-xs sm:text-sm">
<div className="rounded-xl bg-slate-950/70 border border-emerald-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">3:15–4:45 PM • Main</p>
<p className="font-medium text-slate-50">
                  SST – History/Geography
                </p>
</div>
<div className="rounded-xl bg-slate-950/70 border border-emerald-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">7:00–8:15 PM • Secondary</p>
<p className="font-medium text-slate-50">
                  English – Grammar + Writing
                </p>
</div>
</div>
</article>

<article className="min-w-[16rem] sm:min-w-[17rem] md:min-w-[18rem] flex-1 max-w-xs rounded-2xl border border-sky-500/60 bg-sky-500/10 p-3.5 sm:p-4">
<div className="flex items-center justify-between mb-2.5">
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-sky-50">
                  Day 3
                </h3>
<p className="text-xs sm:text-sm text-sky-100/80">
                  Maths + Hindi
                </p>
</div>
<span className="iconify text-sky-200" data-height="18" data-icon="lucide:pen-square" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="space-y-2.5 text-xs sm:text-sm">
<div className="rounded-xl bg-slate-950/70 border border-sky-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">3:15–4:45 PM • Main</p>
<p className="font-medium text-slate-50">
                  Maths – Trigonometry/Mensuration
                </p>
</div>
<div className="rounded-xl bg-slate-950/70 border border-sky-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">7:00–8:15 PM • Secondary</p>
<p className="font-medium text-slate-50">
                  Hindi – Writing + Literature
                </p>
</div>
</div>
</article>

<article className="min-w-[16rem] sm:min-w-[17rem] md:min-w-[18rem] flex-1 max-w-xs rounded-2xl border border-fuchsia-500/60 bg-fuchsia-500/10 p-3.5 sm:p-4">
<div className="flex items-center justify-between mb-2.5">
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-fuchsia-50">
                  Day 4
                </h3>
<p className="text-xs sm:text-sm text-fuchsia-100/80">
                  Science + SST
                </p>
</div>
<span className="iconify text-fuchsia-200" data-height="18" data-icon="lucide:flask-conical" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="space-y-2.5 text-xs sm:text-sm">
<div className="rounded-xl bg-slate-950/70 border border-fuchsia-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">3:15–4:45 PM • Main</p>
<p className="font-medium text-slate-50">
                  Science – Chemistry formulas
                </p>
</div>
<div className="rounded-xl bg-slate-950/70 border border-fuchsia-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">7:00–8:15 PM • Secondary</p>
<p className="font-medium text-slate-50">
                  SST – Civics + Eco
                </p>
</div>
</div>
</article>

<article className="min-w-[16rem] sm:min-w-[17rem] md:min-w-[18rem] flex-1 max-w-xs rounded-2xl border border-amber-500/60 bg-amber-500/10 p-3.5 sm:p-4">
<div className="flex items-center justify-between mb-2.5">
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-amber-50">
                  Day 5
                </h3>
<p className="text-xs sm:text-sm text-amber-100/80">
                  Maths Revision
                </p>
</div>
<span className="iconify text-amber-200" data-height="18" data-icon="lucide:files" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="space-y-2.5 text-xs sm:text-sm">
<div className="rounded-xl bg-slate-950/70 border border-amber-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">3:15–4:45 PM • Main</p>
<p className="font-medium text-slate-50">
                  Maths – Full Revision + Sample Paper
                </p>
</div>
<div className="rounded-xl bg-slate-950/70 border border-amber-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">7:00–8:15 PM • Secondary</p>
<p className="font-medium text-slate-50">
                  Maths – Weak Chapters
                </p>
</div>
</div>
</article>

<article className="min-w-[16rem] sm:min-w-[17rem] md:min-w-[18rem] flex-1 max-w-xs rounded-2xl border border-cyan-500/60 bg-cyan-500/10 p-3.5 sm:p-4">
<div className="flex items-center justify-between mb-2.5">
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-cyan-50">
                  Day 6
                </h3>
<p className="text-xs sm:text-sm text-cyan-100/80">
                  Science Diagrams + Mix
                </p>
</div>
<span className="iconify text-cyan-200" data-height="18" data-icon="lucide:brain" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="space-y-2.5 text-xs sm:text-sm">
<div className="rounded-xl bg-slate-950/70 border border-cyan-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">3:15–4:45 PM • Main</p>
<p className="font-medium text-slate-50">
                  Science – Biology diagrams
                </p>
</div>
<div className="rounded-xl bg-slate-950/70 border border-cyan-500/40 p-2.5">
<p className="text-[0.7rem] text-slate-300">7:00–8:15 PM • Secondary</p>
<p className="font-medium text-slate-50">
                  Science – Physics + Chemistry
                </p>
</div>
</div>
</article>
</div>

<div className="hidden md:block rounded-2xl border border-slate-800/80 bg-slate-950/90 overflow-hidden">
<div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)_minmax(0,1.6fr)] text-xs sm:text-sm border-b border-slate-800/80 bg-slate-900/90">
<div className="px-3.5 sm:px-4 py-2.5 font-semibold tracking-tight text-slate-200 border-r border-slate-800/80">
              Day
            </div>
<div className="px-3.5 sm:px-4 py-2.5 font-semibold tracking-tight text-slate-200 border-r border-slate-800/80">
              Main Subject (3:15–4:45 PM)
            </div>
<div className="px-3.5 sm:px-4 py-2.5 font-semibold tracking-tight text-slate-200">
              Secondary Subject (7:00–8:15 PM)
            </div>
</div>
<div className="divide-y divide-slate-800/80 text-xs sm:text-sm">
<div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)_minmax(0,1.6fr)] bg-slate-950/90">
<div className="px-3.5 sm:px-4 py-2.5 border-r border-slate-800/80 text-slate-300">
                Day 1
              </div>
</div></div></div></section></main></div>
    </>
  );
}
