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



    let isDragging = false;
    let startSlot = null;
    let selectedSlots = new Set();
    
    const container = document.getElementById('timeSlotContainer');
    const allSlots = document.querySelectorAll('.time-slot');
    
    // Mouse down - start drag
    allSlots.forEach(slot => {
      slot.addEventListener('mousedown', (e) => {
        // Only drag on empty slots
        if (slot.children.length === 0) {
          isDragging = true;
          startSlot = slot;
          selectedSlots.clear();
          selectedSlots.add(slot);
          slot.classList.add('selecting');
          e.preventDefault();
        }
      });
      
      // Mouse enter during drag
      slot.addEventListener('mouseenter', (e) => {
        if (isDragging && startSlot && slot.children.length === 0) {
          const startDay = startSlot.dataset.day;
          const currentDay = slot.dataset.day;
          
          // Only select slots in the same column (same day)
          if (startDay === currentDay) {
            selectedSlots.add(slot);
            slot.classList.add('selecting');
          }
        }
      });
    });
    
    // Mouse up - end drag and create event
    document.addEventListener('mouseup', (e) => {
      if (isDragging && selectedSlots.size > 0) {
        // Show prompt for event name
        const eventName = prompt('Enter event name:');
        
        if (eventName && eventName.trim() !== '') {
          // Get time range
          const slots = Array.from(selectedSlots);
          const times = slots.map(s => s.dataset.time).sort();
          const startTime = times[0];
          const endHour = parseInt(times[times.length - 1].split(':')[0]) + 1;
          const endTime = endHour + ':00';
          
          // Clear the first slot and add event
          const firstSlot = slots[0];
          firstSlot.innerHTML = `
            <div class="text-[10px] sm:text-xs font-medium text-emerald-100 mb-0.5">${eventName}</div>
            <div class="text-[9px] text-slate-400">${startTime} - ${endTime}</div>
          `;
          firstSlot.classList.remove('border-slate-800/40', 'bg-slate-900/40');
          firstSlot.classList.add('border-slate-800/60', 'bg-slate-900/60', 'hover:border-emerald-400/70');
        }
        
        // Clear selection styling
        selectedSlots.forEach(slot => {
          slot.classList.remove('selecting');
        });
        
        selectedSlots.clear();
        isDragging = false;
        startSlot = null;
      }
    });
    
    // Cancel drag on mouse leave container
    container.addEventListener('mouseleave', () => {
      if (isDragging) {
        selectedSlots.forEach(slot => {
          slot.classList.remove('selecting');
        });
        selectedSlots.clear();
        isDragging = false;
        startSlot = null;
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="flex-1 flex flex-col">

<header className="border-b border-slate-800">
<div className="sm:px-6 lg:px-8 flex max-w-6xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl border flex items-center justify-center text-xs font-semibold tracking-tight bg-slate-900 border-slate-700 text-slate-100">
            CL
          </div>
<div className="">
<div className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
              Schedule Overview
            </div>
<p className="text-xs sm:text-sm text-slate-400">
              Calendar on the left, tasks on the right
            </p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs sm:text-sm font-medium hover:border-slate-500 transition-colors border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-900">
<i className="lucide lucide-plus text-[16px] text-slate-300" style={{strokeWidth: '1.5'}}></i>
            New Task
          </button>
<button className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium hover:border-slate-500 transition-colors border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-900">
<div className="h-6 w-6 rounded-full overflow-hidden bg-slate-800">
<img alt="User avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<span className="hidden sm:inline">Alex</span>
</button>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
<div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

<section className="flex-1 border rounded-2xl p-4 sm:p-5 lg:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.85)] bg-slate-900/70 border-slate-800">

<div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
<div>
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                  October 13-19, 2025
                </h1>
<p className="text-xs sm:text-sm mt-0.5 text-slate-400">
                  Week 3 • 14 tasks scheduled
                </p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex hover:border-slate-500 transition-colors w-8 h-8 border rounded-lg items-center justify-center hover:bg-slate-900 text-slate-300 bg-slate-950 border-slate-700">
<i className="lucide lucide-chevron-left text-[16px]" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="inline-flex hover:border-slate-500 transition-colors w-8 h-8 border rounded-lg items-center justify-center hover:bg-slate-900 text-slate-300 bg-slate-950 border-slate-700">
<i className="lucide lucide-chevron-right text-[16px]" style={{strokeWidth: '1.5'}}></i>
</button>

<div className="hidden sm:inline-flex items-center rounded-lg border text-[11px] font-medium overflow-hidden border-slate-800 bg-slate-950/80 text-slate-300">
<button className="px-2.5 py-1.5 transition-colors hover:bg-slate-900 hover:text-slate-100">
                    Month
                  </button>
<button className="px-2.5 py-1.5 transition-colors bg-slate-100 text-slate-900 hover:bg-slate-200 hover:text-slate-950">
                    Week
                  </button>
<button className="px-2.5 py-1.5 transition-colors hover:bg-slate-900 hover:text-slate-100">
                    3 days
                  </button>
</div>
</div>
</div>

<div className="flex flex-col gap-2">

<div className="grid grid-cols-8 gap-2">
<div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.08em] text-slate-500"></div>
<div className="text-center">
<div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.08em] text-slate-400">Mon</div>
<div className="mt-1 flex items-center justify-center">
<div className="h-7 w-7 rounded-full text-xs flex items-center justify-center font-semibold bg-slate-100 text-slate-900">13</div>
</div>
</div>
<div className="text-center">
<div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.08em] text-slate-400">Tue</div>
<div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">14</div>
</div>
<div className="text-center">
<div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.08em] text-slate-400">Wed</div>
<div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">15</div>
</div>
<div className="text-center">
<div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.08em] text-slate-400">Thu</div>
<div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">16</div>
</div>
<div className="text-center">
<div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.08em] text-slate-400">Fri</div>
<div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">17</div>
</div>
<div className="text-center">
<div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.08em] text-slate-300">Sat</div>
<div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">18</div>
</div>
<div className="text-center">
<div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.08em] text-slate-300">Sun</div>
<div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">19</div>
</div>
</div>

