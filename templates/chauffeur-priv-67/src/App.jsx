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
},
colors: {
gold: {
400: '#D4AF37',
500: '#C5A028',
600: '#B08D22',
},
dark: {
950: '#050505', // Deepest Black
900: '#0A0A0A', // Surface
800: '#121212', // Card
700: '#1C1C1C', // Border/Stroke
}
},
animation: {
'scroll-infinite': 'scrollInfinite linear infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 4s linear infinite',
},
keyframes: {
scrollInfinite: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
scan: {
'0%': { top: '-10%', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '110%', opacity: '0' },
}
}
}
}
}



      lucide.createIcons();

      // Reveal on Scroll
      const revealElements = document.querySelectorAll('.reveal');
      const revealOnScroll = () => {
          const windowHeight = window.innerHeight;
          const elementVisible = 150;
          revealElements.forEach((reveal) => {
              const elementTop = reveal.getBoundingClientRect().top;
              if (elementTop < windowHeight - elementVisible) {
                  reveal.classList.add('active');
              }
          });
      };
      window.addEventListener('scroll', revealOnScroll);
      revealOnScroll();

      // Navbar
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('bg-dark-950/90', 'backdrop-blur-xl', 'border-b', 'border-white/5');
          } else {
              navbar.classList.remove('bg-dark-950/90', 'backdrop-blur-xl', 'border-b', 'border-white/5');
          }
      });

      // Mobile Menu
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const closeMenuBtn = document.getElementById('close-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      function toggleMenu() {
          mobileMenu.classList.toggle('translate-x-full');
          document.body.classList.toggle('overflow-hidden');
      }

      function closeMenu() {
          mobileMenu.classList.add('translate-x-full');
          document.body.classList.remove('overflow-hidden');
      }

      if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
      if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);

      // Target ALL links inside the mobile menu to ensure they close it
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
          link.addEventListener('click', closeMenu);
      });

      // FAQ
      const faqs = document.querySelectorAll('.faq-toggle');
      faqs.forEach(faq => {
        faq.addEventListener('click', (e) => {
          const button = e.currentTarget.querySelector('button');
          const parent = e.currentTarget;
          const content = parent.querySelector('.faq-content');

          document.querySelectorAll('.faq-toggle').forEach(otherFaq => {
             if (otherFaq !== parent) {
                 otherFaq.classList.remove('active');
                 otherFaq.querySelector('button').classList.remove('active');
                 otherFaq.querySelector('.faq-content').style.maxHeight = null;
             }
          });

          if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            button.classList.remove('active');
            content.style.maxHeight = null;
          } else {
            parent.classList.add('active');
            button.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      });

      // Stats
      const stats = document.querySelectorAll('[data-target]');
      let hasAnimatedStats = false;
      const animateStats = () => {
        if(hasAnimatedStats) return;
        const triggerBottom = window.innerHeight / 5 * 4;
        const statsSection = stats[0].closest('section');
        const sectionTop = statsSection.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            hasAnimatedStats = true;
            stats.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText.replace('+', '').replace('%', '');
                    const speed = 200;
                    const inc = target / speed;
                    if(count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target + (counter.getAttribute('data-target') > 100 ? '+' : (counter.getAttribute('data-target') < 1000 ? (counter.nextElementSibling.innerText.includes('%') ? '%' : '') : '+'));
                    }
                };
                updateCount();
            });
        }
      }
      window.addEventListener('scroll', animateStats);
    
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
      

<header className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="group relative flex items-center justify-center px-2 py-1 transition-all duration-300" href="index.html">
<span className="font-['Audiowide'] text-2xl font-bold uppercase tracking-tighter italic -skew-x-[10deg] transition-all duration-100 group-hover:text-gold-400 text-glow-hover text-white">
            AXIS
          </span>
</a>
<nav className="hidden md:flex items-center gap-8 bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 shadow-lg">
<a className="text-sm font-medium text-white hover:text-gold-400 transition-colors" href="#">
            Accueil
          </a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#vehicules">
            Nos Véhicules
          </a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#fonctionnement">
            Comment Ça Marche
          </a>
</nav>
<a className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all group hover:border-gold-400/30" href="tel:0132345465">
<i className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" data-lucide="phone" strokeWidth="1.5"></i>
<span>Appelez le 01.32.34.54.65</span>
</a>
<button className="md:hidden text-white hover:text-gold-400 transition-colors" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="fixed inset-0 bg-dark-950/95 backdrop-blur-2xl z-40 transform translate-x-full transition-transform duration-300 flex items-center justify-center" id="mobile-menu">
<button className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-white/5 p-2 rounded-full border border-white/5 transition-colors" id="close-menu-btn">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>

<div className="w-full max-w-md px-6 flex flex-col items-center">

<div className="w-12 h-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent rounded-full mb-10"></div>
<a className="mobile-link group w-full max-w-xs mb-4 relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-400/30 backdrop-blur-md py-4 px-6 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gold-400/5" href="#">
<span className="text-lg font-medium text-white tracking-tight group-hover:text-gold-400 transition-colors">
            Accueil
          </span>
</a>
<a className="mobile-link group w-full max-w-xs mb-4 relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-400/30 backdrop-blur-md py-4 px-6 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gold-400/5" href="#vehicules">
<span className="text-lg font-medium text-zinc-300 tracking-tight group-hover:text-white transition-colors">
            Nos Véhicules
          </span>
</a>
<a className="mobile-link group w-full max-w-xs mb-4 relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-400/30 backdrop-blur-md py-4 px-6 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gold-400/5" href="#fonctionnement">
<span className="text-lg font-medium text-zinc-300 tracking-tight group-hover:text-white transition-colors">
            Comment Ça Marche
          </span>
</a>

