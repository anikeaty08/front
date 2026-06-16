import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Populate Hours
        const hourSelect = document.getElementById('wake-hour');
        for(let i=0; i<24; i++) {
            let val = i.toString().padStart(2, '0');
            let opt = document.createElement('option');
            opt.value = val;
            opt.text = val;
            if(i === 7) opt.selected = true; // Default 07:00
            hourSelect.appendChild(opt);
        }

        // Clock Update
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
            document.getElementById('current-clock').textContent = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // Calculate 'Sleep Now' Logic immediately
        calculateSleepNow();

        // Mode Switching
        function setMode(mode) {
            const btnNow = document.getElementById('btn-now');
            const btnWake = document.getElementById('btn-wake');
            const viewNow = document.getElementById('view-now');
            const viewWake = document.getElementById('view-wake');

            if (mode === 'now') {
                btnNow.classList.add('bg-zinc-800', 'text-white', 'shadow-sm', 'ring-1', 'ring-white/5');
                btnNow.classList.remove('text-zinc-500');
                
                btnWake.classList.remove('bg-zinc-800', 'text-white', 'shadow-sm', 'ring-1', 'ring-white/5');
                btnWake.classList.add('text-zinc-500');

                viewNow.classList.remove('hidden');
                viewWake.classList.add('hidden');
                viewNow.classList.add('fade-in');
                
                calculateSleepNow();
            } else {
                btnWake.classList.add('bg-zinc-800', 'text-white', 'shadow-sm', 'ring-1', 'ring-white/5');
                btnWake.classList.remove('text-zinc-500');
                
                btnNow.classList.remove('bg-zinc-800', 'text-white', 'shadow-sm', 'ring-1', 'ring-white/5');
                btnNow.classList.add('text-zinc-500');

                viewWake.classList.remove('hidden');
                viewNow.classList.add('hidden');
                viewWake.classList.add('fade-in');
            }
        }

        // Logic Functions
        function calculateSleepNow() {
            const now = new Date();
            // Add 14 mins to fall asleep
            const sleepStart = new Date(now.getTime() + 14 * 60000);
            
            // Cycles: 1.5h (90min)
            // Usually 5 or 6 cycles are best (7.5h or 9h)
            const cycles = [6, 5, 4, 3]; 
            const resultsContainer = document.getElementById('now-results');
            resultsContainer.innerHTML = '';

            const title = document.createElement('div');
            title.className = 'text-center text-sm text-zinc-400 mb-2';
            title.textContent = "Вам стоит проснуться в:";
            resultsContainer.appendChild(title);

            cycles.forEach((cycleCount, index) => {
                const duration = cycleCount * 90; // minutes
                const wakeTime = new Date(sleepStart.getTime() + duration * 60000);
                const timeStr = wakeTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
                
                const card = createResultCard(timeStr, cycleCount, index === 0 || index === 1);
                resultsContainer.appendChild(card);
            });
        }

        function calculateWake() {
            const h = parseInt(document.getElementById('wake-hour').value);
            const m = parseInt(document.getElementById('wake-min').value);
            
            // Target wake time. We need to create a date object for the NEXT occurrence of this time.
            let wakeTime = new Date();
            wakeTime.setHours(h, m, 0, 0);
            if (wakeTime < new Date()) {
                wakeTime.setDate(wakeTime.getDate() + 1);
            }

            const cycles = [6, 5, 4, 3];
            const resultsContainer = document.getElementById('wake-results');
            resultsContainer.innerHTML = '';
            resultsContainer.classList.remove('hidden');
            resultsContainer.classList.add('fade-in');

            const title = document.createElement('div');
            title.className = 'text-center text-sm text-zinc-400 mb-2';
            title.textContent = "Чтобы выспаться, ложитесь в:";
            resultsContainer.appendChild(title);

            // Calculate backwards from wake time
            cycles.forEach((cycleCount, index) => {
                // WakeTime - (Cycles * 90) - 14min (fall asleep)
                const sleepDuration = (cycleCount * 90) + 14; 
                const sleepTime = new Date(wakeTime.getTime() - sleepDuration * 60000);
                const timeStr = sleepTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
                
                const card = createResultCard(timeStr, cycleCount, index === 0 || index === 1);
                resultsContainer.appendChild(card);
            });
        }

        function createResultCard(time, cycles, isOptimal) {
            const div = document.createElement('div');
            // Styles based on optimality
            if (isOptimal) {
                div.className = 'bg-zinc-800/80 border border-zinc-700/50 p-4 rounded-xl flex items-center justify-between shadow-lg shadow-black/20 hover:bg-zinc-800 transition-colors group cursor-default';
            } else {
                div.className = 'bg-transparent border border-zinc-800 p-4 rounded-xl flex items-center justify-between hover:bg-zinc-900 transition-colors group cursor-default opacity-80';
            }

            const content = `
                <div class="flex items-center gap-4">
                    <div class="${isOptimal ? 'text-white' : 'text-zinc-400'} text-2xl font-medium tracking-tight group-hover:scale-105 transition-transform duration-300">
                        ${time}
                    </div>
                    ${isOptimal ? 
                        `<span class="text-[10px] font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">Лучшее</span>` 
                        : ''}
                </div>
                <div class="text-right">
                    <div class="text-xs text-zinc-400 font-medium">${cycles} циклов</div>
                    <div class="text-[10px] text-zinc-600">${cycles * 1.5} часов сна</div>
                </div>
            `;
            div.innerHTML = content;
            return div;
        }

        // Init with calculation every minute to keep "Sleep Now" accurate
        setInterval(() => {
            if (!document.getElementById('view-now').classList.contains('hidden')) {
                calculateSleepNow();
            }
        }, 60000);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-md relative">

