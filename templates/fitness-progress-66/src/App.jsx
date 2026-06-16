import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- CLOCK SCRIPT ---
        function updatePHTClock() {
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const pht = new Date(utc + (3600000 * 8)); // PHT is UTC+8
            
            const yyyy = pht.getFullYear();
            const mm = String(pht.getMonth() + 1).padStart(2, '0');
            const dd = String(pht.getDate()).padStart(2, '0');
            
            const hours = String(pht.getHours()).padStart(2, '0');
            const minutes = String(pht.getMinutes()).padStart(2, '0');
            const seconds = String(pht.getSeconds()).padStart(2, '0');
            
            const clockElement = document.getElementById('pht-clock');
            if (clockElement) {
                clockElement.textContent = `PHT ${hours}:${minutes}:${seconds} // ${yyyy}.${mm}.${dd} // SYNCHRONIZATION ACTIVE`;
            }
        }
        setInterval(updatePHTClock, 1000);
        updatePHTClock();

        // --- MACRO TRACKER SCRIPT (LOCAL STORAGE) ---
        const DB_KEY = 'sys_macro_logs';
        let macroLogs = JSON.parse(localStorage.getItem(DB_KEY)) || {};

        function getTodayDateStr() {
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const pht = new Date(utc + (3600000 * 8));
            return `${pht.getFullYear()}-${String(pht.getMonth() + 1).padStart(2, '0')}-${String(pht.getDate()).padStart(2, '0')}`;
        }

        function syncIndicator() {
            const ind = document.getElementById('sync-status');
            ind.textContent = "SAVING...";
            ind.classList.add('text-cyan-400');
            setTimeout(() => {
                ind.textContent = "SYNC: ACTIVE";
                ind.classList.remove('text-cyan-400');
            }, 800);
        }

        function saveMacros() {
            const today = getTodayDateStr();
            const cal = document.getElementById('cal-input').value;
            const pro = document.getElementById('pro-input').value;
            const wat = document.getElementById('wat-input').value;

            macroLogs[today] = { cal, pro, wat };
            localStorage.setItem(DB_KEY, JSON.stringify(macroLogs));
            
            updateBars();
            renderHistory();
            syncIndicator();
        }

        function updateBars() {
            const today = getTodayDateStr();
            const data = macroLogs[today] || { cal: 0, pro: 0, wat: 0 };
            
            const calPct = Math.min(100, (data.cal / 2800) * 100) || 0;
            const proPct = Math.min(100, (data.pro / 160) * 100) || 0;
            const watPct = Math.min(100, (data.wat / 4.0) * 100) || 0;

            document.getElementById('cal-bar').style.width = calPct + '%';
            document.getElementById('pro-bar').style.width = proPct + '%';
            document.getElementById('wat-bar').style.width = watPct + '%';
        }

        function loadTodayData() {
            const today = getTodayDateStr();
            const data = macroLogs[today] || { cal: '', pro: '', wat: '' };
            
            document.getElementById('cal-input').value = data.cal;
            document.getElementById('pro-input').value = data.pro;
            document.getElementById('wat-input').value = data.wat;
            updateBars();
        }

        function renderHistory() {
            const container = document.getElementById('history-container');
            container.innerHTML = '';
            
            // Sort dates descending
            const dates = Object.keys(macroLogs).sort((a, b) => b.localeCompare(a));
            
            if (dates.length === 0) {
                container.innerHTML = '<div class="text-xs text-slate-500 font-mono py-3">NO LOGS DETECTED</div>';
                return;
            }

            // Display all historical entries
            dates.forEach(date => {
                const data = macroLogs[date];
                const cal = data.cal || 0;
                const pro = data.pro || 0;
                const wat = data.wat || 0;
                
                // Add an indicator if today
                const isToday = date === getTodayDateStr();
                const dateLabel = isToday ? `${date} (TODAY)` : date;
                const rowClass = isToday ? 'bg-slate-900/50' : '';

                const html = `
                    <div class="flex flex-col gap-1 py-2 px-3 border border-slate-800/50 rounded-lg mb-2 ${rowClass}">
                        <span class="text-xs text-slate-400 font-mono">${dateLabel}</span>
                        <div class="flex justify-between items-center text-xs font-mono">
                            <span class="text-emerald-400 flex items-center gap-1"><iconify-icon icon="solar:flame-linear"></iconify-icon>${cal} kcal</span>
                            <span class="text-blue-400 flex items-center gap-1"><iconify-icon icon="solar:bone-linear"></iconify-icon>${pro}g pro</span>
                            <span class="text-cyan-400 flex items-center gap-1"><iconify-icon icon="solar:drop-linear"></iconify-icon>${wat}L wat</span>
                        </div>
                    </div>
                `;
                container.innerHTML += html;
            });
        }

        // Attach event listeners for auto-save on typing
        document.getElementById('cal-input').addEventListener('input', saveMacros);
        document.getElementById('pro-input').addEventListener('input', saveMacros);
        document.getElementById('wat-input').addEventListener('input', saveMacros);

        // Initialize on load
        loadTodayData();
        renderHistory();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl mx-auto space-y-6">

