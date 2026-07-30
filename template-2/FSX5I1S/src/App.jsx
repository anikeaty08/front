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
      
      // Init icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Utility: formatters
      const fmtUSD = (v) => {
        try {
          return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);
        } catch {
          return '$' + Math.round(v).toLocaleString();
        }
      };
      const fmtDate = (d) => {
        const dd = new Date(d);
        const y = dd.getFullYear();
        const m = String(dd.getMonth() + 1).padStart(2, '0');
        const day = String(dd.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
      };

      // Generate mock BTC daily data (365 days)
      function generateMockData(days = 365) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const start = new Date(today);
        start.setDate(start.getDate() - (days - 1));

        const labels = [];
        const prices = [];
        let price = 42000 + Math.random() * 8000;

        for (let i = 0; i < days; i++) {
          const d = new Date(start);
          d.setDate(d.getDate() + i);
          labels.push(d);
          // Random walk with some volatility
          const drift = 0.04; // daily drift factor
          const vol = 0.035;  // daily volatility
          const shock = (Math.random() - 0.5) * 2 * vol * price;
          price = Math.max(12000, price * (1 + (Math.random() - 0.5) * drift) + shock);
          prices.push(price);
        }
        return { labels, prices };
      }

      // Global State
      const state = {
        data: generateMockData(365),
        windowDays: 90, // fixed 3 months
        startIndex: null, // computed later (default to latest window)
        charts: {
          main: null,
          nav: null
        }
      };
      state.startIndex = state.data.labels.length - state.windowDays; // align to latest initially

      // Elements
      const mainCanvas = document.getElementById('mainChart');
      const navCanvas = document.getElementById('navChart');
      const navContainer = document.getElementById('navigatorContainer');
      const overlay = document.getElementById('selectionOverlay');
      const rangeLabel = document.getElementById('range-label');
      const statPrice = document.getElementById('stat-price');
      const statChange = document.getElementById('stat-change');
      const btnSnapLatest = document.getElementById('snap-latest');
      const btnResetData = document.getElementById('reset-data');

      // Compute selected slice
      function getSelectedSlice() {
        const start = state.startIndex;
        const end = start + state.windowDays;
        const labels = state.data.labels.slice(start, end);
        const prices = state.data.prices.slice(start, end);
        return { labels, prices };
      }

      // Update range label and stats
      function updateLabelsAndStats() {
        const { labels, prices } = getSelectedSlice();
        const startDate = fmtDate(labels[0]);
        const endDate = fmtDate(labels[labels.length - 1]);
        rangeLabel.textContent = `${startDate} ~ ${endDate}`;

        const latest = prices[prices.length - 1];
        const first = prices[0];
        statPrice.textContent = fmtUSD(latest);
        const chg = latest - first;
        const pct = (chg / first) * 100;
        const isUp = chg >= 0;
        statChange.textContent = `${isUp ? '+' : ''}${chg.toFixed(0)} (${isUp ? '+' : ''}${pct.toFixed(2)}%)`;
        statChange.className = 'text-sm font-medium ' + (isUp ? 'text-emerald-400' : 'text-rose-400');
      }

      // Create gradient
      function createGradient(ctx, area) {
        const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
        gradient.addColorStop(0, 'rgba(16,185,129,0.0)');  // emerald-500 @ 0
        gradient.addColorStop(0.6, 'rgba(16,185,129,0.10)');
        gradient.addColorStop(1, 'rgba(16,185,129,0.25)');
        return gradient;
      }

      // Init Main Chart
      function initMainChart() {
        const { labels, prices } = getSelectedSlice();
        const ctx = mainCanvas.getContext('2d');
        const mainChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels.map(fmtDate),
            datasets: [{
              label: 'BTC/USD',
              data: prices,
              borderColor: '#34d399', // emerald-400
              borderWidth: 2,
              pointRadius: 0,
              tension: 0.25,
              fill: true,
              backgroundColor: (context) => {
                const { chart } = context;
                const { ctx, chartArea } = chart;
                if (!chartArea) return null;
                return createGradient(ctx, chartArea);
              }
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(23,23,23,0.9)',
                borderColor: 'rgba(64,64,64,0.9)',
                borderWidth: 1,
                titleColor: '#e5e7eb',
                bodyColor: '#d1d5db',
                padding: 10,
                displayColors: false,
                callbacks: {
                  label: (ctx) => ` ${fmtUSD(ctx.parsed.y)}`
                }
              }
            },
            scales: {
              x: {
                ticks: { color: '#9ca3af', maxRotation: 0, autoSkip: true },
                grid: { color: 'rgba(75,85,99,0.2)', drawBorder: false }
              },
              y: {
                ticks: {
                  color: '#9ca3af',
                  callback: (v) => '$' + (v >= 1000 ? Math.round(v).toLocaleString() : v)
                },
                grid: { color: 'rgba(75,85,99,0.25)', drawBorder: false }
              }
            }
          }
        });
        state.charts.main = mainChart;
      }

      // Init Navigator Chart
      function initNavChart() {
        const ctx = navCanvas.getContext('2d');
        const navChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: state.data.labels.map(fmtDate),
            datasets: [{
              label: '全年',
              data: state.data.prices,
              borderColor: 'rgba(148,163,184,0.6)', // slate-400
              borderWidth: 1.5,
              pointRadius: 0,
              tension: 0.2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: {
              x: {
                ticks: { display: false },
                grid: { display: false, drawBorder: false }
              },
              y: {
                ticks: { display: false },
                grid: { display: false, drawBorder: false }
              }
            }
          }
        });
        state.charts.nav = navChart;
      }

      // Update Main Chart with new window
      function updateMainChart() {
        const { labels, prices } = getSelectedSlice();
        const chart = state.charts.main;
        if (!chart) return;
        chart.data.labels = labels.map(fmtDate);
        chart.data.datasets[0].data = prices;
        chart.update('none');
        updateLabelsAndStats();
      }

      // Overlay positioning helpers
      function setOverlayPositionFromIndex() {
        const total = state.data.labels.length;
        const wDays = state.windowDays;
        const containerRect = navContainer.getBoundingClientRect();
        const innerLeft = 0;
        const innerWidth = containerRect.width;

        const widthPx = innerWidth * (wDays / total);
        overlay.style.width = widthPx + 'px';

        const maxLeft = Math.max(0, innerWidth - widthPx);
        const ratio = state.startIndex / (total - wDays);
        const leftPx = maxLeft * ratio;
        overlay.style.left = leftPx + 'px';
      }

      function setIndexFromOverlayPosition() {
        const total = state.data.labels.length;
        const wDays = state.windowDays;

        const containerRect = navContainer.getBoundingClientRect();
        const innerWidth = containerRect.width;
        const widthPx = parseFloat(overlay.style.width || '0');
        const maxLeft = Math.max(0, innerWidth - widthPx);
        const leftPx = parseFloat(overlay.style.left || '0');

        const ratio = maxLeft > 0 ? (leftPx / maxLeft) : 0;
        const idx = Math.round(ratio * (total - wDays));
        state.startIndex = Math.max(0, Math.min(idx, total - wDays));
      }

      // Drag logic (fixed-size window: drag anywhere moves the window)
      let isDragging = false;
      let dragStartX = 0;
      let overlayStartLeft = 0;

      function beginDrag(clientX) {
        isDragging = true;
        dragStartX = clientX;
        overlayStartLeft = parseFloat(overlay.style.left || '0');
        overlay.classList.add('ring-neutral-400');
      }

      function onDrag(clientX) {
        if (!isDragging) return;
        const dx = clientX - dragStartX;

        const containerRect = navContainer.getBoundingClientRect();
        const innerWidth = containerRect.width;
        const widthPx = parseFloat(overlay.style.width || '0');
        const maxLeft = Math.max(0, innerWidth - widthPx);

        let nextLeft = overlayStartLeft + dx;
        nextLeft = Math.max(0, Math.min(nextLeft, maxLeft));
        overlay.style.left = nextLeft + 'px';

        setIndexFromOverlayPosition();
        updateMainChart();
      }

      function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        overlay.classList.remove('ring-neutral-400');
      }

      // Pointer events
      function attachDragHandlers() {
        const startDrag = (e) => {
          e.preventDefault();
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          beginDrag(clientX);
        };
        const moveDrag = (e) => {
          if (!isDragging) return;
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          onDrag(clientX);
        };
        const stopDrag = () => endDrag();

        // Start dragging on overlay + handles
        overlay.addEventListener('mousedown', startDrag);
        overlay.addEventListener('touchstart', startDrag, { passive: false });

        window.addEventListener('mousemove', moveDrag, { passive: true });
        window.addEventListener('touchmove', moveDrag, { passive: false });

        window.addEventListener('mouseup', stopDrag);
        window.addEventListener('touchend', stopDrag);
        window.addEventListener('touchcancel', stopDrag);
      }

      // Resize handling to keep overlay proportion
      const ro = new ResizeObserver(() => {
        setOverlayPositionFromIndex();
      });

      // Buttons
      btnSnapLatest.addEventListener('click', () => {
        state.startIndex = state.data.labels.length - state.windowDays;
        setOverlayPositionFromIndex();
        updateMainChart();
      });

      btnResetData.addEventListener('click', () => {
        state.data = generateMockData(365);
        // Update navigator data
        const nav = state.charts.nav;
        nav.data.labels = state.data.labels.map(fmtDate);
        nav.data.datasets[0].data = state.data.prices;
        nav.update('none');

        // Snap to latest window
        state.startIndex = state.data.labels.length - state.windowDays;
        setOverlayPositionFromIndex();
        updateMainChart();
      });

      // Init flow
      function init() {
        initMainChart();
        initNavChart();
        setOverlayPositionFromIndex();
        updateMainChart();
        attachDragHandlers();
        ro.observe(navContainer);
      }

      // Kickoff when ready
      window.addEventListener('load', init);
    
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

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/70 border-b border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 ring-1 ring-neutral-800 flex items-center justify-center text-neutral-200 tracking-tight font-semibold">
              BTC
            </div>
