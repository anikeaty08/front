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
sans: ['Inter', 'sans-serif'],
serif: ['Georgia', 'serif'],
},
colors: {
stone: {
50: '#fdfcf8',
100: '#f7f4eb',
200: '#ebe6d8',
300: '#d1cdc2',
400: '#a39e93',
500: '#7d7669',
600: '#5c564c',
800: '#36322d',
900: '#1f1d1a',
},
sage: {
50: '#f2f7f2',
100: '#e1ede3',
200: '#c3dec7',
300: '#95cc9e',
400: '#6db57a',
500: '#4da35c',
600: '#397a44',
700: '#2a5932',
800: '#1a331d',
},
terracotta: {
50: '#fffef5',
100: '#fff9e0',
200: '#ffeebb',
300: '#ffd666',
400: '#ffc133',
500: '#f59e0b',
600: '#d97706',
800: '#92400e',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
                  // Parallax Effect
                  const heroBg = document.getElementById('hero-bg');
                  const ctaBg = document.getElementById('cta-bg');

                  window.addEventListener('scroll', () => {
                    const scrolled = window.scrollY;
                    const height = window.innerHeight;

                    if (heroBg && scrolled < height) {
                      heroBg.style.transform = `translateY(${scrolled * 0.2}px)`;
                    }

                    if (ctaBg) {
                      const section = ctaBg.closest('section');
                      const rect = section.getBoundingClientRect();
                      if (rect.top < height && rect.bottom > 0) {
                         const offset = (height - rect.top) * 0.15;
                         ctaBg.style.transform = `translateY(${offset - 100}px)`;
                      }
                    }
                  }, { passive: true });

                  // Scroll Animations Observer
                  const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                      if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0');
                        entry.target.classList.add('animate-fade-in-up');
                        observer.unobserve(entry.target);
                      }
                    });
                  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

                  document.querySelectorAll('[data-observe="true"]').forEach(el => {
                    observer.observe(el);
                  });

                  // Mobile Menu Logic
                  const menuBtn = document.getElementById('menu-toggle');
                  const mobileMenu = document.getElementById('mobile-menu');
                  const menuOverlay = document.getElementById('mobile-menu-overlay');
                  const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
                  let isMenuOpen = false;

                  function toggleMenu() {
                      isMenuOpen = !isMenuOpen;
                      updateMenuState();
                  }

                  function closeMenu() {
                      isMenuOpen = false;
                      updateMenuState();
                  }

                  function updateMenuState() {
                      if (isMenuOpen) {
                          // Open
                          if(mobileMenu) mobileMenu.classList.remove('translate-x-[120%]');
                          if(menuOverlay) {
                              menuOverlay.classList.remove('opacity-0', 'pointer-events-none');
                              menuOverlay.setAttribute('aria-hidden', 'false');
                          }
                          document.body.style.overflow = 'hidden';
                          if(menuBtn) menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28" style="pointer-events:none"></iconify-icon>';
                      } else {
                          // Close
                          if(mobileMenu) mobileMenu.classList.add('translate-x-[120%]');
                          if(menuOverlay) {
                              menuOverlay.classList.add('opacity-0', 'pointer-events-none');
                              menuOverlay.setAttribute('aria-hidden', 'true');
                          }
                          document.body.style.overflow = '';
                          if(menuBtn) menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" style="pointer-events:none"></iconify-icon>';
                      }
                  }

                  if (menuBtn && mobileMenu) {
                    menuBtn.addEventListener('click', (e) => {
                      e.stopPropagation();
                      toggleMenu();
                    });

                    if(menuOverlay) {
                      menuOverlay.addEventListener('click', closeMenu);
                    }

                    // Close menu when clicking ANY link inside it
                    menuLinks.forEach(link => {
                        link.addEventListener('click', closeMenu);
                    });

                    // Close on escape key
                    document.addEventListener('keydown', (e) => {
                      if(e.key === 'Escape' && isMenuOpen) closeMenu();
                    });
                  }

                  // Testimonial Slider & Swipe
                  const slides = document.querySelectorAll('[data-slide]');
                  const prevBtn = document.getElementById('prev-slide');
                  const nextBtn = document.getElementById('next-slide');
                  const sliderContainer = document.getElementById('testimonial-slider');
                  let current = 0;
                  let slideInterval;

                  function showSlide(index) {
                    if (!slides.length) return;
                    // Hide current
                    slides[current].classList.replace('opacity-100', 'opacity-0');
                    slides[current].classList.replace('z-10', 'z-0');

                    // Update index
                    current = index;
                    if (current >= slides.length) current = 0;
                    if (current < 0) current = slides.length - 1;

                    // Show new
                    slides[current].classList.replace('opacity-0', 'opacity-100');
                    slides[current].classList.replace('z-0', 'z-10');
                  }

                  function nextSlide() {
                    showSlide(current + 1);
                    resetInterval();
                  }

                  function prevSlide() {
                    showSlide(current - 1);
                    resetInterval();
                  }

                  function resetInterval() {
                    clearInterval(slideInterval);
                    slideInterval = setInterval(() => showSlide(current + 1), 6000);
                  }

                  if (slides.length > 0) {
                    // Ensure initial state
                    slides[0].classList.replace('opacity-0', 'opacity-100');
                    slides[0].classList.replace('z-0', 'z-10');

                    resetInterval();

                    // Desktop Arrows
                    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
                    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

                    // Mobile Swipe
                    let touchStartX = 0;
                    let touchEndX = 0;

                    if(sliderContainer) {
                        sliderContainer.addEventListener('touchstart', (e) => {
                          touchStartX = e.changedTouches[0].screenX;
                        }, { passive: true });

                        sliderContainer.addEventListener('touchend', (e) => {
                          touchEndX = e.changedTouches[0].screenX;
                          handleSwipe();
                        }, { passive: true });
                    }

                    function handleSwipe() {
                      if (touchEndX < touchStartX - 50) nextSlide(); // Swipe Left -> Next
                      if (touchEndX > touchStartX + 50) prevSlide(); // Swipe Right -> Prev
                    }
                  }

                  // Android Chrome anchor fix
                  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                      const targetId = this.getAttribute('href');

                      // pomiń linki, które są tylko "#"
                      if (!targetId || targetId === "#") return;

                      const target = document.querySelector(targetId);

                      if (target) {
                        e.preventDefault();

                        const navbarOffset = 80; // wysokość fixed navbar (h-20 = 80px)
                        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - navbarOffset;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth"
                        });
                      }
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
      

