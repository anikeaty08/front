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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a aria-label="קונברטי - דף הבית" className="flex items-center gap-2 group" href="#home">
<div className="flex items-center justify-center w-9 h-9 rounded-md bg-neutral-900 text-white tracking-tight text-sm leading-none">ק</div>
<span className="text-xl tracking-tight font-semibold">קונברטי</span>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-100 hover:text-neutral-900 transition" href="#home">הבית</a>

<details className="relative group px-2">
<summary className="list-none cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-100 hover:text-neutral-900 transition flex items-center gap-1">
<span>שירותים</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="absolute top-10 right-0 w-56 bg-white border border-neutral-200 rounded-lg shadow-lg overflow-hidden">
<a className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-neutral-50 transition" href="#google-ads">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
<span>פרסום בגוגל</span>
</a>
<a className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-neutral-50 transition" href="#meta-ads">
<i className="w-4 h-4" data-lucide="megaphone" strokeWidth="1.5"></i>
<span>פרסום במטא</span>
</a>
<a className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-neutral-50 transition" href="#landing-pages">
<i className="w-4 h-4" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span>דפי נחיתה</span>
</a>
</div>
</details>
<a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-100 hover:text-neutral-900 transition" href="#portfolio">פרוטפוליו</a>
<a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-100 hover:text-neutral-900 transition" href="#about">אודות</a>
<a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-100 hover:text-neutral-900 transition" href="#blog">בלוג</a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
<span>צרו קשר</span>
</a>

<details className="md:hidden">
<summary aria-label="תפריט" className="list-none p-2 rounded-md hover:bg-neutral-100 cursor-pointer">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</summary>
<div className="absolute top-16 inset-x-0 mx-4 p-2 bg-white border border-neutral-200 rounded-lg shadow-lg">
<div className="flex flex-col">
<a className="px-3 py-3 rounded-md text-sm hover:bg-neutral-50" href="#home">הבית</a>
<details className="">
<summary className="px-3 py-3 rounded-md text-sm hover:bg-neutral-50 cursor-pointer flex items-center justify-between">
<span>שירותים</span>
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="flex flex-col pb-2">
<a className="px-6 py-2 text-sm hover:bg-neutral-50" href="#google-ads">פרסום בגוגל</a>
<a className="px-6 py-2 text-sm hover:bg-neutral-50" href="#meta-ads">פרסום במטא</a>
<a className="px-6 py-2 text-sm hover:bg-neutral-50" href="#landing-pages">דפי נחיתה</a>
</div>
</details>
<a className="px-3 py-3 rounded-md text-sm hover:bg-neutral-50" href="#portfolio">פרוטפוליו</a>
<a className="px-3 py-3 rounded-md text-sm hover:bg-neutral-50" href="#about">אודות</a>
<a className="px-3 py-3 rounded-md text-sm hover:bg-neutral-50" href="#blog">בלוג</a>
<a className="mt-2 inline-flex items-center gap-2 px-3 py-3 rounded-md bg-neutral-900 text-white text-sm hover:bg-neutral-800" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
<span>צרו קשר</span>
</a>
</div>
</div>
</details>
</div>
</div>
</div>
</header>

<main id="home">

<section className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-14">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold text-neutral-900">
                הגדילו מחזור עם שותף אמיתי
              </h1>
<p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                צוות אנושי ומדויק שמנהל קמפיינים ממוקדים, שירות אישי וגמיש — ומביא צמיחה מדידה בתוך 90 ימים.
              </p>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition shadow-sm" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
<span>צרו קשר עכשיו</span>
</a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-200 text-sm font-medium hover:bg-neutral-50 transition" href="#google-ads">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
<span>לשירות פרסום בגוגל</span>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm text-neutral-700 hover:text-neutral-900" href="#contact">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i>
<span>שיחה בוואטסאפ</span>
</a>
</div>
<div className="flex items-center gap-6 pt-4">
<div className="flex -space-x-3 rtl:space-x-reverse">
<img alt="לקוח מרוצה" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=128&auto=format&fit=crop" />
<img alt="לקוחה מרוצה" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=crop" />
<img alt="לקוח" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=128&auto=format&fit=crop" />
</div>
<p className="text-sm text-neutral-600">+120 לקוחות בעשרות תחומים — תוצאות נמדדות.</p>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
<img alt="צוות בעבודה" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-neutral-200 bg-white" id="about-short">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-10 items-start">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-neutral-900">אנחנו קונברטי — סוכנות קומנדו</h2>
<p className="mt-3 text-neutral-700">
                צוות קטן, חד ומקצועי. שירות אישי, שקיפות מלאה ותוכניות 90 יום שמתרגמות מדיה ללידים ומכירות. פחות רעש — יותר תוצאות.
              </p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-200 text-sm hover:bg-neutral-50" href="#google-ads">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
                  פרסום בגוגל
                </a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white text-sm hover:bg-neutral-800" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
                  דברו איתנו
                </a>
