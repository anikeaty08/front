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
      
<div className="min-h-full flex flex-col items-center justify-start gap-4 md:gap-6 pt-4 pr-2 pb-4 pl-2">
<div className="w-full max-w-6xl bg-gradient-to-br from-[#111111] via-[#0f1617] to-[#004e2b] rounded-2xl p-4 md:p-6 shadow-innerBorder flex flex-col gap-4 md:gap-6 items-center justify-between">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-4">
<div className="bg-gray-800 rounded-full flex items-center justify-center w-8 h-8">
<i className="w-8 h-8 text-green-400" data-lucide="football"></i>
</div>
<h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Simplifi Football Markets Dashboard
          </h1>
</div>
</div>
<p className="max-w-2xl text-sm sm:text-base text-slate-300">
        The graph below shows what football markets are profitable in any particular league allowing you to decide what markets to invest on depending on the league. Below it is the list of all available markets for you to explore and view market analysis
      </p>
<div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-6">
<div className="w-full bg-[#111111] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-inner flex flex-col gap-3 sm:gap-4 md:gap-6">
<div className="w-full flex flex-col md:flex-row md:items-end gap-3 sm:gap-4 md:gap-6 mb-2 sm:mb-4">
<div className="flex flex-col md:flex-row md:items-end gap-3 sm:gap-4 md:gap-6 flex-1">
<div className="flex flex-col w-full md:w-auto">
<label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1" htmlFor="league-select">League</label>
<select className="w-full md:w-40 appearance-none pl-3 pr-8 py-2 rounded-lg border border-zinc-700 bg-black text-xs sm:text-sm font-medium text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none" id="league-select">
<option selected value="Premier League">Premier League</option>
<option value="La Liga">La Liga</option>
<option value="Serie A">Serie A</option>
<option value="Bundesliga">Bundesliga</option>
<option value="Ligue 1">Ligue 1</option>
<option value="Eredivisie">Eredivisie</option>
<option value="Primeira Liga">Primeira Liga</option>
<option value="MLS">MLS</option>
<option value="Scottish Prem.">Scottish Prem.</option>
</select>
</div>
<div className="hidden md:block h-9 border-l border-zinc-800 mx-2"></div>
<div className="flex flex-col w-full md:w-auto">
<label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1" htmlFor="timeframe-select">Timeframe</label>
<select className="w-full md:w-32 appearance-none pl-3 pr-8 py-2 rounded-lg border border-zinc-700 bg-black text-xs sm:text-sm font-medium text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none" id="timeframe-select">
<option value="1M">1M</option>
<option selected value="3M">3M</option>
<option value="6M">6M</option>
<option value="1Y">1Y</option>
<option value="All">All</option>
</select>
</div>
<div className="hidden md:block h-9 border-l border-zinc-800 mx-2"></div>
<div className="flex flex-col w-full md:w-auto">
<label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1" htmlFor="capital-input">Capital</label>
<div className="relative">
<input className="w-full md:w-28 pl-3 pr-10 py-2 rounded-lg border border-zinc-700 bg-black text-xs sm:text-sm font-medium text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none" id="capital-input" min="0" placeholder="£2,000" type="number" value="2000" />
<span className="absolute inset-y-0 right-3 flex items-center text-gray-400 font-medium pointer-events-none">£</span>
</div>
</div>
<div className="hidden md:block h-9 border-l border-zinc-800 mx-2"></div>
<div className="flex flex-col w-full md:w-auto">
<label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1" htmlFor="risk-select">Risk/Trade</label>
<select className="w-full md:w-24 appearance-none pl-3 pr-8 py-2 rounded-lg border border-zinc-700 bg-black text-xs sm:text-sm font-medium text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none" id="risk-select">
<option value="1%">1%</option>
<option selected value="2%">2%</option>
<option value="5%">5%</option>
<option value="7%">7%</option>
<option value="10%">10%</option>
</select>
</div>
</div>
<div className="flex flex-col items-stretch md:ml-2 w-full md:w-auto">
<label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1 invisible md:visible md:mb-1"> </label>
<button aria-expanded="false" className="w-full md:w-[250px] h-10 flex items-center justify-center rounded-lg border border-zinc-800 bg-gradient-to-br from-neutral-900 to-zinc-900 hover:from-zinc-800 hover:to-zinc-800 transition-all text-xs sm:text-sm font-semibold outline-none focus:ring-2 focus:ring-green-500 gap-2 whitespace-normal" id="showGraphBtn" type="button">
<i className="w-5 h-5 text-green-400" data-lucide="line-chart"></i>
<span>Show Market Profitability</span>
</button>
<div className="w-full mt-2" id="graphContainer" style={{position: `relative`, height: `120px`, display: `none`}}>
<canvas id="footballLineChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<section className="bg-[#111111] rounded-xl sm:rounded-2xl shadow-innerBorder p-3 sm:p-6 mt-3 sm:mt-4 max-w-6xl w-full">
<h2 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6" id="markets-list-title">
          Available Football Markets
        </h2>
<div className="overflow-x-auto -mx-2">
<table className="min-w-[600px] w-full text-left text-white text-xs sm:text-sm" id="markets-table">
<thead>
<tr className="font-semibold uppercase tracking-wider border-b border-zinc-800">
<th className="py-2 pr-4 sm:py-3 sm:pr-8">Markets</th>
<th className="py-2 pr-4 sm:py-3 sm:pr-8">Longest Win</th>
<th className="py-2 pr-4 sm:py-3 sm:pr-8">Longest Loss</th>
<th className="py-2 pr-4 sm:py-3 sm:pr-8">Success</th>
<th className="py-2 sm:py-3">Income</th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="UK flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border border-zinc-700" src="https://flagcdn.com/gb.svg" />
                      Over 7 Corners (Premier League)
                    </span>
<span className="text-xs text-gray-400">Active since Aug 2022</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">15</span>
<div className="text-xs text-gray-400">2023/24</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">5</span>
<div className="text-xs text-gray-400">2022/23</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">78%</span>
<div className="text-xs text-gray-400">Last 50</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£2,300</span>
<div className="text-xs text-gray-400">@£25</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Spain flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/es.svg" />
                      Under 2.5 Goals (La Liga)
                    </span>
<span className="text-xs text-gray-400">Active since Feb 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">12</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">6</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">72%</span>
<div className="text-xs text-gray-400">Last 60</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,850</span>
<div className="text-xs text-gray-400">@£20</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Germany flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/de.svg" />
                      Over 2.5 Goals (Bundesliga)
                    </span>
<span className="text-xs text-gray-400">Active since Jan 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">10</span>
<div className="text-xs text-gray-400">2024</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">4</span>
<div className="text-xs text-gray-400">2024</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">69%</span>
<div className="text-xs text-gray-400">Last 40</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,420</span>
<div className="text-xs text-gray-400">@£18</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Italy flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/it.svg" />
                      Both Teams to Score (Serie A)
                    </span>
<span className="text-xs text-gray-400">Active since Sep 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">8</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">3</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">73%</span>
<div className="text-xs text-gray-400">Last 30</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£870</span>
<div className="text-xs text-gray-400">@£15</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="France flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/fr.svg" />
                      Under 6 Goals (Ligue 1)
                    </span>
<span className="text-xs text-gray-400">Active since Jun 2022</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">11</span>
<div className="text-xs text-gray-400">2022</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">5</span>
<div className="text-xs text-gray-400">2022</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">74%</span>
<div className="text-xs text-gray-400">Last 38</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,200</span>
<div className="text-xs text-gray-400">@£16</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Netherlands flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/nl.svg" />
                      Over 1.5 Goals (Eredivisie)
                    </span>
<span className="text-xs text-gray-400">Active since Mar 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">13</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">6</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">77%</span>
<div className="text-xs text-gray-400">Last 35</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,600</span>
<div className="text-xs text-gray-400">@£21</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="USA flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/us.svg" />
                      Double Chance (MLS)
                    </span>
<span className="text-xs text-gray-400">Active since Apr 2022</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">9</span>
<div className="text-xs text-gray-400">2024</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">4</span>
<div className="text-xs text-gray-400">2024</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">70%</span>
<div className="text-xs text-gray-400">Last 28</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£980</span>
<div className="text-xs text-gray-400">@£14</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Portugal flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/pt.svg" />
                      Asian Handicap -1 (Primeira Liga)
                    </span>
<span className="text-xs text-gray-400">Active since Nov 2022</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">10</span>
<div className="text-xs text-gray-400">2022</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">3</span>
<div className="text-xs text-gray-400">2022</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">75%</span>
<div className="text-xs text-gray-400">Last 29</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,100</span>
<div className="text-xs text-gray-400">@£17</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Scotland flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/gb-sct.svg" />
                      Draw No Bet (Scottish Prem.)
                    </span>
<span className="text-xs text-gray-400">Active since May 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">7</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">5</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">68%</span>
<div className="text-xs text-gray-400">Last 20</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£560</span>
<div className="text-xs text-gray-400">@£12</div>
</td>
</tr>

<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Belgium flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/be.svg" />
                      Both Teams to Score No (Belgian Pro League)
                    </span>
<span className="text-xs text-gray-400">Active since Jul 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">8</span>
<div className="text-xs text-gray-400">2024</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">4</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">70%</span>
<div className="text-xs text-gray-400">Last 25</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£720</span>
<div className="text-xs text-gray-400">@£13</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Turkey flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/tr.svg" />
                      Over 9.5 Corners (Super Lig)
                    </span>
<span className="text-xs text-gray-400">Active since Oct 2022</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">11</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">6</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">75%</span>
<div className="text-xs text-gray-400">Last 40</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,050</span>
<div className="text-xs text-gray-400">@£19</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Russia flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/ru.svg" />
                      Under 3.5 Goals (Russian Premier)
                    </span>
<span className="text-xs text-gray-400">Active since Aug 2021</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">13</span>
<div className="text-xs text-gray-400">2022</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">5</span>
<div className="text-xs text-gray-400">2022</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">79%</span>
<div className="text-xs text-gray-400">Last 45</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£2,100</span>
<div className="text-xs text-gray-400">@£23</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Brazil flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/br.svg" />
                      Home Win (Brasileirão)
                    </span>
<span className="text-xs text-gray-400">Active since May 2022</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">14</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">7</span>
<div className="text-xs text-gray-400">2022</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">81%</span>
<div className="text-xs text-gray-400">Last 52</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£2,500</span>
<div className="text-xs text-gray-400">@£28</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Argentina flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/ar.svg" />
                      Over 2.5 Goals (Argentine Primera)
                    </span>
<span className="text-xs text-gray-400">Active since Jan 2023</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">12</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">5</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">76%</span>
<div className="text-xs text-gray-400">Last 38</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,350</span>
<div className="text-xs text-gray-400">@£16</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer border-b border-zinc-900 last:border-b-0" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Sweden flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/se.svg" />
                      Under 2.5 Goals (Allsvenskan)
                    </span>
<span className="text-xs text-gray-400">Active since Mar 2022</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">10</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">4</span>
<div className="text-xs text-gray-400">2023</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">69%</span>
<div className="text-xs text-gray-400">Last 33</div>
</td>
<td className="py-4 sm:py-5">
<span className="font-medium">£1,100</span>
<div className="text-xs text-gray-400">@£12</div>
</td>
</tr>
<tr className="hover:bg-neutral-900 transition-colors cursor-pointer" onClick={(e) => { window.location.href='#'; }}>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<div className="flex flex-col gap-1">
<span className="flex items-center gap-2 font-medium">
<img alt="Poland flag" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm border-zinc-700" src="https://flagcdn.com/pl.svg" />
                      Over 1.5 Goals (Ekstraklasa)
                    </span>
<span className="text-xs text-gray-400">Active since Aug 2021</span>
</div>
</td>
<td className="py-4 pr-4 sm:py-5 sm:pr-8">
<span className="font-medium">13</span>
<div className="text-xs text-gray-400">2022</div>
</td>
</tr></tbody></table></div></section></div></div>
    </>
  );
}
