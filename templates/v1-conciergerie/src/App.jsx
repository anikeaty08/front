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
norman: { 50: '#f0f5f2', 100: '#dce8e0', 200: '#b8d1c1', 300: '#8fb69e', 400: '#6a9a7d', 500: '#4a7d5f', 600: '#3a6349', 700: '#2f4f3b', 800: '#224233', 900: '#1a332a' },
gold: { 50: '#fdfaf3', 100: '#f9f2e0', 200: '#f0e0b8', 300: '#e5cb8a', 400: '#d4ad5a', 500: '#C9A45C', 600: '#b08d48', 700: '#8f7038', 800: '#6e562c', 900: '#544224' }
},
fontFamily: { sans: ['Inter', 'sans-serif'] }
}
}
}



      // Initialize Lucide icons
      lucide.createIcons();

      // Splash screen
      setTimeout(() => {
          document.getElementById('splash-text').style.opacity = '0';
          setTimeout(() => {
              document.getElementById('door-left').style.transform = 'translateX(-100%)';
              document.getElementById('door-right').style.transform = 'translateX(100%)';
              setTimeout(() => {
                  document.getElementById('splash').style.opacity = '0';
                  document.getElementById('splash').style.pointerEvents = 'none';
              }, 1200);
          }, 400);
      }, 800);

      // Mobile menu
      document.getElementById('mobile-toggle').addEventListener('click', () => {
          document.getElementById('mobile-menu').classList.toggle('hidden');
      });

      // Close mobile menu when clicking a link
      document.querySelectorAll('#mobile-menu a').forEach(link => {
          link.addEventListener('click', () => {
              document.getElementById('mobile-menu').classList.add('hidden');
          });
      });

      // Simulateur
      let currentPrice = 65;
      let currentNights = 260;
      let currentType = 'Studio';

      function setType(type, price) {
          currentPrice = price;
          currentType = type;
          document.querySelectorAll('.type-btn').forEach(btn => {
              btn.classList.remove('bg-norman-800', 'text-white');
              btn.classList.add('bg-stone-100', 'text-stone-600');
          });
          event.target.classList.remove('bg-stone-100', 'text-stone-600');
          event.target.classList.add('bg-norman-800', 'text-white');
          calculate();
          updateHiddenFields();
      }

      document.getElementById('nightsRange').addEventListener('input', function() {
          currentNights = this.value;
          document.getElementById('nightsValue').innerText = currentNights + ' nuits';
          calculate();
          updateHiddenFields();
      });

      function calculate() {
          const total = (currentPrice * currentNights * 0.8);
          const formattedTotal = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(total);
          document.getElementById('totalRevenue').innerText = formattedTotal;
          return formattedTotal;
      }

      function updateHiddenFields() {
          document.getElementById('simulateur_type').value = currentType;
          document.getElementById('simulateur_nuits').value = currentNights;
          document.getElementById('simulateur_revenu').value = document.getElementById('totalRevenue').innerText;
      }

      calculate();

      // Form submission with Formspree
      document.getElementById('contactForm').addEventListener('submit', async function(e) {
          e.preventDefault();

          const form = e.target;
          const submitBtn = document.getElementById('submitBtn');
          const submitText = document.getElementById('submitText');
          const submitLoader = document.getElementById('submitLoader');
          const toast = document.getElementById('confirmationToast');

          // Disable button and show loading state
          submitBtn.disabled = true;
          submitText.textContent = 'Envoi en cours...';
          submitLoader.classList.remove('hidden');

          // Show toast
          toast.classList.remove('hidden');

          // Update hidden fields before submission
          updateHiddenFields();

          try {
              const formData = new FormData(form);

              const response = await fetch(form.action, {
                  method: 'POST',
                  body: formData,
                  headers: {
                      'Accept': 'application/json'
                  }
              });

              if (response.ok) {
                  // Success
                  document.getElementById('toastLoader').classList.add('hidden');
                  document.getElementById('toastCheck').classList.remove('hidden');
                  document.getElementById('toastMessage').innerText = 'Envoi réussi !';

                  // Show thank you modal after delay
                  setTimeout(() => {
                      toast.classList.add('hidden');
                      resetToastState();
                      showThankYouModal();
                      form.reset();
                  }, 1500);
              } else {
                  throw new Error('Erreur lors de l\'envoi');
              }
          } catch (error) {
              // Error handling
              document.getElementById('toastLoader').classList.add('hidden');
              document.getElementById('toastError').classList.remove('hidden');
              document.getElementById('toastMessage').innerText = 'Erreur, réessayez';

              setTimeout(() => {
                  toast.classList.add('hidden');
                  resetToastState();
              }, 3000);
          } finally {
              // Reset button state
              submitBtn.disabled = false;
              submitText.textContent = 'Recevoir ma proposition personnalisée';
              submitLoader.classList.add('hidden');
          }
      });

      function resetToastState() {
          document.getElementById('toastLoader').classList.remove('hidden');
          document.getElementById('toastCheck').classList.add('hidden');
          document.getElementById('toastError').classList.add('hidden');
          document.getElementById('toastMessage').innerText = 'Envoi en cours...';
      }

      function showThankYouModal() {
          const modal = document.getElementById('thankYouModal');
          const content = document.getElementById('thankYouContent');
          modal.classList.remove('hidden');
          document.body.style.overflow = 'hidden';

          // Trigger animation
          setTimeout(() => {
              content.classList.remove('scale-95', 'opacity-0');
              content.classList.add('scale-100', 'opacity-100');
          }, 50);

          // Reinitialize icons in modal
          lucide.createIcons();
      }

      function closeThankYouModal() {
          const modal = document.getElementById('thankYouModal');
          const content = document.getElementById('thankYouContent');

          content.classList.remove('scale-100', 'opacity-100');
          content.classList.add('scale-95', 'opacity-0');

          setTimeout(() => {
              modal.classList.add('hidden');
              document.body.style.overflow = '';
              // Scroll to top
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 300);
      }

      // Close modal with Escape key
      document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') {
              const modal = document.getElementById('thankYouModal');
              if (!modal.classList.contains('hidden')) {
                  closeThankYouModal();
              }
          }
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
      

