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

      document.addEventListener('DOMContentLoaded', () => {
        // Icon render (if using lucide runtime)
        try { if (window.lucide && lucide.createIcons) lucide.createIcons(); } catch (e) {}

        const termButtons = Array.from(document.querySelectorAll('#termSegment .term-btn'));
        const yieldButtons = Array.from(document.querySelectorAll('#yieldSegment .yield-btn'));
        const rows = Array.from(document.querySelectorAll('#bondRows tr[data-term]'));
        const emptyState = document.getElementById('emptyState');
        const resultSpan = document.getElementById('resultCount');
        const resetAll = document.getElementById('reset');
        const emptyReset = document.getElementById('emptyReset');

        // Fix count label container formatting
        const countContainer = resultSpan?.parentElement;
        const updateCountLabel = (n) => {
          if (!resultSpan) return;
          if (countContainer) {
            countContainer.innerHTML = 'ผลลัพธ์รายการ: <span id="resultCount" class="font-medium text-gray-900">' + n + '</span>';
          } else {
            resultSpan.textContent = String(n);
          }
        };

        let currentTerm = (termButtons.find(b => b.getAttribute('aria-pressed') === 'true')?.dataset.term) || 'all';
        let currentYield = (yieldButtons.find(b => b.getAttribute('aria-pressed') === 'true')?.dataset.yield) || 'all';

        const setActive = (group, activeBtn) => {
          group.forEach(btn => {
            const isActive = btn === activeBtn;
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');

            // Common base
            btn.classList.add('rounded-lg','text-xs','font-medium','transition','focus:outline-none');
            // Reset visual state
            btn.classList.remove('bg-white','ring-1','ring-gray-200','shadow-sm','text-gray-900');
            btn.classList.remove('text-gray-600','hover:text-[#0A6EE7]');
            // Apply state
            if (isActive) {
              btn.classList.add('px-3','py-1.5','bg-white','ring-1','ring-gray-200','shadow-sm','text-gray-900');
            } else {
              btn.classList.add('text-gray-600','hover:text-[#0A6EE7]');
              // Keep padding minimal style if missing
              if (![...btn.classList].some(c => /px-/.test))) btn.classList.add('px-3','py-1.5');
            }
          });
        };

        const parseYTM = (tr) => {
          const ytmCell = tr.querySelector('td:nth-child(6)');
          if (!ytmCell) return NaN;
          const m = ytmCell.textContent.trim().match(/-?\d+(\.\d+)?/);
          return m ? parseFloat(m[0]) : NaN;
        };

        const inYield = (ytm) => {
          if (isNaN(ytm)) return currentYield === 'all';
          switch (currentYield) {
            case 'lt2': return ytm < 2;
            case '2to3': return ytm >= 2 && ytm < 3;
            case '3to4': return ytm >= 3 && ytm < 4;
            case 'gt4': return ytm >= 4;
            default: return true;
          }
        };

        const applyFilters = () => {
          let shown = 0;
          rows.forEach(tr => {
            const termOk = currentTerm === 'all' || tr.dataset.term === currentTerm;
            const ytm = parseYTM(tr);
            const yieldOk = inYield(ytm);
            const shouldShow = termOk && yieldOk;
            tr.classList.toggle('hidden', !shouldShow);
            if (shouldShow) shown++;
          });
          updateCountLabel(shown);
          if (emptyState) emptyState.classList.toggle('hidden', shown !== 0);
        };

        termButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            currentTerm =.dataset.term;
            setActive(termButtons, btn);
            applyFilters();
          });
        });

        yieldButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            currentYield = btn.dataset.yield;
            setActive(yieldButtons, btn);
            applyFilters();
          });
        });

        const resetFilters = () => {
          const termAll = termButtons.find(b => b.dataset.term === 'all') || termButtons[0];
          const yAll = yieldButtons.find(b => b.dataset.yield === 'all') || yieldButtons[0];
          currentTerm = 'all';
          currentYield = 'all';
          setActive(termButtons, termAll);
          setActive(yieldButtons, yAll);
          applyFilters();
        };

        if (resetAll) resetAll.addEventListener('click', resetFilters);
        if (emptyReset) emptyReset.addEventListener('click', resetFilters);

        // Initial render
        setActive(termButtons, termButtons.find(b => b.getAttribute('aria-pressed') === 'true') || termButtons[0]);
        setActive(yieldButtons, yieldButtons.find(b => b.getAttribute('aria-pressed') === 'true') || yieldButtons[0]);
        applyFilters();
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
      <div className="max-w-7xl flex mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<img alt="Yuanta Securities logo" className="" src="https://www.yuanta.co.th/cms/uploads/Logo_aa5fd5a665.svg" style={{maxWidth: `100%`, height: `32px`}} />
