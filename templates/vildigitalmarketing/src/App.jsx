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



        // --- Authorized Users Data (7 Accounts) ---
        const users = [
            { 
                email: 'vildigitalseo@gmail.com', pass: 'vps123', name: 'Vil Digital SEO', role: 'Head of SEO', avatar: 'Felix',
                tasks: [
                    { id: 'SEO-101', desc: 'Keyword Research for Client X', sub: 'Imported from Gmail', status: 'In Progress', time: '02:15:00', active: true },
                    { id: 'SEO-102', desc: 'Competitor Analysis Report', sub: 'Email Attachment', status: 'To Do', time: '00:00:00', active: false }
                ] 
            },
            { 
                email: 'dev.sarah@gmail.com', pass: 'dev123', name: 'Sarah Jenkins', role: 'Frontend Lead', avatar: 'Annie',
                tasks: [
                    { id: 'FE-202', desc: 'React Component Migration', sub: 'Sprint 12', status: 'In Progress', time: '01:45:00', active: true },
                    { id: 'FE-205', desc: 'Fix Navigation Bug', sub: 'Urgent Email', status: 'Done', time: '00:30:00', active: false }
                ]
            },
            { 
                email: 'design.mike@gmail.com', pass: 'design123', name: 'Mike Ross', role: 'UI/UX Designer', avatar: 'Jack',
                tasks: [
                    { id: 'DS-301', desc: 'Landing Page Mockups', sub: 'Figma', status: 'In Progress', time: '03:10:00', active: true }
                ]
            },
            { 
                email: 'manager.john@gmail.com', pass: 'manage123', name: 'John Doe', role: 'Project Manager', avatar: 'Bear',
                tasks: [
                    { id: 'PM-401', desc: 'Client Meeting Notes', sub: 'Google Meet', status: 'To Do', time: '00:00:00', active: false },
                    { id: 'PM-402', desc: 'Quarterly Planning', sub: 'Docs', status: 'To Do', time: '00:00:00', active: false }
                ]
            },
            { 
                email: 'qa.lisa@gmail.com', pass: 'test123', name: 'Lisa Wong', role: 'QA Engineer', avatar: 'Kim',
                tasks: [
                    { id: 'QA-501', desc: 'Regression Testing v2.1', sub: 'Jira Import', status: 'In Progress', time: '00:55:00', active: true }
                ]
            },
            { 
                email: 'backend.tom@gmail.com', pass: 'db123', name: 'Tom Hardy', role: 'Backend Dev', avatar: 'Brian',
                tasks: [
                    { id: 'BE-601', desc: 'API Optimization', sub: 'Server Logs', status: 'Done', time: '04:00:00', active: false }
                ]
            },
            { 
                email: 'analyst.emma@gmail.com', pass: 'data123', name: 'Emma Stone', role: 'Data Analyst', avatar: 'Sarah',
                tasks: [
                    { id: 'DA-701', desc: 'Monthly Traffic Report', sub: 'Analytics', status: 'In Progress', time: '02:00:00', active: true }
                ]
            }
        ];

        // --- State Management ---
        let currentUser = null;
        let isCheckedIn = false;
        let timerInterval;
        let seconds = 0;
        let currentTasks = [];

        // --- Login Functions ---

        function handleLogin(e) {
            e.preventDefault();
            const emailInput = document.getElementById('email').value;
            const passInput = document.getElementById('password').value;
            const errorMsg = document.getElementById('login-error');
            const loginBtn = document.getElementById('login-btn');

            // Simulate Loading
            loginBtn.innerHTML = `<iconify-icon icon="svg-spinners:ring-resize" width="20"></iconify-icon>`;
            
            setTimeout(() => {
                const user = users.find(u => u.email === emailInput && u.pass === passInput);

                if (user) {
                    // Success
                    currentUser = user;
                    currentTasks = [...user.tasks]; // Clone tasks
                    
                    // Update UI with User Data
                    document.getElementById('user-name').textContent = user.name;
                    document.getElementById('user-role').textContent = user.role;
                    document.getElementById('user-avatar').src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`;
                    
                    // Initial Render
                    renderTasks();

                    // Transition
                    document.getElementById('login-view').classList.add('fade-out');
                    setTimeout(() => {
                        document.getElementById('login-view').classList.add('hidden');
                        document.getElementById('dashboard-view').classList.remove('hidden');
                        document.getElementById('dashboard-view').classList.add('fade-in');
                        document.getElementById('dashboard-view').style.opacity = '1';
                    }, 300);

                } else {
                    // Fail
                    errorMsg.classList.remove('hidden');
                    loginBtn.innerHTML = `<span>Sign In</span><iconify-icon icon="solar:login-3-linear"></iconify-icon>`;
                }
            }, 800);
        }

        function logout() {
            // Reset State
            currentUser = null;
            isCheckedIn = false;
            clearInterval(timerInterval);
            document.getElementById('checkin-status').textContent = "Not checked in yet";
            document.getElementById('checkin-status').className = "text-xs text-slate-400 flex items-center gap-1 mb-6";
            document.getElementById('btn-checkin').classList.replace('bg-emerald-600', 'bg-slate-900');
            document.getElementById('btn-checkin-text').textContent = "Check In";
            seconds = 0;
            document.getElementById('timer-display').textContent = "00:00:00";
            
            // UI Transition
            document.getElementById('dashboard-view').classList.add('hidden');
            document.getElementById('login-view').classList.remove('hidden', 'fade-out');
            document.getElementById('login-btn').innerHTML = `<span>Sign In</span><iconify-icon icon="solar:login-3-linear"></iconify-icon>`;
            document.getElementById('login-error').classList.add('hidden');
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        }

        // --- Dashboard Functions ---

        function formatTime(totalSeconds) {
            const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
            const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
            const s = (totalSeconds % 60).toString().padStart(2, '0');
            return `${h}:${m}:${s}`;
        }

        function toggleTimer() {
            const btn = document.getElementById('btn-checkin');
            const btnText = document.getElementById('btn-checkin-text');
            const btnIcon = document.getElementById('btn-checkin-icon');
            const status = document.getElementById('checkin-status');
            const breakBtn = document.getElementById('btn-break');

            if (!isCheckedIn) {
                // Check In
                isCheckedIn = true;
                btnText.textContent = "Check Out";
                btnIcon.setAttribute('icon', 'solar:logout-2-linear');
                btn.classList.replace('bg-slate-900', 'bg-emerald-600');
                btn.classList.replace('hover:bg-slate-800', 'hover:bg-emerald-700');
                
                breakBtn.disabled = false;
                
                const now = new Date();
                status.innerHTML = `<iconify-icon icon="solar:check-circle-linear" class="text-emerald-500"></iconify-icon> Checked in at ${now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
                status.classList.replace('text-slate-400', 'text-emerald-600');

                // Start Timer
                timerInterval = setInterval(() => {
                    seconds++;
                    document.getElementById('timer-display').textContent = formatTime(seconds);
                    const hours = seconds / 3600;
                    const pct = Math.min((hours / 8) * 100, 100);
                    document.getElementById('progress-bar-fill').style.width = `${pct}%`;
                    document.getElementById('hours-logged').textContent = hours.toFixed(1);
                }, 1000);

            } else {
                // Check Out
                isCheckedIn = false;
                clearInterval(timerInterval);
                btnText.textContent = "Check In";
                btnIcon.setAttribute('icon', 'solar:login-2-linear');
                btn.classList.replace('bg-emerald-600', 'bg-slate-900');
                btn.classList.replace('hover:bg-emerald-700', 'hover:bg-slate-800');
                
                breakBtn.disabled = true;
                status.textContent = "Session ended";
                status.classList.replace('text-emerald-600', 'text-slate-400');
            }
        }

        function renderTasks() {
            const tbody = document.getElementById('task-list-body');
            tbody.innerHTML = '';

            currentTasks.forEach(task => {
                const tr = document.createElement('tr');
                tr.className = `group hover:bg-slate-50/50 transition-colors ${task.active ? 'bg-indigo-50/30' : ''}`;
                
                let statusBadge = '';
                if(task.status === 'In Progress') {
                    statusBadge = `<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 border border-indigo-200"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>In Progress</span>`;
                } else if (task.status === 'Done') {
                    statusBadge = `<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>Done</span>`;
                } else {
                    statusBadge = `<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">To Do</span>`;
                }

                let actionBtn = task.active 
                    ? `<button class="bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 p-2 rounded-md transition-colors group-hover:shadow-sm"><iconify-icon icon="solar:stop-linear" width="16"></iconify-icon></button>`
                    : `<button class="bg-white text-slate-500 hover:text-indigo-600 hover:border-indigo-200 border border-slate-200 p-2 rounded-md transition-colors group-hover:shadow-sm"><iconify-icon icon="solar:play-linear" width="16"></iconify-icon></button>`;

                tr.innerHTML = `
                    <td class="px-6 py-4"><div class="flex items-center justify-center"><input type="checkbox" class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 h-4 w-4"></div></td>
                    <td class="px-6 py-4"><span class="font-medium text-slate-700 font-mono text-xs bg-slate-100 px-2 py-1 rounded border border-slate-200">${task.id}</span></td>
                    <td class="px-6 py-4"><div class="flex flex-col"><span class="text-slate-900 font-medium">${task.desc}</span><span class="text-xs text-slate-500">${task.sub}</span></div></td>
                    <td class="px-6 py-4">${statusBadge}</td>
                    <td class="px-6 py-4 text-right">${actionBtn}<span class="ml-2 text-xs font-mono font-medium ${task.active ? 'text-slate-600' : 'text-slate-400'}">${task.time}</span></td>
                `;
                tbody.appendChild(tr);
            });
        }

        function handleNewTask(e) {
            e.preventDefault();
            const id = document.getElementById('new-ticket-id').value || 'NEW-001';
            const desc = document.getElementById('new-task-desc').value || 'New Task';
            
            currentTasks.unshift({
                id: id,
                desc: desc,
                sub: 'Manual Entry',
                status: 'To Do',
                time: '00:00:00',
                active: false
            });
            
            renderTasks();
            document.getElementById('taskModal').close();
            document.getElementById('new-ticket-id').value = '';
            document.getElementById('new-task-desc').value = '';
        }

        function syncTasks() {
            const btn = document.getElementById('btn-sync');
            const icon = document.getElementById('icon-sync');
            const text = document.getElementById('text-sync');

            icon.classList.add('animate-spin-custom');
            text.textContent = "Importing...";
            btn.classList.add('bg-slate-100', 'text-indigo-600');
            
            setTimeout(() => {
                icon.classList.remove('animate-spin-custom');
                icon.setAttribute('icon', 'solar:check-circle-linear');
                text.textContent = "Synced";
                
                // Add dummy sync task
                if(currentTasks.length < 5) {
                    currentTasks.push({ id: 'GMAIL-IMP', desc: 'Review New Email Requests', sub: 'Imported just now', status: 'To Do', time: '00:00:00', active: false });
                    renderTasks();
                }

                setTimeout(() => {
                    icon.setAttribute('icon', 'solar:refresh-linear');
                    text.textContent = "Sync Tasks";
                    btn.classList.remove('bg-slate-100', 'text-indigo-600');
                }, 2000);
            }, 1500);
        }

        function exportToSheets() {
            const btn = document.getElementById('btn-export');
            const originalText = btn.textContent;
            btn.innerHTML = `<iconify-icon icon="svg-spinners:ring-resize" width="16"></iconify-icon>`;
            setTimeout(() => {
                btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon> Done`;
                btn.classList.add('text-emerald-600', 'border-emerald-200', 'bg-emerald-50');
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('text-emerald-600', 'border-emerald-200', 'bg-emerald-50');
                }, 2000);
            }, 1200);
        }
    
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
      

<div className="absolute inset-0 z-50 bg-slate-50 flex flex-col items-center justify-center p-4" id="login-view">

<div className="mb-8 flex flex-col items-center">
<div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-lg font-bold tracking-tighter mb-4 shadow-lg shadow-indigo-500/30">
                W
            </div>
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Sign in to WorkSync</h1>
<p className="text-sm text-slate-400 mt-2">Enter your workspace credentials</p>
</div>

<div className="w-full max-w-sm bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 p-8">
<form className="space-y-5" onsubmit="handleLogin(event)">

<div className="hidden bg-rose-50 border border-rose-100 text-rose-600 text-xs rounded-md p-3 flex items-start gap-2" id="login-error">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<span>Invalid email or password. Please try again.</span>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Email Address</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:letter-linear" width="16"></iconify-icon>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg py-2 pl-9 pr-3 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400" id="email" placeholder="name@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 flex justify-between">
<span>Password</span>
<a className="text-indigo-600 hover:text-indigo-700 font-normal" href="#">Forgot?</a>
</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:lock-password-linear" width="16"></iconify-icon>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg py-2 pl-9 pr-3 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400" id="password" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-lg py-2.5 text-sm font-medium transition-all shadow-md shadow-slate-900/10 flex items-center justify-center gap-2" id="login-btn" type="submit">
<span>Sign In</span>
<iconify-icon icon="solar:login-3-linear"></iconify-icon>
</button>
</form>
<div className="mt-6 pt-6 border-t border-slate-100 text-center">
<p className="text-xs text-slate-400">Protected by Enterprise SSO</p>
</div>
</div>
</div>

<div className="hidden flex h-full overflow-hidden opacity-0" id="dashboard-view">

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white text-xs font-semibold tracking-tighter">
                            W
                        </div>
<span className="text-slate-900 font-medium tracking-tight text-sm">WorkSync.</span>
</div>
</div>

<nav className="p-4 space-y-1">
<p className="px-2 text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Platform</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-900 bg-slate-100 rounded-md font-medium transition-colors" href="#">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md font-medium transition-colors" href="#">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Timesheets
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md font-medium transition-colors" href="#">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Leaves
                    </a>
<p className="px-2 text-xs font-medium text-slate-400 mt-6 mb-2 uppercase tracking-wider">Integrations</p>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md font-medium transition-colors text-left" onclick="document.getElementById('settingsModal').showModal()">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Configuration
                    </button>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-indigo-600 bg-indigo-50/50 rounded-md font-medium mt-2 border border-indigo-100">
<iconify-icon icon="solar:link-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        GMail Linked
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full ml-auto animate-pulse"></span>
</div>
</nav>
</div>

<div className="p-4 border-t border-slate-200">
<button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-md transition-colors text-left group" onclick="logout()">
<img alt="User" className="w-8 h-8 rounded-full bg-slate-200 shadow-sm ring-1 ring-slate-900/5" id="user-avatar" src=""/>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-slate-900 truncate group-hover:text-indigo-600 transition-colors" id="user-name">User</p>
<p className="text-[10px] text-slate-400 truncate" id="user-role">Role</p>
</div>
<iconify-icon className="text-slate-400 group-hover:text-red-500 transition-colors" icon="solar:logout-2-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 md:px-8 border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h1 className="text-sm font-medium text-slate-900">Workspace Dashboard</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200/60">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" id="system-status-dot"></div>
<span className="text-xs font-medium text-slate-600" id="system-status-text">Import Active</span>
</div>
<button className="relative p-2 text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-5xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-indigo-600" icon="solar:stopwatch-linear" width="80"></iconify-icon>
</div>
<div className="flex justify-between items-center mb-4">
<h2 className="text-xs font-medium text-slate-500 uppercase tracking-wider">Current Session</h2>
<span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded border border-emerald-100">Live</span>
</div>
<div className="text-4xl font-medium text-slate-900 tracking-tight font-mono mb-2" id="timer-display">00:00:00</div>
<p className="text-xs text-slate-400 flex items-center gap-1 mb-6" id="checkin-status">
                                Not checked in yet
                            </p>
<div className="flex gap-3">
<button className="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200/50 rounded-lg px-4 py-2 text-sm font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="btn-break">
<iconify-icon icon="solar:pause-linear"></iconify-icon>
                                    Break
                                </button>
<button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-4 py-2 text-sm font-medium transition-all shadow-md shadow-slate-900/10 flex items-center justify-center gap-2" id="btn-checkin" onclick="toggleTimer()">
<iconify-icon icon="solar:login-2-linear" id="btn-checkin-icon"></iconify-icon>
<span id="btn-checkin-text">Check In</span>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h2 className="text-xs font-medium text-slate-500 uppercase tracking-wider">Today's Progress</h2>
<span className="text-xs font-medium bg-slate-100 px-2 py-0.5 rounded text-slate-600">8h Goal</span>
</div>
<div className="flex items-end gap-2 mb-1">
<span className="text-2xl font-medium text-slate-900 tracking-tight" id="hours-logged">0.0</span>
<span className="text-sm text-slate-400 mb-1">/ 8 hrs</span>
</div>
</div>
<div className="space-y-4">

<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-indigo-600 h-1.5 rounded-full transition-all duration-1000" id="progress-bar-fill" style={{width: '0%'}}></div>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wide">Break Time</p>
<p className="text-sm font-medium text-slate-900">0m</p>
</div>
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wide">Overtime</p>
<p className="text-sm font-medium text-slate-900">0h</p>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl shadow-lg shadow-indigo-500/20 p-6 text-white flex flex-col justify-between relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div>
<h2 className="text-xs font-medium text-indigo-100 uppercase tracking-wider mb-1">Leave Balance</h2>
<div className="text-3xl font-medium tracking-tight">12 <span className="text-sm font-normal text-indigo-200">days available</span></div>
</div>
<button className="bg-white text-indigo-600 hover:bg-indigo-50 border border-transparent rounded-lg px-4 py-2.5 text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2 mt-4 group">
                                Apply for Leave
                                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:layers-minimalistic-linear"></iconify-icon>
<h3 className="text-base font-medium text-slate-900 tracking-tight">Assigned Tasks</h3>
<span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full border border-indigo-100 font-medium flex items-center gap-1">
<iconify-icon icon="logos:google-gmail" width="10"></iconify-icon>
                                    Gmail Imported
                                </span>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-indigo-600 px-3 py-1.5 rounded-md hover:bg-slate-100 transition-colors" id="btn-sync" onclick="syncTasks()">
<iconify-icon icon="solar:refresh-linear" id="icon-sync"></iconify-icon>
<span id="text-sync">Sync Tasks</span>
</button>
<button className="flex items-center gap-1.5 text-xs font-medium bg-slate-900 text-white px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors shadow-sm" onclick="document.getElementById('taskModal').showModal()">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                                    New Entry
                                </button>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<table className="w-full text-left text-sm" id="tasks-table">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider w-12">
<div className="flex items-center justify-center">
<input className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 h-4 w-4" type="checkbox"/>
</div>
</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider w-32">Source</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Task Details</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider w-32">Status</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider text-right w-32">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100" id="task-list-body">

</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white border border-slate-200 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-slate-900">Google Sheets Export</h3>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-slate-500">Connected</span>
</div>
</div>
<div className="bg-slate-50 rounded-lg p-4 border border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon icon="logos:google-sheets" width="24"></iconify-icon>
<div>
<p className="text-xs font-medium text-slate-900">WorkLog_Main_Sheet</p>
<p className="text-[10px] text-slate-500">Last updated: Just now</p>
</div>
</div>
<button className="text-xs bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded font-medium text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-colors" id="btn-export" onclick="exportToSheets()">
                                    Push Data
                                </button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


<dialog className="bg-transparent p-0 w-full h-full max-w-none max-h-none fixed inset-0 z-50 flex items-center justify-center" id="settingsModal">
<div className="bg-white w-full max-w-md rounded-xl shadow-2xl border border-slate-100 p-6 m-4 relative animate-[fadeIn_0.2s_ease-out]">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Configuration</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="document.getElementById('settingsModal').close()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('settingsModal').close(); alert('Settings Saved! Dashboard is now linked.');">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Gmail API Token</label>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-400 cursor-not-allowed" disabled="" type="password" value="****************"/>
<p className="text-[10px] text-slate-400 mt-1">Managed by Admin</p>
</div>
<div className="pt-2 border-t border-slate-100"></div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Google Sheet ID</label>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" placeholder="1BxiMVs0XRA5nLF..." type="text"/>
</div>
<div className="flex justify-end gap-3 mt-6">
<button className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg font-medium" onclick="document.getElementById('settingsModal').close()" type="button">Cancel</button>
<button className="px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium shadow-sm shadow-indigo-200" type="submit">Save Credentials</button>
</div>
</form>
</div>
</dialog>

<dialog className="bg-transparent p-0 w-full h-full max-w-none max-h-none fixed inset-0 z-50 flex items-center justify-center" id="taskModal">
<div className="bg-white w-full max-w-md rounded-xl shadow-2xl border border-slate-100 p-6 m-4 relative">
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-4">New Time Entry</h3>
<form className="space-y-4" onsubmit="handleNewTask(event)">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Task ID</label>
<div className="relative">
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 pl-9 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" id="new-ticket-id" placeholder="MANUAL-001" type="text"/>
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:hashtag-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Description</label>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none" id="new-task-desc" placeholder="What are you working on?" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Start Time</label>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2" type="time"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Duration (est)</label>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2" placeholder="1h 30m" type="text"/>
</div>
</div>
<div className="flex justify-end gap-3 mt-6">
<button className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg font-medium" onclick="document.getElementById('taskModal').close()" type="button">Cancel</button>
<button className="px-4 py-2 text-sm text-white bg-slate-900 hover:bg-slate-800 rounded-lg font-medium" type="submit">Add Entry</button>
</div>
</form>
</div>
</dialog>


    </>
  );
}