<div className="fixed inset-0 z-[200] hidden" id="thankYouModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeThankYouModal()"></div>
<div className="relative z-10 min-h-screen flex items-center justify-center p-4">
<div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 sm:p-12 text-center transform scale-95 opacity-0 transition-all duration-300" id="thankYouContent">
<div className="w-20 h-20 bg-norman-100 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-10 h-10 text-norman-700" data-lucide="check-circle"></i>
</div>
<h2 className="text-2xl sm:text-3xl font-bold text-norman-800 tracking-tight mb-4">
            Merci !
          </h2>
<p className="text-lg text-stone-600 mb-4">
            Votre demande a été transmise avec succès.
          </p>
<p className="text-base text-stone-500 mb-8">
            Nous analysons votre bien et revenons vers vous avec votre
            proposition personnalisée sous
            <strong className="text-norman-800">24h</strong>
            .
          </p>
<div className="bg-stone-50 rounded-2xl p-6 text-left mb-8">
<h3 className="font-semibold text-norman-800 mb-4 text-base">
              Nos coordonnées
            </h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-gold-600" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm text-stone-500">Adresse</p>
<p className="text-base font-medium text-norman-800">
                    12 Rue de Paris, 76600 Le Havre
                  </p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-gold-600" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm text-stone-500">Téléphone</p>
<p className="text-base font-medium text-norman-800">
                    02 35 XX XX XX
                  </p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-gold-600" data-lucide="mail"></i>
</div>
<div>
<p className="text-sm text-stone-500">Email</p>
<p className="text-base font-medium text-norman-800">
                    contact@conciergerie-lehavre.fr
                  </p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-gold-600" data-lucide="globe"></i>
</div>
<div>
<p className="text-sm text-stone-500">Site web</p>
<p className="text-base font-medium text-norman-800">
                    www.conciergerie-lehavre.fr
                  </p>
