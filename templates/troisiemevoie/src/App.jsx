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



    // Lucide icons
    lucide.createIcons();

    // Mobile nav toggle
    const navBtn = document.getElementById('navBtn');
    const navMenu = document.getElementById('navMenu');
    if (navBtn && navMenu) {
      navBtn.addEventListener('click', () => {
 const expanded = navBtn.getAttribute('aria-expanded') === 'true';
        navBtn.setAttribute('aria-expanded', String(!expanded));
        navMenu.classList.toggle('hidden');
      });

      // Close menu on link click (mobile)
      navMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navMenu.classList.add('hidden');
          navBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // FAQ accordion
    document.querySelectorAll('.faq-item').forEach((item) => {
      const btn = item.querySelector('.faq-btn');
      const panel = item.querySelector('.faq-panel');
      const ico = item.querySelector('.faq-ico');

      if (!btn || !panel) return;

      const setState = (open) => {
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        panel.classList.toggle('hidden', !open);
        if (ico) {
          ico.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
          ico.style.transition = 'transform 0.35s ease';
        }
      };

      // Initialize based on aria-expanded
      setState(btn.getAttribute('aria-expanded') === 'true');

      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        setState(!isOpen);
      });
    });

    // Reveal animations (IntersectionObserver)
    const revealEls = [
      ...document.querySelectorAll('.reveal, .revealcard, .revealitem')
    ];

    const applyInitial = (el) => {
      const isCard = el.classList.contains('revealcard');
      const isItem = el.classList.contains('revealitem');
      el.style.opacity = '0';
      el.style.transform = isCard ? 'translateY(14px)' : isItem ? 'translateY(8px)' : 'translateY(10px)';
      el.style.transition = 'opacity 700ms ease, transform 700ms ease';
      el.style.willChange = 'opacity, transform';
    };

    revealEls.forEach(applyInitial);

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0px)';
        io.unobserve(el);
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => io.observe(el));

    // Lightweight parallax for elements with [data-parallax]
    const parallaxSections = document.querySelectorAll('[data-parallax]');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const parallaxTick = () => {
      if (prefersReduced) return;
      const y = window.scrollY || 0;
      parallaxSections.forEach((sec) => {
        // subtle effect only
        const rect = sec.getBoundingClientRect();
        const offset = (rect.top + y) * 0.0008; // very subtle
        sec.style.backgroundPosition = `center ${offset * 100}%`;
      });
    };
    window.addEventListener('scroll', () => requestAnimationFrame(parallaxTick), { passive: true });
    parallaxTick();

    // Back to top visibility
    const toTop = document.getElementById('toTop');
    const onScroll = () => {
      if (!toTop) return;
      if (window.scrollY > 600) {
        toTop.classList.remove('hidden');
        toTop.classList.add('inline-flex');
      } else {
        toTop.classList.add('hidden');
        toTop.classList.remove('inline-flex');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Year
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Smooth scroll (respect reduced motion)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
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
      

<header className="fixed z-50 top-0 right-0 left-0">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<nav className="mt-3 rounded-2xl border border-[#E8D7B5]/70 bg-white/55 backdrop-blur-xl shadow-[0_10px_35px_rgba(26,26,26,0.08)]">
<div className="flex items-center justify-between px-4 py-3 sm:px-6">
<a className="group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl" href="#top">
<span className="inline-flex items-center justify-center overflow-hidden text-[#1A1A1A] bg-white w-9 h-9 border-[#E8D7B5] border rounded-xl relative shadow-[0_10px_30px_rgba(201,169,97,0.14)]">
<span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-[#FAF8F3]"></span>
<span className="pointer-events-none absolute -right-3 -top-3 h-10 w-10 rounded-full bg-[#E8D7B5]/45 blur-xl"></span>
<span className="pointer-events-none absolute -left-3 -bottom-3 h-10 w-10 rounded-full bg-[#C9A961]/20 blur-xl"></span>
<span className="pointer-events-none absolute inset-0 rounded-xl border border-[#E8D7B5]/60"></span>
<span className="relative flex items-center justify-center">
<span className="relative text-lg leading-none font-medium tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>3</span>
<span className="pointer-events-none absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-[#C9A961] shadow-[0_6px_16px_rgba(201,169,97,0.35)]"></span>
<span className="pointer-events-none absolute -left-1 -bottom-1 h-1 w-1 rounded-full bg-[#E8D7B5]"></span>
</span>
</span>
<span className="text-sm sm:text-base font-medium tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>TROISIÈME VOIE</span>
</a>
<button aria-controls="navMenu" aria-expanded="false" className="sm:hidden inline-flex items-center justify-center rounded-xl border border-[#E8D7B5] bg-white/70 px-3 py-2 text-[#1A1A1A] shadow-[0_10px_30px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" id="navBtn">
<span className="sr-only">Ouvrir le menu</span>
<i className="h-5 w-5" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="hidden sm:flex items-center gap-6">
<a className="navlink text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:text-[#B8954F] hover:underline hover:decoration-[#E8D7B5] hover:decoration-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg px-1 py-1" href="#comprendre" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Concept</a>
<a className="navlink text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:text-[#B8954F] hover:underline hover:decoration-[#E8D7B5] hover:decoration-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg px-1 py-1" href="#programme" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Programme</a>
<a className="navlink text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:text-[#B8954F] hover:underline hover:decoration-[#E8D7B5] hover:decoration-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg px-1 py-1" href="#intervenants" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Intervenants</a>
<a className="navlink text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:text-[#B8954F] hover:underline hover:decoration-[#E8D7B5] hover:decoration-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg px-1 py-1" href="#faq" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>FAQ</a>
<a className="relative inline-flex items-center justify-center rounded-full bg-[#C9A961] px-5 py-2.5 text-sm font-medium text-white shadow-[0_14px_40px_rgba(201,169,97,0.22)] transition-all duration-300 ease-in-out hover:shadow-[0_20px_60px_rgba(201,169,97,0.28)] hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" href="#reserver">
<span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent"></span>
<span className="relative">Réserver</span>
</a>
</div>
</div>
<div className="sm:hidden hidden border-t border-[#E8D7B5]/70 px-4 py-3" id="navMenu">
<div className="flex flex-col gap-2">
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" href="#comprendre" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Concept</a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" href="#programme" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Programme</a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" href="#intervenants" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Intervenants</a>
<a className="block rounded-xl px-3 py-2 text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" href="#faq" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>FAQ</a>
<a className="relative mt-2 inline-flex items-center justify-center rounded-full bg-[#C9A961] px-5 py-3 text-sm font-medium text-white shadow-[0_14px_40px_rgba(201,169,97,0.22)] transition-all duration-300 ease-in-out hover:shadow-[0_20px_60px_rgba(201,169,97,0.28)] hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" href="#reserver">
<span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent"></span>
<span className="relative">Réserver</span>
</a>
</div>
</div>
</nav>
</div>
</header>
<main className="sm:pt-28 pt-24" id="top">

<section className="relative overflow-hidden bg-[#F5F1E8]" data-parallax="" style={{backgroundPosition: 'center 8.96%'}}>
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-28 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#E8D7B5]/30 blur-3xl"></div>
<div className="absolute -bottom-32 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-white/55 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.55),transparent_55%)]"></div>
</div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="sm:py-24 lg:py-28 pt-20 pb-20" style={{paddingTop: '7.5rem', paddingBottom: '7.5rem'}}>
<div className="mx-auto max-w-3xl text-center">
<div className="reveal inline-flex items-center gap-2 rounded-full border border-[#E8D7B5]/70 bg-white/60 px-4 py-2 text-xs sm:text-sm text-[#6B6B6B] shadow-[0_10px_30px_rgba(26,26,26,0.06)] backdrop-blur-md will-change-transform will-change-opacity transition-all duration-700 ease-in-out" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FAF8F3] border border-[#E8D7B5]">
<i className="h-[18px] w-[18px]" data-lucide="sparkles" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<span className="" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Séminaire en ligne • Mai 2026</span>
</div>
<div className="h-8 sm:h-9"></div>
<h1 className="reveal sm:text-5xl lg:text-7xl text-4xl font-semibold text-[#C9A961] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>TROISIÈME VOIE</h1>
<div className="h-6 sm:h-7"></div>
<h2 className="reveal sm:text-3xl lg:text-4xl text-2xl font-medium text-[#1A1A1A] tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>De l'impasse relationnelle à l'évidence</h2>
<div className="h-6 sm:h-7"></div>
<p className="reveal sm:text-xl lg:text-2xl text-lg text-[#1A1A1A] max-w-[50rem] mr-auto ml-auto" style={{lineHeight: '1.9'}}>A l'issue du weekend, repartez avec des décisions claires et des actions concrètes qui ne sacrifient ni vous-même, ni l'autre.</p>
<div className="h-10"></div>
<div className="reveal flex flex-col items-center justify-center gap-4 sm:flex-row" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<a className="cta relative inline-flex w-full max-w-sm items-center justify-center rounded-full bg-[#C9A961] px-8 py-4 text-lg sm:text-xl font-medium text-white shadow-[0_16px_50px_rgba(201,169,97,0.26)] transition-all duration-300 ease-in-out hover:scale-[1.04] hover:shadow-[0_22px_70px_rgba(201,169,97,0.30)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" href="#reserver">
<span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/22 to-transparent"></span>
<span className="relative">Réserver Votre Place</span>
</a>
<a className="inline-flex w-full max-w-sm items-center justify-center rounded-full border border-[#E8D7B5] bg-white/60 px-8 py-4 text-lg sm:text-xl font-medium text-[#1A1A1A] shadow-[0_10px_30px_rgba(26,26,26,0.06)] transition-all duration-300 ease-in-out hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent backdrop-blur-md" href="#comprendre" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
                Découvrir le concept
              </a>
</div>
<div className="h-8"></div>
<div className="reveal flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#6B6B6B]" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<span className="inline-flex items-center gap-2">
</span>
<span className="inline-flex items-center gap-2">
<i className="h-[18px] w-[18px]" data-lucide="shield-check" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
<span className="">Paiement sécurisé</span>
</span>
<span className="inline-flex items-center gap-2">
</span>
</div>
</div>
</div>
<div aria-hidden="true" className="border-t border-[#E8D7B5]/90"></div>
</div>
</section>

<section className="relative bg-white">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none" data-parallax="" style={{backgroundPosition: 'center 64.4%'}}>
<div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#FAF8F3] to-transparent opacity-80"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="mx-auto max-w-4xl text-center">
<div className="space-y-7" style={{lineHeight: '1.9'}}>
<p className="reveal text-lg sm:text-xl lg:text-2xl text-[#1A1A1A] italic" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>"Vous en avez assez de vous battre dans vos relations ?"</p>
<p className="reveal text-lg sm:text-xl lg:text-2xl text-[#1A1A1A] italic" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>"Vous rêvez de faire équipe, de créer ensemble une réalité qui vous nourrit tous les deux ?"</p>
<p className="reveal text-lg sm:text-xl lg:text-2xl text-[#1A1A1A] italic" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>"Vous cherchez une voie où l'autre devient votre allié plutôt que votre adversaire ?"</p>
</div>
<div className="h-14 sm:h-16"></div>
<figure className="reveal mx-auto max-w-5xl rounded-2xl border border-[#E8D7B5] bg-[#FAF8F3] p-8 sm:p-10 shadow-[0_14px_45px_rgba(26,26,26,0.08)] relative overflow-hidden" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_55%)]"></div>
<blockquote className="relative text-xl sm:text-2xl lg:text-3xl italic text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
                "La Troisième Voie transforme l'opposition en alliance créatrice. Elle révèle une réalité nouvelle que vous ne pourriez jamais créer seul(e)."
              </blockquote>
</figure>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#F5F1E8]" id="comprendre">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-white/45 blur-3xl" data-parallax="" style={{backgroundPosition: 'center 100.335%'}}></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="sm:py-20 lg:py-24 pt-16 pb-16" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="mx-auto max-w-4xl text-center">
<h2 className="reveal sm:text-4xl lg:text-5xl text-3xl font-semibold text-[#C9A961] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>COMPRENDRE LE PRINCIPE</h2>
<div className="h-10"></div>
<p className="reveal sm:text-2xl lg:text-3xl text-xl font-medium text-[#1A1A1A] tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Face à la rencontre, trois chemins s'offrent à nous :</p>
<div className="h-12 sm:h-14"></div>
</div>
<div className="grid gap-6 lg:grid-cols-3">
<article className="revealcard group rounded-2xl bg-white p-8 sm:p-10 shadow-[0_14px_45px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 border border-[#E8D7B5]/80" style={{transition: 'all 0.4s ease'}}>
<div className="flex items-start gap-4">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8D7B5] bg-[#FAF8F3]">
<i className="h-6 w-6" data-lucide="x-circle" style={{strokeWidth: '1.5', color: '#D4756A'}}></i>
</span>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>"Rejeter l'autre"</h3>
<p className="mt-2 text-lg sm:text-xl text-[#6B6B6B]" style={{lineHeight: '1.9'}}>"(la guerre, l'opposition, chacun pour soi)"</p>
</div>
</div>
</article>
<article className="revealcard group rounded-2xl bg-white p-8 sm:p-10 shadow-[0_14px_45px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 border border-[#E8D7B5]/80" style={{transition: 'all 0.4s ease'}}>
<div className="flex items-start gap-4">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8D7B5] bg-[#FAF8F3]">
<i className="h-6 w-6" data-lucide="x-circle" style={{strokeWidth: '1.5', color: '#D4756A'}}></i>
</span>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>"Se rejeter soi-même"</h3>
<p className="mt-2 text-lg sm:text-xl text-[#6B6B6B]" style={{lineHeight: '1.9'}}>"(la soumission, l'effacement, perdre qui on est)"</p>
</div>
</div>
</article>
<article className="revealcard group rounded-2xl bg-white p-8 sm:p-10 shadow-[0_18px_55px_rgba(26,26,26,0.10)] border border-[#C9A961]/70 transition-all duration-300 ease-in-out hover:-translate-y-1.5" style={{transition: 'all 0.4s ease'}}>
<div className="flex items-start gap-4">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8D7B5] bg-[#FAF8F3]">
<i className="h-6 w-6" data-lucide="check-circle" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>"Choisir la Troisième Voie"</h3>
<p className="mt-2 text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>"Devenir alliés et co-créer ensemble une réalité nouvelle et supérieure."</p>
</div>
</div>
</article>
</div>
<div className="h-16 sm:h-20"></div>
<div className="text-center">
<div className="reveal sm:text-6xl lg:text-7xl text-5xl font-semibold text-[#C9A961] tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>1 + 1 = 3</div>
<p className="reveal sm:text-xl lg:text-2xl text-lg italic text-[#6B6B6B] max-w-2xl mt-6 mr-auto ml-auto" style={{lineHeight: '1.9'}}>"Quand deux personnes s'allient vraiment, elles créent quelque chose de supérieur à ce qu'elles auraient créé individuellement."</p>
</div>
</div>
</div>
</section>

<section className="relative bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<h2 className="reveal sm:text-4xl lg:text-5xl text-3xl font-semibold text-[#C9A961] tracking-tight text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>LA TROISIÈME VOIE EN ACTION</h2>
<div className="h-14 sm:h-16"></div>
<div className="grid gap-10 lg:grid-cols-2">
<article className="revealcard rounded-2xl border border-[#E8D7B5]/80 bg-white p-8 sm:p-10 shadow-[0_14px_45px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1.5" style={{transition: 'all 0.4s ease'}}>
<div className="flex items-center gap-4">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F3] border border-[#E8D7B5] shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
<i className="h-7 w-7" data-lucide="handshake" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#C9A961]" style={{fontFamily: '\'Playfair Display\', serif'}}>Dans votre Couple</h3>
</div>
</div>
<h4 className="sm:text-2xl text-xl font-semibold text-[#1A1A1A] tracking-tight mt-5" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Passez de l'Opposition à l'Alliance</h4>
<p className="sm:text-xl text-lg text-[#1A1A1A] mt-4" style={{lineHeight: '1.9'}}>Dans le couple, on se retrouve souvent en guerre :<br/> Qui a raison ? • Qui va gagner ? • Rester ou Partir ?</p>
<div className="sm:p-7 bg-[#E8D7B5]/30 border-[#E8D7B5]/70 border rounded-xl mt-7 mb-7 p-6">
<p className="sm:text-xl text-lg font-semibold text-[#1A1A1A] text-center" style={{lineHeight: '1.9'}}>C'est épuisant. Et ça ne mène nulle part.</p>
</div>
<p className="sm:text-xl text-lg italic text-[#1A1A1A]" style={{lineHeight: '1.9'}}>"Nous allons pratiquer ensemble la posture qui transforme vos oppositions en force créatrice commune."</p>
<div className="h-7"></div>
<p className="sm:text-xl text-lg font-semibold text-[#1A1A1A]" style={{lineHeight: '1.9'}}>La Troisième Voie vous permet de :</p>
<ul className="mt-4 space-y-3 text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Cesser de vous battre et devenir de véritables alliés</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Faire équipe pour créer ensemble une réalité qui vous nourrit tous les deux</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Transformer vos conflits en opportunités de co-création</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Vous sentir pleinement vivants ET profondément connectés</li>
</ul>
</article>
<article className="revealcard rounded-2xl border border-[#E8D7B5]/80 bg-white p-8 sm:p-10 shadow-[0_14px_45px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1.5" style={{transition: 'all 0.4s ease'}}>
<div className="flex items-center gap-4">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F3] border border-[#E8D7B5] shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
<i className="h-7 w-7" data-lucide="stars" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#C9A961]" style={{fontFamily: '\'Playfair Display\', serif'}}>Dans toutes vos Relations</h3>
</div>
</div>
<h4 className="sm:text-2xl text-xl font-semibold text-[#1A1A1A] tracking-tight mt-5" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Devenez co-créateur de vos relations</h4>
<p className="sm:text-xl text-lg text-[#1A1A1A] mt-4" style={{lineHeight: '1.9'}}>Avec vos enfants, vos parents, vos amis, vos collègues...<br/> Combien de fois vous sentez-vous en opposition ?</p>
<ul className="mt-4 space-y-3 text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Moi contre eux</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Mes besoins ou les leurs</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• M'affirmer ou préserver la paix</li>
</ul>
<div className="sm:p-7 bg-[#E8D7B5]/30 border-[#E8D7B5]/70 border rounded-xl mt-7 mb-7 p-6">
<p className="sm:text-xl text-lg font-semibold text-[#1A1A1A] text-center" style={{lineHeight: '1.9'}}>Et si vous pouviez transformer ces guerres silencieuses en alliances créatrices ?</p>
</div>
<p className="sm:text-xl text-lg font-semibold text-[#1A1A1A]" style={{lineHeight: '1.9'}}>La Troisième Voie vous apprend à :</p>
<ul className="mt-4 space-y-3 text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Sortir des rapports de force pour créer ensemble</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Faire équipe plutôt que de vous opposer</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Bâtir des relations où chacun se sent pleinement respecté</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Co-créer une réalité nouvelle, plus riche, plus vivante</li>
</ul>
</article>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#F5F1E8]">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 right-0 h-80 w-[44rem] rounded-full bg-white/40 blur-3xl" data-parallax="" style={{backgroundPosition: 'center 350.095%'}}></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<h2 className="reveal sm:text-4xl lg:text-5xl text-3xl font-semibold text-[#C9A961] tracking-tight text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>❓ MAIS SI L'AUTRE NE VEUT PAS JOUER LE JEU ?</h2>
<p className="reveal sm:text-2xl lg:text-3xl text-xl italic text-[#1A1A1A] text-center mt-6" style={{lineHeight: '1.9'}}>Et si l'autre refuse la Troisième Voie ? Si l'autre ne veut rien entendre ? Si l'autre est hostile ?</p>
<p className="reveal sm:text-xl lg:text-2xl text-lg text-[#1A1A1A] text-center max-w-5xl mt-8 mr-auto ml-auto" style={{lineHeight: '1.9'}}>C'est LA question que tout le monde se pose. Et c'est exactement ce que nous allons aborder au séminaire.</p>
<div className="my-10 rounded-2xl border border-[#C9A961]/70 bg-white p-8 sm:p-12 shadow-[0_18px_55px_rgba(26,26,26,0.10)] relative overflow-hidden">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_55%)]"></div>
<p className="reveal sm:text-xl lg:text-2xl text-lg font-semibold text-[#1A1A1A] text-center relative" style={{lineHeight: '1.9'}}>Voici ce que vous devez comprendre :</p>
<p className="reveal sm:text-2xl lg:text-3xl text-xl font-semibold text-[#C9A961] tracking-tight text-center mt-7 mb-7 relative" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>La Troisième Voie ne dépend PAS de la volonté de l'autre.</p>
<p className="reveal sm:text-xl text-lg text-[#1A1A1A] relative" style={{lineHeight: '1.9'}}>Elle commence par VOUS. Par votre posture. Par votre capacité à créer un espace nouveau.</p>
<div className="h-10"></div>
<p className="reveal sm:text-xl lg:text-2xl text-lg font-semibold text-[#1A1A1A] relative" style={{lineHeight: '1.9'}}>Ce que vous allez découvrir au séminaire :</p>
<div className="h-7"></div>
<div className="space-y-5 relative">
<div className="revealcard rounded-xl bg-[#FAF8F3] p-6 sm:p-7 border border-[#E8D7B5]/80 shadow-[0_10px_30px_rgba(26,26,26,0.06)]" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8D7B5] bg-white">
<i className="h-[22px] w-[22px]" data-lucide="check-circle" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<div>
<h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A]" style={{lineHeight: '1.4'}}>Comment incarner la Troisième Voie même face à l'hostilité</h3>
<p className="mt-2 text-lg sm:text-xl text-[#6B6B6B]" style={{lineHeight: '1.9'}}>Vous apprendrez la posture intérieure qui transforme la dynamique relationnelle, même quand l'autre résiste</p>
</div>
</div>
</div>
<div className="revealcard rounded-xl bg-[#FAF8F3] p-6 sm:p-7 border border-[#E8D7B5]/80 shadow-[0_10px_30px_rgba(26,26,26,0.06)]" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8D7B5] bg-white">
<i className="h-[22px] w-[22px]" data-lucide="check-circle" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<div className="">
<h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A]" style={{lineHeight: '1.4'}}>Comment sortir des jeux de pouvoir sans vous soumettre</h3>
<p className="mt-2 text-lg sm:text-xl text-[#6B6B6B]" style={{lineHeight: '1.9'}}>Des outils concrets pour ne plus alimenter la guerre, sans pour autant vous effacer</p>
</div>
</div>
</div>
<div className="revealcard rounded-xl bg-[#FAF8F3] p-6 sm:p-7 border border-[#E8D7B5]/80 shadow-[0_10px_30px_rgba(26,26,26,0.06)]" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8D7B5] bg-white">
<i className="h-[22px] w-[22px]" data-lucide="check-circle" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<div className="">
<h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A]" style={{lineHeight: '1.4'}}>Comment créer un espace d'alliance même face au refus</h3>
<p className="mt-2 text-lg sm:text-xl text-[#6B6B6B]" style={{lineHeight: '1.9'}}>La Troisième Voie n'est pas une négociation à deux, c'est d'abord une posture que VOUS incarnez</p>
</div>
</div>
</div>
<div className="revealcard rounded-xl bg-[#FAF8F3] p-6 sm:p-7 border border-[#E8D7B5]/80 shadow-[0_10px_30px_rgba(26,26,26,0.06)]" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8D7B5] bg-white">
<i className="h-[22px] w-[22px]" data-lucide="check-circle" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<div className="">
<h3 className="text-lg sm:text-xl font-semibold text-[#1A1A1A]" style={{lineHeight: '1.4'}}>Comment votre changement influence le système relationnel</h3>
<p className="mt-2 text-lg sm:text-xl text-[#6B6B6B]" style={{lineHeight: '1.9'}}>Quand vous changez vraiment de posture, l'autre n'a plus d'autre choix que de s'ajuster (ou de révéler sa véritable nature)</p>
</div>
</div>
</div>
</div>
<div className="h-10"></div>
<div className="reveal rounded-xl bg-[#E8D7B5]/45 p-7 sm:p-10 border border-[#E8D7B5]/80 relative" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<p className="sm:text-xl lg:text-2xl text-lg font-semibold text-[#1A1A1A]" style={{lineHeight: '1.9'}}>La vérité :</p>
<p className="sm:text-xl text-lg text-[#1A1A1A] mt-2" style={{lineHeight: '1.9'}}>Vous ne pouvez pas forcer l'autre à changer. Mais vous pouvez changer la danse. Et quand vous changez de pas, l'autre doit nécessairement s'adapter ou quitter la piste.</p>
</div>
<div className="h-10"></div>
<p className="reveal sm:text-xl lg:text-2xl text-lg font-semibold text-[#1A1A1A] relative" style={{lineHeight: '1.9'}}>Au séminaire, nous travaillerons spécifiquement sur :</p>
<ul className="mt-6 space-y-3 text-lg sm:text-xl text-[#1A1A1A] relative" style={{lineHeight: '1.9'}}>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Les situations où l'autre est dans le déni ou le refus</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Comment maintenir votre alignement face à l'opposition</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Les signaux qui vous indiquent si la relation peut évoluer ou non</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Comment prendre des décisions claires même dans l'incertitude</li>
</ul>
<div className="h-12"></div>
<figure className="reveal mx-auto max-w-5xl rounded-2xl border border-[#C9A961]/70 bg-white p-8 sm:p-10 shadow-[0_14px_45px_rgba(26,26,26,0.08)] relative overflow-hidden" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_55%)]"></div>
<blockquote className="relative text-xl sm:text-2xl lg:text-3xl italic text-[#C9A961]" style={{fontFamily: '\'Playfair Display\', serif', lineHeight: '1.9'}}>
                "La Troisième Voie vous donne le pouvoir de transformer votre réalité relationnelle, que l'autre soit prêt ou non. C'est ce qui la rend si puissante."
              </blockquote>
