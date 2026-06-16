import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    (function () {
      function init() {
        try {
          var canvas = document.getElementById('kpiChart');
          if (!canvas || !window.Chart) return false;
          if (Chart.getChart(canvas)) return true;

          var ctx = canvas.getContext('2d');
          if (!ctx) return false;

          var gradientV = ctx.createLinearGradient(0, 0, 0, 200);
          gradientV.addColorStop(0, 'rgba(139,92,246,0.35)');
          gradientV.addColorStop(1, 'rgba(139,92,246,0.02)');

          var gradientB = ctx.createLinearGradient(0, 0, 0, 200);
          gradientB.addColorStop(0, 'rgba(56,189,248,0.35)');
          gradientB.addColorStop(1, 'rgba(56,189,248,0.02)');

          new Chart(ctx, {
            type: 'line',
            data: {
              labels: Array.from({ length: 12 }, (_, i) => `W${i + 1}`),
              datasets: [
                {
                  label: 'Conversion',
                  data: [2.6, 2.8, 2.9, 3.0, 2.9, 3.1, 3.0, 3.2, 3.3, 3.4, 3.3, 3.4],
                  borderColor: 'rgb(167,139,250)',
                  backgroundColor: gradientV,
                  tension: 0.35,
                  fill: true,
                  pointRadius: 0,
                  borderWidth: 2
                },
                {
                  label: 'AOV',
                  data: [62, 64, 63, 66, 65, 67, 69, 70, 71, 72, 73, 74],
                  borderColor: 'rgb(96,165,250)',
                  backgroundColor: gradientB,
                  tension: 0.35,
                  fill: true,
                  yAxisID: 'y1',
                  pointRadius: 0,
                  borderWidth: 2
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: { mode: 'index', intersect: false },
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: 'rgba(17,24,39,0.95)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderWidth: 1,
                  titleColor: '#fff',
                  bodyColor: '#e5e7eb',
                  padding: 10,
                  displayColors: true
                }
              },
              scales: {
                x: {
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  ticks: { color: 'rgba(255,255,255,0.6)', maxTicksLimit: 6 }
                },
                y: {
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  ticks: {
                    color: 'rgba(255,255,255,0.6)',
                    callback: function (v) { return v + '%'; }
                  }
                },
                y1: {
                  position: 'right',
                  grid: { drawOnChartArea: false },
                  ticks: {
                    color: 'rgba(255,255,255,0.6)',
                    callback: function (v) { return '$' + v; }
                  }
                }
              }
            }
          });

          return true;
        } catch (e) {
          return false;
        }
      }

      if (!init()) {
        var attempts = 0;
        (function retry() {
          if (attempts++ > 20) return;
          if (!init()) setTimeout(retry, 150);
        })();
      }
    })();
  


      // Year in footer
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          const open = mobileMenu.classList.toggle('hidden') ? 'false' : 'true';
          mobileBtn.setAttribute('aria-expanded', open);
        });
      }

      // Contact modal
      const modal = document.getElementById('contactModal');
      const modalClose = document.getElementById('contactModalClose');
      const openers = document.querySelectorAll('[data-open-modal="contact"]');
      const openModal = () => { modal.classList.remove('hidden'); document.body.style.overflow = 'hidden'; };
      const closeModal = () => { modal.classList.add('hidden'); document.body.style.overflow = ''; };
      openers.forEach(btn => btn.addEventListener('click', openModal));
      modalClose?.addEventListener('click', closeModal);
      modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
      window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); });

      // Modal form
      const modalForm = document.getElementById('contactModalForm');
      const modalSuccess = document.getElementById('contactModalSuccess');
      modalForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        modalSuccess.classList.remove('hidden');
        setTimeout(() => { closeModal(); modalForm.reset(); modalSuccess.classList.add('hidden'); }, 1400);
      });

      // Inline contact form
      const inlineForm = document.getElementById('inlineContactForm');
      const inlineSuccess = document.getElementById('inlineContactSuccess');
      inlineForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        inlineSuccess.classList.remove('hidden');
        setTimeout(() => { inlineSuccess.classList.add('hidden'); inlineForm.reset(); }, 1600);
      });

      // AI chips -> input
      const chips = document.querySelectorAll('.chip');
      const aiInput = document.getElementById('aiPrompt');
      const aiGo = document.getElementById('aiGo');
      const aiResult = document.getElementById('aiResult');
      const aiTiming = document.getElementById('aiTiming');

      chips.forEach(c => c.addEventListener('click', () => {
        const val = c.getAttribute('data-chip') || '';
        aiInput.value = val;
        aiInput.focus();
      }));

      function fakePlan(prompt) {
        const start = performance.now();
        aiResult.innerHTML = '<span class="text-white/60">Generating plan…</span>';
        setTimeout(() => {
          const plan = [
            '<div class="space-y-2">',
            '<div class="font-medium text-white">Plan</div>',
            `<div class="text-white/80">• Create theme and pages for: <span class="text-white">${prompt || 'your brief'}</span></div>`,
            '<div class="text-white/80">• Generate on‑brand imagery with AI Photoshoot (on‑model + lifestyle)</div>',
            '<div class="text-white/80">• Auto‑enrich titles, attributes, variants; publish to web, store, marketplaces</div>',
            '<div class="text-white/80">• Launch campaign flows in Boltic; track KPIs in unified analytics</div>',
            '</div>'
          ].join('');
          aiResult.innerHTML = plan;
          const ms = Math.round(performance.now() - start);
          aiTiming.textContent = `${Math.max(1, Math.round(ms/1000))}s result`;
        }, 900);
      }

      aiGo?.addEventListener('click', () => fakePlan(aiInput.value));
      aiInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); fakePlan(aiInput.value); }
      });

      // Micro demos
      const themeBtn = document.querySelector('[data-demo="theme"]');
      const themeEl = document.getElementById('demoTheme');
      themeBtn?.addEventListener('click', () => {
        themeEl.innerHTML = `
          <div class="w-full h-full">
            <div class="h-20 rounded-lg bg-gradient-to-r from-violet-500/30 to-sky-500/30 ring-1 ring-white/10"></div>
            <div class="mt-3 grid grid-cols-3 gap-2">
              <div class="h-16 rounded-md bg-white/5 ring-1 ring-white/10"></div>
              <div class="h-16 rounded-md bg-white/5 ring-1 ring-white/10"></div>
              <div class="h-16 rounded-md bg-white/5 ring-1 ring-white/10"></div>
            </div>
            <div class="mt-3 h-10 rounded-md bg-white/5 ring-1 ring-white/10"></div>
            <div class="mt-2 h-10 rounded-md bg-white/5 ring-1 ring-white/10"></div>
          </div>
        `;
      });

      const photoBtn = document.querySelector('[data-demo="photo"]');
      const photoImg = document.getElementById('demoPhoto');
      const photoBadge = document.getElementById('photoBadge');
      photoBtn?.addEventListener('click', () => {
        photoImg.style.filter = 'saturate(1.1) contrast(1.05)';
        photoImg.classList.remove('opacity-80');
        photoImg.classList.add('opacity-100', 'scale-[1.02]');
        photoBadge.classList.remove('hidden');
        setTimeout(() => { photoImg.classList.remove('scale-[1.02]'); }, 500);
      });

      const descBtn = document.querySelector('[data-demo="desc"]');
      const descEl = document.getElementById('demoDesc');
      descBtn?.addEventListener('click', () => {
        descEl.innerHTML = `
          <div class="space-y-2">
            <div class="font-medium text-white">Sprint Runner Sneakers</div>
            <p>Lightweight, cushioned, and built for daily miles. Breathable mesh upper keeps you cool; responsive EVA midsole returns energy with every step.</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Materials: Mesh upper, EVA midsole, rubber outsole</li>
              <li>Fit: True to size • Width: Regular</li>
              <li>Care: Spot clean; air dry away from heat</li>
              <li>SEO: running shoes, lightweight trainers, road sneakers</li>
            </ul>
          </div>
        `;
      });

      // Chart.js KPI chart
      const ctx = document.getElementById('kpiChart')?.getContext('2d');
      if (ctx) {
        const gradientV = ctx.createLinearGradient(0, 0, 0, 200);
        gradientV.addColorStop(0, 'rgba(139,92,246,0.35)');
        gradientV.addColorStop(1, 'rgba(139,92,246,0.02)');
        const gradientB = ctx.createLinearGradient(0, 0, 0, 200);
        gradientB.addColorStop(0, 'rgba(56,189,248,0.35)');
        gradientB.addColorStop(1, 'rgba(56,189,248,0.02)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 12 }, (_, i) => `W${i + 1}`),
            datasets: [
              {
                label: 'Conversion',
                data: [2.6, 2.8, 2.9, 3.0, 2.9, 3.1, 3.0, 3.2, 3.3, 3.4, 3.3, 3.4],
                borderColor: 'rgb(167,139,250)',
                backgroundColor: gradientV,
                tension: 0.35,
                fill: true,
                pointRadius: 0,
                borderWidth: 2
              },
              {
                label: 'AOV',
                data: [62, 64, 63, 66, 65, 67, 69, 70, 71, 72, 73, 74],
                borderColor: 'rgb(96,165,250)',
                backgroundColor: gradientB,
                tension: 0.35,
                fill: true,
                yAxisID: 'y1',
                pointRadius: 0,
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(17,24,39,0.95)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                titleColor: '#fff',
                bodyColor: '#e5e7eb',
                padding: 10,
                displayColors: true
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: 'rgba(255,255,255,0.6)', maxTicksLimit: 6 }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: 'rgba(255,255,255,0.6)', callback: (v) => v + '%' }
              },
              y1: {
                position: 'right',
                grid: { drawOnChartArea: false },
                ticks: { color: 'rgba(255,255,255,0.6)', callback: (v) => '$' + v }
              }
            }
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-20 bg-[radial-gradient(ellipse_at_center,_rgba(119,98,255,0.65)_0%,_rgba(0,0,0,0)_65%)]"></div>
<div className="absolute top-[35%] -left-[10%] w-[900px] h-[900px] rounded-full blur-3xl opacity-20 bg-[radial-gradient(ellipse_at_center,_rgba(120,76,255,0.55)_0%,_rgba(0,0,0,0)_70%)]"></div>
<div className="absolute bottom-[-15%] right-[-10%] w-[1000px] h-[1000px] rounded-full blur-3xl opacity-20 bg-[radial-gradient(ellipse_at_center,_rgba(25,164,255,0.45)_0%,_rgba(0,0,0,0)_70%)]"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0B12]/60 border-b border-white/10">
<nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="group inline-flex items-center gap-2" href="#">
<div className="h-8 w-8 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15 text-white font-semibold">F</div>
<span className="text-white/90 font-medium tracking-tight">Fynd</span>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm">
<a className="text-white/80 hover:text-white transition-colors" href="#products">Products</a>
<a className="text-white/80 hover:text-white transition-colors" href="#metrics">Customers</a>
<a className="text-white/80 hover:text-white transition-colors" href="#integrations">Integrations</a>
<a className="text-white/80 hover:text-white transition-colors" href="#resources">Resources</a>
<a className="text-white/80 hover:text-white transition-colors" href="#footer">Company</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center justify-center px-3.5 h-9 rounded-md text-sm font-medium text-white/85 hover:text-white border border-white/12 hover:border-white/20 transition-colors" href="https://console.fynd.com/auth/sign-in">Sign in</a>
<button className="inline-flex items-center justify-center px-3.5 h-9 rounded-md text-sm bg-white/10 hover:bg-white/15 border border-white/15 text-white" data-open-modal="contact" type="button">Book a demo</button>
<a className="inline-flex items-center justify-center px-4 h-9 rounded-md text-sm bg-[linear-gradient(135deg,#7C3AED_0%,#2563EB_100%)] hover:brightness-110 text-white shadow-[0_10px_30px_-10px_rgba(124,58,237,0.6)]" href="https://console.fynd.com/auth/sign-up">Start free</a>
</div>
<button aria-controls="mobileMenu" aria-expanded="false" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 hover:bg-white/15 ring-1 ring-white/10" id="mobileMenuBtn" type="button">

