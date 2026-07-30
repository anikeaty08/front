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



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Demo Data
      const runs = [
        {
          id: "llama-sft-043",
          name: "llama-3-sft-043",
          status: "running",
          tags: ["sft", "bf16"],
          step: 3820,
          totalSteps: 12000,
          loss: 1.72,
          acc: 0.63,
          lr: 2.5e-5,
          updated: "just now",
          project: "ft-llama-instruct",
          mini: [2.6, 2.4, 2.2, 2.0, 2.05, 1.9, 1.85, 1.78, 1.74],
        },
        {
          id: "mistral-ft-018",
          name: "mistral-ft-018",
          status: "running",
          tags: ["sft"],
          step: 9100,
          totalSteps: 10000,
          loss: 1.12,
          acc: 0.71,
          lr: 1e-5,
          updated: "2 min ago",
          project: "ft-llama-instruct",
          mini: [1.6, 1.55, 1.5, 1.48, 1.45, 1.42, 1.39, 1.36, 1.33],
        },
        {
          id: "gemma-eval-007",
          name: "gemma-eval-007",
          status: "completed",
          tags: ["eval"],
          step: 10000,
          totalSteps: 10000,
          loss: 1.05,
          acc: 0.74,
          lr: 0,
          updated: "1h ago",
          project: "ft-llama-instruct",
          mini: [2.2, 2.1, 2.0, 1.95, 1.9, 1.88, 1.86, 1.84, 1.83],
        },
        {
          id: "llama-sft-042",
          name: "llama-3-sft-042",
          status: "failed",
          tags: ["sft", "lr_finder"],
          step: 320,
          totalSteps: 12000,
          loss: 3.8,
          acc: 0.31,
          lr: 3e-5,
          updated: "yesterday",
          project: "ft-llama-instruct",
          mini: [3.2, 3.0, 3.4, 3.8],
        },
      ];

      // State
      let activeFilters = { status: new Set(), tags: new Set(), q: "" };
      let selectedRun = null;
      let lossChart = null, accChart = null;
      let updateTimer = null;
      let autoscroll = true;
      const runsContainer = document.getElementById('runsContainer');

      // Utility
      const fmtPct = (x) => `${Math.round(x)}%`;
      const fmtLr = (x) => x.toExponential(1);
      const statusColor = (s) => ({
        running: "bg-emerald-500",
        completed: "bg-sky-500",
        failed: "bg-rose-500",
        stopped: "bg-amber-500",
      }[s] || "bg-neutral-500");

      function renderRuns() {
        const q = activeFilters.q.toLowerCase();
        let filtered = runs.filter(r => {
          const statusPass = activeFilters.status.size ? activeFilters.status.has(r.status) : true;
          const tagPass = activeFilters.tags.size ? r.tags.some(t => activeFilters.tags.has(t)) : true;
          const qPass = q ? (r.name.toLowerCase().includes(q) || r.id.toLowerCase().includes(q) || r.tags.join(' ').includes(q)) : true;
          return statusPass && tagPass && qPass;
        });

        document.getElementById('runsCount').textContent = filtered.length.toString();
        document.getElementById('statActive').textContent = runs.filter(r => r.status === 'running').length;

        runsContainer.innerHTML = "";
        filtered.forEach((r, idx) => {
          const row = document.createElement('button');
          row.className = "w-full text-left px-4 sm:px-5 py-3 hover:bg-neutral-900/40 transition-colors";
          row.setAttribute('data-run-id', r.id);
          row.innerHTML = `
            <div class="flex items-start gap-3">
              <div class="mt-1">
                <span class="inline-block h-1.5 w-1.5 rounded-full ${statusColor(r.status)}"></span>
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2">
                  <div class="truncate font-medium tracking-tight">${r.name}</div>
                  <span class="text-[11px] px-1.5 py-0.5 rounded bg-neutral-900/60 ring-1 ring-neutral-800 text-neutral-400">#${r.id.slice(-4)}</span>
                  <span class="text-[11px] text-neutral-500 hidden sm:inline">• Updated ${r.updated}</span>
                </div>
                <div class="mt-1 flex items-center gap-2">
                  ${r.tags.map(t => `
                    <span class="text-[11px] px-1.5 py-0.5 rounded-full bg-neutral-900/60 ring-1 ring-neutral-800 text-neutral-400">${t}</span>
                  `).join('')}
                </div>
              </div>
              <div class="hidden sm:flex items-center gap-4">
                <div class="w-32">
                  <div class="text-[11px] text-neutral-500">Loss</div>
                  <div class="text-sm font-medium">${r.loss.toFixed(2)}</div>
                </div>
                <div class="w-32">
                  <div class="text-[11px] text-neutral-500">Acc</div>
                  <div class="text-sm font-medium">${(r.acc*100).toFixed(1)}%</div>
                </div>
              </div>
              <div class="hidden sm:flex items-center gap-3">
                <div class="w-24">
                  <div class="text-[11px] text-neutral-500">Progress</div>
                  <div class="mt-1 h-1.5 rounded-full bg-neutral-900 overflow-hidden">
                    <div class="h-full rounded-full ${r.status==='completed' ? 'bg-sky-500' : r.status==='failed' ? 'bg-rose-500' : 'bg-emerald-500'}"
                      style="width: ${Math.min(100, (r.step / r.totalSteps) * 100)}%"></div>
                  </div>
                </div>
                <i data-lucide="chevron-right" class="w-4 h-4 text-neutral-600"></i>
              </div>
            </div>
            <div class="mt-3 sm:mt-2 grid grid-cols-3 gap-2 sm:hidden">
              <div class="rounded-md bg-neutral-950 ring-1 ring-neutral-900 p-2">
                <div class="text-[11px] text-neutral-500">Loss</div>
                <div class="text-sm font-medium">${r.loss.toFixed(2)}</div>
              </div>
              <div class="rounded-md bg-neutral-950 ring-1 ring-neutral-900 p-2">
                <div class="text-[11px] text-neutral-500">Acc</div>
                <div class="text-sm font-medium">${(r.acc*100).toFixed(1)}%</div>
              </div>
              <div class="rounded-md bg-neutral-950 ring-1 ring-neutral-900 p-2">
                <div class="text-[11px] text-neutral-500">Step</div>
                <div class="text-sm font-medium">${r.step.toLocaleString()}</div>
              </div>
            </div>
          `;
          runsContainer.appendChild(row);
          row.addEventListener('click', () => openDrawer(r.id));
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Drawer
      function openDrawer(id) {
        const r = runs.find(x => x.id === id);
        if (!r) return;
        selectedRun = r;

        document.getElementById('drawerTitle').textContent = r.name;
        document.getElementById('drawerSubtitle').textContent = `${r.project} • #${r.id}`;
        document.getElementById('drawerStatusDot').className = `h-1.5 w-1.5 rounded-full ${statusColor(r.status)}`;
        document.getElementById('pinLoss').textContent = r.loss.toFixed(3);
        document.getElementById('pinAcc').textContent = (r.acc * 100).toFixed(2) + "%";
        document.getElementById('pinStep').textContent = `${r.step.toLocaleString()} / ${r.totalSteps.toLocaleString()}`;
        document.getElementById('pinLr').textContent = fmtLr(r.lr);
        const pct = Math.min(100, (r.step / r.totalSteps) * 100);
        document.getElementById('progressPct').textContent = fmtPct(pct);
        document.getElementById('progressBar').style.width = `${pct}%`;
        document.getElementById('progressText').textContent = `ETA ~${estimateEta(r)} • Updated ${r.updated}`;

        // System bars (mock)
        const gpu = 40 + Math.round(Math.random()*50);
        const vram = 20 + Math.round(Math.random()*70);
        document.getElementById('gpuUtil').textContent = gpu + "%";
        document.getElementById('vram').textContent = vram + "%";
        document.getElementById('gpuUtilBar').style.width = gpu + "%";
        document.getElementById('vramBar').style.width = vram + "%";

        // Charts
        setupCharts(r);

        // Logs (mock)
        const logs = document.getElementById('logs');
        logs.innerHTML = "";
        appendLog(`[info] Opening logs for ${r.id}`);
        appendLog(`[config] lr=${r.lr}, total_steps=${r.totalSteps}`);
        appendLog(`[status] ${r.status.toUpperCase()} • step=${r.step}`);

        // Open UI
        const drawer = document.getElementById('runDrawer');
        drawer.classList.remove('translate-x-full');

        // Start periodic updates (simulate streaming)
        if (updateTimer) clearInterval(updateTimer);
        updateTimer = setInterval(() => {
          simulateUpdate();
        }, 1800);
      }

      function closeDrawer() {
        const drawer = document.getElementById('runDrawer');
        drawer.classList.add('translate-x-full');
        if (updateTimer) {
          clearInterval(updateTimer);
          updateTimer = null;
        }
      }

      function estimateEta(r) {
        const rem = Math.max(0, r.totalSteps - r.step);
        const ms = 230 + Math.random()*80;
        const seconds = Math.round((rem * ms)/1000);
        const h = String(Math.floor(seconds/3600)).padStart(2,'0');
        const m = String(Math.floor((seconds%3600)/60)).padStart(2,'0');
        const s = String(seconds%60).padStart(2,'0');
        return `${h}:${m}:${s}`;
        }

      function setupCharts(r) {
        const lossCtx = document.getElementById('lossChart').getContext('2d');
        const accCtx = document.getElementById('accChart').getContext('2d');

        // Destroy existing
        if (lossChart) { lossChart.destroy(); lossChart = null; }
        if (accChart) { accChart.destroy(); accChart = null; }

        const baseLabels = Array.from({length: 30}, (_,i)=> r.step - (29 - i));
        const lossSeries = baseLabels.map((_,i)=> Math.max(0.8, r.loss + (Math.sin(i/4)/15) - i*0.01));
        const accSeries  = baseLabels.map((_,i)=> Math.min(0.9, r.acc + (Math.cos(i/5)/50) + i*0.001));

        const grid = {
          color: 'rgba(120,120,120,0.12)',
          drawBorder: false,
        };

        lossChart = new Chart(lossCtx, {
          type: 'line',
          data: {
            labels: baseLabels,
            datasets: [{
              label: 'loss',
              data: lossSeries,
              borderColor: 'rgb(16, 185, 129)',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              fill: true,
              tension: 0.35,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { mode: 'index', intersect: false, backgroundColor: 'rgba(17,17,17,0.9)', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, titleColor:'#d4d4d4', bodyColor:'#a3a3a3' }
            },
            scales: {
              x: { display: false, grid },
              y: { display: true, grid, ticks: { color: '#737373', maxTicksLimit: 5 } }
            }
          }
        });

        accChart = new Chart(accCtx, {
          type: 'line',
          data: {
            labels: baseLabels,
            datasets: [{
              label: 'accuracy',
              data: accSeries,
              borderColor: 'rgb(56, 189, 248)',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              fill: true,
              tension: 0.35,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { mode: 'index', intersect: false, backgroundColor: 'rgba(17,17,17,0.9)', borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1, titleColor:'#d4d4d4', bodyColor:'#a3a3a3' }
            },
            scales: {
              x: { display: false, grid },
              y: { display: true, grid, ticks: { color: '#737373', maxTicksLimit: 5, callback: v => (v*100).toFixed(0)+'%' } }
            }
          }
        });
      }

      function appendLog(line) {
        const el = document.getElementById('logs');
        const time = new Date().toISOString().split('T')[1].split('.')[0];
        const row = document.createElement('div');
        row.className = "py-0.5 text-neutral-300";
        row.textContent = `[${time}] ${line}`;
        el.appendChild(row);
        if (autoscroll) el.scrollTop = el.scrollHeight;
      }

      function simulateUpdate() {
        if (!selectedRun) return;
        // Only update if running
        if (selectedRun.status !== 'running') return;

        // Step and metrics
        selectedRun.step = Math.min(selectedRun.totalSteps, selectedRun.step + Math.round(Math.random()*120 + 40));
        const pct = Math.min(100, (selectedRun.step / selectedRun.totalSteps) * 100);
        selectedRun.loss = Math.max(0.7, selectedRun.loss - (Math.random()*0.03 + 0.005));
        selectedRun.acc = Math.min(0.92, selectedRun.acc + (Math.random()*0.01));
        selectedRun.updated = "just now";

        // UI updates
        document.getElementById('pinLoss').textContent = selectedRun.loss.toFixed(3);
        document.getElementById('pinAcc').textContent = (selectedRun.acc*100).toFixed(2) + "%";
        document.getElementById('pinStep').textContent = `${selectedRun.step.toLocaleString()} / ${selectedRun.totalSteps.toLocaleString()}`;
        document.getElementById('progressPct').textContent = fmtPct(pct);
        document.getElementById('progressBar').style.width = `${pct}%`;
        document.getElementById('progressText').textContent = `ETA ~${estimateEta(selectedRun)} • Updated ${selectedRun.updated}`;

        // System
        const gpu = 50 + Math.round(Math.random()*40);
        const vram = 30 + Math.round(Math.random()*60);
        document.getElementById('gpuUtil').textContent = gpu + "%";
        document.getElementById('vram').textContent = vram + "%";
        document.getElementById('gpuUtilBar').style.width = gpu + "%";
        document.getElementById('vramBar').style.width = vram + "%";

        // Charts
        if (lossChart && accChart) {
          lossChart.data.labels.push(selectedRun.step);
          lossChart.data.labels.shift();
          lossChart.data.datasets[0].data.push(selectedRun.loss);
          lossChart.data.datasets[0].data.shift();
          lossChart.update('none');

          accChart.data.labels.push(selectedRun.step);
          accChart.data.labels.shift();
          accChart.data.datasets[0].data.push(selectedRun.acc);
          accChart.data.datasets[0].data.shift();
          accChart.update('none');
        }

        appendLog(`[metric] step=${selectedRun.step} loss=${selectedRun.loss.toFixed(3)} acc=${(selectedRun.acc*100).toFixed(2)}%`);
        renderRuns();
      }

      // Event Bindings
      document.getElementById('closeDrawer').addEventListener('click', closeDrawer);
      document.getElementById('openInWB').addEventListener('click', () => {
        if (!selectedRun) return;
        window.open(`https://wandb.ai/your-team/${selectedRun.project}/runs/${selectedRun.id}`, '_blank');
      });
      document.getElementById('stopRun').addEventListener('click', () => {
        if (!selectedRun) return;
        selectedRun.status = 'stopped';
        appendLog(`[action] Run ${selectedRun.id} requested to stop`);
        document.getElementById('drawerStatusDot').className = `h-1.5 w-1.5 rounded-full ${statusColor(selectedRun.status)}`;
        renderRuns();
      });

      // Search
      document.getElementById('searchInput').addEventListener('input', (e) => {
        activeFilters.q = e.target.value || "";
        renderRuns();
      });

      // Filter chips (status)
      function toggleChip(el, set, key) {
        const val = el.getAttribute(key);
        if (set.has(val)) set.delete(val); else set.add(val);
        el.classList.toggle('ring-neutral-700');
        el.classList.toggle('bg-neutral-900');
      }
      document.querySelectorAll('.status-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
          toggleChip(btn, activeFilters.status, 'data-status');
          renderRuns();
        });
      });
      document.querySelectorAll('.tag-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          toggleChip(btn, activeFilters.tags, 'data-tag');
          renderRuns();
        });
      });
      document.getElementById('clearFiltersBtn').addEventListener('click', () => {
        activeFilters = { status: new Set(), tags: new Set(), q: "" };
        document.getElementById('searchInput').value = "";
        document.querySelectorAll('.status-chip, .tag-chip').forEach(b => {
          b.classList.remove('ring-neutral-700','bg-neutral-900');
        });
        renderRuns();
      });

      // Mobile Filters Sheet
      const filtersSheet = document.getElementById('filtersSheet');
      document.getElementById('filterBtn').addEventListener('click', () => {
        filtersSheet.classList.remove('translate-y-full');
      });
      document.getElementById('closeFilters').addEventListener('click', () => {
        filtersSheet.classList.add('translate-y-full');
      });
      document.getElementById('filtersClear').addEventListener('click', () => {
        activeFilters = { status: new Set(), tags: new Set(), q: activeFilters.q };
        document.querySelectorAll('#filtersSheet .status-chip, #filtersSheet .tag-chip').forEach(b => {
          b.classList.remove('ring-neutral-700','bg-neutral-900');
        });
      });
      document.getElementById('filtersApply').addEventListener('click', () => {
        filtersSheet.classList.add('translate-y-full');
        renderRuns();
      });

      // API Modal
      const apiModal = document.getElementById('apiModal');
      const apiCard = document.getElementById('apiCard');
      function openApi() {
        apiModal.classList.remove('pointer-events-none');
        setTimeout(() => {
          apiModal.classList.remove('opacity-0');
          apiCard.classList.remove('opacity-0');
          apiCard.classList.remove('translate-y-8');
        }, 0);
        const key = localStorage.getItem('wandb_api_key');
        if (key) document.getElementById('apiKeyInput').value = key;
      }
      function closeApi() {
        apiModal.classList.add('opacity-0');
        apiCard.classList.add('opacity-0');
        apiCard.classList.add('translate-y-8');
        setTimeout(() => apiModal.classList.add('pointer-events-none'), 200);
      }
      document.getElementById('apiBtn').addEventListener('click', openApi);
      document.getElementById('apiClose').addEventListener('click', closeApi);
      document.getElementById('apiSave').addEventListener('click', () => {
        const v = document.getElementById('apiKeyInput').value.trim();
        if (v) localStorage.setItem('wandb_api_key', v);
        closeApi();
      });
      document.getElementById('apiClear').addEventListener('click', () => {
        localStorage.removeItem('wandb_api_key');
        document.getElementById('apiKeyInput').value = "";
      });

      // Misc
      document.getElementById('refreshBtn')?.addEventListener('click', () => {
        document.getElementById('lastSynced').textContent = "just now";
        renderRuns();
      });
      document.getElementById('openWs').addEventListener('click', () => {
        document.getElementById('lastSynced').textContent = "just now";
      });
      document.getElementById('autoscroll').addEventListener('click', (e) => {
        autoscroll = !autoscroll;
        e.target.classList.toggle('bg-neutral-800');
      });
      document.getElementById('clearLogs').addEventListener('click', () => {
        document.getElementById('logs').innerHTML = "";
      });

      // Initial render
      renderRuns();
    
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
      

