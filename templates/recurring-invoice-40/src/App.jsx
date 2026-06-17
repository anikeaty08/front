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



      // Initialize lucide icons
      lucide.createIcons();

      const stepIndicator = document.getElementById('step-indicator');
      const stepSections = {
        1: document.getElementById('step-1'),
        2: document.getElementById('step-2'),
        3: document.getElementById('step-3'),
        4: document.getElementById('step-4')
      };
      const stepBars = [
        document.getElementById('step-bar-1'),
        document.getElementById('step-bar-2'),
        document.getElementById('step-bar-3'),
        document.getElementById('step-bar-4'),
        document.getElementById('step-bar-5')
      ];
      const backButton = document.getElementById('back-button');
      const activateButton = document.getElementById('activate-button');
      const nextSendLabel = document.getElementById('next-send-label');

      let currentStep = 1;
      let selectedInvoice = {
        id: 'INV-010',
        customer: 'Brand Experts Advertising LLC',
        amount: 'AED 2,500',
        items: '3 line items',
        date: '01 Nov'
      };

      // View toggle
      const viewList = document.getElementById('view-list');
      const viewCards = document.getElementById('view-cards');
      const tableView = document.getElementById('invoice-table-view');
      const cardsView = document.getElementById('invoice-cards-view');

      viewList.addEventListener('click', () => {
        viewList.classList.add('-slate-800/90', 'text-slate-200');
        viewCards.classList.remove('bg-slate-800/', 'text-slate-200');
        cardsView.classList.add('hidden');
        tableView.classList.remove('hidden');
      });

      viewCards.addEventListener('click', () => {
        viewCards.classList.add('bg-slate-800/90', 'text-slate-200');
        viewList.classList.remove('bg-slate-800/90', 'text-slate-200');
        tableView.classList.add('hidden');
        cardsView.classList.remove('hidden');
      });

      // Invoice selection handling
      function handleInvoiceSelection(id) {
        // Map simple demo data based on id
        if (id === 'INV-010') {
          selectedInvoice = {
            id: 'INV-010',
            customer: 'Brand Experts Advertising LLC',
            amount: 'AED 2,500',
            items: '3 line items',
            date: '01 Nov'
          };
        } else if (id === 'INV-009') {
          selectedInvoice = {
            id: 'INV-009',
            customer: 'AroTag Media',
            amount: 'AED 1,800',
            items: '2 line items',
            date: '27 Oct'
          };
        } else if (id === 'INV-008') {
          selectedInvoice = {
            id: 'INV-008',
            customer: 'Fresh Choice',
            amount: 'AED 750',
            items: '1 line item',
            date: '19 Oct'
          };
        }

        // Fill summary card
        document.getElementById('summary-invoice-id').textContent = selectedInvoice.id;
        document.getElementById('summary-customer').textContent = selectedInvoice.customer;
        document.getElementById('summary-amount').textContent = selectedInvoice.amount;
        document.getElementById('summary-items').textContent = selectedInvoice.items;
        document.getElementById('summary-date').textContent = selectedInvoice.date;

        goToStep(2);
      }

      document.querySelectorAll('.invoice-row').forEach((row) => {
        row.addEventListener('click', () => {
          const id = row.getAttribute('data-invoice-id');
          handleInvoiceSelection(id);
        });
      });

      document.querySelectorAll('.invoice-card').forEach((card) => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-invoice-id');
          handleInvoiceSelection(id);
        });
      });

      // Change invoice
      document.getElementById('change-invoice').addEventListener('click', () => {
        goToStep(1);
      });

      // Income account override panel
      const incomeOverridePanel = document.getElementById('income-override-panel');
      document.getElementById('change-income-account').addEventListener('click', () => {
        incomeOverridePanel.classList.remove('hidden');
      });
      document.getElementById('close-income-override').addEventListener('click', () => {
        incomeOverridePanel.classList.add('hidden');
      });

      // Frequency buttons
      const freqButtons = document.querySelectorAll('.freq-button');
      const customFrequencyRow = document.getElementById('custom-frequency-row');
      let currentFrequency = 'monthly';

      freqButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const value = btn.getAttribute('data-frequency');
          currentFrequency = value;

          freqButtons.forEach((b) => {
            b.classList.remove('bg-violet-500/90', 'text-slate-950');
            b.classList.add('bg-slate-900/80', 'text-slate-200');
          });
          btn.classList.remove('bg-slate-900/80', 'text-slate-200');
          btn.classList.add('bg-violet-500/90', 'text-slate-950');

          if (value === 'custom') {
            customFrequencyRow.classList.remove('hidden');
          } else {
            customFrequencyRow.classList.add('hidden');
          }
          updateNextSendLabel();
        });
      });

      // Toggles
      function setupToggle(id) {
        const toggle = document.getElementById(id);
        toggle.addEventListener('click', () => {
          const knob = toggle.querySelector('.toggle-knob');
          const isOn = toggle.classList.contains('bg-violet-500');
          if (isOn) {
            toggle.classList.remove('bg-violet-500');
            toggle.classList.add('bg-slate-700');
            knob.classList.remove('translate-x-5');
            knob.classList.add('translate-x-1');
          } else {
            toggle.classList.remove('bg-slate-700');
            toggle.classList.add('bg-violet-500');
            knob.classList.remove('translate-x-1');
            knob.classList.add('translate-x-5');
          }
        });
      }

      setupToggle('toggle-auto-send');
      setupToggle('toggle-attach-pdf');

      // Checkbox: include unbilled
      const includeUnbilledButton = document.getElementById('include-unbilled');
      includeUnbilledButton.addEventListener('click', () => {
        const checkmark = includeUnbilledButton.querySelector('.checkmark');
        const selected = !checkmark.classList.contains('hidden');
        if (selected) {
          checkmark.classList.add('hidden');
          includeUnbilledButton.classList.remove('bg-violet-500/20', 'border-violet-400');
          includeUnbilledButton.classList.add('bg-slate-900', 'border-slate-500');
        } else {
          checkmark.classList.remove('hidden');
          includeUnbilledButton.classList.remove('bg-slate-900', 'border-slate-500');
          includeUnbilledButton.classList.add('bg-violet-500/20', 'border-violet-400');
        }
      });

      // Navigation between steps (in this UI: auto progresses forward except Back)
      function goToStep(step) {
        currentStep = step;
        stepIndicator.textContent = step;

        Object.keys(stepSections).forEach((key) => {
          stepSections[key].classList.toggle('hidden', parseInt(key) !== step);
        });

        // Progress bar colors
        stepBars.forEach((bar, idx) => {
          if (idx < step) {
            bar.classList.add('bg-violet-500');
            bar.classList.remove('bg-slate-700');
          } else {
            bar.classList.remove('bg-violet-500');
            bar.classList.add('bg-slate-700');
          }
        });

        backButton.classList.toggle('hidden', step === 1);

        if (step >= 2) {
          // Move forward automatically: 2 -> 3 -> 4 with user interactions
          if (step === 2) {
            // After viewing summary, reveal step 3 and 4 stacked
            stepSections[3].classList.remove('hidden');
            stepSections[4].classList.remove('hidden');
            stepIndicator.textContent = '5';
            stepBars.forEach((bar) => {
              bar.classList.add('bg-violet-500');
              bar.classList.remove('bg-slate-700');
            });
            activateButton.disabled = false;
            updateNextSendLabel();
          }
        } else {
          // If back to step 1
          stepSections[2].classList.add('hidden');
          stepSections[3].classList.add('hidden');
          stepSections[4].classList.add('hidden');
          activateButton.disabled = true;
          nextSendLabel.textContent = 'Next send: —';
          nextSendLabel.classList.add('hidden');
        }
      }

      backButton.addEventListener('click', () => {
        if (currentStep > 1) {
          goToStep(1);
        }
      });

      // Next send label calculation (simple demo)
      function updateNextSendLabel() {
        const dateInput = document.getElementById('next-issue-date');
        if (!dateInput.value) {
          nextSendLabel.textContent = 'Next send: when first date is set';
          nextSendLabel.classList.remove('hidden');
          return;
        }
        const d = new Date(dateInput.value);
        if (Number.isNaN(d.getTime())) {
          nextSendLabel.textContent = 'Next send: invalid date';
          nextSendLabel.classList.remove('hidden');
          return;
        }
        // Format date
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formatted = d.toLocaleDateString(undefined, options);
        let freqLabel = 'Monthly';
        if (currentFrequency === 'daily') freqLabel = 'Daily';
        if (currentFrequency === 'weekly') freqLabel = 'Weekly';
        if (currentFrequency === 'custom') {
          const every = document.getElementById('custom-every').value || '1';
          const unit = document.getElementById('custom-unit').value;
          freqLabel = `Every ${every} ${unit}`;
        }
        nextSendLabel.textContent = `Next send: ${formatted} • ${freqLabel}`;
        nextSendLabel.classList.remove('hidden');
      }

      document.getElementById('next-issue-date').addEventListener('change', updateNextSendLabel);
      document.getElementById('custom-every').addEventListener('input', updateNextSendLabel);
      document.getElementById('custom-unit').addEventListener('change', updateNextSendLabel);

      // Activate button click
      activateButton.addEventListener('click', () => {
        activateButton.innerHTML = `
          <svg data-lucide="loader-2" class="h-4 w-4 stroke-[1.5] animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3a9 9 0 1 0 9 9" /></svg>
          <span>Activating...</span>
        `;
        activateButton.disabled = true;

        setTimeout(() => {
          activateButton.innerHTML = `
            <i data-lucide="check-circle-2" class="h-4 w-4 stroke-[1.5]"></i>
            <span>Recurring Invoice Activated</span>
            <span id="next-send-label" class="hidden sm:inline text-[0.7rem] rounded-full bg-violet-900/50 text-violet-50 px-2 py-0.5 border border-violet-400/40">${nextSendLabel.textContent}</span>
          `;
          activateButton.disabled = false;
          lucide.createIcons();
        }, 1200);
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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center h-8 w-8 rounded-md bg-violet-500/10 border border-violet-400/30">
<span className="text-sm font-semibold tracking-tight text-violet-300">RA</span>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight text-slate-50">Recurring Invoice Automation</span>
<span className="text-sm text-slate-400">Select an existing invoice and set up automated recurrence</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-3">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-sm font-medium text-slate-100 hover:bg-slate-800/90 transition-colors">
<i className="h-4 w-4 stroke-[1.5]" data-lucide="help-circle"></i>
              Help
            </button>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-6xl mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 space-y-6">

<section className="rounded-xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-sm p-4 sm:p-5">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-2 text-sm text-slate-300">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-violet-500 text-xs font-semibold tracking-tight text-slate-50">1</span>
<span className="font-medium">Select Invoice</span>
<span className="hidden sm:inline text-slate-500">→</span>
<span className="hidden sm:inline text-slate-300">Preview &amp; Settings</span>
<span className="hidden sm:inline text-slate-500">→</span>
<span className="hidden sm:inline text-slate-300">Automation</span>
</div>
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
<span className="inline-flex h-1 w-16 rounded-full bg-violet-500"></span>
<span>Step <span className="text-slate-100 font-medium" id="step-indicator">1</span> of 5</span>
</div>
</div>
<div className="mt-4 grid grid-cols-5 gap-1 h-1 rounded-full bg-slate-800/80 overflow-hidden">
<div className="bg-violet-500" id="step-bar-1"></div>
<div className="bg-slate-700" id="step-bar-2"></div>
<div className="bg-slate-700" id="step-bar-3"></div>
<div className="bg-slate-700" id="step-bar-4"></div>
<div className="bg-slate-700" id="step-bar-5"></div>
</div>
</section>

<section className="rounded-xl border border-slate-800/80 bg-slate-900/70 backdrop-blur-sm p-4 sm:p-5 space-y-4" id="step-1">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">Step 1 — Select an Existing Invoice</h2>
<p className="text-base text-slate-300 mt-1">Choose from your previously saved invoices to base this recurring schedule on.</p>
</div>
<span className="hidden sm:inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-xs font-medium text-slate-300">Required</span>
</div>

<div className="flex items-center justify-between gap-3 mt-2">
<div className="flex items-center gap-2 text-sm text-slate-400">
<i className="h-4 w-4 stroke-[1.5]" data-lucide="file-text"></i>
<span>Start from an existing invoice</span>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 p-0.5">
<button className="flex items-center gap-1.5 rounded-full bg-slate-800/90 px-2.5 py-1 text-xs font-medium text-slate-100" id="view-list">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="rows"></i>
                  Table
                </button>
<button className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-slate-400 hover:text-slate-100" id="view-cards">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="layout-grid"></i>
                  Cards
                </button>
</div>
</div>

<div className="mt-3 rounded-lg border border-slate-800/80 bg-slate-950/60 overflow-hidden" id="invoice-table-view">
<div className="border-b border-slate-800/70 bg-slate-900/60">
<div className="grid grid-cols-12 text-xs sm:text-sm text-slate-400 px-3 sm:px-4 py-2.5">
<div className="col-span-3 sm:col-span-2">Invoice #</div>
<div className="hidden sm:block sm:col-span-3">Customer</div>
<div className="col-span-3 sm:col-span-2">Amount</div>
<div className="hidden sm:block sm:col-span-2">Date</div>
<div className="col-span-3 sm:col-span-3 text-right">Action</div>
</div>
</div>
<div className="divide-y divide-slate-800/80 text-base">

<button className="invoice-row grid w-full grid-cols-12 items-center px-3 sm:px-4 py-2.5 hover:bg-slate-900/80 text-left transition-colors" data-invoice-id="INV-010">
<div className="col-span-3 sm:col-span-2 flex items-center gap-2 text-slate-100">
<span className="text-xs sm:text-sm font-medium">INV-010</span>
<span className="hidden sm:inline-flex rounded-full bg-violet-500/20 text-[0.7rem] leading-4 text-violet-300 px-1.5 py-0.5 border border-violet-400/20">Latest</span>
</div>
<div className="hidden sm:block sm:col-span-3 text-slate-200 truncate">Brand Experts Advertising LLC</div>
<div className="col-span-3 sm:col-span-2 text-slate-100">AED 2,500</div>
<div className="hidden sm:block sm:col-span-2 text-slate-300">01 Nov</div>
<div className="col-span-3 sm:col-span-3 flex justify-end">
<span className="inline-flex items-center gap-1.5 rounded-md bg-violet-500/90 hover:bg-violet-400 text-slate-950 text-xs sm:text-sm font-medium px-2.5 py-1.5 transition-colors">
<span>Select</span>
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="arrow-right"></i>
</span>
</div>
</button>

<button className="invoice-row grid w-full grid-cols-12 items-center px-3 sm:px-4 py-2.5 hover:bg-slate-900/80 text-left transition-colors" data-invoice-id="INV-009">
<div className="col-span-3 sm:col-span-2 flex items-center gap-2 text-slate-100">
<span className="text-xs sm:text-sm font-medium">INV-009</span>
</div>
<div className="hidden sm:block sm:col-span-3 text-slate-200 truncate">AroTag Media</div>
<div className="col-span-3 sm:col-span-2 text-slate-100">AED 1,800</div>
<div className="hidden sm:block sm:col-span-2 text-slate-300">27 Oct</div>
<div className="col-span-3 sm:col-span-3 flex justify-end">
<span className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/90 hover:bg-slate-700 text-slate-100 text-xs sm:text-sm font-medium px-2.5 py-1.5 transition-colors">
<span>Select</span>
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="arrow-right"></i>
</span>
</div>
</button>

<button className="invoice-row grid w-full grid-cols-12 items-center px-3 sm:px-4 py-2.5 hover:bg-slate-900/80 text-left transition-colors" data-invoice-id="INV-008">
<div className="col-span-3 sm:col-span-2 flex items-center gap-2 text-slate-100">
<span className="text-xs sm:text-sm font-medium">INV-008</span>
</div>
<div className="hidden sm:block sm:col-span-3 text-slate-200 truncate">Fresh Choice</div>
<div className="col-span-3 sm:col-span-2 text-slate-100">AED 750</div>
<div className="hidden sm:block sm:col-span-2 text-slate-300">19 Oct</div>
<div className="col-span-3 sm:col-span-3 flex justify-end">
<span className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/90 hover:bg-slate-700 text-slate-100 text-xs sm:text-sm font-medium px-2.5 py-1.5 transition-colors">
<span>Select</span>
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="arrow-right"></i>
</span>
</div>
</button>
</div>
</div>

<div className="hidden mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" id="invoice-cards-view">

<button className="invoice-card group flex flex-col gap-2 rounded-xl border border-violet-500/50 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-violet-950/60 p-3 sm:p-4 text-left hover:border-violet-400 hover:shadow-lg hover:shadow-violet-900/40 transition-all" data-invoice-id="INV-010">
<div className="flex items-start justify-between gap-3">
<div className="space-y-0.5">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-slate-50">INV-010</span>
<span className="inline-flex rounded-full bg-violet-500/20 text-[0.7rem] leading-4 text-violet-300 px-1.5 py-0.5 border border-violet-400/30">Recommended</span>
</div>
<p className="text-base text-slate-200 truncate">Brand Experts Advertising LLC</p>
</div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-violet-500/15 border border-violet-400/30 text-violet-200">
<i className="h-4 w-4 stroke-[1.5]" data-lucide="file-text"></i>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="space-y-0.5 text-xs text-slate-300">
<div className="flex items-center gap-1.5">
<span className="text-slate-400">Amount</span>
<span className="font-medium text-slate-50">AED 2,500</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-slate-400">Date</span>
<span>01 Nov</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-slate-400">Items</span>
<span>3 line items</span>
</div>
</div>
<span className="inline-flex items-center gap-1.5 rounded-lg bg-violet-500/90 text-slate-950 text-xs sm:text-sm font-medium px-3 py-1.5 group-hover:bg-violet-400 transition-colors">
<span>Select</span>
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="arrow-right"></i>
</span>
</div>
</button>

<button className="invoice-card group flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-950/80 p-3 sm:p-4 text-left hover:border-slate-600 hover:bg-slate-900/80 transition-all" data-invoice-id="INV-009">
<div className="flex items-start justify-between gap-3">
<div className="space-y-0.5">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-slate-50">INV-009</span>
</div>
<p className="text-base text-slate-200 truncate">AroTag Media</p>
</div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">
<i className="h-4 w-4 stroke-[1.5]" data-lucide="file-text"></i>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="space-y-0.5 text-xs text-slate-300">
<div className="flex items-center gap-1.5">
<span className="text-slate-400">Amount</span>
<span className="font-medium text-slate-50">AED 1,800</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-slate-400">Date</span>
<span>27 Oct</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-slate-400">Items</span>
<span>2 line items</span>
</div>
</div>
<span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 text-slate-100 text-xs sm:text-sm font-medium px-3 py-1.5 group-hover:bg-slate-700 transition-colors">
<span>Select</span>
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="arrow-right"></i>
</span>
</div>
</button>

<button className="invoice-card group flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-950/80 p-3 sm:p-4 text-left hover:border-slate-600 hover:bg-slate-900/80 transition-all" data-invoice-id="INV-008">
<div className="flex items-start justify-between gap-3">
<div className="space-y-0.5">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-slate-50">INV-008</span>
</div>
<p className="text-base text-slate-200 truncate">Fresh Choice</p>
</div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-300">
<i className="h-4 w-4 stroke-[1.5]" data-lucide="file-text"></i>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="space-y-0.5 text-xs text-slate-300">
<div className="flex items-center gap-1.5">
<span className="text-slate-400">Amount</span>
<span className="font-medium text-slate-50">AED 750</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-slate-400">Date</span>
<span>19 Oct</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-slate-400">Items</span>
<span>1 line item</span>
</div>
</div>
<span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 text-slate-100 text-xs sm:text-sm font-medium px-3 py-1.5 group-hover:bg-slate-700 transition-colors">
<span>Select</span>
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="arrow-right"></i>
</span>
</div>
</button>
</div>

<div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="info"></i>
<span>Can’t find it? Create a one-time invoice first, then return here to automate it.</span>
</div>
</section>

<section className="hidden rounded-xl border border-emerald-500/40 bg-emerald-950/40 backdrop-blur-sm p-4 sm:p-5 space-y-3" id="step-2">
<div className="flex items-start justify-between gap-3">
<div className="flex items-start gap-2">
<div className="mt-0.5">
<i className="h-4 w-4 stroke-[1.5] text-emerald-400" data-lucide="check-circle-2"></i>
</div>
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-emerald-50">Step 2 — Selected Invoice Preview</h2>
<p className="text-base text-emerald-100/80 mt-1">Confirm you’ve selected the correct invoice before automating.</p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/60 bg-emerald-900/60 px-3 py-1.5 text-xs sm:text-sm font-medium text-emerald-50 hover:bg-emerald-800/80 transition-colors" id="change-invoice">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="refresh-ccw"></i>
                Change Invoice
              </button>
</div>
<div className="rounded-lg border border-emerald-500/40 bg-slate-950/80 p-3 sm:p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-2">
<span className="text-xs font-medium text-emerald-300 uppercase tracking-tight">Selected Invoice</span>
<span className="inline-flex items-center rounded-full bg-emerald-500/15 text-xs font-medium text-emerald-200 px-2 py-0.5 border border-emerald-400/40" id="summary-invoice-id">INV-010</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
<div className="space-y-0.5">
<div className="text-slate-400">Customer</div>
<div className="text-base text-slate-50" id="summary-customer">Brand Experts Advertising LLC</div>
</div>
<div className="space-y-0.5">
<div className="text-slate-400">Amount</div>
<div className="text-base text-slate-50" id="summary-amount">AED 2,500</div>
</div>
<div className="space-y-0.5">
<div className="text-slate-400">Items</div>
<div className="text-base text-slate-50" id="summary-items">3 line items</div>
</div>
<div className="space-y-0.5">
<div className="text-slate-400">Invoice Date</div>
<div className="text-base text-slate-50" id="summary-date">01 Nov</div>
</div>
</div>
</div>
<div className="flex flex-col items-stretch sm:items-end gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/60 bg-emerald-500/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-emerald-50 hover:bg-emerald-500/20 transition-colors">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="file-search"></i>
                  View Full Invoice
                </button>
<p className="text-xs text-emerald-200/80 max-w-xs text-left sm:text-right">We’ll copy these line items into every recurring invoice based on your automation rules.</p>
</div>
</div>
</section>

<section className="hidden rounded-xl border border-slate-800/80 bg-slate-900/70 backdrop-blur-sm p-4 sm:p-5 space-y-4" id="step-3">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">Step 3 — Recurring Settings</h2>
<p className="text-base text-slate-300 mt-1">Define when and how often this invoice should be generated and sent.</p>
</div>
<span className="hidden sm:inline-flex items-center rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-slate-300">Flexible</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="space-y-3">

<div className="space-y-1.5">
<label className="flex items-center justify-between text-xs sm:text-sm text-slate-200">
<span>Next Issue Date</span>
<span className="text-slate-400">When should the first recurring invoice be created?</span>
</label>
<div className="relative">
<input className="w-full rounded-lg border border-slate-700 bg-slate-950/80 text-base text-slate-100 px-3 py-2 pr-9 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 placeholder:text-slate-500" id="next-issue-date" type="date"/>
<i className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 stroke-[1.5] text-slate-400" data-lucide="calendar"></i>
</div>
</div>

<div className="space-y-1.5">
<label className="flex items-center justify-between text-xs sm:text-sm text-slate-200">
<span>How Often</span>
<span className="text-slate-400">Choose a recurrence frequency</span>
</label>
<div className="inline-flex flex-wrap items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950/80 p-1">
<button className="freq-button inline-flex items-center justify-center rounded-md bg-slate-900/80 text-xs sm:text-sm font-medium text-slate-200 px-2.5 py-1.5 hover:bg-slate-800/90 transition-colors" data-frequency="daily">
                      Daily
                    </button>
<button className="freq-button inline-flex items-center justify-center rounded-md bg-slate-900/80 text-xs sm:text-sm font-medium text-slate-200 px-2.5 py-1.5 hover:bg-slate-800/90 transition-colors" data-frequency="weekly">
                      Weekly
                    </button>
<button className="freq-button inline-flex items-center justify-center rounded-md bg-violet-500/90 text-xs sm:text-sm font-medium text-slate-950 px-2.5 py-1.5 hover:bg-violet-400 transition-colors" data-frequency="monthly">
                      Monthly
                    </button>
<button className="freq-button inline-flex items-center justify-center rounded-md bg-slate-900/80 text-xs sm:text-sm font-medium text-slate-200 px-2.5 py-1.5 hover:bg-slate-800/90 transition-colors" data-frequency="custom">
                      Custom
                    </button>
</div>

<div className="hidden mt-2 grid grid-cols-3 gap-2 text-xs sm:text-sm" id="custom-frequency-row">
<div className="col-span-1">
<label className="block text-slate-300 mb-1">Every</label>
<input className="w-full rounded-md border border-slate-700 bg-slate-950/80 text-base text-slate-100 px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500" id="custom-every" min="1" type="number" value="1"/>
</div>
<div className="col-span-2">
<label className="block text-slate-300 mb-1">Unit</label>
<select className="w-full rounded-md border border-slate-700 bg-slate-950/80 text-base text-slate-100 px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500" id="custom-unit">
<option value="days">Day(s)</option>
<option value="weeks">Week(s)</option>
<option selected="" value="months">Month(s)</option>
</select>
</div>
</div>
</div>
</div>

<div className="space-y-3">

<div className="flex items-center justify-between gap-3 rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2.5">
<div className="space-y-0.5">
<div className="flex items-center gap-2">
<span className="text-xs sm:text-sm text-slate-100">Auto-Send Invoice</span>
<span className="inline-flex items-center rounded-full bg-slate-900 px-1.5 py-0.5 text-[0.7rem] text-slate-400 border border-slate-700">Email</span>
</div>
<p className="text-xs text-slate-400">If enabled, invoices are emailed automatically when generated.</p>
</div>
<button className="relative inline-flex h-6 w-10 items-center rounded-full bg-slate-700 transition-colors" id="toggle-auto-send" type="button">
<span className="absolute inset-0 rounded-full border border-slate-500/70"></span>
<span className="toggle-knob pointer-events-none inline-block h-4 w-4 translate-x-1 rounded-full bg-slate-200 shadow-sm transition-transform"></span>
</button>
</div>

<div className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2.5">
<button className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded border border-slate-500 bg-slate-900" id="include-unbilled" type="button">
<svg className="checkmark hidden" viewbox="0 0 20 20">
<path className="text-violet-400" d="M5 11L8 14L15 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<div className="space-y-0.5">
<span className="text-xs sm:text-sm text-slate-100">Include unbilled items</span>
<p className="text-xs text-slate-400">Automatically add any tracked but unbilled time or expenses to each recurring invoice.</p>
</div>
</div>

<div className="space-y-1.5">
<label className="flex items-center justify-between text-xs sm:text-sm text-slate-200">
<span>Stop Recurrence After</span>
<span className="text-slate-400">Leave blank for ongoing</span>
</label>
<div className="flex items-center gap-2">
<input className="w-24 rounded-md border border-slate-700 bg-slate-950/80 text-base text-slate-100 px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500" id="stop-after" min="0" placeholder="∞" type="number"/>
<span className="text-xs sm:text-sm text-slate-300">cycle(s)</span>
</div>
</div>

<div className="flex items-center justify-between gap-3 rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2.5">
<div className="space-y-0.5">
<span className="text-xs sm:text-sm text-slate-100">Attach last invoice PDF</span>
<p className="text-xs text-slate-400">Attach the previous invoice as a PDF in each automated email.</p>
</div>
<button className="relative inline-flex h-6 w-10 items-center rounded-full bg-slate-700 transition-colors" id="toggle-attach-pdf" type="button">
<span className="absolute inset-0 rounded-full border border-slate-500/70"></span>
<span className="toggle-knob pointer-events-none inline-block h-4 w-4 translate-x-1 rounded-full bg-slate-200 shadow-sm transition-transform"></span>
</button>
</div>
</div>
</div>
</section>

<section className="hidden rounded-xl border border-slate-800/80 bg-slate-900/70 backdrop-blur-sm p-4 sm:p-5 space-y-4" id="step-4">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">Step 4 — Income Accounts</h2>
<p className="text-base text-slate-300 mt-1">We’ve mapped income accounts from the selected invoice items.</p>
</div>
<span className="hidden sm:inline-flex items-center rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-slate-300">Read-only by default</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="layers"></i>
<span>These accounts are pulled from the original invoice’s line items.</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-xs sm:text-sm text-slate-100">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Sales – Services</span>
</span>
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-xs sm:text-sm text-slate-100">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Sales – Billed Expenses</span>
</span>
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-xs sm:text-sm text-slate-100">
<span className="h-1.5 w-1.5 rounded-full bg-violet-400"></span>
<span>Other Income</span>
</span>
</div>
<div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
<p className="text-slate-400 max-w-xl">Changes here affect future recurring invoices only. The original invoice and past invoices will remain unchanged.</p>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-100 hover:bg-slate-800/90 transition-colors" id="change-income-account">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="settings-2"></i>
                  Change Income Account
                </button>
</div>

<div className="hidden mt-2 rounded-lg border border-slate-700 bg-slate-950/80 p-3 space-y-2" id="income-override-panel">
<div className="flex items-center justify-between gap-2">
<span className="text-xs sm:text-sm font-medium text-slate-200">Override Income Account</span>
<button className="inline-flex items-center rounded-md border border-slate-700 bg-slate-900/80 px-2 py-0.5 text-xs text-slate-300 hover:bg-slate-800/80" id="close-income-override">
                    Cancel
                  </button>
</div>
<p className="text-xs text-slate-400">Apply a different income account to all future invoices generated by this automation.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
<div>
<label className="block text-xs text-slate-300 mb-1">Current Default</label>
<input className="w-full rounded-md border border-slate-700 bg-slate-900/70 text-base text-slate-300 px-2.5 py-1.5" disabled="" type="text" value="Sales – Services"/>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1">New Income Account</label>
<select className="w-full rounded-md border border-slate-700 bg-slate-950/80 text-base text-slate-100 px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500">
<option>Sales – Services</option>
<option>Sales – Retainer</option>
<option>Sales – Products</option>
<option>Other Income</option>
</select>
</div>
</div>
<div className="flex justify-end mt-2">
<button className="inline-flex items-center gap-1.5 rounded-md bg-violet-500/90 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-950 hover:bg-violet-400 transition-colors">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="check"></i>
                    Apply Override
                  </button>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="sticky bottom-0 border-t border-slate-800/80 bg-slate-950/95 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
<i className="h-4 w-4 stroke-[1.5] text-violet-300" data-lucide="sparkles"></i>
<span>Flow: Select Invoice → Preview → Frequency → Automation Options → Activate</span>
</div>
<div className="flex items-center justify-end gap-2">
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 hover:bg-slate-900/80 transition-colors" id="back-button">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="arrow-left"></i>
              Back
            </button>
<button className="inline-flex items-center gap-2 rounded-md bg-violet-600/80 px-4 py-2 text-xs sm:text-sm font-semibold tracking-tight text-slate-950 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors" disabled="" id="activate-button">
<i className="h-4 w-4 stroke-[1.5]" data-lucide="play-circle"></i>
<span>Activate Recurring Invoice</span>
<span className="hidden sm:inline text-[0.7rem] rounded-full bg-violet-900/50 text-violet-50 px-2 py-0.5 border border-violet-400/40" id="next-send-label">Next send: —</span>
</button>
</div>
</div>
</footer>
</div>


    </>
  );
}
