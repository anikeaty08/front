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



      (function () {
        const items = document.querySelectorAll(".category-item");
        const chartLabel = document.getElementById("chart-label");
        const chartValue = document.getElementById("chart-value");

        function formatCurrency(value) {
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(value);
        }

        function setActive(item) {
          items.forEach((el) => {
            el.classList.remove(
              "border-slate-200",
              "bg-slate-900/5",
              "bg-emerald-500/10",
              "bg-sky-500/10",
              "bg-orange-500/10",
              "bg-violet-500/10",
              "border-emerald-400/80",
              "border-sky-400/80",
              "border-orange-400/80",
              "border-violet-400/80"
            );
            el.dataset.active = "false";
          });

          const cat = item.dataset.category;
          item.dataset.active = "true";

          // Base active style (for Total)
          item.classList.add("border-slate-200", "bg-slate-900/5");

          if (cat === "sales") {
            item.classList.remove("bg-slate-900/5", "border-slate-200");
            item.classList.add("bg-emerald-500/10", "border-emerald-400/80");
          } else if (cat === "subscriptions") {
            item.classList.remove("bg-slate-900/5", "border-slate-200");
            item.classList.add("bg-sky-500/10", "border-sky-400/80");
          } else if (cat === "services") {
            item.classList.remove("bg-slate-900/5", "border-slate-200");
            item.classList.add("bg-orange-500/10", "border-orange-400/80");
          } else if (cat === "other") {
            item.classList.remove("bg-slate-900/5", "border-slate-200");
            item.classList.add("bg-violet-500/10", "border-violet-400/80");
          }

          const label = item.dataset.label || "Total";
          const value = Number(item.dataset.value || 0);

          chartLabel.textContent = label;
          chartValue.textContent = formatCurrency(value);
        }

        items.forEach((item) => {
          item.addEventListener("click", () => setActive(item));
        });

        // Initialize with Total active
        const totalItem = document.querySelector('[data-category="total"]');
        if (totalItem) {
          setActive(totalItem);
        }
      })();
    
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
      
<div className="w-full max-w-6xl mx-auto p-6 md:p-10 lg:p-12">

<header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
<div>
<div className="inline-flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight text-slate-900">AD</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-[0.18em]">Activity Desk</span>
</div>
<h1 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Activity Overview
          </h1>
<p className="mt-1 text-base text-slate-500">
            Visualize category activity and review recent transactions.
          </p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
<span className="iconify" data-height="18" data-icon="lucide:calendar" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span>This Month</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-slate-50 px-4 py-2 text-sm font-medium hover:bg-black transition-colors shadow-sm">
<span className="iconify" data-height="18" data-icon="lucide:download" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span>Export</span>
</button>
</div>
</header>

<main className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

<section className="lg:col-span-2">
<div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-50 p-5 md:p-7 shadow-sm">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
<div>
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
                  Activity Summary
                </h2>
<p className="mt-1 text-base text-slate-500">
                  Distribution of activity by category with value amounts.
                </p>
</div>
<div className="flex flex-wrap gap-2">
<button className="rounded-full bg-slate-900 text-xs font-medium text-slate-50 px-3 py-1 border border-slate-900 hover:bg-black transition-colors">
                  All
                </button>
<button className="rounded-full bg-transparent text-xs font-medium text-slate-500 px-3 py-1 border border-slate-200 hover:border-slate-300 hover:text-slate-800 transition-colors">
                  Income
                </button>
<button className="rounded-full bg-transparent text-xs font-medium text-slate-500 px-3 py-1 border border-slate-200 hover:border-slate-300 hover:text-slate-800 transition-colors">
                  Expense
                </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">

<div className="flex items-center justify-center">
<div className="relative w-64 h-64 max-w-full">

<svg className="w-full h-full" viewbox="0 0 120 120">
<defs>
<lineargradient id="cat1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#22c55e"></stop>
<stop offset="100%" stop-color="#16a34a"></stop>
</lineargradient>
<lineargradient id="cat2" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0" stop-color="#38bdf8"></stop>
<stop offset="100%" stop-color="#0ea5e9"></stop>
</lineargradient>
<lineargradient id="cat3" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#f97316"></stop>
<stop offset="100%" stop-color="#ea580c"></stop>
</lineargradient>
<lineargradient id="cat4" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#7c3aed"></stop>
</lineargradient>
</defs>

