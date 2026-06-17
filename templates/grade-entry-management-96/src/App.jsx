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



      document.addEventListener("DOMContentLoaded", function () {
        if (window.lucide) {
          window.lucide.createIcons();
        }

        const filledClass = "grade-filled-bg";
        const emptyClass = "grade-empty-bg";

        // Dynamic coloring of grade inputs
        document.querySelectorAll(".grade-input").forEach((input) => {
          input.value = "";
          input.classList.remove(filledClass);
          if (!input.classList.contains(emptyClass)) {
            input.classList.add(emptyClass);
          }

          input.addEventListener("input", (e) => {
            const value = e.target.value.trim();
            if (value === "") {
              e.target.classList.remove(filledClass);
              if (!e.target.classList.contains(emptyClass)) {
                e.target.classList.add(emptyClass);
              }
              e.target.style.borderColor = "#d1d5db";
            } else {
              e.target.classList.remove(emptyClass);
              if (!e.target.classList.contains(filledClass)) {
                e.target.classList.add(filledClass);
              }
              e.target.style.borderColor = "transparent";
            }
          });
        });

        const tooltipTexts = {
          verbal: "האם אתה רוצה שהתלמיד יראה את הציון המילולי?",
          remark: "האם אתה רוצה שהתלמיד יראה את ההערה החופשית?",
        };

        const state = {
          verbal: true,
          remark: false,
        };

        function updateVisibility(targetKey) {
          const show = state[targetKey];

          document
            .querySelectorAll(
              `.visibility-toggle[data-target="${targetKey}"] i`
            )
            .forEach((icon) => {
              const name = show ? "eye" : "eye-off";
              icon.setAttribute("data-lucide", name);
            });

          if (window.lucide) {
            window.lucide.createIcons();
          }
        }

        function handleTooltip(button, targetKey) {
          let tooltip;

          const showTooltip = () => {
            if (tooltip) return;
            tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            tooltip.innerText = tooltipTexts[targetKey];
            button.parentElement.appendChild(tooltip);
          };

          const hideTooltip = () => {
            if (tooltip && tooltip.parentElement) {
              tooltip.parentElement.removeChild(tooltip);
            }
            tooltip = null;
          };

          button.addEventListener("mouseenter", showTooltip);
          button.addEventListener("mouseleave", hideTooltip);
          button.addEventListener("focus", showTooltip);
          button.addEventListener("blur", hideTooltip);
        }

        document.querySelectorAll(".visibility-toggle").forEach((btn) => {
          const key = btn.getAttribute("data-target");
          handleTooltip(btn, key);

          btn.addEventListener("click", () => {
            state[key] = !state[key];
            updateVisibility(key);

            const selector =
              key === "verbal" ? ".verbal-col" : ".remark-col";
            document.querySelectorAll(selector).forEach((cell) => {
              cell.style.opacity = state[key] ? "1" : "0.35";
            });
          });

          const selector = key === "verbal" ? ".verbal-col" : ".remark-col";
          document.querySelectorAll(selector).forEach((cell) => {
            cell.style.opacity = state[key] ? "1" : "0.35";
          });

          updateVisibility(key);
        });
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
      
<div className="w-full max-w-[110rem] bg-[#f3f3f3]">

<header className="w-full bg-white shadow-sm flex items-center justify-between gap-4 py-1.5 pr-4 pl-6">

<div className="flex items-center gap-3 flex-1">
<button aria-label="תפריט" className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100">
<i className="w-4 h-4 stroke-[1.5] text-gray-700" data-lucide="menu"></i>
</button>
<div className="flex flex-col leading-tight items-end">
<span className="text-xs text-gray-500">
              24/07/2019 - 31/07/2019
            </span>
<span className="text-2xl font-semibold tracking-tight text-gray-900 whitespace-nowrap">
              אומנות שימושית יב'-יב1 ליבי
            </span>
</div>
</div>

<div className="flex items-center gap-6 text-sm text-gray-700">
<button className="top-link flex items-center gap-1">
<span className="font-medium">מידע כללי</span>
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-500" data-lucide="chevron-down"></i>
</button>
<button className="top-link flex items-center gap-1">
<span className="font-medium">התנהגות</span>
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-500" data-lucide="chevron-down"></i>
</button>
<button className="top-link flex items-center gap-1">
<span className="font-medium">ציונים</span>
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-500" data-lucide="chevron-down"></i>
</button>
<button className="top-link flex items-center gap-1">
<span className="font-medium">הערות תעודה</span>
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-500" data-lucide="chevron-down"></i>
</button>
<button className="top-link flex items-center gap-1">
<span className="font-medium">ניהול למידה</span>
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-500" data-lucide="chevron-down"></i>
</button>
</div>

<div className="flex items-center gap-4">
<div className="flex flex-col items-end leading-tight text-sm">
<span className="font-semibold tracking-tight text-gray-900">
              67132
            </span>
<span className="text-gray-500">מורה</span>
</div>
<div className="flex items-center gap-2">
<button aria-label="חיפוש" className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-100">
<i className="w-4 h-4 stroke-[1.5] text-gray-700" data-lucide="search"></i>
</button>
<button aria-label="התראות" className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-gray-100">
<i className="w-4 h-4 stroke-[1.5] text-gray-700" data-lucide="bell"></i>
</button>
</div>
</div>
</header>

<section className="bg-white border-b border-gray-200 px-8 py-3 mt-1">
<div className="flex flex-wrap items-center justify-between gap-4 mb-2">
<div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-700 leading-snug">
<span className="font-semibold">שם אירוע הציון:</span>
<span>בחן ראשון (בחן)</span>
<span className="text-gray-400 mx-1">|</span>
<span className="font-semibold">תאריך אירוע הציון:</span>
<span>24/12/2020</span>
<span className="text-gray-400 mx-1">|</span>
<span className="font-semibold">משקל אירוע הציון:</span>
<span>50</span>
</div>
<button className="flex items-center gap-1 text-sm text-[#ff9800] hover:text-[#f57c00]">
<span className="font-semibold">עריכת פרטי אירוע ציון</span>
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="edit-3"></i>
</button>
</div>
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="text-sm text-gray-700">
<span className="font-semibold">תאריך חשיפה לתלמידים:</span>
<span>24/12/2020</span>
</div>
<div className="flex items-center gap-2">
<button className="rounded-full bg-[#ffb300] text-white text-sm px-4 py-1.5 shadow-sm font-semibold">
              יבוא ציונים מקובץ אקסל
            </button>
<button className="rounded-full border border-[#ffb300] text-[#ffb300] text-sm px-4 py-1.5 cursor-default font-semibold bg-white">
              יבוא ציונים מ־Moodle
            </button>
</div>
<div className="flex items-center gap-2">
<button className="rounded-full bg-[#005ac1] text-white text-sm px-5 py-1.5 font-semibold">
              שמור שינויים
            </button>
<button className="rounded-full border border-[#ff9800] text-[#ff9800] text-sm px-5 py-1.5 font-semibold bg-white">
              חזור לרשימת אירועי ציון
            </button>
</div>
</div>
</section>

<section className="bg-white mt-3 px-8 pt-3 pb-4 border-b border-gray-200">
<div className="flex flex-wrap items-center justify-between gap-6">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 text-right flex-1">
            הזנת ציונים לאירוע ציון: מבחן ראשון - 24/12/2020
          </h1>
<div className="flex flex-col gap-1 w-full sm:w-64">
<div className="w-full border border-gray-300 bg-white flex items-center h-8 rounded-sm">
<input className="w-full h-full px-3 text-sm text-gray-700 focus:outline-none" type="text"/>
</div>
<span className="text-sm text-gray-600 text-right">חיפוש</span>
</div>
</div>
</section>

<main className="bg-white mt-0 px-8 pb-8 pt-3">

<div className="flex items-center justify-end gap-2 mb-3 text-gray-600">
<button aria-label="הגדרות" className="icon-circle-btn">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="settings"></i>
</button>
<button aria-label="עזרה" className="icon-circle-btn">
<span className="text-xs font-semibold">?</span>
</button>
</div>

<div className="border border-gray-300 rounded-md bg-white shadow-sm table-wrapper">

<div className="grades-grid text-sm bg-[#f7f7f7] border-b border-gray-300">
<div className="flex items-center justify-center py-2 border-l border-gray-300 font-semibold">
              מס'
            </div>
<div className="flex items-center justify-center py-2 border-l border-gray-300 font-semibold">
              ת.ז התלמיד
            </div>
<div className="flex items-center justify-center py-2 border-l border-gray-300 font-semibold">
              שם התלמיד
            </div>
<div className="flex items-center justify-center py-2 border-l border-gray-300 font-semibold">
              שכבה
            </div>
<div className="flex items-center justify-center py-2 border-l border-gray-300 font-semibold">
              כיתה
            </div>
<div className="flex items-center justify-center py-2 border-l border-gray-300 font-semibold">
              ציון מספרי
            </div>

<div className="flex items-center justify-center py-2 border-l border-gray-300 gap-1 font-semibold relative">
<button className="visibility-toggle flex items-center gap-1 text-gray-700" data-target="verbal" type="button">
<i className="w-4 h-4 stroke-[1.5] text-gray-500" data-lucide="eye"></i>
<span>ציון מילולי</span>
</button>
</div>

<div className="flex items-center justify-center py-2 border-l border-gray-300 gap-1 font-semibold relative">
<button className="visibility-toggle flex items-center gap-1 text-gray-700" data-target="remark" type="button">
<i className="w-4 h-4 stroke-[1.5] text-gray-500" data-lucide="eye-off"></i>
<span>הערה חופשית</span>
</button>
</div>
<div className="flex items-center justify-center py-2 font-semibold">
              פעולות
            </div>
</div>

<div className="text-sm" id="grade-rows">

<div className="grades-grid border-b border-gray-200 bg-white">
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                1
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                1340
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800 whitespace-nowrap">
                משפחתי 1340 משפחתי
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                יב
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                2
              </div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="grade-input grade-cell-input w-24 text-center grade-empty-bg" data-row="1" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200 verbal-col">
<input className="grade-input grade-cell-input w-32 text-center grade-empty-bg" data-row="1-verbal" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200 remark-col">
<input className="grade-cell-input w-32 text-center" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 gap-1.5">
<button aria-label="מידע" className="icon-circle-btn">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="info"></i>
</button>
<button aria-label="הזז" className="icon-circle-btn">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="move-vertical"></i>
</button>
</div>
</div>

<div className="grades-grid border-b border-gray-200 bg-white">
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                2
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                1345
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800 whitespace-nowrap">
                משפחתי 1345 משפחתי
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                יב
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                2
              </div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="grade-input grade-cell-input w-24 text-center grade-empty-bg" data-row="2" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200 verbal-col">
<input className="grade-input grade-cell-input w-32 text-center grade-empty-bg" data-row="2-verbal" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200 remark-col">
<input className="grade-cell-input w-32 text-center" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 gap-1.5">
<button aria-label="מידע" className="icon-circle-btn">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="info"></i>
</button>
<button aria-label="הזז" className="icon-circle-btn">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="move-vertical"></i>
</button>
</div>
</div>

<div className="grades-grid border-b border-gray-200 bg-white">
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                3
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                1357
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800 whitespace-nowrap">
                משפחתי 1357 משפחתי
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                יב
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                2
              </div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="grade-input grade-cell-input w-24 text-center grade-empty-bg" data-row="3" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200 verbal-col">
<input className="grade-input grade-cell-input w-32 text-center grade-empty-bg" data-row="3-verbal" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200 remark-col">
<input className="grade-cell-input w-32 text-center" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 gap-1.5">
<button aria-label="מידע" className="icon-circle-btn">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="info"></i>
</button>
<button aria-label="הזז" className="icon-circle-btn">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="move-vertical"></i>
</button>
</div>
</div>

<div className="grades-grid border-b border-gray-200 bg-white">
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                4
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                1364
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800 whitespace-nowrap">
                משפחתי 1364 משפחתי
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                יב
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                2
              </div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="grade-input grade-cell-input w-24 text-center grade-empty-bg" data-row="4" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200 verbal-col">
<input className="grade-input grade-cell-input w-32 text-center grade-empty-bg" data-row="4-verbal" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200 remark-col">
<input className="grade-cell-input w-32 text-center" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 gap-1.5">
<button aria-label="מידע" className="icon-circle-btn">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="info"></i>
</button>
<button aria-label="הזז" className="icon-circle-btn">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="move-vertical"></i>
</button>
</div>
</div>

<div className="grades-grid bg-white">
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                5
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                1368
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800 whitespace-nowrap">
                משפחתי 1368 משפחתי
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                יב
              </div>
<div className="flex items-center justify-center py-2.5 border-l border-gray-200 text-gray-800">
                2
              </div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="grade-input grade-cell-input w-24 text-center grade-empty-bg" data-row="5" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200 verbal-col">
<input className="grade-input grade-cell-input w-32 text-center grade-empty-bg" data-row="5-verbal" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 border-l border-gray-200 remark-col">
<input className="grade-cell-input w-32 text-center" type="text"/>
</div>
<div className="flex items-center justify-center py-1.5 gap-1.5">
<button aria-label="מידע" className="icon-circle-btn">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="info"></i>
</button>
<button aria-label="הזז" className="icon-circle-btn">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="move-vertical"></i>
</button>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
