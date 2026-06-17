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
      

<nav className="bg-[#0f172a] text-white px-6 py-4 flex items-center border-b border-slate-800">
<a className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors mr-8" href="#">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
<span>Back to Dashboard</span>
</a>
<div className="h-5 w-px bg-slate-700 mx-4"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-300" data-lucide="book-open"></i>
<span className="font-medium tracking-tight text-sm">Funding Readiness Framework</span>
</div>
</nav>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

<div className="text-center space-y-6">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                Educational Deck
            </span>
<h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                How Lenders Evaluate Borrowers
            </h1>
<p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
                Understanding the four pillars of fundability will help you present yourself as a professional, low-risk borrower that lenders want to work with.
            </p>
</div>

<div className="bg-[#1e293b] rounded-2xl p-8 md:p-10 shadow-lg text-center">
<h3 className="text-white text-lg font-medium mb-8">The Fundability Formula</h3>
<div className="flex flex-col xl:flex-row items-center justify-center gap-4 text-sm text-slate-200">

<div className="bg-slate-700/50 border border-slate-600 rounded-lg px-6 py-3 w-full xl:w-auto min-w-[160px]">
                    Borrower Profile
                </div>
<span className="text-slate-400 text-xl font-light">+</span>

<div className="bg-slate-700/50 border border-slate-600 rounded-lg px-6 py-3 w-full xl:w-auto min-w-[160px]">
                    Financial Strength
                </div>
<span className="text-slate-400 text-xl font-light">+</span>

<div className="bg-slate-700/50 border border-slate-600 rounded-lg px-6 py-3 w-full xl:w-auto min-w-[160px]">
                    Deal Quality
                </div>
<span className="text-slate-400 text-xl font-light">+</span>

<div className="bg-slate-700/50 border border-slate-600 rounded-lg px-6 py-3 w-full xl:w-auto min-w-[160px]">
                    Exit Strategy
                </div>
<span className="text-slate-400 text-xl font-light">=</span>

<div className="bg-amber-500 text-amber-950 font-semibold rounded-lg px-8 py-3 w-full xl:w-auto shadow-md">
                    Fundability
                </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="target"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Borrower Profile</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                    How lenders assess your experience, track record, and professionalism
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Your real estate experience level</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Past project history and outcomes</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Professional presentation and organization</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Team and contractor relationships</span>
</li>
</ul>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Financial Strength</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                    Your financial position and ability to execute the deal
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Liquidity and cash reserves</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Credit score and history</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Income and assets</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Skin in the game (down payment)</span>
</li>
</ul>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Deal Quality</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                    The investment opportunity itself and its potential
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Purchase price vs market value</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Renovation scope and budget</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">After Repair Value (ARV)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Profit margin and ROI</span>
</li>
</ul>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Exit Strategy</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                    Your plan for repaying the loan and completing the project
                </p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Primary exit plan (sale or refinance)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Backup exit strategies</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Timeline and milestones</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-slate-600">Risk mitigation approach</span>
</li>
</ul>
</div>
</div>

