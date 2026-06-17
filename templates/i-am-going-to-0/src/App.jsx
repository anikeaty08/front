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



    function openQuoteForm(serviceType = '') {
      const modal = document.getElementById('quote-modal');
      const select = modal.querySelector('select');

      if (serviceType) {
        for(let i=0; i < select.options.length; i++) {
          if (select.options[i].value === serviceType || select.options[i].text.includes(serviceType)) {
            select.selectedIndex = i;
            break;
          }
        }
      }

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden'; 
    }

    function closeQuoteForm() {
      const modal = document.getElementById('quote-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }

    function handleQuoteSubmit(event) {
      event.preventDefault();
      const btn = event.target.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.disabled = true;
      btn.innerHTML = 'Saadame...';

      setTimeout(() => {
        btn.innerHTML = 'Edukalt saadetud!';
        btn.classList.remove('bg-teal-600', 'hover:bg-teal-700');
        btn.classList.add('bg-green-600', 'hover:bg-green-700');

        setTimeout(() => {
          closeQuoteForm();
          event.target.reset();

          setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = originalText;
            btn.classList.add('bg-teal-600', 'hover:bg-teal-700');
            btn.classList.remove('bg-green-600', 'hover:bg-green-700');
          }, 500);
        }, 1500);
      }, 1500);
    }

    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      if (menu.classList.contains('menu-closed')) {
        menu.classList.remove('menu-closed');
        menu.classList.add('menu-open');
      } else {
        menu.classList.add('menu-closed');
        menu.classList.remove('menu-open');
      }
    }

    function closeMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.add('menu-closed');
      menu.classList.remove('menu-open');
    }

    function togglePower() {
      const btn = document.getElementById('power-button');
      const text = document.getElementById('power-text');
      btn.classList.toggle('active');
      text.classList.toggle('powered');
    }

    document.addEventListener('DOMContentLoaded', () => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
      });

      window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 20) {
          nav.classList.add('shadow-md');
        } else {
          nav.classList.remove('shadow-md');
        }
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
      
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-teal-500/20 blur-[70px] animate-pulse-glow mix-blend-multiply"></div>
<div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-500/20 blur-[70px] animate-pulse-glow mix-blend-multiply" style={{animationDelay: '2s'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100/50 supports-[backdrop-filter]:bg-white/60" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex-shrink-0">
<a href="/">
<img alt="Electrical Solutions" className="h-10 md:h-12 w-auto object-contain" src="https://www.electricalsolutions.ee/files/electrical%20solutions-logo_1.png"/>
</a>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors" href="/">Avaleht</a>
<a className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors" href="#services">Projekteerimine</a>
<a className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors" href="#process">Tehtud tööd</a>
<a className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors" href="#contact">Kontakt</a>
<div className="flex items-center gap-4 ml-2">
<a className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-teal-600 transition-colors tracking-tight" href="tel:+37258415680">
<iconify-icon height="18" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            +372 5841 5680
          </a>
<button className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 cta-glow" onclick="openQuoteForm()">
            Küsi Hinnapakkumist
          </button>
</div>
</div>

<div className="flex items-center gap-4 md:hidden">
<a className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 border border-teal-100" href="tel:+37258415680">
<iconify-icon height="20" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-teal-600" onclick="toggleMobileMenu()">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
</div>
</div>

<div className="menu-closed flex flex-col bg-white/95 backdrop-blur-xl border-t border-gray-100 md:hidden absolute top-20 w-full left-0 shadow-xl z-40" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4">
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-teal-600 transition-colors" href="/" onclick="closeMobileMenu()">Avaleht</a>
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-teal-600 transition-colors" href="#services" onclick="closeMobileMenu()">Projekteerimine</a>
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-teal-600 transition-colors" href="#process" onclick="closeMobileMenu()">Tehtud tööd</a>
<a className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-teal-600 transition-colors" href="#contact" onclick="closeMobileMenu()">Kontakt</a>
<button className="w-full bg-teal-600 text-white text-base font-medium py-3 rounded-lg shadow-sm active:scale-[0.98] transition-transform cta-glow" onclick="openQuoteForm(); closeMobileMenu()">
          Küsi Hinnapakkumist
        </button>