<div className="min-h-dvh flex flex-col" id="app">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-neutral-900 ring-1 ring-neutral-800 flex items-center justify-center text-neutral-200 text-sm tracking-tight font-semibold">WB</div>
<div className="hidden sm:flex items-center gap-2">
<div className="text-sm text-neutral-400">Project</div>
<button className="group flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700 hover:bg-neutral-900 transition-colors" id="projectBtn">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium tracking-tight">ft-llama-instruct</span>
<i className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300" data-lucide="chevron-down"></i>
</button>
<span className="hidden md:inline-block text-neutral-700">|</span>
<div className="hidden md:flex items-center gap-2 text-xs text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="tag"></i>
<span>team-core</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<div className="hidden sm:flex items-center">
<div className="relative">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" data-lucide="search"></i>
<input className="w-64 pl-8 pr-3 py-1.5 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 focus:ring-neutral-600 outline-none text-sm placeholder:text-neutral-600" id="searchInput" placeholder="Search runs, tags, IDs" />
</div>
</div>
<button className="sm:hidden inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:bg-neutral-900 hover:ring-neutral-700" id="filterBtn">
<i className="w-4 h-4 text-neutral-400" data-lucide="filter"></i>
<span className="text-sm">Filters</span>
</button>
<button className="hidden sm:inline-flex p-2 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700">
<i className="w-4 h-4 text-neutral-400" data-lucide="bell"></i>
</button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700" id="apiBtn">
<i className="w-4 h-4 text-neutral-400" data-lucide="shield"></i>
<span className="text-sm">API</span>
</button>
<button className="inline-flex p-2 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700">
<i className="w-4 h-4 text-neutral-400" data-lucide="settings"></i>
</button>
</div>
</div>
</div>
</header>