<header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800/60 pb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-cyan-950/50 border border-cyan-800 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.15)]">
<span className="text-cyan-400 font-semibold tracking-widest text-lg">SYS</span>
</div>
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-100 uppercase">Player Dashboard</h1>
<p className="text-xs text-slate-500 font-mono" id="pht-clock">INITIALIZING CLOCK...</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end">
<span className="text-xs text-slate-500 uppercase tracking-widest">Current Status</span>
<span className="text-lg font-semibold tracking-tight text-cyan-400 shadow-cyan-400/20 drop-shadow-md">RANK: E-CLASS</span>
</div>
<div className="h-10 w-px bg-slate-800"></div>
<button className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-medium py-2 px-4 rounded-md transition-colors flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear" width="1.2em"></iconify-icon>
                    Week 12
                </button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 space-y-6">

<div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-cyan-500" icon="solar:user-linear" width="4em"></iconify-icon>
</div>
<h2 className="text-lg font-semibold tracking-tight text-slate-200 mb-4 flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:chart-linear"></iconify-icon>
                        Physical Condition
                    </h2>
<div className="space-y-4">
<div>
<div className="flex justify-between items-end mb-1">
<span className="text-sm text-slate-400">Mass Accumulation</span>
<span className="font-mono text-cyan-400">55.0 kg</span>
</div>

<div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
<div className="h-full bg-cyan-500 rounded-full relative transition-all duration-500" style={{width: '0%'}}>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
</div>
</div>
<div className="flex justify-between text-xs text-slate-600 mt-1 font-mono">
<span>Start: 55kg</span>
<span>Goal: 75kg</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-5">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-semibold tracking-tight text-slate-200 flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:target-linear"></iconify-icon>
                            Daily Quests
                        </h2>
<span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded font-mono" id="sync-status">SYNC: ACTIVE</span>
</div>
<div className="space-y-5">

