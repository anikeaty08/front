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



        const btn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
        const menu = document.getElementById('navbar-sticky');
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Scroll Reveal Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Animacja tylko raz
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 bg-white/95 backdrop-blur-sm transition-all duration-300">
<div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 group hover:opacity-80 transition-opacity" href="index.html">
<div className="relative">
<div className="absolute inset-0 bg-orange-200 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
<svg className="text-orange-600 w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<span className="self-center text-xl font-bold tracking-tight text-slate-900 uppercase">MK SERVICE</span>
</a>
<div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
<a className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20 active:scale-95 transition-all duration-300 rounded px-5 py-2.5" href="tel:+48507930374">
<svg className="animate-pulse" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Zadzwoń
                </a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-colors" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Otwórz menu</span>
<svg aria-hidden="true" className="w-6 h-6" fill="none" viewbox="0 0 17 14" xmlns="http://www.w3.org/2000/svg"><path d="M1 1h15M1 7h15M1 13h15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
<li className=""><a className="block hover:text-orange-600 transition-colors duration-300 hover:-translate-y-0.5 transform pt-2 pr-3 pb-2 pl-3" href="/strona-glowna">Home</a></li>
<li className=""><a className="block hover:text-orange-600 transition-colors duration-300 hover:-translate-y-0.5 transform pt-2 pr-3 pb-2 pl-3" href="/index.html#o-nas">O nas</a></li>
<li className=""><a className="block hover:text-orange-600 transition-colors duration-300 pt-2 pr-3 pb-2 pl-3 hover:-translate-y-0.5 transform" href="/strona-glowna#o-nas">Usługi</a></li>
<li className=""><a className="block py-2 px-3 hover:text-orange-600 transition-colors duration-300 hover:-translate-y-0.5 transform" href="index.html#realizacje">Realizacje</a></li>
<li className=""><a className="block py-2 px-3 hover:text-orange-600 transition-colors duration-300 hover:-translate-y-0.5 transform" href="index.html#opinie">Opinie</a></li>
<li className=""><a className="block py-2 px-3 hover:text-orange-600 transition-colors duration-300 hover:-translate-y-0.5 transform" href="index.html#kontakt">Kontakt</a></li>
</ul>
</div>
</div>
</nav>

<main className="flex-grow bg-white pt-32 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto">

<div className="mb-12 border-b border-slate-200 pb-8">
<span className="animate-entry text-orange-600 font-bold tracking-widest text-xs uppercase mb-2 block">Dokumenty</span>
<h1 className="animate-entry delay-100 text-3xl md:text-5xl font-bold uppercase tracking-tight text-slate-900">Polityka Prywatności</h1>
<p className="animate-entry delay-200 mt-4 text-lg text-slate-600">Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług poprzez serwis internetowy MK SERVICE.</p>
</div>
<div className="space-y-12 text-slate-600">

<section className="reveal-on-scroll">
<h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3 group">
<span className="w-8 h-8 rounded-sm bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">01</span>
                        Administrator Danych Osobowych
                    </h2>
<p className="leading-relaxed">
                        Administratorem danych osobowych zawartych w serwisie jest firma <strong>MK SERVICE Michał Kowalewski</strong> z siedzibą przy ul. Grunwaldzkiej 22/5, 83-000 Pruszcz Gdański. Z Administratorem można skontaktować się poprzez adres e-mail: <a className="text-orange-600 hover:underline hover:text-orange-700 transition-colors" href="mailto:kowalewskimichal20@gmail.com">kowalewskimichal20@gmail.com</a> lub telefonicznie: <a className="text-orange-600 hover:underline hover:text-orange-700 transition-colors" href="tel:+48507930374">+48 507 930 374</a>.
                    </p>
</section>

<section className="reveal-on-scroll">
<h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3 group">
<span className="w-8 h-8 rounded-sm bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">02</span>
                        Cele i podstawy przetwarzania danych
                    </h2>
<p className="leading-relaxed mb-4">
                        Dane osobowe przetwarzane są na podstawie zgody wyrażonej przez Użytkownika oraz w przypadkach, w których przepisy prawa upoważniają Administratora do przetwarzania danych osobowych na podstawie przepisów prawa lub w celu realizacji zawartej pomiędzy stronami umowy.
                    </p>
<div className="bg-slate-50/50 p-6 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors duration-300">
<p className="mb-4 font-medium text-slate-800">Serwis zbiera informacje dobrowolnie podane przez użytkownika w formularzu kontaktowym w celu:</p>
<ul className="list-none space-y-3 pl-2">
<li className="flex gap-3 items-start group">
<svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="group-hover:text-slate-900 transition-colors">Udzielenia odpowiedzi na zapytanie przesłane przez formularz kontaktowy (podstawa prawna: art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora).</span>
</li>
<li className="flex gap-3 items-start group">
<svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="group-hover:text-slate-900 transition-colors">Przygotowania i przedstawienia oferty usług (podstawa prawna: art. 6 ust. 1 lit. b RODO – działania zmierzające do zawarcia umowy).</span>
</li>
</ul>
</div>
</section>

<section className="reveal-on-scroll">
<h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3 group">
<span className="w-8 h-8 rounded-sm bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">03</span>
                        Odbiorcy danych
                    </h2>
<p className="leading-relaxed">
                        Dane osobowe Użytkowników mogą być przekazywane podmiotom uprawnionym do uzyskania danych na podstawie obowiązującego prawa (np. sądy lub organy ścigania) – tylko gdy wystąpią z żądaniem w oparciu o stosowną podstawę prawną.
                    </p>
