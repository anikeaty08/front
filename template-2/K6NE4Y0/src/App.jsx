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
      

<div className="min-h-screen flex flex-col" id="app">

<header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-neutral-200/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="inline-flex items-center justify-center size-9 rounded-md bg-emerald-600 text-white font-semibold tracking-tight select-none shadow-sm ring-1 ring-black/5">
<span className="text-sm">SM</span>
</div>
<div className="flex items-center gap-2">
<h1 className="text-[20px] sm:text-[22px] font-semibold tracking-tight">Sales Magics</h1>
<span className="inline-flex items-center gap-1 text-emerald-700/90 bg-emerald-100/70 px-2 py-0.5 rounded-md text-[12px] ring-1 ring-emerald-600/10">
<i className="size-3.5" data-lucide="wand-2"></i>
                  Funnel Builder
                </span>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium rounded-md bg-white hover:bg-neutral-50 text-neutral-900 ring-1 ring-neutral-200 hover:ring-neutral-300 transition" id="saveDraftBtn">
<i className="size-[18px]" data-lucide="save"></i>
                  Save Draft
                </button>
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium rounded-md bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm ring-1 ring-black/5 transition" id="publishBtn">
<i className="size-[18px]" data-lucide="rocket"></i>
                  Publish
                </button>
</div>
</div>
</div>

<div className="hidden lg:flex items-center gap-4 py-3">
<nav className="flex items-center gap-2 text-sm">
<button className="wizard-step inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 text-neutral-700 transition" data-step-nav="dashboard">
<span className="size-5 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-600/10 text-[12px] font-medium">0</span>
                Dashboard
              </button>
<i className="size-4 text-neutral-400" data-lucide="chevron-right"></i>
<button className="wizard-step inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 text-neutral-700 transition" data-step-nav="product">
<span className="size-5 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-600/10 text-[12px] font-medium">1</span>
                Product Setup
              </button>
<i className="size-4 text-neutral-400" data-lucide="chevron-right"></i>
<button className="wizard-step inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 text-neutral-700 transition" data-step-nav="checkout">
<span className="size-5 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-600/10 text-[12px] font-medium">2</span>
                Checkout Builder
              </button>
<i className="size-4 text-neutral-400" data-lucide="chevron-right"></i>
<button className="wizard-step inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 text-neutral-700 transition" data-step-nav="bump">
<span className="size-5 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-600/10 text-[12px] font-medium">3</span>
                Order Bump
              </button>
<i className="size-4 text-neutral-400" data-lucide="chevron-right"></i>
<button className="wizard-step inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 text-neutral-700 transition" data-step-nav="upsells">
<span className="size-5 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-600/10 text-[12px] font-medium">4</span>
                Upsells
              </button>
<i className="size-4 text-neutral-400" data-lucide="chevron-right"></i>
<button className="wizard-step inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 text-neutral-700 transition" data-step-nav="downsells">
<span className="size-5 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-600/10 text-[12px] font-medium">5</span>
                Downsells
              </button>
<i className="size-4 text-neutral-400" data-lucide="chevron-right"></i>
<button className="wizard-step inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 text-neutral-700 transition" data-step-nav="thankyou">
<span className="size-5 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-600/10 text-[12px] font-medium">6</span>
                Thank You
              </button>
<i className="size-4 text-neutral-400" data-lucide="chevron-right"></i>
<button className="wizard-step inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 text-neutral-700 transition" data-step-nav="map">
<span className="size-5 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-600/10 text-[12px] font-medium">7</span>
                Funnel Map
              </button>
<i className="size-4 text-neutral-400" data-lucide="chevron-right"></i>
<button className="wizard-step inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 text-neutral-700 transition" data-step-nav="analytics">
<span className="size-5 inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-1 ring-emerald-600/10 text-[12px] font-medium">8</span>
                Analytics
              </button>
</nav>
</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">

<section className="space-y-6" id="view-dashboard">
<div className="flex items-center justify-between">
<div>
<h2 className="text-[24px] sm:text-[28px] font-semibold tracking-tight">Dashboard</h2>
<p className="text-sm text-neutral-600">Manage funnels, track performance, and create new flows.</p>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 ring-1 ring-black/5 shadow-sm transition" id="createFunnelBtn">
<i className="size-[18px]" data-lucide="plus"></i>
                Create New Funnel
              </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Total Revenue</span>
