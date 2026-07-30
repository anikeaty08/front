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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    (function () {
      var root = document.getElementById('aura-emf4xg3gp');
      if (!root) return;
      var text = root.getAttribute('data-tooltip') || '';
      var pinned = false;
      var tip = null, bubble = null, arrow = null;

      function createTip() {
        if (tip) return;
        tip = document.createElement('div');
        tip.setAttribute('role', 'tooltip');
        tip.className = 'fixed z-50';
        tip.style.left = '0px';
        tip.style.top = '0px';
        tip.style.transform = 'translate(-50%,-100%)';
        tip.style.pointerEvents = 'none';
        tip.style.opacity = '0';
        tip.style.transition = 'opacity .12s ease';

        // Bubble
        bubble = document.createElement('div');
        bubble.className = 'rounded-lg ring-1 shadow';
        bubble.style.backgroundColor = 'rgb(15 23 42)';     // bg-slate-900
        bubble.style.color = 'white';
        bubble.style.fontSize = '12px';
        bubble.style.lineHeight = '1.5';
 bubble.style.padding = '8px 12px';
        bubble.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
        bubble.style.borderColor = 'rgba(0,0,0,0.1)';
        bubble.style.borderWidth = '1px';
 bubble.style.borderStyle = 'solid';
        bubble.textContent = text;

        // Arrow
        arrow = document.createElement('div');
        arrow.style.position = 'absolute';
        arrow.style.height = '8px';
        arrow.style.width = '8px';
        arrow.style.backgroundColor = 'rgb(15 23 42)';
        arrow.style.borderColor = 'rgba(0,0,0,0.1)';
        arrow.style.borderWidth = '1px';
        arrow.style.borderStyle = 'solid';
        arrow.style.transform = 'translateX(-50%) rotate(45deg)';
        arrow.style.left = '50%';
        arrow.style.bottom = '-4px';
        arrow.style.boxShadow = '0 1px 2px rgba(0,0,0,0.08)';

        tip.appendChild(bubble);
        tip.appendChild(arrow);
        document.body.appendChild(tip);
      }

      function place() {
        if (!tip) return;
        var rect = root.getBoundingClientRect();
        var top = rect.top - 8; // gap above header
        tip.style.left = (rect.left + rect.width / 2) + 'px';
        tip.style.top = top + 'px';
      }

      function show() {
        createTip();
        place();
        tip.style.opacity = '1';
      }

      function hide() {
        if (pinned || !tip) return;
        tip.style.opacity = '0';
      }

      root.addEventListener('mouseenter', show);
      root.addEventListener('mouseleave', hide);
      root.addEventListener('focusin', show);
      root.addEventListener('focusout', hide);
      root.addEventListener('click', function () {
        pinned = !pinned;
        if (pinned) {
          show();
          tip.style.pointerEvents = 'auto';
        } else {
          hide();
        }
      });

      window.addEventListener('scroll', function () {
        if (tip && (pinned || tip.style.opacity === '1')) place();
      }, { passive: true });

      window.addEventListener('resize', function () {
        if (tip && (pinned || tip.style.opacity === '1')) place();
      });
    })();
  
}

