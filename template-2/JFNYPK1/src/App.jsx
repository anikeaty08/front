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
      
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide && window.lucide.createIcons) {
          window.lucide.createIcons();
        }
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
      

<header className="relative">
<div className="max-w-7xl flex mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg ring-1 flex items-center justify-center bg-black/5 ring-black/10">
<span className="text-sm font-semibold tracking-tight text-slate-900">GT</span>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
<span>Products</span>
<span className="text-slate-400">/</span>
<span className="text-slate-700">Overview</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="transition-colors text-slate-700 hover:text-black" href="#bonds">Oversea Bonds</a>
<a className="transition-colors text-slate-700 hover:text-black" href="#stocks">Global Stock</a>
<a className="transition-colors text-slate-700 hover:text-black" href="#etf">ETF</a>
</nav>
</div>
<div className="mx-auto max-w-7xl px-6 pb-4">
<div className="flex items-center justify-between">
<h1 className="sm:text-4xl md:text-5xl text-3xl font-semibold text-black tracking-tight" style={{animation: `fadeUp .7s ease-out .05s both`}}>
            Global Trading Products
          </h1>
<div className="hidden sm:flex items-center gap-3" style={{animation: `fadeUp .7s ease-out .15s both`}}>
<a className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium ring-1 transition-colors text-black bg-black/10 hover:bg-black/15 ring-black/15" href="#">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              What's new
            </a>
</div>
</div>
<p className="mt-3 max-w-2xl text-slate-600" style={{animation: `fadeUp .7s ease-out .1s both`}}>
          เลือกลงทุนได้ทั่วโลกตามสไตล์ของคุณ ตั้งแต่ตราสารหนี้ต่างประเทศ หุ้นข้ามตลาด ไปจนถึง ETF ธีมเฉพาะ พร้อมเครื่องมือวิเคราะห์และข้อมูลแบบเรียลไทม์
        </p>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent to-transparent via-black/10"></div>
</div>
</header>
<main className="relative">

<section className="relative" id="bonds">
<div className="max-w-7xl sm:py-16 md:py-20 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="relative overflow-hidden rounded-lg bg-gradient-to-b ring-1 from-slate-100/60 to-slate-100/20 ring-black/10">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-16 h-[380px] w-[380px] rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="absolute -bottom-32 -left-24 h-[320px] w-[320px] rounded-full blur-3xl bg-teal-600/10"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:p-10 pt-6 pr-6 pb-6 pl-6">

<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-lg ring-1 ring-black/10 bg-black/5">
<img alt="Oversea Bonds visual" className="h-64 sm:h-72 md:h-80 w-full object-cover" src="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1600&auto=format&fit=crop" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-slate-50/70 via-slate-50/0 to-transparent"></div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center">
<div className="inline-flex gap-2 ring-1 w-fit ring-emerald-600/20 text-xs text-[#0A6EE7] bg-[#0A6EE7]/10 rounded-full pt-1 pr-3 pb-1 pl-3 items-center">
<svg className="lucide lucide-earth lucide-scan-line h-3.5 w-3.5" data-icon-replaced="true" data-lucide="earth" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `14px`, height: `14px`, color: `rgb(4, 120, 87)`}} viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
      ตราสารหนี้ต่างประเทศ
    </div>
<h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-black">Oversea Bonds</h2>
<p className="text-slate-600 mt-3">
      ลงทุนในพันธบัตรรัฐบาลและเอกชนต่างประเทศ รับกระแสเงินสดจากคูปอง เสริมเสถียรภาพพอร์ต พร้อมกระจายความเสี่ยงด้านสกุลเงินและอันดับเครดิต
    </p>

<div className="flex flex-wrap gap-2 mt-4 items-center">
<span className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs ring-1 bg-black/5 ring-black/10 text-slate-700">
<svg className="lucide lucide-wallet h-4 w-4 text-slate-600" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
        คูปองรายงวด
      </span>
