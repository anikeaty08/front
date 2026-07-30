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

      document.addEventListenerDOMContentLoaded', () => {
        // Icons
        if (window.lucide) lucide.createIcons();

        const searchInput = document.getElementById('searchInput');
        const clearSearch = document.getElementById('clearSearch');
        const resetAll = document.getElementById('resetAll');
        const emptyReset = document.getElementById('emptyReset');
        const rows = Array.from(document.querySelectorAll('#bondRows tr'));
        const termButtons = Array.from(document.querySelectorAll('#termSegment .term-btn'));
        const resultCount = document.getElementById('resultCount');
        const emptyState = document.getElementById('emptyState');

        let activeTerm = 'short'; // default

        // Keyboard shortcut for search
        document.addEventListener('keydown', (e) => {
          if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
            e.preventDefault();
            searchInput.focus();
          }
        });

        function setTerm(term) {
          activeTerm = term;
          termButtons.forEach(btn => {
            const isActive = btn.dataset.term === term;
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            btn.classList.toggle('bg-white', isActive);
            btn.classList.toggle('ring-1', isActive);
            btn.classList.toggle('ring-gray-200', isActive);
            btn.classList.toggle('shadow-sm', isActive);
            btn.classList.toggle('text-gray-900', isActive);
            btn.classList.toggle('text-gray-600', !isActive);
          });
          applyFilter();
        }

        function applyFilter() {
          const q = searchInput.value.trim().toLowerCase();
          let visible = 0;

          rows.forEach(row => {
            const matchesTerm = row.dataset.term === activeTerm;
            const matchesQuery = q.length === 0 || (row.dataset.search || '').includes(q);
            const show = matchesTerm && matchesQuery;
            row.style.display = show ? '' : 'none';
            if (show) visible++;
          });

          resultCount.textContent = visible;
          emptyState.classList.toggle('hidden', visible !== 0);
        }

        function clearQuery() {
          searchInput.value = '';
          clearSearch.classList.add('hidden');
          applyFilter();
        }

        // Events
        termButtons.forEach(btn => {
          btn.addEventListener('click', () => setTerm(btn.dataset.term));
        });

        searchInput.addEventListener('input', () => {
          const hasValue = searchInput.value.length > 0;
          clearSearch.classList.toggle('hidden', !hasValue);
          applyFilter();
        });

        clearSearch.addEventListener('click', clearQuery);
        resetAll.addEventListener('click', () => {
          clearQuery();
          setTerm('short');
        });
        emptyReset.addEventListener('click', () => {
          clearQuery();
          setTerm('short');
          searchInput.focus();
        });

        // Initial render
        applyFilter();
      });
    
}

