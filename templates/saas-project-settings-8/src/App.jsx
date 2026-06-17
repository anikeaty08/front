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



        // Iconify
        lucide.createIcons();

        // Simple Fade in on scroll observer
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const fadeElements = document.querySelectorAll('.fade-in-section');
            fadeElements.forEach(el => observer.observe(el));
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
      

<nav bis_size='{"x":0,"y":0,"w":1230,"h":81,"abs_x":480,"abs_y":43}' className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div bis_size='{"x":0,"y":0,"w":1230,"h":80,"abs_x":480,"abs_y":43}' className="flex md:px-6 h-20 items-center justify-center">

<div bis_size='{"x":176,"y":30,"w":245,"h":20,"abs_x":656,"abs_y":73}' className="hidden md:flex mr-[9rem] space-x-6 items-center">

<a bis_size='{"x":176,"y":30,"w":44,"h":20,"abs_x":656,"abs_y":73}' className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-sans" href="#why-us">
      За нас
    </a>
<a bis_size='{"x":245,"y":30,"w":78,"h":20,"abs_x":725,"abs_y":73}' className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-sans" href="#services">
      Процедури
    </a>
<a bis_size='{"x":347,"y":30,"w":74,"h":20,"abs_x":827,"abs_y":73}' className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-600" href="#contact">
      Контакти
    </a>
</div>

<div bis_size='{"x":566,"y":18,"w":79,"h":44,"abs_x":1046,"abs_y":61}' className="flex justify-center">
<a bis_size='{"x":566,"y":18,"w":79,"h":44,"abs_x":1046,"abs_y":61}' className="flex items-center" href="#">
<img alt="Bio Aesthetics" bis_size='{"x":566,"y":18,"w":79,"h":44,"abs_x":1046,"abs_y":61}' className="md:h-11 w-auto h-18 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68ee74f1-45ef-40ac-a723-28eee55763b2_800w.png"/>
</a>
</div>

<div bis_size='{"x":773,"y":22,"w":279,"h":36,"abs_x":1253,"abs_y":65}' className="flex ml-[8rem] space-x-6 items-center">

<a bis_size='{"x":773,"y":32,"w":16,"h":16,"abs_x":1253,"abs_y":75}' className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-teal-700 transition-colors font-sans" href="tel:+359877630600">
<svg bis_size='{"x":773,"y":32,"w":16,"h":16,"abs_x":1253,"abs_y":75}' className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":775,"y":33,"w":13,"h":13,"abs_x":1255,"abs_y":76}' className="" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
</path>
</svg>
</a><a bis_size='{"x":813,"y":28,"w":106,"h":24,"abs_x":1293,"abs_y":71}' className="font-medium text-slate-900" href="/tel:0886666903">088 666 6903</a>
<a bis_size='{"x":944,"y":22,"w":108,"h":36,"abs_x":1424,"abs_y":65}' className="hover:bg-slate-800 transition-all hover:shadow-md text-sm font-medium text-white bg-slate-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#contact">
      Запази час
    </a>
</div>
</div>
</nav>

<section bis_size='{"x":0,"y":0,"w":1230,"h":757,"abs_x":480,"abs_y":43}' className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div bis_size='{"x":0,"y":0,"w":1230,"h":757,"abs_x":480,"abs_y":43}' className="absolute inset-0 z-0">
<img alt="Medical Aesthetic Clinic Background" bis_size='{"x":0,"y":0,"w":1230,"h":757,"abs_x":480,"abs_y":43}' className="w-full h-full object-cover object-center opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/970f50ed-5374-4293-b71a-8293a38fe26e_3840w.webp" style={{}}/>
<div bis_size='{"x":0,"y":0,"w":1230,"h":757,"abs_x":480,"abs_y":43}' className="bg-gradient-to-r from-white/50 via-white/30 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div bis_size='{"x":0,"y":192,"w":1230,"h":437,"abs_x":480,"abs_y":235}' className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div bis_size='{"x":32,"y":192,"w":672,"h":437,"abs_x":512,"abs_y":235}' className="fade-in-section is-visible max-w-2xl">
<div bis_size='{"x":32,"y":192,"w":250,"h":26,"abs_x":512,"abs_y":235}' className="inline-flex text-xs font-medium text-teal-800 font-sans bg-teal-50 border-teal-100 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<svg bis_size='{"x":45,"y":198,"w":14,"h":14,"abs_x":525,"abs_y":241}' className="lucide lucide-check-circle" data-lucide="check-circle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
    Лицензиран медицински център
  </div>
