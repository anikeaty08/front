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

    // Chart.js setup
    const ctx = document.getElementById('glucoseChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            label: 'Glucose (mg/dL)',
            data: [112,125,118,134,119,128,122],
            fill: false,
            tension:.4,
            borderWidth:2,
            borderColor:'#10b981',
            pointRadius:3,
            pointBackgroundColor:'#10b981'
          }]
        },
        options: {
          responsive:true,
          maintainAspectRatio:false,
          scales:{
            y:{beginAtZero:false,suggestedMin:80,suggestedMax:150,grid:{color:'rgba(0,0,0,0.05)'}},
            x:{grid:{display:false}}
          },
          plugins:{legend:{display:false}}
        }
      });
    }
  
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
      
<div className="mx-auto max-w-7xl px-4 py-10 lg:py-16">

<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

<figure className="relative overflow-hidden rounded-xl shadow-sm opacity-0 bg-neutral-800" style={{animation: 'fadeUp .8s .15s forwards'}}>
<img alt="Portrait of Dr. Vanessa Blake" className="h-full w-full object-cover transition hover:scale-105 duration-500 ease-out" src="https://cdn.midjourney.com/d4ba56bd-f245-4307-97d7-e032de66d0d5/0_0.png?w=800&amp;q=80"/>
<figcaption className="absolute inset-0 flex flex-col pt-4 pr-4 pb-4 pl-4 justify-end">
<p className="text-lg font-medium tracking-tight font-sans text-[#f]" style={{}}>Dr. Vanessa Blake</p>
<p className="text-xs font-sans text-[#f]/80">Endocrinologist</p>
</figcaption>
</figure>

<div className="flex flex-col gap-4 rounded-xl p-6 shadow-sm ring-1 opacity-0 bg-black ring-neutral-800/60" style={{animation: 'fadeUp .8s .25s forwards'}}>
<div className="flex items-center justify-between text-xs text-neutral-500" style={{}}>
<span className="inline-flex items-center gap-1 font-sans">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Thu • 14:30
          </span>
<span className="rounded-full px-2 py-0.5 font-sans bg-amber-950 text-amber-400" style={{}}>Begins in 2 h</span>
</div>
<div className="flex items-center gap-3">
<div className="flex-1">
<p className="text-sm font-medium font-sans">Aria Lambert</p>
<p className="text-xs text-neutral-500 font-sans" style={{}}>Patient • Type 1 Diabetes</p>
</div>
<button className="inline-flex gap-1 transition focus-visible:ring focus-visible:ring-neutral-400 hover:bg-neutral-300 text-[#f] text-xs font-medium text-gray-950 bg-neutral-100 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 items-center" style={{}}>
<svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg> Chat now
          </button>
</div>
<p className="rounded-lg px-3 py-2 text-sm leading-relaxed font-sans bg-neutral-900">
          Hey Dr. Blake—quick heads up that my glucose is running a bit low this morning.
        </p>
</div>

<div className="flex flex-col overflow-hidden rounded-xl shadow-sm ring-1 opacity-0 bg-black ring-neutral-800/60" style={{animation: 'fadeUp .8s .35s forwards'}}>
<div className="flex items-center justify-between gap-2 p-4">
<span className="font-semibold font-sans">PulseSync</span>
<div className="flex gap-3">
<svg className="lucide lucide-layout-dashboard h-5 w-5 text-neutral-500" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<svg className="lucide lucide-bell h-5 w-5 text-neutral-500" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<svg className="lucide lucide-settings h-5 w-5 text-neutral-500" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
<img alt="App dashboard preview screenshot" className="h-full w-full transition hover:scale-105 duration-500 ease-out object-cover" src="https://cdn.midjourney.com/036cbd57-a3a4-4bf6-a766-dc4a511c5552/0_3.png?w=800&amp;q=80" style={{}}/>
</div>