<svg className="h-5 w-5 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</button>
</nav>

<div className="md:hidden hidden border-t border-white/10 bg-[#0A0B12]/95 backdrop-blur-xl" id="mobileMenu">
<div className="max-w-7xl mx-auto px-4 py-4 space-y-3 text-sm">
<a className="block text-white/80 hover:text-white" href="#products">Products</a>
<a className="block text-white/80 hover:text-white" href="#metrics">Customers</a>
<a className="block text-white/80 hover:text-white" href="#integrations">Integrations</a>
<a className="block text-white/80 hover:text-white" href="#resources">Resources</a>
<a className="block text-white/80 hover:text-white" href="#footer">Company</a>
<div className="pt-3 flex items-center gap-2">
<a className="inline-flex items-center justify-center px-3 h-9 rounded-md text-sm font-medium text-white/85 hover:text-white border border-white/12 hover:border-white/20" href="https://console.fynd.com/auth/sign-in">Sign in</a>
<button className="px-3 h-9 rounded-md text-sm bg-white/10 hover:bg-white/15 border border-white/15 text-white" data-open-modal="contact" type="button">Book a demo</button>
<a className="px-3.5 h-9 rounded-md text-sm bg-[linear-gradient(135deg,#7C3AED_0%,#2563EB_100%)] hover:brightness-110 text-white" href="https://console.fynd.com/auth/sign-up">Start free</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-16 md:pt-24">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 mb-4">