<span className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs ring-1 bg-black/5 ring-black/10 text-slate-700">
<svg className="lucide lucide-shield-check h-4 w-4 text-slate-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
        อันดับเครดิต BBB+ ถึง A
      </span>
<span className="inline-flex items-center gap-2 ring-1 ring-black/10 text-xs text-slate-700 bg-black/5 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3"><svg className="lucide lucide-coins w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(71, 85, 105)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg> สกุลเงิน USD</span>
</div>

<div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg ring-1 p-4 bg-white/60 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">YTM เฉลี่ย</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-black">4.2–6.8%</div>
</div>
<div className="rounded-lg ring-1 p-4 bg-white/60 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">Duration</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-black">3–7 ปี</div>
</div>
<div className="rounded-lg ring-1 p-4 bg-white/60 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">ความเสี่ยงเครดิต</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-black">ปานกลาง</div>
</div>
</div>
</div>

<div className="lg:col-span-12">
<div className="mt-2 text-sm text-slate-600">ตราสารหนี้แนะนำ</div>

<div className="mt-2 rounded-lg ring-1 ring-black/10 overflow-hidden bg-white/60">
<div className="hidden sm:grid grid-cols-12 gap-3 px-4 py-3 text-xs text-slate-600">
<div className="col-span-4">ผู้ออกตราสาร</div>
<div className="col-span-2">คูปอง</div>
<div className="col-span-2">วันครบกำหนด</div>
<div className="col-span-2">อันดับเครดิต</div>
<div className="col-span-2">YTM โดยประมาณ</div>
</div>
<div className="h-px w-full bg-black/10 hidden sm:block"></div>

<div className="sm:grid sm:grid-cols-12 flex flex-col gap-2 sm:gap-3 sm:items-center pt-3 pr-4 pb-3 pl-4 items-start">
<div className="sm:col-span-4 w-full">
<div className="flex items-center gap-3">
<span className="h-8 w-8 ring-1 ring-black/10 flex items-center justify-center bg-black/5 rounded-lg">
<svg className="lucide lucide-building-2 h-4 w-4 text-slate-600" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</span>
<div className="">
<div className="text-xs text-slate-600">ตราสารหนี้เอกชน</div>
<div className="text-sm font-medium tracking-tight text-slate-900">Apple Inc. (USD)</div>
</div>
</div>
</div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-badge-dollar-sign h-4 w-4 text-slate-600" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
          ~3.0–4.3%
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-calendar h-4 w-4 text-slate-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          2027–2032
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-shield h-4 w-4 text-slate-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
          AA+
        </div>
<div className="sm:col-span-2 w-full flex items-center justify-between">
<span className="text-sm text-slate-800">3.2–4.1%</span>
<a className="sm:inline-flex items-center gap-2 text-[12px] hover:bg-[#095EC4] font-medium text-white bg-[#0A6EE7] rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="#" role="button">ดูข้อมูล</a>
</div>
<a className="sm:hidden inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800" href="#">
          ดูซีรีส์นี้
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="h-px w-full bg-black/10"></div>

<div className="sm:grid sm:grid-cols-12 flex flex-col gap-2 sm:gap-3 sm:items-center pt-3 pr-4 pb-3 pl-4 items-start">
<div className="sm:col-span-4 w-full">
<div className="flex items-center gap-3">
<span className="h- w-8 ring-1 ring-black/10 flex items-center justify-center bg-black/5 rounded-lg">
<svg className="lucide lucide-badge-check h-4 w-4 text-slate-600" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div className="">
<div className="text-xs text-slate-600">ตราสารหนี้เอกชน</div>
<div className="text-sm font-medium text-slate-900 tracking-tight">NVIDIA Corp. (USD)</div>
</div>
</div>
</div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-badge-dollar-sign h-4 w-4 text-slate-600" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
          ~2.0–5.0%
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-calendar h-4 w-4 text-slate-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
 2026–2034
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-shield h-4 w-4 text-slate-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
          A
        </div>
