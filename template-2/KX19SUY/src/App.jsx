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
        var root = document.getElementById('aura-emfk0s035');
        if (!root) return;
        var btn = root.querySelector('[data-interest-btn]');
        var toast = null;

        function ensureIcons() {
          if (window.lucide && window.lucide.createIcons) {
            try { window.lucide.createIcons(); } catch (e) {}
          }
        }

        function createToast() {
          toast = document.createElement('div');
          toast.className = 'fixed z-50 right-6 bottom-6';
          var inner = document.createElement('div');
          inner.className = 'inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-slate-900 text-white ring-1 ring-black/10 shadow';
          var icon = document.createElementNS('http://www.w3.org/2000/svg','svg');
          icon.setAttribute('xmlns','http://www.w3.org/2000/svg');
          icon.setAttribute('viewBox','0 0 24 24');
          icon.setAttribute('width','16');
          icon.setAttribute('height','16');
          icon.setAttribute('fill','none');
          icon.setAttribute('stroke','currentColor');
          icon.setAttribute('stroke-width','2');
          icon.setAttribute('stroke-linecap','round');
          icon.setAttribute('stroke-linejoin','round');
          icon.setAttribute('data-lucide','check-circle');
          icon.classList.add('h-4','w-4');
          inner.appendChild(icon);
          var text = document.createElement('span');
          inner.appendChild(text);
          toast.appendChild(inner);
          document.body.appendChild(toast);
          toast._text = text;
          ensureIcons();
        }

        function showToast(message) {
          if (!toast) createToast();
          toast._text.textContent = message;
          toast.style.opacity = '1';
          clearTimeout(toast._timer);
          toast._timer = setTimeout(function () {
            toast.style.opacity = '0';
          }, 2400);
        }

        if (btn) {
          btn.addEventListener('click', function () {
            var pressed = this.getAttribute('aria-pressed') === 'true';
            var label = this.querySelector('[data-label]');
            if (!pressed) {
              this.setAttribute('aria-pressed', 'true');
              this.classList.remove('bg-[#0A6EE7]', 'text-white');
              this.classList.add('bg-[#0A6EE7]/20', 'text-slate-900');
              label.textContent = 'สนใจแล้ว';
              showToast('บันทึกความสนใจเรียบร้อย');
            } else {
              this.setAttribute('aria-pressed', 'false');
              this.classList.remove('bg-[#0A6EE7]/20', 'text-slate-900');
              this.classList.add('bg-[#0A6EE7]', 'text-white');
              label.textContent = 'สนใจลงทุน';
              showToast('ยกเลิกความสนใจแล้ว');
            }
          });
        }
      })();
    
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
        bubble.style.boxShadow = '0 1px 3px rgba(0,00,0.12)';
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
<h1 className="sm:text-4xl md:text-5xl text-3xl font-semibold text-black tracking-tight" style={{animation: `fadeUp .7s ease-out .05s both`}}>ลงทุนครอบคลุมทั่วโลกใน 3 ผลิตภัณฑ์</h1>
<div className="hidden sm:flex items-center gap-3" style={{animation: `fadeUp .7s ease-out .15s both`}}>
</div>
</div>
<p className="max-w-2xl text-slate-600 mt-3 translate-x-3" style={{animation: `fadeUp .7s ease-out .1s both`}}>Yuanta ให้บริการแนะนำการลงทุนจากทีมงานมืออาชีพ ซึ่งมากด้วยประสบการณ์และผู้เชี่ยวชาญเฉพาะ ที่พร้อมดูแลสินทรัพย์การลงทุนอันหลากหลาย เพื่อตอบโจทย์ทุก ๆ วัตถุประสงค์การลงทุนใน ตราสารหนี้ หุ้นต่างประเทศและ ETF </p>
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
<h2 className="sm:text-3xl md:text-4xl text-2xl font-semibold text-black tracking-tight mt-3">Overseas Bonds</h2>
<p className="text-s-600 mt-3">เปิดโอกาสการลงทุนใน US Treasury Bonds และหุ้นกู้ของบริษัทชั้นนำทั่วโลก เช่น Microsoft, Apple, Meta และอีกมากมาย
พร้อมรับกระแสเงินสดสม่ำเสมอจากดอกเบี้ยคูปอง เสริมความมั่นคงให้พอร์ตการลงทุน กระจายความเสี่ยงด้านสกุลเงินและอันดับเครดิต มั่นใจทุกก้าวของการลงทุนไปกับผู้เชี่ยวชาญมืออาชีพ</p>

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
<div className="text-[11px] uppercase text-slate-600 tracking-wide">ผลตอบแทนโดยประมาณ</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-black">4.2–6.8%</div>
</div>
<div className="rounded-lg ring-1 p-4 bg-white/60 ring-black/10">
<div className="text-[11px] uppercase text-slate-600 tracking-wide">ระยะเวลา (ปี)</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-black">3–7 ปี</div>
</div>
<div className="rounded-lg ring-1 p-4 bg-white/60 ring-black/10">
<div className="text-[11px] uppercase tracking-wide text-slate-600">ความเสี่ยงเครดิต</div>
<div className="text-xl font-semibold text-black tracking-tight mt-1">AA - AA+</div>
</div>
</div>


