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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- GAME STATE ---
        let xp = 0;
        let level = 1;
        const xpPerLevel = 500;
        let currentTicketIndex = 0;

        // --- TICKETS DATABASE ---
        const tickets = [
            {
                id: 'TKT-112-PWD',
                severity: 'LOW',
                severityClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
                title: 'User Account Locked',
                desc: 'Sarah Jenkins (Marketing) has locked her AD account after multiple failed login attempts. Verify status and reset.',
                ip: '10.0.12.44',
                vector: 'Auth Failure',
                reward: 100,
                host: 'admin@ad-gateway',
                userName: 'Sarah J.',
                userInitials: 'SJ',
                userInitial: 'Hi! I tried logging in this morning and it says my account is locked. I think I typed the wrong password too many times. Can you help?',
                objectives: [
                    { id: 'obj-1-1', text: 'Check account status (adtool status sarah.j)', command: 'adtool status sarah.j', completed: false, type: 'terminal' },
                    { id: 'obj-1-2', text: 'Unlock account (adtool reset sarah.j)', command: 'adtool reset sarah.j', completed: false, type: 'terminal' },
                    { id: 'obj-1-3', text: 'Notify user via Chat', command: 'chat', completed: false, type: 'chat' }
                ],
                mockResponses: {
                    'adtool status sarah.j': '<div class="text-zinc-400">User: sarah.j<br>Status: <span class="text-red-400">LOCKED</span><br>Failed attempts: 5</div>',
                    'adtool reset sarah.j': '<div class="text-zinc-500">Account unlocked. Temp password generated: Welcome123!</div>'
                }
            },
            {
                id: 'TKT-115-PRN',
                severity: 'MEDIUM',
                severityClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
                title: 'HR Printer Offline',
                desc: 'The HR department network printer spooler has crashed. Clear the queue and restart the service.',
                ip: '10.0.5.99',
                vector: 'Spooler Crash',
                reward: 150,
                host: 'admin@print-server',
                userName: 'Mike D.',
                userInitials: 'MD',
                userInitial: 'Hey IT, the printer in HR isn\'t printing anything. There is a huge queue of documents stuck and people are waiting.',
                objectives: [
                    { id: 'obj-2-1', text: 'Clear print queue (lprm -)', command: 'lprm -', completed: false, type: 'terminal' },
                    { id: 'obj-2-2', text: 'Restart cups service (systemctl restart cups)', command: 'systemctl restart cups', completed: false, type: 'terminal' },
                    { id: 'obj-2-3', text: 'Ask user to test via Chat', command: 'chat', completed: false, type: 'chat' }
                ],
                mockResponses: {
                    'lprm -': '<div class="text-zinc-500">All print jobs removed from queue.</div>',
                    'systemctl restart cups': '<div class="text-zinc-500">Job for cups.service completed successfully.</div>'
                }
            },
            {
                id: 'TKT-118-SRV',
                severity: 'HIGH',
                severityClass: 'bg-red-500/10 text-red-400 border-red-500/20',
                title: 'Intranet Portal Down',
                desc: 'Users are reporting 502 Bad Gateway errors on the HR portal. The application server needs a reboot.',
                ip: '10.0.10.15',
                vector: 'Service Hang',
                reward: 200,
                host: 'admin@issn-gateway',
                userName: 'Elena R.',
                userInitials: 'ER',
                userInitial: 'URGENT: The entire HR portal is down. We are in the middle of payroll processing, we need this back up ASAP!',
                objectives: [
                    { id: 'obj-3-1', text: 'Restart APP-01 from Server Fleet', command: 'restart-APP-01', completed: false, type: 'server' },
                    { id: 'obj-3-2', text: 'Confirm resolution in Chat', command: 'chat', completed: false, type: 'chat' }
                ],
                mockResponses: {}
            },
            {
                id: 'TKT-120-CLR',
                severity: 'LOW',
                severityClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                title: 'Shift Complete',
                desc: 'All immediate tickets resolved. Network stability is 100%.',
                ip: '127.0.0.1',
                vector: 'None',
                reward: 0,
                host: 'admin@issn-gateway',
                userName: 'System',
                userInitials: 'SYS',
                userInitial: 'All queued tickets have been processed. Great work. You can type clear in terminal to tidy up, or enroll in the Academy.',
                objectives: [
                    { id: 'obj-4-1', text: 'Type clear in terminal', command: 'clear', completed: false, type: 'terminal' }
                ],
                mockResponses: {
                    'clear': ''
                }
            }
        ];

        // --- DOM ELEMENTS ---
        const termInput = document.getElementById('term-input');
        const termHistory = document.getElementById('term-history');
        const termContainer = document.getElementById('terminal-container');
        const termHost = document.getElementById('term-host');
        const termPromptHost = document.getElementById('term-prompt-host');
        
        // --- INITIALIZATION ---
        function initGame() {
            updateXPUI();
            loadTicket(0);
            
            // Terminal input listener
            termInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    const cmd = this.value.trim();
                    if (cmd) {
                        processCommand(cmd);
                    }
                    this.value = '';
                }
            });
        }

        // --- VIEW SWITCHER ---
        function switchView(viewName) {
            document.getElementById('view-tickets').classList.add('hidden');
            document.getElementById('view-tickets').classList.remove('flex');
            document.getElementById('view-servers').classList.add('hidden');
            document.getElementById('view-servers').classList.remove('flex');
            
            const activeView = document.getElementById('view-' + viewName);
            activeView.classList.remove('hidden');
            activeView.classList.add('flex');

            // Reset Nav Styles
            const navTickets = document.getElementById('nav-tickets');
            const navServers = document.getElementById('nav-servers');
            
            navTickets.className = "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-zinc-200 border border-transparent text-sm transition-colors";
            navServers.className = "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-zinc-200 border border-transparent text-sm transition-colors";

            // Active Nav Style
            const activeNav = document.getElementById('nav-' + viewName);
            activeNav.className = "w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium transition-colors";
        }

        // --- UI UPDATERS ---
        function updateXPUI() {
            document.getElementById('player-xp').textContent = xp;
            document.getElementById('player-level').textContent = level;
            document.getElementById('xp-next').textContent = level * xpPerLevel;
            
            const progress = (xp / (level * xpPerLevel)) * 100;
            document.getElementById('xp-bar').style.width = `${Math.min(progress, 100)}%`;
        }

        function addXP(amount) {
            xp += amount;
            if (xp >= level * xpPerLevel) {
                level++;
                const lvlSpan = document.getElementById('player-level');
                lvlSpan.classList.add('text-amber-400', 'animate-bounce');
                setTimeout(() => lvlSpan.classList.remove('text-amber-400', 'animate-bounce'), 2000);
            }
            updateXPUI();
        }

        function loadTicket(index) {
            if (index >= tickets.length) return;
            const t = tickets[index];
            
            // Update Ticket Info
            document.getElementById('ticket-id').textContent = t.id;
            document.getElementById('ticket-severity').textContent = t.severity;
            document.getElementById('ticket-severity').className = `text-xs px-2 py-0.5 rounded border font-medium tracking-tight ${t.severityClass}`;
            document.getElementById('ticket-title').textContent = t.title;
            document.getElementById('ticket-desc').textContent = t.desc;
            document.getElementById('ticket-ip').textContent = t.ip;
            document.getElementById('ticket-vector').textContent = t.vector;
            document.getElementById('ticket-reward').textContent = `+${t.reward} XP`;
            
            // Update Terminal Host
            termHost.textContent = t.host;
            termPromptHost.textContent = t.host;

            // Render Objectives
            const objContainer = document.getElementById('ticket-objectives');
            objContainer.innerHTML = '';
            t.objectives.forEach(obj => {
                let iconStr = obj.type === 'chat' ? 'solar:user-speak-linear' : (obj.type === 'server' ? 'solar:server-square-linear' : 'solar:code-square-linear');
                objContainer.innerHTML += `
                    <div id="${obj.id}-container" class="flex items-start gap-3 transition-all duration-300">
                        <div class="w-4 h-4 mt-0.5 rounded border border-white/20 bg-black flex items-center justify-center shrink-0 relative" id="${obj.id}-check-box">
                            <iconify-icon icon="solar:check-linear" class="text-emerald-500 opacity-0 text-xs transition-opacity absolute" id="${obj.id}-check-icon"></iconify-icon>
                        </div>
                        <span class="text-sm text-zinc-400 transition-all flex items-center gap-1.5" id="${obj.id}-text">
                            <iconify-icon icon="${iconStr}" class="text-zinc-600 text-xs"></iconify-icon>
                            ${obj.text}
                        </span>
                    </div>
                `;
            });

            // Set Defcon
            document.getElementById('defcon-level').textContent = t.severity === 'HIGH' ? '3' : (t.severity === 'MEDIUM' ? '4' : '5');

            // Render Initial Chat
            document.getElementById('ai-chat').innerHTML = '';
            addChatMessage(t.userName, t.userInitials, t.userInitial, false);
        }

        // --- CHAT LOGIC ---
        function addChatMessage(name, initials, text, isAdmin) {
            const chatBox = document.getElementById('ai-chat');
            const alignClass = isAdmin ? 'flex-row-reverse' : '';
            const bgClass = isAdmin ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-200' : 'bg-white/5 border-white/5 text-zinc-300';
            const avatarClass = isAdmin ? 'bg-indigo-500/20 text-indigo-400' : 'bg-blue-500/20 text-blue-400';
            const radiusClass = isAdmin ? 'rounded-tr-none' : 'rounded-tl-none';

            chatBox.innerHTML += `
                <div class="flex gap-3 animate-fade-in ${alignClass}">
                    <div class="w-7 h-7 rounded-full ${avatarClass} flex items-center justify-center text-[10px] font-semibold shrink-0 border border-white/5">
                        ${initials}
                    </div>
                    <div class="${bgClass} border rounded-lg ${radiusClass} p-3 text-xs leading-relaxed max-w-[85%] shadow-sm">
                        ${text}
                    </div>
                </div>
            `;
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function handleChat(e) {
            e.preventDefault();
            const input = document.getElementById('chat-input');
            const msg = input.value.trim();
            if(!msg) return;

            addChatMessage('SysAdmin', 'SA', escapeHTML(msg), true);
            input.value = '';

            const ticket = tickets[currentTicketIndex];
            if (!ticket) return;

            // Check if all technical (non-chat) objectives are complete
            const techObjs = ticket.objectives.filter(o => o.type !== 'chat');
            const allTechComplete = techObjs.length === 0 || techObjs.every(o => o.completed);

            // Fake typing delay
            setTimeout(() => {
                if (allTechComplete) {
                    addChatMessage(ticket.userName, ticket.userInitials, 'Oh wow, it is working now! Thank you so much for the quick help!', false);
                    checkObjective('chat', ticket, 'chat');
                } else {
                    addChatMessage(ticket.userName, ticket.userInitials, 'I just tried again, but it is still not working. Have you fixed it yet?', false);
                }
            }, 1200);
        }

        // --- TERMINAL LOGIC ---
        function printToTerminal(html) {
            const div = document.createElement('div');
            div.innerHTML = html;
            termHistory.appendChild(div);
            termContainer.scrollTop = termContainer.scrollHeight;
        }

        function processCommand(cmd) {
            const ticket = tickets[currentTicketIndex];
            const hostHtml = `<div class="mt-1"><span class="text-emerald-500 font-medium">${ticket.host}</span>:<span class="text-blue-400 font-medium">~</span># ${escapeHTML(cmd)}</div>`;
            printToTerminal(hostHtml);

            if (cmd === 'clear') {
                termHistory.innerHTML = '';
                checkObjective(cmd, ticket, 'terminal');
                return;
            }
            if (cmd === 'help') {
                printToTerminal('<div class="text-zinc-400">Commands:<br>- adtool status/reset [user]<br>- lprm -<br>- systemctl restart [service]<br>- clear</div>');
                return;
            }

            let objMatched = checkObjective(cmd, ticket, 'terminal');

            if (ticket.mockResponses && ticket.mockResponses[cmd]) {
                printToTerminal(ticket.mockResponses[cmd]);
            } else if (!objMatched) {
                printToTerminal(`<div class="text-red-400/80">bash: ${escapeHTML(cmd.split(' ')[0])}: command not found or invalid syntax</div>`);
            }
        }

        // --- SERVER FLEET LOGIC ---
        function restartServer(serverId, btn) {
            const statusEl = document.getElementById(`status-${serverId}`);
            const originalClass = statusEl.className;
            
            statusEl.textContent = 'RESTARTING...';
            statusEl.className = 'text-[10px] px-2 py-0.5 rounded font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 tracking-tight animate-pulse';
            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');

            setTimeout(() => {
                statusEl.textContent = 'ONLINE';
                statusEl.className = 'text-[10px] px-2 py-0.5 rounded font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-tight';
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                
                // Card Border Effect reset if APP-01
                if(serverId === 'app-01') {
                    const card = btn.closest('.rounded-xl');
                    card.classList.remove('border-red-500/30', 'shadow-[0_0_15px_rgba(239,68,68,0.05)]');
                    card.classList.add('border-white/10', 'shadow-lg');
                    card.querySelector('.bg-gradient-to-r').classList.replace('via-red-500/50', 'via-emerald-500/30');
                }

                checkObjective(`restart-${serverId.toUpperCase()}`, tickets[currentTicketIndex], 'server');
            }, 2500);
        }

        // --- CORE LOGIC ---
        function checkObjective(cmd, ticket, type = 'terminal') {
            if(!ticket) return false;
            let matched = false;
            
            ticket.objectives.forEach(obj => {
                if (!obj.completed && obj.type === type && (cmd === obj.command || (type === 'chat' && obj.type === 'chat'))) {
                    obj.completed = true;
                    matched = true;
                    
                    // Visual updates
                    document.getElementById(`${obj.id}-check-box`).classList.replace('border-white/20', 'border-emerald-500');
                    document.getElementById(`${obj.id}-check-box`).classList.add('bg-emerald-500/20');
                    document.getElementById(`${obj.id}-check-icon`).classList.replace('opacity-0', 'opacity-100');
                    document.getElementById(`${obj.id}-text`).classList.replace('text-zinc-400', 'text-zinc-600');
                    document.getElementById(`${obj.id}-text`).classList.add('line-through');

                    if(type === 'terminal') {
                        printToTerminal(`<div class="text-emerald-500 text-xs mt-1">✓ Objective completed</div>`);
                    }
                }
            });

            if (matched && ticket.objectives.every(o => o.completed)) {
                setTimeout(() => {
                    completeTicket(ticket);
                }, 1500);
            }
            return matched;
        }

        function completeTicket(ticket) {
            if (ticket.reward > 0) {
                addXP(ticket.reward);
                printToTerminal(`<br><div class="text-emerald-400 font-medium">>> TICKET RESOLVED: +${ticket.reward} XP</div><br>`);
            }
            
            currentTicketIndex++;
            if (currentTicketIndex < tickets.length) {
                loadTicket(currentTicketIndex);
                // Ensure we are on the ticket view
                switchView('tickets');
            }
        }

        function escapeHTML(str) {
            return str.replace(/[&<>'"]/g, 
                tag => ({
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    "'": '&#39;',
                    '"': '&quot;'
                }[tag] || tag)
            );
        }

        // Start
        window.onload = initGame;
    
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
      

<div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '3rem 3rem'}}></div>