</div>
</div>
</div>
</div>
<button className="w-full bg-norman-800 hover:bg-norman-700 text-white font-semibold py-4 rounded-xl transition" onclick="closeThankYouModal()">
            Retour à l'accueil
          </button>
</div>
</div>
</div>

<div className="fixed top-24 left-1/2 -translate-x-1/2 z-[150] hidden" id="confirmationToast">
<div className="bg-norman-800 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
<div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-white animate-spin" data-lucide="loader-2" id="toastLoader"></i>
<i className="w-4 h-4 text-white hidden" data-lucide="check" id="toastCheck"></i>
<i className="w-4 h-4 text-white hidden" data-lucide="x" id="toastError"></i>
</div>
<span className="text-base font-medium" id="toastMessage">
          Envoi en cours...
        </span>
</div>
</div>

<div className="fixed inset-0 z-[100] flex pointer-events-none" id="splash" style={{transition: 'opacity 0.5s ease 1.5s'}}>
<div className="w-1/2 h-full bg-norman-800 flex items-center justify-end pr-4" id="door-left" style={{transition: 'transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)', transform: 'translateX(0)'}}>
<div className="w-1 h-24 bg-gold-500 rounded-full"></div>
</div>
<div className="w-1/2 h-full bg-norman-800 flex items-center justify-start pl-4" id="door-right" style={{transition: 'transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)', transform: 'translateX(0)'}}>
<div className="w-1 h-24 bg-gold-500 rounded-full"></div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10" id="splash-text" style={{transition: 'opacity 0.4s ease'}}>
<span className="font-semibold text-2xl tracking-tighter">
          CONCIERGERIE
          <span className="text-gold-500">.LeHavre</span>
</span>
<div className="w-12 h-px bg-gold-500 my-4"></div>
<span className="text-gold-400 text-xs font-medium tracking-widest uppercase">
          Carte G — Loi Hoguet
        </span>
</div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-stone-200/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<a className="font-bold text-lg tracking-tighter text-norman-800" href="#">
            CONCIERGERIE
            <span className="text-gold-600">.LeHavre</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-norman-700 transition" href="#vision">
              Vision
            </a>
<a className="hover:text-norman-700 transition" href="#atouts">
              Atouts
            </a>
<a className="hover:text-norman-700 transition" href="#simulateur">
              Simulateur
            </a>
<a className="hover:text-norman-700 transition" href="#faq">FAQ</a>
<a className="ml-4 bg-norman-800 text-white px-5 py-2 rounded-full font-semibold hover:bg-norman-700 transition" href="#contact">
              Devis Gratuit
            </a>
</div>
<button className="md:hidden p-2 text-stone-600" id="mobile-toggle">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
<div className="hidden md:hidden bg-white border-t border-stone-100 px-4 py-4 space-y-3" id="mobile-menu">
<a className="block text-stone-600 font-medium" href="#vision">Vision</a>
<a className="block text-stone-600 font-medium" href="#atouts">Atouts</a>
<a className="block text-stone-600 font-medium" href="#simulateur">
          Simulateur
        </a>
<a className="block text-stone-600 font-medium" href="#faq">FAQ</a>
<a className="block bg-norman-800 text-white text-center py-3 rounded-xl font-semibold" href="#contact">
          Devis Gratuit
        </a>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-16 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Appartement Le Havre" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-norman-900/90 via-norman-800/80 to-norman-900/70"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i>
            Habilitation Carte G — Loi Hoguet
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            L'Excellence Réglementaire
            <br/>
<span className="text-gold-400">&amp;</span>
            Hybride au Havre.
          </h1>
<p className="text-lg text-stone-300 mb-10 leading-relaxed max-w-xl">
            Sécurisez votre patrimoine grâce à la rigueur de la Carte G et
            maximisez votre rendement via notre modèle hybride exclusif LCD +
            Bail Mobilité.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full text-center transition shadow-lg shadow-gold-500/25" href="#simulateur">
              Estimer mes revenus
            </a>
