import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- View Navigation (SPA Logic) ---
        function switchView(viewId) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(view => {
                view.classList.remove('active');
                // Small delay to allow fade out before removing from layout
                setTimeout(() => {
                    if(!view.classList.contains('active')) {
                        view.style.display = 'none';
                    }
                }, 400); 
            });

            // Show selected view
            const targetView = document.getElementById(`view-${viewId}`);
            if(targetView) {
                targetView.style.display = 'flex';
                // Trigger reflow
                void targetView.offsetWidth;
                targetView.classList.add('active');
            }
            window.scrollTo(0, 0);
        }

        // Live Counter Animation
        function startCounter() {
            const counterElement = document.getElementById('liveCounter');
            if(!counterElement) return;
            let currentCount = 842; 
            
            setInterval(() => {
                if (Math.random() > 0.6) {
                    currentCount++;
                    counterElement.innerText = currentCount.toLocaleString();
                    
                    counterElement.style.transform = 'scale(1.1)';
                    counterElement.style.color = '#34d399'; 
                    setTimeout(() => {
                        counterElement.style.transform = 'scale(1)';
                        counterElement.style.color = '#ffffff';
                    }, 200);
                }
            }, 3500);
        }

        // Modal Logic
        function toggleModal(id) {
            const modal = document.getElementById(id);
            const content = modal.querySelector('.modal-content');
            
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                void modal.offsetWidth;
                modal.classList.remove('opacity-0');
                if(content.classList.contains('translate-y-full')) {
                    content.classList.remove('translate-y-full');
                }
                if(content.classList.contains('scale-95')) {
                    content.classList.remove('scale-95');
                    content.classList.add('scale-100');
                }
            } else {
                modal.classList.add('opacity-0');
                if(content.classList.contains('scale-100')) {
                    content.classList.remove('scale-100');
                    content.classList.add('scale-95');
                } else {
                    content.classList.add('translate-y-full');
                }
                setTimeout(() => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                }, 300);
            }
        }

        // Waitlist Form Submit
        function handleWaitlistSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalContent = btn.innerHTML;
            
            btn.innerHTML = '<iconify-icon icon="solar:radar-linear" class="text-xl animate-spin"></iconify-icon> שומר פרטים...';
            
            setTimeout(() => {
                btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" class="text-xl text-emerald-400"></iconify-icon> נרשמת בהצלחה!';
                btn.classList.replace('from-indigo-600', 'from-neutral-800');
                btn.classList.replace('to-indigo-500', 'to-neutral-800');
                e.target.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalContent;
                    btn.classList.replace('from-neutral-800', 'from-indigo-600');
                    btn.classList.replace('to-neutral-800', 'to-indigo-500');
                }, 3000);
            }, 1500);
        }

        // Secure Admin Login Check
        function handleAdminLogin(e) {
            e.preventDefault();
            const u = document.getElementById('adminUser').value;
            const p = document.getElementById('adminPass').value;
            
            // JONATHAN = Sk9OQVRIQU4=
            // 213201239T = MjEzMjAxMjM5VA==
            const hashedU = btoa(u.trim());
            const hashedP = btoa(p.trim());
            
            if (hashedU === 'Sk9OQVRIQU4=' && hashedP === 'MjEzMjAxMjM5VA==') {
                toggleModal('adminModal');
                e.target.reset();
                // Switch to admin view
                setTimeout(() => {
                    switchView('admin');
                }, 300);
            } else {
                const btn = e.target.querySelector('button');
                btn.innerText = 'שגיאה בפרטים';
                btn.classList.replace('bg-white', 'bg-rose-500');
                btn.classList.replace('text-neutral-950', 'text-white');
                
                setTimeout(() => {
                    btn.innerText = 'כניסה למערכת';
                    btn.classList.replace('bg-rose-500', 'bg-white');
                    btn.classList.replace('text-white', 'text-neutral-950');
                }, 2000);
            }
        }

        function logoutAdmin() {
            switchView('home');
        }

        // Init
        window.addEventListener('DOMContentLoaded', startCounter);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 right-0 h-screen overflow-hidden pointer-events-none -z-10">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse-glow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-rose-900/10 rounded-full blur-[100px] animate-pulse-glow delay-200"></div>
</div>

