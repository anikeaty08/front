import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Theme: respect system on first load, persist user's choice
(function () {
try {
const stored = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (stored === "dark" || (!stored && prefersDark)) {
document.addEventListener("DOMContentLoaded", () => {
document.body.classList.add("dark");
});
}
} catch (e) {}
})();



      // Icons
      document.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) {
          lucide.createIcons({
            attrs: { "stroke-width": 1.5 }
          });
        }
      });

      // Theme Toggle
      const themeBtn = document.getElementById("themeToggle");
      if (themeBtn) {
        themeBtn.addEventListener("click", () => {
          document.body.classList.toggle("dark");
          const isDark = document.body.classList.contains("dark");
          try {
            localStorage.setItem("theme", isDark ? "dark" : "light");
          } catch (e) {}
          if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        });
      }

      // Billing Toggle
      const billingToggle = document.getElementById("billingToggle");
      const knob = document.getElementById("billingKnob");
      const priceEls = document.querySelectorAll("[data-monthly]");
      let yearly = false;
      function updatePrices() {
        priceEls.forEach((el) => {
          const m = el.getAttribute("data-monthly");
          const y = el.getAttribute("data-yearly");
          el.textContent = yearly ? y : m;
        });
      }
      if (billingToggle && knob) {
        billingToggle.addEventListener("click", () => {
          yearly = !yearly;
          knob.style.transform = yearly ? "translateX(20px)" : "translateX(0px)";
          updatePrices();
        });
        updatePrices();
      }

      // Year in footer
      const y = document.getElementById("year");
      if (y) y.textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full border-b border-neutral-200/70 dark:border-neutral-800/80 bg-neutral-50/60 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 supports-[backdrop-filter]:dark:bg-neutral-950/40">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-center justify-between gap-4 py-2.5">
<p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            New: Vacation requests and multi-channel payments are now available.
          </p>
<a className="inline-flex items-center gap-1 text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 hover:underline" href="#whats-new">
            What’s new
            <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 border-b border-neutral-200/70 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-white/40 supports-[backdrop-filter]:dark:bg-neutral-950/40">
<nav className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex size-8 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm">
<span className="text-sm font-semibold tracking-tight">RE</span>
</div>
<span className="sr-only">RealEstateOS</span>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" href="#product">Product</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" href="#features">Features</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" href="#faq">FAQ</a>
</div>
</div>
<div className="flex items-center gap-2">

<button className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-2.5 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700/20 dark:focus-visible:ring-white/20" id="themeToggle" type="button">
<i className="w-4.5 h-4.5 group-[.dark]:hidden" data-lucide="moon"></i>
<i className="w-4.5 h-4.5 hidden dark:inline-block" data-lucide="sun"></i>
<span className="hidden sm:inline">Theme</span>
</button>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3.5 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700/20 dark:focus-visible:ring-white/20" href="#demo">
<i className="w-4.5 h-4.5" data-lucide="play"></i>
              Demo
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-3.5 py-2.5 text-sm font-medium hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700/20 dark:focus-visible:ring-white/30" href="#get-started">
              Get started
              <i className="w-4.5 h-4.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>
</header>

<section className="relative" id="product">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 sm:py-20">
<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-2.5 py-1.5 w-fit mb-5">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">All-in-one real estate operations</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold">
              Run your real estate operations from one place
            </h1>
<p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              Streamline property and unit management, automate tenancies and bookings, track work orders and maintenance, accept payments, manage staff and agents, and report on everything.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-5 py-3 text-sm font-medium hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700/20 dark:focus-visible:ring-white/30" href="#get-started">
                Start free
                <i className="w-4.5 h-4.5 ml-2" data-lucide="rocket"></i>
</a>
<a className="inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-5 py-3 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700/20 dark:focus-visible:ring-white/20" href="#demo">
                Book a demo
                <i className="w-4.5 h-4.5 ml-2" data-lucide="calendar"></i>
</a>
</div>
<div className="mt-4">
<p className="text-sm text-neutral-600 dark:text-neutral-400">No credit card required. 14‑day free trial.</p>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500" data-lucide="check-circle"></i>
                PCI-ready payments
              </div>
