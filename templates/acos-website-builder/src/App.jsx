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
          lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }

        const mobileToggle = document.getElementById("mobile-menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");

        if (mobileToggle && mobileMenu) {
          mobileToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
          });

          // close mobile menu on link click
          mobileMenu.querySelectorAll("a[href^='#']").forEach((link) => {
            link.addEventListener("click", () => {
              mobileMenu.classList.add("hidden");
            });
          });
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
      
<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50">

<header className="border-b border-slate-200 bg-white/90 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-3 md:py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 flex items-center justify-center shadow-md shadow-sky-200">
<span className="text-xs font-semibold tracking-tight text-white">ac</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base font-semibold tracking-tight text-slate-900">acos.sites</span>
<span className="text-xs text-slate-500">בניית אתרים חכמים</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#hero">ראשי</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#services">שירותים</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#process">תהליך עבודה</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#portfolio">עבודות</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#about">עלינו</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#contact">צור קשר</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs md:text-sm text-slate-800 hover:border-sky-400 hover:text-sky-700 transition-colors" href="tel:0547221162">
<span className="inline-flex items-center justify-center rounded-full bg-sky-50 text-sky-500 p-1">
<i className="w-3.5 h-3.5" data-lucide="phone"></i>
</span>
<span>שיחה טלפונית</span>
</a>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-sky-500 via-cyan-400 to-emerald-400 px-4 py-1.5 text-xs md:text-sm font-semibold text-white shadow-md shadow-sky-200 hover:shadow-lg transition-shadow" href="#contact">
<span>הצעת מחיר מהירה</span>
<i className="w-3.5 h-3.5" data-lucide="arrow-left"></i>
</a>

<button className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white h-9 w-9 text-slate-700 hover:border-sky-400 hover:text-sky-600 transition-colors" id="mobile-menu-toggle">
<i className="w-4.5 h-4.5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobile-menu">
<nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2 text-sm">
<a className="py-1 text-slate-700 hover:text-sky-600 transition-colors" href="#hero">ראשי</a>
<a className="py-1 text-slate-700 hover:text-sky-600 transition-colors" href="#services">שירותים</a>
<a className="py-1 text-slate-700 hover:text-sky-600 transition-colors" href="#process">תהליך עבודה</a>
<a className="py-1 text-slate-700 hover:text-sky-600 transition-colors" href="#portfolio">עבודות</a>
<a className="py-1 text-slate-700 hover:text-sky-600 transition-colors" href="#about">עלינו</a>
<a className="py-1 text-slate-700 hover:text-sky-600 transition-colors" href="#contact">צור קשר</a>
<div className="pt-2 mt-1 border-t border-slate-200 flex flex-col gap-2">
<a className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 hover:border-sky-400 hover:text-sky-700 transition-colors" href="tel:0547221162">
<i className="w-3.5 h-3.5 text-sky-500" data-lucide="phone"></i>
<span>שיחה טלפונית</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-sky-500 via-cyan-400 to-emerald-400 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-sky-200" href="#contact">
<span>הצעת מחיר מהירה</span>
</a>
</div>
</nav>
</div>
</header>

<main className="flex-1">

<section className="border-b border-slate-200" id="hero">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20 grid lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-16 items-center">

<div className="space-y-6 md:space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50/70 px-3 py-1 text-xs text-sky-700">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>acos.sites • סטודיו לבניית אתרים</span>
</div>
<div className="space-y-4 md:space-y-5">
<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
                  אתרי וורדפרס מעוצבים,
                  <br className="hidden sm:block"/>
                  שבונים אמון ומייצרים לקוחות.
                </h1>
<p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  ב־acos.sites אנחנו בונים אתרים מהירים, נקיים ומדויקים לעסק שלך – מדף נחיתה חד ועד חנות אונליין.  
                  עיצוב מודרני, חוויית שימוש חכמה וניהול פשוט כמו מערכת וורדפרס שאתם מכירים.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-200 hover:bg-sky-500 transition-colors" href="#contact">
