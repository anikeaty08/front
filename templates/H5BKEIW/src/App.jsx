import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // State
    const state = {
      step: 1,               // logical step 1..5
      stepsTotal: 5,
      selectedVenues: [],    // single selection: [{id, type}]
      api: { tested: false, success: false, wsOK: true, duplicate: false },
      finished: false
    };

    // Helpers
    const qs = (s, el=document) => el.querySelector(s);
    const qsa = (s, el=document) => [...el.querySelectorAll(s)];
    const show = (el) => el.classList.remove('hidden');
    const hide = (el) => el.classList.add('hidden');
    const setText = (el, t) => el && (el.textContent = t);
    const toastRoot = qs('#toastRoot');

    function toast(msg, variant='neutral') {
      const wrap = document.createElement('div');
      const base = 'rounded-xl border px-3 py-2 text-sm shadow-xl backdrop-blur-xl bg-neutral-900/95';
      let styles = ' border-white/10 text-neutral-200';
      if (variant === 'success') styles = ' border-emerald-500/20 text-emerald-300 bg-emerald-500/10';
      if (variant === 'error') styles = ' border-rose-500/20 text-rose-300 bg-rose-500/10';
      if (variant === 'warn') styles = ' border-amber-500/20 text-amber-200 bg-amber-500/10';
      wrap.className = base + styles + ' opacity-0 translate-y-1 transition-all duration-300';
      wrap.textContent = msg;
      toastRoot.appendChild(wrap);
      requestAnimationFrame(() => { wrap.classList.remove('opacity-0','translate-y-1'); });
      setTimeout(() => { wrap.classList.add('opacity-0','translate-y-1'); setTimeout(()=>wrap.remove(),300); }, 3500);
    }

    // Init UI
    const overlay = qs('#overlay'); const modal = qs('#modal');
    requestAnimationFrame(() => {
      overlay.classList.remove('opacity-0'); modal.classList.remove('opacity-0','translate-y-4');
    });

    const title = qs('#title');
    const subtitle = qs('#subtitle');
    const stepLabel = qs('#stepLabel');
    const progressBar = qs('#progressBar');
    const btnPrimary = qs('#btnPrimary');
    const btnBack = qs('#btnBack');
    const btnClose = qs('#btnClose');

    // Map logical steps (1..5) to existing section data-step attributes
    function sectionKeyForStep(num){
      return {1:1, 2:2, 3:4, 4:6, 5:7}[num] || 1;
    }

    function updateHeader() {
      setText(stepLabel, `Step ${state.step} of ${state.stepsTotal}`);
      progressBar.style.width = `${Math.round((state.step/state.stepsTotal)*100)}%`;
      btnBack.classList.toggle('hidden', state.step === 1);
      let t = ''; let sub = '';
      switch(state.step){
        case 1: t='Connect your exchange API keys'; sub='Enable trading, automation, and PnL tracking with secured keys.'; btnPrimary.textContent='Get started'; break;
        case 2: t='Select your exchange'; sub='Choose one to continue.'; btnPrimary.textContent='Continue'; break;
        case 3: t='Enter credentials'; sub='Test your connection before saving.'; btnPrimary.textContent='Continue'; break;
        case 4: t='Review & confirm'; sub='Verify masked key and permissions, then acknowledge.'; btnPrimary.textContent='Confirm & finish'; break;
        case 5: t='All set'; sub='You can start trading and automation.'; btnPrimary.textContent='Start trading'; break;
        default: t='Connect your exchange API keys'; sub='Enable trading, automation, and PnL tracking with secured keys.'; btnPrimary.textContent='Continue';
      }
      setText(title, t);
      setText(subtitle, sub);
    }

    // Step visibility and gating
    const steps = qsa('section.step');
    function showStep(num){
      state.step = num;
      steps.forEach(s => s.classList.add('hidden'));
      const mapped = sectionKeyForStep(num);
      const current = qs(`section[data-step="${mapped}"]`);
      if (current) current.classList.remove('hidden');
      updateHeader();
      gatePrimary();
      // Sync venue select with chosen exchange when entering credentials
      if (state.step === 3 && state.selectedVenues[0]) {
        const chosen = state.selectedVenues[0].id;
        const sel = qs('#apiVenue');
        if (sel) sel.value = chosen;
      }
      // Update Back button accessibility label
      btnBack.setAttribute('aria-label', state.step === 1 ? 'Back (disabled)' : 'Back');
      btnPrimary.setAttribute('aria-label', btnPrimary.textContent);
    }

    function disablePrimary(reason){
      btnPrimary.disabled = true;
      btnPrimary.classList.add('opacity-60','cursor-not-allowed');
      btnPrimary.setAttribute('title', reason);
    }
    function enablePrimary(){
      btnPrimary.disabled = false;
      btnPrimary.classList.remove('opacity-60','cursor-not-allowed');
      btnPrimary.removeAttribute('title');
    }

    function gatePrimary(){
      enablePrimary();
      if (state.step === 2) {
        if (state.selectedVenues.length !== 1) disablePrimary('Select one exchange to continue');
      }
      if (state.step === 3) {
        if (!(state.api.tested && state.api.success)) disablePrimary('Test and authenticate your API key');
      }
      if (state.step === 4) {
        const ack = qs('#ack');
        if (!ack.checked) disablePrimary('Acknowledge to continue');
      }
    }

    // Venue selection (single-select)
    const selectedRow = qs('#selectedRow');
    const selectedPills = qs('#selectedPills');
    qsa('.venue-tile').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const id = btn.getAttribute('data-venue');
        const type = btn.getAttribute('data-type');
        const existing = state.selectedVenues.find(v=>v.id===id);
        // Single select: clear if selecting a different one
        qsa('.venue-tile').forEach(t => t.classList.remove('ring-1','ring-emerald-400/40','border-emerald-500/30','bg-emerald-500/10'));
        state.selectedVenues = [];
        if (!existing) {
          state.selectedVenues.push({id, type});
          btn.classList.add('ring-1','ring-emerald-400/40','border-emerald-500/30','bg-emerald-500/10');
        }
        renderSelected();
        gatePrimary();
      });
    });

    function renderSelected(){
      selectedPills.innerHTML='';
      if (state.selectedVenues.length===0) { hide(selectedRow); return; }
      show(selectedRow);
      state.selectedVenues.forEach(v=>{
        const pill = document.createElement('span');
        pill.className='inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md border border-white/10 bg-white/5';
        pill.innerHTML = `${labelForVenue(v.id)} <button class="ml-1 hover:text-rose-300" aria-label="Remove ${labelForVenue(v.id)}">&times;</button>`;
        pill.querySelector('button').addEventListener('click', ()=>{
          state.selectedVenues = [];
          qsa('.venue-tile').forEach(t => t.classList.remove('ring-1','ring-emerald-400/40','border-emerald-500/30','bg-emerald-500/10'));
          renderSelected();
          gatePrimary();
        });
        selectedPills.appendChild(pill);
      });
    }

    function labelForVenue(id){
      const map = { hyperliquid:'Hyperliquid', dydxv4:'dYdX', paradex:'Paradex' };
      return map[id] || id;
    }

    // API credential testing (unchanged core)
    const btnTestAPI = qs('#btnTestAPI');
    const apiErrors = qs('#apiErrors');
    const errSignature = qs('#errSignature');
    const errPermission = qs('#errPermission');
    const errIP = qs('#errIP');
    const errHost = qs('#errHost');
    const errRate = qs('#errRate');
    const retryTimer = qs('#retryTimer');
    const errClock = qs('#errClock');
    const btnSyncTime = qs('#btnSyncTime');
    const authChip = qs('#authChip');
    const authWarn = qs('#authWarn');
    const dupConn = qs('#dupConn');

    btnTestAPI.addEventListener('click', ()=>{
      hide(apiErrors); [errSignature,errPermission,errIP,errHost,errRate,errClock].forEach(hide);
      hide(authChip); hide(authWarn); hide(dupConn);
      state.api.tested = true; state.api.success = false; state.api.wsOK = true; state.api.duplicate=false;

      const key = qs('#apiKey').value.trim();
      const secret = qs('#apiSecret').value.trim();
      const pass = qs('#passphrase').value.trim();
      const venue = qs('#apiVenue').value;

      if (!key || !secret) {
        show(apiErrors); show(errSignature);
        toast('Missing API key or secret','warn');
        gatePrimary();
        return;
      }

      btnTestAPI.disabled = true;
      const original = btnTestAPI.innerHTML;
      btnTestAPI.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10" class="opacity-20"/><path d="M12 2a10 10 0 0 1 10 10" /></svg><span class="ml-2">Testing…</span>`;

      setTimeout(()=>{
        if (/ipbad/i.test(key)) { show(apiErrors); show(errIP); finishTest(false); return; }
        if (/perm/i.test(key)) { show(apiErrors); show(errPermission); finishTest(false); return; }
        if (/host/i.test(key)) { show(apiErrors); show(errHost); finishTest(false); return; }
        if (/rate/i.test(key)) {
          show(apiErrors); show(errRate);
          let t=10; retryTimer.textContent=t;
          const int = setInterval(()=>{ t--; retryTimer.textContent=t; if (t<=0){ clearInterval(int); hide(errRate);} },1000);
          finishTest(false);
          return;
        }
        if (/clock/i.test(pass)) { show(apiErrors); show(errClock); finishTest(false); return; }

        if (/-dup$/i.test(key)) { state.api.duplicate=true; show(dupConn); }
        state.api.wsOK = !/wsfail/i.test(pass);

        state.api.success = true;
        show(authChip);
        if (!state.api.wsOK) show(authWarn);
        toast(`Authenticated with ${labelForVenue(venue)}`,'success');
        finishTest(true);
      }, 1200);

      function finishTest(ok){
        btnTestAPI.disabled = false;
        btnTestAPI.innerHTML = original;
        gatePrimary();
      }
    });

    qs('#btnReplaceKeys').addEventListener('click', ()=>{
      hide(dupConn);
      toast('Existing keys replaced','success');
    });
    qs('#btnKeepBoth').addEventListener('click', ()=>{
      hide(dupConn);
      toast('Keeping both keys (labeled v2)','neutral');
    });

    btnSyncTime?.addEventListener('click', ()=>{
      hide(errClock);
      toast('Time synced with NTP','success');
    });

    // Copy egress IPs
    qs('#btnCopyIPs').addEventListener('click', async ()=>{
      const text = qs('#egressIPs').textContent.trim();
      try { await navigator.clipboard.writeText(text); toast('Egress IPs copied','success'); }
      catch { toast('Copy failed','error'); }
    });

    // Review population (API-only)
    function maskKey(k){
      if (!k) return '';
      const visible = k.slice(-4);
      return `${'•'.repeat(Math.max(4, k.length-4))}${visible}`;
    }
    function populateReview(){
      const list = qs('#reviewList');
      list.innerHTML = '';
      const venue = qs('#apiVenue').value;
      const key = qs('#apiKey').value.trim();

      const wrap = document.createElement('div');
      wrap.className='rounded-lg border border-white/10 bg-neutral-900/60 p-3';
      wrap.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="text-sm font-medium">API credentials</div>
          <div class="text-xs ${state.api.success?'text-emerald-300':'text-rose-300'}">${state.api.success?'Authenticated':'Not authenticated'}</div>
        </div>
        <div class="mt-2 text-xs text-neutral-400 space-y-1">
          <div>Exchange: <span class="text-neutral-300">${labelForVenue(venue)}</span></div>
          <div>Key: <span class="text-neutral-300">${maskKey(key)}</span></div>
          <div>Permissions: <span class="text-neutral-300">Read, Trade</span> • <span class="text-rose-300">No Withdraw</span></div>
          ${state.api.duplicate? '<div class="text-amber-200">Duplicate detected</div>':''}
          ${!state.api.wsOK? '<div class="text-amber-200">WS limited</div>':''}
        </div>
      `;
      list.appendChild(wrap);
    }

    // Ack custom checkbox
    const ack = qs('#ack');
    const ackToggle = qs('#ackToggle');
    ackToggle.addEventListener('click', ()=>{
      const newVal = !ack.checked;
      ack.checked = newVal;
      ackToggle.setAttribute('aria-checked', newVal ? 'true' : 'false');
      ackToggle.classList.toggle('bg-emerald-500/20', newVal);
      const icon = ackToggle.querySelector('svg');
      if (icon) icon.classList.toggle('opacity-0', !newVal);
      gatePrimary();
    });

    // Navigation
    function computeNext(from){
      switch(from){
        case 1: return 2;
        case 2: return 3;
        case 3: return 4;
        case 4: return 5;
        case 5: return 5;
        default: return 1;
      }
    }
    function computePrev(from){
      switch(from){
        case 2: return 1;
        case 3: return 2;
        case 4: return 3;
        case 5: return 4;
        default: return 1;
      }
    }

    const ackWrap = qs('#ackWrap');

    const btnPrimaryClick = ()=>{
      if (state.step === 2 && state.selectedVenues.length!==1) { toast('Select one exchange','warn'); return; }
      if (state.step === 3 && !(state.api.tested && state.api.success)) { toast('Test API credentials before continuing','warn'); return; }
      if (state.step === 4 && !ack.checked) { toast('Please acknowledge to finish','warn'); return; }

      if (state.step === 4) populateReview();

      if (state.step === 5) {
        closeWizard('Opening trading…');
        return;
      }

      const next = computeNext(state.step);
      showStep(next);
      if (next === 4) populateReview();
    };

    const btnPrimary = qs('#btnPrimary');
    btnPrimary.addEventListener('click', btnPrimaryClick);

    btnBack.addEventListener('click', ()=>{
      const prev = computePrev(state.step);
      showStep(prev);
    });

    // Close and Skip confirmation
    const confirmClose = qs('#confirmClose');
    const confirmSkip = qs('#confirmSkip');
    qs('#btnClose').addEventListener('click', ()=> show(confirmClose));
    qs('#cancelClose').addEventListener('click', ()=> hide(confirmClose));
    qs('#confirmCloseYes').addEventListener('click', ()=> closeWizard('Exiting setup…'));

    qs('#btnSkip').addEventListener('click', ()=> show(confirmSkip));
    qs('#cancelSkip').addEventListener('click', ()=> hide(confirmSkip));
    qs('#confirmSkipYes').addEventListener('click', ()=> closeWizard('Setup skipped. Trading will remain disabled.'));

    function closeWizard(msg){
      toast(msg || 'Closing…');
      modal.classList.add('opacity-0','translate-y-4');
      overlay.classList.add('opacity-0');
      setTimeout(()=>{
        qs('#wizardRoot').remove();
        confirmClose?.remove();
        confirmSkip?.remove();
      }, 280);
    }

    // Keyboard accessibility
    document.addEventListener('keydown', (e)=>{
      if (e.key==='Escape') show(confirmClose);
      if (e.key==='Enter' && document.activeElement?.tagName !== 'TEXTAREA') {
        if (!btnPrimary.disabled) btnPrimary.click();
      }
    });

    // Modal a11y
    modal.setAttribute('role','dialog');
    modal.setAttribute('aria-modal','true');
    modal.setAttribute('aria-labelledby','title');
    modal.setAttribute('aria-describedby','subtitle');

    // Initialize
    const overlayInit = ()=> { showStep(1); };
    overlayInit();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="overlay"></div>

<div className="fixed top-4 right-4 z-[60] space-y-3 w-[360px] max-w-[90vw]" id="toastRoot"></div>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="wizardRoot">
<div className="w-full max-w-md sm:max-w-xl rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl backdrop-blur-xl opacity-0 translate-y-4 transition-all duration-300" id="modal">

<div className="sticky top-0 z-10 border-b border-white/10 bg-neutral-900/70 backdrop-blur-xl rounded-t-2xl">
<div className="flex items-center justify-between px-5 sm:px-6 py-4">
<div className="flex items-center gap-2">
<button aria-label="Back" className="group hidden h-11 px-3 rounded-lg border border-white/10 text-neutral-300 hover:text-neutral-200 hover:border-white/20 hover:bg-white/5 transition-colors inline-flex items-center gap-2" id="btnBack">
<svg className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<span className="text-sm tracking-tight">Back</span>
</button>
<div className="ml-0 sm:ml-1">
<h1 className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-200" id="title">Connect your exchange API keys</h1>
<p className="text-sm text-neutral-400" id="subtitle">Enable trading, automation, and PnL tracking with secured keys.</p>
</div>
</div>
<button aria-label="Close" className="h-11 w-11 rounded-lg border border-white/10 text-neutral-300 hover:text-neutral-200 hover:border-white/20 hover:bg-white/5 transition-colors inline-flex items-center justify-center" id="btnClose">
<svg className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>
</button>
</div>

<div className="px-5 sm:px-6 pb-4">
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-400">
<span className="font-medium" id="stepLabel">Step 1 of 5</span>
</div>
<div className="text-xs text-neutral-500">~2–3 minutes</div>
</div>
<div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/60 transition-all duration-500" id="progressBar" style={{width: '20%'}}></div>
</div>
</div>
</div>

<div className="px-5 sm:px-6 py-5 space-y-5" id="content">

<section className="step space-y-6" data-step="1">
<div className="grid gap-4">
<div className="p-5 rounded-xl border border-white/10 bg-white/5">
<div className="flex items-start gap-3">
<svg className="h-5 w-5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="8" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h20"></path><path d="M7 22v-4"></path><path d="M17 22v-4"></path><path d="M6 18h12"></path></svg>
<div>
<p className="text-sm">API keys let you place orders and automate strategies across supported exchanges.</p>
</div>
</div>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-white/5">
<div className="flex items-start gap-3">
<svg className="h-5 w-5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 2-2 2"></path><path d="m7.5 13.5 3 3L22 5a2.828 2.828 0 1 0-4-4L6.5 12.5 4 20l7.5-2.5"></path></svg>
<div>
<p className="text-sm">Keys are encrypted client-side, stored envelope-encrypted, and can be revoked anytime.</p>
</div>
</div>
</div>
<div className="p-5 rounded-xl border border-white/10 bg-white/5">
<div className="flex items-start gap-3">
<svg className="h-5 w-5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<p className="text-sm">We request Read + Trade only; never Withdraw. You retain full control.</p>
</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 p-4 bg-neutral-900/60">
<div className="flex items-start gap-3">
<svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12v4"></path><path d="M12 8h.01"></path><circle cx="12" cy="12" r="10"></circle></svg>
<p className="text-sm text-neutral-400">You can add or rotate keys later in Settings → Connections. PnL and portfolio tracking will be enabled once connected.</p>
</div>
</div>
</section>

<section className="step hidden space-y-4" data-step="2">
<div>
<h2 className="text-base font-semibold tracking-tight">Select your exchange</h2>
<p className="text-sm text-neutral-400">Choose one to continue. You can add more later.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<button className="venue-tile group h-full text-left rounded-xl border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-colors p-4" data-type="api" data-venue="hyperliquid">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium tracking-tight">Hyperliquid</p>
<p className="text-xs text-neutral-400">Perps; API key</p>
</div>
<span className="text-[11px] px-2 py-1 rounded-md border border-white/10 text-neutral-300">API</span>
</div>
</button>
<button className="venue-tile group h-full text-left rounded-xl border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-colors p-4" data-type="api" data-venue="dydxv4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium tracking-tight">dYdX</p>
<p className="text-xs text-neutral-400">Perps; API key</p>
</div>
<span className="text-[11px] px-2 py-1 rounded-md border border-white/10 text-neutral-300">API</span>
</div>
</button>
<button className="venue-tile group h-full text-left rounded-xl border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-colors p-4" data-type="api" data-venue="paradex">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium tracking-tight">Paradex</p>
<p className="text-xs text-neutral-400">Perps/hybrid; API key</p>
</div>
<span className="text-[11px] px-2 py-1 rounded-md border border-white/10 text-neutral-300">API</span>
</div>
</button>

<button className="hidden venue-tile" data-type="wallet" data-venue="injective"></button>
<button className="hidden venue-tile" data-type="api" data-venue="vertex"></button>
<button className="hidden venue-tile" data-type="api" data-venue="aevo"></button>
<button className="hidden venue-tile" data-type="api" data-venue="injective-api"></button>
<button className="hidden venue-tile" data-type="api" data-venue="cex-read"></button>
</div>
<div className="hidden items-center flex-wrap gap-2 p-3 rounded-lg border border-white/10 bg-white/5" id="selectedRow">
<span className="text-xs text-neutral-400">Selected:</span>
<div className="flex flex-wrap gap-2" id="selectedPills"></div>
</div>
</section>

<section className="step hidden space-y-4" data-step="4">
<div className="grid lg:grid-cols-3 gap-4">
<div className="space-y-3 rounded-xl border border-white/10 p-4 bg-white/5">
<h3 className="text-sm font-medium tracking-tight">Permissions</h3>
<div className="space-y-2 text-xs">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300">Read (balances, positions)</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-neutral-300">Trade (place/cancel)</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-neutral-300">Not requested: Withdraw</span>
</div>
</div>
<div className="mt-3 space-y-2 text-xs text-neutral-400">
<p>Recommend IP allowlist and short TTL/expiring keys.</p>
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-2">
<div className="flex items-center justify-between">
<span>Egress IPs</span>
<button className="text-emerald-300 hover:text-emerald-200 underline decoration-emerald-400/60 underline-offset-2 text-xs" id="btnCopyIPs">Copy</button>
</div>
<code className="block mt-1 text-[11px] text-neutral-400" id="egressIPs">34.120.12.10, 34.118.22.203, 35.201.45.19</code>
</div>
</div>
</div>
<div className="lg:col-span-2 space-y-4">
<div className="rounded-xl border border-white/10 p-4 bg-white/5 space-y-3">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-neutral-400">Exchange</label>
<select className="mt-1 w-full h-11 rounded-lg bg-neutral-800 border border-white/10 focus:outline-none focus:border-emerald-500/30 px-3 text-sm text-neutral-100" id="apiVenue">
<option value="hyperliquid">Hyperliquid</option>
<option value="dydxv4">dYdX</option>
<option value="paradex">Paradex</option>
</select>
</div>
<div>
<label className="text-xs text-neutral-400">TTL / Expiry (optional)</label>
<select className="mt-1 w-full h-11 rounded-lg bg-neutral-800 border border-white/10 focus:outline-none focus:border-emerald-500/30 px-3 text-sm text-neutral-100" id="ttl">
<option value="none">No expiry</option>
<option value="30d">30 days</option>
<option selected="" value="90d">90 days</option>
<option value="180d">180 days</option>
</select>
</div>
</div>
<div className="grid sm:grid-cols-3 gap-3">
<div className="sm:col-span-2">
<label className="text-xs text-neutral-400">API Key</label>
<input className="mt-1 w-full h-11 rounded-lg bg-neutral-800 border border-white/10 focus:outline-none focus:border-emerald-500/30 px-3 text-sm text-neutral-100" id="apiKey" placeholder="hl_live_xxxxxxxxxx" type="text"/>
</div>
<div>
<label className="text-xs text-neutral-400">Passphrase (if applicable)</label>
<input className="mt-1 w-full h-11 rounded-lg bg-neutral-800 border border-white/10 focus:outline-none focus:border-emerald-500/30 px-3 text-sm text-neutral-100" id="passphrase" placeholder="••••••••" type="password"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-neutral-400">Secret</label>
<input className="mt-1 w-full h-11 rounded-lg bg-neutral-800 border border-white/10 focus:outline-none focus:border-emerald-500/30 px-3 text-sm text-neutral-100" id="apiSecret" placeholder="sk_****************" type="password"/>
</div>
<div>
<label className="text-xs text-neutral-400">IP Allowlist</label>
<textarea className="mt-1 w-full h-24 rounded-lg bg-neutral-800 border border-white/10 focus:outline-none focus:border-emerald-500/30 px-3 py-2 text-sm text-neutral-100" id="ipAllow" placeholder="34.120.12.10, 34.118.22.203"></textarea>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 pt-1">
<button className="h-11 px-4 rounded-lg border border-white/10 text-neutral-300 hover:text-neutral-200 hover:border-white/20 hover:bg-white/5 transition-colors inline-flex items-center gap-2" id="btnTestAPI">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9-6-18-3 9H2"></path></svg>
                    Test connection
                  </button>
<div className="hidden text-xs px-2.5 py-1.5 rounded-md border border-emerald-500/20 text-emerald-300 bg-emerald-500/10" id="authChip">
                    Authenticated ✓ • Rate limit: <span id="rateLimit">10</span> req/s • WS: <span id="wsStatus">OK</span>
</div>
<div className="hidden text-xs px-2.5 py-1.5 rounded-md border border-amber-500/20 text-amber-200 bg-amber-500/10" id="authWarn">
                    WS auth failed. REST OK. You can save with limited streaming.
                  </div>
</div>
<div className="hidden rounded-lg border border-rose-500/20 bg-rose-500/10 text-rose-300 text-xs p-3 space-y-2" id="apiErrors">
<div className="hidden" id="errSignature">Invalid signature → check time sync and passphrase.</div>
<div className="hidden" id="errPermission">Permission denied → enable Trade on your key.</div>
<div className="hidden" id="errIP">IP not allowed → add listed IPs to your allowlist.</div>
<div className="hidden" id="errHost">Wrong venue/endpoint → verify API host is correct.</div>
<div className="hidden" id="errRate">Rate limit exceeded → backing off. Retry in <span id="retryTimer">10</span>s.</div>
<div className="hidden flex items-center gap-2" id="errClock">Clock skew detected (&gt;30s). <button className="text-rose-200 underline underline-offset-2 decoration-rose-300/60" id="btnSyncTime">Sync time</button></div>
</div>
</div>
</div>
</div>
<div className="hidden rounded-xl border border-white/10 p-4 bg-white/5" id="dupConn">
<div className="flex items-start gap-2">
<svg className="h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<div className="text-sm">
                Duplicate connection detected. Replace keys or keep both (we’ll label the new one v2).
                <div className="mt-2 flex items-center gap-2">
<button className="h-9 px-3 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/20 hover:bg-rose-500/15 hover:border-rose-500/30 text-xs" id="btnReplaceKeys">Replace keys</button>
<button className="h-9 px-3 rounded-lg border border-white/10 text-neutral-300 hover:text-neutral-200 hover:border-white/20 hover:bg-white/5 text-xs" id="btnKeepBoth">Keep both (label v2)</button>
</div>
</div>
</div>
</div>
</section>

<section className="step hidden space-y-4" data-step="6">
<div className="rounded-xl border border-white/10 p-4 bg-white/5 space-y-3">
<h3 className="text-sm font-medium tracking-tight">Review</h3>
<div className="space-y-2" id="reviewList">

</div>
</div>

<div className="flex items-start gap-3 rounded-xl border border-white/10 p-4 bg-neutral-900/60" id="ackWrap">
<button aria-checked="false" aria-label="Acknowledge permissions" className="mt-0.5 h-5 w-5 rounded-[6px] border border-white/10 bg-neutral-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/20" id="ackToggle" role="checkbox">
<svg className="h-3.5 w-3.5 text-emerald-300 opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11L4 12"></path></svg>
</button>
<input className="sr-only" id="ack" type="checkbox"/>
<span className="text-sm text-neutral-300">I understand API keys enable order placement (Read + Trade only) and can be revoked on the exchange at any time.</span>
</div>
</section>

<section className="step hidden space-y-5" data-step="7">
<div className="rounded-2xl border border-white/10 p-6 bg-white/5 space-y-4">
<div className="flex items-center gap-2">
<svg className="h-5 w-5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.66-6.66-2.12 2.12M8.46 15.54l-2.12 2.12m0-10.6 2.12 2.12m7.08 7.08 2.12 2.12"></path></svg>
<h3 className="text-base font-semibold tracking-tight">Keys connected</h3>
</div>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Read + Trade permissions verified
              </li>
<li className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
                Keys encrypted and stored
              </li>
</ul>
<div className="grid sm:grid-cols-2 gap-2">
<button className="h-11 px-4 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/15 hover:border-emerald-500/30 transition-colors" id="btnStartTrading">Start trading</button>
<button className="h-11 px-4 rounded-lg border border-white/10 text-neutral-300 hover:text-neutral-200 hover:border-white/20 hover:bg-white/5 transition-colors" id="btnCreateBot">Set up first bot</button>
</div>
</div>
<p className="text-xs text-neutral-400">Rotate keys periodically. Manage in Settings → Connections.</p>
</section>

<section className="step hidden" data-step="3"></section>
<section className="step hidden" data-step="5"></section>
</div>

<div className="px-5 sm:px-6 pb-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">

<button className="text-sm text-neutral-400 hover:text-neutral-300 underline decoration-neutral-500/60 underline-offset-2" id="btnSkip">Skip for now</button>
</div>
<button className="h-11 px-5 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/15 hover:border-emerald-500/30 transition-colors" id="btnPrimary">
            Get started
          </button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[80] flex items-center justify-center p-4" id="confirmClose">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative w-full max-w-md rounded-xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl p-5 shadow-2xl">
<h4 className="text-base font-semibold tracking-tight">Leave setup?</h4>
<p className="mt-2 text-sm text-neutral-400">Your progress is not yet saved. You can finish later in Settings → Connections.</p>
<div className="mt-4 flex items-center justify-end gap-2">
<button className="h-11 px-4 rounded-lg border border-white/10 text-neutral-300 hover:text-neutral-200 hover:border-white/20 hover:bg-white/5" id="cancelClose">Stay</button>
<button className="h-11 px-4 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/20 hover:bg-rose-500/15 hover:border-rose-500/30" id="confirmCloseYes">Leave</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[80] flex items-center justify-center p-4" id="confirmSkip">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative w-full max-w-md rounded-xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl p-5 shadow-2xl">
<h4 className="text-base font-semibold tracking-tight">Skip for now?</h4>
<p className="mt-2 text-sm text-neutral-400">If you skip, trading and automation will not be enabled until keys are connected.</p>
<div className="mt-4 flex items-center justify-end gap-2">
<button className="h-11 px-4 rounded-lg border border-white/10 text-neutral-300 hover:text-neutral-200 hover:border-white/20 hover:bg-white/5" id="cancelSkip">Go back</button>
<button className="h-11 px-4 rounded-lg bg-rose-500/10 text-rose-300 border border-rose-500/20 hover:bg-rose-500/15 hover:border-rose-500/30" id="confirmSkipYes">Skip</button>
</div>
</div>
</div>


    </>
  );
}
