import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Initialize icons with global stroke width 1.5
      if (window.lucide) {
        lucide.createIcons({ attrs: { "stroke-width": "1.5" } });
      }

      // Copy code buttons
      document.querySelectorAll("[data-copy]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const target = document.querySelector(btn.getAttribute("data-copy"));
          if (!target) return;
          const text = target.innerText;
          navigator.clipboard.writeText(text).then(() => {
            const original = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="check" class="h-[14px] w-[14px]"></i> Copied';
            lucide.createIcons({ attrs: { "stroke-width": "1.5" } });
            setTimeout(() => {
              btn.innerHTML = original;
              lucide.createIcons({ attrs: { "stroke-width": "1.5" } });
            }, 1600);
          });
        });
      });

      // Year
      document.getElementById("year").textContent = new Date().getFullYear();

      // Pricing toggle wiring: mirror checkbox state to peer-dependent spans by toggling a class on body
      // Using CSS peer in cards requires the toggle to be a sibling; we simulate by toggling a class on root.
      const billingToggle = document.getElementById("billing-toggle");
      const updateBilling = () => {
        document.querySelectorAll("#pricing .peer-checked\\:hidden, #pricing .peer-checked\\:inline").forEach(() => {}); // noop for validity
        document.body.toggleAttribute("data-yearly", billingToggle.checked);
        // swap text visibility manually for robustness
        const swap = (monthlySel, yearlySel) => {
          document.querySelectorAll(monthlySel).forEach((el) => el.style.display = billingToggle.checked ? "none" : "");
          document.querySelectorAll(yearlySel).forEach((el) => el.style.display = billingToggle.checked ? "" : "none");
        };
        swap("#std-month", "#std-year");
        swap("#ll-month", "#ll-year");
        swap("#rtc-month", "#rtc-year");
      };
      billingToggle.addEventListener("change", updateBilling);
      updateBilling();

      // Chart.js latency chart
      const ctx = document.getElementById("latencyChart");
      if (ctx) {
        const chart = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Standard", "Low Latency", "Sub-Second"],
            datasets: [
              {
                label: "Median Latency (s)",
                data: [8.5, 3.1, 0.5],
                borderColor: "rgb(99, 102, 241)",
                backgroundColor: "rgba(99, 102, 241, 0.2)",
                tension: 0.35,
                pointRadius: 3,
                pointBackgroundColor: "rgb(255,255,255)",
                pointBorderColor: "rgb(99, 102, 241)",
                borderWidth: 2,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: "rgba(255,255,255,0.06)" },
                ticks: { color: "rgba(228,228,231,0.9)", stepSize: 2 },
              },
              x: {
                grid: { display: false },
                ticks: { color: "rgba(228,228,231,0.9)" },
              },
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: "rgba(24,24,27,0.95)",
                borderColor: "rgba(255,255,255,0.1)",
                borderWidth: 1,
                titleColor: "#fff",
                bodyColor: "rgba(228,228,231,0.9)",
                displayColors: false,
              },
            },
          },
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 right-[-20%] h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute top-1/3 -left-32 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 h-[18rem] w-[36rem] -translate-x-1/2 rounded-[60%] bg-cyan-400/5 blur-3xl"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">
<a className="flex items-center gap-3" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-zinc-900 ring-1 ring-inset ring-white/10">
<span className="text-sm font-semibold tracking-tight">bf</span>
</div>
<span className="text-[17px] font-semibold tracking-tight">byteflow<span className="text-zinc-400">.live</span></span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#code">API</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/10 transition-all hover:-translate-y-0.5" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-white/10 transition-all hover:-translate-y-0.5 hover:shadow hover:bg-zinc-100" href="#">
<i className="h-[18px] w-[18px]" data-lucide="key-round"></i>
              Get API key
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-12">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Global edge ingest • 99.99% uptime
            </div>
<h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold tracking-tight text-white">
              Build secure, low‑latency live streaming in minutes
            </h1>