<div className="border-b border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex gap-2 overflow-x-auto py-2.5 no-scrollbar">
<button className="status-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/70 ring-1 ring-neutral-800 hover:ring-neutral-700 text-sm whitespace-nowrap" data-status="running">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Running
              <span className="text-xs text-neutral-400">(3)</span>
</button>
<button className="status-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/70 ring-1 ring-neutral-800 hover:ring-neutral-700 text-sm whitespace-nowrap" data-status="completed">
<span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
              Completed
              <span className="text-xs text-neutral-400">(8)</span>
</button>
<button className="status-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/70 ring-1 ring-neutral-800 hover:ring-neutral-700 text-sm whitespace-nowrap" data-status="failed">
<span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
              Failed
              <span className="text-xs text-neutral-400">(1)</span>
</button>
<button className="status-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/70 ring-1 ring-neutral-800 hover:ring-neutral-700 text-sm whitespace-nowrap" data-status="stopped">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
              Stopped
              <span className="text-xs text-neutral-400">(2)</span>
</button>
<span className="mx-1 self-stretch w-px bg-neutral-900"></span>
<button className="tag-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700 text-sm whitespace-nowrap" data-tag="lr_finder">
<i className="w-4 h-4 text-neutral-400" data-lucide="tag"></i>
              lr_finder
            </button>