<circle cx="60" cy="60" fill="transparent" r="40" stroke="#e2e8f0" strokeWidth="14"></circle>


<circle cx="60" cy="60" fill="transparent" r="40" stroke="url(#cat1)" stroke-dasharray="100.48 150.72" strokeLinecap="round" strokeWidth="14" transform="rotate(-90 60 60)"></circle>

<circle cx="60" cy="60" fill="transparent" r="40" stroke="url(#cat2)" stroke-dasharray="62.8 188.4" strokeLinecap="round" strokeWidth="14" transform="rotate(54 60 60)"></circle>

<circle cx="60" cy="60" fill="transparent" r="40" stroke="url(#cat3)" stroke-dasharray="50.24 200.96" strokeLinecap="round" strokeWidth="14" transform="rotate(144 60 60)"></circle>

<circle cx="60" cy="60" fill="transparent" r="40" stroke="url(#cat4)" stroke-dasharray="37.68 213.52" strokeLinecap="round" strokeWidth="14" transform="rotate(216 60 60)"></circle>

<circle cx="60" cy="60" fill="#f8fafc" r="26"></circle>
<text className="fill-slate-800" id="chart-label" style={{fontSize: '0.9rem', fontWeight: '600'}} text-anchor="middle" x="60" y="55">
                      Total
                    </text>
<text className="fill-slate-900" id="chart-value" style={{fontSize: '1.1rem', fontWeight: '600'}} text-anchor="middle" x="60" y="70">
                      $12,450
                    </text>
</svg>


<div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-white border border-emerald-500/40 px-2.5 py-1 shadow-sm">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
<span className="text-xs font-medium text-slate-700">Sales</span>
<span className="text-xs font-semibold text-emerald-600">$4,980</span>
</div>

<div className="absolute top-10 -right-2 flex items-center gap-1.5 rounded-full bg-white border border-sky-500/40 px-2.5 py-1 shadow-sm">
<div className="h-1.5 w-1.5 rounded-full bg-sky-400"></div>
<span className="text-xs font-medium text-slate-700">Subscriptions</span>
<span className="text-xs font-semibold text-sky-600">$3,110</span>
</div>

<div className="absolute bottom-6 -right-4 flex items-center gap-1.5 rounded-full bg-white border border-orange-500/40 px-2.5 py-1 shadow-sm">
<div className="h-1.5 w-1.5 rounded-full bg-orange-400"></div>
<span className="text-xs font-medium text-slate-700">Services</span>
<span className="text-xs font-semibold text-orange-600">$2,490</span>
</div>

<div className="absolute bottom-3 -left-4 flex items-center gap-1.5 rounded-full bg-white border border-violet-500/40 px-2.5 py-1 shadow-sm">
<div className="h-1.5 w-1.5 rounded-full bg-violet-400"></div>
<span className="text-xs font-medium text-slate-700">Other</span>
<span className="text-xs font-semibold text-violet-600">$1,870</span>
</div>

<div className="mt-4 hidden">

</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-700">Category Breakdown</span>
<span className="text-xs font-medium text-slate-500">Values in USD</span>
</div>
<div className="space-y-3" id="category-list">

<button className="group w-full flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-900/5 px-3 py-2 transition-colors hover:bg-slate-900/10 hover:border-slate-300 category-item" data-category="total" data-label="Total" data-value="12450" type="button">
<div className="flex items-center gap-3">
<span className="h-2 w-6 rounded-full bg-gradient-to-r from-slate-400 to-slate-600"></span>
<div className="text-left">
<p className="text-sm font-medium text-slate-900">Total</p>
<p className="text-sm text-slate-500">All categories combined</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">$12,450</p>
<p className="text-xs text-slate-500">100%</p>
</div>
</button>

