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

<div bis_size='{"x":160,"y":30,"w":245,"h":20,"abs_x":640,"abs_y":73}' className="hidden md:flex mr-[9rem] space-x-6 items-center">

<a bis_size='{"x":160,"y":30,"w":44,"h":20,"abs_x":640,"abs_y":73}' className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-sans" href="#why-us">
      За нас
    </a>
<a bis_size='{"x":229,"y":30,"w":78,"h":20,"abs_x":709,"abs_y":73}' className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-sans" href="#services">
      Процедури
    </a>
<a bis_size='{"x":331,"y":30,"w":74,"h":20,"abs_x":811,"abs_y":73}' className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-600" href="#contact">
      Контакти
    </a>
</div>

<div bis_size='{"x":549,"y":-16,"w":112,"h":112,"abs_x":1029,"abs_y":27}' className="flex justify-center">
<a bis_size='{"x":549,"y":-16,"w":112,"h":112,"abs_x":1029,"abs_y":27}' className="flex items-center" href="#">
<img alt="Bio Aesthetics" bis_size='{"x":549,"y":-16,"w":112,"h":112,"abs_x":1029,"abs_y":27}' className="h-20 md:h-28 object-contain" object-contain"="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ff3ce30-dd23-46ba-ae26-fd8d65b13620_800w.png" style={{}}/>
</a>
</div>

<div bis_size='{"x":789,"y":22,"w":279,"h":36,"abs_x":1269,"abs_y":65}' className="flex ml-[8rem] space-x-6 items-center">

<a bis_size='{"x":789,"y":32,"w":16,"h":16,"abs_x":1269,"abs_y":75}' className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-teal-700 transition-colors font-sans" href="tel:+359877630600">
<svg bis_size='{"x":789,"y":32,"w":16,"h":16,"abs_x":1269,"abs_y":75}' className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":791,"y":33,"w":13,"h":13,"abs_x":1271,"abs_y":76}' className="" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
</path>
</svg>
</a><a bis_size='{"x":829,"y":28,"w":106,"h":24,"abs_x":1309,"abs_y":71}' className="font-medium text-slate-900" href="tel:0877630600">
      0877 630 600
    </a>
<a bis_size='{"x":960,"y":22,"w":108,"h":36,"abs_x":1440,"abs_y":65}' className="hover:bg-slate-800 transition-all hover:shadow-md text-sm font-medium text-white bg-slate-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#contact">
      Запази час
    </a>
</div>
</div>
</nav>

<section bis_size='{"x":0,"y":0,"w":1230,"h":727,"abs_x":480,"abs_y":43}' className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div bis_size='{"x":0,"y":0,"w":1230,"h":727,"abs_x":480,"abs_y":43}' className="absolute inset-0 z-0">
<img alt="Medical Aesthetic Clinic Background" bis_size='{"x":0,"y":0,"w":1230,"h":727,"abs_x":480,"abs_y":43}' className="w-full h-full object-cover object-center opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27fb4e5b-330c-4ed6-9342-6fa6692772d3_3840w.jpg" style={{}}/>
<div bis_size='{"x":0,"y":0,"w":1230,"h":727,"abs_x":480,"abs_y":43}' className="bg-gradient-to-r from-white via-white/80 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div bis_size='{"x":0,"y":192,"w":1230,"h":407,"abs_x":480,"abs_y":235}' className="sm:px-6 lg:px-8 max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<div bis_size='{"x":32,"y":192,"w":672,"h":407,"abs_x":512,"abs_y":235}' className="max-w-2xl fade-in-section is-visible">
<div bis_size='{"x":32,"y":192,"w":250,"h":26,"abs_x":512,"abs_y":235}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-medium mb-6 font-sans">
<svg bis_size='{"x":45,"y":198,"w":14,"h":14,"abs_x":525,"abs_y":241}' className="lucide lucide-check-circle" data-lucide="check-circle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":46,"y":199,"w":11,"h":11,"abs_x":526,"abs_y":242}' d="M21.801 10A10 10 0 1 1 17 3.335"></path><path bis_size='{"x":50,"y":200,"w":7,"h":5,"abs_x":530,"abs_y":243}' d="m9 11 3 3L22 4"></path></svg>
            Лицензиран медицински център
        </div>
<h1 bis_size='{"x":32,"y":242,"w":672,"h":96,"abs_x":512,"abs_y":285}' className="leading-[1.1] md:text-5xl lg:text-5xl text-4xl font-semibold text-slate-900 tracking-tight mb-6">Био Естетикс - Център за красота и здраве</h1>
<p bis_size='{"x":32,"y":362,"w":512,"h":87,"abs_x":512,"abs_y":405}' className="leading-relaxed text-lg text-slate-600 max-w-lg mb-8">
            Професионална грижа от лекари специалисти в Пловдив. Лазерна епилация, инжекционни процедури и
            дерматологични терапии с доказан резултат.
        </p>
