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
      
<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10 blur-sm" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c01b7a18-4c69-46a5-b568-703ee1c983e8_1600w.jpg\')'}}></div>

<div className="bg-blue-600/5 border-b border-blue-200/40">
<div className="max-w-7xl text-sm font-light text-blue-900 font-geist text-center mr-auto ml-auto pt-2.5 pr-6 pb-2.5 pl-6">
      Újdonság: Az okos várólista automatikusan betölti az utolsó pillanatos lemondásokat. 
      <a className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 underline underline-offset-4 decoration-blue-300 hover:decoration-blue-500 transition-colors font-geist font-light" href="#features">
        Nézd meg
        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-indigo-200">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-indigo-900 text-white grid place-items-center shadow-sm ring-1 ring-indigo-900/10">
<span className="text-sm font-geist font-light">SB</span>
</div>
<span className="text-lg text-indigo-900 font-geist font-light">SalonBook</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-indigo-700 hover:text-indigo-900 transition-colors font-geist font-light" href="#features">Funkciók</a>
<a className="text-indigo-700 hover:text-indigo-900 transition-colors font-geist font-light" href="#how">Hogyan működik</a>
<a className="text-indigo-700 hover:text-indigo-900 transition-colors font-geist font-light" href="#pricing">Árazás</a>
<a className="text-indigo-700 hover:text-indigo-900 transition-colors font-geist font-light" href="#faq">GYIK</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="px-3.5 py-2 text-sm text-indigo-700 hover:text-indigo-900 hover:bg-indigo-100 rounded-md transition-colors font-geist font-light" href="#">Bejelentkezés</a>
<a className="px-4 py-2 text-sm rounded-md bg-indigo-900 text-white hover:bg-indigo-800 shadow-sm ring-1 ring-indigo-900/10 transition-all hover:-translate-y-0.5 font-geist font-light" href="#cta">Kezdd ingyen</a>
</div>
<button aria-controls="mobileMenu" aria-expanded="false" aria-label="Menü megnyitása" className="md:hidden p-2 rounded-md ring-1 ring-indigo-200 hover:ring-indigo-300 hover:bg-white transition" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5 text-indigo-900 menu-icon" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<svg className="lucide lucide-x w-5 h-5 text-indigo-900 hidden close-icon" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-indigo-200 bg-white/90 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-6 py-3">
<nav className="grid gap-1.5 text-sm">
<a className="block px-3 py-2 rounded-md text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50 transition font-geist font-light" href="#features">Funkciók</a>
<a className="block px-3 py-2 rounded-md text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50 transition font-geist font-light" href="#how">Hogyan működik</a>
<a className="block px-3 py-2 rounded-md text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50 transition font-geist font-light" href="#pricing">Árazás</a>
<a className="block px-3 py-2 rounded-md text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50 transition font-geist font-light" href="#faq">GYIK</a>
<div className="h-px bg-indigo-200 my-1.5"></div>
<a className="block px-3 py-2 rounded-md text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50 transition font-geist font-light" href="#">Bejelentkezés</a>
<a className="block text-center px-4 py-2 rounded-md bg-indigo-900 text-white hover:bg-indigo-800 shadow-sm ring-1 ring-indigo-900/10 transition font-geist font-light" href="#cta">Kezdd ingyen</a>
</nav>
</div>
</div>
</header>

<section className="relative overflow-hidden scroll-mt-24" id="cta">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-10 pt-16 pb-16 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-xs text-indigo-700 shadow-sm font-geist font-light">
<svg className="lucide lucide-stars w-4 h-4 text-indigo-600" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            A modern szalonok kedvence
          </div>
<h1 className="text-4xl md:text-5xl text-indigo-900 font-space-grotesk font-bold tracking-tighter">
            Erőfeszítés nélküli időpontfoglalás. Mindig teltház, nulla macera.
          </h1>
<p className="text-base md:text-lg text-indigo-700 font-geist font-light">
            Fogadj online foglalásokat, csökkentsd a no‑show-k számát okos emlékeztetőkkel, és kezeld a csapat beosztását egy letisztult irányítópulton.
          </p>
