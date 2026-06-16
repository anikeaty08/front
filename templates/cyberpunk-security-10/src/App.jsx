import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Clock
        function updateClock() {
            const now = new Date();
            const timeString = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
            document.getElementById('clock').innerText = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 bg-slate-950">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'perspective(1000px) rotateX(20deg) scale(1.5)'}}></div>

<svg className="w-full h-full absolute inset-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<defs>
<radialgradient cx="50%" cy="50%" fx="50%" fy="50%" id="nodeGradient" r="50%">
<stop offset="0%" style={{stopColor: '#f97316', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#020617', stopOpacity: '0'}}></stop>
</radialgradient>
<radialgradient cx="50%" cy="50%" fx="50%" fy="50%" id="threatGradient" r="50%">
<stop offset="0%" style={{stopColor: '#ef4444', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#020617', stopOpacity: '0'}}></stop>
</radialgradient>
</defs>

<g className="stroke-slate-700/50" strokeWidth="1">
<line x1="20%" x2="50%" y1="20%" y2="50%"></line>
<line x1="80%" x2="50%" y1="30%" y2="50%"></line>
<line x1="20%" x2="50%" y1="80%" y2="50%"></line>
<line x1="80%" x2="50%" y1="80%" y2="50%"></line>
<line x1="10%" x2="20%" y1="50%" y2="20%"></line>
<line x1="90%" x2="80%" y1="50%" y2="80%"></line>
</g>

<g fill="none" strokeWidth="2">

<path className="pulse-line opacity-50" d="M 20% 20% L 50% 50%" stroke="#0ea5e9"></path>
<path className="pulse-line opacity-50" d="M 80% 30% L 50% 50%" stroke="#0ea5e9" style={{animationDelay: '1s'}}></path>
<path className="pulse-line opacity-50" d="M 20% 80% L 50% 50%" stroke="#0ea5e9" style={{animationDelay: '0.5s'}}></path>

<path className="pulse-line-fast shadow-[0_0_10px_#ef4444]" d="M 90% 90% L 50% 50%" stroke="#ef4444" strokeWidth="3"></path>
</g>

<circle className="animate-pulse" cx="20%" cy="20%" fill="#f97316" r="3"></circle>
<circle className="animate-pulse" cx="80%" cy="30%" fill="#f97316" r="3"></circle>
<circle className="animate-pulse" cx="20%" cy="80%" fill="#f97316" r="3"></circle>
<circle cx="50%" cy="50%" fill="#fff" r="6" stroke="#f97316" strokeWidth="2">
<animate attributename="r" dur="4s" repeatcount="indefinite" values="6;8;6"></animate>
</circle>

<g transform="translate(90%, 90%)"> 
<circle cx="0" cy="0" fill="#ef4444" r="8"></circle>
<circle className="opacity-50" cx="0" cy="0" fill="none" r="15" stroke="#ef4444" strokeWidth="1"></circle>
</g>
</svg>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 pointer-events-none">
<div className="ripple-effect w-full h-full"></div>
<div className="ripple-effect w-full h-full" style={{animationDelay: '0.5s'}}></div>
</div>

<div className="absolute right-[10%] bottom-[10%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 pointer-events-none">
<div className="ripple-effect w-full h-full" style={{animationDuration: '1s', borderColor: '#ef4444'}}></div>
</div>
</div>

<div className="absolute inset-0 z-10 scanlines opacity-30"></div>

<div className="relative z-20 h-screen w-full flex flex-col p-4 md:p-6 gap-4">

<header className="flex justify-between items-center cyber-border px-6 py-3 h-16 shrink-0 corner-br">
<div className="flex items-center gap-4">
<div className="relative w-8 h-8 flex items-center justify-center border border-orange-500/50 rounded-sm bg-orange-900/10">
<iconify-icon className="text-orange-500 text-lg" icon="lucide:shield-alert"></iconify-icon>
</div>
<div>
<h1 className="text-lg font-bold tracking-tight text-white uppercase leading-none">Net<span className="text-orange-500">Sentinel</span></h1>
<span className="text-[10px] text-slate-500 tracking-widest uppercase">Situational Awareness System v4.0</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8 text-xs font-mono">
<div className="flex items-center gap-2 text-red-500 animate-pulse">
<iconify-icon icon="lucide:siren" width="16"></iconify-icon>
<span className="tracking-widest font-bold">INTRUSION DETECTED</span>
</div>
<div className="w-px h-4 bg-slate-700"></div>
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="lucide:activity" width="16"></iconify-icon>
<span>NET LOAD: 89%</span>
</div>
<div className="w-px h-4 bg-slate-700"></div>
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="lucide:clock" width="16"></iconify-icon>
<span id="clock">00:00:00 UTC</span>
</div>
</div>

<div className="flex gap-2">
<button className="h-8 w-8 flex items-center justify-center border border-slate-700 bg-slate-900/50 hover:bg-orange-500/10 hover:border-orange-500/50 transition-colors text-slate-400 hover:text-orange-400">
<iconify-icon icon="lucide:settings"></iconify-icon>
</button>
<button className="h-8 w-8 flex items-center justify-center border border-slate-700 bg-slate-900/50 hover:bg-red-500/10 hover:border-red-500/50 transition-colors text-slate-400 hover:text-red-400">
<iconify-icon icon="lucide:power"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 grid grid-cols-12 gap-4 min-h-0">

<aside className="col-span-12 md:col-span-3 flex flex-col gap-4">

<div className="cyber-border flex-1 p-4 flex flex-col items-center justify-center relative bg-black/40 corner-br">
<div className="absolute top-2 left-3 text-xs text-orange-500 font-semibold tracking-wider flex items-center gap-2">
<iconify-icon icon="lucide:radar"></iconify-icon>
                        ACTIVE SCAN
                    </div>
<div className="relative w-48 h-48 rounded-full border border-slate-700/50 flex items-center justify-center overflow-hidden bg-slate-900/20">

<div className="absolute inset-0 border border-slate-800 rounded-full scale-75"></div>
<div className="absolute inset-0 border border-slate-800 rounded-full scale-50"></div>
<div className="absolute inset-0 border border-slate-800 rounded-full scale-25"></div>
<div className="absolute w-full h-[1px] bg-slate-800 top-1/2"></div>
<div className="absolute h-full w-[1px] bg-slate-800 left-1/2"></div>

<div className="absolute inset-0 radar-sweep"></div>

<div className="absolute top-[30%] left-[60%] w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
<div className="absolute top-[70%] left-[30%] w-1.5 h-1.5 bg-blue-500 rounded-full"></div>

<div className="absolute top-[20%] right-[20%] w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
</div>
<div className="w-full mt-4 flex justify-between text-[10px] text-slate-500 font-mono">
<span>RNG: 500KM</span>
<span className="text-orange-400">TARGETS: 3</span>
</div>
</div>

<div className="cyber-border h-64 overflow-hidden flex flex-col corner-br">
<div className="px-4 py-2 border-b border-slate-800 bg-slate-900/50 text-xs font-semibold text-slate-300 flex justify-between items-center">
<span>CONNECTED NODES</span>
<span className="text-[10px] px-1.5 py-0.5 bg-slate-800 rounded text-slate-400">14/20</span>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">

<div className="flex items-center justify-between p-2 hover:bg-slate-800/50 cursor-pointer group rounded-sm border border-transparent hover:border-slate-700 transition-all">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></div>
<div className="flex flex-col">
<span className="text-xs text-slate-300 font-medium group-hover:text-white">SRV-ALPHA</span>
<span className="text-[10px] text-slate-600">192.168.1.10</span>
</div>
</div>
<span className="text-[10px] text-emerald-500">SECURE</span>
</div>
<div className="flex items-center justify-between p-2 bg-red-950/20 border border-red-900/30 cursor-pointer group rounded-sm transition-all animate-pulse">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></div>
<div className="flex flex-col">
<span className="text-xs text-red-300 font-medium">GW-OMEGA</span>
<span className="text-[10px] text-red-400/70">10.0.99.5</span>
</div>
</div>
<span className="text-[10px] text-red-500 font-bold">BREACH</span>
</div>
<div className="flex items-center justify-between p-2 hover:bg-slate-800/50 cursor-pointer group rounded-sm border border-transparent hover:border-slate-700 transition-all">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></div>
<div className="flex flex-col">
<span className="text-xs text-slate-300 font-medium group-hover:text-white">DB-SHARD-01</span>
<span className="text-[10px] text-slate-600">192.168.1.15</span>
</div>
</div>
<span className="text-[10px] text-emerald-500">SECURE</span>
</div>
<div className="flex items-center justify-between p-2 hover:bg-slate-800/50 cursor-pointer group rounded-sm border border-transparent hover:border-slate-700 transition-all">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]"></div>
<div className="flex flex-col">
<span className="text-xs text-slate-300 font-medium group-hover:text-white">PROXY-04</span>
<span className="text-[10px] text-slate-600">172.16.0.4</span>
</div>
</div>
<span className="text-[10px] text-orange-500">WARN</span>
</div>
</div>
</div>
</aside>

<section className="col-span-12 md:col-span-6 flex flex-col justify-end pointer-events-none pb-4 relative">

<div className="absolute top-4 left-4 p-2 cyber-border bg-black/60 pointer-events-auto">
<div className="text-[10px] text-orange-400 mb-1">NETWORK TOPOLOGY</div>
<div className="h-1 w-12 bg-orange-500/50"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-orange-500/20 rounded-full flex items-center justify-center">
<div className="w-44 h-44 border-x border-orange-500/10 rounded-full animate-spin duration-[10s]"></div>
</div>

<div className="absolute bottom-[20%] right-[10%] cyber-border threat-glow bg-black/80 p-4 w-64 pointer-events-auto">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-red-500 tracking-wider flex items-center gap-2">
<iconify-icon icon="lucide:alert-triangle"></iconify-icon> THREAT DETECTED
                        </span>
<span className="text-[10px] text-red-400/50">ID: #9902</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] text-slate-400">
<span>TYPE:</span>
<span className="text-white">DDoS / UDP FLOOD</span>
</div>
<div className="flex justify-between text-[10px] text-slate-400">
<span>ORIGIN:</span>
<span className="text-white">UNKNOWN PROXY</span>
</div>
<div className="flex justify-between text-[10px] text-slate-400">
<span>SEVERITY:</span>
<div className="flex gap-0.5">
<div className="w-1 h-2 bg-red-500"></div>
<div className="w-1 h-2 bg-red-500"></div>
<div className="w-1 h-2 bg-red-500"></div>
<div className="w-1 h-2 bg-red-500"></div>
<div className="w-1 h-2 bg-red-900"></div>
</div>
</div>
<div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[80%] animate-pulse"></div>
</div>
<button className="w-full mt-1 bg-red-500/10 hover:bg-red-500/20 border border-red-500/50 text-red-500 text-[10px] py-1 transition-colors uppercase tracking-widest">
                            Isolate Node
                        </button>
</div>
</div>

<div className="cyber-border bg-black/80 h-32 p-3 font-mono text-[10px] overflow-hidden pointer-events-auto corner-br flex flex-col">
<div className="text-slate-500 border-b border-slate-800 pb-1 mb-1 flex justify-between">
<span>SYSTEM LOGS</span>
<span className="text-green-500">LIVE</span>
</div>
<div className="flex-1 overflow-hidden relative">
<div className="absolute bottom-0 left-0 w-full space-y-1">
<div className="text-slate-500"><span className="text-blue-500">14:20:01</span> [INFO] Handshake protocols initiated on port 443</div>
<div className="text-slate-500"><span className="text-blue-500">14:20:05</span> [INFO] Packet verification successful. Latency: 12ms</div>
<div className="text-orange-400"><span className="text-orange-600">14:20:12</span> [WARN] High traffic volume detected on Node 4</div>
<div className="text-red-500 text-shadow"><span className="text-red-700">14:20:45</span> [CRIT] UNAUTHORIZED ACCESS ATTEMPT - GW-OMEGA</div>
<div className="text-slate-500 animate-pulse">_</div>
</div>
</div>
</div>
</section>

<aside className="col-span-12 md:col-span-3 flex flex-col gap-4">

<div className="cyber-border p-4 corner-br">
<h3 className="text-xs font-semibold text-slate-400 mb-4 flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="lucide:cpu"></iconify-icon> SYSTEM LOAD
                    </h3>
<div className="space-y-4">

<div>
<div className="flex justify-between text-[10px] mb-1">
<span className="text-slate-500">CPU CORE 01</span>
<span className="text-orange-400">92%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-sm overflow-hidden">
<div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 w-[92%] relative">
<div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
</div>
</div>
</div>

<div>
<div className="flex justify-between text-[10px] mb-1">
<span className="text-slate-500">MEMORY ALLOC</span>
<span className="text-blue-400">45%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-sm overflow-hidden">
<div className="h-full bg-blue-500 w-[45%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-[10px] mb-1">
<span className="text-slate-500">BANDWIDTH</span>
<span className="text-red-400 animate-pulse">OVERLOAD</span>
</div>
<div className="flex gap-0.5 h-3 items-end">
<div className="w-1 bg-slate-700 h-[20%]"></div>
<div className="w-1 bg-slate-700 h-[40%]"></div>
<div className="w-1 bg-slate-700 h-[30%]"></div>
<div className="w-1 bg-slate-700 h-[60%]"></div>
<div className="w-1 bg-orange-500 h-[80%]"></div>
<div className="w-1 bg-orange-500 h-[70%]"></div>
<div className="w-1 bg-red-500 h-[90%]"></div>
<div className="w-1 bg-red-500 h-[100%] animate-pulse"></div>
<div className="w-1 bg-red-500 h-[95%]"></div>
<div className="w-1 bg-red-500 h-[85%]"></div>
</div>
</div>
</div>
</div>

<div className="cyber-border flex-1 p-4 flex flex-col corner-br">
<h3 className="text-xs font-semibold text-slate-400 mb-2 flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="lucide:network"></iconify-icon> VECTOR ANALYSIS
                    </h3>
<div className="flex-1 border border-slate-800 bg-slate-900/40 relative overflow-hidden flex items-end justify-center gap-1 p-2">

<div className="w-2 bg-slate-800 h-[20%]"></div>
<div className="w-2 bg-slate-800 h-[35%]"></div>
<div className="w-2 bg-slate-800 h-[50%]"></div>
<div className="w-2 bg-slate-800 h-[30%]"></div>
<div className="w-2 bg-blue-900 h-[45%]"></div>
<div className="w-2 bg-blue-800 h-[60%]"></div>
<div className="w-2 bg-orange-900 h-[55%]"></div>
<div className="w-2 bg-orange-800 h-[75%]"></div>
<div className="w-2 bg-red-900 h-[85%]"></div>
<div className="w-2 bg-red-600 h-[95%] shadow-[0_0_10px_#ef4444]"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">
<path className="opacity-50" d="M0 100 L 20 80 L 40 70 L 60 90 L 80 50 L 100 40 L 120 60 L 140 20 L 160 5 L 180 30 L 200 100" fill="none" stroke="#f97316" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-2 gap-2">
<button className="cyber-border p-2 flex flex-col items-center justify-center gap-1 hover:bg-orange-500/20 transition-all group">
<iconify-icon className="text-slate-400 group-hover:text-orange-500" icon="lucide:lock"></iconify-icon>
<span className="text-[9px] text-slate-500 group-hover:text-white">LOCKDOWN</span>
</button>
<button className="cyber-border p-2 flex flex-col items-center justify-center gap-1 hover:bg-blue-500/20 transition-all group">
<iconify-icon className="text-slate-400 group-hover:text-blue-500" icon="lucide:refresh-cw"></iconify-icon>
<span className="text-[9px] text-slate-500 group-hover:text-white">REROUTE</span>
</button>
</div>
</aside>
</main>

<footer className="h-6 flex items-center justify-between text-[10px] text-slate-600 uppercase tracking-widest px-2">
<div>System Integrity: <span className="text-orange-500">Compromised</span></div>
<div className="flex gap-4">
<span>Encryption: AES-256</span>
<span>Node Sync: <span className="animate-pulse">Active</span></span>
</div>
</footer>
</div>


    </>
  );
}
