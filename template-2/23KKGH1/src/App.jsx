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
        const root = document.getElementById('aura-emfastzls');
        if (!root) return;

        const yieldButtons = Array.from(root.querySelectorAll('#yieldSegment .yield-btn'));
        const termButtons = Array.from(root.querySelectorAll('#termSegment .term-btn'));
        const rows = Array.from(document.querySelectorAll('#bondRows tr'));
        const emptyState = document.getElementById('emptyState');

        const getActive = (btns, key) => {
          const active = btns.find(b => b.getAttribute('aria-pressed') === 'true');
          return active ? active.dataset[key] : 'all';
        };

        const state = {
          ytm: getActive(yieldButtons, 'yield'),
          dur: getActive(termButtons, 'term')
        };

        const setActive = (group, activeBtn) => {
          group.forEachbtn => {
            const isActive = btn === activeBtn;
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            btn.classList.remove('bg-white', 'ring-1', 'ring-gray-200', 'shadow-sm', 'text-gray-900', 'text-gray-600');
            btn.classList.add('px-3', 'py-1.5', 'rounded-lg', 'text-xs', 'font-medium', 'transition', 'focus:outline-none');
            if (isActive) {
              btn.classList.add('bg-white', 'ring-1', 'ring-gray-200', 'shadow-sm', 'text-gray-900');
            } else {
              btn.classList.add('text-gray-600');
            }
          });
        ;

        const parseNum = (td) => {
          if (!td) return NaN;
          const m = td.textContent.replace(/,/g, '').match(/-?\d+(\.\d+)?/);
          return m ? parseFloat(m[0]) : NaN;
        };

        const applyFilters = () => {
          let shown = 0;
          rows.forEachtr => {
            const tds = tr.querySelectorAll('td');
            if (!tds || tds.length === 0) { tr.classList.add('hidden'); return; }

            const ytm = parseNum(tds[5]);       // 6th column: YTM
            const duration = parseNum(tds[7]);  // 8th column: Duration

            let ytmOk = true;
            switch (state.ytm) {
              case 'lt2': ytmOk = !isNaN(ytm) && ytm < 2; break;
              case '2to3': ytmOk = !isNaN(ytm) && ytm >= 2 && ytm < 3; break;
              case '3to4': ytmOk = !isNaN(ytm) && ytm >= 3 && ytm < 4; break;
              case 'gt4': ytmOk = !isNaN(ytm) && ytm >= 4; break;
              default: ytmOk = true;
            }

            let durOk = true;
            switch (state.dur) {
              case 'short': durOk = !isNaN(duration) && duration <= 3; break;
              case 'long': durOk = !isNaN(duration) && duration > 3; break;
              default: durOk = true;
            }

            const show = ytmOk && durOk;
            tr.classList.toggle('hidden', !show);
            if (show) shown++;
          };

          if (emptyState) emptyState.classList.toggle('hidden', shown !== 0);
        };

        // Bind events
        yieldButtons.forEachbtn => {
          btn.addEventListener('click', () => {
            state.ytm = btn.dataset.yield || 'all';
            setActive(yieldButtons, btn);
            applyFilters();
          });
        };

        termButtons.forEachbtn => {
          btn.addEventListener('click', () => {
            state.dur = btn.dataset.term || 'all';
            setActive(termButtons, btn);
            applyFilters();
          });
        };

        const resetBtn = root.querySelector('#resetAll');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            const yAll = yieldButtons.find(b => (b.dataset.yield || '') === 'all') || yieldButtons[0];
            const dAll = termButtons.find(b => (b.dataset.term || '') === 'all') || termButtons[0];
            state.ytm = 'all';
            state.dur = 'all';
            setActive(yieldButtons, yAll);
            setActive(termButtons, dAll);
            applyFilters();
          });
        }

        // Initialize
        const initY = yieldButtons.find(b => b.getAttribute('aria-pressed') === 'true') || yieldButtons[0];
        const initD = termButtons.find(b => b.getAttribute('aria-pressed') === 'true') || termButtons[0];
        setActive(yieldButtons, initY);
        setActive(termButtons, initD);
        state.ytm = initY?.dataset.yield || 'all';
        state.dur = initD?.dataset.term || 'all';
        applyFilters();
      ();
    
}

