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



      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) lucide.createIcons();
      });

      // Utilities
      const $ = (sel) => document.querySelector(sel);
      const $$ = (sel) => Array.from(document.querySelectorAll(sel));
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Elements
      const urlInput = $('#urlInput');
      const checkBtn = $('#checkBtn');
      const clearBtn = $('#clearBtn');
      const logPanel = $('#logPanel');
      const resultWrap = $('#resultWrap');
      const resultCard = $('#resultCard');
      const verdictText = $('#verdictText');
      const confidenceText = $('#confidenceText');
      const riskText = $('#riskText');
      const resultTitle = $('#resultTitle');
      const statusDot = $('#statusDot');
      const explainWrap = $('#explainWrap');
      const expandExplainBtn = $('#expandExplainBtn');
      const factorsList = $('#factorsList');
      const historyPanel = $('#historyPanel');
      const toggleHistoryBtn = $('#toggleHistoryBtn');
      const validHint = $('#validHint');
      const invalidHint = $('#invalidHint');
      const copyLogBtn = $('#copyLogBtn');
      const exportJsonBtn = $('#exportJsonBtn');
      const exportCsvBtn = $('#exportCsvBtn');
      const copyUrlBtn = $('#copyUrlBtn');
      const toastContainer = $('#toastContainer');
      const tooltipEl = $('#tooltip');
      const statusText = $('#statusText');

      const HISTORY_KEY = 'phishguard-history';
      let currentResult = null;

      // Input validation
      function isValidUrl(v) {
        return /^https?:\/\/.+/i.test(v.trim());
      }

      function showHints(valid) {
        if (!urlInput.value.trim()) {
          validHint.classList.add('hidden');
          invalidHint.classList.add('hidden');
          return;
        }
        if (valid) {
          validHint.classList.remove('hidden');
          invalidHint.classList.add('hidden');
        } else {
          invalidHint.classList.remove('hidden');
          validHint.classList.add('hidden');
        }
      }

      urlInput.addEventListener('input', () => {
        showHints(isValidUrl(urlInput.value));
      });

      // Toasts
      function toast(content, variant = 'default', duration = 2200) {
        const node = document.createElement('div');
        node.className = 'toast glass border border-white/10 rounded-xl px-3.5 py-3 text-sm';
        node.setAttribute('role', 'alert');
        node.innerHTML = `
          <div class="flex items-center gap-2">
            <div class="${variant === 'error' ? 'text-red-300' : 'text-emerald-300'}">
              ${variant === 'error'
                ? '<svg data-lucide="triangle-alert" width="18" height="18" stroke-width="1.5"></svg>'
                : '<svg data-lucide="check-circle-2" width="18" height="18" stroke-width="1.5"></svg>'}
            </div>
            <div class="text-white/85">${content}</div>
          </div>`;
        toastContainer.appendChild(node);
        if (window.lucide && lucide.createIcons) lucide.createIcons({attrs: {class: 'inline'}});

        const t = setTimeout(() => node.remove(), duration);
        node.addEventListener('click', () => { clearTimeout(t); node.remove(); });
      }

      function glitchWarn() {
        urlInput.classList.remove('shake');
        // Force reflow to restart animation
        void urlInput.offsetWidth;
        urlInput.classList.add('shake');
        urlInput.classList.add('error-glow');
        setTimeout(() => urlInput.classList.remove('error-glow'), 900);
        toast('⚠ Please add a URL!', 'error', 2000);
      }

      // Console log typing
      function clearLog() {
        logPanel.innerHTML = '';
      }
      function appendLogLine(text, speed = 16) {
        return new Promise((resolve) => {
          const line = document.createElement('div');
          line.style.color = 'rgba(255,255,255,0.85)';
          line.style.fontFamily = 'var(--mono)';
          line.className = 'break-words';
          logPanel.appendChild(line);

          if (prefersReduced) {
            line.textContent = text;
            logPanel.scrollTop = logPanel.scrollHeight;
            return resolve();
          }

          let i = 0;
          const id = setInterval(() => {
            line.textContent = text.slice(0, i++);
            logPanel.scrollTop = logPanel.scrollHeight;
            if (i > text.length) {
              clearInterval(id);
              resolve();
            }
          }, speed);
        });
      }

      // Feature extraction (simple heuristics)
      function analyzeUrl(u) {
        const original = u;
        try {
          const parsed = new URL(u);
          const host = parsed.hostname;
          const path = parsed.pathname + parsed.search + parsed.hash;

          const factors = [];
          const add = (label, weight, hint) => factors.push({ label, weight, hint });

          // Heuristics
          if (u.length > 75) add('Unusually long URL', 8, 'Long URLs can hide malicious parameters.');
          if ((u.match(/@/g) || []).length) add('Contains "@" symbol', 7, 'May obscure real destination.');
          if (/^(\d{1,3}\.){3}\d{1,3}$/.test(host)) add('Uses raw IP address', 9, 'Legitimate sites rarely use bare IPs.');
          const hyphens = (host.match(/-/g) || []).length;
          if (hyphens >= 3) add('Many hyphens in domain', 5, 'Typosquatting often uses hyphens.');
          if (/xn--/i.test(host)) add('Punycode domain', 6, 'Can imitate popular brands.');
          const depth = (parsed.pathname.split('/').filter(Boolean) || []).length;
          if (depth >= 4) add('Deep path', 3, 'Deeper paths can mask intent.');
          const suspicious = /(login|verify|update|secure|confirm|account|bank|paypal|appleid|amazon|gift|free|win|bonus)/i;
          if (suspicious.test(u)) add('Suspicious keyword', 8, 'Common in phishing lures.');
          if (/(redirect|token|sess|password|pass|auth)/i.test(u)) add('Sensitive parameter', 6, 'Potential credential capture.');
          if (/:\d{2,5}$/.test(host)) add('Non-standard port', 4, 'Avoid strange ports.');
          if (parsed.protocol !== 'https:') add('Not using HTTPS', 9, 'Transport not encrypted.');
          // TLD heuristic
          if (/\.(zip|mov|ru|cn|tk|gq|ml)$/i.test(host)) add('High-risk TLD', 7, 'Historically abused extensions.');

          // Score: cap 100
          let baseRisk = Math.min(100, factors.reduce((a, f) => a + f.weight, 0));
          // Small normalization
          baseRisk = Math.round(Math.min(100, (baseRisk / 50) * 60 + (factors.length * 4)));

          // Randomness to simulate model
          const rand = Math.floor(Math.random() * 8) - 4; // -4..+3
          const riskScore = Math.max(1, Math.min(100, baseRisk + rand));

          // Verdict probability weighted by risk
          const maliciousProb = Math.min(0.05 + riskScore / 120, 0.92);
          const isMalicious = Math.random() < maliciousProb;

          const confidence = isMalicious
            ? Math.max(60, Math.min(99, 70 + Math.round(riskScore / 2) + Math.floor(Math.random() * 10)))
            : Math.max(70, Math.min(99, 90 - Math.floor(riskScore / 3) + Math.floor(Math.random() * 6)));

          return {
            url: original,
            verdict: isMalicious ? 'Phishing suspected' : 'Likely safe',
            malicious: isMalicious,
            confidence,
            riskScore,
            factors
          };
        } catch {
          return null;
        }
      }

      // Result rendering
      function renderResult(res) {
        if (!res) return;
        resultWrap.classList.remove('hidden');
        resultCard.classList.remove('safe-glow', 'mal-glitch');

        verdictText.textContent = res.verdict;
        confidenceText.textContent = `${res.confidence}%`;
        riskText.textContent = `${res.riskScore}/100`;

        // Style by verdict
        if (res.malicious) {
          resultTitle.textContent = 'Result — Malicious indicators';
          resultCard.style.borderColor = 'rgba(255,51,102,0.35)';
          resultCard.classList.add('mal-glitch');
          statusDot.style.background = 'var(--red)';
          statusDot.style.boxShadow = '0 0 16px rgba(255,51,102,0.45)';
          verdictText.style.color = 'rgba(255,119,146,0.95)';
        } else {
          resultTitle.textContent = 'Result — No phishing detected';
          resultCard.style.borderColor = 'rgba(0,255,136,0.35)';
          resultCard.classList.add('safe-glow');
          statusDot.style.background = 'var(--green)';
          statusDot.style.boxShadow = '0 0 16px rgba(0,255,136,0.45)';
          verdictText.style.color = 'rgba(148,255,210,0.95)';
        }

        // Explainability
        factorsList.innerHTML = '';
        res.factors.forEach((f, idx) => {
          const li = document.createElement('li');
          li.className = 'flex items-start gap-2 rounded-lg bg-white/5 border border-white/10 p-3 relative';
          li.setAttribute('data-tooltip', f.hint);
          li.innerHTML = `
            <div class="pt-0.5 ${res.malicious ? 'text-red-300' : 'text-emerald-300'}">
              <svg data-lucide="${res.malicious ? 'alert-octagon' : 'shield-check'}" width="16" height="16" stroke-width="1.5"></svg>
            </div>
            <div class="flex-1">
              <div class="text-[13px] tracking-tight" style="font-weight:600;">${f.label}</div>
              <div class="text-xs text-white/60 mt-0.5">Weight: ${f.weight}</div>
            </div>
            <div class="text-white/50">
              <svg data-lucide="info" width="16" height="16" stroke-width="1.5"></svg>
            </div>
          `;
          factorsList.appendChild(li);
        });
        if (window.lucide && lucide.createIcons) lucide.createIcons();

        explainWrap.classList.remove('hidden');
        currentResult = res;
      }

      // Tooltip handlers
      document.addEventListener('mouseover', (e) => {
        const t = e.target.closest('[data-tooltip]');
        if (!t) {
          tooltipEl.style.display = 'none';
          tooltipEl.setAttribute('data-show', 'false');
          return;
        }
        tooltipEl.textContent = t.getAttribute('data-tooltip') || '';
        const rect = t.getBoundingClientRect();
        tooltipEl.style.left = (rect.left + rect.width / 2) + 'px';
        tooltipEl.style.top = (rect.bottom + window.scrollY + 8) + 'px';
        tooltipEl.style.transform = 'translateX(-50%)';
        tooltipEl.style.display = 'block';
        requestAnimationFrame(() => tooltipEl.setAttribute('data-show', 'true'));
      });
      document.addEventListener('mouseout', (e) => {
        if (e.target.closest('[data-tooltip]')) {
          tooltipEl.setAttribute('data-show', 'false');
          setTimeout(() => (tooltipEl.style.display = 'none'), 120);
        }
      });

      // History
      function loadHistory() {
        try {
          const raw = localStorage.getItem(HISTORY_KEY);
          return raw ? JSON.parse(raw) : [];
        } catch { return []; }
      }
      function saveHistory(items) {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(0, 5)));
      }
      function pushHistory(item) {
        const list = loadHistory();
        const filtered = list.filter(i => i.url !== item.url);
        filtered.unshift(item);
        saveHistory(filtered);
        renderHistory();
      }
      function renderHistory() {
        const list = loadHistory();
        historyPanel.innerHTML = '';
        if (!list.length) {
          historyPanel.innerHTML = '<div class="text-white/40 text-sm">No scans yet.</div>';
          return;
        }
        list.forEach((it) => {
          const row = document.createElement('button');
          row.className = 'w-full text-left rounded-lg bg-white/5 border border-white/10 px-3.5 py-3 hover:bg-white/[0.08] transition flex items-center gap-3';
          row.innerHTML = `
            <div class="h-2.5 w-2.5 rounded-full ${it.malicious ? 'bg-red-400' : 'bg-emerald-400'} shadow-[0_0_12px_rgba(255,255,255,0.15)]"></div>
            <div class="flex-1 min-w-0">
              <div class="text-[13px] truncate" style="font-weight:600;">${it.url}</div>
              <div class="text-[11px] text-white/50 mt-0.5">${it.verdict} • ${it.confidence}% • ${new Date(it.time).toLocaleTimeString()}</div>
            </div>
            <div class="text-white/60">
              <svg data-lucide="rotate-cw" width="16" height="16" stroke-width="1.5"></svg>
            </div>
          `;
          row.addEventListener('click', () => {
            urlInput.value = it.url;
            showHints(isValidUrl(it.url));
            startScan();
          });
          historyPanel.appendChild(row);
        });
        if (window.lucide && lucide.createIcons) lucide.createIcons();
      }

      // Export
      function exportJSON(res) {
        const data = JSON.stringify(res, null, 2);
        const blob = new Blob([data], {type: 'application/json'});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'phishguard_result.json';
        a.click();
        URL.revokeObjectURL(a.href);
        toast('Exported JSON', 'ok');
      }
      function exportCSV(res) {
        const headers = ['url','verdict','malicious','confidence','riskScore','factors'];
        const factors = (res.factors || []).map(f => f.label.replace(/"/g,'""')).join('; ');
        const row = [
          `"${res.url.replace(/"/g,'""')}"`,
          `"${res.verdict}"`,
          res.malicious,
          res.confidence,
          res.riskScore,
          `"${factors}"`
        ].join(',');
        const csv = headers.join(',') + '\n' + row + '\n';
        const blob = new Blob([csv], {type: 'text/csv'});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'phishguard_result.csv';
        a.click();
        URL.revokeObjectURL(a.href);
        toast('Exported CSV', 'ok');
      }

      // Copy helpers
      async function copyText(text) {
        try {
          await navigator.clipboard.writeText(text);
          toast('Copied to clipboard');
        } catch {
          toast('Copy failed', 'error');
        }
      }

      // Scan flow
      let scanning = false;

      async function startScan() {
        const val = urlInput.value.trim();
        if (!val) { glitchWarn(); urlInput.focus(); return; }
        if (!isValidUrl(val)) { glitchWarn(); urlInput.focus(); return; }

        // Prepare UI
        scanning = true;
        checkBtn.disabled = true;
        checkBtn.classList.add('shimmer');
        checkBtn.style.opacity = '0.95';
        clearLog();

        // Simulated logs
        const lines = [
          '→ Analyzing URL…',
          '→ Extracting lexical features…',
          '→ Checking domain reputation…',
          '→ Evaluating SSL and certificate chain…',
          '→ Inspecting redirects and query parameters…',
          '→ Computing risk score with ensemble model…'
        ];

        for (const l of lines) {
          await appendLogLine(l, 12);
          if (!prefersReduced) await new Promise(r => setTimeout(r, 200));
        }

        // Fake request delay
        if (!prefersReduced) await new Promise(r => setTimeout(r, 420));

        const res = analyzeUrl(val);
        if (!res) {
          await appendLogLine('✖ Invalid URL — aborting', 12);
          scanning = false;
          checkBtn.disabled = false;
          checkBtn.classList.remove('shimmer');
          toast('Invalid URL format', 'error');
          return;
        }

        await appendLogLine('✓ Scan complete.', 12);

        // Render result
        renderResult(res);
        currentResult = res;
        // Save history
        pushHistory({ ...res, time: Date.now() });

        scanning = false;
        checkBtn.disabled = false;
        checkBtn.classList.remove('shimmer');
      }

      // Events
      checkBtn.addEventListener('click', startScan);
      clearBtn.addEventListener('click', () => {
        urlInput.value = '';
        showHints(false);
        logPanel.innerHTML = '<div class="text-white/40">Awaiting input…</div>';
        resultWrap.classList.add('hidden');
        currentResult = null;
      });
      expandExplainBtn.addEventListener('click', () => {
        explainWrap.classList.toggle('hidden');
      });
      toggleHistoryBtn?.addEventListener('click', () => {
        historyPanel.classList.toggle('hidden');
      });
      copyLogBtn.addEventListener('click', async () => {
        const text = $$('#logPanel > *').map(el => el.textContent).join('\n');
        await copyText(text || '');
      });
      exportJsonBtn.addEventListener('click', () => {
        if (!currentResult) return toast('No result to export', 'error');
        exportJSON(currentResult);
      });
      exportCsvBtn.addEventListener('click', () => {
        if (!currentResult) return toast('No result to export', 'error');
        exportCSV(currentResult);
      });
      copyUrlBtn.addEventListener('click', () => {
        if (!currentResult) return toast('Nothing to copy', 'error');
        copyText(currentResult.url);
      });

      // Keyboard accessibility
      urlInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          startScan();
        }
      });

      // Initial
      function updateStatusTime() {
        const now = new Date();
        statusText.textContent = `Online — Last update: ${now.toLocaleTimeString()}`;
      }
      setInterval(updateStatusTime, 1000);
      updateStatusTime();
      renderHistory();

      // If reduced motion, ensure title shows fully
      window.addEventListener('load', () => {
        if (prefersReduced) {
          const t = document.getElementById('titleText');
          if (t) { t.classList.remove('typing'); t.style.border = 'none'; }
        }
      });

      // Example: how to wire to backend later
      // fetch(`/predict?url=${encodeURIComponent(url)}`).then(r => r.json()).then(setResult)
    
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
      