</div>

<div className="lg:col-span-12">
<div className="text-sm text-slate-600 mt-2">
<div className="flex items-center justify-between">
<span className="">ตราสารหนี้แนะนำ</span>
<span className="hidden sm:inline text-[12px] text-slate-600 pl-3" style={{paddingTop: `6px`}}>ข้อมูลอัปเดต 25 สิงหาคม 2568 9.00 น.</span>
</div>
<div className="sm:hidden mt-1 text-[12px] text-slate-600 pt-1" style={{borderTop: `1px dotted #0A6EE7`}}>ข้อมูลอัปเดต 25 สิงหาคม 2568 9.00 น.</div>
</div>

<div className="mt-2 rounded-lg ring-1 ring-black/10 overflow-hidden bg-white/60">
<div className="hidden sm:grid grid-cols-12 gap-3 text-xs text-slate-600 pt-3 pr-4 pb-3 pl-4">
<div className="col-span-4 items-center">ผู้ออกตราสาร</div>
<div className="col-span-2 relative group inline-flex gap-1 -translate-x-4 items-center" data-tooltip="อัตราดอกเบี้ยคงที่ที่ผู้ออกพันธบัตรสัญญาว่าจะจ่ายให้กับผู้ถือพันธบัตรเป็นรายปี">
<span className="inline-flex items-center gap-1 relative group tracking-tight">Coupon Rate</span>
<div aria-hidden="true" className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 -translate-y-1 transform w-[280px] pointer-events-none opacity-0 transition-all z-50 hidden">
<div className="relative">
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-slate-900 ring-1 ring-black/10"></div>
<div className="rounded-lg bg-slate-900 text-white text-xs leading-relaxed px-3 py-2 ring-1 ring-black/10 shadow">
        อัตราดอกเบี้ยคงที่ที่ผ้ออกพันธบัตรสัญญาว่าจะจ่ายให้กับผู้ถือพันธบัตรเป็นรายปี
      </div>
</div>
</div>