<aside className="w-64 border-r border-white/5 bg-[#09090b]/80 backdrop-blur-xl flex flex-col h-full z-10 hidden md:flex">

<div className="h-14 border-b border-white/5 flex items-center px-6">
<h1 className="text-lg font-medium tracking-tight text-zinc-100 flex items-center gap-1">
                ISSN<span className="text-emerald-500 animate-pulse">_</span>
</h1>
</div>

<nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
<div className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2 mt-4">Operations</div>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-medium transition-colors" id="nav-tickets" onclick="switchView('tickets')">
<iconify-icon className="text-base" icon="solar:shield-warning-linear"></iconify-icon> Incident Queue
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-zinc-200 border border-transparent text-sm transition-colors" id="nav-servers" onclick="switchView('servers')">
<iconify-icon className="text-base" icon="solar:server-square-linear"></iconify-icon> Server Fleet
            </button>
<div className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2 mt-6">Learning</div>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-indigo-400 hover:bg-indigo-500/10 text-sm transition-colors group" onclick="document.getElementById('academy-modal').classList.remove('hidden')">
<span className="flex items-center gap-3">
<iconify-icon className="text-base" icon="solar:diploma-linear"></iconify-icon> IT Academy
                </span>
<span className="text-xs px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 group-hover:bg-indigo-500/30 transition-colors tracking-tight">FREE</span>
</button>
</nav>

