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
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
},
colors: {
fjord: {
900: '#0a0b0a',
800: '#121412',
700: '#1e201e',
100: '#e8e6e1',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('nav-inner');
            if (window.scrollY > 20) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Scroll to section
        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                const offset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Mobile Menu
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerTop = document.getElementById('hamburger-top');
        const hamburgerBottom = document.getElementById('hamburger-bottom');
        let isMobileMenuOpen = false;

        function toggleMobileMenu() {
            isMobileMenuOpen = !isMobileMenuOpen;
            if (isMobileMenuOpen) {
                mobileMenu.classList.add('active');
                document.documentElement.classList.add('no-scroll');
                hamburgerTop.style.transform = 'translateY(3.5px) rotate(45deg)';
                hamburgerBottom.style.transform = 'translateY(-3.5px) rotate(-45deg)';
                hamburgerBottom.style.width = '24px';
            } else {
                closeMobileMenu();
            }
        }

        function closeMobileMenu() {
            isMobileMenuOpen = false;
            mobileMenu.classList.remove('active');
            document.documentElement.classList.remove('no-scroll');
            hamburgerTop.style.transform = 'none';
            hamburgerBottom.style.transform = 'none';
            hamburgerBottom.style.width = '16px';
        }

        function mobileScrollAction(id) {
            closeMobileMenu();
            setTimeout(() => {
                scrollToSection(id);
            }, 300);
        }

        // Application Modal
        const appModal = document.getElementById('application-modal');

        function openApplicationModal() {
            appModal.classList.add('active');
            document.documentElement.classList.add('no-scroll');
        }

        function closeApplicationModal() {
            appModal.classList.remove('active');
            if (!isMobileMenuOpen) {
                document.documentElement.classList.remove('no-scroll');
            }
        }

        function submitApplication() {
            const btn = appModal.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Žádost odeslána';
            btn.classList.add('bg-stone-300');
            setTimeout(() => {
                closeApplicationModal();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('bg-stone-300');
                    appModal.querySelector('form').reset();
                }, 300);
            }, 1500);
        }

        // Fade In Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
        
        // Initial check for fade-ins already in viewport
        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    el.classList.add('visible');
                }
            });
        }, 100);
    
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
      

<nav className="fixed z-50 top-0 inset-x-0 w-full pt-4 px-4 md:pt-6 md:px-12 lg:px-24" id="main-nav">
<div className="nav-bar flex items-center justify-between w-full max-w-7xl mx-auto bg-fjord-900/80 backdrop-blur-xl border border-stone-800 rounded-xl px-5 py-3 md:px-6 md:py-3.5" id="nav-inner">
<a className="uppercase text-base md:text-lg font-medium tracking-tighter font-serif text-fjord-100 shrink-0" href="#" onclick="event.preventDefault(); window.scrollTo({top:0,behavior:'smooth'});">Aysén Fjord</a>
<div className="hidden lg:flex bg-stone-800/40 border-stone-700/50 border rounded-lg p-1.5 gap-1 items-center">
<button className="px-3.5 py-1.5 text-xs font-medium text-stone-300 hover:text-fjord-100 hover:bg-stone-700/60 rounded-md transition-all cursor-pointer" onclick="scrollToSection('projekt')" type="button">Projekt</button>
<button className="px-3.5 py-1.5 text-xs font-medium text-stone-300 hover:text-fjord-100 hover:bg-stone-700/60 rounded-md transition-all cursor-pointer" onclick="scrollToSection('expedice')" type="button">Expedice 2027</button>
<button className="px-3.5 py-1.5 text-xs font-medium text-stone-300 hover:text-fjord-100 hover:bg-stone-700/60 rounded-md transition-all cursor-pointer" onclick="scrollToSection('roadmapa')" type="button">Roadmapa</button>
<button className="px-3.5 py-1.5 text-xs font-medium text-stone-300 hover:text-fjord-100 hover:bg-stone-700/60 rounded-md transition-all cursor-pointer" onclick="scrollToSection('region')" type="button">Region</button>
<button className="px-3.5 py-1.5 text-xs font-medium text-stone-300 hover:text-fjord-100 hover:bg-stone-700/60 rounded-md transition-all cursor-pointer" onclick="scrollToSection('zakladatel')" type="button">Zakladatel</button>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:inline-flex hover:bg-stone-200 transition-all text-xs font-medium text-fjord-900 bg-fjord-100 rounded-md px-5 py-2.5 shadow-sm items-center justify-center cursor-pointer" onclick="openApplicationModal()" type="button">
                    Přihláška
                </button>