<nav className="sticky top-0 z-40 bg-neutral-950/70 backdrop-blur-2xl border-b border-white/5 transition-all">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="text-xl font-bold tracking-tight text-white uppercase flex items-center gap-1 hover:opacity-80 transition-opacity" onclick="switchView('home')">
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                MATCH IL
            </button>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" onclick="switchView('investors')">למשקיעים</button>
<span className="text-xs font-medium text-neutral-500 bg-neutral-900/80 px-2 py-1 rounded-md border border-neutral-800">BETA</span>

</div>
</div>
</nav>

<div className="flex-grow flex flex-col w-full max-w-4xl mx-auto">

<main className="view-section active flex-col gap-14 px-6 pb-24 pt-8 w-full max-w-md mx-auto" id="view-home">

<section className="flex flex-col gap-6 text-center mt-2 relative z-10">
<div className="animate-fade-in-up inline-flex flex-col items-center justify-center gap-1 bg-amber-500/10 border border-amber-500/20 text-amber-300 px-4 py-2 rounded-2xl w-max mx-auto shadow-lg shadow-amber-500/5">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
<span className="text-xs font-semibold">שלב בדיקת היתכנות</span>
</div>
</div>
<h1 className="animate-fade-in-up delay-100 text-4xl font-semibold tracking-tight text-white leading-[1.15]">
                    הדור הבא של הדייטינג לקהילה
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-400 via-purple-400 to-rose-400">היהודית והישראלית</span>
</h1>
<p className="animate-fade-in-up delay-200 text-base text-neutral-400 font-normal leading-relaxed px-2">
                    הירשמו עכשיו לרשימת ההמתנה והבטיחו גישת פרימיום בחינם ברגע שנעלה לאוויר.
                </p>

<div className="animate-fade-in-up delay-300 flex items-center gap-3 bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-full p-1.5 pr-4 w-max mx-auto shadow-xl">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300 flex items-center gap-1">
<span className="text-white font-bold text-sm tracking-tight inline-block min-w-[3ch]" id="liveCounter">842</span> 
                        כבר נרשמו לרשימת ההמתנה
                    </span>
</div>
<a className="animate-fade-in-up delay-300 mt-2 bg-white text-neutral-950 h-14 rounded-2xl flex items-center justify-center gap-2 font-semibold text-base hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]" href="#register">
                    הצטרף לרשימת ההמתנה
                    <iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</a>
</section>

<section className="animate-fade-in-up delay-300 flex flex-col gap-6">
<div className="text-center flex flex-col gap-2">
<h2 className="text-2xl font-semibold tracking-tight text-white">למה דווקא MATCH IL?</h2>
<p className="text-sm text-neutral-400">אפליקציות גלובליות לא תמיד מבינות אותנו.</p>
</div>
<div className="grid grid-cols-1 gap-4">

<div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-5 flex flex-col gap-3 relative overflow-hidden group hover:bg-neutral-900/60 transition-colors">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-colors"></div>
<div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 relative z-10">
<iconify-icon className="text-xl" icon="solar:earth-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-base font-semibold text-white mb-1">מבינים את העולם הישראלי</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                אלגוריתמים באפליקציות רגילות לא מבינים את התרבות שלנו, ההומור, השירות הצבאי והערכים עליהם גדלנו. קשה למצוא אהבה כשלא מבינים את השפה התרבותית שלך.
                            </p>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-5 flex flex-col gap-3 relative overflow-hidden group hover:bg-neutral-900/60 transition-colors">
<div className="absolute -left-4 -bottom-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors"></div>
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 relative z-10">
<iconify-icon className="text-xl" icon="solar:brain-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-base font-semibold text-white mb-1">התאמה מבוססת בינה מלאכותית</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                ה-AI שלנו אומן במיוחד על הניואנסים של הקהילה היהודית והישראלית. הוא מנתח עומק של ערכים משותפים, ציפיות חיים ורקע תרבותי כדי להציע התאמות מדויקות באמת.
                            </p>
</div>
</div>
</div>
</section>

