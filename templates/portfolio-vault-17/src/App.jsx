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



    document.addEventListener("DOMContentLoaded", () => {
      if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      // Sparkline helper
      const createSpark = (id, colorFrom, colorTo, data) => {
        const el = document.getElementById(id);
        if (!el) return;
        const ctx = el.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, el.height);
        gradient.addColorStop(0, colorFrom);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        new Chart(ctx, {
          type: "line",
          data: {
            labels: data.map((_, i) => i + 1),
            datasets: [{
              data,
              borderColor: colorFrom,
              pointRadius: 0,
              fill: true,
              backgroundColor: gradient,
              tension: 0.35,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } },
            elements: { line: { borderJoinStyle: "round" } }
          }
        });
      };

      // Sample sparklines
      createSpark("spark1", "rgba(16,185,129,1)", "rgba(16,185,129,0.06)", [12,11,12,13,14,14.5,15,14.8,15.2,16,16.5,16,16.8]);
      createSpark("spark2", "rgba(99,102,241,1)", "rgba(99,102,241,0.06)", [9,9.2,9.4,10,10.3,10.8,11,11.2,11.5,11.7,12,12.2,12.4]);
      createSpark("spark3", "rgba(245,158,11,1)", "rgba(245,158,11,0.06)", [10,10.6,11.3,12,12.7,12.4,13.1,13.8,14.1,14.9,15,15.3,15.6]);

      // Allocation donut
      const alloc = document.getElementById("allocChart");
      if (alloc) {
        const ctx = alloc.getContext("2d");
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Flexible", "Growth", "Max"],
            datasets: [{
              data: [2145, 1780, 1338],
              backgroundColor: ["#10B981", "#6366F1", "#F59E0B"],
              borderColor: "#0a0a0a",
              borderWidth: 2,
              hoverOffset: 6
            }]
          },
          options: {
            cutout: "68%",
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: "rgba(17,24,39,0.9)",
                borderColor: "#262626",
                borderWidth: 1,
                padding: 8,
                titleColor: "#fff",
                bodyColor: "#e5e5e5"
              }
            }
          }
        });
      }

      // Withdraw Modal Logic
      const modal = document.getElementById("withdrawModal");
      const openBtn = document.getElementById("openWithdraw");
      const closeBtn = document.getElementById("closeWithdraw");
      const cancelBtn = document.getElementById("cancelWithdraw");
      const overlay = document.getElementById("withdrawOverlay");
      const confirmBtn = document.getElementById("confirmWithdraw");
      const amountInput = document.getElementById("withdrawAmount");
      const maxBtn = document.getElementById("maxBtn");
      const availableText = document.getElementById("availableText");
      const amountError = document.getElementById("amountError");

      const vaultSelectBtn = document.getElementById("vaultSelectBtn");
      const vaultMenu = document.getElementById("vaultMenu");
      const vaultSelectLabel = document.getElementById("vaultSelectLabel");
      const vaultBadge = document.getElementById("vaultBadge");
      const summaryBadge = document.getElementById("summaryBadge");
      const summaryVault = document.getElementById("summaryVault");
      const feeText = document.getElementById("feeText");
      const etaText = document.getElementById("etaText");
      const receiveText = document.getElementById("receiveText");

      const vaults = {
        flex: { name: "Flexible Savings", code: "ETH", withdrawable: 1100, fee: 0.65, eta: "~30s" },
        growth: { name: "Growth Savings", code: "ARB", withdrawable: 350, fee: 0.15, eta: "~15s" },
        max: { name: "Max Earnings", code: "SOL", withdrawable: 540, fee: 0.05, eta: "~5s" }
      };
      let currentKey = "flex";

      const setVault = (key) => {
        currentKey = key;
        const v = vaults[key];
        vaultSelectLabel.textContent = v.name;
        vaultBadge.textContent = v.code;
        summaryVault.textContent = v.name;
        summaryBadge.textContent = v.code;
        availableText.textContent = `Available: $${v.withdrawable.toLocaleString()}`;
        feeText.textContent = `$${v.fee.toFixed(2)}`;
        etaText.textContent = v.eta;
        amountInput.value = "";
        amountError.classList.add("hidden");
        updateReceive();
      };

      const openModal = () => {
        modal.classList.remove("hidden");
        setVault(currentKey);
        if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      };
      const closeModal = () => {
        modal.classList.add("hidden");
        vaultMenu.classList.add("hidden");
      };

      const updateReceive = () => {
        const v = vaults[currentKey];
        const raw = parseFloat((amountInput.value || "0").replace(/,/g, ""));
        const amt = isNaN(raw) ? 0 : raw;
        const valid = amt > 0 && amt <= v.withdrawable;
        confirmBtn.disabled = !valid;
        amountError.classList.toggle("hidden", !(amt > v.withdrawable));
        const receive = Math.max(0, amt - v.fee);
        receiveText.textContent = `$${receive.toFixed(2)}`;
      };

      // Events
      openBtn?.addEventListener("click", openModal);
      closeBtn?.addEventListener("click", closeModal);
      cancelBtn?.addEventListener("click", closeModal);
      overlay?.addEventListener("click", closeModal);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
      });

      vaultSelectBtn?.addEventListener("click", () => {
        vaultMenu.classList.toggle("hidden");
      });
      vaultMenu?.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-key]");
        if (!btn) return;
        setVault(btn.getAttribute("data-key"));
        vaultMenu.classList.add("hidden");
      });

      maxBtn?.addEventListener("click", () => {
        const v = vaults[currentKey];
        amountInput.value = v.withdrawable.toFixed(2);
        updateReceive();
      });
      amountInput?.addEventListener("input", updateReceive);

      confirmBtn?.addEventListener("click", () => {
        // Placeholder confirmation; integrate with backend/wallet as needed.
        closeModal();
        console.log("Withdrawal confirmed:", {
          vault: vaults[currentKey].name,
          amount: amountInput.value
        });
      });
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
      
