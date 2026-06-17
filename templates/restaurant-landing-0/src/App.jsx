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



      // Menu Tabs functionality
      const menuTabs = document.querySelectorAll('.menu-tab');
      const menuCategories = document.querySelectorAll('.menu-category');

      menuTabs.forEach(tab => {
          tab.addEventListener('click', () => {
              menuTabs.forEach(t => {
                  t.classList.remove('active', 'border-[#c5a059]/30', 'text-white');
                  t.classList.add('border-white/10', 'text-white/50');
              });
              tab.classList.add('active', 'border-[#c5a059]/30', 'text-white');
              tab.classList.remove('border-white/10', 'text-white/50');

              const category = tab.getAttribute('data-category');
              menuCategories.forEach(cat => {
                  if(cat.getAttribute('data-category') === category) {
                      cat.classList.add('active');
                  } else {
                      cat.classList.remove('active');
                  }
              });
          });
      });

      // Mobile Menu
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenuClose = document.getElementById('mobileMenuClose');
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function toggleMenu() {
          mobileMenu.classList.toggle('hidden');
          mobileMenu.classList.toggle('flex');
          document.body.classList.toggle('overflow-hidden');
      }

      mobileMenuBtn.addEventListener('click', toggleMenu);
      mobileMenuClose.addEventListener('click', toggleMenu);
      mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

      // Form functions (placeholders)
      function showReservationConfirmation() {
          document.getElementById('reservationForm').classList.add('hidden');
          document.getElementById('reservationConfirmation').classList.remove('hidden');
      }

      function showEventConfirmation() {
          document.getElementById('eventForm').classList.add('hidden');
          document.getElementById('eventConfirmation').classList.remove('hidden');
      }

      // Reveal animations
      function reveal() {
          var reveals = document.querySelectorAll(".reveal");
          for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 100;
              if (elementTop < windowHeight - elementVisible) {
                  reveals[i].classList.add("active");
              }
          }
      }
      window.addEventListener("scroll", reveal);
      reveal(); // Trigger on load
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 py-4 flex justify-between items-center transition-all duration-500 animate-enter" id="navbar">

<a className="flex items-center drop-shadow-lg transition-transform hover:scale-105 duration-300" href="#">
<iconify-icon className="text-[#c5a059] mr-3 drop-shadow-[0_0_10px_rgba(197,160,89,0.4)]" height="40" icon="game-icons:bull" width="40"></iconify-icon>
<span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-white">
          Steakhaus
          <span className="text-[#c5a059]">Am Dachsberg</span>