<button aria-label="Otevřít menu" className="lg:hidden flex flex-col gap-1.5 items-end p-2 -mr-2 cursor-pointer" id="mobile-menu-btn" onclick="toggleMobileMenu()" type="button">
<span className="w-6 h-px bg-fjord-100 transition-all duration-300" id="hamburger-top"></span>
<span className="w-4 h-px bg-fjord-100 transition-all duration-300" id="hamburger-bottom"></span>
</button>
</div>
</div>
</nav>

<div className="mobile-menu fixed inset-0 z-[40] bg-fjord-900 flex flex-col px-6 pt-28 pb-12 overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 mt-4">
<button className="font-serif text-2xl tracking-tight text-fjord-100 font-medium text-left cursor-pointer" onclick="mobileScrollAction('projekt')" type="button">Projekt</button>
<button className="font-serif text-2xl tracking-tight text-fjord-100 font-medium text-left cursor-pointer" onclick="mobileScrollAction('expedice')" type="button">Expedice 2027</button>
<button className="font-serif text-2xl tracking-tight text-fjord-100 font-medium text-left cursor-pointer" onclick="mobileScrollAction('roadmapa')" type="button">Roadmapa</button>
<button className="font-serif text-2xl tracking-tight text-fjord-100 font-medium text-left cursor-pointer" onclick="mobileScrollAction('region')" type="button">Region</button>
<button className="font-serif text-2xl tracking-tight text-fjord-100 font-medium text-left cursor-pointer" onclick="mobileScrollAction('zakladatel')" type="button">Zakladatel</button>
<div className="mt-8 pt-8 border-t border-stone-800">
<button className="w-full inline-flex hover:bg-stone-200 transition-all text-sm font-medium text-fjord-900 bg-fjord-100 rounded-md py-3 px-6 shadow-sm items-center justify-center cursor-pointer" onclick="closeMobileMenu(); setTimeout(function(){ openApplicationModal(); }, 350);" type="button">
                    Přihláška
                </button>
</div>
</div>
</div>

<main className="flex-grow pt-32 md:pt-40 pb-20 px-4 md:px-12 lg:px-24">

<section className="max-w-4xl mx-auto text-center mb-32 md:mb-48 fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-800 bg-stone-900/30 text-xs font-medium text-stone-400 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-stone-500"></span>
                Dlouhodobá investice a vývoj
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-fjord-100 font-medium mb-6 leading-tight">
                Aysén Fjord Project
            </h1>
<p className="text-lg md:text-xl text-stone-300 font-light mb-4">
                Limitovaná expedice v oblasti, kde vzniká dlouhodobá základna.
            </p>
<p className="text-sm md:text-base text-stone-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Projekt definovaný malou kapacitou, kontrolovaným růstem a dlouhodobým horizontem realizace. Odmítáme masový přístup ve prospěch udržitelného budování infrastruktury.
            </p>
<button className="inline-flex items-center gap-2 hover:bg-stone-200 transition-all text-sm font-medium text-fjord-900 bg-fjord-100 rounded-md px-6 py-3 shadow-sm cursor-pointer" onclick="openApplicationModal()" type="button">
                Požádat o účast – Expedice 2027
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</section>

<section className="max-w-5xl mx-auto mb-32 scroll-mt-32 fade-in" id="projekt">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-serif tracking-tight text-fjord-100 font-medium mb-3">Rozvoj projektu</h2>
<p className="text-sm md:text-base text-stone-400 font-light">Strukturovaný postup realizace infrastruktury ve dvou jasných fázích.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-10">

