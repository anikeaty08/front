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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-1 group cursor-pointer">
<span className="text-white font-semibold tracking-tighter text-lg uppercase">Market View</span>
<div className="w-1.5 h-1.5 bg-[#8CFFB5] rounded-full mt-0.5 animate-pulse"></div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#B8B8B8] hover:text-white transition-colors relative group" href="#">
                    Market Decode
                    <span className="absolute -bottom-5 left-0 w-full h-[1px] bg-[#8CFFB5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</a>
<a className="text-sm font-medium text-[#B8B8B8] hover:text-white transition-colors relative group" href="#">
                    Learning Chain
                    <span className="absolute -bottom-5 left-0 w-full h-[1px] bg-[#8CFFB5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</a>
<a className="text-sm font-medium text-[#B8B8B8] hover:text-white transition-colors relative group" href="#">
                    Tools &amp; Resources
                    <span className="absolute -bottom-5 left-0 w-full h-[1px] bg-[#8CFFB5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</a>
<a className="text-sm font-medium text-[#B8B8B8] hover:text-white transition-colors relative group" href="#">
                    News
                    <span className="absolute -bottom-5 left-0 w-full h-[1px] bg-[#8CFFB5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</a>
<a className="text-xs font-medium text-[#8CFFB5] border border-[#8CFFB5]/30 px-2 py-0.5 rounded uppercase tracking-wider bg-[#8CFFB5]/5" href="#">
                    Pro
                </a>
</div>

<div className="flex items-center gap-4">
<button className="text-[#B8B8B8] hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-sm font-medium text-white flex items-center gap-2 hover:text-[#8CFFB5] transition-colors">
<span>Login</span>
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A]">

<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
<div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#8CFFB5] rounded-full blur-[180px] opacity-5 pointer-events-none"></div>

<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8CFFB5]/30 to-transparent"></div>
<div className="absolute top-1/2 left-0 w-full h-12 -translate-y-6 bg-gradient-to-r from-transparent via-[#8CFFB5]/5 to-transparent blur-xl"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="space-y-4">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                        Trade Smarter.<br/>
                        Decode Markets <span className="text-[#8CFFB5]">With Precision.</span>
</h1>
<p className="text-lg text-[#B8B8B8] max-w-lg font-light leading-relaxed">
                        Real-time market insights, structured learning, and professional-grade analysis built for serious institutional and retail traders.
                    </p>
</div>
<div className="flex flex-wrap gap-4">
<button className="bg-[#8CFFB5] text-[#0A0A0A] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#7AEBA0] transition-colors shadow-[0_0_20px_-5px_rgba(140,255,181,0.4)]">
                        Explore Market Decode
                    </button>