<i className="w-4 h-4" data-lucide="send"></i>
<span>שלחו לי את פרטי העסק שלכם</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-800 hover:border-sky-400 hover:text-sky-600 transition-colors" href="https://wa.me/972547221162" target="_blank">
<i className="w-4 h-4" data-lucide="messages-square"></i>
<span>צ׳אט מהיר ב־WhatsApp</span>
</a>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="shield-check"></i>
<span>התאמה מלאה למובייל וטאבלט</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-sky-500" data-lucide="rocket"></i>
<span>ביצועים מהירים וידידותי לגוגל</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-6 bg-gradient-to-l from-sky-200/70 via-cyan-100/40 to-emerald-100/60 blur-3xl opacity-70"></div>
<div className="relative rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200 overflow-hidden">
<div className="grid grid-rows-[auto,auto]">

<div className="relative overflow-hidden">
<div className="aspect-video bg-gradient-to-tr from-slate-900 via-slate-800 to-sky-700">

<div className="absolute inset-y-6 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-sky-300/80 to-transparent"></div>

<div className="absolute inset-y-6 right-[55%] rounded-2xl border border-slate-700/60 bg-slate-900/80 shadow-lg shadow-black/50 flex items-center justify-center">
<div className="space-y-2 text-center px-4">
<span className="inline-flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700/80 px-3 py-1 text-[0.65rem] text-sky-200">
<i className="w-3.5 h-3.5 mr-1" data-lucide="monitor-smartphone"></i>
                            מותאם לכל מסך
                          </span>
<p className="text-sm text-slate-100 leading-relaxed">
                            חוויית משתמש חלקה
                            <br/>
                            בדסקטופ, טאבלט ומובייל
                          </p>
</div>
</div>

<div className="absolute inset-y-10 left-[52%] rounded-2xl border border-sky-500/50 bg-slate-900/90 shadow-xl shadow-sky-900/50 flex items-center justify-center">
<div className="space-y-2 text-center px-4">
<p className="text-xs text-sky-200 tracking-tight">
                            עיצוב מרהיב לנכסים דיגיטליים
                          </p>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-white leading-tight">
                            אתר וורדפרס שנראה
                            <br/>
                            כמו מותג גדול
                          </h2>
<div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/60 px-3 py-1 text-[0.65rem] text-emerald-100">
<i className="w-3.5 h-3.5 text-emerald-200" data-lucide="stars"></i>
<span>שליטה מלאה בתוכן מתוך המערכת</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 border-t border-slate-200 bg-slate-50/80 p-3 sm:p-4">
<div className="rounded-2xl bg-white border border-slate-200 p-2.5 space-y-1">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-500">מהירות</span>
<i className="w-3.5 h-3.5 text-sky-500" data-lucide="gauge"></i>
</div>
<div className="text-base font-semibold text-slate-900 leading-tight">+92</div>
<div className="text-[0.65rem] text-emerald-500">ציון Lighthouse</div>
</div>
<div className="rounded-2xl bg-white border border-slate-200 p-2.5 space-y-1">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-500">נגישות</span>
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="accessibility"></i>
</div>
<div className="text-base font-semibold text-slate-900 leading-tight">+95</div>
<div className="text-[0.65rem] text-emerald-500">מותאם לכולם</div>
</div>
<div className="rounded-2xl bg-white border border-slate-200 p-2.5 space-y-1">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-500">זמן טעינה</span>
<i className="w-3.5 h-3.5 text-cyan-500" data-lucide="timer"></i>
</div>
<div className="text-base font-semibold text-slate-900 leading-tight">&lt; 2s</div>
<div className="text-[0.65rem] text-emerald-500">באתר ממוצע</div>
</div>
</div>
<div className="flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-[0.7rem] font-semibold text-white">
                        ac
                      </div>
<div className="text-[0.7rem] leading-tight">
<div className="text-slate-900">סטודיו acos.sites</div>
<div className="text-slate-500">ליווי אישי בכל שלב</div>
</div>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.65rem] text-slate-600">
<i className="w-3.5 h-3.5 text-sky-500" data-lucide="sparkles"></i>
<span>מותאם אישית לכל לקוח</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="services">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-8 md:space-y-10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                  מה אנחנו בונים ב־acos.sites?
                </h2>
