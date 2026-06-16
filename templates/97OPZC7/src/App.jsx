import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons
      function renderIcons() {
        try { lucide.createIcons(); } catch(e) {}
      }

      // Charts
      let sideChart, analysisChart;

      function initSideChart() {
        const ctx = document.getElementById('sideChart');
        if (!ctx) return;
        const data = [85, 92, 90, 96, 102, 98, 108, 112, 120, 118, 125, 132];
        sideChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
              data,
              fill: true,
              borderColor: '#2dd4bf',
              backgroundColor: 'rgba(45,212,191,0.08)',
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: true, intersect: false, mode: 'index' } },
            scales: {
              x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 10 } } },
              y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 10 } } }
            }
          }
        });
      }

      function initAnalysisChart(values) {
        const ctx = document.getElementById('analysisChart');
        if (!ctx) return;
        if (analysisChart) analysisChart.destroy();
        analysisChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
              data: values,
              fill: true,
              borderColor: '#a78bfa',
              backgroundColor: 'rgba(167,139,250,0.10)',
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: true, intersect: false, mode: 'index' } },
            scales: {
              x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 10 } } },
              y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 10 } } }
            }
          }
        });
      }

      // Mock AI data
      const MOCK_ITEMS = [
        {
          title: 'Levi’s Trucker Denim Jacket Type III',
          subtitle: 'Manufactured 1994 · Selvedge denim',
          msrp: 59,
          now: [75, 95],
          sales: [82, 88, 94, 90],
          conf: 0.93,
          trend: [60, 62, 65, 68, 70, 74, 76, 80, 84, 90, 92, 95]
        },
        {
          title: 'Polaroid SX‑70 Land Camera',
          subtitle: 'Manufactured 1972 · Instant film camera',
          msrp: 180,
          now: [160, 220],
          sales: [175, 189, 205, 198],
          conf: 0.91,
          trend: [120, 130, 135, 140, 145, 150, 160, 168, 175, 185, 195, 205]
        },
        {
          title: 'Corning Ware Blue Cornflower Casserole 2.5L',
          subtitle: 'Manufactured 1965 · Bakeware',
          msrp: 12,
          now: [35, 55],
          sales: [38, 45, 49, 52],
          conf: 0.89,
          trend: [24, 26, 28, 31, 33, 34, 36, 38, 42, 46, 50, 52]
        },
        {
          title: 'Apple iPod Classic (5th Gen) 30GB',
          subtitle: 'Manufactured 2005 · Portable media player',
          msrp: 299,
          now: [85, 140],
          sales: [95, 110, 120, 135],
          conf: 0.95,
          trend: [70, 74, 76, 78, 82, 88, 90, 95, 102, 110, 118, 130]
        }
      ];

      // DOM refs
      const fileInput = document.getElementById('fileInput');
      const triggerFile = document.getElementById('triggerFile');
      const dropzone = document.getElementById('dropzone');
      const dropContent = document.getElementById('dropContent');
      const preview = document.getElementById('preview');

      const analyzeBtn = document.getElementById('analyzeBtn');
      const flipBtn = document.getElementById('flipBtn');

      const skeleton = document.getElementById('skeleton');
      const placeholder = document.getElementById('placeholder');
      const resultContent = document.getElementById('resultContent');

      const itemTitle = document.getElementById('itemTitle');
      const itemSubtitle = document.getElementById('itemSubtitle');
      const msrp = document.getElementById('msrp');
      const nowValue = document.getElementById('nowValue');
      const soldChips = document.getElementById('soldChips');
      const confidence = document.getElementById('confidence');
      const median = document.getElementById('median');

      // Helpers
      function formatMoney(n) {
        return `$${n.toFixed(0)}`;
      }
      function medianOf(arr) {
        const a = [...arr].sort((x,y)=>x-y);
        const mid = Math.floor(a.length/2);
        return a.length % 2 ? a[mid] : (a[mid-1] + a[mid]) / 2;
      }

      function showToast(title, msg) {
        const t = document.getElementById('toast');
        if (!t) return;
        if (title) document.getElementById('toastTitle').textContent = title;
        if (msg) document.getElementById('toastMsg').textContent = msg;
        t.classList.remove('hidden');
        setTimeout(hideToast, 3200);
        renderIcons();
      }
      function hideToast() {
        const t = document.getElementById('toast');
        if (!t) return;
        t.classList.add('hidden');
      }

      // Upload handling
      triggerFile.addEventListener('click', () => fileInput.click());

      fileInput.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        preview.src = url;
        preview.classList.remove('hidden');
        dropContent.classList.add('hidden');
        analyzeBtn.disabled = false;
        placeholder.classList.remove('hidden');
        resultContent.classList.add('hidden');
        flipBtn.disabled = true;
        renderIcons();
      });

      // Drag & drop
      ;['dragenter','dragover'].forEach(evt => {
        dropzone.addEventListener(evt, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.add('border-white/25');
        });
      });
      ;['dragleave','drop'].forEach(evt => {
        dropzone.addEventListener(evt, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.remove('border-white/25');
        });
      });
      dropzone.addEventListener('drop', (e) => {
        const file = e.dataTransfer.files?.[0];
        if (!file) return;
        fileInput.files = e.dataTransfer.files;
        const url = URL.createObjectURL(file);
        preview.src = url;
        preview.classList.remove('hidden');
        dropContent.classList.add('hidden');
        analyzeBtn.disabled = false;
        placeholder.classList.remove('hidden');
        resultContent.classList.add('hidden');
        flipBtn.disabled = true;
        renderIcons();
      });

      // Analyze simulation
      analyzeBtn.addEventListener('click', () => {
        placeholder.classList.add('hidden');
        resultContent.classList.add('hidden');
        skeleton.classList.remove('hidden');
        renderIcons();

        setTimeout(() => {
          const item = MOCK_ITEMS[Math.floor(Math.random() * MOCK_ITEMS.length)];

          itemTitle.textContent = item.title;
          itemSubtitle.textContent = item.subtitle;
          msrp.textContent = formatMoney(item.msrp);
          nowValue.textContent = `${formatMoney(item.now[0])}–${formatMoney(item.now[1])}`;
          confidence.textContent = `${Math.round(item.conf * 100)}% confident`;

          // Chips
          soldChips.innerHTML = '';
          item.sales.forEach(val => {
            const chip = document.createElement('span');
            chip.className = 'inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs';
            chip.innerHTML = `<i data-lucide="badge-dollar-sign" class="w-3.5 h-3.5 stroke-[1.5] text-teal-300"></i>${formatMoney(val)}`;
            soldChips.appendChild(chip);
          });

          median.textContent = formatMoney(medianOf(item.trend));

          initAnalysisChart(item.trend);

          skeleton.classList.add('hidden');
          resultContent.classList.remove('hidden');
          flipBtn.disabled = false;
          renderIcons();
        }, 1000 + Math.random()*600);
      });

      // Market connect toggles
      document.querySelectorAll('.market-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const active = btn.classList.toggle('active');
          if (active) {
            btn.classList.add('ring-1','ring-teal-500/30','bg-teal-500/10','border-teal-500/30');
          } else {
            btn.classList.remove('ring-1','ring-teal-500/30','bg-teal-500/10','border-teal-500/30');
          }
          const status = btn.querySelector('.status');
          if (status) status.textContent = active ? 'Connected' : 'Connect';
        });
      });

      // Flip action simulation
      flipBtn.addEventListener('click', () => {
        flipBtn.disabled = true;
        flipBtn.innerHTML = `<svg class="animate-spin -ml-0.5 mr-2 h-4 w-4 text-teal-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle><path class="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"></path></svg>Posting…`;
        setTimeout(() => {
          flipBtn.disabled = false;
          flipBtn.innerHTML = `<i data-lucide="send" class="w-4 h-4 stroke-[1.5]"></i>Flip it (auto‑post)`;
          showToast('Listings created','Drafts posted to Marketplace, eBay, and Poshmark. We’ll remove all when sold.');
          renderIcons();
        }, 1400);
      });

      // Copy GoDaddy steps
      const copyGoDaddyBtn = document.getElementById('copyGoDaddyBtn');
      if (copyGoDaddyBtn) {
        copyGoDaddyBtn.addEventListener('click', async () => {
          const steps = [
            'GoDaddy deployment (static page):',
            '',
            'Linux Hosting (cPanel)',
            '1) Save this page as index.html.',
            '2) GoDaddy → My Products → Web Hosting → Manage → cPanel Admin.',
            '3) File Manager → public_html.',
            '4) Upload index.html (and any assets).',
            '5) Visit your domain and hard‑refresh if cached.',
            '',
            'Managed WordPress',
            '• Easiest: create a subdomain on Linux Hosting and upload index.html there.',
            '• Or add a custom page template and paste this markup.',
            '',
            'Website Builder',
            '1) Add a new section → HTML embed.',
            '2) Paste the full markup and publish.',
            '',
            'Tip: Turn on SSL (HTTPS) and redirect http → https.'
          ].join('\n');
          try {
            await navigator.clipboard.writeText(steps);
            const ack = document.getElementById('copyAck');
            if (ack) {
              ack.classList.remove('hidden');
              setTimeout(() => ack.classList.add('hidden'), 1800);
            }
            showToast('Copied','GoDaddy steps copied to clipboard.');
          } catch (e) {
            showToast('Copy failed','Please try again or copy manually.');
          }
        });
      }

      // Init
      window.addEventListener('DOMContentLoaded', () => {
        renderIcons();
        initSideChart();
        initAnalysisChart([0,0,0,0,0,0,0,0,0,0,0,0]); // placeholder
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 50%, #22d3ee33 0%, transparent 60%)'}}></div>
<div className="absolute top-16 right-0 h-[520px] w-[520px] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(60% 60% at 50% 50%, #818cf833 0%, transparent 60%)'}}></div>
</div>

<div className="fixed top-4 inset-x-0 mx-auto w-full max-w-md px-4 z-50 hidden" id="toast">
<div className="rounded-xl border border-teal-500/30 bg-[#0D1414]/80 backdrop-blur p-4 shadow-lg shadow-black/40 flex items-start gap-3">
<i className="w-5 h-5 text-teal-400 stroke-[1.5] shrink-0" data-lucide="check-circle-2"></i>
<div className="text-sm">
<p className="font-medium text-teal-200" id="toastTitle">Listings created</p>
<p className="text-neutral-300/90" id="toastMsg">Drafts posted to Marketplace, eBay, and Poshmark. We’ll remove all when sold.</p>
</div>
<button className="ml-auto text-neutral-400 hover:text-neutral-200 transition-colors" onclick="hideToast()">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="x"></i>
</button>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-white/5 bg-[#0B0E12]/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 grid place-content-center">
<span className="text-[11px] font-semibold tracking-tight">FP</span>
</div>
<span className="text-sm md:text-base font-semibold tracking-tight">FliprPic.com</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how">How it works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-2">
<button className="text-sm text-neutral-300 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 transition-colors">
              Sign in
            </button>
<button className="text-sm px-3.5 py-2 rounded-md bg-white text-black hover:bg-neutral-100 transition-colors">
              Get started
            </button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 pt-14 md:pt-20 pb-12 md:pb-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-300">
<i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="sparkles"></i>
              AI for garage sellers, flippers &amp; thrifters
            </div>
<h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">
              Snap a photo. Get the value. Auto‑post everywhere.
            </h1>
<p className="mt-4 text-neutral-300 text-base md:text-lg">
              Identify any item, see price history and the last 4 sales, then list in one click on your connected selling apps. We remove duplicates when it sells.
            </p>

<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5">
<div className="grid grid-cols-1 md:grid-cols-12 gap-5">

<div className="md:col-span-5">
<div className="group relative rounded-xl border border-dashed border-white/15 bg-black/20 hover:border-white/25 transition-colors p-4 aspect-[4/3] grid place-content-center overflow-hidden" id="dropzone">
<input accept="image/*" capture="environment" className="hidden" id="fileInput" type="file"/>
<div className="flex flex-col items-center justify-center text-center" id="dropContent">
<div className="h-12 w-12 rounded-lg bg-white/5 grid place-content-center ring-1 ring-white/10">
<i className="w-6 h-6 stroke-[1.5] text-neutral-200" data-lucide="camera"></i>
</div>
<p className="mt-3 text-sm text-neutral-300">
                        Drag &amp; drop or
                        <button className="underline underline-offset-4 hover:text-white" id="triggerFile">upload a photo</button>
</p>
<p className="text-xs text-neutral-400 mt-1">JPG, PNG — up to 10MB</p>
</div>
<img alt="Preview" className="absolute inset-0 h-full w-full object-cover hidden" id="preview"/>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="shield-check"></i>
                    Images never shared without permission
                  </div>
</div>

<div className="md:col-span-7">

<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm hover:bg-white/15 hover:border-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="analyzeBtn">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="search"></i>
                      Analyze photo
                    </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-teal-500/20 text-teal-200 bg-teal-500/10 px-3 py-2 text-sm hover:bg-teal-500/20 hover:border-teal-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="flipBtn">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="send"></i>
                      Flip it (auto‑post)
                    </button>
<div className="ml-auto flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="clock"></i>
                      Typical result in <span className="text-neutral-300"> ~2s</span>
</div>
</div>

<div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4" id="resultCard">

<div className="space-y-3 hidden" id="skeleton">
<div className="h-5 w-1/2 bg-white/5 rounded animate-pulse"></div>
<div className="h-4 w-2/3 bg-white/5 rounded animate-pulse"></div>
<div className="grid grid-cols-2 gap-3">
<div className="h-16 bg-white/5 rounded-lg animate-pulse"></div>
<div className="h-16 bg-white/5 rounded-lg animate-pulse"></div>
</div>
<div className="h-40 bg-white/5 rounded-lg animate-pulse"></div>
</div>

<div className="hidden" id="resultContent">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg md:text-xl font-semibold tracking-tight" id="itemTitle">—</h3>
<p className="text-sm text-neutral-300 mt-1" id="itemSubtitle">—</p>
</div>
<div className="flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1">
<i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="badge-dollar-sign"></i>
<span id="confidence">—</span>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="text-xs text-neutral-400">Original MSRP</div>
<div className="text-base font-medium mt-0.5" id="msrp">$—</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="text-xs text-neutral-400">Estimated value now</div>
<div className="text-base font-medium mt-0.5 text-teal-300" id="nowValue">$—</div>
</div>
</div>
<div className="mt-4">
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-400">Last 4 online sales</div>
<a className="text-xs text-neutral-300 hover:text-white inline-flex items-center gap-1" href="#">
                            View sources
                            <i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="external-link"></i>
</a>
</div>
<div className="mt-2 flex flex-wrap gap-2" id="soldChips"></div>
</div>
<div className="mt-5">
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-400">Value trend (12 mo)</div>
<div className="text-xs text-neutral-400">Median: <span className="text-neutral-200" id="median">$—</span></div>
</div>
<div className="mt-2 rounded-lg border border-white/10 bg-white/5 p-3">
<div className="relative h-40">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="analysisChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-5 border-t border-white/10 pt-4">
<div className="flex flex-wrap items-center gap-3">
<div className="text-xs text-neutral-400">Auto‑post to</div>
<button className="market-btn group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10 transition-colors" data-market="marketplace">
<span className="h-5 w-5 grid place-content-center rounded-full bg-neutral-900 ring-1 ring-white/10 text-[10px] font-semibold tracking-tight">F</span>
                            Marketplace
                            <span className="ml-1 inline-flex items-center gap-1 text-[10px] text-neutral-400 group-[.active]:text-teal-300">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="link"></i>
<span className="status">Connect</span>
</span>
</button>
<button className="market-btn group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10 transition-colors" data-market="ebay">
<span className="h-5 w-5 grid place-content-center rounded-full bg-neutral-900 ring-1 ring-white/10 text-[10px] font-semibold tracking-tight">e</span>
                            eBay
                            <span className="ml-1 inline-flex items-center gap-1 text-[10px] text-neutral-400 group-[.active]:text-teal-300">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="link"></i>
<span className="status">Connect</span>
</span>
</button>
<button className="market-btn group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10 transition-colors" data-market="poshmark">
<span className="h-5 w-5 grid place-content-center rounded-full bg-neutral-900 ring-1 ring-white/10 text-[10px] font-semibold tracking-tight">P</span>
                            Poshmark
                            <span className="ml-1 inline-flex items-center gap-1 text-[10px] text-neutral-400 group-[.active]:text-teal-300">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="link"></i>
<span className="status">Connect</span>
</span>
</button>
<button className="market-btn group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10 transition-colors" data-market="mercari">
<span className="h-5 w-5 grid place-content-center rounded-full bg-neutral-900 ring-1 ring-white/10 text-[10px] font-semibold tracking-tight">M</span>
                            Mercari
                            <span className="ml-1 inline-flex items-center gap-1 text-[10px] text-neutral-400 group-[.active]:text-teal-300">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="link"></i>
<span className="status">Connect</span>
</span>
</button>
</div>
</div>
</div>

<div className="text-sm text-neutral-400" id="placeholder">
                      Upload a photo to see instant identification, price history, comps, and one‑click listing across your apps.
                    </div>
</div>
</div>
</div>
</div>

<div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="bell"></i>
                Deal alerts for saved searches
              </div>
<span className="h-4 w-px bg-white/10"></span>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="list-checks"></i>
                Auto remove sold from all listings
              </div>
<span className="h-4 w-px bg-white/10"></span>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="file-text"></i>
                AI descriptions + photo cleanup
              </div>
</div>
</div>

<aside className="lg:col-span-5">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/20 p-4 md:p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300">Live demo</div>
<div className="inline-flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1">
<i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="activity"></i>
                  Real‑time comps
                </div>
</div>
<div className="mt-3 overflow-hidden rounded-xl border border-white/10">
<img alt="Demo item" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="mt-4">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight">Nintendo Game Boy Color — Atomic Purple</h3>
<p className="text-sm text-neutral-300 mt-1">Manufactured 1998 · Handheld console</p>
</div>
<div className="text-right">
<div className="text-xs text-neutral-400">Worth today</div>
<div className="text-base font-medium text-teal-300">$120–$140</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="text-xs text-neutral-400">Original MSRP</div>
<div className="text-base font-medium mt-0.5">$69.99</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="text-xs text-neutral-400">Condition</div>
<div className="text-base font-medium mt-0.5">Good</div>
</div>
</div>
<div className="mt-4">
<div className="text-xs text-neutral-400">Last 4 sales</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs"><i className="w-3.5 h-3.5 stroke-[1.5] text-teal-300" data-lucide="badge-dollar-sign"></i>$115</span>
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs"><i className="w-3.5 h-3.5 stroke-[1.5] text-teal-300" data-lucide="badge-dollar-sign"></i>$123</span>
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs"><i className="w-3.5 h-3.5 stroke-[1.5] text-teal-300" data-lucide="badge-dollar-sign"></i>$119</span>
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs"><i className="w-3.5 h-3.5 stroke-[1.5] text-teal-300" data-lucide="badge-dollar-sign"></i>$130</span>
</div>
</div>
<div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3">
<div className="relative h-40">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="sideChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white text-black px-3 py-2 text-sm hover:bg-neutral-100 transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="wand-2"></i>
                    Generate listing
                  </button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="share-2"></i>
                    Share
                  </button>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/5" id="how">
<div className="mx-auto max-w-7xl px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="h-9 w-9 rounded-md bg-white/10 grid place-content-center">
<i className="w-4.5 h-4.5 stroke-[1.5]" data-lucide="camera"></i>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight">Snap or upload</h3>
<p className="mt-1 text-sm text-neutral-300">Point at anything: clothes, collectibles, antiques, tools—our model tags it instantly.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="h-9 w-9 rounded-md bg-white/10 grid place-content-center">
<i className="w-4.5 h-4.5 stroke-[1.5]" data-lucide="id-card"></i>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight">Identify &amp; date</h3>
<p className="mt-1 text-sm text-neutral-300">Model, year, material, and original MSRP with confidence score.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="h-9 w-9 rounded-md bg-white/10 grid place-content-center">
<i className="w-4.5 h-4.5 stroke-[1.5]" data-lucide="bar-chart-3"></i>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight">Price &amp; comps</h3>
<p className="mt-1 text-sm text-neutral-300">Cross‑market search with deduped comps and the last 4 sales.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="h-9 w-9 rounded-md bg-white/10 grid place-content-center">
<i className="w-4.5 h-4.5 stroke-[1.5]" data-lucide="send"></i>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight">Auto‑post &amp; track</h3>
<p className="mt-1 text-sm text-neutral-300">One click to push to all sites. Auto remove when sold. Get alerts.</p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="features">
<div className="mx-auto max-w-7xl px-4">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Built to flip faster</h2>
<p className="mt-2 text-neutral-300">Optimized for garage sellers, thrifters, and resellers of all kinds.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white" href="#">
            Explore docs
            <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 w-fit">
<i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="wand-2"></i>
              AI listing writer
            </div>
<h3 className="mt-3 font-semibold tracking-tight">Descriptions that sell</h3>
<p className="text-sm text-neutral-300 mt-1.5">Auto‑clean photos, generate SEO titles, tags, and condition notes tailored per platform.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 w-fit">
<i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="merge"></i>
              Smart dedupe
            </div>
<h3 className="mt-3 font-semibold tracking-tight">One item, many sites</h3>
<p className="text-sm text-neutral-300 mt-1.5">We keep IDs synced so when it sells, we pull all duplicates everywhere automatically.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 w-fit">
<i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="bell-ring"></i>
              Price alerts
            </div>
<h3 className="mt-3 font-semibold tracking-tight">Never miss a deal</h3>
<p className="text-sm text-neutral-300 mt-1.5">Get notified when targets hit your buy price at local thrifts or online markets.</p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/5" id="pricing">
<div className="mx-auto max-w-7xl px-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple pricing</h2>
<p className="text-neutral-300 mt-1">Start free. Upgrade when you’re ready to scale.</p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-neutral-300">Starter</div>
<div className="text-3xl font-semibold tracking-tight mt-1">$0</div>
<ul className="mt-3 text-sm text-neutral-300 space-y-2">
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="check"></i> 50 scans / mo</li>
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="check"></i> Basic comps</li>
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="check"></i> AI descriptions</li>
</ul>
<button className="mt-4 w-full rounded-lg border border-white/10 bg-white text-black px-3 py-2 text-sm hover:bg-neutral-100 transition-colors">Get started</button>
</div>
<div className="rounded-2xl border border-teal-500/30 bg-teal-500/10 p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-200">Pro</div>
<div className="text-[10px] px-2 py-0.5 rounded-full border border-teal-500/30 text-teal-200">Popular</div>
</div>
<div className="text-3xl font-semibold tracking-tight mt-1">$19</div>
<ul className="mt-3 text-sm text-neutral-200 space-y-2">
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="check"></i> 1,000 scans / mo</li>
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="check"></i> Real‑time comps + alerts</li>
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="check"></i> Auto‑post to all sites</li>
</ul>
<button className="mt-4 w-full rounded-lg border border-teal-500/30 bg-white/10 text-neutral-100 px-3 py-2 text-sm hover:bg-white/20 transition-colors">Start Pro</button>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-neutral-300">Teams</div>
<div className="text-3xl font-semibold tracking-tight mt-1">$49</div>
<ul className="mt-3 text-sm text-neutral-300 space-y-2">
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="check"></i> Multi‑member inventory</li>
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="check"></i> Shared alerts &amp; drafts</li>
<li className="flex gap-2"><i className="w-4 h-4 stroke-[1.5] text-teal-300" data-lucide="check"></i> API access</li>
</ul>
<button className="mt-4 w-full rounded-lg border border-white/10 bg-white/5 text-neutral-100 px-3 py-2 text-sm hover:bg-white/10 transition-colors">Contact sales</button>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/5" id="faq">
<div className="mx-auto max-w-4xl px-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Questions</h2>
<div className="mt-6 grid grid-cols-1 gap-4">

<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-start justify-between gap-3">
<div className="font-medium inline-flex items-center gap-2">
<i className="w-4.5 h-4.5 stroke-[1.5] text-teal-300" data-lucide="server"></i>
                How do I publish this on GoDaddy?
              </div>
<button className="inline-flex items-center gap-2 text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10 hover:border-white/20 transition-colors" id="copyGoDaddyBtn">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="copy"></i>
                Copy steps
              </button>
</div>
<div className="mt-2 text-sm text-neutral-300 space-y-3">
<div className="inline-flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="globe"></i>
                This page is static—no backend needed.
              </div>
<div>
<div className="text-xs text-neutral-400">Linux Hosting (cPanel)</div>
<ol className="list-decimal ml-5 mt-1 space-y-1">
<li>Save this file as index.html on your computer.</li>
<li>Go to GoDaddy → My Products → Web Hosting → Manage → cPanel Admin.</li>
<li>Open File Manager → public_html (or your domain’s root folder).</li>
<li>Upload index.html (and any assets you added).</li>
<li>Visit your domain. If you see a cached page, hard‑refresh.</li>
</ol>
</div>
<div>
<div className="text-xs text-neutral-400">Managed WordPress</div>
<ol className="list-decimal ml-5 mt-1 space-y-1">
<li>Best: Add a subdomain (e.g., app.yourdomain.com) on Linux Hosting and upload index.html there.</li>
<li>Or create a custom page template in your theme and paste this markup into the template file.</li>
</ol>
</div>
<div>
<div className="text-xs text-neutral-400">Website Builder</div>
<ol className="list-decimal ml-5 mt-1 space-y-1">
<li>Add a new page section → HTML embed.</li>
<li>Paste the full markup and publish. Test on mobile and desktop.</li>
</ol>
</div>
<div className="text-xs text-neutral-400">Tip: Ensure SSL is on. In GoDaddy, enable HTTPS and redirect http → https for best results.</div>
<div className="text-xs text-teal-300 hidden" id="copyAck">Steps copied</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="font-medium">How fast is the analysis?</div>
<p className="text-sm text-neutral-300 mt-1">Most results return in ~2 seconds. High‑detail items may take up to 5 seconds.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="font-medium">Which marketplaces are supported?</div>
<p className="text-sm text-neutral-300 mt-1">Marketplace, eBay, Poshmark, Mercari, and more. Connect once and one‑click post everywhere.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="font-medium">Do you remove duplicates when sold?</div>
<p className="text-sm text-neutral-300 mt-1">Yes. We track item status and automatically pull listings from all connected sites the moment one sells.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5">
<div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/10 grid place-content-center">
<span className="text-[10px] font-semibold tracking-tight">FP</span>
</div>
<span className="text-sm font-semibold tracking-tight">FliprPic.com</span>
<span className="text-sm text-neutral-400">© 2025</span>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Status</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
