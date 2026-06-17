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
      

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#08090D]/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-900 text-amber-100 shadow-lg shadow-violet-900/20">
<svg className="lucide lucide-hand h-5 w-5" data-lucide="hand" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white font-serif italic">Chiromaster</span>
</div>
<a className="hidden sm:flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-xs font-medium text-amber-200 transition hover:bg-amber-500/20 hover:border-amber-500/30" href="#download">
<svg className="lucide lucide-smartphone h-3.5 w-3.5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                Pobierz App
            </a>
</div>
</nav>
<main className="relative overflow-hidden pt-24 pb-20">

<section className="relative z-10 mx-auto max-w-5xl px-6 pt-10 text-center">

<div className="absolute -top-20 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-900/20 blur-[100px] pointer-events-none"></div>
<div className="absolute top-20 right-20 h-[200px] w-[200px] rounded-full bg-amber-500/5 blur-[80px] pointer-events-none"></div>
<div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-violet-200 mb-6">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
</span>
                AI Palm Reader v2.0
            </div>
<h1 className="mx-auto max-w-4xl text-5xl font-medium leading-[1.1] tracking-tight text-white md:text-7xl font-serif">
                Poznaj prawdę zapisaną <br/>
<span className="bg-gradient-to-r from-amber-200 via-white to-violet-300 bg-clip-text text-transparent italic pr-2">w Twojej dłoni.</span> W sekundę.
            </h1>
<p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-slate-400">
                Rozkręć każdą imprezę dzięki analizie AI opartej na klasycznej chiromancji. Zrób zdjęcie i odkryj tajemnice.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4">
<button className="group relative flex items-center gap-3 overflow-hidden rounded-lg bg-white px-8 py-4 transition-all hover:bg-slate-200 hover:scale-105 gold-glow">
<div className="relative z-10 flex items-center gap-3">
<svg className="h-6 w-6 text-black fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"></path></svg>
<div className="text-left">
<p className="text-[10px] font-medium uppercase leading-none text-slate-500">Pobierz w</p>
<p className="text-base font-bold leading-none text-black">Google Play</p>
</div>
</div>
</button>
</div>
</section>

