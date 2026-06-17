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

        let isSelecting = false;
        let startSlot = null;
        let selectedSlots = [];

        document.querySelectorAll('.time-slot').forEach(slot => {
            slot.addEventListener('mousedown', function() {
                isSelecting = true;
                startSlot = this;
                selectedSlots = [this];
                this.classList.add('selecting');
            });

            slot.addEventListener('mouseenter', function() {
                if (isSelecting) {
                    if (!selectedSlots.includes(this)) {
                        selectedSlots.push(this);
                        this.classList.add('selecting');
                    }
                }
            });
        });

        document.addEventListener('mouseup', function() {
            if (isSelecting && selectedSlots.length > 0) {
                document.getElementById('event-modal').classList.remove('hidden');
                lucide.createIcons();
            }
            isSelecting = false;
            selectedSlots.forEach(slot => slot.classList.remove('selecting'));
            selectedSlots = [];
            startSlot = null;
        });

        function closeModal() {
            document.getElementById('event-modal').classList.add('hidden');
        }

        document.getElementById('event-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
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
      
<div className="flex flex-col min-h-screen">

<header className="px-6 md:px-10 lg:px-16 pt-5 pb-4 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/80 via-slate-950/60 to-transparent backdrop-blur">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center text-xs font-medium text-slate-950 shadow-lg shadow-emerald-500/40">
                        CL
                    </div>
<div>
<div className="flex items-center gap-2">
<span className="text-xs uppercase tracking-[0.18em] text-slate-400">Schedule overview</span>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                                Synced
                            </span>
</div>
<p className="mt-0.5 text-sm text-slate-400">Calendar on the left, tasks on the right</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.85)] transition">
<i className="w-4 h-4 text-emerald-300" data-lucide="plus"></i>
                        New task
                    </button>
<div className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-1.5 py-1 shadow-[0_14px_40px_rgba(15,23,42,0.95)]">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div className="hidden sm:block pr-2">
<div className="text-xs font-medium text-slate-100 tracking-tight">Alex</div>
<div className="text-[11px] text-slate-400">Product, Eng</div>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1 px-4 md:px-8 lg:px-16 py-4 md:py-6 flex flex-col">
<div className="flex-1 flex flex-col lg:flex-row gap-5 lg:gap-6 xl:gap-8">

<section className="flex-1 flex flex-col">

<div className="backdrop-card flex-1 flex flex-col p-4 md:p-6 lg:p-7">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
<div>
<div className="flex items-center gap-3">
<h1 className="text-[26px] md:text-[28px] font-semibold tracking-tight text-slate-50">
                                        October 2025
                                    </h1>
<span className="inline-flex items-center rounded-full border border-slate-600/60 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                                        Week 3 · 14 tasks scheduled
                                    </span>
</div>
<p className="mt-1 text-xs text-slate-400">
                                    Deep work from 9am to 1pm · Collaboration after lunch
                                </p>
</div>
<div className="flex items-center gap-3 self-start sm:self-auto">
<div className="pill-toggle flex items-center gap-1">
<button className="px-2.5 md:px-3 py-1.5 text-[11px] font-medium text-slate-300 hover:text-white transition">
<i className="w-3.5 h-3.5 mr-1 text-slate-500" data-lucide="square"></i>
                                        Month
                                    </button>
<button className="px-2.5 md:px-3 py-1.5 text-[11px] font-medium text-slate-950 bg-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.9)]">
                                        Week
                                    </button>
<button className="px-2.5 md:px-3 py-1.5 text-[11px] font-medium text-slate-300 hover:text-white transition">
                                        3 days
                                    </button>
</div>
<div className="hidden sm:flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-1.5 py-1">
<button className="p-1 rounded-full hover:bg-slate-800/80">
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-left"></i>
</button>
<button className="p-1 rounded-full hover:bg-slate-800/80">
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="flex items-center justify-between gap-3 mb-4 md:mb-5">
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 border border-slate-700/70 px-2 py-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    Focus: Deep work
                                </span>
