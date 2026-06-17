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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex shrink-0 z-10">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<span className="text-xl font-semibold tracking-tighter">KOLI</span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
                Orders
            </a>

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-purple-50 text-purple-700 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                Clients &amp; Wallets
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
                Group Buys
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                Settings
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">AD</div>
<div className="flex flex-col">
<span className="text-sm font-medium">Admin User</span>
<span className="text-xs text-gray-500">admin@koli.com</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 relative">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10">
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Client Directory &amp; Wallet Control</h1>
<div className="flex items-center gap-4">

<div className="relative hidden sm:block w-72">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder-gray-400" placeholder="Search by Name, Phone, or ID" type="text"/>
</div>

<button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm">
<iconify-icon className="text-base" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Add Manual Credit
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-gray-500">Total Customers</span>
<div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">1,250</h2>
</div>
<div className="mt-2 text-xs font-medium text-emerald-600 bg-emerald-50 inline-flex px-2 py-0.5 rounded-full border border-emerald-100">
                            Active: 850
                        </div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-gray-500">Total Wallet Liability</span>
<div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">4.2M</h2>
<span className="text-sm font-medium text-gray-500">FCFA</span>
</div>
<div className="mt-2 text-xs font-medium text-gray-500">
                            Money held in user wallets
                        </div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium text-gray-500">Active Referrals</span>
<div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">45</h2>
</div>
<div className="mt-2 text-xs font-medium text-gray-500">
                            New sign-ups this week
                        </div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="bg-gray-50/80 border-b border-gray-200">
<tr>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Client</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Contact</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Wallet Balance</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Referral Stats</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Last Activity</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right" scope="col">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-gray-50/50 transition-colors bg-purple-50/30">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-700 font-medium text-sm border border-purple-200">
                                                AD
                                            </div>
<div>
<div className="font-medium text-gray-900">Amina D.</div>
<div className="text-xs text-gray-500">ID: KL-8472</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2 text-gray-600">
<span>+221 77 123 45 67</span>
<a className="text-green-500 hover:text-green-600 bg-green-50 p-1 rounded-md transition-colors" href="#" title="WhatsApp">
<iconify-icon className="text-base flex" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                        25,000 FCFA
                                    </td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-1.5 text-gray-700">
<iconify-icon className="text-orange-400" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">12 Friends</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                        Group Buy joined 2h ago
                                    </td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<button className="inline-flex items-center justify-center px-3 py-1.5 border border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                                            Manage
                                        </button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium text-sm border border-gray-200">
                                                MS
                                            </div>
<div>
<div className="font-medium text-gray-900">Moussa S.</div>
<div className="text-xs text-gray-500">ID: KL-9102</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2 text-gray-600">
<span>+221 76 987 65 43</span>
<a className="text-green-500 hover:text-green-600 bg-green-50 p-1 rounded-md transition-colors" href="#" title="WhatsApp">
<iconify-icon className="text-base flex" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-red-700 font-medium bg-red-50 border border-red-100 shadow-[0_0_12px_rgba(239,68,68,0.15)]">
                                            -5,000 FCFA
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-1.5 text-gray-500">
<span className="font-medium">2 Friends</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                        Delivery scheduled yesterday
                                    </td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<button className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                            Manage
                                        </button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium text-sm border border-gray-200">
                                                FK
                                            </div>
<div>
<div className="font-medium text-gray-900">Fatou K.</div>
<div className="text-xs text-gray-500">ID: KL-7731</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2 text-gray-600">
<span>+221 70 444 55 66</span>
<a className="text-gray-400 hover:text-gray-600 p-1 rounded-md transition-colors" href="#" title="Phone">
<iconify-icon className="text-base flex" icon="solar:phone-rounded-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                        0 FCFA
                                    </td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-gray-400 text-sm">
                                            No referrals
                                        </div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                        Account created 3d ago
                                    </td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<button className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                                            Manage
                                        </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between text-sm">
<span className="text-gray-500">Showing 1 to 3 of 1,250 results</span>
<div className="flex gap-2">
<button className="px-3 py-1 border border-gray-200 rounded-md text-gray-400 cursor-not-allowed">Previous</button>
<button className="px-3 py-1 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50">Next</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-gray-900/20 backdrop-blur-[1px] z-40 transition-opacity"></div>
<div className="fixed inset-y-0 right-0 w-full max-w-lg bg-white shadow-2xl z-50 flex flex-col border-l border-gray-200 transform transition-transform translate-x-0">

<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-700 font-semibold text-sm border border-purple-200">
                        AD
                    </div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Amina D.</h3>
