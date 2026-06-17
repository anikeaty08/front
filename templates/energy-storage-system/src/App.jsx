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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
850: '#172033', // Custom dark
900: '#0f172a',
950: '#020617',
},
emerald: {
450: '#10b981',
500: '#10b981',
900: '#064e3b',
950: '#022c22',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'flow': 'flowAnimation 2s linear infinite',
},
keyframes: {
flowAnimation: {
'0%': { backgroundPosition: '0% 50%' },
'100%': { backgroundPosition: '100% 50%' },
}
}
}
}
}



        // --- 1. CONFIG & STATE ---
        const state = {
            battery: 65,
            voltage: 3.42, // Modified for Li-ion cell
            current: 4.2,  // Modified for realistic draw
            temp: 31,
            mode: 'normal', // normal, high, emergency, surplus
            logs: []
        };

        // DOM Elements
        const els = {
            volt: document.getElementById('sensor-voltage'),
            curr: document.getElementById('sensor-current'),
            pow: document.getElementById('sensor-power'),
            temp: document.getElementById('sensor-temp'),
            batLevel: document.getElementById('battery-liquid'),
            batText: document.getElementById('battery-percentage'),
            batStatus: document.getElementById('battery-status-text'),
            chart: document.getElementById('prediction-chart'),
            logs: document.getElementById('console-logs'),
            scenario: document.getElementById('scenario-select'),
            lines: {
                medical: document.getElementById('line-medical'),
                industry: document.getElementById('line-industry'),
                residential: document.getElementById('line-residential'),
                ev: document.getElementById('line-ev'),
            },
            status: {
                res: document.getElementById('status-residential'),
                ev: document.getElementById('status-ev'),
                resKw: document.getElementById('kw-residential'),
                evKw: document.getElementById('kw-ev')
            }
        };

        // --- 2. INITIALIZATION ---

        // Generate Chart Bars
        function initChart() {
            els.chart.innerHTML = '';
            for(let i=0; i<24; i++) {
                const height = 20 + Math.random() * 60;
                const isPeak = height > 70;
                const colorClass = isPeak ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'bg-slate-700';
                
                // Emphasize current hour (approx middle)
                const isCurrent = i === 18;
                const finalColor = isCurrent ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : colorClass;
                
                const bar = document.createElement('div');
                bar.className = `w-full rounded-t-sm transition-all duration-1000 ${finalColor}`;
                bar.style.height = `${height}%`;
                
                // Tooltip structure
                const tooltip = document.createElement('div');
                tooltip.className = 'hidden group-hover:block absolute bottom-full mb-2 text-[10px] bg-slate-800 p-1 rounded';
                tooltip.innerText = `${i}:00`;
                
                const wrapper = document.createElement('div');
                wrapper.className = 'h-full flex-1 flex items-end group relative';
                wrapper.appendChild(tooltip);
                wrapper.appendChild(bar);
                
                els.chart.appendChild(wrapper);
            }
        }

        // --- 3. SIMULATION LOGIC ---

        function addLog(msg) {
            const time = new Date().toISOString().split('T')[1].split('.')[0];
            const div = document.createElement('div');
            div.innerHTML = `<span class="text-slate-500">[${time}]</span> ${msg}`;
            els.logs.prepend(div);
            if(els.logs.children.length > 8) els.logs.lastChild.remove();
        }

        function updateArduinoData() {
            // Fluctuate values based on mode (scaled for 3.4V)
            let vVar = (Math.random() - 0.5) * 0.05; // Small fluctuations
            let cVar = (Math.random() - 0.5) * 0.2;

            if(state.mode === 'high') cVar += 2.0;
            if(state.mode === 'emergency') vVar -= 0.4;
            if(state.mode === 'surplus') vVar += 0.2;

            // Constrain voltage to realistic Li-ion range (2.8V - 4.2V)
            state.voltage = Math.min(4.2, Math.max(2.8, 3.4 + vVar));
            
            // Constrain current
            state.current = Math.max(0.1, (state.mode === 'high' ? 6 : 3) + cVar);
            
            state.temp = Math.max(20, state.temp + (Math.random() - 0.5) * 0.1);
            
            const power = state.voltage * state.current; // Watts (P=VI)

            // Update DOM
            els.volt.innerText = state.voltage.toFixed(2);
            els.curr.innerText = state.current.toFixed(1);
            els.pow.innerText = power.toFixed(1);
            els.temp.innerText = state.temp.toFixed(1);

            // Update Progress Bars (Scaled to max expected values)
            // Voltage bar: 3.0V to 4.2V range roughly
            document.getElementById('bar-voltage').style.width = (state.voltage / 4.2 * 100) + '%';
            document.getElementById('bar-current').style.width = (state.current / 10 * 100) + '%';
            
            // Color Logic
            if(state.voltage < 3.2) els.volt.classList.replace('text-white', 'text-red-500');
            else els.volt.classList.replace('text-red-500', 'text-white');
        }

        function updateDistributionLogic() {
            // Default State
            let supplyRes = true;
            let supplyEv = false;

            if (state.mode === 'surplus') {
                state.battery = Math.min(100, state.battery + 2); // Charging
                els.batStatus.innerText = "CHARGING (CV/CC)";
                els.batStatus.className = "px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 uppercase";
                supplyEv = true;
                addLog("Charger connected. Voltage rising.");
            } 
            else if (state.mode === 'emergency') {
                els.batStatus.innerText = "CRITICAL LOW";
                els.batStatus.className = "px-2 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-[10px] font-mono text-red-400 uppercase animate-pulse";
                supplyRes = false; // Shed loads
                supplyEv = false;
                // Cut line visuals
                els.lines.residential.classList.remove('animate-flow');
                els.lines.residential.classList.add('opacity-10');
                els.lines.medical.classList.add('animate-pulse'); // Priority
                addLog("UVLO WARNING. Voltage < 3.2V. Cutting non-essential loads.");
            }
            else if (state.mode === 'high') {
                els.batStatus.innerText = "HIGH DISCHARGE";
                els.batStatus.className = "px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 uppercase";
                supplyEv = false;
                addLog("High current draw detected. Monitor thermals.");
            }
            else {
                // Normal
                els.batStatus.innerText = "DISCHARGING";
                els.batStatus.className = "px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 uppercase";
                supplyEv = state.battery > 50;
            }

            // Update Battery UI
            els.batLevel.style.height = state.battery + '%';
            els.batText.innerText = Math.floor(state.battery) + '%';
            
            // Color battery based on level
            if(state.battery < 20) {
                els.batLevel.className = "w-full bg-gradient-to-t from-red-600 to-red-400 rounded-xl relative transition-all duration-1000 overflow-hidden";
            } else {
                els.batLevel.className = "w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-xl relative transition-all duration-1000 overflow-hidden";
            }

            // Update Load Status Text
            if(!supplyRes) {
                els.status.res.innerHTML = `<iconify-icon icon="solar:close-circle-bold"></iconify-icon> OFF`;
                els.status.res.className = "text-[10px] text-red-400 font-mono flex items-center gap-1";
                els.status.resKw.innerText = "0 W";
            } else {
                els.status.res.innerHTML = `<iconify-icon icon="solar:check-circle-bold"></iconify-icon> ACTIVE`;
                els.status.res.className = "text-[10px] text-emerald-400 font-mono flex items-center gap-1";
                els.status.resKw.innerText = "0.5 W";
                els.lines.residential.classList.add('animate-flow');
                els.lines.residential.classList.remove('opacity-10');
            }

            if(supplyEv) {
                els.status.ev.innerHTML = `<iconify-icon icon="solar:wifi-router-minimalistic-linear"></iconify-icon> TX`;
                els.status.ev.className = "text-[10px] text-emerald-400 font-mono flex items-center gap-1";
                els.status.evKw.innerText = "1.2 W";
                els.lines.ev.classList.add('animate-flow');
                els.lines.ev.classList.replace('opacity-10', 'opacity-80');
            } else {
                els.status.ev.innerHTML = `<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> SLEEP`;
                els.status.ev.className = "text-[10px] text-slate-500 font-mono flex items-center gap-1";
                els.status.evKw.innerText = "0 W";
                els.lines.ev.classList.remove('animate-flow');
                els.lines.ev.classList.replace('opacity-80', 'opacity-10');
            }
        }

        // --- 4. LISTENERS ---

        els.scenario.addEventListener('change', (e) => {
            state.mode = e.target.value;
            addLog(`User changed scenario to: ${state.mode.toUpperCase()}`);
            // Reset Chart to look different
            initChart();
        });

        // Run Loops
        initChart();
        addLog("BMS Online. Reading cells...");
        setInterval(updateArduinoData, 2000); // Sensor update every 2s
        setInterval(updateDistributionLogic, 1000); // Logic check every 1s

    
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
      