<div className="bg-fjord-800 border border-stone-800/60 rounded-xl p-8 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-stone-800/50 flex items-center justify-center border border-stone-700/50 mb-6">
<iconify-icon className="text-stone-300" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-fjord-100 mb-3 tracking-tight">FÁZE 1 – Operativní základna</h3>
<p className="text-xs text-stone-500 font-medium mb-4 uppercase tracking-wider">Lokalita: Río Blanco</p>
<p className="text-sm text-stone-400 font-light leading-relaxed">
                        Malá technická budova sloužící jako primární logistické zázemí projektu. Základní bod pro koordinaci dalšího postupu a operativní činnosti.
                    </p>
</div>

<div className="bg-fjord-800 border border-stone-800/60 rounded-xl p-8 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-stone-800/50 flex items-center justify-center border border-stone-700/50 mb-6">
<iconify-icon className="text-stone-300" icon="solar:home-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-fjord-100 mb-3 tracking-tight">FÁZE 2 – Lote 63</h3>
<p className="text-xs text-stone-500 font-medium mb-4 uppercase tracking-wider">Horizont: 3–5 let</p>
<p className="text-sm text-stone-400 font-light leading-relaxed">
                        Kompaktní základna s podlahovou plochou do 60 m². Určena pro striktně kontrolovanou kapacitu 4–6 osob s možností budoucího rozšíření. Inspirována minimalistickou off-grid architekturou.
                    </p>
</div>
</div>

<div className="mt-16 bg-stone-900/30 border border-stone-800/60 rounded-xl p-8 md:p-10">
<h3 className="text-xl font-serif tracking-tight text-fjord-100 font-medium mb-4">Koncepce budoucí základny</h3>
<p className="text-sm text-stone-400 font-light mb-8">Inspirováno současnou minimalistickou off-grid architekturou.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 shrink-0 mt-0.5" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-stone-300 font-light">Off-grid řešení</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 shrink-0 mt-0.5" icon="solar:thermometer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-stone-300 font-light">Silná tepelná izolace</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 shrink-0 mt-0.5" icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-stone-300 font-light">Kompaktní architektura</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 shrink-0 mt-0.5" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-stone-300 font-light">Nízký dopad na krajinu</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 shrink-0 mt-0.5" icon="solar:shield-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-stone-300 font-light">Odolnost vůči klimatu Patagonie</span>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto mb-32 scroll-mt-32 fade-in" id="expedice">
<div className="grid lg:grid-cols-5 gap-10 items-start">
<div className="lg:col-span-2">
<h2 className="text-2xl md:text-3xl font-serif tracking-tight text-fjord-100 font-medium mb-4">Expedice 2027</h2>
<p className="text-sm text-stone-400 font-light leading-relaxed mb-6">
                        Nejedná se o standardní turistický produkt, nýbrž o exkluzivní součást dlouhodobého projektu s omezeným přístupem. Striktně malá skupina zaručuje plnou kontrolu nad logistikou v náročném terénu.
                    </p>
<div className="inline-flex flex-col gap-1 border-l-2 border-stone-700 pl-4 py-1">
<span className="text-xs text-stone-500 font-medium uppercase tracking-wider">Kapacita</span>
<span className="text-lg text-fjord-100 font-medium tracking-tight">Maximálně 6 osob</span>
</div>
</div>
<div className="lg:col-span-3 bg-fjord-800 border border-stone-800/60 rounded-xl p-8">
<div className="flex items-end gap-3 mb-6">
<span className="text-3xl font-serif tracking-tight text-fjord-100 font-medium">6 000 USD</span>
<span className="text-sm text-stone-500 font-light mb-1">/ osoba</span>
</div>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-600 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-stone-300 font-light">Kontrolovaná logistika</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-600 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-stone-300 font-light">Malá skupina (max. 6 osob)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-600 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-stone-300 font-light">Individuální přístup</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-600 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-stone-300 font-light">Spolupráce s lokálními partnery</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone-600 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-stone-300 font-light">Součást dlouhodobého projektu</span>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto mb-32 scroll-mt-32 fade-in" id="roadmapa">
<h2 className="text-2xl md:text-3xl font-serif tracking-tight text-fjord-100 font-medium mb-10 text-center">Roadmapa 2026–2030</h2>
<div className="relative pl-4 md:pl-0">

