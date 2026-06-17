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
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#FAF9F6', /* Off-white paper */
100: '#F5F5F4',
200: '#E7E5E4',
300: '#D6D3D1',
800: '#292524',
900: '#1C1917',
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiLz4KPC9zdmc+')",
},
animation: {
'marquee': 'marquee 25s linear infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Navbar Logic
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-stone-200/50', 'text-stone-900');
                nav.classList.remove('mix-blend-difference', 'text-white');
            } else {
                nav.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-stone-200/50', 'text-stone-900');
                nav.classList.add('mix-blend-difference', 'text-white');
            }
        });

        // Parallax Effect & Smooth Reveal
        document.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            
            // Hero Parallax
            const parallaxImg = document.querySelector('.parallax-img');
            if(parallaxImg) {
                parallaxImg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
            }

            // Reveal Text Animation
            const revealItems = document.querySelectorAll('.reveal-item');
            revealItems.forEach((item, index) => {
                const triggerBottom = window.innerHeight * 0.8;
                const itemTop = item.getBoundingClientRect().top;
                
                if(itemTop < triggerBottom) {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }
            });
        });

        // Simple On-Load Animation
        window.onload = () => {
            const heroText = document.querySelectorAll('.reveal-item');
            heroText.forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.8s ease-out';
                el.style.transitionDelay = `${i * 0.2}s`;
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100);
            });
        };
    
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
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference text-white py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-500" id="navbar">
<div className="flex items-center gap-8">
<button className="group flex flex-col gap-1.5 w-8 cursor-pointer">
<span className="block w-full h-[1px] bg-white group-hover:w-1/2 transition-all duration-300"></span>
<span className="block w-full h-[1px] bg-white transition-all duration-300"></span>
<span className="block w-1/2 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
</button>
<div className="hidden md:flex gap-6 text-xs font-medium tracking-widest uppercase opacity-0 md:opacity-100 transition-opacity duration-700 delay-100">
<a className="hover:opacity-60 transition-opacity" href="#">Nouveautés</a>
<a className="hover:opacity-60 transition-opacity" href="#">Créateurs</a>
<a className="hover:opacity-60 transition-opacity" href="#">Éditorial</a>
</div>
</div>
<a className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-tighter font-medium uppercase mix-blend-exclusion" href="#">
            L'Archive
        </a>
<div className="flex items-center gap-6">
<a className="hidden md:block text-xs font-medium tracking-widest uppercase hover:opacity-60 transition-opacity" href="#">Compte</a>
<div className="flex gap-4">
<button className="hover:scale-110 transition-transform"><i data-lucide="search" height="20" strokeWidth="1.5" width="20"></i></button>
<button className="hover:scale-110 transition-transform"><i data-lucide="shopping-bag" height="20" strokeWidth="1.5" width="20"></i></button>
</div>
</div>
</nav>

<header className="relative w-full h-[110vh] overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 z-0 bg-stone-900">

<img alt="Vintage Fashion" className="w-full h-full object-cover opacity-80 parallax-img scale-110" data-speed="0.5" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center text-white mix-blend-overlay flex flex-col items-center gap-6 px-4">
<span className="text-xs md:text-sm tracking-[0.3em] uppercase opacity-80 reveal-item">Collection Printemps 1994</span>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] reveal-item">
<span className="block">Élégance</span>
<span className="block italic font-light ml-12 md:ml-24">Intemporelle</span>
</h1>
<div className="mt-12 reveal-item">
<a className="inline-flex items-center gap-2 text-xs tracking-widest uppercase border-b border-white/40 pb-1 hover:border-white transition-all" href="#collection">
                    Découvrir La Sélection <i data-lucide="arrow-down" height="14" width="14"></i>
</a>
</div>
</div>
</header>

<section className="py-24 md:py-40 px-6 md:px-12 border-b border-stone-200 bg-stone-50 relative z-20">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4 sticky top-32">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6 leading-none">
                    L'art de<br/>la mode<br/><span className="italic text-stone-500">oubliée.</span>