{

    (function () {
      var root = document.getElementById('aura-emf4xvdln');
      if (!root) return;
      var text = root.getAttribute('data-tooltip') || '';
      var pinned = true; // แสดงไว้เหนือ YTM โดยค่าเริ่มต้น
      var tip = null bubble = null, arrow = null;

      function createTip() {
        if (tip) return;
        tip = document.createElement('div');
        tip.setAttribute('role', 'tooltip');
        tip.className = 'fixed z-50        tip.style.left = '0px';
        tip.style.top = '0px';
        tip.style.transform = 'translate(-50%,-100%)';
        tip.style.pointerEvents = 'none';
        tip.style.opacity = '0';
        tip.style.transition = 'opacity .12s ease';

        // Bubble
        bubble = document.createElement('div');
        bubble.className = 'rounded-lg ring-1 shadow';
        bubble.style.backgroundColor = 'rgb(15 23 42)';     // bg-slate-900
        bubble.style.color = 'white';
        bubble.style.fontSize = '12px';
        bubble.style.lineHeight = '1.5';
        bubble.style.padding = '8px 12px';
        bubble.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
        bubble.style.borderColor = 'rgba(0,0,0,.1)';
        bubble.style.borderWidth = '1px';
        bubble.style.borderStyle = 'solid';
        bubble.textContent = text;

        // Arrow
        arrow = document.createElement('div');
        arrow.style.position = 'absolute';
        arrow.style.height = '8px';
        arrow.style.width = '8px';
        arrow.style.backgroundColor = 'rgb(15 23 42)';
        arrow.style.borderColor = 'rgba(0,0,0,0.1)';
        arrow.style.borderWidth = '1px';
        arrow.style.borderStyle = 'solid';
        arrow.style.transform = 'translateX(-50%) rotate(45deg)';
        arrow.style.left = '50%';
        arrow.style.bottom = '-4px';
        arrow.style.boxShadow = '0 1px 2px rgba(0,0,0,0.08)';

        tip.appendChild(bubble);
        tip.appendChild(arrow);
        document.body.appendChild(tip);
      }

      function place() {
        if (!tip) return;
        var rect = root.getBoundingClientRect(); // จับตำแหน่งจากตัว YTM โดยตรง
        var top = rect.top - 8; // เว้นระยะเล็กน้อยเหนือ YTM
        var left = rect.left + rect.width / 2; // จัดกึ่งกลางเหนือ YTM
        tip.style.left = left + 'px';
        tip.style.top = top + 'px';
      }

      function show() {
        createTip();
        place();
        tip.style.opacity = '1';
        tip.style.pointerEvents = 'auto';
      }

      hide() {
        if (pinned || !tip) return;
        tip.style.opacity = '0';
      }

      root.addEventListener('mouseenter', show);
      root.addEventListener('mouseleave', hide);
      root.addEventListener('focusin', show);
      root.addEventListener('focusout', hide);
      root.addEventListener('click', function () {
        pinned = !pinned;
        if (pinned) {
          show();
          tip.style.pointerEvents = 'auto';
        } else {
          hide();
        }
      });

      window.addEventListener('scroll', function () {
        if (tip && (pinned || tip.style.opacity === '1')) place();
      }, { passive: true });

      window.addEventListener('resize', function () {
        if (tip && (pinned || tip.style.opacity === '1')) place();
      });

      // แสดงทันทีเหนือ YTM
      show();
    })();
  
}

{

      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide && window.lucide.createIcons) {
          window.lucide.createIcons();
        }
      });
    
}
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
<div className="max-w-7xl flex mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between relative">
<img alt="Yuanta Securities logo" className="" src="https://www.yuanta.co.th/cms/uploads/Logo_aa5fd5a665.svg" style={{maxWidth: `100%`, height: `32px`}} />
<path fill="#003087"></path>
<path fill="#0070E0"></path>
<path fill="#003087"></path>
<path fill="#0070E0"></path>
<path fill="#001C64"></path>
<path fill="#0070E0"></path>
<path fill="#003087"></path>
<nav className="absolute right-6 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-6">
<a className="hover:text-slate-800 text-sm font-medium text-slate-700" href="#">ค่าธรรมเนียม</a>
<a className="hover:text-slate-800 text-sm font-medium text-slate-700" href="#">คู่มือนักลงทุน</a>
<a className="hover:text-slate-800 text-sm font-medium text-slate-700" href="#">คำถามที่พบบ่อย</a>
</nav>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pb-4 pl-6">
<div className="flex items-center justify-between">
<h1 className="sm:text-4xl md:text-5xl text-3xl font-semibold text-black tracking-tight" style={{animation: `fadeUp .7s ease-out .05s both`}}>
            Global Trading Products
          </h1>
<div className="hidden sm:flex items-center gap-3" style={{animation: `fadeUp .7s ease-out .15s both`}}>
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
<div className="absolute -top-24 -right-16 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="absolute -bottom-32 -left-24 h-[320px] w-[320px] rounded-full blur-3xl bg-blue-600/10"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:p-10 pt-6 pr-6 pb-6 pl-6">

