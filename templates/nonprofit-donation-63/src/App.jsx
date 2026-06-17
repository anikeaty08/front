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



// Configure Tailwind with the New Brand Palette
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
white: '#fffffe',
cream: '#fcf6e3',
yellow: '#fac300',
green: '#174f38',
'green-dark': '#0f3526',
'yellow-light': '#fdeab3',
}
},
fontFamily: {
sans: ['IBM Plex Sans Arabic', 'sans-serif'],
}
}
},
plugins: []
};



      // Theme Toggle Logic
      function toggleTheme() {
        document.documentElement.classList.toggle('dark');
        // Optional: Save preference
        // localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      }

      // Simple Router Logic
      function switchPage(pageId) {
          // Hide all pages
          document.querySelectorAll('.page-content').forEach(page => {
              page.classList.remove('active-page');
          });

          // Show target page
          const targetPage = document.getElementById(pageId);
          if(targetPage) {
              targetPage.classList.add('active-page');
              window.scrollTo({ top: 0, behavior: 'smooth' });

              // Re-trigger animations
              const reveals = targetPage.querySelectorAll('.reveal');
              reveals.forEach(el => {
                  el.classList.remove('active');
                  setTimeout(() => el.classList.add('active'), 100);
              });
          }
      }

      // FAQ Toggle Logic
      function toggleFaq(element) {
          element.classList.toggle('active');
      }

      document.addEventListener('DOMContentLoaded', () => {
          const reveals = document.querySelectorAll('.reveal');

          const revealOnScroll = () => {
              const windowHeight = window.innerHeight;
              const elementVisible = 50;

              reveals.forEach((reveal) => {
                  const elementTop = reveal.getBoundingClientRect().top;
                  if (elementTop < windowHeight - elementVisible) {
                      reveal.classList.add('active');
                  }
              });
          };

          const navbar = document.getElementById('navbar');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) {
                  navbar.classList.add('shadow-lg');
                  // Classes handle the colors, this just adds shadow logic
              } else {
                  navbar.classList.remove('shadow-lg');
              }
              revealOnScroll();
          });

          revealOnScroll();
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] right-[10%] w-[800px] h-[800px] rounded-full blur-[130px] bg-brand-cream/60 dark:bg-brand-green/10 animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] rounded-full blur-[130px] bg-brand-yellow/10 dark:bg-brand-yellow/5"></div>
<div className="absolute inset-0 grid-bg [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-xl border-brand-green/10 dark:border-white/5 bg-brand-white/80 dark:bg-[#050505]/80 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer" onclick="switchPage('home')">
<div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center shadow-lg shadow-brand-green/20 group-hover:shadow-brand-green/40 transition-all duration-300">
<svg className="text-brand-white fill-current" height="22" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.5L14.2 8.7L12 10.9L9.8 8.7L12 6.5Z"></path>
<path d="M7 16C7 13.2 9.2 11 12 11C14.8 11 17 13.2 17 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-2xl font-semibold text-brand-green dark:text-brand-white tracking-tight group-hover:text-brand-yellow transition-colors">
            فياض
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-zinc-500 dark:text-zinc-400">
<button className="hover:text-brand-green dark:hover:text-brand-yellow hover:-translate-y-0.5 transition-all duration-200" onclick="switchPage('products')">
            المنتجات
          </button>
<button className="hover:text-brand-green dark:hover:text-brand-yellow hover:-translate-y-0.5 transition-all duration-200" onclick="switchPage('cases')">
            حالات الاستخدام
          </button>
<button className="hover:text-brand-green dark:hover:text-brand-yellow hover:-translate-y-0.5 transition-all duration-200" onclick="switchPage('updates')">
            التحديثات
          </button>
<button className="hover:text-brand-green dark:hover:text-brand-yellow hover:-translate-y-0.5 transition-all duration-200" onclick="switchPage('about')">
            عن فياض
          </button>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:block text-base font-normal transition-colors hover:text-brand-green dark:hover:text-brand-white text-zinc-500 dark:text-zinc-400 mx-2" onclick="switchPage('login')">
            دخول الجمعيات
          </button>
<button aria-label="Toggle theme" className="w-9 h-9 rounded-full flex items-center justify-center bg-brand-cream dark:bg-white/5 text-brand-green dark:text-brand-yellow hover:bg-brand-yellow/20 dark:hover:bg-white/10 transition-colors" onclick="toggleTheme()">
<svg className="iconify iconify--lucide dark:hidden" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="none" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
<path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<svg className="iconify iconify--lucide hidden dark:block" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="hidden sm:flex group relative px-5 py-2 rounded-full text-sm font-semibold transition-all overflow-hidden bg-brand-green dark:bg-brand-white text-brand-white dark:text-brand-green hover:shadow-lg hover:shadow-brand-green/20 hover:scale-105 active:scale-95" onclick="switchPage('contact')">
<div className="absolute inset-0 animate-shimmer opacity-20 dark:opacity-100"></div>
<span className="relative z-10 flex items-center gap-2">
              احجز ديمو
              <svg className="iconify group-hover:-translate-x-1 transition-transform iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5m7 7l-7-7l7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</button>