</h2>
<p className="text-stone-500 text-sm leading-relaxed max-w-xs mb-8 text-justify">
                    Nous parcourons Paris à la recherche de pièces rares. Du prêt-à-porter de luxe des années 90 aux pièces uniques de couture, chaque vêtement raconte une histoire de savoir-faire et d'audace.
                </p>
<a className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-stone-900" href="#">
                    Notre Manifeste 
                    <i className="group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" width="16"></i>
</a>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 md:pt-0">

<div className="relative group cursor-pointer overflow-hidden aspect-[3/4] md:translate-y-24 transition-transform duration-700">
<img alt="Chanel Vintage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<p className="text-white font-serif text-xl italic">Chanel, 1992</p>
</div>
</div>
<div className="relative group cursor-pointer overflow-hidden aspect-[3/4] transition-transform duration-700">
<img alt="YSL Vintage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<p className="text-white font-serif text-xl italic">Yves Saint Laurent, 1988</p>
</div>
</div>
</div>
</div>
</section>

<div className="py-6 border-b border-stone-200 overflow-hidden bg-stone-900 text-stone-50 flex whitespace-nowrap">
<div className="animate-marquee flex gap-12 items-center">
<span className="font-serif text-4xl italic px-4">Yves Saint Laurent</span>
<span className="w-2 h-2 rounded-full bg-stone-600"></span>
<span className="font-serif text-4xl italic px-4">Jean Paul Gaultier</span>
<span className="w-2 h-2 rounded-full bg-stone-600"></span>
<span className="font-serif text-4xl italic px-4">Christian Dior</span>
<span className="w-2 h-2 rounded-full bg-stone-600"></span>
<span className="font-serif text-4xl italic px-4">Maison Margiela</span>
<span className="w-2 h-2 rounded-full bg-stone-600"></span>
<span className="font-serif text-4xl italic px-4">Comme des Garçons</span>
<span className="w-2 h-2 rounded-full bg-stone-600"></span>

<span className="font-serif text-4xl italic px-4">Yves Saint Laurent</span>
<span className="w-2 h-2 rounded-full bg-stone-600"></span>
<span className="font-serif text-4xl italic px-4">Jean Paul Gaultier</span>
<span className="w-2 h-2 rounded-full bg-stone-600"></span>
<span className="font-serif text-4xl italic px-4">Christian Dior</span>
<span className="w-2 h-2 rounded-full bg-stone-600"></span>
<span className="font-serif text-4xl italic px-4">Maison Margiela</span>
<span className="w-2 h-2 rounded-full bg-stone-600"></span>
<span className="font-serif text-4xl italic px-4">Comme des Garçons</span>
</div>
</div>

<section className="min-h-screen flex flex-col md:flex-row" id="collection">

<aside className="w-full md:w-64 border-r border-stone-200 p-6 md:p-8 md:sticky md:top-20 h-auto md:h-screen overflow-y-auto bg-stone-50 z-30">
<div className="flex justify-between items-center mb-8">
<h3 className="font-serif text-xl italic">Filtres</h3>
<button className="text-xs uppercase tracking-widest text-stone-400 hover:text-stone-900">Reset</button>
</div>
<div className="space-y-8">

