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
      {

    // Background
    const container = document.getElementById('bg');
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: document.getElementById('vertexShader').textContent,
      fragmentShader: document.getElementById('fragmentShader').textContent
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let rafId = null;
    let paused = false;
    const startTime = performance.now();

    function renderFrame(now) {
      uniforms.u_time.value = (now - startTime) * 0.001;
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(renderFrame);
    }
    rafId = requestAnimationFrame(renderFrame);

    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h, false);
      uniforms.u_resolution.value.set(w, h);
    }
    window.addEventListener('resize', onResize);
    onResize();

    // UI
    const pauseBtn = document.getElementById('pauseBtn');
    const pauseLabel = document.getElementById('pauseLabel');
    const pauseIcon = document.getElementById('pauseIcon');
    const playIcon = document.getElementById('playIcon');

    pauseBtn.addEventListener('click', () => {
      paused = !paused;
      if (paused) {
        cancelAnimationFrame(rafId);
        rafId = null;
        pauseLabel.textContent = 'Resume';
        pauseIcon.classList.add('hidden');
        playIcon.classList.remove('hidden');
      } else {
        pauseLabel.textContent = 'Pause';
        pauseIcon.classList.remove('hidden');
        playIcon.classList.add('hidden');
        rafId = requestAnimationFrame(renderFrame);
      }
    });

    // Copy command
    const copyBtn = document.getElementById('copyBtn');
    const installCmd = document.getElementById('installCmd');
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(installCmd.textContent.trim());
        copyBtn.innerHTML = '<i data-lucide="check" style="width:16px;height:16px;"></i> Copied';
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        setTimeout(() => {
          copyBtn.innerHTML = '<i data-lucide="clipboard" style="width:16px;height:16px;"></i> Copy';
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }, 2000);
      } catch {}
    });

    // Pricing toggle
    const monthlyBtn = document.getElementById('monthlyBtn');
    const yearlyBtn = document.getElementById('yearlyBtn');
    const priceEls = document.querySelectorAll('[data-price]');

    function setBilling(mode) {
      priceEls.forEach((el) => {
        const value = el.getAttribute(mode === 'yearly' ? 'data-yearly' : 'data-monthly');
        el.textContent = value;
      });
      if (mode === 'yearly') {
        yearlyBtn.classList.add('bg-white/10', 'text-white/90');
        monthlyBtn.classList.remove('bg-white/10', 'text-white/90');
        monthlyBtn.classList.add('text-white/70');
      } else {
        monthlyBtn.classList.add('bg-white/10', 'text-white/90');
        yearlyBtn.classList.remove('bg-white/10', 'text-white/90');
        yearlyBtn.classList.add('text-white/70');
      }
    }
    monthlyBtn.addEventListener('click', () => setBilling('monthly'));
    yearlyBtn.addEventListener('click', () => setBilling('yearly'));
    setBilling('monthly');

    // Chart
    const ctx = document.getElementById('trafficChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 180);
    gradient.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
    gradient.addColorStop(1, 'rgba(56, 189, 248, 0.00)');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
        datasets: [{
          label: 'Active users',
          data: Array.from({ length: 24 }, () => Math.round(200 + Math.random() * 400)),
          borderColor: 'rgba(56, 189, 248, 1)',
          backgroundColor: gradient,
          borderWidth: 2,
          tension: 0.35,
          pointRadius: 0,
          fill: true,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 700 },
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#fff',
            bodyColor: '#d1d5db',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            padding: 10,
            displayColors: false,
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: 'rgba(255,255,255,0.6)', maxTicksLimit: 6 }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.08)' },
            ticks: { color: 'rgba(255,255,255,0.6)', maxTicksLimit: 5 }
          }
        }
      }
    });

    // Lucide icons
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  
}
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
      

<div className="absolute inset-0 -z-10" id="bg"></div>