</div>
</div>
</nav>

<div className="pt-16 min-h-screen relative">

<div className="page-content active-page" id="home">
<main className="md:pt-32 md:pb-32 max-w-7xl mx-auto pt-20 px-6 pb-20 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 max-w-2xl reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-8 backdrop-blur-md border-brand-yellow/30 bg-brand-yellow/10 text-brand-green dark:text-brand-yellow shadow-[0_0_10px_rgba(250,195,0,0.1)] hover:bg-brand-yellow/20 transition-colors cursor-pointer" onclick="switchPage('updates')">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-yellow"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
</span>
                تحديث جديد: التحليل الذكي للمستفيدين
              </div>
<h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-[1.15] text-brand-green dark:text-white tracking-tight">
                انتقل بجمعيتك من
                <br className="hidden md:block"/>
                "مجرد متجر" إلى
                <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-yellow via-brand-green to-brand-green dark:from-brand-yellow dark:via-brand-white dark:to-white">
                  منظومة رقمية ذكية.
                </span>
</h1>
<p className="text-xl mb-10 leading-relaxed max-w-xl font-normal dark:font-light text-zinc-600 dark:text-zinc-400">
                لا تكتفِ باستقبال التبرعات؛ أدر مستفيديك بذكاء اصطناعي، ضاعف
                ولاء مانحيك، وحقق استدامتك المالية بأدوات صُممت للقطاع غير
                الربحي.
              </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 bg-brand-green dark:bg-brand-white text-brand-white dark:text-brand-green hover:shadow-lg hover:shadow-brand-green/20 hover:-translate-y-1 text-base" onclick="switchPage('contact')">
                  احجز عرضًا مباشرًا
                  <svg className="iconify group-hover:-translate-x-1 transition-transform iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5m7 7l-7-7l7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="group px-8 py-4 rounded-xl border font-normal transition-all backdrop-blur-sm flex items-center justify-center gap-2 border-brand-green/10 dark:border-white/10 bg-brand-cream/50 dark:bg-white/5 text-brand-green dark:text-brand-white hover:bg-brand-cream dark:hover:bg-white/10 text-base" onclick="switchPage('products')">
                  استكشف المنتجات
                  <svg className="iconify group-hover:scale-110 transition-transform iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</g>
</svg>
</button>
</div>
</div>
<div className="relative h-[600px] w-full hidden lg:block perspective-1000 select-none pointer-events-none reveal active">
<div className="absolute top-16 left-12 w-80 glass-card p-5 rounded-2xl shadow-2xl animate-float z-20 shadow-brand-green/5 dark:shadow-black/50 border-t border-brand-white/40 dark:border-white/10 bg-brand-white/90 dark:bg-zinc-900/40">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-yellow to-brand-green flex items-center justify-center text-white text-sm font-semibold shadow-md">
                      أ
                    </div>
<div>
<div className="text-base font-semibold text-brand-green dark:text-white">
                        عبدالله المحمد
                      </div>
<div className="text-xs text-brand-green dark:text-brand-yellow font-normal bg-brand-cream dark:bg-brand-green/20 px-1.5 py-0.5 rounded inline-block mt-0.5">
                        سفير وفاء
                      </div>
</div>
</div>
<svg className="iconify text-brand-yellow iconify--lucide drop-shadow-md" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m2 4l3 12h14l3-12l-6 7l-4-7l-4 7l-6-7zm3 16h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="space-y-3">
<div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-300">
<span>القيمة الدورية</span>
<span className="text-brand-green dark:text-white font-semibold font-mono">
                      500 SAR
                    </span>
</div>
<div className="h-2 w-full rounded-full overflow-hidden bg-brand-cream dark:bg-zinc-800/50 inner-shadow">
<div className="h-full w-[90%] rounded-full bg-gradient-to-r from-brand-green to-brand-yellow shadow-[0_0_10px_rgba(23,79,56,0.4)]"></div>
</div>
</div>
</div>
<div className="absolute bottom-32 right-0 w-80 glass-card p-6 rounded-2xl shadow-2xl animate-float z-10 border border-brand-green/10 dark:border-white/5 backdrop-blur-2xl bg-brand-cream/60 dark:bg-zinc-900/60" style={{animationDelay: '2s'}}>
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded-md bg-brand-green/10 dark:bg-brand-green/20 text-brand-green dark:text-brand-yellow">
<svg className="iconify iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="9" cy="7" fill="none" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-base font-medium text-brand-green dark:text-brand-white">
                      تحليل الاحتياج
                    </span>
</div>
<span className="text-sm text-brand-green dark:text-brand-yellow font-mono flex items-center gap-1">
                    85%
                    <svg className="iconify iconify--lucide" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12l5 5l10-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
<span>مستوى الدخل</span>
<span>منخفض</span>
</div>
<div className="h-1.5 w-full bg-brand-white dark:bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-[80%] bg-brand-yellow rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400 pt-1">
<span>عدد الأفراد</span>
<span>6</span>
</div>
<div className="h-1.5 w-full bg-brand-white dark:bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-[60%] bg-brand-green dark:bg-zinc-600 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 reveal active">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-brand-green dark:text-white mb-3 tracking-tight">
                  منظومة متكاملة
                  <span className="text-brand-yellow dark:text-zinc-500">
                    لأثر أعمق
                  </span>