<div className="sm:col-span-2 w-full flex items-center justify-between">
<span className="text-sm text-slate-800">3.8–5.2%</span>
<a className="sm:inline-flex items-center gap-2 text-[12px] hover:bg-[#095EC4] font-medium text-white bg-[#0A6EE7] rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="#" role="button">ดูข้อมูล</a>
</div>
<a className="sm:hidden inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800" href="#">
          ดูซีรีส์นี้
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="h-px w-full bg-black/10"></div>

<div className="sm:grid sm:grid-cols-12 flex flex-col gap-2 sm:gap-3 sm:items-center pt-3 pr-4 pb-3 pl-4 items-start">
<div className="sm:col-span-4 w-full">
<div className="flex items-center gap-3">
<span className="h-8 w-8 ring-1 ring-black/10 flex items-center justify-center bg-black/5 rounded-lg">
<svg className="lucide lucide-building-2 h-4 w-4 text-slate-600" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</span>
<div className="">
<div className="text-xs text-slate-600">ตราสารหนี้เอกชน</div>
<div className="text-sm font-medium tracking-tight text-slate-900">Microsoft Corp. (USD)</div>
</div>
</div>
</div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-badge-dollar-sign h-4 w-4 text-slate-600" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
          ~2.1–5.4%
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-calendar h-4 w-4 text-slate-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          2026–2035
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-shield h-4 w-4 text-slate-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
          AAA
        </div>
<div className="sm:col-span-2 w-full flex items-center justify-between">
<span className="text-sm text-slate-800">3.4–4.8%</span>
<a className="sm:inline-flex items-center gap-2 text-[12px] hover:bg-[#095EC4] font-medium text-white bg-[#0A6EE7] rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="#" role="button">ดูข้อมูล</a>
</div>
<a className="sm:hidden inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800" href="#">
          ดูซีรีส์นี้
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="h-px w-full bg-black/10"></div>

<div className="sm:grid sm:grid-cols-12 flex flex-col gap-2 sm:gap-3 sm:items-center pt-3 pr-4 pb-3 pl-4 items-start">
<div className="sm:col-span-4 w-full">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-lg ring-1 ring-black/10 bg-black/5 flex items-center justify-center">
<svg className="lucide lucide-building-2 h-4 w-4 text-slate-600" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</span>
<div className="">
<div className="text-xs text-slate-600">ตราสารหนี้เอกชน</div>
<div className="text-sm font-medium tracking-tight text-slate-900">Meta Platforms Inc. (USD)</div>
</div>
</div>
</div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-badge-dollar-sign h-4 w-4 text-slate-600" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
          ~3.0–5.8%
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap1">
<svg className="lucide lucide-calendar h-4 w-4 text-slate-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          2027–2034
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-shield h-4 w-4 text-slate-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
          AA-
        </div>
<div className="sm:col-span-2 w-full flex items-center justify-between">
<span className="text-sm text-slate-800">3.9–5.3%</span>
<a className="sm:inline-flex items-center gap-2 text-[12px] hover:bg-[#095EC4] font-medium text-white bg-[#0A6EE7] rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="#" role="button">ดูข้อมูล</a>
</div>
<a className="sm:hidden inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800" href="#">
          ดูซีรีส์นี้
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="px-6 sm:px-10 pb-6">
<div className="h-px w-full bg-black/10"></div>
</div>

</div>
</div>
</section>