<div className="p-4 border-t border-white/5">
<div className="bg-black/50 rounded-lg border border-white/5 p-3 space-y-3">
<div>
<div className="flex justify-between text-xs font-medium mb-1.5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span>CPU_LOAD</span><span className="text-amber-400">82%</span>
</div>
<div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 w-[82%]"></div>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative z-10 overflow-hidden">

<header className="h-14 border-b border-white/5 flex items-center justify-between px-4 lg:px-8 bg-[#09090b]/80 backdrop-blur-md shrink-0">
<div className="flex items-center gap-4">
<span className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    DEFCON <span id="defcon-level">5</span>
</span>
<div className="h-4 w-px bg-white/10 hidden sm:block"></div>
<span className="text-xs text-zinc-500 font-medium hidden sm:block" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>UPLINK: SECURE</span>
</div>

<div className="flex items-center gap-6">
<div className="flex flex-col items-end hidden sm:flex">
<div className="text-xs font-medium text-emerald-400 mb-1" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        SYSADMIN LVL <span id="player-level">1</span> <span className="text-zinc-500 mx-1">|</span> <span id="player-xp">0</span>/<span id="xp-next">500</span> XP
                    </div>
<div className="w-32 h-1 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[0%] transition-all duration-500" id="xp-bar"></div>
</div>
</div>
<div className="h-8 w-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
</div>
</header>

