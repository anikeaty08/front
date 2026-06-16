import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Real-time Data Simulation ---

        function updateRandomNumber(id, base, variance, fixed = 2) {
            const el = document.getElementById(id);
            if(el) {
                let current = parseFloat(el.innerText.replace(/,/g, ''));
                let change = (Math.random() - 0.5) * variance;
                let newVal = base + change; // Keep around base
                // Or purely jitter current
                let jittered = current + (Math.random() - 0.5) * (variance/5);
                el.innerText = jittered.toFixed(fixed);
            }
        }

        // Clock
        setInterval(() => {
            const now = new Date();
            document.getElementById('mission-clock').innerText = now.toISOString().split('T')[1].split('.')[0];
        }, 1000);

        // Telemetry Loop
        setInterval(() => {
            // Jitter velocity
            updateRandomNumber('velocity-top', 24390, 5, 0); 
            
            // Jitter Orientation
            updateRandomNumber('pitch-val', 12.4, 0.2);
            updateRandomNumber('yaw-val', 184.2, 0.5);
            updateRandomNumber('roll-val', 0.02, 0.05);

            // Jitter Coordinates
            updateRandomNumber('coord-x', 849, 0.05, 3);
            updateRandomNumber('coord-y', -29, 0.05, 3);
            updateRandomNumber('coord-z', 104, 0.05, 3);

        }, 500); // Fast updates for smooth technical feel

        // Terminal Log Simulator
        const logs = [
            "Deep space telemetry sync...",
            "Packet lost: Sector 4 [Retrying]",
            "Life support cycling O2...",
            "Incoming transmission masked.",
            "Debris avoidance system active.",
            "Warp drive coils pre-heating: 2%",
            "Analysing spectral anomaly...",
            "Database fragmentation check: OK",
            "Background radiation nominal."
        ];
        
        const terminal = document.getElementById('terminal-logs');
        
        setInterval(() => {
            const randomLog = logs[Math.floor(Math.random() * logs.length)];
            const time = new Date().toISOString().split('T')[1].split('.')[0];
            
            const div = document.createElement('div');
            // Randomly color errors or warnings
            if(randomLog.includes("lost") || randomLog.includes("masked")) {
                div.className = "text-amber-400/80";
            } else {
                div.className = "text-slate-400";
            }
            
            div.innerHTML = `<span class="text-slate-600">[${time}]</span> > ${randomLog}`;
            
            terminal.appendChild(div);
            
            // Auto scroll
            terminal.scrollTop = terminal.scrollHeight;
            
            // Keep DOM size manageable
            if(terminal.children.length > 20) {
                terminal.removeChild(terminal.firstChild);
            }
        }, 3500);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#020408]/80 backdrop-blur-md z-50">
<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold tracking-tight">
                    OS
                </div>
<div>
<h1 className="text-sm font-medium text-slate-200 tracking-tight leading-none">ORION SYNC</h1>
<span className="text-xs text-slate-500 font-mono tracking-wide">V.9.2.1 // DEEP_LINK</span>
</div>
</div>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<div className="flex items-center gap-2 text-xs font-mono">
<span className="text-emerald-500/80">●</span>
<span className="text-emerald-500 tracking-wider">SYSTEM ONLINE</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8 font-mono text-xs text-slate-500">
<div className="flex gap-2">
<span>T-MINUS</span>
<span className="text-slate-300" id="mission-clock">00:00:00</span>
</div>
<div className="flex gap-2">
<span>SECTOR</span>
<span className="text-cyan-400">ZF-99</span>
</div>
<div className="flex gap-2">
<span>VELOCITY</span>
<span className="text-slate-300 tabular-nums" id="velocity-top">24,392</span> <span className="text-[10px]">m/s</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-white/5 rounded-full transition-colors relative group">
<div className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-white/10">
<div className="text-right hidden sm:block">
<div className="text-sm text-slate-200 font-medium">Cpt. Vance</div>
<div className="text-xs text-slate-500">Command Deck</div>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 border border-white/10"></div>
</div>
</div>
</header>
<main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 lg:p-6 overflow-hidden">

