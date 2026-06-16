import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
'condensed': ['"IBM Plex Sans Condensed"', 'sans-serif'],
'manrope': ['"Manrope"', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // --- State Management ---
        const state = {
            mode: 'Bulk', // 'Bulk' or 'Cut'
            dayOfPhase: 42,
            weights: {
                // Populated dynamically based on dates
                // format: 'YYYY-MM-DD': number
            }
        };

        // Generate dates centered around today
        const today = new Date();
        const days = []; // -3 to +3
        
        function getFormattedDate(date) {
            return date.toISOString().split('T')[0];
        }

        // Initialize mock data
        for(let i = -3; i <= 3; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            days.push(d);
            
            // Mock some data
            const dateKey = getFormattedDate(d);
            if(i < 0) { // Past days
                state.weights[dateKey] = (80.5 + (i * 0.2)).toFixed(1); 
            } else if (i === 0) {
                // state.weights[dateKey] = 80.8; // Uncomment to test entered weight
            }
        }

        // --- DOM Elements ---
        const calendarStrip = document.getElementById('calendar-strip');
        const weightInputsContainer = document.getElementById('weight-inputs-container');
        const modeDisplayTitle = document.getElementById('mode-display-title');
        const dayCounterText = document.getElementById('day-counter-text');
        const prevWeightDisplay = document.getElementById('prev-weight-display');
        const currWeightDisplay = document.getElementById('curr-weight-display');
        const weightDiffDisplay = document.getElementById('weight-diff-display');
        const modeToggle = document.getElementById('mode-toggle');
        
        // --- Render Functions ---

        function renderCalendar() {
            calendarStrip.innerHTML = '';
            const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            days.forEach((date, index) => {
                const dateKey = getFormattedDate(date);
                const isToday = index === 3; // Center index
                const hasWeight = state.weights[dateKey] !== undefined;
                const dayNum = date.getDate();
                const dayName = dayNames[date.getDay()];

                // Styles
                let containerClass = "flex flex-col items-center justify-center min-w-[64px] h-[84px] rounded-2xl border transition-all duration-300 snap-center";
                let textClass = "text-xs font-medium mb-1";
                let numClass = "text-lg font-condensed font-semibold";

                if (isToday) {
                    // Active / Center Day (Purple)
                    containerClass += " bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/50 scale-105";
                    textClass += " text-purple-200";
                } else if (hasWeight) {
                    // Completed Day (Dark Greenish/Zinc with accent)
                    containerClass += " bg-zinc-800 border-zinc-700 text-zinc-300";
                    // Add a checkmark indicator logic if needed, for now just style
                    numClass += " text-white";
                } else {
                    // Future / Empty Day
                    containerClass += " bg-zinc-900 border-zinc-800 text-zinc-600";
                }

                const el = document.createElement('div');
                el.className = containerClass;
                el.innerHTML = `
                    <span class="${textClass}">${dayName}</span>
                    <span class="${numClass}">${dayNum}</span>
                    ${hasWeight && !isToday ? '<div class="mt-1 w-1 h-1 rounded-full bg-emerald-500"></div>' : ''}
                `;
                calendarStrip.appendChild(el);
            });
        }

        function renderInputs() {
            weightInputsContainer.innerHTML = '';
            const dayNamesFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            
            // Show inputs for Yesterday, Today, and past days mainly, but let's list all 7 for the week view
            days.forEach((date, index) => {
                const dateKey = getFormattedDate(date);
                const isToday = index === 3;
                const val = state.weights[dateKey] || '';
                const label = isToday ? 'Today' : (index === 2 ? 'Yesterday' : dayNamesFull[date.getDay()]);

                const row = document.createElement('div');
                row.className = "flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors";
                row.innerHTML = `
                    <label class="text-zinc-300 text-base font-medium flex-1">${label} <span class="text-zinc-600 text-xs ml-2 font-normal">${date.getDate()}/${date.getMonth()+1}</span></label>
                    <div class="relative">
                        <input type="number" step="0.1" placeholder="0.0" 
                            class="w-24 bg-zinc-900 border border-zinc-700 rounded-xl py-2 px-3 text-right text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-condensed text-lg"
                            value="${val}"
                            onchange="updateWeight('${dateKey}', this.value)"
                        >
                        <span class="absolute right-8 top-1/2 -translate-y-1/2 text-zinc-500 text-xs pointer-events-none mr-1">kg</span>
                    </div>
                `;
                weightInputsContainer.appendChild(row);
            });
        }

        function updateSummary() {
            // Update Mode Text
            // Animate text change
            const modeWord = state.mode.toUpperCase();
            let spans = '';
            modeWord.split('').forEach((char, i) => {
                spans += `<span style="animation-delay: ${i * 0.05}s">${char}</span>`;
            });
            modeDisplayTitle.innerHTML = spans;
            
            dayCounterText.innerText = `${state.dayOfPhase} days of ${state.mode}`;

            // Update Weights
            const todayKey = getFormattedDate(days[3]);
            const yestKey = getFormattedDate(days[2]);

            const todayVal = state.weights[todayKey];
            const yestVal = state.weights[yestKey];

            // Yesterday
            prevWeightDisplay.innerText = yestVal ? yestVal : '???';
            prevWeightDisplay.className = yestVal ? "font-condensed font-semibold text-4xl text-white tracking-tight mt-2" : "font-condensed font-semibold text-4xl text-zinc-700 tracking-tight mt-2";

            // Today
            currWeightDisplay.innerText = todayVal ? todayVal : '???';
            currWeightDisplay.className = todayVal ? "font-condensed font-semibold text-4xl text-white tracking-tight mt-2" : "font-condensed font-semibold text-4xl text-zinc-700 tracking-tight mt-2";

            // Diff
            if (todayVal && yestVal) {
                const diff = (parseFloat(todayVal) - parseFloat(yestVal)).toFixed(1);
                if (diff > 0) {
                    weightDiffDisplay.innerHTML = `<i data-lucide="trending-up" class="w-4 h-4 text-red-500"></i> <span class="text-red-400">+${diff} kg</span>`;
                } else if (diff < 0) {
                    weightDiffDisplay.innerHTML = `<i data-lucide="trending-down" class="w-4 h-4 text-emerald-500"></i> <span class="text-emerald-400">${diff} kg</span>`;
                } else {
                    weightDiffDisplay.innerHTML = `<span class="text-zinc-400">No change</span>`;
                }
                lucide.createIcons();
            } else {
                weightDiffDisplay.innerHTML = `<span class="text-zinc-700">--</span>`;
            }
        }

        // --- Actions ---

        window.updateWeight = (dateKey, value) => {
            if(value) {
                state.weights[dateKey] = value;
            } else {
                delete state.weights[dateKey];
            }
            renderCalendar();
            updateSummary();
        };

        window.switchPage = (pageName) => {
            const home = document.getElementById('page-home');
            const settings = document.getElementById('page-settings');
            const navHome = document.getElementById('nav-home');
            const navSettings = document.getElementById('nav-settings');

            if (pageName === 'home') {
                home.classList.remove('hidden');
                settings.classList.add('hidden');
                
                navHome.classList.replace('text-zinc-500', 'text-purple-500');
                navSettings.classList.replace('text-purple-500', 'text-zinc-500');
            } else {
                home.classList.add('hidden');
                settings.classList.remove('hidden');
                renderInputs(); // Refresh inputs when entering settings
                
                navSettings.classList.replace('text-zinc-500', 'text-purple-500');
                navHome.classList.replace('text-purple-500', 'text-zinc-500');
            }
        };

        // Toggle Listener
        modeToggle.addEventListener('change', (e) => {
            state.mode = e.target.checked ? 'Bulk' : 'Cut';
            updateSummary();
        });

        // --- Init ---
        renderCalendar();
        updateSummary();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="relative w-full max-w-[420px] h-[850px] bg-zinc-900 rounded-[3rem] shadow-2xl border border-zinc-800 flex flex-col overflow-hidden ring-8 ring-black" style={{}}>

<header className="px-6 pt-12 pb-4 flex justify-between items-center shrink-0 z-20 bg-zinc-900/90 backdrop-blur-md" style={{}}>
<div className="flex items-center gap-3">
<div className="">
<h1 className="leading-none text-2xl font-semibold text-white tracking-tight font-condensed" style={{}}>Hej, Kacper!</h1>
<p className="text-zinc-400 text-sm font-medium mt-0.5" style={{}}>Focus on the goal.</p>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar relative w-full" id="content-area">

<div className="flex flex-col gap-6 transition-opacity duration-300 pr-6 pb-24 pl-6 gap-x-6 gap-y-6" id="page-home">

<div className="relative -mx-6">

<div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" style={{}}></div>
<div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" style={{}}></div>
<div className="flex justify-between items-center px-6 gap-3 overflow-x-auto no-scrollbar pt-2 pb-4" id="calendar-strip"><div className="flex flex-col items-center justify-center min-w-[64px] h-[84px] rounded-2xl border transition-all duration-300 snap-center bg-zinc-800 border-zinc-700 text-zinc-300" style={{}}>
<span className="text-xs font-medium mb-1">Tue</span>
<span className="text-lg font-condensed font-semibold text-white">18</span>
<div className="mt-1 w-1 h-1 rounded-full bg-emerald-500" style={{}}></div>
</div><div className="flex flex-col items-center justify-center min-w-[64px] h-[84px] rounded-2xl border transition-all duration-300 snap-center bg-zinc-800 border-zinc-700 text-zinc-300" style={{}}>
<span className="text-xs font-medium mb-1">Wed</span>
<span className="text-lg font-condensed font-semibold text-white">19</span>
<div className="mt-1 w-1 h-1 rounded-full bg-emerald-500" style={{}}></div>
</div><div className="flex flex-col items-center justify-center min-w-[64px] h-[84px] rounded-2xl border transition-all duration-300 snap-center bg-zinc-800 border-zinc-700 text-zinc-300" style={{}}>
<span className="text-xs font-medium mb-1">Thu</span>
<span className="text-lg font-condensed font-semibold text-white">20</span>
<div className="mt-1 w-1 h-1 rounded-full bg-emerald-500" style={{}}></div>
</div><div className="flex flex-col min-w-[64px] transition-all duration-300 snap-center shadow-purple-900/50 text-white bg-fuchsia-100 h-[84px] border-emerald-300 border rounded-2xl shadow-lg scale-105 items-center justify-center">
<span className="text-xs font-medium mb-1 text-purple-200">Fri</span>
<span className="text-lg font-condensed font-semibold">21</span>
</div><div className="flex flex-col items-center justify-center min-w-[64px] h-[84px] rounded-2xl border transition-all duration-300 snap-center bg-zinc-900 border-zinc-800 text-zinc-600" style={{}}>
<span className="text-xs font-medium mb-1">Sat</span>
<span className="text-lg font-condensed font-semibold">22</span>
</div><div className="flex flex-col items-center justify-center min-w-[64px] h-[84px] rounded-2xl border transition-all duration-300 snap-center bg-zinc-900 border-zinc-800 text-zinc-600" style={{}}>
<span className="text-xs font-medium mb-1">Sun</span>
<span className="text-lg font-condensed font-semibold">23</span>
</div><div className="flex flex-col items-center justify-center min-w-[64px] h-[84px] rounded-2xl border transition-all duration-300 snap-center bg-zinc-900 border-zinc-800 text-zinc-600" style={{}}>
<span className="text-xs font-medium mb-1">Mon</span>
<span className="text-lg font-condensed font-semibold">24</span>
</div></div>
</div>

<div className="transform hover:scale-[1.01] transition-transform duration-300 group overflow-hidden bg-gradient-to-br w-full rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-lg shadow-gray-900/20 to-gray-700 from-gray-600" style={{}}>

<div className="opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
<div className="relative z-10 flex flex-col h-full justify-between gap-8">
<div className="">
<div className="flex gap-2 mb-2 gap-x-2 gap-y-2 items-center text-gray-100" style={{}}>
<span className="text-xs font-semibold tracking-wider uppercase opacity-80">Current Phase</span>
<svg className="lucide lucide-zap w-3 h-3 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h2 className="word-animate text-5xl font-semibold text-white tracking-tighter font-condensed" id="mode-display-title"><span style={{animationDelay: '0s'}}>B</span><span style={{animationDelay: '0.05s'}}>U</span><span style={{animationDelay: '0.1s'}}>L</span><span className="text-center" style={{animationDelay: '0.15000000000000002s'}}>K</span></h2>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-zinc-850 p-5 rounded-3xl border border-zinc-800/50 shadow-sm flex flex-col justify-between h-40 relative group overflow-hidden" style={{}}>
<div className="absolute top-4 right-4 text-zinc-600" style={{}}>
<svg className="lucide lucide-history w-5 h-5" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
</div>
<div className="">
<h3 className="font-condensed font-semibold text-4xl text-white tracking-tight mt-2" id="prev-weight-display" style={{}}>80.3</h3>
<span className="text-zinc-500 text-sm font-medium" style={{}}>kg</span>
</div>
<p className="text-zinc-400 text-sm font-medium" style={{}}>Yesterday's weight</p>
</div>

<div className="bg-zinc-850 p-5 rounded-3xl border border-zinc-800/50 shadow-sm flex flex-col justify-between h-40 relative overflow-hidden" style={{}}>
<div className="absolute top-4 right-4 text-zinc-600" style={{}}>
<svg className="lucide lucide-scale w-5 h-5" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path className="" d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
</div>
<div className="">
<h3 className="font-condensed font-semibold text-4xl text-zinc-700 tracking-tight mt-2" id="curr-weight-display" style={{}}>???</h3>
<span className="text-zinc-500 text-sm font-medium" style={{}}>kg</span>
</div>
<div className="">
<p className="text-zinc-400 text-sm font-medium" style={{}}>Current weight</p>
<div className="flex items-center gap-1 text-sm font-semibold mt-1 text-zinc-600" id="weight-diff-display" style={{}}><span className="text-zinc-700" style={{}}>--</span></div>
</div>
</div>
</div>

<div className="bg-zinc-850 p-5 rounded-3xl border border-zinc-800/50 shadow-sm mt-0" style={{}}>
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-timer w-[20px] h-[20px] text-gray-200" data-icon-replaced="true" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle className="" cx="12" cy="14" r="8"></circle></svg>
<span className="text-zinc-200 font-semibold text-lg tracking-tight" style={{}}>Phase Progress</span>
</div>
<span className="text-zinc-400 text-lg font-condensed tracking-tight" id="day-counter-text" style={{}}>42 days of Bulk</span>
</div>
<p className="text-right text-zinc-500 text-xs mt-2 font-medium" style={{}}>37% complete</p>
</div>
</div>

<div className="hidden px-6 pb-24 flex-col gap-6 animate-fade-in-up" id="page-settings">
<h2 className="font-condensed font-semibold text-3xl text-white tracking-tight mb-2" style={{}}>Configuration</h2>

<div className="bg-zinc-850 p-5 rounded-3xl border border-zinc-800/50 flex items-center justify-between" style={{}}>
<div>
<h3 className="text-white text-lg font-medium" style={{}}>Current Goal</h3>
<p className="text-zinc-500 text-sm mt-1" style={{}}>Switch between phases</p>
</div>
<div className="relative inline-block w-32 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-14 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 left-1 top-1 shadow-sm" id="mode-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-10 rounded-full bg-zinc-800 cursor-pointer border border-zinc-700 flex items-center justify-between px-3" htmlFor="mode-toggle" style={{}}>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider ml-1" style={{}}>Cut</span>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mr-1" style={{}}>Bulk</span>
</label>
</div>
</div>

<div className="bg-zinc-850 rounded-3xl border border-zinc-800/50 overflow-hidden" style={{}}>
<div className="p-5 border-b border-zinc-800" style={{}}>
<h3 className="text-white text-lg font-medium" style={{}}>Weight Log</h3>
<p className="text-zinc-500 text-sm mt-1" style={{}}>Update your daily metrics</p>
</div>
<div className="divide-y divide-zinc-800" id="weight-inputs-container" style={{}}>

</div>
</div>
<div className="text-center mt-4">
<p className="text-zinc-600 text-xs font-medium" style={{}}>Data stored locally on device.</p>
</div>
</div>
</div>

<nav className="absolute bottom-0 left-0 w-full bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800 pb-8 pt-4 px-8 z-30" style={{}}>
<div className="flex justify-around items-center">
<button className="group flex flex-col items-center gap-1 transition-colors text-gray-500" id="nav-home" onclick="switchPage('home')" style={{}}>
<div className="p-2 rounded-2xl group-hover:bg-zinc-800/50 transition-colors" style={{}}>
<svg className="lucide lucide-layout-dashboard w-[24px] h-[24px] text-slate-50" data-icon-replaced="true" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect className="" height="5" rx="1" width="7" x="14" y="3"></rect><rect className="" height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<span className="text-xs font-medium">Summary</span>
</button>
<div className="w-px h-8 bg-zinc-800" style={{}}></div>
<button className="group flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors" id="nav-settings" onclick="switchPage('settings')" style={{}}>
<div className="p-2 rounded-2xl group-hover:bg-zinc-800/50 transition-colors" style={{}}>
<svg className="lucide lucide-sliders-horizontal w-6 h-6" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
</div>
<span className="text-xs font-medium">Settings</span>
</button>
</div>
</nav>

<div className="absolute bottom-28 right-6 pointer-events-none">

</div>
</main>


    </>
  );
}
