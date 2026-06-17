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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group text-base font-semibold text-[#3c3c3a] tracking-tight" href="#">
<span className="flex items-center justify-center group-hover:bg-[#dea801] group-hover:text-white transition-colors duration-300 text-[#dea801] bg-[#3c3c3a] w-9 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4bd193ec-7ea7-4de0-8032-7e255445a868_320w.png?w=800&amp;q=80)] bg-cover bg-center rounded-lg shadow-sm"></span>
                KARELO DESIGN
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-[#dea801] transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-[#dea801] transition-colors" href="#collections">Collections</a>
<a className="hover:text-[#dea801] transition-colors" href="#realisations">Projets</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-[#dea801] hover:bg-[#c99601] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-lg shadow-[#dea801]/20 active:scale-95" href="tel:0492548154">
<span>04 92 54 81 54</span>
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-[#3c3c3a] hover:text-[#dea801] transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="order-2 md:order-1 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-[#3c3c3a] mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#dea801] animate-pulse"></span>
                        Showroom ouvert à Gap
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#3c3c3a] tracking-tight leading-[1.1] mb-6">
                        L'art du carrelage <br/>
<span className="text-[#dea801]">réinventé.</span>
</h1>
<p className="text-lg text-zinc-500 leading-relaxed max-w-lg mb-10 font-light">
                        Spécialiste en revêtements premium et design intérieur dans les Hautes-Alpes. Nous transformons vos espaces en lieux d'exception.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="flex items-center justify-center gap-2 bg-[#3c3c3a] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2a2a29] transition-all shadow-lg shadow-zinc-900/10 active:scale-95" href="#contact">
                            Nous contacter
                        </a>
<a className="flex items-center justify-center gap-2 bg-white border border-zinc-200 text-[#3c3c3a] px-8 py-3.5 rounded-full text-sm font-semibold hover:border-[#dea801] hover:text-[#dea801] transition-all active:scale-95" href="#realisations">
                            Voir nos projets
                        </a>
</div>
<div className="flex items-center gap-8 text-sm text-zinc-400 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#dea801]" icon="solar:verified-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Expertise Locale</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#dea801]" icon="solar:medal-ribbon-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Matériaux Nobles</span>
</div>
</div>
</div>

<div className="order-1 md:order-2 relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-[#dea801]/10 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Showroom Karelo Design" className="w-full h-[400px] lg:h-[550px] object-cover border-zinc-100 border rounded-2xl shadow-2xl relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4954a2ad-6b8a-4cb5-8ea0-b64619461083_1600w.png"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 text-[#dea801] group-hover:bg-[#dea801] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#3c3c3a] mb-3 tracking-tight">Showroom Exclusif</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Découvrez notre sélection rigoureuse de grès cérame, faïences et pierres naturelles.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 text-[#dea801] group-hover:bg-[#dea801] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:ruler-pen-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#3c3c3a] mb-3 tracking-tight">Conseil &amp; Design</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Notre équipe vous guide du choix des matériaux jusqu'à l'agencement final.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 text-[#dea801] group-hover:bg-[#dea801] group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#3c3c3a] mb-3 tracking-tight">Réseau de Poseurs</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        Mise en relation directe avec les meilleurs artisans carreleurs des Hautes-Alpes.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24" id="collections">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
<div>
<span className="text-xs font-semibold tracking-wider text-[#dea801] uppercase mb-3 block">Nos Univers</span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#3c3c3a] tracking-tight">Matières &amp; Textures</h2>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#3c3c3a] hover:text-[#dea801] transition-colors group" href="#">
                    Tout voir
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">

<div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md">
<img alt="Grès Cérame" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="font-semibold text-lg tracking-tight">Grès Cérame</h4>
<p className="text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-1">Élégance durable</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer lg:col-span-2 shadow-md">
<img alt="Pierre Naturelle" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="font-semibold text-lg tracking-tight">Pierre Naturelle</h4>
<p className="text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-1">L'authenticité brute</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md">
<img alt="Faïence" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-6 left-6 text-white">
<h4 className="font-semibold text-lg tracking-tight">Faïence Déco</h4>
<p className="text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-1">Détails raffinés</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#1c1c1c] py-24 relative" id="avis">

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-[#dea801]/10 blur-[120px]"></div>
<div className="absolute -bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[#dea801]/5 blur-[100px]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">

<div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
<div className="max-w-2xl">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dea801]/20 bg-[#dea801]/10 px-3 py-1 text-xs font-semibold text-[#dea801]">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dea801] opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-[#dea801]"></span>
</span>
                        Témoignages Clients
                    </div>
<h2 className="mb-6 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
                        La satisfaction client est <br/>
<span className="text-[#dea801]">notre meilleure publicité.</span>
</h2>
<div className="flex flex-wrap items-center gap-5">
<div className="flex gap-1 text-[#dea801]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-2 border-l border-zinc-700 pl-4 text-sm font-medium text-zinc-400">
<span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span>4.9/5 sur Google Avis</span>
</div>
</div>
</div>

<div className="hidden md:flex items-center gap-3">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300" onclick="document.getElementById('reviews-scroller').scrollBy({left: -420, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dea801] text-black shadow-lg shadow-[#dea801]/20 hover:bg-[#ffc61a] hover:scale-105 transition-all duration-300" onclick="document.getElementById('reviews-scroller').scrollBy({left: 420, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar" id="reviews-scroller">

<div className="min-w-[85vw] md:min-w-[420px] snap-center flex flex-col rounded-2xl border border-white/5 bg-zinc-800/30 p-8 shadow-xl backdrop-blur-md hover:border-[#dea801]/30 transition-colors duration-300">
<div className="mb-8 flex items-center justify-between">
<div className="flex gap-0.5 text-[#dea801]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<iconify-icon className="text-zinc-600" icon="solar:quote-up-square-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<p className="mb-8 flex-grow text-lg font-light leading-relaxed text-zinc-300">
                        "Karelo Design a su transformer notre pièce de vie. Le carrelage effet bois conseillé est <span className="font-medium text-white">bluffant de réalisme</span>. Un accompagnement au top !"
                    </p>
<div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dea801] text-sm font-bold text-black shadow-lg shadow-[#dea801]/20">SM</div>
<div>
<div className="font-semibold text-white">Sophie Martin</div>
<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Projet Rénovation</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[420px] snap-center flex flex-col rounded-2xl border border-white/5 bg-zinc-800/30 p-8 shadow-xl backdrop-blur-md hover:border-[#dea801]/30 transition-colors duration-300">
<div className="mb-8 flex items-center justify-between">
<div className="flex gap-0.5 text-[#dea801]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<iconify-icon className="text-zinc-600" icon="solar:quote-up-square-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<p className="mb-8 flex-grow text-lg font-light leading-relaxed text-zinc-300">
                        "Un grand merci pour les conseils sur la pierre naturelle. <span className="font-medium text-white">Notre terrasse est magnifique</span>. L'équipe a été très professionnelle du début à la fin."
                    </p>
<div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-bold text-zinc-300">TD</div>
<div>
<div className="font-semibold text-white">Thomas Dubois</div>
<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Aménagement Extérieur</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[420px] snap-center flex flex-col rounded-2xl border border-white/5 bg-zinc-800/30 p-8 shadow-xl backdrop-blur-md hover:border-[#dea801]/30 transition-colors duration-300">
<div className="mb-8 flex items-center justify-between">
<div className="flex gap-0.5 text-[#dea801]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<iconify-icon className="text-zinc-600" icon="solar:quote-up-square-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<p className="mb-8 flex-grow text-lg font-light leading-relaxed text-zinc-300">
                        "Le showroom à Gap est superbe, cela aide vraiment à se projeter. Nous avons trouvé <span className="font-medium text-white">le carrelage grand format</span> parfait pour notre salle de bain."
                    </p>
<div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-bold text-zinc-300">ML</div>
<div>
<div className="font-semibold text-white">Marie Laurent</div>
<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Salle de Bain</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[420px] snap-center flex flex-col rounded-2xl border border-white/5 bg-zinc-800/30 p-8 shadow-xl backdrop-blur-md hover:border-[#dea801]/30 transition-colors duration-300">
<div className="mb-8 flex items-center justify-between">
<div className="flex gap-0.5 text-[#dea801]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<iconify-icon className="text-zinc-600" icon="solar:quote-up-square-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<p className="mb-8 flex-grow text-lg font-light leading-relaxed text-zinc-300">
                        "Une qualité de service irréprochable. Les délais ont été respectés et <span className="font-medium text-white">le rendu final dépasse nos attentes</span>. Je recommande vivement !"
                    </p>
<div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-bold text-zinc-300">PB</div>
<div>
<div className="font-semibold text-white">Pierre Bernard</div>
<div className="text-xs font-medium uppercase tracking-wider text-zinc-500">Construction Neuve</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 md:hidden mt-6">
<div className="h-1.5 w-1.5 rounded-full bg-[#dea801]"></div>
<div className="h-1.5 w-1.5 rounded-full bg-zinc-700"></div>
<div className="h-1.5 w-1.5 rounded-full bg-zinc-700"></div>
<div className="h-1.5 w-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="localisation">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-10">
<div>
<span className="text-xs font-semibold tracking-wider text-[#dea801] uppercase mb-3 block">Contact</span>
<h2 className="text-3xl md:text-4xl font-semibold text-[#3c3c3a] tracking-tight">Venez toucher la matière</h2>
</div>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center flex-shrink-0 text-[#3c3c3a] border border-zinc-100">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-[#3c3c3a] mb-2">Adresse</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                                    Plaine de Lachaup RN 85<br/>05000 Gap, France
                                </p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center flex-shrink-0 text-[#3c3c3a] border border-zinc-100">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-[#3c3c3a] mb-2">Horaires</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                                    Lundi - Samedi <br/>
                                    09h00 - 12h00 / 14h00 - 18h30
                                </p>
</div>
</div>
</div>
</div>
<div className="h-[450px] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-lg relative group">
<iframe className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" frameborder="0" height="100%" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?q=Plaine+de+Lachaup+RN+85,+Gap,+France,+05000&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%"></iframe>
<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-semibold shadow-sm text-[#3c3c3a] pointer-events-none">
                        Karelo Design Gap
                    </div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 bg-white border-t border-zinc-100">
<div className="max-w-7xl mx-auto">
<div className="bg-[#1c1c1c] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute top-0 right-0 h-[300px] w-[300px] bg-[#dea801]/10 blur-[80px] rounded-full"></div>
</div>
<div className="relative z-10 max-w-lg">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dea801]/10 border border-[#dea801]/20 text-[#dea801] text-xs font-semibold mb-4">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
<span>Newsletter</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">Restez inspiré</h3>
<p className="text-zinc-400 font-light leading-relaxed">
                        Recevez nos dernières réalisations et tendances carrelage directement dans votre boîte mail.
                    </p>
</div>
<form className="relative z-10 w-full max-w-md flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:user-rounded-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-white/5 border border-white/10 text-white placeholder-zinc-500 rounded-full py-3.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-[#dea801]/50 focus:border-[#dea801] transition-all text-sm font-light" placeholder="votre@email.com" type="email"/>
</div>
<button className="bg-[#dea801] hover:bg-[#c99601] text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-[#dea801]/20 active:scale-95 whitespace-nowrap flex items-center justify-center gap-2" type="submit">
                        S'inscrire
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-[#3c3c3a] pt-20 pb-10 text-zinc-400" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-semibold text-white flex items-center gap-3 mb-6 tracking-tight" href="#">
<span className="flex items-center justify-center text-sm text-[#3c3c3a] bg-[#dea801] w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4bd193ec-7ea7-4de0-8032-7e255445a868_320w.png)] bg-cover bg-center rounded-lg"></span>
                        KARELO
                    </a>
<p className="text-sm text-zinc-400 leading-relaxed font-light max-w-sm">
                        Votre partenaire privilégié pour le carrelage et la pierre naturelle à Gap. Excellence, conseil et proximité.
                    </p>
</div>
<div>
<h4 className="font-semibold text-white mb-6 text-sm tracking-wide">Découvrir</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#dea801] transition-colors flex items-center gap-2" href="#expertise">Expertise</a></li>
<li><a className="hover:text-[#dea801] transition-colors flex items-center gap-2" href="#collections">Collections</a></li>
<li><a className="hover:text-[#dea801] transition-colors flex items-center gap-2" href="#realisations">Réalisations</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-6 text-sm tracking-wide">Contact</h4>
<ul className="space-y-3 text-sm font-light">
<li>
<a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:contact@karelodesign.fr">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                                contact@karelodesign.fr
                            </a>
</li>
<li>
<a className="text-[#dea801] hover:text-white transition-colors flex items-center gap-2 font-medium" href="tel:0492548154">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                                04 92 54 81 54
                            </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-700/50 pt-8 text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="font-light">© 2026 Karelo Design. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
