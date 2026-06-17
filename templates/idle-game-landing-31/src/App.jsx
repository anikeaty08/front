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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Game State
        let score = 0;
        let clickPower = 1;
        let bps = 0;

        const upgrades = {
            basket: { id: 'basket', cost: 15, lvl: 0, costMult: 1.2, powerAdd: 1, type: 'click', name: 'Enhanced Grip' },
            planter: { id: 'planter', cost: 100, lvl: 0, costMult: 1.15, powerAdd: 1, type: 'auto', name: 'Hydroponic Pod' },
            drone: { id: 'drone', cost: 1100, lvl: 0, costMult: 1.15, powerAdd: 5, type: 'auto', name: 'Harvest Drone' }
        };

        // DOM Elements
        const elScore = document.getElementById('score');
        const elBps = document.getElementById('bps');
        const berryWrapper = document.getElementById('berry-wrapper');

        // Core Functions
        function updateDisplay() {
            elScore.innerText = Math.floor(score).toLocaleString();
            elBps.innerText = `${bps.toFixed(1)} / sec`;

            // Update Buttons
            Object.values(upgrades).forEach(upg => {
                const btn = document.getElementById(`btn-${upg.id}`);
                const costEl = document.getElementById(`cost-${upg.id}`);
                const lvlEl = document.getElementById(`lvl-${upg.id}`);
                
                costEl.innerText = Math.floor(upg.cost).toLocaleString();
                lvlEl.innerText = `Lvl ${upg.lvl}`;
                
                if (score >= upg.cost) {
                    btn.removeAttribute('disabled');
                } else {
                    btn.setAttribute('disabled', 'true');
                }
            });
        }

        function clickBerry(e) {
            score += clickPower;
            spawnFloater(e, `+${clickPower}`);
            updateDisplay();
            
            // Trigger jump animation
            berryWrapper.classList.remove('jump-anim');
            void berryWrapper.offsetWidth; // Force a reflow to restart the animation
            berryWrapper.classList.add('jump-anim');
        }

        function buyUpgrade(id) {
            const upg = upgrades[id];
            if (score >= upg.cost) {
                score -= upg.cost;
                upg.lvl += 1;
                
                // Increase next cost
                upg.cost = upg.cost * upg.costMult;

                // Apply power
                if (upg.type === 'click') {
                    clickPower += upg.powerAdd;
                } else if (upg.type === 'auto') {
                    bps += upg.powerAdd;
                }
                
                updateDisplay();
            }
        }

        // Visual Effects
        function spawnFloater(e, text) {
            const container = e.currentTarget;
            const rect = container.getBoundingClientRect();
            
            // Randomize position slightly around click
            const offsetX = (Math.random() - 0.5) * 40;
            const x = e.clientX - rect.left + offsetX;
            const y = e.clientY - rect.top;

            const floater = document.createElement('div');
            floater.innerText = text;
            floater.className = 'absolute text-rose-300 font-medium text-sm pointer-events-none select-none z-50 transition-all duration-[400ms] ease-out';
            
            floater.style.left = `${x}px`;
            floater.style.top = `${y}px`;
            floater.style.transform = 'translate(-50%, -50%) scale(0.5)';
            floater.style.opacity = '0';

            container.appendChild(floater);

            // Trigger animation frame
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    floater.style.transform = `translate(-50%, -80px) scale(1.2)`;
                    floater.style.opacity = '1';
                });
            });

            // Cleanup
            setTimeout(() => {
                floater.style.opacity = '0';
                setTimeout(() => floater.remove(), 400);
            }, 300);
        }

        // Game Loop (runs 10x per second for smooth score updates)
        setInterval(() => {
            if (bps > 0) {
                score += bps / 10;
                updateDisplay();
            }
        }, 100);

        // Initial setup
        updateDisplay();
    
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
      

<header className="flex justify-between items-center px-8 py-6 border-b border-zinc-900/50 backdrop-blur-md">
<div className="text-xl font-medium tracking-tighter text-zinc-100">SBRY</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:chart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full h-full overflow-hidden">

<section className="flex-1 flex flex-col items-center justify-center p-8 relative">

<div className="absolute top-12 left-0 right-0 text-center space-y-1 z-20 pointer-events-none">
<h2 className="text-xs font-medium text-zinc-500 tracking-widest uppercase">Yield</h2>
<div className="text-7xl md:text-8xl font-medium tracking-tighter tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500" id="score">0</div>
<div className="text-sm font-medium text-zinc-500 tracking-tight" id="bps">0.0 / sec</div>
</div>

<div className="relative group cursor-pointer mt-24" id="berry-btn" onclick="clickBerry(event)">

<div className="absolute inset-0 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-700 ease-out"></div>

<div className="transform transition-transform duration-100 group-hover:scale-[1.02] relative" id="berry-wrapper">

