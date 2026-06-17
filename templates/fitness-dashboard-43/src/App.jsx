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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Mobile Menu Toggle
      document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
          const sidebar = document.getElementById('sidebar');
          sidebar.classList.toggle('hidden');
          sidebar.classList.toggle('flex');
          sidebar.classList.toggle('absolute');
          sidebar.classList.toggle('z-50');
          sidebar.classList.toggle('h-full');
      });

      // Log Activity Alert
      document.getElementById('log-activity-btn')?.addEventListener('click', () => {
          alert('Log Activity dialog would appear here.');
      });

      // Sidebar Navigation Active State
      document.querySelectorAll('nav a').forEach(link => {
          link.addEventListener('click', (e) => {
              e.preventDefault();
              document.querySelectorAll('nav a').forEach(l => {
                  l.className = 'flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-neutral-900 hover:text-white text-sm font-normal transition-colors';
              });
              link.className = 'flex items-center gap-3 px-3 py-2 rounded-lg bg-neutral-800/50 text-white text-sm font-normal transition-colors';
          });
      });

      // Dropdown Functionality
      const dropBtn = document.getElementById('dropdown-btn');
      const dropMenu = document.getElementById('dropdown-menu');
      const dropText = document.getElementById('dropdown-text');

      if(dropBtn && dropMenu) {
          dropBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              dropMenu.classList.toggle('hidden');
              dropMenu.classList.toggle('flex');
          });

          document.querySelectorAll('.dropdown-item').forEach(item => {
              item.addEventListener('click', (e) => {
                  e.stopPropagation();
                  dropText.textContent = item.textContent;
                  dropMenu.classList.add('hidden');
                  dropMenu.classList.remove('flex');
              });
          });

          document.addEventListener('click', () => {
              dropMenu.classList.add('hidden');
              dropMenu.classList.remove('flex');
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
      

<aside className="w-64 border-r border-neutral-800/60 bg-neutral-950 p-6 hidden md:flex flex-col justify-between shrink-0" id="sidebar">
<div>

<div className="flex items-center gap-2 mb-10">
<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
<iconify-icon className="text-black text-sm" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tighter text-white">
            VTLTY
          </span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-neutral-800/50 text-white text-sm font-normal transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
            Overview
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-neutral-900 hover:text-white text-sm font-normal transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:running-linear" strokeWidth="1.5"></iconify-icon>
            Activities
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-neutral-900 hover:text-white text-sm font-normal transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
            Analytics
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-neutral-900 hover:text-white text-sm font-normal transition-colors" href="#">
<iconify-icon className="text-base" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
            Goals
          </a>
</nav>
</div>

<div className="space-y-6">

<label className="flex items-center justify-between cursor-pointer group px-2">
<span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
            Sync Devices
          </span>
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="block w-7 h-3.5 bg-neutral-800 rounded-full border border-neutral-700 peer-checked:bg-white peer-checked:border-white transition-colors"></div>
<div className="absolute left-[2px] w-2.5 h-2.5 bg-neutral-400 rounded-full transition-transform peer-checked:translate-x-3.5 peer-checked:bg-black shadow-sm"></div>
</div>
</label>

<button className="flex items-center gap-3 w-full p-2 hover:bg-neutral-900 rounded-lg transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Marcus Chen</p>
<p className="text-xs text-neutral-500 truncate">Free Plan</p>
</div>
<iconify-icon className="text-neutral-500" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-neutral-950 relative">

<div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-neutral-900/40 to-transparent pointer-events-none"></div>

<header className="flex items-center justify-between px-6 py-8 md:px-10 shrink-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-neutral-400 hover:text-white" id="mobile-menu-btn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div>
<p className="text-xs text-neutral-500 mb-1 tracking-wide uppercase">
              Thursday, Oct 26
            </p>
<h1 className="text-xl md:text-2xl font-medium tracking-tight text-white">
              Dashboard
            </h1>
</div>
</div>
<button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-neutral-200 transition-colors shadow-sm" id="log-activity-btn">
<iconify-icon className="text-base" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">Log Activity</span>
</button>
</header>

<div className="flex-1 overflow-y-auto px-6 pb-10 md:px-10 z-10 custom-scrollbar">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5 hover:bg-neutral-900/60 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-neutral-400 font-normal">Steps</span>
<div className="w-7 h-7 rounded-md bg-neutral-800 border border-neutral-700/50 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:footsteps-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 mb-3">
<span className="text-2xl font-medium tracking-tight text-white">
                12,402
              </span>
</div>

<div className="w-full bg-neutral-950 rounded-full h-1 border border-neutral-800/50 overflow-hidden">
<div className="bg-white h-full rounded-full w-[85%]"></div>
</div>
<p className="text-xs text-neutral-500 mt-2">85% of daily goal</p>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5 hover:bg-neutral-900/60 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-neutral-400 font-normal">
                Active Energy
              </span>
<div className="w-7 h-7 rounded-md bg-neutral-800 border border-neutral-700/50 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 mb-3">
<span className="text-2xl font-medium tracking-tight text-white">
                640
              </span>
<span className="text-sm text-neutral-500 font-normal">kcal</span>
</div>
<div className="w-full bg-neutral-950 rounded-full h-1 border border-neutral-800/50 overflow-hidden">
<div className="bg-neutral-400 h-full rounded-full w-[60%]"></div>
</div>
<p className="text-xs text-neutral-500 mt-2">60% of daily goal</p>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5 hover:bg-neutral-900/60 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-neutral-400 font-normal">
                Training Time
              </span>
<div className="w-7 h-7 rounded-md bg-neutral-800 border border-neutral-700/50 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 mb-3">
<span className="text-2xl font-medium tracking-tight text-white">
                45
              </span>
<span className="text-sm text-neutral-500 font-normal">min</span>
</div>
<div className="w-full bg-neutral-950 rounded-full h-1 border border-neutral-800/50 overflow-hidden">
<div className="bg-neutral-500 h-full rounded-full w-[100%]"></div>
</div>
<p className="text-xs text-neutral-500 mt-2">Goal reached</p>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5 hover:bg-neutral-900/60 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-neutral-400 font-normal">
                Sleep Score
              </span>
<div className="w-7 h-7 rounded-md bg-neutral-800 border border-neutral-700/50 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:moon-sleep-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 mb-3">
<span className="text-2xl font-medium tracking-tight text-white">
                82
              </span>
<span className="text-sm text-neutral-500 font-normal">/100</span>
</div>
<div className="w-full bg-neutral-950 rounded-full h-1 border border-neutral-800/50 overflow-hidden">
<div className="bg-neutral-300 h-full rounded-full w-[82%]"></div>
</div>
<p className="text-xs text-neutral-500 mt-2">7h 12m duration</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-neutral-900/20 border border-neutral-800/50 rounded-xl p-6 flex flex-col">
<div className="flex justify-between items-center mb-8">
<h2 className="text-base font-medium tracking-tight text-white">
                Activity Volume
              </h2>

<div className="relative group cursor-pointer" id="dropdown-container">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-800 bg-neutral-900/50 text-xs text-neutral-300 hover:bg-neutral-800 transition-colors" id="dropdown-btn">
<span id="dropdown-text">This Week</span>
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="hidden absolute right-0 top-full mt-1 w-32 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl overflow-hidden z-20 text-xs flex-col" id="dropdown-menu">
<div className="px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors dropdown-item">
                    Today
                  </div>
<div className="px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors dropdown-item">
                    This Week
                  </div>
<div className="px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors dropdown-item">
                    This Month
                  </div>
</div>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-2 sm:gap-4 mt-auto h-48">

<div className="flex flex-col justify-between h-full text-xs text-neutral-600 pb-6 pr-2 border-r border-neutral-800/50">
<span>100</span>
<span>50</span>
<span>0</span>
</div>

<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="w-full max-w-[2rem] bg-neutral-800/80 rounded-t-sm h-[30%] group-hover:bg-neutral-700 transition-colors relative"></div>
<span className="text-xs text-neutral-500">M</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="w-full max-w-[2rem] bg-neutral-800/80 rounded-t-sm h-[45%] group-hover:bg-neutral-700 transition-colors relative"></div>
<span className="text-xs text-neutral-500">T</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="w-full max-w-[2rem] bg-neutral-800/80 rounded-t-sm h-[60%] group-hover:bg-neutral-700 transition-colors relative"></div>
<span className="text-xs text-neutral-500">W</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="absolute -top-8 bg-neutral-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                  85 min
                </div>
<div className="w-full max-w-[2rem] bg-white rounded-t-sm h-[85%] relative shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>
<span className="text-xs text-white font-medium">T</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="w-full max-w-[2rem] bg-neutral-800/80 rounded-t-sm h-[20%] group-hover:bg-neutral-700 transition-colors relative"></div>
<span className="text-xs text-neutral-500">F</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="w-full max-w-[2rem] bg-neutral-800/80 rounded-t-sm h-[50%] group-hover:bg-neutral-700 transition-colors relative"></div>
<span className="text-xs text-neutral-500">S</span>
</div>
<div className="w-full flex flex-col items-center gap-3 group relative h-full justify-end">
<div className="w-full max-w-[2rem] bg-neutral-800/80 rounded-t-sm h-[10%] group-hover:bg-neutral-700 transition-colors relative"></div>
<span className="text-xs text-neutral-500">S</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-neutral-900/20 border border-neutral-800/50 rounded-xl p-6">
<h2 className="text-base font-medium tracking-tight text-white mb-5">
                Daily Habits
              </h2>
<div className="space-y-4">

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 shrink-0">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-full h-full border border-neutral-600 rounded-[3px] bg-neutral-950 peer-checked:bg-white peer-checked:border-white transition-colors"></div>
<iconify-icon className="absolute text-black opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                    Drink 2L Water
                  </span>
</label>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 shrink-0">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-full h-full border border-neutral-600 rounded-[3px] bg-neutral-950 peer-checked:bg-white peer-checked:border-white transition-colors"></div>
<iconify-icon className="absolute text-black opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                    Stretching (10m)
                  </span>
</label>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full h-full border border-neutral-600 rounded-[3px] bg-neutral-950 peer-checked:bg-white peer-checked:border-white transition-colors"></div>
<iconify-icon className="absolute text-black opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    Read 10 pages
                  </span>
</label>
</div>
</div>

<div className="bg-neutral-900/20 border border-neutral-800/50 rounded-xl p-6 flex-1">
<div className="flex justify-between items-center mb-5">
<h2 className="text-base font-medium tracking-tight text-white">
                  Recent
                </h2>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">
                  View All
                </a>
</div>
<div className="space-y-4">

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:bg-neutral-800 transition-colors">
<iconify-icon className="text-lg" icon="solar:bicycle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">
                      Morning Cycling
                    </p>
<div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
<span>12.4 km</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>45 min</span>
</div>
</div>
<span className="text-xs text-neutral-600">Today</span>
</div>

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:bg-neutral-800 transition-colors">
<iconify-icon className="text-lg" icon="solar:dumbbell-large-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">
                      Upper Body Strength
                    </p>
<div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
<span>340 kcal</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>60 min</span>
</div>
</div>
<span className="text-xs text-neutral-600">Yesterday</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<style>
      /* Custom subtle scrollbar */
      .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #262626;
          border-radius: 10px;
      }
      .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: #404040;
      }
    </style>


    </>
  );
}