<button className="border border-[#8CFFB5]/30 text-[#8CFFB5] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#8CFFB5]/5 transition-colors flex items-center gap-2">
                        View Today's Insights
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-b from-[#8CFFB5]/20 to-transparent rounded-2xl blur-lg opacity-20"></div>
<div className="glass border border-white/10 rounded-xl p-6 relative">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-medium text-[#8CFFB5] tracking-wider uppercase flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#8CFFB5] rounded-full animate-pulse"></span>
                            Live Market Snapshot
                        </span>
<iconify-icon className="text-[#8CFFB5]" icon="solar:graph-new-linear"></iconify-icon>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center py-2 border-b border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#B8B8B8]" icon="solar:euro-linear"></iconify-icon>
<span className="text-sm text-white font-medium">EUR/USD</span>
</div>
<span className="text-sm text-[#8CFFB5] font-medium">+0.32%</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#B8B8B8]" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-sm text-white font-medium">Gold (XAU)</span>
</div>
<span className="text-sm text-[#8CFFB5] font-medium">+0.58%</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#B8B8B8]" icon="solar:bitcoin-linear"></iconify-icon>
<span className="text-sm text-white font-medium">Bitcoin</span>
</div>
<span className="text-sm text-[#8CFFB5] font-medium">+1.12%</span>
</div>
<div className="flex justify-between items-center py-2">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#B8B8B8]" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-sm text-white font-medium">Nasdaq 100</span>
</div>
<span className="text-sm text-[#8CFFB5] font-medium">+0.74%</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 flex gap-2">
<div className="h-1 flex-1 bg-[#8CFFB5]/20 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-[#8CFFB5] rounded-full"></div>
</div>
<span className="text-[10px] text-[#B8B8B8] uppercase tracking-widest">Bullish Sentiment</span>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="px-4">
<p className="text-2xl font-semibold text-white tracking-tight">98%</p>
<p className="text-xs text-[#B8B8B8] uppercase tracking-wide mt-1">Structured Accuracy Model</p>
</div>
<div className="px-4">
<p className="text-2xl font-semibold text-white tracking-tight">24+</p>
<p className="text-xs text-[#B8B8B8] uppercase tracking-wide mt-1">Active Markets Covered</p>
</div>
<div className="px-4">
<p className="text-2xl font-semibold text-white tracking-tight">10K+</p>
<p className="text-xs text-[#B8B8B8] uppercase tracking-wide mt-1">Active Global Readers</p>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-8">
<h2 className="text-2xl font-semibold text-white tracking-tight">Global Market Board</h2>
<p className="text-[#B8B8B8] text-sm mt-1 font-light">Real-time structured overview across major asset classes.</p>
</div>
<div className="grid lg:grid-cols-4 gap-8">

<div className="lg:col-span-3 bg-[#121212] border border-[#1C1C1C]">
<div className="border-b border-[#1C1C1C] px-4 pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-x-auto">
<div className="flex items-center gap-8 text-sm whitespace-nowrap">
<button className="pb-3 text-white font-semibold relative group">
                                Forex
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8CFFB5] shadow-[0_0_10px_rgba(140,255,181,0.5)]"></span>
</button>
<button className="pb-3 text-[#525252] font-medium hover:text-[#B8B8B8] transition-colors relative group">
                                Crypto
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8CFFB5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</button>
<button className="pb-3 text-[#525252] font-medium hover:text-[#B8B8B8] transition-colors relative group">
                                Commodities
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8CFFB5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</button>
<button className="pb-3 text-[#525252] font-medium hover:text-[#B8B8B8] transition-colors relative group">
                                Indices
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8CFFB5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</button>
</div>
</div>
<div className="overflow-x-auto custom-scrollbar max-h-[450px]">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead className="bg-[#121212] sticky top-0 z-10 border-b border-[#1C1C1C]">
<tr>
<th className="py-3 px-4 text-[10px] uppercase tracking-wider text-[#525252] font-medium cursor-pointer hover:text-[#B8B8B8]">Symbol</th>
<th className="py-3 px-4 text-[10px] uppercase tracking-wider text-[#525252] font-medium text-right cursor-pointer hover:text-[#B8B8B8]">Price</th>
<th className="py-3 px-4 text-[10px] uppercase tracking-wider text-[#525252] font-medium text-right cursor-pointer hover:text-[#B8B8B8]">Change</th>
<th className="py-3 px-4 text-[10px] uppercase tracking-wider text-[#525252] font-medium text-right cursor-pointer hover:text-[#B8B8B8]">% Change</th>
<th className="py-3 px-4 text-[10px] uppercase tracking-wider text-[#525252] font-medium text-center">Bias</th>
</tr>
</thead>
<tbody className="divide-y divide-[#1C1C1C] text-xs">
<tr className="group hover:bg-[#161616] border-l-2 border-transparent hover:border-[#8CFFB5] transition-all duration-150">
<td className="py-3 px-4 text-white font-medium flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[8px] text-[#8CFFB5]">EU</div>
                                        EUR/USD
                                    </td>
<td className="py-3 px-4 text-white font-mono text-right">1.0874</td>
<td className="py-3 px-4 text-[#8CFFB5] font-mono text-right">+0.0031</td>
<td className="py-3 px-4 text-[#8CFFB5] font-mono text-right">+0.29%</td>
<td className="py-3 px-4 text-center">
<span className="inline-block px-1.5 py-0.5 rounded-[2px] border border-[#8CFFB5]/50 text-[#8CFFB5] text-[9px] font-medium uppercase tracking-wide">Bullish</span>
</td>
</tr>
<tr className="group hover:bg-[#161616] border-l-2 border-transparent hover:border-[#8CFFB5] transition-all duration-150">
<td className="py-3 px-4 text-white font-medium flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[8px] text-white">XU</div>
                                        XAU/USD
                                    </td>
<td className="py-3 px-4 text-white font-mono text-right">2,154.80</td>
<td className="py-3 px-4 text-[#8CFFB5] font-mono text-right">+12.40</td>
<td className="py-3 px-4 text-[#8CFFB5] font-mono text-right">+0.58%</td>
<td className="py-3 px-4 text-center">
<span className="inline-block px-1.5 py-0.5 rounded-[2px] border border-[#8CFFB5]/50 text-[#8CFFB5] text-[9px] font-medium uppercase tracking-wide">Bullish</span>
</td>
</tr>
<tr className="group hover:bg-[#161616] border-l-2 border-transparent hover:border-[#8CFFB5] transition-all duration-150">
<td className="py-3 px-4 text-white font-medium flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[8px] text-white">UC</div>
                                        USD/CAD
                                    </td>
<td className="py-3 px-4 text-white font-mono text-right">1.3480</td>
<td className="py-3 px-4 text-red-400 font-mono text-right">-0.0020</td>
<td className="py-3 px-4 text-red-400 font-mono text-right">-0.15%</td>
<td className="py-3 px-4 text-center">
<span className="inline-block px-1.5 py-0.5 rounded-[2px] border border-red-900/50 text-red-400 text-[9px] font-medium uppercase tracking-wide">Bearish</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="lg:col-span-1 space-y-4">
<div className="bg-[#121212] border border-[#1C1C1C] p-5 h-full flex flex-col">
<h3 className="text-sm font-medium text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-[#8CFFB5]" icon="solar:chart-square-linear"></iconify-icon>
                            Market Summary
                        </h3>
<div className="space-y-6 flex-1">
<div>
<p className="text-[10px] text-[#525252] uppercase tracking-wider mb-1">Risk Sentiment</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
<span className="text-sm text-white font-medium">Neutral / Mixed</span>
</div>
</div>
<div>
<p className="text-[10px] text-[#525252] uppercase tracking-wider mb-1">Volatility (VIX)</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#8CFFB5]"></span>
<span className="text-sm text-white font-medium">Low (13.45)</span>
</div>
</div>
</div>
<a className="mt-8 block w-full text-center bg-[#1C1C1C] hover:bg-[#252525] border border-[#333] hover:border-[#8CFFB5]/30 text-xs text-white py-2.5 transition-all duration-300" href="#">
                            View Full Market Decode →
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="text-[10px] text-[#8CFFB5] uppercase tracking-widest font-semibold border border-[#8CFFB5]/30 px-2 py-1 rounded mb-4 inline-block">Market News</span>
<h2 className="text-3xl font-semibold text-white tracking-tight">Real-Time Market Developments</h2>
<p className="text-[#B8B8B8] mt-2 font-light text-sm max-w-2xl">Breaking updates impacting global equities, FX, crypto, and commodities.</p>
</div>
<div className="grid lg:grid-cols-5 gap-8">

<div className="lg:col-span-3">
<article className="relative h-full min-h-[400px] rounded-xl overflow-hidden border border-white/10 group cursor-pointer">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&amp;fit=crop&amp;w=1200&amp;q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
<div className="relative z-10 p-8 h-full flex flex-col justify-end">
<div className="flex items-center gap-3 mb-4">
<span className="bg-[#8CFFB5] text-[#0A0A0A] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Macro</span>
<span className="text-xs text-[#B8B8B8]">4 min read • 2 hours ago</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 group-hover:text-[#8CFFB5] transition-colors leading-tight">Fed Signals Cautious Rate Path as Inflation Moderates</h3>
<p className="text-[#B8B8B8] text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                                Central bank commentary suggests a slower pace of tightening, impacting bond yields and risk assets globally as markets digest the new dot plot.
                            </p>
<span className="text-sm text-[#8CFFB5] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                Read Update <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</article>
</div>

<div className="lg:col-span-2 flex flex-col">
<div className="border border-white/5 rounded-xl bg-[#121212] p-1 flex-1">
<div className="flex flex-col h-full">

<a className="group p-5 border-b border-white/5 hover:bg-white/5 transition-colors" href="#">
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-white text-sm font-medium group-hover:text-[#8CFFB5] transition-colors mb-1">Dollar Weakens Ahead of CPI Data</h4>
<span className="text-[10px] text-[#525252] uppercase tracking-wider">Forex • 45m ago</span>
</div>
<iconify-icon className="text-[#525252] group-hover:text-[#8CFFB5]" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="group p-5 border-b border-white/5 hover:bg-white/5 transition-colors" href="#">
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-white text-sm font-medium group-hover:text-[#8CFFB5] transition-colors mb-1">Oil Prices Rise on Supply Constraints</h4>
<span className="text-[10px] text-[#525252] uppercase tracking-wider">Commodities • 2h ago</span>
</div>
<iconify-icon className="text-[#525252] group-hover:text-[#8CFFB5]" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="group p-5 border-b border-white/5 hover:bg-white/5 transition-colors" href="#">
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-white text-sm font-medium group-hover:text-[#8CFFB5] transition-colors mb-1">Bitcoin ETF Inflows Accelerate</h4>
<span className="text-[10px] text-[#525252] uppercase tracking-wider">Crypto • 4h ago</span>
</div>
<iconify-icon className="text-[#525252] group-hover:text-[#8CFFB5]" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="group p-5 hover:bg-white/5 transition-colors" href="#">
<div className="flex justify-between items-start gap-4">
<div>
<h4 className="text-white text-sm font-medium group-hover:text-[#8CFFB5] transition-colors mb-1">European Indices Close Higher</h4>
<span className="text-[10px] text-[#525252] uppercase tracking-wider">Indices • 6h ago</span>
</div>
<iconify-icon className="text-[#525252] group-hover:text-[#8CFFB5]" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
</div>
</div>
<a className="mt-4 w-full text-center text-xs text-[#8CFFB5] hover:text-white py-3 border border-[#8CFFB5]/20 hover:bg-[#8CFFB5]/5 rounded-lg transition-colors flex items-center justify-center gap-2" href="#">
                        View All Market News <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-[10px] text-[#8CFFB5] uppercase tracking-widest font-semibold border border-[#8CFFB5]/30 px-2 py-1 rounded mb-4 inline-block">Insights &amp; Articles</span>
<h2 className="text-3xl font-semibold text-white tracking-tight">Structured Thinking on Markets &amp; Capital</h2>
<p className="text-[#B8B8B8] mt-2 font-light text-sm max-w-2xl">In-depth perspectives on strategy, cycles, behavioral finance, and long-term investing.</p>
</div>
<a className="text-sm text-[#8CFFB5] hover:text-white transition-colors flex items-center gap-1 group" href="#">
                    View All Articles <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group bg-[#121212] border border-white/5 rounded-xl overflow-hidden hover:border-[#8CFFB5]/30 transition-all duration-300 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-80"></div>
</div>
<div className="p-6 relative">
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-[#8CFFB5] transition-colors leading-snug">Why Most Traders Fail at Risk Management</h3>
<p className="text-xs text-[#B8B8B8] leading-relaxed mb-6 h-12 overflow-hidden">The difference between skill and survival often comes down to position sizing and emotional control.</p>
<a className="text-xs text-[#8CFFB5] font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Read Article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</article>

<article className="group bg-[#121212] border border-white/5 rounded-xl overflow-hidden hover:border-[#8CFFB5]/30 transition-all duration-300 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-80"></div>
</div>
<div className="p-6 relative">
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-[#8CFFB5] transition-colors leading-snug">Understanding Liquidity Cycles in Modern Markets</h3>
<p className="text-xs text-[#B8B8B8] leading-relaxed mb-6 h-12 overflow-hidden">Liquidity expansion and contraction phases shape asset behavior more than short-term headlines.</p>
<a className="text-xs text-[#8CFFB5] font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</article>

<article className="group bg-[#121212] border border-white/5 rounded-xl overflow-hidden hover:border-[#8CFFB5]/30 transition-all duration-300 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-80"></div>
</div>
<div className="p-6 relative">
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-[#8CFFB5] transition-colors leading-snug">The Psychology of Drawdowns</h3>
<p className="text-xs text-[#B8B8B8] leading-relaxed mb-6 h-12 overflow-hidden">Managing capital during downturns requires structure, not emotion. Learn to detach from the PnL.</p>
<a className="text-xs text-[#8CFFB5] font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Continue Reading <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</article>
</div>
</div>
</section>

<section className="relative py-24 bg-[#0A0A0A] overflow-hidden border-t border-white/5">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,255,181,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="relative max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4 leading-tight">
                Advance From Information to <br className="hidden md:block"/> <span className="text-[#8CFFB5]">Institutional Insight</span>
</h2>
<p className="text-[#B8B8B8] text-base md:text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                Unlock deeper research, advanced tools, structured analysis, and premium market intelligence designed for serious participants.
            </p>

<div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
<div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-4 py-1.5">
<iconify-icon className="text-[#8CFFB5]" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs md:text-sm text-white font-medium">Advanced Insight Reports</span>
</div>
<div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-4 py-1.5">
<iconify-icon className="text-[#8CFFB5]" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs md:text-sm text-white font-medium">Institutional-Level Market Dashboards</span>
</div>
<div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-4 py-1.5">
<iconify-icon className="text-[#8CFFB5]" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs md:text-sm text-white font-medium">Early Access Research</span>
</div>
<div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-4 py-1.5">
<iconify-icon className="text-[#8CFFB5]" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs md:text-sm text-white font-medium">Premium Learning Tracks</span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<button className="w-full sm:w-auto bg-[#8CFFB5] text-[#0A0A0A] px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-[#7AEBA0] transition-colors shadow-[0_0_25px_-5px_rgba(140,255,181,0.3)] flex items-center justify-center gap-2">
                    Explore Pro Access <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto text-white border border-white/10 bg-white/5 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    View Feature Breakdown
                </button>
</div>

<p className="text-[10px] text-[#525252] uppercase tracking-wide font-medium">
                No hype. No signals spam. Just structured, research-driven intelligence.
            </p>
</div>
</section>

<footer className="bg-[#050505] border-t border-[#8CFFB5]/20 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-1 mb-4">
<span className="text-white font-semibold tracking-tighter text-lg uppercase">Market View</span>
<div className="w-1.5 h-1.5 bg-[#8CFFB5] rounded-full mt-0.5"></div>
</div>
<p className="text-xs text-[#B8B8B8] leading-relaxed">
                        Decoding market structures for the modern trader. Data-driven insights, zero noise.
                    </p>
</div>
<div>
<h5 className="text-white font-medium mb-4 text-sm">Platform</h5>
<ul className="space-y-2 text-xs text-[#B8B8B8]">
<li><a className="hover:text-[#8CFFB5] transition-colors" href="#">Market Decode</a></li>
<li><a className="hover:text-[#8CFFB5] transition-colors" href="#">Live Signals</a></li>
<li><a className="hover:text-[#8CFFB5] transition-colors" href="#">Tools</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4 text-sm">Education</h5>
<ul className="space-y-2 text-xs text-[#B8B8B8]">
<li><a className="hover:text-[#8CFFB5] transition-colors" href="#">Learning Chain</a></li>
<li><a className="hover:text-[#8CFFB5] transition-colors" href="#">Broker Intel</a></li>
<li><a className="hover:text-[#8CFFB5] transition-colors" href="#">Psychology</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4 text-sm">Legal</h5>
<ul className="space-y-2 text-xs text-[#B8B8B8]">
<li><a className="hover:text-[#8CFFB5] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#8CFFB5] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#8CFFB5] transition-colors" href="#">Risk Disclosure</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center md:text-left">
<p className="text-[10px] text-[#525252] leading-relaxed max-w-4xl">
                    Disclaimer: Market View provides educational market intelligence and does not offer financial advice, investment recommendations, or guaranteed trading signals. Trading foreign exchange, commodities, and cryptocurrencies carries a high level of risk and may not be suitable for all investors. Past performance is not indicative of future results.
                </p>
<p className="text-[10px] text-[#525252] mt-4">
                    © 2024 Market View Intelligence. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