</div>
<div className="col-span-2 -translate-x-4 text-left items-end relative inline-flex items-center gap-1 tracking-tight">วันครบกำหนด</div>
<div className="col-span-2">
<div className="w-full">
<div className="-translate-x-8 text-xs font-medium text-slate-600 tracking-tight text-center">Credit Rating</div>
<div className="h-px w-full bg-black/10 mt-1 mb-1 -translate-x-8"></div>
<div className="grid grid-cols-3 text-xs text-slate-600 -translate-x-8">
<div className="text-center">S&P</div>
<div className="text-center">Moody’s</div>
<div className="text-center">Fitch</div>
</div>
</div>
</div>
<div className="col-span-2 relative group inline-flex gap-1 -translate-x-4 items-center" data-tooltip="ผลตอบแทนที่แท้จริงที่นักลงทุนจะได้รับจากการลงทุนในพันธบัตรนั้น ๆ โดยคำนวณจากราคาตลาดปัจจุบันของพันธบัตร">
<span className="tracking-tight">ผลตอบแทนโดยประมาณ</span>
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
<div className="sm:col-span-2 w-full flex gap-1 text-sm text-slate-800 -translate-x-4 items-center">3.0–4.3%</div>
<div className="sm:col-span-2 w-full flex gap-1 text-sm text-slate-800 -translate-x-4 items-center">
          
          2027–2032
        </div>
<div className="sm:col-span-2 w-full flex gap-1 text-sm text-slate-800 items-center">
<div className="grid grid-cols-3 w-full -translate-x-8">
<div className="text-center">AA+</div>
<div className="text-center">Aaa</div>
<div className="text-center">AA-</div>
</div>
</div>
<div className="sm:col-span-2 w-full flex items-center justify-between">
<span className="text-sm text-slate-800">3.2–4.1%</span>
<a className="sm:inline-flex items-center gap-2 text-[12px] hover:bg-[#095EC4] font-medium text-white bg-[#0A6EE7] rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="https://aura.build/share/SGGNX4O" role="button">ดูข้อมูล</a>
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
<div className="sm:col-span-2 w-full flex gap-1 text-sm text-slate-800 -translate-x-4 items-center">2.1–5.4%</div>
<div className="sm:col-span-2 w-full flex gap-1 text-sm text-slate-800 -translate-x-4 items-center">
          
          2026–2035
        </div>
<div className="sm:col-span-2 w-full flex gap-1 text-sm text-slate-800 items-center">
<div className="grid grid-cols-3 w-full -translate-x-8">
<div className="text-center">AA+</div>
<div className="text-center">Aaa</div>
<div className="text-center">AA-</div>
</div>
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
<div className="sm:col-span-2 w-full flex gap-1 text-sm text-slate-800 -translate-x-4 items-center">3.0–5.8%</div>
<div className="sm:col-span-2 w-full flex gap1 text-sm text-slate-800 -translate-x-4 items-center">
          
          2027–2034
        </div>
<div className="sm:col-span-2 w-full flex gap- text-sm text-slate-800 items-center">
<div className="grid grid-cols-3 w-full -translate-x-8">
<div className="text-center">AA+</div>
<div className="text-center">Aaa</div>
<div className="text-center">AA-</div>
</div>
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
<div className="sm:col-span-2 w-full flex gap-1 text-sm text-slate-800 -translate-x-4 items-center">2.4–5.2%</div>
<div className="sm:col-span-2 w-full flex gap-1 text-sm text-slate-800 -translate-x-4 items-center">
          
          2026–2033
        </div>
<div className="sm:col-span-2 text-slate- w-full flex gap-1 text-sm items-center">
<div className="grid grid-cols-3 w-full -translate-x-8">
<div className="text-center">AA+</div>
<div className="text-center">Aaa</div>
<div className="text-center">AA-</div>
</div>
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

<div className="sm:px-10 pr-6 pb-6 pl-6">
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
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:p-10 pt-6 pr-6 pb-6 pl-6 rounded-2xl bg-white ring-1 ring-black/10 shadow-sm">

