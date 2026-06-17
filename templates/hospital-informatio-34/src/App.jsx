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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:bg-white focus:text-slate-900 rounded-md px-4 py-2" href="#main-content">
    Przejdź do treści głównej
  </a>

<div className="flex-1 flex flex-col">

<header className="relative min-h-screen flex flex-col">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50"></div>
<div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-emerald-100 opacity-40 blur-3xl"></div>
<div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-sky-100 opacity-40 blur-3xl"></div>
<div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.14)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.15)_0,_transparent_55%)]"></div>
</div>
</div>

<div className="relative z-10 border-b border-slate-200/80">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">

<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-600/15 bg-emerald-600/5 shadow-sm">
<span aria-hidden="true" className="text-emerald-700 font-semibold tracking-tight leading-none text-lg">SP</span>
</div>
<div className="flex flex-col">
<span className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
                SPZOZ Parczew
              </span>
<span className="text-sm sm:text-base text-slate-600">
                Samodzielny Publiczny Zakład Opieki Zdrowotnej
              </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm sm:text-base">
<a className="text-slate-700 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 rounded-md px-1 py-1" href="#dla-pacjentow">
              Dla pacjentów
            </a>
<a className="text-slate-700 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 rounded-md px-1 py-1" href="#aktualnosci">
              Aktualności
            </a>
<a className="text-slate-700 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 rounded-md px-1 py-1" href="#poradnie">
              Poradnie i usługi
            </a>
<a className="inline-flex items-center gap-2 rounded-full border border-emerald-600/70 bg-emerald-600 text-white px-4 py-2 text-sm sm:text-base font-medium tracking-tight shadow-sm hover:bg-emerald-700 hover:border-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500" href="#kontakt">
<span>Kontakt</span>
</a>
</nav>
</div>
</div>

<div className="relative z-10 flex-1 flex items-center">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 w-full">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<section aria-labelledby="hero-heading" className="space-y-6 sm:space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 text-slate-700 px-3 py-1 text-xs sm:text-sm shadow-sm backdrop-blur">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span>Całodobowa opieka medyczna • Szpital Powiatowy w Parczewie</span>
</div>
<div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900" id="hero-heading">
                  Informacje o szpitalu SPZOZ Parczew dostępne w zasięgu kilku pytań.
                </h1>
<p className="mt-4 text-lg sm:text-xl text-slate-700 leading-relaxed">
                  Skorzystaj z asystenta strony, aby szybko znaleźć godziny otwarcia, informacje o poradniach, usługach, lekarzach oraz możliwościach kontaktu. Przyjazny, prosty i dostępny 24/7.
                </p>
</div>
<dl aria-label="Najważniejsze informacje" className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md">
<div className="flex items-start gap-3">
<div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-700 border border-emerald-600/20">
<svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12A10 10 0 1 1 12 2"></path>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<div>
<dt className="text-sm sm:text-base font-medium text-slate-900">Izba przyjęć 24/7</dt>
<dd className="text-sm sm:text-base text-slate-600">Nagłe przypadki i pilne interwencje.</dd>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-700 border border-emerald-600/20">
<svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 14s1-1 4-1 5 2 8 2 4-1 4-1V5s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
<line x1="3" x2="3" y1="20" y2="14"></line>
</svg>
</div>
<div>
<dt className="text-sm sm:text-base font-medium text-slate-900">Nowoczesne poradnie</dt>
<dd className="text-sm sm:text-base text-slate-600">Chirurgia, ortopedia, gastroenterologia i inne.</dd>
</div>
</div>
</dl>
</section>

<section aria-label="Asystent strony SPZOZ Parczew" className="relative">

<div className="relative">
<div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10 rounded-3xl blur-md"></div>
<div className="relative rounded-3xl border border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-sm flex flex-col max-h-[80vh] min-h-[360px] sm:min-h-[420px]">

<div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200/80">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Pielęgniarka reprezentująca asystenta strony szpitala" className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border border-emerald-500/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span aria-hidden="true" className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border border-white bg-emerald-500"></span>
</div>
<div className="flex flex-col">
<span className="text-sm sm:text-base font-medium text-slate-900 tracking-tight">Asystent SPZOZ Parczew</span>
<span className="text-xs sm:text-sm text-slate-600">Odpowiada na pytania o szpital</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
<span className="hidden sm:inline">Status:</span>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Online</span>
</span>
</div>
</div>

