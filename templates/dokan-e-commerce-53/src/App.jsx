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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex-shrink-0">
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#">
                        Dokan
                    </a>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-800 shadow-sm" href="#pricing">
                        Grab Lifetime Deal <iconify-icon className="ml-1.5 text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative overflow-hidden pb-20 pt-24 sm:pt-32 lg:pb-32 lg:pt-40">
<div className="absolute inset-0 -z-10 bg-gradient-radial from-indigo-50/80 via-[#FAFAFA] to-[#FAFAFA]"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 mb-8 shadow-sm">
<iconify-icon className="mr-1.5 text-sm" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
                    Limited Time · Lifetime Deal is Live
                </div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl">
                    Pay Once. <br className="hidden sm:block"/>
<span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Own Forever.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-500 sm:text-xl">
                    Stop writing renewal checks every year. Get Dokan's full marketplace power for a one-time price — and keep it for life.
                </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex h-12 w-full items-center justify-center rounded-full bg-indigo-600 px-8 text-base font-medium text-white transition-all hover:bg-indigo-700 shadow-md shadow-indigo-200 sm:w-auto" href="#pricing">
                        See Lifetime Plans
                    </a>
<a className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-base font-medium text-slate-900 transition-all hover:bg-slate-50 shadow-sm sm:w-auto" href="#">
                        View Live Demo
                    </a>
</div>
<div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500 sm:mt-20">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                        50,000+ Active Customers
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                        13 yrs In Business
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
                        42+ Premium Modules
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        14-day Guarantee
                    </div>
</div>
</div>
</section>

<section className="border-y border-slate-200/60 bg-white py-5 overflow-hidden flex">
<div className="flex w-[200%] animate-marquee">

<div className="flex w-1/2 items-center justify-around gap-8 whitespace-nowrap text-sm font-medium uppercase tracking-widest text-slate-400">
<span className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> No Annual Renewals</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:refresh-linear"></iconify-icon> Lifetime Plugin Updates</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:layers-linear"></iconify-icon> 42+ Premium Modules</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:chart-square-linear"></iconify-icon> 50,000+ Active Users</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:wad-of-money-linear"></iconify-icon> 14-Day Money Back</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:card-linear"></iconify-icon> Stripe, PayPal, Razorpay</span>
</div>

<div className="flex w-1/2 items-center justify-around gap-8 whitespace-nowrap text-sm font-medium uppercase tracking-widest text-slate-400 pl-8">
<span className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> No Annual Renewals</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:refresh-linear"></iconify-icon> Lifetime Plugin Updates</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:layers-linear"></iconify-icon> 42+ Premium Modules</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:chart-square-linear"></iconify-icon> 50,000+ Active Users</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:wad-of-money-linear"></iconify-icon> 14-Day Money Back</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:card-linear"></iconify-icon> Stripe, PayPal, Razorpay</span>
</div>
</div>
</section>

<section className="py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Stop Paying Year After Year</h2>
<p className="mt-4 text-lg text-slate-500">Annual subscriptions add up fast. A lifetime deal is the smarter play for anyone building long-term.</p>
</div>
<div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2">

<div className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">One Price. Forever Yours.</h3>
<p className="mt-2 text-sm leading-relaxed text-slate-500">You pay once. That's it. No invoices next year, no price hike surprises. Your marketplace keeps running — subscription-free.</p>
</div>

<div className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
<iconify-icon className="text-xl" icon="solar:cloud-download-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Get Every Future Update</h3>
<p className="mt-2 text-sm leading-relaxed text-slate-500">Dokan ships new features, security patches, and improvements regularly. Lifetime deal holders get all of it — always included, at no extra cost.</p>
</div>

<div className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
<iconify-icon className="text-xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Save More as You Grow</h3>
<p className="mt-2 text-sm leading-relaxed text-slate-500">Annual plans get pricier over time. A lifetime deal locks your cost in today. The longer you use Dokan, the more you save.</p>
</div>

