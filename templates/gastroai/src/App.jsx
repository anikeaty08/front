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



      lucide.createIcons();

      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};
    
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
      

<nav className="fixed top-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 group-hover:border-amber-500/50 transition-colors">
<i className="w-5 h-5" data-lucide="utensils" strokeWidth="1.5"></i>
</div>
<span className="font-serif text-xl font-medium tracking-tight text-zinc-100">
            GastroAuto
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#korzysci">
            Co zyskasz
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#funkcje">
            Funkcje
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#opinie">
            Opinie
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center h-12 px-6 rounded-full bg-zinc-100 text-zinc-900 text-lg font-medium hover:bg-white transition-colors" href="https://app.zencal.io/u/tomaszguzik/konsultacja?lang=pl&amp;view=weekly" target="_blank">
          Sprawdź cennik
        </a>
</div>
</nav>

<section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<iframe allow="autoplay; fullscreen" allowtransparency="true" className="w-full h-full object-cover opacity-40 pointer-events-none scale-110" frameborder="0" scrolling="no" src="https://fast.wistia.net/embed/iframe/tsimcmsquz?seo=false&amp;autoplay=true&amp;loop=true&amp;muted=true&amp;silentAutoPlay=allow&amp;background=true"></iframe>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-base font-medium mb-8">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>Nowość dla właścicieli restauracji</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight font-serif text-zinc-50 leading-tight mb-8">
          Zautomatyzuj tworzenie
          <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
            apetycznych grafik.
          </span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Przestań tracić godziny na projektowanie postów. Nasz system generuje
          profesjonalne, spójne wizualnie grafiki dla Twojej restauracji w kilka
          sekund.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto inline-flex hover:bg-amber-400 transition-colors text-lg font-medium text-zinc-950 bg-amber-500 w-full h-14 rounded-full pr-8 pl-8 items-center justify-center" id="hero-cta-btn" type="button">
            Wybierz pakiet
            <i className="w-5 h-5 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-full border border-zinc-700 bg-zinc-900/50 text-zinc-100 text-lg font-medium hover:bg-zinc-800 transition-colors" id="how-it-works-btn" type="button">
            Zobacz jak to działa
          </button>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100 mb-6 font-serif leading-tight">
              Najlepsze apetyczne automatyzacje dla restauracji.
            </h2>
<p className="text-xl text-zinc-400 leading-relaxed">
              Rozwiń swoją gastronomię razy dziesięć i zapomnij o problemach
              związanych z pyszne.pl.
            </p>
</div>
<div className="w-full lg:w-1/2">
<div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 p-2 shadow-2xl">
<img alt="Szef kuchni" className="rounded-2xl w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://i.postimg.cc/sxyckGmb/Chef-Portrait-Face-Replacement.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative border-t border-zinc-900" id="korzysci">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight font-serif mb-6 text-zinc-100">
            Co zyskasz dzięki automatyzacji?
          </h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Zastąp chaos w social mediach przewidywalnym, zautomatyzowanym
            procesem, który przynosi rezultaty.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-amber-500/30 transition-colors group">
<div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">
              Oszczędność czasu
            </h3>
<p className="text-lg text-zinc-400 leading-relaxed">
              Proces, który zajmował godziny, teraz trwa minuty. Skup się na
              gotowaniu, a nie na Photoshopie.
            </p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-amber-500/30 transition-colors group">
<div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="palette" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">
              Spójny wizerunek
            </h3>
<p className="text-lg text-zinc-400 leading-relaxed">
              Każdy post wygląda profesjonalnie i pasuje do Twojej marki. Buduj
              rozpoznawalność na lokalnym rynku.
            </p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-amber-500/30 transition-colors group">
<div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">
              Większa sprzedaż
            </h3>
<p className="text-lg text-zinc-400 leading-relaxed">
              Regularnie publikowane, apetyczne zdjęcia przyciągają głodnych
              klientów prosto do Twojego lokalu.
            </p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 hover:border-amber-500/30 transition-colors group">
<div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">
              Szybka reakcja
            </h3>
<p className="text-lg text-zinc-400 leading-relaxed">
              Masz nową pozycję w menu lub promocję? Wygeneruj grafikę
              natychmiast i poinformuj swoich gości.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-t border-zinc-900" id="funkcje">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight font-serif mb-6 text-zinc-100">
            Czego się dowiesz i co zrobisz?
          </h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Poznaj możliwości systemu, który odmieni Twój marketing.
          </p>
