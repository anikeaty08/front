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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const callsRange = document.getElementById('callsRange');
    const closeRange = document.getElementById('closeRange');
    const dealValue = document.getElementById('dealValue');
    const costPerCall = document.getElementById('costPerCall');

    const callsValue = document.getElementById('callsValue');
    const closeValue = document.getElementById('closeValue');
    
    const roiCustomers = document.getElementById('roiCustomers');
    const roiGross = document.getElementById('roiGross');
    const roiSpend = document.getElementById('roiSpend');
    const roiRevenue = document.getElementById('roiRevenue');
    const roiPercent = document.getElementById('roiPercent');
    const roiSummary = document.getElementById('roiSummary');

    function formatMoney(value) {
      return '$' + Math.round(value).toLocaleString();
    }

    function updateRangeBackground(el) {
      const min = Number(el.min);
      const max = Number(el.max);
      const val = Number(el.value);
      const percent = ((val - min) / (max - min)) * 100;
      el.style.background = `linear-gradient(to right, #18181b 0%, #18181b ${percent}%, #e4e4e7 ${percent}%, #e4e4e7 100%)`;
    }

    function updateROI() {
      // Parse values
      const calls = Number(callsRange.value);
      const close = Number(closeRange.value) / 100;
      const deal = Number(dealValue.value || 0);
      const cost = Number(costPerCall.value || 0);

      // Math
      const customers = calls * close;
      const gross = customers * deal;
      const spend = calls * cost;
      const profit = gross - spend;
      const roi = spend > 0 ? (profit / spend) * 100 : 0;

      // Update Labels
      callsValue.textContent = calls;
      closeValue.textContent = `${Math.round(close * 100)}%`;
      
      // Update Output
      roiCustomers.textContent = customers.toFixed(1);
      roiGross.textContent = formatMoney(gross);
      roiSpend.textContent = formatMoney(spend);
      
      // Handle Profit formatting
      roiRevenue.textContent = (profit < 0 ? '-' : '') + formatMoney(Math.abs(profit));
      roiRevenue.className = `mt-2 text-4xl font-semibold tracking-tight sm:text-5xl ${profit < 0 ? 'text-red-400' : 'text-white'}`;
      
      roiPercent.textContent = `${Math.round(roi)}%`;
      roiPercent.className = `mt-1 text-xl font-semibold ${roi < 0 ? 'text-red-400' : 'text-emerald-400'}`;
      
      roiSummary.textContent = `With ${calls} qualified calls per month and a ${Math.round(close * 100)}% close rate, this model could generate ${formatMoney(Math.abs(profit))} in monthly ${profit < 0 ? 'loss' : 'profit'} after call costs.`;

      // Update slider tracks
      updateRangeBackground(callsRange);
      updateRangeBackground(closeRange);
    }

    // Event Listeners
    [callsRange, closeRange, dealValue, costPerCall].forEach(input => {
      input.addEventListener('input', updateROI);
    });

    // Init
    updateROI();
  
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
      
<div className="min-h-screen">

<header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="text-lg font-semibold tracking-tight text-zinc-950">PPC</div>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#how-it-works">How it works</a>
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#roi">ROI calculator</a>
<a className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950" href="#faq">FAQ</a>
</nav>
<a className="inline-flex items-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white" href="#book">
            Book a call
          </a>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden pt-16 lg:pt-24">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(24,24,27,.04),transparent_50%)]"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                Risk-reduced outbound
              </div>
<h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Only pay for sales calls booked from cold email
              </h1>
<p className="mt-6 max-w-xl text-lg font-normal leading-8 text-zinc-600">
                We build, manage, and optimize your outbound system end-to-end. No retainers tied to activity. No paying for guesswork. You pay only when qualified calls land on your calendar.
              </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800" href="#book">
                  Get qualified calls
                </a>
<a className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-50" href="#roi">
                  Calculate ROI
                </a>
</div>
<div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:letter-linear" style={{color: '#18181b', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-zinc-500">Cold</span>
</div>
<p className="mt-3 text-sm font-medium text-zinc-950">Targeted campaigns built for reply quality, not vanity metrics</p>
</div>
<div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:calendar-linear" style={{color: '#18181b', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-zinc-500">Qualified calls</span>
</div>
<p className="mt-3 text-sm font-medium text-zinc-950">Calls booked directly with buyers who need your offer</p>
</div>
<div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:shield-check-linear" style={{color: '#18181b', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-zinc-500">Pay per result</span>
</div>
<p className="mt-3 text-sm font-medium text-zinc-950">Simple pricing tied to meetings, not monthly busywork</p>
</div>
</div>
</div>
<div className="relative lg:pl-8">
<div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_1rem_3rem_rgba(0,0,0,0.05)]">
<div className="border-b border-zinc-100 px-6 py-5 bg-zinc-50/50">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-zinc-950">Watch the walkthrough</p>
<p className="mt-1 text-xs font-normal text-zinc-500">See how the pay-per-call model works</p>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm border border-zinc-200">
<span className="h-2 w-2 rounded-full bg-red-500"></span>
                      VSL
                    </div>