<aside className="w-64 h-full border-r border-slate-800 bg-slate-900/50 flex flex-col hidden md:flex">
<div className="h-16 flex items-center px-6 border-b border-slate-800">
<div className="flex items-center gap-2 text-emerald-400">
<iconify-icon icon="solar:leaf-bold-duotone" width="24"></iconify-icon>
<span className="font-bold text-lg tracking-tight text-white">EcoGrid<span className="text-emerald-500">AI</span></span>
</div>
</div>
<nav className="flex-1 px-3 py-6 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" href="#">
<iconify-icon icon="solar:widget-5-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors group" href="#">
<iconify-icon className="group-hover:text-emerald-400 transition-colors" icon="solar:graph-new-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors group" href="#">
<iconify-icon className="group-hover:text-emerald-400 transition-colors" icon="solar:history-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">History Logs</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors group" href="#">
<iconify-icon className="group-hover:text-emerald-400 transition-colors" icon="solar:settings-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">System Config</span>
</a>
</nav>
<div className="p-4 border-t border-slate-800">
<div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-mono text-emerald-400">ARDUINO: ONLINE</span>
</div>
<div className="text-[10px] text-slate-500 font-mono break-all">
                    ID: 8823-AFX-22<br/>
                    Latency: 24ms
                </div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<div className="absolute inset-0 crt-overlay z-50 pointer-events-none opacity-20"></div>