</div>
</div>
</nav>

<section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900">

<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover object-center opacity-80" src="https://www.electricalsolutions.ee/images/ga1656f1a510b49bf2c4da002cdab298c3d949c8f5abd87e2b718eb9f8346204b7be8ed3c09adf7e7f4146f56b49689b83525798c911ea906a03b7ad338a13a51_1280.jpg"/>
<div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
</div>

<div className="relative z-10 w-full px-6 flex flex-col items-center justify-center pt-16">
<div className="max-w-4xl w-full mx-auto text-center animate-fade-in">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-md mb-8 shadow-sm ring-1 ring-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
<span className="text-teal-300 text-xs font-medium tracking-wide uppercase">
            Elektri- ja nõrkvoolu projekteerimine
          </span>
</div>
<div className="flex flex-col items-center justify-center gap-6 mb-6">

<button className="power-button relative w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center transition-all duration-500 group mb-2 hover:bg-white/10 backdrop-blur-sm" id="power-button" onclick="togglePower()">
<iconify-icon className="text-white/80 group-hover:text-white transition-colors" height="20" icon="solar:bolt-linear" width="20"></iconify-icon>
<div className="hidden absolute inset-0 rounded-full border border-teal-300 animate-ping-slow glow-ring"></div>
</button>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] transition-all duration-700 drop-shadow-xl" id="power-text">
            Kvaliteetne ehitus algab projektist
          </h1>
</div>
<p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
          Eelprojektid, põhiprojektid ja tööprojektid – Kõik ühest kohast.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 hover:-translate-y-0.5 text-white text-lg font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-300 border border-transparent cta-glow" onclick="openQuoteForm()">
            Küsi Hinnapakkumist
          </button>
<a className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/30 text-white text-lg font-medium px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ring-1 ring-white/5" href="tel:+37258415680">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
            Helista Meile
          </a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow opacity-40 hover:opacity-100 transition-opacity cursor-pointer" onclick="document.getElementById('services').scrollIntoView()">
<div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
<div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
</div>
</div>
</section>

<section className="border-gray-100 border-t border-b pt-24 pb-24 relative z-10 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 tracking-tight">
          Meie Teenused
        </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Terviklikud lahendused elektri- ja nõrkvoolusüsteemide projekteerimisel.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden reveal flex flex-col">
<div className="h-48 overflow-hidden bg-gray-50 border-b border-gray-100">
<img alt="Nõrkvoolu projekt" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://www.electricalsolutions.ee/files/andmeside2.png"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">
              Nõrkvoolu projekt
            </h3>
<p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Tänapäeval on nõrkvoolusüsteemid hoone lahutamatu osa ning erinevate süsteemide arv ja keerukus kasvab iga aastaga. Nõrkvoolusüsteemide eesmärk on suurendada hoone kasutaja mugavust ning elukvaliteeti.
            </p>
<button className="text-teal-600 font-medium text-sm flex items-center gap-1 hover:text-teal-700 transition-colors" onclick="openQuoteForm('Nõrkvoolu projekt')">
              Küsi pakkumist
              <iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden reveal delay-100 flex flex-col">
<div className="h-48 overflow-hidden bg-gray-50 border-b border-gray-100">
<img alt="Elektriprojekt" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://www.electricalsolutions.ee/files/Tugevvool%20foto.png"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">
              Elektriprojekt
            </h3>
<p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Tänapäevases majapidamises on kasutusel väga palju erinevaid elektrit vajavaid seadmeid. Arvestama peaks, et elektriprojekt ei piirdu ainult majaga vaid ka õueala ning abihoonetega.
            </p>
<button className="text-teal-600 font-medium text-sm flex items-center gap-1 hover:text-teal-700 transition-colors" onclick="openQuoteForm('Elektriprojekt')">
              Küsi pakkumist
              <iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden reveal delay-200 flex flex-col">
