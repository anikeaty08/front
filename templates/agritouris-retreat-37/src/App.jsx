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
      

<nav className="w-full px-6 py-8 md:px-12 flex items-center justify-between z-50 absolute top-0 left-0 right-0">
<div className="font-serif text-2xl tracking-tighter font-medium text-[#3B5340]">FI</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-[#3B5340]">
<a className="hover:text-[#B85B44] transition-colors duration-300" href="#table">Table d'Hôtes</a>
<a className="hover:text-[#B85B44] transition-colors duration-300" href="#gite">Hébergement</a>
<a className="hover:text-[#B85B44] transition-colors duration-300" href="#lieu">Le Domaine</a>
</div>
<button className="md:hidden text-[#3B5340]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col items-start z-10">
<span className="text-xs uppercase tracking-widest text-[#B85B44] mb-4 font-normal">Ferme Traditionnelle Réunionnaise</span>
<h1 className="font-serif text-5xl md:text-7xl leading-tight tracking-tight text-[#3B5340] mb-6 font-normal">
                Vivez l'authenticité de La Réunion,<br/>
<span className="italic text-[#4A6B50]">du jardin à l'assiette.</span>
</h1>
<p className="text-base md:text-lg text-[#3B5340]/80 mb-10 max-w-md font-light leading-relaxed">
                Une immersion totale dans le patrimoine créole, entre nature luxuriante et saveurs cuites au feu de bois.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-[#B85B44] text-white rounded-full text-sm font-normal text-center hover:bg-[#a04e39] transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2" href="#gite">
                    Réserver un Gîte
                    <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 border border-[#3B5340]/30 text-[#3B5340] bg-white/50 backdrop-blur-sm rounded-full text-sm font-normal text-center hover:bg-[#3B5340] hover:text-[#FDFBF7] hover:border-[#3B5340] transition-all duration-300 flex items-center justify-center gap-2" href="#table">
                    Réserver une Table
                </a>
</div>
</div>
<div className="relative w-full h-[50vh] lg:h-[70vh]">
<div className="absolute inset-0 bg-[#3B5340]/5 rounded-t-[10rem] rounded-br-[10rem] transform translate-x-4 translate-y-4"></div>
<img alt="Végétation tropicale La Réunion" className="w-full h-full object-cover rounded-t-[10rem] rounded-br-[10rem] shadow-xl" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&amp;fit=crop&amp;q=80" style={{objectPosition: '50% 30%'}}/>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white/50 border-y border-[#3B5340]/5" id="table">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative h-[60vh] w-full">
<div className="absolute -left-6 -top-6 w-32 h-32 bg-[#FDFBF7] rounded-full flex items-center justify-center shadow-sm z-10 border border-[#3B5340]/10">
<span className="text-xs text-center font-serif text-[#B85B44] tracking-tight leading-snug">Accueil<br/>Paysan</span>
</div>
<img alt="Cuisine rustique" className="w-full h-full object-cover rounded-tl-[8rem] rounded-br-3xl shadow-lg" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-3 mb-6 text-[#B85B44]">
<iconify-icon height="24" icon="solar:fire-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm tracking-wide font-normal uppercase">Table d'Hôtes</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#3B5340] mb-8 font-normal leading-tight">
                    Une cuisine vivante,<br/>cultivée sous vos yeux.
                </h2>
<p className="text-base text-[#3B5340]/80 font-light leading-relaxed mb-8">
                    Découvrez l'âme de la gastronomie créole. Notre cuisine au feu de bois réveille les saveurs des produits frais récoltés le matin même dans nos jardins. En tant que membre du réseau Accueil Paysan, nous garantissons une expérience authentique et respectueuse de notre terroir.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3 text-sm text-[#3B5340]/90 font-light">
<iconify-icon className="text-[#B85B44] shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Produits de la ferme et locaux exclusivement.
                    </li>
<li className="flex items-start gap-3 text-sm text-[#3B5340]/90 font-light">
<iconify-icon className="text-[#B85B44] shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Cuisson traditionnelle au feu de bois.
                    </li>
<li className="flex items-start gap-3 text-sm text-[#3B5340]/90 font-light">
<iconify-icon className="text-[#B85B44] shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Échanges chaleureux et partage de notre culture.
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12" id="gite">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex items-center gap-3 mb-6 text-[#4A6B50]">
<iconify-icon height="24" icon="solar:home-smile-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm tracking-wide font-normal uppercase">Hébergement</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#3B5340] mb-8 font-normal leading-tight">
                    Des bungalows créoles<br/>nichés dans la nature.
                </h2>
<p className="text-base text-[#3B5340]/80 font-light leading-relaxed mb-8">
                    Retrouvez la paix dans nos structures en bois, conçues selon l'architecture traditionnelle de l'île. Chaque bungalow est un havre de paix indépendant, s'intégrant parfaitement dans notre jardin botanique. Endormez-vous au son de la nature tropicale.
                </p>
<a className="inline-flex items-center gap-2 text-sm text-[#B85B44] font-normal hover:opacity-70 transition-opacity border-b border-[#B85B44]/30 pb-1" href="#reserver">
                    Découvrir nos hébergements
                    <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="relative h-[60vh] w-full">
<img alt="Bungalow en bois" className="w-full h-full object-cover rounded-tr-[8rem] rounded-bl-[4rem] shadow-lg" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#3B5340] rounded-full opacity-5 -z-10"></div>
</div>
</div>
</section>

<section className="py-24 bg-[#3B5340] text-[#FDFBF7] px-6 md:px-12 overflow-hidden relative" id="lieu">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#FDFBF7 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6 font-normal">Au cœur de l'histoire réunionnaise</h2>
<p className="text-base text-[#FDFBF7]/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                Idéalement située, la Ferme Ichabe vous offre une retraite rurale tout en restant proche du patrimoine culturel. Nous sommes situés à quelques pas du <strong className="font-normal text-white">Musée de Villèle</strong> et de la majestueuse <strong className="font-normal text-white">Chapelle Pointée</strong>.
            </p>
<div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden relative shadow-2xl">
<img alt="Paysage près du Musée de Villèle" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#3B5340]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="flex flex-col items-center gap-2 text-white hover:text-[#B85B44] transition-colors">
<div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
<iconify-icon height="24" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs uppercase tracking-widest mt-2">Voir sur la carte</span>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#FDFBF7] pt-24 pb-12 px-6 md:px-12 border-t border-[#3B5340]/10 mt-auto">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">

<div>
<div className="font-serif text-3xl tracking-tighter font-normal text-[#3B5340] mb-6">FI</div>
<p className="text-sm text-[#3B5340]/70 font-light max-w-xs mb-8">
                    Ferme Ichabe.<br/>
                    Tradition, nature et gastronomie à La Réunion.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-[#3B5340]/20 flex items-center justify-center text-[#3B5340] hover:bg-[#3B5340] hover:text-[#FDFBF7] transition-colors" href="#">
<iconify-icon height="18" icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-[#3B5340]/20 flex items-center justify-center text-[#3B5340] hover:bg-[#3B5340] hover:text-[#FDFBF7] transition-colors" href="#">
<iconify-icon height="18" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<h3 className="font-serif text-xl tracking-tight text-[#3B5340] mb-8 font-normal">Informations Pratiques</h3>
<div className="space-y-4">
<details className="group border-b border-[#3B5340]/10 pb-4">
<summary className="flex justify-between items-center cursor-pointer text-sm text-[#3B5340] font-normal hover:text-[#B85B44] transition-colors">
<span>Les enfants sont-ils acceptés ?</span>
<iconify-icon className="transition-transform duration-300 group-open:rotate-180 text-[#3B5340]/50" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="pt-4 text-sm text-[#3B5340]/70 font-light leading-relaxed">
                            Oui, les enfants sont les bienvenus. Le vaste domaine est un espace merveilleux pour qu'ils découvrent la nature et les animaux de la ferme. Des menus adaptés peuvent être préparés sur demande préalable.
                        </div>
</details>
<details className="group border-b border-[#3B5340]/10 pb-4">
<summary className="flex justify-between items-center cursor-pointer text-sm text-[#3B5340] font-normal hover:text-[#B85B44] transition-colors">
<span>Où puis-je me garer ?</span>
<iconify-icon className="transition-transform duration-300 group-open:rotate-180 text-[#3B5340]/50" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="pt-4 text-sm text-[#3B5340]/70 font-light leading-relaxed">
                            Un parking privé et gratuit est à la disposition exclusive de nos hôtes et convives à l'entrée du domaine.
                        </div>
</details>
<details className="group border-b border-[#3B5340]/10 pb-4">
<summary className="flex justify-between items-center cursor-pointer text-sm text-[#3B5340] font-normal hover:text-[#B85B44] transition-colors">
<span>Faut-il réserver pour la Table d'Hôtes ?</span>
<iconify-icon className="transition-transform duration-300 group-open:rotate-180 text-[#3B5340]/50" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="pt-4 text-sm text-[#3B5340]/70 font-light leading-relaxed">
                            Oui, la réservation est obligatoire au minimum 24h à l'avance. Notre cuisine dépendant entièrement de nos récoltes journalières, cela nous permet de préparer votre repas dans les meilleures conditions.
                        </div>
</details>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#3B5340]/10 text-xs text-[#3B5340]/50 font-light">
<p>© 2023 Ferme Ichabe. Tous droits réservés.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-[#3B5340] transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-[#3B5340] transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</footer>

    </>
  );
}