</figure>
</div>
</div>
</div>
</section>

<section className="relative bg-white" id="programme">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="sm:py-20 lg:py-24 pt-16 pb-16" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<h2 className="reveal sm:text-4xl lg:text-5xl text-3xl font-semibold text-[#C9A961] tracking-tight text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>LE PROGRAMME DU SÉMINAIRE</h2>
<div className="h-14 sm:h-16"></div>
<div className="relative mx-auto max-w-3xl">
<div aria-hidden="true" className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-[#E8D7B5]/90"></div>
<div className="space-y-10">
<article className="revealcard relative pl-14 sm:pl-20" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div aria-hidden="true" className="absolute left-4 sm:left-6 top-8 h-4 w-4 rounded-full bg-[#C9A961] ring-4 ring-[#E8D7B5]/60"></div>
<div className="rounded-2xl border border-[#E8D7B5]/80 bg-white p-8 sm:p-10 shadow-[0_14px_45px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1.5">
<span className="inline-flex items-center justify-center rounded-full bg-[#C9A961] px-6 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(201,169,97,0.18)]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Vendredi Soir</span>
<h3 className="mt-5 text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Accueil convivial</h3>
<p className="sm:text-xl text-lg text-[#1A1A1A] mt-3" style={{lineHeight: '1.9'}}>On se retrouve pour un premier contact, premières connexions dans la douceur.</p>
</div>
</article>
<article className="revealcard relative pl-14 sm:pl-20" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div aria-hidden="true" className="absolute left-4 sm:left-6 top-8 h-4 w-4 rounded-full bg-[#C9A961] ring-4 ring-[#E8D7B5]/60"></div>
<div className="rounded-2xl border border-[#E8D7B5]/80 bg-white p-8 sm:p-10 shadow-[0_14px_45px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1.5">
<span className="inline-flex items-center justify-center rounded-full bg-[#C9A961] px-6 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(201,169,97,0.18)]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Samedi • 9h00 - 18h00</span>
<h3 className="mt-5 text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Fondations &amp; Intégration</h3>
<p className="sm:text-xl text-lg text-[#1A1A1A] mt-3" style={{lineHeight: '1.9'}}>Accueil à 9h pour un début à 9h30</p>
<div className="h-5"></div>
<p className="sm:text-xl text-lg text-[#1A1A1A]" style={{lineHeight: '1.9'}}>Cette journée portera sur :</p>
<ul className="mt-4 space-y-3 text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• L'acquisition des fondamentaux théoriques nécessaires à la mise en place de la Troisième Voie</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Des exercices d'introspection pour identifier vos schémas relationnels</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Des intégrations en binôme et petits groupes pour expérimenter la posture</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Des moments de partage et d'échanges profonds</li>
</ul>
</div>
</article>
<article className="revealcard relative pl-14 sm:pl-20" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div aria-hidden="true" className="absolute left-4 sm:left-6 top-8 h-4 w-4 rounded-full bg-[#C9A961] ring-4 ring-[#E8D7B5]/60"></div>
<div className="rounded-2xl border border-[#E8D7B5]/80 bg-white p-8 sm:p-10 shadow-[0_14px_45px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1.5">
<span className="inline-flex items-center justify-center rounded-full bg-[#C9A961] px-6 py-2 text-sm font-medium text-white shadow-[0_12px_30px_rgba(201,169,97,0.18)]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Dimanche • 9h00 - 17h00</span>
<h3 className="mt-5 text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Mise en Pratique &amp; Clarté</h3>
<p className="sm:text-xl text-lg text-[#1A1A1A] mt-3" style={{lineHeight: '1.9'}}>Mise en pratique dans vos relations de couple et vos relations en général.</p>
<div className="h-5"></div>
<p className="sm:text-xl text-lg font-semibold text-[#1A1A1A]" style={{lineHeight: '1.9'}}>Vous repartirez avec :</p>
<ul className="mt-4 space-y-3 text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• De la clarté sur vos dynamiques relationnelles actuelles</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Des décisions alignées avec votre vérité profonde</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Des actions concrètes à mener dans votre vie</li>
<li className="revealitem" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>• Des outils pratiques pour continuer à cultiver la Troisième Voie au quotidien</li>
</ul>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#F5F1E8]" id="intervenants">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -bottom-28 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-white/40 blur-3xl" data-parallax="" style={{backgroundPosition: 'center 1020.42%'}}></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="sm:py-20 lg:py-24 pt-16 pb-16" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="h-14 sm:h-16"></div>
<h2 className="reveal sm:text-4xl lg:text-5xl text-3xl font-semibold text-[#C9A961] tracking-tight text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>REJOIGNEZ SARAH SALOMÉE ET JEAN-LUC DE WACHTER</h2>
<div className="sm:h-12 h-10"></div>

<figure className="reveal mx-auto max-w-5xl" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div className="rounded-3xl border border-[#E8D7B5]/80 bg-white/55 backdrop-blur-md shadow-[0_18px_55px_rgba(26,26,26,0.10)] overflow-hidden">
<div className="grid lg:grid-cols-5">
<div className="lg:col-span-3 relative">
<img alt="Portrait de Sarah Salomée et Jean-Luc De Wachter" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cc6a26e-0326-49a9-864a-f8343b89c342_1600w.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0"></div>
<div className="absolute left-5 right-5 bottom-5 sm:left-7 sm:right-7 sm:bottom-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-xs sm:text-sm text-white backdrop-blur-md">
<i className="h-4 w-4" data-lucide="camera" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Vos intervenants</span>
</div>
</div>
</div>
<figcaption className="lg:col-span-2 p-7 sm:p-9">
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FAF8F3] border border-[#E8D7B5] shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
<i className="h-5 w-5" data-lucide="heart-handshake" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<div className="">
<p className="text-lg sm:text-xl font-semibold tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
                        Un duo d'enseignement, au service de votre clarté.
                      </p>
<p className="mt-3 text-lg sm:text-xl text-[#6B6B6B]" style={{lineHeight: '1.9'}}>
                        Une présence à la fois profonde, directe et humaine pour vous aider à transformer vos dynamiques relationnelles.
                      </p>
</div>
</div>
<div className="mt-6 rounded-2xl border border-[#E8D7B5]/80 bg-[#FAF8F3] p-5 sm:p-6">
<div className="flex items-start gap-3">
<i className="mt-0.5 h-5 w-5 shrink-0" data-lucide="users-round" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
<p className="text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
                        Vous alternerez enseignements, exercices guidés, intégrations en binôme et partages en groupe.
                      </p>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#6B6B6B]">
<span className="inline-flex items-center gap-2 rounded-full border border-[#E8D7B5]/80 bg-white/60 px-3 py-2 backdrop-blur-md">
<i className="h-4 w-4" data-lucide="sparkles" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
<span>Présence</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full border border-[#E8D7B5]/80 bg-white/60 px-3 py-2 backdrop-blur-md">
<i className="h-4 w-4" data-lucide="target" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
<span>Clarté</span>
</span>
<span className="inline-flex items-center gap-2 rounded-full border border-[#E8D7B5]/80 bg-white/60 px-3 py-2 backdrop-blur-md">
<i className="h-4 w-4" data-lucide="hand" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
<span>Pratique</span>
</span>
</div>
</figcaption>
</div>
</div>
</figure>
<div className="h-14 sm:h-16"></div>
<div className="grid gap-10 lg:grid-cols-2">
<article className="revealcard rounded-2xl bg-white p-10 sm:p-12 shadow-[0_14px_45px_rgba(26,26,26,0.08)] border border-[#E8D7B5]/80 transition-all duration-300 ease-in-out hover:-translate-y-1.5" style={{transition: 'all 0.4s ease'}}>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#C9A961]" style={{fontFamily: '\'Playfair Display\', serif'}}>Sarah Salomée</h3>
<div aria-hidden="true" className="mx-auto mt-4 h-px w-16 bg-[#E8D7B5]"></div>
<div className="mt-7 text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
<p className="">
                  "Mentor relationnelle et professeure de philosophie, Sarah accompagne depuis 2019 des personnes qui veulent sortir de leurs schémas répétitifs pour vivre des relations d'alliance authentiques.
                  <br/><br/>
                  Philosophe de formation (maîtrise en philosophie), coach certifiée (Haute École de Coaching de Paris, Mentor Phoenix), elle a développé une méthode tridimensionnelle : physiologique, psychologique et métaphysique.
                  <br/><br/>
                  Ce qui la rend unique ? Elle a vécu ce qu'elle enseigne. Des relations intenses, des bas-fonds relationnels qui l'ont forcée à tout déconstruire et reconstruire. Cette lucidité gagnée dans la traversée fait toute la différence."
                </p>
</div>
<div className="mt-7 rounded-xl bg-[#E8D7B5]/30 p-6 sm:p-7 border border-[#E8D7B5]/70">
<p className="text-lg sm:text-xl font-semibold text-[#1A1A1A]" style={{lineHeight: '1.9'}}>Ce qu'elle apporte :</p>
<p className="mt-2 text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
                  Une capacité à nommer précisément vos schémas, des outils concrets pour les transformer, et une présence qui allie profondeur et légèreté.
                </p>
</div>
</article>
<article className="revealcard rounded-2xl bg-white p-10 sm:p-12 shadow-[0_14px_45px_rgba(26,26,26,0.08)] border border-[#E8D7B5]/80 transition-all duration-300 ease-in-out hover:-translate-y-1.5" style={{transition: 'all 0.4s ease'}}>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#C9A961]" style={{fontFamily: '\'Playfair Display\', serif'}}>Jean-Luc De Wachter</h3>
<div aria-hidden="true" className="mx-auto mt-4 h-px w-16 bg-[#E8D7B5]"></div>
<div className="mt-7 text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
<p className="">
                  "Philosophe, enseignant spirituel et auteur (Business Bénédiction, Je te dis la vérité), Jean-Luc possède un don rare : une intuition qui touche à la clairvoyance.
                  <br/><br/>
                  Il voit instantanément ce qui se joue dans vos dynamiques relationnelles et énergétiques — vos zones d'ombre, vos résistances, vos potentiels. Un "sniper psycho-énergétique" qui frappe juste, avec compassion.
                  <br/><br/>
                  Ancien entrepreneur passé par ses propres crises existentielles et relationnelles, il a découvert la puissance de l'alignement intérieur et de la vérité comme force créatrice."
                </p>
</div>
<div className="mt-7 rounded-xl bg-[#E8D7B5]/30 p-6 sm:p-7 border border-[#E8D7B5]/70">
<p className="text-lg sm:text-xl font-semibold text-[#1A1A1A]" style={{lineHeight: '1.9'}}>Ce qu'il apporte :</p>
<p className="mt-2 text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
                  Une clarté désarmante, une capacité à révéler votre propre évidence, et un enseignement qui transforme vraiment.
                </p>
</div>
</article>
</div>
<div className="sm:h-16 h-14"></div>
<h3 className="reveal text-center text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Ce que vous allez trouver :</h3>
<div className="h-7"></div>
<div className="mx-auto max-w-3xl space-y-4">
<div className="reveal flex items-center justify-center gap-3 text-lg sm:text-xl font-medium text-[#1A1A1A]" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<span className="inline-flex items-center justify-center rounded-full bg-[#FAF8F3] border border-[#E8D7B5] h-9 w-9 shadow-[0_10px_30px_rgba(26,26,26,0.06)]">
<i className="h-5 w-5" data-lucide="check-circle" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<span className="">Des enseignements clairs et profonds</span>
</div>
<div className="reveal flex items-center justify-center gap-3 text-lg sm:text-xl font-medium text-[#1A1A1A]" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<span className="inline-flex items-center justify-center rounded-full bg-[#FAF8F3] border border-[#E8D7B5] h-9 w-9 shadow-[0_10px_30px_rgba(26,26,26,0.06)]">
<i className="h-5 w-5" data-lucide="check-circle" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<span className="">Des exercices pratiques pour vos relations</span>
</div>
<div className="reveal flex items-center justify-center gap-3 text-lg sm:text-xl font-medium text-[#1A1A1A]" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<span className="inline-flex items-center justify-center rounded-full bg-[#FAF8F3] border border-[#E8D7B5] h-9 w-9 shadow-[0_10px_30px_rgba(26,26,26,0.06)]">
<i className="h-5 w-5" data-lucide="check-circle" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<span className="">Du mentorat inspiré de notre propre cheminement de couple</span>
</div>
<div className="reveal flex items-center justify-center gap-3 text-lg sm:text-xl font-medium text-[#1A1A1A]" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<span className="inline-flex items-center justify-center rounded-full bg-[#FAF8F3] border border-[#E8D7B5] h-9 w-9 shadow-[0_10px_30px_rgba(26,26,26,0.06)]">
<i className="h-5 w-5" data-lucide="check-circle" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<span className="">De la profondeur et des pistes concrètes</span>
</div>
</div>
<div className="h-12"></div>
<figure className="reveal mx-auto max-w-4xl rounded-2xl border border-[#C9A961]/70 bg-white p-8 sm:p-10 shadow-[0_14px_45px_rgba(26,26,26,0.08)] relative overflow-hidden" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_55%)]"></div>
<blockquote className="relative text-xl sm:text-2xl lg:text-3xl italic text-[#C9A961]" style={{fontFamily: '\'Playfair Display\', serif', lineHeight: '1.9'}}>
              "La qualité de votre relation avec vous-même et avec les autres détermine la qualité de votre vie."
            </blockquote>