<div className="lg:col-span-4">
<div className="relative overflow-hidden rounded-xl ring-1 ring-black/10 bg-slate-100">
<img alt="Global market visual" className="h-64 sm:h-72 md:h-80 w-full object-cover" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage: `url('https://elite.jmfinancialservices.in/images/uploaded/global_stock_investment_services_product.jpg')`}}></div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 rounded-full ring-1 px-3 py-1 w-fit text-xs bg-[#0A6EE7]/10 ring-[#0A6EE7]/20 text-[#0A6EE7]">
<svg className="lucide lucide-globe-2 h-3.5 w-3.5" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="12" cy="12"></circle></svg>
      หุ้นต่างประเทศ
    </div>
<h2 className="mt-2 text-3xl sm:text-4xl tracking-tight font-semibold text-black">Global Stock</h2>
<p className="mt-3 text-slate-700">
      ลงทุนในหุ้นต่างประเทศ เพื่อสร้างโอกาสในการรับผลตอบแทนจากการเติบโตของเศรษฐกิจโลก
      พร้อมกระจายความเสี่ยงและเสริมศักยภาพการเติบโตของพอร์ตในระยะยาว
    </p>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-globe h-5 w-5 text-[#0A6EE7]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
<span className="text-slate-700">เข้าถึงโอกาสการลงทุนในหุ้นต่างประเทศ จาก 7 ตลาดชั้นนำ (US, HK, VN, JP, CH, SG, AU)</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-book-open h-5 w-5 text-[#0A6EE7]" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-slate-700">ลงทุนในหลักทรัพย์ได้มากกว่า 10,000 หลักทรัพย์ ทุกช่วงเวลา ไม่มีข้อจำกัด โดย <span className="inline-flex items-center rounded px-2 py-0.5 text-[12px] ring-1 ring-black/10 bg-black/5 text-slate-900">Yuanta Global Plus</span></span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-users h-5 w-5 text-[#0A6EE7]" data-lucide="users" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="9" cy="7"></circle><path></path><path></path></svg>
<span className="text-slate-700">ทีมนักวิเคราะห์/ที่ปรึกษา: มีผู้เชี่ยวชาญคอยให้คำแนะนำและบทวิเคราะห์คุณภาพ</span>
</li>
</ul>
</div>
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
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:p-10 ring-1 ring-black/10 bg-white rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">

<div className="lg:col-span-4">
<div className="relative overflow-hidden rounded-xl ring-1 ring-black/10 bg-slate-100">
<img alt="ETF visual" className="w-full h-64 sm:h-72 md:h-80 object-cover" src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>

<div className="lg:col-span-8 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 rounded-full ring-1 px-3 py-1 w-fit text-xs bg-[#0A6EE7]/10 ring-[#0A6EE7]/20 text-[#0A6EE7]">
<svg className="lucide lucide-globe-2 h-3.5 w-3.5" data-lucide="globe-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="12" cy="12"></circle></svg>
      กองทุนรวมต่างประเทศ
    </div>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-semibold text-[#0A6EE7]">ETF</h2>
<p className="mt-3 text-slate-700">
      ลงทุนใน ETF ต่างประเทศ ซึ่งเป็นกองทุนรวมที่ซื้อขายในตลาดหลักทรัพย์ทั่วโลก กระจายการลงทุนในหุ้น พันธบัตร
      และสินทรัพย์ทางเลือก เพื่อสร้างผลตอบแทนในระยะยาวและเสริมสภาพคล่องให้กับพอร์ตการลงทุน
    </p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide h-5 w-5 text-[#0A6EE7]" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className=""></path><path className=""></path></svg>
<span className="text-slate-700">เข้าถึงดัชนีชั้นนำ (Market Access): ลงทุนในดัชนีตลาดหุ้นสำคัญๆ ของโลกได้โดยตรง</span>
</li>
<li className="flex gap-3 pt-2 pr-3 pb-2 pl-0 items-start">
<svg className="lucide w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="earth-lock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(10, 110, 231)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><rect height="5" rx="1" width="8"></rect></svg>
<span className="text-slate-700">เกาะกระแสโลก (Megatrends): เลือกลงทุนตามธีมที่น่าสนใจ เช่น เทคโนโลยี AI, พลังงานสะอาด (Clean Energy),E‑commerce, Healthcare</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide h-5 w-5 text-[#0A6EE7]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span className="text-slate-700">กระจายการลงทุน ไม่ต้องคัดเลือกหุ้นเพียงตัวเดียว</span>
</li>
</ul>
</div>
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
