import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // === DATABASE SIMULATION (localStorage) ===
        const DB_KEY = 'aiTwin_factory_db_v1';
        const defaultDB = {
            energyAutoApply: false,
            maintenanceScheduled: false,
            notifications: [
                { id: 1, text: "High vibration alert generated", time: "10 min ago", unread: true },
                { id: 2, text: "Vision AI model updated to v4.2", time: "2 hrs ago", unread: false }
            ],
            logs: [
                { time: "10:42:05 AM", batch: "#BT-4092", prod: "Gear Box Assm.", status: "Surface Scratch (98%)", ok: false, action: "Routed to manual review" },
                { time: "10:41:12 AM", batch: "#BT-4091", prod: "Gear Box Assm.", status: "Passed", ok: true, action: "Proceeded to packaging" },
                { time: "10:39:55 AM", batch: "#BT-4090", prod: "Gear Box Assm.", status: "Passed", ok: true, action: "Proceeded to packaging" }
            ]
        };

        let db = JSON.parse(localStorage.getItem(DB_KEY));
        if (!db) { db = defaultDB; saveDB(); }

        function saveDB() {
            localStorage.setItem(DB_KEY, JSON.stringify(db));
        }

        // === UI STATE MANAGEMENT ===
        
        // Initialize UI from DB
        function initUI() {
            // Energy Toggle
            const toggleWrapper = document.getElementById('toggle-energy-wrapper');
            const toggleDot = document.getElementById('toggle-energy-dot');
            if (db.energyAutoApply) {
                toggleWrapper.classList.replace('bg-neutral-600', 'bg-emerald-500');
                toggleDot.classList.replace('translate-x-0', 'translate-x-4');
            }

            // Maintenance Alert State
            if (db.maintenanceScheduled) {
                applyMaintenanceState();
            }

            // Populate Logs
            renderLogs();
            updateNotificationBadge();
        }

        // Render Quality Logs
        function renderLogs() {
            const tbody = document.getElementById('quality-logs-body');
            tbody.innerHTML = '';
            db.logs.forEach(log => {
                const tr = document.createElement('tr');
                tr.className = 'border-b border-neutral-800/30 hover:bg-neutral-800/20 transition-colors';
                
                const statusHtml = log.ok 
                    ? `<span class="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> ${log.status}</span>`
                    : `<span class="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-rose-400 bg-rose-400/10 border border-rose-400/20"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> ${log.status}</span>`;

                tr.innerHTML = `
                    <td class="p-4 text-neutral-400 text-xs">${log.time}</td>
                    <td class="p-4 font-medium text-neutral-200">${log.batch}</td>
                    <td class="p-4">${log.prod}</td>
                    <td class="p-4">${statusHtml}</td>
                    <td class="p-4 text-neutral-400 text-xs">${log.action}</td>
                `;
                tbody.appendChild(tr);
            });
        }

        // Apply Maintenance Scheduled State
        function applyMaintenanceState() {
            // Remove suggestion
            const suggestion = document.getElementById('suggestion-maint');
            if(suggestion) suggestion.style.display = 'none';

            // Update Alert Card to safe state
            document.getElementById('predictive-alert-card').classList.replace('border-rose-900/30', 'border-emerald-900/30');
            document.getElementById('alert-icon').classList.replace('text-rose-500', 'text-emerald-500');
            document.getElementById('alert-icon').setAttribute('icon', 'solar:shield-check-linear');
            document.getElementById('alert-title-main').textContent = 'System Optimal';
            
            const badge = document.getElementById('alert-badge');
            badge.textContent = 'Resolved';
            badge.classList.replace('bg-rose-500/10', 'bg-emerald-500/10');
            badge.classList.replace('text-rose-500', 'text-emerald-500');

            document.getElementById('alert-content').innerHTML = `
                <div class="flex items-center justify-center h-20 text-sm text-emerald-400 bg-emerald-950/20 rounded-lg border border-emerald-900/30">
                    <iconify-icon icon="solar:check-read-linear" class="mr-2 text-lg"></iconify-icon> Maintenance Scheduled. Risk mitigated.
                </div>
            `;

            // Fix Twin Status Badge
            const twinBadge = document.getElementById('machine-status-badge');
            twinBadge.textContent = 'Nominal';
            twinBadge.classList.replace('bg-rose-500/10', 'bg-emerald-500/10');
            twinBadge.classList.replace('text-rose-400', 'text-emerald-400');
            twinBadge.classList.replace('ring-rose-500/20', 'ring-emerald-500/20');

            // Fix Bearing Node
            document.getElementById('bearing-node-dot').classList.replace('bg-rose-500', 'bg-emerald-500');
            document.getElementById('bearing-node-dot').classList.replace('shadow-[0_0_10px_rgba(244,63,94,0.5)]', 'shadow-[0_0_10px_rgba(16,185,129,0.5)]');
            document.getElementById('bearing-node-dot').classList.remove('pulse-dot');
            document.getElementById('bearing-node-label').classList.replace('text-rose-400', 'text-emerald-400');
            document.getElementById('bearing-node-label').classList.replace('border-rose-900/50', 'border-emerald-900/50');
            
            // Fix Telemetry Vibration Color
            document.getElementById('val-vib').classList.replace('text-rose-400', 'text-neutral-100');
            document.getElementById('bar-vib').classList.replace('bg-rose-500', 'bg-emerald-500');
            document.getElementById('vib-ping').style.display = 'none';

            // Fix Charts
            document.querySelectorAll('.chart-high').forEach(el => {
                el.classList.replace('bg-rose-500/50', 'bg-neutral-800');
                el.classList.replace('bg-rose-500', 'bg-neutral-800');
                el.classList.replace('border-rose-500', 'border-transparent');
            });
        }

        // === EVENT LISTENERS & INTERACTIVITY ===

        // Approve Maintenance
        document.getElementById('btn-approve-maint')?.addEventListener('click', function(e) {
            const btn = e.target;
            btn.textContent = 'Saving to Database...';
            btn.classList.add('opacity-70', 'cursor-wait');
            
            // Simulate API Call
            setTimeout(() => {
                db.maintenanceScheduled = true;
                saveDB();
                applyMaintenanceState();
                showToast('Database Updated', 'Maintenance scheduled via API.', 'success');
                addNotification('Maintenance request #Req-921 approved.');
            }, 800);
        });

        // Energy Toggle
        document.getElementById('toggle-energy-wrapper').addEventListener('click', function() {
            db.energyAutoApply = !db.energyAutoApply;
            saveDB();
            
            const dot = document.getElementById('toggle-energy-dot');
            if (db.energyAutoApply) {
                this.classList.replace('bg-neutral-600', 'bg-emerald-500');
                dot.classList.replace('translate-x-0', 'translate-x-4');
                showToast('Settings Saved', 'Energy auto-rules enabled.', 'success');
                addNotification('Energy optimization rules set to Auto.');
            } else {
                this.classList.replace('bg-emerald-500', 'bg-neutral-600');
                dot.classList.replace('translate-x-4', 'translate-x-0');
                showToast('Settings Saved', 'Energy auto-rules disabled.', 'info');
            }
        });

        // Navigation Linking
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Remove active from all
                document.querySelectorAll('.nav-link').forEach(l => {
                    l.classList.remove('bg-neutral-800/50', 'text-neutral-50', 'shadow-sm', 'border-neutral-700/50', 'active-link');
                    l.classList.add('text-neutral-400', 'hover:bg-neutral-900', 'border-transparent');
                });
                // Add active to clicked
                this.classList.remove('text-neutral-400', 'hover:bg-neutral-900', 'border-transparent');
                this.classList.add('bg-neutral-800/50', 'text-neutral-50', 'shadow-sm', 'border', 'border-neutral-700/50', 'active-link');
                
                showToast('Navigation', `Loaded ${this.dataset.page} module from server.`, 'info');
                
                // Close mobile menu if open
                document.getElementById('sidebar').classList.add('-translate-x-full');
                document.getElementById('mobile-overlay').classList.add('hidden');
            });
        });

        // Mobile Menu
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const closeSidebar = document.getElementById('close-sidebar');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('mobile-overlay');

        function toggleMenu() {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }
        mobileBtn.addEventListener('click', toggleMenu);
        closeSidebar.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Toast System
        function showToast(title, message, type = 'info') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            const icon = type === 'success' ? '<iconify-icon icon="solar:check-circle-linear" class="text-emerald-400 text-lg"></iconify-icon>' : '<iconify-icon icon="solar:info-circle-linear" class="text-blue-400 text-lg"></iconify-icon>';
            
            toast.className = 'bg-neutral-900 border border-neutral-700/50 shadow-xl rounded-lg p-3 flex gap-3 items-start min-w-[280px] max-w-sm toast-enter pointer-events-auto backdrop-blur-md';
            toast.innerHTML = `
                <div class="mt-0.5">${icon}</div>
                <div>
                    <h4 class="text-sm font-medium text-neutral-100">${title}</h4>
                    <p class="text-xs text-neutral-400 mt-0.5">${message}</p>
                </div>
            `;
            
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.replace('toast-enter', 'toast-exit');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        function simulateBackendAction(msg) {
            showToast('Backend Request', msg, 'info');
        }

        function showNodeDetails(name, desc) {
            showToast(`Node: ${name}`, desc, 'info');
        }

        // Notification System
        function addNotification(text) {
            db.notifications.unshift({ id: Date.now(), text, time: "Just now", unread: true });
            saveDB();
            updateNotificationBadge();
        }

        function updateNotificationBadge() {
            const badge = document.getElementById('notification-badge');
            const unreadCount = db.notifications.filter(n => n.unread).length;
            badge.style.display = unreadCount > 0 ? 'block' : 'none';
        }

        function toggleNotifications() {
            const drop = document.getElementById('notification-dropdown');
            drop.classList.toggle('hidden');
            drop.classList.toggle('flex');
            
            if(!drop.classList.contains('hidden')){
                renderNotifications();
                // Mark as read
                db.notifications.forEach(n => n.unread = false);
                saveDB();
                updateNotificationBadge();
            }
        }

        function renderNotifications() {
            const list = document.getElementById('notification-list');
            if (db.notifications.length === 0) {
                list.innerHTML = '<div class="p-4 text-center text-xs text-neutral-500">No notifications</div>';
                return;
            }
            list.innerHTML = db.notifications.map(n => `
                <div class="p-3 border-b border-neutral-800/30 hover:bg-neutral-800/20 transition-colors">
                    <p class="text-xs text-neutral-200">${n.text}</p>
                    <p class="text-[10px] text-neutral-500 mt-1">${n.time}</p>
                </div>
            `).join('');
        }

        function clearNotifications() {
            db.notifications = [];
            saveDB();
            renderNotifications();
            toggleNotifications(); // close
            showToast('Cleared', 'Database notifications truncated.', 'success');
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            const drop = document.getElementById('notification-dropdown');
            if(!drop.classList.contains('hidden') && !e.target.closest('.relative')) {
                drop.classList.add('hidden');
                drop.classList.remove('flex');
            }
        });

        // === LIVE DATA TELEMETRY SIMULATION ===
        let baseTemp = 85.0;
        let baseVib = db.maintenanceScheduled ? 1.2 : 4.2;
        let baseSpeed = 12000;
        let baseEnergy = 412;

        setInterval(() => {
            // Recalculate bases if state changed
            baseVib = db.maintenanceScheduled ? 1.2 : 4.2;
            
            // Random fluctuation
            const temp = (baseTemp + (Math.random() * 2 - 1)).toFixed(1);
            const vib = (baseVib + (Math.random() * 0.4 - 0.2)).toFixed(1);
            const speed = Math.floor(baseSpeed + (Math.random() * 200 - 100));
            const energy = Math.floor(baseEnergy + (Math.random() * 10 - 5));

            document.getElementById('val-temp').textContent = `${temp}°C`;
            document.getElementById('bar-temp').style.width = `${Math.min(100, (temp / 100) * 100)}%`;

            document.getElementById('val-vib').textContent = `${vib} mm/s`;
            document.getElementById('bar-vib').style.width = `${Math.min(100, (vib / 5) * 100)}%`;

            document.getElementById('val-speed').textContent = `${speed.toLocaleString()} RPM`;
            document.getElementById('stat-energy').textContent = energy;

            // Occasional latency spike
            if(Math.random() > 0.8) {
                document.getElementById('stat-latency').textContent = (8.4 + Math.random() * 4).toFixed(1);
            } else {
                document.getElementById('stat-latency').textContent = '8.4';
            }

        }, 2000);

        // Run Init
        initUI();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm z-30 hidden md:hidden transition-opacity" id="mobile-overlay"></div>

