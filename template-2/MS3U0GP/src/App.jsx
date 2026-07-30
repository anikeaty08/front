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
      
      // State
      let currentStep = 1;
      let selectedExchange = null;
      const creds = { key: '', secret: '', passphrase: '' };
      let testPassed = false;

      // Elements
      const overlay = document.getElementById('wizardOverlay');
      const openBtn = document.getElementById('openWizardBtn');
      const closeBtn = document.getElementById('closeWizardBtn');
      const backBtn = document.getElementById('backBtn');
      const nextBtn = document.getElementById('nextBtn');
      const skipBtn = document.getElementById('skipBtn');
      const testBtn = document.getElementById('testBtn');
      const testStatus = document.getElementById('testStatus');
      const apiKeyEl = document.getElementById('apiKey');
      const apiSecretEl = document.getElementById('apiSecret');
      const apiPassEl = document.getElementById('apiPassphrase');
      const passWrapper = document.getElementById('passphraseWrapper');
      const selectedExchangeLabel = document.getElementById('selectedExchangeLabel');
      const reviewExchange = document.getElementById('reviewExchange');
      const reviewKey = document.getElementById('reviewKey');
      const confirmCk = document.getElementById('confirmCk');
      const confirmInput = document.getElementById('confirmInput');
      const tabs = Array.from(document.querySelectorAll('[data-step-tab]'));
      const sections = Array.from(document.querySelectorAll('[data-step]'));
      const toastHost = document.getElementById('toastHost');
      const startTradingBtn = document.getElementById('startTradingBtn');
      const setupBotBtn = document.getElementById('setupBotBtn');
      const manageKeysBtn = document.getElementById('manageKeysBtn');

      function requiresPassphrase(exchange) {
        return exchange === 'dYdX' || exchange === 'Paradex';
      }

      function maskKey(key) {
        if (!key || key.length < 8) return '••••••••';
        return key.slice(0, 4) + '••••••••' + key.slice(-4);
        }

      function setActiveStep(step) {
        currentStep = step;
        sections.forEach((s) => {
          const idx = Number(s.getAttribute('data-step'));
          if (idx === currentStep) {
            s.classList.remove('absolute','opacity-0','pointer-events-none','translate-x-4');
          } else {
            s.classList.add('absolute','opacity-0','pointer-events-none','translate-x-4');
          }
        });

        // Tabs state
        tabs.forEach((t) => {
          const idx = Number(t.getAttribute('data-step-tab'));
          if (idx === currentStep) {
            t.classList.add('active','border-emerald-500/30','text-emerald-300');
            t.classList.remove('text-neutral-400');
          } else {
            t.classList.remove('active','border-emerald-500/30','text-emerald-300');
          }
        });

        // Footer buttons
        backBtn.disabled = currentStep === 1;
        backBtn.classList.toggle('opacity-60', backBtn.disabled);
        backBtn.classList.toggle('cursor-not-allowed', backBtn.disabled);

        // Next button visibility and text
        if (currentStep === 5) {
          nextBtn.classList.add('hidden');
          backBtn.classList.add('hidden');
          skipBtn.classList.add('hidden');
        } else {
          nextBtn.classList.remove('hidden');
          backBtn.classList.remove('hidden');
          skipBtn.classList.remove('hidden');
        }

        updateNextState();

        // Update step-specific UI
        if (currentStep === 3) {
          selectedExchangeLabel.textContent = selectedExchange ? selectedExchange : 'Selected exchange';
          passWrapper.classList.toggle('hidden', !requiresPassphrase(selectedExchange));
        }
        if (currentStep === 4) {
          reviewExchange.textContent = selectedExchange || '—';
          reviewKey.textContent = maskKey(creds.key);
        }

        // Recreate icons after DOM changes
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      function updateNextState() {
        // Default enabled
        let disabled = false;

        if (currentStep === 2) {
          disabled = !selectedExchange;
        } else if (currentStep === 3) {
          disabled = !testPassed;
        } else if (currentStep === 4) {
          disabled = !confirmInput.checked;
        }

        nextBtn.disabled = disabled;
        nextBtn.classList.toggle('opacity-60', disabled);
        nextBtn.classList.toggle('cursor-not-allowed', disabled);
        nextBtn.setAttribute('aria-disabled', disabled ? 'true' : 'false');
      }

      function showToast(message, tone = 'neutral') {
        const toneClasses = tone === 'success'
          ? 'border-emerald-500/20'
          : tone === 'danger'
          ? 'border-rose-500/20'
          : 'border-white/10';

        const textTone = tone === 'danger' ? 'text-rose-300' : 'text-neutral-300';
        const iconName = tone === 'danger' ? 'alert-triangle' : 'info';

        const toast = document.createElement('div');
        toast.className = `pointer-events-auto w-full max-w-sm rounded-xl border ${toneClasses} bg-neutral-900/95 shadow-xl backdrop-blur px-4 py-3 flex items-start gap-3`;
        toast.innerHTML = `
          <div class="mt-0.5">
            <i data-lucide="${iconName}" class="h-4 w-4 text-emerald-300"></i>
          </div>
          <div class="flex-1 text-sm ${textTone}">${message}</div>
          <button class="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-neutral-800/70 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" aria-label="Dismiss">
            <i data-lucide="x" class="h-4 w-4"></i>
          </button>
        `;
        toastHost.appendChild(toast);
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const dismiss = () => {
          toast.classList.add('opacity-0','translate-y-1');
          setTimeout(() => toast.remove(), 160);
        };
        toast.querySelector('button').addEventListener('click', dismiss);
        setTimeout(dismiss, 3500);
      }

      function openWizard() {
        overlay.classList.remove('hidden');
        setActiveStep(1);
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      function closeWizard() {
        overlay.classList.add('hidden');
      }

      // Event wiring
      openBtn?.addEventListener('click', openWizard);
      closeBtn.addEventListener('click', () => {
        showToast('Setup skipped. Trading will not be enabled until keys are connected.', 'danger');
        closeWizard();
      });

      skipBtn.addEventListener('click', () => {
        showToast('Heads up: Trading is disabled until you connect your API keys.', 'danger');
        closeWizard();
      });

      backBtn.addEventListener('click', () => {
        if (currentStep > 1) setActiveStep(currentStep - 1);
      });

      nextBtn.addEventListener('click', () => {
        if (currentStep < 5) {
          setActiveStep(currentStep + 1);
          // Trigger toast on final connect transition
          if (currentStep === 5) {
            showToast('Exchange connected successfully.', 'success');
          }
        }
      });

      // Tabs (non-interactive step jump in this flow but we allow backward jump for convenience)
      tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          const target = Number(tab.getAttribute('data-step-tab'));
          // allow navigating only to current or previous steps (simple guard)
          if (target <= currentStep) setActiveStep(target);
        });
      });

      // Exchange selection
      Array.from(document.querySelectorAll('.exchange-card')).forEach((card) => {
        card.addEventListener('click', () => {
          Array.from(document.querySelectorAll('.exchange-card')).forEach((c) => {
            c.classList.remove('ring-2','ring-emerald-400/30','border-emerald-500/30','bg-emerald-500/5');
            c.querySelector('.selected-badge')?.classList.add('hidden');
            c.querySelector('.selected-dot')?.classList.add('hidden');
          });
          card.classList.add('ring-2','ring-emerald-400/30','border-emerald-500/30','bg-emerald-500/5');
          card.querySelector('.selected-badge')?.classList.remove('hidden');
          card.querySelector('.selected-dot')?.classList.remove('hidden');
          selectedExchange = card.getAttribute('data-exchange');
          testPassed = false;
          updateNextState();
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });
      });

      // Credentials inputs and testing
      [apiKeyEl, apiSecretEl, apiPassEl].forEach((el) => {
        el.addEventListener('input', () => {
          creds.key = apiKeyEl.value.trim();
          creds.secret = apiSecretEl.value.trim();
          creds.passphrase = apiPassEl.value.trim();
          testPassed = false;
          testStatus.innerHTML = '';
          updateNextState();
        });
      });

      testBtn.addEventListener('click', async () => {
        // Basic front-end check
        if (!selectedExchange) {
          showToast('Please select an exchange first.', 'danger');
          setActiveStep(2);
          return;
        }
        const needPass = requiresPassphrase(selectedExchange);
        if (!creds.key || !creds.secret || (needPass && !creds.passphrase)) {
          testStatus.innerHTML = '<span class="text-rose-300">Missing required fields.</span>';
          testPassed = false;
          updateNextState();
          return;
        }

        // Simulated test
        testBtn.disabled = true;
        testBtn.classList.add('opacity-60','cursor-not-allowed');
        testStatus.innerHTML = '<span class="text-neutral-400 inline-flex items-center gap-2"><i data-lucide="loader-2" class="h-4 w-4 animate-spin"></i> Testing connection…</span>';
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        await new Promise((r)=>setTimeout(r, 900));

        // Demo success if strings are at least length 4
        const ok = creds.key.length >= 4 && creds.secret.length >= 4 && (!needPass || creds.passphrase.length >= 4);
        if (ok) {
          testStatus.innerHTML = '<span class="text-emerald-300 inline-flex items-center gap-2"><i data-lucide="check-circle" class="h-4 w-4"></i> Connection verified</span>';
          testPassed = true;
        } else {
          testStatus.innerHTML = '<span class="text-rose-300 inline-flex items-center gap-2"><i data-lucide="x-circle" class="h-4 w-4"></i> Connection failed. Check credentials.</span>';
          testPassed = false;
        }
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        testBtn.disabled = false;
        testBtn.classList.remove('opacity-60','cursor-not-allowed');
        updateNextState();
      });

      // Confirm checkbox (custom)
      confirmCk.addEventListener('click', () => {
        const checked = confirmCk.getAttribute('aria-checked') === 'true' ? false : true;
        confirmCk.setAttribute('aria-checked', checked ? 'true' : 'false');
        confirmInput.checked = checked;
        const box = confirmCk.querySelector('span.inline-flex');
        if (checked) {
          box.classList.remove('text-transparent','bg-neutral-800','border-white/10');
          box.classList.add('bg-emerald-500/20','border-emerald-500/20','text-emerald-300');
        } else {
          box.classList.add('text-transparent','bg-neutral-800','border-white/10');
          box.classList.remove('bg-emerald-500/20','border-emerald-500/20','text-emerald-300');
        }
        updateNextState();
      });

      // Finish actions
      startTradingBtn?.addEventListener('click', () => {
        showToast('Opening trading terminal…','success');
        closeWizard();
      });
      setupBotBtn?.addEventListener('click', () => {
        showToast('Let’s set up your first bot.','success');
        closeWizard();
      });
      manageKeysBtn?.addEventListener('click', () => {
        showToast('Navigating to API key management…');
        closeWizard();
      });

      // Initialization
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        openWizard(); // auto-open on first login
      });

      // Keyboard escape to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
          showToast('Setup skipped. Trading will not be enabled until keys are connected.', 'danger');
          closeWizard();
        }
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
      