<a className="mobile-link group w-full max-w-xs mt-4 relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-400/50 backdrop-blur-md py-4 px-6 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold-400/10" href="tel:0132345465">
<div className="flex items-center justify-center gap-3">
<i className="w-5 h-5 text-gold-400" data-lucide="phone" strokeWidth="1.5"></i>
<span className="text-lg font-semibold text-white tracking-tight group-hover:text-gold-400 transition-colors">
              01.32.34.54.65
            </span>
</div>
</a>
</div>
</div>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Car Night City" className="w-full h-full object-cover opacity-60 scale-105" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-dark-950/20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 w-full">
<div className="max-w-3xl pt-10 flex flex-col items-center text-center md:block md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-8 animate-[fadeInUp_0.8s_ease-out_forwards]">
<span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
            Disponible 24h/7j
          </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            AXIS :
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              Votre Trajet, Notre Priorité.
            </span>
</h1>
<h2 className="text-xl lg:text-2xl text-zinc-400 font-light leading-relaxed mb-10 max-w-xl opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
            Plus qu'un taxi, un service sur mesure. Tarif fixe garanti et
            paiement sécurisé, sans mauvaise surprise.
          </h2>
<div className="flex flex-col sm:flex-row gap-5 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
<a className="inline-flex justify-center items-center gap-3 bg-gold-400 hover:bg-gold-500 text-dark-950 px-8 py-4 rounded-lg text-base font-semibold transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-400/20 group" href="tel:0132345465">
<span>Commander Votre Chauffeur Privé</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="mt-12 flex flex-wrap gap-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards] justify-center md:justify-start">
<div className="flex items-center gap-3 group cursor-default">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold-400/30 transition-colors">
<i className="w-5 h-5 text-gold-400" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-zinc-300">
                Paiement Sécurisé
                <br/>
                SumUp
              </span>
</div>
<div className="flex items-center gap-3 group cursor-default">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold-400/30 transition-colors">
<i className="w-5 h-5 text-gold-400" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-zinc-300">
                Devis
                <br/>
                Instantané
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-black/20 backdrop-blur-md border-b border-white/5 overflow-hidden z-20 relative">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center reveal">
<span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          Nos Partenaires de Confiance
        </span>
</div>
<div className="relative flex overflow-hidden mask-linear-fade">
<div className="flex items-center gap-16 animate-[scrollInfinite_20s_linear_infinite] whitespace-nowrap px-8">

<span className="text-xl font-bold text-white/80 font-serif opacity-50 hover:opacity-100 transition-opacity">
            HOTEL RITZ
          </span>
<span className="text-xl font-bold text-white/80 opacity-50 hover:opacity-100 transition-opacity">
            SumUp
          </span>
<span className="text-xl font-bold text-white/80 tracking-widest opacity-50 hover:opacity-100 transition-opacity">
            AIRFRANCE
          </span>
<span className="text-xl font-bold text-white/80 opacity-50 hover:opacity-100 transition-opacity">
            AMEX
          </span>
<span className="text-xl font-bold text-white/80 font-serif opacity-50 hover:opacity-100 transition-opacity">
            FOUR SEASONS
          </span>
<span className="text-xl font-bold text-white/80 opacity-50 hover:opacity-100 transition-opacity">
            MICHELIN
          </span>
<span className="text-xl font-bold text-white/80 font-serif opacity-50 hover:opacity-100 transition-opacity">
            PLAZA ATHÉNÉE
          </span>

<span className="text-xl font-bold text-white/80 font-serif opacity-50 hover:opacity-100 transition-opacity">
            HOTEL RITZ
          </span>
<span className="text-xl font-bold text-white/80 opacity-50 hover:opacity-100 transition-opacity">
            SumUp
          </span>
<span className="text-xl font-bold text-white/80 tracking-widest opacity-50 hover:opacity-100 transition-opacity">
            AIRFRANCE
          </span>
<span className="text-xl font-bold text-white/80 opacity-50 hover:opacity-100 transition-opacity">
            AMEX
          </span>
<span className="text-xl font-bold text-white/80 font-serif opacity-50 hover:opacity-100 transition-opacity">
            FOUR SEASONS
          </span>
<span className="text-xl font-bold text-white/80 opacity-50 hover:opacity-100 transition-opacity">
            MICHELIN
          </span>
<span className="text-xl font-bold text-white/80 font-serif opacity-50 hover:opacity-100 transition-opacity">
            PLAZA ATHÉNÉE
          </span>
</div>
</div>
</section>

<section className="py-24 bg-dark-950 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
            Pourquoi Choisir AXIS ?
          </h2>
<div className="w-20 h-1 bg-gold-400 mx-auto rounded-full opacity-70"></div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl glass-card transition-all duration-500 group reveal delay-100 flex flex-col items-center text-center md:items-start md:text-left">
<div className="w-14 h-14 bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:shadow-lg group-hover:shadow-gold-400/5 transition-all">
<i className="w-7 h-7 text-white group-hover:text-gold-400 transition-colors" data-lucide="star" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              Service Premium
            </h3>
<p className="text-zinc-400 leading-relaxed font-light">
              Une expérience de voyage inégalée, du premier contact à votre
              destination finale. Discrétion et courtoisie garanties.
            </p>
</div>
<div className="p-8 rounded-2xl glass-card transition-all duration-500 group reveal delay-200 flex flex-col items-center text-center md:items-start md:text-left">
<div className="w-14 h-14 bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:shadow-lg group-hover:shadow-gold-400/5 transition-all">
<i className="w-7 h-7 text-white group-hover:text-gold-400 transition-colors" data-lucide="tag" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              Tarif Fixe Garanti
            </h3>
<p className="text-zinc-400 leading-relaxed font-light">
              Plus de mauvaises surprises. Le prix que nous vous annonçons au
              téléphone est le prix exact que vous payez.
            </p>
</div>
<div className="p-8 rounded-2xl glass-card transition-all duration-500 group reveal delay-300 flex flex-col items-center text-center md:items-start md:text-left">
<div className="w-14 h-14 bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:shadow-lg group-hover:shadow-gold-400/5 transition-all">
<i className="w-7 h-7 text-white group-hover:text-gold-400 transition-colors" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              Sécurité &amp; Fiabilité
            </h3>
