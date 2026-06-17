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
      
{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Usługi Remontowo-Wykończeniowe Michał Ciesielski",
"telephone": "+48731439805",
"email": "michalciesielski098@gmail.com",
"areaServed": ["Ostrów Mazowiecka", "Ostrołęka", "Białystok"],
"description": "Kompleksowe wykończenia wnętrz od A do Z – łazienki, gładzie, tynki, remonty. Działamy na Mazowszu i Podlasiu.",
"priceRange": "$$",
"openingHours": "Mo-Fr 07:00-18:00"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE MENU TOGGLE ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobLinks = document.querySelectorAll('.mob-link');
    const lines = hamburger.querySelectorAll('span');
    let isMenuOpen = false;

    const toggleMenu = () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        lines[0].style.transform = 'translateY(8px) rotate(45deg)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
      } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'auto';
      }
    };

    hamburger.addEventListener('click', toggleMenu);
    mobLinks.forEach(link => link.addEventListener('click', toggleMenu));

    // --- 2. HEADER SCROLL EFFECT ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-[#111110]/95', 'backdrop-blur-md', 'border-b', 'border-white/5', 'py-4');
        header.classList.remove('py-6');
      } else {
        header.classList.remove('bg-[#111110]/95', 'backdrop-blur-md', 'border-b', 'border-white/5', 'py-4');
        header.classList.add('py-6');
      }
    });

    // --- 3. SCROLL REVEAL ANIMATIONS & COUNTER ---
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    let countersStarted = false;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // General reveals
          if (entry.target.classList.contains('hero-reveal')) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translate(0, 0)';
          } else if (entry.target.classList.contains('reveal')) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          } else if (entry.target.classList.contains('reveal-left') || entry.target.classList.contains('reveal-right')) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }
          
          // Trust bar counters
          if (entry.target.id === 'trust' && !countersStarted) {
            countersStarted = true;
            const counters = entry.target.querySelectorAll('[data-target]');
            counters.forEach(counter => {
              const target = +counter.getAttribute('data-target');
              const suffix = counter.getAttribute('data-suffix');
              const duration = 2000;
              const step = target / (duration / 16);
              let current = 0;
              
              const updateCounter = () => {
                current += step;
                if (current < target) {
                  counter.innerText = Math.ceil(current) + suffix;
                  requestAnimationFrame(updateCounter);
                } else {
                  counter.innerText = target + suffix;
                }
              };
              setTimeout(updateCounter, 400); // slight delay to sync with fade in
            });
          }
          
          // Title underline animation
          const underline = entry.target.querySelector('.title-underline');
          if(underline) {
            setTimeout(() => {
              underline.style.setProperty('--tw-after-w', '100%');
              underline.classList.add("after:w-full");
            }, 300);
          }

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .hero-reveal, #trust, #process h2').forEach(el => {
      observer.observe(el);
    });

    // Trigger hero animations immediately if at top
    if(window.scrollY < 100) {
      setTimeout(() => {
        document.querySelectorAll('.hero-reveal').forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'translate(0, 0)';
        });
      }, 100);
    }

    // --- 4. FAQ ACCORDION ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('iconify-icon');
        const iconContainer = question.querySelector('.faq-icon');
        const isExpanded = question.getAttribute('aria-expanded') === 'true';

        // Close all others
        faqQuestions.forEach(q => {
          if (q !== question) {
            q.setAttribute('aria-expanded', 'false');
            q.nextElementSibling.style.maxHeight = null;
            q.querySelector('iconify-icon').setAttribute('icon', 'solar:add-linear');
            q.classList.remove('text-[#C4541A]');
            q.querySelector('.faq-icon').classList.remove('bg-[#C4541A]', 'text-white');
          }
        });

        // Toggle current
        if (isExpanded) {
          question.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
          icon.setAttribute('icon', 'solar:add-linear');
          question.classList.remove('text-[#C4541A]');
          iconContainer.classList.remove('bg-[#C4541A]', 'text-white');
        } else {
          question.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          icon.setAttribute('icon', 'solar:minus-linear');
          question.classList.add('text-[#C4541A]');
          iconContainer.classList.add('bg-[#C4541A]', 'text-white');
        }
      });
    });

    // --- 5. SMOOTH SCROLL FOR ANCHOR LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
          e.preventDefault();
          const headerHeight = document.getElementById('header').offsetHeight;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
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
      

<div className="fixed inset-0 pointer-events-none z-[9999] opacity-40 mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 256 256\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.9\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\' opacity=\\'0.03\\'/%3E%3C/svg%3E\')'}}></div>

