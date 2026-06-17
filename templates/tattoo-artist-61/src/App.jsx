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
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-neutral-950/80 to-transparent backdrop-blur-[2px]">
<a className="text-xl tracking-tighter font-semibold text-white uppercase z-50" href="#">Aura<span className="text-neutral-500">.</span></a>
<div className="hidden md:flex gap-8 text-sm tracking-wide text-neutral-300 font-medium">
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#process">Processus</a>
<a className="hover:text-white transition-colors" href="#studio">Studio</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white z-50">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Tattoo Artist Work" className="w-full h-full object-cover opacity-60 grayscale filter contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/30"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-8">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Atelier Privé — Annemasse</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.1] italic">
                L'Art de l'Encre <br/> <span className="not-italic text-neutral-200">Sur la Peau</span>
</h1>
<p className="text-sm md:text-base text-neutral-400 max-w-md mx-auto leading-relaxed mt-4">
                Une approche minimaliste et contemporaine du tatouage. 
                Chaque pièce est une collaboration unique, conçue pour durer.
            </p>
<div className="mt-8 flex flex-col items-center gap-4">
<span className="h-16 w-[1px] bg-gradient-to-b from-neutral-500 to-transparent"></span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950">
<div className="max-w-2xl mx-auto text-center space-y-8">
<span className="iconify mx-auto text-neutral-600" data-height="24" data-icon="lucide:pen-tool" data-width="24"></span>
<h2 className="text-2xl md:text-4xl serif text-white tracking-tight leading-snug">
                "Je ne tatoue pas des images,<br/> je grave des histoires."
            </h2>
<p className="text-neutral-400 leading-loose text-sm md:text-base font-light">
                Mon travail se concentre sur le noir et gris, le minimalisme et les textures organiques. Je crois en un tatouage qui respecte l'anatomie, qui vieillit avec grâce et qui reflète l'identité profonde de celui qui le porte. Ici, pas de catalogue. Seulement de la création sur-mesure dans un environnement calme et respectueux.
            </p>
</div>
</section>

<section className="px-4 md:px-12 pb-24 bg-neutral-950" id="portfolio">
<div className="flex justify-between items-end mb-12 border-b border-neutral-900 pb-6">
<h3 className="text-xl serif text-white tracking-tight">Œuvres Récentes</h3>
<a className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors flex items-center gap-2" href="#">
                Instagram <span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</a>
</div>
<div className="masonry-grid">

<div className="break-inside-avoid mb-6 group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Back piece tattoo" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90 hover:opacity-100" src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400">Dos complet</span>
<span className="text-xs text-neutral-600">Noir &amp; Gris</span>
</div>
</div>

<div className="break-inside-avoid mb-6 group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Arm tattoo detail" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90 hover:opacity-100" src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400">Avant-bras</span>
<span className="text-xs text-neutral-600">Botanique</span>
</div>
</div>

<div className="break-inside-avoid mb-6 group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Fine line tattoo" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90 hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400">Épaule</span>
<span className="text-xs text-neutral-600">Fine Line</span>
</div>
</div>

<div className="break-inside-avoid mb-6 group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Hand tattoo" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90 hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400">Main</span>
<span className="text-xs text-neutral-600">Ornemental</span>
</div>
</div>

<div className="break-inside-avoid mb-6 group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Leg tattoo" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90 hover:opacity-100" src="https://images.unsplash.com/photo-1612459284970-e8f027596582?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400">Jambe</span>
<span className="text-xs text-neutral-600">Japonais abstrait</span>
</div>
</div>

<div className="break-inside-avoid mb-6 group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-neutral-900">
<img alt="Abstract Tattoo" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90 hover:opacity-100" src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs text-neutral-400">Torse</span>
<span className="text-xs text-neutral-600">Graphique</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-neutral-900/30 border-y border-neutral-900" id="process">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h3 className="text-3xl serif text-white tracking-tight mb-2">Le Processus</h3>
<p className="text-neutral-500 text-sm max-w-lg">De la première idée à la cicatrisation, chaque étape est maîtrisée.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<span className="block text-5xl serif text-neutral-800 group-hover:text-neutral-600 transition-colors mb-6">01</span>
<h4 className="text-lg font-medium text-white mb-3">Consultation &amp; Design</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Échange sur vos idées, références et emplacements. Je crée un design unique adapté à votre anatomie. Un acompte valide le début de la création.
                    </p>
</div>

<div className="group">
<span className="block text-5xl serif text-neutral-800 group-hover:text-neutral-600 transition-colors mb-6">02</span>
<h4 className="text-lg font-medium text-white mb-3">La Séance</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Réalisation du tatouage dans un environnement calme. Utilisation de matériel stérile à usage unique. Précision et confort sont les priorités.
                    </p>
</div>

<div className="group">
<span className="block text-5xl serif text-neutral-800 group-hover:text-neutral-600 transition-colors mb-6">03</span>
<h4 className="text-lg font-medium text-white mb-3">Soins &amp; Suivi</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Application d'un pansement protecteur. Vous recevez un guide complet de soins. Une visite de contrôle est possible après un mois.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-neutral-950" id="studio">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
<div className="relative h-[500px] w-full rounded-sm overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl shadow-black">

