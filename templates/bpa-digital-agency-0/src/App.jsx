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



      // Router Logic
      const pages = document.querySelectorAll('.page-section');
      const navLinks = document.querySelectorAll('.nav-link');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      let currentPath = 'home';

      function navigateTo(targetId) {
          // Hide all pages
          pages.forEach(page => {
              page.classList.remove('active');
          });

          // Show target page
          const targetPage = document.getElementById(targetId);
          if(targetPage) {
              targetPage.classList.add('active');
          }

          // Update active state in nav (desktop)
          navLinks.forEach(link => {
              // Reset style
              if(link.closest('nav') && link.classList.contains('text-white')) {
                  link.classList.remove('text-white');
                  link.classList.add('text-neutral-400');
              }

              // Set active style
              if(link.getAttribute('data-target') === targetId && link.closest('nav')) {
                  link.classList.remove('text-neutral-400');
                  link.classList.add('text-white');
              }
          });

          // Scroll to top
          window.scrollTo(0, 0);

          // Close mobile menu if open
          if(!mobileMenu.classList.contains('hidden')) {
              toggleMobileMenu();
          }

          currentPath = targetId;
      }

      // Add click events to all nav links
      navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
              e.preventDefault();
              const target = link.getAttribute('data-target');
              if(target) navigateTo(target);
          });
      });

      // Mobile Menu Toggle
      function toggleMobileMenu() {
          mobileMenu.classList.toggle('hidden');
          mobileMenu.classList.toggle('flex');
          const icon = mobileMenuBtn.querySelector('iconify-icon');
          if(mobileMenu.classList.contains('hidden')) {
              icon.setAttribute('icon', 'solar:hamburger-menu-linear');
          } else {
              icon.setAttribute('icon', 'solar:close-circle-linear');
          }
      }
      mobileMenuBtn.addEventListener('click', toggleMobileMenu);

      // Form Submission Mock
      function handleFormSubmit(e, form) {
          e.preventDefault();
          const btn = form.querySelector('button[type="submit"]');
          const originalText = btn.innerHTML;

          btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" class="text-lg"></iconify-icon> Odesláno';
          btn.classList.add('bg-white');

          setTimeout(() => {
              btn.innerHTML = originalText;
              btn.classList.remove('bg-white');
              form.reset();
          }, 3000);
      }

      // Cookie Banner Logic
      function handleCookies(action) {
          const banner = document.getElementById('cookie-banner');
          banner.classList.add('translate-y-full');
          setTimeout(() => {
              banner.classList.add('hidden');
          }, 500); // Wait for transition
          localStorage.setItem('bpa_cookies_accepted', action);
      }

      // Check cookies on load
      if(localStorage.getItem('bpa_cookies_accepted')) {
          document.getElementById('cookie-banner').classList.add('hidden');
      }

      // Init initial page active state
      navigateTo('home');
    
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
      

<header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="nav-link text-white text-xl font-semibold tracking-tighter hover:text-[#ccff00] transition-colors" data-target="home">
          BPA.
        </button>

<nav className="hidden md:flex items-center gap-8">
<button className="nav-link text-sm hover:text-white transition-colors" data-target="about">
            O nás
          </button>
<button className="nav-link text-sm hover:text-white transition-colors" data-target="services">
            Služby
          </button>
<button className="nav-link text-sm hover:text-white transition-colors" data-target="work">
            Naše práce
          </button>
<button className="nav-link text-sm hover:text-white transition-colors" data-target="blog">
            Blog
          </button>
<button className="nav-link text-sm hover:text-white transition-colors" data-target="career">
            Kariéra
          </button>
</nav>

<div className="hidden md:block">
<button className="nav-link bg-[#ccff00] text-black px-6 py-2.5 text-sm font-medium hover:bg-[#b3e600] transition-colors rounded-full inline-flex items-center gap-2" data-target="contact">
            Získat návrh
            <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</button>
</div>

<button className="md:hidden text-white p-2" id="mobile-menu-btn">
<iconify-icon height="1.5em" icon="solar:hamburger-menu-linear" width="1.5em"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-black border-b border-neutral-900 p-6 flex-col gap-6" id="mobile-menu">
<button className="nav-link text-lg text-white text-left" data-target="about">
          O nás
        </button>
<button className="nav-link text-lg text-white text-left" data-target="services">
          Služby
        </button>
<button className="nav-link text-lg text-white text-left" data-target="work">
          Naše práce
        </button>
<button className="nav-link text-lg text-white text-left" data-target="blog">
          Blog
        </button>
<button className="nav-link text-lg text-white text-left" data-target="career">
          Kariéra
        </button>
<button className="nav-link bg-[#ccff00] text-black px-5 py-3 text-sm font-medium rounded-full flex justify-center items-center gap-2 mt-4" data-target="contact">
          Získat návrh
          <iconify-icon height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</button>
</div>
</header>

<main className="flex-grow pt-20">

