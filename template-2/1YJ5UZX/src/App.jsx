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

      const tabButtons = document.querySelectorAll('.tab-btn');
      const panels = document.querySelectorAll('.tab-panel');

      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.getAttribute('data-tab');

          tabButtons.forEach(b => b.classList.remove('bg-slate-50', 'text-slate-700'));
          btn.classList.add('bg-slate-50', 'text-slate-700');

          panels.forEach(p => {
            p.classList.toggle('hidden', p.getAttribute('data-panel') !== target);
          });
        });
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-20 right-0 h-80 w-80 md:h-[28rem] md:w-[28rem] rounded-full blur-3xl bg-gradient-to-br from-cyan-300/50 via-sky-300/40 to-blue-400/40"></div>
<div className="absolute -bottom-24 -left-12 h-64 w-64 md:h-80 md:w-80 rounded-full blur-3xl bg-gradient-to-tr from-blue-200/40 via-cyan-200/40 to-teal-200/40"></div>
</div>

<aside className="fixed inset-y-0 left-0 w-20 md:w-24 bg-white/80 backdrop-blur border-r border-slate-100 shadow-sm flex flex-col items-center py-6">

<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white grid place-items-center shadow-lg">
<span className="text-xl md:text-2xl font-semibold tracking-tight">nü</span>
</div>

<div className="mt-6">
<img alt="Profile" className="w-10 h-10 md:w-11 md:h-11 rounded-full ring-2 ring-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop&crop=faces" />
</div>

<nav className="mt-6 flex-1 flex flex-col items-center gap-5 md:gap-6 text-slate-500">
<button className="p-2.5 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
</button>
<button className="p-2.5 rounded-xl bg-slate-900 text-white shadow-sm">
<i className="w-5 h-5" data-lucide="calendar"></i>
</button>
<button className="p-2.5 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition">
<i className="w-5 h-5" data-lucide="message-square"></i>
</button>
<button className="p-2.5 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition">
<i className="w-5 h-5" data-lucide="mail"></i>
</button>
</nav>

<div className="flex flex-col items-center gap-4">
<button className="relative p-2.5 rounded-xl hover:bg-slate-50 text-slate-600">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-cyan-500 text-white text-[10px] grid place-items-center">3</span>
</button>
<button className="p-2.5 rounded-xl hover:bg-slate-50 text-slate-600">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
</div>
</aside>

<main className="ml-20 md:ml-24 min-h-screen">

<header className="px-5 md:px-8 pt-6 md:pt-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-center gap-4">
<img alt="Patient" className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&h=300&fit=crop&crop=faces" />
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Hello Maya!</h1>
<p className="text-sm text-slate-500">Here’s your schedule and upcoming sessions</p>
</div>
</div>

<div className="flex-1 md:max-w-xl">
<div className="bg-white/90 backdrop-blur border border-slate-100 shadow-sm rounded-2xl p-4 flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="Clinician" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&fit=crop&crop=faces" />
<div>
<p className="text-sm font-medium text-slate-800">Gregory James</p>
<p className="text-xs text-slate-500">Your visit starts in 3m 52s</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium bg-white border border-slate-200 text-slate-700 hover:bg-slate-50">
<i className="w-4 h-4" data-lucide="file-text"></i>
<span>Notes</span>
</button>
<button className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 shadow">
<i className="w-4 h-4" data-lucide="video"></i>
<span>Join Now</span>
</button>
</div>
</div>
</div>
</div>

<section className="px-5 md:px-8 pb-12 md:pb-16 mt-6 grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-8">

<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100">
<i className="w-5 h-5 text-slate-600" data-lucide="chevron-left"></i>
</button>
<p className="text-sm md:text-base font-medium text-slate-800">September 17–23, 2018</p>
<button className="p-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100">
<i className="w-5 h-5 text-slate-600" data-lucide="chevron-right"></i>
</button>
</div>
<button className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 bg-cyan-50 hover:bg-cyan-100 border border-cyan-100 rounded-xl px-3.5 py-2">
<i className="w-4 h-4" data-lucide="calendar-plus"></i>
<span>Set availability</span>
</button>
</div>