<i className="size-4 text-emerald-600" data-lucide="banknote"></i>
</div>
<div className="mt-2 text-[22px] font-semibold tracking-tight">$128,940</div>
<div className="mt-1 text-xs text-emerald-700">+12.4% MoM</div>
</div>
<div className="p-4 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Avg. Conversion</span>
<i className="size-4 text-emerald-600" data-lucide="line-chart"></i>
</div>
<div className="mt-2 text-[22px] font-semibold tracking-tight">3.9%</div>
<div className="mt-1 text-xs text-emerald-700">+0.6% WoW</div>
</div>
<div className="p-4 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Active Funnels</span>
<i className="size-4 text-emerald-600" data-lucide="workflow"></i>
</div>
<div className="mt-2 text-[22px] font-semibold tracking-tight">8</div>
<div className="mt-1 text-xs text-neutral-700">2 drafts</div>
</div>
</div>

<div className="rounded-xl bg-white ring-1 ring-neutral-200 overflow-hidden">
<div className="px-4 py-3 border-b border-neutral-200/70 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="size-4 text-neutral-500" data-lucide="list"></i>
<span className="text-sm font-medium">Recent Funnels</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white ring-1 ring-neutral-200 text-sm hover:bg-neutral-50">All</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white ring-1 ring-neutral-200 text-sm hover:bg-neutral-50">Live</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white ring-1 ring-neutral-200 text-sm hover:bg-neutral-50">Drafts</button>
</div>
</div>
<div className="divide-y divide-neutral-200/70">
<div className="px-4 py-3 grid grid-cols-12 gap-3 items-center hover:bg-neutral-50/60 transition">
<div className="col-span-5">
<div className="flex items-center gap-3">
<div className="size-9 rounded-md bg-emerald-50 ring-1 ring-emerald-600/10 flex items-center justify-center text-emerald-700">
<i className="size-4" data-lucide="shopping-cart"></i>
</div>
<div>
<div className="text-sm font-medium">Webinar Mastery Funnel</div>
<div className="text-xs text-neutral-600">Last edited 2d ago</div>
</div>
</div>
</div>
<div className="col-span-2">
<div className="text-sm">$24,310</div>
<div className="text-xs text-neutral-600">30d revenue</div>
</div>
<div className="col-span-2">
<div className="text-sm">4.3%</div>
<div className="text-xs text-neutral-600">Checkout Conv.</div>
</div>
<div className="col-span-3 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white ring-1 ring-neutral-200 text-sm hover:bg-neutral-50" onClick={(e) => { enterWizardFromDashboard() }}>Open</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-600 text-white ring-1 ring-black/5 text-sm hover:bg-emerald-700">View</button>
</div>
</div>
<div className="px-4 py-3 grid grid-cols-12 gap-3 items-center hover:bg-neutral-50/60 transition">
<div className="col-span-5">
<div className="flex items-center gap-3">
<div className="size-9 rounded-md bg-emerald-50 ring-1 ring-emerald-600/10 flex items-center justify-center text-emerald-700">
<i className="size-4" data-lucide="graduation-cap"></i>
</div>
<div>
<div className="text-sm font-medium">Course Launch Pro</div>
<div className="text-xs text-neutral-600">Last edited 5h ago</div>
</div>
</div>
</div>
<div className="col-span-2">
<div className="text-sm">$8,190</div>
<div className="text-xs text-neutral-600">30d revenue</div>
</div>
<div className="col-span-2">
<div className="text-sm">3.6%</div>
<div className="text-xs text-neutral-600">Checkout Conv.</div>
</div>
<div className="col-span-3 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white ring-1 ring-neutral-200 text-sm hover:bg-neutral-50" onClick={(e) => { enterWizardFromDashboard() }}>Open</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-600 text-white ring-1 ring-black/5 text-sm hover:bg-emerald-700">View</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="view-product">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 space-y-4">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-[20px] font-semibold tracking-tight">Step 1 — Product Setup</h3>
<p className="text-sm text-neutral-600">Define your product details and pricing options.</p>
</div>
<span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md ring-1 ring-emerald-600/10">
<i className="size-3.5" data-lucide="shield-check"></i>
                      Autosave
                    </span>
