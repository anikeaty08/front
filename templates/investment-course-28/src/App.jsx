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



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/70 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-14 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-[#F5E14B] font-semibold tracking-tight" style={{fontFamily: '"Noto Sans Hebrew", ui-sans-serif', letterSpacing: '-0.02em'}}>S</span>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight text-white/90" style={{fontFamily: '"Noto Sans Hebrew", ui-sans-serif'}}>SKILLS</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-white/5 ring-1 ring-white/10 text-white/70" style={{}}>מכללה להשקעות</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white transition" href="#benefits" style={{}}>מה בקורס</a>
<a className="text-sm text-white/70 hover:text-white transition" href="#about" style={{}}>מי אני</a>
<a className="text-sm text-white/70 hover:text-white transition" href="#why-free" style={{}}>למה חינם</a>
</nav>
<div className="flex items-center gap-3">
<span className="hidden sm:flex items-center text-xs text-black bg-[#F5E14B]/90 rounded-full px-2.5 py-1 font-medium" style={{}}>
<svg aria-hidden="true" className="lucide lucide-alarm-clock w-3.5 h-3.5 mr-1.5" data-lucide="alarm-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path></svg>
              לזמן מוגבל
            </span>
<a className="inline-flex items-center justify-center rounded-md bg-[#F5E14B] text-black px-4 py-2 text-sm font-semibold hover:bg-[#F1D530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5E14B] transition" href="#lead-form" style={{}}>
              קבלו גישה עכשיו
              <svg aria-hidden="true" className="lucide lucide-arrow-left w-4 h-4 mr-2" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[38rem] w-[38rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side, #F5E14B 0%, rgba(245,225,75,0.08) 45%, transparent 70%)'}}></div>
<div className="absolute -bottom-40 right-1/2 translate-x-1/2 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side, #D1D5DB 0%, rgba(209,213,219,0.08) 45%, transparent 70%)'}}></div>
</div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-10 pl-4">
<div className="text-center max-w-3xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80" style={{}}>
<svg aria-hidden="true" className="lucide lucide-zap w-4 h-4 text-[#F5E14B]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            קורס חדש – 100% בחינם <span className="text-white/50" style={{}}>[לזמן מוגבל]</span>
</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold tracking-tight font-montserrat mt-5" style={{fontFamily: '"Noto Sans Hebrew", ui-sans-serif'}}>
            איך אלפי ישראלים בנו חופש כלכלי דרך השקעות בשוק ההון
          </h1>
<p className="sm:text-xl text-lg font-semibold text-slate-50 mt-4" style={{}}>(בסוף השיעור הרביעי כבר תדע איך להשקיע לבד)</p>
<div className="mt-6">
<p className="mx-auto max-w-2xl text-base sm:text-lg text-white/70" style={{}}>
              נמאס לך לעבוד קשה, בקושי לסגור את החודש, ולראות את הכסף ממשיך לרדת בבנק?
              זה המסלול הקצר (בחינם לגמרי) שייתן לך את הצעד הראשון לחיים בלי תלות במשכורת.
            </p>
</div>
</div>

<div className="mt-10 mx-auto max-w-4xl">
<div className="grid lg:grid-cols-2 gap-6 items-stretch">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight" style={{}}>לקבלת הקורס החינמי</h2>
<span className="text-xs px-2 py-1 rounded-full bg-[#F5E14B]/15 text-[#F5E14B] ring-1 ring-[#F5E14B]/30" style={{}}>מספר המקומות מוגבל</span>
</div>
<form className="mt-6 space-y-4" id="lead-form" onsubmit="event.preventDefault(); document.getElementById('thankyou').classList.remove('hidden'); document.getElementById('thankyou').scrollIntoView({behavior:'smooth', block:'center'});">
<div className="">
<label className="block text-sm mb-1.5 text-white/70" htmlFor="full-name" style={{}}>שם מלא</label>
<div className="relative">
<svg aria-hidden="true" className="lucide lucide-user w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<input className="w-full rounded-lg bg-black/50 border border-white/10 text-white placeholder-white/30 pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5E14B] focus:border-transparent transition" id="full-name" name="full-name" placeholder="לדוגמה: דנה כהן" required="" style={{fontFamily: '\'Noto Sans Hebrew\', ui-sans-serif'}} type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm mb-1.5 text-white/70" htmlFor="phone" style={{}}>טלפון</label>
<div className="relative">
<svg aria-hidden="true" className="lucide lucide-phone w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<input className="w-full rounded-lg bg-black/50 border border-white/10 text-white placeholder-white/30 pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5E14B] focus:border-transparent transition" id="phone" inputmode="tel" name="phone" placeholder="05X-XXXXXXX" required="" style={{fontFamily: '\'Noto Sans Hebrew\', ui-sans-serif'}} type="tel"/>
</div>
</div>
<div>
<label className="block text-sm mb-1.5 text-white/70" htmlFor="email" style={{}}>מייל</label>
<div className="relative">
<svg aria-hidden="true" className="lucide lucide-mail w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full rounded-lg bg-black/50 border border-white/10 text-white placeholder-white/30 pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5E14B] focus:border-transparent transition text-left" id="email" inputmode="email" name="email" placeholder="you@example.com" required="" style={{direction: 'ltr', fontFamily: '\'Noto Sans Hebrew\', ui-sans-serif'}} type="email"/>
</div>
</div>
</div>
<button className="w-full inline-flex items-center justify-center rounded-lg bg-[#F5E14B] text-black px-5 py-3.5 text-base font-semibold hover:bg-[#F1D530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5E14B] transition" style={{}} type="submit">
                  אני רוצה את הקורס החינמי שלי
                  <svg aria-hidden="true" className="lucide lucide-arrow-left w-5 h-5 mr-2" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-2 text-xs text-white/50" style={{}}>
