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
colors: {
brand: {
yellow: '#FDB800',
navy: '#0A2540',
bg: '#FAFAFA',
card: '#FFFFFF',
text: '#666666',
heading: '#000000',
success: '#10B981'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
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
      

<header className="w-full bg-brand-card border-b border-gray-100 sticky top-0 z-30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-brand-navy rounded-lg flex items-center justify-center text-white font-bold text-sm tracking-tighter">
                    NN
                </div>
<span className="font-bold text-brand-heading tracking-tight">NomNosh</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-gray-400 hidden sm:block">Last updated: Dec 2025</span>
<button className="bg-brand-yellow hover:bg-yellow-400 text-brand-heading font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i>
<span>Export Report</span>
</button>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

<div className="space-y-4">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="space-y-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-navy text-xs font-medium mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
</span>
                        Campaign Active
                    </div>
<h1 className="text-3xl md:text-5xl font-bold text-brand-heading tracking-tight">
                        NomNosh Campaign <span className="text-brand-yellow">Performance</span>
</h1>
<p className="text-base md:text-lg text-brand-text max-w-2xl">
                        Q4 2022 - December 2025 • A comprehensive analysis of performance marketing metrics, cost efficiency, and expenditure across 77 campaigns.
                    </p>
</div>
<div className="flex flex-col items-end justify-end">
<div className="text-right">
<span className="block text-xs font-medium text-gray-400 uppercase tracking-wider">Total Ad Spend</span>
<span className="text-2xl md:text-3xl font-bold text-brand-heading tracking-tight">Rs4,142,573.40</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-brand-card p-6 rounded-2xl shadow-soft border border-gray-100 group hover:border-brand-yellow/30 transition-all duration-300">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-brand-yellow/10 rounded-xl text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-heading transition-colors">
<i className="w-6 h-6" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-brand-success bg-green-50 px-2 py-1 rounded-full">+12.5%</span>
</div>
<div>
<span className="block text-sm font-medium text-gray-500 mb-1">Total Impressions</span>
<h3 className="text-2xl font-bold text-brand-heading tracking-tight">15,125,589</h3>
</div>
</div>

<div className="bg-brand-card p-6 rounded-2xl shadow-soft border border-gray-100 group hover:border-brand-yellow/30 transition-all duration-300">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-brand-yellow/10 rounded-xl text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-heading transition-colors">
<i className="w-6 h-6" data-lucide="target" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-brand-success bg-green-50 px-2 py-1 rounded-full">+8.2%</span>
</div>
<div>
<span className="block text-sm font-medium text-gray-500 mb-1">Total Results</span>
<h3 className="text-2xl font-bold text-brand-heading tracking-tight">1.1M</h3>
</div>
</div>

<div className="bg-brand-card p-6 rounded-2xl shadow-soft border border-gray-100 group hover:border-brand-yellow/30 transition-all duration-300">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-brand-yellow/10 rounded-xl text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-heading transition-colors">
<i className="w-6 h-6" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-full">Avg</span>
</div>
<div>
<span className="block text-sm font-medium text-gray-500 mb-1">Average CPM</span>
<h3 className="text-2xl font-bold text-brand-heading tracking-tight">Rs274.02</h3>
</div>
</div>

<div className="bg-brand-card p-6 rounded-2xl shadow-soft border border-gray-100 group hover:border-brand-yellow/30 transition-all duration-300">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-brand-yellow/10 rounded-xl text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-heading transition-colors">
<i className="w-6 h-6" data-lucide="coins" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-brand-success bg-green-50 text-green-700 px-2 py-1 rounded-full">Efficient</span>
</div>
<div>
<span className="block text-sm font-medium text-gray-500 mb-1">Avg. Cost Per Result</span>
<h3 className="text-2xl font-bold text-brand-heading tracking-tight">Rs3.74</h3>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] p-6 text-white shadow-soft group">
<div className="relative z-10 flex flex-col h-full justify-between gap-4">
<div className="p-2 bg-white/20 w-fit rounded-lg backdrop-blur-sm">
<i className="w-6 h-6 text-white" data-lucide="trending-down" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-bold mb-1 tracking-tight">Best Cost Efficiency</h3>
<p className="text-sm text-green-50 font-medium opacity-90">Helmets campaign achieved lowest CPR at Rs0.02.</p>
</div>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
<i className="w-32 h-32 text-white" data-lucide="trending-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy to-[#1e3a8a] p-6 text-white shadow-soft group">
<div className="relative z-10 flex flex-col h-full justify-between gap-4">
<div className="p-2 bg-white/10 w-fit rounded-lg backdrop-blur-sm">
<i className="w-6 h-6 text-white" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-bold mb-1 tracking-tight">Highest Volume</h3>
<p className="text-sm text-blue-100 font-medium opacity-90">WS Sale campaign generated 23,528 Results.</p>
</div>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
<i className="w-32 h-32 text-white" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-yellow to-[#d97706] p-6 text-white shadow-soft group">
<div className="relative z-10 flex flex-col h-full justify-between gap-4">
<div className="p-2 bg-white/20 w-fit rounded-lg backdrop-blur-sm">
<i className="w-6 h-6 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-bold mb-1 tracking-tight">Best ROI Campaign</h3>
<p className="text-sm text-white font-medium opacity-90">Deals Engagement driven efficiently at Rs10.18 CPR.</p>
</div>
</div>
<div className="absolute -right-4 -bottom-4 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
<i className="w-32 h-32 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-brand-card rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
<div className="px-6 py-5 border-b border-gray-100 bg-brand-navy flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-yellow" data-lucide="layers" strokeWidth="1.5"></i>
<h3 className="text-lg font-bold text-white tracking-tight">Top Campaigns</h3>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-300 bg-white/10 px-3 py-1 rounded-full">Sorted by Spend</span>
</div>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full whitespace-nowrap text-left">
<thead>
<tr className="bg-gray-50 border-b border-gray-100">
<th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Campaign Name</th>
<th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Results</th>
<th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Impressions</th>
<th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">ROAS</th>
<th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Cost/Result</th>
<th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Total Spend</th>
<th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">End Date</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50">

<tr className="hover:bg-brand-bg/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
<span className="font-semibold text-brand-heading text-sm">Deals | Sales || 10/4/1</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-brand-text text-right font-medium">82</td>
<td className="px-6 py-4 text-sm text-brand-text text-right">294,302</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">--</td>
<td className="px-6 py-4 text-sm text-brand-text text-right">Rs539.17</td>
<td className="px-6 py-4 text-sm font-bold text-brand-heading text-right">Rs44,212.05</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">2 Jan 2025</td>
</tr>

<tr className="hover:bg-brand-bg/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-brand-navy"></div>
<span className="font-semibold text-brand-heading text-sm">Deals || Eng || 27/10</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-brand-text text-right font-medium">1,627</td>
<td className="px-6 py-4 text-sm text-brand-text text-right">184,912</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">--</td>
<td className="px-6 py-4 text-sm text-brand-text text-right text-brand-success font-medium">Rs10.18</td>
<td className="px-6 py-4 text-sm font-bold text-brand-heading text-right">Rs16,553.68</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">10 Dec 2025</td>
</tr>

<tr className="bg-yellow-50/30 hover:bg-yellow-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
<div>
<span className="font-semibold text-brand-heading text-sm block">WS || Sale || 31/1</span>
<span className="text-xs text-gray-500">APP / Website Discount</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-brand-text text-right font-medium">23,528</td>
<td className="px-6 py-4 text-sm text-brand-text text-right">4,864,685</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">--</td>
<td className="px-6 py-4 text-sm text-brand-text text-right text-brand-success font-medium">Rs118.20</td>
<td className="px-6 py-4 text-sm font-bold text-brand-heading text-right">Rs2,781,272.53</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">19 Dec 2025</td>
</tr>

<tr className="hover:bg-brand-bg/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<span className="font-semibold text-brand-heading text-sm">Helmets Distributing || Reach || 1/12</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-brand-text text-right font-medium">23,590</td>
<td className="px-6 py-4 text-sm text-brand-text text-right">25,260</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">--</td>
<td className="px-6 py-4 text-sm text-brand-text text-right text-brand-success font-bold">Rs0.02</td>
<td className="px-6 py-4 text-sm font-bold text-brand-heading text-right">Rs500.00</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">4 Dec 2025</td>
</tr>

<tr className="hover:bg-brand-bg/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-brand-navy"></div>
<span className="font-semibold text-brand-heading text-sm">Products || Call || 2/5</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-brand-text text-right font-medium">528</td>
<td className="px-6 py-4 text-sm text-brand-text text-right">764,614</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">--</td>
<td className="px-6 py-4 text-sm text-brand-text text-right">Rs85.23</td>
<td className="px-6 py-4 text-sm font-bold text-brand-heading text-right">Rs45,000.00</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">23 Aug 2025</td>
</tr>

<tr className="hover:bg-brand-bg/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
<span className="font-semibold text-brand-heading text-sm">Mega Nosh Deal || Sales || 19/5</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-brand-text text-right font-medium">54</td>
<td className="px-6 py-4 text-sm text-brand-text text-right">53,775</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">--</td>
<td className="px-6 py-4 text-sm text-brand-text text-right">Rs105.82</td>
<td className="px-6 py-4 text-sm font-bold text-brand-heading text-right">Rs5,714.17</td>
<td className="px-6 py-4 text-sm text-gray-400 text-right">6 Jan 2025</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
<span className="text-xs font-medium text-gray-500">Showing top 6 of 77 campaigns</span>
<button className="text-xs font-bold text-brand-navy hover:text-brand-yellow transition-colors flex items-center gap-1">
                    View All Campaigns
                    <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</main>

<footer className="bg-brand-navy border-t border-white/10 mt-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center text-brand-navy font-bold text-sm tracking-tighter">
                        NN
                    </div>
<span className="font-bold text-white tracking-tight">NomNosh Analytics</span>
</div>
<div className="flex gap-6">
<a className="text-sm text-gray-400 hover:text-brand-yellow transition-colors" href="#">Performance</a>
<a className="text-sm text-gray-400 hover:text-brand-yellow transition-colors" href="#">Campaigns</a>
<a className="text-sm text-gray-400 hover:text-brand-yellow transition-colors" href="#">Settings</a>
</div>
<div className="text-sm text-gray-500">
                    © 2025 NomNosh. Powered by Data.
                </div>
</div>
</div>
</footer>


    </>
  );
}