<div bis_size='{"x":32,"y":481,"w":672,"h":50,"abs_x":512,"abs_y":524}' className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4">
<a bis_size='{"x":32,"y":481,"w":211,"h":50,"abs_x":512,"abs_y":524}' className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-sans" href="#contact">
                Запази консултация
            </a>
<a bis_size='{"x":259,"y":481,"w":148,"h":50,"abs_x":739,"abs_y":524}' className="inline-flex justify-center items-center hover:bg-slate-50 transition-all text-base font-medium text-slate-700 font-sans bg-white border-slate-200 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="tel:+359877630600">
<svg bis_size='{"x":284,"y":497,"w":18,"h":18,"abs_x":764,"abs_y":540}' className="lucide lucide-phone mr-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":285,"y":499,"w":15,"h":15,"abs_x":765,"abs_y":542}' d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
</path>
</svg>
  Обади се
</a>
</div>
<div bis_size='{"x":32,"y":579,"w":672,"h":20,"abs_x":512,"abs_y":622}' className="mt-12 flex items-center gap-6 text-sm text-slate-500">
<div bis_size='{"x":32,"y":579,"w":113,"h":20,"abs_x":512,"abs_y":622}' className="flex items-center gap-2 font-sans">
<svg bis_size='{"x":32,"y":581,"w":16,"h":16,"abs_x":512,"abs_y":624}' className="lucide lucide-star text-teal-600 fill-teal-600" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":33,"y":583,"w":13,"h":12,"abs_x":513,"abs_y":626}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span bis_size='{"x":56,"y":579,"w":20,"h":20,"abs_x":536,"abs_y":622}' className="font-medium text-slate-900 font-sans">5.0</span>
                Рейтинг
            </div>
<div bis_size='{"x":169,"y":581,"w":1,"h":16,"abs_x":649,"abs_y":624}' className="w-px h-4 bg-slate-300">
</div>
<div bis_size='{"x":194,"y":579,"w":132,"h":20,"abs_x":674,"abs_y":622}' className="">Д-р Румен Николов</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":727,"w":1230,"h":644,"abs_x":480,"abs_y":770}' className="bg-white pt-20 pb-20" id="why-us">
<div bis_size='{"x":0,"y":807,"w":1230,"h":484,"abs_x":480,"abs_y":850}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":32,"y":807,"w":1166,"h":484,"abs_x":512,"abs_y":850}' className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div bis_size='{"x":32,"y":846,"w":543,"h":407,"abs_x":512,"abs_y":889}' className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg fade-in-section is-visible">
<img alt="Clinic Interior" bis_size='{"x":32,"y":846,"w":543,"h":407,"abs_x":512,"abs_y":889}' className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5efd8e82-94f0-4b74-8540-6c3023a71612_1600w.jpg"/>
<div bis_size='{"x":32,"y":1168,"w":543,"h":85,"abs_x":512,"abs_y":1211}' className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6 border-t border-slate-100">
<p bis_size='{"x":56,"y":1193,"w":495,"h":20,"abs_x":536,"abs_y":1236}' className="text-sm font-medium text-slate-900 font-sans">Медицински център Bio Aesthetics</p>
<p bis_size='{"x":56,"y":1213,"w":495,"h":16,"abs_x":536,"abs_y":1256}' className="text-xs text-slate-500 font-sans">Бул. Марица 27-Г, Пловдив</p>
</div>
</div>

<div bis_size='{"x":655,"y":807,"w":543,"h":484,"abs_x":1135,"abs_y":850}' className="fade-in-section is-visible">
<h2 bis_size='{"x":655,"y":807,"w":543,"h":72,"abs_x":1135,"abs_y":850}' className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                        Защо да изберете медицински подход?
                    </h2>
<p bis_size='{"x":655,"y":903,"w":543,"h":104,"abs_x":1135,"abs_y":946}' className="leading-relaxed text-slate-600 mb-8">
                        Ние не сме козметичен салон, а регистрирано лечебно заведение. Вашата безопасност и резултатите от процедурите са гарантирани от квалифицирани медицински лица и модерна апаратура.
                    </p>