</div>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 p-3 rounded-lg border border-neutral-200">
<i className="w-5 h-5 text-neutral-900" data-lucide="target" strokeWidth="1.5"></i>
<div>
<p className="font-medium">מיקוד ללא פשרות</p>
<p className="text-sm text-neutral-600">קהל נכון, מסר נכון, בזמן הנכון.</p>
</div>
</li>
<li className="flex items-start gap-3 p-3 rounded-lg border border-neutral-200">
<i className="w-5 h-5 text-neutral-900" data-lucide="clock-4" strokeWidth="1.5"></i>
<div>
<p className="font-medium">תוכנית 90 יום</p>
<p className="text-sm text-neutral-600">יישום מהיר ומדיד עם אבני דרך ברורות.</p>
</div>
</li>
<li className="flex items-start gap-3 p-3 rounded-lg border border-neutral-200">
<i className="w-5 h-5 text-neutral-900" data-lucide="line-chart" strokeWidth="1.5"></i>
<div>
<p className="font-medium">תוצאות בשקיפות</p>
<p className="text-sm text-neutral-600">דיווח תכל'ס, שיחות קצרות ומדויקות.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-neutral-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-neutral-900">שירותים שמניעים תוצאות</h2>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" href="#contact">
<span>דברו איתנו</span>
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
</a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group p-6 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition" href="#google-ads">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">פרסום בגוגל</h3>
<i className="w-5 h-5 text-neutral-900" data-lucide="search" strokeWidth="1.5"></i>
</div>
<p className="mt-2 text-sm text-neutral-600">חיפוש, רימרקטינג ו-Performance Max שמביאים לידים איכותיים.</p>
<div className="mt-4 flex items-center gap-2 text-sm text-neutral-700 group-hover:text-neutral-900">
<span>לפרטים</span>
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
</div>
</a>

<a className="group p-6 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition" href="#meta-ads">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">פרסום במטא</h3>
<i className="w-5 h-5 text-neutral-900" data-lucide="megaphone" strokeWidth="1.5"></i>
</div>
<p className="mt-2 text-sm text-neutral-600">קריאייטיב חד ותיעדוף המרות להעצמת נוכחות ומכירות.</p>
<div className="mt-4 flex items-center gap-2 text-sm text-neutral-700 group-hover:text-neutral-900">
<span>לפרטים</span>
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
</div>
</a>

<a className="group p-6 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition" href="#landing-pages">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">דפי נחיתה</h3>
<i className="w-5 h-5 text-neutral-900" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
</div>
<p className="mt-2 text-sm text-neutral-600">UX ממוקד המרה, העתקה מדויקת ומדידה מלאה.</p>
<div className="mt-4 flex items-center gap-2 text-sm text-neutral-700 group-hover:text-neutral-900">
<span>לפרטים</span>
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
</div>
</a>
</div>
</div>
</section>

