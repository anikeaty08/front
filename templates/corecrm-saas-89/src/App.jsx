import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Heebo', 'Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f5f3ff',
100: '#ede9fe',
200: '#ddd6fe',
300: '#c4b5fd',
400: '#a78bfa',
500: '#8b5cf6', // Violet
600: '#7c3aed',
700: '#6d28d9',
800: '#5b21b6',
900: '#4c1d95',
950: '#0f0529',
},
dark: {
950: '#050505', // Deep dark
900: '#0a0a0a',
800: '#171717',
}
},
animation: {
'blob': 'blob 7s infinite',
'float': 'float 6s ease-in-out infinite',
'border-spin': 'border-spin 4s linear infinite',
'bar-grow': 'bar-grow 1.5s ease-out forwards',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
'border-spin': {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(360deg)' },
},
'bar-grow': {
'0%': { height: '0%' },
},
shimmer: {
'0%': { backgroundPosition: '200% 0' },
'100%': { backgroundPosition: '-200% 0' }
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Theme Toggle Logic
        function toggleTheme() {
            const html = document.documentElement;
            html.classList.toggle('dark');
            
            // Re-render icons after toggle if needed or just handle via CSS classes
            // For lucide icons that are hidden/shown via CSS, no re-render needed.
        }

        // FAQ Toggle Logic
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            content.classList.toggle('hidden');
            if(content.classList.contains('hidden')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Toggle Switch Checkbox visual logic
        const toggleCheckbox = document.querySelector('.toggle-checkbox');
        const dot = document.querySelector('.toggle-dot');
        toggleCheckbox.addEventListener('change', function() {
            if (this.checked) {
                dot.style.transform = 'translateX(100%)';
            } else {
                dot.style.transform = 'translateX(0)';
            }
        });

        // Translations Data
        const translations = {
            he: {
                nav_capabilities: "יכולות",
                nav_solution: "פתרון",
                nav_pricing: "מחירים",
                nav_faq: "שאלות",
                btn_login: "התחברות",
                btn_start: "התחל ניסיון",
                hero_badge: "חדש: מנוע AI לחיזוי מכירות",
                hero_title_1: "הפוך לידים",
                hero_title_2: "ללקוחות משלמים.",
                hero_sub: "CoreCRM היא מערכת הניהול החכמה שמרכזת עבורך לידים, עסקאות, משימות וקמפיינים במקום אחד. פחות בלאגן, יותר מכירות.",
                cta_primary: "התחל ניסיון חינם",
                cta_secondary: "צפה בדמו",
                trusted_text: "בשימוש ע״י +2,000 עסקים",
                companies_title: "צוותים בחברות המובילות במשק בוחרים ב-Core",
                features_title: "כל הכלים לניהול העסק",
                features_sub: "בנינו את המערכת שתחסוך לך זמן יקר ותעזור לך להתמקד במה שחשוב - הלקוחות שלך.",
                feat_1_title: "ניהול לידים חכם",
                feat_1_desc: "קלוט לידים מכל מקור, סווג אותם אוטומטית והקצה לנציג המתאים בשניות.",
                feat_2_title: "צינור מכירות (Pipeline)",
                feat_2_desc: "ויזואליזציה מלאה של תהליך המכירה. גרירה ושחרור של עסקאות בין שלבים.",
                feat_3_title: "משימות ותזכורות",
                feat_3_desc: "לעולם אל תפספס פולואו-אפ. סנכרון מלא ליומן שלך ותזכורות חכמות.",
                feat_4_title: "שיחות והקלטות",
                feat_4_desc: "חייג ישירות מהמערכת, הקלט שיחות באופן אוטומטי ושמור היסטוריה בתיק לקוח.",
                feat_5_title: "קמפיינים ומקורות",
                feat_5_desc: "דע בדיוק מאיזה קמפיין הגיע כל ליד ומהו ה-ROI האמיתי של השיווק שלך.",
                feat_6_title: "דוחות ותובנות",
                feat_6_desc: "דשבורדים מותאמים אישית שמראים לך את הדופק של העסק בזמן אמת.",
                menu_dashboard: "לוח בקרה",
                badge_leads: "לידים",
                badge_deals: "עסקאות",
                benefits_title: "למה CoreCRM?",
                ben_1_title: "חיסכון של 40% בזמן אדמיניסטרטיבי",
                ben_1_desc: "האוטומציות שלנו עושות את העבודה השחורה בשבילך, כדי שתוכל למכור.",
                ben_2_title: "שקיפות מלאה לצוות הניהול",
                ben_2_desc: "דוחות בזמן אמת מאפשרים קבלת החלטות מבוססת נתונים ולא ניחושים.",
                ben_3_title: "שיפור יחס המרה",
                ben_3_desc: "מערכת ה-Follow Up החכמה מגדילה את סגירת העסקאות ב-25% בממוצע.",
                stat_desc: "צמיחה שנתית במכירות",
                pricing_title: "מחירים הוגנים לעסקים בצמיחה",
                monthly: "חודשי",
                yearly: "שנתי (חסוך 20%)",
                popular: "פופולרי",
                price_1_sub: "לעסקים קטנים",
                price_2_sub: "לעסקים בצמיחה",
                price_3_sub: "לארגונים",
                btn_choose: "בחר תוכנית",
                p1_f1: "2 משתמשים", p1_f2: "עד 1,000 לידים", p1_f3: "ניהול משימות בסיסי",
                p2_f1: "5 משתמשים", p2_f2: "לידים ללא הגבלה", p2_f3: "אוטומציות מתקדמות", p2_f4: "הקלטת שיחות",
                p3_f1: "ללא הגבלת משתמשים", p3_f2: "API מלא", p3_f3: "מנהל תיק אישי",
                faq_title: "שאלות נפוצות",
                q1: "האם יש תקופת ניסיון?",
                a1: "כן, אנחנו מציעים 14 ימי ניסיון חינם עם גישה מלאה לכל הפיצ׳רים של תוכנית ה-Pro, ללא צורך בכרטיס אשראי.",
                q2: "האם המערכת תומכת בעברית מלאה?",
                a2: "בוודאי. CoreCRM נבנתה בישראל ותוכננה מראש לתמיכה מלאה ב-RTL ובעברית, כולל חשבוניות ומסמכים.",
                q3: "האם ניתן לייבא נתונים ממערכות אחרות?",
                a3: "כן, יש לנו כלי יבוא פשוט מאקסל ו-CSV, ואינטגרציות מובנות למערכות פופולריות.",
                final_cta_title: "מוכן לסדר את העסק?",
                final_cta_sub: "הצטרף לאלפי בעלי עסקים שכבר שידרגו את הניהול שלהם.",
                foot_prod: "מוצר",
                foot_comp: "חברה",
                foot_social: "מדיה"
            },
            en: {
                nav_capabilities: "Features",
                nav_solution: "Solutions",
                nav_pricing: "Pricing",
                nav_faq: "FAQ",
                btn_login: "Log in",
                btn_start: "Start Trial",
                hero_badge: "New: AI Sales Prediction Engine",
                hero_title_1: "Turn leads into",
                hero_title_2: "Paying Customers.",
                hero_sub: "CoreCRM is the smart management system that organizes your leads, deals, tasks, and campaigns in one place. Less mess, more sales.",
                cta_primary: "Start Free Trial",
                cta_secondary: "Watch Demo",
                trusted_text: "Trusted by +2,000 Businesses",
                companies_title: "Teams at leading companies choose Core",
                features_title: "All the tools to run your business",
                features_sub: "We built the system that saves you precious time and helps you focus on what matters - your customers.",
                feat_1_title: "Smart Lead Management",
                feat_1_desc: "Capture leads from any source, classify automatically, and assign to the right rep in seconds.",
                feat_2_title: "Sales Pipeline",
                feat_2_desc: "Full visualization of your sales process. Drag and drop deals between stages effortlessly.",
                feat_3_title: "Tasks & Reminders",
                feat_3_desc: "Never miss a follow-up. Full sync with your calendar and smart reminders.",
                feat_4_title: "Calls & Recordings",
                feat_4_desc: "Dial directly from the system, automatically record calls, and save history in the client file.",
                feat_5_title: "Campaigns & Sources",
                feat_5_desc: "Know exactly which campaign brought each lead and calculate the true ROI of your marketing.",
                feat_6_title: "Reports & Insights",
                feat_6_desc: "Custom dashboards showing you the pulse of your business in real-time.",
                menu_dashboard: "Dashboard",
                badge_leads: "Leads",
                badge_deals: "Deals",
                benefits_title: "Why CoreCRM?",
                ben_1_title: "Save 40% Admin Time",
                ben_1_desc: "Our automations do the heavy lifting for you, so you can focus on selling.",
                ben_2_title: "Full Transparency",
                ben_2_desc: "Real-time reports allow for data-driven decisions, not guesswork.",
                ben_3_title: "Improve Conversion",
                ben_3_desc: "Smart Follow-Up system increases deal closing by an average of 25%.",
                stat_desc: "Annual Sales Growth",
                pricing_title: "Fair pricing for growing businesses",
                monthly: "Monthly",
                yearly: "Yearly (Save 20%)",
                popular: "Popular",
                price_1_sub: "For small businesses",
                price_2_sub: "For growing teams",
                price_3_sub: "For enterprises",
                btn_choose: "Choose Plan",
                p1_f1: "2 Users", p1_f2: "Up to 1,000 Leads", p1_f3: "Basic Task Mgmt",
                p2_f1: "5 Users", p2_f2: "Unlimited Leads", p2_f3: "Advanced Automation", p2_f4: "Call Recording",
                p3_f1: "Unlimited Users", p3_f2: "Full API", p3_f3: "Dedicated Account Mgr",
                faq_title: "Frequently Asked Questions",
                q1: "Is there a trial period?",
                a1: "Yes, we offer a 14-day free trial with full access to all Pro features, no credit card required.",
                q2: "Does it support Hebrew/RTL?",
                a2: "Absolutely. CoreCRM was built with full RTL support including invoices and documents.",
                q3: "Can I import data?",
                a3: "Yes, we have simple import tools for Excel/CSV and built-in integrations for popular apps.",
                final_cta_title: "Ready to organize your business?",
                final_cta_sub: "Join thousands of business owners who have already upgraded their management.",
                foot_prod: "Product",
                foot_comp: "Company",
                foot_social: "Media"
            }
        };

        let currentLang = 'he';

        function toggleLanguage() {
            currentLang = currentLang === 'he' ? 'en' : 'he';
            
            // 1. Update HTML dir and font
            const html = document.documentElement;
            const langLabel = document.getElementById('lang-label');
            
            if (currentLang === 'he') {
                html.setAttribute('dir', 'rtl');
                html.setAttribute('lang', 'he');
            } else {
                html.setAttribute('dir', 'ltr');
                html.setAttribute('lang', 'en');
            }

            // 2. Update Text
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.textContent = translations[currentLang][key];
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-0 start-1/4 w-96 h-96 bg-brand-200/40 dark:bg-brand-900/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
<div className="absolute top-1/4 end-1/4 w-96 h-96 bg-blue-200/40 dark:bg-blue-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
<div className="absolute -bottom-32 start-1/3 w-96 h-96 bg-fuchsia-200/40 dark:bg-fuchsia-900/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
</div>

<div className="fixed top-6 inset-x-0 z-50 flex justify-center w-full px-4 pointer-events-none">
<div className="relative group pointer-events-auto">

<div className="absolute -inset-[1px] rounded-full overflow-hidden opacity-0 dark:opacity-70 transition-opacity">
<div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#8b5cf6_50%,#00000000_100%)] animate-border-spin"></div>
</div>
<nav className="relative flex items-center gap-6 px-3 py-2.5 md:px-6 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-none transition-colors duration-300">

<div className="flex items-center gap-2 me-4">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-fuchsia-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
<i className="w-4 h-4 stroke-[2]" data-lucide="brain-circuit"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white hidden sm:block">CoreCRM</span>
</div>

<div className="hidden md:flex items-center gap-1">
<a className="nav-item px-4 py-1.5 text-xs font-medium" data-i18n="nav_capabilities" href="#features">יכולות</a>
<a className="nav-item px-4 py-1.5 text-xs font-medium" data-i18n="nav_solution" href="#benefits">פתרון</a>
<a className="nav-item px-4 py-1.5 text-xs font-medium" data-i18n="nav_pricing" href="#pricing">מחירים</a>
<a className="nav-item px-4 py-1.5 text-xs font-medium" data-i18n="nav_faq" href="#faq">שאלות</a>
</div>

<div className="hidden md:block w-px h-6 bg-gray-200 dark:bg-white/10 mx-2"></div>

<div className="flex items-center gap-2">

<button aria-label="Toggle Theme" className="nav-item p-2 rounded-full transition-colors group relative overflow-hidden" onclick="toggleTheme()">
<i className="w-4 h-4 hidden dark:block text-yellow-300" data-lucide="sun"></i>
<i className="w-4 h-4 block dark:hidden text-slate-600" data-lucide="moon"></i>
</button>

<button className="nav-item p-2 rounded-full transition-colors" onclick="toggleLanguage()">
<i className="w-4 h-4" data-lucide="globe"></i>
</button>
<a className="hidden sm:block text-xs font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors px-3 py-1.5 nav-item" data-i18n="btn_login" href="#">התחברות</a>

<a className="relative overflow-hidden rounded-full p-[1px] group" href="#">
<span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#8b5cf6_50%,#E2E8F0_100%)] animate-border-spin opacity-0 group-hover:opacity-100 transition-opacity"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 dark:bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-3xl transition-all hover:bg-slate-800 dark:hover:bg-white/20">
<span data-i18n="btn_start">התחל ניסיון</span>
<i className="w-3 h-3 ms-1 rtl:rotate-0 ltr:rotate-180" data-lucide="chevron-left"></i>
</span>
</a>
</div>
</nav>
</div>
</div>

<section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="z-10 text-center lg:text-start order-last lg:order-first">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-200 bg-brand-50 text-brand-600 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300 text-xs font-medium mb-6 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span data-i18n="hero_badge">חדש: מנוע AI לחיזוי מכירות</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
<span className="block text-slate-900 dark:text-white" data-i18n="hero_title_1">הפוך לידים</span>
<span className="block text-gradient-brand" data-i18n="hero_title_2">ללקוחות משלמים.</span>
</h1>
<p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed" data-i18n="hero_sub">
                    CoreCRM היא מערכת הניהול החכמה שמרכזת עבורך לידים, עסקאות, משימות וקמפיינים במקום אחד. פחות בלאגן, יותר מכירות.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">

<button className="relative group cursor-pointer w-full sm:w-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-fuchsia-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative overflow-hidden rounded-full p-[1px]">

<span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#e2e8f000_0%,#ffffff_50%,#e2e8f000_100%)] animate-border-spin"></span>

<div className="relative h-full w-full bg-gradient-to-r from-brand-600 to-fuchsia-600 rounded-full px-8 py-3.5 flex items-center justify-center gap-2 group-hover:brightness-110 transition-all">
<span className="text-white font-medium tracking-wide" data-i18n="cta_primary">התחל ניסיון חינם</span>
<i className="w-4 h-4 text-white rtl:rotate-0 ltr:rotate-180 stroke-[1.5]" data-lucide="arrow-left"></i>
</div>
</div>
</button>

<button className="relative group cursor-pointer w-full sm:w-auto">
<div className="relative overflow-hidden rounded-full p-[1px]">

<span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#9ca3af_50%,#00000000_100%)] animate-border-spin opacity-0 group-hover:opacity-50 transition-opacity"></span>
<div className="relative h-full w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-8 py-3.5 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
<i className="w-4 h-4 text-slate-700 dark:text-gray-300 group-hover:text-brand-500 dark:group-hover:text-brand-400 stroke-[1.5] transition-colors" data-lucide="play-circle"></i>
<span className="text-slate-700 dark:text-gray-300 font-medium" data-i18n="cta_secondary">צפה בדמו</span>
</div>
</div>
</button>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-gray-500">
<div className="flex -space-x-2 space-x-reverse rtl:space-x-reverse">
<img alt="" className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-black grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src="https://i.pravatar.cc/100?img=11"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-black grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src="https://i.pravatar.cc/100?img=12"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-black grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" src="https://i.pravatar.cc/100?img=13"/>
</div>
<p data-i18n="trusted_text">בשימוש ע״י +2,000 עסקים</p>
</div>
</div>

<div className="relative z-10 lg:h-[600px] flex items-center justify-center animate-float perspective-1000 order-first lg:order-last">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent blur-[80px] rounded-full"></div>

<div className="relative w-full max-w-lg aspect-[4/3] bg-white dark:bg-[#0f1115] border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl dark:shadow-black/80 overflow-hidden flex flex-col transform rotate-y-6 rotate-x-3 hover:rotate-0 transition-transform duration-700 ease-out group">

<div className="h-10 border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] flex items-center px-4 gap-2">
<div className="flex gap-1.5 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/20"></div>
</div>
</div>

<div className="flex-1 p-5 flex flex-col gap-4">

<div className="grid grid-cols-3 gap-3">

<div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 rounded-lg p-3 relative overflow-hidden group/card">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-50"></div>
<div className="relative flex flex-col gap-2">
<div className="w-6 h-1 rounded-full bg-indigo-500/50 dark:bg-indigo-500/30"></div>
<div className="h-4 w-12 bg-gray-200 dark:bg-white/10 rounded-sm"></div>
</div>
</div>

<div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 rounded-lg p-3 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-50"></div>
<div className="relative flex flex-col gap-2">
<div className="w-6 h-1 rounded-full bg-emerald-500/50 dark:bg-emerald-500/30"></div>
<div className="h-4 w-12 bg-gray-200 dark:bg-white/10 rounded-sm"></div>
</div>
</div>

<div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 rounded-lg p-3 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50"></div>
<div className="relative flex flex-col gap-2">
<div className="w-6 h-1 rounded-full bg-purple-500/50 dark:bg-purple-500/30"></div>
<div className="h-4 w-12 bg-gray-200 dark:bg-white/10 rounded-sm"></div>
</div>
</div>
</div>

<div className="flex-1 bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 rounded-lg p-5 relative flex flex-col">
<div className="flex justify-between items-center mb-6">
<div className="flex gap-2">
<div className="w-10 h-2 bg-gray-200 dark:bg-white/10 rounded-full"></div>
</div>
<div className="w-16 h-2 bg-gray-200 dark:bg-white/5 rounded-full"></div>
</div>

<div className="flex-1 flex items-end justify-between gap-2 px-2">
<div className="w-full bg-brand-500/80 dark:bg-brand-500/60 rounded-t-[2px] animate-bar-grow" style={{height: '45%', animationDelay: '100ms'}}></div>
<div className="w-full bg-brand-500/70 dark:bg-brand-500/50 rounded-t-[2px] animate-bar-grow" style={{height: '65%', animationDelay: '200ms'}}></div>
<div className="w-full bg-brand-500/60 dark:bg-brand-500/40 rounded-t-[2px] animate-bar-grow" style={{height: '35%', animationDelay: '300ms'}}></div>
<div className="w-full bg-brand-500/70 dark:bg-brand-500/50 rounded-t-[2px] animate-bar-grow" style={{height: '55%', animationDelay: '400ms'}}></div>
<div className="w-full bg-brand-500/50 dark:bg-brand-500/30 rounded-t-[2px] animate-bar-grow" style={{height: '25%', animationDelay: '500ms'}}></div>
<div className="w-full bg-brand-500/60 dark:bg-brand-500/40 rounded-t-[2px] animate-bar-grow" style={{height: '40%', animationDelay: '600ms'}}></div>
<div className="w-full bg-brand-500/50 dark:bg-brand-500/30 rounded-t-[2px] animate-bar-grow" style={{height: '20%', animationDelay: '700ms'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-gray-200 dark:border-white/5 bg-gray-100/50 dark:bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-500 dark:text-gray-500 mb-8" data-i18n="companies_title">צוותים בחברות המובילות במשק בוחרים ב-Core</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<h3 className="text-xl font-bold font-sans tracking-tight text-slate-800 dark:text-white">Acme Corp</h3>
<h3 className="text-xl font-bold font-sans tracking-tight text-slate-800 dark:text-white">GlobalBank</h3>
<h3 className="text-xl font-bold font-sans tracking-tight text-slate-800 dark:text-white">Natura</h3>
<h3 className="text-xl font-bold font-sans tracking-tight text-slate-800 dark:text-white">Starlight</h3>
<h3 className="text-xl font-bold font-sans tracking-tight text-slate-800 dark:text-white">Umbrella</h3>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-white" data-i18n="features_title">כל הכלים לניהול העסק</h2>
<p className="text-slate-600 dark:text-gray-400 text-lg" data-i18n="features_sub">בנינו את המערכת שתחסוך לך זמן יקר ותעזור לך להתמקד במה שחשוב - הלקוחות שלך.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 dark:text-blue-400 mb-6">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900 dark:text-white" data-i18n="feat_1_title">ניהול לידים חכם</h3>
<p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm" data-i18n="feat_1_desc">קלוט לידים מכל מקור, סווג אותם אוטומטית והקצה לנציג המתאים בשניות.</p>
</div>
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 dark:text-green-400 mb-6">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900 dark:text-white" data-i18n="feat_2_title">צינור מכירות</h3>
<p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm" data-i18n="feat_2_desc">ויזואליזציה מלאה של תהליך המכירה. גרירה ושחרור של עסקאות בין שלבים.</p>
</div>
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 dark:text-purple-400 mb-6">
<i className="w-6 h-6" data-lucide="check-square"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900 dark:text-white" data-i18n="feat_3_title">משימות ותזכורות</h3>
<p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm" data-i18n="feat_3_desc">לעולם אל תפספס פולואו-אפ. סנכרון מלא ליומן שלך ותזכורות חכמות.</p>
</div>
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 dark:text-orange-400 mb-6">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900 dark:text-white" data-i18n="feat_4_title">שיחות והקלטות</h3>
<p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm" data-i18n="feat_4_desc">חייג ישירות מהמערכת, הקלט שיחות באופן אוטומטי ושמור היסטוריה בתיק לקוח.</p>
</div>
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 dark:text-pink-400 mb-6">
<i className="w-6 h-6" data-lucide="megaphone"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900 dark:text-white" data-i18n="feat_5_title">קמפיינים ומקורות</h3>
<p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm" data-i18n="feat_5_desc">דע בדיוק מאיזה קמפיין הגיע כל ליד ומהו ה-ROI האמיתי של השיווק שלך.</p>
</div>
<div className="glass-card p-8 rounded-2xl">
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 dark:text-cyan-400 mb-6">
<i className="w-6 h-6" data-lucide="pie-chart"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-slate-900 dark:text-white" data-i18n="feat_6_title">דוחות ותובנות</h3>
<p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm" data-i18n="feat_6_desc">דשבורדים מותאמים אישית שמראים לך את הדופק של העסק בזמן אמת.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-transparent to-gray-200/50 dark:to-black/40 border-t border-gray-200 dark:border-white/5 overflow-hidden transition-colors">
<div className="max-w-7xl mx-auto px-6">
<div className="relative bg-white dark:bg-[#0F1117] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[16/9] group">

<div className="h-12 bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/5 flex items-center px-6 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="px-4 py-1 rounded bg-gray-100 dark:bg-black/40 text-xs text-gray-400 border border-gray-200 dark:border-white/5">app.corecrm.com/dashboard</div>
<div className="w-4"></div>
</div>

<div className="p-8 h-full flex gap-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">

<div className="w-64 hidden lg:block rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 p-4 space-y-3">
<div className="h-8 w-3/4 bg-gray-200 dark:bg-white/10 rounded mb-6"></div>
<div className="h-10 w-full bg-brand-50 border border-brand-200 dark:bg-brand-500/20 dark:border-brand-500/30 rounded flex items-center px-3 text-brand-600 dark:text-brand-300 text-sm font-medium gap-2">
<div className="w-4 h-4 bg-brand-400/50 rounded-sm"></div> <span data-i18n="menu_dashboard">לוח בקרה</span>
</div>
<div className="h-10 w-full hover:bg-gray-100 dark:hover:bg-white/5 rounded flex items-center px-3 gap-2">
<div className="w-4 h-4 bg-gray-200 dark:bg-white/20 rounded-sm"></div> <div className="h-2 w-1/2 bg-gray-200 dark:bg-white/10 rounded"></div>
</div>
<div className="h-10 w-full hover:bg-gray-100 dark:hover:bg-white/5 rounded flex items-center px-3 gap-2">
<div className="w-4 h-4 bg-gray-200 dark:bg-white/20 rounded-sm"></div> <div className="h-2 w-2/3 bg-gray-200 dark:bg-white/10 rounded"></div>
</div>
</div>

<div className="flex-1 flex flex-col gap-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5 h-32 relative overflow-hidden group/card">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
<div className="h-3 w-1/2 bg-gray-200 dark:bg-white/20 rounded mb-4"></div>
<div className="h-8 w-3/4 bg-gray-200 dark:bg-white/10 rounded"></div>
</div>
<div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5 h-32">
<div className="h-3 w-1/2 bg-gray-200 dark:bg-white/20 rounded mb-4"></div>
<div className="h-8 w-3/4 bg-gray-200 dark:bg-white/10 rounded"></div>
</div>
<div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5 h-32">
<div className="h-3 w-1/2 bg-gray-200 dark:bg-white/20 rounded mb-4"></div>
<div className="h-8 w-3/4 bg-gray-200 dark:bg-white/10 rounded"></div>
</div>
<div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5 h-32">
<div className="h-3 w-1/2 bg-gray-200 dark:bg-white/20 rounded mb-4"></div>
<div className="h-8 w-3/4 bg-gray-200 dark:bg-white/10 rounded"></div>
</div>
</div>

<div className="flex-1 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 p-6 relative">

<svg className="absolute inset-x-0 bottom-0 h-48 w-full stroke-brand-500 fill-none" preserveaspectratio="none" viewbox="0 0 1000 200">
<path d="M0,150 C150,150 200,50 350,100 C500,150 600,20 750,80 C900,140 1000,50 1000,50" strokeWidth="3" vector-effect="non-scaling-stroke">
<animate attributename="d" dur="10s" repeatcount="indefinite" values="M0,150 C150,150 200,50 350,100 C500,150 600,20 750,80 C900,140 1000,50 1000,50;
                                                     M0,150 C150,130 200,80 350,120 C500,100 600,60 750,100 C900,80 1000,50 1000,50;
                                                     M0,150 C150,150 200,50 350,100 C500,150 600,20 750,80 C900,140 1000,50 1000,50"></animate>
</path>
<path className="fill-brand-500/10 stroke-none" d="M0,200 L0,150 C150,150 200,50 350,100 C500,150 600,20 750,80 C900,140 1000,50 1000,50 L1000,200 Z"></path>
</svg>
</div>
</div>
</div>

<div className="absolute top-[30%] start-[20%] px-3 py-1 bg-brand-600 text-white text-xs rounded-full shadow-lg border border-white/20 animate-bounce" data-i18n="badge_leads">לידים</div>
<div className="absolute bottom-[40%] end-[30%] px-3 py-1 bg-fuchsia-600 text-white text-xs rounded-full shadow-lg border border-white/20 animate-bounce animation-delay-2000" data-i18n="badge_deals">עסקאות</div>
</div>
</div>
</section>

<section className="py-24" id="benefits">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-slate-900 dark:text-white" data-i18n="benefits_title">למה CoreCRM?</h2>
<ul className="space-y-6">
<li className="flex gap-4 group">
<div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 mt-1 shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1" data-i18n="ben_1_title">חיסכון של 40% בזמן אדמיניסטרטיבי</h4>
<p className="text-sm text-slate-600 dark:text-gray-400" data-i18n="ben_1_desc">האוטומציות שלנו עושות את העבודה השחורה בשבילך, כדי שתוכל למכור.</p>
</div>
</li>
<li className="flex gap-4 group">
<div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 mt-1 shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1" data-i18n="ben_2_title">שקיפות מלאה לצוות הניהול</h4>
<p className="text-sm text-slate-600 dark:text-gray-400" data-i18n="ben_2_desc">דוחות בזמן אמת מאפשרים קבלת החלטות מבוססת נתונים ולא ניחושים.</p>
</div>
</li>
<li className="flex gap-4 group">
<div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 mt-1 shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1" data-i18n="ben_3_title">שיפור יחס המרה</h4>
<p className="text-sm text-slate-600 dark:text-gray-400" data-i18n="ben_3_desc">מערכת ה-Follow Up החכמה מגדילה את סגירת העסקאות ב-25% בממוצע.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-brand-300 to-purple-300 dark:from-brand-600 dark:to-purple-600 rounded-3xl blur-2xl opacity-30 dark:opacity-20 transform rotate-3"></div>
<div className="relative bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-black border border-gray-200 dark:border-white/10 rounded-3xl p-8 overflow-hidden h-96 flex flex-col justify-center items-center text-center shadow-xl">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-fuchsia-600 flex items-center justify-center text-white mb-6 shadow-xl shadow-brand-500/20">
<i className="w-10 h-10" data-lucide="trending-up"></i>
</div>
<div className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">+127%</div>
<p className="text-slate-600 dark:text-gray-400" data-i18n="stat_desc">צמיחה שנתית במכירות</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-100 dark:bg-white/[0.02]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-white" data-i18n="pricing_title">מחירים הוגנים לעסקים בצמיחה</h2>

<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm font-medium text-slate-500 dark:text-gray-400" data-i18n="monthly">חודשי</span>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle">
<input className="sr-only toggle-checkbox" id="toggle" type="checkbox"/>
<div className="w-11 h-6 bg-slate-300 dark:bg-gray-700 rounded-full border border-slate-200 dark:border-gray-600 toggle-label transition-colors"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform translate-x-0 toggle-dot shadow-sm"></div>
</label>
<span className="text-sm font-medium text-slate-900 dark:text-white" data-i18n="yearly">שנתי (חסוך 20%)</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="glass-card p-8 rounded-2xl border-t-4 border-t-gray-400 dark:border-t-gray-600 flex flex-col bg-white dark:bg-transparent">
<h3 className="text-lg font-medium text-slate-900 dark:text-gray-300 mb-2">Starter</h3>
<div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">₪190<span className="text-sm font-normal text-slate-500 dark:text-gray-500">/mo</span></div>
<p className="text-sm text-slate-500 dark:text-gray-500 mb-6" data-i18n="price_1_sub">לעסקים קטנים</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> <span data-i18n="p1_f1">2 משתמשים</span></li>
<li className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> <span data-i18n="p1_f2">עד 1,000 לידים</span></li>
<li className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> <span data-i18n="p1_f3">ניהול משימות בסיסי</span></li>
</ul>
<button className="w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-900 dark:text-white font-medium transition-colors" data-i18n="btn_choose">בחר תוכנית</button>
</div>

<div className="glass-card p-8 rounded-2xl border-t-4 border-t-brand-500 bg-white dark:bg-white/[0.07] relative transform md:-translate-y-4 flex flex-col shadow-xl">
<div className="absolute top-0 start-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg" data-i18n="popular">פופולרי</div>
<h3 className="text-lg font-medium text-brand-600 dark:text-brand-300 mb-2">Pro</h3>
<div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">₪350<span className="text-sm font-normal text-slate-500 dark:text-gray-500">/mo</span></div>
<p className="text-sm text-slate-500 dark:text-gray-500 mb-6" data-i18n="price_2_sub">לעסקים בצמיחה</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300"><i className="w-4 h-4 text-brand-500" data-lucide="check"></i> <span data-i18n="p2_f1">5 משתמשים</span></li>
<li className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300"><i className="w-4 h-4 text-brand-500" data-lucide="check"></i> <span data-i18n="p2_f2">לידים ללא הגבלה</span></li>
<li className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300"><i className="w-4 h-4 text-brand-500" data-lucide="check"></i> <span data-i18n="p2_f3">אוטומציות מתקדמות</span></li>
<li className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300"><i className="w-4 h-4 text-brand-500" data-lucide="check"></i> <span data-i18n="p2_f4">הקלטת שיחות</span></li>
</ul>
<button className="w-full py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium transition-colors shadow-lg shadow-brand-500/25" data-i18n="btn_choose">בחר תוכנית</button>
</div>

<div className="glass-card p-8 rounded-2xl border-t-4 border-t-gray-400 dark:border-t-gray-600 flex flex-col bg-white dark:bg-transparent">
<h3 className="text-lg font-medium text-slate-900 dark:text-gray-300 mb-2">Business</h3>
<div className="text-4xl font-bold text-slate-900 dark:text-white mb-1">₪690<span className="text-sm font-normal text-slate-500 dark:text-gray-500">/mo</span></div>
<p className="text-sm text-slate-500 dark:text-gray-500 mb-6" data-i18n="price_3_sub">לארגונים</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> <span data-i18n="p3_f1">ללא הגבלת משתמשים</span></li>
<li className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> <span data-i18n="p3_f2">API מלא</span></li>
<li className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> <span data-i18n="p3_f3">מנהל תיק אישי</span></li>
</ul>
<button className="w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-900 dark:text-white font-medium transition-colors" data-i18n="btn_choose">בחר תוכנית</button>
</div>
</div>
</div>
</section>

<section className="py-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12 text-slate-900 dark:text-white" data-i18n="faq_title">שאלות נפוצות</h2>
<div className="space-y-4">

<div className="glass-card rounded-lg overflow-hidden bg-white dark:bg-transparent">
<button className="w-full px-6 py-4 text-start flex items-center justify-between focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900 dark:text-white" data-i18n="q1">האם יש תקופת ניסיון?</span>
<i className="w-5 h-5 text-slate-500 dark:text-gray-400 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-6 pb-4 hidden text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
<span data-i18n="a1">כן, אנחנו מציעים 14 ימי ניסיון חינם עם גישה מלאה לכל הפיצ׳רים של תוכנית ה-Pro, ללא צורך בכרטיס אשראי.</span>
</div>
</div>

<div className="glass-card rounded-lg overflow-hidden bg-white dark:bg-transparent">
<button className="w-full px-6 py-4 text-start flex items-center justify-between focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900 dark:text-white" data-i18n="q2">האם המערכת תומכת בעברית מלאה?</span>
<i className="w-5 h-5 text-slate-500 dark:text-gray-400 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-6 pb-4 hidden text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
<span data-i18n="a2">בוודאי. CoreCRM נבנתה בישראל ותוכננה מראש לתמיכה מלאה ב-RTL ובעברית, כולל חשבוניות ומסמכים.</span>
</div>
</div>

<div className="glass-card rounded-lg overflow-hidden bg-white dark:bg-transparent">
<button className="w-full px-6 py-4 text-start flex items-center justify-between focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900 dark:text-white" data-i18n="q3">האם ניתן לייבא נתונים ממערכות אחרות?</span>
<i className="w-5 h-5 text-slate-500 dark:text-gray-400 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="px-6 pb-4 hidden text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
<span data-i18n="a3">כן, יש לנו כלי יבוא פשוט מאקסל ו-CSV, ואינטגרציות מובנות למערכות פופולריות.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto rounded-3xl relative overflow-hidden bg-gradient-to-r from-brand-900 to-black border border-white/10 text-center py-20 px-6">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white" data-i18n="final_cta_title">מוכן לסדר את העסק?</h2>
<p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg" data-i18n="final_cta_sub">הצטרף לאלפי בעלי עסקים שכבר שידרגו את הניהול שלהם.</p>

<a className="relative inline-flex overflow-hidden rounded-full p-[1px] group" href="#">
<span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#FFFFFF_50%,#E2E8F0_100%)] animate-border-spin opacity-40 group-hover:opacity-100 transition-opacity duration-500"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-black backdrop-blur-3xl transition-transform hover:scale-105 shadow-xl">
<span data-i18n="btn_start">התחל ניסיון</span>
</span>
</a>
</div>
</div>
</section>

<footer className="border-t border-gray-200 dark:border-white/5 py-12 bg-white dark:bg-black transition-colors">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center text-white text-xs">C</div>
<span className="font-bold tracking-tight text-slate-900 dark:text-white">CoreCRM</span>
</div>
<p className="text-slate-500 dark:text-gray-500 text-sm">© 2024 CoreCRM Inc.<br/>All rights reserved.</p>
</div>
<div>
<h4 className="font-medium mb-4 text-slate-900 dark:text-white" data-i18n="foot_prod">מוצר</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-gray-500">
<li><a className="hover:text-brand-600 dark:hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-white transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-slate-900 dark:text-white" data-i18n="foot_comp">חברה</h4>
<ul className="space-y-2 text-sm text-slate-500 dark:text-gray-500">
<li><a className="hover:text-brand-600 dark:hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand-600 dark:hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-slate-900 dark:text-white" data-i18n="foot_social">מדיה</h4>
<div className="flex gap-4 text-slate-500 dark:text-gray-500">
<i className="w-5 h-5 hover:text-brand-600 dark:hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-5 h-5 hover:text-brand-600 dark:hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
<i className="w-5 h-5 hover:text-brand-600 dark:hover:text-white cursor-pointer transition-colors" data-lucide="facebook"></i>
</div>
</div>
</div>
</footer>



    </>
  );
}
