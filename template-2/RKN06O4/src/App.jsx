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
      
    // Lucide Icons
    lucide.createIcons();

    // Finance Chart
    const ctx = document.getElementById('financeChart');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Paid', 'Balance'],
        datasets: [{ 
          data: [18600, 11400],
          backgroundColor: ['#4f46e5', '#d1d5db'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '75%',
        plugins: { legend: { display: false } }
      }
    });

    // Entry animations (stagger)
    document.addEventListener('DOMContentLoaded', () => {
      const animatedSections = document.querySelectorAll('[class*="animate__"]');
      animatedSections.forEach((sec, idx) => {
        sec.style.visibility = 'hidden';
        sec.addEventListener('animationstart', () => sec.style.visibility = 'visible');
        sec.classList.add(`animate__delay-${idx}s`);
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
      

<div className="min-h-screen flex flex-col">

<header className="shadow-sm bg-white">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between animate__animated animate__fadeInDown animate__delay-0s" style={{visibility: `visible`}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-chevron-left w-5 h-5 text-gray-500 cursor-pointer hover:text-indigo-600" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<h1 className="text-2xl tracking-tight font-semibold">Project Dashboard</h1>
</div>
<div className="text-sm text-gray-500">Last updated: <span className="font-medium text-gray-700">2 hrs ago</span></div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 py-6 space-y-6 flex-1">

<div className="flex flex-col lg:flex-row gap-6 animate__animated animate__fadeInUp animate__delay-1s bg-white rounded-lg pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{visibility: `visible`}}>
<div className="flex-1 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold text-gray-900">Kitchen Remodel — #PR-2831</h2>
<span className="inline-flex items-center gap-2 px-3 py-[2px] rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> In Progress
            </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
<div className="flex items-start gap-3">
<svg className="lucide lucide-user w-4 h-4 text-gray-500 mt-[2px]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<div className=""><span className="font-medium">Client:</span> Samantha Lee <br /> <a className="text-indigo-600 hover:underline" href="tel:+15555555">+1 555 555 1234</a></div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 text-gray-500 mt-[2px]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
                729 Spruce St, Denver CO <br />
<a className="text-indigo-600 hover:underline" href="https://maps.google.com" target="_blank">View Map</a>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-calendar w-4 h-4 text-gray-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<div className=""><span className="font-medium">Start:</span> 12 Aug 23 <br /> <span className="font-medium">Target:</span> 02 Oct 23</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-hard-hat w-4 h-4 text-gray-500 mt-[2px]" data-lucide="hard-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M14 6a6 6 0 0 1 6 6v3"></path><path d="M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></svg>
<div className=""><span className="font-medium">Manager:</span> Luis Herrera</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-layers w-4 h-4 text-gray-500 mt-[2px]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<div className=""><span className="font-medium">Job Type:</span> Remodel</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-percent w-4 h-4 text-gray-500 mt-[2px]" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
<div className="flex flex-col w-full">
<span className="font-medium mb-1">Completion: 45%</span>
<div className="w-full bg-gray-200 rounded">
<div className="bg-indigo-600 h-2 rounded" style={{width: `45%`}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm transition">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Add Note
          </button>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-800 rounded-md text-sm transition">
<svg className="lucide lucide-upload w-4 h-4" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>Upload Doc
          </button>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-800 rounded-md text-sm transition">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>Send Message
          </button>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-lg shadow-sm p-6 space-y-6 animate__animated animate__fadeInUp animate__delay-1s animate__delay-2s" style={{visibility: `visible`}}>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Financial Summary</h3>
<span className="inline-flex items-center gap-1 text-sm text-gray-500">
<svg className="lucide lucide-alert-circle w-4 h-4 text-red-500" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>  $5,200 at Risk
              </span>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
<div className="">
<div className="text-gray-500">Estimate Total</div>
<div className="font-medium">$32,000</div>
</div>
<div>
<div className="text-gray-500">Approved</div>
<div className="font-medium">$30,000</div>
</div>
<div className="">
<div className="text-gray-500">Paid to Date</div>
<div className="font-medium">$18,600</div>
</div>
<div>
<div className="text-gray-500">Balance</div>
<div className="font-medium">$11,400</div>
</div>
</div>

<div className="">
<div className="w-full max-w-xs mx-auto">
<canvas height="320" id="financeChart" style={{display: `block`, boxSizing: `border-box`, height: `320px`, width: `320px`}} width="320"></canvas>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200 text-sm">
<div className="">
<div className="text-gray-500">Insurance Carrier</div>
<div className="font-medium">State Farm — Claim #SF-91034</div>
</div>
<div>
<div className="text-gray-500">Adjuster</div>
<div className="font-medium"><a className="text-indigo-600 hover:underline" href="tel:+15551234567">Maria Diaz</a></div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm p-6 space-y-6 animate__animated animate__fadeInUp animate__delay-2s animate__delay-3s" style={{visibility: `visible`}}>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Schedule & Tasks</h3>
<button className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
                View Calendar <svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>

<div className="flex items-center gap-3 bg-indigo-50 border border-indigo-100 p-4 rounded">
<svg className="lucide lucide-clock w-5 h-5 text-indigo-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<div className="text-sm">
<span className="font-medium">Next Task:</span> Drywall installation — <span className="text-gray-600">due Sep 18 @ 3 pm</span>
</div>
</div>

<div className="space-y-4 text-sm">
<div className="flex items-start justify-between">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-500 mt-[2px]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div>Demo & Debris Removal</div>
</div>
<div className="text-gray-500">Aug 18</div>
</div>
<div className="flex items-start justify-between">
<div className="flex items-start gap-3">
<svg className="lucide lucide-alert-triangle w-4 h-4 text-orange-500 mt-[2px]" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<div>Electrical Rough-in</div>
</div>
<div className="text-gray-500">Sep 12</div>
</div>
<div className="flex items-start justify-between">
<div className="flex items-start gap-3">
<svg className="lucide lucide-circle w-4 h-4 text-gray-400 mt-[2px]" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
<div>Cabinet Installation</div>
</div>
<div className="text-gray-500">Sep 27</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm p-6 space-y-6 animate__animated animate__fadeInUp animate__delay-3s animate__delay-4s" style={{visibility: `visible`}}>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Recent Activity</h3>
<button className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
                View All <svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="space-y-4 text-sm">
<div className="flex items-start gap-3">
<img alt="" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=64&q=60" />
<div className="flex-1">
<div className="font-medium">Luis Herrera <span className="text-gray-500 text-xs ml-2">2 hrs ago</span></div>
<p className="text-gray-700">Uploaded moisture inspection report.</p>
</div>
</div>
<div className="flex items-start gap-3">
<img alt="" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=64&q=60" />
<div className="flex-1">
<div className="font-medium">Samantha Lee <span className="text-gray-500 text-xs ml-2">Yesterday</span></div>
<p className="text-gray-700">Approved change order CO-04 for upgraded backsplash tile.</p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-lg shadow-sm p-6 space-y-4 animate__animated animate__fadeInUp animate__delay-4s animate__delay-5s" style={{visibility: `visible`}}>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Attachments</h3>
<button className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
                Upload <svg className="lucide lucide-upload w-4 h-4" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</button>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="" className="w-full h-24 object-cover rounded" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=300&q=60" />
<img alt="" className="w-full h-24 object-cover rounded" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="" className="w-full h-24 object-cover rounded" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<img alt="" className="w-full h-24 object-cover rounded" src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=300&q=60" />
</div>
</div>

<div className="bg-white rounded-lg shadow-sm p-6 space-y-4 animate__animated animate__fadeInUp animate__delay-5s animate__delay-6s" style={{visibility: `visible`}}>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Change Orders</h3>
<button className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
                New <svg className="lucide lucide-file-plus w-4 h-4" data-lucide="file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
</button>
</div>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span>CO-03 — Drywall Upgrade</span>
</div>
<span className="font-medium">$1,200</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-orange-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>CO-04 — Backsplash Tile</span>
</div>
<span className="font-medium">$850</span>
</div>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm p-6 space-y-4 animate__animated animate__fadeInUp animate__delay-6s animate__delay-7s" style={{visibility: `visible`}}>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Compliance & Safety</h3>
<button className="text-sm text-indigo-600 hover:underline flex items-center gap-1">
                Log Issue <svg className="lucide lucide-flag w-4 h-4" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg>
</button>
</div>
<div className="space-y-3 text-sm">
<div className="flex items-start gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-500 mt-[2px]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div>Signed Homeowner Waiver</div>
</div>
<div className="flex items-start gap-2">
<svg className="lucide lucide-alert-triangle w-4 h-4 text-orange-500 mt-[2px]" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<div>Safety checklist due for next site visit</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t">
<div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500 flex items-center justify-between">
<span>© 2023 NovaBuild Software</span>
<a className="hover:underline" href="#">Privacy & Terms</a>
</div>
</footer>
</div>



    </>
  );
}