<div className="flex flex-col sm:flex-row gap-3 pt-2">
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-indigo-900 text-white hover:bg-indigo-800 shadow-sm ring-1 ring-indigo-900/10 transition-all hover:-translate-y-0.5 font-geist font-light" href="#pricing">
              Ingyenes próba indítása
              <svg className="lucide lucide-arrow-right w-4.5 h-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-white text-indigo-900 hover:bg-indigo-50 ring-1 ring-indigo-200 transition-all hover:-translate-y-0.5 font-geist font-light" href="#how">
<svg className="lucide lucide-play-circle w-5 h-5 text-indigo-600" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Demó megtekintése
            </a>
</div>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-2">
<img alt="Ügyfél 1" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;h=120&amp;fit=crop"/>
<img alt="Ügyfél 2" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=120&amp;h=120&amp;fit=crop"/>
<img alt="Ügyfél 3" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;h=120&amp;fit=crop"/>
</div>
<div className="text-sm text-indigo-700 font-geist font-light">
              1 200+ szalon 2,3M időpontot foglalt tavaly
            </div>
</div>
</div>

<div className="relative">
<div className="absolute -top-3 -right-3 z-10 h-5 w-5 rounded-full bg-indigo-400/90 ring-4 ring-white animate-pulse"></div>
<div className="rounded-xl bg-white ring-1 ring-indigo-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-indigo-200">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar-days w-5 h-5 text-indigo-600" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span className="text-sm font-geist font-light">Időpontfoglalás</span>
</div>
<span className="text-xs text-indigo-500 font-geist font-light">Kb. 30 mp</span>
</div>
<div className="grid md:grid-cols-2 gap-0">
<div className="p-4 md:p-5 border-r border-indigo-200">
<label className="block text-xs text-indigo-600 mb-1.5 font-geist font-light">Szolgáltatás</label>
<div className="relative">
<select className="w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-indigo-900 bg-white border-indigo-300 border rounded-md pt-2.5 pr-10 pb-2.5 pl-3">
<option className="font-geist font-light">Női hajvágás</option>
<option className="font-geist font-light">Férfi hajvágás</option>
<option className="font-geist font-light">Hajfestés és melír</option>
<option className="font-geist font-light">Fújás / Blowout</option>
<option className="font-geist font-light">Fonás</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<div className="">
<label className="block text-xs text-indigo-600 mb-1.5 font-geist font-light">Dátum</label>
<div className="relative">
<svg className="lucide lucide-calendar absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<input className="w-full rounded-md border border-indigo-300 bg-white pl-8 pr-3 py-2.5 text-sm text-indigo-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="date"/>
</div>
</div>
<div>
<label className="block text-xs text-indigo-600 mb-1.5 font-geist font-light">Idő</label>
<div className="relative">
<svg className="lucide lucide-clock absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<input className="w-full rounded-md border border-indigo-300 bg-white pl-8 pr-3 py-2.5 text-sm text-indigo-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="time"/>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<div className="">
<label className="block text-xs text-indigo-600 mb-1.5 font-geist font-light">Név</label>
<input className="w-full rounded-md border border-indigo-300 bg-white px-3 py-2.5 text-sm text-indigo-900 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Kiss Anna" type="text"/>
</div>
<div>
<label className="block text-xs text-indigo-600 mb-1.5 font-geist font-light">Telefon</label>
<input className="w-full rounded-md border border-indigo-300 bg-white px-3 py-2.5 text-sm text-indigo-900 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="+36 30 123 4567" type="tel"/>
</div>
</div>
<div className="mt-4">
<label className="inline-flex items-center gap-2 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-9 rounded-full bg-indigo-200 relative transition-colors peer-checked:bg-blue-600">
<span className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all peer-checked:left-4"></span>
</span>
<span className="text-xs text-indigo-700 group-hover:text-indigo-900 transition font-geist font-light">
                      Kérek SMS emlékeztetőt
                    </span>
</label>
</div>
<button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-md bg-indigo-900 text-white px-4 py-2.5 text-sm hover:bg-indigo-800 shadow-sm ring-1 ring-indigo-900/10 transition-all hover:-translate-y-0.5 font-geist font-light">
                  Foglalás megerősítése
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="p-4 md:p-5 bg-indigo-50">
<div className="flex items-center gap-2 text-sm text-indigo-700 mb-3 font-geist font-light">
<svg className="lucide lucide-sparkles w-4 h-4 text-emerald-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Mai népszerű időpontok
                </div>
