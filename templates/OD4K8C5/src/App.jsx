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

const checkBtn   = document.getElementById('checkBtn');
const input      = document.getElementById('orderInput');
const successDiv = document.getElementById('statusSuccess');
const failDiv    = document.getElementById('statusFail');
const orderRef   = document.getElementById('orderRefText');
const appStatus  = document.getElementById('appStatus');
const copyBtn    = document.getElementById('copyBtn');
const statuses   = ['Order Received', 'Processing', 'Dispatched', 'Installed'];

function resetStates() {
  successDiv.classList.add('hidden');
  failDiv.classList.add('hidden');
}

checkBtn.addEventListener('click', () => {
  resetStates();
  const orderNum = input.value.trim();
  if (!orderNum) return;

  // loading micro-interaction
  const icon = checkBtn.querySelector('svg');
  const text = checkBtn.querySelector('span');
  icon.setAttribute('data-lucide', 'loader-2');
  icon.classList.add('animate-spin');
  lucide.createIcons();
  text.textContent = 'Checking...';
  checkBtn.disabled = true;

  setTimeout(() => {
    if (orderNum === '12345') {
      orderRef.textContent = orderNum;
      appStatus.textContent = statuses[2];
      successDiv.classList.remove('hidden');
    } else {
      failDiv.classList.remove('hidden');
    }

    // revert button
    icon.setAttribute('data-lucide', 'search');
    icon.classList.remove('animate-spin');
    lucide.createIcons();
    text.textContent = 'Check Order Status';
    checkBtn.disabled = false;
  }, 800);
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
<img alt="Company logo" className="w-12 h-12 md:w-16 md:h-16 hover:brightness-110 transition duration-200 object-contain -translate-x-6 -translate-y-1 scale-150" src="https://i.imgur.com/KtEjXLR.png"/>
</a>
<h1 className="md:text-xl text-lg font-semibold tracking-tight">Australia’s Cheapest Solar <span className="text-yellow-400">Battery Guaranteed.</span></h1>
</div>

<div className="hidden sm:flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-medium hover:text-yellow-300 focus-visible:ring-2 focus-visible:ring-white rounded transition" href="tel:+611300000000">
<i className="w-4 h-4" data-lucide="phone"></i>Call us now 1300 223 224
      </a>
<button className="flex items-center gap-2 bg-white text-[#0073B9] font-medium px-5 py-2 rounded-full hover:shadow focus-visible:ring-2 focus-visible:ring-white transition">
        Request a Quote <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</header>

<main className="w-full flex flex-col px-4 items-center">
<section className="relative w-full max-w-3xl mt-20 bg-white rounded-xl shadow-lg overflow-hidden">

<div className="bg-[#0073B9] px-8 py-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Check Your Order Status</h2>
<p className="mt-1 text-base md:text-lg text-yellow-300">Enter your order details to track your solar battery installation</p>
</div>

<div className="px-8 py-8 space-y-6">
<label className="block">
<span className="text-sm">Order Number</span>
<input className="w-full border-2 border-gray-200 rounded-md mt-2 py-3 px-4 text-base focus:border-[#0073B9] focus:ring-0 outline-none transition" id="orderInput" placeholder="e.g. 12345" type="text"/>
</label>
<button className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-[#004f7c] rounded-md py-3 transition hover:ring-2 hover:ring-yellow-300 focus-visible:ring-2 focus-visible:ring-yellow-400 disabled:opacity-60" id="checkBtn">
<i className="w-5 h-5" data-lucide="search"></i><span>Check Order Status</span>
</button>

<div aria-live="polite" className="hidden" id="statusSuccess">
<h3 className="text-xl tracking-tight mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-[#0073B9]" data-lucide="badge-check"></i>Order Details
        </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="border border-gray-200 rounded-lg p-4">
<p className="text-sm text-gray-500">Order Reference</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-lg font-semibold tracking-tight" id="orderRefText"></span>
<button className="p-1 rounded hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-[#0073B9]" id="copyBtn">
<i className="w-4 h-4 text-gray-600" data-lucide="copy"></i>
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
<i className="w-6 h-6 text-red-500 shrink-0" data-lucide="alert-circle"></i>
<div>
<h3 className="text-lg tracking-tight text-red-700">Order Not Found</h3>
<p className="text-sm text-red-600 mt-1">Please double-check the order number. (Demo: only 12345 is valid.)</p>
</div>
</div>
</div>
</div>
<div className="h-px bg-gray-200 mx-8"></div>

<div className="px-8 pb-8 pt-8 space-y-4">
<h4 className="text-2xl font-semibold tracking-tight text-[#0073B9]">Need Additional Help?</h4>
<p className="text-base">Our dedicated customer service team is here to assist you with any questions about your solar battery system order, installation, or ongoing support.</p>
<div className="space-y-3">
<div className="flex items-center gap-2"><i className="w-5 h-5 text-[#0073B9]" data-lucide="phone"></i><span className="text-sm">Call us at 1300 223 224</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5 text-[#0073B9]" data-lucide="mail"></i><span className="text-sm">support@cheapsolar.com.au</span></div>
</div>
</div>
</section>
</main>


    </>
  );
}