<div className="space-y-6 pt-8">
<h2 className="text-2xl font-semibold text-center text-slate-900 tracking-tight">Lender Types Comparison</h2>
<div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#0f172a] text-white text-sm">
<th className="py-4 px-6 font-medium whitespace-nowrap">Lender Type</th>
<th className="py-4 px-6 font-medium whitespace-nowrap">Focus</th>
<th className="py-4 px-6 font-medium whitespace-nowrap">Timeline</th>
<th className="py-4 px-6 font-medium whitespace-nowrap">Typical Rates</th>
<th className="py-4 px-6 font-medium whitespace-nowrap">Best For</th>
</tr>
</thead>
<tbody className="text-sm text-slate-600">
<tr className="bg-white border-b border-slate-100">
<td className="py-4 px-6 font-medium text-slate-900">Hard Money Lenders</td>
<td className="py-4 px-6">Deal-focused</td>
<td className="py-4 px-6">1-2 weeks</td>
<td className="py-4 px-6">10-15%</td>
<td className="py-4 px-6">Quick closings, fix-and-flip</td>
</tr>
<tr className="bg-slate-50/50 border-b border-slate-100">
<td className="py-4 px-6 font-medium text-slate-900">Private Lenders</td>
<td className="py-4 px-6">Relationship-based</td>
<td className="py-4 px-6">1-3 weeks</td>
<td className="py-4 px-6">8-12%</td>
<td className="py-4 px-6">Flexible terms, repeat borrowers</td>
</tr>
<tr className="bg-white border-b border-slate-100">
<td className="py-4 px-6 font-medium text-slate-900">Portfolio Lenders</td>
<td className="py-4 px-6">Balanced</td>
<td className="py-4 px-6">2-4 weeks</td>
<td className="py-4 px-6">6-9%</td>
<td className="py-4 px-6">Buy-and-hold, BRRRR</td>
</tr>
<tr className="bg-slate-50/50">
<td className="py-4 px-6 font-medium text-slate-900">Traditional Banks</td>
<td className="py-4 px-6">Borrower-focused</td>
<td className="py-4 px-6">4-8 weeks</td>
<td className="py-4 px-6">5-7%</td>
<td className="py-4 px-6">Strong credit, long-term holds</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
<div className="text-center mb-10 space-y-2">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">High-Impact Behaviors</h2>
<p className="text-base text-slate-500">Actions that signal you're a professional, low-risk borrower worth funding</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-slate-50/80 rounded-lg p-4 flex items-center gap-3 border border-slate-100">
<div className="shrink-0 text-blue-600 bg-blue-100 rounded-full p-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-slate-700">Organize all documents before applying</span>
</div>
<div className="bg-slate-50/80 rounded-lg p-4 flex items-center gap-3 border border-slate-100">
<div className="shrink-0 text-blue-600 bg-blue-100 rounded-full p-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-slate-700">Know your numbers cold</span>
</div>
<div className="bg-slate-50/80 rounded-lg p-4 flex items-center gap-3 border border-slate-100">
<div className="shrink-0 text-blue-600 bg-blue-100 rounded-full p-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-slate-700">Have multiple exit strategies</span>
</div>
<div className="bg-slate-50/80 rounded-lg p-4 flex items-center gap-3 border border-slate-100">
<div className="shrink-0 text-blue-600 bg-blue-100 rounded-full p-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-slate-700">Build relationships before you need money</span>
</div>
<div className="bg-slate-50/80 rounded-lg p-4 flex items-center gap-3 border border-slate-100">
<div className="shrink-0 text-blue-600 bg-blue-100 rounded-full p-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-slate-700">Present yourself professionally</span>
</div>
<div className="bg-slate-50/80 rounded-lg p-4 flex items-center gap-3 border border-slate-100">
<div className="shrink-0 text-blue-600 bg-blue-100 rounded-full p-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-slate-700">Be responsive and communicative</span>
</div>
<div className="bg-slate-50/80 rounded-lg p-4 flex items-center gap-3 border border-slate-100">
<div className="shrink-0 text-blue-600 bg-blue-100 rounded-full p-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-slate-700">Show skin in the game</span>
</div>
<div className="bg-slate-50/80 rounded-lg p-4 flex items-center gap-3 border border-slate-100">
<div className="shrink-0 text-blue-600 bg-blue-100 rounded-full p-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-slate-700">Demonstrate market knowledge</span>
</div>
<div className="bg-slate-50/80 rounded-lg p-4 flex items-center gap-3 border border-slate-100">
<div className="shrink-0 text-blue-600 bg-blue-100 rounded-full p-1">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-slate-700">Have a reliable team in place</span>
</div>
</div>
</div>

<div className="text-center pt-8 pb-12 space-y-6">
<p className="text-slate-500">Ready to create your professional presentation?</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-6 py-2.5 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                    Review Reference Guide First
                </button>
<button className="px-6 py-2.5 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm">
                    Create Your Presentation
                </button>
</div>
</div>
</main>


    </>
  );
}