<aside className="fixed md:static inset-y-0 left-0 w-64 border-r border-neutral-800/60 bg-neutral-950/95 backdrop-blur-md flex flex-col justify-between z-40 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out" id="sidebar">
<div>

<div className="h-16 flex items-center justify-between px-6 border-b border-neutral-800/60">
<span className="text-neutral-50 font-semibold text-lg tracking-tighter flex items-center gap-2">
<iconify-icon className="text-xl text-neutral-400" icon="solar:cpu-bolt-linear"></iconify-icon>
                    AITWIN
                </span>
<button className="md:hidden text-neutral-400 hover:text-neutral-50 p-1" id="close-sidebar">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<nav className="p-4 space-y-1 text-sm font-medium" id="main-nav">
<a className="nav-link active-link flex items-center gap-3 px-3 py-2 rounded-md bg-neutral-800/50 text-neutral-50 shadow-sm border border-neutral-700/50 transition-colors" data-page="overview" href="#">
<iconify-icon className="text-lg" icon="solar:widget-2-linear"></iconify-icon>
                    Overview
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-50 hover:bg-neutral-900 transition-colors" data-page="twins" href="#">
<iconify-icon className="text-lg" icon="solar:server-square-linear"></iconify-icon>
                    Digital Twins
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-50 hover:bg-neutral-900 transition-colors" data-page="maintenance" href="#">
<iconify-icon className="text-lg" icon="solar:shield-warning-linear"></iconify-icon>
                    Predictive Maint.
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-50 hover:bg-neutral-900 transition-colors" data-page="quality" href="#">
<iconify-icon className="text-lg" icon="solar:scanner-linear"></iconify-icon>
                    Quality Inspection
                </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-md text-neutral-400 hover:text-neutral-50 hover:bg-neutral-900 transition-colors" data-page="sustainability" href="#">
