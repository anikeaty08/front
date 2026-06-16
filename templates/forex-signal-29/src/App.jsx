import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Lucide icons with 1.5 stroke-width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Footer year
      document.getElementById('year').textContent = new Date().getFullYear();

      // VSL player toggle
      const vslVideo = document.getElementById('vslVideo');
      const vslPlay = document.getElementById('vslPlay');
      if (vslPlay && vslVideo) {
        vslPlay.addEventListener('click', () => {
          vslVideo.play().catch(() => {});
          vslVideo.setAttribute('controls', 'controls');
          vslPlay.style.display = 'none';
        });
        vslVideo.addEventListener('pause', () => {
          // show play button again
          vslPlay.style.display = 'flex';
          vslVideo.removeAttribute('controls');
        });
        vslVideo.addEventListener('play', () => {
          vslPlay.style.display = 'none';
          vslVideo.setAttribute('controls', 'controls');
        });
      }

      // Live chat stream (preview)
      const chatStream = document.getElementById('chatStream');
      const samples = [
        {pair:'EURUSD', dir:'Short', entry:'1.0886', sl:'1.0912', tp:'1.0856', note:'NY session momentum'},
        {pair:'XAUUSD', dir:'Long', entry:'2331.0', sl:'2326.0', tp:'2342.0', note:'Liquidity sweep + structure'},
        {pair:'GBPUSD', dir:'Long', entry:'1.2775', sl:'1.2745', tp:'1.2825', note:'Reclaim of H1 level'},
        {pair:'USDJPY', dir:'Short', entry:'156.40', sl:'156.90', tp:'155.40', note:'Divergence + DXY push'},
      ];
      const updates = [
        'Moved SL to BE after +20 pips',
        'TP1 hit, partials taken',
        'Let runners play, trailing SL',
        'News in 10m — reduce risk',
        'Setup invalidated — closing early',
      ];
      function makeMsgHTML(s) {
        return `
          <div class="rounded-lg border border-white/10 bg-black/30 p-3">
            <div class="flex items-center justify-between">
              <div class="text-sm font-medium tracking-tight">${s.pair} ${s.dir}</div>
              <span class="text-[11px] text-slate-400">${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
            </div>
            <div class="mt-1 text-xs text-slate-300 flex flex-wrap gap-x-4 gap-y-1">
              <span>Entry <span class="text-slate-200">${s.entry}</span></span>
              <span>SL <span class="text-slate-300">${s.sl}</span></span>
              <span>TP <span class="text-slate-200">${s.tp}</span></span>
            </div>
            <div class="mt-2 text-xs text-slate-400">${s.note}</div>
          </div>
        `;
      }
      function makeUpdateHTML(text) {
        return `
          <div class="rounded-lg border border-white/15 bg-white/5 p-3">
            <div class="flex items-center gap-2 text-xs text-slate-200">
              <i data-lucide="bell" class="w-4 h-4"></i>
              <span>Update</span>
            </div>
            <div class="mt-1 text-sm">${text}</div>
          </div>
        `;
      }
      if (chatStream) {
        // seed a few
        samples.slice(0,2).forEach(s => {
          chatStream.insertAdjacentHTML('beforeend', makeMsgHTML(s));
        });
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        chatStream.scrollTop = chatStream.scrollHeight;

        let i = 0;
        setInterval(() => {
          const roll = Math.random();
          if (roll < 0.65) {
            const s = samples[i % samples.length];
            chatStream.insertAdjacentHTML('beforeend', makeMsgHTML(s));
            i++;
          } else {
            const u = updates[Math.floor(Math.random()*updates.length)];
            chatStream.insertAdjacentHTML('beforeend', makeUpdateHTML(u));
          }
          if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          chatStream.scrollTop = chatStream.scrollHeight;
        }, 2800);
      }

      // Chart.js Equity Curve (grayscale)
      const ctx = document.getElementById('equityChart');
      if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.00)');

        const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`);
        // Synthetic equity curve
        let base = 100;
        const data = labels.map(() => {
          base += (Math.random() * 2.8 - 0.6);
          return Math.max(95, Math.min(130, base));
        });

        new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              label: 'Equity',
              data,
              fill: true,
              backgroundColor: gradient,
              borderColor: 'rgba(255, 255, 255, 0.9)',
              borderWidth: 2,
              tension: 0.32,
              pointRadius: 0,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                titleColor: '#fff',
                bodyColor: '#cbd5e1',
                intersect: false,
                mode: 'index',
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: '#94a3b8', maxRotation: 0, autoSkip: true, maxTicksLimit: 6 }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: '#94a3b8' }
              }
            },
            elements: { line: { capBezierPoints: true } }
          }
        });
      }

      // FAQ icon toggle
      document.querySelectorAll('#faq details').forEach(d => {
        d.addEventListener('toggle', () => {
          const icon = d.querySelector('[data-lucide]');
          if (!icon) return;
          const isOpen = d.open;
          icon.setAttribute('data-lucide', isOpen ? 'minus' : 'plus');
          if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
<div className="absolute -top-32 -left-32 h-[38rem] w-[38rem] rounded-full bg-gradient-to-tr from-white/10 via-white/0 to-white/10 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-white/10 via-white/0 to-white/10 blur-3xl"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/35 bg-black/30 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-white/5 border border-white/15 flex items-center justify-center">
<span className="text-slate-100 font-semibold tracking-tight">FS</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-slate-100 font-semibold tracking-tight">FX Signal Co</span>
<span className="text-xs text-slate-400">Forex. Simplified.</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#how">How it works</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#signals">Signals</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#results">Results</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#vip">VIP</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#trust">Trust</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<span className="hidden sm:inline-flex items-center rounded-full border border-white/20 text-slate-200 bg-white/10 px-2 py-0.5 text-[11px] font-medium tracking-tight">FREE</span>
<a className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-3.5 py-2 text-sm font-medium tracking-tight hover:bg-slate-100 hover:outline hover:outline-2 hover:outline-white/50 transition" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
              Join Telegram
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-10 sm:pb-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300">
<i className="w-4 h-4" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
              Instant forex alerts. Setup in 5 minutes.
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Trade with confidence.<br className="hidden sm:block"/>
<span className="">Free Forex signals that just work.</span>
</h1>
<p className="mt-4 text-base sm:text-lg text-slate-300">
              Free access. 24/7 support. No experience required.
              See results after your first trade.
            </p>
<ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
<li className="flex items-center gap-3">
<span className="h-6 w-6 rounded-md bg-white/10 border border-white/20 flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</span>
                Free forever
              </li>
<li className="flex items-center gap-3">
<span className="h-6 w-6 rounded-md bg-white/10 border border-white/20 flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
</span>
                24/7 human support
              </li>
<li className="flex items-center gap-3">
<span className="h-6 w-6 rounded-md bg-white/10 border border-white/20 flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="mouse-pointer-click" style={{strokeWidth: '1.5'}}></i>
</span>
                No experience required
              </li>
<li className="flex items-center gap-3">
<span className="h-6 w-6 rounded-md bg-white/10 border border-white/20 flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="rocket" style={{strokeWidth: '1.5'}}></i>
</span>
                Setup in 5 minutes
              </li>
</ul>
<div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex justify-center items-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2.5 text-sm font-medium tracking-tight hover:bg-slate-100 hover:outline hover:outline-2 hover:outline-white/50 transition" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
                Join our Telegram
              </a>
<a className="inline-flex justify-center items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-slate-200 hover:bg-white/10 hover:outline hover:outline-2 hover:outline-white/20 transition" href="#vsl">
<i className="w-4 h-4" data-lucide="play-circle" style={{strokeWidth: '1.5'}}></i>
                Watch 90s VSL
              </a>
</div>
<div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
<i className="w-4 h-4" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
              No credit card. Cancel anytime.
            </div>
</div>

<div className="relative rounded-xl border border-white/10 bg-white/5 overflow-hidden" id="vsl">
<div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-white/5"></div>
<div className="relative aspect-video">
<video className="w-full h-full object-cover filter grayscale" id="vslVideo" poster="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" preload="none">
<source src="https://cdn.coverr.co/videos/coverr-flying-over-banknotes-9446/1080p.mp4" type="video/mp4"/>
</video>
<button aria-label="Play video" className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition" id="vslPlay">
<i className="w-7 h-7" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="p-4 sm:p-5 flex items-center justify-between">
<div className="text-sm text-slate-300">Introduction to our signals</div>
<a className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
                Join Telegram
                <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="border-t border-white/10 pt-12">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">How it works</h2>
<p className="mt-2 text-slate-400 text-sm sm:text-base">From zero to trade-ready in minutes.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
              Start free
              <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-5">
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition">
<div className="h-10 w-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Join our Telegram</h3>
<p className="mt-2 text-sm text-slate-400">Tap the link, join instantly. No forms, no payment, no fuss.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-white/90 hover:text-white" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
                Join free
                <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition">
<div className="h-10 w-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="plug" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Set up in 5 minutes</h3>
<p className="mt-2 text-sm text-slate-400">Follow a simple guide to connect your broker or copy trades manually.</p>
<div className="mt-3 text-xs text-slate-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
                Works with major brokers
              </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition">
<div className="h-10 w-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="activity" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white">Receive signals &amp; execute</h3>
<p className="mt-2 text-sm text-slate-400">Get entries, SL/TP, and management updates in real time—on any device.</p>
<div className="mt-3 text-xs text-slate-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="bell" style={{strokeWidth: '1.5'}}></i>
                Instant notifications
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="signals">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="border-t border-white/10 pt-12">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Live signal feed</h2>
<p className="mt-2 text-slate-400 text-sm sm:text-base">A realtime preview of how signals look in Telegram.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
              Get signals now
              <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="mt-8 grid lg:grid-cols-2 gap-6">

<div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/10 border border-white/15"></div>
<div>
<div className="text-sm font-medium tracking-tight">FX Signal Co — Free</div>
<div className="text-[11px] text-slate-400">Signals • 24/7 Support</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-xs text-white/90 hover:text-white transition" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
                  Join
                  <i className="w-3.5 h-3.5" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="h-[420px] overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white/[.06] to-transparent" id="chatStream">

</div>
<div className="p-3 border-t border-white/10 flex items-center gap-2">
<div className="flex-1">
<div className="text-[11px] text-slate-400">Preview only. Join the channel for full details &amp; risk management.</div>
</div>
<a className="inline-flex items-center gap-1.5 text-xs rounded-md bg-white text-slate-900 px-2.5 py-1.5 hover:bg-slate-100" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
<i className="w-3.5 h-3.5" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
                  Join
                </a>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-5">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-xs text-slate-400">Win rate (last 30d)</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-white">72.4%</div>
<div className="mt-3 text-xs text-slate-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
                  Based on public log
                </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-xs text-slate-400">Average R:R</div>
<div className="mt-2 text-3xl font-semibold tracking-tight text-white">1:1.9</div>
<div className="mt-3 text-xs text-slate-400 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="scale" style={{strokeWidth: '1.5'}}></i>
                  Risk-managed setups
                </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
<div className="text-xs text-slate-400">Pairs covered</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1">EURUSD</span>
<span className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1">GBPUSD</span>
<span className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1">USDJPY</span>
<span className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1">XAUUSD</span>
<span className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1">USDCAD</span>
<span className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1">AUDUSD</span>
</div>
<div className="mt-4 text-xs text-slate-400">More pairs added based on volatility and news calendar.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="results">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="border-t border-white/10 pt-12">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Results &amp; performance</h2>
<p className="mt-2 text-slate-400 text-sm sm:text-base">Transparent growth with disciplined risk.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
              Get started free
              <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-300">Equity curve (demo account)</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="w-4 h-4" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
                  Last 90 days
                </div>
</div>
<div className="mt-4 rounded-lg bg-black/20 p-2">
<div className="relative w-full" style={{height: '320px'}}>
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="equityChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 text-[11px] text-slate-400">Past performance does not guarantee future results.</div>
</div>
<div className="grid gap-5">
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
<img alt="Trade results screenshot" className="h-40 w-full object-cover filter grayscale" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<div className="text-sm font-medium tracking-tight">Day overview</div>
<div className="mt-1 text-xs text-slate-400">Multiple take-profit layers hit with tight SL.</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
<img alt="P/L snapshots" className="h-40 w-full object-cover filter grayscale" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<div className="text-sm font-medium tracking-tight">Weekly summary</div>
<div className="mt-1 text-xs text-slate-400">Consistent gains with controlled drawdown.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="vip">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="border-t border-white/10 pt-12">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">VIP channel — free access</h2>
<p className="mt-2 text-slate-400 text-sm sm:text-base">All pairs, live updates, coaching notes, and risk alerts.</p>
</div>
</div>
<div className="mt-8 grid lg:grid-cols-2 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-full border border-white/20 text-slate-200 bg-white/10 px-2 py-0.5 text-[11px] font-medium tracking-tight">FREE</span>
<div className="text-sm text-slate-300">No upsells. No paywalls.</div>
</div>
<ul className="mt-5 space-y-3 text-sm">
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
                  Premium entries with SL/TP and management updates
                </li>
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
                  News filters and volatility warnings
                </li>
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
                  Coaching notes and trade rationale
                </li>
<li className="flex items-start gap-3">
<i className="w-4.5 h-4.5 mt-0.5" data-lucide="check-circle" style={{strokeWidth: '1.5'}}></i>
                  24/7 chat support
                </li>
</ul>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-3.5 py-2 text-sm font-medium tracking-tight hover:bg-slate-100 hover:outline hover:outline-2 hover:outline-white/50 transition" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
                  Join VIP on Telegram
                </a>
<a className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white" href="#faq">
                  Learn more
                  <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/10 border border-white/15"></div>
<div>
<div className="text-sm font-medium tracking-tight">VIP Signals</div>
<div className="text-[11px] text-slate-400">Trade plans, updates, outcomes</div>
</div>
</div>
<span className="inline-flex items-center rounded-full border border-white/20 text-slate-200 bg-white/10 px-2 py-0.5 text-[11px] font-medium tracking-tight">FREE</span>
</div>
<div className="p-4 space-y-4">
<div className="rounded-lg border border-white/10 bg-black/20 p-3">
<div className="text-xs text-slate-400">Plan</div>
<div className="mt-1 text-sm">XAUUSD long 2331 → 2342 (SL 2326). TP1 2336, TP2 2342.</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/20 p-3">
<div className="text-xs text-slate-400">Update</div>
<div className="mt-1 text-sm">Moved SL to BE at 2336. Let runners play.</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/20 p-3">
<div className="text-xs text-slate-400">Outcome</div>
<div className="mt-1 text-sm">TP2 hit. +1.9R overall.</div>
</div>
<a className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
                  See VIP feed
                  <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="trust">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="border-t border-white/10 pt-12">
<div className="grid lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">Ratings</div>
<div className="text-xs text-slate-400">Community verified</div>
</div>
<div className="mt-4 flex items-center gap-1.5 text-white">
<i className="w-5 h-5" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5" data-lucide="star-half" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">4.8/5</div>
<div className="mt-2 text-xs text-slate-400">Based on channel feedback and user reviews.</div>
<a className="mt-4 inline-flex items-center gap-2 text-sm text-white/90 hover:text-white" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
                Read reviews
                <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="text-sm font-medium tracking-tight">In the conversation</div>
<div className="mt-4 grid grid-cols-3 gap-4">
<div className="h-14 rounded-lg border border-white/10 bg-black/20 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-slate-200">FXN</span>
</div>
<div className="h-14 rounded-lg border border-white/10 bg-black/20 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-slate-200">TRD</span>
</div>
<div className="h-14 rounded-lg border border-white/10 bg-black/20 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-slate-200">WIR</span>
</div>
</div>
<div className="mt-3 text-[11px] text-slate-400">Logotypes are illustrative; verify current coverage independently.</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="text-sm font-medium tracking-tight">What traders say</div>
<div className="mt-4 space-y-4">
<div className="flex items-start gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover border border-white/10 filter grayscale" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm">“First week in and already hit multiple TPs. Super clear management.”</div>
<div className="text-xs text-slate-400 mt-1">Maya • London</div>
</div>
</div>
<div className="flex items-start gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover border border-white/10 filter grayscale" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm">“Setup took minutes. I just copy and manage risk. Support is instant.”</div>
<div className="text-xs text-slate-400 mt-1">Ajay • Dubai</div>
</div>
</div>
<div className="flex items-start gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover border border-white/10 filter grayscale" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm">“Transparent results and realistic expectations. Best free channel I’ve used.”</div>
<div className="text-xs text-slate-400 mt-1">Elena • Madrid</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="border-t border-white/10 pt-12">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">A trader-first mission</h2>
<p className="mt-4 text-slate-300 text-sm sm:text-base">
                Built by traders for traders. We publish only the setups we trade ourselves,
                with clear risk guidelines and transparent tracking. Education over hype,
                process over luck.
              </p>
<div className="mt-6 flex items-center gap-4">
<img alt="Founder" className="h-12 w-12 rounded-full object-cover border border-white/10 filter grayscale" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight">A.K. — Founder &amp; Lead Analyst</div>
<div className="text-xs text-slate-400">10+ years in FX and systematic trading</div>
</div>
</div>
<div className="mt-7 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-3.5 py-2 text-sm font-medium tracking-tight hover:bg-slate-100 hover:outline hover:outline-2 hover:outline-white/50 transition" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
                  Join the channel
                </a>
<a className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white" href="#faq">
                  Read FAQ
                  <i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 overflow-hidden">
<img alt="Luxury workspace" className="h-56 w-full object-cover filter grayscale" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="rounded-xl border border-white/10 overflow-hidden">
<img alt="City skyline" className="h-56 w-full object-cover filter grayscale" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 rounded-xl border border-white/10 overflow-hidden">
<img alt="Luxury lifestyle" className="h-56 w-full object-cover filter grayscale" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="border-t border-white/10 pt-12">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Frequently asked questions</h2>
<div className="mt-6 grid lg:grid-cols-2 gap-6">
<div className="space-y-3">
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/7 cursor-pointer">
<summary className="flex items-center justify-between list-none">
<span className="text-sm font-medium tracking-tight">Is it really free?</span>
<i className="w-5 h-5 shrink-0" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</summary>
<p className="mt-3 text-sm text-slate-300">Yes. All signals and VIP updates are free. We believe in community-first growth.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/7 cursor-pointer">
<summary className="flex items-center justify-between list-none">
<span className="text-sm font-medium tracking-tight">How fast is the setup?</span>
<i className="w-5 h-5 shrink-0" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</summary>
<p className="mt-3 text-sm text-slate-300">Around 5 minutes. Join the channel, read the pinned message, and you’re ready.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/7 cursor-pointer">
<summary className="flex items-center justify-between list-none">
<span className="text-sm font-medium tracking-tight">Do I need trading experience?</span>
<i className="w-5 h-5 shrink-0" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</summary>
<p className="mt-3 text-sm text-slate-300">No. We provide entry, stop loss, take profit, and management notes. You can copy-paste.</p>
</details>
</div>
<div className="space-y-3">
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/7 cursor-pointer">
<summary className="flex items-center justify-between list-none">
<span className="text-sm font-medium tracking-tight">What results can I expect?</span>
<i className="w-5 h-5 shrink-0" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</summary>
<p className="mt-3 text-sm text-slate-300">You should see outcomes after your first trades. Still, markets carry risk—only risk what you can afford to lose.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/7 cursor-pointer">
<summary className="flex items-center justify-between list-none">
<span className="text-sm font-medium tracking-tight">Which brokers are supported?</span>
<i className="w-5 h-5 shrink-0" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</summary>
<p className="mt-3 text-sm text-slate-300">Most major brokers are compatible. If you’re unsure, ask in the chat—support is 24/7.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/5 p-4 open:bg-white/7 cursor-pointer">
<summary className="flex items-center justify-between list-none">
<span className="text-sm font-medium tracking-tight">Can I automate copying?</span>
<i className="w-5 h-5 shrink-0" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</summary>
<p className="mt-3 text-sm text-slate-300">Yes. We share simple automation options—no coding required.</p>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="disclaimer">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="border-t border-white/10 pt-12 grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold tracking-tight text-white">Risk disclaimer</h3>
<p className="mt-3 text-sm text-slate-300">
              Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors.
              Past performance is not indicative of future results. You could sustain a loss of some or all of your
              initial investment; do not invest money that you cannot afford to lose. This is not financial advice.
            </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<h3 className="text-lg font-semibold tracking-tight text-white">Contact</h3>
<div className="mt-3 text-sm text-slate-300 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
<a className="hover:underline" href="mailto:support@fxsignalco.example">support@fxsignalco.example</a>
</div>
<div className="mt-2 text-sm text-slate-300 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
<a className="hover:underline" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">Telegram chat (24/7)</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
<div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-tr from-white/5 via-white/0 to-white/5 p-6 sm:p-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Ready to see your first results?</h3>
<p className="mt-2 text-sm text-slate-300">Join free. Signals delivered instantly. Cancel anytime.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2.5 text-sm font-medium tracking-tight hover:bg-slate-100 hover:outline hover:outline-2 hover:outline-white/50 transition" href="https://t.me/YourForexSignals" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
              Join our Telegram
            </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 border border-white/15 flex items-center justify-center">
<span className="text-slate-100 font-semibold tracking-tight">FS</span>
</div>
<div className="text-sm text-slate-400">© <span id="year"></span> FX Signal Co. All rights reserved.</div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-400">
<a className="hover:text-white" href="#disclaimer">Disclaimer</a>
<a className="hover:text-white" href="#faq">FAQ</a>
<a className="hover:text-white" href="mailto:support@fxsignalco.example">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