<div className="grid grid-cols-2 gap-2">
<button className="px-3 py-2 rounded-md bg-white ring-1 ring-indigo-200 hover:ring-indigo-300 hover:bg-indigo-50 text-sm transition font-geist font-light">10:30</button>
<button className="px-3 py-2 rounded-md bg-white ring-1 ring-indigo-200 hover:ring-indigo-300 hover:bg-indigo-50 text-sm transition font-geist font-light">11:15</button>
<button className="px-3 py-2 rounded-md bg-white ring-1 ring-indigo-200 hover:ring-indigo-300 hover:bg-indigo-50 text-sm transition font-geist font-light">13:00</button>
<button className="px-3 py-2 rounded-md bg-white ring-1 ring-indigo-200 hover:ring-indigo-300 hover:bg-indigo-50 text-sm transition font-geist font-light">15:45</button>
<button className="px-3 py-2 rounded-md bg-white ring-1 ring-indigo-200 hover:ring-indigo-300 hover:bg-indigo-50 text-sm transition font-geist font-light">17:30</button>
<button className="px-3 py-2 rounded-md bg-white ring-1 ring-indigo-200 hover:ring-indigo-300 hover:bg-indigo-50 text-sm transition font-geist font-light">18:15</button>
</div>
<div className="mt-5 rounded-lg bg-white p-3 ring-1 ring-indigo-200">
<div className="flex items-center justify-between">
<div className="text-sm">
<div className="font-geist font-light">Női hajvágás</div>
<div className="text-xs text-indigo-600 font-geist font-light">45 perc Taylorral</div>
</div>
<div className="text-sm font-geist font-light">15 900 Ft</div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-indigo-600 font-geist font-light">
<svg className="lucide lucide-shield-check w-4 h-4 text-emerald-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    Ingyenes lemondás 24 órával korábban
                  </div>
</div>
<div className="mt-4 text-xs text-indigo-600 font-geist font-light">
                  Továbbhaladással elfogadod a 
                  <a className="text-indigo-900 underline underline-offset-4 font-geist font-light" href="#">Feltételeket</a>.
                </div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-10 border-t border-indigo-200">
<div className="mx-auto max-w-7xl px-6">
<p className="text-center text-xs uppercase text-indigo-500 font-geist font-light">Előremutató szalonok választása</p>
<div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6 opacity-80">
<div className="flex items-center justify-center rounded-md ring-1 ring-indigo-200 bg-white py-3">
<span className="text-indigo-800 font-geist font-light">AURA</span>
</div>
<div className="flex items-center justify-center rounded-md ring-1 ring-indigo-200 bg-white py-3">
<span className="text-indigo-800 font-geist font-light">CHRM</span>
</div>
<div className="flex items-center justify-center rounded-md ring-1 ring-indigo-200 bg-white py-3">
<span className="text-indigo-800 font-geist font-light">NOVA</span>
</div>
<div className="flex items-center justify-center rounded-md ring-1 ring-indigo-200 bg-white py-3">
<span className="text-indigo-800 font-geist font-light">VELVET</span>
</div>
<div className="flex items-center justify-center rounded-md ring-1 ring-indigo-200 bg-white py-3">
<span className="text-indigo-800 font-geist font-light">LUXE</span>
</div>
</div>
</div>
</section>

<section className="py-20 scroll-mt-24" id="features">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tighter">Minden, ami a teltházas szalonhoz kell</h2>
<p className="mt-3 text-indigo-700 font-geist font-light">
          Okos ütemezés automatikus emlékeztetőkkel, fizetéssel és csapatkezeléssel—így te a szolgáltatásra koncentrálhatsz.
        </p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group rounded-xl bg-white p-5 ring-1 ring-indigo-200 hover:ring-indigo-300 hover:-translate-y-0.5 transition shadow-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-wand-2 w-5 h-5 text-indigo-600" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<h3 className="font-geist font-light">Okos ütemezés</h3>
</div>
<p className="mt-2 text-sm text-indigo-700 font-geist font-light">
            Valós idejű elérhetőség, pufferidők és túlterhelés elleni védelem.
          </p>