<header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/30 backdrop-blur-sm z-40">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h1 className="text-sm font-semibold text-slate-200 hidden sm:block">Real-time Battery Management System (BMS)</h1>
</div>
<div className="flex items-center gap-4">

<select className="bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded px-2 py-1.5 focus:outline-none focus:border-emerald-500" id="scenario-select">
<option value="normal">Scenario: Normal Load</option>
<option value="high">Scenario: High Discharge</option>
<option value="emergency">Scenario: Low Voltage</option>
<option value="surplus">Scenario: Charging</option>
</select>
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-emerald-500/20">
                    AI
                </div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">
<div className="max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-panel p-4 rounded-xl relative group overflow-hidden">
<div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-yellow-400" icon="solar:bolt-circle-bold" width="60"></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Cell Voltage</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white" id="sensor-voltage">3.42</span>
<span className="text-sm text-slate-500">V</span>
</div>
<div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-400 w-[60%] transition-all duration-500" id="bar-voltage"></div>
</div>
</div>

<div className="glass-panel p-4 rounded-xl relative group overflow-hidden">
<div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-blue-400" icon="solar:battery-charge-linear" width="60"></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Current Draw</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white" id="sensor-current">4.2</span>
<span className="text-sm text-slate-500">A</span>
</div>
<div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 w-[45%] transition-all duration-500" id="bar-current"></div>
</div>
</div>

