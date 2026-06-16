import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons({
        attrs: {
          'stroke-width': 1.5
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen w-full">

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 overflow-y-auto hidden md:flex">

<div className="h-16 flex items-center px-6 border-b border-slate-100 shrink-0">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white font-medium text-xs">K</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Koli.</span>
</div>
</div>

<nav className="flex-1 px-3 py-6 space-y-8">

<div>
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3 px-3">Menu</h4>
<ul className="space-y-1">
<li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="layout-dashboard"></i> Dashboard</a></li>
<li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="shopping-cart"></i> Orders &amp; Purchases</a></li>
<li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="truck"></i> Logistics &amp; Cargos</a></li>
<li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-slate-100 text-slate-900" href="#"><i className="w-4 h-4 text-purple-600" data-lucide="users"></i> Clients &amp; Wallets</a></li>
<li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="sparkles"></i> Inspiration Catalog</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3 px-3">Finance</h4>
<ul className="space-y-1">
<li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="wallet"></i> Treasury</a></li>
<li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="pie-chart"></i> Net Margin</a></li>
<li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="bar-chart-2"></i> Data &amp; Insights</a></li>
<li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="receipt"></i> Relay Billing</a></li>
<li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i> Relay Directory</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3 px-3">System</h4>
<ul className="space-y-1">
<li><a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="life-buoy"></i> Quality &amp; Support</a></li>
</ul>
</div>
</nav>

<div className="p-4 border-t border-slate-100 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="settings"></i> Settings &amp; Rates</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors" href="#"><i className="w-4 h-4 text-slate-400" data-lucide="log-out"></i> Log out</a>
</div>
</aside>

<div className="flex-1 flex flex-col h-screen overflow-hidden">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 shrink-0 z-10">
<h1 className="text-xl font-semibold tracking-tight text-slate-900 hidden sm:block">Client Directory &amp; Wallet Control</h1>
<div className="flex items-center gap-4 ml-auto">
<div className="relative hidden lg:block w-72">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-300 focus:ring-1 focus:ring-slate-300 shadow-sm placeholder:text-slate-400 transition-shadow" placeholder="Search by Name, Phone, or ID" type="text"/>
</div>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm transition-colors whitespace-nowrap">
<i className="w-4 h-4" data-lucide="plus"></i> Add Manual Credit
                    </button>
<div className="w-px h-6 bg-slate-200 mx-2 hidden sm:block"></div>
<button className="text-slate-400 hover:text-slate-600 relative transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="flex items-center gap-2 cursor-pointer ml-2">
<img alt="Admin" className="w-8 h-8 rounded-full border border-slate-200 object-cover" src="https://i.pravatar.cc/150?u=khadija"/>
<span className="text-sm font-medium text-slate-900 hidden md:block">Khadija W.</span>
<i className="w-4 h-4 text-slate-400 hidden md:block" data-lucide="chevron-down"></i>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-[1400px] mx-auto">

<a className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 mb-6 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Orders
                    </a>

<div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center shadow-sm mb-8">

<div className="flex items-center gap-5">
<div className="relative shrink-0">
<img alt="Amina Ndiaye" className="w-16 h-16 rounded-full object-cover shadow-sm ring-1 ring-slate-100" src="https://i.pravatar.cc/150?u=amina"/>
<div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<div className="flex items-center gap-3 mb-1.5">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Amina Ndiaye</h2>
<span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-0.5 rounded-md">#KLI-8472</span>
<span className="bg-green-50 text-green-700 text-xs font-medium px-2 py-0.5 rounded-md border border-green-200/50">Active</span>
</div>
<div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
<span className="flex items-center gap-1.5 hover:text-slate-900 cursor-pointer transition-colors"><i className="w-3.5 h-3.5" data-lucide="phone"></i> +221 77 123 45 67</span>
<span className="flex items-center gap-1.5 hover:text-slate-900 cursor-pointer transition-colors"><i className="w-3.5 h-3.5" data-lucide="mail"></i> amina.n@example.com</span>
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Dakar, Plateau</span>
</div>
</div>
</div>

<div className="flex items-center gap-5 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100 shrink-0 w-full lg:w-auto">
<div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="wallet"></i> Wallet Balance
                                </div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tight text-slate-900">145,000</span>
<span className="text-sm font-medium text-slate-500">FCFA</span>
</div>
</div>
<div className="h-10 w-px bg-slate-200 mx-1 hidden sm:block"></div>
<div className="flex flex-col gap-2 w-full sm:w-auto">
<button className="w-full bg-slate-900 text-white text-xs font-medium px-3 py-2 rounded-md flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> Add Funds
                                </button>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-3">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Order Details: #KOLI-8942</h2>
<span className="bg-red-50 text-red-600 border border-red-200/50 text-xs font-medium px-2 py-0.5 rounded-md">Urgent - To Buy</span>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">

<div className="xl:col-span-2 flex flex-col gap-8">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900">Products (2)</h3>
<button className="text-xs font-medium text-purple-600 hover:text-purple-700 flex items-center gap-1.5 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="refresh-cw"></i> Sync All Prices
                                    </button>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row gap-5 relative shadow-sm">

<div className="absolute top-4 right-4 sm:static sm:order-last sm:ml-auto flex flex-col items-end justify-between">
<span className="text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-md mb-2">Qty: 1</span>
<div className="text-right mt-auto">
<div className="text-xs text-slate-400 mb-0.5">Original: <span className="line-through">$18.50</span> $15.00</div>
<div className="text-base font-semibold text-slate-900 tracking-tight">9,150 FCFA</div>
</div>
</div>

<div className="relative shrink-0">
<img alt="Dress" className="w-20 h-20 rounded-lg object-cover border border-slate-100 bg-slate-50" src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>

<div className="flex flex-col flex-1">
<h4 className="text-sm font-medium text-slate-900">Women's Summer Floral Print Midi Dress</h4>
<div className="flex items-center gap-x-3 gap-y-1 text-xs text-slate-500 mt-1 flex-wrap">
<span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>Size: M</span>
<span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>Color: Navy Blue</span>
<span className="flex items-center gap-1.5"><i className="w-3 h-3 text-slate-400" data-lucide="scale"></i> 0.3kg</span>
<span className="text-slate-300">|</span>
<a className="text-purple-600 hover:underline flex items-center gap-1 font-medium" href="#"><i className="w-3 h-3" data-lucide="link"></i> Shein Link</a>
<span className="flex items-center gap-1 ml-1"><i className="w-3 h-3" data-lucide="refresh-cw"></i> Auto-Fetch</span>
</div>

<div className="mt-4 inline-flex bg-slate-100/80 p-1 rounded-lg border border-slate-200/50 self-start items-center">
<button className="px-3 py-1.5 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900 transition-colors">Not Started</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-md bg-white text-slate-900 shadow-sm ring-1 ring-slate-900/5 transition-all">Purchased</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900 transition-colors">At Forwarder</button>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row gap-5 relative shadow-sm">

<div className="absolute top-4 right-4 sm:static sm:order-last sm:ml-auto flex flex-col items-end justify-between">
<span className="text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-md mb-2">Qty: 2</span>
<div className="text-right mt-auto">
<div className="text-xs text-slate-400 mb-0.5">Original: $22.00 × 2</div>
<div className="text-base font-semibold text-slate-900 tracking-tight">26,840 FCFA</div>
</div>
</div>

<div className="relative shrink-0">
<img alt="Watch" className="w-20 h-20 rounded-lg object-cover border border-slate-100 p-2 bg-slate-50" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-green-200 whitespace-nowrap shadow-sm">
                                            Purchased
                                        </div>
</div>

<div className="flex flex-col flex-1">
<h4 className="text-sm font-medium text-slate-900">Smart Watch Series 8 Alternative</h4>
<div className="flex items-center gap-x-3 gap-y-1 text-xs text-slate-500 mt-1 flex-wrap">
<span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>Size: 44mm</span>
<span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>Color: Black</span>
<span className="flex items-center gap-1.5"><i className="w-3 h-3 text-slate-400" data-lucide="scale"></i> 0.1kg</span>
<span className="text-slate-300">|</span>
<a className="text-purple-600 hover:underline flex items-center gap-1 font-medium" href="#"><i className="w-3 h-3" data-lucide="link"></i> Alibaba Link</a>
</div>

<div className="mt-4 inline-flex bg-slate-100/80 p-1 rounded-lg border border-slate-200/50 self-start items-center">
<button className="px-3 py-1.5 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900 transition-colors">Not Started</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-md bg-white text-slate-900 shadow-sm ring-1 ring-slate-900/5 transition-all">Purchased</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-md text-slate-500 hover:text-slate-900 transition-colors">At Forwarder</button>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-medium text-slate-900 flex items-center gap-2 mb-4">
<i className="w-4 h-4 text-slate-400" data-lucide="package"></i> Logistics Assignment
                                </h3>
<div className="space-y-2">
<label className="text-xs text-slate-500 font-medium">Assign to Cargo Flight / Shipment Lot</label>
<div className="relative w-full md:w-2/3">
<select className="w-full appearance-none bg-white border border-slate-200 rounded-lg py-2.5 pl-3 pr-10 text-sm text-slate-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 cursor-pointer shadow-sm transition-shadow">
<option>Lot KOLI-06 (Loading, Departs 15 Oct)</option>
<option>Lot KOLI-07 (Scheduled, Departs 22 Oct)</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
<p className="text-xs text-slate-400 flex items-center gap-1.5 mt-2">
<i className="w-3.5 h-3.5" data-lucide="info"></i> Items will be expected at the forwarder's warehouse before lot departure.
                                    </p>
</div>
</div>

<div className="bg-white border border-orange-200 rounded-xl overflow-hidden shadow-sm">
<div className="px-5 py-4 border-b border-orange-100 bg-orange-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<h3 className="text-base font-medium text-orange-800 flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="shopping-cart"></i> Abandoned Cart Items
                                    </h3>
<button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 shadow-sm transition-colors">
<i className="w-4 h-4" data-lucide="message-circle"></i> Notify via WhatsApp
                                    </button>
</div>
<div className="p-5">
<div className="flex flex-col sm:flex-row gap-5 relative items-center">
<div className="relative shrink-0">
<img alt="Shoes" className="w-16 h-16 rounded-lg object-cover border border-slate-200 shadow-sm" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<div className="flex flex-col flex-1 w-full text-center sm:text-left">
<h4 className="text-sm font-medium text-slate-900">Nike Air Max 270 React</h4>
<div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-500 mt-1">
<span>Size: 42</span>
<span className="text-slate-300">•</span>
<span>Color: White/Black</span>
<span className="text-slate-300">•</span>
<span>Added 2 days ago</span>
</div>
</div>
<div className="text-base font-semibold text-slate-900 tracking-tight shrink-0">
                                            85,000 FCFA
                                        </div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col">
<div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
<h3 className="text-base font-medium text-slate-900 flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="message-square"></i> Message Customer
                                    </h3>
<span className="text-[10px] font-semibold text-green-700 bg-green-50 border border-green-200/50 px-2 py-1 rounded flex items-center gap-1.5">
<i className="w-3 h-3" data-lucide="message-circle"></i> WHATSAPP
                                    </span>
</div>
<div className="p-5">
<textarea className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 min-h-[120px] resize-none shadow-sm placeholder:text-slate-400" placeholder="Type your message here..."></textarea>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-4">
<div className="flex flex-wrap items-center gap-2">
<span className="text-xs text-slate-500 font-medium">Templates:</span>
<button className="text-xs font-medium border border-slate-200 text-slate-600 rounded-md px-2.5 py-1.5 hover:bg-slate-50 transition-colors">Purchase Confirmed</button>
<button className="text-xs font-medium border border-slate-200 text-slate-600 rounded-md px-2.5 py-1.5 hover:bg-slate-50 transition-colors">Item Out of Stock</button>
<button className="text-xs font-medium border border-slate-200 text-slate-600 rounded-md px-2.5 py-1.5 hover:bg-slate-50 transition-colors">Shipping Update</button>
</div>
<button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 shadow-sm transition-colors shrink-0">
<i className="w-4 h-4" data-lucide="send"></i> Send Message
                                        </button>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<h3 className="text-base font-medium text-slate-900 flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="history"></i> Past Orders &amp; Activity
                                    </h3>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">View All</button>
</div>
<div className="p-5 flex flex-col gap-6">

<div className="flex gap-4 relative">
<div className="absolute left-[15px] top-8 bottom-[-24px] w-px bg-slate-200"></div>
<div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 z-10 text-blue-600 shadow-sm">
<i className="w-4 h-4" data-lucide="package-check"></i>
</div>
<div className="flex-1 pt-1.5">
<p className="text-sm text-slate-900"><span className="font-medium">Order #KOLI-8472</span> marked as Delivered</p>
<div className="bg-white border border-slate-200 rounded-lg p-3 mt-3 flex items-center gap-4 shadow-sm">
<img className="w-10 h-10 rounded-md border border-slate-100 object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;q=80&amp;w=60&amp;h=60"/>
<div>
<div className="text-sm font-medium text-slate-900">Nike Air Max 270 React</div>
<div className="text-xs text-slate-500 mt-0.5">Purchased for 85,000 FCFA</div>
</div>
</div>
<div className="text-xs font-medium text-slate-400 mt-3">Oct 24, 2023 at 14:30</div>
</div>
</div>

<div className="flex gap-4 relative">
<div className="absolute left-[15px] top-8 bottom-[-24px] w-px bg-slate-200"></div>
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 z-10 text-slate-500 shadow-sm">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
</div>
<div className="flex-1 pt-1.5">
<p className="text-sm text-slate-900">Added <span className="font-medium">Women's Summer Dress</span> to cart</p>
<div className="text-xs font-medium text-slate-400 mt-2">Oct 22, 2023 at 09:15</div>
</div>
</div>

<div className="flex gap-4 relative">
<div className="w-8 h-8 rounded-full bg-green-50 border border-green-100 flex items-center justify-center shrink-0 z-10 text-green-600 shadow-sm">
<i className="w-4 h-4" data-lucide="wallet"></i>
</div>
<div className="flex-1 pt-1.5">
<p className="text-sm text-slate-900">Wallet topped up via <span className="font-medium">Orange Money</span></p>
<p className="text-sm font-medium text-green-600 mt-1">+50,000 FCFA</p>
<div className="text-xs font-medium text-slate-400 mt-2">Oct 20, 2023 at 11:00</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="px-5 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50">
<h3 className="text-base font-medium text-slate-900 flex items-center gap-2">
<i className="w-4 h-4 text-purple-500" data-lucide="users"></i> Referral Program
                                    </h3>
<span className="bg-white text-slate-900 border border-slate-200 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm">
                                        Total Earned: <span className="text-green-600">24,000 FCFA</span>
</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap min-w-[600px]">
<thead className="bg-white border-b border-slate-100 text-xs text-slate-500 uppercase tracking-wider">
<tr>
<th className="px-5 py-4 font-medium">Referred User</th>
<th className="px-5 py-4 font-medium">Date Joined</th>
<th className="px-5 py-4 font-medium">Status</th>
<th className="px-5 py-4 font-medium text-right">Reward Earned</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center text-xs font-medium text-indigo-700 border border-indigo-100">FD</div>
<span className="text-slate-900 font-medium">Fatou Diop</span>
</div>
</td>
<td className="px-5 py-4 text-slate-500">Oct 15, 2023</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/50">Active Buyer</span>
</td>
<td className="px-5 py-4 text-right text-slate-900 font-medium">2,000 FCFA</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600 border border-slate-200">MS</div>
<span className="text-slate-900 font-medium">Moussa Sow</span>
</div>
</td>
<td className="px-5 py-4 text-slate-500">Oct 10, 2023</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/50">Registered</span>
</td>
<td className="px-5 py-4 text-right text-slate-400 font-medium italic">Pending First Order</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="flex flex-col gap-6 w-full">

<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h3 className="text-sm font-medium text-slate-900 flex items-center gap-2 mb-6">
<i className="w-4 h-4 text-slate-400" data-lucide="receipt"></i> Billing Summary
                                </h3>
<div className="space-y-4 text-sm">
<div className="flex justify-between items-center text-slate-600">
<span>Items Subtotal</span>
<span className="font-medium text-slate-900">$59.00</span>
</div>
<div className="flex justify-between items-center text-slate-600">
<span>Exchange Rate</span>
<span className="font-medium text-slate-900">× 610</span>
</div>
<div className="flex justify-between items-center text-slate-600 pb-4 border-b border-slate-100">
<span>Base FCFA</span>
<span className="font-medium text-slate-900">35,990 FCFA</span>
</div>
<div className="flex justify-between items-center text-slate-600 pt-2">
<span>Service Fee</span>
<div className="flex items-center gap-3">
<input className="w-12 border border-slate-200 rounded-md px-2 py-1 text-sm font-medium text-center focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white shadow-sm transition-shadow" type="text" value="10"/>
<span className="font-medium text-slate-900 text-right leading-tight">3,599<br/><span className="text-[10px] text-slate-500 uppercase">FCFA</span></span>
</div>
</div>
<div className="flex justify-between items-center text-slate-600 pb-4 border-b border-slate-100 mt-2">
<div className="flex flex-col">
<span>Est. Int. Shipping</span>
<span className="text-xs text-slate-400 mt-0.5">~1.2kg via KOLI-06</span>
</div>
<span className="font-medium text-slate-900">9,500 FCFA</span>
</div>
<div className="flex justify-between items-end pt-2">
<span className="text-sm text-slate-500 font-medium">Grand Total</span>
<span className="text-2xl font-semibold tracking-tight text-slate-900">49,089 FCFA</span>
</div>
</div>
<button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm py-3 rounded-lg mt-6 shadow-sm transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="save"></i> Save Order Updates
                                </button>
<div className="text-center text-xs font-medium text-slate-400 mt-4">
                                    Last updated 2 mins ago by Admin
                                </div>
</div>

<div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 shadow-sm">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="info"></i>
<p className="text-sm text-blue-800 leading-relaxed">
                                    Customer wallet has sufficient funds <span className="font-semibold text-blue-900">(145,000 FCFA)</span> to cover this order. Automatic deduction will occur upon marking all items as 'Purchased'.
                                </p>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-slate-900 flex items-center gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="edit-3"></i> Admin Notes
                                    </h3>
<button className="text-xs font-medium text-purple-600 hover:text-purple-700 transition-colors">Save Note</button>
</div>
<textarea className="w-full bg-amber-50/50 border border-amber-100 rounded-lg p-3 text-sm text-slate-700 resize-none h-28 focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-300 placeholder:text-slate-400 shadow-inner transition-shadow" placeholder="Add private notes... e.g. prefers evening delivery"></textarea>
<div className="text-right text-xs font-medium text-slate-400 mt-2">Last edited 2h ago</div>
</div>
</div>
</div>

<div className="h-12"></div>
</div>
</main>
</div>
</div>




    </>
  );
}
