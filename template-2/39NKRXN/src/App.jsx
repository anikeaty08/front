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
      
  lucide.createIcons();

  // entry animation for main card
  document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('section');
    card.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => card.classList.remove('opacity-0', 'translate-y-4'), 200);
  });

  const checkBtn   = document.getElementById('checkBtn');
  const input      = document.getElementById('orderInput');
  const successDiv = document.getElementById('statusSuccess');
  const failDiv    = document.getElementById('statusFail');
  const orderRef   = document.getElementById('orderRefText');
  const appStatus  = document.getElementById('appStatus');
  const copyBtn    = document.getElementById('copyBtn');

  const statuses = ['Order Received', 'Processing', 'Dispatched', 'Installed'];

  function resetStates() {
    successDiv.classList.add('hidden');
    failDiv.classList.add('hidden');
  }

  checkBtn.addEventListener('click', () => {
    resetStates();
    const orderNum = input.value.trim();
    if (orderNum === '12345') {
      orderRef.textContent = orderNum;
      appStatus.textContent = statuses[2];
      successDiv.classList.remove('hidden');
    } else {
      failDiv.classList.remove('hidden');
    }
  });

  copyBtn.addEventListener('click', () => {
    if (!orderRef.textContent) return;
    navigator.clipboard.writeText(orderRef.textContent).then(() => {
      copyBtn.classList.add('text-green-600');
      setTimeout(() => copyBtn.classList.remove('text-green-600'), 1500);
    });
  });

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
      

<header className="w-full bg-[#0073B9] text-white">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

<div className="flex items-center gap-3">
<a className="focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded" href="#">
<img alt="Company logo" className="w-12 h-12 md:w-16 md:h-16 hover:brightness-110 transition duration-200 -translate-x-6 -translate-y-1 object-contain scale-150" src="https://i.imgur.com/KtEjXLR.png?w=1080&q=80" />
</a>
<h1 className="md:text-xl text-lg font-semibold tracking-tight font-poppins">
        Australia’s Cheapest Solar <span className="text-yellow-400">Battery Guaranteed.</span>
</h1>
</div>

<div className="hidden sm:flex items-center gap-4">

<a className="flex items-center gap-2 text-sm font-medium hover:text-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded transition" href="tel:+611300000000">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>Call us now 1300 000 000</span>
</a>

<button className="flex items-center gap-2 bg-white text-[#0073B9] font-medium px-5 py-2 rounded-full hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition">
<span>Request a Quote</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</header>

<main className="w-full flex flex-col pr-4 pl-4 items-center">
<section className="relative w-full max-w-3xl mt-20 bg-white rounded-xl shadow-lg overflow-hidden">

<div className="bg-[#0073B9] px-8 py-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Check Your Order Status</h2>
<p className="mt-1 text-base md:text-lg text-yellow-300">Enter your order details to track your solar battery installation</p>
</div>

<div className="px-8 py-8 space-y-6">
<label className="block">
<span className="text-sm">Order Number</span>
<input className="mt-2 w-full rounded-md border-2 border-gray-200 focus:border-[#0073B9] focus:ring-0 px-4 py-3 text-base outline-none transition" id="orderInput" placeholder="e.g. 12345" type="text" />
</label>
<button className="w-full flex items-center justify-center gap-2 text-[#004f7c] bg-yellow-400 rounded-md py-3 hover:ring-2 hover:ring-yellow-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400" id="checkBtn">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
        Check Order Status
      </button>

<div aria-live="polite" className="hidden" id="statusSuccess">
<h3 className="text-xl tracking-tight mb-4 flex items-center gap-2">
<svg className="lucide lucide-badge-check w-5 h-5 text-[#0073B9]" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
          Order Details
        </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="border border-gray-200 rounded-lg p-4">
<p className="text-sm text-gray-500">Order Reference</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-lg font-semibold tracking-tight" id="orderRefText"></span>
<button className="p-1 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0073B9]" id="copyBtn">
<svg className="lucide lucide-copy w-4 h-4 text-gray-600" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>
</div>

<div className="border border-gray-200 rounded-lg p-4">
<p className="text-sm text-gray-500">Application Status</p>
<span className="mt-2 text-lg font-semibold tracking-tight text-[#0073B9]" id="appStatus"></span>
</div>
</div>
</div>

<div aria-live="polite" className="hidden" id="statusFail">
<div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-md p-4">
<svg className="lucide lucide-alert-circle w-6 h-6 text-red-500 shrink-0" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<div>
<h3 className="text-lg tracking-tight text-red-700">Order Not Found</h3>
<p className="text-sm text-red-600 mt-1">Please double-check the order number. (For demo purposes, the only valid number is 12345.)</p>
</div>
</div>
</div>
</div>
<div className="h-px bg-gray-200 mx-8"></div>

<div className="px-8 pb-8 pt-8 space-y-4">
<h4 className="text-2xl font-semibold tracking-tight text-[#0073B9]">Need Additional Help?</h4>
<p className="text-base">Our dedicated customer service team is here to assist you with any questions about your solar battery system order, installation, or ongoing support.</p>
<div className="space-y-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-phone w-5 h-5 text-[#0073B9]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-sm">Call us at 1300 223 224</span>
</div>
<div className="flex gap-2 items-center">
<svg className="lucide lucide-mail w-5 h-5 text-[#0073B9]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-sm">Email us at support@solarbatterygroup.com.au</span>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
