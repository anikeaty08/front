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

(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();

}

{

        lucide.createIcons();
        
        // Enhanced checkbox functionality
        document.getElementById('consent').addEventListener('change', function() {
            const checkbox = this;
            const container = checkbox.nextElementSibling;
            const checkIcon = container.querySelector('[data-lucide="check"]');
            
            if (checkbox.checked) {
                container.classList.add('bg-gradient-to-r', 'from-cyan-500', 'to-blue-600');
                checkIcon.style.opacity = '1';
            } else {
                container.classList.remove('bg-gradient-to-r', 'from-cyan-500', 'to-blue-600');
                checkIcon.style.opacity = '0';
            }
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10 blur-md"><iframe frameborder="0" height="100%" src="https://my.spline.design/spaceparticlesanimation-UGnU6SB7nUK6sFI6N5WzasEx" width="100%"></iframe></div>

<nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down delay-500">
<div className="glass px-6 py-3 rounded-full">
<div className="flex items-center space-x-6 text-white text-sm font-medium">
<div className="text-blue-400 font-bold tracking-tight">MASTERCLASS</div>
<a className="hover:text-blue-400 transition-colors duration-300" href="#formation">Formation</a>
<a className="hover:text-blue-400 transition-colors duration-300" href="#resultats">Résultats</a>
<a className="hover:text-blue-400 transition-colors duration-300" href="#temoignages">Témoignages</a>
<button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">
                    Commencer
                </button>
</div>
</div>
</nav>

<section className="hero-texture min-h-screen flex relative overflow-hidden items-center">

<div className="absolute top-20 left-10 animate-float delay-200">
<div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
</div>
<div className="absolute bottom-20 right-10 animate-float delay-700">
<div className="w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
</div>
<div className="absolute top-1/2 left-1/3 animate-float delay-1000">
<div className="w-24 h-24 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-lg"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="text-white">
<div className="inline-block glass-dark px-4 py-2 rounded-full mb-6 animate-fade-blur delay-100">
<span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">🔥 Formation Exclusive</span>
</div>
<h1 className="text-4xl lg:text-7xl font-bold tracking-tight mb-6 leading-none animate-slide-right">
                        MAÎTRISEZ LE 
                        <span className="bg-clip-text animate-gradient text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                            MARKETING DIGITAL
                        </span>
<br />ET GÉNÉREZ 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 animate-gradient">
                            10K€/MOIS
                        </span>
</h1>
<p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed animate-slide-right delay-300">
                        La formation complète pour transformer votre expertise en business rentable grâce aux stratégies secrètes des entrepreneurs à 7 chiffres.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 animate-slide-right delay-500">
<button className="glass bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 animate-pulse-glow">
                            ACCÉDER À LA FORMATION
                        </button>
<button className="glass border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
                            Voir la démo
                        </button>
</div>
<div className="flex items-center space-x-6 mt-8 animate-fade-blur delay-700">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-white/20" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80" />
<img alt="" className="w-10 h-10 rounded-full border-2 border-white/20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=80&q=80" style={{}} />
<img alt="" className="w-10 h-10 rounded-full border-2 border-white/20" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" style={{}} />
</div>
<div>
<p className="text-green-400 font-semibold">15,000+ entrepreneurs formés</p>
<div className="flex space-x-1">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</div>
</div>
</div>

<div className="animate-scale-bounce delay-800">
<div className="glass-card p-2 rounded-3xl shadow-2xl animate-float delay-1000">
<div className="relative">
<img alt="Formation Marketing Digital" className="rounded-2xl w-full h-96 object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="glass-dark p-4 rounded-xl">
<div className="flex items-center justify-between mb-2">
<span className="text-green-400 font-semibold">🎯 En direct</span>
<span className="text-white text-sm">2,847 participants</span>
</div>
<p className="text-white font-semibold">Module 3: Stratégies de conversion</p>
</div>
</div>
</div>
</div>

<div className="absolute -top-8 -right-8 glass-card p-4 rounded-xl animate-rotate-in delay-1200">
<div className="text-center">
<div className="text-2xl font-bold text-blue-600">94%</div>
<div className="text-xs text-gray-600">Taux de réussite</div>
</div>
</div>
<div className="absolute -bottom-8 -left-8 glass-card p-4 rounded-xl animate-rotate-in delay-1400">
<div className="text-center">
<div className="text-2xl font-bold text-green-600">€87K</div>
<div className="text-xs text-gray-600">Revenus moyens</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="glass-card p-8 rounded-3xl animate-slide-up">
<p className="text-center text-sm font-semibold text-gray-500 mb-8 uppercase tracking-widest animate-fade-blur delay-200">
                    ILS NOUS FONT CONFIANCE
                </p>
<div className="flex items-center justify-center space-x-12 opacity-60">
<div className="animate-slide-up delay-300">
<div className="text-3xl font-bold text-gray-600 tracking-tight hover:text-gray-800 transition-colors duration-300">FORBES</div>
</div>
<div className="animate-slide-up delay-400">
<div className="text-3xl font-bold text-gray-600 tracking-tight hover:text-gray-800 transition-colors duration-300">TECHCRUNCH</div>
</div>
<div className="animate-slide-up delay-500">
<div className="text-3xl font-bold text-gray-600 tracking-tight hover:text-gray-800 transition-colors duration-300">WIRED</div>
</div>
<div className="animate-slide-up delay-600">
<div className="text-3xl font-bold text-gray-600 tracking-tight hover:text-gray-800 transition-colors duration-300">MASHABLE</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="resultats">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=" cx="30" cy="30" fill="none" fillOpacity="0.05" fillRule="evenodd" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight animate-slide-down">
                    DES RÉSULTATS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">PROUVÉS</span>
</h2>
<p className="text-xl text-gray-300 animate-fade-blur delay-200">
                    Plus de 10,000 entrepreneurs nous font déjà confiance
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass p-8 rounded-2xl text-center hover:scale-105 transition-all duration-500 animate-scale-bounce delay-300">
<div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
<svg className="lucide lucide-trending-up w-10 h-10 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="text-5xl font-bold text-white mb-2">94%</div>
<p className="text-gray-300 font-medium">Taux de réussite des participants</p>
</div>
<div className="glass p-8 rounded-2xl text-center hover:scale-105 transition-all duration-500 animate-scale-bounce delay-500">
<div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float delay-300">
<svg className="lucide lucide-users w-10 h-10 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</div>
<div className="text-5xl font-bold text-white mb-2">15K+</div>
<p className="text-gray-300 font-medium">Entrepreneurs formés</p>
</div>
<div className="glass p-8 rounded-2xl text-center hover:scale-105 transition-all duration-500 animate-scale-bounce delay-700">
<div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float delay-600">
<svg className="lucide lucide-euro w-10 h-10 text-white" data-lucide="euro" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<div className="text-5xl font-bold text-white mb-2">87%</div>
<p className="text-gray-300 font-medium">Génèrent 5K€+ en 90 jours</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="glass-card p-12 rounded-3xl relative overflow-hidden">
<div className="absolute -top-4 left-8 animate-scale-bounce delay-200">
<span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                        🔥 EXCLUSIF
                    </span>
</div>
<div className="text-center mb-16">
<h3 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight animate-slide-up delay-300">
                        LES 3 ERREURS QUI <span className="text-red-600">TUENT</span> VOTRE BUSINESS
                    </h3>
<p className="text-xl text-gray-600 animate-fade-blur delay-500">
                        Évitez ces pièges et transformez votre approche dès aujourd'hui
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 animate-slide-left delay-600 group">
<div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:rotate-12 transition-transform duration-300">1</div>
<h4 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300">Mauvais Positionnement</h4>
<p className="text-gray-600 leading-relaxed">Vous vendez à tout le monde au lieu de vous spécialiser sur une niche profitable et précise.</p>
<div className="mt-4 flex items-center text-red-600 font-semibold text-sm">
<svg className="lucide lucide-alert-circle w-4 h-4 mr-2" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><line></line><line></line></svg>
                            Erreur critique
                        </div>
</div>
<div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 animate-slide-up delay-800 group">
<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:rotate-12 transition-transform duration-300">2</div>
<h4 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors duration-300">Prix Trop Bas</h4>
<p className="text-gray-600 leading-relaxed">Vous sous-estimez votre valeur et proposez des tarifs qui ne reflètent pas votre expertise réelle.</p>
<div className="mt-4 flex items-center text-orange-600 font-semibold text-sm">
<svg className="lucide lucide-trending-down w-4 h-4 mr-2" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                            Impact majeur
                        </div>
</div>
<div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 animate-slide-right delay-1000 group">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-red-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:rotate-12 transition-transform duration-300">3</div>
<h4 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">Pas de Système</h4>
<p className="text-gray-600 leading-relaxed">Vous n'avez pas de processus automatisé pour générer des leads qualifiés en continu.</p>
<div className="mt-4 flex items-center text-purple-600 font-semibold text-sm">
<svg className="lucide lucide-zap-off w-4 h-4 mr-2" data-lucide="zap-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
                            Blocage total
                        </div>
</div>
</div>
<div className="text-center mt-12 animate-fade-blur delay-1200">
<button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        DÉCOUVRIR LA SOLUTION
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=" fill="%23ffffff" fillOpacity="0.05" fillRule="evenodd" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></div>
<div className="max-w-5xl mx-auto text-center px-6 relative z-10">
<div className="glass p-12 rounded-3xl animate-scale-bounce">
<h3 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight animate-slide-up delay-200">
                    TRANSFORMEZ VOTRE EXPERTISE EN 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 animate-gradient">
                        MACHINE À CASH
                    </span>
</h3>
<p className="text-xl text-gray-300 mb-10 animate-fade-blur delay-400">
                    Rejoignez les 15,000+ entrepreneurs qui génèrent déjà des revenus à 5 et 6 chiffres
                </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-600">
<button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-110 shadow-2xl animate-pulse-glow">
                        COMMENCER MAINTENANT
                    </button>
<div className="text-center text-white">
<p className="text-sm text-gray-400">💳 Sans engagement</p>
<p className="text-sm text-gray-400">✅ Garantie 30 jours</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="temoignages">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center space-x-2 mb-6 glass-card px-6 py-3 rounded-full animate-scale-bounce">
<div className="flex space-x-1">
<svg className="lucide lucide-star w-5 h-5 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<span className="text-green-600 font-bold text-lg">4.9/5 sur Trustpilot</span>
</div>
<h3 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-slide-up delay-200">
                    ILS ONT <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">TRANSFORMÉ</span> LEUR VIE
                </h3>
<p className="text-xl text-gray-600 animate-fade-blur delay-300">
                    Des résultats réels de vrais entrepreneurs
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 animate-slide-up delay-400 hover:shadow-2xl">
<div className="flex space-x-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<p className="text-gray-700 mb-6 leading-relaxed font-medium">"En 3 mois, j'ai généré 25K€ grâce aux stratégies enseignées. Les résultats dépassent mes attentes !"</p>
<div className="flex items-center space-x-3">
<img alt="Marie L." className="w-12 h-12 rounded-full ring-2 ring-blue-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div>
<p className="font-bold">Marie L.</p>
<p className="text-gray-500 text-sm">Coach Business</p>
<p className="text-green-600 text-xs font-semibold">✅ +25K€ en 3 mois</p>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 animate-slide-up delay-600 hover:shadow-2xl">
<div className="flex space-x-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<p className="text-gray-700 mb-6 leading-relaxed font-medium">"Formation incroyable ! J'ai multiplié mon chiffre d'affaires par 3 en appliquant les techniques."</p>
<div className="flex items-center space-x-3">
<img alt="Thomas R." className="w-12 h-12 rounded-full ring-2 ring-purple-200" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" />
<div>
<p className="font-bold">Thomas R.</p>
<p className="text-gray-500 text-sm">Consultant</p>
<p className="text-green-600 text-xs font-semibold">✅ CA x3 en 6 mois</p>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 animate-slide-up delay-800 hover:shadow-2xl">
<div className="flex space-x-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<p className="text-gray-700 mb-6 leading-relaxed font-medium">"Enfin trouvé ma niche profitable ! Mes revenus ont explosé grâce à cette méthode."</p>
<div className="flex items-center space-x-3">
<img alt="Sophie M." className="w-12 h-12 rounded-full ring-2 ring-pink-200" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" />
<div>
<p className="font-bold">Sophie M.</p>
<p className="text-gray-500 text-sm">Formatrice</p>
<p className="text-green-600 text-xs font-semibold">✅ Niche x5 rentable</p>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 animate-slide-up delay-1000 hover:shadow-2xl">
<div className="flex space-x-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-500 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<p className="text-gray-700 mb-6 leading-relaxed font-medium">"Système d'automatisation parfait ! Je gagne plus en travaillant moins. Révolutionnaire !"</p>
<div className="flex items-center space-x-3">
<img alt="Julien P." className="w-12 h-12 rounded-full ring-2 ring-green-200" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" />
<div>
<p className="font-bold">Julien P.</p>
<p className="text-gray-500 text-sm">E-commerce</p>
<p className="text-green-600 text-xs font-semibold">✅ Automatisation 100%</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=" fill="none" fillOpacity="0.03" fillRule="evenodd" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="glass p-12 rounded-3xl animate-scale-bounce shadow-2xl">
<div className="text-center mb-8">
<h3 className="text-3xl font-bold text-white mb-2 tracking-tight animate-slide-down delay-200">
                        🎁 ACCÈS GRATUIT EXCLUSIF
                    </h3>
<p className="text-xl text-gray-300 animate-fade-blur delay-400">
                        Recevez le guide des 7 étapes pour créer votre business en ligne + Bonus secrets
                    </p>
</div>
<form className="space-y-6 animate-slide-up delay-600">
<div className="grid md:grid-cols-2 gap-6">
<div className="relative">
<input className="w-full px-6 py-4 glass-card border-0 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none text-lg placeholder-gray-500 transition-all duration-300 hover:scale-105 focus:scale-105" placeholder="Votre prénom" type="text" />
<svg className="lucide lucide-user absolute right-4 top-4 w-6 h-6 text-gray-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="7"></circle></svg>
</div>
<div className="relative">
<input className="w-full px-6 py-4 glass-card border-0 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none text-lg placeholder-gray-500 transition-all duration-300 hover:scale-105 focus:scale-105" placeholder="Votre email professionnel" type="email" />
<svg className="lucide lucide-mail absolute right-4 top-4 w-6 h-6 text-gray-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="16" rx="2" width="20"></rect></svg>
</div>
</div>
<div className="flex items-start space-x-3 animate-fade-blur delay-800">
<div className="relative mt-1">
<input className="sr-only peer" id="consent" type="checkbox" />
<div className="w-6 h-6 glass border-2 border-white/30 rounded peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-blue-600 cursor-pointer transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-check w-4 h-4 text-white opacity-0 peer-checked:opacity-100 absolute top-0.5 left-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</div>
<label className="text-sm text-gray-300 cursor-pointer" htmlFor="consent">
                            ✅ J'accepte de recevoir des conseils marketing exclusifs et des offres spéciales
                        </label>
</div>
<button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-5 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl animate-pulse-glow delay-1000" type="submit">
                        🚀 RECEVOIR LE GUIDE GRATUIT + BONUS
                    </button>
<div className="text-center text-gray-400 text-sm animate-fade-blur delay-1200">
<p>🔒 Vos données sont 100% sécurisées</p>
<p>📧 Pas de spam, que du contenu de valeur</p>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-gray-900 py-12 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="glass-dark p-8 rounded-2xl">
<div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
<div className="text-center md:text-left animate-fade-blur">
<div className="text-2xl font-bold text-white mb-2 tracking-tight">MASTERCLASS</div>
<p className="text-gray-400 text-sm">Transformez votre expertise en business rentable</p>
</div>
<div className="flex flex-wrap justify-center md:justify-end space-x-6 animate-slide-left delay-200">
<a className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 hover:scale-110" href="#">Mentions légales</a>
<a className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 hover:scale-110" href="#">CGV</a>
<a className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 hover:scale-110" href="#">Politique de confidentialité</a>
<a className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 hover:scale-110" href="#">Contact</a>
</div>
</div>
<div className="border-t border-gray-800 mt-8 pt-8 text-center animate-fade-blur delay-400">
<p className="text-gray-500 text-sm">© 2024 Masterclass Marketing Digital. Tous droits réservés. 🇫🇷 Fait avec ❤️ en France</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
