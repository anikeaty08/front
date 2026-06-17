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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
25: '#FCFCFD',
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
}
}
}
}



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
      

<aside className="w-64 bg-gray-25 border-r border-gray-200 hidden md:flex flex-col flex-shrink-0 z-20">
<div className="p-6">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium tracking-tight text-gray-900">Syncgram</span>
</div>
<nav className="space-y-8">
<div>
<p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">General</p>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="home" strokeWidth="1.5"></i>
                            Overview
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="package" strokeWidth="1.5"></i>
                            Products
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="users" strokeWidth="1.5"></i>
                            Customers
                        </a>
</div>
</div>
<div>
<p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">Financials</p>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-base font-medium text-gray-900 bg-gray-100 rounded-lg transition-colors" href="#">
<i className="w-5 h-5 text-gray-900" data-lucide="wallet" strokeWidth="1.5"></i>
                            Accounts
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
                            Transactions
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="file-text" strokeWidth="1.5"></i>
                            Invoice
                        </a>
</div>
</div>
<div>
<p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">Settings</p>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="user" strokeWidth="1.5"></i>
                            Profile
                        </a>
</div>
</div>
</nav>
</div>
<div className="mt-auto p-6 border-t border-gray-200">
<a className="flex items-center gap-3 px-2 py-2 text-base font-medium text-gray-500 hover:text-gray-900 transition-colors group" href="#">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="log-out" strokeWidth="1.5"></i>
                Logout
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 md:px-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<h1 className="text-lg font-medium text-gray-900 tracking-tight">Accounts</h1>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-gray-200">
<img alt="Profile" className="w-8 h-8 rounded-full border border-gray-200" src="https://ui-avatars.com/api/?name=Omotola+Joseph&amp;background=random"/>
<span className="text-sm font-medium text-gray-700 hidden md:block">Omotola Joseph</span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
<div className="max-w-6xl mx-auto space-y-10">

<section className="space-y-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-base font-medium text-gray-500">Available Balance</span>
<div className="group relative cursor-help">
<i className="w-4 h-4 text-gray-400" data-lucide="info" strokeWidth="1.5"></i>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        Funds you can withdraw right now
                                    </div>
</div>
</div>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium tracking-tight text-gray-900">$12,842.00</span>
<span className="text-xl text-gray-400 font-normal">USD</span>
</div>
<div className="flex items-center gap-3 mt-2">
<span className="text-lg text-gray-500">≈ ₦15,340,000</span>
<button className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded hover:bg-indigo-100 transition-colors">
                                    Show in NGN
                                </button>
</div>
</div>

<div className="flex flex-wrap items-center gap-3">
<button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-base font-medium shadow-sm shadow-indigo-200 transition-all active:scale-[0.98]">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
                                Withdraw Funds
                            </button>
<button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg text-base font-medium shadow-sm transition-all active:scale-[0.98]">
<i className="w-4 h-4" data-lucide="refresh-cw" strokeWidth="1.5"></i>
                                Convert
                            </button>
<button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg text-base font-medium shadow-sm transition-all active:scale-[0.98]">
<i className="w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i>
                                Statements
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-2">
<div className="p-2 bg-orange-50 rounded-lg">
<i className="w-5 h-5 text-orange-600" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Clears Dec 2</span>
</div>
<p className="text-sm font-medium text-gray-500 mb-1">Pending Settlement</p>
<p className="text-2xl font-medium tracking-tight text-gray-900">$3,000.00</p>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-2">
<div className="p-2 bg-emerald-50 rounded-lg">
<i className="w-5 h-5 text-emerald-600" data-lucide="bitcoin" strokeWidth="1.5"></i>
</div>
<div className="flex items-center text-emerald-600 text-xs font-medium">
<i className="w-3 h-3 mr-1" data-lucide="trending-up"></i> 7%
                                </div>
</div>
<p className="text-sm font-medium text-gray-500 mb-1">Crypto Balance</p>
<p className="text-2xl font-medium tracking-tight text-gray-900">3,000 <span className="text-lg text-gray-400 font-normal">USDT</span></p>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-2">
<div className="p-2 bg-blue-50 rounded-lg">
<i className="w-5 h-5 text-blue-600" data-lucide="landmark" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-sm font-medium text-gray-500 mb-1">Fiat Balance</p>
<p className="text-2xl font-medium tracking-tight text-gray-900">₦3,000,000</p>
</div>
</div>
</section>
<hr className="border-gray-200"/>

<section>
<div className="flex items-center justify-between mb-5">
<h2 className="text-lg font-medium text-gray-900 tracking-tight">Payout Destinations</h2>
<button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="plus"></i> Add New
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-indigo-300 transition-colors group relative">
<div className="absolute top-5 right-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-gray-100 rounded text-gray-500" title="Test Payout">
<i className="w-4 h-4" data-lucide="zap"></i>
</button>
<button className="p-1.5 hover:bg-gray-100 rounded text-gray-500" title="Remove">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-gray-600" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-base font-medium text-gray-900">Access Bank Plc</h3>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
</div>
<p className="text-sm text-gray-500 mt-0.5">Omotola Joseph Adeniran</p>
</div>
</div>
<div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
<div className="flex items-center gap-2">
<span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">NGN</span>
<span className="text-sm font-mono text-gray-500">•••• 5022</span>
</div>
<div className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                                    Default
                                </div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-indigo-300 transition-colors group relative">