<div aria-live="polite" className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-5 space-y-4">

<div className="flex items-start gap-2 sm:gap-3">
<div aria-hidden="true" className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-medium">
                        SP
                      </div>
<div className="max-w-full">
<div className="inline-flex rounded-2xl rounded-tl-sm bg-slate-100 px-3 sm:px-4 py-2 sm:py-3 shadow-sm">
<p className="text-sm sm:text-base text-slate-900 leading-relaxed">
                            Witaj! Jestem asystentem strony SPZOZ Parczew. Zapytaj mnie o godziny otwarcia, usługi, lekarzy lub inne informacje o szpitalu.
                          </p>
</div>
<p className="mt-1 text-xs sm:text-xs text-slate-500">Odpowiedź automatyczna</p>
</div>
</div>

<div className="flex flex-col items-end gap-1">
<div className="max-w-full">
<div className="inline-flex rounded-2xl rounded-tr-sm bg-emerald-600 text-white px-3 sm:px-4 py-2 sm:py-3 shadow-sm">
<p className="text-sm sm:text-base leading-relaxed">
                            Jakie są godziny otwarcia?
                          </p>
</div>
</div>
<p className="text-xs sm:text-xs text-slate-500">Przykładowe pytanie pacjenta</p>
</div>

<div className="flex items-start gap-2 sm:gap-3">
<div aria-hidden="true" className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-medium">
                        SP
                      </div>
<div className="max-w-full space-y-2">
<div className="inline-flex rounded-2xl rounded-tl-sm bg-slate-100 px-3 sm:px-4 py-2 sm:py-3 shadow-sm">
<div className="text-sm sm:text-base text-slate-900 leading-relaxed space-y-1.5">
<p><span className="font-medium">Rejestracja poradni specjalistycznych:</span> poniedziałek–piątek, 7:00–18:00.</p>
<p><span className="font-medium">Laboratorium:</span> pobrania materiału 7:00–10:00.</p>
<p><span className="font-medium">Izba przyjęć:</span> czynna całodobowo (24/7).</p>
<p className="text-xs sm:text-sm text-slate-600">
                              Uwaga: godziny mogą ulec zmianie w święta – przed wizytą prosimy o kontakt telefoniczny.
                            </p>
</div>
</div>
<p className="text-xs sm:text-xs text-slate-500">Informacja o godzinach otwarcia</p>
</div>
</div>

<div className="flex flex-col items-end gap-1">
<div className="max-w-full">
<div className="inline-flex rounded-2xl rounded-tr-sm bg-emerald-600 text-white px-3 sm:px-4 py-2 sm:py-3 shadow-sm">
<p className="text-sm sm:text-base leading-relaxed">
                            Czy mam grypę?
                          </p>
</div>
</div>
<p className="text-xs sm:text-xs text-slate-500">Przykładowe pytanie medyczne</p>
</div>

<div className="flex items-start gap-2 sm:gap-3">
<div aria-hidden="true" className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-medium">
                        SP
                      </div>
<div className="max-w-full">
<div className="inline-flex rounded-2xl rounded-tl-sm bg-rose-50 px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-rose-100">
<div className="text-sm sm:text-base text-rose-900 leading-relaxed space-y-1.5">
<p>
                              Przepraszam, nie mogę udzielać porad medycznych. Proszę skonsultować się z lekarzem w naszym szpitalu lub zadzwonić pod numer izby przyjęć:
                              <span className="font-medium">+48 83 355 12 00</span>.
                            </p>
<p className="text-xs sm:text-sm text-rose-700">
                              W przypadku nagłego pogorszenia stanu zdrowia prosimy o kontakt z numerem alarmowym <span className="font-semibold">112</span>.
                            </p>
</div>
</div>
<p className="mt-1 text-xs sm:text-xs text-slate-500">Ograniczenie odpowiedzi medycznych</p>
</div>
</div>

<div className="flex items-start gap-2 sm:gap-3 opacity-80">
<div aria-hidden="true" className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-slate-500 text-xs sm:text-sm font-medium">
                        SP
                      </div>
