import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function () {
      const tasksTextarea = document.getElementById('tasksTextarea');
      const sampleTasksBtn = document.getElementById('sampleTasksBtn');
      const tasksFileInput = document.getElementById('tasksFileInput');

      const studioNameInput = document.getElementById('studioNameInput');
      const fromNameInput = document.getElementById('fromNameInput');
      const clientNameInput = document.getElementById('clientNameInput');
      const invoiceNumberInput = document.getElementById('invoiceNumberInput');
      const invoiceDateInput = document.getElementById('invoiceDateInput');
      const invoiceDueInput = document.getElementById('invoiceDueInput');
      const currencySelect = document.getElementById('currencySelect');
      const taxInput = document.getElementById('taxInput');
      const discountInput = document.getElementById('discountInput');
      const accentColorInput = document.getElementById('accentColorInput');

      const logoInput = document.getElementById('logoInput');
      const logoPreview = document.getElementById('logoPreview');
      const logoPlaceholder = document.getElementById('logoPlaceholder');
      const logoBlock = document.getElementById('logoBlock');
      const logoInitials = document.getElementById('logoInitials');

      const previewStudioName = document.getElementById('previewStudioName');
      const previewFromName = document.getElementById('previewFromName');
      const previewClientName = document.getElementById('previewClientName');
      const previewInvoiceNumber = document.getElementById('previewInvoiceNumber');
      const previewInvoiceDate = document.getElementById('previewInvoiceDate');
      const previewInvoiceDue = document.getElementById('previewInvoiceDue');
      const previewCurrencyNote = document.getElementById('previewCurrencyNote');
      const previewSubtotal = document.getElementById('previewSubtotal');
      const previewTaxRate = document.getElementById('previewTaxRate');
      const previewTaxAmount = document.getElementById('previewTaxAmount');
      const previewDiscount = document.getElementById('previewDiscount');
      const previewTotal = document.getElementById('previewTotal');
      const lineItemsContainer = document.getElementById('lineItemsContainer');

      const generateBtn = document.getElementById('generateBtn');
      const printPdfBtn = document.getElementById('printPdfBtn');
      const clientViewBtn = document.getElementById('clientViewBtn');
      const savePresetBtn = document.getElementById('savePresetBtn');
      const invoiceSheet = document.getElementById('invoiceSheet');
      const invoiceOnlyPdfBtn = document.getElementById('invoiceOnlyPdfBtn');
      const invoicePrintRoot = document.getElementById('invoicePrintRoot');
      const invoicePrintWrapper = document.getElementById('invoicePrintWrapper');

      function parseTasks(text) {
        const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        const tasks = [];
        for (const line of lines) {
          const parts = line.split(/·|\t|,/).map(p => p.trim()).filter(Boolean);
          if (parts.length < 3) continue;
          const name = parts[0];
          const hours = parseFloat(parts[1].replace(',', '.')) || 0;
          const rate = parseFloat(parts[2].replace(',', '.')) || 0;
          tasks.push({ name, hours, rate });
        }
        return tasks;
      }

      function formatCurrency(value, currencyCode) {
        const symbolMap = { USD: '$', EUR: '€', GBP: '£', CAD: '$', AUD: '$' };
        const symbol = symbolMap[currencyCode] || '';
        const formatted = value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        return symbol ? symbol + formatted : formatted + ' ' + currencyCode;
      }

      function parsePercentOrAmount(input, base) {
        if (!input) return { type: 'none', value: 0 };
        const trimmed = input.toString().trim();
        if (!trimmed) return { type: 'none', value: 0 };
        if (trimmed.endsWith('%')) {
          const n = parseFloat(trimmed.slice(0, -1));
          if (isNaN(n)) return { type: 'none', value: 0 };
          return { type: 'percent', value: base * (n / 100), raw: n };
        }
        const n = parseFloat(trimmed.replace(',', '.'));
        if (isNaN(n)) return { type: 'none', value: 0 };
        return { type: 'absolute', value: n };
      }

      function updateLineItems(tasks, currencyCode) {
        lineItemsContainer.innerHTML = '';
        if (!tasks.length) {
          const emptyRow = document.createElement('div');
          emptyRow.className = 'grid grid-cols-12 bg-white';
          emptyRow.innerHTML = `
            <div class="col-span-12 py-3 sm:py-3.5 px-3 sm:px-4 text-[0.72rem] sm:text-xs text-slate-500">
              Add tasks on the left and click “Generate invoice” to see them here.
            </div>
          `;
          lineItemsContainer.appendChild(emptyRow);
          return 0;
        }
        let subtotal = 0;
        tasks.forEach(task => {
          const amount = task.hours * task.rate;
          subtotal += amount;
          const row = document.createElement('div');
          row.className = 'grid grid-cols-12 bg-white';
          row.innerHTML = `
            <div class="col-span-6 sm:col-span-6 py-3 sm:py-3.5 px-3 sm:px-4">
              <p class="text-slate-900 font-medium tracking-tight">${task.name || ''}</p>
              <p class="text-[0.72rem] sm:text-xs text-slate-500 mt-0.5">${task.hours || 0}h · ${formatCurrency(task.rate || 0, currencyCode)}</p>
            </div>
            <div class="col-span-2 hidden sm:flex items-center justify-end py-3 sm:py-3.5 px-3 sm:px-4 text-slate-600">
              ${task.hours || 0}
            </div>
            <div class="col-span-3 sm:col-span-2 flex items-center justify-end py-3 sm:py-3.5 px-3 sm:px-4 text-slate-600">
              ${formatCurrency(task.rate || 0, currencyCode)}
            </div>
            <div class="col-span-3 sm:col-span-2 flex items-center justify-end py-3 sm:py-3.5 px-3 sm:px-4 text-slate-900 font-medium">
              ${formatCurrency(amount, currencyCode)}
            </div>
          `;
          lineItemsContainer.appendChild(row);
        });
        return subtotal;
      }

      function updateTotals(subtotal, currencyCode) {
        const taxInfo = parsePercentOrAmount(taxInput.value, subtotal);
        const discountInfo = parsePercentOrAmount(discountInput.value, subtotal);

        const taxAmount = taxInfo.value || 0;
        const discountAmount = discountInfo.value || 0;
        const total = Math.max(0, subtotal + taxAmount - discountAmount);

        previewSubtotal.textContent = formatCurrency(subtotal, currencyCode);
        previewTaxRate.textContent = (taxInfo.type === 'percent'
          ? (taxInfo.raw || 0) + '%'
          : '0%');
        previewTaxAmount.textContent = formatCurrency(taxAmount, currencyCode);
        previewDiscount.textContent = discountAmount
          ? '-' + formatCurrency(discountAmount, currencyCode)
          : formatCurrency(0, currencyCode);
        previewTotal.textContent = formatCurrency(total, currencyCode);
      }

      function syncMetaToPreview(currencyCode) {
        const studioName = studioNameInput.value.trim() || 'Freelance Studio';
        previewStudioName.textContent = studioName;
        previewFromName.textContent = fromNameInput.value.trim() || studioName;
        previewClientName.textContent = clientNameInput.value.trim() || 'Client';

        const invNum = invoiceNumberInput.value.trim();
        if (invNum) previewInvoiceNumber.textContent = invNum;

        if (invoiceDateInput.value) {
          const d = new Date(invoiceDateInput.value);
          if (!isNaN(d.getTime())) {
            previewInvoiceDate.textContent = d.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: '2-digit'
            });
          }
        }

        if (invoiceDueInput.value.trim()) {
          previewInvoiceDue.textContent = invoiceDueInput.value.trim();
        }

        const currencyLabelMap = {
          USD: 'USD',
          EUR: 'EUR',
          GBP: 'GBP',
          CAD: 'CAD',
          AUD: 'AUD'
        };
        previewCurrencyNote.textContent = 'All amounts in ' + (currencyLabelMap[currencyCode] || currencyCode);

        const initials = studioName
          .split(' ')
          .filter(Boolean)
          .map(w => w[0])
          .join('')
          .slice(0, 3);
        logoInitials.textContent = initials || 'fi';

        logoBlock.style.backgroundColor = accentColorInput.value || '#38bdf8';
      }

      function handleGenerate() {
        const currencyCode = currencySelect.value || 'USD';
        const tasks = parseTasks(tasksTextarea.value || tasksTextarea.placeholder || '');
        const subtotal = updateLineItems(tasks, currencyCode);
        updateTotals(subtotal, currencyCode);
        syncMetaToPreview(currencyCode);
      }

      sampleTasksBtn.addEventListener('click', () => {
        tasksTextarea.value = `Homepage design · 6 · 95
Frontend implementation · 12 · 85
Client workshop · 3 · 120`;
      });

      tasksFileInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const text = ev.target.result;
          const lines = text.split(/\r?\n/).filter(Boolean);
          const body = lines[0].toLowerCase().includes('task') ? lines.slice(1) : lines;
          tasksTextarea.value = body.join('\n');
        };
        reader.readAsText(file);
      });

      logoInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          logoPreview.src = ev.target.result;
          logoPreview.classList.remove('hidden');
          logoPlaceholder.classList.add('hidden');
          logoBlock.style.backgroundImage = `url(${ev.target.result})`;
          logoBlock.style.backgroundSize = 'cover';
          logoBlock.style.backgroundPosition = 'center';
          logoInitials.style.display = 'none';
        };
        reader.readAsDataURL(file);
      });

      accentColorInput.addEventListener('input', () => {
        logoBlock.style.backgroundColor = accentColorInput.value || '#38bdf8';
      });

      studioNameInput.addEventListener('input', () => syncMetaToPreview(currencySelect.value || 'USD'));
      fromNameInput.addEventListener('input', () => syncMetaToPreview(currencySelect.value || 'USD'));
      clientNameInput.addEventListener('input', () => syncMetaToPreview(currencySelect.value || 'USD'));
      invoiceNumberInput.addEventListener('input', () => syncMetaToPreview(currencySelect.value || 'USD'));
      invoiceDateInput.addEventListener('change', () => syncMetaToPreview(currencySelect.value || 'USD'));
      invoiceDueInput.addEventListener('input', () => syncMetaToPreview(currencySelect.value || 'USD'));
      currencySelect.addEventListener('change', () => handleGenerate());
      taxInput.addEventListener('input', () => handleGenerate());
      discountInput.addEventListener('input', () => handleGenerate());

      generateBtn.addEventListener('click', () => {
        handleGenerate();
      });

      printPdfBtn.addEventListener('click', () => {
        const originalTitle = document.title;
        document.title = previewInvoiceNumber.textContent || originalTitle;
        window.print();
        setTimeout(() => {
          document.title = originalTitle;
        }, 500);
      });

      clientViewBtn.addEventListener('click', () => {
        invoiceSheet.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });

      const PRESET_KEY = 'fi_invoice_preset_v1';

      savePresetBtn.addEventListener('click', () => {
        const preset = {
          studioName: studioNameInput.value,
          fromName: fromNameInput.value,
          clientName: clientNameInput.value,
          accentColor: accentColorInput.value,
          currency: currencySelect.value,
          tax: taxInput.value,
          discount: discountInput.value
        };
        try {
          localStorage.setItem(PRESET_KEY, JSON.stringify(preset));
        } catch (e) {
          console.warn('Could not save preset', e);
        }
      });

      (function loadPreset() {
        try {
          const raw = localStorage.getItem(PRESET_KEY);
          if (!raw) return;
          const preset = JSON.parse(raw);
          if (preset.studioName) studioNameInput.value = preset.studioName;
          if (preset.fromName) fromNameInput.value = preset.fromName;
          if (preset.clientName) clientNameInput.value = preset.clientName;
          if (preset.accentColor) accentColorInput.value = preset.accentColor;
          if (preset.currency) currencySelect.value = preset.currency;
          if (preset.tax) taxInput.value = preset.tax;
          if (preset.discount) discountInput.value = preset.discount;
          syncMetaToPreview(currencySelect.value || 'USD');
          handleGenerate();
        } catch (e) {
          console.warn('Could not load preset', e);
        }
      })();

      // Invoice-only PDF (print) - only the invoice sheet content
      invoiceOnlyPdfBtn.addEventListener('click', () => {
        const clone = invoiceSheet.cloneNode(true);
        invoicePrintWrapper.innerHTML = '';
        invoicePrintWrapper.appendChild(clone);

        const originalTitle = document.title;
        document.body.classList.add('invoice-only');
        document.title = previewInvoiceNumber.textContent || originalTitle;
        invoicePrintRoot.classList.remove('hidden');

        window.print();

        setTimeout(() => {
          document.body.classList.remove('invoice-only');
          invoicePrintRoot.classList.add('hidden');
          document.title = originalTitle;
        }, 500);
      });

      handleGenerate();
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<style>
    @media print {
      body.invoice-only #invoiceSheet {
        box-shadow: none !important;
      }
      body.invoice-only > *:not(#invoicePrintRoot) {
        display: none !important;
      }
      body.invoice-only #invoicePrintRoot {
        display: block !important;
      }
      body.invoice-only #invoicePrintWrapper {
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
        margin: 0 !important;
      }
    }
  </style>