<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-lg ring-1 ring-black/10 bg-black/5">
<img alt="Oversea Bonds visual" className="h-64 sm:h-72 md:h-80 w-full object-cover" src="https://static.bangkokpost.com/media/content/20240220/c1_2745389_240220142014.jpeg?w=800&q=80" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-slate-50/70 via-slate-50/0 to-transparent"></div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center">
<div className="inline-flex gap-2 ring-1 w-fit ring-emerald-600/20 text-xs text-[#0A6EE7] bg-[#0A6EE7]/10 rounded-full pt-1 pr-3 pb-1 pl-3 items-center">
<svg className="lucide lucide-earth lucide-scan-line h-3.5 w-3.5" data-icon-replaced="true" data-lucide="earth" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `14px`, height: `14px`, color: `rgb(10, 110, 231)`}} viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="12" cy="12"></circle></svg>
      ตราสารหนี้ต่างประเทศ
    </div>
<h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-black">Oversea Bonds</h2>
<p className="text-slate-600 mt-3">
      ลงทุนในพันธบัตรรัฐบาลและเอกชนต่างประเทศ รับกระแสเงินสดจากคูปอง เสริมเสถียรภาพพอร์ต พร้อมกระจายความเสี่ยงด้านสกุลเงินและอันดับเครดิต
    </p>

<div className="flex flex-wrap gap-2 mt-4 items-center">
<span className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs ring-1 bg-black/5 ring-black/10 text-slate-700">
<svg className="lucide lucide-wallet h-4 w-4 text-slate-600" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
        คูปองรายงวด
      </span>
<span className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs ring-1 bg-black/5 ring-black/10 text-slate-700">
<svg className="lucide lucide-shield-check h-4 w-4 text-slate-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
        อันดับเครดิต BBB+ ถึง A
      </span>
<span className="inline-flex items-center gap-2 ring-1 ring-black/10 text-xs text-slate-700 bg-black/5 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3"><svg className="lucide lucide-coins w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(71, 85, 105)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8"></circle><path></path><path></path><path></path></svg> สกุลเงิน USD</span>
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
<div className="text-sm text-slate-600 mt-2">ตราสารหนี้แนะนำ</div>

<div className="mt-2 rounded-lg ring-1 ring-black/10 overflow-hidden bg-white/60">
<div className="hidden sm:grid grid-cols-12 gap-3 px-4 py-3 text-xs text-slate-600">
<div className="col-span-4">ผู้ออกตราสาร</div>
<div className="col-span-2 relative group inline-flex gap-1 items-center" data-tooltip="อัตราดอกเบี้ยคงที่ที่ผู้ออกพันธบัตรสัญญาว่าจะจ่ายให้กับผู้ถือพันธบัตรเป็นรายปี">
<span className="tracking-tight">Coupon</span>
<div aria-hidden="true" className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 -translate-y-1 transform w-[280px] pointer-events-none opacity-0 transition-all z-50 hidden">
<div className="relative">
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-slate-900 ring-1 ring-black/10"></div>
<div className="rounded-lg bg-slate-900 text-white text-xs leading-relaxed px-3 py-2 ring-1 ring-black/10 shadow">
        อัตราดอกเบี้ยคงที่ที่ผ้ออกพันธบัตรสัญญาว่าจะจ่ายให้กับผู้ถือพันธบัตรเป็นรายปี
      </div>
</div>
</div>

</div>
<div className="col-span-2">วันครบกำหนด</div>
<div className="col-span-2">อันดับเครดิต</div>
<div className="col-span-2 relative group inline-flex gap-1 items-center" data-tooltip="ผลตอบแทนที่แท้จริงที่นักลงทุนจะได้รับจากการลงทุนในพันธบัตรนั้น ๆ โดยคำนวณจากราคาตลาดปัจจุบันของพันธบัตร">
<span className="tracking-tight">YTM โดยประมาณ</span>
<div aria-hidden="true" className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 transform w-[320px] z-50 hidden">
<div className="relative">
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-slate-900 ring-1 ring-black/10"></div>
<div className="rounded-lg bg-slate-900 text-white text-xs leading-relaxed px-3 py-2 ring-1 ring-black/10 shadow">
        ผลตอบแทนที่แท้จริงที่นักลงทุนจะได้รับจากการลงทุนในพันธบัตรนั้น ๆ โดยคำนวณจากราคาตลาดปัจจุบันของพันธบัตร
      </div>
</div>
</div>

