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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const app = {
            init() {
                this.setupIntersectionObserver();
                this.updateLiveCounterDisplay();
            },

            navigate(view) {
                document.querySelectorAll('body > div[id^="view-"]').forEach(el => el.classList.add('view-hidden'));
                document.getElementById(`view-${view}`).classList.remove('view-hidden');
                window.scrollTo(0, 0);
                if(view === 'admin-dash') this.loadAdminData();
            },

            calculateAge(dobString) {
                const dob = new Date(dobString);
                const today = new Date();
                let age = today.getFullYear() - dob.getFullYear();
                const m = today.getMonth() - dob.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                    age--;
                }
                return age;
            },

            submitUserForm(e) {
                e.preventDefault();
                const btn = document.getElementById('u-submit-btn');
                const originalBtnHtml = btn.innerHTML;
                
                const dob = document.getElementById('u-dob').value;
                const age = this.calculateAge(dob);
                const errEl = document.getElementById('dob-error');

                if(age < 18 || age > 35) {
                    errEl.classList.remove('hidden');
                    return;
                }
                errEl.classList.add('hidden');

                const email = document.getElementById('u-email').value;

                const user = {
                    name: document.getElementById('u-name').value,
                    type: document.querySelector('input[name="connection"]:checked').value,
                    age: age,
                    email: email,
                    date: new Date().toLocaleDateString('he-IL') + ' ' + new Date().toLocaleTimeString('he-IL')
                };

                btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl"></iconify-icon> שומר ושולח מייל...';
                btn.disabled = true;

                setTimeout(() => {
                    const users = JSON.parse(localStorage.getItem('matchil_users') || '[]');
                    users.push(user);
                    localStorage.setItem('matchil_users', JSON.stringify(users));

                    document.getElementById('reg-form-content').classList.add('hidden');
                    document.getElementById('success-email-display').innerText = email;
                    document.getElementById('reg-success-content').classList.remove('hidden');
                    
                    this.updateLiveCounterDisplay();
                    
                    btn.innerHTML = originalBtnHtml;
                    btn.disabled = false;
                }, 1500);
            },

            resetForm() {
                document.getElementById('waitlist-form').reset();
                document.getElementById('reg-success-content').classList.add('hidden');
                document.getElementById('reg-form-content').classList.remove('hidden');
            },

            submitInvestorForm(e) {
                e.preventDefault();
                const btn = document.getElementById('i-submit-btn');
                const originalHtml = btn.innerHTML;
                
                const inv = {
                    name: document.getElementById('i-name').value,
                    email: document.getElementById('i-email').value,
                    amount: document.getElementById('i-amount').value || 'לא צוין',
                    date: new Date().toLocaleDateString('he-IL')
                };
                
                btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl"></iconify-icon> שולח מייל אישור...';
                btn.disabled = true;

                setTimeout(() => {
                    const invs = JSON.parse(localStorage.getItem('matchil_invs') || '[]');
                    invs.push(inv);
                    localStorage.setItem('matchil_invs', JSON.stringify(invs));

                    document.getElementById('inv-form-content').classList.add('hidden');
                    document.getElementById('inv-success-content').classList.remove('hidden');

                    setTimeout(() => {
                        document.getElementById('investor-form').reset();
                        document.getElementById('inv-success-content').classList.add('hidden');
                        document.getElementById('inv-form-content').classList.remove('hidden');
                        btn.innerHTML = originalHtml;
                        btn.disabled = false;
                    }, 8000); 
                }, 1200);
            },

            updateLiveCounterDisplay() {
                const users = JSON.parse(localStorage.getItem('matchil_users') || '[]');
                const total = users.length; 
                const el = document.getElementById('live-counter');
                if(el) {
                    el.innerText = `${total.toLocaleString()} נרשמו למערכת (Live)`;
                }
            },

            // UPDATED SMART AI DEMO
            generateAIDemo() {
                const inputVal = document.getElementById('ai-demo-input').value.trim();
                if(!inputVal) return;

                const btn = document.getElementById('ai-demo-btn');
                const out = document.getElementById('ai-demo-output');
                
                btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon> מנתח הודעה ומחפש תגובה...';
                btn.disabled = true;
                out.innerHTML = '';

                setTimeout(() => {
                    const lowerInput = inputVal.toLowerCase();
                    let responses = [];

                    // Context matching logic based on Hebrew keywords
                    if (lowerInput.match(/עבוד|ארוך|עייף|מתיש|קשה|גמור|בוקר|קושי/)) {
                        responses = [
                            "נשמע מתיש... מה עשה אותו כזה ארוך? ספרי לי הכל.",
                            "וואו. לפחות את/ה אחרי זה. יש משהו שיכול לשפר את המצב רוח עכשיו?",
                            "הרווחת ביושר מנוחה. רוצה לקפוץ לאיזה קפה להירגע קצת?"
                        ];
                    } else if (lowerInput.match(/היי|שלום|מה קורה|מה נשמע|אהלן|ערב טוב|בוקר טוב/)) {
                        responses = [
                            "היי! איזה כיף שכתבת. איך עובר השבוע שלך עד עכשיו?",
                            "הכל מעולה! בדיוק חשבתי מתי נדבר שוב 😊 מה איתך?",
                            "אצלי סבבה לגמרי. יש תוכניות מיוחדות להיום?"
                        ];
                    } else if (lowerInput.match(/אוכל|רעב|מסעדה|לאכול|המבורגר|פיצה|סושי|קפה|בירה/)) {
                        responses = [
                            "בול הזמן! בא לך לחתוך לאיזו מסעדה טובה?",
                            "אני תמיד רעב/ה! מה הכיוון שלך - סושי, המבורגר או משהו קליל יותר?",
                            "רעיון מעולה. יש מקום חדש שרציתי לנסות, זורם/ת?"
                        ];
                    } else if (lowerInput.match(/סרט|נטפליקס|סדרה|קולנוע|טלוויזיה/)) {
                        responses = [
                            "אין על בינג' טוב. יש המלצה לסדרה שאסור לי לפספס?",
                            "סרט נשמע אש. פופקורן מתוק או מלוח?",
                            "אני בדיוק מחפש/ת מה לראות! מה הסגנון המועדף עליך?"
                        ];
                    } else if (lowerInput.match(/ים|שמש|חוף|בריכה|טיול/)) {
                        responses = [
                            "ים זה החיים. מתי הולכים?",
                            "איזה כיף, שקיעה בים זה הדייט המושלם. הולכים על זה?",
                            "וואו עשית לי חשק. מביא/ה קרם הגנה או שנסתדר?"
                        ];
                    } else if (lowerInput.match(/צבא|בסיס|מילואים|שבת|סוגר|שמירות/)) {
                        responses = [
                            "וואי איזה באסה שאת/ה סוגר/ת. לפחות יש איתך אנשים טובים?",
                            "תחזיק/י מעמד! כשתחזור/י נצא לחגוג, מבטיח/ה.",
                            "שמור/י על עצמך שם. איזה פינוק בא לך שאביא לך כשניפגש?"
                        ];
                    } else if (lowerInput.match(/משעמם|שיעמום/)) {
                        responses = [
                            "משעמם? מעולה, זה הזמן לשאלות היכרות! אם היית יכול/ה לטוס עכשיו לכל מקום בעולם, לאן היית טס/ה?",
                            "אז אולי זה הזמן הנכון להציע שנעבור לדרינק שישבור את השעמום?",
                            "אוי ואבוי! רוצה להעביר את זה לשיחת טלפון שיעורר קצת עניינים?"
                        ];
                    } else {
                        // Fallback generic responses
                        responses = [
                            "מעניין... ספר/י לי עוד על זה.",
                            "חחח לגמרי. אגב, אנחנו מדברים פה אבל אולי נעבור לאיזה קפה?",
                            "וואלה? סקרנת אותי עכשיו. מה הלאה?",
                            "תשובה טובה! תגיד/י, מה הדבר שהכי בא לך לעשות עכשיו?",
                            "אני חייב/ת להודות שכיף לדבר איתך. איך ממשיכים מפה?"
                        ];
                    }

                    const res = responses[Math.floor(Math.random() * responses.length)];
                    
                    out.innerHTML = `
                        <div class="p-3 mt-4 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-xl text-fuchsia-400 text-sm animate-fade-in relative text-right">
                            <iconify-icon icon="solar:magic-stick-3-linear" class="absolute -top-3 right-3 bg-zinc-900 px-1 text-xs"></iconify-icon>
                            " ${res} "
                        </div>
                    `;
                    btn.innerHTML = '<iconify-icon icon="solar:sparkles-linear"></iconify-icon> הצע לי תגובה אחרת';
                    btn.disabled = false;
                }, 1000);
            },

            _u: atob('Sk9OQVRIQU4='), 
            _p: atob('MjEzMjAxMjM5VA=='),

            adminLogin(e) {
                e.preventDefault();
                const u = document.getElementById('a-user').value;
                const p = document.getElementById('a-pass').value;
                if(u === this._u && p === this._p) {
                    document.getElementById('a-error').classList.add('hidden');
                    sessionStorage.setItem('admin_auth', 'true');
                    this.navigate('admin-dash');
                    document.getElementById('a-user').value = '';
                    document.getElementById('a-pass').value = '';
                } else {
                    document.getElementById('a-error').classList.remove('hidden');
                }
            },

            logout() {
                sessionStorage.removeItem('admin_auth');
                this.navigate('home');
            },

            loadAdminData() {
                if(sessionStorage.getItem('admin_auth') !== 'true') {
                    this.navigate('admin-login');
                    return;
                }

                const users = JSON.parse(localStorage.getItem('matchil_users') || '[]');
                const invs = JSON.parse(localStorage.getItem('matchil_invs') || '[]');

                document.getElementById('dash-user-count').innerText = users.length;
                document.getElementById('dash-inv-count').innerText = invs.length;

                const uList = document.getElementById('dash-users-list');
                uList.innerHTML = users.length ? '' : '<div class="text-xs text-zinc-500 p-4 bg-black/20 rounded border border-white/5 text-center">אין נרשמים במערכת כרגע.</div>';
                
                const typeMap = { short: 'קצר / קליל', long: 'טווח ארוך', marriage: 'חתונה', casual: 'דייט רגיל' };
                
                [...users].reverse().forEach(u => {
                    uList.innerHTML += `
                        <div class="bg-zinc-950/80 p-3 rounded-xl border border-white/5 text-sm flex flex-col gap-2">
                            <div class="flex justify-between items-start">
                                <div>
                                    <div class="font-semibold text-zinc-200">${u.name} <span class="text-zinc-500 font-normal">(גיל: ${u.age})</span></div>
                                    <div class="text-xs text-zinc-400 font-mono mt-1" dir="ltr">${u.email}</div>
                                </div>
                                <div class="text-[10px] bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 px-2 py-1 rounded">${typeMap[u.type] || u.type}</div>
                            </div>
                            <div class="text-[10px] text-zinc-600">תאריך הרשמה: ${u.date || 'לא ידוע'}</div>
                        </div>`;
                });

                const iList = document.getElementById('dash-inv-list');
                iList.innerHTML = invs.length ? '' : '<div class="text-xs text-zinc-500 p-4 bg-black/20 rounded border border-white/5 text-center">אין פניות ממשקיעים עדיין.</div>';
                
                [...invs].reverse().forEach(i => {
                    iList.innerHTML += `
                        <div class="bg-zinc-950/80 p-3 rounded-xl border border-emerald-500/20 text-sm relative overflow-hidden">
                            <div class="absolute right-0 top-0 bottom-0 w-1 bg-emerald-500/50"></div>
                            <div class="pl-2">
                                <div class="font-semibold text-emerald-400">${i.name}</div>
                                <div class="text-xs text-zinc-400 font-mono mt-1 mb-1" dir="ltr">${i.email}</div>
                                <div class="text-[11px] text-zinc-300 bg-white/5 inline-block px-2 py-0.5 rounded">סכום פוטנציאלי: ${i.amount}</div>
                            </div>
                            <div class="text-[10px] text-zinc-600 mt-2">תאריך פנייה: ${i.date || 'לא ידוע'}</div>
                        </div>`;
                });
            },

            showModal(type) {
                const m = document.getElementById('modal-legal');
                const t = document.getElementById('modal-legal-title');
                t.innerText = type === 'terms' ? 'תנאי שימוש והבהרה משפטית' : 'מדיניות פרטיות ואבטחת מידע';
                m.classList.remove('hidden');
                m.classList.add('flex');
            },
            hideModal() {
                const m = document.getElementById('modal-legal');
                m.classList.add('hidden');
                m.classList.remove('flex');
            },
            share(platform) {
                const text = encodeURIComponent("היי! מצאתי אפליקציית דייטינג חדשה בסטייל פרימיום שמיועדת בדיוק לנו (עם שילוב AI לפלרטוט!), קוראים לה MATCH IL. בואו נצטרף לרשימת ההמתנה כדי שהיא תצא לפועל!");
                const url = window.location.href;
                if(platform === 'whatsapp') {
                    window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
                } else {
                    navigator.clipboard.writeText(`${decodeURIComponent(text)} \n${url}`);
                    alert("הקישור הועתק בהצלחה!");
                }
            },

            setupIntersectionObserver() {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                        }
                    });
                }, { threshold: 0.1 });
                
                document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
            }
        };

        document.addEventListener('DOMContentLoaded', () => app.init());
    
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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter text-gradient cursor-pointer uppercase" onclick="app.navigate('home')">
                MATCHIL
            </div>
