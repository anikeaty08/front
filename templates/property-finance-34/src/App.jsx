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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
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
      
<div className="flex h-screen w-full overflow-hidden">

<aside className="w-72 bg-white border-r border-gray-200 flex flex-col hidden md:flex shrink-0">

<div className="p-5 pb-2">
<div className="flex items-center gap-3 mb-6">
<div className="bg-gray-900 text-white p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<span className="font-semibold text-base tracking-tight text-gray-900">BrickFlat Manager</span>
</div>
<button className="w-full flex items-center justify-between p-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white border border-gray-200 rounded-md flex items-center justify-center text-gray-500">
<i className="w-4 h-4" data-lucide="briefcase"></i>
</div>
<div className="text-left">
<p className="text-sm font-medium text-gray-900">Acme Inc.</p>
<p className="text-xs text-gray-500">Core workspace</p>
</div>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevrons-up-down"></i>
</button>
</div>

<div className="px-5 mb-4">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-gray-400" placeholder="Search..." type="text"/>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-3 space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="home"></i>
                    Home
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="building"></i>
                    Properties
                </a>

<div className="pt-2 pb-1">
<button className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 rounded-md bg-gray-50/50">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="pie-chart"></i>
                            Finance
                        </div>
<i className="w-3.5 h-3.5 text-gray-500" data-lucide="chevron-down"></i>
</button>
<div className="pl-10 pr-2 mt-1 space-y-0.5">
<a className="flex items-center justify-between px-2 py-1.5 text-sm font-medium text-gray-900 rounded bg-white shadow-sm ring-1 ring-gray-200" href="#">
<span>Incomes</span>
<i className="w-3.5 h-3.5 text-blue-600" data-lucide="plus"></i>
</a>
<a className="flex items-center justify-between px-2 py-1.5 text-sm font-medium text-gray-500 rounded hover:bg-gray-50 hover:text-gray-900" href="#">
<span>Expenses</span>
</a>
<a className="flex items-center justify-between px-2 py-1.5 text-sm font-medium text-gray-500 rounded hover:bg-gray-50 hover:text-gray-900" href="#">
<span>Transactions Log</span>
</a>
</div>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                    Users
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="message-square"></i>
                    Chat
                    <span className="ml-auto bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">New</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings"></i>
                    Settings
                </a>
</nav>

<div className="p-4 border-t border-gray-200 space-y-4">

<div className="bg-gray-50 border border-gray-200 rounded-xl p-3 relative overflow-hidden group">
<div className="relative z-10">
<h4 className="text-sm font-semibold text-gray-900 mb-1">Upgrade to Pro 🚀</h4>
<p className="text-xs text-gray-500 mb-3 leading-relaxed">Get 1 month free and unlock all the features of the pro plan.</p>
<button className="w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm">
                            Upgrade
                        </button>
</div>
</div>

<div className="flex items-center gap-3 pt-1 cursor-pointer">
<div className="relative">
<img alt="Profile" className="w-9 h-9 rounded-full object-cover border border-gray-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Kate Moore</p>
<p className="text-xs text-gray-500 truncate">Customer Support</p>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevrons-up-down"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-white md:bg-gray-50 relative">

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8 shrink-0">
<div className="flex items-center gap-2 md:hidden">
<i className="w-5 h-5 text-gray-600" data-lucide="menu"></i>
<span className="font-semibold text-gray-900">BrickFlat</span>
</div>

<nav className="hidden md:flex items-center text-sm font-medium text-gray-500">
<span className="hover:text-gray-900 cursor-pointer transition-colors">Finance</span>
<i className="w-4 h-4 mx-2 text-gray-400" data-lucide="chevron-right"></i>
<span className="hover:text-gray-900 cursor-pointer transition-colors">Incomes</span>
<i className="w-4 h-4 mx-2 text-gray-400" data-lucide="chevron-right"></i>
<span className="text-gray-900 px-2 py-0.5 bg-gray-100 rounded-md">New Entry</span>
</nav>
<div className="flex items-center gap-4">
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="help-circle"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 flex justify-center">
<div className="w-full max-w-3xl">
<div className="mb-6 flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Add Income</h1>
<p className="text-base text-gray-500 mt-1">Record a new revenue source for your properties.</p>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

