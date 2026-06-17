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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="bg-[#D48806]/10 text-[#5D3F6A] py-2 px-4 text-center text-xs font-heading tracking-widest uppercase border-b border-[#D48806]/20">
        Strona dla rodzin i młodzieży — <a className="text-[#D48806] hover:text-[#5D3F6A] transition-colors underline underline-offset-4 decoration-dotted" href="https://krzysiekblazejewski.pl" rel="noopener noreferrer" target="_blank">krzysiekblazejewski.pl</a>
</div>

<header className="sticky top-0 z-50 w-full bg-[#FDF4E3]/90 backdrop-blur-md border-b border-[#5D3F6A]/10">
<div className="max-w-7xl mx-auto px-6 min-h-[4rem] flex items-center justify-between">
<a className="flex items-center gap-2 text-[#5D3F6A] hover:text-[#D48806] transition-colors group" href="#">
<iconify-icon className="group-hover:rotate-45 transition-transform duration-500" height="1.75rem" icon="solar:compass-linear" strokeWidth="1.5" width="1.75rem"></iconify-icon>
<span className="text-xl font-heading tracking-widest uppercase">AKE</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-heading tracking-wider uppercase text-[#5D3F6A]/80">
<a className="hover:text-[#D48806] transition-colors" href="#oferta">Oferta</a>
<a className="hover:text-[#D48806] transition-colors" href="#trening">Program</a>
<a className="hover:text-[#D48806] transition-colors" href="#wydarzenia">Wydarzenia</a>
<a className="hover:text-[#D48806] transition-colors" href="#czytelnia">Czytelnia</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center min-h-[44px] px-6 text-sm font-heading tracking-wider uppercase bg-[#5D3F6A] text-[#FDF4E3] hover:bg-[#4a3254] transition-colors shadow-sm" href="#kontakt">
                    Kontakt / Zapisy
                </a>
<button className="md:hidden p-2 text-[#5D3F6A] hover:text-[#D48806]">
<iconify-icon height="1.75rem" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="1.75rem"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="relative">

<div className="hidden lg:block amber-thread w-px h-full left-1/2 -translate-x-1/2 pointer-events-none opacity-20"></div>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center border border-[#D48806]/30 bg-[#D48806]/10 px-4 py-1.5 text-xs font-heading tracking-widest uppercase text-[#5D3F6A] mb-8">
<iconify-icon className="mr-2 text-[#D48806]" height="1.25rem" icon="solar:star-fall-linear" strokeWidth="1.5" width="1.25rem"></iconify-icon>
                    Strefa profesjonalistów EFT-Y
                </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading tracking-wide uppercase leading-tight text-[#5D3F6A] mb-8">
                    Bezpieczeństwo i komfort w pracy z silnymi emocjami <br/>
<span className="text-[#D48806]">dzieci i młodzieży</span>
</h1>
<div className="relative inline-block">

<svg className="absolute -bottom-4 left-0 w-full h-4 text-[#D48806] opacity-90" fill="none" preserveaspectratio="none" viewbox="0 0 100 10" xmlns="http://www.w3.org/2000/svg"><path d="M1 8C25 2 75 1 99 6" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path></svg>
<p className="mt-2 text-lg sm:text-xl text-[#5D3F6A]/80 leading-relaxed font-italic max-w-2xl mx-auto">
                        Transformacja emocji za pomocą emocji w pracy terapeutycznej.
                    </p>
</div>
<div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] px-8 text-sm font-heading tracking-widest uppercase bg-[#5D3F6A] text-[#FDF4E3] shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all" href="#trening">
                        Oferta szkoleniowa
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] px-8 text-sm font-heading tracking-widest uppercase border border-[#5D3F6A]/30 text-[#5D3F6A] hover:bg-[#D48806]/10 hover:border-[#D48806]/50 transition-all" href="#wydarzenia">
                        Webinary i wydarzenia
                    </a>
</div>
</div>
</section>

<section className="py-24 relative border-t border-[#5D3F6A]/10 bg-[#D48806]/5">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-heading tracking-wide uppercase text-[#5D3F6A]">Czuć profesjonalnie – to nie oksymoron.</h2>
<p className="mt-6 text-base text-[#5D3F6A]/80 leading-relaxed">Emocje młodych to nie czarna magia. Zostań ekspertem od tego, co niewidoczne dla oczu i zyskaj narzędzia do głębokiej pracy procesowej, zamiast dystansowania się w intelektualizację.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="polaroid transform -rotate-1 hover:rotate-0 transition-transform">
<div className="washi-tape w-16 h-6 -top-3 left-1/2 -translate-x-1/2 rotate-2"></div>
<div className="bg-white/10 aspect-video mb-4 flex items-center justify-center border border-[#FDF4E3]/10">
<iconify-icon className="text-[#FDF4E3]/60" height="3rem" icon="solar:brain-linear" strokeWidth="1" width="3rem"></iconify-icon>
</div>
<h3 className="text-lg font-heading tracking-wide uppercase mb-3">Wyjdź z intelektualizacji</h3>
<p className="text-sm leading-relaxed opacity-80">Wielu klinicystów odczuwa dyskomfort przy silnym afekcie, rozmawiając o emocjach "tam i wtedy". Nauczymy Cię bezpiecznie aktywować je tu i teraz.</p>
</div>

<div className="polaroid transform rotate-2 hover:rotate-0 transition-transform mt-0 md:mt-8">
<div className="washi-tape w-20 h-6 -top-3 left-1/3 -translate-x-1/2 -rotate-3 bg-[#D48806]/90"></div>
<div className="bg-white/10 aspect-video mb-4 flex items-center justify-center border border-[#FDF4E3]/10">
<iconify-icon className="text-[#FDF4E3]/60" height="3rem" icon="solar:users-group-two-rounded-linear" strokeWidth="1" width="3rem"></iconify-icon>
</div>
<h3 className="text-lg font-heading tracking-wide uppercase mb-3">Zaangażuj milczących</h3>
<p className="text-sm leading-relaxed opacity-80">Praca z nastolatkami bywa wyzwaniem. Poznasz humanistyczną postawę i techniki, które otwierają na współpracę, nawet gdy mówią "nie wiem".</p>
</div>

<div className="polaroid transform -rotate-2 hover:rotate-0 transition-transform">
<div className="washi-tape w-16 h-6 -top-3 left-2/3 -translate-x-1/2 rotate-1"></div>
<div className="bg-white/10 aspect-video mb-4 flex items-center justify-center border border-[#FDF4E3]/10">
<iconify-icon className="text-[#FDF4E3]/60" height="3rem" icon="solar:map-linear" strokeWidth="1" width="3rem"></iconify-icon>
</div>
<h3 className="text-lg font-heading tracking-wide uppercase mb-3">Przewidywalna rama</h3>
<p className="text-sm leading-relaxed opacity-80">Klarowny proces terapii EFT-Y daje bezpieczeństwo Tobie i systemom rodzinnym, pozostawiając miejsce na terapeutyczną intuicję.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="oferta">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-between border-y border-[#5D3F6A]/10 py-16">
<div className="flex-1 border-l border-[#D48806] pl-6 relative">
<span className="absolute -left-1.5 top-0 w-3 h-3 bg-[#D48806]"></span>
<h3 className="text-2xl font-heading tracking-wide uppercase text-[#5D3F6A] mb-4">Szkolenia &amp; Treningi</h3>
<p className="text-sm text-[#5D3F6A]/70 mb-6 leading-relaxed">Kompleksowe ścieżki certyfikacyjne i warsztaty narzędziowe dla zaawansowanych praktyków.</p>
<a className="text-sm font-heading tracking-widest uppercase text-[#5D3F6A] hover:text-[#D48806] flex items-center gap-2 transition-colors font-semibold" href="#trening">
                            Poznaj program <iconify-icon className="text-[#D48806]" icon="solar:arrow-right-linear" width="1.25rem"></iconify-icon>
</a>
</div>
<div className="flex-1 border-l border-[#5EC8D4] pl-6 relative">
<span className="absolute -left-1.5 top-0 w-3 h-3 bg-[#5EC8D4]"></span>
<h3 className="text-2xl font-heading tracking-wide uppercase text-[#5D3F6A] mb-4">Superwizje EFT</h3>
<p className="text-sm text-[#5D3F6A]/70 mb-6 leading-relaxed">Indywidualna i grupowa przestrzeń do przyglądania się własnym procesom i trudnościom z afektem pacjenta.</p>
<a className="text-sm font-heading tracking-widest uppercase text-[#5D3F6A] hover:text-[#D48806] flex items-center gap-2 transition-colors font-semibold" href="#kontakt">
                            Zapisz się <iconify-icon className="text-[#5EC8D4]" icon="solar:arrow-right-linear" width="1.25rem"></iconify-icon>
</a>
</div>
<div className="flex-1 border-l border-[#9DC183] pl-6 relative">
<span className="absolute -left-1.5 top-0 w-3 h-3 bg-[#9DC183]"></span>
<h3 className="text-2xl font-heading tracking-wide uppercase text-[#5D3F6A] mb-4">Webinary</h3>
<p className="text-sm text-[#5D3F6A]/70 mb-6 leading-relaxed">Darmowe pigułki wiedzy i regularne spotkania online budujące "Wioskę" wokół podejścia EFT.</p>
<a className="text-sm font-heading tracking-widest uppercase text-[#5D3F6A] hover:text-[#D48806] flex items-center gap-2 transition-colors font-semibold" href="#wydarzenia">
                            Sprawdź kalendarz <iconify-icon className="text-[#9DC183]" icon="solar:arrow-right-linear" width="1.25rem"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#D48806]/5" id="trening">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 relative">
<div className="text-xs font-heading tracking-widest text-[#D48806] mb-4 uppercase">Program Flagowy</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-heading tracking-wide uppercase text-[#5D3F6A] mb-8 leading-tight">
                            Trening z Emotion Focused Therapy <span className="text-[#D48806]">for Youth</span> (EFT-Y)
                        </h2>
<p className="text-[#5D3F6A]/80 leading-relaxed mb-10 text-base">
                            Szkolenie zaprojektowane tak, by przenieść głębię humanistyczną i międzynarodową wiedzę na realia polskiego gabinetu. Nauczysz się łączyć swobodę bycia w relacji z przewidywalną ramą procesu.
                        </p>
<div className="relative pl-8 py-6 border-l-2 border-[#D48806] bg-gradient-to-r from-[#D48806]/15 to-transparent my-12">
<iconify-icon className="absolute -left-3.5 top-0 text-[#FDF4E3] bg-[#5D3F6A] p-1" height="1.5rem" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="1.5rem"></iconify-icon>
<p className="text-xl md:text-2xl font-quote text-[#D48806] leading-relaxed">
                                "Musisz to poczuć, żeby to uleczyć!"
                            </p>
</div>
<a className="inline-flex items-center justify-center min-h-[44px] px-8 text-sm font-heading tracking-widest uppercase bg-[#5D3F6A] text-[#FDF4E3] shadow-md hover:bg-[#4a3254] transition-colors" href="#kontakt">
                            Zapisz się na listę
                        </a>
</div>

<div className="lg:col-span-7 bg-[#5D3F6A] text-[#FDF4E3] p-8 md:p-12 relative shadow-2xl">

<div className="washi-tape w-24 h-8 -top-4 left-4 rotate-2 opacity-90 bg-[#D48806]/80"></div>
<div className="washi-tape w-16 h-8 -bottom-4 right-8 -rotate-3 opacity-90"></div>
<h3 className="text-xl font-heading tracking-wide uppercase mb-8 border-b-2 border-[#FDF4E3]/10 pb-4">Moduły szkoleniowe:</h3>
<ul className="space-y-6 font-medium">
<li className="flex items-start gap-4">
<span className="text-[#D48806] font-quote text-xl mt-0.5 opacity-80">I.</span>
<div>
<span className="block text-base tracking-tight mb-1">Podstawy EFT-Y</span>
<span className="block text-xs text-[#FDF4E3]/60 font-normal">Teoria, założenia, skoncentrowanie na emocjach.</span>
</div>
</li>
<li className="flex items-start gap-4">
<span className="text-[#D48806] font-quote text-xl mt-0.5 opacity-80">II.</span>
<div>
<span className="block text-base tracking-tight mb-1">Rozumienie emocji młodzieży</span>
<span className="block text-xs text-[#FDF4E3]/60 font-normal">Lęki, depresja, samoocena, procesy pod spodem.</span>
</div>
</li>
<li className="flex items-start gap-4">
<span className="text-[#D48806] font-quote text-xl mt-0.5 opacity-80">III.</span>
<div>
<span className="block text-base tracking-tight mb-1">Techniki i narzędzia terapeutyczne</span>
<span className="block text-xs text-[#FDF4E3]/60 font-normal">Praktyczne techniki EFT dostosowane do młodzieży (praca z krzesłami).</span>
</div>
</li>
<li className="flex items-start gap-4">
<span className="text-[#D48806] font-quote text-xl mt-0.5 opacity-80">IV.</span>
<div>
<span className="block text-base tracking-tight mb-1">Zasady pracy doświadczeniowej</span>
<span className="block text-xs text-[#FDF4E3]/60 font-normal">Aspekty systemowe, rozwojowe i etyczne ramienia.</span>
</div>
</li>
<li className="flex items-start gap-4 pt-6 border-t border-[#FDF4E3]/10 border-dashed">
<iconify-icon className="mt-0.5 text-[#5EC8D4] shrink-0" height="1.5rem" icon="solar:check-circle-linear" width="1.5rem"></iconify-icon>
<span className="text-sm opacity-90">Angażowanie bliskich w proces leczenia.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="mt-0.5 text-[#5EC8D4] shrink-0" height="1.5rem" icon="solar:check-circle-linear" width="1.5rem"></iconify-icon>
<span className="text-sm opacity-90">Analiza przypadków, studia i ćwiczenia w podgrupach.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="wydarzenia">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl sm:text-4xl font-heading tracking-wide uppercase text-[#5D3F6A] mb-6">Wydarzenia i społeczność</h2>
<p className="text-base text-[#5D3F6A]/80 max-w-2xl mx-auto mb-16 leading-relaxed">
                    Potrzeba "Wioski", aby wychować terapeutę. Dołącz do społeczności praktyków, bierz udział w bezpłatnych webinarach i płatnych warsztatach pogłębiających, by stale rozwijać warsztat.
                </p>

<div className="polaroid p-3 pb-8 md:p-6 md:pb-12 mx-auto rotate-1 max-w-[800px]">
<div className="washi-tape w-24 h-6 -top-3 left-1/2 -translate-x-1/2 -rotate-1 opacity-90 bg-[#D48806]"></div>
<div className="w-full bg-white rounded-sm overflow-hidden h-[500px] sm:h-[600px] border border-[#FDF4E3]/10">
<iframe className="block bg-transparent filter contrast-100" frameborder="0" height="100%" src="https://luma.com/embed/calendar/cal-bLL1CBs6XNZq2um/events" title="Kalendarz wydarzeń i webinarów Luma" width="100%">
</iframe>
</div>
<div className="mt-4 text-center font-quote text-sm text-[#FDF4E3]/60 opacity-80">
                        Rezerwuj terminy z wyprzedzeniem.
                    </div>
</div>
</div>
</section>

<section className="py-24 border-t border-[#5D3F6A]/10 bg-[#D48806]/5" id="kontakt">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<h2 className="text-3xl font-heading tracking-wide uppercase text-[#5D3F6A] mb-6">Zostańmy w kontakcie</h2>
<p className="text-base text-[#5D3F6A]/70 mb-10 leading-relaxed">
                            Pytania o ofertę B2B, superwizję lub certyfikację EFT-Y? Napisz bezpośrednio.
                        </p>
<div className="space-y-6 text-sm">
<div className="flex items-center gap-4">
<iconify-icon className="text-[#D48806]" height="1.5rem" icon="solar:letter-linear" width="1.5rem"></iconify-icon>
<a className="font-heading tracking-wide text-lg text-[#5D3F6A] hover:text-[#D48806] transition-colors" href="mailto:krzysiekblazejewski@gmail.com">krzysiekblazejewski@gmail.com</a>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-[#D48806]" height="1.5rem" icon="solar:phone-linear" width="1.5rem"></iconify-icon>
<span className="font-heading tracking-wide text-lg text-[#5D3F6A]">+48 668 509 548</span>
</div>
</div>
</div>
<div className="mt-16 pt-10 border-t border-[#5D3F6A]/10">
<h3 className="text-lg font-heading tracking-wide uppercase text-[#5D3F6A] mb-3">Newsletter Akademii</h3>
<p className="text-sm text-[#5D3F6A]/60 mb-6 leading-relaxed">Otrzymuj informacje o nowych terminach, materiały czytelnicze i zaproszenia na webinary (bez spamu, rzadko i merytorycznie).</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="custom-input flex-1" placeholder="Twój adres email" required="" type="email"/>
<button className="shrink-0 min-h-[44px] px-6 text-sm font-heading tracking-widest uppercase bg-[#5D3F6A] text-[#FDF4E3] hover:bg-[#4a3254] transition-colors" type="submit">
                                Dołącz
                            </button>
</form>
</div>
</div>

<div className="lg:col-span-7 relative">
<div className="absolute -inset-1 bg-gradient-to-br from-[#D48806]/30 to-[#5EC8D4]/20 transform rotate-1"></div>
<div className="bg-white border border-[#5D3F6A]/10 p-8 md:p-10 relative shadow-2xl">
<div className="washi-tape w-16 h-6 -top-3 right-10 rotate-3 bg-[#9DC183]/80"></div>
<form className="space-y-6">
<div>
<label className="block text-xs font-heading tracking-widest uppercase text-[#5D3F6A]/80 mb-2" htmlFor="name">Imię i nazwisko</label>
<input className="custom-input" id="name" name="name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-heading tracking-widest uppercase text-[#5D3F6A]/80 mb-2" htmlFor="email">Adres email</label>
<input className="custom-input" id="email" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-heading tracking-widest uppercase text-[#5D3F6A]/80 mb-2" htmlFor="message">Wiadomość</label>
<textarea className="custom-input resize-none" id="message" name="message" required="" rows="4"></textarea>
</div>
<div className="flex items-start gap-4">
<input className="custom-checkbox shrink-0 mt-1" id="rodo" name="rodo" required="" type="checkbox"/>
<label className="text-xs text-[#5D3F6A]/70 leading-relaxed font-sans" htmlFor="rodo">
                                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zapytanie, zgodnie z polityką prywatności i wymogami RODO.
                                </label>
</div>
<button className="w-full min-h-[44px] px-6 text-sm font-heading tracking-widest uppercase bg-[#5D3F6A] text-[#FDF4E3] hover:bg-[#D48806] hover:text-[#ffffff] transition-colors mt-4" type="submit">
                                Wyślij wiadomość
                            </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-[#5D3F6A]/10" id="czytelnia">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-heading tracking-wide uppercase text-[#5D3F6A]">Czytelnia / Refleksje</h2>
<a className="hidden sm:flex items-center text-sm font-heading tracking-widest uppercase text-[#5D3F6A] hover:text-[#D48806] transition-colors font-semibold" href="#">
                        Wszystkie wpisy <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<a className="group block bg-white/60 border border-[#5D3F6A]/10 p-6 hover:bg-white transition-all shadow-sm hover:shadow-md" href="#">
<time className="text-xs font-heading tracking-widest text-[#D48806] uppercase">Grudzień 2024</time>
<h3 className="mt-4 text-xl font-heading tracking-wide text-[#5D3F6A] leading-snug group-hover:text-[#D48806] transition-colors">Odkrywanie emocjonalnej głębi: EFT for Youth and Caregivers</h3>
<p className="mt-3 text-sm text-[#5D3F6A]/70 line-clamp-2">Praktyczne notatki z warsztatów z dr Mirisse Foroughe. Jak przenieść to na polski grunt?</p>
</a>
<a className="group block bg-white/60 border border-[#5D3F6A]/10 p-6 hover:bg-white transition-all shadow-sm hover:shadow-md" href="#">
<time className="text-xs font-heading tracking-widest text-[#D48806] uppercase">Listopad 2024</time>
<h3 className="mt-4 text-xl font-heading tracking-wide text-[#5D3F6A] leading-snug group-hover:text-[#D48806] transition-colors">Bezpieczeństwo relacji. Jak budować ramy w pracy z młodzieżą?</h3>
<p className="mt-3 text-sm text-[#5D3F6A]/70 line-clamp-2">Narzędzia obniżające lęk terapeuty w kontakcie z silnym acting-outem u pacjenta.</p>
</a>
<a className="group block bg-white/60 border border-[#5D3F6A]/10 p-6 hover:bg-white transition-all shadow-sm hover:shadow-md hidden lg:block" href="#">
<time className="text-xs font-heading tracking-widest text-[#D48806] uppercase">Październik 2024</time>
<h3 className="mt-4 text-xl font-heading tracking-wide text-[#5D3F6A] leading-snug group-hover:text-[#D48806] transition-colors">Speak the Unspoken: Symbolizacja i mentalizacja</h3>
<p className="mt-3 text-sm text-[#5D3F6A]/70 line-clamp-2">Gdy słów brakuje – wykorzystanie metafory w procesie emocjonalnego angażowania.</p>
</a>
</div>
</div>
</section>
</main>
<footer className="bg-[#D48806]/5 border-t border-[#5D3F6A]/20 pt-16 pb-8 text-[#5D3F6A]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-5 lg:col-span-4">
<span className="text-3xl font-heading tracking-widest uppercase mb-6 block text-[#5D3F6A]">AKE</span>
<p className="text-sm text-[#5D3F6A]/70 leading-relaxed mb-6">
                        Akademia Kompas Emocji. Twoja Wioska w świecie emocji. Międzynarodowa wiedza, polska praktyka w obszarze EFT i EFT-Y dla profesjonalistów.
                    </p>
<div className="flex items-center gap-5">
<a className="text-[#5D3F6A]/50 hover:text-[#D48806] transition-colors" href="https://www.facebook.com/AkademiaKompasEmocji/" rel="noopener noreferrer" target="_blank" title="Facebook Akademia">
<iconify-icon height="1.75rem" icon="solar:round-facebook-linear" strokeWidth="1.5" width="1.75rem"></iconify-icon>
</a>
<a className="text-[#5D3F6A]/50 hover:text-[#D48806] transition-colors" href="https://www.instagram.com/krzysztof_blazejewski/" rel="noopener noreferrer" target="_blank" title="Instagram">
<iconify-icon height="1.75rem" icon="solar:camera-linear" strokeWidth="1.5" width="1.75rem"></iconify-icon>
</a>
<a className="text-[#5D3F6A]/50 hover:text-[#D48806] transition-colors" href="https://www.linkedin.com/in/krzysiek-b%C5%82a%C5%BCejewski-60792568/" rel="noopener noreferrer" target="_blank" title="LinkedIn">
<iconify-icon height="1.75rem" icon="solar:work-linear" strokeWidth="1.5" width="1.75rem"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-3 lg:col-span-3">
<h4 className="text-base font-heading tracking-wider uppercase mb-5 text-[#5D3F6A]">Eksploruj</h4>
<ul className="space-y-3 text-sm text-[#5D3F6A]/70">
<li><a className="hover:text-[#D48806] transition-colors" href="#oferta">Oferta B2B</a></li>
<li><a className="hover:text-[#D48806] transition-colors" href="#trening">Trening EFT-Y</a></li>
<li><a className="hover:text-[#D48806] transition-colors" href="#wydarzenia">Wydarzenia i Luma</a></li>
<li><a className="hover:text-[#D48806] transition-colors" href="#czytelnia">Czytelnia</a></li>
</ul>
</div>
<div className="md:col-span-4 lg:col-span-5 bg-white/60 p-6 border border-[#5D3F6A]/10 shadow-sm">
<h4 className="text-base font-heading tracking-wider uppercase mb-3 text-[#5D3F6A]">Strona dla pacjentów</h4>
<p className="text-xs text-[#5D3F6A]/70 mb-4 font-sans leading-relaxed">
                        Szukasz wsparcia dla siebie lub swojego nastoletniego dziecka? Odwiedź gabinet terapii rodzinnej.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-heading tracking-widest uppercase text-[#5D3F6A] font-semibold hover:text-[#D48806] transition-colors" href="https://krzysiekblazejewski.pl" rel="noopener noreferrer" target="_blank">
                        Rodzinny Kalejdoskop <iconify-icon icon="solar:arrow-right-top-linear"></iconify-icon>
</a>
<div className="mt-6 pt-4 border-t border-[#5D3F6A]/10">
<span className="text-xs font-sans text-[#5D3F6A]/50 block">
                            Rozliczenia B2B szkoleń obsługuje system elisoft.
                        </span>
</div>
</div>
</div>

<div className="border-t border-[#5D3F6A]/10 pt-6 mb-6">
<details className="group">
<summary className="text-xs font-heading tracking-widest uppercase text-[#5D3F6A]/60 cursor-pointer list-none flex items-center gap-2 hover:text-[#5D3F6A] transition-colors">
                        Polityka prywatności / RODO
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-xs font-sans text-[#5D3F6A]/60 leading-relaxed space-y-2 max-w-4xl">
<p>Administrator: InRelatio – Przestrzeń Emocji i Relacji Krzysztof Błażejewski; kontakt@krzysiekblazejewski.pl.</p>
<p>Cele przetwarzania: realizacja umów szkoleniowych (art. 6 ust. 1 lit. b), marketing własnych usług (art. 6 ust. 1 lit. f RODO).</p>
<p>Odbiorcy: biuro rachunkowe elisoft, obsługa IT, ew. Emotion Transformation Institute przy certyfikacji.</p>
</div>
</details>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#5D3F6A]/50 border-t border-[#5D3F6A]/10 pt-6">
<p>© 2024 Akademia Kompas Emocji / InRelatio. Wszelkie prawa zastrzeżone.</p>
<p>kompasemocji.pl</p>
</div>
</div>
</footer>

    </>
  );
}