<div className="bg-white/90 backdrop-blur border border-slate-100 rounded-2xl shadow-sm overflow-hidden">

<div className="grid grid-cols-8 text-xs md:text-sm bg-slate-50/70 border-b border-slate-100">
<div className="px-3 py-3 text-slate-500">Time</div>
<div className="px-3 py-3 font-medium text-slate-700">MON<br /><span className="text-slate-400 font-normal">Sep 17</span></div>
<div className="px-3 py-3 font-medium text-slate-700">TUE<br /><span className="text-slate-400 font-normal">Sep 18</span></div>
<div className="px-3 py-3 font-medium text-slate-700">WED<br /><span className="text-slate-400 font-normal">Sep 19</span></div>
<div className="px-3 py-3 font-medium text-slate-700">THU<br /><span className="text-slate-400 font-normal">Sep 20</span></div>
<div className="px-3 py-3 font-medium text-slate-700">FRI<br /><span className="text-slate-400 font-normal">Sep 21</span></div>
<div className="px-3 py-3 font-medium text-slate-700">SAT<br /><span className="text-slate-400 font-normal">Sep 22</span></div>
<div className="px-3 py-3 font-medium text-slate-700">SUN<br /><span className="text-slate-400 font-normal">Sep 23</span></div>
</div>

<div className="grid grid-cols-8 divide-x divide-slate-100">

<div className="text-xs md:text-sm text-slate-500">
<div className="h-12 grid place-items-start px-3 border-b border-slate-100">9:00 AM</div>
<div className="h-12 grid place-items-start px-3 border-b border-slate-100">9:30 AM</div>
<div className="h-12 grid place-items-start px-3 border-b border-slate-100">10:00 AM</div>
<div className="h-12 grid place-items-start px-3 border-b border-slate-100">10:30 AM</div>
<div className="h-12 grid place-items-start px-3 border-b border-slate-100">11:00 AM</div>
<div className="h-12 grid place-items-start px-3 border-b border-slate-100">11:30 AM</div>
<div className="h-12 grid place-items-start px-3 border-b border-slate-100">12:00 PM</div>
<div className="h-12 grid place-items-start px-3">12:30 PM</div>
</div>

<div className="text-xs">
<div className="relative h-12 border-b border-slate-100 bg-slate-50/40"></div>
<div className="relative h-12 border-b border-slate-100 bg-slate-50/40">
<div className="absolute inset-1 rounded-lg bg-sky-500/10 border border-sky-200 text-sky-700 flex items-center justify-between px-2">
<span>Check-in</span>
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
</div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-orange-400/10 border border-orange-200 text-orange-700 flex items-center gap-1 px-2">
<i className="w-3.5 h-3.5" data-lucide="help-circle"></i>
<span>Pending</span>
</div>
</div>
<div className="relative h-12"></div>
</div>

<div className="text-xs">
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100 bg-sky-50">
<div className="absolute inset-1 rounded-lg bg-sky-500 text-white px-2 flex items-center justify-between shadow">
<span>9:15 AM</span>
<div className="flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
<span className="hidden md:inline">15m</span>
</div>
</div>
</div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100 bg-slate-50/40"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12"></div>
</div>

<div className="text-xs">
<div className="relative h-12 border-b border-slate-100 bg-slate-50/40"></div>
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-sky-500 text-white px-2 flex items-center justify-between shadow">
<span>10:00 AM</span>
<i className="w-3.5 h-3.5" data-lucide="video"></i>
</div>
</div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-orange-400/10 border border-orange-200 text-orange-700 px-2 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="alert-circle"></i>
<span>Unconfirmed</span>
</div>
</div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12"></div>
</div>

<div className="text-xs">
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-sky-500 text-white px-2 flex items-center justify-between shadow">
<span>9:00 AM</span>
<i className="w-3.5 h-3.5" data-lucide="user-round"></i>
</div>
</div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-sky-500/10 border border-sky-200 text-sky-700 px-2 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
<span>Confirmed</span>
</div>
</div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12"></div>
</div>