<p className="text-base sm:text-lg text-zinc-300">
              DRM‑protected playback, ultra‑low latency, instant backup to VOD. Create, scale, and observe any live video project with a single API.
            </p>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-white/10 transition-all hover:-translate-y-0.5 hover:shadow hover:bg-zinc-100" href="#">
<i className="h-[18px] w-[18px]" data-lucide="zap"></i>
                Start streaming
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/10 transition-all hover:-translate-y-0.5" href="#code">
<i className="h-[18px] w-[18px]" data-lucide="code-2"></i>
                Explore the API
              </a>
<div className="flex items-center gap-3 text-xs text-zinc-400">
<div className="inline-flex items-center gap-1.5">
<i className="h-[16px] w-[16px] text-emerald-400" data-lucide="shield-check"></i>
                  DRM: Widevine • FairPlay • PlayReady
                </div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
<i className="h-[18px] w-[18px] text-indigo-400" data-lucide="lock"></i>
<span className="text-sm text-zinc-300">Secure tokens</span>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
<i className="h-[18px] w-[18px] text-fuchsia-400" data-lucide="camera"></i>
<span className="text-sm text-zinc-300">SRT • RTMP • WHIP</span>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
<i className="h-[18px] w-[18px] text-cyan-400" data-lucide="cloud"></i>
<span className="text-sm text-zinc-300">Instant backup</span>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2">
<i className="h-[18px] w-[18px] text-emerald-400" data-lucide="radar"></i>
<span className="text-sm text-zinc-300">Global delivery</span>
</div>
</div>
</div>

<div className="relative" id="code">
<div className="rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl p-4 sm:p-5 shadow-2xl ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-zinc-300">
<i className="h-[16px] w-[16px]" data-lucide="terminal"></i>
                  Create a live stream
                </div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-zinc-200 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/10 transition-all" data-copy="#curl">
<i className="h-[14px] w-[14px]" data-lucide="copy"></i> Copy
                  </button>
</div>
</div>
<div className="mt-3 rounded-lg border border-white/10 bg-zinc-950 p-3 overflow-x-auto">
<pre className="text-[12.5px] leading-5 text-zinc-300" id="curl"><code># Create a stream
curl -X POST https://api.byteflow.live/v1/streams \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "launch-demo",
    "latencyTier": "low",
    "record": true,
    "drm": { "widevine": true, "fairplay": true, "playready": true }
  }'

# Ingest (RTMP/SRT/WHIP)
# rtmp://live.byteflow.live/app/<streamkey>
# srt://ingest.byteflow.live:9000?streamid=<streamkey>
# whip: https://ingest.byteflow.live/whip/<streamkey></streamkey></streamkey></streamkey></code></pre>
</div>
<div className="mt-5 grid sm:grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2 text-xs text-zinc-300">
<i className="h-[16px] w-[16px]" data-lucide="nodejs"></i> Node
                  </div>
<pre className="mt-2 text-[12.5px] leading-5 text-zinc-300 overflow-x-auto"><code>import fetch from "node-fetch";
const res = await fetch("https://api.byteflow.live/v1/streams", {
  method: "POST",
  headers: {
    Authorization: "Bearer " + process.env.BF_API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "studio-session",
    latencyTier: "sub-second",
    record: true,
  }),
});
const stream = await res.json();</code></pre>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2 text-xs text-zinc-300">
<i className="h-[16px] w-[16px]" data-lucide="shield"></i> Playback (DRM)
                  </div>
<pre className="mt-2 text-[12.5px] leading-5 text-zinc-300 overflow-x-auto"><code>// Issue a signed playback token (server-side)
const jwt = sign({
  sub: stream.id,
  drm: ["widevine","fairplay","playready"],
  exp: Math.floor(Date.now()/1000)+3600
}, process.env.BF_PLAYBACK_SECRET);</code></pre>
</div>
</div>
<div className="mt-4 text-[11.5px] text-zinc-400">
                Live streams are converted to backup instantly and available as VOD right after the broadcast ends.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-6">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center justify-center gap-6 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-zinc-400">Trusted by builders at</div>