<p className="text-base sm:text-lg text-slate-600 max-w-2xl">
                  פתרונות וורדפרס מלאים לעסקים, עצמאים ויזמים – עם דגש על עיצוב מודרני,
                  חוויית משתמש וניהול פשוט דרך מערכת נוחה.
                </p>
</div>
<p className="text-sm text-slate-500 max-w-sm">
                כל אתר מגיע עם הדרכה קצרה לניהול עצמי, גיבוי בסיסי ותוספים חיוניים כדי שיהיה לכם קל להמשיך לבד.
              </p>
</div>
<div className="grid md:grid-cols-3 gap-5 md:gap-6">

<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-3 shadow-sm shadow-slate-100">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2.5">
<div className="h-9 w-9 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500">
<i className="w-4.5 h-4.5" data-lucide="layout-dashboard"></i>
</div>
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
                        אתרי תדמית לעסקים
                      </h3>
<p className="text-xs text-slate-500">
                        עיצוב חד, מותאם למותג ולמסר שלכם.
                      </p>
</div>
</div>
<span className="rounded-full border border-sky-200 bg-sky-50 text-[0.7rem] text-sky-700 px-2 py-0.5">
                    הפופולרי ביותר
                  </span>
</div>
<p className="text-sm text-slate-600 flex-1 leading-relaxed">
                  אתר מלא הכולל דף בית, אודות, שירותים, גלריה וטופס יצירת קשר.  
                  מותאם לקידום אורגני עתידי עם מבנה נכון ומהיר.
                </p>
<div className="flex items-center justify-between text-xs text-slate-500 mt-1">
<span>מתאים לעסקים קטנים ובינוניים</span>
<span className="text-slate-900 font-semibold">החל מ־₪2,900</span>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-3 shadow-sm shadow-slate-100">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2.5">
<div className="h-9 w-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
<i className="w-4.5 h-4.5" data-lucide="shopping-bag"></i>
</div>
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
                        חנויות אונליין
                      </h3>
<p className="text-xs text-slate-500">
                        מבוססות WordPress + WooCommerce.
                      </p>
</div>
</div>
</div>
<p className="text-sm text-slate-600 flex-1 leading-relaxed">
                  חנויות אונליין מעוצבות עם סליקה מאובטחת, ניהול מוצרים, הזמנות ומלאי,  
                  חיבור ל־Paybox / Bit ועוד – לפי הצורך.
                </p>
<div className="flex items-center justify-between text-xs text-slate-500 mt-1">
<span>מתאים לעסקים שרוצים למכור אונליין</span>
<span className="text-slate-900 font-semibold">החל מ־₪4,900</span>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-3 shadow-sm shadow-slate-100">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2.5">
<div className="h-9 w-9 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-500">
<i className="w-4.5 h-4.5" data-lucide="file-digit"></i>
</div>
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
                        דפי נחיתה וקמפיינים
                      </h3>
<p className="text-xs text-slate-500">
                        ממוקדים להמרות ולקמפיינים דיגיטליים.
                      </p>
</div>
</div>
</div>
<p className="text-sm text-slate-600 flex-1 leading-relaxed">
                  דף נחיתה חד ומדויק לקמפיין בודד, השקה, כנס או מוצר.  
                  כולל חיבור לטפסים, WhatsApp, מערכות דיוור ואנליטיקס.
                </p>
<div className="flex items-center justify-between text-xs text-slate-500 mt-1">
<span>מתאים לפרסום ממומן</span>
<span className="text-slate-900 font-semibold">החל מ־₪1,400</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-slate-50" id="process">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-8 md:space-y-10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                  תהליך עבודה ברור ושקוף
                </h2>
<p className="text-base sm:text-lg text-slate-600 max-w-2xl">
                  יחד נעבור צעד־אחר־צעד – משלב הרעיון ועד העלייה לאוויר,  
                  כדי שהאתר ישרת את העסק ולא להפך.
                </p>
</div>
<div className="text-xs sm:text-sm text-slate-500 max-w-sm">
                לאורך כל הדרך תהיו בקשר ישיר עם הסטודיו, בלי מוקדים או גורמים מתווכים.
              </div>