<nav className="fixed w-full z-50 top-0 left-0 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="flex h-20 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between relative z-50 bg-stone-50/80">
<a className="text-xl tracking-tight text-stone-900 group flex items-center gap-1" href="#top">
          Move
          <span className="text-sage-600 font-serif italic text-2xl group-hover:rotate-12 transition-transform duration-300">
            &amp;
          </span>
          Flow
        </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-stone-500 items-center">
<a className="hover:text-stone-900 transition-colors" href="#program">
            Program
          </a>
<a className="hover:text-stone-900 transition-colors" href="#dla-kogo">
            Dla kogo
          </a>
<a className="hover:text-stone-900 transition-colors" href="#jak-to-dziala">
            Jak to działa
          </a>
<a className="hover:text-stone-900 transition-colors" href="#opinie">
            Opinie
          </a>
<a className="hover:text-stone-900 transition-colors" href="#cena">
            Oferta
          </a>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-stone-600 hover:text-stone-900 transition-colors" href="https://sila-zycia.pl/moje-konto/">
            Logowanie
          </a>
<a className="flex items-center gap-2 text-sm font-medium bg-sage-600 text-white px-6 py-2.5 rounded-full hover:bg-sage-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#cena">
            Rozpocznij
          </a>
</div>
<button className="md:hidden text-stone-900 flex items-center justify-center p-2" id="menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<div aria-hidden="true" className="fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-30 opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu-overlay"></div>
<div className="fixed right-4 top-1/2 -translate-y-1/2 w-[60%] max-w-[320px] h-[80vh] rounded-3xl shadow-2xl border border-stone-200 bg-stone-50 z-40 flex flex-col pt-10 px-6 pb-6 transition-transform duration-300 translate-x-[120%] md:hidden overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-4 mt-4">
<a className="text-xl font-serif italic text-stone-800 py-3 border-b border-stone-200 block" href="#program">
          Program
        </a>
<a className="text-xl font-serif italic text-stone-800 py-3 border-b border-stone-200 block" href="#dla-kogo">
          Dla kogo
        </a>
<a className="text-xl font-serif italic text-stone-800 py-3 border-b border-stone-200 block" href="#jak-to-dziala">
          Jak to działa
        </a>
<a className="text-xl font-serif italic text-stone-800 py-3 border-b border-stone-200 block" href="#opinie">
          Opinie
        </a>
<a className="text-xl font-serif italic text-stone-800 py-3 border-b border-stone-200 block" href="#cena">
          Oferta
        </a>
</div>
<div className="mt-auto space-y-4">
<a className="block w-full text-center py-3 text-stone-600 border border-stone-200 rounded-full" href="https://sila-zycia.pl/moje-konto/">
          Logowanie
        </a>
<a className="block w-full text-center py-3 bg-sage-600 text-white rounded-full shadow-sm hover:bg-sage-700 transition-colors" href="#cena">
          Rozpocznij
        </a>
</div>
</div>

<section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-100 will-change-transform object-bottom" id="hero-bg" src="https://sila-zycia.pl/wp-content/uploads/2026/02/DSC00654.webp"/>
<div className="absolute inset-0 bg-stone-50/50 backdrop-blur-sm"></div>
</div>

<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-stone-200/80 shadow-sm backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
</span>
<span className="uppercase text-xs text-stone-600 tracking-wide">
            18.02 Premiera platformy Move&amp;Flow
          </span>
</div>
<h1 className="md:text-7xl text-4xl leading-tight animate-fade-in-up text-stone-900 tracking-tight mb-6 md:mb-8" style={{animationDelay: '0.1s'}}>
          Praktyka ruchu
          <br/>
<span className="block mt-2 text-2xl md:text-3xl font-normal italic text-stone-500 font-serif">
            która wspiera Cię na co dzień.
          </span>
</h1>
<p className="md:text-xl leading-relaxed animate-fade-in-up text-lg font-light text-stone-600 max-w-2xl mr-auto mb-10 ml-auto" style={{animationDelay: '0.2s'}}>
          Szkoła ruchu online łącząca trening siły i mobilności, płynne movement
          flow oraz wschodnie praktyki zdrowotne i medytacje. Ruszaj się tak jak
          potrzebujesz - z uważnością i prowadzeniem.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-sage-700 text-white rounded-full text-sm hover:bg-sage-800 transition-all shadow-lg shadow-sage-200 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group hover:scale-105" href="#cennik">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" width="20"></iconify-icon>
            Dołącz do platformy
          </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-stone-700 border border-stone-200 rounded-full text-sm hover:bg-stone-50 transition-all hover:border-stone-300 flex items-center justify-center shadow-sm hover:scale-105" href="#filozofia">
            Dowiedz się więcej
          </a>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="filozofia">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
<div className="relative group">
<div className="absolute inset-0 bg-stone-100 rounded-[2rem] -rotate-3 transition-transform duration-500 group-hover:-rotate-6 z-0"></div>
<div className="relative bg-stone-50 rounded-[2rem] p-8 md:p-12 z-10 border border-stone-100 shadow-sm transition-transform duration-500 group-hover:-translate-y-2">
<div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 mb-8">
<iconify-icon icon="solar:lotus-linear" width="28"></iconify-icon>
</div>
<h3 className="md:text-2xl text-xl text-stone-900 tracking-tight mb-4">
                Więcej niż trening
              </h3>
<p className="text-stone-600 leading-relaxed font-light">
                W świecie, który ciągle wymaga od nas "więcej" i "szybciej",
                Move &amp; Flow to przystań. Wierzę, że ruch powinien być
                przyjemnością, a nie karą. To dialog z Twoim ciałem, a nie walka
                przeciwko niemu.
              </p>
</div>
</div>
<div className="text-center md:text-left">
<span className="block text-sage-600 font-semibold tracking-wider text-xs uppercase mb-4">
              ✨ FILOZOFIA
            </span>
<h2 className="text-2xl md:text-5xl text-stone-900 tracking-tight mb-8">
              Powrót do
              <span className="text-sage-600 italic font-serif">czucia.</span>
</h2>
<p className="leading-relaxed text-lg font-light text-stone-600 mb-10">
              Platforma odpowiada na różne potrzeby ruchowe - od budowania siły
              i sprawności, przez płynny movement, po głębokie rozluźnienie i
              regulację układu nerwowego.
            </p>
