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
// Photosynthesis Activity (Line)
const psCtx = document.getElementById('photosynthesisChart').getContext('2d');
const psGradient = psCtx.createLinearGradient(0, 0, 0, 120);
psGradient.addColorStop(0, 'rgba(34,197,94,0.35)');
psGradient.addColorStop(1, 'rgba(34,197,94,0.02)');
new Chart(psCtx, {
type: 'line',
data: {
labels: ['09:00','10:00','11:00','12:00','13:00','14:00','15:00'],
datasets: [{
label: 'Photosynthesis',
data: [38, 44, 61, 78, 72, 81, 88],
borderColor: '#34d399',
backgroundColor: psGradient,
pointRadius: 0,
tension: 0.35,
fill: true
}]
},
options: {
responsive: true,
maintainAspectRatio: false,
plugins: { legend: { display: false }, tooltip: { enabled: true } },
scales: {
x: { display: false },
y: { display: false, suggestedMin: 0, suggestedMax: 100 }
}
}
});
// Growth Progress (Doughnut)
const gpCtx = document.getElementById('growthChart').getContext('2d');
new Chart(gpCtx, {
type: 'doughnut',
data: {
labels: ['Growth', 'Remaining'],
datasets: [{
data: [76, 24],
backgroundColor: ['#22c55e', '#1f293780'],
borderWidth: 0,
hoverOffset: 2
}]
},
options: {
responsive: true,
maintainAspectRatio: false,
cutout: '70%',
plugins: { legend: { display: false }, tooltip: { enabled: false } }
}
});
});



// Simple ambient dots slider mock (no autoplay)
document.addEventListener('DOMContentLoaded', () => {
const dots = document.querySelectorAll('[data-dot]');
dots.forEach((d, idx) => {
d.addEventListener('click', () => {
dots.forEach(x => x.classList.remove('bg-white','w-6'));
d.classList.add('bg-white','w-6');
});
});
});