<a className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-center transition" href="#vision">
              Découvrir notre vision
            </a>
</div>
</div>
</div>
</header>

<section className="bg-norman-800 py-8">
<div className="max-w-6xl mx-auto px-4 text-center">
<p className="text-gold-400 font-medium text-sm sm:text-base italic">
          "Gestion 100% légale, 100% automatisée, 0% de vacance locative."
        </p>
</div>
</section>

<section className="py-24 bg-white scroll-mt-20" id="vision">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">
              Notre Vision
            </span>
<h2 className="text-3xl sm:text-4xl font-bold text-norman-800 mt-3 mb-6 tracking-tight">
              Professionnaliser le marché Havrais.
            </h2>
<p className="text-stone-600 leading-relaxed mb-8">
              Contrairement aux conciergeries artisanales qui opèrent souvent
              sous de simples contrats de prestation, nous détenons la
              <strong className="text-norman-800">
                Carte G (Gestion Immobilière)
              </strong>
              . C'est la garantie d'une gestion en "bon père de famille" avec
              toutes les assurances professionnelles requises.
            </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 bg-stone-50 rounded-2xl">
<div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-gold-600" data-lucide="scale"></i>
</div>
<div>
<h4 className="font-semibold text-norman-800">
                    100% Conforme Loi Hoguet
                  </h4>
<p className="text-sm text-stone-500 mt-1">
                    Rédaction de baux, perception de loyers, représentation
                    juridique.
                  </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-stone-50 rounded-2xl">
<div className="w-10 h-10 rounded-xl bg-norman-100 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-norman-700" data-lucide="repeat"></i>
</div>
<div>
<h4 className="font-semibold text-norman-800">
                    Agilité Hybride LCD + Mobilité
                  </h4>
<p className="text-sm text-stone-500 mt-1">
                    Taux d'occupation optimal toute l'année sans dépendre du
                    tourisme.
                  </p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-br from-gold-200/50 to-norman-200/50 rounded-3xl transform rotate-2"></div>
<img alt="Intérieur appartement Le Havre" className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&amp;q=80"/>
<div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-stone-100">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-norman-800 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-gold-400" data-lucide="lock"></i>
</div>
<div>
<p className="font-bold text-norman-800">Unlocker</p>
<p className="text-xs text-stone-500">0% d'impayés garantis</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 scroll-mt-20" id="atouts">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">
            Nos Atouts Maîtres
          </span>
<h2 className="text-3xl sm:text-4xl font-bold text-norman-800 mt-3 tracking-tight">
            Le socle de notre offre.
          </h2>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-xl transition duration-300">
<div className="w-14 h-14 bg-gold-100 rounded-2xl flex items-center justify-center mb-6">
<i className="w-7 h-7 text-gold-600" data-lucide="badge-check"></i>
</div>
<h3 className="text-xl font-bold text-norman-800 mb-3">
              Habilitation Carte G
            </h3>
<p className="text-stone-600 text-sm leading-relaxed">
              Nous sommes légalement habilités à rédiger des baux, percevoir des
              loyers pour votre compte et vous représenter juridiquement.
              Assurances professionnelles incluses.
            </p>
</div>
<div className="bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-xl transition duration-300">
<div className="w-14 h-14 bg-norman-100 rounded-2xl flex items-center justify-center mb-6">
<i className="w-7 h-7 text-norman-700" data-lucide="calendar-range"></i>
</div>
<h3 className="text-xl font-bold text-norman-800 mb-3">
              Modèle Hybride Exclusif
            </h3>
<p className="text-stone-600 text-sm leading-relaxed">
              Alternance stratégique entre LCD (revenus explosifs en saison) et
              Bail Mobilité (1-10 mois) pour capter cadres et étudiants sans
              contraintes.
            </p>
</div>
<div className="bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-xl transition duration-300">
<div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
<i className="w-7 h-7 text-purple-600" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-bold text-norman-800 mb-3">
              Écosystème Tech Unlocker
            </h3>
