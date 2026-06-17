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
colors: {
brand: '#E3FF04',
'brand-dark': '#CDE503',
background: '#0a0a0a',
surface: '#121212',
'surface-hover': '#1a1a1a',
border: '#222222',
'border-light': '#333333',
text: {
primary: '#ffffff',
secondary: '#a1a1aa',
tertiary: '#71717a',
}
},
fontFamily: {
sans: ["Inter", "sans-serif"],
},
letterSpacing: {
tight: '-0.02em',
widest: '0.1em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Mobile Menu Logic
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');

      if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          const isOpen = mobileMenu.classList.contains('menu-open');
          if (isOpen) {
            mobileMenu.classList.remove('menu-open');
            menuIcon.classList.remove('icon-hidden');
            closeIcon.classList.add('icon-hidden');
          } else {
            mobileMenu.classList.add('menu-open');
            menuIcon.classList.add('icon-hidden');
            closeIcon.classList.remove('icon-hidden');
          }
        });
        document.querySelectorAll('#mobile-menu a').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-open');
            menuIcon.classList.remove('icon-hidden');
            closeIcon.classList.add('icon-hidden');
          });
        });
      }

      // Animation Logic
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px', threshold: 0.1 });

      const selector = 'h1, section h2, section p, article, .group, #testimonials > div > div, .fade-up';
      document.querySelectorAll(selector).forEach((el) => {
        // Apply animations to main content, excluding nav/footer for auto-logic
        if(!el.closest('nav') && !el.closest('#mobile-menu') && !el.closest('footer')) {
           // Prevent nested animations for paragraphs inside cards
           if(el.tagName === 'P' && (el.closest('article') || el.closest('.group'))) return;

           el.classList.add('fade-up');
           observer.observe(el);
        }
      });

      // Footer specific animations
      const footer = document.querySelector('footer');
      if(footer) {
         footer.querySelectorAll('h2, p:not(.text-center), .flex, form').forEach(el => {
           el.classList.add('fade-up');
           observer.observe(el);
         });
      }
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 border-b border-border backdrop-blur-md">
<div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<iconify-icon className="text-3xl text-brand" icon="solar:planet-3-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white uppercase group-hover:text-brand transition-colors">SPACEWEB</span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-normal uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#services">
            Services
          </a>
<a className="text-xs font-normal uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#ai">
            IA &amp; Auto
          </a>
<a className="text-xs font-normal uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#work">
            Réalisations
          </a>
<a className="text-xs font-normal uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#testimonials">
            Témoignages
          </a>
<a className="px-6 py-3 bg-white text-black text-xs font-medium uppercase tracking-widest hover:bg-brand transition-colors duration-200" href="#contact">
            07 08 35 06 76
          </a>
</div>

<button className="md:hidden p-2 text-white hover:text-brand transition-colors" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" id="menu-icon"></iconify-icon>
<iconify-icon className="text-2xl icon-hidden" icon="solar:close-circle-linear" id="close-icon"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-background border-b border-border flex-col p-6 space-y-6 md:hidden shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto z-40" id="mobile-menu">
<a className="text-sm font-normal uppercase tracking-widest text-text-secondary hover:text-white" href="#services">
          Services
        </a>
<a className="text-sm font-normal uppercase tracking-widest text-text-secondary hover:text-white" href="#ai">
          IA &amp; Automatisation
        </a>
<a className="text-sm font-normal uppercase tracking-widest text-text-secondary hover:text-white" href="#work">
          Réalisations
        </a>
<a className="text-sm font-normal uppercase tracking-widest text-text-secondary hover:text-white" href="#testimonials">
          Témoignages
        </a>
<a className="block w-full text-center py-4 bg-brand text-black text-xs font-medium uppercase tracking-widest" href="#contact">
          Demander un devis
        </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-background border-b border-border">
<div className="absolute inset-0 bg-grid z-0 opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-0 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen animate-pulse"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-10 hover:border-brand/50 transition-colors cursor-default group">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-none h-2 w-2 bg-brand"></span>
</span>
<span className="text-xs font-medium uppercase tracking-[0.2em] text-white group-hover:text-brand transition-colors">
            Agence Digitale
          </span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-10 leading-[1.1] select-none uppercase">
          Agence digitale moderne<br/>
<span className="text-white/30">pour votre business.</span>
</h1>
<p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-light delay-100 fade-up">
          Nous créons des sites web, boutiques en ligne et solutions IA pour aider votre entreprise à attirer plus de clients et développer votre chiffre d'affaires.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-200">
<a className="inline-flex items-center justify-center px-10 py-4 bg-brand text-black text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-200 min-w-[220px]" href="#contact">
            Demander un devis
          </a>