{

    (function () {
      const root = document.getElementById('aura-emfk2ijp9');
      if (!root) return;
      const toCSV = (arr) => arr.mapv => {
        const s = String(v ?? '').replace(/"/g, '""');"
        return s.includes(',') || s.includes('\n') ? `"${s}"` : s;
      }).join(',');
      const headers = ['Bond','ISIN','Currency','Coupon Rate','Price','YTM','Maturity','Duration'];
      const downloadRow = (tr) => {
        const tds = tr.querySelectorAll('td');
        if (!tds || tds.length < 8) return;
        const row = [
          tds[0]?.innerText.trim(),
          tds[1]?.innerText.trim(),
          tds[2]?.innerText.trim(),
          tds[3]?.innerText.trim(),
          tds[4]?.innerText.trim(),
          tds[5]?.innerText.trim(),
          tds[6]?.innerText.trim(),
          tds[7]?.innerText.trim()
        ];
        const csv = [toCSV(headers), toCSV(row)].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const a = document.createElement('a');
        const isin = (row[1] || 'bond').replace(/\s+/g, '');
        a.href = URL.createObjectURL(blob);
        a.download = `${isin}.csv`;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          URL.revokeObjectURL(a.href);
          a.remove();
        }, 0);
      };
      root.querySelectorAll('.bond-dl').forEachbtn => {
        btn.addEventListener('click', (e) => {
          const tr = e.currentTarget.closest('tr');
          if (tr) downloadRow(tr);
        });
      };
    ();
  
}

{

    (function () {
      const root = document.getElementById('aura-emfax0mud');
      if (!root) return;
      const boxes = Array.from(root.querySelectorAll('input[type="checkbox"]'));
      const counter = root.querySelector('#proj-selected-count');
      const update = () => {
        const n = boxes.reduce((acc, b) => acc + (b.checked ? 1 : 0), 0);
        if (counter) counter.textContent = String(n);
      };
      boxes.forEach(b => b.addEventListener('change', update));
      update();
      try { if (window.lucide && lucide.createIcons) lucide.createIcons(); } catch (e) {}
    })();
  
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
            countContainer.innerHTML = 'ผลลัพธ์รายการ: <span id="resultCount" + class="font-medium text-gray-900">' + n + '</span>';
          } else {
            resultSpan.textContent = String(n);
          }
        };

        let currentTerm = (termButtons.find(b => b.getAttribute('aria-pressed') === 'true')?.dataset.term) || 'all';
        let currentYield = (yieldButtons.find(b => b.getAttribute('aria-pressed') === 'true')?.dataset.yield) || 'all';

        const setActive = (group, activeBtn) => {
          group.forEachbtn => {
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
              if (![...btn.classList].some(c => /px-/.test(c))) btn.classList.add('px-3','py-1.5');
            }
          });
        ;

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
          rows.forEachtr => {
            const termOk = currentTerm === 'all' || tr.dataset.term === currentTerm;
            const ytm = parseYTM(tr);
            const yieldOk = inYield(ytm);
            const shouldShow = termOk && yieldOk;
            tr.classList.toggle('hidden', !shouldShow);
            if (shouldShow) shown++;
          };
          updateCountLabel(shown);
          if (emptyState) emptyState.classList.toggle('hidden', shown !== 0);
        };

        termButtons.forEachbtn => {
          btn.addEventListener('click', () => {
            currentTerm =.dataset.term;
            setActive(termButtons, btn);
            applyFilters();
          });
        };

        yieldButtons.forEachbtn => {
          btn.addEventListener('click', () => {
            currentYield = btn.dataset.yield;
            setActive(yieldButtons, btn);
            applyFilters();
          });
        };

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
      ;
    
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
<img alt="Yuanta Securities logo" className="" src="https://www.yuanta.co.th/cms/uploads/Logo_aa5fd5a665.svg" style={{'maxWidth': `100%`, 'height': `32px`}} />
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
<a className="inline-flex items-center gap-1 hover:text-[#0A6EE7] transition" href="https://aura.build/share/7VGWCTW">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
      หน้าแรก
    </a>
<svg className="lucide lucide-chevron-right mr-2 ml-2 w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'width': `14px`, 'height': `14px`, 'color': `rgb(156, 163, 175)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className=""></path></svg>
<span aria-current="page" className="font-medium text-gray-900 tracking-tight">Oversea Bonds (Apple)</span>
</nav>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
</div>
</div><section className="mt-6">
<div className="ring-1 ring-gray-200 bg-white rounded-lg shadow-sm">
<div className="sm:p-6 lg:p-8 relative overflow-hidden pt-8 pr-5 pb-8 pl-5" style={{'backgroundImage': `linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.72) 65%, rgba(255,255,255,0.6) 100%), url('https://imonkey-blog.imgix.net/blog/wp-content/uploads/2023/09/19155253/AAPL-insidermonkey-1695153171712.jpg?auto=format&fit=clip&expires=1788739200&width=830&height=465')`, 'backgroundSize': `cover`, 'backgroundPosition': `center`, 'borderRadius': `0.5rem`}}>