<div className="min-h-screen flex items-center justify-center p-4">
<button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 active:bg-emerald-500/20 text-emerald-300 px-4 h-11 border border-emerald-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" id="openWizardBtn">
<i className="h-4 w-4" data-lucide="key-round"></i>
        Connect exchange keys (demo)
      </button>
</div>

<div className="fixed inset-0 z-[60] hidden" id="wizardOverlay">
<div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"></div>

<div className="relative z-10 mx-auto w-full max-w-md sm:max-w-lg px-4 sm:px-6">
<div className="mt-8 sm:mt-16"></div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur shadow-2xl">

<button aria-label="Close" className="absolute right-3 top-3 sm:right-4 sm:top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-neutral-800/70 hover:bg-neutral-800 active:bg-neutral-800/80 text-neutral-400 hover:text-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" id="closeWizardBtn">
<i className="h-4 w-4" data-lucide="x"></i>
</button>

<div className="px-4 py-4 sm:px-6 sm:py-6 border-b border-white/10">
<div className="flex items-center gap-2 text-sm text-neutral-400">
<i className="h-4 w-4 text-emerald-300" data-lucide="sparkles"></i>
              First login setup
            </div>
<h2 className="mt-2 text-[20px] sm:text-[22px] leading-tight tracking-tight text-neutral-100">
              Connect your exchange API keys
            </h2>