<div className="space-y-6 text-left mx-auto md:mx-0 max-w-sm md:max-w-none">
<div className="flex items-start gap-4 group">
<div className="mt-1 h-6 w-6 rounded-full bg-terracotta-50 border border-terracotta-100 flex items-center justify-center text-terracotta-600 shrink-0 group-hover:bg-terracotta-100 transition-colors">
<iconify-icon className="" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-stone-900">Siła funkcjonalna</h4>
<p className="text-sm text-stone-500 mt-1">
                    Wzmacnianie ciała w sposób mądry i bezpieczny dla stawów.
                  </p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 h-6 w-6 rounded-full bg-sage-50 border border-sage-100 flex items-center justify-center text-sage-600 shrink-0 group-hover:bg-sage-100 transition-colors">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-stone-900">Regulacja napięć</h4>
<p className="text-sm text-stone-500 mt-1">
                    Narzędzia do radzenia sobie ze stresem poprzez ciało.
                  </p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 h-6 w-6 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600 shrink-0 group-hover:bg-stone-200 transition-colors">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-stone-900">Zabawa i kreatywność</h4>
<p className="text-sm text-stone-500 mt-1">
                    Odkrywanie nowych możliwości ruchowych bez oceny.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="dla-kogo">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="block text-sage-600 font-semibold tracking-wider text-xs uppercase mb-4">
            👥 DLA KOGO
          </span>
<h2 className="text-2xl md:text-4xl text-stone-900 tracking-tight mb-6">
            Dla kogo tworzę tę przestrzeń?
          </h2>
<p className="leading-relaxed text-lg font-light text-stone-600">
            Jeśli czujesz, że tradycyjny fitness, czy joga nie jest dla Ciebie i
            chcesz zacząć się ruszać.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group" data-observe="true" style={{animationDelay: '0ms'}}>
<div className="w-14 h-14 bg-sage-50 rounded-full flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-100 transition-colors">
<iconify-icon icon="solar:user-hand-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-stone-900 mb-3 tracking-tight">
              Dla szukających balansu
            </h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
              Chcesz wzmocnić ciało, ale też nauczyć się odpuszczać i
              regenerować w mądry sposób.
            </p>
</div>
<div className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group" data-observe="true" style={{animationDelay: '100ms'}}>
<div className="w-14 h-14 bg-terracotta-50 rounded-full flex items-center justify-center text-terracotta-600 mb-6 group-hover:bg-terracotta-100 transition-colors">
<iconify-icon className="" icon="solar:dumbbell-small-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-stone-900 mb-3 tracking-tight">
              Dla zmęczonych presją
            </h3>
<p className="leading-relaxed text-sm font-light text-stone-500">
              Masz dość kultury „no pain, no gain”. Szukasz ruchu, który daje
              energię, a nie ją zabiera.
            </p>
</div>
<div className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group" data-observe="true" style={{animationDelay: '200ms'}}>
<div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 mb-6 group-hover:bg-stone-200 transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-stone-900 mb-3 tracking-tight">
              Dla kontaktu z ciałem
            </h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
              Chcesz lepiej czuć siebie, poprawić mobilność i zyskać zaufanie do
              możliwości swojego ciała.
            </p>
</div>
</div>
</div>
</section>
<section className="overflow-hidden pt-24 pb-24 relative bg-stone-100" id="program">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="block text-sage-600 font-semibold tracking-wider text-xs uppercase mb-4">
            🧘 TRENINGI
          </span>
<h2 className="md:text-4xl text-2xl text-stone-900 tracking-tight mb-4">
            Biblioteka treningów
          </h2>
<p className="font-light text-stone-500">
            podzielonych na intuicyjne kategorie, abyś zawsze znalazł/-a to,
            czego potrzebujesz.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col items-center text-center" data-observe="true">
<div className="relative w-full max-w-[320px] md:max-w-full mx-auto mb-6 transition-transform duration-300 group-hover:-translate-y-2">
<div className="bg-stone-800 rounded-t-xl p-2 pb-0 shadow-lg">
<div className="bg-stone-900 rounded-t-lg overflow-hidden aspect-[16/10] relative">
<img alt="Rozruch" className="w-full h-full object-cover" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/8-1.webp?w=800&amp;q=80"/>
</div>
</div>
<div className="bg-stone-200 h-3 w-full rounded-b-xl shadow-md relative border-t border-stone-300/50">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-stone-300 rounded-b-md"></div>
</div>
</div>
<h3 className="text-xl text-stone-900 tracking-tight">Rozruch</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed mt-2">
              Rozbudzające sesje z prostymi ćwiczeniami dla elastyczności ciała
              i podniesienia energii w ciągu dnia lub w przerwach.
            </p>
</div>

<div className="group flex flex-col items-center text-center" data-observe="true" style={{animationDelay: '100ms'}}>
<div className="relative w-full max-w-[320px] md:max-w-full mx-auto mb-6 transition-transform duration-300 group-hover:-translate-y-2">
<div className="bg-stone-800 rounded-t-xl p-2 pb-0 shadow-lg">
<div className="bg-stone-900 rounded-t-lg overflow-hidden aspect-[16/10] relative">
<img alt="Trening" className="w-full h-full object-cover" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/7-1.webp?w=800&amp;q=80"/>
</div>
</div>
<div className="bg-stone-200 h-3 w-full rounded-b-xl shadow-md relative border-t border-stone-300/50">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-stone-300 rounded-b-md"></div>
</div>
</div>
<h3 className="text-xl text-stone-900 tracking-tight">Trening</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed mt-2">
              Mądry trening siły i mobilności budujący fundamenty i strukturę.
            </p>
</div>

<div className="group flex flex-col items-center text-center" data-observe="true" style={{animationDelay: '200ms'}}>
<div className="relative w-full max-w-[320px] md:max-w-full mx-auto mb-6 transition-transform duration-300 group-hover:-translate-y-2">
<div className="bg-stone-800 rounded-t-xl p-2 pb-0 shadow-lg">
<div className="bg-stone-900 rounded-t-lg overflow-hidden aspect-[16/10] relative">
<img alt="Flow" className="w-full h-full object-cover" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/6-1.webp?w=800&amp;q=80"/>
</div>
</div>
<div className="bg-stone-200 h-3 w-full rounded-b-xl shadow-md relative border-t border-stone-300/50">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-stone-300 rounded-b-md"></div>
</div>
</div>
<h3 className="text-xl text-stone-900 tracking-tight">Flow</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed mt-2">
              Płynne sekwencje, praca nad mobilnością, kreatywne łączenie ruchów
              i improwizacja.
            </p>
