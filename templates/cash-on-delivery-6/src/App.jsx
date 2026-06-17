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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-emerald-500">
<span className="iconify text-lg" data-icon="lucide:box"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Markium</span>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-400 transition-colors hover:text-white" href="#features">Features</a>
<a className="text-sm font-medium text-slate-400 transition-colors hover:text-white" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-slate-400 transition-colors hover:text-white" href="#mission">Mission</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-slate-400 hover:text-white md:block" href="#">Log in</a>
<a className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-900/20 transition-all hover:bg-emerald-500 hover:shadow-emerald-900/40 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950" href="#">Create Store</a>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">

<div className="absolute -top-24 -left-20 -z-10 h-[500px] w-[500px] rounded-full bg-blue-900/20 blur-[100px]"></div>
<div className="absolute top-1/2 right-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-emerald-900/10 blur-[120px] glow-effect"></div>
<div className="mx-auto max-w-7xl px-6">
<div className="grid items-center gap-16 lg:grid-cols-2">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
<span className="text-xs font-medium text-emerald-400 uppercase tracking-wide">Beta Available for Algeria</span>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:leading-tight">
                        Built for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Cash On Delivery.</span>
</h1>
<p className="mt-6 text-lg leading-relaxed text-slate-400">
                        Create your store, manage COD orders, integrate delivery providers, and get paid with confidence. The platform designed for serious sellers.
                    </p>
<div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
<a className="w-full rounded-full bg-emerald-600 px-8 py-3.5 text-center text-sm font-medium text-white shadow-[0_0_20px_-5px_rgba(5,150,105,0.4)] transition-all hover:bg-emerald-500 hover:shadow-[0_0_25px_-5px_rgba(5,150,105,0.6)] hover:-translate-y-0.5 sm:w-auto" href="#">
                            Start Your COD Store
                        </a>
<a className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-transparent px-8 py-3.5 text-center text-sm font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800/50 hover:text-white sm:w-auto" href="#how-it-works">
                            See How It Works
                            <span className="iconify transition-transform group-hover:translate-x-0.5" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>

<div className="relative lg:h-full flex items-center">
<div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-30 blur-lg"></div>
<div className="relative w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl transition-transform duration-700 hover:rotate-1 hover:scale-[1.01]">

<div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/50 px-4 py-3">
<div className="flex gap-1.5">
<div className="h-3 w-3 rounded-full bg-slate-700"></div>
<div className="h-3 w-3 rounded-full bg-slate-700"></div>
<div className="h-3 w-3 rounded-full bg-slate-700"></div>
</div>
<div className="mx-auto flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1 text-xs text-slate-500 border border-slate-800">
<span className="iconify" data-icon="lucide:lock" style={{width: '10px'}}></span>
                                markium.com/dashboard
                            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4">

<div className="hidden border-r border-slate-800 bg-slate-900/50 p-4 md:block">
<div className="space-y-1">
<div className="flex items-center gap-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-sm font-medium text-emerald-400">
<span className="iconify" data-icon="lucide:shopping-bag"></span> Orders
                                    </div>
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800">
<span className="iconify" data-icon="lucide:package"></span> Products
                                    </div>
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800">
<span className="iconify" data-icon="lucide:truck"></span> Shipping
                                    </div>
<div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800">
<span className="iconify" data-icon="lucide:users"></span> Customers
                                    </div>
</div>
</div>

<div className="col-span-3 p-6 bg-slate-900">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-sm font-semibold text-white">Live Orders</h3>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-emerald-400 font-medium">Updating live</span>
</div>
</div>

<div className="grid grid-cols-5 gap-4 border-b border-slate-800 pb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
<div className="col-span-2">Order</div>
<div>Status</div>
<div>Payment</div>
<div className="text-right">Total</div>
</div>

<div className="grid grid-cols-5 items-center gap-4 border-b border-slate-800/50 py-4">
<div className="col-span-2">
<div className="text-sm font-medium text-white">#ORD-8922</div>
<div className="text-xs text-slate-500">Amine B. • Algiers</div>
</div>
<div>
<span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-slate-700">Pending</span>
</div>
<div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
<span className="iconify" data-icon="lucide:clock"></span> Unpaid
                                        </span>