<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-stone-900">Catégorie</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 rounded-[2px] flex items-center justify-center transition-colors group-hover:border-stone-500 bg-white">
<i className="text-white opacity-0 transform scale-50 transition-all" data-lucide="check" height="10" strokeWidth="3" width="10"></i>
</div>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Robes &amp; Soirée</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group custom-checkbox">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 rounded-[2px] flex items-center justify-center transition-colors group-hover:border-stone-500 bg-white">
<i className="text-white opacity-0 transform scale-50 transition-all" data-lucide="check" height="10" strokeWidth="3" width="10"></i>
</div>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Blazers</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 rounded-[2px] flex items-center justify-center transition-colors group-hover:border-stone-500 bg-white">
<i className="text-white opacity-0 transform scale-50 transition-all" data-lucide="check" height="10" strokeWidth="3" width="10"></i>
</div>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Accessoires</span>
</label>
</div>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-stone-900">Prix</h4>
<div className="relative h-1 bg-stone-200 rounded-full mb-4">
<div className="absolute left-0 top-0 h-full bg-stone-900 w-2/3 rounded-full"></div>
<div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-stone-900 rounded-full cursor-grab hover:scale-125 transition-transform"></div>
</div>
<div className="flex justify-between text-xs text-stone-500 font-medium">
<span>0€</span>
<span>850€</span>
</div>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-stone-900">Palette</h4>
<div className="flex gap-2">
<button className="w-6 h-6 rounded-full bg-stone-900 border border-transparent focus:ring-1 focus:ring-offset-2 focus:ring-stone-900"></button>
<button className="w-6 h-6 rounded-full bg-stone-200 border border-transparent focus:ring-1 focus:ring-offset-2 focus:ring-stone-400"></button>
<button className="w-6 h-6 rounded-full bg-[#8C3A3A] border border-transparent focus:ring-1 focus:ring-offset-2 focus:ring-[#8C3A3A]"></button>
<button className="w-6 h-6 rounded-full bg-[#D4AF37] border border-transparent focus:ring-1 focus:ring-offset-2 focus:ring-[#D4AF37]"></button>
</div>
</div>
</div>
</aside>

<main className="flex-1 p-6 md:p-12">
<header className="flex justify-between items-end mb-12">
<h2 className="font-serif text-3xl tracking-tight">Nouveautés</h2>
<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-stone-500">
<span>Trier par:</span>
<button className="text-stone-900 flex items-center">Date <i className="ml-1" data-lucide="chevron-down" width="14"></i></button>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">

<article className="group cursor-pointer flex flex-col gap-4">
<div className="relative overflow-hidden aspect-[4/5] bg-stone-200">

<img alt="Product" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<img alt="Product Hover" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white/90 backdrop-blur text-stone-900 p-2.5 rounded-full hover:bg-stone-900 hover:text-white transition-colors">
<i data-lucide="plus" height="18" width="18"></i>
</button>
</div>
<div className="absolute top-4 left-4">
<span className="bg-stone-900 text-white text-[10px] uppercase tracking-widest px-2 py-1">Rare</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg leading-tight group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">Blazer Croisé Laine</h3>
<p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Céline, 1998</p>
</div>
<span className="text-sm font-medium">450€</span>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="relative overflow-hidden aspect-[4/5] bg-stone-200">
<img alt="Product" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
<button className="bg-white/90 backdrop-blur text-stone-900 p-2.5 rounded-full hover:bg-stone-900 hover:text-white transition-colors">
<i data-lucide="plus" height="18" width="18"></i>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg leading-tight group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">Robe Soie Noir</h3>
<p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Givenchy, 2001</p>
</div>
<span className="text-sm font-medium">890€</span>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="relative overflow-hidden aspect-[4/5] bg-stone-200">
<img alt="Product" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
<button className="bg-white/90 backdrop-blur text-stone-900 p-2.5 rounded-full hover:bg-stone-900 hover:text-white transition-colors">
<i data-lucide="plus" height="18" width="18"></i>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg leading-tight group-hover:underline decoration-stone-300 underline-offset-4 decoration-1">Sac Cuir Vintage</h3>
<p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Hermès, 1985</p>
</div>
<span className="text-sm font-medium">1.200€</span>
</div>
</article>

<article className="group cursor-pointer flex flex-col gap-4">
<div className="relative overflow-hidden aspect-[4/5] bg-stone-200">
<img alt="Product" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4">
<span className="bg-stone-200 text-stone-900 text-[10px] uppercase tracking-widest px-2 py-1">Vendu</span>
</div>
</div>
<div className="flex justify-between items-start opacity-60">
<div>
<h3 className="font-serif text-lg leading-tight">Veste Tweed</h3>
<p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Chanel, 1992</p>
</div>
<span className="text-sm font-medium line-through">1.450€</span>
</div>
</article>

