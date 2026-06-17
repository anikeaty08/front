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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("translate-y-0", "opacity-100");
entry.target.classList.remove("translate-y-8", "opacity-0");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 grid grid-cols-6 md:grid-cols-12 pointer-events-none z-0 px-6 md:px-12 max-w-[1600px] mx-auto">
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full hidden md:block"></div>
<div className="border-r border-white/5 h-full border-r-0"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-[1600px] mx-auto flex justify-between items-center">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-white flex items-center justify-center transform group-hover:rotate-90 transition-transform duration-500">
<svg className="w-4 h-4" data-lucide="triangle" fill="none" height="24" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-white uppercase ml-2">Architek<span className="font-light text-neutral-500">Futura</span></span>
</div>
<div className="flex items-center gap-8">
<a className="hidden md:block text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#projets">Projets</a>
<a className="hidden md:block text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#studio">Le Studio</a>
<button className="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors">
<span className="hidden md:inline text-xs font-medium mr-2">MENU</span>
<svg className="w-6 h-6" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"></svg>
<svg className="w-6 h-6 -ml-4 mt-2" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"></svg>
</button>
</div>
</div>
</nav>

<header className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center max-w-[1600px] mx-auto z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full items-end">

<div className="md:col-span-8 relative z-20 reveal translate-y-8 opacity-0 transition-all duration-1000 ease-out">
<div className="inline-flex items-center gap-2 mb-6 border border-white/10 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-300">Architecture Brutaliste</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white leading-[0.85] mb-8">
                    SCULPTER <br/>
<span className="text-neutral-500">L'ESPACE</span> <br/>
                    DE DEMAIN.
                </h1>
<p className="text-neutral-400 max-w-md font-light text-sm md:text-base leading-relaxed pl-1 md:pl-2 border-l border-white/20">
                    Une approche radicale du béton et de la lumière. Nous concevons des sanctuaires minimalistes pour une ère nouvelle.
                </p>
</div>

<div className="md:col-span-4 h-[400px] md:h-[600px] relative reveal translate-y-8 opacity-0 transition-all duration-1000 delay-200 ease-out">
<div className="absolute inset-0 bg-neutral-800 overflow-hidden group">
<img alt="Architecture Concrete" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

<div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/30"></div>
<div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/30"></div>
</div>
<div className="absolute -bottom-6 -left-6 md:-left-12 bg-[#111] p-6 border border-white/5 backdrop-blur-xl max-w-xs z-30 hidden md:block">
<div className="flex items-start justify-between mb-4">
<span className="text-xs text-neutral-500 uppercase tracking-wider">Dernier Projet</span>
<svg className="text-white" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"></svg>
</div>
<h3 className="text-white font-medium text-lg tracking-tight mb-1">Villa Monolith</h3>
<p className="text-neutral-400 text-xs font-light">Kyoto, Japon — 2024</p>
</div>
</div>
</div>

<div className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4 reveal translate-y-8 opacity-0 transition-all duration-1000 delay-500">
<div className="h-[1px] w-12 bg-white/30"></div>
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Explorer</span>
</div>
</header>

<section className="py-24 md:py-32 border-t border-white/5 relative z-10 bg-[#050505]" id="studio">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0">

<div className="md:col-span-4 reveal translate-y-8 opacity-0 transition-all duration-700">
<span className="text-xs font-medium text-emerald-500 uppercase tracking-widest mb-4 block">Philosophie</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter leading-tight">
                        L'Ordre dans<br/>
<span className="italic font-light text-neutral-500">le Chaos</span>
</h2>
</div>

<div className="md:col-span-5 md:col-start-6 flex flex-col justify-end reveal translate-y-8 opacity-0 transition-all duration-700 delay-100">
<p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-8">
                        Nous rejetons la symétrie ornementale. Notre architecture célèbre le béton brut, les lignes de fuite infinies et l'intégration technologique invisible.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-4">
<div>
<h4 className="text-white text-2xl font-medium tracking-tight mb-2">01.</h4>
<p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Matériaux</p>
<p className="text-sm text-neutral-500 leading-normal">Béton banché, acier noir, verre dichroïque.</p>
</div>
<div>
<h4 className="text-white text-2xl font-medium tracking-tight mb-2">02.</h4>
<p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Vision</p>
<p className="text-sm text-neutral-500 leading-normal">Minimalisme radical et fonctionnalité absolue.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-white/5 relative z-10" id="projets">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 px-2 reveal translate-y-8 opacity-0 transition-all duration-700">
<h2 className="text-6xl md:text-[8rem] leading-none font-medium tracking-tighter text-white opacity-10">PROJETS</h2>
<div className="mb-4 md:mb-8 text-right">
<p className="text-white text-lg font-medium tracking-tight">Sélection 2023—2024</p>
<p className="text-neutral-500 text-sm font-light">Architecture Résidentielle &amp; Commerciale</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 group cursor-pointer reveal translate-y-8 opacity-0 transition-all duration-700">
<div className="md:col-span-8 relative overflow-hidden bg-neutral-900">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Brutalist Villa" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1525438160292-a4a860951216?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 border border-white/10">
<span className="text-xs font-mono text-white">RÉF. 092</span>
</div>
</div>
<div className="md:col-span-4 flex flex-col justify-end border-l border-white/5 pl-0 md:pl-8 pt-4 md:pt-0">
<h3 className="text-3xl font-medium text-white tracking-tight mb-2 group-hover:text-emerald-500 transition-colors">Résidence Vector</h3>
<p className="text-neutral-500 text-sm mb-6">Biarritz, France</p>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-8 max-w-xs">
                        Une structure en porte-à-faux défiant la gravité, ancrée dans la falaise. Espaces de vie ouverts sur l'océan.
                    </p>