<div className="hidden" id="invoicePrintRoot">
<div id="invoicePrintWrapper">

</div>
</div>
<div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full gap-8 lg:gap-10 py-10 lg:py-16 px-4 sm:px-6 lg:px-8">

<section className="w-full lg:w-5/12 flex flex-col gap-8">

<header className="flex items-start justify-between gap-4">
<div>
<div className="uppercase tracking-[0.18em] text-xs text-slate-400 mb-1">Studio</div>
<div className="inline-flex items-center gap-2">
<span className="font-semibold tracking-tight text-lg sm:text-xl">fi.</span>
<span className="text-[0.72rem] sm:text-xs text-slate-500 border border-slate-800 rounded-full px-2 py-0.5">Freelance Invoicing</span>
</div>
<h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold text-slate-50">
            Generate branded invoices in seconds.
          </h1>
<p className="mt-3 text-sm sm:text-base text-slate-300 max-w-md">
            Upload your task list, add your branding, and export a clean, client‑ready invoice instantly.
          </p>
</div>
</header>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
<div className="border border-slate-800/80 bg-slate-900/40 rounded-2xl p-3.5 sm:p-4 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-400 uppercase tracking-[0.16em]">Step 1</span>
<span className="inline-flex items-center justify-center rounded-full bg-slate-800 text-[0.7rem] text-slate-200 px-2 py-0.5">
              Tasks
            </span>