</div>

<div className="group flex flex-col items-center text-center" data-observe="true" style={{animationDelay: '300ms'}}>
<div className="relative w-full max-w-[320px] md:max-w-full mx-auto mb-6 transition-transform duration-300 group-hover:-translate-y-2">
<div className="bg-stone-800 rounded-t-xl p-2 pb-0 shadow-lg">
<div className="bg-stone-900 rounded-t-lg overflow-hidden aspect-[16/10] relative">
<img alt="Regulacja" className="w-full h-full object-cover" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/9-1.webp?w=800&amp;q=80"/>
</div>
</div>
<div className="bg-stone-200 h-3 w-full rounded-b-xl shadow-md relative border-t border-stone-300/50">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-stone-300 rounded-b-md"></div>
</div>
</div>
<h3 className="text-xl text-stone-900 tracking-tight">Regulacja</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed mt-2">
              Praktyka wyciszenia i redukcji stresu poprzez oddech, medytacje
              prowadzone, ćwiczenia qi gong, rozciąganie.
            </p>
</div>
</div>
</div>
</section>
<section className="py-20 bg-white" id="jak-to-dziala">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<span className="block text-sage-600 font-semibold tracking-wider text-xs uppercase mb-4 flex items-center justify-center gap-1">
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
            Korzyści
          </span>
<h2 className="text-2xl md:text-5xl text-stone-900 tracking-tight mb-6">
            Co znajdziesz na Move &amp; Flow?
          </h2>
<p className="text-lg text-stone-600 font-light leading-relaxed">
            Pełną przestrzeń do ruchu, regeneracji i uważności - bez presji, za
            to z regularnym wsparciem.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all duration-300 group" data-observe="true">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sage-600 mb-6 shadow-sm border border-stone-100 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-4 tracking-tight">
              Codzienna praktyka
            </h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">Biblioteka treningów i sesji VOD (HD / 4K)</span>
</li>
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">Ponad 10 godzin materiałów na start</span>
</li>
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">3 nowe sesje tygodniowo</span>
</li>
</ul>
</div>
<div className="hover:border-stone-200 hover:shadow-sm transition-all duration-300 group bg-stone-50 border-stone-100 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8" data-observe="true" style={{animationDelay: '100ms'}}>
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sage-600 mb-6 shadow-sm border border-stone-100 group-hover:scale-105 transition-transform">
<iconify-icon className="" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-4 tracking-tight">
              Ruch dopasowany do Ciebie
            </h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">
                  Wybór praktyki: Rozruch, Trening, Flow, Regulacja
                </span>
</li>
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">Sesje z prowadzeniem i muzyką</span>
</li>
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">Czas trwania: 10–90 minut</span>
</li>
</ul>
</div>
<div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all duration-300 group" data-observe="true" style={{animationDelay: '200ms'}}>
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sage-600 mb-6 shadow-sm border border-stone-100 group-hover:scale-105 transition-transform">
<iconify-icon className="" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-4 tracking-tight">
              Wsparcie na żywo
            </h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">
                  1 praktyka live 60 minut tygodniowo (+ nagranie)
                </span>
</li>
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">
                  1 sesja Q&amp;A 60 minut miesięcznie (+ nagranie)
                </span>
</li>
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">
                  Dostęp do zamkniętej grupy użytkowników na WhatsApp
                </span>
</li>
</ul>
</div>
<div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all duration-300 group" data-observe="true" style={{animationDelay: '300ms'}}>
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sage-600 mb-6 shadow-sm border border-stone-100 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-4 tracking-tight">
              Darmowe bonusy
            </h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">
                  Nagrania zajęć Qi Gong &amp; Movement: 12×1,5 h (HD)
                </span>
</li>
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">
                  Nagrania zajęć Qi Gong Początkujący: 12×1,5 h (HD)
                </span>
</li>
<li className="flex items-start gap-2 text-stone-600 text-sm font-light leading-relaxed">
<iconify-icon className="text-sage-600 mt-0.5 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="">
                  Zniżki na warsztaty i obozy Move &amp; Flow
                </span>
</li>
</ul>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-10 py-4 bg-sage-700 text-white rounded-full hover:bg-sage-800 transition-all shadow-lg shadow-sage-200 hover:shadow-xl hover:-translate-y-0.5" href="#cennik">
            Dołącz do platformy
          </a>
</div>
</div>
</section>

<section className="bg-white border-stone-100 border-t pt-24 pb-24" id="opinie">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="text-center mb-12">
<span className="block text-sage-600 font-semibold tracking-wider text-xs uppercase mb-6">
            💬 OPINIE
          </span>
<div className="relative w-full overflow-hidden">
<div className="relative w-full h-[650px] md:h-[500px]" id="testimonial-slider">
<div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 opacity-100 z-10 px-4" data-slide="">
<iconify-icon className="text-4xl text-sage-400 mb-6" icon="solar:quote-up-linear"></iconify-icon>
<h3 className="text-base md:text-xl tracking-tight text-stone-900 leading-relaxed max-w-2xl mx-auto italic">
                  "Zajęcia z Babą zmieniają moje ciało i umysł u podstaw. Na
                  tych nowych i silnych fundamentach mogę tworzyć wiele dobrego
                  i stabilnego. Daje mi to poczucie spokoju i sprawczości.
                  Uprawiam wiele rodzajów sportu i moja świadomość ciała jest
                  dość wysoka, jednak to jak każde jedne zajęcia qi gongu
                  zmieniają moje wzorce postawy jest nieporównywalne do żadnej
                  innej praktyki."
                </h3>