<div bis_size='{"x":655,"y":1039,"w":543,"h":252,"abs_x":1135,"abs_y":1082}' className="space-y-6">
<div bis_size='{"x":655,"y":1039,"w":543,"h":68,"abs_x":1135,"abs_y":1082}' className="flex gap-4">
<div bis_size='{"x":655,"y":1039,"w":40,"h":40,"abs_x":1135,"abs_y":1082}' className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
<svg bis_size='{"x":665,"y":1049,"w":20,"h":20,"abs_x":1145,"abs_y":1092}' className="lucide lucide-stethoscope" data-lucide="stethoscope" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":674,"y":1051,"w":0,"h":1,"abs_x":1154,"abs_y":1094}' d="M11 2v2"></path><path bis_size='{"x":669,"y":1051,"w":0,"h":1,"abs_x":1149,"abs_y":1094}' d="M5 2v2"></path><path bis_size='{"x":666,"y":1052,"w":10,"h":10,"abs_x":1146,"abs_y":1095}' d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path bis_size='{"x":671,"y":1059,"w":10,"h":7,"abs_x":1151,"abs_y":1102}' d="M8 15a6 6 0 0 0 12 0v-3"></path><circle bis_size='{"x":680,"y":1056,"w":3,"h":3,"abs_x":1160,"abs_y":1099}' cx="20" cy="10" r="2"></circle></svg>
</div>
<div bis_size='{"x":711,"y":1039,"w":487,"h":68,"abs_x":1191,"abs_y":1082}' className="">
<h3 bis_size='{"x":711,"y":1039,"w":487,"h":24,"abs_x":1191,"abs_y":1082}' className="text-base font-medium text-slate-900 font-sans">Лекари специалисти</h3>
<p bis_size='{"x":711,"y":1067,"w":487,"h":40,"abs_x":1191,"abs_y":1110}' className="text-sm text-slate-500 mt-1 font-sans">Процедурите се извършват и контролират от д-р Николов и медицински екип.</p>
</div>
</div>
<div bis_size='{"x":655,"y":1131,"w":543,"h":68,"abs_x":1135,"abs_y":1174}' className="flex gap-4">
<div bis_size='{"x":655,"y":1131,"w":40,"h":40,"abs_x":1135,"abs_y":1174}' className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
<svg bis_size='{"x":665,"y":1141,"w":20,"h":20,"abs_x":1145,"abs_y":1184}' className="lucide lucide-microscope" data-lucide="microscope" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":670,"y":1156,"w":6,"h":0,"abs_x":1150,"abs_y":1199}' d="M6 18h8"></path><path bis_size='{"x":667,"y":1160,"w":15,"h":0,"abs_x":1147,"abs_y":1203}' d="M3 22h18"></path><path bis_size='{"x":675,"y":1148,"w":6,"h":11,"abs_x":1155,"abs_y":1191}' d="M14 22a7 7 0 1 0 0-14h-1"></path><path bis_size='{"x":672,"y":1153,"w":1,"h":0,"abs_x":1152,"abs_y":1196}' d="M9 14h2"></path><path bis_size='{"x":670,"y":1146,"w":5,"h":5,"abs_x":1150,"abs_y":1189}' d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path bis_size='{"x":671,"y":1143,"w":3,"h":3,"abs_x":1151,"abs_y":1186}' d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
</div>
<div bis_size='{"x":711,"y":1131,"w":487,"h":68,"abs_x":1191,"abs_y":1174}' className="">
<h3 bis_size='{"x":711,"y":1131,"w":487,"h":24,"abs_x":1191,"abs_y":1174}' className="text-base font-medium text-slate-900 font-sans">Медицинска апаратура</h3>
<p bis_size='{"x":711,"y":1159,"w":487,"h":40,"abs_x":1191,"abs_y":1202}' className="text-sm text-slate-500 mt-1 font-sans">Работим само със сертифицирана техника и продукти (Juvelook, GemVous, BioRePeelCl3).</p>
</div>
</div>
<div bis_size='{"x":655,"y":1223,"w":543,"h":68,"abs_x":1135,"abs_y":1266}' className="flex gap-4">
<div bis_size='{"x":655,"y":1223,"w":40,"h":40,"abs_x":1135,"abs_y":1266}' className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
<svg bis_size='{"x":665,"y":1233,"w":20,"h":20,"abs_x":1145,"abs_y":1276}' className="lucide lucide-user-check" data-lucide="user-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":678,"y":1241,"w":5,"h":3,"abs_x":1158,"abs_y":1284}' d="m16 11 2 2 4-4"></path><path bis_size='{"x":666,"y":1246,"w":11,"h":5,"abs_x":1146,"abs_y":1289}' d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle bis_size='{"x":669,"y":1236,"w":6,"h":6,"abs_x":1149,"abs_y":1279}' cx="9" cy="7" r="4"></circle></svg>
</div>
<div bis_size='{"x":711,"y":1223,"w":487,"h":68,"abs_x":1191,"abs_y":1266}' className="">
<h3 bis_size='{"x":711,"y":1223,"w":487,"h":24,"abs_x":1191,"abs_y":1266}' className="text-base font-medium text-slate-900 font-sans">Индивидуален план</h3>
<p bis_size='{"x":711,"y":1251,"w":487,"h":40,"abs_x":1191,"abs_y":1294}' className="text-sm text-slate-500 mt-1 font-sans">Всяка терапия започва с обстойна консултация и анализ на състоянието.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1371,"w":1230,"h":806,"abs_x":480,"abs_y":1414}' className="border-y bg-slate-50 border-slate-200/60 pt-20 pb-20" id="services">
<div bis_size='{"x":0,"y":1452,"w":1230,"h":644,"abs_x":480,"abs_y":1495}' className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div bis_size='{"x":279,"y":1452,"w":672,"h":100,"abs_x":759,"abs_y":1495}' className="text-center max-w-2xl mx-auto mb-16 fade-in-section is-visible">
<h2 bis_size='{"x":279,"y":1452,"w":672,"h":36,"abs_x":759,"abs_y":1495}' className="text-3xl text-slate-900 tracking-tight mb-4 font-sans font-semibold" style={{}}>Нашите основни процедури</h2>
<p bis_size='{"x":279,"y":1504,"w":672,"h":48,"abs_x":759,"abs_y":1547}' className="text-slate-600 font-sans">
        Фокусирани сме върху нехирургични методи за подмладяване и лечение на кожата с минимален възстановителен период.
      </p>
