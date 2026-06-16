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
},
colors: {
background: '#09090b',
surface: '#18181b',
surfaceHighlight: '#27272a',
border: '#27272a',
primary: '#6366f1', // Indigo
accent: '#a855f7', // Purple
success: '#10b981', // Emerald
warning: '#f59e0b', // Amber
danger: '#ef4444', // Red
}
}
}
}



        // --- Data State ---
        let tasks = [
            { id: 1, title: 'Q4 Financial Analysis', category: 'Work', priority: 'High', est: 60, act: 45, status: 'done', date: new Date().toLocaleDateString() },
            { id: 2, title: 'React Component Refactor', category: 'Work', priority: 'Medium', est: 120, act: 40, status: 'in-progress', date: new Date().toLocaleDateString() },
            { id: 3, title: 'Gym Session', category: 'Health', priority: 'High', est: 90, act: 0, status: 'todo', date: new Date().toLocaleDateString() },
            { id: 4, title: 'Read Documentation', category: 'Learning', priority: 'Low', est: 30, act: 30, status: 'done', date: new Date().toLocaleDateString() },
            { id: 5, title: 'Weekly Planning', category: 'Personal', priority: 'Medium', est: 15, act: 0, status: 'todo', date: new Date().toLocaleDateString() },
        ];

        let activeTaskId = null;
        let charts = {};
        let activeNav = 'Dashboard';

        // --- Init ---
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('current-date').innerText = new Date().toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' });
            renderNav();
            renderTasks();
            initCharts();
            updateDashboard();
            
            // Global Timer
            setInterval(() => {
                if (activeTaskId) {
                    const task = tasks.find(t => t.id === activeTaskId);
                    if (task) {
                        task.act += (1/60);
                        const timeDisplay = document.getElementById(`time-${task.id}`);
                        if (timeDisplay) timeDisplay.innerText = formatTime(task.act);
                        
                        // Update visual chart slightly less often
                        if (Math.floor(task.act) > Math.floor(task.act - (1/60))) {
                            updateDashboard();
                        }
                    }
                }
            }, 1000);
        });

        // --- Navigation Logic ---
        const navItems = [
            { name: 'Dashboard', icon: 'layout-dashboard' },
            { name: 'Tasks', icon: 'check-square' },
            { name: 'Analytics', icon: 'pie-chart' },
            { name: 'Settings', icon: 'settings' }
        ];

        function renderNav() {
            const generateHTML = (idPrefix) => navItems.map(item => {
                const isActive = activeNav === item.name;
                const baseClass = "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer mb-1";
                const activeClass = "text-white bg-surfaceHighlight/60 border border-white/5 shadow-sm";
                const inactiveClass = "text-zinc-400 hover:text-white hover:bg-surfaceHighlight/30";
                
                return `
                <div onclick="setActiveNav('${item.name}')" class="${baseClass} ${isActive ? activeClass : inactiveClass}">
                    <iconify-icon icon="lucide:${item.icon}" width="18" class="${isActive ? 'text-primary' : ''}"></iconify-icon>
                    ${item.name}
                </div>`;
            }).join('');

            document.getElementById('desktop-nav').innerHTML = generateHTML('d');
            document.getElementById('mobile-nav').innerHTML = generateHTML('m');
            document.getElementById('page-title').innerText = activeNav;
        }

        function setActiveNav(name) {
            activeNav = name;
            renderNav();
            toggleMobileMenu(false); // Close mobile menu if open
            
            // Simple visual feedback simulation
            const main = document.querySelector('main');
            main.classList.add('opacity-50');
            setTimeout(() => main.classList.remove('opacity-50'), 150);
        }

        // --- Mobile Menu Logic ---
        function toggleMobileMenu(forceState) {
            const sidebar = document.getElementById('mobile-sidebar');
            const overlay = document.getElementById('mobile-menu-overlay');
            const isOpen = !sidebar.classList.contains('-translate-x-full');
            const newState = forceState !== undefined ? forceState : !isOpen;

            if (newState) {
                // Open
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
                sidebar.classList.remove('-translate-x-full');
            } else {
                // Close
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }

        // --- Modal Logic ---
        function toggleTaskModal() {
            const modal = document.getElementById('task-modal');
            const backdrop = document.getElementById('modal-backdrop');
            const content = document.getElementById('modal-content');
            
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                // Trigger reflow
                void modal.offsetWidth;
                backdrop.classList.remove('opacity-0');
                content.classList.remove('opacity-0', 'translate-y-4');
                content.classList.add('translate-y-0');
                // Focus first input
                setTimeout(() => document.getElementById('t-title').focus(), 100);
            } else {
                backdrop.classList.add('opacity-0');
                content.classList.remove('translate-y-0');
                content.classList.add('opacity-0', 'translate-y-4');
                setTimeout(() => modal.classList.add('hidden'), 300);
            }
        }

        document.getElementById('task-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const newTask = {
                id: Date.now(),
                title: document.getElementById('t-title').value,
                category: document.getElementById('t-cat').value,
                priority: document.getElementById('t-prio').value,
                est: parseInt(document.getElementById('t-est').value),
                act: 0,
                status: 'todo',
                date: new Date().toLocaleDateString()
            };
            tasks.unshift(newTask);
            renderTasks();
            updateDashboard();
            toggleTaskModal();
            e.target.reset();
        });

        // --- Task Actions ---
        function formatTime(minutes) {
            const h = Math.floor(minutes / 60);
            const m = Math.floor(minutes % 60);
            if (h > 0) return `${h}h ${m}m`;
            return `${m}m`;
        }

        function getPriorityColor(p) {
            if (p === 'High') return 'bg-danger shadow-[0_0_8px_rgba(239,68,68,0.4)]';
            if (p === 'Medium') return 'bg-warning shadow-[0_0_8px_rgba(245,158,11,0.4)]';
            return 'bg-success';
        }

        function sortTasks(criteria) {
            if (criteria === 'priority') {
                const map = { 'High': 3, 'Medium': 2, 'Low': 1 };
                tasks.sort((a, b) => map[b.priority] - map[a.priority]);
            } else if (criteria === 'status') {
                const map = { 'in-progress': 3, 'todo': 2, 'done': 1 };
                tasks.sort((a, b) => map[b.status] - map[a.status]);
            }
            renderTasks();
        }

        function renderTasks() {
            const container = document.getElementById('task-list');
            container.innerHTML = '';

            tasks.forEach(task => {
                const isRunning = activeTaskId === task.id;
                const isDone = task.status === 'done';
                
                const card = document.createElement('div');
                card.className = `group p-3 md:p-4 rounded-lg border border-white/5 bg-zinc-900/40 hover:bg-zinc-800/60 transition-all flex items-center justify-between animate-fade-in ${isDone ? 'opacity-50 grayscale-[0.5]' : ''} ${isRunning ? 'border-primary/30 bg-primary/5' : ''}`;
                
                card.innerHTML = `
                    <div class="flex items-center gap-3 md:gap-4 flex-1 overflow-hidden">
                        <button onclick="toggleStatus(${task.id})" class="flex-shrink-0 w-5 h-5 rounded border ${isDone ? 'bg-primary border-primary text-white' : 'border-zinc-600 hover:border-primary'} flex items-center justify-center transition-colors">
                            ${isDone ? '<iconify-icon icon="lucide:check" width="14"></iconify-icon>' : ''}
                        </button>
                        
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 mb-1">
                                <h4 class="text-sm font-medium text-white truncate ${isDone ? 'line-through text-zinc-500' : ''}">${task.title}</h4>
                                <span class="w-1.5 h-1.5 rounded-full flex-shrink-0 ${getPriorityColor(task.priority)}"></span>
                            </div>
                            <div class="flex flex-wrap items-center gap-2 md:gap-3 text-xs text-zinc-500">
                                <span class="bg-zinc-800 px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider border border-white/5">${task.category}</span>
                                <span class="flex items-center gap-1 hidden md:flex">
                                    <iconify-icon icon="lucide:clock" width="10"></iconify-icon>
                                    Est: ${task.est}m
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 md:gap-4 pl-2">
                        <div class="text-right min-w-[40px]">
                            <div class="text-xs font-mono font-medium ${isRunning ? 'text-primary' : 'text-zinc-400'}" id="time-${task.id}">${formatTime(task.act)}</div>
                        </div>
                        
                        ${!isDone ? `
                        <button onclick="toggleTimer(${task.id})" class="w-8 h-8 rounded-full flex items-center justify-center transition-all ${isRunning ? 'bg-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'}">
                            <iconify-icon icon="lucide:${isRunning ? 'pause' : 'play'}" width="14"></iconify-icon>
                        </button>
                        ` : ''}
                        
                        <button onclick="deleteTask(${task.id})" class="hidden md:block opacity-0 group-hover:opacity-100 text-zinc-600 hover:text-danger transition-all">
                            <iconify-icon icon="lucide:trash-2" width="14"></iconify-icon>
                        </button>
                        <button onclick="deleteTask(${task.id})" class="md:hidden text-zinc-600 hover:text-danger">
                            <iconify-icon icon="lucide:trash-2" width="14"></iconify-icon>
                        </button>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function toggleStatus(id) {
            const task = tasks.find(t => t.id === id);
            if (task.status === 'done') {
                task.status = 'todo';
            } else {
                task.status = 'done';
                if (activeTaskId === id) toggleTimer(id); 
            }
            renderTasks();
            updateDashboard();
        }

        function toggleTimer(id) {
            const task = tasks.find(t => t.id === id);
            if (activeTaskId === id) {
                activeTaskId = null;
                task.status = 'todo';
            } else {
                if (activeTaskId) {
                    const prev = tasks.find(t => t.id === activeTaskId);
                    if (prev) prev.status = 'todo'; 
                }
                activeTaskId = id;
                task.status = 'in-progress';
            }
            renderTasks();
        }

        function deleteTask(id) {
            if (activeTaskId === id) activeTaskId = null;
            tasks = tasks.filter(t => t.id !== id);
            renderTasks();
            updateDashboard();
        }

        // --- Dashboard & Charts ---
        function updateDashboard() {
            const totalTasks = tasks.length;
            const completedTasks = tasks.filter(t => t.status === 'done').length;
            const totalTime = tasks.reduce((acc, t) => acc + t.act, 0);
            const totalEst = tasks.reduce((acc, t) => acc + t.est, 0);
            
            const completionRate = totalTasks ? (completedTasks / totalTasks) : 0;
            const goalPercent = Math.round(completionRate * 100);
            const efficiency = totalEst > 0 ? Math.min(1, totalTime / totalEst) : 0;
            const score = totalTasks === 0 ? 0 : Math.round(20 + (completionRate * 60) + (efficiency * 20));

            document.getElementById('kpi-completed').innerText = completedTasks;
            document.getElementById('kpi-time').innerText = formatTime(totalTime);
            document.getElementById('kpi-goal').innerText = `${goalPercent}%`;
            document.getElementById('kpi-score').innerText = score;
            
            document.getElementById('sidebar-score').innerText = score;
            document.getElementById('sidebar-progress').style.width = `${score}%`;

            updateCharts();
        }

        function initCharts() {
            Chart.defaults.color = '#71717a';
            Chart.defaults.font.family = 'Inter';
            
            // Trend
            const ctx1 = document.getElementById('productivityChart').getContext('2d');
            const gradient1 = ctx1.createLinearGradient(0, 0, 0, 300);
            gradient1.addColorStop(0, 'rgba(99, 102, 241, 0.5)');
            gradient1.addColorStop(1, 'rgba(99, 102, 241, 0)');

            charts.trend = new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Score',
                        data: [45, 52, 38, 65, 59, 72, 80],
                        borderColor: '#6366f1',
                        backgroundColor: gradient1,
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 0,
                        pointHoverRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { grid: { color: '#27272a' }, beginAtZero: true, max: 100, ticks: { display: false } },
                        x: { grid: { display: false } }
                    }
                }
            });

            // Category
            const ctx2 = document.getElementById('categoryChart').getContext('2d');
            charts.category = new Chart(ctx2, {
                type: 'doughnut',
                data: {
                    labels: ['Work', 'Personal', 'Learning', 'Health'],
                    datasets: [{
                        data: [0, 0, 0, 0],
                        backgroundColor: ['#6366f1', '#a855f7', '#f59e0b', '#10b981'],
                        borderWidth: 0,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'right', labels: { usePointStyle: true, boxWidth: 6, font: {size: 10} } } },
                    cutout: '75%'
                }
            });

            // Comparison
            const ctx3 = document.getElementById('comparisonChart').getContext('2d');
            charts.comparison = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: [],
                    datasets: [
                        { label: 'Est', data: [], backgroundColor: '#27272a', borderRadius: 3, barPercentage: 0.6 },
                        { label: 'Act', data: [], backgroundColor: '#f43f5e', borderRadius: 3, barPercentage: 0.6 }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { display: false },
                        x: { grid: { display: false }, ticks: { display: false } }
                    }
                }
            });
        }

        function updateCharts() {
            const cats = ['Work', 'Personal', 'Learning', 'Health'];
            const catData = cats.map(c => tasks.filter(t => t.category === c).reduce((acc, t) => acc + t.act, 0));
            charts.category.data.datasets[0].data = catData;
            charts.category.update();

            const recentTasks = tasks.slice(0, 5);
            charts.comparison.data.labels = recentTasks.map(t => t.title);
            charts.comparison.data.datasets[0].data = recentTasks.map(t => t.est);
            charts.comparison.data.datasets[1].data = recentTasks.map(t => t.act);
            charts.comparison.update();
            
            const currentScore = parseInt(document.getElementById('kpi-score').innerText);
            const trendData = charts.trend.data.datasets[0].data;
            trendData.shift();
            trendData.push(currentScore);
            charts.trend.update();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden md:flex flex-col w-64 border-r border-border bg-background/50 h-full p-6 justify-between flex-shrink-0 z-20">
<div>
<div className="flex items-center gap-3 mb-10">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold tracking-tight shadow-lg shadow-primary/20">
                    OS
                </div>
<span className="font-semibold tracking-tight text-lg text-white">Nexus</span>
</div>
<nav className="space-y-1" id="desktop-nav">

</nav>
</div>
<div className="p-4 rounded-xl bg-gradient-to-b from-surfaceHighlight/40 to-transparent border border-white/5">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Daily Goal</p>
<div className="flex items-end gap-1 mb-2">
<span className="text-2xl font-bold text-white" id="sidebar-score">0</span>
<span className="text-xs text-zinc-500 mb-1">/ 100</span>
</div>
<div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full transition-all duration-500" id="sidebar-progress" style={{width: '0%'}}></div>
</div>
</div>
</aside>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 hidden transition-opacity opacity-0" id="mobile-menu-overlay" onclick="toggleMobileMenu()"></div>
<aside className="fixed inset-y-0 left-0 w-64 bg-surface border-r border-white/10 z-50 transform -translate-x-full transition-transform duration-300 md:hidden flex flex-col p-6 justify-between" id="mobile-sidebar">
<div>
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold tracking-tight">
                        OS
                    </div>
<span className="font-semibold tracking-tight text-lg text-white">Nexus</span>
</div>
<button className="text-zinc-400 hover:text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
<nav className="space-y-1" id="mobile-nav">

</nav>
</div>
<div className="p-4 rounded-xl bg-zinc-900 border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-400">
                    JD
                </div>
<div>
<p className="text-sm font-medium text-white">John Doe</p>
<p className="text-xs text-zinc-500">Pro Plan</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative scroll-smooth bg-background w-full">

<header className="sticky top-0 z-30 flex items-center justify-between px-4 md:px-6 py-4 glass-panel border-b border-white/5 md:bg-background/80 md:backdrop-blur-xl">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400 hover:text-white pt-1" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
<div>
<h1 className="text-lg md:text-xl font-semibold tracking-tight text-white" id="page-title">Dashboard</h1>
<p className="text-xs text-zinc-500 mt-0.5" id="current-date">Loading...</p>
</div>
</div>
<div className="flex items-center gap-3 md:gap-4">
<button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 whitespace-nowrap" onclick="toggleTaskModal()">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
<span className="hidden md:inline">New Task</span>
<span className="md:hidden">New</span>
</button>
<div className="hidden md:flex w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 items-center justify-center text-xs font-medium text-zinc-400 cursor-pointer hover:border-zinc-500 transition-colors">
                    JD
                </div>
</div>
</header>
<div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6 pb-20 md:pb-6">

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">

<div className="glass-panel p-4 md:p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-3 md:mb-4">
<div className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary">
<iconify-icon icon="lucide:check-circle-2" width="18"></iconify-icon>
</div>
<span className="text-[10px] md:text-xs font-medium text-success bg-success/10 px-1.5 py-0.5 rounded">+12%</span>
</div>
<div className="space-y-1">
<h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight" id="kpi-completed">0</h3>
<p className="text-[10px] md:text-xs text-zinc-400 font-medium">Completed</p>
</div>
</div>

<div className="glass-panel p-4 md:p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-3 md:mb-4">
<div className="p-1.5 md:p-2 rounded-lg bg-accent/10 text-accent">
<iconify-icon icon="lucide:timer" width="18"></iconify-icon>
</div>
<span className="text-[10px] md:text-xs font-medium text-zinc-500">Today</span>
</div>
<div className="space-y-1">
<h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight" id="kpi-time">0h 0m</h3>
<p className="text-[10px] md:text-xs text-zinc-400 font-medium">Focus Time</p>
</div>
</div>

<div className="glass-panel p-4 md:p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-3 md:mb-4">
<div className="p-1.5 md:p-2 rounded-lg bg-success/10 text-success">
<iconify-icon icon="lucide:target" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight" id="kpi-goal">0%</h3>
<p className="text-[10px] md:text-xs text-zinc-400 font-medium">Goal Reached</p>
</div>
</div>

<div className="glass-panel p-4 md:p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-3 md:mb-4">
<div className="p-1.5 md:p-2 rounded-lg bg-warning/10 text-warning">
<iconify-icon icon="lucide:zap" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight" id="kpi-score">0</h3>
<p className="text-[10px] md:text-xs text-zinc-400 font-medium">Score</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass-panel p-4 md:p-6 rounded-xl border border-white/5">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-white">Productivity Trend</h3>
<div className="flex gap-2 items-center">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="text-xs text-zinc-400">7 Days</span>
</div>
</div>
<div className="chart-container h-[200px] md:h-[240px]">
<canvas id="productivityChart"></canvas>
</div>
</div>

<div className="glass-panel p-4 md:p-6 rounded-xl border border-white/5 hidden md:block">
<h3 className="text-sm font-semibold text-white mb-6">Distribution</h3>
<div className="chart-container relative flex items-center justify-center h-[200px] md:h-[240px]">
<canvas id="categoryChart"></canvas>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass-panel p-0 rounded-xl border border-white/5 overflow-hidden flex flex-col h-[500px]">
<div className="p-4 md:p-6 border-b border-white/5 flex justify-between items-center bg-surface/50">
<h3 className="text-sm font-semibold text-white">Tasks</h3>
<div className="flex gap-2">
<button className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white px-2 py-1 rounded border border-white/5 transition-colors flex items-center gap-1" onclick="sortTasks('priority')">
                                Priority <iconify-icon icon="lucide:arrow-down-up" width="10"></iconify-icon>
</button>
<button className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white px-2 py-1 rounded border border-white/5 transition-colors flex items-center gap-1" onclick="sortTasks('status')">
                                Status <iconify-icon icon="lucide:filter" width="10"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-2 space-y-1" id="task-list">

</div>
</div>

<div className="glass-panel p-4 md:p-6 rounded-xl border border-white/5">
<h3 className="text-sm font-semibold text-white mb-6">Efficiency</h3>
<div className="chart-container h-[180px]">
<canvas id="comparisonChart"></canvas>
</div>
<div className="mt-4 p-3 rounded-lg bg-zinc-900/50 border border-white/5">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-primary text-xs" icon="lucide:info"></iconify-icon>
<span className="text-xs font-medium text-zinc-400">Insight</span>
</div>
<p className="text-[11px] md:text-xs text-zinc-500 leading-relaxed">
                            Underestimating tasks by <span className="text-danger font-semibold">~15%</span>.
                        </p>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-[60] hidden" id="task-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop" onclick="toggleTaskModal()"></div>

<div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
<div className="bg-surface border border-white/10 rounded-xl w-full max-w-md p-6 shadow-2xl transform scale-95 transition-all duration-300 pointer-events-auto opacity-0 translate-y-4" id="modal-content">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-white">Create Task</h3>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="toggleTaskModal()"><iconify-icon icon="lucide:x" width="20"></iconify-icon></button>
</div>
<form className="space-y-4" id="task-form">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Task Title</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-primary placeholder-zinc-600 transition-colors" id="t-title" placeholder="e.g. Update Dashboard UI" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Category</label>
<div className="relative">
<select className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-primary appearance-none cursor-pointer" id="t-cat">
<option value="Work">Work</option>
<option value="Personal">Personal</option>
<option value="Learning">Learning</option>
<option value="Health">Health</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-500 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Priority</label>
<div className="relative">
<select className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-primary appearance-none cursor-pointer" id="t-prio">
<option value="High">High</option>
<option value="Medium">Medium</option>
<option value="Low">Low</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-500 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Est. Time (minutes)</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-primary" id="t-est" min="5" required="" type="number" value="30"/>
</div>
<div className="pt-2">
<button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-primary/20 active:scale-[0.98]" type="submit">Add Task</button>
</div>
</form>
</div>
</div>
</div>



    </>
  );
}