</div>
<div className="mt-4 grid grid-cols-1 gap-4">
<label className="grid gap-1.5">
<span className="text-sm font-medium">Product Name</span>
<input className="w-full rounded-md border border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500/40 px-3 py-2 text-sm transition" id="productName" placeholder="e.g., Sales Mastery Course" type="text" />
</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="grid gap-1.5">
<span className="text-sm font-medium">Price Options</span>
<div className="flex flex-wrap gap-2">
<label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md ring-1 ring-neutral-300 hover:ring-emerald-300 cursor-pointer transition">
<input checked className="accent-emerald-600" name="priceType" type="radio" value="one-time" />
<span className="text-sm">One-time</span>
</label>
<label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md ring-1 ring-neutral-300 hover:ring-emerald-300 cursor-pointer transition">
<input className="accent-emerald-600" name="priceType" type="radio" value="subscription" />
<span className="text-sm">Subscription</span>
</label>
<label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md ring-1 ring-neutral-300 hover:ring-emerald-300 cursor-pointer transition">
<input className="accent-emerald-600" name="priceType" type="radio" value="trial" />
<span className="text-sm">Trial</span>
</label>
<label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md ring-1 ring-neutral-300 hover:ring-emerald-300 cursor-pointer transition">
<input className="accent-emerald-600" name="priceType" type="radio" value="plan" />
<span className="text-sm">Payment Plan</span>
</label>
</div>
</label>
<label className="grid gap-1.5">
<span className="text-sm font-medium">Price Amount</span>
<div className="flex items-center gap-2">
<span className="text-sm text-neutral-700">$</span>
<input className="w-full rounded-md border border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500/40 px-3 py-2 text-sm transition" id="priceAmount" min="0" step="1" type="number" value="97" />
</div>
</label>
</div>
<label className="grid gap-1.5">
<span className="text-sm font-medium">Description</span>
<textarea className="w-full rounded-md border border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500/40 px-3 py-2 text-sm transition" id="productDesc" placeholder="What will customers get?" rows="4"></textarea>
</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="grid gap-1.5">
<span className="text-sm font-medium">Upload Product Image</span>
<input accept="image/*" className="block w-full text-sm file:mr-3 file:px-3 file:py-2 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 cursor-pointer" id="productImage" type="file" />
</label>
<label className="grid gap-1.5">
<span className="text-sm font-medium">SKU / ID</span>
<input className="w-full bg-neutral-50 rounded-md border border-neutral-300 px-3 py-2 text-sm transition" disabled id="productSku" placeholder="AUTO-GENERATED" type="text" />
</label>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-white ring-1 ring-neutral-200 hover:bg-neutral-50 text-sm transition" onClick={(e) => { goToStep('dashboard') }}>
<i className="size-[18px]" data-lucide="chevron-left"></i>
                      Back to Dashboard
                    </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 text-white ring-1 ring-black/5 hover:bg-emerald-700 text-sm transition" onClick={(e) => { goToStep('checkout') }}>
                      Next — Checkout Page
                      <i className="size-[18px]" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<div className="flex items-center justify-between">
<h4 className="text-[18px] font-medium tracking-tight">Product Preview</h4>
<span className="inline-flex items-center gap-1 text-xs text-neutral-600">
<i className="size-4" data-lucide="eye"></i>
                      Live
                    </span>
</div>
<div className="mt-4 space-y-3">
<div className="aspect-[16/9] w-full rounded-lg overflow-hidden ring-1 ring-neutral-200 bg-neutral-50">
<img alt="Product" className="w-full h-full object-cover" id="productImagePreview" src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1200&auto=format&fit=crop" />
</div>
<div>
<div className="text-[18px] font-semibold tracking-tight" id="productNamePreview">Sales Mastery Course</div>
<div className="text-sm text-neutral-700 mt-1" id="productDescPreview">Transform your sales funnel into a predictable revenue machine.</div>
<div className="mt-2 inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md ring-1 ring-emerald-600/10 text-sm">
<i className="size-4" data-lucide="tag"></i>
<span id="productPricePreview">$97 one-time</span>
</div>
</div>
<div className="pt-3 border-t border-neutral-200/70 flex items-center justify-between">
<div className="text-xs text-neutral-600">Funnel ID</div>
<div className="text-xs font-medium" id="funnelIdPreview">—</div>
</div>
</div>
</div>
<div className="mt-4 rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<div className="flex items-center gap-2 text-sm text-neutral-700">
<i className="size-4 text-emerald-600" data-lucide="info"></i>
                    Price options impact checkout form fields and recurring billing.
                  </div>
</div>
</div>
</div>
</section>

