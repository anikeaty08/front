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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Pop-up Ad Logic
        function closeAd() {
            const popup = document.getElementById('popup-ad');
            const content = document.getElementById('popup-content');
            
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
            popup.classList.remove('opacity-100');
            popup.classList.add('opacity-0');
            
            setTimeout(() => {
                popup.classList.add('hidden');
            }, 300);
        }

        // Show ad after 2 seconds
        setTimeout(() => {
            const popup = document.getElementById('popup-ad');
            const content = document.getElementById('popup-content');
            
            popup.classList.remove('hidden');
            // Allow render before opacity transition
            setTimeout(() => {
                popup.classList.remove('opacity-0');
                popup.classList.add('opacity-100');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            }, 10);
        }, 2000);

        // Dynamic News Feed Simulator
        const newsItems = [
            "מכבי תל אביב הודיעה: הזר החדש נחת בארץ לבדיקות רפואיות",
            "סערה באיגוד השופטים: ההחלטה השנויה במחלוקת תבדק שוב",
            "לברון ג'יימס שבר שיא נוסף: 'אני מרגיש כמו ילד בן 20'",
            "הפועל ירושלים: שני שחקנים בספק למשחק הגביע מול חולון",
            "דיווח באנגליה: פפ גווארדיולה האריך את חוזהו בסיטי"
        ];

        function addNewsItem() {
            const feed = document.getElementById('news-feed');
            const now = new Date();
            const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
            const randomNews = newsItems[Math.floor(Math.random() * newsItems.length)];
            
            const div = document.createElement('div');
            div.className = 'p-3 bg-rose-50 border-l-4 border-rose-500 animate-pulse transition cursor-pointer flex gap-3';
            div.innerHTML = `
                <div class="text-xs font-mono text-rose-600 pt-1 shrink-0 font-bold">${time}</div>
                <div>
                    <h4 class="text-sm font-medium text-slate-800 leading-snug">${randomNews}</h4>
                </div>
            `;
            
            feed.insertBefore(div, feed.firstChild);
            
            // Remove highlighting after 2 seconds
            setTimeout(() => {
                div.className = 'p-3 hover:bg-slate-50 transition cursor-pointer flex gap-3 border-l-0 bg-transparent';
            }, 2000);
        }

        // Add a news item every 8 seconds
        setInterval(addNewsItem, 8000);

    
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
      

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300" id="popup-ad">
<div className="bg-white p-2 rounded-2xl shadow-2xl max-w-md w-full relative transform scale-95 transition-transform duration-300" id="popup-content">
<button className="absolute top-2 right-2 z-10 bg-slate-100 p-1 rounded-full hover:bg-slate-200" onclick="closeAd()">
<i className="w-5 h-5 text-slate-600" data-lucide="x"></i>
</button>
<div className="relative h-64 w-full rounded-xl overflow-hidden group cursor-pointer">
<img alt="Ad" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
<span className="text-xs font-semibold bg-yellow-400 text-black px-2 py-0.5 rounded w-fit mb-2">מודעה</span>
<h3 className="text-xl font-bold tracking-tight mb-1">מבצע קיץ לוהט!</h3>
<p className="text-sm opacity-90">הירשמו עכשיו וקבלו 50% הנחה על המנוי השנתי.</p>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white h-12 flex items-center px-4 justify-between shadow-sm relative z-20">
<div className="flex items-center gap-4 shrink-0 z-10 bg-gradient-to-l from-transparent to-rose-700 pl-4">
<button className="bg-white/20 hover:bg-white/30 text-xs font-semibold px-3 py-1.5 rounded-full transition flex items-center gap-1">
                כל התוצאות
                <i className="w-3 h-3" data-lucide="chevron-left"></i>
</button>
</div>