</div>
<div bis_size='{"x":32,"y":1616,"w":1166,"h":480,"abs_x":512,"abs_y":1659}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div bis_size='{"x":32,"y":1616,"w":273,"h":480,"abs_x":512,"abs_y":1659}' className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

<div bis_size='{"x":32,"y":1616,"w":273,"h":256,"abs_x":512,"abs_y":1659}' className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
<img alt="Лазерна епилация" bis_size='{"x":32,"y":1616,"w":273,"h":256,"abs_x":512,"abs_y":1659}' className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d71eaa6-5d92-40b7-a4c1-8c54efc8184e_800w.jpg"/>
<div bis_size='{"x":32,"y":1616,"w":273,"h":256,"abs_x":512,"abs_y":1659}' className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<h3 bis_size='{"x":48,"y":1828,"w":173,"h":28,"abs_x":528,"abs_y":1871}' className="absolute bottom-4 left-4 text-white text-lg md:text-xl font-medium font-sans">
        Лазерна епилация
      </h3>
</div>

<div bis_size='{"x":32,"y":1872,"w":273,"h":224,"abs_x":512,"abs_y":1915}' className="p-6 flex flex-col justify-between h-48 md:h-52 lg:h-56">
<p bis_size='{"x":56,"y":1896,"w":225,"h":100,"abs_x":536,"abs_y":1939}' className="text-sm text-slate-500 mb-4 font-sans">
        Медицинска лазерна епилация за трайно премахване на окосмяването. Ефективна и безболезнена за всеки тип кожа.
      </p>
<a bis_size='{"x":56,"y":2052,"w":225,"h":20,"abs_x":536,"abs_y":2095}' className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900 font-sans" href="#contact">
        Запази час
        <svg bis_size='{"x":136,"y":2055,"w":14,"h":14,"abs_x":616,"abs_y":2098}' className="ml-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":139,"y":2062,"w":8,"h":0,"abs_x":619,"abs_y":2105}' d="M5 12h14"></path>
<path bis_size='{"x":143,"y":2058,"w":4,"h":8,"abs_x":623,"abs_y":2101}' d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div bis_size='{"x":329,"y":1616,"w":273,"h":480,"abs_x":809,"abs_y":1659}' className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
<div bis_size='{"x":329,"y":1616,"w":273,"h":256,"abs_x":809,"abs_y":1659}' className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
<img alt="Инжекционни Skin Boosters" bis_size='{"x":329,"y":1616,"w":273,"h":256,"abs_x":809,"abs_y":1659}' className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c36c532-1c25-4755-ab2e-4b9e7c3452f7_800w.jpg"/>
<div bis_size='{"x":329,"y":1616,"w":273,"h":256,"abs_x":809,"abs_y":1659}' className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<h3 bis_size='{"x":345,"y":1800,"w":257,"h":56,"abs_x":825,"abs_y":1843}' className="absolute bottom-4 left-4 text-white text-lg md:text-xl font-medium font-sans">
        Инжекционни Skin Boosters
      </h3>