<iframe allowfullscreen="" className="map-dark absolute inset-0 w-full h-full" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22046.88291416713!2d6.220677568571876!3d46.19575087534433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650693d0e2eb%3A0x408ab2ae4be7d70!2sAnnemasse!5e0!3m2!1sen!2sfr!4v1708355203387!5m2!1sen!2sfr" style={{border: '0'}} width="100%">
</iframe>
<div className="absolute bottom-4 left-4 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 px-4 py-2 rounded-sm z-10 pointer-events-none">
<span className="text-xs text-white uppercase tracking-widest flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> Annemasse, FR
                    </span>
</div>
</div>
<div className="space-y-10">
<div>
<h3 className="text-3xl serif text-white tracking-tight mb-4">Le Studio</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Situé dans un loft privé à Annemasse, le studio est conçu comme un sanctuaire. Loin du bruit de la rue, c'est un espace dédié à la concentration et à l'art.
                    </p>
</div>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="p-2 bg-neutral-900 rounded-full text-neutral-300">
<span className="iconify" data-icon="lucide:shield-check" data-width="18"></span>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-1">Hygiène Irréprochable</h5>
<p className="text-neutral-500 text-xs leading-relaxed">Matériel à usage unique, encres conformes REACH, protocole de stérilisation strict.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-neutral-900 rounded-full text-neutral-300">
<span className="iconify" data-icon="lucide:vegan" data-width="18"></span>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-1">Produits Vegan &amp; Safe</h5>
<p className="text-neutral-500 text-xs leading-relaxed">Toutes les encres et baumes utilisés sont vegan-friendly et non testés sur les animaux.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-950 border-t border-neutral-900">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="iconify mx-auto text-neutral-700 mb-6" data-icon="lucide:quote" data-width="32"></span>
<p className="text-lg md:text-xl text-neutral-300 serif italic leading-relaxed mb-6">
                "Une expérience incroyable. L'écoute, la finesse du trait et la douceur lors de la séance... Le résultat dépasse mes attentes. Merci pour ce moment hors du temps."
            </p>
<p className="text-xs uppercase tracking-widest text-neutral-500">— Sophie L.</p>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-neutral-900" id="contact">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h3 className="text-3xl md:text-4xl serif text-white tracking-tight mb-4">Parlez-moi de votre projet</h3>
<p className="text-neutral-400 text-sm max-w-lg mx-auto">
                    Pour garantir la qualité de chaque pièce, je n'accepte qu'un nombre limité de projets par mois. Soyez précis dans votre description.
                </p>
</div>
<form className="space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Nom complet</label>
<input className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-4 rounded-sm focus:border-neutral-500 outline-none transition-colors" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Email</label>
<input className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-4 rounded-sm focus:border-neutral-500 outline-none transition-colors" placeholder="votre@email.com" type="email"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Emplacement</label>
<select className="w-full bg-neutral-950 border border-neutral-800 text-neutral-400 text-sm p-4 rounded-sm focus:border-neutral-500 outline-none transition-colors appearance-none">
<option>Avant-bras</option>
<option>Bras complet</option>
<option>Torse</option>
<option>Dos</option>
<option>Jambes</option>
<option>Autre</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Taille approximative (cm)</label>
<input className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-4 rounded-sm focus:border-neutral-500 outline-none transition-colors" placeholder="Ex: 15x10cm" type="text"/>
</div>
</div>

<div className="space-y-4 pt-4">
<div className="flex justify-between">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Budget Indicatif</label>
<span className="text-xs text-neutral-300 font-mono">300€ - 1500€+</span>
</div>
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer" max="100" min="1" type="range" value="50"/>
</div>

<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Description du projet</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm p-4 rounded-sm focus:border-neutral-500 outline-none transition-colors resize-none" placeholder="Décrivez votre idée, la symbolique, les éléments clés..." rows="5"></textarea>
</div>

<div className="relative border border-dashed border-neutral-700 bg-neutral-950/50 p-8 text-center rounded-sm hover:border-neutral-500 transition-colors cursor-pointer group">
<span className="iconify mx-auto text-neutral-600 group-hover:text-neutral-400 mb-2" data-icon="lucide:upload-cloud" data-width="24"></span>
<p className="text-xs text-neutral-400">Glissez vos références visuelles ici ou cliquez pour parcourir</p>
<input className="absolute inset-0 opacity-0 cursor-pointer" type="file"/>
</div>
<div className="pt-6 text-center">
<button className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase text-white border border-neutral-700 hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto" type="button">
<span>Envoyer la demande</span>
<span className="iconify ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<p className="mt-4 text-[10px] text-neutral-600">
                        En soumettant ce formulaire, vous acceptez d'être recontacté(e) pour discuter de ce projet.
                    </p>
</div>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-neutral-900 bg-neutral-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-xl font-serif text-white tracking-tight">AURA.</p>
<p className="text-xs text-neutral-600 mt-1">Artiste Tatoueur, Annemasse.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</a>
</div>
<div className="text-xs text-neutral-700 font-medium">
                © 2024 Aura Tattoo. Tous droits réservés.
            </div>
</div>
</footer>

    </>
  );
}