</div>
<div className="grid md:grid-cols-4 gap-4 md:gap-5">
<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 space-y-3 shadow-sm shadow-slate-100">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 text-xs font-semibold">
                      01
                    </div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      שיחת היכרות ומיקוד צרכים
                    </h3>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="phone-call"></i>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                  מגדירים יחד מה המטרות של האתר, קהל היעד, מבנה ראשוני ותוכן נדרש. בסוף השיחה תקבלו הצעת מחיר ברורה.
                </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 space-y-3 shadow-sm shadow-slate-100">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 text-xs font-semibold">
                      02
                    </div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      עיצוב ואפיון חוויית משתמש
                    </h3>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="pen-tool"></i>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                  יצירת שפה עיצובית נקייה שתואמת למותג שלכם, כולל תצוגות לדסקטופ ולמובייל, עם דגש על חוויית שימוש.
                </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 space-y-3 shadow-sm shadow-slate-100">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 text-xs font-semibold">
                      03
                    </div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      פיתוח, חיבור וכלים
                    </h3>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="code-2"></i>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                  בניית האתר על גבי וורדפרס, חיבור לטפסים, WhatsApp, אנליטיקס, תוספים חשובים ואבטחה בסיסית.
                </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 space-y-3 shadow-sm shadow-slate-100">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2.5">
<div className="h-8 w-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 text-xs font-semibold">
                      04
                    </div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      העלאה לאוויר והדרכה
                    </h3>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="sparkle"></i>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                  העלאת האתר לשרת, בדיקות סופיות, וקבלת הדרכה קצרה לניהול עצמאי: עדכון טקסטים, בלוג, מוצרים ועוד.
                </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="portfolio">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-8 md:space-y-10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                  הצצה לסגנון שלנו
                </h2>
<p className="text-base sm:text-lg text-slate-600 max-w-2xl">
                  כמה דוגמאות לסוגי אתרים שנוכל לבנות גם לעסק שלך.  
                  אפשר כמובן להתאים הכל למיתוג ולצבעים האישיים.
                </p>
</div>
<div className="text-xs sm:text-sm text-slate-500 max-w-sm">
                את הדוגמאות האמיתיות נוכל לשלוח אליך בשיחה או במייל, לפי התחום שלך.
              </div>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-5">
<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col shadow-sm shadow-slate-100">
<div className="relative bg-gradient-to-br from-sky-100 via-slate-50 to-slate-100 aspect-video">
<div className="absolute inset-4 rounded-xl border border-slate-200 bg-white flex items-center justify-center">
<div className="space-y-2 text-center px-4">
<div className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[0.65rem] text-slate-600 mb-1">
<i className="w-3.5 h-3.5 text-sky-500" data-lucide="briefcase"></i>
<span>יועץ / נותן שירות</span>
</div>
<p className="text-xs text-slate-600">
                        אתר תדמית נקי עם דף אודות, שירותים וטופס יצירת קשר בולט.
                      </p>
</div>
</div>
</div>
<div className="p-4 sm:p-5 space-y-2 flex-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    אתר לעסק שירותי
                  </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                    מתאים לעורכי דין, יועצים, מטפלים, מאמנים ועוד – מציג שירותים בצורה ברורה ואמינה.
                  </p>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col shadow-sm shadow-slate-100">
<div className="relative bg-gradient-to-br from-emerald-100 via-slate-50 to-slate-100 aspect-video">
<div className="absolute inset-4 rounded-xl border border-slate-200 bg-white flex items-center justify-center">
<div className="space-y-2 text-center px-4">
<div className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[0.65rem] text-slate-600 mb-1">
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="store"></i>
<span>חנות קטנה / בוטיק</span>
</div>
<p className="text-xs text-slate-600">
                        דגש על מוצרים, חוויית קנייה פשוטה וסליקה נוחה.
                      </p>
</div>
</div>
</div>
<div className="p-4 sm:p-5 space-y-2 flex-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    חנות אונליין לבוטיק
                  </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                    קטלוג מוצרים, מסננים, עגלת קניות ותהליך רכישה מהיר – גם מהסמארטפון.
                  </p>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col shadow-sm shadow-slate-100">
