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



        // Start Game Logic: Hold Hover
        let chargeTimer;
        const LOADING_TIME = 2500; // Matches CSS transition time

        function startCharge(element) {
            // Check if already charging to prevent double trigger
            if(element.classList.contains('charging')) return;
            element.classList.add('charging');

            chargeTimer = setTimeout(() => {
                triggerGameStart();
            }, LOADING_TIME);
        }

        function stopCharge(element) {
            clearTimeout(chargeTimer);
            element.classList.remove('charging');
            // Force reflow of the progress bar if needed, handled by CSS removing hover state
        }

        function triggerGameStart() {
            const loader = document.getElementById('loading-screen');
            loader.classList.remove('opacity-0');
            loader.classList.add('opacity-100');
            
            // Disable UI
            document.querySelector('.relative.z-10').style.opacity = '0';
            
            setTimeout(() => {
                console.log("Game Environment Loaded");
            }, 3000);
        }

        // Settings Logic: Hover Management
        const btnOptions = document.getElementById('btn-options');
        const settingsContainer = document.getElementById('settings-container');
        const settingsPanel = document.getElementById('settings-panel');
        let settingsTimeout;

        // Show Settings
        btnOptions.addEventListener('mouseenter', () => {
            clearTimeout(settingsTimeout);
            settingsContainer.classList.remove('opacity-0', 'pointer-events-none');
            settingsContainer.classList.add('opacity-100', 'pointer-events-auto');
            settingsPanel.classList.remove('scale-95');
            settingsPanel.classList.add('scale-100');
        });

        // Keep Open when on Panel
        settingsContainer.addEventListener('mouseenter', () => {
            clearTimeout(settingsTimeout);
        });

        // Hide when leaving Button (with delay to allow moving to panel)
        btnOptions.addEventListener('mouseleave', () => {
            settingsTimeout = setTimeout(hideSettings, 300);
        });

        // Hide when leaving Panel
        settingsContainer.addEventListener('mouseleave', () => {
            hideSettings();
        });

        function hideSettings() {
            settingsContainer.classList.remove('opacity-100', 'pointer-events-auto');
            settingsContainer.classList.add('opacity-0', 'pointer-events-none');
            settingsPanel.classList.remove('scale-100');
            settingsPanel.classList.add('scale-95');
        }

        // Parallax Effect
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX) / 40;
            const y = (window.innerHeight - e.pageY) / 40;
            const artifact = document.getElementById('artifact');
            if(artifact) {
                artifact.style.transform = `translate(${x}px, ${y}px)`;
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
      

<div className="noise-overlay"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900/40 via-stone-950 to-black z-0"></div>
<div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-stone-800/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-16 lg:p-24 pointer-events-none">

<header className="flex justify-between items-start pointer-events-auto">
<div className="flex flex-col gap-1 cursor-default group">
<h1 className="font-relic text-6xl md:text-8xl tracking-tight text-stone-100 drop-shadow-2xl transition-all duration-700 group-hover:tracking-normal group-hover:text-white">RELIC</h1>
<div className="h-px w-12 bg-stone-600 mt-2 mb-1 group-hover:w-full transition-all duration-700"></div>
<p className="text-xs tracking-[0.3em] uppercase text-stone-500">Echoes of the Forgotten</p>
</div>
<div className="hidden md:flex items-center gap-2 text-stone-600 text-xs tracking-widest uppercase">
<span>Ver 0.9.4</span>
<span className="w-1 h-1 bg-stone-700 rounded-full"></span>
<span>Early Access</span>
</div>
</header>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<div className="relative w-64 h-64 md:w-96 md:h-96 artifact-float transition-transform duration-100 ease-out" id="artifact">
<div className="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl glow-pulse"></div>
<div className="absolute inset-0 border border-stone-800/40 rounded-full rotate-ring"></div>
<div className="absolute inset-8 border border-stone-800/30 rounded-full rotate-ring" style={{animationDirection: 'reverse', animationDuration: '30s'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border border-stone-700/50 rotate-45 backdrop-blur-sm bg-stone-900/10 shadow-2xl transition-transform duration-1000 hover:rotate-90 hover:scale-110"></div>
<div className="absolute w-32 h-32 border border-stone-700/50 rotate-12 backdrop-blur-sm"></div>
<div className="absolute w-4 h-4 bg-stone-200 shadow-[0_0_30px_rgba(255,255,255,0.4)] rotate-45"></div>
</div>
</div>
</div>

<nav className="w-full max-w-xs flex flex-col gap-6 mt-auto pointer-events-auto" id="main-menu">

<div className="menu-item group relative flex items-center gap-4 text-left w-full cursor-none py-2" id="btn-continue" onmouseenter="startCharge(this)" onmouseleave="stopCharge(this)">

<div className="absolute inset-0 bg-stone-800/0 group-hover:bg-stone-800/20 -z-10 skew-x-[-10deg] transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 h-[1px] bg-stone-200 hover-charge z-20"></div>
<div className="w-8 h-[1px] bg-stone-700 group-hover:bg-stone-200 transition-colors"></div>
<div className="flex flex-col">
<span className="text-lg md:text-xl font-light tracking-[0.2em] text-stone-400 group-hover:text-stone-100 transition-colors uppercase">Continue</span>
<span className="text-[10px] tracking-widest text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700">Hover to Initialize</span>
</div>
</div>
<div className="menu-item group relative flex items-center gap-4 text-left w-full cursor-none py-2" id="btn-new" onmouseenter="startCharge(this)" onmouseleave="stopCharge(this)">
<div className="absolute bottom-0 left-0 h-[1px] bg-stone-200 hover-charge z-20"></div>
<div className="w-8 h-[1px] bg-stone-700 group-hover:bg-stone-200 transition-colors"></div>
<div className="flex flex-col">
<span className="text-lg md:text-xl font-light tracking-[0.2em] text-stone-400 group-hover:text-stone-100 transition-colors uppercase">New Journey</span>
<span className="text-[10px] tracking-widest text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700">Hover to Initialize</span>
</div>
</div>

<div className="menu-item group relative flex items-center gap-4 text-left w-full py-2 z-50" id="btn-options">
<div className="w-4 h-[1px] bg-stone-800 group-hover:bg-stone-400 transition-colors"></div>
<span className="text-base font-light tracking-[0.15em] text-stone-500 group-hover:text-stone-300 transition-colors uppercase">System Access</span>
</div>
<div className="menu-item group flex items-center gap-4 text-left w-full py-2">
<div className="w-4 h-[1px] bg-stone-800 group-hover:bg-red-900 transition-colors"></div>
<span className="text-base font-light tracking-[0.15em] text-stone-500 group-hover:text-stone-300 transition-colors uppercase">Sever Connection</span>
</div>
</nav>

<div className="hidden md:flex absolute bottom-16 right-16 flex-col items-end gap-4 text-stone-600 pointer-events-auto">
<div className="flex gap-4">
<div className="group relative p-2">
<iconify-icon className="text-stone-600 group-hover:text-stone-200 transition-colors duration-300" icon="solar:globus-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="absolute -bottom-2 right-0 text-[10px] w-24 text-right opacity-0 group-hover:opacity-100 transition-opacity">US-EAST-1</div>
</div>
<div className="group relative p-2">
<iconify-icon className="text-stone-600 group-hover:text-stone-200 transition-colors duration-300" icon="solar:gamepad-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<p className="text-xs font-mono opacity-50">STATUS: IDLE</p>
</div>
</div>


<div className="fixed inset-0 z-40 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-700 backdrop-blur-sm bg-black/40" id="settings-container">
<div className="bg-stone-950/95 border border-stone-800 w-full max-w-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform scale-95 transition-all duration-500" id="settings-panel">
<div className="flex justify-between items-center mb-10 border-b border-stone-800 pb-4">
<div className="flex flex-col">
<h2 className="text-2xl font-light tracking-[0.2em] text-stone-200 uppercase">System Config</h2>
<span className="text-[10px] text-stone-600 tracking-widest uppercase mt-1">Hover outside to close</span>
</div>
<iconify-icon className="text-stone-600 animate-spin-slow" icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-8">
<h3 className="text-xs font-semibold tracking-widest text-stone-500 uppercase flex items-center gap-2">
<iconify-icon icon="solar:soundwave-linear" strokeWidth="1.5"></iconify-icon> Audio
                    </h3>
<div className="space-y-4 group">
<div className="flex justify-between text-xs tracking-wider text-stone-400 uppercase group-hover:text-stone-200 transition-colors">
<span>Master Output</span>
<span className="vol-disp">75%</span>
</div>
<input className="w-full" max="100" min="0" oninput="this.previousElementSibling.querySelector('.vol-disp').innerText = this.value + '%'" type="range" value="75"/>
</div>
<div className="space-y-4 group">
<div className="flex justify-between text-xs tracking-wider text-stone-400 uppercase group-hover:text-stone-200 transition-colors">
<span>Music Level</span>
<span className="vol-disp">60%</span>
</div>
<input className="w-full" max="100" min="0" oninput="this.previousElementSibling.querySelector('.vol-disp').innerText = this.value + '%'" type="range" value="60"/>
</div>
</div>

<div className="space-y-8">
<h3 className="text-xs font-semibold tracking-widest text-stone-500 uppercase flex items-center gap-2">
<iconify-icon icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon> Display
                    </h3>
<div className="flex items-center justify-between group py-2">
<span className="text-sm text-stone-400 group-hover:text-white transition-colors">Fullscreen</span>
<div className="w-3 h-3 border border-stone-600 bg-stone-900 group-hover:bg-stone-200 transition-colors rotate-45"></div>
</div>
<div className="flex items-center justify-between group py-2">
<span className="text-sm text-stone-400 group-hover:text-white transition-colors">V-Sync</span>
<div className="w-3 h-3 border border-stone-600 bg-stone-900 group-hover:bg-stone-500 transition-colors rotate-45"></div>
</div>
<div className="space-y-3 pt-2">
<span className="text-xs text-stone-500 uppercase tracking-wider block">Render Quality</span>
<div className="flex gap-1 h-8">
<div className="flex-1 border border-stone-800 bg-stone-900/50 hover:bg-stone-800 hover:border-stone-600 transition-all flex items-center justify-center text-[10px] text-stone-500 hover:text-stone-200 cursor-crosshair">LO</div>
<div className="flex-1 border border-stone-800 bg-stone-900/50 hover:bg-stone-800 hover:border-stone-600 transition-all flex items-center justify-center text-[10px] text-stone-500 hover:text-stone-200 cursor-crosshair">MD</div>
<div className="flex-1 border border-stone-500 bg-stone-800 flex items-center justify-center text-[10px] text-stone-100 shadow-[0_0_15px_rgba(255,255,255,0.1)]">HI</div>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-4 border-t border-stone-900 flex justify-between items-center text-[10px] text-stone-600 uppercase tracking-widest">
<span>ID: 884-XJ-92</span>
<span className="group-hover:text-stone-400 transition-colors">Auto-Saving...</span>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 pointer-events-none opacity-0 flex flex-col items-center justify-center bg-black transition-opacity duration-1000" id="loading-screen">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800/20 to-black"></div>
<div className="w-24 h-24 border border-stone-800 rounded-full flex items-center justify-center relative">
<div className="absolute inset-0 border-t border-stone-200 rounded-full animate-spin"></div>
<div className="w-2 h-2 bg-stone-200 rounded-full"></div>
</div>
<p className="mt-8 text-xs tracking-[0.5em] text-stone-400 uppercase animate-pulse">Synchronizing</p>
</div>


    </>
  );
}