<section className="mt-12 border-y border-white/5 bg-white/[0.02]">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 py-6 md:flex-row md:gap-8">
<div className="flex -space-x-3">
<img alt="" className="h-8 w-8 rounded-full border-2 border-[#08090D]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<img alt="" className="h-8 w-8 rounded-full border-2 border-[#08090D]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<img alt="" className="h-8 w-8 rounded-full border-2 border-[#08090D]" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#08090D] bg-slate-800 text-[10px] font-medium text-white">+47</div>
</div>
<div className="flex flex-col items-center md:items-start">
<div className="flex items-center gap-1 text-amber-400">
<svg className="h-4 w-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="h-4 w-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="h-4 w-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="h-4 w-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="h-4 w-4" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="text-sm font-medium text-slate-300">Już <span className="text-white">50 osób</span> odkryło swoją przyszłość z nami</p>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-6 py-24">
<h2 className="mb-16 text-center text-3xl text-white font-serif italic">Jak to działa?</h2>
<div className="grid grid-cols-1 gap-10 md:grid-cols-3">

<div className="group flex flex-col items-center text-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-transparent ring-1 ring-amber-500/40 transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
<svg className="lucide lucide-camera h-8 w-8 text-amber-200" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<h3 className="mb-2 text-xl font-medium text-white">1. Zrób zdjęcie</h3>
<p className="text-sm leading-relaxed text-slate-500">Wystarczy wyraźne zdjęcie wewnętrznej strony dłoni.</p>
</div>

<div className="group flex flex-col items-center text-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-transparent ring-1 ring-violet-500/40 transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]">
<svg className="lucide lucide-sparkles h-8 w-8 text-violet-200" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="mb-2 text-xl font-medium text-white">2. Czekaj sekundę</h3>
<p className="text-sm leading-relaxed text-slate-500">Nasze AI skanuje linie i interpretuje tysiące punktów danych.</p>
</div>

<div className="group flex flex-col items-center text-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-transparent ring-1 ring-indigo-500/40 transition group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
<svg className="lucide lucide-message-circle h-8 w-8 text-indigo-200" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<h3 className="mb-2 text-xl font-medium text-white">3. Czytaj i prowokuj</h3>
<p className="text-sm leading-relaxed text-slate-500">Otrzymaj wynik, który stanie się tematem rozmowy na cały wieczór.</p>
</div>
</div>
</section>

<section className="relative mx-auto max-w-6xl px-6 py-20">
<div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
<div>
<span className="mb-4 inline-block font-serif text-2xl italic text-amber-200">Idealna na każdą okazję</span>
<h2 className="mb-6 text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
                        Twoja dłoń mówi więcej niż myślisz.
                    </h2>
<p className="text-lg leading-relaxed text-slate-400">
                        Szukasz ice-breakera? Chcesz zaskoczyć znajomych? Nasze opisy są krótkie, celne i odrobinę tajemnicze. Idealne, by zacząć dyskusję o przeznaczeniu, miłości i karierze.
                    </p>
<div className="mt-8 flex gap-4">
<div className="rounded-lg border border-white/5 bg-white/5 px-4 py-3">
<span className="block text-xl font-bold text-white">Domówka</span>
<span className="text-xs text-slate-500">Rozkręć imprezę</span>
</div>
<div className="rounded-lg border border-white/5 bg-white/5 px-4 py-3">
<span className="block text-xl font-bold text-white">Randka</span>
<span className="text-xs text-slate-500">Sprawdź dopasowanie</span>
</div>
</div>
</div>

<div className="flex relative justify-center">

<div className="absolute inset-0 bg-violet-600/20 blur-[60px] transform rotate-12"></div>
<div className="phone-frame relative h-[500px] w-[280px] overflow-hidden rounded-[36px] bg-[#0B0C15] border border-slate-700 z-10">

<div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-[#08090D]"></div>

<div className="flex flex-col bg-gradient-to-b from-[#1a1b26] to-[#0B0C15] h-full pt-12 pr-4 pb-4 pl-4">

<div className="mb-4 flex items-center justify-between border-b border-white/5 pb-2">
<span className="text-xs font-semibold text-white">Wynik Analizy</span>
<span className="text-[10px] text-slate-500">Teraz</span>
</div>

<div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-800">
<img className="h-full w-full object-cover opacity-60 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d6f3aad-afc5-4ad7-9fea-352a7aa9f84b_800w.webp"/>
<div className="bg-gradient-to-t from-[#1a1b26] to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute left-[40%] top-[45%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)] animate-pulse"></div>
<div className="absolute left-[45%] top-[45%] rounded bg-black/70 px-2 py-1 text-[8px] text-amber-100 backdrop-blur-sm">Linia Serca</div>
</div>

<div className="rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md">
<div className="mb-1 flex items-center gap-2">
<svg className="lucide lucide-sparkles h-3 w-3 text-amber-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs font-bold text-amber-200">Mistyczna prognoza</span>
</div>
<p className="text-xs leading-relaxed text-slate-300">
                                    "Linia serca sugeruje nadchodzącą niespodziankę w relacjach. Ktoś z przeszłości może zapukać do Twoich drzwi..."
                                </p>
</div>

<div className="mt-auto">
<button className="w-full rounded-full bg-violet-600 py-2 text-[10px] font-bold text-white">Udostępnij</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-6 py-20">
<div className="glass-panel overflow-hidden rounded-3xl border border-white/10 bg-[#0B0C15] p-1">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="relative h-64 overflow-hidden rounded-t-2xl bg-slate-900 md:h-auto md:rounded-l-2xl md:rounded-tr-none">

<img alt="Hand Scan" className="h-full w-full object-cover opacity-50 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="scan-line absolute left-0 right-0 h-0.5 bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,1)]"></div>

