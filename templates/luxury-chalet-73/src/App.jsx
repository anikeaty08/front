import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('py-2');
                header.classList.remove('py-0');
            } else {
                header.classList.add('py-0');
                header.classList.remove('py-2');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0F1C2E]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex flex-col tracking-tighter hover:opacity-80 transition-opacity" href="#">
<div className="flex items-baseline gap-1">
<span className="font-['Cormorant_Garamond'] italic text-2xl text-white leading-none">A</span>
<span className="font-['Cormorant_Garamond'] italic text-2xl text-white leading-none">C</span>
<span className="font-['Cormorant_Garamond'] italic text-2xl text-[#9C7A4A] leading-none">M</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-12">
<a className="text-xs uppercase tracking-widest text-white/60 hover:text-[#9C7A4A] transition-colors" href="#collection">La Collection</a>
<a className="text-xs uppercase tracking-widest text-white/60 hover:text-[#9C7A4A] transition-colors" href="#expertise">Savoir-Faire</a>
<a className="text-xs uppercase tracking-widest text-white/60 hover:text-[#9C7A4A] transition-colors" href="#proprietaires">Propriétaires</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-[#9C7A4A] transition-colors border-b border-transparent hover:border-[#9C7A4A] pb-1" href="#contact">
                    Contact <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-white/80 hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Chalet dans les Alpes" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0F1C2E]/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/40 via-transparent to-[#0F1C2E]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white/80 text-xs tracking-widest uppercase mb-12">
                Alpes Françaises
            </div>
<div className="flex flex-col mb-10 space-y-2">
<h1 className="font-['Cormorant_Garamond'] italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-none">Gestion privée</h1>
<h1 className="font-['Cormorant_Garamond'] italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-none">de chalets</h1>
<h1 className="font-['Cormorant_Garamond'] italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#9C7A4A] leading-none">d'exception.</h1>
</div>
<p className="text-lg md:text-xl text-white/80 tracking-wide font-light max-w-2xl mb-16 leading-relaxed text-shadow-sm">
                Une approche confidentielle et sur mesure pour sublimer votre patrimoine.
                <br/>L'hospitalité d'excellence, la sérénité en plus.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<a className="bg-[#9C7A4A] text-[#0F1C2E] px-8 py-4 rounded text-sm hover:bg-[#C4A06B] transition-all flex items-center gap-2 font-medium w-full sm:w-auto justify-center" href="#collection">
                    Découvrir la collection
                </a>
<a className="border border-white/40 text-white hover:border-[#9C7A4A] hover:text-[#9C7A4A] backdrop-blur-sm bg-black/10 px-8 py-4 rounded text-sm transition-all flex items-center gap-2 w-full sm:w-auto justify-center" href="#proprietaires">
                    Espace Propriétaires <iconify-icon icon="solar:home-smile-linear"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-pulse">
<span className="text-[10px] uppercase tracking-[0.3em] text-white">Découvrir</span>
<div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32" id="collection">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="text-xs tracking-[0.2em] text-[#9C7A4A] uppercase mb-6 flex items-center gap-3">
<span className="w-8 h-px bg-[#9C7A4A]/50"></span> 01 — La Collection
                </h2>
<h3 className="font-['Cormorant_Garamond'] italic text-5xl md:text-6xl tracking-tight text-white leading-none">
                    Une sélection rare.
                </h3>
</div>
<p className="text-sm text-white/50 leading-relaxed max-w-md md:text-right">
                Nous veillons sur un nombre très limité de propriétés afin de garantir un niveau de service irréprochable et une attention de chaque instant.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group cursor-pointer flex flex-col" href="#contact">
<div className="relative aspect-[4/5] bg-[#162338] rounded-2xl overflow-hidden mb-6">
<img alt="L'Apogée Privé" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/20 to-transparent opacity-80 z-0"></div>

<div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
<span className="bg-[#0F1C2E]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded border border-white/10">Courchevel 1850</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-['Cormorant_Garamond'] text-3xl text-white tracking-tight mb-2 group-hover:text-[#9C7A4A] transition-colors">L'Écrin Blanc</h4>
<div className="flex items-center gap-4 text-xs text-white/50">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 6 Suites</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:swimming-pool-linear"></iconify-icon> Spa Privé</span>
</div>
</div>
</div>
</a>

<a className="group cursor-pointer flex flex-col md:mt-16" href="#contact">
<div className="relative aspect-[4/5] bg-[#162338] rounded-2xl overflow-hidden mb-6">
<img alt="Chalet des Cimes" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=2128&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/20 to-transparent opacity-80 z-0"></div>

<div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
<span className="bg-[#0F1C2E]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded border border-white/10">Méribel</span>
<span className="bg-[#9C7A4A]/90 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded font-medium">Confidentiel</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-['Cormorant_Garamond'] text-3xl text-white tracking-tight mb-2 group-hover:text-[#9C7A4A] transition-colors">Chalet des Cimes</h4>
<div className="flex items-center gap-4 text-xs text-white/50">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 8 Suites</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:wineglass-linear"></iconify-icon> Chef Privé</span>
</div>
</div>
</div>
</a>

<a className="group cursor-pointer flex flex-col lg:mt-32" href="#contact">
<div className="relative aspect-[4/5] bg-[#162338] rounded-2xl overflow-hidden mb-6">
<img alt="Le Refuge" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&amp;w=2130&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-[#0F1C2E]/20 to-transparent opacity-80 z-0"></div>

<div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
<span className="bg-[#0F1C2E]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded border border-white/10">Val d'Isère</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-['Cormorant_Garamond'] text-3xl text-white tracking-tight mb-2 group-hover:text-[#9C7A4A] transition-colors">Le Refuge Alpin</h4>
<div className="flex items-center gap-4 text-xs text-white/50">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 5 Suites</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:skis-linear"></iconify-icon> Ski-in Ski-out</span>
</div>
</div>
</div>
</a>
</div>
<div className="mt-20 flex justify-center">
<a className="inline-flex items-center gap-3 text-sm text-white hover:text-[#9C7A4A] transition-colors border-b border-white/20 hover:border-[#9C7A4A] pb-2" href="#contact">
                Découvrir l'ensemble de nos adresses <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="bg-gradient-to-b from-[#0F1C2E] to-[#131E2D] py-32 relative overflow-hidden" id="expertise">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
<div className="lg:col-span-5 flex flex-col justify-center">
<h2 className="text-xs tracking-[0.2em] text-[#9C7A4A] uppercase mb-6 flex items-center gap-3">
<span className="w-8 h-px bg-[#9C7A4A]/50"></span> 02 — Le Savoir-Faire
                    </h2>
<h3 className="font-['Cormorant_Garamond'] italic text-5xl md:text-6xl tracking-tight text-white mb-8 leading-none">
                        L'art de recevoir.
                    </h3>
<p className="text-base text-white/70 leading-relaxed mb-10 max-w-md font-light">
                        Nous concevons la gestion de votre propriété comme un véritable art. Une alliance parfaite entre l'hospitalité de luxe et une intendance d'une rigueur absolue.
                    </p>
<div>
<a className="inline-flex items-center gap-2 px-6 py-3 rounded border border-white/10 text-white hover:border-[#9C7A4A] hover:text-[#9C7A4A] transition-colors text-sm" href="#proprietaires">
                            Notre philosophie <iconify-icon icon="solar:leaf-linear"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-white/[0.02] p-8 rounded-2xl hover:bg-white/[0.04] transition-colors border border-white/5">
<div className="w-12 h-12 rounded-full bg-[#9C7A4A]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#9C7A4A]" icon="solar:diamond-linear"></iconify-icon>
</div>
<h4 className="font-['Cormorant_Garamond'] text-2xl text-white tracking-tight mb-3">Valorisation Discrète</h4>
<p className="text-sm text-white/50 leading-relaxed font-light">
                            Une stratégie de commercialisation sur mesure pour générer des revenus tout en préservant la confidentialité et l'exclusivité de votre chalet.
                        </p>
</div>

<div className="bg-white/[0.02] p-8 rounded-2xl hover:bg-white/[0.04] transition-colors border border-white/5 sm:mt-12">
<div className="w-12 h-12 rounded-full bg-[#9C7A4A]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#9C7A4A]" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h4 className="font-['Cormorant_Garamond'] text-2xl text-white tracking-tight mb-3">Entretien d'Excellence</h4>
<p className="text-sm text-white/50 leading-relaxed font-light">
                            Une intendance millimétrée tout au long de l'année. Nous veillons sur chaque détail, des matériaux nobles aux équipements techniques.
                        </p>
</div>

<div className="bg-white/[0.02] p-8 rounded-2xl hover:bg-white/[0.04] transition-colors border border-white/5">
<div className="w-12 h-12 rounded-full bg-[#9C7A4A]/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-[#9C7A4A]" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="font-['Cormorant_Garamond'] text-2xl text-white tracking-tight mb-3">Clientèle Privilégiée</h4>
<p className="text-sm text-white/50 leading-relaxed font-light">
                            Une sélection rigoureuse de nos hôtes, majoritairement issus de notre réseau de confiance, garantissant un respect absolu de votre bien.
                        </p>
</div>

<div className="bg-[#162338]/50 p-8 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center sm:mt-12 relative overflow-hidden group">
<img alt="Détail chalet" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity" src="https://images.unsplash.com/photo-1542689622-c3547db6a4de?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<span className="font-['Cormorant_Garamond'] italic text-4xl text-white mb-3 block tracking-tighter">ACM</span>
<div className="text-[10px] text-[#9C7A4A] uppercase tracking-[0.2em] bg-[#0F1C2E]/80 backdrop-blur-sm py-2 px-4 rounded-full border border-white/5 inline-block">Service Conciergerie 24/7</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32" id="proprietaires">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div>
<h2 className="text-xs tracking-[0.2em] text-[#9C7A4A] uppercase mb-6 flex items-center gap-3">
<span className="w-8 h-px bg-[#9C7A4A]/50"></span> 03 — Confier votre bien
                </h2>
<h3 className="font-['Cormorant_Garamond'] italic text-5xl md:text-6xl tracking-tight text-white mb-8 leading-none">
                    L'esprit libre,<br/>l'excellence en plus.
                </h3>
<p className="text-base text-white/60 leading-relaxed mb-8 font-light max-w-md">
                    Nous étudions chaque nouvelle intégration à notre collection avec la plus grande attention, pour construire une relation de confiance pérenne.
                </p>
<div className="space-y-4 border-l border-white/10 pl-6 mb-12">
<div className="flex items-center gap-4 text-sm text-white/80">
<span className="w-1.5 h-1.5 rounded-full bg-[#9C7A4A]"></span> Rencontre et découverte de la propriété
                    </div>
<div className="flex items-center gap-4 text-sm text-white/80">
<span className="w-1.5 h-1.5 rounded-full bg-[#9C7A4A]"></span> Étude de valorisation sur mesure
                    </div>
<div className="flex items-center gap-4 text-sm text-white/80">
<span className="w-1.5 h-1.5 rounded-full bg-[#9C7A4A]"></span> Prise en main par notre majordome dédié
                    </div>
</div>
</div>

<div className="bg-white/[0.02] backdrop-blur-sm p-10 md:p-14 rounded-3xl border border-white/5 relative" id="contact">
<div className="relative z-10">
<h4 className="font-['Cormorant_Garamond'] text-3xl text-white mb-2">Échanger avec nous</h4>
<p className="text-xs text-[#9C7A4A] mb-10 uppercase tracking-widest">En toute confidentialité</p>
<form className="space-y-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="relative">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-[#9C7A4A] transition-colors peer placeholder-transparent" id="prenom" placeholder="Prénom" type="text"/>
<label className="absolute left-0 top-3 text-sm text-white/30 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#9C7A4A] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 cursor-text uppercase tracking-wider" htmlFor="prenom">Prénom</label>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-[#9C7A4A] transition-colors peer placeholder-transparent" id="nom" placeholder="Nom" type="text"/>
<label className="absolute left-0 top-3 text-sm text-white/30 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#9C7A4A] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 cursor-text uppercase tracking-wider" htmlFor="nom">Nom</label>
</div>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-[#9C7A4A] transition-colors peer placeholder-transparent" id="email" placeholder="Adresse Email" type="email"/>
<label className="absolute left-0 top-3 text-sm text-white/30 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#9C7A4A] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 cursor-text uppercase tracking-wider" htmlFor="email">Adresse Email</label>
</div>
<div className="relative">
<select className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-[#9C7A4A] transition-colors appearance-none cursor-pointer">
<option className="bg-[#0F1C2E] text-white/50" value="">Station concernée</option>
<option className="bg-[#0F1C2E]" value="courchevel">Courchevel</option>
<option className="bg-[#0F1C2E]" value="meribel">Méribel</option>
<option className="bg-[#0F1C2E]" value="megeve">Megève</option>
<option className="bg-[#0F1C2E]" value="valdisere">Val d'Isère</option>
<option className="bg-[#0F1C2E]" value="autre">Autre</option>
</select>
<iconify-icon className="absolute right-0 top-4 text-white/40 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="pt-4 flex items-start gap-4">
<label className="relative flex items-center cursor-pointer mt-0.5 shrink-0">
<input className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 border border-white/30 rounded-sm bg-transparent peer-checked:bg-[#9C7A4A] peer-checked:border-[#9C7A4A] flex items-center justify-center transition-colors">
<iconify-icon className="text-[#0F1C2E] opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<span className="text-xs text-white/40 leading-relaxed select-none">Je confirme être le propriétaire ou le représentant du bien. Mes informations resteront strictement confidentielles.</span>
</div>
<button className="w-full bg-[#9C7A4A] text-[#0F1C2E] hover:bg-white px-6 py-4 rounded text-sm transition-colors font-medium mt-8 flex justify-center items-center gap-2" type="button">
                            Envoyer la demande <iconify-icon icon="solar:letter-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A131F] border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-2">
<div className="flex flex-col tracking-tighter mb-6">
<span className="font-['Cormorant_Garamond'] italic text-3xl text-white leading-none">Alpine</span>
<span className="font-['Cormorant_Garamond'] italic text-3xl text-white leading-none">Chalet</span>
<span className="font-['Cormorant_Garamond'] italic text-3xl text-[#9C7A4A] leading-none">Management</span>
</div>
<p className="text-xs text-white/40 max-w-sm leading-relaxed">
                        Maison spécialisée dans la gestion, l'entretien et la valorisation de chalets de prestige dans les Alpes Françaises. L'élégance du service sur mesure.
                    </p>
</div>
<div>
<h5 className="text-[10px] text-white/30 uppercase tracking-widest mb-6">Nos Présences</h5>
<ul className="space-y-4 text-xs text-white/60">
<li>Courchevel</li>
<li>Méribel</li>
<li>Megève</li>
</ul>
</div>
<div>
<h5 className="text-[10px] text-white/30 uppercase tracking-widest mb-6">Contact</h5>
<ul className="space-y-4 text-xs text-white/60">
<li><a className="hover:text-[#9C7A4A] transition-colors" href="#">contact@alpinechalet.com</a></li>
<li><a className="hover:text-[#9C7A4A] transition-colors" href="#">+33 (0) 4 XX XX XX XX</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-[10px] text-white/30">
<div>© 2026 Alpine Chalet Management. Tous droits réservés.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
