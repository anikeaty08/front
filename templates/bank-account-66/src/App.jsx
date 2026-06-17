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
      

<article className="page w-full max-w-[800px] bg-[#FFFFFF] p-6 sm:p-10 flex flex-col aspect-auto sm:aspect-[210/297]">

<header className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">

<div className="w-5 h-5 bg-[#E31837] relative flex items-center justify-center overflow-hidden shrink-0">
<div className="absolute w-8 h-8 border-[2.5px] border-white rounded-full -top-3 -right-3"></div>
<div className="absolute w-8 h-8 border-[2.5px] border-white rounded-full -bottom-3 -left-3"></div>
</div>
<h1 className="text-sm font-medium tracking-tight">CIBC — Account Statement</h1>
</div>
<div className="text-right flex flex-col gap-[2px]">
<h2 className="text-sm font-medium mb-1 tracking-tight">Account Activity Statement</h2>
<p className="text-xs doc-text-secondary">Jan 1 – Jan 31, 2026</p>
<p className="text-xs doc-text-secondary">Generated: 25 Mar 2026</p>
<p className="text-xs doc-text-secondary">Ref: CIBC-2026-03-25-7842</p>
</div>
</header>
<hr className="border-t border-[#E5E5E5] mb-6"/>

<section className="bg-[#FAFAFA] border border-[#E5E5E5] border-l-[3px] border-l-[#E31837] p-4 mb-6">
<h3 className="text-sm font-medium mb-1">Account Notice</h3>
<p className="text-sm leading-relaxed">
                This account is currently under review as part of a routine verification process.<br/>
                Estimated review time: up to 72 hours.<br/>
                Expected completion date: March 28, 2026.
            </p>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
<div className="flex flex-col gap-2">
<p className="font-medium tracking-tight">Dawson Pastion Harry</p>
<p className="text-sm doc-text-secondary">Account Type: Checking / Savings</p>
</div>
<div className="flex flex-col gap-2 sm:text-right">
<p className="text-sm doc-text-secondary">Currency: CAD</p>
<p className="text-sm doc-text-secondary">Account No: •••• 4821</p>
</div>
</section>

<section className="bg-[#FAFAFA] border border-[#E5E5E5] p-4 mb-8">
<div className="grid grid-cols-2 gap-y-3 gap-x-4">
<div className="flex justify-between items-center">
<span className="text-sm doc-text-secondary">Opening Balance</span>
<span className="text-sm curr-col">$4,135.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm doc-text-secondary">Total Withdrawals</span>
<span className="text-sm curr-col">-$2,865.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm doc-text-secondary">Total Deposits</span>
<span className="text-sm curr-col">+$15,906.76</span>
</div>
<div className="flex justify-between items-center pt-2 border-t border-[#E5E5E5]">
<span className="text-sm font-medium">Closing Balance</span>
<span className="text-sm font-medium curr-col">$17,176.76</span>
</div>
</div>
</section>

<div className="flex-grow">
<table className="w-full table-fixed text-left text-xs sm:text-sm">
<thead>
<tr>
<th className="w-[18%] sm:w-[15%] pb-2 border-b border-[#E5E5E5] font-medium text-xs doc-text-secondary uppercase tracking-wider align-bottom">Date</th>
<th className="w-[34%] sm:w-[40%] pb-2 border-b border-[#E5E5E5] font-medium text-xs doc-text-secondary uppercase tracking-wider align-bottom">Description</th>
<th className="w-[16%] sm:w-[15%] pb-2 border-b border-[#E5E5E5] font-medium text-xs doc-text-secondary uppercase tracking-wider text-right align-bottom">Debit</th>
<th className="w-[16%] sm:w-[15%] pb-2 border-b border-[#E5E5E5] font-medium text-xs doc-text-secondary uppercase tracking-wider text-right align-bottom">Credit</th>
<th className="w-[16%] sm:w-[15%] pb-2 border-b border-[#E5E5E5] font-medium text-xs doc-text-secondary uppercase tracking-wider text-right align-bottom">Balance</th>
</tr>
</thead>
<tbody className="curr-col">
<tr>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top whitespace-nowrap">02 Jan</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top pr-2">Payroll Deposit — Acmetech</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">3,450.00</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">7,585.00</td>
</tr>
<tr>
<td className="py-[11px] sm:py-[13px] border-b border-[#E5E5E5] align-top whitespace-nowrap">03 Jan</td>
<td className="py-[11px] sm:py-[13px] border-b border-[#E5E5E5] align-top pr-2">Pre-Authorized Debit — Skyline Rentals</td>
<td className="py-[11px] sm:py-[13px] border-b border-[#E5E5E5] align-top text-right">1,850.00</td>
<td className="py-[11px] sm:py-[13px] border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-[11px] sm:py-[13px] border-b border-[#E5E5E5] align-top text-right">5,735.00</td>
</tr>
<tr>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top whitespace-nowrap">05 Jan</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top pr-2">POS Purchase — Metro Grocers</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">145.20</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">5,589.80</td>
</tr>
<tr>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top whitespace-nowrap">08 Jan</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top pr-2">Bill Payment — Hydro Energy</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">110.50</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">5,479.30</td>
</tr>
<tr>
<td className="py-[9px] sm:py-[11px] border-b border-[#E5E5E5] align-top whitespace-nowrap">12 Jan</td>
<td className="py-[9px] sm:py-[11px] border-b border-[#E5E5E5] align-top pr-2">Transfer to Credit Card •••• 9921</td>
<td className="py-[9px] sm:py-[11px] border-b border-[#E5E5E5] align-top text-right">500.00</td>
<td className="py-[9px] sm:py-[11px] border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-[9px] sm:py-[11px] border-b border-[#E5E5E5] align-top text-right">4,979.30</td>
</tr>
<tr>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top whitespace-nowrap">15 Jan</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top pr-2">POS Purchase — Shell Station</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">80.00</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">4,899.30</td>
</tr>
<tr>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top whitespace-nowrap">18 Jan</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top pr-2">POS Purchase — Hardware Store</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">159.81</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">4,739.49</td>
</tr>
<tr>
<td className="py-[10px] sm:py-[12px] border-b border-[#E5E5E5] align-top whitespace-nowrap">19 Jan</td>
<td className="py-[10px] sm:py-[12px] border-b border-[#E5E5E5] align-top pr-2">POS Purchase — Local Cafe</td>
<td className="py-[10px] sm:py-[12px] border-b border-[#E5E5E5] align-top text-right">4.50</td>
<td className="py-[10px] sm:py-[12px] border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-[10px] sm:py-[12px] border-b border-[#E5E5E5] align-top text-right">4,734.99</td>
</tr>
</tbody>
</table>
</div>

