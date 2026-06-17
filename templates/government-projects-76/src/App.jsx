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
theme: {
extend: {
colors: {
brand: {
beige: '#F5F3ED',
beigeDark: '#E8E5DC',
sky: '#E0F2FE',
skyLight: '#F0F9FF',
dark: '#0F172A'
}
},
fontFamily: {
sans: ['Inter', 'Cairo', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Modal Logic
        function openModal() {
            const modal = document.getElementById('loginModal');
            const inner = document.getElementById('loginModalInner');
            
            modal.classList.remove('modal-enter');
            modal.classList.add('modal-enter-active');
            
            setTimeout(() => {
                inner.classList.remove('scale-95', 'opacity-0');
                inner.classList.add('scale-100', 'opacity-100');
            }, 50);
        }

        function closeModal() {
            const modal = document.getElementById('loginModal');
            const inner = document.getElementById('loginModalInner');
            
            inner.classList.remove('scale-100', 'opacity-100');
            inner.classList.add('scale-95', 'opacity-0');
            
            modal.classList.remove('modal-enter-active');
            modal.classList.add('modal-leave-active');
            
            setTimeout(() => {
                modal.classList.remove('modal-leave-active');
                modal.classList.add('modal-enter'); // reset state
            }, 300);
        }

        // Language Toggle Logic
        let currentLang = 'en';
        
        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            const htmlTag = document.documentElement;
            const langLabel = document.getElementById('langLabel');
            
            // Toggle Direction & Font
            if (currentLang === 'ar') {
                htmlTag.setAttribute('dir', 'rtl');
                document.body.classList.add('rtl-font');
                langLabel.textContent = 'EN';
            } else {
                htmlTag.setAttribute('dir', 'ltr');
                document.body.classList.remove('rtl-font');
                langLabel.textContent = 'عربي';
            }

            // Toggle Text Elements
            const enElements = document.querySelectorAll('.en-text');
            const arElements = document.querySelectorAll('.ar-text');
            
            if (currentLang === 'en') {
                enElements.forEach(el => el.classList.remove('hidden'));
                arElements.forEach(el => el.classList.add('hidden'));
            } else {
                enElements.forEach(el => el.classList.add('hidden'));
                arElements.forEach(el => el.classList.remove('hidden'));
            }

            // Update Placeholders
            const inputs = document.querySelectorAll('[data-en-placeholder]');
            inputs.forEach(input => {
                input.placeholder = input.getAttribute(`data-${currentLang}-placeholder`);
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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://lumen5.com/v/mxs0i/"></video>
</div>

<nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 transition-all duration-500 hover:bg-slate-900/95">
<div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
<div className="flex group-hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-shadow duration-500 bg-center w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76c0a17f-4203-4f51-82a2-b8890002632b_320w.jpg?w=800&amp;q=80)] bg-cover rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.4)] items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<span className="font-medium text-lg tracking-tight text-white uppercase tracking-widest"><span className="en-text">DALIL</span><span className="ar-text hidden">دليل</span></span>
<span className="w-px h-4 bg-slate-700"></span>
<span className="font-normal text-lg tracking-tight text-slate-300"><span className="en-text">دليل</span><span className="ar-text hidden">DALIL</span></span>
</div>

<div className="hidden md:flex items-center space-x-10 lg:space-x-14 rtl:space-x-reverse">
<a className="text-sm font-normal text-slate-300 hover:text-white uppercase tracking-widest transition-colors relative group" href="#">
<span className="en-text">Home</span><span className="ar-text hidden">الرئيسية</span>
<span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-normal text-slate-300 hover:text-white uppercase tracking-widest transition-colors relative group" href="#about">
<span className="en-text">Mega Projects</span><span className="ar-text hidden">المشروعات الكبرى</span>
<span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-normal text-slate-300 hover:text-white uppercase tracking-widest transition-colors relative group" href="#research">
<span className="en-text">Data Archive</span><span className="ar-text hidden">أرشيف البيانات</span>
<span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center space-x-6 rtl:space-x-reverse">
<div className="hidden sm:flex relative group">
<div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none">
<i className="w-4 h-4 text-slate-400 group-focus-within:text-sky-400 transition-colors duration-300" data-lucide="search" strokeWidth="1.5"></i>
</div>
<input className="block w-full ps-10 pe-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-300 w-48 lg:w-64 backdrop-blur-sm" data-ar-placeholder="البحث في الأرشيف..." data-en-placeholder="Search archive..." placeholder="Search archive..." type="text"/>
</div>

<button className="flex hover:text-white transition-colors text-sm font-normal text-slate-300 bg-slate-800/30 border-slate-700/50 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-1.5 gap-y-1.5 items-center" onclick="toggleLanguage()">
<i className="w-4 h-4" data-lucide="globe" strokeWidth="1.5"></i>
<span className="" id="langLabel">عربي</span>
</button>
<div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
<button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sm font-normal text-white transition-all duration-300 group" onclick="openModal()">
<i className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" data-lucide="shield" strokeWidth="1.5"></i>
<span className="en-text">Gov Login</span><span className="ar-text hidden">دخول حكومي</span>
</button>
</div>
<button className="md:hidden text-slate-300 hover:text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950 group">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply z-10"></div>
<div className="z-10 bg-gradient-to-b from-slate-950/90 via-transparent to-slate-950 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Suez Canal Infrastructure" className="transform group-hover:scale-105 transition-transform duration-[20s] ease-out opacity-50 w-full h-full object-cover scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="sm:px-6 lg:px-8 z-20 flex flex-col lg:flex-row gap-16 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6937b187-cfa2-4151-aef2-4b1933ca7e66_800w.jpg)] max-w-7xl bg-cover bg-center mr-auto ml-auto pr-4 pl-4 relative gap-x-16 gap-y-16 items-center justify-between">
<div className="lg:w-1/2 lg:pt-0 text-start w-full pt-12">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-800/40 backdrop-blur-md border border-slate-600/50 mb-8 shadow-2xl overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-transparent"></div>
<span className="flex h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse"></span>
<span className="text-sm font-normal text-slate-200 uppercase tracking-widest relative z-10">
<span className="en-text">Egypt National Projects Portal</span><span className="ar-text hidden">بوابة المشروعات القومية المصرية</span>
</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">
<span className="en-text">Dalil - دليل</span><span className="ar-text hidden">دليل - Dalil</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-300 max-w-xl border-sky-400/30 border-s-2 mb-10 ps-6">
<span className="en-text">Dalil... Your shortest path to information. We save you the hassle of searching by gathering a selection of top websites and services in one organized interface, so you can save time and effort and have the world at your fingertips with just a click.</span>
<span className="ar-text hidden">دليل... أقصر طريق للمعلومة. نوفر عليك عناء البحث بجمع نخبة من أفضل المواقع والخدمات في واجهة واحدة منظمة، لتوفر وقتك وجهدك ويكون العالم بين يديك بضغطة زر.</span>
</p>
</div>

<div className="w-full lg:w-1/2 relative group/video cursor-pointer">
<div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 to-transparent opacity-0 group-hover/video:opacity-100 blur-2xl transition-opacity duration-1000"></div>
<div className="aspect-[4/3] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative border border-slate-700/50 transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
<img alt="Future of Egypt Project" className="group-hover/video:opacity-90 group-hover/video:scale-105 transition-all duration-1000 ease-out opacity-70 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex cursor-pointer bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1fc6928-5062-4391-a2c9-0bc13f0dbbad_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 items-center justify-center" onclick="window.location.href='https://lumen5.com/user/mahmod-ali/egypt-growing-toget-mxs0i/'" role="button">
<div className="flex group-hover/video:bg-sky-500/20 transition-all duration-500 bg-slate-900/40 w-20 h-20 border-white/20 border rounded-full shadow-lg backdrop-blur-xl items-center justify-center">
<i className="w-8 h-8 text-white fill-white drop-shadow-lg ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute bottom-6 start-6 end-6 flex justify-between items-end">
<div className="">
<div className="text-sky-300 text-sm font-normal uppercase tracking-widest mb-1">
<span className="en-text">Featured Project</span><span className="ar-text hidden">مشروع مميز</span>
</div>
<div className="text-white text-xl font-normal tracking-tight">
<span className="en-text">The Future of Egypt Project</span><span className="ar-text hidden">مشروع مستقبل مصر الزراعي</span>
</div>
</div>
<div className="text-sm font-normal text-white/70 bg-slate-950/50 border-white/10 border rounded-md pt-1.5 pe-3 pb-1.5 ps-3 backdrop-blur-md">0:51</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-12 pb-12 space-y-32">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 group/section items-center">
<div className="w-full lg:w-[55%] relative">
<div className="absolute inset-0 bg-slate-200 translate-x-4 translate-y-4 z-0 transition-transform duration-700 group-hover/section:translate-x-6 group-hover/section:translate-y-6 rtl:-translate-x-4 group-hover/section:rtl:-translate-x-6"></div>
<div className="relative z-10 overflow-hidden shadow-2xl">
<img alt="Agriculture" className="aspect-[4/3] transform transition-transform duration-[1.5s] ease-out group-hover/section:scale-105 filter contrast-125 group-hover/section:saturate-100 w-full object-cover saturate-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6931d0d6-9688-4f68-8308-390ac0380520_1600w.jpg"/>
<div className="absolute top-0 start-0 w-full h-full bg-gradient-to-r from-slate-900/40 to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute bottom-0 end-0 bg-slate-900 text-white p-6 shadow-2xl translate-y-full group-hover/section:translate-y-0 transition-transform duration-700 ease-out border-s-4 border-sky-400">
<div className="text-sm uppercase tracking-widest text-slate-400 mb-2">
<span className="en-text">Active Zone</span><span className="ar-text hidden">منطقة نشطة</span>
</div>
<div className="text-base font-normal tracking-tight">
<span className="en-text" onclick="window.location.href='https://ar.wikipedia.org/wiki/%D9%85%D8%B4%D8%B1%D9%88%D8%B9_%D8%A7%D9%84%D8%AF%D9%84%D8%AA%D8%A7_%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9'" role="button">Read more</span><span className="ar-text hidden">قطاع توشكى الخير</span>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-[45%]">
<div className="flex items-center gap-4 mb-6">
<span className="w-12 h-px bg-slate-400"></span>
<h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest">
<span className="en-text">Sector Focus 01</span><span className="ar-text hidden">التركيز القطاعي ٠١</span>
</h2>
</div>
<h3 className="md:text-5xl leading-tight text-4xl font-medium text-slate-900 tracking-tight mb-6">
<span className="en-text">New Delta project</span><span className="ar-text hidden">مشروع الدلتا الجديدة</span>
</h3>
<p className="leading-relaxed text-base font-light text-slate-600 mb-8">
<span className="en-text">The New Delta Project is considered one of the largest national agricultural projects in Egypt, targeting the reclamation and cultivation of about 2.2 million feddans in order to expand the agricultural land and achieve food security. It relies on various water sources, including treated agricultural drainage water through major treatment plants such as the Bahr El Baqar Water Treatment Plant.</span>
<span className="ar-text hidden">يعد مشروع الدلتا الجديدة من أكبر المشروعات القومية الزراعية في مصر، ويستهدف استصلاح وزراعة نحو ٢٫٢ مليون فدان لتوسيع الرقعة الزراعية وتحقيق الأمن الغذائي. يعتمد المشروع على مصادر مياه متنوعة، منها مياه الصرف الزراعي المعالجة عبر محطات معالجة كبرى مثل محطة بحر البقر.</span>
</p>
<div className="space-y-4">
<div className="flex transition-all duration-300 hover:shadow-md hover:border-sky-200 bg-white border-slate-200/50 border p-4 shadow-sm gap-4 items-start">
<i className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<div className="">
<div className="text-base font-normal text-slate-900">
<span className="en-text">New Delta Project</span><span className="ar-text hidden">مشروع الدلتا الجديدة</span>
</div>
<div className="text-sm text-slate-500 mt-1">
<span className="en-text">Targeting 2.2 million feddans of sustainable cultivation</span><span className="ar-text hidden">يستهدف ٢٫٢ مليون فدان من الزراعة المستدامة</span>
</div>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-white border border-slate-200/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-sky-200">
<i className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<div className="">
<div className="text-base font-normal text-slate-900">
<span className="en-text">Toshka Revitalization</span><span className="ar-text hidden">إحياء توشكى</span>
</div>
<div className="text-sm text-slate-500 mt-1">
<span className="en-text">Expanding South Valley agricultural hubs</span><span className="ar-text hidden">توسيع المحاور الزراعية في جنوب الوادي</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative py-24 bg-slate-950 overflow-hidden group/industry">
<div className="absolute inset-0 z-0">
<img alt="SCZone Industry" className="w-full h-full object-cover opacity-20 mix-blend-luminosity transform scale-105 group-hover/industry:scale-100 transition-transform duration-[10s] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="bg-center rtl:from-transparent rtl:via-slate-950/80 rtl:to-slate-950 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a9d3024-ec97-4f29-afff-5ae26b1981ee_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="sm:px-6 lg:px-8 flex flex-col lg:flex-row max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative gap-x-16 gap-y-16 items-center w-full">

<div className="w-full lg:w-1/2 relative z-10">
<div className="flex gap-4 mb-6 gap-x-4 gap-y-4 items-center">
<span className="w-12 h-px bg-sky-500/50"></span>
<h2 className="text-sm font-medium text-sky-400 uppercase tracking-widest">
<span className="en-text">Sector Focus 02</span><span className="ar-text hidden">التركيز القطاعي ٠٢</span>
</h2>
</div>
<h3 className="md:text-5xl leading-tight text-4xl font-medium text-white tracking-tight mb-8">
<span className="en-text">Advanced Industrial<br/>Ecosystems</span><span className="ar-text hidden">نظم بيئية<br/>صناعية متقدمة</span>
</h3>
<a className="inline-flex items-center gap-3 uppercase hover:bg-white hover:text-slate-900 transition-all duration-500 group text-sm font-medium text-white tracking-widest border-slate-600/50 border pt-3 pr-6 pb-3 pl-6" href="https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A9_%D9%81%D9%8A_%D9%85%D8%B5%D8%B1">
<span className="en-text">read more</span><span className="ar-text hidden">عرض الخريطة الصناعية</span>
<i className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[400px]">
<div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center group">

<div className="group-hover:bg-sky-400/20 transition-all duration-700 bg-sky-500/10 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-3xl"></div>

<div className="absolute inset-[-10%] animate-[spin_40s_linear_infinite_reverse] opacity-20 text-sky-400 flex items-center justify-center pointer-events-none">
<i className="w-full h-full" data-lucide="settings" strokeWidth="1"></i>
</div>

<div className="absolute inset-[5%] animate-[spin_20s_linear_infinite] opacity-60 text-slate-600 flex items-center justify-center pointer-events-none drop-shadow-2xl">
<i className="w-full h-full" data-lucide="settings" strokeWidth="1.5"></i>
</div>

<div className="relative z-20 w-[60%] h-[60%] rounded-full overflow-hidden border-4 border-slate-900 ring-2 ring-sky-500/40 shadow-[0_0_40px_rgba(56,189,248,0.2)] bg-slate-800 flex items-center justify-center group-hover:ring-sky-400 transition-all duration-500">

<img alt="Eagle Identity" className="transform group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf1effae-198f-4253-a891-ca8cbc7dad8e_800w.jpg"/>
<div className="absolute inset-0 shadow-inner rounded-full pointer-events-none border border-white/5"></div>
</div>

<div className="absolute w-[68%] h-[68%] rounded-full border-[1.5px] border-sky-400/30 border-dashed animate-[spin_15s_linear_infinite] pointer-events-none z-30"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-slate-200 border-t pt-24 pb-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="">
<div className="flex items-center gap-4 mb-4">
<span className="w-8 h-px bg-slate-300"></span>
<h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest">
<span className="en-text">Communications</span><span className="ar-text hidden">الاتصالات</span>
</h2>
</div>
<h3 className="text-3xl font-medium text-slate-900 tracking-tight mb-2">
<span className="en-text">Contact Us</span><span className="ar-text hidden">اتصل بنا</span>
</h3>
<p className="text-base font-light text-slate-600 mb-10">
<span className="en-text">Submit formal inquiries or request access to project data.</span>
<span className="ar-text hidden">أرسل استفسارات رسمية أو اطلب صلاحية الوصول لبيانات المشروع.</span>
</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="">
<label className="block text-sm font-medium text-slate-900 uppercase tracking-widest mb-2">
<span className="en-text">First Name</span><span className="ar-text hidden">الاسم الأول</span>
</label>
<input className="w-full bg-transparent border-b border-slate-300 px-0 py-2 text-base focus:outline-none focus:border-sky-500 transition-colors placeholder-slate-400" data-ar-placeholder="أحمد" data-en-placeholder="John" placeholder="John" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-900 uppercase tracking-widest mb-2">
<span className="en-text">Last Name</span><span className="ar-text hidden">اسم العائلة</span>
</label>
<input className="w-full bg-transparent border-b border-slate-300 px-0 py-2 text-base focus:outline-none focus:border-sky-500 transition-colors placeholder-slate-400" data-ar-placeholder="محمود" data-en-placeholder="Doe" placeholder="Doe" type="text"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-900 uppercase tracking-widest mb-2">
<span className="en-text">Institutional Email</span><span className="ar-text hidden">البريد المؤسسي</span>
</label>
<input className="w-full bg-transparent border-b border-slate-300 px-0 py-2 text-base focus:outline-none focus:border-sky-500 transition-colors placeholder-slate-400" data-ar-placeholder="ahmed@institution.gov.eg" data-en-placeholder="john@institution.gov.eg" placeholder="john@institution.gov.eg" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-900 uppercase tracking-widest mb-2">
<span className="en-text">Message</span><span className="ar-text hidden">الرسالة</span>
</label>
<textarea className="w-full bg-transparent border-b border-slate-300 px-0 py-2 text-base focus:outline-none focus:border-sky-500 transition-colors placeholder-slate-400 resize-none" data-ar-placeholder="اكتب استفسارك هنا..." data-en-placeholder="State your inquiry..." placeholder="State your inquiry..." rows="3"></textarea>
</div>
<button className="bg-slate-900 text-white text-sm font-medium uppercase tracking-widest px-8 py-4 hover:bg-slate-800 transition-colors w-full sm:w-auto" type="button">
<span className="en-text">Transmit Message</span><span className="ar-text hidden">إرسال الرسالة</span>
</button>
</form>
</div>

<div className="bg-slate-900 p-10 relative overflow-hidden group rounded-2xl">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-0 end-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none transform group-hover:scale-110">
<i className="w-48 h-48 text-sky-400" data-lucide="shield-alert" strokeWidth="1"></i>
</div>
<h2 className="z-10 text-2xl font-medium text-white tracking-tight border-sky-400 border-s-2 mb-8 ps-4 relative">
<span className="en-text">About us</span><span className="ar-text hidden">عن المنصة</span>
</h2>
<div className="space-y-8 relative z-10">
<div className="flex gap-5 items-start">
<div className="mt-1">
<i className="w-6 h-6 text-sky-400" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<div className="">
<h4 className="uppercase text-sm font-medium text-white tracking-widest mb-2">
<span className="en-text">Creator Name</span><span className="ar-text hidden">اسم المبتكر</span>
</h4>
<p className="leading-relaxed text-base font-light text-slate-400">
<span className="en-text">Mahmoud Ali Hassan Abd El Salam</span><span className="ar-text hidden">محمود علي حسن عبد السلام</span>
</p>
</div>
</div>
<div className="flex gap-5 items-start">
<div className="mt-1">
<i className="w-6 h-6 text-sky-400" data-lucide="database" strokeWidth="1.5"></i>
</div>
<div className="">
<h4 className="uppercase text-sm font-medium text-white tracking-widest mb-2">
<span className="en-text">The Reason</span><span className="ar-text hidden">السبب</span>
</h4>
<p className="leading-relaxed text-base font-light text-slate-400">
<span className="en-text">Joining the "Yes We Can" competition for creating websites</span><span className="ar-text hidden">المشاركة في مسابقة "نعم نستطيع" لإنشاء المواقع الإلكترونية</span>
</p>
</div>
</div>
<div className="flex gap-5 items-start">
<div className="mt-1">
<i className="w-6 h-6 text-sky-400" data-lucide="contact" strokeWidth="1.5"></i>
</div>
<div className="">
<h4 className="uppercase text-sm font-medium text-white tracking-widest mb-2">
<span className="en-text">The Purpose</span><span className="ar-text hidden">الهدف</span>
</h4>
<p className="leading-relaxed text-base font-light text-slate-400">
<span className="en-text">Displaying Egypt achievements in agriculture and industry</span><span className="ar-text hidden">عرض إنجازات مصر في الزراعة والصناعة</span>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/10 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-4">
<div className="flex gap-3 items-center">
<i className="w-6 h-6 text-sky-400" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="font-medium text-lg tracking-widest text-white uppercase">
<span className="en-text">DALIL</span><span className="ar-text hidden">دليل</span>
</span>
</div>
<p className="text-sm text-slate-500 font-light">
<span className="en-text">© 2026 Egypt National Projects Archive. Official Use Only.</span>
<span className="ar-text hidden">© ٢٠٢٦ أرشيف المشروعات القومية المصرية. للاستخدام الرسمي فقط.</span>
</p>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] modal-enter flex items-center justify-center" id="loginModal">

<div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onclick="closeModal()"></div>

<div className="relative w-full max-w-md bg-slate-900/90 border border-white/10 shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 scale-95 opacity-0" id="loginModalInner">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-600 to-sky-400"></div>
<div className="p-8">
<div className="flex items-center gap-4 mb-8">
<div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400">
<i className="w-6 h-6" data-lucide="fingerprint" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white tracking-tight">
<span className="en-text">Secure Access</span><span className="ar-text hidden">وصول آمن</span>
</h3>
<p className="text-sm text-slate-400 mt-1">
<span className="en-text">Government Entity Authentication</span><span className="ar-text hidden">مصادقة الجهات الحكومية</span>
</p>
</div>
</div>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-slate-300 uppercase tracking-widest mb-2">
<span className="en-text">National ID / Gov Email</span><span className="ar-text hidden">الرقم القومي / البريد الحكومي</span>
</label>
<div className="relative">
<div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-500" data-lucide="user" strokeWidth="1.5"></i>
</div>
<input className="block w-full ps-10 pe-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-base text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-colors" data-ar-placeholder="أدخل الهوية" data-en-placeholder="Enter identification" placeholder="Enter identification" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 uppercase tracking-widest mb-2">
<span className="en-text">Passcode</span><span className="ar-text hidden">كلمة المرور</span>
</label>
<div className="relative">
<div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-500" data-lucide="key" strokeWidth="1.5"></i>
</div>
<input className="block w-full ps-10 pe-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-base text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-colors" placeholder="••••••••" type="password"/>
</div>
</div>
<div className="pt-4 flex gap-3">
<button className="flex-1 px-4 py-2.5 border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm font-medium uppercase tracking-widest rounded-lg transition-colors" onclick="closeModal()" type="button">
<span className="en-text">Cancel</span><span className="ar-text hidden">إلغاء</span>
</button>
<button className="flex-1 px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium uppercase tracking-widest rounded-lg transition-colors shadow-[0_0_15px_rgba(2,132,199,0.4)]" type="button">
<span className="en-text">Authenticate</span><span className="ar-text hidden">تحقق</span>
</button>
</div>
</form>
</div>
</div>
</div>



    </>
  );
}
