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



      // Icons
      lucide.createIcons();

      // Timer (simple demo)
      const timerEl = document.getElementById('live-timer');
      let parts = timerEl.textContent.split(':').map(Number);
      let elapsed = parts[0]*3600 + parts[1]*60 + parts[2];
      let running = true;
      let timerInt = setInterval(() => {
        if (!running) return;
        elapsed++;
        const h = String(Math.floor(elapsed/3600)).padStart(2,'0');
        const m = String(Math.floor((elapsed%3600)/60)).padStart(2,'0');
        const s = String(elapsed%60).padStart(2,'0');
        timerEl.textContent = `${h}:${m}:${s}`;
      }, 1000);
      document.getElementById('timer-pause').addEventListener('click', () => running = false);
      document.getElementById('timer-play').addEventListener('click', () => running = true);

      // Chart.js Line chart
      const ctx = document.getElementById('weightChart');
      const dataPoints = [76, 74.5, 73.2, 74.1, 72.8, 73.4];
      const pointColors = dataPoints.map((v, i) => i === 3 ? '#f59e0b' : '#e5e7eb');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Weight (kg)',
            data: dataPoints,
            tension: 0.38,
            borderColor: '#fef3c7',
            backgroundColor: 'rgba(251, 191, 36, 0.15)',
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBorderWidth: 2,
            pointBackgroundColor: pointColors,
            pointBorderColor: '#f59e0b',
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: { color: '#e7e5e4', font: { weight: '500' } },
              grid: { color: 'rgba(231,229,228,0.08)' }
            },
            y: {
              ticks: { color: '#e7e5e4', font: { weight: '500' } },
              grid: { color: 'rgba(231,229,228,0.08)' },
              suggestedMin: 70,
              suggestedMax: 78
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#111827',
              titleColor: '#fff',
              bodyColor: '#e5e7eb',
              displayColors: false,
              callbacks: {
                label: (ctx) => ` ${ctx.parsed.y} kg`
              }
            }
          }
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
      
<div className="mx-auto max-w-7xl px-4 py-8">

<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

<section className="lg:col-span-4 space-y-6">

<article className="relative overflow-hidden h-80 bg-stone-900 rounded-3xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<img alt="" className="h-full w-full object-cover" src="/assets/d7d9b7c8-28b9-4129-953f-61dd5c9ecc6c_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-tr to-transparent from-stone-900/70 via-stone-900/10 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"></div>
<div className="absolute bottom-5 left-5 right-5">
<p className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Ignite Your Momentum</p>
<p className="mt-1 text-sm text-stone-200">Daily habits that compound into lasting results.</p>
</div>
<button aria-label="Start" className="absolute right-5 bottom-5 inline-flex h-11 w-11 items-center justify-center rounded-full shadow-md ring-1 bg-white text-stone-900 ring-stone-200 hover:bg-stone-50">
<svg className="lucide lucide-play h-5 w-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</article>

<div className="grid grid-cols-2 gap-4">

<div className="ring-1 ring-stone-200 h-44 bg-white rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-stone-500">Heart Rate</p>
<svg className="lucide lucide-heart h-4 w-4 text-rose-500" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<div className="mt-4 flex items-center justify-center">
<div className="relative h-24 w-24">
<div className="absolute inset-0 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-rose-400 via-orange-300 to-amber-400"></div>
<div className="absolute inset-1 rounded-full bg-white"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<p className="text-xl font-semibold tracking-tight">120</p>
<p className="text-xs text-stone-500">BPM</p>
</div>
</div>
</div>
</div>
</div>

<div className="ring-1 ring-stone-200 h-44 bg-white rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-stone-500">Distance</p>
<svg className="lucide lucide-navigation h-4 w-4 text-blue-600" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</div>
<p className="mt-3 text-2xl font-semibold tracking-tight">3.37<span className="ml-1 text-base font-medium text-stone-500">km</span></p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eac34b73-c643-4433-82f0-5ec79e8f5fc9_320w.jpg" style={{}} />
<img alt="" className="h-6 w-6 -ml-2 rounded-full object-cover ring-2 ring-white" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5c473785-e642-4d2f-8148-f2bfbb42dbf0_320w.jpg" />
</div>
<button className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium bg-stone-900 text-stone-100 hover:bg-stone-800">
                  Running
                  <svg className="lucide lucide-arrow-right h-3 w-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="ring-1 ring-stone-200 h-44 bg-white rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-stone-500">Sleep</p>
