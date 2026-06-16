import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      lucide.createIcons();
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-40 bg-[#1C1C1C]/80 backdrop-blur-sm border-b border-gray-800">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between h-16 md:h-20">

<a aria-label="Shyft homepage" className="flex items-center gap-3 group" href="#">
<img alt="Shyft logo" className="h-10 w-10 rounded-md ring-1 ring-gray-700/50" src="https://dummyimage.com/40x40/ffffff/000000.png&amp;text=S"/>
<span className="text-lg md:text-xl font-semibold tracking-tight transition-colors group-hover:text-[#F2C94C]">
            Shyft
          </span>
</a>
</div>
</div>
</header>


<section className="relative overflow-hidden bg-[#1C1C1C] lg:pt-32 pt-40 pb-20">
<div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1C1C1C] to-transparent"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex flex-col-reverse gap-16 md:flex-row lg:py-16 items-center">

<div className="w-72 shrink-0 md:w-96 lg:w-[28rem]">
<div className="relative isolate">
<img alt="YouTube video thumbnail" aria-label="Open YouTube video player" className="ring-1 ring-gray-800/50 rounded-lg shadow-2xl" onclick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ','_blank')" src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" style={{cursor: 'pointer'}}/>
<span className="pointer-events-none absolute -inset-1 -z-10 rounded-lg bg-gradient-to-tr from-[#F2C94C]/70 to-[#F2C94C]/20 blur-xl opacity-40"></span>
</div>
</div>

<div className="w-full max-w-xl text-center md:text-right">
<p className="text-sm font-medium text-[#F2C94C] uppercase tracking-wide">
            🇮🇱 מיוחד למלחמה – תכנית אימונים בחינם
          </p>
<h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            השגרה נשברה? קבלו תכנית אימונים שתשיב לכם את תחושת השליטה
          </h1>
<h2 className="mt-3 text-xl sm:text-2xl font-medium text-[#F2C94C] tracking-tight">
            הפכו את חוסר הוודאות לכוח.
          </h2>
<p className="mt-6 text-sm sm:text-base leading-relaxed">
            המצב הביטחוני והאזעקות משבשים לכם את היום? יצרנו עבורכם תכנית אימונים ביתית, פשוטה ונגישה, שלא דורשת ציוד. היא תעזור לכם לשחרר לחצים, לחזק את הגוף והנפש, וליצור עוגן של יציבות בתוך הכאוס.
          </p>

<form action="#" className="flex flex-col gap-4 sm:flex-row md:justify-end mt-10 justify-center">
<label className="sr-only" htmlFor="fullname">שם מלא</label>
<input className="w-full rounded-full border border-gray-600 bg-transparent px-5 py-3 text-sm placeholder-gray-400 focus:border-[#F2C94C] focus:ring-[#F2C94C]/40" id="fullname" placeholder="שם מלא" required="" type="text"/>
<label className="sr-only" htmlFor="phone">טלפון</label>
<input className="w-full rounded-full border border-gray-600 bg-transparent px-5 py-3 text-sm placeholder-gray-400 focus:border-[#F2C94C] focus:ring-[#F2C94C]/40" id="phone" placeholder="טלפון" required="" type="tel"/>
<label className="sr-only" htmlFor="email">אימייל</label>
<input className="w-full placeholder-gray-400 focus:border-[#F2C94C] focus:ring-[#F2C94C]/40 text-sm bg-transparent border-gray-600 border rounded-full pt-3 pr-5 pb-3 pl-5" id="email" placeholder="אימייל" required="" type="email"/>
<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#F2C94C] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#d4b63b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C94C] focus-visible:ring-offset-2" type="submit">
              שלחו לי את התכנית!
              <svg className="lucide h-4 w-4" data-lucide="send"></svg>
</button>
</form>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1C1C1C] to-transparent"></div>
</section>


<section className="border-t border-gray-800 bg-[#1C1C1C] py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center gap-16">

<div className="w-full md:w-1/2">
<div className="relative isolate">
<img alt="Digital training program mockup" className="rounded-lg ring-1 ring-gray-800/50 shadow-2xl" src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&amp;fit=crop&amp;w=1180&amp;q=80"/>
<span className="pointer-events-none absolute -inset-1 -z-10 rounded-lg bg-gradient-to-tr from-[#F2C94C]/70 to-[#F2C94C]/20 blur-xl opacity-40"></span>
</div>
</div>

<div className="w-full md:w-1/2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 md:text-right text-center">
          מה מחכה לכם בתוך התכנית?
        </h2>
<ul className="space-y-4 text-sm sm:text-base leading-relaxed">
<li className="flex items-start gap-3">
<span className="mt-1 text-[#F2C94C]"><i className="w-5 h-5" data-lucide="check-circle"></i></span>
<span>בלי ציוד, בלי תירוצים: אימונים ביתיים שאפשר לבצע בסלון</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 text-[#F2C94C]"><i className="w-5 h-5" data-lucide="check-circle"></i></span>
<span>קצר ולעניין: תכנית יעילה שמתאימה גם ללו"ז לא צפוי</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 text-[#F2C94C]"><i className="w-5 h-5" data-lucide="check-circle"></i></span>
<span>פשוט וברור: כולל סרטוני וידאו שמראים בדיוק מה לעשות</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 text-[#F2C94C]"><i className="w-5 h-5" data-lucide="check-circle"></i></span>
<span>מחזק את הגוף והנפש: כלי מוכח לשחרור לחצים וחיזוק החוסן</span>
</li>
</ul>
</div>
</div>
</section>


<footer className="mt-auto pb-10 text-center text-xs text-gray-500">
    © 2023 Shyft. All rights reserved.
  </footer>



    </>
  );
}
