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
      const $ = (sel, el=document) => el.querySelector(sel);
      const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));
      const fmtUSD = (n) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

      // Initialize icons
      function refreshIcons() {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      }

      // Countdown to next UTC midnight
      function nextUtcMidnight() {
        const now = new Date();
        const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0));
        return next;
      }
      function startCountdown() {
        const el = $('#countdown');
        function tick() {
          const now = new Date();
          const target = nextUtcMidnight();
          let diff = target - now;
          if (diff < 0) diff = 0;
          const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
          const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
          const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
          el.textContent = `${h}:${m}:${s}`;
        }
        tick();
        setInterval(tick, 1000);
      }

      // Simulated BTC chart
      let chart;
      function initChart() {
        const ctx = $('#btcChart');
        const points = 48; // approx every 30 minutes for 24h
        const base = 64000 + Math.floor(Math.random() * 2000) - 1000;
        const data = Array.from({ length: points }, (_, i) => {
          const drift = i * (Math.random() * 6 - 3);
          const noise = Math.sin(i / 2) * 40 + (Math.random() * 60 - 30);
          return Math.max(20000, base + drift + noise);
        });
        const labels = Array.from({ length: points }, (_, i) => i);

        chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              data,
              borderColor: '#25EB2A',
              borderWidth: 2,
              tension: 0.35,
              pointRadius: 0,
              fill: true,
              backgroundColor: (context) => {
                const { chart } = context;
                const { ctx, chartArea } = chart;
                if (!chartArea) return 'rgba(37,235,42,0.08)';
                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                gradient.addColorStop(0, 'rgba(37,235,42,0.20)');
                gradient.addColorStop(1, 'rgba(37,235,42,0.00)');
                return gradient;
              }
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: 8 },
            scales: {
              x: {
                display: false
              },
              y: {
                display: true,
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: {
                  color: 'rgba(255,255,255,0.6)',
                  callback: (v) => '$' + v
                }
              }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0,0,0,0.8)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                titleColor: '#fff',
                bodyColor: '#ddd',
                callbacks: {
                  label: (ctx) => ' $' + ctx.parsed.y.toLocaleString()
                }
              }
            }
          }
        });

        const lastPrice = data[data.length - 1];
        $('#priceBadge').textContent = lastPrice.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

        // Show an example "close target" (mocked)
        const close = Math.round(lastPrice + (Math.random() * 200 - 100));
        $('#closeTarget').textContent = close.toLocaleString(undefined, { style: 'currency', currency: 'USD' }) + ' at 00:00 UTC';
      }

      // Bet logic
      const bets = new Map(); // key: guess string "000" value: amount (int)
      function padGuess(val) {
        return String(val).replace(/\D/g, '').slice(0, 3).padStart(3, '0');
      }
      function renderBets() {
        const list = $('#bets-list');
        const empty = $('#bets-empty');
        list.innerHTML = '';

        if (bets.size === 0) {
          list.classList.add('hidden');
          empty.classList.remove('hidden');
        } else {
          list.classList.remove('hidden');
          empty.classList.add('hidden');
        }

        let totalWager = 0;
        let maxPayout = 0;

        bets.forEach((amount, guess) => {
          totalWager += amount;
          maxPayout += amount * 500;

          const li = document.createElement('li');
          li.className = 'flex items-center justify-between p-3 bg-black/40';
          li.innerHTML = `
            <div class="flex items-center gap-3">
              <div class="h-9 w-12 rounded-md ring-1 ring-white/15 bg-white/5 grid place-items-center">
                <span class="font-semibold tracking-tight" style="color: var(--brand);">${guess}</span>
              </div>
              <div>
                <div class="text-sm font-medium tracking-tight text-white/90">${fmtUSD(amount)}</div>
                <div class="text-xs text-white/50"><span class="text-white/60">${amount}</span> entries • Potential: <span style="color: var(--brand);">${fmtUSD(amount * 500)}</span></div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button data-guess="${guess}" class="edit-btn px-2 py-1.5 text-xs rounded-md ring-1 ring-white/10 hover:ring-white/25 bg-white/5 hover:bg-white/10 transition">
                <i data-lucide="pencil" class="w-4 h-4" style="stroke-width:1.5;"></i>
              </button>
              <button data-guess="${guess}" class="remove-btn px-2 py-1.5 text-xs rounded-md ring-1 ring-white/10 hover:ring-white/25 bg-white/5 hover:bg-white/10 transition">
                <i data-lucide="trash-2" class="w-4 h-4" style="stroke-width:1.5;"></i>
              </button>
            </div>
          `;
          list.appendChild(li);
        });

        $('#total-wager').textContent = fmtUSD(totalWager);
        $('#total-entries').textContent = totalWager.toLocaleString();
        $('#max-payout').textContent = fmtUSD(maxPayout);

        // Bind actions
        $$('.remove-btn', list).forEach(btn => {
          btn.addEventListener('click', () => {
            const g = btn.getAttribute('data-guess');
            bets.delete(g);
            renderBets();
          });
        });
        $$('.edit-btn', list).forEach(btn => {
          btn.addEventListener('click', () => {
            const g = btn.getAttribute('data-guess');
            const current = bets.get(g) || 0;
            const next = prompt(`Update wager for ${g}`, String(current));
            if (next === null) return;
            const val = Math.max(1, Math.floor(Number(next) || 0));
            bets.set(g, val);
            renderBets();
          });
        });

        refreshIcons();
      }

      function attachBetForm() {
        const form = $('#bet-form');
        const guessInput = $('#guess');
        const amountInput = $('#amount');
        const randomBtn = $('#random-guess');
        const clearBtn = $('#clear-all');

        randomBtn.addEventListener('click', () => {
          const r = Math.floor(Math.random() * 1000);
          guessInput.value = padGuess(r);
        });

        clearBtn.addEventListener('click', () => {
          bets.clear();
          renderBets();
        });

        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const guess = padGuess(guessInput.value);
          const amount = Math.floor(Number(amountInput.value));

          if (!/^\d{3}$/.test(guess)) {
            alert('Enter a valid 3-digit guess (000 – 999).');
            return;
          }
          if (!amount || amount < 1) {
            alert('Enter a wager amount of at least $1.');
            return;
          }

          const existing = bets.get(guess) || 0;
          bets.set(guess, existing + amount);

          // Reset amount, keep guess for quick stacking
          amountInput.value = '';

          renderBets();
        });

        // UX niceties: auto-advance guess input formatting
        guessInput.addEventListener('input', (e) => {
          e.target.value = e.target.value.replace(/\D/g, '').slice(0,3);
        });
      }

      // Init
      window.addEventListener('DOMContentLoaded', () => {
        refreshIcons();
        startCountdown();
        initChart();
        attachBetForm();
        renderBets();
      });

      // Handle responsive chart gradient recalculation
      window.addEventListener('resize', () => {
        if (chart) chart.update('none');
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md grid place-items-center ring-1 ring-white/15 bg-white/5 group-hover:ring-white/25 transition">
<span className="text-sm font-semibold tracking-tighter" style={{color: `var(--brand)`}}>R</span>
</div>
<span className="text-sm sm:text-base tracking-tight font-medium text-white/90">rivalry<span className="text-white/50">.com</span></span>
</a>
<nav className="hidden sm:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white transition" href="#how">How it works</a>
<a className="text-sm text-white/70 hover:text-white transition" href="#bet">Enter bet</a>
<a className="text-sm text-white/70 hover:text-white transition" href="#rules">Rules</a>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md ring-1 ring-white/15 hover:ring-white/25 transition">
<i className="w-4 h-4" data-lucide="user" style={{strokeWidth: `1.5`}}></i>
<span className="text-sm">Sign in</span>
</button>
</nav>
</div>
</div>
</header>

<section className="relative">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(closest-side,rgba(37,235,42,0.08),transparent_65%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
<div className="grid lg:grid-cols-2 gap-10 items-start">

<div className="space-y-8">
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                Guess the last 3 digits.
                <span className="block" style={{color: `var(--brand)`}}>Win 500:1 — daily.</span>
</h1>
<p className="text-base sm:text-lg text-white/70">
                Pick any 3 digits of Bitcoin’s daily close. Wager any amount — each $1 is one entry.
                Add multiple picks to boost your chances. Get it right, score 500x.
              </p>
<div className="flex items-center gap-3 text-xs text-white/50">
<i className="w-4 h-4" data-lucide="shield" style={{strokeWidth: `1.5`}}></i>
<span>Simple odds. Transparent rules. Daily results.</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<div className="col-span-1 rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-wider text-white/50">Time to close</span>
<i className="w-4 h-4 text-white/60" data-lucide="clock" style={{strokeWidth: `1.5`}}></i>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight" id="countdown" style={{color: `var(--brand)`}}>--:--:--</div>
</div>
<div className="col-span-1 rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-wider text-white/50">Payout odds</span>
<i className="w-4 h-4 text-white/60" data-lucide="trophy" style={{strokeWidth: `1.5`}}></i>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight"><span style={{color: `var(--brand)`}}>500</span>:1</div>
</div>
<div className="col-span-2 sm:col-span-1 rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-wider text-white/50">Today’s vibe</span>
<i className="w-4 h-4 text-white/60" data-lucide="activity" style={{strokeWidth: `1.5`}}></i>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight text-white/90">BTC volatility</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 sm:p-6" id="bet">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="dice-3" style={{strokeWidth: `1.5`, color: `var(--brand)`}}></i>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Enter your picks</h2>
</div>
<span className="text-xs text-white/50">Each $1 = 1 entry</span>
</div>
<form className="grid sm:grid-cols-3 gap-3" id="bet-form">
<div className="sm:col-span-1">
<label className="text-xs text-white/60">Your 3-digit guess</label>
<div className="mt-1 flex items-center gap-2">
<input className="w-full px-3 py-2 rounded-md bg-black/60 text-white placeholder-white/30 ring-1 ring-white/15 focus:outline-none focus:ring-2" id="guess" inputmode="numeric" maxlength="3" pattern="^[0-9]{3}$" placeholder="000" style={{caretColor: `var(--brand)`, borderColor: `rgba(255,255,255,0.15)`, outlineColor: `transparent`, boxShadow: `0 0 0 0 rgba(0,0,0,0)`}} type="text" />
<button className="shrink-0 px-2.5 py-2 rounded-md ring-1 ring-white/15 bg-white/5 hover:bg-white/10 hover:ring-white/25 transition" id="random-guess" title="Random" type="button">
<i className="w-4 h-4" data-lucide="shuffle" style={{strokeWidth: `1.5`}}></i>
</button>
</div>
<p className="mt-1 text-xs text-white/40">Format: 000 – 999</p>
</div>
<div className="sm:col-span-1">
<label className="text-xs text-white/60">Wager amount (USD)</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-black/60 text-white placeholder-white/30 ring-1 ring-white/15 focus:outline-none focus:ring-2" id="amount" min="1" placeholder="10" step="1" style={{caretColor: `var(--brand)`}} type="number" />
<p className="mt-1 text-xs text-white/40">Min $1. 500x payout on a hit.</p>
</div>
<div className="sm:col-span-1 flex items-end">
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md font-medium tracking-tight bg-[color:var(--brand)] text-black hover:opacity-90 focus:outline-none ring-2 ring-[color:var(--brand)]/30 shadow-[0_0_0_0.2rem_rgba(37,235,42,0.15)] transition" type="submit">
<i className="w-4 h-4" data-lucide="plus" style={{strokeWidth: `1.5`}}></i>
                    Add Pick
                  </button>
</div>
</form>

<div className="mt-5 space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-white/80">Your picks</h3>
<button className="text-xs text-white/50 hover:text-white/80 underline underline-offset-4 transition" id="clear-all">Clear all</button>
</div>
<div className="text-sm text-white/50" id="bets-empty">No picks yet. Add one above!</div>
<ul className="divide-y divide-white/10 ring-1 ring-white/10 rounded-lg overflow-hidden hidden" id="bets-list"></ul>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-md ring-1 ring-white/10 bg-white/5 px-3 py-2">
<div className="text-[11px] uppercase tracking-wider text-white/50">Total wager</div>
<div className="mt-0.5 text-base font-semibold tracking-tight" id="total-wager">$0</div>
</div>
<div className="rounded-md ring-1 ring-white/10 bg-white/5 px-3 py-2">
<div className="text-[11px] uppercase tracking-wider text-white/50">Total entries</div>
<div className="mt-0.5 text-base font-semibold tracking-tight" id="total-entries">0</div>
</div>
<div className="rounded-md ring-1 ring-white/10 bg-white/5 px-3 py-2">
<div className="text-[11px] uppercase tracking-wider text-white/50">Payout per hit</div>
<div className="mt-0.5 text-base font-semibold tracking-tight"><span style={{color: `var(--brand)`}}>500x</span></div>
</div>
<div className="rounded-md ring-1 ring-white/10 bg-white/5 px-3 py-2">
<div className="text-[11px] uppercase tracking-wider text-white/50">Max win (if hit)</div>
<div className="mt-0.5 text-base font-semibold tracking-tight" id="max-payout">$0</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium tracking-tight bg-[color:var(--brand)] text-black hover:opacity-90 focus:outline-none ring-2 ring-[color:var(--brand)]/30 shadow-[0_0_0_0.2rem_rgba(37,235,42,0.15)] transition">
                    Place my bets
                    <i className="w-4 h-4 animate-bounce" data-lucide="arrow-right" style={{strokeWidth: `1.5`}}></i>
</button>
<div className="text-xs text-white/50 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="info" style={{strokeWidth: `1.5`}}></i>
                    Wagers lock at daily close (00:00 UTC). Results posted shortly after.
                  </div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-5 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="chart-line" style={{strokeWidth: `1.5`, color: `var(--brand)`}}></i>
<h3 className="text-lg font-semibold tracking-tight">Bitcoin — daily run-up</h3>
</div>
<div className="text-xs text-white/50">Live-feel demo</div>
</div>
<p className="mt-1 text-sm text-white/60">Get your picks in before the close. Last 3 digits decide your fate.</p>
<div className="mt-4 rounded-xl ring-1 ring-white/10 bg-black/50 p-3">
<div className="relative h-64 sm:h-72">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="btcChart"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full" style={{backgroundColor: `var(--brand)`, boxShadow: `0 0 10px rgba(37,235,42,0.7)`}}></span>
<span className="text-white/70">BTC/USD (simulated)</span>
</div>
<div className="px-2 py-1 rounded-md ring-1 ring-white/10 bg-white/5 text-white/80" id="priceBadge">—</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-3">
<div className="text-[11px] uppercase tracking-wider text-white/50">Today’s close target</div>
<div className="mt-1 text-base font-semibold tracking-tight" id="closeTarget">—</div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-3">
<div className="text-[11px] uppercase tracking-wider text-white/50">You’re aiming for</div>
<div className="mt-1 text-base font-semibold tracking-tight"><span style={{color: `var(--brand)`}}>Last 3 digits</span></div>
</div>
</div>
</div>
</div>

<div className="mt-16" id="how">
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="target" style={{strokeWidth: `1.5`, color: `var(--brand)`}}></i>
<h3 className="text-base font-semibold tracking-tight">Pick 3 digits</h3>
</div>
<p className="mt-2 text-sm text-white/70">Choose any number from 000 to 999 — that’s your guess for the last 3 digits of Bitcoin’s daily closing price.</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="wallet" style={{strokeWidth: `1.5`, color: `var(--brand)`}}></i>
<h3 className="text-base font-semibold tracking-tight">Wager any amount</h3>
</div>
<p className="mt-2 text-sm text-white/70">Each $1 is one entry. Add multiple picks or stack more on one number to boost your chances.</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="trophy" style={{strokeWidth: `1.5`, color: `var(--brand)`}}></i>
<h3 className="text-base font-semibold tracking-tight">Win 500x</h3>
</div>
<p className="mt-2 text-sm text-white/70">If your pick matches the last 3 digits at close (00:00 UTC), you win 500× your wager. Daily game. Daily thrill.</p>
</div>
</div>
</div>

<div className="mt-14 border-t border-white/10 pt-8 pb-10" id="rules">
<div className="grid md:grid-cols-2 gap-6 text-sm text-white/60">
<ul className="space-y-2">
<li className="flex gap-2">
<span className="text-white/40">•</span> Bets lock at 00:00 UTC. Any wagers after cutoff roll into the next day.
              </li>
<li className="flex gap-2">
<span className="text-white/40">•</span> “Last 3 digits” uses the official BTC/USD closing price to two decimals (e.g., 64002.18 → 218).
              </li>
<li className="flex gap-2">
<span className="text-white/40">•</span> Multiple picks allowed. Each $1 equals one entry at 500:1 payout on a correct guess.
              </li>
</ul>
<ul className="space-y-2">
<li className="flex gap-2">
<span className="text-white/40">•</span> Withdrawals and payouts subject to standard verification.
              </li>
<li className="flex gap-2">
<span className="text-white/40">•</span> Play responsibly. This is entertainment — not investment advice.
              </li>
</ul>
</div>
<div className="mt-8 flex items-center justify-between text-xs text-white/50">
<span>© <span style={{color: `var(--brand)`}}>Rivalry</span> — Daily BTC Close Game</span>
<div className="flex items-center gap-4">
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Support</a>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
