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



        // Generate Meteors
        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('meteors-container');
            const meteorCount = 20;

            for (let i = 0; i < meteorCount; i++) {
                const meteor = document.createElement('span');
                meteor.classList.add('meteor-effect');
                
                // Random positioning and delay
                meteor.style.top = Math.random() * 50 + '%'; // Start mostly from top half
                meteor.style.left = Math.random() * 120 + '%'; // Spread across width + overflow
                meteor.style.animationDelay = (Math.random() * 1 + 0.2) + 's';
                meteor.style.animationDuration = (Math.floor(Math.random() * 8) + 2) + 's';
                
                // Random width for variety
                const width = Math.floor(Math.random() * 80) + 40;
                meteor.style.width = width + 'px';

                container.appendChild(meteor);
            }
        });

        // Language Data
        const translations = {
            en: {
                nav_home: "Home",
                nav_about: "About",
                nav_services: "Services",
                nav_solutions: "Solutions",
                nav_contact: "Contact",
                btn_consult: "Request Consultation",
                btn_consult_hero: "Get Consultation",
                hero_badge: "Next-Gen Tech Partner",
                hero_subtitle: "We create IT solutions for businesses of any level. Scalable, secure, and intelligent technologies for your growth.",
                btn_explore: "Explore Services",
                about_title_1: "Built for Innovators,",
                about_title_2: "by Innovators.",
                about_text: "At Co-Innovator, we believe technology is the backbone of modern success. Our mission is to democratize access to enterprise-level IT infrastructure.",
                about_cert: "ISO 27001 Certified Security",
                about_clients: "500+ Clients Worldwide",
                team_header: "Leadership",
                services_title: "Core Services",
                services_subtitle: "Comprehensive technology stacks tailored for growth.",
                srv_1_title: "Custom IT Solutions",
                srv_1_text: "Bespoke software development and API integration designed to fit your unique workflow.",
                srv_2_title: "Cloud Services",
                srv_2_text: "AWS, Azure, and GCP migration, management, and cost-optimization strategies.",
                srv_3_title: "Cybersecurity",
                srv_3_text: "Vulnerability assessments, penetration testing, and real-time threat monitoring.",
                solutions_title: "Industry Solutions",
                sol_1_title: "Healthcare",
                sol_1_text: "HIPAA compliant cloud storage and patient management.",
                sol_2_title: "Finance",
                sol_2_text: "High-frequency trading infrastructure and secure banking APIs.",
                stack_title: "Technology Stack",
                stack_desc: "We leverage the most reliable and advanced tools in the industry.",
                contact_title: "Let's Build the Future",
                contact_sub: "Fill out the form below for a free consultation.",
                form_name: "Name",
                form_email: "Email",
                form_msg: "Message",
                form_btn: "Send Message",
                contact_details: "Contact Details"
            },
            uz: {
                nav_home: "Bosh sahifa",
                nav_about: "Biz haqimizda",
                nav_services: "Xizmatlar",
                nav_solutions: "Yechimlar",
                nav_contact: "Aloqa",
                btn_consult: "Konsultatsiya olish",
                btn_consult_hero: "Konsultatsiya olish",
                hero_badge: "Keyingi Avlod Texnologik Hamkori",
                hero_subtitle: "Biznesingizni har qanday darajasi uchun IT yechimlarini yaratamiz. O'sishingiz uchun masshtabli, xavfsiz va aqlli texnologiyalar.",
                btn_explore: "Xizmatlarni ko'rish",
                about_title_1: "Innovatorlar uchun,",
                about_title_2: "Innovatorlar tomonidan.",
                about_text: "Co-Innovator-da biz texnologiya zamonaviy muvaffaqiyatning asosi ekanligiga ishonamiz. Bizning vazifamiz korporativ darajadagi IT infratuzilmasiga kirishni ommalashtirishdir.",
                about_cert: "ISO 27001 Xavfsizlik Sertifikati",
                about_clients: "Dunyoda 500+ Mijozlar",
                team_header: "Rahbariyat",
                services_title: "Asosiy Xizmatlar",
                services_subtitle: "O'sish uchun moslashtirilgan keng qamrovli texnologik to'plamlar.",
                srv_1_title: "Maxsus IT Yechimlar",
                srv_1_text: "Noyob ish oqimingizga mos keladigan maxsus dasturiy ta'minot va API integratsiyasi.",
                srv_2_title: "Bulutli Xizmatlar",
                srv_2_text: "AWS, Azure va GCP migratsiyasi, boshqarish va xarajatlarni optimallashtirish strategiyalari.",
                srv_3_title: "Kiberxavfsizlik",
                srv_3_text: "Zaifliklarni baholash, penetratsion testlar va real vaqtda tahdidlarni kuzatish.",
                solutions_title: "Sanoat Yechimlari",
                sol_1_title: "Sog'liqni saqlash",
                sol_1_text: "HIPAA talablariga javob beradigan bulutli saqlash va bemorlarni boshqarish.",
                sol_2_title: "Moliya",
                sol_2_text: "Yuqori chastotali savdo infratuzilmasi va xavfsiz bank API'lari.",
                stack_title: "Texnologik Stek",
                stack_desc: "Biz sohadagi eng ishonchli va ilg'or vositalardan foydalanamiz.",
                contact_title: "Kelajakni quramiz",
                contact_sub: "Bepul konsultatsiya uchun quyidagi formani to'ldiring.",
                form_name: "Ism",
                form_email: "Email",
                form_msg: "Xabar",
                form_btn: "Xabar yuborish",
                contact_details: "Aloqa ma'lumotlari"
            },
            ru: {
                nav_home: "Главная",
                nav_about: "О нас",
                nav_services: "Услуги",
                nav_solutions: "Решения",
                nav_contact: "Контакты",
                btn_consult: "Заказать консультацию",
                btn_consult_hero: "Получить консультацию",
                hero_badge: "Ваш Технологический Партнер",
                hero_subtitle: "Мы создаём IT-решения для бизнеса любого уровня. Масштабируемость, безопасность и интеллектуальные технологии для вашего роста.",
                btn_explore: "Изучить услуги",
                about_title_1: "Создано для новаторов,",
                about_title_2: "самими новаторами.",
                about_text: "В Co-Innovator мы верим, что технологии — это основа современного успеха. Наша миссия — демократизировать доступ к IT-инфраструктуре корпоративного уровня.",
                about_cert: "Сертификат безопасности ISO 27001",
                about_clients: "500+ Клиентов по всему миру",
                team_header: "Руководство",
                services_title: "Основные услуги",
                services_subtitle: "Комплексные технологические стеки для роста.",
                srv_1_title: "Заказная разработка",
                srv_1_text: "Разработка ПО и интеграция API, разработанные под ваш уникальный рабочий процесс.",
                srv_2_title: "Облачные сервисы",
                srv_2_text: "Миграция AWS, Azure и GCP, управление и стратегии оптимизации затрат.",
                srv_3_title: "Кибербезопасность",
                srv_3_text: "Оценка уязвимостей, тестирование на проникновение и мониторинг угроз в реальном времени.",
                solutions_title: "Отраслевые решения",
                sol_1_title: "Здравоохранение",
                sol_1_text: "Облачное хранилище и управление пациентами по стандартам HIPAA.",
                sol_2_title: "Финансы",
                sol_2_text: "Инфраструктура высокочастотной торговли и безопасные банковские API.",
                stack_title: "Стек технологий",
                stack_desc: "Мы используем самые надежные и передовые инструменты в отрасли.",
                contact_title: "Давайте строить будущее",
                contact_sub: "Заполните форму ниже для бесплатной консультации.",
                form_name: "Имя",
                form_email: "Email",
                form_msg: "Сообщение",
                form_btn: "Отправить сообщение",
                contact_details: "Контактные данные"
            }
        };

        // UI Logic
        const langBtn = document.getElementById('langBtn');
        const langMenu = document.getElementById('langMenu');
        const currentLangSpan = document.getElementById('currentLang');

        // Toggle Dropdown
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('active');
        });

        // Close Dropdown when clicking outside
        document.addEventListener('click', () => {
            langMenu.classList.remove('active');
        });

        // Set Language Function
        function setLanguage(lang) {
            // Update button text
            currentLangSpan.textContent = lang.toUpperCase();
            
            // Update all text with data-i18n attribute
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    // Simple animation for text change
                    element.style.opacity = '0';
                    setTimeout(() => {
                        element.innerHTML = translations[lang][key]; // innerHTML allows HTML in translation (like <br>)
                        element.style.opacity = '1';
                    }, 200);
                }
            });

            // Persist preference
            localStorage.setItem('preferred_lang', lang);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                el.style.transition = 'opacity 0.2s ease';
            });
            
            // Note: Since user requested specific Russian text as default in design,
            // we default to English in logic but the HTML structure has the requested design.
            // If the user switches language, it will update.
            const savedLang = localStorage.getItem('preferred_lang') || 'en';
            if(savedLang !== 'en') {
                setLanguage(savedLang);
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
      

<header className="fixed top-0 w-full z-50 glass-nav border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white font-semibold text-lg tracking-tighter flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">C</div>
                CO-INNOVATOR
            </a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" data-i18n="nav_home" href="#home">Bosh sahifa</a>
<a className="hover:text-white transition-colors" data-i18n="nav_about" href="#about">Biz haqimizda</a>
<a className="hover:text-white transition-colors" data-i18n="nav_services" href="#services">Xizmatlar</a>
<a className="hover:text-white transition-colors" data-i18n="nav_solutions" href="#solutions">Yechimlar</a>
<a className="hover:text-white transition-colors" data-i18n="nav_contact" href="#contact">Aloqa</a>
</nav>

<div className="flex items-center gap-4">

<div className="relative group">
<button className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-full hover:bg-white/5 transition-colors" id="langBtn">
<iconify-icon icon="lucide:globe" width="16"></iconify-icon>
<span id="currentLang">UZ</span>
<iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</button>

<div className="lang-menu absolute top-full right-0 mt-2 w-32 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden z-50" id="langMenu">
<button className="w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-white/5 hover:text-white flex items-center gap-2" onclick="setLanguage('en')">
<span>🇺🇸</span> English
                        </button>
<button className="w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-white/5 hover:text-white flex items-center gap-2" onclick="setLanguage('uz')">
<span>🇺🇿</span> O'zbek
                        </button>
<button className="w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-white/5 hover:text-white flex items-center gap-2" onclick="setLanguage('ru')">
<span>🇷🇺</span> Русский
                        </button>
</div>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all duration-200 backdrop-blur-sm" data-i18n="btn_consult" href="#contact">Konsultatsiya olish</a>

<button aria-label="Menu" className="md:hidden text-white hover:text-cyan-400 transition-colors">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0f1a]" id="home">

