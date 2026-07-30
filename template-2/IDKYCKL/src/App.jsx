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
      {

    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Views
      const dashboard = document.getElementById('dashboard');
      const builder = document.getElementById('builder');
      const headerContext = document.getElementById('header-context');

      function showDashboard() {
        dashboard.classList.remove('hidden');
        builder.classList.add('hidden');
        headerContext.textContent = 'Dashboard';
      }
      function showBuilder() {
        dashboard.classList.add('hidden');
        builder.classList.remove('hidden');
        headerContext.textContent = 'Builder';
        showStep(1);
      }

      document.getElementById('newFunnelTop').addEventListener('click', showBuilder);
      document.getElementById('createFunnelBtn').addEventListener('click', showBuilder);
      document.getElementById('cancelToDashboard').addEventListener('click', showDashboard);

      // Steps
      const totalSteps = 8;
      let currentStep = 1;
      const funnelProgress = document.getElementById('funnelProgress');
      const stepButtons = Array.from(document.querySelectorAll('#stepList [data-step]'));
      const stepPanels = Array.from({ length: totalSteps }, (_, i) => document.getElementById(`step-${i + 1}`));

      function setActiveStepButton(step) {
        stepButtons.forEach(btn => {
          const active = parseInt(btn.dataset.step, 10) === step;
          btn.classList.toggle('bg-emerald-50', active);
        });
      }

      function showStep(step) {
        currentStep = step;
        stepPanels.forEach((el, idx) => {
          if (!el) return;
          if (idx + 1 === step) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        });
        setActiveStepButton(step);
        funnelProgress.textContent = `Step ${step} of ${totalSteps}`;

        // Toggle preview (checkout vs thank-you on Step 6)
        const checkoutPreview = document.getElementById('checkoutPreview');
        const thankyouPreview = document.getElementById('thankyouPreview');
        if (step === 6) {
          checkoutPreview.classList.add('hidden');
          thankyouPreview.classList.remove('hidden');
        } else {
          thankyouPreview.classList.add('hidden');
          checkoutPreview.classList.remove('hidden');
        }

        if (step === 8) initCharts();
      }

      document.querySelectorAll('[data-next]').forEach(btn => {
        btn.addEventListener('click', () => showStep(parseInt(btn.dataset.next, 10)));
      });
      document.querySelectorAll('[data-prev]').forEach(btn => {
        btn.addEventListener('click', () => showStep(parseInt(btn.dataset.prev, 10)));
      });
      stepButtons.forEach(btn => {
        btn.addEventListener('click', () => showStep(parseInt(btn.dataset.step, 10)));
      });

      // Toast helper
      const toast = document.getElementById('toast');
      function showToast(msg) {
        toast.textContent = msg;
        toast.classList.remove('hidden');
        toast.style.opacity = '1';
        setTimeout(() => {
          toast.style.opacity =
}
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
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 grid place-items-center rounded-md bg-emerald-600 text-white text-sm tracking-tight font-semibold select-none">SM</div>
<div className="hidden sm:flex items-center gap-2 text-slate-700">
<span className="text-[15px] font-medium tracking-tight">Sales Magics</span>
<span className="text-slate-300">|</span>
<span className="text-sm text-slate-500" id="header-context">Dashboard</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center">
<label className="relative">
<i className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="pl-9 pr-3 py-2 rounded-md border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition w-64" placeholder="Search funnels, products..." />
</label>
</div>
<button className="hidden sm:flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition" id="helpBtn">
<i className="h-4 w-4 text-slate-500" data-lucide="circle-help"></i>
            Help
          </button>
<button className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" id="newFunnelTop">
<i className="h-4 w-4 text-white" data-lucide="plus"></i>
            New Funnel
          </button>
<button className="ml-1 h-9 w-9 grid place-items-center rounded-full border border-slate-200 hover:bg-slate-50 transition">
<img alt="user" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop" />
</button>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">

<section className="space-y-6" id="dashboard">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Dashboard</h1>
<p className="text-slate-500 mt-1">Create and optimize high-converting sales funnels.</p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" id="createFunnelBtn">
<i className="h-4 w-4" data-lucide="wand-2"></i>
                Create New Funnel
              </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-4 rounded-lg border border-slate-200 bg-white hover:shadow-sm transition">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-500">Total Revenue</span>
<i className="h-4 w-4 text-emerald-600" data-lucide="banknote"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">$128,640</div>
<div className="text-xs mt-1 text-emerald-600">+8.2% this month</div>
</div>
<div className="p-4 rounded-lg border border-slate-200 bg-white hover:shadow-sm transition">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-500">Avg. Conversion</span>
<i className="h-4 w-4 text-emerald-600" data-lucide="gauge"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">4.7%</div>
<div className="text-xs mt-1 text-emerald-600">+0.4% WoW</div>
</div>
<div className="p-4 rounded-lg border border-slate-200 bg-white hover:shadow-sm transition">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-500">Active Funnels</span>
<i className="h-4 w-4 text-emerald-600" data-lucide="git-branch"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">12</div>
<div className="text-xs mt-1 text-slate-500">3 in experiment</div>
</div>
<div className="p-4 rounded-lg border border-slate-200 bg-white hover:shadow-sm transition">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-500">Order Bump AR</span>
<i className="h-4 w-4 text-emerald-600" data-lucide="sparkles"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">27%</div>
<div className="text-xs mt-1 text-slate-500">Last 30 days</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="list-tree"></i>
<span className="text-sm font-medium">Your Funnels</span>
</div>
<div className="flex items-center gap-2">
<button className="text-sm px-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">All</button>
<button className="text-sm px-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">Draft</button>
<button className="text-sm px-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">Published</button>
</div>
</div>
<div className="divide-y divide-slate-200" id="funnelList">

<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-4 py-4 hover:bg-slate-50 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">FM</div>
<div>
<div className="text-sm font-medium">Funnel — AI Copywriting Course</div>
<div className="text-xs text-slate-500">Conversion 4.9% • $28,240 revenue • Edited 2d ago</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">View</button>
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">Duplicate</button>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-4 py-4 hover:bg-slate-50 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">SM</div>
<div>
<div className="text-sm font-medium">Funnel — Social Media Templates</div>
<div className="text-xs text-slate-500">Conversion 3.6% • $12,910 revenue • Edited 5d ago</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">View</button>
<button className="text-xs px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">Duplicate</button>
</div>
</div>

</div>
</div>
</section>

<section className="hidden" id="builder">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<aside className="lg:col-span-3">
<div className="rounded-lg border border-slate-200 overflow-hidden">
<div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="workflow"></i>
<span className="text-sm font-medium">Funnel Wizard</span>
</div>
<span className="text-xs text-slate-500" id="funnelProgress">Step 1 of 8</span>
</div>
<nav className="divide-y divide-slate-200" id="stepList">

<button className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition" data-step="1">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-200 text-slate-600 text-xs">1</span>
<div>
<div className="text-sm font-medium">Product Setup</div>
<div className="text-xs text-slate-500">Details & pricing</div>
</div>
</button>
<button className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition" data-step="2">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-200 text-slate-600 text-xs">2</span>
<div>
<div className="text-sm font-medium">Checkout Builder</div>
<div className="text-xs text-slate-500">Template & brand</div>
</div>
</button>
<button className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition" data-step="3">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-200 text-slate-600 text-xs">3</span>
<div>
<div className="text-sm font-medium">Order Bump</div>
<div className="text-xs text-slate-500">Pre-checkout add-on</div>
</div>
</button>
<button className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition" data-step="4">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-200 text-slate-600 text-xs">4</span>
<div>
<div className="text-sm font-medium">Upsells</div>
<div className="text-xs text-slate-500">Post-purchase</div>
</div>
</button>
<button className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition" data-step="5">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-200 text-slate-600 text-xs">5</span>
<div>
<div className="text-sm font-medium">Downsells</div>
<div className="text-xs text-slate-500">If rejected</div>
</div>
</button>
<button className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition" data-step="6">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-200 text-slate-600 text-xs">6</span>
<div>
<div className="text-sm font-medium">Thank You</div>
<div className="text-xs text-slate-500">Confirmation</div>
</div>
</button>
<button className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition" data-step="7">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-200 text-slate-600 text-xs">7</span>
<div>
<div className="text-sm font-medium">Funnel Map</div>
<div className="text-xs text-slate-500">Overview & publish</div>
</div>
</button>
<button className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition" data-step="8">
<span className="h-6 w-6 grid place-items-center rounded-md border border-slate-200 text-slate-600 text-xs">8</span>
<div>
<div className="text-sm font-medium">Analytics</div>
<div className="text-xs text-slate-500">Conversion & A/B</div>
</div>
</button>
</nav>
</div>

<div className="mt-6 space-y-2">
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-slate-200 hover:bg-slate-50 transition" id="saveDraftBtn">
<i className="h-4 w-4 text-slate-600" data-lucide="save"></i>
                  Save Draft
                </button>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" id="publishBtn">
<i className="h-4 w-4" data-lucide="rocket"></i>
                  Publish Funnel
                </button>
</div>
</aside>

<div className="lg:col-span-9 grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-7 space-y-6">

<div className="rounded-lg border border-slate-200 p-5 md:p-6 transition-all duration-500" id="step-1">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Product Setup</h2>
<p className="text-sm text-slate-500 mt-1">Create or select a product to sell.</p>
</div>
<span className="text-xs text-slate-400">1/8</span>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-medium">Product Name</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="productName" placeholder="e.g., AI Copywriting Course" />
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Upload Product Image</label>
<label className="relative block">
<input accept="image/*" className="peer absolute inset-0 opacity-0 cursor-pointer" id="productImage" type="file" />
<div className="w-full rounded-md border border-dashed border-slate-300 px-3 py-2 text-sm text-slate-500 hover:border-emerald-400 hover:text-emerald-700 transition flex items-center justify-between">
<span className="truncate">Choose image...</span>
<i className="h-4 w-4" data-lucide="upload"></i>
</div>
</label>
</div>
<div className="space-y-2 md:col-span-2">
<label className="text-sm font-medium">Description</label>
<textarea className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="productDesc" placeholder="Brief summary and value proposition..." rows="3"></textarea>
</div>
</div>

<div className="mt-6">
<label className="text-sm font-medium block mb-2">Pricing Options</label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<label className="relative flex items-start gap-3 p-3 rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 cursor-pointer transition">
<input checked className="mt-1 h-4 w-4 text-emerald-600 border-slate-300 focus:ring-emerald-500" name="pricingType" type="radio" value="one-time" />
<div>
<div className="text-sm font-medium">One-time</div>
<div className="text-xs text-slate-500">Single payment</div>
</div>
</label>
<label className="relative flex items-start gap-3 p-3 rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 cursor-pointer transition">
<input className="mt-1 h-4 w-4 text-emerald-600 border-slate-300 focus:ring-emerald-500" name="pricingType" type="radio" value="subscription" />
<div>
<div className="text-sm font-medium">Subscription</div>
<div className="text-xs text-slate-500">Recurring</div>
</div>
</label>
<label className="relative flex items-start gap-3 p-3 rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 cursor-pointer transition">
<input className="mt-1 h-4 w-4 text-emerald-600 border-slate-300 focus:ring-emerald-500" name="pricingType" type="radio" value="trial" />
<div>
<div className="text-sm font-medium">Trial / Plan</div>
<div className="text-xs text-slate-500">Trial or payment plan</div>
</div>
</label>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4" id="pricingFields">

<div className="space-y-2">
<label className="text-sm font-medium">Price (USD)</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="pricePrimary" placeholder="e.g., 197" type="number" />
</div>
<div className="space-y-2 hidden" data-price="subscription">
<label className="text-sm font-medium">Billing Interval</label>
<div className="relative">
<button className="w-full text-left rounded-md border border-slate-200 px-3 py-2 text-sm flex items-center justify-between hover:border-slate-300" id="intervalBtn" type="button">
<span id="intervalValue">Monthly</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-sm" id="intervalMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-interval="Weekly">Weekly</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-interval="Monthly">Monthly</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-interval="Quarterly">Quarterly</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-interval="Yearly">Yearly</button>
</div>
</div>
</div>
<div className="space-y-2 hidden" data-price="trial">
<label className="text-sm font-medium">Trial Days</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="trialDays" placeholder="e.g., 7" type="number" />
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" id="cancelToDashboard">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
                      Back to Dashboard
                    </button>
<button className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" data-next="2">
                      Next — Checkout
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden rounded-lg border border-slate-200 p-5 md:p-6 transition-all duration-500" id="step-2">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Checkout Page Builder</h2>
<p className="text-sm text-slate-500 mt-1">Choose a template and customize branding.</p>
</div>
<span className="text-xs text-slate-400">2/8</span>
</div>
<div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="space-y-3">
<div className="text-sm font-medium">Templates</div>
<div className="grid grid-cols-2 gap-3" id="templateGallery">
<button className="group relative rounded-md border border-slate-200 hover:border-emerald-400 transition p-3" data-template="one-step">
<div className="aspect-video rounded bg-slate-50 border border-slate-200"></div>
<div className="mt-2 text-xs text-slate-600">One-step</div>
<i className="absolute top-2 right-2 h-5 w-5 text-emerald-600 opacity-0" data-lucide="check-circle-2"></i>
</button>
<button className="group relative rounded-md border border-slate-200 hover:border-emerald-400 transition p-3" data-template="two-step">
<div className="aspect-video rounded bg-slate-50 border border-slate-200"></div>
<div className="mt-2 text-xs text-slate-600">Two-step</div>
<i className="absolute top-2 right-2 h-5 w-5 text-emerald-600 opacity-0" data-lucide="check-circle-2"></i>
</button>
<button className="group relative rounded-md border border-slate-200 hover:border-emerald-400 transition p-3" data-template="popup">
<div className="aspect-video rounded bg-slate-50 border border-slate-200"></div>
<div className="mt-2 text-xs text-slate-600">Popup</div>
<i className="absolute top-2 right-2 h-5 w-5 text-emerald-600 opacity-0" data-lucide="check-circle-2"></i>
</button>
<button className="group relative rounded-md border border-slate-200 hover:border-emerald-400 transition p-3" data-template="embedded">
<div className="aspect-video rounded bg-slate-50 border border-slate-200"></div>
<div className="mt-2 text-xs text-slate-600">Embedded</div>
<i className="absolute top-2 right-2 h-5 w-5 text-emerald-600 opacity-0" data-lucide="check-circle-2"></i>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-medium">Primary Color</label>
<input className="h-10 w-full rounded-md border border-slate-200 cursor-pointer" id="brandColor" type="color" value="#059669" />
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Checkout Button Text</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="checkoutBtnText" value="Complete Purchase" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-medium">Logo</label>
<label className="relative block">
<input accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" id="logoUpload" type="file" />
<div className="w-full rounded-md border border-dashed border-slate-300 px-3 py-2 text-sm text-slate-500 hover:border-emerald-400 hover:text-emerald-700 transition flex items-center justify-between">
<span className="truncate">Upload logo...</span>
<i className="h-4 w-4" data-lucide="upload"></i>
</div>
</label>
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Testimonials</label>
<button aria-checked="true" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" id="toggleTestimonials" role="switch" type="button">
<span className="h-4 w-7 rounded-full bg-emerald-500/20 relative">
<span className="dot absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-emerald-600 transition-transform translate-x-3"></span>
</span>
<span className="text-sm">Show testimonials</span>
</button>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Trust Badges</label>
<div className="flex items-center gap-2">
<img alt="badge" className="h-8 w-12 object-cover rounded border border-slate-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="badge" className="h-8 w-12 object-cover rounded border border-slate-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<img alt="badge" className="h-8 w-12 object-cover rounded border border-slate-200" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=80&auto=format&fit=crop" />
</div>
</div>
</div>

<div className="space-y-3">
<div className="text-sm font-medium">Editing</div>
<div className="rounded-md border border-slate-200 p-4 text-sm text-slate-600">
                        Drag-and-drop blocks in the live preview. Edit button and colors. Toggle testimonials and trust badges.
                      </div>
</div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" data-prev="1">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
                      Back
                    </button>
<button className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" data-next="3">
                      Next — Order Bump
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden rounded-lg border border-slate-200 p-5 md:p-6 transition-all duration-500" id="step-3">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Order Bump</h2>
<p className="text-sm text-slate-500 mt-1">Pre-checkout offer to increase AOV.</p>
</div>
<span className="text-xs text-slate-400">3/8</span>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-3">
<button aria-checked="false" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" id="toggleBump" role="switch" type="button">
<span className="h-4 w-7 rounded-full bg-slate-200 relative">
<span className="dot absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-white border border-slate-300 transition-transform"></span>
</span>
<span className="text-sm">Enable Order Bump</span>
</button>
<div className="space-y-2">
<label className="text-sm font-medium">Select Product</label>
<div className="relative">
<button className="w-full text-left rounded-md border border-slate-200 px-3 py-2 text-sm flex items-center justify-between hover:border-slate-300" id="bumpProductBtn" type="button">
<span className="truncate text-slate-600" id="bumpProductValue">Choose a product…</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-sm max-h-56 overflow-auto" id="bumpProductMenu"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-2">
<label className="text-sm font-medium">Pricing</label>
<div className="relative">
<button className="w-full text-left rounded-md border border-slate-200 px-3 py-2 text-sm flex items-center justify-between hover:border-slate-300" id="bumpPricingBtn" type="button">
<span id="bumpPricingValue">Flat fee</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-sm" id="bumpPricingMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-bump-pricing="Flat fee">Flat fee</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-bump-pricing="Discounted">Discounted</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-bump-pricing="Subscription add-on">Subscription add-on</button>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Placement</label>
<div className="relative">
<button className="w-full text-left rounded-md border border-slate-200 px-3 py-2 text-sm flex items-center justify-between hover:border-slate-300" id="bumpPlacementBtn" type="button">
<span id="bumpPlacementValue">Before checkout button</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-sm" id="bumpPlacementMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-bump-placement="Before checkout button">Before checkout button</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-bump-placement="After checkout button">After checkout button</button>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="space-y-2">
<label className="text-sm font-medium">Checkbox Label</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="bumpLabel" placeholder="Yes, add this to my order!" />
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Highlight Color</label>
<input className="h-10 w-full rounded-md border border-slate-200 cursor-pointer" id="bumpColor" type="color" value="#ecfdf5" />
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Mini Image</label>
<label className="relative block">
<input accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" id="bumpImage" type="file" />
<div className="w-full rounded-md border border-dashed border-slate-300 px-3 py-2 text-sm text-slate-500 hover:border-emerald-400 hover:text-emerald-700 transition flex items-center justify-between">
<span className="truncate">Upload bump image...</span>
<i className="h-4 w-4" data-lucide="upload"></i>
</div>
</label>
</div>
</div>
<div className="rounded-md border border-slate-200 p-4">
<div className="text-sm font-medium mb-2">Preview</div>
<div className="text-xs text-slate-500" id="bumpPreviewNote">Enable the order bump to see it appear on the checkout preview.</div>
<div className="hidden mt-3 p-3 rounded-md border" id="bumpMiniPreview" style={{borderColor: `#d1fae5`, backgroundColor: `#ecfdf5`}}>
<div className="flex items-start gap-3">
<img alt="bump" className="h-10 w-10 rounded object-cover border border-slate-200" id="bumpMiniImg" src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=200&auto=format&fit=crop" />
<div className="flex-1">
<label className="inline-flex items-center gap-2">
<input className="h-4 w-4 text-emerald-600 border-slate-300 focus:ring-emerald-500" id="bumpCheckbox" type="checkbox" />
<span className="text-sm" id="bumpLabelPreview">Yes, add this to my order!</span>
</label>
<div className="text-xs text-slate-500 mt-1">Auto-added before checkout when checked.</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" data-prev="2">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
                      Back
                    </button>
<button className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" data-next="4">
                      Next — Upsells
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden rounded-lg border border-slate-200 p-5 md:p-6 transition-all duration-500" id="step-4">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Upsells</h2>
<p className="text-sm text-slate-500 mt-1">Create post-purchase offers with 1-click purchase.</p>
</div>
<span className="text-xs text-slate-400">4/8</span>
</div>
<div className="mt-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Upsell Steps</div>
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" id="addUpsellBtn">
<i className="h-4 w-4" data-lucide="plus"></i>
                        Add Upsell
                      </button>
</div>
<div className="mt-3 space-y-3" id="upsellList"></div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" data-prev="3">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
                      Back
                    </button>
<button className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" data-next="5">
                      Next — Downsells
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden rounded-lg border border-slate-200 p-5 md:p-6 transition-all duration-500" id="step-5">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Downsells</h2>
<p className="text-sm text-slate-500 mt-1">Offer alternatives when an upsell is declined.</p>
</div>
<span className="text-xs text-slate-400">5/8</span>
</div>
<div className="mt-4 space-y-3" id="downsellList"></div>
<div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" data-prev="4">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
                      Back
                    </button>
<button className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" data-next="6">
                      Next — Thank You
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden rounded-lg border border-slate-200 p-5 md:p-6 transition-all duration-500" id="step-6">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Thank You / Confirmation</h2>
<p className="text-sm text-slate-500 mt-1">Customize confirmation and next steps.</p>
</div>
<span className="text-xs text-slate-400">6/8</span>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-medium">Custom Message</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="thankMessage" placeholder="Access your course here →" />
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Support Email</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="supportEmail" placeholder="support@yourbrand.com" />
</div>
<div className="space-y-2">
<label className="text-sm font-medium">CTA Button Label</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="thankCtaLabel" value="Go to my content" />
</div>
<div className="space-y-2">
<label className="text-sm font-medium">CTA URL</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="thankCtaUrl" placeholder="https://app.yourbrand.com/login" />
</div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" data-prev="5">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
                      Back
                    </button>
<button className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" data-next="7">
                      Next — Funnel Map
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden rounded-lg border border-slate-200 p-5 md:p-6 transition-all duration-500" id="step-7">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Funnel Map Overview</h2>
<p className="text-sm text-slate-500 mt-1">Visualize and arrange your funnel flow. Drag nodes to reposition.</p>
</div>
<span className="text-xs text-slate-400">7/8</span>
</div>
<div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-4">
<div className="space-y-3">
<div className="text-sm font-medium">Map</div>
<div className="relative h-80 rounded-md border border-slate-200 bg-slate-50/50 overflow-hidden" id="mapCanvas">

</div>
<div className="text-xs text-slate-500">Tip: Reorder upsell sequence with the caret buttons on nodes.</div>
</div>
<div className="space-y-3">
<div className="text-sm font-medium">Publish</div>
<div className="rounded-md border border-slate-200 p-4">
<div className="text-sm text-slate-600">When ready, publish to get your checkout link and embed code.</div>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" id="mapSaveBtn">
<i className="h-4 w-4 text-slate-600" data-lucide="save"></i>
                            Save Draft
                          </button>
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" id="mapPublishBtn">
<i className="h-4 w-4" data-lucide="rocket"></i>
                            Publish
                          </button>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" data-prev="6">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
                      Back
                    </button>
<button className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" data-next="8">
                      Next — Analytics
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden rounded-lg border border-slate-200 p-5 md:p-6 transition-all duration-500" id="step-8">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Funnel Analytics</h2>
<p className="text-sm text-slate-500 mt-1">Track performance and run A/B tests.</p>
</div>
<span className="text-xs text-slate-400">8/8</span>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-4 rounded-md border border-slate-200">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Conversion (Checkout)</div>
<div className="text-xs text-slate-500">Last 14 days</div>
</div>
<i className="h-4 w-4 text-emerald-600" data-lucide="chart-line"></i>
</div>
<div className="mt-3">
<div>
<canvas height="140" id="chartConversion"></canvas>
</div>
</div>
</div>
<div className="p-4 rounded-md border border-slate-200">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">Revenue Breakdown</div>
<div className="text-xs text-slate-500">Main vs Order Bump vs Upsells</div>
</div>
<i className="h-4 w-4 text-emerald-600" data-lucide="pie-chart"></i>
</div>
<div className="mt-3">
<div>
<canvas height="140" id="chartRevenue"></canvas>
</div>
</div>
</div>
<div className="p-4 rounded-md border border-slate-200 md:col-span-2">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">A/B Test</div>
<div className="text-xs text-slate-500">Test order bump placement or upsell pages</div>
</div>
<button aria-checked="false" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" id="toggleAB" role="switch" type="button">
<span className="h-4 w-7 rounded-full bg-slate-200 relative">
<span className="dot absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-white border border-slate-300 transition-transform"></span>
</span>
<span className="text-sm">Enable</span>
</button>
</div>
<div className="hidden mt-4 grid grid-cols-1 md:grid-cols-3 gap-4" id="abPanel">
<div className="space-y-2">
<label className="text-sm font-medium">What to test</label>
<div className="relative">
<button className="w-full text-left rounded-md border border-slate-200 px-3 py-2 text-sm flex items-center justify-between hover:border-slate-300" id="abWhatBtn" type="button">
<span id="abWhatValue">Order Bump Placement</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-sm" id="abWhatMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-abwhat="Order Bump Placement">Order Bump Placement</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-abwhat="Upsell Template">Upsell Template</button>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Variant A</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="abA" value="Before checkout button" />
</div>
<div className="space-y-2">
<label className="text-sm font-medium">Variant B</label>
<input className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500" id="abB" value="After checkout button" />
</div>
<div className="space-y-2 md:col-span-3">
<label className="text-sm font-medium">Traffic Split</label>
<div className="flex items-center gap-3">
<input className="w-full accent-emerald-600" id="abSplit" max="90" min="10" type="range" value="50" />
<div className="text-sm text-slate-600"><span id="abSplitA">50</span>% / <span id="abSplitB">50</span>%</div>
</div>
</div>
<div className="md:col-span-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" id="startAB">
<i className="h-4 w-4" data-lucide="play"></i>
                            Start Test
                          </button>
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" id="stopAB">
<i className="h-4 w-4" data-lucide="square"></i>
                            Stop
                          </button>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" data-prev="7">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
                      Back
                    </button>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" id="analyticsPublish">
<i className="h-4 w-4" data-lucide="rocket"></i>
                        Publish
                      </button>
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 transition" data-prev="1">
                        Restart Wizard
                      </button>
</div>
</div>
</div>
</div>

<div className="xl:col-span-5">
<div className="sticky top-[88px]">
<div className="rounded-lg border border-slate-200 overflow-hidden">
<div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-600" data-lucide="eye"></i>
<span className="text-sm font-medium">Live Preview</span>
</div>
<div className="text-xs text-slate-500">
<button className="underline decoration-dotted cursor-pointer" id="checkoutLink">Checkout link pending…</button>
</div>
</div>

<div className="p-4 bg-white" id="previewArea">

<div className="space-y-4" id="checkoutPreview">
<div className="flex items-center gap-3">
<img alt="logo" className="h-8 w-auto rounded-sm border border-slate-200" id="previewLogo" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=200&auto=format&fit=crop" />
<span className="text-sm text-slate-500">Secure Checkout</span>
</div>
<div className="rounded-md border border-slate-200 p-4">
<div className="flex items-center gap-3">
<img alt="product" className="h-12 w-12 rounded object-cover border border-slate-200" id="previewProductImg" src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=240&auto=format&fit=crop" />
<div>
<div className="text-sm font-medium" id="previewProductName">Your Product</div>
<div className="text-xs text-slate-500" id="previewProductPrice">$0.00</div>
</div>
</div>

<div className="mt-3 grid grid-cols-1 gap-3" id="previewTestimonials">
<div className="rounded border border-slate-200 p-3">
<div className="flex items-center gap-2">
<img alt="face" className="h-7 w-7 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=64&auto=format&fit=crop" />
<div className="text-xs">
<div className="font-medium">Alex</div>
<div className="text-slate-500">“Boosted my conversions in a week!”</div>
</div>
</div>
</div>
</div>

<div className="mt-3" id="bumpSlotBefore"></div>

<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
<input className="rounded-md border border-slate-200 px-3 py-2 text-sm" placeholder="Full name" />
<input className="rounded-md border border-slate-200 px-3 py-2 text-sm" placeholder="Email address" />
<input className="rounded-md border border-slate-200 px-3 py-2 text-sm sm:col-span-2" placeholder="Card details" />
</div>

<div className="mt-3" id="bumpSlotAfter"></div>
<button className="mt-4 w-full inline-flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" id="checkoutBtn">
<span id="checkoutBtnLabel">Complete Purchase</span>
<i className="h-4 w-4" data-lucide="lock"></i>
</button>
<div className="mt-3 flex items-center gap-2">
<img alt="badge" className="h-6 w-10 object-cover rounded border border-slate-200" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<img alt="badge" className="h-6 w-10 object-cover rounded border border-slate-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>
</div>

<div className="hidden space-y-3" id="thankyouPreview">
<div className="rounded-md border border-slate-200 p-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-emerald-600" data-lucide="check-circle-2"></i>
<h3 className="text-lg font-semibold tracking-tight">Thank you!</h3>
</div>
<p className="text-sm text-slate-600 mt-2" id="thankMessagePreview">Access your course here →</p>
<div className="mt-3">
<a className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition" href="#" id="thankCta" target="_blank">
<span id="thankCtaLabelPreview">Go to my content</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-3 text-xs text-slate-500">
                            Need help? <span id="supportEmailPreview">support@yourbrand.com</span>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>

<div className="fixed top-4 right-4 hidden rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm" id="toast"></div>

    </>
  );
}
