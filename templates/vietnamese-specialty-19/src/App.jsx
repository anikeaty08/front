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
      

<div className="grain-overlay fixed inset-0 pointer-events-none z-50"></div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 mix-blend-multiply">
<div className="flex justify-between items-center max-w-7xl mx-auto">
<div className="flex gap-2 items-center group cursor-pointer">
<span className="tracking-widest font-medium uppercase text-sm border border-[#2C1810] px-3 py-1 group-hover:bg-[#2C1810] group-hover:text-[#F4F1EA] transition-colors duration-300">Menu</span>
</div>
<a className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl tracking-tighter font-semibold" href="#">
                HUO
            </a>
<div className="flex gap-6 items-center">
<a className="hidden md:block text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity" href="#">Journal</a>
<a className="hidden md:block text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity" href="#">Boutique</a>
<button aria-label="Cart" className="relative">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-[#C2410C] rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-end pb-24 px-6 pt-32">
<div className="absolute inset-0 z-0">

<img alt="Vietnamese Coffee Texture" className="w-full h-full object-cover opacity-[0.08] grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
<div className="md:col-span-8">
<h1 className="text-7xl md:text-9xl leading-[0.85] tracking-tight font-normal mb-8">
<span className="block">Une culture,</span>
<span className="block pl-12 md:pl-24 italic">pas un produit.</span>
</h1>
</div>
<div className="md:col-span-4 flex flex-col justify-end md:pl-8 pb-2">
<p className="text-sm md:text-base leading-relaxed opacity-80 mb-8 max-w-xs">
                    HUO explore les profondeurs du café vietnamien. 
                    Torréfaction lente. Petits lots.
                    Honorer la terre des hauts plateaux.
                </p>
<a className="group flex items-center gap-3 text-sm uppercase tracking-widest hover:text-[#C2410C] transition-colors" href="#collection">
                    Explorer la matière
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="px-6 py-24 md:py-32 border-t border-[#2C1810]/10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2C1810]/10 border border-[#2C1810]/10">

<div className="bg-[#F4F1EA] p-8 md:p-12 flex flex-col justify-between h-96 relative group overflow-hidden">
<div className="z-10 relative">
<iconify-icon className="mb-6 opacity-60" icon="solar:map-point-linear" width="24"></iconify-icon>
<h3 className="text-3xl md:text-4xl serif font-normal mb-4">Origine Unique</h3>
<p className="text-sm opacity-70 max-w-[200px]">Puisé exclusivement dans les sols basaltiques. Terroir volcanique.</p>
</div>
<div className="absolute bottom-8 right-8 z-10">
<span className="text-xs uppercase tracking-widest opacity-40">Dà Lat / 1500m</span>
</div>

<div className="absolute inset-0 bg-[#EBE7DE] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-0"></div>
</div>

<div className="bg-[#F4F1EA] p-8 md:p-12 flex flex-col justify-between h-96 relative group overflow-hidden">
<div className="z-10 relative">
<iconify-icon className="mb-6 opacity-60" icon="solar:stopwatch-linear" width="24"></iconify-icon>
<h3 className="text-3xl md:text-4xl serif font-normal mb-4">Temps Long</h3>
<p className="text-sm opacity-70 max-w-[200px]">Un développement lent. Révéler les notes complexes et caramélisées.</p>
</div>
<div className="absolute bottom-8 right-8 z-10">
<span className="text-xs uppercase tracking-widest opacity-40">Torréfaction City+</span>
</div>
<div className="absolute inset-0 bg-[#EBE7DE] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-0"></div>
</div>

<div className="bg-[#F4F1EA] p-8 md:p-12 flex flex-col justify-between h-96 relative group overflow-hidden">
<div className="z-10 relative">
<iconify-icon className="mb-6 opacity-60" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
<h3 className="text-3xl md:text-4xl serif font-normal mb-4">Transparence</h3>
<p className="text-sm opacity-70 max-w-[200px]">Lien direct. De la main du fermier à la vôtre. Sans intermédiaire.</p>
</div>
<div className="absolute bottom-8 right-8 z-10">
<span className="text-xs uppercase tracking-widest opacity-40">Éthique</span>
</div>
<div className="absolute inset-0 bg-[#EBE7DE] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-0"></div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:py-32">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
<div className="relative">
<img alt="Coffee Pouring" className="w-full aspect-[4/5] object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F4F1EA] flex items-center justify-center border border-[#2C1810]/10 rounded-full">
<iconify-icon className="animate-pulse" icon="solar:cup-hot-linear" width="32"></iconify-icon>
</div>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs font-medium uppercase tracking-widest text-[#C2410C] mb-6">Le Rituel</span>
<h2 className="text-5xl md:text-6xl serif font-normal leading-none mb-10 tracking-tight">
                    Le temps suspendu <br/> <span className="italic text-opacity-50 text-[#2C1810]">dans la tasse.</span>
</h2>
<div className="space-y-10 border-l border-[#2C1810]/10 pl-8">
<div className="group cursor-pointer">
<h4 className="text-lg font-medium mb-2 group-hover:text-[#C2410C] transition-colors">Le Silence de l'Aube</h4>
<p className="text-sm opacity-60 leading-relaxed">Avant le tumulte du monde. Une clarté pure, portée par l'intensité du Robusta.</p>
</div>
<div className="group cursor-pointer">
<h4 className="text-lg font-medium mb-2 group-hover:text-[#C2410C] transition-colors">L'Acte Créatif</h4>
<p className="text-sm opacity-60 leading-relaxed">L'esprit s'aiguise. L'amertume complexe stimule la pensée profonde.</p>
</div>
<div className="group cursor-pointer">
<h4 className="text-lg font-medium mb-2 group-hover:text-[#C2410C] transition-colors">L'Instant Partagé</h4>
<p className="text-sm opacity-60 leading-relaxed">Le café comme un pont. Un prétexte à la conversation et à l'hospitalité.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#231713] text-[#F4F1EA] py-32 px-6" id="collection">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
<h2 className="text-5xl md:text-7xl serif font-normal tracking-tight">La Collection</h2>
<p className="text-white/60 text-sm max-w-xs mt-6 md:mt-0">Choisie pour le palais averti. Récoltes saisonnières et limitées.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="aspect-square bg-[#2C1F1B] mb-8 overflow-hidden relative border border-white/5">
<img alt="Dark Roast Bean" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="bg-[#F4F1EA] text-[#2C1810] px-6 py-3 text-xs uppercase tracking-widest">Voir les détails</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl serif mb-1">Robusta des Cimes</h3>
<p className="text-white/40 text-xs uppercase tracking-widest">Torréfaction Sombre / Cacao</p>
</div>
<span className="text-lg font-light">$22</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#2C1F1B] mb-8 overflow-hidden relative border border-white/5">
<img alt="Arabica Bean" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="bg-[#F4F1EA] text-[#2C1810] px-6 py-3 text-xs uppercase tracking-widest">Voir les détails</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl serif mb-1">Arabica Dà Lat</h3>
<p className="text-white/40 text-xs uppercase tracking-widest">Torréfaction Moyenne / Agrumes</p>
</div>
<span className="text-lg font-light">$26</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 border-b border-[#2C1810]/10">
<div className="max-w-7xl mx-auto">
<h2 className="text-xs font-medium uppercase tracking-widest mb-16 text-center opacity-50">Murmures de la communauté</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center">
<iconify-icon className="opacity-20 mb-6 text-3xl" icon="solar:quote-up-linear"></iconify-icon>
<p className="serif text-xl md:text-2xl italic leading-relaxed mb-6">"Enfin, une marque qui traite le café vietnamien avec la dignité qu'il mérite. Le profil est impeccable."</p>
<cite className="not-italic text-xs uppercase tracking-widest opacity-60">— Elena R., Architecte</cite>
</div>
<div className="text-center md:border-l md:border-r border-[#2C1810]/10 md:px-12">
<iconify-icon className="opacity-20 mb-6 text-3xl" icon="solar:quote-up-linear"></iconify-icon>
<p className="serif text-xl md:text-2xl italic leading-relaxed mb-6">"HUO a redéfini mon rituel matinal. Ce n'est pas juste de la caféine, c'est une expérience sensorielle."</p>
<cite className="not-italic text-xs uppercase tracking-widest opacity-60">— Marcus T., Designer</cite>
</div>
<div className="text-center">
<iconify-icon className="opacity-20 mb-6 text-3xl" icon="solar:quote-up-linear"></iconify-icon>
<p className="serif text-xl md:text-2xl italic leading-relaxed mb-6">"La transparence est rafraîchissante. On goûte le soin apporté à chaque tasse."</p>
<cite className="not-italic text-xs uppercase tracking-widest opacity-60">— Sarah L., Barista</cite>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:py-32 bg-[#EBE7DE]">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl serif font-normal mb-6">L'Offre</h2>
<p className="opacity-70 mb-12 max-w-md mx-auto">Choisissez votre rituel. Sans artifice, juste l'exception.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#F4F1EA] p-8 border border-[#2C1810]/5 hover:border-[#C2410C]/30 transition-colors duration-300">
<h3 className="text-xl serif mb-2">Coffret Découverte</h3>
<p className="text-sm opacity-60 mb-6 h-10">Une sélection de nos récoltes actuelles.</p>
<div className="text-2xl font-light mb-6">$45</div>
<button className="w-full py-3 border border-[#2C1810] text-xs uppercase tracking-widest hover:bg-[#2C1810] hover:text-[#F4F1EA] transition-colors">Acquérir</button>
</div>

<div className="bg-[#2C1810] text-[#F4F1EA] p-8">
<h3 className="text-xl serif mb-2">L'Abonnement</h3>
<p className="text-white/60 text-sm mb-6 h-10">La sélection du maître torréfacteur, chaque mois.</p>
<div className="text-2xl font-light mb-6">$38 <span className="text-xs opacity-50">/ mois</span></div>
<button className="w-full py-3 bg-[#F4F1EA] text-[#2C1810] text-xs uppercase tracking-widest hover:bg-white transition-colors">Souscrire</button>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 text-center overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
<span className="text-[20vw] font-serif italic">HUO</span>
</div>
<div className="relative z-10">
<h2 className="text-5xl md:text-7xl serif font-normal mb-8 tracking-tighter">Goûter l'instant.</h2>
<a className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-[#2C1810] pb-1 hover:text-[#C2410C] hover:border-[#C2410C] transition-colors" href="#">
                Commencer le voyage
            </a>
</div>
</section>

<footer className="bg-[#2C1810] text-[#F4F1EA] px-6 py-16 text-sm">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl tracking-tighter font-semibold block mb-6" href="#">HUO</a>
<p className="opacity-50 max-w-xs leading-relaxed">
                    Élever le café vietnamien de produit à culture. 
                    Torréfié avec précision, infusé avec intention.
                </p>
</div>
<div className="flex flex-col gap-4">
<span className="uppercase tracking-widest text-xs opacity-40 mb-2">Explorer</span>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Boutique</a>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Équipement</a>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Abonnements</a>
</div>
<div className="flex flex-col gap-4">
<span className="uppercase tracking-widest text-xs opacity-40 mb-2">Maison</span>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Philosophie</a>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Journal</a>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Contact</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center opacity-40 text-xs">
<p>© 2024 HUO Coffee. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a href="#">Instagram</a>
<a href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