<div className="flex gap-1 text-terracotta-400 justify-center my-6">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="h-12 w-12 rounded-full bg-stone-200 overflow-hidden shrink-0">
<img alt="Róża" className="w-full h-full object-cover" src="https://sila-zycia.pl/wp-content/uploads/2025/09/IMG_4612-e1771179797446.jpg"/>
</div>
<div className="text-left">
<div className="text-base font-medium text-stone-900">Róża</div>
</div>
</div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 opacity-0 z-0 px-4" data-slide="">
<iconify-icon className="text-4xl text-sage-400 mb-6" icon="solar:quote-up-linear"></iconify-icon>
<h3 className="text-base md:text-xl tracking-tight text-stone-900 leading-relaxed max-w-2xl mx-auto italic">
                  "Praca z Babą sprowadza mnie do bycia w ciele i połączenia z
                  tym co aktualnie w nim obecne. Odkrywam na nowo jak ruch
                  naturalnie wyłania się z połączenia pomiędzy ziemią a niebem.
                  Ciało stopniowo wyłania się ze starych, niepotrzebnych już
                  wzorców, bez potrzeby napinania go w ruchu. Baba w mistrzowski
                  sposób zaprasza do kontaktu z subtelnymi jakościami w ciele,
                  które wspierają przywrócenie przepływu energii i bezpośrednie
                  połączenie ze źródłem istnienia."
                </h3>
<div className="flex gap-1 text-terracotta-400 justify-center my-6">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="h-12 w-12 rounded-full bg-stone-200 overflow-hidden shrink-0">
<img alt="Wojciech" className="w-full h-full object-cover" src="https://sila-zycia.pl/wp-content/uploads/2025/09/c97a43c5-a3eb-4866-8916-d9bccef65dc1-e1771179826345.jpg"/>
</div>
<div className="text-left">
<div className="text-base font-medium text-stone-900">
                      Wojciech
                    </div>
</div>
</div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 opacity-0 z-0 px-4" data-slide="">
<iconify-icon className="text-4xl text-sage-400 mb-6" icon="solar:quote-up-linear"></iconify-icon>
<h3 className="text-base md:text-xl tracking-tight text-stone-900 leading-relaxed max-w-2xl mx-auto italic">
                  "Od samego początku czułem bardzo dużą mądrość, spokój i
                  otwartość od Michała. Czuję, że odkryłem nowe jakości w swojej
                  postawie, zwiększyłem czucie oraz świadomość swojego ciała i
                  opuściłem wiele napięć. Jestem bardzo wdzięczny za wszystko,
                  czego się nauczyłem. Niesamowicie jest praktykować spokój."
                </h3>
<div className="flex gap-1 text-terracotta-400 justify-center my-6">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="h-12 w-12 rounded-full bg-stone-200 overflow-hidden shrink-0">
<img alt="Adam" className="w-full h-full object-cover" src="https://sila-zycia.pl/wp-content/uploads/2025/09/unnamed-scaled-e1771179844141.jpg"/>
</div>
<div className="text-left">
<div className="text-base font-medium text-stone-900">Adam</div>
</div>
</div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 opacity-0 z-0 px-4" data-slide="">
<iconify-icon className="text-4xl text-sage-400 mb-6" icon="solar:quote-up-linear"></iconify-icon>
<h3 className="text-base md:text-xl tracking-tight text-stone-900 leading-relaxed max-w-2xl mx-auto italic">
                  "Jestem pod ogromnym wrażeniem jakości i wartości kursu.
                  Michał posiada bardzo dużo wiedzy. Dzieli się nią w łatwy,
                  przejrzysty sposób i dla każdego zrozumiały. Dodatkowo
                  przyjemny głos i dobrze się słucha wykładów, od których
                  zaczynam przygodę z ćwiczeniami, czuciem ciała i obecnością.
                  Cieszę się, że w dobrym czasie trafiłam na ten kurs - podstawy
                  Qi Gongu. Już po pierwszym wykładzie mam nowe wnioski i chcę
                  wdrożyć do życia codziennego. Michał mówi o aspektach naprawdę
                  ważnych, o których często zapominamy. To nie tylko ćwiczenia -
                  to powrót do siebie, do swojego ciała, do czucia komfortu w
                  ciele, znalezienia w nim wygody, rozluźnienia."
                </h3>
<div className="flex gap-1 text-terracotta-400 justify-center my-6">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="h-12 w-12 rounded-full bg-stone-200 overflow-hidden shrink-0">
<div className="w-full h-full bg-stone-300 flex items-center justify-center text-stone-500 text-sm font-medium">
                      M
                    </div>
</div>
<div className="text-left">
<div className="text-base font-medium text-stone-900">
                      Magdalena
                    </div>
</div>
</div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 opacity-0 z-0 px-4" data-slide="">
<iconify-icon className="text-4xl text-sage-400 mb-6" icon="solar:quote-up-linear"></iconify-icon>
<h3 className="text-base md:text-xl tracking-tight text-stone-900 leading-relaxed max-w-2xl mx-auto italic">
                  "Szukałam, szukałam i w końcu znalazłam! Podczas sesji z
                  Michałem odkryłam jak mogę sobie pomagać w odciążaniu ciała z
                  napięć i bólu. Ze skorupy zmęczonego i obolałego ciała zaczęła
                  wychodzić swoboda i luz - na tym mi najbardziej zależało, ale
                  na sesjach z Michałem dzieje się o wiele więcej. Trudno mi to
                  opisać słowami, to takie wracanie do siebie."
                </h3>
<div className="flex gap-1 text-terracotta-400 justify-center my-6">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="h-12 w-12 rounded-full bg-stone-200 overflow-hidden shrink-0">
<img alt="Kamila" className="w-full h-full object-cover" src="https://sila-zycia.pl/wp-content/uploads/2026/02/Zrzut-ekranu-2026-02-15-o-19.34.14-e1771180492807.png"/>
</div>
<div className="text-left">
<div className="text-base font-medium text-stone-900">
                      Kamila
                    </div>