<div className="flex-1 overflow-hidden relative mx-4 mask-linear-gradient">
<div className="ticker-wrap">
<div className="ticker-move text-sm font-medium flex gap-8 items-center">
<span className="flex items-center gap-2"><span className="text-rose-200 text-xs">22:00</span> מכבי ת"א <span className="font-bold text-white">2 - 1</span> הפועל חיפה</span>
<span className="w-px h-4 bg-white/20"></span>
<span className="flex items-center gap-2"><span className="text-rose-200 text-xs">21:45</span> ליברפול <span className="font-bold text-white">0 - 0</span> ארסנל</span>
<span className="w-px h-4 bg-white/20"></span>
<span className="flex items-center gap-2"><span className="text-rose-200 text-xs">LIVE</span> ברצלונה <span className="font-bold text-white animate-pulse">3 - 2</span> ריאל מדריד</span>
<span className="w-px h-4 bg-white/20"></span>
<span className="flex items-center gap-2"><span className="text-rose-200 text-xs">20:30</span> לייקרס <span className="font-bold text-white">112 - 108</span> סלטיקס</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 shrink-0">
<div className="text-left leading-none">
<div className="text-xs font-medium opacity-80">29.01.24</div>
<div className="text-xs font-bold">14:35</div>
</div>
<div className="font-black text-xl italic tracking-tighter">5 SCORES</div>
</div>
</div>

<header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
<div className="container mx-auto px-4">

<div className="flex items-center justify-between py-3">

<button className="lg:hidden p-2 text-slate-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>

<nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
<a className="hover:text-rose-600 transition" href="#">כדורגל ישראלי</a>
<a className="hover:text-rose-600 transition" href="#">כדורגל עולמי</a>
<a className="hover:text-rose-600 transition" href="#">כדורסל</a>
<a className="hover:text-rose-600 transition" href="#">NBA</a>
<a className="hover:text-rose-600 transition" href="#">ענפים נוספים</a>
<a className="hover:text-rose-600 transition" href="#">VOD</a>
<a className="hover:text-rose-600 transition" href="#">תוצאות</a>
<a className="hover:text-rose-600 transition" href="#">טבלאות</a>
</nav>

<div className="flex items-center justify-center">
<div className="h-10 w-10 bg-black text-white flex items-center justify-center font-black text-2xl italic rounded transform skew-x-[-10deg]">
<span className="transform skew-x-[10deg]">5</span>
</div>
</div>
</div>

<div className="flex items-center justify-between py-2 border-t border-slate-100 text-xs font-medium text-slate-500 overflow-x-auto no-scrollbar">
<div className="flex items-center gap-4 whitespace-nowrap">
<a className="hover:text-slate-900" href="#">פנטזי ליג</a>
<a className="hover:text-slate-900" href="#">ליגת החלומות</a>
<a className="hover:text-slate-900" href="#">משחק חדש: 5 חבר'ה</a>
<a className="hover:text-slate-900" href="#">לוח שידורים</a>
<a className="hover:text-slate-900 text-rose-600 font-bold" href="#">5RADIO</a>
</div>
<div className="flex items-center gap-3 pl-2">
<a className="p-1.5 rounded-md hover:bg-slate-100 text-slate-900" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="p-1.5 rounded-md hover:bg-slate-100 text-slate-900" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="p-1.5 rounded-md hover:bg-slate-100 text-slate-900" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<button className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1.5 hover:bg-blue-700 transition shadow-sm">
<i className="w-3 h-3" data-lucide="user"></i>
                        אזור אישי
                    </button>
</div>
</div>
</div>
</header>

<div className="bg-white border-b border-slate-200 py-2 overflow-x-auto no-scrollbar">
<div className="container mx-auto px-4 flex justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition duration-500">

<div className="flex items-center gap-2 font-bold text-slate-800"><i className="text-yellow-500 fill-yellow-500" data-lucide="zap"></i> WINNER</div>
<div className="flex items-center gap-2 font-bold text-slate-800"><i className="text-blue-600" data-lucide="shield"></i> HAREL</div>
<div className="flex items-center gap-2 font-bold text-slate-800"><i className="text-navy-900" data-lucide="anchor"></i> NAUTICA</div>
<div className="flex items-center gap-2 font-bold text-slate-800"><i className="text-red-600" data-lucide="car"></i> HONDA</div>
</div>
</div>

