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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
        // Animacja powitalna po załadowaniu
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';

        // Fade-up hero content
        setTimeout(() => {
            const heroContent = document.getElementById('hero-content');
            const heroImage = document.getElementById('hero-image');
            if (heroContent) heroContent.classList.remove('opacity-0', 'translate-y-5');
            if (heroImage) heroImage.classList.remove('opacity-0', 'translate-y-5');
        }, 100);

        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const iconOpen = document.getElementById('menu-icon-open');
        const iconClose = document.getElementById('menu-icon-close');

        function openMenu() {
          mobileMenu.classList.remove('hidden');
          mobileMenu.classList.add('flex');
          iconOpen.classList.add('hidden');
          iconClose.classList.remove('hidden');

          document.documentElement.style.overflow = 'hidden';
          document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');

          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
        }

        function toggleMenu() {
          if (mobileMenu.classList.contains('hidden')) {
            openMenu();
          } else {
            closeMenu();
          }
        }

        if (mobileMenuBtn) {
          mobileMenuBtn.addEventListener('click', toggleMenu);
        }

        document.querySelectorAll('.mobile-link').forEach(link => {
          link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href && href.startsWith('#')) {
              e.preventDefault();
              closeMenu();

              const target = document.querySelector(href);
              if (target) {
                setTimeout(() => {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  history.replaceState(null, '', href);
                }, 100);
              }
              return;
            }

            closeMenu();
          });
        });
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
      