<header className="fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-500 ease-out" id="header">
<div className="max-w-[1280px] mx-auto px-6 lg:px-10">
<div className="flex items-center justify-between gap-6">
<a className="flex flex-col leading-none z-50" href="#hero">
<span className="font-['Bebas_Neue'] text-xl tracking-tighter text-white">CIESIELSKI</span>
<span className="text-xs text-[#D96B2D] tracking-widest uppercase font-medium mt-0.5">Wykończenia Wnętrz</span>
</a>
<nav className="hidden lg:block">
<ul className="flex items-center gap-8">
<li><a className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-[#C4541A] after:transition-all hover:after:w-full" href="#about">O nas</a></li>
<li><a className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-[#C4541A] after:transition-all hover:after:w-full" href="#services">Usługi</a></li>
<li><a className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-[#C4541A] after:transition-all hover:after:w-full" href="#gallery">Realizacje</a></li>
<li><a className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-[#C4541A] after:transition-all hover:after:w-full" href="#testimonials">Opinie</a></li>
<li><a className="text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-[#C4541A] after:transition-all hover:after:w-full" href="#contact">Kontakt</a></li>
</ul>
</nav>
<div className="flex items-center gap-6 z-50">
<a className="hidden md:flex items-center gap-2 text-base font-semibold text-white tracking-wide hover:text-[#D96B2D] transition-colors" href="tel:+48731439805">
<iconify-icon className="text-[#C4541A]" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
          731 439 805
        </a>
<a className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-[#C4541A] text-white text-xs font-semibold tracking-widest uppercase rounded hover:bg-[#9E3D0E] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,84,26,0.25)] transition-all duration-300 border-none cursor-pointer" href="#contact">
          Bezpłatna wycena
        </a>
<button aria-label="Menu" className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 relative focus:outline-none" id="hamburger">
<span className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"></span>
<span className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"></span>
<span className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"></span>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 bg-[#1C1C1A] z-[40] flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-400" id="mobileMenu">
<a className="mob-link font-['Bebas_Neue'] text-5xl tracking-tight text-white hover:text-[#C4541A] transition-colors" href="#about">O nas</a>
<a className="mob-link font-['Bebas_Neue'] text-5xl tracking-tight text-white hover:text-[#C4541A] transition-colors" href="#services">Usługi</a>
<a className="mob-link font-['Bebas_Neue'] text-5xl tracking-tight text-white hover:text-[#C4541A] transition-colors" href="#gallery">Realizacje</a>
<a className="mob-link font-['Bebas_Neue'] text-5xl tracking-tight text-white hover:text-[#C4541A] transition-colors" href="#testimonials">Opinie</a>
<a className="mob-link font-['Bebas_Neue'] text-5xl tracking-tight text-white hover:text-[#C4541A] transition-colors" href="#contact">Kontakt</a>
<a className="mt-6 text-xl font-semibold tracking-tight text-[#C4541A] flex items-center gap-2" href="tel:+48731439805">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 731 439 805
  </a>
</div>

<section className="relative min-h-screen flex flex-col justify-end pb-24 md:pb-32 overflow-hidden bg-[#1C1C1A]" id="hero">
<div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#1C1C1A] to-[#111110]">
<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'linear-gradient(rgba(196,84,26,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(196,84,26,0.06) 1px, transparent 1px)', backgroundSize: '80px 80px'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/50 to-transparent"></div>
<div className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[35vw] text-[#C4541A]/5 leading-none select-none">M</div>
</div>
<div className="max-w-[1280px] w-full mx-auto px-6 lg:px-10 relative z-10 pt-40">
<div className="inline-flex items-center gap-2.5 bg-[#C4541A]/10 border border-[#C4541A]/20 px-4 py-1.5 rounded-sm text-xs font-semibold tracking-widest uppercase text-[#D96B2D] mb-8 opacity-0 -translate-x-8 transition-all duration-700 delay-300 ease-out hero-reveal">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Ostrów Mazowiecka · Ostrołęka · Białystok
    </div>
<h1 className="font-['Bebas_Neue'] text-6xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[0.9] mb-8 opacity-0 translate-y-8 transition-all duration-700 delay-500 ease-out hero-reveal">
      Twój remont.<br/>
<span className="text-[#D96B2D]">Bez stresu.</span><br/>
      Od A do Z.
    </h1>
<p className="text-base md:text-lg font-light text-white/65 leading-relaxed max-w-[560px] mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-700 ease-out hero-reveal">
      Kompleksowe wykończenia wnętrz – łazienki, gładzie, tynki, remonty.<br/>
<span className="text-white/90 font-normal">3-osobowa ekipa. Terminowo. Bez niespodzianek w cenie.</span>
</p>
<div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 translate-y-8 transition-all duration-700 delay-1000 ease-out hero-reveal">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#C4541A] text-white text-sm font-semibold tracking-widest uppercase rounded hover:bg-[#9E3D0E] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,84,26,0.25)] transition-all duration-300" href="tel:+48731439805">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Zadzwoń teraz
      </a>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-transparent text-white border-2 border-white/40 text-sm font-semibold tracking-widest uppercase rounded hover:border-white hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300" href="#gallery">
        Zobacz realizacje
      </a>
</div>
<div className="text-xs text-white/40 mt-6 flex flex-wrap items-center gap-4 md:gap-6 opacity-0 transition-opacity duration-700 delay-1000 hero-reveal">
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#C4541A]" icon="solar:check-circle-linear"></iconify-icon> Bezpłatna wycena</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#C4541A]" icon="solar:check-circle-linear"></iconify-icon> Bez zobowiązań</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#C4541A]" icon="solar:check-circle-linear"></iconify-icon> Odpiszemy w 24h</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C4541A] to-[#D96B2D]"></div>
<div className="absolute bottom-10 right-8 md:right-12 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase font-medium z-10 opacity-0 transition-opacity duration-700 delay-1000 hero-reveal hidden sm:flex">
    Przewiń
    <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent animate-bounce-y mt-2"></div>
</div>
</section>

<div aria-hidden="true" className="bg-[#C4541A] py-3.5 overflow-hidden relative" id="ticker">
<div className="animate-ticker flex whitespace-nowrap">
<div className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white/90 px-8 flex items-center gap-8">
      Wykończenia Wnętrz <span className="w-1 h-1 rounded-full bg-white/50"></span> Łazienki pod klucz <span className="w-1 h-1 rounded-full bg-white/50"></span> Gładzie i tynki <span className="w-1 h-1 rounded-full bg-white/50"></span> Remonty od A do Z <span className="w-1 h-1 rounded-full bg-white/50"></span> Ostrów Mazowiecka <span className="w-1 h-1 rounded-full bg-white/50"></span> Ostrołęka <span className="w-1 h-1 rounded-full bg-white/50"></span> Białystok <span className="w-1 h-1 rounded-full bg-white/50"></span> Kompleksowe usługi <span className="w-1 h-1 rounded-full bg-white/50"></span> Rzetelna ekipa <span className="w-1 h-1 rounded-full bg-white/50"></span> Terminowo i bez kompromisów <span className="w-1 h-1 rounded-full bg-white/50"></span>
</div>
<div className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white/90 px-8 flex items-center gap-8">
      Wykończenia Wnętrz <span className="w-1 h-1 rounded-full bg-white/50"></span> Łazienki pod klucz <span className="w-1 h-1 rounded-full bg-white/50"></span> Gładzie i tynki <span className="w-1 h-1 rounded-full bg-white/50"></span> Remonty od A do Z <span className="w-1 h-1 rounded-full bg-white/50"></span> Ostrów Mazowiecka <span className="w-1 h-1 rounded-full bg-white/50"></span> Ostrołęka <span className="w-1 h-1 rounded-full bg-white/50"></span> Białystok <span className="w-1 h-1 rounded-full bg-white/50"></span> Kompleksowe usługi <span className="w-1 h-1 rounded-full bg-white/50"></span> Rzetelna ekipa <span className="w-1 h-1 rounded-full bg-white/50"></span> Terminowo i bez kompromisów <span className="w-1 h-1 rounded-full bg-white/50"></span>
</div>
</div>
</div>

<section className="bg-[#1C1C1A] py-12 border-b border-white/5" id="trust">
<div className="max-w-[1280px] mx-auto px-6 lg:px-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0 relative">
<div className="text-center p-4 relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-[20%] md:after:h-[60%] md:after:w-[1px] md:after:bg-white/10 reveal opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '0ms'}}>
<div className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#D96B2D] tracking-tight leading-none" data-suffix="+" data-target="1">0+</div>
<div className="text-xs font-medium text-white/40 tracking-widest uppercase mt-2.5">Rok na rynku</div>
</div>
<div className="text-center p-4 relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-[20%] md:after:h-[60%] md:after:w-[1px] md:after:bg-white/10 reveal opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '100ms'}}>
<div className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#D96B2D] tracking-tight leading-none" data-suffix="" data-target="3">0</div>
<div className="text-xs font-medium text-white/40 tracking-widest uppercase mt-2.5">Specjalistów w ekipie</div>
</div>
<div className="text-center p-4 relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-[20%] md:after:h-[60%] md:after:w-[1px] md:after:bg-white/10 reveal opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '200ms'}}>
<div className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#D96B2D] tracking-tight leading-none" data-suffix="%" data-target="98">0%</div>
<div className="text-xs font-medium text-white/40 tracking-widest uppercase mt-2.5">Zadowolonych klientów</div>
</div>
<div className="text-center p-4 relative reveal opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '300ms'}}>
<div className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#D96B2D] tracking-tight leading-none" data-suffix="%" data-target="100">0%</div>
<div className="text-xs font-medium text-white/40 tracking-widest uppercase mt-2.5">Z poleceń</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#FAFAF7] relative overflow-hidden" id="about">
<div className="max-w-[1280px] mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
<div className="relative reveal-left opacity-0 -translate-x-10 transition-all duration-700 ease-out">
<div className="relative rounded-md overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#EAE0CC] to-[#D4C4A8] flex items-center justify-center">
<div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(196,84,26,0.1) 20px, rgba(196,84,26,0.1) 21px)'}}></div>
<iconify-icon className="text-8xl text-white/40 relative z-10" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="hidden lg:block absolute -bottom-5 -right-5 w-[60%] h-[60%] border-2 border-[#C4541A] rounded-md -z-10"></div>
<div className="absolute -top-5 -left-5 bg-[#C4541A] text-white p-6 rounded-md shadow-[0_8px_32px_rgba(196,84,26,0.25)] text-center">
<div className="font-['Bebas_Neue'] text-4xl leading-none tracking-tight">A-Z</div>
<div className="text-xs font-semibold tracking-widest uppercase opacity-85 mt-1.5">Kompleksowo</div>
</div>
</div>
<div className="reveal-right opacity-0 translate-x-10 transition-all duration-700 ease-out">
<div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C4541A] mb-4 before:content-[''] before:block before:w-6 before:h-[2px] before:bg-[#C4541A]">O nas</div>
<h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1C1C1A] leading-[1.05] mb-8">
          Robimy remonty tak,<br/>jak chcielibyśmy,<br/>żeby robiono nasze.
        </h2>
<div className="space-y-5 text-base text-[#6B6B67] leading-relaxed">
<p>Mam na imię Michał. Razem z moją ekipą zajmujemy się kompleksowymi wykończeniami wnętrz w regionie Ostrowa Mazowieckiej, Ostrołęki i Białegostoku. <span className="text-[#2C2C2A] font-medium">Nie jesteśmy agencją – to nasza 3-osobowa ekipa pracuje u Ciebie od pierwszego do ostatniego dnia.</span></p>
<p>Działamy od ponad roku, ale nie liczymy zleceń – liczymy zadowolonych klientów. Większość naszej pracy pochodzi z poleceń, bo dla nas remont to nie „kolejny projekt", tylko <span className="text-[#2C2C2A] font-medium">Twój dom, Twoja łazienka, Twoja przestrzeń do życia.</span></p>
<p>Bierzemy się za każdą robotę – od gładzi i tynków, przez kompleksowe łazienki, aż po pełne wykończenie pod klucz. <span className="text-[#2C2C2A] font-medium">Cena ustalona na początku to cena ostateczna.</span> Bez przykrych niespodzianek.</p>
</div>
<div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-10 pt-8 border-t border-[#C4541A]/10">
<div>
<div className="font-['Bebas_Neue'] text-4xl text-[#C4541A] leading-none tracking-tight">3</div>
<div className="text-xs text-[#9A9A95] tracking-widest uppercase font-medium mt-1.5">Specjalistów</div>
</div>
<div>
<div className="font-['Bebas_Neue'] text-4xl text-[#C4541A] leading-none tracking-tight">A–Z</div>
<div className="text-xs text-[#9A9A95] tracking-widest uppercase font-medium mt-1.5">Zakres usług</div>
</div>
<div>
<div className="font-['Bebas_Neue'] text-4xl text-[#C4541A] leading-none tracking-tight">0</div>
<div className="text-xs text-[#9A9A95] tracking-widest uppercase font-medium mt-1.5">Nierozwiązanych problemów</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#1C1C1A] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#C4541A]/40 before:to-transparent" id="services">
<div className="max-w-[1280px] mx-auto px-6 lg:px-10">
<div className="text-center mb-16 md:mb-20 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D96B2D] mb-4 before:content-[''] before:block before:w-6 before:h-[2px] before:bg-[#D96B2D]">Nasze usługi</div>
<h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4">Co dla Ciebie zrobimy?</h2>
<p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto font-light">Od drobnych napraw po kompleksowe wykończenie – bierzemy się za wszystko, co robi z budynku dom.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 rounded-xl overflow-hidden relative">
<div className="bg-[#1C1C1A] p-8 md:p-10 group relative hover:bg-[#C4541A]/5 hover:-translate-y-1 transition-all duration-300 reveal opacity-0 translate-y-8 ease-out cursor-default after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C4541A] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500 z-10" style={{transitionDelay: '0ms'}}>
<div className="w-14 h-14 bg-[#C4541A]/10 rounded-md flex items-center justify-center mb-6 group-hover:bg-[#C4541A] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D96B2D] group-hover:text-white transition-colors duration-300" icon="solar:bath-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-tight text-white mb-3">Łazienki Pod Klucz</h3>
<p className="text-sm text-white/45 leading-relaxed font-light">Projektujesz w głowie, my realizujemy w rzeczywistości. Kompleksowa łazienka – glazura, hydraulika, oświetlenie, armatura. Odbiór gotowy do użycia.</p>
</div>
<div className="bg-[#1C1C1A] p-8 md:p-10 group relative hover:bg-[#C4541A]/5 hover:-translate-y-1 transition-all duration-300 reveal opacity-0 translate-y-8 ease-out cursor-default after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C4541A] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500 z-10" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 bg-[#C4541A]/10 rounded-md flex items-center justify-center mb-6 group-hover:bg-[#C4541A] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D96B2D] group-hover:text-white transition-colors duration-300" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-tight text-white mb-3">Gładzie I Tynki</h3>
<p className="text-sm text-white/45 leading-relaxed font-light">Idealna, gładka ściana to fundament każdego pięknego wnętrza. Gładzie maszynowe i ręczne, tynki cementowo-wapienne – wykonane z precyzją i dbałością o detal.</p>
</div>
<div className="bg-[#1C1C1A] p-8 md:p-10 group relative hover:bg-[#C4541A]/5 hover:-translate-y-1 transition-all duration-300 reveal opacity-0 translate-y-8 ease-out cursor-default after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C4541A] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500 z-10" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 bg-[#C4541A]/10 rounded-md flex items-center justify-center mb-6 group-hover:bg-[#C4541A] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D96B2D] group-hover:text-white transition-colors duration-300" icon="solar:key-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-tight text-white mb-3">Wykończenie Pod Klucz</h3>
<p className="text-sm text-white/45 leading-relaxed font-light">Przejmujesz klucze i wchodzisz do gotowego wnętrza – bez nerwów, bez koordynowania 5 ekip. Kompleksowe wykończenie od A do Z, jeden kontakt, jeden harmonogram.</p>
</div>
<div className="bg-[#1C1C1A] p-8 md:p-10 group relative hover:bg-[#C4541A]/5 hover:-translate-y-1 transition-all duration-300 reveal opacity-0 translate-y-8 ease-out cursor-default after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C4541A] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500 z-10" style={{transitionDelay: '300ms'}}>
<div className="w-14 h-14 bg-[#C4541A]/10 rounded-md flex items-center justify-center mb-6 group-hover:bg-[#C4541A] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D96B2D] group-hover:text-white transition-colors duration-300" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-tight text-white mb-3">Układanie Płytek</h3>
<p className="text-sm text-white/45 leading-relaxed font-light">Podłogi, ściany, tarasy – każdy format, każdy wzór. Docinamy, fugujemy, kleimy. Efekt który widzisz i którego możesz dotknąć.</p>
</div>
<div className="bg-[#1C1C1A] p-8 md:p-10 group relative hover:bg-[#C4541A]/5 hover:-translate-y-1 transition-all duration-300 reveal opacity-0 translate-y-8 ease-out cursor-default after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C4541A] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500 z-10" style={{transitionDelay: '400ms'}}>
<div className="w-14 h-14 bg-[#C4541A]/10 rounded-md flex items-center justify-center mb-6 group-hover:bg-[#C4541A] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D96B2D] group-hover:text-white transition-colors duration-300" icon="solar:paint-roller-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-tight text-white mb-3">Malowanie I Wykończenia</h3>
<p className="text-sm text-white/45 leading-relaxed font-light">Malujemy ściany, sufity, elementy drewniane. Przygotowujemy powierzchnie i nakładamy farby – równo, estetycznie, bez klap i smug. Na koniec sprzątamy po sobie.</p>
</div>
<div className="bg-[#1C1C1A] p-8 md:p-10 group relative hover:bg-[#C4541A]/5 hover:-translate-y-1 transition-all duration-300 reveal opacity-0 translate-y-8 ease-out cursor-default after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C4541A] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500 z-10" style={{transitionDelay: '500ms'}}>
<div className="w-14 h-14 bg-[#C4541A]/10 rounded-md flex items-center justify-center mb-6 group-hover:bg-[#C4541A] transition-colors duration-300">
<iconify-icon className="text-2xl text-[#D96B2D] group-hover:text-white transition-colors duration-300" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-tight text-white mb-3">Remonty I Przebudowy</h3>
<p className="text-sm text-white/45 leading-relaxed font-light">Przeprojektowujesz mieszkanie? Wyburzamy ścianki działowe, przebudowujemy przestrzenie, adaptujemy poddasza. Twój pomysł – nasza realizacja.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#F5F0E8] relative overflow-hidden" id="process">
<div className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[30vw] text-[#C4541A]/5 pointer-events-none leading-none select-none">4</div>
<div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
<div className="mb-16 md:mb-20">
<div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C4541A] mb-4 before:content-[''] before:block before:w-6 before:h-[2px] before:bg-[#C4541A]">Jak działamy</div>
<h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1C1C1A] leading-none mb-4">
<span className="inline-block relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[3px] after:bg-[#C4541A] after:transition-all after:duration-1000 title-underline">Jak przebiega</span><br/>nasza współpraca?
      </h2>
<p className="text-base md:text-lg text-[#6B6B67] max-w-lg mt-4 font-light">Wiemy, że remont bywa stresujący. Dlatego mamy jasny proces – wiesz co się dzieje na każdym etapie.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 relative before:content-[''] before:hidden lg:before:block before:absolute before:top-10 before:left-[10%] before:right-[10%] before:h-[1px] before:bg-gradient-to-r before:from-[#C4541A] before:to-[#C4541A]/20">
<div className="relative pr-0 lg:pr-6 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out process-step" style={{transitionDelay: '0ms'}}>
<div className="w-20 h-20 rounded-full bg-[#1C1C1A] text-[#D96B2D] font-['Bebas_Neue'] text-3xl tracking-tight flex items-center justify-center mb-6 relative z-10 border-2 border-transparent transition-colors duration-500 step-circle">01</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-tight text-[#1C1C1A] mb-2">Bezpłatna Wycena</h3>
<p className="text-sm text-[#6B6B67] leading-relaxed font-light">Zadzwoń lub napisz. Przyjedziemy, obejrzymy, wycenimy – bez zobowiązań i bez ukrytych kosztów. Cena ustalona na początku nie zmieni się w trakcie.</p>
</div>
<div className="relative pr-0 lg:pr-6 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out process-step" style={{transitionDelay: '150ms'}}>
<div className="w-20 h-20 rounded-full bg-[#1C1C1A] text-[#D96B2D] font-['Bebas_Neue'] text-3xl tracking-tight flex items-center justify-center mb-6 relative z-10 border-2 border-transparent transition-colors duration-500 step-circle">02</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-tight text-[#1C1C1A] mb-2">Ustalamy Szczegóły</h3>
<p className="text-sm text-[#6B6B67] leading-relaxed font-light">Omawiamy zakres prac, materiały i harmonogram. Jeden kontakt do mnie przez cały czas – żadnego chaosu, żadnego „ktoś powie komuś".</p>
</div>
<div className="relative pr-0 lg:pr-6 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out process-step" style={{transitionDelay: '300ms'}}>
<div className="w-20 h-20 rounded-full bg-[#1C1C1A] text-[#D96B2D] font-['Bebas_Neue'] text-3xl tracking-tight flex items-center justify-center mb-6 relative z-10 border-2 border-transparent transition-colors duration-500 step-circle">03</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-tight text-[#1C1C1A] mb-2">Pracujemy U Ciebie</h3>
<p className="text-sm text-[#6B6B67] leading-relaxed font-light">3-osobowa ekipa wchodzi i robi robotę. Terminowo, schludnie, z szacunkiem do Twojego domu. Po skończeniu dnia sprzątamy – wracasz do normalności.</p>
</div>
<div className="relative pr-0 lg:pr-6 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out process-step" style={{transitionDelay: '450ms'}}>
<div className="w-20 h-20 rounded-full bg-[#1C1C1A] text-[#D96B2D] font-['Bebas_Neue'] text-3xl tracking-tight flex items-center justify-center mb-6 relative z-10 border-2 border-transparent transition-colors duration-500 step-circle">04</div>
<h3 className="font-['Bebas_Neue'] text-2xl tracking-tight text-[#1C1C1A] mb-2">Odbiór I Spokój</h3>
<p className="text-sm text-[#6B6B67] leading-relaxed font-light">Oglądasz efekt. Jeśli coś nie gra – poprawiamy na miejscu. Płacisz po akceptacji. I rekompensujesz nam jeśli chcesz – poleconą osobą.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#111110] overflow-hidden" id="gallery">
<div className="max-w-[1280px] mx-auto px-6 lg:px-10">
<div className="text-center mb-14 md:mb-20 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D96B2D] mb-4 before:content-[''] before:block before:w-6 before:h-[2px] before:bg-[#D96B2D]">Realizacje</div>
<h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-3">Nasze realizacje</h2>
<p className="text-base text-white/35 font-light">Ostrów Mazowiecka, Ostrołęka i okolice – efekty które mówią same za siebie</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 auto-rows-auto">
<div className="relative overflow-hidden cursor-zoom-in group bg-[#1a1a18] md:row-span-2 reveal opacity-0 scale-95 transition-all duration-700 ease-out">
<div className="w-full h-full min-h-[240px] md:min-h-[480px] flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#2D3748] to-[#1A202C] transition-transform duration-700 group-hover:scale-105"></div>
<iconify-icon className="text-5xl text-white/10 relative z-10" icon="solar:bath-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111110]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6 z-20">
<div>
<div className="text-sm font-semibold text-white tracking-widest uppercase">Łazienka pod klucz</div>
<div className="text-xs text-[#D96B2D] font-medium mt-1">Ostrów Mazowiecka</div>
</div>
</div>
</div>
<div className="relative overflow-hidden cursor-zoom-in group bg-[#1a1a18] reveal opacity-0 scale-95 transition-all duration-700 ease-out" style={{transitionDelay: '50ms'}}>
<div className="w-full h-full min-h-[240px] flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#744210] to-[#5C3317] transition-transform duration-700 group-hover:scale-105"></div>
<iconify-icon className="text-5xl text-white/10 relative z-10" icon="solar:paint-roller-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111110]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6 z-20">
<div>
<div className="text-sm font-semibold text-white tracking-widest uppercase">Gładzie i malowanie</div>
<div className="text-xs text-[#D96B2D] font-medium mt-1">Ostrołęka</div>
</div>
</div>
</div>
<div className="relative overflow-hidden cursor-zoom-in group bg-[#1a1a18] reveal opacity-0 scale-95 transition-all duration-700 ease-out" style={{transitionDelay: '100ms'}}>
<div className="w-full h-full min-h-[240px] flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#1C4532] to-[#2D6A4F] transition-transform duration-700 group-hover:scale-105"></div>
<iconify-icon className="text-5xl text-white/10 relative z-10" icon="solar:home-angle-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111110]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6 z-20">
<div>
<div className="text-sm font-semibold text-white tracking-widest uppercase">Wykończenie pod klucz</div>
<div className="text-xs text-[#D96B2D] font-medium mt-1">Białystok</div>
</div>
</div>
</div>
<div className="relative overflow-hidden cursor-zoom-in group bg-[#1a1a18] reveal opacity-0 scale-95 transition-all duration-700 ease-out" style={{transitionDelay: '150ms'}}>
<div className="w-full h-full min-h-[240px] flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#2C2C4A] to-[#1a1a3a] transition-transform duration-700 group-hover:scale-105"></div>
<iconify-icon className="text-5xl text-white/10 relative z-10" icon="solar:widget-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111110]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6 z-20">
<div>
<div className="text-sm font-semibold text-white tracking-widest uppercase">Płytki – salon</div>
<div className="text-xs text-[#D96B2D] font-medium mt-1">Ostrów Mazowiecka</div>
</div>
</div>
</div>
<div className="relative overflow-hidden cursor-zoom-in group bg-[#1a1a18] md:row-span-2 reveal opacity-0 scale-95 transition-all duration-700 ease-out" style={{transitionDelay: '200ms'}}>
<div className="w-full h-full min-h-[240px] md:min-h-[480px] flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#44291A] to-[#2d1a0e] transition-transform duration-700 group-hover:scale-105"></div>
<iconify-icon className="text-5xl text-white/10 relative z-10" icon="solar:sofa-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111110]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6 z-20">
<div>
<div className="text-sm font-semibold text-white tracking-widest uppercase">Remont mieszkania</div>
<div className="text-xs text-[#D96B2D] font-medium mt-1">Ostrołęka</div>
</div>
</div>
</div>
<div className="relative overflow-hidden cursor-zoom-in group bg-[#1a1a18] reveal opacity-0 scale-95 transition-all duration-700 ease-out" style={{transitionDelay: '250ms'}}>
<div className="w-full h-full min-h-[240px] flex items-center justify-center relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#1a3a44] to-[#0e2a30] transition-transform duration-700 group-hover:scale-105"></div>
<iconify-icon className="text-5xl text-white/10 relative z-10" icon="solar:bath-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111110]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6 z-20">
<div>
<div className="text-sm font-semibold text-white tracking-widest uppercase">Łazienka – mini</div>
<div className="text-xs text-[#D96B2D] font-medium mt-1">Białystok</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#FAFAF7]" id="why">
<div className="max-w-[1280px] mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-left opacity-0 -translate-x-10 transition-all duration-700 ease-out">
<div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C4541A] mb-4 before:content-[''] before:block before:w-6 before:h-[2px] before:bg-[#C4541A]">Dlaczego my</div>
<h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1C1C1A] leading-[1.05] mb-6">Czego NIE musisz się bać,<br/>wybierając nas.</h2>
<p className="text-base text-[#6B6B67] leading-relaxed mb-10 font-light">Wiesz, jak to bywa z remontami. Dlatego jesteśmy inni – konkretnie i bez owijania w bawełnę.</p>
<div className="bg-[#1C1C1A] text-white p-8 md:p-10 rounded-xl relative overflow-hidden mt-8 shadow-xl reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="absolute -top-6 left-5 font-['Bebas_Neue'] text-9xl text-[#C4541A]/20 leading-none select-none">"</div>
<p className="text-base md:text-lg italic leading-relaxed text-white/80 relative z-10 font-light">Michał i ekipa to ludzie słowa. Łazienka skończona w terminie, cena bez zmian, po robocie posprzątali. Polecam bez wahania – i już polecam sąsiadce.</p>
<div className="mt-6 text-xs font-semibold text-[#D96B2D] tracking-widest uppercase relative z-10">— Klient z Ostrowa Mazowieckiej</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
<div className="p-8 border border-[#C4541A]/10 rounded-xl bg-white hover:border-[#C4541A] hover:shadow-[0_8px_32px_rgba(196,84,26,0.06)] hover:-translate-y-1 transition-all duration-300 group reveal opacity-0 translate-y-8 ease-out" style={{transitionDelay: '0ms'}}>
<div className="w-12 h-12 bg-[#C4541A]/10 rounded-md flex items-center justify-center mb-5 group-hover:bg-[#C4541A] transition-colors duration-300">
<iconify-icon className="text-xl text-[#C4541A] group-hover:text-white transition-colors duration-300" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-semibold text-base text-[#1C1C1A] mb-2">Terminowość</h3>
<p className="text-sm text-[#6B6B67] leading-relaxed font-light">Umawiamy się na datę i trzymamy jej. Twój harmonogram jest dla nas zobowiązaniem, nie orientacją.</p>
</div>
<div className="p-8 border border-[#C4541A]/10 rounded-xl bg-white hover:border-[#C4541A] hover:shadow-[0_8px_32px_rgba(196,84,26,0.06)] hover:-translate-y-1 transition-all duration-300 group reveal opacity-0 translate-y-8 ease-out" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-[#C4541A]/10 rounded-md flex items-center justify-center mb-5 group-hover:bg-[#C4541A] transition-colors duration-300">
<iconify-icon className="text-xl text-[#C4541A] group-hover:text-white transition-colors duration-300" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-semibold text-base text-[#1C1C1A] mb-2">Stała cena</h3>
<p className="text-sm text-[#6B6B67] leading-relaxed font-light">Wycena na początku to cena finalna. Żadnych dokładania w trakcie, żadnych niespodzianek na koniec.</p>
</div>
<div className="p-8 border border-[#C4541A]/10 rounded-xl bg-white hover:border-[#C4541A] hover:shadow-[0_8px_32px_rgba(196,84,26,0.06)] hover:-translate-y-1 transition-all duration-300 group reveal opacity-0 translate-y-8 ease-out" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-[#C4541A]/10 rounded-md flex items-center justify-center mb-5 group-hover:bg-[#C4541A] transition-colors duration-300">
<iconify-icon className="text-xl text-[#C4541A] group-hover:text-white transition-colors duration-300" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-semibold text-base text-[#1C1C1A] mb-2">Jeden kontakt</h3>
<p className="text-sm text-[#6B6B67] leading-relaxed font-light">Piszesz do mnie – Michała. Nie do koordynatora, nie do asystenta. Przez cały czas wiesz z kim rozmawiasz.</p>
</div>
<div className="p-8 border border-[#C4541A]/10 rounded-xl bg-white hover:border-[#C4541A] hover:shadow-[0_8px_32px_rgba(196,84,26,0.06)] hover:-translate-y-1 transition-all duration-300 group reveal opacity-0 translate-y-8 ease-out" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 bg-[#C4541A]/10 rounded-md flex items-center justify-center mb-5 group-hover:bg-[#C4541A] transition-colors duration-300">
<iconify-icon className="text-xl text-[#C4541A] group-hover:text-white transition-colors duration-300" icon="solar:broom-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-semibold text-base text-[#1C1C1A] mb-2">Sprzątamy po sobie</h3>
<p className="text-sm text-[#6B6B67] leading-relaxed font-light">Remont to stres, ale bałagan po robocie nie musi być jego częścią. Wychodzimy z posprzątanym placem budowy.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#F5F0E8] overflow-hidden" id="testimonials">
<div className="max-w-[1280px] mx-auto px-6 lg:px-10">
<div className="text-center mb-16 md:mb-20 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C4541A] mb-4 before:content-[''] before:block before:w-6 before:h-[2px] before:bg-[#C4541A]">Opinie klientów</div>
<h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1C1C1A] mb-3">Co mówią nasi klienci?</h2>
<p className="text-base text-[#6B6B67] font-light">Działamy głównie z poleceń – to najlepsza ocena naszej pracy</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border-t-[3px] border-[#C4541A] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 relative reveal opacity-0 translate-y-8 ease-out" style={{transitionDelay: '0ms'}}>
<div className="flex gap-1 text-[#F4B942] text-sm mb-5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="absolute top-6 right-8 font-['Bebas_Neue'] text-7xl text-[#C4541A]/10 leading-none select-none">"</div>
<p className="text-sm italic text-[#6B6B67] leading-relaxed mb-8 font-light">Łazienka zrobiona od zera – glazura, płytki, prysznic, wszystko. Termin dotrzymany co do dnia, cena zgodna z wyceną. Ekipa czysta, kulturalna, zostawiła po sobie porządek. Polecam i już poleciłem dwóm osobom.</p>
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-full bg-[#C4541A] text-white flex items-center justify-center font-['Bebas_Neue'] text-xl tracking-tight shrink-0">A</div>
<div>
<div className="font-semibold text-sm text-[#1C1C1A]">Anna K.</div>
<div className="text-xs text-[#9A9A95] mt-0.5">Ostrów Maz. · Łazienka</div>
</div>
</div>
</div>
<div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border-t-[3px] border-[#C4541A] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 relative reveal opacity-0 translate-y-8 ease-out" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1 text-[#F4B942] text-sm mb-5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="absolute top-6 right-8 font-['Bebas_Neue'] text-7xl text-[#C4541A]/10 leading-none select-none">"</div>
<p className="text-sm italic text-[#6B6B67] leading-relaxed mb-8 font-light">Gładzie w całym mieszkaniu – 3 pokoje, hol, kuchnia. Michał wycenił, przyszedł z ekipą i skończyli w tydzień. Ściany idealne, cena fair. Wreszcie znalazłem ekipę której mogę zaufać bez pilnowania.</p>
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-full bg-[#C4541A] text-white flex items-center justify-center font-['Bebas_Neue'] text-xl tracking-tight shrink-0">T</div>
<div>
<div className="font-semibold text-sm text-[#1C1C1A]">Tomasz W.</div>
<div className="text-xs text-[#9A9A95] mt-0.5">Ostrołęka · Gładzie</div>
</div>
</div>
</div>
<div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border-t-[3px] border-[#C4541A] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 relative reveal opacity-0 translate-y-8 ease-out" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 text-[#F4B942] text-sm mb-5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="absolute top-6 right-8 font-['Bebas_Neue'] text-7xl text-[#C4541A]/10 leading-none select-none">"</div>
<p className="text-sm italic text-[#6B6B67] leading-relaxed mb-8 font-light">Kompleksowy remont mieszkania po kupnie. Od wyburzenia ścianki, przez tynki, łazienkę, podłogi, po malowanie. Wszystko od jednej ekipy. Szczerze – nie spodziewałam się, że to może być tak bezstresowe.</p>
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-full bg-[#C4541A] text-white flex items-center justify-center font-['Bebas_Neue'] text-xl tracking-tight shrink-0">M</div>
<div>
<div className="font-semibold text-sm text-[#1C1C1A]">Monika P.</div>
<div className="text-xs text-[#9A9A95] mt-0.5">Białystok · Pod klucz</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#1C1C1A]" id="area">
<div className="max-w-[1280px] mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-left opacity-0 -translate-x-10 transition-all duration-700 ease-out">
<div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D96B2D] mb-4 before:content-[''] before:block before:w-6 before:h-[2px] before:bg-[#D96B2D]">Obszar działania</div>
<h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-none mb-8">Działamy w Twoim rejonie</h2>
<div className="flex flex-wrap gap-3 mb-6">
<div className="px-5 py-2.5 border-2 border-[#C4541A] bg-[#C4541A] rounded-full text-sm font-semibold text-white tracking-wide cursor-default transition-all duration-300">Ostrów Mazowiecka</div>
<div className="px-5 py-2.5 border-2 border-[#C4541A]/40 rounded-full text-sm font-medium text-white/75 hover:bg-[#C4541A] hover:border-[#C4541A] hover:text-white cursor-default transition-all duration-300">Ostrołęka</div>
<div className="px-5 py-2.5 border-2 border-[#C4541A]/40 rounded-full text-sm font-medium text-white/75 hover:bg-[#C4541A] hover:border-[#C4541A] hover:text-white cursor-default transition-all duration-300">Białystok</div>
<div className="px-5 py-2.5 border-2 border-[#C4541A]/40 rounded-full text-sm font-medium text-white/75 hover:bg-[#C4541A] hover:border-[#C4541A] hover:text-white cursor-default transition-all duration-300">Łomża</div>
<div className="px-5 py-2.5 border-2 border-[#C4541A]/40 rounded-full text-sm font-medium text-white/75 hover:bg-[#C4541A] hover:border-[#C4541A] hover:text-white cursor-default transition-all duration-300">Wyszków</div>
<div className="px-5 py-2.5 border-2 border-[#C4541A]/40 rounded-full text-sm font-medium text-white/75 hover:bg-[#C4541A] hover:border-[#C4541A] hover:text-white cursor-default transition-all duration-300">Małkinia Górna</div>
<div className="px-5 py-2.5 border-2 border-transparent text-sm font-medium text-white/50 cursor-default">i okoliczne miejscowości</div>
</div>
<p className="text-sm text-white/45 leading-relaxed mb-8 font-light max-w-md">Nie widzisz swojej miejscowości? Zadzwoń – ustalimy czy i kiedy możemy dojechać. Większość wyjazdów poza główny obszar ustalamy indywidualnie.</p>
<a className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C4541A] text-white text-sm font-semibold tracking-widest uppercase rounded hover:bg-[#9E3D0E] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,84,26,0.25)] transition-all duration-300" href="tel:+48731439805">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Zapytaj o dojazd
        </a>
</div>
<div className="reveal-right opacity-0 translate-x-10 transition-all duration-700 ease-out">
<div className="rounded-xl overflow-hidden h-[360px] bg-white/5 border border-white/10 flex items-center justify-center">
<iframe allowfullscreen="" className="border-0 opacity-80 filter invert-[90%] hue-rotate-[180deg] grayscale-[20%]" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39140.71185847853!2d21.856735!3d52.817524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e7b2dac33caff%3A0x3a18c0c7d41d93ac!2sOstr%C3%B3w%20Mazowiecka!5e0!3m2!1spl!2spl!4v1699999999999!5m2!1spl!2spl" title="Mapa Ostrów Mazowiecka – obszar działania" width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#FAFAF7]" id="faq">
<div className="max-w-[1280px] mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
<div className="reveal-left opacity-0 -translate-x-10 transition-all duration-700 ease-out">
<div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C4541A] mb-4 before:content-[''] before:block before:w-6 before:h-[2px] before:bg-[#C4541A]">FAQ</div>
<h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1C1C1A] leading-none mb-6">Masz pytania?</h2>
<p className="text-base text-[#6B6B67] font-light leading-relaxed mb-8">Najczęstsze pytania naszych klientów – zebrane w jednym miejscu. Jeśli nie znajdziesz odpowiedzi, zadzwoń.</p>
<a className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1C1C1A] text-white text-sm font-semibold tracking-widest uppercase rounded hover:bg-[#111110] hover:-translate-y-0.5 transition-all duration-300" href="tel:+48731439805">
          Zadaj pytanie
        </a>
</div>
<div className="flex flex-col gap-1 reveal-right opacity-0 translate-x-10 transition-all duration-700 ease-out">
<div className="faq-item border-b border-[#C4541A]/15 group">
<button aria-expanded="false" className="faq-question w-full text-left py-6 flex items-center justify-between gap-4 text-base md:text-lg font-medium text-[#1C1C1A] hover:text-[#C4541A] transition-colors focus:outline-none">
            Jak wygląda wycena i czy jest bezpłatna?
            <span className="faq-icon shrink-0 w-8 h-8 rounded-full border-2 border-[#C4541A]/20 flex items-center justify-center text-[#C4541A] transition-all duration-300">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
<div className="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-out">
<div className="pb-6 text-sm text-[#6B6B67] leading-relaxed font-light">
              Tak, wycena jest całkowicie bezpłatna i bez zobowiązań. Przyjedziemy, ocenimy zakres prac i przygotujemy wycenę. Cena ustalona przed rozpoczęciem prac nie zmieni się w trakcie realizacji – chyba że sam zdecydujesz się rozszerzyć zakres.
            </div>
</div>
</div>
<div className="faq-item border-b border-[#C4541A]/15 group">
<button aria-expanded="false" className="faq-question w-full text-left py-6 flex items-center justify-between gap-4 text-base md:text-lg font-medium text-[#1C1C1A] hover:text-[#C4541A] transition-colors focus:outline-none">
            Ile trwa typowy remont łazienki?
            <span className="faq-icon shrink-0 w-8 h-8 rounded-full border-2 border-[#C4541A]/20 flex items-center justify-center text-[#C4541A] transition-all duration-300">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
<div className="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-out">
<div className="pb-6 text-sm text-[#6B6B67] leading-relaxed font-light">
              Standardowa łazienka (do 5-6 m²) to najczęściej 1,5-2 tygodnie roboczej pracy. Większe łazienki lub bardziej skomplikowane projekty – odpowiednio dłużej. Zawsze ustalamy konkretne daty przed podpisaniem umowy i trzymamy się harmonogramu.
            </div>
</div>
</div>
<div className="faq-item border-b border-[#C4541A]/15 group">
<button aria-expanded="false" className="faq-question w-full text-left py-6 flex items-center justify-between gap-4 text-base md:text-lg font-medium text-[#1C1C1A] hover:text-[#C4541A] transition-colors focus:outline-none">
            Czy dostarczacie materiały czy muszę sam kupować?
            <span className="faq-icon shrink-0 w-8 h-8 rounded-full border-2 border-[#C4541A]/20 flex items-center justify-center text-[#C4541A] transition-all duration-300">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
<div className="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-out">
<div className="pb-6 text-sm text-[#6B6B67] leading-relaxed font-light">
              To zależy od Ciebie. Możemy pracować na materiałach klienta (gdy wiesz czego chcesz) lub pomóc w doborze i zakupie materiałów. W każdym przypadku transparentnie informujemy o kosztach – żadnych narzutów "za pomocą w zakupach".
            </div>
</div>
</div>
<div className="faq-item border-b border-[#C4541A]/15 group">
<button aria-expanded="false" className="faq-question w-full text-left py-6 flex items-center justify-between gap-4 text-base md:text-lg font-medium text-[#1C1C1A] hover:text-[#C4541A] transition-colors focus:outline-none">
            Czy działacie tylko w Ostrowie Mazowieckiej?
            <span className="faq-icon shrink-0 w-8 h-8 rounded-full border-2 border-[#C4541A]/20 flex items-center justify-center text-[#C4541A] transition-all duration-300">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
<div className="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-out">
<div className="pb-6 text-sm text-[#6B6B67] leading-relaxed font-light">
              Nie – obsługujemy Ostrów Mazowiecką, Ostrołękę, Białystok i okoliczne miejscowości. Jeśli nie jesteś pewien czy dojedziemy – po prostu zadzwoń. Dojazd na wycenę w naszym obszarze działania jest bezpłatny.
            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#C4541A] relative overflow-hidden text-center" id="cta-banner">
<div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
<div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-7xl tracking-tight text-white mb-4">Gotowy na remont bez stresu?</h2>
<p className="text-base md:text-lg text-white/80 mb-10 font-light">Bezpłatna wycena · Bez zobowiązań · Odpiszemy w 24h</p>
<a className="inline-flex justify-center items-center gap-2 px-10 py-4 bg-white text-[#9E3D0E] text-sm md:text-base font-semibold tracking-widest uppercase rounded hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 relative overflow-hidden group" href="tel:+48731439805">
<div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-[#C4541A]/10 to-transparent group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Zadzwoń: 731 439 805
    </a>
<p className="text-sm text-white/60 mt-6">
      lub napisz: <a className="text-white font-semibold hover:underline decoration-white/40 underline-offset-4" href="mailto:michalciesielski098@gmail.com">michalciesielski098@gmail.com</a>
</p>
</div>
</section>

<section className="py-20 md:py-32 bg-[#1C1C1A]" id="contact">
<div className="max-w-[1280px] mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
<div className="reveal-left opacity-0 -translate-x-10 transition-all duration-700 ease-out">
<div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D96B2D] mb-4 before:content-[''] before:block before:w-6 before:h-[2px] before:bg-[#D96B2D]">Kontakt</div>
<h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-none mb-4">Porozmawiajmy<br/>o Twoim remoncie.</h2>
<p className="text-base text-white/45 font-light leading-relaxed mb-10">Napisz lub zadzwoń – bezpłatna wycena, zero zobowiązań, szybka odpowiedź.</p>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-5">
<div className="w-12 h-12 bg-[#C4541A]/10 rounded-md flex items-center justify-center shrink-0 text-[#D96B2D]">
<iconify-icon className="text-xl" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-1">Telefon</div>
<a className="text-base font-medium text-white hover:text-[#D96B2D] transition-colors" href="tel:+48731439805">731 439 805</a>
</div>
</div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 bg-[#C4541A]/10 rounded-md flex items-center justify-center shrink-0 text-[#D96B2D]">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-1">E-mail</div>
<a className="text-base font-medium text-white hover:text-[#D96B2D] transition-colors" href="mailto:michalciesielski098@gmail.com">michalciesielski098@gmail.com</a>
</div>
</div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 bg-[#C4541A]/10 rounded-md flex items-center justify-center shrink-0 text-[#D96B2D]">
<iconify-icon className="text-xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-1">Obszar działania</div>
<div className="text-base font-medium text-white">Ostrów Maz. · Ostrołęka · Białystok</div>
</div>
</div>
<div className="flex items-center gap-5">
<div className="w-12 h-12 bg-[#C4541A]/10 rounded-md flex items-center justify-center shrink-0 text-[#D96B2D]">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-1">Dostępność</div>
<div className="text-base font-medium text-white">Pon–Sob 7:00–18:00</div>
</div>
</div>
</div>
</div>
<div className="reveal-right opacity-0 translate-x-10 transition-all duration-700 ease-out">
<form action="mailto:michalciesielski098@gmail.com" className="space-y-5" id="contactForm" method="post">
<div>
<label className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-2" htmlFor="name">Twoje imię</label>
<input className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-sm text-white font-light placeholder:text-white/20 focus:outline-none focus:border-[#C4541A] focus:bg-[#C4541A]/5 transition-all duration-300" id="name" name="name" placeholder="np. Jan Kowalski" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-2" htmlFor="phone">Numer telefonu</label>
<input className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-sm text-white font-light placeholder:text-white/20 focus:outline-none focus:border-[#C4541A] focus:bg-[#C4541A]/5 transition-all duration-300" id="phone" name="phone" placeholder="np. 600 123 456" required="" type="tel"/>
</div>
<div>
<label className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-2" htmlFor="message">Opis prac / zapytanie</label>
<textarea className="w-full min-h-[140px] resize-y bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-sm text-white font-light placeholder:text-white/20 focus:outline-none focus:border-[#C4541A] focus:bg-[#C4541A]/5 transition-all duration-300" id="message" name="message" placeholder="Opisz krótko czego potrzebujesz – jaki zakres prac, miejscowość, orientacyjny termin..."></textarea>
</div>
<button className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-[#C4541A] text-white text-sm font-semibold tracking-widest uppercase rounded hover:bg-[#9E3D0E] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,84,26,0.25)] transition-all duration-300 outline-none" id="submitBtn" type="submit">
            Wyślij zapytanie <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-xs text-center text-white/25 mt-3 font-light">Odpowiadamy w ciągu 24h · Twoje dane są bezpieczne</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#111110] pt-20 pb-8 border-t border-white/5" id="footer">
<div className="max-w-[1280px] mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-16">
<div>
<a className="flex flex-col leading-none mb-5" href="#hero">
<span className="font-['Bebas_Neue'] text-3xl tracking-tighter text-white">CIESIELSKI</span>
<span className="text-[10px] text-[#D96B2D] tracking-widest uppercase font-medium mt-0.5">Wykończenia Wnętrz</span>
</a>
<p className="text-sm text-white/35 font-light leading-relaxed mb-6 max-w-sm">Kompleksowe remonty i wykończenia wnętrz w Ostrowie Mazowieckiej, Ostrołęce i Białymstoku. 3-osobowa ekipa. Terminowo. Bez niespodzianek.</p>
<a className="text-lg font-semibold text-[#D96B2D] flex items-center gap-2" href="tel:+48731439805">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 731 439 805
        </a>
</div>
<div>
<div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">Nawigacja</div>
<ul className="flex flex-col gap-3 text-sm text-white/45 font-light">
<li><a className="hover:text-[#D96B2D] transition-colors" href="#about">O nas</a></li>
<li><a className="hover:text-[#D96B2D] transition-colors" href="#services">Usługi</a></li>
<li><a className="hover:text-[#D96B2D] transition-colors" href="#process">Jak działamy</a></li>
<li><a className="hover:text-[#D96B2D] transition-colors" href="#gallery">Realizacje</a></li>
<li><a className="hover:text-[#D96B2D] transition-colors" href="#testimonials">Opinie</a></li>
<li><a className="hover:text-[#D96B2D] transition-colors" href="#contact">Kontakt</a></li>
</ul>
</div>
<div>
<div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">Usługi</div>
<ul className="flex flex-col gap-3 text-sm text-white/45 font-light">
<li><a className="hover:text-[#D96B2D] transition-colors" href="#services">Łazienki pod klucz</a></li>
<li><a className="hover:text-[#D96B2D] transition-colors" href="#services">Gładzie i tynki</a></li>
<li><a className="hover:text-[#D96B2D] transition-colors" href="#services">Wykończenie pod klucz</a></li>
<li><a className="hover:text-[#D96B2D] transition-colors" href="#services">Układanie płytek</a></li>
<li><a className="hover:text-[#D96B2D] transition-colors" href="#services">Malowanie i wykończenia</a></li>
<li><a className="hover:text-[#D96B2D] transition-colors" href="#services">Remonty i przebudowy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-[10px] text-white/30 font-medium tracking-widest uppercase text-center md:text-left">
<div>© 2024 CIESIELSKI WYKOŃCZENIA WNĘTRZ. Wszelkie prawa zastrzeżone.</div>
<div className="flex items-center gap-6">
<a className="hover:text-[#D96B2D] transition-colors" href="#">Polityka prywatności</a>
<a className="hover:text-[#D96B2D] transition-colors" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
