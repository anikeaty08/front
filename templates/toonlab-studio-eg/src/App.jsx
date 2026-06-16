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
sans: ['Tajawal', 'Inter', 'sans-serif'],
display: ['Cairo', 'Poppins', 'sans-serif'],
'english-sans': ['Inter', 'sans-serif'],
'english-display': ['Poppins', 'sans-serif'],
},
colors: {
brand: {
blue: '#3B82F6',
orange: '#F97316',
purple: '#8B5CF6',
surface: '#0B1121',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #3B82F6 0deg, #F97316 180deg, #3B82F6 360deg)',
},
animation: {
'float': 'float 8s ease-in-out infinite',
'float-delayed': 'float 8s ease-in-out infinite 4s',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'blob': 'blob 7s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        lucide.createIcons();

        const translations = {
            ar: {
                nav_home: "الرئيسية",
                nav_about: "من نحن",
                nav_services: "خدماتنا",
                nav_works: "أعمالنا",
                hero_badge: "استوديو رسوم متحركة إحترافي",
                hero_title_1: "نحوّل الخيال إلى",
                hero_title_2: "واقع مرئي مذهل",
                hero_sub: "نبتكر شخصيات لا تُنسى وقصصاً تأسر القلوب. من الاسكتش الأول وحتى المشهد الأخير، نضمن لك جودة عالمية تليق بعلامتك التجارية.",
                cta_primary: "ابدأ مشروعك الآن",
                cta_secondary: "شاهد أعمالنا",
                trusted_text: "موثوق من قبل +100 عميل",
                services_tag: "ماذا نقدم",
                services_title: "حلول إبداعية متكاملة",
                services_sub: "نجمع بين الفن والتكنولوجيا لنقدم لك خدمات تغطي كافة مراحل الإنتاج، من الفكرة وحتى النشر.",
                serv_1_title: "أنيميشن إعلاني",
                serv_1_desc: "ننتج إعلانات كرتونية جذابة تشرح منتجك أو خدمتك بأسلوب مبسط يزيد من معدلات التحويل والمبيعات.",
                serv_2_title: "تصميم الشخصيات",
                serv_2_desc: "نبتكر شخصيات (Mascots) فريدة تمثل صوت علامتك التجارية وتخلق رابطاً عاطفياً مع جمهورك.",
                serv_3_title: "موشن جرافيك",
                serv_3_desc: "تحريك البيانات والنصوص بأسلوب انسيابي وعصري، مثالي للفيديوهات التعليمية وعروض الشركات.",
                about_title: "أكثر من مجرد تحريك",
                about_text: "نحن نؤمن بأن كل علامة تجارية لديها قصة تستحق أن تُروى. في ToonLab، نستخدم قوة السرد القصصي البصري لتحويل المشاهدين إلى عملاء دائمين.",
                stat_projects: "مشروع",
                stat_satisfaction: "رضا العملاء",
                stat_exp: "خبرة",
                stat_support: "دعم",
                portfolio_tag: "معرض الأعمال",
                portfolio_title: "إبداعات حديثة",
                view_all: "مشاهدة المزيد",
                contact_title: "جاهز لتحريك علامتك التجارية؟",
                contact_sub: "دعنا نحول أفكارك إلى محتوى بصري يجذب الأنظار ويحقق النتائج.",
                contact_wa_label: "تواصل عبر واتساب",
                btn_lang: "English"
            },
            en: {
                nav_home: "Home",
                nav_about: "About",
                nav_services: "Services",
                nav_works: "Work",
                hero_badge: "Professional Animation Studio",
                hero_title_1: "Turning Imagination",
                hero_title_2: "Into Visual Reality",
                hero_sub: "We create unforgettable characters and captivating stories. From the first sketch to the final scene, we ensure world-class quality befitting your brand.",
                cta_primary: "Start Project",
                cta_secondary: "View Work",
                trusted_text: "Trusted by +100 Clients",
                services_tag: "What We Do",
                services_title: "Integrated Creative Solutions",
                services_sub: "Combining art and technology to cover all production stages, from concept to publishing.",
                serv_1_title: "Commercial Animation",
                serv_1_desc: "We produce engaging cartoon ads that explain your product or service simply to boost conversion and sales.",
                serv_2_title: "Character Design",
                serv_2_desc: "Creating unique Mascots that represent your brand voice and build an emotional bond with your audience.",
                serv_3_title: "Motion Graphics",
                serv_3_desc: "Animating data and text in a smooth, modern style, perfect for educational videos and corporate presentations.",
                about_title: "More Than Animation",
                about_text: "We believe every brand has a story worth telling. At ToonLab, we use visual storytelling power to turn viewers into loyal customers.",
                stat_projects: "Projects",
                stat_satisfaction: "Satisfaction",
                stat_exp: "Experience",
                stat_support: "Support",
                portfolio_tag: "Portfolio",
                portfolio_title: "Recent Works",
                view_all: "View All",
                contact_title: "Ready to animate your brand?",
                contact_sub: "Let's turn your ideas into visual content that grabs attention and delivers results.",
                contact_wa_label: "Chat on WhatsApp",
                btn_lang: "العربية"
            }
        };

        const langToggle = document.getElementById('lang-toggle');
        const currentLangSpan = document.getElementById('current-lang');
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        let currentLang = 'ar';
        let isDark = localStorage.getItem('theme') === 'dark';

        // Init Theme
        if (isDark) html.classList.add('dark');

        function updateFonts(lang) {
            if(lang === 'en') {
                document.body.classList.remove('font-sans'); 
                document.body.classList.add('font-english-sans');
                
                document.querySelectorAll('.font-display').forEach(el => {
                    el.classList.remove('font-display');
                    el.classList.add('font-english-display');
                });
            } else {
                document.body.classList.remove('font-english-sans');
                document.body.classList.add('font-sans');

                document.querySelectorAll('.font-english-display').forEach(el => {
                    el.classList.remove('font-english-display');
                    el.classList.add('font-display');
                });
            }
        }

        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            html.setAttribute('lang', currentLang);
            html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
            
            // Translate
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.innerText = translations[currentLang][key];
                }
            });

            currentLangSpan.textContent = translations[currentLang].btn_lang;
            updateFonts(currentLang);
        });

        themeToggle.addEventListener('click', () => {
            isDark = !isDark;
            html.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 10) {
                nav.classList.add('shadow-sm');
            } else {
                nav.classList.remove('shadow-sm');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300" id="navbar">
<div className="flex h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="absolute inset-0 glass-panel border-b border-slate-200/50 dark:border-slate-800/50 -z-10"></div>

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-10 h-10 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-orange rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center">
<svg className="lucide lucide-clapperboard w-5 h-5 text-brand-blue" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</div>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-display">ToonLab</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md">
<a className="px-5 py-2 text-sm font-medium rounded-full text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm hover:text-brand-blue transition-all" data-i18n="nav_home" href="#home">الرئيسية</a>
<a className="px-5 py-2 text-sm font-medium rounded-full text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm hover:text-brand-blue transition-all" data-i18n="nav_about" href="#about">من نحن</a>
<a className="px-5 py-2 text-sm font-medium rounded-full text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm hover:text-brand-blue transition-all" data-i18n="nav_services" href="#services">خدماتنا</a>
<a className="px-5 py-2 text-sm font-medium rounded-full text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm hover:text-brand-blue transition-all" data-i18n="nav_works" href="#portfolio">أعمالنا</a>
</div>

<div className="flex items-center gap-3">

<button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" id="theme-toggle">
<svg className="lucide lucide-moon w-4 h-4 hidden dark:block" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<svg className="lucide lucide-sun w-4 h-4 block dark:hidden" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</button>

<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-xs font-semibold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700" id="lang-toggle">
<svg className="lucide lucide-languages w-3.5 h-3.5" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
<span className="" id="current-lang">English</span>
</button>

<button className="md:hidden w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-40 pb-20 relative" id="home">

<div className="absolute top-0 right-1/4 -z-10 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl animate-blob mix-blend-multiply dark:mix-blend-lighten"></div>
<div className="absolute top-0 left-1/4 -z-10 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-lighten"></div>
<div className="absolute -bottom-32 left-1/2 -z-10 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-lighten"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="text-right rtl:text-right ltr:text-left space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
</span>
<span className="text-xs font-bold text-slate-700 dark:text-slate-200 tracking-wide uppercase" data-i18n="hero_badge">استوديو رسوم متحركة إحترافي</span>
</div>
<h1 className="text-5xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
<span data-i18n="hero_title_1">نحوّل الخيال إلى</span><br/>
<span className="text-gradient" data-i18n="hero_title_2">واقع مرئي مذهل</span>
</h1>
<p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-normal" data-i18n="hero_sub">
                    نبتكر شخصيات لا تُنسى وقصصاً تأسر القلوب. من الاسكتش الأول وحتى المشهد الأخير، نضمن لك جودة عالمية تليق بعلامتك التجارية.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2 relative z-20">
<a className="group btn-primary px-8 py-4 flex items-center justify-center gap-3" href="https://api.whatsapp.com/send?phone=201068120270" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="" data-i18n="cta_primary">ابدأ مشروعك الآن</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
</a>
<a className="px-8 py-4 rounded-full font-semibold text-slate-700 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2" href="#portfolio">
<span className="" data-i18n="cta_secondary">شاهد أعمالنا</span>
<svg className="lucide lucide-play-circle w-5 h-5 opacity-60" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
</div>

<div className="pt-8 flex items-center gap-4 text-sm text-slate-500 font-medium">
<div className="flex -space-x-2 space-x-reverse rtl:space-x-reverse ltr:space-x-reverse">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white dark:border-slate-900"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white dark:border-slate-900"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white dark:border-slate-900"></div>
</div>
<span data-i18n="trusted_text">موثوق من قبل +100 عميل</span>
</div>
</div>

<div className="relative lg:h-[650px] w-full flex items-center justify-center perspective-1000">

<div className="relative w-full aspect-square max-w-[550px] animate-float">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/30 to-brand-orange/30 rounded-[3rem] blur-2xl transform rotate-6 scale-95 opacity-60"></div>
<div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 group">

<img alt="3D Animation" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-slate-900/40 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-8 left-8 rtl:left-8 ltr:right-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 animate-[float_6s_ease-in-out_infinite_1s]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Quality</p>
<p className="text-sm font-bold text-slate-900 dark:text-white">4K Rendering</p>
</div>
</div>
</div>
<div className="absolute bottom-10 right-10 rtl:right-10 ltr:left-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 animate-[float_7s_ease-in-out_infinite_2s] max-w-[180px]">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="text-xs font-bold text-slate-500">Live Render</span>
</div>
<div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-brand-blue h-full w-[85%] rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-500 font-mono">
<span>Rendering...</span>
<span>85%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-brand-blue font-semibold tracking-wider text-sm uppercase mb-3 block" data-i18n="services_tag">ماذا نقدم</span>
<h2 className="lg:text-5xl dark:text-white text-4xl font-bold text-slate-900 font-display mb-6" data-i18n="services_title">حلول إبداعية متكاملة</h2>
<p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed" data-i18n="services_sub">
                    نجمع بين الفن والتكنولوجيا لنقدم لك خدمات تغطي كافة مراحل الإنتاج، من الفكرة وحتى النشر.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/5 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-video w-7 h-7" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display" data-i18n="serv_1_title">أنيميشن إعلاني</h3>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed" data-i18n="serv_1_desc">ننتج إعلانات كرتونية جذابة تشرح منتجك أو خدمتك بأسلوب مبسط يزيد من معدلات التحويل والمبيعات.</p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange/5 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 text-brand-orange rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-pen-tool w-7 h-7" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display" data-i18n="serv_2_title">تصميم الشخصيات</h3>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed" data-i18n="serv_2_desc">نبتكر شخصيات (Mascots) فريدة تمثل صوت علامتك التجارية وتخلق رابطاً عاطفياً مع جمهورك.</p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/5 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
<svg className="lucide lucide-layers w-7 h-7" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display" data-i18n="serv_3_title">موشن جرافيك</h3>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed" data-i18n="serv_3_desc">تحريك البيانات والنصوص بأسلوب انسيابي وعصري، مثالي للفيديوهات التعليمية وعروض الشركات.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="about">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-20"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl lg:text-5xl font-display font-bold mb-6" data-i18n="about_title">أكثر من مجرد تحريك</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed font-light" data-i18n="about_text">
                        نحن نؤمن بأن كل علامة تجارية لديها قصة تستحق أن تُروى. في ToonLab، نستخدم قوة السرد القصصي البصري لتحويل المشاهدين إلى عملاء دائمين.
                    </p>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
<svg className="lucide lucide-clock w-5 h-5 text-brand-orange" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm font-medium">تسليم سريع</span>
</div>
<div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
<svg className="lucide lucide-award w-5 h-5 text-brand-blue" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-sm font-medium">جودة مضمونة</span>
</div>
<div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
<svg className="lucide lucide-headphones w-5 h-5 text-purple-500" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<span className="text-sm font-medium">دعم مستمر</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors text-center">
<div className="text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500 mb-1">+500</div>
<div className="text-xs text-slate-400 uppercase tracking-widest" data-i18n="stat_projects">مشروع</div>
</div>
<div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors text-center translate-y-8">
<div className="text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400 mb-1">98%</div>
<div className="text-xs text-slate-400 uppercase tracking-widest" data-i18n="stat_satisfaction">رضا العملاء</div>
</div>
<div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors text-center">
<div className="text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-1">5Y</div>
<div className="text-xs text-slate-400 uppercase tracking-widest" data-i18n="stat_exp">خبرة</div>
</div>
<div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors text-center translate-y-8">
<div className="text-4xl font-bold font-display text-white mb-1">24/7</div>
<div className="text-xs text-slate-400 uppercase tracking-widest" data-i18n="stat_support">دعم</div>
</div>
</div>
</div>
</div>
</section>

<section className="dark:bg-[#0B1121] dark:border-slate-800 bg-slate-50 border-slate-200 border-t pt-24 pb-24" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-brand-orange font-semibold tracking-wider text-sm uppercase mb-2 block" data-i18n="portfolio_tag">معرض الأعمال</span>
<h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white" data-i18n="portfolio_title">إبداعات حديثة</h2>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:border-brand-blue dark:hover:border-brand-blue transition-colors group" href="#contact">
<span data-i18n="view_all">مشاهدة المزيد</span>
<svg className="lucide lucide-arrow-right w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="group relative md:col-span-2 rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-white bg-brand-blue/90 rounded-full backdrop-blur-sm">Character Design</span>
<h3 className="text-2xl font-bold text-white mb-2">The Magic World</h3>
<p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">3D Character Animation &amp; Environment Design</p>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
<svg className="lucide lucide-play w-6 h-6 fill-current ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-xl font-bold text-white">Neon City</h3>
<p className="text-slate-300 text-xs mt-1">Motion Graphics</p>
</div>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-xl font-bold text-white">Abstract Flow</h3>
<p className="text-slate-300 text-xs mt-1">3D Simulation</p>
</div>
</div>
</div>

<div className="group relative md:col-span-2 rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer">
<img alt="Project 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-white bg-brand-orange/90 rounded-full backdrop-blur-sm">Commercial</span>
<h3 className="text-2xl font-bold text-white mb-2">Tech Future</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 rounded-full blur-3xl -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tight" data-i18n="contact_title">جاهز لتحريك علامتك التجارية؟</h2>
<p className="text-xl text-slate-600 dark:text-slate-400 mb-12 font-light" data-i18n="contact_sub">دعنا نحول أفكارك إلى محتوى بصري يجذب الأنظار ويحقق النتائج.</p>
<div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border border-slate-100 dark:border-slate-800 inline-block w-full max-w-lg mx-auto relative z-20">
<a className="flex items-center justify-between p-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-[2rem] transition-all group overflow-hidden relative" href="https://api.whatsapp.com/send?phone=201068120270" rel="noopener noreferrer" target="_blank">
<div className="relative z-10 flex items-center gap-4">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-message-circle w-6 h-6 fill-current" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div className="text-right rtl:text-right ltr:text-left">
<p className="text-sm font-medium opacity-90" data-i18n="contact_wa_label">تواصل عبر واتساب</p>
<p className="text-2xl font-bold font-mono tracking-wider dir-ltr">+20 106 812 0270</p>
</div>
</div>
<div className="relative z-10">
<svg className="lucide lucide-arrow-left w-6 h-6 rtl:rotate-0 ltr:rotate-180 group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</div>

<div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out] pointer-events-none"></div>
</a>
</div>
<div className="mt-12 flex justify-center gap-6">
<a className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all hover:-translate-y-1" href="https://www.facebook.com/profile.php?id=61585850278883">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all hover:-translate-y-1" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all hover:-translate-y-1" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</section>

<footer className="py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1121]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-slate-900">
<svg className="lucide lucide-clapperboard w-4 h-4" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</div>
<span className="text-lg font-bold font-display text-slate-900 dark:text-white">ToonLab</span>
</div>
<p className="text-slate-500 text-sm font-medium">© 2024 ToonLab Studio. All rights reserved.</p>
</div>
</footer>

<a className="fixed bottom-6 right-6 rtl:right-6 ltr:left-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/30 hover:scale-110 transition-all duration-300" href="https://api.whatsapp.com/send?phone=201068120270" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-message-circle w-7 h-7 fill-current" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>



    </>
  );
}