{

      document.addEventListener('DOMContentLoaded', () => {
        try { if (window.lucide) lucide.createIcons(); } catch (e) {}
        const leadForm = document.getElementById('leadForm');
        const leadSuccess = document.getElementById('leadSuccess');

        if (leadForm) {
          leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            leadSuccess.classList.remove('hidden');
            leadForm.reset();
          });
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
      
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-6 md:py-10">

<div className="flex items-center justify-between">
<div className="flex gap-3 items-center" id="aura-emf51n0ly">
<nav aria-label="Breadcrumb" className="inline-flex items-center text-sm text-gray-600">
<a className="inline-flex items-center gap-1 hover:text-[#0A6EE7] transition" href="https://aura.build/share/RMH2BT7" id="aura-emf51rb4e">
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
</div>

<section className="mt-6">
<div className="rounded-lg bg-white ring-1 ring-gray-200 shadow-sm">
<div className="sm:p-6 lg:p-8 pt-5 pr-5 pb-5 pl-5">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Apple Overseas Bonds</h1>
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

<div className="flex flex-col md:flex-row md:items-center gap-3 mt-6 justify-start md:justify-start">
<div className="flex items-center gap-2">
</div>
<div className="flex items-center gap-2">
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
<div className="text-sm text-gray-600">ผลลัพธ์รายการ:1<span className="font-medium text-gray-900" id="resultCount">0</span></div>
</div>
<div className="overflow-hidden rounded-lg ring-1 ring-gray-200 bg-white">
<div className="overflow-x-auto">
<table className="min-w-full text-left">
<thead className="bg-gray-50 border-b border-gray-200">
<tr className="">
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">Bond</th>
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">ISIN (เลขรหัสหลักทรัพย์สากล)</th><th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">Currency</th>
<th className="px-4 sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Coupon</th>
<th className="px-4 sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Price</th>
<th className="px-4 sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">YTM</th>
<th className="px-4 sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Maturity</th>
<th className="px-4 sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Duration</th>
<th className="px-4 sm:px-5 py-3"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200" id="bondRows">

<tr className="hover:bg-gray-50 transition" data-search="apple 1.375% notes 2026 usd us037833cf61 aa+" data-term="short">
<td className="sm:px-5 pt-3 pr-4 pb-3 pl-4">
<div className="text-sm font-medium text-gray-900 tracking-tight">Apple Inc1.375% 2026</div>
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
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">1.65%</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">96.20</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">2.40%</td>
<td className="sm:px-5 text-sm text-gray-700 pt-3 pr-4 pb-3 pl-4">15/08/2027</td>
<td className="px-4 sm:px-5 py-3 text-sm text-gray-700">2.6</td>
<td className="px-4 sm:px-5 py-3 text-right">
</td>
</tr>
<tr className="hover:bg-gray-50 transition" data-search="apple 1.00% notes 2027 gbp gb00a1xyz123 aa+" data-term="short">
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
</table>
</div>

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
</section>

<section className="mt-6">
<div className="rounded-lg bg-white ring-1 ring-gray-200 shadow-sm">
<div className="p-5 sm:p-6 lg:p-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-stars w-5 h-5 text-gray-700" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Recommended bond</h2>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="rounded-lg ring-1 ring-gray-200 bg-white p-4 hover:bg-gray-50 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 rounded-lg bg-gray-900 text-white flex items-center justify-center ring-1 ring-black/10">
<span className="text-[13px] font-semibold tracking-tight">ME</span>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight text-gray-900">Meta Platforms</div>
<div className="text-[12px] text-gray-500">Ticker: META</div>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200">AA-</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
<span className="inline-flex items-center gap-1 ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-badge-dollar-sign w-3.5 h-3.5" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> USD
                  </span>
<span className="inline-flex items-center gap-1 ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-line-chart w-3.5 h-3.5" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> YTM ~ 3.20%
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

<div className="rounded-lg ring-1 ring-gray-200 bg-white p-4 hover:bg-gray-50 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 rounded-lg bg-gray-900 text-white flex items-center justify-center ring-1 ring-black/10">
<span className="text-[13px] font-semibold tracking-tight">NV</span>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-gray-900">NVIDIA Corporation</div>
<div className="text-[12px] text-gray-500">Ticker: NVDA</div>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200">AA-</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
<span className="inline-flex items-center gap-1 ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-badge-dollar-sign w-3.5 h-3.5" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> USD
                  </span>
<span className="inline-flex items-center gap-1 ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-line-chart w-3.5 h-3.5" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> YTM ~ 3.00%
                  </span>
<span className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 ring-1 ring-gray-200">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg> 2028–2031
                  </span>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="inline-flex gap-1.5 hover:text-[#0A6EE7] hover:bg-gray-100 ring-1 ring-gray-200 transition text-xs font-medium text-gray-700 rounded-lg pt-1.5 pr-2.5 pb-1.5 pl-2.5 items-center">
                    ดูรายละเอียด
                    
                  </button>
</div>
</div>

<div className="rounded-lg ring-1 ring-gray-200 bg-white p-4 hover:bg-gray-50 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 rounded-lg bg-gray-900 text-white flex items-center justify-center ring-1 ring-black/10">
<span className="text-[13px] font-semibold tracking-tight">JNJ</span>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight text-gray-900">Johnson & Johnson</div>
<div className="text-[12px] text-gray-500">Ticker: JNJ</div>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200">AAA</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
<span className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 ring-1 ring-gray-200">
<svg className="lucide lucide-badge-dollar-sign w-3.5 h-3.5" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> USD
                  </span>
<span className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 ring-1 ring-gray-200">
<svg className="lucide lucide-line-chart w-3.5 h-3.5" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> YTM ~ 2.80%
                  </span>
<span className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 ring-1 ring-gray-200">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg> 2029–2034
                  </span>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:text-[#0A6EE7] hover:bg-gray-100 ring-1 ring-gray-200 transition">
                    ดูรายละเอียด
                    
                  </button>
</div>
</div>
</div>
<p className="mt-4 text-[11px] text-gray-500">อัตรา YTM เป็นตัวอย่างเพื่อการนำเสนอเท่านั้น</p>
</div>
</div>
</section>

<section className="mt-6">
<div className="rounded-lg bg-white ring-1 ring-gray-200 shadow-sm">
<div className="p-5 sm:p-6 lg:p-8">
<div className="flex items-center gap-2">
<svg className="lucide lucide-mail-plus w-5 h-5 text-gray-700" data-lucide="mail-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">ติดต่อ IC</h2>
</div>
<p className="mt-1.5 text-sm text-gray-600">ฝากข้อมูลติดต่อเพื่อให้ที่ปรึกษาการลงทุน (IC) ติดต่อกลับ</p>
<form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3" id="leadForm">
<div className="sm:col-span-1">
<label className="block text-xs text-gray-600 mb-1" htmlFor="leadName">ชื่อ-นามสกุล</label>
<input className="w-full h-10 px-3 rounded-lg bg-white ring-1 ring-gray-200 focus:ring-2 focus:ring-[#0A6EE7]/80 focus:outline-none text-sm placeholder:text-gray-400 transition" id="leadName" name="name" placeholder="กรอกชื่อ-นามสกุล" required type="text" />
</div>
<div className="sm:col-span-1">
<label className="block text-xs text-gray-600 mb-1" htmlFor="leadPhone">เบอร์โทรศัพท์</label>
<input className="w-full h-10 px-3 rounded-lg bg-white ring-1 ring-gray-200 focus:ring-2 focus:ring-[#0A6EE7]/80 focus:outline-none text-sm placeholder:text-gray-400 transition" id="leadPhone" inputmode="tel" name="phone" placeholder="08x-xxx-xxxx" required type="tel" />
</div>
<div className="sm:col-span-1">
<label className="block text-xs text-gray-600 mb-1" htmlFor="leadEmail">อีเมล (ไม่บังคับ)</label>
<input className="w-full h-10 px-3 rounded-lg bg-white ring-1 ring-gray-200 focus:ring-2 focus:ring-[#0A6EE7]/80 focus:outline-none text-sm placeholder:text-gray-400 transition" id="leadEmail" name="email" placeholder="name@example.com" type="email" />
</div>
<div className="sm:col-span-1">
<label className="block text-xs text-gray-600 mb-1" htmlFor="leadTime">ช่วงเวลาที่สะดวก (ไม่บังคับ)</label>
<input className="w-full h-10 px-3 rounded-lg bg-white ring-1 ring-gray-200 focus:ring-2 focus:ring-[#0A6EE7]/80 focus:outline-none text-sm placeholder:text-gray-400 transition" id="leadTime" name="time" placeholder="เช้า / บ่าย / เย็น" type="text" />
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-gray-600 mb-1" htmlFor="leadNote">ข้อความเพิ่มเติม (ไม่บังคับ)</label>
<textarea className="w-full px-3 py-2 rounded-lg bg-white ring-1 ring-gray-200 focus:ring-2 focus:ring-[#0A6EE7]/80 focus:outline-none text-sm placeholder:text-gray-400 transition" id="leadNote" name="note" placeholder="ต้องการให้ช่วยด้านใด" rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex items-center justify-between">
<p className="text-[11px] text-gray-500">เราจะติดต่อกลับภายใน 1 วันทำการ</p>
<button className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-white bg-[#0A6EE7] hover:bg-[#0A6EE7]/90 ring-1 ring-[#0A6EE7]/20 transition" type="submit">
                  ส่งคำขอ
                  <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</form>
<div className="hidden mt-4 rounded-lg bg-emerald-50 ring-1 ring-emerald-200 px-3.5 py-2.5 text-sm text-emerald-800" id="leadSuccess">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
                ส่งคำขอเรียบร้อย ทีม IC จะติดต่อกลับโดยเร็ว
              </div>
</div>
</div>
</div>
</section>
</div>




    </>
  );
}