<section className="page-section active" id="home">

<div className="max-w-7xl mx-auto px-6 py-24 md:py-40 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-300 mb-8">
<span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse"></span>
            Nové case studies online
          </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter max-w-4xl leading-tight mb-6">
            Tvoříme digitální značky, které udávají
            <span className="text-[#ccff00]">rytmus trhu.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 font-light">
            Spojujeme strategii, precizní design a technologie. Pro firmy, které
            nechtějí následovat, ale vést.
          </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="nav-link bg-[#ccff00] text-black px-8 py-3.5 text-sm font-medium hover:bg-[#b3e600] transition-colors rounded-full inline-flex justify-center items-center gap-2" data-target="work">
              Prohlédnout naši práci
            </button>
<button className="nav-link bg-transparent border border-neutral-700 text-white px-8 py-3.5 text-sm font-medium hover:bg-neutral-900 transition-colors rounded-full inline-flex justify-center items-center gap-2" data-target="contact">
              Domluvit konzultaci
            </button>
</div>
</div>

<div className="border-y border-neutral-900 py-8 overflow-hidden bg-neutral-950">
<div className="flex gap-12 items-center opacity-50 text-sm tracking-widest uppercase font-medium justify-center flex-wrap px-6">
<span>Fintech</span>
            •
            <span>E-commerce</span>
            •
            <span>SaaS</span>
            •
            <span>B2B Enterprise</span>
            •
            <span>Lifestyle</span>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                Komplexní ekosystém.
              </h2>
<p className="text-neutral-400 max-w-md">
                Neděláme jen hezké obrázky. Budujeme funkční byznys nástroje.
              </p>
</div>
<button className="nav-link group text-white text-sm font-medium inline-flex items-center gap-2 hover:text-[#ccff00] transition-colors" data-target="services">
              Všechny služby
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors group rounded-3xl">
<iconify-icon className="text-3xl text-[#ccff00] mb-6" icon="solar:pen-new-square-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3">
                Brand Strategie
              </h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                Definujeme vaši pozici na trhu, vizuální identitu a tón
                komunikace. Základ pro růst.
              </p>
</div>

<div className="p-8 border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors group rounded-3xl">
<iconify-icon className="text-3xl text-[#ccff00] mb-6" icon="solar:monitor-smartphone-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3">
                Digitální Design
              </h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                Weby a aplikace, které nejen vypadají prémiově, ale hlavně
                konvertují uživatele na zákazníky.
              </p>
</div>

<div className="p-8 border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors group rounded-3xl">
<iconify-icon className="text-3xl text-[#ccff00] mb-6" icon="solar:code-square-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3">
                Vývoj &amp; Tech
              </h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                Škálovatelná architektura, moderní frameworky a blesková
                rychlost načítání.
              </p>
</div>
</div>
</div>

<div className="bg-neutral-950 py-24 md:py-32 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                Vybrané projekty.
              </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer nav-link" data-target="work-detail">
<div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative rounded-3xl">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
<span className="bg-white text-black px-5 py-2.5 text-xs font-medium rounded-full">
                      Zobrazit Case Study
                    </span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                      NovaPay App
                    </h3>
<p className="text-sm text-neutral-500">
                      UX/UI Design, Frontend Vývoj
                    </p>
</div>
<span className="text-xs border border-neutral-800 px-3 py-1 text-neutral-400 rounded-full">
                    2023
                  </span>
</div>
</div>

<div className="group cursor-pointer nav-link md:mt-16" data-target="work-detail">
<div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative rounded-3xl">
<div className="absolute inset-0 bg-gradient-to-bl from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
<span className="bg-white text-black px-5 py-2.5 text-xs font-medium rounded-full">
                      Zobrazit Case Study
                    </span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                      Aura Lifestyle
                    </h3>
<p className="text-sm text-neutral-500">
                      Rebranding, E-commerce
                    </p>
</div>
<span className="text-xs border border-neutral-800 px-3 py-1 text-neutral-400 rounded-full">
                    2024
                  </span>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="nav-link bg-transparent border border-neutral-700 text-white px-8 py-3.5 text-sm font-medium hover:bg-neutral-900 transition-colors rounded-full inline-flex items-center gap-2" data-target="work">
                Zobrazit všechny projekty
              </button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-24 md:py-40 text-center border-t border-neutral-900">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-8">
            Jste připraveni růst?
          </h2>
<button className="nav-link bg-[#ccff00] text-black px-8 py-4 text-base font-medium hover:bg-[#b3e600] transition-colors rounded-full inline-flex items-center gap-2" data-target="contact">
            Začít spolupráci
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="page-section" id="about">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8">
            My jsme BPA.
          </h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<p className="text-lg text-neutral-400 leading-relaxed font-light">
              Věříme, že průměrný design je ztráta peněz. Od roku 2018 pomáháme
              ambiciózním firmám překročit vlastní stín. Nejsme jen dodavatelé,
              stáváme se vašimi partnery v digitálním světě. Analyzujeme,
              navrhujeme, vyvíjíme a optimalizujeme. Vše pod jednou střechou,
              bez kompromisů v kvalitě.
            </p>
