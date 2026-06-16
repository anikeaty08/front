import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'enter': 'enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'fade': 'fade 1s ease-out forwards',
},
keyframes: {
enter: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fade: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 opacity-0 animate-fade">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-white font-serif tracking-tight text-lg">
                Cépage.
            </div>
<div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-wide text-neutral-500">
<a className="hover:text-white transition-colors duration-300" href="#">La Cave</a>
<a className="hover:text-white transition-colors duration-300" href="#">Vignerons</a>
<a className="hover:text-white transition-colors duration-300" href="#">Journal</a>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-[11px] font-medium text-neutral-500">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
                    Vente en cours
                </div>
<button className="text-neutral-400 hover:text-white transition-colors duration-300">
<i data-lucide="shopping-bag" height="18" strokeWidth="1.5" width="18"></i>
</button>
</div>
</div>
</nav>

<main className="min-h-screen pt-32 pb-12 lg:pt-40 lg:pb-20 flex flex-col justify-center">
<div className="max-w-screen-xl mx-auto px-6 w-full">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-16 items-stretch">

<div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[600px]">

<div>
<span className="block opacity-0 animate-enter text-[11px] uppercase tracking-widest text-neutral-500 font-medium mb-8 pl-0.5">Octobre 2023 — Vol. 04</span>
<h1 className="opacity-0 animate-enter delay-100 text-4xl lg:text-6xl text-white font-serif leading-[1.15] mb-8">
                            L'essentiel du <br/>
<span className="italic text-neutral-500">terroir français.</span>
</h1>
<p className="opacity-0 animate-enter delay-200 text-neutral-500 text-sm leading-relaxed max-w-sm mb-10 font-light text-justify">
                            Une curation minimaliste de six grands crus. Traçabilité absolue, conservation idéale. Accès réservé aux membres pour 48 heures.
                        </p>
<div className="opacity-0 animate-enter delay-300 flex flex-col sm:flex-row gap-4 w-full max-w-xs mb-12">
<button className="h-11 px-8 rounded-sm bg-white text-neutral-950 font-medium text-xs tracking-wide hover:bg-neutral-200 transition-colors duration-300">
                                Voir la sélection
                            </button>
<button className="h-11 px-6 rounded-sm border border-neutral-800 text-neutral-400 font-medium text-xs tracking-wide hover:border-neutral-600 hover:text-white transition-colors duration-300">
                                Le concept
                            </button>
</div>
</div>

<div className="opacity-0 animate-enter delay-500 mt-auto pt-10 border-t border-neutral-900">

<div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-8">
<div className="group flex items-start gap-3">
<i className="text-neutral-700 mt-0.5 group-hover:text-neutral-400 transition-colors duration-300" data-lucide="shield-check" height="14" width="14"></i>
<div>
<h4 className="text-xs font-medium text-white mb-0.5">Authenticité</h4>
<p className="text-[10px] text-neutral-600">Direct propriété</p>
</div>
</div>
<div className="group flex items-start gap-3">
<i className="text-neutral-700 mt-0.5 group-hover:text-neutral-400 transition-colors duration-300" data-lucide="thermometer" height="14" width="14"></i>
<div>
<h4 className="text-xs font-medium text-white mb-0.5">Stockage</h4>
<p className="text-[10px] text-neutral-600">Chais climatisés</p>
</div>
</div>
<div className="group flex items-start gap-3">
<i className="text-neutral-700 mt-0.5 group-hover:text-neutral-400 transition-colors duration-300" data-lucide="package-check" height="14" width="14"></i>
<div>
<h4 className="text-xs font-medium text-white mb-0.5">Livraison</h4>
<p className="text-[10px] text-neutral-600">Sécurisée &amp; rapide</p>
</div>
</div>
<div className="group flex items-start gap-3">
<i className="text-neutral-700 mt-0.5 group-hover:text-neutral-400 transition-colors duration-300" data-lucide="gem" height="14" width="14"></i>
<div>
<h4 className="text-xs font-medium text-white mb-0.5">Rareté</h4>
<p className="text-[10px] text-neutral-600">Allocations privées</p>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-6 border-t border-neutral-900/50">
<div className="flex flex-col gap-1">
<span className="text-[10px] text-neutral-600 uppercase tracking-wider">Expert</span>
<span className="text-xs text-neutral-300">Jean-Marc Soltner</span>
</div>
<div className="flex flex-col gap-1 text-right">
<span className="text-[10px] text-neutral-600 uppercase tracking-wider">Origine</span>
<span className="text-xs text-neutral-300">France, Italie</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 h-full">
<div className="grid grid-cols-2 gap-px bg-neutral-900 border border-neutral-900 overflow-hidden rounded-sm h-full opacity-0 animate-enter delay-300">

<div className="bg-neutral-950 aspect-[4/5] relative group p-8 flex flex-col justify-between hover:bg-neutral-900/40 transition-colors duration-500">
<div className="flex justify-between items-start z-10">
<span className="text-[10px] text-neutral-500 font-medium">01</span>
<span className="text-[10px] text-neutral-300 border border-neutral-800 px-2 py-0.5 rounded-full transition-colors group-hover:border-neutral-600">Bordeaux</span>
</div>
<img alt="Wine" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 pt-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-white font-serif italic text-lg mb-1">Château Margaux</h3>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Premier Grand Cru Classé</p>
</div>
</div>

<div className="bg-neutral-950 aspect-[4/5] relative group p-8 flex flex-col justify-between hover:bg-neutral-900/40 transition-colors duration-500">
<div className="flex justify-between items-start z-10">
<span className="text-[10px] text-neutral-500 font-medium">02</span>
<span className="text-[10px] text-neutral-300 border border-neutral-800 px-2 py-0.5 rounded-full transition-colors group-hover:border-neutral-600">Bourgogne</span>
</div>
<img alt="Wine" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 pt-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-white font-serif italic text-lg mb-1">Romanée-Conti</h3>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Grand Cru Monopole</p>
</div>
</div>

<div className="bg-neutral-950 aspect-[4/5] relative group p-8 flex flex-col justify-between hover:bg-neutral-900/40 transition-colors duration-500">
<div className="flex justify-between items-start z-10">
<span className="text-[10px] text-neutral-500 font-medium">03</span>
<span className="text-[10px] text-neutral-300 border border-neutral-800 px-2 py-0.5 rounded-full transition-colors group-hover:border-neutral-600">Rhône</span>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="text-neutral-800 group-hover:text-neutral-600 transition-colors duration-500" data-lucide="wine" height="64" strokeWidth="1" width="64"></i>
</div>
<div className="relative z-10 mt-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-white font-serif italic text-lg mb-1">Côte-Rôtie</h3>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Domaine Jamet</p>
</div>
</div>

<div className="bg-neutral-950 aspect-[4/5] p-8 flex flex-col justify-center items-center text-center group hover:bg-neutral-900/40 transition-colors duration-500 cursor-pointer">
<div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center mb-4 text-neutral-400 group-hover:border-neutral-500 group-hover:text-white transition-all duration-500 group-hover:scale-110">
<i data-lucide="arrow-right" height="20" width="20"></i>
</div>
<span className="text-xs text-white font-medium tracking-wide">Voir toute la cave</span>
<span className="text-[10px] text-neutral-600 mt-2 transition-colors group-hover:text-neutral-500">3 références supplémentaires</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