<div className="mt-2 space-y-1 max-h-[500px] overflow-y-auto pr-1" id="timeSlotContainer">

<div className="grid grid-cols-8 gap-2 items-start">
<div className="text-[10px] sm:text-xs text-slate-500 pt-1">09:00</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/60 bg-slate-900/60 p-2 hover:border-emerald-400/70 hover:bg-slate-900 transition-colors cursor-pointer" data-day="mon" data-time="09:00">
<div className="text-[10px] sm:text-xs font-medium text-emerald-100 mb-0.5">Sprint planning</div>
<div className="text-[9px] text-slate-400">09:00 - 10:00</div>
</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="tue" data-time="09:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="wed" data-time="09:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="thu" data-time="09:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="fri" data-time="09:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sat" data-time="09:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sun" data-time="09:00"></div>
</div>

<div className="grid grid-cols-8 gap-2 items-start">
<div className="text-[10px] sm:text-xs text-slate-500 pt-1">10:00</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="mon" data-time="10:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="tue" data-time="10:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="wed" data-time="10:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="thu" data-time="10:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="fri" data-time="10:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sat" data-time="10:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sun" data-time="10:00"></div>
</div>

<div className="grid grid-cols-8 gap-2 items-start">
<div className="text-[10px] sm:text-xs text-slate-500 pt-1">11:00</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/60 bg-slate-900/60 p-2 hover:border-sky-400/70 hover:bg-slate-900 transition-colors cursor-pointer" data-day="mon" data-time="11:00">
<div className="text-[10px] sm:text-xs font-medium text-sky-100 mb-0.5">UX review</div>
<div className="text-[9px] text-slate-400">11:00 - 11:45</div>
</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/60 bg-slate-900/60 p-2 hover:border-amber-400/70 hover:bg-slate-900 transition-colors cursor-pointer" data-day="tue" data-time="11:00">
<div className="text-[10px] sm:text-xs font-medium text-amber-100 mb-0.5">QA testing</div>
<div className="text-[9px] text-slate-400">11:00 - 12:30</div>
</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/60 bg-slate-900/60 p-2 hover:border-sky-400/70 hover:bg-slate-900 transition-colors cursor-pointer" data-day="wed" data-time="11:00">
<div className="text-[10px] sm:text-xs font-medium text-sky-100 mb-0.5">Design sync</div>
<div className="text-[9px] text-slate-400">11:30 - 12:00</div>
</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="thu" data-time="11:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="fri" data-time="11:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sat" data-time="11:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sun" data-time="11:00"></div>
</div>

