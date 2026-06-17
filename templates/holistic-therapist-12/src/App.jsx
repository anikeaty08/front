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
japandi: {
white: '#F7F3F0',
sand: '#E3D9CF',
olive: '#8A8D7A',
terracotta: '#C57D5D',
stone: '#8E918F',
dark: '#33322E'
}
},
fontFamily: {
serif: ['Instrument Serif', 'serif'],
sans: ['Plus Jakarta Sans', 'sans-serif'],
}
}
}
}



      // Mobile menu functionality
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuOverlay = document.getElementById('menu-overlay');
      const menuIcon = document.getElementById('menu-icon');
      const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

      function toggleMenu() {
          mobileMenu.classList.toggle('open');
          menuOverlay.classList.toggle('open');

          // Toggle icon between menu and X
          if (mobileMenu.classList.contains('open')) {
              menuIcon.setAttribute('icon', 'lucide:x');
          } else {
              menuIcon.setAttribute('icon', 'lucide:menu');
          }
      }

      mobileMenuButton.addEventListener('click', toggleMenu);
      menuOverlay.addEventListener('click', toggleMenu);

      // Close menu when clicking on a link
      mobileMenuLinks.forEach(link => {
          link.addEventListener('click', () => {
              toggleMenu();
          });
      });

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
              toggleMenu();
          }
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
      
<nav className="fixed top-0 w-full z-50 bg-japandi-white/80 backdrop-blur-md border-b border-japandi-sand/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-medium tracking-widest uppercase text-japandi-dark hover:text-japandi-terracotta transition-colors" href="#">
          Hania Kozubal
        </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-japandi-stone">
<a className="hover:text-japandi-dark transition-colors" href="#manifest">
            Manifest
          </a>
<a className="hover:text-japandi-dark transition-colors" href="#gabinet">
            Gabinet
          </a>
<a className="hover:text-japandi-dark transition-colors" href="#warsztaty">
            Warsztaty
          </a>
<a className="hover:text-japandi-dark transition-colors" href="#wspolpraca">
            Współpraca
          </a>
<a className="hover:text-japandi-dark transition-colors" href="#o-mnie">
            O mnie
          </a>
<a className="px-4 py-2 bg-japandi-dark text-japandi-white rounded-full hover:bg-japandi-terracotta transition-colors" href="#kontakt">
            Kontakt
          </a>
</div>
<button className="md:hidden text-japandi-dark z-50" id="mobile-menu-button">
<iconify-icon icon="lucide:menu" id="menu-icon" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-japandi-dark/50 z-40" id="menu-overlay"></div>

<div className="fixed top-0 right-0 h-full w-64 bg-japandi-white shadow-2xl z-40" id="mobile-menu">
<div className="flex flex-col h-full pt-20 px-6">
<nav className="flex flex-col gap-4 text-sm font-medium text-japandi-stone">
<a className="mobile-menu-link hover:text-japandi-dark transition-colors py-2" href="#manifest">
            Manifest
          </a>
<a className="mobile-menu-link hover:text-japandi-dark transition-colors py-2" href="#gabinet">
            Gabinet
          </a>
<a className="mobile-menu-link hover:text-japandi-dark transition-colors py-2" href="#warsztaty">
            Warsztaty
          </a>
<a className="mobile-menu-link hover:text-japandi-dark transition-colors py-2" href="#wspolpraca">
            Współpraca
          </a>
<a className="mobile-menu-link hover:text-japandi-dark transition-colors py-2" href="#o-mnie">
            O mnie
          </a>
<a className="mobile-menu-link mt-4 px-4 py-2 bg-japandi-dark text-japandi-white rounded-full hover:bg-japandi-terracotta transition-colors text-center" href="#kontakt">
            Kontakt
          </a>
</nav>
</div>
</div>
<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="space-y-8">
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-japandi-dark leading-[1.0]">
            Zdrowie odzyskiwane
            <br className="hidden md:block"/>
            z
            <span className="italic text-japandi-terracotta">miękkością</span>
            .
          </h1>