<svg aria-hidden="true" className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    הפרטים שלך שמורים ולא יועברו לצד ג'
                  </div>
<div className="text-xs text-white/50 hidden sm:block" style={{}}>SSL מאובטח</div>
</div>
</form>
</div>
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-8 flex flex-col justify-between">
<div className="">
<div className="flex items-center gap-2 text-sm text-white/70" style={{}}>
<svg aria-hidden="true" className="lucide lucide-play-circle w-5 h-5 text-[#F5E14B]" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  4 שיעורים פרקטיים אונליין
                </div>
<h3 className="mt-3 text-2xl font-semibold tracking-tight" style={{}}>מה מחכה לך בקורס?</h3>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-3">
<div className="mt-0.5 h-6 w-6 rounded-md bg-[#F5E14B]/15 ring-1 ring-[#F5E14B]/30 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-[#F5E14B]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-white/90" style={{}}>איך מתחילים להשקיע מהצעד הראשון</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-6 w-6 rounded-md bg-[#F5E14B]/15 ring-1 ring-[#F5E14B]/30 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-[#F5E14B]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-white/90" style={{}}>איך לזהות מניות עם פוטנציאל להתפוצץ</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-6 w-6 rounded-md bg-[#F5E14B]/15 ring-1 ring-[#F5E14B]/30 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-[#F5E14B]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-white/90" style={{}}>איך לבנות מערכת ניהול סיכונים שתגן עליך מהפסדים</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-6 w-6 rounded-md bg-[#F5E14B]/15 ring-1 ring-[#F5E14B]/30 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-[#F5E14B]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-white/90" style={{}}>איך לבצע את העסקה הראשונה שלך בביטחון</p>
</li>
</ul>
</div>
<div className="mt-6 sm:mt-10">
<div className="flex items-center justify-center gap-2 text-xs text-white/60">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="" className="inline-block h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="" className="inline-block h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="" className="inline-block h-7 w-7 rounded-full ring-2 ring-black object-cover" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
<span style={{}}>אלפי ישראלים כבר בפנים</span>
</div>
</div>
</div>
</div>

<div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sm text-white/80" style={{}}>
<svg aria-hidden="true" className="lucide lucide-alert-triangle w-4 h-4 text-[#F5E14B]" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                הקורס זמין בחינם רק לזמן מוגבל – ההרשמה נסגרת בקרוב.
              </div>
<div className="w-full sm:w-64 h-2 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full bg-[#F5E14B]" style={{width: '78%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
<div className="mx-auto max-w-4xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{}}>למה שתקשיבו לי בכלל?</h2>
<p className="mt-3 text-white/70 max-w-3xl mx-auto" style={{}}>נעים מאוד, אני עומר ביבי.</p>
</div>
<div className="mt-8 grid lg:grid-cols-2 gap-8 items-center">
<div className="order-2 lg:order-1">
<div className="prose prose-invert max-w-none">
<p className="text-white/80 leading-7" style={{}}>
                אני יודע מה זה לקום כל בוקר לעבודה, לחזור גמור בערב, ולהרגיש שהעבודה הקשה שלי לא עוזרת לי לסגור את החודש. בדיוק ככה נראתה תקופה ארוכה מהחיים שלי.
              </p>
<p className="text-white/80 leading-7 mt-4" style={{}}>
                לא גדלתי עם גב כלכלי, לא חיכתה לי ירושה, ולא היה לי "מסלול מקוצר" להצלחה. היה לי רק רצון עקשני להבין לעומק איך כסף עובד – ואיך לגרום לו לעבוד בשבילי.
              </p>
<p className="text-white/80 leading-7 mt-4" style={{}}>
                התחלתי עם סכומים קטנים, חיפשתי תשובות, עשיתי לא מעט טעויות – וכל אחת מהן לימדה אותי שיעור חשוב. לאט־לאט בניתי שיטה מסודרת, כזו שלא מתבססת על מזל או על “הימור טוב”, אלא על כללים ברורים ועקביות.
              </p>
<p className="text-white/80 leading-7 mt-4" style={{}}>
                היום, אחרי יותר מעשור של ניסיון בשוק ההון, אני מוביל את מכללת סקילס – המקום שבו אלפי ישראלים כבר למדו להשקיע חכם, לנהל כסף בצורה נכונה, ולהתחיל לשבור את המעגל של תלות במשכורת.
              </p>
</div>
<div className="mt-6 flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-award w-5 h-5 text-[#F5E14B]" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div>
<p className="text-sm font-medium text-white/90" style={{}}>עומר ביבי</p>
<p className="text-xs text-white/50" style={{}}>מייסד מכללת סקילס | מעל עשור ניסיון בשוק ההון</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative mx-auto w-full max-w-md">
<div className="absolute -inset-4 -z-10 rounded-3xl opacity-20 blur-2xl" style={{background: 'radial-gradient(closest-side, #F5E14B 0%, rgba(245,225,75,0.08) 45%, transparent 70%)'}}></div>
<img alt="עומר ביבי" className="w-full rounded-3xl object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&amp;w=1080&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center justify-center rounded-lg bg-[#F5E14B] text-black px-6 py-3 text-base font-semibold hover:bg-[#F1D530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5E14B] transition" href="#lead-form" style={{}}>
            אני רוצה את הקורס החינמי שלי
            <svg aria-hidden="true" className="lucide lucide-arrow-left w-5 h-5 mr-2" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</a>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-white/[0.02]" id="why-free">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
<div className="mx-auto max-w-3xl text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80" style={{}}>
<svg aria-hidden="true" className="lucide lucide-gift w-4 h-4 text-[#F5E14B]" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
            למה חינם? ולמה עכשיו?
          </div>
<h3 className="mt-4 text-3xl font-semibold tracking-tight" style={{}}>בשביל שאף אחד לא יעבור את הדרך לבד</h3>
<div className="mt-4 space-y-4 text-white/80">
<p style={{}}>כשאני הייתי בן 21 לא היה לי מי שילמד אותי, יראה לי צעד־אחרי־צעד מה לעשות עם הכסף המעט שהיה לי. ולא משנה כמה חיפשתי – הרגשתי שאני לבד.</p>
<p style={{}}>הקורס הזה הוא בשביל האדם שהייתי, בשביל שאף אחד לא יעבור את הדרך לבד.</p>
</div>
</div>
<div className="mt-8 mx-auto max-w-3xl">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-[#F5E14B]/15 ring-1 ring-[#F5E14B]/30 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-alert-octagon w-5 h-5 text-[#F5E14B]" data-lucide="alert-octagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M12 8v4"></path><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"></path></svg>
</div>
<div>
<p className="text-white/90 font-medium" style={{}}>⚠️ הקורס זמין בחינם רק לזמן מוגבל</p>
<p className="text-sm text-white/60" style={{}}>ברגע שההרשמה נסגרת, ההדרכה יורדת מהאוויר.</p>
</div>
</div>
<a className="inline-flex items-center rounded-md bg-[#F5E14B] text-black px-4 py-2.5 text-sm font-semibold hover:bg-[#F1D530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5E14B] transition" href="#lead-form" style={{}}>
                הירשם עכשיו
                <svg aria-hidden="true" className="lucide lucide-arrow-left w-4 h-4 mr-2" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</a>
</div>
<div className="mt-5">
<div className="flex items-center justify-between text-xs text-white/60 mb-2">
<span style={{}}>תפוסה</span>
<span style={{}}>נשארו מקומות בודדים</span>
</div>
<div className="h-2 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full bg-[#F5E14B]" style={{width: '86%'}}></div>
</div>
</div>
</div>
</div>

<div className="mt-10 mx-auto max-w-3xl">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
<h4 className="text-xl font-semibold tracking-tight text-center" style={{}}>לקבלת הקורס החינמי: השארת פרטים</h4>
<form className="mt-5 grid sm:grid-cols-3 gap-4" onsubmit="event.preventDefault(); document.getElementById('thankyou').classList.remove('hidden'); document.getElementById('thankyou').scrollIntoView({behavior:'smooth', block:'center'});">
<div className="relative">
<svg aria-hidden="true" className="lucide lucide-user w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<input className="w-full rounded-lg bg-black/50 border border-white/10 text-white placeholder-white/30 pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5E14B] focus:border-transparent transition" placeholder="שם מלא" required="" style={{fontFamily: '\'Noto Sans Hebrew\', ui-sans-serif'}} type="text"/>
</div>
<div className="relative">
<svg aria-hidden="true" className="lucide lucide-phone w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<input className="w-full rounded-lg bg-black/50 border border-white/10 text-white placeholder-white/30 pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5E14B] focus:border-transparent transition" inputmode="tel" placeholder="טלפון" required="" type="tel"/>
</div>
<div className="relative">
<svg aria-hidden="true" className="lucide lucide-mail w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full rounded-lg bg-black/50 border border-white/10 text-white placeholder-white/30 pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5E14B] focus:border-transparent transition text-left" inputmode="email" placeholder="מייל" required="" style={{direction: 'ltr'}} type="email"/>
</div>
<button className="sm:col-span-3 inline-flex items-center justify-center rounded-lg bg-[#F5E14B] text-black px-5 py-3.5 text-base font-semibold hover:bg-[#F1D530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5E14B] transition" style={{}}>
                אני רוצה את הקורס החינמי שלי
                <svg aria-hidden="true" className="lucide lucide-arrow-left w-5 h-5 mr-2" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<p className="sm:col-span-3 text-center text-xs text-white/50" style={{}}>בפעם הבאה שתתלונן על יוקר המחיה או על המשכורת – תזכור שהייתה לך הזדמנות בחינם להתחיל שינוי. אל תדחה את זה – הירשם עכשיו.</p>
</form>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
<div className="mx-auto max-w-3xl text-center">
<h3 className="text-3xl font-semibold tracking-tight" style={{}}>לקבלת הקורס החינמי: השארת פרטים</h3>
<p className="mt-2 text-white/70" style={{}}>גשה מיידית לשיעור הראשון תוך דקות.</p>
<div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80" style={{}}>
<svg aria-hidden="true" className="lucide lucide-badge-check w-4 h-4 text-[#F5E14B]" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            חינם לגמרי | ללא התחייבות | ביטול בכל רגע
          </div>
<div className="mt-8">
<a className="inline-flex items-center justify-center rounded-lg bg-[#F5E14B] text-black px-7 py-3.5 text-base font-semibold hover:bg-[#F1D530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5E14B] transition" href="#lead-form" style={{}}>
              קבלו גישה לקורס עכשיו
              <svg aria-hidden="true" className="lucide lucide-arrow-left w-5 h-5 mr-2" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</a>
</div>
<div className="hidden mt-6 mx-auto max-w-md rounded-xl border border-white/10 bg-white/[0.03] p-4" id="thankyou">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-[#F5E14B]/15 ring-1 ring-[#F5E14B]/30 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-sparkles w-5 h-5 text-[#F5E14B]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white/90" style={{}}>תודה! הפרטים התקבלו.</p>
<p className="text-xs text-white/60" style={{}}>נשלחה אליך הודעת אימייל עם גישה לשיעור הראשון.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-[#F5E14B] font-semibold tracking-tight" style={{fontFamily: '"Noto Sans Hebrew", ui-sans-serif', letterSpacing: '-0.02em'}}>S</span>
</div>
<span className="text-sm text-white/60" style={{}}>SKILLS © כל הזכויות שמורות</span>
</div>
<div className="text-xs text-white/50 text-center sm:text-left" style={{}}>
            אין באמור ייעוץ השקעות ו/או תחליף לשיקול דעת. השקעה בשוק ההון כרוכה בסיכונים. עשה/י בדיקה עצמאית לפני קבלת החלטות.
          </div>
</div>
</div>
</footer>


<style>
      body { font-family: 'Noto Sans Hebrew', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Apple Color Emoji','Segoe UI Emoji'; }
    </style>

    </>
  );
}