<p className="text-stone-600 text-sm leading-relaxed">
              Centralisation des baux, suivi des factures et garanties
              locatives. Chaque séjour est sécurisé, tout est tracé et
              accessible en temps réel.
            </p>
</div>
<div className="bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-xl transition duration-300">
<div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
<i className="w-7 h-7 text-emerald-600" data-lucide="split"></i>
</div>
<h3 className="text-xl font-bold text-norman-800 mb-3">
              Split Automatique 80/20
            </h3>
<p className="text-stone-600 text-sm leading-relaxed">
              Transparence totale : 80% directement sur votre compte, 20% de
              commission. Plus de factures manuelles, reporting clair
              automatisé.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-14">
<span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">
            Nos Services
          </span>
<h2 className="text-3xl sm:text-4xl font-bold text-norman-800 mt-3 tracking-tight">
            Une gestion clé en main
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-lg transition duration-300 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500"></div>
<div className="mb-5">
<span className="text-4xl">📣</span>
</div>
<h3 className="text-xl font-semibold text-norman-800 mb-3 tracking-tight">
              Diffusion &amp; Marketing
            </h3>
<p className="text-stone-500 text-sm leading-relaxed">
              Photos pro, rédaction persuasive et diffusion sur Airbnb &amp;
              Booking pour une visibilité maximale.
            </p>
</div>
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-lg transition duration-300 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
<div className="mb-5">
<span className="text-4xl">📈</span>
</div>
<h3 className="text-xl font-semibold text-norman-800 mb-3 tracking-tight">
              Optimisation des Prix
            </h3>
<p className="text-stone-500 text-sm leading-relaxed">
              Algorithmes de tarification dynamique pour ajuster les prix selon
              la demande au Havre.
            </p>
</div>
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-lg transition duration-300 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500"></div>
<div className="mb-5">
<span className="text-4xl">🤝</span>
</div>
<h3 className="text-xl font-semibold text-norman-800 mb-3 tracking-tight">
              Gestion Voyageurs 24/7
            </h3>
<p className="text-stone-500 text-sm leading-relaxed">
              Sélection rigoureuse, check-in, assistance continue. Nous sommes
              leurs seuls interlocuteurs.
            </p>
</div>
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-lg transition duration-300 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"></div>
<div className="mb-5">
<span className="text-4xl">🧹</span>
</div>
<h3 className="text-xl font-semibold text-norman-800 mb-3 tracking-tight">
              Ménage Premium
            </h3>
<p className="text-stone-500 text-sm leading-relaxed">
              Standard hôtelier, linge de qualité blanchisserie et
              réapprovisionnement des consommables.
            </p>
</div>
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-lg transition duration-300 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500"></div>
<div className="mb-5">
<span className="text-4xl">🔧</span>
</div>
<h3 className="text-xl font-semibold text-norman-800 mb-3 tracking-tight">
              Maintenance
            </h3>
<p className="text-stone-500 text-sm leading-relaxed">
              Petites réparations et veille technique pour maintenir votre bien
              en état neuf.
            </p>
</div>
<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-lg transition duration-300 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-1 bg-norman-600"></div>
<div className="mb-5">
<span className="text-4xl">📊</span>
</div>
<h3 className="text-xl font-semibold text-norman-800 mb-3 tracking-tight">
              Reporting Transparent
            </h3>
<p className="text-stone-500 text-sm leading-relaxed">
              Accédez à tout moment à votre calendrier et vos performances
              financières.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 scroll-mt-20" id="simulateur">
<div className="max-w-2xl mx-auto px-4">
<div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-stone-200">
<div className="text-center mb-10">
<span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">
              Simulateur
            </span>
<h2 className="text-2xl sm:text-3xl font-bold text-norman-800 mt-2 tracking-tight">
              Estimez vos revenus hybrides
            </h2>
<p className="text-stone-500 text-sm mt-2">
              Modèle LCD + Bail Mobilité combinés
            </p>