<section className="hidden" id="view-checkout">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-6 space-y-4">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<h3 className="text-[20px] font-semibold tracking-tight">Step 2 — Checkout Builder</h3>
<p className="text-sm text-neutral-600">Choose a template and customize branding.</p>
<div className="mt-4 grid grid-cols-2 gap-3">
<button className="template-card group rounded-lg ring-1 ring-neutral-200 hover:ring-emerald-300 bg-white p-3 text-left transition" data-template="one-step">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">One-step</span>
<span className="hidden selected-check text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md text-xs ring-1 ring-emerald-600/10">Selected</span>
</div>
<div className="mt-2 h-20 rounded-md bg-neutral-50 ring-1 ring-neutral-200 flex justify-center items-center">
<i className="size-5 text-neutral-400" data-lucide="square"></i>
</div>
</button>
<button className="template-card group rounded-lg ring-1 ring-neutral-200 hover:ring-emerald-300 bg-white p-3 text-left transition" data-template="two-step">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Two-step</span>
<span className="hidden selected-check text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md text-xs ring-1 ring-emerald-600/10">Selected</span>
</div>
<div className="mt-2 h-20 rounded-md bg-neutral-50 ring-1 ring-neutral-200 flex justify-center items-center">
<i className="size-5 text-neutral-400" data-lucide="columns-2"></i>
</div>
</button>
<button className="template-card group rounded-lg ring-1 ring-neutral-200 hover:ring-emerald-300 bg-white p-3 text-left transition" data-template="popup">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Popup</span>
<span className="hidden selected-check text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md text-xs ring-1 ring-emerald-600/10">Selected</span>
</div>
<div className="mt-2 h-20 rounded-md bg-neutral-50 ring-1 ring-neutral-200 flex justify-center items-center">
<i className="size-5 text-neutral-400" data-lucide="panel-top"></i>
</div>
</button>
<button className="template-card group rounded-lg ring-1 ring-neutral-200 hover:ring-emerald-300 bg-white p-3 text-left transition" data-template="embed">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Embedded</span>
<span className="hidden selected-check text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md text-xs ring-1 ring-emerald-600/10">Selected</span>
</div>
<div className="mt-2 h-20 rounded-md bg-neutral-50 ring-1 ring-neutral-200 flex justify-center items-center">
<i className="size-5 text-neutral-400" data-lucide="panel-left"></i>
</div>
</button>
</div>
<div className="mt-4 grid grid-cols-1 gap-4">
<label className="grid gap-1.5">
<span className="text-sm font-medium">Logo URL</span>
<input className="w-full rounded-md border border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500/40 px-3 py-2 text-sm transition" id="logoUrl" placeholder="https://..." type="url" />
</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="grid gap-1.5">
<span className="text-sm font-medium">Primary Color</span>
<div className="flex items-center gap-3">
<input className="size-9 p-1 rounded-md border border-neutral-300" id="primaryColor" type="color" value="#059669" />
<span className="text-sm text-neutral-700" id="primaryColorHex">#059669</span>
</div>
</label>
<label className="grid gap-1.5">
<span className="text-sm font-medium">Checkout Button Text</span>
<input className="w-full rounded-md border border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500/40 px-3 py-2 text-sm transition" id="checkoutCtaText" type="text" value="Complete Purchase" />
</label>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="flex items-center justify-between p-3 rounded-md ring-1 ring-neutral-200 hover:ring-emerald-300 bg-white cursor-pointer transition">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-600" data-lucide="badge-check"></i>
<span className="text-sm font-medium">Trust Badges</span>
</div>
<button className="toggle inline-flex items-center w-11 h-6 rounded-full bg-neutral-200 transition relative" id="trustBadgesToggle" type="button">
<span className="dot absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow ring-1 ring-black/5 transition"></span>
</button>
</label>
<label className="flex items-center justify-between p-3 rounded-md ring-1 ring-neutral-200 hover:ring-emerald-300 bg-white cursor-pointer transition">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-600" data-lucide="message-square"></i>
<span className="text-sm font-medium">Testimonials</span>
</div>
<button className="toggle inline-flex items-center w-11 h-6 rounded-full bg-neutral-200 transition relative" id="testimonialsToggle" type="button">
<span className="dot absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow ring-1 ring-black/5 transition"></span>
</button>
</label>
</div>
<label className="hidden grid gap-1.5" id="testimonialsEditor">
<span className="text-sm font-medium">Testimonials (optional)</span>
<textarea className="w-full rounded-md border border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500/40 px-3 py-2 text-sm transition" placeholder="“This product changed my life!” — Alex, Founder" rows="3"></textarea>
</label>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-white ring-1 ring-neutral-200 hover:bg-neutral-50 text-sm transition" onClick={(e) => { goToStep('product') }}>
<i className="size-[18px]" data-lucide="chevron-left"></i>
                      Back — Product
                    </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 text-white ring-1 ring-black/5 hover:bg-emerald-700 text-sm transition" onClick={(e) => { goToStep('bump') }}>
                      Next — Order Bump
                      <i className="size-[18px]" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 overflow-hidden">
<div className="px-4 py-3 border-b border-neutral-200/70 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-600" data-lucide="monitor"></i>
<span className="text-sm font-medium">Live Checkout Preview</span>
</div>
<button className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs ring-1 ring-neutral-200 hover:bg-neutral-50 transition" onClick={(e) => { simulateCheckout() }}>
<i className="size-3.5" data-lucide="cursor-click"></i>
                      Test CTA
                    </button>