<div className="min-h-screen flex">

<aside className="hidden md:flex w-64 flex-col border-r border-neutral-800 bg-neutral-950">
<div className="flex items-center gap-3 px-5 py-5">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500"></div>
<span className="text-xl tracking-tight font-semibold text-white">Senti</span>
</div>
<nav className="mt-2 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900" href="#">
<i className="h-4 w-4" data-lucide="layout-grid"></i><span className="font-medium">Portfolio</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-neutral-900 text-white" href="#">
<i className="h-4 w-4" data-lucide="vault"></i><span className="font-medium">Vaults</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900" href="#">
<i className="h-4 w-4" data-lucide="send"></i><span className="font-medium">Send</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900" href="#">
<i className="h-4 w-4" data-lucide="repeat"></i><span className="font-medium">Swap</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900" href="#">
<i className="h-4 w-4" data-lucide="shield"></i><span className="font-medium">Save</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900" href="#">
<i className="h-4 w-4" data-lucide="compass"></i><span className="font-medium">Discover</span>
</a>
</nav>
<div className="mt-auto p-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
<div className="flex items-center gap-2 text-neutral-400 text-sm mb-2">
<i className="h-4 w-4" data-lucide="info"></i>
            Tip
          </div>
<p className="text-sm text-neutral-300">Diversify across lockups to keep liquidity available.</p>
</div>
</div>
</aside>

<main className="flex-1 min-w-0">

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90 border-b border-neutral-800">
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
<button className="md:hidden p-2 rounded-lg hover:bg-neutral-900">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<div className="relative flex-1 max-w-xl">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="search"></i>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-10 pr-3 py-2 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Search vaults, networks, strategies..."/>
</div>
<button className="p-2 rounded-lg hover:bg-neutral-900"><i className="h-5 w-5" data-lucide="rotate-cw"></i></button>
<button className="p-2 rounded-lg hover:bg-neutral-900"><i className="h-5 w-5" data-lucide="bell"></i></button>
<div className="flex items-center gap-3 pl-2">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="hidden sm:block">
<div className="text-sm font-medium text-white">0xSenti</div>
<div className="text-xs text-neutral-500">Premium</div>
</div>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

<section className="relative rounded-2xl overflow-hidden">
<img alt="" className="absolute inset-0 h-full w-full object-cover opacity-10 pointer-events-none" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="relative bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<p className="text-sm/5 text-white/80">Vault Balance</p>
<div className="mt-1 flex items-baseline gap-3">
<h1 className="text-3xl sm:text-4xl tracking-tight font-semibold">$5,263.14</h1>
<span className="text-sm bg-white/10 text-white rounded-md px-2 py-0.5">+0.00% 24h</span>
</div>
<p className="text-xs text-white/80 mt-1">$+0.00 today · 3 vaults</p>
</div>
<div className="flex flex-wrap gap-2">
<button className="flex items-center gap-2 bg-white/15 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm font-medium">
<i className="h-4 w-4" data-lucide="plus"></i> Add Money
                </button>
