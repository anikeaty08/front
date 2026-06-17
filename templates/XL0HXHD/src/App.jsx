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

        // Power button functionality
        const powerBtn = document.getElementById('powerBtn');
        let isPowered = false;

        powerBtn.addEventListener('click', () => {
            isPowered = !isPowered;
            const icon = powerBtn.querySelector('i');
            if (isPowered) {
                powerBtn.classList.add('bg-cyan-500/20', 'border-cyan-500/50');
                icon.classList.add('text-cyan-400');
                icon.classList.remove('text-slate-400');
            } else {
                powerBtn.classList.remove('bg-cyan-500/20', 'border-cyan-500/50');
                icon.classList.remove('text-cyan-400');
                icon.classList.add('text-slate-400');
            }
        });

        // Slider functionality
        const brightnessSlider = document.getElementById('brightness');
        const saturationSlider = document.getElementById('saturation');
        const brightnessValue = document.getElementById('brightnessValue');
        const saturationValue = document.getElementById('saturationValue');

        brightnessSlider.addEventListener('input', (e) => {
            brightnessValue.textContent = e.target.value + '%';
        });

        saturationSlider.addEventListener('input', (e) => {
            saturationValue.textContent = e.target.value + '%';
        });

        // Add subtle interactions
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-1px)';
            });
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
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
      <iframe className="fixed w-full h-screen" frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq" width="100%"></iframe>
<div className="max-w-sm min-h-screen flex flex-col bg-gradient-to-r from-slate-900/50 to-slate-700/50 border-slate-50/5 border rounded-3xl mr-auto mb-10 ml-auto">

<header className="fade-in flex pt-8 pr-6 pb-6 pl-6 items-center justify-between">
<button className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-200 hover:scale-105 border border-slate-700/50" style={{transform: 'translateY(0px)'}}>
<svg className="lucide lucide-chevron-left w-5 h-5 text-slate-300" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="text-center">
<h1 className="text-xl font-semibold tracking-tight">Hue color lamp 1</h1>
<p className="text-sm text-slate-400 mt-1">Living room</p>
</div>
<button className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-200 hover:scale-105 border border-slate-700/50" style={{transform: 'translateY(0px)'}}>
<svg className="lucide lucide-more-horizontal w-5 h-5 text-slate-300" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</header>

<div className="fade-in fade-in-delay-1 mr-6 mb-8 ml-6">
<div className="flex bg-slate-800/30 border-slate-700/30 border rounded-2xl pt-1 pr-1 pb-1 pl-1 backdrop-blur-sm items-center justify-between">
<button className="flex-1 flex hover:text-white transition-all duration-200 text-slate-400 rounded-xl pt-3 pr-4 pb-3 pl-4 items-center justify-center" style={{transform: 'translateY(0px)'}}>
<svg className="lucide lucide-thermometer w-4 h-4" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</button>
<button className="flex-1 flex items-center justify-center py-3 px-4 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" style={{transform: 'translateY(0px)'}}>
<svg className="lucide lucide-lightbulb w-4 h-4" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</button>
<button className="flex-1 flex items-center justify-center py-3 px-4 rounded-xl text-slate-400 hover:text-white transition-all duration-200" style={{transform: 'translateY(0px)'}}>
<svg className="lucide lucide-monitor w-4 h-4" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</button>
</div>
</div>

<div className="fade-in fade-in-delay-2 flex-1 flex items-center justify-center py-8">
<div className="relative">
<div className="color-wheel w-80 h-80 glow-effect animate-float rounded-full pt-3 pr-3 pb-3 pl-3">
<div className="w-full h-full rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl"></div>
<button className="relative z-10 w-32 h-32 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-105 border-2 border-slate-600 shadow-2xl group" id="powerBtn" style={{transform: 'translateY(0px)'}}>
<svg className="lucide lucide-power w-12 h-12 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" data-lucide="power" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
</button>
</div>
</div>
<div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-slate-900 shadow-lg"></div>
</div>
</div>

