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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const tbody = document.getElementById('partners-tbody');
        const totalPartnersEl = document.getElementById('total-partners-count');
        const summaryEl = document.getElementById('showing-summary');
        const addBtn = document.getElementById('add-partner-btn');
        const modal = document.getElementById('partner-modal');
        const closeModalBtn = document.getElementById('close-partner-modal');
        const cancelBtn = document.getElementById('cancel-partner');
        const form = document.getElementById('partner-form');
        const errorEl = document.getElementById('form-error');
        const modalTitle = document.getElementById('modal-title');
        const submitBtn = document.getElementById('submit-partner');
        const filterBtns = document.querySelectorAll('[data-filter]');
        let currentFilter = 'all';
        let editingRow = null;

        function updateCounts() {
          const rows = Array.from(tbody.querySelectorAll('tr'));
          const visible = rows.filter(r => !r.classList.contains('hidden')).length;
          const total = rows.length;
          totalPartnersEl.textContent = total.toString();
          summaryEl.textContent = `Showing 1–${visible} of ${total} partners`;
        }

        function applyFilter() {
          const rows = Array.from(tbody.querySelectorAll('tr'));
          rows.forEach(row => {
            const status = row.getAttribute('data-status');
            const match = currentFilter === 'all' ? true : status === currentFilter;
            row.classList.toggle('hidden', !match);
          });
          updateCounts();
        }

        function setFilter(btn) {
          filterBtns.forEach(b => {
            b.classList.remove('bg-[#EAF6EA]', 'text-[#14532D]');
            b.classList.add('text-gray-600');
          });
          btn.classList.add('bg-[#EAF6EA]', 'text-[#14532D]');
          btn.classList.remove('text-gray-600');
          currentFilter = btn.getAttribute('data-filter');
          applyFilter();
        }

        filterBtns.forEach(btn => {
          btn.addEventListener('click', () => setFilter(btn));
        });

        function openModal(mode = 'add', row = null) {
          errorEl.classList.add('hidden');
          errorEl.textContent = '';
          form.reset();
          editingRow = null;
          submitBtn.innerHTML = '<i data-lucide="check" class="h-4 w-4"></i> Save Partner';
          modalTitle.textContent = 'Add Partner';

          if (mode === 'edit' && row) {
            editingRow = row;
            modalTitle.textContent = 'Edit Partner';
            submitBtn.innerHTML = '<i data-lucide="save" class="h-4 w-4"></i> Save Changes';

            form.partnerName.value = row.querySelector('.partner-name').textContent.trim();
            form.partnerEmail.value = row.querySelector('.partner-email').textContent.trim();
            form.partnerPhone.value = row.querySelector('.partner-phone').textContent.trim();
            form.partnerCommission.value = row.querySelector('.partner-commission').textContent.replace('%','').trim();

            const label = row.querySelector('.partner-slab-label').textContent.trim();
            // Expected format: "X Clients / Period"
            const [qtyPart, periodPart] = label.split('/').map(s => s.trim());
            const qty = parseInt(qtyPart, 10) || 0;
            const period = periodPart || 'Month';
            form.partnerTarget.value = qty;
            form.partnerPeriod.value = period;
            // Contacts, Start, End aren't visible in table; leave empty for edits unless previously stored
            // If stored as dataset, use them; otherwise keep blank
            form.partnerContacts.value = row.dataset.contactsNeed || '';
            form.partnerStart.valueAsDate = row.dataset.startDate ? new Date(row.dataset.startDate) : null;
            form.partnerEnd.valueAsDate = row.dataset.endDate ? new Date(row.dataset.endDate) : null;
          }

          modal.classList.remove('hidden');
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        function closeModal() {
          modal.classList.add('hidden');
        }

        function validateForm() {
          const start = form.partnerStart.value;
          const end = form.partnerEnd.value;
          if (start && end && new Date(end) < new Date(start)) {
            errorEl.textContent = 'End Date cannot be earlier than Start Date.';
            errorEl.classList.remove('hidden');
            return false;
          }
          errorEl.classList.add('hidden');
          return true;
        }

        function createStatusBadge(status) {
          if (status === 'active') {
            return `
              <span class="status-badge inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Active
              </span>`;
          }
          return `
            <span class="status-badge inline-flex items-center gap-1 text-[11px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
              <span class="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
              Inactive
            </span>`;
        }

        function createActions(status) {
          const isActive = status === 'active';
          const toggleIcon = isActive ? 'user-x' : 'user-check';
          const toggleText = isActive ? 'Deactivate' : 'Activate';
          const toggleStyle = isActive
            ? 'ring-red-200 text-red-600 hover:bg-red-50 focus-visible:ring-red-300'
            : 'ring-emerald-200 text-emerald-700 hover:bg-emerald-50 focus-visible:ring-emerald-300';
          return `
            <div class="inline-flex items-center gap-2 justify-end">
              <button data-action="edit" class="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ring-[#DCEFE0] text-gray-700 hover:bg-gray-50 hover:ring-[#CFE9D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
                <i data-lucide="pencil" class="h-4 w-4"></i>
                Edit
              </button>
              <button data-action="toggle" class="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ${toggleStyle} focus:outline-none">
                <i data-lucide="${toggleIcon}" class="h-4 w-4"></i>
                ${toggleText}
              </button>
            </div>`;
        }

        function addRow(data) {
          const tr = document.createElement('tr');
          tr.className = 'even:bg-[#F5FAF5] hover:bg-[#ECF7EC] transition-colors';
          tr.setAttribute('data-status', 'active');
          tr.dataset.contactsNeed = data.contactsNeed || '';
          tr.dataset.startDate = data.startDate || '';
          tr.dataset.endDate = data.endDate || '';
          tr.innerHTML = `
            <td class="px-4 py-3 align-top">
              <div class="flex items-center gap-2">
                <span class="partner-name text-gray-900 font-medium">${data.name}</span>
                ${createStatusBadge('active')}
              </div>
            </td>
            <td class="px-4 py-3 align-top">
              <span class="partner-email text-gray-700">${data.email}</span>
            </td>
            <td class="px-4 py-3 align-top">
              <span class="partner-phone text-gray-700">${data.phone}</span>
            </td>
            <td class="px-4 py-3 align-top">
              <span class="partner-commission text-gray-700">${data.commission}%</span>
            </td>
            <td class="px-4 py-3 align-top">
              <div class="flex flex-col gap-1.5">
                <span class="partner-slab-label text-gray-700">${data.target} Clients / ${data.period}</span>
                <div class="flex items-center gap-2">
                  <div class="relative w-40 h-1.5 rounded-full bg-[#E6F2E6] ring-1 ring-inset ring-[#DCEFE0]">
                    <div class="partner-progress h-full rounded-full bg-emerald-500" style="width: 0%;"></div>
                  </div>
                  <span class="partner-progress-label text-[11px] text-emerald-700 font-medium">0%</span>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 align-top">
              <span class="partner-leads text-gray-700">0</span>
            </td>
            <td class="px-4 py-3 align-top text-right">
              <span class="partner-sales text-gray-900 font-medium">0</span>
            </td>
            <td class="px-4 py-3 align-top text-right">
              <span class="partner-payouts text-gray-900 font-medium">₹0</span>
            </td>
            <td class="px-4 py-3 align-top text-right">
              ${createActions('active')}
            </td>
          `;
          tbody.appendChild(tr);
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          applyFilter();
        }

        function updateRow(row, data) {
          row.querySelector('.partner-name').textContent = data.name;
          row.querySelector('.partner-email').textContent = data.email;
          row.querySelector('.partner-phone').textContent = data.phone;
          row.querySelector('.partner-commission').textContent = `${data.commission}%`;
          row.querySelector('.partner-slab-label').textContent = `${data.target} Clients / ${data.period}`;
          row.dataset.contactsNeed = data.contactsNeed || '';
          row.dataset.startDate = data.startDate || '';
          row.dataset.endDate = data.endDate || '';
        }

        function toggleStatus(row) {
          const current = row.getAttribute('data-status');
          const next = current === 'active' ? 'inactive' : 'active';
          row.setAttribute('data-status', next);
          const nameCell = row.querySelector('td:first-child .flex');
          const badgeEl = nameCell.querySelector('.status-badge');
          badgeEl.outerHTML = createStatusBadge(next);
          // Update action buttons
          const actionsCell = row.querySelector('td:last-child');
          actionsCell.innerHTML = createActions(next);
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          applyFilter();
        }

        addBtn.addEventListener('click', () => openModal('add'));
        closeModalBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
          if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
        });

        form.addEventListener('submit', (e) => {
          e.preventDefault();
          if (!validateForm()) return;

          const data = {
            name: form.partnerName.value.trim(),
            email: form.partnerEmail.value.trim(),
            phone: form.partnerPhone.value.trim(),
            commission: (parseFloat(form.partnerCommission.value) || 0).toString(),
            target: parseInt(form.partnerTarget.value, 10) || 0,
            period: form.partnerPeriod.value,
            contactsNeed: form.partnerContacts.value ? parseInt(form.partnerContacts.value, 10) : '',
            startDate: form.partnerStart.value || '',
            endDate: form.partnerEnd.value || ''
          };

          if (editingRow) {
            updateRow(editingRow, data);
          } else {
            addRow(data);
          }
          closeModal();
        });

        // Delegate actions (edit / toggle)
        tbody.addEventListener('click', (e) => {
          const btn = e.target.closest('button[data-action]');
          if (!btn) return;
          const row = e.target.closest('tr');
          const action = btn.getAttribute('data-action');
          if (action === 'edit') {
            openModal('edit', row);
          } else if (action === 'toggle') {
            toggleStatus(row);
          }
        });

        // Initialize counts
        applyFilter();
      });
    
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
      