</div>
<div bis_size='{"x":329,"y":1872,"w":273,"h":224,"abs_x":809,"abs_y":1915}' className="p-6 flex flex-col justify-between h-48 md:h-52 lg:h-56">
<p bis_size='{"x":353,"y":1896,"w":225,"h":80,"abs_x":833,"abs_y":1939}' className="text-sm text-slate-500 mb-4 font-sans">
        Биостимулатори (Juvelook, GemVous) за дълбока хидратация, стягане и възстановяване на колагена.
      </p>
<a bis_size='{"x":353,"y":2052,"w":225,"h":20,"abs_x":833,"abs_y":2095}' className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900 font-sans" href="#contact">
        Запази час
        <svg bis_size='{"x":433,"y":2055,"w":14,"h":14,"abs_x":913,"abs_y":2098}' className="ml-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":436,"y":2062,"w":8,"h":0,"abs_x":916,"abs_y":2105}' d="M5 12h14"></path>
<path bis_size='{"x":440,"y":2058,"w":4,"h":8,"abs_x":920,"abs_y":2101}' d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div bis_size='{"x":627,"y":1616,"w":273,"h":480,"abs_x":1107,"abs_y":1659}' className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
<div bis_size='{"x":627,"y":1616,"w":273,"h":256,"abs_x":1107,"abs_y":1659}' className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
<img alt="Акне и подмладяване" bis_size='{"x":627,"y":1616,"w":273,"h":256,"abs_x":1107,"abs_y":1659}' className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/429f83aa-46d4-4dd8-9851-abbad68407b2_800w.jpg" style={{}}/>
<div bis_size='{"x":627,"y":1616,"w":273,"h":256,"abs_x":1107,"abs_y":1659}' className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<h3 bis_size='{"x":643,"y":1828,"w":204,"h":28,"abs_x":1123,"abs_y":1871}' className="absolute bottom-4 left-4 text-white text-lg md:text-xl font-medium font-sans">
        Акне и подмладяване
      </h3>
</div>
<div bis_size='{"x":627,"y":1872,"w":273,"h":224,"abs_x":1107,"abs_y":1915}' className="flex flex-col md:h-52 lg:h-56 h-48 pt-6 pr-6 pb-6 pl-6 justify-between">
<p bis_size='{"x":651,"y":1896,"w":225,"h":80,"abs_x":1131,"abs_y":1939}' className="text-sm text-slate-500 mb-4 font-sans">
        Комплексно лечение на акне, белези и пигментации. Химични пилинги и микронидлинг терапии.
      </p>
<a bis_size='{"x":651,"y":2052,"w":225,"h":20,"abs_x":1131,"abs_y":2095}' className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900 font-sans" href="#contact">
        Запази час
        <svg bis_size='{"x":731,"y":2055,"w":14,"h":14,"abs_x":1211,"abs_y":2098}' className="ml-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":734,"y":2062,"w":8,"h":0,"abs_x":1214,"abs_y":2105}' d="M5 12h14"></path>
<path bis_size='{"x":738,"y":2058,"w":4,"h":8,"abs_x":1218,"abs_y":2101}' d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div bis_size='{"x":924,"y":1616,"w":273,"h":480,"abs_x":1404,"abs_y":1659}' className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
<div bis_size='{"x":924,"y":1616,"w":273,"h":256,"abs_x":1404,"abs_y":1659}' className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
<img alt="PRP Терапия" bis_size='{"x":924,"y":1616,"w":273,"h":256,"abs_x":1404,"abs_y":1659}' className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fdaaa76-7fc5-4eee-a8a3-8cb29e94f078_800w.png" style={{}}/>
<div bis_size='{"x":924,"y":1616,"w":273,"h":256,"abs_x":1404,"abs_y":1659}' className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<h3 bis_size='{"x":940,"y":1828,"w":119,"h":28,"abs_x":1420,"abs_y":1871}' className="absolute bottom-4 left-4 text-white text-lg md:text-xl font-medium font-sans">
        PRP Терапия
      </h3>
</div>
<div bis_size='{"x":924,"y":1872,"w":273,"h":224,"abs_x":1404,"abs_y":1915}' className="p-6 flex flex-col justify-between h-48 md:h-52 lg:h-56">
<p bis_size='{"x":948,"y":1896,"w":225,"h":80,"abs_x":1428,"abs_y":1939}' className="text-sm text-slate-500 mb-4 font-sans">
        Плазмотерапия за лечение на косопад и регенерация на кожата на лицето със собствени растежни фактори.
      </p>