<div className="absolute top-4 right-4 flex flex-wrap gap-2 z-10 items-center justify-end">
<span className="inline-flex items-center gap-1.5 ring-1 ring-gray-200 text-xs font-medium text-gray-700 bg-white/80 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur">
<span className="h-5 w-5 rounded-full ring-1 ring-[#0A6EE7]/20 bg-[#0A6EE7]/10 text-[#0A6EE7] flex items-center justify-center">
<svg className="lucide lucide-building-2 w-3.5 h-3.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className=""></path><path></path><path className=""></path><path></path><path></path><path></path><path></path></svg>
</span>
      Ticker : AAPL
    </span>
<span className="inline-flex items-center gap-1.5 ring-1 ring-gray-200 text-xs font-medium text-gray-700 bg-white/80 backdrop-blur rounded-lg px-2.5 py-1">
<span className="h-5 w-5 rounded-full ring-1 ring-[#0A6EE7]/20 bg-[#0A6EE7]/10 text-[#0A6EE7] flex items-center justify-center">
<svg className="lucide lucide-badge-dollar-sign w-3.5 h-3.5" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className=""></path><path className=""></path><path className=""></path></svg>
</span>
      Currency : USD
    </span>
<span className="inline-flex items-center gap-1.5 ring-1 ring-gray-200 text-xs font-medium text-gray-700 bg-white/80 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur"><span className="h-5 w-5 ring-1 ring-[#0A6EE7]/20 flex items-center justify-center text-[#0A6EE7] bg-[#0A6EE7]/10 rounded-full">
<svg className="lucide lucide-shield-check w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{'width': `14px`, 'height': `14px`, 'color': `rgb(10, 110, 231)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className=""></path><path className=""></path></svg>
</span>Credit Rating : S&P: AA+, Moody’s: Aaa, Fitch: AAA</span>
</div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="">
<h1 className="sm:text-3xl text-2xl font-semibold text-gray-900 tracking-tight"><span className="inline-flex items-center gap-2"><span className="h-8 w-8 ring-1 ring-gray-200 flex items-center justify-center bg-white rounded-lg overflow-hidden"><img alt="Apple" className="h-full w-full object-cover" src="https://s3-symbol-logo.tradingview.com/apple--600.png?w=800&q=80" style={{}} /></span>Apple Overseas Bonds</span></h1>
<div className="mt-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
<p className="text-sm text-gray-600">รายละเอียดตราสารหนี้ต่างประเทศของ Apple 
        </p>

<div className="flex flex-wrap items-center gap-2 sm:justify-end hidden"></div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-3 md:justify-start mt-6 justify-start">
<div className="flex items-center gap-2"></div>
<div className="flex gap-2 items-center bg-white/60 backdrop-blur ring-1 ring-gray-200 rounded-lg px-2 py-1">
<div className="flex gap-1 text-xs text-gray-500 pl-2 items-center">ผลตอบแทนโดยประมาณ :</div>
<div className="inline-flex ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-1 pb-1 pl-1 items-center" id="yieldSegment">
<button aria-pressed="true" className="yield-btn px-3 py-1.5 rounded-lg text-xs font-medium transition focus:outline-none bg-white ring-1 ring-gray-200 shadow-sm text-gray-900" data-yield="all" type="button">
          ทั้งหมด
        </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 px-3 py-1.5 text-gray-600" data-yield="lt2" type="button">
          {"<"} 2%
        </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 px-3 py-1.5 text-gray-600" data-yield="2to3" type="button">
          2–3%
        </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 px-3 py-1.5 text-gray-600" data-yield="3to4" type="button">
          3–4%
        </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 px-3 py-1.5 text-gray-600" data-yield="gt4" type="button">
          {">"} 4%
        </button>
