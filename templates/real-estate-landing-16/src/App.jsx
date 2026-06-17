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



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-0">
<img alt="Riyadh Architecture Top View" className="w-full h-full object-cover opacity-60 grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a2009ed-99ad-4b35-ba30-35a8f271fa48_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-950/50 via-transparent to-stone-950/50"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
<div className="w-full px-6 py-6 md:px-12 flex items-center justify-between">

<div className="flex items-center gap-4 z-50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-md">
<svg className="text-white" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M12 8L7 18H17L12 8Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xl font-medium tracking-tight text-white leading-none">رمـــــال</span>
<span className="text-xs font-light tracking-[0.2em] text-stone-300 uppercase mt-1">Rimal Real Estate</span>
</div>
</div>
</div>

<nav className="hidden lg:flex items-center gap-8 glass-panel px-8 py-3 rounded-full">
<a className="text-lg font-light text-stone-200 hover:text-white transition-colors relative group" href="#">
                    عن رمال
                    <span className="absolute -bottom-1 right-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
</a>
<a className="text-lg font-light text-stone-200 hover:text-white transition-colors relative group" href="#">
                    مجتمعاتنا
                    <span className="absolute -bottom-1 right-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
</a>
<a className="text-lg font-light text-stone-200 hover:text-white transition-colors relative group" href="#">
                    علاقات المستثمرين
                    <span className="absolute -bottom-1 right-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
</a>
<a className="text-lg font-light text-stone-200 hover:text-white transition-colors relative group" href="#">
                    المركز الإعلامي
                    <span className="absolute -bottom-1 right-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
</a>
</nav>

<div className="flex items-center gap-6 z-50">
<button className="text-lg font-light text-white/80 hover:text-white transition-colors">EN</button>
<a className="hidden md:flex items-center gap-2 text-lg font-light text-white/80 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-search w-5 h-5 stroke-[1.5]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span>بحث</span>
</a>
<button className="hidden md:flex items-center gap-2 bg-white text-stone-950 px-5 py-2.5 rounded-full hover:bg-stone-200 transition-all font-medium text-lg">
<span className="">تواصل معنا</span>
<svg aria-hidden="true" className="lucide lucide-arrow-left w-4 h-4 stroke-[1.5]" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>

<button className="lg:hidden text-white">
<svg aria-hidden="true" className="lucide lucide-menu w-8 h-8 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<main className="flex flex-col min-h-screen md:px-12 w-full z-10 pt-20 pr-6 pl-6 relative justify-center">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:pb-24 w-full max-w-7xl mr-auto ml-auto pb-12 gap-x-12 gap-y-12 items-end">

<div className="lg:col-span-8 flex flex-col gap-6 lg:gap-8 order-2 lg:order-1 gap-x-6 gap-y-6">
<div className="flex items-center gap-3">
<span className="h-px w-8 bg-orange-400/80"></span>
<span className="text-orange-300 font-medium text-lg tracking-wide">رؤية المستقبل</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.1]">
                    مساحات صُممت <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-l from-white via-white to-white/50">بإتقان وابتكـــار</span>
</h1>
<p className="text-xl md:text-2xl font-light text-stone-300 max-w-2xl leading-relaxed">
                    نقود التقدم المعماري الحديث في قلب الرياض. نبتكر بيئات سكنية وتجارية ترتقي بجودة الحياة وتصنع فرصاً استثمارية مستدامة.
                </p>
<div className="flex flex-wrap items-center gap-6 mt-4">
<button className="group relative px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full transition-all overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative flex items-center gap-3 text-lg font-medium">
                            استكشف مشاريعنا
                            <svg aria-hidden="true" className="lucide lucide-arrow-down-left w-5 h-5 stroke-[1.5] transition-transform group-hover:translate-x-1 group-hover:translate-y-1" data-lucide="arrow-down-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></svg>
</span>
</button>
<button className="flex items-center gap-3 px-6 py-4 text-white hover:text-orange-300 transition-colors text-lg font-light group">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-300/50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-play w-5 h-5 stroke-[1.5] fill-current opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
                        شاهد الفيديو التعريفي
                    </button>