</div>
</div>
<div className="sm:grid sm:grid-cols-12 flex flex-col gap-2 sm:gap-3 sm:items-center pt-3 pr-4 pb-3 pl-4 items-start">
<div className="sm:col-span-4 w-full">
<div className="flex gap-3 items-center">
<span className="h-8 w-8 ring-1 ring-black/10 flex items-center justify-center bg-black/5 rounded-lg overflow-hidden">
<img alt="Custom image" className="w-full h-full object-cover" src="https://s3-symbol-logo.tradingview.com/apple--600.png?w=800&q=80" style={{width: `100%`, height: `100%`}} />
</span>
<div className="">
<div className="text-xs text-slate-600">ตราสารหนี้เอกชน</div>
<div className="text-sm font-medium tracking-tight text-slate-900">Apple Inc. (USD)</div>
</div>
</div>
</div>
<div className="sm:col-span-2 w-full flex gap-1 text-sm text-slate-800 items-center">
<svg className="lucide lucide-badge-dollar-sign h-4 w-4 text-slate-600" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
          ~3.0–4.3%
        </div>
<div className="sm:col-span-2 w-full flex gap-1 text-sm text-slate-800 items-center">
<svg className="lucide lucide-calendar w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(71, 85, 105)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
          2027–2032
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-shield h-4 w-4 text-slate-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000"><path></path></svg>
          AA+
        </div>
<div className="sm:col-span-2 w-full flex items-center justify-between">
<span className="text-sm text-slate-800">3.2–4.1%</span>
<a className="sm:inline-flex items-center gap-2 text-[12px] hover:bg-[#095EC4] font-medium text-white bg-[#0A6EE7] rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="https://aura.build/share/MTX4OBZ" id="aura-emf56sxlp" role="button">ดูข้อมูล</a>
</div>
<a className="sm:hidden inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800" href="#">
          ดูซีรีส์นี้
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org2000/svg"><path></path><path></path></svg>
</a>
</div>


<div className="h-px w-full bg-black/10"></div>

<div className="sm:grid sm:grid-cols-12 flex flex-col gap-2 sm:gap-3 sm:items-center pt-3 pr-4 pb-3 pl-4 items-start">
<div className="sm:col-span-4 w-full">
<div className="flex items-center gap-3">
<span className="h-8 w-8 ring-1 ring-black/10 flex items-center justify-center bg-black/5 rounded-lg">
<img alt="Microsoft logo" className="w-[16px] h-[16px]" src="https://logo.clearbit.com/microsoft.com" style={{width: `16px`, height: `16px`}} />
</span>
<div className="">
<div className="text-xs text-slate-600">ตราสารหนี้เอกชน</div>
<div className="text-sm font-medium tracking-tight text-slate-900">Microsoft Corp. (USD)</div>
</div>
</div>
</div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-badge-dollar-sign h-4 w-4 text-slate-600" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
          ~2.1–5.4%
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-calendar h-4 w-4 text-slate-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
          2026–2035
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-shield h-4 w-4 text-slate-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
          AAA
        </div>
<div className="sm:col-span-2 w-full flex items-center justify-between">
<span className="text-sm text-slate-800">3.4–4.8%</span>
<a className="sm:inline-flex items-center gap-2 text-[12px] hover:bg-[#095EC4] font-medium text-white bg-[#0A6EE7] rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="#" role="button">ดูข้อมูล</a>
</div>
<a className="sm:hidden inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800" href="#">
          ดูซีรีส์นี้
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
<div className="h-px w-full bg-black/10"></div>

<div className="sm:grid sm:grid-cols-12 flex flex-col gap-2 sm:gap-3 sm:items-center pt-3 pr-4 pb-3 pl-4 items-start">
<div className="sm:col-span-4 w-full">
<div className="flex items-center gap-3">
<span className="h-8 w-8 ring-1 ring-black/10 flex items-center justify-center bg-black/5 rounded-lg overflow-hidden">
<img alt="Meta logo" className="w-full h-full object-cover" src="https://logo.clearbit.com/meta.com" style={{width: `100%`, height: `100%`, objectFit: `cover`}} />
</span>
<div className="">
<div className="text-xs text-slate-600">ตราสารหนี้เอกชน</div>
<div className="text-sm font-medium tracking-tight text-slate-900">Meta Platforms Inc. (USD)</div>
</div>
</div>
</div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-badge-dollar-sign h-4 w-4 text-slate-600" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
          ~3.0–5.8%
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap1">
<svg className="lucide lucide-calendar h-4 w-4 text-slate-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
          2027–2034
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-">
<svg className="lucide lucide-shield h-4 w-4 text-slate-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
          AA-
        </div>
