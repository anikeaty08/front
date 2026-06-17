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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 flex items-center gap-3">
<div className="w-8 h-8 bg-[#1C1C1C] text-[#C9A961] flex items-center justify-center font-serif text-lg font-bold font-geist">A</div>
<span className="font-semibold text-sm tracking-[0.2em] text-[#1C1C1C] uppercase font-geist">Artisans Bois</span>
</div>

<div className="hidden md:flex items-center space-x-10">
<a className="hover:text-[#8B6F47] transition-colors text-sm font-medium text-gray-600 font-geist" href="#savoir-faire">Savoir-faire</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#8B6F47] transition-colors font-geist" href="#cuisines">Cuisines</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#8B6F47] transition-colors font-geist" href="#realisations">Réalisations</a>
<a className="px-5 py-2.5 bg-[#1C1C1C] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#8B6F47] transition-all duration-300 font-geist" href="#contact">
                        Demander un devis
                    </a>
</div>

<div className="md:hidden">
<button className="text-[#1C1C1C] p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden bg-[#F9F7F2] pt-20 relative items-center">
<div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

<div className="lg:py-0 animate-fade-up pt-12 pb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] mb-8 shadow-sm">
<iconify-icon className="text-[#C9A961]" icon="solar:medal-ribbon-star-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold tracking-wide text-gray-600 uppercase font-geist">Maîtres Menuisiers depuis 1985</span>
</div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-semibold text-[#1C1C1C] tracking-tight font-space-grotesk mb-6">
                    L'Excellence <br/>
<span className="text-[#8B6F47] font-space-grotesk font-semibold">du Sur-Mesure.</span>
</h1>
<p className="text-lg text-gray-500 font-light leading-relaxed max-w-lg mb-10 border-l-2 border-[#C9A961] pl-6 font-geist">
                    Conception et fabrication artisanale à Lille. Nous transformons le bois noble en cuisines d'exception et portes massives pour des intérieurs uniques.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1C1C1C] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#8B6F47] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-gray-200" href="#contact">
<span className="font-geist">Voir nos projets</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#1C1C1C] text-[#1C1C1C] text-sm font-semibold tracking-widest uppercase hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 font-geist" href="#atelier">
                        Notre Atelier
                    </a>
</div>
<div className="mt-12 flex items-center gap-8 text-gray-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8B6F47]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-gray-600 font-geist">BOIS CERTIFIÉ FSC</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#8B6F47]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-gray-600 font-geist">GARANTIE DÉCENNALE</span>
</div>
</div>
</div>
</div>

<div className="hidden lg:block absolute top-0 right-0 w-[50%] h-full hero-clip z-0">
<div className="absolute inset-0 bg-[#1C1C1C]/10 z-10"></div>
<img alt="Cuisine Luxe Menuiserie" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="lg:hidden w-full h-64 sm:h-96 mt-8 relative">
<img alt="Cuisine Luxe Menuiserie" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="savoir-faire">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-16">

<div className="lg:col-span-1">
<h2 className="text-sm font-bold text-[#C9A961] tracking-widest uppercase mb-3 font-geist">Notre Expertise</h2>
<h3 className="text-4xl text-[#1C1C1C] mb-6 tracking-tight font-space-grotesk font-semibold">Façonner l'élégance</h3>
<p className="text-gray-500 leading-relaxed font-light mb-8 font-geist">
                        Chaque projet est une collaboration étroite entre vos désirs et notre savoir-faire technique. Du chêne massif au noyer américain, nous sélectionnons les essences les plus nobles.
                    </p>
<a className="inline-flex items-center gap-2 text-[#1C1C1C] font-semibold text-sm border-b border-[#1C1C1C] pb-1 hover:text-[#8B6F47] hover:border-[#8B6F47] transition-colors font-geist" href="#">
                        Découvrir les matériaux <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">

<div className="p-8 bg-[#F9F7F2] border border-gray-100 hover:border-[#C9A961]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#8B6F47] shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chef-hat-heart-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl text-[#1C1C1C] mb-3 font-space-grotesk font-semibold">Cuisines Signature</h4>
<p className="text-sm text-gray-500 leading-relaxed font-geist">
                            Conception ergonomique et esthétique raffinée. Plans de travail en pierre naturelle et façades en bois texturé.
                        </p>
</div>

<div className="p-8 bg-[#F9F7F2] border border-gray-100 hover:border-[#C9A961]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#8B6F47] shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:key-minimalistic-square-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl text-[#1C1C1C] mb-3 font-space-grotesk font-semibold">Portes &amp; Entrées</h4>
<p className="text-sm text-gray-500 leading-relaxed font-geist">
                            Portes d'entrée monumentales et portes intérieures invisibles. Sécurité renforcée et isolation phonique optimale.
                        </p>
</div>

<div className="p-8 bg-[#F9F7F2] border border-gray-100 hover:border-[#C9A961]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#8B6F47] shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hanger-2-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl text-[#1C1C1C] mb-3 font-space-grotesk font-semibold">Dressings Sur-Mesure</h4>
<p className="text-sm text-gray-500 leading-relaxed font-geist">
                            Organisation intelligente de vos espaces. Éclairage LED intégré, tiroirs feutrés et finitions laiton.
                        </p>
</div>

<div className="p-8 bg-[#F9F7F2] border border-gray-100 hover:border-[#C9A961]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-[#8B6F47] shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl text-[#1C1C1C] mb-3 font-space-grotesk font-semibold">Agencement Commercial</h4>
<p className="text-sm text-gray-500 leading-relaxed font-geist">
                            Pour boutiques de luxe, hôtels et restaurants. Comptoirs d'accueil et mobiliers spécifiques.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-[#1C1C1C] pt-24 pb-24" id="realisations">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<h2 className="text-sm font-bold text-[#C9A961] tracking-widest uppercase mb-3 font-geist">Portfolio</h2>
<h3 className="text-3xl md:text-5xl tracking-tight font-space-grotesk font-semibold">Dernières Réalisations</h3>
</div>
<a className="px-6 py-3 border border-white/20 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#1C1C1C] transition-colors font-geist" href="#">
                    Tout voir
                </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[120vh] md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-gray-900 rounded-sm">
<img alt="Cuisine Moderne" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
<p className="text-[#C9A961] text-xs font-bold uppercase tracking-widest mb-2 font-geist">Vieux-Lille</p>
<h4 className="text-2xl font-space-grotesk font-semibold">Rénovation Haussmannienne</h4>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden bg-gray-900 rounded-sm">
<img alt="Détail Bois" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1457276587196-a9d53d84c58b?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
<p className="text-[#C9A961] text-xs font-bold uppercase tracking-widest mb-1 font-geist">Marcq-en-Barœul</p>
<h4 className="text-lg font-serif font-geist">Bibliothèque Noyer</h4>
</div>
</div>

<div className="relative group overflow-hidden bg-gray-900 rounded-sm">
<img alt="Escalier" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8745dfe2-a45f-4a59-9856-ff5f52469c00_800w.png"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
<h4 className="text-lg font-serif font-geist">Escalier Suspendu</h4>
</div>
</div>

<div className="relative group overflow-hidden bg-gray-900 rounded-sm">
<img alt="Porte" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1655720449294-a5035c3a0256?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
<h4 className="text-lg font-serif font-geist">Porte Massive</h4>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F9F7F2] pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-[#8B6F47] mb-8 opacity-50" icon="solar:quote-up-linear" width="48"></iconify-icon>
<blockquote className="text-2xl md:text-4xl text-[#1C1C1C] leading-snug mb-10 font-space-grotesk font-semibold">
                "Une maîtrise du bois impressionnante. Artisans Bois a su traduire notre vision abstraite en une cuisine qui est devenue la pièce maîtresse de notre maison."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="text-right">
<p className="uppercase text-sm font-bold text-[#1C1C1C] tracking-wider font-geist">Sophie &amp; Laurent M.</p>
<p className="text-xs text-gray-500 font-geist">Projet Lambersart, 2023</p>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border-t pt-24 pb-24" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-sm font-bold text-[#C9A961] tracking-widest uppercase mb-3 font-geist">Contact</h2>
<h3 className="text-4xl text-[#1C1C1C] mb-6 tracking-tight font-space-grotesk font-semibold">Parlons de votre projet</h3>
<p className="font-light text-gray-500 max-w-md mb-8 font-geist">
                        Remplissez le formulaire pour une première estimation ou prenez rendez-vous pour visiter notre showroom à Lille.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-[#F9F7F2] text-[#1C1C1C] rounded-sm">
<iconify-icon className="" height="24" icon="solar:map-point-linear" style={{color: 'rgb(28, 28, 28)'}} width="24"></iconify-icon>
</div>
<div className="">
<h5 className="text-sm font-bold uppercase tracking-wide mb-1 font-geist">Showroom</h5>
<p className="text-gray-600 font-light font-geist">12 Rue de la Monnaie,59000 Lille, France</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-[#F9F7F2] text-[#1C1C1C] rounded-sm">
<iconify-icon className="" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div className="">
<h5 className="text-sm font-bold uppercase tracking-wide mb-1 font-geist">Téléphone</h5>
<p className="font-light text-gray-600 font-geist">+33 3 20 55 66 77</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-[#F9F7F2] text-[#1C1C1C] rounded-sm">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div className="">
<h5 className="text-sm font-bold uppercase tracking-wide mb-1 font-geist">Email</h5>
<p className="text-gray-600 font-light font-geist">contact@artisansbois.fr</p>
</div>
</div>
</div>
</div>

<div className="bg-[#F9F7F2] p-8 md:p-10 rounded-sm border border-[#E5E7EB]">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-gray-500 font-geist">Nom</label>
<input className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] transition-all" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-gray-500 font-geist">Prénom</label>
<input className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] transition-all" placeholder="Votre prénom" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-gray-500 font-geist">Email</label>
<input className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] transition-all" placeholder="votre@email.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-gray-500 font-geist">Type de projet</label>
<div className="relative">
<select className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] appearance-none transition-all">
<option className="font-geist">Cuisine sur-mesure</option>
<option className="font-geist">Dressing / Rangement</option>
<option className="font-geist">Menuiserie Intérieure</option>
<option className="font-geist">Autre</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-gray-500 font-geist">Message</label>
<textarea className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961] transition-all" placeholder="Décrivez votre projet..." rows="4"></textarea>
</div>
<button className="w-full bg-[#1C1C1C] text-white font-semibold uppercase tracking-widest text-xs py-4 hover:bg-[#8B6F47] transition-colors duration-300 font-geist" type="button">
                            Envoyer la demande
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#1C1C1C] text-white pt-20 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-white text-[#1C1C1C] flex items-center justify-center font-serif text-lg font-bold font-geist">A</div>
<span className="font-semibold text-sm tracking-[0.2em] uppercase font-geist">Artisans Bois</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed font-geist">
                        Menuiserie d'art et agencement sur-mesure. L'excellence du savoir-faire français au service de votre intérieur.
                    </p>