<button className="group w-full flex items-center justify-between gap-3 rounded-xl border border-transparent bg-transparent px-3 py-2 transition-colors hover:bg-emerald-500/5 hover:border-emerald-400/60 category-item" data-category="sales" data-label="Sales" data-value="4980" type="button">
<div className="flex items-center gap-3">
<span className="h-2 w-6 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"></span>
<div className="text-left">
<p className="text-sm font-medium text-slate-900">Sales</p>
<p className="text-sm text-slate-500">40% of total activity</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">$4,980</p>
<p className="text-xs text-emerald-600">+12.3%</p>
</div>
</button>

<button className="group w-full flex items-center justify-between gap-3 rounded-xl border border-transparent bg-transparent px-3 py-2 transition-colors hover:bg-sky-500/5 hover:border-sky-400/60 category-item" data-category="subscriptions" data-label="Subscriptions" data-value="3110" type="button">
<div className="flex items-center gap-3">
<span className="h-2 w-6 rounded-full bg-gradient-to-r from-sky-400 to-sky-500"></span>
<div className="text-left">
<p className="text-sm font-medium text-slate-900">Subscriptions</p>
<p className="text-sm text-slate-500">25% of total activity</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">$3,110</p>
<p className="text-xs text-sky-600">+5.4%</p>
</div>
</button>

<button className="group w-full flex items-center justify-between gap-3 rounded-xl border border-transparent bg-transparent px-3 py-2 transition-colors hover:bg-orange-500/5 hover:border-orange-400/60 category-item" data-category="services" data-label="Services" data-value="2490" type="button">
<div className="flex items-center gap-3">
<span className="h-2 w-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-500"></span>
<div className="text-left">
<p className="text-sm font-medium text-slate-900">Services</p>
<p className="text-sm text-slate-500">20% of total activity</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">$2,490</p>
<p className="text-xs text-orange-600">+2.9%</p>
</div>
</button>

<button className="group w-full flex items-center justify-between gap-3 rounded-xl border border-transparent bg-transparent px-3 py-2 transition-colors hover:bg-violet-500/5 hover:border-violet-400/60 category-item" data-category="other" data-label="Other" data-value="1870" type="button">
<div className="flex items-center gap-3">
<span className="h-2 w-6 rounded-full bg-gradient-to-r from-violet-400 to-violet-500"></span>
<div className="text-left">
<p className="text-sm font-medium text-slate-900">Other</p>
<p className="text-sm text-slate-500">15% of total activity</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">$1,870</p>
<p className="text-xs text-violet-600">-1.1%</p>
</div>
</button>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-500">
<div className="inline-flex items-center gap-1.5">
<span className="iconify" data-height="14" data-icon="lucide:info" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Based on confirmed transactions only.</span>
</div>
<button className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 transition-colors">
<span className="text-xs font-medium">View detailed report</span>
<span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>
</section>

<aside className="space-y-4">
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-[0.18em]">
                  Snapshot
                </p>
<p className="mt-1 text-base font-semibold text-slate-900 tracking-tight">
                  Today’s Activity
                </p>
</div>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
<span className="iconify" data-height="18" data-icon="lucide:activity" data-width="18" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-slate-500">New Transactions</p>
<p className="text-base font-semibold text-slate-900">128</p>
</div>
<span className="text-xs font-medium text-emerald-600 inline-flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:arrow-up-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  9.2%
                </span>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm-slate-500">Average Value</p>
<p className="text-base font-semibold text-slate-900">$96.80</p>
</div>
<span className="text-xs font-medium text-sky-600 inline-flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:arrow-up-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  3.4%
                </span>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-slate-500">Conversion Rate</p>
<p className="text-base font-semibold text-slate-900">4.3%</p>
</div>
<span className="text-xs font-medium text-orange-500 inline-flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:arrow-down-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  1.1%
                </span>
