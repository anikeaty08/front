import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // SPA Router Logic
        function navigate(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-view');
            pages.forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('block', 'page-enter');
            });

            // Show selected page
            const target = document.getElementById('page-' + pageId);
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('block', 'page-enter');
            }

            // Update Nav State
            const navButtons = document.querySelectorAll('nav button');
            navButtons.forEach(btn => {
                btn.classList.remove('active-nav', 'bg-gray-100', 'text-gray-900');
                btn.classList.add('text-gray-500');
            });

            const activeBtn = document.getElementById('nav-' + pageId);
            if (activeBtn) {
                activeBtn.classList.add('active-nav', 'text-gray-900');
                activeBtn.classList.remove('text-gray-500');
            }

            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Calculator Logic
        let currentMode = 'air'; // 'air' or 'sea'

        function setCalcMode(mode) {
            currentMode = mode;
            const btnAir = document.getElementById('btn-air');
            const btnSea = document.getElementById('btn-sea');

            if (mode === 'air') {
                btnAir.className = "flex flex-col items-center justify-center py-3 rounded-md bg-white shadow-sm border border-gray-100 transition-all ring-1 ring-gray-900/5";
                btnAir.querySelector('span:first-child').className = "text-sm font-semibold text-gray-900";
                
                btnSea.className = "flex flex-col items-center justify-center py-3 rounded-md text-gray-500 hover:text-gray-900 transition-all";
                btnSea.querySelector('span:first-child').className = "text-sm font-semibold";
            } else {
                btnSea.className = "flex flex-col items-center justify-center py-3 rounded-md bg-white shadow-sm border border-gray-100 transition-all ring-1 ring-gray-900/5";
                btnSea.querySelector('span:first-child').className = "text-sm font-semibold text-gray-900";

                btnAir.className = "flex flex-col items-center justify-center py-3 rounded-md text-gray-500 hover:text-gray-900 transition-all";
                btnAir.querySelector('span:first-child').className = "text-sm font-semibold";
            }
            calculateTotal();
        }

        function calculateTotal() {
            const weight = parseFloat(document.getElementById('calc-weight').value) || 0;
            const jpyValue = parseFloat(document.getElementById('calc-value').value) || 0;
            const isAssisted = document.getElementById('calc-assist').checked;

            let ratePerKg = 0;
            
            if (currentMode === 'air') {
                if (weight <= 5) ratePerKg = 250;
                else if (weight <= 20) ratePerKg = 220;
                else ratePerKg = 180;
            } else {
                // Simple sea rate logic
                ratePerKg = 150; 
            }

            let shippingCost = weight * ratePerKg;
            if (shippingCost < 250 && currentMode === 'air') shippingCost = 250; // Min charge

            let serviceFee = 0;
            if (isAssisted) {
                // Convert JPY to THB approx 0.24 for calculation base
                const thbValue = jpyValue * 0.24; 
                serviceFee = thbValue * 0.05;
                if (serviceFee < 200) serviceFee = 200;
            }

            const total = Math.round(shippingCost + serviceFee);

            document.getElementById('calc-total').innerText = '฿ ' + total.toLocaleString();
        }

        // Initialize calculator
        calculateTotal();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="navigate('home')">
<div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded-lg shadow-sm">
<iconify-icon icon="lucide:package" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-tight text-gray-900">JP<span className="text-gray-400 font-normal">LOGISTICS</span></span>
</a>
<div className="hidden md:flex items-center gap-1 p-1 bg-white border border-gray-100 rounded-full shadow-sm">
<button className="px-4 py-1.5 text-xs font-medium text-gray-500 rounded-full hover:text-gray-900 transition-all active-nav" id="nav-home" onclick="navigate('home')">Home</button>
<button className="px-4 py-1.5 text-xs font-medium text-gray-500 rounded-full hover:text-gray-900 transition-all" id="nav-services" onclick="navigate('services')">Services</button>
<button className="px-4 py-1.5 text-xs font-medium text-gray-500 rounded-full hover:text-gray-900 transition-all" id="nav-process" onclick="navigate('process')">Process</button>
<button className="px-4 py-1.5 text-xs font-medium text-gray-500 rounded-full hover:text-gray-900 transition-all" id="nav-rates" onclick="navigate('rates')">Rates</button>
<button className="px-4 py-1.5 text-xs font-medium text-gray-500 rounded-full hover:text-gray-900 transition-all" id="nav-faq" onclick="navigate('faq')">Support</button>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:block text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">Log in</button>
<button className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all shadow-sm ring-1 ring-gray-900/5 hover:shadow-md">
                    My Dashboard
                </button>
