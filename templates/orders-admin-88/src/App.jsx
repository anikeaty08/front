import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Lucide
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Refresh interaction
      const refreshBtn = document.getElementById('refreshBtn');
      if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
          const icon = refreshBtn.querySelector('svg');
          icon.classList.add('animate-spin');
          setTimeout(() => icon.classList.remove('animate-spin'), 700);
        });
      }

      // Dropdowns
      const dropdownButtons = document.querySelectorAll('[data-dropdown-button]');
      const dropdownMenus = document.querySelectorAll('[data-dropdown-menu]');
      dropdownButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const key = btn.getAttribute('data-dropdown-button');
          dropdownMenus.forEach(menu => {
            if (menu.getAttribute('data-dropdown-menu') === key) {
              menu.classList.toggle('hidden');
            } else {
              menu.classList.add('hidden');
            }
          });
        });
      });
      document.addEventListener('click', () => {
        dropdownMenus.forEach(menu => menu.classList.add('hidden'));
      });

      // Custom checkbox visual fill
      // Apply green fill via inline style on check (for peers, we simulate by toggling bg using JS since no global CSS)
      function wireCustomCheckboxes() {
        document.querySelectorAll('input[type="checkbox"].peer').forEach(input => {
          const label = input.nextElementSibling;
          const update = () => {
            if (input.checked) {
              label.style.backgroundColor = '#036510';
              label.style.borderColor = '#036510';
            } else {
              label.style.backgroundColor = '#FFFFFF';
              label.style.borderColor = 'rgb(209 213 219)'; // gray-300
            }
          };
          update();
          input.addEventListener('change', update);
        });
        const chkAll = document.getElementById('chk-all');
        if (chkAll) {
          chkAll.addEventListener('change', () => {
            document.querySelectorAll('tbody input[type="checkbox"].peer').forEach(chk => {
              chk.checked = chkAll.checked;
              chk.dispatchEvent(new Event('change'));
            });
          });
        }
      }
      wireCustomCheckboxes();

      // Modal controls
      const modal = document.getElementById('orderModal');
      const backdrop = document.getElementById('orderBackdrop');
      const panel = modal.querySelector('.absolute.inset-y-0.right-0');
      const closeButtons = [document.getElementById('modalClose'), document.getElementById('modalCloseX'), backdrop];

      function openModal(orderIdText) {
        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
          backdrop.classList.remove('opacity-0');
          backdrop.classList.add('opacity-100');
          panel.classList.remove('translate-x-full');
          // Set the order ID context
          const label = document.getElementById('modalOrderId');
          const pi = document.getElementById('pi-order-id');
          if (label) label.textContent = 'Order ID — ' + orderIdText;
          if (pi) pi.textContent = orderIdText;
          // Default tab
          activateTab('order');
        });
      }
      function closeModal() {
        backdrop.classList.remove('opacity-100');
        backdrop.classList.add('opacity-0');
        panel.classList.add('translate-x-full');
        setTimeout(() => modal.classList.add('hidden'), 200);
      }
      closeButtons.forEach(btn => btn && btn.addEventListener('click', closeModal));
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
      });

      // Row / link handlers
      function hookRowOpeners() {
        document.querySelectorAll('[data-order-row]').forEach(row => {
          row.addEventListener('click', (e) => {
            const isAction = e.target.closest('button, a, input, label, svg, path');
            if (isAction) return; // let dedicated handlers manage
            openModal(row.getAttribute('data-order-id'));
          });
        });
        document.querySelectorAll('[data-order-link]').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(btn.getAttribute('data-order-link'));
          });
        });
      }
      hookRowOpeners();

      // Tabs
      const tabButtons = document.querySelectorAll('.tab-btn');
      const panels = document.querySelectorAll('.panel');
      function activateTab(key) {
        tabButtons.forEach(btn => {
          const isActive = btn.getAttribute('data-tab') === key;
          const underline = btn.querySelector('.tab-underline');
          if (isActive) {
            btn.classList.add('text-gray-900', 'bg-gray-50');
            underline && underline.classList.remove('scale-x-0');
            underline && underline.classList.add('scale-x-100');
          } else {
            btn.classList.remove('text-gray-900', 'bg-gray-50');
            underline && underline.classList.add('scale-x-0');
            underline && underline.classList.remove('scale-x-100');
          }
        });
        panels.forEach(p => {
          p.classList.toggle('hidden', p.getAttribute('data-panel') !== key);
        });
      }
      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.getAttribute('data-tab')));
      });

      // Export PDF button (placeholder)
      const exportBtn = document.getElementById('exportPdfBtn');
      if (exportBtn) {
        exportBtn.addEventListener('click', () => {
          // Placeholder behavior
          const original = exportBtn.innerHTML;
          exportBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Preparing...';
          setTimeout(() => {
            exportBtn.innerHTML = original;
            alert('PDF export prepared (demo).');
          }, 900);
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-[28px] leading-tight tracking-tight font-semibold text-gray-900">Orders</h1>
<p className="text-sm text-gray-600 mt-1">View and manage customer orders and transactions.</p>
</div>
<div className="flex items-center gap-2">

<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="pl-9 pr-3 py-2 text-sm rounded-lg bg-white/70 border border-gray-200 outline-none focus:ring-2 focus:ring-[#036510]/20 focus:border-[#036510]/50 placeholder:text-gray-400 transition w-64" placeholder="Search orders..." type="text"/>
</div>
<button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition outline-none focus:ring-2 focus:ring-[#036510]/20" title="Filters">
<i className="w-4 h-4 text-gray-600" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
<span className="text-gray-700">Filters</span>
</button>
</div>

<button className="inline-flex items-center justify-center rounded-lg p-2 border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition outline-none focus:ring-2 focus:ring-[#036510]/20" id="refreshBtn" title="Refresh">
<i className="w-4 h-4 text-gray-700" data-lucide="refresh-cw" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="mt-6 rounded-xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
<div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">

<div className="relative">
<button className="group inline-flex items-center gap-2 bg-white rounded-full border border-gray-200 px-3.5 py-2 text-sm text-gray-700 hover:border-gray-300 hover:bg-gray-50 outline-none focus:ring-2 focus:ring-[#036510]/20 transition" data-dropdown-button="status">
<i className="w-4 h-4 text-gray-600 group-hover:text-gray-700" data-lucide="badge-check" strokeWidth="1.5"></i>
<span>Status</span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-44 rounded-lg border border-gray-200 bg-white shadow-lg p-1" data-dropdown-menu="status">
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">All</button>
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">Pending</button>
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">Processing</button>
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">Delivered</button>
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">Cancelled</button>
</div>
</div>

<div className="relative">
<button className="group inline-flex items-center gap-2 bg-white rounded-full border border-gray-200 px-3.5 py-2 text-sm text-gray-700 hover:border-gray-300 hover:bg-gray-50 outline-none focus:ring-2 focus:ring-[#036510]/20 transition" data-dropdown-button="date">
<i className="w-4 h-4 text-gray-600 group-hover:text-gray-700" data-lucide="calendar" strokeWidth="1.5"></i>
<span>Ordered Date</span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg p-1" data-dropdown-menu="date">
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">Today</button>
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">Last 7 days</button>
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">Last 30 days</button>
<div className="my-1 border-t border-gray-200"></div>
<div className="px-3 py-2">
<label className="text-xs text-gray-500">Custom range</label>
<div className="mt-1 flex items-center gap-2">
<input className="w-full rounded-md border border-gray-200 bg-white px-2 py-1.5 text-sm outline-none focus:ring-2 focus:ring-[#036510]/20 focus:border-[#036510]/50" type="date"/>
<span className="text-xs text-gray-400">to</span>
<input className="w-full rounded-md border border-gray-200 bg-white px-2 py-1.5 text-sm outline-none focus:ring-2 focus:ring-[#036510]/20 focus:border-[#036510]/50" type="date"/>
</div>
</div>
</div>
</div>

<div className="relative">
<button className="group inline-flex items-center gap-2 bg-white rounded-full border border-gray-200 px-3.5 py-2 text-sm text-gray-700 hover:border-gray-300 hover:bg-gray-50 outline-none focus:ring-2 focus:ring-[#036510]/20 transition" data-dropdown-button="paymethod">
<i className="w-4 h-4 text-gray-600 group-hover:text-gray-700" data-lucide="credit-card" strokeWidth="1.5"></i>
<span>Payment Method</span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg p-1" data-dropdown-menu="paymethod">
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50 flex items-center gap-2">
<i className="w-4 h-4 text-gray-600" data-lucide="credit-card" strokeWidth="1.5"></i> Card
              </button>
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50 flex items-center gap-2">
<i className="w-4 h-4 text-gray-600" data-lucide="banknote" strokeWidth="1.5"></i> Bank Transfer
              </button>
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50 flex items-center gap-2">
<i className="w-4 h-4 text-gray-600" data-lucide="wallet" strokeWidth="1.5"></i> Wallet/PayPal
              </button>
</div>
</div>

<div className="relative">
<button className="group inline-flex items-center gap-2 bg-white rounded-full border border-gray-200 px-3.5 py-2 text-sm text-gray-700 hover:border-gray-300 hover:bg-gray-50 outline-none focus:ring-2 focus:ring-[#036510]/20 transition" data-dropdown-button="paystatus">
<i className="w-4 h-4 text-gray-600 group-hover:text-gray-700" data-lucide="circle-dollar-sign" strokeWidth="1.5"></i>
<span>Payment Status</span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-44 rounded-lg border border-gray-200 bg-white shadow-lg p-1" data-dropdown-menu="paystatus">
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">All</button>
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">Paid</button>
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">Pending</button>
<button className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-50">Failed</button>
</div>
</div>

<div className="hidden lg:flex grow"></div>

<div className="flex items-center gap-2 grow lg:grow-0">
<div className="relative w-full lg:w-80">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#036510]/20 focus:border-[#036510]/50 placeholder:text-gray-400 transition" placeholder="Search by name, email, or order ID" type="text"/>
</div>
<button className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm text-white bg-[#036510] hover:bg-[#03520f] outline-none focus:ring-2 focus:ring-[#036510]/30 border border-transparent transition">
<i className="w-4 h-4 text-white" data-lucide="search" strokeWidth="1.5"></i>
              Search
            </button>
</div>
</div>
</div>

<div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">

<div className="px-4 sm:px-6 py-3 border-b border-gray-200 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-gray-600">
<span className="text-gray-900 font-medium">Orders</span>
<span className="text-gray-400">•</span>
<span className="text-gray-500">Recent activity</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition outline-none focus:ring-2 focus:ring-[#036510]/20">
<i className="w-4 h-4 text-gray-700" data-lucide="download" strokeWidth="1.5"></i>
              Export CSV
            </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-white">
<tr className="text-left text-gray-700">
<th className="px-4 sm:px-6 py-3">

<div className="inline-flex items-center">
<input className="peer sr-only" id="chk-all" type="checkbox"/>
<label className="w-4 h-4 rounded-md border border-gray-300 bg-white inline-flex items-center justify-center cursor-pointer transition hover:border-gray-400 outline-none peer-focus:ring-2 peer-focus:ring-[#036510]/20" htmlFor="chk-all">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="sr-only">Select all</span>
</label>
</div>
</th>
<th className="px-4 sm:px-6 py-3 font-semibold text-[#444]">Order ID</th>
<th className="px-4 sm:px-6 py-3 font-semibold text-[#444]">Customer Name</th>
<th className="px-4 sm:px-6 py-3 font-semibold text-[#444] hidden lg:table-cell">Customer Email</th>
<th className="px-4 sm:px-6 py-3 font-semibold text-[#444]">Total Amount</th>
<th className="px-4 sm:px-6 py-3 font-semibold text-[#444]">Status</th>
<th className="px-4 sm:px-6 py-3 font-semibold text-[#444] hidden md:table-cell">Ordered Date</th>
<th className="px-4 sm:px-6 py-3 font-semibold text-[#444] text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-gray-50 cursor-pointer" data-order-id="#ORD-1001" data-order-row="">
<td className="px-4 sm:px-6 py-3">
<div className="inline-flex items-center">
<input className="peer sr-only" id="chk-1" type="checkbox"/>
<label className="w-4 h-4 rounded-md border border-gray-300 bg-white inline-flex items-center justify-center cursor-pointer transition hover:border-gray-400 outline-none peer-focus:ring-2 peer-focus:ring-[#036510]/20" htmlFor="chk-1">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</label>
</div>
</td>
<td className="px-4 sm:px-6 py-3">
<button className="text-[#036510] hover:text-[#03520f] underline-offset-2 hover:underline outline-none focus:ring-2 focus:ring-[#036510]/20 rounded" data-order-link="#ORD-1001">#ORD-1001</button>
</td>
<td className="px-4 sm:px-6 py-3">Amelia Stone</td>
<td className="px-4 sm:px-6 py-3 hidden lg:table-cell">amelia.stone@example.com</td>
<td className="px-4 sm:px-6 py-3 font-medium">$384.00</td>
<td className="px-4 sm:px-6 py-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">Delivered</span>
</td>
<td className="px-4 sm:px-6 py-3 hidden md:table-cell">2025-11-05</td>
<td className="px-4 sm:px-6 py-3">
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-[#036510]/20" data-order-link="#ORD-1001" title="View details">
<i className="w-4 h-4 text-gray-700" data-lucide="eye" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-[#036510]/20" title="Download invoice">
<i className="w-4 h-4 text-gray-700" data-lucide="download" strokeWidth="1.5"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 cursor-pointer" data-order-id="#ORD-1002" data-order-row="">
<td className="px-4 sm:px-6 py-3">
<div className="inline-flex items-center">
<input className="peer sr-only" id="chk-2" type="checkbox"/>
<label className="w-4 h-4 rounded-md border border-gray-300 bg-white inline-flex items-center justify-center cursor-pointer transition hover:border-gray-400 outline-none peer-focus:ring-2 peer-focus:ring-[#036510]/20" htmlFor="chk-2">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</label>
</div>
</td>
<td className="px-4 sm:px-6 py-3">
<button className="text-[#036510] hover:text-[#03520f] underline-offset-2 hover:underline outline-none focus:ring-2 focus:ring-[#036510]/20 rounded" data-order-link="#ORD-1002">#ORD-1002</button>
</td>
<td className="px-4 sm:px-6 py-3">Marcus Reid</td>
<td className="px-4 sm:px-6 py-3 hidden lg:table-cell">marcus.reid@example.com</td>
<td className="px-4 sm:px-6 py-3 font-medium">$149.99</td>
<td className="px-4 sm:px-6 py-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">Pending</span>
</td>
<td className="px-4 sm:px-6 py-3 hidden md:table-cell">2025-11-07</td>
<td className="px-4 sm:px-6 py-3">
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-[#036510]/20" data-order-link="#ORD-1002" title="View details">
<i className="w-4 h-4 text-gray-700" data-lucide="eye" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-[#036510]/20" title="Download invoice">
<i className="w-4 h-4 text-gray-700" data-lucide="download" strokeWidth="1.5"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 cursor-pointer" data-order-id="#ORD-1003" data-order-row="">
<td className="px-4 sm:px-6 py-3">
<div className="inline-flex items-center">
<input className="peer sr-only" id="chk-3" type="checkbox"/>
<label className="w-4 h-4 rounded-md border border-gray-300 bg-white inline-flex items-center justify-center cursor-pointer transition hover:border-gray-400 outline-none peer-focus:ring-2 peer-focus:ring-[#036510]/20" htmlFor="chk-3">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</label>
</div>
</td>
<td className="px-4 sm:px-6 py-3">
<button className="text-[#036510] hover:text-[#03520f] underline-offset-2 hover:underline outline-none focus:ring-2 focus:ring-[#036510]/20 rounded" data-order-link="#ORD-1003">#ORD-1003</button>
</td>
<td className="px-4 sm:px-6 py-3">Priya Kaur</td>
<td className="px-4 sm:px-6 py-3 hidden lg:table-cell">priya.kaur@example.com</td>
<td className="px-4 sm:px-6 py-3 font-medium">$782.40</td>
<td className="px-4 sm:px-6 py-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">Processing</span>
</td>
<td className="px-4 sm:px-6 py-3 hidden md:table-cell">2025-11-09</td>
<td className="px-4 sm:px-6 py-3">
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-[#036510]/20" data-order-link="#ORD-1003" title="View details">
<i className="w-4 h-4 text-gray-700" data-lucide="eye" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-[#036510]/20" title="Download invoice">
<i className="w-4 h-4 text-gray-700" data-lucide="download" strokeWidth="1.5"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 cursor-pointer" data-order-id="#ORD-1004" data-order-row="">
<td className="px-4 sm:px-6 py-3">
<div className="inline-flex items-center">
<input className="peer sr-only" id="chk-4" type="checkbox"/>
<label className="w-4 h-4 rounded-md border border-gray-300 bg-white inline-flex items-center justify-center cursor-pointer transition hover:border-gray-400 outline-none peer-focus:ring-2 peer-focus:ring-[#036510]/20" htmlFor="chk-4">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</label>
</div>
</td>
<td className="px-4 sm:px-6 py-3">
<button className="text-[#036510] hover:text-[#03520f] underline-offset-2 hover:underline outline-none focus:ring-2 focus:ring-[#036510]/20 rounded" data-order-link="#ORD-1004">#ORD1004</button>
</td>
<td className="px-4 sm:px-6 py-3">Diego Santos</td>
<td className="px-4 sm:px-6 py-3 hidden lg:table-cell">diego.santos@example.com</td>
<td className="px-4 sm:px-6 py-3 font-medium">$59.00</td>
<td className="px-4 sm:px-6 py-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">Cancelled</span>
</td>
<td className="px-4 sm:px-6 py-3 hidden md:table-cell">2025-11-10</td>
<td className="px-4 sm:px-6 py-3">
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-[#036510]/20" data-order-link="#ORD-1004" title="View details">
<i className="w-4 h-4 text-gray-700" data-lucide="eye" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-[#036510]/20" title="Download invoice">
<i className="w-4 h-4 text-gray-700" data-lucide="download" strokeWidth="1.5"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 cursor-pointer" data-order-id="#ORD-1005" data-order-row="">
<td className="px-4 sm:px-6 py-3">
<div className="inline-flex items-center">
<input className="peer sr-only" id="chk-5" type="checkbox"/>
<label className="w-4 h-4 rounded-md border border-gray-300 bg-white inline-flex items-center justify-center cursor-pointer transition hover:border-gray-400 outline-none peer-focus:ring-2 peer-focus:ring-[#036510]/20" htmlFor="chk-5">
<svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</label>
</div>
</td>
<td className="px-4 sm:px-6 py-3">
<button className="text-[#036510] hover:text-[#03520f] underline-offset-2 hover:underline outline-none focus:ring-2 focus:ring-[#036510]/20 rounded" data-order-link="#ORD-1005">#ORD-1005</button>
</td>
<td className="px-4 sm:px-6 py-3">Noah Kim</td>
<td className="px-4 sm:px-6 py-3 hidden lg:table-cell">noah.kim@example.com</td>
<td className="px-4 sm:px-6 py-3 font-medium">$1,120.75</td>
<td className="px-4 sm:px-6 py-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">Delivered</span>
</td>
<td className="px-4 sm:px-6 py-3 hidden md:table-cell">2025-11-12</td>
<td className="px-4 sm:px-6 py-3">
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-[#036510]/20" data-order-link="#ORD-1005" title="View details">
<i className="w-4 h-4 text-gray-700" data-lucide="eye" strokeWidth="1.5"></i>
</button>
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-[#036510]/20" title="Download invoice">
<i className="w-4 h-4 text-gray-700" data-lucide="download" strokeWidth="1.5"></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="orderModal">

<div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity" id="orderBackdrop"></div>

<div className="absolute inset-y-0 right-0 w-full sm:max-w-xl bg-white shadow-2xl border-l border-gray-200 transform translate-x-full transition-transform rounded-none sm:rounded-l-xl flex flex-col">

<div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
<div>
<h3 className="text-[22px] tracking-tight font-semibold text-gray-900">Order Details</h3>
<p className="text-sm text-gray-600 mt-0.5" id="modalOrderId">Order ID —</p>
</div>
<button className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-[#036510]/20" id="modalCloseX" title="Close">
<i className="w-5 h-5 text-gray-700" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="px-5 pt-3 border-b border-gray-200">
<nav className="flex items-center gap-2 overflow-x-auto no-scrollbar">
<button className="tab-btn relative px-3 py-2 text-sm rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 outline-none focus:ring-2 focus:ring-[#036510]/20" data-tab="order">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="receipt" strokeWidth="1.5"></i> Order Information
              </span>
<span className="tab-underline absolute left-2 right-2 -bottom-[1px] h-[2px] bg-[#036510] scale-x-0 origin-left transition-transform"></span>
</button>
<button className="tab-btn relative px-3 py-2 text-sm rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 outline-none focus:ring-2 focus:ring-[#036510]/20" data-tab="payment">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="credit-card" strokeWidth="1.5"></i> Payment Information
              </span>
<span className="tab-underline absolute left-2 right-2 -bottom-[1px] h-[2px] bg-[#036510] scale-x-0 origin-left transition-transform"></span>
</button>
<button className="tab-btn relative px-3 py-2 text-sm rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 outline-none focus:ring-2 focus:ring-[#036510]/20" data-tab="customer">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i> Customer Information
              </span>
<span className="tab-underline absolute left-2 right-2 -bottom-[1px] h-[2px] bg-[#036510] scale-x-0 origin-left transition-transform"></span>
</button>
<button className="tab-btn relative px-3 py-2 text-sm rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 outline-none focus:ring-2 focus:ring-[#036510]/20" data-tab="site">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i> Site Visit
              </span>
<span className="tab-underline absolute left-2 right-2 -bottom-[1px] h-[2px] bg-[#036510] scale-x-0 origin-left transition-transform"></span>
</button>
<button className="tab-btn relative px-3 py-2 text-sm rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 outline-none focus:ring-2 focus:ring-[#036510]/20" data-tab="vat">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="percent" strokeWidth="1.5"></i> VAT
              </span>
<span className="tab-underline absolute left-2 right-2 -bottom-[1px] h-[2px] bg-[#036510] scale-x-0 origin-left transition-transform"></span>
</button>
</nav>
</div>

<div className="flex-1 overflow-y-auto">

<section className="panel px-5 py-5 hidden" data-panel="order">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Order ID</div>
<div className="mt-1 text-sm font-medium text-gray-900" id="pi-order-id">#ORD-—</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Ordered Date</div>
<div className="mt-1 text-sm font-medium text-gray-900">2025-11-05</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Delivered Date &amp; Time</div>
<div className="mt-1 text-sm font-medium text-gray-900">2025-11-08, 14:20</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Status</div>
<div className="mt-1">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">Delivered</span>
</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Cart ID</div>
<div className="mt-1 text-sm font-medium text-gray-900">CART-7782</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Cart Details</div>
<div className="mt-2 grid grid-cols-2 gap-2 text-sm">
<div className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5">
<span className="text-gray-500">Checkout:</span>
<span className="ml-1 font-medium text-gray-900">Complete</span>
</div>
<div className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5">
<span className="text-gray-500">Created:</span>
<span className="ml-1 font-medium text-gray-900">2025-11-04</span>
</div>
<div className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5">
<span className="text-gray-500">Higher Designer:</span>
<span className="ml-1 font-medium text-gray-900">True</span>
</div>
<div className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5">
<span className="text-gray-500">Site Visit:</span>
<span className="ml-1 font-medium text-gray-900">True</span>
</div>
</div>
</div>
</div>

<div className="mt-5">
<div className="text-sm font-medium text-gray-900">Cart Items</div>
<div className="mt-2 overflow-x-auto rounded-lg border border-gray-200">
<table className="min-w-full text-sm">
<thead className="bg-gray-50">
<tr className="text-left">
<th className="px-3 py-2 font-semibold text-[#444]">Qty</th>
<th className="px-3 py-2 font-semibold text-[#444]">Product Name</th>
<th className="px-3 py-2 font-semibold text-[#444]">Amount</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-100">
<tr>
<td className="px-3 py-2">1</td>
<td className="px-3 py-2">Modular Sofa — Charcoal</td>
<td className="px-3 py-2 font-medium">$320.00</td>
</tr>
<tr>
<td className="px-3 py-2">2</td>
<td className="px-3 py-2">Oak Coffee Table</td>
<td className="px-3 py-2 font-medium">$64.00</td>
</tr>
<tr>
<td className="px-3 py-2">1</td>
<td className="px-3 py-2">Floor Lamp — Brass</td>
<td className="px-3 py-2 font-medium">$ —</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="panel px-5 py-5 hidden" data-panel="payment">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Amount</div>
<div className="mt-1 text-sm font-medium text-gray-900">$384.00</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Payment Method</div>
<div className="mt-1 inline-flex items-center gap-2">
<i className="w-4 h-4 text-gray-700" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-gray-900">Credit Card</span>
</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Payment Status</div>
<div className="mt-1">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">Paid</span>
</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Transaction ID</div>
<div className="mt-1 text-sm font-medium text-gray-900">TXN-9F3C21A</div>
</div>
</div>

<div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-gray-200 bg-white p-3">
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-gray-700" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-sm text-gray-700">Card</span>
</div>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-3">
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-gray-700" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="text-sm text-gray-700">PayPal</span>
</div>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-3">
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-gray-700" data-lucide="banknote" strokeWidth="1.5"></i>
<span className="text-sm text-gray-700">Bank Transfer</span>
</div>
</div>
</div>
</section>

<section className="panel px-5 py-5 hidden" data-panel="customer">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Customer Name</div>
<div className="mt-1 text-sm font-medium text-gray-900">Amelia Stone</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Email</div>
<div className="mt-1 text-sm font-medium text-gray-900">amelia.stone@example.com</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Phone Number</div>
<div className="mt-1 text-sm font-medium text-gray-900">+1 (555) 317-2048</div>
</div>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
<div className="inline-flex items-center gap-2 text-sm font-medium text-gray-900">
<i className="w-4 h-4 text-[#036510]" data-lucide="map-pin" strokeWidth="1.5"></i>
                  Billing Address
                </div>
<div className="mt-2 text-sm text-gray-700">
                  742 Evergreen Terrace<br/>Springfield, IL 62701<br/>United States
                </div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
<div className="inline-flex items-center gap-2 text-sm font-medium text-gray-900">
<i className="w-4 h-4 text-[#036510]" data-lucide="map-pin" strokeWidth="1.5"></i>
                  Shipping Address
                </div>
<div className="mt-2 text-sm text-gray-700">
                  200 Market Street, Apt 12B<br/>Chicago, IL 60607<br/>United States
                </div>
</div>
</div>
</section>

<section className="panel px-5 py-5 hidden" data-panel="site">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Site Visit Status</div>
<div className="mt-1">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">Yes</span>
</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Site Visit Fee</div>
<div className="mt-1 text-sm font-medium text-gray-900">$49.00</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">Visit Date</div>
<div className="mt-1 text-sm font-medium text-gray-900">2025-11-06</div>
</div>
</div>
</section>

<section className="panel px-5 py-5 hidden" data-panel="vat">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">VAT Percentage</div>
<div className="mt-1 text-sm font-medium text-gray-900">15%</div>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3">
<div className="text-xs text-gray-500">VAT Amount</div>
<div className="mt-1 text-sm font-medium text-gray-900">$57.60</div>
</div>
</div>
<p className="mt-3 text-xs text-gray-500">Calculated on the total amount excluding discounts.</p>
</section>
</div>

<div className="px-5 py-4 border-t border-gray-200 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 outline-none focus:ring-2 focus:ring-[#036510]/20 transition" id="modalClose">
            Close
          </button>
<button className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm text-white bg-[#036510] hover:bg-[#03520f] outline-none focus:ring-2 focus:ring-[#036510]/30 border border-transparent transition" id="exportPdfBtn">
<i className="w-4 h-4 text-white" data-lucide="file-down" strokeWidth="1.5"></i>
            Export as PDF
          </button>
</div>
</div>
</div>


    </>
  );
}