</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-white/80 hover:text-[#c5a059] text-sm font-medium tracking-wide transition" href="#">
          Startseite
        </a>
<a className="text-white/80 hover:text-[#c5a059] text-sm font-medium tracking-wide transition" href="#menu">
          Speisekarte
        </a>
<a className="text-white/80 hover:text-[#c5a059] text-sm font-medium tracking-wide transition" href="#events">
          Festsaal
        </a>
<a className="text-white/80 hover:text-[#c5a059] text-sm font-medium tracking-wide transition" href="#areas">
          Biergarten
        </a>
<a className="text-white/80 hover:text-[#c5a059] text-sm font-medium tracking-wide transition" href="#contact">
          Kontakt
        </a>
<a className="px-6 py-2.5 rounded-full bg-[#c5a059] text-[#1a1a1a] text-xs font-semibold uppercase tracking-widest hover:bg-[#d4b06a] transition shadow-lg shadow-[#c5a059]/20" href="#reservierung">
          Jetzt Tisch reservieren
        </a>
</div>
<button className="lg:hidden text-white hover:text-[#c5a059] transition" id="mobileMenuBtn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 z-[60] bg-[#1a1a1a]/98 backdrop-blur-xl hidden flex-col items-center justify-center gap-8" id="mobileMenu">
<button className="absolute top-6 right-6 text-white hover:text-[#c5a059] transition" id="mobileMenuClose">
<iconify-icon height="32" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>
<a className="text-2xl font-serif text-white/90 hover:text-[#c5a059] transition mobile-link" href="#about">
        Über Uns
      </a>
<a className="text-2xl font-serif text-white/90 hover:text-[#c5a059] transition mobile-link" href="#areas">
        Bereiche
      </a>
<a className="text-2xl font-serif text-white/90 hover:text-[#c5a059] transition mobile-link" href="#menu">
        Speisekarte
      </a>
<a className="text-2xl font-serif text-white/90 hover:text-[#c5a059] transition mobile-link" href="#events">
        Events
      </a>
<a className="text-2xl font-serif text-white/90 hover:text-[#c5a059] transition mobile-link" href="#contact">
        Kontakt
      </a>
<a className="mt-4 px-8 py-3 rounded-full bg-[#c5a059] text-[#1a1a1a] text-sm font-semibold uppercase tracking-widest hover:bg-[#d4b06a] transition shadow-lg shadow-[#c5a059]/20 mobile-link" href="#reservierung">
        Reservieren
      </a>
</div>

<section className="relative w-full h-screen overflow-hidden">
<div className="absolute inset-0 animate-enter">
<img alt="Steak auf dem Grill mit Flammen" className="w-full h-full object-cover scale-105 flame-glow" src="https://images.unsplash.com/photo-1594046243098-0fceea9d451e?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-[#1a1a1a]/30"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 to-transparent"></div>
</div>
<div className="relative w-full h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-20">
<div className="max-w-4xl">
<div className="flex flex-wrap items-center gap-3 mb-6 animate-enter delay-100">
<span className="px-4 py-1.5 border border-[#c5a059]/40 text-[#c5a059] backdrop-blur-md text-xs font-medium uppercase tracking-widest rounded-full">
              Seit über 30 Jahren
            </span>
<span className="px-4 py-1.5 border border-white/20 backdrop-blur-md text-xs font-medium uppercase tracking-widest rounded-full text-white/80">
              Kamp-Lintfort
            </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight font-serif mb-6 leading-[1.05] animate-enter delay-200">
            Tradition trifft
            <br/>
<span className="gold-gradient">Moderne</span>
</h1>
<p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10 animate-enter delay-300">
            Handverlesene Steaks, meisterhaft gegrillt und unvergessliche
            Momente – Ihr Logenplatz am Dachsberg in unserem Restaurant,
            Biergarten und elegantem Festsaal.
          </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-enter delay-500">
<a className="w-full sm:w-auto text-center bg-[#c5a059] text-[#1a1a1a] px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#d4b06a] transition-colors shadow-lg shadow-[#c5a059]/20" href="#reservierung">
              Jetzt Tisch reservieren
            </a>
<a className="w-full sm:w-auto text-center border border-white/40 text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors" href="#menu">
              Speisekarte entdecken
            </a>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c5a059]/50 animate-bounce">
<iconify-icon height="28" icon="solar:mouse-circle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
</section>

<section className="bg-[#1a1a1a] w-full px-6 md:px-16 lg:px-20 py-24 lg:py-36" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
<div className="lg:col-span-5 relative rounded-2xl overflow-hidden reveal group">
<img alt="Steak Zubereitung" className="w-full h-full object-cover min-h-[500px] group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1558030006-450675393462?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-xl p-5 border border-[#c5a059]/20">
<p className="text-[#c5a059] font-serif text-sm italic">
                "Wir servieren keine Gerichte – wir zelebrieren Momente."
              </p>
</div>
</div>
</div>
<div className="lg:col-span-7 flex flex-col justify-center reveal reveal-delay-200">
<span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest block mb-4">
            Unsere Geschichte
          </span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-white font-serif mb-8">
            Rustikaler Luxus
            <br/>
            aus Kamp-Lintfort
          </h2>
<div className="space-y-6 text-white/60 text-lg font-light leading-relaxed mb-10">
<p>
              Seit über drei Jahrzehnten steht unser Steakhaus für die
              Verbindung von Tradition und höchster Qualität. Jedes Stück
              Fleisch wird sorgfältig ausgewählt, perfekt gereift und von
              unseren erfahrenen Grillmeistern auf den Punkt zubereitet.
            </p>
<p>
              Was als kleines Familienrestaurant begann, ist heute ein
              kulinarisches Zuhause für Genießer – mit einem gemütlichen
              Restaurant, einem weitläufigen Biergarten und einem eleganten
              Festsaal für Ihre besonderen Anlässe.
            </p>
</div>
<div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
<div>
<span className="block text-3xl font-serif text-[#c5a059] mb-1">
                30+
              </span>
<span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                Jahre Tradition
              </span>
</div>
<div>
<span className="block text-3xl font-serif text-[#c5a059] mb-1">
                150
              </span>
<span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                Biergartenplätze
              </span>
</div>
<div>
<span className="block text-3xl font-serif text-[#c5a059] mb-1">
                120
              </span>
<span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                Festsaal Personen
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] w-full px-6 md:px-16 lg:px-20 py-24 lg:py-36" id="areas">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mx-auto mb-16 reveal text-center">
<span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4 block">
            Unsere Bereiche
          </span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-serif text-white mb-6">
            Drei Welten, ein Erlebnis
          </h2>