</div>
</div>
<div className="mt-4 h-16 rounded-xl bg-gradient-to-r from-slate-50 to-white border border-slate-200 flex items-center justify-between px-3">
<div>
<p className="text-xs text-slate-500">Projected total for today</p>
<p className="text-base font-semibold text-slate-900 tracking-tight">$13,920</p>
</div>
<div className="flex items-center gap-1 text-xs text-slate-500">
<span className="iconify text-emerald-500" data-height="16" data-icon="lucide:trending-up" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>On track</span>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between mb-4">
<p className="text-sm font-medium text-slate-900">Filters</p>
<button className="text-xs text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:filter" data-width="14" style={{strokeWidth: '1.5'}}></span>
                Reset
              </button>
</div>
<div className="space-y-3">
<div>
<p className="text-xs text-slate-500 mb-1">Type</p>
<div className="flex flex-wrap gap-2">
<button className="rounded-full bg-slate-900 text-xs font-medium text-slate-50 px-3 py-1 border border-slate-900">
                    All
                  </button>
<button className="rounded-full bg-transparent text-xs font-medium text-slate-500 px-3 py-1 border border-slate-200 hover:border-slate-300 hover:text-slate-900">
                    Credit
                  </button>
<button className="rounded-full bg-transparent text-xs font-medium text-slate-500 px-3 py-1 border border-slate-200 hover:border-slate-300 hover:text-slate-900">
                    Debit
                  </button>
</div>
</div>
<div>
<p className="text-xs text-slate-500 mb-1">Status</p>
<div className="flex flex-wrap gap-2">
<button className="rounded-full bg-transparent text-xs font-medium text-slate-500 px-3 py-1 border border-slate-200 hover:border-slate-300 hover:text-slate-900">
                    Pending
                  </button>
<button className="rounded-full bg-transparent text-xs font-medium text-slate-500 px-3 py-1 border border-slate-200 hover:border-slate-300 hover:text-slate-900">
                    Completed
                  </button>
<button className="rounded-full bg-transparent text-xs font-medium text-slate-500 px-3 py-1 border border-slate-200 hover:border-slate-300 hover:text-slate-900">
                    Failed
                  </button>
</div>
</div>
</div>
</div>
</aside>
</main>

<section className="mt-10">
<div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
<div>
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
                Transactions
              </h2>
<p className="mt-1 text-base text-slate-500">
                Recent activity across all categories.
              </p>
</div>
<div className="flex flex-wrap gap-2 items-center">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
<span className="iconify" data-height="16" data-icon="lucide:search" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<input className="w-48 md:w-60 rounded-full border border-slate-200 bg-white pl-8 pr-3-1.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300" placeholder="Search transactions" style={{fontSize: '0.78rem'}} type="text"/>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:sliders-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Advanced filters</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-left text-sm">
<thead>
<tr className="border-b border-slate-200 text-xs text-slate-500">
<th className="py-2.5 pr-4 font-medium">Date</th>
<th className="py-2.5 pr-4 font-medium">Description</th>
<th className="py-2.5 pr-4 font-medium">Category</th>
<th className="py-2.5 pr-4 font-medium">Type</th>
<th className="py-2.5 pr-4 font-medium text-right">Amount</th>
<th className="py-2.5 pl-4 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50 transition-colors">
<td className="py-2.5 pr-4 text-slate-600 whitespace-nowrap">Jan 12, 2026</td>
<td className="py-2.5 pr-4 text-slate-900">
                    Online store purchase
                    <span className="block text-xs text-slate-500">Order #48291</span>
</td>
<td className="py-2.5 pr-4">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/5 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Sales
                    </span>
</td>
<td className="py-2.5 pr-4 text-xs text-emerald-600">Credit</td>
<td className="py-2.5 pr-4 text-right font-semibold text-slate-900">$245.00</td>
<td className="py-2.5 pl-4 text-right">
<span className="inline-flex items-center justify-end gap-1 rounded-full bg-emerald-500/5 border border-emerald-500/40 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Completed
                    </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="py-2.5 pr-4 text-slate-600 whitespace-nowrap">Jan 12, 2026</td>
<td className="py-2.5 pr-4 text-slate-900">
                    Pro subscription renewal
                    <span className="block text-xs text-slate-500">User: alex.w</span>
