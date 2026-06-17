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

        // Reveal on Scroll Logic
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Trigger once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
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
      

<div className="relative w-full flex flex-col">

<div className="absolute inset-0 z-0 h-screen overflow-hidden">
<img alt="Background" className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen animate-slow-zoom" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/80"></div>
</div>

<nav className="relative z-50 w-full border-b border-neutral-800/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-24">

<div className="flex items-center gap-3 order-last lg:order-first reveal active">
<div className="relative group">
<svg aria-hidden="true" className="lucide lucide-server w-8 h-8 text-amber-500 stroke-[1.5]" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<div className="-inset-2 group-hover:opacity-100 transition duration-500 bg-amber-500/20 opacity-0 rounded-full absolute blur-lg"></div>
</div>
<div className="flex flex-col">
<span className="text-xl font-bold tracking-tight text-white leading-none font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>טק-אקסטרים</span>
<span className="text-xs font-light text-neutral-400 tracking-wide font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>פתרונות מחשוב לעסקים</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-8 text-lg font-normal text-neutral-300 reveal active delay-100">
<a className="hover:text-amber-500 transition-colors duration-300 font-geist" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>צור קשר</a>
<a className="hover:text-amber-500 transition-colors duration-300 font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>מאמרים</a>
<a className="hover:text-amber-500 transition-colors duration-300 font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>פרויקטים</a>
<a className="hover:text-amber-500 transition-colors duration-300 font-geist" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>השירותים שלנו</a>
<a className="text-amber-500 font-medium font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>אודותינו</a>
</div>

<div className="flex items-center h-full order-first lg:order-last reveal active delay-200">
<button className="lg:hidden hover:text-white text-neutral-300 mr-4 pt-2 pr-2 pb-2 pl-2">
<svg aria-hidden="true" className="lucide lucide-menu w-7 h-7 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<div className="hidden md:flex flex-row-reverse items-center h-[120%] -mt-1 bg-amber-500 px-8 transform skew-x-0 relative top-0 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:bg-amber-400 transition-colors cursor-pointer group">
<div className="flex flex-col items-end mr-4">
<span className="text-xs font-medium text-neutral-900 uppercase tracking-wider mb-0.5 opacity-80 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>חייגו כעת:</span>
<span className="text-xl font-bold text-neutral-900 tracking-tight group-hover:scale-105 transition-transform font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>050-1234567</span>
</div>
<svg aria-hidden="true" className="lucide lucide-phone w-6 h-6 text-neutral-900 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
</div>
</div>
</nav>

<main className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-6rem)] max-w-7xl mx-auto px-4 lg:px-8 w-full py-20 lg:py-0">
<div className="max-w-3xl w-full text-right">
<div className="flex items-center gap-3 mb-6 reveal active">
<span className="h-px w-12 bg-amber-500/50"></span>
<span className="text-amber-500 text-sm font-medium tracking-[0.2em] uppercase font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>מומחים באבטחת מידע ותשתיות</span>
</div>
<h1 className="text-5xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6 text-glow reveal delay-100 active font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>
                    אנחנו מספקים <br/>
<span className="text-amber-500 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>שקט טכנולוגי</span> לעסק.
                </h1>
<p className="text-lg lg:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mb-10 border-r-2 border-neutral-800 pr-6 reveal delay-200 active font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                    על פי נתונים עדכניים, 80% מהעסקים חווים השבתה עקב כשלי מחשוב. אצלנו, המערכות עובדות בשבילך. שירותי IT מנוהלים, גיבוי ענן ואבטחת סייבר בסטנדרט הגבוה ביותר.
                </p>
<div className="flex flex-col sm:flex-row gap-4 reveal delay-300 active">
<button className="group relative overflow-hidden bg-amber-500 text-neutral-900 px-8 py-4 text-lg font-semibold flex items-center justify-center gap-3 transition-all hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] rounded-sm">
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>בואו נשדרג את המערכת</span>
<svg aria-hidden="true" className="lucide lucide-arrow-left w-5 h-5 stroke-[1.5] group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="px-8 py-4 text-lg font-normal text-neutral-300 hover:text-white flex items-center justify-center gap-2 transition-colors">
<svg aria-hidden="true" className="lucide lucide-shield-check w-5 h-5 text-amber-500 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>בדיקת תקינות חינם</span>
</button>
</div>
</div>
</main>
</div>

<section className="relative z-20 bg-neutral-950 py-24 lg:py-32 overflow-hidden" id="services">

<div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-20 reveal active">
<span className="text-amber-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>השירותים שלנו</span>
<h2 className="text-4xl lg:text-5xl text-white tracking-tight mb-6 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>פתרונות מחשוב מקצה לקצה</h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                    אנחנו בונים את המעטפת הטכנולוגית המדויקת עבור העסק שלך. החל מתשתית יציבה ועד להגנה מתקדמת מפני איומי סייבר.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="glass-card p-8 lg:p-10 rounded-xl group reveal delay-100 active">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800 group-hover:border-amber-500/50 transition-colors">
<iconify-icon className="text-amber-500 text-3xl" icon="solar:letter-linear"></iconify-icon>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-up-left w-6 h-6 text-neutral-600 group-hover:text-amber-500 transition-colors" data-lucide="arrow-up-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17V7h10"></path><path d="M17 17 7 7"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>אופיס 365 לעסקים</h3>
<p className="text-neutral-400 font-light mb-6 leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        הטמעת סביבת עבודה פרודוקטיבית עם חבילת הכלים של Microsoft. סנכרון מלא בין המחשב לנייד, דואר ארגוני בנפח גבוה, וניהול רישיונות חכם.
                    </p>