</div>
<div className="text-xs text-gray-500">ระยะเวลาครบกำหนด :</div>
<div className="inline-flex ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-1 pb-1 pl-1 items-center">
<button aria-pressed="true" className="term-btn transition focus:outline-none ring-1 ring-gray-200 text-xs font-medium text-gray-900 bg-white rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm" data-term="all" type="button">ทั้งหมด</button>
<button aria-pressed="false" className="term-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium text-gray-600 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" data-term="short" type="button">
          ระยะสั้น (≤3 ปี)
        </button>
<button aria-pressed="false" className="term-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium text-gray-600 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" data-term="long" type="button">
          ระยะยาว ({">"} 3 ปี)
        </button>
</div>
</div>

</div>
</div>
<div className="border-t border-gray-200"></div>

<div className="sm:p-6 lg:p-8 pt-4 pr-4 pb-4 pl-4">
<div className="flex mb-3 items-center justify-between">ผลลัพธ์ : 5 รายการ<div className="flex items-center gap-2 text-sm text-gray-600">
</div><div className="text-sm text-gray-600">ข้อมูลอัปเดต 25 สิงหาคม 2568 09.00 น.</div></div>
<div className="overflow-hidden ring-1 ring-gray-200 bg-white rounded-lg">
<div className="overflow-x-auto"><table className="min-w-full text-left">
<thead className="bg-gray-50 border-b border-gray-200">
<tr className="">
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">Bond</th>
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">ISIN (เลขรหัสหลักทรัพย์สากล)</th><th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">Currency</th>
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">Coupon Rate</th>
<th className="px- sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Price</th>
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">ผลตอบแทนโดยประมาณ</th>
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">วันครบกำหนด</th>
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">ระยะเวลา (ปี)</th>
<th className=":px-5 uppercase text-xs font-medium text-gray-500 tracking-wide text-right pt-3 pr-4 pb-3 pl-4">เอกสารที่เกี่ยวข้อง</th>
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
<td className="sm:px-5 text-sm text-gray-700 pt-3 pr-4 pb-3 pl-4">1.7</td>
<td className="px-4 sm:px-5 py-3 text-right">
<button className="bond-dl inline-flex items-center gap-1.5 rounded-lg ring-1 ring-gray-200 bg-white text-[#0A6EE7] text-xs font-medium px-3 py-1.5 hover:bg-gray-50 transition" type="button">
              ดาวน์โหลด
              <svg className="w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
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
<td className="sm:px-5 text-right pt-3 pr-4 pb-3 pl-4">
<button className="bond-dl inline-flex items-center gap-1.5 rounded-lg ring-1 ring-gray-200 bg-white text-[#0A6EE7] text-xs font-medium px-3 py-1.5 hover:bg-gray-50 transition" type="button">
              ดาวน์โหลด
              <svg className="w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</td></tr>
<tr className="hover:bg-gray-50 transition" data-search="apple 1.00% notes 2027 gbp gb001xyz123 aa+" data-term="short">
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
<td className="sm:px-5 text-right pt-3 pr-4 pb-3 pl-4">
<button className="bond-dl inline-flex items-center gap-1.5 rounded-lg ring-1 ring-gray-200 bg-white text-[#0A6EE7] text-xs font-medium px-3 py-1.5 hover:bg-gray-50 transition" type="button">
              ดาวน์โหลด
              <svg className="w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className=""></path><path></path><path></path></svg>
</button>
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
<button className="bond-dl inline-flex items-center gap-1.5 rounded-lg ring-1 ring-gray-200 bg-white text-[#0A6EE7] text-xs font-medium px-3 py-1.5 hover:bg-gray-50 transition" type="button">
              ดาวน์โหลด
              <svg className="w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
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
<td className="sm:px-5 text-right pt-3 pr-4 pb-3 pl-4">
<button className="bond-dl inline-flex items-center gap-1.5 rounded-lg ring-1 ring-gray-200 bg-white text-[#0A6EE7] text-xs font-medium px-3 py-1.5 hover:bg-gray-50 transition" type="button">
              ดาวน์โหลด
              <svg className="w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
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
<h2 className="text-xl font-semibold text-gray-900 tracking-tight">Recommended Bonds</h2>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">