<div className="mt-4 grid grid-cols-5 gap-2">
<button className="group flex items-center justify-center h-9 rounded-lg text-sm border border-white/10 bg-neutral-800/60 hover:bg-neutral-800 transition-colors" data-step-tab="1">
<span className="text-neutral-400 group-[.active]:text-emerald-300">1</span>
</button>
<button className="group flex items-center justify-center h-9 rounded-lg text-sm border border-white/10 bg-neutral-800/60 hover:bg-neutral-800 transition-colors" data-step-tab="2">
<span className="text-neutral-400 group-[.active]:text-emerald-300">2</span>
</button>
<button className="group flex items-center justify-center h-9 rounded-lg text-sm border border-white/10 bg-neutral-800/60 hover:bg-neutral-800 transition-colors" data-step-tab="3">
<span className="text-neutral-400 group-[.active]:text-emerald-300">3</span>
</button>
<button className="group flex items-center justify-center h-9 rounded-lg text-sm border border-white/10 bg-neutral-800/60 hover:bg-neutral-800 transition-colors" data-step-tab="4">
<span className="text-neutral-400 group-[.active]:text-emerald-300">4</span>
</button>
<button className="group flex items-center justify-center h-9 rounded-lg text-sm border border-white/10 bg-neutral-800/60 hover:bg-neutral-800 transition-colors" data-step-tab="5">
<span className="text-neutral-400 group-[.active]:text-emerald-300">5</span>
</button>
</div>
</div>