<div className="flex items-center gap-6 text-sm text-zinc-400 font-medium">
<button className="hover:text-zinc-100 transition-colors" onclick="app.navigate('investors')">למשקיעים</button>
<button className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-full transition-all text-xs sm:text-sm" onclick="document.getElementById('form-section').scrollIntoView()">הצטרפות מוקדמת</button>
</div>
</div>
</nav>

<div className="min-h-screen pt-24 pb-12 flex flex-col items-center" id="view-home">

<header className="w-full max-w-4xl mx-auto px-6 text-center mt-12 mb-20 fade-up relative">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-medium mb-8 glass-panel">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
</span>
<span className="" id="live-counter">0 נרשמו למערכת (Live)</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-100 mb-6 leading-tight">
                מצא את ההתאמה שלך בקלות <br/>
<span className="text-gradient">האפליקציה שמבינה אותך.</span>
</h1>
<p className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto font-light mb-10 leading-relaxed">
                מערכת AI חכמה שמתאימה אותך לפי ערכים ורצונות אמיתיים. חוויית פרימיום מדויקת שמסייעת בניהול השיחה – לכל סוג של קשר בקהילה שלנו.
            </p>
<div className="flex flex-col items-center justify-center gap-6">
<button className="sm:w-auto hover:bg-white transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] font-medium text-zinc-950 bg-zinc-100 w-full rounded-xl pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="document.getElementById('form-section').scrollIntoView()">הצטרף לרשימת ההמתנה – קבל פרימיום חינם לחודש!</button>
<p className="text-xs text-zinc-500">ההרשמה מגיל 18 עד 35 בלבד</p>
<div className="flex flex-wrap justify-center gap-4 mt-4 opacity-50 relative group cursor-not-allowed">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-800 text-xs text-zinc-300 px-2 py-0.5 rounded border border-white/10 z-10">בקרוב</div>
<div className="flex items-center gap-3 bg-zinc-900 border border-white/10 px-4 py-2 rounded-xl">
<iconify-icon className="text-2xl text-white" icon="logos:apple"></iconify-icon>
<div className="text-right">
<div className="text-[10px] text-zinc-400 leading-none">Download on the</div>
<div className="text-sm font-medium leading-tight">App Store</div>
</div>
</div>
<div className="flex items-center gap-3 bg-zinc-900 border border-white/10 px-4 py-2 rounded-xl">
<iconify-icon className="text-2xl" icon="logos:google-play-icon"></iconify-icon>
<div className="text-right">
<div className="text-[10px] text-zinc-400 leading-none">GET IT ON</div>
<div className="text-sm font-medium leading-tight">Google Play</div>
</div>
</div>
</div>
</div>
</header>

