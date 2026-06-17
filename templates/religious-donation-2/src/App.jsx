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



      lucide.createIcons();

      // Horizontal Scroll Logic for Services
      (function() {
          const container = document.getElementById('marquee-container');
          let isDragging = false;
          let startX;
          let scrollLeft;

          container.addEventListener('mousedown', (e) => {
              isDragging = true;
              container.classList.add('cursor-grabbing');
              startX = e.pageX - container.offsetLeft;
              scrollLeft = container.scrollLeft;
          });

          container.addEventListener('mouseleave', () => {
              isDragging = false;
              container.classList.remove('cursor-grabbing');
          });

          container.addEventListener('mouseup', () => {
              isDragging = false;
              container.classList.remove('cursor-grabbing');
          });

          container.addEventListener('mousemove', (e) => {
              if (!isDragging) return;
              e.preventDefault();
              const x = e.pageX - container.offsetLeft;
              const walk = (x - startX) * 2; // Scroll-fast
              container.scrollLeft = scrollLeft - walk;
          });
      })();
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center transition-all duration-300">

<a className="group flex flex-col items-start gap-0.5 pointer-events-auto" href="#">
<span className="text-2xl md:text-3xl tracking-tight font-medium font-playfair text-white">
          Hassanaty
        </span>
<span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium border-t border-[#D4AF37]/50 pt-1 w-full text-center">
          Les Lieux Saints
        </span>
</a>

<div className="hidden md:flex items-center gap-8 lg:gap-12 pointer-events-auto">
<a className="text-xs font-medium uppercase tracking-widest text-zinc-300 hover-text-gold transition-colors" href="#mission">
          Notre Mission
        </a>
<a className="text-xs font-medium uppercase tracking-widest text-zinc-300 hover-text-gold transition-colors" href="#services">
          Services
        </a>
<a className="text-xs font-medium uppercase tracking-widest text-zinc-300 hover-text-gold transition-colors" href="#amanah">
          L'Amanah
        </a>
<a className="group flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-black transition-all duration-300 backdrop-blur-md" href="#cart">
<svg className="lucide lucide-shopping-bag" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
<span className="text-xs font-semibold uppercase tracking-wide">
            Mes Actions
          </span>
</a>
</div>

<div className="md:hidden text-white pointer-events-auto cursor-pointer">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden bg-black">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&amp;w=2688&amp;auto=format&amp;fit=crop">

<source src="https://www.dropbox.com/scl/fi/bcqhjn8j7gwzlawturj6g/Design-sans-titre-1.mp4?rlkey=gkzk62b6co3uebh5wm7dufkyv&amp;st=zvb50h27&amp;raw=1" type="video/mp4"/>
</video>
<div className="hero-gradient absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full px-6 py-12 md:px-12 md:py-24 flex flex-col items-center text-center z-10">
<div className="max-w-4xl fade-in-up space-y-8">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mx-auto mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">
              En direct de Médine &amp; La Mecque
            </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-playfair text-white mb-6">
            Votre Sadaqah au
            <br/>
<span className="text-gold-gradient italic pr-2">
              Cœur des Haramain
            </span>
</h1>
<p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-zinc-300 leading-relaxed font-montserrat">
            Réalisé par des Étudiants en Science. Preuve vidéo 100%.
            <br className="hidden md:block"/>
            Un pont spirituel entre votre cœur et les Lieux Saints.
          </p>
<div className="pt-8">
<a className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-[#D4AF37] rounded-full group bg-[#D4AF37]" href="#services">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-black font-semibold uppercase tracking-widest text-xs transition-all duration-300 transform group-hover:translate-x-full ease">
                Accomplir une Bonne Action
              </span>
<span className="relative invisible font-semibold uppercase tracking-widest text-xs">
                Accomplir une Bonne Action
              </span>
</a>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 md:px-12 bg-[#080808] border-b border-zinc-900 relative" id="mission">
<div className="max-w-5xl mx-auto text-center">
<iconify-icon className="text-4xl text-[#D4AF37] mb-8 opacity-80" icon="solar:star-fall-linear"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-playfair text-white mb-10 leading-tight">
          Un Acte d'Adoration,
          <span className="text-[#D4AF37] italic">Élevé.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
<div className="space-y-4 border-l border-[#D4AF37]/30 pl-8">
<h3 className="text-xl font-playfair text-white">
              Soutenir les Étudiants en 'Ilm
            </h3>
<p className="text-zinc-400 font-light leading-relaxed">
              Chaque service est exécuté par des Étudiants en Science (Talabat
              al-'Ilm) dévoués résidant à Médine. Votre contribution soutient
              leurs études et leur subsistance, doublant la récompense de votre
              charité.
            </p>
</div>
<div className="space-y-4 border-l border-[#D4AF37]/30 pl-8">
<h3 className="text-xl font-playfair text-white">
              Le plus haut niveau de Taqwa
            </h3>
<p className="text-zinc-400 font-light leading-relaxed">
              Confiez votre Sadaqah à ceux qui comprennent sa sacralité. De
              l'étiquette spécifique du sacrifice à l'adab de la visite de la
              Rawdah, votre acte est accompli avec savoir et révérence.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden z-10 bg-[#050505] border-zinc-900 border-b pt-24 pb-24 relative" id="services">
<div className="px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium mb-3 block">
            Offerings
          </span>
<h2 className="text-4xl md:text-6xl font-playfair text-white">
            Opportunités de Sadaqah
          </h2>
</div>
<div className="flex gap-2 text-zinc-500 hidden md:flex">
<span className="text-xs uppercase tracking-widest">
            Glisser pour explorer
          </span>
<svg className="lucide lucide-move-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8L22 12L18 16"></path>
<path d="M2 12H22"></path>
</svg>
</div>
</div>

<div className="flex w-full overflow-x-auto no-scrollbar select-none cursor-grab touch-pan-x pl-6 md:pl-12 pb-12" id="marquee-container">
<div className="flex gap-6 min-w-max pr-12">

<div className="group relative w-[300px] md:w-[380px] h-[550px] rounded-[1rem] overflow-hidden border border-zinc-800 bg-[#0A0A0A] hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col shrink-0">
<div className="h-[55%] relative overflow-hidden">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs text-white font-medium">25 €</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow justify-between relative z-10">
<div>
<div className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">
                  Sadaqah Jariya
                </div>
<h3 className="text-2xl font-playfair text-white mb-3">
                  Waqf Coran
                </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Offrez un Mushaf dans les Saintes Mosquées. Chaque lettre lue
                  par un pèlerin vous rapporte des récompenses continues
                  (Hassanates).
                </p>
</div>
<button className="w-full mt-6 py-3 border border-zinc-700 rounded-sm text-sm uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                Ajouter au Panier
              </button>
</div>
</div>

<div className="group relative w-[300px] md:w-[380px] h-[550px] rounded-[1rem] overflow-hidden border border-zinc-800 bg-[#0A0A0A] hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col shrink-0">
<div className="h-[55%] relative overflow-hidden">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1548232979-6c557ee14752?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs text-white font-medium">5 €</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow justify-between relative z-10">
<div>
<div className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">
                  The Best Charity
                </div>
<h3 className="text-2xl font-playfair text-white mb-3">
                  Distribution d'Eau
                </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Étanchez la soif des pèlerins sous le soleil d'Arabie. De
                  l'eau fraîche distribuée aux portes des Haramain.
                </p>
</div>
<button className="w-full mt-6 py-3 border border-zinc-700 rounded-sm text-sm uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                Ajouter au Panier
              </button>
</div>
</div>

<div className="group relative w-[300px] md:w-[380px] h-[550px] rounded-[1rem] overflow-hidden border border-zinc-800 bg-[#0A0A0A] hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col shrink-0">
<div className="h-[55%] relative overflow-hidden">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs text-white font-medium">200 €</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow justify-between relative z-10">
<div>
<div className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">
                  Aqiqah &amp; Sadaqah
                </div>
<h3 className="text-2xl font-playfair text-white mb-3">
                  Sacrifice
                </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Sacrifices pour nouveau-nés ou charité générale, distribués
                  immédiatement aux familles pauvres de Médine avec preuve vidéo
                  complète.
                </p>
</div>
<button className="w-full mt-6 py-3 border border-zinc-700 rounded-sm text-sm uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                Ajouter au Panier
              </button>
</div>
</div>

<div className="group relative w-[300px] md:w-[380px] h-[550px] rounded-[1rem] overflow-hidden border border-zinc-800 bg-[#0A0A0A] hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col shrink-0">
<div className="h-[55%] relative overflow-hidden">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs text-white font-medium">Custom</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow justify-between relative z-10">
<div>
<div className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">
                  Support 'Ilm
                </div>
<h3 className="text-2xl font-playfair text-white mb-3">
                  Héritage de Savoir
                </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Parrainez des livres et du matériel pour les Étudiants en
                  Science. Soyez partenaire de chaque parole de vérité qu'ils
                  enseignent.
                </p>
</div>
<button className="w-full mt-6 py-3 border border-zinc-700 rounded-sm text-sm uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                Choisir le Montant
              </button>
</div>
</div>

<div className="group relative w-[300px] md:w-[380px] h-[550px] rounded-[1rem] overflow-hidden border border-zinc-800 bg-[#0A0A0A] hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col shrink-0">
<div className="h-[55%] relative overflow-hidden">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs text-white font-medium">300 €</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow justify-between relative z-10">
<div>
<div className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">
                  By Proxy
                </div>
<h3 className="text-2xl font-playfair text-white mb-3">
                  Omra Al-Badal
                </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Accomplie pour les malades ou les défunts. Réalisée sous 72h
                  avec preuve vidéo complète, de l'Ihram au Tawaf.
                </p>
</div>
<button className="w-full mt-6 py-3 border border-zinc-700 rounded-sm text-sm uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                Ajouter au Panier
              </button>
</div>
</div>

<div className="group relative w-[300px] md:w-[380px] h-[550px] rounded-[1rem] overflow-hidden border border-zinc-800 bg-[#0A0A0A] hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col shrink-0">
<div className="h-[55%] relative overflow-hidden">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs text-white font-medium">10 €</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow justify-between relative z-10">
<div>
<div className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-2">
                  Sunnah Days
                </div>
<h3 className="text-2xl font-playfair text-white mb-3">
                  Iftar pour Jeûneurs
                </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Nourrissez les jeûneurs à Médine les lundis et jeudis. Vivez
                  la joie de ceux qui rompent leur jeûne.
                </p>
</div>
<button className="w-full mt-6 py-3 border border-zinc-700 rounded-sm text-sm uppercase tracking-wider text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
                Ajouter au Panier
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#080808] border-b border-zinc-900" id="amanah">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-full px-3 py-1 mb-6 tracking-wider uppercase">
              Transparence
            </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-white tracking-tight mb-8">
              L'Amanah
              <br/>
<span className="text-zinc-600">Politique de Preuve Vidéo</span>
</h2>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
              Supervisé par des savants.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-3">
<div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900 text-[#D4AF37]">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-playfair">Conforme à la Charia</h4>
<p className="text-xs text-zinc-500">Supervised by scholars.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900 text-[#D4AF37]">
<iconify-icon icon="solar:user-hand-up-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-playfair">Par des Étudiants</h4>
<p className="text-xs text-zinc-500">Des mains de confiance.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900 text-[#D4AF37]">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-playfair">Preuve Instantanée</h4>
<p className="text-xs text-zinc-500">
                  Envoyée sur votre téléphone.
                </p>
</div>
</div>
</div>

<div className="relative h-[600px] w-full flex items-center justify-center">
<div className="absolute inset-0 bg-[#D4AF37]/5 blur-[100px] rounded-full"></div>
<div className="relative z-10 w-[300px] h-[580px] bg-zinc-950 border border-zinc-800 rounded-[3rem] shadow-2xl p-2 overflow-hidden rotate-[-3deg] hover:rotate-0 transition-all duration-700">
<div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
<img alt="Medina" className="w-full h-full object-cover grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>

<div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-b from-black/60 via-transparent to-black/80">
<div className="flex justify-between items-center text-white/80">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-xs uppercase tracking-widest">
                      Hassanaty
                    </span>
</div>
<div className="space-y-2">
<div className="inline-block bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-1 rounded">
                      ENVOYÉ À L'INSTANT
                    </div>
<p className="text-white font-playfair text-xl">
                      "Salam, voici votre distribution d'eau à la Mosquée du
                      Prophète."
                    </p>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
<svg className="w-6 h-6 text-white fill-white ml-1" viewbox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-black border-t border-zinc-900 pt-16 pb-8 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex flex-col gap-2">
<span className="font-playfair text-2xl text-white">Hassanaty</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">
            Sadaqah dans les Lieux Saints
          </span>
</div>
<div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">

<iconify-icon icon="logos:stripe" width="60"></iconify-icon>
<iconify-icon icon="logos:paypal" width="24"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="40"></iconify-icon>
<iconify-icon icon="logos:visa" width="40"></iconify-icon>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 Hassanaty. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="hover:text-[#D4AF37]" href="#">Confidentialité</a>
<a className="hover:text-[#D4AF37]" href="#">Conditions</a>
<a className="hover:text-[#D4AF37]" href="#">Contact</a>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 animate-float">
<div className="bg-[#D4AF37] text-black px-6 py-4 rounded-full shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
<div className="flex flex-col items-end leading-none">
<span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
            Vos Actions
          </span>
<span className="font-playfair font-bold text-lg">0 Hassanates</span>
</div>
<div className="w-10 h-10 bg-black text-[#D4AF37] rounded-full flex items-center justify-center">
<iconify-icon icon="solar:bag-heart-bold" width="20"></iconify-icon>
</div>
</div>
</div>



    </>
  );
}