<p className="text-zinc-400 leading-relaxed font-light">
              Des chauffeurs professionnels agréés et un paiement 100% sécurisé
              via la solution SumUp.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900 border-y border-white/5" id="fonctionnement">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<span className="text-gold-400 font-medium tracking-wide text-xs uppercase mb-3 block">
            Simplicité Absolue
          </span>
<h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            Votre Réservation en 3 Étapes
          </h2>
</div>
<div className="relative grid md:grid-cols-3 gap-12">
<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 -z-10"></div>
<div className="relative text-center reveal group">
<div className="w-24 h-24 mx-auto bg-dark-950 border border-zinc-800 rounded-full flex items-center justify-center mb-8 shadow-2xl z-10 relative group-hover:border-gold-400/50 transition-colors duration-500">
<i className="w-10 h-10 text-white group-hover:text-gold-400 transition-colors" data-lucide="phone" strokeWidth="1.5"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center text-dark-950 font-bold text-sm">
                1
              </div>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              L'Appel Essentiel
            </h3>
<p className="text-zinc-400 max-w-xs mx-auto font-light">
              Contactez-nous au
              <span className="text-white font-medium">01.32.34.54.65</span>
              . Décrivez votre trajet, vos besoins et vos préférences.
            </p>
</div>
<div className="relative text-center reveal delay-100 group">
<div className="w-24 h-24 mx-auto bg-dark-950 border border-zinc-800 rounded-full flex items-center justify-center mb-8 shadow-2xl z-10 relative group-hover:border-gold-400/50 transition-colors duration-500">
<i className="w-10 h-10 text-white group-hover:text-gold-400 transition-colors" data-lucide="calculator" strokeWidth="1.5"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center text-dark-950 font-bold text-sm">
                2
              </div>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              Devis Personnalisé
            </h3>
<p className="text-zinc-400 max-w-xs mx-auto font-light">
              Nous calculons votre tarif fixe exact en temps réel. Pas de
              compteur, pas de stress.
            </p>
</div>
<div className="relative text-center reveal delay-200 group">
<div className="w-24 h-24 mx-auto bg-dark-950 border border-zinc-800 rounded-full flex items-center justify-center mb-8 shadow-2xl z-10 relative group-hover:border-gold-400/50 transition-colors duration-500">
<i className="w-10 h-10 text-white group-hover:text-gold-400 transition-colors" data-lucide="link" strokeWidth="1.5"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center text-dark-950 font-bold text-sm">
                3
              </div>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              Paiement SumUp
            </h3>
<p className="text-zinc-400 max-w-xs mx-auto font-light">
              Vous recevez un lien de paiement sécurisé par SMS. Confirmez votre
              course en toute sécurité.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-950" id="vehicules">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
            Découvrez Nos Véhicules d'Exception
          </h2>
<p className="text-lg text-zinc-400 font-light">
            Une flotte premium adaptée à tous vos besoins de déplacement.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group rounded-2xl overflow-hidden glass-card transition-all duration-500 reveal">
<div className="aspect-[16/10] bg-zinc-800 relative overflow-hidden">
<img alt="Berline Standard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
</div>
<div className="p-8 flex flex-col items-center text-center md:items-start md:text-left">
<h3 className="text-2xl font-semibold text-white mb-3">
                Berline Standard
              </h3>
<p className="text-zinc-400 mb-8 min-h-[3rem] font-light">
                Idéale pour vos déplacements professionnels ou personnels en
                ville. Confort et efficacité.
              </p>
<a className="w-full flex justify-center items-center gap-2 bg-dark-800 hover:bg-zinc-800 text-white border border-white/5 py-4 rounded-lg font-medium transition-all" href="tel:0132345465">
                Réserver Standard
                <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="group rounded-2xl overflow-hidden hover:ring-gold-400 transition-all duration-500 relative transform md:-translate-y-4 reveal delay-100 shadow-2xl shadow-black glass-card border-gold-400/40">
<div className="absolute top-4 right-4 bg-gold-400 text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide z-10 shadow-lg">
              Meilleur Choix
            </div>
<div className="aspect-[16/10] bg-zinc-800 relative overflow-hidden">
<img alt="Berline Affaires" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent opacity-60"></div>
</div>
<div className="p-8">
<h3 className="text-2xl font-semibold text-white mb-3">
                Berline Affaires
              </h3>
<p className="text-zinc-400 mb-8 min-h-[3rem] font-light">
                Pour les moments où le prestige compte. Voyagez dans le luxe
                avec des sièges en cuir.
              </p>
<a className="w-full flex justify-center items-center gap-2 bg-gold-400 hover:bg-gold-500 text-black py-4 rounded-lg font-semibold transition-all shadow-lg shadow-gold-400/10" href="tel:0132345465">
                Réserver Affaires
                <i className="w-4 h-4 fill-black" data-lucide="star" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="group rounded-2xl overflow-hidden glass-card transition-all duration-500 reveal delay-200">
<div className="aspect-[16/10] bg-zinc-800 relative overflow-hidden">
<img alt="Van XL" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
</div>
<div className="p-8">
<h3 className="text-2xl font-semibold text-white mb-3">Van XL</h3>
<p className="text-zinc-400 mb-8 min-h-[3rem] font-light">
                Parfait pour les groupes jusqu'à 7 passagers, vos transferts
                aéroport avec bagages.
              </p>
<a className="w-full flex justify-center items-center gap-2 bg-dark-800 hover:bg-zinc-800 text-white border border-white/5 py-4 rounded-lg font-medium transition-all" href="tel:0132345465">
                Réserver Van XL
                <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative z-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 reveal">
<div className="flex flex-col items-center justify-center text-center">
<span className="text-4xl md:text-5xl font-semibold text-gold-400 tracking-tight tabular-nums" data-target="5000">
              0
            </span>