<p className="text-lg md:text-xl text-japandi-stone font-light leading-relaxed max-w-md">
            Wierzę, że dbanie o siebie powinno przynosić ulgę, a nie kolejny
            stres. Medycyna Chińska bez lukru, ale z ogromną czułością dla
            Twojego czasu i możliwości.
          </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-japandi-dark text-japandi-white text-sm font-medium rounded-lg hover:bg-japandi-terracotta transition-all hover:translate-y-[-2px]" href="#gabinet">
              Poznaj moje podejście
              <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-japandi-sand text-japandi-stone text-sm font-medium rounded-lg hover:bg-japandi-sand transition-all" href="#kontakt">
              Zacznijmy rozmowę
            </a>
</div>
</div>
<div className="relative aspect-[4/5] md:aspect-square bg-japandi-sand rounded-2xl overflow-hidden shadow-xl shadow-japandi-sand/50">
<img alt="Hania Kozubal" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://haniakozubal.pl/images/hania.webp"/>
</div>
</div>
</header>
<section className="py-24 bg-japandi-sand/20 border-y border-japandi-sand/60" id="manifest">
<div className="max-w-3xl mx-auto px-6 text-center space-y-8">
<iconify-icon className="text-japandi-terracotta" icon="lucide:sparkles" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight leading-relaxed text-japandi-dark italic">
          "Troska o zdrowie to nie walka,
          <br className="hidden md:block"/>
          to miłość do siebie i proste nawyki, które wspierają Cię na co dzień."
        </h2>
</div>
</section>
<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-6">
<div className="group p-8 rounded-xl border border-japandi-sand bg-white hover:border-japandi-terracotta hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 bg-japandi-white rounded-lg flex items-center justify-center mb-6 text-japandi-olive">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-normal mb-2 text-japandi-dark">
            Gabinet i Terapia
          </h3>
<p className="text-sm text-japandi-stone leading-relaxed">
            Indywidualne prowadzenie oparte na diecie i ziołach. Daję Ci
            narzędzia, byś sam decydował o swoim procesie zdrowienia.
          </p>
<a className="mt-6 inline-flex items-center text-xs font-medium text-japandi-terracotta hover:text-japandi-dark transition-colors" href="#gabinet">
            Jak pracuję
            <iconify-icon className="ml-1" icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
</div>
<div className="group p-8 rounded-xl border border-japandi-sand bg-white hover:border-japandi-terracotta hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 bg-japandi-white rounded-lg flex items-center justify-center mb-6 text-japandi-terracotta">
<iconify-icon icon="lucide:soup" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-normal mb-2 text-japandi-dark">
            Warsztaty dla zabieganych
          </h3>
<p className="text-sm text-japandi-stone leading-relaxed">
            Gotowanie z "niczego" w 5 minut. Odczarowujemy mit, że zdrowe
            jedzenie wymaga godzin w kuchni.
          </p>
<a className="mt-6 inline-flex items-center text-xs font-medium text-japandi-terracotta hover:text-japandi-dark transition-colors" href="#warsztaty">
            Uprość swoją kuchnię
            <iconify-icon className="ml-1" icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
</div>
<div className="group p-8 rounded-xl border border-japandi-sand bg-white hover:border-japandi-terracotta hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 bg-japandi-white rounded-lg flex items-center justify-center mb-6 text-japandi-stone">
<iconify-icon icon="lucide:map" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-normal mb-2 text-japandi-dark">
            Współpraca na wyjazdach
          </h3>
<p className="text-sm text-japandi-stone leading-relaxed">
            Therapeutic Head Chef dla Twojego retreatu. Karmię ciało i uczę
            Twoich gości zdrowych nawyków bez kompromisów.
          </p>
<a className="mt-6 inline-flex items-center text-xs font-medium text-japandi-terracotta hover:text-japandi-dark transition-colors" href="#wspolpraca">
            Oferta dla organizatorów
            <iconify-icon className="ml-1" icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="py-24 px-6 bg-white border-t border-japandi-sand" id="gabinet">