<div className="flex items-center gap-2 mt-0.5">
<p className="text-xs text-gray-500">ID: KL-8472</p>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="text-xs font-medium text-emerald-600">Active Customer</span>
</div>
</div>
</div>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
<iconify-icon className="text-xl block" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="grid grid-cols-2 gap-4 bg-gray-50/80 p-4 rounded-xl border border-gray-100">
<div>
<span className="block text-xs font-medium text-gray-500 mb-1.5">WhatsApp Contact</span>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-green-600 transition-colors" href="#">
<iconify-icon className="text-green-500 text-base" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
                            +221 77 123 45 67
                        </a>
</div>
<div>
<span className="block text-xs font-medium text-gray-500 mb-1.5">Favorite Relay Point</span>
<span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900">
<iconify-icon className="text-orange-500 text-base" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                            Relay: Point E, Dakar
                        </span>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Sponsorship Program</h4>
<span className="bg-orange-50 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-100 uppercase tracking-wider">Top Ambassador</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100">
<iconify-icon className="text-xl" icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">12 Friends Referred</p>
<p className="text-xs text-gray-500 mt-0.5">High virality score</p>
</div>
</div>
<button className="px-3 py-1.5 bg-white text-orange-600 border border-orange-200 rounded-lg text-xs font-semibold hover:bg-orange-50 transition-colors shadow-sm">
                            Grant VIP Status
                        </button>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Recent Orders</h4>
<a className="text-xs font-medium text-purple-600 hover:text-purple-700 inline-flex items-center gap-1" href="#">
                            Full History <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="space-y-2">

<div className="flex items-center justify-between p-3 border border-red-100 rounded-xl bg-red-50/30">
<div className="flex items-start gap-3">
<iconify-icon className="text-red-400 text-lg mt-0.5" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-gray-900">Order #89 (Shein Group Buy)</p>
<p className="text-xs text-red-600 mt-0.5 font-medium flex items-center gap-1">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
                                        Complaint Active
                                    </p>
</div>
</div>
<span className="text-sm font-medium text-gray-900">45,000 FCFA</span>
</div>

<div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white">
<div className="flex items-start gap-3">
<iconify-icon className="text-gray-400 text-lg mt-0.5" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-gray-900">Order #62 (Alibaba Electronics)</p>
<p className="text-xs text-emerald-600 mt-0.5 font-medium flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                        Delivered successfully
                                    </p>
</div>
</div>
<span className="text-sm font-medium text-gray-900">12,500 FCFA</span>
</div>
</div>
</div>
<hr className="border-gray-100"/>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Wallet Dashboard</h4>
<span className="text-lg font-semibold text-gray-900 tracking-tight">25,000 FCFA</span>
</div>

<div className="space-y-3">
<div className="flex items-start justify-between">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Order #89 Payment</p>
<p className="text-xs text-gray-500 mt-0.5">Oct 12, 10:30 AM</p>
</div>
</div>
<span className="text-sm font-medium text-gray-900">-45,000 FCFA</span>
</div>
<div className="flex items-start justify-between">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
<iconify-icon icon="solar:arrow-left-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Wave Mobile Money Top-up</p>
<p className="text-xs text-gray-500 mt-0.5">Oct 10, 14:15 PM</p>
</div>
</div>
<span className="text-sm font-medium text-emerald-600">+70,000 FCFA</span>
</div>
</div>
</div>

<div className="bg-gray-50/80 border border-gray-200 rounded-xl p-5 space-y-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-purple-600 text-lg" icon="solar:settings-bold-duotone" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Manual Wallet Adjustment</h4>
</div>
<p className="text-xs text-gray-500">Essential for after-sales service (complaints, refunds, compensation).</p>
<div className="space-y-4 pt-2">

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Adjustment Amount (FCFA)</label>
<div className="relative">

<input className="w-full pl-3 pr-12 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all font-medium" type="number" value="5000"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="text-gray-400 text-sm">FCFA</span>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Reason for Adjustment</label>
<div className="relative">
<select className="w-full pl-3 pr-10 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all appearance-none cursor-pointer">
<option>Refund for weight difference</option>
<option selected="">Compensation / Service issue</option>
<option>Manual Top-up (Cash received)</option>
<option>Correction / Error</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Note / Pattern</label>

<input className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" type="text" value="Compensation torn dress order #89"/>
</div>
</div>

<div className="flex gap-3 pt-2">
<button className="flex-1 px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 hover:border-red-300 transition-colors focus:ring-2 focus:ring-red-500/20 outline-none">
                            Deduct
                        </button>
<button className="flex-[2] flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors shadow-sm focus:ring-2 focus:ring-emerald-500/20 outline-none">
<iconify-icon className="text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Add to Wallet &amp; Notify
                        </button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