<h1 bis_size='{"x":32,"y":242,"w":672,"h":96,"abs_x":512,"abs_y":285}' className="leading-[1.1] md:text-5xl lg:text-5xl text-4xl font-semibold text-slate-900 tracking-tight mb-6">Дентален кабинет ''Perfect smile'' Д-р Лъчезар Хаджиев</h1>
<p bis_size='{"x":32,"y":362,"w":512,"h":117,"abs_x":512,"abs_y":405}' className="leading-relaxed text-lg text-slate-600 max-w-lg mb-8">Професионална дентална грижа от специалист в Пловдив. Профилактика, лечение, импланти и естетична стоматология със съвременни технологии и максимално щадящ подход.</p>
<div bis_size='{"x":32,"y":511,"w":672,"h":50,"abs_x":512,"abs_y":554}' className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4">
<a bis_size='{"x":32,"y":511,"w":211,"h":50,"abs_x":512,"abs_y":554}' className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-sans" href="#contact">
      Запази консултация
    </a>
<a bis_size='{"x":259,"y":511,"w":148,"h":50,"abs_x":739,"abs_y":554}' className="inline-flex justify-center items-center hover:bg-slate-50 transition-all text-base font-medium text-slate-700 font-sans bg-white border-slate-200 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="/tel:+0886666903">
<svg bis_size='{"x":284,"y":527,"w":18,"h":18,"abs_x":764,"abs_y":570}' className="lucide lucide-phone mr-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":285,"y":528,"w":15,"h":15,"abs_x":765,"abs_y":571}' d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
</path>
</svg>
  Обади се
</a>
</div>
<div bis_size='{"x":32,"y":609,"w":672,"h":20,"abs_x":512,"abs_y":652}' className="mt-12 flex items-center gap-6 text-sm text-slate-500">
<div bis_size='{"x":32,"y":609,"w":113,"h":20,"abs_x":512,"abs_y":652}' className="flex items-center gap-2 font-sans">
<svg bis_size='{"x":32,"y":611,"w":16,"h":16,"abs_x":512,"abs_y":654}' className="lucide lucide-star text-teal-600 fill-teal-600" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span bis_size='{"x":56,"y":609,"w":20,"h":20,"abs_x":536,"abs_y":652}' className="font-medium text-slate-900 font-sans">5.0</span>
      Рейтинг
    </div>
<div bis_size='{"x":169,"y":611,"w":1,"h":16,"abs_x":649,"abs_y":654}' className="w-px h-4 bg-slate-300">
</div>
<div bis_size='{"x":194,"y":609,"w":149,"h":20,"abs_x":674,"abs_y":652}' className="">Д-р Лъчезар Хаджиев</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":757,"w":1230,"h":644,"abs_x":480,"abs_y":800}' className="bg-white pt-20 pb-20" id="why-us">
<div bis_size='{"x":0,"y":837,"w":1230,"h":484,"abs_x":480,"abs_y":880}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":32,"y":837,"w":1166,"h":484,"abs_x":512,"abs_y":880}' className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div bis_size='{"x":32,"y":875,"w":543,"h":407,"abs_x":512,"abs_y":918}' className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg fade-in-section is-visible">
<img alt="Clinic Interior" bis_size='{"x":32,"y":875,"w":543,"h":407,"abs_x":512,"abs_y":918}' className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd655cb4-9632-4600-b5d3-82381da5fcf8_1600w.webp" style={{}}/>
<div bis_size='{"x":32,"y":1197,"w":543,"h":85,"abs_x":512,"abs_y":1240}' className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6 border-t border-slate-100">
<p bis_size='{"x":56,"y":1222,"w":495,"h":20,"abs_x":536,"abs_y":1265}' className="text-sm font-medium text-slate-900 font-sans">Дентален кабинет ''Perfect smile'' Д-р Лъчезар Хаджиев</p>
<p bis_size='{"x":56,"y":1242,"w":495,"h":16,"abs_x":536,"abs_y":1285}' className="text-xs text-slate-500 font-sans">g.k. Hristo Botev-SouthYuzhen, ul. "Slaveevi gori" 41, 4004 Plovdiv</p>
</div>
</div>

