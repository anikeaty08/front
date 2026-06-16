import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Data
      const accounts = [
        { id: 'CL-001', name: 'Primary USD', currency: 'USD', symbol: '$', available: 125000.23, current: 130250.23 },
        { id: 'CL-002', name: 'EUR Wallet', currency: 'EUR', symbol: '€', available: 88000.12, current: 90540.12 },
        { id: 'CL-003', name: 'GBP Wallet', currency: 'GBP', symbol: '£', available: 52050.55, current: 52050.55 },
      ];

      const purposes = [
        'Operational correction',
        'FX reconciliation',
        'Bank fee reclassification',
        'Chargeback / dispute',
        'Other (specify in justification)',
      ];

      const clientLabels = [
        'Adjustment',
        'Fee refund',
        'FX correction',
        'Bank charges',
        'Other',
      ];

      // State
      let selectedAccount = null;
      let entryType = 'credit'; // 'credit' or 'debit'
      let rawAmount = 0;
      let selectedPurpose = '';
      let clientStatementLabel = '';

      // Helpers
      const byId = (id) => document.getElementById(id);
      const formatMoney = (n, currency = 'USD', symbol = '$') => {
        if (Number.isNaN(n) || n === null) return '—';
        try {
          return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(n);
        } catch (e) {
          const sign = n < 0 ? '-' : '';
          const fixed = Math.abs(n).toFixed(2);
          return `${sign}${symbol}${fixed.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        }
      };
      const clampText = (s, max = 400) => s.slice(0, max);

      // Elements
      const balanceBtn = byId('balanceBtn');
      const balanceMenu = byId('balanceMenu');
      const balanceLabel = byId('balanceLabel');
      const balanceSub = byId('balanceSub');

      const purposeBtn = byId('purposeBtn');
      const purposeMenu = byId('purposeMenu');
      const purposeLabel = byId('purposeLabel');

      const clientLabelBtn = byId('clientLabelBtn');
      const clientLabelMenu = byId('clientLabelMenu');
      const clientLabelSpan = byId('clientLabel');

      const btnCredit = byId('btnCredit');
      const btnDebit = byId('btnDebit');
      const amountInput = byId('amountInput');
      const currencySymbol = byId('currencySymbol');
      const currencyCode = byId('currencyCode');

      const directionPill = byId('directionPill');
      const availBefore = byId('availBefore');
      const availAfter = byId('availAfter');
      const availDelta = byId('availDelta');
      const currBefore = byId('currBefore');
      const currAfter = byId('currAfter');
      const currDelta = byId('currDelta');

      const justification = byId('justification');
      const justCount = byId('justCount');

      const btnCancel = byId('btnCancel');
      const closeModal = byId('closeModal');
      const btnPreview = byId('btnPreview');
      const btnPost = byId('btnPost');

      const previewDrawer = byId('previewDrawer');
      const pvBalance = byId('pvBalance');
      const pvType = byId('pvType');
      const pvAmount = byId('pvAmount');
      const pvInternal = byId('pvInternal');
      const pvClient = byId('pvClient');

      // Inject options
      function renderAccountOptions() {
        const wrap = balanceMenu.querySelector('div');
        wrap.innerHTML = '';
        accounts.forEach(acc => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'w-full text-left px-3 py-3 hover:bg-slate-50';
          btn.innerHTML = `
            <div class="flex items-center gap-3">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 ring-1 ring-slate-200">
                <iconify-icon icon="solar:wallet-linear" width="16" height="16" class="text-slate-600" style="stroke-width:1.5"></iconify-icon>
              </span>
              <div class="min-w-0">
                <div class="text-sm text-slate-900">${acc.name} <span class="text-slate-500">• ${acc.currency}</span></div>
                <div class="text-xs text-slate-500">Available ${formatMoney(acc.available, acc.currency, acc.symbol)} • Current ${formatMoney(acc.current, acc.currency, acc.symbol)}</div>
              </div>
              <div class="ml-auto text-xs text-slate-500">${acc.id}</div>
            </div>
          `;
          btn.addEventListener('click', () => {
            selectedAccount = acc;
            balanceLabel.textContent = `${acc.name} • ${acc.currency}`;
            balanceSub.textContent = `${acc.id}`;
            currencySymbol.textContent = acc.symbol;
            currencyCode.textContent = acc.currency;
            toggleMenu(balanceMenu, false);
            updateImpact();
            validate();
          });
          wrap.appendChild(btn);
        });
      }

      function renderPurposeOptions() {
        const wrap = purposeMenu.querySelector('div');
        wrap.innerHTML = '';
        purposes.forEach(p => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'w-full text-left px-3 py-2.5 hover:bg-slate-50';
          btn.innerHTML = `<div class="flex items-center gap-2 text-sm text-slate-900">
            <iconify-icon icon="solar:bookmark-linear" width="16" height="16" class="text-slate-600" style="stroke-width:1.5"></iconify-icon>
            <span>${p}</span>
          </div>`;
          btn.addEventListener('click', () => {
            selectedPurpose = p;
            purposeLabel.textContent = p;
            toggleMenu(purposeMenu, false);
            validate();
          });
          wrap.appendChild(btn);
        });
      }

      function renderClientLabelOptions() {
        const wrap = clientLabelMenu.querySelector('div');
        wrap.innerHTML = '';
        clientLabels.forEach(p => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'w-full text-left px-3 py-2.5 hover:bg-slate-50';
          btn.innerHTML = `<div class="flex items-center gap-2 text-sm text-slate-900">
            <iconify-icon icon="solar:document-linear" width="16" height="16" class="text-slate-600" style="stroke-width:1.5"></iconify-icon>
            <span>${p}</span>
          </div>`;
          btn.addEventListener('click', () => {
            clientStatementLabel = p;
            clientLabelSpan.textContent = p;
            toggleMenu(clientLabelMenu, false);
            validate();
          });
          wrap.appendChild(btn);
        });
      }

      // Menu toggling
      function toggleMenu(menuEl, open) {
        const isOpen = !menuEl.classList.contains('hidden');
        const willOpen = open !== undefined ? open : !isOpen;
        if (willOpen) {
          menuEl.classList.remove('hidden');
        } else {
          menuEl.classList.add('hidden');
        }
      }

      balanceBtn.addEventListener('click', () => toggleMenu(balanceMenu));
      purposeBtn.addEventListener('click', () => toggleMenu(purposeMenu));
      clientLabelBtn.addEventListener('click', () => toggleMenu(clientLabelMenu));

      // Click outside to close menus
      document.addEventListener('click', (e) => {
        const targets = [balanceBtn, balanceMenu, purposeBtn, purposeMenu, clientLabelBtn, clientLabelMenu];
        const clickedInside = targets.some(el => el.contains(e.target));
        if (!clickedInside) {
          [balanceMenu, purposeMenu, clientLabelMenu].forEach(m => toggleMenu(m, false));
        }
      });

      // Debit/Credit toggles
      function setType(type) {
        entryType = type;
        if (type === 'credit') {
          btnCredit.className = 'px-3 py-1.5 rounded-md text-xs font-medium text-slate-900 bg-white ring-1 ring-slate-200 inline-flex items-center gap-1.5';
          btnDebit.className = 'px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900';
        } else {
          btnDebit.className = 'px-3 py-1.5 rounded-md text-xs font-medium text-slate-900 bg-white ring-1 ring-slate-200 inline-flex items-center gap-1.5';
          btnCredit.className = 'px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900';
        }
        updateImpact();
      }
      btnCredit.addEventListener('click', () => setType('credit'));
      btnDebit.addEventListener('click', () => setType('debit'));

      // Amount parsing
      function parseAmount(value) {
        if (!value) return 0;
        const normalized = value.replace(/[^\d.,-]/g, '').replace(/,/g, '');
        const n = parseFloat(normalized);
        return isNaN(n) ? 0 : Math.abs(n);
      }

      amountInput.addEventListener('input', () => {
        const prevPos = amountInput.selectionStart;
        rawAmount = parseAmount(amountInput.value);
        updateImpact();
        validate();
        amountInput.setSelectionRange(prevPos, prevPos);
      });

      justification.addEventListener('input', () => {
        justification.value = clampText(justification.value);
        justCount.textContent = `${justification.value.length} / 400`;
        validate();
      });

      // Impact calculation
      function updateImpact() {
        const acc = selectedAccount;
        const isCredit = entryType === 'credit';
        const sign = isCredit ? 1 : -1;

        // Direction pill
        directionPill.textContent = isCredit ? 'Credit' : 'Debit';
        directionPill.className = `text-xs rounded-full px-2.5 py-1 ring-1 ${isCredit ? 'bg-emerald-400/10 text-emerald-700 ring-emerald-400/20' : 'bg-rose-400/10 text-rose-700 ring-rose-400/20'}`;

        if (!acc) {
          availBefore.textContent = '—';
          availAfter.textContent = '—';
          availDelta.textContent = '—';
          availDelta.className = 'ml-2 text-xs rounded-full px-2 py-0.5 ring-1 text-slate-600 ring-slate-200';
          currBefore.textContent = '—';
          currAfter.textContent = '—';
          currDelta.textContent = '—';
          currDelta.className = 'ml-2 text-xs rounded-full px-2 py-0.5 ring-1 text-slate-600 ring-slate-200';
          return;
        }

        const change = sign * rawAmount;
        const availAfterVal = acc.available + change;
        const currAfterVal = acc.current + change;

        availBefore.textContent = formatMoney(acc.available, acc.currency, acc.symbol);
        currBefore.textContent = formatMoney(acc.current, acc.currency, acc.symbol);

        availAfter.textContent = formatMoney(availAfterVal, acc.currency, acc.symbol);
        currAfter.textContent = formatMoney(currAfterVal, acc.currency, acc.symbol);

        const deltaClass = (val) => val >= 0
          ? 'bg-emerald-400/10 text-emerald-700 ring-emerald-400/20'
          : 'bg-rose-400/10 text-rose-700 ring-rose-400/20';

        availDelta.textContent = `${change >= 0 ? '+' : ''}${formatMoney(change, acc.currency, acc.symbol)}`;
        availDelta.className = `ml-2 text-xs rounded-full px-2 py-0.5 ring-1 ${deltaClass(change)}`;

        currDelta.textContent = `${change >= 0 ? '+' : ''}${formatMoney(change, acc.currency, acc.symbol)}`;
        currDelta.className = `ml-2 text-xs rounded-full px-2 py-0.5 ring-1 ${deltaClass(change)}`;
      }

      // Validation and enable/disable Post
      function validate() {
        const hasAcc = !!selectedAccount;
        const hasAmt = rawAmount > 0;
        const hasPurpose = !!selectedPurpose;
        const hasJust = justification.value.trim().length >= 4;
        const hasClientLabel = !!clientStatementLabel;

        const ok = hasAcc && hasAmt && hasPurpose && hasJust && hasClientLabel;
        btnPost.disabled = !ok;

        // Preview values
        if (selectedAccount) {
          pvBalance.textContent = `${selectedAccount.name} • ${selectedAccount.currency}`;
          pvAmount.textContent = `${entryType === 'credit' ? '+' : '-'}${formatMoney(rawAmount, selectedAccount.currency, selectedAccount.symbol)}`;
        } else {
          pvBalance.textContent = '—';
          pvAmount.textContent = '—';
        }
        pvType.textContent = entryType === 'credit' ? 'Credit' : 'Debit';
        pvInternal.textContent = selectedPurpose ? `${selectedPurpose} • ${justification.value.trim() || '—'}` : '—';
        pvClient.textContent = clientStatementLabel ? `${clientStatementLabel} • ${byId('clientRef').value.trim() || '—'}` : '—';
      }

      // Preview drawer
      btnPreview.addEventListener('click', () => {
        previewDrawer.classList.toggle('hidden');
      });

      // Cancel/Close
      function closeDialog() {
        document.querySelector('.fixed.inset-0').classList.add('hidden');
      }
      btnCancel.addEventListener('click', closeDialog);
      closeModal.addEventListener('click', closeDialog);

      // Post action
      btnPost.addEventListener('click', () => {
        btnPost.innerHTML = '<span class="inline-flex items-center gap-1.5"><iconify-icon icon="solar:check-circle-linear" width="16" height="16" style="stroke-width:1.5"></iconify-icon>Posted</span>';
        btnPost.classList.add('bg-emerald-500', 'text-white');
        setTimeout(() => {
          btnPost.innerHTML = '<span class="inline-flex items-center gap-1.5"><iconify-icon icon="solar:check-circle-linear" width="16" height="16" style="stroke-width:1.5"></iconify-icon>Post adjustment</span>';
          btnPost.classList.remove('bg-emerald-500');
          validate();
        }, 1200);
      });

      // Client ref updates preview
      byId('clientRef').addEventListener('input', validate);

      // Initialize
      renderAccountOptions();
      renderPurposeOptions();
      renderClientLabelOptions();
      setType('credit');
      updateImpact();
      validate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen relative">

<div className="fixed inset-0 flex items-center justify-center p-6">
<div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>

<div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden">

<div className="flex items-start justify-between gap-4 px-6 sm:px-8 pt-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center tracking-tight text-slate-700 text-sm font-semibold">
                FX
              </div>
<div>
<h2 className="text-2xl tracking-tight font-semibold text-slate-900">New Ledger Adjustment</h2>
<p className="text-sm text-slate-500">Create a balanced entry impacting client balances with clear internal vs client-facing intent.</p>
</div>
</div>
<button className="shrink-0 text-slate-500 hover:text-slate-700 transition-colors rounded-md p-2" id="closeModal">
<iconify-icon height="22" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>

<div className="px-6 sm:px-8 mt-4">
<div className="flex items-center gap-3 text-xs">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200 px-2.5 py-1">
<iconify-icon height="14" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                Internal-only
              </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200 px-2.5 py-1">
<iconify-icon height="14" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                Client-facing
              </span>
<span className="text-slate-500">Use these markers on labels and sections to avoid ambiguity.</span>
</div>
</div>

<div className="px-6 sm:px-8 py-6 grid grid-cols-1 gap-6">

<div className="space-y-6">

<div className="space-y-2">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-slate-900">Balance to adjust</label>
<span className="text-xs text-slate-500">Required</span>
</div>

<div className="relative">
<button className="w-full group flex items-center justify-between rounded-lg bg-white hover:bg-slate-50 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5370C7]/50 focus:outline-none px-3 py-2.5 text-left" id="balanceBtn">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 ring-1 ring-slate-200">
<iconify-icon className="text-slate-600" height="18" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
<div className="min-w-0">
<div className="text-sm text-slate-900 truncate" id="balanceLabel">Select balance</div>
<div className="text-xs text-slate-500 truncate" id="balanceSub">—</div>
</div>
</div>
<iconify-icon className="text-slate-500 group-hover:text-slate-700" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<div className="hidden absolute z-20 mt-2 w-full rounded-xl bg-white ring-1 ring-slate-200 shadow-xl overflow-hidden" id="balanceMenu">
<div className="max-h-64 overflow-auto divide-y divide-slate-100">

</div>
</div>
</div>
<p className="text-xs text-slate-500">Choose the client balance ledger this adjustment will affect.</p>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-slate-900">Adjustment amount</label>
<div className="flex items-center gap-1 text-xs text-slate-500">
<iconify-icon height="14" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                    Credit increases, Debit decreases
                  </div>
</div>
<div className="flex items-center gap-2">

<div className="inline-flex rounded-lg ring-1 ring-slate-200 bg-slate-100 p-1">
<button className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-900 bg-white ring-1 ring-slate-200 inline-flex items-center gap-1.5" id="btnCredit">
<iconify-icon className="text-slate-700" height="16" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                      Credit
                    </button>
<button className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 hover:text-slate-900" id="btnDebit">
<iconify-icon className="text-slate-600" height="16" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                      Debit
                    </button>
</div>

<div className="flex-1">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
<span className="text-sm" id="currencySymbol">$</span>
</div>
<input className="w-full rounded-lg bg-white hover:bg-slate-50 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5370C7]/50 focus:outline-none pl-8 pr-12 py-2.5 text-sm text-slate-900 placeholder:text-slate-400" id="amountInput" inputmode="decimal" placeholder="0.00" type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500">
<span className="text-xs" id="currencyCode">USD</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-slate-50 ring-1 ring-slate-200 p-3 sm:p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600" height="18" icon="solar:chart-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<div className="text-sm font-medium text-slate-900">Real-time impact</div>
</div>
<div className="text-xs rounded-full px-2.5 py-1 ring-1" id="directionPill">

</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-500">
<div></div>
<div className="text-center">Before</div>
<div className="text-center">After</div>
</div>
<div className="mt-2 space-y-2">

<div className="grid grid-cols-3 items-center gap-2">
<div className="text-sm text-slate-700">Available</div>
<div className="text-sm text-center text-slate-700" id="availBefore">—</div>
<div className="text-sm text-center">
<span className="font-medium" id="availAfter">—</span>
<span className="ml-2 text-xs rounded-full px-2 py-0.5 ring-1" id="availDelta">—</span>
</div>
</div>

<div className="grid grid-cols-3 items-center gap-2">
<div className="text-sm text-slate-700">Current</div>
<div className="text-sm text-center text-slate-700" id="currBefore">—</div>
<div className="text-sm text-center">
<span className="font-medium" id="currAfter">—</span>
<span className="ml-2 text-xs rounded-full px-2 py-0.5 ring-1" id="currDelta">—</span>
</div>
</div>
</div>
<p className="mt-3 text-xs text-slate-500">We apply this amount equally to Available and Current balances for manual ledger adjustments.</p>
</div>
</div>

<div className="rounded-2xl ring-1 ring-slate-200 bg-white">
<div className="px-4 sm:px-5 py-4 border-b border-slate-200">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200 px-2 py-0.5 text-xs">
<iconify-icon height="14" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                      Internal-only
                    </span>
<span className="text-xs text-slate-500">Visible to reviewers and auditors only</span>
</div>
</div>
<div className="p-4 sm:p-5 space-y-4">

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-slate-900">Purpose type</label>
<span className="text-xs text-slate-500">Required</span>
</div>
<div className="relative">
<button className="w-full group flex items-center justify-between rounded-lg bg-white hover:bg-slate-50 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5370C7]/50 focus:outline-none px-3 py-2.5 text-left" id="purposeBtn">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600" height="18" icon="solar:tag-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-slate-900" id="purposeLabel">Select purpose</span>
</div>
<iconify-icon className="text-slate-500 group-hover:text-slate-700" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<div className="hidden absolute z-20 mt-2 w-full rounded-xl bg-white ring-1 ring-slate-200 shadow-xl overflow-hidden" id="purposeMenu">
<div className="max-h-60 overflow-auto divide-y divide-slate-100">

</div>
</div>
</div>
<p className="text-xs text-slate-500">Used for internal categorization and audit trails. Not shown to clients.</p>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-slate-900">Justification</label>
<span className="text-xs text-slate-500">Required</span>
</div>
<textarea className="w-full rounded-lg bg-white hover:bg-slate-50 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5370C7]/50 focus:outline-none px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400" id="justification" placeholder="Explain the context, references, and approvals…" rows="4"></textarea>
<div className="flex items-center justify-between">
<p className="text-xs text-slate-500">Include ticket/incident IDs and reconciliation notes.</p>
<span className="text-xs text-slate-500" id="justCount">0 / 400</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl ring-1 ring-slate-200 bg-white">
<div className="px-4 sm:px-5 py-4 border-b border-slate-200">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200 px-2 py-0.5 text-xs">
<iconify-icon height="14" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                      Client-facing
                    </span>
<span className="text-xs text-slate-500">Shown on statements and client APIs</span>
</div>
</div>
<div className="p-4 sm:p-5 space-y-4">

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-slate-900">Client statement label</label>
<span className="text-xs text-slate-500">Required</span>
</div>
<div className="relative">
<button className="w-full group flex items-center justify-between rounded-lg bg-white hover:bg-slate-50 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5370C7]/50 focus:outline-none px-3 py-2.5 text-left" id="clientLabelBtn">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-600" height="18" icon="solar:document-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-slate-900" id="clientLabel">Select statement label</span>
</div>
<iconify-icon className="text-slate-500 group-hover:text-slate-700" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<div className="hidden absolute z-20 mt-2 w-full rounded-xl bg-white ring-1 ring-slate-200 shadow-xl overflow-hidden" id="clientLabelMenu">
<div className="max-h-60 overflow-auto divide-y divide-slate-100">

</div>
</div>
</div>
<p className="text-xs text-slate-500">How this entry will be described on the client statement.</p>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-slate-900">Client statement reference</label>
<span className="text-xs text-slate-500">Optional</span>
</div>
<input className="w-full rounded-lg bg-white hover:bg-slate-50 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#5370C7]/50 focus:outline-none px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400" id="clientRef" placeholder="e.g., Case 18273, FX correction for 2025‑01‑10" type="text"/>
<p className="text-xs text-slate-500">This text will be visible to the client.</p>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 sm:px-8 pb-6">
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between">
<div className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon height="16" icon="solar:lock-keyhole-minimalistic-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Internal fields are stored for audit. Client-facing fields render on statements and are shared via APIs.</span>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 text-sm rounded-lg bg-white hover:bg-slate-50 ring-1 ring-slate-200 text-slate-700" id="btnCancel">Cancel</button>
<button className="px-4 py-2 text-sm rounded-lg bg-white hover:bg-slate-50 ring-1 ring-slate-200 text-slate-700" id="btnPreview">
<span className="inline-flex items-center gap-1.5">
<iconify-icon className="text-slate-600" height="16" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Preview entry
                  </span>
</button>
<button className="px-4 py-2 text-sm rounded-lg text-white bg-[#5370C7] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="btnPost">
<span className="inline-flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Post adjustment
                  </span>
</button>
</div>
</div>
</div>

<div className="hidden border-t border-slate-200" id="previewDrawer">
<div className="px-6 sm:px-8 py-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<div className="text-sm text-slate-500 mb-2">Entry summary</div>
<div className="rounded-lg bg-slate-50 ring-1 ring-slate-200 p-4 space-y-2 text-sm">
<div className="flex justify-between"><span className="text-slate-500">Balance</span><span className="text-slate-900" id="pvBalance">—</span></div>
<div className="flex justify-between"><span className="text-slate-500">Type</span><span className="text-slate-900" id="pvType">—</span></div>
<div className="flex justify-between"><span className="text-slate-500">Amount</span><span className="text-slate-900" id="pvAmount">—</span></div>
</div>
</div>
<div>
<div className="text-sm text-slate-500 mb-2">Visibility</div>
<div className="rounded-lg bg-slate-50 ring-1 ring-slate-200 p-4 space-y-2 text-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200 px-2 py-0.5 text-xs">
<iconify-icon height="14" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                      Internal-only
                    </span>
<span className="text-slate-900 truncate text-right" id="pvInternal">—</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200 px-2 py-0.5 text-xs">
<iconify-icon height="14" icon="solar:eye-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                      Client-facing
                    </span>
<span className="text-slate-900 truncate text-right" id="pvClient">—</span>
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