<div className="flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400">
<i className="w-4 h-4 text-blue-600 dark:text-blue-500" data-lucide="shield"></i>
                Roles &amp; permissions
              </div>
<div className="flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400">
<i className="w-4 h-4 text-purple-600 dark:text-purple-500" data-lucide="line-chart"></i>
                Analytics dashboard
              </div>
<div className="flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400">
<i className="w-4 h-4 text-amber-600 dark:text-amber-500" data-lucide="cpu"></i>
                Automation-ready
              </div>
</div>
</div>
<div className="relative">
<div className="group relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 p-2 shadow-sm">
<div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
<div className="flex items-center gap-1 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-2">
<span className="size-2.5 rounded-full bg-red-500/80"></span>
<span className="size-2.5 rounded-full bg-amber-500/80"></span>
<span className="size-2.5 rounded-full bg-emerald-500/80"></span>
<span className="ml-auto text-xs text-neutral-600 dark:text-neutral-400">Dashboard Preview</span>
</div>
<img alt="Product dashboard preview" className="w-full h-72 sm:h-96 object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="grid grid-cols-2 gap-3 p-3 border-t border-neutral-200 dark:border-neutral-800">
<div className="rounded-md border border-neutral-200 dark:border-neutral-800 p-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="building-2"></i>
<span className="text-sm font-medium">Properties</span>
</div>
<p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">All your properties, units and tenants in one view.</p>
</div>
<div className="rounded-md border border-neutral-200 dark:border-neutral-800 p-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="wallet"></i>
<span className="text-sm font-medium">Payments</span>
</div>
<p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">Collect rent and deposits across multiple channels.</p>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute -bottom-6 -left-6 hidden sm:block">
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-3 shadow-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500" data-lucide="badge-check"></i>
<span className="text-xs font-medium">Trusted by 500+ teams</span>
</div>
</div>
</div>
</div>
</div>

<div className="py-6 border-t border-neutral-200 dark:border-neutral-800">
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-neutral-500 dark:text-neutral-500">
<span className="text-xs tracking-tight font-medium">AX</span>
<span className="text-xs tracking-tight font-medium">NT</span>
<span className="text-xs tracking-tight font-medium">QO</span>
<span className="text-xs tracking-tight font-medium">LD</span>
<span className="text-xs tracking-tight font-medium">SR</span>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200 dark:border-neutral-800" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Everything you need to operate</h2>
<p className="mt-2 text-neutral-600 dark:text-neutral-400">Modular features that work great together or on their own.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white" href="#demo">
            Watch a quick tour
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="building-2"></i>
<h3 className="text-lg tracking-tight font-semibold">Operations</h3>
</div>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="layout-grid"></i>
<span>Property &amp; Units management</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="file-plus-2"></i>
<span>Tenancy creation &amp; lifecycle</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="calendar-check"></i>
<span>Booking management</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="wrench"></i>
<span>Work orders management</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="hammer"></i>
<span>Maintenance request management</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="key-round"></i>
<span>Vacation request management</span>
</li>
</ul>
</div>

<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="wallet"></i>
<h3 className="text-lg tracking-tight font-semibold">Payments</h3>
</div>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="credit-card"></i>
<span>Tenancy payments &amp; schedules</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="banknote"></i>
<span>Supported payment channels (cards, bank, wallet)</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="receipt"></i>
<span>Invoice management</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="receipt-percent"></i>
<span>Taxes management</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="credit-card"></i>
<span>Expense tracking</span>
</li>
</ul>
</div>

<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="users"></i>
<h3 className="text-lg tracking-tight font-semibold">People</h3>
</div>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="user-round"></i>
<span>Agent management</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="id-card"></i>
<span>Tenants &amp; applications</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="users-round"></i>
<span>Staff management (for companies)</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="shield-check"></i>
<span>Roles &amp; permissions</span>
</li>
</ul>
</div>

<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
<h3 className="text-lg tracking-tight font-semibold">Analytics</h3>
</div>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="layout-dashboard"></i>
<span>Dashboard analytics</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="file-text"></i>
<span>Reports &amp; exports</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="bell-ring"></i>
<span>Alerts &amp; reminders</span>
</li>
</ul>
</div>