<main className="container mx-auto px-4 py-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-9 flex flex-col gap-6">

<article className="group relative h-[500px] w-full rounded-2xl overflow-hidden shadow-sm bg-slate-900">
<img alt="Main Story" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>

<div className="absolute top-4 right-4">
<span className="bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-lg animate-pulse">בשידור חי</span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start gap-3">
<div className="flex items-center gap-2 text-rose-400 text-sm font-semibold tracking-wide uppercase">
<span>ליגת העל</span>
<span className="w-1 h-1 bg-rose-400 rounded-full"></span>
<span>פרשנות</span>
</div>
<h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl drop-shadow-sm">
                            הקרב על האליפות נפתח מחדש: הדרמה בטרנר שינתה את הכללים
                        </h1>
<p className="text-lg text-slate-200 max-w-2xl line-clamp-2">
                            אחרי המעידה של מכבי חיפה, באר שבע חוזרת למרוץ בגדול. הניתוח המלא של המהלכים שהובילו למהפך, ומה צפוי במחזורי הסיום המותחים.
                        </p>
<div className="flex items-center gap-4 mt-2">
<button className="bg-white text-slate-900 hover:bg-slate-100 px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 transition shadow-lg">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                                צפו בתקציר
                            </button>
<span className="text-slate-400 text-xs">פורסם לפני 15 דקות</span>
</div>
</div>
</article>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="flex bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition group h-40">
<div className="w-2/5 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="w-3/5 p-4 flex flex-col justify-between">
<div>
<span className="text-blue-600 text-xs font-bold mb-1 block">כדורגל עולמי</span>
<h3 className="font-bold text-slate-800 text-lg leading-snug tracking-tight">מסי לא עוצר: השער המרהיב ששבר את הרשת</h3>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-slate-400 text-xs">דניאל לוי</span>
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition" data-lucide="arrow-left"></i>
</div>
</div>
</article>

<article className="flex bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition group h-40">
<div className="w-2/5 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="w-3/5 p-4 flex flex-col justify-between">
<div>
<span className="text-orange-600 text-xs font-bold mb-1 block">כדורסל</span>
<h3 className="font-bold text-slate-800 text-lg leading-snug tracking-tight">הקאמבק של דני אבדיה: "הרגשתי מצוין על הפרקט"</h3>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-slate-400 text-xs">מערכת האתר</span>
<i className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition" data-lucide="arrow-left"></i>
</div>
</div>
</article>
</div>
</div>

<aside className="lg:col-span-3 flex flex-col gap-6">

<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<div className="bg-gradient-to-l from-yellow-400 to-yellow-500 p-3 flex justify-between items-center">
<span className="font-bold text-slate-900 text-sm">ווינר - המשחק המרכזי</span>
<span className="bg-black/10 text-slate-900 text-xs px-2 py-0.5 rounded font-mono">LIVE</span>
</div>
<div className="p-4">
<div className="text-center mb-3">
<div className="text-xs text-slate-500 mb-1">ליגת האלופות</div>
<div className="flex justify-between items-center font-bold text-slate-800">
<span>מנצ'סטר סיטי</span>
<span className="text-rose-600">vs</span>
<span>באיירן מינכן</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-center">
<button className="bg-slate-50 hover:bg-yellow-100 border border-slate-200 rounded p-2 transition group">
<div className="text-xs text-slate-400 group-hover:text-slate-600">1</div>
<div className="font-bold text-slate-800">2.10</div>
</button>
<button className="bg-slate-50 hover:bg-yellow-100 border border-slate-200 rounded p-2 transition group">
<div className="text-xs text-slate-400 group-hover:text-slate-600">X</div>
<div className="font-bold text-slate-800">3.40</div>
</button>
<button className="bg-slate-50 hover:bg-yellow-100 border border-slate-200 rounded p-2 transition group">
<div className="text-xs text-slate-400 group-hover:text-slate-600">2</div>
<div className="font-bold text-slate-800">2.80</div>
</button>
</div>
<button className="w-full mt-3 bg-slate-900 text-white text-xs font-bold py-2 rounded hover:bg-slate-800 transition">
                            שלח טופס עכשיו
                        </button>