<ul className="space-y-3 text-sm text-neutral-300 font-normal">
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            ניהול תיבות דואר Exchange
                        </li>
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            שיתוף קבצים ב-Teams ו-SharePoint
                        </li>
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            אבטחת זהויות וגישה מרחוק
                        </li>
</ul>
</div>

<div className="glass-card p-8 lg:p-10 rounded-xl group reveal delay-200 active">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800 group-hover:border-amber-500/50 transition-colors">
<iconify-icon className="text-amber-500 text-3xl" icon="solar:cloud-square-linear"></iconify-icon>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-up-left w-6 h-6 text-neutral-600 group-hover:text-amber-500 transition-colors" data-lucide="arrow-up-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17V7h10"></path><path d="M17 17 7 7"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>שירותי ענן לעסקים</h3>
<p className="text-neutral-400 font-light mb-6 leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        מעבר לשרתים וירטואליים (VPS) המאפשרים גמישות מקסימלית. חיסכון בעלויות חומרה, נגישות מכל מקום בעולם וביצועים ללא פשרות.
                    </p>
<ul className="space-y-3 text-sm text-neutral-300 font-normal">
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            שרתים וירטואליים מותאמים אישית
                        </li>
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            זמינות שרתים (Uptime) של 99.9%
                        </li>
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            סקיילביליות - גדילה לפי צורך
                        </li>
</ul>
</div>

<div className="glass-card p-8 lg:p-10 rounded-xl group reveal delay-100 active">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800 group-hover:border-amber-500/50 transition-colors">
<iconify-icon className="text-amber-500 text-3xl" icon="solar:server-path-linear"></iconify-icon>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-up-left w-6 h-6 text-neutral-600 group-hover:text-amber-500 transition-colors" data-lucide="arrow-up-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17V7h10"></path><path d="M17 17 7 7"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>גיבוי בענן לעסקים</h3>
<p className="text-neutral-400 font-light mb-6 leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        תעודת הביטוח של המידע העסקי שלך. גיבוי אוטומטי, מוצפן ומאובטח בענן למניעת אובדן מידע במקרה של תקלה פיזית או מתקפת כופר.
                    </p>
<ul className="space-y-3 text-sm text-neutral-300 font-normal">
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            שחזור מהיר במקרה אסון (DR)
                        </li>
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            הצפנה מתקדמת מקצה לקצה
                        </li>
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            היסטוריית גרסאות קבצים (Versioning)
                        </li>
</ul>
</div>

<div className="glass-card p-8 lg:p-10 rounded-xl group reveal delay-200 active">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800 group-hover:border-amber-500/50 transition-colors">
<iconify-icon className="text-amber-500 text-3xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-up-left w-6 h-6 text-neutral-600 group-hover:text-amber-500 transition-colors" data-lucide="arrow-up-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17V7h10"></path><path d="M17 17 7 7"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>אבטחת מידע לעסקים</h3>
<p className="text-neutral-400 font-light mb-6 leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        הגנה פרואקטיבית על הרשת הארגונית. ניטור 24/7, חומות אש (Firewall), אנטי-וירוס מנוהל וזיהוי איומים בזמן אמת לפני שהם גורמים נזק.
                    </p>
<ul className="space-y-3 text-sm text-neutral-300 font-normal">
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            הגנת נקודות קצה (EDR/MDR)
                        </li>
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            סקר סיכונים ומבדקי חדירה
                        </li>
<li className="flex items-center gap-3 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-amber-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            סינון מיילים ופישינג
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-20 py-20 bg-neutral-950 border-t border-neutral-800/50" id="contact">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="glass-card rounded-2xl p-12 lg:p-16 text-center relative overflow-hidden reveal active">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl lg:text-5xl text-white tracking-tight mb-6 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>מוכנים לייעל את העסק?</h2>
<p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto mb-10 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        צוות המומחים שלנו זמין עבורך. השאירו פרטים ונחזור אליכם עם פתרון מותאם אישית לצרכי המחשוב שלכם.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-amber-500 hover:bg-amber-400 text-neutral-900 text-lg font-semibold px-10 py-4 rounded-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                            דברו איתנו עכשיו
                        </button>
<button className="px-10 py-4 rounded-sm border border-neutral-700 text-white hover:bg-neutral-800 transition-all font-medium hover:scale-105 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                            שלחו הודעת וואטסאפ
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-20 border-t border-neutral-800/50 bg-neutral-950">
<div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500 font-light reveal">
<div className="flex flex-col md:flex-row items-center gap-6">
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>© 2024 טק-אקסטרים פתרונות מחשוב. כל הזכויות שמורות.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-amber-500 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>תנאי שימוש</a>
<a className="hover:text-amber-500 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>מדיניות פרטיות</a>
<a className="hover:text-amber-500 transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>נגישות</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 left-6 z-50 group reveal delay-300 active" href="#">
<div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>1</div>
<div className="bg-[#25D366] p-4 rounded-full shadow-lg shadow-green-900/20 hover:scale-110 transition-transform duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:chat-round-dots-bold"></iconify-icon>
</div>

<div className="absolute left-16 top-1/2 -translate-y-1/2 bg-white text-neutral-900 px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium text-sm font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
            דברו איתנו בוואטסאפ
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 border-4 border-transparent border-r-white"></div>
</div>
</a>


    </>
  );
}