<p className="text-white/50 text-lg font-light">
            Ob gemütliches Dinner, entspannter Biergarten-Abend oder rauschende
            Feier – bei uns finden Sie den perfekten Rahmen.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative rounded-2xl overflow-hidden reveal reveal-delay-100 cursor-pointer" style={{minHeight: '500px'}}>
<img alt="Restaurant Innenraum" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://tse3.mm.bing.net/th/id/OIP.JYpBVAfEMReKdU_2X_RpfAHaEL?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent group-hover:from-[#1a1a1a]/95 transition duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-[#c5a059]" height="24" icon="solar:chair-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest">
                  Restaurant
                </span>
</div>
<h3 className="text-2xl font-serif font-medium text-white mb-3 tracking-tight">
                Das Herzstück
              </h3>
<p className="text-white/60 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition duration-500">
                Erleben Sie echte Steak-Expertise in rustikalem Luxus. Warmes
                Holzambiente, gedämpftes Licht und der Duft perfekt gereiften
                Fleisches für ein unvergessliches Dinner.
              </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden reveal reveal-delay-200 cursor-pointer" style={{minHeight: '500px'}}>
<div className="absolute top-4 right-4 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md z-10 shadow-lg">
<iconify-icon icon="solar:sun-bold"></iconify-icon>
              Heute Biergarten-Wetter: Geöffnet!
            </div>
<img alt="Biergarten" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://tse1.mm.bing.net/th/id/OIP.SvoCxuhnuIZTCVDzGTEyBwHaEK?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent group-hover:from-[#1a1a1a]/95 transition duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-[#c5a059]" height="24" icon="solar:sun-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest">
                  Biergarten
                </span>
</div>
<h3 className="text-2xl font-serif font-medium text-white mb-3 tracking-tight">
                Unter freiem Himmel
              </h3>
<p className="text-white/60 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition duration-500">
                Genießen Sie sonnige Stunden in unserem idyllischen Biergarten.
                Mit 150 Plätzen im Grünen der perfekte Ort für frisch Gegrilltes
                und kühle Getränke.
              </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden reveal reveal-delay-300 cursor-pointer" style={{minHeight: '500px'}}>
<img alt="Festsaal" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://tse4.mm.bing.net/th/id/OIP.H_k8YTlKQt1nvo82kWq6QAHaEK?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent group-hover:from-[#1a1a1a]/95 transition duration-500"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-[#c5a059]" height="24" icon="solar:star-shine-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest">
                  Festsaal
                </span>
</div>
<h3 className="text-2xl font-serif font-medium text-white mb-3 tracking-tight">
                Feiern mit Stil
              </h3>
<p className="text-white/60 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition duration-500">
                Hochzeiten, Jubiläen, Firmenfeiern – unser eleganter Festsaal
                für bis zu 120 Personen wird zu Ihrem ganz persönlichen Rahmen
                für besondere Anlässe.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1a1a1a] w-full px-6 md:px-16 lg:px-20 py-24 lg:py-36 relative overflow-hidden" id="menu">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03]">
<iconify-icon className="text-white" height="1000" icon="game-icons:bull" width="1000"></iconify-icon>
</div>
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#111111] to-transparent"></div>
<div className="max-w-6xl mx-auto relative">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4 block">
            Kulinarische Exzellenz
          </span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-serif text-white mb-6">
            Unsere Highlights
          </h2>
<p className="text-white/50 text-lg font-light">
            Die Lieblinge unserer Gäste, meisterhaft für Sie zubereitet.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 reveal reveal-delay-100">

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#c5a059]/30 transition duration-300 group">
<div className="h-56 overflow-hidden relative">
<img alt="Rumpsteak Tirol" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1558030006-450675393462?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent"></div>
<iconify-icon className="absolute bottom-4 right-4 text-[#c5a059]/80" height="32" icon="game-icons:bull" width="32"></iconify-icon>
</div>
<div className="p-8 bg-[#1a1a1a]/50 backdrop-blur-sm -mt-4 relative rounded-t-2xl border-t border-white/5">
<h4 className="font-serif text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-[#c5a059] transition">
                Rumpsteak „Tirol“
              </h4>
<p className="text-sm text-white/50 font-light leading-relaxed">
                Mit gerösteten Zwiebeln und Salzkartoffeln.
              </p>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#c5a059]/30 transition duration-300 group relative">
