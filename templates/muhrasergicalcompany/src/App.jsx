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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
navy: {
900: '#050A14',
800: '#0B1221',
700: '#151E32',
},
beige: {
100: '#F5EEE6',
200: '#E6DAC8',
300: '#D4C5B0',
500: '#B09F85'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
},
animation: {
'blob': 'blob 10s infinite',
'float': 'float 6s ease-in-out infinite',
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
}
}
}
}
}



      // --- Translation Data ---
      const translations = {
          en: {
              nav_home: "Home",
              nav_shop: "Shop",
              nav_timeline: "Timeline",
              nav_about: "About Us",
              nav_contact: "Contact Us",
              lang_label: "العربية",
              hero_badge: "Surgical Precision Series",
              hero_title: "Mastery in<br>Motion.",
              hero_sub: "Engineered for the hands that heal. The next generation of surgical instrumentation, blending ergonomic art with medical-grade steel.",
              btn_explore: "Explore Catalog",
              btn_demo: "Request Demo",
              cat_title: "Technical Catalogs",
              cat_sub: "Interactive 3D specifications.",
              card1_title: "Hemostats",
              card1_desc: "Advanced locking mechanisms for precise arterial control.",
              card2_title: "Cardio",
              card2_desc: "Micro-instruments for delicate thoracic procedures.",
              card3_title: "Imaging",
              card3_desc: "Retractors designed for optimal visibility and minimal trauma.",
              card_sku: "SERIES",
              pdf_preview: "Live PDF Preview",
              btn_download: "Download",
              btn_fullscreen: "Full Screen",
              timeline_title: "Our Legacy",
              time1_title: "Inception",
              time1_desc: "Founded with a vision to redefine surgical steel durability.",
              time2_title: "Global Expansion",
              time2_desc: "Partnering with top tier hospitals across 12 countries.",
              time3_title: "The New Standard",
              time3_desc: "Launching the Series-X titanium coated instruments.",
              footer_desc: "Forging the future of medical instrumentation. Precise, sterile, and enduring.",
              addr: "Dubai Healthcare City",
              social: "Social",
              copyright: "© 2024 Muhrah Surgical. All rights reserved."
          },
          ar: {
              nav_home: "الرئيسية",
              nav_shop: "المتجر",
              nav_timeline: "الجدول الزمني",
              nav_about: "من نحن",
              nav_contact: "اتصل بنا",
              lang_label: "English",
              hero_badge: "سلسلة الدقة الجراحية",
              hero_title: "السيادة في<br>الحركة.",
              hero_sub: "صُممت للأيادي التي تشفي. الجيل القادم من الأدوات الجراحية، يمزج الفن المريح مع الفولاذ الطبي عالي الجودة.",
              btn_explore: "تصفح الكتالوج",
              btn_demo: "طلب تجربة",
              cat_title: "الكتالوجات الفنية",
              cat_sub: "مواصفات تفاعلية ثلاثية الأبعاد.",
              card1_title: "المشابك المرقئة",
              card1_desc: "آليات قفل متقدمة للتحكم الدقيق في الشرايين.",
              card2_title: "أدوات القلب",
              card2_desc: "أدوات دقيقة لإجراءات الصدر الحساسة.",
              card3_title: "التصوير",
              card3_desc: "مبعدات مصممة لرؤية مثالية وصدمة أقل.",
              card_sku: "سلسلة",
              pdf_preview: "معاينة PDF مباشرة",
              btn_download: "تحميل",
              btn_fullscreen: "ملء الشاشة",
              timeline_title: "تراثنا",
              time1_title: "النشأة",
              time1_desc: "تأسست برؤية لإعادة تعريف متانة الفولاذ الجراحي.",
              time2_title: "التوسع العالمي",
              time2_desc: "شراكة مع أفضل المستشفيات في 12 دولة.",
              time3_title: "المعيار الجديد",
              time3_desc: "إطلاق أدوات Series-X المطلية بالتيتانيوم.",
              footer_desc: "صياغة مستقبل الأدوات الطبية. دقيقة، معقمة، ودائمة.",
              addr: "مدينة دبي الطبية",
              social: "تواصل اجتماعي",
              copyright: "© 2024 مهرة للأدوات الجراحية. جميع الحقوق محفوظة."
          }
      };

      let currentLang = 'en';

      function setLanguage(lang) {
          currentLang = lang;
          document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
          document.documentElement.lang = lang;

          // Update Text
          document.querySelectorAll('[data-key]').forEach(el => {
              const key = el.getAttribute('data-key');
              if (translations[lang][key]) {
                  // Handle line breaks in HTML
                  el.innerHTML = translations[lang][key];
              }
          });

          // Update Icon Arrows direction if needed (Tailwind rtl modifiers handle layout, but logic handles content)
      }

      document.getElementById('lang-toggle').addEventListener('click', () => {
          setLanguage(currentLang === 'en' ? 'ar' : 'en');
      });

      // --- Custom Cursor & Magnetic Effect ---
      const cursor = document.getElementById('cursor-ring');
      const glow = document.getElementById('mouse-glow');
      const magnetics = document.querySelectorAll('.magnetic-item');

      document.addEventListener('mousemove', (e) => {
          // Move cursor ring
          cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;

          // Move background glow
          glow.style.opacity = '1';
          glow.style.left = `${e.clientX}px`;
          glow.style.top = `${e.clientY}px`;
      });

      magnetics.forEach(btn => {
          btn.addEventListener('mousemove', (e) => {
              const rect = btn.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;

              btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
          });

          btn.addEventListener('mouseleave', () => {
              btn.style.transform = 'translate(0, 0)';
          });

          // Cursor Hover State
          btn.addEventListener('mouseenter', () => {
              cursor.style.width = '48px';
              cursor.style.height = '48px';
              cursor.style.transform = `translate(${cursor.getBoundingClientRect().left}px, ${cursor.getBoundingClientRect().top}px)`;
          });
          btn.addEventListener('mouseleave', () => {
              cursor.style.width = '32px';
              cursor.style.height = '32px';
          });
      });

      // --- Surgical Thread Drawing Animation ---
      function updateThread() {
          const path = document.getElementById('thread-path');
          const draw = document.getElementById('thread-draw');
          const container = document.getElementById('timeline');

          // Create a sine wave path based on container height
          const width = container.offsetWidth;
          const height = container.offsetHeight;
          const startY = 100;
          const endY = height - 100;

          let d = `M ${width/2} ${startY} `;
          const steps = 5;
          const stepH = (endY - startY) / steps;

          for(let i=0; i<steps; i++) {
              const y = startY + (i * stepH);
              const controlY = y + (stepH/2);
              const nextY = y + stepH;
              const amp = 50 * (i % 2 === 0 ? 1 : -1);
              d += `Q ${width/2 + amp} ${controlY} ${width/2} ${nextY} `;
          }

          path.setAttribute('d', d);
          draw.setAttribute('d', d);

          // Animate draw based on scroll
          const length = path.getTotalLength();
          draw.style.strokeDasharray = length;
          draw.style.strokeDashoffset = length;

          const rect = container.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Calculate percentage seen
          let percentage = (viewportHeight - rect.top) / (rect.height + viewportHeight);
          percentage = Math.max(0, Math.min(1, percentage));

          draw.style.strokeDashoffset = length - (length * (percentage * 1.5)); // 1.5 multiplier to finish faster
      }

      window.addEventListener('resize', updateThread);
      window.addEventListener('scroll', () => {
          requestAnimationFrame(updateThread);
      });
      updateThread(); // Init
    
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
      

