import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Mobile Sidebar Toggle ---
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const openBtn = document.getElementById('open-sidebar');
        const closeBtn = document.getElementById('close-sidebar');

        function toggleSidebar() {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                mobileOverlay.classList.remove('hidden');
                setTimeout(() => mobileOverlay.classList.remove('opacity-0'), 10);
            } else {
                sidebar.classList.add('-translate-x-full');
                mobileOverlay.classList.add('opacity-0');
                setTimeout(() => mobileOverlay.classList.add('hidden'), 300);
            }
        }

        openBtn.addEventListener('click', toggleSidebar);
        closeBtn.addEventListener('click', toggleSidebar);
        mobileOverlay.addEventListener('click', toggleSidebar);

        // --- Date Filters & Chart Updates ---
        const filterBtns = document.querySelectorAll('.filter-btn');
        const chartBars = document.querySelectorAll('.chart-bar');
        
        function randomizeChart() {
            chartBars.forEach(bar => {
                // Random height between 30% and 95%
                const newHeight = Math.floor(Math.random() * (95 - 30 + 1) + 30);
                bar.style.height = `${newHeight}%`;
                
                // Update tooltip text
                const tooltip = bar.querySelector('div');
                if(tooltip) tooltip.textContent = `${newHeight}%`;
            });
            
            // Randomize stats slightly
            const regStat = document.getElementById('stat-registrations');
            const currentReg = parseInt(regStat.textContent.replace(/,/g, ''));
            regStat.textContent = (currentReg + Math.floor(Math.random() * 100 - 50)).toLocaleString();
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // UI Toggle
                filterBtns.forEach(b => {
                    b.classList.remove('bg-zinc-800', 'text-white');
                    b.classList.add('text-zinc-500');
                });
                btn.classList.remove('text-zinc-500');
                btn.classList.add('bg-zinc-800', 'text-white');
                
                // Trigger chart update
                randomizeChart();
            });
        });

        // --- Live Console Logs ---
        const logsContainer = document.getElementById('console-logs');
        const logMessages = [
            { text: "Deploying container <span class='text-sky-500'>krrish-v3-node</span>", type: "info" },
            { text: "Warning: Latency spike in region <span class='text-white'>ap-south-1</span>", type: "warn" },
            { text: "Garbage collection started...", type: "info" },
            { text: "<span class='text-emerald-500'>Cache successfully purged.</span>", type: "success" },
            { text: "Incoming request from 192.168.0.1", type: "info" },
            { text: "Database replication synced.", type: "success" },
            { text: "Checking auth tokens...", type: "info" },
            { text: "User <span class='text-white'>Admin_02</span> updated settings", type: "info" }
        ];

        function addLog() {
            const now = new Date();
            const timeString = `[${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}]`;
            
            const randomMsg = logMessages[Math.floor(Math.random() * logMessages.length)];
            let typeColor = "text-zinc-500";
            if (randomMsg.type === "warn") typeColor = "text-yellow-500";
            
            const logDiv = document.createElement('div');
            logDiv.className = "log-entry flex gap-2 text-zinc-500 mb-2";
            logDiv.innerHTML = `<span class="text-zinc-600 font-mono">${timeString}</span> <span class="${typeColor}">${randomMsg.text}</span>`;
            
            logsContainer.appendChild(logDiv);
            
            // Keep only last 20 logs to prevent memory issues
            if (logsContainer.children.length > 20) {
                logsContainer.removeChild(logsContainer.children[0]);
            }
            
            // Auto scroll to bottom
            logsContainer.scrollTop = logsContainer.scrollHeight;
        }

        // Add a log every 2-4 seconds
        setInterval(addLog, 3000);

        // --- Table Search Functionality ---
        const searchInput = document.getElementById('table-search');
        const tableRows = document.querySelectorAll('#transaction-table tbody tr');

        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            
            tableRows.forEach(row => {
                const text = row.innerText.toLowerCase();
                if (text.includes(term)) {
                    row.classList.remove('hidden');
                } else {
                    row.classList.add('hidden');
                }
            });
        });

        // --- Initial Sidebar State for resizing ---
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                sidebar.classList.remove('-translate-x-full');
                mobileOverlay.classList.add('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300 md:hidden" id="mobile-overlay"></div>

<aside className="fixed md:static inset-y-0 left-0 w-64 border-r border-white/10 bg-zinc-950 flex flex-col justify-between z-50 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out" id="sidebar">
<div>

<div className="h-16 flex items-center px-6 border-b border-white/5 justify-between">
<div className="flex items-center gap-2 text-white font-semibold tracking-tighter">
<span className="iconify text-sky-500" data-icon="lucide:zap" data-width="18"></span>
                    KRRISH <span className="text-zinc-500 font-normal ml-1 text-xs border border-white/10 px-1.5 py-0.5 rounded">ADMIN</span>
</div>

<button className="md:hidden text-zinc-400 hover:text-white" id="close-sidebar">
<span className="iconify" data-icon="lucide:x" data-width="18"></span>
</button>
</div>

<nav className="p-4 space-y-1">
<p className="px-2 mb-2 text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Platform</p>
<a className="nav-item active flex items-center gap-3 px-3 py-2 text-sm text-white bg-white/5 rounded-md border border-white/5 font-medium transition-all group" href="#">
<span className="iconify group-[.active]:text-sky-400" data-icon="lucide:layout-dashboard" data-width="16"></span>
                    Dashboard
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all font-medium group" href="#">
<span className="iconify group-hover:text-sky-400 transition-colors" data-icon="lucide:users" data-width="16"></span>
                    Audience
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all font-medium group" href="#">
<span className="iconify group-hover:text-sky-400 transition-colors" data-icon="lucide:ticket" data-width="16"></span>
                    Bookings
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all font-medium group" href="#">
<span className="iconify group-hover:text-sky-400 transition-colors" data-icon="lucide:database" data-width="16"></span>
                    Content CMS
                </a>
<p className="px-2 mt-8 mb-2 text-[10px] font-medium text-zinc-500 uppercase tracking-widest">System</p>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all font-medium group" href="#">
<span className="iconify group-hover:text-sky-400 transition-colors" data-icon="lucide:server" data-width="16"></span>
                    Server Status
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all font-medium group" href="#">
<span className="iconify group-hover:text-sky-400 transition-colors" data-icon="lucide:settings" data-width="16"></span>
                    Settings
                </a>
</nav>
</div>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 border border-white/10 relative">
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-zinc-950"></div>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Admin User</span>
<span className="text-[10px] text-zinc-500">super@krrish.com</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-black overflow-hidden relative w-full">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

<header className="h-16 border-b border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-between px-4 md:px-8 z-10 shrink-0">
<div className="flex items-center gap-3 text-sm text-zinc-500">
<button className="md:hidden p-2 -ml-2 text-white hover:bg-white/10 rounded-md" id="open-sidebar">
<span className="iconify" data-icon="lucide:menu" data-width="18"></span>
</button>
<div className="hidden md:flex items-center gap-2">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Home</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span>
<span className="text-white font-medium">Dashboard Overview</span>
</div>
<span className="md:hidden text-white font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-full">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono text-zinc-300">SYSTEM OPTIMAL</span>
</div>
<button className="relative text-zinc-400 hover:text-white transition-colors p-1">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
<span className="absolute top-0.5 right-0.5 w-2 h-2 bg-rose-500 rounded-full border border-black"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth" id="main-scroll">
<div className="max-w-6xl mx-auto space-y-6 md:space-y-8 pb-12">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<h1 className="text-2xl font-semibold text-white tracking-tight">System Overview</h1>
<div className="flex gap-1 bg-zinc-900 p-1 rounded-lg border border-white/10" id="date-filters">
<button className="filter-btn active px-3 py-1 text-xs font-medium text-white bg-zinc-800 rounded shadow-sm transition-all" data-period="7d">7d</button>
<button className="filter-btn px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-all" data-period="30d">30d</button>
<button className="filter-btn px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-all" data-period="90d">90d</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-6 rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-sky-500/10 text-sky-500 border border-sky-500/20 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                                +12.5% <span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span>
</span>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1" id="stat-registrations">24,593</div>
<div className="text-sm text-zinc-500">Active Registrations</div>
</div>

<div className="p-6 rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 border border-purple-500/20 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:ticket" data-width="20"></span>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                                +8.2% <span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span>
</span>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1" id="stat-tickets">1.2M</div>
<div className="text-sm text-zinc-500">Tickets Pre-Sold</div>
</div>

<div className="p-6 rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-rose-500/10 text-rose-500 border border-rose-500/20 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full">
                                99.9% uptime
                            </span>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-1" id="stat-latency">42ms</div>
<div className="text-sm text-zinc-500">Global Latency</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 p-6 rounded-xl border border-white/10 bg-zinc-900/30 flex flex-col h-96">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Traffic Analysis</h3>
<button className="text-xs text-zinc-500 hover:text-white flex items-center gap-1 transition-colors">
                                Download Report <span className="iconify" data-icon="lucide:download" data-width="12"></span>
</button>
</div>

<div className="flex-1 flex items-end justify-between gap-2 md:gap-4 px-2" id="traffic-chart">

<div className="w-full bg-zinc-800/50 rounded-sm h-[40%] hover:bg-sky-500/80 transition-all duration-300 relative group cursor-pointer chart-bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">40%</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[65%] hover:bg-sky-500/80 transition-all duration-300 relative group cursor-pointer chart-bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">65%</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[45%] hover:bg-sky-500/80 transition-all duration-300 relative group cursor-pointer chart-bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">45%</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[85%] hover:bg-sky-500/80 transition-all duration-300 relative group cursor-pointer chart-bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">85%</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[55%] hover:bg-sky-500/80 transition-all duration-300 relative group cursor-pointer chart-bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">55%</div>
</div>
<div className="w-full bg-sky-600 rounded-sm h-[95%] shadow-[0_0_15px_rgba(2,132,199,0.3)] relative group cursor-pointer chart-bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">95%</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[70%] hover:bg-sky-500/80 transition-all duration-300 relative group cursor-pointer chart-bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">70%</div>
</div>
</div>

<div className="flex justify-between mt-4 text-[10px] text-zinc-600 font-mono uppercase">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="p-6 rounded-xl border border-white/10 bg-black font-mono text-xs flex flex-col h-96">
<div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
<h3 className="font-medium text-white">Live Logs</h3>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/20"></div>
</div>
</div>
<div className="flex-1 overflow-hidden relative">

<div className="absolute inset-0 overflow-y-auto space-y-2 pr-2 pb-6" id="console-logs">
<div className="log-entry flex gap-2 text-zinc-500">
<span className="text-zinc-600">[10:42:01]</span>
<span>Initiating secure handshake...</span>
</div>
<div className="log-entry flex gap-2 text-zinc-500">
<span className="text-zinc-600">[10:42:02]</span>
<span className="text-emerald-500">Connection established.</span>
</div>
<div className="log-entry flex gap-2 text-zinc-500">
<span className="text-zinc-600">[10:42:05]</span>
<span>User <span className="text-white">R_Mehra</span> authorized access</span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-8 pointer-events-none"></div>
</div>
<div className="flex gap-2 items-center mt-2 pt-2 border-t border-white/5 text-zinc-600">
<span className="text-sky-500">➜</span>
<span className="w-2 h-4 bg-sky-500 animate-pulse"></span>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-zinc-900/30 overflow-hidden">
<div className="p-4 md:p-6 border-b border-white/10 flex flex-col md:flex-row justify-between md:items-center gap-4">
<div>
<h3 className="text-sm font-medium text-white">Recent Transactions</h3>
<p className="text-xs text-zinc-500 mt-1">Real-time ticketing data stream.</p>
</div>
<div className="flex gap-2 w-full md:w-auto">
<div className="relative flex-1 md:flex-none">
<input className="w-full md:w-64 bg-black border border-white/10 rounded-md py-1.5 pl-8 pr-3 text-xs text-white focus:outline-none focus:border-sky-500/50 transition-colors placeholder:text-zinc-600" id="table-search" placeholder="Search user or ID..." type="text"/>
<span className="iconify absolute left-2.5 top-2 text-zinc-500" data-icon="lucide:search" data-width="12"></span>
</div>
<button className="p-1.5 rounded-md border border-white/10 bg-black hover:bg-white/5 text-zinc-400 transition-colors">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm" id="transaction-table">
<thead>
<tr className="border-b border-white/5 bg-white/[0.02]">
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider w-12">
<input className="rounded bg-zinc-800 border-zinc-700 text-sky-500 focus:ring-0 focus:ring-offset-0 focus:ring-transparent cursor-pointer" type="checkbox"/>
</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">User</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Ticket ID</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Showtime</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4"><input className="rounded bg-zinc-800 border-zinc-700 text-sky-500 focus:ring-0 focus:ring-offset-0 focus:ring-transparent cursor-pointer" type="checkbox"/></td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-medium text-white">K</div>
<span className="text-zinc-300">K. Mehra</span>
</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-zinc-400">#TK-8839-A</td>
<td className="px-6 py-4 text-zinc-400">Oct 24, 20:00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span> Confirmed
                                        </span>
</td>
<td className="px-6 py-4 text-right text-white font-medium">₹450.00</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4"><input className="rounded bg-zinc-800 border-zinc-700 text-sky-500 focus:ring-0 focus:ring-offset-0 focus:ring-transparent cursor-pointer" type="checkbox"/></td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-medium text-white">P</div>
<span className="text-zinc-300">Priya M.</span>
</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-zinc-400">#TK-9921-B</td>
<td className="px-6 py-4 text-zinc-400">Oct 24, 20:00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
<span className="w-1 h-1 rounded-full bg-yellow-500"></span> Pending
                                        </span>
</td>
<td className="px-6 py-4 text-right text-white font-medium">₹900.00</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4"><input className="rounded bg-zinc-800 border-zinc-700 text-sky-500 focus:ring-0 focus:ring-offset-0 focus:ring-transparent cursor-pointer" type="checkbox"/></td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-medium text-white">R</div>
<span className="text-zinc-300">Rohit S.</span>
</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-zinc-400">#TK-7742-C</td>
<td className="px-6 py-4 text-zinc-400">Oct 25, 18:00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-white/5">
<span className="w-1 h-1 rounded-full bg-zinc-500"></span> Cancelled
                                        </span>
</td>
<td className="px-6 py-4 text-right text-white font-medium">₹0.00</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4"><input className="rounded bg-zinc-800 border-zinc-700 text-sky-500 focus:ring-0 focus:ring-offset-0 focus:ring-transparent cursor-pointer" type="checkbox"/></td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-medium text-white">A</div>
<span className="text-zinc-300">Ankit V.</span>
</div>
</td>
<td className="px-6 py-4 font-mono text-xs text-zinc-400">#TK-4512-D</td>
<td className="px-6 py-4 text-zinc-400">Oct 26, 14:00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span> Confirmed
                                        </span>
</td>
<td className="px-6 py-4 text-right text-white font-medium">₹1200.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