// Prevent layout shift on image load for better UX
document.addEventListener('DOMContentLoaded', () => {
const heroImg = document.getElementById('heroImage');
if (heroImg) {
heroImg.addEventListener('load', () => {
heroImg.classList.remove('opacity-0','translate-y-2');
heroImg.classList.add('opacity-100','translate-y-0');
});
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
      
<main className="md:px-6 lg:px-8 md:py-12 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<header className="sm:px-6 w-full max-w-7xl mr-auto ml-auto pt-6 pb-8">
<nav className="flex items-center justify-between">

<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[120px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b17a38a0-4cd6-4cd2-8c09-115fc6893097_320w.jpg)] bg-cover rounded" href="#" style={{marginRight: 'auto'}}></a>

<div className="hidden md:flex gap-8 gap-x-12 gap-y-8 items-center">
<a className="hover:text-slate-900 text-sm font-normal text-slate-600 tracking-tight font-sans" href="#work">About</a>
<a className="hover:text-slate-900 text-sm font-normal text-slate-600 tracking-tight font-sans" href="#about">Platform</a>
<a className="hover:text-slate-900 text-sm font-normal text-slate-600 tracking-tight font-sans" href="#skills">Our Mission</a>
<a className="text-slate-600 hover:text-slate-900 text-sm font-normal tracking-tight font-sans" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<button className="md:hidden h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-gray-50" type="button">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
<span className="sr-only font-sans">Open menu</span>
</button>
</div>
</nav>

<div className="md:hidden hidden mt-4 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="px-4 py-3 grid gap-2">
<a className="text-sm text-slate-700 tracking-tight py-1.5 hover:text-slate-900 font-sans" href="#work">Work</a>
<a className="text-sm text-slate-700 tracking-tight py-1.5 hover:text-slate-900 font-sans" href="#about">About</a>
<a className="text-sm text-slate-700 tracking-tight py-1.5 hover:text-slate-900 font-sans" href="#skills">Skills</a>
<a className="text-sm text-slate-700 tracking-tight py-1.5 hover:text-slate-900 font-sans" href="#contact">Contact</a>
</div>
<div className="border-t border-slate-200 px-4 py-3">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-slate-900 hover:bg-slate-800" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
<span className="font-sans">Download Resume</span>
</a>
</div>
</div>
</header><section className="overflow-hidden md:bg-transparent bg-white rounded-3xl mt-8 mb-20 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="grid grid-cols-1 md:grid-cols-2 bg-[#ffffff]">

<div className="relative md:p-10 lg:p-14 bg-white pt-6 pr-6 pb-6 pl-6">


<div className="mt-10 md:mt-14">
<h1 className="md:text-6xl lg:text-7xl text-5xl font-normal text-slate-900 tracking-tight font-instrument-serif mt-4">AI, Photosynthesis</h1>
<h2 className="mt-2 text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900 font-instrument-serif font-normal">
                by Intelligent Care
              </h2>
<div className="mt-6 flex items-center gap-3">
<div className="flex -space-x-2">
<span className="inline-flex items-center justify-center bg-[#f1f5f9] w-7 h-7 ring-white ring-2 rounded-full">
<svg className="lucide lucide-sun w-[16px] h-[16px] text-gray-600" data-icon-replaced="true" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</span>
<span className="inline-flex items-center justify-center bg-[#f1f5f9] w-7 h-7 ring-white ring-2 rounded-full">
<svg className="lucide lucide-droplets w-[16px] h-[16px] text-gray-600" data-icon-replaced="true" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</span>
<span className="inline-flex items-center justify-center bg-[#f0f4f8] w-7 h-7 ring-white ring-2 rounded-full">
<svg className="lucide lucide-thermometer w-[16px] h-[16px] text-gray-600" data-icon-replaced="true" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</span>
</div>
<span className="text-xs text-slate-500 font-sans">Light, Water, Climate — tuned by data</span>
</div>
<div className="flex flex-wrap gap-4 mt-8 items-center">
<a className="relative inline-flex items-center justify-center overflow-hidden group text-white tracking-tighter bg-gray-800 rounded-3xl pt-2.5 pr-4 pb-2.5 pl-4" href="#">
<span className="absolute transition-all duration-500 ease-out group-hover:w-56 group-hover:h-56 bg-teal-600 w-0 h-0 rounded-full"></span>
<span className="relative text-base font-semibold">Start Growing Smarter</span>
<svg className="lucide lucide-arrow-right h-4 w-4 relative ml-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-3 text-slate-700 hover:text-slate-900 text-sm font-medium" href="#">
<span className="font-sans">Watch Overview</span>
<span className="inline-flex h-8 w-8 rounded-full border border-slate-300 items-center justify-center">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</a>
</div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="border border-slate-200 rounded-2xl p-4 flex items-start gap-4">
<div className="text-xs text-slate-400 mt-1 font-sans">01</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-base font-medium tracking-tight text-slate-900 font-sans">Adaptive Climate Sync</p>
<svg className="lucide lucide-chevron-right h-4 w-4 text-slate-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-1 text-sm text-slate-600 font-sans">Automated temperature, humidity, and airflow calibration for every growth stage.</p>
</div>
</div>
<div className="border border-slate-200 rounded-2xl p-4 flex items-start gap-4">
<div className="text-xs text-slate-400 mt-1 font-sans">02</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-base font-medium tracking-tight text-slate-900 font-sans">Live Growth Telemetry</p>
<svg className="lucide lucide-chevron-right h-4 w-4 text-slate-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-1 text-sm text-slate-600 font-sans">Precision plant metrics, analyzed and graphed in real time.</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a735bdb7-9170-45a8-912f-07e33e0abaa4_1600w.jpg)] bg-cover rounded-3xl" style={{}}>

<div className="absolute z-10 flex gap-2 top-1 right-1 items-center">
<button className="h-10 w-10 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/10 text-white flex items-center justify-center hover:bg-white/15">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<button className="h-10 w-10 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/10 text-white flex items-center justify-center hover:bg-white/15">
<svg className="lucide lucide-moon h-5 w-5" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>
</div>

<div className="relative md:p-10 lg:p-14 pt-8 pr-8 pb-8 pl-8">
<div className="relative overflow-hidden min-h-[420px] md:min-h-[520px] flex bg-emerald-950/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cab73078-80bd-4f30-8d0d-775e21f09e27_1600w.jpg)] bg-cover ring-white/10 ring-1 rounded-3xl items-center justify-center" style={{}}><video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/57983e9f-22bf-4ecb-9ccf-107e0f02fd40/1.mp4"></video>

<div className="absolute top-4 left-4 group cursor-pointer">
<div className="bg-white/10 w-[220px] border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur transition-all duration-300 group-hover:bg-white/15 group-hover:scale-105 group-hover:shadow-lg">
<div className="flex items-center justify-between">
<span className="text-white/80 text-xs font-medium font-sans group-hover:text-white/90 transition-colors">Photosynthesis</span>
<span className="inline-flex items-center gap-1 text-emerald-300 text-xs font-sans group-hover:text-emerald-200 transition-colors">
<svg className="lucide lucide-trending-up h-4 w-4 group-hover:animate-pulse" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +12%
                      </span>
</div>
<div className="mt-2">
<div className="h-[70px]">
<div className="relative h-full">
<div className="h-full">
<div className="h-[70px] w-full">
<div className="relative h-full w-full">
<div className="h-[70px]">
<div className="relative h-full">
<div className="h-[70px]">
<div className="relative h-full">
<div className="relative h-[70px]">
<div className="relative h-full">
<div className="relative h-[70px]">
<div className="relative h-full">

<div className="h-[70px]">
<canvas className="group-hover:opacity-90 transition-opacity" height="140" id="photosynthesisChart" style={{display: 'block', boxSizing: 'border-box', height: '70px', width: '186px'}} width="372"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-emerald-200 text-sm font-medium font-sans group-hover:text-emerald-100 transition-colors">+12°</span>
<span className="text-white/80 text-xs font-sans group-hover:text-white/90 transition-colors">Temp Avg</span>
</div>
</div>
</div>


<div className="absolute bottom-4 left-4 group cursor-pointer">
<div className="bg-white/10 w-[260px] border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur transition-all duration-300 group-hover:bg-white/15 group-hover:scale-105 group-hover:shadow-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-sun h-4 w-4 text-amber-300 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-sm font-medium font-sans group-hover:text-white transition-colors">Light Exposure</span>
</div>
<span className="text-xs text-white/80 font-sans group-hover:text-white/90 transition-colors">18:00 PM</span>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="h-2 bg-white/15 rounded-full w-full overflow-hidden group-hover:bg-white/20 transition-colors">
<div className="h-2 bg-amber-300 rounded-full w-[65%] group-hover:bg-amber-200 transition-all duration-500"></div>
</div>
<span className="text-white text-sm font-medium font-sans group-hover:text-amber-200 transition-colors">65%</span>
</div>
</div>
</div>


<div className="absolute sm:flex flex-col gap-3 top-4 right-4 hidden">
<span className="inline-flex items-center gap-2 text-emerald-200 bg-white/10 border border-white/10 rounded-full px-3 py-2 text-xs font-sans hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-pointer">
<svg className="lucide lucide-droplets h-4 w-4 hover:animate-bounce" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg> 48%
                  </span>
<span className="inline-flex items-center gap-2 hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-pointer text-xs text-emerald-200 bg-white/10 border-white/10 border rounded-full pt-2 pr-3 pb-2 pl-3">
<svg className="lucide lucide-wind h-4 w-4" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg> 1.3 m/s
                  </span>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
<button className="h-2 w-2 rounded-full bg-white/40 hover:bg-white/60 transition-colors duration-200" data-dot=""></button>
<button className="h-2 w-6 rounded-full bg-white hover:bg-white/90 transition-colors duration-200" data-dot=""></button>
<button className="h-2 w-2 rounded-full bg-white/40 hover:bg-white/60 transition-colors duration-200" data-dot=""></button>
</div>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-white rounded-3xl mt-8 mb-20 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="md:px-10 lg:px-14 pt-16 pr-6 pb-16 pl-6">

<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 font-instrument-serif font-normal">
        Smart Growth,
      </h2>
<h3 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 font-instrument-serif font-normal mb-6">
        Simplified
      </h3>
<p className="text-lg text-slate-600 font-sans">
        Advanced plant care technology that learns, adapts, and optimizes your growing environment automatically.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
<div className="aspect-[4/3] overflow-hidden relative bg-[url(https://cdn.midjourney.com/114fc0c4-8702-48d4-a211-638fbda4cf9a/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl mb-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="flex group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 bg-emerald-200/20 w-20 h-20 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-sm items-center justify-center group-hover:bg-emerald-200/40 group-hover:shadow-xl">
<svg className="lucide lucide-brain text-emerald-700 group-hover:text-emerald-600 transition-colors duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
<path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
<path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
<path d="M6 18a4 4 0 0 1-1.967-.516"></path>
<path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
</svg>
</div>

<div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-pulse group-hover:animate-bounce group-hover:bg-emerald-300"></div>
<div className="absolute -bottom-1 -left-3 w-3 h-3 bg-emerald-500 rounded-full animate-pulse group-hover:animate-bounce group-hover:bg-emerald-400" style={{animationDelay: '0.5s'}}></div>

<div className="absolute top-1 left-1 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{animationDelay: '0.2s'}}></div>
<div className="absolute bottom-2 right-2 w-2 h-2 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{animationDelay: '0.7s'}}></div>
</div>
</div>
</div>
<h4 className="group-hover:text-emerald-700 transition-colors duration-300 text-xl font-thin text-slate-900 tracking-tight mb-3">AI Plant Monitoring</h4>
<p className="text-slate-600 font-sans text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
      Computer vision and machine learning algorithms continuously analyze plant health, growth patterns, and environmental needs.
    </p>
</div>

<div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2" style={{animationDelay: '0.1s'}}>
<div className="aspect-[4/3] overflow-hidden relative bg-[url(https://cdn.midjourney.com/9546e13a-5965-49d2-b8f2-550e988c7a8d/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl mb-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-sky-500/20">
<div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="flex group-hover:scale-125 group-hover:-rotate-6 transition-all duration-500 bg-emerald-200/20 w-20 h-20 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-sm items-center justify-center group-hover:bg-sky-200/40 group-hover:shadow-xl">
<svg className="lucide lucide-gauge text-sky-700 group-hover:text-sky-600 transition-colors duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="m12 14 4-4"></path>
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
</svg>
</div>

<div className="absolute inset-0 rounded-2xl border-2 border-sky-300 animate-ping opacity-30 group-hover:opacity-60 group-hover:border-sky-400"></div>
<div className="absolute inset-2 rounded-xl border border-sky-400 animate-ping opacity-40 group-hover:opacity-80 group-hover:border-sky-500" style={{animationDelay: '0.3s'}}></div>

<div className="absolute inset-4 rounded-lg border border-sky-200 opacity-0 group-hover:opacity-50 group-hover:animate-ping" style={{animationDelay: '0.6s'}}></div>
</div>
</div>
</div>
<h4 className="group-hover:text-sky-700 transition-colors duration-300 text-xl font-light text-slate-900 tracking-tight mb-3">Precision Environmental Control</h4>
<p className="text-slate-600 font-sans text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
      Automated adjustment of temperature, humidity, lighting, and airflow based on real-time plant feedback and growth stage requirements.
    </p>
</div>

<div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2" style={{animationDelay: '0.2s'}}>
<div className="aspect-[4/3] overflow-hidden relative bg-[url(https://cdn.midjourney.com/acac5de4-3777-450d-8a5d-af08a6c56bed/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl mb-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-violet-500/20">
<div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="flex group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 bg-emerald-200/20 w-20 h-20 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-sm items-center justify-center group-hover:bg-violet-200/40 group-hover:shadow-xl">
<svg className="lucide lucide-trending-up text-violet-700 group-hover:text-violet-600 transition-colors duration-300 group-hover:animate-pulse" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<polyline points="22,7 13.5,15.5 8.5,10.5 2,17"></polyline>
<polyline points="16,7 22,7 22,13"></polyline>
</svg>
</div>

<div className="absolute top-2 right-1 w-2 h-2 bg-violet-400 rounded-full group-hover:animate-bounce transition-all duration-300 group-hover:bg-violet-300"></div>
<div className="absolute bottom-3 left-1 w-1.5 h-1.5 bg-violet-500 rounded-full group-hover:animate-bounce transition-all duration-300 group-hover:bg-violet-400" style={{animationDelay: '0.2s'}}></div>
<div className="absolute top-6 left-3 w-1 h-1 bg-violet-600 rounded-full group-hover:animate-bounce transition-all duration-300 group-hover:bg-violet-500" style={{animationDelay: '0.4s'}}></div>

<div className="absolute top-0 left-0 w-1 h-1 bg-violet-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.1s'}}></div>
<div className="absolute bottom-0 right-0 w-1 h-1 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.3s'}}></div>
</div>
</div>
</div>
<h4 className="group-hover:text-violet-700 transition-colors duration-300 text-xl font-light text-slate-900 tracking-tight mb-3">Growth Analytics &amp; Insights</h4>
<p className="text-slate-600 font-sans text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
      Comprehensive data visualization and predictive analytics to optimize yield, track progress, and forecast harvest timing.
    </p>
</div>

<div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2" style={{animationDelay: '0.3s'}}>
<div className="aspect-[4/3] overflow-hidden relative bg-[url(https://cdn.midjourney.com/a17e22e8-d00d-4e51-ba36-a43fd0ac3677/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl mb-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-amber-500/20">
<div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="flex group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 bg-emerald-200/20 w-20 h-20 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-sm items-center justify-center group-hover:bg-amber-200/40 group-hover:shadow-xl">
<svg className="lucide lucide-smartphone text-amber-700 group-hover:text-amber-600 transition-colors duration-300 group-hover:animate-pulse" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
</div>

<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 group-hover:scale-110">
<div className="w-3 h-1 bg-amber-400 rounded-full mb-1 group-hover:bg-amber-300 transition-colors duration-300"></div>
<div className="w-4 h-1 bg-amber-500 rounded-full mb-1 group-hover:bg-amber-400 transition-colors duration-300"></div>
<div className="w-5 h-1 bg-amber-600 rounded-full group-hover:bg-amber-500 transition-colors duration-300"></div>
</div>

<div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.3s'}}></div>
</div>
</div>
</div>
<h4 className="group-hover:text-amber-700 transition-colors duration-300 text-xl font-thin text-slate-900 tracking-tight mb-3">Mobile Management</h4>
<p className="text-slate-600 font-sans text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
      Control and monitor your growing systems from anywhere with our intuitive mobile app and real-time notifications.
    </p>
</div>

<div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2" style={{animationDelay: '0.4s'}}>
<div className="aspect-[4/3] overflow-hidden relative bg-[url(https://cdn.midjourney.com/cb8bebe1-223a-41d6-8f91-dd6733664e24/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl mb-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-teal-500/20">
<div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="flex group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 bg-emerald-200/20 w-20 h-20 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-sm items-center justify-center group-hover:bg-teal-200/40 group-hover:shadow-xl">
<svg className="lucide lucide-leaf text-teal-700 group-hover:text-teal-600 transition-all duration-300 group-hover:animate-pulse" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
</svg>
</div>

<div className="absolute top-0 right-0 w-6 h-6 bg-teal-300 rounded-full flex items-center justify-center group-hover:bg-teal-200 group-hover:scale-110 transition-all duration-300">
<span className="text-xs text-teal-800 font-bold group-hover:text-teal-900">%</span>
</div>

<div className="absolute -top-2 -left-2 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" style={{animationDelay: '0.1s'}}></div>
<div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" style={{animationDelay: '0.4s'}}></div>
<div className="absolute top-8 -left-1 w-1 h-1 bg-teal-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
</div>
<h4 className="group-hover:text-teal-700 transition-colors duration-300 text-xl font-light text-slate-900 tracking-tight mb-3">Resource Optimization</h4>
<p className="text-slate-600 font-sans text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
      Minimize water, energy, and nutrient usage through intelligent resource management and efficiency algorithms.
    </p>
</div>

<div className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2" style={{animationDelay: '0.5s'}}>
<div className="aspect-[4/3] overflow-hidden relative bg-[url(https://cdn.midjourney.com/33b39f3c-1ebd-486e-a532-275b8d1703f0/0_0.png?w=800&amp;q=80)] bg-cover rounded-2xl mb-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-rose-500/20">
<div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative">
<div className="flex group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 bg-emerald-200/20 w-20 h-20 rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-sm items-center justify-center group-hover:bg-rose-200/40 group-hover:shadow-xl">
<svg className="lucide lucide-users text-rose-700 group-hover:text-rose-600 transition-colors duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>

<div className="absolute -bottom-2 -left-2 flex gap-1 transition-all duration-500 group-hover:scale-110">
<div className="w-2 h-2 bg-rose-400 rounded-full group-hover:animate-bounce group-hover:bg-rose-300"></div>
<div className="w-2 h-2 bg-rose-500 rounded-full group-hover:animate-bounce group-hover:bg-rose-400" style={{animationDelay: '0.1s'}}></div>
<div className="w-2 h-2 bg-rose-600 rounded-full group-hover:animate-bounce group-hover:bg-rose-500" style={{animationDelay: '0.2s'}}></div>
</div>

<div className="absolute top-2 right-2 w-1 h-4 bg-rose-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{transform: 'rotate(45deg)'}}></div>
<div className="absolute bottom-2 left-2 w-1 h-3 bg-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{transform: 'rotate(-30deg)'}}></div>

<div className="absolute top-0 right-0 w-1.5 h-1.5 bg-rose-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
<div className="absolute bottom-0 left-0 w-1 h-1 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{animationDelay: '0.3s'}}></div>
</div>
</div>
</div>
<h4 className="group-hover:text-rose-700 transition-colors duration-300 text-xl font-light text-slate-900 tracking-tight mb-3">Expert Community</h4>
<p className="text-slate-600 font-sans text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
      Access to growing experts, community knowledge sharing, and 24/7 support to help you achieve optimal results.
    </p>
</div>
</div>

<div className="text-center mt-16">
<a className="inline-flex items-center justify-center gap-3 hover:text-white transition-colors relative overflow-hidden group z-10 duration-1000 text-xl text-white bg-teal-500 w-60 h-12 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
<span className="absolute group-hover:scale-100 -z-20 left-22 -top-24 group-hover:duration-500 duration-700 origin-center transform transition-all bg-teal-600 w-60 h-60 rounded-full scale-0"></span>
<span className="-top-24 group-hover:scale-100 group-hover:duration-700 duration-500 origin-center transform transition-all -z-10 w-60 h-60 rounded-full absolute left-18 scale-0"></span>
<span className="text-lg font-medium">Explore All Features</span>
</a>
</div>
</div>
</section><section className="overflow-hidden bg-white rounded-3xl mt-8 mb-20 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
</section><footer className="overflow-hidden bg-slate-900 rounded-3xl mt-8 mb-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="md:px-10 lg:px-14 pt-16 pr-6 pb-16 pl-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="lg:col-span-1">
<div className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90adae1c-a460-4edd-9d6d-7501e7d6fca5_800w.jpg)] bg-cover rounded py-2 brightness-0 invert mb-4" style={{}}></div>
<p className="text-slate-400 font-sans text-sm leading-relaxed mb-6">
          Intelligent plant care technology that transforms the way you grow. From seedling to harvest, VerdantIQ optimizes every aspect of plant health.
        </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" href="#">