<div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-navy-700/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-navy-800/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-20 w-[60vw] h-[60vw] bg-navy-700/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
<div className="absolute w-[800px] h-[800px] bg-beige-500/5 rounded-full filter blur-[100px] opacity-0 transition-opacity duration-500 transform -translate-x-1/2 -translate-y-1/2" id="mouse-glow" style={{opacity: '1', left: '1557px', top: '76px'}}></div>
</div>

<div className="custom-cursor fixed top-0 left-0 w-8 h-8 border border-beige-200 rounded-full transition-transform duration-100 ease-out flex items-center justify-center" id="cursor-ring" style={{transform: 'translate(1541px, 60px)', width: '32px', height: '32px'}}>
<div className="w-1 h-1 bg-beige-200 rounded-full"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/5 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="magnetic-item relative group z-50" href="#" style={{transform: 'translate(0px, 0px)'}}>
<div className="flex text-beige-300/40 uppercase bg-center text-xs tracking-widest font-mono w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46780308-4826-4873-b83f-fa19c7267ad3_800w.png)] bg-cover border-0 rounded-lg items-center justify-center"></div>
</a>

<div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
<a className="magnetic-item px-5 py-2 text-sm text-beige-300 hover:text-white transition-colors" data-key="nav_home" href="#home" style={{transform: 'translate(0px, 0px)'}}>
            Home
          </a>
