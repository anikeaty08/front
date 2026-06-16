import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 1. Business Logic / Data Layer (Simulation of Node.js Backend) ---
        
        // Dane testowe (Initial State)
        const assetsDB = [
            { id: 1, symbol: 'BTC', name: 'Bitcoin', type: 'crypto', currentPrice: 165000.00, holdings: 0.45, avgBuyPrice: 120000.00 },
            { id: 2, symbol: 'AAPL', name: 'Apple Inc.', type: 'stock', currentPrice: 720.50, holdings: 50, avgBuyPrice: 650.00 },
            { id: 3, symbol: 'VWCE', name: 'Vanguard All-World', type: 'etf', currentPrice: 420.00, holdings: 100, avgBuyPrice: 380.00 },
            { id: 4, symbol: 'ETH', name: 'Ethereum', type: 'crypto', currentPrice: 8500.00, holdings: 5.2, avgBuyPrice: 9000.00 }, // Strata
        ];

        // Funkcja obliczająca P&L (Backend Logic Simulation)
        function calculatePortfolioMetrics(assets) {
            let totalValue = 0;
            let totalCost = 0;
            const processedAssets = assets.map(asset => {
                const currentValue = asset.holdings * asset.currentPrice;
                const costBasis = asset.holdings * asset.avgBuyPrice;
                const profitLoss = currentValue - costBasis;
                const profitLossPercent = ((currentValue - costBasis) / costBasis) * 100;

                totalValue += currentValue;
                totalCost += costBasis;

                return {
                    ...asset,
                    currentValue,
                    profitLoss,
                    profitLossPercent
                };
            });

            return {
                totalValue,
                totalProfit: totalValue - totalCost,
                assets: processedAssets
            };
        }

        // --- 2. Frontend Logic (Rendering) ---

        function renderDashboard() {
            const data = calculatePortfolioMetrics(assetsDB);
            
            // Render Table
            const tableBody = document.getElementById('assets-table-body');
            let html = '';
            
            data.assets.forEach(asset => {
                const isProfit = asset.profitLoss >= 0;
                const plColor = isProfit ? 'text-emerald-400' : 'text-red-400';
                const plBg = isProfit ? 'bg-emerald-400/10' : 'bg-red-400/10'; // for potential badges
                const icon = asset.type === 'crypto' ? 'bitcoin' : (asset.type === 'stock' ? 'bar-chart-3' : 'layers');

                html += `
                <tr class="hover:bg-zinc-900/50 transition-colors group">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                                <span class="text-[10px] font-bold text-zinc-300">${asset.symbol.substring(0,2)}</span>
                            </div>
                            <div class="ml-3">
                                <div class="text-sm font-medium text-white">${asset.symbol}</div>
                                <div class="text-xs text-zinc-500">${asset.name}</div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm text-zinc-300">
                        ${asset.currentPrice.toLocaleString('pl-PL', {minimumFractionDigits: 2})} PLN
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm text-zinc-300">
                        ${asset.holdings}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-white">
                        ${asset.currentValue.toLocaleString('pl-PL', {minimumFractionDigits: 2})} PLN
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-xs font-medium">
                        <div class="flex flex-col items-end">
                            <span class="${plColor}">${isProfit ? '+' : ''}${asset.profitLoss.toLocaleString('pl-PL', {minimumFractionDigits: 2})} PLN</span>
                            <span class="${plColor} opacity-70">${isProfit ? '+' : ''}${asset.profitLossPercent.toFixed(2)}%</span>
                        </div>
                    </td>
                     <td class="px-6 py-4 whitespace-nowrap text-center text-sm text-zinc-500">
                        <button class="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-zinc-800 rounded">
                            <span class="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
                        </button>
                    </td>
                </tr>
                `;
            });
            tableBody.innerHTML = html;
        }

        // --- 3. UI Interactions ---

        function toggleModal() {
            const modal = document.getElementById('transactionModal');
            const overlay = document.getElementById('modalOverlay');
            const panel = document.getElementById('modalPanel');
            
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    overlay.classList.remove('opacity-0');
                    panel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
                    panel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
                }, 10);
            } else {
                overlay.classList.add('opacity-0');
                panel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');
                panel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
                
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderDashboard();
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex-col hidden md:flex z-20">
<div className="h-16 flex items-center px-6 border-b border-zinc-800/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
<span className="text-zinc-950 font-bold text-xs tracking-tighter">IT</span>
</div>
<span className="font-medium text-sm tracking-tight text-white">InvestTracker</span>
</div>
</div>
<nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
<div className="px-3 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Menu</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-zinc-800/50 rounded-md border border-zinc-700/50 group" href="#">
<span className="iconify text-zinc-400 group-hover:text-white transition-colors" data-icon="lucide:layout-dashboard" data-width="18" strokeWidth="1.5"></span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 rounded-md transition-all group" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:pie-chart" data-width="18" strokeWidth="1.5"></span>
                Aktywa
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 rounded-md transition-all group" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:arrow-left-right" data-width="18" strokeWidth="1.5"></span>
                Transakcje
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 rounded-md transition-all group" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:wallet" data-width="18" strokeWidth="1.5"></span>
                Portfele
            </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">System</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 rounded-md transition-all group" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:database" data-width="18" strokeWidth="1.5"></span>
                API / Baza
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 rounded-md transition-all group" href="#">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:settings" data-width="18" strokeWidth="1.5"></span>
                Ustawienia
            </a>
</nav>
<div className="p-4 border-t border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-medium text-white border border-white/10">
                    JD
                </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">Jan Deweloper</span>
<span className="text-xs text-zinc-500">Senior Architect</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden bg-black">
<div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

<header className="h-16 flex items-center justify-between px-8 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md z-10 sticky top-0">
<div className="flex items-center gap-4">
<h1 className="text-sm font-medium text-zinc-400">Przegląd Portfela</h1>
<span className="text-zinc-700">/</span>
<span className="text-sm font-medium text-white">Główny Dashboard</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center bg-zinc-900 rounded-md p-0.5 border border-zinc-800">
<button className="px-3 py-1 text-xs font-medium bg-zinc-800 text-white rounded shadow-sm">PLN</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">USD</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">EUR</button>
</div>
<button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md text-xs font-medium hover:bg-zinc-200 transition-colors" onclick="toggleModal()">
<span className="iconify" data-icon="lucide:plus" data-width="14" strokeWidth="2"></span>
                    Nowa Transakcja
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 relative z-0">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="iconify text-zinc-600" data-icon="lucide:wallet" data-width="20"></span>
</div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Całkowita Wartość</p>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl font-semibold tracking-tight text-white" id="total-balance">124 592,40 PLN</h2>
</div>
<div className="mt-4 flex items-center gap-2 text-xs">
<span className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
                            +12.5%
                        </span>
<span className="text-zinc-500">od zeszłego miesiąca</span>
</div>
</div>

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm hover:border-zinc-700 transition-colors relative">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Zysk/Strata (Całość)</p>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl font-semibold tracking-tight text-emerald-400" id="total-profit">+22 150,00 PLN</h2>
</div>
<div className="mt-4 flex items-center gap-2 text-xs">
<span className="text-zinc-400">Niezrealizowany zysk netto</span>
</div>

<svg className="absolute bottom-0 left-0 w-full h-12 opacity-10 text-emerald-500" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 20 L0 10 Q25 18 50 10 T100 5 L100 20 Z" fill="currentColor"></path>
</svg>
</div>

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm hover:border-zinc-700 transition-colors">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Najlepsze Aktywo</p>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl font-semibold tracking-tight text-white">BTC</h2>
<span className="text-sm text-zinc-500">Bitcoin</span>
</div>
<div className="mt-4 flex items-center gap-2 text-xs">
<span className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                            +45.2%
                        </span>
<span className="text-zinc-500">ROI</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-2 p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Wartość portfela w czasie</h3>
<div className="flex gap-2">
<button className="text-xs text-zinc-500 hover:text-white px-2 py-1 transition-colors">1W</button>
<button className="text-xs text-white bg-zinc-800 rounded px-2 py-1">1M</button>
<button className="text-xs text-zinc-500 hover:text-white px-2 py-1 transition-colors">1R</button>
<button className="text-xs text-zinc-500 hover:text-white px-2 py-1 transition-colors">YTD</button>
</div>
</div>
<div className="h-64 w-full relative">

<div className="absolute inset-0 flex flex-col justify-between text-xs text-zinc-600">
<div className="border-b border-zinc-800/50 w-full h-full flex items-end pb-1">0</div>
<div className="border-b border-zinc-800/50 w-full h-full flex items-end pb-1">50k</div>
<div className="border-b border-zinc-800/50 w-full h-full flex items-end pb-1">100k</div>
<div className="border-b border-zinc-800/50 w-full h-full flex items-end pb-1">150k</div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">

<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0 80 Q 20 70, 40 50 T 80 40 T 100 20 L 100 100 L 0 100 Z" fill="url(#chartGradient)"></path>

<path className="animate-draw" d="M0 80 Q 20 70, 40 50 T 80 40 T 100 20" fill="none" stroke="#818cf8" strokeWidth="0.8" vector-effect="non-scaling-stroke"></path>

<circle cx="80" cy="40" fill="#fff" r="1.5" stroke="#6366f1" strokeWidth="0.5"></circle>
</svg>

<div className="absolute top-1/3 left-3/4 transform -translate-x-1/2 -translate-y-full mb-2 bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-xs text-white shadow-lg">
                            132,400 PLN
                        </div>
</div>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm flex flex-col">
<h3 className="text-sm font-medium text-white mb-6">Alokacja Aktywów</h3>
<div className="flex-1 flex items-center justify-center relative">

<svg className="transform -rotate-90" height="180" viewbox="0 0 40 40" width="180">

<circle cx="20" cy="20" fill="none" r="15.9155" stroke="#27272a" strokeWidth="4"></circle>


<circle cx="20" cy="20" fill="none" r="15.9155" stroke="#6366f1" stroke-dasharray="40 60" stroke-dashoffset="0" strokeWidth="4"></circle>

<circle cx="20" cy="20" fill="none" r="15.9155" stroke="#10b981" stroke-dasharray="30 70" stroke-dashoffset="-40" strokeWidth="4"></circle>

<circle cx="20" cy="20" fill="none" r="15.9155" stroke="#a855f7" stroke-dasharray="20 80" stroke-dashoffset="-70" strokeWidth="4"></circle>

<circle cx="20" cy="20" fill="none" r="15.9155" stroke="#52525b" stroke-dasharray="10 90" stroke-dashoffset="-90" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xs text-zinc-500">Top</span>
<span className="text-sm font-semibold text-white">Akcje</span>
</div>
</div>
<div className="mt-6 space-y-2">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-zinc-400">Akcje (USA)</span>
</div>
<span className="text-white font-medium">40%</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-zinc-400">Kryptowaluty</span>
</div>
<span className="text-white font-medium">30%</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-purple-500"></span>
<span className="text-zinc-400">ETF</span>
</div>
<span className="text-white font-medium">20%</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Lista Aktywów</h3>
<div className="flex gap-2">
<input className="bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-zinc-600 placeholder-zinc-600" placeholder="Szukaj..." type="text"/>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-zinc-950/50">
<tr>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Aktywo</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Cena</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Ilość</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Wartość</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Zysk/Strata</th>
<th className="px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-center">Akcje</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800" id="assets-table-body">

</tbody>
</table>
</div>
</div>

<div className="mt-8 p-4 border border-dashed border-zinc-800 rounded-lg bg-zinc-900/20">
<h4 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide flex items-center gap-2">
<span className="iconify" data-icon="lucide:code-2" data-width="14"></span>
                    Struktura Danych (Schema Design)
                </h4>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-zinc-500">
<div className="bg-zinc-950 p-3 rounded border border-zinc-900">
<span className="text-indigo-400 block mb-1">Users Table</span>
                        id: UUID (PK)<br/>
                        email: VARCHAR<br/>
                        currency_pref: VARCHAR
                    </div>
<div className="bg-zinc-950 p-3 rounded border border-zinc-900">
<span className="text-indigo-400 block mb-1">Assets Table</span>
                        id: UUID (PK)<br/>
                        symbol: VARCHAR<br/>
                        type: ENUM (stock, crypto, etf)<br/>
                        current_price: DECIMAL
                    </div>
<div className="bg-zinc-950 p-3 rounded border border-zinc-900">
<span className="text-indigo-400 block mb-1">Transactions Table</span>
                        id: UUID (PK)<br/>
                        user_id: FK<br/>
                        asset_id: FK<br/>
                        type: ENUM (buy, sell)<br/>
                        amount: DECIMAL<br/>
                        price_at_transaction: DECIMAL
                    </div>
</div>
</div>
</div>
</main>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="transactionModal" role="dialog">
<div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0" id="modalOverlay"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" id="modalPanel">
<div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
<div className="flex items-center justify-between mb-5">
<h3 className="text-sm font-semibold leading-6 text-white" id="modal-title">Dodaj Transakcję</h3>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="toggleModal()">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<form className="space-y-4" id="addTransactionForm">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1">Typ Transakcji</label>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="type" type="radio" value="buy"/>
<div className="rounded-md border border-zinc-700 bg-zinc-800 py-2 text-center text-xs font-medium text-zinc-300 peer-checked:border-emerald-500/50 peer-checked:bg-emerald-500/10 peer-checked:text-emerald-400 hover:bg-zinc-700 transition-all">
                                            Kupno
                                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio" value="sell"/>
<div className="rounded-md border border-zinc-700 bg-zinc-800 py-2 text-center text-xs font-medium text-zinc-300 peer-checked:border-red-500/50 peer-checked:bg-red-500/10 peer-checked:text-red-400 hover:bg-zinc-700 transition-all">
                                            Sprzedaż
                                        </div>
</label>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1">Symbol Aktywa</label>
<input className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 placeholder-zinc-600" placeholder="np. AAPL, BTC" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1">Data</label>
<input className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 [color-scheme:dark]" type="date"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1">Ilość</label>
<input className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50" placeholder="0.00" step="0.0001" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1">Cena (PLN)</label>
<input className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50" placeholder="0.00" step="0.01" type="number"/>
</div>
</div>
</form>
</div>
<div className="bg-zinc-900/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t border-zinc-800">
<button className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-zinc-900 shadow-sm hover:bg-zinc-200 sm:ml-3 sm:w-auto transition-colors" type="button">Zapisz</button>
<button className="mt-3 inline-flex w-full justify-center rounded-md bg-transparent px-3 py-2 text-xs font-semibold text-zinc-300 shadow-sm ring-1 ring-inset ring-zinc-700 hover:bg-zinc-800 sm:mt-0 sm:w-auto transition-colors" onclick="toggleModal()" type="button">Anuluj</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