<section className="animate-fade-in-up delay-400 animate-float relative rounded-3xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-xl overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10 pointer-events-none"></div>
<div className="p-6 flex flex-col gap-4 relative z-10">
<div className="flex items-center justify-between border-b border-neutral-800 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center relative">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:cpu-linear"></iconify-icon>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-neutral-900 rounded-full"></div>
</div>
<div>
<h3 className="text-sm font-semibold text-white">MATCH IL AI</h3>
<p className="text-xs text-neutral-400">מנתח התאמות תרבותיות...</p>
</div>
</div>
<iconify-icon className="text-2xl text-neutral-600 animate-spin" icon="solar:radar-linear" style={{animationDuration: '4s'}}></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-2 bg-neutral-800 rounded-full w-3/4 overflow-hidden relative">
<div className="absolute top-0 right-0 h-full bg-indigo-500 w-full animate-[pulse_2s_ease-in-out_infinite]" style={{transformOrigin: 'right', transform: 'scaleX(0.6)'}}></div>
</div>
<div className="h-2 bg-neutral-800 rounded-full w-1/2 overflow-hidden relative">
<div className="absolute top-0 right-0 h-full bg-rose-500 w-full animate-[pulse_3s_ease-in-out_infinite]" style={{transformOrigin: 'right', transform: 'scaleX(0.8)'}}></div>
</div>
</div>
</div>
</section>

<section className="animate-fade-in-up delay-400 scroll-mt-24" id="register">
<div className="bg-neutral-900/50 backdrop-blur-2xl border border-neutral-800 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col gap-8">
<div className="flex flex-col gap-1 text-center mt-2">
<h2 className="text-2xl font-semibold tracking-tight text-white">הבטח את מקומך</h2>
<p className="text-xs text-neutral-400">הירשם עכשיו וקבל עדכון ברגע שהאפליקציה עולה לאוויר.</p>
</div>
<form className="flex flex-col gap-5" onsubmit="handleWaitlistSubmit(event)">

<div className="relative flex items-center bg-neutral-950/50 border border-neutral-800 rounded-2xl focus-within:border-indigo-500/50 focus-within:bg-neutral-900 focus-within:shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)] transition-all">
<div className="pl-4 pr-5 text-neutral-500"><iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon></div>
<div className="relative w-full h-14">
<input className="floating-input absolute inset-0 w-full h-full bg-transparent text-sm text-white focus:outline-none px-2 pt-4 pb-1 peer" id="fname" placeholder=" " required="" type="text"/>
<label className="floating-label absolute right-2 top-1/2 -translate-y-1/2 text-sm text-neutral-500 font-medium transition-all pointer-events-none origin-right" htmlFor="fname">שם מלא</label>
</div>
</div>

<div className="relative flex items-center bg-neutral-950/50 border border-neutral-800 rounded-2xl focus-within:border-indigo-500/50 focus-within:bg-neutral-900 focus-within:shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)] transition-all">
<div className="pl-4 pr-5 text-neutral-500"><iconify-icon className="text-lg" icon="solar:calendar-date-linear"></iconify-icon></div>
<div className="relative w-full h-14 flex flex-col justify-center">
<label className="text-xs text-neutral-500 font-medium px-2 pt-1" htmlFor="dob">תאריך לידה</label>
<input className="w-full bg-transparent text-sm text-white focus:outline-none px-2 pb-1" id="dob" required="" type="date"/>
</div>
</div>

<div className="relative flex items-center bg-neutral-950/50 border border-neutral-800 rounded-2xl focus-within:border-indigo-500/50 focus-within:bg-neutral-900 focus-within:shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)] transition-all">
<div className="pl-4 pr-5 text-neutral-500"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></div>
<div className="relative w-full h-14">
<input className="floating-input absolute inset-0 w-full h-full bg-transparent text-sm text-white focus:outline-none px-2 pt-4 pb-1 peer text-left" dir="ltr" id="email" placeholder=" " required="" type="email"/>
<label className="floating-label absolute right-2 top-1/2 -translate-y-1/2 text-sm text-neutral-500 font-medium transition-all pointer-events-none origin-right" htmlFor="email">כתובת אימייל</label>
</div>
</div>
<button className="w-full mt-2 bg-gradient-to-l from-indigo-600 to-indigo-500 text-white h-14 rounded-2xl flex items-center justify-center gap-2 font-semibold text-sm hover:from-indigo-500 hover:to-indigo-400 transition-all shadow-lg shadow-indigo-500/25 active:scale-[0.98] relative overflow-hidden group" type="submit">
<div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out skew-x-12"></div>
<span className="relative z-10 flex items-center gap-2">
                                    הירשם עכשיו
                                    <iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</span>