<div className="grid grid-cols-2 gap-8 bg-neutral-900/20 border border-neutral-800 p-8 rounded-3xl">
<div>
<div className="text-4xl text-white font-medium mb-2 tracking-tighter">
                  50+
                </div>
<div className="text-sm text-neutral-500">Úspěšných projektů</div>
</div>
<div>
<div className="text-4xl text-white font-medium mb-2 tracking-tighter">
                  15
                </div>
<div className="text-sm text-neutral-500">Expertů v týmu</div>
</div>
<div>
<div className="text-4xl text-white font-medium mb-2 tracking-tighter">
                  6
                </div>
<div className="text-sm text-neutral-500">Let na trhu</div>
</div>
<div>
<div className="text-4xl text-[#ccff00] font-medium mb-2 tracking-tighter">
                  100%
                </div>
<div className="text-sm text-neutral-500">In-house vývoj</div>
</div>
</div>
</div>
<div className="mt-32">
<h2 className="text-2xl text-white font-medium mb-12 tracking-tight border-b border-neutral-900 pb-4">
              Naše hodnoty
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<div className="text-[#ccff00] text-sm font-medium mb-4">
                  01 // Transparentnost
                </div>
<p className="text-sm text-neutral-400">
                  Žádné skryté poplatky ani sliby, které nedokážeme splnit.
                  Říkáme věci na rovinu, i když to není příjemné.
                </p>
</div>
<div>
<div className="text-[#ccff00] text-sm font-medium mb-4">
                  02 // Daty řízený design
                </div>
<p className="text-sm text-neutral-400">
                  Rozhodnutí neděláme na základě pocitů. Analyzujeme chování
                  uživatelů a navrhujeme řešení, která přinášejí reálná čísla.
                </p>
</div>
<div>
<div className="text-[#ccff00] text-sm font-medium mb-4">
                  03 // Extrémní vlastnictví
                </div>
<p className="text-sm text-neutral-400">
                  Za váš projekt přebíráme plnou zodpovědnost. Úspěch vašeho
                  byznysu bereme jako náš vlastní.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="services">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6">
            Jak vám pomůžeme.
          </h1>
<p className="text-lg text-neutral-400 max-w-2xl mb-24 font-light">
            Nabízíme ucelené služby od prvotní strategie až po spuštění a
            následný marketing. Vyberte si to, co váš byznys aktuálně pálí
            nejvíce.
          </p>
<div className="flex flex-col gap-16 md:gap-24">

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-neutral-900 pt-16">
<div className="md:col-span-4">
<h2 className="text-2xl text-white font-medium tracking-tight mb-4 sticky top-24">
                  Branding &amp; Strategie
                </h2>
</div>
<div className="md:col-span-8 flex flex-col gap-6">
<p className="text-neutral-400">
                  Značka je víc než logo. Je to pocit, který zanecháte.
                  Vytvoříme silný fundament, na kterém můžete stavět další
                  dekádu.
                </p>
<ul className="text-sm text-neutral-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon>
                    Pozicování na trhu
                  </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon>
                    Vizuální identita (Logomanuál)
                  </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon>
                    Tón komunikace (Tone of Voice)
                  </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon>
                    Naming &amp; Copywriting
                  </li>
</ul>
<div className="mt-4">
<button className="nav-link text-sm font-medium text-white border border-neutral-700 px-6 py-2.5 rounded-full hover:bg-neutral-900 transition-colors" data-target="contact">
                    Poptat branding
                  </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-neutral-900 pt-16">
<div className="md:col-span-4">
<h2 className="text-2xl text-white font-medium tracking-tight mb-4 sticky top-24">
                  Digitální Design &amp; Web
                </h2>
</div>
<div className="md:col-span-8 flex flex-col gap-6">
<p className="text-neutral-400">
                  Navrhujeme a vyvíjíme weby, které sbírají ceny za design a
                  generují leady pro váš obchodní tým. Rychlé, přístupné a
                  responzivní.
                </p>
<ul className="text-sm text-neutral-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon>
                    UX/UI Design
                  </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon>
                    Korporátní weby
                  </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon>
                    E-commerce řešení
                  </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#ccff00]" icon="solar:check-circle-linear"></iconify-icon>
                    Webové aplikace
                  </li>
</ul>
<div className="mt-4">
<button className="nav-link text-sm font-medium text-white border border-neutral-700 px-6 py-2.5 rounded-full hover:bg-neutral-900 transition-colors" data-target="contact">
                    Poptat web
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="work">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-16">
            Výsledky naší práce.
          </h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer nav-link" data-target="work-detail">