<div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

<header className="mb-8 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:moon-stars-linear"></iconify-icon>
</div>
<h1 className="text-lg font-medium tracking-tight text-white">Sleep<span className="text-zinc-500">Cycle</span></h1>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</button>
</header>

<div className="grid grid-cols-2 bg-zinc-900/50 p-1 rounded-xl border border-zinc-800/50 mb-8 backdrop-blur-sm">
<button className="transition-all duration-300 text-sm font-medium text-white bg-zinc-800 rounded-lg ring-white/5 ring-1 pt-2.5 pb-2.5 shadow-sm" id="btn-now" onclick="setMode('now')">
                Я ложусь сейчас
            </button>
<button className="text-sm font-medium py-2.5 rounded-lg transition-all duration-300 text-zinc-500 hover:text-zinc-300" id="btn-wake" onclick="setMode('wake')">
                Я хочу встать в...
            </button>
</div>

<div className="relative min-h-[300px]" id="content-area">

<div className="fade-in" id="view-now">
<div className="text-center mb-8">
<p className="text-zinc-500 text-sm mb-2">Текущее время</p>
<div className="tabular-nums text-5xl font-light text-white tracking-tight" id="current-clock">12:12</div>
</div>
<div className="flex flex-col gap-3" id="now-results"><div className="text-center text-sm text-zinc-400 mb-2">Вам стоит проснуться в:</div><div className="bg-zinc-800/80 border border-zinc-700/50 p-4 rounded-xl flex items-center justify-between shadow-lg shadow-black/20 hover:bg-zinc-800 transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="text-white text-2xl font-medium tracking-tight group-hover:scale-105 transition-transform duration-300">
                        21:26
                    </div>
<span className="text-[10px] font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">Лучшее</span>
</div>
<div className="text-right">
<div className="text-xs text-zinc-400 font-medium">6 циклов</div>
<div className="text-[10px] text-zinc-600">9 часов сна</div>
</div>
</div><div className="bg-zinc-800/80 border border-zinc-700/50 p-4 rounded-xl flex items-center justify-between shadow-lg shadow-black/20 hover:bg-zinc-800 transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="text-white text-2xl font-medium tracking-tight group-hover:scale-105 transition-transform duration-300">
                        19:56
                    </div>
<span className="text-[10px] font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">Лучшее</span>
</div>
<div className="text-right">
<div className="text-xs text-zinc-400 font-medium">5 циклов</div>
<div className="text-[10px] text-zinc-600">7.5 часов сна</div>
</div>
</div><div className="bg-transparent border border-zinc-800 p-4 rounded-xl flex items-center justify-between hover:bg-zinc-900 transition-colors group cursor-default opacity-80">
<div className="flex items-center gap-4">
<div className="text-zinc-400 text-2xl font-medium tracking-tight group-hover:scale-105 transition-transform duration-300">
                        18:26
                    </div>
</div>
<div className="text-right">
<div className="text-xs text-zinc-400 font-medium">4 циклов</div>
<div className="text-[10px] text-zinc-600">6 часов сна</div>
</div>
</div><div className="bg-transparent border border-zinc-800 p-4 rounded-xl flex items-center justify-between hover:bg-zinc-900 transition-colors group cursor-default opacity-80">
<div className="flex items-center gap-4">
<div className="text-zinc-400 text-2xl font-medium tracking-tight group-hover:scale-105 transition-transform duration-300">
                        16:56
                    </div>
</div>
<div className="text-right">
<div className="text-xs text-zinc-400 font-medium">3 циклов</div>
<div className="text-[10px] text-zinc-600">4.5 часов сна</div>
</div>
</div></div>
<p className="text-xs text-center text-zinc-600 mt-6">
                    Учитывается 14 минут на засыпание.
                </p>
</div>

<div className="hidden" id="view-wake">
<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 mb-6">
<label className="block text-center text-zinc-500 text-xs font-medium uppercase tracking-wider mb-4">Выберите время подъема</label>
<div className="flex items-center justify-center gap-4">

<div className="relative group">
<select className="appearance-none bg-zinc-900 text-white text-4xl font-light py-4 pl-6 pr-8 rounded-xl border border-zinc-800 hover:border-zinc-700 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all cursor-pointer w-28 text-center tabular-nums" id="wake-hour">

<option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select>
<div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<span className="text-2xl text-zinc-600">:</span>

<div className="relative group">
<select className="appearance-none bg-zinc-900 text-white text-4xl font-light py-4 pl-6 pr-8 rounded-xl border border-zinc-800 hover:border-zinc-700 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all cursor-pointer w-28 text-center tabular-nums" id="wake-min">
<option value="00">00</option>
<option value="05">05</option>
<option value="10">10</option>
<option value="15">15</option>
<option value="20">20</option>
<option value="25">25</option>
<option selected="" value="30">30</option>
<option value="35">35</option>
<option value="40">40</option>
<option value="45">45</option>
<option value="50">50</option>
<option value="55">55</option>
</select>
<div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<button className="w-full bg-white text-black font-medium py-3.5 rounded-xl hover:bg-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" onclick="calculateWake()">
<iconify-icon className="text-lg" icon="solar:calculator-minimalistic-linear"></iconify-icon>
                    Рассчитать время сна
                </button>
<div className="mt-8 flex flex-col gap-3 hidden" id="wake-results">

</div>
</div>
</div>
</main>


    </>
  );
}