<div className="flex items-center gap-6 text-zinc-500">
<div className="tracking-tight text-sm font-semibold">NX</div>
<div className="tracking-tight text-sm font-semibold">ALPHA</div>
<div className="tracking-tight text-sm font-semibold">KITE</div>
<div className="tracking-tight text-sm font-semibold">ZEN</div>
<div className="tracking-tight text-sm font-semibold">ARC</div>
</div>
</div>
</div>
</section>

<section className="py-14" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Everything you need to go live</h2>
<a className="hidden sm:inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white transition" href="#">
<span>Read the docs</span>
<i className="h-[16px] w-[16px]" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition group">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-[18px] w-[18px] text-emerald-400" data-lucide="shield-check"></i>
<span className="text-sm font-medium">DRM &amp; Tokenized Playback</span>
</div>
<p className="mt-2 text-sm text-zinc-400">
              Widevine, FairPlay, and PlayReady with signed URL tokens. Lock content to devices, users, or sessions.
            </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition group">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-[18px] w-[18px] text-cyan-400" data-lucide="radar"></i>
<span className="text-sm font-medium">Low to Sub‑Second Latency</span>
</div>
<p className="mt-2 text-sm text-zinc-400">
              Choose Standard (HLS), Low Latency (LL‑HLS), or Sub‑Second (WebRTC) per stream.
            </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition group">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-[18px] w-[18px] text-fuchsia-400" data-lucide="hard-drive"></i>
<span className="text-sm font-medium">Instant Backup to VOD</span>
</div>
<p className="mt-2 text-sm text-zinc-400">
              Live is recorded on‑the‑fly and available immediately after the broadcast ends.
            </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition group">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-[18px] w-[18px] text-indigo-400" data-lucide="globe"></i>
<span className="text-sm font-medium">Global Ingest &amp; Delivery</span>
</div>
<p className="mt-2 text-sm text-zinc-400">
              Edge ingest from 20+ regions with multi‑CDN delivery and automatic failover.
            </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition group">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-[18px] w-[18px] text-rose-400" data-lucide="activity"></i>
<span className="text-sm font-medium">Observability</span>
</div>
<p className="mt-2 text-sm text-zinc-400">
              Real‑time QoE metrics: latency, startup time, buffering, viewers, and errors per segment.
            </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition group">
<div className="flex items-center gap-2 text-zinc-200">
<i className="h-[18px] w-[18px] text-amber-400" data-lucide="package"></i>
<span className="text-sm font-medium">SDKs &amp; Players</span>
</div>
<p className="mt-2 text-sm text-zinc-400">
              Client SDKs for web, iOS, Android. Bring your own player or use ours with built‑in DRM.
            </p>
</div>
</div>
</div>
</section>

<section className="py-6">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="h-[16px] w-[16px]" data-lucide="signal"></i>
              Latency by tier
            </div>
<div className="text-xs text-zinc-400">Median seconds</div>
</div>
<div className="mt-3 rounded-lg border border-white/10 bg-zinc-950 p-2">
<div className="relative h-56 md:h-64">
<canvas id="latencyChart"></canvas>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<h3 className="text-xl font-semibold tracking-tight">Pick your latency profile</h3>
<p className="mt-2 text-sm text-zinc-400">
            Optimize for interactivity or scale. You can switch tiers per stream or even per event.
          </p>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-3">
<i className="mt-0.5 h-[18px] w-[18px] text-indigo-400" data-lucide="play"></i>
<div>
<div className="text-zinc-200">Standard</div>
<div className="text-zinc-400">HLS • 6–12s latency • most compatible</div>
</div>
</li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-[18px] w-[18px] text-cyan-400" data-lucide="zap"></i>
<div>
<div className="text-zinc-200">Low Latency</div>
<div className="text-zinc-400">LL‑HLS • 2–5s latency • great for sports</div>
</div>
</li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-[18px] w-[18px] text-emerald-400" data-lucide="radio-tower"></i>
<div>
<div className="text-zinc-200">Sub‑Second</div>
<div className="text-zinc-400">WebRTC • 0.2–1s latency • realtime interactivity</div>
</div>
</li>
</ul>
<div className="mt-5 rounded-lg border border-white/10 bg-zinc-950 p-4">
<div className="text-xs text-zinc-400">Backup &amp; Recording</div>
<p className="mt-1 text-sm text-zinc-300">
              Every stream can auto‑record and publish as VOD. You get resilient multi‑region storage with lifecycle policies.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, usage‑based pricing</h2>