<div>
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">比特币价格分时图</h1>
<p className="text-xs sm:text-sm text-neutral-400">窗口固定为3个月，可左右拖拽调整范围</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900/70 ring-1 ring-neutral-800">
<i className="w-4 h-4 text-amber-400" data-lucide="coins"></i>
<span className="text-sm font-medium text-white" id="stat-price">--</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900/70 ring-1 ring-neutral-800">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span className="text-sm font-medium" id="stat-change">--</span>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<section className="mb-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 ring-1 ring-neutral-800">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span className="text-sm font-medium text-neutral-300" id="range-label">--</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 ring-1 ring-neutral-800">
<i className="w-4 h-4" data-lucide="clock"></i>
<span className="text-sm text-neutral-400">窗口长度：3个月</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="group inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 ring-1 ring-neutral-800 hover:ring-neutral-700 transition-colors" id="snap-latest">
<i className="w-4 h-4" data-lucide="chevrons-right"></i>
<span className="text-neutral-200">对齐至最新</span>
</button>
<button className="group inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 ring-1 ring-neutral-800 hover:ring-neutral-700 transition-colors" id="reset-data">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>
<span className="text-neutral-200">重置模拟数据</span>
</button>
</div>
</div>
</section>

<section className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden">
<div className="px-4 sm:px-6 pt-4 sm:pt-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-white">价格（USD）</h2>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-800/80 ring-1 ring-neutral-800">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span> 窗口数据
                </span>