<div className="timeline-item relative flex items-start gap-6 mb-10 md:mb-12">
<div className="timeline-line absolute left-0 md:left-1/2 md:-ml-[0.5px] top-0 bottom-0"></div>
<div className="hidden md:block w-1/2 pr-10 text-right pt-1">
<span className="text-sm font-medium text-fjord-100">Příprava logistiky</span>
</div>
<div className="relative z-10 w-4 h-4 rounded-full bg-stone-800 border-2 border-stone-500 md:mx-auto mt-1 shrink-0"></div>
<div className="w-full md:w-1/2 md:pl-10 pb-2">
<span className="inline-block text-xs font-medium text-stone-500 mb-1">2026</span>
<h4 className="md:hidden text-sm font-medium text-fjord-100 mb-2">Příprava logistiky</h4>
<p className="text-sm text-stone-400 font-light leading-relaxed">Vybudování operativní základny Río Blanco a konsolidace dodavatelského řetězce.</p>
</div>
</div>
<div className="timeline-item relative flex items-start gap-6 mb-10 md:mb-12">
<div className="timeline-line absolute left-0 md:left-1/2 md:-ml-[0.5px] top-0 bottom-0"></div>
<div className="w-full md:w-1/2 md:pr-10 md:text-right pb-2 md:order-1 order-3">
<span className="inline-block text-xs font-medium text-stone-500 mb-1">2027</span>
<h4 className="md:hidden text-sm font-medium text-fjord-100 mb-2">Limitovaná expedice</h4>
<p className="text-sm text-stone-400 font-light leading-relaxed">Realizace expedice s maximální kapacitou 6 osob. Plánování pro budoucí zástavbu.</p>
</div>
<div className="relative z-10 w-4 h-4 rounded-full bg-stone-800 border-2 border-stone-500 md:mx-auto mt-1 shrink-0 md:order-2 order-2"></div>
<div className="hidden md:block w-1/2 pl-10 pt-1 md:order-3">
<span className="text-sm font-medium text-fjord-100">Limitovaná expedice</span>
</div>
</div>
<div className="timeline-item relative flex items-start gap-6 mb-10 md:mb-12">
<div className="timeline-line absolute left-0 md:left-1/2 md:-ml-[0.5px] top-0 bottom-0"></div>
<div className="hidden md:block w-1/2 pr-10 text-right pt-1">
<span className="text-sm font-medium text-fjord-100">Výstavba infrastruktury</span>
</div>
<div className="relative z-10 w-4 h-4 rounded-full bg-stone-800 border-2 border-stone-600/50 md:mx-auto mt-1 shrink-0"></div>
<div className="w-full md:w-1/2 md:pl-10 pb-2">
<span className="inline-block text-xs font-medium text-stone-500 mb-1">2028–2029</span>
<h4 className="md:hidden text-sm font-medium text-fjord-100 mb-2">Výstavba infrastruktury</h4>
<p className="text-sm text-stone-400 font-light leading-relaxed">Realizace technického zázemí a off-grid výstavba na Lote 63 v omezeném rozsahu.</p>
</div>
</div>
<div className="timeline-item relative flex items-start gap-6">
<div className="timeline-line absolute left-0 md:left-1/2 md:-ml-[0.5px] top-0 bottom-0"></div>
<div className="w-full md:w-1/2 md:pr-10 md:text-right pb-2 md:order-1 order-3">
<span className="inline-block text-xs font-medium text-stone-500 mb-1">2030</span>
<h4 className="md:hidden text-sm font-medium text-fjord-100 mb-2">Dokončení základny</h4>
<p className="text-sm text-stone-400 font-light leading-relaxed">Plná operabilita kompaktní off-grid základny s kontrolovaným přístupem.</p>
</div>
<div className="relative z-10 w-4 h-4 rounded-full bg-stone-800 border-2 border-stone-600/50 md:mx-auto mt-1 shrink-0 md:order-2 order-2"></div>
<div className="hidden md:block w-1/2 pl-10 pt-1 md:order-3">
<span className="text-sm font-medium text-fjord-100">Dokončení základny</span>
</div>
</div>
</div>
</section>