<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="workflow"></i>
<h3 className="text-lg tracking-tight font-semibold">Automation</h3>
</div>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="mail"></i>
<span>Automated notices &amp; emails</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="calendar-clock"></i>
<span>Recurring tasks &amp; schedules</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="webhook"></i>
<span>Integrations &amp; webhooks</span>
</li>
</ul>
</div>

<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 transition">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="lock"></i>
<h3 className="text-lg tracking-tight font-semibold">Security &amp; Compliance</h3>
</div>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="fingerprint"></i>
<span>Secure authentication</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="server"></i>
<span>Reliable infrastructure</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5" data-lucide="file-lock-2"></i>
<span>Data privacy controls</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">How it works</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
<div className="flex items-center gap-2">
<div className="size-8 rounded-md flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
<span className="text-sm font-medium">1</span>
</div>
<h3 className="text-base font-semibold tracking-tight">Onboard your portfolio</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">Add properties, units, and set your tenancy templates. Import existing data or start fresh.</p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
<div className="flex items-center gap-2">
<div className="size-8 rounded-md flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
<span className="text-sm font-medium">2</span>
</div>
<h3 className="text-base font-semibold tracking-tight">Automate operations</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">Generate tenancies, handle bookings, route work orders, and track maintenance in one place.</p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
<div className="flex items-center gap-2">
<div className="size-8 rounded-md flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
<span className="text-sm font-medium">3</span>
</div>
<h3 className="text-base font-semibold tracking-tight">Get paid &amp; report</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">Collect rent and fees, manage invoices and taxes, analyze performance, and export reports.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200 dark:border-neutral-800" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Simple, transparent pricing</h2>
<p className="mt-2 text-neutral-600 dark:text-neutral-400">Choose a plan that scales with your portfolio.</p>
</div>

<div className="inline-flex items-center gap-3">
<span className="text-sm text-neutral-600 dark:text-neutral-400">Monthly</span>
<button className="relative inline-flex h-7 w-12 items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700/20 dark:focus-visible:ring-white/20" id="billingToggle" type="button">
<span className="sr-only">Toggle billing period</span>
<span className="ml-1 size-5 rounded-full bg-neutral-900 dark:bg-white transition" id="billingKnob"></span>
</button>
<span className="text-sm text-neutral-600 dark:text-neutral-400">Yearly <span className="ml-1 rounded-full border border-emerald-600/30 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 text-xs">Save 15%</span></span>
</div>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">

<div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Standard</h3>
<span className="text-xs rounded-full border border-neutral-200 dark:border-neutral-800 px-2 py-1 text-neutral-600 dark:text-neutral-400">Best for starters</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight" data-monthly="$39" data-yearly="$33">$39</span>
<span className="text-sm text-neutral-600 dark:text-neutral-400">/mo</span>
</div>
<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Core tools to manage properties and tenancies.</p>
<ul className="mt-5 space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Property &amp; units management
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Tenancy creation
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Booking management
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Basic invoices &amp; payments
              </li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 px-4 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900" href="#get-started">Choose Standard</a>
</div>

<div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-sm flex flex-col ring-1 ring-neutral-900/5 dark:ring-white/5">
<div className="absolute -top-3 left-6">
<span className="rounded-full border border-amber-600/30 bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-700 dark:text-amber-400">Most popular</span>
</div>
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Pro</h3>
<span className="text-xs rounded-full border border-neutral-200 dark:border-neutral-800 px-2 py-1 text-neutral-600 dark:text-neutral-400">Growing teams</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight" data-monthly="$79" data-yearly="$67">$79</span>
<span className="text-sm text-neutral-600 dark:text-neutral-400">/mo</span>
</div>
<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Advanced operations, automation, and analytics.</p>
<ul className="mt-5 space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Everything in Standard
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Work orders &amp; maintenance
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Expense &amp; tax management
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Reports &amp; analytics dashboard
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Roles &amp; permissions
              </li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-4 py-2.5 text-sm font-medium hover:opacity-90" href="#get-started">Choose Pro</a>
</div>

