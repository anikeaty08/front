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
      

<div className="page-container">
<div className="content-wrapper">

<div className="flex items-center">
<div className="w-5 h-5 bg-brand-red flex items-center justify-center shrink-0">
<svg className="w-2.5 h-2.5 fill-white" viewbox="0 0 10 10">
<path d="M10,0 C5,0 0,5 0,10 L10,10 Z"></path>
</svg>
</div>
<span className="text-sm font-medium tracking-tight ml-2.5 text-primary">CIBC — Account Statement</span>
</div>
<div className="border-t border-line mt-4"></div>

<div className="flex justify-end mt-4 mb-6">
<div className="text-xs text-right text-secondary flex flex-col gap-1.5 leading-tight">
<span className="text-primary font-medium tracking-tight uppercase">Account Activity Statement SAMPLE</span>
<span>Jan 1 – Jan 31, 2026</span>
<span>Generated: 25 Mar 2026</span>
<span>Ref: CIBC-2026-03-25-7842</span>
</div>
</div>

<div className="bg-section border border-line p-4 mb-6 border-l-4 border-brand-red">
<h3 className="font-semibold text-xs text-primary tracking-tight">Account Notice</h3>
<p className="text-xs text-primary mt-1.5 leading-relaxed">
                    This account is currently under review as part of a routine verification process.<br/>
                    Estimated review time: up to 72 hours.<br/>
                    Expected completion date: March 28, 2026.
                </p>
</div>

<div className="grid grid-cols-2 gap-4 text-xs">
<div className="flex flex-col gap-1.5">
<div className="text-primary font-medium">Dawson Pastion Harry</div>
<div><span className="text-secondary">Account Type:</span> <span className="text-primary">Checking / Savings</span></div>
</div>
<div className="flex flex-col gap-1.5 items-end">
<div><span className="text-secondary">Currency:</span> <span className="text-primary">CAD</span></div>
<div><span className="text-secondary">Account No:</span> <span className="text-primary">•••• 4821</span></div>
</div>
</div>

<div className="mt-6 bg-section border border-line p-3.5">
<div className="grid grid-cols-2 gap-y-2.5 gap-x-12 text-xs">
<div className="flex justify-between items-center"><span className="text-secondary">Opening Balance</span> <span className="text-primary">$4,135.00</span></div>
<div className="flex justify-between items-center"><span className="text-secondary">Total Deposits</span> <span className="text-primary">$15,906.75</span></div>
<div className="flex justify-between items-center"><span className="text-secondary">Total Withdrawals</span> <span className="text-primary">$2,865.00</span></div>
<div className="flex justify-between items-center"><span className="text-primary font-medium">Closing Balance</span> <span className="text-primary text-sm font-medium tracking-tight">$17,176.76</span></div>
</div>
</div>

<table className="w-full text-left mt-8 border-collapse table-fixed">
<thead>
<tr>
<th className="border-b border-line bg-section py-2 px-1 text-xs uppercase font-medium text-secondary w-[90px] tracking-wide">Date</th>
<th className="border-b border-line bg-section py-2 px-1 text-xs uppercase font-medium text-secondary w-[200px] tracking-wide">Description</th>
<th className="border-b border-line bg-section py-2 px-1 text-xs uppercase font-medium text-secondary text-right w-[75px] tracking-wide">Debit</th>
<th className="border-b border-line bg-section py-2 px-1 text-xs uppercase font-medium text-secondary text-right w-[75px] tracking-wide">Credit</th>
<th className="border-b border-line bg-section py-2 px-1 text-xs uppercase font-medium text-secondary text-right w-[80px] tracking-wide">Balance</th>
</tr>
</thead>
<tbody className="text-xs leading-relaxed text-primary">
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">01 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top text-secondary">Balance Forward</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">4,135.00</td>
</tr>
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">03 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top">Direct Deposit - Payroll</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">1,950.00</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">6,085.00</td>
</tr>
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">05 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top">Point of Sale - Grocery</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">145.50</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">5,939.50</td>
</tr>
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">08 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top">E-Transfer Sent - Rent</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">1,200.00</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">4,739.50</td>
</tr>
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">10 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top">Bill Payment - Hydro</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">95.00</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">4,644.50</td>
</tr>
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">12 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top">Direct Deposit - Tax Refund</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">456.75</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">5,101.25</td>
</tr>
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">14 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top">ATM Withdrawal</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">300.00</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">4,801.25</td>
</tr>
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">15 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top">Point of Sale - Pharmacy</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">54.50</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">4,746.75</td>
</tr>
</tbody>
</table>