<div className="inline-flex items-center gap-1 rounded-2xl rounded-tl-sm bg-slate-100 px-3 sm:px-4 py-2 sm:py-3 shadow-inner border border-dashed border-slate-200">
<span className="sr-only">Asystent wczytuje odpowiedź</span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce [animation-duration:1s]"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce [animation-duration:1s] [animation-delay:0.15s]"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-duration:1s] [animation-delay:0.3s]"></span>
</div>
</div>

<div className="flex items-start gap-2 sm:gap-3">
<div aria-hidden="true" className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-white text-xs sm:text-sm font-medium">
                        !
                      </div>
<div className="inline-flex rounded-2xl rounded-tl-sm bg-amber-50 px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-amber-100">
<p className="text-sm sm:text-base text-amber-900 leading-relaxed">
                          Wystąpił błąd przy pobieraniu informacji. Spróbuj ponownie za chwilę lub skontaktuj się z rejestracją telefonicznie.
                        </p>
</div>
</div>
</div>

<form aria-label="Pole do zadawania pytań" className="border-t border-slate-200/80 bg-slate-50/90 px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-2">
<label className="sr-only" htmlFor="chat-input">Zadaj pytanie o szpital</label>
<div className="flex items-end gap-2 sm:gap-3">
<div className="flex-1">
<div className="relative">
<input autocomplete="off" className="w-full rounded-2xl border border-slate-300 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-slate-900 placeholder-slate-400 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50" id="chat-input" name="pytanie" placeholder="Zadaj pytanie o szpital..." type="text"/>
</div>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base font-medium tracking-tight shadow-sm border border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 min-w-[44px] min-h-[44px]" type="submit">
<span className="hidden sm:inline">Wyślij</span>
<span className="sr-only sm:not-sr-only sm:sr-only">Wyślij wiadomość</span>
<svg aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="22" x2="11" y1="2" y2="13"></line>
<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>
</button>
</div>
<p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      Nie udzielam porad medycznych. W sprawach zdrowotnych skontaktuj się z lekarzem.
                    </p>
</form>
</div>
</div>
</section>
</div>
</div>
</div>

<div className="relative z-10 flex justify-center pb-6 sm:pb-8">
<div className="inline-flex flex-col items-center gap-2 text-xs sm:text-sm text-slate-500">
<span>Przewiń w dół, aby zobaczyć informacje dla pacjentów</span>
<div className="flex flex-col items-center">
<div className="h-8 w-5 rounded-full border border-slate-300 flex items-start justify-center py-1">
<div className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce [animation-duration:1s] motion-reduce:animate-none"></div>
</div>
</div>
</div>
</div>
</header>

<main className="relative z-20 bg-white/95 backdrop-blur-sm border-t border-slate-200" id="main-content">

<div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-b from-slate-50/90 via-white/95 to-white pointer-events-none"></div>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 space-y-16 sm:space-y-20">

<section aria-labelledby="dla-pacjentow-heading" className="space-y-8" id="dla-pacjentow">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900" id="dla-pacjentow-heading">
                Dla pacjentów
              </h2>
<p className="mt-2 text-lg text-slate-700 max-w-2xl">
                Najważniejsze informacje dotyczące rejestracji, godzin otwarcia, kontaktu oraz pomocy w stanach nagłych.
              </p>
</div>
<div className="flex items-center gap-3 text-sm sm:text-base text-slate-600">
<div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span>Aktualne informacje</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">

<article className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 focus-within:ring-offset-white">
<div className="p-5 sm:p-6 space-y-4 h-full flex flex-col">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700 border border-emerald-600/20">
<svg aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
<h3 className="text-base sm:text-lg font-medium text-slate-900 tracking-tight">
                    Rejestracja
                  </h3>
</div>
<div className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
<p>
                    Rejestracja do poradni specjalistycznych odbywa się osobiście, telefonicznie lub przez upoważnioną osobę.
                  </p>
<p className="text-sm text-slate-600">
                    Przy rejestracji przygotuj numer PESEL oraz skierowanie (jeśli jest wymagane).
                  </p>
</div>
<dl className="mt-3 space-y-1 text-sm sm:text-base text-slate-700">
<div className="flex justify-between gap-2">
</div></dl></div></article></div></section></div></main></div>
    </>
  );
}