<div className="max-w-4xl mx-auto">
<span className="text-xs font-bold tracking-widest text-japandi-terracotta uppercase mb-4 block">
          Twoja droga do zdrowia
        </span>
<h2 className="text-4xl md:text-5xl font-normal text-japandi-dark mb-12">
          Zrozumienie zamiast nakazów.
          <br/>
          Hierarchia mojego wsparcia.
        </h2>
<div className="grid md:grid-cols-2 gap-12 items-start">
<div className="space-y-6 text-japandi-stone font-light leading-relaxed">
<p>
              Nie chcę być wyrocznią, od której jesteś zależny. Moim celem jest
              przekazanie Ci narzędzi, dzięki którym poczujesz, że to Ty
              decydujesz o swoim zdrowiu. Pomagam Ci zrozumieć procesy
              zachodzące w Twoim organizmie.
            </p>
<p>
              Pracujemy miękko, ale skutecznie, bazując na sprawdzonych filarach
              Tradycyjnej Medycyny Chińskiej. Nawet jeśli spotkamy się tylko
              raz, wyjdziesz z wiedzą, która zostanie z Tobą na lata.
            </p>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-japandi-dark text-white flex items-center justify-center text-sm font-medium">
                1
              </div>
<div>
<h4 className="text-xl font-normal text-japandi-dark mb-1">
                  Dieta (Fundament)
                </h4>
<p className="text-sm text-japandi-stone">
                  Najważniejszy element. Uczymy się, jak jedzenie może stać się
                  Twoim lekarstwem bez narzucania sobie nierealnych rygorów.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-japandi-terracotta text-white flex items-center justify-center text-sm font-medium">
                2
              </div>
<div>
<h4 className="text-xl font-normal text-japandi-dark mb-1">
                  Zioła (Siła Równowagi)
                </h4>
<p className="text-sm text-japandi-stone">
                  Przygotowuję indywidualne receptury, które realizujesz w
                  wyspecjalizowanej zielarni.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-japandi-olive text-white flex items-center justify-center text-sm font-medium">
                3
              </div>
<div>
<h4 className="text-xl font-normal text-japandi-dark mb-1">
                  Akupunktura, Moksa, Bańki, Guasha
                </h4>
<p className="text-sm text-japandi-stone">
                  "Wisienka na torcie". Zabiegi wspierające, które przyspieszają
                  procesy zdrowienia i udrażniają energię.
                </p>
</div>
</div>
</div>
</div>
<div className="mt-16 max-w-3xl mx-auto">
<h3 className="text-3xl font-normal text-japandi-dark mb-8 text-center tracking-tight">
            Cennik wizyt
          </h3>
<div className="bg-japandi-white rounded-xl border border-japandi-sand overflow-hidden shadow-sm">
<table className="w-full text-left text-sm md:text-base">
<tbody className="divide-y divide-japandi-sand/50">
<tr className="group hover:bg-japandi-sand/20 transition-colors">
<td className="px-6 py-4 md:px-8 md:py-5 font-medium text-japandi-dark">
                    Pierwsza wizyta
                  </td>
<td className="px-6 py-4 md:px-8 md:py-5 text-right font-semibold text-japandi-terracotta whitespace-nowrap">
                    350 zł
                  </td>
</tr>
<tr className="group hover:bg-japandi-sand/20 transition-colors">
<td className="px-6 py-4 md:px-8 md:py-5 font-medium text-japandi-dark">
                    Kolejne wizyty
                  </td>
<td className="px-6 py-4 md:px-8 md:py-5 text-right font-semibold text-japandi-terracotta whitespace-nowrap">
                    250 zł
                  </td>
</tr>
<tr className="group hover:bg-japandi-sand/20 transition-colors">
<td className="px-6 py-4 md:px-8 md:py-5 font-medium text-japandi-dark">
                    Akupunktura / Moksa / Bańki
                  </td>
<td className="px-6 py-4 md:px-8 md:py-5 text-right font-semibold text-japandi-terracotta whitespace-nowrap">
                    200 zł
                  </td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="mt-16 p-8 bg-japandi-white border border-japandi-sand rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-center md:text-left">