</div>
</div>
<div className="p-6">
<div className="group relative aspect-video overflow-hidden rounded-2xl bg-zinc-950 cursor-pointer">
<img alt="Video presentation" className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-40" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-950/40 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-zinc-950 shadow-lg transition-transform duration-300 group-hover:scale-110">
<iconify-icon height="28" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<p className="max-w-md text-lg font-medium tracking-tight text-white">How we turn targeted cold outreach into booked conversations</p>
</div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100">
<p className="text-xs font-medium text-zinc-500">Average setup</p>
<p className="mt-1.5 text-sm font-medium text-zinc-950">14 days</p>
</div>
<div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100">
<p className="text-xs font-medium text-zinc-500">Pricing model</p>
<p className="mt-1.5 text-sm font-medium text-zinc-950">Pay per booked call</p>
</div>
<div className="rounded-2xl bg-zinc-50 p-4 border border-zinc-100">
<p className="text-xs font-medium text-zinc-500">Best for</p>
<p className="mt-1.5 text-sm font-medium text-zinc-950">High-ticket B2B</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-24 grid gap-8 border-t border-zinc-200 pt-12 sm:grid-cols-2 lg:grid-cols-4 pb-20">
<div>
<p className="text-xl font-medium tracking-tight text-zinc-950">No retainers</p>
<p className="mt-3 text-sm font-normal leading-6 text-zinc-600">You are not paying for volume, lists, or vague promises. Zero monthly recurring fees.</p>
</div>
<div>
<p className="text-xl font-medium tracking-tight text-zinc-950">Qualified only</p>
<p className="mt-3 text-sm font-normal leading-6 text-zinc-600">Calls must meet your pre-agreed criteria before they count toward your balance.</p>
</div>
<div>
<p className="text-xl font-medium tracking-tight text-zinc-950">Done for you</p>
<p className="mt-3 text-sm font-normal leading-6 text-zinc-600">We handle list building, messaging, inboxes, and optimization. You just take calls.</p>
</div>
<div>
<p className="text-xl font-medium tracking-tight text-zinc-950">Built for ROI</p>
<p className="mt-3 text-sm font-normal leading-6 text-zinc-600">Simple economics with a clear, measurable path from meeting to closed revenue.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-zinc-50/50" id="how-it-works">
<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
<div className="max-w-2xl">
<p className="text-sm font-medium text-zinc-500">How it works</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">A simple model built around booked conversations</h2>
<p className="mt-4 text-lg font-normal leading-8 text-zinc-600">
              We remove friction from outbound by taking ownership of campaign execution and tying our pricing to the outcome that matters most: qualified calls.
            </p>
</div>
<div className="mt-16 grid gap-6 md:grid-cols-3">
<div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900">
<iconify-icon height="24" icon="solar:user-search-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-6 text-xl font-medium tracking-tight text-zinc-950">1. We define your ICP</h3>
<p className="mt-4 text-sm font-normal leading-6 text-zinc-600">
                We map your ideal buyer, pain points, offer positioning, and qualification standards so outreach stays sharp and highly relevant.
              </p>
</div>
<div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900">
<iconify-icon height="24" icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-6 text-xl font-medium tracking-tight text-zinc-950">2. We launch campaigns</h3>
<p className="mt-4 text-sm font-normal leading-6 text-zinc-600">
                We spin up sending infrastructure, build targeted lists, write messaging, and continuously test for better reply and booking rates.
              </p>
</div>
<div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-md">
<iconify-icon height="24" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-6 text-xl font-medium tracking-tight text-zinc-950">3. You take the calls</h3>
<p className="mt-4 text-sm font-normal leading-6 text-zinc-600">
                Interested prospects are qualified and booked onto your calendar. You focus on closing. You only pay for the ones that show up and fit.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-white" id="roi">