<div className="pointer-events-none fixed inset-0" style={{background: `radial-gradient(1200px 600px at 50% 60%, rgba(255,255,255,0.08), rgba(0,0,0,0) 60%), radial-gradient(900px 500px at 0% 0%, rgba(0,180,255,0.10), rgba(0,0,0,0) 50%), radial-gradient(900px 500px at 100% 0%, rgba(128,0,255,0.10), rgba(0,0,0,0) 50%)`}}></div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-5">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 backdrop-blur">
<span className="text-white tracking-tight text-lg font-semibold leading-none">GR</span>
</div>
<div className="hidden sm:flex sm:flex-col">
<p className="text-sm text-white/80 tracking-tight">Glowing Rays</p>
<p className="text-xs text-white/50">Data experience platform</p>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-white/75">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#docs">Docs</a>
<a className="hover:text-white transition-colors" href="#changelog">Changelog</a>
</nav>
<div className="flex items-center gap-2">
<button className="group inline-flex items-center gap-2 rounded-md bg-white/5 px-3.5 py-2 text-sm font-medium text-white/90 ring-1 ring-white/15 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" id="pauseBtn">
<i className="opacity-90 group-hover:opacity-100 transition" data-lucide="pause" id="pauseIcon" style={{width: `18px`, height: `18px`}}></i>
<i className="hidden opacity-90 group-hover:opacity-100 transition" data-lucide="play" id="playIcon" style={{width: `18px`, height: `18px`}}></i>
<span className="tracking-tight" id="pauseLabel">Pause</span>
</button>
<a className="hidden sm:inline-flex items-center rounded-md px-3.5 py-2 text-sm font-medium text-white/90 hover:text-white transition" href="#signin">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/90 text-black px-3.5 py-2 text-sm font-medium hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" href="#get-started">
<i data-lucide="sparkles" style={{width: `18px`, height: `18px`}}></i>
            Get started
          </a>
</div>
</div>
</div>
<div className="border-t border-white/10"></div>
</header>

<main className="relative z-10">
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
<div className="grid md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
<span className="inline-flex items-center gap-1">
<i data-lucide="bolt" style={{width: `14px`, height: `14px`}}></i> New
            </span>
<div className="h-3 w-px bg-white/15"></div>
<span>Realtime analytics SDK</span>
</div>
<h1 className="mt-4 text-3xl md:text-5xl tracking-tight font-semibold text-white/95">Make your data glow.</h1>
<p className="mt-4 text-base md:text-lg text-white/70">Glowing Rays is the fast, modern way to capture, transform, and visualize product data. Ship dashboards your users love in days, not months.</p>
<div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" href="#get-started">
<i data-lucide="rocket" style={{width: `18px`, height: `18px`}}></i>
              Start free trial
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white/5 ring-1 ring-white/15 px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white transition" href="#demo">
<i data-lucide="video" style={{width: `18px`, height: `18px`}}></i>
              Book live demo
            </a>
<div className="flex-1 sm:flex-none"></div>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/70 text-sm">
<div className="inline-flex items-center gap-2">
<i data-lucide="shield-check" style={{width: `18px`, height: `18px`}}></i>
              SOC2-ready
            </div>
<div className="inline-flex items-center gap-2">
<i data-lucide="clock" style={{width: `18px`, height: `18px`}}></i>
              99.99% uptime
            </div>
<div className="inline-flex items-center gap-2">
<i data-lucide="zap" style={{width: `18px`, height: `18px`}}></i>
<span>SDK <span className="text-white/50">for</span> JS, iOS, Android</span>
</div>
</div>

<div className="mt-8 rounded-lg bg-white/5 ring-1 ring-white/10 p-3 sm:p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-white/60">Install the SDK</p>
<span className="text-[11px] text-white/50">npm • yarn • pnpm</span>
</div>
<div className="mt-2 flex items-center justify-between rounded-md bg-black/60 ring-1 ring-white/10 px-3 py-2">
<code className="text-[13px] text-white/90" id="installCmd">npm i @glowing-rays/sdk</code>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/10 transition" id="copyBtn">
<i data-lucide="clipboard" style={{width: `16px`, height: `16px`}}></i>
                Copy
              </button>
</div>
</div>
</div>

