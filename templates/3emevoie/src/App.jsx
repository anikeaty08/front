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



                // Ensure desktop sizing without px/em; use responsive utility at runtime (keeps spec intent)
              


    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    function closeMobileMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.add('hidden');
      menuBtn?.setAttribute('aria-expanded', 'false');
    }

    menuBtn?.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
    });

    // Close on link click (mobile)
    document.querySelectorAll('.mobilelink').forEach(a => {
      a.addEventListener('click', () => closeMobileMenu());
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileMenu();
    });

    // Active nav underline on scroll (desktop)
    const navLinks = [...document.querySelectorAll('.navlink')];
    const sections = navLinks
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    const setActive = (id) => {
      navLinks.forEach(a => {
        const active = a.getAttribute('href') === '#' + id;
        a.classList.toggle('underline', active);
        a.classList.toggle('decoration-[#C9A961]', active);
        a.classList.toggle('text-[#1A1A1A]', active);
        a.classList.toggle('text-[#C9A961]', !active);
      });
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if (visible?.target?.id) setActive(visible.target.id);
    }, { root: null, threshold: [0.2, 0.35, 0.5, 0.65] });

    sections.forEach(s => sectionObserver.observe(s));

    // Reveal on scroll
    const revealEls = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');

        // Stagger children
        const staggerItems = entry.target.querySelectorAll('[data-stagger]');
        staggerItems.forEach((el, i) => {
          setTimeout(() => el.classList.add('is-stagger-visible'), 90 * i);
        });

        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => revealObserver.observe(el));

    // Parallax
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const parallaxEls = document.querySelectorAll('.parallax');

    function onScrollParallax() {
      if (prefersReducedMotion) return;
      const y = window.scrollY || window.pageYOffset;
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0.3');
        el.style.transform = `translate3d(0, ${y * speed * 0.06}px, 0)`;
      });
    }

    onScrollParallax();
    window.addEventListener('scroll', () => requestAnimationFrame(onScrollParallax), { passive: true });

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // CTA placeholder: prevent jump when href="#"
    document.querySelectorAll('a.cta[href="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with your payment/checkout URL
        alert("Ajoutez ici votre lien de paiement/checkout (Stripe, ThriveCart, etc.).");
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
      

<a className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-white focus:text-[#1A1A1A] focus:px-4 focus:py-2 focus:outline-none focus:ring-2 focus:ring-[#C9A961]" href="#hero">
    Aller au contenu
  </a>

<header className="fixed inset-x-0 top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-3 rounded-2xl border border-[#E8D7B5]/70 bg-white/70 backdrop-blur-xl shadow-[0_4px_20px_rgba(201,169,97,0.10)]">
<div className="flex items-center justify-between px-4 sm:px-6 py-3">
<a className="group inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2 focus:ring-offset-transparent rounded-xl" href="#hero">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8D7B5] bg-white text-[#1A1A1A] shadow-[0_4px_20px_rgba(201,169,97,0.10)]">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>TV</span>
</span>
<span className="hidden sm:block">
<span className="block text-sm font-semibold tracking-tight text-[#1A1A1A]" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>TROISIÈME VOIE</span>
<span className="block text-xs text-[#6B6B6B]">Séminaire • Toulouse</span>
</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="navlink text-sm font-medium text-[#C9A961] underline-offset-8 focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded-lg px-1 py-1" href="#comprendre" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Concept</a>
<a className="navlink text-sm font-medium text-[#C9A961] underline-offset-8 focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded-lg px-1 py-1" href="#programme" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Programme</a>
<a className="navlink text-sm font-medium text-[#C9A961] underline-offset-8 focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded-lg px-1 py-1" href="#intervenants" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Intervenants</a>
<a className="navlink text-sm font-medium text-[#C9A961] underline-offset-8 focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded-lg px-1 py-1" href="#faq" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>FAQ</a>
<a className="inline-flex items-center gap-2 rounded-full bg-[#C9A961] px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(201,169,97,0.20)] transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(201,169,97,0.28)] focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2 focus:ring-offset-transparent" href="#reserver">
              Réserver
              <iconify-icon aria-hidden="true" className="text-white" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</nav>

<button aria-controls="mobileMenu" aria-expanded="false" className="md:hidden inline-flex items-center justify-center rounded-xl border border-[#E8D7B5] bg-white px-3 py-2 text-sm font-semibold text-[#1A1A1A] shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:translate-y-[-0.125rem] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" id="menuBtn">
<span className="sr-only">Ouvrir le menu</span>
<iconify-icon aria-hidden="true" className="text-[#1A1A1A]" height="22" icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
</button>
</div>

<div className="md:hidden hidden border-t border-[#E8D7B5]/70 bg-white/60 backdrop-blur-xl" id="mobileMenu">
<div className="px-4 py-4 flex flex-col gap-2">
<a className="mobilelink rounded-xl px-3 py-2 text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" href="#comprendre" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Concept</a>
<a className="mobilelink rounded-xl px-3 py-2 text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" href="#programme" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Programme</a>
<a className="mobilelink rounded-xl px-3 py-2 text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" href="#intervenants" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Intervenants</a>
<a className="mobilelink rounded-xl px-3 py-2 text-sm font-medium text-[#C9A961] transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" href="#faq" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>FAQ</a>
<a className="mobilelink mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A961] px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(201,169,97,0.20)] transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(201,169,97,0.28)] focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2 focus:ring-offset-transparent" href="#reserver">
              Réserver
              <iconify-icon aria-hidden="true" className="text-white" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</header>
<main className="pt-24 sm:pt-28">

<section aria-label="Section Hero" className="relative overflow-hidden bg-[#F5F1E8]" id="hero">

<div className="pointer-events-none absolute inset-0">
<div className="parallax absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#E8D7B5]/40 blur-3xl" data-parallax="0.5"></div>
<div className="parallax absolute -bottom-28 right-[-4rem] h-[24rem] w-[24rem] rounded-full bg-white/50 blur-3xl" data-parallax="0.35"></div>
<div className="parallax absolute -bottom-20 left-[-5rem] h-[22rem] w-[22rem] rounded-full bg-[#E8D7B5]/30 blur-3xl" data-parallax="0.25"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex min-h-[calc(100vh-7rem)] items-center justify-center">
<div className="w-full py-20 sm:py-24 lg:py-28" style={{paddingTop: '7.5rem', paddingBottom: '7.5rem'}}>
<div className="mx-auto max-w-3xl text-center">
<h1 className="reveal text-[#C9A961] font-semibold tracking-tight leading-[1.05]" data-reveal="" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '3rem'}}>
                SÉMINAIRE TROISIÈME VOIE
              </h1>

<h2 className="reveal mt-5 text-[#1A1A1A] font-medium tracking-tight leading-snug" data-reveal="" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', fontSize: '1.5rem'}}>
                De l'Impasse Relationnelle à l'Évidence
              </h2>
