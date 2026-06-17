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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9620466c-3d56-4af9-b90c-e196df3970db_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="paper-texture"></div>

<nav className="fixed w-full z-40 top-0 transition-all duration-300 backdrop-blur-md bg-[#F9F7F2]/80 border-b border-[#EBE8E0]">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-3xl font-normal text-[#2D2A26] tracking-tight font-serif" href="#">
          Sylwia Kępa
        </a>

<div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-[#6C6661]">
<a className="hover:text-[#6B9080] transition-colors" href="#about">
            O mnie
          </a>
<a className="hover:text-[#6B9080] transition-colors" href="#offer">
            Oferta
          </a>
<a className="hover:text-[#6B9080] transition-colors" href="#contact">
            Kontakt
          </a>
</div>
<div className="hidden md:block">
<a className="hover:bg-[#557568] transition-colors duration-300 shadow-[#6B9080]/20 text-sm font-medium text-white bg-[#6B9080] rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 shadow-sm" href="#contact" style={{}}>
            Przyjedź na warsztaty
          </a>
</div>

<button className="md:hidden text-[#2D2A26] p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="min-h-screen flex overflow-hidden pt-20 relative items-center justify-center">

<div className="watercolor-bg"></div>
<div className="floral-overlay"></div>

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
<div className="absolute -top-[10%] -left-[10%] w-[50%] h-[60%] bg-[#6B9080]/10 rounded-full blur-[100px]"></div>
<div className="absolute top-[20%] -right-[10%] w-[60%] h-[70%] bg-[#D6C6C6]/20 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-[20%] w-[40%] h-[40%] bg-[#E8E1D9]/40 rounded-full blur-[80px]"></div>
</div>
<div className="z-10 fade-in-up text-center max-w-5xl mt-10 mr-auto ml-auto pr-6 pl-6">
<span className="inline-block text-xs md:text-sm font-medium tracking-[0.2em] text-[#6B9080] uppercase mb-6">
          Holistyczna Seksuolożka i Edukatorka
        </span>
<h1 className="md:text-7xl lg:text-[5.5rem] leading-[1.05] text-5xl text-[#2D2A26] tracking-tight font-serif mb-8">
          Odkryj swoją
          <span className="bg-clip-text font-normal italic text-transparent bg-gradient-to-r from-[#6B9080] to-[#D198A6]">
            przyjemność
          </span>
<br/>
</h1>
<p className="text-lg md:text-xl font-light text-[#6C6661] max-w-2xl mx-auto mb-12 leading-relaxed">
          Prowadzę przez świat seksualności z empatią i wiedzą. Dla kobiet, par
          i mężczyzn szukających głębszego połączenia ze sobą i partnerem.
        </p>
<div className="flex flex-col sm:flex-row gap-5 mb-16 gap-x-5 gap-y-5 items-center justify-center">
<a className="w-full sm:w-auto px-8 py-4 bg-[#6B9080] text-white rounded-lg font-medium hover:bg-[#557568] hover:shadow-lg hover:shadow-[#6B9080]/20 transition-all duration-300 flex items-center justify-center gap-2" href="#contact">
<span className="">Przyjedź na warsztaty</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="sm:w-auto hover:bg-[#6B9080]/5 transition-colors duration-300 font-medium text-[#557568] text-center w-full border-[#6B9080] border rounded-lg pt-4 pr-8 pb-4 pl-8" href="#about" style={{}}>
            Umów konsultację
          </a>
</div>

</div>
</header>

<section className="py-24 md:py-32 relative bg-white/40" id="about">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative order-2 md:order-1">

<div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl shadow-[#6B9080]/10">
<div className="absolute inset-0 bg-[#E8E6E1]"></div>
<img alt="Portrait" className="sepia-[.15] opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/becc3af2-b132-478b-a0e8-60cec314f9b8_1600w.webp"/>
</div>

<div className="absolute -top-4 -left-4 w-full h-full border border-[#6B9080]/30 rounded-2xl -z-10"></div>
</div>
<div className="order-1 md:order-2">
<h2 className="font-serif text-4xl md:text-5xl text-[#2D2A26] mb-8 tracking-tight leading-tight">
            Seksualność to energia życiowa,
            <br/>
            nie powód do wstydu.
          </h2>
<div className="space-y-6 text-[#6C6661] font-light text-lg leading-relaxed">
<p className="">
              Cześć, jestem Sylwia. Tworzę miejsce, gdzie wiedza spotyka się z
              głębokim zrozumieniem. Moją misją jest odczarowanie tematów tabu i
              przywrócenie naturalnej radości z bliskości.
            </p>
<p className="">
              Pracuję holistycznie, łącząc rzetelną wiedzę seksuologiczną z
              pracą z ciałem i emocjami. Wierzę, że każda osoba zasługuje na
              satysfakcjonujące życie intymne, wolne od presji i lęku.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-[#EBE8E0]">
<div className="flex items-start gap-3">
<div className="p-2 bg-[#6B9080]/10 rounded-full text-[#6B9080]">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div className="">
<h4 className="font-serif text-[#2D2A26] text-lg mb-1">
                    Etyka i dyskrecja
                  </h4>
<p className="text-sm">Pełne poczucie bezpieczeństwa.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 bg-[#D6C6C6]/20 rounded-full text-[#8C7A7A]">
<i className="w-5 h-5" data-lucide="heart-handshake"></i>
</div>
<div className="">
<h4 className="font-serif text-[#2D2A26] text-lg mb-1">
                    Empatia
                  </h4>
<p className="text-sm">Przestrzeń bez oceniania.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="offer">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-[#6B9080] text-sm font-medium tracking-widest uppercase mb-3 block">
            Oferta
          </span>
<h2 className="font-serif text-4xl text-[#2D2A26] mb-4 tracking-tight">
            Jak mogę Ci pomóc?
          </h2>
<p className="text-[#6C6661] font-light text-lg">
            Wybierz ścieżkę, która najlepiej odpowiada Twoim potrzebom.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-2xl border border-[#EBE8E0] hover:border-[#6B9080]/40 hover:shadow-xl hover:shadow-[#6B9080]/5 transition-all duration-300 relative overflow-hidden">
<div className="w-14 h-14 bg-[#6B9080]/10 rounded-full flex items-center justify-center text-[#6B9080] mb-8 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="user"></i>
</div>
<h3 className="text-2xl text-[#2D2A26] font-serif mb-4" style={{}}>
              Konsultacje On-line
            </h3>
<p className="text-[#6C6661] text-sm mb-8 leading-relaxed font-light min-h-[80px]">
              Dla kobiet pragnących zrozumieć swoje ciało, libido i potrzeby.
              Praca nad blokadami, wstydem i budowaniem pewności siebie.
            </p>
<a className="inline-flex items-center text-sm font-medium text-[#2D2A26] group-hover:text-[#6B9080] transition-colors pb-1 border-b border-transparent group-hover:border-[#6B9080]" href="#">
              Umów wizytę
              <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group hover:border-[#C2B280] hover:shadow-xl hover:shadow-[#C2B280]/10 transition-all duration-300 overflow-hidden bg-white border-[#EBE8E0] border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="w-14 h-14 bg-[#C2B280]/20 rounded-full flex items-center justify-center text-[#8F8155] mb-8 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="book-open"></i>
</div>
<h3 className="font-serif text-2xl text-[#2D2A26] mb-4">
              Warsztaty i Wyjazdy
            </h3>
<p className="text-[#6C6661] text-sm mb-8 leading-relaxed font-light min-h-[80px]">
              Grupowe spotkania dla kobiet i kręgi. Edukacja w bezpiecznej
              atmosferze, praca z ciałem, oddechem i seksualnością.
            </p>
<a className="inline-flex items-center text-sm font-medium text-[#2D2A26] group-hover:text-[#8F8155] transition-colors pb-1 border-b border-transparent group-hover:border-[#8F8155]" href="#">
              Sprawdź terminy
              <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-[#EBE8E0] hover:border-[#D6C6C6] hover:shadow-xl hover:shadow-[#D6C6C6]/10 transition-all duration-300 relative overflow-hidden">
<div className="w-14 h-14 bg-[#D6C6C6]/20 rounded-full flex items-center justify-center text-[#8C7A7A] mb-8 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="users"></i>
</div>
<h3 className="text-2xl text-[#2D2A26] font-serif mb-4" style={{}}>
              Oferta dla Par
            </h3>
<p className="leading-relaxed min-h-[80px] text-sm font-light text-[#6C6661] mb-8">
              SAME PRZYJEMNOŚCI. Przestrzeń dla dwojga. Odbudowa intymności,
              komunikacja potrzeb, radzenie sobie z różnicami w libido i
              kryzysami.
            </p>
<a className="inline-flex items-center group-hover:text-[#8C7A7A] transition-colors group-hover:border-[#8C7A7A] text-sm font-medium text-[#2D2A26] border-transparent border-b pb-1" href="#">
              Dowiedz się wiecej
            </a>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#6B9080]/5 border-[#6B9080]/10 pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<h2 className="font-serif text-3xl md:text-4xl text-[#2D2A26] mb-4 tracking-tight">
            Gotowa na zmianę?
          </h2>
<p className="text-[#6C6661] font-light mb-8 leading-relaxed">
            Nie musisz czekać. Sprawdź dostępność w kalendarzu i wybierz termin,
            który Ci odpowiada. Bez dzwonienia, w pełni dyskretnie.
          </p>
<div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-[#557568]">
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock"></i>
              50 minut
            </span>
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="video"></i>
              Online lub Gabinet
            </span>
</div>
</div>
<div className="md:w-1/2 w-full bg-[#F9F7F2] p-8 rounded-2xl shadow-sm border border-[#EBE8E0]">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EBE8E0]">
<span className="text-xl text-[#2D2A26] font-serif" style={{}}>
              Najbliższe warsztaty
            </span>
<span className="text-xs font-semibold text-[#557568] bg-[#6B9080]/10 px-2.5 py-1 rounded">
              Dostępny
            </span>
</div>
<div className="space-y-3">
<button className="w-full text-left px-4 py-3.5 rounded-lg border border-[#EBE8E0] bg-white hover:border-[#6B9080] hover:bg-[#6B9080]/5 transition-all flex justify-between group">
<span className="text-[#6C6661] group-hover:text-[#2D2A26]">
                Jutro, 14:00
              </span>
<i className="w-4 h-4 text-[#C2B280] group-hover:text-[#6B9080]" data-lucide="chevron-right"></i>
</button>
<button className="w-full text-left px-4 py-3.5 rounded-lg border border-[#EBE8E0] bg-white hover:border-[#6B9080] hover:bg-[#6B9080]/5 transition-all flex justify-between group">
<span className="text-[#6C6661] group-hover:text-[#2D2A26]">
                Jutro, 16:30
              </span>
<i className="w-4 h-4 text-[#C2B280] group-hover:text-[#6B9080]" data-lucide="chevron-right"></i>
</button>
</div>
<button className="w-full mt-6 py-3.5 bg-[#2D2A26] text-white rounded-lg hover:bg-[#6B9080] transition-colors font-medium">
            Zobacz pełny kalendarz
          </button>
</div>
</div>
</section>


<section className="py-24 relative overflow-hidden bg-white">

<div className="absolute right-0 top-0 w-64 h-64 bg-[#6B9080]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute left-0 bottom-0 w-64 h-64 bg-[#D6C6C6]/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
<div className="max-w-xl mx-auto px-6 relative z-10 text-center">
<div className="w-12 h-12 bg-[#F9F7F2] rounded-full flex items-center justify-center mx-auto mb-6 text-[#6B9080] shadow-sm">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<h2 className="font-serif text-3xl text-[#2D2A26] mb-4 tracking-tight">
          Soczyste Listy
        </h2>
<p className="text-[#6C6661] font-light mb-8">
          Dołącz do newslettera. Otrzymasz dawkę wiedzy, inspiracji i informacje
          o nowych warsztatach. Bez spamu, tylko wartościowe treści.
        </p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-[#F9F7F2] border border-[#EBE8E0] text-[#2D2A26] text-sm rounded-lg focus:ring-1 focus:ring-[#6B9080] focus:border-[#6B9080] block w-full p-3.5 placeholder-[#A09A95] outline-none transition-shadow" placeholder="Twój adres email" type="email"/>
<button className="bg-[#2D2A26] text-white font-medium rounded-lg text-sm px-6 py-3.5 hover:bg-[#6B9080] transition-colors" type="button">
            Zapisz mnie
          </button>
</form>
<p className="text-xs text-[#A09A95] mt-4">
          Szanuję Twoją prywatność. Możesz wypisać się w każdej chwili.
        </p>
</div>
</section>

<footer className="bg-[#F9F7F2] border-[#EBE8E0] border-t pt-16 pb-8">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="font-serif text-2xl tracking-tight text-[#2D2A26] block mb-6" href="#">
              Sylwia Kępa
            </a>
<p className="text-[#6C6661] font-light text-sm max-w-xs leading-relaxed">
              Holistyczna seksuolożka i pedagożka. Tworzę przestrzeń wolną od
              wstydu, pełną wiedzy i empatii.
            </p>
</div>
<div>
<h4 className="font-serif text-[#2D2A26] text-lg mb-4">Oferta</h4>
<ul className="space-y-2 text-sm text-[#6C6661] font-light">
<li>
<a className="hover:text-[#6B9080] transition-colors" href="#">
                  Konsultacje indywidualne
                </a>
</li>
<li>
<a className="hover:text-[#6B9080] transition-colors" href="#">
                  Terapia dla par
                </a>
</li>
<li>
<a className="hover:text-[#6B9080] transition-colors" href="#">
                  Warsztaty
                </a>
</li>
<li>
<a className="hover:text-[#6B9080] transition-colors" href="#">
                  Wyjazdy
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-serif text-[#2D2A26] text-lg mb-4">Kontakt</h4>
<ul className="space-y-2 text-sm text-[#6C6661] font-light">
<li className="">
<a className="hover:text-[#6B9080] transition-colors" href="mailto:kontakt@sylwiakepa.pl">
                  kontakt@sylwiakepa.pl
                </a>
</li>
<li className="flex gap-4 mt-4 gap-x-4 gap-y-4">
<a className="text-[#A09A95] hover:text-[#6B9080] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-[#A09A95] hover:text-[#6B9080] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-[#EBE8E0] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#A09A95] font-light">
<p>© 2023 Sylwia Kępa. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#6C6661]" href="#">Polityka Prywatności</a>
<a className="hover:text-[#6C6661]" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