<path fill="#003087"></path>
<path fill="#0070E0"></path>
<path fill="#003087"></path>
<path fill="#0070E0"></path>
<path fill="#001C64"></path>
<path fill="#0070E0"></path>
<path fill="#003087"></path>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="transition-colors hover:text-black text-slate-700" href="#bonds">ค่าธรรมเนียม</a>
<a className="transition-colors hover:text-black text-slate-700" href="#stocks">คู่มือนักลงทุน</a>
<a className="transition-colors hover:text-black text-slate-700" href="#etf">คำถามที่พบบ่อย</a>
</nav>
</div>
<meta charset="utf-8" />
<meta content="width=device-width, initial-scale=1" name="viewport" />
<title>Overseas Bonds · Apple — Product Detail</title>
<meta content="Apple Overseas Bonds — Product detail, filter short- and long-term, real-time search." name="description" />
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />


<div className="max-w-7xl sm:px-6 lg:px-8 md:py-10 mr-auto ml-auto pt-6 pr-5 pb-6 pl-5"><div className="flex items-center justify-between">
<div className="flex gap-3 items-center">
<nav aria-label="Breadcrumb" className="inline-flex items-center text-sm text-gray-600">
<a className="inline-flex items-center gap-1 hover:text-[#0A6EE7] transition" href="https://aura.build/share/RMH2BT7">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
      หน้าแรก
    </a>
<svg className="lucide lucide-chevron-right w-3.5 h-3.5 text-gray-400 mx-2" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<a className="hover:text-[#0A6EE7] transition" href="#">
      Oversea Bonds
    </a>
<svg className="lucide lucide-chevron-right w-3.5 h-3.5 text-gray-400 mx-2" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span aria-current="page" className="text-gray-900 font-medium tracking-tight">Apple</span>
</nav>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
</div>
</div><section className="mt-6">
<div className="rounded-lg bg-white ring-1 ring-gray-200 shadow-sm">
<div className="sm:p-6 lg:p-8 pt-5 pr-5 pb-5 pl-5">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="">
<h1 className="sm:text-3xl text-2xl font-semibold text-gray-900 tracking-tight"><span className="inline-flex items-center gap-2"><span className="h-8 w-8 ring-1 ring-gray-200 flex items-center justify-center bg-white rounded-lg overflow-hidden"><img alt="Apple" className="h-full w-full object-cover" src="https://s3-symbol-logo.tradingview.com/apple--600.png?w=800&q=80" style={{}} /></span>Apple Overseas Bonds</span></h1>
<p className="text-sm text-gray-600 mt-1.5">รายละเอียดตราสารหนี้ต่างประเทศของ Apple </p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
<svg className="lucide lucide-building-2 w-3.5 h-3.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg> Ticker: AAPL
                  </span>
<span className="inline-flex items-center gap-1.5 ring-1 ring-gray-200 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5"><svg className="lucide lucide-badge-dollar-sign w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `14px`, height: `14px`, color: `rgb(55, 65, 81)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>currency : USD</span>
<span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> Credit: AA+
                  </span>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