</div>
</div>
</div>
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 pointer-events-none z-20 hidden md:flex">
<button aria-label="Poprzednia opinia" className="pointer-events-auto p-3 text-stone-400 hover:text-sage-600 transition-colors bg-white/40 hover:bg-white rounded-full backdrop-blur-md shadow-sm border border-white/50" id="prev-slide">
<iconify-icon icon="solar:alt-arrow-left-linear" width="28"></iconify-icon>
</button>
<button aria-label="Następna opinia" className="pointer-events-auto p-3 text-stone-400 hover:text-sage-600 transition-colors bg-white/40 hover:bg-white rounded-full backdrop-blur-md shadow-sm border border-white/50" id="next-slide">
<iconify-icon icon="solar:alt-arrow-right-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-stone-50 border-stone-200 border-t pt-24 pb-8" id="o-mnie">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="md:col-span-5 relative group">
<div className="absolute inset-0 bg-sage-200 rounded-[2.5rem] rotate-6 scale-95 opacity-40 blur-sm transition-transform duration-500 group-hover:rotate-3"></div>
<div className="absolute -inset-2 bg-terracotta-100 rounded-[2.5rem] -rotate-3 scale-95 opacity-30 blur-sm transition-transform duration-500 group-hover:-rotate-1"></div>
<div className="relative rounded-[2.5rem] overflow-hidden shadow-xl shadow-stone-200/60 border border-stone-100 bg-white aspect-[4/5] md:aspect-auto md:h-[600px] z-10">

<img alt="Instruktor Move &amp; Flow - Michał" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/DSC00659-1-scaled.webp"/>
</div>
<img alt="" className="absolute top-6 left-1/2 -translate-x-1/2 w-48 rounded-2xl shadow-xl z-20 object-cover" src="https://sila-zycia.pl/wp-content/uploads/2026/02/IMG_8044.jpg"/>
</div>

<div className="md:col-span-7 md:pl-4 text-center md:text-left">
<span className="inline-block py-1 px-3 rounded-full bg-stone-100 text-stone-600 font-medium tracking-wider text-xs uppercase mb-6 border border-stone-200/50">
              👋 Poznajmy się
            </span>
<h2 className="text-2xl md:text-5xl text-stone-900 tracking-tight mb-8">
              O mnie
            </h2>
<div className="space-y-6 text-lg font-light text-stone-600 leading-relaxed">
<p className="">
                Jestem nauczycielem ruchu i twórcą Move &amp; Flow. Pracuję z
                ciałem poprzez świadomy i mądry trening, płynne movement flow, a
                także praktyki wyciszenia i rozluźnienia.
              </p>
<p className="">
                Treningi prowadzę od 12 lat. Skończyłem warszawski AWF. Jestem
                współtwórcą W Gruncie Ruchu i jednym z pierwszych nauczycieli
                Movementu w Polsce. Główne metody z których korzystam: trening
                funkcjonalny, movement, qi gong, elementy jogi, capoeiry, tańca,
                automasażu.
              </p>
<p className="">
                Move &amp; Flow powstało jako przestrzeń do regularnej,
                samodzielnej praktyki z prowadzeniem, która realnie wspiera Cię
                na co dzień - fizycznie i mentalnie.
              </p>
</div>
<div className="mt-10 pt-8 border-t border-stone-200/60 flex items-center gap-4 justify-center md:justify-start">
<div className="h-12 w-12 rounded-full overflow-hidden border border-stone-200 shadow-sm shrink-0">
<img alt="Michał" className="w-full h-full object-cover object-center" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/DSC00628-2-1.webp"/>
</div>
<div className="">
<div className="text-stone-900">Michał ,,Baba" Baciński</div>
<div className="text-sm text-stone-500 font-light">
                  Założyciel Move &amp; Flow
                </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-stone-50 pb-24 pt-12 overflow-hidden" id="galeria">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm group">
<img alt="Moment 1" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300 group-hover:scale-105" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/P6C6651.webp"/>
</div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm group">
<img alt="Moment 2" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300 group-hover:scale-105" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/baba-do-grafiki.webp"/>
</div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm group">
<img alt="Moment 3" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300 group-hover:scale-105" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/44035785_2161428407433817_8517940172636028928_n-_1_.webp"/>
</div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm group">
<img alt="Moment 4" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300 group-hover:scale-105" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/MoveOn-Camp-2024-fot.-agnieszka-cytacka-ACF_5215-scaled-1.webp"/>
</div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm group">
<img alt="Moment 5" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300 group-hover:scale-105" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/474616073_3869902056586435_238203481518142686_n-_1_.webp"/>
</div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm group">
<img alt="Moment 6" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-300 group-hover:scale-105" loading="lazy" src="https://sila-zycia.pl/wp-content/uploads/2026/02/93990988_2862872350433978_2949464276793819136_n.webp"/>
</div>
</div>
</div>
</section>
<section className="bg-white border-t border-stone-200 py-24" id="darmowe-nagranie">
<div className="max-w-5xl mx-auto px-6 text-center">
<div data-observe="true">
<span className="block text-sage-600 font-semibold tracking-wider text-xs uppercase mb-4">
            🎥 ZOBACZ JAK TO WYGLĄDA
          </span>
<h2 className="text-3xl md:text-4xl text-stone-900 tracking-tight mb-6">
            Darmowa sesja pokazowa
          </h2>
<p className="text-lg text-stone-600 font-light max-w-2xl mx-auto mb-12">
            Zanim dołączysz, możesz zobaczyć fragment praktyki. To przykładowa
            sesja, która pokazuje klimat i sposób prowadzenia zajęć.
          </p>
</div>
<div className="max-w-4xl mx-auto aspect-video rounded-[2rem] overflow-hidden shadow-xl shadow-stone-200/60 bg-stone-100 relative" data-observe="true" style={{animationDelay: '100ms'}}>
<iframe allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" height="100%" src="https://player.vimeo.com/video/1165728188" width="100%"></iframe>
</div>
<p className="text-sm text-stone-500 mt-8 font-light" data-observe="true" style={{animationDelay: '200ms'}}>
          Jeśli poczujesz, że to przestrzeń dla Ciebie – dołącz poniżej.
        </p>
</div>
</section>
<section className="md:py-20 bg-white pt-16 pb-16 relative" id="cennik">
<div className="absolute top-0 left-0 w-full h-0" id="cena"></div>
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="block uppercase text-xs font-semibold text-sage-600 tracking-wider mb-4">
            💎 SUBSKRYBCJA
          </span>
<h2 className="md:text-4xl text-2xl text-stone-900 tracking-tight mb-6">
            Wejdź do Move &amp; Flow bez presji
          </h2>
<p className="leading-relaxed text-lg font-light text-stone-600">
            Pełny dostęp do platformy. Zaczynasz od 49 zł i sprawdzasz, czy to
            przestrzeń dla Ciebie.
          </p>
</div>
<div className="space-y-12">

