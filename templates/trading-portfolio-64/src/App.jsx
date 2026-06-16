import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                
                // Update button states
                document.querySelectorAll('.tab-btn').forEach(b => {
                    b.classList.remove('border-blue-600', 'text-blue-600');
                    b.classList.add('border-transparent', 'text-gray-500');
                });
                btn.classList.remove('border-transparent', 'text-gray-500');
                btn.classList.add('border-blue-600', 'text-blue-600');
                
                // Show/hide content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.add('hidden');
                });
                document.getElementById(tab + 'Tab').classList.remove('hidden');
            });
        });

        // Detail screen functions
        function showMarginDetail() {
            document.getElementById('marginDetailScreen').classList.add('active');
            document.body.style.overflow = 'hidden';
            lucide.createIcons();
        }

        function hideMarginDetail() {
            document.getElementById('marginDetailScreen').classList.remove('active');
            document.body.style.overflow = '';
        }

        function showFuturesDetail() {
            document.getElementById('futuresDetailScreen').classList.add('active');
            document.body.style.overflow = 'hidden';
            lucide.createIcons();
        }

        function hideFuturesDetail() {
            document.getElementById('futuresDetailScreen').classList.remove('active');
            document.body.style.overflow = '';
        }

        function showOptionsDetail() {
            document.getElementById('optionsDetailScreen').classList.add('active');
            document.body.style.overflow = 'hidden';
            lucide.createIcons();
        }

        function hideOptionsDetail() {
            document.getElementById('optionsDetailScreen').classList.remove('active');
            document.body.style.overflow = '';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pb-24" id="portfolioOverview">

<div className="bg-white border-b border-gray-200 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="text-xl font-semibold tracking-tight">TradePro</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5 text-gray-600" data-lucide="bell"></i>
</button>
<button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5 text-gray-600" data-lucide="settings"></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white border-b border-gray-200 sticky top-16 z-30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex gap-6 overflow-x-auto">
<button className="py-4 text-sm font-medium border-b-2 border-blue-600 text-blue-600 whitespace-nowrap tab-btn" data-tab="assets">
                        Assets
                    </button>
<button className="py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap tab-btn" data-tab="margin">
                        Margin
                    </button>
<button className="py-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap tab-btn" data-tab="derivatives">
                        Derivatives
                    </button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="tab-content" id="assetsTab">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 animate-slide-in">
<div className="flex items-start justify-between mb-6">
<div>
<div className="text-sm text-gray-500 mb-1">Total Asset Value</div>
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">฿2,847,563.42</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-sm font-medium text-emerald-600">+฿124,563.42</span>
<span className="text-sm text-gray-500">(+4.58%)</span>
</div>
</div>
<div className="hidden sm:block">
<svg className="ml-auto" height="60" width="120">
<path className="sparkline" d="M 0 40 L 15 35 L 30 42 L 45 30 L 60 25 L 75 20 L 90 15 L 105 10 L 120 8"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
<div>
<div className="text-xs text-gray-500 mb-1">Unrealized P/L</div>
<div className="text-base font-medium text-emerald-600">+฿124,563.42</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Cash (THB)</div>
<div className="text-base font-medium text-gray-900">฿458,230.00</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Cash (USD)</div>
<div className="text-base font-medium text-gray-900">$12,450.75</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-slide-in">
<div className="p-6 border-b border-gray-100">
<h3 className="text-lg font-semibold tracking-tight">Asset Breakdown</h3>
</div>
<div className="divide-y divide-gray-100">

<div className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Equities</div>
<div className="text-xs text-gray-500 mt-0.5">12 holdings</div>
</div>
</div>
<div className="text-right">
<div className="text-base font-medium text-gray-900">฿1,856,420.50</div>
<div className="text-xs text-emerald-600 mt-0.5">+5.24%</div>
</div>
</div>
</div>

<div className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
<i className="w-5 h-5 text-purple-600" data-lucide="pie-chart"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Mutual Funds</div>
<div className="text-xs text-gray-500 mt-0.5">5 holdings</div>
</div>
</div>
<div className="text-right">
<div className="text-base font-medium text-gray-900">฿342,180.00</div>
<div className="text-xs text-emerald-600 mt-0.5">+2.18%</div>
</div>
</div>
</div>

<div className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
<i className="w-5 h-5 text-amber-600" data-lucide="shield"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Bonds</div>
<div className="text-xs text-gray-500 mt-0.5">3 holdings</div>
</div>
</div>
<div className="text-right">
<div className="text-base font-medium text-gray-900">฿520,000.00</div>
<div className="text-xs text-emerald-600 mt-0.5">+1.05%</div>
</div>
</div>
</div>

<div className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
<i className="w-5 h-5 text-teal-600" data-lucide="globe"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">ETFs / DR</div>
<div className="text-xs text-gray-500 mt-0.5">7 holdings</div>
</div>
</div>
<div className="text-right">
<div className="text-base font-medium text-gray-900">฿128,962.92</div>
<div className="text-xs text-emerald-600 mt-0.5">+3.67%</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden" id="marginTab">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 animate-slide-in">
<div className="flex items-start justify-between mb-6">
<div>
<div className="text-sm text-gray-500 mb-1">Margin Utilization</div>
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">62.4%</div>
</div>
<div className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                            Moderate Risk
                        </div>
</div>

<div className="mb-6">
<div className="h-3 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 margin-bar" style={{width: '62.4%'}}></div>
</div>
<div className="flex justify-between mt-2 text-xs text-gray-500">
<span>0%</span>
<span className="text-emerald-600">60%</span>
<span className="text-yellow-600">80%</span>
<span className="text-red-600">100%</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-xs text-gray-500 mb-1">Collateral Value</div>
<div className="text-base font-medium text-gray-900">฿1,250,000.00</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Loan Outstanding</div>
<div className="text-base font-medium text-red-600">฿780,000.00</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Available Credit</div>
<div className="text-base font-medium text-gray-900">฿470,000.00</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Buying Power</div>
<div className="text-base font-medium text-emerald-600">฿940,000.00</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="shield-check"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Maintenance Margin</div>
<div className="text-xs text-gray-500">Required to maintain positions</div>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">฿390,000.00</div>
<div className="text-xs text-gray-500 mt-1">31.2% of collateral value</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
<i className="w-5 h-5 text-red-600" data-lucide="percent"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Interest Accrued</div>
<div className="text-xs text-gray-500">Annual rate: 6.5%</div>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">฿4,562.50</div>
<div className="text-xs text-gray-500 mt-1">This month: ฿1,425.00</div>
</div>
</div>

<button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2" onclick="showMarginDetail()">
                    View Detailed Breakdown
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="tab-content hidden" id="derivativesTab">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6 animate-slide-in">
<div className="p-6 border-b border-gray-100">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-600" data-lucide="activity"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Futures</h3>
<div className="text-xs text-gray-500">3 open positions</div>
</div>
</div>
<button className="text-blue-600 hover:text-blue-700 text-sm font-medium" onclick="showFuturesDetail()">
                                Details
                            </button>
</div>
</div>
<div className="p-6 bg-gray-50 border-b border-gray-100">
<div className="grid grid-cols-3 gap-4">
<div>
<div className="text-xs text-gray-500 mb-1">Notional Exposure</div>
<div className="text-base font-medium text-gray-900">฿4,250,000</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Margin Used</div>
<div className="text-base font-medium text-gray-900">฿425,000</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">MTM P/L</div>
<div className="text-base font-medium text-emerald-600">+฿52,400</div>
</div>
</div>
</div>

<div className="divide-y divide-gray-100">
<div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-medium">LONG</div>
<span className="text-sm font-medium text-gray-900">S50Z25</span>
</div>
<span className="text-sm font-medium text-emerald-600">+฿28,500</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<span>5 contracts</span>
<span>Exposure: ฿1,500,000</span>
</div>
</div>
<div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-medium">LONG</div>
<span className="text-sm font-medium text-gray-900">S50H26</span>
</div>
<span className="text-sm font-medium text-emerald-600">+฿18,200</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<span>3 contracts</span>
<span>Exposure: ฿1,250,000</span>
</div>
</div>
<div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="px-2 py-1 rounded bg-red-100 text-red-700 text-xs font-medium">SHORT</div>
<span className="text-sm font-medium text-gray-900">GOLDZ25</span>
</div>
<span className="text-sm font-medium text-emerald-600">+฿5,700</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<span>2 contracts</span>
<span>Exposure: ฿1,500,000</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-slide-in">
<div className="p-6 border-b border-gray-100">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center">
<i className="w-5 h-5 text-violet-600" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">Options</h3>
<div className="text-xs text-gray-500">4 open positions</div>
</div>
</div>
<button className="text-blue-600 hover:text-blue-700 text-sm font-medium" onclick="showOptionsDetail()">
                                Details
                            </button>
</div>
</div>
<div className="p-6 bg-gray-50 border-b border-gray-100">
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-xs text-gray-500 mb-1">Total Premium Value</div>
<div className="text-base font-medium text-gray-900">฿84,250</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">MTM P/L</div>
<div className="text-base font-medium text-red-600">-฿8,430</div>
</div>
</div>
</div>

<div className="divide-y divide-gray-100">
<div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-medium">CALL</div>
<span className="text-sm font-medium text-gray-900">S50C1000Z25</span>
</div>
<span className="text-sm font-medium text-red-600">-฿3,200</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<span>Long • 10 contracts</span>
<span>Premium: ฿28,500</span>
</div>
<div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
<span>Δ: 0.62</span>
<span>Θ: -12.5</span>
</div>
</div>
<div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs font-medium">PUT</div>
<span className="text-sm font-medium text-gray-900">S50P950Z25</span>
</div>
<span className="text-sm font-medium text-emerald-600">+฿1,850</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<span>Short • 5 contracts</span>
<span>Premium: ฿18,750</span>
</div>
<div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
<span>Δ: -0.38</span>
<span>Θ: +8.2</span>
</div>
</div>
<div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-medium">CALL</div>
<span className="text-sm font-medium text-gray-900">S50C1050Z25</span>
</div>
<span className="text-sm font-medium text-red-600">-฿4,580</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<span>Long • 8 contracts</span>
<span>Premium: ฿22,000</span>
</div>
<div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
<span>Δ: 0.45</span>
<span>Θ: -10.8</span>
</div>
</div>
<div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs font-medium">PUT</div>
<span className="text-sm font-medium text-gray-900">S50P900Z25</span>
</div>
<span className="text-sm font-medium text-red-600">-฿2,500</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<span>Long • 6 contracts</span>
<span>Premium: ฿15,000</span>
</div>
<div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
<span>Δ: -0.18</span>
<span>Θ: -6.4</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="detail-screen" id="marginDetailScreen">
<div className="bg-white border-b border-gray-200 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<button className="flex items-center gap-2 text-gray-600 hover:text-gray-900" onclick="hideMarginDetail()">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
<span className="text-sm font-medium">Back</span>
</button>
<h1 className="text-lg font-semibold tracking-tight">Margin Account Details</h1>
<div className="w-16"></div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
<h3 className="text-base font-semibold tracking-tight mb-4">Risk Assessment</h3>
<div className="relative h-32 mb-4">
<svg className="w-full h-full" viewbox="0 0 200 100">
<path d="M 20 80 A 80 80 0 0 1 180 80" fill="none" stroke="#e5e7eb" strokeLinecap="round" strokeWidth="12"></path>
<path d="M 20 80 A 80 80 0 0 1 180 80" fill="none" stroke="#eab308" stroke-dasharray="251" stroke-dashoffset="94" strokeLinecap="round" strokeWidth="12"></path>
<circle cx="100" cy="80" fill="#eab308" r="4"></circle>
<line stroke="#eab308" strokeWidth="2" x1="100" x2="142" y1="80" y2="48"></line>
<circle cx="142" cy="48" fill="#eab308" r="6"></circle>
</svg>
<div className="absolute inset-0 flex items-end justify-center pb-2">
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight text-gray-900">62.4%</div>
<div className="text-xs text-gray-500 mt-1">Moderate Risk</div>
</div>
</div>
</div>
<div className="flex justify-between text-xs text-gray-500">
<span className="text-emerald-600">Safe</span>
<span className="text-yellow-600">Moderate</span>
<span className="text-red-600">High Risk</span>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
<div className="p-6 border-b border-gray-100">
<h3 className="text-base font-semibold tracking-tight">Buying Power Calculation</h3>
</div>
<div className="divide-y divide-gray-100">
<div className="p-4 flex items-center justify-between">
<span className="text-sm text-gray-600">Collateral Value</span>
<span className="text-sm font-medium text-gray-900">฿1,250,000.00</span>
</div>
<div className="p-4 flex items-center justify-between">
<span className="text-sm text-gray-600">Loan Outstanding</span>
<span className="text-sm font-medium text-red-600">-฿780,000.00</span>
</div>
<div className="p-4 flex items-center justify-between">
<span className="text-sm text-gray-600">Available Equity</span>
<span className="text-sm font-medium text-gray-900">฿470,000.00</span>
</div>
<div className="p-4 flex items-center justify-between bg-gray-50">
<span className="text-sm font-medium text-gray-900">Buying Power (2x)</span>
<span className="text-base font-semibold text-emerald-600">฿940,000.00</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
<div className="p-6 border-b border-gray-100">
<h3 className="text-base font-semibold tracking-tight">Collateral-Eligible Assets</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-gray-50 border-b border-gray-100">
<tr>
<th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Asset</th>
<th className="px-4 py-3 text-right text-xs font-medium text-gray-500">Market Value</th>
<th className="px-4 py-3 text-right text-xs font-medium text-gray-500">Ratio</th>
<th className="px-4 py-3 text-right text-xs font-medium text-gray-500">Collateral Value</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50">
<td className="px-4 py-3 text-sm font-medium text-gray-900">PTT</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">฿425,000</td>
<td className="px-4 py-3 text-sm text-right text-gray-600">70%</td>
<td className="px-4 py-3 text-sm text-right font-medium text-gray-900">฿297,500</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-4 py-3 text-sm font-medium text-gray-900">KBANK</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">฿380,000</td>
<td className="px-4 py-3 text-sm text-right text-gray-600">70%</td>
<td className="px-4 py-3 text-sm text-right font-medium text-gray-900">฿266,000</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-4 py-3 text-sm font-medium text-gray-900">CPALL</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">฿320,000</td>
<td className="px-4 py-3 text-sm text-right text-gray-600">65%</td>
<td className="px-4 py-3 text-sm text-right font-medium text-gray-900">฿208,000</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-4 py-3 text-sm font-medium text-gray-900">AOT</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">฿285,000</td>
<td className="px-4 py-3 text-sm text-right text-gray-600">65%</td>
<td className="px-4 py-3 text-sm text-right font-medium text-gray-900">฿185,250</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-4 py-3 text-sm font-medium text-gray-900">BDMS</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">฿215,000</td>
<td className="px-4 py-3 text-sm text-right text-gray-600">60%</td>
<td className="px-4 py-3 text-sm text-right font-medium text-gray-900">฿129,000</td>
</tr>
<tr className="bg-gray-50">
<td className="px-4 py-3 text-sm font-semibold text-gray-900">Total</td>
<td className="px-4 py-3 text-sm text-right font-semibold text-gray-900">฿1,625,000</td>
<td className="px-4 py-3"></td>
<td className="px-4 py-3 text-sm text-right font-semibold text-gray-900">฿1,085,750</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="detail-screen" id="futuresDetailScreen">
<div className="bg-white border-b border-gray-200 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<button className="flex items-center gap-2 text-gray-600 hover:text-gray-900" onclick="hideFuturesDetail()">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
<span className="text-sm font-medium">Back</span>
</button>
<h1 className="text-lg font-semibold tracking-tight">Futures Positions</h1>
<div className="w-16"></div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
<div className="p-6 border-b border-gray-100">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-700 text-sm font-medium">LONG</div>
<h3 className="text-xl font-semibold tracking-tight">S50Z25</h3>
</div>
<div className="text-right">
<div className="text-sm text-gray-500">MTM P/L</div>
<div className="text-xl font-semibold text-emerald-600">+฿28,500</div>
</div>
</div>
<div className="text-sm text-gray-500">SET50 Index Futures • December 2025</div>
</div>
<div className="p-6 bg-gray-50 border-b border-gray-100">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div>
<div className="text-xs text-gray-500 mb-1">Contracts</div>
<div className="text-base font-medium text-gray-900">5</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Entry Price</div>
<div className="text-base font-medium text-gray-900">988.50</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Current Price</div>
<div className="text-base font-medium text-gray-900">1,007.20</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Expiry Date</div>
<div className="text-base font-medium text-gray-900">Dec 28, 2025</div>
</div>
</div>
</div>

<div className="p-6 border-b border-gray-100">
<h4 className="text-sm font-medium text-gray-900 mb-4">Mark-to-Market</h4>
<div className="h-48 bg-gradient-to-br from-emerald-50 to-white rounded-lg flex items-end justify-around p-4">
<div className="w-8 bg-emerald-200 rounded-t" style={{height: '45%'}}></div>
<div className="w-8 bg-emerald-300 rounded-t" style={{height: '52%'}}></div>
<div className="w-8 bg-emerald-300 rounded-t" style={{height: '48%'}}></div>
<div className="w-8 bg-emerald-400 rounded-t" style={{height: '65%'}}></div>
<div className="w-8 bg-emerald-400 rounded-t" style={{height: '70%'}}></div>
<div className="w-8 bg-emerald-500 rounded-t" style={{height: '82%'}}></div>
<div className="w-8 bg-emerald-500 rounded-t" style={{height: '88%'}}></div>
</div>
</div>
<div className="p-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 bg-gray-50 rounded-lg">
<div className="text-xs text-gray-500 mb-1">Initial Margin</div>
<div className="text-base font-medium text-gray-900">฿150,000</div>
</div>
<div className="p-4 bg-gray-50 rounded-lg">
<div className="text-xs text-gray-500 mb-1">Maintenance Margin</div>
<div className="text-base font-medium text-gray-900">฿112,500</div>
</div>
<div className="p-4 bg-gray-50 rounded-lg">
<div className="text-xs text-gray-500 mb-1">Notional Value</div>
<div className="text-base font-medium text-gray-900">฿1,500,000</div>
</div>
<div className="p-4 bg-gray-50 rounded-lg">
<div className="text-xs text-gray-500 mb-1">Break-even Price</div>
<div className="text-base font-medium text-gray-900">990.25</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-medium">LONG</div>
<span className="text-base font-semibold text-gray-900">S50H26</span>
</div>
<span className="text-base font-semibold text-emerald-600">+฿18,200</span>
</div>
<div className="grid grid-cols-3 gap-3 text-xs">
<div>
<div className="text-gray-500">Contracts</div>
<div className="font-medium text-gray-900 mt-0.5">3</div>
</div>
<div>
<div className="text-gray-500">Entry</div>
<div className="font-medium text-gray-900 mt-0.5">1,012.80</div>
</div>
<div>
<div className="text-gray-500">Current</div>
<div className="font-medium text-gray-900 mt-0.5">1,030.90</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="px-2.5 py-1 rounded bg-red-100 text-red-700 text-xs font-medium">SHORT</div>
<span className="text-base font-semibold text-gray-900">GOLDZ25</span>
</div>
<span className="text-base font-semibold text-emerald-600">+฿5,700</span>
</div>
<div className="grid grid-cols-3 gap-3 text-xs">
<div>
<div className="text-gray-500">Contracts</div>
<div className="font-medium text-gray-900 mt-0.5">2</div>
</div>
<div>
<div className="text-gray-500">Entry</div>
<div className="font-medium text-gray-900 mt-0.5">2,458.00</div>
</div>
<div>
<div className="text-gray-500">Current</div>
<div className="font-medium text-gray-900 mt-0.5">2,429.50</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="detail-screen" id="optionsDetailScreen">
<div className="bg-white border-b border-gray-200 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<button className="flex items-center gap-2 text-gray-600 hover:text-gray-900" onclick="hideOptionsDetail()">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
<span className="text-sm font-medium">Back</span>
</button>
<h1 className="text-lg font-semibold tracking-tight">Options Positions</h1>
<div className="w-16"></div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
<div className="p-6 border-b border-gray-100">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium">CALL • LONG</div>
<h3 className="text-xl font-semibold tracking-tight">S50C1000Z25</h3>
</div>
<div className="text-right">
<div className="text-sm text-gray-500">MTM P/L</div>
<div className="text-xl font-semibold text-red-600">-฿3,200</div>
</div>
</div>
<div className="text-sm text-gray-500">SET50 Index Call Option • Strike 1000 • December 2025</div>
</div>
<div className="p-6 bg-gray-50 border-b border-gray-100">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div>
<div className="text-xs text-gray-500 mb-1">Contracts</div>
<div className="text-base font-medium text-gray-900">10</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Entry Premium</div>
<div className="text-base font-medium text-gray-900">31.70</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Current Premium</div>
<div className="text-base font-medium text-gray-900">28.50</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Expiry Date</div>
<div className="text-base font-medium text-gray-900">Dec 28, 2025</div>
</div>
</div>
</div>

<div className="p-6 border-b border-gray-100">
<h4 className="text-sm font-medium text-gray-900 mb-4">Payoff Diagram</h4>
<div className="h-48 relative">
<svg className="w-full h-full" viewbox="0 0 300 150">

<line stroke="#d1d5db" strokeWidth="1" x1="30" x2="270" y1="120" y2="120"></line>
<line stroke="#d1d5db" strokeWidth="1" x1="150" x2="150" y1="20" y2="140"></line>

<path d="M 30 120 L 150 120 L 270 30" fill="none" stroke="#3b82f6" strokeWidth="2"></path>

<circle cx="150" cy="120" fill="#3b82f6" r="4"></circle>

<text className="text-xs fill-gray-500" text-anchor="middle" x="150" y="145">1000</text>
<text className="text-xs fill-gray-500" text-anchor="middle" x="90" y="145">950</text>
<text className="text-xs fill-gray-500" text-anchor="middle" x="210" y="145">1050</text>
</svg>
<div className="absolute top-2 left-4 text-xs text-gray-500">P/L</div>
<div className="absolute bottom-2 right-4 text-xs text-gray-500">Price</div>
</div>
</div>

<div className="p-6">
<h4 className="text-sm font-medium text-gray-900 mb-4">Option Greeks</h4>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="p-4 bg-gray-50 rounded-lg">
<div className="text-xs text-gray-500 mb-1">Delta (Δ)</div>
<div className="text-base font-medium text-gray-900">0.62</div>
<div className="text-xs text-gray-500 mt-1">Price sensitivity</div>
</div>
<div className="p-4 bg-gray-50 rounded-lg">
<div className="text-xs text-gray-500 mb-1">Gamma (Γ)</div>
<div className="text-base font-medium text-gray-900">0.028</div>
<div className="text-xs text-gray-500 mt-1">Delta change rate</div>
</div>
<div className="p-4 bg-gray-50 rounded-lg">
<div className="text-xs text-gray-500 mb-1">Theta (Θ)</div>
<div className="text-base font-medium text-red-600">-12.5</div>
<div className="text-xs text-gray-500 mt-1">Time decay/day</div>
</div>
<div className="p-4 bg-gray-50 rounded-lg">
<div className="text-xs text-gray-500 mb-1">Vega (V)</div>
<div className="text-base font-medium text-gray-900">18.3</div>
<div className="text-xs text-gray-500 mt-1">Volatility impact</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
<div className="p-6 border-b border-gray-100">
<h3 className="text-base font-semibold tracking-tight">All Positions Greeks</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-gray-50 border-b border-gray-100">
<tr>
<th className="px-4 py-3 text-left text-xs font-medium text-gray-500">Position</th>
<th className="px-4 py-3 text-right text-xs font-medium text-gray-500">Delta</th>
<th className="px-4 py-3 text-right text-xs font-medium text-gray-500">Gamma</th>
<th className="px-4 py-3 text-right text-xs font-medium text-gray-500">Theta</th>
<th className="px-4 py-3 text-right text-xs font-medium text-gray-500">Vega</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50">
<td className="px-4 py-3 text-sm font-medium text-gray-900">S50C1000Z25</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">0.62</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">0.028</td>
<td className="px-4 py-3 text-sm text-right text-red-600">-12.5</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">18.3</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-4 py-3 text-sm font-medium text-gray-900">S50P950Z25</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">-0.38</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">0.032</td>
<td className="px-4 py-3 text-sm text-right text-emerald-600">+8.2</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">15.7</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-4 py-3 text-sm font-medium text-gray-900">S50C1050Z25</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">0.45</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">0.035</td>
<td className="px-4 py-3 text-sm text-right text-red-600">-10.8</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">20.1</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-4 py-3 text-sm font-medium text-gray-900">S50P900Z25</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">-0.18</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">0.022</td>
<td className="px-4 py-3 text-sm text-right text-red-600">-6.4</td>
<td className="px-4 py-3 text-sm text-right text-gray-900">12.8</td>
</tr>
<tr className="bg-gray-50">
<td className="px-4 py-3 text-sm font-semibold text-gray-900">Portfolio Total</td>
<td className="px-4 py-3 text-sm text-right font-semibold text-gray-900">0.51</td>
<td className="px-4 py-3 text-sm text-right font-semibold text-gray-900">0.117</td>
<td className="px-4 py-3 text-sm text-right font-semibold text-red-600">-21.5</td>
<td className="px-4 py-3 text-sm text-right font-semibold text-gray-900">66.9</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-around h-16">
<button className="nav-item flex flex-col items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-xs font-medium">Home</span>
</button>
<button className="nav-item active flex flex-col items-center gap-1 transition-colors">
<i className="w-5 h-5" data-lucide="briefcase"></i>
<span className="text-xs font-medium">Portfolio</span>
</button>
<button className="relative">
<div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-colors">
<i className="w-6 h-6 text-white" data-lucide="plus"></i>
</div>
<div className="w-14 h-1"></div>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="package"></i>
<span className="text-xs font-medium">Products</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-xs font-medium">Account</span>
</button>
</div>
</div>
</div>


    </>
  );
}