<div className="ring-1 ring-gray-200 hover:bg-gray-50 transition bg-white rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex flex-col gap-2">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 flex ring-1 ring-black/10 bg-white rounded-lg items-center justify-center overflow-hidden">
<img alt="Meta logo" className="h-full w-full object-contain" loading="lazy" src="https://static.cdnlogo.com/logos/m/59/meta.svg?w=800&q=80" />
</div>
<div className="">
<div className="text-[14px] font-medium text-gray-900 tracking-tight">Meta Platforms</div>
<div className="text-[12px] text-gray-500">Ticker: META</div>
</div>
</div>
</div>
<div className="ring-1 ring-gray-200 bg-gray-50 rounded-xl mt-2 pt-3 pr-3 pb-3 pl-3">
<div className="grid grid-cols-2 divide-x divide-gray-200">
<div className="text-center px-2">
<div className="text-[12px] text-gray-500">ผลตอบแทนโดยประมาณ</div>
<div className="text-[18px] font-medium text-gray-900 mt-0.5">3.2–4.1%</div>
</div>
<div className="text-center px-2">
<div className="text-[12px] text-gray-500">วันครบกำหนด</div>
<div className="text-[18px] font-medium text-gray-900 mt-0.5">2027–2032</div>
</div>
</div>
</div>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl ring-1 ring-gray-200 bg-white text-[#0A6EE7] text-sm font-medium px-4 py-2.5 hover:bg-gray-50 transition">
      รายละเอียด
    </button>
</div>
</div><div className="ring-1 ring-gray-200 hover:bg-gray-50 transition bg-white rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 flex ring-1 ring-black/10 bg-white rounded-lg items-center justify-center overflow-hidden">
<img alt="Microsoft logo" className="h-full w-full object-contain" loading="lazy" src="https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg?w=800&q=80" />
</div>
<div className="">
<div className="text-[14px] font-medium text-gray-900 tracking-tight">Microsoft Corporation</div>
<div className="text-[12px] text-gray-500">Ticker: MSFT</div>
</div>
</div>
</div>
<div className="ring-1 ring-gray-200 bg-gray-50 rounded-xl mt-3 pt-3 pr-3 pb-3 pl-3">
<div className="grid grid-cols-2 divide-x divide-gray-200">
<div className="text-center px-2">
<div className="text-[12px] text-gray-500">ผลตอบแทนโดยประมาณ</div>
<div className="text-[18px] text-base font-semibold text-gray-900 mt-0.5">3.2–4.1%</div>
</div>
<div className="text-center px-2">
<div className="text-[12px] text-gray-500">วันครบกำหนด</div>
<div className="text-[18px] text-base font-semibold text-gray-900 mt-0.5">2027–2032</div>
</div>
</div>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl ring-1 ring-gray-200 bg-white text-[#0A6EE7] text-sm font-medium px-4 py-2.5 hover:bg-gray-50 transition">
      รายละเอียด
    </button>
</div>
</div><div className="ring-1 ring-gray-200 hover:bg-gray-50 transition bg-white rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 flex items-center justify-center rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
<img alt="Amazon logo" className="h-full w-full object-contain" loading="lazy" src="https://s3-symbol-logo.tradingview.com/amazon--600.png?w=800&q=80" />
</div>
<div className="">
<div className="text-[16px] font-medium text-gray-900 tracking-tight">Amazon.com Inc.</div>
<div className="text-[12px] text-gray-500">Ticker: AMZN</div>
</div>
</div>
</div>
<div className="mt-3 ring-1 ring-gray-200 bg-gray-50 rounded-xl pt-3 pr-3 pb-3 pl-3">
<div className="grid grid-cols-2 divide-x divide-gray-200">
<div className="px-2 text-center">
<div className="text-[12px] text-gray-500">ผลตอบแทนโดยประมาณ</div>
<div className="text-[20px] text-base font-medium text-gray-900 tracking-tight mt-0.5">3.2–4.1%</div>
</div>
<div className="px-2 text-center">
<div className="text-[12px] text-gray-500">วันครบกำหนด</div>
<div className="text-[20px] text-base font-medium text-gray-900 tracking-tight mt-0.5">2027–2032</div>
</div>
</div>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="inline-flex w-full gap-1.5 ring-1 ring-gray-200 hover:bg-gray-50 transition text-sm font-medium text-[#0A6EE7] bg-white rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center">รายละเอียด</button>
</div>
</div>

</div>

<div className="mt-6">
<div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="hidden md:block">
<div className="ring-1 ring-gray-200 sm:p-6 lg:p-8 relative overflow-hidden w-full h-full bg-gradient-to-br from-white via-[#ECF4FF] to-[#F2F7FF] rounded-xl pt-5 pr-5 pb-5 pl-5" style={{'width': `100%`, 'height': `100%`}}>
<div className="absolute -top-12 -right-10 w-56 h-56 bg-[#0A6EE7]/10 rounded-full blur-2xl"></div>
<div className="absolute -bottom-14 -left-10 w-64 h-64 rounded-full bg-[#0A6EE7]/10 blur-3xl"></div>
<p className="text-[14px] font-medium text-[#0A6EE7]">ติดต่อเรา</p>
<h3 className="mt-1 text-[22px] font-semibold tracking-tight text-gray-900">ฝ่ายการลงทุนหลักทรัพย์ต่างประเทศ</h3>
<p className="mt-0.5 text-[14px] text-gray-600">บล.หยวนต้า (ประเทศไทย) จำกัด</p>
<div className="mt-6 space-y-4">

<div className="flex items-start gap-3">
<span className="h-10 w-10 rounded-2xl bg-white ring-1 ring-[#0A6EE7]/20 shadow-sm flex items-center justify-center text-[#0A6EE7]">
<svg className="w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] text-gray-600">เบอร์ติดต่อ</div>
<div className="mt-0.5 text-[20px] font-semibold tracking-tight text-gray-900">0-2009-8000</div>
</div>
</div>

<div className="flex items-start gap-3">
<span className="h-10 w-10 rounded-2xl bg-white ring-1 ring-[#0A6EE7]/20 shadow-sm flex items-center justify-center text-[#0A6EE7]">
<svg className="w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] text-gray-600">อีเมลติดต่อ</div>
<a className="mt-0.5 inline-block text-[16px] font-medium tracking-tight text-gray-700 hover:text-[#0A6EE7] transition" href="mailto:online@yuanta.co.th">online@yuanta.co.th</a>
</div>
</div>

<div className="flex items-start gap-3">
<span className="h-10 w-10 rounded-2xl bg-white ring-1 ring-[#0A6EE7]/20 shadow-sm flex items-center justify-center text-[#0A6EE7]">
<svg className="w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="10"></circle></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] text-gray-600">ที่อยู่ติดต่อ</div>
<div className="mt-2">
<a className="inline-flex items-center gap-1.5 rounded-lg ring-1 ring-gray-200 bg-white text-[#0A6EE7] text-[14px] font-medium px-3.5 py-2 hover:bg-gray-50 transition" href="https://www.google.com/maps/search/?api=1&query=Yuanta+Securities+Thailand" rel="noopener" target="_blank">
              Google Map
              
            </a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="p-5 sm:p-6 lg:p-8">
<div className="text-xs text-gray-500"></div>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight mt-1">สนใจติดต่อลงทุน Overseas Bonds</h3>
<form className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
<div className="sm:col-span-1">
<label className="block text-[12px] text-gray-600 pb-1.5">ชื่อ*</label>
<input className="w-full ring-1 ring-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-gray-300 text-sm text-gray-900 rounded-lg pt-2.5 pr-3.5 pb-2.5 pl-3.5" placeholder="ระบุชื่อ" required type="text" />
</div>
<div className="sm:col-span-1">
<label className="block text-[12px] text-gray-600 pb-1.5">นามสกุล*</label>
<input className="w-full ring-1 ring-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-gray-300 text-sm text-gray-900 rounded-lg pt-2.5 pr-3.5 pb-2.5 pl-3.5" placeholder="ระบุนามสกุล" required type="text" />
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
<div className="ring-1 ring-gray-200 sm:p-5 lg:p-6 bg-gray-50 rounded-xl pt-4 pr-4 pb-4 pl-4">
<h4 className="text-[18px] sm:text-[20px] text-xl font-normal text-gray-900 tracking-tight">Apple Overseas Bonds ที่สนใจ</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4" id="proj-list">

<label className="flex items-start gap-3 cursor-pointer" htmlFor="proj-surat">
<input className="peer sr-only" id="proj-surat" name="selectedBonds[]" type="checkbox" value="US037833CF61" />
<span className="h-5 w-5 ring-1 ring-gray-300 flex items-center justify-center transition peer-checked:bg-[#0A6EE7] peer-:ring-[#0A6EE7] bg-white rounded-md">
<svg className="lucide lucide-check hidden peer-checked:block w-[16px] h-[16px] text-white" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] font-light text-gray-900 tracking-tight">Apple Inc 1.37% 2026</div>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer" htmlFor="proj-ubon">
<input className="peer sr-only" id="proj-ubon" name="selectedBonds[]" type="checkbox" value="US037833DG77" />
<span className="h-5 w-5 rounded-md ring-1 ring-gray-300 bg-white flex items-center justify-center transition peer-checked:bg-[#0A6EE7] peer-checked:ring-[#0A6EE7]">
<svg className="lucide lucide-check hidden peer-checked:block w-[16px] h-[16px] text-white" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] font-medium text-gray-900 tracking-tight">Apple Inc 1.65% 2027</div>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer" htmlFor="proj-udon">
<input className="peer sr-only" id="proj-udon" name="selectedBonds[]" type="checkbox" value="US037833DU16" />
<span className="h-5 w-5 rounded-md ring-1 ring-gray-300 bg-white flex items-center justify-center transition peer-checked:bg-[#0A6EE7] peer-checked:ring-[#0A6EE7]">
<svg className="lucide lucide-check hidden peer-checked:block w-[16px] h-[16px] text-white" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] font-medium text-gray-900 tracking-tight">Apple Inc 3.05% 2032</div>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer" htmlFor="proj-nst">
<input className="peer sr-only" id="proj-nst" name="selectedBonds[]" type="checkbox" value="US037833DV98" />
<span className="h-5 w-5 rounded-md ring-1 ring-gray-300 bg-white flex items-center justify-center transition peer-checked:bg-[#0A6EE7] peer-checked:ring-[#0A6EE7]">
<svg className="lucide lucide-check hidden peer-checked:block w-[16px] h-[16px] text-white" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] font-medium text-gray-900 tracking-tight">Apple Inc 4.45% 2035</div>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer" htmlFor="proj-rayong">
<input className="peer sr-only" id="proj-rayong" name="selectedBonds[]" type="checkbox" value="US037833DW70" />
<span className="h-5 w-5 rounded-md ring-1 ring-gray-300 bg-white flex items-center justify-center transition peer-checked:bg-[#0A6EE7] peer-checked:ring-[#0A6EE7]">
<svg className="lucide lucide-check hidden peer-checked:block w-[16px] h-[16px] text-white" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] font-medium text-gray-900 tracking-tight">Apple Inc 4.65% 2041</div>
</div>
</label>
</div>
</div>