<section className="relative" id="stocks">
<div className="mx-auto max-w-7xl px-6 py-6">
<div className="h-px w-full bg-gradient-to-r from-transparent to-transparent via-black/10"></div>
</div>
<div className="mx-auto max-w-7xl px-6 pb-12 sm:pb-16 md:pb-20">
<div className="relative overflow-hidden rounded-lg bg-gradient-to-b ring-1 from-slate-100/60 to-slate-100/20 ring-black/10">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -left-16 h-[360px] w-[360px] rounded-full bg-[#0A6EE7]/10 blur-3xl"></div>
<div className="absolute -bottom-28 -right-20 h-[320px] w-[320px] rounded-full blur-3xl bg-blue-600/10"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:p-10 pt-6 pr-6 pb-6 pl-6">

<div className="lg:col-span-5 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 rounded-full ring-1 px-3 py-1 w-fit text-xs bg-[#0A6EE7]/10 ring-[#0A6EE7]/20 text-[#0A6EE7]" style={{animation: `fadeRight .6s ease-out .05s both`}}>
<svg className="lucide lucide-globe h-3.5 w-3.5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  Global Stock
                </div>
<h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-black" style={{animation: `fadeRight .6s ease-out .1s both`}}>
                  เทรดหุ้นข้ามตลาด เข้าถึงปริมาณและสภาพคล่องระดับโลก
                </h2>
<p className="mt-3 text-slate-600" style={{animation: `fadeRight .6s ease-out .15s both`}}>
                  ค้นหาหุ้นชั้นนำจากสหรัฐฯ ยุโรป เอเชีย พร้อมข้อมูลเชิงลึก เช่น ปริมาณ, ความผันผวน, กำไรต่อหุ้น และข่าวสารที่คัดกรองแล้ว
                </p>
<div className="mt-6 grid grid-cols-3 gap-3" style={{animation: `fadeRight .6s ease-out .2s both`}}>
<div className="rounded-lg ring-1 p-3 bg-black/5 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">Markets</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-black">US / EU / APAC</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-black/5 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">Coverage</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-black">7,500+</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-black/5 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">Latency</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-black">Low</div>
</div>
</div>
<ul className="mt-5 space-y-3 text-sm" style={{animation: `fadeRight .6s ease-out .25s both`}}>
<li className="flex items-start gap-3">
<svg className="lucide lucide-search h-4 w-4 text-[#0A6EE7]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-slate-700">Screener ปรับเงื่อนไขขั้นสูง: Market Cap, P/E, Momentum</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-bell h-4 w-4 text-[#0A6EE7]" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="text-slate-700">Price alerts และข่าวสำคัญแบบเรียลไทม์</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-line-chart h-4 w-4 text-[#0A6EE7]" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="text-slate-700">กราฟเทคนิคพร้อมอินดิเคเตอร์ยอดนิยม</span>
</li>
</ul>
<div className="mt-6 flex flex-wrap items-center gap-3" style={{animation: `fadeRight .6s ease-out .3s both`}}>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-[#0A6EE7]/20 hover:bg-[#0A6EE7]/30 ring-1 transition-colors text-slate-900 ring-[#0A6EE7]/30" href="#">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    เริ่มเทรด Global Stock
                  </a>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium ring-1 transition-colors text-slate-800 bg-black/5 hover:bg-black/10 ring-black/10" href="#">
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                    คู่มือฟีเจอร์
                  </a>
</div>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="md:col-span-1 rounded-lg ring-1 p-4 transition-all bg-black/5 ring-black/10 hover:ring-[#0A6EE7]/30" style={{animation: `fadeLeft .6s ease-out .1s both`}}>
<div className="flex items-center justify-between">
<div className="text-sm text-slate-700">Watchlist</div>
<svg className="lucide lucide-star h-4 w-4 text-slate-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded flex items-center justify-center text-xs font-semibold tracking-tight bg-black/10 text-slate-900">NV</div>
<span className="text-sm text-slate-800">NVDA</span>
</div>
<span className="text-sm text-emerald-700">+1.8%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded flex items-center justify-center text-xs font-semibold tracking-tight bg-black/10 text-slate-900">AP</div>
<span className="text-sm text-slate-800">AAPL</span>
</div>
<span className="text-sm text-emerald-700">+0.7%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded flex items-center justify-center text-xs font-semibold tracking-tight bg-black/10 text-slate-900">TS</div>
<span className="text-sm text-slate-800">TSLA</span>
</div>
<span className="text-sm text-rose-700">-0.9%</span>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-lg overflow-hidden ring-1 group transition-all ring-black/10 bg-black/5 hover:ring-[#0A6EE7]/30" style={{animation: `fadeLeft .6s ease-out .2s both`}}>
<div className="relative">
<img alt="Global stock markets" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-slate-50/70 via-slate-50/0"></div>
<div className="absolute bottom-0 p-4">
<div className="inline-flex items-center gap-2 text-xs text-slate-700">
<svg className="lucide lucide-radio h-4 w-4" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
                          Live sentiment
                        </div>
<div className="font-medium tracking-tight text-black">US Tech Leads Late Session Rally</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center gap-4 text-xs text-slate-600">
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> Momentum
                        </span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-bar-chart-2 h-3.5 w-3.5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg> Volume Spike
                        </span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 2m ago
                        </span>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-lg ring-1 p-4 md:order-3 bg-black/5 ring-black/10" style={{animation: `fadeLeft .6s ease-out .3s both`}}>
<div className="flex items-center justify-between">
<div className="text-sm text-slate-700">Technical Snapshot</div>
<svg className="lucide lucide-sliders-horizontal h-4 w-4 text-slate-600" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded-lg ring-1 p-3 bg-slate-100/60 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">RSI(14)</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-slate-900">48 Neutral</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-slate-100/60 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">MACD</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-slate-900">Crossover</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-slate-100/60 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">ATR</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-slate-900">Low</div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-lg ring-1 p-4 md:order-4 bg-black/5 ring-black/10" style={{animation: `fadeLeft .6s ease-out .35s both`}}>
<div className="flex items-center justify-between">
<div className="text-sm text-slate-700">Quick Ticket</div>
<svg className="lucide lucide-zap h-4 w-4 text-slate-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="mt-3 space-y-2 text-sm">
<div className="flex items-center justify-between">
<span className="text-slate-600">Side</span>
<span className="text-slate-800">Buy</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-600">Type</span>
<span className="text-slate-800">Market</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-600">Qty</span>
<span className="text-slate-800">100</span>
</div>
</div>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-[#0A6EE7]/20 hover:bg-[#0A6EE7]/30 ring-1 transition-colors text-slate-900 ring-[#0A6EE7]/30">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      Preview
                    </button>
</div>
</div>
</div>
</div>

<div className="px-6 sm:px-10 pb-6">
<div className="h-px w-full bg-black/10"></div>
</div>
<div className="px-6 sm:px-10 pb-8 flex items-center justify-between gap-4">
<div className="text-sm text-slate-600">
                มีค่าคอมมิชชั่นและภาษีที่เกี่ยวข้อง ขึ้นอยู่กับตลาดและประเภทคำสั่ง
              </div>
<a className="inline-flex items-center gap-2 text-sm text-[#0A6EE7] hover:text-[#0A6EE7]" href="#">
                ดูค่าธรรมเนียม
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="relative" id="etf">
<div className="mx-auto max-w-7xl px-6 py-6">
<div className="h-px w-full bg-gradient-to-r from-transparent to-transparent via-black/10"></div>
</div>
<div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
<div className="relative overflow-hidden rounded-lg bg-gradient-to-b ring-1 from-slate-100/60 to-slate-100/20 ring-black/10">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-16 h-[360px] w-[360px] rounded-full bg-[#EB6101]/10 blur-3xl"></div>
<div className="absolute -bottom-28 -left-20 h-[320px] w-[320px] rounded-full blur-3xl bg-pink-600/10"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">

<div className="lg:col-span-5 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 rounded-full ring-1 px-3 py-1 w-fit text-xs bg-[#EB6101]/10 ring-[#EB6101]/20 text-[#EB6101]" style={{animation: `fadeRight .6s ease-out .05s both`}}>
<svg className="lucide lucide-layers h-3.5 w-3.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                  ETF
                </div>
<h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-black" style={{animation: `fadeRight .6s ease-out .1s both`}}>
                  กระจายการลงทุนด้วย ETF ธีมเฉพาะและดัชนีหลัก
                </h2>
<p className="mt-3 text-slate-600" style={{animation: `fadeRight .6s ease-out .15s both`}}>
                  เลือกตะกร้าหุ้นที่คัดสรรแล้วตั้งแต่ดัชนีตลาดกว้างไปจนถึงธีมเฉพาะ เช่น AI, Clean Energy, Healthcare พร้อมข้อมูลค่าใช้จ่ายและ Tracking Error
                </p>
<div className="mt-6 grid grid-cols-3 gap-3" style={{animation: `fadeRight .6s ease-out .2s both`}}>
<div className="rounded-lg ring-1 p-3 bg-black/5 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">Expense</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-black">0.05% ~</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-black/5 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">Spread</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-black">Tight</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-black/5 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">Tracking Err.</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-black">Low</div>
</div>
</div>
<ul className="mt-5 space-y-3 text-sm" style={{animation: `fadeRight .6s ease-out .25s both`}}>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle h-4 w-4 text-[#EB6101]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-slate-700">Core Index: S&P 500, MSCI World, Emerging Markets</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle h-4 w-4 text-[#EB6101]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-slate-700">Thematic: AI, Clean Energy, Cybersecurity</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle h-4 w-4 text-[#EB6101]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-slate-700">Distribution / Accumulating ตามนโยบายกอง</span>
</li>
</ul>
<div className="mt-6 flex flex-wrap items-center gap-3" style={{animation: `fadeRight .6s ease-out .3s both`}}>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-[#EB6101]/20 hover:bg-[#EB6101]/30 ring-1 transition-colors text-slate-900 ring-[#EB6101]/30" href="#">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    ค้นหา ETF
                  </a>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium ring-1 transition-colors text-slate-800 bg-black/5 hover:bg-black/10 ring-black/10" href="#">
<svg className="lucide lucide-list-tree h-4 w-4" data-lucide="list-tree" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12h-8"></path><path d="M21 6H8"></path><path d="M21 18h-8"></path><path d="M3 6v4c0 1.1.9 2 2 2h3"></path><path d="M3 10v6c0 1.1.9 2 2 2h3"></path></svg>
                    เปรียบเทียบกอง
                  </a>
</div>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="rounded-lg overflow-hidden ring-1 transition-all ring-black/10 bg-black/5 hover:ring-[#EB6101]/30" style={{animation: `fadeLeft .6s ease-out .1s both`}}>
<div className="relative">
<img alt="AI & robotics theme" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1600&auto=format&fit=crop" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-slate-50/70 via-slate-50/0"></div>
<div className="absolute bottom-0 p-3">
<div className="font-medium tracking-tight text-black">AI & Robotics</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700">TER</span>
<span className="text-slate-900">0.35%</span>
</div>
<div className="mt-2 flex items-center justify-between text-sm">
<span className="text-slate-700">1Y</span>
<span className="text-emerald-700">+14.2%</span>
</div>
</div>
</div>

<div className="rounded-lg overflow-hidden ring-1 transition-all ring-black/10 bg-black/5 hover:ring-[#EB6101]/30" style={{animation: `fadeLeft .6s ease-out .2s both`}}>
<div className="relative">
<img alt="Clean energy theme" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-50/70 via-slate-50/0"></div>
<div className="absolute bottom-0 p-3">
<div className="font-medium tracking-tight text-black">Clean Energy</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700">TER</span>
<span className="text-slate-900">0.25%</span>
</div>
<div className="mt-2 flex items-center justify-between text-sm">
<span className="text-slate-700">1Y</span>
<span className="text-emerald-700">+8.6%</span>
</div>
</div>
</div>

<div className="rounded-lg overflow-hidden ring-1 transition-all ring-black/10 bg-black/5 hover:ring-[#EB6101]/30" style={{animation: `fadeLeft .6s ease-out .3s both`}}>
<div className="relative">
<img alt="Healthcare theme" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-50/70 via-slate-50/0"></div>
<div className="absolute bottom-0 p-3">
<div className="font-medium tracking-tight text-black">Healthcare</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-700">TER</span>
<span className="text-slate-900">0.18%</span>
</div>
<div className="mt-2 flex items-center justify-between text-sm">
<span className="text-slate-700">1Y</span>
<span className="text-emerald-700">+6.1%</span>
</div>
</div>
</div>

<div className="md:col-span-3 rounded-lg ring-1 p-4 transition-all ring-black/10 bg-black/5 hover:ring-[#EB6101]/30" style={{animation: `fadeLeft .6s ease-out .35s both`}}>
<div className="flex items-center justify-between">
<div className="text-sm text-slate-700">ตัวเปรียบเทียบ ETF</div>
<svg className="lucide lucide-columns-3 h-4 w-4 text-slate-600" data-lucide="columns-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</div>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
<div className="rounded-lg ring-1 p-3 bg-slate-100/60 ring-black/10">
<div className="font-medium tracking-tight text-slate-800">Core S&P 500</div>
<div className="mt-1 text-slate-600">TER 0.05% • TE Low</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-slate-100/60 ring-black/10">
<div className="font-medium tracking-tight text-slate-800">MSCI World</div>
<div className="mt-1 text-slate-600">TER 0.12% • TE Low</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-slate-100/60 ring-black/10">
<div className="font-medium tracking-tight text-slate-800">EM Growth</div>
<div className="mt-1 text-slate-600">TER 0.18% • TE Med</div>
</div>
</div>
<div className="mt-4 flex items-center justify-end">
<a className="inline-flex items-center gap-2 text-sm text-[#EB6101] hover:text-[#EB6101]" href="#">
                        เปิดตัวเปรียบเทียบ
                        <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 sm:px-10 pb-6">
<div className="h-px w-full bg-black/10"></div>
</div>
<div className="px-6 sm:px-10 pb-10 flex items-center justify-between gap-4">
<div className="text-sm text-slate-600">
                ผลตอบแทนในอดีตไม่การันตีอนาคต โปรดอ่านเอกสารข้อมูลสำคัญของกองทุนก่อนตัดสินใจ
              </div>
<a className="inline-flex items-center gap-2 text-sm text-[#EB6101] hover:text-[#EB6101]" href="#">
                เอกสารข้อมูลสำคัญ
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="relative">
<div className="mx-auto max-w-7xl px-6 pb-12">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg ring-1 p-5 bg-black/5 ring-black/10">
<div>
<div className="text-lg font-semibold tracking-tight text-black">เริ่มต้นกับ Global Trading วันนี้</div>
<div className="text-sm mt-1 text-slate-600">เปิดบัญชีภายในไม่กี่นาที รองรับหลายสกุลเงินและ KYC ออนไลน์</div>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2text-sm font bg-slate-900 text-white hover:bg-black transition-colors ring-1 ring-black/10" href="#">
<svg className="lucide lucide-user-plus h-4 w-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
              เปิดบัญชี
            </a>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ring-1 transition-colors text-slate-900 bg-transparent hover:bg-black/5 ring-black/10" href="#">
<svg className="lucide lucide-message-circle h-4 w-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m3 21 1.9-5.7A8.5 8.5 0 1 1 8.5 20z"></path></svg>
              คุยกับทีมงาน
            </a>
</div>
</div>

<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
<div>© 2025 Global Trading. All rights reserved.</div>
<nav className="flex items-center gap-4">
<a className="hover:text-slate-800 transition-colors" href="#">ข้อกำหนดการใช้งาน</a>
<span className="text-slate-400">•</span>
<a className="hover:text-slate-800 transition-colors" href="#">นโยบายความส่วนตัว</a>
<span className="text-slate-400">•</span>
<a className="hover:text-slate-800 transition-colors" href="#">การเปิดเผยความเสี่ยง</a>
</nav>
</div>
</div>
</footer>



    </>
  );
}
