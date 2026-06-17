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
        
        // Custom clip path styles for logo triangles if needed, 
        // but grid layout handles the visual representation cleanly in CSS.
        // Adding specific triangle clip-paths for extreme accuracy:
        document.querySelectorAll('.clip-path-polygon').forEach((el, index) => {
             // 0: Top Left, 1: Top Right, 2: Bottom Left, 3: Bottom Right
             // The logo is composed of triangles.
             if(index === 0) el.style.clipPath = 'polygon(0 0, 100% 0, 0 100%)'; 
             if(index === 1) el.style.clipPath = 'polygon(0 0, 0% 100%, 100% 100%)'; // Dark triangle
             if(index === 2) el.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%)'; 
             if(index === 3) el.style.clipPath = 'polygon(0 0, 0% 100%, 100% 0)'; // This one is tricky based on image, approximating square fill
             
             // Resetting to full blocks for a cleaner pixel-perfect CSS grid look 
             // as the provided logo is geometric squares/triangles. 
             // The grid approach in HTML is robust enough for this abstraction.
             el.style.clipPath = 'none'; 
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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-8 h-8 grid grid-cols-2 gap-0.5">
<div className="bg-blue-600 clip-path-polygon"></div>
<div className="bg-zinc-800 clip-path-polygon"></div>
<div className="bg-blue-600 clip-path-polygon"></div>
<div className="bg-blue-600 clip-path-polygon"></div>
</div>
<div className="flex flex-col justify-center">
<span className="text-white font-semibold tracking-tight leading-none text-lg">VENDOR</span>
<span className="text-white font-light tracking-widest text-xs uppercase leading-none mt-1">FINANCE</span>
</div>
</div>

<div className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#how-it-works">Jak to działa</a>
<a className="hover:text-white transition-colors" href="#benefits">Dla dostawców</a>
<a className="hover:text-white transition-colors" href="#products">Produkty</a>
<a className="hover:text-white transition-colors" href="#contact">Kontakt</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-white text-zinc-950 px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors" href="#contact">
                Zostań partnerem
            </a>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">

<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-zinc-300">Outsourcing finansowania B2B</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                Zewnętrzny dział finansowania <br className="hidden md:block"/> Twojej sprzedaży
            </h1>
<p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Zastąp wewnętrzne procesy dedykowanym zespołem ekspertów. Zero kosztów stałych, szybsze decyzje leasingowe i wyższa konwersja sprzedaży.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-all flex items-center justify-center gap-2" href="#contact">
                    Rozpocznij współpracę
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-zinc-700 text-zinc-300 rounded-lg font-medium hover:bg-zinc-900 hover:border-zinc-600 transition-all flex items-center justify-center" href="#how-it-works">
                    Dowiedz się więcej
                </a>
</div>
</div>
</section>

<section className="border-y border-zinc-800 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<p className="text-3xl font-medium text-white tracking-tight">0 zł</p>
<p className="text-sm mt-1">Kosztów stałych</p>
</div>
<div>
<p className="text-3xl font-medium text-white tracking-tight">24h</p>
<p className="text-sm mt-1">Czas decyzji</p>
</div>
<div>
<p className="text-3xl font-medium text-white tracking-tight">B2B</p>
<p className="text-sm mt-1">Specjalizacja</p>
</div>
<div>
<p className="text-3xl font-medium text-white tracking-tight">100%</p>
<p className="text-sm mt-1">Wsparcie online</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="how-it-works">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Model współpracy</h2>
<p className="text-lg max-w-xl">Działamy jako Twój dział finansowy, ale bez obciążania Twojej struktury.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="shopping-cart"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Transakcja sprzedaży</h3>
<p className="leading-relaxed">
                    Twój handlowiec oferuje produkt. Zamiast odsyłać klienta do banku, przekazuje kontakt do nas lub wprowadza dane do systemu.
                </p>
</div>

<div className="group p-8 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all duration-300 relative">
<div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden md:block text-zinc-700">
<i className="w-6 h-6" data-lucide="chevron-right"></i>
</div>
<div className="w-12 h-12 bg-blue-900/30 text-blue-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Procesowanie finansowania</h3>
<p className="leading-relaxed">
                    Vendor Finance przejmuje proces. Dobieramy leasing lub kredyt, kompletujemy dokumenty i negocjujemy z funduszami.
                </p>
</div>

<div className="group p-8 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all duration-300 relative">
<div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden md:block text-zinc-700">
<i className="w-6 h-6" data-lucide="chevron-right"></i>
</div>
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Finalizacja i wypłata</h3>
<p className="leading-relaxed">
                    Klient podpisuje umowę finansowania. Środki za fakturę trafiają bezpośrednio na Twoje konto, często w 24h.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Obsługiwane sektory</h2>
<p className="text-lg max-w-xl">Specjalizujemy się w finansowaniu przedmiotów leasingowalnych.</p>
</div>
<div className="flex gap-2">
<span className="text-sm px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300">B2B Only</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="flex flex-col p-6 rounded-lg border border-zinc-800 bg-zinc-950">
<i className="w-8 h-8 text-white mb-4" data-lucide="sun"></i>
<span className="text-lg font-medium text-white">Fotowoltaika (PV)</span>
</div>
<div className="flex flex-col p-6 rounded-lg border border-zinc-800 bg-zinc-950">
<i className="w-8 h-8 text-white mb-4" data-lucide="battery-charging"></i>
<span className="text-lg font-medium text-white">Magazyny Energii</span>
</div>
<div className="flex flex-col p-6 rounded-lg border border-zinc-800 bg-zinc-950">
<i className="w-8 h-8 text-white mb-4" data-lucide="thermometer"></i>
<span className="text-lg font-medium text-white">Pompy Ciepła</span>
</div>
<div className="flex flex-col p-6 rounded-lg border border-zinc-800 bg-zinc-950">
<i className="w-8 h-8 text-white mb-4" data-lucide="factory"></i>
<span className="text-lg font-medium text-white">Maszyny i IT</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="benefits">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Korzyści dla dostawcy</h2>
<p className="text-lg max-w-xl">Dlaczego warto outsourcować finansowanie do Vendor Finance?</p>
</div>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
<div className="flex gap-5">
<div className="shrink-0 mt-1">
<div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-white" data-lucide="trending-up"></i>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Wyższa konwersja sprzedaży</h3>
<p className="leading-relaxed">
                        Klient nie rezygnuje z zakupu z powodu braku gotówki. Oferujemy finansowanie w punkcie sprzedaży, domykając transakcję "tu i teraz".
                    </p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 mt-1">
<div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-white" data-lucide="wallet"></i>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Brak kosztów operacyjnych</h3>
<p className="leading-relaxed">
                        Eliminujesz potrzebę zatrudniania specjalistów ds. finansowania. My przejmujemy całą biurokrację, ryzyko i procesowanie.
                    </p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 mt-1">
<div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-white" data-lucide="banknote"></i>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Dodatkowy przychód</h3>
<p className="leading-relaxed">
                        Model prowizyjny. Nie tylko nie ponosisz kosztów, ale otrzymujesz wynagrodzenie za każdego sfinansowanego klienta.
                    </p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 mt-1">
<div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center bg-zinc-900">
<i className="w-5 h-5 text-white" data-lucide="shield-check"></i>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Bezpieczeństwo i Compliance</h3>
<p className="leading-relaxed">
                        Działamy zgodnie z regulacjami. Bierzemy na siebie kwestie formalne i kontakt z instytucjami finansowymi.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800 bg-zinc-900/20" id="products">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Pełne spektrum finansowania</h2>
<p className="text-lg mb-8 leading-relaxed">
                        Dopasowujemy instrument finansowy do specyfiki Twojego produktu oraz sytuacji klienta. Nie jesteśmy bankiem – jesteśmy brokerem z dostępem do wielu rozwiązań.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg">
<i className="w-5 h-5 text-blue-500" data-lucide="check"></i>
<span className="text-zinc-200">Leasing operacyjny i finansowy</span>
</li>
<li className="flex items-center gap-3 text-lg">
<i className="w-5 h-5 text-blue-500" data-lucide="check"></i>
<span className="text-zinc-200">Kredyty firmowe i inwestycyjne</span>
</li>
<li className="flex items-center gap-3 text-lg">
<i className="w-5 h-5 text-blue-500" data-lucide="check"></i>
<span className="text-zinc-200">Płatności ratalne dla biznesu</span>
</li>
<li className="flex items-center gap-3 text-lg">
<i className="w-5 h-5 text-blue-500" data-lucide="check"></i>
<span className="text-zinc-200">Pożyczki leasingowe (np. na OZE)</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>
<div className="relative bg-zinc-950 border border-zinc-800 rounded-xl p-8 shadow-2xl">
<div className="flex justify-between items-center mb-6 pb-6 border-b border-zinc-800">
<div className="text-sm font-medium text-zinc-500">Status wniosku</div>
<div className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded border border-emerald-500/20">Zatwierdzony</div>
</div>
<div className="space-y-4">
<div className="flex justify-between">
<span className="text-zinc-500">Kwota finansowania</span>
<span className="text-white font-medium">125 000 PLN</span>
</div>
<div className="flex justify-between">
<span className="text-zinc-500">Okres</span>
<span className="text-white font-medium">60 miesięcy</span>
</div>
<div className="flex justify-between">
<span className="text-zinc-500">Typ</span>
<span className="text-white font-medium">Leasing operacyjny</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-800">
<button className="w-full py-2 bg-white text-zinc-950 rounded text-sm font-medium">Generuj umowę</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Dlaczego Vendor Finance?</h2>
<p className="text-lg max-w-2xl mx-auto mb-12">
            Budujemy relacje oparte na transparentności. Twoja sprzedaż jest naszym priorytetem, a zadowolenie Twojego klienta – naszą wizytówką.
        </p>
<div className="inline-flex gap-8 justify-center grayscale opacity-50">

<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-700 rounded-full"></div>
<span className="font-semibold text-lg">Partner A</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-700 rounded-full"></div>
<span className="font-semibold text-lg">Fundusz B</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-700 rounded-full"></div>
<span className="font-semibold text-lg">Bank C</span>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Porozmawiajmy o współpracy</h2>
<p className="text-lg text-zinc-400">
                    Skontaktuj się z nami, aby wdrożyć zewnętrzne finansowanie w Twojej firmie.
                </p>
</div>
<form className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">Imię i nazwisko</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">Firma</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors" placeholder="Nazwa firmy" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">Email służbowy</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors" placeholder="jan@firma.pl" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">Wiadomość</label>
<textarea className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors" placeholder="Czym się zajmujecie?" rows="4"></textarea>
</div>
<button className="w-full bg-white text-zinc-950 font-medium py-3.5 rounded-lg hover:bg-zinc-200 transition-colors mt-2" type="button">
                    Wyślij zapytanie
                </button>
</form>
<p className="text-center text-sm text-zinc-600 mt-6">
                Klikając "Wyślij", akceptujesz naszą politykę prywatności. Odpowiadamy zazwyczaj w ciągu 24 godzin.
            </p>
</div>
</section>

<footer className="border-t border-zinc-800 py-12 px-6 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 grid grid-cols-2 gap-0.5">
<div className="bg-blue-600"></div>
<div className="bg-zinc-800"></div>
<div className="bg-blue-600"></div>
<div className="bg-blue-600"></div>
</div>
<span className="text-white font-medium text-sm">Vendor Finance</span>
</div>
<div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">O nas</a>
<a className="hover:text-white transition-colors" href="#">Polityka Prywatności</a>
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-sm text-zinc-600">
                © 2024 Vendor Finance. Wszelkie prawa zastrzeżone.
            </div>
</div>
</footer>


    </>
  );
}