<div className="glass-panel p-4 rounded-xl relative group overflow-hidden">
<div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-emerald-400" icon="solar:plug-circle-linear" width="60"></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Active Power</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-emerald-400" id="sensor-power">14.4</span>
<span className="text-sm text-emerald-600">W</span>
</div>
<div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-400/80">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span>+1.2% demand</span>
</div>
</div>

<div className="glass-panel p-4 rounded-xl relative group overflow-hidden">
<div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-red-400" icon="solar:thermometer-linear" width="60"></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Cell Temp</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white" id="sensor-temp">31.2</span>
<span className="text-sm text-slate-500">°C</span>
</div>
<div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-red-500 w-[35%] transition-all duration-500" id="bar-temp"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-xl p-6 lg:col-span-1 flex flex-col">
<div className="flex justify-between items-start mb-6">
<h3 className="text-sm font-semibold text-white flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:battery-full-linear"></iconify-icon>
                                Cell Capacity
                            </h3>
<span className="px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 uppercase" id="battery-status-text">Standby</span>
</div>
<div className="flex-1 flex flex-col items-center justify-center py-4">

<div className="relative w-32 h-56 border-4 border-slate-700 rounded-2xl p-1.5 flex flex-col-reverse mb-4 shadow-2xl shadow-emerald-900/20">

<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-4 bg-slate-700 rounded-t-md"></div>

<div className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-xl relative transition-all duration-1000 ease-in-out overflow-hidden" id="battery-liquid" style={{height: '65%'}}>

<div className="absolute bottom-0 left-2 w-1 h-1 bg-white/30 rounded-full animate-[ping_2s_infinite]"></div>
<div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-white/20 rounded-full animate-[ping_3s_infinite_0.5s]"></div>

<div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-white tracking-tight" id="battery-percentage">65%</div>
<div className="text-xs text-slate-500 mt-1">Capacity Remaining</div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800">
<div className="text-center">
<div className="text-[10px] text-slate-500 uppercase">Input</div>
<div className="text-xs font-medium text-emerald-400">4.2 V</div>
</div>
<div className="text-center border-l border-slate-800">
<div className="text-[10px] text-slate-500 uppercase">Cycle</div>
<div className="text-xs font-medium text-blue-400">102</div>
</div>
<div className="text-center border-l border-slate-800">
<div className="text-[10px] text-slate-500 uppercase">Health</div>
<div className="text-xs font-medium text-slate-300">98%</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6 lg:col-span-2 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-semibold text-white flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="solar:magic-stick-3-linear"></iconify-icon>
                                    AI Discharge Forecast
                                </h3>
<p className="text-xs text-slate-500 mt-1">Neural Network prediction based on voltage curve &amp; load.</p>
</div>
<div className="text-right">
<div className="text-[10px] text-slate-400 font-mono">EST. EMPTY</div>
<div className="text-sm font-bold text-white">18:30 <span className="text-slate-500 font-normal">(in 2h)</span></div>
</div>
</div>

<div className="flex-1 flex items-end gap-2 pt-8 pb-2 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-slate-800/50 border-t border-dashed border-slate-800"></div>
<div className="w-full h-px bg-slate-800/50 border-t border-dashed border-slate-800"></div>
<div className="w-full h-px bg-slate-800/50 border-t border-dashed border-slate-800"></div>
<div className="w-full h-px bg-slate-800/50 border-t border-dashed border-slate-800"></div>
</div>

<div className="w-full flex items-end justify-between h-48 gap-1.5" id="prediction-chart">

</div>
</div>

<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-slate-700"></div>
<span className="text-[10px] text-slate-500">Normal Drain</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-[10px] text-slate-400">Optimized</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
<span className="text-[10px] text-slate-400">High Load</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden border border-slate-800">
<div className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
<h3 className="text-sm font-semibold text-white flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:routing-2-linear"></iconify-icon>
                            Load Distribution
                        </h3>