<span className="hidden sm:inline text-neutral-500">·</span>
<span className="hidden sm:inline">悬停查看具体数值</span>
</div>
</div>
</div>
<div className="px-2 sm:px-4">

<div className="relative">
<div className="h-[320px] sm:h-[420px]">
<div className="w-full h-full">
<canvas id="mainChart"></canvas>
</div>
</div>
</div>
</div>
<div className="px-4 sm:px-6 pb-4 sm:pb-6">
<div className="mt-4 border-t border-neutral-800 pt-4">
<p className="text-xs text-neutral-400">
                提示：下方导航中浅色选框为固定3个月窗口，可按住选框或两侧把手水平拖拽移动。
              </p>
</div>
</div>
</section>

<section className="mt-6 rounded-xl border border-neutral-800 bg-neutral-900/40 overflow-hidden">
<div className="px-4 sm:px-6 pt-4 sm:pt-5">
<div className="flex items-center justify-between">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">全年范围导航</h3>
<div className="text-xs text-neutral-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="move-horizontal"></i>
<span>拖动选框以移动窗口</span>
</div>
</div>
</div>
<div className="px-2 sm:px-4 pb-4 sm:pb-6">
<div className="relative mt-3 select-none rounded-lg bg-neutral-950/60 ring-1 ring-neutral-800 hover:ring-neutral-700 transition-colors" id="navigatorContainer">

<div className="w-full h-[120px] sm:h-[140px]">
<div className="w-full h-full">
<canvas id="navChart"></canvas>
</div>
</div>

<div className="absolute top-2 bottom-2 sm:top-3 sm:bottom-3 rounded-md bg-neutral-200/10 ring-1 ring-neutral-500/40 backdrop-blur-sm cursor-grab active:cursor-grabbing transition-all" id="selectionOverlay" style={{left: `0px`, width: `200px`}}>

<div className="absolute inset-y-0 left-0 w-4 sm:w-5 flex items-center justify-center group">
<div className="h-10 sm:h-12 w-px bg-neutral-500/60 group-hover:bg-neutral-300/70 transition-colors"></div>
<div className="absolute -left-2 sm:-left-2.5 top-1/2 -translate-y-1/2 h-6 w-6 rounded-md bg-neutral-900/90 ring-1 ring-neutral-700 hover:ring-neutral-500 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="chevrons-left-right"></i>
</div>
</div>
<div className="absolute inset-y-0 right-0 w-4 sm:w-5 flex items-center justify-center group">
<div className="h-10 sm:h-12 w-px bg-neutral-500/60 group-hover:bg-neutral-300/70 transition-colors"></div>
<div className="absolute -right-2 sm:-right-2.5 top-1/2 -translate-y-1/2 h-6 w-6 rounded-md bg-neutral-900/90 ring-1 ring-neutral-700 hover:ring-neutral-500 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="chevrons-left-right"></i>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 -top-3 sm:-top-3.5 px-2 py-0.5 rounded bg-neutral-900/90 ring-1 ring-neutral-700 text-[10px] sm:text-xs text-neutral-300">
                  固定3个月
                </div>
</div>
</div>
</div>
</section>
</main>
<footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-xs text-neutral-500">
<div className="flex items-center justify-between border-t border-neutral-900 pt-6">
<span>示例数据为随机模拟，仅用于演示交互</span>
<span className="hidden sm:inline">© 2025</span>
</div>
</footer>
</div>


    </>
  );
}