<h4 className="text-xl font-normal text-japandi-dark">
              Zacznijmy od diagnozy
            </h4>
<p className="text-sm text-japandi-stone">
              Pracuję butikowo, szanując czas każdego pacjenta.
            </p>
</div>
<div className="flex gap-4">
<a className="flex items-center gap-2 px-4 py-2 bg-white border border-japandi-sand rounded-lg text-sm text-japandi-dark hover:border-japandi-terracotta transition-colors" href="tel:+48662244247">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon>
              Telefon
            </a>
<a className="flex items-center gap-2 px-4 py-2 bg-japandi-dark text-white rounded-lg text-sm hover:bg-japandi-terracotta transition-colors" href="mailto:hanna.kozubal.tcm@gmail.com">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
              E-mail
            </a>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 bg-japandi-white" id="warsztaty">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="relative bg-white p-10 rounded-2xl border border-japandi-sand shadow-sm">
<h4 className="text-sm font-bold uppercase tracking-widest text-japandi-terracotta mb-6">
              Czego się nauczysz?
            </h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-japandi-olive mt-1" icon="lucide:check-circle" width="18"></iconify-icon>
<p className="text-sm text-japandi-stone">
                  Gotowania z tego, co akurat masz w lodówce.
                </p>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-japandi-olive mt-1" icon="lucide:check-circle" width="18"></iconify-icon>
<p className="text-sm text-japandi-stone">
                  Przygotowywania posiłków TCM w mniej niż 15 minut.
                </p>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-japandi-olive mt-1" icon="lucide:check-circle" width="18"></iconify-icon>
<p className="text-sm text-japandi-stone">
                  Dbania o zdrowie psychiczne poprzez relację z jedzeniem.
                </p>
</li>
</ul>
</div>
</div>
<div className="order-1 md:order-2 space-y-6">
<span className="text-xs font-bold tracking-widest text-japandi-terracotta uppercase">
            Miękki Skill: Gotowanie
          </span>
<h2 className="text-4xl md:text-5xl font-normal text-japandi-dark leading-tight">
            Zdrowe jedzenie to nie wyczyn.
            <br/>
<span className="text-japandi-stone italic">
              To część Twojego życia.
            </span>
</h2>
<p className="text-japandi-stone font-light leading-relaxed">
            Wielu z nas myśli, że zdrowa dieta to restrykcje, detoksy i
            skomplikowane techniki. Ja chcę ten mit odczarować. Dla mnie
            gotowanie to narzędzie, które ma Ci ułatwiać życie, a nie je
            utrudniać.
          </p>
<p className="text-japandi-stone font-light leading-relaxed">
            Moje warsztaty są dla ludzi zabieganych, którzy żyją w stresie i
            mają mało czasu. Uczę jak wprowadzać zmiany miękko, z miłością do
            siebie, traktując kuchnię jako przestrzeń regeneracji, a nie kolejne
            zadanie do odhaczenia.
          </p>
<div className="pt-4">
<a className="text-sm font-medium text-japandi-dark border-b-2 border-japandi-terracotta pb-1 hover:text-japandi-terracotta transition-colors" href="#kontakt">
              Zapytaj o najbliższe warsztaty
            </a>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 bg-japandi-dark text-japandi-white" id="wspolpraca">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 mb-16">
<div>
<span className="text-xs font-bold tracking-widest text-japandi-terracotta uppercase mb-4 block">
              Oferta Premium dla Wyjazdów
            </span>
<h2 className="text-4xl font-normal italic mb-6 text-japandi-white">
              Ekspertka w Twojej kuchni.
              <br/>
              Bez kompromisów.
            </h2>
<p className="text-japandi-sand font-light leading-relaxed max-w-md">
              Jako Therapeutic Head Chef biorę pełną odpowiedzialność za menu i
              jakość składników. Gotuję wyłącznie według zasad Medycyny
              Chińskiej.
            </p>