<div bis_size='{"x":655,"y":837,"w":543,"h":484,"abs_x":1135,"abs_y":880}' className="fade-in-section is-visible">
<h2 bis_size='{"x":655,"y":837,"w":543,"h":72,"abs_x":1135,"abs_y":880}' className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Защо да изберете нашия зъболекарски кабинет?</h2>
<p bis_size='{"x":655,"y":933,"w":543,"h":104,"abs_x":1135,"abs_y":976}' className="leading-relaxed text-slate-600 mb-8">Ние не сме просто зъболекар, а регистрирано лечебно заведение. Всеки заслужава здрава и красива усмивка, а нашите квалифицирани специалисти и съвременни технологии гарантират резултати, които не бива да пропускате.
</p>
<div bis_size='{"x":655,"y":1069,"w":543,"h":252,"abs_x":1135,"abs_y":1112}' className="space-y-6">
<div bis_size='{"x":655,"y":1069,"w":543,"h":68,"abs_x":1135,"abs_y":1112}' className="flex gap-4">
<div bis_size='{"x":655,"y":1069,"w":40,"h":40,"abs_x":1135,"abs_y":1112}' className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
<svg bis_size='{"x":665,"y":1079,"w":20,"h":20,"abs_x":1145,"abs_y":1122}' className="lucide lucide-stethoscope w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="stethoscope" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(15, 118, 110)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
</div>
<div bis_size='{"x":711,"y":1069,"w":487,"h":68,"abs_x":1191,"abs_y":1112}' className="">
<h3 bis_size='{"x":711,"y":1069,"w":487,"h":24,"abs_x":1191,"abs_y":1112}' className="text-base font-medium text-slate-900 font-sans">Специалист по дентална медицина</h3>
<p bis_size='{"x":711,"y":1097,"w":487,"h":40,"abs_x":1191,"abs_y":1140}' className="text-sm text-slate-500 font-sans mt-1">Процедурите се извършват и контролират от д-р Лъчезар Хаджиев и квалифициран медицински екип.
</p>
</div>
</div>
<div bis_size='{"x":655,"y":1161,"w":543,"h":68,"abs_x":1135,"abs_y":1204}' className="flex gap-4">
<div bis_size='{"x":655,"y":1161,"w":40,"h":40,"abs_x":1135,"abs_y":1204}' className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
<svg bis_size='{"x":665,"y":1171,"w":20,"h":20,"abs_x":1145,"abs_y":1214}' className="lucide lucide-microscope" data-lucide="microscope" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
</div>
<div bis_size='{"x":711,"y":1161,"w":487,"h":68,"abs_x":1191,"abs_y":1204}' className="">
<h3 bis_size='{"x":711,"y":1161,"w":487,"h":24,"abs_x":1191,"abs_y":1204}' className="text-base font-medium text-slate-900 font-sans">Съвременна апаратура
</h3>
<p bis_size='{"x":711,"y":1189,"w":487,"h":40,"abs_x":1191,"abs_y":1232}' className="text-sm text-slate-500 font-sans mt-1">Работим само с модерни и сертифицирани дентални технологии и материали за безопасни и ефективни резултати.</p>
</div>
</div>
<div bis_size='{"x":655,"y":1253,"w":543,"h":68,"abs_x":1135,"abs_y":1296}' className="flex gap-4">
<div bis_size='{"x":655,"y":1253,"w":40,"h":40,"abs_x":1135,"abs_y":1296}' className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
<svg bis_size='{"x":665,"y":1263,"w":20,"h":20,"abs_x":1145,"abs_y":1306}' className="lucide lucide-user-check" data-lucide="user-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div bis_size='{"x":711,"y":1253,"w":487,"h":68,"abs_x":1191,"abs_y":1296}' className="">
<h3 bis_size='{"x":711,"y":1253,"w":487,"h":24,"abs_x":1191,"abs_y":1296}' className="text-base font-medium text-slate-900 font-sans">Индивидуален план на лечение
</h3>
<p bis_size='{"x":711,"y":1281,"w":487,"h":40,"abs_x":1191,"abs_y":1324}' className="text-sm text-slate-500 mt-1 font-sans">Всяка терапия започва с обстойна консултация и анализ на състоянието.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1401,"w":1230,"h":806,"abs_x":480,"abs_y":1444}' className="border-y bg-slate-50 border-slate-200/60 pt-20 pb-20" id="services">
<div bis_size='{"x":0,"y":1482,"w":1230,"h":644,"abs_x":480,"abs_y":1525}' className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div bis_size='{"x":279,"y":1482,"w":672,"h":100,"abs_x":759,"abs_y":1525}' className="text-center max-w-2xl mx-auto mb-16 fade-in-section is-visible">
<h2 bis_size='{"x":279,"y":1482,"w":672,"h":36,"abs_x":759,"abs_y":1525}' className="text-3xl font-semibold text-slate-900 tracking-tight font-sans mb-4">Нашите основни процедури</h2>
<p bis_size='{"x":279,"y":1534,"w":672,"h":48,"abs_x":759,"abs_y":1577}' className="text-slate-600 font-sans">Фокусирани сме върху съвременно дентално лечение, профилактика и възстановяване с дълготраен и предвидим резултат.</p>
</div>
<div bis_size='{"x":32,"y":1646,"w":1166,"h":480,"abs_x":512,"abs_y":1689}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div bis_size='{"x":32,"y":1646,"w":273,"h":480,"abs_x":512,"abs_y":1689}' className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