<section className="w-full max-w-5xl mx-auto px-6 py-16 border-t border-white/5 fade-up">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-4">למה אנחנו שונים מכל השאר?</h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        אפליקציות הדייטינג הגלובליות לא בנויות לניואנסים של העולם הישראלי. הן לא מבינות מה זה לסגור שבת בבסיס, מה זה שירות לאומי, או את הדקויות העדינות של העולם החרדי, הדתי והמסורתי.
                    </p>
<p className="text-zinc-400 text-sm leading-relaxed">
                        ב-MATCH IL פיצחנו את הקוד. אנחנו לא סתם עוד אלגוריתם – המערכת שלנו נבנתה מאפס כדי להבין את המורכבות של החברה שלנו. אין כאן "תגיות" שטחיות, יש כאן ניתוח חכם שמחבר בין אנשים שמחפשים את אותם ערכים ודרך חיים.
                    </p>
</div>
<div className="relative h-64 rounded-2xl glass-panel overflow-hidden flex items-center justify-center glow-box floating">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<iconify-icon className="text-7xl text-fuchsia-500 z-10" icon="solar:shield-star-linear"></iconify-icon>
</div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-16 fade-up">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold tracking-tight mb-2">ההבדל ברור</h2>
<p className="text-sm text-zinc-400">איך אנחנו עומדים מול האפליקציות שכולם מכירים.</p>
</div>
<div className="w-full overflow-x-auto pb-4">
<table className="w-full text-sm text-right min-w-[600px] border-collapse">
<thead>
<tr className="border-b border-white/10">
<th className="py-4 px-4 font-medium text-zinc-400 w-1/3">תכונה</th>
<th className="py-4 px-4 font-medium text-zinc-500 w-1/3">אפליקציות גלובליות</th>
<th className="py-4 px-4 font-semibold text-fuchsia-400 w-1/3 bg-fuchsia-500/5 rounded-t-xl">MATCH IL</th>
</tr>
</thead>
<tbody className="text-zinc-300">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-4">הבנת הקהילה (צבא, דת, שירות)</td>
<td className="py-4 px-4 text-rose-400"><iconify-icon className="mr-1 align-middle text-base" icon="solar:close-circle-linear"></iconify-icon> לא קיים</td>
<td className="py-4 px-4 text-emerald-400 bg-fuchsia-500/5 font-medium"><iconify-icon className="mr-1 align-middle text-base" icon="solar:check-circle-linear"></iconify-icon> מובנה באלגוריתם</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-4">איכות ההתאמות</td>
<td className="py-4 px-4 text-zinc-500">מבוסס מראה ומיקום בלבד</td>
<td className="py-4 px-4 bg-fuchsia-500/5 font-medium">ערכים, אישיות ורצונות משותפים</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-4">סיוע AI בשיחה</td>
<td className="py-4 px-4 text-rose-400"><iconify-icon className="mr-1 align-middle text-base" icon="solar:close-circle-linear"></iconify-icon> אין</td>
<td className="py-4 px-4 text-emerald-400 bg-fuchsia-500/5 font-medium"><iconify-icon className="mr-1 align-middle text-base" icon="solar:check-circle-linear"></iconify-icon> עוזר פלרטוט אישי</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 px-4">עיצוב ופרטיות</td>
<td className="py-4 px-4 text-zinc-500">עמוס בפרסומות</td>
<td className="py-4 px-4 bg-fuchsia-500/5 font-medium rounded-b-xl">נקי, יוקרתי ומאובטח</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-16 border-y border-white/5 my-12 fade-up relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-fuchsia-500/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-gradient">ה-AI עובד בשבילך - נסה עכשיו!</h2>
<p className="text-sm text-zinc-400 max-w-xl mx-auto">נתקעתם בשיחה? ה-AI שלנו מנתח את ההקשר ומציע תשובות חכמות שישברו את הקרח. <br/>הכנס כל הודעה שתבחר ותראה איך המערכת מגיבה.</p>
</div>
<div className="max-w-md mx-auto glass-panel p-6 rounded-3xl shadow-2xl relative glow-box">
<div className="flex items-center gap-2 mb-4 text-xs font-medium text-fuchsia-400">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon> הדגמת AI מבוססת הקשר
                </div>