<div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20 fade-in">

<section className="scroll-mt-32" id="region">
<div className="bg-stone-900/40 border border-stone-800 rounded-xl p-8 h-full">
<div className="w-10 h-10 rounded-lg bg-stone-800/50 flex items-center justify-center border border-stone-700/50 mb-6">
<iconify-icon className="text-stone-300" icon="solar:map-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h2 className="text-xl font-serif tracking-tight text-fjord-100 font-medium mb-4">Region Aysén</h2>
<div className="text-sm text-stone-400 font-light space-y-4 leading-relaxed">
<p>Oblast definovaná extrémně nízkou hustotou osídlení a limitovanou infrastrukturou. Projekt se vědomě distancuje od masových turistických destinací.</p>
<p>Zaměřujeme se na dlouhodobý potenciál místa. Komplikovaná dostupnost zde slouží jako přirozený filtr a garance zachování nedotčeného území pro omezený okruh účastníků.</p>
</div>
</div>
</section>

<section className="scroll-mt-32" id="zakladatel">
<div className="bg-stone-900/40 border border-stone-800 rounded-xl p-8 h-full">
<div className="w-10 h-10 rounded-lg bg-stone-800/50 flex items-center justify-center border border-stone-700/50 mb-6">
<iconify-icon className="text-stone-300" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h2 className="text-xl font-serif tracking-tight text-fjord-100 font-medium mb-4">Zakladatel &amp; Řízení</h2>
<div className="text-sm text-stone-400 font-light space-y-4 leading-relaxed">
<p>Projekt vychází z dlouhodobého působení v regionu a významné osobní investice. Cílem je postupný a striktně kontrolovaný rozvoj základny.</p>
<p>Zásadní je profesionální řízení, odpovědný přístup k místnímu prostředí a budování dlouhodobých vazeb namísto jednorázových komerčních aktivit.</p>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-stone-800 py-8 px-4 md:px-12 text-center text-xs font-light text-stone-500">
<p>© 2024 Aysén Fjord Project. Privátní projekt s omezeným vstupem.</p>
</footer>

<div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-6" id="application-modal" onclick="closeApplicationModal()">
<div className="absolute inset-0 bg-fjord-900/90 backdrop-blur-sm"></div>
<div className="modal-content relative w-full max-w-md bg-fjord-800 border border-stone-800 shadow-2xl flex flex-col rounded-xl" onclick="event.stopPropagation()">
<div className="flex justify-between items-start p-6 border-b border-stone-800/50">
<div>
<h3 className="font-serif text-xl tracking-tight text-fjord-100 font-medium">Limitovaná expedice 2027 – 6 míst</h3>
</div>
<button aria-label="Zavřít" className="text-stone-500 hover:text-fjord-100 transition-colors p-1 -mr-1 -mt-1 cursor-pointer" onclick="closeApplicationModal()" type="button">
<iconify-icon icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
<div className="p-6">
<p className="text-sm text-stone-300 font-light mb-6">Získejte detailní informace o účasti.</p>
<form className="flex flex-col gap-4" onsubmit="event.preventDefault(); submitApplication();">
<div>
<label className="block text-xs font-medium text-stone-400 mb-1.5" htmlFor="name">Jméno a příjmení</label>
<input className="form-input" id="name" placeholder="Jméno" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-400 mb-1.5" htmlFor="email">E-mailová adresa</label>
<input className="form-input" id="email" placeholder="E-mail" required="" type="email"/>
</div>
<button className="mt-2 w-full flex items-center justify-center gap-2 bg-fjord-100 hover:bg-stone-200 text-fjord-900 text-sm font-medium py-3 rounded-md transition-colors cursor-pointer" type="submit">
                        Odeslat žádost
                    </button>
</form>
</div>
</div>
</div>



    </>
  );
}