<a className="magnetic-item px-5 py-2 text-sm text-beige-300 hover:text-white transition-colors" data-key="nav_shop" href="#shop" style={{transform: 'translate(0px, 0px)'}}>
            Shop
          </a>
<a className="magnetic-item px-5 py-2 text-sm text-beige-300 hover:text-white transition-colors" data-key="nav_timeline" href="#timeline" style={{transform: 'translate(0px, 0px)'}}>
            Timeline
          </a>
<a className="magnetic-item px-5 py-2 text-sm text-beige-300 hover:text-white transition-colors" data-key="nav_about" href="#about" style={{transform: 'translate(0px, 0px)'}}>
            About Us
          </a>
<a className="magnetic-item px-5 py-2 text-sm text-beige-300 hover:text-white transition-colors" data-key="nav_contact" href="#contact" style={{transform: 'translate(0px, 0px)'}}>
            Contact Us
          </a>
</div>

<button className="magnetic-item group relative px-6 py-2 rounded-full glass-panel overflow-hidden transition-all duration-300 hover:bg-beige-500/10 active:scale-95" id="lang-toggle" style={{transform: 'translate(0px, 0px)'}}>
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
<div className="flex items-center gap-2">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="globe" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(230, 218, 200)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-beige-100 text-xs font-medium tracking-wide" data-key="lang_label">
              العربية
            </span>
</div>
</button>
</div>
</nav>

<section className="min-h-screen flex flex-col z-10 text-center pt-20 pr-4 pl-4 relative items-center justify-center" id="home">
<div className="max-w-4xl mr-auto ml-auto space-y-8">
<div className="flex text-beige-300/40 uppercase group overflow-hidden md:w-64 md:h-64 bg-center text-sm font-mono w-48 h-48 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdd2f746-e3fe-47c5-b207-507bdda1ed0c_3840w.png)] bg-cover border-0 rounded-none mr-auto mb-10 ml-auto relative backdrop-blur-none translate-y-2 scale-150 items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)'}}><div className="group-hover:opacity-100 transition-opacity bg-center bg-gradient-to-tr from-transparent to-white/5 opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57144639-c0cf-4ed1-afa4-95d99e61caec_3840w.png)] bg-cover relative top-0 right-0 bottom-0 left-0"></div></div>
<h1 className="bg-clip-text leading-[1.1] text-6xl font-semibold text-transparent tracking-tight bg-gradient-to-b from-beige-100 to-beige-500/60 pb-2 translate-y-12 md:text-6xl" data-key="hero_title" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)'}}>
          Mastery in
          <br/>
          Motion.
        </h1>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
