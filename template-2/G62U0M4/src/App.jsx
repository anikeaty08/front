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



      // Config
      const TICKET_PRICE = 10; // USD
      const INITIAL_SOLD = 128430; // demo starting point
      const INITIAL_PARTICIPANTS = 35210; // demo starting point
      const DRAW_DATE = new Date();
      DRAW_DATE.setDate(DRAW_DATE.getDate() + 21); // 21 days from now

      // Elements
      const qtyEl = document.getElementById('qty');
      const totalEl = document.getElementById('total');
      const totalMobileEl = document.getElementById('total-mobile');
      const entriesEl = document.getElementById('entries');
      const oddsEl = document.getElementById('odds');
      const soldEl = document.getElementById('sold');
      const participantsEl = document.getElementById('participants');
      const countdownEl = document.getElementById('countdown');
      const drawDateEl = document.getElementById('draw-date');
      const yearEl = document.getElementById('year');

      // Utility
      const fmt = (n) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
      const pct = (x) => (x * 100).toLocaleString(undefined, { maximumFractionDigits: 3 }) + '%';

      // State
      let totalSold = INITIAL_SOLD;
      let participants = INITIAL_PARTICIPANTS;

      function updateSummary() {
        const qty = Math.max(0, parseInt(qtyEl.value || '0', 10));
        const total = qty * TICKET_PRICE;
        totalEl.textContent = fmt(total);
        totalMobileEl.textContent = fmt(total);
        entriesEl.textContent = qty.toLocaleString();
        const denom = Math.max(1, totalSold + qty);
        const odds = qty === 0 ? 0 : qty / denom;
        oddsEl.textContent = qty === 0 ? '—' : pct(odds);
      }

      function tickCounters() {
        // Simulate counters increasing
        const soldBump = Math.floor(Math.random() * 15);
        const partBump = Math.random() < 0.3 ? 1 : 0;
        totalSold += soldBump;
        participants += partBump;
        soldEl.textContent = totalSold.toLocaleString();
        participantsEl.textContent = participants.toLocaleString();
      }

      function countdown() {
        const now = new Date().getTime();
        const dist = DRAW_DATE.getTime() - now;
        if (dist <= 0) {
          countdownEl.textContent = 'Drawing now';
          return;
        }
        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        countdownEl.textContent = `${d}d ${h}h ${m}m`;
      }

      function bindQuickButtons() {
        document.querySelectorAll('button.quick').forEach(btn => {
          btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-quick');
            if (val === 'reset') {
              qtyEl.value = 0;
            } else {
              qtyEl.value = Math.max(0, parseInt(qtyEl.value || '0', 10)) + parseInt(val, 10);
            }
            updateSummary();
          });
        });
      }

      function init() {
        // Icons
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Header CTA jumps to purchase
        document.getElementById('header-cta')?.addEventListener('click', () => {
          document.getElementById('tickets').scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        // Draw date text
        drawDateEl.textContent = DRAW_DATE.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
        yearEl.textContent = new Date().getFullYear();

        // Listeners
        document.getElementById('plus').addEventListener('click', () => { qtyEl.value = Math.max(0, parseInt(qtyEl.value || '0', 10)) + 1; updateSummary(); });
        document.getElementById('minus').addEventListener('click', () => { qtyEl.value = Math.max(0, parseInt(qtyEl.value || '0', 10) - 1); updateSummary(); });
        qtyEl.addEventListener('input', updateSummary);

        document.getElementById('buy').addEventListener('click', () => {
          const qty = Math.max(0, parseInt(qtyEl.value || '0', 10));
          if (!qty) { alert('Please select at least 1 ticket.'); return; }
          alert(`Proceeding to checkout for ${qty} ticket${qty > 1 ? 's' : ''} (${fmt(qty * TICKET_PRICE)}).`);
        });
        document.getElementById('buy-mobile').addEventListener('click', () => {
          document.getElementById('buy').click();
        });

        bindQuickButtons();
        updateSummary();
        soldEl.textContent = totalSold.toLocaleString();
        participantsEl.textContent = participants.toLocaleString();
        countdown();
        setInterval(countdown, 30_000);
        setInterval(tickCounters, 3_000);
      }

      document.addEventListener('DOMContentLoaded', init);
    
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[80px]"></div>
<div className="absolute top-1/3 -right-10 h-72 w-72 rounded-full bg-violet-500/20 blur-[80px]"></div>
<div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]"></div>
</div>

<header className="sticky top-0 z-30 backdrop-blur-xl bg-[#0d0f1a]/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-9 w-9 rounded-md bg-white/10 ring-1 ring-white/15">
<span className="text-white font-semibold tracking-tight font-geist" style={{fontFamily: `Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto`}}>R</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[15px] font-semibold tracking-tight font-geist" style={{fontFamily: `Manrope, Inter, system-ui`}}>rivalry.com</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-1 text-emerald-300 text-xs ring-1 ring-emerald-400/20 font-geist">
<svg className="lucide lucide-trophy h-3.5 w-3.5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
                Win $1,000,000
              </span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
<a className="hover:text-white transition-colors font-geist" href="#how">How it works</a>
<a className="hover:text-white transition-colors font-geist" href="#faq">FAQ</a>
<a className="hover:text-white transition-colors font-geist" href="#tickets">Get tickets</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-500 px-4 py-2.5 text-sm font-semibold tracking-tight text-white shadow-sm ring-1 ring-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60 font-geist" id="header-cta">
<svg className="lucide lucide-ticket h-4 w-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
              Buy Tickets
            </button>
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid lg:grid-cols-2 gap-10 py-12 sm:py-16 lg:py-20 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 text-xs text-white/70 font-geist">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-fuchsia-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              It takes 10 seconds to enter
            </div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold tracking-tight font-geist" style={{fontFamily: `Manrope, Inter, system-ui`}}><span className="bg-clip-text font-semibold text-transparent font-geist bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300" style={{color: `rgba(0, 0, 0, 0)`, position: `static`}}>The Million 
Dollar Raffle</span></h1>
<p className="text-white/70 text-base sm:text-lg font-geist" style={{fontFamily: `Inter, Manrope, system-ui`}}>
              Buy tickets in seconds. Every ticket is a chance to win the grand prize. No complicated forms — just pick your amount and you’re in.
            </p>
<ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
<li className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10">
<svg className="lucide lucide-ticket h-4.5 w-4.5 text-fuchsia-300" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<span className="text-sm text-white/80 font-geist">1 ticket = 1 entry</span>
</li>
<li className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10">
<svg className="lucide lucide-zap h-4.5 w-4.5 text-violet-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm text-white/80 font-geist">More tickets, better odds</span>
</li>
<li className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10">
<svg className="lucide lucide-shield-check h-4.5 w-4.5 text-cyan-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/80 font-geist">Secure checkout</span>
</li>
</ul>
</div>

<div className="relative" id="tickets">
<div className="absolute inset-0 -z-10 mx-6 lg:mx-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10 blur-2xl"></div>
<div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-5 sm:p-6 lg:p-7">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight font-geist" style={{fontFamily: `Manrope, Inter, system-ui`}}>Get your tickets</h2>
<p className="text-sm text-white/60 mt-1.5 font-geist">Each ticket is $10. Buy as many as you like.</p>
</div>
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="tabular-nums font-geist" id="countdown">20d 23h 59m</span>
</div>
</div>
<div className="mt-6 space-y-5">

<div className="flex flex-wrap gap-2">
<button className="quick rounded-md bg-white/5 hover:bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 transition-colors font-geist" data-quick="1">+1</button>
<button className="quick rounded-md bg-white/5 hover:bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 transition-colors font-geist" data-quick="5">+5</button>
<button className="quick rounded-md bg-white/5 hover:bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 transition-colors font-geist" data-quick="10">+10</button>
<button className="quick rounded-md bg-white/5 hover:bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 transition-colors font-geist" data-quick="25">+25</button>
<button className="quick rounded-md bg-white/5 hover:bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 transition-colors font-geist" data-quick="50">+50</button>
<button className="rounded-md bg-white/5 hover:bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 transition-colors font-geist" data-quick="reset">Reset</button>
</div>

<div className="flex items-center gap-3">
<button className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60" id="minus">
<svg className="lucide lucide-minus h-5 w-5" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<div className="flex-1">
<label className="sr-only font-geist" htmlFor="qty">Tickets</label>
<input className="w-full h-11 rounded-lg bg-black/40 ring-1 ring-white/10 px-4 text-center text-lg font-semibold tracking-tight tabular-nums focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60" id="qty" inputmode="numeric" min="0" type="number" value="5" />
</div>
<button className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60" id="plus">
<svg className="lucide lucide-plus h-5 w-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="grid sm:grid-cols-3 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="text-xs text-white/60 font-geist">Total</div>
<div className="mt-1 text-xl font-semibold tracking-tight tabular-nums font-geist" id="total">$50.00</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="text-xs text-white/60 font-geist">Your entries</div>
<div className="mt-1 text-xl font-semibold tracking-tight tabular-nums font-geist" id="entries">5</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-1.5 text-xs text-white/60 font-geist">
<svg className="lucide lucide-zap h-3.5 w-3.5 text-amber-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                      Estimated odds
                    </div>
<div className="mt-1 text-xl font-semibold tracking-tight tabular-nums font-geist" id="odds">0.004%</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-500/90 hover:to-violet-500/90 px-5 py-3.5 text-base font-semibold tracking-tight text-white shadow-sm ring-1 ring-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60 font-geist" id="buy">
<svg className="lucide lucide-credit-card h-5 w-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                    Purchase Tickets
                  </button>
<p className="text-xs text-white/60 font-geist">You’ll receive a receipt and your entry numbers by email.</p>
</div>
</div>

<div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/60">
<div className="inline-flex items-center gap-1.5 font-geist">
<svg className="lucide lucide-shield h-3.5 w-3.5 text-cyan-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                  PCI-compliant checkout
                </div>
<div className="inline-flex items-center gap-1.5 font-geist">
<svg className="lucide lucide-users h-3.5 w-3.5 text-violet-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-geist" id="participants">35,210</span> participants
                </div>
<div className="inline-flex items-center gap-1.5 font-geist">
<svg className="lucide lucide-ticket h-3.5 w-3.5 text-fuchsia-300" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<span className="font-geist" id="sold">128,430</span> tickets sold
                </div>
</div>
</div>
</div>
</div>

<div className="mt-2 sm:mt-4 flex flex-wrap items-center gap-2 text-[11px] text-white/60">
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10 font-geist">
<svg className="lucide lucide-calendar h-3.5 w-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Draw on <span className="ml-1 tabular-nums font-geist" id="draw-date">Oct 1, 2025, 11:11 AM</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10 font-geist">
<svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Global (where eligible)
          </span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10 font-geist">
<svg className="lucide lucide-badge-check h-3.5 w-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            18+ to enter
          </span>
</div>
</div>
</section>

<section className="py-12 sm:py-16 lg:py-20" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h3 className="text-2xl sm:text-3xl tracking-tight font-geist font-semibold" style={{fontFamily: `Manrope, Inter, system-ui`}}>How it works</h3>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl bg-white/[0.03] p-6 ring-1 ring-white/10 hover:ring-white/20 transition-colors">
<div className="h-10 w-10 rounded-lg bg-fuchsia-500/15 ring-1 ring-fuchsia-500/25 flex items-center justify-center mb-4">
<svg className="lucide lucide-ticket h-5 w-5 text-fuchsia-300" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight font-geist" style={{fontFamily: `Manrope, Inter, system-ui`}}>Pick your tickets</h4>
<p className="mt-2 text-sm text-white/70 font-geist">Choose any amount. Each ticket equals one entry into the $1,000,000 draw.</p>
</div>
<div className="rounded-xl bg-white/[0.03] p-6 ring-1 ring-white/10 hover:ring-white/20 transition-colors">
<div className="h-10 w-10 rounded-lg bg-violet-500/15 ring-1 ring-violet-500/25 flex items-center justify-center mb-4">
<svg className="lucide lucide-credit-card h-5 w-5 text-violet-300" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight font-geist" style={{fontFamily: `Manrope, Inter, system-ui`}}>Checkout fast</h4>
<p className="mt-2 text-sm text-white/70 font-geist">Secure payment. We’ll email your receipt and entry numbers instantly.</p>
</div>
<div className="rounded-xl bg-white/[0.03] p-6 ring-1 ring-white/10 hover:ring-white/20 transition-colors">
<div className="h-10 w-10 rounded-lg bg-cyan-500/15 ring-1 ring-cyan-500/25 flex items-center justify-center mb-4">
<svg className="lucide lucide-trophy h-5 w-5 text-cyan-300" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<h4 className="text-lg font-semibold tracking-tight font-geist" style={{fontFamily: `Manrope, Inter, system-ui`}}>We draw the winner</h4>
<p className="mt-2 text-sm text-white/70 font-geist">Live draw on the date below. Winner is contacted by email immediately.</p>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-14" id="faq">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<h3 className="text-2xl sm:text-3xl tracking-tight font-geist font-semibold" style={{fontFamily: `Manrope, Inter, system-ui`}}>FAQ</h3>
<div className="mt-6 divide-y divide-white/10 rounded-xl bg-white/[0.03] ring-1 ring-white/10">
<details className="group open:bg-white/[0.02] p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-base font-medium font-geist" style={{fontFamily: `Inter, Manrope, system-ui`}}>How much is a ticket?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Each ticket costs $10 USD. There’s no limit to how many you can buy.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-base font-medium font-geist" style={{fontFamily: `Inter, Manrope, system-ui`}}>When is the draw?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Check the countdown above. The draw happens on the listed date and time.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-base font-medium font-geist" style={{fontFamily: `Inter, Manrope, system-ui`}}>How are odds calculated?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">Your estimated odds are your tickets divided by total tickets sold at that moment.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-base font-medium font-geist" style={{fontFamily: `Inter, Manrope, system-ui`}}>Who can enter?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-white/70 font-geist">18+ where eligible. Void where prohibited. See Terms for full details.</p>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-8 w-8 rounded-md bg-white/10 ring-1 ring-white/15">
<span className="text-white font-semibold tracking-tight font-geist" style={{fontFamily: `Manrope, Inter, system-ui`}}>R</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight font-geist" style={{fontFamily: `Manrope, Inter, system-ui`}}>rivalry.com</div>
<p className="text-xs text-white/60 mt-0.5 font-geist">© <span className="font-geist" id="year">2025</span> Rivalry Raffle. All rights reserved.</p>
</div>
</div>
<div className="text-xs text-white/60 max-w-2xl font-geist">
            Not investment advice. No purchase necessary where required by law. Odds depend on number of entries received. By entering you agree to the Terms & Privacy Policy.
          </div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
<div className="mx-3 mb-3 rounded-xl bg-white/10 backdrop-blur-xl ring-1 ring-white/15">
<div className="flex items-center justify-between px-4 py-3">
<div>
<div className="text-xs text-white/60 font-geist">Your total</div>
<div className="text-lg font-semibold tracking-tight tabular-nums font-geist" id="total-mobile">$50.00</div>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-500/90 hover:to-violet-500/90 px-4 py-2.5 text-sm font-semibold tracking-tight text-white ring-1 ring-white/10 transition-colors font-geist" id="buy-mobile">
<svg className="lucide lucide-shopping-bag h-4 w-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
            Buy
          </button>
</div>
</div>
</div>




    </>
  );
}