<a bis_size='{"x":948,"y":2052,"w":225,"h":20,"abs_x":1428,"abs_y":2095}' className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900 font-sans" href="#contact">
        Запази час
        <svg bis_size='{"x":1028,"y":2055,"w":14,"h":14,"abs_x":1508,"abs_y":2098}' className="ml-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1031,"y":2062,"w":8,"h":0,"abs_x":1511,"abs_y":2105}' d="M5 12h14"></path>
<path bis_size='{"x":1035,"y":2058,"w":4,"h":8,"abs_x":1515,"abs_y":2101}' d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2177,"w":1230,"h":672,"abs_x":480,"abs_y":2220}' className="bg-white pt-20 pb-20" id="contact">
<div bis_size='{"x":0,"y":2257,"w":1230,"h":512,"abs_x":480,"abs_y":2300}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":32,"y":2257,"w":1166,"h":512,"abs_x":512,"abs_y":2300}' className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div bis_size='{"x":32,"y":2257,"w":535,"h":512,"abs_x":512,"abs_y":2300}' className="fade-in-section is-visible">
<h2 bis_size='{"x":32,"y":2257,"w":535,"h":36,"abs_x":512,"abs_y":2300}' className="text-3xl text-slate-900 tracking-tight mb-6 font-sans font-semibold" style={{}}>Контакти</h2>
<p bis_size='{"x":32,"y":2317,"w":535,"h":48,"abs_x":512,"abs_y":2360}' className="text-slate-600 mb-8 font-sans">
                        Свържете се с нас за безплатна консултация или запазване на час. Намираме се в квартал Кършияка, Пловдив.
                    </p>
