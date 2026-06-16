import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Market data
        const marketData = [
            {
                id: 'epl_over_corners',
                name: 'Over 7 Corners',
                league: 'Premier League',
                flag: 'https://flagcdn.com/gb.svg',
                price: 1.85,
                change: +0.12,
                changePercent: +6.9,
                longestWin: 15,
                longestLoss: 5,
                success: '78%',
                income: '£2,300',
                volume: '£2.4M',
                trend: 'up',
                summary: 'Strong bullish trend in corner markets',
                activeDate: 'Aug 2022',
                chartData: [
                    { time: '09:00', price: 1.73, volume: 120000 },
                    { time: '10:00', price: 1.76, volume: 145000 },
                    { time: '11:00', price: 1.79, volume: 167000 },
                    { time: '12:00', price: 1.82, volume: 189000 },
                    { time: '13:00', price: 1.85, volume: 201000 },
                    { time: '14:00', price: 1.83, volume: 178000 },
                    { time: '15:00', price: 1.85, volume: 195000 }
                ]
            },
            {
                id: 'laliga_under_2_5',
                name: 'Under 2.5 Goals',
                league: 'La Liga',
                flag: 'https://flagcdn.com/es.svg',
                price: 2.15,
                change: -0.08,
                changePercent: -3.6,
                longestWin: 12,
                longestLoss: 6,
                success: '72%',
                income: '£1,850',
                volume: '£1.8M',
                trend: 'down',
                summary: 'Declining interest as attacking play increases',
                activeDate: 'Feb 2023',
                chartData: [
                    { time: '09:00', price: 2.23, volume: 98000 },
                    { time: '10:00', price: 2.21, volume: 87000 },
                    { time: '11:00', price: 2.19, volume: 76000 },
                    { time: '12:00', price: 2.17, volume: 82000 },
                    { time: '13:00', price: 2.15, volume: 71000 },
                    { time: '14:00', price: 2.16, volume: 68000 },
                    { time: '15:00', price: 2.15, volume: 73000 }
                ]
            },
            {
                id: 'bundesliga_over_2_5',
                name: 'Over 2.5 Goals',
                league: 'Bundesliga',
                price: 1.62,
                change: +0.15,
                changePercent: +10.2,
                longestWin: 10,
                longestLoss: 4,
                success: '69%',
                income: '£1,420',
                volume: '£950K',
                trend: 'up',
                summary: 'High-scoring German league trends',
                activeDate: 'Jan 2023',
                chartData: [
                    { time: '09:00', price: 1.47, volume: 45000 },
                    { time: '10:00', price: 1.51, volume: 52000 },
                    { time: '11:00', price: 1.55, volume: 48000 },
                    { time: '12:00', price: 1.58, volume: 55000 },
                    { time: '13:00', price: 1.62, volume: 58000 },
                    { time: '14:00', price: 1.60, volume: 51000 },
                    { time: '15:00', price: 1.62, volume: 49000 }
                ]
            },
            {
                id: 'seriea_btts',
                name: 'Both Teams to Score',
                league: 'Serie A',
                price: 1.72,
                change: +0.08,
                changePercent: +4.9,
                longestWin: 8,
                longestLoss: 3,
                success: '73%',
                income: '£870',
                volume: '£3.1M',
                trend: 'up',
                summary: 'Strong scoring confidence in Italian league',
                activeDate: 'Sep 2023',
                chartData: [
                    { time: '09:00', price: 1.64, volume: 178000 },
                    { time: '10:00', price: 1.66, volume: 195000 },
                    { time: '11:00', price: 1.68, volume: 210000 },
                    { time: '12:00', price: 1.70, volume: 225000 },
                    { time: '13:00', price: 1.72, volume: 240000 },
                    { time: '14:00', price: 1.71, volume: 218000 },
                    { time: '15:00', price: 1.72, volume: 232000 }
                ]
            },
            {
                id: 'ligue1_under_6',
                name: 'Under 6 Goals',
                league: 'Ligue 1',
                price: 1.12,
                change: +0.02,
                changePercent: +1.8,
                longestWin: 11,
                longestLoss: 5,
                success: '74%',
                income: '£1,200',
                volume: '£1.2M',
                trend: 'up',
                summary: 'Conservative betting market stability',
                activeDate: 'Jun 2022',
                chartData: [
                    { time: '09:00', price: 1.10, volume: 67000 },
                    { time: '10:00', price: 1.11, volume: 72000 },
                    { time: '11:00', price: 1.10, volume: 68000 },
                    { time: '12:00', price: 1.11, volume: 75000 },
                    { time: '13:00', price: 1.12, volume: 71000 },
                    { time: '14:00', price: 1.12, volume: 65000 },
                    { time: '15:00', price: 1.12, volume: 69000 }
                ]
            },
            {
                id: 'eredivisie_over_1_5',
                name: 'Over 1.5 Goals',
                league: 'Eredivisie',
                price: 1.25,
                change: +0.07,
                changePercent: +5.9,
                longestWin: 13,
                longestLoss: 6,
                success: '77%',
                income: '£1,600',
                volume: '£1.6M',
                trend: 'up',
                summary: 'High-scoring Dutch league patterns',
                activeDate: 'Mar 2023',
                chartData: [
                    { time: '09:00', price: 1.18, volume: 89000 },
                    { time: '10:00', price: 1.20, volume: 96000 },
                    { time: '11:00', price: 1.22, volume: 103000 },
                    { time: '12:00', price: 1.24, volume: 112000 },
                    { time: '13:00', price: 1.25, volume: 118000 },
                    { time: '14:00', price: 1.24, volume: 108000 },
                    { time: '15:00', price: 1.25, volume: 115000 }
                ]
            }
        ];

        let selectedMarket = null;
        let priceChart = null;
        let volumeChart = null;

        // Helpers
        function formatPrice(price) { return price.toFixed(2); }
        function formatChange(change) { return change >= 0 ? `+${change.toFixed(2)}` : change.toFixed(2); }
        function formatChangePercent(percent) { return percent >= 0 ? `+${percent.toFixed(1)}%` : `${percent.toFixed(1)}%`; }
        function formatCompactNumber(num) {
            if (num >= 1_000_000) return `${(num/1_000_000).toFixed(1)}M`;
            if (num >= 1_000) return `${(num/1_000).toFixed(1)}K`;
            return `${num}`;
        }
        const gbp = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 2 });

        // NEW: League name formatter
        function formatLeagueName(name) {
            return `overtwo(${name})`;
        }

        // Render market list (not used after removal of market panel, kept for minimal changes)
        function renderMarkets() {}

        // Show market chart
        function showMarketChart(market) {
            selectedMarket = market;
            document.getElementById('main-header').classList.add('hidden');
            document.getElementById('chart-header').classList.remove('hidden');
            document.getElementById('chart-title').textContent = market.name;

            document.getElementById('markets-view').classList.add('hidden');
            document.getElementById('chart-view').classList.remove('hidden');
            document.getElementById('chart-view').classList.add('flex');
            document.getElementById('bottom-nav').classList.add('hidden');

            renderMarketSummary(market);
            setTimeout(() => { renderCharts(market); }, 100);
        }

        // Render market summary
        function renderMarketSummary(market) {
            const summaryContainer = document.getElementById('market-summary');
            const trendIcon = market.trend === 'up' ? 'trending-up' : 'trending-down';
            const changeColor = market.change >= 0 ? 'text-green-400' : 'text-red-400';

            summaryContainer.innerHTML = `
                <div class="text-center">
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="${formatLeagueName(market.league)} flag" class="w-6 h-6 rounded-sm border border-zinc-700">
                        <h2 class="text-xl font-semibold text-white tracking-tight">${market.name}</h2>
                    </div>
                    <p class="text-slate-300 text-sm mb-3">${formatLeagueName(market.league)}</p>
                    <div class="flex items-center justify-center space-x-2 mb-2">
                        <span class="text-3xl font-semibold text-white tracking-tight">${formatPrice(market.price)}</span>
                        <div class="flex items-center space-x-1 ${changeColor}">
                            <i data-lucide="${trendIcon}" class="h-5 w-5"></i>
                            <span class="font-semibold">${formatChange(market.change)} (${formatChangePercent(market.changePercent)})</span>
                        </div>
                    </div>
                    <p class="text-gray-400 text-sm">${market.summary}</p>
                    
                    <div class="grid grid-cols-4 gap-3 mt-4 pt-4 border-t border-zinc-800">
                        <div class="text-center">
                            <div class="text-white font-semibold text-sm">${market.longestWin}</div>
                            <div class="text-gray-400 text-xs">Longest Win</div>
                        </div>
                        <div class="text-center">
                            <div class="text-white font-semibold text-sm">${market.longestLoss}</div>
                            <div class="text-gray-400 text-xs">Longest Loss</div>
                        </div>
                        <div class="text-center">
                            <div class="text-white font-semibold text-sm">${market.success}</div>
                            <div class="text-gray-400 text-xs">Success Rate</div>
                        </div>
                        <div class="text-center">
                            <div class="text-white font-semibold text-sm">${market.income}</div>
                            <div class="text-gray-400 text-xs">Total Income</div>
                        </div>
                    </div>
                </div>
            `;

            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        // Render charts
        function renderCharts(market) {
            if (priceChart) priceChart.destroy();
            if (volumeChart) volumeChart.destroy();

            const priceCtx = document.getElementById('priceChart').getContext('2d');
            priceChart = new Chart(priceCtx, {
                type: 'line',
                data: {
                    labels: market.chartData.map(d => d.time),
                    datasets: [{
                        label: 'Price',
                        data: market.chartData.map(d => d.price),
                        borderColor: '#22c55e',
                        backgroundColor: 'rgba(34, 197, 94, 0.12)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.35,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: { mode: 'index', intersect: false },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => ` ${formatPrice(ctx.parsed.y)}`
                            }
                        }
                    },
                    scales: {
                        x: { grid: { color: '#27272a' }, ticks: { color: '#a1a1aa', font: { size: 10 } } },
                        y: {
                            grid: { color: '#27272a' },
                            ticks: { color: '#a1a1aa', font: { size: 10 }, callback: (v) => formatPrice(v) }
                        }
                    }
                }
            });

            const volumeCtx = document.getElementById('volumeChart').getContext('2d');
            volumeChart = new Chart(volumeCtx, {
                type: 'bar',
                data: {
                    labels: market.chartData.map(d => d.time),
                    datasets: [{
                        label: 'Volume',
                        data: market.chartData.map(d => d.volume),
                        backgroundColor: '#22c55e',
                        borderRadius: 2,
                        barPercentage: 0.7,
                        categoryPercentage: 0.7
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => ` ${formatCompactNumber(ctx.parsed.y)}`
                            }
                        }
                    },
                    scales: {
                        x: { grid: { color: '#27272a' }, ticks: { color: '#a1a1aa', font: { size: 10 } } },
                        y: {
                            grid: { color: '#27272a' },
                            ticks: { color: '#a1a1aa', font: { size: 10 }, callback: (v) => formatCompactNumber(v) }
                        }
                    }
                }
            });
        }

        // Navigation
        function setActiveTab(tab) {
            const navBtns = document.querySelectorAll('.nav-btn');
            navBtns.forEach(btn => {
                if (btn.dataset.tab === tab) {
                    btn.classList.remove('text-slate-300');
                    btn.classList.add('text-green-400');
                } else {
                    btn.classList.remove('text-green-400');
                    btn.classList.add('text-slate-300');
                }
            });
        }

        // CSV parsing utilities
        function splitCSVLine(line) {
            const cells = [];
            let cur = '';
            let inQuotes = false;
            for (let i = 0; i < line.length; i++) {
                const ch = line[i];
                if (ch === '"') {
                    if (inQuotes && line[i + 1] === '"') {
                        cur += '"';
                        i++;
                    } else {
                        inQuotes = !inQuotes;
                    }
                } else if (ch === ',' && !inQuotes) {
                    cells.push(cur);
                    cur = '';
                } else {
                    cur += ch;
                }
            }
            cells.push(cur);
            return cells;
        }

        function parseCSV(text) {
            const clean = text.replace(/^\uFEFF/, '');
            const lines = clean.split(/\r?\n/).filter(l => l.trim().length > 0);
            if (lines.length === 0) return { headers: [], rows: [] };
            const headers = splitCSVLine(lines[0]).map(h => h.trim());
            const rows = [];
            for (let i = 1; i < lines.length; i++) {
                const values = splitCSVLine(lines[i]).map(v => v.trim());
                if (values.length !== headers.length) continue;
                const obj = {};
                headers.forEach((h, idx) => obj[h] = values[idx]);
                rows.push(obj);
            }
            return { headers, rows };
        }

        // Update dataset-driven stats: Total Volume (row count) and Active Leagues (unique League)
        async function updateTotalVolumeFromDataset() {
            const totalEl = document.getElementById('total-volume-value');
            const leaguesEl = document.getElementById('active-leagues-value');
            try {
                const url = 'https://raw.githubusercontent.com/ODUnike/simplifi-dataset/refs/heads/main/main%20dataset.csv';
                const res = await fetch(url, { cache: 'no-cache' });
                if (!res.ok) throw new Error('Failed to load dataset');
                const text = await res.text();
                const { rows } = parseCSV(text);

                // Total Volume: total number of rows (games)
                const count = rows.length;
                totalEl.textContent = count.toLocaleString('en-GB');

                // Active Leagues: unique League values
                const leagues = new Set();
                for (const r of rows) {
                    const v = (r['League'] ?? r['league'] ?? '').trim();
                    if (v) leagues.add(v);
                }
                if (leaguesEl) leaguesEl.textContent = leagues.size.toLocaleString('en-GB');
            } catch (e) {
                console.error(e);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            updateTotalVolumeFromDataset();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-md mx-auto flex flex-col min-h-screen">

<div className="bg-black border-b border-zinc-800 px-4 py-3 sticky top-0 z-10" id="header">
<div className="flex items-center justify-between" id="main-header">
<div className="flex items-center space-x-3">
<svg className="lucide lucide-menu h-6 w-6 text-slate-300" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<div>
<h1 className="text-lg font-semibold text-white tracking-tight">Football Markets</h1>
</div>
</div>
<div className="flex items-center space-x-3">
<button className="p-1.5 rounded-md hover:bg-zinc-900 transition-colors outline-none focus:outline-none focus:ring-1 focus:ring-zinc-700">
<svg className="lucide lucide-search h-6 w-6 text-slate-300" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="relative p-1.5 rounded-md hover:bg-zinc-900 transition-colors outline-none focus:outline-none focus:ring-1 focus:ring-zinc-700">
<svg className="lucide lucide-bell h-6 w-6 text-slate-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
</button>
</div>
</div>
<div className="flex items-center justify-between hidden" id="chart-header">
<button className="flex items-center space-x-2 text-green-400 hover:text-green-300 rounded-md px-1.5 py-1 outline-none focus:outline-none focus:ring-1 focus:ring-zinc-700" id="back-btn">
<svg className="lucide lucide-arrow-left h-6 w-6" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<span className="font-medium text-sm">Back</span>
</button>
<h1 className="text-lg font-semibold text-white tracking-tight truncate" id="chart-title"></h1>
<div className="w-12"></div>
</div>
</div>

<div className="flex-1 overflow-hidden">

<div className="" id="markets-view">

<div className="px-4 py-4">
<div className="flex space-x-2 overflow-x-auto pb-2">
<div className="bg-gradient-to-br from-[#111111] via-[#0f1617] to-[#004e2b] rounded-xl p-4 min-w-[140px] border border-zinc-700 shadow-innerBorder hover:ring-1 hover:ring-zinc-600 transition-all" style={{boxShadow: 'inset 0 2px 8px 0 rgba(0,0,0,0.32)'}}>
<div className="text-slate-300 text-xs mb-1 font-medium">Total Volume</div>
<div className="text-white font-semibold text-lg" id="total-volume-value">—</div>
</div>
<div className="bg-gradient-to-br from-[#111111] via-[#0f1617] to-[#004e2b] rounded-xl p-4 min-w-[140px] border border-zinc-700 shadow-innerBorder hover:ring-1 hover:ring-zinc-600 transition-all" style={{boxShadow: 'inset 0 2px 8px 0 rgba(0,0,0,0.32)'}}>
<div className="text-slate-300 text-xs mb-1 font-medium">Active Leagues</div>
<div className="text-white font-semibold text-lg" id="active-leagues-value">—</div>
</div>
<div className="bg-gradient-to-br from-[#111111] via-[#0f1617] to-[#004e2b] rounded-xl p-4 min-w-[140px] border border-zinc-700 shadow-innerBorder hover:ring-1 hover:ring-zinc-600 transition-all" style={{boxShadow: 'inset 0 2px 8px 0 rgba(0,0,0,0.32)'}}>
<div className="text-slate-300 text-xs mb-1 font-medium">Top Gainer</div>
<div className="text-white font-semibold text-lg">BUN O2.5</div>
<div className="text-green-400 text-xs font-medium">+10.2%</div>
</div>
</div>
</div>

<div className="px-4 py-2">
<div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
<svg className="lucide lucide-refresh-cw h-4 w-4" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
<span className="font-medium">Pull to refresh</span>
</div>
</div>

<div className="flex-1 px-4 pb-24">

<div className="bg-[#111111] rounded-xl shadow-innerBorder border border-zinc-700 mb-4" id="capital-panel" style={{boxShadow: 'inset 0 2px 8px 0 rgba(0,0,0,0.32)'}}>
<div className="p-4 border-b border-zinc-800">
<h2 className="text-base font-semibold text-white tracking-tight">League Capital Movement</h2>
<p className="text-xs text-gray-400 mt-1">Season change, games, W/L and success per league</p>
</div>
<div className="p-4" id="capital-movement-content"><div className="divide-y divide-zinc-800 -mx-4"><div className="px-4 py-3 flex items-center justify-between hover:bg-neutral-900/40 transition-colors">
<div className="flex-1 min-w-0">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-trending-down h-4 w-4 text-red-400" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-sm font-medium text-white truncate">overtwo(Serie B)</span>
</div>
<div className="mt-1 text-xs text-gray-400">
<span className="mr-3">Games: <span className="text-slate-300 font-medium">1520</span></span>
<span className="mr-3">W: <span className="text-slate-300 font-medium">848</span></span>
<span className="mr-3">L: <span className="text-slate-300 font-medium">672</span></span>
<span className="mr-3">Success: <span className="text-slate-300 font-medium">55.79%</span></span>
</div>
</div>
<div className="text-right ml-4">
<div className="text-sm font-semibold text-white">$-27728.00</div>
<div className="text-sm font-semibold text-white">-374.15%</div>
<div className="text-xs text-red-400">Season change</div>
</div>
</div><div className="px-4 py-3 flex items-center justify-between hover:bg-neutral-900/40 transition-colors">
<div className="flex-1 min-w-0">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-trending-down h-4 w-4 text-red-400" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-sm font-medium text-white truncate">overtwo(La Liga)</span>
</div>
<div className="mt-1 text-xs text-gray-400">
<span className="mr-3">Games: <span className="text-slate-300 font-medium">1520</span></span>
<span className="mr-3">W: <span className="text-slate-300 font-medium">810</span></span>
<span className="mr-3">L: <span className="text-slate-300 font-medium">710</span></span>
<span className="mr-3">Success: <span className="text-slate-300 font-medium">53.29%</span></span>
</div>
</div>
<div className="text-right ml-4">
<div className="text-sm font-semibold text-white">$-39660.00</div>
<div className="text-sm font-semibold text-white">-492.13%</div>
<div className="text-xs text-red-400">Season change</div>
</div>
</div><div className="px-4 py-3 flex items-center justify-between hover:bg-neutral-900/40 transition-colors">
<div className="flex-1 min-w-0">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-trending-down h-4 w-4 text-red-400" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-sm font-medium text-white truncate">overtwo(Championship)</span>
</div>
<div className="mt-1 text-xs text-gray-400">
<span className="mr-3">Games: <span className="text-slate-300 font-medium">2208</span></span>
<span className="mr-3">W: <span className="text-slate-300 font-medium">1174</span></span>
<span className="mr-3">L: <span className="text-slate-300 font-medium">1034</span></span>
<span className="mr-3">Success: <span className="text-slate-300 font-medium">53.17%</span></span>
</div>
</div>
<div className="text-right ml-4">
<div className="text-sm font-semibold text-white">$-62964.00</div>
<div className="text-sm font-semibold text-white">-742.49%</div>
<div className="text-xs text-red-400">Season change</div>
</div>
</div><div className="px-4 py-3 flex items-center justify-between hover:bg-neutral-900/40 transition-colors">
<div className="flex-1 min-w-0">
<div className="flex items中心 space-x-2">
<svg className="lucide lucide-trending-down h-4 w-4 text-red-400" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-sm font-medium text-white truncate">overtwo(Serie A)</span>
</div>
<div className="mt-1 text-xs text-gray-400">
<span className="mr-3">Games: <span className="text-slate-300 font-medium">1520</span></span>
<span className="mr-3">W: <span className="text-slate-300 font-medium">765</span></span>
<span className="mr-3">L: <span className="text-slate-300 font-medium">755</span></span>
<span className="mr-3">Success: <span className="text-slate-300 font-medium">50.33%</span></span>
</div>
</div>
<div className="text-right ml-4">
<div className="text-sm font-semibold text-white">$-53790.00</div>
<div className="text-sm font-semibold text-white">-648.88%</div>
<div className="text-xs text-red-400">Season change</div>
</div>
</div><div className="px-4 py-3 flex items-center justify-between hover:bg-neutral-900/40 transition-colors">
<div className="flex-1 min-w-0">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-trending-down h-4 w-4 text-red-400" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="text-sm font-medium text-white truncate">overtwo(EPL)</span>
</div>
<div className="mt-1 text-xs text-gray-400">
<span className="mr-3">Games: <span className="text-slate-300 font-medium">1520</span></span>
<span className="mr-3">W: <span className="text-slate-300 font-medium">654</span></span>
<span className="mr-3">L: <span className="text-slate-300 font-medium">866</span></span>
<span className="mr-3">Success: <span className="text-slate-300 font-medium">43.03%</span></span>
</div>
</div>
<div className="text-right ml-4">
<div className="text-sm font-semibold text-white">$-88644.00</div>
<div className="text-sm font-semibold text-white">-976.45%</div>
<div className="text-xs text-red-400">Season change</div>
</div>
</div></div></div>
</div>
</div>
</div>

<div className="flex-1 flex-col p-4 hidden" id="chart-view">
<div className="bg-gradient-to-br from-[#111111] via-[#0f1617] to-[#004e2b] rounded-xl p-4 border border-zinc-700 shadow-innerBorder mb-4" id="market-summary" style={{boxShadow: 'inset 0 2px 8px 0 rgba(0,0,0,0.32)'}}></div>
<div className="flex-1">
<div className="bg-[#111111] rounded-xl p-4 h-full border border-zinc-700 shadow-innerBorder" style={{boxShadow: 'inset 0 2px 8px 0 rgba(0,0,0,0.32)'}}>
<div className="mb-4">
<h3 className="text-lg font-semibold text-white mb-2">Price Movement</h3>
<div className="chart-container" style={{position: 'relative', height: '200px', width: '100%'}}>
<div className="h-full w-full">
<canvas id="priceChart"></canvas>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2">Trading Volume</h3>
<div className="volume-chart-container" style={{position: 'relative', height: '120px', width: '100%'}}>
<div className="h-full w-full">
<canvas id="volumeChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#111111] border-t border-zinc-800 px-4 py-2 border border-zinc-700" id="bottom-nav" style={{paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 8px)'}}>
<div className="flex items-center justify-around">
<button className="nav-btn flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-slate-300 hover:bg-zinc-900 hover:text-white outline-none focus:outline-none focus:ring-1 focus:ring-zinc-700" data-tab="home">
<svg className="lucide lucide-home h-5 w-5 mb-1" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs font-medium">Home</span>
</button>
<button className="nav-btn flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-green-400 hover:bg-zinc-900 hover:text-green-300 outline-none focus:outline-none focus:ring-1 focus:ring-zinc-700" data-tab="markets">
<svg className="lucide lucide-trending-up h-5 w-5 mb-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-medium">Markets</span>
</button>
<button className="nav-btn flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-slate-300 hover:bg-zinc-900 hover:text-white outline-none focus:outline-none focus:ring-1 focus:ring-zinc-700" data-tab="portfolio">
<svg className="lucide lucide-bar-chart-3 h-5 w-5 mb-1" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="text-xs font-medium">Portfolio</span>
</button>
<button className="nav-btn flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-slate-300 hover:bg-zinc-900 hover:text-white outline-none focus:outline-none focus:ring-1 focus:ring-zinc-700" data-tab="profile">
<svg className="lucide lucide-user h-5 w-5 mb-1" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs font-medium">Profile</span>
</button>
</div>
</div>
</div>


    </>
  );
}