</div>
<div className="space-y-8">
<div>
<label className="block text-sm font-semibold text-stone-700 mb-3">
                Type de logement
              </label>
<div className="grid grid-cols-5 gap-2">
<button className="type-btn py-3 rounded-xl font-semibold text-sm transition bg-norman-800 text-white" onclick="setType('Studio', 65)">
                  Studio
                </button>
<button className="type-btn py-3 rounded-xl font-semibold text-sm transition bg-stone-100 text-stone-600 hover:bg-stone-200" onclick="setType('T2', 95)">
                  T2
                </button>
<button className="type-btn py-3 rounded-xl font-semibold text-sm transition bg-stone-100 text-stone-600 hover:bg-stone-200" onclick="setType('T3', 140)">
                  T3
                </button>
<button className="type-btn py-3 rounded-xl font-semibold text-sm transition bg-stone-100 text-stone-600 hover:bg-stone-200" onclick="setType('T4', 170)">
                  T4
                </button>
<button className="type-btn py-3 rounded-xl font-semibold text-sm transition bg-stone-100 text-stone-600 hover:bg-stone-200" onclick="setType('Maison', 190)">
                  Maison
                </button>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-stone-700 mb-3">
                Nuits louées par an (LCD + Mobilité)
              </label>
<input className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer" id="nightsRange" max="340" min="100" style={{accentColor: '#C9A45C'}} type="range" value="260"/>
<div className="flex justify-between mt-2 text-xs text-stone-400">
<span>100 nuits</span>
<span className="text-norman-800 font-bold text-base" id="nightsValue">
                  260 nuits
                </span>
<span>340 nuits</span>
</div>
</div>
<div className="bg-norman-800 text-white p-8 rounded-2xl text-center">
<p className="text-xs uppercase tracking-widest text-stone-300 mb-1">
                Revenu Annuel Net (80%)
              </p>
<p className="text-4xl sm:text-5xl font-bold text-gold-400" id="totalRevenue">
                13 520 €
              </p>
<p className="text-xs text-stone-400 mt-3">
                Commission 20% incluse • Split automatique
              </p>
</div>
<a className="block w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-4 rounded-xl text-center transition" href="#contact">
              Recevoir mon audit gratuit
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white scroll-mt-20" id="faq">
<div className="max-w-3xl mx-auto px-4">
<div className="text-center mb-12">
<span className="text-gold-600 font-semibold text-xs uppercase tracking-widest">
            FAQ
          </span>
<h2 className="text-3xl font-bold text-norman-800 mt-3 tracking-tight">
            Questions fréquentes
          </h2>
</div>
<div className="space-y-4">
<details className="group bg-stone-50 rounded-2xl p-6 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-norman-800 list-none">
              Qu'est-ce que la Carte G et pourquoi est-ce crucial ?
              <i className="w-5 h-5 text-gold-500 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-stone-600 text-sm leading-relaxed">
              La Carte G est une habilitation professionnelle obligatoire (Loi
              Hoguet) pour gérer légalement des flux financiers pour le compte
              de tiers. Elle nous permet de rédiger vos baux officiels et
              garantit une assurance en responsabilité civile professionnelle.
            </p>
</details>
<details className="group bg-stone-50 rounded-2xl p-6 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-norman-800 list-none">
              Comment fonctionne le modèle hybride ?
              <i className="w-5 h-5 text-gold-500 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-stone-600 text-sm leading-relaxed">
              En haute saison (avril-septembre), nous privilégions la LCD pour
              des revenus maximaux. En basse saison, nous passons sur des Baux
              Mobilité (1-10 mois) pour capter cadres et étudiants, éliminant
              ainsi la vacance locative.
            </p>
</details>
<details className="group bg-stone-50 rounded-2xl p-6 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-norman-800 list-none">
              Quels sont vos tarifs et commissions ?
              <i className="w-5 h-5 text-gold-500 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-stone-600 text-sm leading-relaxed">
              Notre commission est fixe : 20% sur les revenus générés. Grâce au
              split automatique, vous recevez vos 80% directement. Aucun frais
              fixe, aucun abonnement caché.
            </p>
