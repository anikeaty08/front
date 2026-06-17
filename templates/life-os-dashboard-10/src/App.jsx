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
    


      document.addEventListener('DOMContentLoaded', () => {
          // User Name Logic
          const nameEl = document.getElementById('user-name');
          const savedName = localStorage.getItem('lifeos_username');
          if (savedName) nameEl.textContent = savedName;
          nameEl.addEventListener('input', () => localStorage.setItem('lifeos_username', nameEl.textContent));
          nameEl.addEventListener('keydown', (e) => { if(e.key === 'Enter') { e.preventDefault(); nameEl.blur(); }});

          // Task Logic
          const taskList = document.getElementById('task-list');
          const makeTaskEditable = (el) => {
              const p = el.querySelector('p');
              const meta = el.querySelector('p + span');
              if(p) { p.contentEditable = true; p.classList.add('outline-none', 'focus:text-indigo-300'); }
              if(meta) { meta.contentEditable = true; meta.classList.add('outline-none', 'focus:text-zinc-400'); }
          };

          // Initialize existing tasks
          taskList.querySelectorAll('label').forEach(makeTaskEditable);

          document.getElementById('add-task-btn').addEventListener('click', () => {
              const div = document.createElement('div');
              div.innerHTML = `<label class="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/item animate-in fade-in slide-in-from-bottom-2">
                  <div class="relative flex items-center mt-0.5">
                      <input type="checkbox" class="peer appearance-none w-4 h-4 border border-zinc-600 rounded-md bg-transparent checked:bg-indigo-500 checked:border-indigo-500 transition-all">
                      <i data-lucide="check" class="w-2.5 h-2.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm text-zinc-300 group-hover/item:text-zinc-100 transition-colors peer-checked:line-through peer-checked:text-zinc-600">New Task</p>
                      <span class="text-[10px] text-zinc-500 mt-1 inline-block">Category • Now</span>
                  </div>
                  <button onclick="this.closest('label').remove()" class="text-zinc-600 hover:text-red-400 opacity-0 group-hover/item:opacity-100 transition-all"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
              </label>`;
              const newEl = div.firstElementChild;
              makeTaskEditable(newEl);
              taskList.prepend(newEl);
              lucide.createIcons();
              newEl.querySelector('p').focus();
          });

          // Goals Logic
          const goalsList = document.getElementById('goals-list');
          const makeGoalEditable = (el) => {
              const title = el.querySelector('span.text-sm');
              const meta = el.querySelector('span.text-\\[10px\\]'); // Escape for JS selector
              if(title) { title.contentEditable = true; title.classList.add('outline-none', 'focus:text-indigo-300'); }
              if(meta) { meta.contentEditable = true; meta.classList.add('outline-none'); }

              const bar = el.querySelector('.w-full.bg-zinc-800');
              if(bar) {
                  bar.style.cursor = 'pointer';
                  bar.addEventListener('click', function(e) {
                       const rect = this.getBoundingClientRect();
                       const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
                       this.firstElementChild.style.width = pct + '%';
                       this.firstElementChild.className = 'bg-zinc-200 h-full transition-all duration-500'; // Reset width class if needed
                  });
              }
          };

          // Initialize existing goals
          goalsList.querySelectorAll(':scope > div').forEach(makeGoalEditable);

          document.getElementById('add-goal-btn').addEventListener('click', () => {
              const div = document.createElement('div');
              div.innerHTML = `<div class="bg-zinc-900/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-2 group animate-in fade-in zoom-in-95 relative">
                  <button onclick="this.closest('div').remove()" class="absolute top-2 right-2 text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"><i data-lucide="x" class="w-3 h-3"></i></button>
                  <div class="flex justify-between items-start">
                      <i data-lucide="target" class="w-4 h-4 text-zinc-500"></i>
                      <span class="text-[10px] text-zinc-500">Ongoing</span>
                  </div>
                  <span class="text-sm text-zinc-200">New Goal</span>
                  <div class="w-full bg-zinc-800 h-1 rounded-full overflow-hidden mt-1">
                      <div class="bg-zinc-200 w-[0%] h-full"></div>
                  </div>
              </div>`;
              const newEl = div.firstElementChild;
              makeGoalEditable(newEl);
              goalsList.appendChild(newEl);
              lucide.createIcons();
              newEl.querySelector('span.text-sm').focus();
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDuration: '5s'}}></div>
<div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-violet-600/20 rounded-full blur-[100px] animate-pulse" style={{animationDuration: '3s'}}></div>
</div>
<div className="relative z-10 flex flex-col md:flex-row h-screen overflow-hidden p-2 md:p-6 gap-6">

<aside className="glass-panel w-full md:w-20 md:flex-col flex-row rounded-3xl p-4 flex items-center justify-between md:justify-start gap-8 z-50 shrink-0 h-16 md:h-full transition-all duration-300">

<div className="h-10 w-10 flex items-center justify-center bg-zinc-100 text-zinc-950 rounded-xl font-semibold tracking-tighter text-sm mb-0 md:mb-8 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          OS
        </div>

<nav className="flex flex-row md:flex-col gap-6 md:gap-8 items-center justify-center flex-1">
<a className="text-zinc-100 relative group" href="#">
<svg className="lucide lucide-layout-grid w-5 h-5 transition-transform duration-300 group-hover:scale-110" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
<span className="absolute -right-2 top-0 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors group" href="#">
<svg className="lucide lucide-check-circle w-5 h-5 transition-transform duration-300 group-hover:scale-110" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors group" href="#">
<svg className="lucide lucide-wallet w-5 h-5 transition-transform duration-300 group-hover:scale-110" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors group" href="#">
<svg className="lucide lucide-calendar w-5 h-5 transition-transform duration-300 group-hover:scale-110" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</a>
</nav>

<div className="mt-auto hidden md:flex flex-col gap-6 items-center">
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</a>
<img alt="User" className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</aside>

<main className="flex-1 flex flex-col gap-6 h-full overflow-y-auto no-scrollbar md:pr-2">

<header className="flex flex-col md:flex-row justify-between items-start md:items-center py-2 shrink-0">
<div>
<h1 className="text-2xl font-medium text-zinc-100 tracking-tight">
              Good morning,
              <span className="outline-none min-w-[1rem] inline-block border-b border-transparent focus:border-zinc-700 hover:border-zinc-800 transition-colors cursor-text placeholder-zinc-600" contenteditable="true" id="user-name" spellcheck="false">
                Aryan
              </span>
</h1>
<p className="text-xs text-zinc-500 mt-1 font-medium">
              Tuesday, October 24 • 4 Pending Tasks
            </p>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 neon-glow">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-zinc-300">
                All Systems Normal
              </span>
</div>
<button className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-6">

<div className="glass-panel rounded-3xl p-6 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col group transition-transform duration-500 hover:-translate-y-1">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
</div>
<h2 className="text-sm font-medium text-zinc-200">Today's Focus</h2>
</div>
<button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" id="add-task-btn">
                + New Task
              </button>
</div>
<div className="space-y-3 flex-1" id="task-list">

<label className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/item">
<div className="relative flex items-center mt-0.5">
<input className="peer appearance-none w-4 h-4 border border-zinc-600 rounded-md bg-transparent checked:bg-indigo-500 checked:border-indigo-500 transition-all" type="checkbox"/>
<svg className="lucide lucide-check w-2.5 h-2.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm text-zinc-300 group-hover/item:text-zinc-100 transition-colors peer-checked:line-through peer-checked:text-zinc-600 outline-none focus:text-indigo-300" contenteditable="true">
                    Review GST Returns
                  </p>
<span className="text-[10px] text-zinc-500 mt-1 inline-block outline-none focus:text-zinc-400" contenteditable="true">
                    Business • 10:00 AM
                  </span>
</div>
<span className="text-[10px] font-medium px-2 py-0.5 rounded border border-orange-500/20 text-orange-400 bg-orange-500/10">
                  High
                </span>
</label>

<label className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/item">
<div className="relative flex items-center mt-0.5">
<input checked="" className="peer appearance-none w-4 h-4 border border-zinc-600 rounded-md bg-transparent checked:bg-indigo-500 checked:border-indigo-500 transition-all" type="checkbox"/>
<svg className="lucide lucide-check w-2.5 h-2.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm text-zinc-300 group-hover/item:text-zinc-100 transition-colors line-through text-zinc-600 outline-none focus:text-indigo-300" contenteditable="true">
                    Design system meeting
                  </p>
<span className="text-[10px] text-zinc-500 mt-1 inline-block outline-none focus:text-zinc-400" contenteditable="true">
                    Work • Completed
                  </span>
</div>
</label>

<label className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/item">
<div className="relative flex items-center mt-0.5">
<input className="peer appearance-none w-4 h-4 border border-zinc-600 rounded-md bg-transparent checked:bg-indigo-500 checked:border-indigo-500 transition-all" type="checkbox"/>
<svg className="lucide lucide-check w-2.5 h-2.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm text-zinc-300 group-hover/item:text-zinc-100 transition-colors outline-none focus:text-indigo-300" contenteditable="true">
                    Yoga &amp; Meditation
                  </p>
<span className="text-[10px] text-zinc-500 mt-1 inline-block outline-none focus:text-zinc-400" contenteditable="true">
                    Health • 6:00 PM
                  </span>
</div>
</label>

<label className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/item">
<div className="relative flex items-center mt-0.5">
<input className="peer appearance-none w-4 h-4 border border-zinc-600 rounded-md bg-transparent checked:bg-indigo-500 checked:border-indigo-500 transition-all" type="checkbox"/>
<svg className="lucide lucide-check w-2.5 h-2.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm text-zinc-300 group-hover/item:text-zinc-100 transition-colors outline-none focus:text-indigo-300" contenteditable="true">
                    Order groceries on Blinkit
                  </p>
<span className="text-[10px] text-zinc-500 mt-1 inline-block outline-none focus:text-zinc-400" contenteditable="true">
                    Life • Later
                  </span>
</div>
</label>
</div>
</div>

<div className="glass-panel rounded-3xl p-6 flex flex-col justify-between group transition-transform duration-500 hover:-translate-y-1 relative overflow-hidden">

<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                +12.5%
              </span>
</div>
<div>
<p className="text-xs text-zinc-500 font-medium">Total Balance</p>
<h3 className="text-2xl font-medium text-white tracking-tight mt-1">
                ₹1,45,000
              </h3>
</div>

<div className="mt-4 h-12 flex items-end gap-1">
<div className="w-full bg-emerald-500/20 h-[30%] rounded-sm"></div>
<div className="w-full bg-emerald-500/20 h-[50%] rounded-sm"></div>
<div className="w-full bg-emerald-500/20 h-[40%] rounded-sm"></div>
<div className="w-full bg-emerald-500/20 h-[70%] rounded-sm"></div>
<div className="w-full bg-emerald-500/20 h-[60%] rounded-sm"></div>
<div className="w-full bg-emerald-500 h-[85%] rounded-sm shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<div className="w-full bg-emerald-500/20 h-[65%] rounded-sm"></div>
</div>
</div>

<div className="glass-panel rounded-3xl p-6 flex flex-col transition-transform duration-500 hover:-translate-y-1">
<div className="flex justify-between items-center mb-5">
<div className="flex items-center gap-3">
<div className="p-2 bg-pink-500/10 rounded-lg text-pink-400">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
<h2 className="text-sm font-medium text-zinc-200">Habits</h2>
</div>
</div>
<div className="space-y-4">

<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="text-zinc-300">Drink Water</span>
<span className="text-zinc-500">6/8</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-pink-500 to-rose-500 w-[75%] rounded-full shadow-[0_0_10px_rgba(236,72,153,0.3)]"></div>
</div>
</div>

<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="text-zinc-300">Reading</span>
<span className="text-zinc-500">30m</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-500 to-purple-500 w-[100%] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.3)]"></div>
</div>
</div>

