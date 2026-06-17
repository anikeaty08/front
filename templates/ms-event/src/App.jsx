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



tailwind.config = {
theme: {
extend: {
colors: {
gold: {
DEFAULT: '#C5A059',
light: '#DCC287',
dark: '#A68545'
},
natural: {
50: '#F9F8F6',
100: '#F2EFE9',
900: '#2A2A2A'
}
},
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
animation: {
marquee: 'marquee 30s linear infinite',
fadein: 'fadein 1s ease-out forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
fadein: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
}
}
}
}
}



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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
<div className="md:px-8 flex h-24 max-w-screen-2xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">

<button className="md:hidden p-2 text-natural-900 hover:text-gold transition-colors">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-light text-gray-500">
<a className="hover:text-black transition-colors duration-300" href="#approche">
            Mon Approche
          </a>
<a className="hover:text-black transition-colors duration-300" href="#galerie">
            Réalisations
          </a>
</div>

<a className="flex items-center justify-center group relative" href="#">
<div className="w-[60px] h-[60px] flex items-center justify-center border border-gray-200 rounded-full group-hover:border-gold transition-colors duration-500">
<span className="serif text-2xl text-natural-900 group-hover:text-gold transition-colors duration-500">
              MS
            </span>
</div>
</a>

<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-light text-gray-500">
<a className="hover:text-black transition-colors duration-300" href="#a-propos">
            Marie-Sophie
          </a>
<a className="hover:text-black transition-colors duration-300" href="#contact">
            Contact
          </a>
</div>

<div className="md:hidden">
<a className="p-1 text-natural-900 hover:text-gold transition-colors" href="#contact">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
<div className="grid grid-cols-1 md:grid-cols-2 w-full h-full max-w-screen-2xl gap-x-8 gap-y-8 items-center">

<div className="order-2 md:order-1 flex flex-col justify-center items-start md:pl-8 lg:pl-16 space-y-8 animate-fadein">
<div className="w-16 h-[1px] bg-gold"></div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] serif text-4xl font-normal text-natural-900 tracking-tight">
            Vos événements
            <br/>
            méritent d'être
            <span className="text-gold italic">uniques.</span>
</h1>
<p className="md:text-lg leading-relaxed text-base text-gray-500 max-w-md font-light">
            Décoratrice en Loire-Atlantique, je transforme vos lieux de vie et
            de fête. De l'écoute, du détail, de l'émotion. Pas de catalogue
            figé, juste votre histoire.
          </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
<a className="group relative px-8 py-4 bg-natural-900 text-white text-xs uppercase tracking-widest font-normal text-center overflow-hidden" href="#contact">
<span className="relative z-10 group-hover:text-natural-900 transition-colors duration-300">
                Demander un devis
              </span>
<div className="absolute inset-0 h-full w-full bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</a>
<a className="group uppercase hover:bg-natural-900 hover:text-white transition-colors duration-300 text-xs font-normal text-natural-900 tracking-widest text-center border-natural-900 border-[0.5px] pt-4 pr-8 pb-4 pl-8" href="#approche">
              Comment je travaille
            </a>
</div>
<div className="flex items-center gap-6 pt-4 text-gray-400">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs uppercase tracking-wider">
                Pays de la Loire
              </span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs uppercase tracking-wider">
                Fait avec le cœur
              </span>
</div>
</div>
</div>

<div className="order-1 md:order-2 relative h-[50vh] md:h-[80vh] bg-natural-100 overflow-hidden rounded-sm">
<img alt="Table de fête décoration naturelle" className="object-center hover:scale-105 transition-all duration-[2s] grayscale-[20%] hover:grayscale-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00d8c365-fe57-41d7-9e1b-525f27035e96_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white drop-shadow-md">
<span className="uppercase text-xs font-medium tracking-widest">
              Thême Vin et fête
            </span>
<span className="uppercase text-xs font-medium tracking-widest">
              2026
            </span>
</div>
</div>
</div>
</header>

<section className="py-12 border-t border-b border-gray-100 bg-white overflow-hidden flex select-none">
<div className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center opacity-80">
<span className="text-5xl md:text-7xl font-light tracking-tighter uppercase text-gray-200 mx-8">
          Authenticité
        </span>
<span className="text-5xl md:text-7xl font-normal tracking-tighter uppercase text-gold/30 serif italic mx-8">
          Émotion
        </span>
<span className="text-5xl md:text-7xl font-light tracking-tighter uppercase text-gray-200 mx-8">
          Sur Mesure
        </span>