<span className="hidden sm:inline text-slate-500">·</span>
<span className="hidden sm:inline">Capacity <span className="text-slate-200">5/8 hrs</span></span>
<span className="hidden sm:inline text-slate-500">·</span>
<span className="hidden sm:inline">Load <span className="text-emerald-300">63%</span></span>
</div>
<button className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-medium text-emerald-200 shadow-[0_16px_40px_rgba(16,185,129,0.3)]">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                                New event
                            </button>
</div>

<div className="sticky top-0 z-20 bg-transparent">
<div className="flex items-stretch">
<div className="w-14 md:w-16 flex-shrink-0"></div>
<div className="flex-1 grid grid-cols-7 gap-2 md:gap-3">
<div className="flex flex-col items-center py-1.5 text-xs text-slate-400">
<span className="uppercase tracking-[0.16em]">Mon</span>
<span className="mt-1 text-[15px] font-medium tracking-tight text-slate-200">6</span>
</div>
<div className="flex flex-col items-center py-1.5 text-xs text-slate-400">
<span className="uppercase tracking-[0.16em]">Tue</span>
<span className="mt-1 text-[15px] font-medium tracking-tight text-slate-200">7</span>
</div>
<div className="flex flex-col items-center py-1.5 text-xs text-slate-400">
<span className="uppercase tracking-[0.16em]">Wed</span>
<span className="mt-1 text-[15px] font-medium tracking-tight text-slate-200">8</span>
</div>
<div className="flex flex-col items-center py-1.5 text-xs text-slate-400">
<span className="uppercase tracking-[0.16em]">Thu</span>
<span className="mt-1 text-[15px] font-medium tracking-tight text-slate-200">9</span>
</div>
<div className="flex flex-col items-center py-1.5 text-xs text-slate-400">
<span className="uppercase tracking-[0.16em]">Fri</span>
<span className="mt-1 text-[15px] font-medium tracking-tight text-slate-200">10</span>
</div>
<div className="flex flex-col items-center py-1.5 text-xs text-slate-500/70">
<span className="uppercase tracking-[0.16em]">Sat</span>
<span className="mt-1 text-[15px] font-medium tracking-tight text-slate-500/80">11</span>
</div>
<div className="flex flex-col items-center py-1.5 text-xs text-slate-500/70">
<span className="uppercase tracking-[0.16em]">Sun</span>
<span className="mt-1 text-[15px] font-medium tracking-tight text-slate-500/80">12</span>
</div>
</div>
</div>
</div>

<div className="mt-2 flex-1 overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/60 shadow-[0_22px_70px_rgba(15,23,42,0.95)]">
<div className="flex h-full">

<div className="w-14 md:w-16 flex-shrink-0 border-r border-slate-800/70 bg-slate-950/80">
<div className="time-slot flex items-start justify-end pr-2 pt-1">
<span className="text-[10px] text-slate-500">8 AM</span>
</div>
<div className="time-slot flex items-start justify-end pr-2 pt-1">
<span className="text-[10px] text-slate-500">9 AM</span>
</div>
<div className="time-slot flex items-start justify-end pr-2 pt-1">
<span className="text-[10px] text-slate-500">10 AM</span>
</div>
<div className="time-slot flex items-start justify-end pr-2 pt-1">
<span className="text-[10px] text-slate-500">11 AM</span>
</div>
<div className="time-slot flex items-start justify-end pr-2 pt-1">
<span className="text-[10px] text-slate-500">12 PM</span>
</div>
<div className="time-slot flex items-start justify-end pr-2 pt-1">
<span className="text-[10px] text-slate-500">1 PM</span>
</div>
<div className="time-slot flex items-start justify-end pr-2 pt-1">
<span className="text-[10px] text-slate-500">2 PM</span>
</div>
<div className="time-slot flex items-start justify-end pr-2 pt-1">
<span className="text-[10px] text-slate-500">3 PM</span>
</div>
<div className="time-slot flex items-start justify-end pr-2 pt-1">
<span className="text-[10px] text-slate-500">4 PM</span>
</div>
<div className="time-slot flex items-start justify-end pr-2 pt-1">
<span className="text-[10px] text-slate-500">5 PM</span>
</div>
<div className="time-slot flex items-start justify-end pr-2 pt-1">
<span className="text-[10px] text-slate-500">6 PM</span>
</div>
</div>