<svg className="h-4 w-4 text-violet-300/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"></path>
<path d="M5 19l.5 1.5L7 21l-1.5.5L5 23l-.5-1.5L3 21l1.5-.5L5 19z"></path>
<path d="M19 15l.5 1.5L21 17l-1.5.5L19 19l-.5-1.5L17 17l1.5-.5L19 15z"></path>
</svg>
<span className="text-xs text-white/80">New in 2025 · AI‑native commerce</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              AI-powered commerce that ships faster, sells smarter, and scales effortlessly
            </h1>
<p className="mt-5 text-white/70 max-w-xl">
              Launch high‑converting storefronts, generate studio‑grade photos, automate your catalog, and connect every channel—powered by AI.
            </p>
<div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center px-5 h-11 rounded-md bg-[linear-gradient(135deg,#7C3AED_0%,#2563EB_100%)] hover:brightness-110 text-white text-sm shadow-[0_14px_40px_-12px_rgba(37,99,235,0.5)] transition" href="https://console.fynd.com/auth/sign-up">

<svg className="h-[18px] w-[18px] mr-2 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 15s1-5 7-11c2 2 5 5 7 7-6 6-11 7-11 7l-3-3z"></path>
<path d="M15 9l-6 6"></path>
<path d="M5 19c1.5-1.5 2-2 3-3"></path>
</svg>
                Start free
              </a>
<button className="inline-flex items-center justify-center px-5 h-11 rounded-md text-sm bg-white/10 hover:bg-white/15 border border-white/15 text-white" data-open-modal="contact" type="button">

<svg className="h-[18px] w-[18px] mr-2 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11a9 9 0 1 1 18 0"></path>
<path d="M7 16v-5a5 5 0 0 1 10 0v5"></path>
<path d="M5 19a2 2 0 0 0 2 2h1"></path>
<path d="M19 19a2 2 0 0 1-2 2h-1"></path>
</svg>
                Talk to an expert
              </button>
</div>
<p className="mt-2 text-xs text-white/55">Free to start. No credit card required.</p>

<div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/70">
<div className="inline-flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>300+ brands
              </div>
<div className="inline-flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-blue-400/80"></span>8,000+ stores
              </div>
<div className="inline-flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400/80"></span>$9B+ GMV enabled
              </div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] p-4 sm:p-5">
<div className="flex items-center gap-3 mb-3">

<svg className="h-5 w-5 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4V2m0 8V8M4 15H2m8 0H8m9.5-7.5L20 4m0 8l-2.5-2.5M4 20l6-6"></path>
</svg>
<span className="text-sm text-white/80">Try an AI action (free)</span>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 flex-wrap">
<button className="chip" data-chip="Create a storefront for an athleisure brand with a hero banner, 3-product spotlight, and reviews" type="button">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-white/10 hover:bg-white/15 border border-white/10 text-white/85">
                      Create a storefront for an athleisure brand
                    </span>
</button>
<button className="chip" data-chip="Turn product shots into on-model images in outdoor lifestyle scenes" type="button">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-white/10 hover:bg-white/15 border border-white/10 text-white/85">
                      Turn product shots into on‑model images
                    </span>
</button>
<button className="chip" data-chip="Generate 25 SEO descriptions for sneakers with materials, fits, and care" type="button">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-white/10 hover:bg-white/15 border border-white/10 text-white/85">
                      Generate 25 SEO descriptions for sneakers
                    </span>
</button>
</div>
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 h-12">

<svg className="h-[18px] w-[18px] text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2a3 3 0 0 0-3 3v3h3V5a3 3 0 0 0-3-3zM9 16v3a3 3 0 1 0 3-3H9zM16 9h3a3 3 0 1 0-3-3v3zM5 9H2a3 3 0 1 0 3 3V9zM16 12h-8v0"></path>
</svg>
<input className="flex-1 bg-transparent outline-none placeholder:text-white/40 text-sm" id="aiPrompt" placeholder="Describe what you want to build…" type="text"/>
<button className="inline-flex items-center gap-1.5 px-3 h-8 rounded-md text-xs bg-white/10 hover:bg-white/15 border border-white/15 text-white" id="aiGo" type="button">

<svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4l14 8-14 8V4z"></path>
</svg>
                    Run
                  </button>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-white/60">Your AI plan</div>
<div className="text-[10px] text-white/40" id="aiTiming">~2s result</div>
</div>
<div aria-live="polite" className="mt-2 text-sm text-white/85 min-h-[96px] leading-6" id="aiResult">
                    Pick a task above or describe your goal—see how AI executes it across Fynd.
                  </div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<a className="inline-flex items-center gap-1.5 px-2.5 h-8 rounded-md text-xs bg-violet-500/20 hover:bg-violet-500/25 border border-violet-400/30 text-violet-100" href="https://console.fynd.com/auth/sign-up">
                      Continue in builder
                      
<svg className="h-[14px] w-[14px] ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</a>
<button className="inline-flex items-center gap-1.5 px-2.5 h-8 rounded-md text-xs bg-white/10 hover:bg-white/15 border border-white/15 text-white" data-open-modal="contact" type="button">Talk to an expert</button>
</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-3 gap-3 text-xs">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="text-white/60">Security</div>
<div className="text-white/90">ISO 27001, SOC 2</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="text-white/60">Infra</div>
<div className="text-white/90">99.95% uptime</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="text-white/60">Support</div>
<div className="text-white/90">Global experts</div>
</div>
</div>
</div>
</div>

<div className="md:mt-16 border-white/10 border-t mt-12 pt-6">
<p className="text-xs md:text-sm text-white/50 mb-4">Trusted by high‑growth teams</p>
<div className="flex flex-wrap gap-x-4 gap-y-3 opacity-85 items-center">
<span className="px-3 py-1.5 rounded-md border border-white/10 text-white/80 text-sm tracking-tight uppercase">PUMA</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 text-white/80 text-sm tracking-tight uppercase">SEPHORA</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 text-white/80 text-sm tracking-tight uppercase">BOSS</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 text-white/80 text-sm tracking-tight uppercase">TVS</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 text-white/80 text-sm tracking-tight uppercase">DIESEL</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 text-white/70 text-sm tracking-tight uppercase">NYKAA</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 text-white/70 text-sm tracking-tight uppercase">USPA</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 text-white/70 text-sm tracking-tight uppercase">SUPERDRY</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 text-white/70 text-sm tracking-tight uppercase">BIBA</span>
<span className="px-3 py-1.5 rounded-md border border-white/10 text-white/70 text-sm tracking-tight uppercase">ONLY</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-24" id="products">
<div className="flex gap-6 mb-6 items-end justify-between">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Instant AI demos</h2>
<p className="text-white/60 mt-1">See how you can ship 5–10× faster. Click the CTAs to generate results.</p>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-4 md:gap-6">

<div className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center justify-between">
<span className="text-sm text-white/80 inline-flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l1-5h16l1 5M5 9v10h14V9M9 13h6"></path></svg>
              AI Storefront
              <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-white/60">Preview</span>
</span>
<button className="text-xs px-2.5 h-7 rounded-md bg-white/10 hover:bg-white/15 border border-white/15" data-demo="theme" type="button">Generate theme</button>
</div>
<div className="mt-4 rounded-lg border border-white/10 bg-black/30 aspect-[16/10] grid place-items-center text-sm text-white/70 px-4 text-center relative overflow-hidden">
<div className="w-full h-full grid place-items-center p-4" id="demoTheme">Click “Generate theme” to see a tailored layout suggestion.</div>
</div>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center justify-between">
<span className="text-sm text-white/80 inline-flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path></svg>
              AI Photoshoot
            </span>
<button className="text-xs px-2.5 h-7 rounded-md bg-white/10 hover:bg-white/15 border border-white/15" data-demo="photo" type="button">Create shot</button>
</div>
<div className="mt-4 relative overflow-hidden rounded-lg border border-white/10 bg-black/30 aspect-[16/10] grid place-items-center">
<img alt="AI Photoshoot" className="h-full w-full object-cover opacity-80 transition duration-500" id="demoPhoto" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded bg-white/10 border border-white/15 text-white/80 hidden" id="photoBadge">On‑model • Outdoor</div>
</div>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center justify-between">
<span className="text-sm text-white/80 inline-flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-fuchsia-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16l4-4h8a2 2 0 0 0 2-2V2z"></path></svg>
              AI Catalog Management
            </span>
<button className="text-xs px-2.5 h-7 rounded-md bg-white/10 hover:bg-white/15 border border-white/15" data-demo="desc" type="button">Write copy</button>
</div>
<div className="mt-4 rounded-lg border border-white/10 bg-black/30 aspect-[16/10] p-4 text-sm leading-6 text-white/80 overflow-auto">
<div className="" id="demoDesc">Generate SEO‑rich product descriptions in one click.</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-24">
<div className="flex items-end justify-between gap-6 mb-6">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Everything you need to run modern commerce</h2>
<p className="text-white/60 mt-1">Drive outcomes: launch faster, lift conversion, and lower ops cost—on one platform.</p>
</div>
</div>
<div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 md:gap-5" id="products-grid">

<div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:bg-white/[0.05] transition flex flex-col" data-optional="storefront" id="card-storefront">
<div className="flex items-center gap-2">
<span className="h-9 w-9 grid place-items-center rounded-md bg-violet-500/20 ring-1 ring-violet-400/30">

<svg className="h-[18px] w-[18px] text-violet-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l1-5h16l1 5M5 9v10h14V9M9 13h6"></path></svg>
</span>
<h3 className="text-base font-medium tracking-tight flex items-center gap-2">Online Storefront</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/80"></span>Go live 5–10× faster — B2C, B2B, Marketplace, Hyperlocal</li>
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400/80"></span>High‑converting themes + AI‑generated layouts</li>
</ul>
<a className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm text-violet-200 hover:text-violet-100" href="https://console.fynd.com/auth/sign-up">Start free
            <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
</a>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:bg-white/[0.05] transition flex flex-col">
<div className="flex items-center gap-2">
<span className="h-9 w-9 grid place-items-center rounded-md bg-sky-500/20 ring-1 ring-sky-400/30">

<svg className="h-[18px] w-[18px] text-sky-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path></svg>
</span>
<h3 className="text-base font-medium tracking-tight">AI Photoshoot</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>Lift add‑to‑cart with studio‑grade, on‑brand imagery</li>
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>On‑model, lifestyle, product • 3D/AR try‑ons &amp; AR ads (Glamar)</li>
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>Built‑in edits &amp; DAM (Pixelbin)</li>
</ul>
<button className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm text-sky-200 hover:text-sky-100" data-open-modal="contact" type="button">Get a demo
            <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
</button>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:bg-white/[0.05] transition flex flex-col">
<div className="flex items-center gap-2">
<span className="h-9 w-9 grid place-items-center rounded-md bg-fuchsia-500/20 ring-1 ring-fuchsia-400/30">

<svg className="h-[18px] w-[18px] text-fuchsia-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16l4-4h8a2 2 0 0 0 2-2V2z"></path></svg>
</span>
<h3 className="text-base font-medium tracking-tight">AI Catalog Management</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400/80"></span>Cut catalog ops time by up to 68%</li>
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400/80"></span>1‑click SEO titles, attributes, variants • Bulk flows (Boltic)</li>
</ul>
<a className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm text-fuchsia-200 hover:text-fuchsia-100" href="#metrics">See impact
            <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
</a>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:bg-white/[0.05] transition flex flex-col">
<div className="flex items-center gap-2">
<span className="h-9 w-9 grid place-items-center rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30">

<svg className="h-[18px] w-[18px] text-emerald-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><path d="M3.29 7L12 12l8.71-5"></path><path d="M12 22V12"></path></svg>
</span>
<h3 className="text-base font-medium tracking-tight">Store Management</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>Drive in‑store conversion with clienteling</li>
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>Self‑checkout &amp; pro staff tools to cut wait times</li>
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>Pickups, returns, exchanges, fulfill‑from‑store</li>
</ul>
<a className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm text-emerald-200 hover:text-emerald-100" href="#metrics">See customer stories
            <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
</a>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 hover:bg-white/[0.05] transition flex flex-col" id="integrations">
<div className="flex items-center gap-2">
<span className="h-9 w-9 grid place-items-center rounded-md bg-cyan-500/20 ring-1 ring-cyan-400/30">

<svg className="h-[18px] w-[18px] text-cyan-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 7V3M15 7V3M5 11h14M7 11v3a5 5 0 0 0 10 0v-3"></path></svg>
</span>
<h3 className="text-base font-medium tracking-tight">Integrations</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/80"></span>Add channels and unlock new revenue (50+ connectors)</li>
<li className="inline-flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/80"></span>Marketplaces: Amazon (Konnect), ONDC, Google Shopping</li>
</ul>
<a className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm text-cyan-200 hover:text-cyan-100" href="https://extensions.fynd.com/extensions/">Explore extensions
            <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-12 md:mt-16" id="solutions">
<div className="flex gap-6 mb-6 items-end justify-between">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Solutions that convert</h2>
<p className="text-white/60 mt-1">Outcomes by team—automate work, lift KPIs, and reduce costs.</p>
</div>
<a className="hidden md:inline-flex items-center gap-1.5 px-3.5 h-9 rounded-md text-sm bg-white text-[#0A0B12] hover:opacity-95" href="https://console.fynd.com/auth/sign-up">Start free</a>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">

<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 overflow-hidden">
<div className="relative">
<div className="absolute right-0 -top-6 h-24 w-24 rounded-xl bg-gradient-to-tr from-white/10 to-transparent rotate-12"></div>
<div className="flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-white/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M12 17v4"></path><path d="M8 21h8"></path></svg>
<h3 className="text-base font-medium tracking-tight">Automate operations</h3>
</div>
<div className="mt-3">
<ul className="space-y-2 text-sm text-white/70">
<li className="">Eliminate 60%+ manual catalog work (AI)</li>
<li className="">Ship campaigns in hours with visual workflows (Boltic)</li>
<li>Scale support &amp; dev with AI copilots (Copilot.live)</li>
</ul>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="text-xs text-white/80 hover:text-white inline-flex items-center gap-1.5" href="#resources">See examples
                <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
</a>
<button className="text-xs px-2.5 h-8 rounded-md bg-white/10 hover:bg-white/15 border border-white/15" data-open-modal="contact" type="button">Talk to us</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 overflow-hidden">
<div className="relative">
<div className="absolute right-0 -top-6 h-24 w-24 rounded-xl bg-gradient-to-tr from-white/10 to-transparent rotate-12"></div>
<div className="flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-white/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l1-5h16l1 5M5 9v10h14V9M9 13h6"></path></svg>
<h3 className="text-base font-medium tracking-tight">Sell more in‑store</h3>
</div>
<div className="mt-3">
<ul className="space-y-2 text-sm text-white/70">
<li>Boost in‑store conversion with clienteling + endless aisle</li>
<li className="">Reduce queues with self‑checkout and fast POS</li>
<li className="">Pickups, returns, exchanges, fulfill‑from‑store</li>
</ul>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="text-xs text-white/80 hover:text-white inline-flex items-center gap-1.5" href="#metrics">See impact
                <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center text-xs px-3 h-8 rounded-md bg-white text-[#0A0B12] hover:opacity-95 border border-white/20" href="https://console.fynd.com/auth/sign-up">Start free</a>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 overflow-hidden">
<div className="relative">
<div className="absolute right-0 -top-6 h-24 w-24 rounded-xl bg-gradient-to-tr from-white/10 to-transparent rotate-12"></div>
<div className="flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-white/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M7 7v8M17 7v8"></path></svg>
<h3 className="text-base font-medium tracking-tight">Convert more online</h3>
</div>
<div className="mt-3">
<ul className="space-y-2 text-sm text-white/70">
<li className="">Personalization + 3D/AR try‑ons that convert</li>
<li className="">Frictionless checkout reduces drop‑off</li>
<li className="">Design‑to‑shelf pipelines launch collections faster</li>
</ul>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="text-xs text-white/80 hover:text-white inline-flex items-center gap-1.5" href="#resources">View playbook
                <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
</a>
<button className="text-xs px-2.5 h-8 rounded-md bg-white/10 hover:bg-white/15 border border-white/15" data-open-modal="contact" type="button">Talk to us</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 overflow-hidden">
<div className="relative">
<div className="absolute right-0 -top-6 h-24 w-24 rounded-xl bg-gradient-to-tr from-white/10 to-transparent rotate-12"></div>
<div className="flex items-center gap-2">

<svg className="h-[18px] w-[18px] text-white/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h7v7H3z"></path><path className="" d="M14 10h7v7h-7z"></path><path d="M10 7l4 3"></path></svg>
<h3 className="text-base font-medium tracking-tight">Fulfil faster, cheaper</h3>
</div>
<div className="mt-3">
<ul className="space-y-2 text-sm text-white/70">
<li className="">Improve fulfill rates and cut split shipments</li>
<li className="">Smart routing slashes SLA breaches</li>
<li className="">Unified inventory prevents stockouts</li>
</ul>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="text-xs text-white/80 hover:text-white inline-flex items-center gap-1.5" href="#integrations">Explore integrations
                <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7"></path></svg>
</a>
<a className="h-8 inline-flex items-center justify-center hover:opacity-95 text-xs text-[#0A0B12] bg-white rounded-md pr-2.5 pl-2.5 text-center" href="https://console.fynd.com/auth/sign-up">Start free</a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-24" id="metrics">
<div className="grid lg:grid-cols-12 gap-6 items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Proven impact</h2>
<p className="text-white/60 mt-1">See how teams increase conversion and reduce time-to-launch.</p>
<div className="mt-6 grid grid-cols-2 gap-3">
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
<div className="text-3xl font-semibold tracking-tight text-white">+23%</div>
<div className="text-xs text-white/60 mt-1">Checkout conversion</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
<div className="text-3xl font-semibold tracking-tight text-white">-68%</div>
<div className="text-xs text-white/60 mt-1">Catalog ops time</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
<div className="text-3xl font-semibold tracking-tight text-white">5–10×</div>
<div className="text-xs text-white/60 mt-1">Faster launches</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
<div className="text-3xl font-semibold tracking-tight text-white">+31%</div>
<div className="text-xs text-white/60 mt-1">Organic traffic</div>
</div>
</div>
</div>
<div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80 inline-flex items-center gap-2">

<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M7 13l4-4 3 3 5-5"></path></svg>
              KPI trends
            </div>
<div className="text-[10px] text-white/50">Last 12 weeks • Conversion (violet) vs AOV (blue)</div>
</div>

<div className="mt-3 grid grid-cols-3 gap-2 text-xs">
<div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
<div className="text-white/60">Conversion rate</div>
<div className="flex items-baseline gap-2">
<div className="text-white font-medium">3.4%</div>
<span className="text-emerald-300/90">+0.3pp</span>
</div>
</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
<div className="text-white/60">Average order value</div>
<div className="flex items-baseline gap-2">
<div className="text-white font-medium">$74</div>
<span className="text-emerald-300/90">+$9</span>
</div>
</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
<div className="text-white/60">Sessions</div>
<div className="flex items-baseline gap-2">
<div className="text-white font-medium">18k</div>
<span className="text-emerald-300/90">+2.1k</span>
</div>
</div>
</div>

<div className="mt-4">
<div className="relative h-56">
<canvas aria-label="KPI trends: Conversion rate versus Average Order Value over the last 12 weeks." className="absolute inset-0" height="224" id="kpiChart" role="img" style={{width: '657px', height: '224px', display: 'block', boxSizing: 'border-box'}} width="657">KPI trends: Conversion vs AOV (last 12 weeks). If you can read this, your browser doesn't support HTML5 canvas.</canvas>

</div>

<div className="mt-3 flex items-center justify-between gap-2 flex-wrap">
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-2 px-2.5 h-8 rounded-md bg-white/5 border border-white/10 text-xs text-white/80">
<span className="h-2 w-2 rounded-full bg-violet-400"></span> Conversion <span className="text-emerald-300/90">+0.3pp WoW</span>
</span>
<span className="inline-flex items-center gap-2 px-2.5 h-8 rounded-md bg-white/5 border border-white/10 text-xs text-white/80">
<span className="h-2 w-2 rounded-full bg-sky-400"></span> AOV <span className="text-emerald-300/90">+$9 WoW</span>
</span>
</div>
<div className="text-[11px] text-white/50">Tip: Hover the chart to inspect exact values</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-12 md:mt-16" id="contact-inline">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
<div className="flex items-center justify-between gap-4">
<div className="">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Talk to our team</h3>
<p className="text-white/60 mt-1 text-sm">Tell us about your goals—we’ll share a tailored plan and timeline.</p>
</div>
<a className="hidden md:inline-flex items-center gap-1.5 px-3.5 h-9 rounded-md text-sm bg-white/10 hover:bg-white/15 border border-white/15 text-white" href="https://console.fynd.com/auth/sign-up">Or start free</a>
</div>
<form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3" id="inlineContactForm">
<label className="text-sm text-white/80">Name
            <input className="mt-1 w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 outline-none focus:border-white/20" placeholder="Jane Doe" required="" type="text"/>
</label>
<label className="text-sm text-white/80">Email
            <input className="mt-1 w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 outline-none focus:border-white/20" placeholder="jane@brand.com" required="" type="email"/>
</label>
<label className="text-sm text-white/80">Company
            <input className="mt-1 w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 outline-none focus:border-white/20" placeholder="Your brand" type="text"/>
</label>
<label className="text-sm text-white/80">Use case
            <select className="mt-1 w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 outline-none focus:border-white/20 text-white/80">
<option className="bg-[#0A0B12]" value="">Select…</option>
<option className="bg-[#0A0B12]">Online storefronts</option>
<option className="bg-[#0A0B12]">AI photoshoot</option>
<option className="bg-[#0A0B12]">Catalog automation</option>
<option className="bg-[#0A0B12]">Store/POS</option>
<option className="bg-[#0A0B12]">Logistics &amp; OMS/WMS</option>
<option className="bg-[#0A0B12]">Integrations</option>
</select>
</label>
<label className="text-sm text-white/80 md:col-span-2">What are you trying to achieve?
            <textarea className="mt-1 w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 outline-none focus:border-white/20" placeholder="Share goals, timelines, and products." rows="4"></textarea>
</label>
<div className="md:col-span-2 flex items-center justify-between pt-1">
<div className="text-[11px] text-white/50">We’ll get back within 1 business day.</div>
<button className="px-4 h-10 rounded-md bg-white text-[#0A0B12] hover:opacity-95 text-sm" type="submit">Request demo</button>
</div>
</form>
<div className="mt-3 hidden rounded-md border border-emerald-400/30 bg-emerald-500/10 text-emerald-100 text-sm px-3 py-2" id="inlineContactSuccess">
          Thanks! Our team will reach out shortly.
        </div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-24" id="customers">
<div className="flex items-end justify-between gap-6 mb-6">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Customer stories</h2>
<p className="text-white/60 mt-1">How leading brands ship faster and sell more with Fynd.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-5">
<div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.04]">
<div className="h-40 overflow-hidden">
<img alt="Beauty brand storefront" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="text-sm text-white/70">Beauty</div>
<h3 className="mt-1 text-base font-medium tracking-tight">+18% add-to-cart with AI imagery</h3>
<p className="mt-2 text-sm text-white/60">Automated on‑model generation for new launches reduced studio cycles by 72%.</p>
<a className="mt-3 inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-white" href="https://www.fynd.com/customer-stories">Read story
              <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.04]">