<p className="reveal mx-auto mt-6 max-w-[50rem] text-[#1A1A1A] leading-[1.8]" data-reveal="" style={{fontSize: '1.25rem'}}>
                Repartez avec des décisions claires et des actions concrètes, sans sacrifier ni vous-même, ni l'autre.
              </p>
<div className="reveal mt-10 flex justify-center" data-reveal="">
<a className="cta group relative inline-flex items-center justify-center rounded-full bg-[#C9A961] text-white shadow-[0_4px_20px_rgba(201,169,97,0.20)] transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-[0_12px_36px_rgba(201,169,97,0.28)] focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2 focus:ring-offset-[#F5F1E8] w-[90%] sm:w-auto" href="#reserver" style={{padding: '1.125rem 3rem', fontSize: '1.125rem'}}>
<span className="relative z-10">Réserver Votre Place</span>
<span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" style={{background: 'linear-gradient(110deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0) 60%)'}}></span>
</a>
</div>
</div>
</div>
</div>
<div className="h-px w-full bg-[#C9A961]/70"></div>
</div>
</section>

<section aria-label="Section Intro" className="relative bg-white" id="intro">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="mx-auto max-w-3xl text-center">
<p className="reveal text-[#1A1A1A] italic leading-[1.8]" data-reveal="" style={{fontSize: '1.375rem'}}>Vous en avez assez de vous battre dans vos relations ?</p>
<p className="reveal mt-7 text-[#1A1A1A] italic leading-[1.8]" data-reveal="" style={{fontSize: '1.375rem'}}>Vous rêvez de faire équipe, de créer ensemble une réalité qui vous nourrit tous les deux ?</p>
<p className="reveal mt-7 text-[#1A1A1A] italic leading-[1.8]" data-reveal="" style={{fontSize: '1.375rem'}}>Vous cherchez une voie où l'autre devient votre allié plutôt que votre adversaire ?</p>
<div className="mt-14"></div>
<figure className="reveal mx-auto max-w-[56.25rem] rounded-[0.75rem] border-2 border-[#C9A961] bg-[#FAF8F3] shadow-[0_4px_20px_rgba(201,169,97,0.10)]" data-reveal="" style={{padding: '2.5rem'}}>
<blockquote className="italic text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.5rem'}}>
                La Troisième Voie transforme l'opposition en alliance créatrice. Elle révèle une réalité nouvelle que vous ne pourriez jamais créer seul(e).
              </blockquote>
</figure>
</div>
</div>
</div>
</section>

<section aria-label="Section Comprendre" className="relative overflow-hidden bg-[#F5F1E8]" id="comprendre">
<div className="pointer-events-none absolute inset-0">
<div className="parallax absolute top-10 left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-white/45 blur-3xl" data-parallax="0.4"></div>
<div className="parallax absolute bottom-[-8rem] right-[-7rem] h-[30rem] w-[30rem] rounded-full bg-[#E8D7B5]/45 blur-3xl" data-parallax="0.5"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<div className="text-center">
<h2 className="reveal text-[#C9A961] font-semibold tracking-tight" data-reveal="" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '2.25rem'}}>
              COMPRENDRE LE PRINCIPE
            </h2>
<p className="reveal mx-auto mt-10 text-[#1A1A1A] font-medium tracking-tight leading-snug" data-reveal="" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', fontSize: '1.75rem'}}>
              Face à la rencontre, trois chemins s'offrent à nous :
            </p>
<div className="mt-12"></div>
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

<article className="reveal card-tilt rounded-[0.75rem] bg-white shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1 focus-within:-translate-y-1" data-reveal="" style={{padding: '2.5rem', transform: 'rotate(2deg)'}}>
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-white">
<iconify-icon aria-hidden="true" className="text-[#D4756A]" height="26" icon="solar:close-circle-linear" width="26"></iconify-icon>
</span>
<div>
<h3 className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.375rem', fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
                      Rejeter l'autre
                    </h3>
<p className="mt-2 text-[#6B6B6B] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                      (la guerre, l'opposition, chacun pour soi)
                    </p>
</div>
</div>
</article>

<article className="reveal card-tilt rounded-[0.75rem] bg-white shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1 focus-within:-translate-y-1" data-reveal="" style={{padding: '2.5rem', transform: 'rotate(2deg)'}}>
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-white">
<iconify-icon aria-hidden="true" className="text-[#D4756A]" height="26" icon="solar:close-circle-linear" width="26"></iconify-icon>
</span>
<div>
<h3 className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.375rem', fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
                      Se rejeter soi-même
                    </h3>
<p className="mt-2 text-[#6B6B6B] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                      (la soumission, l'effacement, perdre qui on est)
                    </p>
</div>
</div>
</article>

<article className="reveal card-tilt rounded-[0.75rem] bg-white border-2 border-[#C9A961] shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1 focus-within:-translate-y-1" data-reveal="" style={{padding: '2.5rem', transform: 'rotate(2deg)'}}>
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-white">
<iconify-icon aria-hidden="true" className="text-[#C9A961]" height="26" icon="solar:check-circle-linear" width="26"></iconify-icon>
</span>
<div>
<h3 className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.375rem', fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
                      Choisir la Troisième Voie
                    </h3>
<p className="mt-2 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                      Devenir alliés et co-créer ensemble une réalité nouvelle et supérieure.
                    </p>
</div>
</div>
</article>
</div>
<div className="mt-16"></div>
<div className="reveal text-center" data-reveal="">
<div className="text-[#C9A961] font-semibold tracking-tight leading-none" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '4rem'}}>
                1 + 1 = 3
              </div>