<div className="mt-3 overflow-hidden rounded-lg ring-1 ring-indigo-200">
<img alt="Funkció helyőrző kép" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?q=80&amp;w=600&amp;h=400&amp;fit=crop"/>
</div>
</div>
<div className="group rounded-xl bg-white p-5 ring-1 ring-indigo-200 hover:ring-indigo-300 hover:-translate-y-0.5 transition shadow-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-bell-ring w-5 h-5 text-indigo-600" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg>
<h3 className="font-geist font-light">Automatikus emlékeztetők</h3>
</div>
<p className="mt-2 text-sm text-indigo-700 font-geist font-light">
            E‑mail/SMS értesítések akár 38%-kal csökkentik a no‑show-kat.
          </p>
<div className="mt-3 overflow-hidden rounded-lg ring-1 ring-indigo-200">
<img alt="Funkció helyőrző kép" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
<div className="group rounded-xl bg-white p-5 ring-1 ring-indigo-200 hover:ring-indigo-300 hover:-translate-y-0.5 transition shadow-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-wallet w-5 h-5 text-indigo-600" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<h3 className="font-geist font-light">Fizetés és előleg</h3>
</div>
<p className="mt-2 text-sm text-indigo-700 font-geist font-light">
            Biztonságos fizetés, borravaló és előleg—az időd védelméért.
          </p>
<div className="mt-3 overflow-hidden rounded-lg ring-1 ring-indigo-200">
<img alt="Funkció helyőrző kép" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&amp;w=600&amp;h=400&amp;fit=crop"/>
</div>
</div>
<div className="group rounded-xl bg-white p-5 ring-1 ring-indigo-200 hover:ring-indigo-300 hover:-translate-y-0.5 transition shadow-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-5 h-5 text-indigo-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="font-geist font-light">Csapat és szobák</h3>
</div>
<p className="mt-2 text-sm text-indigo-700 font-geist font-light">
            Szolgáltatások dolgozóhoz rendelése, szobakezelés, naptárszinkron.
          </p>
<div className="mt-3 overflow-hidden rounded-lg ring-1 ring-indigo-200">
<img alt="Funkció helyőrző kép" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&amp;w=600&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">
<div className="rounded-xl bg-white p-6 ring-1 ring-indigo-200 shadow-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-mail-check w-5 h-5 text-indigo-600" data-lucide="mail-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg>
<h3 className="font-geist font-light">No‑show védelem</h3>
</div>
<p className="mt-2 text-sm text-indigo-700 font-geist font-light">
            Opcionális előrefizetés, kártya eltárolása vagy késői lemondási díj. Egyértelmű, korrekt szabályok.
          </p>
<div className="mt-4 rounded-lg bg-indigo-50 p-4 ring-1 ring-indigo-200">
<div className="text-xs text-indigo-600 mb-2 font-geist font-light">Emlékeztető előnézet</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-message-square w-5 h-5 text-emerald-600" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<p className="text-sm text-indigo-800 font-geist font-light">
                Szia Anna! Emlékeztető: Női hajvágás Taylorral ma 13:00‑kor. Válaszolj C‑vel a megerősítéshez.
              </p>
</div>
</div>
</div>
<div className="rounded-xl bg-white p-6 ring-1 ring-indigo-200 shadow-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-share-2 w-5 h-5 text-indigo-600" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<h3 className="font-geist font-light">Beágyazás és linkek</h3>
</div>
<p className="mt-2 text-sm text-indigo-700 font-geist font-light">
            Helyezz el foglalógombot az Instagramon, a Google‑n vagy a weboldaladon percek alatt.
          </p>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-md bg-indigo-50 p-3 text-center ring-1 ring-indigo-200 text-xs font-geist font-light">Weboldal</div>
<div className="rounded-md bg-indigo-50 p-3 text-center ring-1 ring-indigo-200 text-xs font-geist font-light">Instagram</div>
<div className="rounded-md bg-indigo-50 p-3 text-center ring-1 ring-indigo-200 text-xs font-geist font-light">Google</div>
</div>
</div>
<div className="rounded-xl bg-white p-6 ring-1 ring-indigo-200 shadow-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-indigo-600" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="font-geist font-light">Elemzések</h3>
</div>
<p className="mt-2 text-sm text-indigo-700 font-geist font-light">
            Foglalások, top szolgáltatások, bevétel és visszatérés—egy pillantásra.
          </p>