<iconify-icon className="text-lg" icon="solar:leaf-linear"></iconify-icon>
                    Sustainability
                </a>
</nav>
</div>

<div className="p-4 border-t border-neutral-800/60">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-neutral-400 hover:text-neutral-50 hover:bg-neutral-900 transition-colors" onclick="simulateBackendAction('System settings synced')">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
                System Config
            </button>
<div className="mt-4 flex items-center gap-3 px-3 cursor-pointer hover:bg-neutral-900/50 p-2 -mx-2 rounded-md transition-colors" onclick="simulateBackendAction('User profile loaded')">
<div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-semibold text-neutral-300 border border-neutral-700">
                    FM
                </div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-neutral-200 leading-tight">Sarah Jenkins</span>
<span className="text-xs text-neutral-500">Factory Manager</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/20 via-neutral-950 to-neutral-950">

<header className="h-16 border-b border-neutral-800/60 flex items-center justify-between px-6 sticky top-0 z-20 backdrop-blur-md bg-neutral-950/80">
<div className="flex items-center gap-4">
<button className="md:hidden text-neutral-400 hover:text-neutral-50 p-1" id="mobile-menu-btn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<h1 className="text-lg font-semibold text-neutral-100 tracking-tight">Smart Factory Dashboard</h1>
<span className="hidden sm:inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 pulse-dot"></span>
                    System Operational
                </span>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<button className="text-neutral-400 hover:text-neutral-50 transition-colors p-1" onclick="toggleNotifications()">