</h2>
<p className="text-zinc-500 dark:text-zinc-400 text-lg font-light">
                  أدوات رقمية مترابطة صممت خصيصاً لتلبية احتياجات الجمعيات
                  الأهلية.
                </p>
</div>
<div className="hidden md:block">
<button className="group flex items-center gap-2 text-sm font-medium text-brand-green dark:text-white hover:text-brand-yellow dark:hover:text-brand-yellow transition-colors" onclick="switchPage('products')">
<span>عرض كل المنتجات</span>
<svg className="iconify iconify--lucide group-hover:translate-x-[-4px] transition-transform" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-[2rem] bg-brand-white dark:bg-[#0A0A0A] border border-brand-green/10 dark:border-white/5 hover:border-brand-green/30 dark:hover:border-brand-yellow/30 shadow-sm hover:shadow-lg dark:shadow-none transition-all duration-300 overflow-hidden reveal cursor-pointer" onclick="switchPage('products')">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-green/5 dark:from-brand-green/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 grid-bg opacity-[0.2]"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-14 h-14 rounded-2xl bg-brand-cream dark:bg-brand-green/10 border border-brand-green/10 dark:border-white/10 flex items-center justify-center text-brand-green dark:text-brand-yellow mb-8 group-hover:scale-110 group-hover:border-brand-green/30 transition-all duration-300 shadow-xl shadow-brand-green/5 dark:shadow-black/20">
<svg className="iconify iconify--lucide" height="26" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
<path d="M12 16v-4m0-4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3 group-hover:text-brand-green dark:group-hover:text-brand-yellow transition-colors">
                    ذكاء المانحين
                  </h3>
<p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                    قاعدة بيانات ذكية (CRM) تحلل سلوك المتبرعين وتساعدك في
                    الحفاظ عليهم.
                  </p>
<div className="mt-auto flex items-center gap-2 text-xs font-medium text-brand-green dark:text-brand-yellow opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    تفاصيل أكثر
                    <svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>

<div className="group relative p-8 rounded-[2rem] bg-brand-white dark:bg-[#0A0A0A] border border-brand-green/10 dark:border-white/5 hover:border-brand-yellow/50 dark:hover:border-brand-yellow/30 shadow-sm hover:shadow-lg dark:shadow-none transition-all duration-300 overflow-hidden reveal delay-100 cursor-pointer" onclick="switchPage('products')">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-yellow/10 dark:from-brand-yellow/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 grid-bg opacity-[0.2]"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-14 h-14 rounded-2xl bg-brand-cream dark:bg-brand-green/10 border border-brand-green/10 dark:border-white/10 flex items-center justify-center text-brand-green dark:text-brand-white mb-8 group-hover:scale-110 group-hover:border-brand-yellow/50 transition-all duration-300 shadow-xl shadow-brand-green/5 dark:shadow-black/20">
<svg className="iconify iconify--lucide" height="26" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="9" cy="7" fill="none" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3 group-hover:text-brand-yellow dark:group-hover:text-brand-yellow transition-colors">
                    إدارة المستفيدين
                    <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 mr-2 align-middle">
                      قريبًا
                    </span>
</h3>
<p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                    أتمتة دراسة الحالات وصرف المساعدات بناءً على معايير
                    الاستحقاق الدقيقة.
                  </p>
<div className="mt-auto flex items-center gap-2 text-xs font-medium text-brand-green dark:text-brand-yellow opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    تفاصيل أكثر
                    <svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>

<div className="group relative p-8 rounded-[2rem] bg-brand-white dark:bg-[#0A0A0A] border border-brand-green/10 dark:border-white/5 hover:border-brand-green/30 dark:hover:border-brand-yellow/30 shadow-sm hover:shadow-lg dark:shadow-none transition-all duration-300 overflow-hidden reveal delay-200 cursor-pointer" onclick="switchPage('products')">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-yellow/5 dark:from-brand-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 grid-bg opacity-[0.2]"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-14 h-14 rounded-2xl bg-brand-cream dark:bg-brand-green/10 border border-brand-green/10 dark:border-white/10 flex items-center justify-center text-brand-yellow dark:text-brand-yellow mb-8 group-hover:scale-110 group-hover:border-brand-yellow/50 transition-all duration-300 shadow-xl shadow-brand-green/5 dark:shadow-black/20">
<svg className="iconify iconify--lucide" height="26" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18m-9 4v10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3 group-hover:text-brand-yellow dark:group-hover:text-brand-yellow transition-colors">
                    المتجر الإلكتروني
                  </h3>
<p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                    واجهة تبرع عصرية تدعم كافة وسائل الدفع مع تجربة مستخدم سلسة.
                  </p>
<div className="mt-auto flex items-center gap-2 text-xs font-medium text-brand-green dark:text-brand-yellow opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    تفاصيل أكثر
                    <svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-content" id="products">
<section className="max-w-7xl mx-auto pt-24 pb-20 px-6">
<div className="text-center max-w-3xl mx-auto mb-20 reveal active">
<h2 className="text-4xl md:text-5xl font-semibold mb-6 text-brand-green dark:text-white tracking-tight">
              منظومة منتجات
              <br/>
<span className="text-brand-yellow dark:text-zinc-500">
                لأثر مستدام
              </span>
</h2>
<p className="text-lg text-zinc-500 dark:text-zinc-400">
              حلول مترابطة تغطي رحلة التبرع من المانح وصولاً إلى المستفيد الأشد
              احتياجاً.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 reveal active">

<div className="glass-card p-8 rounded-3xl border border-brand-green/10 dark:border-white/5 hover:border-brand-yellow/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl bg-brand-cream dark:bg-brand-green/10 flex items-center justify-center text-brand-green dark:text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="iconify iconify--lucide" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18m-9 4v10m-9-4L2 6l1-4h18l1 4l-1 10z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3 group-hover:text-brand-yellow transition-colors">
                المتجر الإلكتروني
              </h3>
<p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                واجهة تبرع عصرية وسلسة تتيح للمانحين التبرع لمشاريعكم بسهولة،
                مصممة لتعكس هوية جمعيتكم البصرية وتعمل بكفاءة على جميع الأجهزة.
              </p>
</div>

<div className="glass-card p-8 rounded-3xl border border-brand-green/10 dark:border-white/5 hover:border-brand-yellow/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 delay-75">
<div className="w-14 h-14 rounded-xl bg-brand-cream dark:bg-brand-green/10 flex items-center justify-center text-brand-green dark:text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="iconify iconify--lucide" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18M18 17V9m-5 8v-5m-5 5v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3 group-hover:text-brand-yellow transition-colors">
                تحليل سلوك المتبرعين
              </h3>
<p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                لوحة تحكم ذكية (CRM) تحلل بيانات المانحين وتصنفهم آلياً (جدد،
                أوفياء، منقطعين)، لتساعدك في بناء حملات تسويقية مخصصة تضاعف
                العائد.
              </p>
</div>

<div className="glass-card p-8 rounded-3xl border border-brand-green/10 dark:border-white/5 hover:border-brand-yellow/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 delay-100">
<div className="w-14 h-14 rounded-xl bg-brand-cream dark:bg-brand-green/10 flex items-center justify-center text-brand-green dark:text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="iconify iconify--lucide" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="9" cy="7" fill="none" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3 group-hover:text-brand-yellow transition-colors">
                إدارة المستفيدين الذكية
                <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 mr-2 align-middle">
                  قريبًا
                </span>
</h3>
<p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                نظام مؤتمت لتقييم الاحتياج، يربط البيانات ويدرس الحالات آلياً
                بناءً على معايير دقيقة لضمان وصول الدعم لمستحقيه بسرعة ودقة
                عالية.
              </p>
</div>

<div className="glass-card p-8 rounded-3xl border border-brand-green/10 dark:border-white/5 hover:border-brand-yellow/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 delay-150">
<div className="w-14 h-14 rounded-xl bg-brand-cream dark:bg-brand-green/10 flex items-center justify-center text-brand-green dark:text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="iconify iconify--lucide" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="m9 12l2 2l4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3 group-hover:text-brand-yellow transition-colors">
                بوابة دفع آمنة
              </h3>
<p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                خيارات دفع متعددة (Apple Pay, Mada, Visa, MasterCard) بأعلى
                معايير الأمان (PCI-DSS) والحماية من الاحتيال، مع تسوية تلقائية
                للحسابات.
              </p>
</div>

<div className="glass-card p-8 rounded-3xl border border-brand-green/10 dark:border-white/5 hover:border-brand-yellow/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 delay-200">
<div className="w-14 h-14 rounded-xl bg-brand-cream dark:bg-brand-green/10 flex items-center justify-center text-brand-green dark:text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="iconify iconify--lucide" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
<circle cx="6" cy="12" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
<circle cx="18" cy="19" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
<path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3 group-hover:text-brand-yellow transition-colors">
                مشاركة أثر التبرعات
              </h3>
<p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                أدوات تلقائية لإرسال تقارير الأثر للمتبرعين (صور، فيديو، تقارير)
                فور تنفيذ المشروع، مما يعزز الثقة والشفافية ويحفزهم للتبرع مرة
                أخرى.
              </p>
</div>

<div className="glass-card p-8 rounded-3xl border border-brand-green/10 dark:border-white/5 hover:border-brand-yellow/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 delay-250">
<div className="w-14 h-14 rounded-xl bg-brand-cream dark:bg-brand-green/10 flex items-center justify-center text-brand-green dark:text-brand-yellow mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="iconify iconify--lucide" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="m22 17.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65m20-6.1l-9.17 4.16a2 2 0 0 1-1.66 0L2 11.55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3 group-hover:text-brand-yellow transition-colors">
                وأكثر...
              </h3>
<p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                ربط سلس مع الأنظمة المحاسبية، إدارة التطوع، خدمات الرسائل SMS،
                والعديد من المزايا التقنية التي نطورها باستمرار لتلبية
                احتياجاتكم.
              </p>
</div>
</div>
</section>
</div>

<div className="page-content" id="cases">
<section className="max-w-7xl mx-auto pt-24 pb-20 px-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal active">
<h2 className="text-4xl font-semibold mb-6 text-brand-green dark:text-white tracking-tight">
              شركاء النجاح
            </h2>
<p className="text-lg text-zinc-500 dark:text-zinc-400">
              حلول مخصصة لكل تخصص في القطاع غير الربحي.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

<div className="glass-card p-8 rounded-3xl flex flex-col h-full reveal hover:translate-y-[-5px] transition-transform duration-300 active">
<div className="h-40 rounded-2xl bg-brand-cream dark:bg-zinc-800/50 mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="charity" className="w-full h-full object-cover opacity-80 dark:opacity-60" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 z-20 text-white font-semibold">
                  جمعيات الإغاثة
                </div>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3">
                الاستجابة السريعة للكوارث
              </h3>
<p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                تمكين الجمعيات الإغاثية من إنشاء "روابط تبرع سريعة" خلال دقائق
                من وقوع الأزمات، مع إمكانية تحديث حالة المشروع للمتبرعين لحظياً.
              </p>
<div className="flex items-center gap-2 text-xs font-mono text-brand-green dark:text-brand-yellow bg-brand-cream dark:bg-brand-green/20 p-2 rounded w-fit">
<svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8l10-12h-9l1-8z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                +300% سرعة جمع التبرعات
              </div>
</div>

<div className="glass-card p-8 rounded-3xl flex flex-col h-full reveal delay-100 hover:translate-y-[-5px] transition-transform duration-300 active">
<div className="h-40 rounded-2xl bg-brand-cream dark:bg-zinc-800/50 mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="orphans" className="w-full h-full object-cover opacity-80 dark:opacity-60" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 z-20 text-white font-semibold">
                  جمعيات الأيتام
                </div>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3">
                الكفالات والاستقطاع الشهري
              </h3>
<p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                نظام آلي لإدارة الاستقطاعات الشهرية لكفالة الحلقات والمعلمين، مع
                إشعارات تذكيرية للمتبرعين في حال فشل العملية.
              </p>
<div className="flex items-center gap-2 text-xs font-mono text-brand-green dark:text-brand-yellow bg-brand-cream dark:bg-brand-green/20 p-2 rounded w-fit">
<svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                95% نسبة استدامة الدعم
              </div>
</div>

<div className="glass-card p-8 rounded-3xl flex flex-col h-full reveal delay-200 hover:translate-y-[-5px] transition-transform duration-300 active">
<div className="h-40 rounded-2xl bg-brand-cream dark:bg-zinc-800/50 mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="orphan" className="w-full h-full object-cover opacity-80 dark:opacity-60" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 z-20 text-white font-semibold">
                  رعاية الأيتام
                </div>
</div>
<h3 className="text-xl font-semibold text-brand-green dark:text-white mb-3">
                بوابة اليتيم الإلكترونية
              </h3>
<p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                ربط الكافل باليتيم من خلال تقارير دورية تصل للكافل عبر لوحة
                التحكم، مما يعزز الثقة والشفافية ويطيل أمد الكفالة.
              </p>
<div className="flex items-center gap-2 text-xs font-mono text-brand-green dark:text-brand-yellow bg-brand-cream dark:bg-brand-green/20 p-2 rounded w-fit">
<svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
<path d="m9 12l2 2l4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                أتمتة التقارير 100%
              </div>
</div>
</div>

<div className="glass-card rounded-3xl p-10 border border-brand-green/10 bg-brand-cream dark:bg-brand-green/5 reveal active">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<svg className="text-brand-green/50 dark:text-brand-yellow/50 mb-4 opacity-50 iconify iconify--lucide" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M10 11L8 17h3a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4v2h4a1 1 0 0 1 1 1zM20 11l-2 6h3a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-7v2h4a1 1 0 0 1 1 1z" fill="currentColor"></path>
</svg>
<h3 className="text-xl md:text-2xl font-light text-brand-green dark:text-white italic leading-relaxed mb-6">
                  "نظام فياض ساعدنا في تحويل العمل اليدوي إلى منظومة رقمية
                  متكاملة. ارتفعت التبرعات المستدامة بنسبة 40% خلال الربع الأول
                  فقط."
                </h3>
<div>
<p className="text-brand-green dark:text-white font-semibold">
                    أ. محمد العتيبي
                  </p>
<p className="text-zinc-500 dark:text-brand-yellow text-sm">
                    مدير تنفيذي، جمعية البر
                  </p>
</div>
</div>
<div className="w-full md:w-1/3">
<div className="aspect-square rounded-2xl bg-brand-cream dark:bg-zinc-800 relative overflow-hidden">
<img alt="meeting" className="w-full h-full object-cover opacity-90 dark:opacity-80" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-content" id="updates">
<section className="max-w-4xl mx-auto pt-24 pb-20 px-6">

<div className="text-center mb-16 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-6 backdrop-blur-md border-brand-green/10 bg-brand-cream/50 dark:bg-brand-green/10 text-brand-green dark:text-brand-yellow">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-green dark:bg-brand-yellow"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green dark:bg-brand-yellow"></span>
</span>
                سجل التغييرات
            </div>
<h2 className="text-4xl md:text-5xl font-semibold mb-4 text-brand-green dark:text-white tracking-tight">
              مركز التحديثات
            </h2>
<p className="text-lg text-zinc-500 dark:text-zinc-400">
              تابع آخر الميزات، التحسينات، والإصلاحات في منصة فياض.
            </p>
</div>

<div className="space-y-12 relative before:absolute before:inset-0 before:mr-6 md:before:mr-[8.5rem] before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-brand-green/20 before:dark:via-white/10 before:to-transparent">

<div className="relative flex flex-col md:flex-row gap-8 md:gap-12 reveal active">
<div className="md:w-32 flex-shrink-0 flex md:flex-col items-center md:items-end justify-start pt-1.5">
<span className="text-sm font-semibold text-brand-green dark:text-white">15 أكتوبر</span>
<span className="text-xs text-zinc-500 hidden md:block mt-1">v2.4.0</span>

<div className="absolute right-[1.35rem] md:right-[8.35rem] top-2.5 w-3 h-3 rounded-full bg-brand-green dark:bg-brand-yellow border-4 border-white dark:border-[#050505] shadow-[0_0_0_1px_rgba(23,79,56,0.2)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.2)] z-10"></div>
</div>
<div className="flex-1 glass-card p-6 md:p-8 rounded-2xl border border-brand-green/10 dark:border-white/5 hover:border-brand-yellow/30 transition-colors">
<div className="flex items-center gap-3 mb-4">
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 uppercase tracking-wider">
                            جديد
                        </span>
<h3 className="text-xl font-semibold text-brand-green dark:text-white">نظام تحليل المستفيدين الذكي</h3>
</div>
<p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                        أطلقنا اليوم ميزة جديدة تعتمد على الذكاء الاصطناعي لتقييم طلبات المستفيدين آلياً. يقوم النظام بربط البيانات مع الجهات الحكومية وتحليل مستوى الاحتياج لترتيب الأولويات وضمان وصول الدعم لمستحقيه.
                    </p>
<div className="rounded-xl overflow-hidden border border-brand-green/5 dark:border-white/5">
<div className="bg-brand-cream/50 dark:bg-white/5 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-white dark:bg-zinc-800 flex items-center justify-center text-brand-green dark:text-brand-yellow">
<svg className="iconify iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<span className="text-sm font-medium">نسبة دقة المطابقة</span>
</div>
<span className="text-lg font-bold text-brand-green dark:text-brand-yellow font-mono">98.5%</span>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-12 reveal active delay-75">
<div className="md:w-32 flex-shrink-0 flex md:flex-col items-center md:items-end justify-start pt-1.5">
<span className="text-sm font-semibold text-brand-green dark:text-white">28 سبتمبر</span>
<span className="text-xs text-zinc-500 hidden md:block mt-1">v2.3.1</span>

<div className="absolute right-[1.35rem] md:right-[8.35rem] top-2.5 w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600 border-4 border-white dark:border-[#050505] z-10"></div>
</div>
<div className="flex-1 glass-card p-6 md:p-8 rounded-2xl border border-brand-green/10 dark:border-white/5 hover:border-brand-yellow/30 transition-colors">
<div className="flex items-center gap-3 mb-4">
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-green/10 dark:bg-white/10 text-brand-green dark:text-white border border-brand-green/10 dark:border-white/10 uppercase tracking-wider">
                            تحسين
                        </span>
<h3 className="text-xl font-semibold text-brand-green dark:text-white">Apple Pay للاستقطاع الشهري</h3>
</div>
<p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                        تم تفعيل خاصية التبرع الدوري عبر Apple Pay، مما يسهل على المانحين الالتزام بالكفالات الشهرية بضغطة زر واحدة دون الحاجة لإدخال بيانات البطاقة في كل مرة.
                    </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-12 reveal active delay-100">
<div className="md:w-32 flex-shrink-0 flex md:flex-col items-center md:items-end justify-start pt-1.5">
<span className="text-sm font-semibold text-brand-green dark:text-white">10 سبتمبر</span>
<span className="text-xs text-zinc-500 hidden md:block mt-1">v2.2.0</span>

<div className="absolute right-[1.35rem] md:right-[8.35rem] top-2.5 w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600 border-4 border-white dark:border-[#050505] z-10"></div>
</div>
<div className="flex-1 glass-card p-6 md:p-8 rounded-2xl border border-brand-green/10 dark:border-white/5 hover:border-brand-yellow/30 transition-colors">
<div className="flex items-center gap-3 mb-4">
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 uppercase tracking-wider">
                            إصلاحات
                        </span>
<h3 className="text-xl font-semibold text-brand-green dark:text-white">تحسينات الأداء والتقارير</h3>
</div>
<ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
<li className="flex items-start gap-2">
<svg className="mt-0.5 iconify iconify--lucide text-brand-green dark:text-brand-yellow" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span>تسريع تحميل لوحة التحكم بنسبة 40%.</span>
</li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 iconify iconify--lucide text-brand-green dark:text-brand-yellow" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span>حل مشكلة تصدير ملفات Excel للبيانات الضخمة.</span>
</li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 iconify iconify--lucide text-brand-green dark:text-brand-yellow" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span>تحسين عرض التبرعات على شاشات الجوال.</span>
</li>
</ul>
</div>
</div>
</div>
</section>
</div>

<div className="page-content" id="about">
<section className="max-w-7xl mx-auto pt-24 pb-20 px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal active">
<h2 className="text-4xl md:text-6xl font-semibold mb-8 text-brand-green dark:text-white tracking-tight">
                نبني جسوراً
                <br/>
<span className="text-zinc-400 dark:text-zinc-500">
                  من الثقة الرقمية.
                </span>
</h2>
<div className="space-y-6 text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
<p>
                  تأسست شركة "فياض" برؤية واضحة: تمكين القطاع غير الربحي بأحدث
                  التقنيات المالية والإدارية.
                </p>
<p>
                  نؤمن بأن العمل الخيري يستحق أفضل الأدوات التقنية لزيادة أثره
                  واستدامته. فريقنا يجمع بين خبرة القطاع الخيري واحترافية هندسة
                  البرمجيات.
                </p>
</div>
<div className="flex gap-12 mt-12 border-t border-brand-green/10 dark:border-white/5 pt-8">
<div>
<div className="text-3xl font-bold text-brand-green dark:text-white mb-1">
                    +200
                  </div>
<div className="text-sm text-zinc-500">جمعية شريكة</div>
</div>
<div>
<div className="text-3xl font-bold text-brand-green dark:text-white mb-1">
                    50M+
                  </div>
<div className="text-sm text-zinc-500">تبرعات معالجة</div>
</div>
<div>
<div className="text-3xl font-bold text-brand-green dark:text-white mb-1">
                    99.9%
                  </div>
<div className="text-sm text-zinc-500">جاهزية النظام</div>
</div>
</div>
</div>
<div className="relative h-[500px] w-full reveal delay-100 hidden md:block active">
<div className="absolute inset-0 rounded-3xl overflow-hidden bg-brand-cream dark:bg-zinc-900 border border-brand-green/10 dark:border-white/5">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-white via-brand-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent"></div>
</div>
<div className="absolute bottom-8 right-8 glass-card p-6 rounded-2xl max-w-xs">
<div className="text-brand-green dark:text-white text-lg font-medium mb-1">
                  مهمتنا
                </div>
<p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  توفير بنية تحتية رقمية تضاعف أثر العطاء في المجتمع.
                </p>
</div>
</div>
</div>
</section>
</div>

<div className="page-content" id="contact">
<section className="max-w-7xl mx-auto pt-24 pb-20 px-6">
<div className="grid md:grid-cols-2 gap-12">
<div className="reveal active">
<h2 className="text-4xl font-semibold mb-4 text-brand-green dark:text-white">
                تواصل معنا
              </h2>
<p className="text-zinc-500 dark:text-zinc-400 mb-10">
                فريقنا جاهز للإجابة على استفساراتكم ومساعدتكم في البدء.
              </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-brand-cream dark:bg-white/5 flex items-center justify-center text-brand-green dark:text-white">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<div className="text-sm text-zinc-500">الهاتف</div>
<div className="text-brand-green dark:text-white font-medium text-lg ltr">
                      +966 11 000 0000
                    </div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-brand-cream dark:bg-white/5 flex items-center justify-center text-brand-green dark:text-white">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect fill="none" height="16" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" x="2" y="4"></rect>
<path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<div className="text-sm text-zinc-500">البريد الإلكتروني</div>
<div className="text-brand-green dark:text-white font-medium text-lg">
                      info@fayyad.sa
                    </div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-brand-cream dark:bg-white/5 flex items-center justify-center text-brand-green dark:text-white">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="12" cy="10" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
</svg>
</div>
<div>
<div className="text-sm text-zinc-500">المقر الرئيسي</div>
<div className="text-brand-green dark:text-white font-medium text-lg">
                      الرياض، طريق الملك فهد
                    </div>
</div>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-3xl reveal delay-100 active">
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">
                      الاسم الأول
                    </label>
<input className="w-full px-4 py-3 rounded-xl input-field text-sm" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">
                      اسم العائلة
                    </label>
<input className="w-full px-4 py-3 rounded-xl input-field text-sm" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">
                    اسم الجمعية
                  </label>
<input className="w-full px-4 py-3 rounded-xl input-field text-sm" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">
                    البريد الإلكتروني
                  </label>
<input className="w-full px-4 py-3 rounded-xl input-field text-sm" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">
                    الرسالة
                  </label>
<textarea className="w-full px-4 py-3 rounded-xl input-field text-sm" rows="4"></textarea>
</div>
<button className="w-full py-3 rounded-xl bg-brand-green dark:bg-white text-white dark:text-black font-semibold mt-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-black/5 dark:shadow-white/5">
                  إرسال الطلب
                </button>
</form>
</div>
</div>
</section>
</div>

<div className="page-content" id="login">
<section className="min-h-[calc(100vh-100px)] flex items-center justify-center px-6">
<div className="glass-card w-full max-w-md p-8 rounded-3xl border border-brand-green/10 dark:border-white/5 reveal active">
<div className="text-center mb-8">
<div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center shadow-lg shadow-brand-green/20 mx-auto mb-4">
<svg className="text-white fill-current" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.5L14.2 8.7L12 10.9L9.8 8.7L12 6.5Z"></path>
<path d="M7 16C7 13.2 9.2 11 12 11C14.8 11 17 13.2 17 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<h2 className="text-2xl font-semibold text-brand-green dark:text-white">
                تسجيل دخول الجمعيات
              </h2>
<p className="text-zinc-500 mt-2 text-sm">أهلاً بك مجدداً في فياض</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">
                  البريد الإلكتروني
                </label>
<input className="w-full px-4 py-3 rounded-xl input-field text-sm" placeholder="name@org.sa" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1.5">
                  كلمة المرور
                </label>
<input className="w-full px-4 py-3 rounded-xl input-field text-sm" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center justify-between mt-2">
<label className="flex items-center gap-2 cursor-pointer checkbox-wrapper">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-300 dark:border-zinc-600 transition-colors flex items-center justify-center">
<svg className="text-white dark:text-black iconify iconify--lucide" height="10" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-xs text-zinc-500 dark:text-zinc-400">
                    تذكرني
                  </span>
</label>
<a className="text-xs text-brand-green dark:text-brand-yellow hover:text-brand-green/80 dark:hover:text-brand-yellow/80" href="#">
                  نسيت كلمة المرور؟
                </a>
</div>
<button className="w-full py-3 rounded-xl bg-brand-green dark:bg-white text-white dark:text-black font-semibold mt-6 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-black/5 dark:shadow-white/5">
                دخول
              </button>
</form>
<div className="mt-8 pt-6 border-t border-brand-green/10 dark:border-white/5 text-center">
<p className="text-xs text-zinc-500">
                ليس لديك حساب؟
                <a className="text-brand-green dark:text-white hover:text-brand-yellow dark:hover:text-brand-yellow font-medium" href="#" onclick="switchPage('contact')">
                  سجل جمعيتك الآن
                </a>
</p>
</div>
</div>
</section>
</div>
</div>

<footer className="border-t pt-20 pb-10 px-6 border-brand-green/10 dark:border-white/5 bg-brand-cream dark:bg-[#020202]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center text-white">
<svg className="fill-current" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.5L14.2 8.7L12 10.9L9.8 8.7L12 6.5Z"></path>
<path d="M7 16C7 13.2 9.2 11 12 11C14.8 11 17 13.2 17 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-2xl font-semibold text-brand-green dark:text-white tracking-tight">
                فياض
              </span>
</div>
<p className="text-base mb-8 text-zinc-500 font-normal leading-relaxed">
              المنصة الأحدث لتمكين القطاع غير الربحي بأدوات النمو والاستدامة.
            </p>
</div>
<div className="">
<h4 className="text-base font-semibold mb-6 text-brand-green dark:text-white">
              المنصة
            </h4>
<ul className="space-y-4 text-base text-zinc-500 font-normal">
<li>
<button className="transition-colors hover:text-brand-green dark:hover:text-brand-yellow" onclick="switchPage('products')">
                  المنتجات
                </button>
</li>
<li className="">
<button className="transition-colors hover:text-brand-green dark:hover:text-brand-yellow" onclick="switchPage('updates')">
                  التحديثات
                </button>
</li>
<li className="">
<a className="transition-colors hover:text-brand-green dark:hover:text-brand-yellow" href="#">حالات الاستخدام</a>
</li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold mb-6 text-brand-green dark:text-white">
              المعرفة
            </h4>
<ul className="space-y-4 text-base text-zinc-500 font-normal">
<li>
<a className="transition-colors hover:text-brand-green dark:hover:text-brand-yellow" href="#">
                  دليل الاستخدام
                </a>
</li>
<li>
<a className="transition-colors hover:text-brand-green dark:hover:text-brand-yellow" href="#">
                  API المطورين
                </a>
</li>
<li>
<button className="transition-colors hover:text-brand-green dark:hover:text-brand-yellow" onclick="switchPage('contact')">
                  الدعم الفني
                </button>
</li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold mb-6 text-brand-green dark:text-white">
              الشركة
            </h4>
<ul className="space-y-4 text-base text-zinc-500 font-normal">
<li>
<button className="transition-colors hover:text-brand-green dark:hover:text-brand-yellow" onclick="switchPage('about')">
                  من نحن
                </button>
</li>
<li>
<button className="transition-colors hover:text-brand-green dark:hover:text-brand-yellow" onclick="switchPage('contact')">
                  اتصل بنا
                </button>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-brand-green/10 dark:border-white/5">
<p className="text-sm text-zinc-500 dark:text-zinc-600 font-normal">
            © 2024 شركة فياض لتقنية المعلومات.
          </p>
<div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-600 font-normal">
<a className="hover:text-brand-green dark:hover:text-brand-yellow transition-colors" href="#">
              سياسة الخصوصية
            </a>
<a className="hover:text-brand-green dark:hover:text-brand-yellow transition-colors" href="#">
              الشروط والأحكام
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
