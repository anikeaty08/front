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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<aside className="w-64 flex-shrink-0 bg-[#1c1433] flex flex-col border-r border-slate-800/50 shadow-xl z-20">

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
<i className="w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-[10px] font-medium text-slate-400 uppercase tracking-widest leading-none mb-0.5">Campus Connect</div>
<div className="text-base font-semibold text-white leading-none tracking-tight">StudPay</div>
</div>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="text-base font-normal">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base font-normal">Students</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-base font-normal">Payments</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="scale" strokeWidth="1.5"></i>
<span className="text-base font-normal">Dispute Management</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="refresh-ccw" strokeWidth="1.5"></i>
<span className="text-base font-normal">Reconciliation</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="landmark" strokeWidth="1.5"></i>
<span className="text-base font-normal">Smart Treasury</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="building-2" strokeWidth="1.5"></i>
<span className="text-base font-normal">Bank Integration</span>
</a>

<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white bg-white/10 relative group" href="#">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-purple-500 rounded-r-full"></div>
<i className="w-5 h-5 text-purple-400" data-lucide="briefcase" strokeWidth="1.5"></i>
<span className="text-base font-medium">B2B</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="megaphone" strokeWidth="1.5"></i>
<span className="text-base font-normal">Campaign &amp; Deposit</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="shield-alert" strokeWidth="1.5"></i>
<span className="text-base font-normal">Risk Intelligence</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="message-square" strokeWidth="1.5"></i>
<span className="text-base font-normal">Communication</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
<span className="text-base font-normal">Reports</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="plug" strokeWidth="1.5"></i>
<span className="text-base font-normal">Integrations</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-purple-400 transition-colors" data-lucide="shield" strokeWidth="1.5"></i>
<span className="text-base font-normal">Admin</span>
</a>
</nav>

<div className="p-4 border-t border-white/5 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings" strokeWidth="1.5"></i>
<span className="text-base font-normal">Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="log-out" strokeWidth="1.5"></i>
<span className="text-base font-normal">Log Out</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden">

<div className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
<div className="absolute top-0 right-0 w-[600px] h-[400px] bg-pink-400/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

<header className="h-16 flex items-center justify-between px-8 bg-white/40 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-10">
<div className="flex items-center gap-3 text-sm text-slate-500">
<button className="p-1.5 rounded-md hover:bg-slate-200/50 text-slate-400 transition-colors">
<i className="w-5 h-5" data-lucide="panel-left" strokeWidth="1.5"></i>
</button>
<div className="w-px h-4 bg-slate-300"></div>
<a className="hover:text-slate-800 transition-colors" href="#">Dashboard</a>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-slate-800 font-medium">B2B</span>
</div>
<div className="flex items-center gap-4">

</div>
</header>

<div className="flex-1 overflow-y-auto p-8 relative z-0">
<div className="max-w-7xl mx-auto space-y-6">

<div className="flex items-end justify-between">
<h1 className="text-3xl font-medium tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">B2B Portfolio Overview</h1>
<button className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all font-normal text-sm shadow-sm flex items-center gap-2">
                        Process Bulk Transfer
                    </button>
</div>

<div className="w-full flex flex-col gap-3">

<div className="flex items-center justify-between p-4 rounded-xl bg-red-50/60 border border-red-100/80 backdrop-blur-md shadow-sm">
<div className="flex items-center gap-4">
<div className="relative flex-shrink-0">
<span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
</span>
<div className="h-10 w-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shadow-[0_0_12px_rgba(239,68,68,0.25)]">
<i className="w-5 h-5" data-lucide="file-signature" strokeWidth="1.5"></i>
</div>
</div>
<div>
<p className="text-base font-medium text-red-900">12 contrats d'alternance en attente de signature numérique.</p>
</div>
</div>
<button className="px-4 py-2 rounded-lg bg-white border border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 transition-colors text-sm font-normal shadow-sm whitespace-nowrap">
                            Voir les Contrats
                        </button>
</div>

<div className="flex items-center justify-between p-4 rounded-xl bg-amber-50/60 border border-amber-100/80 backdrop-blur-md shadow-sm">
<div className="flex items-center gap-4">
<div className="relative flex-shrink-0">
<span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
</span>
<div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.25)]">
<i className="w-5 h-5" data-lucide="refresh-ccw" strokeWidth="1.5"></i>
</div>
</div>
<div>
<p className="text-base font-medium text-amber-900">5 virements OPCO non lettrés (Montant total : 124 000 €).</p>
</div>
</div>
<button className="px-4 py-2 rounded-lg bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 hover:border-amber-300 transition-colors text-sm font-normal shadow-sm whitespace-nowrap">
                            Lier les Paiements
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm flex flex-col gap-4 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-purple-600 -mr-6 -mt-6" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-start relative z-10">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total B2B Contract Value</h3>
<div className="p-1.5 bg-purple-50 text-purple-600 rounded-md">
<i className="w-4 h-4" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
</div>
<div className="relative z-10">
<div className="text-3xl font-semibold text-purple-600 tracking-tight">€2,340,000</div>
<div className="text-sm text-slate-500 mt-1">+12% vs last year</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm flex flex-col gap-4 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-purple-500 -mr-6 -mt-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-start relative z-10">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Awaiting OPCO Disbursement</h3>
<div className="p-1.5 bg-purple-50 text-purple-500 rounded-md">
<i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i>
</div>
</div>
<div className="relative z-10">
<div className="text-3xl font-semibold text-purple-500 tracking-tight">€487,500</div>
<div className="text-sm text-slate-500 mt-1">23 pending invoices</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm flex flex-col gap-4 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-purple-400 -mr-6 -mt-6" data-lucide="building" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-start relative z-10">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Company Collection Rate</h3>
<div className="p-1.5 bg-purple-50 text-purple-400 rounded-md">
<i className="w-4 h-4" data-lucide="building" strokeWidth="1.5"></i>
</div>
</div>
<div className="relative z-10">
<div className="text-3xl font-semibold text-purple-400 tracking-tight">91.4%</div>
<div className="text-sm text-slate-500 mt-1">+3.2% this quarter</div>
</div>
</div>
</div>