<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
<div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
<div className="max-w-xl">
<p className="text-sm font-medium text-zinc-500">ROI calculator</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">Estimate return from pay-per-call</h2>
<p className="mt-4 text-lg font-normal leading-8 text-zinc-600">
                Adjust your numbers to project revenue, expected client wins, and return on investment relative to campaign spend.
              </p>
<div className="mt-10 rounded-[2rem] border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8">
<div className="space-y-8">

<div>
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-zinc-950">Qualified calls per month</label>
<span className="text-sm font-medium text-zinc-500" id="callsValue">12</span>
</div>
<div className="mt-4 relative flex items-center">
<input className="w-full h-1.5 appearance-none cursor-pointer rounded-full bg-zinc-200 outline-none" id="callsRange" max="50" min="5" style={{background: 'linear-gradient(to right, #18181b 0%, #18181b 15.55%, #e4e4e7 15.55%, #e4e4e7 100%)'}} type="range" value="12"/>
<style>
                        #callsRange::-webkit-slider-thumb, #closeRange::-webkit-slider-thumb {
                          appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #18181b; border: 4px solid #ffffff; box-shadow: 0 0 0 1px #e4e4e7, 0 2px 4px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.1s;
                        }
                        #callsRange::-webkit-slider-thumb:hover, #closeRange::-webkit-slider-thumb:hover { transform: scale(1.1); }
                        #callsRange::-moz-range-thumb, #closeRange::-moz-range-thumb {
                          width: 20px; height: 20px; border-radius: 50%; background: #18181b; border: 4px solid #ffffff; box-shadow: 0 0 0 1px #e4e4e7, 0 2px 4px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.1s;
                        }
                      </style>
</div>
</div>

<div>
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-zinc-950">Close rate</label>
<span className="text-sm font-medium text-zinc-500" id="closeValue">20%</span>
</div>
<div className="mt-4 relative flex items-center">
<input className="w-full h-1.5 appearance-none cursor-pointer rounded-full bg-zinc-200 outline-none" id="closeRange" max="60" min="5" style={{background: 'linear-gradient(to right, #18181b 0%, #18181b 27.27%, #e4e4e7 27.27%, #e4e4e7 100%)'}} type="range" value="20"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">

<div>
<label className="text-sm font-medium text-zinc-950" htmlFor="dealValue">Average deal value</label>
<div className="mt-3 flex items-center overflow-hidden rounded-xl border border-zinc-200 bg-white px-3 py-2.5 transition focus-within:border-zinc-400 focus-within:ring-1 focus-within:ring-zinc-400">
<span className="text-sm font-medium text-zinc-500">$</span>
<input className="ml-2 w-full border-0 bg-transparent text-sm font-medium text-zinc-950 outline-none" id="dealValue" type="number" value="3000" />
</input></div>
</div>

<div>
<label className="text-sm font-medium text-zinc-950" htmlFor="costPerCall">Cost per call</label>
<div className="mt-3 flex items-center overflow-hidden rounded-xl border border-zinc-200 bg-white px-3 py-2.5 transition focus-within:border-zinc-400 focus-within:ring-1 focus-within:ring-zinc-400">
<span className="text-sm font-medium text-zinc-500">$</span>
<input className="ml-2 w-full border-0 bg-transparent text-sm font-medium text-zinc-950 outline-none" id="costPerCall" type="number" value="250" />
</input></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col">
<div className="flex-1 rounded-[2rem] bg-zinc-950 p-8 text-white shadow-xl lg:p-10">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
<div>
<p className="text-sm font-medium text-zinc-400">Projected monthly profit</p>
<h3 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl" id="roiRevenue">$4,200</h3>
</div>
<div className="inline-flex flex-col items-start sm:items-end rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Return</p>
<p className="mt-1 text-xl font-semibold text-emerald-400" id="roiPercent">140%</p>
</div>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-xs font-medium text-zinc-400">Expected clients</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white" id="roiCustomers">2.4</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-xs font-medium text-zinc-400">Gross revenue</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white" id="roiGross">$7,200</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-xs font-medium text-zinc-400">Campaign spend</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white" id="roiSpend">$3,000</p>
</div>
</div>
<div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-start gap-4">
<div className="rounded-full bg-white/10 p-2 text-white">
<iconify-icon height="20" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">What this means</p>
<p className="mt-1.5 text-sm font-normal leading-6 text-zinc-300" id="roiSummary">
                        With 12 qualified calls per month and a 20% close rate, this model could generate $4,200 in monthly profit after call costs.
                      </p>