<svg className="lucide lucide-moon h-4 w-4 text-indigo-600" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
<p className="mt-3 text-2xl font-semibold tracking-tight">7h 32m</p>
<div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-stone-200">
<div className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-purple-500" style={{width: `89%`}}></div>
</div>
<p className="mt-2 text-xs text-stone-500">Quality: 89%</p>
</div>

<div className="ring-1 ring-stone-200 h-44 bg-white rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-stone-500">Active</p>
<svg className="lucide lucide-zap h-4 w-4 text-yellow-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<p className="mt-3 text-2xl font-semibold tracking-tight">58<span className="ml-1 text-base font-medium text-stone-500">min</span></p>
<div className="mt-3 flex items-center gap-2">
<div className="flex-1 h-2 overflow-hidden rounded-full bg-stone-200">
<div className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" style={{width: `97%`}}></div>
</div>
<p className="text-xs font-medium text-stone-600">97%</p>
</div>
<p className="mt-2 text-xs text-stone-500">Goal: 60 min</p>
</div>
</div>

<div className="ring-1 ring-stone-200 bg-white rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-stone-500">Tracking Now</p>
<div className="flex items-center gap-2 text-stone-500">
<button aria-label="Pause" className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-stone-200 hover:bg-stone-50" id="timer-pause">
<svg className="lucide lucide-pause h-4 w-4" data-lucide="pause" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="5" x="14" y="3"></rect><rect height="18" rx="1" width="5" x="5" y="3"></rect></svg>
</button>
<button aria-label="Play" className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-stone-200 hover:bg-stone-50" id="timer-play">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>
<p className="mt-3 text-3xl font-semibold tracking-tight tabular-nums" id="live-timer">00:18:16</p>
<div className="mt-4 grid grid-cols-3 gap-3 text-sm">
<div className="rounded-2xl p-3 ring-1 bg-stone-50 ring-stone-200">
<p className="text-stone-500">5d ago</p>
<p className="font-medium">10.37km</p>
</div>
<div className="rounded-2xl p-3 ring-1 bg-stone-50 ring-stone-200">
<p className="text-stone-500">8d ago</p>
<p className="font-medium">8.21km</p>
</div>
<div className="rounded-2xl p-3 ring-1 bg-stone-50 ring-stone-200">
<p className="text-stone-500">14d ago</p>
<p className="font-medium">9.54km</p>
</div>
</div>
</div>
</section>

<section className="lg:col-span-5 space-y-6">

<article className="ring-1 ring-stone-200 h-[580px] flex flex-col bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="mb-5 flex items-start justify-between">
<div className="">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Daily Activity</h2>
<p className="text-sm text-stone-500">Mon 17 — Sun 23</p>
</div>
<button className="rounded-xl p-2 text-stone-500 ring-1 ring-transparent hover:bg-stone-50 hover:ring-stone-200">
<svg className="lucide lucide-more-horizontal h-5 w-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="mb-6 grid grid-cols-7 gap-2 text-center text-xs font-medium text-stone-600">
<div className="rounded-xl px-3 py-2 bg-stone-900 text-stone-100">
<p className="font-medium">Mon</p>
<p className="mt-0.5 text-sm font-semibold tracking-tight">17</p>
</div>
<div className="rounded-xl px-3 py-2 ring-1 bg-stone-50 ring-stone-200">
<p>Tue</p><p className="mt-0.5 font-medium">18</p>
</div>
<div className="rounded-xl px-3 py-2 ring-1 bg-stone-50 ring-stone-200">
<p>Wed</p><p className="mt-0.5 font-medium">19</p>
</div>
<div className="rounded-xl px-3 py-2 ring-1 bg-stone-50 ring-stone-200">
<p>Thu</p><p className="mt-0.5 font-medium">20</p>
</div>
<div className="rounded-xl px-3 py-2 ring-1 bg-stone-50 ring-stone-200">
<p>Fri</p><p className="mt-0.5 font-medium">21</p>
</div>
<div className="rounded-xl px-3 py-2 ring-1 bg-stone-50 ring-stone-200">
<p>Sat</p><p className="mt-0.5 font-medium">22</p>
</div>
<div className="rounded-xl px-3 py-2 ring-1 bg-stone-50 ring-stone-200">
<p>Sun</p><p className="mt-0.5 font-medium">23</p>
</div>
</div>
<div className="flex-1 space-y-3">