</div>
<div className="space-y-32">

<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 order-2 lg:order-1">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 mb-8">
<span className="font-serif text-xl">1</span>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-6 font-serif">
                Tworzenie wariantów w sekundę
              </h3>
<p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Dowiesz się, jak z jednego zdjęcia dania stworzyć dziesiątki
                wariantów postów na Instagram, Facebooka i Stories. Nasze
                szablony automatycznie dopasowują wymiary i układ.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-4 text-lg text-zinc-300">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                  Formatowanie pod każdą platformę
                </li>
<li className="flex items-start gap-4 text-lg text-zinc-300">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                  Dodawanie logo i cen automatycznie
                </li>
</ul>
</div>
<div className="w-full lg:w-1/2 order-1 lg:order-2">
<div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 p-2 shadow-2xl">
<img alt="Aplikacja widok" className="rounded-2xl w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 p-2 shadow-2xl">
<img alt="Szablony menu" className="rounded-2xl w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full lg:w-1/2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 mb-8">
<span className="font-serif text-xl">2</span>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-6 font-serif">
                Harmonogramowanie i teksty AI
              </h3>
<p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Zobaczysz, jak podłączyć system, aby nie tylko generował
                grafiki, ale też proponował chwytliwe opisy i planował
                publikację na cały tydzień z góry.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-4 text-lg text-zinc-300">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                  Generowanie opisów postów dopasowanych do dania
                </li>
<li className="flex items-start gap-4 text-lg text-zinc-300">
<i className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                  Ustalanie kalendarza publikacji
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-900" id="opinie">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight font-serif mb-6 text-zinc-100">
            Co mówią właściciele lokali?
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60">
<div className="flex items-center gap-1 mb-6 text-amber-500">
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-300 mb-8 italic leading-relaxed">
              "Zawsze miałem problem z systematycznością na Facebooku. Teraz w
              poniedziałek rano klikam kilka razy i mam zaplanowane posty z
              pięknymi zdjęciami naszych burgerów na cały tydzień. Rewelacja."
            </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center font-serif text-xl text-amber-100 border border-zinc-700">
                T
              </div>
<div>
<div className="text-lg font-medium text-zinc-100">Tomasz</div>
<div className="text-base text-zinc-500">
                  Właściciel, Burger House
                </div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60">
<div className="flex items-center gap-1 mb-6 text-amber-500">
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-300 mb-8 italic leading-relaxed">
              "Nasza włoska restauracja nabrała rumieńców w social mediach.
              Szablony są eleganckie i idealnie pasują do naszego klimatu.
              Oszczędzamy na agencji reklamowej grube pieniądze."
            </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center font-serif text-xl text-amber-100 border border-zinc-700">
                A
              </div>
<div>
<div className="text-lg font-medium text-zinc-100">Anna</div>
<div className="text-base text-zinc-500">Manager, Trattoria</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 hidden lg:block">
<div className="flex items-center gap-1 mb-6 text-amber-500">
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-amber-500" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-300 mb-8 italic leading-relaxed">
              "Najlepsze narzędzie dla kawiarni. Wrzucam zdjęcie nowego ciasta,
              a system robi mi relację na insta z ceną i logo. Moi bariści mają
              teraz więcej czasu na parzenie kawy."
            </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center font-serif text-xl text-amber-100 border border-zinc-700">
                M
              </div>
<div>
<div className="text-lg font-medium text-zinc-100">Michał</div>
<div className="text-base text-zinc-500">Właściciel Kawiarni</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-t border-zinc-900 relative" id="cennik">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight font-serif mb-6 text-zinc-100">
            Przejrzysty Cennik
          </h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Wybierz pakiet dopasowany do wielkości Twojego biznesu
            gastronomicznego. Bez ukrytych kosztów.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

<div className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800">
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-2">
              Wersja Start
            </h3>
<p className="text-lg text-zinc-400 mb-8">
              Dla małych lokali i kawiarni, które chcą zautomatyzować podstawy.
            </p>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-5xl font-semibold tracking-tight text-zinc-50">
                199
              </span>