<div className="flex-1 flex overflow-x-auto">

<div className="flex-1 border-r border-slate-800/70 relative bg-slate-950/60">
<div className="time-slot" data-day="mon" data-hour="8"></div>
<div className="time-slot" data-day="mon" data-hour="9"></div>
<div className="time-slot" data-day="mon" data-hour="10"></div>
<div className="time-slot" data-day="mon" data-hour="11"></div>
<div className="time-slot" data-day="mon" data-hour="12"></div>
<div className="time-slot" data-day="mon" data-hour="13"></div>
<div className="time-slot" data-day="mon" data-hour="14"></div>
<div className="time-slot" data-day="mon" data-hour="15"></div>
<div className="time-slot" data-day="mon" data-hour="16"></div>
<div className="time-slot" data-day="mon" data-hour="17"></div>
<div className="time-slot" data-day="mon" data-hour="18"></div>
</div>

<div className="flex-1 border-r border-slate-800/70 relative bg-slate-950/60">
<div className="time-slot" data-day="tue" data-hour="8"></div>
<div className="time-slot" data-day="tue" data-hour="9"></div>
<div className="time-slot" data-day="tue" data-hour="10"></div>
<div className="time-slot" data-day="tue" data-hour="11"></div>
<div className="time-slot" data-day="tue" data-hour="12"></div>
<div className="time-slot" data-day="tue" data-hour="13"></div>
<div className="time-slot" data-day="tue" data-hour="14"></div>
<div className="time-slot" data-day="tue" data-hour="15"></div>
<div className="time-slot" data-day="tue" data-hour="16"></div>
<div className="time-slot" data-day="tue" data-hour="17"></div>
<div className="time-slot" data-day="tue" data-hour="18"></div>

<div className="event-block bg-sky-500/10 border border-sky-400/60" style={{top: '112px', height: '108px'}}>
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-[11px] font-medium text-sky-100">Team standup</div>
<div className="mt-0.5 text-[10px] text-slate-300/80">Product, Eng</div>
</div>
<span className="inline-flex items-center rounded border border-sky-400/60 bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-100">
                                                    30 min
                                                </span>
</div>
<div className="mt-1.5 text-[10px] text-slate-400">10:00 AM – 11:30 AM</div>
</div>
</div>

<div className="flex-1 border-r border-slate-800/70 relative bg-slate-950/60">
<div className="time-slot" data-day="wed" data-hour="8"></div>
<div className="time-slot" data-day="wed" data-hour="9"></div>
<div className="time-slot" data-day="wed" data-hour="10"></div>
<div className="time-slot" data-day="wed" data-hour="11"></div>
<div className="time-slot" data-day="wed" data-hour="12"></div>
<div className="time-slot" data-day="wed" data-hour="13"></div>
<div className="time-slot" data-day="wed" data-hour="14"></div>
<div className="time-slot" data-day="wed" data-hour="15"></div>
<div className="time-slot" data-day="wed" data-hour="16"></div>
<div className="time-slot" data-day="wed" data-hour="17"></div>
<div className="time-slot" data-day="wed" data-hour="18"></div>

<div className="event-block bg-amber-500/10 border border-amber-400/70" style={{top: '56px', height: '56px'}}>
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-[11px] font-medium text-amber-100">Design review</div>
<div className="mt-0.5 text-[10px] text-slate-300/80">Design system</div>
</div>
<span className="inline-flex items-center rounded border border-amber-500/70 bg-amber-500/20 px-2 py-0.5 text-[10px] text-amber-100">
                                                    Due today
                                                </span>
</div>
<div className="mt-1.5 text-[10px] text-slate-400">9:00 AM – 10:00 AM</div>
</div>
<div className="event-block bg-emerald-500/10 border border-emerald-400/70" style={{top: '280px', height: '84px'}}>
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-[11px] font-medium text-emerald-100">Client call</div>
<div className="mt-0.5 text-[10px] text-slate-300/80">Enterprise · Success</div>
</div>
<span className="inline-flex items-center rounded border border-emerald-400/70 bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-100">
                                                    Confirmed
                                                </span>