</div>
</div>
</nav>

<main className="flex-grow pt-16" id="app">

<div className="page-view block" id="page-home">
<header className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden border-b border-gray-100">
<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[10px] font-semibold tracking-wide uppercase">New: 5% Off Yahoo Auctions</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gray-900 mb-6 leading-[1.05]">
                        Japan to Thailand.<br/><span className="text-gray-400">Simplified.</span>
</h1>
<p className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                        The all-in-one logistics platform for individuals and businesses. We buy, store, pack, and ship your goods from Tokyo to Bangkok.
                    </p>
<div className="max-w-md mx-auto relative group mb-12">
<div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative bg-white rounded-lg shadow-sm border border-gray-200 flex items-center p-1.5 pl-4 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
<iconify-icon className="text-gray-400 mr-3" icon="lucide:search" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none outline-none text-sm text-gray-900 placeholder-gray-400 h-10" placeholder="Track shipment (e.g. JP-88392)" type="text"/>
<button className="bg-gray-100 text-gray-900 rounded-md px-4 h-9 text-xs font-semibold hover:bg-gray-200 transition-colors">Track</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-gray-100 pt-10">
<div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-left">
<div className="mb-2 text-gray-900"><iconify-icon icon="lucide:plane" width="20"></iconify-icon></div>
<div className="text-2xl font-bold tracking-tight">3 Days</div>
<div className="text-xs text-gray-500 font-medium">Fastest Air Delivery</div>
</div>
<div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-left">
<div className="mb-2 text-gray-900"><iconify-icon icon="lucide:coins" width="20"></iconify-icon></div>
<div className="text-2xl font-bold tracking-tight">฿180</div>
<div className="text-xs text-gray-500 font-medium">Starting Rate / KG</div>
</div>
<div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-left">
<div className="mb-2 text-gray-900"><iconify-icon icon="lucide:warehouse" width="20"></iconify-icon></div>
<div className="text-2xl font-bold tracking-tight">30 Days</div>
<div className="text-xs text-gray-500 font-medium">Free Warehouse Storage</div>
</div>
<div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-left">
<div className="mb-2 text-gray-900"><iconify-icon icon="lucide:users" width="20"></iconify-icon></div>
<div className="text-2xl font-bold tracking-tight">12k+</div>
<div className="text-xs text-gray-500 font-medium">Active Users</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div className="group cursor-pointer" onclick="navigate('services')">
<div className="h-64 bg-gray-100 rounded-2xl mb-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="lucide:shopping-bag" width="64"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Proxy Purchasing</h3>
<p className="text-sm text-gray-500 leading-relaxed">We buy from Mercari, Yahoo Auctions, and Rakuten for you. No Japanese required.</p>
</div>
<div className="group cursor-pointer" onclick="navigate('services')">
<div className="h-64 bg-gray-100 rounded-2xl mb-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="lucide:box-select" width="64"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Consolidation</h3>
<p className="text-sm text-gray-500 leading-relaxed">Combine multiple packages into one box to save up to 60% on international shipping.</p>
</div>
<div className="group cursor-pointer" onclick="navigate('services')">
<div className="h-64 bg-gray-100 rounded-2xl mb-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="lucide:shield-check" width="64"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Customs Clearance</h3>
<p className="text-sm text-gray-500 leading-relaxed">100% door-to-door service including tax handling and customs documentation.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden" id="page-services">
<div className="bg-gray-50 border-b border-gray-200 pt-24 pb-16">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Our Services</h1>
<p className="text-gray-500 max-w-2xl">Comprehensive logistics solutions tailored for shoppers, collectors, and business owners.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6"><iconify-icon icon="lucide:shopping-cart" width="24"></iconify-icon></div>
<h2 className="text-2xl font-semibold text-gray-900 mb-4">Personal Shopper &amp; Bidding</h2>
<p className="text-sm text-gray-500 leading-7 mb-6">
                            Cannot speak Japanese? Don't have a Japanese credit card? No problem.
                            We act as your agent to purchase items from any Japanese online store.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-700"><iconify-icon className="text-blue-600" icon="lucide:check"></iconify-icon> Mercari &amp; Rakuma Instant Buy</li>