<div className="h-40 overflow-hidden">
<img alt="Fashion brand retail" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="text-sm text-white/70">Fashion</div>
<h3 className="mt-1 text-base font-medium tracking-tight">5× faster season launches</h3>
<p className="mt-2 text-sm text-white/60">Unified catalog and workflows reduced go‑live from weeks to days across 3000+ SKUs.</p>
<a className="mt-3 inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-white" href="https://www.fynd.com/customer-stories">Read story
              <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 024 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.04]">
<div className="h-40 overflow-hidden">
<img alt="Omnichannel logistics and fulfillment" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="text-sm text-white/70">Omnichannel</div>
<h3 className="mt-1 text-base font-medium tracking-tight">+32% store‑assisted sales</h3>
<p className="mt-2 text-sm text-white/60">Clienteling and fulfill‑from‑store unlocked inventory and lifted in‑store conversion.</p>
<a className="mt-3 inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-white" href="https://www.fynd.com/customer-stories">Read story
              <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section aria-labelledby="resources-title" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-24" id="resources">
<div className="flex items-end justify-between gap-6 mb-6">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white" id="resources-title">Resources</h2>
<p className="text-white/60 mt-1">Playbooks, docs, and events to go from idea to launch fast.</p>
</div>
<a className="hidden md:inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-white" href="https://www.fynd.com/resources">
          Browse all
          <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-5">