<span className="text-xs md:text-sm text-zinc-400 mt-2 uppercase tracking-wide">
              Courses Réalisées +
            </span>
</div>
<div className="flex flex-col items-center justify-center text-center">
<span className="text-4xl md:text-5xl font-semibold text-gold-400 tracking-tight tabular-nums" data-target="98">
              0
            </span>
<span className="text-xs md:text-sm text-zinc-400 mt-2 uppercase tracking-wide">
              % Ponctualité
            </span>
</div>
<div className="flex flex-col items-center justify-center text-center">
<span className="text-4xl md:text-5xl font-semibold text-gold-400 tracking-tight tabular-nums" data-target="15">
              0
            </span>
<span className="text-xs md:text-sm text-zinc-400 mt-2 uppercase tracking-wide">
              Min Attente Moy.
            </span>
</div>
<div className="flex flex-col items-center justify-center text-center">
<span className="text-4xl md:text-5xl font-semibold text-gold-400 tracking-tight tabular-nums" data-target="100">
              0
            </span>
<span className="text-xs md:text-sm text-zinc-400 mt-2 uppercase tracking-wide">
              % Prix Fixe
            </span>
</div>
</div>
</div>
</section>

<section className="relative w-full min-h-[85vh] bg-fixed bg-cover bg-center flex items-center justify-center border-b border-white/5" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1562141970-d8687ba85750?q=80&amp'}}>
<div className="absolute inset-0 bg-dark-950/70 backdrop-blur-[2px]"></div>
<div className="relative z-10 p-6 w-full max-w-4xl mx-auto reveal">
<div className="glass-card rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-black border border-white/10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center text-gold-400 mb-8 border border-white/5">
<i className="w-8 h-8" data-lucide="wifi" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Le Silence est le Nouveau Luxe.
          </h2>
<p className="text-lg md:text-xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Wi-Fi à bord, bouteilles d'eau, chargeurs et insonorisation totale.
            Profitez du voyage dans un cocon de sérénité absolue.
          </p>
<a className="inline-block px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-full font-medium transition-all backdrop-blur-md" href="tel:0132345465">
            Réserver ce confort
          </a>
</div>
</div>
</section>

<section className="relative h-[600px] w-full overflow-hidden bg-dark-950 border-b border-white/5">
<div className="absolute inset-0 grayscale opacity-30">
<img alt="Map Paris" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
<div className="absolute inset-0 max-w-7xl mx-auto px-6 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative flex items-center justify-center w-8 h-8">
<span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-20 animate-ping"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.6)]"></span>
<div className="absolute top-6 whitespace-nowrap text-[10px] font-bold tracking-widest text-gold-400 uppercase">
              Paris Centre
            </div>
</div>
</div>
<div className="absolute top-[30%] left-[60%]">
<div className="relative flex items-center justify-center w-8 h-8">
<span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-20 animate-ping delay-300"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.6)]"></span>
<div className="absolute top-6 whitespace-nowrap text-[10px] font-bold tracking-widest text-white/70 uppercase">
              CDG Airport
            </div>
</div>
</div>
<div className="absolute top-[70%] left-[55%]">
<div className="relative flex items-center justify-center w-8 h-8">
<span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-20 animate-ping delay-700"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.6)]"></span>
<div className="absolute top-6 whitespace-nowrap text-[10px] font-bold tracking-widest text-white/70 uppercase">
              Orly Airport
            </div>
</div>
</div>
<div className="absolute top-[40%] left-[40%]">
<div className="relative flex items-center justify-center w-8 h-8">
<span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-20 animate-ping delay-100"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.6)]"></span>
<div className="absolute top-6 whitespace-nowrap text-[10px] font-bold tracking-widest text-white/70 uppercase">
              La Défense
            </div>
</div>
</div>
</div>
<div className="absolute bottom-12 left-6 right-6 md:left-auto md:right-12 md:bottom-12 md:max-w-md z-20 reveal">
<div className="glass-card p-6 rounded-2xl border-l-4 border-l-gold-400 flex items-start gap-4 shadow-2xl shadow-black/50">
<div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-gold-400" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="text-white font-semibold text-lg">
              Zone d'Intervention
            </h3>
<p className="text-zinc-400 text-sm font-light mt-1">
              Couverture complète de Paris &amp; Île-de-France. Transferts gares
              et aéroports assurés 24h/24 et 7j/7.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-950 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
            L'Excellence en Détail
          </h2>
<p className="text-zinc-400 font-light">
            Une approche moderne du transport privé.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px]">

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-500 reveal">
<div className="absolute right-0 top-0 w-64 h-64 bg-gold-400/10 rounded-full blur-[80px] group-hover:bg-gold-400/20 transition-all"></div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gold-400 mb-4">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">
                  Disponibilité 24/7
                </h3>
<p className="text-zinc-400 font-light max-w-sm">
                  De jour comme de nuit, dimanche et jours fériés, nous assurons
                  vos déplacements sans interruption.
                </p>
</div>
</div>
</div>

<div className="md:row-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-500 reveal delay-100 flex flex-col items-center text-center justify-center border-gold-400/20">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
<i className="w-8 h-8" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">
              Paiement SumUp Sécurisé
            </h3>
<p className="text-zinc-400 font-light text-sm mb-8">
              Technologie bancaire de pointe pour protéger vos données.
            </p>
<div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
<div className="absolute w-28 h-28 bg-gold-400/10 rounded-full blur-2xl animate-pulse-slow"></div>