<button className="tag-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700 text-sm whitespace-nowrap" data-tag="bf16">
<i className="w-4 h-4 text-neutral-400" data-lucide="tag"></i>
              bf16
            </button>
<button className="tag-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700 text-sm whitespace-nowrap" data-tag="sft">
<i className="w-4 h-4 text-neutral-400" data-lucide="tag"></i>
              sft
            </button>
</div>
</div>
</div>

<main className="flex-1">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">

<section className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-4 hover:ring-neutral-800 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Active runs</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="activity"></i>
</div>
<div className="mt-1.5 flex items-baseline gap-2">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight" id="statActive">3</div>
<div className="text-xs text-emerald-400/80">+1 today</div>
</div>
</div>
<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-4 hover:ring-neutral-800 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Avg step time</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="cpu"></i>
</div>
<div className="mt-1.5 flex items-baseline gap-2">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight" id="statStepTime">231 ms</div>
<div className="text-xs text-neutral-400">per step</div>
</div>
</div>
<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-4 hover:ring-neutral-800 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Longest ETA</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="clock"></i>
</div>
<div className="mt-1.5 flex items-baseline gap-2">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight" id="statEta">02:18:44</div>
<div className="text-xs text-neutral-400">remaining</div>
</div>
</div>
</section>

