import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- MOCK DATA ---
        let db = [
            { sr: 1, url: "technews.com", email: "editor@technews.com", contactedFrom: "John Doe", status: "Agreed", price: 150, agreed: 120, da: 65, pa: 45, spam: 1, dr: 70, atraffic: 45000, straffic: 52000 },
            { sr: 2, url: "healthdaily.org", email: "sarah@healthdaily.org", contactedFrom: "Jane Smith", status: "Pending", price: 200, agreed: 0, da: 40, pa: 30, spam: 0, dr: 35, atraffic: 12000, straffic: 8000 },
            { sr: 3, url: "financetips.io", email: "contact@financetips.io", contactedFrom: "Contact Form", status: "Replied", price: 300, agreed: 0, da: 55, pa: 42, spam: 4, dr: 58, atraffic: 22000, straffic: 19500 },
            { sr: 4, url: "mommyblog.net", email: "info@mommyblog.net", contactedFrom: "LinkedIn", status: "Rejected", price: 50, agreed: 0, da: 25, pa: 20, spam: 12, dr: 15, atraffic: 1500, straffic: 900 },
            { sr: 5, url: "crypto-insider.com", email: "ads@crypto.com", contactedFrom: "John Doe", status: "Published", price: 500, agreed: 450, da: 78, pa: 60, spam: 2, dr: 82, atraffic: 150000, straffic: 180000 },
            { sr: 6, url: "gardeningpro.com", email: "mike@garden.com", contactedFrom: "Jane Smith", status: "Pending", price: 100, agreed: 0, da: 32, pa: 28, spam: 0, dr: 30, atraffic: 5000, straffic: 4200 },
        ];

        const fuseOptions = {
            includeScore: true,
            threshold: 0.4,
            keys: [{ name: 'url', weight: 0.5 }, { name: 'email', weight: 0.3 }, { name: 'status', weight: 0.2 }]
        };
        let fuse;
        let isConnected = false;

        document.addEventListener('DOMContentLoaded', () => {
            fuse = new Fuse(db, fuseOptions);
            renderTable(db);
            updateCount(db.length);
            
            document.getElementById('smart-search').addEventListener('input', handleSearch);
            document.getElementById('filter-status').addEventListener('change', handleSearch);
            document.addEventListener('keydown', (e) => {
                if (e.key === '/') { e.preventDefault(); document.getElementById('smart-search').focus(); }
                if (e.key === 'Escape') { closeDetail(); closeConnectModal(); }
            });
        });

        // --- CONNECT MODAL LOGIC ---
        function openConnectModal() {
            const modal = document.getElementById('connect-modal');
            const backdrop = document.getElementById('connect-backdrop');
            backdrop.classList.remove('hidden');
            modal.classList.remove('hidden');
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                modal.classList.remove('opacity-0', 'scale-95');
                modal.classList.add('opacity-100', 'scale-100');
            }, 10);
            document.getElementById('sheet-url-input').focus();
        }

        function closeConnectModal() {
            const modal = document.getElementById('connect-modal');
            const backdrop = document.getElementById('connect-backdrop');
            modal.classList.remove('opacity-100', 'scale-100');
            modal.classList.add('opacity-0', 'scale-95');
            backdrop.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                backdrop.classList.add('hidden');
            }, 300);
        }

        function performConnect() {
            const btn = document.getElementById('btn-connect-action');
            const originalContent = btn.innerHTML;
            const inputUrl = document.getElementById('sheet-url-input').value;
            
            // Visual loading state
            btn.disabled = true;
            btn.innerHTML = `<div class="loader mr-2"></div> Connecting...`;
            
            // Simulate network request
            setTimeout(() => {
                isConnected = true;
                btn.innerHTML = originalContent;
                btn.disabled = false;
                closeConnectModal();
                
                // Toggle Sidebar State
                document.getElementById('status-disconnected').classList.add('hidden');
                document.getElementById('status-connected').classList.remove('hidden');
                
                // Show Success Toast
                const toast = document.createElement('div');
                toast.className = "fixed bottom-5 right-5 bg-emerald-600 text-white px-4 py-3 rounded shadow-lg text-sm flex items-center gap-2 animate-bounce z-50";
                toast.innerHTML = `<span class="iconify" data-icon="lucide:check-circle"></span> Successfully Connected to Google Sheet`;
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 3000);

            }, 1500);
        }

        function disconnectSheet() {
            if(confirm('Are you sure you want to disconnect?')) {
                isConnected = false;
                document.getElementById('status-disconnected').classList.remove('hidden');
                document.getElementById('status-connected').classList.add('hidden');
                document.getElementById('sheet-url-input').value = '';
            }
        }

        // --- CORE TABLE & SEARCH LOGIC ---
        function handleSearch() {
            const query = document.getElementById('smart-search').value;
            const statusFilter = document.getElementById('filter-status').value;
            let results = db;
            if (query.length > 1) {
                const fuseResults = fuse.search(query);
                results = fuseResults.map(r => r.item);
            }
            if (statusFilter !== 'All') {
                results = results.filter(row => row.status === statusFilter);
            }
            renderTable(results);
        }

        function filterMetrics(type) {
            let filtered = [...db];
            if(type === 'high-da') filtered = filtered.filter(r => r.da >= 50);
            if(type === 'low-spam') filtered = filtered.filter(r => r.spam <= 5);
            if(type === 'agreed') filtered = filtered.filter(r => r.agreed > 0);
            renderTable(filtered);
        }

        function resetFilters() {
            document.getElementById('smart-search').value = '';
            document.getElementById('filter-status').value = 'All';
            renderTable(db);
        }

        function renderTable(data) {
            const tbody = document.getElementById('results-body');
            const emptyState = document.getElementById('empty-state');
            updateCount(data.length);
            tbody.innerHTML = '';
            if (data.length === 0) {
                tbody.parentNode.classList.add('hidden');
                emptyState.classList.remove('hidden');
                return;
            }
            tbody.parentNode.classList.remove('hidden');
            emptyState.classList.add('hidden');
            data.forEach(row => {
                const statusStyles = {
                    'Pending': 'bg-slate-100 text-slate-600',
                    'Replied': 'bg-blue-50 text-blue-600',
                    'Agreed': 'bg-emerald-50 text-emerald-600',
                    'Published': 'bg-purple-50 text-purple-600',
                    'Rejected': 'bg-red-50 text-red-600'
                };
                const statusClass = statusStyles[row.status] || statusStyles['Pending'];
                const tr = document.createElement('tr');
                tr.className = "hover:bg-slate-50 transition-colors cursor-pointer group border-b border-slate-50 last:border-0";
                tr.onclick = () => openDetail(row);
                tr.innerHTML = `
                    <td class="px-6 py-4 text-xs font-mono text-slate-400">#${row.sr}</td>
                    <td class="px-6 py-4">
                        <div class="flex items-center">
                            <img src="https://www.google.com/s2/favicons?domain=${row.url}&sz=32" class="w-4 h-4 mr-3 opacity-70" onerror="this.style.display='none'">
                            <span class="font-medium text-slate-700">${row.url}</span>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusClass}">
                            ${row.status}
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right font-mono text-xs text-slate-500">
                        ${row.price > 0 ? '$'+row.price : '-'}
                    </td>
                    <td class="px-6 py-4 text-right font-mono text-xs font-medium text-emerald-600">
                        ${row.agreed > 0 ? '$'+row.agreed : '-'}
                    </td>
                    <td class="px-6 py-4 text-center">
                        <div class="inline-flex items-center justify-center w-8 h-6 rounded bg-slate-100 text-xs font-semibold text-slate-600 border border-slate-200">
                            ${row.da}
                        </div>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <span class="iconify w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors" data-icon="lucide:chevron-right"></span>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        // --- DETAIL VIEW ---
        function openDetail(row) {
            const panel = document.getElementById('detail-panel');
            const backdrop = document.getElementById('detail-backdrop');
            let html = `
                <div class="h-full flex flex-col">
                    <div class="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
                        <div>
                            <h2 class="text-xl font-semibold text-slate-900 tracking-tight">${row.url}</h2>
                            <span class="text-xs text-slate-400">Sr.# ${row.sr}</span>
                        </div>
                        <button onclick="closeDetail()" class="p-2 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 transition-colors">
                            <span class="iconify w-5 h-5" data-icon="lucide:x"></span>
                        </button>
                    </div>
                    <div class="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50/30">
                        <!-- Status Card -->
                        <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                            <div class="flex justify-between items-start mb-4">
                                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Status & Commercials</span>
                                <span class="iconify w-4 h-4 text-slate-300" data-icon="lucide:briefcase"></span>
                            </div>
                            <div class="grid grid-cols-3 gap-4">
                                <div><div class="text-[10px] text-slate-500 mb-1">Status</div><div class="font-medium text-sm text-slate-900">${row.status}</div></div>
                                <div><div class="text-[10px] text-slate-500 mb-1">Ask Price</div><div class="font-mono text-sm text-slate-900">$${row.price}</div></div>
                                <div><div class="text-[10px] text-slate-500 mb-1">Agreed Price</div><div class="font-mono text-sm font-semibold text-emerald-600">$${row.agreed}</div></div>
                            </div>
                        </div>
                        <!-- Contact Card -->
                        <div class="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                            <div class="flex justify-between items-start mb-4">
                                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Outreach Details</span>
                                <span class="iconify w-4 h-4 text-slate-300" data-icon="lucide:mail"></span>
                            </div>
                            <div class="space-y-4">
                                <div><div class="text-[10px] text-slate-500 mb-1">Admin Email</div><div class="flex items-center gap-2"><div class="font-medium text-sm text-slate-900">${row.email}</div></div></div>
                                <div class="pt-2 border-t border-slate-50"><div class="text-[10px] text-slate-500 mb-1">Contacted By</div><div class="text-sm text-slate-700">${row.contactedFrom}</div></div>
                            </div>
                        </div>
                        <!-- Metrics -->
                        <div>
                            <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-1">Authority Metrics</h3>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="metric-card"><div class="text-[10px] text-slate-400">Moz DA</div><div class="text-lg font-semibold text-slate-800">${row.da}</div></div>
                                <div class="metric-card"><div class="text-[10px] text-slate-400">Moz PA</div><div class="text-lg font-semibold text-slate-800">${row.pa}</div></div>
                                <div class="metric-card border-red-100 bg-red-50/30"><div class="text-[10px] text-red-400">Spam Score</div><div class="text-lg font-semibold text-red-700">${row.spam}%</div></div>
                                <div class="metric-card"><div class="text-[10px] text-slate-400">Ahrefs DR</div><div class="text-lg font-semibold text-slate-800">${row.dr}</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            panel.innerHTML = html;
            backdrop.classList.remove('hidden');
            setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
            panel.classList.remove('translate-x-full');
        }

        function closeDetail() {
            const panel = document.getElementById('detail-panel');
            const backdrop = document.getElementById('detail-backdrop');
            panel.classList.add('translate-x-full');
            backdrop.classList.add('opacity-0');
            setTimeout(() => backdrop.classList.add('hidden'), 300);
        }

        // --- NAVIGATION ---
        function switchView(view) {
            ['dashboard', 'add', 'settings'].forEach(v => {
                document.getElementById('view-'+v).classList.add('hidden');
                document.getElementById('nav-'+v).classList.remove('bg-slate-50', 'text-slate-900', 'ring-1', 'ring-slate-200');
                document.getElementById('nav-'+v).classList.add('text-slate-500');
            });
            document.getElementById('view-'+view).classList.remove('hidden');
            const activeNav = document.getElementById('nav-'+view);
            activeNav.classList.remove('text-slate-500');
            activeNav.classList.add('bg-slate-50', 'text-slate-900', 'ring-1', 'ring-slate-200');
        }

        function updateCount(count) {
            document.getElementById('record-counter').innerText = `${count} Prospects`;
        }

        document.getElementById('add-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const newRow = {
                sr: db.length + 1,
                url: formData.get('url'),
                email: formData.get('email'),
                contactedFrom: formData.get('contactedFrom'),
                status: formData.get('status'),
                price: Number(formData.get('price')),
                agreed: Number(formData.get('agreed')),
                da: Number(formData.get('da')),
                pa: Number(formData.get('pa')),
                spam: Number(formData.get('spam')),
                dr: Number(formData.get('dr')),
                atraffic: Number(formData.get('atraffic')),
                straffic: Number(formData.get('straffic'))
            };
            db.push(newRow);
            fuse.setCollection(db);
            switchView('dashboard');
            renderTable(db);
            const btn = document.createElement('div');
            btn.className = "fixed bottom-5 right-5 bg-slate-900 text-white px-4 py-3 rounded shadow-lg text-sm flex items-center gap-2 animate-bounce";
            btn.innerHTML = `<span class="iconify" data-icon="lucide:check-circle"></span> Prospect Added`;
            document.body.appendChild(btn);
            setTimeout(() => btn.remove(), 2000);
            e.target.reset();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex z-20">
<div>
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white mr-3">
<span className="font-semibold text-xs tracking-tighter">O</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-sm">OutreachOS</span>
</div>
<nav className="p-3 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-slate-50 text-slate-900 ring-1 ring-slate-200 shadow-sm" id="nav-dashboard" onclick="switchView('dashboard')">
<span className="iconify w-4 h-4" data-icon="lucide:layout-list"></span>
                    Master Database
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors" id="nav-add" onclick="switchView('add')">
<span className="iconify w-4 h-4" data-icon="lucide:plus"></span>
                    Add Prospect
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors" id="nav-settings" onclick="switchView('settings')">
<span className="iconify w-4 h-4" data-icon="lucide:code-2"></span>
                    Backend Code
                </button>
</nav>
</div>

<div className="p-4 border-t border-slate-100">

<div id="status-disconnected">
<div className="mb-3 px-1">
<div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">Data Source</div>
<div className="text-xs text-slate-500">Not connected</div>
</div>
<button className="w-full group flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md p-2.5 rounded-md shadow-sm transition-all duration-200" onclick="openConnectModal()">
<span className="iconify w-4 h-4" data-icon="logos:google-icon"></span>
<span className="text-xs font-medium text-slate-700 group-hover:text-slate-900">Connect Sheet</span>
</button>
</div>

<div className="hidden bg-slate-50 rounded p-3 border border-slate-100" id="status-connected">
<div className="flex justify-between items-center mb-2">
<div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Live Sync</div>
<button className="text-[10px] text-red-400 hover:text-red-600" onclick="disconnectSheet()">Disconnect</button>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-emerald-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Google Connected
                </div>
<div className="mt-1 text-[10px] text-slate-400 truncate w-full" id="connected-sheet-name">master_outreach_v1</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<div className="flex-1 flex flex-col h-full" id="view-dashboard">

<header className="bg-white border-b border-slate-200 px-6 py-4">
<div className="max-w-6xl mx-auto space-y-4">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<h1 className="text-lg font-semibold text-slate-900 tracking-tight">Guest Post Directory</h1>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded" id="record-counter">Loading...</span>
</div>
</div>
<div className="flex gap-3">
<div className="relative flex-1 group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" data-icon="lucide:search"></span>
</div>
<input className="block w-full pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all shadow-sm" id="smart-search" placeholder="Smart Search: URLs, email, status (e.g., 'tech crunch pending')" type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="text-[10px] text-slate-400 font-mono bg-white border border-slate-200 px-1 rounded">/</span>
</div>
</div>

<select className="w-40 bg-white border border-slate-200 text-slate-700 text-xs rounded-md focus:ring-slate-900 focus:border-slate-900 block p-2" id="filter-status">
<option value="All">All Statuses</option>
<option value="Pending">Pending</option>
<option value="Replied">Replied</option>
<option value="Agreed">Agreed</option>
<option value="Published">Published</option>
<option value="Rejected">Rejected</option>
</select>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
<button className="whitespace-nowrap px-3 py-1 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50" onclick="filterMetrics('high-da')">High DA (&gt;50)</button>
<button className="whitespace-nowrap px-3 py-1 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50" onclick="filterMetrics('low-spam')">Safe Spam Score (&lt;5%)</button>
<button className="whitespace-nowrap px-3 py-1 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50" onclick="filterMetrics('agreed')">Agreed Deals</button>
<button className="whitespace-nowrap px-3 py-1 text-xs font-medium text-indigo-600 hover:text-indigo-800 ml-auto" onclick="resetFilters()">Reset View</button>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-slate-50/50 p-6">
<div className="max-w-6xl mx-auto">
<div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
<table className="w-full text-left">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider w-16">Sr.#</th>
<th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Website URL</th>
<th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider w-32">Status</th>
<th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-right w-32">Pricing</th>
<th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-right w-32">Agreed</th>
<th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-center w-24">DA</th>
<th className="px-6 py-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm" id="results-body">

</tbody>
</table>
<div className="hidden p-12 text-center" id="empty-state">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 mb-3">
<span className="iconify w-5 h-5 text-slate-400" data-icon="lucide:search-x"></span>
</div>
<p className="text-sm font-medium text-slate-900">No sites found</p>
<p className="text-xs text-slate-500">Try changing your search terms or filters.</p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 flex flex-col h-full bg-slate-50 overflow-y-auto" id="view-add">
<header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10">
<div className="max-w-2xl mx-auto flex items-center justify-between">
<h1 className="text-lg font-semibold text-slate-900">Add New Prospect</h1>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900" onclick="switchView('dashboard')">Cancel</button>
</div>
</header>
<div className="p-6">
<form className="max-w-2xl mx-auto bg-white rounded-lg border border-slate-200 shadow-sm p-8 space-y-8" id="add-form">

<div>
<h3 className="text-sm font-medium text-slate-900 border-b border-slate-100 pb-2 mb-4">Core Information</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="col-span-2">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Website URL <span className="text-red-500">*</span></label>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" name="url" placeholder="domain.com" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Admin Email</label>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" name="email" placeholder="contact@domain.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Contacted From</label>
<select className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" name="contactedFrom">
<option>John Doe (john@agency.com)</option>
<option>Jane Smith (jane@agency.com)</option>
<option>Contact Form</option>
<option>LinkedIn</option>
</select>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-slate-900 border-b border-slate-100 pb-2 mb-4">Status &amp; Deal</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Current Status</label>
<select className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" name="status">
<option value="Pending">Pending</option>
<option value="Replied">Replied</option>
<option value="Agreed">Agreed</option>
<option value="Published">Published</option>
<option value="Rejected">Rejected</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Their Price</label>
<div className="relative">
<span className="absolute left-3 top-2 text-slate-400 text-xs">$</span>
<input className="w-full pl-6 pr-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" name="price" placeholder="0" type="number"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Agreed Price</label>
<div className="relative">
<span className="absolute left-3 top-2 text-slate-400 text-xs">$</span>
<input className="w-full pl-6 pr-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" name="agreed" placeholder="0" type="number"/>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-slate-900 border-b border-slate-100 pb-2 mb-4">SEO Metrics</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div>
<label className="block text-[10px] font-medium text-slate-500 mb-1">Moz DA</label>
<input className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm" name="da" placeholder="0" type="number"/>
</div>
<div>
<label className="block text-[10px] font-medium text-slate-500 mb-1">Moz PA</label>
<input className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm" name="pa" placeholder="0" type="number"/>
</div>
<div>
<label className="block text-[10px] font-medium text-slate-500 mb-1">Spam Score</label>
<input className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm" name="spam" placeholder="0%" type="number"/>
</div>
<div>
<label className="block text-[10px] font-medium text-slate-500 mb-1">Ahrefs DR</label>
<input className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm" name="dr" placeholder="0" type="number"/>
</div>
<div className="col-span-2">
<label className="block text-[10px] font-medium text-slate-500 mb-1">Ahrefs Traffic</label>
<input className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm" name="atraffic" placeholder="0" type="number"/>
</div>
<div className="col-span-2">
<label className="block text-[10px] font-medium text-slate-500 mb-1">Semrush Traffic</label>
<input className="w-full px-2 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm" name="straffic" placeholder="0" type="number"/>
</div>
</div>
</div>
<div className="pt-4 flex justify-end gap-3">
<button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800 transition-colors shadow-sm" type="submit">Save to Database</button>
</div>
</form>
</div>
</div>

<div className="hidden flex-1 flex flex-col h-full bg-slate-50 overflow-y-auto p-6" id="view-settings">
<div className="max-w-4xl mx-auto space-y-6">
<div className="flex items-center justify-between">
<h1 className="text-xl font-semibold text-slate-900">Backend Implementation</h1>
<button className="text-sm text-slate-500 hover:text-slate-900" onclick="switchView('dashboard')">Back to App</button>
</div>
<div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 text-sm text-amber-900">
<span className="iconify w-5 h-5 flex-shrink-0 text-amber-600" data-icon="lucide:alert-circle"></span>
<div>
<strong>Installation:</strong> Copy the code below, go to Google Sheet &gt; Extensions &gt; Apps Script. Paste, Save, and <strong>Deploy as Web App</strong>. Then copy the Deployment URL and click "Connect Sheet" in the sidebar.
                    </div>
</div>
<div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg border border-slate-700">
<div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
<span className="text-xs font-mono text-slate-400">Code.gs</span>
<button className="text-xs text-indigo-400 hover:text-indigo-300">Copy Code</button>
</div>
<pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto">
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('OutreachOS')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('Sheet1'); // Change tab name if needed
  const data = ws.getDataRange().getValues();
  const headers = data.shift();
  
  // Map rows to objects based on your specific headers
  return data.map((row, i) =&gt; {
    return {
      sr: row[0],
      url: row[1],
      email: row[2],
      contactedFrom: row[3],
      status: row[4],
      price: row[5],
      agreed: row[6],
      da: row[7],
      pa: row[8],
      spam: row[9],
      dr: row[10],
      atraffic: row[11],
      straffic: row[12],
      rowIndex: i + 2 // 1-based index + header
    };
  });
}

function addRow(formObject) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('Sheet1');
  const lastSr = ws.getLastRow(); // Simple Sr.# generation
  
  ws.appendRow([
    lastSr,
    formObject.url,
    formObject.email,
    formObject.contactedFrom,
    formObject.status,
    formObject.price,
    formObject.agreed,
    formObject.da,
    formObject.pa,
    formObject.spam,
    formObject.dr,
    formObject.atraffic,
    formObject.straffic
  ]);
  
  return getData(); // Return updated list
}
</pre>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 hidden transition-opacity duration-300" id="detail-backdrop" onclick="closeDetail()"></div>
<div className="fixed inset-y-0 right-0 w-full md:w-[500px] bg-white shadow-2xl z-40 transform translate-x-full transition-transform duration-300 ease-in-out border-l border-slate-200 flex flex-col" id="detail-panel">