<a className="inline-flex items-center justify-center px-10 py-4 bg-transparent border border-white/20 text-white text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-200 min-w-[220px]" href="#contact">
            Contactez-nous
          </a>
</div>
</div>
<div className="absolute bottom-10 left-0 right-0 hidden md:flex justify-between px-10 text-xs text-text-secondary uppercase tracking-widest pointer-events-none z-20">
<span>Maroc</span>
<span className="animate-bounce">Deslizez vers le bas</span>
<span>SpaceWeb</span>
</div>
</section>

<section className="py-24 border-y border-border bg-background" id="services">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-5">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4 lowercase leading-none">
              nos
              <br/>
              services
            </h2>
</div>
<div className="md:col-span-7 flex items-end">
<p className="text-lg text-text-secondary font-light max-w-2xl leading-relaxed">
              Des solutions sur mesure pour développer votre présence en ligne, attirer de nouveaux clients et propulser votre entreprise vers le succès.
            </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">
<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:laptop-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white">
              Site web WordPress
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Sites modernes, rapides et optimisés pour tous les appareils afin de maximiser votre impact.
            </p>
</div>
<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white">
              Blog WordPress
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Blogs optimisés SEO pour développer votre visibilité et asseoir votre autorité en ligne.
            </p>
</div>
<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white">
              Blog Blogger
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Une solution simple, rapide et efficace pour publier du contenu en toute fluidité.
            </p>
</div>
<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:cart-large-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white">
              Boutique WooCommerce
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Boutiques performantes, personnalisées et sécurisées pour vendre vos produits en ligne.
            </p>
</div>
<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:shop-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white">
              Boutique Shopify
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              E-commerce professionnel prêt à vendre avec une interface intuitive et optimisée pour la conversion.
            </p>
</div>
<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:window-frame-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white">
              Site web Wix
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Sites web rapides, esthétiquement modernes et extrêmement faciles à gérer par vous-même.
            </p>
</div>
<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:palette-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white">
              Conception de Logo
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Identité visuelle mémorable et unique pour démarquer votre marque de la concurrence.
            </p>
</div>
<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<iconify-icon className="text-4xl" icon="solar:videocamera-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-4 text-white">
              Montage Vidéo
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Création de vidéos marketing percutantes et professionnelles adaptées pour vos réseaux sociaux.
            </p>
</div>
</div>

<div className="mt-20">
<div className="mb-8">
<h4 className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-2">
              Pourquoi nous choisir
            </h4>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border">
<div className="flex gap-4 p-6 bg-background border-r border-border hover:bg-surface transition-colors duration-200 items-start">
<iconify-icon className="text-xl text-brand mt-1" icon="solar:star-fall-minimalistic-2-linear"></iconify-icon>
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                  Design Moderne
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Des interfaces pensées pour l'expérience utilisateur.
                </p>
</div>
</div>
<div className="flex gap-4 p-6 bg-background border-r border-border hover:bg-surface transition-colors duration-200 items-start">
<iconify-icon className="text-xl text-brand mt-1" icon="solar:rocket-linear"></iconify-icon>
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                  Livraison Rapide
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Respect strict des délais pour lancer votre projet.
                </p>
</div>
</div>
<div className="flex gap-4 p-6 bg-background border-r border-border hover:bg-surface transition-colors duration-200 items-start">
<iconify-icon className="text-xl text-brand mt-1" icon="solar:magic-stick-3-linear"></iconify-icon>
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                  Solutions Sur Mesure
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Adaptation parfaite à vos besoins spécifiques.
                </p>
</div>
</div>
<div className="flex gap-4 p-6 bg-background hover:bg-surface transition-colors duration-200 items-start">
<iconify-icon className="text-xl text-brand mt-1" icon="solar:headset-linear"></iconify-icon>
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">
                  Support Professionnel
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Une équipe réactive toujours à votre écoute.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-t border-border" id="ai">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-0 py-1 text-xs font-semibold uppercase tracking-widest mb-8 text-brand">
<span className="block w-1.5 h-1.5 bg-brand"></span>
              L'avenir du web
            </div>
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-8 lowercase leading-none">
              services ia &amp;
              <br/>
<span className="text-text-tertiary">automatisation.</span>
</h2>
<p className="text-lg text-text-secondary font-light max-w-xl leading-relaxed mb-10">
              Automatisez votre business et gagnez du temps grâce à l’intelligence artificielle. Réduisez vos coûts opérationnels tout en augmentant votre productivité.
            </p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-brand text-brand text-xs uppercase tracking-widest font-semibold hover:bg-brand hover:text-black transition-all duration-200" href="#contact">
              Découvrir nos solutions IA
            </a>
</div>
<div className="grid grid-cols-1 gap-px bg-border border border-border">