<div className="group">
<div className="flex justify-between text-xs mb-1.5">
<span className="text-zinc-300">Sleep (8h)</span>
<span className="text-zinc-500">7.2h</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-[90%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-6 md:col-span-1 lg:col-span-1 row-span-2 flex flex-col transition-transform duration-500 hover:-translate-y-1 relative group">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
<svg className="lucide lucide-sticky-note w-4 h-4" data-lucide="sticky-note" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"></path>
<path d="M15 3v5a1 1 0 0 0 1 1h5"></path>
</svg>
</div>
<h2 className="text-sm font-medium text-zinc-200">Scratchpad</h2>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
<textarea className="w-full h-full bg-transparent resize-none outline-none text-sm text-zinc-400 placeholder-zinc-600 leading-relaxed font-light" placeholder="Capture your thoughts..."></textarea>

<div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-[10px] text-zinc-600">
                Last edited just now
              </span>
<button className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400">
<svg className="lucide lucide-save w-3.5 h-3.5" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
<path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
<path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
</svg>
</button>
</div>
</div>

<div className="glass-panel rounded-3xl p-6 md:col-span-2 lg:col-span-2 flex flex-col md:flex-row gap-6 transition-transform duration-500 hover:-translate-y-1">
<div className="flex-1">
<div className="flex items-center gap-3 mb-4 w-full">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
<svg className="lucide lucide-target w-4 h-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<h2 className="text-sm font-medium text-zinc-200">
                  Quarterly Goals
                </h2>
<button className="ml-auto text-xs text-zinc-500 hover:text-zinc-300 transition-colors" id="add-goal-btn">
                  + New Goal
                </button>
</div>
<div className="grid grid-cols-2 gap-4" id="goals-list">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-2">
<div className="flex justify-between items-start">
<svg className="lucide lucide-mountain w-4 h-4 text-zinc-500" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
</svg>
<span className="text-[10px] text-zinc-500 outline-none" contenteditable="true">
                      Dec 2025
                    </span>
</div>
<span className="text-sm text-zinc-200 outline-none focus:text-indigo-300" contenteditable="true">
                    Ladakh Trip
                  </span>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden mt-1" style={{cursor: 'pointer'}}>
<div className="bg-zinc-200 w-[60%] h-full"></div>
</div>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-2">
<div className="flex justify-between items-start">
<svg className="lucide lucide-monitor w-4 h-4 text-zinc-500" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
<span className="text-[10px] text-zinc-500 outline-none animate-pulse" contenteditable="true">
                      Ongoing
                    </span>
</div>
<span className="text-sm text-zinc-200 outline-none focus:text-indigo-300" contenteditable="true">
                    Learn Rust
                  </span>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden mt-1" style={{cursor: 'pointer'}}>
<div className="bg-zinc-200 w-[25%] h-full"></div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/3 bg-white/5 rounded-2xl p-4 flex flex-col justify-center items-center text-center border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center mb-3 shadow-lg relative z-10">
<svg className="lucide lucide-music w-4 h-4 text-zinc-400" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
</div>
<h4 className="text-xs font-medium text-white relative z-10">
                Chaleya
              </h4>
<p className="text-[10px] text-zinc-500 mt-0.5 relative z-10">
                Arijit Singh
              </p>
<div className="flex items-center gap-3 mt-3 relative z-10">
<button className="text-zinc-500 hover:text-zinc-300">
<svg className="lucide lucide-skip-back w-3 h-3" data-lucide="skip-back" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"></path>
<path d="M3 20V4"></path>
</svg>
</button>
<button className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
<svg className="lucide lucide-play w-2.5 h-2.5 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</button>
<button className="text-zinc-500 hover:text-zinc-300">
<svg className="lucide lucide-skip-forward w-3 h-3" data-lucide="skip-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 4v16"></path>
<path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="text-3xl font-light text-zinc-100 tracking-tighter">
                  24°C
                </span>
<span className="text-xs text-zinc-500 mt-1">Bengaluru, IND</span>
</div>
<svg className="lucide lucide-cloud-sun w-8 h-8 text-zinc-400" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v2"></path>
<path d="m4.93 4.93 1.41 1.41"></path>
<path d="M20 12h2"></path>
<path d="m19.07 4.93-1.41 1.41"></path>
<path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path>
<path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path>
</svg>
</div>
<div className="grid grid-cols-2 gap-2 mt-4">
<div className="bg-white/5 rounded-xl p-2 text-center">
<span className="block text-[10px] text-zinc-500 uppercase tracking-wider">
                  CPU
                </span>
<span className="block text-sm font-medium text-zinc-300">12%</span>
</div>
<div className="bg-white/5 rounded-xl p-2 text-center">
<span className="block text-[10px] text-zinc-500 uppercase tracking-wider">
                  RAM
                </span>
<span className="block text-sm font-medium text-zinc-300">
                  4.2GB
                </span>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