<div>
<div className="flex justify-between items-end mb-1">
<span className="text-sm text-slate-300">Energy (Calories)</span>
<div className="font-mono flex items-center gap-1">
<input className="w-16 bg-slate-950/50 border border-slate-700/80 rounded py-0.5 px-1.5 text-right text-slate-100 focus:border-cyan-500 focus:bg-slate-900 outline-none transition-all text-sm placeholder:text-slate-700" id="cal-input" placeholder="0" type="number"/>
<span className="text-sm text-slate-500">/ 2800</span>
</div>
</div>
<div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full transition-all duration-500" id="cal-bar" style={{width: '0%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-1">
<span className="text-sm text-slate-300">Regen (Protein g)</span>
<div className="font-mono flex items-center gap-1">
<input className="w-16 bg-slate-950/50 border border-slate-700/80 rounded py-0.5 px-1.5 text-right text-slate-100 focus:border-cyan-500 focus:bg-slate-900 outline-none transition-all text-sm placeholder:text-slate-700" id="pro-input" placeholder="0" type="number"/>
<span className="text-sm text-slate-500">/ 160</span>
</div>
</div>
<div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full transition-all duration-500" id="pro-bar" style={{width: '0%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-1">
<span className="text-sm text-slate-300">Hydration (Water L)</span>
<div className="font-mono flex items-center gap-1">
<input className="w-16 bg-slate-950/50 border border-slate-700/80 rounded py-0.5 px-1.5 text-right text-slate-100 focus:border-cyan-500 focus:bg-slate-900 outline-none transition-all text-sm placeholder:text-slate-700" id="wat-input" placeholder="0.0" step="0.1" type="number"/>
<span className="text-sm text-slate-500">/ 4.0</span>
</div>
</div>
<div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 rounded-full transition-all duration-500" id="wat-bar" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="mt-6 pt-4 border-t border-slate-800/50">
<div className="flex justify-between items-center mb-3">
<p className="text-xs text-slate-400 font-semibold tracking-tight uppercase">System Logs: Recent Data</p>
<iconify-icon className="text-cyan-500" icon="solar:database-linear"></iconify-icon>
</div>
<div className="space-y-1 max-h-48 overflow-y-auto hide-scrollbar" id="history-container">

</div>
</div>
</div>
</div>

<div className="lg:col-span-8 space-y-6">

<div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-2 flex overflow-x-auto hide-scrollbar gap-2">
<div className="flex-none w-28 p-3 rounded-lg border border-slate-800 bg-slate-950/50 text-center opacity-50">
<div className="text-xs text-slate-500 uppercase mb-1">Mon</div>
<div className="text-sm font-medium text-slate-300">Upper A</div>
</div>
<div className="flex-none w-28 p-3 rounded-lg border border-slate-800 bg-slate-950/50 text-center opacity-50">
<div className="text-xs text-slate-500 uppercase mb-1">Tue</div>
<div className="text-sm font-medium text-slate-300">Lower A</div>
</div>
<div className="flex-none w-28 p-3 rounded-lg border border-slate-800 bg-slate-950/50 text-center opacity-50">
<div className="text-xs text-slate-500 uppercase mb-1">Wed</div>
<div className="text-sm font-medium text-slate-600">Rest</div>
</div>
<div className="flex-none w-28 p-3 rounded-lg border border-cyan-800 bg-cyan-950/20 text-center shadow-[0_0_10px_rgba(34,211,238,0.05)] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-500"></div>
<div className="text-xs text-cyan-500 uppercase mb-1">Thu (Today)</div>
<div className="text-sm font-medium text-cyan-100">Upper B</div>
</div>
<div className="flex-none w-28 p-3 rounded-lg border border-slate-800 bg-slate-950/50 text-center">
<div className="text-xs text-slate-500 uppercase mb-1">Fri</div>
<div className="text-sm font-medium text-slate-600">Rest</div>
</div>
<div className="flex-none w-28 p-3 rounded-lg border border-slate-800 bg-slate-950/50 text-center">
<div className="text-xs text-slate-500 uppercase mb-1">Sat</div>
<div className="text-sm font-medium text-slate-600">Rest</div>
</div>
<div className="flex-none w-28 p-3 rounded-lg border border-slate-800 bg-slate-950/50 text-center">
<div className="text-xs text-slate-500 uppercase mb-1">Sun</div>
<div className="text-sm font-medium text-slate-600">Rest</div>
</div>
</div>

<div className="bg-slate-900/50 border border-slate-800/80 rounded-xl overflow-hidden flex flex-col h-[calc(100%-88px)]">
<div className="p-5 border-b border-slate-800/80 flex justify-between items-center bg-slate-900">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-200 flex items-center gap-2">
<iconify-icon className="text-cyan-500" icon="solar:dumbbell-linear"></iconify-icon>
                                Combat Skills Log: Upper B
                            </h2>
