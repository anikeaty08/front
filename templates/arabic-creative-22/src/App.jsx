import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
'deep-space': '#050505',
'starlight-gold': '#D4AF37',
'glass-border': 'rgba(255, 255, 255, 0.1)',
},
fontFamily: {
sans: ['Almarai', 'sans-serif'],
display: ['Readex Pro', 'sans-serif'],
},
backgroundImage: {
'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 50%, #B38728 100%)',
},
animation: {
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 30s linear infinite',
}
}
}
}



        // Init Animation Library with improved easing
        AOS.init({
            once: true,
            duration: 1200,
            offset: 50,
            easing: 'ease-out-quart' // Smoother entry
        });

        // Improved Navbar Scroll Logic
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('py-2', 'bg-black/20', 'backdrop-blur-md');
                nav.classList.remove('py-6');
            } else {
                nav.classList.add('py-6');
                nav.classList.remove('py-2', 'bg-black/20', 'backdrop-blur-md');
            }
        });

        // --- FLUID MOTION ENGINE ---

        // 1. Fluid Mouse Glow (Linear Interpolation)
        const cursorGlow = document.getElementById('cursor-glow');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Lerp formula: current + (target - current) * speed
            // Lower speed = more "weight/fluidity"
            cursorX += (mouseX - cursorX) * 0.08; 
            cursorY += (mouseY - cursorY) * 0.08;
            
            cursorGlow.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // 2. Parallax Scroll Effect
        const parallaxBg = document.getElementById('parallax-bg');
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            // Move background slower than scroll speed
            parallaxBg.style.transform = `translateY(${scrollPos * 0.3}px)`;
        });

        // 3. Scroll-Based Day/Night Transition (Dawn Effect)
        const dawnLayer = document.getElementById('dawnLayer');
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            // Calculate opacity: 0 at top, max 0.8 at bottom
            const opacity = Math.min((scrollPos / maxScroll) * 0.8, 0.8);
            dawnLayer.style.opacity = opacity;
        });

        // --- FUNCTIONALITY (Unchanged) ---

        // WhatsApp Function
        function sendToWhatsApp(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const msg = document.getElementById('msg').value;
            
            const fullMsg = `السلام عليكم وكالة سهالة،%0Aاسمي: ${name}%0Aرقمي: ${phone}%0Aتفاصيل المشروع: ${msg}`;
            window.open(`https://wa.me/213542427638?text=${fullMsg}`, '_blank');
        }

        // Language Switcher
        let currentLang = 'ar';
        const translations = {
            ar: {
                logoText: "سهالة",
                navAbout: "عن الوكالة",
                navServices: "خدماتنا",
                navPortfolio: "المعرض",
                navContact: "اتصل بنا",
                heroTitle1: "مهندسو الفضاء",
                heroTitle2: "لعلامتك التجارية",
                heroDesc: "في وكالة سهالة، نؤمن بأن الإبداع لا سقف له. نبتكر حلولاً تتحدى الجاذبية، وتجعل علامتك التجارية تحلق بعيداً عن المنافسين في مدارها الخاص.",
                heroBtn1: "ابدأ رحلتك الكونية",
                heroBtn2: "شاهد أعمالنا",
                aboutTitle1: "رؤية تتجاوز",
                aboutTitle2: "المألوف",
                aboutText: "نحن وكالة تسويق إبداعية شاملة مقرها مكة المكرمة، نجمع بين عراقة الاسم وحداثة التنفيذ. لا نكتفي بالوصول للقمة، بل نسعى لأن تكون علامتك نجماً ساطعاً يُشار إليه بالبنان.",
                statClient: "عميل سعيد",
                statProject: "مشروع منجز",
                statCreative: "مبدع متخصص",
                portTitle: "معرض",
                portTitle2: "الأعمال",
                portSub: "تصفح ملفاتنا الإبداعية في مختلف المجالات. كل عمل هو قصة نجاح تحكي عن نفسها.",
                servicesTitle: "خدماتنا",
                servicesSub: "المتميزة",
                srvBrand: "الهوية البصرية",
                srvBrandDesc: "بناء علامات تجارية خالدة تبدأ من الشعار وتنتهي بانطباع لا ينسى.",
                srvVideo: "الإنتاج الفني",
                srvVideoDesc: "نروي قصتك بعدسات سينمائية، من الإعلانات التجارية إلى التغطيات.",
                srvMarketing: "التسويق الرقمي",
                srvMarketingDesc: "استراتيجيات ذكية وحملات إعلانية تصل لجمهورك المستهدف بدقة.",
                srvWeb: "تطوير الويب",
                srvWebDesc: "مواقع إلكترونية وتطبيقات تفاعلية تجمع بين الجمال والأداء العالي.",
                srvContent: "كتابة المحتوى",
                srvContentDesc: "نصوغ الأفكار بكلمات آسرة تلامس القلوب وتقنع العقول.",
                srvPrint: "المطبوعات",
                srvPrintDesc: "تصاميم طباعية فاخرة تعكس جودة علامتك في العالم الملموس.",
                ready: "هل أنت جاهز",
                launch: "للانطلاق؟",
                contactSub: "املأ النموذج، ودعنا نحدد مسارك نحو النجوم.",
                labelName: "الاسم الكريم",
                labelPhone: "رقم الهاتف",
                labelMsg: "حدثنا عن مشروعك...",
                btnSend: "إرسال الطلب",
                location: "مكة المكرمة، المملكة العربية السعودية"
            },
            en: {
                logoText: "Sahala",
                navAbout: "About",
                navServices: "Services",
                navPortfolio: "Portfolio",
                navContact: "Contact Us",
                heroTitle1: "Space Engineers",
                heroTitle2: "For Your Brand",
                heroDesc: "At Sahala Agency, we believe creativity has no ceiling. We create gravity-defying solutions that make your brand soar far above competitors in its own orbit.",
                heroBtn1: "Start Cosmic Journey",
                heroBtn2: "View Our Work",
                aboutTitle1: "Vision Beyond",
                aboutTitle2: "The Ordinary",
                aboutText: "We are a comprehensive creative marketing agency based in Makkah, combining traditional values with modern execution. We don't just reach the top; we aim for your brand to be a shining star.",
                statClient: "Happy Client",
                statProject: "Project Done",
                statCreative: "Creative Expert",
                portTitle: "Our",
                portTitle2: "Work",
                portSub: "Browse our creative files across various fields. Every piece is a success story.",
                servicesTitle: "Our",
                servicesSub: "Services",
                srvBrand: "Visual Identity",
                srvBrandDesc: "Building timeless brands starting from the logo to an unforgettable impression.",
                srvVideo: "Art Production",
                srvVideoDesc: "We tell your story with cinematic lenses, from commercials to coverage.",
                srvMarketing: "Digital Marketing",
                srvMarketingDesc: "Smart strategies and ad campaigns that precisely reach your target audience.",
                srvWeb: "Web Development",
                srvWebDesc: "Interactive websites and apps combining beauty with high performance.",
                srvContent: "Copywriting",
                srvContentDesc: "We craft ideas with captivating words that touch hearts and persuade minds.",
                srvPrint: "Printing",
                srvPrintDesc: "Luxury print designs reflecting your brand quality in the physical world.",
                ready: "Ready to",
                launch: "Launch?",
                contactSub: "Fill the form, and let's chart your course to the stars.",
                labelName: "Full Name",
                labelPhone: "Phone Number",
                labelMsg: "Tell us about your project...",
                btnSend: "Send Request",
                location: "Makkah, Saudi Arabia"
            }
        };

        function toggleLanguage() {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            document.getElementById('langLabel').textContent = currentLang === 'ar' ? 'English' : 'العربية';

            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if(translations[currentLang][key]) {
                    el.textContent = translations[currentLang][key];
                }
            });
        }

        // Copy Source Code Function
        function copySourceCode() {
            const htmlContent = document.documentElement.outerHTML;
            const fullCode = '<!DOCTYPE html>\n' + htmlContent;
            navigator.clipboard.writeText(fullCode).then(() => {
                alert("تم نسخ الكود بنجاح! يمكنك لصقه في ملف وحفظه باسم index.html");
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-glow" style={{transform: 'translate(0px, 0px) translate(-50%, -50%)'}}></div>

<div className="cinematic-bg" id="parallax-bg" style={{transform: 'translateY(2.7px)'}}>

<img alt="Black Sand Dunes &amp; Galaxy" className="absolute inset-0 w-full h-full object-cover animate-pulse-slow" go-data-src="/gen?prompt=majestic+black+volcanic+sand+dunes+landscape+foreground+under+deep+dark+space+starry+night+sky+milky+way+galaxy+background+cinematic+lighting+8k+ultra+realistic&amp;aspect=16:9" src="https://cdn.midjourney.com/cff72379-5e5b-4ebf-a0c4-9857636e1627/0_0.png"/>

<div className="bg-overlay"></div>
</div>

<div className="dawn-overlay" id="dawnLayer" style={{opacity: '0.00205714'}}></div>

<nav className="fixed w-full z-50 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)" id="navbar">
<div className="container mx-auto px-6 flex justify-between items-center apple-glass rounded-full max-w-6xl py-3">

<div className="flex items-center gap-3">
<img alt="Sahala Logo" className="w-10 h-10 object-contain rounded-full border border-starlight-gold/30" go-data-src="/gen?prompt=minimalist+luxury+logo+letter+S+gold+gradient+vector+style+on+black+background+no+text&amp;aspect=1:1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="text-white font-display font-bold text-xl tracking-wide" data-i18n="logoText">سهالة</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
<a className="hover:text-starlight-gold transition-colors duration-300" data-i18n="navAbout" href="#about">عن الوكالة</a>
<a className="hover:text-starlight-gold transition-colors duration-300" data-i18n="navServices" href="#services">خدماتنا</a>
<a className="hover:text-starlight-gold transition-colors duration-300" data-i18n="navPortfolio" href="#portfolio">المعرض</a>
<button className="flex items-center gap-1 text-starlight-gold font-bold hover:text-white transition-colors duration-300" onclick="toggleLanguage()">
<span className="material-symbols-outlined text-sm">language</span>
<span id="langLabel">English</span>
</button>
<a className="px-6 py-2 border border-starlight-gold/50 text-starlight-gold rounded-full hover:bg-starlight-gold hover:text-black transition-all duration-500 ease-out" data-i18n="navContact" href="#contact">اتصل بنا</a>
</div>

<button className="md:hidden text-starlight-gold" onclick="toggleLanguage()">
<span className="material-symbols-outlined">language</span>
</button>
</div>
</nav>

<header className="min-h-screen flex overflow-hidden text-center pr-4 pl-4 relative items-center justify-center">

<div className="absolute inset-0 w-full h-full z-0">
<img alt="Black Sand Dunes &amp; Galaxy" className="w-full h-full object-cover" go-data-src="/gen?prompt=majestic+black+volcanic+sand+dunes+landscape+foreground+under+deep+dark+space+starry+night+sky+milky+way+galaxy+background+cinematic+lighting+8k+ultra+realistic&amp;aspect=16:9" src="https://cdn.midjourney.com/0a61ff21-da57-48c9-99a3-f6798daf72e3/0_3.png"/>
<div className="absolute inset-0 bg-black/40"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto mt-20">
<div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full apple-glass aos-init aos-animate" data-aos="fade-down" data-aos-duration="1500">
<span className="w-1.5 h-1.5 rounded-full bg-starlight-gold animate-pulse"></span>
<span className="text-[10px] md:text-xs text-starlight-gold tracking-[0.3em] font-sans uppercase">EST. MAKKAH</span>
</div>
<h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight text-shadow-sm aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">
<span className="block text-white font-display font-thin mb-2 tracking-wide" data-i18n="heroTitle1">مهندسو الفضاء</span>
<span className="gold-text drop-shadow-2xl" data-i18n="heroTitle2">لعلامتك التجارية</span>
</h1>
<p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto mb-12 opacity-90 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400" data-i18n="heroDesc">
            في وكالة <span className="text-white font-bold">سهالة</span>، نؤمن بأن الإبداع لا سقف له.
            نبتكر حلولاً <span className="text-starlight-gold">تتحدى الجاذبية</span>، وتجعل علامتك التجارية <span className="text-starlight-gold">تحلق</span> بعيداً عن المنافسين في مدارها الخاص.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
<a className="group relative px-10 py-5 bg-starlight-gold text-deep-space font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]" href="#contact">
<span className="relative z-10 flex items-center gap-2"><span data-i18n="heroBtn1">ابدأ رحلتك الكونية</span> <span className="material-symbols-outlined text-lg rtl:rotate-180">rocket_launch</span></span>
<div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.19, 1, 0.22, 1)"></div>
</a>
<a className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group" href="#portfolio">
<span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-starlight-gold transition-colors duration-300">
<span className="material-symbols-outlined text-sm group-hover:animate-bounce">arrow_downward</span>
</span>
<span data-i18n="heroBtn2">شاهد أعمالنا</span>
</a>
</div>
</div>
</header>

<section className="py-24 relative" id="about">
<div className="container mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1 flex justify-center aos-init" data-aos="fade-right" data-aos-duration="1200">
<div className="w-72 h-72 md:w-96 md:h-96 relative animate-float">
<div className="absolute inset-0 bg-starlight-gold/10 rounded-full blur-[60px]"></div>
<img alt="Sahala Identity" className="w-full h-full object-contain relative z-10 drop-shadow-2xl" go-data-src="/gen?prompt=luxurious+3d+gold+letter+S+logo+floating+in+black+void+clean+elegant+3d+render+minimalist&amp;aspect=1:1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>

<div className="order-1 lg:order-2 aos-init" data-aos="fade-left" data-aos-duration="1200">
<span className="text-starlight-gold font-sans font-bold tracking-[0.2em] text-xs uppercase block mb-4">WHO WE ARE</span>
<h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
<span data-i18n="aboutTitle1">رؤية تتجاوز</span> <span className="gold-text" data-i18n="aboutTitle2">المألوف</span>
</h2>
<div className="space-y-6 text-gray-300 text-lg font-light leading-loose text-justify" data-i18n="aboutText">
<p className="">استلهمنا اسمنا من <span className="text-white font-bold">"سهيل"</span>، النجم اليماني اللامع الذي بشّر العرب قديماً بجلاء الظلمة وبداية المواسم المثمرة. وكما كان سهيل دليلاً للمسافرين عبر الصحاري والبحار، نكون نحن بوصلة علامتك التجارية في فضاء السوق المزدحم.</p>
<p className="border-r-2 rtl:border-r-2 ltr:border-l-2 rtl:border-l-0 ltr:border-r-0 border-starlight-gold pr-4 rtl:pr-4 ltr:pl-4">
                            نحن وكالة تسويق إبداعية شاملة مقرها مكة المكرمة، نجمع بين عراقة الاسم وحداثة التنفيذ. لا نكتفي بالوصول للقمة، بل نسعى لأن تكون علامتك نجماً ساطعاً يُشار إليه بالبنان.
                        </p>
</div>

<div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
<div className="text-center group cursor-default">
<span className="block text-3xl font-bold text-starlight-gold mb-1 font-display group-hover:scale-110 transition-transform duration-500">+150</span>
<span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest" data-i18n="statClient">عميل سعيد</span>
</div>
<div className="text-center border-r rtl:border-r ltr:border-l rtl:border-l-0 ltr:border-r-0 border-white/10 group cursor-default">
<span className="block text-3xl font-bold text-starlight-gold mb-1 font-display group-hover:scale-110 transition-transform duration-500">+500</span>
<span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest" data-i18n="statProject">مشروع منجز</span>
</div>
<div className="text-center border-r rtl:border-r ltr:border-l rtl:border-l-0 ltr:border-r-0 border-white/10 group cursor-default">
<span className="block text-3xl font-bold text-starlight-gold mb-1 font-display group-hover:scale-110 transition-transform duration-500">+12</span>
<span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest" data-i18n="statCreative">مبدع متخصص</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="container mx-auto px-6 relative z-10">
<div className="text-center mb-16 aos-init" data-aos="fade-up">
<h2 className="text-3xl font-bold text-white"><span data-i18n="servicesTitle">خدماتنا</span> <span className="text-gray-500 font-light" data-i18n="servicesSub">المتميزة</span></h2>
</div>
<div className="services-grid">

<div className="apple-glass rounded-3xl p-8 group hover:border-starlight-gold/50 cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="0">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-starlight-gold group-hover:text-black transition-colors duration-500 text-starlight-gold">
<span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform duration-500">diamond</span>
</div>
<h3 className="text-xl font-bold text-white mb-3" data-i18n="srvBrand">الهوية البصرية</h3>
<p className="text-gray-400 text-sm leading-relaxed" data-i18n="srvBrandDesc">بناء علامات تجارية خالدة تبدأ من الشعار وتنتهي بانطباع لا ينسى.</p>
</div>

<div className="apple-glass rounded-3xl p-8 group hover:border-starlight-gold/50 cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="100">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-starlight-gold group-hover:text-black transition-colors duration-500 text-starlight-gold">
<span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform duration-500">movie_filter</span>
</div>
<h3 className="text-xl font-bold text-white mb-3" data-i18n="srvVideo">الإنتاج الفني</h3>
<p className="text-gray-400 text-sm leading-relaxed" data-i18n="srvVideoDesc">نروي قصتك بعدسات سينمائية، من الإعلانات التجارية إلى التغطيات.</p>
</div>

<div className="apple-glass rounded-3xl p-8 group hover:border-starlight-gold/50 cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="200">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-starlight-gold group-hover:text-black transition-colors duration-500 text-starlight-gold">
<span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform duration-500">campaign</span>
</div>
<h3 className="text-xl font-bold text-white mb-3" data-i18n="srvMarketing">التسويق الرقمي</h3>
<p className="text-gray-400 text-sm leading-relaxed" data-i18n="srvMarketingDesc">استراتيجيات ذكية وحملات إعلانية تصل لجمهورك المستهدف بدقة.</p>
</div>

<div className="apple-glass rounded-3xl p-8 group hover:border-starlight-gold/50 cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="300">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-starlight-gold group-hover:text-black transition-colors duration-500 text-starlight-gold">
<span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform duration-500">code</span>
</div>
<h3 className="text-xl font-bold text-white mb-3" data-i18n="srvWeb">تطوير الويب</h3>
<p className="text-gray-400 text-sm leading-relaxed" data-i18n="srvWebDesc">مواقع إلكترونية وتطبيقات تفاعلية تجمع بين الجمال والأداء العالي.</p>
</div>

<div className="apple-glass rounded-3xl p-8 group hover:border-starlight-gold/50 cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="400">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-starlight-gold group-hover:text-black transition-colors duration-500 text-starlight-gold">
<span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform duration-500">edit_note</span>
</div>
<h3 className="text-xl font-bold text-white mb-3" data-i18n="srvContent">كتابة المحتوى</h3>
<p className="text-gray-400 text-sm leading-relaxed" data-i18n="srvContentDesc">نصوغ الأفكار بكلمات آسرة تلامس القلوب وتقنع العقول.</p>
</div>

<div className="apple-glass rounded-3xl p-8 group hover:border-starlight-gold/50 cursor-pointer aos-init" data-aos="fade-up" data-aos-delay="500">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-starlight-gold group-hover:text-black transition-colors duration-500 text-starlight-gold">
<span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform duration-500">print</span>
</div>
<h3 className="text-xl font-bold text-white mb-3" data-i18n="srvPrint">المطبوعات</h3>
<p className="text-gray-400 text-sm leading-relaxed" data-i18n="srvPrintDesc">تصاميم طباعية فاخرة تعكس جودة علامتك في العالم الملموس.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5" id="portfolio">
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 aos-init" data-aos="fade-up">
<div>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-2"><span data-i18n="portTitle">معرض</span> <span className="gold-text" data-i18n="portTitle2">الأعمال</span></h2>
<p className="text-gray-400 font-light mt-4 max-w-2xl" data-i18n="portSub">تصفح ملفاتنا الإبداعية في مختلف المجالات. كل عمل هو قصة نجاح تحكي عن نفسها.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group relative aspect-[4/3] rounded-3xl overflow-hidden apple-glass border-0 cursor-pointer img-zoom-container aos-init" data-aos="fade-up" data-aos-delay="0" href="#">
<img alt="Branding" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60" go-data-src="/gen?prompt=luxury+branding+identity+mockup+black+paper+gold+foil+logo+minimalist+elegant+stationery&amp;aspect=4:3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold text-starlight-gold uppercase tracking-widest">Branding</span>
<span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-180">arrow_outward</span>
</div>
<h3 className="text-2xl font-bold text-white" data-i18n="srvBrand">الهوية البصرية</h3>
</div>
</a>

<a className="group relative aspect-[4/3] rounded-3xl overflow-hidden apple-glass border-0 cursor-pointer img-zoom-container aos-init" data-aos="fade-up" data-aos-delay="100" href="#">
<img alt="Video" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60" go-data-src="/gen?prompt=professional+cinema+camera+filming+set+behind+the+scenes+dark+moody+lighting+blue+and+orange+tones&amp;aspect=4:3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-90"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
<span className="material-symbols-outlined text-white text-5xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">play_circle</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)">
<span className="text-xs font-bold text-starlight-gold uppercase tracking-widest mb-1 block">Production</span>
<h3 className="text-2xl font-bold text-white" data-i18n="srvVideo">الإنتاج الفني</h3>
</div>
</a>

<a className="group relative aspect-[4/3] rounded-3xl overflow-hidden apple-glass border-0 cursor-pointer img-zoom-container aos-init" data-aos="fade-up" data-aos-delay="200" href="#">
<img alt="Web" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60" go-data-src="/gen?prompt=futuristic+ui+ux+design+dashboard+on+curved+monitor+dark+mode+neon+accents+3d+render&amp;aspect=4:3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold text-starlight-gold uppercase tracking-widest">Digital</span>
<span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-180">arrow_outward</span>
</div>
<h3 className="text-2xl font-bold text-white" data-i18n="srvWeb">المواقع والتطبيقات</h3>
</div>
</a>

<a className="group relative aspect-[4/3] rounded-3xl overflow-hidden apple-glass border-0 cursor-pointer img-zoom-container aos-init" data-aos="fade-up" data-aos-delay="300" href="#">
<img alt="Social" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60" go-data-src="/gen?prompt=creative+social+media+feed+layout+grid+colorful+modern+design+on+smartphone+screen+3d&amp;aspect=4:3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold text-starlight-gold uppercase tracking-widest">Marketing</span>
<span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-180">arrow_outward</span>
</div>
<h3 className="text-2xl font-bold text-white" data-i18n="srvMarketing">إدارة الحسابات</h3>
</div>
</a>

<a className="group relative aspect-[4/3] rounded-3xl overflow-hidden apple-glass border-0 cursor-pointer img-zoom-container aos-init" data-aos="fade-up" data-aos-delay="400" href="#">
<img alt="Events" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60" go-data-src="/gen?prompt=event+photography+concert+lights+audience+silhouette+professional+camera+shot&amp;aspect=4:3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold text-starlight-gold uppercase tracking-widest">Coverage</span>
<span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-180">arrow_outward</span>
</div>
<h3 className="text-2xl font-bold text-white" data-i18n="srvPhoto">التغطيات والفعاليات</h3>
</div>
</a>

<a className="group relative aspect-[4/3] rounded-3xl overflow-hidden apple-glass border-0 cursor-pointer img-zoom-container aos-init" data-aos="fade-up" data-aos-delay="500" href="#">
<img alt="Writing" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60" go-data-src="/gen?prompt=typewriter+keys+close+up+gold+letters+on+black+background+creative+writing+concept+magical+sparkles&amp;aspect=4:3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold text-starlight-gold uppercase tracking-widest">Copywriting</span>
<span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-180">arrow_outward</span>
</div>
<h3 className="text-2xl font-bold text-white" data-i18n="srvContent">كتابة المحتوى</h3>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-4xl mx-auto apple-glass p-10 md:p-16 rounded-[3rem]">
<div className="text-center mb-12 aos-init" data-aos="fade-up">
<h2 className="text-4xl font-bold text-white mb-4"><span data-i18n="ready">هل أنت جاهز</span> <span className="gold-text" data-i18n="launch">للانطلاق؟</span></h2>
<p className="text-gray-400 font-light" data-i18n="contactSub">املأ النموذج، ودعنا نحدد مسارك نحو النجوم.</p>
</div>
<form className="space-y-8" id="whatsappForm" onsubmit="sendToWhatsApp(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="relative group">
<input className="w-full bg-transparent border-b border-gray-700 text-white py-4 px-2 focus:outline-none focus:border-starlight-gold transition-colors font-light placeholder-transparent peer" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute right-0 -top-3 text-xs text-starlight-gold transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base cursor-text pointer-events-none" data-i18n="labelName" htmlFor="name">الاسم الكريم</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-gray-700 text-white py-4 px-2 focus:outline-none focus:border-starlight-gold transition-colors font-light placeholder-transparent peer" id="phone" placeholder="Phone" required="" type="tel"/>
<label className="absolute right-0 -top-3 text-xs text-starlight-gold transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base cursor-text pointer-events-none" data-i18n="labelPhone" htmlFor="phone">رقم الهاتف</label>
</div>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-gray-700 text-white py-4 px-2 focus:outline-none focus:border-starlight-gold transition-colors font-light h-32 resize-none placeholder-transparent peer" id="msg" placeholder="Message"></textarea>
<label className="absolute right-0 -top-3 text-xs text-starlight-gold transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base cursor-text pointer-events-none" data-i18n="labelMsg" htmlFor="msg">حدثنا عن مشروعك...</label>
</div>
<div className="text-center pt-6">
<button className="group relative px-12 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:bg-starlight-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]" type="submit">
<span className="relative z-10 flex items-center gap-2 justify-center"><span data-i18n="btnSend">إرسال الطلب</span> <span className="material-symbols-outlined">send</span></span>
</button>
</div>
</form>
<div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-center md:text-right text-gray-400 text-sm">
<div>
<p className="font-bold text-white mb-1" data-i18n="logoText">وكالة سهالة</p>
<p data-i18n="location">مكة المكرمة، المملكة العربية السعودية</p>
</div>
<div className="flex gap-6 mt-4 md:mt-0 items-center">
<a className="hover:text-starlight-gold transition-colors font-bold" href="https://www.instagram.com/sahala.agency/" target="_blank">Instagram</a>
<a className="hover:text-starlight-gold transition-colors font-bold" href="https://www.linkedin.com/company/sahala-agency" target="_blank">LinkedIn</a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-8 text-center text-gray-700 text-[10px] tracking-widest uppercase border-t border-white/5">
        © 2025 SAHALA AGENCY. All Rights Reserved.
    </footer>

<div className="dev-tool">
</div>




    </>
  );
}
