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



      // Icons
      window.lucide && lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Simple webhook submit handler
      function attachForm(formId) {
        const form = document.getElementById(formId);
        if (!form) return;
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const submitBtn = form.querySelector('button[type="submit"]');
          const name = form.querySelector('[name="name"]').value.trim();
          const phone = form.querySelector('[name="phone"]').value.trim();
          submitBtn.disabled = true;
          submitBtn.classList.add('opacity-70');
          const payload = {
            name,
            phone,
            source: 'website',
            page: window.location.href,
            timestamp: new Date().toISOString()
          };
          const url = form.dataset.webhook || '';
          try {
            await fetch(url || 'https://httpbin.org/post', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload),
              mode: 'no-cors'
            });
          } catch (err) {
            // ignore
          } finally {
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-70');
            // Show modal
            const modal = document.getElementById('successModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            form.reset();
          }
        });
      }
      attachForm('leadForm');
      attachForm('contactForm');

      // Close modal
      document.getElementById('closeModal').addEventListener('click', () => {
        const modal = document.getElementById('successModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });
      // Close modal on backdrop click
      document.getElementById('successModal').addEventListener('click', (e) => {
        if (e.target.id === 'successModal') {
          e.currentTarget.classList.add('hidden');
          e.currentTarget.classList.remove('flex');
        }
      });

      // Smooth anchor offset (account for header)
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
          const id = a.getAttribute('href').slice(1);
          const el = document.getElementById(id);
          if (el) {
            e.preventDefault();
            const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        });
      });

      // Apply font family inline per spec
      document.body.style.fontFamily = "Heebo, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'";
    
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
      