</div>
<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A961] mb-6 font-geist">Navigation</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">Accueil</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#savoir-faire">Savoir-faire</a></li>
<li className=""><a className="hover:text-white transition-colors font-geist" href="#realisations">Réalisations</a></li>
<li className=""><a className="hover:text-white transition-colors font-geist" href="#atelier">L'Atelier</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A961] mb-6 font-geist">Légal</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">Mentions légales</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Politique de confidentialité</a></li>
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">CGV</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A961] mb-6 font-geist">Suivez-nous</h4>
<div className="flex flex-wrap gap-x-4 gap-y-4">
<a aria-label="Instagram" className="flex items-center justify-center hover:bg-white hover:text-black transition-all w-10 h-10 border-white/20 border" href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
<i className="fab fa-instagram"></i>
</a>
<a aria-label="Pinterest" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all" href="#">
<i className="fab fa-pinterest"></i>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all" href="#">
<i className="fab fa-linkedin-in"></i>
</a>
<a aria-label="WhatsApp" className="flex items-center justify-center hover:bg-white hover:text-black transition-all w-10 h-10 border-white/20 border" href="https://wa.me/33620556677" rel="noopener noreferrer" target="_blank">
<i className="fab fa-whatsapp"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500 uppercase tracking-wider font-geist">© 2023 Artisans Bois Design. Tous droits réservés.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
<span className="text-xs text-gray-400 font-geist">Disponible pour nouveaux projets</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
