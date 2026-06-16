import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialisation des icônes Lucide avec une épaisseur fine pour correspondre au design
        lucide.createIcons({
            strokeWidth: 1.5
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-[#061208]/90 backdrop-blur-md border-b border-white/5 transition-all duration-500">
<div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-normal text-white border border-white/20 rounded hover:bg-white/5 hover:border-white/40 transition-all duration-300" href="tel:+01000000000">
                +01 000 000 000
            </a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-400 uppercase tracking-widest hover:text-white transition-colors duration-300" href="#">Cartes</a>
<a className="text-sm font-normal text-neutral-400 uppercase tracking-widest hover:text-white transition-colors duration-300" href="#">Programmation</a>
</nav>

<a className="flex-shrink-0 mx-auto lg:mx-8 group flex items-center" href="#">
<span className="text-xl md:text-2xl font-light tracking-widest text-white group-hover:opacity-80 transition-opacity duration-300">
                    LE <span className="text-red-600 inline-block -rotate-12 transform group-hover:rotate-0 transition-transform duration-500">M</span>ELVILLE
                </span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-400 uppercase tracking-widest hover:text-white transition-colors duration-300" href="#">Privatisation</a>
<a className="text-sm font-normal text-neutral-400 uppercase tracking-widest hover:text-white transition-colors duration-300" href="#">Concept</a>
</nav>

<a className="inline-flex items-center justify-center px-4 py-2 text-xs font-normal text-white border border-white/20 rounded hover:bg-white/5 hover:border-white/40 transition-all duration-300" href="#">
                Réservez une table
            </a>
</div>
</header>
<main>

<section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[#050505]/40 z-10"></div>
<img alt="Intérieur du Melville" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<h1 className="relative z-20 text-4xl md:text-5xl lg:text-7xl font-serif italic text-white tracking-tight px-6 text-center drop-shadow-2xl">
                “Jazz. Cocktails. Gastronomie.”
            </h1>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-white/10">
<p className="text-xl md:text-2xl text-neutral-200 max-w-3xl font-light leading-relaxed tracking-tight">
                Plongez-vous dans une immersion totale, gastronomie, cocktails et musique
            </p>
<a className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3 bg-neutral-200 text-black text-sm font-medium rounded hover:bg-white transition-colors duration-300 shadow-lg" href="#">
                Qui joue ce soir ?
            </a>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 lg:gap-24">

<article className="group flex flex-col">
<div className="overflow-hidden rounded aspect-[3/4] mb-8 bg-[#0a0a0a]">
<img alt="Chef en Cuisine" className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&amp;w=1968&amp;auto=format&amp;fit=crop"/>
</div>
<h2 className="text-3xl md:text-4xl text-white font-light tracking-tight mb-6">En Cuisine</h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                    Le jeune et très talentueux chef Malcom Ecolasse infuse ses plats de parfums latinos, asiatiques et tunisiens. Un accord mets-musique, reflet de l'ouverture sur le monde de ce lieu pourtant à l'abri des regards.
                </p>
</article>

<article className="group flex flex-col">
<div className="overflow-hidden rounded aspect-[3/4] mb-8 bg-[#0a0a0a]">
<img alt="Barman au Bar" className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h2 className="text-3xl md:text-4xl text-white font-light tracking-tight mb-6">Au Bar</h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                    Victor est à l'œuvre et invente. La musique infuse les cocktails du Melville. Aux côtés des incontournables, les créations s'élaborent en rythme, celui du tintement des verres qui s'entrechoquent, au son des liqueurs qu'on y verse et au petit charivari de la machine à glace...
                </p>
</article>
</section>

<section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-32">
<div className="bg-[#061208] border border-white/5 rounded-2xl p-8 md:p-16">
<h2 className="text-3xl md:text-5xl text-center text-white font-light tracking-tight mb-16 md:mb-24">Prochains concerts</h2>
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col group cursor-pointer">
<p className="text-xl md:text-2xl text-neutral-400 font-light tracking-tight mb-4 group-hover:text-neutral-300 transition-colors duration-300">17h-21h 9 Avril</p>
<h3 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight mb-8 group-hover:opacity-90 transition-opacity duration-300">Manuel Anoyvega solo</h3>
<div className="overflow-hidden rounded mb-8 bg-black">
<img alt="Concert Piano" className="w-full aspect-[4/3] object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<p className="text-2xl md:text-3xl font-light text-neutral-300 italic tracking-tight mb-8">Jazz &amp; Pianno</p>
<div>
<button className="inline-flex items-center justify-center px-8 py-3 text-sm font-normal text-white border border-white/30 rounded hover:bg-white hover:text-black transition-all duration-300">
                                En savoir plus
                            </button>
</div>
</div>

<div className="flex flex-col justify-center space-y-12">

<div className="group cursor-pointer border-b border-white/10 pb-12 last:border-0 last:pb-0">
<div className="inline-block bg-white text-black text-xs font-medium px-3 py-1 rounded mb-4">17h - 20h 15 Avril</div>
<h4 className="text-2xl md:text-3xl font-serif italic text-white tracking-tight mb-4 group-hover:text-neutral-300 transition-colors duration-300">Melville Mode Swing !</h4>
<p className="text-lg text-neutral-400 italic font-light leading-relaxed">
                                longez dans l'univers acoustique de ce trio d'exception, réunissant des talents de renommée mondiale.
                            </p>
</div>

<div className="group cursor-pointer border-b border-white/10 pb-12 last:border-0 last:pb-0">
<div className="inline-block bg-white text-black text-xs font-medium px-3 py-1 rounded mb-4">17h - 20h 15 Avril</div>
<h4 className="text-2xl md:text-3xl font-serif italic text-white tracking-tight mb-4 group-hover:text-neutral-300 transition-colors duration-300">Melville Mode Swing !</h4>
<p className="text-lg text-neutral-400 italic font-light leading-relaxed">
                                longez dans l'univers acoustique de ce trio d'exception, réunissant des talents de renommée mondiale.
                            </p>
</div>

<div className="group cursor-pointer border-b border-white/10 pb-12 last:border-0 last:pb-0">
<div className="inline-block bg-white text-black text-xs font-medium px-3 py-1 rounded mb-4">17h - 20h 15 Avril</div>
<h4 className="text-2xl md:text-3xl font-serif italic text-white tracking-tight mb-4 group-hover:text-neutral-300 transition-colors duration-300">Melville Mode Swing !</h4>
<p className="text-lg text-neutral-400 italic font-light leading-relaxed">
                                longez dans l'univers acoustique de ce trio d'exception, réunissant des talents de renommée mondiale.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[800px] mx-auto px-6 py-16 text-center">
<h2 className="text-4xl md:text-5xl text-white font-light tracking-tight mb-12">Concepts</h2>
<p className="text-lg text-neutral-300 font-light leading-relaxed mb-8">
                Le Melville, concept inédit à Paris, réunit dans le confortable cocon conçu par l'architecte Isabelle Farran cocktails, jazz et gastronomie.
            </p>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                C'est une adresse qui se chuchote entre amateurs de jazz et de world music, d'ambiances smooths, joyeuses et surprenantes. C'est un piano, une gourmandise, une élégance.
            </p>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
<div className="overflow-hidden rounded md:-translate-y-12 shadow-2xl">
<img alt="Barman" className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="overflow-hidden rounded md:translate-y-24 shadow-2xl z-10">
<img alt="Plats et Cocktails" className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 hover:opacity-100" src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="overflow-hidden rounded shadow-2xl">
<img alt="Détail Piano" className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="flex flex-col items-center justify-center py-24 opacity-70">

<div className="flex items-end gap-1 mb-2">
<div className="w-3 h-8 bg-white rounded-sm"></div>
<div className="w-3 h-12 bg-white rounded-sm"></div>
<div className="w-8 h-12 border-t-4 border-r-4 border-white rounded-tr-lg"></div>
</div>
<p className="text-xs font-normal tracking-widest uppercase text-white mt-2">Centre national<br/>de la musique</p>
</section>

<section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-32">
<h2 className="text-3xl md:text-5xl text-center text-white font-light tracking-tight mb-16">On parle du Melville</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#061208] border border-white/5 rounded-2xl p-8 md:p-10 group hover:border-white/10 transition-colors duration-500">
<div className="flex gap-1 text-yellow-500/80 mb-8">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-neutral-300 italic font-light leading-relaxed mb-10 group-hover:text-white transition-colors duration-300">
                        "Un service exceptionnel. Ma voiture n'a jamais été aussi propre depuis sa sortie de concession. Le soin apporté aux cuirs est remarquable."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">JL</div>
<span className="text-lg font-medium text-white tracking-tight">Julien L.</span>
</div>
</div>

<div className="bg-[#061208] border border-white/5 rounded-2xl p-8 md:p-10 group hover:border-white/10 transition-colors duration-500">
<div className="flex gap-1 text-yellow-500/80 mb-8">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-neutral-300 italic font-light leading-relaxed mb-10 group-hover:text-white transition-colors duration-300">
                        "Un service exceptionnel. Ma voiture n'a jamais été aussi propre depuis sa sortie de concession. Le soin apporté aux cuirs est remarquable."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">JL</div>
<span className="text-lg font-medium text-white tracking-tight">Julien L.</span>
</div>
</div>

<div className="bg-[#061208] border border-white/5 rounded-2xl p-8 md:p-10 group hover:border-white/10 transition-colors duration-500">
<div className="flex gap-1 text-yellow-500/80 mb-8">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-neutral-300 italic font-light leading-relaxed mb-10 group-hover:text-white transition-colors duration-300">
                        "Un service exceptionnel. Ma voiture n'a jamais été aussi propre depuis sa sortie de concession. Le soin apporté aux cuirs est remarquable."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">JL</div>
<span className="text-lg font-medium text-white tracking-tight">Julien L.</span>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-32">
<div className="bg-[#061208] border border-[#0f2e14] rounded-2xl py-24 px-6 text-center">
<h2 className="text-4xl md:text-5xl text-white font-light tracking-tight mb-6">Contact et réservation</h2>
<p className="text-lg text-neutral-400 font-light mb-12">
                    Venez savourer nos cocktails, déguster nos plats et écouter nos musiciens
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-normal text-white border border-white/20 rounded hover:bg-white/5 transition-all duration-300" href="tel:+01000000000">
                        +01 000 000 000
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm font-normal text-white border border-[#1a472a] bg-[#0a1f0f] rounded hover:bg-[#0f2e14] transition-all duration-300 shadow-xl" href="#">
                        Réservez une table
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 pt-20 pb-10 px-6 bg-[#050505]">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-sm">
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Ouvert du mardi ou samedi de 19 h à 1 h<br/>
                        Live de 21 heures à 23 heures et plus<br/>
                        Possibilité de commander jusqu'à 22 h<br/>
                        (22h30 les vendredis et samedis)
                    </p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
<div className="flex items-center gap-6">
<div className="flex items-center gap-4 mr-4">
<a className="text-neutral-400 hover:text-white transition-colors duration-300" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="text-neutral-400 hover:text-white transition-colors duration-300" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
<a className="text-sm font-light text-neutral-400 hover:text-white transition-colors duration-300 italic underline decoration-white/20 underline-offset-4" href="#">Politique de confidentialité</a>
<a className="text-sm font-light text-neutral-400 hover:text-white transition-colors duration-300 italic underline decoration-white/20 underline-offset-4" href="#">Mention légal</a>
</div>
<a className="group flex items-center" href="#">
<span className="text-2xl font-light tracking-widest text-white group-hover:opacity-80 transition-opacity duration-300">
                        LE <span className="text-red-600 inline-block -rotate-12 transform group-hover:rotate-0 transition-transform duration-500">M</span>ELVILLE
                    </span>
</a>
</div>
</div>
</footer>


    </>
  );
}
