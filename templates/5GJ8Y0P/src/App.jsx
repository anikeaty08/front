import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
        group.forEach(btn => {
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
      };

      const parseNum = (td) => {
        if (!td) return NaN;
        const m = td.textContent.replace(/,/g, '').match(/-?\d+(\.\d+)?/);
        return m ? parseFloat(m[0]) : NaN;
      };

      const applyFilters = () => {
        let shown = 0;
        rows.forEach(tr => {
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
        });

        if (emptyState) emptyState.classList.toggle('hidden', shown !== 0);
      };

      // Bind events
      yieldButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          state.ytm = btn.dataset.yield || 'all';
          setActive(yieldButtons, btn);
          applyFilters();
        });
      });

      termButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          state.dur = btn.dataset.term || 'all';
          setActive(termButtons, btn);
          applyFilters();
        });
      });

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
    })();
  


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
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="max-w-7xl flex mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<img alt="Yuanta Securities logo" className="" src="https://www.yuanta.co.th/cms/uploads/Logo_aa5fd5a665.svg" style={{maxWidth: '100%', height: '32px'}}/>
<path d="M38.3721 8.36182C38.1251 8.36182 37.9154 8.54111 37.8767 8.78524L35.018 26.9146C35.0076 26.9808 35.0117 27.0485 35.03 27.113C35.0482 27.1775 35.0802 27.2372 35.1238 27.2882C35.1674 27.3391 35.2215 27.38 35.2823 27.4081C35.3432 27.4361 35.4095 27.4506 35.4765 27.4507H38.8667C39.1133 27.4507 39.3235 27.271 39.3621 27.0272L40.2019 21.7034C40.2401 21.4596 40.4502 21.28 40.6972 21.28H43.7795C47.3809 21.28 50.4381 18.6523 50.9965 15.0916C51.5596 11.5008 48.7543 8.36961 44.7784 8.36182H38.3721ZM41.6677 12.409H44.1338C46.1642 12.409 46.8254 13.607 46.6163 14.9318C46.4072 16.2595 45.3804 17.2374 43.4163 17.2374H40.9063L41.6677 12.409ZM57.8918 13.6413C57.0357 13.6445 56.0507 13.8199 54.9448 14.2806C52.4082 15.3379 51.19 17.523 50.6727 19.1161C50.6727 19.1161 49.0261 23.9764 52.7462 26.6467C52.7462 26.6467 56.1963 29.2173 60.0801 26.4883L60.0132 26.9146C60.0028 26.9807 60.0069 27.0483 60.0251 27.1128C60.0433 27.1772 60.0753 27.237 60.1187 27.2879C60.1622 27.3388 60.2162 27.3798 60.277 27.4078C60.3378 27.4359 60.404 27.4505 60.471 27.4507H63.6893C63.9363 27.4507 64.1461 27.271 64.1847 27.0272L66.1424 14.6122C66.1529 14.546 66.1489 14.4783 66.1307 14.4137C66.1126 14.3492 66.0806 14.2894 66.0371 14.2384C65.9936 14.1874 65.9396 14.1464 65.8787 14.1182C65.8179 14.0901 65.7516 14.0755 65.6846 14.0754H62.4662C62.2192 14.0754 62.0091 14.255 61.9708 14.4988L61.8656 15.1671C61.8656 15.1671 60.4603 13.6318 57.8918 13.6413ZM57.997 17.5627C58.3666 17.5627 58.7046 17.6137 59.0079 17.7112C60.3966 18.1569 61.1839 19.491 60.956 20.937C60.6751 22.7175 59.2149 24.0285 57.3422 24.0285C56.973 24.0285 56.635 23.9779 56.3313 23.8804C54.9431 23.4347 54.1508 22.1006 54.3786 20.6546C54.6596 18.8741 56.1244 17.5627 57.997 17.5627Z" fill="#003087"></path>
<path d="M84.7185 8.36182C84.4716 8.36182 84.2618 8.54111 84.2232 8.78524L81.3644 26.9146C81.354 26.9808 81.3581 27.0485 81.3764 27.113C81.3947 27.1775 81.4267 27.2372 81.4703 27.2882C81.5138 27.3391 81.5679 27.38 81.6288 27.4081C81.6897 27.4361 81.7559 27.4506 81.8229 27.4507H85.2132C85.4598 27.4507 85.6699 27.271 85.7085 27.0272L86.5483 21.7034C86.5866 21.4596 86.7967 21.28 87.0436 21.28H90.126C93.7274 21.28 96.7842 18.6523 97.3423 15.0916C97.9056 11.5008 95.1008 8.36961 91.1248 8.36182H84.7185ZM88.0142 12.409H90.4803C92.5106 12.409 93.1718 13.607 92.9627 14.9318C92.7537 16.2595 91.7272 17.2374 89.7628 17.2374H87.2527L88.0142 12.409ZM104.238 13.6413C103.382 13.6445 102.397 13.8199 101.291 14.2806C98.7543 15.3379 97.5361 17.523 97.0187 19.1161C97.0187 19.1161 95.3729 23.9764 99.093 26.6467C99.093 26.6467 102.542 29.2173 106.427 26.4883L106.36 26.9146C106.349 26.9808 106.353 27.0485 106.372 27.113C106.39 27.1775 106.422 27.2372 106.465 27.2882C106.509 27.3391 106.563 27.38 106.624 27.4081C106.685 27.4361 106.751 27.4506 106.818 27.4507H110.036C110.283 27.4507 110.493 27.271 110.532 27.0272L112.49 14.6122C112.5 14.5459 112.496 14.4782 112.478 14.4136C112.46 14.349 112.428 14.2891 112.384 14.2381C112.341 14.1871 112.287 14.1461 112.226 14.118C112.165 14.0899 112.098 14.0754 112.031 14.0754H108.813C108.566 14.0754 108.356 14.255 108.318 14.4988L108.212 15.1671C108.212 15.1671 106.806 13.6318 104.238 13.6413ZM104.343 17.5627C104.713 17.5627 105.051 17.6137 105.354 17.7112C106.743 18.1569 107.53 19.491 107.302 20.937C107.021 22.7175 105.561 24.0285 103.688 24.0285C103.319 24.0285 102.981 23.9779 102.677 23.8804C101.289 23.4347 100.497 22.1006 100.725 20.6546C101.006 18.8741 102.47 17.5627 104.343 17.5627Z" fill="#0070E0"></path>
<path d="M67.6696 14.0754C67.4145 14.0754 67.233 14.3245 67.311 14.5672L70.8394 25.5163L67.649 30.6761C67.4942 30.9266 67.6742 31.2501 67.9686 31.2501H71.7394C71.8472 31.25 71.9532 31.2221 72.0471 31.1691C72.1411 31.1161 72.2197 31.0398 72.2755 30.9475L82.1298 14.6458C82.2811 14.3953 82.1004 14.075 81.8077 14.075H78.0373C77.9284 14.0751 77.8214 14.1035 77.7268 14.1575C77.6323 14.2115 77.5534 14.2892 77.498 14.3829L73.6191 20.9317L71.6501 14.4315C71.586 14.2199 71.3907 14.075 71.17 14.075L67.6696 14.0754Z" fill="#003087"></path>
<path d="M116.147 8.36182C115.9 8.36182 115.69 8.54146 115.651 8.78524L112.792 26.9138C112.781 26.9801 112.785 27.0479 112.803 27.1125C112.822 27.1771 112.854 27.2369 112.897 27.2879C112.941 27.339 112.995 27.3799 113.056 27.408C113.117 27.4361 113.183 27.4507 113.25 27.4507H116.64C116.887 27.4507 117.097 27.271 117.136 27.0272L119.995 8.89792C120.005 8.83175 120.001 8.76413 119.983 8.69968C119.964 8.63523 119.932 8.57549 119.889 8.52456C119.845 8.47363 119.791 8.43271 119.731 8.40462C119.67 8.37653 119.604 8.36193 119.537 8.36182H116.147Z" fill="#0070E0"></path>
<path d="M10.1086 8.36182C9.89023 8.362 9.67907 8.44005 9.51307 8.58196C9.34707 8.72387 9.23709 8.92032 9.20294 9.13603L7.69812 18.6803C7.76828 18.2345 8.15236 17.9061 8.60378 17.9061H13.0134C17.4514 17.9061 21.2172 14.6685 21.9053 10.2812C21.9565 9.95368 21.9856 9.62304 21.9922 9.29158C20.8643 8.7002 19.5395 8.36182 18.0878 8.36182H10.1086Z" fill="#001C64"></path>
<path d="M21.9921 9.29193C21.9855 9.62339 21.9565 9.95403 21.9053 10.2816C21.2172 14.6689 17.451 17.9064 13.0134 17.9064H8.60374C8.15268 17.9064 7.76824 18.2345 7.69808 18.6806L6.31441 27.451L5.44772 32.953C5.43081 33.0593 5.43715 33.1681 5.46632 33.2717C5.4955 33.3753 5.54682 33.4713 5.61671 33.5532C5.68661 33.635 5.77344 33.7007 5.8712 33.7458C5.96896 33.7908 6.07533 33.8141 6.18296 33.8141H10.9693C11.1876 33.8139 11.3988 33.7358 11.5648 33.5939C11.7308 33.452 11.8408 33.2556 11.8749 33.0399L13.1356 25.0437C13.1698 24.8279 13.2799 24.6313 13.446 24.4894C13.6122 24.3475 13.8235 24.2695 14.042 24.2695H16.86C21.298 24.2695 25.0638 21.032 25.7519 16.6446C26.2405 13.5308 24.6723 10.6972 21.9921 9.29193Z" fill="#0070E0"></path>
<path d="M4.67082 2C4.21975 2 3.83532 2.32811 3.76516 2.7735L0.00924385 26.5902C-0.0619766 27.0423 0.287403 27.4512 0.745197 27.4512H6.31491L7.69787 18.6808L9.20269 9.13657C9.23684 8.92086 9.34682 8.72441 9.51282 8.5825C9.67882 8.44059 9.88998 8.36254 10.1084 8.36236H18.0875C19.5396 8.36236 20.8641 8.7011 21.9919 9.29212C22.0692 5.29775 18.7732 2 14.2416 2H4.67082Z" fill="#003087"></path>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="transition-colors hover:text-black text-slate-700" href="#bonds">ค่าธรรมเนียม</a>
<a className="transition-colors hover:text-black text-slate-700" href="#stocks">คู่มือนักลงทุน</a>
<a className="transition-colors hover:text-black text-slate-700" href="#etf">คำถามที่พบบ่อย</a>
</nav>
</div>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>Overseas Bonds · Apple — Product Detail</title>
<meta content="Apple Overseas Bonds — Product detail, filter short- and long-term, real-time search." name="description"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>


