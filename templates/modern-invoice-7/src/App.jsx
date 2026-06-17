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
      

<main className="w-full max-w-5xl bg-[#faf9f6] shadow-sm border border-[#dcd8cc] overflow-hidden relative">

<div className="bg-[#faf9f6] border-b border-[#dcd8cc] px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">

<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-black text-white flex items-center justify-center rounded-lg font-heading font-semibold text-lg tracking-tighter">
                    A
                </div>
<span className="font-heading font-medium text-lg tracking-tight text-stone-900">Fisco</span>
</div>

</div>
<div className="md:p-12 pt-8 pr-8 pb-8 pl-8">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
<div className="">
<div className="flex items-center gap-3 mb-2">
<h1 className="font-heading text-3xl font-medium tracking-tight text-stone-900">Invoice #1024</h1>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#51C17E] text-white border border-[#51C17E]">
                            Paid
                        </span>
</div>
<p className="text-[#8C8174] text-sm">Issued on Jan 24, 2024</p>
</div>
<div className="text-left md:text-right">
<p className="text-sm text-[#8C8174] mb-1">Amount Due</p>
<p className="font-heading text-2xl font-medium text-stone-900">$4,250.00</p>
<p className="text-xs text-stone-400 mt-1">Due by Feb 07, 2024</p>
</div>
</div>

<div "="" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-stone-100 pb-8">

<div className="space-y-1">
<h3 className="font-heading text-sm font-medium text-[#8C8174] uppercase tracking-wide">From</h3>
<div className="flex items-start gap-3">
<div className="text-sm text-[#0E0E0E] font-medium leading-relaxed">
                        Acme Incorporated
                        <br/>
                            123 Design District, Suite 404<br/>
                            San Francisco, CA 94103<br/>
                            United States
                    </div>
</div>
<div className="flex items-center gap-3">
<a className="text-sm font-medium text-[#0E0E0E] hover:text-stone-900 transition-colors" href="#">billing@acme.inc</a>
</div>
</div>

<div className="space-y-1">
<h3 className="font-heading text-sm font-medium text-[#8C8174] uppercase tracking-wide">Billed To</h3>
<div className="flex items-start gap-3">
<div className="text-sm text-[#0E0E0E] font-medium leading-relaxed">
                        Linear Orbit, LLC
                        <br/>
                            88 Colin P Kelly Jr St<br/>
                            San Francisco, CA 94107<br/>
                            United States
                    </div>
</div>
<div className="flex items-center gap-3">
<a className="text-sm font-medium text-[#0E0E0E] hover:text-stone-900 transition-colors" href="#">finance@linearorbit.com</a>
</div>
</div>
</div>

<div className="mb-12 overflow-x-auto scrollbar-hide">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead className="">
<tr className="border-b border-[#dcd8cc]">
<th className="py-4 pl-2 pr-4 font-heading font-semibold text-sm text-[#111111] uppercase tracking-wider w-1/2">
                            ITEM</th>
<th className="py-4 px-4 font-heading font-medium text-sm text-[#111111] uppercase tracking-wider text-right">
                            Qty</th>
<th className="py-4 px-4 font-heading font-medium text-sm text-[#111111] uppercase tracking-wider text-right">
                            Unit Price</th>
<th className="py-4 pl-4 pr-2 font-heading font-medium text-sm text-[#111111] uppercase tracking-wider text-right">
                            Total</th>