</div>
<div className="p-5 space-y-4" id="checkoutPreview">

<div className="flex items-center gap-3">
<img alt="Logo" className="h-8 w-auto rounded" id="logoPreview" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="text-sm text-neutral-600">Secure Checkout</div>
</div>

<div className="grid grid-cols-1 gap-4" id="templatePreview">
<div className="rounded-lg ring-1 ring-neutral-200 bg-neutral-50 p-4">
<div className="text-sm font-medium mb-2">Product</div>
<div className="flex items-center gap-3">
<img className="size-12 rounded-md object-cover ring-1 ring-neutral-200" id="cpImage" src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1200&auto=format&fit=crop" />
<div>
<div className="text-sm font-medium" id="cpName">Sales Mastery Course</div>
<div className="text-xs text-neutral-600" id="cpPrice">$97 one-time</div>
</div>
</div>
</div>
<div className="rounded-lg ring-1 ring-neutral-200 bg-neutral-50 p-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="grid gap-1.5">
<span className="text-xs text-neutral-700">Full Name</span>
<input className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:ring-emerald-500/40 focus:border-emerald-500 transition" placeholder="Jane Doe" type="text" />
</label>
<label className="grid gap-1.5">
<span className="text-xs text-neutral-700">Email</span>
<input className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:ring-emerald-500/40 focus:border-emerald-500 transition" placeholder="jane@company.com" type="email" />
</label>
<label className="grid gap-1.5">
<span className="text-xs text-neutral-700">Card Number</span>
<input className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:ring-emerald-500/40 focus:border-emerald-500 transition" placeholder="**** **** **** 4242" type="text" />
</label>
<div className="grid grid-cols-2 gap-3">
<label className="grid gap-1.5">
<span className="text-xs text-neutral-700">Exp.</span>
<input className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:ring-emerald-500/40 focus:border-emerald-500 transition" placeholder="MM/YY" type="text" />
</label>
<label className="grid gap-1.5">
<span className="text-xs text-neutral-700">CVC</span>
<input className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:ring-emerald-500/40 focus:border-emerald-500 transition" placeholder="CVC" type="text" />
</label>
</div>
</div>
</div>

<div className="hidden" id="orderBumpSlot"></div>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 text-white ring-1 ring-black/5 hover:bg-emerald-700 transition text-sm font-medium" id="checkoutCta">
<i className="size-[18px]" data-lucide="lock"></i>
                        Complete Purchase
                      </button>

<div className="hidden items-center justify-center gap-4 text-neutral-500" id="trustBadges">
<div className="inline-flex items-center gap-2">
<i className="size-4" data-lucide="shield"></i>
<span className="text-xs">Secure</span>
</div>
<div className="inline-flex items-center gap-2">
<i className="size-4" data-lucide="credit-card"></i>
<span className="text-xs">256-bit SSL</span>
</div>
<div className="inline-flex items-center gap-2">
<i className="size-4" data-lucide="clock"></i>
<span className="text-xs">Instant Access</span>
</div>
</div>

<div className="hidden rounded-lg ring-1 ring-neutral-200 bg-white p-4" id="testimonialsBlock">
<div className="flex items-center gap-2 mb-2">
<i className="size-4 text-emerald-600" data-lucide="message-square"></i>
<span className="text-sm font-medium">What customers say</span>
</div>
<p className="text-sm text-neutral-700" id="testimonialsText">“This product changed my life!” — Alex, Founder</p>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-neutral-600">Preview updates with your changes. Template layout may adjust field grouping.</p>
</div>
</div>
</section>