<div className="flex-1 p-4 lg:p-8 flex flex-col lg:flex-row gap-6 overflow-hidden h-full" id="view-tickets">

<div className="w-full lg:w-[400px] flex flex-col gap-6 shrink-0 h-full overflow-y-auto pr-2 custom-scrollbar">

<div className="rounded-xl border border-white/10 bg-[#09090b] shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transition-all shrink-0" id="ticket-container">
<div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
<h2 className="text-sm font-medium text-zinc-200 tracking-tight flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:ticket-linear"></iconify-icon>
<span id="ticket-id">TKT-112-PWD</span>
</h2>
<span className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium tracking-tight" id="ticket-severity">LOW</span>
</div>
<div className="p-5 flex flex-col gap-4">
<div>
<h3 className="text-zinc-200 text-sm font-medium mb-1.5 tracking-tight" id="ticket-title">User Account Locked</h3>
<p className="text-xs text-zinc-400 leading-relaxed" id="ticket-desc">Sarah Jenkins (Marketing) has locked her AD account after multiple failed login attempts.</p>
</div>

<div className="p-3 rounded-lg bg-black border border-white/5 text-xs space-y-1.5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="flex justify-between"><span className="text-zinc-600">TARGET_IP:</span> <span className="text-zinc-300" id="ticket-ip">10.0.12.44</span></div>
<div className="flex justify-between"><span className="text-zinc-600">INCIDENT:</span> <span className="text-amber-400" id="ticket-vector">Auth Failure</span></div>
<div className="flex justify-between"><span className="text-zinc-600">REWARD:</span> <span className="text-emerald-400" id="ticket-reward">+100 XP</span></div>
</div>