<div className="mt-4">
<div className="rounded-lg bg-indigo-50 p-3 ring-1 ring-indigo-200">
<div className="flex items-center justify-between text-xs text-indigo-600 mb-1.5">
<span className="font-geist font-light">Havi foglalások</span>
<span className="inline-flex items-center gap-1 text-indigo-600 font-geist font-light">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +18%
                </span>
</div>
<div className="h-40 rounded-md bg-white ring-1 ring-indigo-200 p-2">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full relative">
<div className="absolute inset-0">
<canvas className="h-full w-full" height="288" id="miniBookings" style={{display: 'block', boxSizing: 'border-box', height: '144px', width: '253px'}} width="507"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>
</div>
</div>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></section>

<section className="py-20 border-t border-indigo-200 bg-white/60 scroll-mt-24" id="how">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tighter text-indigo-900">Hogyan működik</h2>
<p className="mt-3 text-indigo-700 font-geist font-light">Három lépés és készen állsz az online foglalások fogadására.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-xl bg-white p-6 ring-1 ring-indigo-200 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-indigo-100 text-indigo-700 grid place-items-center ring-1 ring-indigo-200">1</div>
<h3 className="font-geist font-light text-indigo-900">Szolgáltatások és csapat</h3>
</div>
<p className="mt-2 text-sm text-indigo-700 font-geist font-light">Add meg a szolgáltatásokat, áraikat és a munkatársakat. Állíts be elérhetőséget, pufferidőt, szobákat.</p>
</div>
<div className="rounded-xl bg-white p-6 ring-1 ring-indigo-200 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-indigo-100 text-indigo-700 grid place-items-center ring-1 ring-indigo-200">2</div>
<h3 className="font-geist font-light text-indigo-900">Foglalási oldal</h3>
</div>
<p className="mt-2 text-sm text-indigo-700 font-geist font-light">Kapcsold be a foglalási oldalt és oszd meg a linket Instagram bio-ban, Google profilban vagy a weboldaladon.</p>
</div>
<div className="rounded-xl bg-white p-6 ring-1 ring-indigo-200 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-indigo-100 text-indigo-700 grid place-items-center ring-1 ring-indigo-200">3</div>
<h3 className="font-geist font-light text-indigo-900">Automatikus emlékeztetők</h3>
</div>
<p className="mt-2 text-sm text-indigo-700 font-geist font-light">E‑mail és SMS értesítések gondoskodnak róla, hogy ügyfeleid időben érkezzenek.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-white to-indigo-50 border-t border-indigo-200 scroll-mt-24" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-space-grotesk font-bold tracking-tighter text-indigo-900">Egyszerű, magyar HUF árak</h2>
<p className="mt-3 text-indigo-700 font-geist font-light">Válaszd ki a csomagot, ami passzol a szalonodhoz. Éves előfizetéssel kedvezmény.</p>
</div>

<div className="mt-6 flex items-center gap-4">
<div className="inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white px-3 py-2 shadow-sm">
<span className="text-sm text-indigo-700 font-geist font-light">Havi</span>
<label className="relative inline-flex items-center cursor-pointer">
<input aria-label="Váltás havi és éves számlázás között" className="sr-only" id="billingToggle" type="checkbox"/>
<span className="w-11 h-6 bg-indigo-200 rounded-full transition-colors peer-checked:bg-indigo-600 relative">
<span className="absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full shadow transition-all peer-checked:left-5"></span>
</span>
</label>
<span className="text-sm text-indigo-700 font-geist font-light">Éves</span>
</div>
<span className="text-xs text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200 px-2 py-1 rounded-full font-geist font-light">Éves: 2 hónap ajándék</span>
</div>

<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative rounded-2xl bg-white ring-1 ring-indigo-200 shadow-sm p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg text-indigo-900 font-geist font-light">Ingyenes</h3>
<span className="text-xs text-indigo-600 font-geist font-light ring-1 ring-indigo-200 px-2 py-1 rounded-full">Kezdőknek</span>
</div>
<div className="mt-4">
<div className="flex items-end gap-1">
<span aria-live="polite" className="text-3xl font-space-grotesk font-bold text-indigo-900">
                0
              </span>
