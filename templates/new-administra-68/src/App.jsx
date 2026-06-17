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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // --- Bilingual Logic ---
        function initLanguage() {
            const savedLang = localStorage.getItem('appLang') || 'en';
            applyLanguage(savedLang);
        }

        function toggleLanguage() {
            const htmlTag = document.documentElement;
            const currentLang = htmlTag.getAttribute('lang') || 'en';
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            applyLanguage(newLang);
        }

        function applyLanguage(lang) {
            const htmlTag = document.documentElement;
            const dir = lang === 'ar' ? 'rtl' : 'ltr';
            
            htmlTag.setAttribute('dir', dir);
            htmlTag.setAttribute('lang', lang);
            localStorage.setItem('appLang', lang);
            
            // Update Toggle Button Texts
            const displayLangText = lang === 'ar' ? 'EN' : 'AR';
            const langTextEl = document.getElementById('lang-text');
            const portalLangTextEl = document.getElementById('portal-lang-text');
            
            if (langTextEl) langTextEl.innerText = displayLangText;
            if (portalLangTextEl) portalLangTextEl.innerText = displayLangText;
            
            // Update all translated elements
            document.querySelectorAll('[data-en]').forEach(el => {
                const text = el.getAttribute(`data-${lang}`);
                if (text) el.innerHTML = text;
            });
            
            // Update all placeholders
            document.querySelectorAll('[data-en-placeholder]').forEach(el => {
                const placeholderText = el.getAttribute(`data-${lang}-placeholder`);
                if (placeholderText) el.setAttribute('placeholder', placeholderText);
            });
        }

        // Initialize language immediately
        document.addEventListener('DOMContentLoaded', initLanguage);


        // --- Portal Logic ---
        function openLoginPortal() {
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            const portal = document.getElementById('login-portal');
            portal.classList.remove('hidden');
            portal.classList.add('flex');
            
            // Subtle fade-in animation
            portal.style.opacity = '0';
            setTimeout(() => {
                portal.style.transition = 'opacity 0.3s ease';
                portal.style.opacity = '1';
            }, 10);
        }

        function closeLoginPortal() {
            document.body.style.overflow = '';
            const portal = document.getElementById('login-portal');
            portal.style.opacity = '0';
            setTimeout(() => {
                portal.classList.add('hidden');
                portal.classList.remove('flex');
            }, 300);
        }

        function handleSecureLogin(event) {
            event.preventDefault();
            const btn = document.getElementById('loginSubmitBtn');
            const btnText = document.getElementById('loginBtnText');
            const btnIcon = document.getElementById('loginBtnIcon');
            const isAr = document.documentElement.lang === 'ar';
            
            // Simulation of validation/loading
            btn.disabled = true;
            btnText.innerText = isAr ? 'جاري التحقق...' : 'Authenticating...';
            btnIcon.setAttribute('icon', 'solar:refresh-linear');
            btnIcon.classList.add('animate-spin');
            
            setTimeout(() => {
                // Success route
                btn.disabled = false;
                btnIcon.classList.remove('animate-spin');
                
                closeLoginPortal();
                
                // Hide main content and footer, show dashboard
                document.getElementById('main-content').classList.add('hidden');
                document.querySelector('footer').classList.add('hidden');
                document.querySelector('nav').classList.add('hidden');
                document.getElementById('admin-dashboard').classList.remove('hidden');
                window.scrollTo(0,0);
                
                // Reset button state
                btnText.innerText = isAr ? 'تسجيل الدخول للوحة التحكم' : 'Sign in to Dashboard';
                btnIcon.setAttribute('icon', 'solar:login-2-linear');
                document.getElementById('loginForm').reset();
            }, 1500);
        }

        function logout() {
            document.getElementById('admin-dashboard').classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            document.querySelector('footer').classList.remove('hidden');
            document.querySelector('nav').classList.remove('hidden');
            window.scrollTo(0,0);
        }

        // --- Search Logic ---
        function filterResearch() {
            const input = document.getElementById('researchSearch').value.toLowerCase();
            const items = document.querySelectorAll('.research-item');
            
            items.forEach(item => {
                const keywords = item.getAttribute('data-keywords').toLowerCase();
                const text = item.innerText.toLowerCase();
                
                if (keywords.includes(input) || text.includes(input)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    
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
      

<nav className="sticky top-0 z-50 bg-black text-white px-4 md:px-8 py-4 w-full shadow-lg transition-all">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="flex items-center gap-2" href="#home">
<iconify-icon className="text-xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<span className="uppercase text-3xl font-normal tracking-tight" data-arأبحاث="" data-en="BIAN" العاصمة"="">BIAN</span>
</a>
<ul className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-300">
<li><a className="hover:text-white transition-colors" data-ar="الرئيسية" data-en="Home" href="#home">Home</a></li>
<li className=""><a className="hover:text-white transition-colors" data-ar="صفحة الأبحاث" data-en="Research Page" href="#research">Research Page</a></li>
<li className=""><a className="hover:text-white transition-colors" data-ar="من نحن" data-en="About Us" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" data-ar="اتصل بنا" data-en="Contact Us" href="#contact">Contact Us</a></li>
</ul>
<div className="flex items-center gap-4">

<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700/80 bg-white/5 text-xs font-normal text-slate-300 hover:text-white hover:border-slate-500 hover:bg-white/10 transition-all" onclick="toggleLanguage()">
<iconify-icon className="text-base" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium tracking-wide" id="lang-text">AR</span>
</button>
<button className="hidden md:block hover:bg-slate-200 transition-colors text-xs font-medium text-black bg-white rounded-full pt-2 pe-4 pb-2 ps-4" data-ar="تسجيل الدخول / إنشاء حساب" data-en="Login / Sign Up" onclick="openLoginPortal()">Login / Sign Up</button>
</div>
</div>
</nav>

<main className="" id="main-content">

<section className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden" id="home">
<div className="z-10 bg-black/40 w-full h-full absolute top-0 right-0 bottom-0 left-0"><div className="bg-[url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2560&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div></div>
<img alt="New Administrative Capital" className="absolute inset-0 w-full h-full object-cover z-0" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80" style={{objectPosition: 'center 20%'}}/>
<div className="z-20 flex flex-col text-center max-w-4xl px-4 relative items-center">
<span className="uppercase text-sm font-normal text-white/80 tracking-widest mb-4" data-ar="العاصمة الإدارية" data-en="The Administrative Capital">The Administrative Capital</span>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 drop-shadow-md" data-ar="اكتشف مستقبل مصر" data-en="Discover the Future of Egypt">Discover the Future of Egypt</h1>
<p className="text-slate-200 text-base md:text-lg max-w-2xl mb-10 font-light" data-ar="استكشف الأبحاث الشاملة، والإنجازات، والمعالم الهيكلية للعاصمة الإدارية الجديدة." data-en="Explore comprehensive research, achievements, and structural landmarks of the New Administrative Capital.">Explore comprehensive research, achievements, and structural landmarks of the New Administrative Capital.</p>

<div className="w-full max-w-lg relative">
<div className="absolute inset-y-0 start-4 flex items-center pointer-events-none text-slate-400">
<iconify-icon className="text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full bg-white/95 backdrop-blur-sm border-0 rounded-full py-4 ps-12 pe-6 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 shadow-xl transition-all placeholder:text-slate-400" data-ar-placeholder="ابحث عن الكلمات الرئيسية، المعالم، الأبحاث..." data-en-placeholder="Search keywords, landmarks, research..." placeholder="Search keywords, landmarks, research..." type="text"/>
</div>
</div>
</section>

<section className="md:px-8 bg-white py-24 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-3" data-ar="أبرز المعالم" data-en="Key Landmarks">Key Landmarks</h2>
<p className="text-sm text-slate-500 max-w-xl mx-auto" data-ar="اكتشف الإنجازات المعمارية الضخمة التي تحدد أفق العاصمة الجديدة." data-en="Discover the monumental architectural achievements defining the skyline of the new capital.">Discover the monumental architectural achievements defining the skyline of the new capital.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8">

<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 shadow-md ring-1 ring-slate-100 group-hover:shadow-lg transition-all">
<img alt="Government District" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/068f8852-2d3e-49aa-8ef2-d162b28f5507_320w.jpg"/>
</div>
<h3 className="text-sm font-medium text-slate-900" data-ar="الحي الحكومي" data-en="Government District">Government District</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2" data-ar="المركز السياسي الذي يستضيف الوزارات الحيوية والبرلمان." data-en="The political hub hosting vital ministries and parliament.">The political hub hosting vital ministries and parliament.</p>
</div>

<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 shadow-md ring-1 ring-slate-100 group-hover:shadow-lg transition-all">
<img alt="Presidential Palace" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6948679-dcb4-4c4f-b96e-84e9c6c6fea3_320w.jpg"/>
</div>
<h3 className="text-sm font-medium text-slate-900" data-ar="القصر الرئاسي" data-en="Presidential Palace">Presidential Palace</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2" data-ar="رمز للقيادة الحديثة والسلطة التنفيذية." data-en="A symbol of modern leadership and executive power.">A symbol of modern leadership and executive power.</p>
</div>

<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 shadow-md ring-1 ring-slate-100 group-hover:shadow-lg transition-all">
<img alt="Al-Fattah Al-Aleem Mosque" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c52af868-2416-4068-9f7c-d76152943e81_320w.jpg"/>
</div>
<h3 className="text-sm font-medium text-slate-900" data-ar="مسجد الفتاح العليم" data-en="Al-Fattah Al-Aleem">Al-Fattah Al-Aleem</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2" data-ar="أحد أكبر المساجد في منطقة الشرق الأوسط." data-en="One of the largest mosques in the Middle East region.">One of the largest mosques in the Middle East region.</p>
</div>

<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 shadow-md ring-1 ring-slate-100 group-hover:shadow-lg transition-all">
<img alt="The Iconic Tower" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7c82140-2558-4e57-8c77-fa0b1b9f3c93_320w.jpg"/>
</div>
<h3 className="text-sm font-medium text-slate-900" data-ar="البرج الأيقوني" data-en="The Iconic Tower">The Iconic Tower</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2" data-ar="أطول ناطحة سحاب في إفريقيا تقف كمنارة للنمو." data-en="Africa's tallest skyscraper standing as a beacon of growth.">Africa's tallest skyscraper standing as a beacon of growth.</p>
</div>

<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 shadow-md ring-1 ring-slate-100 group-hover:shadow-lg transition-all">
<img alt="Cathedral of Nativity" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/863f99f4-cae2-4794-aa0f-7c7d13113c29_320w.jpg?w=800&amp;q=80"/>
</div>
<h3 className="text-sm font-medium text-slate-900" data-ar="كاتدرائية ميلاد المسيح" data-en="Nativity Cathedral">Nativity Cathedral</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-2" data-ar="أعجوبة معمارية رائعة للكنيسة القبطية الأرثوذكسية." data-en="A magnificent architectural marvel for the Coptic Orthodox Church.">A magnificent architectural marvel for the Coptic Orthodox Church.</p>
</div>
</div>
</div>
</section>

<section className="md:px-8 bg-slate-50 py-24 px-4" id="research">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2" data-ar="أرشيف الأبحاث" data-en="Research Archive">Research Archive</h2>
<p className="text-sm text-slate-500" data-ar="الأوراق الأكاديمية والإنجازات المتعلقة بالعاصمة." data-en="Academic papers and achievements concerning the capital.">Academic papers and achievements concerning the capital.</p>
</div>
<div className="relative w-full md:w-72">
<div className="absolute inset-y-0 start-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon className="text-sm" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full bg-white border border-slate-200 rounded-lg py-2 ps-9 pe-4 text-sm text-slate-900 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all shadow-sm" data-ar-placeholder="تصفية الأبحاث..." data-en-placeholder="Filter research..." id="researchSearch" onkeyup="filterResearch()" placeholder="Filter research..." type="text"/>
</div>
</div>
<div className="flex flex-col gap-6" id="researchList">

<article className="research-item bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 transition-all hover:shadow-md" data-keywords="urban development sustainability infrastructure 2024 التنمية الحضرية الاستدامة البنية التحتية">
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-medium text-slate-600 tracking-wide bg-slate-100 rounded px-2.5 py-1" data-ar="نُشر عام 2026" data-en="Published 2026">Published 2026</span>
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:eye-linear"></iconify-icon>
<span data-ar="1,204 مشاهدة" data-en="1,204 Views">1,204 Views</span>
</span>
</div>
<h3 className="md:text-2xl text-xl font-medium text-slate-900 tracking-tight mb-4" data-ar="مسجد الفتاح العليم" data-en="Al Fattah-Al Aleem mosque">Al Fattah-Al Aleem mosque</h3>
<p className="leading-relaxed text-sm text-slate-600 mb-6" data-ar="مسجد الفتاح العليم في العاصمة الإدارية الجديدة في مصر هو أحد أبرز المعالم الدينية والمعمارية الحديثة في البلاد. تم افتتاحه في 6 يناير 2019، ويقع عند مدخل العاصمة على طول الطريق الدائري الأوسطي ويمزج بين التصميم الإسلامي التقليدي والبناء المعاصر." data-en="Al-Fattah al-Aleem Mosque in the New Administrative Capital of Egypt is one of the country's most striking modern religious and architectural landmarks. Opened on January 6, 2019, it stands at the entrance of the capital along the Middle Ring Road and blends traditional Islamic design with contemporary construction, showcasing a distinctive and majestic style.">Al-Fattah al-Aleem Mosque in the New Administrative Capital of Egypt is one of the country's most striking modern religious and architectural landmarks. Opened on January 6, 2019, it stands at the entrance of the capital along the Middle Ring Road and blends traditional Islamic design with contemporary construction, showcasing a distinctive and majestic style.</p>
<div className="flex items-center gap-4">
<button className="text-slate-500 hover:text-slate-900 transition-colors text-sm flex items-center gap-1">
<iconify-icon icon="solar:link-linear"></iconify-icon>
<span data-ar="اقرأ المزيد" data-en="Read More" onclick="window.location.href='https://ar.wikipedia.org/wiki/%D9%85%D8%B3%D8%AC%D8%AF_%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%AD_%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D9%85'" role="button">Read More</span>
</button>
</div>
</div>
<div className="w-full md:w-64 h-48 rounded-xl overflow-hidden shrink-0 bg-slate-100">
<img alt="Mosque" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e737b30d-ddb1-433d-b96c-63f9a828b003_800w.jpg"/>
</div>
</article>

<article className="research-item bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 transition-all hover:shadow-md" data-keywords="economy iconic tower investment 2023 الاقتصاد البرج الأيقوني الاستثمار">
<div className="flex-1">
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-medium text-slate-600 tracking-wide bg-slate-100 rounded px-2.5 py-1" data-ar="نُشر عام 2026" data-en="Published 2026">Published 2026</span>
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:eye-linear"></iconify-icon>
<span data-ar="845 مشاهدة" data-en="845 Views">845 Views</span>
</span>
</div>
<h3 className="md:text-2xl text-xl font-medium text-slate-900 tracking-tight mb-4" data-ar="البرج الأيقوني" data-en="The Iconic Tower">The Iconic Tower</h3>
<p className="leading-relaxed text-sm text-slate-600 mb-6" data-ar="يقف البرج الأيقوني في العاصمة الإدارية في مصر كرمز للهندسة المعمارية الحديثة والتنمية الحضرية. بارتفاعه المثير للإعجاب، هو أطول مبنى في إفريقيا ويتميز بتصميم حلزوني أنيق يعكس الابتكار والأناقة." data-en="The Iconic Tower in the Administrative Capital of Egypt stands as a symbol of modern architecture and urban development. Rising to impressive heights, it is the tallest building in Africa and features a sleek, spiraling design that reflects both innovation and elegance.">The Iconic Tower in the Administrative Capital of Egypt stands as a symbol of modern architecture and urban development. Rising to impressive heights, it is the tallest building in Africa and features a sleek, spiraling design that reflects both innovation and elegance.</p>
<div className="flex items-center gap-4">
<button className="text-slate-500 hover:text-slate-900 transition-colors text-sm flex items-center gap-1">
<iconify-icon icon="solar:link-linear"></iconify-icon>
<span data-ar="اقرأ المزيد" data-en="Read More" onclick="window.location.href='https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%A8%D8%B1%D8%AC_%D8%A7%D9%84%D8%A3%D9%8A%D9%82%D9%88%D9%86%D9%8A'" role="button">Read More</span>
</button>
</div>
</div>
<div className="w-full md:w-64 h-48 rounded-xl overflow-hidden shrink-0 bg-slate-100">
<img alt="Iconic Tower" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b71d43d-9a9f-4886-83fa-ac54cab038a9_800w.png"/>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-white border-t border-slate-100" id="about">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-3" data-ar="عن المشروع" data-en="About the Project">About the Project</h2>
<p className="text-sm text-slate-500" data-ar="مبادرة أكاديمية تفصل رؤية مصر الحديثة." data-en="Academic initiative detailing the vision of modern Egypt.">Academic initiative detailing the vision of modern Egypt.</p>
</div>
<div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 end-0 w-64 h-64 bg-slate-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="">
<div className="mb-8">
<span className="block text-xs text-slate-400 uppercase tracking-widest mb-1" data-ar="اسم المنشئ" data-en="Creator Name">Creator Name</span>
<h4 className="text-lg font-medium text-slate-900" data-ar="محمد وحيد محمد إسماعيل" data-en="Mohamed Waheed Mohamed Ismail">Mohamed Waheed Mohamed Ismail</h4>
</div>
<div className="">
<span className="block text-xs text-slate-400 uppercase tracking-widest mb-1" data-ar="سنة الإنشاء" data-en="Creation Year">Creation Year</span>
<h4 className="text-lg font-medium text-slate-900" data-ar="2026" data-en="2026">2026</h4>
</div>
</div>
<div className="space-y-6">
<div>
<span className="block text-xs text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
<iconify-icon icon="solar:cup-star-linear"></iconify-icon>
<span data-ar="السبب" data-en="Reason">Reason</span>
</span>
<p className="text-sm text-slate-700 leading-relaxed" data-ar="تم تطويره كمشروع مدرسي متخصص للمنافسة في المسابقة الوطنية للمدارس الأكاديمية والتكنولوجية." data-en="Developed as a specialized school submission project to compete in the national academic and technological school competition.">Developed as a specialized school submission project to compete in the national academic and technological school competition.</p>
</div>
<div>
<span className="block text-xs text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
<iconify-icon icon="solar:target-linear"></iconify-icon>
<span data-ar="الهدف" data-en="Goal">Goal</span>
</span>
<p className="text-sm text-slate-700 leading-relaxed" data-ar="تقديم أهم الإنجازات والعجائب المعمارية والمعالم الهيكلية للعاصمة الإدارية الجديدة في مصر من خلال تجربة رقمية مبسطة ومتميزة." data-en="Presenting the most vital achievements, architectural marvels, and structural milestones of the New Administrative Capital in Egypt through a streamlined, premium digital experience.">Presenting the most vital achievements, architectural marvels, and structural milestones of the New Administrative Capital in Egypt through a streamlined, premium digital experience.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-slate-50" id="contact">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="flex flex-col justify-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4" data-ar="تواصل معنا" data-en="Get in Touch">Get in Touch</h2>
<p className="text-sm text-slate-600 mb-10 leading-relaxed" data-ar="هل لديك أسئلة بخصوص بيانات البحث أو ترغب في المساهمة؟ تواصل عبر قنواتنا الرسمية أو أرسل رسالة." data-en="Have questions regarding the research data or wish to contribute? Reach out via our official channels or send a direct message.">Have questions regarding the research data or wish to contribute? Reach out via our official channels or send a direct message.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<span className="block text-xs text-slate-500 mb-0.5" data-ar="البريد الإلكتروني الرسمي" data-en="Official Email">Official Email</span>
<a className="hover:underline text-sm font-medium text-slate-900" href="mailto:contact@World-Topics.edu.eg">contact@BIAN.edu.eg</a>
</div>
</div>
<div className="pt-6 border-t border-slate-200">
<span className="block text-xs font-medium text-slate-900 mb-4 tracking-wide uppercase" data-ar="تواصل على وسائل التواصل الاجتماعي" data-en="Connect on Social Media">Connect on Social Media</span>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-black hover:border-black transition-all shadow-sm" href="#">
<iconify-icon className="text-lg" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-black hover:border-black transition-all shadow-sm" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-black hover:border-black transition-all shadow-sm" href="#">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<form className="space-y-5" onsubmit="event.preventDefault(); alert(document.documentElement.lang === 'ar' ? 'تم الإرسال بنجاح!' : 'Message sent successfully!');">
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1.5" data-ar="الاسم الكامل" data-en="Full Name">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-white transition-colors" data-ar-placeholder="أحمد محمد" data-en-placeholder="John Doe" placeholder="John Doe" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1.5" data-ar="البريد الإلكتروني" data-en="Email Address">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-white transition-colors" data-ar-placeholder="ahmed@example.com" data-en-placeholder="john@example.com" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" data-ar="الرسالة" data-en="Message">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-white transition-colors resize-none" data-ar-placeholder="كيف يمكننا مساعدتك؟" data-en-placeholder="How can we help you?" placeholder="How can we help you?" required="" rows="4"></textarea>
</div>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center mt-0.5 shrink-0">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 peer-checked:bg-black peer-checked:border-black transition-all flex items-center justify-center text-white">
<iconify-icon className="hidden peer-checked:block text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors" data-ar="بتقديم هذا النموذج، أوافق على سياسة الخصوصية وأوافق على معالجة بياناتي بأمان." data-en="By submitting this form, I agree to the privacy policy and consent to having my data processed securely.">By submitting this form, I agree to the privacy policy and consent to having my data processed securely.</span>
</label>
<button className="w-full bg-black text-white rounded-lg py-3 text-sm font-medium hover:bg-slate-800 transition-colors mt-2" data-ar="إرسال الرسالة" data-en="Send Message" type="submit">Send Message</button>
</form>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 z-[100] hidden bg-slate-50 flex-col justify-center items-center overflow-y-auto" id="login-portal">
<button className="absolute top-6 start-6 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-black transition-colors" onclick="closeLoginPortal()">
<iconify-icon className="text-lg rtl:rotate-180" icon="solar:arrow-left-linear"></iconify-icon>
<span data-ar="العودة للموقع" data-en="Back to Site">Back to Site</span>
</button>

<button className="absolute top-6 end-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-normal text-slate-600 hover:text-black hover:border-slate-400 transition-all shadow-sm" onclick="toggleLanguage()">
<iconify-icon className="text-base" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium tracking-wide" id="portal-lang-text">AR</span>
</button>
<div className="w-full max-w-sm px-4">
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
<div className="flex flex-col items-center mb-8 text-center">
<div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
<iconify-icon className="text-2xl text-slate-900" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-slate-900 mb-1" data-ar="مصادقة آمنة" data-en="Secure Authentication">Secure Authentication</h2>
<p className="text-xs text-slate-500 flex items-center gap-1 justify-center" data-ar="تم إنشاء اتصال مشفر" data-en="Encrypted connection established">Encrypted connection established</p>
</div>
<form className="space-y-4" id="loginForm" onsubmit="handleSecureLogin(event)">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" data-ar="البريد الإلكتروني" data-en="Email Address">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 start-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 ps-9 pe-4 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-white transition-colors" data-ar-placeholder="admin@nacresearch.edu.eg" data-en-placeholder="admin@nacresearch.edu.eg" placeholder="admin@nacresearch.edu.eg" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 flex justify-between">
<span data-ar="كلمة المرور" data-en="Password">Password</span>
<a className="text-slate-400 hover:text-black transition-colors" data-ar="نسيت كلمة المرور؟" data-en="Forgot password?" href="#">Forgot password?</a>
</label>
<div className="relative">
<div className="absolute inset-y-0 start-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:key-minimalistic-linear"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 ps-9 pe-10 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:bg-white transition-colors" data-ar-placeholder="••••••••" data-en-placeholder="••••••••" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<button className="w-full bg-black text-white rounded-lg py-3 text-sm font-medium hover:bg-slate-800 transition-all mt-6 flex justify-center items-center gap-2" id="loginSubmitBtn" type="submit">
<span data-ar="تسجيل الدخول للوحة التحكم" data-en="Sign in to Dashboard" id="loginBtnText">Sign in to Dashboard</span>
<iconify-icon className="text-lg rtl:rotate-180" icon="solar:login-2-linear" id="loginBtnIcon"></iconify-icon>
</button>
</form>
</div>
<p className="text-xs text-center text-slate-500 mt-6" data-ar="دخول مقيد. للموظفين المصرح لهم فقط." data-en="Restricted access. Authorized personnel only.">Restricted access. Authorized personnel only.</p>
</div>
</div>

<main className="hidden min-h-screen bg-slate-50 pt-24 pb-12 px-4 md:px-8" id="admin-dashboard">
<div className="max-w-6xl mx-auto">
<div className="flex justify-between items-center mb-8">
<h2 className="text-2xl font-medium tracking-tight text-slate-900" data-ar="لوحة تحكم المسؤول" data-en="Admin Dashboard">Admin Dashboard</h2>
<button className="text-sm text-slate-500 hover:text-black transition-colors flex items-center gap-1" onclick="logout()">
<iconify-icon className="rtl:rotate-180" icon="solar:logout-linear"></iconify-icon>
<span data-ar="تسجيل الخروج" data-en="Logout">Logout</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
<span className="text-xs text-slate-500 uppercase tracking-wide" data-ar="إجمالي المستخدمين" data-en="Total Users">Total Users</span>
<span className="text-3xl font-normal tracking-tight text-slate-900">1,248</span>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
<span className="text-xs text-slate-500 uppercase tracking-wide" data-ar="الأبحاث المنشورة" data-en="Published Research">Published Research</span>
<span className="text-3xl font-normal tracking-tight text-slate-900">24</span>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
<span className="text-xs text-slate-500 uppercase tracking-wide" data-ar="التعليقات المعلقة" data-en="Pending Comments">Pending Comments</span>
<span className="text-3xl font-normal tracking-tight text-slate-900">15</span>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<h3 className="text-sm font-medium text-slate-900" data-ar="النشاط الأخير" data-en="Recent Activity">Recent Activity</h3>
</div>
<div className="p-6 text-center text-sm text-slate-500">
<iconify-icon className="text-3xl text-slate-300 mb-2" icon="solar:database-linear"></iconify-icon>
<p data-ar="يتم التعامل مع التوجيه الآمن عبر الواجهة الخلفية. (عرض وهمي)" data-en="Secure routing handled via backend. (Mock View)">Secure routing handled via backend. (Mock View)</p>
</div>
</div>
</div>
</main>

<footer className="bg-black text-white pt-16 pb-8 px-4 md:px-8">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-white/10 pb-12">
<div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-start">
<span className="uppercase text-xl font-normal tracking-tight mb-4" data-ar="أبحاث العاصمة" data-en="BIAN">BIAN</span>
<p className="text-xs text-slate-400 leading-relaxed" data-ar="مكرس لتوثيق وعرض الإنجازات المعمارية والاقتصادية والمستدامة للعاصمة الإدارية الجديدة." data-en="Dedicated to documenting and presenting the architectural, economic, and sustainable milestones of the New Administrative Capital.">Dedicated to documenting and presenting the architectural, economic, and sustainable milestones of the New Administrative Capital.</p>
</div>
<div className="flex gap-4">
<a className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-all" href="#">
<iconify-icon icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-all" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-all" href="#">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© <span data-ar="2026 بوابة بيان. جميع الحقوق محفوظة." data-en="2026 Bian Portal. All rights reserved.">2026 Bian Portal. All rights reserved.</span></p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" data-ar="سياسة الخصوصية" data-en="Privacy Policy" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" data-ar="شروط الخدمة" data-en="Terms of Service" href="#">Terms of Service</a>
<button className="hover:text-white transition-colors" data-ar="بوابة المسؤول" data-en="Admin Portal" onclick="openLoginPortal()">Admin Portal</button>
</div>
</div>
</footer>



    </>
  );
}