</button>
</form>
<div className="text-xs text-center text-neutral-500 flex flex-wrap items-center justify-center gap-1">
                            בהרשמה אתה מאשר את 
                            <button className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2" onclick="toggleModal('termsModal')">תנאי השימוש</button>
                            ואת 
                            <button className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2" onclick="toggleModal('privacyModal')">מדיניות הפרטיות</button>
</div>
</div>
</div>
</section>
</main>

<article className="view-section flex-col gap-10 px-6 pb-24 pt-8 w-full" id="view-investors">
<div className="text-center flex flex-col gap-4 max-w-2xl mx-auto">
<div className="inline-flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full w-max mx-auto">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span className="text-xs font-semibold">הזדמנות השקעה בשלב Seed</span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                    להשקיע בדור הבא של<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-400">עולם הדייטינג הישראלי</span>
</h1>
<p className="text-base text-neutral-400 font-normal leading-relaxed mt-2">
                    שוק הדייטינג הנישתי צומח בקצב שיא. MATCH IL משלבת טכנולוגיית AI מתקדמת עם צורך קהילתי אמיתי, במטרה לבנות אקזיט כחול-לבן משמעותי.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">

<div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col gap-4">
<div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon className="text-2xl" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">שוק צומח</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        אפליקציות נישה מוכיחות אחוזי המרה ושימור משתמשים גבוהים משמעותית מאפליקציות כלליות. הקהילה היהודית והישראלית הגלובלית מונה מיליוני רווקים ורווקות.
                    </p>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col gap-4">
<div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon className="text-2xl" icon="solar:medal-star-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">צוות חזק וערכי</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        המיזם פותח ומנוהל על ידי מילואימניק המשלב הבנה טכנולוגית עמוקה (AI &amp; Data) עם היכרות אינטימית של הצורך בשטח והערכים הישראליים.
                    </p>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col gap-4">
<div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight">אסטרטגיית אקזיט</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        בניית Data ייחודי ומנוע התאמה חכם יהפכו את MATCH IL ליעד רכישה אסטרטגי (M&amp;A) עבור ענקיות הדייטינג העולמיות המחפשות לחדור לקהילות ספציפיות.
                    </p>
</div>
</div>
<div className="mt-8 bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800 rounded-[2rem] p-8 text-center max-w-xl mx-auto flex flex-col gap-6 w-full">
<h3 className="text-xl font-semibold text-white">מעוניינים במידע נוסף?</h3>
<p className="text-sm text-neutral-400">השאירו פרטים ונשלח לכם את ה-Pitch Deck המלא והתכנית העסקית.</p>
<form className="flex flex-col gap-4" onsubmit="event.preventDefault(); alert('פרטיך נשלחו בהצלחה. ניצור קשר בקרוב.'); this.reset();">
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="שם מלא / קרן השקעות" required="" type="text"/>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors text-left" dir="ltr" placeholder="אימייל" required="" type="email"/>
<button className="w-full bg-white text-neutral-950 h-12 rounded-xl font-semibold text-sm hover:bg-neutral-200 transition-colors mt-2" type="submit">
                        קבלת חומרי השקעה
                    </button>
</form>
</div>
</article>

<article className="view-section flex-col gap-8 px-6 pb-24 pt-8 w-full" id="view-admin">
<div className="flex items-center justify-between border-b border-neutral-800 pb-6">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:widget-linear"></iconify-icon>
                        פאנל ניהול
                    </h1>
<p className="text-sm text-neutral-500 mt-1">סקירה כללית של ביצועי האתר והרשמות</p>
</div>
<button className="text-sm text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1 bg-rose-500/10 px-3 py-1.5 rounded-lg" onclick="logoutAdmin()">
                    התנתק
                    <iconify-icon icon="solar:logout-2-linear"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col gap-2">
