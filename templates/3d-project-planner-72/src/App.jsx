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
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
background: '#050505',
surface: '#0F0F11',
glass: 'rgba(255, 255, 255, 0.03)',
primary: '#6366f1',
},
boxShadow: {
'glow': '0 0 40px -10px rgba(99, 102, 241, 0.3)',
'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)'
}
}
}
}



        // --- State Management (Simulated Backend) ---
        const state = {
            is3D: false,
            tasks: [
                { id: 1, title: 'Refonte Interface UX', client: 'Stripe Inc.', start: 9, duration: 2, day: 0, type: 'design', progress: 75, members: [1, 2] },
                { id: 2, title: 'API Integration', client: 'Vercel', start: 11, duration: 3, day: 1, type: 'dev', progress: 30, members: [3] },
                { id: 3, title: 'Réunion Stratégique', client: 'Interne', start: 10, duration: 1, day: 2, type: 'meeting', progress: 0, members: [1, 3, 4] },
                { id: 4, title: 'Déploiement Prod', client: 'Client X', start: 14, duration: 2, day: 3, type: 'dev', progress: 90, members: [2] },
                { id: 5, title: 'Workshop Design', client: 'Linear', start: 9, duration: 4, day: 4, type: 'design', progress: 10, members: [1, 4] }
            ],
            users: [
                { id: 1, name: 'Sarah', img: 'https://ui-avatars.com/api/?name=Sarah&bg=6366f1&color=fff' },
                { id: 2, name: 'Mike', img: 'https://ui-avatars.com/api/?name=Mike&bg=ec4899&color=fff' },
                { id: 3, name: 'Tom', img: 'https://ui-avatars.com/api/?name=Tom&bg=10b981&color=fff' },
                { id: 4, name: 'Léa', img: 'https://ui-avatars.com/api/?name=Lea&bg=f59e0b&color=fff' }
            ],
            selectedTaskId: null
        };

        const days = ['Lun 23', 'Mar 24', 'Mer 25', 'Jeu 26', 'Ven 27'];
        const colors = {
            design: 'from-purple-500/20 to-indigo-500/20 border-indigo-500/30 text-indigo-200',
            dev: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-200',
            meeting: 'from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-200'
        };

        // --- Render Functions ---

        function initCalendar() {
            const timeCol = document.getElementById('time-column');
            const daysContainer = document.getElementById('days-container');

            // Render Time
            for(let i=8; i<=18; i++) {
                const div = document.createElement('div');
                div.className = 'h-24 border-b border-white/5 text-[10px] text-slate-500 text-center relative top-[-6px]';
                div.innerText = `${i}:00`;
                timeCol.appendChild(div);
            }

            // Render Days Columns
            days.forEach((day, index) => {
                const col = document.createElement('div');
                col.className = 'flex-1 min-w-[140px] border-r border-white/5 relative group';
                
                // Header
                const header = document.createElement('div');
                header.className = 'sticky top-0 h-10 border-b border-white/5 bg-surface/90 backdrop-blur-md z-20 flex items-center justify-center text-xs font-medium text-slate-300';
                header.innerText = day;
                col.appendChild(header);

                // Grid Lines
                for(let i=8; i<=18; i++) {
                    const line = document.createElement('div');
                    line.className = 'h-24 border-b border-white/5';
                    col.appendChild(line);
                }

                // Render Tasks for this day
                const tasksForDay = state.tasks.filter(t => t.day === index);
                tasksForDay.forEach(task => {
                    const taskEl = document.createElement('div');
                    const topPos = (task.start - 8) * 96 + 40 + 2; // 96px per hour + header offset
                    const height = task.duration * 96 - 4;
                    
                    const colorClass = colors[task.type] || colors.design;
                    
                    taskEl.className = `absolute left-2 right-2 rounded-lg bg-gradient-to-br ${colorClass} border backdrop-blur-sm p-3 cursor-pointer task-card z-10 flex flex-col gap-1 overflow-hidden`;
                    taskEl.style.top = `${topPos}px`;
                    taskEl.style.height = `${height}px`;
                    
                    // Interaction
                    taskEl.onclick = (e) => {
                        e.stopPropagation();
                        selectTask(task.id);
                    };

                    taskEl.innerHTML = `
                        <div class="flex justify-between items-start">
                            <span class="text-xs font-semibold tracking-tight truncate">${task.title}</span>
                            <iconify-icon icon="solar:menu-dots-linear" class="opacity-50"></iconify-icon>
                        </div>
                        <span class="text-[10px] opacity-70 truncate">${task.client}</span>
                        <div class="mt-auto flex items-center justify-between">
                            <div class="flex -space-x-1.5">
                                ${task.members.map(mId => {
                                    const u = state.users.find(u => u.id === mId);
                                    return `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-4 h-4 rounded-full border border-surface" title="${u.name}">`;
                                }).join('')}
                            </div>
                            <span class="text-[10px] font-mono opacity-60">${task.start}h - ${task.start + task.duration}h</span>
                        </div>
                    `;
                    col.appendChild(taskEl);
                });

                daysContainer.appendChild(col);
            });
        }

        function selectTask(id) {
            state.selectedTaskId = id;
            const task = state.tasks.find(t => t.id === id);
            const container = document.getElementById('task-details-content');
            
            // Generate HTML for details
            container.innerHTML = `
                <div class="flex flex-col gap-1 animate-[fadeIn_0.3s_ease-out]">
                    <span class="text-[10px] text-indigo-400 font-mono uppercase tracking-widest bg-indigo-500/10 w-fit px-2 py-0.5 rounded border border-indigo-500/20">
                        ${task.type.toUpperCase()}
                    </span>
                    <h3 class="text-xl font-medium text-white tracking-tight mt-2">${task.title}</h3>
                    <p class="text-xs text-slate-400">${task.client}</p>
                </div>

                <div class="space-y-4">
                    <div class="bg-black/20 p-3 rounded-lg border border-white/5">
                        <div class="flex justify-between text-xs mb-1 text-slate-300">
                            <span>Progression</span>
                            <span>${task.progress}%</span>
                        </div>
                        <div class="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div class="h-full bg-indigo-500 rounded-full" style="width: ${task.progress}%"></div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div class="bg-white/5 p-3 rounded-lg border border-white/5">
                            <label class="text-[10px] text-slate-500 block mb-1">Date</label>
                            <div class="text-xs text-white flex items-center gap-2">
                                <iconify-icon icon="solar:calendar-linear"></iconify-icon>
                                ${days[task.day]}
                            </div>
                        </div>
                        <div class="bg-white/5 p-3 rounded-lg border border-white/5">
                            <label class="text-[10px] text-slate-500 block mb-1">Durée</label>
                            <div class="text-xs text-white flex items-center gap-2">
                                <iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                ${task.duration}h
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class="text-xs text-slate-500 mb-2 block">Assignés</label>
                        <div class="flex gap-2">
                            ${task.members.map(mId => {
                                const u = state.users.find(u => u.id === mId);
                                return `
                                    <div class="flex items-center gap-2 bg-white/5 pl-1 pr-3 py-1 rounded-full border border-white/5">
                                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-5 h-5 rounded-full">
                                        <span class="text-[10px] text-slate-300">${u.name}</span>
                                    </div>
                                `;
                            }).join('')}
                            <button class="w-7 h-7 rounded-full border border-dashed border-slate-500 text-slate-500 flex items-center justify-center hover:border-indigo-400 hover:text-indigo-400 transition-colors">
                                <iconify-icon icon="solar:add-linear"></iconify-icon>
                            </button>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-white/5">
                        <label class="text-xs text-slate-500 mb-2 block">Sous-tâches</label>
                        <div class="space-y-2">
                            ${['Brief client', 'Maquettes Lo-Fi', 'Validation'].map(st => `
                                <label class="flex items-center gap-3 cursor-pointer group custom-checkbox">
                                    <input type="checkbox" class="hidden">
                                    <div class="w-4 h-4 rounded border border-slate-600 bg-black/20 flex items-center justify-center transition-colors">
                                        <iconify-icon icon="solar:check-read-linear" class="text-white hidden text-[10px]"></iconify-icon>
                                    </div>
                                    <span class="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">${st}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // --- 3D & View Logic ---

        function toggle3DMode() {
            state.is3D = !state.is3D;
            const toggle = document.getElementById('spatial-toggle');
            const dot = document.getElementById('spatial-dot');
            const board = document.getElementById('planner-board');
            const container = document.getElementById('scene');

            if (state.is3D) {
                // Activate 3D
                toggle.classList.remove('bg-slate-700');
                toggle.classList.add('bg-indigo-600');
                dot.style.transform = 'translateX(16px)';
                
                board.style.transform = 'rotateX(20deg) rotateY(-10deg) scale(0.9)';
                container.addEventListener('mousemove', handleParallax);
            } else {
                // Deactivate 3D
                toggle.classList.add('bg-slate-700');
                toggle.classList.remove('bg-indigo-600');
                dot.style.transform = 'translateX(0)';
                
                board.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                container.removeEventListener('mousemove', handleParallax);
            }
        }

        function handleParallax(e) {
            if (!state.is3D) return;
            const board = document.getElementById('planner-board');
            const x = (window.innerWidth / 2 - e.clientX) / 40;
            const y = (window.innerHeight / 2 - e.clientY) / 40;
            
            // Subtle movement based on mouse
            board.style.transform = `rotateX(${20 + y}deg) rotateY(${-10 - x}deg) scale(0.9)`;
        }

        // --- Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            initCalendar();
            
            // Animation intro
            const els = document.querySelectorAll('.glass-panel');
            els.forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    el.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100 * i);
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
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>

<nav className="relative z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/40 backdrop-blur-md">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-glow">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight text-white group-hover:text-indigo-300 transition-colors">CHRONOS</span>
</div>
<div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-white/10 shadow-inner-light transition-all">Planning</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all">Timeline</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all">Equipe</button>
</div>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-2" onclick="toggle3DMode()">
<span className="text-xs text-slate-400">Mode Spatial</span>
<div className="w-9 h-5 rounded-full bg-slate-700 relative cursor-pointer toggle-switch" id="spatial-toggle">
<div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full toggle-dot" id="spatial-dot"></div>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-90" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=random&amp;color=fff"/>
</div>
</div>
</nav>

<main className="flex-1 relative scene-container overflow-hidden" id="scene">

<div className="spatial-plane relative w-full h-full flex p-8 gap-6 origin-center" id="planner-board">

<aside className="w-16 flex flex-col items-center gap-4 py-6 glass-panel rounded-2xl layer-floating h-fit shrink-0">
<button className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 hover:scale-105 transition-transform">
<iconify-icon icon="solar:add-square-linear" width="20"></iconify-icon>
</button>
<div className="w-8 h-[1px] bg-white/10 my-1"></div>
<button className="tool-btn w-10 h-10 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-all">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</button>
<button className="tool-btn w-10 h-10 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-all">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</button>
<button className="tool-btn w-10 h-10 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-all">
<iconify-icon icon="solar:graph-linear" width="20"></iconify-icon>
</button>
<div className="flex-1"></div>
<button className="tool-btn w-10 h-10 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 flex items-center justify-center transition-all">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</aside>

<section className="flex-1 glass-panel rounded-2xl flex flex-col overflow-hidden relative layer-floating">

<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
<div className="flex items-center gap-4">
<h2 className="text-lg font-medium tracking-tight text-white">Octobre 2023</h2>
<div className="flex gap-1">
<button className="w-7 h-7 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 text-slate-400 transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 text-slate-400 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-black/20 border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 w-48 transition-all" placeholder="Rechercher..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-medium text-slate-300 transition-colors">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
<span>Filtres</span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto relative grid-lines flex bg-black/20" id="calendar-grid">

<div className="w-16 shrink-0 border-r border-white/5 pt-10 bg-black/10 backdrop-blur-sm z-10">

<div id="time-column"></div>
</div>

<div className="flex-1 flex overflow-x-auto" id="days-container">

</div>
</div>
</section>

<aside className="w-80 glass-panel rounded-2xl flex flex-col layer-floating-high border-l border-white/10 transition-all duration-500" id="inspector-panel">
<div className="p-5 border-b border-white/5 flex justify-between items-center">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Inspecteur</span>
<button className="text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
<div className="p-6 flex-1 overflow-y-auto">

<div className="space-y-6" id="task-details-content">
<div className="animate-pulse flex flex-col gap-4">
<div className="h-4 bg-white/5 rounded w-3/4"></div>
<div className="h-20 bg-white/5 rounded w-full"></div>
</div>
<div className="text-center mt-10 text-slate-500 text-xs">Sélectionnez une tâche pour voir les détails</div>
</div>
</div>
<div className="p-4 border-t border-white/5 bg-white/[0.02]">
<button className="w-full py-2.5 bg-white text-black rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
                        Marquer comme terminé
                    </button>
</div>
</aside>
</div>
</main>



    </>
  );
}