<span className="text-5xl md:text-7xl font-normal tracking-tighter uppercase text-gold/30 serif italic mx-8">
          Humain
        </span>
<span className="text-5xl md:text-7xl font-light tracking-tighter uppercase text-gray-200 mx-8">
          Loire-Atlantique
        </span>
</div>
<div aria-hidden="true" className="animate-marquee flex whitespace-nowrap min-w-full shrink-0 items-center opacity-80">
<span className="text-5xl md:text-7xl font-light tracking-tighter uppercase text-gray-200 mx-8">
          Authenticité
        </span>
<span className="text-5xl md:text-7xl font-normal tracking-tighter uppercase text-gold/30 serif italic mx-8">
          Émotion
        </span>
<span className="text-5xl md:text-7xl font-light tracking-tighter uppercase text-gray-200 mx-8">
          Sur Mesure
        </span>
<span className="text-5xl md:text-7xl font-normal tracking-tighter uppercase text-gold/30 serif italic mx-8">
          Humain
        </span>
<span className="text-5xl md:text-7xl font-light tracking-tighter uppercase text-gray-200 mx-8">
          Loire-Atlantique
        </span>
</div>
</section>

<section className="bg-natural-50 border-b border-gray-100 pt-20 pb-20" id="approche">
<div className="max-w-screen-xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<span className="text-gold font-normal text-xs tracking-widest uppercase mb-3 block">
            Mon Processus
          </span>
<h2 className="text-3xl md:text-4xl tracking-tight text-natural-900 serif font-normal">
            De l'idée à la magie
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200/50">
<div className="p-8 text-center group cursor-default">
<div className="mb-6 text-gray-300 group-hover:text-gold transition-colors duration-500 flex justify-center">
<iconify-icon icon="lucide:message-circle-heart" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-natural-900 mb-3 serif">
              1. La Rencontre
            </h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto font-light">
              On discute de vos envies, de votre histoire. Je prends le temps de
              comprendre ce qui vous fait vibrer pour un projet qui vous
              ressemble.
            </p>
</div>
<div className="p-8 text-center group cursor-default">
<div className="mb-6 text-gray-300 group-hover:text-gold transition-colors duration-500 flex justify-center">
<iconify-icon icon="lucide:palette" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-natural-900 mb-3 serif">
              2. La Création
            </h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto font-light">
              J'imagine un univers visuel (moodboard). On ajuste ensemble les
              détails : fleurs, matières, lumières. Rien n'est laissé au hasard.
            </p>
</div>
<div className="p-8 text-center group cursor-default">
<div className="mb-6 text-gray-300 group-hover:text-gold transition-colors duration-500 flex justify-center">
<iconify-icon className="" icon="lucide:sparkles" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-natural-900 mb-3 serif">
              3. Le Jour J
            </h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto font-light">
              Je m'occupe de toute la mise en place. Vous profitez, vous
              respirez, vous vivez l'instant avec vos proches. Je gère la magie.
            </p>
</div>
</div>
</div>
</section>

<section className="md:px-8 max-w-screen-2xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4" id="galerie">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/5 pb-8">
<div className="max-w-lg">
<span className="text-gold font-normal text-xs tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
<h2 className="text-4xl tracking-tight text-natural-900 serif font-normal">
            Moments Choisis
          </h2>
</div>
<div className="mt-4 md:mt-0 text-right">
<p className="text-xs text-gray-400 font-light mb-1">
            Chaque projet est unique
          </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/10 transition-colors duration-500 z-10 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Table mariage intime" className="image-hover-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d43e28ec-b764-4671-86fe-8060955338db_1600w.jpg"/>
</div>
<div className="flex items-baseline justify-between">
<div className="">
<h3 className="serif text-xl font-normal text-natural-900">
                50 ans de John M.
              </h3>
<p className="uppercase group-hover:text-gold transition-colors text-xs text-gray-500 tracking-wide mt-1">
                Nantes • Vin et fête
              </p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/10 transition-colors duration-500 z-10 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Anniversaire Bohème" className="image-hover-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/459736a5-45bd-4662-a71d-e881bac1185b_800w.png"/>
</div>
<div className="flex items-baseline justify-between">
<div className="">
<h3 className="serif text-xl font-normal text-natural-900">
                Baby Shower Billie
              </h3>
<p className="uppercase group-hover:text-gold transition-colors text-xs text-gray-500 tracking-wide mt-1">
                Nantes • Citron, élégance, blanc pure
              </p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/0 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Baptême garçon" className="w-full h-full object-cover image-hover-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46047d9c-a0f3-426f-89f9-af49efe2a9cf_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline">
