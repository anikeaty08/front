import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5,
                class: "text-current"
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors lg:hidden">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<a className="brand-font text-xl font-semibold tracking-tighter text-indigo-600" href="#">
                        Track it
                    </a>
</div>

<div className="hidden lg:flex items-center gap-1 bg-slate-50/50 p-1.5 rounded-full border border-slate-100">
<a className="px-5 py-2 text-sm font-medium text-slate-900 bg-white rounded-full shadow-sm ring-1 ring-slate-900/5 transition-all" href="#">Dashboard</a>
<a className="px-5 py-2 text-sm font-medium text-slate-500 hover:text-indigo-600 rounded-full hover:bg-white/50 transition-all" href="#">Packages</a>
<a className="px-5 py-2 text-sm font-medium text-slate-500 hover:text-indigo-600 rounded-full hover:bg-white/50 transition-all" href="#">Deals</a>
<a className="px-5 py-2 text-sm font-medium text-slate-500 hover:text-indigo-600 rounded-full hover:bg-white/50 transition-all" href="#">Analytics</a>
</div>

<div className="flex items-center gap-3">
<button className="p-2.5 rounded-full text-slate-500 hover:bg-slate-100 hover:text-indigo-600 transition-colors relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
</button>
<div className="h-9 w-9 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-medium text-sm">
                        JD
                    </div>
</div>
</div>
</div>
</nav>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

<div className="flex flex-col items-center justify-center py-10 lg:py-16 text-center space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Live Tracking Enabled
            </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 max-w-3xl">
                Track everything.<br/>
<span className="text-slate-400">Find the best deals.</span>
</h1>

<div className="w-full max-w-2xl relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" data-lucide="search"></i>
</div>
<input className="block w-full pl-12 pr-24 py-4 bg-white border border-slate-200 rounded-[28px] text-base placeholder-slate-400 text-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]" placeholder="Enter tracking number or product URL..." type="text"/>
<div className="absolute inset-y-0 right-2 flex items-center">
<button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-[20px] transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 space-y-6">

<div className="flex items-center justify-between">
<h2 className="text-xl font-medium text-slate-900 tracking-tight">Active Shipments</h2>
<button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                        View History <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>

<div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow group relative overflow-hidden">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
<i className="w-6 h-6" data-lucide="package"></i>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900">MacBook Pro M3</h3>
<p className="text-sm text-slate-500">UPS • 1Z999AA10123456784</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                                In Transit
                            </span>
<span className="text-sm font-medium text-slate-900">Arriving Tomorrow</span>
</div>
</div>

<div className="relative">
<div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-slate-100">
<div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600 rounded-full transition-all duration-1000" style={{width: '75%'}}></div>
</div>
<div className="flex justify-between text-xs font-medium text-slate-500">
<span className="text-indigo-600">Shipped</span>
<span className="text-indigo-600">In Transit</span>
<span className="text-slate-400">Out for Delivery</span>
<span className="text-slate-400">Delivered</span>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-start gap-4">
<div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 opacity-60 decoration-slate-400">Nike Air Force 1</h3>
<p className="text-sm text-slate-400">FedEx • Delivered Today, 10:42 AM</p>
</div>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full transition-colors">
                                Archive
                             </button>
<button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 rounded-full transition-colors">
                                Details
                             </button>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
<div className="flex items-start gap-4">
<div className="p-3 bg-rose-50 text-rose-600 rounded-2xl">
<i className="w-6 h-6" data-lucide="alert-circle"></i>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900">Sony WH-1000XM5</h3>
<p className="text-sm text-slate-500">DHL • 4239482012</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-100">
                                Delay
                            </span>
</div>
</div>
<p className="text-sm text-slate-500 pl-[4.5rem]">Package held at customs. Updated delivery estimate pending.</p>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="bg-indigo-900 rounded-[24px] p-6 text-white shadow-lg relative overflow-hidden group">

<div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-indigo-800 blur-2xl opacity-50"></div>
<div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-purple-600 blur-2xl opacity-50"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-white/10 backdrop-blur-md rounded-xl">
<i className="w-5 h-5 text-emerald-300" data-lucide="trending-down"></i>
</div>
<span className="text-xs font-medium bg-rose-500 text-white px-2 py-1 rounded-md">-25%</span>
</div>
<h3 className="text-lg font-medium mb-1 tracking-tight">MX Master 3S</h3>
<p className="text-indigo-200 text-sm mb-4">Amazon • Lowest price in 30 days</p>
<div className="flex items-end gap-2 mb-6">
<span className="text-3xl font-semibold tracking-tight">$74.99</span>
<span className="text-indigo-300 line-through text-sm mb-1.5">$99.99</span>
</div>
<button className="w-full py-3 bg-white text-indigo-900 text-sm font-semibold rounded-[16px] hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                            View Deal <i className="w-4 h-4" data-lucide="external-link"></i>
</button>
</div>
</div>

<div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
<h2 className="text-lg font-medium text-slate-900 mb-4 tracking-tight">Watched Items</h2>
<div className="space-y-4">

<div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 hover:bg-slate-50 rounded-2xl transition-colors">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
<i className="w-5 h-5" data-lucide="monitor"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">LG UltraFine 4K</p>
<p className="text-xs text-slate-500">Target</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-slate-900">$299</p>
<p className="text-xs text-emerald-600 font-medium">Stable</p>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 hover:bg-slate-50 rounded-2xl transition-colors">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
<i className="w-5 h-5" data-lucide="coffee"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Nespresso Vertuo</p>
<p className="text-xs text-slate-500">Best Buy</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-slate-900">$145</p>
<p className="text-xs text-rose-500 font-medium">+$10</p>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-slate-700">Auto-buy at target</label>

<label className="m3-toggle relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 flex items-center justify-between px-1">

<span className="transition-transform duration-300 w-full h-full absolute inset-0 rounded-full z-10"></span>
</div>
</label>
</div>
</div>
</div>

<div className="bg-indigo-50 rounded-[24px] p-6 border border-indigo-100/50">
<h3 className="text-sm font-semibold text-indigo-900 uppercase tracking-wider mb-4">Quick Import</h3>
<div className="flex gap-2">
<button className="flex-1 py-3 bg-white border border-indigo-100 text-indigo-700 text-sm font-medium rounded-2xl hover:bg-indigo-50/50 hover:border-indigo-200 transition-all flex flex-col items-center gap-1 shadow-sm">
<i className="w-5 h-5" data-lucide="mail"></i>
                            Gmail
                        </button>
<button className="flex-1 py-3 bg-white border border-indigo-100 text-indigo-700 text-sm font-medium rounded-2xl hover:bg-indigo-50/50 hover:border-indigo-200 transition-all flex flex-col items-center gap-1 shadow-sm">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
                            Amazon
                        </button>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 z-40">
<button className="group flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white pl-4 pr-6 py-4 rounded-[20px] shadow-[0_4px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_6px_24px_rgba(79,70,229,0.4)] transition-all active:scale-95">
<i className="w-6 h-6" data-lucide="plus"></i>
<span className="font-medium text-base">Add Package</span>
</button>
</div>



    </>
  );
}