</div>
<p className="text-sm sm:text-base text-slate-100 font-medium tracking-tight">Upload tasks</p>
<p className="text-xs text-slate-400">
            Import from CSV, spreadsheet or paste a list.
          </p>
</div>
<div className="border border-slate-800/80 bg-slate-900/30 rounded-2xl p-3.5 sm:p-4 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-400 uppercase tracking-[0.16em]">Step 2</span>
<span className="inline-flex items-center justify-center rounded-full bg-slate-800 text-[0.7rem] text-slate-200 px-2 py-0.5">
              Brand
            </span>
</div>
<p className="text-sm sm:text-base text-slate-100 font-medium tracking-tight">Add branding</p>
<p className="text-xs text-slate-400">
            Logo, colors, and invoice details in one place.
          </p>
</div>
<div className="border border-slate-800/80 bg-slate-900/20 rounded-2xl p-3.5 sm:p-4 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-400 uppercase tracking-[0.16em]">Step 3</span>
<span className="inline-flex items-center justify-center rounded-full bg-lime-400/10 text-[0.7rem] text-lime-300 px-2 py-0.5">
              Ready
            </span>
</div>
<p className="text-sm sm:text-base text-slate-100 font-medium tracking-tight">Export invoice</p>
<p className="text-xs text-slate-400">
            Download as PDF or share a secure link.
          </p>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="border border-slate-800 bg-slate-900/40 rounded-2xl p-4 sm:p-5">