<div className="flex flex-col gap-4 opacity-0 text-center bg-[url(https://cdn.midjourney.com/83beba14-d996-4dcc-a6fa-bc51b4c7edb3/0_3.png?w=800&amp;q=80)] bg-cover rounded-xl pt-10 pr-10 pb-10 pl-10 shadow-sm items-center justify-center bg-emerald-300 text-[#f]" style={{animation: '0.8s ease 0.45s 1 normal forwards running fadeUp'}}>
<svg className="lucide lucide-activity-square stroke-[3] w-[42px] h-[42px]" data-lucide="activity-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" style={{width: '42px', height: '42px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M17 12h-2l-2 5-2-10-2 5H7"></path></svg>
<h1 className="text-3xl tracking-tight font-instrument-serif font-normal">PulseSync</h1>
<p className="max-w-xs text-sm font-sans text-[#f]/80">Data-driven care that fits your life.</p>
</div>

<div className="relative flex aspect-[9/16] overflow-hidden rounded-xl shadow-sm sm:col-span-2 lg:col-span-1 opacity-0 bg-black" style={{animation: 'fadeUp .8s .55s forwards'}}>
<img alt="PulseSync mobile interface" className="h-full w-full object-cover" src="https://cdn.midjourney.com/534ac97f-e323-40f2-9863-38dfecd4f520/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t via-transparent p-5 from-white/60">
<h2 className="text-lg font-medium tracking-tight font-sans text-[#f]" style={{}}>Daily Symptom Check-in</h2>
<button className="mt-3 inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-medium backdrop-blur transition focus-visible:ring focus-visible:ring-neutral-400 font-sans bg-black/90 text-neutral-100 hover:bg-black" style={{}}>
<svg className="lucide lucide-edit-3 h-4 w-4" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg> Start now
          </button>
</div>
</div>

<div className="flex flex-col justify-between gap-6 rounded-xl p-6 shadow-sm ring-1 opacity-0 bg-black ring-neutral-800/60" style={{animation: 'fadeUp .8s .65s forwards'}}>
<div className="">
<p className="text-xs font-semibold tracking-widest text-neutral-500 font-sans" style={{}}>STYLE GUIDE</p>
<p className="mt-2 text-lg font-semibold font-sans">Typography</p>
<p className="text-neutral-500 font-sans" style={{}}>Inter UI</p>
</div>
<p className="text-8xl font-normal tracking-tight font-instrument-serif">AaBb</p>
<div className="flex overflow-hidden rounded-lg">
<div className="h-6 w-1/4 bg-emerald-300" style={{}}></div>
<div className="h-6 w-1/4 bg-emerald-600" style={{}}></div>
<div className="h-6 w-1/4 bg-amber-700" style={{}}></div>
<div className="h-6 w-1/4 bg-neutral-200"></div>
</div>
</div>

<div className="flex flex-col ring-1 sm:col-span-2 opacity-0 ring-neutral-800/60 bg-black bg-[url(https://cdn.midjourney.com/f2203bfb-195c-4032-9303-d535c0e0a7ea/0_0.png?w=800&amp;q=80)] bg-cover rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm justify-between" style={{animation: 'fadeUp .8s .75s forwards'}}>
<h2 className="leading-tight text-6xl font-normal tracking-tight font-instrument-serif">Stay in sync with your care team—anytime, anywhere.</h2>
<div className="mt-6 flex flex-col gap-2">
<div className="self-end rounded-lg px-3 py-2 text-sm font-sans bg-emerald-900 text-emerald-100" style={{}}>Good morning, Ethan. How did you sleep?</div>
<div className="max-w-sm rounded-lg px-3 py-2 text-sm font-sans bg-neutral-900">Pretty well, around 7 hrs. My back pain is mild today.</div>
</div>
<div className="mt-4 flex items-center gap-2 self-end">
<img alt="Clinician avatar" className="h-6 w-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1578489758854-f134a358f08b?w=320&amp;q=80"/>
<span className="text-sm font-medium font-sans">PulseSync Coach</span>
</div>
</div>

<div className="flex flex-col rounded-xl p-6 shadow-sm ring-1 opacity-0 lg:col-span-1 sm:col-span-2 bg-black ring-neutral-800/60" style={{animation: 'fadeUp .8s .85s forwards'}}>
<div className="flex items-center justify-between">
<h3 className="text-5xl font-normal tracking-tight font-instrument-serif">Weekly Glucose Trend</h3>
<button aria-label="Refresh chart" className="rounded-md p-1 text-neutral-500 focus-visible:ring focus-visible:ring-neutral-400 hover:bg-neutral-900" style={{}}>
<svg className="lucide lucide-refresh-ccw h-4 w-4" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</button>
</div>
<div className="mt-4">

<div className="">
<canvas aria-label="Line chart of weekly glucose readings" className="" height="320" id="glucoseChart" style={{display: 'block', boxSizing: 'border-box', height: '160px', width: '240px'}} width="480"></canvas>
</div>
</div>
<p className="mt-4 text-xs text-neutral-500 font-sans" style={{}}>Target range: 80-130 mg/dL before meals.</p>
</div>
</div>
</div>



    </>
  );
}