<div className="text-neutral-500 text-xs font-medium">נרשמים ברשימת המתנה</div>
<div className="text-2xl font-semibold text-white">842</div>
<div className="text-xs text-emerald-400 flex items-center gap-1">+12% השבוע</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col gap-2">
<div className="text-neutral-500 text-xs font-medium">מבקרים היום</div>
<div className="text-2xl font-semibold text-white">1,204</div>
<div className="text-xs text-emerald-400 flex items-center gap-1">+5% היום</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col gap-2">
<div className="text-neutral-500 text-xs font-medium">אחוז המרה (CR)</div>
<div className="text-2xl font-semibold text-white">18.4%</div>
<div className="text-xs text-rose-400 flex items-center gap-1">-1.2% השבוע</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col gap-2">
<div className="text-neutral-500 text-xs font-medium">פניות משקיעים</div>
<div className="text-2xl font-semibold text-white">7</div>
<div className="text-xs text-neutral-400 flex items-center gap-1">ממתינים לתגובה: 2</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden mt-4">
<div className="p-4 border-b border-neutral-800 flex items-center justify-between">
<h3 className="text-sm font-semibold text-white">נרשמים אחרונים</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300">ייצוא ל-CSV</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-right text-neutral-400">
<thead className="text-xs text-neutral-500 bg-neutral-950/50">
<tr>
<th className="px-4 py-3 font-medium">שם</th>
<th className="px-4 py-3 font-medium">אימייל</th>
<th className="px-4 py-3 font-medium">תאריך הרשמה</th>
<th className="px-4 py-3 font-medium">סטטוס</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-800">
<tr className="hover:bg-neutral-800/30 transition-colors">
<td className="px-4 py-3 text-white">נועה לוי</td>
<td className="px-4 py-3 text-left" dir="ltr">noa.l@example.com</td>
<td className="px-4 py-3">לפני 10 דקות</td>
<td className="px-4 py-3"><span className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded text-[10px]">פעיל</span></td>
</tr>
<tr className="hover:bg-neutral-800/30 transition-colors">
<td className="px-4 py-3 text-white">דניאל כהן</td>
<td className="px-4 py-3 text-left" dir="ltr">danielc@test.com</td>
<td className="px-4 py-3">לפני שעה</td>
<td className="px-4 py-3"><span className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded text-[10px]">פעיל</span></td>
</tr>
<tr className="hover:bg-neutral-800/30 transition-colors">
<td className="px-4 py-3 text-white">יעל שפירא</td>
<td className="px-4 py-3 text-left" dir="ltr">yaels@mail.co.il</td>
<td className="px-4 py-3">היום, 09:42</td>
<td className="px-4 py-3"><span className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded text-[10px]">פעיל</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</article>
</div>

<footer className="border-t border-white/5 bg-neutral-950 py-10 relative mt-auto">
<div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6 text-center relative z-10">
<div className="text-base font-bold tracking-tight text-neutral-600">MATCH IL</div>
<p className="text-xs text-neutral-600 max-w-sm">
                פלטפורמת דייטינג מבוססת בינה מלאכותית, נוצרה לבדיקת היתכנות טכנולוגית ועסקית עבור הקהילה היהודית והישראלית בעולם.
            </p>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<button className="hover:text-white transition-colors" onclick="toggleModal('termsModal')">תנאי שימוש</button>
<div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
<button className="hover:text-white transition-colors" onclick="toggleModal('privacyModal')">פרטיות</button>
<div className="w-1 h-1 bg-neutral-800 rounded-full"></div>
<button className="hover:text-white transition-colors block sm:hidden" onclick="switchView('investors')">למשקיעים</button>
</div>
<div className="flex items-center justify-center w-full mt-4 relative">
<p className="text-xs text-neutral-700">© 2026 MATCH IL BETA. כל הזכויות שמורות.</p>

<button className="absolute left-0 text-xs text-neutral-700 hover:text-white transition-colors flex items-center gap-1 border border-neutral-800 px-2 py-1 rounded bg-neutral-900/50" onclick="toggleModal('adminModal')">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
                    ניהול
                </button>
</div>
</div>
</footer>