<section className="hidden" id="view-bump">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-6 space-y-4">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<h3 className="text-[20px] font-semibold tracking-tight">Step 3 — Order Bump</h3>
<p className="text-sm text-neutral-600">Small pre-checkout offer to increase AOV.</p>
<div className="mt-4 grid grid-cols-1 gap-4">
<label className="flex items-center justify-between p-3 rounded-md ring-1 ring-neutral-200 hover:ring-emerald-300 bg-white cursor-pointer transition">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-600" data-lucide="sparkles"></i>
<span className="text-sm font-medium">Enable Order Bump</span>
</div>
<button className="toggle inline-flex items-center w-11 h-6 rounded-full bg-neutral-200 transition relative" id="bumpToggle" type="button">
<span className="dot absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow ring-1 ring-black/5 transition"></span>
</button>
</label>
<div className="hidden space-y-4" id="bumpConfig">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="grid gap-1.5">
<span className="text-sm font-medium">Upsell Product</span>
<select className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-emerald-500/40" id="bumpProduct">
</select>
</label>
<label className="grid gap-1.5">
<span className="text-sm font-medium">Pricing Style</span>
<select className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-emerald-500/40" id="bumpPricingStyle">
<option value="flat">Flat fee</option>
<option value="discount">Discounted add-on</option>
<option value="subscription-add">Subscription add-on</option>
</select>
</label>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="grid gap-1.5">
<span className="text-sm font-medium">Placement</span>
<select className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-emerald-500/40" id="bumpPlacement">
<option value="before">Before checkout button</option>
<option value="after">After checkout button</option>
</select>
</label>
<label className="grid gap-1.5">
<span className="text-sm font-medium">Highlight Color</span>
<div className="flex items-center gap-3">
<input className="size-9 p-1 rounded-md border border-neutral-300" id="bumpColor" type="color" value="#A7F3D0" />
<span className="text-sm text-neutral-700" id="bumpColorHex">#A7F3D0</span>
</div>
</label>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="grid gap-1.5">
<span className="text-sm font-medium">Checkbox Label</span>
<input className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-emerald-500/40" id="bumpLabel" type="text" value="Yes, add the advanced toolkit to my order" />
</label>
<label className="grid gap-1.5">
<span className="text-sm font-medium">Mini Image</span>
<input accept="image/*" className="block w-full text-sm file:mr-3 file:px-3 file:py-2 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 cursor-pointer" id="bumpImage" type="file" />
</label>
</div>
</div>
<div className="rounded-lg ring-1 ring-neutral-200 bg-neutral-50 p-3 text-xs text-neutral-700">
                      Tip: Keep order bumps simple and obviously valuable.
                    </div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-white ring-1 ring-neutral-200 hover:bg-neutral-50 text-sm transition" onClick={(e) => { goToStep('checkout') }}>
<i className="size-[18px]" data-lucide="chevron-left"></i>
                      Back — Checkout
                    </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 text-white ring-1 ring-black/5 hover:bg-emerald-700 text-sm transition" onClick={(e) => { goToStep('upsells') }}>
                      Next — Upsells
                      <i className="size-[18px]" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 overflow-hidden">
<div className="px-4 py-3 border-b border-neutral-200/70 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-600" data-lucide="square-plus"></i>
<span className="text-sm font-medium">Bump Preview</span>
</div>
<div className="text-xs text-neutral-600">Appears on checkout</div>
</div>
<div className="p-5" id="bumpPreviewContainer">
<div className="hidden rounded-md p-3 border-2 border-dashed border-emerald-300/70 bg-emerald-50/50" id="bumpPreviewCard">
<label className="flex items-start gap-3 cursor-pointer">
<input className="mt-1 accent-emerald-600" id="bumpCheckbox" type="checkbox" />
<div className="flex-1">
<div className="flex items-center gap-3">
<img className="size-10 rounded-md object-cover ring-1 ring-neutral-200" id="bumpMiniImage" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="text-sm font-medium" id="bumpPreviewLabel">Yes, add the advanced toolkit to my order</div>
</div>
<div className="mt-1 text-xs text-neutral-700">
<span id="bumpPreviewProduct">Toolkit Add-on</span> —
                            <span id="bumpPreviewPricing">+ $29</span>
</div>
</div>
</label>
</div>
</div>
</div>
<p className="mt-3 text-xs text-neutral-600">This order bump will also show inside the live checkout preview.</p>
</div>
</div>
</section>

<section className="hidden" id="view-upsells">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 space-y-4">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-[20px] font-semibold tracking-tight">Step 4 — Upsells</h3>
<p className="text-sm text-neutral-600">Add one-click upsell steps after checkout.</p>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white ring-1 ring-neutral-200 hover:bg-neutral-50 text-sm transition" id="addUpsellBtn">
<i className="size-4" data-lucide="plus"></i>
                      Add Upsell
                    </button>
</div>
<div className="mt-4 space-y-3" id="upsellList"></div>
<div className="mt-4 rounded-lg ring-1 ring-neutral-200 bg-neutral-50 p-3 text-xs text-neutral-700">
                    Tip: Use 1–3 upsells maximum to avoid decision fatigue.
                  </div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-white ring-1 ring-neutral-200 hover:bg-neutral-50 text-sm transition" onClick={(e) => { goToStep('bump') }}>
<i className="size-[18px]" data-lucide="chevron-left"></i>
                      Back — Order Bump
                    </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 text-white ring-1 ring-black/5 hover:bg-emerald-700 text-sm transition" onClick={(e) => { goToStep('downsells') }}>
                      Next — Downsells
                      <i className="size-[18px]" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-600" data-lucide="workflow"></i>