<div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative rounded-3xl">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
<span className="bg-[#ccff00] text-black px-5 py-2.5 text-xs font-medium rounded-full inline-flex items-center gap-2">
                    Číst Case Study
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>
</div>
<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                NovaPay App
              </h3>
<p className="text-sm text-neutral-500 mb-4">
                Kompletní redesign fintech aplikace pro 50k+ uživatelů s důrazem
                na konverzi a bezpečnost.
              </p>
<div className="flex gap-2">
<span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">
                  UX/UI
                </span>
<span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">
                  Frontend
                </span>
</div>
</div>

<div className="group cursor-pointer nav-link md:mt-24" data-target="work-detail">
<div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative rounded-3xl">
<div className="absolute inset-0 bg-gradient-to-bl from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
<span className="bg-[#ccff00] text-black px-5 py-2.5 text-xs font-medium rounded-full inline-flex items-center gap-2">
                    Číst Case Study
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>
</div>
<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                Aura Lifestyle
              </h3>
<p className="text-sm text-neutral-500 mb-4">
                Rebranding a vývoj nového e-commerce řešení na míru, které
                zvýšilo tržby o 140% v prvním kvartálu.
              </p>
<div className="flex gap-2">
<span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">
                  Branding
                </span>
<span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">
                  E-commerce
                </span>
</div>
</div>

<div className="group cursor-pointer nav-link" data-target="work-detail">
<div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative rounded-3xl">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
<span className="bg-[#ccff00] text-black px-5 py-2.5 text-xs font-medium rounded-full inline-flex items-center gap-2">
                    Číst Case Study
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>
</div>
<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                EcoLogistics
              </h3>
<p className="text-sm text-neutral-500 mb-4">
                B2B webový portál pro nadnárodní logistickou společnost.
              </p>
<div className="flex gap-2">
<span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">
                  Web Design
                </span>
<span className="text-xs border border-neutral-800 px-3 py-1.5 rounded-full text-neutral-400">
                  Development
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="work-detail">
<div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
<button className="nav-link text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-2 mb-12" data-target="work">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
            Zpět na projekty
          </button>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8">
            NovaPay: Redefinice finanční aplikace.
          </h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-neutral-900 mb-12">
<div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">
                Klient
              </div>
<div className="text-sm text-white">NovaPay s.r.o.</div>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">
                Služby
              </div>
<div className="text-sm text-white">UX/UI, Vývoj</div>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">
                Rok
              </div>
<div className="text-sm text-white">2023</div>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">
                Web
              </div>
<div className="text-sm text-[#ccff00] cursor-pointer hover:underline">
                novapay.cz
              </div>
</div>
</div>
<div className="aspect-video bg-neutral-900 mb-12 rounded-3xl"></div>
<div className="prose prose-invert prose-neutral max-w-none">
<h2 className="text-2xl font-medium text-white tracking-tight mb-4 mt-8">
              Výzva
            </h2>
<p className="text-neutral-400 mb-6 leading-relaxed">
              Klient k nám přišel se zastaralou aplikací, která trpěla vysokou
              mírou opuštění při registraci (drop-off rate). Uživatelé si
              stěžovali na nepřehledné rozhraní a pomalé načítání. Úkolem bylo
              od základu navrhnout novou flow a zmodernizovat vizuální styl tak,
              aby působil důvěryhodně a moderně.
            </p>
<h2 className="text-2xl font-medium text-white tracking-tight mb-4 mt-12">
              Naše řešení
            </h2>
<p className="text-neutral-400 mb-6 leading-relaxed">
              Provedli jsme rozsáhlý uživatelský výzkum a navrhli zcela novou
              informační architekturu. Kladli jsme důraz na zjednodušení
              registračního procesu na pouhé 3 kroky. Vizuální jazyk jsme
              postavili na čistých liniích, vysokém kontrastu a responzivní
              typografii.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
<div className="aspect-square bg-neutral-900 rounded-3xl"></div>
<div className="aspect-square bg-neutral-900 rounded-3xl"></div>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-4 mt-12">
              Výsledky
            </h2>
<ul className="text-neutral-400 space-y-2 mb-16">
<li className="flex gap-2">
<span className="text-[#ccff00]">→</span>
                Snížení drop-off rate o 45%
              </li>
<li className="flex gap-2">
<span className="text-[#ccff00]">→</span>
                Zvýšení měsíčních aktivních uživatelů o 120%
              </li>
<li className="flex gap-2">
<span className="text-[#ccff00]">→</span>
                Ocenění za App Design roku
              </li>
</ul>
</div>
<div className="border-t border-neutral-900 pt-16 mt-16 text-center">
<h3 className="text-2xl font-medium text-white mb-6">
              Líbí se vám tento projekt?
            </h3>
<button className="nav-link bg-[#ccff00] text-black px-8 py-3.5 text-sm font-medium hover:bg-[#b3e600] transition-colors rounded-full" data-target="contact">
              Pojďme probrat ten váš
            </button>
</div>
</div>
</section>