<div className="max-w-7xl sm:px-6 lg:px-8 md:py-10 mr-auto ml-auto pt-6 pr-5 pb-6 pl-5"><div className="flex items-center justify-between">
<div className="flex gap-3 items-center">
<nav aria-label="Breadcrumb" className="inline-flex items-center text-sm text-gray-600">
<a className="inline-flex items-center gap-1 hover:text-[#0A6EE7] transition" href="https://aura.build/share/RMH2BT7">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
      หน้าแรก
    </a>
<svg className="lucide lucide-chevron-right w-3.5 h-3.5 text-gray-400 mx-2" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<a className="hover:text-[#0A6EE7] transition" href="#">
      Oversea Bonds
    </a>
<svg className="lucide lucide-chevron-right w-3.5 h-3.5 text-gray-400 mx-2" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span aria-current="page" className="text-gray-900 font-medium tracking-tight">Apple</span>
</nav>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
</div>
</div><section className="mt-6">
<div className="ring-1 ring-gray-200 bg-white rounded-lg shadow-sm">
<div className="sm:p-6 lg:p-8 relative overflow-hidden pt-5 pr-5 pb-5 pl-5" style={{backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.72) 65%, rgba(255,255,255,0.6) 100%), url(\'https://imonkey-blog.imgix.net/blog/wp-content/uploads/2023/09/19155253/AAPL-insidermonkey-1695153171712.jpg?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '0.5rem'}}>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="">
<h1 className="sm:text-3xl text-2xl font-semibold text-gray-900 tracking-tight"><span className="inline-flex items-center gap-2"><span className="h-8 w-8 ring-1 ring-gray-200 flex items-center justify-center bg-white rounded-lg overflow-hidden"><img alt="Apple" className="h-full w-full object-cover" src="https://s3-symbol-logo.tradingview.com/apple--600.png?w=800&amp;q=80" style={{}}/></span>Apple Overseas Bonds</span></h1>
<div className="mt-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
<p className="text-sm text-gray-600">รายละเอียดตราสารหนี้ต่างประเทศของ Apple 
    </p><div className="flex flex-wrap items-center gap-2 sm:justify-end">
<span className="inline-flex items-center gap-1.5 ring-1 ring-gray-200 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5">
<svg className="lucide lucide-building-2 w-3.5 h-3.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path className="" d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg> Ticker: AAPL
      </span>
<span className="inline-flex items-center gap-1.5 ring-1 ring-gray-200 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5"><svg className="lucide lucide-badge-dollar-sign w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', color: 'rgb(55, 65, 81)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>currency : USD</span>
<span className="inline-flex items-center gap-1.5 ring-1 ring-gray-200 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5"><svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>Credit Rating: AA+</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-3 md:justify-start mt-6 justify-start">
<div className="flex items-center gap-2"></div>
<div className="flex gap-2 items-center bg-white/60 backdrop-blur ring-1 ring-gray-200 rounded-lg px-2 py-1">
<div className="flex gap-1 text-xs text-gray-500 pl-2 items-center">YTM:</div>
<div className="inline-flex ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-1 pb-1 pl-1 items-center" id="yieldSegment">
<button aria-pressed="true" className="yield-btn px-3 py-1.5 rounded-lg text-xs font-medium transition focus:outline-none bg-white ring-1 ring-gray-200 shadow-sm text-gray-900" data-yield="all" type="button">
        ทั้งหมด
      </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 px-3 py-1.5 text-gray-600" data-yield="lt2" type="button">
        &lt; 2%
      </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 px-3 py-1.5 text-gray-600" data-yield="2to3" type="button">
        2–3%
      </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 px-3 py-1.5 text-gray-600" data-yield="3to4" type="button">
        3–4%
      </button>
<button aria-pressed="false" className="yield-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 px-3 py-1.5 text-gray-600" data-yield="gt4" type="button">
        &gt; 4%
      </button>
</div>
<div className="text-xs text-gray-500">เลือกช่วงครบกำหนดอายุ:</div>
<div className="inline-flex ring-1 ring-gray-200 bg-gray-100 rounded-lg pt-1 pr-1 pb-1 pl-1 items-center" id="termSegment">
<button aria-pressed="true" className="term-btn px-3 py-1.5 rounded-lg text-xs font-medium transition focus:outline-none bg-white ring-1 ring-gray-200 shadow-sm text-gray-900" data-term="all" type="button">ทั้งหมด</button>
<button aria-pressed="false" className="term-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium text-gray-600 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" data-term="short" type="button">
        ระยะสั้น (≤3Y)
      </button>
<button aria-pressed="false" className="term-btn hover:text-[#0A6EE7] transition focus:outline-none text-xs font-medium text-gray-600 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3" data-term="long" type="button">
        ระยะยาว (&gt; 3Y)
      </button>
</div>
</div>

</div>
</div>
<div className="border-t border-gray-200"></div>

<div className="sm:p-6 lg:p-8 pt-4 pr-4 pb-4 pl-4">
<div className="flex mb-3 items-center justify-between">ผลลัพธ์ : 5 รายการ<div className="flex items-center gap-2 text-sm text-gray-600">
</div><div className="text-sm text-gray-600">ข้อมูลอัปเดต 25 สิงหาคม 2568 09.00 น.</div></div>
<div className="overflow-hidden rounded-lg ring-1 ring-gray-200 bg-white">
<div className="overflow-x-auto"><table className="min-w-full text-left">
<thead className="bg-gray-50 border-b border-gray-200">
<tr className="">
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">Bond</th>
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">ISIN (เลขรหัสหลักทรัพย์สากล)</th><th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">Currency</th>
<th className="px-4 sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Coupon</th>
<th className="px- sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">Price</th>
<th className="px-4 sm:px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">YTM</th>
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">วันครบกำหนด</th>
<th className="sm:px-5 uppercase text-xs font-medium text-gray-500 tracking-wide pt-3 pr-4 pb-3 pl-4">Duration</th>
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
<td className="sm:px-5 text-right pt-3 pr-4 pb-3 pl-4">
<a aria-checked="false" className="sm:inline-flex items-center gap-2 text-[12px] transition ring-gray-200 hover:bg-gray-50 ring-1 font-medium text-[#0A6EE7] bg-white rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="https://aura.build/share/SGGNX4O" onclick="event.preventDefault();(function(el){var active=el.getAttribute('aria-checked')==='true';active=!active;el.setAttribute('aria-checked',active?'true':'false');if(active){el.classList.remove('text-[#0A6EE7]','bg-white','ring-gray-200','hover:bg-gray-50','ring-1');el.classList.add('text-white','bg-[#0A6EE7]','hover:bg-[#095EC4]');if(!el.querySelector('svg.lucide-check')){var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('xmlns','http://www.w3.org/2000/svg');svg.setAttribute('width','14');svg.setAttribute('height','14');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.5');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');svg.setAttribute('data-lucide','check');svg.setAttribute('class','lucide lucide-check w-3.5 h-3.5');var p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d','M20 6 9 17l-5-5');svg.appendChild(p);el.prepend(svg);}}else{el.classList.remove('text-white','bg-[#0A6EE7]','hover:bg-[#095EC4]');el.classList.add('text-[#0A6EE7]','bg-white','ring-gray-200','hover:bg-gray-50','ring-1','transition');var icon=el.querySelector('svg.lucide-check');if(icon)icon.remove();}})(this);return false;" role="checkbox">สนใจ</a>
</td></tr>
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
<a aria-checked="false" className="sm:inline-flex items-center gap-2 text-[12px] transition ring-gray-200 hover:bg-gray-50 ring-1 font-medium text-[#0A6EE7] bg-white rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="https://aura.build/share/SGGNX4O" onclick="event.preventDefault();(function(el){var active=el.getAttribute('aria-checked')==='true';active=!active;el.setAttribute('aria-checked',active?'true':'false');if(active){el.classList.remove('text-[#0A6EE7]','bg-white','ring-gray-200','hover:bg-gray-50','ring-1');el.classList.add('text-white','bg-[#0A6EE7]','hover:bg-[#095EC4]');if(!el.querySelector('svg.lucide-check')){var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('xmlns','http://www.w3.org/2000/svg');svg.setAttribute('width','14');svg.setAttribute('height','14');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.5');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');svg.setAttribute('data-lucide','check');svg.setAttribute('class','lucide lucide-check w-3.5 h-3.5');var p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d','M20 6 9 17l-5-5');svg.appendChild(p);el.prepend(svg);}}else{el.classList.remove('text-white','bg-[#0A6EE7]','hover:bg-[#095EC4]');el.classList.add('text-[#0A6EE7]','bg-white','ring-gray-200','hover:bg-gray-50','ring-1','transition');var icon=el.querySelector('svg.lucide-check');if(icon)icon.remove();}})(this);return false;" role="checkbox">สนใจ</a>
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
<a aria-checked="false" className="sm:inline-flex items-center gap-2 text-[12px] transition ring-gray-200 hover:bg-gray-50 ring-1 font-medium text-[#0A6EE7] bg-white rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="https://aura.build/share/SGGNX4O" onclick="event.preventDefault();(function(el){var active=el.getAttribute('aria-checked')==='true';active=!active;el.setAttribute('aria-checked',active?'true':'false');if(active){el.classList.remove('text-[#0A6EE7]','bg-white','ring-gray-200','hover:bg-gray-50','ring-1');el.classList.add('text-white','bg-[#0A6EE7]','hover:bg-[#095EC4]');if(!el.querySelector('svg.lucide-check')){var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('xmlns','http://www.w3.org/2000/svg');svg.setAttribute('width','14');svg.setAttribute('height','14');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.5');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');svg.setAttribute('data-lucide','check');svg.setAttribute('class','lucide lucide-check w-3.5 h-3.5');var p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d','M20 6 9 17l-5-5');svg.appendChild(p);el.prepend(svg);}}else{el.classList.remove('text-white','bg-[#0A6EE7]','hover:bg-[#095EC4]');el.classList.add('text-[#0A6EE7]','bg-white','ring-gray-200','hover:bg-gray-50','ring-1','transition');var icon=el.querySelector('svg.lucide-check');if(icon)icon.remove();}})(this);return false;" role="checkbox">สนใจ</a>
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
<a aria-checked="false" className="sm:inline-flex items-center gap-2 text-[12px] transition ring-gray-200 hover:bg-gray-50 ring-1 font-medium text-[#0A6EE7] bg-white rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="https://aura.build/share/SGGNX4O" onclick="event.preventDefault();(function(el){var active=el.getAttribute('aria-checked')==='true';active=!active;el.setAttribute('aria-checked',active?'true':'false');if(active){el.classList.remove('text-[#0A6EE7]','bg-white','ring-gray-200','hover:bg-gray-50','ring-1');el.classList.add('text-white','bg-[#0A6EE7]','hover:bg-[#095EC4]');if(!el.querySelector('svg.lucide-check')){var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('xmlns','http://www.w3.org/2000/svg');svg.setAttribute('width','14');svg.setAttribute('height','14');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.5');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');svg.setAttribute('data-lucide','check');svg.setAttribute('class','lucide lucide-check w-3.5 h-3.5');var p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d','M20 6 9 17l-5-5');svg.appendChild(p);el.prepend(svg);}}else{el.classList.remove('text-white','bg-[#0A6EE7]','hover:bg-[#095EC4]');el.classList.add('text-[#0A6EE7]','bg-white','ring-gray-200','hover:bg-gray-50','ring-1','transition');var icon=el.querySelector('svg.lucide-check');if(icon)icon.remove();}})(this);return false;" role="checkbox">สนใจ</a>
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
<a aria-checked="false" className="sm:inline-flex items-center gap-2 text-[12px] transition ring-gray-200 hover:bg-gray-50 ring-1 font-medium text-[#0A6EE7] bg-white rounded-lg pt-1 pr-1.5 pb-1 pl-1.5" href="https://aura.build/share/SGGNX4O" onclick="event.preventDefault();(function(el){var active=el.getAttribute('aria-checked')==='true';active=!active;el.setAttribute('aria-checked',active?'true':'false');if(active){el.classList.remove('text-[#0A6EE7]','bg-white','ring-gray-200','hover:bg-gray-50','ring-1');el.classList.add('text-white','bg-[#0A6EE7]','hover:bg-[#095EC4]');if(!el.querySelector('svg.lucide-check')){var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('xmlns','http://www.w3.org/2000/svg');svg.setAttribute('width','14');svg.setAttribute('height','14');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.5');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');svg.setAttribute('data-lucide','check');svg.setAttribute('class','lucide lucide-check w-3.5 h-3.5');var p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d','M20 6 9 17l-5-5');svg.appendChild(p);el.prepend(svg);}}else{el.classList.remove('text-white','bg-[#0A6EE7]','hover:bg-[#095EC4]');el.classList.add('text-[#0A6EE7]','bg-white','ring-gray-200','hover:bg-gray-50','ring-1','transition');var icon=el.querySelector('svg.lucide-check');if(icon)icon.remove();}})(this);return false;" role="checkbox">สนใจ</a>
</td>
</tr>
<tr className="hover:bg-gray-50 transition" data-search="apple 1.00% notes 2030 jpy jp000aapl001 aa+" data-term="long">
</tr>
</tbody>
</table></div>

<div className="hidden px-6 py-10 sm:py-14 text-center" id="emptyState">
<div className="mx-auto max-w-md">
<div className="mx-auto w-12 h-12 rounded-full bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center">
<svg className="lucide lucide-search-x w-6 h-6 text-gray-500" data-lucide="search-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.5 8.5-5 5"></path><path d="m8.5 8.5 5 5"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">ไม่พบบอนด์ที่ตรงกัน</h3>
<p className="mt-1.5 text-sm text-gray-600">ลองล้างตัวกรองหรือปรับคำค้นหาใหม่</p>
<div className="mt-4">
<button className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-[#0A6EE7] hover:bg-gray-100 ring-1 ring-gray-200 transition" id="emptyReset">
                      ล้างตัวกรอง
                      <svg className="lucide lucide-rotate-ccw w-4 h-4" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
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
<svg className="lucide lucide-stars w-5 h-5 text-gray-700" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Recommended bond</h2>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">

<div className="ring-1 ring-gray-200 hover:bg-gray-50 transition bg-white rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex flex-col gap-2">
<div className="">
</div>
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 flex ring-1 ring-black/10 text-white bg-gray-900 rounded-lg items-center justify-center">
<img alt="Meta logo" className="h-full w-full bg-stone-50 object-contain" loading="lazy" src="https://www.vectorlogo.zone/logos/nvidia/nvidia-icon.svg?w=800&amp;q=80"/>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900 tracking-tight">NVIDIA Corporation</div>
<div className="text-[12px] text-gray-500">Ticker: NVDA</div>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[11px] ring-1 ring-emerald-200 font-medium text-emerald-700 bg-emerald-50 rounded pt-0.5 pr-2 pb-0.5 pl-2">A</span>
</div><div className="grid grid-cols-2 gap-6 mt-2">
<div className="">
<div className="text-[12px] text-gray-500">YTM</div>
<div className="text-[16px] font-medium text-gray-900">3.2–4.1%</div>
</div>
<div className="">
<div className="text-[12px] text-gray-500">วันครบกำหนด</div>
<div className="text-[16px] font-medium text-gray-900">2027–2032</div>
</div>
</div>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="button-sm-Secondary inline-flex gap-1.5 hover:bg-[#F9F9F9] text-[14px] transition text-xs font-normal text-[#0A6EE7] bg-white border-[#ECECEC] border rounded-xl pt-2 pr-2 pb-2 pl-2 items-center">ดูรายละเอียด</button>
</div></div><div className="ring-1 ring-gray-200 hover:bg-gray-50 transition bg-white rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 flex ring-1 ring-black/10 text-white bg-gray-900 rounded-lg items-center justify-center">
<img alt="Meta logo" className="h-full w-full bg-stone-50 object-contain" loading="lazy" src="https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg?w=800&amp;q=80"/>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900 tracking-tight">Microsoft Corporation</div>
<div className="text-[12px] text-gray-500">Ticker: MSFT</div>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[11px] ring-1 ring-emerald-200 font-medium text-emerald-700 bg-emerald-50 rounded pt-0.5 pr-2 pb-0.5 pl-2">AA+</span>
</div><div className="flex flex-col gap-2">
<div className="">
</div>
<div className="grid grid-cols-2 gap-6 mt-2">
<div className="">
<div className="text-[12px] text-gray-500">YTM</div>
<div className="text-[16px] font-medium text-gray-900">3.2–4.1%</div>
</div>
<div className="">
<div className="text-[12px] text-gray-500">วันครบกำหนด</div>
<div className="text-[16px] font-medium text-gray-900">2027–2032</div>
</div>
</div>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="button-sm-Secondary inline-flex gap-1.5 hover:bg-[#F9F9F9] text-[14px] transition text-xs font-normal text-[#0A6EE7] bg-white border-[#ECECEC] border rounded-xl pt-2 pr-2 pb-2 pl-2 items-center">ดูรายละเอียด</button>
</div></div><div className="ring-1 ring-gray-200 hover:bg-gray-50 transition bg-white rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 flex ring-1 ring-black/10 text-white bg-gray-900 rounded-lg items-center justify-center">
<img alt="Meta logo" className="h-full w-full bg-stone-50 object-contain" loading="lazy" src="https://static.cdnlogo.com/logos/m/59/meta.svg?w=800&amp;q=80"/>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900 tracking-tight">Meta Platforms</div>
<div className="text-[12px] text-gray-500">Ticker: META</div>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[11px] ring-1 ring-emerald-200 font-medium text-emerald-700 bg-emerald-50 rounded pt-0.5 pr-2 pb-0.5 pl-2">A</span>
</div><div className="flex flex-col gap-2">
<div className="">
</div>
<div className="grid grid-cols-2 gap-6 mt-2">
<div className="">
<div className="text-[12px] text-gray-500">YTM</div>
<div className="text-[16px] font-medium text-gray-900">3.2–4.1%</div>
</div>
<div className="">
<div className="text-[12px] text-gray-500">วันครบกำหนด</div>
<div className="text-[16px] font-medium text-gray-900">2027–2032</div>
</div>
</div>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="button-sm-Secondary inline-flex gap-1.5 hover:bg-[#F9F9F9] text-[14px] transition text-xs font-normal text-[#0A6EE7] bg-white border-[#ECECEC] border rounded-xl pt-2 pr-2 pb-2 pl-2 items-center">ดูรายละเอียด</button>
</div></div>

</div>

<div className="mt-6">
<div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="hidden md:block">
<img alt="Investment consultation" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&amp;q=80"/>
</div>
<div className="p-5 sm:p-6 lg:p-8">
<div className="text-xs text-gray-500"></div>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight mt-1">สนใจติดต่อลงทุน Overseas Bonds</h3>
<form className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
<div className="sm:col-span-1">
<label className="block text-[12px] text-gray-600 pb-1.5">ชื่อ*</label>
<input className="w-full ring-1 ring-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-gray-300 text-sm text-gray-900 rounded-lg pt-2.5 pr-3.5 pb-2.5 pl-3.5" placeholder="ระบุชื่อ" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-[12px] text-gray-600 pb-1.5">นามสกุล*</label>
<input className="w-full ring-1 ring-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-gray-300 text-sm text-gray-900 rounded-lg pt-2.5 pr-3.5 pb-2.5 pl-3.5" placeholder="ระบุนามสกุล" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-[12px] text-gray-600 pb-1.5">เบอร์โทรศัพท์มือถือ*</label>
<input className="w-full rounded-lg ring-1 ring-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-gray-300" inputmode="tel" placeholder="08x-xxx-xxxx" required="" type="tel"/>
</div>
<div className="sm:col-span-1">
<label className="block text-[12px] text-gray-600 pb-1.5">อีเมล*</label>
<input className="w-full rounded-lg ring-1 ring-gray-200 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-gray-300" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<div className="ring-1 ring-gray-200 sm:p-5 lg:p-6 bg-gray-50 rounded-xl pt-4 pr-4 pb-4 pl-4">
<h4 className="text-[18px] sm:text-[20px] font-normal text-gray-900 tracking-tight">Apple Overseas Bonds ที่สนใจ</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4" id="proj-list">

<label className="flex items-start gap-3 cursor-pointer" htmlFor="proj-surat">
<input className="peer sr-only" id="proj-surat" name="selectedBonds[]" type="checkbox" value="US037833CF61"/>
<span className="h-5 w-5 ring-1 ring-gray-300 flex items-center justify-center transition peer-checked:bg-[#0A6EE7] peer-:ring-[#0A6EE7] bg-white rounded-md">
<svg className="lucide lucide-check hidden peer-checked:block w-[16px] h-[16px] text-white" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] font-light text-gray-900 tracking-tight">Apple Inc 1.37% 2026</div>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer" htmlFor="proj-ubon">
<input className="peer sr-only" id="proj-ubon" name="selectedBonds[]" type="checkbox" value="US037833DG77"/>
<span className="h-5 w-5 rounded-md ring-1 ring-gray-300 bg-white flex items-center justify-center transition peer-checked:bg-[#0A6EE7] peer-checked:ring-[#0A6EE7]">
<svg className="lucide lucide-check hidden peer-checked:block w-[16px] h-[16px] text-white" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] font-medium text-gray-900 tracking-tight">Apple Inc 1.65% 2027</div>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer" htmlFor="proj-udon">
<input className="peer sr-only" id="proj-udon" name="selectedBonds[]" type="checkbox" value="US037833DU16"/>
<span className="h-5 w-5 rounded-md ring-1 ring-gray-300 bg-white flex items-center justify-center transition peer-checked:bg-[#0A6EE7] peer-checked:ring-[#0A6EE7]">
<svg className="lucide lucide-check hidden peer-checked:block w-[16px] h-[16px] text-white" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] font-medium text-gray-900 tracking-tight">Apple Inc 3.05% 2032</div>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer" htmlFor="proj-nst">
<input className="peer sr-only" id="proj-nst" name="selectedBonds[]" type="checkbox" value="US037833DV98"/>
<span className="h-5 w-5 rounded-md ring-1 ring-gray-300 bg-white flex items-center justify-center transition peer-checked:bg-[#0A6EE7] peer-checked:ring-[#0A6EE7]">
<svg className="lucide lucide-check hidden peer-checked:block w-[16px] h-[16px] text-white" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="leading-tight">
<div className="text-[12px] font-medium text-gray-900 tracking-tight">Apple Inc 4.45% 2035</div>
</div>
</label>

<label className="flex items-start gap-3 cursor-pointer" htmlFor="proj-rayong">
<input className="peer sr-only" id="proj-rayong" name="selectedBonds[]" type="checkbox" value="US037833DW70"/>
<span className="h-5 w-5 rounded-md ring-1 ring-gray-300 bg-white flex items-center justify-center transition peer-checked:bg-[#0A6EE7] peer-checked:ring-[#0A6EE7]">
<svg className="lucide lucide-check hidden peer-checked:block w-[16px] h-[16px] text-white" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
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
<div className="sm:p-6 lg:p-8 pt-5 pr-5 pb-5 pl-5">
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
<img alt="Yuanta Securities logo" className="h-6" src="https://www.yuanta.co.th/cms/uploads/Logo_aa5fd5a665.svg"/>
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