<p className="mt-2 text-zinc-400 text-sm sm:text-base">Choose a latency tier. Pay only for what you stream and store.</p>

<div className="mt-5">
<label className="inline-flex items-center gap-3">
<span className="text-sm text-zinc-300">Monthly</span>
<input className="peer sr-only" id="billing-toggle" type="checkbox"/>
<span className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full bg-white/10 ring-1 ring-inset ring-white/10 transition peer-checked:bg-white/20">
<span className="absolute left-1 peer-checked:left-6 h-4 w-4 rounded-full bg-white shadow transition-all"></span>
</span>
<span className="text-sm text-zinc-300">Yearly <span className="text-emerald-400">(save 15%)</span></span>
</label>
</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Standard</h3>
<span className="text-[11px] rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-zinc-300">HLS • 6–12s</span>
</div>
<div className="mt-4">
<div className="text-3xl font-semibold tracking-tight">
<span className="peer-checked:hidden" id="std-month">$0</span>
<span className="hidden peer-checked:inline" id="std-year">$0</span>
<span className="ml-1 text-sm font-medium text-zinc-400">platform / mo</span>
</div>
<div className="mt-1 text-sm text-zinc-300">
<span className="peer-checked:hidden">$0.002</span>
<span className="hidden peer-checked:inline">$0.0017</span>
                / min streaming • $0.01/GB storage
              </div>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2"><i className="h-[16px] w-[16px] text-emerald-400" data-lucide="check"></i>1080p60</li>
<li className="flex items-center gap-2"><i className="h-[16px] w-[16px] text-emerald-400" data-lucide="check"></i>Tokenized playback</li>
<li className="flex items-center gap-2"><i className="h-[16px] w-[16px] text-emerald-400" data-lucide="check"></i>Instant backup to VOD</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-white/10 transition hover:-translate-y-0.5 hover:shadow" href="#">
                Get started
              </a>
</div>
</div>

<div className="flex flex-col rounded-xl border border-indigo-400/20 bg-gradient-to-b from-white/10 to-white/[0.07] p-6 ring-1 ring-inset ring-indigo-400/20">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Low Latency</h3>
<span className="text-[11px] rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-zinc-300">LL‑HLS • 2–5s</span>
</div>
<div className="mt-4">
<div className="text-3xl font-semibold tracking-tight">
<span className="peer-checked:hidden" id="ll-month">$49</span>
<span className="hidden peer-checked:inline" id="ll-year">$42</span>
<span className="ml-1 text-sm font-medium text-zinc-400">platform / mo</span>
</div>
<div className="mt-1 text-sm text-zinc-300">
<span className="peer-checked:hidden">$0.004</span>
<span className="hidden peer-checked:inline">$0.0034</span>
                / min streaming • $0.01/GB storage
              </div>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2"><i className="h-[16px] w-[16px] text-emerald-400" data-lucide="check"></i>1080p60 + LL‑HLS</li>
<li className="flex items-center gap-2"><i className="h-[16px] w-[16px] text-emerald-400" data-lucide="check"></i>DRM (WV/FP/PR)</li>
<li className="flex items-center gap-2"><i className="h-[16px] w-[16px] text-emerald-400" data-lucide="check"></i>Priority ingest &amp; egress</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-white/10 transition hover:-translate-y-0.5 hover:shadow" href="#">
                Choose Low Latency
              </a>
</div>
</div>

<div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Sub‑Second</h3>
<span className="text-[11px] rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-zinc-300">WebRTC • 0.2–1s</span>
</div>
<div className="mt-4">
<div className="text-3xl font-semibold tracking-tight">
<span className="peer-checked:hidden" id="rtc-month">$199</span>
<span className="hidden peer-checked:inline" id="rtc-year">$169</span>
<span className="ml-1 text-sm font-medium text-zinc-400">platform / mo</span>
</div>
<div className="mt-1 text-sm text-zinc-300">
<span className="peer-checked:hidden">$0.008</span>
<span className="hidden peer-checked:inline">$0.0068</span>
                / min streaming • $0.01/GB storage
              </div>
