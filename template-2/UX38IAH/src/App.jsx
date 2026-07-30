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



tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      colors: {
        primary: '#3b82f6',
        secondary: '#1e40af',
        accent: '#06b6d4',
        surface: 'rgba(255,255,255,0.05)',
        glass: 'rgba(255,255,255,0.1)'
      }
    }
  }
}



lucide.createIcons();

let temperature = 22;
let isOn = true;
const minTemp = 16;
const maxTemp = 30;

const progressCircle = document.getElementById('progressCircle');
const tempDisplay = document.getElementById('tempDisplay');
const powerToggle = document.getElementById('powerToggle');
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');

const circumference = 2 * Math.PI * 110;
progressCircle.style.strokeDasharray = circumference;

function updateTemperature() {
  const progress = (temperature - minTemp) / (maxTemp - minTemp);
  const offset = circumference - (progress * circumference * 0.75);
  progressCircle.style.strokeDashoffset = offset;
  tempDisplay.textContent = temperature + '°';
}

function updatePowerState() {
  powerToggle.classList.toggle('active', isOn);
  document.querySelector('.iphone-screen').style.opacity = isOn ? '1' : '0.7';
}

decreaseBtn.addEventListener('click', () => {
  if (temperature > minTemp && isOn) {
    temperature--;
    updateTemperature();
  }
});

increaseBtn.addEventListener('click', () => {
  if (temperature < maxTemp && isOn) {
    temperature++;
    updateTemperature();
  }
});

powerToggle.addEventListener('click', () => {
  isOn = !isOn;
  updatePowerState();
});

updateTemperature();
updatePowerState();

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
      

<div className="iphone-frame">

<div className="iphone-screen" style={{opacity: `1`}}>

<div className="dynamic-island"></div>

<div className="h-full flex flex-col pt-16 pb-8">

<header className="px-6 flex items-center justify-between">
<button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="text-center">
<h1 className="text-xl font-semibold tracking-tight">Climate Control</h1>
<p className="text-sm text-slate-300 mt-1">Living Room</p>
</div>
<div className="toggle-switch active" id="powerToggle">
<div className="toggle-knob"></div>
</div>
</header>

<nav className="mt-8 flex justify-center gap-8">
<button className="nav-item flex flex-col items-center gap-2 text-slate-400 hover:text-white">
<svg className="lucide lucide-video w-5 h-5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span className="text-xs font-medium">Camera</span>
</button>
<button className="nav-item active flex flex-col items-center gap-2">
<svg className="lucide lucide-thermometer w-5 h-5" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
<span className="text-xs font-medium">Climate</span>
<div className="w-6 h-0.5 bg-primary rounded-full mt-1"></div>
</button>
<button className="nav-item flex flex-col items-center gap-2 text-slate-400 hover:text-white">
<svg className="lucide lucide-lightbulb w-5 h-5" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<span className="text-xs font-medium">Lighting</span>
</button>
</nav>

<section className="flex-1 flex flex-col relative pr-6 pb-6 pl-6 items-center justify-center">
<div className="dial-container">
<svg className="transform -rotate-90" height="280" viewBox="0 0 280 280" width="280">
<defs>
<lineargradient id="trackGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: `#475569`, stopOpacity: `1`}}></stop>
<stop offset="100%" style={{stopColor: `#334155`, stopOpacity: `1`}}></stop>
</lineargradient>
<lineargradient id="progressGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: `#3b82f6`, stopOpacity: `1`}}></stop>
<stop offset="50%" style={{stopColor: `#06b6d4`, stopOpacity: `1`}}></stop>
<stop offset="100%" style={{stopColor: `#8b5cf6`, stopOpacity: `1`}}></stop>
</lineargradient>
</defs>
<circle cx="140" cy="140" fill="none" opacity="0.3" r="110" stroke="url(#trackGrad)" strokeWidth="8"></circle>
<circle cx="140" cy="140" fill="none" id="progressCircle" r="110" stroke="url(#progressGrad)" strokeDasharray="691" strokeDashoffset="345" strokeLinecap="round" strokeWidth="8" style={{filter: `drop-shadow(rgba(59, 130, 246, 0.5) 0px 0px 10px)`, strokeDasharray: `691.150384`, strokeDashoffset: `468.994903`}}></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="mode-badge px-4 py-1 rounded-full mb-4">
<span className="text-sm font-semibold text-primary" id="modeText">COOLING</span>
</div>
<div className="temp-display font-medium tracking-tight" id="tempDisplay">22°</div>
<div className="flex items-center gap-2 mt-2">
<svg className="lucide lucide-leaf w-4 h-4 text-green-400" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="text-sm text-slate-300">Eco Mode</span>
</div>
</div>
</div>

<div className="flex items-center gap-8 mt-6">
<button className="control-btn w-12 h-12 rounded-full flex items-center justify-center" id="decreaseBtn">
<svg className="lucide lucide-minus w-5 h-5 text-slate-300" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<div className="text-center">
<div className="text-xs text-slate-400 mb-1">Target</div>
<div className="text-lg font-medium">22°C</div>
</div>
<button className="control-btn w-12 h-12 rounded-full flex items-center justify-center" id="increaseBtn">
<svg className="lucide lucide-plus w-5 h-5 text-slate-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</section>

<section className="px-6 space-y-3 mb-4">
<div className="glass-card rounded-2xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
<svg className="lucide lucide-droplets w-5 h-5 text-blue-400" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<div className="">
<div className="text-sm font-medium">Indoor Humidity</div>
<div className="text-xs text-slate-400">Optimal range</div>
</div>
</div>
<div className="text-right">
<div className="text-lg font-medium">65%</div>
<div className="text-xs text-green-400">Good</div>
</div>
</div>
<div className="glass-card rounded-2xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
<svg className="lucide lucide-sun w-5 h-5 text-orange-400" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="">
<div className="text-sm font-medium">Outside Temperature</div>
<div className="text-xs text-slate-400">Current weather</div>
</div>
</div>
<div className="text-right">
<div className="text-lg font-medium">28°C</div>
<div className="text-xs text-orange-400">Hot</div>
</div>
</div>
</section>

<footer className="px-4">
<div className="glass-card rounded-3xl p-2 flex items-center">
<button className="flex-1 flex flex-col items-center gap-1 py-3 text-slate-400 hover:text-white transition-colors">
<svg className="lucide lucide-snowflake w-5 h-5" data-lucide="snowflake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
<span className="text-xs">Mode</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1 py-3 text-primary relative">
<svg className="lucide lucide-leaf w-5 h-5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="text-xs font-medium">Eco</span>
<div className="absolute bottom-0 w-8 h-0.5 bg-primary rounded-full"></div>
</button>
<button className="flex-1 flex flex-col items-center gap-1 py-3 text-slate-400 hover:text-white transition-colors">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs">Schedule</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1 py-3 text-slate-400 hover:text-white transition-colors">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-xs">Stats</span>
</button>
</div>
</footer>
</div>

<div className="home-indicator"></div>
</div>
</div>


    </>
  );
}
