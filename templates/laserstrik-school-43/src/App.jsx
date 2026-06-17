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



        // Initialize Lucide icons
        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg text-white">
<svg className="lucide lucide-zap w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg font-bold text-gray-900 tracking-tight" style={{}}>לייזרסטרייק</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-600">
<a className="hover:text-blue-600 transition-colors" href="#features">יתרונות</a>
<a className="hover:text-blue-600 transition-colors" href="#paths">מסלולים</a>
<a className="hover:text-blue-600 transition-colors" href="#timeline">מהלך האירוע</a>
<a className="hover:text-blue-600 transition-colors" href="#pricing">מחירים</a>
</div>

<a className="flex items-center gap-2 hover:bg-gray-100 transition-all text-sm font-medium text-gray-900 bg-gray-50 border-gray-200 border rounded-full pt-2 pr-4 pb-2 pl-4" href="https://wa.me/972547039755?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA%20%D7%9C%D7%99%D7%99%D7%96%D7%A8%20%D7%9C%D7%91%D7%99%D7%AA%20%D7%94%D7%A1%D7%A4%D7%A8" target="_blank">054-7039755</a>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden bg-purple-50 pt-32 pb-20 relative">

<div className="absolute top-0 left-1/4 w-px h-full bg-blue-200/50 laser-beam" style={{animation: 'laser-scan 4s infinite linear'}}></div>
<div className="absolute top-0 right-1/3 w-px h-full bg-red-200/50 laser-beam" style={{animation: 'laser-scan 6s infinite linear 1s'}}></div>
<div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-10 left-10 w-96 h-96 bg-red-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8 animate-[float_4s_ease-in-out_infinite]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                חוויית האקסטרים החדשה לבתי ספר
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 glow-text">LaserStrike</span>
                Indoor Rumble
                <br/>
<span className="text-gray-900">לייזר טאג ענק לאירועי בית ספר</span>
</h1>
<p className="text-lg lg:text-xl font-light text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                עד 70 שחקנים בו־זמנית • פעילות של 5–6 שעות • הופכים כל אולם ספורט לזירת קרב עתידנית.
                <br/>
                מושלם לפורים, מסיבות סוף שנה והפנינג שכבתית.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<a className="btn-glow w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-xl flex items-center justify-center gap-2 transition-colors" href="https://wa.me/972547039755?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA%20%D7%9C%D7%99%D7%99%D7%96%D7%A8%20%D7%9C%D7%91%D7%99%D7%AA%20%D7%94%D7%A1%D7%A4%D7%A8" target="_blank">
                    בדיקת זמינות לאירוע
                    <svg className="lucide lucide-calendar-check-2 w-5 h-5" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
</a>

<a className="sm:w-auto hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors text-base font-medium text-gray-700 bg-white w-full border-gray-200 border rounded-xl pt-4 pr-8 pb-4 pl-8" href="https://wa.me/972547039755?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA%20%D7%9C%D7%99%D7%99%D7%96%D7%A8%20%D7%9C%D7%91%D7%99%D7%AA%20%D7%94%D7%A1%D7%A4%D7%A8" target="_blank">
                    שיחה עם מנהל הפעלה
                    <svg className="lucide lucide-message-circle w-5 h-5 text-pink-500" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</header>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">למה בתי ספר מחפשים פתרון חדש?</h2>
<p className="mt-4 text-gray-500 font-light text-lg">אנחנו מבינים את האתגר בארגון פעילות רב־משתתפים</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-alert w-6 h-6" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">חשש מבטיחות</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">בתי ספר נמנעים מפעילויות כואבות כמו פיינטבול. אצלנו זה 100% אינפרה-אדום, ללא כאב וללא לכלוך.</p>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">ניהול קבוצות ענק</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">קשה למצוא פעילות ל-200 תלמידים? אנחנו מפעילים עד 70 שחקנים במקביל בסבבים מהירים.</p>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">לו"ז צפוף</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">בין אם זה הפנינג של שעה או יום שיא של 6 שעות, אנחנו מתאימים את המקצב לצרכי ביה"ס.</p>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-coins w-6 h-6" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">תקציב בית ספרי</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">מחירים אטרקטיביים במיוחד לאירועים מרובי משתתפים, ללא התפשרות על איכות הציוד.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-purple-900 text-white relative overflow-hidden" id="features">

