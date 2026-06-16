import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // --- State Management ---
        const state = {
            population: 12405,
            knowledge: 840,
            power: 92,
            xp: 4230,
            level: 12,
            tasks: [
                { id: 1, title: 'Calculus: Derivatives', desc: 'Module 4 • Est. 45 mins', xp: 50, completed: false },
                { id: 2, title: 'Physics: Thermodynamics', desc: 'Module 2 • Est. 30 mins', xp: 35, completed: false },
                { id: 3, title: 'System Architecture', desc: 'Review • Est. 15 mins', xp: 20, completed: false }
            ],
            timeSpeed: 0, // 0: pause, 1: play, 2: fast
            logs: []
        };

        // --- DOM Elements ---
        const els = {
            taskList: document.getElementById('task-list'),
            progressBar: document.getElementById('daily-progress-bar'),
            progressText: document.getElementById('progress-text'),
            resPop: document.getElementById('res-pop'),
            resKnow: document.getElementById('res-know'),
            resPwr: document.getElementById('res-pwr'),
            xpDisplay: document.getElementById('xp-display'),
            levelDisplay: document.getElementById('level-display'),
            notifPanel: document.getElementById('notification-panel'),
            notifTitle: document.getElementById('notif-title'),
            notifMsg: document.getElementById('notif-msg'),
            notifIcon: document.getElementById('notif-icon'),
            notifIconBox: document.getElementById('notif-icon-box'),
            logContainer: document.getElementById('log-container'),
            voteButtons: document.getElementById('vote-buttons'),
            voteResult: document.getElementById('vote-result'),
            btnPlay: document.getElementById('btn-play'),
            btnPause: document.getElementById('btn-pause'),
            btnFf: document.getElementById('btn-ff')
        };

        // --- Initialization ---
        function init() {
            renderTasks();
            setupSliders();
            updateTimeIcons();
        }

        // --- Tasks Logic ---
        function renderTasks() {
            els.taskList.innerHTML = '';
            let completedCount = 0;

            state.tasks.forEach(task => {
                if(task.completed) completedCount++;
                
                const div = document.createElement('div');
                div.className = `group relative p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer mb-3 ${task.completed ? 'task-checked opacity-75' : ''}`;
                div.onclick = (e) => toggleTask(task.id);

                div.innerHTML = `
                    <div class="flex items-start gap-3">
                        <div class="mt-0.5 relative">
                            <div class="w-4 h-4 rounded-full border border-zinc-600 group-hover:border-indigo-400 custom-checkbox flex items-center justify-center text-zinc-900">
                                ${task.completed ? '<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>' : ''}
                            </div>
                        </div>
                        <div>
                            <h3 class="text-sm text-zinc-200 font-normal leading-tight group-hover:text-white transition-colors">${task.title}</h3>
                            <p class="text-xs text-zinc-500 mt-1.5 line-clamp-1">${task.desc}</p>
                        </div>
                    </div>
                    ${!task.completed ? `
                    <div class="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span class="text-[10px] text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">+${task.xp} XP</span>
                    </div>` : ''}
                `;
                els.taskList.appendChild(div);
            });

            // Update Progress
            const pct = Math.round((completedCount / state.tasks.length) * 100);
            els.progressBar.style.width = `${pct}%`;
            els.progressText.innerText = pct;
        }

        function toggleTask(id) {
            const task = state.tasks.find(t => t.id === id);
            if (!task) return;
            
            task.completed = !task.completed;
            
            if (task.completed) {
                state.xp += task.xp;
                state.knowledge += Math.floor(task.xp / 2);
                showNotification('Task Complete', `Gained ${task.xp} XP. Knowledge capacity increased.`, 'indigo');
                addLog(`Completed: ${task.title}`);
            } else {
                state.xp -= task.xp;
                state.knowledge -= Math.floor(task.xp / 2);
            }

            // Check level up
            if (state.xp > 4300 && state.level === 12) {
                state.level = 13;
                showNotification('Level Up!', 'You are now Level 13.', 'amber');
            }

            renderTasks();
            updateStats();
        }

        function resetTasks() {
            state.tasks.forEach(t => t.completed = false);
            renderTasks();
            showNotification('Curriculum Refreshed', 'Daily tasks have been reset.', 'zinc');
            addLog('System: Curriculum reset');
        }

        function updateStats() {
            els.xpDisplay.innerText = state.xp.toLocaleString();
            els.levelDisplay.innerText = state.level;
            
            // Animate Numbers
            animateValue(els.resKnow, parseInt(els.resKnow.innerText), state.knowledge, 1000);
            animateValue(els.resPop, parseInt(els.resPop.innerText.replace(/,/g,'')), state.population, 1000);
            animateValue(els.resPwr, parseInt(els.resPwr.innerText), state.power, 1000);
        }

        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const val = Math.floor(progress * (end - start) + start);
                obj.innerHTML = val.toLocaleString();
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        // --- Notifications ---
        let notifTimeout;
        function showNotification(title, msg, color) {
            els.notifTitle.innerText = title;
            els.notifMsg.innerText = msg;
            
            // Color styles
            const colorMap = {
                indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-l-indigo-500' },
                emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-l-emerald-500' },
                amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-l-amber-500' },
                zinc: { bg: 'bg-zinc-500/10', text: 'text-zinc-400', border: 'border-l-zinc-500' }
            };
            
            const style = colorMap[color] || colorMap.indigo;
            
            els.notifIconBox.className = `${style.bg} p-2 rounded ${style.text}`;
            els.notifPanel.className = `absolute bottom-12 left-1/2 -translate-x-1/2 glass-panel px-5 py-3 rounded-lg ${style.border} border-l-2 flex items-center gap-4 max-w-md shadow-2xl transition-all duration-300 opacity-100 translate-y-0 z-50`;
            
            clearTimeout(notifTimeout);
            notifTimeout = setTimeout(() => {
                els.notifPanel.classList.add('opacity-0', 'translate-y-4');
            }, 4000);
        }

        // --- Interactive Map ---
        function selectSector(name, desc, color) {
            showNotification(name, desc, color);
            // Highlight effect on map handled by CSS usually, but we could add JS classes if needed
        }

        // --- Governance ---
        function castVote(option) {
            els.voteButtons.classList.add('hidden');
            els.voteResult.classList.remove('hidden');
            
            if (option === 'A') {
                state.power += 10;
                if(state.power > 100) state.power = 100;
                addLog('Vote Passed: Automation (+Power)');
                showNotification('Vote Recorded', 'Infrastructure automation protocols initiated.', 'emerald');
            } else {
                state.population += 150;
                addLog('Vote Passed: Public Art (+Pop)');
                showNotification('Vote Recorded', 'Public morale increasing.', 'indigo');
            }
            updateStats();
        }

        // --- Sliders ---
        function setupSliders() {
            createSliderLogic('1', (val) => {
                if (val < 30) {
                     els.resPwr.classList.add('text-red-500');
                     if(Math.random() > 0.9) showNotification('Warning', 'Low infrastructure funding risks outages.', 'amber');
                } else {
                     els.resPwr.classList.remove('text-red-500');
                }
            });
            createSliderLogic('2', (val) => {
                 // Educational grants effect
            });
        }

        function createSliderLogic(id, callback) {
            const container = document.getElementById(`slider-container-${id}`);
            const fill = document.getElementById(`slider-fill-${id}`);
            const thumb = document.getElementById(`slider-thumb-${id}`);
            const text = document.getElementById(`slider-val-${id}`);
            
            let isDragging = false;

            const update = (e) => {
                const rect = container.getBoundingClientRect();
                let x = e.clientX - rect.left;
                if (x < 0) x = 0;
                if (x > rect.width) x = rect.width;
                
                const pct = Math.round((x / rect.width) * 100);
                
                fill.style.width = `${pct}%`;
                thumb.style.left = `${pct}%`;
                text.innerText = pct;
                
                if (callback) callback(pct);
            };

            container.addEventListener('mousedown', (e) => {
                isDragging = true;
                update(e);
            });

            window.addEventListener('mousemove', (e) => {
                if (isDragging) update(e);
            });

            window.addEventListener('mouseup', () => {
                if (isDragging) {
                    isDragging = false;
                    addLog(`Budget Adjusted: Category ${id}`);
                }
            });
        }

        // --- Logging ---
        function addLog(msg) {
            const div = document.createElement('div');
            div.className = 'relative log-entry animate-pulse';
            div.innerHTML = `
                <div class="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600"></div>
                <div class="text-xs text-white">${msg}</div>
                <div class="text-[10px] text-zinc-600 mt-0.5">Just now</div>
            `;
            els.logContainer.insertBefore(div, els.logContainer.firstChild);
            
            // Remove pulse after animation
            setTimeout(() => div.classList.remove('animate-pulse'), 1000);
        }

        // --- Time Control ---
        function updateTimeSpeed(speed) {
            state.timeSpeed = speed;
            updateTimeIcons();
            
            if (speed === 0) showNotification('Simulation Paused', 'World state frozen.', 'zinc');
            if (speed === 1) showNotification('Simulation Active', 'Real-time progression.', 'zinc');
            if (speed === 2) showNotification('Fast Forward', 'Processing cycles x2.', 'amber');
        }

        function updateTimeIcons() {
            const btns = [els.btnPause, els.btnPlay, els.btnFf];
            btns.forEach(b => b.classList.remove('text-emerald-400', 'text-white'));
            
            if (state.timeSpeed === 0) els.btnPause.classList.add('text-white');
            if (state.timeSpeed === 1) els.btnPlay.classList.add('text-emerald-400');
            if (state.timeSpeed === 2) els.btnFf.classList.add('text-white');
        }

        // Simple Game Loop for resource ticking
        setInterval(() => {
            if (state.timeSpeed > 0) {
                const multiplier = state.timeSpeed === 2 ? 3 : 1;
                if(Math.random() > 0.7) {
                    state.population += 1 * multiplier;
                    els.resPop.innerText = state.population.toLocaleString();
                }
                
                // Animate University Bar
                const uniBar = document.getElementById('university-bar');
                let w = parseInt(uniBar.style.width || '75');
                w = (w + 1 * multiplier) % 100;
                uniBar.style.width = w + '%';
            }
        }, 1000);

        function resetSim() {
            location.reload();
        }

        // Start
        init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full lg:w-80 flex flex-col border-r border-white/5 bg-zinc-950/50 z-20 h-screen overflow-y-auto relative">