<div className="relative min-h-[320px] sm:min-h-[360px]">

<section className="px-4 py-6 sm:py-10 transition-all duration-150" data-step="1">
<div className="space-y-4">
<p className="text-neutral-400">
                  We use exchange API keys to:
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 border border-white/10">
<i className="h-4 w-4 text-emerald-300" data-lucide="play-square"></i>
</span>
<div className="text-sm">
<div className="text-neutral-200 tracking-tight">Enable trading</div>
<div className="text-neutral-500">Place and manage orders from one interface.</div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 border border-white/10">
<i className="h-4 w-4 text-emerald-300" data-lucide="bot"></i>
</span>
<div className="text-sm">
<div className="text-neutral-200 tracking-tight">Run automated bots</div>
<div className="text-neutral-500">Deploy strategies and rebalance hands-free.</div>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 border border-white/10">
<i className="h-4 w-4 text-emerald-300" data-lucide="line-chart"></i>
</span>
<div className="text-sm">
<div className="text-neutral-200 tracking-tight">Track PnL in real time</div>
<div className="text-neutral-500">Positions, fills, and performance at a glance.</div>
</div>
</li>
</ul>
<div className="mt-3 rounded-lg border border-white/10 bg-neutral-900 p-3">
<div className="flex items-start gap-3">
<i className="h-4 w-4 text-emerald-300 mt-0.5" data-lucide="shield-check"></i>
<div className="text-sm leading-5">
<div className="text-neutral-200">Security & control</div>
<ul className="list-disc pl-5 text-neutral-500 space-y-1 mt-1">
<li>Permissions: Read + Trade only — never Withdraw.</li>
<li>Keys are encrypted at rest and in transit.</li>
<li>Revoke access anytime from your exchange or settings.</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 py-6 sm:py-10 absolute inset-0 opacity-0 pointer-events-none translate-x-4 transition-all duration-150" data-step="2">
<div className="space-y-4">
<p className="text-neutral-400">Select your exchange:</p>
<div className="grid grid-cols-1 gap-3">