</div>
<div className="mt-1.5 text-[10px] text-slate-400">1:00 PM – 2:30 PM</div>
</div>
</div>

<div className="flex-1 border-r border-slate-800/70 relative bg-slate-950/60">
<div className="time-slot" data-day="thu" data-hour="8"></div>
<div className="time-slot" data-day="thu" data-hour="9"></div>
<div className="time-slot" data-day="thu" data-hour="10"></div>
<div className="time-slot" data-day="thu" data-hour="11"></div>
<div className="time-slot" data-day="thu" data-hour="12"></div>
<div className="time-slot" data-day="thu" data-hour="13"></div>
<div className="time-slot" data-day="thu" data-hour="14"></div>
<div className="time-slot" data-day="thu" data-hour="15"></div>
<div className="time-slot" data-day="thu" data-hour="16"></div>
<div className="time-slot" data-day="thu" data-hour="17"></div>
<div className="time-slot" data-day="thu" data-hour="18"></div>
</div>

<div className="flex-1 border-r border-slate-800/70 relative bg-slate-950/60">
<div className="time-slot" data-day="fri" data-hour="8"></div>
<div className="time-slot" data-day="fri" data-hour="9"></div>
<div className="time-slot" data-day="fri" data-hour="10"></div>
<div className="time-slot" data-day="fri" data-hour="11"></div>
<div className="time-slot" data-day="fri" data-hour="12"></div>
<div className="time-slot" data-day="fri" data-hour="13"></div>
<div className="time-slot" data-day="fri" data-hour="14"></div>
<div className="time-slot" data-day="fri" data-hour="15"></div>
<div className="time-slot" data-day="fri" data-hour="16"></div>
<div className="time-slot" data-day="fri" data-hour="17"></div>
<div className="time-slot" data-day="fri" data-hour="18"></div>

<div className="event-block bg-rose-500/10 border border-rose-400/70" style={{top: '392px', height: '56px'}}>
<div className="flex items-center justify-between gap-2">
<div>
<div className="text-[11px] font-medium text-rose-100">Workshop</div>
<div className="mt-0.5 text-[10px] text-slate-300/80">Backend · 2h</div>
</div>
<span className="inline-flex items-center rounded border border-rose-400/80 bg-rose-500/20 px-2 py-0.5 text-[10px] text-rose-100">
                                                    Priority
                                                </span>
</div>
<div className="mt-1.5 text-[10px] text-rose-200">2h overdue</div>
</div>
</div>

<div className="hidden md:block flex-1 border-r border-slate-800/70 relative bg-slate-950/60">
<div className="time-slot" data-day="sat" data-hour="8"></div>
<div className="time-slot" data-day="sat" data-hour="9"></div>
<div className="time-slot" data-day="sat" data-hour="10"></div>
<div className="time-slot" data-day="sat" data-hour="11"></div>
<div className="time-slot" data-day="sat" data-hour="12"></div>
<div className="time-slot" data-day="sat" data-hour="13"></div>
<div className="time-slot" data-day="sat" data-hour="14"></div>
<div className="time-slot" data-day="sat" data-hour="15"></div>
<div className="time-slot" data-day="sat" data-hour="16"></div>
<div className="time-slot" data-day="sat" data-hour="17"></div>
<div className="time-slot" data-day="sat" data-hour="18"></div>
</div>

<div className="hidden md:block flex-1 relative bg-slate-950/60">
<div className="time-slot" data-day="sun" data-hour="8"></div>
<div className="time-slot" data-day="sun" data-hour="9"></div>
<div className="time-slot" data-day="sun" data-hour="10"></div>
<div className="time-slot" data-day="sun" data-hour="11"></div>
<div className="time-slot" data-day="sun" data-hour="12"></div>
<div className="time-slot" data-day="sun" data-hour="13"></div>
<div className="time-slot" data-day="sun" data-hour="14"></div>
<div className="time-slot" data-day="sun" data-hour="15"></div>
<div className="time-slot" data-day="sun" data-hour="16"></div>
<div className="time-slot" data-day="sun" data-hour="17"></div>
<div className="time-slot" data-day="sun" data-hour="18"></div>
</div>
</div>
</div>
</div>