</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2"><i className="h-[16px] w-[16px] text-emerald-400" data-lucide="check"></i>Realtime WebRTC</li>
<li className="flex items-center gap-2"><i className="h-[16px] w-[16px] text-emerald-400" data-lucide="check"></i>Interactive chat &amp; data channels</li>
<li className="flex items-center gap-2"><i className="h-[16px] w-[16px] text-emerald-400" data-lucide="check"></i>Advanced QoS controls</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-white/10 transition hover:-translate-y-0.5 hover:shadow" href="#">
                Go Sub‑Second
              </a>
</div>
</div>
</div>
<div className="mt-4 text-xs text-zinc-500">
          Prices are indicative and may vary by region. Egress may apply depending on your CDN and audience distribution.
        </div>
</div>
</section>

<section className="py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.07] p-6 sm:p-8 md:p-10">
<div className="grid md:grid-cols-2 gap-6 items-center">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ship your next live video project</h3>
<p className="mt-2 text-sm sm:text-base text-zinc-300">
                Spin up your first stream in seconds. Switch latency tiers anytime. Your content is secure, resilient, and ready for replay.
              </p>
</div>
<div className="flex md:justify-end items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-white/10 transition hover:-translate-y-0.5 hover:shadow" href="#">
<i className="h-[18px] w-[18px]" data-lucide="key-round"></i>
                Get API key
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/10 transition hover:-translate-y-0.5" href="#">
<i className="h-[18px] w-[18px]" data-lucide="book-open"></i>
                View docs
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12" id="faq">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<h3 className="text-2xl font-semibold tracking-tight">FAQs</h3>
<div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
<details className="group open:bg-white/5 p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-zinc-200">
              How fast is playback start?
              <i className="h-[18px] w-[18px] transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-zinc-400">
              Standard starts in ~2–4s, Low Latency ~1–2s, Sub‑Second ~200–500ms depending on network and player.
            </p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-zinc-200">
              Do you support ingest protocols beyond RTMP?
              <i className="h-[18px] w-[18px] transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-zinc-400">
              Yes. We support RTMP, SRT, and WHIP (WebRTC) for ingest. You can choose what fits your workflow best.
            </p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-zinc-200">
              How does instant backup work?
              <i className="h-[18px] w-[18px] transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-zinc-400">
              We segment and persist your live stream during broadcast, so VOD is available immediately after the stream ends.
            </p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-zinc-200">
              What DRM options are available?
              <i className="h-[18px] w-[18px] transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-zinc-400">
              Widevine, FairPlay, and PlayReady. Attach policies per stream and sign playback tokens server‑side.
            </p>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-zinc-900 ring-1 ring-inset ring-white/10">
<span className="text-sm font-semibold tracking-tight">bf</span>
</div>
<span className="text-[16px] font-semibold tracking-tight">byteflow.live</span>
</div>
<p className="text-sm text-zinc-400">
              Secure, low‑latency live streaming APIs with instant backup to VOD.
            </p>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">Product</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-white transition" href="#features">Features</a></li>
<li><a className="hover:text-white transition" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition" href="#">Docs</a></li>
<li><a className="hover:text-white transition" href="#">Status</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">Developers</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-white transition" href="#code">API</a></li>
<li><a className="hover:text-white transition" href="#">SDKs</a></li>
<li><a className="hover:text-white transition" href="#">Changelog</a></li>
<li><a className="hover:text-white transition" href="#">GitHub</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">Company</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-white transition" href="#">About</a></li>
<li><a className="hover:text-white transition" href="#">Contact</a></li>
<li><a className="hover:text-white transition" href="#">Privacy</a></li>
<li><a className="hover:text-white transition" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex items-center justify-between text-xs text-zinc-500">
<div>© <span id="year"></span> Byteflow Technologies</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 text-zinc-400">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              All systems operational
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