<div className="p-6 md:p-8 space-y-8">

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="amount">Amount Received</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="text-gray-400 text-lg md:text-xl font-medium">$</span>
</div>
<input className="block w-full pl-10 pr-24 py-4 text-3xl font-semibold text-gray-900 placeholder-gray-300 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" id="amount" name="amount" placeholder="0.00" type="number"/>
<div className="absolute inset-y-0 right-0 flex items-center">
<label className="sr-only" htmlFor="currency">Currency</label>
<select className="h-full py-0 pl-3 pr-8 border-l border-gray-200 bg-gray-50 text-gray-600 text-sm font-medium rounded-r-lg focus:ring-0 focus:outline-none hover:bg-gray-100 cursor-pointer" id="currency" name="currency">
<option>USD</option>
<option>EUR</option>
<option>GBP</option>
</select>
</div>
</div>
</div>
<hr className="border-gray-100"/>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700">Category</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="tag"></i>
<select className="block w-full pl-10 pr-10 py-2.5 text-base border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 appearance-none shadow-sm transition-shadow">
<option disabled="" selected="" value="">Select category</option>
<option value="airbnb">Airbnb Reservation</option>
<option value="rent">Long-term Rent</option>
<option value="service">Service Charge</option>
<option value="deposit">Security Deposit</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700">Date</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="calendar"></i>
<input className="block w-full pl-10 pr-4 py-2.5 text-base border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition-shadow" type="date" value="2023-10-24"/>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700">Target Wallet</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="wallet"></i>
<select className="block w-full pl-10 pr-10 py-2.5 text-base border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 appearance-none shadow-sm transition-shadow">
<option value="main">Main Operational Wallet</option>
<option value="savings">Reserve / Savings</option>
<option value="stripe">Stripe Connect</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700 flex justify-between">
                                        Account
                                        <span className="text-xs font-normal text-gray-400">Optional</span>
</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="credit-card"></i>
<select className="block w-full pl-10 pr-10 py-2.5 text-base border border-gray-200 rounded-lg bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 appearance-none shadow-sm transition-shadow">
<option selected="" value="">No specific account</option>
<option value="chase">Chase Checking ****4242</option>
<option value="wise">Wise Business</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="bg-gray-50/50 rounded-lg p-5 border border-gray-100 space-y-4">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Attribution</h3>
<div className="w-full">

<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700">Property</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="home"></i>
<select className="block w-full pl-10 pr-10 py-2.5 text-base border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 appearance-none shadow-sm transition-shadow">
<option disabled="" selected="" value="">Select property from Acme Inc...</option>
<option value="p1">Sunset Blvd Apt 4B</option>
<option value="p2">The Lofts at Downtown</option>
<option value="p3">Seaside Villa #2</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-medium text-gray-700 flex justify-between">
                                    Description / Notes
                                    <span className="text-xs font-normal text-gray-400">0/500</span>
</label>
<textarea className="block w-full px-4 py-3 text-base border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm resize-none transition-shadow" placeholder="e.g. Airbnb payout for October reservation #AB234" rows="3"></textarea>
</div>

<div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="bg-blue-50 p-2 rounded-full mb-3 group-hover:bg-blue-100 transition-colors">
<i className="w-5 h-5 text-blue-600" data-lucide="upload-cloud"></i>
</div>
<p className="text-sm font-medium text-gray-900">Click to upload invoice</p>
<p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or PDF (max. 10MB)</p>
</div>
</div>

<div className="bg-gray-50 px-6 md:px-8 py-4 border-t border-gray-200 flex items-center justify-end gap-3">
<button className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all">
                                Cancel
                            </button>
<button className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i>
                                Save Income
                            </button>
</div>
</div>

<div className="h-10"></div>
</div>
</div>
</main>
</div>


    </>
  );
}
