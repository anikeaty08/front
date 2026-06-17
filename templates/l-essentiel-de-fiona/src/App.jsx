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
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
rose: '#EACCCB', // Extracted from logo petal
teal: '#1F4E5F', // Extracted from logo base
dark: '#1C1917',
light: '#FAF7F5',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-stone-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex items-center">
<i className="h-8 w-8 text-brand-teal" data-lucide="flower-2"></i>
<span className="text-2xl font-medium text-stone-900 tracking-tight font-serif">
                        L’essentiel <span className="text-brand-teal italic text-xl">de Fiona</span>
</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-base font-medium text-stone-600 hover:text-brand-teal transition-colors" href="#services">Prestations</a>
<a className="text-base font-medium text-stone-600 hover:text-brand-teal transition-colors" href="#about">L'Institut</a>
<a className="text-base font-medium text-stone-600 hover:text-brand-teal transition-colors" href="#reviews">Avis</a>
<a className="text-base font-medium text-stone-600 hover:text-brand-teal transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-brand-teal hover:bg-stone-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="https://www.planity.com/" target="_blank">
                        Réservez maintenant
                    </a>
</div>

<button className="md:hidden p-2 text-stone-600">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Spa ambiance" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-rose/20 text-brand-teal text-xs font-semibold tracking-wide uppercase mb-6">
<span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                    Saint-Paul-Cap-de-Toul
                </div>
<h1 className="font-serif text-5xl lg:text-7xl font-medium tracking-tight text-stone-900 leading-[1.1] mb-6">
                    Sublimez votre <br/><span className="italic text-brand-teal">beauté naturelle</span>
</h1>
<p className="text-lg lg:text-xl text-stone-600 mb-10 leading-relaxed max-w-lg">
                    Institut de beauté expert. Soins visage, corps, maquillage &amp; détente dans un cadre chaleureux et raffiné.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center hover:bg-stone-800 transition-all hover:shadow-xl hover:-translate-y-1 text-base font-medium text-white bg-stone-900 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="https://www.planity.com/lessentiel-de-fiona-81220-saint-paul-cap-de-joux">
                        Prendre rendez-vous
                        <i className="ml-2 h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 transition-all shadow-sm hover:shadow-md" href="#services">
                        Découvrir la carte
                    </a>
</div>
<div className="mt-12 flex items-center gap-4 text-sm font-medium text-stone-500">
<div className="flex -space-x-2">
<div className="bg-stone-200 w-8 h-8 bg-[url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=320&amp;q=80)] bg-cover bg-center border-white border-2 rounded-full"></div>
<div className="bg-stone-300 w-8 h-8 bg-[url(https://images.unsplash.com/photo-1564564295391-7f24f26f568b?w=320&amp;q=80)] bg-cover bg-center border-white border-2 rounded-full"></div>
<div className="bg-stone-400 w-8 h-8 bg-[url(https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&amp;q=80)] bg-cover bg-center border-white border-2 rounded-full"></div>
</div>
<p className="">Rejoignez nos clientes satisfaites</p>
<div className="flex text-yellow-400">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-4xl font-medium tracking-tight text-stone-900 mb-4">Nos Prestations</h2>
<p className="text-lg text-stone-500">Une expertise complète pour révéler votre éclat, de la tête aux pieds.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-stone-50 hover:bg-white border border-stone-100 hover:border-brand-rose/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-brand-teal">
<i className="h-6 w-6" data-lucide="sparkles"></i>
</div>
<h3 className="font-serif text-2xl font-medium text-stone-900 mb-3">Soins Visage</h3>
<p className="text-lg text-stone-500 mb-6">Des rituels sur-mesure pour hydrater, purifier et illuminer votre teint avec des produits d'exception.</p>
<a className="inline-flex items-center text-brand-teal hover:text-stone-900 transition-colors font-medium" href="/soins-visage">
                        En savoir plus <i className="ml-1 h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>

<div className="group p-8 rounded-3xl bg-stone-50 hover:bg-white border border-stone-100 hover:border-brand-rose/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-brand-teal">
<i className="h-6 w-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="font-serif text-2xl font-medium text-stone-900 mb-3">Corps &amp; Bien-être</h3>
<p className="text-lg text-stone-500 mb-6">Massages relaxants et soins du corps pour une détente absolue et une peau soyeuse.</p>
<a className="inline-flex items-center text-brand-teal font-medium hover:text-stone-900 transition-colors" href="#">
                        En savoir plus <i className="ml-1 h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>

<div className="group p-8 rounded-3xl bg-stone-50 hover:bg-white border border-stone-100 hover:border-brand-rose/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-brand-teal">
<i className="h-6 w-6" data-lucide="feather"></i>
</div>
<h3 className="font-serif text-2xl font-medium text-stone-900 mb-3">Épilation Douce</h3>
<p className="text-lg text-stone-500 mb-6">Techniques expertes et cires de haute qualité pour une peau nette et respectée.</p>
<a className="inline-flex items-center text-brand-teal font-medium hover:text-stone-900 transition-colors" href="#">
                        En savoir plus <i className="ml-1 h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>