<a className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition block" href="https://www.fynd.com/blog">
<div className="flex items-center gap-2">
<span className="h-9 w-9 grid place-items-center rounded-md bg-violet-500/20 ring-1 ring-violet-400/30">
<svg className="h-[18px] w-[18px] text-violet-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19.5V6a2 2 0 0 1 2-2h11"></path>
<path d="M20 22V6a2 2 0 0 0-2-2H6"></path>
<path d="M4 19.5A3.5 3.5 0 0 1 7.5 16H20"></path>
</svg>
</span>
<div className="">
<div className="text-sm font-medium">AI Commerce Playbook</div>
<div className="text-xs text-white/60">Launch high‑converting experiences, step‑by‑step</div>
</div>
</div>
<div className="mt-3 text-sm text-white/70">Templates and checklists to go from concept to live store in days.</div>
<div className="mt-3 inline-flex items-center gap-1.5 text-xs text-violet-200 group-hover:text-violet-100">
            Read the guide
            <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</div>
</a>

<a className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition block" href="https://partners.fynd.com/help">
<div className="flex items-center gap-2">
<span className="h-9 w-9 grid place-items-center rounded-md bg-sky-500/20 ring-1 ring-sky-400/30">
<svg className="h-[18px] w-[18px] text-sky-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v16H4z"></path>
<path d="M8 8h8M8 12h8M8 16h5"></path>
</svg>
</span>
<div>
<div className="text-sm font-medium">Developer docs</div>
<div className="text-xs text-white/60">SDKs, APIs, and guides</div>
</div>
</div>
<div className="mt-3 text-sm text-white/70">Integrate payments, logistics, marketplaces, and more with clear APIs.</div>
<div className="mt-3 inline-flex items-center gap-1.5 text-xs text-sky-200 group-hover:text-sky-100">
            View docs
            <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</div>