<div bis_size='{"x":32,"y":1646,"w":273,"h":256,"abs_x":512,"abs_y":1689}' className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
<img alt="Лазерна епилация" bis_size='{"x":32,"y":1646,"w":273,"h":256,"abs_x":512,"abs_y":1689}' className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6a35127-7dba-4b78-93f5-c640bd6dc379_800w.jpg" style={{}}/>
<div bis_size='{"x":32,"y":1646,"w":273,"h":256,"abs_x":512,"abs_y":1689}' className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<h3 bis_size='{"x":48,"y":1830,"w":257,"h":56,"abs_x":528,"abs_y":1873}' className="md:text-xl text-lg font-medium text-white font-sans absolute bottom-4 left-4">Почистване на зъбен камък</h3>
</div>

<div bis_size='{"x":32,"y":1902,"w":273,"h":224,"abs_x":512,"abs_y":1945}' className="p-6 flex flex-col justify-between h-48 md:h-52 lg:h-56">
<p bis_size='{"x":56,"y":1926,"w":225,"h":100,"abs_x":536,"abs_y":1969}' className="text-sm text-slate-500 font-sans mb-4">Професионално почистване на зъбен камък за поддържане на здрави зъби и венци. Предпазва от възпаления и дългосрочни усложнения.</p>
<a bis_size='{"x":56,"y":2082,"w":225,"h":20,"abs_x":536,"abs_y":2125}' className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900 font-sans" href="#contact">
        Запази час
        <svg bis_size='{"x":136,"y":2085,"w":14,"h":14,"abs_x":616,"abs_y":2128}' className="ml-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":139,"y":2092,"w":8,"h":0,"abs_x":619,"abs_y":2135}' d="M5 12h14"></path>