<iconify-icon className="text-xl" icon="solar:bell-bing-linear"></iconify-icon>
</button>

<span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-neutral-950 pulse-dot" id="notification-badge"></span>

<div className="absolute right-0 mt-2 w-64 bg-neutral-900 border border-neutral-800/60 rounded-xl shadow-xl hidden flex-col overflow-hidden z-50" id="notification-dropdown">
<div className="p-3 border-b border-neutral-800/60 text-xs font-semibold text-neutral-200">Notifications</div>
<div className="max-h-48 overflow-y-auto" id="notification-list">

</div>
<button className="p-2 text-center text-xs text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800/50 transition-colors" onclick="clearNotifications()">Clear All</button>
</div>
</div>
</div>
</header>

<div className="p-6 max-w-7xl mx-auto w-full space-y-6 pb-20">
<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-4 text-sm text-neutral-400 leading-relaxed text-center sm:text-left shadow-sm">
                Our solution integrates <span className="text-neutral-200 font-medium">Industrial Edge AI</span>, <span className="text-neutral-200 font-medium">Digital Twin</span> technology, <span className="text-neutral-200 font-medium">Predictive Maintenance</span>, <span className="text-neutral-200 font-medium">Automated Quality Inspection</span>, and <span className="text-neutral-200 font-medium">Sustainable Manufacturing</span> to create a comprehensive smart factory system.
            </div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-neutral-900/50 border border-neutral-800/60 rounded-xl p-4 shadow-sm transition-all hover:bg-neutral-800/40 cursor-pointer" onclick="simulateBackendAction('Fetching edge node diagnostics...')">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Edge Latency</span>