<p className="mx-auto mt-6 max-w-[43.75rem] italic text-[#6B6B6B] leading-[1.8]" style={{fontSize: '1.375rem'}}>
                Quand deux personnes s'allient vraiment, elles créent quelque chose qui n'existerait jamais seul.
              </p>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Section En action" className="relative bg-white" id="action">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<h2 className="reveal text-center text-[#C9A961] font-semibold tracking-tight" data-reveal="" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '2.25rem'}}>
            LA TROISIÈME VOIE EN ACTION
          </h2>
<div className="mt-14"></div>
<div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

<section className="reveal rounded-[0.75rem] border border-[#E8D7B5]/70 bg-white shadow-[0_4px_20px_rgba(201,169,97,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1" data-reveal="" style={{padding: '2.5rem'}}>
<div className="flex items-center gap-4">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-[#FAF8F3]">
<iconify-icon aria-label="Icône poignée de main" className="text-[#C9A961]" height="30" icon="solar:hand-shake-linear" width="30"></iconify-icon>
</span>
<div>
<h3 className="text-[#C9A961] font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '2rem'}}>
                    Dans votre Couple
                  </h3>
<p className="mt-1 text-[#1A1A1A] font-semibold tracking-tight" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', fontSize: '1.5rem'}}>
                    Passez de l'Opposition à l'Alliance
                  </p>
</div>
</div>
<p className="mt-6 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                Dans le couple, on se retrouve souvent en guerre :<br/>
                Qui a raison ? • Qui va gagner ? • Rester ou Partir ?
              </p>
<div className="my-7 rounded-lg bg-[#E8D7B5]/35" style={{padding: '1.875rem'}}>
<p className="text-center font-semibold text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.25rem'}}>
                  C'est épuisant. Et ça ne mène nulle part.
                </p>
</div>
<p className="text-[#1A1A1A] italic leading-[1.8]" style={{fontSize: '1.125rem'}}>
                Nous allons pratiquer ensemble la posture qui transforme vos oppositions en force créatrice commune.
              </p>
<div className="mt-7"></div>
<p className="text-[#1A1A1A] font-semibold leading-[1.8]" style={{fontSize: '1.125rem'}}>
                La Troisième Voie vous permet de :
              </p>
<ul className="mt-4 space-y-4 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
<li className="reveal-item" data-stagger="">• Cesser de vous battre et devenir de véritables alliés</li>
<li className="reveal-item" data-stagger="">• Faire équipe pour créer ensemble une réalité qui vous nourrit tous les deux</li>
<li className="reveal-item" data-stagger="">• Transformer vos conflits en opportunités de co-création</li>
<li className="reveal-item" data-stagger="">• Vous sentir pleinement vivants ET profondément connectés</li>
</ul>
</section>

<section className="reveal rounded-[0.75rem] border border-[#E8D7B5]/70 bg-white shadow-[0_4px_20px_rgba(201,169,97,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-1" data-reveal="" style={{padding: '2.5rem'}}>
<div className="flex items-center gap-4">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-[#FAF8F3]">
<iconify-icon aria-label="Icône étoile" className="text-[#C9A961]" height="30" icon="solar:stars-linear" width="30"></iconify-icon>
</span>
<div>
<h3 className="text-[#C9A961] font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '2rem'}}>
                    Dans toutes vos Relations
                  </h3>
<p className="mt-1 text-[#1A1A1A] font-semibold tracking-tight" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', fontSize: '1.5rem'}}>
                    Devenez Co-créateur de vos Relations
                  </p>
</div>
</div>
<p className="mt-6 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                Avec vos enfants, vos parents, vos amis, vos collègues...<br/>
                Combien de fois vous sentez-vous en opposition ?
              </p>
<ul className="mt-4 space-y-4 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
<li className="reveal-item" data-stagger="">• Moi contre eux</li>
<li className="reveal-item" data-stagger="">• Mes besoins ou les leurs</li>
<li className="reveal-item" data-stagger="">• M'affirmer ou préserver la paix</li>
</ul>
<div className="my-7 rounded-lg bg-[#E8D7B5]/35" style={{padding: '1.875rem'}}>
<p className="text-center font-semibold text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.25rem'}}>
                  Et si vous pouviez transformer ces guerres silencieuses en alliances créatrices ?
                </p>
</div>
<p className="text-[#1A1A1A] font-semibold leading-[1.8]" style={{fontSize: '1.125rem'}}>
                La Troisième Voie vous apprend à :
              </p>
<ul className="mt-4 space-y-4 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
<li className="reveal-item" data-stagger="">• Sortir des rapports de force pour créer ensemble</li>
<li className="reveal-item" data-stagger="">• Faire équipe plutôt que de vous opposer</li>
<li className="reveal-item" data-stagger="">• Bâtir des relations où chacun se sent pleinement respecté</li>
<li className="reveal-item" data-stagger="">• Co-créer une réalité nouvelle, plus riche, plus vivante</li>
</ul>
</section>
</div>
</div>
</div>
</section>

<section aria-label="Section Objection" className="relative overflow-hidden bg-[#F5F1E8]" id="objection">
<div className="pointer-events-none absolute inset-0">
<div className="parallax absolute top-0 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-white/45 blur-3xl" data-parallax="0.4"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<h2 className="reveal text-center text-[#C9A961] font-semibold tracking-tight" data-reveal="" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '2.25rem'}}>
            ❓ "MAIS SI L'AUTRE NE VEUT PAS JOUER LE JEU ?"
          </h2>
<p className="reveal mx-auto mt-7 text-center italic text-[#1A1A1A] leading-[1.8]" data-reveal="" style={{fontSize: '1.75rem'}}>
            Et si l'autre refuse la Troisième Voie ? Si l'autre ne veut rien entendre ? Si l'autre est hostile ?
          </p>
<p className="reveal mx-auto mt-10 max-w-[56.25rem] text-center text-[#1A1A1A] leading-[1.8]" data-reveal="" style={{fontSize: '1.25rem'}}>
            C'est LA question que tout le monde se pose. Et c'est exactement ce que nous allons aborder au séminaire.
          </p>
<div className="reveal mx-auto my-12 max-w-[62.5rem] rounded-[0.75rem] border-2 border-[#C9A961] bg-white shadow-[0_4px_20px_rgba(201,169,97,0.10)]" data-reveal="" style={{padding: '3.125rem'}}>
<p className="text-center font-semibold text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.25rem'}}>
              Voici ce que vous devez comprendre :
            </p>
<p className="my-7 text-center font-semibold text-[#C9A961] tracking-tight" style={{fontSize: '1.75rem'}}>
              La Troisième Voie ne dépend PAS de la volonté de l'autre.
            </p>
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
              Elle commence par VOUS. Par votre posture. Par votre capacité à créer un espace nouveau.
            </p>
<div className="mt-10"></div>
<p className="font-semibold text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.25rem'}}>
              Ce que vous allez découvrir au séminaire :
            </p>
<div className="mt-7 space-y-5">
<div className="reveal-item rounded-lg bg-[#FAF8F3] border border-[#E8D7B5]" data-stagger="" style={{padding: '1.875rem'}}>
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-white">
<iconify-icon aria-hidden="true" className="text-[#C9A961]" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
</span>
<div>
<div className="font-semibold text-[#1A1A1A] leading-snug" style={{fontSize: '1.25rem'}}>Comment incarner la Troisième Voie même face à l'hostilité</div>
<p className="mt-2 text-[#6B6B6B] leading-[1.8]" style={{fontSize: '1.125rem'}}>Vous apprendrez la posture intérieure qui transforme la dynamique relationnelle, même quand l'autre résiste</p>
</div>
</div>
</div>
<div className="reveal-item rounded-lg bg-[#FAF8F3] border border-[#E8D7B5]" data-stagger="" style={{padding: '1.875rem'}}>
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-white">
<iconify-icon aria-hidden="true" className="text-[#C9A961]" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
</span>
<div>
<div className="font-semibold text-[#1A1A1A] leading-snug" style={{fontSize: '1.25rem'}}>Comment sortir des jeux de pouvoir sans vous soumettre</div>
<p className="mt-2 text-[#6B6B6B] leading-[1.8]" style={{fontSize: '1.125rem'}}>Des outils concrets pour ne plus alimenter la guerre, sans pour autant vous effacer</p>
</div>
</div>
</div>
<div className="reveal-item rounded-lg bg-[#FAF8F3] border border-[#E8D7B5]" data-stagger="" style={{padding: '1.875rem'}}>
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-white">
<iconify-icon aria-hidden="true" className="text-[#C9A961]" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
</span>
<div>
<div className="font-semibold text-[#1A1A1A] leading-snug" style={{fontSize: '1.25rem'}}>Comment créer un espace d'alliance même face au refus</div>
<p className="mt-2 text-[#6B6B6B] leading-[1.8]" style={{fontSize: '1.125rem'}}>La Troisième Voie n'est pas une négociation à deux, c'est d'abord une posture que VOUS incarnez</p>
</div>
</div>
</div>
<div className="reveal-item rounded-lg bg-[#FAF8F3] border border-[#E8D7B5]" data-stagger="" style={{padding: '1.875rem'}}>
<div className="flex items-start gap-4">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-white">
<iconify-icon aria-hidden="true" className="text-[#C9A961]" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
</span>
<div>
<div className="font-semibold text-[#1A1A1A] leading-snug" style={{fontSize: '1.25rem'}}>Comment votre changement influence le système relationnel</div>
<p className="mt-2 text-[#6B6B6B] leading-[1.8]" style={{fontSize: '1.125rem'}}>Quand vous changez vraiment de posture, l'autre n'a plus d'autre choix que de s'ajuster (ou de révéler sa véritable nature)</p>
</div>
</div>
</div>
</div>
<div className="mt-10"></div>
<div className="rounded-lg bg-[#E8D7B5]/60 border border-[#E8D7B5]" style={{padding: '2.5rem'}}>
<p className="font-semibold text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.25rem'}}>La vérité :</p>
<p className="mt-2 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                Vous ne pouvez pas forcer l'autre à changer. Mais vous pouvez changer la danse. Et quand vous changez de pas, l'autre doit nécessairement s'adapter ou quitter la piste.
              </p>
</div>
<div className="mt-10"></div>
<p className="font-semibold text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.25rem'}}>
              Au séminaire, nous travaillerons spécifiquement sur :
            </p>
<ul className="mt-6 space-y-4 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
<li className="reveal-item" data-stagger="">• Les situations où l'autre est dans le déni ou le refus</li>
<li className="reveal-item" data-stagger="">• Comment maintenir votre alignement face à l'opposition</li>
<li className="reveal-item" data-stagger="">• Les signaux qui vous indiquent si la relation peut évoluer ou non</li>
<li className="reveal-item" data-stagger="">• Comment prendre des décisions claires même dans l'incertitude</li>
</ul>
<div className="mt-12"></div>
<figure className="mx-auto max-w-[56.25rem] rounded-[0.75rem] border-2 border-[#C9A961] bg-white" style={{padding: '2.5rem'}}>
<blockquote className="italic text-center text-[#C9A961] leading-[1.8]" style={{fontSize: '1.5rem'}}>
                La Troisième Voie vous donne le pouvoir de transformer votre réalité relationnelle, que l'autre soit prêt ou non. C'est ce qui la rend si puissante.
              </blockquote>
</figure>
</div>
</div>
</div>
</section>

<section aria-label="Section Programme" className="relative bg-white" id="programme">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<h2 className="reveal text-center text-[#C9A961] font-semibold tracking-tight" data-reveal="" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '2.25rem'}}>
            LE PROGRAMME DU SÉMINAIRE
          </h2>