<div className="">
<h3 className="serif text-xl font-normal text-natural-900">
                Baptême de Roxane
              </h3>
<p className="uppercase group-hover:text-gold transition-colors text-xs text-gray-500 tracking-wide mt-1">
                La meilleraye de bretagne • Bleu océan
              </p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/10 transition-colors duration-500 z-10 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Garden Party" className="image-hover-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3062e1c2-8517-4653-830b-cb3db688d093_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline">
<div className="">
<h3 className="serif text-xl font-normal text-natural-900">
                Fête des voisins
              </h3>
<p className="uppercase group-hover:text-gold transition-colors text-xs text-gray-500 tracking-wide mt-1">
                Nozay
              </p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/0 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Décoration florale" className="image-hover-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33c61ff8-a5be-429a-876c-f6785f564e3a_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline">
<div className="">
<h3 className="serif text-xl font-normal text-natural-900">
                Anniversaire Laurine
              </h3>
<p className="uppercase group-hover:text-gold transition-colors text-xs text-gray-500 tracking-wide mt-1">
                Privé • Surprise
              </p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-gray-50 aspect-[4/5] mb-6">
<div className="group-hover:bg-black/10 transition-colors duration-500 z-10 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Gender Reveal" className="image-hover-zoom w-full h-full object-cover z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/258aea08-c4fb-43a9-9905-91552f795367_800w.jpg"/>
</div>
<div className="flex justify-between items-baseline">
<div className="">
<h3 className="serif text-xl font-normal text-natural-900">
                Anniversaire 18 et 25 ans
              </h3>
<p className="uppercase group-hover:text-gold transition-colors text-xs text-gray-500 tracking-wide mt-1">
                Chateaubriant
              </p>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block border-b border-natural-900 pb-1 text-sm uppercase tracking-widest hover:text-gold hover:border-gold transition-colors" href="#contact">
          Imaginer mon événement
        </a>
</div>
</section>

<section className="overflow-hidden text-white bg-natural-900 pt-32 pb-32 relative" id="a-propos">
<div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-10">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/50 hidden md:block"></div>
<img alt="Marie-Sophie Décoratrice" className="aspect-[4/5] hover:opacity-100 transition-opacity duration-700 opacity-90 w-full object-cover grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold/50 hidden md:block"></div>
</div>
<div className="space-y-8">
<h2 className="md:text-5xl lg:text-6xl serif leading-tight text-4xl font-normal tracking-tight">
              Marie-Sophie
              <br/>
<span className="text-gold italic">Passion &amp; Humain</span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-300">
              Moi c'est Marie-Sophie, j'ai créé MS-Event par passion pour la
              décoration et l'envie de partager des moments inoubliables.
            </p>
<p className="leading-relaxed text-lg font-light text-gray-300">
              Je ne cherche pas à faire du volume. Je cherche l'authenticité.
              Mon but est simple : vous décharger du stress de la décoration
              pour que vous ne gardiez que l'émotion. Chaque fleur, chaque nappe
              est choisie parce qu'elle raconte un bout de votre histoire.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
<div className="border-l border-gold pl-4">
<h4 className="text-gold serif text-xl mb-1 font-normal">
                  Loire-Atlantique
                </h4>
<p className="text-sm text-gray-400">Proximité &amp; Réactivité</p>
</div>
<div className="border-l border-gold pl-4">
<h4 className="text-gold serif text-xl mb-1 font-normal">
                  Sur Mesure
                </h4>
<p className="text-sm text-gray-400">Jamais de copier-coller</p>
</div>
</div>
<div className="pt-8">
<a className="inline-flex items-center gap-3 text-white border-b border-gold pb-1 hover:text-gold transition-colors text-sm uppercase tracking-widest font-normal" href="#contact">
                Me contacter
                <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border-b pt-24 pb-24">
<div className="max-w-screen-xl mx-auto px-4 md:px-8">
<h2 className="md:text-4xl serif text-natural-900 text-3xl font-normal text-center mb-16">
          Confidences de mes clients
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 bg-natural-50 relative group hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-gold/20 absolute top-6 right-6" icon="lucide:quote" width="40"></iconify-icon>
<p className="leading-relaxed font-light italic text-gray-600 mb-6">
              "On avait pas le temps de s'en occuper, on est pas très créatifs,
              et c'est tout ce qu'on a retrouvé avec Marie-Sophie. Nos invités
              étaients surpris et ravis de la décoration, ça nous fait des
              supers souvenirs et des photos magnifiques !"
            </p>