<div className="relative w-48 h-28 scale-[0.85] md:scale-100 max-w-full mx-auto origin-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-xl flex flex-col p-4 justify-between transition-all duration-500 group-hover:border-gold-400/40 group-hover:shadow-lg group-hover:shadow-gold-400/5 group-hover:-translate-y-1">
<div className="flex justify-between items-start">
<div className="w-8 h-6 rounded bg-gradient-to-br from-gold-300 to-gold-600 shadow-sm border border-white/20"></div>
<i className="w-5 h-5 text-white/20 rotate-90" data-lucide="wifi"></i>
</div>
<div className="flex gap-2 opacity-30 mt-auto">
<div className="w-8 h-1.5 bg-white rounded-full"></div>
<div className="w-4 h-1.5 bg-white rounded-full"></div>
</div>
<div className="absolute -top-3 -right-3 w-10 h-10 bg-dark-950 border border-gold-400 text-gold-400 rounded-full flex items-center justify-center shadow-xl z-20">
<i className="w-5 h-5" data-lucide="lock" strokeWidth="2"></i>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-6 relative overflow-hidden group hover:bg-white/10 transition-all duration-500 reveal delay-200">
<div className="flex flex-col h-full justify-between">
<i className="w-8 h-8 text-gold-400 mb-4" data-lucide="user-check" strokeWidth="1.5"></i>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">
                  Chauffeurs Agréés
                </h3>
<p className="text-zinc-500 text-sm font-light mt-1">
                  Professionnels VTC vérifiés.
                </p>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-6 relative overflow-hidden group hover:bg-white/10 transition-all duration-500 reveal delay-300">
<div className="flex flex-col h-full justify-between">
<i className="w-8 h-8 text-gold-400 mb-4" data-lucide="car" strokeWidth="1.5"></i>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">
                  Véhicules Récents
                </h3>
<p className="text-zinc-500 text-sm font-light mt-1">
                  Flotte &lt; 3 ans d'ancienneté.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-900 border-y border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="text-center md:text-left reveal order-2 md:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 text-gold-400 text-xs font-medium uppercase tracking-wider mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Technologie SumUp
            </div>
<h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
              Reçois ton lien,
              <br/>
<span className="text-zinc-500">clique, paie.</span>
</h2>
<p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
              Fini le besoin d'espèces ou la recherche d'un distributeur.
              Recevez un lien SMS sécurisé instantanément. Vous validez le
              paiement sur votre propre téléphone en quelques secondes.
            </p>
<ul className="space-y-4 mb-8 text-left inline-block">
<li className="flex items-center gap-3 text-zinc-300">
<i className="w-5 h-5 text-gold-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="font-light">Lien chiffré unique par course</span>
</li>
<li className="flex items-center gap-3 text-zinc-300">
<i className="w-5 h-5 text-gold-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="font-light">
                  Compatible Apple Pay &amp; Google Pay
                </span>
</li>
<li className="flex items-center gap-3 text-zinc-300">
<i className="w-5 h-5 text-gold-400" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="font-light">Reçu automatique par email</span>
</li>
</ul>
<a className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors" href="tel:0132345465">
              Essayer Maintenant
            </a>
</div>
<div className="flex justify-center reveal delay-200 order-1 md:order-2">
<div className="relative w-[280px] h-[550px] bg-black border-4 border-zinc-800 rounded-[2.5rem] shadow-2xl shadow-gold-400/10 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700">
<div className="absolute top-0 w-full h-6 bg-black z-20 flex justify-between px-6 items-center pt-2">
<div className="text-[10px] text-white font-bold">9:41</div>
<div className="flex gap-1">
<div className="w-3 h-3 border border-white rounded-sm"></div>
</div>
</div>
<div className="w-full h-full bg-dark-900 pt-12 px-6 flex flex-col items-center relative">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-8 shadow-lg">
<svg className="w-8 h-8 text-blue-600" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path>
</svg>
</div>
<div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
<i className="w-8 h-8 text-green-500" data-lucide="check" strokeWidth="3"></i>
</div>
<h3 className="text-white text-xl font-semibold mb-1">
                  Paiement Réussi
                </h3>
<p className="text-zinc-500 text-sm mb-8">Transaction #83921</p>
<div className="text-4xl font-bold text-white mb-2">55,00 €</div>
<div className="text-zinc-500 text-sm mb-12">
                  AXIS - Course Paris
                </div>
<div className="w-full py-4 border-t border-white/5 flex justify-between text-sm">
<span className="text-zinc-400">Moyen de paiement</span>
<span className="text-white flex items-center gap-2">
<i className="w-3 h-3" data-lucide="credit-card"></i>
                    Visa •••• 4242
                  </span>
</div>
<button className="mt-auto mb-8 w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-sm">
                  Télécharger le reçu
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-950 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
            Le Choix de l'Excellence
          </h2>
<p className="text-zinc-400 font-light">
            Pourquoi nos clients ne reviennent pas en arrière.
          </p>
</div>
<div className="glass-card rounded-3xl overflow-hidden border border-white/5 shadow-2xl reveal delay-100">
<div className="grid grid-cols-1 md:grid-cols-3">

<div className="hidden md:block bg-white/[0.02] p-6 border-r border-white/5">
<div className="h-16 flex items-center text-zinc-500 font-medium text-sm uppercase tracking-wider">
                Services
              </div>
<div className="h-16 flex items-center text-zinc-300 font-light border-t border-white/5">
                Prix Fixe Garanti
              </div>
<div className="h-16 flex items-center text-zinc-300 font-light border-t border-white/5">
                Paiement Sécurisé
              </div>
<div className="h-16 flex items-center text-zinc-300 font-light border-t border-white/5">
                Attente Gratuite (15min)
              </div>
<div className="h-16 flex items-center text-zinc-300 font-light border-t border-white/5">
                Véhicules Premium
              </div>
</div>

<div className="bg-gradient-to-b from-gold-400/10 to-transparent p-6 border-r border-white/5 relative">
<div className="absolute top-0 left-0 w-full h-1 bg-gold-400"></div>

<div className="h-16 flex items-center text-gold-400 font-['Audiowide'] italic -skew-x-[10deg] font-bold text-lg tracking-tight">
                TAXIPARISIEN
              </div>
<div className="h-16 flex items-center border-t border-white/5">
<span className="md:hidden text-zinc-500 text-xs mr-auto">
                  Prix Fixe
                </span>