<div className="md:col-span-2 relative bg-stone-900 aspect-[16/9] md:aspect-auto overflow-hidden flex items-center justify-center text-center p-8 group">
<img alt="Editorial" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 border border-white/30 p-8 md:p-12 backdrop-blur-sm">
<span className="text-white/80 text-xs uppercase tracking-[0.2em] mb-4 block">Édition Spéciale</span>
<h3 className="font-serif text-3xl md:text-5xl text-white italic mb-6">"Le Minimalisme<br/>Avant-Garde"</h3>
<button className="text-white text-xs uppercase tracking-widest border-b border-white hover:text-stone-300 hover:border-stone-300 transition-colors pb-1">Lire l'article</button>
</div>
</div>
</div>
<div className="mt-20 flex justify-center">
<button className="border border-stone-300 px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300">
                    Charger Plus
                </button>
</div>
</main>
</section>

<div className="py-24 bg-stone-100 flex justify-center items-center overflow-hidden relative">
<div className="absolute inset-0 opacity-5 bg-noise"></div>
<div className="text-center relative z-10">
<i className="mx-auto mb-6 text-stone-400 font-light animate-spin-slow" data-lucide="flower-2" height="48" style={{animationDuration: '10s'}} width="48"></i>
<p className="font-serif text-2xl md:text-4xl italic text-stone-400">"La mode se démode,<br/>le style jamais."</p>
<p className="text-[10px] uppercase tracking-widest mt-4 text-stone-400">— Coco Chanel</p>
</div>
</div>

<footer className="bg-stone-900 text-stone-300 pt-20 pb-8 px-6 md:px-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 border-b border-stone-800 pb-20">
<div>
<h3 className="font-serif text-3xl md:text-5xl text-white mb-6">Restez Connecté</h3>
<p className="text-stone-500 text-sm mb-8 max-w-md">Inscrivez-vous à notre lettre d'information pour recevoir en avant-première nos dernières trouvailles et éditoriaux exclusifs.</p>
<form className="flex border-b border-stone-700 pb-2 group focus-within:border-white transition-colors">
<input className="bg-transparent w-full outline-none text-white placeholder-stone-600 font-serif italic text-lg" placeholder="votre@email.com" type="email"/>
<button className="uppercase text-xs tracking-widest text-stone-500 group-focus-within:text-white transition-colors" type="submit">S'inscrire</button>
</form>
</div>
<div className="grid grid-cols-2 gap-8 text-xs tracking-widest uppercase">
<div>
<h4 className="text-white mb-6">Boutique</h4>
<ul className="space-y-4 text-stone-500">
<li><a className="hover:text-white transition-colors" href="#">Nouveautés</a></li>
<li><a className="hover:text-white transition-colors" href="#">Créateurs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessoires</a></li>
<li><a className="hover:text-white transition-colors" href="#">Soldes</a></li>
</ul>
</div>
<div>
<h4 className="text-white mb-6">Maison</h4>
<ul className="space-y-4 text-stone-500">
<li><a className="hover:text-white transition-colors" href="#">À Propos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Livraison</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<span className="font-serif text-2xl tracking-tighter text-white">L'ARCHIVE</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><i data-lucide="instagram" width="18"></i></a>
<a className="hover:text-white transition-colors" href="#"><i data-lucide="facebook" width="18"></i></a>
<a className="hover:text-white transition-colors" href="#"><i data-lucide="twitter" width="18"></i></a>
</div>
<p className="text-[10px] uppercase text-stone-600">© 2024 L'Archive Paris. Tous droits réservés.</p>
</div>
</div>

<div className="absolute -bottom-10 left-0 w-full text-center pointer-events-none opacity-[0.03]">
<span className="text-[15vw] leading-none font-serif font-black text-white tracking-tighter">VINTAGE</span>
</div>
</footer>



    </>
  );
}