<div className="flex items-center gap-3">
<div className="flex text-xs text-gray-500 font-serif bg-gray-200 w-10 h-10 rounded-full items-center justify-center">
                S
              </div>
<div className="">
<p className="text-natural-900 text-sm font-medium">
                  Antoine et Laurine
                </p>
<p className="uppercase text-xs text-gray-400 tracking-wide">
                  Baby Shower
                </p>
</div>
</div>
</div>
<div className="p-8 bg-natural-50 relative group hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-gold/20 absolute top-6 right-6" icon="lucide:quote" width="40"></iconify-icon>
<p className="text-gray-600 font-light italic mb-6 leading-relaxed">
              "Une écoute incroyable. Pas de vente forcée, juste de la
              bienveillance. La décoration de notre anniversaire de mariage
              était simple, chic et élégante. Merci pour tout."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs font-serif text-gray-500">
                J
              </div>
<div className="">
<p className="text-sm font-medium text-natural-900">
                  Philippe &amp; Sophie
                </p>
<p className="text-xs text-gray-400 uppercase tracking-wide">
                  40 ans de mariage
                </p>
</div>
</div>
</div>
<div className="p-8 bg-natural-50 relative group hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-gold/20 absolute top-6 right-6" icon="lucide:quote" width="40"></iconify-icon>
<p className="leading-relaxed font-light italic text-gray-600 mb-6">
              "Nous cherchions quelque chose d'humain et merveilleux pour noël,
              on avait envie de changer de la décoration habituelle avec un
              budget restreint. Marie-Sophie a été top, vraiment à l'écoute et
              tout était préparé sans stress pour nous, un vrai soulagement"
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs font-serif text-gray-500">
                E
              </div>
<div className="">
<p className="text-sm font-medium text-natural-900">
                  EHPAD Chateaubriant
                </p>
<p className="uppercase text-xs text-gray-400 tracking-wide">
                  Fête de fin d'année
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-8 max-w-3xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4">
<h2 className="text-3xl md:text-4xl text-center serif text-natural-900 mb-12 font-normal">
        Questions fréquentes
      </h2>
<div className="space-y-4">
<details className="group cursor-pointer bg-white border-gray-100 border pt-6 pr-6 pb-6 pl-6">
<summary className="flex font-medium text-natural-900 items-center justify-between">
            Comment se passe le premier échange ?
            <span className="transform group-open:rotate-180 transition-transform text-gold">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<p className="text-gray-500 font-light mt-4 leading-relaxed text-sm">
            C'est très simple et détendu. On s'appelle ou on se voit autour d'un
            café. Vous me parlez de votre événement, de vos goûts, et je
            commence à imaginer des pistes. C'est sans engagement.
          </p>
</details>
<details className="group bg-white border border-gray-100 p-6 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-natural-900">
            Quel est votre secteur d'intervention ?
            <span className="transform group-open:rotate-180 transition-transform text-gold">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<p className="text-gray-500 font-light mt-4 leading-relaxed text-sm">
            Je suis basée en Loire-Atlantique. Je me déplace principalement sur
            Nantes, Saint-Nazaire, la côte (Pornic, La Baule) et plus largement
            en Pays de la Loire selon le projet.
          </p>
</details>
<details className="group bg-white border border-gray-100 p-6 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-natural-900">
            Puis-je utiliser ma propre décoration ?
            <span className="transform group-open:rotate-180 transition-transform text-gold">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<p className="text-gray-500 font-light mt-4 leading-relaxed text-sm">
            Absolument ! J'adore mélanger mes pièces avec vos objets de famille
            ou vos trouvailles. C'est ce qui donne une âme à la décoration.
          </p>
</details>
<details className="group bg-white border border-gray-100 p-6 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-natural-900">
            Quel est le budget moyen ?
            <span className="transform group-open:rotate-180 transition-transform text-gold">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<p className="text-gray-500 font-light mt-4 leading-relaxed text-sm">
            Chaque projet est différent. Je m'adapte à votre enveloppe. Je
            préfère être transparente : parlons-en, et je vous dirai honnêtement
            ce qu'on peut faire de beau avec votre budget.
          </p>
</details>
</div>
</section>

<section className="overflow-hidden bg-natural-50 pt-24 pb-24 relative" id="contact">