<div className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
<iconify-icon className="text-xl" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Build Without Fear</h3>
<p className="mt-2 text-sm leading-relaxed text-slate-500">No expiry dates hanging over your store. You own the tool. Build with total confidence — and without the stress of renewal deadlines.</p>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="mx-auto max-w-4xl px-6 lg:px-8">
<div className="rounded-3xl border border-indigo-100 bg-white bg-gradient-to-br from-indigo-50/50 to-white p-8 shadow-sm sm:p-12">
<h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">See What You Actually Save</h2>
<div className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
<div className="text-center">
<p className="text-sm font-medium uppercase tracking-widest text-slate-400">Annual Plan × 5 Years</p>
<p className="mt-2 text-4xl font-medium tracking-tight text-slate-300 line-through decoration-slate-300 decoration-2">$2,495</p>
</div>
<div className="hidden h-16 w-px bg-slate-200 sm:block"></div>
<div className="h-px w-16 bg-slate-200 sm:hidden"></div>
<div className="text-center">
<p className="text-sm font-medium uppercase tracking-widest text-indigo-500">Lifetime Deal (Today)</p>
<p className="mt-2 text-5xl font-semibold tracking-tighter text-indigo-600">$2,121</p>
</div>
</div>
<div className="mt-10 rounded-2xl bg-slate-900 p-6 text-center text-white">
<p className="text-lg font-medium tracking-tight">
                            Your Total Savings: <span className="text-indigo-300">$374+</span>
<span className="block text-sm font-normal text-slate-400 mt-1">Plus, you never pay again from year 6 onwards.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 relative" id="pricing">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Choose Your Lifetime Plan</h2>
<p className="mt-4 text-lg text-slate-500">Pay once today. Get updates and access forever.</p>
</div>
<div className="grid grid-cols-1 gap-6 lg:grid-cols-4 items-start">

<div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm flex flex-col h-full">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Starter</h3>
<div className="mt-4 flex items-baseline gap-x-2">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">$708</span>
<span className="text-sm text-slate-400 line-through">$745</span>
</div>
<div className="mt-2 inline-flex w-fit rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">Save 5%</div>
<p className="mt-6 text-sm text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> 1 Site License</p>
<p className="mt-2 text-sm text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> 4 Premium Modules</p>
<p className="mt-2 text-sm text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> One-time payment</p>
<p className="mt-2 text-sm text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Lifetime Updates</p>
<div className="my-8 h-px bg-slate-100"></div>
<p className="text-xs font-medium uppercase tracking-widest text-slate-900 mb-4">Includes</p>
<ul className="flex flex-col gap-3 text-sm text-slate-600 mb-8 flex-grow">
<li>AI Image Enhancer</li>
<li>Vendor Analytics</li>
<li>Manual Order Creation</li>
<li>Product Bulk Edit</li>
<li>Commission Types</li>
<li>Ticket-Based Support</li>
</ul>
<a className="mt-auto block w-full rounded-xl border border-slate-200 bg-white py-2.5 text-center text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 shadow-sm" href="#">Get Starter</a>
</div>

<div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm flex flex-col h-full">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Professional</h3>
<div className="mt-4 flex items-baseline gap-x-2">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">$1,121</span>
<span className="text-sm text-slate-400 line-through">$1,245</span>
</div>
<div className="mt-2 inline-flex w-fit rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">Save 10%</div>
<p className="mt-6 text-sm text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> 3 Sites License</p>
<p className="mt-2 text-sm text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> 23 Premium Modules</p>
<p className="mt-2 text-sm text-slate-500 flex items-center gap-2 opacity-0 select-none">-</p> 
<p className="mt-2 text-sm text-slate-500 flex items-center gap-2 opacity-0 select-none">-</p> 
<div className="my-8 h-px bg-slate-100"></div>
<p className="text-xs font-medium uppercase tracking-widest text-slate-900 mb-4">Includes</p>
<ul className="flex flex-col gap-3 text-sm text-slate-600 mb-8 flex-grow">
<li>Stripe Express</li>
<li>Razorpay &amp; MANGOPAY</li>
<li>Rank Math SEO</li>
<li>Table Rate Shipping</li>
<li>Seller Verification</li>
<li>Subscriptions</li>
</ul>
<a className="mt-auto block w-full rounded-xl border border-slate-200 bg-white py-2.5 text-center text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 shadow-sm" href="#">Get Professional</a>
</div>