<div className="rounded-lg ring-1 ring-gray-200 bg-white px-3.5 py-2.5">
<div className="text-[11px] text-gray-500">Outstanding</div>
<div className="mt-0.5 text-sm font-semibold tracking-tight text-gray-900">$192.4B</div>
</div>
<div className="rounded-lg ring-1 ring-gray-200 bg-white px-3.5 py-2.5">
<div className="text-[11px] text-gray-500">Avg coupon</div>
<div className="mt-0.5 text-sm font-semibold tracking-tight text-gray-900">2.21%</div>
</div>
<div className="rounded-lg ring-1 ring-gray-200 bg-white px-3.5 py-2.5">
<div className="text-[11px] text-gray-500">WAM</div>
<div className="mt-0.5 text-sm font-semibold tracking-tight text-gray-900">6.8Y</div>
</div>
<div className="rounded-lg ring-1 ring-gray-200 bg-white px-3.5 py-2.5">
<div className="text-[11px] text-gray-500">Issuances</div>
<div className="mt-0.5 text-sm font-semibold tracking-tight text-gray-900">48</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-3 md:justify-start mt-6 justify-start">
<div className="flex items-center gap-2">
</div>
<div className="flex gap-2 items-center">
<div className="text-xs text-gray-500">เลือกช่วงอายุ:</div>
<div className="inline-flex ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-1 pb-1 pl-1 items-center" id="termSegment">
<button aria-pressed="false" className="term-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium text-gray-600 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" data-term="all" type="button">
      ทั้งหมด
    </button>
<button aria-pressed="true" className="term-btn px-3 py-1.5 rounded-lg text-xs font-medium text-gray-900 bg-white ring-1 ring-gray-200 shadow-sm transition focus:outline-none" data-term="short" type="button">
      ระยะสั้น (≤ 3Y)
    </button>
<button aria-pressed="false" className="term-btn px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:text-[#0A6EE7] transition focus:outline-none" data-term="long" type="button">
      ระยะยาว ({">"} 3Y)
    </button>
</div>
<div className="text-xs text-gray-500 pl-2 flex items-center gap-1">
    ผลตอบแทน:
  </div>
<div className="inline-flex ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-1 pb-1 pl-1 items-center" id="yieldSegment">
<button aria-pressed="true" className="yield-btn px-3 py-1.5 rounded-lg text-xs font-medium text-gray-900 bg-white ring-1 ring-gray-200 shadow-sm transition focus:outline-none" data-yield="all" type="button">
      ทั้งหมด
    </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium text-gray-600 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" data-yield="lt2" type="button">
      {"<"} 2%
    </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium text-gray-600 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" data-yield="2to3" type="button">
      2–3%
    </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium text-gray-600 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" data-yield="3to4" type="button">
      3–4%
    </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium text-gray-600 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" data-yield="gt4" type="button">
      {">"} 4%
    </button>
</div>
<button className="ml-1 inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#0A6EE7] px-2 py-1 rounded-lg hover:bg-gray-100 ring-1 ring-transparent hover:ring-gray-200 transition" id="resetAll">
<svg className="lucide lucide-rotate-ccw w-3.5 h-3.5" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> รีเซ็ต
  </button>
</div>
</div>
</div>
<div className="border-t border-gray-200"></div>

<div className="sm:p-6 lg:p-8 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-sm text-gray-600">
</div>
<div className="text-sm text-gray-600">ผลลัพธ์รายการ: 6</div>
</div>
<div className="overflow-hidden rounded-lg ring-1 ring-gray-200 bg-white">
<div className="overflow-x-auto"><table className="min-w-full text-left">
<thead className="bg-gray-50 border-b border-gray-200">
<tr className="">
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">Bond</th>
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">ISIN (เลขรหัสหลักทรัพย์สากล)</th><th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">Currency</th>
<th className="px-4 sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Coupon</th>
<th className="px- sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Price</th>
<th className="px-4 sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">YTM</th>
<th className="px-4 sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Maturity</th>
<th className="px-4 sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Duration</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200" id="bondRows">