<div className="md:col-span-5">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur shadow-2xl shadow-black/30">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="inline-flex items-center gap-2">
<i data-lucide="bar-chart-3" style={{width: `18px`, height: `18px`}}></i>
<span className="text-sm text-white/80">Realtime Overview</span>
</div>
<div className="inline-flex items-center gap-2 text-xs text-white/60">
<i data-lucide="clock-4" style={{width: `16px`, height: `16px`}}></i>
                Last 24h
              </div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-white/85 tracking-tight">Active users</h3>
<p className="text-xs text-white/60 mt-0.5">Sessions per minute</p>
<div className="mt-3 rounded-lg bg-black/40 ring-1 ring-white/10">
<div className="p-3">
<div>
<div style={{position: `relative`, height: `180px`}}>
<canvas id="trafficChart"></canvas>
</div>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-white/60">DAU</p>
<p className="mt-1 text-base font-medium tracking-tight">12,941</p>
<p className="mt-0.5 text-[11px] text-emerald-400/80 inline-flex items-center gap-1">
<i data-lucide="arrow-up-right" style={{width: `14px`, height: `14px`}}></i> 4.2%
                  </p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-white/60">Latency</p>
<p className="mt-1 text-base font-medium tracking-tight">46 ms</p>
<p className="mt-0.5 text-[11px] text-emerald-400/80 inline-flex items-center gap-1">
<i data-lucide="arrow-down-right" style={{width: `14px`, height: `14px`}}></i> -7.1%
                  </p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-white/60">Errors</p>
<p className="mt-1 text-base font-medium tracking-tight">0.02%</p>
<p className="mt-0.5 text-[11px] text-emerald-400/80 inline-flex items-center gap-1">
<i data-lucide="check" style={{width: `14px`, height: `14px`}}></i> Stable
                  </p>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-white/50">Rendered example data. Use our SDK to stream your own.</p>
</div>
</div>

<div className="mt-12 border-t border-white/10 pt-6">
<p className="text-xs text-white/50">Trusted by product teams at</p>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
<div className="h-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/70 text-sm tracking-tight">NT</div>
<div className="h-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/70 text-sm tracking-tight">VX</div>
<div className="h-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/70 text-sm tracking-tight">AP</div>
<div className="h-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/70 text-sm tracking-tight">QR</div>
<div className="h-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/70 text-sm tracking-tight">SK</div>
<div className="h-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white/70 text-sm tracking-tight">LM</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16" id="features">
<div className="max-w-3xl">
<h2 className="text-2xl md:text-4xl tracking-tight font-semibold text-white/95">Everything you need to ship analytics, fast</h2>
<p className="mt-3 text-white/70">SDKs, pipelines, and prebuilt components that scale from startup to enterprise.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 ring-1 ring-white/15">
<i data-lucide="boxes" style={{width: `18px`, height: `18px`}}></i>
</div>
<h3 className="mt-3 text-lg font-medium tracking-tight">Event pipeline</h3>
<p className="mt-1 text-sm text-white/70">Batch, stream, and transform events in a single, secure pipeline.</p>
<ul className="mt-3 space-y-1.5 text-sm text-white/70">
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Exactly-once delivery</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> PII handling</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Warehouse sync</li>
</ul>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 ring-1 ring-white/15">
<i data-lucide="gauge" style={{width: `18px`, height: `18px`}}></i>
</div>
<h3 className="mt-3 text-lg font-medium tracking-tight">Low-latency SDK</h3>
<p className="mt-1 text-sm text-white/70">Tiny footprint. Edge first. Works offline and retries intelligently.</p>
<ul className="mt-3 space-y-1.5 text-sm text-white/70">
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> 6.4KB gzipped</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Type-safe API</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Batched transport</li>
</ul>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 ring-1 ring-white/15">
<i data-lucide="chart-line" style={{width: `18px`, height: `18px`}}></i>
</div>
<h3 className="mt-3 text-lg font-medium tracking-tight">UI components</h3>
<p className="mt-1 text-sm text-white/70">Beautiful charts, tables, and filters that match your brand.</p>
<ul className="mt-3 space-y-1.5 text-sm text-white/70">
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Headless or styled</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Accessibility built-in</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Theming tokens</li>
</ul>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 ring-1 ring-white/15">
<i data-lucide="server-cog" style={{width: `18px`, height: `18px`}}></i>
</div>
<h3 className="mt-3 text-lg font-medium tracking-tight">Built for scale</h3>
<p className="mt-1 text-sm text-white/70">Multi-region by default with automatic failover and backpressure.</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 ring-1 ring-white/15">
<i data-lucide="lock-keyhole" style={{width: `18px`, height: `18px`}}></i>
</div>
<h3 className="mt-3 text-lg font-medium tracking-tight">Security-first</h3>
<p className="mt-1 text-sm text-white/70">Row-level encryption, SSO/SAML, audit logs, and fine-grained roles.</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 ring-1 ring-white/15">
<i data-lucide="plug-zap" style={{width: `18px`, height: `18px`}}></i>
</div>
<h3 className="mt-3 text-lg font-medium tracking-tight">200+ integrations</h3>
<p className="mt-1 text-sm text-white/70">From data warehouses to marketing tools—connect in minutes.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16" id="pricing">
<div className="max-w-3xl">
<h2 className="text-2xl md:text-4xl tracking-tight font-semibold text-white/95">Simple, transparent pricing</h2>
<p className="mt-3 text-white/70">Start free. Scale as you grow. No hidden fees.</p>
</div>