<section className="rounded-xl bg-neutral-950 ring-1 ring-neutral-900 overflow-hidden">
<div className="px-4 sm:px-5 py-3 flex items-center justify-between border-b border-neutral-900">
<div className="flex items-center gap-2">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Runs</h2>
<span className="text-xs px-1.5 py-0.5 rounded bg-neutral-900/70 ring-1 ring-neutral-800 text-neutral-400" id="runsCount">0</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700" id="refreshBtn">
<i className="w-4 h-4 text-neutral-400" data-lucide="refresh-ccw"></i>
<span className="text-sm">Refresh</span>
</button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700" id="clearFiltersBtn">
<i className="w-4 h-4 text-neutral-400" data-lucide="filter-x"></i>
<span className="text-sm">Clear</span>
</button>
</div>
</div>
<div className="divide-y divide-neutral-900" id="runsContainer">

</div>
</section>

<div className="mt-6 text-center text-xs text-neutral-600">
<span>Last synced <span id="lastSynced">just now</span>. </span>
<button className="underline decoration-dotted hover:text-neutral-400" id="openWs">Reconnect</button>
</div>
</div>
</main>
</div>

<div className="fixed inset-y-0 right-0 w-full sm:max-w-xl bg-neutral-950 ring-1 ring-neutral-900 translate-x-full transition-transform duration-300 ease-out z-50 flex flex-col" id="runDrawer">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-neutral-900">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-500" id="drawerStatusDot"></span>
<h3 className="truncate text-lg font-semibold tracking-tight" id="drawerTitle">run-xxxxx</h3>
</div>
<div className="text-xs text-neutral-500 mt-0.5 truncate">
<span id="drawerSubtitle">—</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700" id="openInWB">
<i className="w-4 h-4 text-neutral-400" data-lucide="external-link"></i>
<span className="text-sm">Open</span>
</button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-rose-700/70 hover:text-rose-300" id="stopRun">
<i className="w-4 h-4" data-lucide="square"></i>
<span className="text-sm">Stop</span>
</button>
<button className="p-2 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700" id="closeDrawer">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto">