<tr className="hover:bg-gray-50 transition" data-search="apple 1.375% notes 2026 usd us037833cf61 aa+" data-term="short">
<td className="sm:px-5 pt-3 pr-4 pb-3 pl-4">
<div className="text-sm font-medium text-gray-900 tracking-tight">Apple Inc1.37% 2026</div>
</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">US037833CF61</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">USD</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">1.375%</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">98.45</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">2.05%</td>
<td className="sm:px-5 text-sm text-gray-700 pt-3 pr-4 pb-3 pl-4">05/05/2026</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">1.7</td>
<td className="sm:px-5 text-right pt-3 pr-4 pb-3 pl-4">
</td>
</tr>
<tr className="hover:bg-gray-50 transition" data-search="apple 0.75% notes 2026 eur xs1234567890 aa+" data-term="short">
</tr>
<tr className="hover:bg-gray-50 transition" data-search="apple 1.65% notes 2027 usd us037833dg77 aa+" data-term="short">
<td className="sm:px-5 pt-3 pr-4 pb-3 pl-4">
<div className="text-sm font-medium text-gray-900 tracking-tight">Apple Inc 1.65% 2027</div>
</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">US037833DG77</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">USD</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray700">1.65%</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">96.20</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">2.40%</td>
<td className="sm:px-5 text-sm text-gray-700 pt-3 pr-4 pb-3 pl-4">15/08/2027</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">2.6</td>
<td className="px-4 sm:px-5 py-3 text-right">
</td>
</tr>
<tr className="hover:bg-gray-50 transition" data-search="apple 1.00% notes 2027 gbp gb001xyz123 aa+" data-term="short">
</tr>

<tr className="hover:bg-gray-50 transition" data-search="apple 2.40% notes 2029 usd us037833dn25 aa+" data-term="long">
<td className="px-4 sm:px-5 py-3">
<div className="text-sm font-medium text-gray-900 tracking-tight">Apple Inc 2.40% 2029</div>
</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">US037833DN25</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">USD</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">2.40%</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">94.75</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">3.10%</td>
<td className="sm:px-5 text-sm text-gray-700 pt-3 pr-4 pb-3 pl-4">09/12/2029</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">3.9</td>
<td className="px-4 sm:px-5 py-3 text-right">
</td>
</tr>
<tr className="hover:bg-gray-50 transition" data-search="apple 3.05% notes 2032 usd us037833du16 aa+" data-term="long">
<td className="sm:px-5 pt-3 pr-4 pb-3 pl-4">
<div className="text-sm font-medium text-gray-900 tracking-tight">Apple Inc 3.05% 2032</div>
</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">US037833DU16</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">USD</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">3.05%</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">93.60</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">3.45%</td>
<td className="sm:px-5 text-sm text-gray-700 pt-3 pr-4 pb-3 pl-4">05/06/2032</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">6.1</td>
<td className="px-4 sm:px-5 py-3 text-right">
</td>
</tr>
<tr className="hover:bg-gray-50 transition" data-search="apple 2.00% notes 2031 eur xs0987654321 aa+" data-term="long">
</tr>
<tr className="hover:bg-gray-50 transition" data-search="apple 4.45% notes 2035 usd us037833dv98 aa+" data-term="long">
<td className="px-4 sm:px-5 py-3">
<div className="text-sm font-medium text-gray-900 tracking-tight">Apple Inc 4.45% 2035</div>
</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">US037833DV98</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">USD</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">4.45%</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">101.20</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">4.35%</td>
<td className="sm:px-5 text-sm text-gray-700 pt-3 pr-4 pb-3 pl-4">01/02/2035</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">8.7</td>
<td className="px-4 sm:px-5 py-3 text-right">
</td>
</tr>
<tr className="hover:bg-gray-50 transition" data-search="apple 4.65% notes 2041 usd us037833dw70 aa+" data-term="long">
<td className="sm:px-5 pt-3 pr-4 pb-3 pl-4">
<div className="text-sm font-medium text-gray-900 tracking-tight">Apple Inc 4.65% 2041</div>
</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">US037833DW70</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">USD</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">4.65%</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">99.10</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">4.70%</td>
<td className="sm:px-5 text-sm text-gray-700 pt-3 pr-4 pb-3 pl-4">15/12/2041</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">12.5</td>
<td className="px-4 sm:px-5 py-3 text-right">
</td>
</tr>
<tr className="hover:bg-gray-50 transition" data-search="apple 1.00% notes 2030 jpy jp000aapl001 aa+" data-term="long">
</tr>
</tbody>
</table></div>

