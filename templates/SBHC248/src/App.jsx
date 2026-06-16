import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
        }
      });
      // Team selection tracking
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const selectedCountEl = document.getElementById('selectedCount');
      const nextBtn = document.getElementById('nextBtn');

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedCount);
      });

      function updateSelectedCount() {
        const count = document.querySelectorAll('input[type="checkbox"]:checked').length;
        selectedCountEl.textContent = `${count} team${count !== 1 ? 's' : ''} selected`;
        nextBtn.disabled = count === 0;
      }

      // Dropdown logic
      const btn = document.getElementById('marketDropdownBtn');
      const menu = document.getElementById('marketMenu');
      const selected = document.getElementById('selectedMarket');
      const searchInput = document.getElementById('marketSearch');

      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        if (!menu.classList.contains('hidden')) {
          searchInput.focus();
        }
      });

      document.addEventListener('click', e => {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
          menu.classList.add('hidden');
        }
      });

      searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const items = menu.querySelectorAll('#marketList > li');
        items.forEach(li => {
          const btn = li.querySelector('button');
          const text = btn.textContent.toLowerCase();
          li.style.display = text.includes(filter) ? '' : 'none';
        });
      });

      // Update selected market on click
      const marketButtons = menu.querySelectorAll('button[data-market]');
      marketButtons.forEach(mbtn => {
        mbtn.addEventListener('click', () => {
          selected.textContent = mbtn.dataset.market;
          menu.classList.add('hidden');
        });
      });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="w-full border-b border-zinc-800 bg-[#171c22]">