<h4 className="text-[18px] font-medium tracking-tight">Flow Preview</h4>
</div>
<div className="mt-4 flex items-center flex-wrap gap-2 text-sm" id="miniFlow">

</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="view-downsells">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 space-y-4">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<h3 className="text-[20px] font-semibold tracking-tight">Step 5 — Downsells</h3>
<p className="text-sm text-neutral-600">Offer a lower-priced alternative if an upsell is rejected.</p>
<div className="mt-4 space-y-3" id="downsellsList">

</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-white ring-1 ring-neutral-200 hover:bg-neutral-50 text-sm transition" onClick={(e) => { goToStep('upsells') }}>
<i className="size-[18px]" data-lucide="chevron-left"></i>
                      Back — Upsells
                    </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 text-white ring-1 ring-black/5 hover:bg-emerald-700 text-sm transition" onClick={(e) => { goToStep('thankyou') }}>
                      Next — Thank You
                      <i className="size-[18px]" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-600" data-lucide="git-branch"></i>
<h4 className="text-[18px] font-medium tracking-tight">Logic Preview</h4>
</div>
<div className="mt-4 space-y-2 text-sm" id="logicPreview">
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="view-thankyou">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-6 space-y-4">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<h3 className="text-[20px] font-semibold tracking-tight">Step 6 — Thank You Page</h3>
<p className="text-sm text-neutral-600">Customize confirmation and next actions.</p>
<div className="mt-4 grid grid-cols-1 gap-4">
<label className="grid gap-1.5">
<span className="text-sm font-medium">Custom Message</span>
<input className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:ring-emerald-500/40 focus:border-emerald-500 transition" id="thankMessage" type="text" value="You're in! Access your course below." />
</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="grid gap-1.5">
<span className="text-sm font-medium">Support Email</span>
<input className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:ring-emerald-500/40 focus:border-emerald-500 transition" id="supportEmail" type="email" value="support@salesmagics.app" />
</label>
<label className="grid gap-1.5">
<span className="text-sm font-medium">CTA Button Label</span>
<input className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:ring-emerald-500/40 focus:border-emerald-500 transition" id="thankCtaLabel" type="text" value="Go to Membership" />
</label>
</div>
<label className="grid gap-1.5">
<span className="text-sm font-medium">CTA URL</span>
<input className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:ring-emerald-500/40 focus:border-emerald-500 transition" id="thankCtaUrl" type="url" value="https://app.salesmagics.app/members" />
</label>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-md bg-white ring-1 ring-neutral-200 hover:bg-neutral-50 text-sm transition" onClick={(e) => { goToStep('downsells') }}>
<i className="size-[18px]" data-lucide="chevron-left"></i>
                      Back — Downsells
                    </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 text-white ring-1 ring-black/5 hover:bg-emerald-700 text-sm transition" onClick={(e) => { goToStep('map') }}>
                      Next — Funnel Map
                      <i className="size-[18px]" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 overflow-hidden">
<div className="px-4 py-3 border-b border-neutral-200/70 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-600" data-lucide="receipt"></i>
<span className="text-sm font-medium">Confirmation Preview</span>
</div>
</div>
<div className="p-5 space-y-4">
<div className="rounded-lg ring-1 ring-neutral-200 bg-neutral-50 p-4">
<div className="text-sm font-medium">Order Summary</div>
<ul className="mt-2 space-y-1 text-sm text-neutral-700" id="summaryItems">

</ul>
<div className="mt-2 text-sm font-medium">Total: <span id="summaryTotal">$0</span></div>
</div>
<div className="rounded-lg ring-1 ring-neutral-200 bg-white p-4">
<p className="text-sm text-neutral-800" id="thankMessagePreview">You're in! Access your course below.</p>
<button className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm ring-1 ring-black/5 hover:bg-emerald-700 transition" id="thankCtaPreview">
<i className="size-[18px]" data-lucide="arrow-right"></i>
                        Go to Membership
                      </button>
<div className="mt-2 text-xs text-neutral-600">
                        Need help? <a className="text-emerald-700 hover:underline" href="mailto:support@salesmagics.app" id="supportLink">support@salesmagics.app</a>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-neutral-600">Confirmation page dynamically shows main product, bumps, upsells/downsells.</p>
</div>
</div>
</section>

<section className="hidden" id="view-map">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-[20px] font-semibold tracking-tight">Step 7 — Funnel Map</h3>
<p className="text-sm text-neutral-600">Drag to rearrange, click nodes to edit or delete.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white ring-1 ring-neutral-200 hover:bg-neutral-50 text-sm transition" id="addNodeBtn">
<i className="size-4" data-lucide="plus"></i>
                    Add Node
                  </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white ring-1 ring-neutral-200 hover:bg-neutral-50 text-sm transition" onClick={(e) => { goToStep('thankyou') }}>