</figure>
</div>
</div>
</section>

<section className="relative bg-white" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="sm:py-20 lg:py-24 pt-16 pb-16" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<h2 className="reveal sm:text-4xl lg:text-5xl text-3xl font-semibold text-[#C9A961] tracking-tight text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>FAQ - VOS QUESTIONS</h2>
<div className="h-14 sm:h-16"></div>
<div className="mx-auto max-w-4xl rounded-2xl border border-[#E8D7B5]/80 bg-white shadow-[0_14px_45px_rgba(26,26,26,0.08)] overflow-hidden">
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="px-6 sm:px-8 py-6">
<div className="reveal text-xl sm:text-2xl font-semibold tracking-tight text-[#C9A961]" style={{fontFamily: 'Montserrat, Inter, system-ui', transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>Matériel</div>
</div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="faq-item group px-6 sm:px-8 py-6 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3]">
<button aria-expanded="false" className="faq-btn w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl p-1">
<div className="flex items-start justify-between gap-4">
<div className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">"Qu'est-ce que je dois apporter ?"</div>
<i className="faq-ico mt-1 shrink-0" data-lucide="chevron-down" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</div>
</button>
<div className="faq-panel mt-4 hidden text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
                "Simplement vous-même, un carnet et un stylo si vous aimez prendre des notes. Nous fournissons tout le matériel nécessaire aux exercices."
              </div>
</div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="faq-item group px-6 sm:px-8 py-6 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3]">
<button aria-expanded="false" className="faq-btn w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl p-1">
<div className="flex items-start justify-between gap-4">
<div className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">"Dois-je apporter un ordinateur portable ?"</div>
<i className="faq-ico mt-1 shrink-0" data-lucide="chevron-down" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</div>
</button>
<div className="faq-panel mt-4 hidden text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
                "Non, ce séminaire est conçu pour être vécu pleinement dans l'instant présent, sans écran."
              </div>
</div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="faq-item group px-6 sm:px-8 py-6 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3]">
<button aria-expanded="false" className="faq-btn w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl p-1">
<div className="flex items-start justify-between gap-4">
<div className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">"Y a-t-il du matériel fourni sur place ?"</div>
<i className="faq-ico mt-1 shrink-0" data-lucide="chevron-down" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</div>
</button>
<div className="faq-panel mt-4 hidden text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
                "Oui, nous fournissons tout le matériel pédagogique nécessaire ainsi que les supports pour les exercices."
              </div>
</div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="px-6 sm:px-8 py-6">
<div className="reveal text-xl sm:text-2xl font-semibold tracking-tight text-[#C9A961]" style={{fontFamily: 'Montserrat, Inter, system-ui', transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>Participation</div>
</div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="faq-item group px-6 sm:px-8 py-6 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3]">
<button aria-expanded="false" className="faq-btn w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl p-1">
<div className="flex items-start justify-between gap-4">
<div className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">"Puis-je venir seul(e) même si je suis en couple ?"</div>
<i className="faq-ico mt-1 shrink-0" data-lucide="chevron-down" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</div>
</button>
<div className="faq-panel mt-4 hidden text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
                "Absolument ! Le séminaire est ouvert aux personnes seules comme aux couples. Chacun y trouve sa place et son chemin."
              </div>
</div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="faq-item group px-6 sm:px-8 py-6 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3]">
<button aria-expanded="false" className="faq-btn w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl p-1">
<div className="flex items-start justify-between gap-4">
<div className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">"Dois-je venir avec mon/ma partenaire ?"</div>
<i className="faq-ico mt-1 shrink-0" data-lucide="chevron-down" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</div>
</button>
<div className="faq-panel mt-4 hidden text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
                "Non, ce n'est pas obligatoire. Beaucoup de participants viennent seuls et travaillent sur leurs relations en général (famille, amis, collègues) ainsi que sur leur relation à eux-mêmes."
              </div>
</div>
<div className="border-t border-[#E8D7B5]/90"></div>
<div className="faq-item group px-6 sm:px-8 py-6 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3]">
<button aria-expanded="false" className="faq-btn w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-xl p-1">
<div className="flex items-start justify-between gap-4">
<div className="text-lg sm:text-xl font-semibold text-[#1A1A1A]">"Le séminaire est-il réservé aux couples en difficulté ?"</div>
<i className="faq-ico mt-1 shrink-0" data-lucide="chevron-down" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</div>
</button>
<div className="faq-panel mt-4 hidden text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>
                "Non, la Troisième Voie s'adresse à toute personne qui souhaite approfondir sa qualité relationnelle, que ce soit pour résoudre des difficultés ou pour enrichir des relations déjà épanouies."
              </div>
</div>
</div>
<div className="h-14 sm:h-16"></div>
<div className="reveal mx-auto max-w-xl rounded-2xl border border-[#C9A961]/70 bg-[#E8D7B5]/30 p-8 sm:p-10 shadow-[0_14px_45px_rgba(26,26,26,0.08)] text-center relative overflow-hidden" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_55%)]"></div>
<h3 className="relative text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Vous avez d'autres questions ?</h3>
<p className="relative mt-3 text-lg sm:text-xl text-[#1A1A1A]" style={{lineHeight: '1.9'}}>N'hésitez pas à nous contacter directement. Nous serons ravis de répondre à toutes vos interrogations.</p>
<a className="inline-flex items-center justify-center sm:text-xl transition-all duration-300 ease-in-out hover:bg-white hover:text-[#B8954F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent text-lg font-medium text-[#C9A961] bg-white/60 border-[#E8D7B5] border rounded-full mt-6 pt-3 pr-6 pb-3 pl-6 relative shadow-[0_10px_30px_rgba(26,26,26,0.06)] backdrop-blur-md" href="/mailto:vasseur.sarah@live.fr">
<span className="inline-flex items-center gap-2" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>
<i className="h-5 w-5" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
                Nous Contacter
              </span>
</a>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#F5F1E8]">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-28 left-0 h-96 w-[42rem] rounded-full bg-white/40 blur-3xl" data-parallax="" style={{backgroundPosition: 'center 1142.42%'}}></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<h2 className="reveal sm:text-4xl lg:text-5xl text-3xl font-semibold text-[#C9A961] tracking-tight text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>INFORMATIONS CLÉS</h2>
<div className="h-14 sm:h-16"></div>
<div className="grid gap-6 sm:grid-cols-2">
<article className="revealcard rounded-2xl bg-white p-8 sm:p-10 text-center shadow-[0_14px_45px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 border border-[#E8D7B5]/80" style={{transition: 'all 0.4s ease'}}>
<div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F3] border border-[#E8D7B5] shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
<i className="h-7 w-7" data-lucide="calendar" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</div>
<h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-[#C9A961]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Dates</h3>
<p className="sm:text-xl text-lg font-semibold text-[#1A1A1A] mt-2" style={{lineHeight: '1.9'}}>Le week-end du 30 &amp; 31 mai 2026</p>
<p className="sm:text-base text-sm text-[#6B6B6B] mt-1" style={{lineHeight: '1.9'}}>(Accueil convivial le vendredi 29 mai au soir)</p>
</article>
<article className="revealcard rounded-2xl bg-white p-8 sm:p-10 text-center shadow-[0_14px_45px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 border border-[#E8D7B5]/80" style={{transition: 'all 0.4s ease'}}>
<div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F3] border border-[#E8D7B5] shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
<i className="h-7 w-7" data-lucide="map-pin" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</div>
<h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-[#C9A961]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Lieu</h3>
<p className="sm:text-xl text-lg font-semibold text-[#1A1A1A] mt-2" style={{lineHeight: '1.9'}}>En ligne</p>
<p className="sm:text-base text-sm text-[#6B6B6B] mt-1" style={{lineHeight: '1.9'}}>Lien d'accès communiquée par email</p>
</article>
<article className="revealcard rounded-2xl bg-white p-8 sm:p-10 text-center shadow-[0_14px_45px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 border border-[#E8D7B5]/80" style={{transition: 'all 0.4s ease'}}>
<div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F3] border border-[#E8D7B5] shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
<i className="h-7 w-7" data-lucide="users" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</div>
<h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-[#C9A961]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Taille du Groupe</h3>
<p className="sm:text-xl text-lg font-semibold text-[#1A1A1A] mt-2" style={{lineHeight: '1.9'}}>A taille humaine</p>
<p className="mt-1 text-sm sm:text-base text-[#6B6B6B]" style={{lineHeight: '1.9'}}>pour garantir la qualité des échanges et l'intimité du groupe</p>
</article>
<article className="revealcard rounded-2xl bg-white p-8 sm:p-10 text-center shadow-[0_14px_45px_rgba(26,26,26,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 border border-[#E8D7B5]/80" style={{transition: 'all 0.4s ease'}}>
<div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F3] border border-[#E8D7B5] shadow-[0_12px_30px_rgba(26,26,26,0.06)]">
<i className="h-7 w-7" data-lucide="wallet" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</div>
<h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-[#C9A961]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Investissement</h3>
<p className="sm:text-xl text-lg font-semibold text-[#1A1A1A] mt-2" style={{lineHeight: '1.9'}}>320€</p>
<p className="mt-1 text-sm sm:text-base text-[#6B6B6B]" style={{lineHeight: '1.9'}}>pour l'ensemble du séminaire</p>
<p className="mt-1 text-xs sm:text-sm text-[#6B6B6B]" style={{lineHeight: '1.9'}}>(Pauses incluses • Matériel fourni • Verre de l'amitié vendredi soir)</p>
</article>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#E8D7B5]" id="reserver">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-28 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-white/40 blur-3xl" data-parallax="" style={{backgroundPosition: 'center 1215.85%'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.45),transparent_55%)]"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="sm:py-24 lg:py-28 pt-20 pb-20" style={{paddingTop: '7.5rem', paddingBottom: '7.5rem'}}>
<div className="mx-auto max-w-4xl text-center">
<p className="reveal sm:text-2xl lg:text-3xl text-xl italic text-[#1A1A1A]" style={{lineHeight: '1.9'}}>ÊTES-VOUS PRÊT(E) À VOUS ENGAGER DANS CETTE DYNAMIQUE DE CO-CRÉATION ?</p>
<div className="h-14 sm:h-16"></div>
<div className="reveal sm:text-6xl lg:text-7xl text-5xl font-semibold text-[#B8954F] tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>320€</div>
<p className="reveal sm:text-2xl text-xl text-[#1A1A1A] mt-3" style={{lineHeight: '1.9'}}>Place unique</p>
<div className="h-10"></div>
<div className="reveal flex justify-center" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<a className="cta shine inline-flex items-center justify-center sm:text-xl transition-all duration-300 ease-in-out hover:scale-[1.04] hover:shadow-[0_26px_80px_rgba(201,169,97,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent text-lg font-medium text-white bg-[#C9A961] w-full max-w-md rounded-full pt-5 pr-10 pb-5 pl-10 relative shadow-[0_18px_60px_rgba(201,169,97,0.28)]" href="https://karkadann.learnybox.com/order-form/eyJmIjoxNzA5MTJ9/">
<span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/22 to-transparent"></span>
<span className="relative inline-flex items-center gap-2">
<i className="h-5 w-5" data-lucide="lock" style={{strokeWidth: '1.5'}}></i>
                Réserver maintenant
                </span>
</a>
</div>
<div className="h-10"></div>
<div className="reveal mx-auto max-w-3xl rounded-2xl border border-[#B8954F]/30 bg-white/55 backdrop-blur-md p-7 sm:p-8 shadow-[0_14px_45px_rgba(26,26,26,0.08)]" style={{transition: 'opacity 700ms, transform 700ms', willChange: 'opacity, transform'}}>
<div className="grid gap-4 sm:grid-cols-3 text-left">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#E8D7B5] shadow-[0_10px_30px_rgba(26,26,26,0.06)]">
<i className="h-5 w-5" data-lucide="badge-check" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<div>
<p className="text-sm sm:text-base font-semibold text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Séminaire</p>
<p className="text-sm sm:text-base text-[#6B6B6B]" style={{lineHeight: '1.7'}}>Présentiel • 2 jours</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#E8D7B5] shadow-[0_10px_30px_rgba(26,26,26,0.06)]">
<i className="h-5 w-5" data-lucide="users" style={{strokeWidth: '.5', color: '#C9A961'}}></i>
</span>
<div>
<p className="text-sm sm:text-base font-semibold text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Groupe</p>
<p className="text-sm sm:text-base text-[#6B6B6B]" style={{lineHeight: '1.7'}}>15 places max</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#E8D7B5] shadow-[0_10px_30px_rgba(26,26,26,0.06)]">
<i className="h-5 w-5" data-lucide="shield-check" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
</span>
<div>
<p className="text-sm sm:text-base font-semibold text-[#1A1A1A]" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Paiement</p>
<p className="text-sm sm:text-base text-[#6B6B6B]" style={{lineHeight: '1.7'}}>Sécurisé</p>
</div>
</div>
</div>
<div className="mt-6 border-t border-[#E8D7B5]/70 pt-6">
<p className="text-sm sm:text-base text-[#6B6B6B]" style={{lineHeight: '1.9'}}>
                  Après réservation, vous recevrez un e-mail de confirmation avec les informations pratiques (adresse exacte, horaires, suggestions d'hébergement et de restauration).
                </p>
</div>
</div>
<div className="h-12"></div>
<p className="reveal text-lg sm:text-xl text-[#1A1A1A] font-medium" style={{fontFamily: 'Montserrat, Inter, system-ui', lineHeight: '1.9'}}>
              Une décision simple peut changer toute votre vie relationnelle.
            </p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#1A1A1A] text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="sm:py-14 pt-12 pb-12">
<div className="grid gap-10 lg:grid-cols-3">
<div className="">
<div className="inline-flex items-center gap-3">
<span className="inline-flex items-center justify-center overflow-hidden text-white bg-white/10 w-10 h-10 border-white/15 border rounded-xl relative">
<span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent"></span>
<span className="relative text-lg leading-none font-medium tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>3</span>
</span>
<span className="text-base sm:text-lg font-semibold tracking-tight" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>TROISIÈME VOIE</span>
</div>
<p className="sm:text-base text-sm text-white/70 mt-4" style={{lineHeight: '1.9'}}>Séminaire en ligne • Mai 2026<br/> Un espace pour transformer l'opposition en alliance créatrice.</p>
</div>
<div className="">
<h3 className="text-sm sm:text-base font-semibold text-white/90" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Navigation</h3>
<ul className="mt-4 space-y-2 text-sm sm:text-base text-white/70">
<li className=""><a className="hover:text-white transition-colors" href="#comprendre">Concept</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#programme">Programme</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#intervenants">Intervenants</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm sm:text-base font-semibold text-white/90" style={{fontFamily: 'Montserrat, Inter, system-ui'}}>Contact</h3>
<div className="mt-4 space-y-3">
<a className="inline-flex items-center gap-2 sm:text-base hover:text-white transition-colors text-sm text-white/70" href="/mailto:vasseur.sarah@live.fr">
<i className="h-4 w-4" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
                contact@troisiemevoie.fr
              </a>
<p className="text-xs sm:text-sm text-white/50" style={{lineHeight: '1.8'}}>
                Réponse sous 48h ouvrées.
              </p>
</div>
</div>
</div>
<div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs sm:text-sm text-white/50" style={{lineHeight: '1.8'}}>
            © <span id="year">2026</span> Troisième Voie. Tous droits réservés.
          </p>
<div className="flex items-center gap-4 text-xs sm:text-sm text-white/50">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<span className="text-white/20">•</span>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-5 right-5 items-center gap-2 rounded-full border border-[#E8D7B5]/70 bg-white/70 backdrop-blur-md px-4 py-3 text-sm font-medium text-[#1A1A1A] shadow-[0_14px_45px_rgba(26,26,26,0.10)] transition-all duration-300 ease-in-out hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" href="#top" id="toTop">
<i className="h-4 w-4" data-lucide="arrow-up" style={{strokeWidth: '1.5', color: '#C9A961'}}></i>
    Haut
  </a>


    </>
  );
}
