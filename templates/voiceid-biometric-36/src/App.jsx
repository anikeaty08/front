import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Dashboard Simulation Logic
        const waveform = document.getElementById('waveform');
        const btn = document.getElementById('simulate-btn');
        const statusOverlay = document.getElementById('status-overlay');
        const confidenceDisplay = document.getElementById('confidence-score');
        const latencyDisplay = document.getElementById('latency-display');
        const tableBody = document.getElementById('activity-table-body');

        // Generate Static Audio Bars
        const barCount = 40;
        for (let i = 0; i < barCount; i++) {
            const bar = document.createElement('div');
            bar.className = 'w-1 bg-purple-500/40 rounded-full audio-bar';
            // Random initial height between 10% and 40%
            const h = Math.floor(Math.random() * 30) + 10;
            bar.style.height = `${h}%`;
            bar.style.opacity = '0.3';
            waveform.appendChild(bar);
        }

        const bars = document.querySelectorAll('.audio-bar');

        btn.addEventListener('click', () => {
            if(btn.disabled) return;
            
            // 1. UI State: Active
            btn.disabled = true;
            btn.innerHTML = `<i data-lucide="loader" class="w-3.5 h-3.5 animate-spin"></i> Processing...`;
            lucide.createIcons();
            
            // 2. Animate Bars
            bars.forEach((bar, index) => {
                bar.style.animationDelay = `${index * 0.05}s`; // Stagger
                bar.classList.add('active');
                bar.style.backgroundColor = '#a855f7'; // Active purple
            });

            statusOverlay.classList.remove('opacity-0');
            
            // 3. Simulate Numbers
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 5;
                if (progress > 98) progress = 98 + Math.random();
                confidenceDisplay.innerText = progress.toFixed(2);
            }, 50);

            // 4. Finish Simulation after 2s
            setTimeout(() => {
                clearInterval(interval);
                
                // Stop animation
                bars.forEach(bar => {
                    bar.classList.remove('active');
                    bar.style.height = `${Math.floor(Math.random() * 30) + 10}%`;
                    bar.style.backgroundColor = '';
                });

                // Generate random success/fail
                const isSuccess = Math.random() > 0.2;
                const score = isSuccess ? (90 + Math.random() * 9).toFixed(1) : (10 + Math.random() * 40).toFixed(1);
                const latency = Math.floor(Math.random() * 100) + 100;

                // Update Latency
                latencyDisplay.innerText = `${latency} ms`;

                // Add Row to Table
                const newRow = document.createElement('tr');
                newRow.className = 'new-row border-b border-white/5 text-slate-400 bg-purple-500/5';
                newRow.innerHTML = `
                    <td class="px-5 py-3.5">
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium ${isSuccess ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}">
                            ${isSuccess ? 'SUCCESS' : 'FAILED'}
                        </span>
                    </td>
                    <td class="px-5 py-3.5 font-mono text-slate-500">req_${Math.random().toString(36).substring(7)}</td>
                    <td class="px-5 py-3.5 text-slate-200 font-medium flex items-center gap-2">
                        <div class="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[9px] text-white">JD</div>
                        John Doe
                    </td>
                    <td class="px-5 py-3.5 font-mono ${isSuccess ? 'text-slate-400' : 'text-rose-400'}">${score}%</td>
                    <td class="px-5 py-3.5"><i data-lucide="mic-2" class="w-3 h-3 inline mr-1"></i> Voice</td>
                    <td class="px-5 py-3.5 text-right text-slate-500">Just now</td>
                `;
                
                // Insert at top
                tableBody.insertBefore(newRow, tableBody.firstChild);
                lucide.createIcons();

                // Reset Button
                btn.innerHTML = `<i data-lucide="mic" class="w-3.5 h-3.5"></i> Simulate Verification`;
                btn.disabled = false;
                lucide.createIcons();

                // Fade out overlay
                setTimeout(() => {
                    statusOverlay.classList.add('opacity-0');
                }, 2000);

            }, 1500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 flex-shrink-0 border-r border-white/5 bg-[#0B1121] flex flex-col">

<div className="h-14 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2 text-slate-100">
<div className="relative flex items-center justify-center w-6 h-6 bg-purple-500/10 rounded border border-purple-500/20">
<i className="w-3.5 h-3.5 text-purple-400" data-lucide="fingerprint"></i>
</div>
<span className="font-semibold text-sm tracking-tight">VOCI <span className="text-slate-500 font-normal">Console</span></span>
</div>
</div>

<div className="flex-1 overflow-y-auto py-6 px-3 space-y-0.5">
<div className="px-3 mb-2 text-[10px] font-medium uppercase tracking-wider text-slate-500">Platform</div>
<a className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-white bg-white/5 rounded-md border border-white/5 transition-colors" href="#">
<i className="w-4 h-4 text-purple-400" data-lucide="layout-grid"></i>
                Overview
            </a>
<a className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-slate-500 group-hover:text-slate-300" data-lucide="activity"></i>
                Live Monitor
            </a>
<a className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-slate-500 group-hover:text-slate-300" data-lucide="users"></i>
                Identities
            </a>
<a className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-slate-500 group-hover:text-slate-300" data-lucide="shield-alert"></i>
                Security Rules
            </a>
<div className="px-3 mt-8 mb-2 text-[10px] font-medium uppercase tracking-wider text-slate-500">Developers</div>
<a className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-slate-500 group-hover:text-slate-300" data-lucide="terminal-square"></i>
                API Keys
            </a>
<a className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-slate-500 group-hover:text-slate-300" data-lucide="book-open"></i>
                Documentation
            </a>
</div>

<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full hover:bg-white/[0.02] p-2 rounded-lg transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold border border-white/10">JD</div>
<div className="flex-1 text-left">
<p className="text-xs font-medium text-white">John Doe</p>
<p className="text-[10px] text-slate-500">Engineering Lead</p>
</div>
<i className="w-3 h-3 text-slate-600" data-lucide="chevrons-up-down"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#020617]">

<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-2 text-xs text-slate-500">
<span>Organization</span>
<span className="text-slate-700">/</span>
<span className="text-slate-200 font-medium">Project Alpha</span>
<span className="text-slate-700">/</span>
<span className="text-slate-200 font-medium">Dashboard</span>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-500 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
<button className="text-slate-500 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="help-circle"></i>
</button>
<div className="h-4 w-[1px] bg-white/10"></div>
<span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                    SYSTEM OPERATIONAL
                </span>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-white">Overview</h1>
<p className="text-sm text-slate-500 mt-1">Real-time biometric authentication metrics.</p>
</div>
<div className="flex items-center gap-2">

<button className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-md text-xs font-medium text-slate-300 transition-colors">
<span>Last 24 Hours</span>
<i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</button>
<button className="p-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-md transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)]">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass p-4 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div className="p-1.5 bg-white/5 rounded-md border border-white/5">
<i className="w-4 h-4 text-slate-400" data-lucide="check-circle-2"></i>
</div>
<span className="text-[10px] font-medium text-emerald-400 flex items-center gap-1 bg-emerald-400/10 px-1.5 py-0.5 rounded">
<i className="w-3 h-3" data-lucide="trending-up"></i> +12%
                            </span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">14,203</div>
<div className="text-xs text-slate-500 mt-1">Successful Verifications</div>
</div>

<div className="glass p-4 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div className="p-1.5 bg-white/5 rounded-md border border-white/5">
<i className="w-4 h-4 text-slate-400" data-lucide="users"></i>
</div>
<span className="text-[10px] font-medium text-slate-400 flex items-center gap-1 bg-white/5 px-1.5 py-0.5 rounded">
                                0%
                            </span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">8,492</div>
<div className="text-xs text-slate-500 mt-1">Active Identities</div>
</div>

<div className="glass p-4 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div className="p-1.5 bg-white/5 rounded-md border border-white/5">
<i className="w-4 h-4 text-slate-400" data-lucide="alert-octagon"></i>
</div>
<span className="text-[10px] font-medium text-rose-400 flex items-center gap-1 bg-rose-400/10 px-1.5 py-0.5 rounded">
<i className="w-3 h-3" data-lucide="trending-down"></i> -2%
                            </span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">0.4%</div>
<div className="text-xs text-slate-500 mt-1">Spoofing Attempts</div>
</div>

<div className="glass p-4 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div className="p-1.5 bg-white/5 rounded-md border border-white/5">
<i className="w-4 h-4 text-slate-400" data-lucide="zap"></i>
</div>
<span className="text-[10px] font-medium text-emerald-400 flex items-center gap-1 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                                Optimal
                            </span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">142ms</div>
<div className="text-xs text-slate-500 mt-1">Avg. Response Time</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass rounded-xl overflow-hidden flex flex-col">
<div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
<div className="flex items-center gap-3">
<h2 className="text-sm font-medium text-white">Live Biometric Engine</h2>
<div className="h-3 w-[1px] bg-white/10"></div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span className="text-[10px] font-mono text-purple-300 uppercase">Listening</span>
</div>
</div>

<button className="group flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium rounded border border-purple-400/20 shadow-lg shadow-purple-900/20 transition-all active:scale-95" id="simulate-btn">
<i className="w-3.5 h-3.5 group-hover:animate-bounce" data-lucide="mic"></i>
                                Simulate Verification
                            </button>
</div>

<div className="relative h-64 flex items-center justify-center bg-[#050914] overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

<div className="absolute top-4 right-4 flex flex-col items-end gap-1 transition-opacity opacity-0" id="status-overlay">
<div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Matching Confidence</div>
<div className="text-2xl font-mono font-bold text-white tracking-tighter"><span id="confidence-score">0.00</span>%</div>
</div>

<div className="flex items-center justify-center gap-1 h-32 w-full z-10 px-10" id="waveform">

</div>

<div className="absolute w-full h-[1px] bg-purple-500/20 top-1/2 z-0"></div>
</div>

<div className="grid grid-cols-3 divide-x divide-white/5 border-t border-white/5 bg-white/[0.01]">
<div className="p-4 text-center">
<div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Sample Rate</div>
<div className="text-sm font-mono text-slate-300">48 kHz</div>
</div>
<div className="p-4 text-center">
<div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Channel</div>
<div className="text-sm font-mono text-slate-300">Mono / 16-bit</div>
</div>
<div className="p-4 text-center">
<div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Latency</div>
<div className="text-sm font-mono text-emerald-400" id="latency-display">-- ms</div>
</div>
</div>
</div>

<div className="glass rounded-xl p-5 flex flex-col h-full">
<h2 className="text-sm font-medium text-white mb-6">API Usage</h2>

<div className="relative w-32 h-32 mx-auto mb-8">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-purple-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="75, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-bold text-white">75%</span>
<span className="text-[9px] text-slate-500 uppercase">Limit</span>
</div>
</div>
<div className="space-y-4 flex-1">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-slate-400">Verification Calls</span>
<span className="text-white font-medium">14,203 / 20k</span>
</div>
<div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[75%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-slate-400">Training Hours</span>
<span className="text-white font-medium">12 / 50</span>
</div>
<div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[24%] rounded-full"></div>
</div>
</div>
</div>
<button className="mt-6 w-full py-2 text-xs font-medium text-slate-300 hover:text-white border border-white/10 rounded hover:bg-white/5 transition-colors">
                            Upgrade Plan
                        </button>
</div>
</div>

<div className="glass rounded-xl overflow-hidden">
<div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
<h2 className="text-sm font-medium text-white">Recent Activity</h2>
<button className="text-xs text-purple-400 hover:text-purple-300 font-medium">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 text-[10px] uppercase tracking-wider text-slate-500 font-medium bg-white/[0.01]">
<th className="px-5 py-3">Status</th>
<th className="px-5 py-3">Request ID</th>
<th className="px-5 py-3">Identity</th>
<th className="px-5 py-3">Score</th>
<th className="px-5 py-3">Method</th>
<th className="px-5 py-3 text-right">Time</th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-white/5 text-slate-400" id="activity-table-body">

<tr>
<td className="px-5 py-3.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                            SUCCESS
                                        </span>
</td>
<td className="px-5 py-3.5 font-mono text-slate-500">req_8f92...a1</td>
<td className="px-5 py-3.5 text-slate-200 font-medium flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[9px] text-white">AK</div>
                                        Alice K.
                                    </td>
<td className="px-5 py-3.5 font-mono">99.2%</td>
<td className="px-5 py-3.5"><i className="w-3 h-3 inline mr-1" data-lucide="mic-2"></i> Voice</td>
<td className="px-5 py-3.5 text-right text-slate-500">2 min ago</td>
</tr>
<tr>
<td className="px-5 py-3.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                            SUCCESS
                                        </span>
</td>
<td className="px-5 py-3.5 font-mono text-slate-500">req_7a11...b2</td>
<td className="px-5 py-3.5 text-slate-200 font-medium flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[9px] text-white">MS</div>
                                        Marcus S.
                                    </td>
<td className="px-5 py-3.5 font-mono">98.7%</td>
<td className="px-5 py-3.5"><i className="w-3 h-3 inline mr-1" data-lucide="mic-2"></i> Voice</td>
<td className="px-5 py-3.5 text-right text-slate-500">5 min ago</td>
</tr>
<tr>
<td className="px-5 py-3.5">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                            FAILED
                                        </span>
</td>
<td className="px-5 py-3.5 font-mono text-slate-500">req_1c44...z9</td>
<td className="px-5 py-3.5 text-slate-200 font-medium flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[9px] text-white">UN</div>
                                        Unknown
                                    </td>
<td className="px-5 py-3.5 font-mono text-rose-400">12.4%</td>
<td className="px-5 py-3.5"><i className="w-3 h-3 inline mr-1" data-lucide="smartphone"></i> Mobile</td>
<td className="px-5 py-3.5 text-right text-slate-500">12 min ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-600">
<div>© 2024 VoiceID Inc. System v2.4.0</div>
<div className="flex gap-4">
<a className="hover:text-slate-400" href="#">Status</a>
<a className="hover:text-slate-400" href="#">Privacy</a>
<a className="hover:text-slate-400" href="#">Terms</a>
</div>
</div>
</div>
</main>



    </>
  );
}
