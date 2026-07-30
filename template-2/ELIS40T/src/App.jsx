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



      // Icon init
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Numbers and utilities
      const price = 1.00; // $ per ticket
      let pool = 1283476; // tickets sold this week (example figure)
      const qtyInput = document.getElementById('ticketQty');
      const minusBtn = document.getElementById('minusBtn');
      const plusBtn = document.getElementById('plusBtn');
      const quickPickBtns = document.querySelectorAll('.quickPick');
      const totalPriceEl = document.getElementById('totalPrice');
      const pricePerTicketEl = document.getElementById('pricePerTicket');
      const soldEl = document.getElementById('soldThisWeek');
      const oddsEl = document.getElementById('yourOdds');
      const progressBar = document.getElementById('progressBar');
      const progressLabel = document.getElementById('progressLabel');
      const mobileQty = document.getElementById('mobileQty');
      const mobileTotal = document.getElementById('mobileTotal');
      const purchaseBtn = document.getElementById('purchaseBtn');
      const toast = document.getElementById('toast');
      const toastText = document.getElementById('toastText');

      function formatNumber(n) {
        return n.toLocaleString(undefined);
      }
      function formatMoney(n) {
        return `$${n.toFixed(2)}`;
      }
      function clamp(n, min, max) {
        return Math.max(min, Math.min(max, n));
      }
      function updateUI() {
        const qty = clamp(parseInt(qtyInput.value || 0, 10), 1, 1000000);
        qtyInput.value = qty;
        const total = qty * price;
        totalPriceEl.textContent = formatMoney(total);
        pricePerTicketEl.textContent = formatMoney(price);
        soldEl.textContent = formatNumber(pool);
        const odds = qty / (qty + pool);
        const pct = Math.max(0, Math.min(1, odds)) * 100;
        oddsEl.textContent = `${pct.toFixed(pct < 1 ? 2 : 1)}%`;
        progressBar.style.width = `${pct}%`;
        progressLabel.textContent = `${pct.toFixed(1)}%`;
        mobileQty.textContent = qty;
        mobileTotal.textContent = formatMoney(total);
      }

      minusBtn.addEventListener('click', () => {
        qtyInput.value = clamp((parseInt(qtyInput.value || 1, 10) - 1), 1, 1000000);
        updateUI();
      });
      plusBtn.addEventListener('click', () => {
        qtyInput.value = clamp((parseInt(qtyInput.value || 1, 10) + 1), 1, 1000000);
        updateUI();
      });
      qtyInput.addEventListener('input', updateUI);
      quickPickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const add = parseInt(btn.getAttribute('data-qty'), 10);
          qtyInput.value = clamp(parseInt(qtyInput.value || 0, 10) + add, 1, 1000000);
          updateUI();
        });
      });

      // Purchase flow (demo)
      purchaseBtn.addEventListener('click', () => {
        const qty = parseInt(qtyInput.value || 0, 10);
        toastText.textContent = `Added ${qty} ticket${qty > 1 ? 's' : ''} to your cart`;
        toast.classList.remove('opacity-0');
        toast.classList.add('opacity-100');
        setTimeout(() => {
          toast.classList.remove('opacity-100');
          toast.classList.add('opacity-0');
        }, 1800);
      });

      // Countdown to next Friday 20:00 UTC
      const countdownEl = document.getElementById('countdown');
      const countdownSmallEl = document.getElementById('countdownSmall');
      function nextFridayAt20UTC() {
        const now = new Date();
        const day = now.getUTCDay(); // 0-6
        let daysUntilFriday = (5 - day + 7) % 7; // 5 == Friday
        const target = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 20, 0, 0));
        if (daysUntilFriday === 0 && now.getUTCHours() >= 20) {
          daysUntilFriday = 7;
        }
        target.setUTCDate(target.getUTCDate() + daysUntilFriday);
        return target;
      }
      function formatCountdown(ms) {
        const totalSec = Math.max(0, Math.floor(ms / 1000));
        const d = Math.floor(totalSec / (3600 * 24));
        const h = Math.floor((totalSec % (3600 * 24)) / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        return { d, h, m, s };
      }
      function updateCountdown() {
        const target = nextFridayAt20UTC();
        const now = new Date();
        const diff = target - now;
        const { d, h, m, s } = formatCountdown(diff);
        const text = `${d}d ${h}h ${m}m ${s}s until draw`;
        countdownEl.textContent = text;
        countdownSmallEl.textContent = `${d}d ${h}h ${m}m ${s}s`;
      }
      setInterval(updateCountdown, 1000);

      // Initial setup
      document.getElementById('year').textContent = new Date().getFullYear();
      updateUI();
      updateCountdown();
    
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
      

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-25 bg-fuchsia-600"></div>
<div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full blur-3xl opacity-25 bg-indigo-600"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-10 bg-cyan-500"></div>
</div>

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a aria-label="Rivalry Home" className="flex items-center gap-3 group" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-white/10">
<span className="text-[11px] font-semibold tracking-tight">RV</span>
</div>
<span className="text-[15px] font-semibold tracking-tight group-hover:text-white/90 text-white/80 transition-colors">rivalry.com</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#how">How it works</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium tracking-tight bg-neutral-900 hover:bg-neutral-800 ring-1 ring-white/10 transition-colors" href="#buy">
<i className="w-4 h-4" data-lucide="ticket"></i>
              Buy Tickets
            </a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center rounded-md px-3 py-2 text-sm text-white/80 hover:text-white transition-colors">Sign in</button>
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-3.5 py-2.5 text-sm font-semibold tracking-tight text-white shadow-sm hover:from-fuchsia-500 hover:to-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" href="#buy">
              Play now
              <i className="w-4 h-4" data-lucide="sparkles"></i>
</a>
</div>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-900/80 ring-1 ring-white/10 px-3 py-1 w-fit">
<i className="w-4 h-4 text-white/80" data-lucide="clock"></i>
<span className="text-xs font-medium tracking-tight text-white/80" id="countdown">Next draw loading…</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Win <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">$3,000,000</span> this week
            </h1>
<p className="text-white/70 text-base sm:text-lg max-w-xl">
              A playful weekly lottery for the community. Buy tickets in seconds — the more you hold, the better your chances of winning.
            </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-sm font-semibold tracking-tight text-white shadow-sm hover:from-fuchsia-500 hover:to-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" href="#buy">
                Buy tickets now
                <i className="w-5 h-5" data-lucide="ticket"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium tracking-tight text-white/90 hover:bg-neutral-800 ring-1 ring-white/10" href="#how">
                How it works
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
<div className="rounded-md bg-neutral-900/70 ring-1 ring-white/10 p-3">
<div className="text-xs text-white/60">Tickets sold this week</div>
<div className="mt-1 text-lg font-semibold tracking-tight" id="soldThisWeek">—</div>
</div>
<div className="rounded-md bg-neutral-900/70 ring-1 ring-white/10 p-3">
<div className="text-xs text-white/60">Your estimated odds</div>
<div className="mt-1 text-lg font-semibold tracking-tight" id="yourOdds">—</div>
</div>
<div className="hidden sm:block rounded-md bg-neutral-900/70 ring-1 ring-white/10 p-3">
<div className="text-xs text-white/60">Draw cadence</div>
<div className="mt-1 text-lg font-semibold tracking-tight">Weekly</div>
</div>
</div>
</div>

<div className="relative" id="buy">
<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur p-5 sm:p-6 lg:p-7">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-white/10">
<i className="w-5 h-5 text-amber-300" data-lucide="trophy"></i>
</div>
<div>
<div className="text-sm text-white/60">Weekly Jackpot</div>
<div className="text-xl font-semibold tracking-tight">$3,000,000</div>
</div>
</div>
<div className="text-right">
<div className="text-xs text-white/60">Closes in</div>
<div className="text-sm font-medium tracking-tight" id="countdownSmall">—</div>
</div>
</div>
<div className="my-5 h-px w-full bg-white/10"></div>
<div className="grid gap-4">
<label className="text-sm text-white/80">Number of tickets</label>
<div className="flex items-center gap-2">
<button aria-label="Decrease" className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-neutral-900 hover:bg-neutral-800 ring-1 ring-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" id="minusBtn">
<i className="w-5 h-5" data-lucide="minus"></i>
</button>
<input className="w-full h-11 rounded-md bg-neutral-950 ring-1 ring-white/10 px-4 text-center text-lg font-semibold tracking-tight focus:ring-2 focus:ring-indigo-500/50 outline-none" id="ticketQty" inputmode="numeric" min="1" type="number" value="5" />
<button aria-label="Increase" className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-neutral-900 hover:bg-neutral-800 ring-1 ring-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" id="plusBtn">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="quickPick inline-flex items-center rounded-full bg-neutral-900 hover:bg-neutral-800 ring-1 ring-white/10 px-3 py-1 text-xs font-medium tracking-tight" data-qty="1">+1</button>
<button className="quickPick inline-flex items-center rounded bg-neutral-900 hover:bg-neutral-800 ring-1 ring-white/10 px-3 py-1 text-xs font-medium tracking-tight" data-qty="5">+5</button>
<button className="quickPick inline-flex items-center rounded-full bg-neutral-900 hover:bg-neutral-800 ring-1 ring-white/10 px-3 py-1 text-xs font-medium tracking-tight" data-qty="10">+10</button>
<button className="quickPick inline-flex items-center rounded-full bg-neutral-900 hover:bg-neutral-800 ring-1 ring-white/10 px-3 py-1 text-xs font-medium tracking-tight" data-qty="25">+25</button>
<button className="quickPick inline-flex items-center rounded-full bg-neutral-900 hover:bg-neutral-800 ring-1 ring-white/10 px-3 py-1 text-xs font-medium tracking-tight" data-qty="50">+50</button>
</div>
<div className="mt-2 grid grid-cols-2 gap-3">
<div className="rounded-lg bg-neutral-950 ring-1 ring-white/10 p-3">
<div className="text-xs text-white/60">Price per ticket</div>
<div className="mt-1 text-lg font-semibold tracking-tight" id="pricePerTicket">$1.00</div>
</div>
<div className="rounded-lg bg-neutral-950 ring-1 ring-white/10 p-3">
<div className="text-xs text-white/60">Total</div>
<div className="mt-1 text-lg font-semibold tracking-tight" id="totalPrice">$5.00</div>
</div>
</div>
<div className="mt-2">
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">Your weekly share</span>
<span className="text-white/80" id="progressLabel">0%</span>
</div>
<div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-900 ring-1 ring-white/10">
<div className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500" id="progressBar" style={{width: `0%`}}></div>
</div>
</div>
<button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3.5 text-sm font-semibold tracking-tight text-white shadow-sm hover:from-fuchsia-500 hover:to-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" id="purchaseBtn">
                  Purchase tickets
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="text-[12px] text-white/60">
                  By purchasing you agree to the Rules & Terms. 18+ only. Please play responsibly.
                </p>
</div>
</div>

<div className="pointer-events-none fixed left-1/2 top-4 z-40 -translate-x-1/2 transform rounded-md bg-neutral-900 ring-1 ring-white/10 px-4 py-2.5 text-sm text-white/90 shadow-lg opacity-0 transition-opacity" id="toast">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle"></i>
<span id="toastText">Tickets added!</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl ring-1 ring-white/10 bg-neutral-900/50 p-6 sm:p-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="flex items-start gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-white/10">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<div>
<div className="font-semibold tracking-tight">Weekly draws</div>
<p className="text-sm text-white/70 mt-1">Every week, someone takes the pot. Fresh chance, every time.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-white/10">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<div>
<div className="font-semibold tracking-tight">More tickets, more odds</div>
<p className="text-sm text-white/70 mt-1">Stack tickets to increase your share of entries this week.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-white/10">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<div>
<div className="font-semibold tracking-tight">Transparent & secure</div>
<p className="text-sm text-white/70 mt-1">Clear rules, verifiable draws, and audited randomness.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-white/10">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div>
<div className="font-semibold tracking-tight">Instant notifications</div>
<p className="text-sm text-white/70 mt-1">Get pinged right away if your numbers are drawn.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-12 sm:py-16 lg:py-20" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
<p className="mt-2 text-white/70">It’s as simple as 1-2-3.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-white/10 text-sm font-semibold tracking-tight">1</span>
<span className="font-semibold tracking-tight">Buy tickets</span>
</div>
<p className="mt-3 text-sm text-white/70">Set your quantity and check your estimate. No complicated steps — just tap purchase.</p>
</div>
<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-white/10 text-sm font-semibold tracking-tight">2</span>
<span className="font-semibold tracking-tight">Wait for the weekly draw</span>
</div>
<p className="mt-3 text-sm text-white/70">We draw at the same time every week. You’ll see results immediately after.</p>
</div>
<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-white/10 text-sm font-semibold tracking-tight">3</span>
<span className="font-semibold tracking-tight">Claim if you win</span>
</div>
<p className="mt-3 text-sm text-white/70">Winners are notified right away. Payouts are quick and secure.</p>
</div>
</div>
</div>
</section>

<section className="relative pb-16 sm:pb-20" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl ring-1 ring-white/10 bg-neutral-900/50 p-6 sm:p-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div>
<h3 className="text-2xl font-semibold tracking-tight">FAQ</h3>
<p className="mt-2 text-white/70">Quick answers for curious minds.</p>
</div>
<div className="grid gap-5">
<div className="rounded-lg bg-neutral-950 ring-1 ring-white/10 p-5">
<div className="font-medium tracking-tight">When is the draw?</div>
<p className="mt-1.5 text-sm text-white/70">Every week at the same time. The countdown shows the next draw.</p>
</div>
<div className="rounded-lg bg-neutral-950 ring-1 ring-white/10 p-5">
<div className="font-medium tracking-tight">How do odds work?</div>
<p className="mt-1.5 text-sm text-white/70">Your odds are proportional to how many tickets you hold compared to the total sold for that week.</p>
</div>
<div className="rounded-lg bg-neutral-950 ring-1 ring-white/10 p-5">
<div className="font-medium tracking-tight">Can I buy more later?</div>
<p className="mt-1.5 text-sm text-white/70">Yes. You can top up anytime before the weekly cutoff.</p>
</div>
<div className="rounded-lg bg-neutral-950 ring-1 ring-white/10 p-5">
<div className="font-medium tracking-tight">Who can play?</div>
<p className="mt-1.5 text-sm text-white/70">Must be 18+ and in a supported region. Always play responsibly.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-900 ring-1 ring-white/10">
<span className="text-[11px] font-semibold tracking-tight">RV</span>
</div>
<div className="text-sm text-white/70">© <span id="year"></span> Rivalry. All rights reserved.</div>
</div>
<div className="flex items-center gap-5 text-sm">
<a className="text-white/70 hover:text-white transition-colors" href="#">Rules</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-white/70 hover:text-white transition-colors" href="#">Privacy</a>
<span className="inline-flex items-center gap-2 text-white/60">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
              18+ Play responsibly
            </span>
</div>
</div>
</div>
</footer>

<div className="fixed inset-x-0 bottom-0 z-30 bg-neutral-950/80 backdrop-blur ring-t-1 ring-white/10 p-3 md:hidden">
<div className="mx-auto max-w-7xl flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="rounded-md bg-neutral-900 ring-1 ring-white/10 px-2 py-1">
<span className="text-xs text-white/70">Tickets</span>
<span className="ml-1 text-sm font-semibold tracking-tight" id="mobileQty">5</span>
</div>
<div className="text-xs text-white/60">Total</div>
<div className="text-sm font-semibold tracking-tight" id="mobileTotal">$5.00</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-sm hover:from-fuchsia-500 hover:to-indigo-500" href="#buy" id="mobileBuy">
          Buy now
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>


    </>
  );
}