<div className="p-6 pb-2 shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-white group cursor-pointer" onclick="resetSim()">
<span className="font-medium tracking-tighter text-sm group-hover:scale-110 transition-transform">EM</span>
</div>
<h1 className="text-sm font-medium tracking-tight text-white uppercase">EMINATTI</h1>
</div>
</div>

<div className="px-6 py-6 shrink-0">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Current Role</span>
<span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20" id="status-badge">Active</span>
</div>
<div className="text-white font-normal text-lg tracking-tight">Lead Architect</div>
<div className="text-xs text-zinc-500 mt-1">Level <span id="level-display">12</span> • <span id="xp-display">4,230</span> XP</div>
</div>

<div className="flex-1 px-6 space-y-6">
<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-xs font-medium text-white tracking-tight">TODAY'S CURRICULUM</h2>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="resetTasks()">
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
</button>
</div>

<div id="task-list">

</div>

<div className="group relative p-4 rounded-xl border border-white/5 bg-white/[0.01] opacity-60 mt-3">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-emerald-500">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-sm text-zinc-400 font-normal leading-tight line-through">History: Industrial Rev</h3>
<p className="text-xs text-zinc-600 mt-1.5">Completed Yesterday</p>
</div>
</div>
</div>
</div>

<div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/10">
<div className="flex items-center justify-between text-xs mb-2">
<span className="text-indigo-300">Daily Output</span>
<span className="text-white font-medium"><span id="progress-text">0</span>%</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1 mb-3 overflow-hidden">
<div className="bg-indigo-500 h-1 rounded-full w-0 transition-width duration-700" id="daily-progress-bar"></div>
</div>
<p className="text-[10px] text-zinc-500 leading-relaxed">
                    Study consistency impacts <span className="text-zinc-300">Research Stability</span>. Maintain &gt;80% to unlock Tier 3.
                </p>