<button className="exchange-card group w-full text-left rounded-lg border border-white/10 bg-neutral-900 hover:bg-neutral-800/80 active:bg-neutral-800/80 transition-colors p-4 focus:outline-none focus:ring-2 focus:ring-white/20" data-exchange="Hyperliquid">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center tracking-tight text-neutral-200 text-sm font-semibold">H</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-neutral-100 tracking-tight">Hyperliquid</span>
<span className="hidden selected-dot h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
</div>
<div className="text-xs text-neutral-500">Perp DEX • API Key + Secret</div>
</div>
<div className="flex items-center gap-2">
<span className="hidden selected-badge text-emerald-300 text-xs">Selected</span>
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-200" data-lucide="chevron-right"></i>
</div>
</div>
</button>
<button className="exchange-card group w-full text-left rounded-lg border border-white/10 bg-neutral-900 hover:bg-neutral-800/80 active:bg-neutral-800/80 transition-colors p-4 focus:outline-none focus:ring-2 focus:ring-white/20" data-exchange="dYdX">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center tracking-tight text-neutral-200 text-sm font-semibold">D</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-neutral-100 tracking-tight">dYdX</span>
<span className="hidden selected-dot h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
</div>
<div className="text-xs text-neutral-500">Perp DEX • Key + Secret + Passphrase</div>
</div>
<div className="flex items-center gap-2">
<span className="hidden selected-badge text-emerald-300 text-xs">Selected</span>
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-200" data-lucide="chevron-right"></i>
</div>
</div>
</button>
<button className="exchange-card group w-full text-left rounded-lg border border-white/10 bg-neutral-900 hover:bg-neutral-800/80 active:bg-neutral-800/80 transition-colors p-4 focus:outline-none focus:ring-2 focus:ring-white/20" data-exchange="Paradex">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center tracking-tight text-neutral-200 text-sm font-semibold">P</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-neutral-100 tracking-tight">Paradex</span>
<span className="hidden selected-dot h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
</div>
<div className="text-xs text-neutral-500">Perp DEX • Key + Secret (+ Passphrase)</div>
</div>
<div className="flex items-center gap-2">
<span className="hidden selected-badge text-emerald-300 text-xs">Selected</span>
<i className="h-4 w-4 text-neutral-400 group-hover:text-neutral-200" data-lucide="chevron-right"></i>
</div>
</div>
</button>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900 p-3">
<div className="flex items-start gap-3">
<i className="h-4 w-4 text-neutral-400 mt-0.5" data-lucide="info"></i>
<p className="text-sm text-neutral-500">You can connect more exchanges later in Settings → API Keys.</p>
</div>
</div>
</div>
</section>

<section className="px-4 py-6 sm:py-10 absolute inset-0 opacity-0 pointer-events-none translate-x-4 transition-all duration-150" data-step="3">
<div className="space-y-5">
<div className="flex items-center gap-2 text-sm text-neutral-400">
<i className="h-4 w-4" data-lucide="database"></i>
<span id="selectedExchangeLabel">Selected exchange</span>
</div>
<div className="space-y-4">
<label className="block">
<span className="block text-sm text-neutral-300 tracking-tight">API Key</span>
<input autocomplete="off" className="mt-2 w-full h-11 rounded-lg bg-neutral-800 text-neutral-100 placeholder-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 px-3" id="apiKey" placeholder="Enter API Key" spellcheck="false" type="text" />
</label>
<label className="block">
<span className="block text-sm text-neutral-300 tracking-tight">API Secret</span>
<input autocomplete="off" className="mt-2 w-full h-11 rounded-lg bg-neutral-800 text-neutral-100 placeholder-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 px-3" id="apiSecret" placeholder="Enter API Secret" type="password" />
</label>
<label className="hidden block" id="passphraseWrapper">
<span className="block text-sm text-neutral-300 tracking-tight">API Passphrase</span>
<input autocomplete="off" className="mt-2 w-full h-11 rounded-lg bg-neutral-800 text-neutral-100 placeholder-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 px-3" id="apiPassphrase" placeholder="Enter Passphrase (if required)" type="password" />
</label>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-800/70 hover:bg-neutral-800 active:bg-neutral-800/80 text-neutral-200 px-3.5 h-11 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" id="testBtn">
<i className="h-4 w-4" data-lucide="plug"></i>
                    Test connection
                  </button>
<div className="text-sm" id="testStatus"></div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900 p-3">
<div className="flex items-start gap-3">
<i className="h-4 w-4 text-neutral-400 mt-0.5" data-lucide="shield"></i>
<p className="text-sm text-neutral-500">We store your keys encrypted. You can revoke them anytime; Withdraw permission is never requested.</p>
</div>
</div>
</div>
</section>