<div className="mt-auto border-t border-line pt-3 flex justify-between text-xs text-light">
<span>Confidential banking document</span>
<span>Page 1 of 2</span>
</div>
</div>
</div>

<div className="page-container">
<div className="content-wrapper">

<div className="flex items-center justify-between pb-4 border-b border-line mb-6">
<div className="flex items-center">
<div className="w-4 h-4 bg-brand-red flex items-center justify-center shrink-0">
<svg className="w-2 h-2 fill-white" viewbox="0 0 10 10">
<path d="M10,0 C5,0 0,5 0,10 L10,10 Z"></path>
</svg>
</div>
<span className="text-xs font-medium tracking-tight ml-2 text-primary">CIBC Statement Continuation</span>
</div>
<div className="text-xs text-secondary">
                    Ref: CIBC-2026-03-25-7842
                </div>
</div>

<table className="w-full text-left border-collapse table-fixed">
<thead>
<tr>
<th className="border-b border-line bg-section py-2 px-1 text-xs uppercase font-medium text-secondary w-[90px] tracking-wide">Date</th>
<th className="border-b border-line bg-section py-2 px-1 text-xs uppercase font-medium text-secondary w-[200px] tracking-wide">Description</th>
<th className="border-b border-line bg-section py-2 px-1 text-xs uppercase font-medium text-secondary text-right w-[75px] tracking-wide">Debit</th>
<th className="border-b border-line bg-section py-2 px-1 text-xs uppercase font-medium text-secondary text-right w-[75px] tracking-wide">Credit</th>
<th className="border-b border-line bg-section py-2 px-1 text-xs uppercase font-medium text-secondary text-right w-[80px] tracking-wide">Balance</th>
</tr>
</thead>
<tbody className="text-xs leading-relaxed text-primary">
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">18 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top">Direct Deposit - Payroll</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">1,500.00</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">6,246.75</td>
</tr>
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">20 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top">Bill Payment - Credit Card</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">1,000.00</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">5,246.75</td>
</tr>
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">21 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top">Monthly Account Fee</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">14.95</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">5,231.80</td>
</tr>
<tr>
<td className="border-b border-line py-2.5 px-1 align-top">22 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top">Point of Sale - Coffee</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">55.05</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right">5,176.75</td>
</tr>

<tr className="bg-highlight font-medium">
<td className="border-b border-line py-3 px-1 align-top">
                            23 Jan<br/>
<span className="text-light font-normal flex mt-0.5">08:15</span>
</td>
<td className="border-b border-line py-3 px-1 align-top pr-4">Incoming Wire Transfer – Tappergroup Music Income</td>
<td className="border-b border-line py-3 px-1 align-top text-right"></td>
<td className="border-b border-line py-3 px-1 align-top text-right">+12,000.00</td>
<td className="border-b border-line py-3 px-1 align-top text-right">17,176.76</td>
</tr>

<tr>
<td className="border-b border-line py-2.5 px-1 align-top italic text-light">24 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top italic text-light">No Activity</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right text-light">17,176.76</td>
</tr>
<tr>
<td className="border-b border-line py-2.5 px-1 align-top italic text-light">25 Jan</td>
<td className="border-b border-line py-2.5 px-1 align-top italic text-light">No Activity</td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right"></td>
<td className="border-b border-line py-2.5 px-1 align-top text-right text-light">17,176.76</td>
</tr>
</tbody>
</table>

<div className="mt-8 pt-2">
<div className="text-xs uppercase font-medium text-secondary tracking-widest mb-1.5">Notes</div>
<div className="text-xs text-secondary leading-relaxed">
                    Some transactions may be subject to standard processing timelines and may be reflected upon completion.
                </div>
</div>

<div className="mt-auto border-t border-line pt-3 flex justify-between text-xs text-light">
<span>Confidential banking document</span>
<span>Page 2 of 2</span>
</div>
</div>
</div>

    </>
  );
}