<div className="mt-14"></div>
<div className="relative mx-auto max-w-3xl">
<div className="absolute left-5 top-0 h-full w-px bg-[#C9A961]/60"></div>

<article className="reveal relative ml-0 pl-14" data-reveal="">
<div className="absolute left-3 top-7 h-5 w-5 rounded-full border-2 border-[#C9A961] bg-white"></div>
<div className="rounded-[0.75rem] border border-[#C9A961]/60 bg-white shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1" style={{padding: '2.5rem'}}>
<div className="flex flex-wrap items-center justify-between gap-4">
<span className="inline-flex rounded-full bg-[#C9A961] text-white font-semibold" style={{padding: '0.625rem 1.875rem', fontSize: '1rem'}}>Vendredi Soir</span>
</div>
<h3 className="mt-5 text-[#1A1A1A] font-semibold tracking-tight" style={{fontSize: '1.75rem', fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Accueil convivial</h3>
<p className="mt-3 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  On se retrouve pour un verre de l'amitié à proximité du lieu de séminaire.<br/>
                  Premier contact, premières connexions dans la douceur.
                </p>
</div>
</article>
<div className="h-8"></div>

<article className="reveal relative ml-0 pl-14" data-reveal="">
<div className="absolute left-3 top-7 h-5 w-5 rounded-full border-2 border-[#C9A961] bg-white"></div>
<div className="rounded-[0.75rem] border border-[#C9A961]/60 bg-white shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1" style={{padding: '2.5rem'}}>
<span className="inline-flex rounded-full bg-[#C9A961] text-white font-semibold" style={{padding: '0.625rem 1.875rem', fontSize: '1rem'}}>Samedi • 9h00 - 18h00</span>
<h3 className="mt-5 text-[#1A1A1A] font-semibold tracking-tight" style={{fontSize: '1.75rem', fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Fondations &amp; Intégration</h3>
<p className="mt-3 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>Accueil à 9h pour un début à 9h30.</p>
<div className="h-4"></div>
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>Cette journée portera sur :</p>
<ul className="mt-4 space-y-4 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
<li className="reveal-item" data-stagger="">• L'acquisition des fondamentaux théoriques nécessaires à la mise en place de la Troisième Voie</li>
<li className="reveal-item" data-stagger="">• Des exercices d'introspection pour identifier vos schémas relationnels</li>
<li className="reveal-item" data-stagger="">• Des intégrations en binôme et petits groupes pour expérimenter la posture</li>
<li className="reveal-item" data-stagger="">• Des moments de partage et d'échanges profonds</li>
</ul>
</div>
</article>
<div className="h-8"></div>

<article className="reveal relative ml-0 pl-14" data-reveal="">
<div className="absolute left-3 top-7 h-5 w-5 rounded-full border-2 border-[#C9A961] bg-white"></div>
<div className="rounded-[0.75rem] border border-[#C9A961]/60 bg-white shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1" style={{padding: '2.5rem'}}>
<span className="inline-flex rounded-full bg-[#C9A961] text-white font-semibold" style={{padding: '0.625rem 1.875rem', fontSize: '1rem'}}>Dimanche • 9h00 - 17h00</span>
<h3 className="mt-5 text-[#1A1A1A] font-semibold tracking-tight" style={{fontSize: '1.75rem', fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Mise en Pratique &amp; Clarté</h3>
<p className="mt-3 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>Mise en pratique dans vos relations de couple et vos relations en général.</p>
<div className="h-4"></div>
<p className="text-[#1A1A1A] font-semibold leading-[1.8]" style={{fontSize: '1.125rem'}}>Vous repartirez avec :</p>
<ul className="mt-4 space-y-4 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
<li className="reveal-item" data-stagger="">• De la clarté sur vos dynamiques relationnelles actuelles</li>
<li className="reveal-item" data-stagger="">• Des décisions alignées avec votre vérité profonde</li>
<li className="reveal-item" data-stagger="">• Des actions concrètes à mener dans votre vie</li>
<li className="reveal-item" data-stagger="">• Des outils pratiques pour continuer à cultiver la Troisième Voie au quotidien</li>
</ul>
</div>
</article>
</div>
</div>
</div>
</section>

<section aria-label="Section Intervenants" className="relative overflow-hidden bg-[#F5F1E8]" id="intervenants">
<div className="pointer-events-none absolute inset-0">
<div className="parallax absolute top-10 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-white/40 blur-3xl" data-parallax="0.35"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<figure className="reveal mx-auto max-w-[56.25rem] rounded-[0.75rem] border-2 border-[#C9A961] bg-white shadow-[0_4px_20px_rgba(201,169,97,0.10)]" data-reveal="" style={{padding: '2.5rem'}}>
<blockquote className="italic text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.5rem'}}>
              Nous sommes un couple d'experts et d'entrepreneurs qui vous ouvrons un espace en présentiel pour pratiquer cette Troisième Voie.
            </blockquote>
</figure>
<div className="mt-14"></div>
<h2 className="reveal text-center text-[#C9A961] font-semibold tracking-tight" data-reveal="" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '2.25rem'}}>
            REJOIGNEZ SARAH SALOMÉE ET JEAN-LUC DE WACHTER
          </h2>
<div className="mt-14"></div>
<div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

<article className="reveal rounded-[0.75rem] bg-white shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1" data-reveal="" style={{padding: '3.125rem'}}>
<h3 className="text-center text-[#C9A961] font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '2rem'}}>Sarah Salomée</h3>
<div className="mx-auto mt-4 h-px bg-[#C9A961]/70" style={{width: '3.75rem'}}></div>
<div className="mt-7 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                Mentor relationnelle et professeure de philosophie, Sarah accompagne depuis 2019 des personnes qui veulent sortir de leurs schémas répétitifs pour vivre des relations d'alliance authentiques.<br/><br/>
                Philosophe de formation (maîtrise en philosophie), coach certifiée (Haute École de Coaching de Paris, Mentor Phoenix), elle a développé une méthode tridimensionnelle : physiologique, psychologique et métaphysique.<br/><br/>
                Ce qui la rend unique ? Elle a vécu ce qu'elle enseigne. Des relations intenses, des bas-fonds relationnels qui l'ont forcée à tout déconstruire et reconstruire. Cette lucidité gagnée dans la traversée fait toute la différence.
              </div>
<div className="mt-7 rounded-lg bg-[#E8D7B5]/35 border border-[#E8D7B5]" style={{padding: '1.875rem'}}>
<div className="font-semibold text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.25rem'}}>Ce qu'elle apporte :</div>
<p className="mt-2 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Une capacité à nommer précisément vos schémas, des outils concrets pour les transformer, et une présence qui allie profondeur et légèreté.
                </p>
</div>
</article>

<article className="reveal rounded-[0.75rem] bg-white shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1" data-reveal="" style={{padding: '3.125rem'}}>
<h3 className="text-center text-[#C9A961] font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '2rem'}}>Jean-Luc De Wachter</h3>
<div className="mx-auto mt-4 h-px bg-[#C9A961]/70" style={{width: '3.75rem'}}></div>
<div className="mt-7 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                Philosophe, enseignant spirituel et auteur (Business Bénédiction, Je te dis la vérité), Jean-Luc possède un don rare : une intuition qui touche à la clairvoyance.<br/><br/>
                Il voit instantanément ce qui se joue dans vos dynamiques relationnelles et énergétiques — vos zones d'ombre, vos résistances, vos potentiels. Un "sniper psycho-énergétique" qui frappe juste, avec compassion.<br/><br/>
                Ancien entrepreneur passé par ses propres crises existentielles et relationnelles, il a découvert la puissance de l'alignement intérieur et de la vérité comme force créatrice.
              </div>
<div className="mt-7 rounded-lg bg-[#E8D7B5]/35 border border-[#E8D7B5]" style={{padding: '1.875rem'}}>
<div className="font-semibold text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.25rem'}}>Ce qu'il apporte :</div>
<p className="mt-2 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Une clarté désarmante, une capacité à révéler votre propre évidence, et un enseignement qui transforme vraiment.
                </p>
</div>
</article>
</div>
<div className="mt-14"></div>
<p className="reveal text-center font-semibold text-[#1A1A1A] tracking-tight" data-reveal="" style={{fontSize: '1.75rem'}}>
            Ce que vous allez trouver :
          </p>
<div className="mt-7"></div>
<div className="mx-auto max-w-2xl space-y-5 text-center">
<p className="reveal-item text-[#1A1A1A] leading-[1.8]" data-stagger="" style={{fontSize: '1.25rem'}}><span className="text-[#C9A961] font-semibold">✓</span> Des enseignements clairs et profonds</p>
<p className="reveal-item text-[#1A1A1A] leading-[1.8]" data-stagger="" style={{fontSize: '1.25rem'}}><span className="text-[#C9A961] font-semibold">✓</span> Des exercices pratiques pour vos relations</p>
<p className="reveal-item text-[#1A1A1A] leading-[1.8]" data-stagger="" style={{fontSize: '1.25rem'}}><span className="text-[#C9A961] font-semibold">✓</span> Du mentorat inspiré de notre propre cheminement de couple</p>
<p className="reveal-item text-[#1A1A1A] leading-[1.8]" data-stagger="" style={{fontSize: '1.25rem'}}><span className="text-[#C9A961] font-semibold">✓</span> De la profondeur et des pistes concrètes</p>
</div>
<div className="mt-12"></div>
<figure className="reveal mx-auto max-w-[50rem] rounded-[0.75rem] border-2 border-[#C9A961] bg-white shadow-[0_4px_20px_rgba(201,169,97,0.10)]" data-reveal="" style={{padding: '2.5rem'}}>
<blockquote className="italic text-center text-[#C9A961] leading-[1.8]" style={{fontSize: '1.5rem'}}>
              La qualité de votre relation avec vous-même et avec les autres détermine la qualité de votre vie.
            </blockquote>
</figure>
</div>
</div>
</section>

<section aria-label="Section FAQ" className="relative bg-white" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<h2 className="reveal text-center text-[#C9A961] font-semibold tracking-tight" data-reveal="" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '2.25rem'}}>
            FAQ - VOS QUESTIONS
          </h2>
<div className="mt-14"></div>
<div className="mx-auto max-w-4xl rounded-[0.75rem] border border-[#E8D7B5]/70 bg-white shadow-[0_4px_20px_rgba(201,169,97,0.08)] overflow-hidden">

<div className="reveal px-6 sm:px-8" data-reveal="" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="text-[#C9A961] font-semibold tracking-tight" style={{fontSize: '1.5rem'}}>Hébergement</div>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
<details className="faq-item group">
<summary className="cursor-pointer list-none px-6 sm:px-8 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.25rem'}}>Où puis-je me loger à Toulouse ?</div>
</div>
<iconify-icon aria-hidden="true" className="mt-1 text-[#C9A961] transition-transform duration-300 ease-in-out group-open:rotate-180" height="22" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</div>
</summary>
<div className="px-6 sm:px-8 pb-7">
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Toulouse dispose d'une large gamme d'hébergements. Nous recommandons de réserver votre hôtel ou Airbnb à proximité du lieu du séminaire. Nous vous communiquerons les adresses précises et les recommandations d'hébergement après votre réservation.
                </p>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
</details>
<details className="faq-item group">
<summary className="cursor-pointer list-none px-6 sm:px-8 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="flex items-start justify-between gap-4">
<div className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.25rem'}}>Le séminaire inclut-il l'hébergement ?</div>
<iconify-icon aria-hidden="true" className="mt-1 text-[#C9A961] transition-transform duration-300 ease-in-out group-open:rotate-180" height="22" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</div>
</summary>
<div className="px-6 sm:px-8 pb-7">
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Non, l'hébergement n'est pas inclus dans le tarif du séminaire. Cela vous permet de choisir l'option qui vous convient le mieux selon votre budget et vos préférences.
                </p>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
</details>

<div className="reveal px-6 sm:px-8" data-reveal="" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="text-[#C9A961] font-semibold tracking-tight" style={{fontSize: '1.5rem'}}>Restauration</div>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
<details className="faq-item group">
<summary className="cursor-pointer list-none px-6 sm:px-8 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="flex items-start justify-between gap-4">
<div className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.25rem'}}>Les repas sont-ils inclus ?</div>
<iconify-icon aria-hidden="true" className="mt-1 text-[#C9A961] transition-transform duration-300 ease-in-out group-open:rotate-180" height="22" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</div>
</summary>
<div className="px-6 sm:px-8 pb-7">
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Les pauses café/thé sont incluses. Pour les repas du midi, nous vous proposerons des options de restauration à proximité ou vous pourrez apporter votre repas. Le vendredi soir, le verre de l'amitié est offert.
                </p>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
</details>
<details className="faq-item group">
<summary className="cursor-pointer list-none px-6 sm:px-8 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="flex items-start justify-between gap-4">
<div className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.25rem'}}>Y a-t-il des options pour les régimes spéciaux ?</div>
<iconify-icon aria-hidden="true" className="mt-1 text-[#C9A961] transition-transform duration-300 ease-in-out group-open:rotate-180" height="22" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</div>
</summary>
<div className="px-6 sm:px-8 pb-7">
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Nous prenons en compte les régimes alimentaires spécifiques. Merci de nous informer de vos besoins lors de votre inscription.
                </p>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
</details>

<div className="reveal px-6 sm:px-8" data-reveal="" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="text-[#C9A961] font-semibold tracking-tight" style={{fontSize: '1.5rem'}}>Matériel</div>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
<details className="faq-item group">
<summary className="cursor-pointer list-none px-6 sm:px-8 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="flex items-start justify-between gap-4">
<div className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.25rem'}}>Qu'est-ce que je dois apporter ?</div>
<iconify-icon aria-hidden="true" className="mt-1 text-[#C9A961] transition-transform duration-300 ease-in-out group-open:rotate-180" height="22" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</div>
</summary>
<div className="px-6 sm:px-8 pb-7">
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Simplement vous-même, un carnet et un stylo si vous aimez prendre des notes. Nous fournissons tout le matériel nécessaire aux exercices.
                </p>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
</details>
<details className="faq-item group">
<summary className="cursor-pointer list-none px-6 sm:px-8 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="flex items-start justify-between gap-4">
<div className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.25rem'}}>Dois-je apporter un ordinateur portable ?</div>
<iconify-icon aria-hidden="true" className="mt-1 text-[#C9A961] transition-transform duration-300 ease-in-out group-open:rotate-180" height="22" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</div>
</summary>
<div className="px-6 sm:px-8 pb-7">
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Non, ce séminaire est conçu pour être vécu pleinement dans l'instant présent, sans écran.
                </p>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
</details>
<details className="faq-item group">
<summary className="cursor-pointer list-none px-6 sm:px-8 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="flex items-start justify-between gap-4">
<div className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.25rem'}}>Y a-t-il du matériel fourni sur place ?</div>
<iconify-icon aria-hidden="true" className="mt-1 text-[#C9A961] transition-transform duration-300 ease-in-out group-open:rotate-180" height="22" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</div>
</summary>
<div className="px-6 sm:px-8 pb-7">
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Oui, nous fournissons tout le matériel pédagogique nécessaire ainsi que les supports pour les exercices.
                </p>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
</details>

<div className="reveal px-6 sm:px-8" data-reveal="" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="text-[#C9A961] font-semibold tracking-tight" style={{fontSize: '1.5rem'}}>Participation</div>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
<details className="faq-item group">
<summary className="cursor-pointer list-none px-6 sm:px-8 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="flex items-start justify-between gap-4">
<div className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.25rem'}}>Puis-je venir seul(e) même si je suis en couple ?</div>
<iconify-icon aria-hidden="true" className="mt-1 text-[#C9A961] transition-transform duration-300 ease-in-out group-open:rotate-180" height="22" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</div>
</summary>
<div className="px-6 sm:px-8 pb-7">
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Absolument ! Le séminaire est ouvert aux personnes seules comme aux couples. Chacun y trouve sa place et son chemin.
                </p>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
</details>
<details className="faq-item group">
<summary className="cursor-pointer list-none px-6 sm:px-8 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="flex items-start justify-between gap-4">
<div className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.25rem'}}>Dois-je venir avec mon/ma partenaire ?</div>
<iconify-icon aria-hidden="true" className="mt-1 text-[#C9A961] transition-transform duration-300 ease-in-out group-open:rotate-180" height="22" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</div>
</summary>
<div className="px-6 sm:px-8 pb-7">
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Non, ce n'est pas obligatoire. Beaucoup de participants viennent seuls et travaillent sur leurs relations en général (famille, amis, collègues) ainsi que sur leur relation à eux-mêmes.
                </p>
</div>
<div className="h-px bg-[#C9A961]/40"></div>
</details>
<details className="faq-item group">
<summary className="cursor-pointer list-none px-6 sm:px-8 transition-all duration-300 ease-in-out hover:bg-[#FAF8F3] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" style={{paddingTop: '1.875rem', paddingBottom: '1.875rem'}}>
<div className="flex items-start justify-between gap-4">
<div className="text-[#1A1A1A] font-semibold leading-snug" style={{fontSize: '1.25rem'}}>Le séminaire est-il réservé aux couples en difficulté ?</div>
<iconify-icon aria-hidden="true" className="mt-1 text-[#C9A961] transition-transform duration-300 ease-in-out group-open:rotate-180" height="22" icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
</div>
</summary>
<div className="px-6 sm:px-8 pb-7">
<p className="text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
                  Non, la Troisième Voie s'adresse à toute personne qui souhaite approfondir sa qualité relationnelle, que ce soit pour résoudre des difficultés ou pour enrichir des relations déjà épanouies.
                </p>
</div>
</details>
</div>
<div className="mt-14"></div>
<div className="reveal mx-auto max-w-[37.5rem] rounded-[0.75rem] border-2 border-[#C9A961] bg-[#E8D7B5]/35 shadow-[0_4px_20px_rgba(201,169,97,0.08)] text-center" data-reveal="" style={{padding: '2.5rem'}}>
<div className="font-semibold text-[#1A1A1A] tracking-tight" style={{fontSize: '1.5rem'}}>Vous avez d'autres questions ?</div>
<p className="mt-3 text-[#1A1A1A] leading-[1.8]" style={{fontSize: '1.125rem'}}>
              N'hésitez pas à nous contacter directement. Nous serons ravis de répondre à toutes vos interrogations.
            </p>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#C9A961] bg-white px-6 py-3 font-semibold text-[#C9A961] shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(201,169,97,0.16)] focus:outline-none focus:ring-2 focus:ring-[#C9A961]" href="mailto:contact@troisiemevoie.fr" style={{fontSize: '1.125rem'}}>
              📧 Nous Contacter
              <iconify-icon aria-hidden="true" className="text-[#C9A961]" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section aria-label="Section Informations clés" className="relative bg-[#F5F1E8]" id="infos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-20 lg:py-24" style={{paddingTop: '6.25rem', paddingBottom: '6.25rem'}}>
<h2 className="reveal text-center text-[#C9A961] font-semibold tracking-tight" data-reveal="" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, serif', fontSize: '2.25rem'}}>
            INFORMATIONS CLÉS
          </h2>
<div className="mt-14"></div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<article className="reveal rounded-[0.75rem] bg-white text-center shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1" data-reveal="" style={{padding: '2.5rem'}}>
<div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-[#FAF8F3]">
<iconify-icon aria-label="Icône calendrier" className="text-[#C9A961]" height="30" icon="solar:calendar-linear" width="30"></iconify-icon>
</div>
<div className="mt-5 text-[#C9A961] font-semibold tracking-tight" style={{fontSize: '1.5rem', fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Dates</div>
<div className="mt-2 text-[#1A1A1A] font-semibold leading-[1.8]" style={{fontSize: '1.125rem'}}>Le week-end du 11 &amp; 12 avril 2026</div>
<div className="mt-1 text-[#6B6B6B] leading-[1.8]" style={{fontSize: '1rem'}}>(Accueil convivial le vendredi 10 avril au soir)</div>
</article>
<article className="reveal rounded-[0.75rem] bg-white text-center shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1" data-reveal="" style={{padding: '2.5rem'}}>
<div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-[#FAF8F3]">
<iconify-icon aria-label="Icône localisation" className="text-[#C9A961]" height="30" icon="solar:map-point-linear" width="30"></iconify-icon>
</div>
<div className="mt-5 text-[#C9A961] font-semibold tracking-tight" style={{fontSize: '1.5rem', fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Lieu</div>
<div className="mt-2 text-[#1A1A1A] font-semibold leading-[1.8]" style={{fontSize: '1.125rem'}}>Toulouse</div>
<div className="mt-1 text-[#6B6B6B] leading-[1.8]" style={{fontSize: '1rem'}}>Adresse précise communiquée après inscription</div>
</article>
<article className="reveal rounded-[0.75rem] bg-white text-center shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1" data-reveal="" style={{padding: '2.5rem'}}>
<div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-[#FAF8F3]">
<iconify-icon aria-label="Icône groupe" className="text-[#C9A961]" height="30" icon="solar:users-group-two-rounded-linear" width="30"></iconify-icon>
</div>
<div className="mt-5 text-[#C9A961] font-semibold tracking-tight" style={{fontSize: '1.5rem', fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Taille du Groupe</div>
<div className="mt-2 text-[#1A1A1A] font-semibold leading-[1.8]" style={{fontSize: '1.125rem'}}>Limité à 15 participants</div>
<div className="mt-1 text-[#6B6B6B] leading-[1.8]" style={{fontSize: '1rem'}}>pour garantir la qualité des échanges et l'intimité du groupe</div>
</article>
<article className="reveal rounded-[0.75rem] bg-white text-center shadow-[0_4px_20px_rgba(201,169,97,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1" data-reveal="" style={{padding: '2.5rem'}}>
<div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8D7B5] bg-[#FAF8F3]">
<iconify-icon aria-label="Icône investissement" className="text-[#C9A961]" height="30" icon="solar:wallet-money-linear" width="30"></iconify-icon>
</div>
<div className="mt-5 text-[#C9A961] font-semibold tracking-tight" style={{fontSize: '1.5rem', fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Investissement</div>
<div className="mt-2 text-[#1A1A1A] font-semibold leading-[1.8]" style={{fontSize: '1.125rem'}}>420€</div>
<div className="mt-1 text-[#6B6B6B] leading-[1.8]" style={{fontSize: '1rem'}}>pour l'ensemble du séminaire</div>
<div className="mt-1 text-[#6B6B6B] leading-[1.8]" style={{fontSize: '0.875rem'}}>(Pauses incluses • Matériel fourni • Verre de l'amitié vendredi soir)</div>
</article>
</div>
</div>
</div>
</section>

<section aria-label="Section Réserver" className="relative overflow-hidden bg-[#E8D7B5]" id="reserver">
<div className="pointer-events-none absolute inset-0">
<div className="parallax absolute -top-24 left-[-6rem] h-[26rem] w-[26rem] rounded-full bg-white/45 blur-3xl" data-parallax="0.45"></div>
<div className="parallax absolute -bottom-24 right-[-7rem] h-[30rem] w-[30rem] rounded-full bg-[#F5F1E8]/70 blur-3xl" data-parallax="0.55"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-20 sm:py-24 lg:py-28 text-center" style={{paddingTop: '7.5rem', paddingBottom: '7.5rem'}}>
<p className="reveal mx-auto max-w-[50rem] italic text-[#1A1A1A] leading-[1.8]" data-reveal="" style={{fontSize: '2rem'}}>
            ÊTES-VOUS PRÊT(E) À VOUS ENGAGER DANS CETTE DYNAMIQUE DE CO-CRÉATION ?
          </p>
<div className="mt-14"></div>
<div className="reveal text-center font-semibold tracking-tight leading-none" data-reveal="" style={{fontSize: '4rem', color: '#B8954F'}}>
            420€
          </div>
<div className="reveal mt-3 text-[#1A1A1A] tracking-tight" data-reveal="" style={{fontSize: '1.5rem'}}>
            Place unique
          </div>
<div className="mt-10"></div>
<div className="reveal flex justify-center" data-reveal="">
<a className="cta group relative inline-flex items-center justify-center rounded-full bg-[#C9A961] text-white shadow-[0_10px_30px_rgba(201,169,97,0.25)] transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-[0_16px_44px_rgba(201,169,97,0.32)] focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2 focus:ring-offset-[#E8D7B5] w-[90%] sm:w-auto" href="#" style={{padding: '1.5rem 3.75rem', fontSize: '1.25rem'}}>
<span className="relative z-10">Réserver maintenant
                <iconify-icon aria-hidden="true" className="text-white" height="22" icon="solar:arrow-right-linear" width="22"></iconify-icon>
</span>
<span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" style={{background: 'linear-gradient(110deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0) 60%)'}}></span>
</a>
</div>
<div className="mt-10"></div>
<p className="reveal mx-auto max-w-[56.25rem] text-center text-[#1A1A1A] leading-[1.8]" data-reveal="" style={{fontSize: '1.125rem'}}>
            Après votre réservation, vous recevrez un e-mail de confirmation avec l'adresse exacte du lieu, les recommandations d'hébergement et toutes les informations pratiques.
          </p>
<div className="mt-10"></div>
<div className="reveal mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3" data-reveal="">
<div className="rounded-2xl border border-[#C9A961]/40 bg-white/55 backdrop-blur-md shadow-[0_4px_20px_rgba(201,169,97,0.10)]" style={{padding: '1.25rem'}}>
<div className="flex items-center justify-center gap-3">
<iconify-icon aria-hidden="true" className="text-[#C9A961]" height="22" icon="solar:shield-check-linear" width="22"></iconify-icon>
<div className="text-sm font-semibold text-[#1A1A1A]" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
                  Paiement sécurisé
                </div>
</div>
<div className="mt-2 text-center text-sm text-[#6B6B6B] leading-[1.6]">
                Transaction chiffrée
              </div>
</div>
<div className="rounded-2xl border border-[#C9A961]/40 bg-white/55 backdrop-blur-md shadow-[0_4px_20px_rgba(201,169,97,0.10)]" style={{padding: '1.25rem'}}>
<div className="flex items-center justify-center gap-3">
<iconify-icon aria-hidden="true" className="text-[#C9A961]" height="22" icon="solar:users-group-two-rounded-linear" width="22"></iconify-icon>
<div className="text-sm font-semibold text-[#1A1A1A]" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
                  15 places
                </div>
</div>
<div className="mt-2 text-center text-sm text-[#6B6B6B] leading-[1.6]">
                Groupe intime &amp; qualitatif
              </div>
</div>
<div className="rounded-2xl border border-[#C9A961]/40 bg-white/55 backdrop-blur-md shadow-[0_4px_20px_rgba(201,169,97,0.10)]" style={{padding: '1.25rem'}}>
<div className="flex items-center justify-center gap-3">
<iconify-icon aria-hidden="true" className="text-[#C9A961]" height="22" icon="solar:mailbox-linear" width="22"></iconify-icon>
<div className="text-sm font-semibold text-[#1A1A1A]" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
                  Support
                </div>
</div>
<div className="mt-2 text-center text-sm text-[#6B6B6B] leading-[1.6]">
                contact@troisiemevoie.fr
              </div>
</div>
</div>
<div className="mt-14"></div>
<p className="reveal mx-auto max-w-[56.25rem] text-center text-[#1A1A1A]/85 leading-[1.8]" data-reveal="" style={{fontSize: '1rem'}}>
            En réservant, vous acceptez de recevoir les informations logistiques liées à l'événement. Aucun spam.
          </p>
</div>
</div>
</section>

<footer aria-label="Pied de page" className="bg-[#1A1A1A] text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-12 sm:py-14">
<div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
<div>
<div className="inline-flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>TV</span>
</span>
<div>
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
                    TROISIÈME VOIE
                  </div>
<div className="text-xs text-white/70">Séminaire • Toulouse</div>
</div>
</div>
<p className="mt-5 max-w-md text-sm text-white/75 leading-[1.8]">
                Une expérience immersive en présentiel pour transformer l'opposition en alliance créatrice, et repartir avec des décisions claires et des actions concrètes.
              </p>
</div>
<div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
<div>
<div className="text-sm font-semibold text-white/90" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Navigation</div>
<ul className="mt-4 space-y-3 text-sm">
<li><a className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded-md px-1 py-1" href="#comprendre">Concept</a></li>
<li><a className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded-md px-1 py-1" href="#programme">Programme</a></li>
<li><a className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded-md px-1 py-1" href="#intervenants">Intervenants</a></li>
<li><a className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded-md px-1 py-1" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold text-white/90" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Contact</div>
<ul className="mt-4 space-y-3 text-sm">
<li>
<a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded-md px-1 py-1" href="mailto:contact@troisiemevoie.fr">
<iconify-icon aria-hidden="true" className="text-white/70" height="18" icon="solar:letter-linear" width="18"></iconify-icon>
                      contact@troisiemevoie.fr
                    </a>
</li>
</ul>
</div>
<div className="col-span-2 sm:col-span-1">
<div className="text-sm font-semibold text-white/90" style={{fontFamily: 'Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Rappels</div>
<ul className="mt-4 space-y-3 text-sm text-white/70 leading-[1.7]">
<li>11 &amp; 12 avril 2026</li>
<li>Groupe limité à 15</li>
<li>Adresse communiquée après inscription</li>
</ul>
</div>
</div>
</div>
<div className="mt-10 h-px w-full bg-white/10"></div>
<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-white/55">
              © <span id="year"></span> Troisième Voie. Tous droits réservés.
            </div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9A961]" href="#hero">
                Haut de page
                <iconify-icon aria-hidden="true" className="text-white/80" height="16" icon="solar:alt-arrow-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</footer>
</main>

<style>
    html { scroll-behavior: smooth; }

    /* reveal */
    [data-reveal] { opacity: 0; transform: translateY(18px); transition: opacity 800ms ease, transform 800ms ease; }
    .is-visible[data-reveal] { opacity: 1; transform: translateY(0); }

    [data-stagger] { opacity: 0; transform: translateY(12px); transition: opacity 700ms ease, transform 700ms ease; }
    .is-visible [data-stagger].is-stagger-visible { opacity: 1; transform: translateY(0); }

    /* reduce motion */
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      [data-reveal], [data-stagger] { transition: none !important; transform: none !important; }
      .parallax { transform: none !important; }
      .card-tilt { transform: none !important; }
      .cta { transition: none !important; }
    }
  </style>


    </>
  );
}
