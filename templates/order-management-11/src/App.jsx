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
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-10">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">

<nav className="mb-4">
<a className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Back to Orders
                </a>
</nav>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">

<div className="flex items-center gap-3">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Order Details: #KOLI-8942</h1>
<span className="inline-flex items-center px-2 py-1 rounded-md bg-red-50 text-red-600 border border-red-100 text-xs font-medium">
                        Urgent - To Buy
                    </span>
</div>

<div className="flex items-center gap-5 md:pl-5 md:border-l border-gray-200">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 border border-gray-200">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900 leading-none">Amina Ndiaye</span>
<span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:phone-linear" width="12"></iconify-icon>
                                +221 77 123 45 67
                            </span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-gray-500 mb-1">Wallet Balance</span>
<span className="text-sm font-medium text-gray-900 flex items-center gap-1">
<iconify-icon className="text-green-500" icon="solar:wallet-linear" width="14"></iconify-icon>
                            145,000 FCFA
                        </span>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 items-start">

<div className="flex-1 flex flex-col gap-8 w-full min-w-0">

<section className="flex flex-col gap-4">
<div className="flex items-center justify-between border-b border-gray-200 pb-2">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Products (2)</h2>
<button className="text-xs text-purple-600 hover:text-purple-700 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:refresh-linear" width="14"></iconify-icon>
                        Sync All Prices
                    </button>
</div>

<article className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row gap-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
<div className="shrink-0">
<img alt="Product Image" className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover border border-gray-100 bg-gray-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1 flex flex-col justify-between min-w-0 gap-4">

<div>
<div className="flex justify-between items-start gap-2">
<h3 className="text-sm font-medium text-gray-900 truncate">Women's Summer Floral Print Midi Dress</h3>
<span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 shrink-0">Qty: 1</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-gray-500">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> Size: M</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Color: Navy Blue</span>
<div className="w-px h-3 bg-gray-200 hidden sm:block"></div>
<a className="flex items-center gap-1 text-purple-600 hover:text-purple-700 transition-colors" href="#" target="_blank">
<iconify-icon icon="solar:link-minimalistic-linear" width="14"></iconify-icon>
                                    Shein Link
                                </a>
<button className="flex items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors ml-auto sm:ml-0">
<iconify-icon icon="solar:refresh-linear" width="14"></iconify-icon>
                                    Auto-Fetch
                                </button>
</div>
</div>

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-3 border-t border-gray-50">

<div className="flex p-0.5 bg-gray-100 rounded-lg inline-flex text-xs w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-3 py-1.5 rounded-md bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-gray-900 font-medium transition-all">
                                    Not Started
                                </button>
<button className="flex-1 sm:flex-none px-3 py-1.5 rounded-md text-gray-500 hover:text-gray-900 transition-all">
                                    Purchased
                                </button>
<button className="flex-1 sm:flex-none px-3 py-1.5 rounded-md text-gray-500 hover:text-gray-900 transition-all">
                                    At Forwarder
                                </button>
</div>

<div className="flex flex-col items-end gap-1 w-full sm:w-auto text-right">
<span className="text-xs text-gray-500 flex items-center gap-1.5">
                                    Original: <span className="line-through text-gray-400">$18.50</span> <span className="text-gray-700">$15.00</span>
</span>
<span className="text-sm font-medium text-gray-900 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                                    9,150 FCFA
                                </span>
</div>
</div>
</div>
</article>

<article className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row gap-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
<div className="shrink-0 relative">
<img alt="Product Image" className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover border border-gray-100 bg-gray-50 opacity-70" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&amp;fit=crop&amp;q=80&amp;w=160&amp;h=160"/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="bg-green-100 text-green-700 text-[10px] font-medium px-2 py-0.5 rounded-full border border-green-200 shadow-sm backdrop-blur-sm">Purchased</span>
</div>
</div>
<div className="flex-1 flex flex-col justify-between min-w-0 gap-4">
<div>
<div className="flex justify-between items-start gap-2">
<h3 className="text-sm font-medium text-gray-900 truncate">Smart Watch Series 8 Alternative</h3>
<span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 shrink-0">Qty: 2</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-gray-500">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span> Size: 44mm</span>
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span> Color: Black</span>
<div className="w-px h-3 bg-gray-200 hidden sm:block"></div>
<a className="flex items-center gap-1 text-purple-600 hover:text-purple-700 transition-colors" href="#" target="_blank">
<iconify-icon icon="solar:link-minimalistic-linear" width="14"></iconify-icon>
                                    Alibaba Link
                                </a>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-3 border-t border-gray-50">
<div className="flex p-0.5 bg-gray-100 rounded-lg inline-flex text-xs w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-3 py-1.5 rounded-md text-gray-500 hover:text-gray-900 transition-all">
                                    Not Started
                                </button>
<button className="flex-1 sm:flex-none px-3 py-1.5 rounded-md bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-gray-900 font-medium transition-all">
                                    Purchased
                                </button>
<button className="flex-1 sm:flex-none px-3 py-1.5 rounded-md text-gray-500 hover:text-gray-900 transition-all">
                                    At Forwarder
                                </button>
</div>
<div className="flex flex-col items-end gap-1 w-full sm:w-auto text-right">
<span className="text-xs text-gray-500 flex items-center gap-1.5">
                                    Original: <span className="text-gray-700">$22.00</span> <span className="text-gray-400 px-1">× 2</span>