<div className="mt-6 flex items-center gap-3">
<div className="text-sm text-white/60">Billing:</div>
<div className="inline-flex items-center rounded-lg bg-white/5 ring-1 ring-white/10 p-1">
<button className="tab-btn px-3 py-1.5 text-xs rounded-md bg-white/10 text-white/90 transition" id="monthlyBtn">Monthly</button>
<button className="tab-btn px-3 py-1.5 text-xs rounded-md text-white/70 hover:text-white transition" id="yearlyBtn">Yearly</button>
</div>
<span className="text-[11px] text-emerald-400/90 inline-flex items-center gap-1">
<i data-lucide="percent" style={{width: `14px`, height: `14px`}}></i> Save 20% annually
        </span>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6 flex flex-col">
<div className="inline-flex items-center gap-2">
<i data-lucide="leaf" style={{width: `18px`, height: `18px`}}></i>
<h3 className="text-lg font-medium tracking-tight">Starter</h3>
</div>
<p className="mt-1 text-sm text-white/70">All you need to get moving.</p>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight" data-monthly="$0" data-price="" data-yearly="$0">$0</span>
<span className="text-sm text-white/50">/month</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> 100k events/mo</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> 3 projects</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Community support</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition" href="#get-started">Get started</a>
</div>
</div>

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6 flex flex-col">
<div className="inline-flex items-center gap-2">
<i data-lucide="sparkle" style={{width: `18px`, height: `18px`}}></i>
<h3 className="text-lg font-medium tracking-tight">Pro</h3>
<span className="ml-2 text-[11px] text-emerald-400/90 inline-flex items-center gap-1 ring-1 ring-emerald-400/20 rounded px-1.5 py-0.5">
<i data-lucide="star" style={{width: `14px`, height: `14px`}}></i> Popular
            </span>