</details>
<details className="group bg-stone-50 rounded-2xl p-6 cursor-pointer">
<summary className="flex justify-between items-center font-semibold text-norman-800 list-none">
              Que se passe-t-il en cas d'impayés ou dommages ?
              <i className="w-5 h-5 text-gold-500 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-stone-600 text-sm leading-relaxed">
              Grâce à notre écosystème Unlocker, chaque séjour est couvert par
              des garanties solides. Nous gérons l'intégralité des litiges et
              coordonnons les réparations avec nos partenaires locaux.
            </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-norman-800 scroll-mt-20" id="contact">
<div className="max-w-2xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Prêt pour une gestion sans risque ?
          </h2>
<p className="text-stone-300 mt-3">Audit gratuit de votre bien en 24h.</p>
</div>

<form action="https://formspree.io/f/xzdzngyd" className="bg-white rounded-3xl p-8 shadow-2xl space-y-6" id="contactForm" method="POST">

<input name="_subject" type="hidden" value="Nouvelle demande d'audit - Conciergerie Le Havre"/>
<input name="_template" type="hidden" value="table"/>
<input id="simulateur_type" name="simulateur_type" type="hidden" value="Studio"/>
<input id="simulateur_nuits" name="simulateur_nuits" type="hidden" value="260"/>
<input id="simulateur_revenu" name="simulateur_revenu" type="hidden" value="13 520 €"/>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-stone-600 uppercase mb-2">
                Prénom *
              </label>
<input className="w-full px-4 py-3 rounded-xl bg-stone-100 border-none outline-none focus:ring-2 focus:ring-gold-500 transition" id="prenom" name="prenom" placeholder="Jean" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-stone-600 uppercase mb-2">
                Email *
              </label>
<input className="w-full px-4 py-3 rounded-xl bg-stone-100 border-none outline-none focus:ring-2 focus:ring-gold-500 transition" id="email" name="email" placeholder="jean@email.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-stone-600 uppercase mb-2">
              Type de bien *
            </label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl bg-stone-100 border-none outline-none focus:ring-2 focus:ring-gold-500 transition appearance-none cursor-pointer" id="type_bien" name="type_bien" required="">
<option disabled="" selected="" value="">
                  Sélectionnez votre type de bien
                </option>
<option value="Studio">Studio</option>
<option value="T2">T2</option>
<option value="T3">T3</option>
<option value="T4">T4</option>
<option value="Maison">Maison</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-4 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" id="submitBtn" type="submit">
<span id="submitText">Recevoir ma proposition personnalisée</span>
<i className="w-5 h-5 animate-spin hidden" data-lucide="loader-2" id="submitLoader"></i>
</button>
<p className="text-center text-xs text-stone-400">
            Confidentialité garantie • Sans engagement
          </p>
</form>
</div>
</section>

<footer className="bg-norman-900 text-stone-400 py-12">
<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
<div>
<span className="font-bold text-lg text-white tracking-tighter">
            CONCIERGERIE
            <span className="text-gold-500">.LeHavre</span>
</span>
<p className="text-sm mt-3 leading-relaxed">
            Expertise Carte G &amp; Loi Hoguet. Votre partenaire pour la gestion
            locative hybride au Havre.
          </p>
</div>
<div>
<h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-4">
            Expertise
          </h4>
<ul className="space-y-2 text-sm">
<li>Habilitation Carte G</li>
<li>Modèle Hybride</li>
<li>Bail Mobilité</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white text-sm uppercase tracking-wide mb-4">
            Contact
          </h4>
<ul className="space-y-2 text-sm">
<li>📞 02 35 XX XX XX</li>
<li>✉️ contact@conciergerie-lehavre.fr</li>
<li>📍 Le Havre, France</li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-norman-800 text-center text-xs">
        © 2024 Conciergerie Le Havre — Partenaire Unlocker.
      </div>
</footer>


    </>
  );
}