<div className="sm:col-span-2 w-full flex items-center justify-between">
<span className="text-sm text-slate-800">3.9–5.3%</span>
<a className="sm:inline-flex items-center gap-2 text-[12px] hover:bg-[#095EC4] font-medium text-white bg-[#0A6EE7] rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="#" role="button">ดูข้อมูล</a>
</div>
<a className="sm:hidden inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800" href="#">
          ดูซีรีส์นี้
          <svg className="lucide lucide-arrow-right luc-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www3.org/2000/svg"><path></path><path></path></svg>
</a>
<div className="sm:col-span-12 h-px w-full bg-black/10"></div>

<div className="sm:col-span-4 w-full">
<div className="flex gap-3 items-center">
<span className="h-8 w-8 ring-1 ring-black/10 flex items-center justify-center bg-black/5 rounded-lg overflow-hidden">
<img alt="Amazon logo" className="w-full h-full object-cover" src="https://logo.clearbit.com/amazon.com" style={{width: `100%`, height: `100%`, objectFit: `cover`}} />
</span>
<div className="">
<div className="text-xs text-slate-600">ตราสารหนี้เอกชน</div>
<div className="text-sm font-medium tracking-tight text-slate-900">Amazon.com Inc. (USD)</div>
</div>
</div>
</div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-badge-dollar-sign h-4 w-4 text-slate-600" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
          ~2.4–5.2%
        </div>
<div className="sm:col-span-2 text-sm text-slate-800 w-full flex items-center gap-1">
<svg className="lucide lucide-calendar h-4 w-4 text-slate-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
          2026–2033
        </div>
<div className="sm:col-span-2 text-sm text-slate- w-full flex items-center gap-1">
<svg className="lucide lucide-shield h-4 w-4 text-slate-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
          AA-
        </div>