</div>
<div className="sm:col-span-2">
<p className="text-[12px] text-gray-600">เพื่อให้ท่านทราบวิธีและกระบวนการในการจัดเก็บและใช้ข้อมูล สามารถศึกษารายละเอียดแบบแจ้งเกี่ยวกับข้อมูลส่วนบุคคลได้ที่ <a className="text-gray-900 hover:text-[#0A6EE7] underline underline-offset-2" href="#">Privacy Notice</a></p>
</div>
<div className="sm:col-span-2 mt-1">
<button className="inline-flex hover:bg-gray-800 transition w-full sm:w-auto text-sm font-medium text-white bg-[#0A6EE7] rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center" type="submit">ส่งข้อมูล</button>
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
<div className="sm:p-6 lg:p-8 pt-5 pr-5 pb-5 pl-5 ring-1 ring-[#0A6EE7]/15 bg-[#0A6EE7]/5 rounded-lg">
<div className="flex items-start gap-2">
<span className="h-5 w-5 rounded-full bg-[#0A6EE7] ring-1 ring-[#0A6EE7]/20 flex items-center justify-center text-white mt-0.5">
<svg className="w-[14px] h-[14px]" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<path></path>
<path></path>
</svg>
</span>
<div className="flex-1">
<h2 className="text-base font-semibold tracking-tight text-[#0A6EE7]" id="disclaimer-title">ข้อจำกัดความรับผิดและคำเตือนความเสี่ยง</h2>
<p className="text-sm font-normal text-[#0A6EE7] mt-1.5">
        ข้อมูลนี้จัดทำขึ้นเพื่อวัตถุประสงค์ในการให้ข้อมูลเท่านั้น ไม่ใช่คำแนะนำการลงทุน ผลตอบแทนในอดีตไม่ใช่สิ่งที่ยืนยันผลตอบแทนในอนาคต
        การลงทุนในตราสารหนี้ต่างประเทศมีความเสี่ยงจากอัตราแลกเปลี่ยน อัตราดอกเบี้ย และความเสี่ยงของผู้ออกตราสาร กรุณาศึกษาข้อมูลและปรึกษาที่ปรึกษาการลงทุนก่อนตัดสินใจ
      </p>
</div>
</div>
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