</div>
</div>

<div className="mt-auto p-4 border-t border-white/5 shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 ring-2 ring-transparent hover:ring-indigo-500/50 transition-all cursor-pointer">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 font-medium">Alex Chen</span>
<span className="text-[10px] text-zinc-500">Scholar • Zone 4</span>
</div>
<button className="ml-auto text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 relative flex flex-col h-screen bg-black overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80 pointer-events-none"></div>

<header className="absolute top-0 left-0 right-0 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center z-10 pointer-events-none gap-4">
<div className="glass-panel px-4 py-2 rounded-full flex gap-6 pointer-events-auto transition-all duration-300 hover:bg-zinc-900/80">
<div className="flex items-center gap-2" title="Population">
<iconify-icon className="text-indigo-400" icon="solar:city-linear"></iconify-icon>
<span className="hidden sm:inline text-xs text-zinc-400 font-medium tracking-wide">POP</span>
<span className="text-xs text-white font-medium tracking-tight" id="res-pop">12,405</span>
</div>
<div className="w-px h-4 bg-white/10"></div>
<div className="flex items-center gap-2" title="Knowledge Points">
<iconify-icon className="text-emerald-400" icon="solar:book-2-linear"></iconify-icon>
<span className="hidden sm:inline text-xs text-zinc-400 font-medium tracking-wide">KNOW</span>
<span className="text-xs text-white font-medium tracking-tight"><span id="res-know">840</span>/1000</span>
</div>
<div className="w-px h-4 bg-white/10"></div>
<div className="flex items-center gap-2" title="Grid Power">
<iconify-icon className="text-amber-400" icon="solar:bolt-linear"></iconify-icon>
<span className="hidden sm:inline text-xs text-zinc-400 font-medium tracking-wide">PWR</span>
<span className="text-xs text-white font-medium tracking-tight"><span id="res-pwr">92</span>%</span>
</div>
</div>