<section className="page-section" id="blog">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-16">
            Pohled pod pokličku.
          </h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer nav-link flex flex-col h-full" data-target="blog-detail">
<div className="aspect-video bg-neutral-900 mb-4 overflow-hidden rounded-3xl">
<div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
<span className="text-[#ccff00]">Design</span>
<span>12. Března 2024</span>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#ccff00] transition-colors">
                Proč minimalismus ve web designu konvertuje lépe
              </h3>
<p className="text-sm text-neutral-400 mb-6 flex-grow">
                Méně je někdy více. Analýza 50 e-commerce webů ukazuje, že čistý
                design vede k vyšším prodejům.
              </p>
<span className="text-xs font-medium text-white group-hover:text-[#ccff00] transition-colors inline-flex items-center gap-1">
                Přečíst článek
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group cursor-pointer nav-link flex flex-col h-full" data-target="blog-detail">
<div className="aspect-video bg-neutral-900 mb-4 overflow-hidden rounded-3xl">
<div className="w-full h-full bg-gradient-to-bl from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
<span className="text-[#ccff00]">Technologie</span>
<span>5. Března 2024</span>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#ccff00] transition-colors">
                Budoucnost frontendu: Je React stále králem?
              </h3>
<p className="text-sm text-neutral-400 mb-6 flex-grow">
                Srovnání moderních frameworků a proč jsme v BPA přešli na
                novější stack pro určité typy projektů.
              </p>
<span className="text-xs font-medium text-white group-hover:text-[#ccff00] transition-colors inline-flex items-center gap-1">
                Přečíst článek
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group cursor-pointer nav-link flex flex-col h-full" data-target="blog-detail">
<div className="aspect-video bg-neutral-900 mb-4 overflow-hidden rounded-3xl">
<div className="w-full h-full bg-gradient-to-tr from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
<span className="text-[#ccff00]">Byznys</span>
<span>28. Února 2024</span>
</div>
<h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#ccff00] transition-colors">
                Jak správně stanovit rozpočet na nový web
              </h3>
<p className="text-sm text-neutral-400 mb-6 flex-grow">
                Transparentní průvodce cenotvorbou agentur a na co si dát pozor
                při výběru dodavatele.
              </p>
<span className="text-xs font-medium text-white group-hover:text-[#ccff00] transition-colors inline-flex items-center gap-1">
                Přečíst článek
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</section>

<section className="page-section" id="blog-detail">
<div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
<button className="nav-link text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-2 mb-12" data-target="blog">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
            Zpět na blog
          </button>
<div className="flex items-center gap-3 text-xs text-[#ccff00] mb-6">
<span className="px-2 py-1 border border-[#ccff00]/30 rounded-sm bg-[#ccff00]/10">
              Design
            </span>
<span className="text-neutral-500">12. Března 2024 • 5 min čtení</span>
</div>
<h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-8 leading-tight">
            Proč minimalismus ve web designu konvertuje lépe.
          </h1>
<div className="aspect-video bg-neutral-900 mb-12 rounded-3xl"></div>
<div className="prose prose-invert prose-neutral max-w-none text-neutral-400">
<p className="lead text-lg text-neutral-300 mb-6">
              V době, kdy je pozornost uživatelů nejkratší v historii, je
              vizuální smog nepřítelem konverzí. Ukážeme si, proč odstranění
              zbytečností vede k lepším obchodním výsledkům.
            </p>
<h2 className="text-2xl font-medium text-white tracking-tight mt-12 mb-4">
              Kognitivní zátěž a rozhodovací paralýza
            </h2>
<p className="mb-4">
              Každý prvek na stránce vyžaduje zlomek mozkové kapacity uživatele.
              Pokud máte na hlavní stránce tři karusely, blikající bannery a pět
              různých CTA tlačítek, návštěvník neví, co má dělat dřív. Výsledek?
              Neudělá nic a odejde.
            </p>
<p className="mb-8">
              Minimalistický design naproti tomu vede uživatele jasně danou
              cestou (user flow). Odstraněním rušivých elementů dáváme vyniknout
              tomu podstatnému - vaší hodnotové propozici a hlavnímu tlačítku k
              akci.
            </p>
<blockquote className="border-l-2 border-[#ccff00] pl-6 my-10 italic text-white text-xl">
              "Dobrý design je co nejméně designu." — Dieter Rams
            </blockquote>
<h2 className="text-2xl font-medium text-white tracking-tight mt-12 mb-4">
              Rychlost načítání = Peníze
            </h2>
<p className="mb-4">
              Méně grafických prvků a komplexních animací logicky znamená menší
              datovou náročnost webu. Podle statistik Google každá vteřina
              zpoždění načítání webu na mobilu snižuje konverze průměrně o 20%.
            </p>
<div className="mt-16 pt-8 border-t border-neutral-900 flex justify-between items-center">
<span className="text-sm font-medium text-white">Sdílet článek:</span>
<div className="flex gap-4">
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:link-circle-linear" width="1.5em"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:letter-linear" width="1.5em"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="career">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="max-w-3xl mb-16">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6">
              Přidej se k BPA.
            </h1>