<div className="absolute top-4 right-4 bg-[#c5a059] text-[#1a1a1a] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-20 shadow-lg">
              Für 2 Personen
            </div>
<div className="h-56 overflow-hidden relative">
<img alt="Dachsberg Platte" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1544025162-83b631d86e92?w=600&amp;q=80"/>
<div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
<img alt="Speise" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://tse4.mm.bing.net/th/id/OIP.17eRMrMjBwWOOeJbL77FdgHaHa?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent"></div>
</div>
<iconify-icon className="absolute bottom-4 right-4 text-[#c5a059]/80" height="32" icon="game-icons:bull" width="32"></iconify-icon>
</div>
<div className="p-8 bg-[#1a1a1a]/50 backdrop-blur-sm -mt-4 relative rounded-t-2xl border-t border-white/5">
<h4 className="font-serif text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-[#c5a059] transition">
                Dachsberg Platte
              </h4>
<p className="text-sm text-white/50 font-light leading-relaxed">
                2 Schweinefilets, 2 kleine Hacksteaks, 2 kleine Putensteaks und
                verschiedene Beilagen.
              </p>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#c5a059]/30 transition duration-300 group">
<div className="h-56 overflow-hidden relative">
<img alt="Mix-Grill" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent"></div>
<iconify-icon className="absolute bottom-4 right-4 text-[#c5a059]/80" height="32" icon="game-icons:bull" width="32"></iconify-icon>
</div>
<div className="p-8 bg-[#1a1a1a]/50 backdrop-blur-sm -mt-4 relative rounded-t-2xl border-t border-white/5">
<h4 className="font-serif text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-[#c5a059] transition">
                Mix-Grill
              </h4>
<p className="text-sm text-white/50 font-light leading-relaxed">
                Nacken, Hüftsteak, Schweinefilet, Speck, Pommes, Djuvecreis und
                Salat.
              </p>
</div>
</div>
</div>

<div className="text-center reveal reveal-delay-200">
<button className="inline-flex items-center gap-3 bg-[#111111] text-[#c5a059] border border-[#c5a059]/50 px-10 py-5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#c5a059] hover:text-[#1a1a1a] transition-all duration-300 shadow-lg shadow-[#c5a059]/10 group" onclick="document.getElementById('fullMenuModal').classList.remove('hidden'); document.body.classList.add('overflow-hidden');">
            Gesamte Karte ansehen
            <iconify-icon className="group-hover:text-[#1a1a1a] transition-colors" height="20" icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>


<section className="bg-[#111111] w-full px-6 md:px-16 lg:px-20 py-24 lg:py-36 relative border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4 block">
            Kundenstimmen
          </span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-serif text-white mb-6">
            Was unsere Gäste sagen
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start reveal reveal-delay-100">
<div className="bg-white/[0.02] border border-white/[0.06] p-8 rounded-2xl hover:border-[#c5a059]/20 transition duration-300">
<div className="flex gap-1 text-[#c5a059] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-white/60 font-light text-sm leading-relaxed mb-6">
              "Ein Ausflugsort der sich lohnt. Hier gibt es ein Steakhaus, dass
              keine Wünsche offen lässt. Sehr gutes Deutsches und jugoslawisches
              Essen..."
            </p>
<span className="text-[#c5a059] text-xs font-medium uppercase tracking-widest">
              47470
            </span>
</div>
<div className="bg-white/[0.02] border border-white/[0.06] p-8 rounded-2xl hover:border-[#c5a059]/20 transition duration-300">
<div className="flex gap-1 text-[#c5a059] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-white/60 font-light text-sm leading-relaxed mb-6">
              "Herrlich. Das Essen ist Mega. Die Besitzer sind herrlich
              einfach... Wir sind Mega begeistert und kommen gerne immer
              wieder."
            </p>
<span className="text-[#c5a059] text-xs font-medium uppercase tracking-widest">
              Melanie K.
            </span>
</div>
<div className="bg-white/[0.02] border border-white/[0.06] p-8 rounded-2xl hover:border-[#c5a059]/20 transition duration-300">
<div className="flex gap-1 text-[#c5a059] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-white/60 font-light text-sm leading-relaxed mb-6">
              "Super lecker. Nette Bedienung. Immer gerne."
            </p>
<span className="text-[#c5a059] text-xs font-medium uppercase tracking-widest">
              Sylvia K.
            </span>
