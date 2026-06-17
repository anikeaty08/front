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



    // Initialize Lucide icons with custom stroke width
    lucide.createIcons({ 
      strokeWidth: 1.5,
      attrs: {
        class: 'icon-thin'
      }
    });

    // Enhanced tab functionality with smooth transitions
    const toggleTabs = (idApps, idProc, listAppVisible) => {
      const appsBtn = document.getElementById(idApps);
      const procBtn = document.getElementById(idProc);
      
      if (listAppVisible) {
        appsBtn.classList.add('bg-neutral-800', 'text-neutral-300');
        appsBtn.classList.remove('text-neutral-500');
        procBtn.classList.add('text-neutral-500');
        procBtn.classList.remove('bg-neutral-800', 'text-neutral-300');
      } else {
        procBtn.classList.add('bg-neutral-800', 'text-neutral-300');
        procBtn.classList.remove('text-neutral-500');
        appsBtn.classList.add('text-neutral-500');
        appsBtn.classList.remove('bg-neutral-800', 'text-neutral-300');
      }
    };

    // Tab event listeners
    document.getElementById('tab-apps-1').addEventListener('click', () => toggleTabs('tab-apps-1','tab-proc-1', true));
    document.getElementById('tab-proc-1').addEventListener('click', () => toggleTabs('tab-apps-1','tab-proc-1', false));

    // Animate progress bars and charts on load
    window.addEventListener('load', () => {
      setTimeout(() => {
        const progressBars = document.querySelectorAll('[class*="w-["]');
        progressBars.forEach(bar => {
          bar.style.transform = 'scaleX(1)';
        });
      }, 1000);
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/particlesmoment-kW3xyVny6weIhXJ3vbs2M2bB" width="100%"></iframe></div>
<main className="min-h-screen flex flex-col lg:flex-row items-start justify-center gap-6 p-4 lg:p-8">

<section className="w-full lg:w-96 ring-1 ring-neutral-800/50 opacity-0 animate-fade-in bg-neutral-900/80 rounded-2xl shadow-2xl backdrop-blur">

<div className="flex border-neutral-800/50 border-b pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-zap w-5 h-5 text-blue-400/90 icon-thin" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h2 className="text-neutral-200 font-medium tracking-tight">Energy Monitor</h2>
</div>
<button className="hover:text-neutral-300 transition-colors duration-200">
<svg className="lucide lucide-x w-4 h-4 icon-thin" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="px-5 py-4 grid grid-cols-3 gap-4 text-sm opacity-0 animate-fade-in animate-delay-100">
<div>
<span className="text-2xl font-medium text-blue-400/90">73.8<span className="text-xs align-top">%</span></span>
<p className="text-neutral-500 mt-1">Power left</p>
</div>
<div>
<span className="text-2xl font-medium text-amber-400/90">245<span className="text-xs align-top"> min</span></span>
<p className="text-neutral-500 mt-1">Time left</p>
</div>
<div>
<span className="text-2xl font-medium text-green-400/90">84.15<span className="text-xs align-top">%</span></span>
<p className="text-neutral-500 mt-1">Daily avg</p>
</div>
</div>

<div className="px-5 mt-6 opacity-0 animate-fade-in animate-delay-200">
<svg className="w-full h-32" viewbox="0 0 320 120">
<defs>
</defs>
<path d="M0,30 C40,28 80,32 120,40 C160,48 200,52 240,58 C280,64 320,68 320,68" fill="none" stroke="rgb(59,130,246)" strokeWidth="1.5"></path>
<polygon fill="url(#grad1)" points="0,120 320,120 320,68 280,64 240,58 200,52 160,48 120,40 80,32 40,28 0,30"></polygon>
<line stroke="#404040" stroke-dasharray="4 6" strokeWidth="1" x1="0" x2="320" y1="100" y2="100"></line>
<line stroke="#404040" stroke-dasharray="4 6" strokeWidth="1" x1="0" x2="320" y1="60" y2="60"></line>
<line stroke="#404040" stroke-dasharray="4 6" strokeWidth="1" x1="0" x2="320" y1="20" y2="20"></line>
</svg>
<div className="flex justify-between text-neutral-600 text-xs mt-2">
<span>7AM</span><span>9AM</span><span>11AM</span><span>1PM</span><span>3PM</span><span>NOW</span><span>11PM</span>
</div>
</div>

<div className="mt-6 px-5 flex opacity-0 animate-fade-in animate-delay-300">
<div className="flex bg-neutral-800/50 rounded-lg p-1 w-full">
<button className="flex-1 py-2 text-center rounded-md bg-neutral-800 text-neutral-300 text-sm font-medium transition-all duration-200 hover:bg-neutral-700" id="tab-apps-1">Applications</button>
<button className="flex-1 py-2 text-center rounded-md text-neutral-500 hover:text-neutral-400 text-sm font-medium transition-all duration-200 hover:bg-neutral-800/50" id="tab-proc-1">Processes</button>
</div>
</div>

<div className="px-5 divide-y divide-neutral-800/50 opacity-0 animate-fade-in animate-delay-400" id="list-1">
<div className="flex items-center justify-between py-4 hover:bg-neutral-800/30 rounded-lg px-2 -mx-2 transition-colors duration-200">
<div className="flex items-center gap-3">
<svg className="lucide lucide-video w-6 h-6 text-red-400/80 icon-thin" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<div>
<p className="text-neutral-300 font-medium">YouTube</p>
<p className="text-xs text-neutral-500">Streaming</p>
</div>
</div>
<span className="font-medium text-red-400/80">62%</span>
</div>
<div className="flex items-center justify-between py-4 hover:bg-neutral-800/30 rounded-lg px-2 -mx-2 transition-colors duration-200">
<div className="flex items-center gap-3">
<svg className="lucide lucide-instagram w-6 h-6 text-purple-400/80 icon-thin" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<div>
<p className="text-neutral-300 font-medium">Instagram</p>
<p className="text-xs text-neutral-500">Social</p>
</div>
</div>
<span className="font-medium text-purple-400/80">18%</span>
</div>
<div className="flex items-center justify-between py-4 hover:bg-neutral-800/30 rounded-lg px-2 -mx-2 transition-colors duration-200">
<div className="flex items-center gap-3">
<svg className="lucide lucide-headphones w-6 h-6 text-green-400/80 icon-thin" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<div>
<p className="text-neutral-300 font-medium">Apple Music</p>
<p className="text-xs text-neutral-500">Audio</p>
</div>
</div>
<span className="font-medium text-green-400/80">13%</span>
</div>
<div className="flex items-center justify-between py-4 hover:bg-neutral-800/30 rounded-lg px-2 -mx-2 transition-colors duration-200">
<div className="flex items-center gap-3">
<svg className="lucide lucide-messages-square w-6 h-6 text-blue-400/80 icon-thin" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
<div className="">
<p className="text-neutral-300 font-medium">WhatsApp</p>
<p className="text-xs text-neutral-500">Messaging</p>
</div>
</div>
<span className="font-medium text-blue-400/80">7%</span>
</div>
</div>

<div className="m-5 p-4 rounded-xl bg-neutral-800/30 ring-1 ring-neutral-800/50 opacity-0 animate-fade-in animate-delay-500">
<p className="text-neutral-300 font-medium">Power optimization</p>
<p className="text-xs text-neutral-500 mt-1">Manage app energy consumption and alerts</p>
<div className="mt-3 flex gap-2">
<div className="w-8 h-8 rounded-lg bg-neutral-800/50 ring-1 ring-neutral-700/50 flex items-center justify-center hover:bg-neutral-700/50 transition-colors duration-200">
<svg className="lucide lucide-bell w-4 h-4 icon-thin" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<div className="w-8 h-8 rounded-lg bg-neutral-800/50 ring-1 ring-neutral-700/50 flex items-center justify-center hover:bg-neutral-700/50 transition-colors duration-200">
<svg className="lucide lucide-video w-4 h-4 icon-thin" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<div className="w-8 h-8 rounded-lg bg-neutral-800/50 ring-1 ring-neutral-700/50 flex items-center justify-center hover:bg-neutral-700/50 transition-colors duration-200">
<svg className="lucide lucide-instagram w-4 h-4 icon-thin" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<div className="w-8 h-8 rounded-lg bg-neutral-800/50 ring-1 ring-neutral-700/50 flex items-center justify-center hover:bg-neutral-700/50 transition-colors duration-200">
<svg className="lucide lucide-headphones w-4 h-4 icon-thin" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
</div>
</div>
</section>

<section className="w-full lg:w-96 ring-1 ring-neutral-800/50 opacity-0 animate-fade-in animate-delay-100 bg-neutral-900/80 rounded-2xl shadow-2xl backdrop-blur">

<div className="flex items-center justify-between p-5 border-b border-neutral-800/50">
<div className="flex items-center gap-3">
<svg className="lucide lucide-activity w-5 h-5 text-emerald-400/90 icon-thin" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h2 className="text-neutral-200 font-medium tracking-tight">System Analytics</h2>
</div>
<button className="hover:text-neutral-300 transition-colors duration-200">
<svg className="lucide lucide-x w-4 h-4 icon-thin" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="opacity-0 animate-fade-in animate-delay-200 pt-4 pr-5 pb-4 pl-5">
<div className="flex items-end gap-2">
<span className="text-2xl font-medium text-orange-400/90">38%</span>
<span className="text-xs text-neutral-500">142 minutes remaining</span>
</div>
<div className="mt-3 w-full h-3 rounded-full bg-neutral-800/50 overflow-hidden">
<div className="h-full bg-gradient-to-r from-orange-400/90 to-red-400/90 w-[38%] transition-all duration-1000 ease-out" style={{transform: 'scaleX(1)'}}></div>
</div>
</div>

<div className="px-5 mt-6 opacity-0 animate-fade-in animate-delay-300">
<svg className="w-full h-32" viewbox="0 0 320 120">
<g fill="rgb(16,185,129,0.8)">
<rect height="65" rx="3" width="24" x="20" y="35"></rect>
<rect height="85" rx="3" width="24" x="65" y="15"></rect>
<rect height="75" rx="3" width="24" x="110" y="25"></rect>
<rect height="55" rx="3" width="24" x="155" y="45"></rect>
<rect height="35" rx="3" width="24" x="200" y="65"></rect>
<rect height="25" rx="3" width="24" x="245" y="75"></rect>
<rect height="20" rx="3" width="24" x="290" y="80"></rect>
</g>
<line stroke="#404040" stroke-dasharray="4 6" strokeWidth="1" x1="0" x2="320" y1="100" y2="100"></line>
<line stroke="#404040" stroke-dasharray="4 6" strokeWidth="1" x1="0" x2="320" y1="60" y2="60"></line>
<line stroke="#404040" stroke-dasharray="4 6" strokeWidth="1" x1="0" x2="320" y1="20" y2="20"></line>
</svg>
<div className="flex justify-between text-neutral-600 text-xs mt-2">
<span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
</div>
</div>

<div className="px-5 mt-6 opacity-0 animate-blur-slide animate-delay-400">
<div className="flex items-center justify-between">
<h3 className="text-neutral-300 font-medium">Performance Metrics</h3>
<span className="text-xs text-neutral-500">Real-time</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="p-3 rounded-lg bg-neutral-800/30 ring-1 ring-neutral-800/50">
<div className="flex items-center justify-between">
<svg className="lucide lucide-cpu w-4 h-4 text-cyan-400/80 icon-thin" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-xl font-medium text-cyan-400/90">2.4GHz</span>
</div>
<p className="text-xs text-neutral-500 mt-1">CPU Clock</p>
</div>
<div className="p-3 rounded-lg bg-neutral-800/30 ring-1 ring-neutral-800/50">
<div className="flex items-center justify-between">
<svg className="lucide lucide-thermometer w-4 h-4 text-orange-400/80 icon-thin" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
<span className="text-xl font-medium text-orange-400/90">64°C</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Temperature</p>
</div>
</div>
</div>

<div className="px-5 mt-6 space-y-3 opacity-0 animate-blur-slide animate-delay-500">
<div className="flex items-center justify-between">
<h3 className="text-neutral-300 font-medium">Network Activity</h3>
<span className="text-xs text-neutral-500">Live</span>
</div>
<div className="flex items-center justify-between py-2 hover:bg-neutral-800/30 rounded-lg px-2 -mx-2 transition-colors duration-200">
<div className="flex items-center gap-3">
<svg className="lucide lucide-download w-4 h-4 text-green-400/80 icon-thin" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="text-sm text-neutral-300">Download</span>
</div>
<span className="text-sm font-medium text-green-400/80">42.8 MB/s</span>
</div>
<div className="flex items-center justify-between py-2 hover:bg-neutral-800/30 rounded-lg px-2 -mx-2 transition-colors duration-200">
<div className="flex items-center gap-3">
<svg className="lucide lucide-upload w-4 h-4 text-blue-400/80 icon-thin" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
<span className="text-sm text-neutral-300">Upload</span>
</div>
<span className="text-sm font-medium text-blue-400/80">8.7 MB/s</span>
</div>
<div className="flex items-center justify-between py-2 hover:bg-neutral-800/30 rounded-lg px-2 -mx-2 transition-colors duration-200">
<div className="flex items-center gap-3">
<svg className="lucide lucide-signal w-4 h-4 text-purple-400/80 icon-thin" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<span className="text-sm text-neutral-300">Signal</span>
</div>
<span className="text-sm font-medium text-purple-400/80">-42 dBm</span>
</div>
</div>

<div className="opacity-0 animate-blur-slide animate-delay-600 mt-6 pr-5 pb-10 pl-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-neutral-300 font-medium">Memory Usage</h3>
<span className="text-xs text-neutral-500">8.2/16 GB</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-400/80"></div>
<span className="text-sm text-neutral-300">Active</span>
</div>
<span className="text-sm font-medium text-indigo-400/80">4.2 GB</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
<span className="text-sm text-neutral-300">Cached</span>
</div>
<span className="text-sm font-medium text-yellow-400/80">2.8 GB</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-rose-400/80"></div>
<span className="text-sm text-neutral-300">Compressed</span>
</div>
<span className="text-sm font-medium text-rose-400/80">1.2 GB</span>
</div>
</div>
</div>

</section>
</main>


    </>
  );
}