<div className="flex items-center gap-2 text-white font-medium">
<i className="w-5 h-5 text-gold-400 fill-gold-400/10" data-lucide="check-circle-2"></i>
<span>Oui, garanti</span>
</div>
</div>
<div className="h-16 flex items-center border-t border-white/5">
<span className="md:hidden text-zinc-500 text-xs mr-auto">
                  Paiement
                </span>
<div className="flex items-center gap-2 text-white font-medium">
<i className="w-5 h-5 text-gold-400 fill-gold-400/10" data-lucide="check-circle-2"></i>
<span>SumUp / Lien</span>
</div>
</div>
<div className="h-16 flex items-center border-t border-white/5">
<span className="md:hidden text-zinc-500 text-xs mr-auto">
                  Attente
                </span>
<div className="flex items-center gap-2 text-white font-medium">
<i className="w-5 h-5 text-gold-400 fill-gold-400/10" data-lucide="check-circle-2"></i>
<span>Incluse</span>
</div>
</div>
<div className="h-16 flex items-center border-t border-white/5">
<span className="md:hidden text-zinc-500 text-xs mr-auto">
                  Flotte
                </span>
<div className="flex items-center gap-2 text-white font-medium">
<i className="w-5 h-5 text-gold-400 fill-gold-400/10" data-lucide="check-circle-2"></i>
<span>Berline &amp; Van</span>
</div>
</div>
</div>

<div className="bg-black/20 p-6 text-zinc-500">
<div className="h-16 flex items-center font-medium">
                Autres Apps / Taxis
              </div>
<div className="h-16 flex items-center border-t border-white/5 group">
<span className="md:hidden text-zinc-600 text-xs mr-auto">
                  Prix Fixe
                </span>
<div className="flex items-center gap-2 group-hover:text-red-400 transition-colors">
<i className="w-5 h-5" data-lucide="x-circle"></i>
<span>Variable</span>
</div>
</div>
<div className="h-16 flex items-center border-t border-white/5 group">
<span className="md:hidden text-zinc-600 text-xs mr-auto">
                  Paiement
                </span>
<div className="flex items-center gap-2 group-hover:text-yellow-400 transition-colors">
<i className="w-5 h-5" data-lucide="alert-circle"></i>
<span>Incertain</span>
</div>
</div>
<div className="h-16 flex items-center border-t border-white/5 group">
<span className="md:hidden text-zinc-600 text-xs mr-auto">
                  Attente
                </span>
<div className="flex items-center gap-2 group-hover:text-red-400 transition-colors">
<i className="w-5 h-5" data-lucide="x-circle"></i>
<span>Payante</span>
</div>
</div>
<div className="h-16 flex items-center border-t border-white/5 group">
<span className="md:hidden text-zinc-600 text-xs mr-auto">
                  Flotte
                </span>
<div className="flex items-center gap-2 group-hover:text-yellow-400 transition-colors">
<i className="w-5 h-5" data-lucide="alert-circle"></i>
<span>Aléatoire</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[300vh] bg-dark-950">
<div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">

<div className="relative w-full max-w-[400px] h-full bg-zinc-900 border-x border-white/5 shadow-2xl z-10 overflow-hidden">

<div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/asphalt-dark.png\')'}}></div>

<div className="absolute inset-0 flex justify-center">
<div className="w-1 h-full bg-[linear-gradient(to_bottom,transparent_50%,rgba(212,175,55,0.6)_50%)] bg-[length:1px_100px] animate-road-move"></div>
</div>

<div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/80 to-transparent"></div>
<div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/80 to-transparent"></div>
</div>

<div className="absolute z-20 drop-shadow-[0_30px_30px_rgba(0,0,0,0.9)] scale-110 md:scale-125">
<img alt="AXIS Car" className="w-24 md:w-32 h-auto object-contain brightness-75 contrast-125 grayscale-[20%]" src="https://i.pinimg.com/736x/07/78/e2/0778e21205c4c247f827617246513add.jpg"/>

<div className="absolute top-[85%] left-1 w-12 h-64 bg-white/10 blur-2xl rounded-full skew-x-[5deg] mix-blend-screen opacity-60"></div>
<div className="absolute top-[85%] right-1 w-12 h-64 bg-white/10 blur-2xl rounded-full -skew-x-[5deg] mix-blend-screen opacity-60"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950 pointer-events-none z-30"></div>
<div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-transparent to-dark-950/90 pointer-events-none z-30"></div>
</div>

<div className="absolute top-[20%] left-[5%] w-64 h-64 bg-gold-400/10 rounded-full blur-[80px] mix-blend-screen pointer-events-none"></div>
<div className="absolute top-[45%] right-[5%] w-80 h-80 bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
<div className="absolute top-[75%] left-[10%] w-56 h-56 bg-red-900/10 rounded-full blur-[80px] mix-blend-screen pointer-events-none"></div>

<div className="absolute top-[25%] w-full text-center z-40 pointer-events-none px-6">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight drop-shadow-lg">
          Le Chemin Vers l'Excellence.
        </h2>
</div>
<div className="absolute top-[70%] w-full text-center z-40 pointer-events-none px-6">
<div className="inline-block px-8 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/5 shadow-2xl">
<p className="text-xl md:text-2xl text-zinc-300 font-light">
            Détendez-vous.
            <span className="text-gold-400 font-semibold">AXIS</span>
            s'occupe de la route.
          </p>
</div>
</div>
</section>
<section className="py-24 bg-dark-950 border-t border-white/5 overflow-hidden relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-400/5 via-transparent to-transparent opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center reveal">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
          Ce que nos Clients Disent
        </h2>
<div className="w-20 h-1 bg-gold-400 mx-auto rounded-full opacity-70 mb-6"></div>
<p className="text-zinc-400 font-light max-w-2xl mx-auto">
          La satisfaction de nos passagers est notre meilleure publicité.
        </p>
</div>
<div className="relative w-full mask-linear-fade">
<div className="flex gap-8 w-max pause-on-hover animate-[scrollInfinite_60s_linear_infinite]">