</section>

<section className="reveal-on-scroll">
<h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3 group">
<span className="w-8 h-8 rounded-sm bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">04</span>
                        Prawa osoby, której dane dotyczą
                    </h2>
<p className="leading-relaxed mb-4">Zgodnie z RODO, Użytkownikowi przysługują następujące prawa:</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white p-5 border border-slate-100 rounded-lg hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 cursor-default group">
<p className="font-bold text-slate-800 text-sm mb-1 group-hover:text-orange-600 transition-colors">Dostęp</p>
<p className="text-sm">Prawo dostępu do swoich danych oraz otrzymania ich kopii.</p>
</div>
<div className="bg-white p-5 border border-slate-100 rounded-lg hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 cursor-default group">
<p className="font-bold text-slate-800 text-sm mb-1 group-hover:text-orange-600 transition-colors">Sprostowanie</p>
<p className="text-sm">Prawo do sprostowania (poprawiania) swoich danych.</p>
</div>
<div className="bg-white p-5 border border-slate-100 rounded-lg hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 cursor-default group">
<p className="font-bold text-slate-800 text-sm mb-1 group-hover:text-orange-600 transition-colors">Usunięcie</p>
<p className="text-sm">Prawo do usunięcia danych (tzw. "prawo do bycia zapomnianym").</p>
</div>
<div className="bg-white p-5 border border-slate-100 rounded-lg hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 cursor-default group">
<p className="font-bold text-slate-800 text-sm mb-1 group-hover:text-orange-600 transition-colors">Ograniczenie</p>
<p className="text-sm">Prawo do ograniczenia przetwarzania danych.</p>
</div>
<div className="bg-white p-5 border border-slate-100 rounded-lg hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 cursor-default group">
<p className="font-bold text-slate-800 text-sm mb-1 group-hover:text-orange-600 transition-colors">Sprzeciw</p>
<p className="text-sm">Prawo do wniesienia sprzeciwu wobec przetwarzania danych.</p>
</div>
<div className="bg-white p-5 border border-slate-100 rounded-lg hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 cursor-default group">
<p className="font-bold text-slate-800 text-sm mb-1 group-hover:text-orange-600 transition-colors">Przenoszenie</p>
<p className="text-sm">Prawo do przenoszenia danych.</p>
</div>
<div className="bg-white p-5 border border-slate-100 rounded-lg hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 cursor-default group md:col-span-2">
<p className="font-bold text-slate-800 text-sm mb-1 group-hover:text-orange-600 transition-colors">Skarga</p>
<p className="text-sm">Prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</p>
</div>
</div>
</section>

<section className="reveal-on-scroll">
<h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3 group">
<span className="w-8 h-8 rounded-sm bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">05</span>
                        Okres przechowywania danych
                    </h2>
<p className="leading-relaxed">
                        Dane osobowe będą przechowywane przez okres niezbędny do realizacji celu, dla którego zostały zebrane (np. do czasu zakończenia korespondencji lub realizacji usługi), a następnie przez okres wymagany przez przepisy prawa (np. podatkowe, księgowe) lub do czasu przedawnienia ewentualnych roszczeń.
                    </p>
</section>

<section className="reveal-on-scroll">
<h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3 group">
<span className="w-8 h-8 rounded-sm bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">06</span>
                        Pliki Cookies
                    </h2>
<p className="leading-relaxed mb-4">
                        Serwis korzysta z plików cookies (ciasteczek). Są to niewielkie pliki tekstowe wysyłane przez serwer www i przechowywane przez oprogramowanie komputera przeglądarki.
                    </p>
<div className="bg-orange-50/50 p-6 rounded-lg border border-orange-100 text-sm leading-relaxed hover:bg-orange-50 hover:border-orange-200 transition-colors duration-300">
                        Kiedy przeglądarka ponownie połączy się ze stroną, witryna rozpoznaje rodzaj urządzenia, z którego łączy się użytkownik. Parametry pozwalają na odczytanie informacji w nich zawartych jedynie serwerowi, który je utworzył. Cookies ułatwiają więc korzystanie z wcześniej odwiedzonych witryn.
                    </div>
</section>
</div>
<div className="mt-16 pt-8 border-t border-slate-200 reveal-on-scroll">
<a className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-orange-600 transition-all duration-300 uppercase tracking-wide group hover:translate-x-1" href="index.html">
<svg className="group-hover:-translate-x-1 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
                    Powrót do strony głównej
                </a>
</div>
</div>
</main>

<footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
<div className="px-6 mx-auto max-w-7xl">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="mb-6 md:mb-0 flex items-center gap-2 group cursor-pointer">
<div className="p-2 rounded-full bg-slate-800 group-hover:bg-slate-700 transition-colors duration-300">
<svg className="text-orange-600 w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<span className="text-xl font-bold tracking-tight text-white uppercase group-hover:text-orange-500 transition-colors duration-300">MK SERVICE</span>
</div>
<div className="text-slate-400 text-sm text-center md:text-right">
<p className="hover:text-slate-200 transition-colors duration-300">Profesjonalne usługi hydrauliczne.<br/>Gwarancja jakości i solidności.</p>
</div>
</div>
<hr className="my-8 border-slate-800"/>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-wider">
<span className="mb-4 md:mb-0">© 2023 MK SERVICE. Wszelkie prawa zastrzeżone.</span>
<div className="flex gap-6">
<a className="text-white hover:text-orange-500 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-orange-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" href="#">Polityka Prywatności</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