<span className="text-[10px] font-mono text-slate-500">DC OUTPUT ACTIVE</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">

<div className="p-5 relative group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-red-500/10 text-red-400">
<iconify-icon icon="solar:cpu-linear"></iconify-icon>
</div>
<span className="font-medium text-sm">MCU (3.3V)</span>
</div>
<span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">CORE</span>
</div>
<div className="flex items-center justify-between text-xs mb-2">
<span className="text-slate-500">Voltage:</span>
<span className="text-slate-200 font-mono">3.3V Reg</span>
</div>

<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
<div className="h-full w-full animate-flow flow-line zone-line" id="line-medical"></div>
</div>
<div className="flex justify-between items-center">
<span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> STABLE
                                </span>
<span className="text-xs font-bold text-white">0.3 W</span>
</div>
</div>

<div className="p-5 relative group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-orange-500/10 text-orange-400">
<iconify-icon icon="solar:wheel-linear"></iconify-icon>
</div>
<span className="font-medium text-sm">Driver</span>
</div>
<span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">HIGH POWER</span>
</div>
<div className="flex items-center justify-between text-xs mb-2">
<span className="text-slate-500">Demand:</span>
<span className="text-slate-200 font-mono">PWM 60%</span>
</div>

<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
<div className="h-full w-full animate-flow flow-line zone-line opacity-50" id="line-industry"></div>
</div>
<div className="flex justify-between items-center">
<span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> DRIVING
                                </span>
<span className="text-xs font-bold text-white">12 W</span>
</div>
</div>

<div className="p-5 relative group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
<iconify-icon icon="solar:radar-linear"></iconify-icon>
</div>
<span className="font-medium text-sm">Sensors</span>
</div>
<span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">AUX</span>
</div>
<div className="flex items-center justify-between text-xs mb-2">
<span className="text-slate-500">Demand:</span>
<span className="text-slate-200 font-mono">Low</span>
</div>

<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
<div className="h-full w-full animate-flow flow-line zone-line opacity-30" id="line-residential"></div>
</div>
<div className="flex justify-between items-center">
<span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1" id="status-residential">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> ACTIVE
                                </span>
<span className="text-xs font-bold text-white" id="kw-residential">0.5 W</span>
</div>
</div>

<div className="p-5 relative group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-purple-500/10 text-purple-400">
<iconify-icon icon="solar:wifi-router-minimalistic-linear"></iconify-icon>
</div>
<span className="font-medium text-sm">Comms</span>
</div>
<span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">RF</span>
</div>
<div className="flex items-center justify-between text-xs mb-2">
<span className="text-slate-500">Signal:</span>
<span className="text-slate-200 font-mono">Tx/Rx</span>
</div>

<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
<div className="h-full w-full animate-flow flow-line zone-line opacity-10" id="line-ev"></div>
</div>
<div className="flex justify-between items-center">
<span className="text-[10px] text-slate-500 font-mono flex items-center gap-1" id="status-ev">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> SLEEP
                                </span>
<span className="text-xs font-bold text-slate-500" id="kw-ev">0 W</span>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-800 pt-6 mt-8">
<div className="flex justify-between items-center mb-4">
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Simulated Backend Console</h4>
<span className="text-[10px] text-slate-600 font-mono">UART://ttyUSB0:115200</span>
</div>
<div className="bg-slate-950 rounded-lg p-4 font-mono text-[10px] text-emerald-500/80 border border-slate-800 overflow-hidden relative">
<div className="absolute top-2 right-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-emerald-500/20"></div>
</div>
<div className="space-y-1 h-24 overflow-y-auto" id="console-logs">
<div>&gt; Initializing BMS Logic...</div>
<div>&gt; ADC Connected. Reference Voltage: 3.3V</div>
<div>&gt; Calibrating shunt resistor...</div>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
