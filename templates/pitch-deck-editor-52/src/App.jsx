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
      

<header className="h-14 bg-[#1C1C1C] text-white flex items-center justify-between px-4 shrink-0 border-b border-gray-800 z-50">
<div className="flex items-center gap-4">
<button className="p-1 hover:bg-gray-800 rounded">
<i className="w-5 h-5 text-gray-400" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<div className="flex items-center gap-3">
<span className="font-medium text-sm tracking-tight">Pitch Deck: Secondary &amp; M&amp;A Rail</span>
<i className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" data-lucide="pen-line" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" data-lucide="layout-template" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-purple-500 border-2 border-[#1C1C1C] flex items-center justify-center text-[10px]">JD</div>
<div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-[#1C1C1C] flex items-center justify-center text-[10px]">AS</div>
</div>
<button className="bg-pink-300 hover:bg-pink-200 text-black px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="share" strokeWidth="1.5"></i> Share
            </button>
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden ml-2">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</header>

<main className="flex-1 overflow-auto bg-[#D4D4D4] relative cursor-grab active:cursor-grabbing">

<div className="min-w-max p-12 flex items-start gap-8 transform scale-90 origin-top-left">

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-300">
<div className="h-10 border-b border-gray-100 flex items-center justify-between px-3 text-[10px] text-gray-400">
<span>9:41</span>
<div className="flex gap-1">
<i className="w-3 h-3" data-lucide="signal"></i>
<i className="w-3 h-3" data-lucide="wifi"></i>
<i className="w-3 h-3" data-lucide="battery-medium"></i>
</div>
</div>
<div className="p-6 flex flex-col h-full text-center">
<div className="flex justify-between items-center text-[10px] text-blue-600 font-medium mb-12">
<span>&lt; Decks</span>
<span>Done</span>
</div>
<div className="flex-1 flex flex-col items-center justify-center">
<div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg shadow-blue-200">M</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 leading-tight mb-4">Maasal: The Premier Capital Marketplace for African SaaS</h1>
<div className="w-12 h-1 bg-blue-100 rounded-full mb-8"></div>
<div className="grid grid-cols-2 gap-4 w-full">
<div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
<i className="w-5 h-5 text-blue-500 mx-auto mb-2" data-lucide="globe"></i>
<div className="text-[10px] font-medium text-slate-500">Global Liquidity</div>
</div>
<div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
<i className="w-5 h-5 text-blue-500 mx-auto mb-2" data-lucide="map-pin"></i>
<div className="text-[10px] font-medium text-slate-500">Local Expertise</div>
</div>
</div>
</div>
<div className="mt-auto pt-8">
<div className="text-[10px] text-slate-400">Maasal Deck [AI]</div>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
<div className="p-6 flex flex-col h-full">
<div className="flex justify-between items-center text-[10px] text-slate-400 mb-6">
<span>Slide 2 of 12</span>
<span className="text-blue-600">Edit</span>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 leading-tight mb-2">An Ecosystem Built for Every Participant</h2>
<p className="text-xs text-slate-500 mb-8 leading-relaxed">Connecting African SaaS founders with global capital through a seamless infrastructure.</p>
<div className="flex-1 relative flex items-center justify-center">

<div className="relative w-48 h-48">
<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-xl shadow-blue-200 text-center px-1">Maasal Platform</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-full text-[10px] font-medium text-slate-700">Founder</div>
<div className="absolute bottom-4 left-0 -translate-x-4 bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-full text-[10px] font-medium text-slate-700">Broker</div>
<div className="absolute bottom-4 right-0 translate-x-4 bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-full text-[10px] font-medium text-slate-700">Investor</div>

<svg className="absolute inset-0 w-full h-full text-slate-200" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="35" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></circle>
</svg>
</div>
</div>
<div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
<i className="w-3 h-3 text-blue-600" data-lucide="network"></i>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-800">Pan-African Connectivity</h4>
<p className="text-[10px] text-slate-500 mt-1">Bridging 20+ African jurisdictions with institutional-grade capital.</p>
</div>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
<div className="p-6 flex flex-col h-full">
<div className="text-[10px] text-slate-400 mb-4 uppercase tracking-wider font-semibold">Slide 3 of 12</div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900 leading-snug mb-6">Three Distinct Rails to Capital and Liquidity</h2>
<div className="space-y-4">

<div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors group">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="rocket"></i>
</div>
<h3 className="text-sm font-semibold text-slate-800">Primary Capital Raising</h3>
</div>
<p className="text-[10px] text-slate-500 leading-relaxed pl-11">Connecting founders with global investors for new funding rounds.</p>
</div>

<div className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-purple-200 transition-colors group">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="repeat"></i>
</div>
<h3 className="text-sm font-semibold text-slate-800">Secondary Market &amp; M&amp;A</h3>
</div>
<p className="text-[10px] text-slate-500 leading-relaxed pl-11">Providing liquidity for existing shareholders and facilitating company sales.</p>
</div>

<div className="p-4 bg-amber-50 rounded-xl border border-amber-100 hover:border-amber-200 transition-colors group">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<h3 className="text-sm font-semibold text-slate-800">2026 Premium Liquidity Rail</h3>
</div>
<p className="text-[10px] text-slate-500 leading-relaxed pl-11">A quality-gated marketplace for top-tier, verified African SaaS companies.</p>
</div>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
<div className="p-6 flex flex-col h-full">
<div className="text-[9px] font-semibold text-blue-600 mb-2 uppercase tracking-wide">Slide 04: The Workflow</div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900 leading-tight mb-8">The Primary Rail: Path From Pitch to Commitment</h2>
<div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-px before:bg-slate-200">

<div className="relative">
<div className="absolute -left-[29px] w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold z-10">1</div>
<h4 className="text-xs font-semibold text-slate-900">Founder Creates Deal</h4>
<p className="text-[10px] text-slate-500 mt-1">Input SaaS metrics &amp; growth projections.</p>
</div>

<div className="relative">
<div className="absolute -left-[29px] w-5 h-5 rounded-full bg-white border-2 border-slate-300 text-slate-500 flex items-center justify-center text-[10px] font-bold z-10">2</div>
<h4 className="text-xs font-semibold text-slate-900">Investor Expresses Interest</h4>
<p className="text-[10px] text-slate-500 mt-1">One-click Soft Circle on the platform. Immediate KYC/AML verification.</p>
</div>

<div className="relative">
<div className="absolute -left-[29px] w-5 h-5 rounded-full bg-white border-2 border-slate-300 text-slate-500 flex items-center justify-center text-[10px] font-bold z-10">3</div>
<h4 className="text-xs font-semibold text-slate-900">Founder Manages Interest</h4>
<p className="text-[10px] text-slate-500 mt-1">Centralized dashboard for offers. Strategic allocation.</p>
</div>

<div className="relative">
<div className="absolute -left-[29px] w-5 h-5 rounded-full bg-white border-2 border-slate-300 text-slate-500 flex items-center justify-center text-[10px] font-bold z-10">4</div>
<h4 className="text-xs font-semibold text-slate-900">Investor Commits</h4>
<p className="text-[10px] text-slate-500 mt-1">Digital execution of documents. Secure escrow funding.</p>
</div>
</div>
<div className="mt-auto bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
<div className="text-[10px] font-semibold text-blue-700">PLATFORM VELOCITY</div>
<div className="text-2xl font-bold text-blue-900 mt-1">85% Faster</div>
<p className="text-[9px] text-blue-600 mt-1">Than traditional manual fundraising</p>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
<div className="p-6 flex flex-col h-full">
<div className="text-[9px] font-semibold text-emerald-600 mb-2 uppercase tracking-wide">Section 05: Liquidity Rails</div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900 leading-tight mb-2">The Secondary &amp; M&amp;A Rail</h2>
<p className="text-[10px] text-slate-500 mb-6">Unlocking value for shareholders through streamlined share sales.</p>
<div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 mb-6 flex flex-col items-center text-center">
<div className="bg-white p-2 rounded-full shadow-sm mb-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="key"></i>
</div>
<h4 className="text-xs font-bold text-emerald-900">NDA Gateway</h4>
<p className="text-[9px] text-emerald-700 mt-1">Automated non-disclosure agreements protecting both parties before VDR access.</p>
</div>
<div className="space-y-4">
<div className="flex gap-3 items-start">
<i className="w-4 h-4 text-slate-400 mt-0.5" data-lucide="file-plus"></i>
<div>
<h5 className="text-[11px] font-semibold text-slate-900">Listing Creation</h5>
<p className="text-[9px] text-slate-500">Seller sets shares (common, preferred) and asking price.</p>
</div>
</div>
<div className="flex gap-3 items-start">
<i className="w-4 h-4 text-slate-400 mt-0.5" data-lucide="search"></i>
<div>
<h5 className="text-[11px] font-semibold text-slate-900">Buyer Discovery</h5>
<p className="text-[9px] text-slate-500">Buyers browse range and can access blinded data initially.</p>
</div>
</div>
<div className="flex gap-3 items-start">
<i className="w-4 h-4 text-slate-400 mt-0.5" data-lucide="shield-check"></i>
<div>
<h5 className="text-[11px] font-semibold text-slate-900">Offer Matching</h5>
<p className="text-[9px] text-slate-500">System submits an offer; engine executes trades.</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
<div className="p-6 flex flex-col h-full">
<div className="flex justify-between mb-4">
<div className="text-[9px] text-slate-400">Slide 6 of 12</div>
<i className="w-4 h-4 text-slate-300" data-lucide="more-horizontal"></i>
</div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900 leading-tight mb-6">The Foundation: Compliance &amp; VDR</h2>
<div className="space-y-5">
<div>
<div className="flex items-center gap-2 mb-2">
<i className="w-3.5 h-3.5 text-blue-600" data-lucide="check-circle-2"></i>
<h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Compliance Engine</h4>
</div>
<div className="pl-5.5 space-y-3">
<div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
<h5 className="text-[10px] font-semibold text-slate-900">Comprehensive Profiles</h5>
<p className="text-[9px] text-slate-500 mt-0.5">Captures Jurisdiction, Accreditation, KYC Status.</p>
<div className="flex gap-1 mt-2">
<span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[8px] rounded">Retail</span>
<span className="px-1.5 py-0.5 bg-purple-100 text-purple-700 text-[8px] rounded">Accredited</span>
<span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[8px] rounded">Institutional</span>
</div>
</div>
<div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
<h5 className="text-[10px] font-semibold text-slate-900">Automated Verification</h5>
<p className="text-[9px] text-slate-500 mt-0.5">Deeply integrated workflow for Passport &amp; National IDs across 22+ jurisdictions.</p>
</div>
</div>
</div>
</div>
<div className="mt-auto bg-blue-600 p-4 rounded-xl text-white shadow-lg shadow-blue-200">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-blue-200" data-lucide="lock"></i>
<h4 className="text-xs font-bold">Secure Data Custody</h4>
</div>
<p className="text-[9px] text-blue-100 leading-relaxed opacity-90">The "Crown Jewel" of the Maasal platform, offering total control over sensitive documents with Full Audit Trails.</p>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
<div className="p-6 flex flex-col h-full">
<div className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-[8px] font-bold rounded mb-4">FUTURE OUTLOOK</div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900 leading-tight mb-6">The Future is Curated: The 2026 Premium Rail</h2>
<div className="flex flex-col items-center justify-center mb-8">
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-amber-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="75, 100" strokeWidth="3"></path>
</svg>
<div className="absolute flex flex-col items-center">
<span className="text-3xl font-bold text-slate-800">75</span>
<span className="text-[8px] font-medium text-slate-400 uppercase">Min Entry Score</span>
</div>
</div>
<p className="text-xs font-semibold text-slate-700 mt-2">The Maasal Score</p>
</div>
<div className="space-y-3">
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">Financial Performance</h4>
<div className="flex items-center gap-2 text-[10px]">
<div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
<span className="flex-1 text-slate-600">Governance</span>
<span className="font-semibold text-slate-900">20%</span>
</div>
<div className="flex items-center gap-2 text-[10px]">
<div className="w-1.5 h-1.5 rounded-full bg-amber-300"></div>
<span className="flex-1 text-slate-600">Legal</span>
<span className="font-semibold text-slate-900">15%</span>
</div>
<div className="flex items-center gap-2 text-[10px]">
<div className="w-1.5 h-1.5 rounded-full bg-amber-200"></div>
<span className="flex-1 text-slate-600">Technical</span>
<span className="font-semibold text-slate-900">10%</span>
</div>
</div>
<div className="mt-auto p-3 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-lg text-center">
<i className="w-4 h-4 text-amber-500 mx-auto mb-1" data-lucide="trophy"></i>
<p className="text-[9px] text-amber-900 font-medium italic">"Connecting verified institutional capital with the continent's most promising SaaS companies."</p>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
<div className="p-6 flex flex-col h-full bg-slate-50">
<div className="flex justify-between items-center mb-4">
<span className="text-[9px] text-slate-400">&lt; Back</span>
<span className="text-[9px] font-medium">SLIDE 8 OF 12</span>
<span className="text-[9px] text-blue-600">Done</span>
</div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900 leading-tight mb-2">A Flexible Model for Every User</h2>
<p className="text-[10px] text-slate-500 mb-6">Scalable pricing tiers designed to grow with your fundraising needs.</p>
<div className="space-y-3">

<div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
<div className="flex justify-between items-end mb-1">
<h4 className="text-xs font-bold text-slate-800">Basic</h4>
<span className="text-xs font-bold text-slate-900">$99<span className="text-[8px] font-normal text-slate-400">/mo</span></span>
</div>
<p className="text-[9px] text-slate-500">Basic Deal Access</p>
</div>

<div className="bg-blue-600 p-4 rounded-xl border border-blue-700 shadow-lg shadow-blue-100 transform scale-105 z-10">
<div className="flex justify-between items-center mb-1">
<h4 className="text-xs font-bold text-white">MOST POPULAR</h4>
</div>
<div className="flex justify-between items-end mb-1">
<h4 className="text-sm font-bold text-white">Pro</h4>
<span className="text-sm font-bold text-white">$299<span className="text-[9px] font-normal text-blue-200">/mo</span></span>
</div>
<div className="text-[9px] text-blue-100 mt-2 space-y-1">
<div className="flex items-center gap-1"><i className="w-2 h-2" data-lucide="check"></i> Free Unlocks</div>
<div className="flex items-center gap-1"><i className="w-2 h-2" data-lucide="check"></i> AI Memos</div>
</div>
</div>

<div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm opacity-80">
<div className="flex justify-between items-end mb-1">
<h4 className="text-xs font-bold text-slate-800">Institutional</h4>
<span className="text-xs font-bold text-slate-900">$499<span className="text-[8px] font-normal text-slate-400">/mo</span></span>
</div>
<p className="text-[9px] text-slate-500">Unlimited Access &amp; API</p>
</div>
</div>
<div className="mt-auto grid grid-cols-3 gap-2 text-center pt-4 border-t border-slate-200">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded bg-slate-200 mb-1"></div>
<span className="text-[8px] text-slate-500">Overview</span>
</div>
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded bg-blue-100 mb-1"></div>
<span className="text-[8px] text-blue-600 font-medium">Model</span>
</div>
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded bg-slate-200 mb-1"></div>
<span className="text-[8px] text-slate-500">Roadmap</span>
</div>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
<div className="p-6 flex flex-col h-full">
<div className="text-[9px] text-blue-600 font-bold uppercase tracking-wide mb-2">STRATEGIC OUTLOOK</div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900 leading-tight mb-8">Future Roadmap</h2>
<div className="relative pl-4 border-l border-slate-200 space-y-8">

<div className="relative pl-6">
<div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-slate-900 border-2 border-white ring-1 ring-slate-200"></div>
<h4 className="text-xs font-bold text-slate-900 mb-1">2025: FOUNDATION</h4>
<div className="space-y-3">
<div>
<h5 className="text-[10px] text-blue-600 font-medium">V1.1 Enhancements</h5>
<p className="text-[9px] text-slate-500">Advanced permissions; VDR Q&amp;A features, and refined due diligence checklists.</p>
</div>
<div>
<h5 className="text-[10px] text-blue-600 font-medium">Data Infrastructure</h5>
<p className="text-[9px] text-slate-500">Build the data pipeline for training models.</p>
</div>
</div>
</div>

<div className="relative pl-6">
<div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-white border-2 border-slate-300"></div>
<h4 className="text-xs font-bold text-slate-900 mb-1">2025: VALIDATION</h4>
<div className="bg-blue-50 p-2 rounded border border-blue-100">
<h5 className="text-[10px] text-blue-700 font-medium">Deal Flow Acceleration</h5>
<p className="text-[9px] text-blue-600/80">Standardized legal templates and improved multi-party negotiation tools.</p>
</div>
</div>

<div className="relative pl-6 opacity-60">
<div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-white border-2 border-slate-300"></div>
<h4 className="text-xs font-bold text-slate-900 mb-1">2026: SALES &amp; REACH</h4>
<p className="text-[9px] text-slate-500">Launch AI Doc Analysis and document validation driven by machine learning algorithms.</p>
</div>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
<div className="p-6 flex flex-col h-full text-center items-center justify-center">
<div className="w-full bg-blue-600 text-white p-6 rounded-2xl shadow-xl shadow-blue-200 mb-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-blue-500 rounded-bl-full opacity-50 -mr-4 -mt-4"></div>
<h2 className="text-xl font-bold tracking-tight mb-3 relative z-10">MAASAL is the catalyst.</h2>
<p className="text-[10px] text-blue-100 leading-relaxed relative z-10">We are building the essential engine that will ensure the next wave of African success stories achieve their true worth.</p>
</div>
<div className="mb-8">
<p className="text-sm font-medium text-slate-800 mb-1">This isn't just good for Africa:</p>
<p className="text-xl font-bold text-slate-900 tracking-tight">it's Good Business.</p>
</div>
<p className="text-[10px] text-slate-500 mb-6 max-w-[200px]">We are asking you to <span className="text-blue-600 font-semibold">partner with us</span> to build this future.</p>
<button className="w-full py-3 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
                        Connect with Maasai
                        <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
<div className="mt-8 flex gap-4 w-full justify-center border-t border-slate-100 pt-6">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer">
<i className="w-3 h-3" data-lucide="share-2"></i>
</div>
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer">
<i className="w-3 h-3" data-lucide="download"></i>
</div>
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer">
<i className="w-3 h-3" data-lucide="maximize"></i>
</div>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
<div className="p-5 flex flex-col h-full">
<div className="flex justify-between items-center mb-6">
<h2 className="text-sm font-bold text-slate-900">Competitor Analysis</h2>
<div className="w-4 h-4 rounded bg-slate-100"></div>
</div>

<div className="grid grid-cols-4 gap-2 mb-4">
<div className="col-span-1"></div>
<div className="col-span-1 flex flex-col items-center">
<div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs mb-1">M</div>
<span className="text-[8px] font-bold text-slate-900">Maasal</span>
</div>
<div className="col-span-1 flex flex-col items-center opacity-50">
<div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500 mb-1">Inv</div>
<span className="text-[7px] font-medium text-slate-500">Invest Banks</span>
</div>
<div className="col-span-1 flex flex-col items-center opacity-50">
<div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500 mb-1">Glo</div>
<span className="text-[7px] font-medium text-slate-500">Global M&amp;A</span>
</div>
</div>

<div className="grid grid-cols-4 gap-2 py-3 border-t border-slate-50 items-center">
<div className="col-span-1 text-[8px] font-semibold text-slate-700">AI-Powered Platform</div>
<div className="col-span-1 flex justify-center"><i className="w-3 h-3 text-blue-600" data-lucide="check-circle"></i></div>
<div className="col-span-1 flex justify-center"><i className="w-3 h-3 text-slate-300" data-lucide="minus"></i></div>
<div className="col-span-1 flex justify-center"><i className="w-3 h-3 text-slate-400" data-lucide="check"></i></div>
</div>

<div className="grid grid-cols-4 gap-2 py-3 border-t border-slate-50 items-center">
<div className="col-span-1 text-[8px] font-semibold text-slate-700">Direct Competitor</div>
<div className="col-span-1 flex justify-center"><i className="w-3 h-3 text-blue-600" data-lucide="check-circle"></i></div>
<div className="col-span-1 flex justify-center text-[6px] text-center text-slate-400">Indirect (Human Led)</div>
<div className="col-span-1 flex justify-center text-[6px] text-center text-slate-400">High-Touch Advisory</div>
</div>

<div className="grid grid-cols-4 gap-2 py-3 border-t border-slate-50 items-center">
<div className="col-span-1 text-[8px] font-semibold text-slate-700">Data &amp; Insights</div>
<div className="col-span-1 flex justify-center"><i className="w-3 h-3 text-blue-600" data-lucide="check-circle"></i></div>
<div className="col-span-1 flex justify-center"><i className="w-3 h-3 text-slate-300" data-lucide="minus"></i></div>
<div className="col-span-1 flex justify-center"><i className="w-3 h-3 text-slate-300" data-lucide="minus"></i></div>
</div>
<div className="mt-auto bg-slate-50 p-3 rounded border border-slate-100">
<h4 className="text-[9px] font-bold text-blue-700 mb-1">Strategically Positioned</h4>
<p className="text-[8px] text-slate-500 leading-relaxed">Maasal bridges the gap between global M&amp;A marketplaces and localized African insights, offering a technology-first approach that traditional advisors cannot scale.</p>
</div>
</div>
</div>

<div className="w-[320px] h-[680px] bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col relative overflow-hidden">
<div className="p-6 flex flex-col h-full">
<div className="text-[9px] text-slate-400 font-bold uppercase tracking-wide mb-4">THE ASK</div>
<div className="bg-blue-600 rounded-xl p-5 text-white shadow-lg shadow-blue-200 mb-6">
<h2 className="text-[10px] uppercase font-semibold text-blue-200 mb-1">We are raising a</h2>
<div className="text-4xl font-bold tracking-tight mb-2">$400K</div>
<p className="text-[10px] font-medium text-white/90">Pre-Seed round to accelerate traction and build our AI engine.</p>
</div>
<div className="flex gap-4 mb-6 h-32">
<div className="w-1/2 relative">

<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-blue-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="8"></path>
<path className="text-blue-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="50, 100" strokeWidth="8"></path>
<path className="text-blue-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="30, 100" stroke-dashoffset="-50" strokeWidth="8"></path>
</svg>
</div>
<div className="w-1/2 flex flex-col justify-center gap-2">
<h4 className="text-[10px] font-bold text-slate-800 border-b border-slate-100 pb-1">Use of Funds</h4>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-blue-600"></div>
<span className="text-[8px] text-slate-600">50% - Platform &amp; AI</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-[8px] text-slate-600">30% - Team Hires</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-blue-100"></div>
<span className="text-[8px] text-slate-600">20% - Ops &amp; Mktg</span>
</div>
</div>
</div>
<div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 mt-auto">
<h4 className="text-[10px] font-bold text-emerald-800 mb-2 uppercase">Key Milestones This Funding Unlocks</h4>
<ul className="space-y-2">
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-emerald-500 mt-1"></div>
<p className="text-[8px] text-emerald-900 leading-snug">Launch V1 of our AI-powered Exit Simulation &amp; Valuation tool.</p>
</li>
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-emerald-500 mt-1"></div>
<p className="text-[8px] text-emerald-900 leading-snug">Secure first revenue from closed deals &amp; founder matching engines.</p>
</li>
<li className="flex items-start gap-2">
<div className="w-1 h-1 rounded-full bg-emerald-500 mt-1"></div>
<p className="text-[8px] text-emerald-900 leading-snug">Grow user base to 100+ qualified startups.</p>
</li>
</ul>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 left-6 flex items-center gap-2">
<div className="bg-[#1C1C1C] text-white px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 shadow-lg border border-gray-700">
<span>27%</span>
</div>
<div className="bg-[#1C1C1C] text-white w-9 h-9 flex items-center justify-center rounded-lg shadow-lg border border-gray-700 hover:bg-gray-800 cursor-pointer">
<div className="w-3 h-3 border-2 border-white rounded-full"></div>
</div>
</div>
<div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1C1C1C] rounded-xl p-1.5 flex items-center gap-1 shadow-2xl border border-gray-700 z-50">
<button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="mouse-pointer-2"></i>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
<i className="w-4 h-4" data-lucide="hand"></i>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="message-square"></i>
</button>
</div>


    </>
  );
}