<div className="max-w-7xl mx-auto px-4 py-6 md:py-10 flex flex-col md:flex-row justify-between md:items-center gap-4">
<h1 className="text-2xl md:text-3xl font-semibold italic text-yellow-600 animate-[slideInLeft_0.8s_ease-in-out_forwards] tracking-tight">Test your strategy</h1>
<div className="relative animate-[fadeIn_1s_ease-in-out_0.3s_forwards] opacity-0">
<button className="inline-flex items-center gap-x-1 text-xs md:text-sm font-medium text-zinc-300 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md px-3 py-2 transition-all bg-[#232a33] border border-zinc-700" id="marketDropdownBtn">
<i className="w-4 h-4 mr-1" data-lucide="filter"></i>
<span>Filter by</span>
<span className="font-semibold" id="selectedMarket">OVER 2.5 GOALS</span>
<i className="w-4 h-4 ml-1" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-56 bg-[#171c22] rounded-lg shadow-lg ring-1 ring-zinc-800 z-10 border border-zinc-700" id="marketMenu">
<div className="p-2">
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 text-xs bg-[#232a33] text-zinc-200 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 placeholder-zinc-500" id="marketSearch" placeholder="Search markets..." type="text"/>
</div>
</div>
<div className="max-h-60 overflow-y-auto py-1">
<h3 className="px-3 py-1 text-xs font-semibold text-zinc-500 uppercase">Popular Markets</h3>
<ul className="py-1 text-xs" id="marketList">
<li><button className="w-full text-left px-4 py-2 hover:bg-[#232a33] flex items-center text-zinc-200" data-market="OVER 2.5 GOALS">
<i className="w-4 h-4 mr-2 text-yellow-600" data-lucide="trending-up"></i>OVER 2.5 GOALS
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-[#232a33] flex items-center text-zinc-200" data-market="UNDER 2.5 GOALS">
<i className="w-4 h-4 mr-2 text-indigo-400" data-lucide="trending-down"></i>UNDER 2.5 GOALS
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-[#232a33] flex items-center text-zinc-200" data-market="BOTH TEAMS TO SCORE">
<i className="w-4 h-4 mr-2 text-emerald-400" data-lucide="target"></i>BOTH TEAMS TO SCORE
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-[#232a33] flex items-center text-zinc-200" data-market="MATCH WINNER">
<i className="w-4 h-4 mr-2 text-amber-400" data-lucide="trophy"></i>MATCH WINNER
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-[#232a33] flex items-center text-zinc-200" data-market="OVER 1.5 GOALS">
<i className="w-4 h-4 mr-2 text-lime-400" data-lucide="trending-up"></i>OVER 1.5 GOALS
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-[#232a33] flex items-center text-zinc-200" data-market="OVER 7 CORNERS">
<i className="w-4 h-4 mr-2 text-orange-400" data-lucide="flag"></i>OVER 7 CORNERS
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-[#232a33] flex items-center text-zinc-200" data-market="DRAW NO BET">
<i className="w-4 h-4 mr-2 text-blue-400" data-lucide="shield"></i>DRAW NO BET
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-[#232a33] flex items-center text-zinc-200" data-market="DOUBLE CHANCE">
<i className="w-4 h-4 mr-2 text-purple-400" data-lucide="percent"></i>DOUBLE CHANCE
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-[#232a33] flex items-center text-zinc-200" data-market="ASIAN HANDICAP">
<i className="w-4 h-4 mr-2 text-cyan-400" data-lucide="scale"></i>ASIAN HANDICAP
              </button></li>
</ul>
</div>
</div>
</div>
</div>
</header>
<main className="flex-1 py-8">
<section className="max-w-7xl mx-auto px-4 animate-[slideInUp_1s_ease-in-out_0.2s_forwards] opacity-0">

<div className="mb-8 bg-gradient-to-br from-[#161c23] via-[#0f1617] to-[#004e2b] p-6 rounded-2xl shadow-innerBorder border border-zinc-900/40 text-zinc-200">
<h2 className="text-lg font-semibold mb-3">Getting Started</h2>
<p className="text-sm text-zinc-400 leading-relaxed">
          Choose your favorite teams from the leagues below to begin backtesting the selected market strategy.
          We'll analyze historical data to show how your selected teams have performed with this market.
        </p>
</div>
<h2 className="text-xl md:text-xl font-semibold mb-6 uppercase tracking-tight border-b border-zinc-700 pb-2 bg-gradient-to-r from-[#181c20] via-[#101417] to-[#113737] rounded-t-2xl px-4 py-2 -mx-4 text-zinc-300">Select Teams for Your Strategy</h2>
<div className="overflow-x-auto pb-4 -mx-4">
<div className="flex flex-nowrap gap-8 lg:grid lg:grid-cols-4 lg:gap-8 px-4">

<div className="bg-[#171c22] p-5 rounded-lg shadow-sm border border-zinc-800 min-w-[320px] lg:min-w-0 animate-[fadeIn_0.8s_ease-in-out_0.4s_forwards] opacity-0">
<div className="flex items-center gap-2 mb-4">
<img alt="UK" className="w-8 h-6 object-cover rounded-sm border border-zinc-700" src="https://flagcdn.com/40x30/gb.png"/>
<h3 className="text-lg font-semibold text-zinc-200">Premier League</h3>
</div>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Manchester United</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Arsenal</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Liverpool</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Manchester City</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Chelsea</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Aston Villa</span>
</label>
</div>
</div>

<div className="bg-[#171c22] p-5 rounded-lg shadow-sm border border-zinc-800 min-w-[320px] lg:min-w-0 animate-[fadeIn_0.8s_ease-in-out_0.6s_forwards] opacity-0">
<div className="flex items-center gap-2 mb-4">
<img alt="France" className="w-8 h-6 object-cover rounded-sm border border-zinc-700" src="https://flagcdn.com/40x30/fr.png"/>
<h3 className="text-lg font-semibold text-zinc-200">Ligue 1</h3>
</div>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Paris Saint-Germain</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Olympique Lyonnais</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Olympique Marseille</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Monaco</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Nice</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Lille</span>
</label>
</div>
</div>

<div className="bg-[#171c22] p-5 rounded-lg shadow-sm border border-zinc-800 min-w-[320px] lg:min-w-0 animate-[fadeIn_0.8s_ease-in-out_0.8s_forwards] opacity-0">
<div className="flex items-center gap-2 mb-4">
<img alt="Spain" className="w-8 h-6 object-cover rounded-sm border border-zinc-700" src="https://flagcdn.com/40x30/es.png"/>
<h3 className="text-lg font-semibold text-zinc-200">La Liga</h3>
</div>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Real Madrid</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Barcelona</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Atletico Madrid</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Sevilla</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Valencia</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Villarreal</span>
</label>
</div>
</div>

<div className="bg-[#171c22] p-5 rounded-lg shadow-sm border border-zinc-800 min-w-[320px] lg:min-w-0 animate-[fadeIn_0.8s_ease-in-out_1s_forwards] opacity-0">
<div className="flex items-center gap-2 mb-4">
<img alt="USA" className="w-8 h-6 object-cover rounded-sm border border-zinc-700" src="https://flagcdn.com/40x30/us.png"/>
<h3 className="text-lg font-semibold text-zinc-200">MLS</h3>
</div>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Inter Miami CF</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">LA Galaxy</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">New York City FC</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Seattle Sounders FC</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">Atlanta United FC</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-[#232a33] p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-zinc-700 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors bg-[#232a33]">
<i className="h-4 w-4 text-zinc-900 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-zinc-200">LAFC</span>
</label>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#161c23] via-[#0f1617] to-[#004e2b] border border-zinc-900/40 rounded-2xl p-5 shadow-innerBorder mb-8 animate-[fadeIn_0.8s_ease-in-out_1.2s_forwards] opacity-0">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-blue-400" data-lucide="info"></i>
<h3 className="text-lg font-semibold text-zinc-200">How it works</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<p className="text-sm leading-relaxed text-zinc-400">
            Select your favorite teams from the leagues above. These teams will be analyzed against the chosen market strategy.
            We'll show you historical performance data to help you identify profitable patterns and optimize your betting strategy.
          </p>
<p className="text-sm leading-relaxed text-zinc-400">
            After selecting your teams, click the "Next" button to proceed to the main backtesting tool where you can see detailed statistics,
            performance metrics, and recommendations based on your selections.
          </p>
</div>
</div>
<div className="flex items-center justify-between border-t border-zinc-700 pt-6 animate-[fadeIn_0.8s_ease-in-out_1.4s_forwards] opacity-0">
<div className="text-xs font-medium text-zinc-400" id="selectedCount">
          0 teams selected
        </div>
<button className="group inline-flex items-center justify-between w-40 md:w-44 px-5 py-3 bg-yellow-600 text-zinc-900 rounded-lg text-sm font-semibold hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-600" disabled="" id="nextBtn">
<span>Proceed</span>
<i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</section>
</main>
<footer className="bg-gradient-to-br from-[#161c23] via-[#0f1617] to-[#004e2b] border-t border-zinc-700 py-6 animate-[fadeIn_1s_ease-in-out_1.6s_forwards] opacity-0">
<div className="max-w-7xl mx-auto px-4 text-center text-xs text-zinc-500">
<p>Select your teams above to begin analyzing market performance and optimize your strategy</p>
</div>
</footer>
<style>
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes slideInLeft {
      0% { opacity: 0; transform: translateX(-20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .shadow-innerBorder {
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
    }
  </style>


    </>
  );
}