<div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-[#8625dd]/25 to-transparent blur-2xl"></div>

<div className="relative z-30">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="hidden md:flex items-center justify-between rounded-b-xl border border-white/10 bg-neutral-900/40 px-4 py-2 backdrop-blur">
<p className="text-sm text-white/70">שעות פעילות: א׳–ה׳ 07:00–17:00 • ביאליק 16, בת-ים</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition" href="tel:+972552748868">
<i className="w-4 h-4" data-lucide="phone"></i>
              055-274-8868
            </a>
<span className="h-3 w-px bg-white/10"></span>
<a className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition" href="mailto:Hey@converty.co.il">
<i className="w-4 h-4" data-lucide="mail"></i>
              Hey@converty.co.il
            </a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="group inline-flex items-center gap-2" href="#home">
<div className="grid h-9 w-9 place-content-center rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30 transition group-hover:bg-[#8625dd]/30">
<span className="text-[13px] font-semibold tracking-tight text-[#dfc6f5]" style={{fontFamily: `Inter, Heebo, system-ui, -apple-system, Segoe UI, Roboto`}}>CV</span>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight">קונברטי</span>
<span className="text-[11px] text-white/60 -mt-0.5">שיווק ופרסום דיגיטלי</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/80 hover:text-white transition" href="#about">אודות</a>
<a className="text-sm text-white/80 hover:text-white transition" href="#services">שירותים</a>
<a className="text-sm text-white/80 hover:text-white transition" href="#advantages">למה אנחנו</a>
<a className="text-sm text-white/80 hover:text-white transition" href="#portfolio">תיק עבודות</a>
<a className="text-sm text-white/80 hover:text-white transition" href="#testimonials">המלצות</a>
<a className="text-sm text-white/80 hover:text-white transition" href="#blog">בלוג</a>
<a className="text-sm text-white/80 hover:text-white transition" href="#contact">צור קשר</a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white hover:bg-neutral-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8625dd]" href="https://wa.me/972552748868?text=%D7%94%D7%99%D7%99%20%D7%A7%D7%95%D7%A0%D7%91%D7%A8%D7%98%D7%99%2C%20%D7%A9%D7%9E%D7%9A%20%D7%95%D7%98%D7%9C%D7%A4%D7%95%D7%9F%20%D7%95%D7%90%D7%A0%D7%A9%D7%9E%D7%97%20%D7%9C%D7%97%D7%96%D7%95%D7%A8%20%D7%90%D7%9C%D7%99%D7%9B%D7%9D" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle"></i>
              וואטסאפ
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-[#8625dd] px-3.5 py-2 text-sm font-medium text-white hover:bg-[#7520c2] transition shadow-lg shadow-[#8625dd]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8625dd]" href="#lead">
<i className="w-4 h-4" data-lucide="send"></i>
              השאירו פרטים
            </a>
</div>
</div>
</div>
</header>

<div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-neutral-950/80 p-3 backdrop-blur md:hidden">
<div className="mx-auto max-w-7xl px-2">
<div className="grid grid-cols-2 gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2.5 text-sm text-white hover:bg-neutral-800 transition" href="https://wa.me/972552748868?text=%D7%94%D7%99%D7%99%20%D7%A7%D7%95%D7%A0%D7%91%D7%A8%D7%98%D7%99%2C%20%D7%A9%D7%9E%D7%9A%20%D7%95%D7%98%D7%9C%D7%A4%D7%95%D7%9F%20%D7%95%D7%90%D7%A0%D7%A9%D7%9E%D7%97%20%D7%9C%D7%97%D7%96%D7%95%D7%A8%20%D7%90%D7%9C%D7%99%D7%9B%D7%9D" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle"></i>
            וואטסאפ
          </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-[#8625dd] px-3 py-2.5 text-sm font-medium text-white hover:bg-[#7520c2] transition" href="#lead">
<i className="w-4 h-4" data-lucide="send"></i>
            השאירו פרטים
          </a>
</div>
</div>
</div>

<section className="relative overflow-hidden" id="home">
<div className="absolute inset-0 -z-10 opacity-30">
<div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8625dd] blur-[120px]"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 md:pt-24 lg:pt-28 pb-16 md:pb-28">
<div className="grid gap-10 md:grid-cols-12 md:gap-8 items-center">
<div className="md:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1.5 text-xs text-white/80">
<i className="w-4 h-4 text-[#caa6f1]" data-lucide="sparkles"></i>
              צוות קטן וגמיש • שירות אישי • מומחיות בגוגל
            </div>
<h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold">
              צוות מקצועי שאכפת לו ממך, שמייצר לכם לידים — תוך 90 יום
            </h1>
<p className="mt-4 text-base sm:text-lg text-white/70">
              אנחנו קונברטי. סוכנות לשיווק דיגיטלי שמתמקדת בתכל'ס: לידים איכותיים לעסקים ותיקים ונותני שירות. בלי רעש, בלי ניירות — עבודה מדויקת שמביאה תוצאות.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/70">
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#a47ee6]" data-lucide="check"></i>
                מתמחים בפרסום בגוגל
              </div>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#a47ee6]" data-lucide="check"></i>
                שירות אישי בגובה העיניים
              </div>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#a47ee6]" data-lucide="check"></i>
                חיבורי מכירות ואוטומציות
              </div>
</div>
<div className="mt-10 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-[#8625dd] px-5 py-3 text-sm font-medium text-white hover:bg-[#7520c2] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8625dd]" href="#lead">
<i className="w-4 h-4" data-lucide="send"></i>
                השאירו פרטים ונחזור אליכם
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-neutral-900/60 px-4 py-3 text-sm text-white hover:bg-neutral-800 transition" href="#portfolio">
<i className="w-4 h-4" data-lucide="case-studies"></i>
                לראות עבודות
              </a>
</div>
<div className="mt-8 flex items-center gap-6 text-sm text-white/60">
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop" />
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=200&auto=format&fit=crop" />
</div>
<p>30+ לקוחות מרוצים • שיפור איכות הלקוחות בשוטף</p>
</div>
</div>

<div className="md:col-span-5" id="lead">
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5 sm:p-6 backdrop-blur">
<div className="flex items-center gap-2">
<div className="h-8 w-8 grid place-content-center rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30">
<i className="w-4 h-4 text-[#caa6f1]" data-lucide="inbox"></i>
</div>
<div>
<h2 className="text-xl font-semibold tracking-tight">נשמח לחזור אליכם</h2>
<p className="text-sm text-white/60">שאירו פרטים קצרים ותוך זמן קצר נחזור לשיחה קצרה וממוקדת.</p>
</div>
</div>
<form className="mt-5 space-y-4" data-webhook="https://hooks.zapier.com/hooks/catch/0000000/0000000/" id="leadForm">
<div>
<label className="mb-1 block text-sm text-white/80" htmlFor="name">שם פרטי</label>
<input className="w-full rounded-md border border-white/10 bg-neutral-950/80 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#8625dd] focus:ring-2 focus:ring-[#8625dd]/40" id="name" name="name" placeholder="לדוגמה: רועי" required />
</div>
<div>
<label className="mb-1 block text-sm text-white/80" htmlFor="phone">טלפון</label>
<input className="w-full rounded-md border border-white/10 bg-neutral-950/80 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#8625dd] focus:ring-2 focus:ring-[#8625dd]/40" id="phone" inputmode="tel" name="phone" placeholder="05x-xxxxxxx" required type="tel" />
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-white/50">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                    פרטיות מלאה. לא מעבירים מידע לצד ג׳.
                  </div>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#8625dd] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#7520c2] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8625dd]" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                  שליחה
                </button>
<div className="flex items-center justify-center">
<a className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition" href="https://wa.me/972552748868?text=%D7%94%D7%99%D7%99%20%D7%A7%D7%95%D7%A0%D7%91%D7%A8%D7%98%D7%99%2C%20%D7%A9%D7%9E%D7%99%20%D7%94%D7%95%D7%90%20...%20%D7%95%D7%94%D7%A0%D7%95%D7%9E%D7%A8%20%D7%A9%D7%9C%D7%99%20...%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%99%D7%97%D7%94%20%D7%A7%D7%A6%D7%A8%D7%94" target="_blank">
<i className="w-4 h-4" data-lucide="message-square"></i>
                    מעדיפים וואטסאפ?
                  </a>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20 lg:py-24" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-10 md:grid-cols-2">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">מי אנחנו</h2>
<p className="mt-4 text-white/70">
              קונברטי הוקמה ב-2022 על ידי אלון ואסנת, מתוך אמונה שעבודה טובה מתחילה ביחסים אנושיים. אנחנו צוות קטן וגמיש — כמו קומנדו — שנותן שירות אישי, נגיש ונעים, ומתאים בדיוק לעסקים קטנים ובינוניים שרוצים תוצאות בלי רעש.
            </p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-neutral-900/50 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#caa6f1]" data-lucide="users"></i>
<p className="text-sm text-white/70">צוות</p>
</div>
<p className="mt-2 text-lg font-semibold tracking-tight">2–5</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/50 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#caa6f1]" data-lucide="calendar"></i>
<p className="text-sm text-white/70">שנת הקמה</p>
</div>
<p className="mt-2 text-lg font-semibold tracking-tight">2022</p>
</div>
</div>
<div className="mt-6 rounded-xl border border-white/10 bg-neutral-900/50 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#caa6f1]" data-lucide="handshake"></i>
<p className="text-sm text-white/70">מוטו</p>
</div>
<p className="mt-2 text-white/80">
                עסק אנושי. עובדים מול אנשים — לא מול סוכנות גדולה.
              </p>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="relative overflow-hidden rounded-2xl border border-white/10">
<img alt="צוות בעבודה" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1400&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent"></div>
<div className="absolute bottom-4 right-4 rounded-md bg-neutral-950/70 px-3 py-1.5 text-xs text-white/80 backdrop-blur">
                אלון ואסנת — מובילים את קונברטי
              </div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="תכנון קמפיין" className="h-40 w-full rounded-xl border border-white/10 object-cover" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=900&auto=format&fit=crop" />
<img alt="ניתוח תוצאות" className="h-40 w-full rounded-xl border border-white/10 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-24 border-t border-white/10" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">שירותים</h2>
<p className="mt-2 text-white/70">מה שצריך בשביל להביא תוצאות אמיתיות — בלי להתפזר.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition" href="#contact">
            יצירת קשר
            <i className="w-4 h-4" data-lucide="arrow-left"></i>
</a>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="group rounded-2xl border border-white/10 bg-neutral-900/60 p-5 transition hover:border-[#8625dd]/50 hover:bg-neutral-900">
<div className="flex items-center gap-2">
<div className="grid h-8 w-8 place-content-center rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30">
<i className="w-4 h-4 text-[#caa6f1]" data-lucide="search"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">פרסום בגוגל</h3>
</div>
<p className="mt-3 text-sm text-white/70">הליבה שלנו. מחקר מילות מפתח, מבנה קמפיין חד, אוטומציות והאופטימיזציה שמביאה לידים.</p>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#a47ee6]" data-lucide="check"></i>חיפוש, רשת המדיה, רימרקטינג</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#a47ee6]" data-lucide="check"></i>מדידה והמרות</li>
</ul>
<a className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#dfc6f5] hover:text-white transition" href="#contact">
              לדבר על גוגל
              <i className="w-4 h-4" data-lucide="arrow-left"></i>
</a>
</div>

<div className="group rounded-2xl border border-white/10 bg-neutral-900/60 p-5 transition hover:border-[#8625dd]/50 hover:bg-neutral-900">
<div className="flex items-center gap-2">
<div className="grid h-8 w-8 place-content-center rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30">
<i className="w-4 h-4 text-[#caa6f1]" data-lucide="megaphone"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">פרסום במטא</h3>
</div>
<p className="mt-3 text-sm text-white/70">קמפיינים חכמים בפייסבוק ואינסטגרם, חיבור מלא לדפי נחיתה ומערכות.</p>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#a47ee6]" data-lucide="check"></i>מודעות מבוססות תובנה</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#a47ee6]" data-lucide="check"></i>קריאייטיב ממיר</li>
</ul>
<a className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#dfc6f5] hover:text-white transition" href="#contact">
              לשיחת התאמה
              <i className="w-4 h-4" data-lucide="arrow-left"></i>
</a>
</div>

<div className="group rounded-2xl border border-white/10 bg-neutral-900/60 p-5 transition hover:border-[#8625dd]/50 hover:bg-neutral-900">
<div className="flex items-center gap-2">
<div className="grid h-8 w-8 place-content-center rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30">
<i className="w-4 h-4 text-[#caa6f1]" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">דפי נחיתה</h3>
</div>
<p className="mt-3 text-sm text-white/70">קופי חד, היררכיה ברורה, טעינה מהירה ומדידה מלאה — הכל למכונה שמייצרת פניות.</p>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#a47ee6]" data-lucide="check"></i>UX ממוקד המרה</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#a47ee6]" data-lucide="check"></i>תשתיות וטפסים</li>
</ul>
<a className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#dfc6f5] hover:text-white transition" href="#contact">
              בונים דף נחיתה
              <i className="w-4 h-4" data-lucide="arrow-left"></i>
</a>
</div>

<div className="group rounded-2xl border border-white/10 bg-neutral-900/60 p-5 transition hover:border-[#8625dd]/50 hover:bg-neutral-900">
<div className="flex items-center gap-2">
<div className="grid h-8 w-8 place-content-center rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30">
<i className="w-4 h-4 text-[#caa6f1]" data-lucide="brush"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">מודעות פרסום</h3>
</div>
<p className="mt-3 text-sm text-white/70">מסרים שמדברים אנושית, ויז׳ואל ברור, A/B ובדיקות שוטפות — עד פגיעה בול.</p>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#a47ee6]" data-lucide="check"></i>וידאו/סטילס</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#a47ee6]" data-lucide="check"></i>מסרים מדידים</li>
</ul>
<a className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#dfc6f5] hover:text-white transition" href="#contact">
              רוצים דוגמאות?
              <i className="w-4 h-4" data-lucide="arrow-left"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-24" id="advantages">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">למה דווקא אנחנו</h2>
<p className="mt-2 text-white/70">הבידול שגורם לזה לעבוד לטווח ארוך.</p>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#caa6f1]" data-lucide="target"></i>
<h3 className="text-lg font-semibold tracking-tight">קומנדו קטן וגמיש</h3>
</div>
<p className="mt-3 text-sm text-white/70">שירות אישי, נגיש ונעים — מתאים בול לעסקים קטנים. מדברים אנושית, עובדים מהר ונקי.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#caa6f1]" data-lucide="award"></i>
<h3 className="text-lg font-semibold tracking-tight">מומחיות בגוגל</h3>
</div>
<p className="mt-3 text-sm text-white/70">עומק טכני + הבנה עסקית. יודעים איפה הכסף שלכם עובד הכי טוב.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#caa6f1]" data-lucide="plus"></i>
<h3 className="text-lg font-semibold tracking-tight">האקסטרה שמסביב</h3>
</div>
<p className="mt-3 text-sm text-white/70">ייעוץ מכירות, חיבור סיסטמים, אוטומציות, פיתוח כלים — הכל בשביל שהמערכת תעבוד.</p>
</div>
</div>

<div className="mt-12 grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-4">
<div className="sticky top-20 rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#caa6f1]" data-lucide="workflow"></i>
<h3 className="text-lg font-semibold tracking-tight">איך זה עובד</h3>
</div>
<p className="mt-3 text-sm text-white/70">תהליך בנוי שמוביל לנקודת איזון — קמפיין יעיל שמביא לידים קבוע.</p>
</div>
</div>
<div className="lg:col-span-8 space-y-4">

<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30 grid place-content-center">
<span className="text-sm font-medium text-[#dfc6f5]">1</span>
</div>
<div>
<h4 className="font-medium tracking-tight">זיהוי הצעת הערך</h4>
<p className="mt-1 text-sm text-white/70">מבינים במה אתם יותר טובים ולמה דווקא אתם.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30 grid place-content-center">
<span className="text-sm font-medium text-[#dfc6f5]">2</span>
</div>
<div>
<h4 className="font-medium tracking-tight">איתור נקודות כשל</h4>
<p className="mt-1 text-sm text-white/70">סותמים חורים במסע הלקוח — מסר, דף, מענה, מדידה.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30 grid place-content-center">
<span className="text-sm font-medium text-[#dfc6f5]">3</span>
</div>
<div>
<h4 className="font-medium tracking-tight">מסרים וקמפיין</h4>
<p className="mt-1 text-sm text-white/70">כותבים מסרים, בונים מודעות, סרטונים ודף נחיתה.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30 grid place-content-center">
<span className="text-sm font-medium text-[#dfc6f5]">4</span>
</div>
<div>
<h4 className="font-medium tracking-tight">הקמה והרצה</h4>
<p className="mt-1 text-sm text-white/70">מרימים קמפיין מסודר עם תשתית מדידה.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30 grid place-content-center">
<span className="text-sm font-medium text-[#dfc6f5]">5</span>
</div>
<div>
<h4 className="font-medium tracking-tight">מדידה ושיפור</h4>
<p className="mt-1 text-sm text-white/70">אופטימיזציה עד לנקודת איזון — קמפיין יציב שמביא לידים קבועים.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30 grid place-content-center">
<span className="text-sm font-medium text-[#dfc6f5]">∞</span>
</div>
<div>
<h4 className="font-medium tracking-tight">עבודה שוטפת ואמון</h4>
<p className="mt-1 text-sm text-white/70">שקיפות, יושרה, גובה העיניים. מדברים תוצאות — לא דוחות.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm text-white/50">עסקים שבחרו לעבוד איתנו</p>
<div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-6">
<div className="grid place-content-center rounded-lg border border-white/10 bg-neutral-900/40 p-4">
<span className="text-white/40 text-sm font-medium tracking-tight">גלילון</span>
</div>
<div className="grid place-content-center rounded-lg border border-white/10 bg-neutral-900/40 p-4">
<span className="text-white/40 text-sm font-medium tracking-tight">פרגולה+</span>
</div>
<div className="grid place-content-center rounded-lg border border-white/10 bg-neutral-900/40 p-4">
<span className="text-white/40 text-sm font-medium tracking-tight">אקווריו</span>
</div>
<div className="grid place-content-center rounded-lg border border-white/10 bg-neutral-900/40 p-4">
<span className="text-white/40 text-sm font-medium tracking-tight">אלפא-פיקס</span>
</div>
<div className="grid place-content-center rounded-lg border border-white/10 bg-neutral-900/40 p-4">
<span className="text-white/40 text-sm font-medium tracking-tight">חשמלית</span>
</div>
<div className="grid place-content-center rounded-lg border border-white/10 bg-neutral-900/40 p-4">
<span className="text-white/40 text-sm font-medium tracking-tight">סולרי-טק</span>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-24" id="portfolio">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">תיק עבודות</h2>
<p className="mt-2 text-white/70">דוגמאות לפרויקטים שיצאו לדרך — והביאו פניות.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition" href="#contact">
            פרויקט הבא שלכם
            <i className="w-4 h-4" data-lucide="arrow-left"></i>
</a>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="פרויקט קמפיין גוגל" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<div className="absolute bottom-3 right-3 rounded-md bg-neutral-950/60 px-2 py-1 text-[11px] text-white/70 backdrop-blur">Google Ads</div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">חשמלאי אזורי — לידים קבועים תוך 60 יום</h3>
<p className="mt-2 text-sm text-white/70">מבנה קמפיין ממוקד אזור + דף נחיתה קצר. עלייה של 48% בהמרות.</p>
<div className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#dfc6f5]">לפרטים<i className="w-4 h-4" data-lucide="arrow-left"></i></div>
</div>
</article>
<article className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="פרויקט מטא" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<div className="absolute bottom-3 right-3 rounded-md bg-neutral-950/60 px-2 py-1 text-[11px] text-white/70 backdrop-blur">Meta Ads</div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">מתקין פרגולות — סגירות חכמות בוואטסאפ</h3>
<p className="mt-2 text-sm text-white/70">מודעות וידאו קצרות + חיבור וואטסאפ. ירידה של 27% בעלות לליד.</p>
<div className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#dfc6f5]">לפרטים<i className="w-4 h-4" data-lucide="arrow-left"></i></div>
</div>
</article>
<article className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="דף נחיתה" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<div className="absolute bottom-3 right-3 rounded-md bg-neutral-950/60 px-2 py-1 text-[11px] text-white/70 backdrop-blur">Landing Page</div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">יועץ משכנתאות — דף נחיתה חד</h3>
<p className="mt-2 text-sm text-white/70">קופי מדויק + מסר חד־שורה. זמן שהייה כפול והמרות עולות.</p>
<div className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#dfc6f5]">לפרטים<i className="w-4 h-4" data-lucide="arrow-left"></i></div>
</div>
</article>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-24 border-t border-white/10" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">הלקוחות מספרים</h2>
<p className="mt-2 text-white/70">המלצות מצולמות וכתובות — תכל׳ס אנשים.</p>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-3">

<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="לקוח" className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-950" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium tracking-tight">טל, אינסטלטור</p>
<p className="text-xs text-white/60">לקוח פעיל</p>
</div>
<div className="ms-auto flex items-center gap-0.5 text-[#dfc6f5]">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
</div>
<p className="mt-3 text-sm text-white/80">קיבלתי לידים אמיתיים ולא דיבורים. אלון ואסנת זמינים, מסבירים בגובה העיניים ותמיד מוסיפים עוד קצת מעבר.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition" href="https://www.youtube.com/@DigitalMarketingFamily" target="_blank">
<i className="w-4 h-4" data-lucide="play-circle"></i>
              לראות המלצה מצולמת
            </a>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="לקוח" className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-950" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium tracking-tight">דנה, רו״ח</p>
<p className="text-xs text-white/60">לקוחה פעילה</p>
</div>
<div className="ms-auto flex items-center gap-0.5 text-[#dfc6f5]">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star-half"></i>
</div>
</div>
<p className="mt-3 text-sm text-white/80">סוף סוף מישהו שמדבר תוצאות ולא מציף אותי בדוחות. עזרו לי לבנות תהליך מכירות שעובד.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="לקוח" className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-950" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium tracking-tight">יוסי, מתקין פרגולות</p>
<p className="text-xs text-white/60">לקוח פעיל</p>
</div>
<div className="ms-auto flex items-center gap-0.5 text-[#dfc6f5]">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
</div>
<p className="mt-3 text-sm text-white/80">עברנו לגוגל דרכם — תוך חודשיים הלו״ז התמלא. ממליץ בחום.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-24" id="blog">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">בלוג</h2>
<p className="mt-2 text-white/70">ידע פרקטי לעסקים — קצר, ענייני.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition" href="#">לכל המאמרים<i className="w-4 h-4" data-lucide="arrow-left"></i></a>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<article className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="מאמר" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">איך לא לבזבז תקציב בגוגל: 5 טעויות נפוצות</h3>
<p className="mt-2 text-sm text-white/70">בדיקה מהירה שתעשה לכם סדר לפני שמעלים קמפיין.</p>
<div className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#dfc6f5]">לקריאה<i className="w-4 h-4" data-lucide="arrow-left"></i></div>
</div>
</article>
<article className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="מאמר" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">דף נחיתה שממיר: מבנה, קופי ומדידה</h3>
<p className="mt-2 text-sm text-white/70">תבנית עבודה פשוטה שאפשר ליישם היום.</p>
<div className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#dfc6f5]">לקריאה<i className="w-4 h-4" data-lucide="arrow-left"></i></div>
</div>
</article>
<article className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="מאמר" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">חיבורי וואטסאפ ואוטומציות ללידים</h3>
<p className="mt-2 text-sm text-white/70">וובהוקים פשוטים שחוסכים זמן ושומרים על סדר.</p>
<div className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#dfc6f5]">לקריאה<i className="w-4 h-4" data-lucide="arrow-left"></i></div>
</div>
</article>
</div>
</div>
</section>

<section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 border-t border-white/10" id="contact">
<div className="absolute inset-0 -z-10">
<div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-[#8625dd]/25 blur-[120px]"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 md:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#caa6f1]" data-lucide="messages-square"></i>
<h3 className="text-xl font-semibold tracking-tight">בואו נתחיל</h3>
</div>
<p className="mt-2 text-white/70">השאירו שם וטלפון — נחזור לשיחה קצרה, נבין את היעדים ונמליץ על דרך פעולה.</p>
<form className="mt-5 space-y-4" data-webhook="https://hooks.zapier.com/hooks/catch/0000000/0000000/" id="contactForm">
<div>
<label className="mb-1 block text-sm text-white/80" htmlFor="cname">שם פרטי</label>
<input className="w-full rounded-md border border-white/10 bg-neutral-950/80 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#8625dd] focus:ring-2 focus:ring-[#8625dd]/40" id="cname" name="name" placeholder="לדוגמה: אסף" required />
</div>
<div>
<label className="mb-1 block text-sm text-white/80" htmlFor="cphone">טלפון</label>
<input className="w-full rounded-md border border-white/10 bg-neutral-950/80 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-[#8625dd] focus:ring-2 focus:ring-[#8625dd]/40" id="cphone" inputmode="tel" name="phone" placeholder="05x-xxxxxxx" required type="tel" />
</div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#8625dd] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#7520c2] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8625dd]" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                שליחה
              </button>
<div className="flex items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition" href="https://wa.me/972552748868?text=%D7%94%D7%99%D7%99%2C%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%2F%D7%AA%20%D7%91%D7%A9%D7%99%D7%97%D7%AA%20%D7%94%D7%9B%D7%A8%D7%94" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle"></i>
                  וואטסאפ
                </a>
<a className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition" href="tel:+972552748868">
<i className="w-4 h-4" data-lucide="phone"></i>
                  שיחה טלפונית
                </a>
<a className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition" href="mailto:Hey@converty.co.il">
<i className="w-4 h-4" data-lucide="mail"></i>
                  מייל
                </a>
</div>
</form>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#caa6f1]" data-lucide="map-pin"></i>
<h3 className="text-xl font-semibold tracking-tight">פרטים נוספים</h3>
</div>
<div className="mt-4 grid gap-4 text-sm">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-white/60" data-lucide="building-2"></i>
<div>
<p className="text-white/60">כתובת</p>
<p className="font-medium">ביאליק 16, בת-ים</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-white/60" data-lucide="clock"></i>
<div>
<p className="text-white/60">שעות פעילות</p>
<p className="font-medium">א׳–ה׳ 07:00–17:00</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-white/60" data-lucide="link"></i>
<div className="flex flex-wrap gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-neutral-950/60 px-2.5 py-1.5 text-white/80 hover:text-white hover:bg-neutral-900 transition" href="https://www.instagram.com/converty.co.il/" target="_blank">
<i className="w-4 h-4" data-lucide="instagram"></i> אינסטגרם
                  </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-neutral-950/60 px-2.5 py-1.5 text-white/80 hover:text-white hover:bg-neutral-900 transition" href="https://www.facebook.com/Converty.co.il/" target="_blank">
<i className="w-4 h-4" data-lucide="facebook"></i> פייסבוק
                  </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-neutral-950/60 px-2.5 py-1.5 text-white/80 hover:text-white hover:bg-neutral-900 transition" href="https://www.youtube.com/@DigitalMarketingFamily" target="_blank">
<i className="w-4 h-4" data-lucide="youtube"></i> יוטיוב
                  </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-neutral-950/60 px-2.5 py-1.5 text-white/80 hover:text-white hover:bg-neutral-900 transition" href="https://www.linkedin.com/company/converty-digital-marketing/" target="_blank">
<i className="w-4 h-4" data-lucide="linkedin"></i> לינקדאין
                  </a>
</div>
</div>
<div className="mt-2 rounded-lg border border-white/10 bg-neutral-950/60 p-4">
<p className="text-sm text-white/70">מתאימים במיוחד ל:</p>
<div className="mt-2 flex flex-wrap gap-2 text-xs text-white/80">
<span className="rounded-md border border-white/10 bg-neutral-900 px-2 py-1">אינסטלטורים</span>
<span className="rounded-md border border-white/10 bg-neutral-900 px-2 py-1">חשמלאים</span>
<span className="rounded-md border border-white/10 bg-neutral-900 px-2 py-1">גננים</span>
<span className="rounded-md border border-white/10 bg-neutral-900 px-2 py-1">מתקיני פרגולות</span>
<span className="rounded-md border border-white/10 bg-neutral-900 px-2 py-1">רו״ח</span>
<span className="rounded-md border border-white/10 bg-neutral-900 px-2 py-1">יועצי משכנתאות</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-neutral-950/90">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid gap-8 md:grid-cols-4">
<div>
<div className="inline-flex items-center gap-2">
<div className="grid h-9 w-9 place-content-center rounded-md bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30">
<span className="text-[13px] font-semibold tracking-tight text-[#dfc6f5]" style={{fontFamily: `Inter, Heebo, system-ui, -apple-system, Segoe UI, Roboto`}}>CV</span>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight">קונברטי</span>
<span className="text-[11px] text-white/60 -mt-0.5">סוכנות לפרסום ושיווק דיגיטלי</span>
</div>
</div>
<p className="mt-4 text-sm text-white/70">אנחנו שמחים במודל ובקצב. שואפים כל הזמן לשפר את איכות הלקוחות — ביחד.</p>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight">ניווט</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition" href="#about">אודות</a></li>
<li><a className="hover:text-white transition" href="#services">שירותים</a></li>
<li><a className="hover:text-white transition" href="#advantages">יתרונות</a></li>
<li><a className="hover:text-white transition" href="#portfolio">תיק עבודות</a></li>
<li><a className="hover:text-white transition" href="#testimonials">המלצות</a></li>
<li><a className="hover:text-white transition" href="#blog">בלוג</a></li>
<li><a className="hover:text-white transition" href="#contact">צור קשר</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight">שירותים</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li>פרסום בגוגל</li>
<li>פרסום במטא</li>
<li>דפי נחיתה</li>
<li>מודעות פרסום</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight">יצירת קשר</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i><a className="hover:text-white transition" href="tel:+972552748868">055-274-8868</a></li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i><a className="hover:text-white transition" href="mailto:Hey@converty.co.il">Hey@converty.co.il</a></li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4" data-lucide="map"></i>ביאליק 16, בת-ים</li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
<p>© <span id="year"></span> Converty. כל הזכויות שמורות.</p>
<div className="flex items-center gap-3">
<a className="hover:text-white transition" href="https://www.converty.co.il/" target="_blank">converty.co.il</a>
<span className="h-3 w-px bg-white/10"></span>
<a className="hover:text-white transition" href="#home">לראש הדף</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center bg-neutral-950/80 p-4 backdrop-blur" id="successModal">
<div className="w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-900 p-6 text-center">
<div className="mx-auto grid h-12 w-12 place-content-center rounded-full bg-[#8625dd]/20 ring-1 ring-inset ring-[#8625dd]/30">
<i className="w-6 h-6 text-[#caa6f1]" data-lucide="check-circle-2"></i>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">תודה! הפרטים אצלנו</h3>
<p className="mt-2 text-sm text-white/70">נחזור אליכם בהקדם. אפשר תמיד לזרז בוואטסאפ 🙂</p>
<div className="mt-5 flex items-center justify-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white hover:bg-neutral-800 transition" href="https://wa.me/972552748868" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle"></i>
            וואטסאפ
          </a>
<button className="inline-flex items-center gap-2 rounded-md bg-[#8625dd] px-3 py-2 text-sm font-medium text-white hover:bg-[#7520c2] transition" id="closeModal">
            סגירה
          </button>
</div>
</div>
</div>




    </>
  );
}