<div className="p-6 sm:p-8 bg-background flex items-center gap-6 hover:bg-surface-hover transition-colors duration-200">
<div className="w-12 h-12 flex items-center justify-center border border-border text-brand shrink-0">
<iconify-icon className="text-2xl" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-white mb-1">Chatbot Intelligent</h4>
<p className="text-sm text-text-secondary">Assistants virtuels 24/7 pour répondre instantanément à vos clients.</p>
</div>
</div>
<div className="p-6 sm:p-8 bg-background flex items-center gap-6 hover:bg-surface-hover transition-colors duration-200">
<div className="w-12 h-12 flex items-center justify-center border border-border text-brand shrink-0">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-white mb-1">Automatisation WhatsApp</h4>
<p className="text-sm text-text-secondary">Messages automatiques, confirmations et suivi client centralisé.</p>
</div>
</div>
<div className="p-6 sm:p-8 bg-background flex items-center gap-6 hover:bg-surface-hover transition-colors duration-200">
<div className="w-12 h-12 flex items-center justify-center border border-border text-brand shrink-0">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-white mb-1">Génération de Contenu IA</h4>
<p className="text-sm text-text-secondary">Création rapide de textes, descriptions produits et articles de blog.</p>
</div>
</div>
<div className="p-6 sm:p-8 bg-background flex items-center gap-6 hover:bg-surface-hover transition-colors duration-200">
<div className="w-12 h-12 flex items-center justify-center border border-border text-brand shrink-0">
<iconify-icon className="text-2xl" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-white mb-1">Auto Blogging SEO</h4>
<p className="text-sm text-text-secondary">Publications automatisées optimisées pour générer du trafic organique.</p>
</div>
</div>
<div className="p-6 sm:p-8 bg-background flex items-center gap-6 hover:bg-surface-hover transition-colors duration-200">
<div className="w-12 h-12 flex items-center justify-center border border-border text-brand shrink-0">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-white mb-1">Email Marketing Automatisé</h4>
<p className="text-sm text-text-secondary">Séquences de conversion et newsletters intelligentes et personnalisées.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background" id="work">
<div className="max-w-[1440px] mx-auto px-6">
<div className="mb-16 border-b border-border pb-8">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4 lowercase">
            nos réalisations
          </h2>
<p className="text-lg text-text-secondary font-light">
            Une sélection de nos meilleurs projets web et e-commerce.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="E-commerce Fashion" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-brand transition-colors">
              Boutique Mode &amp; Vêtements
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Shopify
              </span>
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                E-Commerce
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
              Création d'une boutique en ligne complète avec gestion des stocks automatisée et design premium.
            </p>
<a className="mt-auto w-full border border-border px-4 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-brand hover:text-black hover:border-brand transition-colors text-center flex items-center justify-center gap-2" href="#">
              Voir le site en direct
              <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Site vitrine corporate" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-brand transition-colors">
              Cabinet de Conseil Juridique
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                WordPress
              </span>
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Corporate
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
              Refonte totale de l'identité digitale d'un cabinet avec module de prise de rendez-vous intégré.
            </p>
<a className="mt-auto w-full border border-border px-4 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-brand hover:text-black hover:border-brand transition-colors text-center flex items-center justify-center gap-2" href="#">
              Voir le site en direct
              <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Blog Tech" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-brand transition-colors">
              Média d'actualités Tech
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Blog
              </span>
<span className="text-xs uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Automatisation
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
              Plateforme d'articles optimisée SEO avec génération de contenu automatisé via nos solutions IA.
            </p>
<a className="mt-auto w-full border border-border px-4 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-brand hover:text-black hover:border-brand transition-colors text-center flex items-center justify-center gap-2" href="#">
              Voir le site en direct
              <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</article>
</div>
</div>
</section>

<section className="py-24 bg-surface border-t border-border" id="testimonials">
<div className="max-w-[1440px] mx-auto px-6">
<div className="mb-16">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4 lowercase">
            témoignages
          </h2>
<p className="text-lg text-text-secondary font-light">
            Ce que disent nos clients de notre expertise digitale.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-background border border-border p-8 hover:border-brand/50 transition-colors duration-300 flex flex-col h-full">
<div className="flex text-brand mb-6 text-sm">
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-text-secondary leading-relaxed mb-8 flex-grow font-light">
              "L'équipe de SpaceWeb a transformé notre vision en une boutique en ligne performante. Depuis le lancement, nos ventes ont augmenté de manière significative. Un service très professionnel et réactif !"
            </p>
<div>
<p className="text-sm font-semibold text-white uppercase tracking-widest">Amine B.</p>
<p className="text-xs text-text-tertiary uppercase tracking-widest mt-1">Gérant E-commerce</p>
</div>
</div>