<div className="w-[350px] md:w-[420px] p-8 rounded-3xl liquid-card flex flex-col gap-5 group transition-transform duration-500 hover:scale-[1.02]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-yellow-700 p-[2px]">
<div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  SL
                </div>
</div>
<div>
<div className="text-white font-semibold">Sophie L.</div>
<div className="text-xs text-gold-400 uppercase tracking-wide">
                  CEO Tech
                </div>
</div>
</div>
<p className="text-zinc-300 font-light leading-relaxed italic">
              "Service impeccable. Le WiFi à bord est un vrai plus pour
              travailler pendant mes trajets vers La Défense."
            </p>
<div className="flex gap-1 text-gold-400 mt-auto">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<div className="w-[350px] md:w-[420px] p-8 rounded-3xl liquid-card flex flex-col gap-5 group transition-transform duration-500 hover:scale-[1.02]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-yellow-700 p-[2px]">
<div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  MD
                </div>
</div>
<div>
<div className="text-white font-semibold">Marc D.</div>
<div className="text-xs text-gold-400 uppercase tracking-wide">
                  Touriste
                </div>
</div>
</div>
<p className="text-zinc-300 font-light leading-relaxed italic">
              "Visite de Paris inoubliable. Le chauffeur connaissait tous les
              recoins et l'histoire de la ville."
            </p>
<div className="flex gap-1 text-gold-400 mt-auto">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>

<div className="w-[350px] md:w-[420px] p-8 rounded-3xl liquid-card flex flex-col gap-5 group transition-transform duration-500 hover:scale-[1.02]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-yellow-700 p-[2px]">
<div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  TG
                </div>
</div>
<div>
<div className="text-white font-semibold">Thomas G.</div>
<div className="text-xs text-gold-400 uppercase tracking-wide">
                  Entrepreneur
                </div>
</div>
</div>
<p className="text-zinc-300 font-light leading-relaxed italic">
              "Facture instantanée et TVA récupérable. Service très pro,
              efficace pour le business."
            </p>
<div className="flex gap-1 text-gold-400 mt-auto">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>

<div className="w-[350px] md:w-[420px] p-8 rounded-3xl liquid-card flex flex-col gap-5 group transition-transform duration-500 hover:scale-[1.02]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-yellow-700 p-[2px]">
<div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  SL
                </div>
</div>
<div>
<div className="text-white font-semibold">Sophie L.</div>
<div className="text-xs text-gold-400 uppercase tracking-wide">
                  CEO Tech
                </div>
</div>
</div>
<p className="text-zinc-300 font-light leading-relaxed italic">
              "Service impeccable. Le WiFi à bord est un vrai plus pour
              travailler pendant mes trajets vers La Défense."
            </p>
<div className="flex gap-1 text-gold-400 mt-auto">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<div className="w-[350px] md:w-[420px] p-8 rounded-3xl liquid-card flex flex-col gap-5 group transition-transform duration-500 hover:scale-[1.02]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-yellow-700 p-[2px]">
<div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  MD
                </div>
</div>
<div>
<div className="text-white font-semibold">Marc D.</div>
<div className="text-xs text-gold-400 uppercase tracking-wide">
                  Touriste
                </div>
</div>
</div>
<p className="text-zinc-300 font-light leading-relaxed italic">
              "Visite de Paris inoubliable. Le chauffeur connaissait tous les
              recoins et l'histoire de la ville."
            </p>
<div className="flex gap-1 text-gold-400 mt-auto">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<div className="w-[350px] md:w-[420px] p-8 rounded-3xl liquid-card flex flex-col gap-5 group transition-transform duration-500 hover:scale-[1.02]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-yellow-700 p-[2px]">
<div className="w-full h-full bg-dark-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  TG
                </div>
</div>
<div>
<div className="text-white font-semibold">Thomas G.</div>
<div className="text-xs text-gold-400 uppercase tracking-wide">
                  Entrepreneur
                </div>
</div>
</div>
<p className="text-zinc-300 font-light leading-relaxed italic">
              "Facture instantanée et TVA récupérable. Service très pro,
              efficace pour le business."
            </p>
<div className="flex gap-1 text-gold-400 mt-auto">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark-950 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-12 reveal">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold uppercase tracking-wider text-zinc-400">
<span>Support</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Questions Fréquentes
            </h2>
<p className="text-lg text-zinc-500 font-light">
              Tout ce que vous devez savoir sur votre trajet.
            </p>
</div>
<div className="flex flex-col border-t border-b border-white/5 divide-y divide-white/5">

<div className="group cursor-pointer faq-toggle transition-colors duration-300">
<button className="flex items-center justify-between w-full py-6 text-left focus:outline-none group">
<span className="text-lg text-zinc-400 group-hover:text-white group-[.active]:text-white font-medium transition-colors duration-300">
                  Le prix peut-il changer avec les bouchons ?
                </span>
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 text-zinc-500 group-hover:text-white transition-all group-[.active]:bg-gold-400 group-[.active]:text-black">
<i className="w-4 h-4 transition-transform duration-300 group-[.active]:rotate-45" data-lucide="plus"></i>
</div>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out faq-content">
<div className="pb-6 text-zinc-500 font-light leading-relaxed pr-8">
                  Non, absolument pas. Le tarif est
                  <strong className="text-white">figé à la commande</strong>
                  . Que le trajet dure 30 minutes ou 1h30 à cause du trafic,
                  vous paierez le prix annoncé initialement. C'est notre
                  garantie sérénité.
                </div>
</div>
</div>