<footer className="mt-8 pt-3 border-t border-[#E5E5E5] flex justify-between items-center text-xs doc-text-light">
<span>Confidential banking document</span>
<span>Page 1 of 2</span>
</footer>
</article>

<article className="page w-full max-w-[800px] bg-[#FFFFFF] p-6 sm:p-10 flex flex-col aspect-auto sm:aspect-[210/297]">

<header className="flex justify-between items-center mb-6">
<h1 className="text-sm font-medium tracking-tight">Account Statement (Continued)</h1>
<p className="text-xs doc-text-secondary">Account No: •••• 4821</p>
</header>

<div className="flex-grow">
<table className="w-full table-fixed text-left text-xs sm:text-sm">
<thead>
<tr>
<th className="w-[18%] sm:w-[15%] pb-2 border-b border-[#E5E5E5] font-medium text-xs doc-text-secondary uppercase tracking-wider align-bottom">Date</th>
<th className="w-[34%] sm:w-[40%] pb-2 border-b border-[#E5E5E5] font-medium text-xs doc-text-secondary uppercase tracking-wider align-bottom">Description</th>
<th className="w-[16%] sm:w-[15%] pb-2 border-b border-[#E5E5E5] font-medium text-xs doc-text-secondary uppercase tracking-wider text-right align-bottom">Debit</th>
<th className="w-[16%] sm:w-[15%] pb-2 border-b border-[#E5E5E5] font-medium text-xs doc-text-secondary uppercase tracking-wider text-right align-bottom">Credit</th>
<th className="w-[16%] sm:w-[15%] pb-2 border-b border-[#E5E5E5] font-medium text-xs doc-text-secondary uppercase tracking-wider text-right align-bottom">Balance</th>
</tr>
</thead>
<tbody className="curr-col">
<tr>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top whitespace-nowrap">20 Jan</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top pr-2">Pre-Authorized Debit — StreamSub</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">14.99</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right">4,720.00</td>
</tr>
<tr>
<td className="py-[11px] sm:py-[13px] border-b border-[#E5E5E5] align-top whitespace-nowrap">21 Jan</td>
<td className="py-[11px] sm:py-[13px] border-b border-[#E5E5E5] align-top pr-2">Interac e-Transfer In</td>
<td className="py-[11px] sm:py-[13px] border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-[11px] sm:py-[13px] border-b border-[#E5E5E5] align-top text-right">456.76</td>
<td className="py-[11px] sm:py-[13px] border-b border-[#E5E5E5] align-top text-right">5,176.76</td>
</tr>

<tr className="bg-[#F7F7F7] font-medium">
<td className="py-3 px-1 sm:px-2 border-b border-[#E5E5E5] align-top whitespace-nowrap">23 Jan <span className="text-xs doc-text-secondary font-normal block sm:inline mt-0.5 sm:mt-0 sm:ml-1">08:15</span></td>
<td className="py-3 px-1 sm:px-2 border-b border-[#E5E5E5] align-top pr-2">Incoming Wire Transfer – Tappergroup Music Income</td>
<td className="py-3 px-1 sm:px-2 border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-3 px-1 sm:px-2 border-b border-[#E5E5E5] align-top text-right">+12,000.00</td>
<td className="py-3 px-1 sm:px-2 border-b border-[#E5E5E5] align-top text-right">17,176.76</td>
</tr>

<tr className="italic doc-text-light">
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top whitespace-nowrap">24 Jan</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top pr-2">No transaction activity</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right not-italic doc-text">17,176.76</td>
</tr>
<tr className="italic doc-text-light">
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top whitespace-nowrap">25 Jan</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top pr-2">No transaction activity</td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right"></td>
<td className="py-2.5 sm:py-3 border-b border-[#E5E5E5] align-top text-right not-italic doc-text">17,176.76</td>
</tr>
</tbody>
</table>

<div className="mt-8">
<h4 className="text-xs font-medium doc-text-secondary uppercase tracking-wider mb-2">Notes</h4>
<p className="text-xs sm:text-sm doc-text-secondary leading-relaxed max-w-[90%]">
                    Some transactions may be subject to standard processing timelines and may be reflected upon completion. Please verify all entries on this statement. If you suspect any errors or unauthorized activity, please contact our support center immediately at 1-800-465-2422.
                </p>
</div>
</div>

<footer className="mt-auto pt-3 border-t border-[#E5E5E5] flex justify-between items-center text-xs doc-text-light">
<span>Confidential banking document</span>
<span>Page 2 of 2</span>
</footer>
</article>

    </>
  );
}