<div className="group p-8 rounded-3xl bg-stone-50 hover:bg-white border border-stone-100 hover:border-brand-rose/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-brand-teal">
<i className="h-6 w-6" data-lucide="eye"></i>
</div>
<h3 className="font-serif text-2xl font-medium text-stone-900 mb-3">Regard &amp; Maquillage</h3>
<p className="text-lg text-stone-500 mb-6">Sublimez vos yeux et profitez d'un maquillage professionnel pour toutes vos occasions.</p>
<a className="inline-flex items-center text-brand-teal font-medium hover:text-stone-900 transition-colors" href="#">
                        En savoir plus <i className="ml-1 h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>

<div className="group p-8 rounded-3xl bg-stone-50 hover:bg-white border border-stone-100 hover:border-brand-rose/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 md:col-span-2 lg:col-span-2">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center h-full">
<div className="flex-1">
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-brand-teal">
<i className="h-6 w-6" data-lucide="gem"></i>
</div>
<h3 className="font-serif text-2xl font-medium text-stone-900 mb-3">Manucure &amp; Beauté des Pieds</h3>
<p className="text-lg text-stone-500 mb-6">Soins des ongles, vernis semi-permanent et beauté des pieds pour une élégance jusqu'au bout des ongles.</p>
<a className="inline-flex items-center text-brand-teal font-medium hover:text-stone-900 transition-colors" href="#">
                                En savoir plus <i className="ml-1 h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>

<div className="hidden md:block w-48 h-32 rounded-xl overflow-hidden shadow-sm">
<img alt="Nails" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-light relative">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
<div className="lg:col-span-5 relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Beauty products" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-stone-50 max-w-xs">
<div className="flex items-center gap-3 mb-2">
<i className="h-6 w-6 text-brand-teal" data-lucide="award"></i>
<span className="font-serif font-medium text-stone-900 text-lg">Certifié Expert</span>
</div>
<p className="text-sm text-stone-500">Formation continue et respect des normes d'hygiène les plus strictes.</p>
</div>
</div>
<div className="lg:col-span-7">
<h2 className="font-serif text-4xl font-medium tracking-tight text-stone-900 mb-6">L’excellence au service de votre bien-être</h2>
<p className="text-lg text-stone-600 mb-10 leading-relaxed">
                        Chez L’essentiel de Fiona, chaque soin est une invitation au lâcher-prise. Nous combinons techniques manuelles expertes et technologies douces pour des résultats visibles et durables.
                    </p>
<div className="space-y-8">
<div className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-rose/30 flex items-center justify-center text-brand-teal">
<i className="h-5 w-5" data-lucide="star"></i>
</div>
<div>
<h4 className="text-xl font-medium text-stone-900 mb-1">Produits de Qualité</h4>
<p className="text-stone-500">Partenaires de marques reconnues (Pur Eden, Perron Rigot) respectueuses de votre peau.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-rose/30 flex items-center justify-center text-brand-teal">
<i className="h-5 w-5" data-lucide="heart"></i>
</div>
<div>
<h4 className="text-xl font-medium text-stone-900 mb-1">Approche Bienveillante</h4>
<p className="text-stone-500">Une écoute attentive pour des conseils et des soins 100% personnalisés.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-rose/30 flex items-center justify-center text-brand-teal">
<i className="h-5 w-5" data-lucide="clock"></i>
</div>
<div>
<h4 className="text-xl font-medium text-stone-900 mb-1">Ponctualité &amp; Confort</h4>
<p className="text-stone-500">Votre temps est précieux. Nous vous garantissons un accueil fluide et serein.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-serif text-4xl font-medium tracking-tight text-stone-900">Elles nous font confiance</h2>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-stone-200 hover:bg-stone-50 text-stone-600 transition-colors"><i className="h-5 w-5" data-lucide="arrow-left"></i></button>
<button className="p-2 rounded-full border border-stone-200 hover:bg-stone-50 text-stone-600 transition-colors"><i className="h-5 w-5" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">

<div className="min-w-[300px] md:min-w-[400px] bg-stone-50 p-8 rounded-2xl snap-center border border-stone-100">
<div className="flex text-yellow-400 mb-4">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-700 italic mb-6">"Un moment hors du temps. Fiona est d'une douceur incroyable et très professionnelle. Mon soin visage a fait des miracles !"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-serif">S</div>
<div>
<p className="font-medium text-stone-900">Sophie M.</p>
<p className="text-sm text-stone-500">Soins Visage</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-stone-50 p-8 rounded-2xl snap-center border border-stone-100">
<div className="flex text-yellow-400 mb-4">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-700 italic mb-6">"L'institut est magnifique, on s'y sent tout de suite bien. Épilation parfaite et sans douleur. Je recommande les yeux fermés."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-serif">C</div>
<div>
<p className="font-medium text-stone-900">Camille L.</p>
<p className="text-sm text-stone-500">Épilation</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-stone-50 p-8 rounded-2xl snap-center border border-stone-100">
<div className="flex text-yellow-400 mb-4">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-700 italic mb-6">"Accueil chaleureux, conseils avisés et produits de qualité. Une vraie parenthèse de détente à Saint-Paul."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-serif">M</div>
<div>
<p className="font-medium text-stone-900">Marie D.</p>
<p className="text-sm text-stone-500">Corps &amp; Bien-être</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-teal text-white relative overflow-hidden" id="about">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div className="w-full md:w-1/2">
<div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl border border-white/10">