<div className="mt-2">
<h4 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3 flex justify-between items-center">
                                Task Objectives
                            </h4>
<div className="space-y-3" id="ticket-objectives">

</div>
</div>
</div>
</div>

<div className="rounded-xl border border-indigo-500/20 bg-[#09090b] shadow-[0_0_30px_rgba(79,70,229,0.05)] flex flex-col flex-1 overflow-hidden min-h-[300px]">
<div className="p-3 border-b border-white/5 flex items-center justify-between bg-indigo-500/[0.02]">
<h2 className="text-sm font-medium text-indigo-300 tracking-tight flex items-center gap-2">
<iconify-icon icon="solar:user-speak-linear"></iconify-icon>
                            User Communications
                        </h2>
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
</div>
<div className="p-4 overflow-y-auto space-y-4 custom-scrollbar text-sm flex-1" id="ai-chat">

</div>

<div className="p-3 border-t border-white/5 bg-black/40">
<form className="flex gap-2" onsubmit="handleChat(event)">
<input autocomplete="off" className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 text-xs text-zinc-200 outline-none focus:border-indigo-500/50 transition-colors" id="chat-input" placeholder="Message user..." type="text"/>
<button className="bg-indigo-500 hover:bg-indigo-400 text-white px-3 py-2 rounded-md text-xs transition-colors shadow-sm" type="submit">
<iconify-icon className="text-sm" icon="solar:send-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<div className="flex-1 rounded-xl border border-white/10 bg-[#040405] shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative group h-full min-h-[400px]">

<div className="h-10 bg-[#09090b] border-b border-white/5 flex items-center justify-between px-4 select-none shrink-0">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40 hover:bg-red-500/40 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500/40 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/40 transition-colors"></div>
</div>
<div className="text-xs text-zinc-500 flex items-center gap-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon icon="solar:lock-password-linear"></iconify-icon> <span id="term-host">admin@ad-gateway</span>:~
                    </div>
<div className="w-14"></div> 
</div>

<div className="p-5 flex-1 overflow-y-auto text-sm space-y-1.5 custom-scrollbar pb-12" id="terminal-container" onclick="document.getElementById('term-input').focus()" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="text-zinc-500">ISSN Secure Shell v2.1.0 (Interactive Mode)</div>
<div className="text-zinc-500">Type 'help' for available commands. Solve the active ticket on the left.</div>
<br/>
<div id="term-history"></div>

<div className="flex items-center mt-2">
<span className="text-emerald-500 font-medium whitespace-nowrap"><span id="term-prompt-host">admin@ad-gateway</span></span><span className="text-zinc-500">:</span><span className="text-blue-400 font-medium">~</span><span className="text-zinc-300">#</span>
<input autocomplete="off" autofocus="" className="ml-2 bg-transparent border-none text-zinc-200 outline-none flex-1 font-mono text-sm caret-zinc-400" id="term-input" spellcheck="false" type="text"/>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="hidden flex-1 p-4 lg:p-8 flex-col gap-8 overflow-y-auto custom-scrollbar h-full w-full" id="view-servers">
<div>
<h2 className="text-xl tracking-tight font-semibold text-zinc-100 flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:server-square-linear"></iconify-icon> Server Fleet Management
                </h2>
<p className="text-sm text-zinc-500 mt-1">Monitor and control core infrastructure endpoints.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div className="p-5 rounded-xl border border-white/10 bg-[#040405] shadow-lg flex flex-col gap-4 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
<div className="flex justify-between items-start">
<div>
<div className="text-sm font-semibold text-zinc-200 tracking-tight">DC-01</div>
<div className="text-xs text-zinc-500 font-mono mt-0.5">10.0.0.2</div>
</div>
<span className="text-[10px] px-2 py-0.5 rounded font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-tight" id="status-dc-01">ONLINE</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="bg-white/5 p-2 rounded-md"><span className="text-zinc-600 block mb-0.5">Role</span><span className="text-zinc-300 font-medium">Domain Ctrl</span></div>
<div className="bg-white/5 p-2 rounded-md"><span className="text-zinc-600 block mb-0.5">Uptime</span><span className="text-zinc-300 font-medium">45d 12h</span></div>
</div>
<button className="mt-2 w-full text-xs font-medium bg-white/5 hover:bg-white/10 text-zinc-300 py-2 rounded-md transition-all border border-white/5 flex items-center justify-center gap-2" onclick="restartServer('dc-01', this)">
<iconify-icon icon="solar:restart-linear"></iconify-icon> Restart Server
                    </button>
</div>

<div className="p-5 rounded-xl border border-white/10 bg-[#040405] shadow-lg flex flex-col gap-4 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
<div className="flex justify-between items-start">
<div>
<div className="text-sm font-semibold text-zinc-200 tracking-tight">PRINT-01</div>
<div className="text-xs text-zinc-500 font-mono mt-0.5">10.0.5.99</div>
</div>
<span className="text-[10px] px-2 py-0.5 rounded font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-tight" id="status-print-01">ONLINE</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="bg-white/5 p-2 rounded-md"><span className="text-zinc-600 block mb-0.5">Role</span><span className="text-zinc-300 font-medium">Print Spooler</span></div>
<div className="bg-white/5 p-2 rounded-md"><span className="text-zinc-600 block mb-0.5">Uptime</span><span className="text-zinc-300 font-medium">12d 4h</span></div>
</div>
<button className="mt-2 w-full text-xs font-medium bg-white/5 hover:bg-white/10 text-zinc-300 py-2 rounded-md transition-all border border-white/5 flex items-center justify-center gap-2" onclick="restartServer('print-01', this)">
<iconify-icon icon="solar:restart-linear"></iconify-icon> Restart Server
                    </button>
</div>

<div className="p-5 rounded-xl border border-red-500/30 bg-[#040405] shadow-[0_0_15px_rgba(239,68,68,0.05)] flex flex-col gap-4 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
<div className="flex justify-between items-start">
<div>
<div className="text-sm font-semibold text-zinc-200 tracking-tight">APP-01</div>
<div className="text-xs text-zinc-500 font-mono mt-0.5">10.0.10.15</div>
</div>
<span className="text-[10px] px-2 py-0.5 rounded font-medium bg-red-500/10 text-red-400 border border-red-500/20 tracking-tight animate-pulse" id="status-app-01">HANGING</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="bg-white/5 p-2 rounded-md"><span className="text-zinc-600 block mb-0.5">Role</span><span className="text-zinc-300 font-medium">HR Portal</span></div>
<div className="bg-white/5 p-2 rounded-md"><span className="text-zinc-600 block mb-0.5">Uptime</span><span className="text-zinc-300 font-medium">102d 1h</span></div>
</div>
<button className="mt-2 w-full text-xs font-medium bg-white/5 hover:bg-white/10 text-zinc-300 py-2 rounded-md transition-all border border-white/5 flex items-center justify-center gap-2 hover:text-emerald-400" onclick="restartServer('app-01', this)">
<iconify-icon icon="solar:restart-linear"></iconify-icon> Restart Server
                    </button>
</div>

<div className="p-5 rounded-xl border border-white/10 bg-[#040405] shadow-lg flex flex-col gap-4 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
<div className="flex justify-between items-start">
<div>
<div className="text-sm font-semibold text-zinc-200 tracking-tight">FILE-01</div>
<div className="text-xs text-zinc-500 font-mono mt-0.5">10.0.2.50</div>
</div>
<span className="text-[10px] px-2 py-0.5 rounded font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-tight" id="status-file-01">ONLINE</span>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<div className="bg-white/5 p-2 rounded-md"><span className="text-zinc-600 block mb-0.5">Role</span><span className="text-zinc-300 font-medium">Network Share</span></div>
<div className="bg-white/5 p-2 rounded-md"><span className="text-zinc-600 block mb-0.5">Uptime</span><span className="text-zinc-300 font-medium">8d 9h</span></div>
</div>
<button className="mt-2 w-full text-xs font-medium bg-white/5 hover:bg-white/10 text-zinc-300 py-2 rounded-md transition-all border border-white/5 flex items-center justify-center gap-2" onclick="restartServer('file-01', this)">
<iconify-icon icon="solar:restart-linear"></iconify-icon> Restart Server
                    </button>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center hidden" id="academy-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="document.getElementById('academy-modal').classList.add('hidden')"></div>
<div className="bg-[#09090b] border border-white/10 rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden">
<div className="h-32 bg-indigo-500/10 relative flex items-center justify-center border-b border-white/5">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)'}}></div>
<iconify-icon className="text-5xl text-indigo-400 relative z-10" icon="solar:diploma-linear"></iconify-icon>
</div>
<div className="p-6">
<h2 className="text-xl font-medium tracking-tight text-zinc-100 text-center mb-2">Free IT &amp; Cyber Academy</h2>
<p className="text-sm text-zinc-400 text-center mb-6 leading-relaxed">Level up your real-world skills. Enroll in our free comprehensive courses covering Networking, Linux Administration, and Cybersecurity Fundamentals.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Enrollment successful! Check your email.'); document.getElementById('academy-modal').classList.add('hidden');">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-widest">Email Address</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="sysadmin@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-widest">Select Path</label>
<select className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all appearance-none">
<option>Network Engineering Foundation</option>
<option>Linux System Administration</option>
<option>Ethical Hacking 101</option>
</select>
</div>
<button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-medium rounded-lg px-4 py-2.5 text-sm transition-colors mt-2" type="submit">
                        Start Learning For Free
                    </button>
</form>
</div>
<button className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors" onclick="document.getElementById('academy-modal').classList.add('hidden')">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>



    </>
  );
}