<div className="px-4 sm:px-5 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-3">
<div className="text-xs text-neutral-400">Loss</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="pinLoss">—</div>
</div>
<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-3">
<div className="text-xs text-neutral-400">Accuracy</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="pinAcc">—</div>
</div>
<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-3">
<div className="text-xs text-neutral-400">Step</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="pinStep">—</div>
</div>
<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-3">
<div className="text-xs text-neutral-400">LR</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="pinLr">—</div>
</div>
</div>

<div className="px-4 sm:px-5">
<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-400">Progress</div>
<div className="text-xs text-neutral-300" id="progressPct">0%</div>
</div>
<div className="mt-2 h-2 rounded-full bg-neutral-900 overflow-hidden">
<div className="h-full w-0 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-700" id="progressBar"></div>
</div>
<div className="mt-2 text-[11px] text-neutral-500" id="progressText">—</div>
</div>
</div>

<div className="px-4 sm:px-5 py-4 grid grid-cols-1 gap-4">
<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-3">
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium tracking-tight">Training Loss</h4>
<p className="text-xs text-neutral-500">smoothed, per step</p>
</div>
<i className="w-4 h-4 text-neutral-500" data-lucide="line-chart"></i>
</div>
<div className="mt-2">
<div className="relative h-40 sm:h-48">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="lossChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-3">
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium tracking-tight">Accuracy</h4>
<p className="text-xs text-neutral-500">per step</p>
</div>
<i className="w-4 h-4 text-neutral-500" data-lucide="bar-chart-3"></i>
</div>
<div className="mt-2">
<div className="relative h-40 sm:h-48">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="accChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-3">
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium tracking-tight">System</h4>
<p className="text-xs text-neutral-500">GPU / Memory</p>
</div>
<i className="w-4 h-4 text-neutral-500" data-lucide="database"></i>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div>
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-400">GPU Util</span>
<span className="text-neutral-300" id="gpuUtil">—</span>
</div>
<div className="mt-1 h-2 rounded-full bg-neutral-900 overflow-hidden">
<div className="h-full w-1/3 rounded-full bg-emerald-500 transition-all duration-700" id="gpuUtilBar"></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-400">VRAM</span>
<span className="text-neutral-300" id="vram">—</span>
</div>
<div className="mt-1 h-2 rounded-full bg-neutral-900 overflow-hidden">
<div className="h-full w-1/4 rounded-full bg-sky-500 transition-all duration-700" id="vramBar"></div>
</div>
</div>
</div>
</div>

