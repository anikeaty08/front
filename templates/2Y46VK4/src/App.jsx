import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Initialize icons
      lucide.createIcons();

      // State
      const chips = Array.from(document.querySelectorAll('.filter-chip'));
      const cards = Array.from(document.querySelectorAll('[data-bot]'));
      const search = document.getElementById('search');
      const tooltip = document.getElementById('tooltip');

      // Default active chip: All
      const setActiveChip = (value) => {
        chips.forEach(chip => {
          const active = chip.getAttribute('data-filter') === value;
          chip.setAttribute('data-active', active ? 'true' : 'false');
          if (active) {
            chip.classList.add('ring-purple-500/60','bg-neutral-800/70');
          } else {
            chip.classList.remove('ring-purple-500/60','bg-neutral-800/70');
          }
        });
      };
      setActiveChip('all');

      let currentFilter = 'all';
      let searchTerm = '';

      const normalize = (s) => s.toLowerCase().trim();

      const applyFilters = () => {
        cards.forEach(card => {
          const tags = (card.dataset.tags || '').split(',').map(normalize);
          const title = normalize(card.querySelector('span.text-sm.font-medium')?.textContent || '');
          const matchesFilter = currentFilter === 'all' ? true : tags.includes(currentFilter);
          const matchesSearch = searchTerm ? (title.includes(searchTerm)) : true;
          const show = matchesFilter && matchesSearch;
          card.style.display = show ? '' : 'none';
        });
      };

      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          currentFilter = chip.getAttribute('data-filter');
          setActiveChip(currentFilter);
          applyFilters();
        });
      });

      search.addEventListener('input', (e) => {
        searchTerm = normalize(e.target.value);
        applyFilters();
      });

      // Simple tooltip for info icons
      let tooltipHideTimeout;
      const showTooltip = (el, text) => {
        tooltip.textContent = text;
        tooltip.classList.remove('hidden');
        const rect = el.getBoundingClientRect();
        const ttRect = tooltip.getBoundingClientRect();
        const top = window.scrollY + rect.top - ttRect.height - 8;
        const left = Math.min(
          window.scrollX + rect.left,
          window.scrollX + window.innerWidth - ttRect.width - 12
        );
        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
      };
      const hideTooltip = () => {
        tooltip.classList.add('hidden');
      };

      document.querySelectorAll('[data-info]').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
          clearTimeout(tooltipHideTimeout);
          showTooltip(icon, icon.getAttribute('data-info'));
        });
        icon.addEventListener('mouseleave', () => {
          tooltipHideTimeout = setTimeout(hideTooltip, 120);
        });
        icon.addEventListener('click', (e) => {
          e.stopPropagation();
          clearTimeout(tooltipHideTimeout);
          showTooltip(icon, icon.getAttribute('data-info'));
          tooltipHideTimeout = setTimeout(hideTooltip, 1600);
        });
      });

      // Card selection handler (placeholder action)
      cards.forEach(card => {
        card.addEventListener('click', () => {
          const name = card.querySelector('span.text-sm.font-medium')?.textContent?.trim() || 'Bot';
          console.log('Selected:', name);
          // Integrate navigation or modal open here
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">

<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Select a bot</h1>
<p className="text-sm text-neutral-400 mt-1">Choose a strategy, then configure risk, size, and markets.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/60 px-3.5 py-2 text-sm text-neutral-200 hover:bg-neutral-800/60 hover:border-neutral-700 transition">
<i className="h-4 w-4" data-lucide="mouse-pointer-square"></i>
<span className="font-medium">Manual trading</span>
<i className="h-4 w-4 text-neutral-400" data-lucide="chevron-right"></i>
</button>
</div>

<div className="mt-6 flex flex-col md:flex-row md:items-center gap-3">

<div className="flex flex-wrap items-center gap-2" id="filters">
<button className="filter-chip inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3.5 py-1.5 text-sm text-neutral-200 hover:bg-neutral-800/60 transition ring-1 ring-transparent data-[active=true]:ring-1 data-[active=true]:ring-purple-500/60 data-[active=true]:bg-neutral-800/70" data-filter="all">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span className="font-medium">All</span>
</button>
<button className="filter-chip inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3.5 py-1.5 text-sm text-neutral-200 hover:bg-neutral-800/60 transition" data-filter="bullish">
<i className="h-4 w-4" data-lucide="trending-up"></i>
<span className="font-medium">Bullish</span>
</button>
<button className="filter-chip inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3.5 py-1.5 text-sm text-neutral-200 hover:bg-neutral-800/60 transition" data-filter="bearish">
<i className="h-4 w-4" data-lucide="trending-down"></i>
<span className="font-medium">Bearish</span>
</button>
<button className="filter-chip inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3.5 py-1.5 text-sm text-neutral-200 hover:bg-neutral-800/60 transition" data-filter="slicing">
<i className="h-4 w-4" data-lucide="scissors"></i>
<span className="font-medium">Slicing bots</span>
</button>
<button className="filter-chip inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3.5 py-1.5 text-sm text-neutral-200 hover:bg-neutral-800/60 transition" data-filter="sideways">
<i className="h-4 w-4" data-lucide="panel-right"></i>
<span className="font-medium">Sideways</span>
</button>
</div>

<div className="md:ml-auto w-full md:w-72">
<label className="relative block">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 pl-9 pr-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:border-transparent" id="search" placeholder="Search bots..." type="text"/>
</label>
</div>
</div>

<section className="mt-8">
<div className="mb-4 flex items-center justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Popular bots</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="popular,spot,grid,bullish,sideways">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-purple-500/10 p-2 text-purple-400 ring-1 ring-inset ring-purple-500/20">
<i className="h-5 w-5" data-lucide="grid-3x3"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Spot grid</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Price ranges with buy/sell grids on spot markets." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Spot • Grid • Low-touch</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="popular,futures,grid,bullish,bearish,sideways">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-blue-500/10 p-2 text-blue-400 ring-1 ring-inset ring-blue-500/20">
<i className="h-5 w-5" data-lucide="candlestick-chart"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Futures grid</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Grid trading using perpetual futures with leverage controls." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Futures • Grid • Hedged</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="popular,futures,dca,martingale,bearish,slicing">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-rose-500/10 p-2 text-rose-400 ring-1 ring-inset ring-rose-500/20">
<i className="h-5 w-5" data-lucide="repeat-1"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Futures DCA (Martingale)</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Averages down position size with increasing order scale." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Futures • DCA • Scaling</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="popular,arbitrage,sideways">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
<i className="h-5 w-5" data-lucide="split"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Smart arbitrage</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Captures spreads across pairs, exchanges, or markets." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Neutral • Basis &amp; Triangular</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="popular,bullish,yield">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-amber-500/10 p-2 text-amber-400 ring-1 ring-inset ring-amber-500/20">
<i className="h-5 w-5" data-lucide="refresh-cw"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Flywheel</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Compounds returns by recycling realized PnL back into the strategy." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Compounding • Momentum</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="popular,spot,dca,martingale,bearish,slicing">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-teal-500/10 p-2 text-teal-400 ring-1 ring-inset ring-teal-500/20">
<i className="h-5 w-5" data-lucide="rows"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Spot DCA (Martingale)</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Adds to spot positions on drawdowns with scaled orders." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Spot • DCA • Scaling</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="popular,spot,dca,bullish">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-fuchsia-500/10 p-2 text-fuchsia-400 ring-1 ring-inset ring-fuchsia-500/20">
<i className="h-5 w-5" data-lucide="calendar"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Recurring buy</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Scheduled DCA across selected assets." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Time-based • Auto-execution</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="popular,signals,automation,bullish,bearish">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
<i className="h-5 w-5" data-lucide="radio"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Signal bot</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Executes entries/exits from webhooks or strategies." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Webhook • Strategy driven</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>
</div>
</section>

<section className="mt-8">
<div className="mb-4">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Advanced bots</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="advanced,spot,slicing,execution">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 ring-1 ring-inset ring-cyan-500/20">
<i className="h-5 w-5" data-lucide="layers"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Iceberg</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Slices large orders into visible and hidden portions." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Execution • Stealth</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="advanced,futures,slicing,execution">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-lime-500/10 p-2 text-lime-400 ring-1 ring-inset ring-lime-500/20">
<i className="h-5 w-5" data-lucide="timer"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">TWAP</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Time-weighted execution that minimizes market impact." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Execution • Schedule</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>
</div>
</section>

<section className="mt-8">
<div className="mb-4">
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Arbitrage bots</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="arbitrage,portfolio,neutral">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-pink-500/10 p-2 text-pink-400 ring-1 ring-inset ring-pink-500/20">
<i className="h-5 w-5" data-lucide="pie-chart"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Smart portfolio</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Optimizes weights across assets for risk-adjusted returns." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Rebalance • Risk parity</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>

<button className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 hover:border-neutral-700 hover:bg-neutral-800/60 transition" data-bot="" data-tags="arbitrage,sideways,neutral">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-sky-500/10 p-2 text-sky-400 ring-1 ring-inset ring-sky-500/20">
<i className="h-5 w-5" data-lucide="arrow-left-right"></i>
</div>
<div className="text-left">
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Arbitrage</span>
<i className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-300 cursor-pointer" data-info="Exploits price inefficiencies between markets or pairs." data-lucide="info"></i>
</div>
<p className="text-xs text-neutral-400">Neutral • Market spreads</p>
</div>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300" data-lucide="chevron-right"></i>
</button>
</div>
</section>

<div className="pointer-events-none fixed z-50 hidden max-w-xs rounded-md border border-neutral-800 bg-neutral-900/95 px-3 py-2 text-xs text-neutral-200 shadow-lg ring-1 ring-white/5" id="tooltip"></div>
</div>


    </>
  );
}