<iconify-icon className="text-neutral-400" icon="solar:transfer-horizontal-linear"></iconify-icon>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-neutral-100 tracking-tight" id="stat-latency">8.4</span>
<span className="text-sm text-neutral-500">ms</span>
</div>
<div className="mt-1 text-xs text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon>
                        Ultra-low (Instant Decision)
                    </div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800/60 rounded-xl p-4 shadow-sm transition-all hover:bg-neutral-800/40 cursor-pointer" onclick="simulateBackendAction('Refreshing smart grid metrics...')">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Energy Usage</span>
<iconify-icon className="text-neutral-400" icon="solar:leaf-linear"></iconify-icon>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-neutral-100 tracking-tight" id="stat-energy">412</span>
<span className="text-sm text-neutral-500">kW/h</span>
</div>
<div className="mt-1 text-xs text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon>
                        12% optimized via AI
                    </div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800/60 rounded-xl p-4 shadow-sm transition-all hover:bg-neutral-800/40 cursor-pointer" onclick="simulateBackendAction('Loading latest defect logs from vision API...')">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Defect Rate</span>
<iconify-icon className="text-neutral-400" icon="solar:scanner-linear"></iconify-icon>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-neutral-100 tracking-tight" id="stat-defect">0.08</span>
<span className="text-sm text-neutral-500">%</span>
</div>
<div className="mt-1 text-xs text-neutral-400 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                        Automated Inspection ON
                    </div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800/60 rounded-xl p-4 shadow-sm transition-all hover:bg-neutral-800/40 cursor-pointer" onclick="simulateBackendAction('Recalculating global OEE score...')">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">OEE Score</span>