<div className="space-y-4">
<div>
<label className="block text-xs text-zinc-500 mb-2">הצד השני כתב/ה:</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-fuchsia-500/50 transition-colors" id="ai-demo-input" placeholder="נסה לכתוב על: צבא, אוכל, עייפות, שעמום, ים..." type="text" value="איזה יום ארוך היה לי בעבודה..."/>
</div>
<button className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2" id="ai-demo-btn" onclick="app.generateAIDemo()">
<iconify-icon icon="solar:sparkles-linear"></iconify-icon> הצע לי תגובה חכמה
                    </button>
<div className="min-h-[60px]" id="ai-demo-output">

</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5">
<p className="text-[10px] text-zinc-600 leading-tight">
                        * הבהרה משפטית: כלי ה-AI מסופק להדגמה ולעזר בלבד. ההצעות נוצרות אוטומטית ואין לראות בהן ייעוץ, הדרכה, או הכוונה רגשית/פסיכולוגית. אין החברה אחראית על תוכן השיחות או על תוצאות השימוש במשפטים המופקים. השימוש בכלי ובאפליקציה הינו באחריות המשתמש/ת בלבד.
                    </p>
</div>
</div>
</section>

<section className="w-full max-w-xl mx-auto px-6 py-20 fade-up" id="form-section">
<div className="glass-panel p-8 rounded-3xl shadow-2xl relative glow-box">
<div id="reg-form-content">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight mb-2">הצטרפו לרשימת ההמתנה</h2>
<p className="text-xs text-zinc-400">קבלו פרימיום חינם ברגע שנעלה לאוויר. גילאי 18-35 בלבד.</p>
</div>
<form className="space-y-6" id="waitlist-form" onsubmit="app.submitUserForm(event)">
<div>
<label className="block text-xs text-zinc-400 mb-3">איזה סוג קשר אתה/את מחפש/ת?</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="connection" required="" type="radio" value="short"/>
<div className="text-center p-3 rounded-xl border border-white/5 bg-zinc-950/50 peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-500/10 transition-all hover:bg-white/5">
<iconify-icon className="text-xl mb-1" icon="solar:bolt-linear"></iconify-icon>
<div className="text-xs font-medium">קצר / קליל</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="connection" type="radio" value="long"/>
<div className="text-center p-3 rounded-xl border border-white/5 bg-zinc-950/50 peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-500/10 transition-all hover:bg-white/5">
<iconify-icon className="text-xl mb-1" icon="solar:hearts-linear"></iconify-icon>
<div className="text-xs font-medium">טווח ארוך</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="connection" type="radio" value="marriage"/>
<div className="text-center p-3 rounded-xl border border-white/5 bg-zinc-950/50 peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-500/10 transition-all hover:bg-white/5">
<iconify-icon className="text-xl mb-1" icon="solar:rings-linear"></iconify-icon>
<div className="text-xs font-medium">חתונה</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="connection" type="radio" value="casual"/>
<div className="text-center p-3 rounded-xl border border-white/5 bg-zinc-950/50 peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-500/10 transition-all hover:bg-white/5">
<iconify-icon className="text-xl mb-1" icon="solar:cup-linear"></iconify-icon>
<div className="text-xs font-medium">דייט רגיל</div>
</div>
</label>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">שם מלא</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors" id="u-name" placeholder="הכנס שם" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">תאריך לידה (מעל 18, עד 35)</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-white/30 transition-colors" id="u-dob" required="" type="date"/>
<p className="text-rose-500 text-xs mt-1 hidden" id="dob-error">הגיל חייב להיות בין 18 ל-35.</p>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1 ml-1">אימייל לעדכונים (חובה)</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors text-left" dir="ltr" id="u-email" placeholder="email@domain.com" required="" type="email"/>
</div>
</div>
<button className="w-full py-3.5 bg-zinc-100 text-zinc-950 rounded-xl font-medium hover:bg-white transition-colors relative overflow-hidden flex justify-center items-center gap-2" id="u-submit-btn" type="submit">
<span>הצטרף עכשיו</span> <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<p className="text-[10px] text-zinc-500 text-center leading-tight">
                            בלחיצה על הצטרף, אני מסכים ל<button className="underline hover:text-zinc-300" onclick="app.showModal('terms')" type="button">תנאי השימוש ומדיניות הפרטיות</button> הכוללים ויתור על תביעות בקשר לשימוש ב-AI. הנתונים נשמרים לטובת בדיקת היתכנות הפרויקט.
                        </p>