</div>
</div>
</div>
</div>
<div className="mt-6 rounded-[2rem] border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8">
<div className="flex items-start gap-4">
<div className="mt-1 text-zinc-900">
<iconify-icon height="24" icon="solar:hand-shake-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<p className="text-base font-medium tracking-tight text-zinc-950">Why teams prefer pay per call</p>
<p className="mt-2 text-sm font-normal leading-6 text-zinc-600">
                      Incentives are aligned. We are rewarded for putting real opportunities on your calendar, and you get a clearer acquisition model tied directly to conversations.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-200 bg-white">
<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="rounded-[2rem] border border-zinc-200 bg-zinc-50/50 p-8">
<p className="text-sm font-medium text-zinc-500">Who this is for</p>
<h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">Best fit businesses</h3>
<ul className="mt-6 space-y-4 text-sm font-normal text-zinc-600">
<li className="flex items-start gap-3">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#18181b', marginTop: '0.1rem', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="leading-6">B2B services with healthy deal value ($3k+)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#18181b', marginTop: '0.1rem', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="leading-6">Agencies, software, consulting, and recruiters</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: '#18181b', marginTop: '0.1rem', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="leading-6">Teams that can close consistently once booked</span>
</li>
</ul>
</div>

<div className="rounded-[2rem] border border-zinc-200 bg-zinc-50/50 p-8">
<p className="text-sm font-medium text-zinc-500">What you get</p>
<h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">Execution included</h3>
<ul className="mt-6 space-y-4 text-sm font-normal text-zinc-600">
<li className="flex items-start gap-3">
<iconify-icon height="20" icon="solar:inbox-linear" style={{color: '#18181b', marginTop: '0.1rem', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="leading-6">Inbox setup and deliverability management</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon height="20" icon="solar:text-linear" style={{color: '#18181b', marginTop: '0.1rem', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="leading-6">Offer positioning, copywriting, and A/B testing</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon height="20" icon="solar:users-group-two-rounded-linear" style={{color: '#18181b', marginTop: '0.1rem', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="leading-6">Lead sourcing, qualification, and booking</span>
</li>
</ul>
</div>

<div className="rounded-[2rem] border border-zinc-950 bg-zinc-950 p-8 text-white md:col-span-2 lg:col-span-1 shadow-xl" id="book">
<p className="text-sm font-medium text-zinc-400">Ready to scale outbound?</p>
<h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">Book a quick fit call</h3>
<p className="mt-3 text-sm font-normal leading-6 text-zinc-300">
                We'll look at your offer, deal size, and target market to see if the pay-per-call model makes sense for you.
              </p>
<form className="mt-8 space-y-3">
<input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder:text-zinc-500 outline-none focus:border-white/30 transition" placeholder="Your name" type="text"/>
<input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder:text-zinc-500 outline-none focus:border-white/30 transition" placeholder="Work email" type="email"/>
<input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder:text-zinc-500 outline-none focus:border-white/30 transition" placeholder="Company website" type="text"/>
<button className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200" type="button">
                  Request availability
                </button>
</form>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-200 bg-zinc-50/30" id="faq">
<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
<div className="max-w-2xl">
<p className="text-sm font-medium text-zinc-500">FAQ</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">Common questions</h2>
</div>
<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
<h3 className="text-base font-medium tracking-tight text-zinc-950">What counts as a qualified call?</h3>
<p className="mt-3 text-sm font-normal leading-6 text-zinc-600">
                Before launch, we agree on your qualification criteria such as company size, role, geography, and intent. Only calls that show up and meet that standard count.
              </p>
</div>
<div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
<h3 className="text-base font-medium tracking-tight text-zinc-950">Is this only for certain industries?</h3>
<p className="mt-3 text-sm font-normal leading-6 text-zinc-600">
                It works best for B2B offers with a high lifetime customer value and a clear ideal buyer. If your sales process can turn conversations into revenue, it may be a fit.
              </p>
</div>
<div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
<h3 className="text-base font-medium tracking-tight text-zinc-950">Do I need to manage the campaigns?</h3>
<p className="mt-3 text-sm font-normal leading-6 text-zinc-600">
                No. We handle the entire outbound process for you. Your team just needs to provide offer clarity, prompt feedback, and show up prepared to close booked calls.
              </p>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-zinc-200 bg-white py-10">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-lg font-semibold tracking-tight text-zinc-950">PPC</div>
<p className="text-sm font-normal text-zinc-500">© 2024 Pay Per Call. All rights reserved.</p>
</div>
</footer>
</div>


    </>
  );
}