<p className="text-xs text-slate-500 mt-1 font-mono">SYSTEM TARGET: 6-9 REPS FOR OPTIMAL GROWTH</p>
</div>
<button className="text-xs font-medium text-cyan-400 bg-cyan-950/30 border border-cyan-800/50 hover:bg-cyan-900/50 px-3 py-1.5 rounded transition-colors flex items-center gap-1">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Skill
                        </button>
</div>
<div className="flex-1 overflow-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-slate-950/50 text-slate-400 text-xs uppercase font-mono border-b border-slate-800/50">
<tr>
<th className="px-5 py-3 font-medium">Skill (Exercise)</th>
<th className="px-5 py-3 font-medium">Load (kg)</th>
<th className="px-5 py-3 font-medium">Reps</th>
<th className="px-5 py-3 font-medium text-right">System Assessment</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/50 text-slate-300">

<tr className="hover:bg-slate-800/20 transition-colors">
<td className="px-5 py-4 font-medium text-slate-200">Overhead Press</td>
<td className="px-5 py-4 font-mono text-slate-400">40.0</td>
<td className="px-5 py-4 font-mono text-cyan-400">10</td>
<td className="px-5 py-4 text-right">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
<iconify-icon icon="solar:double-alt-arrow-up-linear" width="1.2em"></iconify-icon>
                                            CAPACITY EXCEEDED: RANK UP
                                        </div>
</td>
</tr>

<tr className="hover:bg-slate-800/20 transition-colors">
<td className="px-5 py-4 font-medium text-slate-200">Incline Dumbbell Press</td>
<td className="px-5 py-4 font-mono text-slate-400">24.0</td>
<td className="px-5 py-4 font-mono text-rose-400">5</td>
<td className="px-5 py-4 text-right">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-950/20 border border-rose-900/50 text-rose-400 text-xs font-mono">
<iconify-icon icon="solar:double-alt-arrow-down-linear" width="1.2em"></iconify-icon>
                                            INSUFFICIENT POWER
                                        </div>
</td>
</tr>

<tr className="hover:bg-slate-800/20 transition-colors">
<td className="px-5 py-4 font-medium text-slate-200">Lat Pulldown</td>
<td className="px-5 py-4 font-mono text-slate-400">55.0</td>
<td className="px-5 py-4 font-mono text-emerald-400">8</td>
<td className="px-5 py-4 text-right">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/20 border border-emerald-900/50 text-emerald-400 text-xs font-mono">
<iconify-icon icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
                                            OPTIMAL RANGE
                                        </div>
</td>
</tr>

<tr className="bg-slate-950/30">
<td className="px-5 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
<span className="font-medium text-slate-300">Cable Lateral Raise</span>
</div>
</td>
<td className="px-5 py-4">
<input className="w-16 bg-transparent border-b border-slate-700 focus:border-cyan-500 outline-none text-slate-200 font-mono text-sm pb-1 placeholder:text-slate-600" placeholder="0.0" type="number"/>
</td>
<td className="px-5 py-4">
<input className="w-12 bg-transparent border-b border-slate-700 focus:border-cyan-500 outline-none text-slate-200 font-mono text-sm pb-1 placeholder:text-slate-600" placeholder="0" type="number"/>
</td>
<td className="px-5 py-4 text-right">
<span className="text-xs text-slate-600 font-mono">AWAITING INPUT...</span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-slate-950 p-4 border-t border-slate-800/80">
<div className="flex items-start gap-3">
<iconify-icon className="text-cyan-600 text-xl mt-0.5" icon="solar:cpu-linear"></iconify-icon>
<div>
<h3 className="text-xs font-medium text-cyan-500 uppercase tracking-widest mb-1">System AI Analysis</h3>
<p className="text-xs text-slate-400 leading-relaxed font-mono">
<span className="text-cyan-400">&gt;</span> Player exhibits consistent progressive overload on pushing movements. <br/>
<span className="text-cyan-400">&gt;</span> Warning: Rep threshold breached on Overhead Press. Requirement to upgrade physical limits detected. <br/>
<span className="text-cyan-400">&gt;</span> Generating updated load parameters for next cycle...
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