<div className="flex items-center gap-4 rounded-2xl p-4 ring-1 bg-stone-50 ring-stone-200">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
<svg className="lucide lucide-footprints h-5 w-5" data-lucide="footprints" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"></path><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"></path><path d="M16 17h4"></path><path d="M4 13h4"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<p className="font-medium">Steps</p>
<p className="text-stone-500">Completed</p>
</div>
<div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-200">
<div className="h-full rounded-full bg-gradient-to-r to-orange-500 from-amber-400" style={{width: `100%`}}></div>
</div>
<p className="mt-1 text-xs text-stone-500">22,000 / 22,000</p>
</div>
<p className="text-sm font-medium">100%</p>
</div>

<div className="flex items-center gap-4 rounded-2xl p-4 ring-1 bg-stone-50 ring-stone-200">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
<svg className="lucide lucide-flame h-5 w-5" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<p className="font-medium">Calories</p>
<p className="text-stone-500">In Progress</p>
</div>
<div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-200">
<div className="h-full rounded-full bg-gradient-to-r to-pink-500 from-rose-400" style={{width: `85%`}}></div>
</div>
<p className="mt-1 text-xs text-stone-500">1,420 / 1,680 cal</p>
</div>
<p className="text-sm font-medium">85%</p>
</div>

<div className="flex items-center gap-4 rounded-2xl p-4 ring-1 bg-stone-50 ring-stone-200">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
<svg className="lucide lucide-droplets h-5 w-5" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<p className="font-medium">Water</p>
<p className="text-stone-500">In Progress</p>
</div>
<div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-200">
<div className="h-full rounded-full bg-gradient-to-r to-cyan-500 from-blue-400" style={{width: `73%`}}></div>
</div>
<p className="mt-1 text-xs text-stone-500">2.2 / 3 L</p>
</div>
<p className="text-sm font-medium">73%</p>
</div>

<div className="flex items-center gap-4 rounded-2xl p-4 ring-1 bg-stone-50 ring-stone-200">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
<svg className="lucide lucide-brain h-5 w-5" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<p className="font-medium">Meditation</p>
<p className="text-stone-500">Pending</p>
</div>
<div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-200">
<div className="h-full rounded-full bg-gradient-to-r to-green-500 from-emerald-400" style={{width: `0%`}}></div>
</div>
<p className="mt-1 text-xs text-stone-500">0 / 15 min</p>
</div>
<p className="text-sm font-medium">0%</p>
</div>
</div>
</article>

<article className="ring-1 ring-stone-200 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="mb-5 flex items-start justify-between">
<div className="">
<h2 className="text-xl font-semibold tracking-tight">Today's Workouts</h2>
<p className="text-sm text-stone-500">3 sessions planned</p>
</div>
<button className="rounded-xl p-2 text-stone-500 hover:bg-stone-50">
<svg className="lucide lucide-plus h-5 w-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-4 rounded-2xl p-4 ring-1 bg-emerald-50 ring-emerald-200">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white">
<svg className="lucide lucide-check h-5 w-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium">Morning Run</p>
<p className="text-sm text-stone-500">6:30 AM • 45 min</p>
</div>
<span className="text-xs font-medium text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">Completed</span>
</div>
<div className="flex items-center gap-4 rounded-2xl p-4 ring-1 bg-stone-50 ring-stone-200">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
<svg className="lucide lucide-dumbbell h-5 w-5" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium">Strength Training</p>
<p className="text-sm text-stone-500">2:00 PM • 60 min</p>
</div>
<span className="text-xs font-medium text-orange-700 bg-orange-100 px-2 py-1 rounded-full">Next</span>
</div>
<div className="flex items-center gap-4 rounded-2xl p-4 ring-1 bg-stone-50 ring-stone-200">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
<svg className="lucide lucide-stretch-horizontal h-5 w-5" data-lucide="stretch-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="2" width="20" x="2" y="4"></rect><rect height="6" rx="2" width="20" x="2" y="14"></rect></svg>
</div>
<div className="flex-1">
<p className="font-medium">Yoga Session</p>
<p className="text-sm text-stone-500">7:00 PM • 30 min</p>
</div>
<span className="text-xs font-medium text-stone-600 bg-stone-200 px-2 py-1 rounded-full">Pending</span>
</div>
</div>
</article>
</section>

<section className="lg:col-span-3 space-y-6">