<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-purple-900 to-purple-900"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 space-y-8">
<h2 className="lg:text-4xl text-3xl font-semibold tracking-tight" style={{}}>מה הופך את LaserStrike<br/><span className="text-blue-400">לחוויה המועדפת על רכזים?</span></h2>
<div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
<div className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-blue-500/20 text-blue-400">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="font-medium text-lg">עד 70 שחקנים בבת אחת</h4>
<p className="text-purple-400 text-sm font-light">מקסימום השתתפות, מינימום המתנה.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-blue-500/20 text-blue-400">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="font-medium text-lg">ניידות מלאה</h4>
<p className="text-purple-400 text-sm font-light">מגיעים לכל אולם ספורט או ג'ימנסיה.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-blue-500/20 text-blue-400">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="font-medium text-lg">הנחיית פרימיום</h4>
<p className="text-purple-400 text-sm font-light">צוות שמחזיק משמעת ויוצר אנרגיה.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-blue-500/20 text-blue-400">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="font-medium text-lg">ערכים חינוכיים</h4>
<p className="text-purple-400 text-sm font-light">גיבוש, אסטרטגיה ועבודת צוות.</p>
</div>
</div>
</div>
<div className="pt-4">
<div className="flex items-center gap-4">
<div className="flex -space-x-2 space-x-reverse overflow-hidden">
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-purple-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-purple-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-purple-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="text-sm font-light text-purple-300">
                            כבר נבחר ע"י עשרות בתי ספר
                        </div>
</div>
</div>
</div>

<div className="flex-1 w-full relative">
<div className="relative bg-purple-800 rounded-3xl border border-purple-700 p-8 shadow-2xl">
<div className="absolute -top-4 -right-4 bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        ציוד חדש
                    </div>
<div className="space-y-6">
<div className="flex justify-between items-center border-b border-purple-700 pb-4">
<span className="text-purple-400 text-sm">סטטוס משחק</span>
<span className="text-pink-400 text-sm font-medium flex items-center gap-2">
<span className="block w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                                פעיל כעת
                            </span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-purple-700/50 p-4 rounded-xl text-center">
<span className="block text-2xl font-bold text-blue-400">200</span>
<span className="text-xs text-purple-400">תלמידים ביום</span>
</div>
<div className="bg-purple-700/50 p-4 rounded-xl text-center">
<span className="block text-2xl font-bold text-red-400">100%</span>
<span className="text-xs text-purple-400">בטיחות</span>
</div>
</div>
<div className="h-2 w-full bg-purple-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-l from-blue-500 to-indigo-500 w-3/4"></div>
</div>
<div className="flex justify-between text-xs text-purple-500 font-mono">
<span>רמת אנרגיה</span>
<span>גבוהה מאוד</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="paths">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">מסלולי פעילות מותאמים</h2>
<p className="mt-4 text-gray-500 font-light text-lg">בחרו את הפורמט המתאים לשכבה או לבית הספר שלכם</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
<svg className="lucide lucide-school w-5 h-5" data-lucide="school" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M18 5v16"></path><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"></path><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"></path><path d="M6 5v16"></path><circle cx="12" cy="9" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">פעילות כלל בית-ספרית</h3>
<p className="text-sm font-light text-gray-500 mb-6 leading-relaxed">
                        סשנים קצרים ואינטנסיביים לכל כיתה. תחלופה מהירה שמאפשרת לכל התלמידים לחוות את המשחק.
                    </p>
<ul className="space-y-2 text-sm text-gray-600 font-light mb-8">
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-pink-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> מושלם לפורים</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-pink-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> ימי שיא מרובי משתתפים</li>
</ul>
</div>

<div className="relative bg-white rounded-2xl p-8 shadow-md border border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform scale-105 z-10">
<div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-2xl"></div>
<div className="absolute top-4 left-4 bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded">הכי פופולרי</div>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
<svg className="lucide lucide-trophy w-5 h-5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">הפעלה שכבתית מורחבת</h3>
<p className="text-sm font-light text-gray-500 mb-6 leading-relaxed">
                        משחקים ארוכים, משימות טקטיות, טורניר בין כיתות ושלב גמר חגיגי. חוויה מעמיקה ומגבשת.
                    </p>
<ul className="space-y-2 text-sm text-gray-600 font-light mb-8">
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-pink-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> גיבוש שכבתי</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-pink-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> מסיבות סוף שנה</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6">
<svg className="lucide lucide-calendar-days w-5 h-5" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3">שבוע פעילות</h3>
<p className="text-sm font-light text-gray-500 mb-6 leading-relaxed">
                        פריסה על פני מספר ימים לבתי ספר גדולים במיוחד. מאפשר סדר, שקט וזרימה מצוינת של קבוצות.
                    </p>