<path bis_size='{"x":143,"y":2087,"w":4,"h":8,"abs_x":623,"abs_y":2130}' d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div bis_size='{"x":329,"y":1646,"w":273,"h":480,"abs_x":809,"abs_y":1689}' className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
<div bis_size='{"x":329,"y":1646,"w":273,"h":256,"abs_x":809,"abs_y":1689}' className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
<img alt="Инжекционни Skin Boosters" bis_size='{"x":329,"y":1646,"w":273,"h":256,"abs_x":809,"abs_y":1689}' className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b26bf77-21d3-4a2e-91a9-4e6eb9c62144_800w.png" style={{}}/>
<div bis_size='{"x":329,"y":1646,"w":273,"h":256,"abs_x":809,"abs_y":1689}' className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<h3 bis_size='{"x":345,"y":1858,"w":177,"h":28,"abs_x":825,"abs_y":1901}' className="md:text-xl text-lg font-medium text-white font-sans absolute bottom-4 left-4">Лечение на кариес
</h3>
</div>
<div bis_size='{"x":329,"y":1902,"w":273,"h":224,"abs_x":809,"abs_y":1945}' className="p-6 flex flex-col justify-between h-48 md:h-52 lg:h-56">
<p bis_size='{"x":353,"y":1926,"w":225,"h":100,"abs_x":833,"abs_y":1969}' className="text-sm text-slate-500 font-sans mb-4">Съвременно лечение на зъбен кариес с прецизност и внимание към детайла. Целта е максимално запазване на естествения зъб.</p>
<a bis_size='{"x":353,"y":2082,"w":225,"h":20,"abs_x":833,"abs_y":2125}' className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900 font-sans" href="#contact">
        Запази час
        <svg bis_size='{"x":433,"y":2085,"w":14,"h":14,"abs_x":913,"abs_y":2128}' className="ml-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":436,"y":2092,"w":8,"h":0,"abs_x":916,"abs_y":2135}' d="M5 12h14"></path>
<path bis_size='{"x":440,"y":2087,"w":4,"h":8,"abs_x":920,"abs_y":2130}' d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div bis_size='{"x":627,"y":1646,"w":273,"h":480,"abs_x":1107,"abs_y":1689}' className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
<div bis_size='{"x":627,"y":1646,"w":273,"h":256,"abs_x":1107,"abs_y":1689}' className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
<img alt="Акне и подмладяване" bis_size='{"x":627,"y":1646,"w":273,"h":256,"abs_x":1107,"abs_y":1689}' className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e14a231f-17c9-48e2-8bf2-1c4b2d531d67_800w.jpg" style={{}}/>
<div bis_size='{"x":627,"y":1646,"w":273,"h":256,"abs_x":1107,"abs_y":1689}' className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<h3 bis_size='{"x":643,"y":1858,"w":173,"h":28,"abs_x":1123,"abs_y":1901}' className="md:text-xl text-lg font-medium text-white font-sans absolute bottom-4 left-4">Кореново лечение
</h3>
</div>
<div bis_size='{"x":627,"y":1902,"w":273,"h":224,"abs_x":1107,"abs_y":1945}' className="flex flex-col md:h-52 lg:h-56 h-48 pt-6 pr-6 pb-6 pl-6 justify-between">
<p bis_size='{"x":651,"y":1926,"w":225,"h":100,"abs_x":1131,"abs_y":1969}' className="text-sm text-slate-500 font-sans mb-4">Кореново лечение при болка и възпаление с доказани методи. Позволява запазване на зъба и възстановяване на функцията му.</p>
<a bis_size='{"x":651,"y":2082,"w":225,"h":20,"abs_x":1131,"abs_y":2125}' className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900 font-sans" href="#contact">
        Запази час
        <svg bis_size='{"x":731,"y":2085,"w":14,"h":14,"abs_x":1211,"abs_y":2128}' className="ml-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":734,"y":2092,"w":8,"h":0,"abs_x":1214,"abs_y":2135}' d="M5 12h14"></path>
<path bis_size='{"x":738,"y":2087,"w":4,"h":8,"abs_x":1218,"abs_y":2130}' d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div bis_size='{"x":924,"y":1646,"w":273,"h":480,"abs_x":1404,"abs_y":1689}' className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
<div bis_size='{"x":924,"y":1646,"w":273,"h":256,"abs_x":1404,"abs_y":1689}' className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
<img alt="PRP Терапия" bis_size='{"x":924,"y":1646,"w":273,"h":256,"abs_x":1404,"abs_y":1689}' className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0732f82-2b9c-4344-a345-a6050223a4ab_800w.jpg" style={{}}/>
<div bis_size='{"x":924,"y":1646,"w":273,"h":256,"abs_x":1404,"abs_y":1689}' className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<h3 bis_size='{"x":940,"y":1858,"w":179,"h":28,"abs_x":1420,"abs_y":1901}' className="md:text-xl text-lg font-medium text-white font-sans absolute bottom-4 left-4">Избелване на зъби</h3>
</div>
<div bis_size='{"x":924,"y":1902,"w":273,"h":224,"abs_x":1404,"abs_y":1945}' className="p-6 flex flex-col justify-between h-48 md:h-52 lg:h-56">
<p bis_size='{"x":948,"y":1926,"w":225,"h":80,"abs_x":1428,"abs_y":1969}' className="text-sm text-slate-500 font-sans mb-4">Професионално избелване на зъби за по-светла и свежа усмивка. Безопасен метод с видим и дълготраен резултат.</p>
<a bis_size='{"x":948,"y":2082,"w":225,"h":20,"abs_x":1428,"abs_y":2125}' className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900 font-sans" href="#contact">
        Запази час
        <svg bis_size='{"x":1028,"y":2085,"w":14,"h":14,"abs_x":1508,"abs_y":2128}' className="ml-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1031,"y":2092,"w":8,"h":0,"abs_x":1511,"abs_y":2135}' d="M5 12h14"></path>