<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-900 p-3">
<div className="flex items-center justify-between">
<div>
<h4 className="text-sm font-medium tracking-tight">Logs</h4>
<p className="text-xs text-neutral-500">tail -f</p>
</div>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700" id="autoscroll">Autoscroll</button>
<button className="text-xs px-2 py-1 rounded bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700" id="clearLogs">Clear</button>
</div>
</div>
<div className="mt-2 h-48 overflow-auto rounded-md bg-neutral-950 ring-1 ring-neutral-900 p-2 text-[11px]" id="logs" style={{fontFamily: `'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`}}></div>
</div>
</div>
</div>
</div>

<div className="fixed inset-x-0 bottom-0 translate-y-full transition-transform duration-300 ease-out z-50" id="filtersSheet">
<div className="mx-auto max-w-2xl rounded-t-2xl bg-neutral-950 ring-1 ring-neutral-900 p-4 shadow-2xl">
<div className="flex items-center justify-between">
<h4 className="text-base font-semibold tracking-tight">Filters</h4>
<button className="p-2 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700" id="closeFilters">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
<div className="mt-3">
<div className="text-xs text-neutral-400 mb-2">Status</div>
<div className="flex flex-wrap gap-2">
<button className="status-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/70 ring-1 ring-neutral-800 text-sm" data-status="running">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Running
            </button>