<ul className="space-y-2 text-sm text-gray-600 font-light mb-8">
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-pink-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> תיכונים וחטיבות</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-pink-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> הפרדה מלאה בין שכבות</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">למה בתי ספר בוחרים ב-LaserStrike?</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
<svg className="lucide lucide-user-check w-4 h-4" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<h4 className="font-medium text-gray-900">מנחה מקצועי ומנוסה</h4>
<p className="text-sm font-light text-gray-500">לא רק מפעיל טכני, אלא דמות חינוכית שמחזיקה קבוצה.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<div>
<h4 className="font-medium text-gray-900">שליטה מלאה במרחב</h4>
<p className="text-sm font-light text-gray-500">ציוד בטיחותי, סימון גבולות גזרה, הקפדה על חוקים.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<div>
<h4 className="font-medium text-gray-900">מותאם לגילאי ה' עד י'</h4>
<p className="text-sm font-light text-gray-500">הפעילות מאזנת בין הוצאת אנרגיה לחשיבה טקטית.</p>
</div>
</div>
</div>
</div>
<div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100">
<svg className="lucide lucide-quote w-8 h-8 text-blue-200 mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<blockquote className="text-lg font-light text-gray-700 leading-relaxed mb-6">
                    "חיפשנו משהו שונה למסיבת סוף השנה של שכבת ט'. הצוות של לייזרסטרייק הגיע שעה לפני, הקים זירה מטורפת בתוך האולם, והילדים פשוט עפו על זה. אפס תקלות, מאה אחוז אנרגיה."
                </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold text-xs">ר.נ</div>
<div>
<div className="font-medium text-gray-900">רונית ניר</div>
<div className="text-xs text-gray-500">רכזת חברתית, תיכון המרכז</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-purple-50" id="timeline">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">איך זה עובד ביום האירוע?</h2>
</div>
<div className="relative">

<div className="absolute top-0 bottom-0 right-[15px] w-0.5 bg-gray-200"></div>

<div className="relative flex items-start gap-8 mb-12 group">
<div className="relative z-10 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-sm flex items-center justify-center shrink-0">
<span className="w-2 h-2 bg-white rounded-full"></span>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm w-full group-hover:border-blue-200 transition-colors">
<span className="text-xs font-bold text-blue-600 mb-1 block">08:00</span>
<h4 className="text-lg font-medium text-gray-900 mb-1">הגעה והקמה</h4>
<p className="text-sm font-light text-gray-500">צוות מגיע לפני התלמידים, מקים מחסות, בודק ציוד ומוודא בטיחות שטח.</p>
</div>
</div>

<div className="relative flex items-start gap-8 mb-12 group">
<div className="relative z-10 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center shrink-0">
<span className="w-2 h-2 bg-blue-600 rounded-full"></span>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm w-full group-hover:border-blue-200 transition-colors">
<span className="text-xs font-bold text-blue-600 mb-1 block">08:30</span>
<h4 className="text-lg font-medium text-gray-900 mb-1">תדריך ואימון</h4>
<p className="text-sm font-light text-gray-500">הסבר קצר על הציוד, כללי משחק ודגשי בטיחות. חלוקה לקבוצות.</p>
</div>
</div>

<div className="relative flex items-start gap-8 mb-12 group">
<div className="relative z-10 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center shrink-0">
<span className="w-2 h-2 bg-blue-600 rounded-full"></span>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm w-full group-hover:border-blue-200 transition-colors">
<span className="text-xs font-bold text-blue-600 mb-1 block">09:00 - 12:00</span>
<h4 className="text-lg font-medium text-gray-900 mb-1">האקשן מתחיל (סבבים)</h4>
<p className="text-sm font-light text-gray-500">משחקים מהירים, טורניר כיתתי, החלפות קבוצות יעילות כדי שכולם ישחקו.</p>
</div>
</div>

<div className="relative flex items-start gap-8 group">
<div className="relative z-10 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shrink-0">
<span className="w-2 h-2 bg-gray-300 rounded-full"></span>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm w-full group-hover:border-blue-200 transition-colors">
<span className="text-xs font-bold text-gray-400 mb-1 block">12:30</span>
<h4 className="text-lg font-medium text-gray-900 mb-1">גמר וסיכום</h4>
<p className="text-sm font-light text-gray-500">משחק הגמר של המנצחים, צילום קבוצתי, הכרזה על הכיתה האלופה.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">כמה זה עולה?</h2>
<p className="text-purple-300 font-light text-lg mb-8 max-w-2xl mx-auto">
                        המחיר משתנה בהתאם לכמות התלמידים, מיקום בית הספר ואורך הפעילות.
                        אנחנו מתחייבים למחיר הוגן שמתאים לתקציבי חינוך.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">