<path bis_size='{"x":1035,"y":2087,"w":4,"h":8,"abs_x":1515,"abs_y":2130}' d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2207,"w":1230,"h":668,"abs_x":480,"abs_y":2250}' className="bg-white pt-20 pb-20" id="contact">
<div bis_size='{"x":0,"y":2287,"w":1230,"h":508,"abs_x":480,"abs_y":2330}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":32,"y":2287,"w":1166,"h":508,"abs_x":512,"abs_y":2330}' className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div bis_size='{"x":32,"y":2287,"w":535,"h":508,"abs_x":512,"abs_y":2330}' className="fade-in-section is-visible">
<h2 bis_size='{"x":32,"y":2287,"w":535,"h":36,"abs_x":512,"abs_y":2330}' className="text-3xl text-slate-900 tracking-tight mb-6 font-sans font-semibold" style={{}}>Контакти</h2>
<p bis_size='{"x":32,"y":2347,"w":535,"h":48,"abs_x":512,"abs_y":2390}' className="text-slate-600 font-sans mb-8">Свържете се с нас за безплатна консултация или запазване на час. Намираме се в квартал Кичука, Пловдив.</p>
<div bis_size='{"x":32,"y":2427,"w":535,"h":336,"abs_x":512,"abs_y":2470}' className="space-y-6 mb-8">
<div bis_size='{"x":32,"y":2427,"w":535,"h":72,"abs_x":512,"abs_y":2470}' className="flex items-start gap-4">
<svg bis_size='{"x":32,"y":2431,"w":20,"h":20,"abs_x":512,"abs_y":2474}' className="lucide lucide-map-pin text-teal-700 shrink-0 mt-1" data-lucide="map-pin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div bis_size='{"x":68,"y":2427,"w":177,"h":72,"abs_x":548,"abs_y":2470}' className="">
<h4 bis_size='{"x":68,"y":2427,"w":177,"h":24,"abs_x":548,"abs_y":2470}' className="font-medium text-slate-900 font-sans">Адрес</h4>
<p bis_size='{"x":68,"y":2451,"w":177,"h":48,"abs_x":548,"abs_y":2494}' className="text-slate-600 font-sans">гр. Пловдив, кв. Кичука <br bis_size='{"x":245,"y":2453,"w":0,"h":19,"abs_x":725,"abs_y":2496}'/>ул. Славееви гори 41</p>
</div>
</div>
<div bis_size='{"x":32,"y":2523,"w":535,"h":52,"abs_x":512,"abs_y":2566}' className="flex items-start gap-4">
<svg bis_size='{"x":32,"y":2527,"w":20,"h":20,"abs_x":512,"abs_y":2570}' className="lucide lucide-phone text-teal-700 shrink-0 mt-1" data-lucide="phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div bis_size='{"x":68,"y":2523,"w":146,"h":52,"abs_x":548,"abs_y":2566}' className="">
<h4 bis_size='{"x":68,"y":2523,"w":146,"h":24,"abs_x":548,"abs_y":2566}' className="font-medium text-slate-900 font-sans">Телефон за връзка</h4>
<div bis_size='{"x":68,"y":2551,"w":146,"h":24,"abs_x":548,"abs_y":2594}' className="flex flex-col mt-1 gap-x-1 gap-y-1">
<a bis_size='{"x":68,"y":2551,"w":146,"h":24,"abs_x":548,"abs_y":2594}' className="hover:text-teal-700 transition-colors text-slate-600 font-sans" href="/tel:+0886666903">+359 886 666 903</a>
</div>
</div>
</div>
<div bis_size='{"x":32,"y":2599,"w":535,"h":92,"abs_x":512,"abs_y":2642}' className="flex gap-4 gap-x-4 gap-y-4 items-start">
<svg bis_size='{"x":32,"y":2603,"w":20,"h":20,"abs_x":512,"abs_y":2646}' className="lucide lucide-clock text-teal-700 shrink-0 mt-1" data-lucide="clock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div bis_size='{"x":68,"y":2599,"w":258,"h":92,"abs_x":548,"abs_y":2642}' className="">
<h4 bis_size='{"x":68,"y":2599,"w":258,"h":24,"abs_x":548,"abs_y":2642}' className="font-medium text-slate-900 font-sans">Работно време</h4>
<p bis_size='{"x":68,"y":2623,"w":258,"h":24,"abs_x":548,"abs_y":2666}' className="text-slate-600 font-sans">Понеделник – Сряда: 9:00 – 19:00</p><p bis_size='{"x":68,"y":2647,"w":258,"h":24,"abs_x":548,"abs_y":2690}' className="text-slate-600 font-sans">Събота – Неделя: 10:00 – 19:00</p>
</div>
</div>
</div>
</div>

