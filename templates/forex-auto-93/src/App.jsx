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



      // Utilities
      const $ = (s, d = document) => d.querySelector(s);
      const $$ = (s, d = document) => Array.from(d.querySelectorAll(s));

      // Route switching
      const sections = { home: $('#home'), dashboard: $('#dashboard') };
      const setRoute = (route) => {
        Object.entries(sections).forEach(([k, el]) => el.classList.toggle('hidden', k !== route));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      $$('#mobileMenuBtn').forEach?.(() => {});
      $('#mobileMenuBtn')?.addEventListener('click', () => $('#mobileMenu').classList.toggle('hidden'));
      $$('#year').forEach(el => el.textContent = new Date().getFullYear());
      $$('.nav-btn').forEach(btn => btn.addEventListener('click', (e) => {
        const route = e.currentTarget.getAttribute('data-route');
        if (route) setRoute(route);
        $('#mobileMenu')?.classList.add('hidden');
      }));
      // CTA in header to connection section
      $('#ctaConnectTop')?.addEventListener('click', () => {
        setRoute('dashboard');
        setTimeout(() => $('#anchor-connection')?.scrollIntoView({ behavior: 'smooth' }), 250);
      });

      // Sidebar anchors and mobile tabs
      const jumpTo = (id) => {
        const el = document.getElementById(`anchor-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      $$('.side-link').forEach(b => b.addEventListener('click', (e) => jumpTo(e.currentTarget.dataset.anchor)));
      $$('.mob-tab').forEach(b => b.addEventListener('click', (e) => jumpTo(e.currentTarget.dataset.anchor)));

      // Lucide icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Preview Chart
      const pcCtx = $('#previewChart')?.getContext('2d');
      let previewChart;
      if (pcCtx) {
        const labels = Array.from({ length: 24 }, (_, i) => i);
        const data = labels.map((_, i) => 10000 + Math.sin(i / 2) * 60 + i * 8 + (Math.random() * 40 - 20));
        previewChart = new Chart(pcCtx, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              data,
              borderColor: '#4f46e5',
              backgroundColor: 'rgba(79,70,229,0.08)',
              tension: 0.35,
              fill: true,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } }
          }
        });
      }

      // Main Chart
      const mcCtx = $('#mainChart')?.getContext('2d');
      let mainChart;
      let equity = 10000, balance = 10000;
      if (mcCtx) {
        const labels = Array.from({ length: 30 }, (_, i) => `D${i+1}`);
        const eq = labels.map((_, i) => 10000 + i * 25 + (Math.random() * 60 - 30));
        const bal = labels.map((_, i) => 10000 + i * 22 + (Math.random() * 60 - 30));
        equity = eq.at(-1);
        balance = bal.at(-1);
        mainChart = new Chart(mcCtx, {
          type: 'line',
          data: {
            labels,
            datasets: [
              { label: 'Equity', data: eq, borderColor: '#4f46e5', backgroundColor: 'rgba(79,70,229,0.08)', tension: 0.35, fill: true, pointRadius: 0 },
              { label: 'Balance', data: bal, borderColor: '#059669', backgroundColor: 'rgba(5,150,105,0.08)', tension: 0.35, fill: true, pointRadius: 0 }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#6b7280', font: { size: 11 } } },
              y: { grid: { color: '#f1f5f9' }, ticks: { color: '#6b7280', font: { size: 11 } } }
            }
          }
        });
      }

      // Metrics
      const updateMetricsUI = () => {
        $('#metricEquity').textContent = `$${equity.toFixed(2)}`;
        $('#metricBalance').textContent = `$${balance.toFixed(2)}`;
        const pl = equity - balance;
        $('#metricPL').textContent = `${pl >= 0 ? '+' : ''}$${Math.abs(pl).toFixed(2)}`;
        $('#metricPL').className = `text-sm font-semibold ${pl >= 0 ? 'text-emerald-600' : 'text-rose-600'}`;
      };
      updateMetricsUI();
      $('#refreshMetrics')?.addEventListener('click', () => {
        const lastEq = mainChart.data.datasets[0].data.at(-1);
        const lastBal = mainChart.data.datasets[1].data.at(-1);
        const nextEq = lastEq + (Math.random() * 40 - 10);
        const nextBal = lastBal + (Math.random() * 35 - 8);
        mainChart.data.labels.push(`D${mainChart.data.labels.length + 1}`);
        mainChart.data.datasets[0].data.push(nextEq);
        mainChart.data.datasets[1].data.push(nextBal);
        if (mainChart.data.labels.length > 40) {
          mainChart.data.labels.shift();
          mainChart.data.datasets.forEach(d => d.data.shift());
        }
        mainChart.update();
        equity = nextEq; balance = nextBal;
        updateMetricsUI();
      });

      // Connection Logic
      let isConnected = false;
      const setConnState = (connected, account = '—') => {
        isConnected = connected;
        $('#connPill').className = `inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] ${connected ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-700'}`;
        $('#connPill').innerHTML = `<span class="h-1.5 w-1.5 rounded-full ${connected ? 'bg-emerald-500' : 'bg-gray-400'}"></span> ${connected ? 'Connected' : 'Disconnected'}`;
        $('#connAccount').textContent = connected ? account : '—';
        setVPSState(connected);
      };
      const setVPSState = (online) => {
        $('#vpsPill').className = `inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] ${online ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-700'}`;
        $('#vpsPill').innerHTML = `<span class="h-1.5 w-1.5 rounded-full ${online ? 'bg-emerald-500' : 'bg-gray-400'}"></span> ${online ? 'Online' : 'Offline'}`;
        $('#vpsState').textContent = online ? 'Online' : 'Offline';
        $('#vpsLatency').textContent = online ? `${Math.round(3 + Math.random()*7)} ms` : '—';
        $('#vpsCPU').textContent = online ? `${Math.round(20 + Math.random()*25)}%` : '—';
        $('#vpsRAM').textContent = online ? `${Math.round(35 + Math.random()*20)}%` : '—';
        $('#vpsUptime').textContent = online ? `${Math.round(12 + Math.random()*72)}h` : '—';
      };
      const validateConn = () => {
        const a = $('#mt5Account').value.trim();
        const p = $('#mt5Password').value.trim();
        const s = $('#mt5Server').value.trim();
        let ok = true;
        [['errAccount', a], ['errPassword', p], ['errServer', s]].forEach(([id, val]) => {
          const show = val.length === 0;
          const err = document.getElementById(id);
          err.classList.toggle('hidden', !show);
          const input = err.previousElementSibling;
          input.classList.toggle('border-rose-400', show);
        });
        return ok && a && p && s;
      };
      const connect = async () => {
        if (!validateConn()) return;
        $('#connectFeedback').textContent = 'Connecting securely...';
        $('#connectBtn').disabled = true;
        $('#connectBtn').classList.add('opacity-70', 'cursor-not-allowed');
        await new Promise(r => setTimeout(r, 1200));
        const account = $('#mt5Account').value.trim();
        setConnState(true, account);
        $('#connectFeedback').textContent = 'Connected.';
        $('#connectBtn').disabled = false;
        $('#connectBtn').classList.remove('opacity-70', 'cursor-not-allowed');
      };
      const disconnect = () => {
        setConnState(false);
        $('#connectFeedback').textContent = 'Disconnected.';
      };
      $('#connectBtn')?.addEventListener('click', connect);
      $('#quickConnectBtn')?.addEventListener('click', () => {
        setRoute('dashboard');
        setTimeout(() => $('#anchor-connection')?.scrollIntoView({ behavior: 'smooth' }), 250);
      });
      $('#disconnectBtn')?.addEventListener('click', disconnect);

      // Bot Controls
      let botState = 'Stopped'; // Running, Paused, Stopped
      const setBotState = (state) => {
        botState = state;
        const map = {
          'Running': { bg: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
          'Paused': { bg: 'bg-amber-50 text-amber-700', dot: 'bg-amber-500' },
          'Stopped': { bg: 'bg-gray-100 text-gray-700', dot: 'bg-gray-400' },
        };
        const s = map[state];
        $('#botPill').className = `inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] ${s.bg}`;
        $('#botPill').innerHTML = `<span class="h-1.5 w-1.5 rounded-full ${s.dot}"></span> ${state}`;
      };
      $('#startBtn')?.addEventListener('click', () => setBotState('Running'));
      $('#pauseBtn')?.addEventListener('click', () => setBotState('Paused'));
      $('#stopBtn')?.addEventListener('click', () => setBotState('Stopped'));
      $('#quickStartBtn')?.addEventListener('click', () => {
        setRoute('dashboard');
        setTimeout(() => { setBotState('Running'); $('#anchor-bot')?.scrollIntoView({ behavior: 'smooth' }); }, 250);
      });

      // Risk Mode segmented control
      $$('.mode-btn').forEach(btn => btn.addEventListener('click', (e) => {
        $$('.mode-btn').forEach(b => b.className = 'mode-btn px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100');
        e.currentTarget.className = 'mode-btn px-3 py-1.5 text-xs font-medium bg-gray-900 text-white';
        $('#modeLabel').textContent = e.currentTarget.dataset.mode;
      }));

      // Auto-update toggle
      let autoUpdate = false;
      $('#toggleAutoUpdate')?.addEventListener('click', (e) => {
        autoUpdate = !autoUpdate;
        e.currentTarget.innerHTML = autoUpdate
          ? '<i data-lucide="toggle-right" class="h-4 w-4"></i> Auto-update on'
          : '<i data-lucide="toggle-left" class="h-4 w-4"></i> Auto-update off';
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Save settings (simulate)
      $('#saveSettings')?.addEventListener('click', () => {
        const btn = $('#saveSettings');
        btn.disabled = true; btn.classList.add('opacity-70', 'cursor-wait');
        setTimeout(() => {
          btn.disabled = false; btn.classList.remove('opacity-70', 'cursor-wait');
        }, 800);
      });

      // VPS Reboot (simulate)
      $('#rebootVPS')?.addEventListener('click', async () => {
        const btn = $('#rebootVPS');
        btn.disabled = true; btn.classList.add('opacity-70', 'cursor-not-allowed');
        $('#vpsState').textContent = 'Rebooting...';
        setTimeout(() => {
          setVPSState(isConnected);
          btn.disabled = false; btn.classList.remove('opacity-70', 'cursor-not-allowed');
        }, 1500);
      });

      // Auto-update chart when bot running
      setInterval(() => {
        if (botState !== 'Running') return;
        const drift = (Math.random() * 30 - 10);
        equity = Math.max(9000, equity + drift);
        const profitBooking = Math.random() > 0.7 ? (Math.random() * 20 - 10) : 0;
        balance = Math.max(9000, balance + profitBooking);
        if (mainChart) {
          const nextLabel = `D${mainChart.data.labels.length + 1}`;
          mainChart.data.labels.push(nextLabel);
          mainChart.data.datasets[0].data.push(equity);
          mainChart.data.datasets[1].data.push(balance);
          if (mainChart.data.labels.length > 60) {
            mainChart.data.labels.shift();
            mainChart.data.datasets.forEach(d => d.data.shift());
          }
          mainChart.update('none');
        }
        updateMetricsUI();
        // Update open positions count randomly
        const open = Math.max(0, Math.min(5, Math.round(Math.random()*3)));
        $('#metricOpen').textContent = open.toString();
      }, 4000);

      // Default route
      setRoute('home');
    
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
      

<div className="min-h-screen flex flex-col" id="app">

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-9 w-9 rounded-md bg-gray-900 text-white font-semibold tracking-tight">FXA</div>
<nav className="hidden md:flex items-center gap-1">
<button className="nav-btn px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600" data-route="home">Home</button>
<button className="nav-btn px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600" data-route="dashboard">Dashboard</button>
<a className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900" href="#learn">Learn</a>
<a className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900" href="#pricing">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-2">
<button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600" id="ctaConnectTop">
<i className="h-4 w-4" data-lucide="plug-2"></i>
                Connect your MT5
              </button>
<button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600" data-route="dashboard">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
                Open Dashboard
              </button>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-gray-200" id="mobileMenu">
<div className="px-4 py-3 grid grid-cols-2 gap-2">
<button className="nav-btn w-full px-3 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200" data-route="home">Home</button>
<button className="nav-btn w-full px-3 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700" data-route="dashboard">Dashboard</button>
<a className="w-full px-3 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200 text-center" href="#learn">Learn</a>
<a className="w-full px-3 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200 text-center" href="#pricing">Pricing</a>
</div>
</div>
</header>

<main className="flex-1">

<section className="block" id="home">

<div className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 mb-4">
<i className="h-3.5 w-3.5" data-lucide="shield-check"></i>
                    Bank-grade security • VPS hosted execution
                  </div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">Automate your MT5 trading on a secure VPS</h1>
<p className="mt-4 text-base sm:text-lg text-gray-600">Connect your MT5 account, configure risk, and let your bot execute trades 24/5 with real-time analytics and full transparency.</p>
<div className="mt-6 flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600" data-route="dashboard">
<i className="h-4 w-4" data-lucide="plug-2"></i>
                      Connect Your MT5
                    </button>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600" href="#features">
<i className="h-4 w-4" data-lucide="play-circle"></i>
                      See how it works
                    </a>
</div>
<div className="mt-6 text-xs text-gray-500">Trading involves risk. Past performance is not indicative of future results.</div>

<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-lg border border-gray-200 bg-white p-4">
<div className="text-xs text-gray-500">Avg Monthly Return</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">4.8%</div>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-4">
<div className="text-xs text-gray-500">Win Rate</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-emerald-600">62%</div>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-4">
<div className="text-xs text-gray-500">Max Drawdown</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-rose-600">-7.9%</div>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-4">
<div className="text-xs text-gray-500">Trade Frequency</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">35/mo</div>
</div>
</div>
</div>
<div>
<div className="relative rounded-xl overflow-hidden border border-gray-200 bg-white">
<img alt="Forex charts visualization" className="w-full h-[340px] object-cover" src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
<div className="text-white text-sm">Live analytics and auto-execution on your dedicated VPS</div>
</div>
</div>

<div className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-indigo-600" data-lucide="line-chart"></i>
<span className="text-sm font-medium text-gray-900">Equity Curve (Preview)</span>
</div>
<span className="text-xs text-gray-500">Last 30 days</span>
</div>
<div className="h-36">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="relative h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-32">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-[120px]">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-28">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-28">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-28">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-28">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-28">
<div className="h-full">
<canvas id="previewChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-200 bg-white" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="mb-8">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Why traders choose FXA</h2>
<p className="mt-2 text-gray-600">Purpose-built automation with sensible risk controls and live insights.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-lg border border-gray-200 p-5 hover:border-gray-300 transition-colors">
<div className="h-10 w-10 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
<i className="h-5 w-5" data-lucide="server"></i>
</div>
<div className="text-sm font-medium text-gray-900">Dedicated VPS</div>
<p className="mt-1 text-sm text-gray-600">Low-latency execution and 24/5 uptime on isolated servers.</p>
</div>
<div className="rounded-lg border border-gray-200 p-5 hover:border-gray-300 transition-colors">
<div className="h-10 w-10 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
<i className="h-5 w-5" data-lucide="shield"></i>
</div>
<div className="text-sm font-medium text-gray-900">Secure &amp; Encrypted</div>
<p className="mt-1 text-sm text-gray-600">Your MT5 credentials are encrypted end‑to‑end and never shared.</p>
</div>
<div className="rounded-lg border border-gray-200 p-5 hover:border-gray-300 transition-colors">
<div className="h-10 w-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
<i className="h-5 w-5" data-lucide="sliders"></i>
</div>
<div className="text-sm font-medium text-gray-900">Risk Controls</div>
<p className="mt-1 text-sm text-gray-600">Set lot sizes, max positions, and drawdown limits with guardrails.</p>
</div>
<div className="rounded-lg border border-gray-200 p-5 hover:border-gray-300 transition-colors">
<div className="h-10 w-10 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
<i className="h-5 w-5" data-lucide="activity"></i>
</div>
<div className="text-sm font-medium text-gray-900">Live Analytics</div>
<p className="mt-1 text-sm text-gray-600">Equity, P/L, and exposure metrics updated in real time.</p>
</div>
</div>
</div>
</div>

<div className="bg-gray-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="mb-8">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">What traders say</h2>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="rounded-lg border border-gray-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">Elena M.</div>
<div className="text-xs text-gray-500">London</div>
</div>
</div>
<p className="mt-3 text-sm text-gray-700">Setup took minutes. The VPS is rock solid and analytics are clear. Great for disciplined trading.</p>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">Marcus R.</div>
<div className="text-xs text-gray-500">New York</div>
</div>
</div>
<p className="mt-3 text-sm text-gray-700">Risk settings are intuitive. I can pause the bot during news and resume instantly.</p>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">Chen L.</div>
<div className="text-xs text-gray-500">Singapore</div>
</div>
</div>
<p className="mt-3 text-sm text-gray-700">Transparent stats and quick support. The bot executes exactly as configured.</p>
</div>
</div>
<div className="mt-8 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700" data-route="dashboard">
<i className="h-4 w-4" data-lucide="plug-2"></i>
                  Get Started
                </button>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100" href="#learn">
<i className="h-4 w-4" data-lucide="book-open"></i>
                  Documentation
                </a>
</div>
</div>
</div>

<footer className="border-t border-gray-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-gray-600">
<div className="h-8 w-8 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold tracking-tight">FXA</div>
<span>© <span id="year"></span> FXA Technologies</span>
</div>
<div className="text-xs text-gray-500">Forex trading involves significant risk of loss and is not suitable for all investors.</div>
</div>
</footer>
</section>

<section className="hidden" id="dashboard">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-12 gap-4">

<aside className="hidden lg:block col-span-3">
<div className="sticky top-24 space-y-2">
<div className="rounded-lg border border-gray-200 bg-white p-3">
<div className="flex items-center gap-2 mb-2">
<i className="h-4 w-4 text-gray-700" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium text-gray-900">Navigation</span>
</div>
<nav className="space-y-1">
<button className="side-link w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" data-anchor="overview">Overview</button>
<button className="side-link w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" data-anchor="connection">MT5 Connection</button>
<button className="side-link w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" data-anchor="bot">Bot Controls</button>
<button className="side-link w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" data-anchor="performance">Performance</button>
<button className="side-link w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" data-anchor="trades">Trades</button>
<button className="side-link w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" data-anchor="settings">Settings</button>
<button className="side-link w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100" data-anchor="vps">VPS</button>
</nav>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-3">
<div className="flex items-center gap-2 mb-2">
<i className="h-4 w-4 text-gray-700" data-lucide="user"></i>
<span className="text-sm font-medium text-gray-900">Account</span>
</div>
<div className="flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-gray-900">You</div>
<div className="text-xs text-gray-500">Trader</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="px-3 py-2 rounded-md border border-gray-300 text-xs font-medium text-gray-800 hover:bg-gray-100">Profile</button>
<button className="px-3 py-2 rounded-md border border-gray-300 text-xs font-medium text-gray-800 hover:bg-gray-100">Sign out</button>
</div>
</div>
</div>
</aside>

<div className="col-span-12 lg:col-span-9 space-y-4">

<div className="rounded-xl border border-gray-200 bg-white p-4" id="anchor-overview">
<div className="flex items-center justify-between">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">Overview</h3>
<p className="text-sm text-gray-600 mt-1">Manage your bot, connection, and performance metrics.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100" id="quickConnectBtn">
<i className="h-4 w-4" data-lucide="plug-2"></i>
                        Quick Connect
                      </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700" id="quickStartBtn">
<i className="h-4 w-4" data-lucide="play"></i>
                        Start Bot
                      </button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-lg border border-gray-200 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Connection</div>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] bg-gray-100 text-gray-700" id="connPill">
<span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span> Disconnected
                        </span>
</div>
<div className="mt-2 text-sm text-gray-800">MT5: <span className="font-medium" id="connAccount">—</span></div>
</div>
<div className="rounded-lg border border-gray-200 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Bot Status</div>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] bg-gray-100 text-gray-700" id="botPill">
<span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span> Stopped
                        </span>
</div>
<div className="mt-2 text-sm text-gray-800">Mode: <span className="font-medium" id="modeLabel">Balanced</span></div>
</div>
<div className="rounded-lg border border-gray-200 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">VPS</div>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] bg-gray-100 text-gray-700" id="vpsPill">
<span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span> Offline
                        </span>
</div>
<div className="mt-2 text-sm text-gray-800">Region: <span className="font-medium">Frankfurt</span></div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-4" id="anchor-connection">

<div className="md:col-span-2 rounded-xl border border-gray-200 bg-white p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-indigo-600" data-lucide="plug-2"></i>
<h4 className="text-lg font-semibold tracking-tight">MT5 Connection</h4>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-gray-600 mb-1">MT5 Account</label>
<input className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" id="mt5Account" placeholder="e.g., 12345678" type="text"/>
<p className="hidden mt-1 text-xs text-rose-600" id="errAccount">Account is required.</p>
</div>
<div>
<label className="block text-xs text-gray-600 mb-1">Password</label>
<input className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" id="mt5Password" placeholder="••••••••" type="password"/>
<p className="hidden mt-1 text-xs text-rose-600" id="errPassword">Password is required.</p>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-gray-600 mb-1">Server</label>
<input className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" id="mt5Server" placeholder="e.g., Broker-Server-Live" type="text"/>
<p className="hidden mt-1 text-xs text-rose-600" id="errServer">Server is required.</p>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700" id="connectBtn">
<i className="h-4 w-4" data-lucide="plug-2"></i>
                        Connect
                      </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100" id="disconnectBtn">
<i className="h-4 w-4" data-lucide="unplug"></i>
                        Disconnect
                      </button>
<div className="text-xs text-gray-600" id="connectFeedback"></div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-4" id="anchor-bot">
<div className="flex items-center gap-2 mb-3">
<i className="h-5 w-5 text-indigo-600" data-lucide="bot"></i>
<h4 className="text-lg font-semibold tracking-tight">Bot Controls</h4>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700" id="startBtn">
<i className="h-4 w-4" data-lucide="play"></i>
                        Start
                      </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-amber-500 text-white text-sm font-medium hover:bg-amber-600" id="pauseBtn">
<i className="h-4 w-4" data-lucide="pause"></i>
                        Pause
                      </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-rose-600 text-white text-sm font-medium hover:bg-rose-700" id="stopBtn">
<i className="h-4 w-4" data-lucide="square"></i>
                        Stop
                      </button>
</div>
<div className="mt-3">
<div className="text-xs text-gray-600 mb-1">Risk Mode</div>
<div className="inline-flex rounded-md border border-gray-300 overflow-hidden">
<button className="mode-btn px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100" data-mode="Conservative">Conservative</button>
<button className="mode-btn px-3 py-1.5 text-xs font-medium bg-gray-900 text-white" data-mode="Balanced">Balanced</button>
<button className="mode-btn px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100" data-mode="Aggressive">Aggressive</button>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-4" id="anchor-performance">
<div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-indigo-600" data-lucide="chart-line"></i>
<h4 className="text-lg font-semibold tracking-tight">Equity &amp; Balance</h4>
</div>
<div className="flex items-center gap-2 text-xs text-gray-600">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span> Equity
                        </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span> Balance
                        </span>
</div>
</div>
<p className="text-xs text-gray-500 mb-2">Past performance is not indicative of future results.</p>
<div className="h-64">
<div className="h-full">
<canvas id="mainChart"></canvas>
</div>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-4">
<div className="flex items-center gap-2 mb-3">
<i className="h-5 w-5 text-indigo-600" data-lucide="gauge"></i>
<h4 className="text-lg font-semibold tracking-tight">Key Metrics</h4>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-600">Current P/L</span>
<span className="text-sm font-semibold text-gray-900" id="metricPL">$0.00</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-600">Equity</span>
<span className="text-sm font-semibold text-gray-900" id="metricEquity">$10,000</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-600">Balance</span>
<span className="text-sm font-semibold text-gray-900" id="metricBalance">$10,000</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-600">Open Positions</span>
<span className="text-sm font-semibold text-gray-900" id="metricOpen">0</span>
</div>
<div className="pt-3 border-t border-gray-200">
<button className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-300 text-xs font-medium text-gray-900 hover:bg-gray-100" id="refreshMetrics">
<i className="h-4 w-4" data-lucide="refresh-ccw"></i>
                          Refresh
                        </button>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4" id="anchor-trades">

<div className="rounded-xl border border-gray-200 bg-white p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex-center gap-2">
<i className="h-5 w-5 text-indigo-600" data-lucide="radio">
<h4 className="text-lg font-semibold tracking-tight">Open Positions</h4>
</i></div>
<span classtext-xs="" text-gray-500"="">Live</span>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-xs text-gray-500">
<tr className="border-b border-gray-200">
<th className="py-2 text-left font-medium">Symbol</th>
<th className="py-2 text-right font-medium">Side</th>
<th className="py-2 text-right font-medium">Lot</th>
<th className="py-2 text-right font-medium">P/L</th>
</tr>
</thead>
<tbody id="openPositions">
<tr className="border-b border-gray-100">
<td className="py-2">EURUSD</td>
<td className="py-2 text-right"><span className="px-2 py-0.5 rounded text-xs bg-emerald-50 text-emerald-700">Buy</span></td>
<td className="py-2 text-right">0.10</td>
<td className="py-2 text-right text-emerald-600">+$12.40</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-indigo-600" data-lucide="history"></i>
<h4 className="text-lg font-semibold tracking-tight">Recent Trades</h4>
</div>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-gray-300 text-xs font-medium text-gray-900 hover:bg-gray-100">
<i className="h-3.5 w-3.5" data-lucide="download"></i>
                        Export
                      </button>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-xs text-gray-500">
<tr className="border-b border-gray-200">
<th className="py-2 text-left font-medium">Time</th>
<th className="py-2 text-left font-medium">Symbol</th>
<th className="py-2 text-right font-medium">Side</th>
<th className="py-2 text-right font-medium">Result</th>
</tr>
</thead>
<tbody id="tradeHistory">
<tr className="border-b border-gray-100">
<td className="py-2">2025-09-28 10:12</td>
<td className="py-2">GBPUSD</td>
<td className="py-2 text-right"><span className="px-2 py-0.5 rounded text-xs bg-rose-50 text-rose-700">Sell</span></td>
<td className="py-2 text-right text-emerald-600">+$18.75</td>
</tr>
<tr className="border-b border-gray-100">
<td className="py-2">2025-09-28 08:44</td>
<td className="py-2">USDJPY</td>
<td className="py-2 text-right"><span className="px-2 py-0.5 rounded text-xs bg-emerald-50 text-emerald-700">Buy</span></td>
<td className="py-2 text-right text-rose-600">-$6.30</td>
</tr>
<tr>
<td className="py-2">2025-09-27 16:02</td>
<td className="py-2">XAUUSD</td>
<td className="py-2 text-right"><span className="px-2 py-0.5 rounded text-xs bg-emerald-50 text-emerald-700">Buy</span></td>
<td className="py-2 text-right text-emerald-600">+$42.10</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-4" id="anchor-settings">

<div className="md:col-span-2 rounded-xl border border-gray-200 bg-white p-4">
<div className="flex items-center gap-2 mb-3">
<i className="h-5 w-5 text-indigo-600" data-lucide="sliders"></i>
<h4 className="text-lg font-semibold tracking-tight">Bot Settings</h4>
</div>
<div className="grid sm:grid-cols-3 gap-3">
<div>
<label className="block text-xs text-gray-600 mb-1">Fixed Lot Size</label>
<input className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" id="lotSize" min="0.01" step="0.01" type="number" value="0.10"/>
</div>
<div>
<label className="block text-xs text-gray-600 mb-1">Max Positions</label>
<input className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" id="maxPositions" min="1" step="1" type="number" value="3"/>
</div>
<div>
<label className="block text-xs text-gray-600 mb-1">Max Drawdown %</label>
<input className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" id="maxDD" max="50" min="1" step="1" type="number" value="15"/>
</div>
<div>
<label className="block text-xs text-gray-600 mb-1">Stop Loss (pips)</label>
<input className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" id="slPips" min="5" step="1" type="number" value="25"/>
</div>
<div>
<label className="block text-xs text-gray-600 mb-1">Take Profit (pips)</label>
<input className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" id="tpPips" min="5" step="1" type="number" value="40"/>
</div>
<div>
<label className="block text-xs text-gray-600 mb-1">Trading Hours</label>
<input className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600" id="hours" type="text" value="Mon–Fri 24/5"/>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 text-xs font-medium text-gray-900 hover:bg-gray-100" id="toggleAutoUpdate">
<i className="h-4 w-4" data-lucide="toggle-left"></i>
                          Auto-update off
                        </button>
<span className="text-xs text-gray-500">Apply settings immediately when the bot is running.</span>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700" id="saveSettings">
<i className="h-4 w-4" data-lucide="save"></i>
                        Save
                      </button>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-4" id="anchor-vps">
<div className="flex items-center gap-2 mb-3">
<i className="h-5 w-5 text-indigo-600" data-lucide="cpu"></i>
<h4 className="text-lg font-semibold tracking-tight">VPS Status</h4>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-gray-600">Connection</div>
<div className="text-base font-semibold text-gray-900" id="vpsState">Offline</div>
</div>
<div className="text-right">
<div className="text-sm text-gray-600">Latency</div>
<div className="text-base font-semibold text-gray-900" id="vpsLatency">—</div>
</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-center">
<div className="rounded-md border border-gray-200 p-2">
<div className="text-[11px] text-gray-500">CPU</div>
<div className="text-sm font-semibold text-gray-900" id="vpsCPU">—</div>
</div>
<div className="rounded-md border border-gray-200 p-2">
<div className="text-[11px] text-gray-500">RAM</div>
<div className="text-sm font-semibold text-gray-900" id="vpsRAM">—</div>
</div>
<div className="rounded-md border border-gray-200 p-2">
<div className="text-[11px] text-gray-500">Uptime</div>
<div className="text-sm font-semibold text-gray-900" id="vpsUptime">—</div>
</div>
</div>
<div className="mt-3">
<button className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-900 hover:bg-gray-100" id="rebootVPS">
<i className="h-4 w-4" data-lucide="power"></i>
                        Reboot VPS
                      </button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white">
<div className="grid grid-cols-4">
<button className="mob-tab py-2 flex flex-col items-center text-xs text-gray-600" data-anchor="overview">
<i className="h-5 w-5" data-lucide="home"></i>
                  Home
                </button>
<button className="mob-tab py-2 flex flex-col items-center text-xs text-gray-600" data-anchor="connection">
<i className="h-5 w-5" data-lucide="plug-2"></i>
                  Connect
                </button>
<button className="mob-tab py-2 flex flex-col items-center text-xs text-gray-600" data-anchor="performance">
<i className="h-5 w-5" data-lucide="chart-line"></i>
                  Chart
                </button>
<button className="mob-tab py-2 flex flex-col items-center text-xs text-gray-600" data-anchor="trades">
<i className="h-5 w-5" data-lucide="history"></i>
                  Trades
                </button>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