<button className="flex items-center gap-2 bg-white/15 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm font-medium" id="openWithdraw">
<i className="h-4 w-4" data-lucide="banknote"></i> Withdraw
                </button>
<button className="flex items-center gap-2 bg-white/15 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm font-medium">
<i className="h-4 w-4" data-lucide="arrow-right-left"></i> Transfer
                </button>
<button className="flex items-center gap-2 bg-white text-indigo-700 px-3 py-2 rounded-lg text-sm font-semibold">
<i className="h-4 w-4" data-lucide="plus-circle"></i> New Plan
                </button>
</div>
</div>
</div>
</section>

<section className="flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sm text-neutral-400">
<i className="h-4 w-4" data-lucide="pie-chart"></i>
            Your allocation across strategies and networks
          </div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">1W</button>
<button className="px-2.5 py-1.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">1M</button>
<button className="px-2.5 py-1.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">3M</button>
<button className="px-2.5 py-1.5 text-xs rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300">YTD</button>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/60">
<div className="px-4 sm:px-5 py-4 border-b border-neutral-800 flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold text-white">Your Vaults</h2>
<div className="text-xs text-neutral-400">3 Active</div>
</div>

<div className="px-4 sm:px-5 py-4 hover:bg-neutral-900/80 transition border-b border-neutral-800/80">
<div className="flex flex-col md:flex-row md:items-center gap-4">
<div className="flex items-start gap-3 md:w-1/3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
<i className="h-5 w-5 text-white" data-lucide="sprout"></i>
</div>
<div>
<div className="flex items-center gap-2">
<p className="font-medium text-white tracking-tight">Flexible Savings</p>
<span className="text-[10px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">ETH</span>
</div>
<p className="text-xs text-neutral-400 mt-0.5">7d minimal lockup · Low rate</p>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:flex md:flex-1">
<div>
<p className="text-xs text-neutral-400">Invested</p>
<p className="font-semibold tracking-tight text-white">$2,145.00</p>
</div>
<div>
<p className="text-xs text-neutral-400">APY</p>
<p className="font-semibold tracking-tight text-emerald-400">8%</p>
</div>
<div>
<p className="text-xs text-neutral-400">PnL</p>
<p className="font-semibold tracking-tight text-emerald-400">+$12.54</p>
</div>
<div>
<p className="text-xs text-neutral-400">Withdrawable</p>
<p className="font-semibold tracking-tight text-white">$1,100</p>
</div>
</div>
<div className="hidden md:block md:w-40">
<div className="h-14 w-full">
<div className="h-full"><canvas id="spark1"></canvas></div>
</div>
</div>
<div className="md:w-32">
<button className="w-full px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm font-medium flex items-center justify-center gap-1">
<i className="h-4 w-4" data-lucide="settings"></i> Manage
                    </button>
</div>
</div>
</div>

<div className="px-4 sm:px-5 py-4 hover:bg-neutral-900/80 transition border-b border-neutral-800/80">
<div className="flex flex-col md:flex-row md:items-center gap-4">
<div className="flex items-start gap-3 md:w-1/3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
<i className="h-5 w-5 text-white" data-lucide="rocket"></i>
</div>
<div>
<div className="flex items-center gap-2">
<p className="font-medium text-white tracking-tight">Growth Savings</p>
<span className="text-[10px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">ARB</span>
</div>
<p className="text-xs text-neutral-400 mt-0.5">30d commitment · AI recommended</p>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:flex md:flex-1">
<div>
<p className="text-xs text-neutral-400">Invested</p>
<p className="font-semibold tracking-tight text-white">$1,780.00</p>
</div>
<div>
<p className="text-xs text-neutral-400">APY</p>
<p className="font-semibold tracking-tight text-indigo-400">12%</p>
</div>
<div>
<p className="text-xs text-neutral-400">PnL</p>
<p className="font-semibold tracking-tight text-emerald-400">+$34.11</p>
</div>
<div>
<p className="text-xs text-neutral-400">Withdrawable</p>
<p className="font-semibold tracking-tight text-white">$350</p>
</div>
</div>
<div className="hidden md:block md:w-40">
<div className="h-14 w-full">
<div className="h-full"><canvas id="spark2"></canvas></div>
</div>
</div>
<div className="md:w-32">
<button className="w-full px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm font-medium flex items-center justify-center gap-1">
<i className="h-4 w-4" data-lucide="settings"></i> Manage
                    </button>
</div>
</div>
</div>