<div className="flex items-center justify-between gap-3 mb-3">
<div>
<h2 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">Tasks input</h2>
<p className="text-xs sm:text-sm text-slate-400">
                Upload a CSV or spreadsheet, or paste tasks manually.
              </p>
</div>
<span className="inline-flex items-center gap-1.5 text-[0.7rem] text-slate-300 bg-slate-800/70 border border-slate-700/80 rounded-full px-2.5 py-1">
<span className="iconify" data-height="14" data-icon="lucide:zap" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
              Auto-map
            </span>
</div>
<div className="flex flex-col gap-3">

<label className="relative border border-dashed border-slate-700 hover:border-slate-500/80 bg-slate-950/40 rounded-xl flex flex-col items-center justify-center gap-2 py-6 cursor-pointer transition-colors">
<input accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="hidden" id="tasksFileInput" type="file"/>
<div className="inline-flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 w-9 h-9">
<span className="iconify text-slate-200" data-height="18" data-icon="lucide:upload-cloud" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="text-center">
<p className="text-xs sm:text-sm text-slate-100 font-medium tracking-tight">
                  Drop your tasks file here
                </p>
<p className="text-[0.72rem] sm:text-xs text-slate-400">
                  CSV · columns: Task, Hours, Rate
                </p>
</div>
</label>