</form>
</div>
<div className="hidden text-center py-8" id="reg-success-content">
<div className="h-16 w-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in">
<iconify-icon className="text-3xl" icon="solar:letter-opened-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-2">נרשמת בהצלחה!</h3>
<p className="text-sm text-zinc-400 mb-6">
                        מייל מעוצב נשלח ברגעים אלו לכתובת <span className="text-zinc-200 font-medium" id="success-email-display"></span>. אנו נעדכן אותך במייל זה ברגע שהאפליקציה תצא לאוויר ותקבל את הפרימיום שלך!
                    </p>
<div className="bg-zinc-950/50 border border-white/5 rounded-xl p-4 mb-6">
<p className="text-xs text-zinc-300 mb-3">עזור/י לנו לגרום לזה לקרות מהר יותר!</p>
<div className="flex gap-2 justify-center">
<button className="flex items-center gap-2 bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 px-4 py-2 rounded-lg text-xs font-medium transition-colors" onclick="app.share('whatsapp')">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> שתף בוואטסאפ
                            </button>
<button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-xs font-medium transition-colors" onclick="app.share('copy')">
<iconify-icon icon="solar:copy-linear"></iconify-icon> העתק קישור
                            </button>
</div>
</div>
<button className="text-xs text-zinc-500 hover:text-zinc-300 underline" onclick="app.resetForm()">הזן משתמש נוסף</button>
</div>
</div>
</section>