</div>
</div>

<div className="bg-slate-900 rounded-xl overflow-hidden shadow-sm relative group cursor-pointer h-48">
<img className="opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="bg-rose-600 rounded-full p-3 shadow-lg group-hover:scale-110 transition">
<i className="w-6 h-6 text-white fill-white" data-lucide="play"></i>
</div>
<span className="text-white text-sm font-bold mt-2">תקציר: הדרבי התל אביבי</span>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[500px]">
<div className="bg-blue-700 text-white p-3 font-bold text-sm flex items-center gap-2">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        חדר החדשות
                    </div>
<div className="overflow-y-auto p-0 flex-1 no-scrollbar divide-y divide-slate-100" id="news-feed">

<div className="p-3 hover:bg-slate-50 transition cursor-pointer flex gap-3">
<div className="text-xs font-mono text-blue-600 pt-1 shrink-0">12:15</div>
<div>
<h4 className="text-sm font-medium text-slate-800 leading-snug">ההחלטה התקבלה: המשחק המרכזי יתקיים במועד המקורי</h4>
</div>
</div>
<div className="p-3 hover:bg-slate-50 transition cursor-pointer flex gap-3">
<div className="text-xs font-mono text-blue-600 pt-1 shrink-0">12:02</div>
<div className="flex gap-2">
<div>
<h4 className="text-sm font-medium text-slate-800 leading-snug">דיווח בצרפת: ניימאר שוקל חזרה לברצלונה</h4>
</div>
<img className="w-12 h-12 rounded object-cover shrink-0" src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
</div>
<div className="p-3 hover:bg-slate-50 transition cursor-pointer flex gap-3">
<div className="text-xs font-mono text-blue-600 pt-1 shrink-0">11:45</div>
<div>
<span className="bg-rose-100 text-rose-700 text-[10px] font-bold px-1.5 py-0.5 rounded mb-1 inline-block">בלעדי</span>
<h4 className="text-sm font-medium text-slate-800 leading-snug">ראיון מיוחד עם מאמן הנבחרת לקראת הקמפיין</h4>
</div>
</div>
<div className="p-3 hover:bg-slate-50 transition cursor-pointer flex gap-3">
<div className="text-xs font-mono text-blue-600 pt-1 shrink-0">11:30</div>
<div>
<h4 className="text-sm font-medium text-slate-800 leading-snug">שיא חדש באתלטיקה: התוצאה המדהימה בריצת 100 מטר</h4>
</div>
</div>
<div className="p-3 hover:bg-slate-50 transition cursor-pointer flex gap-3">
<div className="text-xs font-mono text-blue-600 pt-1 shrink-0">10:55</div>
<div className="flex gap-2">
<div>
<h4 className="text-sm font-medium text-slate-800 leading-snug">טניס: ג'וקוביץ' עלה לחצי הגמר בקלות</h4>
</div>
<img className="w-12 h-12 rounded object-cover shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</div>
</div>

<div className="bg-slate-100 h-64 w-full rounded-xl flex items-center justify-center relative overflow-hidden border border-slate-200">
<span className="text-slate-400 text-xs uppercase tracking-widest z-10">פרסומת</span>
<img className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</aside>
</div>
</main>
<footer className="bg-white border-t border-slate-200 mt-12 py-8">
<div className="container mx-auto px-4 text-center">
<div className="flex justify-center items-center gap-2 mb-4">
<div className="font-black text-2xl italic tracking-tighter text-slate-900">5 SCORES</div>
</div>
<p className="text-slate-500 text-sm">© כל הזכויות שמורות לערוץ הספורט 2024</p>
</div>
</footer>


    </>
  );
}