<div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
<div className="inline-flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                Priority
                            </div>
<div className="inline-flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-sky-400"></span>
                                Meeting
                            </div>
<div className="inline-flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                Review
                            </div>
<div className="inline-flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-rose-400"></span>
                                Deadline
                            </div>
</div>
</div>
</section>

<aside className="w-full lg:w-[360px] xl:w-[380px] flex flex-col gap-4 lg:gap-5">

<div className="backdrop-card p-4 md:p-5">
<div className="flex items-start justify-between gap-4">
<div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center w-6 h-6 text-xs rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-200">
                                        13
                                    </span>
<h2 className="text-[18px] md:text-[20px] font-semibold tracking-tight text-slate-50">
                                        Monday, Oct 13
                                    </h2>
</div>
<p className="mt-1 text-xs text-slate-400">
                                    4 tasks · 2 meetings scheduled
                                </p>
</div>
<button className="inline-flex items-center justify-center rounded-full border border-emerald-500/80 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-medium text-emerald-200 shadow-[0_16px_40px_rgba(16,185,129,0.35)]">
                                Add
                            </button>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-300">
<div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Focus</span>
<span className="text-xs font-medium text-slate-100">Deep work</span>
</div>
<div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Capacity</span>
<span className="text-xs font-medium text-slate-100">5/8 hrs</span>
</div>
<div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Meetings</span>
<span className="text-xs font-medium text-slate-100">2 booked</span>
</div>
<div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 px-3 py-2.5 flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Load</span>
<span className="text-xs font-medium text-emerald-300">63% · healthy</span>
</div>
</div>
</div>

<div className="backdrop-card flex-1 flex flex-col p-4 md:p-5">
<div className="flex items-center justify-between gap-3 mb-4">
<div className="flex items-baseline gap-3">
<h2 className="text-[18px] font-semibold tracking-tight text-slate-50">Tasks</h2>
<span className="text-[11px] text-slate-400">Today</span>
</div>
<div className="flex items-center gap-2">
<button className="hidden md:inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 p-1.5">
<i className="w-3.5 h-3.5 text-slate-300" data-lucide="layout-list"></i>
</button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 p-1.5">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="layout-grid"></i>
</button>
</div>
</div>
<div className="tasks-scroll flex-1 overflow-auto space-y-2.5 pr-1">

<div className="group flex items-start gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/70 px-3.5 py-3 hover:border-emerald-400/70 hover:bg-slate-900/80 transition-shadow shadow-[0_18px_45px_rgba(15,23,42,0.85)]">
<button className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/70 bg-transparent">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80 group-hover:bg-emerald-200 transition"></span>
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-[13px] font-medium text-slate-50">Sprint planning for Q4 roadmap</p>
<div className="flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full border border-sky-400/70 bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-100">
                                                09:00
                                            </span>
<span className="text-[10px] text-slate-400">60 min</span>
</div>
</div>
<p className="mt-1 text-[11px] text-slate-400">Product, Eng</p>
</div>
</div>

<div className="group flex items-start gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/70 px-3.5 py-3 hover:border-amber-400/70 hover:bg-slate-900/80 transition-shadow">
<button className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-slate-600 bg-transparent"></button>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-[13px] font-medium text-slate-50">UX review for onboarding flow</p>
<div className="flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full border border-sky-400/70 bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-100">
                                                11:00
                                            </span>
<span className="inline-flex items-center rounded-full border border-amber-400/80 bg-amber-500/20 px-2 py-0.5 text-[10px] text-amber-100">
                                                Due today
                                            </span>
</div>
</div>
<p className="mt-1 text-[11px] text-slate-400">Design system</p>
</div>
</div>

<div className="group flex items-start gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/70 px-3.5 py-3 hover:border-rose-400/70 hover:bg-slate-900/80 transition-shadow">
<button className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-slate-600 bg-transparent"></button>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-[13px] font-medium text-slate-50">Implement billing retries for failed payments</p>
<div className="flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full border border-rose-400/70 bg-rose-500/15 px-2 py-0.5 text-[10px] text-rose-100">
                                                Priority
                                            </span>