</div>
<p className="mt-1 text-sm text-white/70">For growing teams shipping dashboards.</p>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight" data-monthly="$39" data-price="" data-yearly="$31">$39</span>
<span className="text-sm text-white/50">/month</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> 5M events/mo</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Unlimited projects</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Role-based access</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Email support</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition" href="#upgrade">Upgrade</a>
</div>
</div>

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6 flex flex-col">
<div className="inline-flex items-center gap-2">
<i data-lucide="building-2" style={{width: `18px`, height: `18px`}}></i>
<h3 className="text-lg font-medium tracking-tight">Enterprise</h3>
</div>
<p className="mt-1 text-sm text-white/70">Compliance, SSO, and premium support.</p>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight">Custom</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Unlimited events</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> Dedicated cluster</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> SSO/SAML, audit logs</li>
<li className="inline-flex items-center gap-2"><i data-lucide="check" style={{width: `16px`, height: `16px`}}></i> 24/7 support</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 text-white px-4 py-2 text-sm font-medium hover:bg-white/15 transition" href="#contact">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full ring-1 ring-white/20 object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&fit=crop&crop=faces" />
<div>
<p className="text-sm font-medium tracking-tight">Alex Rivera</p>
<p className="text-xs text-white/60">Head of Product, NovaTech</p>
</div>
</div>
<p className="mt-3 text-white/80">“We integrated in a day and shipped a usable dashboard that same week. Our execs are obsessed.”</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full ring-1 ring-white/20 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop&crop=faces" />
<div>
<p className="text-sm font-medium tracking-tight">Priya Shah</p>
<p className="text-xs text-white/60">CTO, Orbit Labs</p>
</div>
</div>
<p className="mt-3 text-white/80">“Latency is fantastic and the SDK is rock solid. It’s rare to find this level of polish.”</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8 sm:p-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white/95">Start building with Glowing Rays today</h3>
<p className="mt-2 text-white/70">Free forever for hobby projects. Upgrade when you’re ready.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition" href="#get-started">
<i data-lucide="wand-2" style={{width: `18px`, height: `18px`}}></i>
              Create account
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/5 ring-1 ring-white/15 px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white transition" href="#docs">
<i data-lucide="book-open" style={{width: `18px`, height: `18px`}}></i>
              Read docs
            </a>
</div>
</div>
</div>
</section>
</main>

<footer className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="border-t border-white/10"></div>
<div className="py-8 grid md:grid-cols-5 gap-6">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
<span className="text-white tracking-tight text-lg font-semibold leading-none">GR</span>
</div>
<span className="text-sm text-white/70">Glowing Rays</span>
</div>
<p className="mt-3 text-xs text-white/55">Shader runs on a full-screen quad. Toggle motion if needed.</p>
<p className="mt-1 text-xs text-white/40">© <span id="year"></span> GR Studio</p>
</div>
<div>
<p className="text-xs text-white/60">Product</p>
<ul className="mt-2 space-y-1 text-sm text-white/70">
<li><a className="hover:text-white" href="#features">Features</a></li>
<li><a className="hover:text-white" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white" href="#changelog">Changelog</a></li>
</ul>
</div>
<div>
<p className="text-xs text-white/60">Company</p>
<ul className="mt-2 space-y-1 text-sm text-white/70">
<li><a className="hover:text-white" href="#">About</a></li>
<li><a className="hover:text-white" href="#">Blog</a></li>
<li><a className="hover:text-white" href="#">Jobs</a></li>
</ul>
</div>
<div>
<p className="text-xs text-white/60">Resources</p>
<ul className="mt-2 space-y-1 text-sm text-white/70">
<li><a className="hover:text-white" href="#docs">Docs</a></li>
<li><a className="hover:text-white" href="#">Guides</a></li>
<li><a className="hover:text-white" href="#">Status</a></li>
</ul>
</div>
</div>
</div>
</footer>





<script id="fragmentShader" type="x-shader/x-fragment" dangerouslySetInnerHTML={{
  __html: `
    precision highp float;
    uniform float u_time;
    uniform vec2 u_resolution;
    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      uv = uv * 2.0 - 1.0; // normalize to -1..1
      float angle = atan(uv.y, uv.x);
      float radius = length(uv);
      float rays = cos(angle * 10.0 + u_time * 0.5) * 0.5 + 0.5;
      float glow = exp(-radius * 2.5);
      vec3 color = mix(vec3(0.1, 0.0, 0.3), vec3(0.0, 0.8, 1.0), rays * glow);
      gl_FragColor = vec4(color, 1.0);
    }
  `
}} />
<script id="vertexShader" type="x-shader/x-vertex" dangerouslySetInnerHTML={{
  __html: `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `
}} />



    </>
  );
}