<div className="flex items-center gap-3 text-[0.7rem] text-slate-500">
<div className="h-px flex-1 bg-slate-800"></div>
<span>or paste tasks</span>
<div className="h-px flex-1 bg-slate-800"></div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between text-[0.7rem] text-slate-400">
<span>One task per line (Task · Hours · Rate)</span>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-slate-200 hover:text-white" id="sampleTasksBtn" type="button">
<span className="iconify" data-height="13" data-icon="lucide:sparkles" data-width="13" style={{strokeWidth: '1.5'}}></span>
                  Sample
                </button>
</div>
<textarea className="w-full rounded-xl bg-slate-950/60 border border-slate-800 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/60 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 resize-none min-h-[7rem] px-3.5 py-2.5" id="tasksTextarea" placeholder="Homepage design · 6 · 95
Frontend implementation · 12 · 85
Client workshop · 3 · 120"></textarea>
</div>
</div>
</div>

<div className="border border-slate-800 bg-slate-900/50 rounded-2xl p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">Brand &amp; invoice details</h2>
<p className="text-xs sm:text-sm text-slate-400">
                Set your logo, colors, and payment details once. Reuse every time.
              </p>
</div>
<button className="inline-flex items-center gap-1.5 text-[0.7rem] text-slate-300 hover:text-slate-50" id="savePresetBtn" type="button">
<span className="iconify" data-height="14" data-icon="lucide:save" data-width="14" style={{strokeWidth: '1.5'}}></span>
              Save preset
            </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs text-slate-300">
<span>Logo &amp; brand</span>
<span className="text-[0.7rem] text-slate-500">Optional</span>
</div>
<div className="flex items-center gap-3">
<label className="relative border border-dashed border-slate-700 hover:border-slate-500/80 bg-slate-950/40 rounded-lg flex items-center justify-center w-16 h-16 cursor-pointer transition-colors overflow-hidden">
<input accept="image/*" className="hidden" id="logoInput" type="file"/>
<img alt="" className="hidden w-full h-full object-cover" id="logoPreview"/>
<span className="iconify text-slate-300" data-height="20" data-icon="lucide:image-plus" data-width="20" id="logoPlaceholder" style={{strokeWidth: '1.5'}}></span>
</label>
<div className="flex-1 flex flex-col gap-2">
<input className="w-full rounded-lg bg-slate-950/60 border border-slate-800 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/60 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 px-3 py-2" id="studioNameInput" placeholder="Studio name" type="text"/>
<div className="flex items-center gap-2">
<input className="w-7 h-7 rounded-full border border-sky-300/60 cursor-pointer" id="accentColorInput" style={{backgroundColor: '#38bdf8'}} type="color"/>
<button className="text-[0.7rem] text-slate-200 hover:text-white inline-flex items-center gap-1 cursor-default" type="button">
<span className="iconify" data-height="13" data-icon="lucide:palette" data-width="13" style={{strokeWidth: '1.5'}}></span>
                      Accent color
                    </button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs text-slate-300">
