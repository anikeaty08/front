import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="film-grain"></div>
<div className="vertical-line hidden lg:block"></div>

<header className="fixed top-0 w-full z-40 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference border-b border-[#F5F5F0]/10">
<div className="text-xs uppercase tracking-[0.4em] font-medium">
            M E L V I L L E
        </div>
<nav className="hidden md:flex space-x-16 text-xs uppercase tracking-[0.2em] font-light">
<a className="hover:italic hover:tracking-[0.25em] transition-all duration-700" href="#programme">Programme</a>
<a className="hover:italic hover:tracking-[0.25em] transition-all duration-700" href="#gastronomie">Gastronomie</a>
<a className="hover:italic hover:tracking-[0.25em] transition-all duration-700" href="#reservation">Initiés</a>
</nav>
<div className="md:hidden">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</div>
</header>

<section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 overflow-hidden">

<div className="absolute inset-0 w-full h-full z-0">
<img alt="Secret Door" className="w-full h-full object-cover object-center cinematic-filter" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-[#022C22]/70 mix-blend-color"></div>
<div className="absolute inset-0 bg-[#022C22]/60"></div>

<div className="opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 w-full flex flex-col items-center mt-12">
<iconify-icon className="text-2xl text-[#F5F5F0]/50 mb-8" icon="solar:keyhole-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h1 className="md:text-8xl lg:text-9xl leading-[0.85] text-6xl text-[#F5F5F0] tracking-tighter font-serif mb-8">
                La nuit,<br/>
<span className="italic text-[#F5F5F0]/80">en héritage.</span>
</h1>
<p className="text-xs uppercase tracking-[0.3em] font-light text-[#F5F5F0]/60 max-w-md mt-6">
                Le secret le mieux gardé de Paris.
            </p>
</div>
<div className="absolute bottom-12 md:bottom-24 w-full flex justify-center z-10">
<a className="group flex flex-col items-center space-y-4 hover:opacity-70 transition-opacity duration-1000" href="#reservation">
<span className="text-xs uppercase tracking-[0.2em] font-light">Franchir le seuil</span>
<div className="w-[1px] h-12 bg-[#F5F5F0]/30 group-hover:h-16 transition-all duration-1000"></div>
</a>
</div>
</section>

<section className="bg-[#F5F5F0] text-[#022C22] py-40 md:py-64 px-6 relative z-10 overflow-hidden">
<div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#022C22]/10 -translate-x-1/2 hidden md:block"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight">
                Une porte anonyme dans le tumulte parisien. À l'intérieur, le temps suspend son vol. La lumière se tamise, <span className="italic">le jazz murmure</span>, et l'élégance redevient un absolu.
            </p>
<div className="mt-20 flex justify-center">
<iconify-icon className="text-2xl text-[#022C22]/40" icon="solar:vinyl-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</section>

<section className="bg-[#022C22] text-[#F5F5F0] py-32 md:py-56 px-6 md:px-12 relative" id="cocktails">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0 items-center relative z-10">
<div className="md:col-span-4 flex flex-col justify-center space-y-8 md:pr-16 z-20 order-2 md:order-1 mt-12 md:mt-0">
<div className="flex items-center space-x-4">
<div className="w-8 h-[1px] bg-[#F5F5F0]/30"></div>
<span className="text-xs uppercase tracking-[0.3em] text-[#F5F5F0]/50 font-light">La Mixologie</span>
</div>
<h2 className="font-serif text-5xl md:text-7xl tracking-tight leading-[0.9]">Alchimie<br/><span className="italic">Liquide</span></h2>
<p className="text-sm leading-relaxed text-[#F5F5F0]/60 font-light">
                    Des nectars confidentiels élaborés avec la précision d'un orfèvre. Infusions botaniques, spiritueux oubliés et verrerie de cristal. Chaque élixir est une œuvre éphémère.
                </p>
</div>
<div className="md:col-span-8 md:col-start-5 group overflow-hidden relative order-1 md:order-2">
<div className="aspect-[4/5] md:aspect-[16/10] w-full overflow-hidden bg-[#000]">
<img alt="Mixologie Haut de Gamme" className="w-full h-full object-cover img-zoom-hover cinematic-filter opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#022C22]/30 mix-blend-color"></div>
<div className="absolute inset-0 border border-[#F5F5F0]/10 m-6 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#022C22] text-[#F5F5F0] pb-32 md:pb-56 px-6 md:px-12 relative" id="gastronomie">
<div className="max-w-screen-2xl mx-auto relative z-10">

<div className="w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden group relative bg-black">
<img alt="Gastronomie Étoilée" className="w-full h-full object-cover img-zoom-hover cinematic-filter opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-[#022C22]/20 mix-blend-color"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 md:-mt-32 relative z-20">
<div className="md:col-span-5 md:col-start-2 bg-[#022C22] p-8 md:p-16 border border-[#F5F5F0]/10 shadow-2xl shadow-[#022C22]">
<div className="flex items-center space-x-4 mb-8">
<span className="text-xs uppercase tracking-[0.3em] text-[#F5F5F0]/50 font-light">Table Privée</span>
<div className="w-8 h-[1px] bg-[#F5F5F0]/30"></div>
</div>
<h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[0.9] mb-8">Mets &amp;<br/><span className="italic text-[#F5F5F0]/70">Noctambules</span></h2>
<p className="text-sm leading-relaxed text-[#F5F5F0]/60 font-light mb-8">
                        L'excellence gastronomique repensée pour la nuit. Une carte millimétrée, sourcée avec obsession, où les textures brutes rencontrent la délicatesse des dressages étoilés.
                    </p>
<a className="text-xs uppercase tracking-[0.2em] border-b border-[#F5F5F0]/30 pb-1 hover:border-[#F5F5F0] transition-colors" href="#reservation">Découvrir la carte</a>
</div>

<div className="hidden md:block md:col-span-3 md:col-start-9 mt-32 group overflow-hidden bg-black aspect-[3/4]">
<img alt="Détail Assiette" className="w-full h-full object-cover img-zoom-hover cinematic-filter opacity-80" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#022C22]/30 mix-blend-color"></div>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden border-y border-[#F5F5F0]/5">
<div className="absolute inset-0 w-full h-full z-0 bg-black">
<img alt="Piano Live" className="w-full h-full object-cover object-center cinematic-filter opacity-60" src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#022C22]/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#022C22] via-transparent to-[#022C22]"></div>
</div>
<div className="relative z-10 text-center px-6 flex flex-col items-center">
<iconify-icon className="text-3xl text-[#F5F5F0]/30 mb-8" icon="solar:music-notes-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-serif text-5xl md:text-8xl lg:text-9xl tracking-tighter text-[#F5F5F0] opacity-90">
                Le silence.<br/>
<span className="italic text-[#F5F5F0]/60">Puis la note.</span>
</h2>
</div>
</section>

<section className="bg-[#022C22] text-[#F5F5F0] py-32 md:py-48 px-6 md:px-12 relative z-10" id="programme">
<div className="max-w-4xl mx-auto">
<div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#F5F5F0]/10 pb-12">
<div>
<span className="text-xs uppercase tracking-[0.3em] text-[#F5F5F0]/50 block mb-6">Curation Musicale</span>
<h2 className="font-serif text-5xl md:text-7xl tracking-tight">L'Agenda</h2>
</div>
<div className="mt-8 md:mt-0">
<span className="text-xs font-light tracking-[0.1em] text-[#F5F5F0]/40">Saison d'Automne</span>
</div>
</div>
<div className="flex flex-col">

<div className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-14 border-b border-[#F5F5F0]/5 cursor-pointer hover:pl-8 transition-all duration-700 ease-out">
<div className="flex flex-col md:w-1/4 mb-4 md:mb-0">
<span className="text-xs uppercase tracking-[0.2em] text-[#F5F5F0]/50 font-light">Jeu. 14 Nov</span>
</div>
<div className="md:w-1/2">
<h3 className="font-serif text-3xl md:text-5xl group-hover:italic transition-all duration-700">Trio Ébène</h3>
</div>
<div className="md:w-1/4 text-right hidden md:block">
<span className="text-xs uppercase tracking-[0.1em] font-light text-[#F5F5F0]/30 group-hover:text-[#F5F5F0]/60 transition-colors">Jazz Contemporain</span>
</div>
</div>

<div className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-14 border-b border-[#F5F5F0]/5 cursor-pointer hover:pl-8 transition-all duration-700 ease-out">
<div className="flex flex-col md:w-1/4 mb-4 md:mb-0">
<span className="text-xs uppercase tracking-[0.2em] text-[#F5F5F0]/50 font-light">Ven. 15 Nov</span>
</div>
<div className="md:w-1/2">
<h3 className="font-serif text-3xl md:text-5xl group-hover:italic transition-all duration-700">Marcus &amp; Roots</h3>
</div>
<div className="md:w-1/4 text-right hidden md:block">
<span className="text-xs uppercase tracking-[0.1em] font-light text-[#F5F5F0]/30 group-hover:text-[#F5F5F0]/60 transition-colors">Soul Absolue</span>
</div>
</div>

<div className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-14 border-b border-[#F5F5F0]/5 cursor-not-allowed opacity-40">
<div className="flex flex-col md:w-1/4 mb-4 md:mb-0">
<span className="text-xs uppercase tracking-[0.2em] font-light">Sam. 16 Nov</span>
</div>
<div className="md:w-1/2 flex items-center space-x-6">
<h3 className="font-serif text-3xl md:text-5xl line-through">Cécile McLorin</h3>
<span className="text-xs uppercase tracking-[0.2em] border border-[#F5F5F0]/20 px-3 py-1">Complet</span>
</div>
<div className="md:w-1/4 text-right hidden md:block">
<span className="text-xs uppercase tracking-[0.1em] font-light">Vocal</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F5F0] text-[#022C22] py-48 md:py-64 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden" id="reservation">
<div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#022C22]/10 -translate-x-1/2 hidden md:block"></div>
<iconify-icon className="text-3xl text-[#022C22]/30 mb-12 relative z-10" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 relative z-10">
            Requérir<br/><span className="italic">l'accès.</span>
</h2>
<p className="text-sm font-light mb-16 max-w-md text-[#022C22]/60 relative z-10 leading-relaxed">
            Le Melville préserve l'intimité de ses membres. L'accès s'effectue sur liste ou par requête préalable. L'élégance est de rigueur.
        </p>
<button className="group relative px-12 py-5 overflow-hidden border border-[#022C22] text-xs uppercase tracking-[0.3em] font-light transition-all duration-1000 ease-out hover:text-[#F5F5F0] z-10 bg-transparent">
<span className="absolute inset-0 bg-[#022C22] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></span>
<span className="relative z-10">Soumettre une requête</span>
</button>
</section>

<footer className="bg-[#022C22] text-[#F5F5F0] pt-24 pb-12 px-6 md:px-12 border-t border-[#F5F5F0]/10">
<div className="max-w-screen-2xl mx-auto flex flex-col items-center md:items-start md:flex-row justify-between space-y-16 md:space-y-0">
<div className="flex flex-col text-center md:text-left">
<div className="text-xs uppercase tracking-[0.4em] font-medium mb-6">
                    M E L V I L L E
                </div>
<div className="text-xs font-light tracking-[0.1em] text-[#F5F5F0]/40 leading-relaxed">
                    Club Privé &amp; Restaurant Étoilé<br/>
                    Dissimulé dans le VIIIe Arrondissement<br/>
                    Paris, France
                </div>
</div>
<div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-24 text-center md:text-left">
<div className="flex flex-col space-y-4 text-xs font-light tracking-[0.2em] uppercase text-[#F5F5F0]/60">
<span className="text-[#F5F5F0]/30 mb-2">Navigation</span>
<a className="hover:text-[#F5F5F0] transition-colors" href="#programme">Le Programme</a>
<a className="hover:text-[#F5F5F0] transition-colors" href="#gastronomie">La Carte</a>
<a className="hover:text-[#F5F5F0] transition-colors" href="#cocktails">Le Bar</a>
</div>
<div className="flex flex-col space-y-4 text-xs font-light tracking-[0.2em] uppercase text-[#F5F5F0]/60">
<span className="text-[#F5F5F0]/30 mb-2">Légal</span>
<a className="hover:text-[#F5F5F0] transition-colors" href="#">Confidentialité</a>
<a className="hover:text-[#F5F5F0] transition-colors" href="#">Mentions</a>
</div>
</div>
</div>
<div className="max-w-screen-2xl mx-auto mt-24 pt-8 border-t border-[#F5F5F0]/5 flex justify-between items-center text-[10px] font-light tracking-[0.2em] uppercase text-[#F5F5F0]/30">
<span>© 2024 Le Melville.</span>
<span>Initiés Seulement.</span>
</div>
</footer>

    </>
  );
}