</a>

<a className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition block" href="https://www.fynd.com/events">
<div className="flex items-center gap-2">
<span className="h-9 w-9 grid place-items-center rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30">
<svg className="h-[18px] w-[18px] text-emerald-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16v10H4z"></path>
<path d="M8 19h8"></path>
<path d="M12 15v4"></path>
</svg>
</span>
<div>
<div className="text-sm font-medium">Webinars &amp; events</div>
<div className="text-xs text-white/60">Best practices from experts</div>
</div>
</div>
<div className="mt-3 text-sm text-white/70">Learn how leading brands automate ops and lift conversion with AI.</div>
<div className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-200 group-hover:text-emerald-100">
            Register
            <svg className="h-[14px] w-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-24">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
<div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-25 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.5)_0%,_rgba(0,0,0,0)_70%)]"></div>
<div className="grid md:grid-cols-2 items-center gap-6 relative">
<div className="">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Ready to unify your commerce?</h3>
<p className="text-white/70 mt-2">Build AI‑powered storefronts, automate catalog work, and connect every channel—on day one.</p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:justify-end">
<a className="inline-flex items-center justify-center px-4 h-11 rounded-md text-sm bg-[linear-gradient(135deg,#7C3AED_0%,#2563EB_100%)] hover:brightness-110 text-white shadow-[0_14px_40px_-12px_rgba(37,99,235,0.5)]" href="https://console.fynd.com/auth/sign-up">
              Start free
            </a>