<div className="px-4 sm:px-5 py-4 hover:bg-neutral-900/80 transition">
<div className="flex flex-col md:flex-row md:items-center gap-4">
<div className="flex items-start gap-3 md:w-1/3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center">
<i className="h-5 w-5 text-white" data-lucide="trophy"></i>
</div>
<div>
<div className="flex items-center gap-2">
<p className="font-medium text-white tracking-tight">Max Earnings</p>
<span className="text-[10px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">SOL</span>
</div>
<p className="text-xs text-neutral-400 mt-0.5">7d minimal lockup · Best rate</p>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:flex md:flex-1">
<div>
<p className="text-xs text-neutral-400">Invested</p>
<p className="font-semibold tracking-tight text-white">$1,338.14</p>
</div>
<div>
<p className="text-xs text-neutral-400">APY</p>
<p className="font-semibold tracking-tight text-amber-400">15%</p>
</div>
<div>
<p className="text-xs text-neutral-400">PnL</p>
<p className="font-semibold tracking-tight text-emerald-400">+$52.77</p>
</div>
<div>
<p className="text-xs text-neutral-400">Withdrawable</p>
<p className="font-semibold tracking-tight text-white">$540</p>
</div>
</div>
<div className="hidden md:block md:w-40">
<div className="h-14 w-full">
<div className="h-full"><canvas id="spark3"></canvas></div>
</div>
</div>
<div className="md:w-32">
<button className="w-full px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm font-medium flex items-center justify-center gap-1">
<i className="h-4 w-4" data-lucide="settings"></i> Manage
                    </button>
</div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400">Average APY</p>
<i className="h-4 w-4 text-neutral-500" data-lucide="activity"></i>
</div>
<p className="mt-1 text-2xl font-semibold tracking-tight text-white">11.7%</p>
<p className="text-xs text-neutral-500">Weighted by allocation</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400">Last Deposit</p>
<i className="h-4 w-4 text-neutral-500" data-lucide="calendar-clock"></i>
</div>
<p className="mt-1 text-2xl font-semibold tracking-tight text-white">$300</p>
<p className="text-xs text-neutral-500">3 days ago</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400">Locked / Liquid</p>
<i className="h-4 w-4 text-neutral-500" data-lucide="lock"></i>
</div>
<p className="mt-1 text-2xl font-semibold tracking-tight text-white">$3,813 / $1,450</p>
<p className="text-xs text-neutral-500">Releases in 3–30 days</p>
</div>
</div>
</div>

<div className="space-y-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold text-white">Allocation</h3>
<button className="text-xs text-neutral-300 bg-neutral-800 px-2.5 py-1 rounded-md hover:bg-neutral-700 flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="download"></i> Export
                </button>
</div>
<div className="mt-4">
<div className="aspect-[4/3] w-full">
<div className="h-full"><canvas id="allocChart"></canvas></div>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
<p className="text-sm text-neutral-300">Flexible Savings</p>
</div>
<div className="text-sm font-medium text-white">$2,145 · 40.8%</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
<p className="text-sm text-neutral-300">Growth Savings</p>
</div>
<div className="text-sm font-medium text-white">$1,780 · 33.8%</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
<p className="text-sm text-neutral-300">Max Earnings</p>
</div>
<div className="text-sm font-medium text-white">$1,338 · 25.4%</div>
</div>
</div>
<div className="mt-5 p-3 rounded-lg bg-neutral-950 border border-neutral-800">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-neutral-400">
<i className="h-4 w-4" data-lucide="shield-check"></i>
                    Protection
                  </div>
<a className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1" href="#">
                    Learn more <i className="h-3.5 w-3.5" data-lucide="arrow-up-right"></i>
</a>
</div>
<p className="text-xs text-neutral-400 mt-2">Smart monitoring alerts you before lockups end, keeping liquidity optimal.</p>
</div>
</div>

<div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold text-white">Recent Activity</h3>
<a className="text-xs text-neutral-400 hover:text-neutral-200" href="#">View all</a>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-800 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-300" data-lucide="plus"></i>
</div>
<div>
<p className="text-sm text-white">Deposit to Growth Savings</p>
<p className="text-xs text-neutral-500">3 days ago</p>
</div>
</div>
<p className="text-sm font-medium text-white">+$300</p>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-800 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-300" data-lucide="arrow-down-to-line"></i>
</div>
<div>
<p className="text-sm text-white">Withdraw from Flexible Savings</p>
<p className="text-xs text-neutral-500">7 days ago</p>
</div>
</div>
<p className="text-sm font-medium text-white">-$120</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="fixed inset-0 z-50 hidden" id="withdrawModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" id="withdrawOverlay"></div>
<div className="relative mx-auto w-full max-w-lg px-4">
<div className="mt-20 sm:mt-28 rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden">
<div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-neutral-800 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-300" data-lucide="banknote"></i>
</div>
<h3 className="text-lg tracking-tight font-semibold text-white">Withdraw</h3>
</div>
<button className="p-2 rounded-md hover:bg-neutral-800" id="closeWithdraw">
<i className="h-4 w-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-5 space-y-5">