<section className="py-14 sm:py-16 bg-white border-t border-neutral-200" id="advantages">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-neutral-900">למה לבחור בנו</h2>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-5 rounded-xl border border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-900" data-lucide="calendar-check-2" strokeWidth="1.5"></i>
<p className="font-medium">תוכנית 90 יום</p>
</div>
<p className="mt-2 text-sm text-neutral-600">מסלול מהיר לצמיחה מדידה.</p>
</div>
<div className="p-5 rounded-xl border border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-900" data-lucide="shield-check" strokeWidth="1.5"></i>
<p className="font-medium">שקיפות מלאה</p>
</div>
<p className="mt-2 text-sm text-neutral-600">גישה מלאה לנתונים ודוחות.</p>
</div>
<div className="p-5 rounded-xl border border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-900" data-lucide="user-round" strokeWidth="1.5"></i>
<p className="font-medium">שירות אישי</p>
</div>
<p className="mt-2 text-sm text-neutral-600">זמינות גבוהה ושיחות קצרות.</p>
</div>
<div className="p-5 rounded-xl border border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-900" data-lucide="gauge" strokeWidth="1.5"></i>
<p className="font-medium">אנליטיקס חכם</p>
</div>
<p className="mt-2 text-sm text-neutral-600">מדידה והטמעה מקצה לקצה.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-neutral-50 border-t border-neutral-200" id="testimonials-home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-neutral-900">לקוחות מספרים</h2>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" href="#contact">
<span>לשיחת היכרות</span>
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
</a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl bg-white border border-neutral-200 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="דוד" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=128&auto=format&fit=crop" />
<div>
<p className="font-medium">דוד • פתרונות IT</p>
<p className="text-xs text-neutral-500">ROAS 5.2</p>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">"תוך חודשיים הורידו לנו CPA ב-32% והכפילו את כמות הלידים."</p>
</div>
<div className="p-6 rounded-xl bg-white border border-neutral-200 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="יעל" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=crop" />
<div>
<p className="font-medium">יעל • קליניקה</p>
<p className="text-xs text-neutral-500">+68% לידים</p>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">"קולעים למסר, מדויקים בדוחות, מרגישים כמו חלק מהצוות."</p>
</div>
<div className="p-6 rounded-xl bg-white border border-neutral-200 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="סיון" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=128&auto=format&fit=crop" />
<div>
<p className="font-medium">סיון • סטודיו</p>
<p className="text-xs text-neutral-500">-27% CPA</p>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">"נגישים, זריזים ומדברים תכל'ס. ממליצה בחום."</p>
</div>
</div>
</div>
</section>

<section className="py-10 bg-white border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between gap-6 overflow-x-auto py-2">
<div className="flex items-center gap-2 text-neutral-400">
<div className="w-8 h-8 rounded-md border border-neutral-200 flex items-center justify-center text-xs tracking-tight">א</div>
<span className="text-sm">ALPHA</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<div className="w-8 h-8 rounded-md border border-neutral-200 flex items-center justify-center text-xs tracking-tight">ב</div>
<span className="text-sm">BETA</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<div className="w-8 h-8 rounded-md border border-neutral-200 flex items-center justify-center text-xs tracking-tight">ג</div>
<span className="text-sm">GAMMA</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<div className="w-8 h-8 rounded-md border border-neutral-200 flex items-center justify-center text-xs tracking-tight">ד</div>
<span className="text-sm">DELTA</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<div className="w-8 h-8 rounded-md border border-neutral-200 flex items-center justify-center text-xs tracking-tight">ה</div>
<span className="text-sm">EPSILON</span>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-neutral-50 border-t border-neutral-200" id="contact-form-home">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200">
<div className="flex items-center justify-between">
<h3 className="text-2xl tracking-tight font-semibold text-neutral-900">נדבר ונראה איך מגדילים?</h3>
<i className="w-6 h-6 text-neutral-900" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<p className="mt-2 text-neutral-600">השאירו פרטים קצרים ונחזור אליכם ממש בקרוב.</p>
<form action="#" className="mt-6 grid sm:grid-cols-2 gap-4" method="post">
<div>
<label className="block text-sm text-neutral-700 mb-2">שם מלא</label>
<input className="w-full px-3 py-2 rounded-md border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900/40" placeholder="יעל כהן" type="text" />
</div>
<div>
<label className="block text-sm text-neutral-700 mb-2">טלפון</label>
<input className="w-full px-3 py-2 rounded-md border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900/40" placeholder="05X-XXXXXXX" type="tel" />
</div>
<div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition" type="submit">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
<span>שלחו</span>
</button>
<a className="text-sm text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-1" href="#home">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i>
                  חזרה לדף הבית
                </a>
</div>
</form>
</div>
</div>
</section>
</main>

<section className="py-20 bg-white border-t border-neutral-200" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-neutral-900">עבודות שמביאות תוצאות</h2>
<p className="mt-3 text-neutral-600">מבחר פרויקטים עם תקצירים קצרים ותוצאות מספריות. נשמח לפרט בשיחה.</p>
<div className="mt-5 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white text-sm hover:bg-neutral-800" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
              צרו קשר
            </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" href="#home">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
              לבית
            </a>
</div>
</div>