</td>
<td className="py-2.5 pr-4">
<span className="inline-flex items-center gap-1 rounded-full bg-sky-500/5 border border-sky-500/30 px-2.5 py-0.5 text-xs font-medium text-sky-600">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                      Subscriptions
                    </span>
</td>
<td className="py-2.5 pr-4 text-xs text-emerald-600">Credit</td>
<td className="py-2.5 pr-4 text-right font-semibold text-slate-900">$32.00</td>
<td className="py-2.5 pl-4 text-right">
<span className="inline-flex items-center justify-end gap-1 rounded-full bg-amber-500/5 border border-amber-500/40 px-2.5 py-0.5 text-xs font-medium text-amber-600">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                      Pending
                    </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="py-2.5 pr-4 text-slate-600 whitespace-nowrap">Jan 11, 2026</td>
<td className="py-2.5 pr-4 text-slate-900">
                    Consulting invoice
                    <span className="block text-xs text-slate-500">Client: Horizon Labs</span>
</td>
<td className="py-2.5 pr-4">
<span className="inline-flex items-center gap-1 rounded-full bg-orange-500/ border border-orange-500/30 px-2.5 py-0.5 text-xs font-medium text-orange-600">
<span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                      Services
                    </span>
</td>
<td className="py-2.5 pr-4 text-xs text-emerald-600">Credit</td>
<td className="py-2.5 pr-4 text-right font-semibold text-slate-900">$1,240.00</td>
<td className="py-2.5 pl-4 text-right">
<span className="inline-flex items-center justify-end gap-1 rounded-full bg-emerald-500/5 border border-emerald-500/40 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Completed
                    </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="py-2.5 pr-4 text-slate-600 whitespace-nowrap">Jan 11, 2026</td>
<td className="py-2.5 pr-4 text-slate-900">
                    Refund processed
                    <span className="block text-xs text-slate-500">Order #48129</span>
</td>
<td className="py-2.5 pr-4">
<span className="inline-flex items-center gap-1 rounded-full bg-violet-500/5 border border-violet-500/30 px-2.5 py-0.5 text-xs font-medium text-violet-600">
<span className="h-1.5 w-1.5 rounded-full bg-violet-400"></span>
                      Other
                    </span>
</td>
<td className="py-2.5 pr-4 text-xs text-rose-500">Debit</td>
<td className="py-2.5 pr-4 text-right font-semibold text-rose-500">-$58.00</td>
<td className="py-2.5 pl-4 text-right">
<span className="inline-flex items-center justify-end gap-1 rounded-full bg-rose-500/5 border border-rose-500/40 px-2.5 py-0.5 text-xs font-medium text-rose-500">
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                      Failed
                    </span>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="py-2.5 pr-4 text-slate-600 whitespace-nowrap">Jan 10, 2026</td>
<td className="py-2.5 pr-4 text-slate-900">
                    Enterprise license
                    <span className="block text-xs text-slate-500">Customer: Apex Corp</span>
</td>
<td className="py-2.5 pr-4">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/5 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Sales
                    </span>
</td>
<td className="py-2.5 pr-4 text-xs text-emerald-600">Credit</td>
<td className="py-2.5 pr-4 text-right font-semibold text-slate-900">$6,720.00</td>
<td className="py-2.5 pl-4 text-right">
<span className="inline-flex items-center justify-end gap-1 rounded-full bg-emerald-500/5 border border-emerald-500/40 px-2.5 py-0.5 text-xs font-medium text-emerald-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Completed
                    </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<p className="text-xs text-slate-500">
              Showing
              <span className="font-medium text-slate-700">1–5</span>
              of
              <span className="font-medium text-slate-700">32</span>
              transactions
            </p>
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white" disabled="">
<span className="iconify" data-height="16" data-icon="lucide:chevron-left" data-width="16" style={{strokeWidth: '1.5'}}></span>
                Prev
              </button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-50">
                1
              </button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-50">
                2
              </button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-50">
                3
              </button>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50">
                Next
                <span className="iconify" data-height="16" data-icon="lucide:chevron-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