</div>

<div className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 hidden transition-opacity duration-300" id="connect-backdrop"></div>
<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-md z-50 hidden transition-all duration-300 scale-95 opacity-0" id="connect-modal">
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-slate-900">Connect Data Source</h3>
<button className="text-slate-400 hover:text-slate-600 transition-colors" onclick="closeConnectModal()">
<span className="iconify w-5 h-5" data-icon="lucide:x"></span>
</button>
</div>
<div className="space-y-6">
<div className="p-4 border border-slate-200 rounded-lg flex items-center justify-between hover:border-slate-300 transition-colors group cursor-pointer bg-slate-50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-full border border-slate-200 flex items-center justify-center shadow-sm">
<span className="iconify w-5 h-5" data-icon="logos:google-icon"></span>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Google Sheets</div>
<div className="text-xs text-slate-500">Read &amp; Write Access</div>
</div>
</div>
<div className="h-2 w-2 rounded-full bg-emerald-500 shadow-emerald-200 shadow-lg"></div>
</div>
<div className="space-y-3">
<label className="block text-xs font-medium text-slate-700">Deployment URL / Script ID</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify w-4 h-4 text-slate-400" data-icon="lucide:link"></span>
</div>
<input className="block w-full pl-10 pr-3 py-2 bg-white border border-slate-200 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all" id="sheet-url-input" placeholder="https://script.google.com/macros/s/..." type="text"/>
</div>
<p className="text-[10px] text-slate-400">
                        Paste the web app URL from your Google Apps Script deployment. 
                        <button className="text-indigo-600 hover:text-indigo-800 underline" onclick="closeConnectModal(); switchView('settings')">Get Code</button>
</p>
</div>
<div className="flex justify-end gap-3 pt-2">
<button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="closeConnectModal()">Cancel</button>
<button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2" id="btn-connect-action" onclick="performConnect()">
<span>Connect Sheet</span>
<span className="iconify w-4 h-4" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