<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-xl border border-neutral-200 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[16/10] bg-neutral-100">
<img alt="קמפיין חיפוש" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight">קליניקה • חיפוש</h3>
<span className="text-xs px-2 py-1 rounded-md bg-neutral-100 border border-neutral-200">-32% CPA</span>
</div>
<p className="mt-2 text-sm text-neutral-600">הטמעת אסטרטגיית חיפוש+רימרקטינג והקשחת המרות.</p>
</div>
</div>
<div className="group rounded-xl border border-neutral-200 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[16/10] bg-neutral-100">
<img alt="קמפיין מטא" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight">אקדמיה • מטא</h3>
<span className="text-xs px-2 py-1 rounded-md bg-neutral-100 border border-neutral-200">+2.1x לידים</span>
</div>
<p className="mt-2 text-sm text-neutral-600">קראוסלה, UGC ו-Lookalike עם הגדרת אירועי המרה.</p>
</div>
</div>
<div className="group rounded-xl border border-neutral-200 overflow-hidden hover:shadow-sm transition">
<div className="aspect-[16/10] bg-neutral-100">
<img alt="דף נחיתה" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="font-semibold tracking-tight">שירותים • דף נחיתה</h3>
<span className="text-xs px-2 py-1 rounded-md bg-neutral-100 border border-neutral-200">+41% המרה</span>
</div>
<p className="mt-2 text-sm text-neutral-600">UX ממוקד, הוכחה חברתית וטופס קצר שהעלו יחס המרה.</p>
</div>
</div>
</div>

<div className="mt-12 grid md:grid-cols-2 gap-6">
<div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"תהליך מדויק, תקשורת נעימה ותוצאות מעל היעד."</p>
<p className="mt-2 text-xs text-neutral-500">ניצן • חינוך</p>
</div>
<div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"העלו לנו את ה-ROAS ל-4.8 תוך שלושה חודשי עבודה."</p>
<p className="mt-2 text-xs text-neutral-500">מור • אי-קומרס</p>
</div>
</div>

<div className="mt-10 p-6 rounded-xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
<div>
<h3 className="text-xl tracking-tight font-semibold">רוצים לראות קייסים רלוונטיים אליכם?</h3>
<p className="text-sm text-neutral-200 mt-1">שלחו תחום ותקציב — נשלח דוגמאות מתאימות.</p>
</div>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-neutral-900 text-sm hover:bg-neutral-100" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
            דברו איתנו
          </a>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50 border-t border-neutral-200" id="google-ads">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-neutral-900">פרסום בגוגל שמביא לידים</h2>
<p className="mt-3 text-neutral-600">מומחיות חדה בניהול קמפיינים ממירים עם תעדוף איכות לידים על פני כמות.</p>
<div className="mt-5 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white text-sm hover:bg-neutral-800" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
              צרו קשר
            </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" href="#portfolio">
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
              לפרויקטים
            </a>
</div>
</div>

<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl bg-white border border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-900" data-lucide="target" strokeWidth="1.5"></i>
<p className="font-medium">קהל נכון</p>
</div>
<p className="mt-2 text-sm text-neutral-600">ארכיטקטורת חשבון חכמה ומילות מפתח מדויקות.</p>
</div>
<div className="p-6 rounded-xl bg-white border border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-900" data-lucide="pen-tool" strokeWidth="1.5"></i>
<p className="font-medium">מסר חד</p>
</div>
<p className="mt-2 text-sm text-neutral-600">קופי, הרחבות מודעה ו-UX מסונכרן לדף נחיתה.</p>
</div>
<div className="p-6 rounded-xl bg-white border border-neutral-200">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-900" data-lucide="gauge" strokeWidth="1.5"></i>
<p className="font-medium">אופטימיזציה חכמה</p>
</div>
<p className="mt-2 text-sm text-neutral-600">Bidding, שלילי, ניסויים ותיעדוף איכות.</p>
</div>
</div>