<span>Invoice meta</span>
<span className="text-[0.7rem] text-slate-500">Auto-filled</span>
</div>
<div className="grid grid-cols-2 gap-2">
<input className="w-full rounded-lg bg-slate-950/60 border border-slate-800 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/60 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 px-3 py-2 col-span-2" id="invoiceNumberInput" placeholder="Invoice #2025-001" type="text"/>
<input className="w-full rounded-lg bg-slate-950/60 border border-slate-800 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/60 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 px-3 py-2" id="invoiceDateInput" type="date"/>
<input className="w-full rounded-lg bg-slate-950/60 border border-slate-800 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/60 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 px-3 py-2" id="invoiceDueInput" placeholder="Due in 14 days" type="text"/>
</div>
<div className="grid grid-cols-2 gap-2">
<input className="w-full rounded-lg bg-slate-950/60 border border-slate-800 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/60 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 px-3 py-2" id="fromNameInput" placeholder="Your name / business" type="text"/>
<input className="w-full rounded-lg bg-slate-950/60 border border-slate-800 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/60 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 px-3 py-2" id="clientNameInput" placeholder="Client name" type="text"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-1">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-slate-300">Currency</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg bg-slate-950/60 border border-slate-800 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/60 outline-none text-xs sm:text-sm text-slate-100 px-3 py-2 pr-7" id="currencySelect">
<option selected="" value="USD">USD · $</option>
<option value="EUR">EUR · €</option>
<option value="GBP">GBP · £</option>
<option value="CAD">CAD · $</option>
<option value="AUD">AUD · $</option>
</select>
<span className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-slate-500">
<span className="iconify" data-height="14" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-slate-300">Tax rate</label>
<input className="w-full rounded-lg bg-slate-950/60 border border-slate-800 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/60 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 px-3 py-2" id="taxInput" placeholder="0%" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-slate-300">Discount</label>
<input className="w-full rounded-lg bg-slate-950/60 border border-slate-800 focus:border-slate-500 focus:ring-1 focus:ring-slate-500/60 outline-none text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 px-3 py-2" id="discountInput" placeholder="Optional (e.g. 10% or 100)" type="text"/>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold tracking-tight text-sm sm:text-base px-4 sm:px-5 py-2.5 shadow-[0_0_0_1px_rgba(15,23,42,0.8),0_18px_40px_rgba(56,189,248,0.4)] transition-colors w-full sm:w-auto" id="generateBtn" type="button">
<span className="iconify" data-height="18" data-icon="lucide:wand-2" data-width="18" style={{strokeWidth: '1.5'}}></span>
            Generate invoice
          </button>
<div className="flex items-center gap-3 text-[0.7rem] sm:text-xs text-slate-400">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-200 border border-slate-900/90"></div>
<div className="w-6 h-6 rounded-full bg-slate-500 border border-slate-900/90"></div>
<div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900/90 flex items-center justify-center text-[0.6rem] text-slate-200">
                +8
              </div>
</div>
<span>Used by independent designers, developers and studios.</span>
</div>
</div>
</div>
</section>

<section className="w-full lg:w-7/12 flex flex-col">
<div className="relative flex-1 border border-slate-800/90 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950/95 shadow-[0_30px_120px_rgba(15,23,42,0.9)] overflow-hidden">