<div>
<label className="text-xs text-neutral-400">Vault</label>
<div className="relative mt-1">
<button className="w-full flex items-center justify-between rounded-lg bg-neutral-950 border border-neutral-800 px-3 py-2.5 hover:border-neutral-700" id="vaultSelectBtn">
<div className="flex items-center gap-2">
<span className="text-[10px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded" id="vaultBadge">ETH</span>
<span className="text-sm text-white" id="vaultSelectLabel">Flexible Savings</span>
</div>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="absolute z-10 mt-2 w-full rounded-lg border border-neutral-800 bg-neutral-950 shadow-xl hidden" id="vaultMenu">
<button className="w-full text-left px-3 py-2.5 hover:bg-neutral-900 flex items-center justify-between" data-key="flex">
<div className="flex items-center gap-2">
<span className="text-[10px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">ETH</span>
<span className="text-sm text-white">Flexible Savings</span>
</div>
<span className="text-xs text-neutral-400">$1,100 avail.</span>
</button>
<div className="mx-3 border-t border-neutral-800"></div>
<button className="w-full text-left px-3 py-2.5 hover:bg-neutral-900 flex items-center justify-between" data-key="growth">
<div className="flex items-center gap-2">
<span className="text-[10px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">ARB</span>
<span className="text-sm text-white">Growth Savings</span>
</div>
<span className="text-xs text-neutral-400">$350 avail.</span>
</button>
<div className="mx-3 border-t border-neutral-800"></div>
<button className="w-full text-left px-3 py-2.5 hover:bg-neutral-900 flex items-center justify-between" data-key="max">
<div className="flex items-center gap-2">
<span className="text-[10px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">SOL</span>
<span className="text-sm text-white">Max Earnings</span>
</div>
<span className="text-xs text-neutral-400">$540 avail.</span>
</button>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between">
<label className="text-xs text-neutral-400">Amount</label>
<span className="text-xs text-neutral-500" id="availableText">Available: $1,100</span>
</div>
<div className="mt-1 flex items-center rounded-lg bg-neutral-950 border border-neutral-800 focus-within:border-neutral-700">
<div className="pl-3 text-neutral-400">$</div>
<input className="w-full bg-transparent px-2 py-2.5 text-white placeholder-neutral-600 focus:outline-none text-lg tracking-tight" id="withdrawAmount" inputmode="decimal" placeholder="0.00"/>
<button className="px-3 py-1.5 m-1 rounded-md bg-neutral-800 text-xs text-neutral-200 hover:bg-neutral-700" id="maxBtn">Max</button>
</div>
<p className="hidden mt-1 text-xs text-rose-400 flex items-center gap-1" id="amountError">
<i className="h-3.5 w-3.5" data-lucide="alert-circle"></i> Exceeds available amount.
                </p>
</div>

<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-400">From</span>
<div className="flex items-center gap-2">
<span className="text-[10px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded" id="summaryBadge">ETH</span>
<span className="text-neutral-200" id="summaryVault">Flexible Savings</span>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-400">Network fee</span>
<span className="text-neutral-200" id="feeText">$0.65</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-400">Est. arrival</span>
<span className="text-neutral-200" id="etaText">~30s</span>
</div>
<div className="border-t border-neutral-800"></div>
<div className="flex items-center justify-between">
<span className="text-neutral-400 text-sm">You will receive</span>
<span className="text-white text-lg font-semibold tracking-tight" id="receiveText">$0.00</span>
</div>
</div>

<div className="flex items-center justify-end gap-2">
<button className="px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm text-neutral-200" id="cancelWithdraw">Cancel</button>
<button className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed" id="confirmWithdraw">Confirm Withdrawal</button>
</div>
<p className="text-xs text-neutral-500 flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="info"></i>
                Withdrawals are subject to network conditions. Some funds may be locked until terms end.
              </p>
</div>
</div>
</div>
</div>

</main>
</div>


    </>
  );
}
