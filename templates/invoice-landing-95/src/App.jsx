import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
      });

      // Print / Save PDF
      const printBtn = document.getElementById('printBtn');
      const downloadBtn = document.getElementById('downloadBtn');

      const handlePrint = () => window.print();
      printBtn?.addEventListener('click', handlePrint);
      downloadBtn?.addEventListener('click', handlePrint);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-10">

<div className="mb-4 flex items-center justify-end gap-2 print:hidden">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 active:translate-y-px" id="printBtn">
<svg className="lucide lucide-printer h-4 w-4" data-lucide="printer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></svg>
          Print
        </button>
<button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 active:translate-y-px" id="downloadBtn">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
          Save PDF
        </button>
</div>

<section className="relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-200 print:shadow-none" id="invoice">

<div className="relative grid place-items-center px-6 pt-10">

<svg className="pointer-events-none absolute right-[-30px] top-[-20px] h-40 w-40 opacity-10 text-sky-600" viewbox="0 0 300 180">
<path d="M146 18c11 8 31 24 41 50s7 44 4 58l-13-2c4-14 5-29 0-47-6-23-20-40-31-50zM175 26c11 6 30 18 43 41 8 14 12 30 13 44l-13 1c0-12-3-25-10-37-10-18-24-29-34-36zM200 30c11 3 30 9 46 24 12 11 20 24 25 37l-12 5c-4-11-11-22-21-31-14-13-30-18-40-21zM222 34c9 0 28 1 46 9 14 6 25 14 34 23l-9 9c-8-7-17-14-29-19-15-7-32-8-42-8z" fill="currentColor"></path>
</svg>

<div className="relative w-full max-w-xs">
<div className="mx-auto w-full rounded-md bg-sky-600 py-3 text-center text-white shadow-sm">
<div className="text-xs font-semibold uppercase tracking-wider">Invoice</div>
<div className="mt-0.5 text-[11px] font-medium tracking-wider opacity-90">Number DP-124-5892</div>
</div>

<svg className="absolute right-[-22px] top-0 h-[44px] w-[22px] text-sky-600" fill="none" viewbox="0 0 22 44" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0 L22 22 L0 44 Z" fill="currentColor"></path>
</svg>
</div>

<div className="mt-6 mb-2 text-center">
<div className="select-none text-sky-600 tracking-tight" style={{fontWeight: '700', fontSize: 'clamp(44px,9vw,82px)', lineHeight: '0.95'}}>
              Coventry
            </div>
<div className="select-none -mt-1 text-sky-600 tracking-tight" style={{fontWeight: '600', fontSize: 'clamp(40px,8vw,74px)', lineHeight: '0.95'}}>
              University
            </div>
</div>
</div>

<div className="px-6 pt-6">
<div className="text-[13px] uppercase font-semibold text-sky-700 tracking-wider" data-element-id="aura-emg4hpgvh">Alim Bidmus</div>
<div className="mt-1 text-[12px] leading-5 text-neutral-600">
            Softwarica College of IT and e‑commerce
            Student ID: 180009
          </div>
</div>

<div className="mx-6 my-6 h-px bg-neutral-200"></div>

<div className="px-6">
<div className="grid grid-cols-12 items-end text-[12px] font-semibold uppercase tracking-wider text-sky-700">
<div className="col-span-6 sm:col-span-6">Description</div>
<div className="col-span-2 hidden text-center sm:block">Qty</div>
<div className="col-span-3 text-right sm:col-span-3">Price</div>
<div className="col-span-3 text-right sm:col-span-3">Total</div>
</div>
<div className="mt-2 h-0.5 bg-neutral-200"></div>
</div>

<div className="px-6">
<div className="grid grid-cols-12 items-center py-6 text-[15px] tracking-tight text-neutral-800">
<div className="col-span-12 sm:col-span-6">
<span className="font-medium">Gets examination</span>
</div>
<div className="col-span-4 mt-2 text-neutral-700 sm:col-span-2 sm:mt-0 sm:text-center">4</div>
<div className="col-span-4 text-right text-neutral-700 sm:col-span-2">£130</div>
<div className="col-span-4 text-right font-medium sm:col-span-2">£130</div>
</div>
<div className="h-px bg-neutral-200"></div>
</div>

<div className="px-6">
<div className="mt-6 flex items-center justify-between text-[12px] font-semibold uppercase tracking-wider text-neutral-700">
<span>Total</span>
<span className="text-neutral-900">£130.00</span>
</div>
<div className="mt-2 flex items-center justify-between text-[12px] font-semibold uppercase tracking-wider text-sky-700">
<span>Amount</span>
<span className="text-neutral-900">£130.00</span>
</div>
</div>

<div className="mx-6 my-8 h-px bg-neutral-200"></div>
<div className="pr-6 pb-8 pl-6" data-element-id="aura-emg4hqf03">
<div className="text-[12px] uppercase font-semibold text-sky-700 tracking-wider" data-element-id="aura-emg4hqgdl" style={{}}>Payment date: 22 july 2025</div>
<div className="text-[12px] leading-6 text-neutral-700 mt-3" data-element-id="aura-emg4hrw8k" style={{}}>Name: Coventry University Account Number: 20786675 Bank Name: Barclays Bank. Bank Address: High Street, Coventry, CV1 1ZZ. Sort Code: 20-23-78. IBAN Number: GB56 BARC 202378 20786675. Swift Code: BARCGB22.</div>
</div>

<div className="grid grid-cols-1 items-center gap-3 border-t border-neutral-200 px-6 py-5 text-[11px] text-neutral-500 sm:grid-cols-2">
<div>Priory St, Coventry CV1</div>
<div className="sm:text-right">+44 24 76 888888</div>
</div>
</section>
</main>


    </>
  );
}