<div className="min-h-screen">

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-[#E5EFE5]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="text-[#14532D] text-sm tracking-tight font-semibold select-none px-2 py-1 rounded-md ring-1 ring-inset ring-[#DCEFE0]/80 bg-[#EAF6EA]">
              SM
            </div>
<div className="h-4 w-px bg-[#E5EFE5]"></div>
<span className="text-sm text-gray-500">Admin Panel</span>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span>Secure</span>
</div>
<div className="h-8 w-8 rounded-md bg-[#E8F3E8] flex items-center justify-center text-[#14532D] text-xs font-medium tracking-tight ring-1 ring-inset ring-[#DCEFE0]">
              AD
            </div>
</div>
</div>
</header>
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-6">
<h1 className="text-[20px] tracking-tight text-[#14532D] font-semibold">Partner Management</h1>
<p className="text-sm text-[#6B7280] mt-1">Monitor your partners’ performance and earnings at a glance.</p>
</div>

<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
<div className="flex items-center gap-2">

<div className="inline-flex rounded-md ring-1 ring-inset ring-[#DCEFE0] bg-white p-0.5">
<button className="px-3 py-1.5 text-sm font-medium text-[#14532D] rounded-[6px] bg-[#EAF6EA] hover:ring-1 hover:ring-[#BFE8C4] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" data-filter="all" type="button">All Partners</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-600 rounded-[6px] hover:bg-gray-50 hover:ring-1 hover:ring-[#DCEFE0] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" data-filter="active" type="button">Active</button>
<button className="px-3 py-1.5 text-sm font-medium text-gray-600 rounded-[6] hover:bg-gray-50 hover:ring-1 hover:ring-[#DCEFE0] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" data-filter="inactive" type="button">Inactive</button>
</div>
<span className="ml-3 text-sm text-gray-500">Total Partners: <span className="font-medium text-gray-700" id="total-partners-count">5</span></span>
</div>

<div className="w-full sm:w-auto flex items-center gap-2">
<div className="w-full sm:w-80">
<label className="sr-only" htmlFor="partner-search">Search</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 text-sm rounded-md bg-white ring-1 ring-inset ring-[#DCEFE0] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:ring-[#CFE9D3] transition-colors" id="partner-search" placeholder="Search partners, email, or mobile…" type="text"/>
</div>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-[#14532D] text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ring-1 ring-[#0F3F22]" id="add-partner-btn">
<i className="h-4 w-4" data-lucide="plus"></i>
              Add Partner
            </button>
</div>
</div>

<div className="overflow-hidden rounded-lg bg-white ring-1 ring-[#E5EFE5]">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-[#E8F3E8]">
<tr className="text-left">
<th className="px-4 py-3 text-[13px] font-semibold text-[#14532D]" scope="col">
<div className="inline-flex items-center gap-1 cursor-pointer select-none">
                      Partner Name
                      <i className="h-4 w-4 text-emerald-700/70" data-lucide="arrow-up-down"></i>
</div>
</th>
<th className="px-4 py-3 text-[13px] font-semibold text-[#14532D]" scope="col">
<div className="inline-flex items-center gap-1 cursor-pointer select-none">
                      Email
                      <i className="h-4 w-4 text-emerald-700/70" data-lucide="arrow-up-down"></i>
</div>
</th>
<th className="px-4 py-3 text-[13px] font-semibold text-[#14532D]" scope="col">
<div className="inline-flex items-center gap-1 cursor-pointer select-none">
                      Mobile Number
                      <i className="h-4 w-4 text-emerald-700/70" data-lucide="arrow-up-down"></i>
</div>
</th>
<th className="px-4 py-3 text-[13px] font-semibold text-[#14532D]" scope="col">
<div className="inline-flex items-center gap-1 cursor-pointer select-none">
                      Commission
                      <i className="h-4 w-4 text-emerald-700/70" data-lucide="arrow-up-down"></i>
</div>
</th>
<th className="px-4 py-3 text-[13px] font-semibold text-[#14532D]" scope="col">
<div className="inline-flex items-center gap-1 select-none">
                      Slab (Target Clients / Period)
                    </div>
</th>
<th className="px-4 py-3 text-[13px] font-semibold text-[#14532D]" scope="col">
<div className="inline-flex items-center gap-1 cursor-pointer select-none">
                      Leads Added
                      <i className="h-4 w-4 text-emerald-700/70" data-lucide="arrow-up-down"></i>
</div>
</th>
<th className="px-4 py-3 text-right text-[13px] font-semibold text-[#14532D]" scope="col">
<div className="inline-flex items-center gap-1 cursor-pointer select-none float-right">
                      Sales
                      <i className="h-4 w-4 text-emerald-700/70" data-lucide="arrow-up-down"></i>
</div>
</th>
<th className="px-4 py-3 text-right text-[13px] font-semibold text-[#14532D]" scope="col">
<div className="inline-flex items-center gap-1 cursor-pointer select-none float-right">
                      Payouts
                      <i className="h-4 w-4 text-emerald-700/70" data-lucide="arrow-up-down"></i>
</div>
</th>
<th className="px-4 py-3 text-right text-[13px] font-semibold text-[#14532D]" scope="col">
<div className="inline-flex items-center gap-1 select-none float-right">
                      Actions
                    </div>
</th>
</tr>
</thead>
<tbody className="divide-y divide-[#EEF6EF]" id="partners-tbody">

<tr className="even:bg-[#F5FAF5] hover:bg-[#ECF7EC] transition-colors" data-status="active">
<td className="px-4 py-3 align-top">
<div className="flex items-center gap-2">
<span className="partner-name text-gray-900 font-medium">Alice Johnson</span>
<span className="status-badge inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        Active
                      </span>
</div>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-email text-gray-700">alice.johnson@email.com</span>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-phone text-gray-700">+91 98765 43210</span>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-commission text-gray-700">8%</span>
</td>
<td className="px-4 py-3 align-top">
<div className="flex flex-col gap-1.5">
<span className="partner-slab-label text-gray-700">10 Clients / Month</span>
<div className="flex items-center gap-2">
<div className="relative w-40 h-1.5 rounded-full bg-[#E6F2E6] ring-1 ring-inset ring-[#DCEFE0]">
<div className="partner-progress h-full rounded-full bg-emerald-500" style={{width: '100%'}}></div>
</div>
<span className="partner-progress-label text-[11px] text-emerald-700 font-medium">120%</span>
</div>
</div>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-leads text-gray-700">24</span>
</td>
<td className="px-4 py-3 align-top text-right">
<span className="partner-sales text-gray-900 font-medium">12</span>
</td>
<td className="px-4 py-3 align-top text-right">
<span className="partner-payouts text-gray-900 font-medium">₹12,450</span>
</td>
<td className="px-4 py-3 align-top text-right">
<div className="inline-flex items-center gap-2 justify-end">
<button className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ring-[#DCEFE0] text-gray-700 hover:bg-gray-50 hover:ring-[#CFE9D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" data-action="edit">
<i className="h-4 w-4" data-lucide="pencil"></i>
                        Edit
                      </button>
<button className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ring-red-200 text-red-600 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300" data-action="toggle">
<i className="h-4 w-4" data-lucide="user-x"></i>
                        Deactivate
                      </button>
</div>
</td>
</tr>

<tr className="even:bg-[#F5FAF5] hover:bg-[#ECF7EC] transition-colors" data-status="inactive">
<td className="px-4 py-3 align-top">
<div className="flex items-center gap-2">
<span className="partner-name text-gray-900 font-medium">Bob Smith</span>
<span className="status-badge inline-flex items-center gap-1 text-[11px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
<span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                        Inactive
                      </span>
</div>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-email text-gray-700">bob.smith@email.com</span>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-phone text-gray-700">+91 96543 21098</span>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-commission text-gray-700">5%</span>
</td>
<td className="px-4 py-3 align-top">
<div className="flex flex-col gap-1.5">
<span className="partner-slab-label text-gray-700">6 Clients / Month</span>
<div className="flex items-center gap-2">
<div className="relative w-40 h-1.5 rounded-full bg-[#E6F2E6] ring-1 ring-inset ring-[#DCEFE0]">
<div className="partner-progress h-full rounded-full bg-emerald-500" style={{width: '100%'}}></div>
</div>
<span className="partner-progress-label text-[11px] text-emerald-700 font-medium">150%</span>
</div>
</div>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-leads text-gray-700">14</span>
</td>
<td className="px-4 py-3 align-top text-right">
<span className="partner-sales text-gray-900 font-medium">9</span>
</td>
<td className="px-4 py-3 align-top text-right">
<span className="partner-payouts text-gray-900 font-medium">₹7,830</span>
</td>
<td className="px-4 py-3 align-top text-right">
<div className="inline-flex items-center gap-2 justify-end">
<button className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ring-[#DCEFE0] text-gray-700 hover:bg-gray-50 hover:ring-[#CFE9D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" data-action="edit">
<i className="h-4 w-4" data-lucide="pencil"></i>
                        Edit
                      </button>
<button className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ring-emerald-200 text-emerald-700 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" data-action="toggle">
<i className="h-4 w-4" data-lucide="user-check"></i>
                        Activate
                      </button>
</div>
</td>
</tr>

<tr className="even:bg-[#F5FAF5] hover:bg-[#ECF7EC] transition-colors" data-status="active">
<td className="px-4 py-3 align-top">
<div className="flex items-center gap-2">
<span className="partner-name text-gray-900 font-medium">Carol White</span>
<span className="status-badge inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        Active
                      </span>
</div>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-email text-gray-700">carol.white@email.com</span>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-phone text-gray-700">+91 91234 56789</span>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-commission text-gray-700">10%</span>
</td>
<td className="px-4 py-3 align-top">
<div className="flex flex-col gap-1.5">
<span className="partner-slab-label text-gray-700">15 Clients / Quarter</span>
<div className="flex items-center gap-2">
<div className="relative w-40 h-1.5 rounded-full bg-[#E6F2E6] ring-1 ring-inset ring-[#DCEFE0]">
<div className="partner-progress h-full rounded-full bg-emerald-500" style={{width: '100%'}}></div>
</div>
<span className="partner-progress-label text-[11px] text-emerald-700">147%</span>
</div>
</div>
</td>
<td className="px-4 py3 align-top">
<span className="partner-leads text-gray-700">36</span>
</td>
<td className="px-4 py-3 align-top text-right">
<span className="partner-sales text-gray-900 font-medium">22</span>
</td>
<td className="px-4 py-3 align-top text-right">
<span className="partner-payouts text-gray-900 font-medium">₹25,400</span>
</td>
<td className="px-4 py-3 align-top text-right">
<div className="inline-flex items-center gap-2 justify-end">
<button className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ring-[#DCEFE0] text-gray-700 hover:bg-gray-50 hover:ring-[#CFE9D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" data-action="edit">
<i className="h-4 w-4" data-lucide="pencil"></i>
                        Edit
                      </button>
<button className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ring-red-200 text-red-600 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300" data-action="toggle">
<i className="h-4 w-4" data-lucide="user-x"></i>
                        Deactivate
                      </button>
</div>
</td>
</tr>

<tr className="even:bg-[#F5FAF5] hover:bg-[#ECF7EC] transition-colors" data-status="inactive">
<td className="px-4 py-3 align-top">
<div className="flex items-center gap-2">
<span className="partner-name text-gray-900 font-medium">David Brown</span>
<span className="status-badge inline-flex items-center gap-1 text-[11px] text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
<span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                        Inactive
                      </span>
</div>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-email text-gray-700">david.brown@email.com</span>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-phone text-gray-700">+91 98987 65432</span>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-commission text-gray-700">6%</span>
</td>
<td className="px-4 py-3 align-top">
<div className="flex flex-col gap-1.5">
<span className="partner-slab-label text-gray-700">8 Clients / Month</span>
<div className="flex items-center gap-2">
<div className="relative w-40 h-1.5 rounded-full bg-[#E6F2E6] ring-1 ring-inset ring-[#DCEFE0]">
<div className="partner-progress h-full rounded-full bg-emerald-500" style={{width: '88%'}}></div>
</div>
<span className="partner-progress-label text-[11px] text-emerald-700 font-medium">88%</span>
</div>
</div>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-leads text-gray-700">10</span>
</td>
<td className="px-4 py-3 align-top text-right">
<span className="partner-sales text-gray-900 font-medium">7</span>
</td>
<td className="px-4 py-3 align-top text-right">
<span className="partner-payouts text-gray-900 font-medium">₹5,750</span>
</td>
<td className="px-4 py-3 align-top text-right">
<div className="inline-flex items-center gap-2 justify-end">
<button className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ring-[#DCEFE0] text-gray-700 hover:bg-gray-50 hover:ring-[#CFE9D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" data-action="edit">
<i className="h-4 w-4" data-lucide="pencil"></i>
                        Edit
                      </button>
<button className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ring-emerald-200 text-emerald-700 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" data-action="toggle">
<i className="h-4 w-4" data-lucide="user-check"></i>
                        Activate
                      </button>
</div>
</td>
</tr>

<tr className="even:bg-[#F5FAF5] hover:bg-[#ECF7EC] transition-colors" data-status="active">
<td className="px-4 py-3 align-top">
<div className="flex items-center gap-2">
<span className="partner-name text-gray-900 font-medium">Eva Martinez</span>
<span className="status-badge inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        Active
                      </span>
</div>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-email text-gray-700">eva.martinez@email.com</span>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-phone text-gray-700">+91 90012 34123</span>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-commission text-gray-700">12%</span>
</td>
<td className="px-4 py-3 align-top">
<div className="flex flex-col gap-1.5">
<span className="partner-slab-label text-gray-700">20 Clients / Quarter</span>
<div className="flex items-center gap-2">
<div className="relative w-40 h-1.5 rounded-full bg-[#E6F2E6] ring-1 ring-inset ring-[#DCEFE0]">
<div className="partner-progress h-full rounded-full bg-emerald-500" style={{width: '100%'}}></div>
</div>
<span className="partner-progress-label text-[11px] text-emerald-700 font-medium">150%</span>
</div>
</div>
</td>
<td className="px-4 py-3 align-top">
<span className="partner-leads text-gray-700">44</span>
</td>
<td className="px-4 py-3 align-top text-right">
<span className="partner-sales text-gray-900 font-medium">30</span>
</td>
<td className="px-4 py-3 align-top text-right">
<span className="partner-payouts text-gray-900 font-medium">₹42,000</span>
</td>
<td className="px-4 py-3 align-top text-right">
<div className="inline-flex items-center gap-2 justify-end">
<button className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ring-[#DCEFE0] text-gray-700 hover:bg-gray-50 hover:ring-[#CFE9D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" data-action="edit">
<i className="h-4 w-4" data-lucide="pencil"></i>
                        Edit
                      </button>
<button className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md ring-1 ring-inset ring-red-200 text-red-600 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300" data-action="toggle">
<i className="h-4 w-4" data-lucide="user-x"></i>
                        Deactivate
                      </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between px-4 py-3 bg-white border-t border-[#E5EFE5]">
<p className="text-xs text-gray-500" id="showing-summary">Showing 1–5 of 5 partners</p>

<nav aria-label="Pagination" className="hidden items-center gap-1 text-sm">
<button className="px-2.5 py-1.5 rounded-md ring-1 ring-inset ring-[#DCEFE0] text-gray-600 hover:bg-gray-50 hover:ring-[#CFE9D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">Previous</button>
<button className="px-2.5 py-1.5 rounded-md bg-[#EAF6EA] text-[#14532D] ring-1 ring-inset ring-[#BFE8C4]">1</button>
<button className="px-2.5 py-1.5 rounded-md ring-1 ring-inset ring-[#DCEFE0] text-gray-600 hover:bg-gray-50 hover:ring-[#CFE9D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">2</button>
<button className="px-2.5 py-1.5 rounded-md ring-1 ring-inset ring-[#DCEFE0] text-gray-600 hover:bg-gray-50 hover:ring-[#CFE9D3] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">Next</button>
</nav>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-40 hidden" id="partner-modal">
<div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"></div>
<div className="absolute inset-y-0 right-0 w-full sm:w-[480px] bg-white shadow-xl ring-1 ring-[#E5EFE5] flex flex-col translate-x-0 sm:translate-x-0">
<div className="flex items-center justify-between px-5 py-4 border-b border-[#E5EFE5]">
<div className="flex items-center gap-2">
<div className="text-[#14532D] text-sm tracking-tight font-semibold select-none px-1.5 py-0.5 rounded ring-1 ring-inset ring-[#DCEFE0]/80 bg-[#EAF6EA]">SM</div>
<h2 className="text-[18px] tracking-tight text-gray-900 font-semibold" id="modal-title">Add Partner</h2>
</div>
<button className="p-2 rounded-md ring-1 ring-inset ring-[#E5EFE5] text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" id="close-partner-modal">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<form className="flex-1 overflow-y-auto px-5 py-4 space-y-4" id="partner-form">

<div className="grid grid-cols-1 gap-4">
<div>
<label className="block text-xs text-gray-600 mb-1" htmlFor="partnerName">Partner Name</label>
<input className="w-full px-3 py-2 text-sm rounded-md bg-white ring-1 ring-inset ring-[#DCEFE0] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:ring-[#CFE9D3]" id="partnerName" name="partnerName" placeholder="Enter full name" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-gray-600 mb-1" htmlFor="partnerEmail">Email</label>
<input className="w-full px-3 py-2 text-sm rounded-md bg-white ring-1 ring-inset ring-[#DCEFE0] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:ring-[#CFE9D3]" id="partnerEmail" name="partnerEmail" placeholder="name@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-gray-600 mb-1" htmlFor="partnerPhone">Mobile Number</label>
<input className="w-full px-3 py-2 text-sm rounded-md bg-white ring-1 ring-inset ring-[#DCEFE0] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:ring-[#CFE9D3]" id="partnerPhone" name="partnerPhone" placeholder="+91 90000 00000" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs text-gray-600 mb-1" htmlFor="partnerCommission">Commission (%)</label>
<input className="w-full px-3 py-2 text-sm rounded-md bg-white ring-1 ring-inset ring-[#DCEFE0] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:ring-[#CFE9D3]" id="partnerCommission" max="100" min="0" name="partnerCommission" placeholder="e.g., 8" required="" step="0.1" type="number"/>
</div>
</div>
<div className="h-px bg-[#EEF6EF] my-2"></div>

<div className="grid grid-cols-1 gap-4">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div>
<label className="block text-xs text-gray-600 mb-1" htmlFor="partnerTarget">Target Clients</label>
<input className="w-full px-3 py-2 text-sm rounded-md bg-white ring-1 ring-inset ring-[#DCEFE0] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:ring-[#CFE9D3]" id="partnerTarget" min="0" name="partnerTarget" placeholder="e.g., 10" required="" type="number"/>
</div>
<div>
<label className="block text-xs text-gray-600 mb-1" htmlFor="partnerPeriod">Time Period</label>
<div className="relative">
<select className="appearance-none w-full px-3 py-2 text-sm rounded-md bg-white ring-1 ring-inset ring-[#DCEFE0] focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:ring-[#CFE9D3]" id="partnerPeriod" name="partnerPeriod" required="">
<option value="Month">Month</option>
<option value="Quarter">Quarter</option>
<option value="Year">Year</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-xs text-gray-600 mb-1" htmlFor="partnerContacts">Contacts to Add</label>
<input className="w-full px-3 py-2 text-sm rounded-md bg-white ring-1 ring-inset ring-[#DCEFE0] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:ring-[#CFE9D3]" id="partnerContacts" min="0" name="partnerContacts" placeholder="e.g., 12" type="number"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-gray-600 mb-1" htmlFor="partnerStart">Start Date</label>
<input className="w-full px-3 py-2 text-sm rounded-md bg-white ring-1 ring-inset ring-[#DCEFE0] focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:ring-[#CFE9D3]" id="partnerStart" name="partnerStart" required="" type="date"/>
</div>
<div>
<label className="block text-xs text-gray-600 mb-1" htmlFor="partnerEnd">End Date</label>
<input className="w-full px-3 py-2 text-sm rounded-md bg-white ring-1 ring-inset ring-[#DCEFE0] focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:ring-[#CFE9D3]" id="partnerEnd" name="partnerEnd" required="" type="date"/>
</div>
</div>
<p className="hidden text-xs text-red-600 bg-red-50 ring-1 ring-red-200 rounded-md px-2 py-1" id="form-error"></p>
</div>
<div className="h-px bg-[#EEF6EF]"></div>
<div className="flex items-center justify-end gap-2 pt-1">
<button className="px-3 py-2 text-sm rounded-md ring-1 ring-inset ring-[#E5EFE5] text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" id="cancel-partner" type="button">Cancel</button>
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-[#14532D] text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ring-1 ring-[#0F3F22]" id="submit-partner" type="submit">
<i className="h-4 w-4" data-lucide="check"></i>
              Save Partner
            </button>
</div>
</form>
</div>
</div>


    </>
  );
}
