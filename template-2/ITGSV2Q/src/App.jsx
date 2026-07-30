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



      // Initialize icons
      lucide.createIcons();

      // Load state animations: ensure sections receive data-loaded to reveal content
      window.addEventListener('DOMContentLoaded', () => {
        document.getElementById('app').setAttribute('data-loaded', 'true');
        // Reveal animated sections
        document.querySelectorAll('section').forEach((el) => el.setAttribute('data-loaded', 'true'));
      });

      // Nigeria-focused greeting
      function setGreeting() {
        try {
          const now = new Date();
          const options = { hour: 'numeric', hour12: false, timeZone: 'Africa/Lagos' };
          const hour = parseInt(new Intl.DateTimeFormat('en-GB', options).format(now), 10);
          let word = 'morning';
          if (hour >= 12 && hour < 16) word = 'afternoon';
          else if (hour >= 16 || hour < 4) word = 'evening';
          document.getElementById('greetWord').textContent = word;
          document.getElementById('greeting').textContent = `Good ${word},`;
        } catch (e) {
          // fallback
          document.getElementById('greetWord').textContent = 'day';
          document.getElementById('greeting').textContent = 'Good day,';
        }
      }
      setGreeting();

      // Balance visibility toggle
      const toggleBtn = document.getElementById('toggleVisibility');
      let hidden = false;
      function updateVisibility() {
        document.querySelectorAll('[data-balance]').forEach((el) => {
          const original = el.getAttribute('data-value');
          const isMaskedOnly = el.hasAttribute('data-mask');
          if (hidden) {
            el.textContent = isMaskedOnly ? '••••••••••' : '••••••';
          } else {
            if (!isNaN(original)) {
              if (el.getAttribute('data-currency') === 'USDC') {
                el.textContent = Number(original).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
              } else if (el.getAttribute('data-currency') === 'SOL') {
                el.textContent = Number(original).toLocaleString();
              } else {
                el.textContent = Number(original).toLocaleString();
              }
            } else {
              el.textContent = original;
            }
          }
        });
        const icon = toggleBtn.querySelector('svg');
        const label = toggleBtn.querySelector('span');
        if (hidden) {
          label.textContent = 'Show';
          icon.setAttribute('data-lucide', 'eye-off');
        } else {
          label.textContent = 'Hide';
          icon.setAttribute('data-lucide', 'eye');
        }
        lucide.createIcons(); // re-render icon change
      }
      toggleBtn.addEventListener('click', () => {
        hidden = !hidden;
        toggleBtn.setAttribute('aria-pressed', String(hidden));
        updateVisibility();
      });
      updateVisibility();

      // Refresh button animation
      const refreshBtn = document.getElementById('refreshBtn');
      let refreshBusy = false;
      refreshBtn.addEventListener('click', () => {
        if (refreshBusy) return;
        refreshBusy = true;
        const icon = refreshBtn.querySelector('svg');
        icon.classList.add('animate-spin');
        refreshBtn.classList.add('ring-emerald-400/30', 'bg-emerald-500/10');
        // Simulate fetch
        setTimeout(() => {
          icon.classList.remove('animate-spin');
          refreshBtn.classList.remove('ring-emerald-400/30', 'bg-emerald-500/10');
          refreshBusy = false;
          renderActivity();
        }, 1200);
      });

      // Mobile drawer
      const openDrawer = document.getElementById('openDrawer');
      const closeDrawer = document.getElementById('closeDrawer');
      const drawer = document.getElementById('drawer');
      const drawerOverlay = document.getElementById('drawerOverlay');
      const drawerPanel = document.getElementById('drawerPanel');
      function setDrawer(open) {
        drawer.style.pointerEvents = open ? 'auto' : 'none';
        drawerOverlay.style.opacity = open ? '1' : '0';
        drawerPanel.style.transform = open ? 'translateX(0)' : 'translateX(-100%)';
      }
      openDrawer?.addEventListener('click', () => setDrawer(true));
      closeDrawer?.addEventListener('click', () => setDrawer(false));
      drawerOverlay?.addEventListener('click', () => setDrawer(false));

      // Conversions
      const NGN_PER_USD = 1500;
      function setConversions() {
        const solAmount = 12.45;
        const solUsdPrice = 19.35; // example price per SOL
        const usdSol = solAmount * solUsdPrice;
        const ngnSol = usdSol * NGN_PER_USD;
        const usdcUsd = 820.0;
        const usdcNgn = usdcUsd * NGN_PER_USD;

        const solUsdEl = document.querySelector('[data-sol-usd]');
        const solNgnEl = document.querySelector('[data-sol-ngn]');
        if (solUsdEl) solUsdEl.textContent = usdSol.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        if (solNgnEl) solNgnEl.textContent = Math.round(ngnSol).toLocaleString();

        const usdcUsdEl = document.querySelector('[data-usdc-usd]');
        const usdcNgnEl = document.querySelector('[data-usdc-ngn]');
        if (usdcUsdEl) usdcUsdEl.textContent = usdcUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        if (usdcNgnEl) usdcNgnEl.textContent = Math.round(usdcNgn).toLocaleString();
      }
      setConversions();

      // Recent activity data
      const activities = [
        {
          type: 'Send',
          icon: 'send',
          color: 'text-rose-300',
          to: 'Bank transfer - GTBank',
          desc: 'To 0123456789 • Adewale T.',
          amount: -250000,
          currency: 'NGN',
          status: 'success',
          time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        },
        {
          type: 'Receive',
          icon: 'download',
          color: 'text-emerald-300',
          to: 'From +234 803 000 1122',
          desc: 'P2P transfer',
          amount: 150000,
          currency: 'NGN',
          status: 'success',
          time: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        },
        {
          type: 'Bill Payment',
          icon: 'receipt',
          color: 'text-fuchsia-300',
          to: 'Ikeja Electric - Prepaid',
          desc: 'Meter: 0123-4567-89',
          amount: -23000,
          currency: 'NGN',
          status: 'pending',
          time: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
        },
        {
          type: 'Swap',
          icon: 'switch-horizontal',
          color: 'text-cyan-300',
          to: 'USDC -> NGN',
          desc: '$120.00 swapped',
          amount: 120 * NGN_PER_USD,
          currency: 'NGN',
          status: 'success',
          time: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        },
        {
          type: 'Crypto Buy',
          icon: 'credit-card',
          color: 'text-indigo-300',
          to: 'Bought SOL',
          desc: '3.00 SOL @ $19.20',
          amount: -3 * 19.2 * NGN_PER_USD,
          currency: 'NGN',
          status: 'success',
          time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        },
      ];

      function relativeTimeFromNow(isoDate) {
        const d = new Date(isoDate);
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
        const diff = Date.now() - d.getTime();
        const minutes = Math.round(diff / (60 * 1000));
        if (Math.abs(minutes) < 60) return rtf.format(-minutes, 'minute');
        const hours = Math.round(minutes / 60);
        if (Math.abs(hours) < 24) return rtf.format(-hours, 'hour');
        const days = Math.round(hours / 24);
        return rtf.format(-days, 'day');
      }

      function formatAmount(amount, currency) {
        const neg = amount < 0;
        const abs = Math.abs(amount);
        const symbol = currency === 'NGN' ? '₦' : currency === 'USD' ? '$' : '';
        return `${neg ? '-' : '+'}${symbol}${abs.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
      }

      function renderActivity() {
        const container = document.getElementById('activityList');
        const empty = document.getElementById('emptyState');
        container.innerHTML = '';

        if (!activities.length) {
          empty.classList.remove('hidden');
          container.classList.add('hidden');
          return;
        } else {
          empty.classList.add('hidden');
          container.classList.remove('hidden');
        }

        activities.forEach((a) => {
          const row = document.createElement('div');
          row.className = 'bg-white/[0.02] hover:bg-white/[0.04] transition p-4 sm:p-5 flex items-center gap-4';
          row.innerHTML = `
            <div class="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
              <i data-lucide="${a.icon}" class="w-5 h-5 ${a.color}" stroke-width="1.5"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-3">
                <p class="text-sm font-medium text-white truncate">${a.type} • ${a.to}</p>
                <div class="flex items-center gap-2">
                  <span class="text-sm font-medium tabular-nums ${a.amount < 0 ? 'text-rose-300' : 'text-emerald-300'}">${formatAmount(a.amount, a.currency)}</span>
                </div>
              </div>
              <div class="mt-1 flex items-center gap-2 text-xs text-slate-400">
                <span>${a.desc}</span>
                <span class="text-slate-600">•</span>
                <span>${relativeTimeFromNow(a.time)}</span>
                <span class="text-slate-600">•</span>
                <span class="inline-flex items-center gap-1">
                  <span class="h-1.5 w-1.5 rounded-full ${a.status === 'success' ? 'bg-emerald-400' : a.status === 'pending' ? 'bg-amber-400' : 'bg-rose-400'}"></span>
                  ${a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                </span>
              </div>
            </div>
          `;
          container.appendChild(row);
        });
        lucide.createIcons();
      }
      renderActivity();

      // Secondary nav fix: sync active state between desktop sidebar and mobile drawer
      const ACTIVE_CLASS_SET = ['bg-white/5', 'text-white', 'ring-white/10'];
      function setActiveNav(key) {
        document.querySelectorAll('[data-nav]').forEach((el) => {
          const isTarget = el.getAttribute('data-nav') === key;
          if (key === 'signout') return; // don't set active for sign out
          if (isTarget) {
            el.setAttribute('aria-current', 'page');
            el.classList.add(...ACTIVE_CLASS_SET);
            el.classList.remove('text-slate-300', 'ring-transparent');
          } else {
            el.removeAttribute('aria-current');
            // only revert items that are not signout (preserve its rose color)
            if (el.getAttribute('data-nav') !== 'signout') {
              el.classList.remove(...ACTIVE_CLASS_SET);
              el.classList.add('text-slate-300', 'ring-transparent');
            }
          }
        });
      }

      // Handle clicks on nav items
      document.querySelectorAll('[data-nav]').forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const key = link.getAttribute('data-nav');
          if (key === 'signout') {
            // simple sign-out stub
            const ok = confirm('Sign out of NexPay?');
            if (ok) {
              // simulate sign out flow
              console.log('Signed out');
            }
            return;
          }
          setActiveNav(key);
          // Close drawer if click originated from mobile panel
          if (link.closest('#drawerPanel')) setDrawer(false);
        });
      });

      // Recompute greeting periodically (10 min)
      setInterval(setGreeting, 10 * 60 * 1000);
    
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
      

<div className="min-h-screen flex" data-loaded="true" id="app">

<aside className="hidden lg:flex lg:flex-col lg:w-64 xl:w-72 border-r border-white/10 bg-[#0B0D13]/90 backdrop-blur-sm">

<div className="px-5 pt-5 pb-4 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-indigo-500/20 ring-1 ring-indigo-400/30 flex items-center justify-center text-indigo-300 font-semibold tracking-tight">NX</div>
<div className="text-lg tracking-tight font-semibold text-white">NexPay</div>
</div>
<p className="mt-2 text-xs text-slate-400">All-in-one Naira + Crypto wallet</p>
</div>

<nav className="flex-1 px-2 py-4 space-y-2">
<a aria-current="page" className="group flex items-center gap-3 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.08] transition text-sm font-medium text-white bg-white/5 rounded-md pt-2 pr-3 pb-2 pl-3" data-nav="dashboard" href="#">
<svg className="lucide lucide-layout-dashboard w-4 h-4 text-indigo-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="tracking-tight">Dashboard</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="wallets" href="#">
<svg className="lucide lucide-wallet w-4 h-4 text-slate-300 group-hover:text-indigo-300" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
            Wallets
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="bills" href="#">
<svg className="lucide lucide-receipt w-4 h-4 text-amber-300" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
            Bills
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="transfers" href="#">
<svg className="lucide lucide-banknote w-4 h-4 text-emerald-300" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
            Transfers
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="crypto" href="#">
<svg className="lucide lucide-coins w-4 h-4 text-cyan-300" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
            Crypto
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="activity" href="#">
<svg className="lucide lucide-history w-4 h-4 text-slate-300" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
            Activity
          </a>
</nav>

<div className="mt-auto px-2 py-4 border-t border-white/10 space-y-2">
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="security" href="#">
<svg className="lucide lucide-shield w-4 h-4 text-slate-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            Security
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="help" href="#">
<svg className="lucide lucide-life-buoy w-4 h-4 text-slate-300" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
            Help
          </a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-rose-300 hover:text-rose-200 hover:bg-rose-500/10 ring-1 ring-transparent hover:ring-rose-500/20 transition" data-nav="signout" href="#">
<svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
            Sign out
          </a>
</div>
</aside>

<div className="fixed inset-0 z-40 lg:hidden pointer-events-none" id="drawer">
<div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity" id="drawerOverlay"></div>
<div className="absolute top-0 left-0 h-full w-[85%] max-w-xs bg-[#0B0D13] border-r border-white/10 -translate-x-full transition-transform" id="drawerPanel">
<div className="px-5 pt-5 pb-4 border-b border-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-indigo-500/20 ring-1 ring-indigo-400/30 flex items-center justify-center text-indigo-300 font-semibold tracking-tight">NX</div>
<div className="text-lg tracking-tight font-semibold text-white">NexPay</div>
</div>
<button aria-label="Close menu" className="p-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" id="closeDrawer">
<svg className="lucide lucide-x w-5 h-5 text-slate-300" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
<nav className="p-3 space-y-2">
<a aria-current="page" className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium bg-white/5 text-white ring-1 ring-white/10" data-nav="dashboard" href="#"> <svg className="lucide lucide-layout-dashboard w-4 h-4 text-indigo-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg> Dashboard </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="wallets" href="#"> <svg className="lucide lucide-wallet w-4 h-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg> Wallets </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="bills" href="#"> <svg className="lucide lucide-receipt w-4 h-4 text-amber-300" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg> Bills </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="transfers" href="#"> <svg className="lucide lucide-banknote w-4 h-4 text-emerald-300" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg> Transfers </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="crypto" href="#"> <svg className="lucide lucide-coins w-4 h-4 text-cyan-300" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg> Crypto </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="activity" href="#"> <svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg> Activity </a>
</nav>
<div className="px-3 pt-2 pb-6 border-t border-white/10 space-y-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="security" href="#"> <svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Security </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-nav="help" href="#"> <svg className="lucide lucide-life-buoy w-4 h-4" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg> Help </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-rose-300 hover:text-rose-200 hover:bg-rose-500/10 ring-1 ring-transparent hover:ring-rose-500/20 transition" data-nav="signout" href="#"> <svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg> Sign out </a>
</div>
</div>
</div>

<main className="flex-1 min-w-0">

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#0A0B0F]/70 border-b border-white/10">
<div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<button aria-label="Open menu" className="lg:hidden p-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" id="openDrawer">
<svg className="lucide lucide-menu w-5 h-5 text-slate-300" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-8 w-8 rounded-full ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1531123414780-f742a7cb0f29?q=80&w=80&auto=format&fit=crop" />
<div className="leading-tight">
<p className="text-sm text-slate-300" id="greeting">Good evening,</p>
<p className="text-xs text-slate-500">Welcome back</p>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="group px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition flex items-center gap-2">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="hidden sm:inline">Alerts</span>
</button>
<button className="group px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition flex items-center gap-2">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="hidden sm:inline">Settings</span>
</button>
</div>
</div>
</header>

<div className="px-4 sm:px-6 lg:px-8 py-6 space-y-8">

<section className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-4 sm:p-6 md:p-7 opacity-0 translate-y-2 blur-[2px] transition-all duration-700 delay-100 data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0 data-[loaded=true]:blur-0" data-loaded="true">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<h1 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Good <span id="greetWord">evening</span>, Tunde</h1>
<p className="text-sm text-slate-400 mt-1">Here’s an overview of your balances across Naira and crypto</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3.5 py-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition flex items-center gap-2" id="refreshBtn">
<svg className="lucide lucide-refresh-ccw w-4.5 h-4.5 text-slate-200" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
<span className="text-sm text-slate-200">Refresh</span>
</button>
<button aria-pressed="false" className="px-3.5 py-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition flex items-center gap-2" id="toggleVisibility">
<svg className="lucide lucide-eye w-4.5 h-4.5 text-slate-200" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm text-slate-200">Hide</span>
</button>
</div>
</div>

<div className="mt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<p className="text-xs uppercase tracking-wider text-slate-400">Total balance</p>
<div className="mt-1 flex items-baseline gap-2">
<div className="text-3xl sm:text-4xl tracking-tight font-semibold tabular-nums">
<span className="text-slate-300">₦</span>
<span data-balance="" data-currency="NGN" data-value="2375000">2,375,000</span>
</div>
<span className="text-xs text-slate-400">Naira-first</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full sm:w-auto">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20 flex items-center justify-center">
<svg className="lucide lucide-badge-dollar-sign w-4.5 h-4.5 text-emerald-300" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<div>
<p className="text-xs text-slate-400">NGN</p>
<p className="text-sm font-medium tabular-nums"><span className="text-slate-300">₦</span><span data-balance="" data-currency="NGN" data-value="1875000">1,875,000</span></p>
</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-cyan-500/10 ring-1 ring-cyan-400/20 flex items-center justify-center">
<svg className="lucide lucide-coins w-4.5 h-4.5 text-cyan-300" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<div>
<p className="text-xs text-slate-400">SOL</p>
<p className="text-sm font-medium tabular-nums"><span data-balance="" data-currency="SOL" data-value="12.45">12.45</span> SOL</p>
</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition col-span-2 sm:col-span-1">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-blue-500/10 ring-1 ring-blue-400/20 flex items-center justify-center">
<svg className="lucide lucide-circle-dollar-sign w-4.5 h-4.5 text-blue-300" data-lucide="circle-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<div>
<p className="text-xs text-slate-400">USDC</p>
<p className="text-sm font-medium tabular-nums"><span data-balance="" data-currency="USDC" data-value="820.00">820.00</span></p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="opacity-0 translate-y-2 blur-[2px] transition-all duration-700 delay-200 data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0 data-[loaded=true]:blur-0" data-loaded="true">
<h2 className="text-lg sm:text-xl tracking-tight font-semibold text-white mb-3">Quick actions</h2>
<div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">

<button className="group p-3 sm:p-4 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.07] transition flex flex-col items-center gap-2">
<div className="h-10 w-10 rounded-md bg-rose-500/10 ring-1 ring-rose-400/20 flex items-center justify-center">
<svg className="lucide lucide-send w-5 h-5 text-rose-300" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<span className="text-xs sm:text-sm text-slate-200">Send</span>
</button>

<button className="group p-3 sm:p-4 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.07] transition flex flex-col items-center gap-2">
<div className="h-10 w-10 rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20 flex items-center justify-center">
<svg className="lucide lucide-download w-5 h-5 text-emerald-300" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<span className="text-xs sm:text-sm text-slate-200">Receive</span>
</button>

<button className="group p-3 sm:p-4 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.07] transition flex flex-col items-center gap-2">
<div className="h-10 w-10 rounded-md bg-cyan-500/10 ring-1 ring-cyan-400/20 flex items-center justify-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="switch-horizontal" strokeWidth="1.5"></i>
</div>
<span className="text-xs sm:text-sm text-slate-200">Swap</span>
</button>

<button className="group p-3 sm:p-4 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.07] transition flex flex-col items-center gap-2">
<div className="h-10 w-10 rounded-md bg-indigo-500/10 ring-1 ring-indigo-400/20 flex items-center justify-center">
<svg className="lucide lucide-plus-circle w-5 h-5 text-indigo-300" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</div>
<span className="text-xs sm:text-sm text-slate-200">Fund</span>
</button>

<button className="group p-3 sm:p-4 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.07] transition flex flex-col items-center gap-2">
<div className="h-10 w-10 rounded-md bg-amber-500/10 ring-1 ring-amber-400/20 flex items-center justify-center">
<svg className="lucide lucide-upload w-5 h-5 text-amber-300" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</div>
<span className="text-xs sm:text-sm text-slate-200">Withdraw</span>
</button>

<button className="group p-3 sm:p-4 rounded-lg bg-white/5 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.07] transition flex flex-col items-center gap-2">
<div className="h-10 w-10 rounded-md bg-fuchsia-500/10 ring-1 ring-fuchsia-400/20 flex items-center justify-center">
<svg className="lucide lucide-receipt w-5 h-5 text-fuchsia-300" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
</div>
<span className="text-xs sm:text-sm text-slate-200">Bills</span>
</button>
</div>
</section>

<section className="grid lg:grid-cols-3 gap-4 opacity-0 translate-y-2 blur-[2px] transition-all duration-700 delay-300 data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0 data-[loaded=true]:blur-0" data-loaded="true">

<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg tracking-tight font-semibold text-white">Naira wallet</h3>
<p className="text-xs text-slate-400 mt-1">Bank transfers supported (NIP)</p>
</div>
<div className="text-right">
<p className="text-xs uppercase tracking-wider text-slate-400">Available</p>
<p className="text-2xl tracking-tight font-semibold tabular-nums mt-1"><span className="text-slate-300">₦</span><span data-balance="" data-currency="NGN" data-value="1520000">1,520,000</span></p>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<div className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10">
<p className="text-xs text-slate-400">Account number</p>
<div className="mt-1 flex items-center gap-2">
<p className="text-sm font-medium tabular-nums"><span data-balance="" data-mask="true" data-value="0123456789">123,456,789</span></p>
<span className="text-[10px] text-slate-500 px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10">NexPay MFB</span>
</div>
</div>
<div className="p-4 rounded-lg bg-white/5 ring-1 ring-white/10">
<p className="text-xs text-slate-400">Beneficiary name</p>
<p className="mt-1 text-sm font-medium">Tunde Adewale</p>
</div>
</div>
<div className="mt-4 flex flex-wrap items-center gap-2">
<button className="px-3.5 py-2 rounded-md bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/20 hover:bg-emerald-500/15 hover:ring-emerald-400/30 transition flex items-center gap-2">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  Add money
                </button>
<button className="px-3.5 py-2 rounded-md bg-indigo-500/10 text-indigo-200 ring-1 ring-indigo-400/20 hover:bg-indigo-500/15 hover:ring-indigo-400/30 transition flex items-center gap-2">
<svg className="lucide lucide-banknote w-4 h-4" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
                  Send to bank
                </button>
<button className="px-3.5 py-2 rounded-md bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition flex items-center gap-2">
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                  Copy details
                </button>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg tracking-tight font-semibold text-white">Crypto wallet</h3>
<p className="text-xs text-slate-400 mt-1">Spot balances with NGN conversion (~₦1,500/$)</p>
</div>
<div className="text-right">
<p className="text-xs uppercase tracking-wider text-slate-400">Total (USD)</p>
<p className="text-xl tracking-tight font-semibold tabular-nums mt-1"><span data-balance="" data-currency="USDC" data-value="820.00">820.00</span></p>
</div>
</div>
<div className="mt-4 space-y-3">

<div className="flex items-center justify-between rounded-lg bg-white/5 ring-1 ring-white/10 p-3 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-cyan-500/10 ring-1 ring-cyan-400/20 flex items-center justify-center">
<svg className="lucide lucide-sun w-4.5 h-4.5 text-cyan-300" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white">Solana (SOL)</p>
<p className="text-xs text-slate-400">12.45 SOL • <span className="tabular-nums">$<span data-sol-usd="">240.91</span></span> • <span className="tabular-nums">₦<span data-sol-ngn="">361,361</span></span></p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/20">+2.4% 24h</span>
<button className="px-2.5 py-1.5 rounded-md bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition text-xs">Buy</button>
<button className="px-2.5 py-1.5 rounded-md bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition text-xs">Sell</button>
</div>
</div>

<div className="flex items-center justify-between rounded-lg bg-white/5 ring-1 ring-white/10 p-3 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-blue-500/10 ring-1 ring-blue-400/20 flex items-center justify-center">
<svg className="lucide lucide-circle-dollar-sign w-4.5 h-4.5 text-blue-300" data-lucide="circle-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white">USD Coin (USDC)</p>
<p className="text-xs text-slate-400"><span className="tabular-nums">$<span data-usdc-usd="">820.00</span></span> • <span className="tabular-nums">₦<span data-usdc-ngn="">1,230,000</span></span></p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] px-2 py-0.5 rounded bg-slate-500/10 text-slate-300 ring-1 ring-slate-400/20">0.0% 24h</span>
<button className="px-2.5 py-1.5 rounded-md bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition text-xs">Buy</button>
<button className="px-2.5 py-1.5 rounded-md bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition text-xs">Sell</button>
</div>
</div>
</div>
<div className="mt-4 rounded-lg bg-white/5 ring-1 ring-white/10 p-3 text-xs text-slate-400">
                Rate note: Using indicative rate of ₦1,500 per $1 for estimates.
              </div>
</div>
</section>

<section className="opacity-0 translate-y-2 blur-[2px] transition-all duration-700 delay-500 data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0 data-[loaded=true]:blur-0" data-loaded="true">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg sm:text-xl tracking-tight font-semibold text-white">Recent activity</h2>
<button className="px-3 py-2 rounded-md bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition text-sm flex items-center gap-2">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                Filter
              </button>
</div>
<div className="divide-y divide-white/10 rounded-xl overflow-hidden border border-white/10" id="activityList"><div className="bg-white/[0.02] hover:bg-white/[0.04] transition p-4 sm:p-5 flex items-center gap-4">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-send w-5 h-5 text-rose-300" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-3">
<p className="text-sm font-medium text-white truncate">Send • Bank transfer - GTBank</p>
<div className="flex items-center gap-2">
<span className="text-sm font-medium tabular-nums text-rose-300">-₦250,000</span>
</div>
</div>
<div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
<span>To 0123456789 • Adewale T.</span>
<span className="text-slate-600">•</span>
<span>2 hours ago</span>
<span className="text-slate-600">•</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Success
                </span>
</div>
</div>
</div><div className="bg-white/[0.02] hover:bg-white/[0.04] transition p-4 sm:p-5 flex items-center gap-4">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-download w-5 h-5 text-emerald-300" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-3">
<p className="text-sm font-medium text-white truncate">Receive • From +234 803 000 1122</p>
<div className="flex items-center gap-2">
<span className="text-sm font-medium tabular-nums text-emerald-300">+₦150,000</span>
</div>
</div>
<div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
<span>P2P transfer</span>
<span className="text-slate-600">•</span>
<span>5 hours ago</span>
<span className="text-slate-600">•</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Success
                </span>
</div>
</div>
</div><div className="bg-white/[0.02] hover:bg-white/[0.04] transition p-4 sm:p-5 flex items-center gap-4">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-receipt w-5 h-5 text-fuchsia-300" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-3">
<p className="text-sm font-medium text-white truncate">Bill Payment • Ikeja Electric - Prepaid</p>
<div className="flex items-center gap-2">
<span className="text-sm font-medium tabular-nums text-rose-300">-₦23,000</span>
</div>
</div>
<div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
<span>Meter: 0123-4567-89</span>
<span className="text-slate-600">•</span>
<span>30 minutes ago</span>
<span className="text-slate-600">•</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  Pending
                </span>
</div>
</div>
</div><div className="bg-white/[0.02] hover:bg-white/[0.04] transition p-4 sm:p-5 flex items-center gap-4">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-cyan-300" data-lucide="switch-horizontal" strokeWidth="1.5"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-3">
<p className="text-sm font-medium text-white truncate">Swap • USDC -{">"} NGN</p>
<div className="flex items-center gap-2">
<span className="text-sm font-medium tabular-nums text-emerald-300">+₦180,000</span>
</div>
</div>
<div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
<span>$120.00 swapped</span>
<span className="text-slate-600">•</span>
<span>yesterday</span>
<span className="text-slate-600">•</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Success
                </span>
</div>
</div>
</div><div className="bg-white/[0.02] hover:bg-white/[0.04] transition p-4 sm:p-5 flex items-center gap-4">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-credit-card w-5 h-5 text-indigo-300" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-3">
<p className="text-sm font-medium text-white truncate">Crypto Buy • Bought SOL</p>
<div className="flex items-center gap-2">
<span className="text-sm font-medium tabular-nums text-rose-300">-₦86,400</span>
</div>
</div>
<div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
<span>3.00 SOL @ $19.20</span>
<span className="text-slate-600">•</span>
<span>3 days ago</span>
<span className="text-slate-600">•</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Success
                </span>
</div>
</div>
</div></div>

<div className="hidden rounded-xl border border-white/10 bg-white/[0.03] p-8 flex flex-col items-center text-center" id="emptyState">
<div className="h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-inbox w-6 h-6 text-slate-300" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</div>
<h3 className="mt-3 text-base font-semibold tracking-tight text-white">No recent activity</h3>
<p className="mt-1 text-sm text-slate-400">Payments, transfers, and bills will appear here.</p>
<div className="mt-4 flex items-center gap-2">
<button className="px-3.5 py-2 rounded-md bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/20 hover:bg-emerald-500/15 hover:ring-emerald-400/30 transition text-sm">Make a transfer</button>
<button className="px-3.5 py-2 rounded-md bg-white/5 text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition text-sm">Pay a bill</button>
</div>
</div>
</section>

<section className="opacity-0 translate-y-2 blur-[2px] transition-all duration-700 delay-700 data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0 data-[loaded=true]:blur-0" data-loaded="true">
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 flex items-center justify-between">
<div>
<h3 className="text-lg tracking-tight font-semibold text-white">Pay your bills faster</h3>
<p className="text-sm text-slate-400 mt-1">Airtime, Data, Electricity (DisCos), Cable TV (DStv/GOTv), and more</p>
</div>
<button className="px-3.5 py-2 rounded-md bg-fuchsia-500/10 text-fuchsia-200 ring-1 ring-fuchsia-400/20 hover:bg-fuchsia-500/15 hover:ring-fuchsia-400/30 transition flex items-center gap-2 text-sm">
<svg className="lucide lucide-receipt w-4 h-4" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
                Pay bills
              </button>
</div>
</section>
</div>
</main>
</div>




    </>
  );
}
