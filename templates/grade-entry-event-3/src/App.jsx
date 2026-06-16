import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener("DOMContentLoaded", function () {
        if (window.lucide) {
          window.lucide.createIcons();
        }

        const filledBgClass = "bg-[#ffe0b2]";
        const emptyBgClass = "bg-white";

        document.querySelectorAll(".grade-input").forEach((input) => {
          // מצב התחלתי
          input.value = "";
          input.classList.remove(filledBgClass);
          if (!input.classList.contains(emptyBgClass)) {
            input.classList.add(emptyBgClass);
          }

          input.addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (val === "") {
              e.target.classList.remove(filledBgClass);
              if (!e.target.classList.contains(emptyBgClass)) {
                e.target.classList.add(emptyBgClass);
              }
            } else {
              e.target.classList.remove(emptyBgClass);
              if (!e.target.classList.contains(filledBgClass)) {
                e.target.classList.add(filledBgClass);
              }
            }
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-[110rem] bg-[#f3f3f3]">

<header className="w-full bg-white shadow-sm flex items-center justify-between gap-4 py-3 pr-6 pl-4">
<div className="flex items-center gap-4">
<button aria-label="תפריט" className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100">
<i className="w-4 h-4 stroke-[1.5] text-gray-700" data-lucide="menu"></i>
</button>
<div className="flex flex-col leading-tight">
<span className="text-base text-gray-500">
              31/07/2019 - 24/07/2019
            </span>
<span className="text-xl font-semibold tracking-tight text-gray-900">
              אומנות שימושית יב'-יב1 ליבי
            </span>
</div>
</div>
<div className="flex items-center gap-10 text-base text-gray-700">
<button className="flex items-center gap-1 hover:text-black">
<span className="font-medium">מידע כללי</span>
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-1 hover:text-black">
<span className="font-medium">התנהגות</span>
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-1 hover:text-black">
<span className="font-medium">ציונים</span>
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-1 hover:text-black">
<span className="font-medium">הערות תעודה</span>
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center gap-1 hover:text-black">
<span className="font-medium">ניהול למידה</span>
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="chevron-down"></i>
</button>
</div>
<div className="flex items-center gap-4">
<button aria-label="חיפוש" className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100">
<i className="w-4 h-4 stroke-[1.5] text-gray-700" data-lucide="search"></i>
</button>
<button aria-label="התראות" className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100">
<i className="w-4 h-4 stroke-[1.5] text-gray-700" data-lucide="bell"></i>
</button>
<div className="flex flex-col items-end leading-tight text-base">
<span className="font-semibold">67132</span>
<span className="text-gray-500">מורה</span>
</div>
</div>
</header>

<section className="bg-white border-y border-gray-200 px-8 py-3 mt-1">
<div className="flex flex-wrap items-center justify-between gap-3 mb-3">
<div className="flex flex-wrap items-center gap-2 text-base text-gray-700">
<span className="font-semibold">שם אירוע הציון:</span>
<span className="font-normal">בחן ראשון (בחן)</span>
<span className="text-gray-400">|</span>
<span className="font-semibold">תאריך אירוע הציון:</span>
<span className="font-normal">24/12/2020</span>
<span className="text-gray-400">|</span>
<span className="font-semibold">משקל אירוע הציון:</span>
<span className="font-normal">50</span>
</div>
<button className="flex items-center gap-1 text-base text-red-500 hover:text-red-600">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="edit-3"></i>
<span className="font-semibold">עריכת פרטי אירוע ציון</span>
</button>
</div>
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="text-base text-gray-700">
<span className="font-semibold">תאריך חשיפה לתלמידים:</span>
<span className="font-normal">24/12/2020</span>
</div>
<div className="flex items-center gap-2">
<button className="rounded-full bg-[#ffb300] text-white text-base px-5 py-1.5 shadow-sm font-semibold">
              יבוא ציונים מקובץ אקסל
            </button>
<button className="rounded-full bg-200 text-gray-400 text-base px-5 py-1.5 cursor-default font-semibold">
              יבוא ציונים מ־Moodle
            </button>
</div>
<div className="flex items-center gap-2">
<button className="rounded-full bg-[#005ac1] text-white text-base px-5 py-1.5 font-semibold">
              שמור שינויים
            </button>
<button className="rounded-full border border-[#ff9800] text-[#ff9800] text-base px-5 py-1.5 font-semibold">
              חזור לרשימת אירועי ציון
            </button>
</div>
</div>
</section>

<section className="bg-white mt-3 px-8 pt-4 pb-3 border-b border-gray-200">
<div className="flex flex-wrap items-center justify-between gap-3">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            הזנת ציונים לאירוע ציון: מבחן ראשון - 24/12/2020
          </h1>
<div className="flex items-center gap-2 text-base">
<label className="text-gray-600 font-medium">חיפוש</label>
<input className="border border-gray-300 rounded bg-white h-7 w-44 text-base px-2 focus:outline-none focus:ring-1 focus:ring-blue-500" type="text"/>
</div>
</div>
</section>

<main className="bg-white mt-0 px-8 pb-8 pt-4">

<div className="flex items-center gap-3 mb-3 text-gray-600">
<button aria-label="עזרה" className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-300 bg-white">
<span className="text-base font-semibold">?</span>
</button>
<button aria-label="הגדרות" className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-300 bg-white">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="settings"></i>
</button>
</div>

<div className="border border-gray-300 rounded-sm overflow-hidden bg-white shadow-sm">

<div className="grid grid-cols-[3rem,6rem,12rem,6rem,4rem,8rem,11rem,11rem,10rem] text-base bg-[#f7f7f7] border-b border-gray-300">
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
<div className="flex items-center justify-center py-2 border-l border-gray-300 gap-1 font-semibold">
<span>ציון מספרי</span>
</div>
<div className="flex items-center justify-center py-2 border-l border-gray-300 gap-1 font-semibold">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-500" data-lucide="eye"></i>
<span>ציון מילולי</span>
</div>
<div className="flex items-center justify-center py-2 border-l border-gray-300 gap-1 font-semibold">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-500" data-lucide="eye-off"></i>
<span>הערה חופשית</span>
</div>
<div className="flex items-center justify-center py-2 font-semibold">
              פעולות
            </div>
</div>

<div className="text-base" id="grade-rows">

<div className="grid grid-cols-[3rem,6rem,12rem,6rem,4rem,8rem,11rem,11rem,10rem] border-b border-gray-200 bg-white">
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
<input className="grade-input w-20 h-7 text-center border border-gray-300 bg-white rounded-none focus:outline-none focus:ring-0" data-row="1" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="grade-input w-32 h-7 border border-gray-300 bg-white rounded-none text-center focus:outline-none focus:ring-0" data-row="1-verbal" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="w-32 h-7 border border-gray-300 bg-white rounded-none text-center focus:outline-none focus:ring-0" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 gap-1.5">
<button aria-label="מידע" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 bg-white">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="info"></i>
</button>
<button aria-label="הזז" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 bg-white">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="move-vertical"></i>
</button>
</div>
</div>

<div className="grid grid-cols-[3rem,6rem,12rem,6rem,4rem,8rem,11rem,11rem,10rem] border-b border-gray-200 bg-white">
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
<input className="grade-input w-20 h-7 text-center border border-gray-300 bg-white rounded-none focus:outline-none focus:ring-0" data-row="2" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="grade-input w-32 h-7 border border-gray-300 bg-white rounded-none text-center focus:outline-none focus:ring-0" data-row="2-verbal" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="w-32 h-7 border border-gray-300 bg-white rounded-none text-center focus:outline-none focus:ring-0" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 gap-1.5">
<button aria-label="מידע" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 bg-white">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="info"></i>
</button>
<button aria-label="הזז" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 bg-white">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="move-vertical"></i>
</button>
</div>
</div>

<div className="grid grid-cols-[3rem,6rem,12rem,6rem,4rem,8rem,11rem,11rem,10rem] border-b border-gray-200 bg-white">
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
<input className="grade-input w-20 h-7 text-center border border-gray-300 bg-white rounded-none focus:outline-none focus:ring-0" data-row="3" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="grade-input w-32 h-7 border border-gray-300 bg-white rounded-none text-center focus:outline-none focus:ring-0" data-row="3-verbal" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="w-32 h-7 border border-gray-300 bg-white rounded-none text-center focus:outline-none focus:ring-0" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 gap-1.5">
<button aria-label="מידע" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 bg-white">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="info"></i>
</button>
<button aria-label="הזז" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 bg-white">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="move-vertical"></i>
</button>
</div>
</div>

<div className="grid grid-cols-[3rem,6rem,12rem,6rem,4rem,8rem,11rem,11rem,10rem] border-b border-gray-200 bg-white">
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
<input className="grade-input w-20 h-7 text-center border border-gray-300 bg-white rounded-none focus:outline-none focus:ring-0" data-row="4" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="grade-input w-32 h-7 border border-gray-300 bg-white rounded-none text-center focus:outline-none focus:ring-0" data-row="4-verbal" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="w-32 h-7 border border-gray-300 bg-white rounded-none text-center focus:outline-none focus:ring-0" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 gap-1.5">
<button aria-label="מידע" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 bg-white">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="info"></i>
</button>
<button aria-label="הזז" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 bg-white">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="move-vertical"></i>
</button>
</div>
</div>

<div className="grid grid-cols-[3rem,6rem,12rem,6rem,4rem,8rem,11rem,11rem,10rem] bg-white">
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
<input className="grade-input w-20 h-7 text-center border border-gray-300 bg-white rounded-none focus:outline-none focus:ring-0" data-row="5" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="grade-input w-32 h-7 border border-gray-300 bg-white rounded-none text-center focus:outline-none focus:ring-0" data-row="5-verbal" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 border-l border-gray-200">
<input className="w-32 h-7 border border-gray-300 bg-white rounded-none text-center focus:outline-none focus:ring-0" type="text"/>
</div>

<div className="flex items-center justify-center py-1.5 gap-1.5">
<button aria-label="מידע" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 bg-white">
<i className="w-3.5 h-3.5 stroke-[1.5] text-gray-600" data-lucide="info"></i>
</button>
<button aria-label="הזז" className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 bg-white">
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
