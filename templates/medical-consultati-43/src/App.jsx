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



      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "15min", {origin:"https://app.cal.com"});
      Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    
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
      

<nav className="fixed w-full z-40 top-0 left-0 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[#035143] rounded-lg flex items-center justify-center text-white shadow-sm ring-1 ring-[#035143]/10">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-lg text-slate-900">DR. GUZIK</span>
</div>
<div>
<a className="text-base font-normal text-slate-500 hover:text-[#035143] transition-colors" href="mailto:kontakt@tomaszguzik.pl">
                    Kontakt
                </a>
</div>
</div>
</nav>

<main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40 z-0">
<div className="absolute top-[10%] left-[15%] w-[32rem] h-[32rem] bg-emerald-50/80 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute top-[20%] right-[15%] w-[32rem] h-[32rem] bg-orange-50/80 rounded-full blur-3xl mix-blend-multiply"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur shadow-sm mb-10 transition-transform hover:scale-105 cursor-default group">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#035143]"></span>
</span>
<span className="text-sm font-normal text-slate-600 group-hover:text-slate-900 transition-colors">Przyjmuję nowych pacjentów</span>
</div>

<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-slate-900 mb-8 leading-[1.05]">
                Nowoczesna opieka medyczna,<br/>na którą zasługujesz.
            </h1>

<p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Skonsultuj swoje zdrowie bez wychodzenia z domu lub w gabinecie. Profesjonalna diagnoza i indywidualne podejście do pacjenta.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-6">

<button className="group relative inline-flex items-center gap-2.5 justify-center bg-[#035143] text-white pl-8 pr-6 py-4 rounded-full text-base font-normal transition-all hover:bg-[#024035] hover:shadow-xl hover:shadow-[#035143]/10 active:scale-95 ring-1 ring-[#035143]" data-cal-config='{"layout":"month_view"}' data-cal-link="tomasz-guzik-tq9nhw/15min" data-cal-namespace="15min">
<span>Umów się na wizytę</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="flex items-center gap-4 px-2 py-2">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden shadow-sm">
<iconify-icon icon="lucide:user" width="16"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-200 flex items-center justify-center text-slate-500 overflow-hidden shadow-sm">
<iconify-icon icon="lucide:user" width="16"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm">
<span className="text-xs font-medium">50+</span>
</div>
</div>
<div className="text-sm text-slate-500 text-left leading-tight">
<p className="font-medium text-slate-900">Zadowolonych</p>
<p>pacjentów w tym miesiącu</p>
</div>
</div>
</div>

<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-left border-t border-slate-100/80 pt-12">
<div className="flex flex-col gap-3 group">
<div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 mb-1 border border-slate-100 transition-colors group-hover:bg-[#035143]/5 group-hover:text-[#035143] group-hover:border-[#035143]/10">
<iconify-icon icon="lucide:calendar-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900">Szybkie terminy</h3>
<p className="text-sm text-slate-500 leading-relaxed">Rezerwacja online w mniej niż minutę. Wybierz dogodny czas dla siebie z dostępnego kalendarza.</p>
</div>
<div className="flex flex-col gap-3 group">
<div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 mb-1 border border-slate-100 transition-colors group-hover:bg-[#035143]/5 group-hover:text-[#035143] group-hover:border-[#035143]/10">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900">Bezpieczeństwo</h3>
<p className="text-sm text-slate-500 leading-relaxed">Twoje dane medyczne są w pełni chronione, szyfrowane i zgodne z RODO.</p>
</div>
<div className="flex flex-col gap-3 group">
<div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 mb-1 border border-slate-100 transition-colors group-hover:bg-[#035143]/5 group-hover:text-[#035143] group-hover:border-[#035143]/10">
<iconify-icon icon="lucide:stethoscope" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900">E-Recepty</h3>
<p className="text-sm text-slate-500 leading-relaxed">Otrzymaj receptę, zwolnienie i zalecenia bezpośrednio na swój telefon lub e-mail.</p>
</div>
</div>
</div>
</main>

<section className="bg-slate-50 py-20 border-t border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-normal tracking-tight text-slate-900 mb-6">Zadbaj o swoje zdrowie już dziś</h2>
<p className="text-slate-500 mb-10 max-w-lg mx-auto">Skorzystaj z wygodnego kalendarza online i wybierz termin, który najbardziej Ci odpowiada.</p>

<button className="inline-flex items-center gap-2.5 justify-center bg-[#035143] text-white px-8 py-4 rounded-xl text-lg font-medium transition-all hover:bg-[#024035] hover:-translate-y-0.5 shadow-lg shadow-[#035143]/10 active:scale-95" data-cal-config='{"layout":"month_view"}' data-cal-link="tomasz-guzik-tq9nhw/15min" data-cal-namespace="15min">
                Umów bezpłatną konsultację
            </button>
</div>
</section>

<footer className="border-t border-slate-100 py-10 bg-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-slate-400 font-normal">© 2024 Tomasz Guzik. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-600 transition-colors p-1" href="#">
<iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors p-1" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
