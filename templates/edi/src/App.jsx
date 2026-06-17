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



        // State
        let currentTab = 'all'; // all, po, ack, asn, logs
        let currentDirection = 'inbound'; // inbound, outbound

        // Mock Data Database
        const db = [
            // Purchase Orders (850)
            { id: '101', tab: 'po', direction: 'inbound', type: '850', docName: 'Purchase Order', partner: 'Walmart', status: 'success', control: '10002931', amount: '$4,230.00', date: '2 mins ago' },
            { id: '102', tab: 'po', direction: 'inbound', type: '850', docName: 'Purchase Order', partner: 'Home Depot', status: 'success', control: '10002930', amount: '$1,200.00', date: '15 mins ago' },
            { id: '103', tab: 'po', direction: 'outbound', type: '850', docName: 'Purchase Order', partner: 'Supplier A', status: 'processing', control: '992833', amount: '$8,550.00', date: '1 hour ago' },
            { id: '104', tab: 'po', direction: 'inbound', type: '850', docName: 'Purchase Order', partner: 'Target', status: 'failed', control: '10002928', amount: '$540.00', date: '2 hours ago' },

            // Acknowledgements (997)
            { id: '201', tab: 'ack', direction: 'outbound', type: '997', docName: 'Func Ack', partner: 'Walmart', status: 'success', control: 'ACK-9921', amount: 'Accepted', date: '1 min ago' },
            { id: '202', tab: 'ack', direction: 'inbound', type: '997', docName: 'Func Ack', partner: 'Supplier A', status: 'success', control: 'ACK-1102', amount: 'Accepted', date: '45 mins ago' },
            { id: '203', tab: 'ack', direction: 'outbound', type: '997', docName: 'Func Ack', partner: 'Target', status: 'processing', control: 'ACK-9920', amount: 'Pending', date: '1 hour ago' },

            // ASN (856)
            { id: '301', tab: 'asn', direction: 'outbound', type: '856', docName: 'Ship Notice', partner: 'Walmart', status: 'success', control: 'ASN-2023-01', amount: '240 Items', date: '10 mins ago' },
            { id: '302', tab: 'asn', direction: 'inbound', type: '856', docName: 'Ship Notice', partner: 'Supplier B', status: 'success', control: 'SHP-9912', amount: '50 Items', date: '3 hours ago' },
            { id: '303', tab: 'asn', direction: 'outbound', type: '856', docName: 'Ship Notice', partner: 'Home Depot', status: 'failed', control: 'ASN-2023-02', amount: '12 Items', date: 'Yesterday' },

            // Logs (Generic)
            { id: '401', tab: 'logs', direction: 'inbound', type: 'LOG', docName: 'FTP Transfer', partner: 'Walmart', status: 'success', control: 'FILE_293.x12', amount: '12KB', date: 'Just now' },
            { id: '402', tab: 'logs', direction: 'inbound', type: 'LOG', docName: 'AS2 Handshake', partner: 'Target', status: 'success', control: 'SIG_992.bin', amount: '2KB', date: '1 min ago' },
            { id: '403', tab: 'logs', direction: 'outbound', type: 'LOG', docName: 'SFTP Upload', partner: 'Home Depot', status: 'success', control: 'BATCH_11.zip', amount: '450KB', date: '5 mins ago' },
             { id: '404', tab: 'logs', direction: 'outbound', type: 'LOG', docName: 'API Hook', partner: 'Internal', status: 'failed', control: 'REQ_991', amount: '-', date: '12 mins ago' }
        ];

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            render();
            lucide.createIcons();
        });

        // Functions
        function switchTab(tab) {
            currentTab = tab;
            // Only reset direction for logs if necessary, otherwise keep context
            if (tab === 'logs') currentDirection = 'inbound';
            
            updateUI();
        }

        function setDirection(dir) {
            currentDirection = dir;
            updateUI();
        }

        function updateUI() {
            // Update Tab Styles
            document.querySelectorAll('.tab-btn').forEach(btn => {
                if(btn.dataset.tab === currentTab) {
                    btn.classList.add('border-gray-900', 'text-gray-900');
                    btn.classList.remove('border-transparent', 'text-gray-500');
                } else {
                    btn.classList.remove('border-gray-900', 'text-gray-900');
                    btn.classList.add('border-transparent', 'text-gray-500');
                }
            });

            // Update Direction Toggle Styles
            document.querySelectorAll('.direction-btn').forEach(btn => {
                if(btn.dataset.dir === currentDirection) {
                    btn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                    btn.classList.remove('text-gray-500', 'hover:text-gray-900');
                } else {
                    btn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                    btn.classList.add('text-gray-500', 'hover:text-gray-900');
                }
            });

            renderTable();
        }

        function renderTable() {
            const tbody = document.getElementById('transactionTableBody');
            tbody.innerHTML = '';

            const filtered = db.filter(item => {
                const dirMatch = item.direction === currentDirection;
                const tabMatch = currentTab === 'all' ? true : item.tab === currentTab;
                return dirMatch && tabMatch;
            });

            if(filtered.length === 0) {
                document.getElementById('emptyState').classList.remove('hidden');
            } else {
                document.getElementById('emptyState').classList.add('hidden');
                
                filtered.forEach(row => {
                    // Styles based on status
                    let statusHtml = '';
                    if(row.status === 'success') {
                        statusHtml = `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Success</span>`;
                    } else if (row.status === 'processing') {
                        statusHtml = `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>Processing</span>`;
                    } else {
                        statusHtml = `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-100"><span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>Failed</span>`;
                    }

                    // Icon for direction
                    const dirIcon = row.direction === 'inbound' 
                        ? `<i data-lucide="arrow-down-left" class="w-3.5 h-3.5 text-emerald-500"></i>` 
                        : `<i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-blue-500"></i>`;

                    // Doc Type Badge Color
                    const typeColor = row.tab === 'po' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                      row.tab === 'ack' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                      row.tab === 'asn' ? 'bg-orange-50 text-orange-700 border-orange-100' : 
                                      'bg-gray-100 text-gray-700 border-gray-200';

                    const tr = document.createElement('tr');
                    tr.className = 'group hover:bg-gray-50 transition-colors cursor-pointer border-l-2 border-l-transparent hover:border-l-gray-300';
                    tr.onclick = () => openPanel(row);
                    
                    tr.innerHTML = `
                        <td class="px-6 py-3.5">
                            <div class="w-4 h-4 border border-gray-300 rounded bg-white group-hover:border-gray-400"></div>
                        </td>
                        <td class="px-6 py-3.5">${statusHtml}</td>
                        <td class="px-6 py-3.5">
                            <div class="text-sm font-medium text-gray-900">${row.partner}</div>
                            <div class="text-[11px] text-gray-400">ISA: ${Math.floor(Math.random()*900000)}</div>
                        </td>
                        <td class="px-6 py-3.5">
                            <div class="flex items-center gap-2">
                                <span class="px-2 py-0.5 rounded text-[11px] font-medium border ${typeColor}">${row.type}</span>
                                <span class="text-sm text-gray-700">${row.docName}</span>
                            </div>
                        </td>
                        <td class="px-6 py-3.5">
                            <div class="text-sm text-gray-900 font-mono tracking-tight">${row.control}</div>
                        </td>
                        <td class="px-6 py-3.5">
                            <div class="text-sm text-gray-600">${row.amount}</div>
                        </td>
                        <td class="px-6 py-3.5">
                            <div class="flex items-center gap-1.5 text-xs text-gray-500">
                                ${dirIcon} ${row.date}
                            </div>
                        </td>
                        <td class="px-6 py-3.5 text-right">
                             <button class="text-gray-300 hover:text-gray-600 transition-colors"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
                lucide.createIcons();
            }
        }

        // Side Panel Logic
        function openPanel(data) {
            const panel = document.getElementById('detailPanel');
            const overlay = document.createElement('div'); // Simple way to handle click-outside could be added here
            
            document.getElementById('detailTitle').textContent = `${data.docName} #${data.control}`;
            document.getElementById('detailType').textContent = `${data.direction} ${data.type}`;
            document.getElementById('detailPartner').textContent = data.partner;
            document.getElementById('detailDate').textContent = data.date;
            document.getElementById('detailAmount').textContent = data.amount;
            
            const badge = document.getElementById('detailStatusBadge');
            if(data.status === 'success') {
                badge.className = "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-800 border border-emerald-200";
                badge.textContent = "Verified";
            } else if (data.status === 'failed') {
                badge.className = "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-rose-100 text-rose-800 border border-rose-200";
                badge.textContent = "Failed";
            } else {
                badge.className = "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800 border border-amber-200";
                badge.textContent = "Processing";
            }

            panel.classList.remove('translate-x-full');
        }

        function closePanel() {
            document.getElementById('detailPanel').classList.add('translate-x-full');
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
      

<nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shrink-0 z-20">
<div className="flex items-center gap-3 text-sm text-gray-500">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold mr-1">
                E
            </div>
<span className="text-gray-300">/</span>
<a className="hover:text-gray-900 transition-colors" href="#">Integrations</a>
<i className="w-4 h-4 text-gray-300" data-lucide="chevron-right"></i>
<span className="font-medium text-gray-900">EDI Monitor</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors" data-lucide="search"></i>
<input className="pl-9 pr-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-gray-400 focus:ring-0 w-64 bg-gray-50 focus:bg-white transition-all" placeholder="Search transactions..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 border border-gray-200 rounded px-1.5 py-0.5 text-[10px] text-gray-400 bg-white">/</div>
</div>
<button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-900 flex items-center justify-center text-white text-xs font-medium ring-2 ring-white cursor-pointer">JD</div>
</div>
</nav>

<header className="bg-white border-b border-gray-200 px-8 pt-6 pb-0 shrink-0 z-10">
<div className="flex items-start justify-between mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Transaction Monitor</h1>
<p className="text-sm text-gray-500">Real-time visibility into your EDI ecosystem.</p>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1.5 rounded-md border border-gray-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Live Connection
                </span>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all">
<i className="w-4 h-4 text-gray-500" data-lucide="calendar"></i>
                    Last 24 Hours
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

<div className="p-4 border border-gray-200 rounded-xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] flex flex-col justify-between h-24">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Volume</span>
<i className="w-4 h-4 text-gray-400" data-lucide="layers"></i>
</div>
<div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">2,845</div>
</div>
</div>

<div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col justify-between h-24">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</span>
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
</div>
<div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">99.8%</div>
</div>
</div>

<div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm flex flex-col justify-between h-24">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Acks</span>
<i className="w-4 h-4 text-amber-500" data-lucide="clock"></i>
</div>
<div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">12</div>
</div>
</div>

<div className="p-4 border border-rose-100 rounded-xl bg-rose-50/50 shadow-sm flex flex-col justify-between h-24">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-rose-600 uppercase tracking-wider">Failed</span>
<i className="w-4 h-4 text-rose-500" data-lucide="alert-octagon"></i>
</div>
<div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">3</div>
</div>
</div>
</div>

<div className="flex items-center gap-8 -mb-px" id="mainTabs">
<button className="tab-btn active pb-3 border-b-2 border-gray-900 text-sm font-medium text-gray-900 transition-colors" data-tab="all" onclick="switchTab('all')">All Transactions</button>
<button className="tab-btn pb-3 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors" data-tab="po" onclick="switchTab('po')">Purchase Orders</button>
<button className="tab-btn pb-3 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors" data-tab="ack" onclick="switchTab('ack')">Acknowledgements</button>
<button className="tab-btn pb-3 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors" data-tab="asn" onclick="switchTab('asn')">ASN (856)</button>
<button className="tab-btn pb-3 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors" data-tab="logs" onclick="switchTab('logs')">Transmission Logs</button>
</div>
</header>

<main className="flex-1 flex overflow-hidden relative">

<section className="flex-1 flex flex-col min-w-0 bg-white">

<div className="px-8 py-4 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4 shrink-0 bg-white">

<div className="flex items-center bg-gray-100 p-1 rounded-lg border border-gray-200" id="directionToggleContainer">
<button className="direction-btn px-4 py-1.5 text-xs font-medium rounded-md text-gray-900 bg-white shadow-sm transition-all" data-dir="inbound" onclick="setDirection('inbound')">Inbound</button>
<button className="direction-btn px-4 py-1.5 text-xs font-medium rounded-md text-gray-500 hover:text-gray-900 transition-all" data-dir="outbound" onclick="setDirection('outbound')">Outbound</button>
</div>
<div className="flex items-center gap-3">

<div className="relative">
<i className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="filter"></i>
<input className="pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-md w-48 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-shadow bg-white" placeholder="Filter by Partner..." type="text"/>
</div>
<div className="h-6 w-px bg-gray-200 mx-1"></div>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
                        Export
                    </button>
</div>
</div>

<div className="flex-1 overflow-auto custom-scrollbar relative">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 sticky top-0 z-10 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<tr>
<th className="px-6 py-3 w-12 border-b border-gray-200">
<div className="w-4 h-4 border border-gray-300 rounded bg-white hover:border-gray-400 cursor-pointer"></div>
</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Status</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Partner</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Document</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Control #</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Amount/Info</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Timestamp</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 text-right"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white" id="transactionTableBody">

</tbody>
</table>

<div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm" id="emptyState">
<div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
<i className="w-6 h-6 text-gray-400" data-lucide="inbox"></i>
</div>
<p className="text-sm font-medium text-gray-900">No transactions found</p>
<p className="text-xs text-gray-500 mt-1">Try adjusting your filters</p>
</div>
</div>

<div className="border-t border-gray-200 px-8 py-3 flex items-center justify-between shrink-0 bg-white">
<p className="text-sm text-gray-500">Showing <span className="font-medium text-gray-900">1-10</span> of <span className="font-medium text-gray-900">128</span></p>
<div className="flex items-center gap-1">
<button className="p-1.5 rounded hover:bg-gray-100 text-gray-400 disabled:opacity-50 transition-colors">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="px-2.5 py-1 rounded bg-gray-900 text-white text-xs font-medium">1</button>
<button className="px-2.5 py-1 rounded hover:bg-gray-100 text-gray-600 text-xs font-medium transition-colors">2</button>
<button className="px-2.5 py-1 rounded hover:bg-gray-100 text-gray-600 text-xs font-medium transition-colors">3</button>
<button className="p-1.5 rounded hover:bg-gray-100 text-gray-400 transition-colors">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>

<aside className="absolute right-0 top-0 bottom-0 w-[500px] bg-white border-l border-gray-200 shadow-2xl transform translate-x-full transition-transform duration-300 z-30 flex flex-col" id="detailPanel">

<div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between bg-gray-50/50">
<div>
<div className="flex items-center gap-2 mb-1.5">
<span className="text-xs font-bold text-gray-500 uppercase tracking-wide" id="detailType">--</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 text-gray-800" id="detailStatusBadge">--</span>
</div>
<h2 className="text-lg font-semibold text-gray-900 tracking-tight" id="detailTitle">--</h2>
</div>
<button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-all" onclick="closePanel()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="px-6 border-b border-gray-200 bg-white">
<div className="flex gap-6">
<button className="py-3 border-b-2 border-gray-900 text-xs font-medium text-gray-900">Overview</button>
<button className="py-3 border-b-2 border-transparent text-xs font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Raw X12</button>
<button className="py-3 border-b-2 border-transparent text-xs font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">Processing Logs</button>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-white">

<div className="bg-gray-50/50 rounded-lg p-4 border border-gray-200 mb-6">
<div className="grid grid-cols-2 gap-y-5 gap-x-4">
<div>
<div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1 font-medium">Partner</div>
<div className="text-sm font-medium text-gray-900" id="detailPartner">--</div>
</div>
<div>
<div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1 font-medium">ISA ID</div>
<div className="text-sm font-medium text-gray-900 font-mono text-xs">ZZ:1299384</div>
</div>
<div>
<div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1 font-medium">Date Processed</div>
<div className="text-sm font-medium text-gray-900" id="detailDate">--</div>
</div>
<div>
<div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1 font-medium">Value</div>
<div className="text-sm font-medium text-gray-900" id="detailAmount">--</div>
</div>
</div>
</div>
<div className="mb-6">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">Line Item Details</h3>
<div className="border border-gray-200 rounded-lg overflow-hidden">
<table className="w-full text-left">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-4 py-2 text-[10px] font-medium text-gray-500 uppercase">Item</th>
<th className="px-4 py-2 text-[10px] font-medium text-gray-500 uppercase text-right">Qty</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr>
<td className="px-4 py-2.5 text-sm text-gray-800">Product A - Heavy Duty</td>
<td className="px-4 py-2.5 text-sm text-gray-600 text-right font-mono">50</td>
</tr>
<tr>
<td className="px-4 py-2.5 text-sm text-gray-800">Product B - Lite</td>
<td className="px-4 py-2.5 text-sm text-gray-600 text-right font-mono">120</td>
</tr>
</tbody>
</table>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3">System Actions</h3>
<div className="space-y-3">
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></div>
<div className="w-px h-full bg-gray-200 my-1"></div>
</div>
<div className="pb-2">
<div className="text-sm font-medium text-gray-900">Mapped to ERP Schema</div>
<div className="text-xs text-gray-500">Transformation completed in 120ms</div>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></div>
</div>
<div>
<div className="text-sm font-medium text-gray-900">File Archived</div>
<div className="text-xs text-gray-500">Stored in cold storage bucket</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 border-t border-gray-200 bg-gray-50 mt-auto">
<button className="w-full py-2.5 px-4 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 shadow-sm transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i> Download Original File
                </button>
</div>
</aside>
</main>



    </>
  );
}