<div className="bg-background border border-border p-8 hover:border-brand/50 transition-colors duration-300 flex flex-col h-full">
<div className="flex text-brand mb-6 text-sm">
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-text-secondary leading-relaxed mb-8 flex-grow font-light">
              "Grâce à leur solution de chatbot IA et l'automatisation WhatsApp, nous gagnons des heures chaque semaine sur le support client. C'est exactement ce qu'il nous fallait pour passer au niveau supérieur."
            </p>
<div>
<p className="text-sm font-semibold text-white uppercase tracking-widest">Sarah El M.</p>
<p className="text-xs text-text-tertiary uppercase tracking-widest mt-1">Fondatrice Agence</p>
</div>
</div>

<div className="bg-background border border-border p-8 hover:border-brand/50 transition-colors duration-300 flex flex-col h-full">
<div className="flex text-brand mb-6 text-sm">
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="mr-1" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-text-secondary leading-relaxed mb-8 flex-grow font-light">
              "J'ai confié la création de mon site WordPress et de mon logo à SpaceWeb. Le résultat est moderne, épuré et correspond parfaitement à l'image que je voulais renvoyer. Je recommande vivement !"
            </p>
<div>
<p className="text-sm font-semibold text-white uppercase tracking-widest">Youssef T.</p>
<p className="text-xs text-text-tertiary uppercase tracking-widest mt-1">Consultant Indépendant</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-background pt-24 pb-12 border-t border-border" id="contact">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
<div>
<h2 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight text-white lowercase leading-[0.9]">
              contactez
              <br/>
              nous.
            </h2>
<p className="text-text-secondary text-lg mb-12 max-w-md font-light">
              Prêt à propulser votre entreprise ? Remplissez le formulaire et discutons ensemble de votre projet numérique.
            </p>
<div className="flex flex-col gap-6">
<a className="flex items-center gap-4 text-text-secondary hover:text-brand transition-colors" href="tel:0708350676">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
<span className="text-lg">07 08 35 06 76</span>
</a>
<a className="flex items-center gap-4 text-text-secondary hover:text-brand transition-colors" href="mailto:info@spaceweb.ma">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
<span className="text-lg">info@spaceweb.ma</span>
</a>
<a className="flex items-center gap-4 text-text-secondary hover:text-brand transition-colors" href="http://www.spaceweb.ma" target="_blank">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
<span className="text-lg">www.spaceweb.ma</span>
</a>
</div>
</div>

<div className="bg-surface p-8 border border-border">
<form className="space-y-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                  Nom Complet
                </label>
<input className="w-full bg-background border border-border px-4 py-4 text-white text-sm focus:outline-none focus:border-brand transition-colors placeholder-text-tertiary/50" placeholder="Votre nom complet" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                  Email
                </label>
<input className="w-full bg-background border border-border px-4 py-4 text-white text-sm focus:outline-none focus:border-brand transition-colors placeholder-text-tertiary/50" placeholder="vous@exemple.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                  Service Souhaité
                </label>
<div className="relative">
<select className="w-full bg-background border border-border px-4 py-4 text-white text-sm focus:outline-none focus:border-brand transition-colors cursor-pointer pr-10">
<option>Création de Site Web (WordPress, Wix...)</option>
<option>Boutique E-commerce (Shopify, Woo...)</option>
<option>Services IA &amp; Automatisation</option>
<option>Design &amp; Vidéo</option>
<option>Autre demande</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                  Message
                </label>
<textarea className="w-full bg-background border border-border px-4 py-4 text-white text-sm focus:outline-none focus:border-brand transition-colors placeholder-text-tertiary/50" placeholder="Décrivez votre projet et vos objectifs..." rows="4"></textarea>
</div>
<button className="w-full bg-brand text-black text-xs font-semibold uppercase tracking-widest py-5 hover:bg-white transition-colors duration-200" type="button">
                Envoyer le message
              </button>
</form>
</div>
</div>
<div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-brand" icon="solar:planet-3-linear"></iconify-icon>
<span className="font-semibold text-sm text-white tracking-widest uppercase">
              SpaceWeb
            </span>
</div>
<p className="text-text-tertiary text-xs uppercase tracking-widest text-center">
            © 2024 SpaceWeb. Tous droits réservés.
          </p>
<div className="flex gap-6">
<a className="text-text-tertiary hover:text-brand transition-colors" href="https://instagram.com/spacewebe" target="_blank" title="Instagram: @spacewebe">
<iconify-icon className="text-2xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="text-text-tertiary hover:text-brand transition-colors" href="https://facebook.com/spacewebe" target="_blank" title="Facebook: @spacewebe">
<iconify-icon className="text-2xl" icon="solar:users-group-two-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