<img alt="Fiona" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa924781-54d0-4f1a-9660-0b85032885f4_3840w.jpg"/>
</div>
</div>
<div className="w-full md:w-1/2">
<p className="text-brand-rose font-medium tracking-widest uppercase text-sm mb-4">À propos de l'institut</p>
<h2 className="font-serif text-4xl lg:text-5xl font-medium mb-8">Votre beauté est ma passion</h2>
<p className="text-lg text-stone-200 mb-6 leading-relaxed font-light">
                        "Je suis Fiona, fondatrice de l'Institut L’essentiel. Mon ambition est de créer un espace où chaque femme peut se reconnecter à elle-même."
                    </p>
<p className="text-lg text-stone-200 mb-10 leading-relaxed font-light">
                        Diplômée et passionnée, je sélectionne rigoureusement mes techniques et produits pour vous offrir une expérience qui allie efficacité esthétique et bien-être profond.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="font-serif text-3xl font-medium text-center text-stone-900 mb-12">Instants de beauté</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-2 hover:text-brand-teal transition-colors text-stone-500" href="https://www.instagram.com/lessentieldefiona/">
<i className="h-5 w-5" data-lucide="instagram"></i> Suivez-nous sur Instagram
                </a>
</div>
</div>
</section>

<section className="bg-stone-50 py-24 border-t border-stone-200" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="">
<h2 className="font-serif text-3xl font-medium text-stone-900 mb-8">Nous rendre visite</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-white rounded-full text-brand-teal shadow-sm"><i className="h-5 w-5" data-lucide="map-pin"></i></div>
<div className="">
<h4 className="font-medium text-stone-900">L’essentiel de Fiona</h4>
<p className="text-stone-600 mt-1">9 Rue Henri IV, <br/>81220 Saint-Paul-Cap-de-Joux France</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-white rounded-full text-brand-teal shadow-sm"><i className="h-5 w-5" data-lucide="phone"></i></div>
<div className="">
<h4 className="font-medium text-stone-900">Téléphone</h4>
<p className="text-stone-600 mt-1">05 67 46 82 66</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-2 bg-white rounded-full text-brand-teal shadow-sm"><i className="h-5 w-5" data-lucide="clock"></i></div>
<div className="">
<h4 className="font-medium text-stone-900">Horaires</h4>
<ul className="text-stone-600 mt-1 space-y-1">
<li className="flex justify-between w-48"><span className="">Lun - Ven:</span> <span className="">9h00 - 19h00</span></li>
<li className="flex justify-between w-48"><span className="">Samedi:</span> <span className="">9h00 - 17h00</span></li>
<li className="flex justify-between w-48"><span className="">Dimanche:</span> <span>Fermé</span></li>
</ul>
</div>
</div>
</div>
</div>

<div className="h-80 md:h-full w-full rounded-2xl overflow-hidden bg-stone-200 relative shadow-inner">
<img alt="Map background" className="opacity-60 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5aa43b8-c88b-49ca-97bd-3e79196abdfa_800w.png"/>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="bg-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
<span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
<span className="font-medium text-stone-900">Saint-Paul-Cap-de-Toul</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-2">
<i className="h-6 w-6 text-brand-teal" data-lucide="flower-2"></i>
<span className="font-serif text-xl font-medium tracking-tight text-stone-900">
                        L’essentiel de Fiona
                    </span>
</div>
<div className="flex gap-6 gap-x-6 gap-y-6">
<a className="text-stone-400 hover:text-brand-teal transition-colors" href="#"><i className="h-5 w-5" data-lucide="facebook"></i></a>
<a className="hover:text-brand-teal transition-colors text-stone-400" href="https://www.instagram.com/lessentieldefiona/"><i className="h-5 w-5" data-lucide="instagram"></i></a>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-400">
<p className="">© 2026 L’essentiel de Fiona. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-600 transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-stone-600 transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-stone-200 md:hidden z-50">
<a className="flex items-center justify-center w-full py-3.5 bg-brand-teal text-white rounded-full font-medium shadow-lg hover:bg-stone-800 transition-colors" href="https://www.planity.com/">
            Prendre rendez-vous
        </a>
</div>


    </>
  );
}