<article className="overflow-hidden h-80 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-stone-100 bg-cover rounded-3xl pt-6 pr-6 pb-6 pl-6 bg-center bg-[url(/assets/f3e4ed66-8b4b-4d7a-b556-68b4b142faae_800w.jpg)]" style={{}}>
<div className="mb-4 flex items-start justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight">Body Weight</h2>
<p className="text-sm text-stone-300">72 kg target</p>
</div>
<button className="rounded-xl p-2 text-stone-300 hover:bg-stone-700/40">
<svg className="lucide lucide-ellipsis h-5 w-5" data-lucide="ellipsis" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<p className="text-sm text-stone-300">Monthly progress</p>
<div className="h-44 bg-stone-900/30 rounded-2xl mt-3 pt-3 pr-3 pb-3 pl-3">
<div className="relative h-full w-full">
<canvas className="h-full w-full" height="304" id="weightChart" style={{display: `block`, boxSizing: `border-box`, height: `152px`, width: `222px`}} width="444"></canvas>
</div>
</div>
</article>

<article className="ring-1 ring-stone-200 h-80 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="mb-4 flex items-start justify-between">
<div className="">
<h2 className="text-xl font-semibold tracking-tight">Nutrition</h2>
<p className="text-sm text-stone-500">Today's intake</p>
</div>
<button className="rounded-xl p-2 text-stone-500 hover:bg-stone-50">
<svg className="lucide lucide-utensils h-5 w-5" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</button>
</div>
<div className="space-y-4">
<div className="text-center">
<div className="relative mx-auto h-24 w-24">
<div className="absolute inset-0 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-green-400 via-yellow-400 to-red-400"></div>
<div className="absolute inset-2 rounded-full bg-white"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<p className="text-lg font-semibold tracking-tight">1,420</p>
<p className="text-xs text-stone-500">kcal</p>
</div>
</div>
</div>
<p className="mt-2 text-sm text-stone-500">680 kcal remaining</p>
</div>
<div className="grid grid-cols-3 gap-3 text-center">
<div className="rounded-2xl p-3 ring-1 bg-red-50 ring-red-200">
<div className="h-2 w-full overflow-hidden rounded-full bg-red-200 mb-2">
<div className="h-full rounded-full bg-red-400" style={{width: `65%`}}></div>
</div>
<p className="text-xs font-medium text-red-600">Carbs</p>
<p className="text-sm font-semibold">178g</p>
</div>
<div className="rounded-2xl p-3 ring-1 bg-blue-50 ring-blue-200">
<div className="h-2 w-full overflow-hidden rounded-full bg-blue-200 mb-2">
<div className="h-full rounded-full bg-blue-400" style={{width: `80%`}}></div>
</div>
<p className="text-xs font-medium text-blue-600">Protein</p>
<p className="text-sm font-semibold">92g</p>
</div>
<div className="rounded-2xl p-3 ring-1 bg-yellow-50 ring-yellow-200">
<div className="h-2 w-full overflow-hidden rounded-full bg-yellow-200 mb-2">
<div className="h-full rounded-full bg-yellow-400" style={{width: `45%`}}></div>
</div>
<p className="text-xs font-medium text-yellow-600">Fats</p>
<p className="text-sm font-semibold">38g</p>
</div>
</div>
</div>
</article>

<article className="ring-1 ring-stone-200 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="mb-4 flex items-start justify-between">
<div className="">
<h2 className="text-lg font-semibold tracking-tight">Friends</h2>
<p className="text-sm text-stone-500">Recent activity</p>
</div>
<button className="rounded-xl p-2 text-stone-500 hover:bg-stone-50">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c6c3834b-2622-431b-8e32-b6ab8e8dbfc9_800w.jpg" />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Sarah Chen</p>
<p className="text-xs text-stone-500">Completed 10km run</p>
</div>
<span className="text-xs text-stone-400">2h</span>
</div>
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eac34b73-c643-4433-82f0-5ec79e8f5fc9_320w.jpg" style={{}} />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Mike Johnson</p>
<p className="text-xs text-stone-500">New PR in deadlifts</p>
</div>
<span className="text-xs text-stone-400">4h</span>
</div>
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e9f01031-12a2-4214-96af-13f1facd3e61_320w.jpg" style={{}} />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Emma Davis</p>
<p className="text-xs text-stone-500">Joined yoga challenge</p>
</div>
<span className="text-xs text-stone-400">6h</span>
</div>
</div>
</article>
</section>
</div>
</div>





    </>
  );
}