<div className="text-xs">
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100 bg-slate-50/40"></div>
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-sky-500 text-white px-2 flex items-center justify-between shadow">
<span>11:30 AM</span>
<i className="w-3.5 h-3.5" data-lucide="stethoscope"></i>
</div>
</div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-sky-500 text-white px-2 flex items-center justify-between shadow">
<span>1:00 PM</span>
<i className="w-3.5 h-3.5" data-lucide="phone"></i>
</div>
</div>
<div className="relative h-12"></div>
</div>

<div className="text-xs">
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-orange-400/10 border border-orange-200 text-orange-700 px-2 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="help-circle"></i>
<span>9:00 AM</span>
</div>
</div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100 bg-slate-50/40"></div>
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-sky-500/10 border border-sky-200 text-sky-700 px-2 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
<span>11:30 AM</span>
</div>
</div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-orange-400/10 border border-orange-200 text-orange-700 px-2 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="alert-circle"></i>
<span>12:30 PM</span>
</div>
</div>
<div className="relative h-12"></div>
</div>

<div className="text-xs">
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100 bg-slate-50/40"></div>
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-sky-500 text-white px-2 flex items-center justify-between shadow">
<span>10:00 AM</span>
<i className="w-3.5 h-3.5" data-lucide="user-round"></i>
</div>
</div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100"></div>
<div className="relative h-12 border-b border-slate-100 bg-slate-50/40"></div>
<div className="relative h-12 border-b border-slate-100">
<div className="absolute inset-1 rounded-lg bg-sky-500/10 border border-sky-200 text-sky-700 px-2 flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
<span>1:00 PM</span>
</div>
</div>
<div className="relative h-12"></div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 flex flex-col gap-6">

<div className="bg-white/90 backdrop-blur border border-slate-100 rounded-2xl shadow-sm p-2">
<div className="flex items-center gap-2">
<button className="tab-btn flex-1 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-700 bg-slate-50" data-tab="upcoming">Upcoming</button>
<button className="tab-btn flex-1 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50" data-tab="requested">Requested<span className="ml-2 inline-flex items-center justify-center h-5 min-w-[1.25rem] rounded-full bg-cyan-100 text-cyan-700 text-[10px] px-1.5">2</span></button>
<button className="tab-btn flex-1 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50" data-tab="archive">Archive</button>
</div>

<div className="mt-3">

<div className="tab-panel space-y-4" data-panel="upcoming">