<button className="magnetic-item group relative px-8 py-4 bg-beige-200 text-navy-900 rounded-lg overflow-hidden font-medium transition-transform hover:scale-105" style={{transform: 'translate(0px, 0px)'}}>
<span className="relative z-10 flex items-center gap-2">
<span className="" data-key="btn_explore">Explore Catalog</span>
<svg className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" data-icon-set="lucide" data-lucide="arrow-right" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</button>
<button className="magnetic-item px-8 py-4 glass-panel rounded-lg text-beige-100 hover:bg-white/5 transition-colors font-medium" data-key="btn_demo" style={{transform: 'translate(0px, 0px)'}}>
            Request Demo
          </button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-beige-500/20 to-transparent"></div>
</section>
<section className="relative py-24 px-6 z-10 border-b border-white/5" id="shop">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-beige-100">
            The Collection
          </h2>
<p className="text-beige-300/60 max-w-2xl mx-auto">
            Precision instruments available for immediate acquisition.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative glass-panel rounded-xl overflow-hidden hover:bg-white/5 transition-all duration-500">
<div className="aspect-square bg-navy-800/50 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
<svg className="text-beige-200/50 group-hover:text-beige-200 transition-colors" data-icon-set="lucide" data-lucide="scissors" height="64" style={{}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g></svg>
</div>
<div className="p-6 space-y-2">
<h3 className="text-beige-100 font-medium">Precision Forceps</h3>
<p className="text-beige-300/40 text-sm">Titanium Grade 5</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-beige-200 font-mono">$129.00</span>
<button className="w-8 h-8 rounded-full bg-beige-200 text-navy-900 flex items-center justify-center hover:scale-110 transition-transform">
<svg className="" data-icon-set="lucide" data-lucide="plus" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="group relative glass-panel rounded-xl overflow-hidden hover:bg-white/5 transition-all duration-500">
<div className="aspect-square bg-navy-800/50 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
<svg className="text-beige-200/50 group-hover:text-beige-200 transition-colors" data-icon-set="lucide" data-lucide="circle-dot" height="64" style={{}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></g></svg>
</div>
<div className="p-6 space-y-2">
<h3 className="text-beige-100 font-medium">Micro Retractor</h3>
<p className="text-beige-300/40 text-sm">Self-retaining</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-beige-200 font-mono">$245.00</span>
<button className="w-8 h-8 rounded-full bg-beige-200 text-navy-900 flex items-center justify-center hover:scale-110 transition-transform">
<svg className="" data-icon-set="lucide" data-lucide="plus" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="group relative glass-panel rounded-xl overflow-hidden hover:bg-white/5 transition-all duration-500">
<div className="aspect-square bg-navy-800/50 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-beige-200/50 group-hover:text-beige-200 transition-colors" icon="lucide:scalpel" width="64"></iconify-icon>
</div>
<div className="p-6 space-y-2">
<h3 className="text-beige-100 font-medium">Scalpel Handle #3</h3>
<p className="text-beige-300/40 text-sm">Ergonomic Grip</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-beige-200 font-mono">$45.00</span>
<button className="w-8 h-8 rounded-full bg-beige-200 text-navy-900 flex items-center justify-center hover:scale-110 transition-transform">
<svg className="" data-icon-set="lucide" data-lucide="plus" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="group relative glass-panel rounded-xl overflow-hidden hover:bg-white/5 transition-all duration-500">
<div className="aspect-square bg-navy-800/50 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-700">
<svg className="text-beige-200/50 group-hover:text-beige-200 transition-colors" data-icon-set="lucide" data-lucide="hammer" height="64" style={{}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<div className="p-6 space-y-2">
<h3 className="text-beige-100 font-medium">Bone Mallet</h3>
<p className="text-beige-300/40 text-sm">Weighted Head</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-beige-200 font-mono">$189.00</span>
<button className="w-8 h-8 rounded-full bg-beige-200 text-navy-900 flex items-center justify-center hover:scale-110 transition-transform">
<svg className="" data-icon-set="lucide" data-lucide="plus" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 z-10" id="catalogs">
<div className="max-w-7xl mx-auto">
<div className="mb-16 flex items-end justify-between border-b border-white/5 pb-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-beige-100 mb-2" data-key="cat_title">
              Technical Catalogs
            </h2>
<p className="text-beige-300/60 text-sm" data-key="cat_sub">
              Interactive 3D specifications.
            </p>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 rounded-full glass-panel hover:bg-white/5 text-beige-200">
<svg className="" data-icon-set="lucide" data-lucide="chevron-left" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="p-2 rounded-full glass-panel hover:bg-white/5 text-beige-200">
<svg className="" data-icon-set="lucide" data-lucide="chevron-right" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group perspective-1000 h-[500px] w-full cursor-pointer magnetic-card">
<div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl">

<div className="absolute inset-0 w-full h-full glass-panel rounded-2xl p-8 flex flex-col justify-between backface-hidden border border-beige-500/10">
<div className="space-y-4">
<div className="w-12 h-12 rounded-full bg-navy-800/80 flex items-center justify-center border border-white/10">
<svg className="text-beige-200" data-icon-set="lucide" data-lucide="scissors" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight" data-key="card1_title">
                    Hemostats
                  </h3>
<p className="text-sm text-beige-300/60 leading-relaxed" data-key="card1_desc">
                    Advanced locking mechanisms for precise arterial control.
                  </p>
</div>
<div className="flex items-center justify-between text-beige-400 text-xs uppercase tracking-widest opacity-60">
<span data-key="card_sku">SERIES-A</span>
<svg className="" data-icon-set="lucide" data-lucide="plus" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="absolute inset-0 w-full h-full bg-beige-200 rounded-2xl p-8 rotate-y-180 backface-hidden flex flex-col justify-center items-center text-center space-y-6 shadow-[0_0_50px_rgba(230,218,200,0.1)]">
<h4 className="text-navy-900 text-xl font-semibold" data-key="pdf_preview">
                  Live PDF Preview
                </h4>
<div className="w-24 h-32 bg-white shadow-inner flex items-center justify-center">
<svg className="text-navy-900/20" data-icon-set="lucide" data-lucide="file-text" height="40" style={{}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div className="flex gap-3 w-full">
<button className="flex-1 py-3 bg-navy-900 text-white text-xs font-medium rounded hover:bg-navy-800 transition-colors" data-key="btn_download">
                    Download
                  </button>
<button className="flex-1 py-3 border border-navy-900/20 text-navy-900 text-xs font-medium rounded hover:bg-navy-900/5 transition-colors" data-key="btn_fullscreen">
                    Full Screen
                  </button>
</div>
</div>
</div>
</div>

<div className="group perspective-1000 h-[500px] w-full cursor-pointer magnetic-card">
<div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl">
<div className="absolute inset-0 w-full h-full glass-panel rounded-2xl p-8 flex flex-col justify-between backface-hidden border border-beige-500/10">
<div className="space-y-4">
<div className="w-12 h-12 rounded-full bg-navy-800/80 flex items-center justify-center border border-white/10">
<svg className="text-beige-200" data-icon-set="lucide" data-lucide="activity" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight" data-key="card2_title">
                    Cardio
                  </h3>
<p className="text-sm text-beige-300/60 leading-relaxed" data-key="card2_desc">
                    Micro-instruments for delicate thoracic procedures.
                  </p>
</div>
<div className="flex items-center justify-between text-beige-400 text-xs uppercase tracking-widest opacity-60">
<span data-key="card_sku">SERIES-C</span>
<svg className="" data-icon-set="lucide" data-lucide="plus" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="absolute inset-0 w-full h-full bg-beige-200 rounded-2xl p-8 rotate-y-180 backface-hidden flex flex-col justify-center items-center text-center space-y-6">
<h4 className="text-navy-900 text-xl font-semibold" data-key="pdf_preview">
                  Live PDF Preview
                </h4>
<div className="w-24 h-32 bg-white shadow-inner flex items-center justify-center">
<svg className="text-navy-900/20" data-icon-set="lucide" data-lucide="file-text" height="40" style={{}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div className="flex gap-3 w-full">
<button className="flex-1 py-3 bg-navy-900 text-white text-xs font-medium rounded hover:bg-navy-800 transition-colors" data-key="btn_download">
                    Download
                  </button>
<button className="flex-1 py-3 border border-navy-900/20 text-navy-900 text-xs font-medium rounded hover:bg-navy-900/5 transition-colors" data-key="btn_fullscreen">
                    Full Screen
                  </button>
</div>
</div>
</div>
</div>

<div className="group perspective-1000 h-[500px] w-full cursor-pointer magnetic-card">
<div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-2xl">
<div className="absolute inset-0 w-full h-full glass-panel rounded-2xl p-8 flex flex-col justify-between backface-hidden border border-beige-500/10">
<div className="space-y-4">
<div className="w-12 h-12 rounded-full bg-navy-800/80 flex items-center justify-center border border-white/10">
<svg className="text-beige-200" data-icon-set="lucide" data-lucide="scan" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight" data-key="card3_title">
                    Imaging
                  </h3>
<p className="text-sm text-beige-300/60 leading-relaxed" data-key="card3_desc">
                    Retractors designed for optimal visibility and minimal
                    trauma.
                  </p>
</div>
<div className="flex items-center justify-between text-beige-400 text-xs uppercase tracking-widest opacity-60">
<span data-key="card_sku">SERIES-I</span>
<svg className="" data-icon-set="lucide" data-lucide="plus" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="absolute inset-0 w-full h-full bg-beige-200 rounded-2xl p-8 rotate-y-180 backface-hidden flex flex-col justify-center items-center text-center space-y-6">
<h4 className="text-navy-900 text-xl font-semibold" data-key="pdf_preview">
                  Live PDF Preview
                </h4>
<div className="w-24 h-32 bg-white shadow-inner flex items-center justify-center">
<svg className="text-navy-900/20" data-icon-set="lucide" data-lucide="file-text" height="40" style={{}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div className="flex gap-3 w-full">
<button className="flex-1 py-3 bg-navy-900 text-white text-xs font-medium rounded hover:bg-navy-800 transition-colors" data-key="btn_download">
                    Download
                  </button>
<button className="flex-1 py-3 border border-navy-900/20 text-navy-900 text-xs font-medium rounded hover:bg-navy-900/5 transition-colors" data-key="btn_fullscreen">
                    Full Screen
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-20 pb-20 relative" id="timeline">
<div className="max-w-7xl mx-auto px-6 relative">
<h2 className="text-3xl font-semibold text-center mb-20 text-beige-100" data-key="timeline_title">
          Our Legacy
        </h2>

<div className="absolute top-32 bottom-0 left-0 w-full pointer-events-none z-0 rtl:scale-x-[-1]">
<svg className="w-full h-full" preserveaspectratio="none">
<path d="M 957 100 Q 1007 178.2 957 256.4 Q 907 334.59999999999997 957 412.79999999999995 Q 1007 491 957 569.2 Q 907 647.4000000000001 957 725.6 Q 1007 803.8000000000001 957 882 " fill="none" id="thread-path" stroke="rgba(229, 218, 200, 0.2)" stroke-dasharray="5,5" strokeWidth="2"></path>
<path d="M 957 100 Q 1007 178.2 957 256.4 Q 907 334.59999999999997 957 412.79999999999995 Q 1007 491 957 569.2 Q 907 647.4000000000001 957 725.6 Q 1007 803.8000000000001 957 882 " fill="none" id="thread-draw" stroke="#E6DAC8" strokeWidth="2" style={{strokeDasharray: '832.415', strokeDashoffset: '832.415'}}></path>
</svg>
</div>
<div className="relative z-10 space-y-32">

<div className="flex items-center justify-start rtl:justify-end md:justify-center w-full timeline-node">
<div className="w-full md:w-1/2 md:pr-12 rtl:md:pr-0 rtl:md:pl-12 flex justify-end rtl:justify-start">
<div className="glass-panel p-6 rounded-xl border-l-2 rtl:border-l-0 rtl:border-r-2 border-beige-200 max-w-sm magnetic-item" style={{transform: 'translate(0px, 0px)'}}>
<span className="text-beige-500 font-mono text-xs mb-2 block">
                  2015
                </span>
<h3 className="text-xl font-medium text-beige-100 mb-2" data-key="time1_title">
                  Inception
                </h3>
<p className="text-sm text-beige-300/70" data-key="time1_desc">
                  Founded with a vision to redefine surgical steel durability.
                </p>
</div>
</div>
</div>

<div className="flex items-center justify-end rtl:justify-start md:justify-center w-full timeline-node">
<div className="w-full md:w-1/2 md:pl-12 rtl:md:pl-0 rtl:md:pr-12 flex justify-start rtl:justify-end">
<div className="glass-panel p-6 rounded-xl border-r-2 rtl:border-r-0 rtl:border-l-2 border-beige-200 max-w-sm magnetic-item text-right rtl:text-left" style={{transform: 'translate(0px, 0px)'}}>
<span className="text-beige-500 font-mono text-xs mb-2 block">
                  2019
                </span>
<h3 className="text-xl font-medium text-beige-100 mb-2" data-key="time2_title">
                  Global Expansion
                </h3>
<p className="text-sm text-beige-300/70" data-key="time2_desc">
                  Partnering with top tier hospitals across 12 countries.
                </p>
</div>
</div>
</div>

<div className="flex items-center justify-start rtl:justify-end md:justify-center w-full timeline-node">
<div className="w-full md:w-1/2 md:pr-12 rtl:md:pr-0 rtl:md:pl-12 flex justify-end rtl:justify-start">
<div className="glass-panel p-6 rounded-xl border-l-2 rtl:border-l-0 rtl:border-r-2 border-beige-200 max-w-sm magnetic-item" style={{transform: 'translate(0px, 0px)'}}>
<span className="text-beige-500 font-mono text-xs mb-2 block">
                  2024
                </span>
<h3 className="text-xl font-medium text-beige-100 mb-2" data-key="time3_title">
                  The New Standard
                </h3>
<p className="text-sm text-beige-300/70" data-key="time3_desc">
                  Launching the Series-X titanium coated instruments.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/5 bg-navy-900 pt-20 pb-10 z-10" id="contact">
<div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mr-auto ml-auto pr-6 pl-6 -translate-x-1 gap-x-12 gap-y-12" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'}}>
<div className="col-span-1 md:col-span-2 w-64 h-64 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdd2f746-e3fe-47c5-b207-507bdda1ed0c_1600w.png)] bg-cover bg-center space-y-6">
<span className="text-beige-100 text-2xl font-semibold tracking-tighter" style={{}}></span>
</div>
<div className="space-y-4">
<h4 className="text-beige-100 font-medium" data-key="nav_contact">
            Contact Us
          </h4>
<ul className="space-y-2 text-sm text-beige-300/60">
<li className="">info@muhrah-surgical.com</li>
<li className="" style={{}}>+966 54 123 4567</li>
<li className="" data-key="addr" style={{}}>Jeddah , Saudi Arabia</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-beige-100 font-medium" data-key="social">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors text-beige-200" href="#">
<svg className="" data-icon-set="lucide" data-lucide="twitter" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors text-beige-200" href="#">
<svg className="" data-icon-set="lucide" data-lucide="linkedin" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 text-center md:text-left rtl:md:text-right">
<p className="text-beige-300/30 text-xs" data-key="copyright" style={{}}>© 2026 Muhrah Surgical. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
