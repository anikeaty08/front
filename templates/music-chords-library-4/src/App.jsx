import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-100 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-1 rtl:space-x-reverse" href="#">

<span className="self-center text-xl font-semibold tracking-tighter text-slate-900 font-heading">CIFRAS<span className="text-[#6ebf47]">.</span>IO</span>
</a>

<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none ring-1 ring-slate-200" type="button">
<span className="sr-only">Apri menu</span>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="hidden w-full md:block md:w-auto" id="navbar-default">
<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent text-sm text-slate-600">
<li><a className="block py-2 px-3 text-slate-900 rounded md:bg-transparent md:p-0 hover:text-[#6ebf47] transition-colors" href="#">Home</a></li>
<li><a className="block py-2 px-3 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#6ebf47] md:p-0 transition-colors" href="#estilos">Stili Musicali</a></li>
<li><a className="block py-2 px-3 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#6ebf47] md:p-0 transition-colors" href="#artistas">Artisti</a></li>
<li><a className="block py-2 px-3 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#6ebf47] md:p-0 transition-colors" href="#">Corsi</a></li>
<li><a className="block py-2 px-3 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#6ebf47] md:p-0 transition-colors" href="#">Strumenti</a></li>
<li><a className="block py-2 px-3 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#6ebf47] md:p-0 transition-colors" href="#">Blog</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative w-full h-[85vh] md:h-[70vh] flex items-center justify-center overflow-hidden mt-16">