<section className="px-4 py-6 sm:py-10 absolute inset-0 opacity-0 pointer-events-none translate-x-4 transition-all duration-150" data-step="4">
<div className="space-y-5">
<div className="rounded-lg border border-white/10 bg-neutral-900 p-4">
<div className="flex items-center justify-between">
<div className="text-sm">
<div className="text-neutral-400">Exchange</div>
<div className="text-neutral-100 tracking-tight mt-0.5" id="reviewExchange">—</div>
</div>
<div className="text-sm text-neutral-500">
<span className="text-neutral-400">Key</span>
<span className="ml-2 text-neutral-200 font-medium tracking-tight" id="reviewKey">••••</span>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="text-xs text-neutral-400">Permissions:</span>
<span className="inline-flex items-center gap-1 text-xs text-emerald-300 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-1">
<i className="h-3.5 w-3.5" data-lucide="check"></i> Read
                    </span>
<span className="inline-flex items-center gap-1 text-xs text-emerald-300 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-1">
<i className="h-3.5 w-3.5" data-lucide="check"></i> Trade
                    </span>
<span className="inline-flex items-center gap-1 text-xs text-rose-300 rounded-md bg-rose-500/10 border border-rose-500/20 px-2 py-1">
<i className="h-3.5 w-3.5" data-lucide="x"></i> Withdraw disabled
                    </span>
</div>
</div>

<div>
<button aria-checked="false" className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-neutral-900 hover:bg-neutral-800/80 active:bg-neutral-800/80 transition-colors px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-white/20" id="confirmCk" role="checkbox">
<span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-[6px] bg-neutral-800 border border-white/10 text-transparent">
<i className="h-3.5 w-3.5" data-lucide="check"></i>
</span>
<span className="text-sm text-neutral-300">
                      I understand keys will be used for Read + Trade only and I can revoke access at any time.
                    </span>
</button>
<input className="hidden" id="confirmInput" type="checkbox" />
</div>
<p className="text-xs text-neutral-500">By continuing, you agree to securely store your credentials and keep them confidential.</p>
</div>
</section>

<section className="px-4 py-6 sm:py-10 absolute inset-0 opacity-0 pointer-events-none translate-x-4 transition-all duration-150" data-step="5">
<div className="flex flex-col items-center text-center gap-4">
<div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<i className="h-6 w-6 text-emerald-300" data-lucide="badge-check"></i>
</div>
<h3 className="text-[20px] leading-tight tracking-tight text-neutral-100">Exchange connected</h3>
<p className="text-neutral-400 max-w-sm">
                  You’re all set. Start trading now or set up your first automated bot.
                </p>
<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-sm">
<button className="h-11 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 active:bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" id="startTradingBtn">
                    Start trading
                  </button>
<button className="h-11 rounded-lg bg-neutral-800/70 hover:bg-neutral-800 active:bg-neutral-800/80 text-neutral-200 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" id="setupBotBtn">
                    Set up first bot
                  </button>
</div>
<button className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg px-2 py-1" id="manageKeysBtn">
<i className="h-4 w-4" data-lucide="key-square"></i>
                  Manage keys
                </button>
</div>
</section>

<div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24">
<div className="h-24 w-full bg-gradient-to-t from-neutral-900/90 to-neutral-900/0"></div>
</div>
<div className="sticky bottom-0 border-t border-white/10 bg-neutral-900/70 backdrop-blur px-4 py-4 sm:px-6">
<div className="flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-800/70 hover:bg-neutral-800 active:bg-neutral-800/80 text-neutral-300 px-3.5 h-11 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" id="skipBtn">
<i className="h-4 w-4" data-lucide="slash"></i>
                  Skip for now
                </button>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-800/70 hover:bg-neutral-800 active:bg-neutral-800/80 text-neutral-200 px-3.5 h-11 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" id="backBtn">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
                    Back
                  </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 active:bg-emerald-500/20 text-emerald-300 px-4 h-11 border border-emerald-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20" id="nextBtn">
                    Next
                    <i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="mb-8"></div>
</div>
</div>

<div className="fixed inset-x-0 bottom-4 sm:bottom-6 z-[70] flex justify-center px-4 pointer-events-none" id="toastHost"></div>


    </>
  );
}
