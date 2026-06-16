import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      tailwind.config = {theme: {extend: {fontFamily: {sans: ['Inter', 'sans-serif']}}}}


    // Initialize lucide icons
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
        
        // Enable next button if at least one team is selected
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
      
      document.
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="w-full border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 py-6 md:py-10 flex flex-col md:flex-row justify-between md:items-center gap-4">
<h1 className="text-2xl md:text-3xl font-semibold italic text-yellow-600 animate-[slideInLeft_0.8s_ease-in-out_forwards]">Backtesting your market strategy</h1>
<div className="relative animate-[fadeIn_1s_ease-in-out_0.3s_forwards] opacity-0">
<button className="inline-flex items-center gap-x-1 text-sm md:text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md px-3 py-2 transition-all" id="marketDropdownBtn">
<i className="w-4 h-4 mr-1" data-lucide="filter"></i>
<span>Filter by</span>
<span className="font-semibold" id="selectedMarket">OVER 2.5 GOALS</span>
<i className="w-4 h-4 ml-1" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black/5 z-10" id="marketMenu">
<div className="p-2">
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500" id="marketSearch" placeholder="Search markets..." type="text"/>
</div>
</div>
<div className="max-h-60 overflow-y-auto py-1">
<h3 className="px-3 py-1 text-xs font-medium text-gray-500 uppercase">Popular Markets</h3>
<ul className="py-1 text-sm" id="marketList">
<li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="OVER 2.5 GOALS">
<i className="w-4 h-4 mr-2 text-yellow-600" data-lucide="trending-up"></i>OVER 2.5 GOALS
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="UNDER 2.5 GOALS">
<i className="w-4 h-4 mr-2 text-indigo-600" data-lucide="trending-down"></i>UNDER 2.5 GOALS
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="BOTH TEAMS TO SCORE">
<i className="w-4 h-4 mr-2 text-emerald-600" data-lucide="target"></i>BOTH TEAMS TO SCORE
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="MATCH WINNER">
<i className="w-4 h-4 mr-2 text-amber-600" data-lucide="trophy"></i>MATCH WINNER
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="OVER 1.5 GOALS">
<i className="w-4 h-4 mr-2 text-lime-600" data-lucide="trending-up"></i>OVER 1.5 GOALS
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="OVER 7 CORNERS">
<i className="w-4 h-4 mr-2 text-orange-600" data-lucide="flag"></i>OVER 7 CORNERS
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="DRAW NO BET">
<i className="w-4 h-4 mr-2 text-blue-600" data-lucide="shield"></i>DRAW NO BET
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="DOUBLE CHANCE">
<i className="w-4 h-4 mr-2 text-purple-600" data-lucide="percent"></i>DOUBLE CHANCE
              </button></li>
<li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center" data-market="ASIAN HANDICAP">
<i className="w-4 h-4 mr-2 text-cyan-600" data-lucide="scale"></i>ASIAN HANDICAP
              </button></li>
</ul>
</div>
</div>
</div>
</div>
</header>
<main className="flex-1 py-8">
<section className="max-w-7xl mx-auto px-4 animate-[slideInUp_1s_ease-in-out_0.2s_forwards] opacity-0">
<div className="mb-8 bg-gradient-to-r from-yellow-50 to-transparent p-6 rounded-xl border border-yellow-100">
<h2 className="text-lg md:text-xl font-semibold mb-3 text-yellow-800">Getting Started</h2>
<p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Choose your favorite teams from the leagues below to begin backtesting the selected market strategy. 
          We'll analyze historical data to show how your selected teams have performed with this market.
        </p>
</div>
<h2 className="text-lg md:text-xl font-semibold mb-6 uppercase tracking-wide border-b pb-2">Select Teams for Your Strategy</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 animate-[fadeIn_0.8s_ease-in-out_0.4s_forwards] opacity-0">
<div className="flex items-center gap-2 mb-4">
<img alt="UK" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/gb.png"/>
<h3 className="text-base md:text-lg font-semibold">Premier League</h3>
</div>
<div className="space-y-3">

<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Manchester United</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Arsenal</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Liverpool</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Manchester City</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Chelsea</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Aston Villa</span>
</label>
</div>
</div>

<div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 animate-[fadeIn_0.8s_ease-in-out_0.6s_forwards] opacity-0">
<div className="flex items-center gap-2 mb-4">
<img alt="France" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/fr.png"/>
<h3 className="text-base md:text-lg font-semibold">Ligue 1</h3>
</div>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Paris Saint-Germain</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Olympique Lyonnais</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Olympique Marseille</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Monaco</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Nice</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Lille</span>
</label>
</div>
</div>

<div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 animate-[fadeIn_0.8s_ease-in-out_0.8s_forwards] opacity-0">
<div className="flex items-center gap-2 mb-4">
<img alt="Spain" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/es.png"/>
<h3 className="text-base md:text-lg font-semibold">La Liga</h3>
</div>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Real Madrid</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Barcelona</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Atletico Madrid</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Sevilla</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Valencia</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Villarreal</span>
</label>
</div>
</div>

<div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 animate-[fadeIn_0.8s_ease-in-out_1s_forwards] opacity-0">
<div className="flex items-center gap-2 mb-4">
<img alt="USA" className="w-8 h-6 object-cover rounded-sm" src="https://flagcdn.com/40x30/us.png"/>
<h3 className="text-base md:text-lg font-semibold">MLS</h3>
</div>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Inter Miami CF</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">LA Galaxy</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">New York City FC</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Seattle Sounders FC</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">Atlanta United FC</span>
</label>
<label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition-colors">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-gray-300 flex items-center justify-center peer-checked:bg-yellow-600 peer-checked:border-yellow-600 transition-colors">
<i className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm md:text-base">LAFC</span>
</label>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-8 animate-[fadeIn_0.8s_ease-in-out_1.2s_forwards] opacity-0">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-blue-500" data-lucide="info"></i>
<h3 className="text-base md:text-lg font-semibold">How it works</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<p className="text-sm md:text-base leading-relaxed text-gray-700">
            Select your favorite teams from the leagues above. These teams will be analyzed against the chosen market strategy.
            We'll show you historical performance data to help you identify profitable patterns and optimize your betting strategy.
          </p>
<p className="text-sm md:text-base leading-relaxed text-gray-700">
            After selecting your teams, click the "Next" button to proceed to the main backtesting tool where you can see detailed statistics, 
            performance metrics, and recommendations based on your selections.
          </p>
</div>
</div>
<div className="flex items-center justify-between border-t border-gray-200 pt-6 animate-[fadeIn_0.8s_ease-in-out_1.4s_forwards] opacity-0">
<div className="text-sm font-medium text-gray-500" id="selectedCount">
          0 teams selected
        </div>
<button className="group inline-flex items-center justify-between w-40 md:w-44 px-5 py-3 bg-yellow-600 text-white rounded-lg text-base font-medium hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-600" disabled="" id="nextBtn">
<span>Proceed</span>
<i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</section>
</main>
<footer className="bg-gray-50 border-t border-gray-200 py-6 animate-[fadeIn_1s_ease-in-out_1.6s_forwards] opacity-0">
<div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
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
  </style>

    </>
  );
}