<li className="flex items-center gap-3 text-sm text-gray-700"><iconify-icon className="text-blue-600" icon="lucide:check"></iconify-icon> Yahoo Auction Sniping Tools</li>
<li className="flex items-center gap-3 text-sm text-gray-700"><iconify-icon className="text-blue-600" icon="lucide:check"></iconify-icon> P-Bandai &amp; Limited Goods</li>
</ul>
</div>
<div className="bg-gray-100 rounded-2xl h-80 border border-gray-200 relative overflow-hidden">

<div className="absolute inset-4 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
<div className="text-xs font-semibold text-gray-900">Order Request #9921</div>
<div className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded uppercase">Purchased</div>
</div>
<div className="space-y-3">
<div className="h-2 bg-gray-100 rounded w-3/4"></div>
<div className="h-2 bg-gray-100 rounded w-1/2"></div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 bg-gray-100 rounded-2xl h-80 border border-gray-200 relative overflow-hidden flex items-center justify-center">
<iconify-icon className="text-gray-300" icon="lucide:package-open" width="80"></iconify-icon>
</div>
<div className="order-1 md:order-2">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6"><iconify-icon icon="lucide:layers" width="24"></iconify-icon></div>
<h2 className="text-2xl font-semibold text-gray-900 mb-4">Smart Consolidation</h2>
<p className="text-sm text-gray-500 leading-7 mb-6">
                            Shop from multiple stores (e.g., Amazon, Disney Store, Animate) and send them to our warehouse. We will unbox, remove excess packaging, and combine them into a single shipment.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-700"><iconify-icon className="text-purple-600" icon="lucide:check"></iconify-icon> Free storage for 30 days</li>
<li className="flex items-center gap-3 text-sm text-gray-700"><iconify-icon className="text-purple-600" icon="lucide:check"></iconify-icon> Photo service available</li>
<li className="flex items-center gap-3 text-sm text-gray-700"><iconify-icon className="text-purple-600" icon="lucide:check"></iconify-icon> Protective repacking for fragile items</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6"><iconify-icon icon="lucide:briefcase" width="24"></iconify-icon></div>
<h2 className="text-2xl font-semibold text-gray-900 mb-4">Business B2B Logistics</h2>
<p className="text-sm text-gray-500 leading-7 mb-6">
                            Scaling your retail business in Thailand? We provide full container load (FCL) and less than container load (LCL) services with formal tax invoicing.
                        </p>
<div className="flex gap-4">
<button className="px-4 py-2 bg-gray-900 text-white text-xs font-medium rounded-md hover:bg-gray-800">Contact Sales</button>
<button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-50">Download Rates</button>
</div>
</div>
<div className="bg-gray-100 rounded-2xl h-80 border border-gray-200 relative overflow-hidden flex items-center justify-center">
<iconify-icon className="text-gray-300" icon="lucide:container" width="80"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="page-view hidden" id="page-process">
<div className="bg-gray-50 border-b border-gray-200 pt-24 pb-16">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">How It Works</h1>
<p className="text-gray-500 max-w-2xl">From Tokyo to Bangkok in 6 simple steps.</p>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 py-16">
<div className="relative border-l border-gray-200 ml-4 md:ml-6 space-y-16">

<div className="relative pl-12 md:pl-16">
<div className="absolute -left-3 top-0 w-6 h-6 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-gray-900 rounded-full"></div>
</div>
<div className="flex flex-col md:flex-row md:items-start gap-6">
<div className="flex-1">
<span className="text-xs font-mono text-gray-400 mb-1 block">STEP 01</span>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Get Your Address</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                                    Sign up for a free account. You will instantly receive a unique Japanese warehouse address (including a specific unit number) to use at checkout on any Japanese website.
                                </p>
</div>
<div className="w-full md:w-48 bg-gray-50 p-4 rounded-lg border border-gray-200">
<div className="text-[10px] text-gray-400 uppercase mb-1">Your ID</div>
<div className="text-sm font-mono font-bold text-gray-900">JP-88291</div>
</div>
</div>
</div>

<div className="relative pl-12 md:pl-16">
<div className="absolute -left-3 top-0 w-6 h-6 bg-white border-2 border-gray-200 rounded-full"></div>
<div className="flex flex-col md:flex-row md:items-start gap-6">
<div className="flex-1">
<span className="text-xs font-mono text-gray-400 mb-1 block">STEP 02</span>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Shop or Request Buy</h3>
<p className="text-sm text-gray-500 leading-relaxed">
<strong>Option A:</strong> Buy it yourself using our address.<br/>
<strong>Option B:</strong> Send us the link, and we buy it for you (Proxy).
                                </p>