<div className="relative bg-gradient-to-br from-cyan-100 via-slate-50 to-slate-100 aspect-video">
<div className="absolute inset-4 rounded-xl border border-slate-200 bg-white flex items-center justify-center">
<div className="space-y-2 text-center px-4">
<div className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[0.65rem] text-slate-600 mb-1">
<i className="w-3.5 h-3.5 text-cyan-500" data-lucide="megaphone"></i>
<span>קמפיין / מוצר בודד</span>
</div>
<p className="text-xs text-slate-600">
                        מיקוד חזק בהמרה: השארת פרטים, רכישה או הרשמה.
                      </p>
</div>
</div>
</div>
<div className="p-4 sm:p-5 space-y-2 flex-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    דף נחיתה לקמפיין
                  </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                    דף יחיד, מהיר ומדויק שמייצר לידים לקמפיינים ממומנים בפייסבוק, אינסטגרם וגוגל.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-slate-50" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 grid lg:grid-cols-[1.3fr,1fr] gap-8 md:gap-10 items-center">
<div className="space-y-4 md:space-y-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                מי עומד מאחורי acos.sites?
              </h2>
<p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                סטודיו שמתמחה בבניית אתרים ומערכות וורדפרס עם אהבה גדולה לעיצוב נקי וחוויית משתמש ברורה.  
                אחרי עשרות פרויקטים לעסקים ויזמים, המיקוד שלנו הוא לא "עוד אתר" – אלא נכס דיגיטלי שעובד בשבילכם.
              </p>
<p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                לכן ב־acos.sites הדגש הוא על שילוב בין עיצוב, טכנולוגיה והבנת העסק:
                מה המטרה, איך הלקוחות חושבים, ואיך הופכים מבקרים ללקוחות בפועל.
              </p>
<div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
<div className="rounded-xl border border-slate-200 bg-white p-3 space-y-1.5">
<div className="flex items-center gap-1.5 text-slate-500">
<i className="w-3.5 h-3.5 text-sky-500" data-lucide="clock-3"></i>
<span>שנות ניסיון</span>
</div>
<div className="text-base font-semibold text-slate-900 leading-tight">+5</div>
<div className="text-[0.7rem] text-slate-500">בעולמות ווב ודיגיטל</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-3 space-y-1.5">
<div className="flex items-center gap-1.5 text-slate-500">
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="target"></i>
<span>פרויקטים שהושלמו</span>
</div>
<div className="text-base font-semibold text-slate-900 leading-tight">+40</div>
<div className="text-[0.7rem] text-slate-500">לעסקים מכל הסוגים</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-3 space-y-1.5">
<div className="flex items-center gap-1.5 text-slate-500">
<i className="w-3.5 h-3.5 text-cyan-500" data-lucide="smile-plus"></i>
<span>לקוחות חוזרים</span>
</div>
<div className="text-base font-semibold text-slate-900 leading-tight">+70%</div>
<div className="text-[0.7rem] text-slate-500">מהלקוחות חוזרים לעוד פרויקט</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 space-y-4 shadow-sm shadow-slate-100">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 flex items-center justify-center text-xs font-semibold text-white">
                  ac
                </div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-900">
                    צוות acos.sites
                  </p>
<p className="text-xs text-slate-500">
                    סטודיו לבניית אתרים חכמים
                  </p>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                "מבחינתנו, אתר טוב הוא כזה שללקוח שלכם נעים לגלול בו, קל להבין מה אתם מציעים,  
                וברור מה הצעד הבא – להשאיר פרטים, להתקשר או לקנות. משם אנחנו מתחילים כל פרויקט."
              </p>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-2 text-xs text-slate-600">
<div className="flex items-center justify-between gap-2">
<span className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="check-circle-2"></i>
<span>עבודה ישירה וליווי צמוד</span>
</span>
<span className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-sky-500" data-lucide="pencil-ruler"></i>
<span>עיצוב ייחודי לכל פרויקט</span>
</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-rose-500" data-lucide="hand-heart"></i>
<span>בלי תבניות גנריות ובלי "מפעל אתרים" – יחס אישי לכל עסק.</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 grid lg:grid-cols-[1.1fr,1fr] gap-8 md:gap-10 items-start">
<div className="space-y-4 md:space-y-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                מדברים על האתר הבא שלכם?
              </h2>