<div className="absolute top-5 right-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-gray-100 rounded text-gray-500" title="Test Payout">
<i className="w-4 h-4" data-lucide="zap"></i>
</button>
<button className="p-1.5 hover:bg-gray-100 rounded text-gray-500" title="Remove">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-gray-600" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-base font-medium text-gray-900">Crypto Wallet</h3>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
</div>
<p className="text-sm text-gray-500 mt-0.5">USDT (Tether)</p>
</div>
</div>
<div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
<div className="flex items-center gap-2">
<span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">TRC20</span>
<span className="text-sm font-mono text-gray-500 truncate max-w-[150px]">T9yB...j8kL</span>
</div>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
                                    Set as Default
                                </button>
</div>
</div>
</div>
</section>
<hr className="border-gray-200"/>

<section>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<h2 className="text-lg font-medium text-gray-900 tracking-tight">Recent Activity</h2>

<div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
<div className="relative">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 w-48 md:w-64 placeholder:text-gray-400" placeholder="Search" type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 bg-white">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i>
                                This Month
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 bg-white">
<i className="w-4 h-4 text-gray-400" data-lucide="download"></i>
                                Export
                            </button>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

<div className="grid grid-cols-12 px-6 py-3 bg-gray-50/50 border-b border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider">
<div className="col-span-2 md:col-span-2">Date</div>
<div className="col-span-6 md:col-span-5">Destination</div>
<div className="col-span-2 md:col-span-3 text-right">Amount</div>
<div className="col-span-2 md:col-span-2 text-right">Status</div>
</div>

<div className="group relative">
<div className="grid grid-cols-12 px-6 py-4 items-center hover:bg-gray-50 transition-colors cursor-pointer">
<div className="col-span-2 md:col-span-2">
<p className="text-sm font-medium text-gray-900">Nov 19</p>
<p className="text-xs text-gray-500">14:20 PM</p>
</div>
<div className="col-span-6 md:col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-indigo-600" data-lucide="arrow-up-right"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Withdrawal to Access Bank</p>
<p className="text-xs text-gray-500">boluwatifedada78@gmail.com</p>
</div>
</div>
<div className="col-span-2 md:col-span-3 text-right">
<p className="text-sm font-medium text-gray-900">-$149.00</p>
<p className="text-xs text-gray-400">Bal: $12,842.00</p>
</div>
<div className="col-span-2 md:col-span-2 flex justify-end">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
                                        Successful
                                    </span>
</div>
</div>
<div className="absolute bottom-0 left-6 right-6 h-px bg-gray-100 group-last:hidden"></div>
</div>

<div className="group relative">
<div className="grid grid-cols-12 px-6 py-4 items-center hover:bg-gray-50 transition-colors cursor-pointer">
<div className="col-span-2 md:col-span-2">
<p className="text-sm font-medium text-gray-900">Nov 19</p>
<p className="text-xs text-gray-500">09:15 AM</p>
</div>
<div className="col-span-6 md:col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-red-600" data-lucide="alert-circle"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Withdrawal to USDT Wallet</p>
<p className="text-xs text-red-500">Network connection timeout</p>
</div>
</div>
<div className="col-span-2 md:col-span-3 text-right">
<p className="text-sm font-medium text-gray-900">$149.00</p>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 mt-0.5">Retry</button>
</div>
<div className="col-span-2 md:col-span-2 flex justify-end">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20">
                                        Failed
                                    </span>
</div>
</div>
<div className="absolute bottom-0 left-6 right-6 h-px bg-gray-100 group-last:hidden"></div>
</div>

<div className="group relative">
<div className="grid grid-cols-12 px-6 py-4 items-center hover:bg-gray-50 transition-colors cursor-pointer">
<div className="col-span-2 md:col-span-2">
<p className="text-sm font-medium text-gray-900">Nov 18</p>
<p className="text-xs text-gray-500">16:45 PM</p>
</div>
<div className="col-span-6 md:col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-indigo-600" data-lucide="arrow-up-right"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Withdrawal to Access Bank</p>
<p className="text-xs text-gray-500">boluwatifedada78@gmail.com</p>
</div>
</div>
<div className="col-span-2 md:col-span-3 text-right">
<p className="text-sm font-medium text-gray-900">-$1,200.00</p>
<p className="text-xs text-gray-400">Bal: $12,991.00</p>
</div>
<div className="col-span-2 md:col-span-2 flex justify-end">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
                                        Successful
                                    </span>
</div>
</div>
<div className="absolute bottom-0 left-6 right-6 h-px bg-gray-100 group-last:hidden"></div>
</div>

<div className="group relative">
<div className="grid grid-cols-12 px-6 py-4 items-center hover:bg-gray-50 transition-colors cursor-pointer">
<div className="col-span-2 md:col-span-2">
<p className="text-sm font-medium text-gray-900">Nov 18</p>
<p className="text-xs text-gray-500">11:00 AM</p>
</div>
<div className="col-span-6 md:col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-indigo-600" data-lucide="arrow-up-right"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Withdrawal to Access Bank</p>
<p className="text-xs text-gray-500">boluwatifedada78@gmail.com</p>
</div>
</div>
<div className="col-span-2 md:col-span-3 text-right">
<p className="text-sm font-medium text-gray-900">-$500.00</p>
<p className="text-xs text-gray-400">Bal: $14,191.00</p>
</div>
<div className="col-span-2 md:col-span-2 flex justify-end">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
                                        Successful
                                    </span>
</div>
</div>
</div>
</div>
</section>
<div className="h-10"></div> 
</div>
</div>
</main>


    </>
  );
}