<span className="text-[10px] text-rose-200">2h overdue</span>
</div>
</div>
<p className="mt-1 text-[11px] text-slate-400">Backend · 2h</p>
</div>
</div>

<div className="group flex items-start gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/70 px-3.5 py-3 hover:border-slate-500/80 hover:bg-slate-900/80 transition-shadow">
<button className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-slate-600 bg-transparent"></button>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-[13px] font-medium text-slate-50">Write release notes for v3.4</p>
<div className="flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full border border-slate-500/80 bg-slate-800/90 px-2 py-0.5 text-[10px] text-slate-200">
                                                Anytime
                                            </span>
<span className="text-[10px] text-slate-400">Optional</span>
</div>
</div>
<p className="mt-1 text-[11px] text-slate-400">Docs · 45m</p>
</div>
</div>

<div className="group flex items-start gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/70 px-3.5 py-3 hover:border-emerald-400/70 hover:bg-slate-900/80 transition-shadow">
<button className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-slate-600 bg-transparent"></button>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-[13px] font-medium text-slate-50">Customer call: onboarding feedback</p>
<div className="flex flex-col items-end gap-1">
<span className="inline-flex items-center rounded-full border border-sky-400/70 bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-100">
                                                16:30
                                            </span>
<span className="inline-flex items-center rounded-full border border-emerald-400/70 bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-100">
                                                Confirmed
                                            </span>
</div>
</div>
<p className="mt-1 text-[11px] text-slate-400">Enterprise · 30m</p>
</div>
</div>
</div>
<button className="mt-4 inline-flex items-center gap-2 text-[11px] text-slate-300 hover:text-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                            Add task
                        </button>
</div>
</aside>
</div>
</main>
</div>

<div className="hidden fixed inset-0 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center z-50" id="event-modal">
<div className="w-full max-w-md mx-4 rounded-3xl border border-slate-700/80 bg-slate-950/95 shadow-[0_28px_80px_rgba(15,23,42,1)]">
<div className="px-5 py-4 border-b border-slate-800/80 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/70">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="calendar-plus"></i>
</span>
<h3 className="text-[17px] font-semibold tracking-tight text-slate-50">Create event</h3>
</div>
<button className="p-1.5 rounded-full hover:bg-slate-800/80" onclick="closeModal()">
<i className="w-4 h-4 text-slate-400" data-lucide="x"></i>
</button>
</div>
<div className="p-5 space-y-4">
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1.5 uppercase tracking-[0.16em]">Title</label>
<input className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent" placeholder="Sprint planning, Client call, Deep work..." type="text"/>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1.5 uppercase tracking-[0.16em]">Date &amp; time</label>
<div className="grid grid-cols-2 gap-3">
<input className="rounded-2xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent" type="text" value="Mon, Oct 13"/>
<input className="rounded-2xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent" type="text" value="10:00 AM"/>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1.5 uppercase tracking-[0.16em]">Type</label>
<div className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-950/80 p-1">
<button className="px-3 py-1.5 text-[11px] font-medium text-slate-950 bg-slate-100 rounded-full shadow-[0_12px_35px_rgba(15,23,42,0.9)]">
                            Event
                        </button>
<button className="px-3 py-1.5 text-[11px] font-medium text-slate-300 rounded-full hover:text-white">
                            Task
                        </button>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1.5 uppercase tracking-[0.16em]">Description</label>
<textarea className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-transparent" placeholder="Add context, meeting link, attendees..." rows="3"></textarea>
</div>
</div>
<div className="px-5 py-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
<button className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-slate-100" onclick="closeModal()">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
                    Schedule later
                </button>
<div className="flex items-center gap-2">
<button className="px-3.5 py-1.5 text-[11px] font-medium text-slate-300 hover:text-slate-50 rounded-full hover:bg-slate-900/80">Cancel</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/80 bg-emerald-500/90 px-4 py-1.5 text-[11px] font-medium text-slate-950 shadow-[0_18px_45px_rgba(16,185,129,0.5)]">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
                        Create
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