<div className="hidden px-6 py-10 sm:py-14 text-center" id="emptyState">
<div className="mx-auto max-w-md">
<div className="mx-auto w-12 h-12 rounded-full bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center">
<svg className="lucide lucide-search-x w-6 h-6 text-gray-500" data-lucide="search-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><circle cx="11" cy="11"></circle><path></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">ไม่พบบอนด์ที่ตรงกัน</h3>
<p className="mt-1.5 text-sm text-gray-600">ลองล้างตัวกรองหรือปรับคำค้นหาใหม่</p>
<div className="mt-4">
<button className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-[#0A6EE7] hover:bg-gray-100 ring-1 ring-gray-200 transition" id="emptyReset">
                      ล้างตัวกรอง
                      <svg className="lucide lucide-rotate-ccw w-4 h-4" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>
</div>
</div>

</div>
</div>
</section><section className="mt-6">
<div className="rounded-lg bg-white ring-1 ring-gray-200 shadow-sm">
<div className="sm:p-6 lg:p-8 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-stars w-5 h-5 text-gray-700" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Recommended bond</h2>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="ring-1 ring-gray-200 hover:bg-gray-50 transition bg-white rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 flex ring-1 ring-black/10 text-white bg-gray-900 rounded-lg items-center justify-center">
<img alt="Meta logo" className="h-full w-full bg-stone-50 object-contain" loading="lazy" src="https://static.cdnlogo.com/logos/m/59/meta.svg?w=800&q=80" />
</div>
<div className="">
<div className="text-sm font-medium tracking-tight text-gray-900">Meta Platforms</div>
<div className="text-[12px] text-gray-500">Ticker: META</div>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200">AA-</span>
</div>
<div className="mt-3 flex-center gap-2 text-xs text-gray-600">
<span className="inline-flex items-center gap-1 ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-badge-dollar-sign w-3.5 h-3.5" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> USD
                  </span>
<span className="inline-flex items-center gap-1 ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-line-chart w-3.5 h-3.5" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> Y ~ 3.20%
                  </span>
<span className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 ring-1 ring-gray-200">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg> 2029–2032
                  </span>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:text-[#0A6EE7] hover:bg-gray-100 ring-1 ring-gray-200 transition">
                    ดูรายละเอียด
                    
                  </button>
</div>
</div><div className="ring-1 ring-gray-200 hover:bg-gray-50 transition bg-white rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start justify-between">
<div className="flex gap-2.5 items-center">
<div className="h-8 w-8 flex ring-1 ring-black/10 text-white bg-gray-900 rounded-lg items-center justify-center">
<img alt="NVIDIA logo" className="h-full w-full object-contain bg-stone-50" loading="lazy" src="https://www.vectorlogo.zone/logos/nvidia/nvidia-icon.svg" />
</div>
<div className="">
<div className="text-sm font-medium text-gray-900 tracking-tight">NVIDIA Corporation</div>
<div className="text-[12px] text-gray-500">Ticker: NVDA</div>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[11px] ring-1 ring-emerald-200 font-medium text-emerald-700 bg-emerald-50 rounded pt-0.5 pr-2 pb-0.5 pl-2">A</span>
</div>
<div className="mt-3 flex-center gap-2 text-xs text-gray-600">
<span className="inline-flex items-center gap-1 ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-badge-dollar-sign w-3.5 h-3.5" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> USD
                  </span>
<span className="inline-flex items-center gap-1 ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-line-chart w-3.5 h-3.5" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> Y ~ 3.20%
                  </span>
<span className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 ring-1 ring-gray-200">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg> 2029–2032
                  </span>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:text-[#0A6EE7] hover:bg-gray-100 ring-1 ring-gray-200 transition">
                    ดูรายละเอียด
                  </button>
</div>
</div>

<div className="ring-1 ring-gray-200 hover:bg-gray-50 transition bg-white rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 flex ring-1 ring-black/10 text-white bg-gray-900 rounded-lg items-center justify-center">
<img alt="Microsoft logo" className="h-full w-full object-contain bg-stone-50" loading="lazy" src="https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" />
</div>
<div className="">
<div className="text-sm font-medium tracking-tight text-gray-900">Microsoft Corporation</div>
<div className="text-[12px] text-gray-500">Ticker: MSFT</div>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200">AA+</span>
</div>
<div className="mt-3 flex-center gap-2 text-xs text-gray-600">
<span className="inline-flex items-center gap-1 ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-badge-dollar-sign w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> USD
                  </span>
<span className="inline-flex items-center gap-1 ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-line-chart w-3.5 h3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> Y ~ 3.00%
                  </span>
<span className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 ring-1 ring-gray-200">
<svg className="lucide lucide-calendar w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg> 2028–2034
                  </span>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:text-[#0A6EE7] hover:bg-gray-100 ring-1 ring-gray-200 transition">
                    ดูรายละเอียด
                  </button>
</div>
</div>
</div>

<div className="mt-6">
<div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="hidden md:block">
<img alt="Investment consultation" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&q=80" />
</div>
<div className="p-5 sm:p-6 lg:p-8">
<div className="text-xs text-gray-500"></div>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight mt-1">สนใจติดต่อลงทุน Overseas Bonds</h3>
<form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="sm:col-span-1">
<label className="block text-[12px] text-gray-600 pb-1.5">ชื่อ*</label>
<input className="w-full rounded-lg ring-1 ring-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-gray-300" placeholder="เช่น กิตติ" required type="text" />
</div>
<div className="sm:col-span-1">
<label className="block text-[12px] text-gray-600 pb-1.5">นามสกุล*</label>
<input className="w-full rounded-lg ring-1 ring-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-gray-300" placeholder="เช่น วัฒนกูล" required type="text" />
</div>
<div className="sm:col-span-1">
<label className="block text-[12px] text-gray-600 pb-1.5">เบอร์โทรศัพท์มือถือ*</label>
<input className="w-full rounded-lg ring-1 ring-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-gray-300" inputmode="tel" placeholder="08x-xxx-xxxx" required type="tel" />
</div>
<div className="sm:col-span-1">
<label className="block text-[12px] text-gray-600 pb-1.5">อีเมล*</label>
<input className="w-full rounded-lg ring-1 ring-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-gray-300" placeholder="you@example.com" required type="email" />
</div>
<div className="sm:col-span-2">
<label className="block text-[12px] text-gray-600 pb-1.5">ข้อความเพิ่มเติม (ถ้ามี)</label>
<textarea className="w-full rounded-lg ring-1 ring-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-gray-300" placeholder="ระบุช่วงเวลาที่สะดวก หรือตราสารที่สนใจ" rows="3"></textarea>
</div>
<div className="sm:col-span-2">
<p className="text-[12px] text-gray-600">เพื่อให้ท่านทราบวิธีและกระบวนการในการจัดเก็บและใช้ข้อมูล สามารถศึกษารายละเอียดแบบแจ้งเกี่ยวกับข้อมูลส่วนบุคคลได้ที่ <a className="text-gray-900 hover:text-[#0A6EE7] underline underline-offset-2" href="#">Privacy Notice</a></p>
</div>
<div className="sm:col-span-2 mt-1">
<button className="inline-flex hover:bg-gray-800 transition w-full sm:w-auto text-sm font-medium text-white bg-[#0A6EE7] rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center" type="submit">
                          ลงทะเบียน
                        </button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="disclaimer-title" className="mt-6">
<div className="rounded-lg bg-white ring-1 ring-gray-200 shadow-sm">
<div className="sm:p-6 lg:p-8 p-5">
<h2 className="text-base font-semibold tracking-tight text-gray-900" id="disclaimer-title">ข้อจำกัดความรับผิดและคำเตือนความเสี่ยง</h2>
<p className="mt-2 text-sm text-gray-600">
              ข้อมูลนี้จัดทำขึ้นเพื่อวัตถุประสงค์ในการให้ข้อมูลเท่านั้น ไม่ใช่คำแนะนำการลงทุน ผลตอบแทนในอดีตไม่ใช่สิ่งที่ยืนยันผลตอบแทนในอนาคต
              การลงทุนในตราสารหนี้ต่างประเทศมีความเสี่ยงจากอัตราแลกเปลี่ยน อัตราดอกเบี้ย และความเสี่ยงของผู้ออกตราสาร กรุณาศึกษาข้อมูลและปรึกษาที่ปรึกษาการลงทุนก่อนตัดสินใจ
            </p>
</div>
</div>
</section>

<footer className="mt-10 border-t border-gray-200 bg-white/60 backdrop-blur">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-5 pb-8 pl-5">
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
</footer>
</div>



    </>
  );
}