<div className="flex items-center justify-between px-4 sm:px-6 pt-3 pb-2 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
<span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
<span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
</div>
<span className="ml-2 text-xs sm:text-sm text-slate-300">Invoice preview</span>
</div>
<div className="inline-flex items-center gap-1.5">
<button className="hidden sm:inline-flex items-center gap-1.5 text-[0.7rem] text-slate-200 bg-slate-900/80 border border-slate-700/80 rounded-lg px-2.5 py-1.5 hover:border-sky-500/70 hover:text-sky-200" id="clientViewBtn" type="button">
<span className="iconify" data-height="14" data-icon="lucide:eye" data-width="14" style={{strokeWidth: '1.5'}}></span>
              Client view
            </button>
<button className="inline-flex items-center gap-1.5 text-[0.7rem] text-slate-200 bg-slate-900/80 border border-slate-700/80 rounded-lg px-2.5 py-1.5 hover:border-sky-500/70 hover:text-sky-200" id="invoiceOnlyPdfBtn" type="button">
<span className="iconify" data-height="14" data-icon="lucide:file-text" data-width="14" style={{strokeWidth: '1.5'}}></span>
              Invoice only
            </button>
<button className="inline-flex items-center gap-1.5 text-[0.7rem] text-slate-950 bg-lime-400 hover:bg-lime-300 rounded-lg px-2.5 py-1.5 font-medium tracking-tight" id="printPdfBtn" type="button">
<span className="iconify" data-height="14" data-icon="lucide:download" data-width="14" style={{strokeWidth: '1.5'}}></span>
              PDF
            </button>
</div>
</div>

<div className="p-3 sm:p-5 md:p-7 lg:p-8">
<div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_22px_60px_rgba(15,23,42,0.55)] max-w-3xl mx-auto overflow-hidden" id="invoiceSheet">

<div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 px-5 sm:px-7 md:px-8 pt-6 pb-5 border-b border-slate-100">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-xs font-semibold tracking-tight text-white" id="logoBlock">
<span id="logoInitials">fi</span>
</div>
<div>
<div className="text-sm sm:text-base font-semibold tracking-tight text-slate-900" id="previewStudioName">Freelance Studio</div>
<p className="text-xs sm:text-sm text-slate-500 mt-0.5">Design &amp; development</p>
<p className="text-[0.72rem] sm:text-xs text-slate-500 mt-1">
                    invoice@freelancestudio.com · freelancestudio.com
                  </p>
</div>
</div>
<div className="text-right space-y-1">
<p className="text-[0.72rem] sm:text-xs uppercase tracking-[0.18em] text-slate-400">Invoice</p>
<p className="text-sm sm:text-base font-semibold tracking-tight text-slate-900" id="previewInvoiceNumber">#2025-001</p>
<div className="text-[0.72rem] sm:text-xs text-slate-500">
<p><span className="text-slate-400">Date:</span> <span id="previewInvoiceDate">22 Dec 2025</span></p>
<p><span className="text-slate-400">Due:</span> <span id="previewInvoiceDue">05 Jan 2026</span></p>
</div>
</div>
</div>

<div className="px-5 sm:px-7 md:px-8 py-5 flex flex-col md:flex-row gap-6 md:gap-8 border-b border-slate-100">
<div className="flex-1 space-y-1.5">
<p className="text-[0.72rem] sm:text-xs uppercase tracking-[0.16em] text-slate-400">Bill from</p>
<p className="text-sm sm:text-base font-medium tracking-tight text-slate-900" id="previewFromName">Freelance Studio</p>
<p className="text-xs sm:text-sm text-slate-500">Alex Carter</p>
<p className="text-xs sm:text-sm text-slate-500">
                  221B Market Street<br/>
                  San Francisco, CA 94103
                </p>