<div className="absolute -top-6 left-0 right-0 flex justify-center items-end text-emerald-400 drop-shadow-md z-20 pointer-events-none">
<iconify-icon className="-rotate-[40deg] translate-x-4 translate-y-3 origin-bottom-right" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
<iconify-icon className="z-10 origin-bottom" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="60"></iconify-icon>
<iconify-icon className="rotate-[40deg] -translate-x-4 translate-y-3 origin-bottom-left" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>

<div className="relative z-10 w-56 h-64 bg-gradient-to-br from-red-500 via-rose-600 to-rose-900 shadow-2xl shadow-red-900/30 border-t border-red-400/50 overflow-hidden" style={{borderRadius: '50% 50% 50% 50% / 30% 30% 70% 70%'}}>

<div className="opacity-80 absolute top-0 right-0 bottom-0 left-0" style="background-image: 
                            radial-gradient(ellipse at 50% 50%, #fde047 1.5px, transparent 2.5px), 
                            radial-gradient(circle at 50% 50%, #7f1d1d 4px, transparent 5px), 
                            radial-gradient(ellipse at 50% 50%, #fde047 1.5px, transparent 2.5px), 
                            radial-gradient(circle at 50% 50%, #7f1d1d 4px, transparent 5px); 
                            background-size: 32px 32px; 
                            background-position: 0 0, 0 1px, 16px 16px, 16px 17px">
</div>

<div className="absolute inset-0 pointer-events-none" style={{borderRadius: 'inherit', boxShadow: 'inset 0 15px 30px rgba(255, 255, 255, 0.15), inset 0 -20px 40px rgba(0,0,0,0.5)'}}></div>
</div>
</div>
</div>
</section>

<aside className="w-full md:w-[380px] border-l border-zinc-900/50 bg-zinc-950/50 p-6 flex flex-col gap-8 overflow-y-auto">
<header>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-1">Infrastructure</h3>
<p className="text-xs text-zinc-500">Automate and enhance your yield.</p>
</header>
<div className="flex flex-col gap-4">

<button className="group w-full text-left bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed" disabled="true" id="btn-basket" onclick="buyUpgrade('basket')">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center bg-zinc-950 border border-zinc-800 rounded-xl text-rose-400 group-hover:text-rose-300 transition-colors shadow-sm">
<iconify-icon icon="solar:hand-stars-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200 tracking-tight">Enhanced Grip</div>
<div className="text-xs text-zinc-500">+1 yield per manual action</div>
</div>
</div>
<div className="text-xs font-medium text-zinc-600 bg-zinc-900 px-2 py-1 rounded-md" id="lvl-basket">Lvl 0</div>
</div>
<div className="flex justify-between items-end mt-4 pt-4 border-t border-zinc-800/50">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Investment</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-500" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="text-sm font-medium text-zinc-300 tabular-nums tracking-tight" id="cost-basket">15</span>
</div>
</div>
</button>

<button className="group w-full text-left bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed" disabled="true" id="btn-planter" onclick="buyUpgrade('planter')">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center bg-zinc-950 border border-zinc-800 rounded-xl text-emerald-400 group-hover:text-emerald-300 transition-colors shadow-sm">
<iconify-icon icon="solar:sprout-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200 tracking-tight">Hydroponic Pod</div>
<div className="text-xs text-zinc-500">+1.0 yield per second</div>
</div>
</div>
<div className="text-xs font-medium text-zinc-600 bg-zinc-900 px-2 py-1 rounded-md" id="lvl-planter">Lvl 0</div>
</div>
<div className="flex justify-between items-end mt-4 pt-4 border-t border-zinc-800/50">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Investment</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-500" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="text-sm font-medium text-zinc-300 tabular-nums tracking-tight" id="cost-planter">100</span>
</div>
</div>
</button>

<button className="group w-full text-left bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 hover:bg-zinc-800/40 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed" disabled="true" id="btn-drone" onclick="buyUpgrade('drone')">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center bg-zinc-950 border border-zinc-800 rounded-xl text-blue-400 group-hover:text-blue-300 transition-colors shadow-sm">
<iconify-icon icon="solar:ufo-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200 tracking-tight">Harvest Drone</div>
<div className="text-xs text-zinc-500">+5.0 yield per second</div>
</div>
</div>
<div className="text-xs font-medium text-zinc-600 bg-zinc-900 px-2 py-1 rounded-md" id="lvl-drone">Lvl 0</div>
</div>
<div className="flex justify-between items-end mt-4 pt-4 border-t border-zinc-800/50">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Investment</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-500" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="text-sm font-medium text-zinc-300 tabular-nums tracking-tight" id="cost-drone">1,100</span>
</div>
</div>
</button>
</div>
</aside>
</main>


    </>
  );
}