<div bis_size='{"x":663,"y":2287,"w":535,"h":508,"abs_x":1143,"abs_y":2330}' className="md:p-8 fade-in-section is-visible bg-slate-50 border-slate-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<h3 bis_size='{"x":696,"y":2320,"w":469,"h":28,"abs_x":1176,"abs_y":2363}' className="text-xl font-medium text-slate-900 font-sans mb-6">
        Запазете час онлайн</h3>
<form bis_size='{"x":696,"y":2372,"w":469,"h":322,"abs_x":1176,"abs_y":2415}' className="space-y-4" onsubmit="event.preventDefault();">
<div bis_size='{"x":696,"y":2372,"w":469,"h":64,"abs_x":1176,"abs_y":2415}' className="">
<label bis_size='{"x":696,"y":2372,"w":469,"h":16,"abs_x":1176,"abs_y":2415}' className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1 font-sans" htmlFor="name">Име</label>
<input bis_size='{"x":696,"y":2392,"w":469,"h":44,"abs_x":1176,"abs_y":2435}' className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-3 bg-white" id="name" placeholder="Вашето име" type="text"/>
</div>
<div bis_size='{"x":696,"y":2452,"w":469,"h":64,"abs_x":1176,"abs_y":2495}' className="">
<label bis_size='{"x":696,"y":2452,"w":469,"h":16,"abs_x":1176,"abs_y":2495}' className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1 font-sans" htmlFor="phone">Телефон</label>
<input bis_size='{"x":696,"y":2472,"w":469,"h":44,"abs_x":1176,"abs_y":2515}' className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-3 bg-white" id="phone" placeholder="08XX XXX XXX" type="tel"/>
</div>
<div bis_size='{"x":696,"y":2532,"w":469,"h":64,"abs_x":1176,"abs_y":2575}' className="">
<div bis_size='{"x":696,"y":2552,"w":469,"h":44,"abs_x":1176,"abs_y":2595}' className="relative">
<div bis_size='{"x":696,"y":2532,"w":469,"h":64,"abs_x":1176,"abs_y":2575}' className="">
<label bis_size='{"x":696,"y":2532,"w":469,"h":16,"abs_x":1176,"abs_y":2575}' className="block uppercase text-xs font-medium text-slate-700 tracking-wide font-sans mb-1" htmlFor="procedure">Процедура (по избор)</label>
<div bis_size='{"x":696,"y":2552,"w":469,"h":44,"abs_x":1176,"abs_y":2595}' className="relative">
<select bis_size='{"x":696,"y":2552,"w":469,"h":44,"abs_x":1176,"abs_y":2595}' className="block ring-inset focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 appearance-none text-slate-900 bg-white w-full border-0 rounded-md ring-slate-200 ring-1 pt-2.5 pr-3 pb-2.5 pl-3 shadow-sm" id="procedure">
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="font-sans">Почистване на зъбен камък</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="font-sans">Лечение на кариес</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="font-sans">Кореново лечение</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"y":43}' className="font-sans">Избелване на зъби</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"y":43}' className="font-sans">Друго</option>
</select>
<div bis_size='{"x":1125,"y":2552,"w":40,"h":44,"abs_x":1605,"abs_y":2595}' className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<svg bis_size='{"x":1137,"y":2566,"w":16,"h":16,"abs_x":1617,"abs_y":2609}' className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div bis_size='{"x":1125,"y":2552,"w":40,"h":44,"abs_x":1605,"abs_y":2595}' className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<svg bis_size='{"x":1137,"y":2566,"w":16,"h":16,"abs_x":1617,"abs_y":2609}' className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div bis_size='{"x":696,"y":2612,"w":469,"h":82,"abs_x":1176,"abs_y":2655}' className="pt-2">
<button bis_size='{"x":696,"y":2620,"w":469,"h":46,"abs_x":1176,"abs_y":2663}' className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all font-sans" type="button">
                                Изпрати запитване
                            </button>