<div className="mt-10">
<h3 className="text-xl font-semibold tracking-tight">איך זה עובד</h3>
<div className="mt-6 grid md:grid-cols-5 gap-4">
<div className="p-4 rounded-lg bg-white border border-neutral-200">
<p className="text-sm font-medium">1. אבחון</p>
<p className="text-sm text-neutral-600 mt-1">נתונים, קהל, מתחרים.</p>
</div>
<div className="p-4 rounded-lg bg-white border border-neutral-200">
<p className="text-sm font-medium">2. אסטרטגיה</p>
<p className="text-sm text-neutral-600 mt-1">מבנה חשבון ויעדים.</p>
</div>
<div className="p-4 rounded-lg bg-white border border-neutral-200">
<p className="text-sm font-medium">3. הקמה</p>
<p className="text-sm text-neutral-600 mt-1">מודעות, הרחבות, המרות.</p>
</div>
<div className="p-4 rounded-lg bg-white border border-neutral-200">
<p className="text-sm font-medium">4. השקה</p>
<p className="text-sm text-neutral-600 mt-1">בדיקה והקשחה.</p>
</div>
<div className="p-4 rounded-lg bg-white border border-neutral-200">
<p className="text-sm font-medium">5. שיפור והגדלה</p>
<p className="text-sm text-neutral-600 mt-1">בדיקות A/B והרחבה.</p>
</div>
</div>
</div>

<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"ירדנו מ-65₪ ל-43₪ לליד תוך חודש."</p>
<p className="mt-2 text-xs text-neutral-500">קרן • ביטוח</p>
</div>
<div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"הקפיצו את אחוז ההמרה בדף פי 1.6."</p>
<p className="mt-2 text-xs text-neutral-500">רון • פיננסים</p>
</div>
<div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"שקיפות מלאה ותוצאות מדידות."</p>
<p className="mt-2 text-xs text-neutral-500">מלי • שירותים</p>
</div>
</div>

<div className="mt-10">
<h3 className="text-xl font-semibold tracking-tight">שאלות נפוצות</h3>
<div className="mt-6 divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden">
<details className="p-4">
<summary className="cursor-pointer font-medium">מה התקציב המינימלי?</summary>
<p className="mt-2 text-sm text-neutral-600">מתחילים לרוב מ-5–8K לחודש, תלוי תחום ותחרות.</p>
</details>
<details className="p-4">
<summary className="cursor-pointer font-medium">תוך כמה זמן רואים תוצאות?</summary>
<p className="mt-2 text-sm text-neutral-600">בדרך כלל 2–4 שבועות לאינדיקציות, 90 יום ליציבות.</p>
</details>
<details className="p-4">
<summary className="cursor-pointer font-medium">יש התחייבות או חוזה ארוך?</summary>
<p className="mt-2 text-sm text-neutral-600">גמישים. מתחייבים לערך — לא לזמן קבוע.</p>
</details>
<details className="p-4">
<summary className="cursor-pointer font-medium">מה כולל הדיווח?</summary>
<p className="mt-2 text-sm text-neutral-600">דוח תכל'ס עם KPI מרכזיים ושיחה קצרה.</p>
</details>
<details className="p-4">
<summary className="cursor-pointer font-medium">עוזרים גם בדפי נחיתה?</summary>
<p className="mt-2 text-sm text-neutral-600">כן. בנייה/שיפור דפים והטמעת אנליטיקס.</p>
</details>
</div>
</div>

<div className="mt-10 p-6 rounded-xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
<div>
<h4 className="text-lg tracking-tight font-semibold">בואו נבנה תוכנית 90 יום</h4>
<p className="text-sm text-neutral-600 mt-1">שיחה קצרה, יעדים, ולוז מדויק.</p>
</div>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neutral-900 text-white text-sm hover:bg-neutral-800" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
            צרו קשר
          </a>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-neutral-200" id="meta-ads">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-neutral-900">פרסום במטא יעיל</h2>