<button className="inline-flex items-center justify-center px-4 h-11 rounded-md text-sm bg-white/10 hover:bg-white/15 border border-white/15 text-white" data-open-modal="contact" type="button">
              Book a demo
            </button>
</div>
</div>
</div>
</section>

<footer className="mt-16 md:mt-24 border-t border-white/10" id="footer">
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-5 gap-8">
<div className="md:col-span-2">
<a className="inline-flex items-center gap-2" href="#">
<div className="h-8 w-8 grid place-items-center rounded-md bg-white/10 ring-1 ring-white/15 text-white font-semibold">F</div>
<span className="text-white/90 font-medium tracking-tight">Fynd</span>
</a>
<p className="mt-3 text-sm text-white/60 max-w-sm">Unified commerce platform for modern brands. Launch faster, convert more, and scale efficiently with AI.</p>
<div className="mt-4 flex items-center gap-2">
<a className="inline-flex items-center justify-center px-3.5 h-9 rounded-md text-sm bg-[linear-gradient(135deg,#7C3AED_0%,#2563EB_100%)] hover:brightness-110 text-white" href="https://console.fynd.com/auth/sign-up">Start free</a>
<button className="inline-flex items-center justify-center px-3.5 h-9 rounded-md text-sm bg-white/10 hover:bg-white/15 border border-white/15 text-white" data-open-modal="contact" type="button">Contact sales</button>
</div>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-white/50">Product</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li><a className="hover:text-white" href="#products">Storefront</a></li>
<li><a className="hover:text-white" href="#products">AI Photoshoot</a></li>
<li><a className="hover:text-white" href="#products">Catalog Management</a></li>
<li><a className="hover:text-white" href="#integrations">Integrations</a></li>
</ul>
</div>
<div className="">
<div className="text-xs uppercase tracking-wider text-white/50">Resources</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li className=""><a className="hover:text-white" href="#resources">Playbooks</a></li>
<li className=""><a className="hover:text-white" href="https://partners.fynd.com/help">Docs</a></li>
<li className=""><a className="hover:text-white" href="https://www.fynd.com/events">Webinars</a></li>
<li><a className="hover:text-white" href="https://www.fynd.com/customer-stories">Customer stories</a></li>
</ul>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-white/50">Company</div>
<ul className="mt-3 space-y-2 text-sm text-white/80">
<li><a className="hover:text-white" href="https://www.fynd.com/about">About</a></li>
<li><a className="hover:text-white" href="https://www.fynd.com/careers">Careers</a></li>
<li><a className="hover:text-white" href="https://www.fynd.com/security">Security</a></li>
<li><a className="hover:text-white" href="https://www.fynd.com/contact">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50">
<div>© <span id="year">2025</span> Fynd. All rights reserved.</div>
<div className="flex items-center gap-4">
<a className="hover:text-white/70" href="https://www.fynd.com/terms">Terms</a>
<a className="hover:text-white/70" href="https://www.fynd.com/privacy">Privacy</a>
<a aria-label="Fynd on X" className="hover:text-white/70" href="https://x.com/fynd">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3l18 18M20 4L9 15M4 20L15 9"></path>
</svg>
</a>
<a aria-label="Fynd on LinkedIn" className="hover:text-white/70" href="https://www.linkedin.com/company/fynd/">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M8 11v6M8 7v.01M12 17v-4a2 2 0 1 1 4 0v4"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>