<div className="sm:col-span-2 w-full flex items-center justify-between">
<span className="text-sm text-slate-800">3.5–4.9%</span>
<a className="sm:inline-flex items-center gap-2 text-[12px] hover:bg-[#095EC4] font-medium text-white bg-[#0A6EE7] rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="#" role="button">ดูข้อมูล</a>
</div>
<a className="sm:hidden inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald800" href="#">
          ดูซีรีส์นี้
          <svg className="lucide lucide-arrow-right h4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
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
<svg className="lucide lucide-globe h-3.5 w-3.5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
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
<svg className="lucide lucide-search h-4 w-4 text-[#0A6EE7]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
<span className="text-slate-700">Screener ปรับเงื่อนไขขั้นสูง: Market Cap, P/E, Momentum</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-bell h-4 w-4 text-[#0A6EE7]" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-slate-700">Price alerts และข่าวสำคัญแบบเรียลไทม์</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-line-chart h-4 w-4 text-[#0A6EE7]" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-slate-700">กราฟเทคนิคพร้อมอินดิเคเตอร์ยอดนิยม</span>
</li>
</ul>
<div className="mt-6 flex flex-wrap items-center gap-3" style={{animation: `fadeRight .6s ease-out .3s both`}}>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-[#0A6EE7]/20 hover:bg-[#0A6EE7]/30 ring-1 transition-colors text-slate-900 ring-[#0A6EE7]/30" href="#">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                    เริ่มเทรด Global Stock
                  </a>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium ring-1 transition-colors text-slate-800 bg-black/5 hover:bg-black/10 ring-black/10" href="#">
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                    คู่มือฟีเจอร์
                  </a>
</div>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="md:col-span-1 rounded-lg ring-1 p-4 transition-all bg-black/5 ring-black/10 hover:ring-[#0A6EE7]/30" style={{animation: `fadeLeft .6s ease-out .1s both`}}>
<div className="flex items-center justify-between">
<div className="text-sm text-slate-700">Watchlist</div>
<svg className="lucide lucide-star h-4 w-4 text-slate-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
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
<svg className="lucide lucide-radio h-4 w-4" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><circle cx="12" cy="12"></circle></svg>
                          Live sentiment
                        </div>
<div className="font-medium tracking-tight text-black">US Tech Leads Late Session Rally</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center gap-4 text-xs text-slate-600">
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> Momentum
                        </span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-bar-chart-2 h-3.5 w-3.5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><line></line><line></line></svg> Volume Spike
                        </span>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg> 2m ago
                        </span>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-lg ring-1 p-4 md:order-3 bg-black/5 ring-black/10" style={{animation: `fadeLeft .6s ease-out .3s both`}}>
<div className="flex items-center justify-between">
<div className="text-sm text-slate-700">Technical Snapshot</div>
<svg className="lucide lucide-sliders-horizontal h-4 w-4 text-slate-600" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><line></line><line></line><line></line><line></line><line></line><line></line><line></line><line></line></svg>
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
<svg className="lucide lucide-zap h-4 w-4 text-slate-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
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
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
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
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
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
<svg className="lucide lucide-layers h-3.5 w-3.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
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
<svg className="lucide lucide-check-circle h-4 w-4 text-[#EB6101]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-slate-700">Core Index: S&P 500, MSCI World, Emerging Markets</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle h-4 w-4 text-[#EB6101]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-slate-700">Thematic: AI, Clean Energy, Cybersecurity</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-circle h-4 w-4 text-[#EB6101]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-slate-700">Distribution / Accumulating ตามนโยบายกอง</span>
</li>
</ul>
<div className="mt-6 flex flex-wrap items-center gap-3" style={{animation: `fadeRight .6s ease-out .3s both`}}>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-[#EB6101]/20 hover:bg-[#EB6101]/30 ring-1 transition-colors text-slate-900 ring-[#EB6101]/30" href="#">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                    ค้นหา ETF
                  </a>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium ring-1 transition-colors text-slate-800 bg-black/5 hover:bg-black/10 ring-black/10" href="#">
<svg className="lucide lucide-list-tree h-4 w-4" data-lucide="list-tree" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
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
<svg className="lucide lucide-columns-3 h-4 w-4 text-slate-600" data-lucide="columns-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect><path></path><path></path></svg>
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
                        <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
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
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="relative">
</footer>


<div className="fixed z-50" role="tooltip" style={{left: `458.992px`, top: `561px`, transform: `translate(-50%, -100%)`, pointerEvents: `none`, opacity: `0`}}><div className="rounded-lg ring-1 shadow" style={{backgroundColor: `rgb(15, 23, 42)`, color: `white`, fontSize: `12px`, lineHeight: `1.5`, padding: `8px 12px`, boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px`, borderColor: `rgba(0, 0, 0, 0.1)`, borderWidth: `1px`, borderStyle: `solid`}}>อัตราดอกเบี้ยคงที่ที่ผู้ออกพันธบัตรสัญญาว่าจะจ่ายให้กับผู้ถือพันธบัตรเป็นรายปี</div><div style={{position: `absolute`, height: `8px`, width: `8px`, backgroundColor: `rgb(15, 23, 42)`, borderColor: `rgba(0, 0, 0, 0.1)`, borderWidth: `1px`, borderStyle: `solid`, transform: `translateX(-50%) rotate(45deg)`, left: `50%`, bottom: `-4px`, boxShadow: `rgba(0, 0, 0, 0.08) 0px 1px 2px`}}></div></div><div className="fixed z-50" role="tooltip" style={{left: `535.996px`, top: `549px`, transform: `translate(-50%, -100%)`, pointerEvents: `auto`, opacity: `1`}}></div><div className="fixed z-50" role="tooltip" style={{left: `458.992px`, top: `561px`, transform: `translate(-50%, -100%)`, pointerEvents: `none`, opacity: `0`}}><div className="rounded-lg ring-1 shadow" style={{backgroundColor: `rgb(15, 23, 42)`, color: `white`, fontSize: `12px`, lineHeight: `1.5`, padding: `8px 12px`, boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px`, borderColor: `rgba(0, 0, 0, 0.1)`, borderWidth: `1px`, borderStyle: `solid`}}>อัตราดอกเบี้ยคงที่ที่ผู้ออกพันธบัตรสัญญาว่าจะจ่ายให้กับผู้ถือพันธบัตรเป็นรายปี</div><div style={{position: `absolute`, height: `8px`, width: `8px`, backgroundColor: `rgb(15, 23, 42)`, borderColor: `rgba(0, 0, 0, 0.1)`, borderWidth: `1px`, borderStyle: `solid`, transform: `translateX(-50%) rotate(45deg)`, left: `50%`, bottom: `-4px`, boxShadow: `rgba(0, 0, 0, 0.08) 0px 1px 2px`}}></div></div><div className="fixed z-50" role="tooltip" style={{left: `458.992px`, top: `561px`, transform: `translate(-50%, -100%)`, pointerEvents: `none`, opacity: `0`}}><div className="rounded-lg ring-1 shadow" style={{backgroundColor: `rgb(15, 23, 42)`, color: `white`, fontSize: `12px`, lineHeight: `1.5`, padding: `8px 12px`, boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px`, borderColor: `rgba(0, 0, 0, 0.1)`, borderWidth: `1px`, borderStyle: `solid`}}>อัตราดอกเบี้ยคงที่ที่ผู้ออกพันธบัตรสัญญาว่าจะจ่ายให้กับผู้ถือพันธบัตรเป็นรายปี</div><div style={{position: `absolute`, height: `8px`, width: `8px`, backgroundColor: `rgb(15, 23, 42)`, borderColor: `rgba(0, 0, 0, 0.1)`, borderWidth: `1px`, borderStyle: `solid`, transform: `translateX(-50%) rotate(45deg)`, left: `50%`, bottom: `-4px`, boxShadow: `rgba(0, 0, 0, 0.08) 0px 1px 2px`}}></div></div><div className="fixed z-50" role="tooltip" style={{left: `458.992px`, top: `561px`, transform: `translate(-50%, -100%)`, pointerEvents: `none`, opacity: `0`}}><div className="rounded-lg ring-1 shadow" style={{backgroundColor: `rgb(15, 23, 42)`, color: `white`, fontSize: `12px`, lineHeight: `1.5`, padding: `8px 12px`, boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px`, borderColor: `rgba(0, 0, 0, 0.1)`, borderWidth: `1px`, borderStyle: `solid`}}>อัตราดอกเบี้ยคงที่ที่ผู้ออกพันธบัตรสัญญาว่าจะจ่ายให้กับผู้ถือพันธบัตรเป็นรายปี</div><div style={{position: `absolute`, height: `8px`, width: `8px`, backgroundColor: `rgb(15, 23, 42)`, borderColor: `rgba(0, 0, 0, 0.1)`, borderWidth: `1px`, borderStyle: `solid`, transform: `translateX(-50%) rotate(45deg)`, left: `50%`, bottom: `-4px`, boxShadow: `rgba(0, 0, 0, 0.08) 0px 1px 2px`}}></div></div>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-5 pb-8 pl-5">
<div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent mb-6"></div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="">
<img alt="Yuanta Securities logo" className="h-6" src="https://www.yuanta.co.th/cms/uploads/Logo_aa5fd5a665.svg" />
<p className="text-sm text-gray-600 mt-3">
        บริษัทหลักทรัพย์หยวนต้า (ประเทศไทย) จำกัด
      </p>
<p className="text-sm text-gray-600">โทร. 02-009-8351</p><p className="text-sm text-gray-600">อีเมล: support@yuanta.co.th</p>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900">ช่วยเหลือ</h3>
<ul className="mt-3 space-y-2 text-sm text-gray-600">
<li className=""><a className="hover:text-[#0A6EE7] transition" href="#faq">คำถามที่พบบ่อย</a></li>
<li className=""><a className="hover:text-[#0A6EE7] transition" href="#guide">คู่มือนักลงทุน</a></li>
<li className=""><a className="hover:text-[#0A6EE7] transition" href="#fees">ค่าธรรมเนียม</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900">กฎหมายและนโยบาย</h3>
<ul className="mt-3 space-y-2 text-sm text-gray-600">
<li className=""><a className="hover:text-[#0A6EE7] transition" href="#terms">ข้อกำหนดการใช้บริการ</a></li>
<li className=""><a className="hover:text-[#0A6EE7] transition" href="#privacy">นโยบายความเป็นส่วนตัว</a></li>
<li className=""><a className="hover:text-[#0A6EE7] transition" href="#cookies">นโยบายคุกกี้</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-6 items-start justify-start">
<p className="text-xs text-gray-500">© 2025 Yuanta Securities (Thailand) Company Limited. สงวนลิขสิทธิ์</p>
<div className="flex items-center gap-3 text-xs text-gray-500">
</div>
</div>
</div>
    </>
  );
}
