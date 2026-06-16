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
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
vicky: {
900: '#0a0a0a',
800: '#121212',
700: '#1e1e1e',
accent: '#3b82f6',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 4s linear infinite',
'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
},
keyframes: {
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' }
}
}
}
}
}



        // System State
        let autoNeutralize = true;
        let threatCount = 42;
        let activeView = 'overview';
        
        // Log Data
        const logTypes = [
            { type: 'HACKING', color: 'text-rose-400', border: 'border-l-rose-500', msg: ['SQL injection blocked.', 'Brute force blocked IP: 192.168.X.X', 'Port scan detected.', 'DDOS mitigation active.'] },
            { type: 'QUANTUM', color: 'text-purple-400', border: 'border-l-purple-500', msg: ['Key rotation successful.', 'Entanglement stabilized.', 'Q-bit flux normalized.', 'Encryption algorithm updated.'] },
            { type: 'CELL', color: 'text-orange-400', border: 'border-l-orange-500', msg: ['Pattern match: Cell #883.', 'Communication intercept.', 'Movement detected in Sector 7.', 'Facial recognition confident.'] },
            { type: 'SYSTEM', color: 'text-blue-400', border: 'border-l-blue-500', msg: ['Memory optimization complete.', 'Backup sync finished.', 'Node handshake established.', 'Power distribution nominal.'] }
        ];

        // Initialization
        document.addEventListener('DOMContentLoaded', () => {
            setInterval(updateClock, 1000);
            updateClock();
            
            // Random events
            setInterval(generateRandomLog, 3500);
            setInterval(updateStats, 2000);
            setInterval(spawnThreat, 4000);
            
            // Initial Threats
            spawnThreat(); spawnThreat();
        });

        // View Switching Logic
        function switchView(viewName, element) {
            // Reset nav styles
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-white/5', 'text-white', 'border-white/5');
                el.classList.add('text-zinc-500', 'hover:bg-white/5', 'hover:text-white');
            });
            
            // Set active style
            element.classList.remove('text-zinc-500', 'hover:bg-white/5');
            element.classList.add('bg-white/5', 'text-white', 'border-white/5');
            
            activeView = viewName;
            
            // Simulate Page Load
            const mainView = document.getElementById('main-view');
            mainView.style.opacity = '0.5';
            
            setTimeout(() => {
                mainView.style.opacity = '1';
                addLog('SYSTEM', `User switched view to ${viewName.toUpperCase()} MODULE.`);
            }, 200);
        }

        // Clock
        function updateClock() {
            const now = new Date();
            document.getElementById('system-clock').innerText = now.toLocaleTimeString('en-US', { hour12: false });
        }

        // Toggle Auto Mode
        function toggleAutoMode(checkbox) {
            autoNeutralize = checkbox.checked;
            const status = document.getElementById('shield-status');
            const warning = document.getElementById('manual-warning');
            
            if (autoNeutralize) {
                status.innerText = 'Active';
                status.classList.remove('text-rose-400');
                status.classList.add('text-emerald-400');
                warning.style.opacity = '0';
                addLog('SYSTEM', 'Auto-Neutralization re-engaged.');
            } else {
                status.innerText = 'Disabled';
                status.classList.remove('text-emerald-400');
                status.classList.add('text-rose-400');
                warning.style.opacity = '1';
                addLog('SYSTEM', 'WARNING: Auto-Neutralization disabled. Manual intervention required.');
            }
        }

        // Stats Updates
        function updateStats() {
            // Jitter Firewall Load
            const load = 30 + Math.floor(Math.random() * 15);
            document.getElementById('load-text').innerText = load + '%';
            document.getElementById('load-bar').style.width = load + '%';
            
            // Update Quantum bars randomly
            const bars = ['q-bar-1', 'q-bar-2', 'q-bar-3'];
            bars.forEach(id => {
                const el = document.getElementById(id);
                if(Math.random() > 0.7) {
                    el.classList.toggle('bg-purple-500');
                    el.classList.toggle('bg-purple-500/50');
                }
            });
        }

        // Log System
        function generateRandomLog() {
            const typeObj = logTypes[Math.floor(Math.random() * logTypes.length)];
            const msg = typeObj.msg[Math.floor(Math.random() * typeObj.msg.length)];
            addLog(typeObj.type, msg, typeObj);
        }

        function addLog(type, message, styleObj = null) {
            const container = document.getElementById('log-container');
            const now = new Date().toLocaleTimeString('en-US', { hour12: false });
            
            // Fallback styles if called manually
            if (!styleObj) {
                styleObj = logTypes.find(l => l.type === type) || logTypes[3];
            }

            const div = document.createElement('div');
            div.className = `log-entry p-3 border-b border-white/5 hover:bg-white/5 transition-colors cursor-default border-l-2 ${styleObj.border} animate-pulse`;
            div.innerHTML = `
                <div class="flex items-center gap-2 mb-1">
                    <span class="${styleObj.color}">[${type}]</span>
                    <span class="text-zinc-500 opacity-70 text-[10px]">${now}</span>
                </div>
                <div class="text-zinc-300">${message}</div>
            `;
            
            // Remove animation after insertion
            setTimeout(() => div.classList.remove('animate-pulse'), 1000);

            container.insertBefore(div, container.firstChild);
            
            // Limit log entries
            if (container.children.length > 20) {
                container.removeChild(container.lastChild);
            }
        }

        // Map Interaction & Threats
        function spawnThreat() {
            if (Math.random() > 0.7) return; // Not every time
            
            const container = document.getElementById('threat-layer');
            const top = Math.floor(Math.random() * 80) + 10;
            const left = Math.floor(Math.random() * 80) + 10;
            
            const dot = document.createElement('div');
            dot.className = 'threat-point absolute w-3 h-3 cursor-pointer z-20 group';
            dot.style.top = `${top}%`;
            dot.style.left = `${left}%`;
            
            dot.innerHTML = `
                <div class="w-full h-full bg-rose-500 rounded-full animate-ping absolute opacity-75"></div>
                <div class="w-full h-full bg-rose-500 rounded-full relative border border-black shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                <div class="absolute left-4 top-0 bg-zinc-900 border border-white/10 p-2 rounded text-xs w-32 hidden group-hover:block z-30 pointer-events-none">
                    <div class="text-rose-400 font-medium">Active Threat</div>
                    <div class="text-zinc-500 text-[10px]">Click to Neutralize</div>
                </div>
            `;
            
            dot.onclick = (e) => {
                e.stopPropagation();
                neutralizeThreat(dot);
            };
            
            container.appendChild(dot);
            
            // Auto remove if auto-neutralize is on (delayed)
            if (autoNeutralize) {
                setTimeout(() => {
                    if(dot && dot.parentNode) neutralizeThreat(dot, true);
                }, 3000 + Math.random() * 2000);
            }
        }

        function neutralizeThreat(element, auto = false) {
            // Visual feedback
            element.innerHTML = `
                <div class="w-full h-full bg-emerald-500 rounded-full relative border border-black shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-500 scale-150 opacity-0"></div>
            `;
            
            // Update stats
            threatCount++;
            document.getElementById('stat-cells').innerText = threatCount;
            document.getElementById('stat-cells-diff').innerText = '+' + (Math.floor(Math.random() * 5) + 1);
            
            const prefix = auto ? 'AUTO' : 'MANUAL';
            addLog('SYSTEM', `${prefix}: Threat neutralized at sector coordinates.`);
            
            setTimeout(() => {
                if(element.parentNode) element.parentNode.removeChild(element);
            }, 500);
        }

        function handleMapClick(event) {
            // Show click ripple
            const rect = event.target.getBoundingClientRect();
            const x = event.clientX - rect.left; 
            const y = event.clientY - rect.top;
            
            const ripple = document.getElementById('click-feedback');
            ripple.style.left = event.clientX + 'px'; // Actually relative to screen but fixed pos would require change, simplified for container
            // Simpler approach for ripple inside relative container:
            const container = document.getElementById('map-container');
            const rippleEl = document.createElement('div');
            rippleEl.className = 'absolute w-8 h-8 border border-blue-400 rounded-full pointer-events-none z-10';
            rippleEl.style.left = (event.clientX - container.getBoundingClientRect().left - 16) + 'px';
            rippleEl.style.top = (event.clientY - container.getBoundingClientRect().top - 16) + 'px';
            rippleEl.style.animation = 'ping-slow 0.5s ease-out forwards';
            
            container.appendChild(rippleEl);
            setTimeout(() => rippleEl.remove(), 500);
        }

        // Consultancy
        function createNewReport() {
            const feed = document.getElementById('consultancy-feed');
            const div = document.createElement('div');
            div.className = 'flex gap-4 items-start';
            div.innerHTML = `
                <div class="w-8 h-8 rounded bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 text-xs font-mono">ME</div>
                <div class="flex-1 space-y-1">
                    <div class="flex items-baseline justify-between">
                        <span class="text-xs font-medium text-white">Operator</span>
                        <span class="text-[10px] text-zinc-600">Just now</span>
                    </div>
                    <div class="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10 text-xs text-zinc-300 leading-relaxed max-w-2xl">
                        <p>Initiating manual diagnostic scan of Sector 7. Requesting academic confirmation.</p>
                    </div>
                </div>
            `;
            feed.insertBefore(div, feed.children[1] || null); // Insert after AI message
            addLog('SYSTEM', 'Consultancy report filed. ID: #' + Math.floor(Math.random() * 9999));
        }

        function toggleNotifications() {
            const badge = document.getElementById('notif-badge');
            if (badge.classList.contains('hidden')) {
                badge.classList.remove('hidden');
                addLog('SYSTEM', 'Notifications enabled.');
            } else {
                badge.classList.add('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="video-background-container top-0 w-full h-screen -z-10 absolute opacity-10" data-alpha-mask="100" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://deepai.org/video"></video></div>

<aside className="w-16 lg:w-64 h-full border-r bg-[#080808] flex flex-col justify-between shrink-0 transition-all duration-300 z-20 border-white/5">
<div className="">

<div className="h-16 flex items-center px-4 lg:px-6 border-b border-white/5">
<div className="flex items-center gap-3 cursor-pointer group" onclick="location.reload()">
<div className="flex group-hover:bg-cyan-500/20 transition-colors bg-cyan-500/10 w-8 h-8 border-cyan-500/20 border rounded items-center justify-center cursor-pointer" onclick="window.location.href='https://cybersecur-dashboard-9.aura.build'" role="button">
<svg aria-hidden="true" className="iconify iconify--lucide text-blue-400" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="hidden lg:block group-hover:text-cyan-100 transition-colors text-base font-medium tracking-tight text-white">VICKY<span className="text-blue-600">OS</span></span>
</div>
</div>

<nav className="flex flex-col gap-1 p-3" id="nav-container">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md border transition-all bg-white/5 text-white border-white/5" onclick="switchView('overview', this)">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
<span className="hidden lg:block font-medium">Overview</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-blue-500 transition-all group hover:bg-white/5 hover:text-white" onclick="switchView('threat-map', this)">
<svg aria-hidden="true" className="iconify group-hover:text-blue-400 transition-colors iconify--lucide" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
<span className="hidden lg:block">Global Threat Map</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-blue-500 transition-all group hover:bg-white/5 hover:text-white" onclick="switchView('quantum', this)">
<svg aria-hidden="true" className="iconify group-hover:text-purple-400 transition-colors iconify--lucide" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
<span className="hidden lg:block">Quantum Defense</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-blue-500 transition-all group hover:bg-white/5 hover:text-white" onclick="switchView('eye', this)">
<svg aria-hidden="true" className="iconify group-hover:text-emerald-400 transition-colors iconify--lucide" data-icon="lucide:eye" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
<span className="hidden lg:block">The Eye</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-blue-500 transition-all group hover:bg-white/5 hover:text-white" onclick="switchView('neural', this)">
<svg aria-hidden="true" className="iconify group-hover:text-rose-400 transition-colors iconify--lucide" data-icon="lucide:shield-alert" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="hidden lg:block">Cell Neuralization</span>
</button>
</nav>
</div>

<div className="p-3 border-t border-white/5">
<div className="p-3 rounded bg-cyan-500/5 border border-cyan-500/10">
<div className="flex items-center gap-2 mb-2 text-cyan-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:graduation-cap" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
<span className="hidden lg:block text-xs font-medium tracking-tight uppercase">Academic Only</span>
</div>
<p className="hidden lg:block text-xs text-blue-500 leading-relaxed">
                    Consultancy channel active. Encryption level: Quantum-Safe.
                </p>
</div>
<div className="mt-4 flex items-center gap-3 px-2 cursor-pointer p-2 rounded transition-colors hover:bg-white/5">
<div className="relative">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-medium bg-blue-800 border-white/10 text-white">JD</div>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-yellow-500 rounded-full border-2 animate-pulse border-black"></div>
</div>
<div className="hidden lg:block overflow-hidden">
<div className="text-xs truncate font-medium text-white">J. Doe, PhD</div>
<div className="text-[10px] text-blue-500 truncate">Quantum Engineer</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-grid relative transition-all duration-500 bg-black/95">

<div className="absolute inset-0 bg-gradient-to-b pointer-events-none z-0 from-black/0 via-black/0 to-black"></div>

<header className="h-16 border-b flex items-center justify-between px-6 backdrop-blur-md sticky top-0 z-30 border-white/5 bg-black/50">
<div className="flex items-center gap-4">
<span className="text-blue-500">System</span>
<span className="text-blue-700">/</span>
<span className="font-medium text-white" id="page-title">VICKY Dashboard</span>
<div className="flex transition-colors duration-300 bg-yellow-500/10 border-yellow-500/20 border rounded-full ml-4 pt-1 pr-2 pb-1 pl-2 items-center" id="status-badge" onclick="window.location.href='https://deepai.org/video'" role="button">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-yellow-400" id="status-ping"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500" id="status-dot"></span>
</span>
<span className="text-[10px] uppercase font-medium tracking-wide text-yellow-400" id="status-text">Leeuwarden Active</span><div className="mx-2 h-2.5 w-px bg-yellow-500/30"></div><svg className="mr-1 text-emerald-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><span className="text-[10px] font-medium uppercase tracking-wide text-yellow-400">Protected</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border text-blue-400 bg-white/5 border-white/5">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span id="system-clock">00:25:55</span>
</div>
<button className="relative w-8 h-8 flex items-center justify-center rounded-full transition-all text-blue-400 hover:text-white hover:bg-white/10" onclick="toggleNotifications()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full hidden" id="notif-badge"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth z-10" id="main-view">
<div className="max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-4 rounded-lg bg-[#0a0a0a] border transition-colors group relative overflow-hidden border-white/5 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-4 relative">
<div className="">
<div className="text-xs text-blue-500 uppercase tracking-wider mb-1">Threat Neutralization</div>
<div className="text-xl font-medium tracking-tight text-white" id="stat-neutral">99.9%</div>
</div>
<svg aria-hidden="true" className="iconify text-emerald-500 group-hover:scale-110 transition-transform iconify--lucide" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div className="w-full h-1 rounded-full overflow-hidden bg-blue-800">
<div className="bg-yellow-500 h-full w-[99.9%] transition-all duration-1000" id="bar-neutral"></div>
</div>
</div>

<div className="p-4 rounded-lg bg-[#0a0a0a] border transition-colors group relative overflow-hidden border-white/5 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-4 relative">
<div className="">
<div className="uppercase text-xs text-blue-500 tracking-wider mb-1" style={{}}>Quantum Integrity</div>
<div className="text-xl font-medium tracking-tight text-white" id="stat-quantum">Stable</div>
</div>
<svg aria-hidden="true" className="iconify text-purple-500 group-hover:scale-110 transition-transform iconify--lucide" data-icon="lucide:atom" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9c-4.54-4.52-9.87-6.54-11.9-4.5c-2.04 2.03-.02 7.36 4.5 11.9c4.54 4.52 9.87 6.54 11.9 4.5"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9c-2.03-2.04-7.36-.02-11.9 4.5c-4.52 4.54-6.54 9.87-4.5 11.9c2.03 2.04 7.36.02 11.9-4.5"></path></g></svg>
</div>
<div className="flex gap-1">
<div className="h-1 w-1/4 rounded-full bg-purple-500 animate-pulse"></div>
<div className="h-1 w-1/4 rounded-full" id="q-bar-1"></div>
<div className="h-1 w-1/4 rounded-full" id="q-bar-2"></div>
<div className="h-1 w-1/4 rounded-full" id="q-bar-3"></div>
</div>
</div>

<div className="p-4 rounded-lg bg-[#0a0a0a] border transition-colors group relative overflow-hidden border-white/5 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-4 relative">
<div className="">
<div className="text-xs text-blue-500 uppercase tracking-wider mb-1">Active Cells Monitored</div>
<div className="text-xl font-medium tracking-tight text-white" id="stat-cells">43</div>
</div>
<svg aria-hidden="true" className="iconify text-rose-500 group-hover:scale-110 transition-transform iconify--lucide" data-icon="lucide:crosshair" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></path></g></svg>
</div>
<div className="text-xs text-blue-500">
<span className="text-green-400" id="stat-cells-diff">+5</span> detected in last hour
                        </div>
</div>

<div className="p-4 rounded-lg bg-[#0a0a0a] border transition-colors group relative overflow-hidden border-white/5 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-4 relative">
<div>
<div className="text-xs text-blue-500 uppercase tracking-wider mb-1">Consultancy Requests</div>
<div className="text-xl font-medium tracking-tight text-white" id="stat-req">12</div>
</div>
<svg aria-hidden="true" className="iconify text-blue-500 group-hover:scale-110 transition-transform iconify--lucide" data-icon="lucide:messages-square" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm4-1a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-xs text-blue-500">
                            Academic personnel waiting
                        </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">

<div className="lg:col-span-2 rounded-xl bg-[#0a0a0a] border relative overflow-hidden flex flex-col group border-white/5">
<div className="p-4 border-b flex justify-between items-center backdrop-blur-sm z-20 border-white/5 bg-blue-900/20">
<h3 className="text-sm font-medium flex items-center gap-2 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide text-blue-400" data-icon="lucide:scan-eye" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="1"></circle><path d="M18.944 12.33a1 1 0 0 0 0-.66a7.5 7.5 0 0 0-13.888 0a1 1 0 0 0 0 .66a7.5 7.5 0 0 0 13.888 0"></path></g></svg>
                                The Eye: Global Oversight
                            </h3>
<div className="flex items-center gap-2">
<span className="text-[10px] uppercase bg-clip-text text-9xl font-extrabold text-transparent tracking-normal font-mono bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-cyan-400 via-cyan-600 to-cyan-400">Leeuwarden Node</span>
<div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
</div>
</div>

<div className="flex-1 cursor-crosshair bg-center bg-cover relative bg-[url(default)]" id="map-container" onclick="handleMapClick(event)">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-64 h-64 rounded-full border border-cyan-500/10 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style={{animationDuration: '10s'}}></div>
<div className="absolute inset-4 rounded-full border border-dashed border-cyan-500/20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>

<div className="w-24 h-24 rounded-full eye-iris blur-xl absolute"></div>
<div className="w-32 h-32 rounded-full border flex items-center justify-center bg-cyan-500/5 backdrop-blur-sm z-10 border-cyan-400/30">
<svg aria-hidden="true" className="iconify iconify--lucide text-blue-200" data-icon="lucide:eye" data-strokeWidth="1" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
</div>
</div>
</div>

<div id="threat-layer">

<div className="threat-point absolute w-3 h-3 cursor-pointer z-20 group" style={{top: '74%', left: '83%'}}>
<div className="w-full h-full bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
<div className="w-full h-full bg-green-500 rounded-full relative border shadow-[0_0_10px_rgba(244,63,94,0.5)] border-black"></div>
<div className="absolute left-4 top-0 border p-2 rounded text-xs w-32 hidden group-hover:block z-30 pointer-events-none bg-blue-900 border-white/10">
<div className="font-medium text-green-400">Active Threat</div>
<div className="text-blue-500 text-[10px]">Click to Neutralize</div>
</div>
</div><div className="threat-point absolute w-3 h-3 cursor-pointer z-20 group" style={{top: '42%', left: '50%'}}>
<div className="w-full h-full bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
<div className="w-full h-full bg-green-500 rounded-full relative border shadow-[0_0_10px_rgba(244,63,94,0.5)] border-black"></div>
<div className="absolute left-4 top-0 border p-2 rounded text-xs w-32 hidden group-hover:block z-30 pointer-events-none bg-blue-900 border-white/10">
<div className="font-medium text-green-400">Active Threat</div>
<div className="text-blue-500 text-[10px]">Click to Neutralize</div>
</div>
</div><div className="threat-point absolute w-3 h-3 cursor-pointer z-20 group" style={{top: '48%', left: '23%'}}>
<div className="w-full h-full bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
<div className="w-full h-full bg-green-500 rounded-full relative border shadow-[0_0_10px_rgba(244,63,94,0.5)] border-black"></div>
<div className="absolute left-4 top-0 border p-2 rounded text-xs w-32 hidden group-hover:block z-30 pointer-events-none bg-blue-900 border-white/10">
<div className="font-medium text-green-400">Active Threat</div>
<div className="text-blue-500 text-[10px]">Click to Neutralize</div>
</div>
</div><div className="threat-point absolute w-3 h-3 cursor-pointer z-20 group" style={{top: '63%', left: '29%'}}>
<div className="w-full h-full bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
<div className="w-full h-full bg-green-500 rounded-full relative border shadow-[0_0_10px_rgba(244,63,94,0.5)] border-black"></div>
<div className="absolute left-4 top-0 border p-2 rounded text-xs w-32 hidden group-hover:block z-30 pointer-events-none bg-blue-900 border-white/10">
<div className="font-medium text-green-400">Active Threat</div>
<div className="text-blue-500 text-[10px]">Click to Neutralize</div>
</div>
</div><div className="threat-point absolute w-3 h-3 cursor-pointer z-20 group" style={{top: '72%', left: '49%'}}>
<div className="w-full h-full bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
<div className="w-full h-full bg-green-500 rounded-full relative border shadow-[0_0_10px_rgba(244,63,94,0.5)] border-black"></div>
<div className="absolute left-4 top-0 border p-2 rounded text-xs w-32 hidden group-hover:block z-30 pointer-events-none bg-blue-900 border-white/10">
<div className="font-medium text-green-400">Active Threat</div>
<div className="text-blue-500 text-[10px]">Click to Neutralize</div>
</div>
</div><div className="threat-point absolute w-3 h-3 cursor-pointer z-20 group" style={{top: '41%', left: '80%'}}>
<div className="w-full h-full bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
<div className="w-full h-full bg-green-500 rounded-full relative border shadow-[0_0_10px_rgba(244,63,94,0.5)] border-black"></div>
<div className="absolute left-4 top-0 border p-2 rounded text-xs w-32 hidden group-hover:block z-30 pointer-events-none bg-blue-900 border-white/10">
<div className="font-medium text-green-400">Active Threat</div>
<div className="text-blue-500 text-[10px]">Click to Neutralize</div>
</div>
</div><div className="threat-point absolute w-3 h-3 cursor-pointer z-20 group" style={{top: '73%', left: '62%'}}>
<div className="w-full h-full bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
<div className="w-full h-full bg-green-500 rounded-full relative border shadow-[0_0_10px_rgba(244,63,94,0.5)] border-black"></div>
<div className="absolute left-4 top-0 border p-2 rounded text-xs w-32 hidden group-hover:block z-30 pointer-events-none bg-blue-900 border-white/10">
<div className="font-medium text-green-400">Active Threat</div>
<div className="text-blue-500 text-[10px]">Click to Neutralize</div>
</div>
</div><div className="threat-point absolute w-3 h-3 cursor-pointer z-20 group" style={{top: '20%', left: '44%'}}>
<div className="w-full h-full bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
<div className="w-full h-full bg-green-500 rounded-full relative border shadow-[0_0_10px_rgba(244,63,94,0.5)] border-white"></div>
<div className="absolute left-4 top-0 border p-2 rounded text-xs w-32 hidden group-hover:block z-30 pointer-events-none bg-blue-100 border-black/10">
<div className="font-medium text-green-600">Active Threat</div>
<div className="text-blue-500 text-[10px]">Click to Neutralize</div>
</div>
</div><div className="threat-point absolute w-3 h-3 cursor-pointer z-20 group" style={{top: '59%', left: '88%'}}>
<div className="w-full h-full bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
<div className="w-full h-full bg-green-500 rounded-full relative border shadow-[0_0_10px_rgba(244,63,94,0.5)] border-white"></div>
<div className="absolute left-4 top-0 border p-2 rounded text-xs w-32 hidden group-hover:block z-30 pointer-events-none bg-blue-100 border-black/10">
<div className="font-medium text-green-600">Active Threat</div>
<div className="text-blue-500 text-[10px]">Click to Neutralize</div>
</div>
</div></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[10%] w-full animate-scan pointer-events-none border-b border-cyan-500/10"></div>

<div className="absolute w-8 h-8 border rounded-full scale-0 opacity-0 pointer-events-none transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 z-30 border-white/50" id="click-feedback"></div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="flex-1 rounded-xl bg-[#0a0a0a] border flex flex-col overflow-hidden border-white/5">
<div className="p-4 border-b flex justify-between items-center border-white/5 bg-blue-900/20">
<h3 className="text-sm font-medium text-white">Live Threat Feed</h3>
<span className="px-2 py-0.5 rounded text-[10px] bg-green-500/10 border border-green-500/20 animate-pulse text-green-400" id="feed-status">Critical</span>
</div>
<div className="flex-1 overflow-y-auto p-0 font-mono text-xs relative" id="log-container"><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-black/5 hover:bg-black/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-600">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:25:58</span>
</div>
<div className="text-blue-700">AUTO: Threat neutralized at sector coordinates.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 animate-pulse border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:16:12</span>
</div>
<div className="text-blue-300">AUTO: Threat neutralized at sector coordinates.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-green-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-green-400">[HACKING]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:16:11</span>
</div>
<div className="text-blue-300">SQL injection blocked.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:16:08</span>
</div>
<div className="text-blue-300">Memory optimization complete.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-purple-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-purple-400">[QUANTUM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:16:04</span>
</div>
<div className="text-blue-300">Entanglement stabilized.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:16:03</span>
</div>
<div className="text-blue-300">AUTO: Threat neutralized at sector coordinates.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:16:01</span>
</div>
<div className="text-blue-300">Power distribution nominal.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:16:00</span>
</div>
<div className="text-blue-300">AUTO: Threat neutralized at sector coordinates.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-orange-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-orange-400">[CELL]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:57</span>
</div>
<div className="text-blue-300">Facial recognition confident.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:56</span>
</div>
<div className="text-blue-300">AUTO: Threat neutralized at sector coordinates.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-orange-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-orange-400">[CELL]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:54</span>
</div>
<div className="text-blue-300">Communication intercept.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:51</span>
</div>
<div className="text-blue-300">AUTO: Threat neutralized at sector coordinates.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-purple-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-purple-400">[QUANTUM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:50</span>
</div>
<div className="text-blue-300">Q-bit flux normalized.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:47</span>
</div>
<div className="text-blue-300">AUTO: Threat neutralized at sector coordinates.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-purple-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-purple-400">[QUANTUM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:47</span>
</div>
<div className="text-blue-300">Q-bit flux normalized.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:44</span>
</div>
<div className="text-blue-300">AUTO: Threat neutralized at sector coordinates.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-green-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-green-400">[HACKING]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:43</span>
</div>
<div className="text-blue-300">Brute force blocked IP: 192.168.X.X</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-purple-500 animate-pulse border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-purple-400">[QUANTUM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:39</span>
</div>
<div className="text-blue-300">Encryption algorithm updated.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:38</span>
</div>
<div className="text-blue-300">AUTO: Threat neutralized at sector coordinates.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-orange-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-orange-400">[CELL]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:35</span>
</div>
<div className="text-blue-300">Facial recognition confident.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:32</span>
</div>
<div className="text-blue-300">Node handshake established.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:29</span>
</div>
<div className="text-blue-300">AUTO: Threat neutralized at sector coordinates.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:28</span>
</div>
<div className="text-blue-300">Backup sync finished.</div>
</div><div className="log-entry p-3 border-b transition-colors cursor-default border-l-2 border-l-cyan-500 border-white/5 hover:bg-white/5">
<div className="flex items-center gap-2 mb-1">
<span className="text-cyan-400">[SYSTEM]</span>
<span className="text-blue-500 opacity-70 text-[10px]">00:15:25</span>
</div>
<div className="text-blue-300">AUTO: Threat neutralized at sector coordinates.</div>
</div></div>
</div>

<div className="h-1/3 rounded-xl bg-[#0a0a0a] border p-4 flex flex-col justify-center relative overflow-hidden border-white/5">
<div className="flex items-center justify-between mb-4 z-10 relative">
<span className="text-sm font-medium text-white">Auto-Neutralization</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full border-4 appearance-none cursor-pointer transition-all duration-300 bg-white border-blue-700" id="toggle" name="toggle" onchange="toggleAutoMode(this)" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full cursor-pointer bg-blue-700" htmlFor="toggle"></label>
</div>
</div>
<div className="space-y-3 z-10 relative">
<div className="flex justify-between text-xs text-blue-400">
<span>Quantum Shield</span>
<span className="text-yellow-400" id="shield-status">Active</span>
</div>
<div className="w-full rounded-full h-1.5 bg-blue-800">
<div className="bg-cyan-500 h-1.5 rounded-full transition-all duration-500" id="shield-bar" style={{width: '100%'}}></div>
</div>
<div className="flex justify-between text-xs mt-2 text-blue-400">
<span>Firewall Load</span>
<span className="text-blue-300" id="load-text">42%</span>
</div>
<div className="w-full rounded-full h-1.5 bg-blue-800">
<div className="bg-blue-500 h-1.5 rounded-full transition-all duration-500" id="load-bar" style={{width: '42%'}}></div>
</div>
</div>

<div className="absolute inset-0 bg-green-500/10 opacity-0 transition-opacity duration-300 pointer-events-none flex items-center justify-center" id="manual-warning">
<span className="text-green-500 font-bold uppercase tracking-widest opacity-20 -rotate-12 text-2xl">MANUAL MODE</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-[#0a0a0a] border overflow-hidden border-white/5">
<div className="p-4 border-b flex items-center justify-between bg-blue-900/30 border-white/5">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-cyan-500/10 border border-cyan-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide text-blue-400" data-icon="lucide:file-code" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5m-10 4.5L8 15l2 2.5m4-5l2 2.5l-2 2.5"></path></g></svg>
</div>
<div className="">
<h3 className="text-sm font-medium text-white">Academic Consultancy Channel</h3>
<p className="text-[10px] text-blue-500">Secure link to Engineering Dept.</p>
</div>
</div>
<button className="px-3 py-1.5 rounded-md text-xs font-medium transition-colors active:scale-95 transform bg-white text-black hover:bg-blue-200" onclick="createNewReport()">
                            New Report
                        </button>
</div>
<div className="p-6">
<div className="flex flex-col gap-4" id="consultancy-feed">
<div className="flex gap-4 items-start animate-pulse">
<div className="w-8 h-8 rounded flex items-center justify-center shrink-0 text-xs font-mono bg-blue-800 text-blue-400">AI</div>
<div className="flex-1 space-y-1">
<div className="flex items-baseline justify-between">
<span className="text-xs font-medium text-blue-300">VICKY System</span>
<span className="text-[10px] text-blue-600">Just now</span>
</div>
<div className="p-3 rounded-lg border text-xs leading-relaxed max-w-2xl bg-blue-900 border-white/5 text-blue-400">
<p className="">Anomaly detected in sector 4 (Quantum Grid). Recommendation: Manual review by academic personnel required. Data packet prepared for analysis.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-12 mb-6 text-center space-y-3 pb-4">
<p className="text-[10px] uppercase tracking-widest text-blue-600">
                    VICKY System v4.0.2 • Restricted Access • Leeuwarden Node
                </p>
<div className="flex flex-col items-center justify-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-1.5 text-[10px] text-blue-500 font-mono tracking-wide">
<svg aria-hidden="true" className="iconify iconify--lucide text-zinc-600" data-icon="lucide:copyright" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path></g></svg>
<span className="uppercase">Patented &amp; Creator App Rights Full to Patentholder R. Steffen 21021989</span>
</div>
<div className="text-[9px] uppercase tracking-wider font-medium text-blue-600">
                        Legal and Protected Patent
                    </div>
</div>
</footer>
</div>
</main>



    </>
  );
}