<aside className="hidden lg:flex lg:col-span-1 flex-col items-center gap-6 py-4 glass-panel rounded-xl">
<nav className="flex flex-col gap-4 w-full px-2">
<button className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex justify-center group relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-cyan-500 rounded-r opacity-100 transition-all"></div>
<iconify-icon icon="solar:radar-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-all flex justify-center group relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-white rounded-r opacity-0 group-hover:opacity-100 transition-all"></div>
<iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-all flex justify-center group relative">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-all flex justify-center group relative">
<iconify-icon icon="solar:map-point-wave-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-all flex justify-center group relative">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>
<div className="mt-auto pb-4 flex flex-col gap-4">
<div className="w-8 h-px bg-white/10 mx-auto"></div>
<button className="text-rose-400 hover:text-rose-300 transition-colors">
<iconify-icon icon="solar:power-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</aside>

<section className="lg:col-span-8 grid grid-rows-6 gap-4 h-full">

<div className="row-span-1 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass-panel rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all"></div>
<div className="flex justify-between items-start">
<span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Hull Integrity</span>
<iconify-icon className="text-cyan-400" icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-2xl font-light text-slate-100 tabular-nums tracking-tight">98.4<span className="text-sm text-slate-500 ml-1">%</span></div>
<div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-cyan-400 w-[98.4%] shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
</div>
</div>
<div className="glass-panel rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all"></div>
<div className="flex justify-between items-start">
<span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Fuel Cells</span>
<iconify-icon className="text-purple-400" icon="solar:atom-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-2xl font-light text-slate-100 tabular-nums tracking-tight">42<span className="text-sm text-slate-500 ml-1">DAYS</span></div>
<div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-purple-400 w-[65%]"></div>
</div>
</div>
</div>
<div className="glass-panel rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 blur-3xl rounded-full group-hover:bg-emerald-500/20 transition-all"></div>
<div className="flex justify-between items-start">
<span className="text-xs font-mono text-slate-500 uppercase tracking-wider">O2 Scrubbers</span>
<iconify-icon className="text-emerald-400" icon="solar:wind-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-2xl font-light text-slate-100 tabular-nums tracking-tight">Normal</div>
<div className="flex gap-1 mt-2">
<div className="h-1 flex-1 bg-emerald-400 rounded-full"></div>
<div className="h-1 flex-1 bg-emerald-400 rounded-full"></div>
<div className="h-1 flex-1 bg-emerald-400 rounded-full"></div>
<div className="h-1 flex-1 bg-emerald-400/30 rounded-full"></div>
</div>
</div>
</div>
<div className="glass-panel rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 blur-3xl rounded-full group-hover:bg-amber-500/20 transition-all"></div>
<div className="flex justify-between items-start">
<span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Proximity</span>
<iconify-icon className="text-amber-400" icon="solar:danger-triangle-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-2xl font-light text-slate-100 tabular-nums tracking-tight">0.04<span className="text-sm text-slate-500 ml-1">AU</span></div>
<div className="text-[10px] text-amber-500 mt-1 font-mono tracking-wide">ASTEROID FIELD DETECTED</div>
</div>
</div>
</div>

<div className="row-span-4 glass-panel rounded-xl relative overflow-hidden flex flex-col">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>

<div className="absolute top-4 left-4 z-10">
<div className="text-xs font-mono text-cyan-500 mb-1">OPTICAL ARRAY: ACTIVE</div>
<div className="text-[10px] text-slate-600 font-mono">RES: 4096x2160 // HDR</div>
</div>
<div className="absolute bottom-4 left-4 z-10 flex gap-4 font-mono text-xs">
<div className="text-slate-400">PITCH: <span className="text-cyan-400 tabular-nums" id="pitch-val">12.4</span>°</div>
<div className="text-slate-400">YAW: <span className="text-cyan-400 tabular-nums" id="yaw-val">184.2</span>°</div>
<div className="text-slate-400">ROLL: <span className="text-cyan-400 tabular-nums" id="roll-val">0.02</span>°</div>
</div>

<div className="flex-1 flex items-center justify-center relative">

<div className="absolute w-[500px] h-[500px] border border-slate-800 rounded-full opacity-50"></div>
<div className="absolute w-[350px] h-[350px] border border-slate-700/50 rounded-full opacity-60"></div>
<div className="absolute w-[200px] h-[200px] border border-cyan-900/50 rounded-full"></div>

<div className="absolute w-[350px] h-[350px] rounded-full radar-sweep z-0"></div>

<div className="relative z-10 flex items-center justify-center">
<div className="w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
<div className="absolute w-12 h-12 border border-cyan-500/30 rounded-full animate-ping opacity-20"></div>
<div className="absolute w-64 h-64 border border-dashed border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
</div>