<div className="group cursor-pointer faq-toggle transition-colors duration-300">
<button className="flex items-center justify-between w-full py-6 text-left focus:outline-none group">
<span className="text-lg text-zinc-400 group-hover:text-white group-[.active]:text-white font-medium transition-colors duration-300">
                  Comment payer ma course ?
                </span>
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 text-zinc-500 group-hover:text-white transition-all group-[.active]:bg-gold-400 group-[.active]:text-black">
<i className="w-4 h-4 transition-transform duration-300 group-[.active]:rotate-45" data-lucide="plus"></i>
</div>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out faq-content">
<div className="pb-6 text-zinc-500 font-light leading-relaxed pr-8">
                  Nous privilégions le paiement par
                  <strong className="text-white">lien sécurisé CB</strong>
                  (SumUp) envoyé par SMS avant le départ. C'est simple, rapide
                  et 100% sécurisé. Vous pouvez également payer en espèces à
                  bord.
                </div>
</div>
</div>

<div className="group cursor-pointer faq-toggle transition-colors duration-300">
<button className="flex items-center justify-between w-full py-6 text-left focus:outline-none group">
<span className="text-lg text-zinc-400 group-hover:text-white group-[.active]:text-white font-medium transition-colors duration-300">
                  Acceptez-vous les animaux ?
                </span>
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 text-zinc-500 group-hover:text-white transition-all group-[.active]:bg-gold-400 group-[.active]:text-black">
<i className="w-4 h-4 transition-transform duration-300 group-[.active]:rotate-45" data-lucide="plus"></i>
</div>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out faq-content">
<div className="pb-6 text-zinc-500 font-light leading-relaxed pr-8">
                  Oui, nous acceptons les animaux de compagnie, mais uniquement
                  <strong className="text-white">sur demande en gamme Van</strong>
                  pour garantir le confort et la propreté pour les passagers
                  suivants.
                </div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block relative w-full aspect-square bg-dark-900/50 rounded-3xl border border-white/5 overflow-hidden reveal delay-200">

<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)] z-10 pointer-events-none"></div>

<div className="absolute inset-0 flex items-center justify-center z-20 p-16">
<img alt="Top view of a Mercedes Class S" className="w-full h-full object-contain drop-shadow-2xl opacity-60 grayscale brightness-75 contrast-125 mix-blend-screen" src="https://freepngimg.com/thumb/car/1-2-car-png-picture-thumb.png"/>
</div>

<div className="absolute left-0 right-0 h-[2px] bg-gold-400 shadow-[0_0_25px_rgba(212,175,55,0.8)] z-10 animate-scan box-content border-t border-b border-gold-200/50"></div>
<div className="absolute left-0 right-0 h-32 bg-gradient-to-t from-gold-400/10 to-transparent z-10 -translate-y-full animate-scan"></div>

<div className="absolute top-8 left-8 z-30 flex flex-col gap-1">
<span className="text-[10px] text-gold-400 uppercase tracking-widest font-bold font-mono">
              Scanning System
            </span>
<span className="text-xs text-zinc-500 font-mono">AXIS-ID: 404-V</span>
</div>
<div className="absolute bottom-8 right-8 z-30">
<div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 w-1 h-2 bg-gold-400"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs text-white font-mono animate-pulse">
                LIVE
              </span>
</div>
</div>
<div className="absolute top-1/2 left-8 z-30 -translate-y-1/2 flex flex-col gap-8">
<div className="w-2 h-2 bg-zinc-700 rounded-full"></div>
<div className="w-2 h-2 bg-zinc-700 rounded-full"></div>
<div className="w-2 h-2 bg-zinc-700 rounded-full"></div>
</div>

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-white/20"></div>
<div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-white/20"></div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-zinc-900 overflow-hidden">
<div className="absolute inset-0">
<img alt="Driving" className="w-full h-full object-cover opacity-30 grayscale" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-dark-950/80"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center px-6 reveal">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
          Prêt à Vivre le Voyage Idéal ?
        </h2>
<p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
          Appelez-nous dès maintenant pour un service premium et un prix
          garanti. Votre chauffeur est prêt.
        </p>
<a className="inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-500 text-black px-10 py-5 rounded-lg text-lg font-bold transition-all shadow-xl shadow-gold-400/20 transform hover:-translate-y-1" href="tel:0132345465">
<span>Commander Mon Trajet Privé</span>
<i className="w-5 h-5" data-lucide="phone-call" strokeWidth="1.5"></i>
</a>
</div>
</section>

<footer className="bg-black pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div className="max-w-sm">

<a className="group flex items-center gap-3 mb-6 w-fit" href="index.html">
<span className="font-['Audiowide'] text-2xl font-bold uppercase tracking-tighter italic -skew-x-[10deg] text-zinc-400 transition-all duration-100 group-hover:text-gold-400 text-glow-hover">
                AXIS
              </span>
</a>
<p className="text-zinc-500 text-sm leading-relaxed mb-6 font-light">
              Service de chauffeur privé haut de gamme. Disponible 24/7 pour vos
              déplacements personnels et professionnels.
            </p>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-12 md:gap-24">
<div>
<h4 className="text-white font-medium mb-6">Liens Rapides</h4>
<ul className="space-y-4 text-sm text-zinc-500 font-light">
<li>
<a className="hover:text-gold-400 transition-colors" href="#">
                    Accueil
                  </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors" href="#vehicules">
                    Nos Véhicules
                  </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors" href="#fonctionnement">
                    Comment Ça Marche
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-zinc-500 font-light">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-gold-400" data-lucide="phone" strokeWidth="1.5"></i>
<a className="text-white hover:text-gold-400" href="tel:0132345465">
                    01.32.34.54.65
                  </a>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-gold-400" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Paris &amp; Île-de-France</span>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
<p className="text-zinc-600 text-xs font-light">
            © 2024 AXIS. Tous droits réservés.
          </p>
<div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-xs text-zinc-500 font-light">
<a className="hover:text-zinc-300" href="#">Mentions Légales</a>
<a className="hover:text-zinc-300" href="#">Confidentialité</a>
<div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 rounded-full border border-white/5">
<i className="w-3 h-3 text-gold-400" data-lucide="lock" strokeWidth="1.5"></i>
<span>
                Paiement sécurisé par
                <strong>SumUp</strong>
</span>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