<div className="grid grid-cols-8 gap-2 items-start">
<div className="text-[10px] sm:text-xs text-slate-500 pt-1">12:00</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="mon" data-time="12:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="tue" data-time="12:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="wed" data-time="12:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="thu" data-time="12:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="fri" data-time="12:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sat" data-time="12:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sun" data-time="12:00"></div>
</div>

<div className="grid grid-cols-8 gap-2 items-start">
<div className="text-[10px] sm:text-xs text-slate-500 pt-1">13:00</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="mon" data-time="13:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="tue" data-time="13:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="wed" data-time="13:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="thu" data-time="13:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="fri" data-time="13:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sat" data-time="13:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sun" data-time="13:00"></div>
</div>

<div className="grid grid-cols-8 gap-2 items-start">
<div className="text-[10px] sm:text-xs text-slate-500 pt-1">14:00</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/60 bg-slate-900/60 p-2 hover:border-amber-400/70 hover:bg-slate-900 transition-colors cursor-pointer" data-day="mon" data-time="14:00">
<div className="text-[10px] sm:text-xs font-medium text-amber-100 mb-0.5">Billing fix</div>
<div className="text-[9px] text-slate-400">14:00 - 16:00</div>
</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/60 bg-slate-900/60 p-2 hover:border-rose-400/70 hover:bg-slate-900 transition-colors cursor-pointer" data-day="tue" data-time="14:00">
<div className="text-[10px] sm:text-xs font-medium text-rose-100 mb-0.5">Deadline</div>
<div className="text-[9px] text-slate-400">EOD</div>
</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="wed" data-time="14:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="thu" data-time="14:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="fri" data-time="14:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sat" data-time="14:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sun" data-time="14:00"></div>
</div>

<div className="grid grid-cols-8 gap-2 items-start">
<div className="text-[10px] sm:text-xs text-slate-500 pt-1">15:00</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="mon" data-time="15:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="tue" data-time="15:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="wed" data-time="15:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="thu" data-time="15:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="fri" data-time="15:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sat" data-time="15:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sun" data-time="15:00"></div>
</div>

<div className="grid grid-cols-8 gap-2 items-start">
<div className="text-[10px] sm:text-xs text-slate-500 pt-1">16:00</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/60 bg-slate-900/60 p-2 hover:border-sky-400/70 hover:bg-slate-900 transition-colors cursor-pointer" data-day="mon" data-time="16:00">
<div className="text-[10px] sm:text-xs font-medium text-sky-100 mb-0.5">Customer call</div>
<div className="text-[9px] text-slate-400">16:30 - 17:00</div>
</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="tue" data-time="16:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="wed" data-time="16:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="thu" data-time="16:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="fri" data-time="16:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sat" data-time="16:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sun" data-time="16:00"></div>
</div>

<div className="grid grid-cols-8 gap-2 items-start">
<div className="text-[10px] sm:text-xs text-slate-500 pt-1">17:00</div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="mon" data-time="17:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="tue" data-time="17:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="wed" data-time="17:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="thu" data-time="17:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/40 bg-slate-900/40 hover:border-slate-500 hover:bg-slate-900 transition-colors cursor-pointer" data-day="fri" data-time="17:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sat" data-time="17:00"></div>
<div className="time-slot min-h-[60px] rounded-lg border border-slate-800/30 bg-slate-900/30" data-day="sun" data-time="17:00"></div>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-slate-800/80">
<div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-400">
<span className="h-2 w-2 rounded-[5px] bg-emerald-400/80"></span>
                Priority
              </div>
<div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-400">
<span className="h-2 w-2 rounded-[5px] bg-sky-400/80"></span>
                Meeting
              </div>
<div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-400">
<span className="h-2 w-2 rounded-[5px] bg-amber-400/80"></span>
                Review
              </div>
<div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-400">
<span className="h-2 w-2 rounded-[5px] bg-rose-400/80"></span>
                Deadline
              </div>
</div>
</section>

<aside className="w-full lg:w-80 xl:w-96 flex flex-col gap-4">