</span>
<span className="text-sm font-medium text-gray-900 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                                    26,840 FCFA
                                </span>
</div>
</div>
</div>
</article>
</section>

<section className="flex flex-col gap-4 mt-4">
<div className="flex items-center gap-2 border-b border-gray-200 pb-2">
<iconify-icon className="text-gray-400" icon="solar:box-minimalistic-linear" width="18"></iconify-icon>
<h2 className="text-lg font-medium tracking-tight text-gray-900">Logistics Assignment</h2>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<label className="block text-xs font-medium text-gray-700 mb-2">Assign to Cargo Flight / Shipment Lot</label>
<div className="relative">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 block p-2.5 pr-10 outline-none transition-shadow cursor-pointer">
<option disabled="" value="">Select an active lot...</option>
<option value="koli-05">Lot KOLI-05 (Departed, Arriving 12 Oct)</option>
<option selected="" value="koli-06">Lot KOLI-06 (Loading, Departs 15 Oct)</option>
<option value="koli-07">Lot KOLI-07 (Planning)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<p className="mt-2 text-[11px] text-gray-500 flex items-center gap-1">
<iconify-icon icon="solar:info-circle-linear" width="12"></iconify-icon>
                        Items will be expected at the forwarder's warehouse before lot departure.
                    </p>
</div>
</section>

<section className="flex flex-col gap-4 mt-4 mb-8 lg:mb-0">
<div className="flex items-center justify-between border-b border-gray-200 pb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:chat-line-linear" width="18"></iconify-icon>
<h2 className="text-lg font-medium tracking-tight text-gray-900">Message Customer</h2>
</div>
<span className="text-[10px] uppercase tracking-wider font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100 flex items-center gap-1">
<iconify-icon icon="solar:whatsapp-linear" width="12"></iconify-icon> WhatsApp
                    </span>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col gap-3">
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-900 placeholder-gray-400 resize-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none transition-shadow" placeholder="Type your message here..." rows="3"></textarea>
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex flex-wrap gap-2">
<span className="text-[11px] text-gray-400 self-center mr-1">Templates:</span>
<button className="text-[11px] px-2 py-1 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Purchase Confirmed
                            </button>
<button className="text-[11px] px-2 py-1 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Item Out of Stock
                            </button>
<button className="text-[11px] px-2 py-1 rounded border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Shipping Update
                            </button>
</div>
<button className="shrink-0 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm">
<iconify-icon icon="solar:plain-2-linear" width="16"></iconify-icon>
                            Send Message
                        </button>
</div>
</div>
</section>
</div>

<aside className="w-full lg:w-[340px] xl:w-[380px] shrink-0 lg:sticky lg:top-28">
<div className="bg-white border border-gray-200 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
<div className="p-5 border-b border-gray-100 bg-gray-50/50">
<h2 className="text-base font-medium tracking-tight text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:calculator-linear" width="18"></iconify-icon>
                        Billing Summary
                    </h2>
</div>
<div className="p-5 flex flex-col gap-4">

<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Items Subtotal</span>
<span className="font-medium text-gray-900">$59.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500 flex items-center gap-1 border-b border-dashed border-gray-300 cursor-help" title="1 USD = 610 FCFA">
                            Exchange Rate
                        </span>
<span className="text-gray-900">× 610</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Base FCFA</span>
<span className="text-gray-900">35,990 FCFA</span>
</div>
<div className="w-full h-px bg-gray-100 my-1"></div>

<div className="flex justify-between items-center text-sm group">
<span className="text-gray-500">Service Fee</span>
<div className="flex items-center gap-2">
<div className="relative flex items-center">
<input className="w-12 h-7 bg-white text-right border border-gray-200 rounded px-1.5 text-xs text-gray-900 font-medium focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none transition-shadow hover:border-gray-300" type="number" value="10"/>
<span className="absolute right-1.5 text-xs text-gray-400 pointer-events-none">%</span>
</div>
<span className="text-gray-900 w-16 text-right">3,599 FCFA</span>
</div>
</div>

<div className="flex justify-between items-center text-sm">
<div className="flex flex-col">
<span className="text-gray-500">Est. Int. Shipping</span>
<span className="text-[10px] text-gray-400">~1.2kg via KOLI-06</span>
</div>
<span className="text-gray-900">9,500 FCFA</span>
</div>
</div>

<div className="p-5 bg-gray-50 border-t border-gray-100">
<div className="flex justify-between items-end mb-4">
<span className="text-sm font-medium text-gray-500">Grand Total</span>
<span className="text-2xl font-medium tracking-tight text-gray-900">49,089 FCFA</span>
</div>
<button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 text-sm font-medium transition-colors shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:diskette-linear" width="18"></iconify-icon>
                        Save Order Updates
                    </button>
<p className="text-center text-[11px] text-gray-400 mt-3">
                        Last updated 2 mins ago by Admin
                    </p>
</div>
</div>

<div className="mt-4 p-4 rounded-xl border border-blue-100 bg-blue-50/50 flex gap-3 text-sm text-blue-800">
<iconify-icon className="shrink-0 mt-0.5 text-blue-500" icon="solar:info-circle-linear" width="18"></iconify-icon>
<p className="leading-relaxed text-xs">
                    Customer wallet has sufficient funds <span className="font-medium">(145,000 FCFA)</span> to cover this order. Automatic deduction will occur upon marking all items as 'Purchased'.
                </p>
</div>
</aside>
</main>

    </>
  );
}