<p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                השאירו פרטים, שלחו הודעה ב־WhatsApp או פשוט התקשרו –  
                נחזור אליכם בדרך שנוחה לכם, עם כמה שאלות מיקוד והצעת מחיר שקופה.
              </p>
<div className="grid sm:grid-cols-2 gap-3 text-sm">
<a className="rounded-xl border border-slate-200 bg-white p-3 flex items-center gap-3 hover:border-sky-400 hover:bg-sky-50/60 transition-colors" href="tel:0547221162">
<div className="h-8 w-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
<i className="w-4 h-4" data-lucide="phone"></i>
</div>
<div className="leading-tight">
<div className="text-xs text-slate-500">טלפון</div>
<div className="text-sm text-slate-900">054-7221162</div>
<div className="text-[0.7rem] text-slate-500">מענה מהיר בשעות היום</div>
</div>
</a>
<a className="rounded-xl border border-slate-200 bg-white p-3 flex items-center gap-3 hover:border-sky-400 hover:bg-sky-50/60 transition-colors" href="mailto:barstav1@gmail.com">
<div className="h-8 w-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
<i className="w-4 h-4" data-lucide="mail"></i>
</div>
<div className="leading-tight">
<div className="text-xs text-slate-500">אימייל</div>
<div className="text-sm text-slate-900">barstav1@gmail.com</div>
<div className="text-[0.7rem] text-slate-500">עונים בדרך כלל באותו יום</div>
</div>
</a>
</div>
<a className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-200 hover:bg-emerald-400 transition-colors" href="https://wa.me/972547221162" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle"></i>
<span>פתיחת שיחת WhatsApp</span>
</a>
<p className="text-xs sm:text-sm text-slate-500">
                אפשר גם לשלוח הודעה קצרה עם מהות העסק והאם יש לכם כבר אתר קיים – זה יעזור לנו לחזור אליכם עם יותר דיוק.
              </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 md:p-6 space-y-4 shadow-sm shadow-slate-100">
<div className="space-y-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  טופס יצירת קשר
                </h3>
<p className="text-sm text-slate-600">
                  השאירו פרטים ונחזור אליכם בדרך הנוחה לכם.
                </p>
</div>
<form className="space-y-3">
<div className="space-y-1.5">
<label className="text-xs text-slate-700" htmlFor="name">שם מלא</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500" id="name" placeholder="לדוגמה: דור כהן" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-xs text-slate-700" htmlFor="phone">טלפון</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500" id="phone" placeholder="לדוגמה: 050-0000000" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-slate-700" htmlFor="email">אימייל</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500" id="email" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-slate-700" htmlFor="type">איזה סוג אתר אתם צריכים?</label>
<select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500" id="type">
<option className="bg-white">אתר תדמית לעסק</option>
<option className="bg-white">חנות אונליין</option>
<option className="bg-white">דף נחיתה לקמפיין</option>
<option className="bg-white">שדרוג אתר קיים</option>
<option className="bg-white">עדיין לא בטוח/ה</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs text-slate-700" htmlFor="message">ספרו קצת על העסק ומה אתם מחפשים</label>
<textarea className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500" id="message" placeholder="כמה מילים על העסק, על מה אתם רוצים שהאתר יתמקד ואם יש לכם אתר קיים." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200 hover:bg-sky-500 transition-colors" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
<span>שליחת הטופס</span>
</button>
<p className="text-[0.7rem] text-slate-500">
                    אין התחייבות – רק שיחה קצרה להבין מה מתאים לעסק שלכם.
                  </p>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tight text-slate-900">acos.sites</span>
<span className="text-slate-300">•</span>
<span>בניית אתרים חכמים לעסקים</span>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-1.5 hover:text-sky-600 transition-colors" href="tel:0547221162">
<i className="w-3.5 h-3.5" data-lucide="phone"></i>
<span>054-7221162</span>
</a>
<span className="text-slate-300">•</span>
<a className="inline-flex items-center gap-1.5 hover:text-sky-600 transition-colors" href="mailto:barstav1@gmail.com">
<i className="w-3.5 h-3.5" data-lucide="mail"></i>
<span>barstav1@gmail.com</span>
</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