<div className="space-y-4">
<div>
<h2 className="text-lg font-medium text-slate-900 tracking-tight">Funding Entities</h2>
<p className="text-sm text-slate-500">7 active partners</p>
</div>
<div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-100 bg-slate-50/50">
<th className="py-4 px-6 text-sm font-normal text-slate-500 uppercase tracking-wider w-1/4">Entity Name</th>
<th className="py-4 px-6 text-sm font-normal text-slate-500 uppercase tracking-wider w-1/4">Active Apprentices</th>
<th className="py-4 px-6 text-sm font-normal text-slate-500 uppercase tracking-wider w-1/4">Amount Due</th>
<th className="py-4 px-6 text-sm font-normal text-slate-500 uppercase tracking-wider w-1/4">Collection Progress</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">OPCO Atlas</span>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2 text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base">42</span>
</div>
</td>
<td className="py-4 px-6 text-base font-medium text-slate-900">€630,000</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-1.5 w-full bg-purple-100 rounded-full overflow-hidden flex">
<div className="h-full bg-purple-500" style={{width: '60%'}}></div>
<div className="h-full bg-pink-300" style={{width: '18%'}}></div>
</div>
<span className="text-sm text-slate-600 min-w-[3ch] text-right">78%</span>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">OPCO Akto</span>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2 text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base">31</span>
</div>
</td>
<td className="py-4 px-6 text-base font-medium text-slate-900">€465,000</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-1.5 w-full bg-purple-100 rounded-full overflow-hidden flex">
<div className="h-full bg-purple-500" style={{width: '70%'}}></div>
<div className="h-full bg-pink-300" style={{width: '15%'}}></div>
</div>
<span className="text-sm text-slate-600 min-w-[3ch] text-right">85%</span>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">OPCO EP</span>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2 text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base">18</span>
</div>
</td>
<td className="py-4 px-6 text-base font-medium text-slate-900">€270,000</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-1.5 w-full bg-purple-100 rounded-full overflow-hidden flex">
<div className="h-full bg-purple-500" style={{width: '45%'}}></div>
<div className="h-full bg-pink-300" style={{width: '17%'}}></div>
</div>
<span className="text-sm text-slate-600 min-w-[3ch] text-right">62%</span>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">Capgemini</span>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2 text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base">12</span>
</div>
</td>
<td className="py-4 px-6 text-base font-medium text-slate-900">€180,000</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-1.5 w-full bg-purple-100 rounded-full overflow-hidden flex">
<div className="h-full bg-purple-500" style={{width: '95%'}}></div>
</div>
<span className="text-sm text-emerald-500 font-medium min-w-[3ch] text-right">95%</span>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">Accenture</span>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2 text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base">8</span>
</div>
</td>
<td className="py-4 px-6 text-base font-medium text-slate-900">€120,000</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-1.5 w-full bg-purple-100 rounded-full overflow-hidden flex">
<div className="h-full bg-purple-500" style={{width: '100%'}}></div>
</div>
<span className="text-sm text-emerald-500 font-medium min-w-[3ch] text-right">100%</span>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">Sopra Steria</span>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2 text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base">6</span>
</div>
</td>
<td className="py-4 px-6 text-base font-medium text-slate-900">€90,000</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-1.5 w-full bg-purple-100 rounded-full overflow-hidden flex">
<div className="h-full bg-purple-500" style={{width: '75%'}}></div>
<div className="h-full bg-pink-300" style={{width: '13%'}}></div>
</div>
<span className="text-sm text-slate-600 min-w-[3ch] text-right">88%</span>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">Orange</span>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2 text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base">5</span>
</div>
</td>
<td className="py-4 px-6 text-base font-medium text-slate-900">€75,000</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-1.5 w-full bg-purple-100 rounded-full overflow-hidden flex">
<div className="h-full bg-purple-500" style={{width: '55%'}}></div>
<div className="h-full bg-pink-300" style={{width: '17%'}}></div>
</div>
<span className="text-sm text-slate-600 min-w-[3ch] text-right">72%</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