<div className="rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs opacity-90">Sep 20, 2018</p>
<h3 className="text-lg font-semibold tracking-tight">Today's appointments</h3>
</div>
<i className="w-5 h-5 opacity-90" data-lucide="calendar-clock"></i>
</div>
<div className="mt-3 space-y-2">
<div className="bg-white/10 backdrop-blur rounded-xl px-3 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">9:15 AM</span>
<i className="w-4 h-4 opacity-90" data-lucide="timer"></i>
</div>
<div className="flex items-center gap-2">
<img alt="P1" className="w-7 h-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop&crop=faces" />
<span className="text-sm">Gregory James</span>
<i className="w-4 h-4 opacity-90" data-lucide="video"></i>
</div>
</div>
<div className="bg-white/10 backdrop-blur rounded-xl px-3 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">11:30 AM</span>
<i className="w-4 h-4 opacity-90" data-lucide="timer"></i>
</div>
<div className="flex items-center gap-2">
<img alt="P2" className="w-7 h-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&h=200&fit=crop&crop=faces" />
<span className="text-sm">Eveline Peterson</span>
<i className="w-4 h-4 opacity-90" data-lucide="video"></i>
</div>
</div>
<div className="bg-white/10 backdrop-blur rounded-xl px-3 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">12:30 PM</span>
<i className="w-4 h-4 opacity-90" data-lucide="timer"></i>
</div>
<div className="flex items-center gap-2">
<img alt="P3" className="w-7 h-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<span className="text-sm">Violetta Smith</span>
<i className="w-4 h-4 opacity-90" data-lucide="video"></i>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-2xl shadow-sm">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<h4 className="text-sm font-medium text-slate-800 tracking-tight">This Week</h4>
<button className="p-1.5 rounded-lg hover:bg-slate-50">
<i className="w-4 h-4 text-slate-600" data-lucide="settings-2"></i>
</button>
</div>
<div className="divide-y divide-slate-100">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-12 text-sm text-slate-600">Sep 22</div>
<span className="text-slate-900 text-sm">1:00 PM</span>
</div>
<div className="flex items-center gap-3">
<img alt="Joy" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&fit=crop&crop=faces" />
<span className="text-sm text-slate-700">Joy Barnett</span>
</div>
</div>
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-12 text-sm text-slate-600">Sep 23</div>
<span className="text-slate-900 text-sm">10:00 AM</span>
</div>
<div className="flex items-center gap-3">
<img alt="Anna" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<span className="text-sm text-slate-700">Anna Marie Johansson</span>
</div>
</div>
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-12 text-sm text-slate-600">Sep 23</div>
<span className="text-slate-900 text-sm">11:30 AM</span>
</div>
<div className="flex items-center gap-3">
<img alt="Romuald" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&h=200&fit=crop&crop=faces" />
<span className="text-sm text-slate-700">Romuald Markinson</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-2xl shadow-sm">
<div className="px-4 py-3 border-b border-slate-100">
<h4 className="text-sm font-medium text-slate-800 tracking-tight">Next Week</h4>
</div>
<div className="divide-y divide-slate-100">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-12 text-sm text-slate-600">Sep 24</div>
<span className="text-slate-900 text-sm">9:30 AM</span>
</div>
<div className="flex items-center gap-3">
<img alt="Joy2" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&h=200&fit=crop&crop=faces" />
<span className="text-sm text-slate-700">Joy Barnett</span>
</div>
</div>
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-12 text-sm text-slate-600">Sep 24</div>
<span className="text-slate-900 text-sm">11:30 AM</span>
</div>
<div className="flex items-center gap-3">
<img alt="Anna2" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<span className="text-sm text-slate-700">Anna Marie Johansson</span>
</div>
</div>
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-12 text-sm text-slate-600">Sep 25</div>
<span className="text-slate-900 text-sm">1:00 PM</span>
</div>
<div className="flex items-center gap-3">
<img alt="Romuald2" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=200&h=200&fit=crop&crop=faces" />
<span className="text-sm text-slate-700">Romuald Markinson</span>
</div>
</div>
</div>
</div>
</div>

<div className="tab-panel hidden space-y-3" data-panel="requested">
<div className="rounded-2xl border border-slate-100 bg-white p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Req1" className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=200&h=200&fit=crop&crop=faces" />
<div>
<p className="text-sm font-medium text-slate-800">Samuel Green</p>
<p className="text-xs text-slate-500">Requested: Sep 26, 10:00 AM</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 hover:bg-slate-100">View</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500 text-white hover:bg-emerald-600">Approve</button>
</div>
</div>
<div className="rounded-2xl border border-slate-100 bg-white p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Req2" className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&h=200&fit=crop&crop=faces" />
<div>
<p className="text-sm font-medium text-slate-800">Nora Flores</p>
<p className="text-xs text-slate-500">Requested: Sep 27, 1:30 PM</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 hover:bg-slate-100">View</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500 text-white hover:bg-emerald-600">Approve</button>
</div>
</div>
</div>

<div className="tab-panel hidden" data-panel="archive">
<div className="rounded-2xl border border-slate-100 bg-white p-6 text-center">
<p className="text-sm text-slate-500">No archived appointments yet.</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
<img alt="Mountains" className="w-full h-44 md:h-52 object-cover" src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1400&auto=format&fit=crop" />
</div>
</div>
</section>
</header></main>




    </>
  );
}