<div className="rounded-3xl border-2 border-indigo-600 bg-white p-8 shadow-md relative flex flex-col h-full -mt-4 z-10">
<div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                            Most Popular
                        </div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mt-2">Business</h3>
<div className="mt-4 flex items-baseline gap-x-2">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">$2,121</span>
<span className="text-sm text-slate-400 line-through">$2,495</span>
</div>
<div className="mt-2 inline-flex w-fit rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">Save 15%</div>
<p className="mt-6 text-sm text-slate-900 font-medium flex items-center gap-2"><iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> 5 Sites License</p>
<p className="mt-2 text-sm text-slate-900 font-medium flex items-center gap-2"><iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> 42+ Premium Modules</p>
<p className="mt-2 text-sm text-slate-500 flex items-center gap-2 opacity-0 select-none">-</p> 
<p className="mt-2 text-sm text-slate-500 flex items-center gap-2 opacity-0 select-none">-</p> 
<div className="my-8 h-px bg-slate-100"></div>
<p className="text-xs font-medium uppercase tracking-widest text-indigo-600 mb-4">Key Features</p>
<ul className="flex flex-col gap-3 text-sm text-slate-600 mb-8 flex-grow">
<li>Printful Integration</li>
<li>Product Advertising</li>
<li>PayPal Marketplace</li>
<li>WC Booking Integration</li>
<li>Geolocation &amp; Auction</li>
<li>Staff Manager</li>
</ul>
<a className="mt-auto block w-full rounded-xl bg-indigo-600 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-indigo-700 shadow-sm shadow-indigo-200" href="#">Get Business</a>
</div>

<div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm flex flex-col h-full">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Enterprise</h3>
<div className="mt-4 flex items-baseline gap-x-2">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">$3,996</span>
<span className="text-sm text-slate-400 line-through">$4,995</span>
</div>
<div className="mt-2 inline-flex w-fit rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">Save 20%</div>
<p className="mt-6 text-sm text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> 10 Sites License</p>
<p className="mt-2 text-sm text-slate-500 flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> All Modules Included</p>
<p className="mt-2 text-sm text-slate-500 flex items-center gap-2 opacity-0 select-none">-</p> 
<p className="mt-2 text-sm text-slate-500 flex items-center gap-2 opacity-0 select-none">-</p> 
<div className="my-8 h-px bg-slate-100"></div>
<p className="text-xs font-medium uppercase tracking-widest text-slate-900 mb-4">Premium Perks</p>
<ul className="flex flex-col gap-3 text-sm text-slate-600 mb-8 flex-grow">
<li>Priority Support</li>
<li>WhatsApp Manager</li>
<li>Emergency Video Call</li>
<li>Migration Support</li>
<li>SEO Audit</li>
<li>Security Check</li>
</ul>
<a className="mt-auto block w-full rounded-xl border border-slate-200 bg-white py-2.5 text-center text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 shadow-sm" href="#">Get Enterprise</a>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<p className="text-sm font-medium uppercase tracking-widest text-slate-400 mb-8">42+ Modules including</p>
<div className="flex flex-wrap items-center justify-center gap-3">
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:card-linear"></iconify-icon> Stripe Express</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:wallet-linear"></iconify-icon> PayPal Marketplace</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:card-2-linear"></iconify-icon> Razorpay</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:money-bag-linear"></iconify-icon> MANGOPAY</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:magnifer-linear"></iconify-icon> Rank Math SEO</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:map-point-linear"></iconify-icon> Geolocation</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:box-minimalistic-linear"></iconify-icon> Table Rate Shipping</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:calendar-date-linear"></iconify-icon> WC Booking</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:gavel-linear"></iconify-icon> Auction</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:refresh-circle-linear"></iconify-icon> Subscriptions</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:printer-linear"></iconify-icon> Printful</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:chart-linear"></iconify-icon> Vendor Analytics</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:users-group-two-rounded-linear"></iconify-icon> Staff Manager</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:megaphone-linear"></iconify-icon> Product Advertising</span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"><iconify-icon className="text-indigo-500" icon="solar:user-check-linear"></iconify-icon> Seller Verification</span>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-indigo-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-slate-700">"I was paying $499 every single year. Getting the lifetime deal felt like finally owning my tools instead of renting them."</p>
</div>
<div className="mt-6 flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700">MH</div>
<div className="text-sm font-medium text-slate-900">Marcus H.</div>
</div>
</div>
<div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-indigo-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-slate-700">"Setup took less than a day. The vendor dashboard is clean and my sellers figured it out instantly."</p>
</div>
<div className="mt-6 flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">RT</div>
<div className="text-sm font-medium text-slate-900">Ritu T.</div>
</div>
</div>
<div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-indigo-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-slate-700">"42 modules, 5 site licenses, one payment. I'm running three marketplaces with this single plan."</p>
</div>
<div className="mt-6 flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">JA</div>
<div className="text-sm font-medium text-slate-900">James A.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32">
<div className="mx-auto max-w-3xl px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
<div className="divide-y divide-slate-200 border-y border-slate-200">
<details className="group py-5" open="">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900 text-base">
                            What is a lifetime deal?
                            <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white transition-all group-open:rotate-180 group-open:border-indigo-200 group-open:text-indigo-600">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 pr-12">One-time payment. No renewals. Lifetime access + updates.</p>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900 text-base">
                            Will I get updates?
                            <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white transition-all group-open:rotate-180 group-open:border-indigo-200 group-open:text-indigo-600">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 pr-12">Yes, all future updates and new features added to your purchased tier are included forever.</p>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900 text-base">
                            Refund policy?
                            <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white transition-all group-open:rotate-180 group-open:border-indigo-200 group-open:text-indigo-600">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 pr-12">We offer a no-questions-asked 14-day money-back guarantee. If it doesn't fit your needs, get a full refund.</p>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900 text-base">
                            Can I use it on multiple stores?
                            <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white transition-all group-open:rotate-180 group-open:border-indigo-200 group-open:text-indigo-600">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 pr-12">Yes, depending on the plan you choose. The Professional plan allows 3 sites, Business allows 5, and Enterprise allows 10 sites.</p>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900 text-base">
                            Which payment gateways are supported?
                            <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white transition-all group-open:rotate-180 group-open:border-indigo-200 group-open:text-indigo-600">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-slate-500 pr-12">Dokan supports Stripe, PayPal, Razorpay, Paystack, MANGOPAY, and many others natively through modules.</p>