</div>
<div className="flex-1 space-y-1.5">
<p className="text-[0.72rem] sm:text-xs uppercase tracking-[0.16em] text-slate-400">Bill to</p>
<p className="text-sm sm:text-base font-medium tracking-tight text-slate-900" id="previewClientName">NovaTech Labs</p>
<p className="text-xs sm:text-sm text-slate-500">Finance Department</p>
<p className="text-xs sm:text-sm text-slate-500">
                  19 Orchard Road<br/>
                  London, UK
                </p>
</div>
</div>

<div className="px-5 sm:px-7 md:px-8 py-5 border-b border-slate-100">
<div className="flex items-center justify-between mb-3">
<p className="text-[0.72rem] sm:text-xs uppercase tracking-[0.16em] text-slate-400">Summary</p>
<p className="text-[0.72rem] sm:text-xs text-slate-400" id="previewCurrencyNote">All amounts in USD</p>
</div>
<div className="overflow-hidden rounded-xl border border-slate-100">

<div className="grid grid-cols-12 bg-slate-50/80 border-b border-slate-100 text-[0.7rem] sm:text-xs text-slate-500">
<div className="col-span-6 sm:col-span-6 py-2.5 sm:py-3 px-3 sm:px-4">Task</div>
<div className="col-span-2 hidden sm:block py-2.5 sm:py-3 px-3 sm:px-4 text-right">Hours</div>
<div className="col-span-3 sm:col-span-2 py-2.5 sm:py-3 px-3 sm:px-4 text-right">Rate</div>
<div className="col-span-3 sm:col-span-2 py-2.5 sm:py-3 px-3 sm:px-4 text-right">Amount</div>
</div>

<div className="divide-y divide-slate-100 text-xs sm:text-sm" id="lineItemsContainer">

</div>
</div>
</div>

<div className="px-5 sm:px-7 md:px-8 pt-4 pb-5 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end">
<div className="flex-1 text-[0.72rem] sm:text-xs text-slate-500 space-y-2">
<p className="text-slate-700 font-medium tracking-tight text-xs sm:text-sm">Payment</p>
<p>
                  Bank transfer preferred. Please include invoice number as reference.
                </p>
<p className="text-slate-500">
                  IBAN: <span className="font-medium text-slate-700">GB29 NWBK 6016 1331 9268 19</span><br/>
                  SWIFT: <span className="font-medium text-slate-700">NWBKGB2L</span>
</p>
</div>
<div className="w-full md:w-64 space-y-1.5 text-xs sm:text-sm">
<div className="flex justify-between text-slate-600">
<span>Subtotal</span>
<span id="previewSubtotal">$0.00</span>
</div>
<div className="flex justify-between text-slate-600">
<span>Tax (<span id="previewTaxRate">0%</span>)</span>
<span id="previewTaxAmount">$0.00</span>
</div>
<div className="flex justify-between text-slate-600">
<span>Discount</span>
<span id="previewDiscount">$0.00</span>
</div>
<div className="h-px bg-slate-200 my-1"></div>
<div className="flex justify-between items-baseline">
<span className="text-slate-900 font-medium">Total due</span>
<span className="text-base sm:text-lg font-semibold tracking-tight text-slate-900" id="previewTotal">$0.00</span>
</div>
</div>
</div>

<div className="bg-slate-50/80 px-5 sm:px-7 md:px-8 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
<p className="text-[0.72rem] sm:text-xs text-slate-500">
                Thank you for your business. Late payments may incur a 2% monthly fee.
              </p>
<div className="inline-flex items-center gap-2 text-[0.72rem] sm:text-xs text-slate-500">
<span className="iconify" data-height="13" data-icon="lucide:lock" data-width="13" style={{strokeWidth: '1.5'}}></span>
                Secure, shareable link ready for your client.
              </div>
</div>
</div>
</div>

<div className="flex items-center justify-between px-4 sm:px-6 pb-4 text-[0.7rem] sm:text-xs text-slate-500">
<div className="flex items-center gap-2">
<span className="iconify text-slate-500" data-height="14" data-icon="lucide:clock-3" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Invoice generated in &lt; 3 seconds</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="iconify text-slate-500" data-height="14" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>No sign‑up required</span>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