<div bis_size='{"x":32,"y":2397,"w":535,"h":340,"abs_x":512,"abs_y":2440}' className="space-y-6 mb-8">
<div bis_size='{"x":32,"y":2397,"w":535,"h":72,"abs_x":512,"abs_y":2440}' className="flex items-start gap-4">
<svg bis_size='{"x":32,"y":2401,"w":20,"h":20,"abs_x":512,"abs_y":2444}' className="lucide lucide-map-pin text-teal-700 shrink-0 mt-1" data-lucide="map-pin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":35,"y":2403,"w":13,"h":16,"abs_x":515,"abs_y":2446}' d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle bis_size='{"x":39,"y":2407,"w":5,"h":5,"abs_x":519,"abs_y":2450}' cx="12" cy="10" r="3"></circle></svg>
<div bis_size='{"x":68,"y":2397,"w":200,"h":72,"abs_x":548,"abs_y":2440}' className="">
<h4 bis_size='{"x":68,"y":2397,"w":200,"h":24,"abs_x":548,"abs_y":2440}' className="font-medium text-slate-900 font-sans">Адрес</h4>
<p bis_size='{"x":68,"y":2421,"w":200,"h":48,"abs_x":548,"abs_y":2464}' className="text-slate-600 font-sans">гр. Пловдив, кв. Кършияка<br bis_size='{"x":268,"y":2424,"w":0,"h":19,"abs_x":748,"abs_y":2467}'/>бул. Марица 27-Г</p>
</div>
</div>
<div bis_size='{"x":32,"y":2493,"w":535,"h":80,"abs_x":512,"abs_y":2536}' className="flex items-start gap-4">
<svg bis_size='{"x":32,"y":2497,"w":20,"h":20,"abs_x":512,"abs_y":2540}' className="lucide lucide-phone text-teal-700 shrink-0 mt-1" data-lucide="phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":33,"y":2499,"w":16,"h":16,"abs_x":513,"abs_y":2542}' d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div bis_size='{"x":68,"y":2493,"w":156,"h":80,"abs_x":548,"abs_y":2536}'>
<h4 bis_size='{"x":68,"y":2493,"w":156,"h":24,"abs_x":548,"abs_y":2536}' className="font-medium text-slate-900 font-sans">Телефони за връзка</h4>
<div bis_size='{"x":68,"y":2521,"w":156,"h":52,"abs_x":548,"abs_y":2564}' className="flex flex-col gap-1 mt-1">
<a bis_size='{"x":68,"y":2521,"w":156,"h":24,"abs_x":548,"abs_y":2564}' className="text-slate-600 hover:text-teal-700 transition-colors font-sans" href="tel:+359877630600">+359 877 630 600</a>
<a bis_size='{"x":68,"y":2549,"w":156,"h":24,"abs_x":548,"abs_y":2592}' className="text-slate-600 hover:text-teal-700 transition-colors font-sans" href="tel:+359888888235">+359 888 888 235</a>
</div>
</div>
</div>
<div bis_size='{"x":32,"y":2597,"w":535,"h":68,"abs_x":512,"abs_y":2640}' className="flex items-start gap-4">
<svg bis_size='{"x":32,"y":2601,"w":20,"h":20,"abs_x":512,"abs_y":2644}' className="lucide lucide-clock text-teal-700 shrink-0 mt-1" data-lucide="clock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":42,"y":2606,"w":3,"h":6,"abs_x":522,"abs_y":2649}' d="M12 6v6l4 2"></path><circle bis_size='{"x":33,"y":2603,"w":16,"h":16,"abs_x":513,"abs_y":2646}' cx="12" cy="12" r="10"></circle></svg>
<div bis_size='{"x":68,"y":2597,"w":270,"h":68,"abs_x":548,"abs_y":2640}'>
<h4 bis_size='{"x":68,"y":2597,"w":270,"h":24,"abs_x":548,"abs_y":2640}' className="font-medium text-slate-900 font-sans">Работно време</h4>
<p bis_size='{"x":68,"y":2621,"w":270,"h":24,"abs_x":548,"abs_y":2664}' className="text-slate-600 font-sans">Понеделник – Петък: 10:00 – 18:00</p>
<p bis_size='{"x":68,"y":2645,"w":270,"h":20,"abs_x":548,"abs_y":2688}' className="text-slate-400 text-sm font-sans">Събота и Неделя: Почивен ден</p>
</div>
</div>
<div bis_size='{"x":32,"y":2689,"w":535,"h":48,"abs_x":512,"abs_y":2732}' className="flex items-start gap-4">
<svg bis_size='{"x":32,"y":2693,"w":20,"h":20,"abs_x":512,"abs_y":2736}' className="lucide lucide-mail text-teal-700 shrink-0 mt-1" data-lucide="mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":33,"y":2699,"w":16,"h":4,"abs_x":513,"abs_y":2742}' d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect bis_size='{"x":33,"y":2697,"w":16,"h":13,"abs_x":513,"abs_y":2740}' height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div bis_size='{"x":68,"y":2689,"w":165,"h":48,"abs_x":548,"abs_y":2732}'>
<h4 bis_size='{"x":68,"y":2689,"w":165,"h":24,"abs_x":548,"abs_y":2732}' className="font-medium text-slate-900 font-sans">Имейл</h4>
<a bis_size='{"x":68,"y":2716,"w":165,"h":19,"abs_x":548,"abs_y":2759}' className="text-slate-600 hover:text-teal-700 transition-colors font-sans" href="mailto:dr.nikoloff@yahoo.com">dr.nikoloff@yahoo.com</a>
</div>
</div>
</div>
</div>

<div bis_size='{"x":663,"y":2257,"w":535,"h":512,"abs_x":1143,"abs_y":2300}' className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 fade-in-section is-visible">
<h3 bis_size='{"x":696,"y":2290,"w":469,"h":28,"abs_x":1176,"abs_y":2333}' className="text-xl font-medium text-slate-900 mb-6 font-sans">Запазете час онлайн</h3>
<form bis_size='{"x":696,"y":2342,"w":469,"h":322,"abs_x":1176,"abs_y":2385}' className="space-y-4" onsubmit="event.preventDefault();">
<div bis_size='{"x":696,"y":2342,"w":469,"h":64,"abs_x":1176,"abs_y":2385}' className="">
<label bis_size='{"x":696,"y":2342,"w":469,"h":16,"abs_x":1176,"abs_y":2385}' className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1 font-sans" htmlFor="name">Име</label>
<input bis_size='{"x":696,"y":2362,"w":469,"h":44,"abs_x":1176,"abs_y":2405}' className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-3 bg-white" id="name" placeholder="Вашето име" type="text"/>
</div>
<div bis_size='{"x":696,"y":2422,"w":469,"h":64,"abs_x":1176,"abs_y":2465}' className="">
<label bis_size='{"x":696,"y":2422,"w":469,"h":16,"abs_x":1176,"abs_y":2465}' className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1 font-sans" htmlFor="phone">Телефон</label>
<input bis_size='{"x":696,"y":2442,"w":469,"h":44,"abs_x":1176,"abs_y":2485}' className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-3 bg-white" id="phone" placeholder="08XX XXX XXX" type="tel"/>
</div>
<div bis_size='{"x":696,"y":2502,"w":469,"h":64,"abs_x":1176,"abs_y":2545}' className="">
<label bis_size='{"x":696,"y":2502,"w":469,"h":16,"abs_x":1176,"abs_y":2545}' className="block text-xs font-medium text-slate-700 uppercase tracking-wide mb-1 font-sans" htmlFor="procedure">Процедура (по избор)</label>
<div bis_size='{"x":696,"y":2522,"w":469,"h":44,"abs_x":1176,"abs_y":2565}' className="relative">
<select bis_size='{"x":696,"y":2522,"w":469,"h":44,"abs_x":1176,"abs_y":2565}' className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 px-3 bg-white appearance-none" id="procedure">
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="font-sans">Консултация</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="font-sans">Лазерна епилация</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="font-sans">Инжекционни процедури</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="font-sans">Лечение на акне</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="font-sans">PRP Терапия</option>
</select>
<div bis_size='{"x":1125,"y":2522,"w":40,"h":44,"abs_x":1605,"abs_y":2565}' className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<svg bis_size='{"x":1137,"y":2536,"w":16,"h":16,"abs_x":1617,"abs_y":2579}' className="lucide lucide-chevron-down" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1141,"y":2542,"w":8,"h":4,"abs_x":1621,"abs_y":2585}' d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div bis_size='{"x":696,"y":2582,"w":469,"h":82,"abs_x":1176,"abs_y":2625}' className="pt-2">
<button bis_size='{"x":696,"y":2590,"w":469,"h":46,"abs_x":1176,"abs_y":2633}' className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all font-sans" type="button">
                                Изпрати запитване
                            </button>