<div className="absolute inset-0 overflow-hidden pointer-events-none z-0" id="meteors-container">

</div>

<div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-transparent to-[#0a0f1a] z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/50 via-transparent to-[#0a0f1a]/50 z-10 pointer-events-none"></div>

<div className="relative z-20 max-w-7xl mx-auto px-6 text-center pt-20">

<div className="animate-slide-up flex justify-center mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/20 backdrop-blur-md text-cyan-300 text-xs font-medium hover:bg-cyan-900/40 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span data-i18n="hero_badge">Next-Gen Tech Partner</span>
</div>
</div>

<h1 className="animate-slide-up delay-100 text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1] glow-text">
                Innovating Your Future<br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400">
                    with Smart IT Solutions
                </span>
</h1>

<p className="animate-slide-up delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light" data-i18n="hero_subtitle">
                Мы создаём IT-решения для бизнеса любого уровня. Масштабируемость, безопасность и интеллектуальные технологии для вашего роста.
            </p>

<div className="animate-slide-up delay-300 flex flex-col md:flex-row items-center justify-center gap-5">
<a className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden" href="#contact">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center gap-2">
<span data-i18n="btn_consult_hero">Получить консультацию</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
</span>
</a>
<a className="px-8 py-4 text-slate-300 bg-white/5 border border-white/10 font-medium text-sm rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm flex items-center gap-2" href="#services">
<span data-i18n="btn_explore">Xizmatlarni ko'rish</span>
</a>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-[#0a0f1a] relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-start">
<div className="">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">
<span data-i18n="about_title_1">Innovatorlar uchun,</span> <br/>
<span className="text-slate-500" data-i18n="about_title_2">Innovatorlar tomonidan.</span>
</h2>
<p className="text-slate-400 leading-relaxed mb-6" data-i18n="about_text">Co-Innovator-da biz texnologiya zamonaviy muvaffaqiyatning asosi ekanligiga ishonamiz. Bizning vazifamiz korporativ darajadagi IT infratuzilmasiga kirishni ommalashtirishdir.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-yellow-500" icon="lucide:award" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-slate-300" data-i18n="about_cert">ISO 27001 Xavfsizlik Sertifikati</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm text-slate-300" data-i18n="about_clients">Dunyoda 500+ Mijozlar</span>
</div>
</div>
</div>
<div className="">
<h3 className="text-sm font-medium text-white uppercase tracking-wider mb-6" data-i18n="team_header">Rahbariyat</h3>
<div className="grid grid-cols-2 gap-4">
<div className="group bg-slate-900/50 border border-white/5 p-4 rounded-xl hover:border-white/10 transition-all">
<div className="w-12 h-12 rounded-full bg-slate-800 mb-3 overflow-hidden">
<img alt="Team" className="group-hover:opacity-100 transition-opacity opacity-80 w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Sarah+Chen&amp;background=0f172a&amp;color=cbd5e1"/>
</div>
<h4 className="text-sm font-medium text-white">Aziza Turaeva</h4>
<p className="text-xs text-slate-500">CTO</p>
</div>
<div className="group bg-slate-900/50 border border-white/5 p-4 rounded-xl hover:border-white/10 transition-all">
<div className="w-12 h-12 rounded-full bg-slate-800 mb-3 overflow-hidden">
<img alt="Team" className="group-hover:opacity-100 transition-opacity opacity-80 w-full h-full object-cover" src="https://ui-avatars.com/api/?name=David+Ross&amp;background=0f172a&amp;color=cbd5e1"/>
</div>
<h4 className="text-sm font-medium text-white">Bakhrom Saidakbarkhodjaev</h4>
<p className="text-xs text-slate-500">Lead Architect</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0f1a]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center md:text-left">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4" data-i18n="services_title">Asosiy Xizmatlar</h2>
<p className="text-slate-400 max-w-xl" data-i18n="services_subtitle">O'sish uchun moslashtirilgan keng qamrovli texnologik to'plamlar.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 glass-panel hover:border-cyan-500/30 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/10">
<div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-cyan-400" icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2" data-i18n="srv_1_title">Maxsus IT Yechimlar</h3>
<p className="text-sm text-slate-400 mb-4" data-i18n="srv_1_text">Noyob ish oqimingizga mos keladigan maxsus dasturiy ta'minot va API integratsiyasi.</p>
</div>
<div className="group p-6 glass-panel hover:border-blue-500/30 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-400" icon="lucide:cloud-cog" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2" data-i18n="srv_2_title">Bulutli Xizmatlar</h3>
<p className="text-sm text-slate-400 mb-4" data-i18n="srv_2_text">AWS, Azure va GCP migratsiyasi, boshqarish va xarajatlarni optimallashtirish strategiyalari.</p>
</div>
<div className="group p-6 glass-panel hover:border-purple-500/30 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-400" icon="lucide:lock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2" data-i18n="srv_3_title">Kiberxavfsizlik</h3>
<p className="text-sm text-slate-400 mb-4" data-i18n="srv_3_text">Zaifliklarni baholash, penetratsion testlar va real vaqtda tahdidlarni kuzatish.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-b border-white/5 bg-slate-900/20" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 mb-20">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6" data-i18n="solutions_title">Sanoat Yechimlari</h2>
<ul className="space-y-4">
<li className="flex items-start gap-4 p-4 border border-white/5 rounded-xl bg-slate-950/50">
<iconify-icon className="text-cyan-400 mt-1" icon="lucide:stethoscope" width="20"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium" data-i18n="sol_1_title">Sog'liqni saqlash</h4>
<p className="text-xs text-slate-500 mt-1" data-i18n="sol_1_text">HIPAA talablariga javob beradigan bulutli saqlash va bemorlarni boshqarish.</p>
</div>
</li>
<li className="flex items-start gap-4 p-4 border border-white/5 rounded-xl bg-slate-950/50">
<iconify-icon className="text-cyan-400 mt-1" icon="lucide:landmark" width="20"></iconify-icon>
<div>
<h4 className="text-white text-sm font-medium" data-i18n="sol_2_title">Moliya</h4>
<p className="text-xs text-slate-500 mt-1" data-i18n="sol_2_text">Yuqori chastotali savdo infratuzilmasi va xavfsiz bank API'lari.</p>
</div>
</li>
</ul>
</div>
<div className="">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6" data-i18n="stack_title">Texnologik Stek</h2>
<p className="text-slate-400 mb-8 text-sm" data-i18n="stack_desc">Biz sohadagi eng ishonchli va ilg'or vositalardan foydalanamiz.</p>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">AWS</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Python</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">React</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Node.js</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Docker</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Kubernetes</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0f1a] pt-24 pb-24" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2" data-i18n="contact_title">Kelajakni quramiz</h2>
<p className="text-slate-400 mb-8 text-sm" data-i18n="contact_sub">Bepul konsultatsiya uchun quyidagi formani to'ldiring.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1" data-i18n="form_name">Ism</label>
<input className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-400 mb-1" data-i18n="form_email">Email</label>
<input className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-400 mb-1" data-i18n="form_msg">Xabar</label>
<textarea className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" rows="4"></textarea>
</div>
<button className="w-full py-3 bg-white text-slate-950 font-medium text-sm rounded-lg hover:bg-slate-200 transition-colors" data-i18n="form_btn" type="submit">Xabar yuborish</button>
</form>
</div>

<div className="space-y-8">
<div className="">
<h3 className="text-white font-medium mb-4" data-i18n="contact_details">Aloqa ma'lumotlari</h3>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
<span className="">co-innovator@gmail.com</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon>
<span className="">+989 90 1234844</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="" icon="lucide:map-pin" width="16"></iconify-icon>
<span className="">Tashkent, Uzbekistan</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0a0f1a] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 text-center md:text-left">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600">© 2023 Co-Innovator IT Services.</p>
<div className="flex items-center gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