<div className="glass-panel px-3 py-2 rounded-full flex gap-3 pointer-events-auto text-zinc-400 ml-auto sm:ml-0">
<button className="hover:text-white transition-colors" id="btn-pause" onclick="updateTimeSpeed(0)"><iconify-icon icon="solar:pause-linear"></iconify-icon></button>
<button className="text-white hover:text-emerald-400 transition-colors" id="btn-play" onclick="updateTimeSpeed(1)"><iconify-icon icon="solar:play-linear"></iconify-icon></button>
<button className="hover:text-white transition-colors" id="btn-ff" onclick="updateTimeSpeed(2)"><iconify-icon icon="solar:forward-linear"></iconify-icon></button>
</div>
</header>

<div className="flex-1 flex items-center justify-center p-12 relative perspective-container">

<div className="relative w-full max-w-2xl aspect-square transform perspective-1000 rotate-x-12 scale-90 transition-transform duration-700 hover:scale-95" id="world-map">
<div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2">

<div className="col-span-2 row-span-2 bg-zinc-900/40 border border-zinc-800 hover:border-indigo-500/50 hover:bg-indigo-900/10 transition-all duration-300 rounded-lg flex flex-col items-center justify-center group cursor-pointer sector-tile" onclick="selectSector('Residential', 'Housing capacity at 85%. Satisfaction stable.', 'indigo')">
<iconify-icon className="text-zinc-600 group-hover:text-indigo-400 text-3xl mb-2 transition-colors" icon="solar:buildings-2-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-zinc-600 group-hover:text-indigo-300 transition-colors">Living Qtr</span>
</div>