<footer className="w-full border-t border-white/5 mt-auto py-8 text-center text-xs text-zinc-600 flex flex-col items-center gap-4 relative z-10">
<div className="flex gap-4">
<button className="hover:text-zinc-300 transition-colors" onclick="app.showModal('terms')">תנאי שימוש</button>
<button className="hover:text-zinc-300 transition-colors" onclick="app.showModal('privacy')">פרטיות</button>
<button className="hover:text-zinc-300 transition-colors" onclick="app.navigate('admin-login')">כניסת מנהלים</button>
</div>
<div>© 2026 MATCH IL. כל הזכויות שמורות.</div>
</footer>
</div>

<div className="view-hidden min-h-screen pt-24 pb-12 flex flex-col items-center relative z-10" id="view-investors">
<header className="w-full max-w-3xl mx-auto px-6 text-center mt-12 mb-12 fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6 glass-panel">
                הזדמנות להשקעה מוקדמת
            </div>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-100 mb-6 leading-tight">
                האקזיט הישראלי הבא <br/><span className="text-gradient">מיוזמה של מילואימניק.</span>
</h1>
<p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                שוק הדייטינג העולמי צמא לפתרונות נישה. MATCH IL מביאה טכנולוגיית AI ייחודית לקהילה הישראלית עם מודל עסקי רווחי. השאירו פרטים לקבלת חומרים.
            </p>