</tr>
</thead>
<tbody className="text-sm text-stone-600">
<tr className="border-b border-stone-100 group hover:bg-gray-50/50 transition-colors">
<td className="py-5 pl-2 pr-4">
<span className="text-sm block text-stone-900 mb-0.5">Design System Audit</span>
</td>
<td className="py-5 px-4 text-right tabular-nums">1</td>
<td className="py-5 px-4 text-right tabular-nums">$1,200.00</td>
<td className="py-5 pl-4 pr-2 text-right text-stone-900 tabular-nums">$1,200.00</td>
</tr>
<tr className="border-b border-stone-100 group hover:bg-gray-50/50 transition-colors">
<td className="py-5 pl-2 pr-4">
<span className="text-sm block text-[#0E0E0E] mb-0.5">Frontend Implementation</span>
</td>
<td className="py-5 px-4 text-right tabular-nums">40</td>
<td className="py-5 px-4 text-right tabular-nums">$150.00</td>
<td className="py-5 pl-4 pr-2 text-right font-medium text-stone-900 tabular-nums">$6,000.00</td>
</tr>
<tr className="border-b border-stone-100 group hover:bg-gray-50/50 transition-colors">
<td className="pt-5 pr-4 pb-5 pl-2">
<span className="block text-sm text-stone-900 mb-0.5">Quarterly Maintenance</span>
</td>
<td className="py-5 px-4 text-right tabular-nums">1</td>
<td className="py-5 px-4 text-right tabular-nums">$800.00</td>
<td className="py-5 pl-4 pr-2 text-right font-medium text-stone-900 tabular-nums">$800.00</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col-reverse md:flex-row gap-12 gap-x-12 gap-y-12 justify-between">

<div className="md:w-5/12 w-full space-y-6">
<div className="">
<h4 className="uppercase text-sm font-medium text-[#8C8174] font-heading mb-3">Payment Link</h4>
<div className="bg-white border-transparent border rounded-sm pt-4 pr-4 pb-4 pl-4">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="relative flex items-center flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-globe text-[#8C8174] opacity-70" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<input className="block focus:outline-none focus:border-[#8C8174] focus:ring-0 transition-colors text-sm font-medium text-[#0E0E0E] bg-[#faf9f6] w-full border-[#dcd8cc] border rounded pt-2.5 pb-2.5 pl-9 pr-3" readonly="" type="text" value="acme.inc/pay/inv_1024"/>
</div>
<button className="flex hover:bg-stone-800 transition-colors cursor-pointer whitespace-nowrap text-sm font-medium text-white bg-[#0E0E0E] rounded pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center justify-center" title="Copy Link">
<svg className="lucide lucide-copy" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</svg>
                Copy
            </button>
</div>
<button className="flex w-full hover:bg-[#45a66b] transition-colors cursor-pointer whitespace-nowrap text-sm font-medium text-white bg-[#51C17E] rounded pt-2.5 pb-2.5 px-4 shadow-sm gap-2 items-center justify-center">
<svg className="lucide lucide-credit-card" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
            Pay Invoice
        </button>
</div>
</div>
</div>
<div className="">
<h4 className="uppercase text-sm font-medium text-[#8C8174] font-heading mb-2">Notes</h4>
<p className="leading-relaxed text-sm text-[#0E0E0E]">
                        Thank you for your business. Please process payment within 14 days of invoice receipt. For any
                        questions regarding this invoice, please contact our billing department.
                    </p>
</div>
</div>

<div className="w-full md:w-5/12">
<div className="bg-white p-6 md:p-8 space-y-3">
<div className="flex justify-between text-sm">
<span className="text-[#8C8174]">Subtotal</span>
<span className="font-medium text-[#0E0E0E] tabular-nums">$8,000.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-[#8C8174]">Discount <span className="text-xs text-stone-400">(10%)</span></span>
<span className="font-medium text-[#0E0E0E] tabular-nums">-$800.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-[#8C8174]">Tax <span className="text-xs text-stone-400">(VAT 20%)</span></span>
<span className="font-medium text-[#0E0E0E] tabular-nums">$1,440.00</span>
</div>
<div className="h-px bg-[#dcd8cc] my-2"></div>
<div className="flex justify-between items-center">
<span className="font-heading font-medium text-stone-900 text-lg">Total Due</span>
<span className="font-heading font-semibold text-[#0E0E0E] text-2xl tracking-tight tabular-nums">$8,640.00</span>
</div>
<div className="flex justify-end mt-1">
<span className="text-xs text-[#8c8174]">NGN</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#faf9f6] border-t border-[#dcd8cc] px-8 py-4 flex justify-between items-center">
<span className="text-xs text-[#0E0E0E] font-medium">Powered by Fisco</span>
<div className="flex gap-4">
<a className="text-xs text-[#0E0E0E] hover:text-stone-600 transition-colors" href="#">Terms</a>
<a className="text-xs text-[#0E0E0E] hover:text-stone-600 transition-colors" href="#">Privacy</a>
</div>
</div>
</main>

    </>
  );
}