</div>
<div className="bg-white/[0.02] border border-white/[0.06] p-8 rounded-2xl hover:border-[#c5a059]/20 transition duration-300">
<div className="flex gap-1 text-[#c5a059] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<p className="text-white/60 font-light text-sm leading-relaxed mb-6">
              "Das Essen war lecker und reichlich. Bedienung war nett. Kann man
              immer wieder Essen gehen."
            </p>
<span className="text-[#c5a059] text-xs font-medium uppercase tracking-widest">
              Uwe T.
            </span>
</div>
<div className="bg-white/[0.02] border border-white/[0.06] p-8 rounded-2xl hover:border-[#c5a059]/20 transition duration-300 md:col-span-2 lg:col-span-1">
<div className="flex gap-1 text-[#c5a059] mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-white/60 font-light text-sm leading-relaxed mb-6">
              "Sehr schönes Restaurant, freundliche Bedienung, sehr gutes Essen.
              Das Preisleistungs-Verhältnis ist o.K."
            </p>
<span className="text-[#c5a059] text-xs font-medium uppercase tracking-widest">
              Marion S.
            </span>
</div>
</div>
</div>
</section>
<section className="bg-[#1a1a1a] w-full px-6 md:px-16 lg:px-20 py-24 lg:py-36 relative overflow-hidden" id="reservierung">
<div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/dark-leather.png\')'}}></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div className="flex flex-col justify-center reveal">
<span className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4 block">
            Reservierung
          </span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-serif text-white mb-6 leading-[1.1]">
            Sichern Sie sich
            <br/>
            Ihren Tisch
          </h2>
<p className="text-white/50 text-lg font-light mb-12 max-w-md leading-relaxed">
            Reservieren Sie bequem online oder rufen Sie uns direkt an. Für
            Gruppen ab 10 Personen bitten wir um eine telefonische Reservierung.
          </p>

<div className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.06] max-w-sm">
<div className="flex items-center gap-4 mb-6 text-white/90">
<iconify-icon className="text-[#c5a059]" height="28" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<h3 className="text-xl font-medium font-serif">Öffnungszeiten</h3>
</div>
<ul className="space-y-4 text-sm font-light text-white/60">
<li className="flex justify-between border-b border-white/[0.06] pb-3">
<span>Montag - Sonntag</span>
<span>11:30 – 23:00 Uhr</span>
</li>
<li className="flex justify-between pt-2 text-white/40 text-xs">
<span>Warme Küche bis 22:00 Uhr</span>
</li>
</ul>
</div>
</div>

<div className="bg-[#222222] rounded-2xl p-8 md:p-12 border border-white/[0.06] shadow-2xl reveal reveal-delay-200">
<h3 className="font-serif text-2xl font-medium text-white mb-8 tracking-tight">
            Online Reservierung
          </h3>
<form className="space-y-6" id="reservationForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Vollständiger Name
                </label>
<input className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white placeholder:text-white/20 text-sm" placeholder="Max Mustermann" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Telefon
                </label>
<input className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white placeholder:text-white/20 text-sm" placeholder="+49 1234 567890" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  E-Mail
                </label>
<input className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white placeholder:text-white/20 text-sm" placeholder="max@beispiel.de" type="email"/>
</div>
<div className="space-y-2 relative">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Personen
                </label>
<select className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white cursor-pointer text-sm appearance-none">
<option className="bg-[#222] text-white">2 Personen</option>
<option className="bg-[#222] text-white">3 Personen</option>
<option className="bg-[#222] text-white">4 Personen</option>
<option className="bg-[#222] text-white">5 Personen</option>
<option className="bg-[#222] text-white">6 Personen</option>
<option className="bg-[#222] text-white">7 Personen</option>
<option className="bg-[#222] text-white">8 Personen</option>
<option className="bg-[#222] text-white">9 Personen</option>
<option className="bg-[#222] text-white">10 Personen</option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-white/30 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Datum
                </label>
<input className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white text-sm" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Uhrzeit
                </label>
<input className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white text-sm" type="time"/>
</div>
</div>
<div className="space-y-2 relative">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Bereich
              </label>
<select className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white cursor-pointer text-sm appearance-none">
<option className="bg-[#222] text-white">Restaurant</option>
<option className="bg-[#222] text-white">Biergarten</option>
<option className="bg-[#222] text-white">Keine Präferenz</option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-white/30 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Besondere Wünsche
              </label>
<textarea className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white placeholder:text-white/20 text-sm resize-none" placeholder="Allergien, besondere Anlässe, Kinderstühle..." rows="3"></textarea>
</div>
<button className="w-full mt-4 bg-[#c5a059] text-[#1a1a1a] py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#d4b06a] transition shadow-lg shadow-[#c5a059]/20" onclick="showReservationConfirmation()" type="button">
              Reservierung Bestätigen
            </button>
