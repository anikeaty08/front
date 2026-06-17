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



      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });
    


      const ctx = document.getElementById('timelineChart').getContext('2d');

      const data = {
        labels: ['Website Revamp', 'Design System', 'User Flow'],
        datasets: [
          {
            label: 'Start',
            data: [2, 1, 4],
            backgroundColor: 'rgba(0,0,0,0)',
            stack: 'stack1',
            borderWidth: 0
          },
          {
            label: 'Duration',
            data: [6, 4, 3],
            backgroundColor: ['#34d399', '#a3e635', '#34d399'],
            borderRadius: 10,
            stack: 'stack1'
          }
        ]
      };

      new Chart(ctx, {
        type: 'bar',
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (c) => c.dataset.label === 'Duration' ? ` ${c.raw} hrs` : ''
              }
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.06)' },
              ticks: { color: 'rgba(255,255,255,0.7)', stepSize: 1, maxTicksLimit: 12 },
              border: { display: false }
            },
            y: {
              grid: { display: false },
              ticks: { color: 'rgba(255,255,255,0.9)' },
              border: { display: false },
              stacked: true
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0adac9ba-bb70-438a-b6bb-4e07745c5c39_3840w.jpg")'}}></div>
<main className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 h-full">
<section className="flex flex-col items-center gap-6 md:flex-row md:justify-center h-full">

<div className="relative w-[320px] md:w-[360px] h-[720px] rounded-[42px] bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">

<div className="relative h-12">
<div className="absolute left-1/2 -translate-x-1/2 top-2 notch"></div>
<div className="px-4 pt-2 flex items-center justify-between text-xs text-neutral-600">
<span>9:41</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<i className="w-4 h-4" data-lucide="cellular"></i>
<svg className="lucide lucide-battery w-4 h-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>
</div>

<div className="px-4 pb-24 space-y-4 overflow-y-auto h-[calc(100%-80px)]">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f997297-bf7a-497b-a750-c13916f1f09f_320w.jpg"/>
<div className="leading-tight">
<p className="text-[13px] text-neutral-500">Welcome back</p>
<p className="text-[17px] tracking-tight font-medium">Nolan Patel</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition">
<svg className="lucide lucide-bell h-4 w-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
</div>

<div className="grid-card bg-emerald-600/20 border-emerald-700/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start justify-between">
<div className="">
<p className="text-[22px] tracking-tight font-semibold text-neutral-900">Guide sprints with focus</p>
<p className="text-[13px] text-neutral-600 mt-1">Your sprint is nearing completion.</p>
</div>
<div className="h-10 w-10 rounded-full bg-emerald-400/90 flex items-center justify-center shadow">
<svg className="lucide lucide-flag w-5 h-5 text-neutral-900" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</div>
</div>
<div className="mt-4 inline-flex items-center gap-2 bg-neutral-900 text-white px-3 py-2 rounded-xl">
<svg className="lucide lucide-hourglass h-4 w-4" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
<span className="text-[13px] font-medium">6h 58m</span>
</div>
</div>

<div className="flex items-center justify-between">
<p className="text-[17px] tracking-tight font-medium">Your tasks</p>
<span className="text-[12px] bg-neutral-100 px-2 py-1 rounded-full">2</span>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<p className="font-medium tracking-tight">App Redesign</p>
<button className="p-1.5 rounded-full bg-neutral-100"><svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>
<div className="mt-3 flex items-center gap-2 text-[12px]">
<span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">Ongoing</span>
<span className="px-2 py-1 rounded-full bg-neutral-100">High</span>
</div>
<div className="mt-4">
<div className="w-full h-2 rounded-full bg-neutral-100">
<div className="h-2 rounded-full bg-emerald-400 w-2/3"></div>
</div>
<div className="mt-3 flex items-center justify-between text-[12px] text-neutral-600">
<div className="flex -space-x-2">
<img alt="" className="h-6 w-6 rounded-full border border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/202914e3-8b47-46de-95d5-7de1f0a0aa79_320w.jpg" style={{}}/>
<img alt="" className="h-6 w-6 rounded-full border border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ad72c649-95c4-41ec-aaa0-dda91ae572f0_320w.jpg"/>
<img alt="" className="h-6 w-6 rounded-full border border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e7842fa-2930-4398-a1b1-829010b57b42_320w.jpg"/>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">12 Jan</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span>5</span>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<p className="font-medium tracking-tight">Marketing Site</p>
<button className="p-1.5 rounded-full bg-neutral-100"><svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>
<div className="mt-3 flex items-center gap-2 text-[12px]">
<span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">Ongoing</span>
<span className="px-2 py-1 rounded-full bg-neutral-100">Medium</span>
</div>
<div className="mt-4">
<div className="w-full h-2 rounded-full bg-neutral-100">
<div className="h-2 rounded-full bg-lime-400 w-1/3"></div>
</div>
<div className="mt-3 flex items-center justify-between text-[12px] text-neutral-600">
<div className="flex -space-x-2">
<img alt="" className="h-6 w-6 rounded-full border border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/76672c59-0193-4795-ba6b-96fe356d9cab_320w.jpg"/>
<img alt="" className="h-6 w-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>22 Jan</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span>2</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0">
<div className="h-20 bg-neutral-900 text-white relative flex items-center justify-around rounded-t-[28px]">
<button className="p-3 rounded-xl bg-white/10">
<svg className="lucide lucide-house w-5 h-5" data-lucide="house" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</button>
<button className="p-3 rounded-xl bg-white/10">
<svg className="lucide lucide-check-square w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</button>
<button className="absolute -top-6 inset-x-0 mx-auto h-12 w-12 rounded-full bg-emerald-400 text-neutral-900 shadow-lg flex items-center justify-center">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="p-3 rounded-xl bg-white/10">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="p-3 rounded-xl bg-white/10">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</div>
</div>
</div>

<div className="relative w-[320px] md:w-[360px] h-[720px] rounded-[42px] bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">

<div className="relative h-12">
<div className="absolute left-1/2 -translate-x-1/2 top-2 notch"></div>
<div className="px-4 pt-2 flex items-center justify-between text-xs text-neutral-600">
<span className="">9:41</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<i className="w-4 h-4" data-lucide="cellular"></i>
<svg className="lucide lucide-battery w-4 h-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>
</div>

<div className="px-4 pb-8 space-y-4 overflow-y-auto h-[calc(100%-40px)]">
<div className="flex items-center justify-between">
<button className="p-2 rounded-full bg-neutral-100"><svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<p className="text-[17px] tracking-tight font-medium">Your Task</p>
<button className="p-2 rounded-full bg-neutral-100"><svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>

<div className="grid-card bg-emerald-600/20 border-emerald-700/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start justify-between">
<div className="">
<p className="text-[22px] tracking-tight font-semibold">Website Revamp</p>
<p className="text-[13px] text-neutral-600 mt-1">Complete redesign and optimization of company website with modern UI/UX principles and improved performance.</p>
<div className="mt-3 flex items-center gap-2 text-[12px] text-neutral-600">
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-badge-check w-3.5 h-3.5" data-lucide="badge-check" fill="none" height="24" round"="" stroke="currentColor-linecap=" strokeLinejoin="round" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Created by
        </span>
<span className="font-medium text-neutral-900">Avery Kim</span>
<span className="text-neutral-500">•</span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Due Aug 6
        </span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-[12px] text-neutral-600 mb-2">
<span className="">Progress: 75%</span>
<span className="">3 of 4 milestones</span>
</div>
<div className="w-full h-2 rounded-full bg-neutral-100">
<div className="h-2 rounded-full bg-emerald-400 w-3/4"></div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-medium">On Track</span>
<span className="px-2 py-1 rounded-full bg-neutral-100 text-neutral-700 text-[11px] font-medium">High Priority</span>
</div>
</div>
<button className="p-2 rounded-full bg-neutral-900 text-white"><svg className="lucide lucide-edit-3 w-4 h-4" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg></button>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-neutral-200 p-4">
<p className="text-[12px] text-neutral-500">Deadline</p>
<p className="text-[16px] tracking-tight font-medium mt-1">6 August</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-4">
<p className="text-[12px] text-neutral-500">People</p>
<div className="mt-1 flex -space-x-2">
<img alt="" className="h-7 w-7 rounded-full border border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/12b2cab4-2259-4eec-8be7-82f77140ba1a_320w.jpg"/>
<img alt="" className="h-7 w-7 rounded-full border border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e69511-114c-4d65-a0ef-dbc7f0997028_320w.jpg"/>
<img alt="" className="h-7 w-7 rounded-full border border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/202914e3-8b47-46de-95d5-7de1f0a0aa79_320w.jpg" style={{}}/>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<p className="tracking-tight font-medium">Goals</p>
<span className="text-[12px] bg-neutral-100 px-2 py-1 rounded-full">High</span>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<p className="text-[14px]">Design system</p>
</div>
<span className="text-[12px] px-2 py-1 rounded-full bg-neutral-100">High</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<p className="text-[14px]">Landing page</p>
</div>
<span className="text-[12px] px-2 py-1 rounded-full bg-neutral-100">High</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<p className="text-[14px]">Pricing module</p>
</div>
<span className="text-[12px] px-2 py-1 rounded-full bg-neutral-100">Low</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<p className="tracking-tight font-medium">Chat</p>
<svg className="lucide lucide-message-circle w-5 h-5 text-neutral-500" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<p className="text-[13px] text-neutral-600 mt-2">Keep discussions focused on outcomes and attach decisions here.</p>
</div>
</div>
</div>

<div className="relative w-[320px] md:w-[360px] h-[720px] rounded-[42px] bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">

<div className="relative h-12">
<div className="absolute left-1/2 -translate-x-1/2 top-2 notch"></div>
<div className="px-4 pt-2 flex items-center justify-between text-xs text-neutral-600">
<span>9:41</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<i className="w-4 h-4" data-lucide="cellular"></i>
<svg className="lucide lucide-battery w-4 h-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>
</div>

<div className="px-4 pb-6 space-y-4 overflow-hidden h-[calc(100%-40px)]">
<div className="flex items-center justify-between">
<p className="text-[17px] tracking-tight font-medium">Project Timeline</p>
<button className="p-2 rounded-full bg-neutral-100"><svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</div>

<div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
<div className="min-w-[64px] text-center px-3 py-2 rounded-2xl bg-neutral-100">
<p className="text-[12px] text-neutral-500">Mon</p>
<p className="text-[16px] tracking-tight font-medium">21</p>
</div>
<div className="min-w-[64px] text-center px-3 py-2 rounded-2xl">
<p className="text-[12px] text-neutral-500">Tue</p>
<p className="text-[16px] tracking-tight font-medium">22</p>
</div>
<div className="min-w-[64px] text-center px-3 py-2 rounded-2xl">
<p className="text-[12px] text-neutral-500">Wed</p>
<p className="text-[16px] tracking-tight font-medium">23</p>
</div>
<div className="min-w-[64px] text-center px-3 py-2 rounded-2xl">
<p className="text-[12px] text-neutral-500">Thu</p>
<p className="text-[16px] tracking-tight font-medium">24</p>
</div>
</div>

<div className="border-neutral-200 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<p className="tracking-tight font-medium">Today's meetings</p>
<span className="text-[12px] bg-neutral-100 px-2 py-1 rounded-full">2</span>
</div>
<div className="mt-3 space-y-4">
<div className="flex items-start justify-between">
<div className="flex items-start gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e9f01031-12a2-4214-96af-13f1facd3e61_320w.jpg" style={{}}/>
<div className="flex-1">
<p className="text-[14px] font-medium tracking-tight">Kickoff sync</p>
<p className="text-[12px] text-neutral-600">1:30 AM - 2:00 AM • 30 min</p>
<p className="text-[11px] text-neutral-500 mt-1">Project alignment and initial planning</p>
<div className="flex items-center gap-1 mt-1">
<svg className="w-3 h-3 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[11px] text-neutral-500">5 attendees</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="px-3 py-1.5 rounded-xl bg-emerald-400 text-neutral-900 text-[12px] font-medium shadow">Join</button>
<span className="text-[11px] text-emerald-600 font-medium">In 15 min</span>
</div>
</div>
<div className="flex items-start justify-between">
<div className="flex items-start gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb205ad5-97fe-4855-b28b-05c6a796f20f_320w.jpg" style={{}}/>
<div className="flex-1">
<p className="text-[14px] font-medium tracking-tight">Design review</p>
<p className="text-[12px] text-neutral-600">2:40 AM - 3:30 AM • 50 min</p>
<p className="text-[11px] text-neutral-500 mt-1">UI/UX mockup presentation and feedback</p>
<div className="flex items-center gap-3 mt-1">
<div className="flex items-center gap-1">
<svg className="w-3 h-3 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[11px] text-neutral-500">3 attendees</span>
</div>
<div className="flex items-center gap-1">
<svg className="w-3 h-3 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-[11px] text-neutral-500">Recurring</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-[12px] font-medium shadow">Join</button>
<span className="text-[11px] text-neutral-500">In 1h 25m</span>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-neutral-100">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-500">Next: Team standup at 4:00 PM</span>
<button className="text-[11px] text-blue-600 font-medium">View all</button>
</div>
</div>
</div>

<div className="rounded-3xl overflow-hidden">
<div className="bg-neutral-900 p-3">
<div className="bg-neutral-900 rounded-xl">
<div className="">
<canvas className="" height="440" id="timelineChart" style={{display: 'block', boxSizing: 'border-box', height: '220px', width: '304px'}} width="608"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>







    </>
  );
}