<div className="border rounded-2xl p-4 sm:p-5 bg-slate-900/70 border-slate-800">
<div className="flex items-center justify-between gap-3">
<div className="">
<h2 className="text-lg font-semibold tracking-tight text-slate-50">
                    Monday, Oct 13
                  </h2>
<p className="text-xs sm:text-sm mt-0.5 text-slate-400">
                    4 tasks • 2 meetings
                  </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/60 bg-emerald-500/10 px-2.5 py-1.5 text-[11px] sm:text-xs font-medium hover:bg-emerald-500/20 transition-colors text-emerald-100 hover:border-emerald-400">
<i className="lucide lucide-plus text-[14px]" style={{strokeWidth: '1.5'}}></i>
                  Add
                </button>
</div>

<div className="mt-4 grid grid-cols-3 gap-3 text-[11px] sm:text-xs text-slate-300">
<div className="flex flex-col gap-1 rounded-xl border px-2.5 py-2 border-slate-800/80 bg-slate-950/70">
<span className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
                    Focus
                  </span>
<span className="font-medium">Deep work</span>
</div>
<div className="flex flex-col gap-1 rounded-xl border px-2.5 py-2 border-slate-800/80 bg-slate-950/70">
<span className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
                    Capacity
                  </span>
<span className="font-medium">5/8 hrs</span>
</div>
<div className="flex flex-col gap-1 rounded-xl border px-2.5 py-2 border-slate-800/80 bg-slate-950/70">
<span className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
                    Load
                  </span>
<span className="font-medium text-amber-200">63%</span>
</div>
</div>
</div>

<div className="border rounded-2xl p-4 sm:p-5 flex-1 flex flex-col bg-slate-900/70 border-slate-800">
<div className="flex items-center justify-between pb-3 border-b border-slate-800">
<div className="flex items-center gap-2">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-100">
                    Tasks
                  </h3>
<span className="text-[11px] text-slate-400">
                    Today
                  </span>
</div>
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center justify-center h-7 w-7 rounded-lg border hover:border-slate-500 transition-colors border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-900">
<i className="lucide lucide-filter text-[14px]" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="inline-flex items-center justify-center h-7 w-7 rounded-lg border hover:border-slate-500 transition-colors border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-900">
<i className="lucide lucide-more-horizontal text-[16px]" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="mt-3 sm:mt-4 space-y-3 sm:space-y-3.5 overflow-y-auto max-h-[420px] pr-1.5">

<div className="group flex items-start gap-3 rounded-xl border px-3 py-2.5 transition-colors border-slate-800 bg-slate-950/70 hover:border-emerald-400/70 hover:bg-slate-900">
<button className="mt-0.5 h-4.5 w-4.5 min-w-[18px] rounded-full border flex items-center justify-center hover:bg-emerald-500/20 transition-colors border-emerald-400/70 bg-slate-950">
<div className="h-2.5 w-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-emerald-400/90"></div>
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-xs sm:text-sm font-medium truncate text-slate-100">
                        Sprint planning for Q4 roadmap
                      </p>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-100">
                        09:00
                      </span>
</div>
<div className="mt-1 flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5 text-[10px] text-slate-400">
<i className="lucide lucide-users text-[13px]" style={{strokeWidth: '1.5'}}></i>
<span>Product, Eng</span>
</div>
<span className="text-[10px] text-slate-500">
                        60 min
                      </span>
</div>
</div>
</div>

<div className="group flex items-start gap-3 rounded-xl border px-3 py-2.5 transition-colors border-slate-800 bg-slate-950/70 hover:border-sky-400/70 hover:bg-slate-900">
<button className="mt-0.5 h-4.5 w-4.5 min-w-[18px] rounded-full border flex items-center justify-center hover:bg-sky-500/10 transition-colors border-slate-600 bg-slate-950 hover:border-sky-400">
<i className="lucide lucide-check text-[12px] text-slate-500 opacity-0 group-hover:opacity-100" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-xs sm:text-sm font-medium truncate text-slate-100">
                        UX review for onboarding flow
                      </p>
<span className="inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-medium bg-slate-900 border-slate-700 text-slate-300">
                        11:00
                      </span>