<div className="max-w-4xl mx-auto bg-white border border-sage-300 shadow-2xl shadow-sage-200/50 rounded-[3rem] p-8 md:p-12 relative" data-observe="true">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-terracotta-500 text-white text-[11px] font-semibold px-6 py-2 rounded-full uppercase tracking-widest shadow-md">
              OFERTA STARTOWA
            </div>
<div className="text-center mb-10">
<h3 className="text-3xl md:text-5xl text-stone-900 tracking-tight font-medium mb-4">
                Wejdź do Move &amp; Flow za 49 zł
              </h3>
<p className="text-lg text-stone-500 font-light">
                Pełny dostęp do platformy przez pierwszy miesiąc.
              </p>
</div>
<div className="flex flex-col items-center mb-12">
<div className="flex items-center gap-4">
<span className="text-2xl text-stone-400 line-through decoration-stone-300">
                  99 zł
                </span>
<span className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
                  49 zł
                </span>
<span className="text-stone-500 text-lg">/ pierwszy miesiąc</span>
</div>
<p className="text-stone-600 text-sm mt-4 font-normal">
                Następnie 99 zł / miesiąc
              </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-12 max-w-3xl mx-auto">
<div className="flex items-start gap-3 text-stone-600 font-light">
<iconify-icon className="text-sage-600 text-2xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Pełny dostęp do wszystkich sesji</span>
</div>
<div className="flex items-start gap-3 text-stone-600 font-light">
<iconify-icon className="text-sage-600 text-2xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>3 nowe praktyki tygodniowo</span>
</div>
<div className="flex items-start gap-3 text-stone-600 font-light">
<iconify-icon className="text-sage-600 text-2xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Sesje Live + Q&amp;A</span>
</div>
<div className="flex items-start gap-3 text-stone-600 font-light">
<iconify-icon className="text-sage-600 text-2xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Grupa WhatsApp</span>
</div>
<div className="flex items-start gap-3 text-stone-600 font-light md:col-span-2 md:justify-center">
<iconify-icon className="text-sage-600 text-2xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>14 dni gwarancji zwrotu pieniędzy</span>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center w-full max-w-md py-5 bg-sage-700 text-white text-base font-medium rounded-full shadow-lg shadow-sage-200 hover:bg-sage-800 transition-all hover:-translate-y-0.5" href="https://sila-zycia.pl/zamowienie/?add-to-cart=5013">
                Zaczynam za 49 zł
              </a>
<p className="text-[11px] text-stone-400 text-center mt-4">
                Bez zobowiązań. 14 dni gwarancji zwrotu pieniędzy.
              </p>
</div>
</div>

<div className="text-sm uppercase tracking-wider text-stone-400 mb-6 text-center">
            Dla zaangażowanych taniej
          </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
<div className="bg-stone-50 border border-stone-200 rounded-[2rem] p-8 flex flex-col transition-all duration-300 hover:shadow-md" data-observe="true">
<div className="mb-6">
<h3 className="text-xl text-stone-900 tracking-tight font-medium">
                  Kwartalny
                </h3>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold text-stone-900 tracking-tight">
                    89 zł
                  </span>
<span className="text-stone-500 text-sm">/ mies.</span>
</div>
<p className="text-stone-400 text-xs mt-2 font-light uppercase tracking-wider">
                  Płatność 267 zł co 3 mies.
                </p>
</div>
<div className="mt-auto">
<a className="flex items-center justify-center w-full py-4 rounded-full border border-stone-200 text-stone-600 text-sm font-medium hover:bg-white hover:border-stone-300 transition-all" href="https://sila-zycia.pl/zamowienie/?add-to-cart=4871">
                  Wybierz plan
                </a>
</div>
</div>
<div className="bg-stone-50 border border-stone-200 rounded-[2rem] p-8 flex flex-col transition-all duration-300 hover:shadow-md" data-observe="true">
<div className="mb-6">
<h3 className="text-xl text-stone-900 tracking-tight font-medium">
                  Roczny
                </h3>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-semibold text-stone-900 tracking-tight">
                    79 zł
                  </span>
<span className="text-stone-500 text-sm">/ mies.</span>
</div>
<p className="text-stone-400 text-xs mt-2 font-light uppercase tracking-wider">
                  Płatność 948 zł co rok
                </p>
</div>
<div className="mt-auto">
<a className="flex items-center justify-center w-full py-4 rounded-full border border-stone-200 text-stone-600 text-sm font-medium hover:bg-white hover:border-stone-300 transition-all" href="https://sila-zycia.pl/zamowienie/?add-to-cart=4876">
                  Wybierz plan
                </a>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-stone-50 border-stone-200 border-t pt-24 pb-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="block text-sage-600 font-semibold tracking-wider text-xs uppercase mb-4">
            ❓ FAQ
          </span>
<h2 className="text-3xl md:text-4xl text-stone-900 tracking-tight">
            Najczęstsze pytania
          </h2>
</div>
<div className="space-y-4">
<details className="group bg-white rounded-[1.5rem] p-1 border border-stone-200 open:ring-1 open:ring-stone-200/50 shadow-sm transition-all duration-300" data-observe="true" name="faq">
<summary className="flex items-center justify-between px-5 py-3 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
<h3 className="text-stone-900 pr-4">
                Czy to jest dla początkujących?
              </h3>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 flex shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-3 pt-0 text-stone-500 font-light text-sm leading-relaxed animate-fade-in-up">
              Tak. Move &amp; Flow jest stworzone z myślą o osobach na różnych
              etapach drogi. Możesz zacząć bez wcześniejszego doświadczenia, a
              przy wielu treningach dostępne są różne poziomy zaawansowania,
              dzięki czemu łatwo dopasujesz praktykę do swoich możliwości i
              samopoczucia.
            </div>
</details>
<details className="group bg-white rounded-[1.5rem] p-1 border border-stone-200 open:ring-1 open:ring-stone-200/50 shadow-sm transition-all duration-300" data-observe="true" name="faq" style={{animationDelay: '100ms'}}>
<summary className="flex items-center justify-between p-5 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
<h3 className="text-stone-900 pr-4">Ile czasu trwają sesje?</h3>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 flex shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-stone-500 font-light text-sm leading-relaxed animate-fade-in-up">
              Większość sesji trwa od 10 do 60 minut, co pozwala dopasować
              praktykę do dnia i dostępnej energii. Dostępne są również dłuższe
              sesje 90-minutowe w formie nagrań całych cykli zajęć.
            </div>