<div className="col-span-2 row-span-2 bg-zinc-900/60 border border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)] hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.2)] rounded-lg flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer transition-all" onclick="selectSector('University', 'Research output: +45/hr. New breakthrough imminent.', 'emerald')">
<div className="absolute top-2 right-2 flex gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<iconify-icon className="text-emerald-400 text-4xl mb-2 group-hover:scale-110 transition-transform" icon="solar:library-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-emerald-300">University</span>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
<div className="h-full bg-emerald-500 w-[75%] transition-all duration-1000" id="university-bar"></div>
</div>
</div>

<div className="col-span-2 row-span-2 bg-zinc-900/40 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/30 transition-all rounded-lg flex flex-col items-center justify-center cursor-pointer group" onclick="selectSector('Industrial Zone', 'Production efficiency: 92%. Emissions within limits.', 'zinc')">
<iconify-icon className="text-zinc-700 text-3xl mb-2 group-hover:text-zinc-400 transition-colors" icon="solar:factory-2-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-zinc-700 group-hover:text-zinc-400 transition-colors">Industry</span>
</div>

<div className="col-span-1 row-span-1 bg-zinc-950 border border-zinc-800/50 rounded flex items-center justify-center hover:bg-zinc-900 transition-colors"></div>
<div className="col-span-1 row-span-1 bg-zinc-950 border border-zinc-800/50 rounded flex items-center justify-center hover:bg-zinc-900 transition-colors"></div>

<div className="col-span-2 row-span-1 bg-zinc-900/20 border border-dashed border-zinc-700 hover:border-amber-500/50 rounded flex items-center justify-center gap-2 cursor-pointer transition-colors group" onclick="selectSector('Construction Site', 'New Metro Line. Completion ETA: 4 Cycles.', 'amber')">
<iconify-icon className="text-zinc-600 group-hover:text-amber-500 animate-pulse" icon="solar:hammer-linear"></iconify-icon>
<span className="text-[10px] text-zinc-600 group-hover:text-amber-500">Building...</span>
</div>
<div className="col-span-1 row-span-1 bg-zinc-950 border border-zinc-800/50 rounded flex items-center justify-center hover:bg-zinc-900"></div>
<div className="col-span-1 row-span-1 bg-zinc-950 border border-zinc-800/50 rounded flex items-center justify-center hover:bg-zinc-900"></div>

<div className="col-span-2 row-span-2 bg-zinc-900/40 border border-zinc-800 hover:border-amber-500/30 hover:bg-amber-900/10 transition-all rounded-lg flex flex-col items-center justify-center group cursor-pointer" onclick="selectSector('Health Center', 'Public health is optimal. No active outbreaks.', 'amber')">
<iconify-icon className="text-zinc-600 group-hover:text-amber-400 text-3xl mb-2 transition-colors" icon="solar:hospital-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-zinc-600 group-hover:text-amber-300">Health</span>
</div>
<div className="col-span-4 row-span-1 bg-zinc-950 border border-zinc-800/50 rounded flex items-center justify-center text-[10px] text-zinc-800 tracking-widest hover:text-zinc-600 transition-colors cursor-help" title="Requires Level 15">UNEXPLORED TERRITORY</div>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 glass-panel px-5 py-3 rounded-lg border-l-2 border-l-emerald-500 flex items-center gap-4 max-w-md shadow-2xl transition-all duration-300 opacity-0 translate-y-4" id="notification-panel">
<div className="bg-emerald-500/10 p-2 rounded text-emerald-400" id="notif-icon-box">
<iconify-icon icon="solar:info-circle-linear" id="notif-icon" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium" id="notif-title">System Ready</h4>
<p className="text-xs text-zinc-400 mt-0.5" id="notif-msg">Waiting for user input.</p>
</div>
</div>
</div>
</main>