<button className="status-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/70 ring-1 ring-neutral-800 text-sm" data-status="completed">
<span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span> Completed
            </button>
<button className="status-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/70 ring-1 ring-neutral-800 text-sm" data-status="failed">
<span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span> Failed
            </button>
<button className="status-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/70 ring-1 ring-neutral-800 text-sm" data-status="stopped">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Stopped
            </button>
</div>
<div className="mt-4">
<div className="text-xs text-neutral-400 mb-2">Tags</div>
<div className="flex flex-wrap gap-2">
<button className="tag-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/60 ring-1 ring-neutral-800 text-sm" data-tag="sft">
<i className="w-4 h-4 text-neutral-400" data-lucide="tag"></i> sft
              </button>
<button className="tag-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/60 ring-1 ring-neutral-800 text-sm" data-tag="bf16">
<i className="w-4 h-4 text-neutral-400" data-lucide="tag"></i> bf16
              </button>
<button className="tag-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/60 ring-1 ring-neutral-800 text-sm" data-tag="lr_finder">
<i className="w-4 h-4 text-neutral-400" data-lucide="tag"></i> lr_finder
              </button>
</div>
</div>
<div className="mt-4 flex items-center justify-end gap-2">
<button className="text-sm px-3 py-1.5 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700" id="filtersClear">Clear</button>
<button className="text-sm px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-900 hover:bg-white" id="filtersApply">Apply</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 opacity-0 pointer-events-none transition-opacity duration-200 z-50" id="apiModal">
<div className="flex min-h-dvh items-end sm:items-center justify-center p-4">
<div className="w-full max-w-md rounded-lg bg-neutral-950 ring-1 ring-neutral-900 shadow-2xl translate-y-8 sm:translate-y-0 opacity-0 transition-all duration-200" id="apiCard">
<div className="p-4 border-b border-neutral-900 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Connect API</h3>
<button className="p-2 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700" id="apiClose">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
<div className="p-4">
<label className="block text-xs text-neutral-400 mb-1.5">Weights&Biases API Key</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 focus:ring-neutral-600 outline-none text-sm placeholder:text-neutral-600" id="apiKeyInput" placeholder=" wandb api key..." type="password" />
<p className="mt-2 text-xs text-neutral-500">
              Stored locally in your browser. For demo only; no network calls are made.
            </p>
</div>
<div className="p-4 border-t border-neutral-900 flex items-center justify-end gap-2">
<button className="text-sm px-3 py-1.5 rounded-md bg-neutral-900/60 ring-1 ring-neutral-800 hover:ring-neutral-700" id="apiClear">Clear</button>
<button className="text-sm px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-900 hover:bg-white" id="apiSave">Save</button>
</div>
</div>
</div>
</div>


    </>
  );
}