</header>
<section className="w-full max-w-xl mx-auto px-6 py-8 fade-up">
<div className="glass-panel p-8 rounded-3xl glow-box">
<div id="inv-form-content">
<h3 className="text-xl font-medium mb-6">השאר פרטים לתיאום וקבלת תוכנית</h3>
<form className="space-y-4" id="investor-form" onsubmit="app.submitInvestorForm(event)">
<div>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30" id="i-name" placeholder="שם מלא / שם קרן" required="" type="text"/>
</div>
<div>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30 text-left" dir="ltr" id="i-email" placeholder="investor@fund.com" required="" type="email"/>
</div>
<div>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/30" id="i-amount" placeholder="סכום השקעה פוטנציאלי (אופציונלי)" type="text"/>
</div>
<button className="w-full py-3.5 bg-emerald-600/90 text-white rounded-xl font-medium hover:bg-emerald-500 transition-colors flex justify-center items-center gap-2" id="i-submit-btn" type="submit">
                            שלח פרטים <iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
</div>
<div className="hidden text-center py-6" id="inv-success-content">
<div className="h-12 w-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-fade-in">
<iconify-icon className="text-2xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-2">תודה על פנייתך!</h3>
<p className="text-sm text-zinc-400 mb-2">מייל אישור נשלח לכתובת שהזנת.</p>
<p className="text-xs text-zinc-500 p-3 bg-zinc-950/50 rounded-lg border border-white/5">
                        בתוך עד 30 יום אנו נשלח אליך למייל את כלל התוכניות העסקיות (Business Plan), מצגת משקיעים (Pitch Deck) ומפת הדרכים לפיתוח האפליקציה.
                    </p>
</div>
</div>
<div className="mt-8 text-center">
<button className="text-xs text-zinc-500 hover:text-zinc-300 underline" onclick="app.navigate('home')">חזרה לדף הראשי</button>
</div>
</section>
</div>

<div className="view-hidden min-h-screen flex items-center justify-center p-6 relative z-10" id="view-admin-login">
<div className="w-full max-w-sm glass-panel p-8 rounded-3xl">
<div className="text-center mb-8">
<iconify-icon className="text-4xl text-zinc-500 mb-2" icon="solar:shield-keyhole-linear"></iconify-icon>
<h2 className="text-xl font-semibold tracking-tight">כניסת מערכת</h2>
<p className="text-xs text-zinc-500">פאנל ניהול נתונים</p>
</div>
<form className="space-y-4" onsubmit="app.adminLogin(event)">
<div>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none text-left" dir="ltr" id="a-user" placeholder="Username" required="" type="text"/>
</div>
<div>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none text-left" dir="ltr" id="a-pass" placeholder="Password" required="" type="password"/>
</div>
<p className="text-rose-500 text-xs hidden" id="a-error">פרטים שגויים.</p>
<button className="w-full py-3 bg-zinc-100 text-zinc-950 rounded-xl font-medium hover:bg-white transition-colors" type="submit">
                    הכנס
                </button>
</form>
<div className="mt-6 text-center">
<button className="text-xs text-zinc-500 hover:text-zinc-300" onclick="app.navigate('home')">חזרה לדף הראשי</button>
</div>
</div>
</div>