<div className="h-48 overflow-hidden bg-gray-50 border-b border-gray-100">
<img alt="Päikeseelektrijaam" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://www.electricalsolutions.ee/files/PV%20plaan%20P%C3%A4iksepaneelide%20plaan%20-1-.png"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">
              Päikeseelektrijaam ning päikesepaneelide projekt
            </h3>
<p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Päikesepaneelid on parim ja lihtsaim viis hakata tootma ise 100% puhast energiat ja hoida kokku elektrikuludelt. Investeering paneelidesse loob püsiva tootluse ning suurendab hoone turuväärtust.
            </p>
<button className="text-teal-600 font-medium text-sm flex items-center gap-1 hover:text-teal-700 transition-colors" onclick="openQuoteForm('Päikesepaneelide projekt')">
              Küsi pakkumist
              <iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative z-10" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 tracking-tight">
          Kuidas me töötame
        </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Lihtne ja läbipaistev teekond esmasest kontaktist valmis projektini.
        </p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">

<div className="relative flex flex-col items-center text-center group reveal">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-medium text-sm border-2 border-white">1</div>
<iconify-icon className="text-teal-600" height="32" icon="solar:phone-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Kontakt</h3>
<p className="text-sm text-gray-500 leading-relaxed">Võta meiega ühendust ja kirjelda oma soove.</p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-100">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-medium text-sm border-2 border-white">2</div>
<iconify-icon className="text-teal-600" height="32" icon="solar:document-text-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Eeluuring</h3>
<p className="text-sm text-gray-500 leading-relaxed">Tutvume olemasoleva olukorra ja tehniliste tingimustega.</p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-200">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-medium text-sm border-2 border-white">3</div>
<iconify-icon className="text-teal-600" height="32" icon="solar:calculator-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Hinnapakkumine</h3>
<p className="text-sm text-gray-500 leading-relaxed">Teeme detailse ja läbipaistva hinnapakkumise.</p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-300">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-medium text-sm border-2 border-white">4</div>
<iconify-icon className="text-teal-600" height="32" icon="solar:pen-new-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Projekteerimine</h3>
<p className="text-sm text-gray-500 leading-relaxed">Koostame projekti vastavalt kehtivatele normidele.</p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-300">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-medium text-sm border-2 border-white">5</div>
<iconify-icon className="text-teal-600" height="32" icon="solar:check-read-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Valmis projekt</h3>
<p className="text-sm text-gray-500 leading-relaxed">Väljastame valmis projekti ehituse alustamiseks.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-center border-t border-gray-100 relative z-10">
<div className="max-w-4xl mx-auto px-6 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 tracking-tight">
        Kirjuta meile!
      </h2>
<p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
        Kui soovid abi planeerimaks oma kodu elektrilahendust või unistad suurettevõttest mittesõltuvast elektrijaamast, siis me oleme siin, et aidata!
      </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-teal-600 text-white hover:bg-teal-700 text-lg font-medium px-10 py-4 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-300 cta-glow" onclick="openQuoteForm()">
          Võta ühendust
        </button>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative z-10 border-t border-gray-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 reveal text-center">
<h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 tracking-tight">
          Kontaktid
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group reveal" href="tel:+37258415680">
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-teal-600" height="32" icon="solar:phone-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Helista meile</h3>
<p className="text-lg font-medium text-teal-600 group-hover:text-teal-700 transition-colors">
            +372 5841 5680
          </p>
</a>

<a className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group reveal delay-100" href="mailto:info@electricalsolutions.ee">
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-teal-600" height="32" icon="solar:letter-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">E-mail</h3>
<p className="text-lg font-medium text-teal-600 group-hover:text-teal-700 transition-colors break-words">
            info@electricalsolutions.ee
          </p>
</a>

<div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100 group reveal delay-200">
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-teal-600" height="32" icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Tegevuspiirkond</h3>
<p className="text-lg font-medium text-gray-600">
            Eesti
          </p>
