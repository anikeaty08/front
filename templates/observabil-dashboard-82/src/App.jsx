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



    // Icons
    lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

    // Spotlight (cards)
    function bindSpotlight(container) {
      if (!container) return;
      container.addEventListener("mousemove", (e) => {
        const cards = container.querySelectorAll(".spotlight-card");
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", x + "px");
          card.style.setProperty("--mouse-y", y + "px");
        });
      });
    }
    bindSpotlight(document);
    // Dropdowns
    function dropdown(btn, menu, onPick) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("hidden");
      });
      menu.querySelectorAll("button").forEach((item) => {
        item.addEventListener("click", () => {
          onPick(item);
          menu.classList.add("hidden");
        });
      });
    }
    document.addEventListener("click", () => {
      document.getElementById("envMenu")?.classList.add("hidden");
      document.getElementById("regionMenu")?.classList.add("hidden");
    });

    const envBtn = document.getElementById("envBtn");
    const envMenu = document.getElementById("envMenu");
    const envValue = document.getElementById("envValue");

    dropdown(envBtn, envMenu, (item) => {
      const v = item.getAttribute("data-env");
      envValue.textContent = v;
    });

    const regionBtn = document.getElementById("regionBtn");
    const regionMenu = document.getElementById("regionMenu");
    const regionValue = document.getElementById("regionValue");

    dropdown(regionBtn, regionMenu, (item) => {
      const v = item.getAttribute("data-region");
      regionValue.textContent = v;
    });

    // Toggle
    const botsToggle = document.getElementById("botsToggle");
    const botsKnob = document.getElementById("botsKnob");
    let botsOn = false;
    function renderBots() {
      botsToggle.setAttribute("aria-pressed", String(botsOn));
      botsToggle.classList.toggle("bg-emerald-500/15", botsOn);
      botsToggle.classList.toggle("border-emerald-500/25", botsOn);
      botsKnob.classList.toggle("translate-x-6", botsOn);
      botsKnob.classList.toggle("bg-white", botsOn);
    }
    botsToggle.addEventListener("click", () => { botsOn = !botsOn; renderBots(); });
    renderBots();

    // Range budget tooltip + mirrors
    const budget = document.getElementById("budget");
    const budgetVal = document.getElementById("budgetVal");
    const budgetInline = document.getElementById("budgetInline");
    const tip = document.getElementById("budgetTip");

    function updateBudgetUI() {
      const v = Number(budget.value);
      budgetVal.textContent = v;
      budgetInline.textContent = v;

      const min = Number(budget.min), max = Number(budget.max);
      const pct = (v - min) / (max - min);
      tip.textContent = v + "ms";
      tip.style.left = (pct * 100) + "%";
    }
    budget.addEventListener("input", updateBudgetUI);
    updateBudgetUI();

    // Copy query
    const copyBtn = document.getElementById("copyQueryBtn");
    const toast = document.getElementById("copyToast");

    function buildQuery() {
      return [
        'env="' + envValue.textContent + '"',
        'region="' + regionValue.textContent + '"',
        "include_bots=" + (botsOn ? "true" : "false"),
        "p95_budget_ms=" + budget.value
      ].join(" ");
    }

    copyBtn.addEventListener("click", async () => {
      const text = buildQuery();
      try {
        await navigator.clipboard.writeText(text);
        toast.classList.remove("hidden");
        setTimeout(() => toast.classList.add("hidden"), 1800);
      } catch (e) {
        toast.textContent = "Copy failed. Select and copy manually: " + text;
        toast.classList.remove("hidden");
      }
    });

    // Reset filters
    document.getElementById("resetFilters").addEventListener("click", () => {
      envValue.textContent = "production";
      regionValue.textContent = "global (all)";
      botsOn = false;
      renderBots();
      budget.value = 350;
      updateBudgetUI();
    });

    // Apply (demo)
    document.getElementById("applyBtn").addEventListener("click", () => {
      const btn = document.getElementById("applyBtn");
      const prev = btn.innerHTML;
      btn.innerHTML = '<span class="inline-flex items-center gap-2"><span data-lucide="loader-circle"></span> Applying</span>';
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = prev;
        btn.disabled = false;
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }, 900);
    });

    // Keyboard shortcut for deploy
    document.addEventListener("keydown", (e) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const cmd = isMac ? e.metaKey : e.ctrlKey;
      if (cmd && (e.key === "d" || e.key === "D")) {
        e.preventDefault();
        document.getElementById("deployBtn").click();
      }
    });

    // Demo actions
    document.getElementById("deployBtn").addEventListener("click", () => {
      alert("Deploy triggered (demo).");
    });
    document.getElementById("shareBtn")?.addEventListener("click", async () => {
      const url = location.href.split("#")[0] + "#overview";
      try { await navigator.clipboard.writeText(url); alert("Share link copied (demo)."); }
      catch { alert("Unable to copy share link (demo)."); }
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
<div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-[#8A2BE2] rounded-full mix-blend-screen opacity-[0.035] blur-[130px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-[#00F0FF] rounded-full mix-blend-screen opacity-[0.03] blur-[130px]"></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
<div className="group relative flex items-center justify-between px-2 py-2 rounded-full border border-white/10 bg-[#050505]/60 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all hover:border-white/20">
<div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
<div className="flex items-center gap-3 pl-4 min-w-0">
<div className="flex items-center gap-2 min-w-0">
<span className="font-semibold tracking-tight text-base sm:text-lg whitespace-nowrap">HYPERSTREAM</span>
<span className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Observability
          </span>
</div>
<div className="hidden lg:flex items-center gap-1">
<a className="px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5" href="#overview">Overview</a>
<a className="px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5" href="#requests">Requests</a>
<a className="px-3 py-1.5 text-xs-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5" href="#traces">Traces</a>
<a className="px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5" href="#errors">Errors</a>
<a className="px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5" href="#deployments">Deployments</a>
</div>
</div>
<div className="flex items-center gap-2 pr-2">
<button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-medium transition-all" id="shareBtn">
<span className="text-gray-200" data-lucide="link-2"></span>
          Share
        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-medium transition-all group-hover:shadow-[0_0_15px_rgba(138,43,226,0.3)]" id="deployBtn">
<span className="text-[#8A2BE2]" data-lucide="rocket"></span>
          Deploy
          <kbd className="hidden sm:inline-block font-mono bg-black/50 px-1.5 py-0.5 rounded border border-white/10 text-[10px] text-gray-400">⌘+D</kbd>
</button>
</div>
</div>
</nav>
<main className="w-full max-w-6xl mx-auto px-6 pt-28 sm:pt-32 pb-20">

<section className="mb-10" id="overview">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
<div className="space-y-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A2BE2]/10 border border-[#8A2BE2]/20 text-[#8A2BE2] text-xs font-mono">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A2BE2] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#8A2BE2]"></span>
</span>
            live • last 60 minutes
          </div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.08]">
            Production analytics<span className="text-white/60">.</span>
</h1>
<p className="text-base text-gray-400 max-w-2xl leading-relaxed">
            End-to-end request visibility across edge, API, workers, and database. Explore performance, errors, costs, and
            deployments with high-cardinality breakdowns.
          </p>
</div>

<div className="w-full lg:w-[28rem]">
<div className="spotlight-card rounded-2xl bg-[#0A0A0A] border border-white/10 p-1">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative rounded-xl p-5 sm:p-6 z-10 space-y-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-gray-200">Filters</div>
<button className="text-xs text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2" id="resetFilters">
<span data-lucide="rotate-ccw"></span>
                  Reset
                </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<div className="relative">
<label className="block text-xs text-gray-500 mb-1.5">Environment</label>
<button className="w-full flex items-center justify-between gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-gray-200 hover:bg-white/10 transition-colors" id="envBtn" type="button">
<span className="inline-flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="truncate" id="envValue">production</span>
</span>
<span className="text-gray-400" data-lucide="chevron-down"></span>
</button>
<div className="hidden absolute z-40 mt-2 w-full rounded-xl bg-[#0A0A0A] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden" id="envMenu">
<button className="w-full text-left px-3 py-2.5 text-sm hover:bg-white/5 flex items-center justify-between" data-env="production">
<span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"></span>production</span>
<span className="text-xs text-gray-500">default</span>
</button>
<button className="w-full text-left px-3 py-2.5 text-sm hover:bg-white/5 flex items-center gap-2" data-env="staging">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>staging
                    </button>
<button className="w-full text-left px-3 py-2.5 text-sm hover:bg-white/5 flex items-center gap-2" data-env="dev">
<span className="h-2 w-2 rounded-full bg-sky-400"></span>dev
                    </button>
</div>
</div>

<div className="relative">
<label className="block text-xs text-gray-500 mb-1.5">Region</label>
<button className="w-full flex items-center justify-between gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-gray-200 hover:bg-white/10 transition-colors" id="regionBtn" type="button">
<span className="inline-flex items-center gap-2 min-w-0">
<span className="text-gray-300" data-lucide="globe"></span>
<span className="truncate" id="regionValue">global (all)</span>
</span>
<span className="text-gray-400" data-lucide="chevron-down"></span>
</button>
<div className="hidden absolute z-40 mt-2 w-full rounded-xl bg-[#0A0A0A] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden" id="regionMenu">
<button className="w-full text-left px-3 py-2.5 text-sm hover:bg-white/5 flex items-center justify-between" data-region="global (all)">
                      global (all)
                      <span className="text-xs text-gray-500">35 edges</span>
</button>
<button className="w-full text-left px-3 py-2.5 text-sm hover:bg-white/5" data-region="us-east-1">us-east-1</button>
<button className="w-full text-left px-3 py-2.5 text-sm hover:bg-white/5" data-region="eu-west-1">eu-west-1</button>
<button className="w-full text-left px-3 py-2.5 text-sm hover:bg-white/5" data-region="ap-southeast-1">ap-southeast-1</button>
</div>
</div>
</div>

<div className="flex items-center justify-between gap-4">
<div className="space-y-1">
<div className="text-sm font-medium text-gray-200">Include bots</div>
<div className="text-xs text-gray-500">Counts automated traffic in requests and rate limits.</div>
</div>
<button aria-pressed="false" className="relative inline-flex h-7 w-12 items-center rounded-full border border-white/10 bg-white/5 transition-colors" id="botsToggle" type="button">
<span className="sr-only">Toggle bots</span>
<span className="inline-block h-5 w-5 translate-x-1 rounded-full bg-white/80 shadow transition-transform" id="botsKnob"></span>
</button>
</div>

<div>
<div className="flex items-end justify-between">
<div className="space-y-1">
<div className="text-sm font-medium text-gray-200">p95 budget</div>
<div className="text-xs text-gray-500">Target latency threshold (ms) used in SLO.</div>
</div>
<div className="text-xs text-gray-400 font-mono"><span id="budgetVal">350</span>ms</div>
</div>
<div className="mt-3 range-wrap">
<div className="tooltip left-1/2 hidden sm:block" id="budgetTip">350ms</div>
<input className="range" id="budget" max="900" min="120" step="10" type="range" value="350"/>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#8A2BE2] text-white text-sm font-semibold py-2.5 hover:bg-[#7a22cc] transition-colors shadow-lg shadow-[#8A2BE2]/25" id="applyBtn">
<span data-lucide="filter"></span>
                  Apply
                </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium py-2.5 text-gray-200 hover:bg-white/10 transition-colors" id="copyQueryBtn">
<span data-lucide="copy"></span>
                  Copy query
                </button>
</div>
<div className="hidden text-xs text-gray-300 bg-white/5 border border-white/10 rounded-lg px-3 py-2" id="copyToast">
                Query copied to clipboard.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="kpiCards">
<div className="spotlight-card rounded-2xl bg-[#0A0A0A] border border-white/10 p-1">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative rounded-xl p-5 z-10">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Requests</div>
<div className="inline-flex items-center gap-1 text-xs text-emerald-400">
<span data-lucide="trending-up"></span>
<span className="font-mono">+6.2%</span>
</div>
</div>
<div className="mt-3 flex items-end justify-between gap-4">
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight">18.42M</div>
<div className="text-sm text-gray-400 mt-1">avg 307 rps</div>
</div>
<div className="w-24">
<div className="h-10 rounded-lg bg-white/5 border border-white/10 p-1">
<div className="h-full rounded-md bg-gradient-to-t from-[#8A2BE2]/50 to-[#00F0FF]/40 w-[78%]"></div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-xs">
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
<div className="text-gray-500">Cache hit</div>
<div className="text-sm text-gray-200 mt-1 font-mono">72.8%</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
<div className="text-gray-500">Blocked</div>
<div className="text-sm text-gray-200 mt-1 font-mono">1.34%</div>
</div>
</div>
</div>
</div>
<div className="spotlight-card rounded-2xl bg-[#0A0A0A] border border-white/10 p-1">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative rounded-xl p-5 z-10">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Latency</div>
<div className="inline-flex items-center gap-1 text-xs text-amber-300">
<span data-lucide="clock"></span>
<span className="font-mono">p95</span>
</div>
</div>
<div className="mt-3 flex items-end justify-between gap-4">
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight">312ms</div>
<div className="text-sm text-gray-400 mt-1">p50 88ms • p99 1.9s</div>
</div>
<div className="w-24">
<div className="h-10 rounded-lg bg-white/5 border border-white/10 p-1">
<div className="h-full rounded-md bg-gradient-to-t from-amber-500/40 to-[#00F0FF]/20 w-[56%]"></div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-xs">
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
<div className="text-gray-500">SLO</div>
<div className="text-sm text-gray-200 mt-1 font-mono">99.42%</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
<div className="text-gray-500">Budget burn</div>
<div className="text-sm text-gray-200 mt-1 font-mono">0.83x</div>
</div>
</div>
</div>
</div>
<div className="spotlight-card rounded-2xl bg-[#0A0A0A] border border-white/10 p-1">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative rounded-xl p-5 z-10">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Errors</div>
<div className="inline-flex items-center gap-1 text-xs text-rose-300">
<span data-lucide="shield-alert"></span>
<span className="font-mono">last 60m</span>
</div>
</div>
<div className="mt-3 flex items-end justify-between gap-4">
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight">0.21%</div>
<div className="text-sm text-gray-400 mt-1">5xx 0.06% • 4xx 0.92%</div>
</div>
<div className="w-24">
<div className="h-10 rounded-lg bg-white/5 border border-white/10 p-1">
<div className="h-full rounded-md bg-gradient-to-t from-rose-500/40 to-amber-400/20 w-[22%]"></div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-xs">
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
<div className="text-gray-500">Timeouts</div>
<div className="text-sm text-gray-200 mt-1 font-mono">0.03%</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
<div className="text-gray-500">Retries</div>
<div className="text-sm text-gray-200 mt-1 font-mono">1.8%</div>
</div>
</div>
</div>
</div>
<div className="spotlight-card rounded-2xl bg-[#0A0A0A] border border-white/10 p-1">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative rounded-xl p-5 z-10">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Cost</div>
<div className="inline-flex items-center gap-1 text-xs text-sky-300">
<span data-lucide="banknote"></span>
<span className="font-mono">est.</span>
</div>
</div>
<div className="mt-3 flex items-end justify-between gap-4">
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight">$428.70</div>
<div className="text-sm text-gray-400 mt-1">$0.023 / 1k req</div>
</div>
<div className="w-24">
<div className="h-10 rounded-lg bg-white/5 border border-white/10 p-1">
<div className="h-full rounded-md bg-gradient-to-t from-sky-500/35 to-[#8A2BE2]/25 w-[64%]"></div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-xs">
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
<div className="text-gray-500">Egress</div>
<div className="text-sm text-gray-200 mt-1 font-mono">1.82TB</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
<div className="text-gray-500">Compute</div>
<div className="text-sm text-gray-200 mt-1 font-mono">2,114 vCPU-s</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">

<div className="lg:col-span-2 spotlight-card rounded-2xl bg-[#0A0A0A] border border-white/10 p-1" id="requests">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative rounded-xl p-5 sm:p-6 z-10">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
<div className="space-y-1">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Requests &amp; latency</h2>
<p className="text-base text-gray-400">RPS, p95, and error rate over the last 60 minutes.</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
<span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF]"></span>
                rps
              </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