<i className="size-4" data-lucide="chevron-left"></i>
                    Back
                  </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white ring-1 ring-black/5 hover:bg-emerald-700 text-sm transition" onClick={(e) => { goToStep('analytics') }}>
                    Continue — Analytics
                    <i className="size-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="mt-5 relative overflow-x-auto">
<div className="min-w-full flex items-center gap-4 pb-4" id="mapCanvas">

</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-600">
<i className="size-4" data-lucide="move"></i>
                Drag nodes to reorder. Deleting a parent upsell will remove its downsell.
              </div>
<div className="mt-5 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium rounded-md bg-white hover:bg-neutral-50 text-neutral-900 ring-1 ring-neutral-200 hover:ring-neutral-300 transition" id="saveDraftBtn2">
<i className="size-[18px]" data-lucide="save"></i>
                  Save Draft
                </button>
<button className="inline-flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium rounded-md bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm ring-1 ring-black/5 transition" id="publishBtn2">
<i className="size-[18px]" data-lucide="rocket"></i>
                  Publish Funnel
                </button>
</div>
</div>
</section>

<section className="hidden" id="view-analytics">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 space-y-4">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-[20px] font-semibold tracking-tight">Step 8 — Analytics & Optimization</h3>
<p className="text-sm text-neutral-600">See conversions, acceptance rates, and run A/B tests.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white ring-1 ring-neutral-200 hover:bg-neutral-50 text-sm transition" onClick={(e) => { goToStep('map') }}>
<i className="size-4" data-lucide="chevron-left"></i>
                        Back — Map
                      </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white ring-1 ring-black/5 hover:bg-emerald-700 text-sm transition" onClick={(e) => { goToStep('dashboard') }}>
                        Finish
                        <i className="size-4" data-lucide="check"></i>
</button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="p-4 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Checkout Conversion</span>
<i className="size-4 text-emerald-600" data-lucide="mouse-pointer-2"></i>
</div>
<div className="mt-2 text-[22px] font-semibold tracking-tight" id="statCheckoutConv">—</div>
<div className="mt-1 text-xs text-neutral-600">Visitors who completed purchase</div>
</div>
<div className="p-4 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Order Bump Acceptance</span>
<i className="size-4 text-emerald-600" data-lucide="square-plus"></i>
</div>
<div className="mt-2 text-[22px] font-semibold tracking-tight" id="statBumpRate">—</div>
<div className="mt-1 text-xs text-neutral-600">Pre-checkout add-on selected</div>
</div>
<div className="p-4 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Funnel Revenue</span>
<i className="size-4 text-emerald-600" data-lucide="banknote"></i>
</div>
<div className="mt-2 text-[22px] font-semibold tracking-tight" id="statRevenue">—</div>
<div className="mt-1 text-xs text-neutral-600">Last 30 days</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-4">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-600" data-lucide="chart-pie"></i>
<span className="text-sm font-medium">Acceptance vs Rejection (Upsells)</span>
</div>
</div>
<div className="mt-3">
<div className="h-56">
<div className="h-full">
<canvas id="upsellPie"></canvas>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-600" data-lucide="bar-chart-3"></i>
<span className="text-sm font-medium">Step-wise Conversion</span>
</div>
</div>
<div className="mt-3">
<div className="h-56">
<div className="h-full">
<canvas id="stepBar"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="size-4 text-emerald-600" data-lucide="split"></i>
<h4 className="text-[18px] font-medium tracking-tight">A/B Test</h4>
</div>
<button className="toggle inline-flex items-center w-11 h-6 rounded-full bg-neutral-200 transition relative" id="abToggle" type="button">
<span className="dot absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow ring-1 ring-black/5 transition"></span>
</button>
</div>
<div className="hidden mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4" id="abPanel">
<label className="grid gap-1.5">
<span className="text-sm font-medium">Variant A — Placement</span>
<select className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-emerald-500/40" id="abAPlacement">
<option value="before">Before CTA</option>
<option value="after">After CTA</option>
</select>
</label>
<label className="grid gap-1.5">
<span className="text-sm font-medium">Variant B — Placement</span>
<select className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-emerald-500 focus:ring-emerald-500/40" id="abBPlacement">
<option value="after">After CTA</option>
<option value="before">Before CTA</option>
</select>
</label>
<div className="sm:col-span-2">
</div></div></div></div></div></section></div></main></div>
    </>
  );
}