<div aria-labelledby="contactModalTitle" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="contactModal" role="dialog">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative mx-auto my-12 w-[92%] max-w-md rounded-2xl border border-white/10 bg-[#0A0B12]/95 p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-white" id="contactModalTitle">Talk to an expert</h3>
<button aria-label="Close" className="h-8 w-8 grid place-items-center rounded-md bg-white/10 hover:bg-white/15 border border-white/15" id="contactModalClose" type="button">
<svg className="h-4 w-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6l12 12M18 6l-12 12"></path>
</svg>
</button>
</div>
<p className="text-sm text-white/60 mt-1">Share a few details and we’ll reach out within 1 business day.</p>
<form className="mt-4 space-y-3" id="contactModalForm">
<input className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 outline-none focus:border-white/20" placeholder="Name" required="" type="text"/>
<input className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 outline-none focus:border-white/20" placeholder="Work email" required="" type="email"/>
<input className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 outline-none focus:border-white/20" placeholder="Company" type="text"/>
<textarea className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 outline-none focus:border-white/20" placeholder="What would you like to achieve?" rows="4"></textarea>
<div className="flex items-center justify-between">
<div className="text-[11px] text-white/50">We respect your privacy.</div>
<button className="px-4 h-10 rounded-md bg-white text-[#0A0B12] hover:opacity-95 text-sm" type="submit">Request demo</button>
</div>
</form>
<div className="mt-3 hidden rounded-md border border-emerald-400/30 bg-emerald-500/10 text-emerald-100 text-sm px-3 py-2" id="contactModalSuccess">
          Thanks! We’ll be in touch shortly.
        </div>
</div>
</div>



    </>
  );
}