<div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="max-w-xl mx-auto px-4 relative z-10">
<div className="text-center mb-12">
<span className="text-gold font-normal text-xs tracking-widest uppercase mb-3 block">
            Parlons de vous
          </span>
<h2 className="text-3xl md:text-4xl serif text-natural-900 mb-4 font-normal">
            Votre événement commence ici
          </h2>
<p className="text-gray-500 font-light">
            Remplissez ce formulaire. Pas de robot, c'est moi qui vous
            répondrai.
          </p>
</div>
<form action="https://formsubmit.co/mseventspro@icloud.com" className="space-y-8 bg-white p-8 md:p-12 shadow-sm border border-gray-100" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-gold transition-colors">
                Prénom
              </label>
<input className="w-full border-b border-gray-200 pb-2 text-natural-900 focus:border-gold transition-colors font-light" name="prenom" placeholder="Votre prénom" required="required" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-gold transition-colors">
                Nom
              </label>
<input className="w-full border-b border-gray-200 pb-2 text-natural-900 focus:border-gold transition-colors font-light" name="nom" placeholder="Votre nom" required="required" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-gold transition-colors">
                Email
              </label>
<input className="w-full border-b border-gray-200 pb-2 text-natural-900 focus:border-gold transition-colors font-light" name="email" placeholder="votre@email.com" required="required" type="email"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-gold transition-colors">
                Téléphone
              </label>
<input className="w-full border-b border-gray-200 pb-2 text-natural-900 focus:border-gold transition-colors font-light" name="telephone" placeholder="06 00 00 00 00" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-gold transition-colors">
                Type d'événement
              </label>
<select className="w-full border-b border-gray-200 pb-2 text-natural-900 focus:border-gold transition-colors font-light bg-transparent" name="type_evenement">
<option>Mariage / PACS</option>
<option>Baptême / Baby Shower</option>
<option>Anniversaire</option>
<option>Événement Pro / Asso</option>
<option>Autre</option>
</select>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-gold transition-colors">
                Date souhaitée
              </label>
<input className="w-full border-b border-gray-200 pb-2 text-natural-900 focus:border-gold transition-colors font-light text-gray-400 uppercase text-sm" name="date" type="date"/>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-gold transition-colors">
              Racontez-moi votre projet
            </label>
<textarea className="w-full border-b border-gray-200 pb-2 text-natural-900 focus:border-gold transition-colors font-light resize-none" name="projet" placeholder="L'ambiance, le lieu, vos envies..." required="required" rows="4"></textarea>
</div>
<div className="pt-4 text-center">
<button className="bg-natural-900 text-white px-10 py-4 uppercase text-xs tracking-widest hover:bg-gold transition-colors duration-300 w-full md:w-auto" type="submit">
              Envoyer ma demande
            </button>
</div>
<p className="text-[10px] text-center text-gray-400 mt-4">
            Je réponds généralement sous 48h.
          </p>
</form>
</div>
</section>

<footer className="bg-natural-900 text-white pt-20 pb-10">
<div className="md:px-8 max-w-screen-2xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-20">

<div className="md:w-1/3">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full">
<span className="serif text-xl font-normal">MS</span>
</div>
<span className="serif text-2xl font-normal tracking-tight">
                MS-Event
              </span>
</div>
<p className="leading-relaxed text-sm text-gray-400 max-w-xs mb-8 font-light">
              Décoratrice événementielle passionnée basée en Loire-Atlantique.
              Pour que chaque fête soit un souvenir inoubliable.
            </p>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white hover:scale-110 transition-all" href="mailto:mseventspro@icloud.com">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="">
<h5 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
                Navigation
              </h5>
<ul className="space-y-4 text-sm text-gray-400 font-light">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Accueil
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#galerie">
                    Réalisations
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#a-propos">
                    À propos
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#contact">
                    Me contacter
                  </a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
                Infos
              </h5>
<ul className="space-y-4 text-sm text-gray-400 font-light">
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                  Pays de la Loire
                </li>
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:mail" width="14"></iconify-icon>
                  mseventspro@icloud.com
                </li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                    Mentions Légales
                  </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">CGV</a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
                Zone d'intervention
              </h5>
<p className="leading-relaxed text-sm font-light text-gray-400">
                Nantes, Carquefou, Nozay, Candé, Nord-sur-Erdre, Chateaubriant
                et alentours.
              </p>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-light">
<p className="">© 2024 MS-Event. Fait avec le ❤️ en Loire-Atlantique.</p>
</div>
</div>
</footer>

    </>
  );
}