</div>
<div className="mt-1 flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5 text-[10px] text-slate-400">
<i className="lucide lucide-figma text-[13px]" style={{strokeWidth: '1.5'}}></i>
<span>Design system</span>
</div>
<span className="text-[10px] text-amber-300">
                        Due today
                      </span>
</div>
</div>
</div>

<div className="group flex items-start gap-3 rounded-xl border px-3 py-2.5 transition-colors border-slate-800 bg-slate-950/70 hover:border-amber-400/70 hover:bg-slate-900">
<button className="mt-0.5 h-4.5 w-4.5 min-w-[18px] rounded-full border flex items-center justify-center hover:bg-amber-500/10 transition-colors border-slate-600 bg-slate-950 hover:border-amber-400">
<i className="lucide lucide-check text-[12px] text-slate-500 opacity-0 group-hover:opacity-100" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-xs sm:text-sm font-medium truncate text-slate-100">
                        Implement billing retries for failed payments
                      </p>
<span className="inline-flex items-center rounded-full bg-amber-500/10 border px-1.5 py-0.5 text-[10px] font-medium border-amber-400/60 text-amber-100">
                        Priority
                      </span>
</div>
<div className="mt-1 flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5 text-[10px] text-slate-400">
<i className="lucide lucide-code-2 text-[13px]" style={{strokeWidth: '1.5'}}></i>
<span>Backend · 2h</span>
</div>
<span className="text-[10px] text-rose-300">
                        2h overdue
                      </span>
</div>
</div>
</div>

<div className="group flex items-start gap-3 rounded-xl border px-3 py-2.5 hover:border-slate-500 transition-colors border-slate-800 bg-slate-950/70 hover:bg-slate-900">
<button className="mt-0.5 h-4.5 w-4.5 min-w-[18px] rounded-full border flex items-center justify-center hover:bg-emerald-500/10 transition-colors border-slate-600 bg-slate-950 hover:border-emerald-400">
<i className="lucide lucide-check text-[12px] text-slate-500 opacity-0 group-hover:opacity-100" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-xs sm:text-sm font-medium truncate text-slate-100">
                        Write release notes for v3.4
                      </p>
<span className="inline-flex items-center rounded-full-slate-900 border px-1.5 py-0.5 text-[10px] font-medium border-slate-700 text-slate-300">
                        Anytime
                      </span>
</div>
<div className="mt-1 flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5 text-[10px] text-slate-400">
<i className="lucide lucide-pencil text-[13px]" style={{strokeWidth: '1.5'}}></i>
<span>Docs · 45m</span>
</div>
<span className="text-[10px] text-slate-500">
                        Optional
                      </span>
</div>
</div>
</div>

<div className="group flex items-start gap-3 rounded-xl border px-3 py-2.5 transition-colors border-slate-800 bg-slate-950/70 hover:border-sky-400/70 hover:bg-slate-900">
<button className="mt-0.5 h-4.5 w-4.5 min-w-[18px] rounded-full border flex items-center justify-center hover:bg-sky-500/10 transition-colors border-slate-600 bg-slate-950 hover:border-sky-400">
<i className="lucide lucide-check text-[12px] text-slate-500 opacity-0 group-hover:opacity-100" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-2">
<p className="text-xs sm:text-sm font-medium truncate text-slate-100">
                        Customer call: onboarding feedback
                      </p>
<span className="inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-medium bg-slate-900 border-slate-700 text-slate-300">
                        16:30
                      </span>
</div>
<div className="mt-1 flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5 text-[10px] text-slate-400">
<i className="lucide lucide-phone text-[13px]" style={{strokeWidth: '1.5'}}></i>
<span>Enterprise · 30m</span>
</div>
<span className="text-[10px] text-emerald-300">
                        Confirmed
                      </span>
</div>
</div>
</div>
</div>

<button className="mt-3 inline-flex items-center gap-1.5 text-[11px] sm:text-xs rounded-lg px-1.5 py-1 transition-colors self-start text-slate-400 hover:text-slate-100 hover:bg-slate-900">
<i className="lucide lucide-plus text-[14px]" style={{strokeWidth: '1.5'}}></i>
                Add task
              </button>
</div>
</aside>
</div>
</div>
</main>
</div>


    </>
  );
}