<iconify-icon className="text-neutral-400" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-neutral-100 tracking-tight" id="stat-oee">94.2</span>
<span className="text-sm text-neutral-500">%</span>
</div>
<div className="mt-1 w-full bg-neutral-800 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500" id="bar-oee" style={{width: '94.2%'}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 bg-neutral-900/50 border border-neutral-800/60 rounded-xl flex flex-col shadow-sm overflow-hidden">
<div className="p-4 border-b border-neutral-800/60 flex items-center justify-between bg-neutral-900/80">
<div>
<h2 className="text-base font-semibold text-neutral-100 tracking-tight">Digital Twin: Assembly Line CNC-Alpha</h2>
<p className="text-xs text-neutral-500 mt-0.5">Real-time edge telemetry synchronization</p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400">Status:</span>
<span className="inline-flex items-center rounded bg-rose-500/10 px-2 py-0.5 text-xs font-medium text-rose-400 ring-1 ring-inset ring-rose-500/20 transition-colors" id="machine-status-badge">
                                Warning State
                            </span>
</div>
</div>
<div className="p-6 flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 relative">

<div className="relative flex items-center justify-center border border-dashed border-neutral-700/50 rounded-lg bg-neutral-950/30 p-4 aspect-video md:aspect-square">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative w-48 h-48">
<div className="absolute inset-0 border-2 border-neutral-700 rounded-lg"></div>
<div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border border-neutral-600 bg-neutral-800/50 rounded"></div>

<button className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer hover:scale-110 transition-transform" onclick="showNodeDetails('Spindle Node', 'Operating optimally. RPM steady.')">
<div className="h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-neutral-950 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<div className="mt-2 text-[10px] font-medium text-neutral-400 bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800">Spindle</div>
</button>
<button className="absolute bottom-0 right-1/4 translate-y-1/2 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform z-10" id="bearing-node" onclick="showNodeDetails('Bearing B2', 'High vibration detected. Risk of failure in 48h.')">
<div className="h-3 w-3 rounded-full bg-rose-500 ring-4 ring-neutral-950 shadow-[0_0_10px_rgba(244,63,94,0.5)] pulse-dot transition-colors" id="bearing-node-dot"></div>
<div className="mt-2 text-[10px] font-medium text-rose-400 bg-neutral-900 px-1.5 py-0.5 rounded border border-rose-900/50 transition-colors" id="bearing-node-label">Bearing B2</div>
</button>
<button className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform" onclick="showNodeDetails('Cooling System', 'Coolant pressure nominal. Temp regulating.')">
<div className="h-3 w-3 rounded-full bg-blue-500 ring-4 ring-neutral-950 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="mt-2 text-[10px] font-medium text-neutral-400 bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800">Cooling</div>
</button>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-end border-b border-neutral-800 pb-2">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Edge Telemetry Stream</h3>
<span className="text-[10px] text-neutral-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Live Socket</span>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-neutral-400 flex items-center gap-1"><iconify-icon icon="solar:temperature-linear"></iconify-icon> Temperature</span>
<span className="text-neutral-100 font-medium" id="val-temp">85.0°C</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-1">
<div className="bg-amber-500 h-1 rounded-full transition-all duration-300" id="bar-temp" style={{width: '85%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-neutral-400 flex items-center gap-1"><iconify-icon icon="solar:activity-linear"></iconify-icon> Vibration (RMS)</span>
<span className="text-rose-400 font-medium transition-colors" id="val-vib">4.2 mm/s</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-1">
<div className="bg-rose-500 h-1 rounded-full relative transition-all duration-300" id="bar-vib" style={{width: '92%'}}>
<span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-rose-200 rounded-full animate-ping transition-colors" id="vib-ping"></span>
</div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-neutral-400 flex items-center gap-1"><iconify-icon icon="solar:settings-linear"></iconify-icon> Spindle Speed</span>
<span className="text-neutral-100 font-medium" id="val-speed">12,000 RPM</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-1">
<div className="bg-blue-500 h-1 rounded-full transition-all duration-300" id="bar-speed" style={{width: '60%'}}></div>
</div>
</div>

<div className="pt-4 mt-4 border-t border-neutral-800/50">
<span className="text-xs text-neutral-500 mb-2 block">Vibration Trend (Last 1hr)</span>
<div className="h-12 flex items-end gap-1" id="vibration-chart">
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[35%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[38%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[75%]"></div>
<div className="chart-high w-full bg-rose-500/50 border-t border-rose-500 rounded-t-sm h-[95%] transition-colors"></div>
<div className="chart-high w-full bg-rose-500/50 border-t border-rose-500 rounded-t-sm h-[90%] transition-colors"></div>
<div className="chart-high w-full bg-rose-500 rounded-t-sm h-[100%] relative group transition-colors">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-neutral-800 text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">Peak</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6 flex flex-col">

<div className="bg-neutral-900/50 border border-rose-900/30 rounded-xl flex flex-col shadow-sm flex-1 transition-all duration-300" id="predictive-alert-card">
<div className="p-4 border-b border-neutral-800/60 bg-neutral-900/80 flex justify-between items-center">
<h2 className="text-sm font-semibold text-neutral-100 flex items-center gap-2 tracking-tight">
<iconify-icon className="text-rose-500 text-lg" icon="solar:shield-warning-linear" id="alert-icon"></iconify-icon>
<span id="alert-title-main">Predictive Alert</span>
</h2>
<span className="text-xs text-rose-500 font-medium bg-rose-500/10 px-1.5 py-0.5 rounded transition-colors" id="alert-badge">High Risk</span>
</div>
<div className="p-4 space-y-4" id="alert-content">
<div>
<h3 className="text-sm font-medium text-neutral-200">Bearing B2 Failure Prediction</h3>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">ML model analyzing edge vibration data detects anomalous patterns matching historical bearing degradation.</p>
</div>
<div className="bg-neutral-950/50 p-3 rounded-lg border border-neutral-800/50">
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-500">Est. Time to Failure:</span>
<span className="text-rose-400 font-semibold">~48 Hours</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-neutral-500">Confidence Score:</span>
<span className="text-neutral-200">92%</span>
</div>
</div>
</div>
</div>

<div className="bg-[linear-gradient(110deg,#171717,45%,#1e1e1e,55%,#171717)] bg-[length:200%_100%] animate-[shimmer_8s_infinite] border border-blue-900/30 rounded-xl flex flex-col shadow-sm flex-1">
<div className="p-4 border-b border-neutral-800/60 bg-neutral-900/80 flex justify-between items-center">
<h2 className="text-sm font-semibold text-neutral-100 flex items-center gap-2 tracking-tight">
<iconify-icon className="text-blue-400 text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
                                AI Recommendations
                            </h2>
<button className="text-xs text-neutral-500 hover:text-neutral-300" onclick="simulateBackendAction('Regenerating AI suggestions...')"><iconify-icon icon="solar:refresh-linear"></iconify-icon></button>
</div>
<div className="p-4 space-y-3" id="ai-suggestions">

<div className="group relative flex gap-3 p-3 rounded-lg hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-neutral-700/50" id="suggestion-maint">
<div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
<span className="text-[10px] text-blue-400 font-medium">1</span>
</div>
<div className="flex-1">
<p className="text-sm text-neutral-200 font-medium">Schedule Maintenance</p>
<p className="text-xs text-neutral-400 mt-1">Automatically schedule bearing replacement for M-04 during off-peak hours (02:00 AM).</p>
<button className="mt-3 text-xs bg-neutral-100 text-neutral-900 px-3 py-1.5 rounded-md font-medium hover:bg-white transition-colors w-full sm:w-auto" id="btn-approve-maint">Approve Action</button>
</div>
</div>

<div className="group relative flex gap-3 p-3 rounded-lg hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-neutral-700/50">
<div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<span className="text-[10px] text-emerald-400 font-medium">2</span>
</div>
<div className="flex-1">
<p className="text-sm text-neutral-200 font-medium">Optimize Energy</p>
<p className="text-xs text-neutral-400 mt-1">Reduce cooling system speed by 15%. Ambient temp allows optimization safely.</p>
<div className="mt-3 flex items-center gap-2">
<div className="relative inline-block w-8 h-4 rounded-full cursor-pointer transition-colors duration-200 bg-neutral-600" id="toggle-energy-wrapper">
<span className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full transition-transform duration-200 translate-x-0" id="toggle-energy-dot"></span>
</div>
<span className="text-xs text-neutral-500" id="toggle-label">Auto-apply rules</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800/60 rounded-xl overflow-hidden shadow-sm">
<div className="p-4 border-b border-neutral-800/60 flex justify-between items-center bg-neutral-900/80">
<h2 className="text-sm font-semibold text-neutral-100 tracking-tight">Automated Quality Inspection Log</h2>
<button className="text-xs text-neutral-400 hover:text-neutral-200 flex items-center gap-1 transition-colors" onclick="simulateBackendAction('Downloading complete log CSV...')">Export DB <iconify-icon icon="solar:download-linear"></iconify-icon></button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="border-b border-neutral-800/50 text-xs text-neutral-500 uppercase tracking-wider">
<th className="p-4 font-medium">Time</th>
<th className="p-4 font-medium">Batch ID</th>
<th className="p-4 font-medium">Product</th>
<th className="p-4 font-medium">AI Vision Status</th>
<th className="p-4 font-medium">Action Taken</th>
</tr>
</thead>
<tbody className="text-sm text-neutral-300" id="quality-logs-body">

</tbody>
</table>
</div>
</div>
</div>
</main>

<div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>


    </>
  );
}