<nav className="fixed transition-all duration-300 bg-white/90 w-full z-50 border-gray-100 border-b top-0 backdrop-blur-md">
<div className="md:px-12 lg:px-24 flex z-50 h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">
<a className="flex items-center gap-3 group" href="#top">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:heart-pulse-linear" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="leading-none text-lg font-semibold text-[#1A1A1A] tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              Mikrokrążenie+
            </span>
</div>
</a>
<div className="hidden lg:flex text-sm font-medium text-slate-600 gap-x-8 gap-y-8 items-center">
<a className="hover:text-slate-900 transition-colors" href="#education">
            Jak działa
          </a>
<a className="hover:text-slate-900 transition-colors" href="#problem">
            Dla kogo
          </a>
<a className="hover:text-slate-900 transition-colors" href="#solution">
            BEMER
          </a>
<a className="hover:text-slate-900 transition-colors" href="#stories">
            Historie
          </a>
<a className="hover:text-[#E65F00] transition-colors font-semibold text-[#FF6A00]" href="./wiedza.html">
            Wiedza
          </a>
</div>
<div className="hidden md:flex gap-x-4">
<a className="flex items-center gap-2 text-sm font-semibold text-white bg-[#FF6A00] hover:bg-[#E65F00] rounded-full py-2.5 px-6 shadow-lg shadow-[#FF6A00]/20 transition-all duration-300" href="#book">
<span>Umów prezentację</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<button className="lg:hidden p-2 text-[#1A1A1A] z-50 relative" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon-open" style={{color: 'rgb(26, 26, 26)'}} width="28"></iconify-icon>
<iconify-icon className="hidden" icon="solar:close-circle-linear" id="menu-icon-close" width="28"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 hidden flex-col pt-24 px-6 pb-6 shadow-2xl transition-all duration-300 h-screen overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 text-xl font-semibold text-slate-800" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
<a className="border-b border-gray-100 pb-4 mobile-link" href="#education">
            Jak działa
          </a>
<a className="border-b border-gray-100 pb-4 mobile-link" href="#problem">
            Dla kogo
          </a>
<a className="border-b border-gray-100 pb-4 mobile-link" href="#solution">
            BEMER
          </a>
<a className="border-b border-gray-100 pb-4 mobile-link" href="#stories">
            Historie
          </a>
<a className="border-b border-gray-100 pb-4 mobile-link text-[#FF6A00]" href="./wiedza.html">
            Wiedza
          </a>
</div>
<div className="mt-8">
<a className="mobile-link flex w-full justify-center items-center gap-2 text-base font-semibold text-white bg-[#FF6A00] hover:bg-[#E65F00] rounded-full py-4 px-6 shadow-lg shadow-[#FF6A00]/20 transition-all duration-300" href="#book">
<span>Umów prezentację</span>
<iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="block w-full">

<section className="md:pt-32 md:pb-16 lg:pt-48 lg:pb-24 md:px-12 lg:px-24 overflow-hidden bg-white max-w-7xl mr-auto ml-auto pt-28 pr-6 pb-14 pl-6 relative">
<div className="grid lg:grid-cols-2 lg:gap-24 gap-x-16 gap-y-16 items-center">
<div className="z-10 relative space-y-8 transition-all duration-700 ease-out" id="hero-content">
<div className="">
<span className="inline-block uppercase text-xs font-semibold text-[#FF6A00] tracking-widest bg-orange-50 rounded-full mb-3 pt-1 pr-3 pb-1 pl-3">
                ZDROWE KRĄŻENIE — LEPSZY KOMFORT
              </span>
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-[#1A1A1A] tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Mikrokrążenie fundament energii i regeneracji.
              </h1>
</div>
<div className="space-y-6">
<p className="leading-relaxed text-xl font-normal text-slate-600 max-w-lg tracking-tight">
                Dowiedz się, jak sprawne mikrokrążenie wspiera energię,
                regenerację i codzienny komfort życia. Prowadzę prezentacje
                BEMER online oraz stacjonarnie we Wrocławiu, Warszawie i
                Katowicach.
              </p>
<div className="flex flex-col sm:flex-row flex-wrap gap-3">
<span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 text-slate-700 text-sm font-semibold border border-slate-200 shadow-sm">
<iconify-icon icon="solar:laptop-linear" width="18"></iconify-icon>
                  Online (Zoom)
                </span>
<span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-50 text-[#FF6A00] text-sm font-semibold border border-orange-100 shadow-sm">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
                  Stacjonarnie: Wrocław / Warszawa / Katowice
                </span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 transition-all duration-300 hover:bg-orange-50 hover:border-[#FF6A00] hover:text-[#FF6A00] text-sm font-semibold text-slate-900 bg-white border-slate-600 border rounded-full pt-4 pr-8 pb-4 pl-8" href="#education">
<span>Poznaj podstawy</span>
</a>
<a className="hover:bg-[#E65F00] transition-all duration-300 shadow-[#FF6A00]/20 hover:shadow-[#FF6A00]/40 text-base font-semibold text-white text-center bg-[#FF6A00] rounded-full pt-4 pr-10 pb-4 pl-10 shadow-xl" href="#book">
                Umów prezentację
              </a>
</div>
<p className="text-sm text-slate-500 mt-4">
              Krótka prezentacja, odpowiedzi na pytania i pomoc w doborze
              rozwiązania.
            </p>
</div>
<div className="lg:order-last relative transition-all duration-700 ease-out delay-100" id="hero-image">
<div className="aspect-[4/3] overflow-hidden shadow-slate-100 group z-10 rounded-[2.5rem] relative shadow-2xl">
<img alt="Witalność" className="transform group-hover:scale-105 transition-transform duration-700 ease-out contrast-[1.05] w-full h-full object-cover bg-center rounded-[2.8rem] absolute top-0 right-0 bottom-0 left-0 saturate-110 brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03800929-4af9-408b-a972-6884e0723237_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-100 bg-slate-50 py-8">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<div className="flex items-center gap-4 text-slate-700">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shrink-0 text-[#FF6A00]">
<iconify-icon icon="solar:history-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold leading-snug">
                Technologia rozwijana
                <br/>
                od 1998 roku
              </span>
</div>
<div className="flex items-center gap-4 text-slate-700">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shrink-0 text-[#FF6A00]">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold leading-snug">
                Wyrób medyczny
                <br/>
                klasy IIa
              </span>
</div>
<div className="flex items-center gap-4 text-slate-700">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shrink-0 text-[#FF6A00]">
<iconify-icon icon="solar:library-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold leading-snug">
                Wykłady, źródła i
                <br/>
                historie użytkowników
              </span>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="education">
<div className="md:px-12 lg:px-24 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-2xl mb-16">
<span className="text-[#FF6A00] font-semibold tracking-widest text-xs uppercase mb-3 block">
              Mikrokrążenie
            </span>
<h2 className="text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              Dlaczego sprawny przepływ jest tak ważny?
            </h2>
<p className="text-slate-600 mt-4 text-lg leading-relaxed">
              To rozbudowana sieć najdrobniejszych naczyń odpowiada za
              dostarczanie tlenu i składników odżywczych do naszych komórek.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#F9FAFB] p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-orange-100 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6A00] mb-6">
<iconify-icon icon="solar:wind-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-xl text-slate-900 mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Dotlenienie organizmu
              </h3>
<p className="text-slate-500 text-sm leading-relaxed">
                Mikrokrążenie odpowiada za sprawny transport tlenu do każdej
                komórki ciała.
              </p>
</div>
<div className="bg-[#F9FAFB] p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-orange-100 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6A00] mb-6">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-xl text-slate-900 mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Wsparcie witalności
              </h3>
<p className="text-slate-500 text-sm leading-relaxed">
                Odpowiedni przepływ wspiera procesy metaboliczne i
                regeneracyjne.
              </p>
</div>
<div className="bg-[#F9FAFB] p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-orange-100 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6A00] mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-xl text-slate-900 mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Lepsza regeneracja
              </h3>
<p className="text-slate-500 text-sm leading-relaxed">
                Szybsze usuwanie zbędnych produktów materii wspiera naturalną
                odnowę.
              </p>
</div>
</div>
</div>
</section>

<section className="md:px-12 lg:px-24 bg-[#F9FAFB] max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="problem">
<div className="grid lg:grid-cols-2 lg:gap-32 gap-x-16 gap-y-16 items-center">
<div className="order-2 lg:order-1">
<span className="uppercase text-xs font-semibold text-[#FF6A00] tracking-widest mb-6 block">
              CZYNNIKI STYLU ŻYCIA
            </span>
<h2 className="md:text-4xl lg:text-5xl leading-[1.1] text-3xl font-semibold text-slate-900 tracking-tight mb-6" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              Co osłabia Twoje krążenie?
            </h2>
<p className="text-slate-600 text-lg leading-relaxed mb-10">
              Na sprawność mikrokrążenia wpływają codzienne nawyki, tempo życia
              i warunki, w jakich funkcjonuje organizm.
            </p>
<ul className="space-y-5">
<li className="flex items-center gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-200/60 shadow-sm text-[#FF6A00] flex items-center justify-center transition-transform hover:scale-105">
<iconify-icon icon="solar:pulse-linear" width="22"></iconify-icon>
</div>
<span className="text-slate-800 text-lg font-medium tracking-tight">
                  Przewlekły stres i napięcie
                </span>
</li>
<li className="flex items-center gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-200/60 shadow-sm text-[#FF6A00] flex items-center justify-center transition-transform hover:scale-105">
<iconify-icon icon="solar:moon-sleep-linear" width="22"></iconify-icon>
</div>
<span className="text-slate-800 text-lg font-medium tracking-tight">
                  Niedobór snu i regeneracji
                </span>
</li>
<li className="flex items-center gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-200/60 shadow-sm text-[#FF6A00] flex items-center justify-center transition-transform hover:scale-105">
<iconify-icon icon="solar:chair-linear" width="22"></iconify-icon>
</div>
<span className="text-slate-800 text-lg font-medium tracking-tight">
                  Siedzący tryb życia
                </span>
</li>
</ul>
<div className="mt-10 inline-flex items-start sm:items-center gap-3 px-5 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm max-w-lg">
<iconify-icon className="text-[#FF6A00] flex-shrink-0 mt-0.5 sm:mt-0" icon="solar:info-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700 leading-snug">
                To właśnie dlatego tak ważne jest codzienne wspieranie
                naturalnej pracy organizmu.
              </span>
</div>
</div>
<div className="relative order-1 lg:order-2">
<img alt="Relaks" className="aspect-[4/5] bg-center object-cover rounded-3xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/821bb52d-f515-4817-9563-9feb2b58fd66_1600w.jpg"/>
</div>
</div>

<div className="mt-32">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              Dla kogo może być to interesujące?
            </h2>
<p className="text-slate-600 mt-4 text-lg leading-relaxed">
              Najczęściej z prezentacji korzystają osoby, które chcą lepiej
              zadbać o regenerację, energię i codzienny komfort.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-5">
<iconify-icon icon="solar:running-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-slate-900 mb-2 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Osoby aktywne fizycznie
              </h3>
<p className="text-slate-500 text-sm leading-relaxed">
                Wsparcie wydolności i szybszy powrót do formy po treningu.
              </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-5">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-slate-900 mb-2 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Osoby pracujące siedząco
              </h3>
<p className="text-slate-500 text-sm leading-relaxed">
                Redukcja napięć i wsparcie krążenia przy braku ruchu.
              </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-5">
<iconify-icon icon="solar:moon-stars-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-slate-900 mb-2 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Osoby dbające o regenerację i sen
              </h3>
<p className="text-slate-500 text-sm leading-relaxed">
                Głębszy relaks i lepsza jakość nocnego wypoczynku.
              </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-5">
<iconify-icon icon="solar:sun-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-slate-900 mb-2 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Osoby chcące zadbać o codzienny komfort i energię
              </h3>
<p className="text-slate-500 text-sm leading-relaxed">
                Więcej energii do działania na co dzień i lepsze samopoczucie.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1A1A] py-24 text-white relative overflow-hidden" id="solution">
<div className="md:px-12 lg:px-24 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="mb-6 inline-block rounded-full border border-[#FF6A00]/20 bg-[#FF6A00]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FF6A00]">
              Technologia BEMER
            </span>
<h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-5xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              Bezpieczna stymulacja organizmu
            </h2>
<p className="text-slate-300 text-lg leading-relaxed">
              Bezpieczna technologia wspierająca naturalne procesy organizmu.
              Wykorzystywana w regeneracji, rehabilitacji i codziennym wsparciu
              organizmu.
            </p>
</div>
<div className="grid lg:grid-cols-2 gap-10">
<div className="bg-white/5 border border-white/10 p-12 rounded-[2rem] backdrop-blur-xl flex flex-col justify-center">
<h3 className="text-3xl font-semibold mb-6 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Rozwiązanie z certyfikatem
              </h3>
<ul className="text-slate-300 space-y-4 mb-12">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF6A00] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span>Wyrób medyczny klasy IIa</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF6A00] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span>Technologia rozwijana i badana od 1998 roku</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#FF6A00] shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="">
                    Wykorzystywana w regeneracji, rehabilitacji i codziennym
                    wsparciu organizmu
                  </span>
</li>
</ul>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div className="">
<div className="text-xl mb-2 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                    Dowody i źródła
                  </div>
<a className="text-xs font-semibold text-[#FF6A00] flex items-center gap-1 uppercase tracking-wider hover:text-white transition-colors" href="./wiedza.html">
                    Przejdź do sekcji Wiedza
                    <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<div className="flex items-center justify-end">
<iconify-icon className="text-slate-500" icon="solar:global-linear" width="32"></iconify-icon>
</div>
</div>
</div>
<div className="overflow-hidden min-h-[400px] group bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/590dbe83-191f-47b7-ae25-62bce709b54b_1600w.jpg)] bg-cover rounded-[2rem] relative"></div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="stories">
<div className="md:px-12 lg:px-24 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#FF6A00] font-semibold tracking-widest text-xs uppercase mb-3 block">
              Historie użytkowników
            </span>
<h2 className="text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight mb-4" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              Doświadczenia osób, które zaufały technologii
            </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-4 text-[#FF6A00]">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Więcej energii na co dzień
              </h3>
<p className="text-slate-600 text-sm mb-4">
                Przy intensywnym trybie życia regularne sesje pomogły odzyskać
                większą witalność i mniejsze poczucie zmęczenia w ciągu dnia.
              </p>
<p className="text-slate-700 italic mb-6 text-sm leading-relaxed flex-grow">
                "Czuję się wypoczęty i mam siłę na cały dzień."
              </p>
<a className="text-[#FF6A00] hover:text-[#E65F00] text-xs font-semibold flex items-center gap-1 mt-auto pt-4 border-t border-gray-100" href="./wiedza.html#historie">
                Źródło
                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-4 text-[#FF6A00]">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Lekkość nóg po całym dniu
              </h3>
<p className="text-slate-600 text-sm mb-4">
                Przy uczuciu ciężkości i napięcia w nogach pojawiła się większa
                lekkość oraz lepszy komfort codziennego funkcjonowania.
              </p>
<p className="text-slate-700 italic mb-6 text-sm leading-relaxed flex-grow">
                "Nogi stały się lżejsze, a dyskomfort jest dużo mniejszy."
              </p>
<a className="text-[#FF6A00] hover:text-[#E65F00] text-xs font-semibold flex items-center gap-1 mt-auto pt-4 border-t border-gray-100" href="./wiedza.html#historie">
                Źródło
                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-4 text-[#FF6A00]">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Większa swoboda ruchu barku
              </h3>
<p className="text-slate-600 text-sm mb-4">
                Przy długotrwałym napięciu w barku regularność przyniosła
                większy komfort ruchu i spokojniejszy odpoczynek w nocy.
              </p>
<p className="text-slate-700 italic mb-6 text-sm leading-relaxed flex-grow">
                "W końcu mogę spokojniej przespać noc."
              </p>
<a className="text-[#FF6A00] hover:text-[#E65F00] text-xs font-semibold flex items-center gap-1 mt-auto pt-4 border-t border-gray-100" href="./wiedza.html#historie">
                Źródło
                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-4 text-[#FF6A00]">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Większy komfort poruszania się
              </h3>
<p className="text-slate-600 text-sm mb-4">
                Po urazie stopniowo pojawiła się większa lekkość ruchu i lepsze
                samopoczucie w codziennych czynnościach.
              </p>
<p className="text-slate-700 italic mb-6 text-sm leading-relaxed flex-grow">
                "Podczas chodzenia czułam się coraz swobodniej."
              </p>
<a className="text-[#FF6A00] hover:text-[#E65F00] text-xs font-semibold flex items-center gap-1 mt-auto pt-4 border-t border-gray-100" href="./wiedza.html#historie">
                Źródło
                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-4 text-[#FF6A00]">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Komfort po wymagającym zabiegu
              </h3>
<p className="text-slate-600 text-sm mb-4">
                Po intensywnym zabiegu wsparcie regeneracji przełożyło się na
                bardzo dobry poranek i większy komfort twarzy.
              </p>
<p className="text-slate-700 italic mb-6 text-sm leading-relaxed flex-grow">
                "Rano czułam się naprawdę dobrze."
              </p>
<a className="text-[#FF6A00] hover:text-[#E65F00] text-xs font-semibold flex items-center gap-1 mt-auto pt-4 border-t border-gray-100" href="./wiedza.html#historie">
                Źródło
                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-4 text-[#FF6A00]">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Mniejsze napięcie i większy komfort nóg
              </h3>
<p className="text-slate-600 text-sm mb-4">
                Przy regularnym dbaniu o ogólną kondycję pojawiło się odczuwalne
                rozluźnienie i większy komfort w obrębie nóg.
              </p>
<p className="text-slate-700 italic mb-6 text-sm leading-relaxed flex-grow">
                "Moje nogi odzyskały naturalny komfort."
              </p>
<a className="text-[#FF6A00] hover:text-[#E65F00] text-xs font-semibold flex items-center gap-1 mt-auto pt-4 border-t border-gray-100" href="./wiedza.html#historie">
                Źródło
                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-slate-500 mb-6">
              Historie opisują indywidualne doświadczenia. Rezultaty mogą się
              różnić.
            </p>
<a className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-slate-50 hover:text-slate-900 text-sm font-semibold text-slate-700 bg-white border-slate-200 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" href="./wiedza.html#historie">
              Zobacz więcej historii
            </a>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 border-t border-gray-100" id="wiedza">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
<div className="max-w-2xl">
<span className="text-[#FF6A00] font-semibold tracking-widest text-xs uppercase mb-3 block">
                Wiedza i źródła
              </span>
<h2 className="text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Źródła, certyfikacja i materiały
              </h2>
</div>
<a className="shrink-0 flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-[#FF6A00] hover:text-[#FF6A00] rounded-full py-3 px-6 transition-all shadow-sm" href="./wiedza.html">
              Zobacz więcej
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">
<a className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#FF6A00]/50 transition-all flex items-start gap-4" href="./wiedza.html#zrodla">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF6A00] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:document-medicine-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  Certyfikacja
                </h3>
<p className="text-xs text-slate-500 leading-relaxed">
                  Wyrób medyczny klasy IIa.
                </p>
</div>
</a>
<a className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#FF6A00]/50 transition-all flex items-start gap-4" href="./wiedza.html#nagrania">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF6A00] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-semibold text-slate-900 mb-1" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  Materiały wideo
                </h3>
<p className="text-xs text-slate-500 leading-relaxed">
                  Oficjalne nagrania i instrukcje.
                </p>
</div>
</a>
<a className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#FF6A00]/50 transition-all flex items-start gap-4" href="./wiedza.html#historie">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF6A00] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:book-bookmark-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  Pełne historie
                </h3>
<p className="text-xs text-slate-500 leading-relaxed">
                  Więcej opinii użytkowników.
                </p>
</div>
</a>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border-t pt-24 pb-20" id="process">
<div className="md:px-12 lg:px-24 max-w-7xl mx-auto px-6 text-center">
<span className="text-[#FF6A00] font-semibold tracking-widest text-xs uppercase mb-3 block">
            Krok po kroku
          </span>
<h2 className="text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight mb-6" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
            Jak wygląda prezentacja i start?
          </h2>
<p className="text-slate-600 mb-16 max-w-lg mx-auto">
            Wybierz dogodną dla siebie formę: spotykamy się online na platformie
            Zoom lub stacjonarnie we Wrocławiu, Warszawie i Katowicach.
          </p>
<div className="grid md:grid-cols-3 gap-12">
<div className="flex flex-col items-center">
<div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6A00] mb-6 shadow-sm">
<iconify-icon icon="solar:presentation-graph-linear" width="32"></iconify-icon>
</div>
<h3 className="font-semibold text-xl mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                1. Prezentacja
              </h3>
<p className="text-slate-500 text-sm">
                Krótka prezentacja (10–15 minut).
              </p>
</div>
<div className="flex flex-col items-center">
<div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6A00] mb-6 shadow-sm">
<iconify-icon icon="solar:chat-round-line-linear" width="32"></iconify-icon>
</div>
<h3 className="font-semibold text-xl mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                2. Dobór
              </h3>
<p className="text-slate-500 text-sm">
                Dobór rozwiązania do potrzeb.
              </p>
</div>
<div className="flex flex-col items-center">
<div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6A00] mb-6 shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="font-semibold text-xl mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                3. Opieka
              </h3>
<p className="text-slate-500 text-sm">
                Wsparcie po prezentacji i po zakupie.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-gray-100 border-t pt-24 pb-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-[#FF6A00] font-semibold tracking-widest text-xs uppercase mb-3 block">
              Masz pytania?
            </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              Najczęstsze pytania
            </h2>
</div>
<div className="space-y-4">

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
<summary className="flex cursor-pointer transition-colors hover:bg-slate-50 list-none text-lg font-semibold text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Jak długo trwa prezentacja?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-slate-600 text-sm border-t border-gray-50 mt-2 leading-relaxed">
                Prezentacja trwa zazwyczaj około 10–15 minut.
                <br/>
                W tym czasie pokazuję czym jest mikrokrążenie, jak działa
                technologia BEMER oraz w jakich sytuacjach ludzie najczęściej z
                niej korzystają.
                <br/>
                Spotkanie ma charakter edukacyjny i informacyjny.
              </div>
</details>

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 list-none" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Czy prezentacja jest bezpłatna?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-slate-600 text-sm border-t border-gray-50 mt-2 leading-relaxed">
                Tak. Prezentacja jest całkowicie bezpłatna i niezobowiązująca.
                <br/>
                Możesz spokojnie zobaczyć jak działa technologia BEMER i
                zdecydować później, czy to rozwiązanie jest dla Ciebie
                interesujące.
              </div>
</details>

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 list-none" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Czy muszę coś kupić po prezentacji?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-slate-600 text-sm border-t border-gray-50 mt-2 leading-relaxed">
                Nie.
                <br/>
                Prezentacja służy przede wszystkim zrozumieniu czym jest
                mikrokrążenie i jak działa system BEMER.
                <br/>
                Decyzja o ewentualnym dalszym korzystaniu z urządzenia zawsze
                należy do Ciebie.
              </div>
</details>

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 list-none" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Czy prezentacja odbywa się online czy stacjonarnie?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-slate-600 text-sm border-t border-gray-50 mt-2 leading-relaxed">
<p className="mb-2">Obecnie oferuję dwie formy spotkań:</p>
<ul className="list-disc pl-5 mb-2 space-y-1">
<li>prezentacja online (Zoom)</li>
<li>
                    prezentacja stacjonarna – we Wrocławiu, Warszawie i
                    Katowicach
                  </li>
</ul>
<p>
                  Dzięki temu możesz wybrać formę, która jest dla Ciebie
                  najwygodniejsza.
                </p>
</div>
</details>

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 list-none" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Czy technologia BEMER jest bezpieczna?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-slate-600 text-sm border-t border-gray-50 mt-2 leading-relaxed">
                Urządzenia BEMER są wyrobami medycznymi klasy IIa i są rozwijane
                od ponad 25 lat.
                <br/>
                Technologia została zaprojektowana tak, aby mogła być używana
                również w warunkach domowych.
              </div>
</details>

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 list-none" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Czy istnieją przeciwwskazania?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-slate-600 text-sm border-t border-gray-50 mt-2 leading-relaxed">
<p className="mb-2">
                  Tak – jak w przypadku wielu metod wspierających organizm,
                  istnieją sytuacje wymagające konsultacji z lekarzem.
                </p>
<p className="mb-2">Dotyczy to między innymi osób z:</p>
<ul className="list-disc pl-5 mb-2 space-y-1">
<li>rozrusznikiem serca</li>
<li>aktywną terapią onkologiczną</li>
<li>świeżą zakrzepicą</li>
</ul>
<p>
                  W takich przypadkach warto skonsultować się z lekarzem
                  prowadzącym przed rozpoczęciem korzystania z urządzenia.
                </p>
</div>
</details>

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 list-none" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Kiedy można zauważyć pierwsze efekty?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-slate-600 text-sm border-t border-gray-50 mt-2 leading-relaxed">
                Reakcja organizmu jest indywidualna.
                <br/>
                Niektóre osoby zwracają uwagę na poprawę komfortu, energii lub
                jakości snu już po kilku dniach regularnego stosowania,
                natomiast u innych proces ten może trwać dłużej.
                <br/>
                Najczęściej zaleca się regularne stosowanie przez kilka tygodni.
              </div>
</details>

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 list-none" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Gdzie mogę dowiedzieć się więcej o mikrokrążeniu?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-slate-600 text-sm border-t border-gray-50 mt-2 leading-relaxed">
<p className="mb-4">
                  Na stronie przygotowaliśmy sekcję „Wiedza”, gdzie znajdziesz
                  wykłady lekarzy, materiały edukacyjne o mikrokrążeniu oraz
                  historie użytkowników technologii BEMER.
                </p>
<a className="text-[#FF6A00] font-semibold hover:underline" href="./wiedza.html">
                  Przejdź do sekcji Wiedza
                </a>
</div>
</details>
</div>

<div className="mt-16 bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 text-center shadow-sm">
<h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              Masz inne pytanie?
            </h3>
<p className="text-slate-600 text-base md:text-lg mb-8 max-w-lg mx-auto">
              Umów krótką prezentację i zapytaj o wszystko.
            </p>
<a className="inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-[#FF6A00] hover:bg-[#E65F00] rounded-full py-4 px-10 shadow-lg shadow-[#FF6A00]/20 transition-all duration-300" href="#book">
              Umów prezentację
            </a>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border-t pt-24 pb-24" id="book">
<div className="md:px-12 lg:px-24 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-5">
<div className="bg-slate-50 rounded-2xl p-8 border border-gray-200 sticky top-28">
<div className="w-20 h-20 mb-6 rounded-full bg-orange-50 text-[#FF6A00] flex items-center justify-center shadow-inner">
<iconify-icon icon="solar:user-rounded-linear" width="36"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  Twój Ekspert BEMER
                </h3>
<p className="text-xs text-[#FF6A00] font-semibold uppercase tracking-widest mb-6">
                  Niezależny Partner
                </p>
<div className="space-y-1 pt-6 border-t border-gray-200">
<a className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white transition-all border border-transparent hover:border-gray-200 hover:shadow-sm" href="tel:+48000000000">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 group-hover:text-slate-900 transition-colors shrink-0">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">
                        Telefon
                      </p>
<p className="text-xs text-slate-500 mt-0.5">
                        +48 000 000 000
                      </p>
</div>
</a>
<a className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white transition-all border border-transparent hover:border-gray-200 hover:shadow-sm" href="mailto:kontakt@mikrokrazenie.pl">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 group-hover:text-slate-900 transition-colors shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Email</p>
<p className="text-xs text-slate-500 mt-0.5">
                        kontakt@mikrokrazenie.pl
                      </p>
</div>
</a>
<a className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white transition-all border border-transparent hover:border-gray-200 hover:shadow-sm" href="https://wa.me/48123456789" rel="noopener noreferrer" target="_blank">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 group-hover:text-[#FF6A00] group-hover:border-[#FF6A00]/30 transition-colors shrink-0">
<svg className="lucide lucide-message-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
</div>
<div className="">
<p className="text-sm font-semibold text-slate-900 group-hover:text-[#FF6A00] transition-colors">
                        WhatsApp
                      </p>
<p className="text-xs text-[#FF6A00] font-medium mt-0.5">
                        Najszybszy kontakt
                      </p>
</div>
</a>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl shadow-slate-100">
<h3 className="text-2xl font-semibold mb-6 tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                  Zarezerwuj termin
                </h3>
<form className="space-y-4 mb-2">
<div className="grid md:grid-cols-2 gap-4">
<input className="w-full rounded-lg border border-gray-200 py-3 px-4 outline-none transition-colors duration-200 focus:border-[#FF6A00] focus:ring-[3px] focus:ring-[#FF6A00]/10 text-sm" placeholder="Imię i nazwisko" required="" type="text"/>
<input className="w-full rounded-lg border border-gray-200 py-3 px-4 outline-none transition-colors duration-200 focus:border-[#FF6A00] focus:ring-[3px] focus:ring-[#FF6A00]/10 text-sm" placeholder="Telefon" required="" type="tel"/>
</div>
<input className="w-full rounded-lg border border-gray-200 py-3 px-4 outline-none transition-colors duration-200 focus:border-[#FF6A00] focus:ring-[3px] focus:ring-[#FF6A00]/10 text-sm" placeholder="Email (opcjonalnie)" type="email"/>
<textarea className="w-full rounded-lg border border-gray-200 py-3 px-4 outline-none transition-colors duration-200 focus:border-[#FF6A00] focus:ring-[3px] focus:ring-[#FF6A00]/10 text-sm h-32" placeholder="Twoja wiadomość lub preferowany termin (Zoom, Wrocław, Warszawa, Katowice)"></textarea>
<button className="w-full py-4 bg-[#FF6A00] hover:bg-[#E65F00] text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-200 mt-2" type="submit">
                    Wyślij zgłoszenie
                  </button>
</form>
<div className="relative flex items-center py-6">
<div className="flex-grow border-t border-gray-100"></div>
<span className="flex-shrink-0 mx-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Lub
                  </span>
<div className="flex-grow border-t border-gray-100"></div>
</div>
<div className="mb-8">
<a className="group w-full flex items-center justify-center gap-2 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-[#FF6A00]/50 font-semibold rounded-xl transition-all shadow-sm" href="https://calendly.com/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-calendar text-slate-500 group-hover:text-[#FF6A00] transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                    Umów przez Calendly
                  </a>
<p className="text-center text-xs text-slate-500 mt-3">
                    Wybierz dogodny termin online
                  </p>
</div>
<div className="text-xs text-slate-500 text-center leading-relaxed mt-8 space-y-1.5 px-2 md:px-4">
<p>Prezentacja jest i .</p>
<p>Online lub stacjonarnie: Wrocław / Warszawa / Katowice.</p>
<p>
                    Możesz też napisać przez WhatsApp lub wybrać termin w
                    Calendly.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="text-white bg-[#1A1A1A] border-[#FF6A00] border-t-4 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-md">
<span className="text-xl font-semibold tracking-tight" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
              Mikrokrążenie+
            </span>
<p className="text-slate-400 mt-4 text-sm leading-relaxed">
              Niezależny Partner BEMER — wsparcie edukacyjne dla Twojego
              komfortu i regeneracji.
            </p>
</div>
<div className="text-left md:text-right">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#FF6A00] mb-4">
              Kontakt
            </h4>
<p className="text-slate-300 text-sm">kontakt@mikrokrazenie.pl</p>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex justify-between items-center text-xs text-slate-500">
<p>© 2026 Niezależny Partner BEMER.</p>
<a className="hover:text-white transition-colors" href="./polityka-prywatnosci.html">
            Polityka Prywatności
          </a>
</div>
</div>
</footer>


    </>
  );
}