</form>

<div className="hidden text-center py-12" id="reservationConfirmation">
<iconify-icon className="text-[#c5a059] mb-4" height="64" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
<h3 className="font-serif text-2xl font-medium text-white mb-3 tracking-tight">
              Vielen Dank!
            </h3>
<p className="text-white/50 text-sm font-light">
              Ihre Reservierungsanfrage wurde gesendet. Wir bestätigen diese in
              Kürze per E-Mail.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] w-full px-6 md:px-16 lg:px-20 py-24 lg:py-36 relative overflow-hidden" id="events">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal order-2 lg:order-1">
<div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-white/[0.06]">
<h3 className="font-serif text-2xl font-medium text-white mb-2 tracking-tight">
              Event-Konfigurator
            </h3>
<p className="text-white/40 text-sm font-light mb-8">
              Planen Sie Ihre perfekte Feier am Dachsberg in 3 einfachen
              Schritten.
            </p>
<form className="space-y-6" id="eventForm">
<div className="border-b border-white/5 pb-6">
<h4 className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon icon="solar:glass-water-bold"></iconify-icon>
                  1. Anlass &amp; Rahmen
                </h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2 relative">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Art der Feier
                    </label>
<select className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white cursor-pointer text-sm appearance-none">
<option className="bg-[#1a1a1a] text-white">Hochzeit</option>
<option className="bg-[#1a1a1a] text-white">
                        Taufe / Kommunion
                      </option>
<option className="bg-[#1a1a1a] text-white">Jubiläum</option>
<option className="bg-[#1a1a1a] text-white">
                        Geburtstag
                      </option>
<option className="bg-[#1a1a1a] text-white">
                        Firmenfeier
                      </option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-white/30 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="space-y-2 relative">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Personenzahl
                    </label>
<select className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white cursor-pointer text-sm appearance-none">
<option className="bg-[#1a1a1a] text-white">
                        10 – 30 Personen
                      </option>
<option className="bg-[#1a1a1a] text-white">
                        30 – 50 Personen
                      </option>
<option className="bg-[#1a1a1a] text-white">
                        50 – 80 Personen
                      </option>
<option className="bg-[#1a1a1a] text-white">
                        80 – 120 Personen
                      </option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-white/30 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Wunschdatum
                    </label>
<input className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white text-sm" type="date"/>
</div>
</div>
</div>
<div className="border-b border-white/5 pb-6">
<h4 className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon icon="solar:user-bold"></iconify-icon>
                  2. Ihre Daten
                </h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Name
                    </label>
<input className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white placeholder:text-white/20 text-sm" placeholder="Ihr Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      E-Mail
                    </label>
<input className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white placeholder:text-white/20 text-sm" placeholder="ihre@email.de" type="email"/>
</div>
<div className="space-y-2 md:col-span-2">
<label className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      Telefon
                    </label>
<input className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white placeholder:text-white/20 text-sm" placeholder="+49 1234 567890" type="tel"/>
</div>
</div>
</div>
<div>
<h4 className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon icon="solar:stars-bold"></iconify-icon>
                  3. Extras
                </h4>
<div className="space-y-2">
<textarea className="w-full bg-transparent border-b border-white/10 py-2.5 focus:outline-none focus:border-[#c5a059] transition text-white placeholder:text-white/20 text-sm resize-none" placeholder="Beschreiben Sie Ihre Feier, besondere Wünsche (z.B. Buffet oder Menü, Deko)..." rows="3"></textarea>
</div>
</div>
<button className="w-full mt-4 bg-[#c5a059] text-[#1a1a1a] py-4 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#d4b06a] transition shadow-lg shadow-[#c5a059]/20 flex justify-center items-center gap-2" onclick="showEventConfirmation()" type="button">
<iconify-icon height="18" icon="solar:calendar-add-linear" width="18"></iconify-icon>
                Konfiguration Absenden
              </button>
</form>
<div className="hidden text-center py-12" id="eventConfirmation">
<iconify-icon className="text-[#c5a059] mb-4" height="64" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
<h3 className="font-serif text-2xl font-medium text-white mb-3 tracking-tight">
                Anfrage Gesendet!
              </h3>