<p className="mt-3 text-neutral-600">קריאייטיב נוגע, קהלים חכמים ומדידה לעומק כדי להניע תוצאות.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="font-medium">קריאייטיב שמוכר</p>
<p className="text-sm text-neutral-600 mt-1">UGC, סטוריז ו-Reels ממוקדי המרה.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="font-medium">בניית קהלים</p>
<p className="text-sm text-neutral-600 mt-1">Lookalike, חימום ורימרקטינג.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="font-medium">למידה מתמשכת</p>
<p className="text-sm text-neutral-600 mt-1">בדיקות A/B ותיעדוף יעדים.</p>
</div>
</div>
<div className="mt-8 grid md:grid-cols-5 gap-4">
<div className="p-4 rounded-lg border border-neutral-200">1. אפיון</div>
<div className="p-4 rounded-lg border border-neutral-200">2. קריאייטיב</div>
<div className="p-4 rounded-lg border border-neutral-200">3. הקמה</div>
<div className="p-4 rounded-lg border border-neutral-200">4. אופטימיזציה</div>
<div className="p-4 rounded-lg border border-neutral-200">5. סקייל</div>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"פי 2 חשיפות איכותיות באותו תקציב."</p>
<p className="mt-2 text-xs text-neutral-500">גלעד • קוסמטיקה</p>
</div>
<div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"קריאייטיב אחד ששינה את המשחק."</p>
<p className="mt-2 text-xs text-neutral-500">נועם • הדרכות</p>
</div>
</div>
<div className="mt-8 p-6 rounded-xl bg-neutral-900 text-white flex items-center justify-between flex-col sm:flex-row gap-4">
<p className="text-sm">נראה אם מטא נכון לעסק שלכם? שיחת התאמה קצרה.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-neutral-900 text-sm hover:bg-neutral-100" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
              דברו איתנו
            </a>
<a className="text-sm text-neutral-200 hover:text-white" href="#portfolio">ראו עבודות</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50 border-t border-neutral-200" id="landing-pages">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-neutral-900">דפי נחיתה ממירים</h2>
<p className="mt-3 text-neutral-600">בנייה מותאמת למותג שלכם עם העתקה, UX ומדידה שמתרגמים קליקים ללידים.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-xl bg-white border border-neutral-200">
<p className="font-medium">מיקוד תועלת</p>
<p className="text-sm text-neutral-600 mt-1">כותרות חדות וקריאות לפעולה ברורות.</p>
</div>
<div className="p-6 rounded-xl bg-white border border-neutral-200">
<p className="font-medium">מהירות וביצועים</p>
<p className="text-sm text-neutral-600 mt-1">זמני טעינה ומהימנות גבוהה.</p>
</div>
<div className="p-6 rounded-xl bg-white border border-neutral-200">
<p className="font-medium">בדיקות A/B</p>
<p className="text-sm text-neutral-600 mt-1">שיפור רציף לפי נתונים.</p>
</div>
</div>
<div className="mt-10 grid md:grid-cols-5 gap-4">
<div className="p-4 rounded-lg border border-neutral-200">1. אפיון</div>
<div className="p-4 rounded-lg border border-neutral-200">2. תוכן</div>
<div className="p-4 rounded-lg border border-neutral-200">3. עיצוב</div>
<div className="p-4 rounded-lg border border-neutral-200">4. פיתוח</div>
<div className="p-4 rounded-lg border border-neutral-200">5. מדידה</div>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"יחס המרה עלה מ-3.2% ל-5.6%."</p>
<p className="mt-2 text-xs text-neutral-500">עדי • ייעוץ</p>
</div>
<div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"ירדנו בעלויות המרה ב-24%."</p>
<p className="mt-2 text-xs text-neutral-500">אור • לימודים</p>
</div>
</div>
<div className="mt-8 p-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-between flex-col sm:flex-row gap-4">
<p className="text-sm text-neutral-700">צריך דף נחיתה חדש או לשדרג קיים? נדייק ביחד.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white text-sm hover:bg-neutral-800" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
              צרו קשר
            </a>
<a className="text-sm text-neutral-700 hover:text-neutral-900" href="#portfolio">ראו דוגמאות</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-neutral-200" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-neutral-900">צוות ששותף להצלחה</h2>
<p className="mt-3 text-neutral-600">אלון ואסנת מובילים צוות קטן וינכי — שירות אישי, יחס אנושי ותוצאות תכל'ס.</p>
<div className="mt-5 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white text-sm hover:bg-neutral-800" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
              צרו קשר
            </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" href="#home">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i>
              לבית
            </a>
</div>
</div>

<div className="mt-10 grid md:grid-cols-2 gap-6">
<div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
<div className="flex items-center gap-4">
<img alt="אלון" className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div>
<p className="font-medium">אלון • ראש תחום מדיה</p>
<p className="text-xs text-neutral-500">Google Ads, Data & Growth</p>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">מוביל אסטרטגיות מדיה מבוססות נתונים עם פוקוס על איכות לידים ושיפור מתמיד.</p>
</div>
<div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
<div className="flex items-center gap-4">
<img alt="אסנת" className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop" />
<div>
<p className="font-medium">אסנת • קריאייטיב ותוכן</p>
<p className="text-xs text-neutral-500">Messaging, UX & CRO</p>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">מתרגמת תובנות לקופי חד ו-UX זורם שמגדיל המרות.</p>
</div>
</div>