<p className="text-lg text-neutral-400 font-light">
              Hledáme lidi, kteří nečekají na zadání, ale sami přinášejí řešení.
              Práce u nás není o odsezených hodinách, ale o reálném dopadu na
              projekty, které používají tisíce lidí.
            </p>
</div>
<div className="mb-12">
<h2 className="text-2xl font-medium text-white mb-6 tracking-tight">
              Otevřené pozice
            </h2>
<div className="flex flex-col gap-4">

<div className="group cursor-pointer nav-link border border-neutral-800 bg-neutral-900/20 p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-neutral-600 hover:bg-neutral-900 transition-all rounded-3xl" data-target="career-detail">
<div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                    Senior UX/UI Designer
                  </h3>
<div className="flex gap-4 text-xs text-neutral-500">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                      Praha / Remote
                    </span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                      Full-time
                    </span>
</div>
</div>
<div className="mt-4 md:mt-0 text-sm font-medium text-white group-hover:text-[#ccff00] transition-colors flex items-center gap-2">
                  Zobrazit detail
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer nav-link border border-neutral-800 bg-neutral-900/20 p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-neutral-600 hover:bg-neutral-900 transition-all rounded-3xl" data-target="career-detail">
<div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#ccff00] transition-colors">
                    Frontend Developer (React/Next.js)
                  </h3>
<div className="flex gap-4 text-xs text-neutral-500">
<span className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                      Praha / Remote
                    </span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                      Full-time
                    </span>
</div>
</div>
<div className="mt-4 md:mt-0 text-sm font-medium text-white group-hover:text-[#ccff00] transition-colors flex items-center gap-2">
                  Zobrazit detail
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="bg-neutral-900/30 border border-neutral-800 p-8 text-center max-w-2xl mx-auto mt-24 rounded-3xl">
<h3 className="text-xl font-medium text-white mb-3">
              Nenašel jsi svou pozici?
            </h3>
<p className="text-sm text-neutral-400 mb-6">
              Stále hledáme talenty. Pošli nám své portfolio a napiš, proč bys
              měl být součástí týmu.
            </p>
<button className="nav-link bg-transparent border border-neutral-700 text-white px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors rounded-full" data-target="contact">
              Spontánní žádost
            </button>
</div>
</div>
</section>

<section className="page-section" id="career-detail">
<div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
<button className="nav-link text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-2 mb-12" data-target="career">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
            Zpět na otevřené pozice
          </button>
<h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">
            Senior UX/UI Designer
          </h1>
<div className="flex gap-4 text-sm text-[#ccff00] mb-12 border-b border-neutral-900 pb-8">
<span>Praha / Hybrid</span>
<span>•</span>
<span>HPP / IČO</span>
<span>•</span>
<span>80 - 120 tis. CZK</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="md:col-span-2 prose prose-invert prose-neutral max-w-none text-neutral-400">
<p>
                Hledáme zkušeného designéra, který chápe, že design není jen o
                vizuálu, ale hlavně o řešení problémů a byznys cílech klienta.
                Budeš mít na starosti klíčové projekty pro naše top klienty, od
                úvodních workshopů až po hand-off vývojářům.
              </p>
<h3 className="text-white font-medium text-xl mt-8 mb-4">
                Co budeš dělat:
              </h3>
<ul>
<li>Vést úvodní discovery workshopy s klienty</li>
<li>Navrhovat informační architekturu a wireframy</li>
<li>
                  Tvořit high-fidelity UI design v Figmě (včetně design systémů)
                </li>
<li>Prototypovat a testovat s uživateli</li>
<li>
                  Úzce spolupracovat s frontend týmem pro perfektní exekuci
                </li>
</ul>
<h3 className="text-white font-medium text-xl mt-8 mb-4">
                Co od tebe čekáme:
              </h3>
<ul>
<li>
                  Minimálně 4 roky zkušeností s návrhem digitálních produktů
                </li>
<li>
                  Silné portfolio ukazující komplexní proces (nejen Dribbble
                  shoty)
                </li>
<li>
                  Výbornou znalost Figmy (Auto layout, Variables, Components)
                </li>
<li>
                  Schopnost obhájit si svá designová rozhodnutí před klientem
                </li>
</ul>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 p-8 h-fit sticky top-24 rounded-3xl">
<h3 className="text-lg font-medium text-white mb-6">Mám zájem</h3>
<form className="flex flex-col gap-4" onsubmit="handleFormSubmit(event, this)">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">
                    Jméno
                  </label>
<input className="w-full bg-black border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">
                    E-mail
                  </label>
<input className="w-full bg-black border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">
                    Odkaz na portfolio / LinkedIn
                  </label>