</div>
<div className="text-right text-sm font-medium text-slate-200">4,500 DZD</div>
</div>

<div className="grid grid-cols-5 items-center gap-4 border-b border-slate-800/50 py-4">
<div className="col-span-2">
<div className="text-sm font-medium text-white">#ORD-8921</div>
<div className="text-xs text-slate-500">Sarah K. • Oran</div>
</div>
<div>
<span className="inline-flex items-center rounded-full bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">Shipped</span>
</div>
<div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
<span className="iconify" data-icon="lucide:truck"></span> On Route
                                        </span>
</div>
<div className="text-right text-sm font-medium text-slate-200">2,100 DZD</div>
</div>

<div className="grid grid-cols-5 items-center gap-4 py-4">
<div className="col-span-2">
<div className="text-sm font-medium text-white">#ORD-8920</div>
<div className="text-xs text-slate-500">Karim M. • Setif</div>
</div>
<div>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">Delivered</span>
</div>
<div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
<span className="iconify" data-icon="lucide:check-circle"></span> Collected
                                        </span>
</div>
<div className="text-right text-sm font-medium text-white">5,800 DZD</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900 bg-slate-950 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 md:w-2/3">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    COD Is Powerful.<br/> But Messy Without Tools.
                </h2>
<p className="mt-4 text-lg text-slate-400">
                    Running a business on WhatsApp and Excel works until you scale. Then it becomes a liability.
                </p>
</div>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

<div className="group relative rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition-all hover:border-slate-700 hover:shadow-lg">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="lucide:x-circle"></span>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Fake Orders</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        High return rates and wasted shipping costs on unconfirmed orders without validation.
                    </p>
</div>

<div className="group relative rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition-all hover:border-slate-700 hover:shadow-lg">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="lucide:file-question"></span>
</div>
<h3 className="mb-2 text-lg font-medium text-white">No Visibility</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        "Is it shipped? Did they pay?" Tracking orders across Excel sheets is a disaster waiting to happen.
                    </p>
</div>

<div className="group relative rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition-all hover:border-slate-700 hover:shadow-lg">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="lucide:truck"></span>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Delivery Chaos</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        Manual integration with delivery companies leads to lost packages and data entry errors.
                    </p>
</div>

<div className="group relative rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition-all hover:border-slate-700 hover:shadow-lg">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="lucide:banknote"></span>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Lost Cash</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        Impossible to track which COD payments have been collected from the courier versus what is pending.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50">
<div className="mx-auto max-w-7xl px-6">
<div className="grid items-center gap-16 lg:grid-cols-2">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Engineered for the COD Lifecycle
                    </h2>
<p className="mt-6 text-lg text-slate-400">
                        We don't treat COD as an afterthought. Our platform structure mirrors the reality of cash-on-delivery logistics in Algeria.
                    </p>
<div className="mt-10 space-y-6">
<div className="flex gap-4">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
<span className="iconify text-sm" data-icon="lucide:check"></span>
</div>
<div>
<h4 className="font-medium text-white">Phone Verification First</h4>
<p className="mt-1 text-sm text-slate-500">Checkout flows optimized to collect and verify phone numbers instantly.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
<span className="iconify text-sm" data-icon="lucide:check"></span>
</div>
<div>
<h4 className="font-medium text-white">Structured Status Workflow</h4>
<p className="mt-1 text-sm text-slate-500">Track from "Confirmation" to "Shipped" to "Payment Collected" clearly.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
<span className="iconify text-sm" data-icon="lucide:check"></span>
</div>
<div>
<h4 className="font-medium text-white">Seamless Carrier Sync</h4>
<p className="mt-1 text-sm text-slate-500">Connect with local shipping providers directly from your dashboard.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 -rotate-1 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 opacity-50"></div>
<div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">
<div className="flex items-start justify-between border-b border-slate-800 pb-6">
<div>
<div className="text-xs font-medium uppercase text-slate-500">Status Flow</div>
<div className="mt-1 text-xl font-semibold text-white">Order #8922</div>
</div>
<div className="rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">Active</div>
</div>
<div className="mt-6 space-y-8">