</details>
</div>
</div>
</section>

<section className="relative overflow-hidden py-24 sm:py-32 bg-slate-900 m-4 rounded-3xl mx-auto max-w-[96%] sm:max-w-7xl lg:mx-8 xl:mx-auto">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>
<div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">The Clock Is Ticking on This Deal</h2>
<p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">Lifetime deals don't last. Lock in your marketplace's future today and never pay for Dokan again.</p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-base font-medium text-slate-900 transition-all hover:bg-slate-100 shadow-sm sm:w-auto" href="#pricing">
                        Grab Lifetime Access <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
<a className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-700 bg-transparent px-8 text-base font-medium text-white transition-all hover:bg-slate-800 sm:w-auto" href="#">
                        Try the Demo First
                    </a>
</div>
<div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
<span className="flex items-center gap-2"><iconify-icon className="text-indigo-400 text-lg" icon="solar:shield-check-linear"></iconify-icon> 14-Day Money-Back</span>
<span className="flex items-center gap-2"><iconify-icon className="text-indigo-400 text-lg" icon="solar:forbidden-circle-linear"></iconify-icon> No Recurring Fees</span>
<span className="flex items-center gap-2"><iconify-icon className="text-indigo-400 text-lg" icon="solar:bolt-linear"></iconify-icon> Instant Access</span>
<span className="flex items-center gap-2"><iconify-icon className="text-indigo-400 text-lg" icon="solar:refresh-linear"></iconify-icon> Lifetime Updates</span>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-200/60 bg-white py-8 mt-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
<p className="text-sm text-slate-500">© 2024 Dokan. All rights reserved.</p>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Support</a>
</div>
</div>
</footer>

    </>
  );
}