<span className="text-sm text-indigo-700 font-geist font-light">Ft / hó</span>
</div>
<div className="text-xs text-indigo-600 font-geist font-light mt-1">Bankkártya nélkül indulhatsz</div>
</div>
<ul className="mt-5 space-y-2 text-sm text-indigo-800 font-geist font-light">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> 1 munkatárs</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> 50 foglalás / hó</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Online foglalási oldal</li>
<li className="flex items-center gap-2 text-indigo-500"><span className="h-1.5 w-1.5 rounded-full bg-indigo-300"></span> E-mail emlékeztetők</li>
<li className="flex items-center gap-2 text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-slate-200"></span> SMS emlékeztetők</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-indigo-900 text-white hover:bg-indigo-800 shadow-sm ring-1 ring-indigo-900/10 transition-all hover:-translate-y-0.5 text-sm font-geist font-light" href="#cta">
            Kezdd ingyen
          </a>
</div>

<div className="relative rounded-2xl bg-white ring-2 ring-indigo-300 shadow-md p-6 flex flex-col">
<div className="absolute -top-3 right-4">
<span className="text-[11px] uppercase tracking-wide bg-amber-100 text-amber-700 ring-1 ring-amber-200 px-2 py-1 rounded-full font-geist font-light">Legnépszerűbb</span>
</div>
<div className="flex items-center justify-between">
<h3 className="text-lg text-indigo-900 font-geist font-light">Standard</h3>
<span className="text-xs text-indigo-600 font-geist font-light ring-1 ring-indigo-200 px-2 py-1 rounded-full">Növekvő csapatnak</span>
</div>
<div className="mt-4">
<div className="flex items-end gap-1">
<span aria-live="polite" className="price-monthly text-3xl font-space-grotesk font-bold text-indigo-900">5 900</span>
<span aria-live="polite" className="price-yearly hidden text-3xl font-space-grotesk font-bold text-indigo-900">4 900</span>
<span className="text-sm text-indigo-700 font-geist font-light">Ft / hó</span>
</div>
<div className="text-xs text-indigo-600 font-geist font-light mt-1">
<span className="billed-monthly">Havi számlázás</span>
<span className="billed-yearly hidden">Éves számlázás: 58 800 Ft/év</span>
</div>
</div>
<ul className="mt-5 space-y-2 text-sm text-indigo-800 font-geist font-light">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> 3 munkatárs</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Korlátlan foglalás</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> SMS és e‑mail emlékeztetők</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Online fizetés és előleg</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Naptárszinkron (Google/Apple)</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-indigo-900 text-white hover:bg-indigo-800 shadow-sm ring-1 ring-indigo-900/10 transition-all hover:-translate-y-0.5 text-sm font-geist font-light" href="#cta">
            Indítás
          </a>
</div>

<div className="relative rounded-2xl bg-white ring-1 ring-indigo-200 shadow-sm p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg text-indigo-900 font-geist font-light">Pro</h3>
<span className="text-xs text-indigo-600 font-geist font-light ring-1 ring-indigo-200 px-2 py-1 rounded-full">Haladó csapatnak</span>
</div>
<div className="mt-4">
<div className="flex items-end gap-1">
<span aria-live="polite" className="price-monthly text-3xl font-space-grotesk font-bold text-indigo-900">11 900</span>
<span aria-live="polite" className="price-yearly hidden text-3xl font-space-grotesk font-bold text-indigo-900">9 900</span>
<span className="text-sm text-indigo-700 font-geist font-light">Ft / hó</span>
</div>
<div className="text-xs text-indigo-600 font-geist font-light mt-1">
<span className="billed-monthly">Havi számlázás</span>
<span className="billed-yearly hidden">Éves számlázás: 118 800 Ft/év</span>
</div>
</div>
<ul className="mt-5 space-y-2 text-sm text-indigo-800 font-geist font-light">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Korlátlan munkatárs</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Erőforrások (szobák, eszközök) kezelése</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Fejlett jelentések és export</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Elsőbbségi támogatás</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-indigo-900 text-white hover:bg-indigo-800 shadow-sm ring-1 ring-indigo-900/10 transition-all hover:-translate-y-0.5 text-sm font-geist font-light" href="#cta">
            Választom
          </a>
</div>
</div>
<p className="mt-6 text-xs text-indigo-600 font-geist font-light">Az árak nettó díjak,</p></div></section>
    </>
  );
}