<span className="h-1.5 w-1.5 rounded-full bg-[#8A2BE2]"></span>
                p95
              </span>
<span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                errors
              </span>
</div>
</div>

<div className="mt-6">
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<div className="flex items-end justify-between gap-1.5 h-40">

<div className="w-full h-[35%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[48%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[42%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[56%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[62%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[58%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[64%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[72%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[66%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[60%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[52%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[46%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[50%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[57%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[68%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[76%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[70%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[63%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[61%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[55%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[49%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[44%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[38%] rounded-sm bg-[#00F0FF]/35"></div>
<div className="w-full h-[34%] rounded-sm bg-[#00F0FF]/35"></div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">RPS</div>
<div className="text-xs text-gray-400 font-mono">peak 812</div>
</div>
<div className="mt-2 text-sm text-gray-200 font-mono">avg 307 • now 291</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Latency</div>
<div className="text-xs text-gray-400 font-mono">budget <span id="budgetInline">350</span>ms</div>
</div>
<div className="mt-2 text-sm text-gray-200 font-mono">p50 88 • p95 312 • p99 1.9s</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Errors</div>
<div className="text-xs text-gray-400 font-mono">5xx 0.06%</div>
</div>
<div className="mt-2 text-sm text-gray-200 font-mono">rate 0.21% • spikes 3</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card rounded-2xl bg-[#0A0A0A] border border-white/10 p-1" id="deployments">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative rounded-xl p-5 sm:p-6 z-10">
<div className="flex items-center justify-between">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">System status</h2>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              operational
            </span>
</div>
<p className="text-base text-gray-400 mt-2">Real-time health for edge, API, workers, and data.</p>
<div className="mt-5 space-y-3">
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-medium text-gray-200 flex items-center gap-2">
<span className="text-gray-300" data-lucide="cloud"></span>
                    Edge network
                  </div>
<div className="text-xs text-gray-500 mt-1 font-mono">35 POPs • TLS 1.3 • HTTP/3</div>
</div>
<div className="text-xs text-emerald-300 font-mono">p99 94ms</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs">
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Hit</div>
<div className="text-gray-200 mt-1 font-mono">72.8%</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">WAF</div>
<div className="text-gray-200 mt-1 font-mono">1.34%</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Egress</div>
<div className="text-gray-200 mt-1 font-mono">1.82TB</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-medium text-gray-200 flex items-center gap-2">
<span className="text-gray-300" data-lucide="cpu"></span>
                    API compute
                  </div>
<div className="text-xs text-gray-500 mt-1 font-mono">autoscale • 12 pods • 2 regions active</div>
</div>
<div className="text-xs text-gray-200 font-mono">CPU 38% • RAM 61%</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs">
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Cold starts</div>
<div className="text-gray-200 mt-1 font-mono">0.7%</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Queue</div>
<div className="text-gray-200 mt-1 font-mono">p95 31ms</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Retries</div>
<div className="text-gray-200 mt-1 font-mono">1.8%</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-medium text-gray-200 flex items-center gap-2">
<span className="text-gray-300" data-lucide="database"></span>
                    Data layer
                  </div>
<div className="text-xs text-gray-500 mt-1 font-mono">postgres • 3 replicas • RPO 0s</div>
</div>
<div className="text-xs text-gray-200 font-mono">p95 17ms</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs">
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Connections</div>
<div className="text-gray-200 mt-1 font-mono">184 / 500</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Locks</div>
<div className="text-gray-200 mt-1 font-mono">0.02%</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Cache</div>
<div className="text-gray-200 mt-1 font-mono">redis 1.1GB</div>
</div>
</div>
</div>
<div className="rounded-xl bg-black/30 border border-white/10 p-4">
<div className="flex items-center justify-between gap-4">
<div className="min-w-0">
<div className="text-sm font-medium text-gray-200 flex items-center gap-2">
<span className="text-gray-300" data-lucide="git-commit-horizontal"></span>
                    Latest deployment
                  </div>
<div className="text-xs text-gray-500 mt-1 font-mono truncate">main • 9f31c2a • api: v2.4.0 • edge: 214.12</div>
</div>
<div className="text-xs text-emerald-300 font-mono whitespace-nowrap">14m ago</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-xs">
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
<div className="text-gray-500">Rollout</div>
<div className="text-gray-200 mt-1 font-mono">0% errors</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-2">
<div className="text-gray-500">Rollback window</div>
<div className="text-gray-200 mt-1 font-mono">2h</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">

<div className="spotlight-card rounded-2xl bg-[#0A0A0A] border border-white/10 p-1" id="traces">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative rounded-xl p-5 sm:p-6 z-10">
<div className="flex items-center justify-between gap-4">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Slow traces</h2>
<p className="text-base text-gray-400 mt-1">Highest-impact requests by p99 and total time.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-gray-200 hover:bg-white/10 transition-colors">
<span data-lucide="search"></span>
              Explore
            </button>
</div>
<div className="mt-5 space-y-3">

<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono">
<span className="text-rose-300" data-lucide="timer"></span>
                      p99
                    </span>
<span className="text-sm font-medium text-gray-200 truncate">POST /v1/checkout/confirm</span>
</div>
<div className="mt-2 text-xs text-gray-500 font-mono truncate">trace_8baf… • edge: sfo1 • region: us-east-1 • sdk: node 20</div>
</div>
<div className="text-right whitespace-nowrap">
<div className="text-sm font-semibold text-gray-200 font-mono">2.41s</div>
<div className="text-xs text-gray-500 font-mono">14.8% of time</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">DB</div>
<div className="text-gray-200 mt-1 font-mono">1.12s</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Cache</div>
<div className="text-gray-200 mt-1 font-mono">140ms</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Upstream</div>
<div className="text-gray-200 mt-1 font-mono">660ms</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">CPU</div>
<div className="text-gray-200 mt-1 font-mono">312ms</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs font-mono">
<span className="text-amber-200" data-lucide="activity"></span>
                      p95
                    </span>
<span className="text-sm font-medium text-gray-200 truncate">GET /v1/search</span>
</div>
<div className="mt-2 text-xs text-gray-500 font-mono truncate">trace_13c1… • edge: fra1 • region: eu-west-1 • cache: miss</div>
</div>
<div className="text-right whitespace-nowrap">
<div className="text-sm font-semibold text-gray-200 font-mono">618ms</div>
<div className="text-xs text-gray-500 font-mono">9.1% of time</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">DB</div>
<div className="text-gray-200 mt-1 font-mono">290ms</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Index</div>
<div className="text-gray-200 mt-1 font-mono">120ms</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Edge</div>
<div className="text-gray-200 mt-1 font-mono">64ms</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Bytes</div>
<div className="text-gray-200 mt-1 font-mono">219KB</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#8A2BE2]/10 border border-[#8A2BE2]/20 text-[#c9a7ff] text-xs font-mono">
<span className="text-[#c9a7ff]" data-lucide="sparkles"></span>
                      edge
                    </span>
<span className="text-sm font-medium text-gray-200 truncate">GET /assets/app.js</span>
</div>
<div className="mt-2 text-xs text-gray-500 font-mono truncate">trace_2ff0… • edge: nrt1 • cache: hit • compression: br</div>
</div>
<div className="text-right whitespace-nowrap">
<div className="text-sm font-semibold text-gray-200 font-mono">74ms</div>
<div className="text-xs text-gray-500 font-mono">3.3% of time</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">TTFB</div>
<div className="text-gray-200 mt-1 font-mono">29ms</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">TLS</div>
<div className="text-gray-200 mt-1 font-mono">8ms</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Origin</div>
<div className="text-gray-200 mt-1 font-mono">0ms</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-2">
<div className="text-gray-500">Bytes</div>
<div className="text-gray-200 mt-1 font-mono">412KB</div>
</div>
</div>
</div>
</div>
<div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="text-xs text-gray-500 font-mono">
              sampled 1:100 • tail-based sampling enabled • trace retention 14d
            </div>
<button className="inline-flex items-center gap-2 text-xs text-gray-200 hover:text-white transition-colors">
              View all traces
              <span data-lucide="arrow-right"></span>
</button>
</div>
</div>
</div>

<div className="spotlight-card rounded-2xl bg-[#0A0A0A] border border-white/10 p-1" id="errors">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative rounded-xl p-5 sm:p-6 z-10">
<div className="flex items-center justify-between gap-4">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Error groups</h2>
<p className="text-base text-gray-400 mt-1">De-duplicated by stack fingerprint and route.</p>
</div>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono">
<span className="text-rose-300" data-lucide="flame"></span>
              7 groups
            </span>
</div>
<div className="mt-5 overflow-hidden rounded-xl border border-white/10">
<div className="grid grid-cols-12 gap-0 bg-white/5 border-b border-white/10 px-4 py-3 text-xs text-gray-500">
<div className="col-span-6">Signature</div>
<div className="col-span-2 text-right">Events</div>
<div className="col-span-2 text-right">Users</div>
<div className="col-span-2 text-right">Last seen</div>
</div>
<div className="divide-y divide-white/10 bg-black/20">
<div className="grid grid-cols-12 px-4 py-3 items-center gap-2">
<div className="col-span-6 min-w-0">
<div className="flex items-center gap-2 min-w-0">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300">
<span data-lucide="x-circle"></span>
</span>
<div className="min-w-0">
<div className="text-sm font-medium text-gray-200 truncate">TypeError: cannot read properties of undefined</div>
<div className="text-xs text-gray-500 font-mono truncate">route:/v1/checkout/confirm • file: payments.ts:214 • node@20</div>
</div>
</div>
</div>
<div className="col-span-2 text-right text-sm font-mono text-gray-200">382</div>
<div className="col-span-2 text-right text-sm font-mono text-gray-200">119</div>
<div className="col-span-2 text-right text-xs font-mono text-gray-400">2m ago</div>
</div>
<div className="grid grid-cols-12 px-4 py-3 items-center gap-2">
<div className="col-span-6 min-w-0">
<div className="flex items-center gap-2 min-w-0">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200">
<span data-lucide="alert-triangle"></span>
</span>
<div className="min-w-0">
<div className="text-sm font-medium text-gray-200 truncate">UpstreamTimeout: stripe gateway exceeded 10s</div>
<div className="text-xs text-gray-500 font-mono truncate">service:payments • region:us-east-1 • retries:2</div>
</div>
</div>
</div>
<div className="col-span-2 text-right text-sm font-mono text-gray-200">91</div>
<div className="col-span-2 text-right text-sm font-mono text-gray-200">54</div>
<div className="col-span-2 text-right text-xs font-mono text-gray-400">8m ago</div>
</div>
<div className="grid grid-cols-12 px-4 py-3 items-center gap-2">
<div className="col-span-6 min-w-0">
<div className="flex items-center gap-2 min-w-0">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-200">
<span data-lucide="shield"></span>
</span>
<div className="min-w-0">
<div className="text-sm font-medium text-gray-200 truncate">WAF: sql-injection heuristic match</div>
<div className="text-xs text-gray-500 font-mono truncate">rule: 942100 • path:/v1/search • action:block</div>
</div>
</div>
</div>
<div className="col-span-2 text-right text-sm font-mono text-gray-200">4,219</div>
<div className="col-span-2 text-right text-sm font-mono text-gray-200">—</div>
<div className="col-span-2 text-right text-xs font-mono text-gray-400">now</div>
</div>
<div className="grid grid-cols-12 px-4 py-3 items-center gap-2">
<div className="col-span-6 min-w-0">
<div className="flex items-center gap-2 min-w-0">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300">
<span data-lucide="file-warning"></span>
</span>
<div className="min-w-0">
<div className="text-sm font-medium text-gray-200 truncate">SchemaValidationError: missing field "email"</div>
<div className="text-xs text-gray-500 font-mono truncate">route:/v1/users • status:400 • sdk:web@3.1.2</div>
</div>
</div>
</div>
<div className="col-span-2 text-right text-sm font-mono text-gray-200">1,042</div>
<div className="col-span-2 text-right text-sm font-mono text-gray-200">611</div>
<div className="col-span-2 text-right text-xs font-mono text-gray-400">1m ago</div>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Top status codes</div>
<div className="text-xs text-gray-400 font-mono">last 60m</div>
</div>
<div className="mt-3 space-y-2 text-xs">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 text-gray-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-gray-400"></span> 400
                  </div>
<div className="flex items-center gap-3 min-w-0">
<div className="h-2 w-40 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full w-[64%] bg-amber-400/45"></div>
</div>
<div className="text-gray-200 font-mono w-12 text-right">0.92%</div>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 text-gray-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-gray-400"></span> 401
                  </div>
<div className="flex items-center gap-3 min-w-0">
<div className="h-2 w-40 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full w-[22%] bg-sky-400/45"></div>
</div>
<div className="text-gray-200 font-mono w-12 text-right">0.31%</div>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 text-gray-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-gray-400"></span> 429
                  </div>
<div className="flex items-center gap-3 min-w-0">
<div className="h-2 w-40 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full w-[18%] bg-[#8A2BE2]/50"></div>
</div>
<div className="text-gray-200 font-mono w-12 text-right">0.26%</div>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 text-gray-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-gray-400"></span> 500
                  </div>
<div className="flex items-center gap-3 min-w-0">
<div className="h-2 w-40 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full w-[6%] bg-rose-400/60"></div>
</div>
<div className="text-gray-200 font-mono w-12 text-right">0.06%</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Traffic quality</div>
<div className="text-xs text-gray-400 font-mono">waf + rate limit</div>
</div>
<div className="mt-3 space-y-2 text-xs">
<div className="flex items-center justify-between">
<div className="text-gray-300 inline-flex items-center gap-2">
<span className="text-emerald-300" data-lucide="shield-check"></span>
                    Legit
                  </div>
<div className="text-gray-200 font-mono">98.66%</div>
</div>
<div className="flex items-center justify-between">
<div className="text-gray-300 inline-flex items-center gap-2">
<span className="text-amber-200" data-lucide="shield-alert"></span>
                    Throttled (429)
                  </div>
<div className="text-gray-200 font-mono">0.26%</div>
</div>
<div className="flex items-center justify-between">
<div className="text-gray-300 inline-flex items-center gap-2">
<span className="text-rose-300" data-lucide="ban"></span>
                    Blocked (WAF)
                  </div>
<div className="text-gray-200 font-mono">1.34%</div>
</div>
<div className="mt-3 rounded-lg bg-black/30 border border-white/10 p-3">
<div className="text-xs text-gray-500">Top WAF rule</div>
<div className="mt-1 text-sm text-gray-200 font-mono truncate">942100 • SQL Injection Attack Detected</div>
</div>
</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between gap-3">
<div className="text-xs text-gray-500 font-mono">error retention 30d • grouping by fingerprint + route</div>
<button className="inline-flex items-center gap-2 text-xs text-gray-200 hover:text-white transition-colors">
              View all errors
              <span data-lucide="arrow-right"></span>
</button>
</div>
</div>
</div>
</section>

<section className="spotlight-card rounded-2xl bg-[#0A0A0A] border border-white/10 p-1 mb-12">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative rounded-xl p-5 sm:p-6 z-10">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
<div className="space-y-1">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Endpoint performance</h2>
<p className="text-base text-gray-400">High-cardinality breakdown with cache, payload, and compute signals.</p>
</div>
<div className="flex flex-col sm:flex-row gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-gray-200 hover:bg-white/10 transition-colors">
<span data-lucide="download"></span>
              Export CSV
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-gray-200 hover:bg-white/10 transition-colors">
<span data-lucide="columns-3"></span>
              Columns
            </button>
</div>
</div>
<div className="mt-5 overflow-x-auto rounded-xl border border-white/10">
<table className="min-w-[62rem] w-full text-left">
<thead className="bg-white/5 border-b border-white/10">
<tr className="text-xs text-gray-500">
<th className="px-4 py-3 font-medium">Route</th>
<th className="px-4 py-3 font-medium">Method</th>
<th className="px-4 py-3 font-medium text-right">Requests</th>
<th className="px-4 py-3 font-medium text-right">p50</th>
<th className="px-4 py-3 font-medium text-right">p95</th>
<th className="px-4 py-3 font-medium text-right">p99</th>
<th className="px-4 py-3 font-medium text-right">Error</th>
<th className="px-4 py-3 font-medium text-right">Cache hit</th>
<th className="px-4 py-3 font-medium text-right">Egress</th>
<th className="px-4 py-3 font-medium text-right">CPU</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10 bg-black/20">
<tr className="text-sm text-gray-200">
<td className="px-4 py-3">
<div className="flex items-center gap-2 min-w-0">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#8A2BE2]/10 border border-[#8A2BE2]/20 text-[#c9a7ff]">
<span data-lucide="shopping-cart"></span>
</span>
<div className="min-w-0">
<div className="font-medium truncate">/v1/checkout/confirm</div>
<div className="text-xs text-gray-500 font-mono truncate">service:payments • db:postgres • queue:kafka</div>
</div>
</div>
</td>
<td className="px-4 py-3 text-xs font-mono text-gray-300">POST</td>
<td className="px-4 py-3 text-right font-mono">812,140</td>
<td className="px-4 py-3 text-right font-mono">122ms</td>
<td className="px-4 py-3 text-right font-mono">612ms</td>
<td className="px-4 py-3 text-right font-mono">2.41s</td>
<td className="px-4 py-3 text-right font-mono text-rose-300">0.38%</td>
<td className="px-4 py-3 text-right font-mono">11.2%</td>
<td className="px-4 py-3 text-right font-mono">312GB</td>
<td className="px-4 py-3 text-right font-mono">1,102s</td>
</tr>
<tr className="text-sm text-gray-200">
<td className="px-4 py-3">
<div className="flex items-center gap-2 min-w-0">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300">
<span data-lucide="search"></span>
</span>
<div className="min-w-0">
<div className="font-medium truncate">/v1/search</div>
<div className="text-xs text-gray-500 font-mono truncate">index:vector • cache:partial • edge:enabled</div>
</div>
</div>
</td>
<td className="px-4 py-3 text-xs font-mono text-gray-300">GET</td>
<td className="px-4 py-3 text-right font-mono">4,982,031</td>
<td className="px-4 py-3 text-right font-mono">64ms</td>
<td className="px-4 py-3 text-right font-mono">318ms</td>
<td className="px-4 py-3 text-right font-mono">1.04s</td>
<td className="px-4 py-3 text-right font-mono text-amber-200">0.09%</td>
<td className="px-4 py-3 text-right font-mono">68.4%</td>
<td className="px-4 py-3 text-right font-mono">740GB</td>
<td className="px-4 py-3 text-right font-mono">684s</td>
</tr>
<tr className="text-sm text-gray-200">
<td className="px-4 py-3">
<div className="flex items-center gap-2 min-w-0">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-200">
<span data-lucide="image"></span>
</span>
<div className="min-w-0">
<div className="font-medium truncate">/assets/*</div>
<div className="text-xs text-gray-500 font-mono truncate">cdn • compression:br • immutable</div>
</div>
</div>
</td>
<td className="px-4 py-3 text-xs font-mono text-gray-300">GET</td>
<td className="px-4 py-3 text-right font-mono">10,414,292</td>
<td className="px-4 py-3 text-right font-mono">18ms</td>
<td className="px-4 py-3 text-right font-mono">74ms</td>
<td className="px-4 py-3 text-right font-mono">180ms</td>
<td className="px-4 py-3 text-right font-mono text-gray-300">0.01%</td>
<td className="px-4 py-3 text-right font-mono">96.1%</td>
<td className="px-4 py-3 text-right font-mono">612GB</td>
<td className="px-4 py-3 text-right font-mono">94s</td>
</tr>
<tr className="text-sm text-gray-200">
<td className="px-4 py-3">
<div className="flex items-center gap-2 min-w-0">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
<span data-lucide="user"></span>
</span>
<div className="min-w-0">
<div className="font-medium truncate">/v1/users</div>
<div className="text-xs text-gray-500 font-mono truncate">validation • auth:jwt • writes:enabled</div>
</div>
</div>
</td>
<td className="px-4 py-3 text-xs font-mono text-gray-300">POST</td>
<td className="px-4 py-3 text-right font-mono">1,093,221</td>
<td className="px-4 py-3 text-right font-mono">102ms</td>
<td className="px-4 py-3 text-right font-mono">284ms</td>
<td className="px-4 py-3 text-right font-mono">540ms</td>
<td className="px-4 py-3 text-right font-mono text-amber-200">0.31%</td>
<td className="px-4 py-3 text-right font-mono">0.0%</td>
<td className="px-4 py-3 text-right font-mono">28GB</td>
<td className="px-4 py-3 text-right font-mono">518s</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-3">
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Top regions</div>
<div className="text-xs text-gray-400 font-mono">req share</div>
</div>
<div className="mt-3 space-y-2 text-xs">
<div className="flex items-center justify-between gap-3">
<div className="text-gray-300 font-mono">us-east-1</div>
<div className="flex items-center gap-3">
<div className="h-2 w-36 rounded-full bg-black/30 border border-white/10 overflow-hidden">
<div className="h-full w-[44%] bg-[#00F0FF]/45"></div>
</div>
<div className="text-gray-200 font-mono w-12 text-right">44%</div>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="text-gray-300 font-mono">eu-west-1</div>
<div className="flex items-center gap-3">
<div className="h-2 w-36 rounded-full bg-black/30 border border-white/10 overflow-hidden">
<div className="h-full w-[28%] bg-[#8A2BE2]/45"></div>
</div>
<div className="text-gray-200 font-mono w-12 text-right">28%</div>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="text-gray-300 font-mono">ap-southeast-1</div>
<div className="flex items-center gap-3">
<div className="h-2 w-36 rounded-full bg-black/30 border border-white/10 overflow-hidden">
<div className="h-full w-[16%] bg-emerald-400/35"></div>
</div>
<div className="text-gray-200 font-mono w-12 text-right">16%</div>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="text-gray-300 font-mono">other</div>
<div className="flex items-center gap-3">
<div className="h-2 w-36 rounded-full bg-black/30 border border-white/10 overflow-hidden">
<div className="h-full w-[12%] bg-white/15"></div>
</div>
<div className="text-gray-200 font-mono w-12 text-right">12%</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Client platforms</div>
<div className="text-xs text-gray-400 font-mono">unique users</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-xs">
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<div className="text-gray-500">Web</div>
<div className="mt-1 text-sm text-gray-200 font-mono">412,090</div>
<div className="mt-1 text-xs text-gray-500 font-mono">sdk:web@3.1.2</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<div className="text-gray-500">iOS</div>
<div className="mt-1 text-sm text-gray-200 font-mono">88,114</div>
<div className="mt-1 text-xs text-gray-500 font-mono">sdk:swift@2.8.0</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<div className="text-gray-500">Android</div>
<div className="mt-1 text-sm text-gray-200 font-mono">101,003</div>
<div className="mt-1 text-xs text-gray-500 font-mono">sdk:kotlin@1.9.1</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<div className="text-gray-500">Server</div>
<div className="mt-1 text-sm text-gray-200 font-mono">31,770</div>
<div className="mt-1 text-xs text-gray-500 font-mono">sdk:node@6.4.0</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-gray-500">Rate limiting</div>
<div className="text-xs text-gray-400 font-mono">policy: strict</div>
</div>
<div className="mt-3 space-y-2 text-xs">
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-gray-500">Global</div>
<div className="text-gray-200 font-mono">1200 rpm</div>
</div>
<div className="mt-1 text-xs text-gray-500 font-mono">exceeded: 0.26% • burst: 80</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-gray-500">Checkout</div>
<div className="text-gray-200 font-mono">60 rpm</div>
</div>
<div className="mt-1 text-xs text-gray-500 font-mono">exceeded: 0.04% • ip bucket</div>
</div>
<div className="rounded-lg bg-black/30 border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-gray-500">Auth</div>
<div className="text-gray-200 font-mono">30 rpm</div>
</div>
<div className="mt-1 text-xs text-gray-500 font-mono">exceeded: 0.09% • user bucket</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050505] relative z-20">
<div className="max-w-6xl mx-auto px-6 py-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">Stay on top of performance.</h2>
<p className="text-base text-gray-500">Get weekly summaries with SLOs, regressions, and cost deltas.</p>
</div>
<div className="flex gap-2 w-full md:max-w-md">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#8A2BE2] transition-colors" placeholder="dev@company.com" type="email"/>
<button className="px-6 py-2.5 bg-white text-black font-semibold text-sm rounded-lg hover:bg-gray-200 transition-colors">Subscribe</button>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 mt-10 gap-6">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-mono text-green-500">All Systems Operational</span>
</div>
<div className="flex flex-wrap justify-center gap-6 text-xs text-gray-600">
<a className="hover:text-gray-400 transition-colors" href="#">Docs</a>
<a className="hover:text-gray-400 transition-colors" href="#">Status</a>
<a className="hover:text-gray-400 transition-colors" href="#">Security</a>
<span className="text-gray-700">© 2026 Hyperstream Inc.</span>
</div>
</div>
</div>
</footer>
</main>




    </>
  );
}