<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-5 rounded-xl border border-neutral-200">
<p className="font-medium">אנושיות לפני הכול</p>
<p className="text-sm text-neutral-600 mt-1">תקשורת נעימה ושקופה.</p>
</div>
<div className="p-5 rounded-xl border border-neutral-200">
<p className="font-medium">דיוק ותכל'ס</p>
<p className="text-sm text-neutral-600 mt-1">ללא רעש, רק מה שעובד.</p>
</div>
<div className="p-5 rounded-xl border border-neutral-200">
<p className="font-medium">למידה מתמדת</p>
<p className="text-sm text-neutral-600 mt-1">תהליכי שיפור רציפים.</p>
</div>
<div className="p-5 rounded-xl border border-neutral-200">
<p className="font-medium">שיתוף ושקיפות</p>
<p className="text-sm text-neutral-600 mt-1">נתונים פתוחים ודוחות.</p>
</div>
</div>

<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"מרגישים שותפים אמיתיים לעסק שלנו."</p>
<p className="mt-2 text-xs text-neutral-500">רוני • לוגיסטיקה</p>
</div>
<div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"שירות נעים ויעיל, תוצאות מעולות."</p>
<p className="mt-2 text-xs text-neutral-500">עדן • בריאות</p>
</div>
<div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-sm text-neutral-700">"מקצועיות ושקיפות — שילוב מנצח."</p>
<p className="mt-2 text-xs text-neutral-500">טל • נדל"ן</p>
</div>
</div>

<div className="mt-10 p-6 rounded-xl bg-neutral-900 text-white flex items-center justify-between flex-col sm:flex-row gap-4">
<p className="text-sm">נבדוק התאמה, נגדיר יעדים, ונצא לדרך.</p>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-neutral-900 text-sm hover:bg-neutral-100" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
            צרו קשר
          </a>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50 border-t border-neutral-200" id="blog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-neutral-900">טיפים לשיווק דיגיטלי</h2>
<p className="mt-3 text-neutral-600">ידע שימושי לבעלי עסקים ויועצים. קצר, ממוקד ומעשי.</p>
</div>

<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<a className="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition" href="#article">
<div className="aspect-[16/10] bg-neutral-100">
<img alt="CPA" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="p-5">
<h3 className="font-semibold tracking-tight">להוריד CPA בלי לפגוע בלידים</h3>
<p className="mt-2 text-sm text-neutral-600">5 צעדים פשוטים לשיפור איכות ומחיר.</p>
<div className="mt-3 text-sm text-neutral-700 group-hover:text-neutral-900">קראו עוד</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition" href="#article">
<div className="aspect-[16/10] bg-neutral-100">
<img alt="דפי נחיתה" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="p-5">
<h3 className="font-semibold tracking-tight">דף נחיתה שממיר יותר</h3>
<p className="mt-2 text-sm text-neutral-600">כותרות, הוכחות וטופס נכון.</p>
<div className="mt-3 text-sm text-neutral-700 group-hover:text-neutral-900">קראו עוד</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition" href="#article">
<div className="aspect-[16/10] bg-neutral-100">
<img alt="מטא" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="p-5">
<h3 className="font-semibold tracking-tight">קריאייטיב שמביא תוצאות</h3>
<p className="mt-2 text-sm text-neutral-600">מסגרת פשוטה לסטוריז ו-Reels.</p>
<div className="mt-3 text-sm text-neutral-700 group-hover:text-neutral-900">קראו עוד</div>
</div>
</a>
</div>

<div className="mt-8 flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs bg-white border border-neutral-200">Google Ads</span>
<span className="px-3 py-1 rounded-full text-xs bg-white border border-neutral-200">Meta</span>
<span className="px-3 py-1 rounded-full text-xs bg-white border border-neutral-200">CRO</span>
<span className="px-3 py-1 rounded-full text-xs bg-white border border-neutral-200">Analytics</span>
</div>

<div className="mt-10 p-6 rounded-xl bg-white border border-neutral-200 flex items-center justify-between flex-col sm:flex-row gap-4">
<p className="text-sm text-neutral-700">רוצים שננתח את הקמפיין הנוכחי שלכם?</p>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neutral-900 text-white text-sm hover:bg-neutral-800" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
            צרו קשר
          </a>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-neutral-200" id="article">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