<div className="absolute top-1/4 right-1/4 flex flex-col items-center gap-1 animate-pulse">
<div className="w-2 h-2 border border-rose-500 bg-rose-500/20"></div>
<div className="text-[10px] font-mono text-rose-500">UNK-SIG</div>
</div>
<div className="absolute bottom-1/3 left-1/4 flex flex-col items-center gap-1">
<div className="w-2 h-2 bg-slate-500 rounded-full"></div>
<div className="text-[10px] font-mono text-slate-500">DEBRIS</div>
</div>
</div>
</div>

<div className="row-span-1 glass-panel rounded-xl p-4 grid grid-cols-12 gap-4 items-center">
<div className="col-span-3 flex flex-col justify-center border-r border-white/5 pr-4">
<span className="text-xs font-mono text-slate-500 mb-2">ENERGY DISTRIBUTION</span>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] w-8 text-slate-400">ENG</span>
<div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 w-[80%] rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] w-8 text-slate-400">WPN</span>
<div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 w-[10%] rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] w-8 text-slate-400">SHD</span>
<div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[60%] rounded-full"></div>
</div>
</div>
</div>
<div className="col-span-9 flex items-center justify-between pl-2">

<div className="flex items-end gap-1 h-10 w-full opacity-60">
<div className="w-1 bg-cyan-500/50 h-[40%] animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500/50 h-[70%] animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500/50 h-[50%] animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500/50 h-[80%] animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500/50 h-[30%] animate-[pulse_1.1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500/50 h-[60%] animate-[pulse_0.9s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500/50 h-[90%] animate-[pulse_1.3s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500/50 h-[45%] animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500/50 h-[65%] animate-[pulse_1.4s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500/50 h-[35%] animate-[pulse_0.7s_ease-in-out_infinite]"></div>
<div className="w-1 bg-cyan-500/50 h-[75%] animate-[pulse_1.2s_ease-in-out_infinite]"></div>

<div className="w-1 bg-cyan-500/20 h-[50%]"></div>
<div className="w-1 bg-cyan-500/10 h-[40%]"></div>
</div>
</div>
</div>
</section>

<aside className="lg:col-span-3 flex flex-col gap-4 h-full">

<div className="glass-panel rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xs font-semibold text-slate-200 uppercase tracking-wide">Nav Coordinates</h2>
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
</div>
<div className="grid grid-cols-1 gap-3 font-mono text-sm">
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-slate-500">X-AXIS</span>
<span className="text-cyan-400 tabular-nums" id="coord-x">849.201</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-2">
<span className="text-slate-500">Y-AXIS</span>
<span className="text-cyan-400 tabular-nums" id="coord-y">-29.112</span>
</div>
<div className="flex justify-between items-center">
<span className="text-slate-500">Z-AXIS</span>
<span className="text-cyan-400 tabular-nums" id="coord-z">104.559</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-5">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-amber-400" icon="solar:sun-2-linear"></iconify-icon>
<h2 className="text-xs font-semibold text-slate-200 uppercase tracking-wide">External Env</h2>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-500">Radiation</span>
<span className="text-rose-400 font-mono">2.4 mSv</span>
</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full">
<div className="w-[30%] bg-rose-500 h-full rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-500">Temperature</span>
<span className="text-cyan-400 font-mono">-240°C</span>
</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full">
<div className="w-[10%] bg-cyan-500 h-full rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex-1 flex flex-col min-h-0">
<div className="flex items-center justify-between mb-2 border-b border-white/5 pb-2">
<h2 className="text-xs font-semibold text-slate-200 uppercase tracking-wide">System Log</h2>
<iconify-icon className="text-slate-500" icon="solar:history-linear"></iconify-icon>
</div>
<div className="flex-1 overflow-y-auto font-mono text-[11px] space-y-2 pr-1" id="terminal-logs">
<div className="text-slate-400"><span className="text-slate-600">[14:02:01]</span> &gt; Scan initiated...</div>
<div className="text-emerald-400/80"><span className="text-slate-600">[14:02:04]</span> &gt; Handshake verified.</div>
<div className="text-slate-400"><span className="text-slate-600">[14:02:10]</span> &gt; Updating stellar charts...</div>
</div>

<div className="mt-2 flex items-center gap-2 border-t border-white/5 pt-2">
<span className="text-cyan-500 text-xs">➜</span>
<input className="bg-transparent border-none text-xs font-mono text-slate-500 focus:outline-none w-full cursor-not-allowed" disabled="" placeholder="Processing..." type="text"/>
</div>
</div>
</aside>
</main>


    </>
  );
}
