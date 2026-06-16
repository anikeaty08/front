import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const URL = "https://script.google.com/macros/s/AKfycbzksP-4jHhNwI14V6LZe_6WZ-WZ2pO_-OYDpcrbfETIw6aZKvBqOAdDZ0Kat8kgIzhr/exec"; 
    
    let ALL_DATA = [], CURR = null;

    async function loadData() {
        document.getElementById('packageList').innerHTML = '<div class="text-center py-12 text-slate-500 animate-pulse">Syncing Database...</div>';
        document.getElementById('masterTableBody').innerHTML = '<tr><td colspan="6" class="p-8 text-center text-slate-500 animate-pulse">Syncing Database...</td></tr>';
        try {
            const resPkg = await fetch(URL, {method:'POST', body:JSON.stringify({action:'getPackages'})});
            const dPkg = await resPkg.json();
            if(dPkg.result === 'success') { ALL_DATA = dPkg.packages.reverse(); renderInspectionQueue(); renderMasterLog(); }
            loadDashboardStats();
        } catch(e) { console.error(e); }
    }

    function renderInspectionQueue() {
        const list = document.getElementById('packageList'); list.innerHTML = '';
        const pending = ALL_DATA.filter(p => p.status === 'Pending' || p.status === '');
        if(pending.length === 0) { list.innerHTML = '<div class="text-center py-12 text-slate-600 border border-dashed border-slate-700 rounded-xl">No pending packages found.</div>'; return; }
        pending.forEach(p => { list.innerHTML += `<div onclick="openModal('${p.id}')" class="bg-slate-800 border border-slate-700 p-5 rounded-xl flex justify-between items-center cursor-pointer hover:border-emerald-500 hover:bg-slate-750 transition-all group"><div><div class="font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">${p.client}</div><div class="text-xs text-slate-400 mt-1 flex gap-2"><span class="bg-slate-700 px-2 py-0.5 rounded text-slate-300">${p.agent}</span><span>${p.items.length} Items</span><span>${p.date}</span></div></div><div class="text-xl font-bold text-emerald-400">$${p.totalVal.toFixed(2)}</div></div>`; });
    }

    function renderMasterLog() {
        const term = document.getElementById('searchBox').value.toLowerCase();
        const tbody = document.getElementById('masterTableBody'); tbody.innerHTML = '';
        const filtered = ALL_DATA.filter(p => p.client.toLowerCase().includes(term) || p.agent.toLowerCase().includes(term) || (p.status || '').toLowerCase().includes(term));
        if(filtered.length === 0) { tbody.innerHTML = '<tr><td colspan="6" class="p-8 text-center text-slate-500">No records found.</td></tr>'; return; }
        filtered.forEach(p => {
            const statusColor = p.status === 'Issues Found' ? 'text-rose-400' : (p.status === 'Verified' ? 'text-emerald-400' : 'text-slate-400');
            const displayPrice = (parseFloat(p.finalPayout) || parseFloat(p.totalVal) || 0).toFixed(2);
            tbody.innerHTML += `<tr onclick="openModal('${p.id}')" class="interactive border-b border-slate-800 hover:bg-slate-800/50 transition-colors"><td class="p-4 text-slate-400 whitespace-nowrap">${p.date}</td><td class="p-4 font-medium text-white">${p.agent}</td><td class="p-4 text-slate-300">${p.client}</td><td class="p-4 uppercase text-xs font-bold ${statusColor}">${p.status || 'Pending'}</td><td class="p-4 font-bold text-emerald-400 text-right">$${displayPrice}</td><td class="p-4 text-right text-slate-500"><span class="iconify" data-icon="lucide:chevron-right"></span></td></tr>`;
        });
    }

    function openModal(id) {
        CURR = ALL_DATA.find(p => p.id === id); if(!CURR) return;
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('mClient').innerText = CURR.client; document.getElementById('mAgent').innerText = CURR.agent; document.getElementById('mTotal').innerText = CURR.totalVal.toFixed(2); document.getElementById('mStatusBadge').innerText = CURR.status || 'Pending';
        document.getElementById('mItems').innerHTML = CURR.items.map(i => `<div class="flex justify-between border-b border-slate-700 pb-2 mb-2 last:border-0 last:mb-0 last:pb-0"><span class="text-slate-300">${i.itemName} <span class="text-slate-500 text-xs">(x${i.qty})</span></span><span class="text-slate-400">$${i.salePrice}</span></div>`).join('');
        document.getElementById('inpDed').value = CURR.deductions > 0 ? CURR.deductions : ''; document.getElementById('inpNotes').value = CURR.adminNotes || '';
        const startDed = parseFloat(CURR.deductions) || 0;
        const startFinal = parseFloat(CURR.finalPayout) > 0 ? parseFloat(CURR.finalPayout) : (CURR.totalVal - startDed);
        document.getElementById('inpFinal').value = startFinal.toFixed(2);
    }

    function calcFinal() { const ded = parseFloat(document.getElementById('inpDed').value) || 0; document.getElementById('inpFinal').value = (CURR.totalVal - ded).toFixed(2); }
    function calcDed() { const final = parseFloat(document.getElementById('inpFinal').value) || 0; document.getElementById('inpDed').value = (CURR.totalVal - final).toFixed(2); }

    async function save(status) {
        const btn = event.target; const originalText = btn.innerText; btn.innerText = "SAVING..."; btn.disabled = true;
        const ded = parseFloat(document.getElementById('inpDed').value)||0; const notes = document.getElementById('inpNotes').value; const final = parseFloat(document.getElementById('inpFinal').value); const rowIndices = CURR.items.map(i=>i.rowIndex);
        try { await fetch(URL,{method:'POST',body:JSON.stringify({action:'updatePackage',updates:{rowIndices, status, deduction:ded, notes, finalTotal:final}})}); closeModal(); loadData(); } catch(e) { alert("Error saving."); } finally { btn.innerText = originalText; btn.disabled = false; }
    }
    function closeModal() { document.getElementById('modal').classList.add('hidden'); }

    async function loadDashboardStats() {
        try {
            const res = await fetch(URL, {method:'POST', body:JSON.stringify({action:'getDashboardStats'})}); const d = await res.json(); if(d.result !== 'success') return;
            document.getElementById('statClosed').innerText = d.metrics.closed || 0; document.getElementById('statNew').innerText = d.metrics.newClients || 0;
            let weeklyRev = Object.values(d.trend).reduce((a, b) => a + b, 0); document.getElementById('statRev').innerText = "$" + weeklyRev.toFixed(0);
            if(window.myTrendChart) window.myTrendChart.destroy(); if(window.mySourceChart) window.mySourceChart.destroy(); if(window.myAgentChart) window.myAgentChart.destroy();
            window.myTrendChart = new Chart(document.getElementById('trendChart'), {type: 'line', data: {labels: Object.keys(d.trend), datasets: [{ label: 'Profit ($)', data: Object.values(d.trend), borderColor: '#34d399', backgroundColor: 'rgba(52, 211, 153, 0.1)', fill: true, tension: 0.4 }]}, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { grid: { color: '#334155' } }, x: { grid: { display: false } } } }});
            window.mySourceChart = new Chart(document.getElementById('sourceChart'), {type: 'doughnut', data: {labels: Object.keys(d.sources), datasets: [{ data: Object.values(d.sources), backgroundColor: ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'], borderWidth: 0 }]}, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } } }});
            const sortedAgents = Object.entries(d.agents).sort((a,b) => b[1] - a[1]); window.myAgentChart = new Chart(document.getElementById('agentChart'), {type: 'bar', data: {labels: sortedAgents.map(x => x[0]), datasets: [{ label: 'Revenue ($)', data: sortedAgents.map(x => x[1]), backgroundColor: '#6366f1', borderRadius: 4 }]}, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { grid: { color: '#334155' } }, x: { grid: { display: false } } } }});
        } catch(e) { console.error("Chart Error", e); }
    }
    function switchTab(t) { ['dash','inspect','master'].forEach(x => { document.getElementById('view-'+x).classList.add('hidden'); document.getElementById('btn-'+x).className = "px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"; }); document.getElementById('view-'+t).classList.remove('hidden'); document.getElementById('btn-'+t).className = "px-4 py-2 text-sm font-bold text-white bg-slate-700 rounded shadow transition-colors"; if(t !== 'dash' && ALL_DATA.length === 0) loadData(); if(t === 'dash') loadDashboardStats(); }
    loadData();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
<div>
<h1 className="text-2xl font-bold text-white">📦 Admin Portal</h1>
<p className="text-xs text-slate-500">Overview, Inspection &amp; Logs</p>
</div>
<div className="flex gap-2 bg-slate-800 p-1 rounded-lg">
<button className="px-4 py-2 text-sm font-bold text-white bg-slate-700 rounded shadow" id="btn-dash" onclick="switchTab('dash')">Dashboard</button>
<button className="px-4 py-2 text-sm font-bold text-slate-400 hover:text-white" id="btn-inspect" onclick="switchTab('inspect')">Inspection</button>
<button className="px-4 py-2 text-sm font-bold text-slate-400 hover:text-white" id="btn-master" onclick="switchTab('master')">Master Log</button>
</div>
</div>
<div id="view-dash">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<span className="iconify" data-icon="lucide:check-circle" data-width="24"></span></div>
<div>
<div className="text-2xl font-bold text-white" id="statClosed">0</div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Leads Closed</div>
</div>
</div>
<div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:users" data-width="24"></span></div>
<div>
<div className="text-2xl font-bold text-white" id="statNew">0</div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-bold">New Clients</div>
</div>
</div>
<div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:dollar-sign" data-width="24"></span></div>
<div>
<div className="text-2xl font-bold text-white" id="statRev">$0</div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-bold">7-Day Revenue</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
<div className="col-span-1 md:col-span-2 bg-slate-800 p-4 rounded-xl border border-slate-700">
<h3 className="text-sm font-bold text-slate-400 mb-4 uppercase">7-Day Profit Trend</h3>
<div className="relative h-64"><canvas id="trendChart"></canvas></div>
</div>
<div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
<h3 className="text-sm font-bold text-slate-400 mb-4 uppercase">Sales by Source</h3>
<div className="relative h-64"><canvas id="sourceChart"></canvas></div>
</div>
</div>
<div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
<h3 className="text-sm font-bold text-slate-400 mb-4 uppercase">Top Agents (Revenue)</h3>
<div className="relative h-64"><canvas id="agentChart"></canvas></div>
</div>
</div>
<div className="hidden" id="view-inspect">
<div className="flex justify-between items-center mb-4">
<h2 className="text-lg font-bold text-white">Pending Inspection</h2>
<button className="p-2 bg-slate-800 rounded hover:text-white" onclick="loadData()"><span className="iconify" data-icon="lucide:refresh-cw"></span></button>
</div>
<div className="space-y-4" id="packageList">Loading...</div>
</div>
<div className="hidden" id="view-master">
<div className="flex gap-4 mb-4">
<input className="bg-slate-800 border border-slate-700 text-white rounded p-2 w-full outline-none focus:border-emerald-500" id="searchBox" onkeyup="renderMasterLog()" placeholder="Search Agent, Client, or Status..." type="text"/><button className="p-2 bg-slate-800 rounded hover:text-white border border-slate-700" onclick="loadData()"><span className="iconify" data-icon="lucide:refresh-cw"></span></button>
</div>
<div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden overflow-x-auto">
<table className="w-full text-sm text-left text-slate-400">
<thead className="bg-slate-900 text-slate-500 uppercase">
<tr>
<th className="p-4">Date</th>
<th className="p-4">Agent</th>
<th className="p-4">Client</th>
<th className="p-4">Status</th>
<th className="p-4 text-right">Final Payout</th>
<th className="p-4"></th>
</tr>
</thead>
<tbody id="masterTableBody"></tbody>
</table>
</div>
<div className="mt-2 text-xs text-slate-500 text-center">💡 Tip: Click any row to edit the transaction.</div>
</div>
</div>
<div className="hidden fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50" id="modal">
<div className="bg-slate-800 w-full max-w-lg rounded-xl p-6 border border-slate-700 shadow-2xl">
<div className="flex justify-between items-start mb-1">
<h2 className="text-xl font-bold text-white" id="mClient"></h2>
<span className="text-[10px] px-2 py-1 rounded bg-slate-700 uppercase font-bold text-slate-300" id="mStatusBadge"></span>
</div>
<p className="text-xs text-slate-400 mb-4" id="mAgent"></p>
<div className="bg-slate-900/50 p-4 rounded mb-4 max-h-40 overflow-y-auto space-y-2 text-sm border border-slate-700/50" id="mItems">
</div>
<div className="space-y-4 border-t border-slate-700 pt-4">
<div className="flex justify-between font-bold text-slate-400">
<span>Agreed Price:</span><span>$<span id="mTotal">0.00</span></span></div>
<div><label className="text-xs font-bold text-rose-400 uppercase">Deductions / Damage ($)</label><input className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-rose-500 outline-none transition-colors" id="inpDed" oninput="calcFinal()" placeholder="0.00" step="0.01" type="number"/>
</div>
<div><label className="text-xs font-bold text-emerald-400 uppercase">Final Payout ($)</label><input className="w-full bg-slate-900 border border-emerald-500/50 rounded p-3 text-emerald-400 font-bold text-lg focus:border-emerald-400 outline-none transition-colors" id="inpFinal" oninput="calcDed()" placeholder="0.00" step="0.01" type="number"/>
</div>
<div>
<label className="text-xs font-bold text-slate-400 uppercase">Issue Summary (Visible to Agent)</label><textarea className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-indigo-500 outline-none transition-colors" id="inpNotes" placeholder="Explain any changes..." rows="2"></textarea>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-6">
<button className="py-3 bg-rose-600/20 border border-rose-600/50 text-rose-400 font-bold rounded hover:bg-rose-600 hover:text-white transition-colors" onclick="save('Issues Found')">REPORT ISSUES</button><button className="py-3 bg-emerald-600 text-white font-bold rounded hover:bg-emerald-500 transition-colors" onclick="save('Verified')">VERIFY &amp; ACCEPT</button>
</div>
<button className="w-full mt-3 text-xs text-slate-500 hover:text-white transition-colors" onclick="closeModal()">Cancel</button>
</div>
</div>


    </>
  );
}