<div className="relative flex gap-4">
<div className="absolute top-8 left-3 h-full w-0.5 bg-emerald-500/20"></div>
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow shadow-emerald-500/20">
<span className="iconify text-xs" data-icon="lucide:check"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Order Placed</div>
<div className="text-xs text-slate-500">Customer filled form</div>
</div>
</div>

<div className="relative flex gap-4">
<div className="absolute top-8 left-3 h-full w-0.5 bg-emerald-500/20"></div>
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950 border-2 border-emerald-500 text-emerald-500">
<span className="iconify text-xs" data-icon="lucide:phone-call"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Confirmed</div>
<div className="text-xs text-slate-500">Seller validated via phone</div>
</div>
</div>

<div className="relative flex gap-4">
<div className="absolute top-8 left-3 h-full w-0.5 bg-slate-800"></div>
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-slate-500">
<span className="iconify text-xs" data-icon="lucide:truck"></span>
</div>
<div>
<div className="text-sm font-medium text-slate-400">In Transit</div>
<div className="text-xs text-slate-600">Handed to delivery partner</div>
</div>
</div>

<div className="relative flex gap-4">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-slate-500">
<span className="iconify text-xs" data-icon="lucide:banknote"></span>
</div>
<div>
<div className="text-sm font-medium text-slate-400">Paid &amp; Collected</div>
<div className="text-xs text-slate-600">Funds received</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-950 py-24 border-t border-slate-900" id="features">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Everything You Need to Run a COD Business
                </h2>
<p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
                    No marketing fluff. Just essential, high-performance tools for your operations.
                </p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-slate-700 transition-colors">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-200">
<span className="iconify text-xl" data-icon="lucide:store"></span>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Fast Store Front</h3>
<p className="text-sm text-slate-500">Mobile-first designs that load instantly on 4G networks.</p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-slate-700 transition-colors">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-200">
<span className="iconify text-xl" data-icon="lucide:layers"></span>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Variant Management</h3>
<p className="text-sm text-slate-500">Easily handle sizes, colors, and complex inventory options.</p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-slate-700 transition-colors">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-900/20 text-emerald-500 border border-emerald-900/30">
<span className="iconify text-xl" data-icon="lucide:banknote"></span>
</div>
<h3 className="mb-2 text-lg font-medium text-white">COD Workflow</h3>
<p className="text-sm text-slate-500">Purpose-built dashboard to handle cash-on-delivery steps.</p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-slate-700 transition-colors">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-200">
<span className="iconify text-xl" data-icon="lucide:truck"></span>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Carrier Integrations</h3>
<p className="text-sm text-slate-500">Pre-built connections to local delivery providers.</p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-slate-700 transition-colors">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-200">
<span className="iconify text-xl" data-icon="lucide:bar-chart-3"></span>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Financial Clarity</h3>
<p className="text-sm text-slate-500">See your net profit and pending cash at a glance.</p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-slate-700 transition-colors">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-200">
<span className="iconify text-xl" data-icon="lucide:shield-check"></span>
</div>
<h3 className="mb-2 text-lg font-medium text-white">Secure Infrastructure</h3>
<p className="text-sm text-slate-500">Daily backups and 99.9% uptime so you never miss a sale.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30" id="how-it-works">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 lg:grid-cols-3">
<div className="group relative">
<div className="absolute -left-4 top-0 h-full w-0.5 bg-slate-800 lg:hidden"></div>
<div className="mb-6 text-6xl font-semibold text-slate-800 transition-colors group-hover:text-emerald-500/20">01</div>
<h3 className="text-xl font-semibold text-white">Create Your Store</h3>
<p className="mt-2 text-slate-500">Add your products with all their variants (Size, Color) in minutes using our simple builder.</p>
</div>
<div className="group relative">
<div className="absolute -left-4 top-0 h-full w-0.5 bg-slate-800 lg:hidden"></div>
<div className="mb-6 text-6xl font-semibold text-slate-800 transition-colors group-hover:text-emerald-500/20">02</div>
<h3 className="text-xl font-semibold text-white">Receive COD Orders</h3>
<p className="mt-2 text-slate-500">Customers place orders with confidence. You get instant notifications and verification tools.</p>
</div>
<div className="group relative">
<div className="absolute -left-4 top-0 h-full w-0.5 bg-slate-800 lg:hidden"></div>
<div className="mb-6 text-6xl font-semibold text-slate-800 transition-colors group-hover:text-emerald-500/20">03</div>
<h3 className="text-xl font-semibold text-white">Ship &amp; Get Paid</h3>
<p className="mt-2 text-slate-500">Follow the delivery status and track exactly when the cash is collected from the customer.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-800 bg-slate-900 py-24" id="mission">
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for COD. Not Adapted to It.
            </h2>