</div>
<div className="w-full md:w-48 flex items-center justify-center gap-2 opacity-50">
<iconify-icon icon="logos:amazon-icon" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:rakuten" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:mercari" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="relative pl-12 md:pl-16">
<div className="absolute -left-3 top-0 w-6 h-6 bg-white border-2 border-gray-200 rounded-full"></div>
<div className="flex flex-col md:flex-row md:items-start gap-6">
<div className="flex-1">
<span className="text-xs font-mono text-gray-400 mb-1 block">STEP 03</span>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Warehouse Arrival</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                                    When your items arrive at our Tokyo warehouse, we weigh, measure, and photograph them. You'll get an email notification immediately. You can choose to store them or ship immediately.
                                </p>
</div>
</div>
</div>

<div className="relative pl-12 md:pl-16">
<div className="absolute -left-3 top-0 w-6 h-6 bg-white border-2 border-gray-200 rounded-full"></div>
<div className="flex flex-col md:flex-row md:items-start gap-6">
<div className="flex-1">
<span className="text-xs font-mono text-gray-400 mb-1 block">STEP 04</span>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Payment &amp; Shipping</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                                    Select your shipping method (Air/Sea) and pay the shipping fee via Credit Card or Thai QR Payment. We consolidate items if requested.
                                </p>
</div>
</div>
</div>

<div className="relative pl-12 md:pl-16">
<div className="absolute -left-3 top-0 w-6 h-6 bg-white border-2 border-gray-200 rounded-full"></div>
<div className="flex flex-col md:flex-row md:items-start gap-6">
<div className="flex-1">
<span className="text-xs font-mono text-gray-400 mb-1 block">STEP 05</span>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Delivery</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                                    Sit back and relax. We handle the export/import clearance. Local delivery in Thailand is handled by Kerry Express, Flash, or our private courier for large items.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden" id="page-rates">
<div className="bg-gray-50 border-b border-gray-200 pt-24 pb-16">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Shipping Rates</h1>
<p className="text-gray-500 max-w-2xl">Transparent pricing. No hidden volume weight charges for small boxes.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16">

<div>
<h3 className="text-lg font-semibold text-gray-900 mb-6">Price List (Per KG)</h3>
<div className="overflow-hidden rounded-lg border border-gray-200">
<table className="w-full text-sm text-left">
<thead className="bg-gray-50 text-gray-500 font-medium">
<tr>
<th className="px-6 py-3">Weight Class</th>
<th className="px-6 py-3">General Goods</th>
<th className="px-6 py-3">Sensitive Items*</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="bg-white">
<td className="px-6 py-4 font-medium text-gray-900">0.1 - 5.0 kg</td>
<td className="px-6 py-4 text-gray-500">฿250 /kg</td>
<td className="px-6 py-4 text-gray-500">฿280 /kg</td>
</tr>
<tr className="bg-white">
<td className="px-6 py-4 font-medium text-gray-900">5.1 - 20.0 kg</td>
<td className="px-6 py-4 text-gray-500">฿220 /kg</td>
<td className="px-6 py-4 text-gray-500">฿250 /kg</td>
</tr>
<tr className="bg-white">
<td className="px-6 py-4 font-medium text-gray-900">20.1 kg +</td>
<td className="px-6 py-4 text-gray-500">฿180 /kg</td>
<td className="px-6 py-4 text-gray-500">฿220 /kg</td>
</tr>
</tbody>
</table>
</div>
<p className="text-xs text-gray-400 mt-4">*Sensitive Items: Liquids, Batteries, Cosmetics, Food.</p>
<p className="text-xs text-gray-400 mt-1">Min. charge 1kg.</p>
<h3 className="text-lg font-semibold text-gray-900 mt-12 mb-4">Service Fees</h3>
<ul className="space-y-3">
<li className="flex justify-between text-sm border-b border-gray-100 pb-2">
<span className="text-gray-600">Buy-for-me Fee</span>
<span className="font-medium">5% of item value (Min ฿200)</span>
</li>
<li className="flex justify-between text-sm border-b border-gray-100 pb-2">
<span className="text-gray-600">Repacking</span>
<span className="font-medium text-green-600">Free</span>
</li>
<li className="flex justify-between text-sm border-b border-gray-100 pb-2">
<span className="text-gray-600">Consolidation</span>
<span className="font-medium text-green-600">Free (up to 5 boxes)</span>
</li>
<li className="flex justify-between text-sm border-b border-gray-100 pb-2">
<span className="text-gray-600">Insurance</span>
<span className="font-medium">Optional 3% cover</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl shadow-gray-100/50 h-fit sticky top-24">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="lucide:calculator"></iconify-icon>
                        Cost Estimator
                    </h3>