</div>
<div className="flex items-end justify-start md:justify-end">
<a className="px-6 py-3 bg-japandi-terracotta text-white text-sm font-medium rounded-lg hover:bg-japandi-sand hover:text-japandi-dark transition-colors" href="mailto:hanna.kozubal.tcm@gmail.com">
              Zapytaj o dostępność
            </a>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 border-t border-japandi-stone/30 pt-12">
<div>
<h3 className="text-xl font-normal mb-3">Pełna Autonomia</h3>
<p className="text-sm text-japandi-sand leading-relaxed">
              To ja ustalam menu bazując na mojej wiedzy terapeutycznej. Nie
              negocjuję zasad zdrowego żywienia.
            </p>
</div>
<div>
<h3 className="text-xl font-normal mb-3">Gotowanie i Nauka</h3>
<p className="text-sm text-japandi-sand leading-relaxed">
              Mogę uczyć Twoich uczestników, jak przygotowywać te dania po
              powrocie do domu, podnosząc wartość wydarzenia.
            </p>
</div>
<div>
<h3 className="text-xl font-normal mb-3">Profesjonalizm</h3>
<p className="text-sm text-japandi-sand leading-relaxed">
              Gwarantuję najwyższą jakość serwisu, która staje się integralną
              częścią procesu zdrowienia uczestników.
            </p>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 max-w-5xl mx-auto" id="o-mnie">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/3 aspect-[3/4] bg-japandi-sand rounded-lg overflow-hidden">
<img alt="Portret Hania Kozubal" className="object-cover w-full h-full" src="https://haniakozubal.pl/images/hania2.webp"/>
</div>
<div className="w-full md:w-2/3 space-y-6">
<h2 className="text-4xl font-normal text-japandi-dark">
            W kontrze do presji zdrowia.
          </h2>
<div className="space-y-4 text-japandi-stone font-light leading-relaxed">
<p>
              Na Zachodzie bycie zdrowym stało się kolejnym zadaniem do
              odhaczenia na liście. Kolejnym wyzwaniem, które budzi napięcie.
              Moje podejście jest inne.
            </p>
<p>
              Wierzę, że zdrowie psychiczne jest nierozerwalne z fizycznym.
              Jeśli zmuszasz się do jedzenia jarmużu w totalnym stresie, nie
              będzie on dla Ciebie zdrowy.
            </p>
<p>
              Jako lekarz medycyny chińskiej i kucharka łączę starożytną logikę
              natury z wyzwaniami życia w mieście. Szukam rozwiązań, które dają
              przestrzeń na oddech.
            </p>
</div>
</div>
</div>
</section>
<footer className="bg-japandi-sand/30 py-24 px-6 border-t border-japandi-sand" id="kontakt">
<div className="max-w-2xl mx-auto text-center space-y-8">
<h2 className="text-4xl font-normal italic text-japandi-dark">
          Rozmowa to początek procesu.
        </h2>
<p className="text-japandi-stone font-light">
          Pracuję osobiście i dbam o relację z każdym klientem. Zrezygnowałam z
          systemów rezerwacji na rzecz bezpośredniego kontaktu. Zapraszam do
          rozmowy.
        </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-8">
<a className="flex flex-col items-center gap-2 group" href="tel:+48662244247">
<div className="w-12 h-12 bg-white border border-japandi-sand rounded-full flex items-center justify-center text-japandi-dark group-hover:bg-japandi-dark group-hover:text-white transition-all">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium">+48 662 244 247</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="mailto:hanna.kozubal.tcm@gmail.com">
<div className="w-12 h-12 bg-white border border-japandi-sand rounded-full flex items-center justify-center text-japandi-dark group-hover:bg-japandi-dark group-hover:text-white transition-all">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium">hanna.kozubal.tcm@gmail.com</span>
</a>
</div>
<div className="pt-16 text-xs text-japandi-stone">
          © 2026 Hania Kozubal. Wszystkie prawa zastrzeżone. Powered by
          <a className="hover:text-japandi-terracotta transition-colors" href="https://heartmade.pl" rel="nofollow">
            Heartmade.pl
          </a>
</div>
</div>
</footer>


    </>
  );
}