<div className="absolute left-10 top-1/4 flex items-center gap-1 rounded bg-black/60 px-2 py-1 text-[10px] text-violet-300 backdrop-blur">
<span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse"></span> Mount of Venus
                        </div>
<div className="absolute right-12 bottom-1/3 flex items-center gap-1 rounded bg-black/60 px-2 py-1 text-[10px] text-emerald-300 backdrop-blur">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Life Line
                        </div>
</div>
<div className="flex flex-col justify-center p-10">
<h2 className="mb-4 text-3xl font-medium text-white font-serif italic">Magia wsparta technologią</h2>
<p className="mb-6 text-sm leading-relaxed text-slate-400">
                            Wykorzystujemy zaawansowane skanowanie obrazu (Computer Vision), by interpretować tysiąclecia wiedzy o chiromancji w mgnieniu oka. To nie generator losowy – to analiza topografii Twojej dłoni.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">AI Analysis</span>
<span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">Biometria</span>
<span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-200 font-serif italic">Wiedza Starżytna</span>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-4xl px-6 py-20 text-center">
<h2 className="mb-12 text-2xl font-medium text-white">Co mówią użytkownicy?</h2>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">

<div className="flex flex-col items-start rounded-2xl rounded-bl-none border border-white/5 bg-white/[0.03] p-6 text-left shadow-xl transition hover:bg-white/[0.05]">
<div className="mb-4 flex gap-1 text-amber-400">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mb-4 text-sm font-light text-slate-300">"Wrzuciliśmy to na domówce – wszyscy chcieli sprawdzić swoje ręce! Super zabawa, a opisy zaskakująco trafne."</p>
<div className="mt-auto flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-800 text-xs font-bold text-white">M</div>
<div>
<span className="block text-xs font-bold text-white">Marek</span>
<span className="text-[10px] text-slate-500">Użytkownik Androida</span>
</div>
</div>
</div>

<div className="flex flex-col items-start rounded-2xl rounded-br-none border border-white/5 bg-white/[0.03] p-6 text-left shadow-xl transition hover:bg-white/[0.05]">
<div className="mb-4 flex gap-1 text-amber-400">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mb-4 text-sm font-light text-slate-300">"Sceptycznie podeszłam do tego, ale linia życia została odczytana idealnie. Aplikacja wygląda świetnie."</p>
<div className="mt-auto flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold text-white">K</div>
<div>
<span className="block text-xs font-bold text-white">Kasia</span>
<span className="text-[10px] text-slate-500">Studentka</span>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto mt-10 max-w-5xl px-6 text-center" id="download">
<div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a1b26] to-[#08090D] px-6 py-20 shadow-2xl ring-1 ring-inset ring-white/5">
<h2 className="mx-auto max-w-2xl text-4xl font-medium tracking-tight text-white font-serif">
                    Twoje przeznaczenie jest w Twoich rękach. <span className="text-amber-200 italic">Dosłownie.</span>
</h2>
<div className="mt-10">
<button className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg bg-white px-10 py-4 transition-all hover:scale-105 hover:bg-slate-200 gold-glow">
<svg className="h-8 w-8 text-black fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"></path></svg>
<div className="text-left">
<p className="text-[11px] font-bold uppercase leading-none text-slate-500 tracking-wide">Pobierz teraz w</p>
<p className="text-xl font-bold leading-none text-black">Google Play</p>
</div>
</button>
<p className="mt-6 text-xs text-slate-500">Dostępne na Android • 100% Darmowa analiza wstępna</p>
</div>
</div>
<footer className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-slate-600">
<p>© 2024 Chiromaster App. Wszelkie prawa zastrzeżone. Chiromancja służy celom rozrywkowym.</p>
</footer>
</section>
</main>


    </>
  );
}