<p className="text-white/50 text-sm font-light">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
</div>
</div>
</div>
<div className="reveal order-1 lg:order-2 flex flex-col justify-center items-center h-full min-h-[400px] relative pointer-events-none">
<div className="absolute w-[80%] h-[80%] bg-[#c5a059]/20 rounded-full blur-[100px] pointer-events-none"></div>
<iconify-icon className="text-[#c5a059]/80 drop-shadow-[0_0_20px_rgba(197,160,89,0.3)] relative z-10 mb-8" height="180" icon="game-icons:bull" width="180"></iconify-icon>
<h3 className="font-serif text-4xl lg:text-5xl text-white font-medium tracking-tight text-center relative z-10 leading-[1.2]">
            Steakhaus
            <br/>
<span className="gold-gradient">Am Dachsberg</span>
</h3>
</div>
</div>
</section>

<footer className="bg-[#0a0a0a] w-full px-6 md:px-16 lg:px-20 py-16 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div>
<h4 className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4">
            Adresse
          </h4>
<p className="text-white/70 font-light leading-relaxed">
            Steakhaus Kamp-Lintfort
            <br/>
            Rheurdt Str. 209
            <br/>
            47475 Kamp-Lintfort
          </p>
</div>
<div>
<h4 className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4">
            Kontakt
          </h4>
<p className="text-white/70 font-light leading-relaxed">
            Tel:
            <a className="hover:text-[#c5a059] transition" href="tel:028429032923">
              02842 / 9032923
            </a>
</p>
</div>
<div>
<h4 className="text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4">
            Öffnungszeiten
          </h4>
<p className="text-white/70 font-light leading-relaxed">
            Mo. - So.
            <br/>
            11:30 - 23:00 Uhr
          </p>
</div>
</div>
<div className="mt-16 text-center text-white/30 text-xs font-light">
        © 2024 Steakhaus Kamp-Lintfort. Alle Rechte vorbehalten.
      </div>
</footer>