<div className="view-hidden min-h-screen pt-20 pb-12 px-6 relative z-10" id="view-admin-dash">
<div className="max-w-6xl mx-auto">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight">פאנל ניהול בזמן אמת</h1>
<p className="text-xs text-rose-400 mt-1">הנתונים נשמרים לוקאלית בדפדפן לצורך הדגמה</p>
</div>
<button className="text-sm bg-rose-500/10 text-rose-500 px-4 py-2 rounded-lg hover:bg-rose-500/20 transition-colors border border-rose-500/20" onclick="app.logout()">התנתק</button>
</div>
<div className="grid md:grid-cols-2 gap-6 mb-8">
<div className="glass-panel p-6 rounded-2xl">
<div className="text-xs text-zinc-400 mb-1 flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> סה"כ נרשמים בפועל</div>
<div className="text-4xl font-semibold" id="dash-user-count">0</div>
</div>
<div className="glass-panel p-6 rounded-2xl">
<div className="text-xs text-zinc-400 mb-1 flex items-center gap-1"><iconify-icon icon="solar:wad-of-money-linear"></iconify-icon> סה"כ פניות משקיעים</div>
<div className="text-4xl font-semibold text-emerald-400" id="dash-inv-count">0</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-panel p-6 rounded-2xl max-h-[500px] overflow-y-auto">
<h2 className="text-sm font-medium mb-4 text-zinc-300 border-b border-white/10 pb-2">טפסי משתמשים (נרשמו)</h2>
<div className="space-y-3" id="dash-users-list"></div>
</div>

<div className="glass-panel p-6 rounded-2xl max-h-[500px] overflow-y-auto">
<h2 className="text-sm font-medium mb-4 text-emerald-400 border-b border-white/10 pb-2">טפסי משקיעים</h2>
<div className="space-y-3" id="dash-inv-list"></div>
</div>
</div>
</div>
</div>


<div className="fixed inset-0 bg-black/80 z-[100] hidden items-center justify-center p-6 backdrop-blur-md" id="modal-legal">
<div className="glass-panel border border-white/10 rounded-2xl w-full max-w-lg p-6 relative max-h-[85vh] flex flex-col shadow-2xl">
<button className="absolute top-4 left-4 text-zinc-400 hover:text-white" onclick="app.hideModal('legal')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<h2 className="text-xl font-medium mb-4 pr-2" id="modal-legal-title">תנאי שימוש</h2>
<div className="overflow-y-auto pr-2 text-xs text-zinc-400 leading-relaxed space-y-4">
<p><strong>הבהרה כללית:</strong> עמוד זה מהווה "דף נחיתה" לאיסוף מתעניינים ומשקיעים פוטנציאליים לאפליקציית MATCH IL. האפליקציה אינה קיימת בחנויות האפליקציות נכון לרגע זה. לחיצה על הרשמה אינה מהווה התחייבות, אלא הבעת עניין בלבד.</p>
<h3 className="font-medium text-zinc-300 mt-2">1. שימוש במודולי בינה מלאכותית (AI)</h3>
<p>במסגרת האפליקציה או בעמוד ההדגמה, קיימים כלים המבוססים על בינה מלאכותית (AI) המציעים "משפטי פלרטוט", עזרה בשיחה או תגובות מומלצות. <br/><strong>הצהרת העדר אחריות משפטית:</strong> התכנים המיוצרים על ידי ה-AI נוצרים אוטומטית וללא מגע יד אדם. החברה, מפעיליה ויוצריה מסירים מעצמם כל אחריות משפטית או מוסרית לתוכן ההודעות. אין לראות בתוצאות ה-AI משום ייעוץ פסיכולוגי, זוגי, רפואי או משפטי. כל שימוש במשפטים המוצעים בשיחה מול צד שלישי (באפליקציה זו או מחוצה לה) הוא באחריותו המלאה והבלעדית של המשתמש. אין לחברה אחריות לתוצאות השיחה, לפגיעה ברגשות או לכל נזק עקיף או ישיר שייגרם כתוצאה מכך.</p>
<h3 className="font-medium text-zinc-300 mt-2">2. פרטיות המידע</h3>
<p>הפרטים שנאספים בטופס (שם, תאריך לידה, כתובת מייל) נשמרים בסביבה סגורה ומטרתם היחידה היא לשלוח עדכונים למשתמשים במקרה של השקת האפליקציה ולבדיקת כדאיות הפרויקט בלבד. איננו סוחרים במידע, איננו מוכרים אותו לצד ג' ובמידה והפרויקט יבוטל - הנתונים יימחקו כליל.</p>
<h3 className="font-medium text-zinc-300 mt-2">3. מגבלת גיל והתאמה</h3>
<p>השירות, לכשיוקם, מיועד אך ורק לגילאי 18 עד 35 (כולל). המערכת שומרת לעצמה את הזכות לחסום גישה או לבטל הרשמה למי שאינו עומד בקריטריונים.</p>
</div>
<div className="mt-6 pt-4 border-t border-white/10 text-center">
<button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-xl text-sm transition-colors" onclick="app.hideModal('legal')">קראתי והבנתי</button>
</div>
</div>
</div>



    </>
  );
}