<div className="hidden fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300" id="termsModal">
<div className="bg-neutral-900 border-t sm:border border-neutral-800 rounded-t-3xl sm:rounded-3xl p-6 w-full max-w-md h-[80vh] sm:h-auto max-h-[80vh] flex flex-col gap-4 transform translate-y-full sm:translate-y-0 transition-transform duration-300 modal-content">
<div className="flex items-center justify-between border-b border-neutral-800 pb-4 shrink-0">
<h3 className="text-lg font-semibold text-white">תנאי שימוש</h3>
<button className="text-neutral-400 hover:text-white bg-neutral-800/50 rounded-full w-8 h-8 flex items-center justify-center transition-colors" onclick="toggleModal('termsModal')">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="overflow-y-auto pr-2 no-scrollbar text-sm text-neutral-400 leading-relaxed space-y-4">
<p>ברוכים הבאים לאתר MATCH IL. דף זה נוצר למטרת בדיקת היתכנות (Validation) בלבד ולמידה האם קיים ביקוש לאפליקציית דייטינג מסוג זה.</p>
<p>1. <strong>מהות השירות:</strong> נכון לעכשיו, האפליקציה אינה קיימת בחנויות. ההרשמה מהווה הצטרפות לרשימת המתנה בלבד ואינה מחייבת את המפעילים לפתח את המוצר.</p>
<p>2. <strong>קהל יעד:</strong> השירות והפיתוח העתידי מיועדים לחברי הקהילה היהודית והישראלית בישראל וברחבי העולם.</p>
<p>3. <strong>שינויים:</strong> מפעיל האתר שומר לעצמו את הזכות לשנות, להשהות או לבטל את המיזם בכל עת וללא הודעה מוקדמת.</p>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300" id="privacyModal">
<div className="bg-neutral-900 border-t sm:border border-neutral-800 rounded-t-3xl sm:rounded-3xl p-6 w-full max-w-md h-[80vh] sm:h-auto max-h-[80vh] flex flex-col gap-4 transform translate-y-full sm:translate-y-0 transition-transform duration-300 modal-content">
<div className="flex items-center justify-between border-b border-neutral-800 pb-4 shrink-0">
<h3 className="text-lg font-semibold text-white">מדיניות פרטיות</h3>
<button className="text-neutral-400 hover:text-white bg-neutral-800/50 rounded-full w-8 h-8 flex items-center justify-center transition-colors" onclick="toggleModal('privacyModal')">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="overflow-y-auto pr-2 no-scrollbar text-sm text-neutral-400 leading-relaxed space-y-4">
<p>אנו מייחסים חשיבות עליונה לפרטיות שלך, במיוחד בשלב בדיקת ההיתכנות של הפרויקט.</p>
<p>1. <strong>איסוף מידע:</strong> המידע שנאסף בטופס (שם, תאריך לידה, דוא"ל) נשמר בצורה מאובטחת ומוצפנת במסד הנתונים שלנו.</p>
<p>2. <strong>שימוש במידע:</strong> המידע ישמש אך ורק לצורך הערכת הביקוש למוצר וליצירת קשר עתידי במידה והאפליקציה תצא לפועל. לא ייעשה בו שום שימוש שיווקי אחר.</p>
<p>3. <strong>העברת מידע:</strong> אנו מתחייבים שלא למכור, להעביר או לשתף את פרטיך עם אף צד שלישי.</p>
<p>4. <strong>מחיקת נתונים:</strong> במידה והוחלט שלא לפתח את המוצר, כלל הנתונים שנאספו יימחקו לאלתר משרתינו.</p>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[100] bg-neutral-950/90 backdrop-blur-md items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="adminModal">
<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 w-full max-w-xs flex flex-col gap-6 shadow-2xl scale-95 transition-transform duration-300 modal-content">
<div className="flex flex-col items-center text-center gap-2 relative">
<button className="absolute -top-2 -right-2 text-neutral-500 hover:text-white transition-colors" onclick="toggleModal('adminModal')">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="w-12 h-12 bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-300 mb-2">
<iconify-icon className="text-2xl" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white tracking-tight">התחברות מנהלים</h3>
<p className="text-xs text-neutral-500">אזור מאובטח. הכנס פרטי הזדהות.</p>
</div>
<form className="flex flex-col gap-4" id="adminForm" onsubmit="handleAdminLogin(event)">
<input className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors text-left" dir="ltr" id="adminUser" placeholder="שם משתמש" required="" type="text"/>
<input className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors text-left" dir="ltr" id="adminPass" placeholder="סיסמה" required="" type="password"/>
<button className="w-full bg-white text-neutral-950 h-12 rounded-xl font-semibold text-sm hover:bg-neutral-200 transition-colors mt-2" type="submit">
                    כניסה למערכת
                </button>
</form>
</div>
</div>



    </>
  );
}