<div className="flex items-center gap-2 text-white text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
<span>Voir le projet</span>
<svg data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"></svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">

<div className="group cursor-pointer reveal translate-y-8 opacity-0 transition-all duration-700 delay-100">
<div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 mb-6">
<img alt="Interior Concrete" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start border-t border-white/10 pt-4">
<div>
<h3 className="text-xl font-medium text-white tracking-tight group-hover:text-emerald-500 transition-colors">Loft Industriel K</h3>
<p className="text-neutral-500 text-sm mt-1">Berlin, Allemagne</p>
</div>
<span className="text-xs font-mono text-neutral-600">2023</span>
</div>
</div>

<div className="group cursor-pointer mt-0 md:mt-24 reveal translate-y-8 opacity-0 transition-all duration-700 delay-200">
<div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 mb-6">
<img alt="Modern House Night" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start border-t border-white/10 pt-4">
<div>
<h3 className="text-xl font-medium text-white tracking-tight group-hover:text-emerald-500 transition-colors">Pavillon Solaire</h3>
<p className="text-neutral-500 text-sm mt-1">Aix-en-Provence, France</p>
</div>
<span className="text-xs font-mono text-neutral-600">2024</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-t border-white/5">
<div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
<div className="relative h-[500px] w-full reveal translate-y-8 opacity-0 transition-all duration-700">
<div className="absolute inset-0 border border-white/10 rotate-3 z-0"></div>
<div className="absolute inset-0 bg-neutral-900 overflow-hidden z-10 grayscale">
<img alt="Concrete Texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40"></div>
</div>
<div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<h3 className="text-5xl md:text-7xl font-medium text-white tracking-tighter text-stroke">MATIÈRE</h3>
<h3 className="text-5xl md:text-7xl font-medium text-white tracking-tighter absolute top-0 left-0 w-full opacity-30 blur-sm">MATIÈRE</h3>
</div>
</div>
<div className="reveal translate-y-8 opacity-0 transition-all duration-700 delay-100">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-8">L'Esthétique du Brut</h2>
<div className="space-y-8">
<div className="flex gap-6 group">
<div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
<svg data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"></svg>
</div>
<div>
<h4 className="text-white text-lg font-medium mb-1">Superposition Structurelle</h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed">Utilisation de plans décalés pour créer une profondeur visuelle unique sans ornementation superflue.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
<svg data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"></svg>
</div>
<div>
<h4 className="text-white text-lg font-medium mb-1">Lumière Contrôlée</h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed">Analyse précise de l'exposition solaire pour sculpter les ombres à l'intérieur de l'habitat.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
<svg data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"></svg>
</div>
<div>
<h4 className="text-white text-lg font-medium mb-1">Domotique Invisible</h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed">Technologie de pointe intégrée dans les murs de béton. La maison respire avec vous.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-neutral-400 pt-24 pb-12 border-t border-white/5 relative z-10">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1 reveal translate-y-8 opacity-0 transition-all duration-700">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-white flex items-center justify-center">
<svg className="w-3 h-3" data-lucide="triangle" fill="none" height="16" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-white uppercase">Architek Futura</span>
</div>
<p className="text-xs leading-relaxed max-w-xs text-neutral-500">
                        Cabinet d'architecture basé à Paris et Tokyo. Spécialisé dans le design minimaliste et brutaliste haut de gamme.
                    </p>
</div>
<div className="reveal translate-y-8 opacity-0 transition-all duration-700 delay-100">
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Navigation</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Accueil</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Projets</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Le Studio</a></li>
<li><a className="hover:text-white hover:translate-x-1 transition-all inline-block" href="#">Presse</a></li>
</ul>
</div>
<div className="reveal translate-y-8 opacity-0 transition-all duration-700 delay-200">
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Contact</h4>
<address className="not-italic text-sm space-y-3 font-light">
<p className="text-neutral-500">Siège Social</p>
<p className="text-white">88 Rue du Faubourg Saint-Honoré,<br/>75008 Paris, France</p>
<p className="pt-2"><a className="hover:text-emerald-500 transition-colors" href="mailto:contact@architek.futura">contact@architek.futura</a></p>
<p><a className="hover:text-emerald-500 transition-colors" href="tel:+33100000000">+33 1 00 00 00 00</a></p>
</address>
</div>
<div className="md:col-span-1 reveal translate-y-8 opacity-0 transition-all duration-700 delay-300">
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Newsletter</h4>
<form className="flex flex-col gap-3">
<div className="relative group">
<input className="w-full bg-[#111] border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700" placeholder="Votre email" type="email"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white hover:text-white transition-colors" type="submit">
<svg data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"></svg>
</button>
</div>
<p className="text-[10px] text-neutral-600">Recevez nos dernières réalisations trimestriellement.</p>
</form>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-wider text-neutral-600 reveal">
<p>© 2024 Architek Futura. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Politique de Confidentialité</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
