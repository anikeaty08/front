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



        const services = ['FLEXCEL NX', 'KODAK NX', 'ESKO CDI', 'THERMAL'];
        const thicknesses = ['1.14 mm', '1.70 mm', '2.84 mm', '0.76 mm'];
        const companies = [
            { name: 'Acme Corp', users: ['Sarah J.', 'Mike R.'] },
            { name: 'Global Bev', users: ['David L.', 'Emma W.'] },
            { name: 'PrintFast', users: ['Tom H.'] },
            { name: 'PackPro', users: ['Chris B.', 'Anna K.'] }
        ];
        
        const statuses = [
            { label: 'Processing', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', dot: 'bg-blue-500', ping: true },
            { label: 'Ready', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', dot: 'bg-emerald-500', ping: false },
            { label: 'Pending', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', dot: 'bg-amber-500', ping: false },
            { label: 'Plating', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', dot: 'bg-purple-500', ping: false }
        ];

        const descriptions = [
            "High priority packaging run for summer campaign. Ensure strict adherence to brand colors.",
            "Reprint of SKU #8821 with updated nutrition facts. Standard turnaround.",
            "New product launch labels. Requires stochastic screening for fine detail.",
            "Corrugated box print, simple 2-color job with heavy coverage."
        ];

        const generateOrders = () => {
            let orders = [];
            for (let i = 0; i < 20; i++) {
                const company = companies[Math.floor(Math.random() * companies.length)];
                const user = company.users[Math.floor(Math.random() * company.users.length)];
                const status = statuses[Math.floor(Math.random() * statuses.length)];
                const date = new Date();
                date.setMinutes(date.getMinutes() - Math.floor(Math.random() * 400));

                orders.push({
                    id: `ORD-${8920 - i}`,
                    company: company.name,
                    user: user,
                    status: status,
                    service: services[Math.floor(Math.random() * services.length)],
                    thickness: thicknesses[Math.floor(Math.random() * thicknesses.length)],
                    width: 200 + Math.floor(Math.random() * 800),
                    height: 200 + Math.floor(Math.random() * 600),
                    time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    fileName: `print_job_${8920 - i}_v2.pdf`,
                    expanded: false,
                    description: descriptions[Math.floor(Math.random() * descriptions.length)],
                    logs: [
                        { time: '10 mins ago', text: 'Output generated', active: true },
                        { time: '25 mins ago', text: 'RIP Processing completed', active: true },
                        { time: '30 mins ago', text: 'Trapping applied (0.15mm)', active: false },
                        { time: '1 hour ago', text: 'File passed preflight check', active: false }
                    ],
                    colors: [
                        { name: 'Cyan', angle: 7.5, lpi: 150, advance: 10, stochastic: false, pureflexo: true, reverse: false },
                        { name: 'Magenta', angle: 37.5, lpi: 150, advance: 10, stochastic: false, pureflexo: true, reverse: false },
                        { name: 'Yellow', angle: 82.5, lpi: 150, advance: 10, stochastic: false, pureflexo: true, reverse: false },
                        { name: 'Black', angle: 67.5, lpi: 150, advance: 20, stochastic: true, pureflexo: false, reverse: false },
                        { name: 'PMS 185', angle: 45, lpi: '-', advance: 0, stochastic: false, pureflexo: false, reverse: true }
                    ]
                });
            }
            return orders;
        };

        const orders = generateOrders();
        const tbody = document.getElementById('orders-table-body');

        function renderTable() {
            tbody.innerHTML = '';
            orders.forEach((order, index) => {
                // Main Row
                const row = document.createElement('tr');
                row.className = 'group bg-[#141414] hover:bg-white/[0.02] transition-colors cursor-pointer border-b border-white/5 last:border-0';
                row.onclick = (e) => {
                    if (e.target.closest('button') && !e.target.closest('.toggle-btn')) return;
                    if (e.target.closest('a')) return;
                    toggleExpand(index);
                };

                const pingHtml = order.status.ping ? 
                    `<span class="animate-ping absolute inline-flex h-full w-full rounded-full ${order.status.color.replace('text-', 'bg-')} opacity-75"></span>` : '';

                row.innerHTML = `
                <td class="py-3 pl-4 pr-2 align-middle">
                    <button class="toggle-btn p-1 rounded text-zinc-600 hover:text-white hover:bg-white/10 transition-all focus:outline-none ${order.expanded ? 'rotate-90 text-white' : ''}">
                        <iconify-icon icon="solar:alt-arrow-right-linear" stroke-width="1.5"></iconify-icon>
                    </button>
                </td>
                <td class="py-3 px-4 relative">
                    ${order.expanded ? `<div class="absolute left-0 top-3 bottom-3 w-[3px] ${order.status.dot} rounded-r-full"></div>` : ''}
                    <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${order.status.bg} ${order.status.border}">
                        <span class="relative flex h-1.5 w-1.5">
                            ${pingHtml}
                            <span class="relative inline-flex rounded-full h-1.5 w-1.5 ${order.status.dot}"></span>
                        </span>
                        <span class="text-[10px] font-medium ${order.status.color}">${order.status.label}</span>
                    </div>
                </td>
                <td class="py-3 px-4">
                    <span class="text-[11px] text-zinc-300 font-medium">Today</span>
                    <span class="text-[10px] text-zinc-500 block font-mono mt-0.5">${order.time}</span>
                </td>
                <td class="py-3 px-4">
                    <span class="font-mono text-[11px] text-zinc-400 group-hover:text-pink-400 transition-colors">#${order.id}</span>
                </td>
                <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                        <div class="w-7 h-7 rounded bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 flex items-center justify-center text-[9px] font-bold text-zinc-400 shrink-0 uppercase">
                            ${order.company.substring(0, 2)}
                        </div>
                        <div class="flex flex-col">
                            <a href="#" class="text-xs font-medium text-zinc-200 hover:text-pink-400 hover:underline transition-colors">${order.company}</a>
                            <a href="#" class="text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1">
                                <iconify-icon icon="solar:user-linear" class="text-[10px]"></iconify-icon> ${order.user}
                            </a>
                        </div>
                    </div>
                </td>
                <td class="py-3 px-4">
                    <span class="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-zinc-400 border border-white/10 group-hover:border-white/20 transition-colors">${order.service}</span>
                </td>
                <td class="py-3 px-4 font-mono text-[11px] text-zinc-400">${order.thickness}</td>
                <td class="py-3 px-4 text-[11px] text-zinc-400 group-hover:text-white transition-colors">
                    ${order.width} x ${order.height} mm
                </td>
                <td class="py-3 px-4 text-right">
                   <div class="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button class="p-1.5 text-zinc-500 hover:text-white hover:bg-white/10 rounded transition-colors" title="Download">
                         <iconify-icon icon="solar:download-linear" stroke-width="1.5"></iconify-icon>
                      </button>
                      <button class="p-1.5 text-zinc-500 hover:text-pink-400 hover:bg-pink-500/10 rounded transition-colors" title="Edit">
                         <iconify-icon icon="solar:pen-linear" stroke-width="1.5"></iconify-icon>
                      </button>
                   </div>
                </td>
            `;
                tbody.appendChild(row);

                // Expanded Row
                if (order.expanded) {
                    const expandedRow = document.createElement('tr');
                    expandedRow.className = 'bg-[#0c0c0c] shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] fade-in';
                    expandedRow.innerHTML = `
                    <td colspan="9" class="p-0 border-b border-white/5">
                        <div class="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                            
                            <!-- Left: Info -->
                            <div class="p-6 w-full lg:w-[280px] shrink-0">
                                <h4 class="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-4">Order Info</h4>
                                <div class="flex items-center gap-3 mb-5 p-3 rounded-lg bg-[#141414] border border-white/5">
                                    <div class="w-10 h-10 rounded bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20">
                                        <iconify-icon icon="solar:file-text-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                                    </div>
                                    <div class="overflow-hidden">
                                        <p class="text-xs font-medium text-white truncate w-32" title="${order.fileName}">${order.fileName}</p>
                                        <p class="text-[10px] text-zinc-500">PDF • 24.5MB</p>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <div>
                                        <span class="text-[10px] text-zinc-500 block mb-1">Description</span>
                                        <p class="text-[11px] text-zinc-300 leading-relaxed">${order.description}</p>
                                    </div>
                                    <div class="grid grid-cols-2 gap-4">
                                         <div>
                                            <span class="text-[10px] text-zinc-500 block">Barcode</span>
                                            <span class="text-[11px] text-zinc-300 font-mono">UPC-A</span>
                                        </div>
                                         <div>
                                            <span class="text-[10px] text-zinc-500 block">Substrate</span>
                                            <span class="text-[11px] text-zinc-300">White Film</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Middle: Color Table -->
                            <div class="p-6 flex-1">
                                <h4 class="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-4">Color Separations</h4>
                                <div class="border border-white/5 rounded-lg overflow-hidden bg-[#141414]">
                                    <table class="w-full text-left">
                                        <thead class="bg-white/[0.02] border-b border-white/5 text-[10px] text-zinc-500 font-medium">
                                            <tr>
                                                <th class="px-4 py-2 font-normal">Ink</th>
                                                <th class="px-4 py-2 font-normal">Name</th>
                                                <th class="px-4 py-2 font-normal">Angle</th>
                                                <th class="px-4 py-2 font-normal">LPI</th>
                                                <th class="px-4 py-2 font-normal text-center">Advance</th>
                                                <th class="px-4 py-2 font-normal text-center">Stochastic</th>
                                                <th class="px-4 py-2 font-normal text-center">PureFlexo</th>
                                                <th class="px-4 py-2 font-normal text-right">Reverse</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-white/5 text-[11px]">
                                            ${order.colors.map(c => `
                                                <tr class="hover:bg-white/[0.02]">
                                                    <td class="px-4 py-2">
                                                        <div class="w-3 h-3 rounded-full border border-white/10 shadow-sm" style="background-color: ${getColorHex(c.name)}"></div>
                                                    </td>
                                                    <td class="px-4 py-2 font-medium text-zinc-300">${c.name}</td>
                                                    <td class="px-4 py-2 text-zinc-400 font-mono">${c.angle}°</td>
                                                    <td class="px-4 py-2 text-zinc-400 font-mono">${c.lpi}</td>
                                                    <td class="px-4 py-2 text-zinc-400 font-mono text-center">${c.advance}</td>
                                                    <td class="px-4 py-2 text-center">
                                                        ${c.stochastic ? '<iconify-icon icon="solar:check-square-linear" class="text-pink-500 text-sm"></iconify-icon>' : '<iconify-icon icon="solar:close-square-linear" class="text-zinc-700 text-sm"></iconify-icon>'}
                                                    </td>
                                                    <td class="px-4 py-2 text-center">
                                                         ${c.pureflexo ? '<iconify-icon icon="solar:check-square-linear" class="text-pink-500 text-sm"></iconify-icon>' : '<iconify-icon icon="solar:close-square-linear" class="text-zinc-700 text-sm"></iconify-icon>'}
                                                    </td>
                                                    <td class="px-4 py-2 text-right">
                                                         ${c.reverse ? '<iconify-icon icon="solar:check-square-linear" class="text-pink-500 text-sm"></iconify-icon>' : '<iconify-icon icon="solar:close-square-linear" class="text-zinc-700 text-sm"></iconify-icon>'}
                                                    </td>
                                                </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Right: Logs -->
                            <div class="p-6 w-full lg:w-[320px] shrink-0">
                                <h4 class="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-4">Activity Stream</h4>
                                <div class="relative pl-2 border-l border-white/10 space-y-6">
                                    ${order.logs.map((log, i) => `
                                        <div class="relative pl-6">
                                            <div class="absolute -left-[13px] top-1.5 w-2 h-2 rounded-full border-2 border-[#0c0c0c] ${log.active ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]' : 'bg-zinc-700'}"></div>
                                            <p class="text-xs ${log.active ? 'text-white font-medium' : 'text-zinc-400'}">${log.text}</p>
                                            <p class="text-[10px] text-zinc-600 mt-1 font-mono">${log.time}</p>
                                        </div>
                                    `).join('')}
                                </div>
                                <button class="mt-6 w-full py-2 rounded-lg border border-white/10 text-[10px] text-zinc-400 hover:text-white hover:bg-white/5 transition-colors font-medium">
                                    View Full Audit Trail
                                </button>
                            </div>

                        </div>
                    </td>
                `;
                    tbody.appendChild(expandedRow);
                }
            });
        }

        function toggleExpand(index) {
            orders[index].expanded = !orders[index].expanded;
            renderTable();
        }

        function getColorHex(name) {
            if (name.includes('Cyan')) return '#06b6d4';
            if (name.includes('Magenta')) return '#ec4899';
            if (name.includes('Yellow')) return '#eab308';
            if (name.includes('Black')) return '#111';
            if (name.includes('PMS')) return '#f43f5e';
            return '#ccc';
        }

        // Initial Render
        renderTable();
    
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
      

<nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0b0b]/90 backdrop-blur-md">
<div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-600 to-purple-600 shadow-lg shadow-pink-900/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-white text-lg" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white">Prepress<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">OS</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-6 after:left-0 after:w-full after:h-0.5 after:bg-pink-500 after:rounded-t-full" href="#">Queue</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Archive</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Analytics</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Settings</a>
</div>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-1.5 text-[10px] text-zinc-500 border-r border-white/5 pr-4">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span> System Operational
                </div>
<button className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white transition-all">
<iconify-icon className="text-lg" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex items-center gap-3 pl-2">
<div className="text-right hidden sm:block">
<p className="text-xs font-medium text-zinc-200">Alex M.</p>
<p className="text-[10px] text-zinc-500">Senior Op.</p>
</div>
<img alt="User" className="w-8 h-8 rounded-full ring-2 ring-white/5 hover:ring-pink-500/50 transition-all cursor-pointer" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"/>
</div>
</div>
</div>
</nav>

<main className="flex-1 w-full max-w-[1800px] mx-auto px-6 py-8">

<div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-8">
<div>
<h1 className="text-xl font-semibold text-white tracking-tight">Production Queue</h1>
<p className="text-xs text-zinc-400 mt-1">Manage and track active prepress jobs.</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141414] border border-white/10 text-zinc-300 text-xs font-medium hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:export-linear" strokeWidth="1.5"></iconify-icon> Export CSV
                </button>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-pink-600 hover:bg-pink-500 text-white text-xs font-medium shadow-lg shadow-pink-900/20 transition-all border border-transparent">
<iconify-icon className="text-sm" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon> New Job
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

<div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex flex-col justify-between h-24 relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Total Orders</span>
<iconify-icon className="text-zinc-600 group-hover:text-pink-500 transition-colors" icon="solar:box-linear"></iconify-icon>
</div>
<div className="flex items-end gap-2 z-10">
<span className="text-2xl font-semibold text-white tracking-tight">142</span>
<span className="text-[10px] text-emerald-500 mb-1 flex items-center gap-0.5"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +12%</span>
</div>
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-colors"></div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex flex-col justify-between h-24 relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Processing</span>
<iconify-icon className="text-zinc-600 group-hover:text-blue-500 transition-colors" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="flex items-end gap-2 z-10">
<span className="text-2xl font-semibold text-white tracking-tight">24</span>
<span className="text-[10px] text-blue-400 mb-1 font-medium">Active Now</span>
</div>
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex flex-col justify-between h-24 relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Need Attention</span>
<iconify-icon className="text-zinc-600 group-hover:text-amber-500 transition-colors" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div className="flex items-end gap-2 z-10">
<span className="text-2xl font-semibold text-white tracking-tight">3</span>
<span className="text-[10px] text-zinc-500 mb-1">On Hold</span>
</div>
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors"></div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex flex-col justify-between h-24 relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Plates Used</span>
<iconify-icon className="text-zinc-600 group-hover:text-purple-500 transition-colors" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div className="flex items-end gap-2 z-10">
<span className="text-2xl font-semibold text-white tracking-tight">845<span className="text-sm text-zinc-500 font-normal">m²</span></span>
</div>
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
</div>
</div>

<div className="mb-6 px-4 py-3 bg-[#141414] border border-white/5 rounded-xl shadow-sm flex flex-wrap items-center gap-3">

<div className="relative w-64 mr-2">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg py-1.5 pl-9 pr-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-pink-500/50 transition-all hover:border-white/20" placeholder="Search ID, Client or File..." type="text"/>
</div>
<div className="h-5 w-px bg-white/10 mx-1"></div>

<details className="relative group">
<summary className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-transparent border border-dashed border-white/10 text-xs font-medium text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-pointer select-none">
<iconify-icon icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon> Status
                    <iconify-icon className="opacity-50" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="absolute top-full left-0 mt-2 w-48 bg-[#141414] border border-white/10 rounded-lg shadow-xl p-1 z-50">
<div className="px-2 py-1.5 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Filter by Status</div>
<label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer group/item">
<div className="relative flex items-center">
<input className="peer appearance-none w-3.5 h-3.5 rounded bg-white/5 border border-white/20 checked:bg-pink-500 checked:border-pink-500 transition-all" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 left-0.5 top-0.5 text-[10px] pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300 group-hover/item:text-white transition-colors">Processing</span>
</label>
<label className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer group/item">
<div className="relative flex items-center">
<input className="peer appearance-none w-3.5 h-3.5 rounded bg-white/5 border border-white/20 checked:bg-pink-500 checked:border-pink-500 transition-all" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 left-0.5 top-0.5 text-[10px] pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300 group-hover/item:text-white transition-colors">Ready</span>
</label>
</div>
</details>

<details className="relative group">
<summary className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-transparent border border-dashed border-white/10 text-xs font-medium text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-pointer select-none">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> Date Range
                    <iconify-icon className="opacity-50" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="absolute top-full left-0 mt-2 w-48 bg-[#141414] border border-white/10 rounded-lg shadow-xl p-1 z-50">
<a className="block px-2 py-1.5 rounded hover:bg-white/5 text-xs text-zinc-300" href="#">Today</a>
<a className="block px-2 py-1.5 rounded hover:bg-white/5 text-xs text-zinc-300" href="#">Yesterday</a>
<a className="block px-2 py-1.5 rounded hover:bg-white/5 text-xs text-zinc-300" href="#">Last 7 Days</a>
</div>
</details>

<details className="relative group">
<summary className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-transparent border border-dashed border-white/10 text-xs font-medium text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-pointer select-none">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> Client
                    <iconify-icon className="opacity-50" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="absolute top-full left-0 mt-2 w-56 bg-[#141414] border border-white/10 rounded-lg shadow-xl p-1 z-50 max-h-48 overflow-y-auto custom-scrollbar">
<input className="w-full bg-black/20 border border-white/5 rounded px-2 py-1.5 text-xs text-white mb-1 focus:outline-none focus:border-pink-500/50" placeholder="Search clients..." type="text"/>
<a className="block px-2 py-1.5 rounded hover:bg-white/5 text-xs text-zinc-300" href="#">Acme Corp</a>
<a className="block px-2 py-1.5 rounded hover:bg-white/5 text-xs text-zinc-300" href="#">Global Bev</a>
</div>
</details>

<details className="relative group">
<summary className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-transparent border border-dashed border-white/10 text-xs font-medium text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-pointer select-none">
<iconify-icon icon="solar:ruler-linear" strokeWidth="1.5"></iconify-icon> Thickness
                    <iconify-icon className="opacity-50" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="absolute top-full left-0 mt-2 w-40 bg-[#141414] border border-white/10 rounded-lg shadow-xl p-1 z-50">
<a className="block px-2 py-1.5 rounded hover:bg-white/5 text-xs text-zinc-300" href="#">1.14 mm</a>
<a className="block px-2 py-1.5 rounded hover:bg-white/5 text-xs text-zinc-300" href="#">1.70 mm</a>
<a className="block px-2 py-1.5 rounded hover:bg-white/5 text-xs text-zinc-300" href="#">2.84 mm</a>
</div>
</details>
<div className="ml-auto flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-zinc-300 hover:text-white transition-colors">
<iconify-icon icon="solar:list-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="border border-white/5 rounded-xl overflow-hidden bg-[#141414] shadow-2xl shadow-black/40">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#141414] border-b border-white/5 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
<th className="py-3 px-4 w-[40px]"></th>
<th className="py-3 px-4 w-[140px]">Status</th>
<th className="py-3 px-4 w-[120px]">Date</th>
<th className="py-3 px-4 w-[110px]">Job ID</th>
<th className="py-3 px-4 min-w-[200px]">Client / User</th>
<th className="py-3 px-4">Service</th>
<th className="py-3 px-4">Thickness</th>
<th className="py-3 px-4">Dimensions</th>
<th className="py-3 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5" id="orders-table-body">

</tbody>
</table>

<div className="px-6 py-4 border-t border-white/5 flex items-center justify-between bg-[#141414]">
<div className="flex items-center gap-4">
<p className="text-xs text-zinc-500">Showing <span className="font-medium text-zinc-300">1-20</span> of <span className="font-medium text-zinc-300">142</span> orders</p>
<div className="relative group hidden sm:block">
<select className="appearance-none bg-[#0b0b0b] border border-white/10 rounded-lg py-1 pl-2 pr-6 text-xs text-zinc-400 font-medium focus:outline-none focus:ring-1 focus:ring-pink-500/50 cursor-pointer hover:border-white/20 transition-all">
<option>20 rows</option>
<option>50 rows</option>
<option>100 rows</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium rounded-lg border border-white/5 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors disabled:opacity-50" disabled="">Previous</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-lg border border-white/5 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors">Next</button>
</div>
</div>
</div>
</main>

<footer className="mt-auto border-t border-white/5 py-6 bg-[#0b0b0b]">
<div className="max-w-[1800px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-900/20">
<iconify-icon className="text-white text-xs" icon="solar:layers-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 font-medium">PrepressOS v2.4.2</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Status</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Documentation</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Support</a>
<span className="text-xs text-zinc-700">© 2023 PrepressOS Inc.</span>
</div>
</div>
</footer>



    </>
  );
}