<p bis_size='{"x":696,"y":2648,"w":469,"h":16,"abs_x":1176,"abs_y":2691}' className="text-xs text-center text-slate-400 mt-3 font-sans">Ще се свържем с вас за потвърждение.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":2849,"w":1230,"h":177,"abs_x":480,"abs_y":2892}' className="bg-white border-slate-200 border-t pt-12 pb-12">
<div bis_size='{"x":0,"y":2898,"w":1230,"h":80,"abs_x":480,"abs_y":2941}' className="sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-y-8 max-w-7xl mx-auto px-4">

<div bis_size='{"x":32,"y":2898,"w":164,"h":80,"abs_x":512,"abs_y":2941}' className="flex items-center gap-4">
<img alt="Bio Aesthetics Logo" bis_size='{"x":32,"y":2898,"w":164,"h":80,"abs_x":512,"abs_y":2941}' className="h-16 md:h-20 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca5e9411-8cb3-44cc-90c2-5000c56dacbc_320w.png" style={{}}/>
</div>

<div bis_size='{"x":465,"y":2914,"w":245,"h":48,"abs_x":945,"abs_y":2957}' className="flex flex-col items-center gap-2">
<p bis_size='{"x":551,"y":2914,"w":73,"h":20,"abs_x":1031,"abs_y":2957}' className="text-sm font-medium text-slate-400 font-sans">
    Страници
  </p>
<nav bis_size='{"x":465,"y":2942,"w":245,"h":20,"abs_x":945,"abs_y":2985}' className="flex gap-6 text-sm font-medium text-slate-500 font-sans">
<a bis_size='{"x":465,"y":2942,"w":44,"h":20,"abs_x":945,"abs_y":2985}' className="hover:text-slate-900 transition-colors" href="#why-us">За нас</a>
<a bis_size='{"x":534,"y":2942,"w":78,"h":20,"abs_x":1014,"abs_y":2985}' className="hover:text-slate-900 transition-colors" href="#services">Процедури</a>
<a bis_size='{"x":636,"y":2942,"w":74,"h":20,"abs_x":1116,"abs_y":2985}' className="hover:text-slate-900 transition-colors" href="#contact">Контакти</a>
</nav>
</div>

<div bis_size='{"x":980,"y":2904,"w":217,"h":68,"abs_x":1460,"abs_y":2947}' className="flex flex-col items-center gap-3 text-sm font-sans">
<a bis_size='{"x":1030,"y":2904,"w":116,"h":36,"abs_x":1510,"abs_y":2947}' className="inline-flex items-center justify-center hover:bg-slate-800 transition-all text-sm font-medium text-white bg-slate-900 rounded-full pt-2 pr-5 pb-2 pl-5" href="#contact">
    Запази час
  </a>
<p bis_size='{"x":980,"y":2952,"w":217,"h":20,"abs_x":1460,"abs_y":2995}' className="text-slate-400 text-center">
    © 2026 Всички права запазени.
  </p>
</div>
</div>
</footer>



    </>
  );
}