<h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-neutral-900">להוריד CPA בלי לפגוע בלידים</h1>
<p className="mt-2 text-neutral-600">מדריך קצר לבעלי עסקים שרוצים לשפר יעילות ולשמור איכות.</p>
<div className="mt-6 space-y-4">
<p>לרוב אפשר לשפר מחיר לליד מבלי לפגוע בכמות — אם מתמקדים באיכות ובהתאמת המסר.</p>
<ul className="list-disc pr-5 text-neutral-700 space-y-2">
<li>דיוק מילות מפתח ושלילים.</li>
<li>מסר עקבי בין מודעה לדף נחיתה.</li>
<li>תיעדוף אירועי המרה משמעותיים.</li>
<li>בדיקות A/B קצרות ורציפות.</li>
</ul>
<p>שימרו על משמעת נתונים וקבלו החלטות רק לפי מדדים מהותיים.</p>
</div>

<div className="mt-10">
<h3 className="text-xl font-semibold tracking-tight">מאמרים קשורים</h3>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<a className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 hover:bg-neutral-100 transition" href="#article">
<p className="font-medium">5 טעויות נפוצות ב-Google Ads</p>
<p className="text-sm text-neutral-600 mt-1">ומה עושים אחרת.</p>
</a>
<a className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 hover:bg-neutral-100 transition" href="#article">
<p className="font-medium">תבנית דף נחיתה מנצחת</p>
<p className="text-sm text-neutral-600 mt-1">מסר, מבנה וקריאה לפעולה.</p>
</a>
<a className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 hover:bg-neutral-100 transition" href="#article">
<p className="font-medium">איך למדוד נכון המרות</p>
<p className="text-sm text-neutral-600 mt-1">מדדים שחשוב לעקוב אחריהם.</p>
</a>
</div>
</div>

<div className="mt-10 p-6 rounded-xl bg-neutral-900 text-white flex items-center justify-between flex-col sm:flex-row gap-4">
<p className="text-sm">צריכים ניתוח קצר לחשבון שלכם? נשמח לעזור.</p>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-neutral-900 text-sm hover:bg-neutral-100" href="#contact">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
            דברו איתנו
          </a>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50 border-t border-neutral-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-neutral-900">דברו איתנו עכשיו</h2>
<p className="mt-3 text-neutral-600">זמינים לשיחת היכרות קצרה היום. נשמח להבין ולכוון.</p>
</div>

<div className="mt-8 grid lg:grid-cols-2 gap-8">

<div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200">
<form action="#" className="grid gap-4" method="post">
<div>
<label className="block text-sm text-neutral-700 mb-2">שם מלא</label>
<input className="w-full px-3 py-2 rounded-md border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900/40" placeholder="שם ושם משפחה" type="text" />
</div>
<div>
<label className="block text-sm text-neutral-700 mb-2">טלפון</label>
<input className="w-full px-3 py-2 rounded-md border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900/40" placeholder="05X-XXXXXXX" type="tel" />
</div>
<button className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition" type="submit">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
                שלחו
              </button>
<p className="text-xs text-neutral-500">נחזור אליכם בהקדם. אפשר גם <a className="underline hover:text-neutral-700" href="#home">לחזור לדף הבית</a>.</p>
</form>

<div className="mt-6 flex items-center gap-4">
<a className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" href="#">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i> 03-0000000
              </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" href="#">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i> hello@converti.co
              </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i> LinkedIn
              </a>
</div>
</div>

<div className="rounded-2xl overflow-hidden border border-neutral-200">
<div className="aspect-[4/3] bg-neutral-100">
<img alt="מפה מייצגת" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>
</div>
</div>
</section>

<footer className="py-10 bg-white border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-md bg-neutral-900 text-white flex items-center justify-center text-xs tracking-tight">ק</div>
<span className="text-sm text-neutral-600">קונברטי — סוכנות שיווק דיגיטלי</span>
</div>
<nav className="flex flex-wrap items-center gap-4 text-sm">
<a className="text-neutral-700 hover:text-neutral-900" href="#home">הבית</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#services">שירותים</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#portfolio">פרוטפוליו</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#about">אודות</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#blog">בלוג</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#contact">צור קשר</a>
</nav>
</div>
</div>
</footer>




    </>
  );
}