<div className="space-y-6">

<div>
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 block">Shipping Mode</label>
<div className="grid grid-cols-2 gap-2 bg-gray-50 p-1 rounded-lg border border-gray-200">
<button className="flex flex-col items-center justify-center py-3 rounded-md bg-white shadow-sm border border-gray-100 transition-all" id="btn-air" onclick="setCalcMode('air')">
<span className="text-sm font-semibold text-gray-900">Air Cargo</span>
<span className="text-[10px] text-gray-400">3-5 Days</span>
</button>
<button className="flex flex-col items-center justify-center py-3 rounded-md text-gray-500 hover:text-gray-900 transition-all" id="btn-sea" onclick="setCalcMode('sea')">
<span className="text-sm font-semibold">Sea Freight</span>
<span className="text-[10px] text-gray-400">20-30 Days</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 block">Weight (KG)</label>
<input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" id="calc-weight" oninput="calculateTotal()" type="number" value="1"/>
</div>
<div>
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 block">Item Value (JPY)</label>
<input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all" id="calc-value" oninput="calculateTotal()" type="number" value="5000"/>
</div>
</div>

<div className="flex items-center justify-between py-2">
<label className="text-sm text-gray-600">Assisted Purchase (5%)</label>
<input className="accent-gray-900 w-4 h-4" id="calc-assist" onchange="calculateTotal()" type="checkbox"/>
</div>

<div className="pt-6 border-t border-gray-100">
<div className="flex items-end justify-between mb-2">
<span className="text-sm text-gray-500">Estimated Total</span>
<span className="text-3xl font-bold text-gray-900 tracking-tight" id="calc-total">฿ 0</span>
</div>
<p className="text-[10px] text-gray-400 text-right">Excluding local Thai delivery fee.</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden" id="page-faq">
<div className="bg-gray-50 border-b border-gray-200 pt-24 pb-16">
<div className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Support &amp; FAQ</h1>
<p className="text-gray-500">We are here to help 24/7.</p>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 py-16">
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-gray-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between font-medium text-gray-900 text-sm">
                            How do I calculate volumetric weight?
                            <span className="transition group-open:rotate-180 text-gray-400"><iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon></span>
</summary>
<p className="text-xs text-gray-500 mt-4 leading-relaxed">
                            For Air Cargo, we primarily charge based on Actual Weight. However, if the package is exceptionally large but light (e.g., a giant plush toy), we may apply volumetric weight (L x W x H / 5000). For standard boxes, Actual Weight usually applies.
                        </p>
</details>
<details className="group bg-white rounded-lg border border-gray-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between font-medium text-gray-900 text-sm">
                            What items are prohibited?
                            <span className="transition group-open:rotate-180 text-gray-400"><iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon></span>
</summary>
<p className="text-xs text-gray-500 mt-4 leading-relaxed">
                            Flammable liquids, sprays, high-capacity lithium batteries (loose), drugs, weapons, and counterfeit currency are strictly prohibited. Alcohol requires a special permit.
                        </p>
</details>
<details className="group bg-white rounded-lg border border-gray-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between font-medium text-gray-900 text-sm">
                            Can you declare a lower value?
                            <span className="transition group-open:rotate-180 text-gray-400"><iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon></span>
</summary>
<p className="text-xs text-gray-500 mt-4 leading-relaxed">
                            We ship via a cargo clearace channel. The price you pay includes import duties handling. You do not need to worry about declaring values for customs, we handle the manifest.
                        </p>
</details>
</div>
<div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white text-center">
<h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
<p className="text-gray-400 text-sm mb-6">Chat with our support team on LINE.</p>
<button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full text-sm transition-colors inline-flex items-center gap-2">
<iconify-icon icon="lucide:message-circle" width="18"></iconify-icon> Add Line Friend
                    </button>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-gray-200 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-semibold tracking-tight text-gray-900">JP<span className="text-gray-400 font-normal">LOGISTICS</span></div>
<div className="flex gap-6 text-xs text-gray-500">
<a className="hover:text-gray-900" href="#">Privacy</a>
<a className="hover:text-gray-900" href="#">Terms</a>
<a className="hover:text-gray-900" href="#">Sitemap</a>
</div>
<div className="text-[10px] text-gray-400">© 2024 JP-TH Logistics.</div>
</div>
</footer>


    </>
  );
}
