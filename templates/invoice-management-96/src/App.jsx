import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function () {
      const statusBtn = document.getElementById('statusFilterBtn');
      const statusMenu = document.getElementById('statusFilterMenu');
      const statusLabel = document.getElementById('statusFilterLabel');
      const rows = document.querySelectorAll('#invoiceTableBody tr');
      const searchInput = document.getElementById('invoiceSearchInput');

      let currentStatus = 'all';

      function applyFilters() {
        const query = (searchInput.value || '').toLowerCase().trim();
        rows.forEach(row => {
          const rowStatus = row.getAttribute('data-status');
          const text = row.textContent.toLowerCase();
          const matchStatus = currentStatus === 'all' || currentStatus === rowStatus;
          const matchSearch = !query || text.includes(query);
          row.classList.toggle('hidden', !(matchStatus && matchSearch));
        });
      }

      // Toggle status dropdown
      statusBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        statusMenu.classList.toggle('hidden');
      });

      // Select status
      statusMenu.querySelectorAll('button[data-status]').forEach(btn => {
        btn.addEventListener('click', () => {
          currentStatus = btn.getAttribute('data-status');
          const label = btn.querySelector('span').textContent;
          statusLabel.textContent = 'Status: ' + label;
          statusMenu.classList.add('hidden');
          applyFilters();
        });
      });

      // Hide dropdown on outside click
      document.addEventListener('click', (e) => {
        if (!statusMenu.contains(e.target) && !statusBtn.contains(e.target)) {
          statusMenu.classList.add('hidden');
        }
      });

      // filter
      searchInput.addEventListener('input', () => {
        applyFilters();
      });
    })();
  


      // Utility: open/close generic modal (centered)
      function openModal(el) {
        el.classList.remove('hidden');
        el.classList.add('flex');
      }
      function closeModal(el) {
        el.classList.add('hidden');
        el.classList.remove('flex');
      }

      // Elements
      const invoiceModal = document.getElementById('invoiceModal');
      const clientModal = document.getElementById('clientModal');
      const previewScreen = document.getElementById('previewScreen');

      const addInvoiceBtn = document.getElementById('addInvoiceBtn');
      const closeInvoiceModal = document.getElementById('closeInvoiceModal');
      const cancelInvoiceBtn = document.getElementById('cancelInvoiceBtn');
      const savePreviewBtn = document.getElementById('savePreviewBtn');

      const addClientBtn = document.getElementById('addClientBtn');
      const closeClientModal = document.getElementById('closeClientModal');
      const cancelClientBtn = document.getElementById('cancelClientBtn');

      const backToEditorBtn = document.getElementById('backToEditorBtn');

      // Open invoice modal
      addInvoiceBtn.addEventListener('click', () => openModal(invoiceModal));

      // Close invoice modal
      [closeInvoiceModal, cancelInvoiceBtn].forEach(btn => {
        btn.addEventListener('click', () => closeModal(invoiceModal));
      });

      // Open client modal (nested)
      addClientBtn.addEventListener('click', () => openModal(clientModal));

      // Close client modal
      [closeClientModal, cancelClientBtn].forEach(btn => {
        btn.addEventListener('click', () => closeModal(clientModal));
      });

      // Save & Preview
      savePreviewBtn.addEventListener('click', () => {
        // Close editor modal but do NOT use openModal for preview (keeps layout pinned to viewport)
        closeModal(invoiceModal);
        previewScreen.classList.remove('hidden');
        previewScreen.classList.add('flex');
      });

      // Back from preview
      backToEditorBtn.addEventListener('click', () => {
        // Return to editor modal and hide preview
        openModal(invoiceModal);
        previewScreen.classList.add('hidden');
        previewScreen.classList.remove('flex');
      });

      // Simple tab logic for preview right panel
      const tabButtons = document.querySelectorAll('.preview-tab');
      const tabPanels = document.querySelectorAll('.preview-panel');

      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const tab = btn.getAttribute('data-tab');

          tabButtons.forEach(b => {
            const isActive = b === btn;
            b.classList.toggle('border-emerald-500', isActive);
            b.classList.toggle('text-emerald-700', isActive);
            b.classList.toggle('border-transparent', !isActive);
            b.classList.toggle('text-slate-600', !isActive);
          });

          tabPanels.forEach(panel => {
            panel.classList.toggle('hidden', panel.id !== 'tab-' + tab);
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen">

<div className="flex-1 flex flex-col">

<header className="border-b border-slate-200 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl bg-emerald-500 flex items-center justify-center">
<i className="lucide lucide-receipt-text text-white" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Invoice Management
                </h1>
<p className="text-base text-slate-600">
                  Manage invoices, clients, payments, and billing efficiently
                  with real-time overview.
                </p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex gap-2 transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset2 focus-visible:ring-offset-slate-50 text-sm font-medium text-white bg-emerald-500 rounded-lg pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center" id="addInvoiceBtn">
<i className="lucide lucide-plus text-white" style={{strokeWidth: '1.5'}}></i>
<span>Add Invoice</span>
</button>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-6xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4 space-y-6">

<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<button className="group rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-emerald-500/70 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
<i className="lucide lucide-badge-check" style={{strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-medium text-slate-600">Paid</p>
<p className="text-lg font-semibold tracking-tight text-slate-900">
              ₹70,000.00
            </p>
</div>
</div>
<i className="lucide lucide-chevron-right text-slate-400 group-hover:text-emerald-500" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="mt-2 text-sm text-slate-500">
        12 invoices fully paid this period.
      </p>
</button>

<button className="group rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-emerald-500/70 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
<i className="lucide lucide-clock-4" style={{strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-medium text-slate-600">
              Outstanding
            </p>
<p className="text-lg font-semibold tracking-tight text-slate-900">
              ₹10,000.00
            </p>
</div>
</div>
<i className="lucide lucide-chevron-right text-slate-400 group-hover:text-emerald-500" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="mt-2 text-sm text-slate-500">
        5 invoices awaiting payment.
      </p>
</button>

<button className="group rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-emerald-500/70 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
<i className="lucide lucide-alert-triangle" style={{strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-medium text-slate-600">Overdue</p>
<p className="text-lg font-semibold tracking-tight text-slate-900">
              ₹0.00
            </p>
</div>
</div>
<i className="lucide lucide-chevron-right text-slate-400 group-hover:text-emerald-500" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="mt-2 text-sm text-slate-500">
        All invoices are within due dates.
      </p>
</button>

<button className="group rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-emerald-500/70 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:col-span-2 lg:col-span-1">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
<i className="lucide lucide-bar-chart-3" style={{strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-medium text-slate-600">
              Financial Year Overview
            </p>
<p className="text-lg font-semibold tracking-tight text-slate-900">
              FY 2024–2025
            </p>
</div>
</div>
<i className="lucide lucide-chevron-right text-slate-400 group-hover:text-emerald-500" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="mt-2 text-sm text-slate-500">
        Track income, taxes, and cash flow in one place.
      </p>
   button&gt;

    
</button><button className="group rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-emerald-500/70 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
<i className="lucide lucide-wallet-cards" style={{strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-medium text-slate-600">
              Outstanding Amount
            </p>
<p className="text-lg font-semibold tracking-tight text-slate-900">
              ₹10,000.00
            </p>
</div>
</div>
<i className="lucide lucide-chevron-right text-slate-400 group-hover:text-emerald-500" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="mt-2 text-sm text-slate-500">
        Includes all open invoices for this fiscal year.
      </p>
</button>

<button className="group rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-emerald-500/70 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-600">
<i className="lucide lucide-timer" style={{strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-medium text-slate-600">
              Average Overdue Days
            </p>
<p className="text-lg font-semibold tracking-tight text-slate-900">
              0 days
            </p>
</div>
</div>
<i className="lucide lucide-chevron-right text-slate-400 group-hover:text-emerald-500" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="mt-2 text-sm text-slate-500">
        Maintain healthy payment cycles with reminders.
      </p>
</button>
</section>

<section className="space-y-3">

<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

<div className="flex flex-1 flex-wrap items-center gap-3">

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" id="statusFilterBtn">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span id="statusFilterLabel">Status: All</span>
<i className="lucide lucide-chevron-down text-slate-400" style={{strokeWidth: '1.5'}}></i>
</button>

<div className="absolute z-40 mt-1 w-40 origin-top-left rounded-lg border border-slate-200 bg-white shadow-sm hidden" id="statusFilterMenu">
<button className="flex w-full items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" data-status="all">
<span>All</span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
</button>
<button className="flex w-full items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" data-status="draft">
<span>Draft</span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
</button>
<button className="flex w-full items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" data-status="sent">
<span>Sent</span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</button>
<button className="flex w-full items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" data-status="outstanding">
<span>Outstanding</span>
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
</button>
</div>
</div>

<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-calendar-range" style={{strokeWidth: '1.5'}}></i>
<span>Invoice from</span>
<span className="text-slate-500 text-xs">19/11/2025</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-calendar-days" style={{strokeWidth: '1.5'}}></i>
<span>to</span>
<span className="text-slate-500 text-xs">26/11/2025</span>
</button>
</div>

<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-calendar-search" style={{strokeWidth: '1.5'}}></i>
<span>Export date</span>
<span className="text-slate-500 text-xs">Choose</span>
</button>
</div>

<div className="flex flex-1 items-center justify-end gap-3">

<div className="relative flex-1 min-w-[10rem] max-w-xs">
<span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
<i className="lucide lucide-search" style={{strokeWidth: '1.5'}}></i>
</span>
<input className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" id="invoiceSearchInput" placeholder="Search..." type="text"/>
</div>

<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 transition hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-download" style={{strokeWidth: '1.5'}}></i>
<span>Export</span>
</button>

<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-file-plus" style={{strokeWidth: '1.5'}}></i>
<span>New invoice</span>
</button>
</div>
</div>

<div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-slate-200">
<thead className="bg-slate-50">
<tr>
<th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                Invoice
              </th>
<th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                Invoice Name
              </th>
<th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                Invoice Date
              </th>
<th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                Due Date
              </th>
<th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                Client
              </th>
<th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                Status
              </th>
<th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wide text-slate-500">
                Total
              </th>
<th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wide text-slate-500">
                Actions
              </th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 bg-white text-sm" id="invoiceTableBody">

<tr className="hover:bglate-50" data-status="draft">

<td className="whitespace-nowrap px-4 py-3 text-slate-500">
                INV-0003
              </td>

<td className="px-4 py-3 text-slate-900">
                BrandMagics Software Labs PLM Invoice
              </td>

<td className="px-4 py-3 textlate-500">
                19/11/2025
              </td>

<td className="px-4 py-3 text-slate-500">
                26/11/2025
              </td>

<td className="px-4 py-3 text-slate-700">
                Ajith
              </td>

<td className="whitespace-nowrap px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
<span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                  Draft
                </span>
</td>

<td className="px-4 py-3 text-right text-slate-900">
                ₹70,000.00
              </td>

<td className="px-4 py-3 text-right">
<button aria-label="Open invoice actions" className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-more-vertical text-slate-400" style={{strokeWidth: '1.5'}}></i>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50" data-status="sent">

<td className="whitespace-nowrap px-4 py-3 text-slate-500">
                INV-0004
              </td>

<td className="px-4 py-3 text-slate-900">
                BrandMagics Software Labs PLM Invoice
              </td>

<td className="px-4 py-3 text-slate-500">
                19/11/2025
              </td>

<td className="px-4 py-3 text-slate-500">
                26/11/2025
              </td>

<td className="px-4 py-3 text-slate-700">
                Ajith
              </td>

<td className="whitespace-nowrap px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Sent
                </span>
</td>

<td className="px-4 py-3 text-right text-slate-900">
                ₹10,000.00
              </td>

<td className="px-4 py-3 text-right">
<button aria-label="Open invoice actions" className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-more-vertical text-slate-400" style={{strokeWidth: '1.5'}}></i>
</button>
</td>
</tr>

<tr className="hover:bg-slate-50" data-status="outstanding">

<td className="whitespace-nowrap px-4 py-3 text-slate-500">
                INV-0005
              </td>

<td className="px-4 py-3 text-slate-900">
                Test 2 Template Invoice
              </td>

<td className="px-4 py-3 text-slate-500">
                21/11/2025
              </td>

<td className="px-4 py-3 text-slate-500">
                28/11/2025
              </td>

<td className="px-4 py-3 text-slate-700">
                BroadMagics Software
              </td>

<td className="whitespace-nowrap px-4 py-3">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-600">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  Outstanding
                </span>
</td>

<td className="px-4 py-3 text-right text-slate-900">
                ₹64,832.00
              </td>

<td className="px-4 py-3 text-right">
<button aria-label="Open invoice actions" className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-more-vertical text-slate-400" style={{strokeWidth: '1.5'}}></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

</div>
</main>
</div>
</div>

<div aria-modal="true" className="fixed inset-0 z-40 items-center justify-center bg-slate-900/40 backdrop-blur" id="invoiceModal" role="dialog">
<div className="flex flex-col overflow-hidden bg-white w-full max-w-4xl max-h-[90vh] border-slate-200 border rounded-2xl relative shadow-xl">

<div className="flex border-slate-200 border-b pt-4 pr-5 pb-4 pl-5 items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
<i className="lucide lucide-file-pen-line" style={{strokeWidth: '1.5'}}></i>
</span>
<div className="">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
        Create New Invoice
      </h2>
<p className="text-base text-slate-600">
        Configure invoice details, client, items, and payment schedule.
      </p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex flex-col gap-1 items-end">
<div className="flex flex-wrap items-center gap-2">
<span className="text-xs font-medium text-slate-500">
          Template: <span className="text-slate-800">Test 2 template</span>
</span>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-layout-template text-slate-500" style={{strokeWidth: '1.5'}}></i>
<span>Change Template</span>
</button>
</div>
<p className="text-xs text-slate-400 text-right">
        You can configure invoice templates in Settings.
      </p>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" id="closeInvoiceModal">
<i className="lucide lucide-x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">

<details className="group bg-white border-slate-200 border rounded-xl" open="">
<summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 &lt;i class=" lucide="" lucide-clipboard-list"="" style={{strokeWidth: '1.5'}}>
</span>
<span className="text-sm font-medium text-slate-900">
        Invoice Details
      </span>
</div>

<div className="flex flex-col gap-1 gap-x-1 gap-y-1 items-end">
<div className="flex flex-wrap items-center gap-2">
</div>
</div>
<i className="lucide lucide-chevron-down text-slate-400 group-open:rotate-180 transition-transform" style={{strokeWidth: '1.5'}}></i>
</summary>
<div className="border-t border-slate-200 px-4 py-4 space-y-4">
<div className="grid gap-4 sm:grid-cols-3">

<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
          Company Logo
        </label>
<button className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-3 text-sm text-slate-600 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" type="button">

<div className="flex h-16 w-full items-center justify-center rounded-md bg-white border border-slate-200">
<div className="flex flex-col items-center gap-1">
<span className="text-xs font-medium text-slate-400 tracking-wide">
                NO LOGO
              </span>
<span className="h-1.5 w-8 rounded-full bg-slate-100"></span>
</div>
</div>
<span className="text-xs font-medium text-emerald-700">
            Change Logo
          </span>
</button>
</div>

<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
          Invoice Number
        </label>
<div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
<span className="text-sm text-slate-400">
            #INV-0004
          </span>
</div>
<p className="text-xs text-slate-400">
          Auto-generated from sequence. This cannot be edited.
        </p>
</div>

<div className="space-y-1.5 sm:col-span-1">
<label className="text-sm font-medium text-slate-800">
          Invoice Name
        </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="BrandMagics Software Labs Pvt Ltd Invoice" type="text"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-3">

<div className="hidden sm:block"></div>

<div className="space-y-1.5 sm:col-span-2">
</div>
</div>
</div>
</details>

<details className="group rounded-xl border border-slate-200 bg-white" open="">
<summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
<i className="lucide lucide-user-round" style={{strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm font-medium text-slate-900">
                  Bill To (Client Details)
                </span>
</div>
<i className="lucide lucide-chevron-down text-slate-400 group-open:rotate-180 transition-transform" style={{strokeWidth: '1.5'}}></i>
</summary>
<div className="border-t border-slate-200 px-4 py-4 space-y-4">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end">
<div className="flex-1 space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                    Client
                  </label>
<button className="flex gap-2 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 text-sm text-slate-800 bg-white w-full border-slate-200 border rounded-lg pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center justify-between" id="billToDropdown">
<span className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-700">
                        A
                      </span>
<span className="">Ajith</span>
</span>
<i className="lucide lucide-chevron-down text-slate-400" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-emerald-400 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" id="addClientBtn">
<i className="lucide lucide-user-plus-2" style={{strokeWidth: '1.5'}}></i>
                  Add Client
                </button>
</div>
<div className="grid gap-4 sm:grid-cols-2 text-sm">
<div className="space-y-1">
<p className="font-medium text-slate-800">Billing Address</p>
<p className="text-slate-600">
                    123, Software Park Road
                    
                    Kochi, Kerala, IN 682001
                  </p>
</div>
<div className="space-y-1">
<p className="font-medium text-slate-800">Contact</p>
<p className="text-slate-600">
                    ajith@example.com
                    
                    +91 98765 43210
                  </p>
</div>
</div>
</div>
</details>

<details className="group rounded-xl border border-slate-200 bg-white" open="">
<summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
<i className="lucide lucide-calendar-days" style={{strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm font-medium text-slate-900">Dates</span>
</div>
<i className="lucide lucide-chevron-down text-slate-400 group-open:rotate-180 transition-transform" style={{strokeWidth: '1.5'}}></i>
</summary>
<div className="border-t border-slate-200 px-4 py-4">
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                    Invoice Date
                  </label>
<button className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<span>19/11/2025</span>
<i className="lucide lucide-calendar" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                    Due Date
                  </label>
<button className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<span>26/11/2025</span>
<i className="lucide lucide-calendar-clock" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</details>

<details className="group rounded-xl border border-slate-200 bg-white" open="">
<summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
<i className="lucide lucide-list-checks" style={{strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm font-medium text-slate-900">
                  Invoice Items
                </span>
</div>
<i className="lucide lucide-chevron-down text-slate-400 group-open:rotate-180 transition-transform" style={{strokeWidth: '1.5'}}></i>
</summary>
<div className="border-t border-slate-200 px-4 py-4 space-y-3">

<div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
<table className="min-w-full divide-y divide-slate-200 text-sm">
<thead className="bg-slate-50">
<tr className="">
<th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                        Type
                      </th>
<th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                        Name
                      </th>
<th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                        Account
                      </th>
<th className="px-3 py-2 text-right text-xs font-medium uppercase tracking-wide text-slate-500">
                        Price Rate
                      </th>
<th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
                        Tax
                      </th>
<th className="px-3 py-2 text-right text-xs font-medium uppercase tracking-wide text-slate-500">
                        Total
                      </th>
<th className="px-3 py-2"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 bg-white">

<tr className="">

<td className="px-3 py-2">
<button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          Product
                          <i className="lucide lucide-chevron-down text-slate-400" style={{strokeWidth: '1.5'}}></i>
</button>
</td>

<td className="px-3 py-2">
<button className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<span className="">Wall graphics</span>
<i className="lucide lucide-chevron-down text-slate-400" style={{strokeWidth: '1.5'}}></i>
</button>
</td>

<td className="px-3 py-2">
<button className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<span className="">Sales of Products</span>
<i className="lucide lucide-chevron-down text-slate-400" style={{strokeWidth: '1.5'}}></i>
</button>
</td>

<td className="px-3 py-2 text-right">
<input className="w-full rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-right text-xs text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" type="number" value="10000"/>
</td>

<td className="px-3 py-2">
<button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                          Add tax
                          <i className="lucide lucide-chevron-down text-slate-400" style={{strokeWidth: '1.5'}}></i>
</button>
</td>

<td className="px-3 py-2 text-right text-xs text-slate-900">
                        ₹10,000.00
                      </td>
<td className="px-3 py-2 text-right">
<button className="inline-flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-trash-2" style={{strokeWidth: '1.5'}}></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-wrap items-center justify-between gap-3 text-sm">
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 text-xs font-medium text-emerald-700 bg-emerald-50 border-emerald-500 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
<i className="lucide lucide-plus" style={{strokeWidth: '1.5'}}></i>
                    New Item
                  </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-list-plus" style={{strokeWidth: '1.5'}}></i>
                    Add Existing Item
                  </button>
</div>

<div className="space-y-1 text-xs text-slate-700">
<div className="flex justify-between gap-6">
<span className="">Subtotal</span>
<span>₹10,000.00</span>
</div>
<div className="flex justify-between gap-6">
<span className="">Tax</span>
<span>₹0.00</span>
</div>
<div className="flex justify-between gap-6 font-medium text-slate-900">
<span>Total INR</span>
<span>₹10,000.00</span>
</div>
</div>
</div>
</div>
</details>

<details className="group rounded-xl border border-slate-200 bg-white">
<summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
<i className="lucide lucide-calendar-fold" style={{strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm font-medium text-slate-900">
                  Payment Schedule (Optional)
                </span>
</div>
<i className="lucide lucide-chevron-down text-slate-400 group-open:rotate-180 transition-transform" style={{strokeWidth: '1.5'}}></i>
</summary>
<div className="border-t border-slate-200 px-4 py-4 space-y-3">
<div className="grid gap-3 sm:grid-cols-3">
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                    Due On
                  </label>
<button className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<span>26/11/2025</span>
<i className="lucide lucide-calendar" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                    Amount
                  </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" type="number" value="10000"/>
</div>
<div className="flex items-end">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-plus" style={{strokeWidth: '1.5'}}></i>
                    Add Another
                  </button>
</div>
</div>
</div>
</details>
</div>

<div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-5 py-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" id="cancelInvoiceBtn">
<i className="lucide lucide-arrow-left" style={{strokeWidth: '1.5'}}></i>
            Cancel
          </button>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-save" style={{strokeWidth: '1.5'}}></i>
              Save Draft
            </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 active:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" id="savePreviewBtn">
<i className="lucide lucide-eye" style={{strokeWidth: '1.5'}}></i>
              Save &amp; Preview
            </button>
</div>
</div>
</div>
</div>

<div aria-modal="true" className="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 backdrop-blur" id="clientModal" role="dialog">
<div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
<div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">
              Add Client
            </h3>
<p className="text-base text-slate-600">
              Save client details to reuse across invoices.
            </p>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" id="closeClientModal">
<i className="lucide lucide-x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="max-h-[70vh] overflow-y-auto px-5 py-4 space-y-4 text-sm">
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                Customer Name
              </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Ajith" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                Company Name
              </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="BrandMagics Software Labs" type="text"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">Email</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="client@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">Phone</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="+91 98765 43210" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">Address</label>
<textarea className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Street, area, building" rows="2"></textarea>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">Country</label>
<button className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<span>India</span>
<i className="lucide lucide-chevron-down text-slate-400" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">City</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Kochi" type="text"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">State</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Kerala" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">Zip Code</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="682001" type="text"/>
</div>
</div>
</div>
<div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-5 py-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" id="cancelClientBtn">
            Cancel
          </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" id="saveClientBtn">
<i className="lucide lucide-check" style={{strokeWidth: '1.5'}}></i>
            Save Client
          </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-30 hidden items-center justify-center bg-slate-900/5" id="previewScreen">
<div className="mx-auto flex h-full max-w-6xl flex-col px-4 py-4 space-y-4">

<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" id="backToEditorBtn">
<i className="lucide lucide-arrow-left" style={{strokeWidth: '1.5'}}></i>
</button>
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">
                Invoice Preview
              </h2>
<p className="text-base text-slate-600">
                Review invoice layout, configure email &amp; payment methods.
              </p>
</div>
</div>
<div className="flex items-center gap-2">

<div className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1">
<button className="inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-minus" style={{strokeWidth: '1.5'}}></i>
</button>
<span className="px-1 text-sm text-slate-800">100%</span>
<button className="inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-plus" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>

<div className="flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white">
<div className="flex h-full flex-col lg:flex-row">

<div className="flex-1 border-b border-slate-200 lg:border-b-0 lg:border-r bg-slate-50">
<div className="h-full overflow-auto bg-slate-100 p-4">
<div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
<div className="flex items-start justify-between gap-3">
<div className="space-y-1">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center">
<i className="lucide lucide-receipt-indian-rupee text-white" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm font-medium text-slate-900">
                          BrandMagics Software Labs
                        </span>
</div>
<p className="text-xs text-slate-500">
                        123, Software Park Road, Kochi, Kerala, IN 682001
                      </p>
</div>
<div className="text-right space-y-1">
<p className="text-xs font-medium text-slate-600">Invoice</p>
<p className="text-sm font-semibold tracking-tight text-slate-900">
                        INV-0004
                      </p>
<p className="text-xs text-slate-500">
                        Invoice Date: 19/11/2025
                        
                        Due Date: 26/11/2025
                      </p>
</div>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs">
<div className="space-y-1">
<p className="font-medium text-slate-600">Bill To</p>
<p className="text-slate-800">Ajith</p>
<p className="text-slate-500">
                        BrandMagics Software Labs
                        
                        Kochi, Kerala, IN 682001
                      </p>
</div>
<div className="space-y-1">
<p className="font-medium text-slate-600">Payment Terms</p>
<p className="text-slate-500">
                        Due within 7 days of invoice date.
                      </p>
</div>
</div>

<div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
<table className="min-w-full divide-y divide-slate-200 text-xs">
<thead className="bg-slate-50">
<tr>
<th className="px-3 py-2 text-left font-medium text-slate-600">
                            Item
                          </th>
<th className="px-3 py-2 text-left font-medium text-slate-600">
                            Account
                          </th>
<th className="px-3 py-2 text-right font-medium text-slate-600">
                            Rate
                          </th>
<th className="px-3 py-2 text-right font-medium text-slate-600">
                            Tax
                          </th>
<th className="px-3 py-2 text-right font-medium text-slate-600">
                            Amount
                          </th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 bg-white">
<tr>
<td className="px-3 py-2 text-slate-900">
                            Wall graphics
                          </td>
<td className="px-3 py-2 text-slate-600">
                            Sales of Products
                          </td>
<td className="px-3 py-2 text-right text-slate-600">
                            ₹10,000.00
                          </td>
<td className="px-3 py-2 text-right text-slate-600">
                            ₹0.00
                          </td>
<td className="px-3 py-2 text-right text-slate-900">
                            ₹10,000.00
                          </td>
</tr>
</tbody>
</table>
</div>

<div className="mt-4 flex justify-end">
<div className="w-full max-w-xs space-y-1 text-xs">
<div className="flex justify-between">
<span className="text-slate-500">Subtotal</span>
<span className="text-slate-800">₹10,000.00</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Tax</span>
<span className="text-slate-800">₹0.00</span>
</div>
<div className="flex justify-between border-t border-slate-200 pt-2 font-medium text-slate-900">
<span>Total</span>
<span>₹10,000.00</span>
</div>
</div>
</div>

<div className="mt-4 border-t border-slate-200 pt-2 text-xs text-slate-500">
<p>
                      Thank you for your business. Please make payment using the
                      methods shared in this invoice email.
                    </p>
</div>
</div>
</div>
</div>

<div className="w-full max-w-md bg-white">

<div className="border-b border-slate-200">
<nav className="flex">
<button className="preview-tab flex-1 border-b-2 border-emerald-500 px-4 py-2 text-center text-sm font-medium text-emerald-700" data-tab="email">
                    Email
                  </button>
<button className="preview-tab flex-1 border-b-2 border-transparent px-4 py-2 text-center text-sm font-medium text-slate-600 hover:text-emerald-700" data-tab="payments">
                    Payment Methods
                  </button>
<button className="preview-tab hidden sm:flex-1 sm:block border-b-2 border-transparent px-4 py-2 text-center text-sm font-medium text-slate-600 hover:text-emerald-700" data-tab="attachments">
                    Attachments
                  </button>
<button className="preview-tab hidden sm:flex-1 sm:block border-b-2 border-transparent px-4 py-2 text-center text-sm font-medium text-slate-600 hover:text-emerald-700" data-tab="brands">
                    Brands
                  </button>
</nav>
</div>

<div className="h-full overflow-y-auto px-4 py-4 space-y-4 text-sm">

<div className="preview-panel space-y-3" id="tab-email">
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">To</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" type="text" value="ajith@example.com"/>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                        CC
                      </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                        BCC
                      </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                      Subject
                    </label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" type="text" value="Invoice INV-0004 for BrandMagics Software Labs"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                      Message
                    </label>
<textarea className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" rows="4">Hi Ajith,

Please find attached the invoice INV-0004 for BrandMagics Software Labs PLM implementation.

Payment is due on 26/11/2025. You can complete the payment using the online methods enabled for this invoice.

Best regards,
Finance Team</textarea>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-800">
                        Overdue reminders
                      </span>
<span className="text-xs text-slate-500">
                        Automatically send follow-ups
                      </span>
</div>
<div className="flex flex-wrap gap-2">

<button className="inline-flex items-center gap-1 rounded-full border border-emerald-500 bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700 hover:bg-emerald-100">
                        1 day
                      </button>

<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 hover:border-emerald-500 hover:bg-emerald-50/40">
                        4 days
                      </button>

<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 hover:border-emerald-500 hover:bg-emerald-50/40">
                        7 days
                      </button>

<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 hover:border-emerald-500 hover:bg-emerald-50/40">
                        14 days
                      </button>
</div>
</div>
</div>

<div className="preview-panel hidden space-y-3" id="tab-payments">
<p className="text-sm text-slate-700">
                    Enable payment gateways for faster collections.
                  </p>

<div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
<div className="flex items-center gap-3">
<div className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-100">
<i className="lucide lucide-credit-card" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-0.5">
<p className="text-sm font-medium text-slate-900">Stripe</p>
<p className="text-xs text-slate-500">
                          Accept cards and wallets globally.
                        </p>
</div>
</div>
<div className="flex items-center gap-2">

<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-300 transition">
<span className="inline-block h-4 w-4 translate-x-0.5 rounded-full bg-white shadow transition"></span>
</button>
<button className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40">
                        Connect
                      </button>
</div>
</div>

<div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
<div className="flex items-center gap-3">
<div className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-100">
<i className="lucide lucide-banknote" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-0.5">
<p className="text-sm font-medium text-slate-900">
                          Razorpay
                        </p>
<p className="text-xs text-slate-500">
                          Optimized for India with UPI, cards, and wallets.
                        </p>
</div>
</div>
<div className="flex items-center gap-2">

<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-emerald-500 transition">
<span className="inline-block h-4 w-4 translate-x-4 rounded-full bg-white shadow transition"></span>
</button>
<button className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40">
                        Manage
                      </button>
</div>
</div>

<div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
<div className="flex items-center gap-3">
<div className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-100">
<i className="lucide lucide-building-2" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-0.5">
<p className="text-sm font-medium text-slate-900">
                          Bank Transfer
                        </p>
<p className="text-xs text-slate-500">
                          Share your bank details on the invoice.
                        </p>
</div>
</div>
<button className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40">
                      Edit Details
                    </button>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                      Payment instructions
                    </label>
<textarea className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Add any specific payment references or instructions for your client." rows="3">Please include the invoice number INV-0004 as the payment reference.</textarea>
</div>
</div>

<div className="preview-panel hidden space-y-3" id="tab-attachments">
<p className="text-sm text-slate-700">
                    Attach supporting documents such as contracts, estimates, or
                    receipts.
                  </p>
<div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center">
<i className="lucide lucide-file-up text-slate-400" style={{strokeWidth: '1.5'}}></i>
<p className="text-sm font-medium text-slate-800">
                      Upload files
                    </p>
<p className="text-xs text-slate-500">
                      Drag &amp; drop or click to browse. PDF, JPG, PNG up to 10
                      MB.
                    </p>
<button className="mt-1 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-folder-open" style={{strokeWidth: '1.5'}}></i>
                      Browse files
                    </button>
</div>

<div className="space-y-1.5">
<p className="text-xs font-medium text-slate-600">
                      Attached files
                    </p>
<div className="space-y-1">
<div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
<div className="flex items-center gap-2">
<i className="lucide lucide-file-text text-slate-400" style={{strokeWidth: '1.5'}}></i>
<div>
<p className="text-xs font-medium text-slate-800">
                              PLM-Scope-Of-Work.pdf
                            </p>
<p className="text-[11px] text-slate-500">
                              1.2 MB · Added just now
                            </p>
</div>
</div>
<button className="inline-flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>

<div className="preview-panel hidden space-y-3" id="tab-brands">
<p className="text-sm text-slate-700">
                    Choose how your brand appears on this invoice email and PDF.
                  </p>
<div className="space-y-2">
<p className="text-xs font-medium text-slate-600">
                      Brand themes
                    </p>
<div className="grid grid-cols-2 gap-3">

<button className="group flex flex-col items-start gap-2 rounded-lg border border-emerald-500 bg-emerald-50/40 px-3 py-2 text-left">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500 text-white text-xs font-semibold">
                            BM
                          </span>
<span className="text-xs font-medium text-slate-900">
                            BrandMagics Default
                          </span>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] text-emerald-700">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          Active
                        </span>
</button>

<button className="group flex flex-col items-start gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-left hover:border-emerald-500 hover:bg-emerald-50/40">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-slate-800 text-white text-xs font-semibold">
                            MN
                          </span>
<span className="text-xs font-medium text-slate-900">
                            Minimal
                          </span>
</div>
<span className="text-[11px] text-slate-500">
                          Clean layout with no accent color.
                        </span>
</button>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-slate-800">
                      Brand footer note
                    </label>
<textarea className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Add custom legal or marketing text to show at the bottom of invoices." rows="3">BrandMagics Software Labs Pvt Ltd · GSTIN 22AAAAA0000A1Z5 · www.brandmagics.com</textarea>
</div>
</div>
</div>

<div className="border-t border-slate-200 bg-slate-50 px-4 py-3">
<div className="flex flex-wrap items-center justify-between gap-2">
<p className="text-xs text-slate-500">
                    The invoice PDF and email preview shown here will match what
                    your client receives.
                  </p>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<i className="lucide lucide-mail-plus" style={{strokeWidth: '1.5'}}></i>
                      Send test email
                    </button>
<button className="inline-flex items-center gap-1 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
<i className="lucide lucide-send" style={{strokeWidth: '1.5'}}></i>
                      Send invoice
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>


    </>
  );
}