<span className="text-xl text-zinc-500">zł / mies.</span>
</div>
<ul className="space-y-5 mb-10">
<li className="flex items-center gap-4 text-lg text-zinc-300">
<i className="w-5 h-5 text-zinc-500 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
                Dostęp do 50 podstawowych szablonów
              </li>
<li className="flex items-center gap-4 text-lg text-zinc-300">
<i className="w-5 h-5 text-zinc-500 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
                Automatyczne dodawanie logo
              </li>
</ul>
<a className="flex items-center justify-center w-full h-14 rounded-2xl border border-zinc-700 bg-zinc-800 text-zinc-100 text-lg font-medium hover:bg-zinc-700 transition-colors" href="https://cart.easy.tools/checkout/78907920/ksiazka">
              Wybieram Start
            </a>
</div>

<div className="relative p-10 rounded-3xl bg-zinc-900 border-2 border-amber-500/50 shadow-[0_0_40px_-10px_rgba(245,158,11,0.2)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-amber-500 text-zinc-950 text-sm font-semibold tracking-wide rounded-full uppercase">
              Najbardziej opłacalny
            </div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-2">
              Wersja Pro
            </h3>
<p className="text-lg text-zinc-400 mb-8">
              Pełna automatyzacja z wykorzystaniem AI dla wymagających
              restauracji.
            </p>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-5xl font-semibold tracking-tight text-zinc-50">
                399
              </span>
<span className="text-xl text-zinc-500">zł / mies.</span>
</div>
<ul className="space-y-5 mb-10">
<li className="flex items-center gap-4 text-lg text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
                Dostęp do wszystkich 200+ szablonów
              </li>
<li className="flex items-center gap-4 text-lg text-zinc-300">
<i className="w-5 h-5 text-amber-500 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
                Wszystkie formaty (Posty, Stories, Rolki)
              </li>
</ul>
<a className="flex items-center justify-center w-full h-14 rounded-2xl bg-amber-500 text-zinc-950 text-lg font-medium hover:bg-amber-400 transition-colors" href="https://cart.easy.tools/checkout/78907920/ksiazka">
              Wybieram Pro
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-900" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight font-serif mb-6 text-zinc-100">
            Często zadawane pytania
          </h2>
</div>
<div className="space-y-4">

<details className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden open:bg-zinc-900/80 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-xl font-medium text-zinc-100 select-none">
              Czy potrzebuję umiejętności graficznych?
              <span className="ml-6 flex items-center justify-center w-8 h-8 rounded-full border border-zinc-700 group-open:rotate-180 transition-transform bg-zinc-800">
<i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4">
              Absolutnie nie. System został zaprojektowany tak, aby
              zautomatyzować najtrudniejszą część. Wgrywasz zdjęcie swojego
              dania, wpisujesz nazwę i cenę, a my generujemy resztę korzystając
              z profesjonalnych szablonów.
            </div>
</details>

<details className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden open:bg-zinc-900/80 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-xl font-medium text-zinc-100 select-none">
              Jak długo trwa wdrożenie?
              <span className="ml-6 flex items-center justify-center w-8 h-8 rounded-full border border-zinc-700 group-open:rotate-180 transition-transform bg-zinc-800">
<i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4">
              Możesz zacząć generować pierwsze grafiki w ciągu 5 minut od
              założenia konta. Wystarczy dodać swoje logo i wybrać kolory marki,
              a system zapamięta te ustawienia do wszystkich przyszłych
              projektów.
            </div>
</details>

<details className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden open:bg-zinc-900/80 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-xl font-medium text-zinc-100 select-none">
              Czy mogę anulować subskrypcję w dowolnym momencie?
              <span className="ml-6 flex items-center justify-center w-8 h-8 rounded-full border border-zinc-700 group-open:rotate-180 transition-transform bg-zinc-800">
<i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4">
              Tak, nasze pakiety odnawiają się co miesiąc. Nie wymagamy wiązania
              się długoterminową umową. Możesz anulować subskrypcję jednym
              kliknięciem w panelu klienta.
            </div>
</details>
</div>
</div>
</section>

<footer className="mt-auto border-t border-zinc-900 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-amber-500" data-lucide="utensils" strokeWidth="1.5"></i>
<span className="font-serif text-2xl font-medium tracking-tight text-zinc-100">
            GastroAuto
          </span>