<a className="btn-glow px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-base font-medium rounded-xl transition-all" href="https://wa.me/972547039755?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA%20%D7%9C%D7%99%D7%99%D7%96%D7%A8%20%D7%9C%D7%91%D7%99%D7%AA%20%D7%94%D7%A1%D7%A4%D7%A8" target="_blank">
                            קבלת הצעת מחיר
                        </a>

<a className="px-8 py-4 bg-transparent border border-purple-600 hover:bg-purple-700 hover:border-purple-500 text-white text-base font-medium rounded-xl flex items-center justify-center gap-2 transition-all" href="https://wa.me/972547039755?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA%20%D7%9C%D7%99%D7%99%D7%96%D7%A8%20%D7%9C%D7%91%D7%99%D7%AA%20%D7%94%D7%A1%D7%A4%D7%A8" target="_blank">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                            בירור מהיר בוואטסאפ
                        </a>
</div>
<p className="mt-6 text-xs text-purple-500">
                        * חשבונית מס כחוק למוסדות חינוך ועמותות
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-10 text-center">שאלות נפוצות</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden open:border-blue-200 transition-colors">
<summary className="flex cursor-pointer list-none font-medium text-gray-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
                        האם הלייזר מסוכן לעיניים?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm font-light text-gray-500 leading-relaxed">
                        ממש לא. הטכנולוגיה מבוססת על אינפרה-אדום (כמו בשלט של הטלוויזיה), בטוחה לחלוטין לשימוש ואינה גורמת נזק או כאב.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden open:border-blue-200 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-gray-900 font-medium">
                        האם צריך אולם חשוך?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm font-light text-gray-500 leading-relaxed">
                        לא חובה. הציוד שלנו עובד מצוין גם באור יום ובאולמות מוארים. כמובן שאווירה מעומעמת מוסיפה לחוויה, אבל היא לא הכרחית טכנית.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden open:border-blue-200 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-gray-900 font-medium">
                        מה קורה אם יורד גשם?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm font-light text-gray-500 leading-relaxed">
                        בדיוק בגלל זה אנחנו מומחים ב-Indoor (פנים). הפעילות מתקיימת באולם הספורט של בית הספר, כך שמזג האוויר לא משפיע על האירוע.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden open:border-blue-200 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-gray-900 font-medium">
                        לאיזה גילאים זה מתאים?
                        <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm font-light text-gray-500 leading-relaxed">
                        אנחנו ממליצים על הפעילות החל מכיתה ה' ועד י"ב. רמת המורכבות והאסטרטגיה מותאמת לגיל המשתתפים בשטח.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-gray-100" id="contact">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                רוצים אירוע שהתלמידים <br/> <span className="text-blue-600">לא יפסיקו לדבר עליו?</span>
</h2>
<p className="text-gray-500 text-lg font-light mb-10">
                שריינו תאריך עוד היום לפורים או לסוף השנה. היומן מתמלא מהר.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">

<a className="btn-glow w-full sm:w-auto px-10 py-4 bg-gray-900 hover:bg-black text-white text-base font-medium rounded-xl flex items-center justify-center gap-2 transition-colors" href="https://wa.me/972547039755?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA%20%D7%9C%D7%99%D7%99%D7%96%D7%A8%20%D7%9C%D7%91%D7%99%D7%AA%20%D7%94%D7%A1%D7%A4%D7%A8" target="_blank">
                    בדיקת זמינות מיידית
                    <svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</a>

<a className="w-full sm:w-auto px-10 py-4 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 text-base font-medium rounded-xl flex items-center justify-center gap-2 transition-colors" href="https://wa.me/972547039755?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%A0%D7%AA%20%D7%91%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA%20%D7%9C%D7%99%D7%99%D7%96%D7%A8%20%D7%9C%D7%91%D7%99%D7%AA%20%D7%94%D7%A1%D7%A4%D7%A8" target="_blank">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                    וואטסאפ
                </a>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-light">
<p>© 2024 LaserStrike Indoor Rumble. כל הזכויות שמורות.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-900" href="#">תקנון</a>
<a className="hover:text-gray-900" href="#">הצהרת נגישות</a>
<a className="hover:text-gray-900" href="#">צור קשר</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