<div aria-hidden="true" className="matrix-rain"></div>

<header className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="glass inner-shadow rounded-xl p-2.5">
<div className="relative h-8 w-8 rounded-lg" style={{background: 'radial-gradient(120% 120% at 20% 20%, rgba(0, 255, 136, 0.35), rgba(0, 229, 255, 0.35) 45%, rgba(255, 255, 255, 0.06) 58%)', boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 0 22px rgba(0,229,255,0.18)'}}></div>
</div>
<div className="flex flex-col">
<span className="text-xs text-white/50" style={{fontWeight: '400', letterSpacing: '.08em'}}>PHISHGUARD</span>
<div className="grad-title text-2xl sm:text-3xl tracking-tight" style={{fontWeight: '600'}}>
<span className="typing" id="titleText">Phishing URL Detection</span>
</div>
</div>
</div>
<div className="hidden sm:flex items-center gap-3 glass rounded-full px-3 py-1.5">
<span className="relative flex h-2.5 w-2.5">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
</span>
<span className="text-xs text-white/70" style={{fontWeight: '500'}}>Online</span>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-6 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-6">

<section className="glass inner-shadow rounded-2xl p-5 sm:p-6 lg:p-8">

<div className="flex flex-col md:flex-row gap-3 md:gap-4">
<div className="relative flex-1">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
<svg className="opacity-80" data-lucide="link" height="20" strokeWidth="1.5" width="20"></svg>
</div>
<input aria-label="URL to scan" autocomplete="off" className="w-full rounded-xl bg-white/5 border border-white/10 pl-10 pr-10 py-3.5 text-[15px] placeholder-white/35 focus:outline-none neon-focus" id="urlInput" inputmode="url" placeholder="https://example.com/login?session=..." style={{fontWeight: '400', letterSpacing: '0.01em'}} type="url"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 hidden" id="validHint" style={{fontWeight: '500'}}>Valid</div>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs px-2 py-0.5 rounded-full bg-red-500/10 border border-red-400/30 text-red-300 hidden" id="invalidHint" style={{fontWeight: '500'}}>http(s) required</div>
</div>
<div className="flex gap-2">
<button className="btn rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-5 sm:px-6 py-3.5 text-sm sm:text-[15px] font-semibold tracking-tight" id="checkBtn" style={{color: '#07120e'}}>
<span className="inline-flex items-center gap-2">
<svg data-lucide="search" height="18" strokeWidth="1.5" width="18"></svg>
                Check URL
              </span>
</button>
<button className="btn rounded-xl bg-white/5 border border-white/10 text-white/80 px-4 py-3.5 text-sm sm:text-[15px]" id="clearBtn" style={{fontWeight: '500'}}>
<span className="inline-flex items-center gap-2">
<svg data-lucide="eraser" height="18" strokeWidth="1.5" width="18"></svg>
                Clear
              </span>
</button>
</div>
</div>

<div className="mt-5 sm:mt-6">
<div className="flex items-center justify-between">
<h2 className="text-white/90 tracking-tight" style={{fontWeight: '600', fontSize: '18px'}}>Scan Log</h2>
<div className="flex items-center gap-2">
<button className="btn rounded-lg bg-white/5 border border-white/10 text-white/75 px-3 py-2 text-xs" id="copyLogBtn" style={{fontWeight: '500'}}>
<span className="inline-flex items-center gap-1.5">
<svg data-lucide="clipboard" height="16" strokeWidth="1.5" width="16"></svg> Copy
                </span>
</button>
<button className="btn rounded-lg bg-white/5 border border-white/10 text-white/75 px-3 py-2 text-xs" id="exportJsonBtn" style={{fontWeight: '500'}}>
<span className="inline-flex items-center gap-1.5">
<svg data-lucide="code-xml" height="16" strokeWidth="1.5" width="16"></svg> JSON
                </span>
</button>
<button className="btn rounded-lg bg-white/5 border border-white/10 text-white/75 px-3 py-2 text-xs" id="exportCsvBtn" style={{fontWeight: '500'}}>
<span className="inline-flex items-center gap-1.5">
<svg data-lucide="table" height="16" strokeWidth="1.5" width="16"></svg> CSV
                </span>
</button>
</div>
</div>
<div aria-live="polite" className="mt-3 rounded-xl bg-black/40 border border-white/10 p-3 sm:p-4 thin-scroll overflow-y-auto max-h-56" id="logPanel" role="status" style={{fontFamily: 'var(--mono)', fontSize: '13px', lineHeight: '1.45'}}>
<div className="text-white/40">Awaiting input…</div>
</div>
</div>

<div className="mt-6 hidden" id="resultWrap">
<div className="rounded-2xl p-5 sm:p-6 border glass" id="resultCard">
<div className="flex flex-col gap-4 sm:gap-3">
<div className="flex items-center justify-between flex-wrap gap-3">
<div className="flex items-center gap-3">
<div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(0,255,136,0.45)]" id="statusDot"></div>
<h3 className="tracking-tight text-lg sm:text-xl" id="resultTitle" style={{fontWeight: '600'}}>Result</h3>
</div>
<div className="flex items-center gap-2">
<button className="btn rounded-lg bg-white/5 border border-white/10 text-white/75 px-3 py-2 text-xs" id="copyUrlBtn" style={{fontWeight: '500'}}>
<span className="inline-flex items-center gap-1.5">
<svg data-lucide="copy" height="16" strokeWidth="1.5" width="16"></svg> Copy URL
                    </span>
</button>
<button className="btn rounded-lg bg-white/5 border border-white/10 text-white/75 px-3 py-2 text-xs" id="expandExplainBtn" style={{fontWeight: '500'}}>
<span className="inline-flex items-center gap-1.5">
<svg data-lucide="list-tree" height="16" strokeWidth="1.5" width="16"></svg> Explain
                    </span>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="text-xs text-white/60" style={{fontWeight: '500'}}>Verdict</div>
<div className="text-base mt-1 tracking-tight" id="verdictText" style={{fontWeight: '600'}}>—</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="text-xs text-white/60" style={{fontWeight: '500'}}>Confidence</div>
<div className="text-base mt-1 tracking-tight" id="confidenceText" style={{fontWeight: '600'}}>—</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="text-xs text-white/60" style={{fontWeight: '500'}}>Risk Score</div>
<div className="text-base mt-1 tracking-tight" id="riskText" style={{fontWeight: '600'}}>—</div>
</div>
</div>

<div className="hidden" id="explainWrap">
<div className="mt-2 rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-white/80 tracking-tight" style={{fontWeight: '600'}}>Risk Factors</div>
<div className="text-xs text-white/50">hover indicators</div>
</div>
<ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 stagger" id="factorsList"></ul>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="lg:sticky lg:top-6 space-y-4">
<div className="glass inner-shadow rounded-2xl p-5">
<div className="flex items-center justify-between">
<h3 className="text-white/90 tracking-tight" style={{fontWeight: '600', fontSize: '18px'}}>History</h3>
<button className="btn rounded-lg bg-white/5 border border-white/10 text-white/75 px-3 py-2 text-xs lg:hidden" id="toggleHistoryBtn" style={{fontWeight: '500'}}>
<span className="inline-flex items-center gap-1.5">
<svg data-lucide="panel-right-open" height="16" strokeWidth="1.5" width="16"></svg> Toggle
              </span>
</button>
</div>
<div className="mt-3 space-y-2 max-h-[360px] overflow-y-auto thin-scroll" id="historyPanel">
<div className="text-white/40 text-sm">No scans yet.</div>
</div>
</div>
<div className="glass inner-shadow rounded-2xl p-5">
<div className="flex items-center gap-2">
<span className="relative flex h-2.5 w-2.5">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
</span>
<div className="text-xs text-white/70" id="statusText" style={{fontWeight: '500'}}>Online — Last update: just now</div>
</div>
<p className="text-xs text-white/50 mt-2">Client-only demo. Replace the stubbed scan with your API later.</p>
</div>
</aside>
</main>

<footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-10 mb-10">
<div className="glass inner-shadow rounded-xl p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-lg" style={{background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.35), rgba(0, 229, 255, 0.35))', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)'}}></div>
<div className="text-sm text-white/80" style={{fontWeight: '500'}}>PhishGuard — URL Scanner</div>
</div>
<div className="text-xs text-white/50">Press Enter to scan • Accessible toasts and status live region enabled</div>
</div>
</footer>

<div className="fixed top-4 right-4 z-50 space-y-2" id="toastContainer"></div>

<div className="tooltip glass rounded-lg px-3 py-2 text-xs text-white/80 border border-white/10" id="tooltip" role="tooltip" style={{backdropFilter: 'blur(12px)', display: 'none'}}></div>





    </>
  );
}