</div>
<div className="text-base text-zinc-500">
          © 2024 GastroAuto. Wszelkie prawa zastrzeżone.
        </div>
<div className="flex gap-6 text-base text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#">
            Regulamin
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#">
            Prywatność
          </a>
<a className="hover:text-zinc-100 transition-colors" href="#">Kontakt</a>
</div>
</div>
</footer>

<div className="fixed transition-opacity bg-zinc-950/80 z-[100] pt-4 pr-4 pb-4 pl-4 top-0 right-0 bottom-0 left-0 backdrop-blur-sm items-center justify-center hidden" id="lead-modal">
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden flex flex-col">

<button aria-label="Zamknij" className="absolute top-5 right-5 text-zinc-500 hover:text-zinc-300 transition-colors z-10" id="close-modal" type="button">
<iconify-icon className="" height="28" icon="solar:close-circle-linear" strokeWidth="1.5" style={{color: 'rgb(201, 201, 205)'}} width="28"></iconify-icon>
</button>

<div className="p-8 pb-10" id="form-content">
<div className="mb-8">
<h3 className="text-2xl font-serif font-semibold text-zinc-100 tracking-tight mb-2">
              Zacznij automatyzację
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              Zostaw kontakt. Oddzwonimy do Ciebie z ofertą dopasowaną do
              potrzeb Twojego lokalu.
            </p>
</div>
<form className="space-y-5" id="lead-form">
<div className="">
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">
                Imię
              </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
<iconify-icon height="20" icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl py-3 pl-12 pr-4 text-zinc-100 placeholder-zinc-600 outline-none transition-all text-sm shadow-inner" name="name" placeholder="Jan Kowalski" required="" type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">
                Adres e-mail
              </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl py-3 pl-12 pr-4 text-zinc-100 placeholder-zinc-600 outline-none transition-all text-sm shadow-inner" name="email" placeholder="jan@restauracja.pl" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">
                Numer telefonu
              </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
<iconify-icon height="20" icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl py-3 pl-12 pr-4 text-zinc-100 placeholder-zinc-600 outline-none transition-all text-sm shadow-inner" name="phone" placeholder="+48 000 000 000" required="" type="tel"/>
</div>
</div>
<button className="w-full h-14 mt-6 bg-amber-500 text-zinc-950 rounded-xl font-medium text-sm hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 group" type="submit">
<span id="submit-text">Poproś o wycenę</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" id="submit-icon" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<p className="text-center text-xs text-zinc-500 mt-4 flex items-center justify-center gap-1.5">
<iconify-icon height="14" icon="solar:lock-linear" width="14"></iconify-icon>
              Twoje dane są u nas w 100% bezpieczne.
            </p>
</form>
</div>

<div className="p-8 hidden flex-col items-center text-center justify-center py-20" id="success-content">
<div className="w-20 h-20 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full flex items-center justify-center mb-6">
<iconify-icon height="40" icon="solar:check-circle-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold text-zinc-100 tracking-tight mb-3">
            Wszystko gotowe!
          </h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-8">
            Dziękujemy za kontakt. Pomyślnie zapisaliśmy Twoje zgłoszenie.
            Skontaktujemy się z Tobą najszybciej jak to możliwe.
          </p>
<button className="px-8 py-3.5 border border-zinc-700 bg-zinc-800 text-zinc-100 rounded-xl text-sm font-medium hover:bg-zinc-700 transition-colors" id="close-success" type="button">
            Wróć do strony
          </button>
</div>
</div>
</div>
<div className="fixed inset-0 z-[100] hidden items-center justify-center backdrop-blur-sm bg-zinc-950/80 p-4 transition-opacity" id="tally-modal">
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-md shadow-2xl relative overflow-hidden flex flex-col pt-12 px-4 pb-4">
<button aria-label="Zamknij" className="absolute top-5 right-5 text-zinc-500 hover:text-zinc-300 transition-colors z-10" id="close-tally-modal" type="button">
<iconify-icon height="28" icon="solar:close-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<iframe data-tally-src="https://tally.so/embed/GxB9aQ?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;dynamicHeight=1" frameborder="0" height="374" loading="lazy" marginheight="0" marginwidth="0" title="testowyformularz" width="100%"></iframe>
</div>
</div>


    </>
  );
}