<div className="fade-in fade-in-delay-3 px-6 space-y-8 pb-6">

<div className="bg-slate-800/30 border-slate-700/30 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<label className="text-lg font-medium">Brightness</label>
<span className="text-sm text-cyan-400 font-medium" id="brightnessValue">90%</span>
</div>
<div className="relative" style={{height: '36px'}}>
<input className="w-full h-6 cursor-pointer rounded-full" max="100" min="0" style={{appearance: 'none', background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)', height: '8px', borderRadius: '4px', outline: 'none', WebkitAppearance: 'none'}} type="range" value="75"/>
<style>
    #brightness::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      border: 3px solid #0f172a;
      box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
      cursor: pointer;
      transition: all 0.2s ease;
      margin-top: -8px;
      position: relative;
      z-index: 10;
    }
    #brightness::-webkit-slider-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(6, 182, 212, 0.6);
    }
    #brightness::-moz-range-thumb {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      border: 3px solid #0f172a;
      box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      z-index: 10;
    }
    #brightness::-moz-range-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(6, 182, 212, 0.6);
    }
    #brightness::-webkit-slider-runnable-track {
      height: 8px;
      border-radius: 4px;
      background: linear-gradient(90deg, #1e293b 0%, #06b6d4 100%);
    }
    #brightness::-moz-range-track {
      height: 8px;
      border-radius: 4px;
      background: linear-gradient(90deg, #1e293b 0%, #06b6d4 100%);
    }
  </style>
</div>
</div>

<div className="bg-slate-800/30 border-slate-700/30 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<label className="text-lg font-medium">Saturation</label>
<span className="text-sm text-cyan-400 font-medium" id="saturationValue">8%</span>
</div>
<div className="relative" style={{height: '36px'}}>
<input className="w-full h-6 cursor-pointer rounded-full" max="100" min="0" style={{appearance: 'none', background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)', height: '8px', borderRadius: '4px', outline: 'none', WebkitAppearance: 'none'}} type="range" value="50"/>
<style>
    #aura-emcixnd4p::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      border: 3px solid #0f172a;
      box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
      cursor: pointer;
      transition: all 0.2s ease;
      margin-top: -8px;
      position: relative;
      z-index: 10;
    }
    #aura-emcixnd4p::-webkit-slider-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(6, 182, 212, 0.6);
    }
    #aura-emcixnd4p::-moz-range-thumb {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background: linear-gradient(135deg, #06b6d4, #0891b2);
      border: 3px solid #0f172a;
      box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      z-index: 10;
    }
    #aura-emcixnd4p::-moz-range-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(6, 182, 212, 0.6);
    }
    #aura-emcixnd4p::-webkit-slider-runnable-track {
      height: 8px;
      border-radius: 4px;
      background: linear-gradient(90deg, #1e293b 0%, #06b6d4 100%);
    }
    #aura-emcixnd4p::-moz-range-track {
      height: 8px;
      border-radius: 4px;
      background: linear-gradient(90deg, #1e293b 0%, #06b6d4 100%);
    }
  </style>
</div>
</div>
</div>

<div className="fade-in fade-in-delay-4 p-6">
<nav className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-2">
<div className="flex items-center justify-between">
<button className="flex-1 flex flex-col items-center py-4 px-3 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-700/30 transition-all duration-200">
<svg className="lucide lucide-palette w-5 h-5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="text-xs mt-2 font-medium">Scene</span>
</button>
<button className="flex-1 flex flex-col items-center py-4 px-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 relative">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs mt-2 font-medium">Mood</span>
<div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-cyan-400 rounded-full"></div>
</button>
<button className="flex-1 flex flex-col items-center py-4 px-3 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-700/30 transition-all duration-200">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs mt-2 font-medium">Schedule</span>
</button>
<button className="flex-1 flex flex-col items-center py-4 px-3 rounded-2xl text-slate-400 hover:text-white hover:bg-slate-700/30 transition-all duration-200">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs mt-2 font-medium">Timer</span>
</button>
</div>
</nav>
</div>
</div>


    </>
  );
}