<div className="fixed inset-0 z-[100] bg-[#1a1a1a]/98 backdrop-blur-xl hidden overflow-y-auto" id="fullMenuModal">
<div className="min-h-screen w-full px-6 py-12 md:p-12 lg:p-20 relative">
<button className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-[#c5a059] transition z-10 bg-[#222] p-3 rounded-full border border-white/10 hover:border-[#c5a059]/50 shadow-xl" onclick="document.getElementById('fullMenuModal').classList.add('hidden'); document.body.classList.remove('overflow-hidden');">
<iconify-icon height="32" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>
<div className="max-w-4xl mx-auto pt-10 pb-20">
<div className="text-center mb-16 animate-enter">
<iconify-icon className="text-[#c5a059] mb-6 drop-shadow-[0_0_10px_rgba(197,160,89,0.4)]" height="56" icon="game-icons:bull" width="56"></iconify-icon>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight font-serif text-white mb-4">
              Unsere Speisekarte
            </h2>
<p className="text-[#c5a059] text-sm uppercase tracking-widest font-semibold">
              Steakhaus Am Dachsberg
            </p>
</div>

<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 animate-enter delay-100">
<button className="modal-tab active px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition border border-[#c5a059]/30 text-white hover:text-[#c5a059]" onclick="document.querySelectorAll('.modal-category').forEach(c=&gt;c.classList.add('hidden')); document.getElementById('cat-suppen').classList.remove('hidden'); document.querySelectorAll('.modal-tab').forEach(t=&gt;{t.classList.remove('active', 'border-[#c5a059]/30', 'text-white'); t.classList.add('border-white/10', 'text-white/50');}); this.classList.add('active', 'border-[#c5a059]/30', 'text-white'); this.classList.remove('border-white/10', 'text-white/50');">
              Suppen
            </button>
<button className="modal-tab px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition border border-white/10 text-white/50 hover:text-[#c5a059] hover:border-[#c5a059]/30" onclick="document.querySelectorAll('.modal-category').forEach(c=&gt;c.classList.add('hidden')); document.getElementById('cat-vorspeisen').classList.remove('hidden'); document.querySelectorAll('.modal-tab').forEach(t=&gt;{t.classList.remove('active', 'border-[#c5a059]/30', 'text-white'); t.classList.add('border-white/10', 'text-white/50');}); this.classList.add('active', 'border-[#c5a059]/30', 'text-white'); this.classList.remove('border-white/10', 'text-white/50');">
              Vorspeisen
            </button>
<button className="modal-tab px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition border border-white/10 text-white/50 hover:text-[#c5a059] hover:border-[#c5a059]/30" onclick="document.querySelectorAll('.modal-category').forEach(c=&gt;c.classList.add('hidden')); document.getElementById('cat-steaks').classList.remove('hidden'); document.querySelectorAll('.modal-tab').forEach(t=&gt;{t.classList.remove('active', 'border-[#c5a059]/30', 'text-white'); t.classList.add('border-white/10', 'text-white/50');}); this.classList.add('active', 'border-[#c5a059]/30', 'text-white'); this.classList.remove('border-white/10', 'text-white/50');">
              Steak-Spezialitäten
            </button>
<button className="modal-tab px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition border border-white/10 text-white/50 hover:text-[#c5a059] hover:border-[#c5a059]/30" onclick="document.querySelectorAll('.modal-category').forEach(c=&gt;c.classList.add('hidden')); document.getElementById('cat-balkan').classList.remove('hidden'); document.querySelectorAll('.modal-tab').forEach(t=&gt;{t.classList.remove('active', 'border-[#c5a059]/30', 'text-white'); t.classList.add('border-white/10', 'text-white/50');}); this.classList.add('active', 'border-[#c5a059]/30', 'text-white'); this.classList.remove('border-white/10', 'text-white/50');">
              Balkanspezialitäten
            </button>
<button className="modal-tab px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition border border-white/10 text-white/50 hover:text-[#c5a059] hover:border-[#c5a059]/30" onclick="document.querySelectorAll('.modal-category').forEach(c=&gt;c.classList.add('hidden')); document.getElementById('cat-desserts').classList.remove('hidden'); document.querySelectorAll('.modal-tab').forEach(t=&gt;{t.classList.remove('active', 'border-[#c5a059]/30', 'text-white'); t.classList.add('border-white/10', 'text-white/50');}); this.classList.add('active', 'border-[#c5a059]/30', 'text-white'); this.classList.remove('border-white/10', 'text-white/50');">
              Desserts &amp; Kinder
            </button>
</div>

<div className="modal-content-container animate-enter delay-200">

<div className="modal-category active grid grid-cols-1 md:grid-cols-2 gap-4" id="cat-suppen">
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Tomatensuppe
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Französische Zwiebelsuppe
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Ungarische Gulaschsuppe
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Hühnersuppe mit Einlage
                </h4>
</div>
</div>

<div className="modal-category hidden grid grid-cols-1 md:grid-cols-2 gap-4" id="cat-vorspeisen">
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Honigmelone mit Rohschinken
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Krabben-Cocktail
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Schafskäse (kalt/warm)
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Tzatziki
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Omelett mit Champignons
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Gebackener Camembert
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Gefüllte Champignonsköpfe
                </h4>
</div>
</div>

<div className="modal-category hidden grid grid-cols-1 md:grid-cols-2 gap-4" id="cat-steaks">
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight mb-2">
                  Hüftsteak
                </h4>
<p className="text-sm text-white/50 font-light">
                  Wahlweise mit Kräuterbutter oder Zwiebeln
                </p>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Champignon-Rumpsteak
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Filetsteak „Americana“
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Filetsteak Madagascar
                </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                  Pfeffer-Rumpsteak
                </h4>
</div>
</div>

<div className="modal-category hidden grid grid-cols-1 md:grid-cols-2 gap-4" id="cat-balkan">
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight mb-2">
                  Cevapcici
                </h4>
<p className="text-sm text-white/50 font-light">
                  Serviert mit Djuvecreis
                </p>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight mb-2">
                  Raznjici
                </h4>
<p className="text-sm text-white/50 font-light">
                  Serviert mit Djuvecreis
                </p>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight mb-2">
                  Pljeskavica
                </h4>
<p className="text-sm text-white/50 font-light">
                  Serviert mit Djuvecreis
                </p>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight mb-2">
                  Pola-Pola
                </h4>
<p className="text-sm text-white/50 font-light">
                  Serviert mit Djuvecreis
                </p>
</div>
</div>

<div className="modal-category hidden" id="cat-desserts">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                    Gemischtes Eis
                  </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                    Coupe Dänemark
                  </h4>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight">
                    Palatschinken
                  </h4>
</div>
</div>
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-[#c5a059]" icon="solar:star-fall-bold" width="24"></iconify-icon>
<h3 className="font-serif text-2xl font-medium text-white tracking-tight">
                  Für unsere kleinen Gäste
                </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight mb-2">
                    Micky Maus
                  </h4>
<p className="text-sm text-white/50 font-light">
                    Kleines Schnitzel
                  </p>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-[#c5a059]/30 transition">
<h4 className="font-serif text-xl font-medium text-white tracking-tight mb-2">
                    Popeye
                  </h4>
<p className="text-sm text-white/50 font-light">Fischstäbchen</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