<div className="mt-12 grid gap-4 text-left sm:grid-cols-2">
<div className="flex items-start gap-3 rounded-lg bg-slate-950 p-4 shadow-sm ring-1 ring-slate-800">
<span className="iconify mt-0.5 shrink-0 text-emerald-500" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-300">Designed for COD logic from day one</span>
</div>
<div className="flex items-start gap-3 rounded-lg bg-slate-950 p-4 shadow-sm ring-1 ring-slate-800">
<span className="iconify mt-0.5 shrink-0 text-emerald-500" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-300">Focused on Algerian logistics reality</span>
</div>
<div className="flex items-start gap-3 rounded-lg bg-slate-950 p-4 shadow-sm ring-1 ring-slate-800">
<span className="iconify mt-0.5 shrink-0 text-emerald-500" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-300">No unnecessary features cluttering your view</span>
</div>
<div className="flex items-start gap-3 rounded-lg bg-slate-950 p-4 shadow-sm ring-1 ring-slate-800">
<span className="iconify mt-0.5 shrink-0 text-emerald-500" data-icon="lucide:check-circle-2"></span>
<span className="text-sm text-slate-300">Built to scale as your order volume grows</span>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="mx-auto max-w-7xl px-6 text-center">
<p className="text-sm font-medium uppercase tracking-wider text-slate-600">Trusted by serious sellers</p>
<div className="mt-8 flex flex-wrap justify-center gap-10 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
<span className="text-xl font-bold tracking-tighter text-white">DZ<span className="text-emerald-500">STORE</span></span>
<span className="text-xl font-semibold tracking-tight text-white">ElMerch</span>
<span className="text-xl font-bold tracking-tight text-white">SHOP<span className="italic font-light text-slate-400">NOW</span></span>
</div>
<div className="mt-12 inline-block max-w-3xl rounded-2xl bg-slate-900 border border-slate-800 p-8">
<blockquote className="text-lg font-medium text-slate-200">
                    "Finally, a platform that understands how selling in Algeria actually works. The order status flow is exactly what I needed."
                </blockquote>
<div className="mt-4 text-sm text-emerald-500 font-medium">– Early Beta User, Algiers</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-900/20 blur-[100px]"></div>
<div className="mx-auto max-w-3xl px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Take Control of Your Business
            </h2>
<p className="mt-6 text-xl text-slate-400">
                Stop managing chaos. Start managing growth with Markium.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="w-full rounded-full bg-emerald-600 px-8 py-4 text-center text-sm font-medium text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-500 hover:scale-105 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto" href="#">
                    Start Your COD Store
                </a>
<a className="w-full rounded-full bg-slate-900 border border-slate-800 px-8 py-4 text-center text-sm font-medium text-white transition-all hover:bg-slate-800 sm:w-auto" href="#">
                    Join Early Access
                </a>
</div>
</div>
</section>

<footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-12">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 border border-slate-800 text-emerald-500">
<span className="iconify text-xs" data-icon="lucide:box"></span>
</div>
<span className="font-semibold tracking-tight text-white">Markium</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-emerald-500 transition-colors" href="#">Privacy</a>
<a className="hover:text-emerald-500 transition-colors" href="#">Terms</a>
<a className="hover:text-emerald-500 transition-colors" href="#">Twitter</a>
<a className="hover:text-emerald-500 transition-colors" href="#">Contact</a>
</div>
</div>
<div className="mt-8 text-center text-xs text-slate-600 md:text-left">
                © 2023 Markium. Built for Algerian E-Commerce.
            </div>
</div>
</footer>

    </>
  );
}