<aside className="w-full lg:w-96 border-l border-white/5 bg-zinc-950/80 z-20 flex flex-col h-screen overflow-hidden">
<div className="p-6 border-b border-white/5 flex justify-between items-center shrink-0">
<h2 className="text-xs font-medium text-white tracking-widest uppercase">City Governance</h2>
<span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-pulse"></span>
</div>
<div className="flex-1 overflow-y-auto p-6 scroll-smooth">

<div className="mb-8" id="vote-section">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Active Council Vote</h3>
<span className="text-[10px] text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">Urgent</span>
</div>
<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 transition-all hover:bg-zinc-900/50">
<h4 className="text-base text-zinc-200 font-light mb-2">Proposal 104: Surplus Allocation</h4>
<p className="text-xs text-zinc-400 leading-relaxed mb-4">
                        The University has generated excess research points. The council must decide where to invest.
                    </p>

<div className="space-y-3 mb-6">
<div className="flex items-center justify-between text-xs group cursor-help" title="Increases Power Efficiency">
<span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">Option A: Automation</span>
<span className="text-emerald-400">+10% Pwr</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/50 w-1/3"></div>
</div>
<div className="flex items-center justify-between text-xs group cursor-help" title="Increases Population Happiness">
<span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">Option B: Public Art</span>
<span className="text-indigo-400">+150 Pop</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500/50 w-2/3"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-3" id="vote-buttons">
<button className="py-2 rounded-lg border border-zinc-700 hover:bg-zinc-800 hover:border-emerald-500/50 text-xs text-zinc-300 transition-all" onclick="castVote('A')">Vote A</button>
<button className="py-2 rounded-lg bg-white text-zinc-950 text-xs font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5" onclick="castVote('B')">Vote B</button>
</div>

<div className="hidden text-center py-2 text-xs text-emerald-400 bg-emerald-500/10 rounded-lg border border-emerald-500/20" id="vote-result">
                        Proposal Passed. Resources Updated.
                    </div>
</div>
</div>

<div className="mb-8">
<h3 className="text-sm font-medium text-white mb-4">Budget Allocation</h3>
<div className="space-y-6">

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Infrastructure</span>
<span className="text-white"><span id="slider-val-1">40</span>%</span>
</div>
<div className="h-4 flex items-center cursor-pointer group" id="slider-container-1">
<div className="w-full h-1 bg-zinc-800 rounded-full relative">
<div className="absolute h-full bg-indigo-500 rounded-full" id="slider-fill-1" style={{width: '40%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.05)] group-hover:scale-125 transition-transform" id="slider-thumb-1" style={{left: '40%'}}></div>
</div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Education Grants</span>
<span className="text-white"><span id="slider-val-2">35</span>%</span>
</div>
<div className="h-4 flex items-center cursor-pointer group" id="slider-container-2">
<div className="w-full h-1 bg-zinc-800 rounded-full relative">
<div className="absolute h-full bg-zinc-600 rounded-full group-hover:bg-emerald-500 transition-colors" id="slider-fill-2" style={{width: '35%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-400 rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.05)] group-hover:bg-white group-hover:scale-125 transition-all" id="slider-thumb-2" style={{left: '35%'}}></div>
</div>
</div>
</div>
</div>
<p className="text-[10px] text-zinc-500 mt-4 italic opacity-70">
                    *Drag sliders to adjust city funding.
                </p>
</div>

<div className="pb-4">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">System Memory</h3>
<div className="space-y-4 border-l border-zinc-800 ml-1 pl-4" id="log-container">

<div className="relative log-entry">
<div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600"></div>
<div className="text-xs text-zinc-300">System Initialized</div>
<div className="text-[10px] text-zinc-600 mt-0.5">Just now • Auto</div>
</div>
</div>
</div>
</div>
</aside>


    </>
  );
}