</details>
<details className="group bg-white rounded-[1.5rem] p-1 border border-stone-200 open:ring-1 open:ring-stone-200/50 shadow-sm transition-all duration-300" data-observe="true" name="faq" style={{animationDelay: '200ms'}}>
<summary className="flex items-center justify-between p-5 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
<h3 className="text-stone-900 pr-4">Czy potrzebuję sprzętu?</h3>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 flex shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-stone-500 font-light text-sm leading-relaxed animate-fade-in-up">
              Zdecydowana większość praktyk odbywa się bez żadnego sprzętu.
              Jeśli pojawiają się akcesoria, są to zazwyczaj mata lub dywan,
              poduszka do medytacji albo krzesło. Wszystkie elementy są
              opcjonalne.
            </div>
</details>
<details className="group bg-white rounded-[1.5rem] p-1 border border-stone-200 open:ring-1 open:ring-stone-200/50 shadow-sm transition-all duration-300" data-observe="true" name="faq" style={{animationDelay: '300ms'}}>
<summary className="flex items-center justify-between p-5 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
<h3 className="text-stone-900 pr-4">
                Na jakich urządzeniach działa platforma?
              </h3>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 flex shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-stone-500 font-light text-sm leading-relaxed animate-fade-in-up">
              Platforma działa na komputerze, tablecie i telefonie. Po
              zalogowaniu możesz otwierać filmy w trybie pełnoekranowym na
              każdym urządzeniu z dostępem do internetu. Nie ma możliwości
              pobierania nagrań — dostęp odbywa się online.
            </div>
</details>
<details className="group bg-white rounded-[1.5rem] p-1 border border-stone-200 open:ring-1 open:ring-stone-200/50 shadow-sm transition-all duration-300" data-observe="true" name="faq" style={{animationDelay: '400ms'}}>
<summary className="flex items-center justify-between p-5 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
<h3 className="text-stone-900 pr-4">
                Czy mogę anulować subskrypcję w dowolnym momencie?
              </h3>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 flex shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-stone-500 font-light text-sm leading-relaxed animate-fade-in-up">
              Tak. Subskrypcję możesz anulować w każdej chwili, bez ukrytych
              kosztów i długoterminowych zobowiązań. Dostęp zachowujesz do końca
              opłaconego okresu.
            </div>
</details>
<details className="group bg-white rounded-[1.5rem] p-1 border border-stone-200 open:ring-1 open:ring-stone-200/50 shadow-sm transition-all duration-300" data-observe="true" name="faq" style={{animationDelay: '500ms'}}>
<summary className="flex items-center justify-between p-5 cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
<h3 className="text-stone-900 pr-4">
                Czy to jest bardziej trening czy relaks?
              </h3>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 flex shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-stone-500 font-light text-sm leading-relaxed animate-fade-in-up">
              To połączenie obu. Znajdziesz tu zarówno praktyki wzmacniające i
              energetyzujące, jak i sesje regeneracyjne, pracę z oddechem oraz
              uważność. Każdego dnia możesz wybrać to, czego aktualnie
              potrzebuje Twoje ciało i głowa.
            </div>
</details>
<details className="group bg-white rounded-[1.5rem] p-1 border border-stone-200 open:ring-1 open:ring-stone-200/50 shadow-sm transition-all duration-300" data-observe="true" name="faq">
<summary className="flex cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<h3 className="text-stone-900 pr-4">
                Czy mogę otrzymać zwrot, jeśli platforma mi nie odpowiada?
              </h3>
<span className="text-stone-400 transition-transform duration-300 group-open:rotate-180 flex shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-stone-500 font-light text-sm leading-relaxed animate-fade-in-up">
              Tak. Masz 14 dni od zakupu, aby spokojnie sprawdzić platformę.
              Jeśli uznasz, że to nie jest przestrzeń dla Ciebie, zwrócę pełną
              kwotę - bez dodatkowych pytań.
            </div>
</details>
</div>
</div>
</section>
<section className="relative py-24 md:py-32 overflow-hidden bg-stone-50 border-t border-stone-200 flex items-center justify-center">
<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover transition-opacity duration-1000 object-bottom" id="cta-bg" loading="lazy" onload="this.classList.remove('opacity-0')" src="https://sila-zycia.pl/wp-content/uploads/2026/02/DSC00726.webp"/>
<div className="absolute inset-0 bg-stone-50/50 backdrop-blur-sm"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-2xl md:text-5xl text-stone-900 tracking-tight mb-6">
          Zacznij swoją praktykę z Move &amp; Flow
        </h2>
<p className="leading-relaxed text-xl font-light text-stone-600 mb-10">
          Bez presji. Bez napinki.
          <br/>
          W swoim tempie, w swoim domu.
        </p>
<a className="inline-flex items-center justify-center px-10 py-4 bg-sage-700 text-white rounded-full hover:bg-sage-800 transition-all shadow-lg shadow-sage-200 hover:shadow-xl hover:-translate-y-0.5" href="#cennik">
          Dołącz do platformy
        </a>
<p className="mt-5 text-stone-500 font-light text-sm text-center mx-auto">
          Masz 14 dni na spokojne sprawdzenie platformy. Jeśli uznasz, że to nie
          dla Ciebie – zwracam pełną kwotę.
        </p>
</div>
</section>

<footer className="bg-stone-50 py-12 border-t border-stone-200">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
<p className="text-stone-500 text-sm mb-2 font-light">
          © 2026 Siła Życia – Move &amp; Flow
        </p>
<p className="text-stone-500 text-sm mb-6 font-light">
          Sprzedaż realizowana przez stronę
          <a className="hover:text-sage-600 transition-colors" href="https://sila-zycia.pl">
            Siła Życia
          </a>
</p>
<div className="flex flex-wrap justify-center gap-8 text-sm text-stone-500 mb-6 font-light">
<a className="hover:text-stone-900 transition-colors" href="https://sila-zycia.pl/polityka-prywatnosci">
            Polityka prywatności
          </a>
<a className="hover:text-stone-900 transition-colors" href="https://sila-zycia.pl/regulamin">
            Regulamin
          </a>
</div>
<a className="text-stone-500 hover:text-sage-600 transition-colors text-sm font-light" href="mailto:kontakt@sila-zycia.pl">
          kontakt@sila-zycia.pl
        </a>
</div>
</footer>


    </>
  );
}