<div className="absolute inset-0 z-0">
<img alt="Musicisti che suonano" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full flex flex-col items-center md:items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3c9f1]/20 border border-[#a3c9f1]/30 backdrop-blur-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-[#6ebf47]"></span>
<span className="text-xs font-medium text-[#a3c9f1] tracking-wide uppercase">Oltre 100.000 accordi</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 max-w-3xl leading-[1.1]">
                Trova le cifre per tutti gli <span className="text-[#a3c9f1]">stili musicali</span>! Suona le tue canzoni preferite.
            </h1>
<a className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 bg-[#6ebf47] rounded-full hover:bg-[#5da83a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6ebf47] focus:ring-offset-slate-900" href="#buscar">
                Inizia Ora
                <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="relative z-20 -mt-8 px-4" id="buscar">
<div className="max-w-4xl mx-auto">
<div className="bg-[#a3c9f1] p-2 md:p-3 rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-2">
<div className="relative flex-grow">
<div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-600">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<input className="block w-full p-4 ps-12 text-sm text-slate-900 border-0 rounded-xl bg-white focus:ring-2 focus:ring-white focus:outline-none placeholder:text-slate-400" placeholder="Cerca canzone, artista o album..." required="" type="text"/>
</div>
<button className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-xl text-sm px-8 py-4 md:py-2 transition-colors" type="submit">
                    Cerca
                </button>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-2">In Evidenza</h2>
<p className="text-slate-500 text-sm">Brani popolari, novità e top hits della settimana.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-[#6ebf47] hover:text-[#5da83a]" href="#">
                    Vedi tutto
                    <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer block" href="#">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img alt="Album Cover" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621360841016-72f1c5049386?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="bg-white/20 backdrop-blur-md text-white rounded-full p-3 flex items-center justify-center">
<iconify-icon icon="solar:play-circle-linear" width="32"></iconify-icon>
</span>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-slate-900 truncate">Zitti e Buoni</h3>
<p className="text-sm text-slate-500 mb-4">Måneskin</p>
<span className="inline-flex items-center text-xs font-medium text-[#6ebf47] bg-[#6ebf47]/10 px-2 py-1 rounded-md">
                            Rock
                        </span>
</div>
</a>

<a className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer block" href="#">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img alt="Album Cover" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="bg-white/20 backdrop-blur-md text-white rounded-full p-3 flex items-center justify-center">
<iconify-icon icon="solar:play-circle-linear" width="32"></iconify-icon>
</span>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-slate-900 truncate">Flowers</h3>
<p className="text-sm text-slate-500 mb-4">Miley Cyrus</p>
<span className="inline-flex items-center text-xs font-medium text-pink-600 bg-pink-50 px-2 py-1 rounded-md">
                            Pop
                        </span>
</div>
</a>

<a className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer block" href="#">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img alt="Album Cover" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="bg-white/20 backdrop-blur-md text-white rounded-full p-3 flex items-center justify-center">
<iconify-icon icon="solar:play-circle-linear" width="32"></iconify-icon>
</span>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-slate-900 truncate">La Solitudine</h3>
<p className="text-sm text-slate-500 mb-4">Laura Pausini</p>
<span className="inline-flex items-center text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                            Pop Italiano
                        </span>
</div>
</a>

<a className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer block" href="#">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img alt="Album Cover" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="bg-white/20 backdrop-blur-md text-white rounded-full p-3 flex items-center justify-center">
<iconify-icon icon="solar:play-circle-linear" width="32"></iconify-icon>
</span>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-slate-900 truncate">Perfect</h3>
<p className="text-sm text-slate-500 mb-4">Ed Sheeran</p>
<span className="inline-flex items-center text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-md">
                            Pop
                        </span>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200" id="estilos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">Stili Musicali</h2>
<p className="text-slate-500 mt-2 text-sm">Naviga tra le categorie più popolari.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">

<a className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#a3c9f1] hover:shadow-md transition-all duration-300" href="#">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon icon="solar:microphone-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Pop</span>
</a>

<a className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#a3c9f1] hover:shadow-md transition-all duration-300" href="#">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon icon="solar:guitar-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Rock</span>
</a>

<a className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#a3c9f1] hover:shadow-md transition-all duration-300" href="#">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon icon="solar:music-library-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Sertanejo</span>
</a>

<a className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#a3c9f1] hover:shadow-md transition-all duration-300" href="#">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-50 text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon icon="solar:hearts-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Gospel</span>
</a>

<a className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#a3c9f1] hover:shadow-md transition-all duration-300" href="#">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon icon="solar:flag-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">MPB</span>
</a>

<a className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#a3c9f1] hover:shadow-md transition-all duration-300" href="#">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon icon="solar:music-note-slider-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Classica</span>
</a>

<a className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#a3c9f1] hover:shadow-md transition-all duration-300" href="#">
<div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-50 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 mb-3">
<iconify-icon icon="solar:soundwave-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Elettronica</span>
</a>
</div>
</div>
</section>

<section className="py-20" id="artistas">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-8">Artisti Popolari</h2>
<div className="flex flex-wrap gap-3">
<a className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#6ebf47] hover:text-[#6ebf47] hover:bg-[#6ebf47]/5 transition-all" href="#">Måneskin</a>
<a className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#6ebf47] hover:text-[#6ebf47] hover:bg-[#6ebf47]/5 transition-all" href="#">Eros Ramazzotti</a>
<a className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#6ebf47] hover:text-[#6ebf47] hover:bg-[#6ebf47]/5 transition-all" href="#">Coldplay</a>
<a className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#6ebf47] hover:text-[#6ebf47] hover:bg-[#6ebf47]/5 transition-all" href="#">Laura Pausini</a>
<a className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#6ebf47] hover:text-[#6ebf47] hover:bg-[#6ebf47]/5 transition-all" href="#">Vasco Rossi</a>
<a className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#6ebf47] hover:text-[#6ebf47] hover:bg-[#6ebf47]/5 transition-all" href="#">Queen</a>
<a className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#6ebf47] hover:text-[#6ebf47] hover:bg-[#6ebf47]/5 transition-all" href="#">Ed Sheeran</a>
<a className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#6ebf47] hover:text-[#6ebf47] hover:bg-[#6ebf47]/5 transition-all" href="#">Ultimo</a>
<a className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#6ebf47] hover:text-[#6ebf47] hover:bg-[#6ebf47]/5 transition-all" href="#">Ligabue</a>
<a className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm hover:border-[#6ebf47] hover:text-[#6ebf47] hover:bg-[#6ebf47]/5 transition-all" href="#">Beethoven</a>
</div>
<div className="mt-10 p-8 rounded-2xl bg-[#a3c9f1]/10 border border-[#a3c9f1]/30 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-xl font-medium text-slate-900">Non hai trovato chi cercavi?</h3>
<p className="text-sm text-slate-600 mt-1">La nostra libreria cresce ogni giorno grazie ai contributi della community.</p>
</div>
<button className="px-6 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
                    Vedi indice completo
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-lg font-semibold tracking-tighter text-slate-900 font-heading block mb-4">CIFRAS<span className="text-[#6ebf47]">.</span>IO</span>
<p className="text-sm text-slate-500 leading-relaxed">
                        La piattaforma definitiva per musicisti di ogni livello. Impara, suona e condividi.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Piattaforma</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#6ebf47] transition-colors" href="#">Chi Siamo</a></li>
<li><a className="hover:text-[#6ebf47] transition-colors" href="#">Lavora con noi</a></li>
<li><a className="hover:text-[#6ebf47] transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Risorse</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#6ebf47] transition-colors" href="#">Accordatore Online</a></li>
<li><a className="hover:text-[#6ebf47] transition-colors" href="#">Dizionario Accordi</a></li>
<li><a className="hover:text-[#6ebf47] transition-colors" href="#">Invia Cifra</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Legale</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#6ebf47] transition-colors" href="#">Termini d'Uso</a></li>
<li><a className="hover:text-[#6ebf47] transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-[#6ebf47] transition-colors" href="#">DMCA</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Cifras.io. Tutti i diritti riservati.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:plain-2-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