<svg className="text-slate-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" href="#">
<svg className="text-slate-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" href="#">
<svg className="text-slate-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="m16 11.37-2.14 2.13-3.93-3.93L8.07 11.43 6.14 9.5l1.86-1.86L12.93 12.5l4.14-4.14 1.93 1.93-2 2z"></path>
</svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-white font-semibold font-sans mb-4">Product</h4>
<nav className="space-y-3">
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">AI Monitoring</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Climate Control</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Growth Analytics</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Mobile App</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Hardware</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Integrations</a>
</nav>
</div>

<div className="">
<h4 className="text-white font-semibold font-sans mb-4">Resources</h4>
<nav className="space-y-3">
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Documentation</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Growing Guides</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Video Tutorials</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Community</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Blog</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Webinars</a>
</nav>
</div>

<div className="">
<h4 className="text-white font-semibold font-sans mb-4">Company</h4>
<nav className="space-y-3">
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">About Us</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Careers</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Press</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Partners</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Contact</a>
<a className="block text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Support</a>
</nav>
</div>
</div>

<div className="sm:p-8 bg-slate-800 rounded-2xl mb-12 pt-4 pr-4 pb-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="">
<h3 className="text-2xl font-semibold text-white mb-2 font-sans tracking-tight">Stay in the Loop</h3>
<p className="text-slate-400 font-sans text-sm">Get the latest growing tips, product updates, and industry insights delivered to your inbox.</p>
</div>
<div className="flex gap-3">
<input className="flex-1 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-white bg-slate-700 max-w-[130px] sm:max-w-[260px] border-slate-600 border rounded-xl pt-3 pr-4 pb-3 pl-4" placeholder="Enter your email" type="email"/>
<button className="hover:bg-teal-700 transition-colors whitespace-nowrap text-sm font-medium text-white bg-teal-600 rounded-xl pt-3 pr-6 pb-3 pl-6">
            Subscribe
          </button>
</div>
</div>
</div>

<div className="pt-8 border-t border-slate-800">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-wrap items-center gap-6">
<span className="text-slate-400 font-sans text-sm">© 2024 VerdantIQ. All rights reserved.</span>
<a className="text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Privacy Policy</a>
<a className="text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Terms of Service</a>
<a className="text-slate-400 hover:text-white font-sans text-sm transition-colors" href="#">Cookie Policy</a>
</div>
<div className="flex items-center gap-2 text-slate-400 font-sans text-sm">
<svg className="lucide lucide-seedling" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
          Made with care for growers worldwide
        </div>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