</div>
</div>

<div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end gap-8 order-1 lg:order-2 mb-8 lg:mb-0">
<div className="glass-panel p-6 rounded-2xl w-full max-w-xs transform transition hover:-translate-y-1 duration-500">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-orange-500/10 rounded-lg">
<svg aria-hidden="true" className="lucide lucide-building-2 w-6 h-6 text-orange-400 stroke-[1.5]" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-5 h-5 text-stone-500 stroke-[1.5]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="space-y-1">
<span className="text-4xl font-medium tracking-tight text-white">+٤٥</span>
<p className="text-lg text-stone-400 font-light">مشروع سكني وتجاري</p>
</div>
</div>
<div className="glass-panel transform transition hover:-translate-y-1 duration-500 delay-100 w-full max-w-xs rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-blue-500/10 rounded-lg">
<svg aria-hidden="true" className="lucide lucide-users w-6 h-6 text-blue-400 stroke-[1.5]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-5 h-5 text-stone-500 stroke-[1.5]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="space-y-1">
<span className="text-4xl font-medium tracking-tight text-white">١٢٠٠</span>
<p className="text-lg text-stone-400 font-light">عائلة سعيدة</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-0 right-0 px-12 z-20">
<div className="flex lg:justify-between max-w-7xl border-white/10 border-t mr-auto ml-auto pt-8 items-center justify-center">

<div className="hidden lg:flex items-center gap-6">
<a className="text-stone-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-twitter w-5 h-5 stroke-[1.5]" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-stone-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-instagram w-5 h-5 stroke-[1.5]" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-stone-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-linkedin w-5 h-5 stroke-[1.5]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>

<div className="flex items-center gap-3">
<button className="w-2.5 h-2.5 rounded-full bg-orange-500 ring-4 ring-orange-500/20 transition-all"></button>
<button className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50 transition-all"></button>
<button className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50 transition-all"></button>
</div>

<div className="hidden lg:flex items-center gap-3 text-stone-400">
<span className="text-sm font-light uppercase tracking-widest">تصفح للأسفل</span>
<div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent"></div>
</div>
</div>
</div>
</main>

<section className="relative z-10 bg-stone-950 py-24 px-6 md:px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">قيم تصنع الفارق</h2>
<p className="text-xl text-stone-400 font-light max-w-lg">نهجنا في التطوير العقاري يتجاوز البناء، نحن نبني إرثاً يمتد لأجيال.</p>
</div>
<a className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-lg font-medium group" href="#">
                    تعرف على المزيد
                    <svg aria-hidden="true" className="lucide lucide-arrow-left w-5 h-5 stroke-[1.5] transition-transform group-hover:-translate-x-1" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-stone-900/50 border border-white/5 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<svg aria-hidden="true" className="lucide lucide-gem w-6 h-6 text-stone-300 group-hover:text-orange-400 stroke-[1.5]" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-3">جودة استثنائية</h3>
<p className="text-lg text-stone-400 font-light leading-relaxed">معايير بناء عالمية تضمن استدامة استثمارك ورفاهية عائلتك.</p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-stone-900/50 border border-white/5 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<svg aria-hidden="true" className="lucide lucide-map-pin w-6 h-6 text-stone-300 group-hover:text-orange-400 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-3">مواقع استراتيجية</h3>
<p className="text-lg text-stone-400 font-light leading-relaxed">نختار بعناية أفضل المواقع في أحياء الرياض الحيوية والواعدة.</p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-stone-900/50 border border-white/5 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<svg aria-hidden="true" className="lucide lucide-leaf w-6 h-6 text-stone-300 group-hover:text-orange-400 stroke-[1.5]" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-3">تصاميم مستدامة</h3>
<p className="text-lg text-stone-400 font-light leading-relaxed">نراعي البيئة في تصاميمنا لنخلق مجتمعات صحية ومتناغمة.</p>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