<div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Enterprise</h3>
<span className="text-xs rounded-full border border-neutral-200 dark:border-neutral-800 px-2 py-1 text-neutral-600 dark:text-neutral-400">For scale</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight" data-monthly="Custom" data-yearly="Custom">Custom</span>
</div>
<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Security, compliance, SSO, and dedicated support.</p>
<ul className="mt-5 space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Everything in Pro
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                SSO &amp; advanced security
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Priority support &amp; onboarding
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 dark:text-emerald-500 mt-0.5" data-lucide="check"></i>
                Custom reporting &amp; SLAs
              </li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 px-4 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900" href="#contact">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
<div className="flex items-center gap-3">
<img alt="Customer" className="size-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold tracking-tight">Amira K.</p>
<p className="text-xs text-neutral-600 dark:text-neutral-400">Portfolio Manager</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">We consolidated three tools into one. Work orders are automated, payments are on time, and reporting is a breeze.</p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
<div className="flex items-center gap-3">
<img alt="Customer" className="size-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold tracking-tight">Jonas R.</p>
<p className="text-xs text-neutral-600 dark:text-neutral-400">Agency Owner</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">Agent management and roles made it easy to scale our team while keeping data secure.</p>
</div>
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
<div className="flex items-center gap-3">
<img alt="Customer" className="size-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold tracking-tight">Priya S.</p>
<p className="text-xs text-neutral-600 dark:text-neutral-400">CFO</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">The finance suite replaced our spreadsheets. Taxes, invoices, and expenses are finally organized.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200 dark:border-neutral-800" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-center">Frequently asked questions</h2>
<div className="mt-8 divide-y divide-neutral-200 dark:divide-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
<details className="group">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
<span className="text-sm font-medium">Can I import my existing properties and tenants?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-neutral-600 dark:text-neutral-400">
              Yes. Import from CSV or via API. Our team can help you migrate at no extra cost on Pro and Enterprise.
            </div>
</details>
<details className="group">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
<span className="text-sm font-medium">Which payment channels are supported?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-neutral-600 dark:text-neutral-400">
              Cards, bank transfers, and mobile wallets. Payouts to your bank with automated reconciliation.
            </div>
</details>
<details className="group">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
<span className="text-sm font-medium">Is there a free trial?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-neutral-600 dark:text-neutral-400">
              Yes, 14 days. You can cancel anytime. No credit card required to start.
            </div>
</details>
<details className="group">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-5">
<span className="text-sm font-medium">Do you support multi-user roles and permissions?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-neutral-600 dark:text-neutral-400">
              Yes. Define granular roles for staff, agents, and external vendors with fine-grained access controls.
            </div>
</details>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="get-started">
<div className="mx-auto max-w-5xl px-4 sm:px-6">
<div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-950 p-8 sm:p-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<div className="md:col-span-2">
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Ready to streamline your portfolio?</h3>
<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Start your free trial today or schedule a personalized walkthrough with our team.</p>
</div>
<div className="flex md:justify-end gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900" href="#demo">
<i className="w-4 h-4" data-lucide="play"></i>
                Book a demo
              </a>
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-4 py-2.5 text-sm font-medium hover:opacity-90" href="#signup">
                Start free
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 dark:border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
<div className="col-span-2 sm:col-span-1">
<div className="flex items-center gap-2">
<div className="flex size-8 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm">
<span className="text-sm font-semibold tracking-tight">RE</span>
</div>
<span className="text-sm font-medium">RealEstateOS</span>
</div>
<p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">Operate properties, people, and payments with clarity.</p>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Product</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#features">Features</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#pricing">Pricing</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Company</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#">About</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#">Careers</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight">Legal</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#">Terms</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#">Privacy</a></li>
<li><a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 dark:border-neutral-800 pt-6">
<p className="text-xs text-neutral-600 dark:text-neutral-500">© <span id="year"></span> RealEstateOS. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-500">
<a className="hover:text-neutral-900 dark:hover:text-white text-xs" href="#">Status</a>
<a className="hover:text-neutral-900 dark:hover:text-white text-xs" href="#">Docs</a>
<a className="hover:text-neutral-900 dark:hover:text-white text-xs" href="#">API</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