<input className="w-full bg-black border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl" required="" type="url"/>
</div>
<div className="mt-4">
<button className="w-full bg-[#ccff00] text-black px-4 py-3.5 text-sm font-medium hover:bg-[#b3e600] transition-colors rounded-full flex justify-center items-center gap-2" type="submit">
                    Odeslat žádost
                  </button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="page-section" id="contact">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

<div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-6">
                Pojďme se bavit o vašem projektu.
              </h1>
<p className="text-lg text-neutral-400 mb-12 font-light">
                Vyplňte formulář nebo nám rovnou napište e-mail. Odpovídáme
                zpravidla do 24 hodin s návrhem dalšího postupu.
              </p>
<div className="space-y-8">
<div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-2 font-medium">
                    Nové projekty
                  </div>
<a className="text-xl text-white hover:text-[#ccff00] transition-colors" href="mailto:hello@bp-agency.cz">
                    hello@bp-agency.cz
                  </a>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-2 font-medium">
                    Telefon
                  </div>
<a className="text-xl text-white hover:text-[#ccff00] transition-colors" href="tel:+420777123456">
                    +420 777 123 456
                  </a>
</div>
<div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-2 font-medium">
                    Kancelář
                  </div>
<p className="text-white">
                    Pernerova 35, 186 00 Praha 8
                    <br/>
<span className="text-sm text-neutral-500">Karlín</span>
</p>
</div>
</div>
</div>

<div className="bg-neutral-900/20 border border-neutral-800 p-8 md:p-10 rounded-3xl">
<form className="flex flex-col gap-6" onsubmit="handleFormSubmit(event, this)">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">
                      Jméno a příjmení *
                    </label>
<input className="w-full bg-black border border-neutral-800 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl placeholder:text-neutral-700" placeholder="Jan Novák" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">
                      E-mail *
                    </label>
<input className="w-full bg-black border border-neutral-800 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl placeholder:text-neutral-700" placeholder="jan@firma.cz" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">
                    Společnost
                  </label>
<input className="w-full bg-black border border-neutral-800 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl placeholder:text-neutral-700" placeholder="Název vaší firmy" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">
                    O čem se budeme bavit? *
                  </label>
<select className="w-full bg-black border border-neutral-800 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl appearance-none cursor-pointer" required="">
<option className="text-neutral-700" disabled="" selected="" value="">
                      Vyberte oblast zájmu
                    </option>
<option value="brand">Branding &amp; Strategie</option>
<option value="web">Nový Web / Aplikace</option>
<option value="marketing">Performance Marketing</option>
<option value="other">Něco jiného</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">
                    Zpráva nebo detail projektu
                  </label>