</div>
</div>
</div>
</section>

<footer className="bg-cyan-950 text-white py-16 border-t border-cyan-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div>
<img alt="Electrical Solutions" className="h-10 mb-6 brightness-0 invert object-contain" src="https://www.electricalsolutions.ee/files/electrical%20solutions-logo_1.png"/>
<p className="text-cyan-200/80 leading-relaxed mb-6 text-sm">
            Elektri- ja nõrkvoolu projekteerimine ning konsultatsioonid.
          </p>
</div>
<div>
<h3 className="text-lg font-medium mb-6 text-white">Teenused</h3>
<ul className="space-y-3 text-sm">
<li>
<a className="text-cyan-200/80 hover:text-white transition-colors" href="#services">
                Nõrkvoolu projekt
              </a>
</li>
<li>
<a className="text-cyan-200/80 hover:text-white transition-colors" href="#services">
                Elektriprojekt
              </a>
</li>
<li>
<a className="text-cyan-200/80 hover:text-white transition-colors" href="#services">
                Päikeseelektrijaam, päikesepaneelide projekt
              </a>
</li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium mb-6 text-white">Kontaktid</h3>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" height="18" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="text-white hover:text-cyan-300 transition-colors font-medium" href="tel:+37258415680">
                +372 5841 5680
              </a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" height="18" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="text-cyan-200/80 hover:text-white transition-colors" href="mailto:info@electricalsolutions.ee">
                info@electricalsolutions.ee
              </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-cyan-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
<p className="text-cyan-200/60 text-sm">
          © 2021 OÜ Electrical Solutions
        </p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4" id="quote-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeQuoteForm()"></div>
<div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in">
<div className="p-8">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-2xl font-medium text-gray-900 tracking-tight">
              Küsi Hinnapakkumist
            </h3>
<p className="text-sm text-gray-500 mt-1">
              Vastame esimesel võimalusel.
            </p>
</div>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onclick="closeQuoteForm()">
<iconify-icon className="text-gray-500" height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<form className="space-y-5" onsubmit="handleQuoteSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium uppercase tracking-wide text-gray-700">
                Eesnimi *
              </label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm placeholder-gray-300 hover:border-gray-400" placeholder="Jaan" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium uppercase tracking-wide text-gray-700">
                Perekonnanimi
              </label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm placeholder-gray-300 hover:border-gray-400" placeholder="Tamm" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium uppercase tracking-wide text-gray-700">
              E-post *
            </label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm placeholder-gray-300 hover:border-gray-400" placeholder="jaan.tamm@example.com" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium uppercase tracking-wide text-gray-700">
                Telefon *
              </label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm placeholder-gray-300 hover:border-gray-400" placeholder="+372 5xxx xxxx" required="" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium uppercase tracking-wide text-gray-700">
                Objekti asukoht *
              </label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm placeholder-gray-300 hover:border-gray-400" placeholder="nt. Tallinn" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium uppercase tracking-wide text-gray-700">
              Teenus *
            </label>
<select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm bg-white hover:border-gray-400" required="">
<option value="">Vali teenus...</option>
<option value="Nõrkvoolu projekt">Nõrkvoolu projekt</option>
<option value="Elektriprojekt">Elektriprojekt</option>
<option value="Päikesepaneelide projekt">Päikesepaneelide projekt</option>
<option value="Muu konsultatsioon">Muu konsultatsioon</option>
</select>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium uppercase tracking-wide text-gray-700">
              Projekti kirjeldus
            </label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm resize-none placeholder-gray-300 hover:border-gray-400" maxlength="500" placeholder="Kirjelda lühidalt oma soovi..." required="" rows="3"></textarea>
</div>
<button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-4 rounded-lg transition-colors shadow-md mt-4 flex items-center justify-center gap-2" type="submit">
            Saada Päring
          </button>
</form>
</div>
</div>
</div>



    </>
  );
}