<p bis_size='{"x":696,"y":2678,"w":469,"h":16,"abs_x":1176,"abs_y":2721}' className="text-xs text-center text-slate-400 mt-3 font-sans">
                Ще се свържем с вас за потвърждение.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":2875,"w":1230,"h":177,"abs_x":480,"abs_y":2918}' className="bg-white border-slate-200 border-t pt-12 pb-12">
<div bis_size='{"x":0,"y":2924,"w":1230,"h":80,"abs_x":480,"abs_y":2967}' className="sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-y-8 max-w-7xl mx-auto px-4">

<div bis_size='{"x":32,"y":2924,"w":145,"h":80,"abs_x":512,"abs_y":2967}' className="flex items-center gap-4">
<img alt="Bio Aesthetics Logo" bis_size='{"x":32,"y":2924,"w":145,"h":80,"abs_x":512,"abs_y":2967}' className="md:h-20 h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cfee763-0826-4b45-94de-a0325c032030_320w.png"/>
</div>

<div bis_size='{"x":456,"y":2940,"w":245,"h":48,"abs_x":936,"abs_y":2983}' className="flex flex-col items-center gap-2">
<p bis_size='{"x":542,"y":2940,"w":73,"h":20,"abs_x":1022,"abs_y":2983}' className="text-sm font-medium text-slate-400 font-sans">
    Страници
  </p>
<nav bis_size='{"x":456,"y":2968,"w":245,"h":20,"abs_x":936,"abs_y":3011}' className="flex gap-6 text-sm font-medium text-slate-500 font-sans">
<a bis_size='{"x":456,"y":2968,"w":44,"h":20,"abs_x":936,"abs_y":3011}' className="hover:text-slate-900 transition-colors" href="#why-us">За нас</a>
<a bis_size='{"x":524,"y":2968,"w":78,"h":20,"abs_x":1004,"abs_y":3011}' className="hover:text-slate-900 transition-colors" href="#services">Процедури</a>
<a bis_size='{"x":626,"y":2968,"w":74,"h":20,"abs_x":1106,"abs_y":3011}' className="hover:text-slate-900 transition-colors" href="#contact">Контакти</a>
</nav>
</div>

<div bis_size='{"x":980,"y":2930,"w":217,"h":68,"abs_x":1460,"abs_y":2973}' className="flex flex-col items-center gap-3 text-sm font-sans">
<a bis_size='{"x":1030,"y":2930,"w":116,"h":36,"abs_x":1510,"abs_y":2973}' className="inline-flex items-center justify-center hover:bg-slate-800 transition-all text-sm font-medium text-white bg-slate-900 rounded-full pt-2 pr-5 pb-2 pl-5" href="#contact">
    Запази час
  </a>
<p bis_size='{"x":980,"y":2978,"w":217,"h":20,"abs_x":1460,"abs_y":3021}' className="text-slate-400 text-center">
    © 2026 Всички права запазени.
  </p>
</div>
</div>
</footer>



    </>
  );
}