<textarea className="w-full bg-black border border-neutral-800 text-white px-4 py-3.5 text-sm focus:outline-none focus:border-[#ccff00] transition-colors rounded-xl resize-none placeholder:text-neutral-700" placeholder="Stručně popište, co potřebujete řešit..." rows="4"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer group mt-2">
<div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-5 h-5 border border-neutral-700 rounded-md bg-black peer-checked:bg-[#ccff00] peer-checked:border-[#ccff00] transition-colors"></div>
<iconify-icon className="absolute text-black opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="1.2em"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 leading-relaxed">
                    Souhlasím se zpracováním osobních údajů pro účely vyřízení
                    poptávky dle
                    <button className="nav-link text-white underline hover:text-[#ccff00]" data-target="privacy" type="button">
                      podmínek
                    </button>
                    . *
                  </span>
</label>
<div className="mt-4">
<button className="w-full bg-[#ccff00] text-black px-6 py-4 text-sm font-medium hover:bg-[#b3e600] transition-colors rounded-full flex justify-center items-center gap-2 group" type="submit">
<span>Odeslat poptávku</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="page-section" id="privacy">
<div className="max-w-3xl mx-auto px-6 py-24 md:py-32 prose prose-invert prose-neutral">
<h1 className="text-3xl font-semibold text-white tracking-tighter mb-8">
            Ochrana osobních údajů
          </h1>
<p className="text-sm text-neutral-500 mb-8">
            Poslední aktualizace: 1. ledna 2024
          </p>
<h2 className="text-xl font-medium text-white mt-8 mb-4">
            1. Základní ustanovení
          </h2>
<p>
            Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského
            parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v
            souvislosti se zpracováním osobních údajů a o volném pohybu těchto
            údajů (dále jen: „GDPR”) je BPA. (dále jen: „správce“).
          </p>
<h2 className="text-xl font-medium text-white mt-8 mb-4">
            2. Zdroje a kategorie zpracovávaných osobních údajů
          </h2>
<p>
            Správce zpracovává osobní údaje, které jste mu poskytl/a nebo osobní
            údaje, které správce získal na základě plnění Vaší objednávky či
            poptávky.
          </p>
<h2 className="text-xl font-medium text-white mt-8 mb-4">
            3. Zákonný důvod a účel zpracování
          </h2>
<p>
            Zákonným důvodem zpracování osobních údajů je plnění smlouvy,
            oprávněný zájem správce a Váš souhlas. Účelem je vyřízení poptávky z
            kontaktního formuláře.
          </p>
</div>
</section>

<section className="page-section" id="cookies">
<div className="max-w-3xl mx-auto px-6 py-24 md:py-32 prose prose-invert prose-neutral">
<h1 className="text-3xl font-semibold text-white tracking-tighter mb-8">
            Zásady používání Cookies
          </h1>
<h2 className="text-xl font-medium text-white mt-8 mb-4">
            Co jsou cookies?
          </h2>
<p>
            Cookies jsou malé textové soubory, které mohou být používány
            webovými stránkami, aby učinily uživatelský zážitek více efektivní.
            Zákon uvádí, že můžeme ukládat cookies na vašem zařízení, pokud jsou
            nezbytně nutné pro provoz této stránky. Pro všechny ostatní typy
            cookies potřebujeme váš souhlas.
          </p>
<h2 className="text-xl font-medium text-white mt-8 mb-4">
            Jaké cookies používáme?
          </h2>
<ul>
<li>
<strong>Nezbytné:</strong>
              Pomáhají udělat webovou stránku použitelnou tak, že umožní
              základní funkce.
            </li>
<li>
<strong>Analytické:</strong>
              Pomáhají nám porozumět, jak návštěvníci používají webové stránky.
            </li>
<li>
<strong>Marketingové:</strong>
              Používají se ke sledování návštěvníků napříč webovými stránkami.
            </li>
</ul>
<div className="mt-12 p-8 border border-neutral-800 bg-neutral-900/30 rounded-3xl">
<h3 className="text-white font-medium mb-4">Vaše nastavení</h3>
<button className="bg-neutral-800 text-white px-6 py-3 text-sm hover:bg-neutral-700 transition-colors rounded-full" onclick="document.getElementById('cookie-banner').classList.remove('hidden')">
              Otevřít nastavení cookies
            </button>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-neutral-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<button className="nav-link text-white text-xl font-semibold tracking-tighter mb-4 block hover:text-[#ccff00] transition-colors" data-target="home">
              BPA.
            </button>
<p className="text-sm text-neutral-500 mb-6">
              Digitální agentura pro značky, které chtějí vést.
            </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear" width="1.5em"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:gallery-linear" width="1.5em"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-4">Menu</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<button className="nav-link hover:text-white transition-colors" data-target="home">
                  Domů
                </button>
</li>
<li>
<button className="nav-link hover:text-white transition-colors" data-target="about">
                  O nás
                </button>
</li>
<li>
<button className="nav-link hover:text-white transition-colors" data-target="services">
                  Služby
                </button>
</li>
<li>
<button className="nav-link hover:text-white transition-colors" data-target="work">
                  Naše práce
                </button>
</li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-4">Společnost</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<button className="nav-link hover:text-white transition-colors" data-target="career">
                  Kariéra
                </button>
</li>
<li>
<button className="nav-link hover:text-white transition-colors" data-target="blog">
                  Blog
                </button>
</li>
<li>
<button className="nav-link hover:text-white transition-colors" data-target="contact">
                  Kontakt
                </button>
</li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-4">Napište nám</h4>
<a className="text-sm text-neutral-500 hover:text-[#ccff00] transition-colors block mb-2" href="mailto:hello@bp-agency.cz">
              hello@bp-agency.cz
            </a>
<a className="text-sm text-neutral-500 hover:text-white transition-colors block" href="tel:+420777123456">
              +420 777 123 456
            </a>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<div>© 2024 Brand Pulse Agency. Všechna práva vyhrazena.</div>
<div className="flex gap-4">
<button className="nav-link hover:text-neutral-400 transition-colors" data-target="privacy">
              Ochrana osobních údajů
            </button>
<button className="nav-link hover:text-neutral-400 transition-colors" data-target="cookies">
              Cookies
            </button>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 transition-transform duration-500 translate-y-0" id="cookie-banner">
<div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 p-6 flex flex-col md:flex-row gap-6 items-center justify-between shadow-2xl rounded-2xl">
<div className="text-sm text-neutral-300">
          Používáme cookies k vylepšení vašeho zážitku. Pokračováním souhlasíte
          s jejich použitím.
          <button className="nav-link text-white underline hover:text-[#ccff00]" data-target="cookies">
            Více informací
          </button>
          .
        </div>
<div className="flex flex-shrink-0 gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none px-6 py-2.5 border border-neutral-700 text-white text-xs font-medium hover:bg-neutral-800 transition-colors rounded-full" onclick="handleCookies('reject')">
            Odmítnout
          </button>
<button className="flex-1 md:flex-none px-6 py-2.5 bg-[#ccff00] text-black text-xs font-medium hover:bg-[#b3e600] transition-colors rounded-full" onclick="handleCookies('accept')">
            Přijmout vše
          </button>
</div>
</div>
</div>



    </>
  );
}
